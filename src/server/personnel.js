class Personnel {

    constructor(type, x, y, uuid) {
        this.typeEnum = Object.freeze({
            clone: 0,
            biodrone: 1
        });
        
        this.x = x;
        this.y = y;
        this.uuid = uuid;
        this.underEspionage = false;
        this.isGunner = false;
        
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
