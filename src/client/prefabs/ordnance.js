class Ordnance extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, frame, type, uuid) {
    var ordFrame;
    switch (type.toLowerCase()) {
      case "shield":
        ordFrame = 4;
        break;
      case "biodrone":
        ordFrame = 1;
        break;
      case "satellite":
        ordFrame = 5;
        break;
      case "rocket":
        ordFrame = 2;
        break;
      default:
        console.error("Bad ordnance type: " + type);
        return;
    }
    super(game, x, y, 'ordnance', ordFrame);

    //setup physics properties
    this.anchor.setTo(0.5, 0.5);
    this.game.physics.arcade.enableBody(this);
    //this.body.collideWorldBounds = true;

    this.uuid = uuid;
    this.type = type;
    //set size
    this.width = 50;
    this.scale.y = Math.abs(this.scale.x);
    
    //set rotation (this should be based on the base this clone occupies)
    this.angle = this.game.boardGroup.angle * -1;

    this.currentTileCoordinates = this.game.septikon.pixelsToTile(this.x, this.y);
    this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].tileOccupied = true;

  }

  move(point) {
    let targetPixels = this.game.septikon.tileToPixels(point.x, point.y);
    let distance = Math.abs(this.y - targetPixels.y + this.x - targetPixels.x).toFixed(1);
    let tween = this.game.add.tween(this).to( {x:targetPixels.x, y:targetPixels.y}, 1200, Phaser.Easing.Cubic.Out, true);
  }
  
}

export default Ordnance;