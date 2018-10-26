class Resource {

    constructor(type) {
        this.type = type;
        if (type === "rocket") {
            this.isNuke = false;
        }
    }
}

module.exports.Resource = Resource;
