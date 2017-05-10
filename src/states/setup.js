class Setup extends Phaser.State {

  constructor() {
    super();
 }
  
  create() {
    this.game.modal = new gameModal(this.game);
    this.createModals();
    
    this.game.septikon.setup();
    
	this.game.client.askNewPlayer();
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
