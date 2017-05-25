(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
	"tilePropertyArray": {
		"otherSpace": {
			"id": "000",
			"type": "space",
			"name": "space",
			"locations": ["9,0", "9,1", "9,2", "9,3", "9,4", "9,5", "9,6", "9,7", "9,8", "9,9", "9,10", "9,11", "9,12", "9,13", "9,14", "9,15", "9,16", "9,17", "9,18", "9,19", "9,20", "10,0", "10,1", "10,2", "10,3", "10,4", "10,5", "10,6", "10,7", "10,8", "10,9", "10,10", "10,11", "10,12", "10,13", "10,14", "10,15", "10,16", "10,17", "10,18", "10,19", "10,20", "11,0", "11,1", "11,2", "11,3", "11,4", "11,5", "11,6", "11,7", "11,8", "11,9", "11,10", "11,11", "11,12", "11,13", "11,14", "11,15", "11,16", "11,17", "11,18", "11,19", "11,20", "12,0", "12,1", "12,2", "12,3", "12,4", "12,5", "12,6", "12,7", "12,8", "12,9", "12,10", "12,11", "12,12", "12,13", "12,14", "12,15", "12,16", "12,17", "12,18", "12,19", "12,20", "13,0", "13,1", "13,2", "13,3", "13,4", "13,5", "13,6", "13,7", "13,8", "13,9", "13,10", "13,11", "13,12", "13,13", "13,14", "13,15", "13,16", "13,17", "13,18", "13,19", "13,20", "14,0", "14,1", "14,2", "14,3", "14,4", "14,5", "14,6", "14,7", "14,8", "14,9", "14,10", "14,11", "14,12", "14,13", "14,14", "14,15", "14,16", "14,17", "14,18", "14,19", "14,20", "15,0", "15,1", "15,2", "15,3", "15,4", "15,5", "15,6", "15,7", "15,8", "15,9", "15,10", "15,11", "15,12", "15,13", "15,14", "15,15", "15,16", "15,17", "15,18", "15,19", "15,20", "16,0", "16,1", "16,2", "16,3", "16,4", "16,5", "16,6", "16,7", "16,8", "16,9", "16,10", "16,11", "16,12", "16,13", "16,14", "16,15", "16,16", "16,17", "16,18", "16,19", "16,20", "17,0", "17,1", "17,2", "17,3", "17,4", "17,5", "17,6", "17,7", "17,8", "17,9", "17,10", "17,11", "17,12", "17,13", "17,14", "17,15", "17,16", "17,17", "17,18", "17,19", "17,20", "18,0", "18,1", "18,2", "18,3", "18,4", "18,5", "18,6", "18,7", "18,8", "18,9", "18,10", "18,11", "18,12", "18,13", "18,14", "18,15", "18,16", "18,17", "18,18", "18,19", "18,20", "19,0", "19,1", "19,2", "19,3", "19,4", "19,5", "19,6", "19,7", "19,8", "19,9", "19,10", "19,11", "19,12", "19,13", "19,14", "19,15", "19,16", "19,17", "19,18", "19,19", "19,20", "20,0", "20,1", "20,2", "20,3", "20,4", "20,5", "20,6", "20,7", "20,8", "20,9", "20,10", "20,11", "20,12", "20,13", "20,14", "20,15", "20,16", "20,17", "20,18", "20,19", "20,20", "21,0", "21,1", "21,2", "21,3", "21,4", "21,5", "21,6", "21,7", "21,8", "21,9", "21,10", "21,11", "21,12", "21,13", "21,14", "21,15", "21,16", "21,17", "21,18", "21,19", "21,20"]
		},
		"battleThermite": {
			"id": "001",
			"type": "battle",
			"name": "thermite",
			"properties": {
                "action": "optional",
				"resourceCostType": "biomass",
				"resourceCostCount": 2,
				"callback": "fire",
				"args": "thermite"
			},
			"locations": ["6,20", "7,1", "7,7", "23,13", "23,19", "24,0"]
		},
		"battleShield": {
			"id": "002",
			"type": "battle",
			"name": "shield",
			"properties": {
                "action": "optional",
				"resourceCostType": "energy",
				"resourceCostCount": 1,
				"callback": "fire",
				"args": "shield"
			},
			"locations": ["6,6", "6,13", "6,19", "7,2", "7,12", "23,8", "23,18", "24,1", "24,7", "24,14"]
		},
		"battleBiodrone": {
			"id": "003",
			"type": "battle",
			"name": "biodrone",
			"properties": {
                "action": "optional",
				"resourceCostType": "biodrone",
				"resourceCostCount": 1,
				"callback": "fire",
				"args": "biodrone"
			},
			"locations": ["6,5", "7,3", "7,15", "23,5", "23,17", "24,15"]
		},
		"battleSatellite": {
			"id": "004",
			"type": "battle",
			"name": "satellite",
			"properties": {
                "action": "optional",
				"resourceCostType": "metal",
				"resourceCostCount": 1,
				"callback": "fire",
				"args": "satellite"
			},
			"locations": ["6,0", "6,14", "7,4", "7,17", "23,3", "23,16", "24,6", "24,20"]
		},
		"battleLaser": {
			"id": "005",
			"type": "battle",
			"name": "laser",
			"properties": {
                "action": "optional",
				"resourceCostType": "energy",
				"resourceCostCount": 1,
				"callback": "fire",
				"args": "laser"
			},
			"locations": ["6,3", "6,7", "6,8", "6,12", "6,16", "7,5", "7,6", "7,9", "7,18", "7,19", "23,1", "23,2", "23,11", "23,14", "23,15", "24,4", "24,8", "24,12", "24,13", "24,17"]
		},
		"battleRepair": {
			"id": "006",
			"type": "battle",
			"name": "repair",
			"properties": {
                "action": "optional",
				"resourceCostType": "metal",
				"resourceCostCount": 1,
				"callback": "repair",
                "args": 1
			},
			"locations": ["6,1", "6,10", "6,18", "7,8", "7,13", "23,7", "23,12", "24,2", "24,10", "24,19"]
		},
		"battleRocket": {
			"id": "007",
			"type": "battle",
			"name": "rocket",
			"properties": {
                "action": "optional",
				"resourceCostType": "rocket",
				"resourceCostCount": 1,
				"callback": "fire",
				"args": "rocket"
			},
			"locations": ["6,4", "6,11", "7,10", "7,16", "23,4", "23,10", "24,9", "24,16"]
		},
		"battleEspionage": {
			"id": "008",
			"type": "battle",
			"name": "espionage",
			"properties": {
                "action": "optional",
				"resourceCostType": "biomass",
				"resourceCostCount": 3,
				"callback": "espionage"
			},
			"locations": ["6,15", "7,11", "23,9", "24,5"]
		},
		"battleTakeover": {
			"id": "009",
			"type": "battle",
			"name": "takeover",
			"properties": {
                "action": "optional",
				"resourceCostType": "energy",
				"resourceCostCount": 2,
				"callback": "takeover"
			},
			"locations": ["6,17", "7,14", "23,6", "24,3"]
		},
		"battleRepairTwo": {
			"id": "010",
			"type": "battle",
			"name": "repairTwo",
			"properties": {
                "action": "optional",
				"resourceCostType": ["energy", "oxygen"],
				"resourceCostCount": [1, 1],
				"callback": "repair",
				"args": 2
			},
			"locations": ["6,9", "24,11"]
		},
		"battleCounterEspionage": {
			"id": "011",
			"type": "battle",
			"name": "counterEspionage",
			"properties": {
                "action": "optional",
				"resourceCostType": ["biomass", "oxygen"],
				"resourceCostCount": [1, 1],
				"callback": "counter"
			},
			"locations": ["6,2", "24,18"]
		},
		"otherSurface": {
			"id": "012",
			"type": "surface",
			"name": "surface",
			"locations": ["8,0", "8,1", "8,2", "8,3", "8,4", "8,5", "8,6", "8,7", "8,8", "8,9", "8,10", "8,11", "8,12", "8,13", "8,14", "8,15", "8,16", "8,17", "8,18", "8,19", "8,20", "22,0", "22,1", "22,2", "22,3", "22,4", "22,5", "22,6", "22,7", "22,8", "22,9", "22,10", "22,11", "22,12", "22,13", "22,14", "22,15", "22,16", "22,17", "22,18", "22,19", "22,20"]
		},
		"otherLock": {
			"id": "013",
			"type": "lock",
			"name": "lock",
			"locations": ["7,0", "5,10", "1,10", "7,20", "23,0", "23,20", "25,10", "29,10"]
		},
		"armoryDrill": {
			"id": "014",
			"type": "armory",
			"name": "drill",
			"locations": ["4,10", "26,10"]
		},
		"ArmoryCannon": {
			"id": "015",
			"type": "armory",
			"name": "cannon",
			"locations": ["3,10", "27,10"]
		},
		"armoryExplosives": {
			"id": "016",
			"type": "armory",
			"name": "explosives",
			"locations": ["2,10", "28,10"]
		},
		"lichen": {
			"id": "017",
			"type": "production",
			"name": "lichen",
			"properties": {
                "action": "required",
				"resourceYieldType": "biomass",
				"resourceYieldCount": 1
			},
			"locations": ["0,0", "0,10", "0,17", "1,2", "1,8", "1,16", "1,20", "29,0", "29,4", "29,12", "29,18", "30,3", "30,10", "30,20"]
		},
		"productionLichenTwo": {
			"id": "018",
			"type": "production",
			"name": "lichenTwo",
			"properties": {
                "action": "required",
				"resourceYieldType": "biomass",
				"resourceYieldCount": 2
			},
			"locations": ["0,4", "30,16"]

		},
		"productionChemicalReactor": {
			"id": "019",
			"type": "production",
			"name": "chemicalReactor",
			"properties": {
                "action": "required",
				"resourceCostType": "biomass",
				"resourceCostCount": 1,
				"resourceYieldType": "oxygen",
				"resourceYieldCount": 1
			},
			"locations": ["1,1", "1,9", "29,19", "29,11"]

		},
		"productionChemicalReactorTwo": {
			"id": "020",
			"type": "production",
			"name": "chemicalReactorTwo",
			"properties": {
                "action": "required",
				"resourceCostType": "biomass",
				"resourceCostCount": 2,
				"resourceYieldType": "oxygen",
				"resourceYieldCount": 2
			},
			"locations": ["0,5", "30,15"]
		},
		"productionAirFilter": {
			"id": "021",
			"type": "production",
			"name": "airFilter",
			"properties": {
                "action": "required",
				"resourceCostType": "oxygen",
				"resourceCostCount": 2,
				"resourceYieldType": "oxygen",
				"resourceYieldCount": 3
			},
			"locations": ["0,15", "1,11", "29,9", "30,5"]
		},
		"productionBiocollector": {
			"id": "022",
			"type": "production",
			"name": "biocollector",
			"properties": {
                "action": "required",
				"resourceCostType": ["oxygen", "biomass"],
				"resourceCostCount": [1, 1],
				"resourceYieldType": "biodrone",
				"resourceYieldCount": 1
			},
			"locations": ["0,14", "0,18", "1,6", "1,17", "30,6", "30,2", "29,14", "29,3"]
		},
		"productionUraniumMine": {
			"id": "023",
			"type": "production",
			"name": "uraniumMine",
			"properties": {
                "action": "required",
				"resourceCostType": ["oxygen", "energy"],
				"resourceCostCount": [1, 1],
				"resourceYieldType": "uranium",
				"resourceYieldCount": 1
			},
			"locations": ["0,2", "0,6", "1,3", "30,18", "30,14", "29,17"]
		},
		"productionNuclearReactor": {
			"id": "024",
			"type": "production",
			"name": "nuclearReactor",
			"properties": {
                "action": "required",
				"resourceCostType": "uranium",
				"resourceCostCount": 1,
				"resourceYieldType": "energy",
				"resourceYieldCount": 3
			},
			"locations": ["0,9", "0,16", "1,7", "1,14", "1,19", "30,11", "30,4", "29,13", "29,6", "29,1"]
		},
		"productionThermalGenerator": {
			"id": "025",
			"type": "production",
			"name": "thermalGenerator",
			"properties": {
                "action": "required",
				"resourceCostType": "biomass",
				"resourceCostCount": 1,
				"resourceYieldType": "energy",
				"resourceYieldCount": 1
			},
			"locations": ["0,12", "30,8"]
		},
		"productionFoundry": {
			"id": "026",
			"type": "production",
			"name": "foundry",
			"properties": {
                "action": "required",
				"resourceCostType": "energy",
				"resourceCostCount": 1,
				"resourceYieldType": "metal",
				"resourceYieldCount": 1
			},
			"locations": ["0,3", "0,11", "0,19", "1,13", "30,17", "30,9", "30,1", "29,7"]
		},
		"productionFoundryTwo": {
			"id": "027",
			"type": "production",
			"name": "foundryTwo",
			"properties": {
                "action": "required",
				"resourceCostType": "energy",
				"resourceCostCount": 2,
				"resourceYieldType": "metal",
				"resourceYieldCount": 2
			},
			"locations": ["1,0", "29,20"]
		},
		"productionRocketWorkshop": {
			"id": "028",
			"type": "production",
			"name": "rocketWorkshop",
			"properties": {
                "action": "required",
				"resourceCostType": "energy",
				"resourceCostCount": 1,
				"resourceYieldType": "rocket",
				"resourceYieldCount": 1
			},
			"locations": ["0,1", "0,7", "1,5", "1,12", "1,15", "30,19", "30,13", "29,15", "29,8", "29,5"]
		},
		"productionSensorCabin": {
			"id": "029",
			"type": "production",
			"name": "sensorCabin",
			"properties": {
                "action": "required",
				"callback": "killBiodrone"
			},
			"locations": ["0,13", "30,7"]
		},
		"productionNuclearArmory": {
			"id": "030",
			"type": "production",
			"name": "nuclearArmory",
			"properties": {
                "action": "required",
				"resourceCostType": ["oxygen", "energy", "uranium"],
				"resourceCostCount": [1, 1, 1],
				"resourceYieldType": "nuke",
				"resourceYieldCount": 1
			},
			"locations": ["0,20", "1,4", "1,18", "30,0", "29,16", "29,2"]
		},
		"productionRepair": {
			"id": "031",
			"type": "production",
			"name": "prodRepair",
			"properties": {
                "action": "required",
				"resourceCostType": ["energy"],
				"resourceCostCount": [1],
				"callback": "repair",
				"tileTargetID": 1
			},
			"locations": ["0,8", "30,12"]
		},
		"resourceOxygen": {
			"id": "032",
			"type": "warehouse",
			"name": "oxygen",
			"locations": ["5,0", "5,1", "5,2", "5,3", "5,4", "5,5", "5,6", "5,7", "5,8", "5,9", "25,11", "25,12", "25,13", "25,14", "25,15", "25,16", "25,17", "25,18", "25,19", "25,20"]
		},
		"resourceRocket": {
			"id": "033",
			"type": "warehouse",
			"name": "rocket",
			"locations": ["4,0", "4,1", "4,2", "4,3", "4,4", "4,5", "4,6", "4,7", "4,8", "4,9", "26,11", "26,12", "26,13", "26,14", "26,15", "26,16", "26,17", "26,18", "26,19", "26,20"]
		},
		"resourceMetal": {
			"id": "034",
			"type": "warehouse",
			"name": "metal",
			"locations": ["3,0", "3,1", "3,2", "3,3", "3,4", "3,5", "3,6", "3,7", "3,8", "3,9", "27,11", "27,12", "27,13", "27,14", "27,15", "27,16", "27,17", "27,18", "27,19", "27,20"]
		},
		"resourceEnergy": {
			"id": "035",
			"type": "warehouse",
			"name": "energy",
			"locations": ["2,0", "2,1", "2,2", "2,3", "2,4", "2,5", "2,6", "2,7", "2,8", "2,9", "2,11", "2,12", "2,13", "2,14", "2,15", "2,16", "2,17", "2,18", "2,19", "2,20", "28,0", "28,1", "28,2", "28,3", "28,4", "28,5", "28,6", "28,7", "28,8", "28,9", "28,11", "28,12", "28,13", "28,14", "28,15", "28,16", "28,17", "28,18", "28,19", "28,20"]
		},
		"resourceBiomass": {
			"id": "036",
			"type": "warehouse",
			"name": "biomass",
			"locations": ["5,11", "5,12", "5,13", "5,14", "5,15", "5,16", "5,17", "5,18", "5,19", "5,20", "25,0", "25,1", "25,2", "25,3", "25,4", "25,5", "25,6", "25,7", "25,8", "25,9"]
		},
		"resourceBiodrone": {
			"id": "037",
			"type": "warehouse",
			"name": "biodrone",
			"locations": ["4,11", "4,12", "4,13", "4,14", "4,15", "4,16", "4,17", "4,18", "4,19", "4,20", "26,0", "26,1", "26,2", "26,3", "26,4", "26,5", "26,6", "26,7", "26,8", "26,9"]
		},
		"resourceUranium": {
			"id": "038",
			"type": "warehouse",
			"name": "uranium",
			"locations": ["3,11", "3,12", "3,13", "3,14", "3,15", "3,16", "3,17", "3,18", "3,19", "3,20", "27,0", "27,1", "27,2", "27,3", "27,4", "27,5", "27,6", "27,7", "27,8", "27,9"]
		}
	}
}
},{}],2:[function(require,module,exports){
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return  bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;

},{}],3:[function(require,module,exports){
(function (global){
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16);
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var  rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],4:[function(require,module,exports){
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

},{"./lib/bytesToUuid":2,"./lib/rng":3}],5:[function(require,module,exports){
'use strict';

var _client = require('./prefabs/client');

var _client2 = _interopRequireDefault(_client);

var _boot = require('./states/boot');

var _boot2 = _interopRequireDefault(_boot);

var _game = require('./states/game');

var _game2 = _interopRequireDefault(_game);

var _setup = require('./states/setup');

var _setup2 = _interopRequireDefault(_setup);

var _preloader = require('./states/preloader');

var _preloader2 = _interopRequireDefault(_preloader);

var _gameover = require('./states/gameover');

var _gameover2 = _interopRequireDefault(_gameover);

var _septikon = require('./prefabs/septikon');

var _septikon2 = _interopRequireDefault(_septikon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof Storage !== "undefined") {
    if (localStorage.getItem('septUUID') != null) {
        var uuid = localStorage.getItem('septUUID');
    } else {
        var _uuid = require('uuid/v4')();
        localStorage.setItem('septUUID', _uuid);
    }
} else {
    console.error("Local Storage is required!");
}

// const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'phaser-test-game');
var game = new Phaser.Game("100", "100", Phaser.AUTO);
game.septikon = new _septikon2.default(game);
game.client = new _client2.default(game.septikon);

game.state.add('boot', new _boot2.default());
game.state.add('game', new _game2.default());
game.state.add('setup', new _setup2.default());
game.state.add('preloader', new _preloader2.default());
game.state.add('gameover', new _gameover2.default());

game.state.start('boot');

},{"./prefabs/client":7,"./prefabs/septikon":15,"./states/boot":22,"./states/game":23,"./states/gameover":24,"./states/preloader":25,"./states/setup":26,"uuid/v4":4}],6:[function(require,module,exports){
'use strict';

var gameModal = gameModal || {};

gameModal = function gameModal(game) {

	var _this = this;
	game.modals = {};

	/**
  * [hideModal description]
  * @param  {[type]} type [description]
  * @return {[type]}      [description]
  */
	this.hideModal = function (type) {
		window.console.log(type);
		game.modals[type].visible = false;
	};

	return {
		createModal: function createModal(options) {
			var type = options.type || ''; // must be unique
			var includeBackground = options.includeBackground; // maybe not optional
			var backgroundColor = options.backgroundColor || "0x000000";
			var backgroundOpacity = options.backgroundOpacity === undefined ? 0.7 : options.backgroundOpacity;
			var modalCloseOnInput = options.modalCloseOnInput || false;
			var modalBackgroundCallback = options.modalBackgroundCallback || false;
			var vCenter = options.vCenter || true;
			var hCenter = options.hCenter || true;
			var itemsArr = options.itemsArr || [];
			var fixedToCamera = options.fixedToCamera || false;

			var modal;
			var modalGroup = game.add.group();
			if (fixedToCamera === true) {
				modalGroup.fixedToCamera = true;
				modalGroup.cameraOffset.x = 0;
				modalGroup.cameraOffset.y = 0;
			}

			if (includeBackground === true) {
				modal = game.add.graphics(game.width, game.height);
				modal.beginFill(backgroundColor, backgroundOpacity);
				modal.x = 0;
				modal.y = 0;

				modal.drawRect(0, 0, game.width, game.height);

				if (modalCloseOnInput === true) {

					var innerModal = game.add.sprite(0, 0);
					innerModal.inputEnabled = true;
					innerModal.width = game.width;
					innerModal.height = game.height;
					innerModal.type = type;
					innerModal.input.priorityID = 0;
					innerModal.events.onInputDown.add(function (e, pointer) {
						this.hideModal(e.type);
					}, _this, 2);

					modalGroup.add(innerModal);
				} else {

					modalBackgroundCallback = true;
				}
			}

			if (modalBackgroundCallback) {
				var innerModal = game.add.sprite(0, 0);
				innerModal.inputEnabled = true;
				innerModal.width = game.width;
				innerModal.height = game.height;
				innerModal.type = type;
				innerModal.input.priorityID = 0;

				modalGroup.add(innerModal);
			}

			if (includeBackground) {
				modalGroup.add(modal);
			}

			var modalLabel;
			for (var i = 0; i < itemsArr.length; i += 1) {
				var item = itemsArr[i];
				var itemType = item.type || 'text';
				var itemColor = item.color || 0x000000;
				var itemFontfamily = item.fontFamily || 'Arial';
				var itemFontSize = item.fontSize || 32;
				var itemStroke = item.stroke || '0x000000';
				var itemStrokeThickness = item.strokeThickness || 0;
				var itemAlign = item.align || 'center';
				var offsetX = item.offsetX || 0;
				var offsetY = item.offsetY || 0;
				var contentScale = item.contentScale || 1;
				var content = item.content || "";
				var centerX = game.width / 2;
				var centerY = game.height / 2;
				var callback = item.callback || false;
				var textAlign = item.textAlign || "left";
				var atlasParent = item.atlasParent || "";
				var buttonHover = item.buttonHover || content;
				var buttonActive = item.buttonActive || content;
				var graphicColor = item.graphicColor || 0xffffff;
				var graphicOpacity = item.graphicOpacity || 1;
				var graphicW = item.graphicWidth || 200;
				var graphicH = item.graphicHeight || 200;
				var graphicRadius = item.graphicRadius || 0;
				var lockPosition = item.lockPosition || false;

				var itemAnchor = item.anchor || { x: 0, y: 0 };
				var itemAngle = item.angle || 0;
				var itemX = item.x || 0;
				var itemY = item.y || 0;
				var imageFrame = item.frame || null;
				var tileSpriteWidth = item.tileSpriteWidth || game.width;
				var tileSpriteHeight = item.tileSpriteHeight || game.height;

				modalLabel = null;

				if (itemType === "text" || itemType === "bitmapText") {

					if (itemType === "text") {
						modalLabel = game.add.text(0, 0, content, {
							font: itemFontSize + 'px ' + itemFontfamily,
							fill: "#" + String(itemColor).replace("0x", ""),
							stroke: "#" + String(itemStroke).replace("0x", ""),
							strokeThickness: itemStrokeThickness,
							align: itemAlign
						});
						modalLabel.contentType = 'text';
						modalLabel.update();
						modalLabel.x = game.width / 2 - modalLabel.width / 2 + offsetX;
						modalLabel.y = game.height / 2 - modalLabel.height / 2 + offsetY;
					} else {
						modalLabel = game.add.bitmapText(0, 0, itemFontfamily, String(content), itemFontSize);
						modalLabel.contentType = 'bitmapText';
						modalLabel.align = textAlign;
						modalLabel.updateText();
						modalLabel.x = centerX - modalLabel.width / 2 + offsetX;
						modalLabel.y = centerY - modalLabel.height / 2 + offsetY;
					}
				} else if (itemType === "image") {
					modalLabel = game.add.image(0, 0, content);
					modalLabel.scale.setTo(contentScale, contentScale);
					modalLabel.contentType = 'image';
					modalLabel.x = centerX - modalLabel.width / 2 + offsetX;
					modalLabel.y = centerY - modalLabel.height / 2 + offsetY;
				} else if (itemType === "tileSprite") {
					modalLabel = game.add.tileSprite(itemX, itemY, tileSpriteWidth, tileSpriteHeight, content, imageFrame);
					modalLabel.scale.setTo(contentScale, contentScale);
					modalLabel.anchor.setTo(itemAnchor.x, itemAnchor.y);
					modalLabel.angle = itemAngle;
					modalLabel.contentType = 'tileSprite';
				} else if (itemType === "sprite") {
					modalLabel = game.add.sprite(0, 0, atlasParent, content);
					modalLabel.scale.setTo(contentScale, contentScale);
					modalLabel.contentType = 'sprite';
					modalLabel.x = centerX - modalLabel.width / 2 + offsetX;
					modalLabel.y = centerY - modalLabel.height / 2 + offsetY;
				} else if (itemType === "button") {
					modalLabel = game.add.button(0, 0, atlasParent, callback, this, buttonHover, content, buttonActive, content);
					modalLabel.scale.setTo(contentScale, contentScale);
					modalLabel.contentType = 'button';
					modalLabel.x = centerX - modalLabel.width / 2 + offsetX;
					modalLabel.y = centerY - modalLabel.height / 2 + offsetY;
				} else if (itemType === "graphics") {
					modalLabel = game.add.graphics(graphicW, graphicH);
					modalLabel.beginFill(graphicColor, graphicOpacity);
					if (graphicRadius <= 0) {
						modalLabel.drawRect(0, 0, graphicW, graphicH);
					} else {
						modalLabel.drawRoundedRect(0, 0, graphicW, graphicH, graphicRadius);
					}
					modalLabel.endFill();
					modalLabel.x = centerX - modalLabel.width / 2 + offsetX;
					modalLabel.y = centerY - modalLabel.height / 2 + offsetY;
				}

				modalLabel["_offsetX"] = 0;
				modalLabel["_offsetY"] = 0;
				modalLabel["lockPosition"] = lockPosition;
				modalLabel._offsetX = offsetX;
				modalLabel._offsetY = offsetY;

				if (callback !== false && itemType !== "button") {
					modalLabel.inputEnabled = true;
					modalLabel.pixelPerfectClick = true;
					modalLabel.priorityID = 10;
					modalLabel.events.onInputDown.add(callback, modalLabel);
				}

				if (itemType !== "bitmapText" && itemType !== "graphics") {
					modalLabel.bringToTop();
					modalGroup.add(modalLabel);
					modalLabel.bringToTop();
					modalGroup.bringToTop(modalLabel);
				} else {
					modalGroup.add(modalLabel);
					modalGroup.bringToTop(modalLabel);
				}
			}

			modalGroup.visible = false;
			game.modals[type] = modalGroup;
		},
		updateModalValue: function updateModalValue(value, type, index, id) {
			var item;
			if (index !== undefined && index !== null) {
				item = game.modals[type].getChildAt(index);
			} else if (id !== undefined && id !== null) {}

			if (item.contentType === "text") {
				item.text = value;
				item.update();
				if (item.lockPosition === true) {} else {
					item.x = game.width / 2 - item.width / 2 + item._offsetX;
					item.y = game.height / 2 - item.height / 2 + item._offsetY;
				}
			} else if (item.contentType === "bitmapText") {
				item.text = value;
				item.updateText();
				if (item.lockPosition === true) {} else {
					item.x = game.width / 2 - item.width / 2 + item._offsetX;
					item.y = game.height / 2 - item.height / 2 + item._offsetY;
				}
			} else if (item.contentType === "image") {
				item.loadTexture(value);
			}
		},
		getModalItem: function getModalItem(type, index) {
			return game.modals[type].getChildAt(index);
		},
		showModal: function showModal(type) {
			game.world.bringToTop(game.modals[type]);
			game.modals[type].visible = true;
			// you can add animation here
		},
		hideModal: function hideModal(type) {
			game.modals[type].visible = false;
			// you can add animation here
		},
		destroyModal: function destroyModal(type) {
			game.modals[type].destroy();
			delete game.modals[type];
		}
	};
};

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Client = function () {
    function Client(septikon) {
        _classCallCheck(this, Client);

        this.socket = io.connect();
        this.septikon = this.socket.septikon = septikon;

        this.socket.on('log', function (data) {
            console.log('LOG: ');
            console.log(data);
        });

        this.socket.on('update', function (data) {
            if (data.type == "personnel") {
                for (var i in data.details) {
                    this.septikon.addClone(data.details[i]);
                }
            }
            if (data.type == "resources") {
                if (data.action == "init") {
                    this.septikon.initResources();
                } else {
                    console.error(data.action + " not a legal action for Resource update.");
                }
            }
            console.log('UPDATE:');
            console.log(data);
        });

        this.socket.on('request', function (data) {
            console.log('REQUEST: ');
            switch (data.details.type) {
                case "askStart":
                    this.septikon.showModal('askStart');
                    break;

            }
        });

        this.socket.on('action', function (data) {
            if (typeof this.septikon[data.callback] === "function") {
                this.septikon[data.callback](data.details);
            } else {
                console.log("ERROR: no method found called septikon." + data.callback);
            }
        });
    }

    _createClass(Client, [{
        key: 'askNewPlayer',
        value: function askNewPlayer() {
            this.socket.emit('newPlayer', { uuid: localStorage.getItem('septUUID') });
        }
    }, {
        key: 'sendInput',
        value: function sendInput(payload) {
            console.log('sending input');
            this.socket.emit('input', payload);
        }
    }]);

    return Client;
}();

exports.default = Client;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html

var Clone = function (_Phaser$Sprite) {
  _inherits(Clone, _Phaser$Sprite);

  //initialization code in the constructor
  function Clone(game, x, y, frame, uuid) {
    _classCallCheck(this, Clone);

    //setup physics properties
    var _this = _possibleConstructorReturn(this, (Clone.__proto__ || Object.getPrototypeOf(Clone)).call(this, game, x, y, 'clone', frame));

    _this.anchor.setTo(0.5, 0.65);
    _this.game.physics.arcade.enableBody(_this);
    //this.body.collideWorldBounds = true;

    _this.uuid = uuid;
    //set size
    _this.width = 27;
    _this.scale.y = Math.abs(_this.scale.x);

    //set rotation (this should be based on the base this clone occupies)
    _this.angle = _this.game.boardGroup.angle * -1;

    _this.currentTileCoordinates = _this.game.septikon.pixelsToTile(_this.x, _this.y);
    _this.game.septikon.tileArray[_this.currentTileCoordinates.x][_this.currentTileCoordinates.y].tileOccupied = true;

    return _this;
  }

  _createClass(Clone, [{
    key: 'remove',
    value: function remove() {
      this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].tileOccupied = false;
      this.destroy();
    }
  }, {
    key: 'highlightOn',
    value: function highlightOn() {
      this.tint = 0xFF5500;
      this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].alpha = 1;
    }
  }, {
    key: 'highlightOff',
    value: function highlightOff() {
      this.tint = 0xffffff;
      this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].alpha = 0;
    }
  }, {
    key: 'getLegalMoves',
    value: function getLegalMoves() {
      this.currentTileCoordinates = this.game.septikon.pixelsToTile(this.x, this.y);
      var currentLegalMoves = this.game.septikon.getLegalMoves(this.game.global.lastDiceRoll, this.currentTileCoordinates);
      var legalTilesArray = [];

      for (var tile in currentLegalMoves) {
        legalTilesArray.push(this.game.septikon.tileArray[currentLegalMoves[tile].x][currentLegalMoves[tile].y]);
        //legalTilesArray[legalTilesArray.length-1].alpha = 0.5;
        //legalTilesArray[legalTilesArray.length-1].legalFor = this;
      }

      return legalTilesArray;
    }
  }, {
    key: 'move',
    value: function move(coordinates) {

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

      // Update the personnel coordinate property
      this.currentTileCoordinates = coordinates;
      this.game.septikon.tileArray[this.currentTileCoordinates.x][this.currentTileCoordinates.y].tileOccupied = true;

      // Wait for animation to complete, then process tile trigger
      var tween = this.game.add.tween(this).to({ x: points.x, y: points.y }, distance * 11, Phaser.Easing.Cubic.Out, true);
      tween.onComplete.add(this.game.septikon.triggerTile, this.game.septikon);

      // Clear this.currentLegalMoves
      delete this.legalTilesArray;
      delete this.currentLegalMoves;
    }
  }]);

  return Clone;
}(Phaser.Sprite);

exports.default = Clone;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
var Crosshairs = function (_Phaser$Sprite) {
  _inherits(Crosshairs, _Phaser$Sprite);

  //initialization code in the constructor
  function Crosshairs(game, x, y, frame) {
    _classCallCheck(this, Crosshairs);

    //set size
    var _this = _possibleConstructorReturn(this, (Crosshairs.__proto__ || Object.getPrototypeOf(Crosshairs)).call(this, game, x, y, 'crosshairs', frame));

    _this.width = 35;
    _this.scale.y = Math.abs(_this.scale.x);

    _this.anchor.setTo(0.5, 0.5);
    return _this;
  }

  _createClass(Crosshairs, [{
    key: 'update',
    value: function update() {
      this.x = this.game.input.mousePointer.x;
      this.y = this.game.input.mousePointer.y;
    }
  }]);

  return Crosshairs;
}(Phaser.Sprite);

exports.default = Crosshairs;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html
var Dice = function (_Phaser$Sprite) {
  _inherits(Dice, _Phaser$Sprite);

  //initialization code in the constructor
  function Dice(game, x, y, frame) {
    _classCallCheck(this, Dice);

    //setup physics properties
    var _this = _possibleConstructorReturn(this, (Dice.__proto__ || Object.getPrototypeOf(Dice)).call(this, game, x, y, 'dice', frame));

    _this.anchor.setTo(0.5, 0.5);
    _this.game.physics.arcade.enableBody(_this);
    _this.body.collideWorldBounds = true;

    //set click event
    _this.inputEnabled = true;
    _this.events.onInputDown.add(_this.clicked, _this);

    //set size
    _this.width = 50;
    _this.scale.y = Math.abs(_this.scale.x);

    _this.animations.add('idling', null, 5, true);
    _this.animations.play('idling');

    return _this;
  }

  _createClass(Dice, [{
    key: 'clicked',
    value: function clicked() {
      this.game.client.sendInput({ event: 'diceClicked' });
      return;
    }
  }]);

  return Dice;
}(Phaser.Sprite);

exports.default = Dice;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Master =

//initialization code in the constructor
function Master() {
  _classCallCheck(this, Master);
};

exports.default = Master;

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ordnance =

//initialization code in the constructor
function Ordnance() {
  _classCallCheck(this, Ordnance);
};

exports.default = Ordnance;

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Personnel = function (_Phaser$Sprite) {
  _inherits(Personnel, _Phaser$Sprite);

  //initialization code in the constructor
  function Personnel(game, x, y, frame) {
    _classCallCheck(this, Personnel);

    return _possibleConstructorReturn(this, (Personnel.__proto__ || Object.getPrototypeOf(Personnel)).call(this, game, x, y, 'clone', frame));
  }

  return Personnel;
}(Phaser.Sprite);

exports.default = Personnel;

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resources = function () {

  //initialization code in the constructor
  function Resources() {
    _classCallCheck(this, Resources);

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
    for (var type in this.resourceEnum) {
      this.resources[this.resourceEnum[type]] = 5;
    };
  }

  _createClass(Resources, [{
    key: "check",
    value: function check(type, count) {
      if (this.resources[this.resourceEnum[type]] > count) return true;

      return false;
    }
  }, {
    key: "getCount",
    value: function getCount(type) {
      return this.resources[type];
    }
  }, {
    key: "add",
    value: function add(type, count) {}
  }, {
    key: "remove",
    value: function remove(type, count) {
      this.resources[type] -= count;
    }
  }]);

  return Resources;
}();

exports.default = Resources;

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clone = require('../prefabs/clone');

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Septikon = function () {

    //initialization code in the constructor
    function Septikon(game) {
        _classCallCheck(this, Septikon);

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
            NORTH: 1,
            EAST: 2,
            SOUTH: 4,
            WEST: 8
        });
        this.turnState = 0;
    }

    _createClass(Septikon, [{
        key: 'showModal',
        value: function showModal(type) {
            this.game.modal.showModal(type);
        }
    }, {
        key: 'diceRolled',
        value: function diceRolled(details) {
            this.game.global.lastDiceRoll = details.value;
        }
    }, {
        key: 'addClone',
        value: function addClone(details) {
            var point = this.tileToPixels(details.x, details.y);
            var clone = new _clone2.default(this.game, point.x, point.y, null, details.uuid);
            if (details.playerID == this.player.id) {
                this.player.personnelArray.push(clone);
            } else {
                this.opponent.personnelArray.push(clone);
            }
            this.game.boardGroup.add(clone);
        }
    }, {
        key: 'removeAllPersonnel',
        value: function removeAllPersonnel() {
            for (var i = 0; i < this.game.boardGroup.children.length; i++) {
                if (this.game.boardGroup.children[i].constructor == _clone2.default) {
                    this.game.boardGroup.children[i].destroy();
                    i--;
                }
            }
        }
    }, {
        key: 'updatePlayer',
        value: function updatePlayer(details) {
            for (var i in details) {
                this.player[i] = details[i];
            }
        }
    }, {
        key: 'initResources',
        value: function initResources() {}
    }, {
        key: 'createTileArray',
        value: function createTileArray(columns, rows, point) {
            this.tileDetail = this.game.cache.getJSON('tileDetail');

            this.tileStartCoordinates = { x: 0, y: 0 };

            this.marginBottom = this.marginTop = this.game.boardGroup.height / 17.475;
            this.marginLeft = this.game.boardGroup.width / 24;
            this.marginRight = this.game.boardGroup.width / 26.3158;
            this.tileWidth = this.tileHeight = this.game.boardGroup.width / 39;
            this.padding = (this.game.boardGroup.width - (this.marginLeft + this.marginRight) - this.tileWidth * 31) / 30;

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

                    var x = this.tileStartCoordinates.x + this.tileWidth * column + (this.padding * column - 1);
                    var y = this.tileStartCoordinates.y + this.tileHeight * row + (this.padding * row - 1);
                    graphics.generateTexture();

                    var currentTile = this.game.add.sprite(x, y, graphics.generateTexture());
                    this.game.boardGroup.add(currentTile);
                    currentTile.alpha = 0; // 0.25;
                    currentTile.inputEnabled = true;
                    currentTile.events.onInputDown.add(this.tileClicked, this);

                    if (typeof this.tileArray[column] == 'undefined') this.tileArray[column] = [];

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
                        var x = coords[0];
                        var y = coords[1];

                        this.tileArray[x][y].tileDamaged = false;
                        this.tileArray[x][y].tileOccupied = false;
                        this.tileArray[x][y].tileX = x;
                        this.tileArray[x][y].tileY = y;
                        this.tileArray[x][y].tileType = obj[prop].type;

                        if (typeof this.tileArray[x][y] != 'undefined') this.tileArray[x][y].tileName = obj[prop].name;else console.log(x + ":" + y + " not found!");

                        if (typeof obj[prop].properties != 'undefined') {
                            this.tileArray[x][y]['tileProperties'] = obj[prop].properties;
                        }
                    }
                }
            }
        }
    }, {
        key: 'pixelsToTile',
        value: function pixelsToTile(x, y) {
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
    }, {
        key: 'tileToPixels',
        value: function tileToPixels(x, y) {
            var tileObj = this.tileArray[x][y];
            return { x: tileObj.x + tileObj.width / 2, y: tileObj.y + tileObj.height / 2 };
        }
    }, {
        key: 'tileClicked',
        value: function tileClicked(obj) {
            this.game.client.sendInput({ event: 'tileClicked', x: parseInt(obj.tileX), y: parseInt(obj.tileY) });
            return;
        }
    }, {
        key: 'triggerTile',
        value: function triggerTile(caller) {

            var tile = this.tileArray[caller.currentTileCoordinates.x][caller.currentTileCoordinates.y];
            caller.isGunner = false;
            var props = tile.tileProperties;

            switch (tile.tileType) {
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
                        console.log(tile.tileName);
                        if (this.localTeam.offerGunners() == false && (tile.tileName == "satellite" || tile.tileName == "thermite" || tile.tileName == "shield" || tile.tileName == "biodrone" || tile.tileName == "laser" || tile.tileName == "rocket")) {
                            this.finishTurn();
                        }
                        //console.log(this.localTeam.checkRec(this.localTeam.recEnum[props.resourceCostType.toUpperCase()], props.resourceCostCount));
                        if (this.localTeam.checkRec(this.localTeam.recEnum[props.resourceCostType.toUpperCase()], props.resourceCostCount) == true) {
                            this.localTeam.removeRec(this.localTeam.recEnum[props.resourceCostType.toUpperCase()], props.resourceCostCount);
                            //console.log("New count of " + props.resourceCostType + " is " + this.localTeam.getRecCount(this.localTeam.recEnum[props.resourceCostType.toUpperCase()]));
                            if (this.localTeam.offerGunners()) {
                                this.pendingAction = { props: props, caller: caller };
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
    }, {
        key: 'fire',
        value: function fire(weaponType, caller) {
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
    }, {
        key: 'repair',
        value: function repair(count) {
            console.log("repair " + count + " of the things!");
        }
    }, {
        key: 'espionage',
        value: function espionage() {
            console.log("Gimme yer clone!!");
        }
    }, {
        key: 'takeover',
        value: function takeover() {
            console.log("Gimme yer satellite!!");
        }
    }, {
        key: 'counter',
        value: function counter() {
            console.log("Gimme back my clone!!");
        }
    }, {
        key: 'killBiodrone',
        value: function killBiodrone() {
            console.log("Yer sould better belong to Jesus! Cuz yer ass belongs to me!");
        }
    }, {
        key: 'finishTurn',
        value: function finishTurn() {
            this.turnState = this.game.septikon.turnStateEnum.START;
            //console.log("Alas. Your turn is over. ");
        }
    }, {
        key: 'getLegalMoves',
        value: function getLegalMoves(moves, currentCoord, previousCoord) {
            moves--;
            var legalMoves = [];
            for (var direction in this.directionEnum) {
                // NEED TO CHECK FOR LOCKS
                var moveCheck = this.getCoordFromDirection(currentCoord, direction);
                if (moveCheck == false) continue;

                var tileToCheck = this.tileArray[moveCheck.x][moveCheck.y];

                // tile is legal IF direction is ok AND tile is not damaged AND ( there is no previous coordinate OR this is not the previous coordinate )
                if (this.checkWall(this.directionEnum[direction], currentCoord) === true && tileToCheck.tileDamaged === false && (typeof previousCoord === 'undefined' || typeof previousCoord !== 'undefined' && JSON.stringify(moveCheck) !== JSON.stringify(previousCoord))) {
                    // Check if tile is occupied
                    if (moves == 0) {
                        if (tileToCheck.tileOccupied === false) {
                            legalMoves.push(moveCheck);
                        }
                    } else {
                        var returnArray = this.getLegalMoves(moves, moveCheck, currentCoord);
                        for (var index in returnArray) {
                            if (JSON.stringify(returnArray[index]) !== JSON.stringify(currentCoord)) legalMoves.push(returnArray[index]);
                        }
                    }
                }
            }
            return legalMoves;
        }
    }, {
        key: 'getCoordFromDirection',
        value: function getCoordFromDirection(originCoord, direction) {

            var dir = { NORTH: { x: 0, y: -1 }, EAST: { x: 1, y: 0 }, SOUTH: { x: 0, y: 1 }, WEST: { x: -1, y: 0 } };

            var obj = { x: parseInt(originCoord.x) + parseInt(dir[direction].x), y: parseInt(originCoord.y) + parseInt(dir[direction].y) };
            if (obj.x < 0 || obj.y < 0) return false;else return { x: parseInt(originCoord.x) + parseInt(dir[direction].x), y: parseInt(originCoord.y) + parseInt(dir[direction].y) };
        }
    }, {
        key: 'showTiles',
        value: function showTiles(tilesArray) {
            for (var i in tilesArray) {
                this.shownTiles.push(tilesArray[i]);
                tilesArray[i].alpha = 0.5;
            }
        }
    }, {
        key: 'hideTiles',
        value: function hideTiles(tileArray) {
            if (!tileArray) {
                for (var i in this.shownTiles) {
                    this.shownTiles[i].alpha = 0;
                }
                this.shownTiles = [];
            }
        }
    }, {
        key: 'shootTile',
        value: function shootTile(cloneCoordinates) {

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

            this.test = this.game.add.sprite(currentTile.x, currentTile.y + currentTile.height / 2, 'boom');
            this.test.angle = 270;
            this.test.anchor.set(0.5, 0.7);
            this.test.animations.add('boom');
            this.test.animations.play('boom', 20, false, true);
        }
    }, {
        key: 'checkWall',
        value: function checkWall(direction, currentCoordinate) {
            this.wallGrid = this.game.cache.getJSON('wallGrid');
            switch (direction) {
                case this.directionEnum.NORTH:
                    // UP
                    if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y] & this.directionEnum.NORTH) == 0) {
                        return true;
                    }
                    return false;
                case this.directionEnum.SOUTH:
                    // DOWN
                    if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y] & this.directionEnum.SOUTH) == 0) {
                        return true;
                    }
                    return false;
                case this.directionEnum.EAST:
                    // RIGHT
                    if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y] & this.directionEnum.EAST) == 0) {
                        return true;
                    }
                    return false;
                case this.directionEnum.WEST:
                    // LEFT
                    if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y] & this.directionEnum.WEST) == 0) {
                        return true;
                    }
                    return false;
                default:
                    return false;
            }
        }
    }, {
        key: 'setup',
        value: function setup() {
            //Should ask for player name and assign a color. 
            //Give waiting indicator
            //Offer some way to pick a game? IDK..
        }
    }, {
        key: 'startGame',
        value: function startGame() {
            this.game.state.start('game');
        }
    }]);

    return Septikon;
}();

