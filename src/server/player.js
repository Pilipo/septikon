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
        this.readyToStart = false;
        this.startingCloneCount = 5;

        this.initResources();
        console.log('complete')
    }
        
    addPersonnel(type, x, y, uuid) {
        if(type == "clone" && this.getPersonnel(type).length < this.startingCloneCount) {
            this.personnelArray.push(new Personnel('clone', x, y, uuid));
            return true;
        }
        return false;
    }

    removePersonnel(personnel, purgeAll) {
        if (purgeAll === true) {
            this.personnelArray = [];
            return;
        }
    }
    
    getPersonnel(type) {
        var returnArray = [];
        for(var i in this.personnelArray) {
            if(this.personnelArray[i].type == 0)
                returnArray.push(this.personnelArray[i]);
        }
        return returnArray;
    }

    initResources() {
        var recArray = [
            'energy1', 
            'energy2',
            'oxygen',
            'metal',
            'biodrone',
            'rocket',
            'uranium',
            'biomass'
            ];
        var rec = null;
        for (var i in recArray) {
            rec = new Resource(recArray[i]);
            this.resourceArray[recArray[i]] = [];
            for (var count = 0; count < 5; count++) {
                this.resourceArray[recArray[i]].push(rec);
            }
            for (var count = 0; count < 5; count++) {
                this.resourceArray[recArray[i]].push(null);
            }
        }
    }
}

module.exports.Player = Player;
