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
            ROLL: 0,
            MOVE: 1, 
            ACTION: 2,
            END: 3
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

                //check if tile is type: surface, battle, armory, lock, or production
                //check if tile belongs to player's team
                //add clone to player's personnel
                var player = this.getPlayerBySocketID(data.socketID);
                this.placeClone(player, data.x, data.y);

                break;
                
            case this.gameStateEnum.GAME:
            
                //check turnState
                
                break;
                
            default:
                break;
        }
           
    }
    
    placeClone(player, x, y) {
        
        if(typeof(player) != 'undefined') {
            var selectedTile = this.getTile(x, y);
            if(player.id != selectedTile.owner || selectedTile.occupied === true) {
                return;
            }

            if(selectedTile.type == "lock" || selectedTile.type == "battle" || selectedTile.type == "armory" || selectedTile.type == "production" || selectedTile.type == "surface") {
                var uuid = require('uuid/v4')();
                if(player.addPersonnel('clone', x, y, uuid)) {
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
                this.tileArray[c][r] = {};
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
                        this.tileArray[x][y]['tileProperties'] = obj[prop].properties;
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
        moves--;
        var legalMoves = [];
        for (var direction in this.directionEnum) {
            var moveCheck = this.getCoordFromDirection(currentCoord, direction);
            if(moveCheck === false)
                continue;
            
            var tileToCheck = this.tileArray[moveCheck.x][moveCheck.y];

            if(this.checkWall(this.directionEnum[direction], currentCoord) === true && tileToCheck.damaged === false && tileToCheck.type != "space" && ((typeof previousCoord === 'undefined') || ((typeof previousCoord !== 'undefined') && (JSON.stringify(moveCheck) !== JSON.stringify(previousCoord)) ))) {
                // Check if tile is occupied
                if(moves==0){
                    if(tileToCheck.occupied === false) {
                        legalMoves.push(moveCheck);
                    }
                }
                else {
                    var returnArray = (this.getLegalMoves(gamePieceType, moves, moveCheck, currentCoord));
                    for(var index in returnArray) {
                        if(JSON.stringify(returnArray[index]) !== JSON.stringify(currentCoord))
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
            this.emit('action', {callback:"diceRolled", details: {value:this.currentDiceValue, gamePieces:this.getLegalPieces()}}, data.socketID);
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
