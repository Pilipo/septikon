class Personnel {

    constructor(type, x, y, uuid, playerID) {
        this.typeEnum = Object.freeze({
            CLONE: 0,
            BIODRONE: 1
        });
        
        this.x = x;
        this.y = y;
        this.uuid = uuid;
        this.spy = false;
        this.isGunner = false;
        this.type = this.typeEnum[type.toUpperCase()];
        this.owner = playerID;
        
        switch (type) {
            case 'biodrone':
                break;
            case 'clone':
                break;
            default:
                this.type = this.typeEnum[type];
                break;
        }
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

module.exports.Personnel = Personnel;
