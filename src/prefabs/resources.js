class Resources {

  //initialization code in the constructor
  constructor() { 
    this.resourceEnum = Object.freeze({
        OXYGEN: 0,
        ROCKET: 1,
        METAL: 2,
        ENERGY: 3,
        BIOMASS: 4,
        BIODRONE: 5,
        URANIUM: 6
    });
    this.resources = {};
    for(var type in this.resourceEnum) {
        this.resources[this.resourceEnum[type]] = 5;
    };
  }
  
  check(type, count) {
    if(this.resources[this.resourceEnum[type]] > count)
        return true;
        
    return false;
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