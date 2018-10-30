//  This is the server-side rule engine. It processes the rules and states and then emits directions back to the client.

var Player = require('./player').Player;
var uuid = require('uuid/v4');

class Septikon {
    
	constructor(io) {
        this.io = io;
        this.playersArray = [];
        this.gameState = 0;
        this.turnState = 0;
        this.activePlayer = null;
        this.currentDiceValue = 0;
        this.gameStateEnum = Object.freeze({
            SETUP: 0,
            GAME: 1, 
            PAUSE: 2,
            GAMEOVER: 3,
            SERVERFULL: 4
        });
        this.turnStateEnum = Object.freeze({
            ROLL: 0,    // Literally the act of rolling the die
            MOVE: 1,    // Selecting the clone and their target space
            ACTION: 2,  // Trigger tile  
            TARGETS: 3, // Assign target(s) (ie. - gunner, tile, espionaged clone) 
            BIODRONE: 4,// Move biodrone(s)
            ORDNANCE: 5,// move ordnance according to dice roll (this may not require a state...)
            END: 6      // assess ordnance damage and clone/biodrone kills. Assess victory conditions (this may not require a state...)
        });  
        this.directionEnum = Object.freeze({
            NORTH:1,
            EAST:2,
            SOUTH:4,
            WEST:8
        });
        this.tileColumns = 31;
        this.tileRows = 21;
        this.tileArray = [];
        this.createTileArray(); 
        this.actionTile = null;
        this.queuedForAction = [];
        this.readyForConfirmation = false;
    }
    
