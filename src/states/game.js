
class Game extends Phaser.State {

  constructor() {
    super();
  }
  
  create() {
  
    //this.game.input.onDown.add(this.toggleFullscreen, this);
    this.game.stage.disableVisibilityChange = true;
    
    this.game.boardGroup = this.game.add.group();
    
    this.background = this.game.add.sprite(0,0,'background');
    var scale = window.innerWidth/this.background.height;

    //this.background.scale.setTo(scale, scale);
    //this.background.anchor.setTo(0.5,0.5);
    this.game.boardGroup.add(this.background);

    this.game.septikon.createTileArray(31, 21, {x:0, y:0});
    this.game.boardGroup.scale.setTo(scale);
    
    if(this.game.septikon.player.id == 1) {
        this.game.boardGroup.angle = 90; 
        this.game.boardGroup.x = this.game.boardGroup.height;
        this.game.boardGroup.y = window.innerHeight - this.game.boardGroup.width;
    } else {
        this.game.boardGroup.angle = -90; 
        this.game.boardGroup.y = this.background.width + window.innerHeight - this.background.width;
    }
    
  }
  
  update() {
    this.game.debug.text('Mouse', 700, 32);
    
    this.game.debug.text('Mouse X: ' + this.game.input.x, 700, 64);
    this.game.debug.text('Mouse Y: ' + this.game.input.y, 700, 92);
  }
  
  render () {
  
    var x = 32;
    var y = 0;
    var yi = 32;
    
    this.game.debug.text('Viewport', x, y += yi);

    this.game.debug.text('Viewport Width: ' + this.game.scale.viewportWidth, x, y += yi);
    this.game.debug.text('window.innerWidth: ' + window.innerWidth, x, y += yi);
    this.game.debug.text('window.outerWidth: ' + window.outerWidth, x, y += yi);

    this.game.debug.text('Viewport Height: ' + this.game.scale.viewportHeight, x, y += yi);
    this.game.debug.text('window.innerHeight: ' + window.innerHeight, x, y += yi);
    this.game.debug.text('window.outerHeight: ' + window.outerHeight, x, y += yi);

    //  Device: How to get device size.

    //  Use window.screen.width for device width and window.screen.height for device height. 
    //  .availWidth and .availHeight give you the device size minus UI taskbars. (Try on an iPhone.) 
    //  Device size is static and does not change when the page is resized or rotated.

    x = 350;
    y = 0;

    this.game.debug.text('Board Group', x, y += yi);

    this.game.debug.text('this.game.boardGroup.x: ' + this.game.boardGroup.x, x, y += yi);
    this.game.debug.text('this.game.boardGroup.y: ' + this.game.boardGroup.y, x, y += yi);
    this.game.debug.text('this.game.boardGroup.width: ' + this.game.boardGroup.width, x, y += yi);
    this.game.debug.text('this.game.boardGroup.height: ' + this.game.boardGroup.height, x, y += yi);

    x = 32;
    y = 300;

    this.game.debug.text('Background Detail', x, y += yi);

    this.game.debug.text('this.background.x: ' + this.background.x, x, y += yi);
    this.game.debug.text('this.background.y: ' + this.background.y, x, y += yi);
    this.game.debug.text('this.background.width: ' + this.background.width, x, y += yi);
    this.game.debug.text('this.background.height: ' + this.background.height, x, y += yi);

    }
    
  toggleFullscreen() {
    if(this.game.scale.isFullScreen) {
        this.game.scale.stopFullScreen();
    } else {
        this.game.scale.startFullScreen(false);
    }
  }
}

export default Game;
