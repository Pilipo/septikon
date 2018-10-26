//  This is the server-side rule engine. It processes the rules and states and then emits directions back to the client.

var Player = require('./player').Player;
var uuid = require('uuid/v4');

class Septikon {
    
	constructor(io) {
        this.io = io;
        this.lastPlayerID = 0;
        this.playersArray = [];
        this.gameState = 0;
        this.turnState = 0;
        this.phaseState = 0;
        this.uuid = require('uuid/v4')();
        this.sequence = 0;

        this.activePlayer = null;
        this.currentDiceValue = 3;
        
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

        this.phaseStateEnum = Object.freeze({
            OBJECT: 0,
            TILE: 1,
            CONFIRM: 2
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
        // this.availableClonesToAdd = 0;
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
                        // this.emit('request', {callback:"modal", details: {type:"askStart"}}, player.socketID);
                    }
                } else if (data.event === "tileClicked" && player.readyToStart === false) {
                    let selectedTile = this.getTile(data.x, data.y);
                    for (let i = 0; i < player.personnelArray.length; i++) {
                        let personnel = player.personnelArray[i];
                        if (data.x === personnel.x && data.y === personnel.y) {
                            player.personnelArray.splice(i,1);
                            selectedTile.occupied = false;
                            this.emit('update', {type:"personnel", details: {personnel: personnel, action: 'remove', playerID: player.id}});
                            this.emit('update', {type:"tile", details: {x:data.x, y:data.y, tile: selectedTile}});
                            return;
                        }
                    }
                    let clone = this.placeClone(player, data.x, data.y);
                    if (clone !== false) {
                        if (selectedTile.type === "surface") {
                            player.setCloneGunnerByUUID(clone.uuid);
                        }

                        selectedTile.occupied = true;
                        this.emit('update', {type:"personnel", details: {personnel: clone, action: 'add', playerID: player.id}});
                        this.emit('update', {type:"tile", details: {x:data.x, y:data.y, tile: selectedTile}});
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
                                    this.emit('action', {callback: 'showTiles', details: {x:data.x, y:data.y}}, this.activePlayer.socketID);
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
                                        this.turnstate += 2;
                                    } else {
                                        console.log("moving to action step");
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
                                            console.log("unqueuing gunner");
                                            this.queuedForAction.splice(i, 1);
                                            gunnerUnqueued = true;
                                        } else {
                                            this.emit('action', {callback: 'showTiles', details: {x:this.queuedForAction[i].x, y:this.queuedForAction[i].y}});
                                        }
                                    }
                                    if (gunnerUnqueued === false) {
                                        let resCount = [];
                                        for (let i in this.actionTile.properties.resourceCostCount) {
                                            resCount[i] = (this.actionTile.properties.resourceCostCount[i] * (this.queuedForAction.length+1));
                                        }
                                        let canAfford = this.activePlayer.checkResource(this.actionTile.properties.resourceCostType, resCount);
                                        if (canAfford === true) {
                                            console.log("queuing gunner.");
                                            this.queuedForAction.push(selectedGunner);
                                            // TODO: selection isn't working
                                            this.emit('action', {callback: 'showTiles', details: {x:selectedGunner.x, y:selectedGunner.y}});
                                        }

                                    }
                                }
                            }
                            // IF tile requires damaged tile, check if selected is a damaged tile and queue/unqueue
                            else if (this.actionTile.name === "repair" || this.actionTile.name === "repairTwo" || this.actionTile.name === "prodRepair") {
                                if (targetTile.damaged === true) {
                                }
                            }
                            // IF tile requires a rocket resource, check it selected is a filled rocket resource
                            // IF tile requires an espionaged clone, check that selected is an espionaged clone.

                        } else if (data.event === "confirmClicked") {
                            // is the existing selection legal?
                            // if so, FIRE!!!
                            if (this.readyForConfirmation === true) {
                                this.processTileActivation(this.actionTile, this.activePlayer);
                                this.readyForConfirmation = false;
                                this.turnState++;
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
        this.emit('update', { type: "personnel", details: { personnel: personnel, action: 'move', playerID: this.activePlayer.id } });
        this.emit('update', { type: "tile", details: { x: originalTile.x, y: originalTile.y, tile: originalTile } });
        this.emit('update', { type: "tile", details: { x: targetTile.x, y: targetTile.y, tile: targetTile } });
        if (originalTile.type === "armory") {
            this.activePlayer.removeArms(originalTile.name.toUpperCase());
            this.emit('update', { type: "arms", details: { type: originalTile.name, action: "remove" } });
        }
        if (targetTile.type === "armory") {
            this.activePlayer.addArms(targetTile.name.toUpperCase());
            this.emit('update', { type: "arms", details: { type: targetTile.name, action: "add" } });
        }
        // TODO: activate battle (optional). Eventually, biodrone movement will have ability to destroy crap too. ;)
        // TODO: optional tiles (battle and repair) need client confirmation
    }

    processTileActivation(newTile, player) {

        if (newTile.type === "production") {
            let resCostType = null;
            let resCostCount = 0;
            let resYieldType = newTile.properties.resourceYieldType;
            let resYieldCount = newTile.properties.resourceYieldCount;
            if (typeof newTile.properties.resourceCostCount !== 'undefined') {
                resCostCount = newTile.properties.resourceCostCount;
                resCostType = newTile.properties.resourceCostType;
            }
            // SensorCabin requires a target biodrone in this player's base
            if (newTile.name === "sensorCabin") {
                return;
            }
            // Repair requires a damaged tile as a target
            if (newTile.name === "prodRepair") {
                return;
            }
            // Warhead requires a rocket resource as a target
            if (newTile.name === "nuclearArmory") {
                return;
            }
            player.produceResource(resCostType, resCostCount, resYieldType, resYieldCount);
            this.emit('update', {type:"resource", details: {resCostType:resCostType, resCostCount:resCostCount, resYieldType:resYieldType, resYieldCount:resYieldCount}});
            return;
        }
        if (newTile.type === "battle") {
            let resCostType = newTile.properties.resourceCostType;
            let resCostCount = newTile.properties.resourceCostCount;
            console.log("testing battle tile...");
            if (newTile.name === "repair" || newTile.name === "repairTwo" ) {
                // if new tile is a "repair" tile, check for damaged tiles.
                let damagedTilesArray = this.getDamagedTiles(player);
                if (damagedTilesArray.length > 0) {
                    // Request selection from client
                }
            } else if (newTile.name === "counterEspionage") {
                let controlledClones = player.getEspionagedClones();
                if (controlledClones.length > 0) {
                    // Request selection from client
                }
            } else {
                let gunnerArray = player.getGunners();
                if (gunnerArray.length > 0) {
                    this.fireWeapon(newTile, gunnerArray);
                    // Request gunner selection from client limited by number of available resources.
                }
            }
            return;
        }    
    }

	addNewPlayer(socketID, uuid) {
        this.lastPlayerID++;
        var player = new Player(socketID, this.lastPlayerID, uuid);
        this.playersArray.push(player);
        this.emit('action', {callback: 'updatePlayer', details: {id: this.lastPlayerID}}, socketID);
        return player;
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

    getPlayerCount() {
        return this.playersArray.length;
    }

    checkArms(player) {
        player.armsArray = [];
        for (var i in player.personnelArray) {
            if (this.tileArray[player.personnelArray[i].x][player.personnelArray[i].y].type == "armory") {
                player.armsArray.push(this.tileArray[player.personnelArray[i].x][player.personnelArray[i].y].name);
            }
        }
    }
    
    checkGunners(player) {
        for (var i in player.personnelArray) {
            if (this.tileArray[player.personnelArray[i].x][player.personnelArray[i].y].type == "surface") {
                player.personnelArray[i].isGunner = true;
            } else {
                player.personnelArray[i].isGunner = false;
            }
        }
    }

    existsPlayerUUID(uuid) {
        for (var i in this.playersArray) {
            if(this.playersArray[i].uuid == uuid)
                return true;
        }
        return false;
    }    

    // activateTile(data) {
    //     var tile = this.getTile(data.x, data.y);
    //     var remainingCount = null;
        
    //     switch (tile.type) {
    //         case "surface": 
    //             this.activePlayer.getPersonnelByPoint({x:data.x, y:data.y}).isGunner = true;
    //             break;
    //         case "production":

    //             // Three special cases: 
    //             //  - Sensor Cabin does not cost or yield anything. We can handle this immediately)
    //             //  - Production Repair costs, but triggers a repair just like the Repair battle tile (We need to check if we can afford)
    //             //  - Nuclear Armory produces a nuke which relies on ordnance which has not been built yet

    //             if(tile.name == "sensorCabin") {
    //                 // This is a sensor cabin so just trigger the action and move on.
    //                 console.log("sensor cabins are free!");
    //                 return;
    //             }

    //             for (let i in tile.properties.resourceCostType) {
    //                 if (this.activePlayer.checkResource(tile.properties.resourceCostType[i], tile.properties.resourceCostCount[i]) === false) {
    //                     // Can't afford it
    //                     console.log("Can't afford it!");
    //                     return false;
    //                 }
    //             }

    //             for (let j in tile.properties.resourceYieldType) {
    //                 if (this.activePlayer.checkResource(tile.properties.resourceYieldType[j], tile.properties.resourceYieldCount[j], true) === false) {
    //                     // No room to store it
    //                     console.log("can't accept the yield cuz we got no room!");
    //                     return false;
    //                 }
    //             }

    //             if (tile.name == "chemicalReactor" || tile.name == "chemicalReactorTwo" ) {
    //                 this.availableClonesToAdd = this.activePlayer.getResourceCount('oxygen') + tile.properties.resourceYieldCount[0] - this.activePlayer.getPersonnel('clone').length;
    //             } else if ( tile.name == "airFilter") {
    //                 this.availableClonesToAdd = this.activePlayer.getResourceCount('oxygen') + tile.properties.resourceYieldCount[0] - tile.properties.resourceCostCount[0] - this.activePlayer.getPersonnel('clone').length;
    //             }

    //             for (var k in tile.properties.resourceCostType) {
    //                 remainingCount = this.activePlayer.spendResource(tile.properties.resourceCostType[k], tile.properties.resourceCostCount[k]);
    //                 console.log("Player " + this.activePlayer.id + " spent " + remainingCount + " " + tile.properties.resourceCostType[k] + ". This leaves them with " + this.activePlayer.getResourceCount(tile.properties.resourceCostType[k]));
    //             }

    //             for (var l in tile.properties.resourceYieldType) {
    //                 remainingCount = this.activePlayer.acceptResource(tile.properties.resourceYieldType[l], tile.properties.resourceYieldCount[l]);
    //                 if (remainingCount) 
    //                     console.log("Player " + this.activePlayer.id + " added " + remainingCount + " " + tile.properties.resourceYieldType[l] + ". This leaves them with " + this.activePlayer.getResourceCount(tile.properties.resourceYieldType[l]));
    //             }

    //             if (tile.name == "oxygen") {
    //                 // TODO: Check if oxygen is greater than the number of clones. If so, add a clone.
    //                 if (this.activePlayer.getResourceCount('oxygen') > this.activePlayer.getPersonnel('clone')) {
    //                     this.queuedTile = tile;
    //                 }
    //             }

    //             if (tile.name == "prodRepair") {
    //                 // Trigger the repair 
    //                 this.queuedTile = tile;
    //                 return;
    //             }
    //             console.log ("+++++++");

    //             // Update player to their new warehouse values
    //             break;
            
    //         case "armory":
    //             this.checkArms(this.activePlayer);
    //             // Update player's personnel to be armed
    //             // Maybe have three overlapping sprites. Drill, Cannon, Explosives?
    //             break;

    //         case "battle":
    //             switch (tile.name) {
    //                 case "shield":
    //                 case "biodrone":
    //                 case "laser":
    //                 case "thermite":
    //                 case "satellite":
    //                 case "rocket":
    //                 case "espionage":
    //                 case "takeover":
    //                     // this.turnState++; // Set state to ACTION.
    //                     var currentResourceCount = 0;
    //                     var currentResourceAffordability = 0;
    //                     var affordableRounds = null;
    //                     var returnArray = [];
    //                     var activeGunners = this.activePlayer.getGunners();

    //                     if (activeGunners.length < 1) {
    //                         return; // No gunners! Get out of here.
    //                     }

    //                     for (var m in tile.properties.resourceCostType) {
    //                         currentResourceCount = this.activePlayer.getResourceCount(tile.properties.resourceCostType[m]);
    //                         currentResourceAffordability = currentResourceCount / tile.properties.resourceCostCount;
    //                         if (currentResourceAffordability < 1) {
    //                             return; // Not enough of a resource!
    //                         } 
    //                         if (affordableRounds === null || currentResourceAffordability < affordableRounds) {
    //                             affordableRounds = currentResourceAffordability;
    //                         }
    //                     }
    //                     console.log("tell player they can afford " + affordableRounds + " gunner(s)");
    //                     this.queuedTile = tile;
    //                     // TODO: emit showTiles() with array of legal gunners
    //                     this.emit('action', {callback:"offerGunners", details:{gunners:activeGunners}}, this.activePlayer.socketID);
    //                     // Ready to select gunners! This will take place on the next legal click event.
    //                     break;


    //                 case "counterEspionage":
    //                     // look for clones that are opponent's spied
    //                     break;

    //                 case "repair":
    //                 case "repairTwo":
    //                     this.queuedTile = tile;
    //                     // currentResourceCount = 0;
    //                     // var activeDamagedTiles = this.getDamagedTiles(this.activePlayer);
    //                     // if (activeDamagedTiles.length < 1) {
    //                     //     return;
    //                     // }
    //                     // // calculate cost of repair
    //                     // for (var n in tile.properties.resourceCostType) {
    //                     //     currentResourceCount = this.activePlayer.getResourceCount(tile.properties.resourceCostType[n]);
    //                     //     if (currentResourceCount < tile.properties.resourceCostCount) {
    //                     //         return; // Not enough of a resource!
    //                     //     } 
    //                     // }
    //                     console.log("Tell player that they can afford to fix up the station!");
    //                     break;
    //             }
    //             break;

    //         default:
    //             break;
    //     }
    // }

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

    moveOrdnance(ord) {
        let x = ord.x;
        for (let i = this.currentDiceValue; i>0; i--) {
            if (this.activePlayer.id === 1) {
                x++;
            } else {
                x--;
            }
            let currentOccupantArray = this.getTileOccupant({x:x, y:ord.y});
            if (currentOccupantArray !== false) {
                // check for enemy collision in transit (collision destroys ord and enemy occupant)
                //  - NOTE: friendly ordnance can stack
                //  - NOTE: enemy shields block the rocket/biodrone movement
                //  - NOTE: enemy satellites are destroyed by rocket/biodrone collision, not vice versa
            }
        }

        ord.x = x;
        // check for enemy fire vectors on the destination tile
        let destinationTile = this.getTile(ord.x, ord.y);
        if (destinationTile.type !== "space" && destinationTile.type !== "surface") {
            // DESTROY! (or if a biodrone, DEPLOY!)
        }
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

            console.log("Shot number " + i);

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
                                    this.emit('action', {callback:"removePersonnel", details:currentOccupant});
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
                                    this.emit('action', {callback:"removePersonnel", details:currentOccupant});
                                    currentTile.occupied = false;
                                    this.emit('action', {callback:"damageTile" ,details:ordnancePoint});
                                    impacted = true;
                                    break;
                                }
                                if (currentTile.damaged === true) {
                                    break;
                                } else {
                                    currentTile.damaged = true;
                                    this.activePlayer.spendResource(weaponTile.properties.resourceCostType, weaponTile.properties.resourceCostCount);
                                    this.emit('action', {callback:"damageTile" ,details:ordnancePoint});
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
                    this.emit('action', {callback:"addOrdnance", details:{type:weaponTile.name, playerID: this.activePlayer.id, point:ordnancePoint, uuid:ordUUID}}, this.activePlayer.socketID);
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
                        this.emit('action', {callback:"damageTile" ,details:ordnancePoint}, this.activePlayer.socketID);
                        break;
                    }
                    break;
                default:
                    console.error("There is a problem with that weaponTile argument");
            }
        }
        return; 
        // switch (weaponTile.name) {
        //     case "espionage":
        //     case "takeover":
        //         break;
        //     default:
        //         console.error("There is a problem with that weaponTile argument");
        // }
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
            // TODO: THIS IS A TEST BIT
            if(selectedTile.type == "surface" || selectedTile.type == "lock" || selectedTile.type == "battle" || selectedTile.type == "armory" || selectedTile.type == "production") {
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

                    if (typeof this.tileArray[x][y] != 'undefined')
                        this.tileArray[x][y].name = obj[prop].name;
                    else
                        console.log(x + ":" + y + " not found!");
                    
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
        // console.log(process.memoryUsage().heapUsed);

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
    
    
    get(data) {
        if(typeof(data.property) == 'undefined') {
            this.emit('response', {details:this[data.property]}, data.socketID);
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