    processClick(data) {
        // What is always true of a click?
        //  - send tile details to the client
        //  - send occupant details to client (if any)
        //  - successful interactions (like moving a clone) should emit to client ONLY from this function.

        let player = this.getPlayerBySocketID(data.socketID); // This is ONLY used for SETUP.

        // (1) Check gamestate
        // (2) Check turnphase
        // (3) Check phasestep

        switch (this.gameState){
            case this.gameStateEnum.SETUP:            
                if (data.event === "confirmClicked" && player.readyToStart === false) {
                    if (player.personnelArray.length === player.startingCloneCount) {
                        this.setPlayerState(data);
                        this.emit('request', {callback:"modal", details: {type:"askStart"}}, player.socketID);
                    }
                } else if (data.event === "tileClicked" && player.readyToStart === false) {
                    let selectedTile = this.getTile(data.x, data.y);
                    for (let i = 0; i < player.personnelArray.length; i++) {
                        let personnel = player.personnelArray[i];
                        if (data.x === personnel.x && data.y === personnel.y) {
                            player.personnelArray.splice(i,1);
                            selectedTile.occupied = false;
                            this.emit('update', {type:"personnel", details: {personnel: personnel, action: 'delete', playerID: player.id}});
                            this.emit('update', {type:"tile", details: {x:data.x, y:data.y, action: 'update', tile: selectedTile}});
                            return;
                        }
                    }
                    let clone = this.placeClone(player, data.x, data.y);
                    if (clone !== false) {
                        if (selectedTile.type === "surface") {
                            player.setCloneGunnerByUUID(clone.uuid);
                        }

                        selectedTile.occupied = true;
                        this.emit('update', {type:"personnel", details: {personnel: clone, action: 'create', playerID: player.id}});
                        this.emit('update', {type:"tile", details: {x:data.x, y:data.y, action: 'update', tile: selectedTile}});
                    }
                }
                break;
            case this.gameStateEnum.GAME:
                switch (this.turnState) {
                    case this.turnStateEnum.ROLL:
                        if (data.event === "diceClicked" && this.activePlayer.socketID === data.socketID) {
                            this.currentDiceValue = Math.floor(Math.random() * 6) + 1;
                            this.activePlayer.currentLegalPieces = this.getLegalPieces();
                            this.emit('update', { type: "dice", details: { value: this.currentDiceValue, gamePieces: this.activePlayer.currentLegalPieces } });
                            this.turnState++;
                        }
                        break;
                    case this.turnStateEnum.MOVE:
                        if (data.event === "tileClicked") {
                            let selectedClone = this.activePlayer.getPersonnelByPoint({x:data.x, y:data.y}, "clone");
                            if (selectedClone !== false) {
                                if (this.activePlayer.selectedPersonnelToMove === null || this.activePlayer.selectedPersonnelToMove !== selectedClone) {
                                    this.activePlayer.selectedPersonnelToMove = selectedClone;
                                    let pointArray = this.getLegalMoves(selectedClone, this.currentDiceValue, {x:selectedClone.x, y:selectedClone.y});
                                    this.emit('action', {callback: 'hideTiles', details: null});
                                    this.emit('action', {callback: 'showTiles', details: [{x:data.x, y:data.y}]}, this.activePlayer.socketID);
                                    this.emit('action', {callback: 'showTiles', details: pointArray}, this.activePlayer.socketID);
                                } else {
                                    this.emit('action', {callback: 'hideTiles', details: null});
                                    this.activePlayer.selectedPersonnelToMove = null;
                                }
                            } else {
                                if (this.activePlayer.selectedPersonnelToMove !== null && this.activePlayer.checkPersonnelMove(this.activePlayer.selectedPersonnelToMove, { x: data.x, y: data.y }) === true) {
                                    this.emit('action', {callback: 'hideTiles', details: null});
                                    let targetTile = this.getTile(data.x, data.y);
                                    this.processPersonnelMove(this.activePlayer.selectedPersonnelToMove, targetTile);
                                    if (targetTile.type !== "battle" && targetTile.name !== "nuclearArmory" && targetTile.name !== "prodRepair") {
                                        this.processTileActivation(targetTile, this.activePlayer);
                                        let biodrones = this.activePlayer.getPersonnel('biodrone');
                                        if (biodrones === false) {
                                            let ordnance = this.activePlayer.getOrdnance();
                                            if (ordnance === false) {
                                                this.turnState += 4;
                                                
                                                // TODO: process end of turn
                                                this.processEndOfTurn();
                                            } else {
                                                this.turnState += 3;
                                                // TODO: process ordnance movement
                                            }
                                        } else {
                                            this.turnState +=2;
                                            // TODO: Process biodrone movement
                                        }
                                    } else {
                                        this.queuedForAction = [];
                                        this.actionTile = targetTile;
                                        this.turnState++;
                                    }
                                }
                            }
                        }
                        break;
                    case this.turnStateEnum.ACTION:
                        let targetTile = this.getTile(data.x, data.y);
                        this.emit('action', {callback: 'hideTiles', details: null});

                        if (data.event === "tileClicked") {
                            if (this.actionTile.type === "battle" && this.actionTile.name !== "repair" && this.actionTile.name !== "repairTwo") {
                                this.readyForConfirmation = true;
                                let selectedGunner = this.activePlayer.getPersonnelByPoint({x:data.x, y:data.y});
                                if (selectedGunner !== false && selectedGunner.isGunner === true) {
                                    let gunnerUnqueued = false;
                                    this.emit('action', {callback: 'hideTiles', details: null});
                                    for (let i in this.queuedForAction) {
                                        if (this.queuedForAction[i] === selectedGunner) {
                                            this.queuedForAction.splice(i, 1);
                                            gunnerUnqueued = true;
                                        } else {
                                            this.emit('action', {callback: 'showTiles', details: [{x:this.queuedForAction[i].x, y:this.queuedForAction[i].y}]}, this.activePlayer.socketID);
                                        }
                                    }
                                    if (gunnerUnqueued === false) {
                                        let resCount = [];
                                        for (let i in this.actionTile.properties.resourceCostCount) {
                                            resCount[i] = (this.actionTile.properties.resourceCostCount[i] * (this.queuedForAction.length+1));
                                        }
                                        let canAfford = this.activePlayer.checkResource(this.actionTile.properties.resourceCostType, resCount);
                                        if (canAfford === true) {
                                            this.queuedForAction.push(selectedGunner);
                                            this.emit('action', {callback: 'showTiles', details: [{x:selectedGunner.x, y:selectedGunner.y}]});
                                        }

                                    }
                                }
                            }
                            else if (this.actionTile.name === "repair" || this.actionTile.name === "repairTwo" || this.actionTile.name === "prodRepair") {
                                this.readyForConfirmation = true;
                                let canAfford = this.activePlayer.checkResource(this.actionTile.properties.resourceCostType, this.actionTile.properties.resourceCostCount);
                                if (canAfford === false) {
                                    return;
                                } else if (targetTile.damaged === true) {
                                    for (let i in this.queuedForAction) {
                                        if (targetTile === this.queuedForAction[i]) {
                                            this.queuedForAction.splice(i, 1);
                                            return;
                                        }
                                    }
                                    if (this.actionTile.name === "repairTwo") {
                                        if (this.queuedForAction.length === 2) {
                                            this.queuedForAction.shift();
                                        }
                                    } else {
                                        if (this.queuedForAction.length === 1) {
                                            this.queuedForAction.shift();
                                        }
                                    }
                                    this.queuedForAction.push(targetTile);
                                    for (let i in this.queuedForAction) {
                                        this.emit('action', {callback: 'showTiles', details: [{x:this.queuedForAction[i].x, y:this.queuedForAction[i].y}]});
                                    }
                                }
                            } else if (this.actionTile.name === "nuclearArmory") {
                                if (targetTile.name === "rocket" && this.activePlayer.id === targetTile.owner) {
                                    let rocketArray = this.activePlayer.getResourceArray('rocket')[0];
                                    let rocket = null;
                                    if (targetTile.x === 4) {
                                        rocket = rocketArray[targetTile.y];
                                    } else {
                                        rocket = rocketArray[(targetTile.y-20)*(-1)];
                                    }
                                    if (rocket === null || rocket.isNuke === true) {
                                        return;
                                    } else {
                                        rocket.isNuke = true;
                                        this.readyForConfirmation = false;
                                        this.queuedForAction = [];
                                        let biodrones = this.activePlayer.getPersonnel('biodrone');
                                        if (biodrones === false) {
                                            let ordnance = this.activePlayer.getOrdnance();
                                            if (ordnance === false) {
                                                this.turnState += 3;
                                                // TODO: process end of turn
                                                this.processEndOfTurn();
                                            } else {
                                                this.turnState += 2;
                                                // TODO: process ordnance movement
                                            }
                                        } else {
                                            this.turnState++;
                                            // TODO: Process biodrone movement
                                        }
                                        // TODO: emit nuke armament.
                                    }
                                }
                            } else if (this.actionTile.name === "counterEspionage") {
                                // IF tile requires an espionaged clone, check that selected is an espionaged clone.
                            }
                        } else if (data.event === "confirmClicked") {
                            if (this.readyForConfirmation === true) {
                                if (this.queuedForAction.length > 0) {
                                    this.processTileActivation(this.actionTile, this.activePlayer);
                                }
                                this.readyForConfirmation = false;
                                this.queuedForAction = [];
                                let biodrones = this.activePlayer.getPersonnel('biodrone');
                                if (biodrones === false) {
                                    let ordnance = this.activePlayer.getOrdnance();
                                    if (ordnance === false) {
                                        this.turnState += 3;
                                        // TODO: process end of turn
                                        this.processEndOfTurn();
                                    } else {
                                        this.turnState += 2;
                                        // TODO: process ordnance movement
                                    }
                                } else {
                                    this.turnState++;
                                    // TODO: Process biodrone movement
                                }
                            }
                        }
                        break;
                    case this.turnStateEnum.BIODRONE:
                        // Check for biodrones in the enemy base
                        switch (this.phaseState) {
                            case this.phaseStateEnum.OBJECT:
                                break;
                            case this.phaseStateEnum.TILE:
                                break;
                            case this.phaseStateEnum.CONFIRM:
                                break;
                        }
                        break;
                    case this.turnStateEnum.ORDNANCE:
                        switch (this.phaseState) {
                            case this.phaseStateEnum.OBJECT:
                                break;
                            case this.phaseStateEnum.TILE:
                                break;
                        }
                        break;
                    case this.turnStateEnum.END:
                        break;
                }
                break;
            case this.gameStateEnum.PAUSE:
            case this.gameStateEnum.GAMEOVER:
            case this.gameStateEnum.SERVERFULL:
                break;
            }
    }

