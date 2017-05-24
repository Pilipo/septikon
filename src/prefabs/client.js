
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
                for (var i in data.details) {
                    this.septikon.addClone(data.details[i]);
                }
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
            if (typeof(this.septikon[data.callback]) === "function") {
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
