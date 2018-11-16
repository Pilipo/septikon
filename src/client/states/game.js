import Dice from '../prefabs/dice';
import Confirm from '../prefabs/confirm';

class Game extends Phaser.State {

  constructor() {
    super();
  }
  
  create() {
  
    //this.game.input.onDown.add(this.toggleFullscreen, this);
    this.game.stage.disableVisibilityChange = true;
    
    this.game.boardGroup = this.game.add.group();
    this.game.personnelGroup = this.game.add.group();
    this.game.ordnanceGroup = this.game.add.group();
    this.game.resourcesGroup = this.game.add.group();
    this.game.hudGroup = this.game.add.group();


    this.game.modal = new gameModal(this.game);
    this.createModals();

    this.background = this.game.add.sprite(0,0,'background');
    this.background.anchor.setTo(0.5,0.5);
    this.game.boardGroup.centerX = this.game.personnelGroup.centerX = this.game.ordnanceGroup.centerX = this.game.resourcesGroup.centerX = this.game.world.centerX;
    this.game.boardGroup.centerY = this.game.personnelGroup.centerY = this.game.ordnanceGroup.centerY = this.game.resourcesGroup.centerY = this.game.world.centerY;

    this.game.hudBg = this.game.add.sprite(0,0,'hud-bg');

    this.game.dice = new Dice(this.game, 50, 40);
    this.game.dice.scale.setTo(0.25);
    this.game.confirm = new Confirm(this.game, 40,80);
    this.game.confirm.scale.setTo(0.25);

    this.game.add.existing(this.game.dice);
    this.game.add.existing(this.game.confirm);
    
    this.game.hudGroup.add(this.game.hudBg);
    this.game.hudGroup.add(this.game.dice);
    this.game.hudGroup.add(this.game.confirm);
    this.game.boardGroup.add(this.background);

    this.game.septikon.createTileArray(31, 21, {x:0-this.background.width/2, y:0-this.background.height/2});
    this.game.input.keyboard.addCallbacks(this, null, null, this.keyPress);
    this.game.input.onUp.add(this.mouseUp, this);
    this.game.input.onDown.add(this.mouseDown, this);
    this.view = 2;
    this.refreshBoard();

  }
    mouseDown() {
        this.mouseIsDown = true;
        this.startX = this.game.input.x;
        console.log("down");
        this.viewChangeComplete = false;
    }

    mouseUp() {
        this.mouseIsDown = false;
        console.log("up");
    }

    swipeDone() {
        if (this.viewChangeComplete === false) {
            let endX = this.game.input.x;
            if (endX < this.startX) {
                this.game.debug.text('Swiped left', 700, 95);
                this.view--;
            } else {
                this.game.debug.text('Swipe right', 700, 95);   
                this.view++;     
            }
            if (this.view > 4) {
                this.view = 1;
            }
            if (this.view < 1) {
                this.view = 4;
            }
            this.viewChangeComplete = true;
        }
    }

    keyPress(char) {
      this.lastKey = char;
      if (char === "1") {
          this.view = 1;
        }
        if (char === "2") {
            this.view = 2;
          }
          if (char === "3") {
            this.view = 3;
          }
          if (char === "4") {
            this.view = 4;
          }
  }

  createModals() {
      this.game.modal.createModal(
        {
        type: "askStart",
        includeBackground: false,
        modalCloseOnInput: false,
        itemsArr: [{
            type: "graphics",
            graphicColor: "0xffffff",
            graphicWidth: 300,
            graphicHeight: 300,
            graphicRadius: 40
        }, {
            type: "text",
            content: "Are you happy with\n that clone layout?",
            fontFamily: "Luckiest Guy",
            fontSize: 22,
            color: "0x1e1e1e",
            offsetY: -50
        }, {
            type: "image",
            content: "text_yes",
            offsetY: 100,
            offsetX: -80,
            contentScale: 0.6,
            callback: function () {
                this.game.modal.hideModal("askStart");
                this.game.client.sendInput({event:'setPlayerState', value:'start'});
            }
        }, {
            type: "image",
            content: "text_no",
            offsetY: 100,
            offsetX: 80,
            contentScale: 0.6,
            callback: function () {
                this.game.modal.hideModal("askStart");
            }
        }, ]
    });
  }

