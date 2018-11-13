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
        this.spyArray = [];
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
        this.resourceMap = require('../../assets/resourceMap.json');
        this.initResources();
    }

    clearQueues() {
        this.selectedPersonnelToMove = null;
        this.selectedGunners = [];
        this.currentLegalPieces = [];
    }

    addSpy(personnel) {
        this.spyArray.push(personnel);
    }
        
    addPersonnel(type, x, y, uuid) {
        let personnel = null;
        if(type == "clone") {
            personnel = new Personnel('clone', x, y, uuid, this.id);
            this.personnelArray.push(personnel);
            return personnel;
        } else if (type == "biodrone") {
            personnel = new Personnel('biodrone', x, y, uuid, this.id);
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

    removeSpy(spy) {
        for (let i in this.spyArray) {
            if (this.spyArray[i].uuid === spy.uuid) {
                this.spyArray.splice(i, 1);
            }
        }
    }

    getSpies() {
        return this.spyArray;
    }

    getPersonnel(type) {
        var returnArray = [];
        for (var i = 0; i < this.personnelArray.length; i++) {
            if (typeof type === 'undefined' || this.personnelArray[i].type === this.personnelArray[i].typeEnum[type.toUpperCase()]) {
                returnArray.push(this.personnelArray[i]);
            }
        }
        if (returnArray.length === 0) {
            return false;
        }
        return returnArray;
    }

    getSpysByUUID(uuid) {
        let spies = this.getSpies();
        for (let i in spies) {
            if (spies[i].uuid === uuid) {
                return spies[i];
            }
        }
        return false;
    }

    getPersonnelByUUID(uuid, type) {
        var personnel = this.getPersonnel();
        personnel = personnel.concat(this.getSpies());
        for (var i in personnel) {
            if (personnel[i].uuid === uuid) {
                if (type === undefined || personnel[i].type === personnel[i].typeEnum[type.toUpperCase()])
                return personnel[i];
            }
        }
        return false;
    }

    getSpyByPoint(point) {
        let spies = this.spyArray;
        for (let i in spies) {
            if (spies[i].x === point.x && spies[i].y === point.y) {
                return spies[i];
            }
        }
        return false;
    }

    getPersonnelByPoint(point, type) {
        var personnels = this.getPersonnel();
        personnels = personnels.concat(this.getSpies());
        for (var i = 0; i < personnels.length; i++) {
            if (personnels[i].x === point.x && personnels[i].y === point.y) {
                if (type === undefined || personnels[i].type === personnels[i].typeEnum[type.toUpperCase()]) {
                    return personnels[i];
                }
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

    getArms () {
        let returnArray = [];
        for (let a in this.armsArray) {
            if (this.armsArray[a] === false) {
                continue;
            }
            returnArray.push(this.armsEnum[a]);
        }
        return returnArray;
    }

    unsetCloneGunnerByUUID (uuid) {
        let clone = this.getPersonnelByUUID(uuid);
        clone.isGunner = false;
    }

    setCloneGunnerByUUID (uuid) {
        let clone = this.getPersonnelByUUID(uuid);
        clone.isGunner = true;
    }

    addOrdnance(type, point, uuid) {
        let ord = new Ordnance(type, point.x, point.y, uuid, this.id);
        this.ordnanceArray.push(ord);
        return ord;
    }

    removeOrdnance(ord) {
        let uuid = ord.uuid;
        for (let i in this.ordnanceArray) {
            if (this.ordnanceArray[i].uuid === uuid) {
                this.ordnanceArray.splice(i,1);
            }
        }
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
            if(type === undefined || this.ordnanceArray[i].type === this.ordnanceArray[i].typeEnum[type.toUpperCase()])
                returnArray.push(this.ordnanceArray[i]);
        }
        if (returnArray.length === 0) {
            return false;
        }
        return returnArray;
    }

    remove(target) {
        if (target instanceof Personnel) {
            for (let i in this.personnelArray) {
                if (this.personnelArray[i].uuid === target.uuid) {
                    this.personnelArray.splice(i, 1);
                    return;
                }
            }
        } else if (target instanceof Ordnance) {
            for (let i in this.ordnanceArray) {
                if (this.ordnanceArray[i].uuid === target.uuid) {
                    this.ordnanceArray.splice(i, 1);
                    return;
                }
            }
        } else {
            console.error("Player.remove given bad param.");
            return false;
        }
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
        for (let i in recArray) {
            this.resourceArray[recArray[i]] = [];
            for (var count = 0; count < 10; count++) {
                let rec = new Resource(recArray[i]);
                if (count < 5) {
                    this.resourceArray[recArray[i]].push(rec);
                } else {
                    this.resourceArray[recArray[i]].push(null);
                }
            }
        }
    }

    getResourceArray(type) {
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
                returnArray.push([recArray[i],this.getResourceArray(recArray[i])]);
            }
            return returnArray;        
        }
        if (type === "energy") {
            return [this.getResourceArray("energy1"), this.getResourceArray("energy2")];
        } else {
            return [this.resourceArray[type]];
        }
    }

    getResourceByPoint(point, resType) {
        if (point.x < 2 || (point.x > 5 && point.x < 25) || point.x > 28 || point.y === 10) {
            return false;
        }
        for (var map in this.resourceMap[resType]) {
            if (parseInt(map)+1 !== this.id) {continue;}
            var res = this.resourceMap[resType][map];
            if (point.x === res.row){
                if (res.min > 0) {
                    return this.resourceArray[resType][20-point.y];
                } else {
                    return this.resourceArray[resType][point.y];
                }
            }
        }
        return false;
    }

    removeResourceByPoint(point, resType) {
        if (point.x < 2 || (point.x > 5 && point.x < 25) || point.x > 28 || point.y === 10) {
            return false;
        }
        var resReturn = null;
        for (var map in this.resourceMap[resType]) {
            if (parseInt(map)+1 !== this.id) {continue;}
            var res = this.resourceMap[resType][map];
            if (point.x === res.row){
                if (res.min > 0) {
                    resReturn = this.resourceArray[resType][20-point.y];
                    this.resourceArray[resType][20-point.y] = null;
                    return resReturn;
                } else {
                    resReturn = this.resourceArray[resType][point.y];
                    this.resourceArray[resType][point.y] = null;
                    return resReturn;
                }
            }
        }
        return false;
    }

    getTheftableResourcePoints(point) {
        if (point.x < 2 || (point.x > 5 && point.x < 25) || point.x > 28 || point.y !== 10) {
            return false;
        }
        var resReturn = [];
        for (let res in this.resourceMap) {
            let obj = this.resourceMap[res][this.id-1];
            if (obj.row === point.x) {
                if (this.checkResource([res], [1]) === false) { continue; }
                let found = false;
                let searchY = point.y;
                let firstResource = null;
                while (found === false) {
                    if (obj.min > 0) {
                        searchY++;
                    } else {
                        searchY--;
                    }
                    firstResource = this.getResourceByPoint({x:point.x, y:searchY}, res);
                    if (firstResource !== null && firstResource !== false && firstResource !== undefined) {
                        found = true;
                        resReturn.push({x:point.x, y:searchY, resource:res});
                    }
                }
            }
        }
        return resReturn;
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
        if (spendType !== null && spendType[0] === "oxygen" && yieldType[0] === "oxygen" && this.checkResource(spendType, spendCount) === true && this.checkResource(yieldType, [1], true) === true) {
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
            if (thisType === "energy") {
                let success = false;
                while (thisCount > 0) {
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
