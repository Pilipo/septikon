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
	}

	addNewPlayer(socketID, uuid) {
        this.lastPlayerID++;
        this.currentPlayerID = this.lastPlayerID;
        var player = new Player(socketID, this.lastPlayerID, uuid);
        this.playersArray.push(player);
        this.emit('action', {callback: 'updatePlayer', details: {id: this.lastPlayerID}}, socketID);
        return player;
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
            if(player.addPersonnel('clone', x, y)) {
                this.emit('action', {callback:"addClone", details: {x:x, y:y}}, player.socketID);
            }
        } else {
            console.log('ERROR: player not found!');        
        }
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
        if(msg == "response") {
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