    processPersonnelMove(personnel, targetTile) {
        let originalTile = this.getTile(personnel.x, personnel.y);
        targetTile.occupied = true;
        originalTile.occupied = false;
        personnel.move(targetTile.x, targetTile.y);
        if (originalTile.type === "surface" && personnel.type === personnel.typeEnum["clone".toUpperCase()]) {
            this.activePlayer.unsetCloneGunnerByUUID(personnel.uuid);
        }
        if (targetTile.type === "surface") {
            this.activePlayer.setCloneGunnerByUUID(personnel.uuid);
        }
        this.emit('update', { type: "personnel", details: { personnel: personnel, action: 'update', playerID: this.activePlayer.id } });
        this.emit('update', { type: "tile", details: { x: originalTile.x, y: originalTile.y, action: 'update', tile: originalTile } });
        this.emit('update', { type: "tile", details: { x: targetTile.x, y: targetTile.y, action: 'update', tile: targetTile } });
        if (originalTile.type === "armory") {
            this.activePlayer.removeArms(originalTile.name.toUpperCase());
            this.emit('update', { type: "arms", details: { type: originalTile.name, action: "delete" } });
        }
        if (targetTile.type === "armory") {
            this.activePlayer.addArms(targetTile.name.toUpperCase());
            this.emit('update', { type: "arms", details: { type: targetTile.name, action: "create" } });
        }
        // TODO: activate battle (optional). Eventually, biodrone movement will have ability to destroy crap too. ;)
        // TODO: optional tiles (battle and repair) need client confirmation
    }

