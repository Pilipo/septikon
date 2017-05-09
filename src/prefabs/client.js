
class Client {
    
	constructor() {
		this.socket = io.connect();
        
        this.socket.on('log', function(data){
            console.log(data.msg);
            console.log(data.details);
        });
	}

	askNewPlayer() {
        console.log("sending newPlayer");
		this.socket.emit('newPlayer');
	}
    
    sendInput(payload) {
        this.socket.emit('input', payload);
    }
}

export default Client;