exports.default = Septikon;

},{"../prefabs/clone":8}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _resources = require('../prefabs/resources');

var _resources2 = _interopRequireDefault(_resources);

var _personnel = require('../prefabs/personnel');

var _personnel2 = _interopRequireDefault(_personnel);

var _ordnance = require('../prefabs/ordnance');

var _ordnance2 = _interopRequireDefault(_ordnance);

var _clone = require('../prefabs/clone');

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// This will be incorporated in personnel

var Team = function () {

    //initialization code in the constructor
    function Team(game) {
        _classCallCheck(this, Team);

        this.rec = new _resources2.default();
        this.recEnum = this.rec.resourceEnum;
        this.game = game;

        this.personnel = [];
        this.selectedGunners = [];
    }

    _createClass(Team, [{
        key: 'refresh',
        value: function refresh() {
            for (var i in this.personnel) {
                this.game.septikon.tileArray[this.personnel[i].currentTileCoordinates.x][this.personnel[i].currentTileCoordinates.y].tileOccupied = true;
            }
        }

        //Resource Interface

    }, {
        key: 'getRecCount',
        value: function getRecCount(type) {
            return this.rec.getCount(type);
        }
    }, {
        key: 'checkRec',
        value: function checkRec(type, count) {
            if (this.getRecCount(type) >= count) return true;

            return false;
        }
    }, {
        key: 'exchangeRec',
        value: function exchangeRec(costType, costCount, yieldType, yieldCount) {}
    }, {
        key: 'addRec',
        value: function addRec(type, count) {
            return this.rec.add(type, count);
        }
    }, {
        key: 'removeRec',
        value: function removeRec(type, count) {
            return this.rec.remove(type, count);
        }
    }, {
        key: 'addClone',
        value: function addClone(x, y, props) {
            var point = this.game.septikon.tileToPixels(x, y);
            var clone = new _clone2.default(this.game, point.x, point.y);
            clone.currentTileCoordinates.x = x;
            clone.currentTileCoordinates.y = y;

            for (var i in props) {
                clone[i] = props[i];
            }
            this.personnel.push(clone);
            this.game.stage.addChild(clone);
        }
    }, {
        key: 'getClone',
        value: function getClone(coord) {
            for (var i in this.personnel) {
                if (this.personnel[i].currentTileCoordinates.x == coord.x && this.personnel[i].currentTileCoordinates.y == coord.y) {
                    return this.personnel[i];
                }
            }
        }
    }, {
        key: 'killClone',
        value: function killClone(coord) {
            var clone = this.getClone(coord);
            this.game.stage.removeChild(clone);

            var index = this.personnel.indexOf(clone);
            this.personnel.splice(index, 1);

            clone.remove();
        }
    }, {
        key: 'offerLegalClones',
        value: function offerLegalClones() {
            // Offer clones that have legal moves
            for (var i in this.personnel) {
                var moves = this.personnel[i].getLegalMoves();

                if (moves != false) {
                    this.personnel[i].highlightOn();
                }
            }
        }
    }, {
        key: 'offerGunners',
        value: function offerGunners() {
            // Offer gunner 
            var gunnerFound = false;
            for (var i in this.personnel) {
                if (this.personnel[i].isGunner) {
                    gunnerFound = true;
                    //this.personnel[i].highlightOn();
                }
            }
            return gunnerFound;
        }
    }, {
        key: 'selectGunner',
        value: function selectGunner(coords) {
            var clone = this.getClone(coords);
            if (!clone) return false;
            if (!clone.isGunner) return false;

            var existingGunner = this.selectedGunners.indexOf(clone);
            if (existingGunner >= 0) {
                clone.highlightOff();
                this.selectedGunners.splice(existingGunner, 1);
            } else {
                clone.highlightOn();
                this.selectedGunners.push(clone);
            }
        }
    }, {
        key: 'clearGunners',
        value: function clearGunners() {
            for (var i in this.selectedGunners) {
                this.selectedGunners[i].highlightOff();
            }
            this.selectedGunners = [];
        }
    }, {
        key: 'selectCloneForMove',
        value: function selectCloneForMove(coords) {

            var clone = this.getClone(coords);
            if (!clone) return false;

            for (var i in this.personnel) {
                this.personnel[i].highlightOff();
            }
            this.legalTiles = clone.getLegalMoves();
            this.selectedClone = clone;
            this.game.septikon.showTiles(this.legalTiles);
            return true;
        }
    }, {
        key: 'moveSelectedClone',
        value: function moveSelectedClone(coords) {
            for (var i in this.legalTiles) {
                if (this.legalTiles[i].tileX == coords.x && this.legalTiles[i].tileY == coords.y) {
                    this.selectedClone.move(coords);
                    delete this.selectedClone;
                    delete this.legalTiles;
                    return true;
                }
            }
            return false;
        }
    }]);

    return Team;
}();

exports.default = Team;

},{"../prefabs/clone":8,"../prefabs/ordnance":12,"../prefabs/personnel":13,"../prefabs/resources":14}],17:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ordnance = function Ordnance() {
  _classCallCheck(this, Ordnance);
};

module.exports.Ordnance = Ordnance;

},{}],18:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Personnel = function () {
    function Personnel(type, x, y, uuid) {
        _classCallCheck(this, Personnel);

        this.typeEnum = Object.freeze({
            clone: 0,
            biodrone: 1
        });

        this.x = x;
        this.y = y;
        this.uuid = uuid;

        switch (type) {
            case 'biodrone':
                break;
            case 'clone':
            default:
                this.type = this.typeEnum[type];
                break;
        }
    }

    _createClass(Personnel, [{
        key: 'move',
        value: function move(x, y) {
            this.x = x;
            this.y = y;
        }
    }]);

    return Personnel;
}();

module.exports.Personnel = Personnel;

},{}],19:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Personnel = require('./personnel').Personnel;
var Resource = require('./resource').Resource;
var Ordnance = require('./ordnance').Ordnance;

var Player = function () {
    function Player(socketID, id, uuid) {
        _classCallCheck(this, Player);

        this.socketID = socketID;
        this.id = id; //player 1 or player 2; this will determine the side of the board at client start.
        this.uuid = uuid;
        this.personnelArray = [];
        this.resourceArray = [];
        this.ordnanceArray = [];
        this.readyToStart = false;
        this.startingCloneCount = 5;
    }

    _createClass(Player, [{
        key: 'addPersonnel',
        value: function addPersonnel(type, x, y, uuid) {
            if (type == "clone" && this.getPersonnel(type).length < this.startingCloneCount) {
                this.personnelArray.push(new Personnel('clone', x, y, uuid));
                return true;
            }
            return false;
        }
    }, {
        key: 'removePersonnel',
        value: function removePersonnel(personnel, purgeAll) {
            if (purgeAll === true) {
                this.personnelArray = [];
                return;
            }
        }
    }, {
        key: 'getPersonnel',
        value: function getPersonnel(type) {
            var returnArray = [];
            for (var i in this.personnelArray) {
                if (this.personnelArray[i].type == 0) returnArray.push(this.personnelArray[i]);
            }
            return returnArray;
        }
    }]);

    return Player;
}();

module.exports.Player = Player;

},{"./ordnance":17,"./personnel":18,"./resource":20}],20:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resources = function Resources() {
  _classCallCheck(this, Resources);
};

module.exports.Resources = Resources;

},{}],21:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = require('./player').Player;

