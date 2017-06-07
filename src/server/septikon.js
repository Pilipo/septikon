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

        this.activePlayer = null;
        this.currentDiceValue = 0;
        
        this.gameStateEnum = Object.freeze({
            SETUP: 0,
            GAME: 1, 
            PAUSE: 2,
            GAMEOVER: 3
        });
        
        this.turnStateEnum = Object.freeze({
            ROLL: 0,    // Literally the act of rolling the die
            MOVE: 1,    // Selecting the clone and (optionally) the biodrone(s) and their target spaces
            ACTION: 2,  // Trigger tile  
            TARGETS: 3, // Assign target(s) (ie. - gunner, tile, espionaged clone) 
            END: 4      // assess victory conditions
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

        this.queuedBattleTileType = null;     
	}

    clicked(data) {
        
        // Process the click from the client. 
        // Basically, check game and turn state.
        
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

                switch (this.turnState) {
                    case this.turnStateEnum.MOVE:

                        // Player will click to designate the desired personnel to move, so queue up the selection(s) and wait for confirmation message.
                        // Player can move one clone and any/all biodrone(s) per turn.
                        // Note: The array of legal personnel (in this.activePlayer) was sent by rollDice().
                        // THIS IS UNTESTED WITH BIODRONES.

                        // emit a hideTiles()

                        var selectedPersonnel = this.activePlayer.getPersonnelByPoint({x:data.x, y:data.y});

                        if (selectedPersonnel !== false) {
                            // Clone was clicked, so:
                            var isLegalPersonnel = this.activePlayer.checkPersonnelMove(selectedPersonnel);
                            if (isLegalPersonnel === true) {
                                //  - set selected in player
                                this.activePlayer.selectedPersonnelToMove = selectedPersonnel;
                                //  - Show Clones in client
                                //      emit something here
                                //  - Show this clone's moves in client
                                //      emit something here
                                //  - show this clone in different color in client
                                //      emit something here
                            }
                            
                        } else if (this.activePlayer.selectedPersonnelToMove !== null) {
                            // check for legal tile
                            var isLegalMove = this.activePlayer.checkPersonnelMove(this.activePlayer.selectedPersonnelToMove,{x:data.x, y:data.y});
                            if (isLegalMove === false) {
                                // emit something to show clones to client
                            } else {
                                // if is legal, clear selectedPer... and trigger move
                                this.activePlayer.selectedPersonnelToMove.move({x:data.x, y:data.y});
                                // emit move to client

                                // clear moved personnel from the player array. If moved personnel was a clone, remove ALL clones from array.
                                this.activePlayer.purgeLegalPieces(this.activePlayer.selectedPersonnelToMove, true); // true is passed for clones. null for biodrones.
                            }
                            this.activePlayer.selectedPersonnelToMove = null;

                        }

                        // If legal personnel are empty, advance turnstate.
                        if (this.activePlayer.currentLegalPieces.length <= 0) {
                            this.turnState++;
                            // emit some indication to client
                        }
                        break;

                    case this.turnStateEnum.ACTION:

                        // Player will click to designate the desired where selected personnel are to move, so queue up the selections and wait for confirmation message.
                        // Player will confirm movement selections with GO!

                        console.log("Movement queued!");
                        break;

                    case this.turnStateEnum.TARGETS:

                        // Player will designate gunner(s) for firing and/or additional targets, depending on the battle tile type.
                        // Player will confirm targets with GO!

                        console.log("Target queued!");
                        this.changeActivePlayer();
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
            case this.turnStateEnum.MOVE:
                // Player has confirmed clone and biodrone selection.
                // Verify that a clone was selected. 
                // Advance turnState
                // Send Player move options for selected personnel.
                if (this.activePlayer.queuedPersonnelToMove.length < 1) {
                    return;
                }
                this.turnState++;
                console.log("personnel selection confirmed");
                break;

            case this.turnStateEnum.ACTION:
                // Player has confirmed where personnel will move.
                // Send move order to client.
                // Trigger tile action or send target options (gunners, tiles, etc)
                break;
            case this.turnStateEnum.TARGETS:
                // Player has confirmed all targets
                // Fire ordnance or lasers or whatever
                // Update client with result
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
        this.emit('action', {callback:"takeDice", details: {}}, this.activePlayer.socketID);
        this.activePlayer = this.getPlayerOpponent(this.activePlayer);
        this.emit('action', {callback:"offerDice", details: {}}, this.activePlayer.socketID);
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

                if (tile.name == "prodRepair") {
                    // Trigger the repair  
                    console.log("trigger the repair");
                    return;                  
                }

                if (tile.name == "nuclearArmory") {
                    // Trigger the repair  
                    console.log("Build a nuke!");
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

                for (var k in tile.properties.resourceCostType) {
                    remainingCount = this.activePlayer.spendResource(tile.properties.resourceCostType[k], tile.properties.resourceCostCount[k]);
                    console.log("You have spent " + remainingCount + " " + tile.properties.resourceCostType[k] + ". This leaves you with " + this.activePlayer.getResourceCount(tile.properties.resourceCostType[k]));
                }

                for (var l in tile.properties.resourceYieldType) {
                    remainingCount = this.activePlayer.acceptResource(tile.properties.resourceYieldType[l], tile.properties.resourceYieldCount[l]);
                    if (remainingCount) 
                        console.log("You have added " + remainingCount + " " + tile.properties.resourceYieldType[l] + ". This leaves you with " + this.activePlayer.getResourceCount(tile.properties.resourceYieldType[l]));
                }

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
                        this.turnState++; // Set state to target.
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
                        this.queuedBattleTileType = tile.name;
                        this.emit('action', {callback:"offerGunners", details:{gunners:activeGunners}}, this.activePlayer.socketID);
                        // Ready to select gunners!
                        break;


                    case "counterEspionage":
                        // look for clones that are opponent's spied
                        break;

                    case "repair":
                    case "repairTwo":
                        currentResourceCount = 0;
                        var activeDamagedTiles = this.getDamagedTiles(this.activePlayer);
                        if (activeDamagedTiles.length < 1) {
                            return;
                        }
                        // calculate cost of repair
                        for (var n in tile.properties.resourceCostType) {
                            currentResourceCount = this.activePlayer.getResourceCount(tile.properties.resourceCostType[n]);
                            if (currentResourceCount < tile.properties.resourceCostCount) {
                                return; // Not enough of a resource!
                            } 
                        }
                        console.log("Tell player that they can afford to fix up the station!");
                        break;
                }
                break;

            default:
                break;
        }
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

        // Attempt to place clones
        // If the gamestate is SETUP, clones can go into any unoccupied, player-owned, battle, production, lock, or armory tile.
        // If the gamestate is GAME, clones can only go into unoccupied, player-owned, locks.
        // RETURN true or false for success or failure.
        // I should refactor this, but I'm tired.

        if (typeof player === 'undefined' || player === null) {
            return false;
        }

        var selectedTile = this.getTile(x, y);
        var clone, cloneUUID;

        if (player.id != selectedTile.owner || selectedTile.occupied === true) {
            return;
        }

        // if gamestate is SETUP
        if (this.gameState === this.gameStateEnum.SETUP) {
            if(selectedTile.type == "lock" || selectedTile.type == "battle" || selectedTile.type == "armory" || selectedTile.type == "production") {
                cloneUUID = uuid();
                //var uuid = require('uuid/v4')();
                clone = player.addPersonnel('clone', x, y, cloneUUID);
                if (clone !== false) {
                    this.checkArms(player);
                    selectedTile.occupied = true;
                    this.emit('action', {callback:"addClone", details: {x:x, y:y, playerID: player.id, uuid:cloneUUID}}, player.socketID);
                    return true;
                } else {
                    return false;
                }
            }
        }

        // if gamestate is GAME
        if (this.gameState === this.gameStateEnum.GAME) {
            if (selectedTile.type == "lock") {
                cloneUUID = uuid();
                //var uuid = require('uuid/v4')();
                clone = player.addPersonnel('clone', x, y, cloneUUID);
                if (clone !== false) {
                    this.checkArms(player);
                    selectedTile.occupied = true;
                    this.emit('action', {callback:"addClone", details: {x:x, y:y, playerID: player.id, uuid:cloneUUID}}, player.socketID);
                    return true;
                } else {
                    return false;
                }
            }
        }
        
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
        var ordnanceArray = this.activePlayer.getOrdnance();
        var returnArray = [];
        var movesArray = [];

        for (var i in personnelArray) {
            movesArray = this.getLegalMoves(personnelArray[i], this.currentDiceValue, {x:personnelArray[i].x, y:personnelArray[i].y});
            if (movesArray.length > 0) {
                returnArray.push({type:personnelArray[i].type,origin:{x:personnelArray[i].x,y:personnelArray[i].y}, uuid:personnelArray[i].uuid, moves:movesArray});
            }
        }

        for (var j in ordnanceArray) {
            movesArray = this.getLegalMoves(personnelArray[j], this.currentDiceValue, {x:personnelArray[j].x, y:personnelArray[j].y});
            if (movesArray.length > 0) {
                returnArray.push({type:"ordnance", uuid:ordnanceArray[j].uuid, moves:movesArray});
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

            // Player receives array of legal personnel (clones and biodrones) and turn state advances to MOVE
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
        if(msg == "response" || msg == "request" || msg == "update") {
            if(typeof(socketID) == "undefined") {
                console.error("No SocketID found!");
                return;
            }
            this.io.sockets.connected[socketID].emit(msg, data);
        }
    
        if(msg == "action") {
            if(typeof(socketID) == "undefined") {
                console.error("No SocketID found!");
                return;
            }
            this.io.sockets.connected[socketID].emit(msg, data);
        }
        
        if(msg == "log") {
            this.io.sockets.emit(msg, data);
        }
    }
    
    broadcast(msg, data) {
        for (var i in this.playersArray) {
            this.emit(msg, data, this.playersArray[i].socketID);
        }
    }
    
    
}

module.exports.Septikon = Septikon;
