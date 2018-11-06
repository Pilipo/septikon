//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html

class Biodrone extends Phaser.Sprite {

    //initialization code in the constructor
    constructor(game, x, y, frame, uuid) {
      super(game, x, y, 'ordnance', 1);
      this.anchor.setTo(0.5, 0.65);
      this.game.physics.arcade.enableBody(this);
      this.uuid = uuid;
      this.width = 27;
      this.scale.y = Math.abs(this.scale.x);
      this.angle = this.game.boardGroup.angle * -1;
      this.game.personnelGroup.add(this);
    }
    remove() {
      this.destroy();
    }  
    move(point) {
      let targetPixels = this.game.septikon.tileToPixels(point.x, point.y);
      let distance = Math.abs(this.y - targetPixels.y + this.x - targetPixels.x).toFixed(1);
      let tween = this.game.add.tween(this).to( {x:targetPixels.x, y:targetPixels.y}, 1200, Phaser.Easing.Cubic.Out, true);
      // tween.onComplete.add(this.game.septikon.triggerTile, this.game.septikon);
    }
  }
  
  export default Biodrone;
  