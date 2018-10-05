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
        this.uuid = require('uuid/v4')();
        this.sequence = 0;

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

        this.queuedTile = null;
        this.tilesRepairedThisTurn = 0;
        this.availableClonesToAdd = 0;
    }
    
    processClick(data) {
        // What is always true of a click?
        //  - send tile details to the client
        //  - send occupant details to client (if any)
        //  - successful interactions (like moving a clone) should emit to client ONLY from this function.

        // Do the needful
        let player = this.getPlayerBySocketID(data.socketID);

        // (1) Check gamestate
        // (2) Check turnphase
        // (3) Check phasestep

        if (this.gameState === this.gameStateEnum.SETUP) {
            // This gamestate allows:
            //  - placing clones
            //    - check legal placement
            //    - add clone
            //  - removing clones
            //    - check if clone exists here
            //    - remove clone
            //  - confirming selection
            //    - check if starting count is placed
            //    - advance gamestate

            if (data.event === "confirmClicked") {
                if (player.personnelArray.length === player.startingCloneCount) {
                    //Alert that player is ready or start game.
                }
            } else if (data.event === "tileClicked") {
                for (let i = 0; i < player.personnelArray.length; i++) {
                    let personnel = player.personnelArray[i];
                    if (data.x === personnel.x && data.y === personnel.y) {
                        player.personnelArray.splice(i,1);
                        this.emit('update', {type:"personnel", details: {personnel: personnel, action: 'remove', playerID: player.id}});
                        this.emit('update', {type:"tile", details: [{x:data.x, y:data.y, occupied: false}]});
                        return;
                    }
                }
                let clone = this.placeClone(player, data.x, data.y);
                if (clone !== false) {
                    // emit the added clone and the tile occupation
                    // this.emit('action', {callback:"addClone", details: {x:x, y:y, playerID: player.id, uuid:cloneUUID}}, player.socketID);
                    this.emit('update', {type:"personnel", details: {personnel: clone, action: 'add', playerID: player.id}});
                    this.emit('update', {type:"tile", details: [{x:data.x, y:data.y, occupied: true}]});
                }
            }
        } else if (this.gameState === this.gameStateEnum.GAME) {
            // This gamestate has phases:
            // (1) - rolling die
            // (2) - moving a clone
            // (3) - tile activation
            // (4) - moving biodrone(s)
            // (5) - moving rockets
            // (6) - assessing damage
            // (7) - check victory
        } else if (this.gameState === this.gameStateEnum.PAUSE) {
        } else if (this.gameState === this.gameStateEnum.GAMEOVER) {
        } else if (this.gameState === this.gameStateEnum.SERVERFULL) {
        }
    }

    clicked(data) {
        
        // Process the click from the client. 
        // Client should do NO rule processing. Pass the click from client to server; process the data; tell the client what to do.
        // Basically, check game state and turn state.
        
        switch (this.gameState) {
        
            case this.gameStateEnum.SETUP:

                // Player is placing new clones in the field.
                var player = this.getPlayerBySocketID(data.socketID);
                var success = false;

                if(player.getPersonnel('clone').length < player.startingCloneCount) {
                    success = this.placeClone(player, data.x, data.y);
                }

                if (success === true) {
                    // Check on personnel count. If personnel is at the start count, send modal to start game.
                    if(player.getPersonnel('clone').length == player.startingCloneCount) {
                        this.emit('request', {callback:"modal", details: {type:"askStart"}}, player.socketID);
                    }
                }
                break;
                
            case this.gameStateEnum.GAME:

                var selectedPersonnel = false;

                switch (this.turnState) {
                    case this.turnStateEnum.MOVE:

                        // Player can move one clone per turn.
                        // Note: The array of legal personnel (in this.activePlayer) was sent by rollDice().

                        this.emit('action', {callback: 'hideTiles', details: null}, this.activePlayer.socketID);

                        selectedPersonnel = this.activePlayer.getPersonnelByPoint({x:data.x, y:data.y});

                        if (selectedPersonnel !== false) {
                            // Clone was clicked, so:
                            var isLegalPersonnel = this.activePlayer.checkPersonnelMove(selectedPersonnel);
                            // TODO: If personnel is a "biodrone" type AND clones remain in the Player.currentlegalpieces array, emit modal warning to player.
                            // Clone must move and tile must be triggered prior to biodrone movement.
                            if (isLegalPersonnel === true) {
                                this.activePlayer.selectedPersonnelToMove = selectedPersonnel;
                                //  - Show highlight selected personnel in client
                                //  - Show legal moves of the selected personnel in a different color

                                var pointArray = [];
                                pointArray = this.getLegalMoves(selectedPersonnel, this.currentDiceValue, {x:selectedPersonnel.x, y:selectedPersonnel.y});
                                this.emit('action', {callback: 'showTiles', details: {x:data.x, y:data.y}}, this.activePlayer.socketID);
                                // TODO: Show in different color...
                                this.emit('action', {callback: 'showTiles', details: pointArray}, this.activePlayer.socketID);
                            }
                            
                        } else if (this.activePlayer.selectedPersonnelToMove !== null) {
                            var isLegalMove = this.activePlayer.checkPersonnelMove(this.activePlayer.selectedPersonnelToMove,{x:data.x, y:data.y});
                            if (isLegalMove === false) {
                                // Toggle back to highlighting the personnel with legal moves
                                // TODO: emit something to show clones to client
                                this.emit('action', {callback: 'showTiles', details: {}}, this.activePlayer.socketID);
                            } else {
                                // Move the personnel
                                this.activePlayer.selectedPersonnelToMove.move(data.x, data.y);
                                this.emit('action', {callback: 'movePersonnel', details: {uuid:this.activePlayer.selectedPersonnelToMove.uuid, x:data.x, y:data.y}}, this.activePlayer.socketID);
                                this.emit('update', {type:"personnel", details: {uuid:this.activePlayer.selectedPersonnelToMove.uuid, x:data.x, y:data.y}}, this.getPlayerOpponent(this.activePlayer).socketID);                               // clear moved personnel from the player array. If moved personnel was a clone, remove ALL clones from array.
                                this.activePlayer.purgeLegalPieces(this.activePlayer.selectedPersonnelToMove, true); // 2nd arg: true is passed for clones; null for biodrones.

                                this.turnState++;
                                // TODO: trigger tile and emit battle targets (gunners, etc) to Player
                                this.activateTile({x:data.x, y:data.y});    

                                // TODO: if tile is production, surface, or armory; check for biodrones and move ordnance, then (if none are found) change players.
                                var tile = this.getTile(data.x, data.y);
                                if ( tile.type == "production"  || tile.type == "surface" || tile.type == "armory" || tile.type == "lock") {
                                    this.activePlayer.selectedPersonnelToMove = null;
                                    if (tile.name == "prodRepair"){
                                        this.queuedTile = tile;
                                        return;
                                    }
                                    if (tile.name == "chemicalReactor" || tile.name == "chemicalReactorTwo" || tile.name == "airFilter" ) {
                                        this.queuedTile = tile;
                                        return;
                                    }
                                    if (this.activePlayer.getPersonnel('biodrone').length > 0) {
                                        // TODO: send biodrone array to client for selection
                                        return;
                                    }
                                    if (this.activePlayer.getOrdnance().length > 0) {
                                        // TODO: move ordnance
                                        return;
                                    }
                                    this.changeActivePlayer();
                                    return;
                                }

                            }
                            this.activePlayer.selectedPersonnelToMove = null;
                        }

                        break;

                    case this.turnStateEnum.ACTION:

                        // Player will designate gunner(s) for firing and/or additional targets, depending on the battle tile type.
                        // Player will confirm movement selections with GO! (unless repair or counter espionage)
                        // Array of eligible gunners sent via activateTile();
                        // Emit array of eligible gunners and number of selectable gunners to Player.

                        var actionTile;

                        if (this.queuedTile.name == "chemicalReactor" || this.queuedTile.name == "chemicalReactorTwo" || this.queuedTile.name == "airFilter") {
                            actionTile = this.getTile(data.x, data.y);
                            if (actionTile.name == "lock" && actionTile.damaged === false && actionTile.occupied === false) {
                                this.placeClone(this.activePlayer, data.x, data.y);
                                this.availableClonesToAdd--;
                                if (this.availableClonesToAdd > 0) {
                                    return;
                                }
                                if (this.activePlayer.getPersonnel('biodrones').length > 0) {
                                    // TODO: send biodrone selection
                                    return;
                                }
                                if (this.activePlayer.getOrdnance().length > 0) {
                                    // TODO: Move ordnance and check for damage
                                    return;
                                }
                                this.changeActivePlayer();
                                return;
                            }
                        } else if (this.queuedTile.name == "counterEspionage" ) {
                            // TODO: special case.
                        } else if (this.queuedTile.name == "repair" || this.queuedTile.name == "repairTwo" || this.queuedTile.name == "prodRepair") {
                            // TODO: Special cases. 
                            actionTile = this.getTile(data.x, data.y).damaged;
                            if (actionTile.damaged === false) {
                                return;
                            }
                            actionTile.damaged = false;
                            this.tilesRepairedThisTurn++;
                            this.emit('action', {callback: 'repairTile', details: {x:data.x, y:data.y}}, this.activePlayer.socketID);
                            if (this.tilesRepairedThisTurn == 1) {  // TODO: check for repairTwo
                                this.tilesRepairedThisTurn = 0;
                                if (this.activePlayer.getPersonnel('biodrones').length > 0) {
                                    // TODO: send biodrone selection
                                    return;
                                }
                                if (this.activePlayer.getOrdnance().length > 0) {
                                    // TODO: Move ordnance and check for damage
                                    return;
                                }
                                this.changeActivePlayer();
                                return;
                            }
                        } else {
                            selectedPersonnel = this.activePlayer.getPersonnelByPoint({x:data.x, y:data.y});
                            if (selectedPersonnel !== false) {
                                if (this.activePlayer.toggleGunnerSelection(selectedPersonnel) === 0) {
                                    this.emit('action', {callback: 'showTiles', details: {x:data.x, y:data.y}}, this.activePlayer.socketID);
                                } else {
                                    this.emit('action', {callback: 'hideTiles', details: {x:data.x, y:data.y}}, this.activePlayer.socketID);
                                }
                            }
                        }

                        break;

                    case this.turnStateEnum.TARGETS:

                        // Player will choose additional targets if required by the tile. Espoinage, for instance, requires a gunner and an enemy clone in the selected gunner's line of fire.
                        // Player will confirm targets with GO!

                        console.log("Target queued!");
                        break;

                    case this.turnStateEnum.ORDNANCE:

                        break;

                    case this.turnStateEnum.END:

                        // Any post-turn processing can happen here. Otherwise, the turn may already be over...
                        this.turnState = this.turnStateEnum.ROLL;
                        break;
                }
                break;
                
            default:
                break;
        }
           
    }

    go(data) {
        switch (this.turnState) {
            case this.turnStateEnum.ACTION:
                // Player has confirmed gunner selection.

                if (this.activePlayer.getSelectedGunners().length > 0) {
                    this.fireWeapon(this.queuedTile, this.activePlayer.getSelectedGunners());
                    // TODO: If targets are required (ie espionage) send that array now and advance to TARGETS and RETURN
                }

                // TODO: If biodrones exist, send that array now and advance to BIODRONES and RETURN

                // TODO: If player has ordnance, move ordnance/check damage 
                if (this.activePlayer.ordnanceArray.length > 0) {
                    var updatedOrdnance = this.activePlayer.moveOrdnance(this.currentDiceValue);
                    // TODO: Check / apply damage
                    this.emit('action', {callback:'moveOrdnance', details:updatedOrdnance}, this.activePlayer.socketID);
                }

                this.changeActivePlayer();
                
                break;
            case this.turnStateEnum.TARGETS:
                // Player has confirmed all targets (this will apply to limited battle tiles like espionage)
                // I may come back to this a bit later.
                // TODO: Update client with result
                break;
            case this.turnStateEnum.BIODRONE:
                // Player has confirmed that biodrone selection (if any) is final. 
                // TODO: Move biodrone(s) and wreak havok. 
                // TODO: advance turnstate
                break;
            case this.turnStateEnum.END:
                break;
        }
        console.log(data);
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

    setPlayerState(state) {
        var player = null;
        switch (state.value) {
            case 'reset': 
                player = this.getPlayerBySocketID(state.socketID);
                player.removePersonnel(null, true);
                this.emit('action', {callback:"removeAllPersonnel", details: {}}, player.socketID);
                break;
            case 'start': 
                player = this.getPlayerBySocketID(state.socketID);
                player.readyToStart = true;
                var opponent = this.getPlayerOpponent(player);
                if(!opponent || !opponent.readyToStart) {
                    return;
                } else {
                    var oppClones = opponent.getPersonnel('clone');
                    var currentPlayerClones = player.getPersonnel('clone');

                    // Notify current player of opponent positions
                    var playerPayload = [];
                    for (var i in oppClones) {
                        playerPayload.push({
                            x:oppClones[i].x,
                            y:oppClones[i].y,
                            uuid:oppClones[i].uuid,                            
                        });
                    }
                    this.emit('update', {type:"personnel", details:playerPayload}, player.socketID);

                    // Notify opponent of current player's positions
                    var oppPayload = [];
                    for (var c in currentPlayerClones) {
                        oppPayload.push({
                            x:currentPlayerClones[c].x,
                            y:currentPlayerClones[c].y,
                            uuid:currentPlayerClones[c].uuid,
                        });
                    }
                    this.emit('update', {type:"personnel", details:oppPayload}, opponent.socketID);
                    this.broadcast('update', {type:"resources", action:'init'});

                    this.activePlayer = this.getRandomPlayer();
                    this.emit('action', {callback:"offerDice", details: {}}, this.activePlayer.socketID);
                    this.gameState++;

                }
                break;
            default:
                console.log(state.value);
                console.error(state.value + " is not a valid player state!");
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

    activateTile(data) {
        var tile = this.getTile(data.x, data.y);
        var remainingCount = null;
        
        switch (tile.type) {
            case "surface": 
                this.activePlayer.getPersonnelByPoint({x:data.x, y:data.y}).isGunner = true;
                break;
            case "production":

                // Three special cases: 
                //  - Sensor Cabin does not cost or yield anything. We can handle this immediately)
                //  - Production Repair costs, but triggers a repair just like the Repair battle tile (We need to check if we can afford)
                //  - Nuclear Armory produces a nuke which relies on ordnance which has not been built yet

                if(tile.name == "sensorCabin") {
                    // This is a sensor cabin so just trigger the action and move on.
                    console.log("sensor cabins are free!");
                    return;
                }

                for (var i in tile.properties.resourceCostType) {
                    if (this.activePlayer.checkResource(tile.properties.resourceCostType[i], tile.properties.resourceCostCount[i]) === false) {
                        // Can't afford it
                        console.log("Can't afford it!");
                        return false;
                    }
                }

                for (var j in tile.properties.resourceYieldType) {
                    if (this.activePlayer.checkResource(tile.properties.resourceYieldType[j], tile.properties.resourceYieldCount[j], true) === false) {
                        // No room to store it
                        console.log("can't accept the yield cuz we got no room!");
                        return false;
                    }
                }

                if (tile.name == "chemicalReactor" || tile.name == "chemicalReactorTwo" ) {
                    this.availableClonesToAdd = this.activePlayer.getResourceCount('oxygen') + tile.properties.resourceYieldCount[0] - this.activePlayer.getPersonnel('clone').length;
                } else if ( tile.name == "airFilter") {
                    this.availableClonesToAdd = this.activePlayer.getResourceCount('oxygen') + tile.properties.resourceYieldCount[0] - tile.properties.resourceCostCount[0] - this.activePlayer.getPersonnel('clone').length;
                }

                for (var k in tile.properties.resourceCostType) {
                    remainingCount = this.activePlayer.spendResource(tile.properties.resourceCostType[k], tile.properties.resourceCostCount[k]);
                    console.log("Player " + this.activePlayer.id + " spent " + remainingCount + " " + tile.properties.resourceCostType[k] + ". This leaves them with " + this.activePlayer.getResourceCount(tile.properties.resourceCostType[k]));
                }

                for (var l in tile.properties.resourceYieldType) {
                    remainingCount = this.activePlayer.acceptResource(tile.properties.resourceYieldType[l], tile.properties.resourceYieldCount[l]);
                    if (remainingCount) 
                        console.log("Player " + this.activePlayer.id + " added " + remainingCount + " " + tile.properties.resourceYieldType[l] + ". This leaves them with " + this.activePlayer.getResourceCount(tile.properties.resourceYieldType[l]));
                }

                if (tile.name == "oxygen") {
                    // TODO: Check if oxygen is greater than the number of clones. If so, add a clone.
                    if (this.activePlayer.getResourceCount('oxygen') > this.activePlayer.getPersonnel('clone')) {
                        this.queuedTile = tile;
                    }
                }

                if (tile.name == "prodRepair") {
                    // Trigger the repair 
                    this.queuedTile = tile;
                    return;
                }
                console.log ("+++++++");

                // Update player to their new warehouse values
                break;
            
            case "armory":
                this.checkArms(this.activePlayer);
                // Update player's personnel to be armed
                // Maybe have three overlapping sprites. Drill, Cannon, Explosives?
                break;

            case "battle":
                switch (tile.name) {
                    case "shield":
                    case "biodrone":
                    case "laser":
                    case "thermite":
                    case "satellite":
                    case "rocket":
                    case "espionage":
                    case "takeover":
                        // this.turnState++; // Set state to ACTION.
                        var currentResourceCount = 0;
                        var currentResourceAffordability = 0;
                        var affordableRounds = null;
                        var returnArray = [];
                        var activeGunners = this.activePlayer.getGunners();

                        if (activeGunners.length < 1) {
                            return; // No gunners! Get out of here.
                        }

                        for (var m in tile.properties.resourceCostType) {
                            currentResourceCount = this.activePlayer.getResourceCount(tile.properties.resourceCostType[m]);
                            currentResourceAffordability = currentResourceCount / tile.properties.resourceCostCount;
                            if (currentResourceAffordability < 1) {
                                return; // Not enough of a resource!
                            } 
                            if (affordableRounds === null || currentResourceAffordability < affordableRounds) {
                                affordableRounds = currentResourceAffordability;
                            }
                        }
                        console.log("tell player they can afford " + affordableRounds + " gunner(s)");
                        this.queuedTile = tile;
                        // TODO: emit showTiles() with array of legal gunners
                        this.emit('action', {callback:"offerGunners", details:{gunners:activeGunners}}, this.activePlayer.socketID);
                        // Ready to select gunners! This will take place on the next legal click event.
                        break;


                    case "counterEspionage":
                        // look for clones that are opponent's spied
                        break;

                    case "repair":
                    case "repairTwo":
                        this.queuedTile = tile;
                        // currentResourceCount = 0;
                        // var activeDamagedTiles = this.getDamagedTiles(this.activePlayer);
                        // if (activeDamagedTiles.length < 1) {
                        //     return;
                        // }
                        // // calculate cost of repair
                        // for (var n in tile.properties.resourceCostType) {
                        //     currentResourceCount = this.activePlayer.getResourceCount(tile.properties.resourceCostType[n]);
                        //     if (currentResourceCount < tile.properties.resourceCostCount) {
                        //         return; // Not enough of a resource!
                        //     } 
                        // }
                        console.log("Tell player that they can afford to fix up the station!");
                        break;
                }
                break;

            default:
                break;
        }
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
            } else {
                return false;
            }
        }
    }

    fireWeapon(weaponTile, gunnerArray) {
        if (gunnerArray.length <= 0 ) {
            return false;
        }

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
                        console.log(currentTile);
                        switch (currentTile.name) {
                            case "space":
                            case "surface":
                                if (currentTile.occupied === true) {
                                    currentOccupant = this.getTileOccupant(ordnancePoint);
                                    this.activePlayer.remove(currentOccupant);
                                    currentTile.occupied = false;
                                    impacted = true;
                                    break;
                                }
                                break;
                            default:
                                // You are in the opponent mine.
                                if (currentTile.occupied === true) {
                                    currentOccupant = this.getTileOccupant(ordnancePoint);
                                    this.activePlayer.removePersonnel(currentOccupant);
                                    // TODO: emit death animation to clients. (maybe just add that to the removePersonnel()?)
                                    this.emit('action', {callback:"removePersonnel", details:currentOccupant}, this.activePlayer.socketID);
                                    currentTile.occupied = false;
                                    this.emit('action', {callback:"damageTile" ,details:ordnancePoint}, this.activePlayer.socketID);
                                    // TODO: update opponent's client
                                    impacted = true;
                                    break;
                                }
                                if (currentTile.damaged === true) {
                                    break;
                                } else {
                                    currentTile.damaged = true;
                                    this.emit('action', {callback:"damageTile" ,details:ordnancePoint}, this.activePlayer.socketID);
                                    // TODO: update opponent's client
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
                    if (weaponTile.name == "shield" || weaponTile.name == "satellite") {
                        if (this.activePlayer.id == 1) {
                            ordnancePoint.x += this.currentDiceValue;
                        } else {
                            ordnancePoint.x -= this.currentDiceValue;
                        }
                    }
                    currentTile = this.getTile(ordnancePoint.x, ordnancePoint.y);
                    ordUUID = uuid();
                    this.activePlayer.addOrdnance(weaponTile.name, ordnancePoint, ordUUID);
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
        return this.tileArray[x][y];
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
    
    rollDice(data) {
        if(this.turnState == this.turnStateEnum.ROLL && this.gameState == this.gameStateEnum.GAME && this.activePlayer.socketID == data.socketID) {
            this.currentDiceValue = Math.floor(Math.random() * 6) + 1;
            this.activePlayer.currentLegalPieces = this.getLegalPieces();

            // Player receives array of legal personnel (clones) and turn state advances to MOVE
            this.emit('action', {callback:"diceRolled", details: {value:this.currentDiceValue, gamePieces:this.activePlayer.currentLegalPieces}}, data.socketID);
            this.turnState++;
        }
    }
    
    get(data) {
        if(typeof(data.property) == 'undefined') {
            this.emit('response', {details:this[data.property]}, data.socketID);
        }
    }
    
    emit(msg, data, socketID) {

        if(typeof(socketID) == "undefined") {
            console.error("No SocketID found, so I'm broadcasting!");
            console.log(data);
            this.broadcast(msg, data);
            return;
        } else {
            this.io.sockets.connected[socketID].emit(msg, data);
        }
    }
    
    broadcast(msg, data) {
        for (let i in this.playersArray) {
            console.log(msg + " :: " + data + " :: " +  this.playersArray[i].socketID);
            this.emit(msg, data, this.playersArray[i].socketID);
        }
    }
    
    serverFull(player) {
        this.emit('action', {callback: 'serverFull', details: {id: player.id}}, player.socketID);
    }
    
}

module.exports.Septikon = Septikon;
