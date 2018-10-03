
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
            if(data.type == "resources") {
                if (data.action == "init") {
                    this.septikon.initResources();
                } else {
                    console.error(data.action + " not a legal action for Resource update.");
                }
            }
            if (data.type == "dice") {
                this.septikon.game.dice.setValue(data.details.value);
            }
            console.log('UPDATE:');
            console.log(data);
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
