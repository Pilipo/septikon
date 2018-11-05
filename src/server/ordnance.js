class Ordnance {

    constructor(type, x, y, uuid, playerID) {
        this.typeEnum = Object.freeze({
            SHIELD: 0,
            BIODRONE: 1,
            SATELLITE: 2,
            ROCKET: 3
        });
        
        this.x = x;
        this.y = y;
        this.uuid = uuid;
        this.type = this.typeEnum[type.toUpperCase()];
        this.owner = playerID;
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }

    getType() {
        for (let i in this.typeEnum) {
            if (this.typeEnum[i] === this.type) {
                return i;
            }
        }
    }
}


module.exports.Ordnance = Ordnance;