    processTileActivation(actionTile, player) {

        if (actionTile.type === "production") {
            let resCostType = null;
            let resCostCount = 0;
            let resYieldType = actionTile.properties.resourceYieldType;
            let resYieldCount = actionTile.properties.resourceYieldCount;
            if (typeof actionTile.properties.resourceCostCount !== 'undefined') {
                resCostCount = actionTile.properties.resourceCostCount;
                resCostType = actionTile.properties.resourceCostType;
            }
            // SensorCabin requires a target biodrone in this player's base
            if (actionTile.name === "sensorCabin") {
                return;
            } else if (actionTile.name === "prodRepair") {
                for (let i in this.queuedForAction) {
                    let t = this.tileArray[this.queuedForAction[i].x][this.queuedForAction[i].y];
                    this.tileArray[t.x][t.y].damaged = false;
                    this.emit('update', { type: "tile", details: { x:t.x, y:t.y, action: 'update', tile: t } });
                    // this.emit('action', {callback:"repairTile" ,details:{x:this.queuedForAction[i].x, y:this.queuedForAction[i].y}});
                }
                this.activePlayer.spendResource(t.properties.resourceCostType, t.properties.resourceCostCount);
            } else if (actionTile.name === "nuclearArmory") {
                return;
            } else {
                // TODO: Oxygen production tests for new clone creation!

                this.activePlayer.produceResource(resCostType, resCostCount, resYieldType, resYieldCount);
                this.emit('update', {type:"resource", details: {action: 'update', resourceArray: this.activePlayer.getResourceArray()}});
                // this.emit('update', {type:"resource", details: {resCostType:resCostType, resCostCount:resCostCount, resYieldType:resYieldType, resYieldCount:resYieldCount}});
                return;
            }
        } else if (actionTile.type === "battle") {
            let resCostType = actionTile.properties.resourceCostType;
            let resCostCount = actionTile.properties.resourceCostCount;
            if (actionTile.name === "repair" || actionTile.name === "repairTwo" ) {
                for (let i in this.queuedForAction) {
                    let qAction = this.queuedForAction[i];
                    let t = this.tileArray[qAction.x][qAction.y];
                    t.damaged = false;
                    this.emit('update', { type: "tile", details: { x:t.x, y:t.y, action: 'update', tile: t } });
                    // this.emit('action', {callback:"repairTile" ,details:{x:this.qAction.x, y:qAction.y}});
                }
                this.activePlayer.spendResource(resCostType, resCostCount);
            } else if (actionTile.name === "counterEspionage") {
                let controlledClones = player.getEspionagedClones();
                if (controlledClones.length > 0) {
                    // Request selection from client
                }
            } else {
                let gunnerArray = player.getGunners();
                if (gunnerArray.length > 0) {
                    this.fireWeapon(actionTile, gunnerArray);
                    // Request gunner selection from client limited by number of available resources.
                }
            }
            return;
        }    
    }

    processEndOfTurn() {
        console.log ("next player's turn");
        this.changeActivePlayer();
        this.actionTile = null;
        this.queuedForAction = [];
        this.readyForConfirmation = false;
    }

