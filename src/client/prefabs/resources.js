class Resources extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, type, uuid) { 
    let graphics = game.add.graphics(0,0);
    graphics.beginFill(0xffffff, 1);
    graphics.drawRoundedRect(
      100,
      100,
      (game.boardGroup.width / 39) - 4,
      (game.boardGroup.width / 39) - 4,
      14
    );
    super(game, x, y, graphics.generateTexture());
    this.angle = Math.floor(Math.random() * 40) - 20;
    this.anchor.setTo(0.5);
    this.tint = this.resMap[type].tint;
    this.resourceEnum = Object.freeze({
        OXYGEN: 0,
        ROCKET: 1,
        METAL: 2,
        ENERGY: 3,
        BIOMASS: 4,
        BIODRONE: 5,
        URANIUM: 6
    });
    this.resMap = {
      energy1:{
        min: 0,
        max: 9,
        row: 2,
        tint: 0xfce315
      }, 
      energy2:{
        min: 20,//0
        max: 11,//9
        row: 2,//28
        tint: 0xfce315
      },
      oxygen:{
        min: 0,//20
        max: 9,//11
        row: 5,//25
        tint: 0x00b1f0
      },
      metal:{
        min: 0,
        max: 9,
        row: 3,
        tint: 0xfffffe
      },
      biodrone:{
        min: 20,
        max: 11,
        row: 4,
        tint: 0x9f3a9b
      },
      rocket:{
        min: 0,//20
        max: 9,//11
        row: 4,//26
        tint: 0xe82a2c
      },
      uranium:{
        min: 20,
        max: 11,
        row: 3,
        tint: 0xf36520
      },
      biomass:{
        min: 20,
        max: 11,
        row: 5,
        tint: 0x8ac342
      }
    };

  }
  
  check(type, count) {
    if(this.resources[this.resourceEnum[type]] > count)
        return true;
        
    return false;
  }

  getType() {
    for (let i in this.resourceEnum) {
        if (this.resourceEnum[i] === this.type) {
            return i;
        }
    }
  }
  
  getCount(type) {
    return this.resources[type];
  }
    
  add(type, count) {
  }
  
  remove(type, count) {
    this.resources[type] -= count;
  }
  
}

export default Resources;