//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html

class Clone extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, frame, uuid) {
    super(game, x, y, 'clone', frame);
        
    //setup physics properties
    this.anchor.setTo(0.5, 0.65);
    this.game.physics.arcade.enableBody(this);
    //this.body.collideWorldBounds = true;

    this.uuid = uuid;
    //set size
    this.width = 27;
    this.scale.y = Math.abs(this.scale.x);
    
    //set rotation (this should be based on the base this clone occupies)
    this.angle = this.game.boardGroup.angle * -1;

    this.currentTileCoordinates = this.game.septikon.pixelsToTile(this.x, this.y);
    this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].tileOccupied = true;

  }
  
  remove() {
    this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].tileOccupied = false;
    this.destroy();
  }

  highlightOn() {
    this.tint = 0xFF5500;
    this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].alpha = 1;
  }
  
  highlightOff() {
    this.tint = 0xffffff;
    this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].alpha = 0;
  }
  
  getLegalMoves() {
    this.currentTileCoordinates = this.game.septikon.pixelsToTile(this.x, this.y);
    var currentLegalMoves = this.game.septikon.getLegalMoves(this.game.global.lastDiceRoll, this.currentTileCoordinates);
    var legalTilesArray = [];
    
    
    for (var tile in currentLegalMoves) {
        legalTilesArray.push(this.game.septikon.tileArray[currentLegalMoves[tile].x][currentLegalMoves[tile].y]);
        //legalTilesArray[legalTilesArray.length-1].alpha = 0.5;
        //legalTilesArray[legalTilesArray.length-1].legalFor = this;
    }
    
    return legalTilesArray;
  }
  
  move(coordinates) {
  
    // Clear "legalFor"
    for (var tile in this.legalTilesArray) {
        this.legalTilesArray[tile].alpha = 0;
        delete this.legalTilesArray[tile].legalFor;
    }
    
    // Move to new home
    // Need to add a check for armed opponents (biodrones/espionaged clones/clones in enemy base, etc.)
    var points = this.game.septikon.tileToPixels(coordinates.x, coordinates.y);
    this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].tileOccupied = false;
    var distance = Math.abs(this.y - points.y + this.x - points.x).toFixed(1);
    
    // Update the personnel coordinate property
    this.currentTileCoordinates = coordinates;
    this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].tileOccupied = true;
    
    // Wait for animation to complete, then process tile trigger
    var tween = this.game.add.tween(this).to( {x:points.x, y:points.y}, (distance*11), Phaser.Easing.Cubic.Out, true);
    tween.onComplete.add(this.game.septikon.triggerTile, this.game.septikon);
    
    // Clear this.currentLegalMoves
    delete this.legalTilesArray;
    delete this.currentLegalMoves;    
  }
    
}

export default Clone;
