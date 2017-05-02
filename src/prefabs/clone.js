//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class Clone extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, frame) {
    super(game, x, y, 'clone', frame);

    //setup physics properties
    this.anchor.setTo(0.5, 0.65);
    this.game.physics.arcade.enableBody(this);
    this.body.collideWorldBounds = true;

    //set click event
    //this.inputEnabled = true;
    //this.events.onInputDown.add(this.clicked, this);

    //setup audio
    this.ding = this.game.add.audio('ding');

    //set size
    this.width = 27;
    this.scale.y = Math.abs(this.scale.x);
    
    //set rotation (this should be based on the base this clone occupies)
    this.angle = 90;

    // add animations from spritesheets
    this.animations.add('idling',null,5,true);
    this.animations.play('idling');

    this.currentTileCoordinates = this.game.septikon.pixelsToTile(this.x, this.y);
  }

  
  getLegalMoves(){
  
    this.currentTileCoordinates = this.game.septikon.pixelsToTile(this.x, this.y);
    this.currentLegalMoves = this.game.septikon.getLegalMoves(this.game.global.lastDiceRoll, this.currentTileCoordinates);
    this.legalTilesArray = [];
    
    for (var tile in this.currentLegalMoves) {
        this.legalTilesArray.push(this.game.septikon.tileArray[this.currentLegalMoves[tile].x][this.currentLegalMoves[tile].y]);
        this.legalTilesArray[this.legalTilesArray.length-1].alpha = 0.5;
        this.legalTilesArray[this.legalTilesArray.length-1].legalFor = this;
    }
    
  }
  
  move(coordinates) {
  
    //IS IS LEGAL?

    //REMOVE "legalFor"
    for (var tile in this.legalTilesArray) {
        this.legalTilesArray[tile].alpha = 0;
        delete this.legalTilesArray[tile].legalFor;
    }
    
    //MOVE to new home
    var points = this.game.septikon.tileToPixels(coordinates.x, coordinates.y);
    var distance = Math.abs(this.y - points.y + this.x - points.x).toFixed(1);
    var tween = this.game.add.tween(this).to( {x:points.x, y:points.y}, (distance*11), Phaser.Easing.Cubic.Out, true);
    
    if(this.game.septikon.tileArray[coordinates.x][coordinates.y].tileType == 'surface') {
        tween.onComplete.add(this.fire, this);
    } else {
        this.finishTurn();
    }
    this.currentTileCoordinates = coordinates;

    
    //CLEAR this.currentLegalMoves
    delete this.legalTilesArray;
    delete this.currentLegalMoves;    
    
    //SET turn state
    //this.game.septikon.turnState = this.game.septikon.turnStateEnum.ACTION;
    
    //this.fire();
  }
  
  fire(weaponType) {
    this.game.septikon.shootTile(this.currentTileCoordinates);
    
    this.game.septikon.turnState = this.game.septikon.turnStateEnum.END;
    this.finishTurn();
  }
  
  finishTurn() {
    this.game.septikon.turnState = this.game.septikon.turnStateEnum.START;
    console.log("Alas. Your turn is over. " + this.game.septikon.turnState);
  }
  
}

export default Clone;
