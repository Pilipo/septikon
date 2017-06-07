import Clone from '../prefabs/clone';

class Septikon {

  //initialization code in the constructor
  constructor(game) { 
    this.game = game;
    
    this.player = {
        id: 0,
        personnelArray: []
    };

    this.opponent = {
        personnelArray: []
    };
    
    this.shownTiles = [];
    this.tileArray = [];

    this.legalMoves = null;
    this.selectedToMove = null;
    this.legalGunners = null;

    this.choosingTargets = false;
    this.selectedGunners = [];
  }

  showModal(type) {
    this.game.modal.showModal(type);
  }
  
  diceRolled(details) {
    this.game.dice.setValue(details.value);
    this.legalMoves = details.gamePieces;
    for (var i = 0; i < details.gamePieces.length; i++) {
        for (var m in details.gamePieces[i].moves) {
            var x = details.gamePieces[i].moves[m].x;
            var y = details.gamePieces[i].moves[m].y;
            this.showTiles([details.gamePieces[i].origin], 0xF63636);
        }
    }
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
      console.log("animate some indication of viable gunners on the surface. Maybe a pointer bouncing over them?");
  }
  
  addClone(details) {
    var point = this.tileToPixels(details.x, details.y);
    var clone = new Clone(this.game, point.x, point.y, null, details.uuid);
    if(details.playerID == this.player.id) {
        this.player.personnelArray.push(clone);
    } else {
        this.opponent.personnelArray.push(clone);
    }
    this.game.boardGroup.add(clone);
  }

  movePersonnel(data) {
    var tween = null;
    var distance = null;
    var point = this.tileToPixels(data.x, data.y);
    for (var i in this.player.personnelArray) {
        if (this.player.personnelArray[i].uuid == data.uuid) {
            distance = Math.abs(this.player.personnelArray[i].y - point.y + this.player.personnelArray[i].x - point.x).toFixed(1);
            tween = this.game.add.tween(this.player.personnelArray[i]).to( {x:point.x, y:point.y}, (distance*11), Phaser.Easing.Cubic.Out, true);
            // Trigger tile. Not quite sure how to do this yet.
            //tween.onComplete.add(this.game.client.sendInput({event: 'moveComplete', x:parseInt(obj.tileX), y:parseInt(obj.tileY)});, this.game.septikon);
        }
    }
    for (var i in this.opponent.personnelArray) {
        if (this.opponent.personnelArray[i].uuid == data.uuid) {
            distance = Math.abs(this.opponent.personnelArray[i].y - point.y + this.opponent.personnelArray[i].x - point.x).toFixed(1);
            tween = this.game.add.tween(this.opponent.personnelArray[i]).to( {x:point.x, y:point.y}, (distance*11), Phaser.Easing.Cubic.Out, true);
            // Trigger tile. Not quite sure how to do this yet.
            //tween.onComplete.add(this.game.client.sendInput({event: 'moveComplete', x:parseInt(obj.tileX), y:parseInt(obj.tileY)});, this.game.septikon);
        }
    }
  }

  updatePersonnel(data) {
      var currentPersonnel = null;
      if (Array.isArray(data.details) === false) {
          data.details = [data.details];
      }

      if (this.opponent.personnelArray.length == 0 && data.details.length == 5) {
        for (var i in data.details) {
            this.addClone(data.details[i]);
        }      
      } else {
        for (var p in this.opponent.personnelArray) {
            currentPersonnel = this.opponent.personnelArray[p];
            for (var i in data.details) {
                if (currentPersonnel.uuid == data.details[i].uuid) {
                    this.movePersonnel(data.details[i]);
                }
            }
        }
      }
  }

  removeAllPersonnel(){
    for (var i = 0; i < this.game.boardGroup.children.length; i++) {
        if(this.game.boardGroup.children[i].constructor == Clone){
            this.game.boardGroup.children[i].destroy();
            i--;
        }
    }
  }
  
  updatePlayer(details) {
    for (var i in details) {
        this.player[i] = details[i];
    }
  }

