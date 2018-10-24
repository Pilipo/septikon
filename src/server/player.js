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

    getEspionagedClones() {
        let returnArray = [];
        let clones = this.getPersonnel('clone');
        for (let i in clones) {
            if (clones[i].underEspionage === true) {
                returnArray.push(clones[i]);
            }
        }
        return returnArray;
    }

    getGunners() {
        let returnArray = [];
        let clones = this.getPersonnel('clone');
        for (let i in clones) {
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
            'biomass'
        ];
        var rec = null;
        for (var i in recArray) {
            rec = new Resource(recArray[i]);
            this.resourceArray[recArray[i]] = [];
            for (var count = 0; count < 10; count++) {
                if (count < 5) {
                    this.resourceArray[recArray[i]].push(rec);
                } else {
                    this.resourceArray[recArray[i]].push(null);
                }
            }
        }
    }

    getResourceCount(type) {
        if (type === undefined) {
            let recArray = [
                'energy1', 
                'energy2',
                'oxygen',
                'metal',
                'biodrone',
                'rocket',
                'uranium',
                'biomass'
            ];
            let returnArray = [];
            for (let i in recArray) {
                returnArray.push([recArray[i],this.getResourceCount(recArray[i])]);
            }
            return returnArray;
        }
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
        if (spendType[0] === "oxygen" && yieldType[0] === "oxygen" && this.checkResource(spendType, spendCount) === true && this.checkResource(yieldType, [1], true) === true) {
            this.spendResource(spendType, spendCount);
            this.acceptResource(yieldType, yieldCount);
            return true;
        } else if ( (spendCount === 0 || this.checkResource(spendType, spendCount) === true) && this.checkResource(yieldType, yieldCount, true) === true ) {
            this.spendResource(spendType, spendCount);
            this.acceptResource(yieldType, yieldCount);
            return true;
        } else {
            return false;
        }
    }

    // "Accept" set to TRUE checks for room to accept a yield
    checkResource(type, count, accept) {
        if (type === undefined || type === null) {
            return false;
        }
        if (count === undefined || count === 0) {
            return false;
        }
        if (accept === undefined) {
            accept = false;
        }
        for (let j in type) {
            let thisType = type[j];
            let thisCount = count[j];
            let resCollection = this.resourceArray[thisType];
            let resFound = 0;
            let resEmptySlots = 0;
            let blockedByDamage = false;

            if (thisType === "energy") {
                let e1 = this.checkResource(["energy1"], [thisCount], accept);
                let e2 = this.checkResource(["energy2"], [thisCount], accept);

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

            if (accept === true && resEmptySlots >= thisCount && blockedByDamage === false) {
                return true;
            } else if (accept === false && resFound >= thisCount) {
                return true;
            }

        }
        return false;
    }      

    spendResource(type, count) {
        for (let j in type) {
            let thisType = type[j];
            let thisCount = count[j];
            if (this.checkResource([thisType], [thisCount]) === false) {
                return false;
            }
            console.log("Spending " + thisCount + " of " + thisType);

            if (thisType == "energy") {
                let success = false;
                while (thisCount > 0) {
                    success = this.spendResource(["energy1"], [1]);
                    if (success !== false) {
                        thisCount--;
                    } else {
                        success = this.spendResource(["energy2"], [1]);
                        if (success !== false) {
                            thisCount--;
                        }
                    }
                }
                return;
            }

            let targetIndex = null;
            for (let i = 9; i > -1; i--) {
                if (this.resourceArray[thisType][i] !== null) {
                    this.resourceArray[thisType][i] = null;
                    thisCount--;
                    if (thisCount === 0) {
                        break;
                    }
                }
            }
        }
    }

    acceptResource(type, count) {
        for (let j in type) {
            let thisType = type[j];
            let thisCount = count[j];
            if (this.checkResource([thisType], [thisCount], true) === false) {
                return false;
            }
            console.log("Yielding " + thisCount + " of " + thisType);

            // This should eventually allow the client to select which resource pool to use
            if (thisType === "energy") {
                let success = false;
                while (thisCount > 0) {
                    console.log("Beginning while: " + thisCount);
                    success = this.acceptResource(["energy1"], [1]);
                    if (success !== false) {
                        thisCount--;
                    } else {
                        success = this.acceptResource(["energy2"], [1]);
                        if (success !== false) {
                            thisCount--;
                        }
                    }
                }
                return;
            }

            let lastDamageIndex = 0;

            for (let i = 0; i < 10; i++) {
                if (this.resourceArray[thisType][i] !== null && this.resourceArray[thisType][i].damaged === true) {
                    lastDamageIndex = i;
                }
            }

            for (let k = lastDamageIndex; k < 10; k++) {
                if (this.resourceArray[thisType][k] === null) {
                    let rec = new Resource(thisType);
                    this.resourceArray[thisType][k] = rec;
                    thisCount--;
                }
                if (thisCount === 0) {
                    return;
                }
            }
        }
    }
}

module.exports.Player = Player;
