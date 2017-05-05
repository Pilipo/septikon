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
    if(this.game.septikon.turnState == this.game.septikon.turnStateEnum.START ) {
        this.game.global.lastDiceRoll = Math.floor(Math.random() * 6) + 1;
        this.game.septikon.turnState = this.game.septikon.turnStateEnum.SELECT_CLONE;
        this.game.septikon.localTeam.offerLegalClones();
    } else if(this.game.septikon.turnState == this.game.septikon.turnStateEnum.SELECT_GUNNER) {
        if(this.game.septikon.pendingAction) {
            console.log("Gunners Confirmed!");
            var action = this.game.septikon.pendingAction;
            this.game.septikon[action.props.callback](action.props.args, action.caller);
        }
    } else {
        console.log("Dice already rolled for this turn (turn state: " + this.game.septikon.turnState + "). The value is: " + this.game.global.lastDiceRoll);
    }
  }

}

export default Dice;
