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
        this.armsArray = [];

        this.initResources();
    }
        
    addPersonnel(type, x, y, uuid) {
        if(type == "clone" && this.getPersonnel(type).length < this.startingCloneCount) {
            var personnel = new Personnel('clone', x, y, uuid);
            this.personnelArray.push(personnel);
            return personnel;
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
            if(type === null || this.personnelArray[i].type == 0)
                returnArray.push(this.personnelArray[i]);
        }
        return returnArray;
    }

    getPersonnelByUUID(uuid) {
        var personnel = this.getPersonnel();
        for (var i in personnel) {
            if (personnel[i].uuid == uuid) {
                return personnel[i];
            }
        }
        return false;
    }

    getGunners() {
        var returnArray = [];
        var clones = this.getPersonnel('clone');
        for (var i in clones) {
            if (clones[i].isGunner) {
                returnArray.push(clones[i]);
            }
        }
        return returnArray;
    }

    getOrdnance(type) {
        var returnArray = [];
        for(var i in this.ordnanceArray) {
            if(type === null || this.ordnanceArray[i].type == 0)
                returnArray.push(this.ordnanceArray[i]);
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

    getResourceCount(type) {
        var foundResources = 0;
        var currentResourceSlot = 9;

        if (type == "energy") {
            return this.getResourceCount('energy1') + this.getResourceCount('energy2');
        }

        while (currentResourceSlot >= 0) {
            if (this.resourceArray[type][currentResourceSlot] === null) {
                currentResourceSlot--;
                continue;
            } else if (this.resourceArray[type][currentResourceSlot].damaged === true) {
                return foundResources;
            } else {
                foundResources++;
            }
            currentResourceSlot--;
        }
        return foundResources;
    }

    // CheckResource defaults to assume you are checking to spend a resource. Set "accept" to true if you are checking to receive a resource
    checkResource(type, count, accept) {
        var currentResourceSlot = 9;
        var foundResources = 0;
        var resourceSlots = 0;

        if(type == "nuke") {
            console.log("special case: this produces ordnance. Check back later...");
            return false;
        }

        if(type == "energy") {
            var e1 = this.checkResource("energy1", count, accept);
            var e2 = this.checkResource("energy2", count, accept);

            if(e1 === true) {
                return e1;
            } else if (e2 === true) {
                return e2;
            } else {
                return false;
            }
        }

        while (currentResourceSlot >= 0) {
            if (this.resourceArray[type][currentResourceSlot] === null) {
                if (accept === true) {
                    resourceSlots++;
                    if (resourceSlots == count) {
                        return true;
                    }
                }
                currentResourceSlot--;
                continue;
            } else if (this.resourceArray[type][currentResourceSlot].damaged === true) {
                if(accept === true) {
                    // return false;
                } else {
                    return false;
                }
            } else {
                foundResources++;
            }

            if(accept !== false && foundResources === count) {
                return true;
            }
            currentResourceSlot--;
        }
        return false;
    }

    spendResource(type, count) {
        var currentResourceSlot = 9;
        var originalCount = count;

        if (type == "energy") {
            var success = false;
            while (count > 0) {
                success = this.spendResource("energy1", 1);
                if (success !== false) {
                    count--;
                } else {
                    success = this.spendResource("energy2", 1);
                    if (success !== false) {
                        count--;
                    }
                }
            }
            return originalCount;
        }

        while (currentResourceSlot >= 0 && count > 0) {
            if (this.resourceArray[type][currentResourceSlot] === null) {
                currentResourceSlot--;
                continue;
            } else if (this.resourceArray[type][currentResourceSlot].damaged === true) {
                //console.error("Tried to spend resources you don't have!");
                return false;
            } else {
                this.resourceArray[type][currentResourceSlot] = null;
                count--;
            }
        }

        return originalCount;
    }

    acceptResource(type, count) {
        var resource = null;
        var currentResourceSlot = 9;
        var searching = true;
        var originalCount = count;

        if (type == "energy") {
            var success = false;
            while (count > 0) {
                success = this.acceptResource("energy1", 1);
                if (success !== false) {
                    count--;
                } else {
                    success = this.acceptResource("energy2", 1);
                    if (success !== false) {
                        count--;
                    }
                }
            }
            return originalCount;
        }
        while (1) {
            if (searching === true) {
                // peek at next resource
                if (this.resourceArray[type][currentResourceSlot] !== null) {
                    console.error("no room for this resource!");
                    return false;
                }
                if (currentResourceSlot == 0 || this.resourceArray[type][currentResourceSlot - 1] !== null) {
                    searching = false;
                    continue;
                }
                currentResourceSlot--;
            } else {
                if(currentResourceSlot + 1 > this.resourceArray[type].length) {
                    return originalCount - count;
                }
                resource = new Resource(type);
                this.resourceArray[type][currentResourceSlot] = resource;
                count--;
                if(count == 0) {
                    return originalCount;
                }
                currentResourceSlot++;
         }
            if(currentResourceSlot < 0) {
                console.error("Out of bounds. No empty resouruce slots found.");
                return false;
            }
        }
    }
}

module.exports.Player = Player;
