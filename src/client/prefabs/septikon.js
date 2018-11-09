import Clone from "../prefabs/clone";
import Biodrone from "../prefabs/biodrone";
import Ordnance from "../prefabs/ordnance";
import Resource from "../prefabs/resources";

class Septikon {
  //initialization code in the constructor
  constructor(game) {
    this.game = game;
    this.player = {
      personnelArray: [],
      ordnanceArray: [],
      resourceArray:[]
    };
    this.opponent = {
      personnelArray: [],
      ordnanceArray: [],
      resourceArray:[]
    };

    this.shownTiles = [];
    this.tileArray = [];

    this.legalMoves = null;
    this.selectedToMove = null;
    this.legalGunners = null;

    this.choosingTargets = false;
    this.selectedGunners = [];
  }

  updatePersonnel(data) {
    // CRUD on personnel
    console.log("updating");
    console.log(data);
    if (data.details.action === "create" || data.details.action === "add") {
      this.addPersonnel(data);
    } else if (data.details.action === "read") {
    } else if (data.details.action === "update" || data.details.action === "move") {
      console.log("Update Personnel");
      console.log(data);
      for (let j = 0; j < this.player.personnelArray.length; j++) {
        let p = this.player.personnelArray[j];
        if (p.uuid === data.details.personnel.uuid) {
          p.move({
            x:data.details.personnel.x,
            y:data.details.personnel.y
          });
        }
      }
      for (let j = 0; j < this.opponent.personnelArray.length; j++) {
        let p = this.opponent.personnelArray[j];
        if (p.uuid === data.details.personnel.uuid) {
          p.move({
            x:data.details.personnel.x,
            y:data.details.personnel.y
          });
        }
      }
    } else if (data.details.action === "delete" || data.details.action === "remove") {
      this.deletePersonnel(data.details.personnel, data.details.playerID);
      // this.removePersonnel(data.details.personnel, data.details.playerID);
    } else {
      console.log("Data set is outside of CRUD:");
      console.log(data);
    }
  }

  updateOrdnance(data) {
    console.log("Let's update the ord");
    let ordArray = [];
    let svrOrd = data.details.ordnance;
    if (data.details.playerID == this.player.id) {
      ordArray = this.player.ordnanceArray;
    } else {
      ordArray = this.opponent.ordnanceArray;
    }

    for (let i in ordArray) {
      let o = ordArray[i];
      if (svrOrd.uuid === o.uuid) {
        if (o.x !== svrOrd.x || o.y !== svrOrd.y) {
          o.move({x:svrOrd.x, y:svrOrd.y});
        }
      }
    }
  }

  updateResources(data) {}

  createResource(data) {
    if (data.details.resourceArray !== undefined) {
      let rA = data.details.resourceArray;
      for (let i in rA) {
        this.createResource(rA[i]);
      }
    } else {
      let res = new Resource(
        this.game,
        0,
        0,
        data.details.resource.type,
        data.details.resource.uuid()
      );
    }
  }

  initResources() {
    var currentRec = null;
    var graphics = this.game.add.graphics(0, 0);
    //graphics.lineStyle(4, 0xffd900, 1);
    graphics.beginFill(0xffffff, 1);
    graphics.drawRoundedRect(
      100,
      100,
      this.tileWidth - 4,
      this.tileHeight - 4,
      14
    );

    for (var c in this.tileArray) {
      for (var r in this.tileArray[c]) {
        if (
          this.tileArray[c][r].tileOwner == this.player.id &&
          this.tileArray[c][r].tileType == "warehouse"
        ) {
          if (r < 5 || r > 15) {
            currentRec = this.game.add.sprite(
              this.tileArray[c][r].x + this.tileArray[c][r].width / 2,
              this.tileArray[c][r].y + this.tileArray[c][r].width / 2,
              graphics.generateTexture()
            );
            currentRec.angle = Math.floor(Math.random() * 40) - 20;
            currentRec.anchor.setTo(0.5);
            switch (this.tileArray[c][r].tileName) {
              case "energy":
                currentRec.tint = 0xfce315;
                break;
              case "oxygen":
                currentRec.tint = 0x00b1f0;
                break;
              case "rocket":
                currentRec.tint = 0xe82a2c;
                break;
              case "metal":
                currentRec.tint = 0xfffffe;
                break;
              case "biomass":
                currentRec.tint = 0x8ac342;
                break;
              case "biodrone":
                currentRec.tint = 0x9f3a9b;
                break;
              case "uranium":
                currentRec.tint = 0xf36520;
                break;
              default:
                break;
            }
            this.game.boardGroup.add(currentRec);
          }
        }
      }
    }
    graphics.destroy();
  }

  updateArms(data) {
    console.log("shows weapons on clones");
  }

