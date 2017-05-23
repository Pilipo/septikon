class Setup extends Phaser.State {

  constructor() {
    super();
 }
  
  create() {


    this.game.name = "user";

    this.game.stage.disableVisibilityChange = true;
    this.game.modal = new gameModal(this.game);
    this.createModals();
    this.game.modal.showModal('username');

    this.game.input.keyboard.addCallbacks(this, null, null, this.keyPress);
    this.bksp = this.game.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE);
    this.bksp.onDown.add(this.keyPress, this);
    this.enter = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
    this.enter.onDown.add(this.keyPress, this);
    this.game.client.askNewPlayer();

    this.game.septikon.setup();
}

keyPress(char) {

    if(typeof(char) === "object") {
        if (char.event.code === "Enter") {
            this.game.state.start('game');
            return;
        } else if (char.event.code === "Backspace") {
            this.game.name = this.game.name.substring(0, this.game.name.length - 1);
        }
    } else {
        if (char == " ") {
            char = "_";
        }
        this.game.name += char;
    }
    this.game.modal.updateModalValue(this.game.name, 'username', 4);
}
  
  createModals() {
  
    // Start Game
    this.game.modal.createModal(
        {
        type: "username",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [{
            type: "graphics",
            graphicColor: "0xffffff",
            graphicWidth: 300,
            graphicHeight: 300,
            graphicRadius: 40
        }, {
            type: "text",
            content: "Type a username,\nthen hit <ENTER>\n\n(max of 25 characters)",
            fontFamily: "Luckiest Guy",
            fontSize: 22,
            color: "0x1e1e1e",
            offsetY: -50
        }, {
            type: "text",
            content: this.game.name,
            fontFamily: "Luckiest Guy",
            fontSize: 22,
            color: "0x1e1e1e",
            offsetY: 50
        }, ]
    });

    this.game.modal.createModal(
        {
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
    }
    
    );
    
  }
}

export default Setup;