	addNewPlayer(socketID, uuid) {
        let currentPlayerCount = this.playersArray.length;
        if (this.currentPlayerCount < 2) {
            let player = new Player(socketID, currentPlayerCount, uuid);
            this.playersArray.push(player);
            this.emit('action', {callback: 'updatePlayer', details: {id: currentPlayerCount}}, socketID);
            return player;
        } else {
            return false;
        }
	}

    addPlayer(player) {
        this.playersArray.push(player);
        this.emit('action', {callback: 'updatePlayer', details: {id: player.id}}, player.socketID);
    }

    setPlayerState(data) {
        let player = this.getPlayerBySocketID(data.socketID);
        let opponent = this.getPlayerOpponent(player);
        player.readyToStart = true;
        if (opponent !== false && opponent.readyToStart !== false) {
            this.activePlayer = this.getRandomPlayer();
            this.gameState++;
        }        
    }

    getPlayerOpponent(player) {
        if (this.playersArray.length == 1) {
            return false;
        }
        if (this.playersArray[0] === player) {
            return this.playersArray[1];
        } else {
            return this.playersArray[0];
        }
    }

    changeActivePlayer() {
        this.activePlayer.clearQueues();
        this.emit('action', {callback:"takeDice", details: {}}, this.activePlayer.socketID);
        this.activePlayer = this.getPlayerOpponent(this.activePlayer);
        this.emit('action', {callback:"offerDice", details: {}}, this.activePlayer.socketID);
        this.turnState = 0;
    }

    getRandomPlayer(){
        return this.playersArray[Math.floor(Math.random()*2)];
    }
    
    getPlayerByUUID(uuid) {
        for (var i in this.playersArray) {
            if(this.playersArray[i].uuid == uuid)
                return this.playersArray[i];
        }
        return null;
    }
    
    getPlayerBySocketID(id) {
        for (var i in this.playersArray) {
            if(this.playersArray[i].socketID == id) {
                return this.playersArray[i];
            }
        }
        return false;
    }
    
    existsPlayerUUID(uuid) {
        for (var i in this.playersArray) {
            if(this.playersArray[i].uuid == uuid)
                return true;
        }
        return false;
    }    

    getTileOccupant(point) {
        var ordnance, personnel;
        for (var pi = 0; pi < this.playersArray.length; pi++) {
            ordnance = this.playersArray[pi].getOrdnanceByPoint(point);
            personnel = this.playersArray[pi].getPersonnelByPoint(point);
            if (ordnance !== false) {
                return ordnance;
            } else if (personnel !== false) {
                return personnel;
            } 
        }
        return false;
    }

