class Resource {

    constructor(type) {
        this.type = type;
        this.objectType = "resource";
        if (type === "rocket") {
            this.isNuke = false;
        }
    }
}

module.exports.Resource = Resource;
