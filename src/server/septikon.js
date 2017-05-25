var Player = require('./player').Player;

class Septikon {
    
	constructor(io) {
        this.io = io;
        this.lastPlayerID = 0;
        this.playersArray = [];
        this.gameState = 0;
        this.turnState = 0;
        this.uuid = require('uuid/v4')();
        
        this.currentPlayerID = this.lastPlayerID;
        
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

        this.tileColumns = 31;
        this.tileRows = 21;

        this.tileArray = [];
        this.createTileArray();      
	}

	addNewPlayer(socketID, uuid) {
        this.lastPlayerID++;
        this.currentPlayerID = this.lastPlayerID;
        var player = new Player(socketID, this.lastPlayerID, uuid);
        this.playersArray.push(player);
        this.emit('action', {callback: 'updatePlayer', details: {id: this.lastPlayerID}}, socketID);
        return player;
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
                    console.log("player ready to start, but waiting on opponent! \nTODO: \n - Send message to both users' HUDs.");
                    return;
                } else {
                    console.log("players have both confirmed! Rattle dem bones...");
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
    
    getPlayerByUUID(uuid) {
        for (var i in this.playersArray) {
            if(this.playersArray[i].uuid == uuid)
                return this.playersArray[i];
        }
        return false;
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
            if(player.id != selectedTile.owner) {
                return;
            }

            if(selectedTile.type == "lock" || selectedTile.type == "battle" || selectedTile.type == "armory" || selectedTile.type == "production" || selectedTile.type == "surface") {
                var uuid = require('uuid/v4')();
                if(player.addPersonnel('clone', x, y, uuid)) {
                    this.emit('action', {callback:"addClone", details: {x:x, y:y, playerID: player.id, uuid:uuid}}, player.socketID);
                    if(player.getPersonnel('clone').length == player.startingCloneCount) {
                        console.log("sending modal request");
                        this.emit('request', {callback:"modal", details: {type:"askStart"}}, player.socketID);
                    }
                }
            }

        } else {
            console.log('ERROR: player not found!');        
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
    
    rollDice(data) {
        if(this.turnState == this.turnStateEnum.ROLL && this.gameState == this.gameStateEnum.GAME) {
            this.currentDiceValue = Math.floor(Math.random() * 6) + 1;
            this.emit('action', {callback:"diceRolled", details: {value:this.currentDiceValue}}, data.socketID);
            this.emit('log', {msg:"Player rolled " + this.currentDiceValue});
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
