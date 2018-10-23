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
        this.armsArray = [false, false, false];
        this.armsEnum = Object.freeze({
            EXPLOSIVES: 0,
            DRILL: 1, 
            CANNON: 2,
        });
        this.selectedPersonnelToMove = null;
        this.selectedGunners = [];
        this.currentLegalPieces = [];

        this.initResources();
    }

    clearQueues() {
        this.selectedPersonnelToMove = null;
        this.selectedGunners = [];
        this.currentLegalPieces = [];
    }
        
    addPersonnel(type, x, y, uuid) {
        if(type == "clone") {
            var personnel = new Personnel('clone', x, y, uuid);
            this.personnelArray.push(personnel);
            return personnel;
        }
        console.log("personnel is not a clone type.");
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
        for (var i = 0; i < this.personnelArray.length; i++) {
            if (typeof type === 'undefined' || this.personnelArray[i].type === this.personnelArray[i].typeEnum[type.toUpperCase()]) {
                returnArray.push(this.personnelArray[i]);
            }
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

    getPersonnelByPoint(point) {
        var personnels = this.getPersonnel();
        for (var i = 0; i < personnels.length; i++) {
            if (personnels[i].x == point.x && personnels[i].y == point.y) {
                return personnels[i];
            }
        }
        return false;
    }

    checkPersonnelMove(personnel, point) {
        for (var i = 0; i < this.currentLegalPieces.length; i++) {
            if (personnel.x == this.currentLegalPieces[i].origin.x && personnel.y == this.currentLegalPieces[i].origin.y) {
                if (typeof point !== 'undefined') {
                    for (var j = 0; j < this.currentLegalPieces[i].moves.length; j++) {
                        if (this.currentLegalPieces[i].moves[j].x == point.x && this.currentLegalPieces[i].moves[j].y == point.y) {
                            return true;
                        }
                    } 
                } else {
                    return true;
                }
            }
        }
        return false;
    }

    addArms (type) {
        this.armsArray[type] = true;
    }

    removeArms (type) {
        this.armsArray[type] = false;
    }

    addOrdnance(type, point, uuid) {
        var ord = new Ordnance(type, point.x, point.y, uuid);
        this.ordnanceArray.push(ord);
        return ord;
    }

    purgeLegalPieces(personnel, purgeAllMatchingTypes) {
        if (typeof personnel === 'undefined') {
            this.currentLegalPieces = [];
            return;
        }
        var i = this.currentLegalPieces.length;
        while (
            i--) {
            if (this.currentLegalPieces[i].type === personnel.type && purgeAllMatchingTypes === true) {
                this.currentLegalPieces.splice(i,1);
            }
        }
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

    getSelectedGunners() {
        return this.selectedGunners;
    }

    clearSelectedGunners() {
        this.selectedGunners = [];
    }

    toggleGunnerSelection(gunner) {
        if (this.selectedGunners.length <= 0) {
            this.selectedGunners.push(gunner);
            return;
        }
        for (var i = 0; i < this.selectedGunners.length; i++) {
            if (JSON.stringify(gunner) === JSON.stringify(this.selectedGunners[i])) {
                this.selectedGunners.splice(i,1);
                return;
            }
        }
        this.selectedGunners.push(gunner);
    }

    getOrdnance(type) {
        var returnArray = [];
        for(var i in this.ordnanceArray) {
            if(type === null || this.ordnanceArray[i].type === 0)
                returnArray.push(this.ordnanceArray[i]);
        }
        return returnArray;
    }

    remove(target) {
        console.log(target);
    }

    getOrdnanceByPoint(point) {
        var ordnances = this.getOrdnance();
        for (var i = 0; i < ordnances.length; i++) {
            if (ordnances[i].x == point.x && ordnances[i].y == point.y) {
                return ordnances[i];
            }
        }
        return false;
    }

    moveOrdnance(count) {
        for (var i = 0; i < this.ordnanceArray.length; i++) {
            if (this.ordnanceArray[i].type == "biodrone" || this.ordnanceArray[i].type == "rocket" || this.ordnanceArray[i].type == "nuke") {
                if (this.id == 1) {
                    this.ordnanceArray[i].x += count;
                } else {
                    this.ordnanceArray[i].x -= count;
                }
            }
        }
        return this.ordnanceArray;
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
            'biomass',
            'nuke'
            ];
        var rec = null;
        for (var i in recArray) {
            rec = new Resource(recArray[i]);
            this.resourceArray[recArray[i]] = [];
            if (recArray[i] != "nuke") {
                for (var count = 0; count < 10; count++) {
                    if (count < 5) {
                        this.resourceArray[recArray[i]].push(rec);
                    } else {
                        this.resourceArray[recArray[i]].push(null);
                    }
                }
            }
        }
    }

    getResourceCount(type) {
        var foundResources = 0;
        var currentResourceSlot = 9;

        if (type == "energy") {
            return this.getResourceCount('energy1') + this.getResourceCount('energy2');
        }

        if (type == "nuke") {
            return this.resourceArray[type].length;
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

    produceResource(spendType, spendCount, yieldType, yieldCount) {
        // check if you can accept the yield
        if ( (spendCount === 0 || this.checkResource(spendType, spendCount) === true) && this.checkResource(yieldType, yieldCount, true) === true ) {
            this.spendResource(spendType, spendCount);
            this.acceptResource(yieldType, yieldCount);
            return true;
        } else {
            return false;
        }
    }

    // CheckResource defaults to assume you are checking to spend a resource. Set "accept" to true if you are checking to receive a resource
    checkResource(type, count, accept) {
        if (typeof (accept) === 'undefined') {
            accept = false;
        }
        let resCollection = this.resourceArray[type];
        let resFound = 0;
        let resEmptySlots = 0;
        let blockedByDamage = false;

        if (type == "energy") {
            let e1 = this.checkResource("energy1", count, accept);
            let e2 = this.checkResource("energy2", count, accept);

            if (e1 === true) {
                return e1;
            } else if (e2 === true) {
                return e2;
            } else {
                return false;
            }
        }

        for (let i = 9; i > -1; i--) {
            if (resCollection[i] !== null && resCollection[i].damaged === true) {
                if (resFound === 0) {
                    blockedByDamage = true;
                }
                break;
            }
            if (resCollection[i] === null) {
                resEmptySlots++;
            } else {
                resFound++;
            }
        }

        if (accept === true && resEmptySlots >= count && blockedByDamage === false) {
            return true;
        } else if (accept === false && resFound >= count) {
            return true;
        }

        return false;
    }      

    spendResource(type, count) {
        if (this.checkResource(type, count) === false) {
            return false;
        }

        if (type == "energy") {
            let success = false;
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
            return;
        }

        let targetIndex = null;
        for (let i = 9; i > -1; i--) {
            if (this.resourceArray[type][i] !== null) {
                this.resourceArray[type][i] = null;
                count--;
                if (count === 0) {
                    break;
                }
            }
        }
    }

    acceptResource(type, count) {
        if (this.checkResource(type, count, true) === false) {
            return false;
        }

        // This should eventually allow the client to select which resource pool to use
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
        }

        let lastDamageIndex = 0;

        for (let i = 0; i < 10; i++) {
            if (this.resourceArray[type][i] !== null && this.resourceArray[type][i].damaged === true) {
                lastDamageIndex = i;
            }
        }

        for (let j = lastDamageIndex; j < 10; j++) {
            if (this.resourceArray[type][j] === null) {
                this.resourceArray[type][j] = new Resource(type);
                count--;
            }
            if (count === 0) {
                return;
            }
        }
    }
}

module.exports.Player = Player;
