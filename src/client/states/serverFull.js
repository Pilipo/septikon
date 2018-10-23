import Septikon from '../prefabs/septikon';

class ServerFull extends Phaser.State {

  constructor() {
    super();
  }

  create() {
    console.log("Server is full. Try again later.");
  }
}

export default ServerFull;