    fireWeapon(weaponTile, gunnerArray) {
        if (gunnerArray.length <= 0 ) {
            return false;
        }

        for (let j in weaponTile.properties.resourceCostType) {
            let res = weaponTile.properties.resourceCostType[j];
            let cou = weaponTile.properties.resourceCostCount[j] * gunnerArray.length;
            if (this.activePlayer.checkResource([res], [cou]) === false) {
                return false;
            }
        }

        console.log("Firing " + gunnerArray.length + " times.");

        for (var i = 0; i < gunnerArray.length; i++) {
            var ordnancePoint = {x:gunnerArray[i].x, y:gunnerArray[i].y};
            var impacted = false;
            var ordUUID;

            switch (weaponTile.name) {
                case "laser":
                    var currentTile;
                    var currentOccupant;
                    while (impacted === false) {
                        if (this.activePlayer.id == 1) {
                            ordnancePoint.x++;
                        } else {
                            ordnancePoint.x--;
                        }
                        currentTile = this.getTile(ordnancePoint.x, ordnancePoint.y);
                        if (currentTile === false) {
                            return false;
                        }
                        switch (currentTile.name) {
                            case "space":
                            case "surface":
                                if (currentTile.occupied === true) {
                                    let opponent = this.getPlayerOpponent(this.activePlayer);
                                    currentOccupant = this.getTileOccupant(ordnancePoint);
                                    opponent.remove(currentOccupant);
                                    this.emit('update', {type:"personnel", details: {personnel: currentOccupant, action: 'delete'}});
                                    // this.emit('action', {callback:"removePersonnel", details:currentOccupant});
                                    currentTile.occupied = false;
                                    impacted = true;
                                    this.activePlayer.spendResource(weaponTile.properties.resourceCostType, weaponTile.properties.resourceCostCount);
                                    break;
                                }
                                break;
                            default:
                                if (currentTile.occupied === true) {
                                    let opponent = this.getPlayerOpponent(this.activePlayer);
                                    currentOccupant = this.getTileOccupant(ordnancePoint);
                                    opponent.remove(currentOccupant);
                                    this.emit('update', {type:"personnel", details: {personnel: currentOccupant, action: 'delete'}});
                                    currentTile.occupied = false;
                                    this.emit('update', { type: "tile", details: { x:currentTile.x, y:currentTile.y, action: 'update', tile: currentTile } });
                                    // this.emit('action', {callback:"damageTile" ,details:ordnancePoint});
                                    impacted = true;
                                    break;
                                }
                                if (currentTile.damaged === true) {
                                    break;
                                } else {
                                    currentTile.damaged = true;
                                    this.activePlayer.spendResource(weaponTile.properties.resourceCostType, weaponTile.properties.resourceCostCount);
                                    this.emit('update', { type: "tile", details: { x:currentTile.x, y:currentTile.y, action: 'update', tile: currentTile } });
                                    // this.emit('action', {callback:"damageTile" ,details:ordnancePoint});
                                    impacted = true;
                                    break;
                                }
                        }
                    }
                    break;
                case "shield":
                case "biodrone":
                case "satellite":
                case "rocket":
                    if (this.activePlayer.id == 1) {
                        ordnancePoint.x += this.currentDiceValue;
                    } else {
                        ordnancePoint.x -= this.currentDiceValue;
                    }
                    currentTile = this.getTile(ordnancePoint.x, ordnancePoint.y);
                    ordUUID = uuid();
                    // if (currentTile.isOccupied === true) {
                    //     break;
                    // }
                    this.activePlayer.addOrdnance(weaponTile.name, ordnancePoint, ordUUID);
                    // currentTile.isOccupied = true;
                    this.activePlayer.spendResource(weaponTile.properties.resourceCostType, weaponTile.properties.resourceCostCount);
                    this.emit('action', {type:"ordnance", details:{type:weaponTile.name, playerID: this.activePlayer.id, point:ordnancePoint, uuid:ordUUID}}, this.activePlayer.socketID);
                    // this.emit('action', {callback:"addOrdnance", details:{type:weaponTile.name, playerID: this.activePlayer.id, point:ordnancePoint, uuid:ordUUID}}, this.activePlayer.socketID);
                    //TODO: updatePersonnel on opponent client
                    break;
                case "thermite":
                    if (this.activePlayer.id == 1) {
                        ordnancePoint.x = 31 - this.currentDiceValue;
                    } else {
                        ordnancePoint.x = this.currentDiceValue - 1;
                    }
                    currentTile = this.getTile(ordnancePoint.x, ordnancePoint.y);
                    if (currentTile.damaged === true) {
                        break;
                    } else {
                        currentTile.damaged = true;
                        this.activePlayer.spendResource(weaponTile.properties.resourceCostType, weaponTile.properties.resourceCostCount);
                        this.emit('update', { type: "tile", details: { x:currentTile.x, y:currentTile.y, action: 'update', tile: currentTile } });
                        // this.emit('action', {callback:"damageTile" ,details:ordnancePoint}, this.activePlayer.socketID);
                        break;
                    }
                    break;
                default:
                    console.error("There is a problem with that weaponTile argument");
            }
        }
        return; 
    }

    getLocks(player) {
        var returnArray = [];
        for (var c in this.tileArray) {
            for (var r in this.tileArray[c]) {
                if (this.tileArray[c][r].name == "lock") {
                    if (player) {
                        if (player.id == 1 && c < 12) {
                            returnArray.push(this.tileArray[c][r]);
                        } else if (player.id == 2 && c > 18) {
                            returnArray.push(this.tileArray[c][r]);
                        }
                    } else {
                        returnArray.push(this.tileArray[c][r]);
                    }
                }
            }
        }
        return returnArray;
    }

