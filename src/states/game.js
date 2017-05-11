
class Game extends Phaser.State {

  constructor() {
    super();
  }
  
  create() {
    this.game.stage.disableVisibilityChange = true;

    this.background = this.game.add.sprite(0,0,'background');
    this.game.septikon.createTileArray(31, 21);;
  }
}

export default Game;