var Septikon = function () {
    function Septikon(io) {
        _classCallCheck(this, Septikon);

        this.io = io;
        this.lastPlayerID = 0;
        this.playersArray = [];
        this.gameState = 0;
        this.turnState = 0;
        this.uuid = require('uuid/v4')();

        this.currentPlayerID = this.lastPlayerID;

        this.currentDiceValue = 0;

        this.gameStateEnum = Object.freeze({
            SETUP: 0,
            GAME: 1,
            PAUSE: 2,
            GAMEOVER: 3
        });

        this.turnStateEnum = Object.freeze({
            ROLL: 0,
            MOVE: 1,
            ACTION: 2,
            END: 3
        });

        this.tileColumns = 31;
        this.tileRows = 21;

        this.tileArray = [];
        this.createTileArray();
    }

    _createClass(Septikon, [{
        key: 'addNewPlayer',
        value: function addNewPlayer(socketID, uuid) {
            this.lastPlayerID++;
            this.currentPlayerID = this.lastPlayerID;
            var player = new Player(socketID, this.lastPlayerID, uuid);
            this.playersArray.push(player);
            this.emit('action', { callback: 'updatePlayer', details: { id: this.lastPlayerID } }, socketID);
            return player;
        }
    }, {
        key: 'setPlayerState',
        value: function setPlayerState(state) {
            switch (state.value) {
                case 'reset':
                    var player = this.getPlayerBySocketID(state.socketID);
                    player.removePersonnel(null, true);
                    this.emit('action', { callback: "removeAllPersonnel", details: {} }, player.socketID);
                    break;
                case 'start':
                    var player = this.getPlayerBySocketID(state.socketID);
                    player.readyToStart = true;
                    var opponent = this.getPlayerOpponent(player);
                    if (!opponent || !opponent.readyToStart) {
                        console.log("player ready to start, but waiting on opponent! \nTODO: \n - Send message to both users' HUDs.");
                        return;
                    } else {
                        console.log("players have both confirmed! Rattle dem bones...");
                        var oppClones = opponent.getPersonnel('clone');
                        var currentPlayerClones = player.getPersonnel('clone');

                        // Notify current player of opponent positions
                        var playerPayload = [];
                        for (var i in oppClones) {
                            playerPayload.push({
                                x: oppClones[i].x,
                                y: oppClones[i].y,
                                uuid: oppClones[i].uuid
                            });
                        }
                        this.emit('update', { type: "personnel", details: playerPayload }, player.socketID);

                        // Notify opponent of current player's positions
                        var oppPayload = [];
                        for (var i in currentPlayerClones) {
                            oppPayload.push({
                                x: currentPlayerClones[i].x,
                                y: currentPlayerClones[i].y,
                                uuid: currentPlayerClones[i].uuid
                            });
                        }
                        this.emit('update', { type: "personnel", details: oppPayload }, opponent.socketID);
                        this.broadcast('update', { type: "resources", action: 'init' });
                    }
                    break;
                default:
                    console.log(state.value);
                    console.error(state.value + " is not a valid player state!");
            }
        }
    }, {
        key: 'getPlayerOpponent',
        value: function getPlayerOpponent(player) {
            if (this.playersArray.length == 1) {
                return false;
            }
            if (this.playersArray[0] === player) {
                return this.playersArray[1];
            } else {
                return this.playersArray[0];
            }
        }
    }, {
        key: 'getPlayerByUUID',
        value: function getPlayerByUUID(uuid) {
            for (var i in this.playersArray) {
                if (this.playersArray[i].uuid == uuid) return this.playersArray[i];
            }
            return false;
        }
    }, {
        key: 'getPlayerBySocketID',
        value: function getPlayerBySocketID(id) {
            for (var i in this.playersArray) {
                if (this.playersArray[i].socketID == id) {
                    return this.playersArray[i];
                }
            }
            return false;
        }
    }, {
        key: 'existsPlayerUUID',
        value: function existsPlayerUUID(uuid) {
            for (var i in this.playersArray) {
                if (this.playersArray[i].uuid == uuid) return true;
            }
            return false;
        }
    }, {
        key: 'clicked',
        value: function clicked(data) {

            //check game state

            switch (this.gameState) {

                case this.gameStateEnum.SETUP:

                    //check if tile is type: surface, battle, armory, lock, or production
                    //check if tile belongs to player's team
                    //add clone to player's personnel
                    var player = this.getPlayerBySocketID(data.socketID);
                    this.placeClone(player, data.x, data.y);

                    break;

                case this.gameStateEnum.GAME:

                    //check turnState

                    break;

                default:
                    break;
            }
        }
    }, {
        key: 'placeClone',
        value: function placeClone(player, x, y) {

            if (typeof player != 'undefined') {
                var selectedTile = this.getTile(x, y);
                if (player.id != selectedTile.owner) {
                    return;
                }

                if (selectedTile.type == "lock" || selectedTile.type == "battle" || selectedTile.type == "armory" || selectedTile.type == "production" || selectedTile.type == "surface") {
                    var uuid = require('uuid/v4')();
                    if (player.addPersonnel('clone', x, y, uuid)) {
                        this.emit('action', { callback: "addClone", details: { x: x, y: y, playerID: player.id, uuid: uuid } }, player.socketID);
                        if (player.getPersonnel('clone').length == player.startingCloneCount) {
                            console.log("sending modal request");
                            this.emit('request', { callback: "modal", details: { type: "askStart" } }, player.socketID);
                        }
                    }
                }
            } else {
                console.log('ERROR: player not found!');
            }
        }
    }, {
        key: 'createTileArray',
        value: function createTileArray() {
            var tileJSON = require('../../assets/tileDetail.json');

            for (var c = 0; c < this.tileColumns; c++) {
                this.tileArray[c] = [];
                for (var r = 0; r < this.tileRows; r++) {
                    this.tileArray[c][r] = {};
                }
            }

            for (var key in tileJSON) {
                if (!tileJSON.hasOwnProperty(key)) continue;

                var obj = tileJSON[key];
                for (var prop in obj) {
                    // skip loop if the property is from prototype
                    if (!obj.hasOwnProperty(prop)) continue;

                    var locationCount = obj[prop].locations.length;
                    for (var i = 0; i < locationCount; i++) {

                        var coords = obj[prop].locations[i].split(",");
                        var x = coords[0];
                        var y = coords[1];

                        this.tileArray[x][y].damaged = false;
                        this.tileArray[x][y].occupied = false;
                        this.tileArray[x][y].type = obj[prop].type;

                        if (x < 9) {
                            this.tileArray[x][y].owner = 1;
                        } else if (x > 21) {
                            this.tileArray[x][y].owner = 2;
                        }

                        if (typeof this.tileArray[x][y] != 'undefined') this.tileArray[x][y].name = obj[prop].name;else console.log(x + ":" + y + " not found!");

                        if (typeof obj[prop].properties != 'undefined') {
                            this.tileArray[x][y]['tileProperties'] = obj[prop].properties;
                        }
                    }
                }
            }
        }
    }, {
        key: 'getTile',
        value: function getTile(x, y) {
            return this.tileArray[x][y];
        }
    }, {
        key: 'rollDice',
        value: function rollDice(data) {
            if (this.turnState == this.turnStateEnum.ROLL && this.gameState == this.gameStateEnum.GAME) {
                this.currentDiceValue = Math.floor(Math.random() * 6) + 1;
                this.emit('action', { callback: "diceRolled", details: { value: this.currentDiceValue } }, data.socketID);
                this.emit('log', { msg: "Player rolled " + this.currentDiceValue });
                this.turnState++;
            }
        }
    }, {
        key: 'get',
        value: function get(data) {
            if (typeof data.property == 'undefined') {
                this.emit('response', { details: this[data.property] }, data.socketID);
            }
        }
    }, {
        key: 'emit',
        value: function emit(msg, data, socketID) {
            if (msg == "response" || msg == "request" || msg == "update") {
                if (typeof socketID == "undefined") {
                    console.error("No SocketID found!");
                    return;
                }
                this.io.sockets.connected[socketID].emit(msg, data);
            }

            if (msg == "action") {
                if (typeof socketID == "undefined") {
                    console.error("No SocketID found!");
                    return;
                }
                this.io.sockets.connected[socketID].emit(msg, data);
            }

            if (msg == "log") {
                this.io.sockets.emit(msg, data);
            }
        }
    }, {
        key: 'broadcast',
        value: function broadcast(msg, data) {
            for (var i in this.playersArray) {
                this.emit(msg, data, this.playersArray[i].socketID);
            }
        }
    }]);

    return Septikon;
}();

module.exports.Septikon = Septikon;

},{"../../assets/tileDetail.json":1,"./player":19,"uuid/v4":4}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _septikon = require('../prefabs/septikon');

var _septikon2 = _interopRequireDefault(_septikon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boot = function (_Phaser$State) {
  _inherits(Boot, _Phaser$State);

  function Boot() {
    _classCallCheck(this, Boot);

    return _possibleConstructorReturn(this, (Boot.__proto__ || Object.getPrototypeOf(Boot)).call(this));
  }

  _createClass(Boot, [{
    key: 'preload',
    value: function preload() {
      this.load.image('preloader', 'assets/preloader.gif');
    }
  }, {
    key: 'create',
    value: function create() {
      this.game.input.maxPointers = 1;
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
      //setup device scaling
      if (!this.game.device.desktop) {
        this.game.scale.parentIsWindow = true;
        this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        this.game.scale.minWidth = 480;
        this.game.scale.minHeight = 260;
        this.game.scale.forceOrientation(true);
      }

      this.initGlobalVariables();

      this.game.state.start('preloader');
    }
  }, {
    key: 'initGlobalVariables',
    value: function initGlobalVariables() {
      this.game.global = {
        score: 0,
        lastDiceRoll: 0
      };
    }
  }]);

  return Boot;
}(Phaser.State);

exports.default = Boot;

},{"../prefabs/septikon":15}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_Phaser$State) {
    _inherits(Game, _Phaser$State);

    function Game() {
        _classCallCheck(this, Game);

        return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this));
    }

    _createClass(Game, [{
        key: 'create',
        value: function create() {

            //this.game.input.onDown.add(this.toggleFullscreen, this);
            this.game.stage.disableVisibilityChange = true;

            this.game.boardGroup = this.game.add.group();
            this.game.modal = new gameModal(this.game);
            this.createModals();

            this.background = this.game.add.sprite(0, 0, 'background');
            this.background.anchor.setTo(0.5, 0.5);
            this.game.boardGroup.centerX = this.game.world.centerX;
            this.game.boardGroup.centerY = this.game.world.centerY;

            this.game.boardGroup.add(this.background);

            this.game.septikon.createTileArray(31, 21, { x: 0 - this.background.width / 2, y: 0 - this.background.height / 2 });

            this.dice = this.game.add.sprite(100, 100, 'dice');
            this.dice.scale.setTo(0.25);
            this.dice.frame = Math.floor(Math.random() * 6) + 1 - 1;

            this.refreshBoard();
        }
    }, {
        key: 'createModals',
        value: function createModals() {
            this.game.modal.createModal({
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
                    callback: function callback() {
                        this.game.modal.hideModal("askStart");
                        this.game.client.sendInput({ event: 'setPlayerState', value: 'start' });
                    }
                }, {
                    type: "image",
                    content: "text_no",
                    offsetY: 100,
                    offsetX: 80,
                    contentScale: 0.6,
                    callback: function callback() {
                        this.game.modal.hideModal("askStart");
                        this.game.client.sendInput({ event: 'setPlayerState', value: 'reset' });
                    }
                }]
            });
        }
    }, {
        key: 'refreshBoard',
        value: function refreshBoard() {

            var scale = window.innerWidth / this.background.height;
            if (scale > 1.9) {
                scale = 1.9;
            }

            this.game.boardGroup.scale.setTo(scale);
            this.game.boardGroup.x = this.game.world.centerX;

            if (this.game.septikon.player.id == 1) {
                this.game.boardGroup.angle = -90;
                //this.game.boardGroup.y = this.game.world.centerY; // Centered on Septikon Logo
                //this.game.boardGroup.y = this.game.world.centerY + ((this.background.width*scale)-window.innerHeight)/2; // Centered on opponent's side
                this.game.boardGroup.y = this.game.world.centerY - (this.background.width * scale - window.innerHeight) / 2; // Centered on this player's side
            } else {
                this.game.boardGroup.angle = 90;
                //this.game.boardGroup.y = this.game.world.centerY; // Centered on Septikon Logo
                //this.game.boardGroup.y = this.game.world.centerY + ((this.background.width*scale)-window.innerHeight)/2; // Centered on opponent's side
                this.game.boardGroup.y = this.game.world.centerY - (this.background.width * scale - window.innerHeight) / 2; // Centered on this player's side
            }
        }
    }, {
        key: 'update',
        value: function update() {
            //   this.dice.frame = Math.floor(Math.random() * 6) + 1;
            // this.game.debug.text('Mouse', 700, 32);

            // this.game.debug.text('Mouse X: ' + this.game.input.x, 700, 64);
            // this.game.debug.text('Mouse Y: ' + this.game.input.y, 700, 92);
        }
    }, {
        key: 'render',
        value: function render() {
            this.refreshBoard();
            /*
            var x = 32;
            var y = 0;
            var yi = 32;
            this.game.debug.text('Viewport', x, y += yi);
            this.game.debug.text('Viewport Width: ' + this.game.scale.viewportWidth, x, y += yi);
            this.game.debug.text('window.innerWidth: ' + window.innerWidth, x, y += yi);
            this.game.debug.text('window.outerWidth: ' + window.outerWidth, x, y += yi);
            this.game.debug.text('Viewport Height: ' + this.game.scale.viewportHeight, x, y += yi);
            this.game.debug.text('window.innerHeight: ' + window.innerHeight, x, y += yi);
            this.game.debug.text('window.outerHeight: ' + window.outerHeight, x, y += yi);
            //  Device: How to get device size.
            //  Use window.screen.width for device width and window.screen.height for device height. 
            //  .availWidth and .availHeight give you the device size minus UI taskbars. (Try on an iPhone.) 
            //  Device size is static and does not change when the page is resized or rotated.
            x = 350;
            y = 0;
            this.game.debug.text('Board Group', x, y += yi);
            this.game.debug.text('this.game.boardGroup.x: ' + this.game.boardGroup.x, x, y += yi);
            this.game.debug.text('this.game.boardGroup.y: ' + this.game.boardGroup.y, x, y += yi);
            this.game.debug.text('this.game.boardGroup.width: ' + this.game.boardGroup.width, x, y += yi);
            this.game.debug.text('this.game.boardGroup.height: ' + this.game.boardGroup.height, x, y += yi);
            x = 32;
            y = 300;
            this.game.debug.text('Background Detail', x, y += yi);
            this.game.debug.text('this.background.x: ' + this.background.x, x, y += yi);
            this.game.debug.text('this.background.y: ' + this.background.y, x, y += yi);
            this.game.debug.text('this.background.width: ' + this.background.width, x, y += yi);
            this.game.debug.text('this.background.height: ' + this.background.height, x, y += yi);
            this.game.debug.text('this.background.scale: ' + this.game.boardGroup.scale.x, x, y += yi);
            */
        }
    }, {
        key: 'toggleFullscreen',
        value: function toggleFullscreen() {
            if (this.game.scale.isFullScreen) {
                this.game.scale.stopFullScreen();
            } else {
                this.game.scale.startFullScreen(false);
            }
        }
    }]);

    return Game;
}(Phaser.State);

exports.default = Game;

},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Phaser$State) {
  _inherits(Menu, _Phaser$State);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this));
  }

  _createClass(Menu, [{
    key: 'create',
    value: function create() {
      //add background image
      this.background = this.game.add.sprite(0, 0, 'background');
      this.bgRatio = this.background.texture.width / this.background.texture.height;
      this.worldRatio = this.game.world.width / this.game.world.height;
      if ((this.worldRatio - this.bgRatio) / 2 * this.game.world.width > 0) {
        this.background.width = this.game.world.height / this.background.texture.height * this.background.texture.width;
        this.background.height = this.game.world.height;
        this.background.x = (this.game.world.width - this.background.width) / 2;
      } else {
        this.background.width = this.game.world.width;
        this.background.height = this.game.world.width / this.background.texture.width * this.background.texture.height;
        this.background.y = (this.game.world.height - this.background.height) / 2;
      }

      //add intro text
      this.gameoverText = this.add.text(this.game.world.centerX, this.game.world.centerY, "Score = " + this.game.global.score, {
        font: '42px Arial', fill: '#ffffff', align: 'center'
      });
      this.gameoverText.anchor.set(0.5);

      this.input.onDown.add(this.onInputDown, this);

      //prevent accidental click-thru by not allowing state transition for a short time
      this.canContinueToNextState = false;
      this.game.time.events.add(Phaser.Timer.SECOND * 0.5, function () {
        this.canContinueToNextState = true;
      }, this);

      this.saveVarsToLocalStorage();
      this.resetGlobalVariables();
    }
  }, {
    key: 'saveVarsToLocalStorage',
    value: function saveVarsToLocalStorage() {
      var max = localStorage.maxScore || 0; //default value of 0 is it does not exist
      if (this.game.global.score > max) {
        localStorage.maxScore = this.game.global.score;
      }
    }
  }, {
    key: 'resetGlobalVariables',
    value: function resetGlobalVariables() {
      this.game.global.score = 0;
    }
  }, {
    key: 'update',
    value: function update() {}
  }, {
    key: 'onInputDown',
    value: function onInputDown() {
      if (this.canContinueToNextState) {
        this.game.state.start('menu');
      }
    }
  }]);

  return Menu;
}(Phaser.State);

exports.default = Menu;

},{}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preloader = function (_Phaser$State) {
  _inherits(Preloader, _Phaser$State);

  function Preloader() {
    _classCallCheck(this, Preloader);

    var _this = _possibleConstructorReturn(this, (Preloader.__proto__ || Object.getPrototypeOf(Preloader)).call(this));

    _this.asset = null;
    _this.ready = false;
    return _this;
  }

  _createClass(Preloader, [{
    key: 'preload',
    value: function preload() {
      //setup loading bar
      this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
      this.load.setPreloadSprite(this.asset);

      //Setup loading and its events
      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.loadResources();
    }
  }, {
    key: 'loadResources',
    value: function loadResources() {

      //MENU RESOURCES
      //menu background
      //text images
      //music files ?

      //load game data
      this.game.load.json('tileDetail', 'assets/tileDetail.json');
      this.game.load.json('wallGrid', 'assets/wallGrid.json');

      //GAME RESOURCES
      //game board background
      this.game.load.image('background', 'assets/medium_board.png');
      this.game.load.spritesheet('dice', 'assets/dice.png', 128, 194, 10);

      // modal images
      this.game.load.image('text_yes', 'assets/text_yes.png');
      this.game.load.image('text_no', 'assets/text_no.png');
      this.game.load.image('text_go', 'assets/text_go.png');

      //player tokens spritesheets
      this.game.load.spritesheet('clone', 'assets/clone.png', 110, 168);
      this.game.load.atlas('boom', 'assets/boom.png', 'assets/boom.json', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);

      //audio files 

      //this.game.load.image('crosshairs', 'assets/crosshair_red_small.png');
      this.game.load.image('text_go', 'assets/text_go.png');
      this.game.load.image('text_ready', 'assets/text_ready.png');

      //this.game.load.spritesheet('target', 'assets/target.png',128.66,128);

      //this.game.load.audio('gunshot','assets/gunshot.wav');
      //this.game.load.audio('ding','assets/ding.wav');
    }
  }, {
    key: 'onLoadComplete',
    value: function onLoadComplete() {
      this.game.state.start('setup');
      //this.game.state.start('game');
    }
  }]);

  return Preloader;
}(Phaser.State);

