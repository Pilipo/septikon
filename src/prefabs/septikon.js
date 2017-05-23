import Clone from '../prefabs/clone';
//import Team from '../prefabs/team';

class Septikon {

  //initialization code in the constructor
  constructor(game) { 
    this.game = game;
    
    this.player = {
        id: 0
    };
    
    this.shownTiles = [];
    this.tileArray = [];
    this.bgRatio = 0;
    this.worldRatio = 0;
    this.turnStateEnum = Object.freeze({
        START: 0,
        SELECT_CLONE: 1, 
        MOVE_CLONE: 2,
        SELECT_GUNNER: 3,
        SELECT_ACTION_ORDER: 4, 
        ACTION: 5,
        END: 6
    });
    this.directionEnum = Object.freeze({
        NORTH:1,
        EAST:2,
        SOUTH:4,
        WEST:8
    });
    this.turnState = 0;

  }
  
  diceRolled(details) {
    this.game.global.lastDiceRoll = details.value;
  }
  
  addClone(details) {
    var point = this.tileToPixels(details.x, details.y);
    var clone = new Clone(this.game, point.x, point.y);
    this.game.boardGroup.add(clone);
  }
  
  updatePlayer(details) {
    for (var i in details) {
        this.player[i] = details[i];
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
    this.game.client.sendInput({event: 'tileClicked', x:parseInt(obj.tileX), y:parseInt(obj.tileY)});
    return;
  }
  
  triggerTile(caller) {
  
    var tile = this.tileArray[caller.currentTileCoordinates.x][caller.currentTileCoordinates.y];
    caller.isGunner = false;
    var props = tile.tileProperties;
    
    switch(tile.tileType) {
        case 'surface': 
            caller.isGunner = true;
            this.finishTurn();
            break;
            
        case 'battle':
            if (typeof props.resourceCostCount != 'undefined') {
                // CAN THIS TEAM AFFORD THE COST?
                // EXCHANGE RESOURCES // PAY UP!!
                // Get the available resource count and prepare to offer "gunner" clones for selection.
                //console.log("Is this resource available?");
                //console.log(this);
                
                // Types of battle tiles with a FIRE action:
                //  - Satellite: gunner:true, projectile: true
                //  - Thermite: gunner:true, projectile: false
                //  - Shield: gunner:true, projectile: true
                //  - Biodrone: gunner:true, projectile: true
                //  - Laser: gunner:true, projectile: false
                //  - Rocket: gunner:true, projectile: true
                console.log(tile.tileName)
                if (this.localTeam.offerGunners() == false && (tile.tileName == "satellite" || tile.tileName == "thermite" || tile.tileName == "shield" || tile.tileName == "biodrone" || tile.tileName == "laser" || tile.tileName == "rocket" )) {
                    this.finishTurn();
                }
                //console.log(this.localTeam.checkRec(this.localTeam.recEnum[props.resourceCostType.toUpperCase()], props.resourceCostCount));
                if(this.localTeam.checkRec(this.localTeam.recEnum[props.resourceCostType.toUpperCase()], props.resourceCostCount) == true){
                    this.localTeam.removeRec(this.localTeam.recEnum[props.resourceCostType.toUpperCase()], props.resourceCostCount);
                    //console.log("New count of " + props.resourceCostType + " is " + this.localTeam.getRecCount(this.localTeam.recEnum[props.resourceCostType.toUpperCase()]));
                    if(this.localTeam.offerGunners()) {
                        this.pendingAction = {props, caller};
                    }
               }
            }
            
            // OFFER GUNNERS AND AWAIT SELECTION (remember the cost per gunner)
            // This will require an array of clones associated with the team. 
            // Iterate the array looking for 'isGunner == true'
            // Highlight all "gunner" clones
            // Allow selection of only as many as team can afford
            
            
            
            // This will call the method defined in JSON. In this case firing a weapon.
            // Iterate the selected gunners and call the method.
            
            break;
            
        case 'armory':
            //SET TEAM WEAPONS!
            // This requires a Team property for storing a weapons (arms?) array.
            this.finishTurn();
            break;
            
        case 'production':
            // NOTE: These are required if resources allow
            if (typeof props.resourceCostCount != 'undefined') {
                // CAN THIS TEAM AFFORD THE COST?
                // Requires Team object to check for resources
                
                // Get cost count
                // Get cost type
                
                // Get yield count
                // Get yield type
                
                // Execute transaction
                this.finishTurn();
            }
            break;
            
        case 'lock':
            // NOTHING HERE (maybe an update feature??)
            this.finishTurn();
            break;
            
        default:
            break;
    }; 
            
    // COMMIT ACTION
    
  }
  
    fire(weaponType, caller) {
    console.log("Firing the " + weaponType);
    
    switch (weaponType) {
        case 'laser':
            //for (var i in this.localTeam.selectedGunners) {
            //    this.shootTile(this.localTeam.selectedGunners[i].currentTileCoordinates);
            //}
            //break;
            
        case 'satellite':
            // PLACE A SATELLITE
           // break;
            
        case 'thermite':
            //this.shootTile(caller.currentTileCoordinates, true);
            //break;
            
        case 'shield':
            //break;
            
        case 'biodrone':
            //break;
            
        case 'rocket': 
            //break;
            
        default:
            for (var i in this.localTeam.selectedGunners) {
                this.shootTile(this.localTeam.selectedGunners[i].currentTileCoordinates);
            }
            break;
    };
    
    this.localTeam.clearGunners();
    //this.game.septikon.turnState = this.game.septikon.turnStateEnum.START;
    this.finishTurn();
  }
  
  repair(count) {
    console.log("repair " + count + " of the things!");
  }
  
  espionage() {
    console.log("Gimme yer clone!!");
  }
  
  takeover() {
    console.log("Gimme yer satellite!!");
  }
  
  counter() {
    console.log("Gimme back my clone!!");
  }
  
  killBiodrone() {
    console.log("Yer sould better belong to Jesus! Cuz yer ass belongs to me!");
  }
  
  finishTurn() {
    this.turnState = this.game.septikon.turnStateEnum.START;
    //console.log("Alas. Your turn is over. ");
  }
  

  getLegalMoves(moves, currentCoord, previousCoord) {
	moves--;
	var legalMoves = [];
	for(var direction in this.directionEnum) {	
		// NEED TO CHECK FOR LOCKS
		var moveCheck = this.getCoordFromDirection(currentCoord,direction);
        if (moveCheck == false)
            continue;
            
        var tileToCheck = this.tileArray[moveCheck.x][moveCheck.y];

        // tile is legal IF direction is ok AND tile is not damaged AND ( there is no previous coordinate OR this is not the previous coordinate )
		if(this.checkWall(this.directionEnum[direction], currentCoord) === true && tileToCheck.tileDamaged === false && ((typeof previousCoord === 'undefined') || ((typeof previousCoord !== 'undefined') && (JSON.stringify(moveCheck) !== JSON.stringify(previousCoord)) ))) {
			// Check if tile is occupied
            if(moves==0){
                if(tileToCheck.tileOccupied === false) {
                    legalMoves.push(moveCheck);
                }
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
    
    var obj = {x:(parseInt(originCoord.x) + parseInt(dir[direction].x)), y:(parseInt(originCoord.y) + parseInt(dir[direction].y))};
    if(obj.x < 0 || obj.y < 0) 
        return false;
	else
        return {x:(parseInt(originCoord.x) + parseInt(dir[direction].x)), y:(parseInt(originCoord.y) + parseInt(dir[direction].y))};
		
  }
  
  showTiles(tilesArray) {
    for (var i in tilesArray) {
        this.shownTiles.push(tilesArray[i]);
        tilesArray[i].alpha = 0.5;
    }
  }
  
  hideTiles(tileArray) {
    if(!tileArray) {
        for (var i in this.shownTiles) {
            this.shownTiles[i].alpha = 0;
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
  
  setup() {
    //Should ask for player name and assign a color. 
    //Give waiting indicator
    //Offer some way to pick a game? IDK..
  }
  
  startGame() {
    this.game.state.start('game');
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
    graphics.beginFill(0xffd900, 1);
    graphics.drawRect(100, 100, this.tileWidth, this.tileHeight);
    
    for (var column = 0; column < columns; column++) {
        for (var row = 0; row < rows; row++) {
            
            var x = this.tileStartCoordinates.x + (this.tileWidth * column) + (this.padding * column - 1);
            var y = this.tileStartCoordinates.y + (this.tileHeight * row) + (this.padding * row - 1);
            graphics.generateTexture();
            
            var currentTile = this.game.add.sprite(x, y, graphics.generateTexture());
            this.game.boardGroup.add(currentTile);
            currentTile.alpha = 0.25;
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
                 
                if (typeof obj[prop].properties != 'undefined') {
                    this.tileArray[x][y]['tileProperties'] = obj[prop].properties;
                }
            }
        }
        
    }
  }
}

export default Septikon;
