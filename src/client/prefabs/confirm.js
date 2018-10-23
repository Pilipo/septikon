//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class Confirm extends Phaser.Sprite {

    //initialization code in the constructor
    constructor(game, x, y) {  
      super(game, x, y, 'text_go');
  
      //setup physics properties
      this.anchor.setTo(0.5, 0.5);
      this.game.physics.arcade.enableBody(this);
  
      //set click event
      this.inputEnabled = true;
      this.events.onInputDown.add(this.clicked, this);
  
      //set size
      this.width = 50;
      this.scale.y = Math.abs(this.scale.x);
      // this.filters = [this.game.add.filter('Gray')];
      // this.alpha = 0.5;
    }
  
    clicked () {
      this.game.client.sendInput({event: 'confirmClicked'});
    }
  
    enable() {
        // this.alpha = 1;
        this.filters = null;
        // this.inputEnabled = true;
    }
  
    disable() {
        // this.alpha = 0.5;
        // this.filters = [this.game.add.filter('Gray')];
        // this.inputEnabled = false;
    }
  
  }
  
  export default Confirm;
  