exports.default = Preloader;

},{}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Setup = function (_Phaser$State) {
    _inherits(Setup, _Phaser$State);

    function Setup() {
        _classCallCheck(this, Setup);

        return _possibleConstructorReturn(this, (Setup.__proto__ || Object.getPrototypeOf(Setup)).call(this));
    }

    _createClass(Setup, [{
        key: "create",
        value: function create() {
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
    }, {
        key: "keyPress",
        value: function keyPress(char) {

            if ((typeof char === "undefined" ? "undefined" : _typeof(char)) === "object") {
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
    }, {
        key: "createModals",
        value: function createModals() {

            // Start Game
            this.game.modal.createModal({
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
                }]
            });
        }
    }]);

    return Setup;
}(Phaser.State);

exports.default = Setup;

},{}]},{},[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvdGlsZURldGFpbC5qc29uIiwibm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvdjQuanMiLCJzcmNcXG1haW4uanMiLCJzcmNcXG1vZGFsLmpzIiwic3JjXFxwcmVmYWJzXFxjbGllbnQuanMiLCJzcmNcXHByZWZhYnNcXGNsb25lLmpzIiwic3JjXFxwcmVmYWJzXFxjcm9zc2hhaXJzLmpzIiwic3JjXFxwcmVmYWJzXFxkaWNlLmpzIiwic3JjXFxwcmVmYWJzXFxtYXN0ZXIuanMiLCJzcmNcXHByZWZhYnNcXG9yZG5hbmNlLmpzIiwic3JjXFxwcmVmYWJzXFxwZXJzb25uZWwuanMiLCJzcmNcXHByZWZhYnNcXHJlc291cmNlcy5qcyIsInNyY1xccHJlZmFic1xcc2VwdGlrb24uanMiLCJzcmNcXHByZWZhYnNcXHRlYW0uanMiLCJzcmNcXHNlcnZlclxcb3JkbmFuY2UuanMiLCJzcmNcXHNlcnZlclxccGVyc29ubmVsLmpzIiwic3JjXFxzZXJ2ZXJcXHBsYXllci5qcyIsInNyY1xcc2VydmVyXFxyZXNvdXJjZS5qcyIsInNyY1xcc2VydmVyXFxzZXB0aWtvbi5qcyIsInNyY1xcc3RhdGVzXFxib290LmpzIiwic3JjXFxzdGF0ZXNcXGdhbWUuanMiLCJzcmNcXHN0YXRlc1xcZ2FtZW92ZXIuanMiLCJzcmNcXHN0YXRlc1xccHJlbG9hZGVyLmpzIiwic3JjXFxzdGF0ZXNcXHNldHVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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b3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzPXtcclxuXHRcInRpbGVQcm9wZXJ0eUFycmF5XCI6IHtcclxuXHRcdFwib3RoZXJTcGFjZVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDBcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwic3BhY2VcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwic3BhY2VcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiOSwwXCIsIFwiOSwxXCIsIFwiOSwyXCIsIFwiOSwzXCIsIFwiOSw0XCIsIFwiOSw1XCIsIFwiOSw2XCIsIFwiOSw3XCIsIFwiOSw4XCIsIFwiOSw5XCIsIFwiOSwxMFwiLCBcIjksMTFcIiwgXCI5LDEyXCIsIFwiOSwxM1wiLCBcIjksMTRcIiwgXCI5LDE1XCIsIFwiOSwxNlwiLCBcIjksMTdcIiwgXCI5LDE4XCIsIFwiOSwxOVwiLCBcIjksMjBcIiwgXCIxMCwwXCIsIFwiMTAsMVwiLCBcIjEwLDJcIiwgXCIxMCwzXCIsIFwiMTAsNFwiLCBcIjEwLDVcIiwgXCIxMCw2XCIsIFwiMTAsN1wiLCBcIjEwLDhcIiwgXCIxMCw5XCIsIFwiMTAsMTBcIiwgXCIxMCwxMVwiLCBcIjEwLDEyXCIsIFwiMTAsMTNcIiwgXCIxMCwxNFwiLCBcIjEwLDE1XCIsIFwiMTAsMTZcIiwgXCIxMCwxN1wiLCBcIjEwLDE4XCIsIFwiMTAsMTlcIiwgXCIxMCwyMFwiLCBcIjExLDBcIiwgXCIxMSwxXCIsIFwiMTEsMlwiLCBcIjExLDNcIiwgXCIxMSw0XCIsIFwiMTEsNVwiLCBcIjExLDZcIiwgXCIxMSw3XCIsIFwiMTEsOFwiLCBcIjExLDlcIiwgXCIxMSwxMFwiLCBcIjExLDExXCIsIFwiMTEsMTJcIiwgXCIxMSwxM1wiLCBcIjExLDE0XCIsIFwiMTEsMTVcIiwgXCIxMSwxNlwiLCBcIjExLDE3XCIsIFwiMTEsMThcIiwgXCIxMSwxOVwiLCBcIjExLDIwXCIsIFwiMTIsMFwiLCBcIjEyLDFcIiwgXCIxMiwyXCIsIFwiMTIsM1wiLCBcIjEyLDRcIiwgXCIxMiw1XCIsIFwiMTIsNlwiLCBcIjEyLDdcIiwgXCIxMiw4XCIsIFwiMTIsOVwiLCBcIjEyLDEwXCIsIFwiMTIsMTFcIiwgXCIxMiwxMlwiLCBcIjEyLDEzXCIsIFwiMTIsMTRcIiwgXCIxMiwxNVwiLCBcIjEyLDE2XCIsIFwiMTIsMTdcIiwgXCIxMiwxOFwiLCBcIjEyLDE5XCIsIFwiMTIsMjBcIiwgXCIxMywwXCIsIFwiMTMsMVwiLCBcIjEzLDJcIiwgXCIxMywzXCIsIFwiMTMsNFwiLCBcIjEzLDVcIiwgXCIxMyw2XCIsIFwiMTMsN1wiLCBcIjEzLDhcIiwgXCIxMyw5XCIsIFwiMTMsMTBcIiwgXCIxMywxMVwiLCBcIjEzLDEyXCIsIFwiMTMsMTNcIiwgXCIxMywxNFwiLCBcIjEzLDE1XCIsIFwiMTMsMTZcIiwgXCIxMywxN1wiLCBcIjEzLDE4XCIsIFwiMTMsMTlcIiwgXCIxMywyMFwiLCBcIjE0LDBcIiwgXCIxNCwxXCIsIFwiMTQsMlwiLCBcIjE0LDNcIiwgXCIxNCw0XCIsIFwiMTQsNVwiLCBcIjE0LDZcIiwgXCIxNCw3XCIsIFwiMTQsOFwiLCBcIjE0LDlcIiwgXCIxNCwxMFwiLCBcIjE0LDExXCIsIFwiMTQsMTJcIiwgXCIxNCwxM1wiLCBcIjE0LDE0XCIsIFwiMTQsMTVcIiwgXCIxNCwxNlwiLCBcIjE0LDE3XCIsIFwiMTQsMThcIiwgXCIxNCwxOVwiLCBcIjE0LDIwXCIsIFwiMTUsMFwiLCBcIjE1LDFcIiwgXCIxNSwyXCIsIFwiMTUsM1wiLCBcIjE1LDRcIiwgXCIxNSw1XCIsIFwiMTUsNlwiLCBcIjE1LDdcIiwgXCIxNSw4XCIsIFwiMTUsOVwiLCBcIjE1LDEwXCIsIFwiMTUsMTFcIiwgXCIxNSwxMlwiLCBcIjE1LDEzXCIsIFwiMTUsMTRcIiwgXCIxNSwxNVwiLCBcIjE1LDE2XCIsIFwiMTUsMTdcIiwgXCIxNSwxOFwiLCBcIjE1LDE5XCIsIFwiMTUsMjBcIiwgXCIxNiwwXCIsIFwiMTYsMVwiLCBcIjE2LDJcIiwgXCIxNiwzXCIsIFwiMTYsNFwiLCBcIjE2LDVcIiwgXCIxNiw2XCIsIFwiMTYsN1wiLCBcIjE2LDhcIiwgXCIxNiw5XCIsIFwiMTYsMTBcIiwgXCIxNiwxMVwiLCBcIjE2LDEyXCIsIFwiMTYsMTNcIiwgXCIxNiwxNFwiLCBcIjE2LDE1XCIsIFwiMTYsMTZcIiwgXCIxNiwxN1wiLCBcIjE2LDE4XCIsIFwiMTYsMTlcIiwgXCIxNiwyMFwiLCBcIjE3LDBcIiwgXCIxNywxXCIsIFwiMTcsMlwiLCBcIjE3LDNcIiwgXCIxNyw0XCIsIFwiMTcsNVwiLCBcIjE3LDZcIiwgXCIxNyw3XCIsIFwiMTcsOFwiLCBcIjE3LDlcIiwgXCIxNywxMFwiLCBcIjE3LDExXCIsIFwiMTcsMTJcIiwgXCIxNywxM1wiLCBcIjE3LDE0XCIsIFwiMTcsMTVcIiwgXCIxNywxNlwiLCBcIjE3LDE3XCIsIFwiMTcsMThcIiwgXCIxNywxOVwiLCBcIjE3LDIwXCIsIFwiMTgsMFwiLCBcIjE4LDFcIiwgXCIxOCwyXCIsIFwiMTgsM1wiLCBcIjE4LDRcIiwgXCIxOCw1XCIsIFwiMTgsNlwiLCBcIjE4LDdcIiwgXCIxOCw4XCIsIFwiMTgsOVwiLCBcIjE4LDEwXCIsIFwiMTgsMTFcIiwgXCIxOCwxMlwiLCBcIjE4LDEzXCIsIFwiMTgsMTRcIiwgXCIxOCwxNVwiLCBcIjE4LDE2XCIsIFwiMTgsMTdcIiwgXCIxOCwxOFwiLCBcIjE4LDE5XCIsIFwiMTgsMjBcIiwgXCIxOSwwXCIsIFwiMTksMVwiLCBcIjE5LDJcIiwgXCIxOSwzXCIsIFwiMTksNFwiLCBcIjE5LDVcIiwgXCIxOSw2XCIsIFwiMTksN1wiLCBcIjE5LDhcIiwgXCIxOSw5XCIsIFwiMTksMTBcIiwgXCIxOSwxMVwiLCBcIjE5LDEyXCIsIFwiMTksMTNcIiwgXCIxOSwxNFwiLCBcIjE5LDE1XCIsIFwiMTksMTZcIiwgXCIxOSwxN1wiLCBcIjE5LDE4XCIsIFwiMTksMTlcIiwgXCIxOSwyMFwiLCBcIjIwLDBcIiwgXCIyMCwxXCIsIFwiMjAsMlwiLCBcIjIwLDNcIiwgXCIyMCw0XCIsIFwiMjAsNVwiLCBcIjIwLDZcIiwgXCIyMCw3XCIsIFwiMjAsOFwiLCBcIjIwLDlcIiwgXCIyMCwxMFwiLCBcIjIwLDExXCIsIFwiMjAsMTJcIiwgXCIyMCwxM1wiLCBcIjIwLDE0XCIsIFwiMjAsMTVcIiwgXCIyMCwxNlwiLCBcIjIwLDE3XCIsIFwiMjAsMThcIiwgXCIyMCwxOVwiLCBcIjIwLDIwXCIsIFwiMjEsMFwiLCBcIjIxLDFcIiwgXCIyMSwyXCIsIFwiMjEsM1wiLCBcIjIxLDRcIiwgXCIyMSw1XCIsIFwiMjEsNlwiLCBcIjIxLDdcIiwgXCIyMSw4XCIsIFwiMjEsOVwiLCBcIjIxLDEwXCIsIFwiMjEsMTFcIiwgXCIyMSwxMlwiLCBcIjIxLDEzXCIsIFwiMjEsMTRcIiwgXCIyMSwxNVwiLCBcIjIxLDE2XCIsIFwiMjEsMTdcIiwgXCIyMSwxOFwiLCBcIjIxLDE5XCIsIFwiMjEsMjBcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZVRoZXJtaXRlXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwMVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwidGhlcm1pdGVcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJiaW9tYXNzXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAyLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXHJcblx0XHRcdFx0XCJhcmdzXCI6IFwidGhlcm1pdGVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDIwXCIsIFwiNywxXCIsIFwiNyw3XCIsIFwiMjMsMTNcIiwgXCIyMywxOVwiLCBcIjI0LDBcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZVNoaWVsZFwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDJcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInNoaWVsZFwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcImVuZXJneVwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxyXG5cdFx0XHRcdFwiYXJnc1wiOiBcInNoaWVsZFwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsNlwiLCBcIjYsMTNcIiwgXCI2LDE5XCIsIFwiNywyXCIsIFwiNywxMlwiLCBcIjIzLDhcIiwgXCIyMywxOFwiLCBcIjI0LDFcIiwgXCIyNCw3XCIsIFwiMjQsMTRcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZUJpb2Ryb25lXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwM1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiYmlvZHJvbmVcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJiaW9kcm9uZVwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxyXG5cdFx0XHRcdFwiYXJnc1wiOiBcImJpb2Ryb25lXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiw1XCIsIFwiNywzXCIsIFwiNywxNVwiLCBcIjIzLDVcIiwgXCIyMywxN1wiLCBcIjI0LDE1XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVTYXRlbGxpdGVcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDA0XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJzYXRlbGxpdGVcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJtZXRhbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxyXG5cdFx0XHRcdFwiYXJnc1wiOiBcInNhdGVsbGl0ZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMFwiLCBcIjYsMTRcIiwgXCI3LDRcIiwgXCI3LDE3XCIsIFwiMjMsM1wiLCBcIjIzLDE2XCIsIFwiMjQsNlwiLCBcIjI0LDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVMYXNlclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDVcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImxhc2VyXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwiZW5lcmd5XCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAxLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXHJcblx0XHRcdFx0XCJhcmdzXCI6IFwibGFzZXJcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDNcIiwgXCI2LDdcIiwgXCI2LDhcIiwgXCI2LDEyXCIsIFwiNiwxNlwiLCBcIjcsNVwiLCBcIjcsNlwiLCBcIjcsOVwiLCBcIjcsMThcIiwgXCI3LDE5XCIsIFwiMjMsMVwiLCBcIjIzLDJcIiwgXCIyMywxMVwiLCBcIjIzLDE0XCIsIFwiMjMsMTVcIiwgXCIyNCw0XCIsIFwiMjQsOFwiLCBcIjI0LDEyXCIsIFwiMjQsMTNcIiwgXCIyNCwxN1wiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlUmVwYWlyXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwNlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwicmVwYWlyXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwibWV0YWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDEsXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcInJlcGFpclwiLFxyXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwxXCIsIFwiNiwxMFwiLCBcIjYsMThcIiwgXCI3LDhcIiwgXCI3LDEzXCIsIFwiMjMsN1wiLCBcIjIzLDEyXCIsIFwiMjQsMlwiLCBcIjI0LDEwXCIsIFwiMjQsMTlcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZVJvY2tldFwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDdcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInJvY2tldFwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcInJvY2tldFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxyXG5cdFx0XHRcdFwiYXJnc1wiOiBcInJvY2tldFwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsNFwiLCBcIjYsMTFcIiwgXCI3LDEwXCIsIFwiNywxNlwiLCBcIjIzLDRcIiwgXCIyMywxMFwiLCBcIjI0LDlcIiwgXCIyNCwxNlwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlRXNwaW9uYWdlXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwOFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiZXNwaW9uYWdlXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwiYmlvbWFzc1wiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMyxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZXNwaW9uYWdlXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwxNVwiLCBcIjcsMTFcIiwgXCIyMyw5XCIsIFwiMjQsNVwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlVGFrZW92ZXJcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDA5XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJ0YWtlb3ZlclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcImVuZXJneVwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMixcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwidGFrZW92ZXJcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDE3XCIsIFwiNywxNFwiLCBcIjIzLDZcIiwgXCIyNCwzXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVSZXBhaXJUd29cIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDEwXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJyZXBhaXJUd29cIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCIsIFwib3h5Z2VuXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzEsIDFdLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJyZXBhaXJcIixcclxuXHRcdFx0XHRcImFyZ3NcIjogMlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDlcIiwgXCIyNCwxMVwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlQ291bnRlckVzcGlvbmFnZVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMTFcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImNvdW50ZXJFc3Bpb25hZ2VcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiLCBcIm94eWdlblwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxXSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiY291bnRlclwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMlwiLCBcIjI0LDE4XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJvdGhlclN1cmZhY2VcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDEyXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInN1cmZhY2VcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwic3VyZmFjZVwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI4LDBcIiwgXCI4LDFcIiwgXCI4LDJcIiwgXCI4LDNcIiwgXCI4LDRcIiwgXCI4LDVcIiwgXCI4LDZcIiwgXCI4LDdcIiwgXCI4LDhcIiwgXCI4LDlcIiwgXCI4LDEwXCIsIFwiOCwxMVwiLCBcIjgsMTJcIiwgXCI4LDEzXCIsIFwiOCwxNFwiLCBcIjgsMTVcIiwgXCI4LDE2XCIsIFwiOCwxN1wiLCBcIjgsMThcIiwgXCI4LDE5XCIsIFwiOCwyMFwiLCBcIjIyLDBcIiwgXCIyMiwxXCIsIFwiMjIsMlwiLCBcIjIyLDNcIiwgXCIyMiw0XCIsIFwiMjIsNVwiLCBcIjIyLDZcIiwgXCIyMiw3XCIsIFwiMjIsOFwiLCBcIjIyLDlcIiwgXCIyMiwxMFwiLCBcIjIyLDExXCIsIFwiMjIsMTJcIiwgXCIyMiwxM1wiLCBcIjIyLDE0XCIsIFwiMjIsMTVcIiwgXCIyMiwxNlwiLCBcIjIyLDE3XCIsIFwiMjIsMThcIiwgXCIyMiwxOVwiLCBcIjIyLDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJvdGhlckxvY2tcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDEzXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImxvY2tcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwibG9ja1wiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI3LDBcIiwgXCI1LDEwXCIsIFwiMSwxMFwiLCBcIjcsMjBcIiwgXCIyMywwXCIsIFwiMjMsMjBcIiwgXCIyNSwxMFwiLCBcIjI5LDEwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJhcm1vcnlEcmlsbFwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMTRcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYXJtb3J5XCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImRyaWxsXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjQsMTBcIiwgXCIyNiwxMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwiQXJtb3J5Q2Fubm9uXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxNVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJhcm1vcnlcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiY2Fubm9uXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjMsMTBcIiwgXCIyNywxMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYXJtb3J5RXhwbG9zaXZlc1wiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMTZcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYXJtb3J5XCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImV4cGxvc2l2ZXNcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMiwxMFwiLCBcIjI4LDEwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJsaWNoZW5cIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDE3XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwibGljaGVuXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcImJpb21hc3NcIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMFwiLCBcIjAsMTBcIiwgXCIwLDE3XCIsIFwiMSwyXCIsIFwiMSw4XCIsIFwiMSwxNlwiLCBcIjEsMjBcIiwgXCIyOSwwXCIsIFwiMjksNFwiLCBcIjI5LDEyXCIsIFwiMjksMThcIiwgXCIzMCwzXCIsIFwiMzAsMTBcIiwgXCIzMCwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbkxpY2hlblR3b1wiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMThcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJsaWNoZW5Ud29cIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFwiYmlvbWFzc1wiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IDJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCw0XCIsIFwiMzAsMTZcIl1cclxuXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uQ2hlbWljYWxSZWFjdG9yXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxOVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImNoZW1pY2FsUmVhY3RvclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcImJpb21hc3NcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDEsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcIm94eWdlblwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMSwxXCIsIFwiMSw5XCIsIFwiMjksMTlcIiwgXCIyOSwxMVwiXVxyXG5cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25DaGVtaWNhbFJlYWN0b3JUd29cIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDIwXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiY2hlbWljYWxSZWFjdG9yVHdvXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwiYmlvbWFzc1wiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFwib3h5Z2VuXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogMlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDVcIiwgXCIzMCwxNVwiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbkFpckZpbHRlclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjFcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJhaXJGaWx0ZXJcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJveHlnZW5cIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcIm94eWdlblwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IDNcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxNVwiLCBcIjEsMTFcIiwgXCIyOSw5XCIsIFwiMzAsNVwiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbkJpb2NvbGxlY3RvclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjJcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJiaW9jb2xsZWN0b3JcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wib3h5Z2VuXCIsIFwiYmlvbWFzc1wiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFwiYmlvZHJvbmVcIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMTRcIiwgXCIwLDE4XCIsIFwiMSw2XCIsIFwiMSwxN1wiLCBcIjMwLDZcIiwgXCIzMCwyXCIsIFwiMjksMTRcIiwgXCIyOSwzXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uVXJhbml1bU1pbmVcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDIzXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwidXJhbml1bU1pbmVcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wib3h5Z2VuXCIsIFwiZW5lcmd5XCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzEsIDFdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogXCJ1cmFuaXVtXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDJcIiwgXCIwLDZcIiwgXCIxLDNcIiwgXCIzMCwxOFwiLCBcIjMwLDE0XCIsIFwiMjksMTdcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25OdWNsZWFyUmVhY3RvclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjRcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJudWNsZWFyUmVhY3RvclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcInVyYW5pdW1cIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDEsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcImVuZXJneVwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IDNcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCw5XCIsIFwiMCwxNlwiLCBcIjEsN1wiLCBcIjEsMTRcIiwgXCIxLDE5XCIsIFwiMzAsMTFcIiwgXCIzMCw0XCIsIFwiMjksMTNcIiwgXCIyOSw2XCIsIFwiMjksMVwiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvblRoZXJtYWxHZW5lcmF0b3JcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDI1XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwidGhlcm1hbEdlbmVyYXRvclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcImJpb21hc3NcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDEsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcImVuZXJneVwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxMlwiLCBcIjMwLDhcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25Gb3VuZHJ5XCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyNlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImZvdW5kcnlcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJlbmVyZ3lcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDEsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcIm1ldGFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDNcIiwgXCIwLDExXCIsIFwiMCwxOVwiLCBcIjEsMTNcIiwgXCIzMCwxN1wiLCBcIjMwLDlcIiwgXCIzMCwxXCIsIFwiMjksN1wiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbkZvdW5kcnlUd29cIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDI3XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiZm91bmRyeVR3b1wiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcImVuZXJneVwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFwibWV0YWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAyXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjEsMFwiLCBcIjI5LDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uUm9ja2V0V29ya3Nob3BcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDI4XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwicm9ja2V0V29ya3Nob3BcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJlbmVyZ3lcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDEsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcInJvY2tldFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxXCIsIFwiMCw3XCIsIFwiMSw1XCIsIFwiMSwxMlwiLCBcIjEsMTVcIiwgXCIzMCwxOVwiLCBcIjMwLDEzXCIsIFwiMjksMTVcIiwgXCIyOSw4XCIsIFwiMjksNVwiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvblNlbnNvckNhYmluXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyOVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInNlbnNvckNhYmluXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImtpbGxCaW9kcm9uZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMTNcIiwgXCIzMCw3XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uTnVjbGVhckFybW9yeVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzBcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJudWNsZWFyQXJtb3J5XCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm94eWdlblwiLCBcImVuZXJneVwiLCBcInVyYW5pdW1cIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMSwgMV0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcIm51a2VcIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMjBcIiwgXCIxLDRcIiwgXCIxLDE4XCIsIFwiMzAsMFwiLCBcIjI5LDE2XCIsIFwiMjksMlwiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvblJlcGFpclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzFcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJwcm9kUmVwYWlyXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwicmVwYWlyXCIsXHJcblx0XHRcdFx0XCJ0aWxlVGFyZ2V0SURcIjogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDhcIiwgXCIzMCwxMlwiXVxyXG5cdFx0fSxcclxuXHRcdFwicmVzb3VyY2VPeHlnZW5cIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDMyXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJveHlnZW5cIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNSwwXCIsIFwiNSwxXCIsIFwiNSwyXCIsIFwiNSwzXCIsIFwiNSw0XCIsIFwiNSw1XCIsIFwiNSw2XCIsIFwiNSw3XCIsIFwiNSw4XCIsIFwiNSw5XCIsIFwiMjUsMTFcIiwgXCIyNSwxMlwiLCBcIjI1LDEzXCIsIFwiMjUsMTRcIiwgXCIyNSwxNVwiLCBcIjI1LDE2XCIsIFwiMjUsMTdcIiwgXCIyNSwxOFwiLCBcIjI1LDE5XCIsIFwiMjUsMjBcIl1cclxuXHRcdH0sXHJcblx0XHRcInJlc291cmNlUm9ja2V0XCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAzM1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwicm9ja2V0XCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjQsMFwiLCBcIjQsMVwiLCBcIjQsMlwiLCBcIjQsM1wiLCBcIjQsNFwiLCBcIjQsNVwiLCBcIjQsNlwiLCBcIjQsN1wiLCBcIjQsOFwiLCBcIjQsOVwiLCBcIjI2LDExXCIsIFwiMjYsMTJcIiwgXCIyNiwxM1wiLCBcIjI2LDE0XCIsIFwiMjYsMTVcIiwgXCIyNiwxNlwiLCBcIjI2LDE3XCIsIFwiMjYsMThcIiwgXCIyNiwxOVwiLCBcIjI2LDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJyZXNvdXJjZU1ldGFsXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAzNFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwibWV0YWxcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMywwXCIsIFwiMywxXCIsIFwiMywyXCIsIFwiMywzXCIsIFwiMyw0XCIsIFwiMyw1XCIsIFwiMyw2XCIsIFwiMyw3XCIsIFwiMyw4XCIsIFwiMyw5XCIsIFwiMjcsMTFcIiwgXCIyNywxMlwiLCBcIjI3LDEzXCIsIFwiMjcsMTRcIiwgXCIyNywxNVwiLCBcIjI3LDE2XCIsIFwiMjcsMTdcIiwgXCIyNywxOFwiLCBcIjI3LDE5XCIsIFwiMjcsMjBcIl1cclxuXHRcdH0sXHJcblx0XHRcInJlc291cmNlRW5lcmd5XCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAzNVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiZW5lcmd5XCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjIsMFwiLCBcIjIsMVwiLCBcIjIsMlwiLCBcIjIsM1wiLCBcIjIsNFwiLCBcIjIsNVwiLCBcIjIsNlwiLCBcIjIsN1wiLCBcIjIsOFwiLCBcIjIsOVwiLCBcIjIsMTFcIiwgXCIyLDEyXCIsIFwiMiwxM1wiLCBcIjIsMTRcIiwgXCIyLDE1XCIsIFwiMiwxNlwiLCBcIjIsMTdcIiwgXCIyLDE4XCIsIFwiMiwxOVwiLCBcIjIsMjBcIiwgXCIyOCwwXCIsIFwiMjgsMVwiLCBcIjI4LDJcIiwgXCIyOCwzXCIsIFwiMjgsNFwiLCBcIjI4LDVcIiwgXCIyOCw2XCIsIFwiMjgsN1wiLCBcIjI4LDhcIiwgXCIyOCw5XCIsIFwiMjgsMTFcIiwgXCIyOCwxMlwiLCBcIjI4LDEzXCIsIFwiMjgsMTRcIiwgXCIyOCwxNVwiLCBcIjI4LDE2XCIsIFwiMjgsMTdcIiwgXCIyOCwxOFwiLCBcIjI4LDE5XCIsIFwiMjgsMjBcIl1cclxuXHRcdH0sXHJcblx0XHRcInJlc291cmNlQmlvbWFzc1wiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzZcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImJpb21hc3NcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNSwxMVwiLCBcIjUsMTJcIiwgXCI1LDEzXCIsIFwiNSwxNFwiLCBcIjUsMTVcIiwgXCI1LDE2XCIsIFwiNSwxN1wiLCBcIjUsMThcIiwgXCI1LDE5XCIsIFwiNSwyMFwiLCBcIjI1LDBcIiwgXCIyNSwxXCIsIFwiMjUsMlwiLCBcIjI1LDNcIiwgXCIyNSw0XCIsIFwiMjUsNVwiLCBcIjI1LDZcIiwgXCIyNSw3XCIsIFwiMjUsOFwiLCBcIjI1LDlcIl1cclxuXHRcdH0sXHJcblx0XHRcInJlc291cmNlQmlvZHJvbmVcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDM3XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJiaW9kcm9uZVwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI0LDExXCIsIFwiNCwxMlwiLCBcIjQsMTNcIiwgXCI0LDE0XCIsIFwiNCwxNVwiLCBcIjQsMTZcIiwgXCI0LDE3XCIsIFwiNCwxOFwiLCBcIjQsMTlcIiwgXCI0LDIwXCIsIFwiMjYsMFwiLCBcIjI2LDFcIiwgXCIyNiwyXCIsIFwiMjYsM1wiLCBcIjI2LDRcIiwgXCIyNiw1XCIsIFwiMjYsNlwiLCBcIjI2LDdcIiwgXCIyNiw4XCIsIFwiMjYsOVwiXVxyXG5cdFx0fSxcclxuXHRcdFwicmVzb3VyY2VVcmFuaXVtXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAzOFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwidXJhbml1bVwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIzLDExXCIsIFwiMywxMlwiLCBcIjMsMTNcIiwgXCIzLDE0XCIsIFwiMywxNVwiLCBcIjMsMTZcIiwgXCIzLDE3XCIsIFwiMywxOFwiLCBcIjMsMTlcIiwgXCIzLDIwXCIsIFwiMjcsMFwiLCBcIjI3LDFcIiwgXCIyNywyXCIsIFwiMjcsM1wiLCBcIjI3LDRcIiwgXCIyNyw1XCIsIFwiMjcsNlwiLCBcIjI3LDdcIiwgXCIyNyw4XCIsIFwiMjcsOVwiXVxyXG5cdFx0fVxyXG5cdH1cclxufSIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIHJldHVybiAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cbnZhciBybmc7XG5cbnZhciBjcnlwdG8gPSBnbG9iYWwuY3J5cHRvIHx8IGdsb2JhbC5tc0NyeXB0bzsgLy8gZm9yIElFIDExXG5pZiAoY3J5cHRvICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgcm5nID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn1cblxuaWYgKCFybmcpIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuICBybmcgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBybmc7XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PSAnYmluYXJ5JyA/IG5ldyBBcnJheSgxNikgOiBudWxsO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDE2OyArK2lpKSB7XG4gICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYgfHwgYnl0ZXNUb1V1aWQocm5kcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjQ7XG4iLCJpbXBvcnQgQ2xpZW50IGZyb20gJy4vcHJlZmFicy9jbGllbnQnO1xyXG5pbXBvcnQgQm9vdCBmcm9tICcuL3N0YXRlcy9ib290JztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9zdGF0ZXMvZ2FtZSc7XHJcbmltcG9ydCBTZXR1cCBmcm9tICcuL3N0YXRlcy9zZXR1cCc7XHJcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnLi9zdGF0ZXMvcHJlbG9hZGVyJztcclxuaW1wb3J0IEdhbWVvdmVyIGZyb20gJy4vc3RhdGVzL2dhbWVvdmVyJztcclxuaW1wb3J0IFNlcHRpa29uIGZyb20gJy4vcHJlZmFicy9zZXB0aWtvbic7XHJcblxyXG5pZih0eXBlb2YoU3RvcmFnZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXB0VVVJRCcpICE9IG51bGwpIHtcclxuICAgICAgICBjb25zdCB1dWlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcHRVVUlEJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHV1aWQgPSByZXF1aXJlKCd1dWlkL3Y0JykoKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VwdFVVSUQnLCB1dWlkKTtcclxuICAgIH1cclxufSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJMb2NhbCBTdG9yYWdlIGlzIHJlcXVpcmVkIVwiKTtcclxufVxyXG5cclxuLy8gY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0LCBQaGFzZXIuQVVUTywgJ3BoYXNlci10ZXN0LWdhbWUnKTtcclxuY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShcIjEwMFwiLCBcIjEwMFwiLCBQaGFzZXIuQVVUTyk7XHJcbmdhbWUuc2VwdGlrb24gPSBuZXcgU2VwdGlrb24oZ2FtZSk7XHJcbmdhbWUuY2xpZW50ID0gbmV3IENsaWVudChnYW1lLnNlcHRpa29uKTtcclxuXHJcbmdhbWUuc3RhdGUuYWRkKCdib290JywgbmV3IEJvb3QoKSk7XHJcbmdhbWUuc3RhdGUuYWRkKCdnYW1lJywgbmV3IEdhbWUoKSk7XHJcbmdhbWUuc3RhdGUuYWRkKCdzZXR1cCcsIG5ldyBTZXR1cCgpKTtcclxuZ2FtZS5zdGF0ZS5hZGQoJ3ByZWxvYWRlcicsIG5ldyBQcmVsb2FkZXIoKSk7XHJcbmdhbWUuc3RhdGUuYWRkKCdnYW1lb3ZlcicsIG5ldyBHYW1lb3ZlcigpKTtcclxuXHJcbmdhbWUuc3RhdGUuc3RhcnQoJ2Jvb3QnKTtcclxuIiwidmFyIGdhbWVNb2RhbCA9IGdhbWVNb2RhbCB8fCB7fTtcclxuXHJcblxyXG5nYW1lTW9kYWwgPSBmdW5jdGlvbiAoZ2FtZSkge1xyXG5cclxuXHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdGdhbWUubW9kYWxzID0ge307XHJcblxyXG5cdC8qKlxyXG5cdCAqIFtoaWRlTW9kYWwgZGVzY3JpcHRpb25dXHJcblx0ICogQHBhcmFtICB7W3R5cGVdfSB0eXBlIFtkZXNjcmlwdGlvbl1cclxuXHQgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgW2Rlc2NyaXB0aW9uXVxyXG5cdCAqL1xyXG5cdHRoaXMuaGlkZU1vZGFsID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuXHRcdHdpbmRvdy5jb25zb2xlLmxvZyh0eXBlKTtcclxuXHRcdGdhbWUubW9kYWxzW3R5cGVdLnZpc2libGUgPSBmYWxzZTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Y3JlYXRlTW9kYWw6IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblx0XHRcdHZhciB0eXBlID0gb3B0aW9ucy50eXBlIHx8ICcnOyAvLyBtdXN0IGJlIHVuaXF1ZVxyXG5cdFx0XHR2YXIgaW5jbHVkZUJhY2tncm91bmQgPSBvcHRpb25zLmluY2x1ZGVCYWNrZ3JvdW5kOyAvLyBtYXliZSBub3Qgb3B0aW9uYWxcclxuXHRcdFx0dmFyIGJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yIHx8IFwiMHgwMDAwMDBcIjtcclxuXHRcdFx0dmFyIGJhY2tncm91bmRPcGFjaXR5ID0gb3B0aW9ucy5iYWNrZ3JvdW5kT3BhY2l0eSA9PT0gdW5kZWZpbmVkID9cclxuXHRcdFx0XHQwLjcgOiBvcHRpb25zLmJhY2tncm91bmRPcGFjaXR5O1xyXG5cdFx0XHR2YXIgbW9kYWxDbG9zZU9uSW5wdXQgPSBvcHRpb25zLm1vZGFsQ2xvc2VPbklucHV0IHx8IGZhbHNlO1xyXG5cdFx0XHR2YXIgbW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2sgPSBvcHRpb25zLm1vZGFsQmFja2dyb3VuZENhbGxiYWNrIHx8IGZhbHNlO1xyXG5cdFx0XHR2YXIgdkNlbnRlciA9IG9wdGlvbnMudkNlbnRlciB8fCB0cnVlO1xyXG5cdFx0XHR2YXIgaENlbnRlciA9IG9wdGlvbnMuaENlbnRlciB8fCB0cnVlO1xyXG5cdFx0XHR2YXIgaXRlbXNBcnIgPSBvcHRpb25zLml0ZW1zQXJyIHx8IFtdO1xyXG5cdFx0XHR2YXIgZml4ZWRUb0NhbWVyYSA9IG9wdGlvbnMuZml4ZWRUb0NhbWVyYSB8fCBmYWxzZTtcclxuXHJcblx0XHRcdHZhciBtb2RhbDtcclxuXHRcdFx0dmFyIG1vZGFsR3JvdXAgPSBnYW1lLmFkZC5ncm91cCgpO1xyXG5cdFx0XHRpZiAoZml4ZWRUb0NhbWVyYSA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdG1vZGFsR3JvdXAuZml4ZWRUb0NhbWVyYSA9IHRydWU7XHJcblx0XHRcdFx0bW9kYWxHcm91cC5jYW1lcmFPZmZzZXQueCA9IDA7XHJcblx0XHRcdFx0bW9kYWxHcm91cC5jYW1lcmFPZmZzZXQueSA9IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChpbmNsdWRlQmFja2dyb3VuZCA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdG1vZGFsID0gZ2FtZS5hZGQuZ3JhcGhpY3MoZ2FtZS53aWR0aCwgZ2FtZS5oZWlnaHQpO1xyXG5cdFx0XHRcdG1vZGFsLmJlZ2luRmlsbChiYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRPcGFjaXR5KTtcclxuXHRcdFx0XHRtb2RhbC54ID0gMDtcclxuXHRcdFx0XHRtb2RhbC55ID0gMDtcclxuXHJcblx0XHRcdFx0bW9kYWwuZHJhd1JlY3QoMCwgMCwgZ2FtZS53aWR0aCwgZ2FtZS5oZWlnaHQpO1xyXG5cclxuXHRcdFx0XHRpZiAobW9kYWxDbG9zZU9uSW5wdXQgPT09IHRydWUpIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgaW5uZXJNb2RhbCA9IGdhbWUuYWRkLnNwcml0ZSgwLCAwKTtcclxuXHRcdFx0XHRcdGlubmVyTW9kYWwuaW5wdXRFbmFibGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGlubmVyTW9kYWwud2lkdGggPSBnYW1lLndpZHRoO1xyXG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5oZWlnaHQgPSBnYW1lLmhlaWdodDtcclxuXHRcdFx0XHRcdGlubmVyTW9kYWwudHlwZSA9IHR5cGU7XHJcblx0XHRcdFx0XHRpbm5lck1vZGFsLmlucHV0LnByaW9yaXR5SUQgPSAwO1xyXG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5ldmVudHMub25JbnB1dERvd24uYWRkKGZ1bmN0aW9uIChlLCBwb2ludGVyKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuaGlkZU1vZGFsKGUudHlwZSk7XHJcblx0XHRcdFx0XHR9LCBfdGhpcywgMik7XHJcblxyXG5cdFx0XHRcdFx0bW9kYWxHcm91cC5hZGQoaW5uZXJNb2RhbCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRtb2RhbEJhY2tncm91bmRDYWxsYmFjayA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2spIHtcclxuXHRcdFx0XHR2YXIgaW5uZXJNb2RhbCA9IGdhbWUuYWRkLnNwcml0ZSgwLCAwKTtcclxuXHRcdFx0XHRpbm5lck1vZGFsLmlucHV0RW5hYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0aW5uZXJNb2RhbC53aWR0aCA9IGdhbWUud2lkdGg7XHJcblx0XHRcdFx0aW5uZXJNb2RhbC5oZWlnaHQgPSBnYW1lLmhlaWdodDtcclxuXHRcdFx0XHRpbm5lck1vZGFsLnR5cGUgPSB0eXBlO1xyXG5cdFx0XHRcdGlubmVyTW9kYWwuaW5wdXQucHJpb3JpdHlJRCA9IDA7XHJcblxyXG5cdFx0XHRcdG1vZGFsR3JvdXAuYWRkKGlubmVyTW9kYWwpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoaW5jbHVkZUJhY2tncm91bmQpIHtcclxuXHRcdFx0XHRtb2RhbEdyb3VwLmFkZChtb2RhbCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBtb2RhbExhYmVsO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zQXJyLmxlbmd0aDsgaSArPSAxKSB7XHJcblx0XHRcdFx0dmFyIGl0ZW0gPSBpdGVtc0FycltpXTtcclxuXHRcdFx0XHR2YXIgaXRlbVR5cGUgPSBpdGVtLnR5cGUgfHwgJ3RleHQnO1xyXG5cdFx0XHRcdHZhciBpdGVtQ29sb3IgPSBpdGVtLmNvbG9yIHx8IDB4MDAwMDAwO1xyXG5cdFx0XHRcdHZhciBpdGVtRm9udGZhbWlseSA9IGl0ZW0uZm9udEZhbWlseSB8fCAnQXJpYWwnO1xyXG5cdFx0XHRcdHZhciBpdGVtRm9udFNpemUgPSBpdGVtLmZvbnRTaXplIHx8IDMyO1xyXG5cdFx0XHRcdHZhciBpdGVtU3Ryb2tlID0gaXRlbS5zdHJva2UgfHwgJzB4MDAwMDAwJztcclxuXHRcdFx0XHR2YXIgaXRlbVN0cm9rZVRoaWNrbmVzcyA9IGl0ZW0uc3Ryb2tlVGhpY2tuZXNzIHx8IDA7XHJcblx0XHRcdFx0dmFyIGl0ZW1BbGlnbiA9IGl0ZW0uYWxpZ24gfHwgJ2NlbnRlcic7XHJcblx0XHRcdFx0dmFyIG9mZnNldFggPSBpdGVtLm9mZnNldFggfHwgMDtcclxuXHRcdFx0XHR2YXIgb2Zmc2V0WSA9IGl0ZW0ub2Zmc2V0WSB8fCAwO1xyXG5cdFx0XHRcdHZhciBjb250ZW50U2NhbGUgPSBpdGVtLmNvbnRlbnRTY2FsZSB8fCAxO1xyXG5cdFx0XHRcdHZhciBjb250ZW50ID0gaXRlbS5jb250ZW50IHx8IFwiXCI7XHJcblx0XHRcdFx0dmFyIGNlbnRlclggPSBnYW1lLndpZHRoIC8gMjtcclxuXHRcdFx0XHR2YXIgY2VudGVyWSA9IGdhbWUuaGVpZ2h0IC8gMjtcclxuXHRcdFx0XHR2YXIgY2FsbGJhY2sgPSBpdGVtLmNhbGxiYWNrIHx8IGZhbHNlO1xyXG5cdFx0XHRcdHZhciB0ZXh0QWxpZ24gPSBpdGVtLnRleHRBbGlnbiB8fCBcImxlZnRcIjtcclxuXHRcdFx0XHR2YXIgYXRsYXNQYXJlbnQgPSBpdGVtLmF0bGFzUGFyZW50IHx8IFwiXCI7XHJcblx0XHRcdFx0dmFyIGJ1dHRvbkhvdmVyID0gaXRlbS5idXR0b25Ib3ZlciB8fCBjb250ZW50O1xyXG5cdFx0XHRcdHZhciBidXR0b25BY3RpdmUgPSBpdGVtLmJ1dHRvbkFjdGl2ZSB8fCBjb250ZW50O1xyXG5cdFx0XHRcdHZhciBncmFwaGljQ29sb3IgPSBpdGVtLmdyYXBoaWNDb2xvciB8fCAweGZmZmZmZjtcclxuXHRcdFx0XHR2YXIgZ3JhcGhpY09wYWNpdHkgPSBpdGVtLmdyYXBoaWNPcGFjaXR5IHx8IDE7XHJcblx0XHRcdFx0dmFyIGdyYXBoaWNXID0gaXRlbS5ncmFwaGljV2lkdGggfHwgMjAwO1xyXG5cdFx0XHRcdHZhciBncmFwaGljSCA9IGl0ZW0uZ3JhcGhpY0hlaWdodCB8fCAyMDA7XHJcblx0XHRcdFx0dmFyIGdyYXBoaWNSYWRpdXMgPSBpdGVtLmdyYXBoaWNSYWRpdXMgfHwgMDtcclxuXHRcdFx0XHR2YXIgbG9ja1Bvc2l0aW9uID0gaXRlbS5sb2NrUG9zaXRpb24gfHwgZmFsc2U7XHJcblxyXG5cdFx0XHRcdHZhciBpdGVtQW5jaG9yID0gaXRlbS5hbmNob3IgfHwge3g6MCx5OjB9O1xyXG5cdFx0XHRcdHZhciBpdGVtQW5nbGUgPSBpdGVtLmFuZ2xlIHx8IDA7XHJcblx0XHRcdFx0dmFyIGl0ZW1YID0gaXRlbS54IHx8IDA7XHJcblx0XHRcdFx0dmFyIGl0ZW1ZID0gaXRlbS55IHx8IDA7XHJcblx0XHRcdFx0dmFyIGltYWdlRnJhbWUgPSBpdGVtLmZyYW1lIHx8IG51bGw7XHJcblx0XHRcdFx0dmFyIHRpbGVTcHJpdGVXaWR0aCA9IGl0ZW0udGlsZVNwcml0ZVdpZHRoIHx8IGdhbWUud2lkdGg7XHJcblx0XHRcdFx0dmFyIHRpbGVTcHJpdGVIZWlnaHQgPSBpdGVtLnRpbGVTcHJpdGVIZWlnaHQgfHwgZ2FtZS5oZWlnaHQ7XHJcblxyXG5cdFx0XHRcdG1vZGFsTGFiZWwgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRpZiAoaXRlbVR5cGUgPT09IFwidGV4dFwiIHx8IGl0ZW1UeXBlID09PSBcImJpdG1hcFRleHRcIikge1xyXG5cclxuXHRcdFx0XHRcdGlmIChpdGVtVHlwZSA9PT0gXCJ0ZXh0XCIpIHtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnRleHQoMCwgMCwgY29udGVudCwge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQ6IGl0ZW1Gb250U2l6ZSArICdweCAnICsgaXRlbUZvbnRmYW1pbHksXHJcblx0XHRcdFx0XHRcdFx0ZmlsbDogXCIjXCIgKyBTdHJpbmcoaXRlbUNvbG9yKS5yZXBsYWNlKFwiMHhcIiwgXCJcIiksXHJcblx0XHRcdFx0XHRcdFx0c3Ryb2tlOiBcIiNcIiArIFN0cmluZyhpdGVtU3Ryb2tlKS5yZXBsYWNlKFwiMHhcIiwgXCJcIiksXHJcblx0XHRcdFx0XHRcdFx0c3Ryb2tlVGhpY2tuZXNzOiBpdGVtU3Ryb2tlVGhpY2tuZXNzLFxyXG5cdFx0XHRcdFx0XHRcdGFsaWduOiBpdGVtQWxpZ25cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAndGV4dCc7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwudXBkYXRlKCk7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKG1vZGFsTGFiZWwud2lkdGggLyAyKSkgKyBvZmZzZXRYO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoKGdhbWUuaGVpZ2h0IC8gMikgLSAobW9kYWxMYWJlbC5oZWlnaHQgLyAyKSkgKyBvZmZzZXRZO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmJpdG1hcFRleHQoMCwgMCwgaXRlbUZvbnRmYW1pbHksIFN0cmluZyhjb250ZW50KSwgaXRlbUZvbnRTaXplKTtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdiaXRtYXBUZXh0JztcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5hbGlnbiA9IHRleHRBbGlnbjtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC51cGRhdGVUZXh0KCk7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKG1vZGFsTGFiZWwud2lkdGggLyAyKSkgKyBvZmZzZXRYO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtIChtb2RhbExhYmVsLmhlaWdodCAvIDIpKSArIG9mZnNldFk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiaW1hZ2VcIikge1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmltYWdlKDAsIDAsIGNvbnRlbnQpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ2ltYWdlJztcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcInRpbGVTcHJpdGVcIikge1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnRpbGVTcHJpdGUoaXRlbVgsIGl0ZW1ZLFxyXG5cdFx0XHRcdFx0XHR0aWxlU3ByaXRlV2lkdGgsIHRpbGVTcHJpdGVIZWlnaHQsIGNvbnRlbnQsIGltYWdlRnJhbWUpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmFuY2hvci5zZXRUbyhpdGVtQW5jaG9yLngsIGl0ZW1BbmNob3IueSk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmFuZ2xlID0gaXRlbUFuZ2xlO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICd0aWxlU3ByaXRlJztcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcInNwcml0ZVwiKSB7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuc3ByaXRlKDAsIDAsIGF0bGFzUGFyZW50LCBjb250ZW50KTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdzcHJpdGUnO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKChtb2RhbExhYmVsLmhlaWdodCkgLyAyKSkgKyBvZmZzZXRZO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiYnV0dG9uXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5idXR0b24oMCwgMCwgYXRsYXNQYXJlbnQsIGNhbGxiYWNrLFxyXG5cdFx0XHRcdFx0XHR0aGlzLCBidXR0b25Ib3ZlciwgY29udGVudCwgYnV0dG9uQWN0aXZlLCBjb250ZW50KTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdidXR0b24nO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKChtb2RhbExhYmVsLmhlaWdodCkgLyAyKSkgKyBvZmZzZXRZO1xyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcImdyYXBoaWNzXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5ncmFwaGljcyhncmFwaGljVywgZ3JhcGhpY0gpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5iZWdpbkZpbGwoZ3JhcGhpY0NvbG9yLCBncmFwaGljT3BhY2l0eSk7XHJcblx0XHRcdFx0XHRpZiAoZ3JhcGhpY1JhZGl1cyA8PSAwKSB7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuZHJhd1JlY3QoMCwgMCwgZ3JhcGhpY1csIGdyYXBoaWNIKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuZHJhd1JvdW5kZWRSZWN0KDAsIDAsIGdyYXBoaWNXLCBncmFwaGljSCwgZ3JhcGhpY1JhZGl1cyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmVuZEZpbGwoKTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG1vZGFsTGFiZWxbXCJfb2Zmc2V0WFwiXSA9IDA7XHJcblx0XHRcdFx0bW9kYWxMYWJlbFtcIl9vZmZzZXRZXCJdID0gMDtcclxuXHRcdFx0XHRtb2RhbExhYmVsW1wibG9ja1Bvc2l0aW9uXCJdID0gbG9ja1Bvc2l0aW9uO1xyXG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFggPSBvZmZzZXRYO1xyXG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFkgPSBvZmZzZXRZO1xyXG5cclxuXHJcblx0XHRcdFx0aWYgKGNhbGxiYWNrICE9PSBmYWxzZSAmJiBpdGVtVHlwZSAhPT0gXCJidXR0b25cIikge1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5waXhlbFBlcmZlY3RDbGljayA9IHRydWU7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnByaW9yaXR5SUQgPSAxMDtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuZXZlbnRzLm9uSW5wdXREb3duLmFkZChjYWxsYmFjaywgbW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoaXRlbVR5cGUgIT09IFwiYml0bWFwVGV4dFwiICYmIGl0ZW1UeXBlICE9PSBcImdyYXBoaWNzXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYnJpbmdUb1RvcCgpO1xyXG5cdFx0XHRcdFx0bW9kYWxHcm91cC5hZGQobW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmJyaW5nVG9Ub3AoKTtcclxuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYnJpbmdUb1RvcChtb2RhbExhYmVsKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bW9kYWxHcm91cC5hZGQobW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmJyaW5nVG9Ub3AobW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtb2RhbEdyb3VwLnZpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0gPSBtb2RhbEdyb3VwO1xyXG5cclxuXHRcdH0sXHJcblx0XHR1cGRhdGVNb2RhbFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIHR5cGUsIGluZGV4LCBpZCkge1xyXG5cdFx0XHR2YXIgaXRlbTtcclxuXHRcdFx0aWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgaW5kZXggIT09IG51bGwpIHtcclxuXHRcdFx0XHRpdGVtID0gZ2FtZS5tb2RhbHNbdHlwZV0uZ2V0Q2hpbGRBdChpbmRleCk7XHJcblx0XHRcdH0gZWxzZSBpZiAoaWQgIT09IHVuZGVmaW5lZCAmJiBpZCAhPT0gbnVsbCkge1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwidGV4dFwiKSB7XHJcblx0XHRcdFx0aXRlbS50ZXh0ID0gdmFsdWU7XHJcblx0XHRcdFx0aXRlbS51cGRhdGUoKTtcclxuXHRcdFx0XHRpZiAoaXRlbS5sb2NrUG9zaXRpb24gPT09IHRydWUpIHtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGl0ZW0ueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKGl0ZW0ud2lkdGggLyAyKSkgKyBpdGVtLl9vZmZzZXRYO1xyXG5cdFx0XHRcdFx0aXRlbS55ID0gKChnYW1lLmhlaWdodCAvIDIpIC0gKGl0ZW0uaGVpZ2h0IC8gMikpICsgaXRlbS5fb2Zmc2V0WTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoaXRlbS5jb250ZW50VHlwZSA9PT0gXCJiaXRtYXBUZXh0XCIpIHtcclxuXHRcdFx0XHRpdGVtLnRleHQgPSB2YWx1ZTtcclxuXHRcdFx0XHRpdGVtLnVwZGF0ZVRleHQoKTtcclxuXHRcdFx0XHRpZiAoaXRlbS5sb2NrUG9zaXRpb24gPT09IHRydWUpIHtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGl0ZW0ueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKGl0ZW0ud2lkdGggLyAyKSkgKyBpdGVtLl9vZmZzZXRYO1xyXG5cdFx0XHRcdFx0aXRlbS55ID0gKChnYW1lLmhlaWdodCAvIDIpIC0gKGl0ZW0uaGVpZ2h0IC8gMikpICsgaXRlbS5fb2Zmc2V0WTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoaXRlbS5jb250ZW50VHlwZSA9PT0gXCJpbWFnZVwiKSB7XHJcblx0XHRcdFx0aXRlbS5sb2FkVGV4dHVyZSh2YWx1ZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9LFxyXG5cdFx0Z2V0TW9kYWxJdGVtOiBmdW5jdGlvbiAodHlwZSwgaW5kZXgpIHtcclxuXHRcdFx0cmV0dXJuIGdhbWUubW9kYWxzW3R5cGVdLmdldENoaWxkQXQoaW5kZXgpO1xyXG5cdFx0fSxcclxuXHRcdHNob3dNb2RhbDogZnVuY3Rpb24gKHR5cGUpIHtcclxuXHRcdFx0Z2FtZS53b3JsZC5icmluZ1RvVG9wKGdhbWUubW9kYWxzW3R5cGVdKTtcclxuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0udmlzaWJsZSA9IHRydWU7XHJcblx0XHRcdC8vIHlvdSBjYW4gYWRkIGFuaW1hdGlvbiBoZXJlXHJcblx0XHR9LFxyXG5cdFx0aGlkZU1vZGFsOiBmdW5jdGlvbiAodHlwZSkge1xyXG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdC8vIHlvdSBjYW4gYWRkIGFuaW1hdGlvbiBoZXJlXHJcblx0XHR9LFxyXG5cdFx0ZGVzdHJveU1vZGFsOiBmdW5jdGlvbiAodHlwZSkge1xyXG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS5kZXN0cm95KCk7XHJcblx0XHRcdGRlbGV0ZSBnYW1lLm1vZGFsc1t0eXBlXTtcclxuXHRcdH1cclxuXHR9O1xyXG59O1xyXG4iLCJcclxuY2xhc3MgQ2xpZW50IHtcclxuICAgIFxyXG5cdGNvbnN0cnVjdG9yKHNlcHRpa29uKSB7XHJcbiAgICAgICAgXHJcblx0XHR0aGlzLnNvY2tldCA9IGlvLmNvbm5lY3QoKTtcclxuICAgICAgICB0aGlzLnNlcHRpa29uID0gdGhpcy5zb2NrZXQuc2VwdGlrb24gPSBzZXB0aWtvbjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNvY2tldC5vbignbG9nJywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMT0c6ICcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ3VwZGF0ZScsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBpZihkYXRhLnR5cGUgPT0gXCJwZXJzb25uZWxcIikge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBkYXRhLmRldGFpbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLmFkZENsb25lKGRhdGEuZGV0YWlsc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS50eXBlID09IFwicmVzb3VyY2VzXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFjdGlvbiA9PSBcImluaXRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24uaW5pdFJlc291cmNlcygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGRhdGEuYWN0aW9uICsgXCIgbm90IGEgbGVnYWwgYWN0aW9uIGZvciBSZXNvdXJjZSB1cGRhdGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVUERBVEU6Jyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNvY2tldC5vbigncmVxdWVzdCcsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUkVRVUVTVDogJyk7XHJcbiAgICAgICAgICAgIHN3aXRjaChkYXRhLmRldGFpbHMudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImFza1N0YXJ0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi5zaG93TW9kYWwoJ2Fza1N0YXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdhY3Rpb24nLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZih0aGlzLnNlcHRpa29uW2RhdGEuY2FsbGJhY2tdKSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uW2RhdGEuY2FsbGJhY2tdKGRhdGEuZGV0YWlscyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SOiBubyBtZXRob2QgZm91bmQgY2FsbGVkIHNlcHRpa29uLlwiICsgZGF0YS5jYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHR9XHJcblxyXG5cdGFza05ld1BsYXllcigpIHtcclxuXHRcdHRoaXMuc29ja2V0LmVtaXQoJ25ld1BsYXllcicsIHt1dWlkOmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXB0VVVJRCcpfSk7XHJcblx0fVxyXG4gICAgXHJcbiAgICBzZW5kSW5wdXQocGF5bG9hZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZW5kaW5nIGlucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnaW5wdXQnLCBwYXlsb2FkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50O1xyXG4iLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxyXG5cclxuY2xhc3MgQ2xvbmUgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lLCB1dWlkKSB7XHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnY2xvbmUnLCBmcmFtZSk7XHJcbiAgICAgICAgXHJcbiAgICAvL3NldHVwIHBoeXNpY3MgcHJvcGVydGllc1xyXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjY1KTtcclxuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGVCb2R5KHRoaXMpO1xyXG4gICAgLy90aGlzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnV1aWQgPSB1dWlkO1xyXG4gICAgLy9zZXQgc2l6ZVxyXG4gICAgdGhpcy53aWR0aCA9IDI3O1xyXG4gICAgdGhpcy5zY2FsZS55ID0gTWF0aC5hYnModGhpcy5zY2FsZS54KTtcclxuICAgIFxyXG4gICAgLy9zZXQgcm90YXRpb24gKHRoaXMgc2hvdWxkIGJlIGJhc2VkIG9uIHRoZSBiYXNlIHRoaXMgY2xvbmUgb2NjdXBpZXMpXHJcbiAgICB0aGlzLmFuZ2xlID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAuYW5nbGUgKiAtMTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSB0aGlzLmdhbWUuc2VwdGlrb24ucGl4ZWxzVG9UaWxlKHRoaXMueCwgdGhpcy55KTtcclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSB0cnVlO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBoaWdobGlnaHRPbigpIHtcclxuICAgIHRoaXMudGludCA9IDB4RkY1NTAwO1xyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLmFscGhhID0gMTtcclxuICB9XHJcbiAgXHJcbiAgaGlnaGxpZ2h0T2ZmKCkge1xyXG4gICAgdGhpcy50aW50ID0gMHhmZmZmZmY7XHJcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0uYWxwaGEgPSAwO1xyXG4gIH1cclxuICBcclxuICBnZXRMZWdhbE1vdmVzKCkge1xyXG4gICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gdGhpcy5nYW1lLnNlcHRpa29uLnBpeGVsc1RvVGlsZSh0aGlzLngsIHRoaXMueSk7XHJcbiAgICB2YXIgY3VycmVudExlZ2FsTW92ZXMgPSB0aGlzLmdhbWUuc2VwdGlrb24uZ2V0TGVnYWxNb3Zlcyh0aGlzLmdhbWUuZ2xvYmFsLmxhc3REaWNlUm9sbCwgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzKTtcclxuICAgIHZhciBsZWdhbFRpbGVzQXJyYXkgPSBbXTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBmb3IgKHZhciB0aWxlIGluIGN1cnJlbnRMZWdhbE1vdmVzKSB7XHJcbiAgICAgICAgbGVnYWxUaWxlc0FycmF5LnB1c2godGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVtjdXJyZW50TGVnYWxNb3Zlc1t0aWxlXS54XVtjdXJyZW50TGVnYWxNb3Zlc1t0aWxlXS55XSk7XHJcbiAgICAgICAgLy9sZWdhbFRpbGVzQXJyYXlbbGVnYWxUaWxlc0FycmF5Lmxlbmd0aC0xXS5hbHBoYSA9IDAuNTtcclxuICAgICAgICAvL2xlZ2FsVGlsZXNBcnJheVtsZWdhbFRpbGVzQXJyYXkubGVuZ3RoLTFdLmxlZ2FsRm9yID0gdGhpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGxlZ2FsVGlsZXNBcnJheTtcclxuICB9XHJcbiAgXHJcbiAgbW92ZShjb29yZGluYXRlcykge1xyXG4gIFxyXG4gICAgLy8gQ2xlYXIgXCJsZWdhbEZvclwiXHJcbiAgICBmb3IgKHZhciB0aWxlIGluIHRoaXMubGVnYWxUaWxlc0FycmF5KSB7XHJcbiAgICAgICAgdGhpcy5sZWdhbFRpbGVzQXJyYXlbdGlsZV0uYWxwaGEgPSAwO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmxlZ2FsVGlsZXNBcnJheVt0aWxlXS5sZWdhbEZvcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gTW92ZSB0byBuZXcgaG9tZVxyXG4gICAgLy8gTmVlZCB0byBhZGQgYSBjaGVjayBmb3IgYXJtZWQgb3Bwb25lbnRzIChiaW9kcm9uZXMvZXNwaW9uYWdlZCBjbG9uZXMvY2xvbmVzIGluIGVuZW15IGJhc2UsIGV0Yy4pXHJcbiAgICB2YXIgcG9pbnRzID0gdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVUb1BpeGVscyhjb29yZGluYXRlcy54LCBjb29yZGluYXRlcy55KTtcclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSBmYWxzZTtcclxuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMueSAtIHBvaW50cy55ICsgdGhpcy54IC0gcG9pbnRzLngpLnRvRml4ZWQoMSk7XHJcbiAgICBcclxuICAgIC8vIFVwZGF0ZSB0aGUgcGVyc29ubmVsIGNvb3JkaW5hdGUgcHJvcGVydHlcclxuICAgIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XHJcbiAgICBcclxuICAgIC8vIFdhaXQgZm9yIGFuaW1hdGlvbiB0byBjb21wbGV0ZSwgdGhlbiBwcm9jZXNzIHRpbGUgdHJpZ2dlclxyXG4gICAgdmFyIHR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzKS50bygge3g6cG9pbnRzLngsIHk6cG9pbnRzLnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XHJcbiAgICB0d2Vlbi5vbkNvbXBsZXRlLmFkZCh0aGlzLmdhbWUuc2VwdGlrb24udHJpZ2dlclRpbGUsIHRoaXMuZ2FtZS5zZXB0aWtvbik7XHJcbiAgICBcclxuICAgIC8vIENsZWFyIHRoaXMuY3VycmVudExlZ2FsTW92ZXNcclxuICAgIGRlbGV0ZSB0aGlzLmxlZ2FsVGlsZXNBcnJheTtcclxuICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRMZWdhbE1vdmVzOyAgICBcclxuICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xvbmU7XHJcbiIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXHJcbmNsYXNzIENyb3NzaGFpcnMgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnY3Jvc3NoYWlycycsIGZyYW1lKTtcclxuXHJcbiAgICAvL3NldCBzaXplXHJcbiAgICB0aGlzLndpZHRoID0gMzU7IFxyXG4gICAgdGhpcy5zY2FsZS55ID0gTWF0aC5hYnModGhpcy5zY2FsZS54KTtcclxuXHJcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKXtcclxuICAgIHRoaXMueCA9IHRoaXMuZ2FtZS5pbnB1dC5tb3VzZVBvaW50ZXIueDtcclxuICAgIHRoaXMueSA9IHRoaXMuZ2FtZS5pbnB1dC5tb3VzZVBvaW50ZXIueTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcm9zc2hhaXJzO1xyXG4iLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxyXG5jbGFzcyBEaWNlIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSkgeyAgXHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnZGljZScsIGZyYW1lKTtcclxuXHJcbiAgICAvL3NldHVwIHBoeXNpY3MgcHJvcGVydGllc1xyXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xyXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZUJvZHkodGhpcyk7XHJcbiAgICB0aGlzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcclxuXHJcbiAgICAvL3NldCBjbGljayBldmVudFxyXG4gICAgdGhpcy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5ldmVudHMub25JbnB1dERvd24uYWRkKHRoaXMuY2xpY2tlZCwgdGhpcyk7XHJcblxyXG4gICAgLy9zZXQgc2l6ZVxyXG4gICAgdGhpcy53aWR0aCA9IDUwO1xyXG4gICAgdGhpcy5zY2FsZS55ID0gTWF0aC5hYnModGhpcy5zY2FsZS54KTtcclxuICAgIFxyXG4gICAgdGhpcy5hbmltYXRpb25zLmFkZCgnaWRsaW5nJyxudWxsLDUsdHJ1ZSk7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnMucGxheSgnaWRsaW5nJyk7XHJcblxyXG4gIH1cclxuXHJcbiAgY2xpY2tlZCAoKSB7XHJcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICdkaWNlQ2xpY2tlZCd9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaWNlO1xyXG4iLCJjbGFzcyBNYXN0ZXIge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoKSB7IFxyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFzdGVyOyIsImNsYXNzIE9yZG5hbmNlIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKCkgeyBcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yZG5hbmNlOyIsImNsYXNzIFBlcnNvbm5lbCBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSkge1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksICdjbG9uZScsIGZyYW1lKTsgIFxyXG4gICAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJzb25uZWw7IiwiY2xhc3MgUmVzb3VyY2VzIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKCkgeyBcclxuICAgIHRoaXMucmVzb3VyY2VFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgT1hZR0VOOiAwLFxyXG4gICAgICAgIFJPQ0tFVDogMSxcclxuICAgICAgICBNRVRBTDogMixcclxuICAgICAgICBFTkVSR1k6IDMsXHJcbiAgICAgICAgQklPTUFTUzogNCxcclxuICAgICAgICBCSU9EUk9ORTogNSxcclxuICAgICAgICBVUkFOSVVNOiA2XHJcbiAgICB9KTtcclxuICAgIHRoaXMucmVzb3VyY2VzID0ge307XHJcbiAgICBmb3IodmFyIHR5cGUgaW4gdGhpcy5yZXNvdXJjZUVudW0pIHtcclxuICAgICAgICB0aGlzLnJlc291cmNlc1t0aGlzLnJlc291cmNlRW51bVt0eXBlXV0gPSA1O1xyXG4gICAgfTtcclxuICB9XHJcbiAgXHJcbiAgY2hlY2sodHlwZSwgY291bnQpIHtcclxuICAgIGlmKHRoaXMucmVzb3VyY2VzW3RoaXMucmVzb3VyY2VFbnVtW3R5cGVdXSA+IGNvdW50KVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBcclxuICBnZXRDb3VudCh0eXBlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZXNbdHlwZV07XHJcbiAgfVxyXG4gICAgXHJcbiAgYWRkKHR5cGUsIGNvdW50KSB7XHJcbiAgfVxyXG4gIFxyXG4gIHJlbW92ZSh0eXBlLCBjb3VudCkge1xyXG4gICAgdGhpcy5yZXNvdXJjZXNbdHlwZV0gLT0gY291bnQ7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNvdXJjZXM7IiwiaW1wb3J0IENsb25lIGZyb20gJy4uL3ByZWZhYnMvY2xvbmUnO1xyXG5cclxuY2xhc3MgU2VwdGlrb24ge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoZ2FtZSkgeyBcclxuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICBcclxuICAgIHRoaXMucGxheWVyID0ge1xyXG4gICAgICAgIGlkOiAwLFxyXG4gICAgICAgIHBlcnNvbm5lbEFycmF5OiBbXVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm9wcG9uZW50ID0ge1xyXG4gICAgICAgIHBlcnNvbm5lbEFycmF5OiBbXVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgdGhpcy5zaG93blRpbGVzID0gW107XHJcbiAgICB0aGlzLnRpbGVBcnJheSA9IFtdO1xyXG4gICAgdGhpcy5iZ1JhdGlvID0gMDtcclxuICAgIHRoaXMud29ybGRSYXRpbyA9IDA7XHJcbiAgICB0aGlzLnR1cm5TdGF0ZUVudW0gPSBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICBTVEFSVDogMCxcclxuICAgICAgICBTRUxFQ1RfQ0xPTkU6IDEsIFxyXG4gICAgICAgIE1PVkVfQ0xPTkU6IDIsXHJcbiAgICAgICAgU0VMRUNUX0dVTk5FUjogMyxcclxuICAgICAgICBTRUxFQ1RfQUNUSU9OX09SREVSOiA0LCBcclxuICAgICAgICBBQ1RJT046IDUsXHJcbiAgICAgICAgRU5EOiA2XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGlyZWN0aW9uRW51bSA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgIE5PUlRIOjEsXHJcbiAgICAgICAgRUFTVDoyLFxyXG4gICAgICAgIFNPVVRIOjQsXHJcbiAgICAgICAgV0VTVDo4XHJcbiAgICB9KTtcclxuICAgIHRoaXMudHVyblN0YXRlID0gMDtcclxuXHJcbiAgfVxyXG5cclxuICBzaG93TW9kYWwodHlwZSkge1xyXG4gICAgdGhpcy5nYW1lLm1vZGFsLnNob3dNb2RhbCh0eXBlKTtcclxuICB9XHJcblxyXG4gIFxyXG4gIGRpY2VSb2xsZWQoZGV0YWlscykge1xyXG4gICAgdGhpcy5nYW1lLmdsb2JhbC5sYXN0RGljZVJvbGwgPSBkZXRhaWxzLnZhbHVlO1xyXG4gIH1cclxuICBcclxuICBhZGRDbG9uZShkZXRhaWxzKSB7XHJcbiAgICB2YXIgcG9pbnQgPSB0aGlzLnRpbGVUb1BpeGVscyhkZXRhaWxzLngsIGRldGFpbHMueSk7XHJcbiAgICB2YXIgY2xvbmUgPSBuZXcgQ2xvbmUodGhpcy5nYW1lLCBwb2ludC54LCBwb2ludC55LCBudWxsLCBkZXRhaWxzLnV1aWQpO1xyXG4gICAgaWYoZGV0YWlscy5wbGF5ZXJJRCA9PSB0aGlzLnBsYXllci5pZCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5LnB1c2goY2xvbmUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5LnB1c2goY2xvbmUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKGNsb25lKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUFsbFBlcnNvbm5lbCgpe1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdhbWUuYm9hcmRHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNoaWxkcmVuW2ldLmNvbnN0cnVjdG9yID09IENsb25lKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBpLS07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICB1cGRhdGVQbGF5ZXIoZGV0YWlscykge1xyXG4gICAgZm9yICh2YXIgaSBpbiBkZXRhaWxzKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJbaV0gPSBkZXRhaWxzW2ldO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdFJlc291cmNlcygpIHtcclxuICAgICAgXHJcbiAgfVxyXG4gIFxyXG4gIGNyZWF0ZVRpbGVBcnJheShjb2x1bW5zLCByb3dzLCBwb2ludCkge1xyXG4gICAgdGhpcy50aWxlRGV0YWlsID0gdGhpcy5nYW1lLmNhY2hlLmdldEpTT04oJ3RpbGVEZXRhaWwnKTtcclxuXHJcbiAgICB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzID0ge3g6MCwgeTowfTtcclxuXHJcbiAgICBcclxuICAgIHRoaXMubWFyZ2luQm90dG9tID0gdGhpcy5tYXJnaW5Ub3AgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC5oZWlnaHQvMTcuNDc1O1xyXG4gICAgdGhpcy5tYXJnaW5MZWZ0ID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGgvMjQ7XHJcbiAgICB0aGlzLm1hcmdpblJpZ2h0ID0gIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoLzI2LjMxNTg7XHJcbiAgICB0aGlzLnRpbGVXaWR0aCA9IHRoaXMudGlsZUhlaWdodCA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoLzM5O1xyXG4gICAgdGhpcy5wYWRkaW5nID0gKHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoIC0gKHRoaXMubWFyZ2luTGVmdCArIHRoaXMubWFyZ2luUmlnaHQpIC0gKHRoaXMudGlsZVdpZHRoICogMzEpKS8zMDtcclxuICAgICAgICBcclxuICAgIC8vdGhpcy50aWxlV2lkdGggPSAyNTsvLyh0aGlzLmJhY2tncm91bmRXaWR0aCAtICgodGhpcy5tYXJnaW5MZWZ0ICsgdGhpcy5tYXJnaW5SaWdodCkgKyAodGhpcy5wYWRkaW5nICogKGNvbHVtbnMgLSAxKSkpKSAvIGNvbHVtbnM7XHJcbiAgICAvL3RoaXMudGlsZUhlaWdodCA9IDI1Oy8vKHRoaXMuYmFja2dyb3VuZEhlaWdodCAtICgodGhpcy5tYXJnaW5Ub3AgKyB0aGlzLm1hcmdpbkJvdHRvbSkgKyAodGhpcy5wYWRkaW5nICogKHJvd3MgLSAxKSkpKSAvIHJvd3M7XHJcbiAgICAgICAgXHJcbiAgICB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnggPSBwb2ludC54ICsgdGhpcy5tYXJnaW5MZWZ0O1xyXG4gICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy55ID0gcG9pbnQueSArIHRoaXMubWFyZ2luVG9wO1xyXG4gICAgXHJcbiAgICB2YXIgZ3JhcGhpY3MgPSB0aGlzLmdhbWUuYWRkLmdyYXBoaWNzKDAsIDApO1xyXG4gICAgLy9ncmFwaGljcy5saW5lU3R5bGUoNCwgMHhmZmQ5MDAsIDEpO1xyXG4gICAgZ3JhcGhpY3MuYmVnaW5GaWxsKDB4ZmZkOTAwLCAxKTtcclxuICAgIGdyYXBoaWNzLmRyYXdSZWN0KDEwMCwgMTAwLCB0aGlzLnRpbGVXaWR0aCwgdGhpcy50aWxlSGVpZ2h0KTtcclxuICAgIFxyXG4gICAgZm9yICh2YXIgY29sdW1uID0gMDsgY29sdW1uIDwgY29sdW1uczsgY29sdW1uKyspIHtcclxuICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCByb3dzOyByb3crKykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHggPSB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnggKyAodGhpcy50aWxlV2lkdGggKiBjb2x1bW4pICsgKHRoaXMucGFkZGluZyAqIGNvbHVtbiAtIDEpO1xyXG4gICAgICAgICAgICB2YXIgeSA9IHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMueSArICh0aGlzLnRpbGVIZWlnaHQgKiByb3cpICsgKHRoaXMucGFkZGluZyAqIHJvdyAtIDEpO1xyXG4gICAgICAgICAgICBncmFwaGljcy5nZW5lcmF0ZVRleHR1cmUoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50VGlsZSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHgsIHksIGdyYXBoaWNzLmdlbmVyYXRlVGV4dHVyZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKGN1cnJlbnRUaWxlKTtcclxuICAgICAgICAgICAgY3VycmVudFRpbGUuYWxwaGEgPSAwOyAvLyAwLjI1O1xyXG4gICAgICAgICAgICBjdXJyZW50VGlsZS5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjdXJyZW50VGlsZS5ldmVudHMub25JbnB1dERvd24uYWRkKHRoaXMudGlsZUNsaWNrZWQsIHRoaXMpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVBcnJheVtjb2x1bW5dID09ICd1bmRlZmluZWQnKSBcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NvbHVtbl0gPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbY29sdW1uXVtyb3ddID0gY3VycmVudFRpbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBncmFwaGljcy5kZXN0cm95KCk7XHJcbiAgICBcclxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnRpbGVEZXRhaWwpIHtcclxuICAgICAgICBpZiAoIXRoaXMudGlsZURldGFpbC5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgb2JqID0gdGhpcy50aWxlRGV0YWlsW2tleV07XHJcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcclxuICAgICAgICAgICAgLy8gc2tpcCBsb29wIGlmIHRoZSBwcm9wZXJ0eSBpcyBmcm9tIHByb3RvdHlwZVxyXG4gICAgICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KHByb3ApKSBjb250aW51ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbkNvdW50ID0gb2JqW3Byb3BdLmxvY2F0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciggdmFyIGkgPSAwOyBpIDwgbG9jYXRpb25Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciBjb29yZHMgPSBvYmpbcHJvcF0ubG9jYXRpb25zW2ldLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgICAgIHZhciB4ID0gY29vcmRzWzBdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHkgPSBjb29yZHNbMV07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVEYW1hZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlT2NjdXBpZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVYID0geDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVZID0geTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVUeXBlID0gb2JqW3Byb3BdLnR5cGU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVBcnJheVt4XVt5XSAhPSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlTmFtZSA9IG9ialtwcm9wXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHggKyBcIjpcIiArIHkgKyBcIiBub3QgZm91bmQhXCIpO1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcF0ucHJvcGVydGllcyAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldWyd0aWxlUHJvcGVydGllcyddID0gb2JqW3Byb3BdLnByb3BlcnRpZXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9fVxyXG5cclxuICBwaXhlbHNUb1RpbGUoeCwgeSkge1xyXG4gICAgdmFyIHhUaWxlID0gMDtcclxuICAgIHZhciB5VGlsZSA9IDA7XHJcbiAgICBcclxuICAgIGZvciAodmFyIGNvbCBpbiB0aGlzLnRpbGVBcnJheSkge1xyXG4gICAgICAgIGZvciAodmFyIHJvdyBpbiB0aGlzLnRpbGVBcnJheVtjb2xdKSB7XHJcbiAgICAgICAgICAgIHZhciBvYmogPSB0aGlzLnRpbGVBcnJheVtjb2xdW3Jvd11cclxuICAgICAgICAgICAgaWYoeCA+IG9iai54ICYmIHggPCBvYmoueCArIG9iai53aWR0aClcclxuICAgICAgICAgICAgICAgIHhUaWxlID0gcGFyc2VJbnQoY29sKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih5ID4gb2JqLnkgJiYgeSA8IG9iai55ICsgb2JqLmhlaWdodClcclxuICAgICAgICAgICAgICAgIHlUaWxlID0gcGFyc2VJbnQocm93KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge3g6eFRpbGUsIHk6eVRpbGV9O1xyXG4gIH1cclxuICBcclxuICB0aWxlVG9QaXhlbHMoeCwgeSkge1xyXG4gICAgdmFyIHRpbGVPYmogPSB0aGlzLnRpbGVBcnJheVt4XVt5XTtcclxuICAgIHJldHVybiB7eDp0aWxlT2JqLnggKyB0aWxlT2JqLndpZHRoLzIsIHk6dGlsZU9iai55ICsgdGlsZU9iai5oZWlnaHQvMn07XHJcbiAgfVxyXG4gIFxyXG4gIHRpbGVDbGlja2VkKG9iaikge1xyXG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAndGlsZUNsaWNrZWQnLCB4OnBhcnNlSW50KG9iai50aWxlWCksIHk6cGFyc2VJbnQob2JqLnRpbGVZKX0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBcclxuICB0cmlnZ2VyVGlsZShjYWxsZXIpIHtcclxuICBcclxuICAgIHZhciB0aWxlID0gdGhpcy50aWxlQXJyYXlbY2FsbGVyLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bY2FsbGVyLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV07XHJcbiAgICBjYWxsZXIuaXNHdW5uZXIgPSBmYWxzZTtcclxuICAgIHZhciBwcm9wcyA9IHRpbGUudGlsZVByb3BlcnRpZXM7XHJcbiAgICBcclxuICAgIHN3aXRjaCh0aWxlLnRpbGVUeXBlKSB7XHJcbiAgICAgICAgY2FzZSAnc3VyZmFjZSc6IFxyXG4gICAgICAgICAgICBjYWxsZXIuaXNHdW5uZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaFR1cm4oKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ2JhdHRsZSc6XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcHMucmVzb3VyY2VDb3N0Q291bnQgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIENBTiBUSElTIFRFQU0gQUZGT1JEIFRIRSBDT1NUP1xyXG4gICAgICAgICAgICAgICAgLy8gRVhDSEFOR0UgUkVTT1VSQ0VTIC8vIFBBWSBVUCEhXHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGF2YWlsYWJsZSByZXNvdXJjZSBjb3VudCBhbmQgcHJlcGFyZSB0byBvZmZlciBcImd1bm5lclwiIGNsb25lcyBmb3Igc2VsZWN0aW9uLlxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIklzIHRoaXMgcmVzb3VyY2UgYXZhaWxhYmxlP1wiKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFR5cGVzIG9mIGJhdHRsZSB0aWxlcyB3aXRoIGEgRklSRSBhY3Rpb246XHJcbiAgICAgICAgICAgICAgICAvLyAgLSBTYXRlbGxpdGU6IGd1bm5lcjp0cnVlLCBwcm9qZWN0aWxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAvLyAgLSBUaGVybWl0ZTogZ3VubmVyOnRydWUsIHByb2plY3RpbGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAvLyAgLSBTaGllbGQ6IGd1bm5lcjp0cnVlLCBwcm9qZWN0aWxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAvLyAgLSBCaW9kcm9uZTogZ3VubmVyOnRydWUsIHByb2plY3RpbGU6IHRydWVcclxuICAgICAgICAgICAgICAgIC8vICAtIExhc2VyOiBndW5uZXI6dHJ1ZSwgcHJvamVjdGlsZTogZmFsc2VcclxuICAgICAgICAgICAgICAgIC8vICAtIFJvY2tldDogZ3VubmVyOnRydWUsIHByb2plY3RpbGU6IHRydWVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRpbGUudGlsZU5hbWUpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbFRlYW0ub2ZmZXJHdW5uZXJzKCkgPT0gZmFsc2UgJiYgKHRpbGUudGlsZU5hbWUgPT0gXCJzYXRlbGxpdGVcIiB8fCB0aWxlLnRpbGVOYW1lID09IFwidGhlcm1pdGVcIiB8fCB0aWxlLnRpbGVOYW1lID09IFwic2hpZWxkXCIgfHwgdGlsZS50aWxlTmFtZSA9PSBcImJpb2Ryb25lXCIgfHwgdGlsZS50aWxlTmFtZSA9PSBcImxhc2VyXCIgfHwgdGlsZS50aWxlTmFtZSA9PSBcInJvY2tldFwiICkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaFR1cm4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5sb2NhbFRlYW0uY2hlY2tSZWModGhpcy5sb2NhbFRlYW0ucmVjRW51bVtwcm9wcy5yZXNvdXJjZUNvc3RUeXBlLnRvVXBwZXJDYXNlKCldLCBwcm9wcy5yZXNvdXJjZUNvc3RDb3VudCkpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5sb2NhbFRlYW0uY2hlY2tSZWModGhpcy5sb2NhbFRlYW0ucmVjRW51bVtwcm9wcy5yZXNvdXJjZUNvc3RUeXBlLnRvVXBwZXJDYXNlKCldLCBwcm9wcy5yZXNvdXJjZUNvc3RDb3VudCkgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbFRlYW0ucmVtb3ZlUmVjKHRoaXMubG9jYWxUZWFtLnJlY0VudW1bcHJvcHMucmVzb3VyY2VDb3N0VHlwZS50b1VwcGVyQ2FzZSgpXSwgcHJvcHMucmVzb3VyY2VDb3N0Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJOZXcgY291bnQgb2YgXCIgKyBwcm9wcy5yZXNvdXJjZUNvc3RUeXBlICsgXCIgaXMgXCIgKyB0aGlzLmxvY2FsVGVhbS5nZXRSZWNDb3VudCh0aGlzLmxvY2FsVGVhbS5yZWNFbnVtW3Byb3BzLnJlc291cmNlQ29zdFR5cGUudG9VcHBlckNhc2UoKV0pKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmxvY2FsVGVhbS5vZmZlckd1bm5lcnMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb24gPSB7cHJvcHMsIGNhbGxlcn07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIE9GRkVSIEdVTk5FUlMgQU5EIEFXQUlUIFNFTEVDVElPTiAocmVtZW1iZXIgdGhlIGNvc3QgcGVyIGd1bm5lcilcclxuICAgICAgICAgICAgLy8gVGhpcyB3aWxsIHJlcXVpcmUgYW4gYXJyYXkgb2YgY2xvbmVzIGFzc29jaWF0ZWQgd2l0aCB0aGUgdGVhbS4gXHJcbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgdGhlIGFycmF5IGxvb2tpbmcgZm9yICdpc0d1bm5lciA9PSB0cnVlJ1xyXG4gICAgICAgICAgICAvLyBIaWdobGlnaHQgYWxsIFwiZ3VubmVyXCIgY2xvbmVzXHJcbiAgICAgICAgICAgIC8vIEFsbG93IHNlbGVjdGlvbiBvZiBvbmx5IGFzIG1hbnkgYXMgdGVhbSBjYW4gYWZmb3JkXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFRoaXMgd2lsbCBjYWxsIHRoZSBtZXRob2QgZGVmaW5lZCBpbiBKU09OLiBJbiB0aGlzIGNhc2UgZmlyaW5nIGEgd2VhcG9uLlxyXG4gICAgICAgICAgICAvLyBJdGVyYXRlIHRoZSBzZWxlY3RlZCBndW5uZXJzIGFuZCBjYWxsIHRoZSBtZXRob2QuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSAnYXJtb3J5JzpcclxuICAgICAgICAgICAgLy9TRVQgVEVBTSBXRUFQT05TIVxyXG4gICAgICAgICAgICAvLyBUaGlzIHJlcXVpcmVzIGEgVGVhbSBwcm9wZXJ0eSBmb3Igc3RvcmluZyBhIHdlYXBvbnMgKGFybXM/KSBhcnJheS5cclxuICAgICAgICAgICAgdGhpcy5maW5pc2hUdXJuKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlICdwcm9kdWN0aW9uJzpcclxuICAgICAgICAgICAgLy8gTk9URTogVGhlc2UgYXJlIHJlcXVpcmVkIGlmIHJlc291cmNlcyBhbGxvd1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3BzLnJlc291cmNlQ29zdENvdW50ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDQU4gVEhJUyBURUFNIEFGRk9SRCBUSEUgQ09TVD9cclxuICAgICAgICAgICAgICAgIC8vIFJlcXVpcmVzIFRlYW0gb2JqZWN0IHRvIGNoZWNrIGZvciByZXNvdXJjZXNcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gR2V0IGNvc3QgY291bnRcclxuICAgICAgICAgICAgICAgIC8vIEdldCBjb3N0IHR5cGVcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHlpZWxkIGNvdW50XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgeWllbGQgdHlwZVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBFeGVjdXRlIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaFR1cm4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSAnbG9jayc6XHJcbiAgICAgICAgICAgIC8vIE5PVEhJTkcgSEVSRSAobWF5YmUgYW4gdXBkYXRlIGZlYXR1cmU/PylcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hUdXJuKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH07IFxyXG4gICAgICAgICAgICBcclxuICAgIC8vIENPTU1JVCBBQ1RJT05cclxuICAgIFxyXG4gIH1cclxuICBcclxuICAgIGZpcmUod2VhcG9uVHlwZSwgY2FsbGVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZpcmluZyB0aGUgXCIgKyB3ZWFwb25UeXBlKTtcclxuICAgIFxyXG4gICAgc3dpdGNoICh3ZWFwb25UeXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbGFzZXInOlxyXG4gICAgICAgICAgICAvL2ZvciAodmFyIGkgaW4gdGhpcy5sb2NhbFRlYW0uc2VsZWN0ZWRHdW5uZXJzKSB7XHJcbiAgICAgICAgICAgIC8vICAgIHRoaXMuc2hvb3RUaWxlKHRoaXMubG9jYWxUZWFtLnNlbGVjdGVkR3VubmVyc1tpXS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzKTtcclxuICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgIC8vYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ3NhdGVsbGl0ZSc6XHJcbiAgICAgICAgICAgIC8vIFBMQUNFIEEgU0FURUxMSVRFXHJcbiAgICAgICAgICAgLy8gYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ3RoZXJtaXRlJzpcclxuICAgICAgICAgICAgLy90aGlzLnNob290VGlsZShjYWxsZXIuY3VycmVudFRpbGVDb29yZGluYXRlcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ3NoaWVsZCc6XHJcbiAgICAgICAgICAgIC8vYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ2Jpb2Ryb25lJzpcclxuICAgICAgICAgICAgLy9icmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSAncm9ja2V0JzogXHJcbiAgICAgICAgICAgIC8vYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5sb2NhbFRlYW0uc2VsZWN0ZWRHdW5uZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob290VGlsZSh0aGlzLmxvY2FsVGVhbS5zZWxlY3RlZEd1bm5lcnNbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB0aGlzLmxvY2FsVGVhbS5jbGVhckd1bm5lcnMoKTtcclxuICAgIC8vdGhpcy5nYW1lLnNlcHRpa29uLnR1cm5TdGF0ZSA9IHRoaXMuZ2FtZS5zZXB0aWtvbi50dXJuU3RhdGVFbnVtLlNUQVJUO1xyXG4gICAgdGhpcy5maW5pc2hUdXJuKCk7XHJcbiAgfVxyXG4gIFxyXG4gIHJlcGFpcihjb3VudCkge1xyXG4gICAgY29uc29sZS5sb2coXCJyZXBhaXIgXCIgKyBjb3VudCArIFwiIG9mIHRoZSB0aGluZ3MhXCIpO1xyXG4gIH1cclxuICBcclxuICBlc3Bpb25hZ2UoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkdpbW1lIHllciBjbG9uZSEhXCIpO1xyXG4gIH1cclxuICBcclxuICB0YWtlb3ZlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiR2ltbWUgeWVyIHNhdGVsbGl0ZSEhXCIpO1xyXG4gIH1cclxuICBcclxuICBjb3VudGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJHaW1tZSBiYWNrIG15IGNsb25lISFcIik7XHJcbiAgfVxyXG4gIFxyXG4gIGtpbGxCaW9kcm9uZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiWWVyIHNvdWxkIGJldHRlciBiZWxvbmcgdG8gSmVzdXMhIEN1eiB5ZXIgYXNzIGJlbG9uZ3MgdG8gbWUhXCIpO1xyXG4gIH1cclxuICBcclxuICBmaW5pc2hUdXJuKCkge1xyXG4gICAgdGhpcy50dXJuU3RhdGUgPSB0aGlzLmdhbWUuc2VwdGlrb24udHVyblN0YXRlRW51bS5TVEFSVDtcclxuICAgIC8vY29uc29sZS5sb2coXCJBbGFzLiBZb3VyIHR1cm4gaXMgb3Zlci4gXCIpO1xyXG4gIH1cclxuICBcclxuXHJcbiAgZ2V0TGVnYWxNb3Zlcyhtb3ZlcywgY3VycmVudENvb3JkLCBwcmV2aW91c0Nvb3JkKSB7XHJcblx0bW92ZXMtLTtcclxuXHR2YXIgbGVnYWxNb3ZlcyA9IFtdO1xyXG5cdGZvcih2YXIgZGlyZWN0aW9uIGluIHRoaXMuZGlyZWN0aW9uRW51bSkge1x0XHJcblx0XHQvLyBORUVEIFRPIENIRUNLIEZPUiBMT0NLU1xyXG5cdFx0dmFyIG1vdmVDaGVjayA9IHRoaXMuZ2V0Q29vcmRGcm9tRGlyZWN0aW9uKGN1cnJlbnRDb29yZCxkaXJlY3Rpb24pO1xyXG4gICAgICAgIGlmIChtb3ZlQ2hlY2sgPT0gZmFsc2UpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB2YXIgdGlsZVRvQ2hlY2sgPSB0aGlzLnRpbGVBcnJheVttb3ZlQ2hlY2sueF1bbW92ZUNoZWNrLnldO1xyXG5cclxuICAgICAgICAvLyB0aWxlIGlzIGxlZ2FsIElGIGRpcmVjdGlvbiBpcyBvayBBTkQgdGlsZSBpcyBub3QgZGFtYWdlZCBBTkQgKCB0aGVyZSBpcyBubyBwcmV2aW91cyBjb29yZGluYXRlIE9SIHRoaXMgaXMgbm90IHRoZSBwcmV2aW91cyBjb29yZGluYXRlIClcclxuXHRcdGlmKHRoaXMuY2hlY2tXYWxsKHRoaXMuZGlyZWN0aW9uRW51bVtkaXJlY3Rpb25dLCBjdXJyZW50Q29vcmQpID09PSB0cnVlICYmIHRpbGVUb0NoZWNrLnRpbGVEYW1hZ2VkID09PSBmYWxzZSAmJiAoKHR5cGVvZiBwcmV2aW91c0Nvb3JkID09PSAndW5kZWZpbmVkJykgfHwgKCh0eXBlb2YgcHJldmlvdXNDb29yZCAhPT0gJ3VuZGVmaW5lZCcpICYmIChKU09OLnN0cmluZ2lmeShtb3ZlQ2hlY2spICE9PSBKU09OLnN0cmluZ2lmeShwcmV2aW91c0Nvb3JkKSkgKSkpIHtcclxuXHRcdFx0Ly8gQ2hlY2sgaWYgdGlsZSBpcyBvY2N1cGllZFxyXG4gICAgICAgICAgICBpZihtb3Zlcz09MCl7XHJcbiAgICAgICAgICAgICAgICBpZih0aWxlVG9DaGVjay50aWxlT2NjdXBpZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVnYWxNb3Zlcy5wdXNoKG1vdmVDaGVjayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dmFyIHJldHVybkFycmF5ID0gKHRoaXMuZ2V0TGVnYWxNb3Zlcyhtb3ZlcywgbW92ZUNoZWNrLCBjdXJyZW50Q29vcmQpKTtcclxuXHRcdFx0XHRmb3IodmFyIGluZGV4IGluIHJldHVybkFycmF5KSB7XHJcblx0XHRcdFx0XHRpZihKU09OLnN0cmluZ2lmeShyZXR1cm5BcnJheVtpbmRleF0pICE9PSBKU09OLnN0cmluZ2lmeShjdXJyZW50Q29vcmQpKVxyXG5cdFx0XHRcdFx0XHRsZWdhbE1vdmVzLnB1c2gocmV0dXJuQXJyYXlbaW5kZXhdKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIGxlZ2FsTW92ZXM7XHJcbiAgfVxyXG4gICAgXHJcbiAgZ2V0Q29vcmRGcm9tRGlyZWN0aW9uKG9yaWdpbkNvb3JkLGRpcmVjdGlvbikge1xyXG5cclxuXHR2YXIgZGlyPXtOT1JUSDp7eDowLHk6LTF9LEVBU1Q6e3g6MSx5OjB9LFNPVVRIOnt4OjAseToxfSxXRVNUOnt4Oi0xLHk6MH19O1xyXG4gICAgXHJcbiAgICB2YXIgb2JqID0ge3g6KHBhcnNlSW50KG9yaWdpbkNvb3JkLngpICsgcGFyc2VJbnQoZGlyW2RpcmVjdGlvbl0ueCkpLCB5OihwYXJzZUludChvcmlnaW5Db29yZC55KSArIHBhcnNlSW50KGRpcltkaXJlY3Rpb25dLnkpKX07XHJcbiAgICBpZihvYmoueCA8IDAgfHwgb2JqLnkgPCAwKSBcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblx0ZWxzZVxyXG4gICAgICAgIHJldHVybiB7eDoocGFyc2VJbnQob3JpZ2luQ29vcmQueCkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS54KSksIHk6KHBhcnNlSW50KG9yaWdpbkNvb3JkLnkpICsgcGFyc2VJbnQoZGlyW2RpcmVjdGlvbl0ueSkpfTtcclxuXHRcdFxyXG4gIH1cclxuICBcclxuICBzaG93VGlsZXModGlsZXNBcnJheSkge1xyXG4gICAgZm9yICh2YXIgaSBpbiB0aWxlc0FycmF5KSB7XHJcbiAgICAgICAgdGhpcy5zaG93blRpbGVzLnB1c2godGlsZXNBcnJheVtpXSk7XHJcbiAgICAgICAgdGlsZXNBcnJheVtpXS5hbHBoYSA9IDAuNTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaGlkZVRpbGVzKHRpbGVBcnJheSkge1xyXG4gICAgaWYoIXRpbGVBcnJheSkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5zaG93blRpbGVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd25UaWxlc1tpXS5hbHBoYSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd25UaWxlcyA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvb3RUaWxlKGNsb25lQ29vcmRpbmF0ZXMpIHtcclxuICBcclxuICAgIHZhciBjdXJyZW50WCA9IGNsb25lQ29vcmRpbmF0ZXMueDtcclxuICAgIHZhciBjdXJyZW50WSA9IGNsb25lQ29vcmRpbmF0ZXMueTtcclxuICAgIHZhciBjdXJyZW50VGlsZSA9IHRoaXMudGlsZUFycmF5W2N1cnJlbnRYXVtjdXJyZW50WV07XHJcbiAgICBkbyB7XHJcbiAgICAgICAgY3VycmVudFgrKztcclxuICAgICAgICBjdXJyZW50VGlsZSA9IHRoaXMudGlsZUFycmF5W2N1cnJlbnRYXVtjdXJyZW50WV07XHJcbiAgICB9IHdoaWxlIChjdXJyZW50VGlsZS50aWxlVHlwZSA9PSAnc3BhY2UnIHx8IGN1cnJlbnRUaWxlLnRpbGVUeXBlID09ICdzdXJmYWNlJyB8fCBjdXJyZW50VGlsZS50aWxlRGFtYWdlZCA9PSB0cnVlKTtcclxuICAgIFxyXG4gICAgY3VycmVudFRpbGUudGludCA9IDBYMzMzMzMzO1xyXG4gICAgY3VycmVudFRpbGUuYWxwaGEgPSAwLjg7XHJcbiAgICBjdXJyZW50VGlsZS50aWxlRGFtYWdlZCA9IHRydWU7XHJcbiAgICBcclxuICAgIHRoaXMudGVzdCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKGN1cnJlbnRUaWxlLngsIGN1cnJlbnRUaWxlLnkgKyhjdXJyZW50VGlsZS5oZWlnaHQvMiksICdib29tJyk7XHJcbiAgICB0aGlzLnRlc3QuYW5nbGUgPSAyNzA7XHJcbiAgICB0aGlzLnRlc3QuYW5jaG9yLnNldCgwLjUsMC43KTtcclxuICAgIHRoaXMudGVzdC5hbmltYXRpb25zLmFkZCgnYm9vbScpO1xyXG4gICAgdGhpcy50ZXN0LmFuaW1hdGlvbnMucGxheSgnYm9vbScsIDIwLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgY2hlY2tXYWxsKGRpcmVjdGlvbiwgY3VycmVudENvb3JkaW5hdGUpIHtcclxuICAgIHRoaXMud2FsbEdyaWQgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTignd2FsbEdyaWQnKTtcclxuXHRzd2l0Y2ggKGRpcmVjdGlvbil7XHJcblx0XHRjYXNlIHRoaXMuZGlyZWN0aW9uRW51bS5OT1JUSDogLy8gVVBcclxuXHRcdFx0aWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uTk9SVEgpID09IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblx0XHRjYXNlIHRoaXMuZGlyZWN0aW9uRW51bS5TT1VUSDogLy8gRE9XTlxyXG5cdFx0XHRpZiAocGFyc2VJbnQodGhpcy53YWxsR3JpZC5ncmlkW2N1cnJlbnRDb29yZGluYXRlLnhdW2N1cnJlbnRDb29yZGluYXRlLnldJnRoaXMuZGlyZWN0aW9uRW51bS5TT1VUSCkgPT0gMCkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHRcdGNhc2UgdGhpcy5kaXJlY3Rpb25FbnVtLkVBU1Q6IC8vIFJJR0hUXHJcblx0XHRcdGlmIChwYXJzZUludCh0aGlzLndhbGxHcmlkLmdyaWRbY3VycmVudENvb3JkaW5hdGUueF1bY3VycmVudENvb3JkaW5hdGUueV0mdGhpcy5kaXJlY3Rpb25FbnVtLkVBU1QpID09IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblx0XHRjYXNlIHRoaXMuZGlyZWN0aW9uRW51bS5XRVNUOiAvLyBMRUZUXHJcblx0XHRcdGlmIChwYXJzZUludCh0aGlzLndhbGxHcmlkLmdyaWRbY3VycmVudENvb3JkaW5hdGUueF1bY3VycmVudENvb3JkaW5hdGUueV0mdGhpcy5kaXJlY3Rpb25FbnVtLldFU1QpID09IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIHNldHVwKCkge1xyXG4gICAgLy9TaG91bGQgYXNrIGZvciBwbGF5ZXIgbmFtZSBhbmQgYXNzaWduIGEgY29sb3IuIFxyXG4gICAgLy9HaXZlIHdhaXRpbmcgaW5kaWNhdG9yXHJcbiAgICAvL09mZmVyIHNvbWUgd2F5IHRvIHBpY2sgYSBnYW1lPyBJREsuLlxyXG4gIH1cclxuICBcclxuICBzdGFydEdhbWUoKSB7XHJcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ2dhbWUnKTtcclxuICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VwdGlrb247XHJcbiIsImltcG9ydCBSZXNvdXJjZXMgZnJvbSAnLi4vcHJlZmFicy9yZXNvdXJjZXMnO1xyXG5pbXBvcnQgUGVyc29ubmVsIGZyb20gJy4uL3ByZWZhYnMvcGVyc29ubmVsJztcclxuaW1wb3J0IE9yZG5hbmNlIGZyb20gJy4uL3ByZWZhYnMvb3JkbmFuY2UnO1xyXG5pbXBvcnQgQ2xvbmUgZnJvbSAnLi4vcHJlZmFicy9jbG9uZSc7IC8vIFRoaXMgd2lsbCBiZSBpbmNvcnBvcmF0ZWQgaW4gcGVyc29ubmVsXHJcblxyXG5jbGFzcyBUZWFtIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHsgXHJcbiAgICB0aGlzLnJlYyA9IG5ldyBSZXNvdXJjZXMoKTtcclxuICAgIHRoaXMucmVjRW51bSA9IHRoaXMucmVjLnJlc291cmNlRW51bTtcclxuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICBcclxuICAgIHRoaXMucGVyc29ubmVsID0gW107XHJcbiAgICB0aGlzLnNlbGVjdGVkR3VubmVycyA9IFtdO1xyXG4gIH1cclxuICBcclxuICByZWZyZXNoKCkge1xyXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLnBlcnNvbm5lbFtpXS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vUmVzb3VyY2UgSW50ZXJmYWNlXHJcbiAgZ2V0UmVjQ291bnQodHlwZSkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVjLmdldENvdW50KHR5cGUpO1xyXG4gIH1cclxuICBcclxuICBjaGVja1JlYyh0eXBlLCBjb3VudCkge1xyXG4gICAgaWYgKHRoaXMuZ2V0UmVjQ291bnQodHlwZSkgPj0gY291bnQpIFxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBcclxuICBleGNoYW5nZVJlYyhjb3N0VHlwZSwgY29zdENvdW50LCB5aWVsZFR5cGUsIHlpZWxkQ291bnQpIHtcclxuICB9XHJcbiAgXHJcbiAgYWRkUmVjKHR5cGUsIGNvdW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZWMuYWRkKHR5cGUsIGNvdW50KTtcclxuICB9XHJcbiAgXHJcbiAgcmVtb3ZlUmVjKHR5cGUsIGNvdW50KSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZWMucmVtb3ZlKHR5cGUsIGNvdW50KTtcclxuICB9XHJcbiAgXHJcbiAgYWRkQ2xvbmUoeCwgeSwgcHJvcHMpIHtcclxuICAgIHZhciBwb2ludCA9IHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlVG9QaXhlbHMoeCx5KTtcclxuICAgIHZhciBjbG9uZSA9IG5ldyBDbG9uZSh0aGlzLmdhbWUscG9pbnQueCxwb2ludC55KTtcclxuICAgIGNsb25lLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueCA9IHg7XHJcbiAgICBjbG9uZS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnkgPSB5O1xyXG4gICAgXHJcbiAgICBmb3IgKHZhciBpIGluIHByb3BzKSB7XHJcbiAgICAgICAgY2xvbmVbaV0gPSBwcm9wc1tpXTtcclxuICAgIH1cclxuICAgIHRoaXMucGVyc29ubmVsLnB1c2goY2xvbmUpO1xyXG4gICAgdGhpcy5nYW1lLnN0YWdlLmFkZENoaWxkKGNsb25lKTtcclxuICB9XHJcbiAgXHJcbiAgZ2V0Q2xvbmUoY29vcmQpIHtcclxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcclxuICAgICAgICBpZih0aGlzLnBlcnNvbm5lbFtpXS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnggPT0gY29vcmQueCAmJiB0aGlzLnBlcnNvbm5lbFtpXS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnkgPT0gY29vcmQueSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBlcnNvbm5lbFtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGtpbGxDbG9uZShjb29yZCkge1xyXG4gICAgdmFyIGNsb25lID0gdGhpcy5nZXRDbG9uZShjb29yZCk7XHJcbiAgICB0aGlzLmdhbWUuc3RhZ2UucmVtb3ZlQ2hpbGQoY2xvbmUpO1xyXG4gICAgXHJcbiAgICB2YXIgaW5kZXggPSB0aGlzLnBlcnNvbm5lbC5pbmRleE9mKGNsb25lKTtcclxuICAgIHRoaXMucGVyc29ubmVsLnNwbGljZShpbmRleCwxKTtcclxuICAgIFxyXG4gICAgY2xvbmUucmVtb3ZlKCk7XHJcbiAgfVxyXG4gICAgXHJcbiAgb2ZmZXJMZWdhbENsb25lcygpIHtcclxuICAgIC8vIE9mZmVyIGNsb25lcyB0aGF0IGhhdmUgbGVnYWwgbW92ZXNcclxuICAgIGZvcih2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbCkge1xyXG4gICAgICAgIHZhciBtb3ZlcyA9IHRoaXMucGVyc29ubmVsW2ldLmdldExlZ2FsTW92ZXMoKTtcclxuXHJcbiAgICAgICAgaWYobW92ZXMgIT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5wZXJzb25uZWxbaV0uaGlnaGxpZ2h0T24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIG9mZmVyR3VubmVycygpIHtcclxuICAgIC8vIE9mZmVyIGd1bm5lciBcclxuICAgIHZhciBndW5uZXJGb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XHJcbiAgICAgICAgaWYodGhpcy5wZXJzb25uZWxbaV0uaXNHdW5uZXIpIHtcclxuICAgICAgICAgICAgZ3VubmVyRm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAvL3RoaXMucGVyc29ubmVsW2ldLmhpZ2hsaWdodE9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGd1bm5lckZvdW5kO1xyXG4gIH1cclxuICBcclxuICBzZWxlY3RHdW5uZXIoY29vcmRzKSB7XHJcbiAgICB2YXIgY2xvbmUgPSB0aGlzLmdldENsb25lKGNvb3Jkcyk7XHJcbiAgICBpZighY2xvbmUpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYoIWNsb25lLmlzR3VubmVyKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBcclxuICAgIHZhciBleGlzdGluZ0d1bm5lciA9IHRoaXMuc2VsZWN0ZWRHdW5uZXJzLmluZGV4T2YoY2xvbmUpO1xyXG4gICAgaWYoZXhpc3RpbmdHdW5uZXIgPj0gMCl7XHJcbiAgICAgICAgY2xvbmUuaGlnaGxpZ2h0T2ZmKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMuc3BsaWNlKGV4aXN0aW5nR3VubmVyLCAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2xvbmUuaGlnaGxpZ2h0T24oKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycy5wdXNoKGNsb25lKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgY2xlYXJHdW5uZXJzKCkge1xyXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnNlbGVjdGVkR3VubmVycykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzW2ldLmhpZ2hsaWdodE9mZigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMgPSBbXTtcclxuICB9XHJcbiAgXHJcbiAgc2VsZWN0Q2xvbmVGb3JNb3ZlKGNvb3JkcykgeyAgICBcclxuICBcclxuICAgIHZhciBjbG9uZSA9IHRoaXMuZ2V0Q2xvbmUoY29vcmRzKTtcclxuICAgIGlmKCFjbG9uZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZm9yKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XHJcbiAgICAgICAgdGhpcy5wZXJzb25uZWxbaV0uaGlnaGxpZ2h0T2ZmKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxlZ2FsVGlsZXMgPSBjbG9uZS5nZXRMZWdhbE1vdmVzKCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ2xvbmUgPSBjbG9uZTtcclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi5zaG93VGlsZXModGhpcy5sZWdhbFRpbGVzKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICBtb3ZlU2VsZWN0ZWRDbG9uZShjb29yZHMpIHtcclxuICAgIGZvcih2YXIgaSBpbiB0aGlzLmxlZ2FsVGlsZXMpIHtcclxuICAgICAgICBpZih0aGlzLmxlZ2FsVGlsZXNbaV0udGlsZVggPT0gY29vcmRzLnggJiYgdGhpcy5sZWdhbFRpbGVzW2ldLnRpbGVZID09IGNvb3Jkcy55KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDbG9uZS5tb3ZlKGNvb3Jkcyk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkQ2xvbmU7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmxlZ2FsVGlsZXM7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW07IiwiY2xhc3MgT3JkbmFuY2Uge1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5PcmRuYW5jZSA9IE9yZG5hbmNlO1xyXG4iLCJjbGFzcyBQZXJzb25uZWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIHgsIHksIHV1aWQpIHtcclxuICAgICAgICB0aGlzLnR5cGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgICAgIGNsb25lOiAwLFxyXG4gICAgICAgICAgICBiaW9kcm9uZTogMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdiaW9kcm9uZSc6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnY2xvbmUnOlxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlRW51bVt0eXBlXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgbW92ZSh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5QZXJzb25uZWwgPSBQZXJzb25uZWw7XHJcbiIsInZhciBQZXJzb25uZWwgPSByZXF1aXJlKCcuL3BlcnNvbm5lbCcpLlBlcnNvbm5lbDtcclxudmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9yZXNvdXJjZScpLlJlc291cmNlO1xyXG52YXIgT3JkbmFuY2UgPSByZXF1aXJlKCcuL29yZG5hbmNlJykuT3JkbmFuY2U7XHJcblxyXG5cclxuY2xhc3MgUGxheWVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihzb2NrZXRJRCwgaWQsIHV1aWQpIHsgXHJcbiAgICAgICAgdGhpcy5zb2NrZXRJRCA9IHNvY2tldElEO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDsgLy9wbGF5ZXIgMSBvciBwbGF5ZXIgMjsgdGhpcyB3aWxsIGRldGVybWluZSB0aGUgc2lkZSBvZiB0aGUgYm9hcmQgYXQgY2xpZW50IHN0YXJ0LlxyXG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XHJcbiAgICAgICAgdGhpcy5wZXJzb25uZWxBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMucmVzb3VyY2VBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMub3JkbmFuY2VBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMucmVhZHlUb1N0YXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGFydGluZ0Nsb25lQ291bnQgPSA1OyAgICBcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIGFkZFBlcnNvbm5lbCh0eXBlLCB4LCB5LCB1dWlkKSB7XHJcbiAgICAgICAgaWYodHlwZSA9PSBcImNsb25lXCIgJiYgdGhpcy5nZXRQZXJzb25uZWwodHlwZSkubGVuZ3RoIDwgdGhpcy5zdGFydGluZ0Nsb25lQ291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wZXJzb25uZWxBcnJheS5wdXNoKG5ldyBQZXJzb25uZWwoJ2Nsb25lJywgeCwgeSwgdXVpZCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVBlcnNvbm5lbChwZXJzb25uZWwsIHB1cmdlQWxsKSB7XHJcbiAgICAgICAgaWYgKHB1cmdlQWxsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyc29ubmVsQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0UGVyc29ubmVsKHR5cGUpIHtcclxuICAgICAgICB2YXIgcmV0dXJuQXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWxBcnJheSkge1xyXG4gICAgICAgICAgICBpZih0aGlzLnBlcnNvbm5lbEFycmF5W2ldLnR5cGUgPT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy5wZXJzb25uZWxBcnJheVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuUGxheWVyID0gUGxheWVyO1xyXG4iLCJjbGFzcyBSZXNvdXJjZXMge1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5SZXNvdXJjZXMgPSBSZXNvdXJjZXM7XHJcbiIsInZhciBQbGF5ZXIgPSByZXF1aXJlKCcuL3BsYXllcicpLlBsYXllcjtcclxuXHJcbmNsYXNzIFNlcHRpa29uIHtcclxuICAgIFxyXG5cdGNvbnN0cnVjdG9yKGlvKSB7XHJcbiAgICAgICAgdGhpcy5pbyA9IGlvO1xyXG4gICAgICAgIHRoaXMubGFzdFBsYXllcklEID0gMDtcclxuICAgICAgICB0aGlzLnBsYXllcnNBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gMDtcclxuICAgICAgICB0aGlzLnR1cm5TdGF0ZSA9IDA7XHJcbiAgICAgICAgdGhpcy51dWlkID0gcmVxdWlyZSgndXVpZC92NCcpKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVySUQgPSB0aGlzLmxhc3RQbGF5ZXJJRDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmN1cnJlbnREaWNlVmFsdWUgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlRW51bSA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgICAgICBTRVRVUDogMCxcclxuICAgICAgICAgICAgR0FNRTogMSwgXHJcbiAgICAgICAgICAgIFBBVVNFOiAyLFxyXG4gICAgICAgICAgICBHQU1FT1ZFUjogM1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudHVyblN0YXRlRW51bSA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgICAgICBST0xMOiAwLFxyXG4gICAgICAgICAgICBNT1ZFOiAxLCBcclxuICAgICAgICAgICAgQUNUSU9OOiAyLFxyXG4gICAgICAgICAgICBFTkQ6IDNcclxuICAgICAgICB9KTsgIFxyXG5cclxuICAgICAgICB0aGlzLnRpbGVDb2x1bW5zID0gMzE7XHJcbiAgICAgICAgdGhpcy50aWxlUm93cyA9IDIxO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVGlsZUFycmF5KCk7ICAgICAgXHJcblx0fVxyXG5cclxuXHRhZGROZXdQbGF5ZXIoc29ja2V0SUQsIHV1aWQpIHtcclxuICAgICAgICB0aGlzLmxhc3RQbGF5ZXJJRCsrO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllcklEID0gdGhpcy5sYXN0UGxheWVySUQ7XHJcbiAgICAgICAgdmFyIHBsYXllciA9IG5ldyBQbGF5ZXIoc29ja2V0SUQsIHRoaXMubGFzdFBsYXllcklELCB1dWlkKTtcclxuICAgICAgICB0aGlzLnBsYXllcnNBcnJheS5wdXNoKHBsYXllcik7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICd1cGRhdGVQbGF5ZXInLCBkZXRhaWxzOiB7aWQ6IHRoaXMubGFzdFBsYXllcklEfX0sIHNvY2tldElEKTtcclxuICAgICAgICByZXR1cm4gcGxheWVyO1xyXG5cdH1cclxuXHJcbiAgICBzZXRQbGF5ZXJTdGF0ZShzdGF0ZSkge1xyXG4gICAgICAgIHN3aXRjaCAoc3RhdGUudmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAncmVzZXQnOiBcclxuICAgICAgICAgICAgICAgIHZhciBwbGF5ZXIgPSB0aGlzLmdldFBsYXllckJ5U29ja2V0SUQoc3RhdGUuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnJlbW92ZVBlcnNvbm5lbChudWxsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwicmVtb3ZlQWxsUGVyc29ubmVsXCIsIGRldGFpbHM6IHt9fSwgcGxheWVyLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzdGFydCc6IFxyXG4gICAgICAgICAgICAgICAgdmFyIHBsYXllciA9IHRoaXMuZ2V0UGxheWVyQnlTb2NrZXRJRChzdGF0ZS5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIucmVhZHlUb1N0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHZhciBvcHBvbmVudCA9IHRoaXMuZ2V0UGxheWVyT3Bwb25lbnQocGxheWVyKTtcclxuICAgICAgICAgICAgICAgIGlmKCFvcHBvbmVudCB8fCAhb3Bwb25lbnQucmVhZHlUb1N0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXIgcmVhZHkgdG8gc3RhcnQsIGJ1dCB3YWl0aW5nIG9uIG9wcG9uZW50ISBcXG5UT0RPOiBcXG4gLSBTZW5kIG1lc3NhZ2UgdG8gYm90aCB1c2VycycgSFVEcy5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllcnMgaGF2ZSBib3RoIGNvbmZpcm1lZCEgUmF0dGxlIGRlbSBib25lcy4uLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3BwQ2xvbmVzID0gb3Bwb25lbnQuZ2V0UGVyc29ubmVsKCdjbG9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50UGxheWVyQ2xvbmVzID0gcGxheWVyLmdldFBlcnNvbm5lbCgnY2xvbmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90aWZ5IGN1cnJlbnQgcGxheWVyIG9mIG9wcG9uZW50IHBvc2l0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwbGF5ZXJQYXlsb2FkID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBvcHBDbG9uZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyUGF5bG9hZC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6b3BwQ2xvbmVzW2ldLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Om9wcENsb25lc1tpXS55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXVpZDpvcHBDbG9uZXNbaV0udXVpZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHt0eXBlOlwicGVyc29ubmVsXCIsIGRldGFpbHM6cGxheWVyUGF5bG9hZH0sIHBsYXllci5zb2NrZXRJRCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGlmeSBvcHBvbmVudCBvZiBjdXJyZW50IHBsYXllcidzIHBvc2l0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHBQYXlsb2FkID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBjdXJyZW50UGxheWVyQ2xvbmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wcFBheWxvYWQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OmN1cnJlbnRQbGF5ZXJDbG9uZXNbaV0ueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6Y3VycmVudFBsYXllckNsb25lc1tpXS55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXVpZDpjdXJyZW50UGxheWVyQ2xvbmVzW2ldLnV1aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHt0eXBlOlwicGVyc29ubmVsXCIsIGRldGFpbHM6b3BwUGF5bG9hZH0sIG9wcG9uZW50LnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdCgndXBkYXRlJywge3R5cGU6XCJyZXNvdXJjZXNcIiwgYWN0aW9uOidpbml0J30pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHN0YXRlLnZhbHVlICsgXCIgaXMgbm90IGEgdmFsaWQgcGxheWVyIHN0YXRlIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxheWVyT3Bwb25lbnQocGxheWVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyc0FycmF5Lmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyc0FycmF5WzBdID09PSBwbGF5ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5WzFdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheVswXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFBsYXllckJ5VVVJRCh1dWlkKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnBsYXllcnNBcnJheSkge1xyXG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcnNBcnJheVtpXS51dWlkID09IHV1aWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXlbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0UGxheWVyQnlTb2NrZXRJRChpZCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXJzQXJyYXlbaV0uc29ja2V0SUQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheVtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGV4aXN0c1BsYXllclVVSUQodXVpZCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXJzQXJyYXlbaV0udXVpZCA9PSB1dWlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2xpY2tlZChkYXRhKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9jaGVjayBnYW1lIHN0YXRlXHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmdhbWVTdGF0ZSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIHRoaXMuZ2FtZVN0YXRlRW51bS5TRVRVUDpcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHRpbGUgaXMgdHlwZTogc3VyZmFjZSwgYmF0dGxlLCBhcm1vcnksIGxvY2ssIG9yIHByb2R1Y3Rpb25cclxuICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgdGlsZSBiZWxvbmdzIHRvIHBsYXllcidzIHRlYW1cclxuICAgICAgICAgICAgICAgIC8vYWRkIGNsb25lIHRvIHBsYXllcidzIHBlcnNvbm5lbFxyXG4gICAgICAgICAgICAgICAgdmFyIHBsYXllciA9IHRoaXMuZ2V0UGxheWVyQnlTb2NrZXRJRChkYXRhLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhY2VDbG9uZShwbGF5ZXIsIGRhdGEueCwgZGF0YS55KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIHRoaXMuZ2FtZVN0YXRlRW51bS5HQU1FOlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vY2hlY2sgdHVyblN0YXRlXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHBsYWNlQ2xvbmUocGxheWVyLCB4LCB5KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodHlwZW9mKHBsYXllcikgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkVGlsZSA9IHRoaXMuZ2V0VGlsZSh4LCB5KTtcclxuICAgICAgICAgICAgaWYocGxheWVyLmlkICE9IHNlbGVjdGVkVGlsZS5vd25lcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihzZWxlY3RlZFRpbGUudHlwZSA9PSBcImxvY2tcIiB8fCBzZWxlY3RlZFRpbGUudHlwZSA9PSBcImJhdHRsZVwiIHx8IHNlbGVjdGVkVGlsZS50eXBlID09IFwiYXJtb3J5XCIgfHwgc2VsZWN0ZWRUaWxlLnR5cGUgPT0gXCJwcm9kdWN0aW9uXCIgfHwgc2VsZWN0ZWRUaWxlLnR5cGUgPT0gXCJzdXJmYWNlXCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciB1dWlkID0gcmVxdWlyZSgndXVpZC92NCcpKCk7XHJcbiAgICAgICAgICAgICAgICBpZihwbGF5ZXIuYWRkUGVyc29ubmVsKCdjbG9uZScsIHgsIHksIHV1aWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJhZGRDbG9uZVwiLCBkZXRhaWxzOiB7eDp4LCB5OnksIHBsYXllcklEOiBwbGF5ZXIuaWQsIHV1aWQ6dXVpZH19LCBwbGF5ZXIuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBsYXllci5nZXRQZXJzb25uZWwoJ2Nsb25lJykubGVuZ3RoID09IHBsYXllci5zdGFydGluZ0Nsb25lQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZW5kaW5nIG1vZGFsIHJlcXVlc3RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgncmVxdWVzdCcsIHtjYWxsYmFjazpcIm1vZGFsXCIsIGRldGFpbHM6IHt0eXBlOlwiYXNrU3RhcnRcIn19LCBwbGF5ZXIuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1I6IHBsYXllciBub3QgZm91bmQhJyk7ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlVGlsZUFycmF5KCkge1xyXG4gICAgICAgIHZhciB0aWxlSlNPTiA9IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy90aWxlRGV0YWlsLmpzb24nKTtcclxuXHJcbiAgICAgICAgZm9yKHZhciBjID0gMDsgYyA8IHRoaXMudGlsZUNvbHVtbnM7IGMrKykge1xyXG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IodmFyIHIgPSAwOyByIDwgdGhpcy50aWxlUm93czsgcisrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjXVtyXSA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGlsZUpTT04pIHtcclxuICAgICAgICAgICAgaWYgKCF0aWxlSlNPTi5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBvYmogPSB0aWxlSlNPTltrZXldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xyXG4gICAgICAgICAgICAgICAgLy8gc2tpcCBsb29wIGlmIHRoZSBwcm9wZXJ0eSBpcyBmcm9tIHByb3RvdHlwZVxyXG4gICAgICAgICAgICAgICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciBsb2NhdGlvbkNvdW50ID0gb2JqW3Byb3BdLmxvY2F0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvY2F0aW9uQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb29yZHMgPSBvYmpbcHJvcF0ubG9jYXRpb25zW2ldLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IGNvb3Jkc1swXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IGNvb3Jkc1sxXTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5kYW1hZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0ub2NjdXBpZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50eXBlID0gb2JqW3Byb3BdLnR5cGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4IDwgOSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5vd25lciA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh4ID4gMjEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0ub3duZXIgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy50aWxlQXJyYXlbeF1beV0gIT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLm5hbWUgPSBvYmpbcHJvcF0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHggKyBcIjpcIiArIHkgKyBcIiBub3QgZm91bmQhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW3Byb3BdLnByb3BlcnRpZXMgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV1bJ3RpbGVQcm9wZXJ0aWVzJ10gPSBvYmpbcHJvcF0ucHJvcGVydGllcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRpbGUoeCwgeSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVBcnJheVt4XVt5XTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcm9sbERpY2UoZGF0YSkge1xyXG4gICAgICAgIGlmKHRoaXMudHVyblN0YXRlID09IHRoaXMudHVyblN0YXRlRW51bS5ST0xMICYmIHRoaXMuZ2FtZVN0YXRlID09IHRoaXMuZ2FtZVN0YXRlRW51bS5HQU1FKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERpY2VWYWx1ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpICsgMTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJkaWNlUm9sbGVkXCIsIGRldGFpbHM6IHt2YWx1ZTp0aGlzLmN1cnJlbnREaWNlVmFsdWV9fSwgZGF0YS5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnbG9nJywge21zZzpcIlBsYXllciByb2xsZWQgXCIgKyB0aGlzLmN1cnJlbnREaWNlVmFsdWV9KTtcclxuICAgICAgICAgICAgdGhpcy50dXJuU3RhdGUrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldChkYXRhKSB7XHJcbiAgICAgICAgaWYodHlwZW9mKGRhdGEucHJvcGVydHkpID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVzcG9uc2UnLCB7ZGV0YWlsczp0aGlzW2RhdGEucHJvcGVydHldfSwgZGF0YS5zb2NrZXRJRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBlbWl0KG1zZywgZGF0YSwgc29ja2V0SUQpIHtcclxuICAgICAgICBpZihtc2cgPT0gXCJyZXNwb25zZVwiIHx8IG1zZyA9PSBcInJlcXVlc3RcIiB8fCBtc2cgPT0gXCJ1cGRhdGVcIikge1xyXG4gICAgICAgICAgICBpZih0eXBlb2Yoc29ja2V0SUQpID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBTb2NrZXRJRCBmb3VuZCFcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pby5zb2NrZXRzLmNvbm5lY3RlZFtzb2NrZXRJRF0uZW1pdChtc2csIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlmKG1zZyA9PSBcImFjdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZihzb2NrZXRJRCkgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIFNvY2tldElEIGZvdW5kIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlvLnNvY2tldHMuY29ubmVjdGVkW3NvY2tldElEXS5lbWl0KG1zZywgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKG1zZyA9PSBcImxvZ1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW8uc29ja2V0cy5lbWl0KG1zZywgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBicm9hZGNhc3QobXNnLCBkYXRhKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnBsYXllcnNBcnJheSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQobXNnLCBkYXRhLCB0aGlzLnBsYXllcnNBcnJheVtpXS5zb2NrZXRJRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuU2VwdGlrb24gPSBTZXB0aWtvbjtcclxuIiwiaW1wb3J0IFNlcHRpa29uIGZyb20gJy4uL3ByZWZhYnMvc2VwdGlrb24nO1xyXG5cclxuY2xhc3MgQm9vdCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHByZWxvYWQoKSB7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3ByZWxvYWRlcicsICdhc3NldHMvcHJlbG9hZGVyLmdpZicpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5nYW1lLmlucHV0Lm1heFBvaW50ZXJzID0gMTtcclxuICAgIHRoaXMuZ2FtZS5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xyXG4gICAgICB0aGlzLmdhbWUuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5SRVNJWkU7XHJcbiAgICAvL3NldHVwIGRldmljZSBzY2FsaW5nXHJcbiAgICBpZiAoIXRoaXMuZ2FtZS5kZXZpY2UuZGVza3RvcCkge1xyXG4gICAgICB0aGlzLmdhbWUuc2NhbGUucGFyZW50SXNXaW5kb3cgPSB0cnVlO1xyXG4gICAgICB0aGlzLmdhbWUuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5SRVNJWkU7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5taW5XaWR0aCA9ICA0ODA7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5taW5IZWlnaHQgPSAyNjA7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5mb3JjZU9yaWVudGF0aW9uKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5pdEdsb2JhbFZhcmlhYmxlcygpO1xyXG4gICAgXHJcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ3ByZWxvYWRlcicpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEdsb2JhbFZhcmlhYmxlcygpe1xyXG4gICAgdGhpcy5nYW1lLmdsb2JhbCA9IHtcclxuICAgICAgc2NvcmU6IDAsXHJcbiAgICAgIGxhc3REaWNlUm9sbDogMCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9vdDtcclxuIiwiXHJcbmNsYXNzIEdhbWUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGNyZWF0ZSgpIHtcclxuICBcclxuICAgIC8vdGhpcy5nYW1lLmlucHV0Lm9uRG93bi5hZGQodGhpcy50b2dnbGVGdWxsc2NyZWVuLCB0aGlzKTtcclxuICAgIHRoaXMuZ2FtZS5zdGFnZS5kaXNhYmxlVmlzaWJpbGl0eUNoYW5nZSA9IHRydWU7XHJcbiAgICBcclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xyXG4gICAgdGhpcy5nYW1lLm1vZGFsID0gbmV3IGdhbWVNb2RhbCh0aGlzLmdhbWUpO1xyXG4gICAgdGhpcy5jcmVhdGVNb2RhbHMoKTtcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLDAsJ2JhY2tncm91bmQnKTtcclxuICAgIHRoaXMuYmFja2dyb3VuZC5hbmNob3Iuc2V0VG8oMC41LDAuNSk7XHJcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5jZW50ZXJYID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclg7XHJcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5jZW50ZXJZID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKHRoaXMuYmFja2dyb3VuZCk7XHJcblxyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLmNyZWF0ZVRpbGVBcnJheSgzMSwgMjEsIHt4OjAtdGhpcy5iYWNrZ3JvdW5kLndpZHRoLzIsIHk6MC10aGlzLmJhY2tncm91bmQuaGVpZ2h0LzJ9KTtcclxuXHJcbiAgICB0aGlzLmRpY2UgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgxMDAsMTAwLCdkaWNlJyk7XHJcbiAgICB0aGlzLmRpY2Uuc2NhbGUuc2V0VG8oMC4yNSk7XHJcbiAgICB0aGlzLmRpY2UuZnJhbWUgPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxKS0xO1xyXG5cclxuICAgIHRoaXMucmVmcmVzaEJvYXJkKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgY3JlYXRlTW9kYWxzKCkge1xyXG4gICAgICB0aGlzLmdhbWUubW9kYWwuY3JlYXRlTW9kYWwoXHJcbiAgICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwiYXNrU3RhcnRcIixcclxuICAgICAgICBpbmNsdWRlQmFja2dyb3VuZDogdHJ1ZSxcclxuICAgICAgICBtb2RhbENsb3NlT25JbnB1dDogdHJ1ZSxcclxuICAgICAgICBpdGVtc0FycjogW3tcclxuICAgICAgICAgICAgdHlwZTogXCJncmFwaGljc1wiLFxyXG4gICAgICAgICAgICBncmFwaGljQ29sb3I6IFwiMHhmZmZmZmZcIixcclxuICAgICAgICAgICAgZ3JhcGhpY1dpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgIGdyYXBoaWNIZWlnaHQ6IDMwMCxcclxuICAgICAgICAgICAgZ3JhcGhpY1JhZGl1czogNDBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiBcIkFyZSB5b3UgaGFwcHkgd2l0aFxcbiB0aGF0IGNsb25lIGxheW91dD9cIixcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIweDFlMWUxZVwiLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiAtNTBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcclxuICAgICAgICAgICAgY29udGVudDogXCJ0ZXh0X3llc1wiLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiAxMDAsXHJcbiAgICAgICAgICAgIG9mZnNldFg6IC04MCxcclxuICAgICAgICAgICAgY29udGVudFNjYWxlOiAwLjYsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUubW9kYWwuaGlkZU1vZGFsKFwiYXNrU3RhcnRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6J3NldFBsYXllclN0YXRlJywgdmFsdWU6J3N0YXJ0J30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwidGV4dF9ub1wiLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiAxMDAsXHJcbiAgICAgICAgICAgIG9mZnNldFg6IDgwLFxyXG4gICAgICAgICAgICBjb250ZW50U2NhbGU6IDAuNixcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5tb2RhbC5oaWRlTW9kYWwoXCJhc2tTdGFydFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDonc2V0UGxheWVyU3RhdGUnLCB2YWx1ZToncmVzZXQnfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2hCb2FyZCgpIHtcclxuXHJcbiAgICB2YXIgc2NhbGUgPSB3aW5kb3cuaW5uZXJXaWR0aC90aGlzLmJhY2tncm91bmQuaGVpZ2h0O1xyXG4gICAgaWYoc2NhbGUgPiAxLjkpIHtcclxuICAgICAgICBzY2FsZSA9IDEuOTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuc2NhbGUuc2V0VG8oc2NhbGUpO1xyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAueCA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYO1xyXG5cclxuICAgIGlmKHRoaXMuZ2FtZS5zZXB0aWtvbi5wbGF5ZXIuaWQgPT0gMSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFuZ2xlID0gLTkwOyBcclxuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWTsgLy8gQ2VudGVyZWQgb24gU2VwdGlrb24gTG9nb1xyXG4gICAgICAgIC8vdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZICsgKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gb3Bwb25lbnQncyBzaWRlXHJcbiAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZIC0gKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gdGhpcyBwbGF5ZXIncyBzaWRlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFuZ2xlID0gOTA7IFxyXG4gICAgICAgIC8vdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZOyAvLyBDZW50ZXJlZCBvbiBTZXB0aWtvbiBMb2dvXHJcbiAgICAgICAgLy90aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgKyAoKHRoaXMuYmFja2dyb3VuZC53aWR0aCpzY2FsZSktd2luZG93LmlubmVySGVpZ2h0KS8yOyAvLyBDZW50ZXJlZCBvbiBvcHBvbmVudCdzIHNpZGVcclxuICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgLSAoKHRoaXMuYmFja2dyb3VuZC53aWR0aCpzY2FsZSktd2luZG93LmlubmVySGVpZ2h0KS8yOyAvLyBDZW50ZXJlZCBvbiB0aGlzIHBsYXllcidzIHNpZGVcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBcclxuICB1cGRhdGUoKSB7XHJcbiAgICAvLyAgIHRoaXMuZGljZS5mcmFtZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpICsgMTtcclxuICAgIC8vIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdNb3VzZScsIDcwMCwgMzIpO1xyXG4gICAgXHJcbiAgICAvLyB0aGlzLmdhbWUuZGVidWcudGV4dCgnTW91c2UgWDogJyArIHRoaXMuZ2FtZS5pbnB1dC54LCA3MDAsIDY0KTtcclxuICAgIC8vIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdNb3VzZSBZOiAnICsgdGhpcy5nYW1lLmlucHV0LnksIDcwMCwgOTIpO1xyXG4gIH1cclxuICBcclxuICByZW5kZXIgKCkge1xyXG4gICAgICB0aGlzLnJlZnJlc2hCb2FyZCgpO1xyXG4gICAgICAvKlxyXG5cclxuICAgIHZhciB4ID0gMzI7XHJcbiAgICB2YXIgeSA9IDA7XHJcbiAgICB2YXIgeWkgPSAzMjtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdWaWV3cG9ydCcsIHgsIHkgKz0geWkpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdWaWV3cG9ydCBXaWR0aDogJyArIHRoaXMuZ2FtZS5zY2FsZS52aWV3cG9ydFdpZHRoLCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd3aW5kb3cuaW5uZXJXaWR0aDogJyArIHdpbmRvdy5pbm5lcldpZHRoLCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd3aW5kb3cub3V0ZXJXaWR0aDogJyArIHdpbmRvdy5vdXRlcldpZHRoLCB4LCB5ICs9IHlpKTtcclxuXHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnVmlld3BvcnQgSGVpZ2h0OiAnICsgdGhpcy5nYW1lLnNjYWxlLnZpZXdwb3J0SGVpZ2h0LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd3aW5kb3cuaW5uZXJIZWlnaHQ6ICcgKyB3aW5kb3cuaW5uZXJIZWlnaHQsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3dpbmRvdy5vdXRlckhlaWdodDogJyArIHdpbmRvdy5vdXRlckhlaWdodCwgeCwgeSArPSB5aSk7XHJcblxyXG4gICAgLy8gIERldmljZTogSG93IHRvIGdldCBkZXZpY2Ugc2l6ZS5cclxuXHJcbiAgICAvLyAgVXNlIHdpbmRvdy5zY3JlZW4ud2lkdGggZm9yIGRldmljZSB3aWR0aCBhbmQgd2luZG93LnNjcmVlbi5oZWlnaHQgZm9yIGRldmljZSBoZWlnaHQuIFxyXG4gICAgLy8gIC5hdmFpbFdpZHRoIGFuZCAuYXZhaWxIZWlnaHQgZ2l2ZSB5b3UgdGhlIGRldmljZSBzaXplIG1pbnVzIFVJIHRhc2tiYXJzLiAoVHJ5IG9uIGFuIGlQaG9uZS4pIFxyXG4gICAgLy8gIERldmljZSBzaXplIGlzIHN0YXRpYyBhbmQgZG9lcyBub3QgY2hhbmdlIHdoZW4gdGhlIHBhZ2UgaXMgcmVzaXplZCBvciByb3RhdGVkLlxyXG5cclxuICAgIHggPSAzNTA7XHJcbiAgICB5ID0gMDtcclxuXHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnQm9hcmQgR3JvdXAnLCB4LCB5ICs9IHlpKTtcclxuXHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5nYW1lLmJvYXJkR3JvdXAueDogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLngsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnk6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC55LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aDogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoLCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC5oZWlnaHQ6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC5oZWlnaHQsIHgsIHkgKz0geWkpO1xyXG5cclxuICAgIHggPSAzMjtcclxuICAgIHkgPSAzMDA7XHJcblxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ0JhY2tncm91bmQgRGV0YWlsJywgeCwgeSArPSB5aSk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC54OiAnICsgdGhpcy5iYWNrZ3JvdW5kLngsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC55OiAnICsgdGhpcy5iYWNrZ3JvdW5kLnksIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC53aWR0aDogJyArIHRoaXMuYmFja2dyb3VuZC53aWR0aCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLmhlaWdodDogJyArIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC5zY2FsZTogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnNjYWxlLngsIHgsIHkgKz0geWkpO1xyXG4gICAgKi9cclxuICAgIH1cclxuICAgIFxyXG4gIHRvZ2dsZUZ1bGxzY3JlZW4oKSB7XHJcbiAgICBpZih0aGlzLmdhbWUuc2NhbGUuaXNGdWxsU2NyZWVuKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnN0b3BGdWxsU2NyZWVuKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5zdGFydEZ1bGxTY3JlZW4oZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcclxuIiwiY2xhc3MgTWVudSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIC8vYWRkIGJhY2tncm91bmQgaW1hZ2VcclxuICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwnYmFja2dyb3VuZCcpO1xyXG4gICAgdGhpcy5iZ1JhdGlvID0gdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUud2lkdGggLyB0aGlzLmJhY2tncm91bmQudGV4dHVyZS5oZWlnaHQ7XHJcbiAgICB0aGlzLndvcmxkUmF0aW8gPSB0aGlzLmdhbWUud29ybGQud2lkdGggLyB0aGlzLmdhbWUud29ybGQuaGVpZ2h0O1xyXG4gICAgaWYgKCgodGhpcy53b3JsZFJhdGlvIC0gdGhpcy5iZ1JhdGlvKSAvIDIgKiB0aGlzLmdhbWUud29ybGQud2lkdGgpID4gMCkge1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQvdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUuaGVpZ2h0KnRoaXMuYmFja2dyb3VuZC50ZXh0dXJlLndpZHRoO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQgPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC54ID0gKHRoaXMuZ2FtZS53b3JsZC53aWR0aCAtIHRoaXMuYmFja2dyb3VuZC53aWR0aCkgLyAyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQud2lkdGggPSB0aGlzLmdhbWUud29ybGQud2lkdGg7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aC90aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aCp0aGlzLmJhY2tncm91bmQudGV4dHVyZS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnkgPSAodGhpcy5nYW1lLndvcmxkLmhlaWdodCAtIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQpIC8gMjtcclxuICAgIH1cclxuXHJcbiAgICAvL2FkZCBpbnRybyB0ZXh0XHJcbiAgICB0aGlzLmdhbWVvdmVyVGV4dCA9IHRoaXMuYWRkLnRleHQodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsdGhpcy5nYW1lLndvcmxkLmNlbnRlclksIFwiU2NvcmUgPSBcIit0aGlzLmdhbWUuZ2xvYmFsLnNjb3JlLCB7XHJcbiAgICAgIGZvbnQ6ICc0MnB4IEFyaWFsJywgZmlsbDogJyNmZmZmZmYnLCBhbGlnbjogJ2NlbnRlcidcclxuICAgIH0pO1xyXG4gICAgdGhpcy5nYW1lb3ZlclRleHQuYW5jaG9yLnNldCgwLjUpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub25Eb3duLmFkZCh0aGlzLm9uSW5wdXREb3duLCB0aGlzKTtcclxuXHJcbiAgICAvL3ByZXZlbnQgYWNjaWRlbnRhbCBjbGljay10aHJ1IGJ5IG5vdCBhbGxvd2luZyBzdGF0ZSB0cmFuc2l0aW9uIGZvciBhIHNob3J0IHRpbWVcclxuICAgIHRoaXMuY2FuQ29udGludWVUb05leHRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChQaGFzZXIuVGltZXIuU0VDT05EICogMC41LCBmdW5jdGlvbigpeyB0aGlzLmNhbkNvbnRpbnVlVG9OZXh0U3RhdGUgPSB0cnVlOyB9LCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLnNhdmVWYXJzVG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgIHRoaXMucmVzZXRHbG9iYWxWYXJpYWJsZXMoKTtcclxuICB9XHJcblxyXG4gIHNhdmVWYXJzVG9Mb2NhbFN0b3JhZ2UoKXtcclxuICAgIHZhciBtYXggPSBsb2NhbFN0b3JhZ2UubWF4U2NvcmUgfHwgMDsgLy9kZWZhdWx0IHZhbHVlIG9mIDAgaXMgaXQgZG9lcyBub3QgZXhpc3RcclxuICAgIGlmICh0aGlzLmdhbWUuZ2xvYmFsLnNjb3JlID4gbWF4KXsgbG9jYWxTdG9yYWdlLm1heFNjb3JlID0gdGhpcy5nYW1lLmdsb2JhbC5zY29yZTsgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRHbG9iYWxWYXJpYWJsZXMoKXtcclxuICAgIHRoaXMuZ2FtZS5nbG9iYWwuc2NvcmUgPSAwO1xyXG4gIH1cclxuICB1cGRhdGUoKSB7fVxyXG5cclxuICBvbklucHV0RG93biAoKSB7XHJcbiAgICBpZih0aGlzLmNhbkNvbnRpbnVlVG9OZXh0U3RhdGUpe1xyXG4gICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ21lbnUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51O1xyXG4iLCJjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmFzc2V0ID0gbnVsbDtcclxuICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByZWxvYWQoKSB7XHJcbiAgICAvL3NldHVwIGxvYWRpbmcgYmFyXHJcbiAgICB0aGlzLmFzc2V0ID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53aWR0aCAqIDAuNSAtIDExMCwgdGhpcy5nYW1lLmhlaWdodCAqIDAuNSAtIDEwLCAncHJlbG9hZGVyJyk7XHJcbiAgICB0aGlzLmxvYWQuc2V0UHJlbG9hZFNwcml0ZSh0aGlzLmFzc2V0KTtcclxuICAgIFxyXG4gICAgLy9TZXR1cCBsb2FkaW5nIGFuZCBpdHMgZXZlbnRzXHJcbiAgICB0aGlzLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLm9uTG9hZENvbXBsZXRlLCB0aGlzKTtcclxuICAgIHRoaXMubG9hZFJlc291cmNlcygpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFJlc291cmNlcygpIHtcclxuICAgICAgXHJcbiAgICAvL01FTlUgUkVTT1VSQ0VTXHJcbiAgICAvL21lbnUgYmFja2dyb3VuZFxyXG4gICAgLy90ZXh0IGltYWdlc1xyXG4gICAgLy9tdXNpYyBmaWxlcyA/XHJcbiAgICBcclxuICAgIC8vbG9hZCBnYW1lIGRhdGFcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmpzb24oJ3RpbGVEZXRhaWwnLCAnYXNzZXRzL3RpbGVEZXRhaWwuanNvbicpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuanNvbignd2FsbEdyaWQnLCAnYXNzZXRzL3dhbGxHcmlkLmpzb24nKTtcclxuICBcclxuICAgIC8vR0FNRSBSRVNPVVJDRVNcclxuICAgIC8vZ2FtZSBib2FyZCBiYWNrZ3JvdW5kXHJcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnYmFja2dyb3VuZCcsJ2Fzc2V0cy9tZWRpdW1fYm9hcmQucG5nJyk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnZGljZScsJ2Fzc2V0cy9kaWNlLnBuZycsIDEyOCwgMTk0LCAxMCk7XHJcbiAgICBcclxuICAgIC8vIG1vZGFsIGltYWdlc1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfeWVzJywnYXNzZXRzL3RleHRfeWVzLnBuZycpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfbm8nLCdhc3NldHMvdGV4dF9uby5wbmcnKTtcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X2dvJywnYXNzZXRzL3RleHRfZ28ucG5nJyk7XHJcblxyXG4gICAgLy9wbGF5ZXIgdG9rZW5zIHNwcml0ZXNoZWV0c1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ2Nsb25lJywgJ2Fzc2V0cy9jbG9uZS5wbmcnLDExMCwxNjgpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuYXRsYXMoJ2Jvb20nLCAnYXNzZXRzL2Jvb20ucG5nJywgJ2Fzc2V0cy9ib29tLmpzb24nLCBQaGFzZXIuTG9hZGVyLlRFWFRVUkVfQVRMQVNfSlNPTl9IQVNIKTtcclxuXHJcbiAgICAvL2F1ZGlvIGZpbGVzIFxyXG4gICAgXHJcbiAgICAvL3RoaXMuZ2FtZS5sb2FkLmltYWdlKCdjcm9zc2hhaXJzJywgJ2Fzc2V0cy9jcm9zc2hhaXJfcmVkX3NtYWxsLnBuZycpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfZ28nLCAnYXNzZXRzL3RleHRfZ28ucG5nJyk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9yZWFkeScsICdhc3NldHMvdGV4dF9yZWFkeS5wbmcnKTtcclxuXHJcbiAgICAvL3RoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCd0YXJnZXQnLCAnYXNzZXRzL3RhcmdldC5wbmcnLDEyOC42NiwxMjgpO1xyXG5cclxuICAgIC8vdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ2d1bnNob3QnLCdhc3NldHMvZ3Vuc2hvdC53YXYnKTtcclxuICAgIC8vdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ2RpbmcnLCdhc3NldHMvZGluZy53YXYnKTtcclxuICB9XHJcblxyXG4gIG9uTG9hZENvbXBsZXRlKCkge1xyXG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdzZXR1cCcpO1xyXG4gICAgLy90aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ2dhbWUnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZWxvYWRlcjtcclxuIiwiY2xhc3MgU2V0dXAgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiB9XHJcbiAgXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5nYW1lLm5hbWUgPSBcInVzZXJcIjtcclxuXHJcbiAgICB0aGlzLmdhbWUuc3RhZ2UuZGlzYWJsZVZpc2liaWxpdHlDaGFuZ2UgPSB0cnVlO1xyXG4gICAgdGhpcy5nYW1lLm1vZGFsID0gbmV3IGdhbWVNb2RhbCh0aGlzLmdhbWUpO1xyXG4gICAgdGhpcy5jcmVhdGVNb2RhbHMoKTtcclxuICAgIHRoaXMuZ2FtZS5tb2RhbC5zaG93TW9kYWwoJ3VzZXJuYW1lJyk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmFkZENhbGxiYWNrcyh0aGlzLCBudWxsLCBudWxsLCB0aGlzLmtleVByZXNzKTtcclxuICAgIHRoaXMuYmtzcCA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleWJvYXJkLkJBQ0tTUEFDRSk7XHJcbiAgICB0aGlzLmJrc3Aub25Eb3duLmFkZCh0aGlzLmtleVByZXNzLCB0aGlzKTtcclxuICAgIHRoaXMuZW50ZXIgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5LZXlib2FyZC5FTlRFUik7XHJcbiAgICB0aGlzLmVudGVyLm9uRG93bi5hZGQodGhpcy5rZXlQcmVzcywgdGhpcyk7XHJcbiAgICB0aGlzLmdhbWUuY2xpZW50LmFza05ld1BsYXllcigpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi5zZXR1cCgpO1xyXG59XHJcblxyXG5rZXlQcmVzcyhjaGFyKSB7XHJcblxyXG4gICAgaWYodHlwZW9mKGNoYXIpID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgaWYgKGNoYXIuZXZlbnQuY29kZSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyLmV2ZW50LmNvZGUgPT09IFwiQmFja3NwYWNlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLm5hbWUgPSB0aGlzLmdhbWUubmFtZS5zdWJzdHJpbmcoMCwgdGhpcy5nYW1lLm5hbWUubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY2hhciA9PSBcIiBcIikge1xyXG4gICAgICAgICAgICBjaGFyID0gXCJfXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZS5uYW1lICs9IGNoYXI7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdhbWUubW9kYWwudXBkYXRlTW9kYWxWYWx1ZSh0aGlzLmdhbWUubmFtZSwgJ3VzZXJuYW1lJywgNCk7XHJcbn1cclxuICBcclxuICBjcmVhdGVNb2RhbHMoKSB7XHJcbiAgXHJcbiAgICAvLyBTdGFydCBHYW1lXHJcbiAgICB0aGlzLmdhbWUubW9kYWwuY3JlYXRlTW9kYWwoXHJcbiAgICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwidXNlcm5hbWVcIixcclxuICAgICAgICBpbmNsdWRlQmFja2dyb3VuZDogdHJ1ZSxcclxuICAgICAgICBtb2RhbENsb3NlT25JbnB1dDogZmFsc2UsXHJcbiAgICAgICAgaXRlbXNBcnI6IFt7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ3JhcGhpY3NcIixcclxuICAgICAgICAgICAgZ3JhcGhpY0NvbG9yOiBcIjB4ZmZmZmZmXCIsXHJcbiAgICAgICAgICAgIGdyYXBoaWNXaWR0aDogMzAwLFxyXG4gICAgICAgICAgICBncmFwaGljSGVpZ2h0OiAzMDAsXHJcbiAgICAgICAgICAgIGdyYXBoaWNSYWRpdXM6IDQwXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgY29udGVudDogXCJUeXBlIGEgdXNlcm5hbWUsXFxudGhlbiBoaXQgPEVOVEVSPlxcblxcbihtYXggb2YgMjUgY2hhcmFjdGVycylcIixcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIweDFlMWUxZVwiLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiAtNTBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmdhbWUubmFtZSxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIweDFlMWUxZVwiLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiA1MFxyXG4gICAgICAgIH0sIF1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHVwO1xyXG4iXX0=
