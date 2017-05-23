class Personnel {

    constructor(type, x, y) {
        this.typeEnum = Object.freeze({
            clone: 0,
            biodrone: 1
        });
        
        this.x = x;
        this.y = y;
        
        switch (type) {
            case 'biodrone':
                break;
            case 'clone':
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
