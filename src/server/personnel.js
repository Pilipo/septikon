class Personnel {

    constructor(type, x, y, uuid) {
        this.typeEnum = Object.freeze({
            CLONE: 0,
            BIODRONE: 1
        });
        
        this.x = x;
        this.y = y;
        this.uuid = uuid;
        this.underEspionage = false;
        this.isGunner = false;
        this.type = this.typeEnum[type.toUpperCase()];
        
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
}

module.exports.Personnel = Personnel;