  updateTile(data) {
    let newTile = data.details.tile;
    let oldTile = this.tileArray[newTile.x][newTile.y].tileDetail;
    if (oldTile.damaged === false && newTile.damaged === true) {
      this.damageTile(oldTile);
    }
    this.tileArray[newTile.x][newTile.y].tileDetail = newTile;
  }

  showModal(type) {
    this.game.modal.showModal(type);
  }

  diceRolled(details) {
    this.game.dice.setValue(details.value);
    this.legalMoves = details.gamePieces;
    var pointArray = [];
    // console.log(details.gamePieces[0].origin);
    for (var i = 0; i < details.gamePieces.length; i++) {
      pointArray.push({
        x: details.gamePieces[i].origin.x,
        y: details.gamePieces[i].origin.y
      });
    }
    this.showTiles(pointArray, 0xf63636);
  }

  offerDice() {
    this.game.dice.enable();
  }

  takeDice() {
    this.game.dice.disable();
  }

  getPersonnel(p) {
    for (let i in this.player.personnelArray) {
      if (p.uuid === this.player.personnelArray[i].uuid) {
        return p;
      }
    }
    for (let i in this.opponent.personnelArray) {
      if (p.uuid === this.opponent.personnelArray[i].uuid) {
        return p;
      }
    }
    return false;
  }

  addPersonnel(data) {
    let p = data.details.personnel;
    let pFound = this.getPersonnel(data.details.personnel);
    if (pFound !== false) {
      data.details.action = "update";
      return this.updatePersonnel(data);
    } 
    let c = this.tileToPixels(p.x, p.y);
    let nP = null;
    let pID = data.details.playerID;
    if (p.typeEnum.CLONE === p.type) {
      nP = new Clone(
        this.game,
        c.x,
        c.y,
        null,
        p.uuid
      );
    } else if (p.typeEnum.BIODRONE === p.type) {
      nP = new Biodrone(
        this.game,
        c.x,
        c.y,
        null,
        p.uuid
      );
    }
    
    if (pID == this.player.id) {
      this.player.personnelArray.push(nP);
    } else {
      this.opponent.personnelArray.push(nP);
    }
    console.log("Current personnel set");
    console.log("new pID is " + pID);
    console.log("player " + this.player.id);
    console.log(this.player.personnelArray);
    console.log("opponent " + this.opponent.id);
    console.log(this.opponent.personnelArray);
    console.log("-------------");

  }

  createOrdnance(data) {
    let svrOrd = data.details.ordnance;
    console.log(svrOrd);
    let point = this.tileToPixels(svrOrd.x, svrOrd.y);
    let newOrd = new Ordnance(
      this.game,
      point.x,
      point.y,
      null,
      data.details.type,
      svrOrd.uuid
    );
    if (data.details.playerID == this.player.id) {
      this.player.ordnanceArray.push(newOrd);
    } else {
      this.opponent.ordnanceArray.push(newOrd);
    }
    this.game.boardGroup.add(newOrd);
  }

  deleteOrdnance(data) {
    let tO = data.details.ordnance;
    for (let i in this.player.ordnanceArray) {
      let o = this.player.ordnanceArray[i];
      if (o.uuid === tO.uuid) {
        o.destroy();
      }
    }
    for (let i in this.opponent.ordnanceArray) {
      let o = this.opponent.ordnanceArray[i];
      if (o.uuid === tO.uuid) {
        o.destroy();
      }
    }
  }

  movePersonnel(data) {
    let tween = null;
    let distance = null;
    let point = this.tileToPixels(data.x, data.y);
    for (var i in this.player.personnelArray) {
      if (this.player.personnelArray[i].uuid == data.uuid) {
        distance = Math.abs(
          this.player.personnelArray[i].y -
            point.y +
            this.player.personnelArray[i].x -
            point.x
        ).toFixed(1);
        tween = this.game.add
          .tween(this.player.personnelArray[i])
          .to(
            { x: point.x, y: point.y },
            distance * 11,
            Phaser.Easing.Cubic.Out,
            true
          );
        // Trigger tile. Not quite sure how to do this yet.
        //tween.onComplete.add(this.game.client.sendInput({event: 'moveComplete', x:parseInt(obj.tileX), y:parseInt(obj.tileY)});, this.game.septikon);
      }
    }
    for (var j in this.opponent.personnelArray) {
      if (this.opponent.personnelArray[j].uuid == data.uuid) {
        distance = Math.abs(
          this.opponent.personnelArray[j].y -
            point.y +
            this.opponent.personnelArray[j].x -
            point.x
        ).toFixed(1);
        tween = this.game.add
          .tween(this.opponent.personnelArray[j])
          .to(
            { x: point.x, y: point.y },
            distance * 11,
            Phaser.Easing.Cubic.Out,
            true
          );
      }
    }
  }

