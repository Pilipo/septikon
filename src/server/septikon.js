var Player = require('./player').Player;

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
        switch (state.value) {
            case 'reset': 
                var player = this.getPlayerBySocketID(state.socketID);
                player.removePersonnel(null, true);
                this.emit('action', {callback:"removeAllPersonnel", details: {}}, player.socketID);
                break;
            case 'start': 
                var player = this.getPlayerBySocketID(state.socketID);
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
                    for (var i in currentPlayerClones) {
                        oppPayload.push({
                            x:currentPlayerClones[i].x,
                            y:currentPlayerClones[i].y,
                            uuid:currentPlayerClones[i].uuid,
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
    
    existsPlayerUUID(uuid) {
        for (var i in this.playersArray) {
            if(this.playersArray[i].uuid == uuid)
                return true;
        }
        return false;
    }
    
    clicked(data) {
        
        //check game state
        
        switch (this.gameState) {
        
            case this.gameStateEnum.SETUP:
                var player = this.getPlayerBySocketID(data.socketID);
                this.placeClone(player, data.x, data.y);
                break;
                
            case this.gameStateEnum.GAME:

                switch (this.turnState) {
                    case this.turnStateEnum.MOVE:

                        var legalPieces = [];

                        if (this.activePlayer.currentLegalPieces.length > 0) {
                            legalPieces = this.activePlayer.currentLegalPieces;
                        } else {
                            legalPieces = this.getLegalPieces();
                        }

                        for (var i in legalPieces) {
                            if (legalPieces[i].uuid == data.uuid) {
                                for (var m in legalPieces[i].moves) {
                                    if (legalPieces[i].moves[m].x == data.x && legalPieces[i].moves[m].y == data.y) {
                                        
                                        this.tileArray[this.activePlayer.getPersonnelByUUID(data.uuid).x][this.activePlayer.getPersonnelByUUID(data.uuid).y].occupied = false;
                                        this.activePlayer.getPersonnelByUUID(data.uuid).move(data.x, data.y);
                                        this.checkArms(this.activePlayer);
                                        this.tileArray[data.x][data.y].occupied = true;
                                        this.emit('action', {callback: 'movePersonnel', details: {uuid:data.uuid, x:data.x, y:data.y}}, data.socketID);
                                        this.emit('update', {type:"personnel", details: {uuid:data.uuid, x:data.x, y:data.y}}, this.getPlayerOpponent(this.activePlayer).socketID);  
                                        legalPieces = this.activePlayer.currentLegalPieces = [];
                                        this.turnState++;
                                        this.activateTile(data);
                                        this.changeActivePlayer();
                                        this.turnState = this.turnStateEnum.ROLL;
                                        return;
                                    }
                                }
                            }
                        }
                        // If player tries to move clones before biodrones, prompt to verify that they intend to skip the biodrones
                        

                        

                        break;
                    case this.turnStateEnum.ACTION:
                        console.log("action!");
                        break;
                    case this.turnStateEnum.TARGETS:
                        console.log("targets!");
                        break;
                    case this.turnStateEnum.END:
                        this.turnState = this.turnStateEnum.ROLL;
                        break;
                }
                break;
                
            default:
                break;
        }
           
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

                for (var i in tile.properties.resourceYieldType) {
                    if (this.activePlayer.checkResource(tile.properties.resourceYieldType[i], tile.properties.resourceYieldCount[i], true) === false) {
                        // No room to store it
                        console.log("can't accept the yield cuz we got no room!");
                        return false;
                    }
                }

                for (var i in tile.properties.resourceCostType) {
                    remainingCount = this.activePlayer.spendResource(tile.properties.resourceCostType[i], tile.properties.resourceCostCount[i]);
                    console.log("You have spent " + remainingCount + " " + tile.properties.resourceCostType[i] + ". This leaves you with " + this.activePlayer.getResourceCount(tile.properties.resourceCostType[i]));
                }

                for (var i in tile.properties.resourceYieldType) {
                    remainingCount = this.activePlayer.acceptResource(tile.properties.resourceYieldType[i], tile.properties.resourceYieldCount[i]);
                    if (remainingCount) 
                        console.log("You have added " + remainingCount + " " + tile.properties.resourceYieldType[i] + ". This leaves you with " + this.activePlayer.getResourceCount(tile.properties.resourceYieldType[i]));
                }

                break;
            
            case "armory":
                // This may become a trigger with every move. I need to arm and disarm accurately   
                this.checkArms(this.activePlayer);
                break;

            case "battle":
                switch (tile.name) {
                    case "shield":
                    case "biodrone":
                    case "laser":
                    case "satellite":
                    case "rocket":
                        if(this.activePlayer.checkResource(tile.properties.resourceCostType[0], tile.properties.resourceCostCount[0])) {
                            var gunnerArray = this.activePlayer.getGunners();
                            console.log("I need a gunner selection from the user...");                            
                        } else {
                            console.log("cant afford it");
                        }

                        break;

                    case "repair":
                    case "repairTwo":
                        for (var i in tile.properties.resourceCostType) {
                            if(this.activePlayer.checkResource(tile.properties.resourceCostType[i], tile.properties.resourceCostCount[i])) {
                                console.log("you can repair " + tile.properties.resourceCostCount[i] + " tile. Now I need an array of damaged tile(s)!");
                            } else {
                                console.log("you can't afford this.")
                                return;
                            }
                        }

                        break;

                    case "espionage":
                        break

                    case "counterEspionage":
                        break

                    case "takeover":
                        break
                }
                break;

            default:
                break;
        };
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

    getDamagedTiles() {

    }
    
    placeClone(player, x, y) {
        
        if(typeof(player) != 'undefined') {
            var selectedTile = this.getTile(x, y);
            if(player.id != selectedTile.owner || selectedTile.occupied === true) {
                return;
            }

            if(selectedTile.type == "lock" || selectedTile.type == "battle" || selectedTile.type == "armory" || selectedTile.type == "production") {
                var uuid = require('uuid/v4')();
                var clone = player.addPersonnel('clone', x, y, uuid);
                if(selectedTile.type == "surface") {
                    clone.isGunner = true;
                }

                if(clone != false) {
                    selectedTile.occupied = true;
                    this.emit('action', {callback:"addClone", details: {x:x, y:y, playerID: player.id, uuid:uuid}}, player.socketID);
                    if(player.getPersonnel('clone').length == player.startingCloneCount) {
                        this.emit('request', {callback:"modal", details: {type:"askStart"}}, player.socketID);
                    }
                }
            }

        } else {
            console.error('ERROR: player not found!');        
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
                        this.tileArray[x][y]['properties'] = obj[prop].properties;
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
                returnArray.push({type:"personnel",origin:{x:personnelArray[i].x,y:personnelArray[i].y}, uuid:personnelArray[i].uuid, moves:movesArray});
            }
        }

        for (var i in ordnanceArray) {
            movesArray = this.getLegalMoves(personnelArray[i], this.currentDiceValue, {x:personnelArray[i].x, y:personnelArray[i].y});
            if (movesArray.length > 0) {
                returnArray.push({type:"ordnance", uuid:ordnanceArray[i].uuid, moves:movesArray});
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

            for (var i in locks) {
                if (locks[i].x == currentCoord.x && locks[i].y == currentCoord.y) {
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
                if(moves==0){
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
                if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y]&this.directionEnum.NORTH) == 0) {
                    return true;
                }
                return false;
            case this.directionEnum.SOUTH: // DOWN
                if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y]&this.directionEnum.SOUTH) == 0) {
                    return true;
                }
                return false;
            case this.directionEnum.EAST: // RIGHT
                if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y]&this.directionEnum.EAST) == 0) {
                    return true;
                }
                return false;
            case this.directionEnum.WEST: // LEFT
                if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y]&this.directionEnum.WEST) == 0) {
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
            this.emit('action', {callback:"diceRolled", details: {value:this.currentDiceValue, gamePieces:this.activePlayer.currentLegalPieces}}, data.socketID);
            this.emit('update', {type:"dice", details: {value:this.currentDiceValue}}, this.getPlayerOpponent(this.activePlayer).socketID);
            console.log("TODO: \n - Calculate legal personnel selections\n - Calculate legal ordnance selections\n - emit action to offer clones\n - Calculate legal personnel selections")
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
