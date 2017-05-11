//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class Dice extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, frame) {  
    super(game, x, y, 'dice', frame);

    //setup physics properties
    this.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enableBody(this);
    this.body.collideWorldBounds = true;

    //set click event
    this.inputEnabled = true;
    this.events.onInputDown.add(this.clicked, this);

    //set size
    this.width = 50;
    this.scale.y = Math.abs(this.scale.x);
    
    this.animations.add('idling',null,5,true);
    this.animations.play('idling');

  }

  clicked () {
    this.game.client.sendInput({event: 'diceClicked'});
    return;
  }

}

export default Dice;
