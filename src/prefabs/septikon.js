import Master from '../prefabs/master';
import Team from '../prefabs/team';

class Septikon {

  //initialization code in the constructor
  constructor(game) { 
    this.game = game;
    
    this.localTeam = new Team();
    this.remoteTeam = new Team();
    
    this.gm = new Master();
    
    this.tileArray = [];
    this.bgRatio = 0;
    this.worldRatio = 0;
    this.turnStateEnum = Object.freeze({
        START: 0,
        MOVE: 1,
        ACTION: 2,
        END: 3
    });
    this.directionEnum = Object.freeze({
        NORTH:1,
        EAST:2,
        SOUTH:4,
        WEST:8
    });
    this.turnState = 0;

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
    var tileX = tileObj.x + (tileObj.width/2);
    var tileY = tileObj.y + (tileObj.height/2);
    return {x:tileX, y:tileY};
  }
  
  tileClicked(obj) {
    console.log("You clicked " + obj.tileName + " of the " + obj.tileType + " type. Its address is the NorthWest corner of " + obj.tileX + " and " + obj.tileY + ". This is also known as " + obj.x + " and " + obj.y + ".");
    //console.log("It contains the properties: " + obj.properties);
    //console.log(obj);
    console.log("Is it damaged?: " + obj.tileDamaged);
    console.log("NORTH: " + this.checkWall(this.directionEnum.NORTH, {x:obj.tileX, y:obj.tileY}));
    console.log("SOUTH: " + this.checkWall(this.directionEnum.SOUTH, {x:obj.tileX, y:obj.tileY}));
    console.log("EAST: " + this.checkWall(this.directionEnum.EAST, {x:obj.tileX, y:obj.tileY}));
    console.log("WEST: " + this.checkWall(this.directionEnum.WEST, {x:obj.tileX, y:obj.tileY}));
    
    if((typeof obj.legalFor !== 'undefined')){
        obj.legalFor.move({x:obj.tileX, y:obj.tileY});
    }
  }
  
  getLegalMoves(moves, currentCoord, previousCoord) {
	moves--;
	var legalMoves = [];
	for(var direction in this.directionEnum) {	
		// NEED TO CHECK FOR LOCKS
		var moveCheck = this.getCoordFromDirection(currentCoord,direction);
        // need to: 
        // - check for damage
        // - check for walls
        // - check for previous coord (no moving backward...)
        
		if(this.checkWall(this.directionEnum[direction], currentCoord) === true && ((typeof previousCoord === 'undefined') || ((typeof previousCoord !== 'undefined') && (JSON.stringify(moveCheck) !== JSON.stringify(previousCoord)) ))) {
			if(moves==0){
				legalMoves.push(moveCheck);
			}
			else {
				var returnArray = (this.getLegalMoves(moves, moveCheck, currentCoord));
				for(var index in returnArray) {
					if(JSON.stringify(returnArray[index]) !== JSON.stringify(currentCoord))
						legalMoves.push(returnArray[index]);
				}
			}
		}
	}
	return legalMoves;
  }
  
  getCoordFromDirection(originCoord,direction) {

	var dir={NORTH:{x:0,y:-1},EAST:{x:1,y:0},SOUTH:{x:0,y:1},WEST:{x:-1,y:0}};
	
	return {x:(parseInt(originCoord.x) + parseInt(dir[direction].x)), y:(parseInt(originCoord.y) + parseInt(dir[direction].y))};
		
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
  checkWall(direction, currentCoordinate) {
    this.wallGrid = this.game.cache.getJSON('wallGrid');
	switch (direction){
		case this.directionEnum.NORTH: // UP
			if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y]&this.directionEnum.NORTH) == 0) {
				return true;
			}
            return false;
			break;
		case this.directionEnum.SOUTH: // DOWN
			if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y]&this.directionEnum.SOUTH) == 0) {
				return true;
			}
            return false;
			break;
		case this.directionEnum.EAST: // RIGHT
			if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y]&this.directionEnum.EAST) == 0) {
				return true;
			}
            return false;
			break;
		case this.directionEnum.WEST: // LEFT
			if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y]&this.directionEnum.WEST) == 0) {
				return true;
			}
            return false;
			break;
		default:
			return false;
	}
    
  }
    
  createTileArray(columns, rows, showTiles = false) {
    this.tileDetail = this.game.cache.getJSON('tileDetail');

    this.tileWidth = 0;
    this.tileHeight = 0;
        
    this.backgroundWidth = this.game.canvas.width;
    this.backgroundHeight = this.game.canvas.height;
    this.tileStartCoordinates = {x:0, y:0};

    this.marginTop = 40;
    this.marginBottom = 38;
    this.marginLeft = 41;
    this.marginRight = 38;
    
    this.padding = 4.85;
    
    this.tileWidth = 25;//(this.backgroundWidth - ((this.marginLeft + this.marginRight) + (this.padding * (columns - 1)))) / columns;
    this.tileHeight = 25;//(this.backgroundHeight - ((this.marginTop + this.marginBottom) + (this.padding * (rows - 1)))) / rows;
        
    this.tileStartCoordinates.x = 0 + this.marginLeft;
    this.tileStartCoordinates.y = 0 + this.marginTop;
    
    var graphics = this.game.add.graphics(0, 0);
    //graphics.lineStyle(4, 0xffd900, 1);
    graphics.beginFill(0xffd900, 1);
    graphics.drawRect(100, 100, this.tileWidth, this.tileHeight);
    
    for (var column = 0; column < columns; column++) {
        for (var row = 0; row < rows; row++) {
            
            var x = this.tileStartCoordinates.x + (this.tileWidth * column) + (this.padding * column - 1);
            var y = this.tileStartCoordinates.y + (this.tileHeight * row) + (this.padding * row - 1);
            var currentTile = this.game.add.sprite(x, y, graphics.generateTexture());
            if (showTiles)
                currentTile.alpha = 0.5;
            else
                currentTile.alpha = 0;
            currentTile.inputEnabled = true;
            currentTile.events.onInputDown.add(this.tileClicked, this);
            //currentTile.name = (column+1) + " " + (row+1);
            
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
                this.tileArray[x][y].tileX = x;
                this.tileArray[x][y].tileY = y;
                this.tileArray[x][y].tileType = obj[prop].type;

                if (typeof this.tileArray[x][y] != 'undefined')
                    this.tileArray[x][y].tileName = obj[prop].name;
                else
                    console.log(x + ":" + y + " not found!");
                 
                if (typeof obj[prop].properties != 'undefined') {
                    this.tileArray[x][y]['tileProperies'] = obj[prop].properties;
                }
            }
        }
        
    }
  }
}

export default Septikon;
