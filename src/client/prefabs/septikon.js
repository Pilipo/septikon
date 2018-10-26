import Clone from "../prefabs/clone";
import Biodrone from "../prefabs/biodrone";
import Ordnance from "../prefabs/ordnance";

class Septikon {
  //initialization code in the constructor
  constructor(game) {
    this.game = game;
    this.player = {
      personnelArray: [],
      ordnanceArray: []
    };
    this.opponent = {
      personnelArray: [],
      ordnanceArray: []
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
    // MOVE personnel

    if (data.details.action === "add") {
      console.log("adding personnel");
      this.addPersonnel(data.details.personnel, data.details.playerID);
    }

    if (data.details.action === "remove") {
      console.log("removing personnel");
      this.removePersonnel(data.details.personnel, data.details.playerID);
    }

    if (data.details.action === "move") {
      console.log("moving personnel");
      for (let j = 0; j < this.player.personnelArray.length; j++) {
        let myPerson = this.player.personnelArray[j];
        if (myPerson.uuid === data.details.personnel.uuid) {
          let point = this.tileToPixels(
            data.details.personnel.x,
            data.details.personnel.y
          );
          let distance = Math.abs(
            myPerson.y - point.y + myPerson.x - point.x
          ).toFixed(1);
          this.game.add
            .tween(myPerson)
            .to(
              { x: point.x, y: point.y },
              distance * 11,
              Phaser.Easing.Cubic.Out,
              true
            );
          this.player.personnelArray[j] = data.details.personnel;
        }
      }
      console.log(data);
    }

    // for (let j = 0; j < this.player.personnelArray.length; j++) {
    //     let myPerson = this.player.personnelArray[j];
    //     if (myPerson.uuid === p.uuid) {
    //         matchFound = true;
    //     }
    // }
    // var currentPersonnel = null;
    // if (Array.isArray(data.details) === false) {
    //     data.details = [data.details];
    // }

    // if (this.opponent.personnelArray.length === 0 && data.details.length === 5) {
    //     for (var i in data.details) {
    //         this.addClone(data.details[i]);
    //     }
    // } else {
    //     for (var p in this.opponent.personnelArray) {
    //         currentPersonnel = this.opponent.personnelArray[p];
    //         for (var d in data.details) {
    //             if (currentPersonnel.uuid == data.details[d].uuid) {
    //                 this.movePersonnel(data.details[d]);
    //             }
    //         }
    //     }
    // }
  }

  updateOrdnance(data) {}

  updateResources(data) {}

  updateArms(data) {
    console.log("shows weapons on clones");
  }

  updateTile(data) {
    this.tileArray[data.details.x][data.details.y].tileDetail =
      data.details.tile;
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

  offerGunners(data) {
    this.choosingTargets = true;
    this.legalGunners = data.gunners;
    this.game.go.enable();
    console.log(
      "animate some indication of viable gunners on the surface. Maybe a pointer bouncing over them?"
    );
    //TODO: Emit an indicator for selecting a gunner
  }

  addPersonnel(personnel, playerID) {
    let point = this.tileToPixels(personnel.x, personnel.y);
    let newPersonnel = null;
    if (personnel.typeEnum.CLONE === personnel.type) {
      newPersonnel = new Clone(
        this.game,
        point.x,
        point.y,
        null,
        personnel.uuid
      );
    } else if (personnel.typeEnum.BIODRONE === personnel.type) {
      newPersonnel = new Biodrone(
        this.game,
        point.x,
        point.y,
        null,
        personnel.uuid
      );
    }
    if (playerID == this.player.id) {
      this.player.personnelArray.push(newPersonnel);
    } else {
      this.opponent.personnelArray.push(newPersonnel);
    }
  }

  addOrdnance(details) {
    var point = this.tileToPixels(details.point.x, details.point.y);
    var ord = new Ordnance(
      this.game,
      point.x,
      point.y,
      null,
      details.type,
      details.uuid
    );
    if (details.playerID == this.player.id) {
      this.player.ordnanceArray.push(ord);
    } else {
      this.opponent.ordnanceArray.push(ord);
    }
    this.game.boardGroup.add(ord);
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

  removePersonnel(data) {
    console.log(this.game.personnelGroup.children);
    for (let i = 0; i < this.game.personnelGroup.children.length; i++) {
      if (this.game.personnelGroup.children[i].uuid === data.uuid) {
        this.game.personnelGroup.children[i].destroy();
      }
    }
    console.log(this.game.personnelGroup.children);
    return true;
    //   for (let i = 0; i < this.player.personnelArray.length; i++) {
    //       if (this.player.personnelArray[i].uuid == data.uuid) {
    //           let personnelToDestroy = this.player.personnelArray[i];
    //           this.player.personnelArray.splice(i,1);
    //           personnelToDestroy.destroy();
    //           return true;
    //       }
    //   }
    //   return false;
  }

  removeAllPersonnel() {
    for (var i = 0; i < this.game.boardGroup.children.length; i++) {
      if (this.game.boardGroup.children[i].constructor == Clone) {
        this.game.boardGroup.children[i].destroy();
        i--;
      }
    }
  }

  updatePlayer(details) {
    for (var i in details) {
      this.player[i] = details[i];
    }

    // DEBUG BLOCK
    // this.game.client.sendInput({ event: "tileClicked", x: 1, y: 20 });
    // this.game.client.sendInput({ event: "tileClicked", x: 0, y: 17 });
    // this.game.client.sendInput({ event: "tileClicked", x: 0, y: 16 });
    // this.game.client.sendInput({ event: "tileClicked", x: 0, y: 15 });
    // this.game.client.sendInput({ event: "tileClicked", x: 0, y: 14 });

    // this.game.client.sendInput({ event: "tileClicked", x: 30, y: 6 });
    // this.game.client.sendInput({ event: "tileClicked", x: 30, y: 5 });
    // this.game.client.sendInput({ event: "tileClicked", x: 30, y: 4 });
    // this.game.client.sendInput({ event: "tileClicked", x: 30, y: 3 });
    // this.game.client.sendInput({ event: "tileClicked", x: 29, y: 0 });

    // this.game.client.sendInput({ event: "confirmClicked"});
    // this.game.client.sendInput({ event: "diceClicked"});

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
          x = coords[0];
          y = coords[1];
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
    console.log("Name: " + obj.tileDetail.name);
    console.log("Type: " + obj.tileDetail.type);
    console.log("Occupied: " + obj.tileDetail.occupied);
    console.log("Damaged: " + obj.tileDetail.damaged);
    console.log("X: " + obj.tileDetail.x + " Y:" + obj.tileDetail.y);
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

  damageTile(data) {
    var currentTile = this.tileArray[data.x][data.y];

    currentTile.tint = 0x333333;
    currentTile.alpha = 0.8;
    currentTile.tileDamaged = true;

    var test = this.game.add.sprite(
      currentTile.x,
      currentTile.y + currentTile.height / 2,
      "boom"
    );
    this.game.boardGroup.add(test);
    test.angle = 270;
    test.anchor.set(0.5, 0.7);
    test.animations.add("boom");
    test.animations.play("boom", 20, false, true);
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