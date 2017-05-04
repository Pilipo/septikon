//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
class Clone extends Phaser.Sprite {

  //initialization code in the constructor
  constructor(game, x, y, frame, team) {
    
    // SWITCH TO DIFFERENT PERSONNEL TYPES
    // This will be a flexible personnel factory
  
    super(game, x, y, 'clone', frame);
        
    this.team = team;

    //setup physics properties
    this.anchor.setTo(0.5, 0.65);
    this.game.physics.arcade.enableBody(this);
    this.body.collideWorldBounds = true;

    //set click event
    //this.inputEnabled = true;
    //this.events.onInputDown.add(this.clicked, this);

    //setup audio
    this.ding = this.game.add.audio('ding');

    //set size
    this.width = 27;
    this.scale.y = Math.abs(this.scale.x);
    
    //set rotation (this should be based on the base this clone occupies)
    this.angle = 90;

    // add animations from spritesheets
    this.animations.add('idling',null,5,true);
    this.animations.play('idling');

    this.currentTileCoordinates = this.game.septikon.pixelsToTile(this.x, this.y);
    this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].tileOccupied = true;
  }
  
  remove(){
    this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].tileOccupied = false;
    this.destroy();
  }

  
  getLegalMoves(){
  
    this.currentTileCoordinates = this.game.septikon.pixelsToTile(this.x, this.y);
    this.currentLegalMoves = this.game.septikon.getLegalMoves(this.game.global.lastDiceRoll, this.currentTileCoordinates);
    this.legalTilesArray = [];
    
    for (var tile in this.currentLegalMoves) {
        this.legalTilesArray.push(this.game.septikon.tileArray[this.currentLegalMoves[tile].x][this.currentLegalMoves[tile].y]);
        this.legalTilesArray[this.legalTilesArray.length-1].alpha = 0.5;
        this.legalTilesArray[this.legalTilesArray.length-1].legalFor = this;
    }
    
  }
  
  move(coordinates) {
  
    // IS IT LEGAL?

    // Clear "legalFor"
    for (var tile in this.legalTilesArray) {
        this.legalTilesArray[tile].alpha = 0;
        delete this.legalTilesArray[tile].legalFor;
    }
    
    // Move to new home
    // Need to add a check for armed opponents (biodrones/espionaged clones/clones in enemy base, etc.)
    var points = this.game.septikon.tileToPixels(coordinates.x, coordinates.y);
    this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].tileOccupied = false;
    var distance = Math.abs(this.y - points.y + this.x - points.x).toFixed(1);
    var tween = this.game.add.tween(this).to( {x:points.x, y:points.y}, (distance*11), Phaser.Easing.Cubic.Out, true);
    
    // Update the personnel coordinate property
    this.currentTileCoordinates = coordinates;
    this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].tileOccupied = true;
    
    // Set turn state to ACTION
    console.log("This is a time a for ACTION!");
    this.game.septikon.turnState = this.game.septikon.turnStateEnum.ACTION;

    // Wait for animation to complete, then process tile trigger
    tween.onComplete.add(this.triggerTile, this);

    
    // Clear this.currentLegalMoves
    delete this.legalTilesArray;
    delete this.currentLegalMoves;    
  }
  
  triggerTile(tile) {
  
    var tile = this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y]
    this.isGunner = false;
    var props = tile.tileProperties;
    
    switch(tile.tileType) {
        case 'surface': 
            this.isGunner = true;
            break;
            
        case 'battle':
            if (typeof props.resourceCostCount != 'undefined') {
                // CAN THIS TEAM AFFORD THE COST?
                // EXCHANGE RESOURCES // PAY UP!!
                // Get the available resource count and prepare to offer "gunner" clones for selection.
                console.log("Is this resource available?");
                console.log(this.team.checkRec(this.team.recEnum[props.resourceCostType.toUpperCase()], props.resourceCostCount));
                if(this.team.checkRec(this.team.recEnum[props.resourceCostType.toUpperCase()], props.resourceCostCount) == true){
                    this.team.removeRec(this.team.recEnum[props.resourceCostType.toUpperCase()], props.resourceCostCount);
                    console.log("New count of " + props.resourceCostType + " is " + this.team.getRecCount(this.team.recEnum[props.resourceCostType.toUpperCase()]));
                    this[props.callback](props.args);
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
            }
            break;
            
        case 'lock':
            // NOTHING HERE (maybe an update feature??)
            return;
            
        default:
            break;
    }; 
            
    // COMMIT ACTION
    this.finishTurn();
  }
  
  fire(weaponType) {
    console.log("Firing the " + weaponType);
    
    switch (weaponType) {
        case 'laser':
            this.game.septikon.shootTile(this.game.state.states.game.clone2.currentTileCoordinates);
            break;
            
        case 'satellite':
            // PLACE A SATELLITE
            break;
            
        case 'thermite':
            this.game.septikon.shootTile(this.game.state.states.game.clone2.currentTileCoordinates, true);
            break;
            
        case 'shield':
            break;
            
        case 'biodrone':
            break;
            
        case 'rocket': 
            break;
            
        default:
            break;
    };
    
    this.game.septikon.turnState = this.game.septikon.turnStateEnum.END;
    //this.finishTurn();
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
    this.game.septikon.turnState = this.game.septikon.turnStateEnum.START;
    console.log("Alas. Your turn is over. " + this.game.septikon.turnState);
  }
  
}

export default Clone;
