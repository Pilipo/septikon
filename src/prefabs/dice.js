//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class Dice extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, frame) {  
    super(game, x, y, 'dice', frame);

    //setup physics properties
    this.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enableBody(this);

    //set click event
    this.inputEnabled = false;
    this.events.onInputDown.add(this.clicked, this);

    //set size
    this.width = 50;
    this.scale.y = Math.abs(this.scale.x);
    this.filters = [this.game.add.filter('Gray')];
    this.alpha = 0.5;
    
    this.value = 10;
    this.frame = this.value-1;
  }

  clicked () {
    this.game.client.sendInput({event: 'diceClicked'});
  }

  enable() {
      this.alpha = 1;
      this.filters = null;
      this.inputEnabled = true;
  }

  disable() {
      this.alpha = 0.5;
      this.filters = [this.game.add.filter('Gray')];
      this.inputEnabled = false;
  }

  setValue(value) {
    this.value = value;
    this.frame = value - 1;
  }
}

export default Dice;
