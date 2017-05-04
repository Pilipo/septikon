class Setup extends Phaser.State {

  constructor() {
    super();
 }
  
  create() {
    this.game.modal = new gameModal(this.game);
    this.createModals();
    
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
            this.game.modal.showModal("askStart");                
        }
    }  
  }
  
  createModals() {
  
    // Start Game
    this.game.modal.createModal({
        type: "askStart",
        includeBackground: true,
        modalCloseOnInput: true,
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
                this.game.state.start('game');
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
  
  
  
  
}

export default Setup;
