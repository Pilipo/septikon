var Player = require('./player').Player;

class Septikon {
    
	constructor(io) {
        this.io = io;
        this.lastPlayerID = 0;
        this.players = [];
        this.gameState = 0;
        this.playerTurnID = this.lastPlayerID;
        
        this.gameStateEnum = Object.freeze({
            SETUP: 0,
            GAME: 1, 
            PAUSE: 2,
            END: 3
        });
        
        this.turnStateEnum = Object.freeze({
            ROLL: 0,
            MOVE: 1, 
            ACTION: 2,
            END: 3
        });
	}

	addNewPlayer(socketID) {
        this.lastPlayerID++;
        
        //if(this.players.length < 2) {
            var player = new Player(socketID, this.lastPlayerID);
            this.players.push(player);
            return player;
        //}
	}
    
    clicked(data) {
        
        //check game state
        
        switch (this.gameState) {
        
            case this.gameStateEnum.SETUP:

                //check if tile is type: surface, battle, armory, lock, or production
                //check if tile belongs to player's team
                //add clone to player's personnel
                for (var i in this.players) {
                    if (this.players[i].id === this.lastPlayerID) {
                        var currentPlayer = this.players[i];
                    }
                }
                
                if(typeof(currentPlayer) != 'undefined') {
                    if(currentPlayer.addPersonnel('clone', data.x, data.y)) {
                        this.io.sockets.connected[currentPlayer.socketID].emit('log', {msg:"clone added", details: data});
                    }
                } else {
                    console.log('player not found');        
                }

                break;
                
            case this.gameStateEnum.GAME:
            
                //check turnState
                
                break;
                
            default:
                break;
        }
           
    }

}

module.exports.Septikon = Septikon;