  moveOrdnance(data) {
    var tween = null;
    var distance = null;
    var point = null;
    for (var dataIndex = 0; dataIndex < data.length; dataIndex++) {
      point = this.tileToPixels(data[dataIndex].x, data[dataIndex].y);
      for (var i in this.player.ordnanceArray) {
        if (this.player.ordnanceArray[i].uuid == data[dataIndex].uuid) {
          distance = Math.abs(
            this.player.ordnanceArray[i].y -
              point.y +
              this.player.ordnanceArray[i].x -
              point.x
          ).toFixed(1);
          tween = this.game.add
            .tween(this.player.ordnanceArray[i])
            .to(
              { x: point.x, y: point.y },
              distance * 11,
              Phaser.Easing.Cubic.Out,
              true
            );
        }
      }
      for (var j in this.opponent.ordnanceArray) {
        if (this.opponent.ordnanceArray[j].uuid == data[dataIndex].uuid) {
          distance = Math.abs(
            this.opponent.ordnanceArray[j].y -
              point.y +
              this.opponent.ordnanceArray[j].x -
              point.x
          ).toFixed(1);
          tween = this.game.add
            .tween(this.opponent.ordnanceArray[j])
            .to(
              { x: point.x, y: point.y },
              distance * 11,
              Phaser.Easing.Cubic.Out,
              true
            );
        }
      }
    }
  }

  deletePersonnel(data) {
    let tP = data.details.personnel;
    for (let i in this.player.personnelArray) {
      let p = this.player.personnelArray[i];
      if (p.uuid === tP.uuid) {
        p.destroy();
      }
    }
    for (let i in this.opponent.personnelArray) {
      let p = this.opponent.personnelArray[i];
      if (p.uuid === tP.uuid) {
        p.destroy();
      }
    }
    return true;
  }

  updatePlayer(details) {
    for (var i in details) {
      this.player[i] = details[i];
    }

    // DEBUG BLOCK
    this.game.client.sendInput({ event: "tileClicked", x: 7, y: 20 });
    this.game.client.sendInput({ event: "tileClicked", x: 7, y: 0 });
    this.game.client.sendInput({ event: "tileClicked", x: 5, y: 10 });
    this.game.client.sendInput({ event: "tileClicked", x: 6, y: 17 });
    this.game.client.sendInput({ event: "tileClicked", x: 7, y: 14 });

    this.game.client.sendInput({ event: "tileClicked", x: 30, y: 2 });
    this.game.client.sendInput({ event: "tileClicked", x: 30, y: 3 });
    this.game.client.sendInput({ event: "tileClicked", x: 30, y: 4 });
    this.game.client.sendInput({ event: "tileClicked", x: 30, y: 5 });
    this.game.client.sendInput({ event: "tileClicked", x: 30, y: 6 });

    // this.game.client.sendInput({ event: "confirmClicked"});
    // this.game.client.sendInput({ event: "diceClicked"});
  }

  

  createTileArray(columns, rows, point) {
    this.tileDetail = this.game.cache.getJSON("tileDetail");

    this.tileStartCoordinates = { x: 0, y: 0 };

    var x, y;

    this.marginBottom = this.marginTop = this.game.boardGroup.height / 17.475;
    this.marginLeft = this.game.boardGroup.width / 24;
    this.marginRight = this.game.boardGroup.width / 26.3158;
    this.tileWidth = this.tileHeight = this.game.boardGroup.width / 39;
    this.padding =
      (this.game.boardGroup.width -
        (this.marginLeft + this.marginRight) -
        this.tileWidth * 31) /
      30;

    //this.tileWidth = 25;//(this.backgroundWidth - ((this.marginLeft + this.marginRight) + (this.padding * (columns - 1)))) / columns;
    //this.tileHeight = 25;//(this.backgroundHeight - ((this.marginTop + this.marginBottom) + (this.padding * (rows - 1)))) / rows;

    this.tileStartCoordinates.x = point.x + this.marginLeft;
    this.tileStartCoordinates.y = point.y + this.marginTop;

    var graphics = this.game.add.graphics(0, 0);
    //graphics.lineStyle(4, 0xffd900, 1);
    graphics.beginFill(0xffffff, 1);
    graphics.drawRect(100, 100, this.tileWidth, this.tileHeight);

    for (var column = 0; column < columns; column++) {
      for (var row = 0; row < rows; row++) {
        x =
          this.tileStartCoordinates.x +
          this.tileWidth * column +
          (this.padding * column - 1);
        y =
          this.tileStartCoordinates.y +
          this.tileHeight * row +
          (this.padding * row - 1);
        //graphics.generateTexture();

        var currentTile = this.game.add.sprite(
          x,
          y,
          graphics.generateTexture()
        );
        this.game.boardGroup.add(currentTile);
        currentTile.alpha = 0; // 0.25;
        currentTile.inputEnabled = true;
        currentTile.events.onInputDown.add(this.tileClicked, this);

        if (typeof this.tileArray[column] == "undefined")
          this.tileArray[column] = [];

        this.tileArray[column][row] = currentTile;
      }
    }

    graphics.destroy();

    for (var key in this.tileDetail) {
      if (!this.tileDetail.hasOwnProperty(key)) continue;

      var obj = this.tileDetail[key];
      for (var prop in obj) {
        // skip loop if the property is from prototype
        if (!obj.hasOwnProperty(prop)) continue;

        var locationCount = obj[prop].locations.length;
        for (var i = 0; i < locationCount; i++) {
          var coords = obj[prop].locations[i].split(",");
          x = parseInt(coords[0]);
          y = parseInt(coords[1]);
          this.tileArray[x][y].tileDetail = {};
          this.tileArray[x][y].tileDetail.damaged = false;
          this.tileArray[x][y].tileDetail.occupied = false;
          this.tileArray[x][y].tileDetail.x = x;
          this.tileArray[x][y].tileDetail.y = y;
          this.tileArray[x][y].tileDetail.type = obj[prop].type;

          if (typeof this.tileArray[x][y] != "undefined")
            this.tileArray[x][y].tileDetail.name = obj[prop].name;
          else console.log(x + ":" + y + " not found!");

          if (x < 9) this.tileArray[x][y].tileDetail.owner = 1;
          else if (x > 20) this.tileArray[x][y].tileDetail.owner = 2;

          if (typeof obj[prop].properties != "undefined") {
            this.tileArray[x][y].tileDetail.properties = obj[prop].properties;
          }
        }
      }
    }
  }

