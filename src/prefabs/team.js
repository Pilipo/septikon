import Resources from '../prefabs/resources';
import Personnel from '../prefabs/personnel';
import Ordnance from '../prefabs/ordnance';
import Clone from '../prefabs/clone'; // This will be incorporated in personnel

class Team {

  //initialization code in the constructor
  constructor(game) { 
    this.rec = new Resources();
    this.recEnum = this.rec.resourceEnum;
    this.game = game;
    
    this.personnel = [];
    this.selectedGunners = [];
  }
  
  //Resource Interface
  getRecCount(type) {
    return this.rec.getCount(type);
  }
  
  checkRec(type, count) {
    if (this.getRecCount(type) >= count) 
        return true;
        
    return false;
  }
  
  exchangeRec(costType, costCount, yieldType, yieldCount) {
  }
  
  addRec(type, count) {
    return this.rec.add(type, count);
  }
  
  removeRec(type, count) {
    return this.rec.remove(type, count);
  }
  
  addClone(x, y, props) {
    var point = this.game.septikon.tileToPixels(x,y);
    var clone = new Clone(this.game,point.x,point.y);
    for (var i in props) {
        clone[i] = props[i];
    }
    this.personnel.push(clone);
    this.game.stage.addChild(clone);
  }
  
  getClone(coord) {
    for (var i in this.personnel) {
        if(this.personnel[i].currentTileCoordinates.x == coord.x && this.personnel[i].currentTileCoordinates.y == coord.y){
            return this.personnel[i];
        }
    }
  }
  
  killClone(coord) {
    var clone = this.getClone(coord);
    this.game.stage.removeChild(clone);
    
    var index = this.personnel.indexOf(clone);
    this.personnel.splice(index,1);
    
    clone.remove();
  }
    
  offerLegalClones() {
    // Offer clones that have legal moves
    for(var i in this.personnel) {
        var moves = this.personnel[i].getLegalMoves();

        if(moves != false) {
            this.personnel[i].highlightOn();
        }
    }
  }
  
  offerGunners() {
    // Offer gunner 
    var gunnerFound = false;
    for(var i in this.personnel) {
        if(this.personnel[i].isGunner) {
            gunnerFound = true;
            //this.personnel[i].highlightOn();
        }
    }
    return gunnerFound;
  }
  
  selectGunner(coords) {
    var clone = this.getClone(coords);
    if(!clone)
        return false;
    if(!clone.isGunner)
        return false;
        
    var existingGunner = this.selectedGunners.indexOf(clone);
    if(existingGunner >= 0){
        clone.highlightOff();
        this.selectedGunners.splice(existingGunner, 1);
    } else {
        clone.highlightOn();
        this.selectedGunners.push(clone);
    }
  }
  
  selectCloneForMove(coords) {    
  
    var clone = this.getClone(coords);
    if(!clone)
        return false;

    for(var i in this.personnel) {
        this.personnel[i].highlightOff();
    }
    this.legalTiles = clone.getLegalMoves();
    this.selectedClone = clone;
    this.game.septikon.showTiles(this.legalTiles);
    return true;
  }
  
  moveSelectedClone(coords) {
    for(var i in this.legalTiles) {
        if(this.legalTiles[i].tileX == coords.x && this.legalTiles[i].tileY == coords.y) {
            this.selectedClone.move(coords);
            delete this.selectedClone;
            delete this.legalTiles;
            return true;
        }
    }
    return false;
  }
}

export default Team;