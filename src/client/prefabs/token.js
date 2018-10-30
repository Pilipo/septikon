//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html

class Token extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, key, frame, uuid) {
    super(game, x, y, key, frame);
        
    //setup physics properties
    this.anchor.setTo(0.5, 0.65);
    this.game.physics.arcade.enableBody(this);

    this.uuid = uuid;
    this.width = 27;
    this.scale.y = Math.abs(this.scale.x);
    
    //set rotation (this should be based on the base this clone occupies)
    this.angle = this.game.personnelGroup.angle * -1;

    this.currentTileCoordinates = this.game.septikon.pixelsToTile(this.x, this.y);
    this.game.personnelGroup.add(this);
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
  
  move(targetTile) {
    let targetPixels = this.game.septikon.tileToPixels(targetTile.x, targetTile.y);
    let distance = Math.abs(this.y - targetPixels.y + this.x - targetPixels.x).toFixed(1);
    let tween = this.game.add.tween(this).to( {x:targetPixels.x, y:targetPixels.y}, 2400, Phaser.Easing.Cubic.Out, true);
    tween.onComplete.add(this.game.septikon.triggerTile, this.game.septikon);
  }
    
}

export default Clone;
