class Septikon {
    
	constructor() {
        this.lastPlayerID = 0;
        this.players = [];
        this.teamEnum = Object.freeze({
            RED: 0,
            BLUE: 1
        });
	}

	addNewPlayer(socket) {
        this.lastPlayerID++;
        var player = {
            id: this.lastPlayerID,
            team: this.teamEnum.RED
        };
        console.log("creating new Player with id: " + player.id);
        this.players.push(player);
        
        return player;
	}

}

module.exports.Septikon = Septikon;
