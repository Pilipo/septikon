
class Client {
    
	constructor(septikon) {
        
		this.socket = io.connect();
        this.septikon = this.socket.septikon = septikon;
        
        this.socket.on('log', function(data){
            console.log('LOG: ');
            console.log(data);
        });

        // All messages from server contain data.type and data.action
        // type = one of either "personnel" or "resource" or whatever. 
        // action = create, read, update, or delete.  
        this.socket.on('update', function(data){
            console.log(data);
            if (data.type === "personnel") {
                if (data.details.action === "create") {
                    this.septikon.addPersonnel(data);
                } else if (data.details.action === "update") {
                    this.septikon.updatePersonnel(data);
                } else if (data.details.action === "delete") {
                    this.septikon.deletePersonnel(data);
                }
            } else if (data.type === "ordnance") {
                this.septikon.updateOrdnance(data);
            } else if (data.type === "resources") {
                this.septikon.updateResources(data);
            } else if (data.type === "tile") {
                this.septikon.updateTile(data);
            } else if (data.type === "dice") {
                this.septikon.game.dice.setValue(data.details.value);
            } else if (data.type === "arms") {
                // this may need to be a basic personnel update?
                console.log("update personnel arms!");
                console.log(data);
                this.septikon.updateArms(data);
            } else if (data.type === "info") {
                console.log(data);
                // this.septikon.updateInfo(data);
            } else {
                console.log(data);
            }
        });

        // Request messages are looking for client response to a modal message
        this.socket.on('request', function(data){
            console.log('REQUEST: ');
            switch(data.details.type) {
                case "askStart":
                    this.septikon.showModal('askStart');
                    break;

            }
        });

        // This goes away
        this.socket.on('action', function(data){
            console.log("ACTION: ");
            if (typeof(this.septikon[data.callback]) === "function") {
                console.log(data);
                this.septikon[data.callback](data.details);

            } else {
                console.log("ERROR: no method found called septikon." + data.callback);
            }
        });
	}

	askNewPlayer() {
		this.socket.emit('newPlayer', {uuid:localStorage.getItem('septUUID')});
	}
    
    sendInput(payload) {
        console.log('sending input');
        this.socket.emit('input', payload);
    }
}

export default Client;
