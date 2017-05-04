class Setup extends Phaser.State {

  constructor() {
    super();
  }
  
  create() {
  
    this.initialCloneCount = 5;
    this.game.septikon.setup();
    
    for(var col in this.game.septikon.tileArray) {
        for(var row in this.game.septikon.tileArray[col]) {
            this.game.septikon.tileArray[col][row].events.onInputDown.add(this.placeClone, this);
        }
    }
  }
  
  placeClone(tile) {
    if(tile.tileOccupied == true){
        console.log("I need to remove a clone!");
        this.game.septikon.localTeam.killClone({x:tile.tileX, y:tile.tileY});
        return;
    }
    if(this.game.septikon.localTeam.personnel.length < this.initialCloneCount) {
        this.game.septikon.localTeam.addClone(tile.tileX, tile.tileY);
        if (this.game.septikon.localTeam.personnel.length == this.initialCloneCount) {
            this.game.state.start('game');
        }
    }  
  }

}

export default Setup;