    getDamagedTiles(player) {
        var returnArray = [];
        for (var c in this.tileArray) {
            for (var r in this.tileArray[c]) {
                if (player) {
                    if (player.id == 1) {
                        if (c < 12 && this.tileArray[c][r].damaged === true) {
                            returnArray.push(this.tileArray[c][r]);
                        } 
                    } else {
                        if (c > 18 && this.tileArray[c][r].damaged === true) {
                            returnArray.push(this.tileArray[c][r]);
                        } 
                    }
                } else {
                    if (this.tileArray[c][r].damaged === true) {
                        returnArray.push(this.tileArray[c][r]);
                    } 
                }
            }
        }
        return returnArray;
    }
    
    placeClone(player, x, y) {

        if (typeof player === 'undefined' || player === null) {
            return false;
        }

        var selectedTile = this.getTile(x, y);
        var clone, cloneUUID;

        if (player.id != selectedTile.owner || selectedTile.occupied === true) {
            return false;
        }

        // if gamestate is SETUP you can place in lock, battle, armory, and production tiles, otherwise only in lock tiles.
        if (this.gameState === this.gameStateEnum.SETUP) {
            if (player.getPersonnel('clone').length === player.startingCloneCount) {
                return false;
            }
            if(selectedTile.type == "lock" || selectedTile.type == "battle" || selectedTile.type == "armory" || selectedTile.type == "production") {
                cloneUUID = uuid();
                clone = player.addPersonnel('clone', x, y, cloneUUID);
                return clone;
            }
        } else  {
            if (selectedTile.type == "lock") {
                cloneUUID = uuid();
                clone = player.addPersonnel('clone', x, y, cloneUUID);
                return clone;
            }
        }
        return false;
    }

    createTileArray() {
        var tileJSON = require('../../assets/tileDetail.json');

        for(var c = 0; c < this.tileColumns; c++) {
            this.tileArray[c] = [];
            for(var r = 0; r < this.tileRows; r++) {
                this.tileArray[c][r] = {
                    x:c,
                    y:r
                };
            }
        }

        for (var key in tileJSON) {
            if (!tileJSON.hasOwnProperty(key)) continue;
            
            var obj = tileJSON[key];
            for (var prop in obj) {
                // skip loop if the property is from prototype
                if(!obj.hasOwnProperty(prop)) continue;
                
                var locationCount = obj[prop].locations.length;
                for (var i = 0; i < locationCount; i++) {
                    
                    var coords = obj[prop].locations[i].split(",");
                    var x = coords[0];
                    var y = coords[1];
                    
                    this.tileArray[x][y].damaged = false;
                    this.tileArray[x][y].occupied = false;
                    this.tileArray[x][y].type = obj[prop].type;
                    if (x < 9) {
                        this.tileArray[x][y].owner = 1;
                    } else if (x > 21) {
                        this.tileArray[x][y].owner = 2;
                    } 

                    if (typeof this.tileArray[x][y] != 'undefined') {
                        this.tileArray[x][y].name = obj[prop].name;
                    }
                    
                    if (typeof obj[prop].properties != 'undefined') {
                        this.tileArray[x][y].properties = obj[prop].properties;
                    }
                }
            }
            
        }
    }

    getTile(x, y) {
        if (x < this.tileColumns && y < this.tileRows) {
            return this.tileArray[x][y];
        } else {
            return false;
        }
    }

    getLegalPieces() {
        var personnelArray = this.activePlayer.getPersonnel();
        var returnArray = [];
        var movesArray = [];

        for (var i in personnelArray) {
            movesArray = this.getLegalMoves(personnelArray[i], this.currentDiceValue, {x:personnelArray[i].x, y:personnelArray[i].y});
            if (movesArray.length > 0) {
                returnArray.push({type:personnelArray[i].type,origin:{x:personnelArray[i].x,y:personnelArray[i].y}, uuid:personnelArray[i].uuid, moves:movesArray});
            }
        }
        return returnArray;
    }

    getCoordFromDirection(originCoord,direction) {
        var dir={NORTH:{x:0,y:-1},EAST:{x:1,y:0},SOUTH:{x:0,y:1},WEST:{x:-1,y:0}};
        
        var obj = {x:(parseInt(originCoord.x) + parseInt(dir[direction].x)), y:(parseInt(originCoord.y) + parseInt(dir[direction].y))};
        if(obj.x < 0 || obj.x > 30|| obj.y < 0 || obj.y > 20) 
            return false;
        else
            return {x:(parseInt(originCoord.x) + parseInt(dir[direction].x)), y:(parseInt(originCoord.y) + parseInt(dir[direction].y))};            
    }

