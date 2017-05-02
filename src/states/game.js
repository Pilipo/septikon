import Clone from '../prefabs/clone';
import Dice from '../prefabs/dice';

class Game extends Phaser.State {

  constructor() {
    super();
  }
  
  create() {
  
    //add background image
    this.background = this.game.add.sprite(0,0,'background');
    this.game.septikon.createTileArray(31, 21);
    

    //this.game.Septikon.bgRatio = this.background.texture.width / this.background.texture.height;
    //this.game.Septikon.worldRatio = this.game.world.width / this.game.world.height;
    //this.game.Septikon.updateScreen();
    
    //setup UI
    /*
    this.countdownText = this.add.text(this.game.world.centerX, 500, '', {
      font: '40px Arial', fill: '#ffffff', align: 'center'
    });
    this.countdownText.anchor.set(0.5,0);
    */
    this.dice = new Dice(this.game, 150, 770);
    this.game.add.existing(this.dice);
    this.rollText = this.add.text(150, 700, '', {
      font: '40px Arial', fill: '#ffffff', align: 'center'
    });
    this.rollText.anchor.set(0.5,0);

    //setup prefabs
    var point = (this.game.septikon.tileToPixels(8,10));
    this.clone = new Clone(this.game,point.x,point.y);
    this.game.add.existing(this.clone);
  }
  
  update() {
    //this.test.angle += 5;
    this.rollText.setText("Dice Roll " + this.game.global.lastDiceRoll);
    //this.countdownText.setText( (this.game.input.x).toFixed(1) + " :: " + (this.game.input.y).toFixed(1));
  }

  endGame() {
    this.game.state.start('gameover');
  }

}

export default Game;
