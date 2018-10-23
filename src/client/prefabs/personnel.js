class Personnel extends Phaser.Sprite {

  //initialization code in the constructor
    constructor(game, x, y, frame) {
        super(game, x, y, 'clone', frame);  
    }
  
}

export default Personnel;