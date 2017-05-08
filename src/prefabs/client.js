
class Client {
    
	constructor() {
		this.socket = io.connect();
	}

	askNewPlayer() {
		this.socket.emit('newPlayer');
	}

}

export default Client;
