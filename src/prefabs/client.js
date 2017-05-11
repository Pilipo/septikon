
class Client {
    
	constructor(septikon) {
        
		this.socket = io.connect();
        this.septikon = this.socket.septikon = septikon;
        this.socket.on('log', function(data){
            console.log('LOG: ');
            console.log(data);
        });

        this.socket.on('action', function(data){
            console.log('ACTION: ');
            console.log(data);
            if (typeof(this.septikon[data.callback]) === "function") {
                this.septikon[data.callback](data.details);
            } else {
                console.log("ERROR: no method found called " + data.callback);
            }
        });
	}

	askNewPlayer() {
        console.log(localStorage.getItem('septUUID'));
		this.socket.emit('newPlayer', {uuid:localStorage.getItem('septUUID')});
	}
    
    sendInput(payload) {
        console.log('sending input');
        this.socket.emit('input', payload);
    }
}

export default Client;
