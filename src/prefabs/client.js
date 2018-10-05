
class Client {
    
	constructor(septikon) {
        
		this.socket = io.connect();
        this.septikon = this.socket.septikon = septikon;
        
        this.socket.on('log', function(data){
            console.log('LOG: ');
            console.log(data);
        });

        this.socket.on('update', function(data){
            if(data.type == "personnel") {
                this.septikon.updatePersonnel(data);
            }
            if(data.type == "ordnance") {
                this.septikon.updateOrdnance(data);
            }
            if(data.type == "resources") {
                this.septikon.updateResources(data);
            }
            if(data.type == "tiles") {
                this.septikon.updateTiles(data);
            }
            if (data.type == "dice") {
                this.septikon.game.dice.setValue(data.details.value);
            }
            if (data.type == "info") {
                console.log(data);
                // this.septikon.updateInfo(data);
            }
        });

        this.socket.on('request', function(data){
            console.log('REQUEST: ');
            switch(data.details.type) {
                case "askStart":
                    this.septikon.showModal('askStart');
                    break;

            }
        });

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