  pixelsToTile(x, y) {
    var xTile = 0;
    var yTile = 0;

    for (var col in this.tileArray) {
      for (var row in this.tileArray[col]) {
        var obj = this.tileArray[col][row];
        if (x > obj.x && x < obj.x + obj.width) xTile = parseInt(col);

        if (y > obj.y && y < obj.y + obj.height) yTile = parseInt(row);
      }
    }
    return { x: xTile, y: yTile };
  }

  tileToPixels(x, y) {
    var tileObj = this.tileArray[x][y];
    return {
      x: tileObj.x + tileObj.width / 2,
      y: tileObj.y + tileObj.height / 2
    };
  }

  tileClicked(obj) {
    this.hideTiles();
    this.game.client.sendInput({
      event: "tileClicked",
      x: parseInt(obj.tileDetail.x),
      y: parseInt(obj.tileDetail.y)
    });

    // DEBUG BLOCK
    console.log("----TILE DETAIL----");
    console.log(obj.tileDetail);
    // console.log("Name: " + obj.tileDetail.name);
    // console.log("Type: " + obj.tileDetail.type);
    // console.log("Occupied: " + obj.tileDetail.occupied);
    // console.log("Damaged: " + obj.tileDetail.damaged);
    // console.log("X: " + obj.tileDetail.x + " Y:" + obj.tileDetail.y);
    //   this.addOrdnance({point:{x:obj.tileX, y:obj.tileY}, type:'biodrone', uuid:Math.random()});

    return;
  }

  showTiles(coordsArray, color) {
    console.log("SHOW TILES!!");
    console.log(coordsArray);
    // if(typeof(coordsArray.pointArray) !== 'undefined') {
    //     coordsArray = coordsArray.pointArray;
    // }
    for (var i in coordsArray) {
      this.tileArray[coordsArray[i].x][coordsArray[i].y].alpha = 0.5;
      if (color) {
        this.tileArray[coordsArray[i].x][coordsArray[i].y].tint = color;
      } else {
        this.tileArray[coordsArray[i].x][coordsArray[i].y].tint = 0xffd900;
      }
      this.shownTiles.push({ x: coordsArray[i].x, y: coordsArray[i].y });
    }
  }

  hideTiles(tileArray) {
    if (!tileArray) {
      for (var i in this.shownTiles) {
        this.tileArray[this.shownTiles[i].x][this.shownTiles[i].y].alpha = 0;
      }
      this.shownTiles = [];
    }
  }

  damageTile(targetTile) {
    let t = this.tileArray[targetTile.x][targetTile.y];

    t.tint = 0x333333;
    t.alpha = 0.8;

    var boom = this.game.add.sprite(
      t.x,
      t.y + t.height / 2,
      "boom"
    );
    this.game.boardGroup.add(boom);
    boom.angle = 90;
    boom.anchor.set(0.5, 0.7);
    boom.animations.add("boom");
    boom.animations.play("boom", 20, false, true);
  }

  repairTile(data) {
    var currentTile = this.tileArray[data.x][data.y];
    currentTile.alpha = 0;
  }

  startGame() {
    this.game.state.start("game");
  }

  serverFull() {
    this.game.state.start("serverFull");
  }
}

export default Septikon;
