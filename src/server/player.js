var Personnel = require('./personnel').Personnel;
var Resource = require('./resource').Resource;
var Ordnance = require('./ordnance').Ordnance;


class Player {

    constructor(socketID, id, uuid) { 
        this.socketID = socketID;
        this.id = id; //player 1 or player 2; this will determine the side of the board at client start.
        this.uuid = uuid;
        this.personnelArray = [];
        this.resourceArray = [];
        this.ordnanceArray = [];
        
        this.startingCloneCount = 5;    
    }
        
    addPersonnel(type, x, y) {
        if(type == "clone" && this.getPersonnel(type).length < this.startingCloneCount) {
            this.personnelArray.push(new Personnel('clone', x, y));
            return true;
        }
        return false;
    }
    
    getPersonnel(type) {
        var returnArray = [];
        for(var i in this.personnelArray) {
            if(this.personnelArray[i].type == 0)
                returnArray.push(this.personnelArray[i]);
        }
        return returnArray;
    }
}

module.exports.Player = Player;