    getLegalMoves(gamePieceType, moves, currentCoord, previousCoord){
        if (moves < 1) {
            console.error("Illegal move number! This could result in infinite loop.");
            return false;
        }
        var legalMoves = [];
        var returnArray = [];
        var nextMoveToCheck = null;
        var nextTileToCheck = null;
        moves--;

        if (typeof previousCoord === 'undefined') {
            var locks = this.getLocks(this.activePlayer);
            var isLock = false;

            for (var l in locks) {
                if (locks[l].x == currentCoord.x && locks[l].y == currentCoord.y) {
                    isLock = true;
                }
            }

            if (isLock === true) {
                for (var i in locks) {
                    if (currentCoord.x == locks[i].x && currentCoord.y == locks[i].y) { continue; } // don't include the lock you're sitting on
                    if (this.tileArray[locks[i].x][locks[i].y].occupied === true) { continue; } // don't include lock that others are sitting on
                    if (moves > 1) {
                        returnArray = returnArray.concat(this.getLegalMoves(gamePieceType, moves, {x:locks[i].x, y:locks[i].y}, currentCoord));
                    } else {
                        returnArray.push(locks[i]);
                    }
                    for (var c in returnArray) {
                        if(returnArray[c].x !== currentCoord.x || returnArray[c].y !== currentCoord.y)
                            legalMoves.push(returnArray[c]);
                    }
                }
            }
        }
        
        for (var direction in this.directionEnum) {
            nextMoveToCheck = this.getCoordFromDirection(currentCoord, direction);
            if(nextMoveToCheck === false) { continue; }
            
            nextTileToCheck = this.tileArray[nextMoveToCheck.x][nextMoveToCheck.y];
            
            if (nextTileToCheck.damaged === true) { continue; }
            if (nextTileToCheck.type === "space") { continue; }
            if (this.checkWall(this.directionEnum[direction], currentCoord) === false) { continue; }

            if((typeof previousCoord === 'undefined') || ((typeof previousCoord !== 'undefined') && (JSON.stringify(nextMoveToCheck) !== JSON.stringify(previousCoord)) )) {
                // Check if tile is occupied
                if (moves === 0){
                    if(nextTileToCheck.occupied === false) {
                        legalMoves.push(nextMoveToCheck);
                    }
                }
                else {
                    returnArray = returnArray.concat(this.getLegalMoves(gamePieceType, moves, nextMoveToCheck, currentCoord));
                    for(var index in returnArray) {
                        if(returnArray[index].x !== currentCoord.x || returnArray[index].y !== currentCoord.y)
                            legalMoves.push(returnArray[index]);
                    }
                }
            }
        }
        return legalMoves;
    }

    checkWall(direction, currentCoordinate) {
        this.wallGrid = require('../../assets/wallGrid.json');

        switch (direction){
            case this.directionEnum.NORTH: // UP
                if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y]&this.directionEnum.NORTH) === 0) {
                    return true;
                }
                return false;
            case this.directionEnum.SOUTH: // DOWN
                if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y]&this.directionEnum.SOUTH) === 0) {
                    return true;
                }
                return false;
            case this.directionEnum.EAST: // RIGHT
                if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y]&this.directionEnum.EAST) === 0) {
                    return true;
                }
                return false;
            case this.directionEnum.WEST: // LEFT
                if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y]&this.directionEnum.WEST) === 0) {
                    return true;
                }
                return false;
            default:
                return false;
        }

    }
    
    emit(msg, data, socketID) {

        if(typeof(socketID) == "undefined") {
            this.broadcast(msg, data);
            return;
        } else {
            this.io.sockets.connected[socketID].emit(msg, data);
        }
    }
    
    broadcast(msg, data) {
        for (let i in this.playersArray) {
            this.emit(msg, data, this.playersArray[i].socketID);
        }
    }
    
    serverFull(player) {
        this.emit('action', {callback: 'serverFull', details: {id: player.id}}, player.socketID);
    }
    
}

module.exports.Septikon = Septikon;