  refreshBoard() {
    var scale = null;
    if (this.view === 1  || this.view === 3) {
        scale = window.innerWidth/this.background.height;
    } else {
        scale = window.innerHeight *0.8/this.background.height;
    }
    if(scale > 1.9) {
        scale = 1.9;
    }
    this.game.personnelGroup.scale.setTo(scale);
    this.game.ordnanceGroup.scale.setTo(scale);
    this.game.resourcesGroup.scale.setTo(scale);
    this.game.boardGroup.scale.setTo(scale);
    this.game.personnelGroup.scale = this.game.ordnanceGroup.scale = this.game.resourcesGroup.scale = this.game.boardGroup.scale;
    this.game.boardGroup.x = this.game.world.centerX;
    this.game.personnelGroup.x = this.game.ordnanceGroup.x = this.game.resourcesGroup.x = this.game.boardGroup.x;
    
    if(this.view === 1) {
        // if(this.game.septikon.player.id == 1) {
        this.game.personnelGroup.angle = this.game.ordnanceGroup.angle = this.game.resourcesGroup.angle = this.game.boardGroup.angle = -90; 
        //this.game.boardGroup.y = this.game.world.centerY; // Centered on Septikon Logo
        //this.game.boardGroup.y = this.game.world.centerY + ((this.background.width*scale)-window.innerHeight)/2; // Centered on opponent's side
        this.game.personnelGroup.y = this.game.ordnanceGroup.y = this.game.resourcesGroup.y = this.game.boardGroup.y = this.game.world.centerY - ((this.background.width*scale)-window.innerHeight)/2; // Centered on this player's side
    } 
    if (this.view === 3){
        this.game.personnelGroup.angle = this.game.ordnanceGroup.angle = this.game.resourcesGroup.angle = this.game.boardGroup.angle = 90; 
        //this.game.boardGroup.y = this.game.world.centerY; // Centered on Septikon Logo
        //this.game.boardGroup.y = this.game.world.centerY + ((this.background.width*scale)-window.innerHeight)/2; // Centered on opponent's side
        this.game.personnelGroup.y = this.game.ordnanceGroup.y = this.game.resourcesGroup.y = this.game.boardGroup.y = this.game.world.centerY - ((this.background.width*scale)-window.innerHeight)/2; // Centered on this player's side
    }
    if (this.view === 2){
        this.game.personnelGroup.angle = this.game.ordnanceGroup.angle = this.game.resourcesGroup.angle = this.game.boardGroup.angle = 0; 
        this.game.personnelGroup.y = this.game.ordnanceGroup.y = this.game.resourcesGroup.y = this.game.boardGroup.y = this.game.world.centerY + window.innerHeight *0.1; // Centered on Septikon Logo
        //this.game.boardGroup.y = this.game.world.centerY + ((this.background.width*scale)-window.innerHeight)/2; // Centered on opponent's side
        // this.game.personnelGroup.y = this.game.ordnanceGroup.y = this.game.resourcesGroup.y = this.game.boardGroup.y = this.game.world.centerY - ((this.background.width*scale)-window.innerHeight)/2; // Centered on this player's side
    }
    if (this.view === 4){
        this.game.personnelGroup.angle = this.game.ordnanceGroup.angle = this.game.resourcesGroup.angle = this.game.boardGroup.angle = 180; 
        this.game.personnelGroup.y = this.game.ordnanceGroup.y = this.game.resourcesGroup.y = this.game.boardGroup.y = this.game.world.centerY + window.innerHeight *0.1; // Centered on Septikon Logo
        //this.game.boardGroup.y = this.game.world.centerY + ((this.background.width*scale)-window.innerHeight)/2; // Centered on opponent's side
        // this.game.personnelGroup.y = this.game.ordnanceGroup.y = this.game.resourcesGroup.y = this.game.boardGroup.y = this.game.world.centerY - ((this.background.width*scale)-window.innerHeight)/2; // Centered on this player's side
    }

  }

  
  update() {
    //   this.dice.frame = Math.floor(Math.random() * 6) + 1;
    this.game.debug.text('Keyboard', 700, 32);
    
    // let current = Phaser.Keyboard.
    this.game.debug.text('Key pressed: ' + this.lastKey, 700, 64);

    
    this.game.debug.text('Mouse X: ' + this.game.input.x, 700, 200);
    this.game.debug.text('Mouse Y: ' + this.game.input.y, 700, 230);
    if (this.mouseIsDown === true) {
        let distX = Math.abs(this.game.input.x - this.startX);
        if (distX > 50) {
            this.swipeDone();
        }
    }
  }
  
  render () {
      this.refreshBoard();
      /*

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
    this.game.debug.text('this.background.scale: ' + this.game.boardGroup.scale.x, x, y += yi);
    */
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