  initResources() {
    var currentRec = null;
    var graphics = this.game.add.graphics(0, 0);
    //graphics.lineStyle(4, 0xffd900, 1);
    graphics.beginFill(0xffffff, 1);
    graphics.drawRoundedRect(100, 100, this.tileWidth-4, this.tileHeight-4, 14);

    for (var c in this.tileArray) {
        for (var r in this.tileArray[c]) {
            if(this.tileArray[c][r].tileOwner == this.player.id && this.tileArray[c][r].tileType == "warehouse") {
                if (r < 5 || r > 15) {
                    currentRec = this.game.add.sprite(this.tileArray[c][r].x+(this.tileArray[c][r].width/2), this.tileArray[c][r].y+(this.tileArray[c][r].width/2), graphics.generateTexture());
                    currentRec.angle = Math.floor(Math.random()*40)-20;
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
    this.tileDetail = this.game.cache.getJSON('tileDetail');

    this.tileStartCoordinates = {x:0, y:0};

    
    this.marginBottom = this.marginTop = this.game.boardGroup.height/17.475;
    this.marginLeft = this.game.boardGroup.width/24;
    this.marginRight =  this.game.boardGroup.width/26.3158;
    this.tileWidth = this.tileHeight = this.game.boardGroup.width/39;
    this.padding = (this.game.boardGroup.width - (this.marginLeft + this.marginRight) - (this.tileWidth * 31))/30;
        
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
            
            var x = this.tileStartCoordinates.x + (this.tileWidth * column) + (this.padding * column - 1);
            var y = this.tileStartCoordinates.y + (this.tileHeight * row) + (this.padding * row - 1);
            //graphics.generateTexture();
            
            var currentTile = this.game.add.sprite(x, y, graphics.generateTexture());
            this.game.boardGroup.add(currentTile);
            currentTile.alpha = 0; // 0.25;
            currentTile.inputEnabled = true;
            currentTile.events.onInputDown.add(this.tileClicked, this);
            
            if (typeof this.tileArray[column] == 'undefined') 
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
            if(!obj.hasOwnProperty(prop)) continue;
            
            var locationCount = obj[prop].locations.length;
            for( var i = 0; i < locationCount; i++) {
                
                var coords = obj[prop].locations[i].split(",");
                var x = coords[0];
                var y = coords[1];
                
                this.tileArray[x][y].tileDamaged = false;
                this.tileArray[x][y].tileOccupied = false;
                this.tileArray[x][y].tileX = x;
                this.tileArray[x][y].tileY = y;
                this.tileArray[x][y].tileType = obj[prop].type;

                if (typeof this.tileArray[x][y] != 'undefined')
                    this.tileArray[x][y].tileName = obj[prop].name;
                else
                    console.log(x + ":" + y + " not found!");

                if(x < 9)
                    this.tileArray[x][y].tileOwner = 1;
                else if (x>20)
                    this.tileArray[x][y].tileOwner = 2;
                 
                if (typeof obj[prop].properties != 'undefined') {
                    this.tileArray[x][y]['tileProperties'] = obj[prop].properties;
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
            var obj = this.tileArray[col][row]
            if(x > obj.x && x < obj.x + obj.width)
                xTile = parseInt(col);
                
            if(y > obj.y && y < obj.y + obj.height)
                yTile = parseInt(row);
        }
    }
    return {x:xTile, y:yTile};
  }
  
  tileToPixels(x, y) {
    var tileObj = this.tileArray[x][y];
    return {x:tileObj.x + tileObj.width/2, y:tileObj.y + tileObj.height/2};
  }
  
  tileClicked(obj) {
      this.hideTiles();
      this.game.client.sendInput({event: 'tileClicked', x:parseInt(obj.tileX), y:parseInt(obj.tileY)});
      return;
  }
  
  showTiles(coordsArray, color) {
    for (var i in coordsArray) {
        this.tileArray[coordsArray[i].x][coordsArray[i].y].alpha = 0.5;
        if(color) {
            this.tileArray[coordsArray[i].x][coordsArray[i].y].tint = color;
        } else {
            this.tileArray[coordsArray[i].x][coordsArray[i].y].tint = 0xffd900;
        }
        this.shownTiles.push({x:coordsArray[i].x,y:coordsArray[i].y});
    }
  }
  
  hideTiles(tileArray) {
    if(!tileArray) {
        for (var i in this.shownTiles) {
            this.tileArray[this.shownTiles[i].x][this.shownTiles[i].y].alpha = 0;
        }
        this.shownTiles = [];
    }
  }

  shootTile(cloneCoordinates) {
  
    var currentX = cloneCoordinates.x;
    var currentY = cloneCoordinates.y;
    var currentTile = this.tileArray[currentX][currentY];
    do {
        currentX++;
        currentTile = this.tileArray[currentX][currentY];
    } while (currentTile.tileType == 'space' || currentTile.tileType == 'surface' || currentTile.tileDamaged == true);
    
    currentTile.tint = 0X333333;
    currentTile.alpha = 0.8;
    currentTile.tileDamaged = true;
    
    this.test = this.game.add.sprite(currentTile.x, currentTile.y +(currentTile.height/2), 'boom');
    this.test.angle = 270;
    this.test.anchor.set(0.5,0.7);
    this.test.animations.add('boom');
    this.test.animations.play('boom', 20, false, true);
    
  }
  
  startGame() {
    this.game.state.start('game');
  }
    
}

export default Septikon;
