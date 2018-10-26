class Ordnance {

    constructor(type, x, y, uuid) {
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
    }
}


module.exports.Ordnance = Ordnance;
