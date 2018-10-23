import Septikon from '../prefabs/septikon';

class Boot extends Phaser.State {

  constructor() {
    super();
  }

  preload() {
    this.load.image('preloader', 'assets/preloader.gif');
  }

  create() {
    this.game.input.maxPointers = 1;
    this.game.time.advancedTiming = true;
    this.game.scale.pageAlignHorizontally = true;
      this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    //setup device scaling
    if (!this.game.device.desktop) {
      this.game.scale.parentIsWindow = true;
      this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
      this.game.scale.minWidth =  480;
      this.game.scale.minHeight = 260;
      this.game.scale.forceOrientation(true);
    }

    this.initGlobalVariables();
    
    this.game.state.start('preloader');
  }

  initGlobalVariables(){
    this.game.global = {
      score: 0,
      lastDiceRoll: 0,
    };
  }

}

export default Boot;
