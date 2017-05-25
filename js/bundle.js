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
            if (data.type == "dice") {
                console.log("update dice?");
                this.septikon.game.dice.setValue(data.value);
            }
            console.log('UPDATE:');
            console.log(data.type);
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

    //set click event
    _this.inputEnabled = false;
    _this.events.onInputDown.add(_this.clicked, _this);

    //set size
    _this.width = 50;
    _this.scale.y = Math.abs(_this.scale.x);
    _this.filters = [_this.game.add.filter('Gray')];
    _this.alpha = 0.5;

    _this.value = 10;
    _this.frame = _this.value - 1;
    return _this;
  }

  _createClass(Dice, [{
    key: 'clicked',
    value: function clicked() {
      this.game.client.sendInput({ event: 'diceClicked' });
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.alpha = 1;
      this.filters = null;
      this.inputEnabled = true;
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.alpha = 0.5;
      this.filters = [this.game.add.filter('Gray')];
      this.inputEnabled = false;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.value = value;
      this.frame = value - 1;
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
            this.game.dice.setValue(details.value);
        }
    }, {
        key: 'offerDice',
        value: function offerDice() {
            this.game.dice.enable();
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

        this.activePlayer = null;
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
                        return;
                    } else {
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

                        this.activePlayer = this.getRandomPlayer();
                        this.emit('action', { callback: "offerDice", details: {} }, this.activePlayer.socketID);
                        this.gameState++;
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
        key: 'getRandomPlayer',
        value: function getRandomPlayer() {
            return this.playersArray[Math.floor(Math.random() * 2)];
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
                            this.emit('request', { callback: "modal", details: { type: "askStart" } }, player.socketID);
                        }
                    }
                }
            } else {
                console.error('ERROR: player not found!');
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
            if (this.turnState == this.turnStateEnum.ROLL && this.gameState == this.gameStateEnum.GAME && this.activePlayer.socketID == data.socketID) {
                this.currentDiceValue = Math.floor(Math.random() * 6) + 1;
                this.emit('action', { callback: "diceRolled", details: { value: this.currentDiceValue } }, data.socketID);
                this.emit('update', { type: "dice", details: { value: this.currentDiceValue } }, this.getPlayerOpponent(this.activePlayer).socketID);
                console.log("TODO: \n - Calculate legal personnel selections\n - Calculate legal ordnance selections\n - emit action to offer clones\n - Calculate legal personnel selections");
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
      this.game.time.advancedTiming = true;
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

var _dice = require('../prefabs/dice');

var _dice2 = _interopRequireDefault(_dice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            this.game.hudGroup = this.game.add.group();

            this.game.modal = new gameModal(this.game);
            this.createModals();

            this.background = this.game.add.sprite(0, 0, 'background');
            this.background.anchor.setTo(0.5, 0.5);
            this.game.boardGroup.centerX = this.game.world.centerX;
            this.game.boardGroup.centerY = this.game.world.centerY;

            this.game.dice = new _dice2.default(this.game, 50, 40);
            this.game.dice.scale.setTo(0.25);

            this.game.add.existing(this.game.dice);

            this.game.hudGroup.add(this.game.dice);
            this.game.boardGroup.add(this.background);

            this.game.septikon.createTileArray(31, 21, { x: 0 - this.background.width / 2, y: 0 - this.background.height / 2 });

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

},{"../prefabs/dice":10}],24:[function(require,module,exports){
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
      //  Load filter scripts
      this.game.load.script('gray', 'https://cdn.rawgit.com/photonstorm/phaser/master/v2/filters/Gray.js');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvdGlsZURldGFpbC5qc29uIiwibm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvdjQuanMiLCJzcmNcXG1haW4uanMiLCJzcmNcXG1vZGFsLmpzIiwic3JjXFxwcmVmYWJzXFxjbGllbnQuanMiLCJzcmNcXHByZWZhYnNcXGNsb25lLmpzIiwic3JjXFxwcmVmYWJzXFxjcm9zc2hhaXJzLmpzIiwic3JjXFxwcmVmYWJzXFxkaWNlLmpzIiwic3JjXFxwcmVmYWJzXFxtYXN0ZXIuanMiLCJzcmNcXHByZWZhYnNcXG9yZG5hbmNlLmpzIiwic3JjXFxwcmVmYWJzXFxwZXJzb25uZWwuanMiLCJzcmNcXHByZWZhYnNcXHJlc291cmNlcy5qcyIsInNyY1xccHJlZmFic1xcc2VwdGlrb24uanMiLCJzcmNcXHByZWZhYnNcXHRlYW0uanMiLCJzcmNcXHNlcnZlclxcb3JkbmFuY2UuanMiLCJzcmNcXHNlcnZlclxccGVyc29ubmVsLmpzIiwic3JjXFxzZXJ2ZXJcXHBsYXllci5qcyIsInNyY1xcc2VydmVyXFxyZXNvdXJjZS5qcyIsInNyY1xcc2VydmVyXFxzZXB0aWtvbi5qcyIsInNyY1xcc3RhdGVzXFxib290LmpzIiwic3JjXFxzdGF0ZXNcXGdhbWUuanMiLCJzcmNcXHN0YXRlc1xcZ2FtZW92ZXIuanMiLCJzcmNcXHN0YXRlc1xccHJlbG9hZGVyLmpzIiwic3JjXFxzdGF0ZXNcXHNldHVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QU5WLGlCQWJPO0FBSlYsYUFESjtBQTRCRDs7OztFQXpFaUIsT0FBTyxLOztrQkE0RVosSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cz17XHJcblx0XCJ0aWxlUHJvcGVydHlBcnJheVwiOiB7XHJcblx0XHRcIm90aGVyU3BhY2VcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDAwXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInNwYWNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInNwYWNlXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjksMFwiLCBcIjksMVwiLCBcIjksMlwiLCBcIjksM1wiLCBcIjksNFwiLCBcIjksNVwiLCBcIjksNlwiLCBcIjksN1wiLCBcIjksOFwiLCBcIjksOVwiLCBcIjksMTBcIiwgXCI5LDExXCIsIFwiOSwxMlwiLCBcIjksMTNcIiwgXCI5LDE0XCIsIFwiOSwxNVwiLCBcIjksMTZcIiwgXCI5LDE3XCIsIFwiOSwxOFwiLCBcIjksMTlcIiwgXCI5LDIwXCIsIFwiMTAsMFwiLCBcIjEwLDFcIiwgXCIxMCwyXCIsIFwiMTAsM1wiLCBcIjEwLDRcIiwgXCIxMCw1XCIsIFwiMTAsNlwiLCBcIjEwLDdcIiwgXCIxMCw4XCIsIFwiMTAsOVwiLCBcIjEwLDEwXCIsIFwiMTAsMTFcIiwgXCIxMCwxMlwiLCBcIjEwLDEzXCIsIFwiMTAsMTRcIiwgXCIxMCwxNVwiLCBcIjEwLDE2XCIsIFwiMTAsMTdcIiwgXCIxMCwxOFwiLCBcIjEwLDE5XCIsIFwiMTAsMjBcIiwgXCIxMSwwXCIsIFwiMTEsMVwiLCBcIjExLDJcIiwgXCIxMSwzXCIsIFwiMTEsNFwiLCBcIjExLDVcIiwgXCIxMSw2XCIsIFwiMTEsN1wiLCBcIjExLDhcIiwgXCIxMSw5XCIsIFwiMTEsMTBcIiwgXCIxMSwxMVwiLCBcIjExLDEyXCIsIFwiMTEsMTNcIiwgXCIxMSwxNFwiLCBcIjExLDE1XCIsIFwiMTEsMTZcIiwgXCIxMSwxN1wiLCBcIjExLDE4XCIsIFwiMTEsMTlcIiwgXCIxMSwyMFwiLCBcIjEyLDBcIiwgXCIxMiwxXCIsIFwiMTIsMlwiLCBcIjEyLDNcIiwgXCIxMiw0XCIsIFwiMTIsNVwiLCBcIjEyLDZcIiwgXCIxMiw3XCIsIFwiMTIsOFwiLCBcIjEyLDlcIiwgXCIxMiwxMFwiLCBcIjEyLDExXCIsIFwiMTIsMTJcIiwgXCIxMiwxM1wiLCBcIjEyLDE0XCIsIFwiMTIsMTVcIiwgXCIxMiwxNlwiLCBcIjEyLDE3XCIsIFwiMTIsMThcIiwgXCIxMiwxOVwiLCBcIjEyLDIwXCIsIFwiMTMsMFwiLCBcIjEzLDFcIiwgXCIxMywyXCIsIFwiMTMsM1wiLCBcIjEzLDRcIiwgXCIxMyw1XCIsIFwiMTMsNlwiLCBcIjEzLDdcIiwgXCIxMyw4XCIsIFwiMTMsOVwiLCBcIjEzLDEwXCIsIFwiMTMsMTFcIiwgXCIxMywxMlwiLCBcIjEzLDEzXCIsIFwiMTMsMTRcIiwgXCIxMywxNVwiLCBcIjEzLDE2XCIsIFwiMTMsMTdcIiwgXCIxMywxOFwiLCBcIjEzLDE5XCIsIFwiMTMsMjBcIiwgXCIxNCwwXCIsIFwiMTQsMVwiLCBcIjE0LDJcIiwgXCIxNCwzXCIsIFwiMTQsNFwiLCBcIjE0LDVcIiwgXCIxNCw2XCIsIFwiMTQsN1wiLCBcIjE0LDhcIiwgXCIxNCw5XCIsIFwiMTQsMTBcIiwgXCIxNCwxMVwiLCBcIjE0LDEyXCIsIFwiMTQsMTNcIiwgXCIxNCwxNFwiLCBcIjE0LDE1XCIsIFwiMTQsMTZcIiwgXCIxNCwxN1wiLCBcIjE0LDE4XCIsIFwiMTQsMTlcIiwgXCIxNCwyMFwiLCBcIjE1LDBcIiwgXCIxNSwxXCIsIFwiMTUsMlwiLCBcIjE1LDNcIiwgXCIxNSw0XCIsIFwiMTUsNVwiLCBcIjE1LDZcIiwgXCIxNSw3XCIsIFwiMTUsOFwiLCBcIjE1LDlcIiwgXCIxNSwxMFwiLCBcIjE1LDExXCIsIFwiMTUsMTJcIiwgXCIxNSwxM1wiLCBcIjE1LDE0XCIsIFwiMTUsMTVcIiwgXCIxNSwxNlwiLCBcIjE1LDE3XCIsIFwiMTUsMThcIiwgXCIxNSwxOVwiLCBcIjE1LDIwXCIsIFwiMTYsMFwiLCBcIjE2LDFcIiwgXCIxNiwyXCIsIFwiMTYsM1wiLCBcIjE2LDRcIiwgXCIxNiw1XCIsIFwiMTYsNlwiLCBcIjE2LDdcIiwgXCIxNiw4XCIsIFwiMTYsOVwiLCBcIjE2LDEwXCIsIFwiMTYsMTFcIiwgXCIxNiwxMlwiLCBcIjE2LDEzXCIsIFwiMTYsMTRcIiwgXCIxNiwxNVwiLCBcIjE2LDE2XCIsIFwiMTYsMTdcIiwgXCIxNiwxOFwiLCBcIjE2LDE5XCIsIFwiMTYsMjBcIiwgXCIxNywwXCIsIFwiMTcsMVwiLCBcIjE3LDJcIiwgXCIxNywzXCIsIFwiMTcsNFwiLCBcIjE3LDVcIiwgXCIxNyw2XCIsIFwiMTcsN1wiLCBcIjE3LDhcIiwgXCIxNyw5XCIsIFwiMTcsMTBcIiwgXCIxNywxMVwiLCBcIjE3LDEyXCIsIFwiMTcsMTNcIiwgXCIxNywxNFwiLCBcIjE3LDE1XCIsIFwiMTcsMTZcIiwgXCIxNywxN1wiLCBcIjE3LDE4XCIsIFwiMTcsMTlcIiwgXCIxNywyMFwiLCBcIjE4LDBcIiwgXCIxOCwxXCIsIFwiMTgsMlwiLCBcIjE4LDNcIiwgXCIxOCw0XCIsIFwiMTgsNVwiLCBcIjE4LDZcIiwgXCIxOCw3XCIsIFwiMTgsOFwiLCBcIjE4LDlcIiwgXCIxOCwxMFwiLCBcIjE4LDExXCIsIFwiMTgsMTJcIiwgXCIxOCwxM1wiLCBcIjE4LDE0XCIsIFwiMTgsMTVcIiwgXCIxOCwxNlwiLCBcIjE4LDE3XCIsIFwiMTgsMThcIiwgXCIxOCwxOVwiLCBcIjE4LDIwXCIsIFwiMTksMFwiLCBcIjE5LDFcIiwgXCIxOSwyXCIsIFwiMTksM1wiLCBcIjE5LDRcIiwgXCIxOSw1XCIsIFwiMTksNlwiLCBcIjE5LDdcIiwgXCIxOSw4XCIsIFwiMTksOVwiLCBcIjE5LDEwXCIsIFwiMTksMTFcIiwgXCIxOSwxMlwiLCBcIjE5LDEzXCIsIFwiMTksMTRcIiwgXCIxOSwxNVwiLCBcIjE5LDE2XCIsIFwiMTksMTdcIiwgXCIxOSwxOFwiLCBcIjE5LDE5XCIsIFwiMTksMjBcIiwgXCIyMCwwXCIsIFwiMjAsMVwiLCBcIjIwLDJcIiwgXCIyMCwzXCIsIFwiMjAsNFwiLCBcIjIwLDVcIiwgXCIyMCw2XCIsIFwiMjAsN1wiLCBcIjIwLDhcIiwgXCIyMCw5XCIsIFwiMjAsMTBcIiwgXCIyMCwxMVwiLCBcIjIwLDEyXCIsIFwiMjAsMTNcIiwgXCIyMCwxNFwiLCBcIjIwLDE1XCIsIFwiMjAsMTZcIiwgXCIyMCwxN1wiLCBcIjIwLDE4XCIsIFwiMjAsMTlcIiwgXCIyMCwyMFwiLCBcIjIxLDBcIiwgXCIyMSwxXCIsIFwiMjEsMlwiLCBcIjIxLDNcIiwgXCIyMSw0XCIsIFwiMjEsNVwiLCBcIjIxLDZcIiwgXCIyMSw3XCIsIFwiMjEsOFwiLCBcIjIxLDlcIiwgXCIyMSwxMFwiLCBcIjIxLDExXCIsIFwiMjEsMTJcIiwgXCIyMSwxM1wiLCBcIjIxLDE0XCIsIFwiMjEsMTVcIiwgXCIyMSwxNlwiLCBcIjIxLDE3XCIsIFwiMjEsMThcIiwgXCIyMSwxOVwiLCBcIjIxLDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVUaGVybWl0ZVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDFcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInRoZXJtaXRlXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwiYmlvbWFzc1wiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMixcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxyXG5cdFx0XHRcdFwiYXJnc1wiOiBcInRoZXJtaXRlXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwyMFwiLCBcIjcsMVwiLCBcIjcsN1wiLCBcIjIzLDEzXCIsIFwiMjMsMTlcIiwgXCIyNCwwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVTaGllbGRcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDAyXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJzaGllbGRcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJlbmVyZ3lcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDEsXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcclxuXHRcdFx0XHRcImFyZ3NcIjogXCJzaGllbGRcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDZcIiwgXCI2LDEzXCIsIFwiNiwxOVwiLCBcIjcsMlwiLCBcIjcsMTJcIiwgXCIyMyw4XCIsIFwiMjMsMThcIiwgXCIyNCwxXCIsIFwiMjQsN1wiLCBcIjI0LDE0XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVCaW9kcm9uZVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDNcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImJpb2Ryb25lXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwiYmlvZHJvbmVcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDEsXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcclxuXHRcdFx0XHRcImFyZ3NcIjogXCJiaW9kcm9uZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsNVwiLCBcIjcsM1wiLCBcIjcsMTVcIiwgXCIyMyw1XCIsIFwiMjMsMTdcIiwgXCIyNCwxNVwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlU2F0ZWxsaXRlXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwNFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwic2F0ZWxsaXRlXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwibWV0YWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDEsXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcclxuXHRcdFx0XHRcImFyZ3NcIjogXCJzYXRlbGxpdGVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDBcIiwgXCI2LDE0XCIsIFwiNyw0XCIsIFwiNywxN1wiLCBcIjIzLDNcIiwgXCIyMywxNlwiLCBcIjI0LDZcIiwgXCIyNCwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlTGFzZXJcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDA1XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJsYXNlclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcImVuZXJneVwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxyXG5cdFx0XHRcdFwiYXJnc1wiOiBcImxhc2VyXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwzXCIsIFwiNiw3XCIsIFwiNiw4XCIsIFwiNiwxMlwiLCBcIjYsMTZcIiwgXCI3LDVcIiwgXCI3LDZcIiwgXCI3LDlcIiwgXCI3LDE4XCIsIFwiNywxOVwiLCBcIjIzLDFcIiwgXCIyMywyXCIsIFwiMjMsMTFcIiwgXCIyMywxNFwiLCBcIjIzLDE1XCIsIFwiMjQsNFwiLCBcIjI0LDhcIiwgXCIyNCwxMlwiLCBcIjI0LDEzXCIsIFwiMjQsMTdcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZVJlcGFpclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDZcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInJlcGFpclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcIm1ldGFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAxLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJyZXBhaXJcIixcclxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMVwiLCBcIjYsMTBcIiwgXCI2LDE4XCIsIFwiNyw4XCIsIFwiNywxM1wiLCBcIjIzLDdcIiwgXCIyMywxMlwiLCBcIjI0LDJcIiwgXCIyNCwxMFwiLCBcIjI0LDE5XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVSb2NrZXRcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDA3XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJyb2NrZXRcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJyb2NrZXRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDEsXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcclxuXHRcdFx0XHRcImFyZ3NcIjogXCJyb2NrZXRcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDRcIiwgXCI2LDExXCIsIFwiNywxMFwiLCBcIjcsMTZcIiwgXCIyMyw0XCIsIFwiMjMsMTBcIiwgXCIyNCw5XCIsIFwiMjQsMTZcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZUVzcGlvbmFnZVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDhcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImVzcGlvbmFnZVwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcImJpb21hc3NcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDMsXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImVzcGlvbmFnZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMTVcIiwgXCI3LDExXCIsIFwiMjMsOVwiLCBcIjI0LDVcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZVRha2VvdmVyXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwOVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwidGFrZW92ZXJcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJlbmVyZ3lcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDIsXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcInRha2VvdmVyXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwxN1wiLCBcIjcsMTRcIiwgXCIyMyw2XCIsIFwiMjQsM1wiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlUmVwYWlyVHdvXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxMFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwicmVwYWlyVHdvXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiLCBcIm94eWdlblwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxXSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwicmVwYWlyXCIsXHJcblx0XHRcdFx0XCJhcmdzXCI6IDJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiw5XCIsIFwiMjQsMTFcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZUNvdW50ZXJFc3Bpb25hZ2VcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDExXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJjb3VudGVyRXNwaW9uYWdlXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImJpb21hc3NcIiwgXCJveHlnZW5cIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMV0sXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImNvdW50ZXJcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDJcIiwgXCIyNCwxOFwiXVxyXG5cdFx0fSxcclxuXHRcdFwib3RoZXJTdXJmYWNlXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxMlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJzdXJmYWNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInN1cmZhY2VcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiOCwwXCIsIFwiOCwxXCIsIFwiOCwyXCIsIFwiOCwzXCIsIFwiOCw0XCIsIFwiOCw1XCIsIFwiOCw2XCIsIFwiOCw3XCIsIFwiOCw4XCIsIFwiOCw5XCIsIFwiOCwxMFwiLCBcIjgsMTFcIiwgXCI4LDEyXCIsIFwiOCwxM1wiLCBcIjgsMTRcIiwgXCI4LDE1XCIsIFwiOCwxNlwiLCBcIjgsMTdcIiwgXCI4LDE4XCIsIFwiOCwxOVwiLCBcIjgsMjBcIiwgXCIyMiwwXCIsIFwiMjIsMVwiLCBcIjIyLDJcIiwgXCIyMiwzXCIsIFwiMjIsNFwiLCBcIjIyLDVcIiwgXCIyMiw2XCIsIFwiMjIsN1wiLCBcIjIyLDhcIiwgXCIyMiw5XCIsIFwiMjIsMTBcIiwgXCIyMiwxMVwiLCBcIjIyLDEyXCIsIFwiMjIsMTNcIiwgXCIyMiwxNFwiLCBcIjIyLDE1XCIsIFwiMjIsMTZcIiwgXCIyMiwxN1wiLCBcIjIyLDE4XCIsIFwiMjIsMTlcIiwgXCIyMiwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwib3RoZXJMb2NrXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxM1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJsb2NrXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImxvY2tcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNywwXCIsIFwiNSwxMFwiLCBcIjEsMTBcIiwgXCI3LDIwXCIsIFwiMjMsMFwiLCBcIjIzLDIwXCIsIFwiMjUsMTBcIiwgXCIyOSwxMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYXJtb3J5RHJpbGxcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDE0XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImFybW9yeVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJkcmlsbFwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI0LDEwXCIsIFwiMjYsMTBcIl1cclxuXHRcdH0sXHJcblx0XHRcIkFybW9yeUNhbm5vblwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMTVcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYXJtb3J5XCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImNhbm5vblwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIzLDEwXCIsIFwiMjcsMTBcIl1cclxuXHRcdH0sXHJcblx0XHRcImFybW9yeUV4cGxvc2l2ZXNcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDE2XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImFybW9yeVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJleHBsb3NpdmVzXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjIsMTBcIiwgXCIyOCwxMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwibGljaGVuXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxN1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImxpY2hlblwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogXCJiaW9tYXNzXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDBcIiwgXCIwLDEwXCIsIFwiMCwxN1wiLCBcIjEsMlwiLCBcIjEsOFwiLCBcIjEsMTZcIiwgXCIxLDIwXCIsIFwiMjksMFwiLCBcIjI5LDRcIiwgXCIyOSwxMlwiLCBcIjI5LDE4XCIsIFwiMzAsM1wiLCBcIjMwLDEwXCIsIFwiMzAsMjBcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25MaWNoZW5Ud29cIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDE4XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwibGljaGVuVHdvXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcImJpb21hc3NcIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAyXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsNFwiLCBcIjMwLDE2XCJdXHJcblxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbkNoZW1pY2FsUmVhY3RvclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMTlcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJjaGVtaWNhbFJlYWN0b3JcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJiaW9tYXNzXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAxLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogXCJveHlnZW5cIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjEsMVwiLCBcIjEsOVwiLCBcIjI5LDE5XCIsIFwiMjksMTFcIl1cclxuXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uQ2hlbWljYWxSZWFjdG9yVHdvXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyMFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImNoZW1pY2FsUmVhY3RvclR3b1wiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcImJpb21hc3NcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcIm94eWdlblwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IDJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCw1XCIsIFwiMzAsMTVcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25BaXJGaWx0ZXJcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDIxXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiYWlyRmlsdGVyXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwib3h5Z2VuXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAyLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogXCJveHlnZW5cIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAzXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMTVcIiwgXCIxLDExXCIsIFwiMjksOVwiLCBcIjMwLDVcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25CaW9jb2xsZWN0b3JcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDIyXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiYmlvY29sbGVjdG9yXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm94eWdlblwiLCBcImJpb21hc3NcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMV0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcImJpb2Ryb25lXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDE0XCIsIFwiMCwxOFwiLCBcIjEsNlwiLCBcIjEsMTdcIiwgXCIzMCw2XCIsIFwiMzAsMlwiLCBcIjI5LDE0XCIsIFwiMjksM1wiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvblVyYW5pdW1NaW5lXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyM1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInVyYW5pdW1NaW5lXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm94eWdlblwiLCBcImVuZXJneVwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFwidXJhbml1bVwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwyXCIsIFwiMCw2XCIsIFwiMSwzXCIsIFwiMzAsMThcIiwgXCIzMCwxNFwiLCBcIjI5LDE3XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uTnVjbGVhclJlYWN0b3JcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDI0XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwibnVjbGVhclJlYWN0b3JcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJ1cmFuaXVtXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAxLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogXCJlbmVyZ3lcIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAzXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsOVwiLCBcIjAsMTZcIiwgXCIxLDdcIiwgXCIxLDE0XCIsIFwiMSwxOVwiLCBcIjMwLDExXCIsIFwiMzAsNFwiLCBcIjI5LDEzXCIsIFwiMjksNlwiLCBcIjI5LDFcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25UaGVybWFsR2VuZXJhdG9yXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyNVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInRoZXJtYWxHZW5lcmF0b3JcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJiaW9tYXNzXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAxLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogXCJlbmVyZ3lcIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMTJcIiwgXCIzMCw4XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uRm91bmRyeVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjZcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJmb3VuZHJ5XCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwiZW5lcmd5XCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAxLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogXCJtZXRhbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwzXCIsIFwiMCwxMVwiLCBcIjAsMTlcIiwgXCIxLDEzXCIsIFwiMzAsMTdcIiwgXCIzMCw5XCIsIFwiMzAsMVwiLCBcIjI5LDdcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25Gb3VuZHJ5VHdvXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyN1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImZvdW5kcnlUd29cIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJlbmVyZ3lcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcIm1ldGFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogMlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIxLDBcIiwgXCIyOSwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvblJvY2tldFdvcmtzaG9wXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyOFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInJvY2tldFdvcmtzaG9wXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwiZW5lcmd5XCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAxLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogXCJyb2NrZXRcIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMVwiLCBcIjAsN1wiLCBcIjEsNVwiLCBcIjEsMTJcIiwgXCIxLDE1XCIsIFwiMzAsMTlcIiwgXCIzMCwxM1wiLCBcIjI5LDE1XCIsIFwiMjksOFwiLCBcIjI5LDVcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25TZW5zb3JDYWJpblwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjlcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJzZW5zb3JDYWJpblwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJraWxsQmlvZHJvbmVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDEzXCIsIFwiMzAsN1wiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbk51Y2xlYXJBcm1vcnlcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDMwXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwibnVjbGVhckFybW9yeVwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJveHlnZW5cIiwgXCJlbmVyZ3lcIiwgXCJ1cmFuaXVtXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzEsIDEsIDFdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogXCJudWtlXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDIwXCIsIFwiMSw0XCIsIFwiMSwxOFwiLCBcIjMwLDBcIiwgXCIyOSwxNlwiLCBcIjI5LDJcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25SZXBhaXJcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDMxXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwicHJvZFJlcGFpclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcInJlcGFpclwiLFxyXG5cdFx0XHRcdFwidGlsZVRhcmdldElEXCI6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCw4XCIsIFwiMzAsMTJcIl1cclxuXHRcdH0sXHJcblx0XHRcInJlc291cmNlT3h5Z2VuXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAzMlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwib3h5Z2VuXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjUsMFwiLCBcIjUsMVwiLCBcIjUsMlwiLCBcIjUsM1wiLCBcIjUsNFwiLCBcIjUsNVwiLCBcIjUsNlwiLCBcIjUsN1wiLCBcIjUsOFwiLCBcIjUsOVwiLCBcIjI1LDExXCIsIFwiMjUsMTJcIiwgXCIyNSwxM1wiLCBcIjI1LDE0XCIsIFwiMjUsMTVcIiwgXCIyNSwxNlwiLCBcIjI1LDE3XCIsIFwiMjUsMThcIiwgXCIyNSwxOVwiLCBcIjI1LDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJyZXNvdXJjZVJvY2tldFwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzNcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInJvY2tldFwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI0LDBcIiwgXCI0LDFcIiwgXCI0LDJcIiwgXCI0LDNcIiwgXCI0LDRcIiwgXCI0LDVcIiwgXCI0LDZcIiwgXCI0LDdcIiwgXCI0LDhcIiwgXCI0LDlcIiwgXCIyNiwxMVwiLCBcIjI2LDEyXCIsIFwiMjYsMTNcIiwgXCIyNiwxNFwiLCBcIjI2LDE1XCIsIFwiMjYsMTZcIiwgXCIyNiwxN1wiLCBcIjI2LDE4XCIsIFwiMjYsMTlcIiwgXCIyNiwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwicmVzb3VyY2VNZXRhbFwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzRcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcIm1ldGFsXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjMsMFwiLCBcIjMsMVwiLCBcIjMsMlwiLCBcIjMsM1wiLCBcIjMsNFwiLCBcIjMsNVwiLCBcIjMsNlwiLCBcIjMsN1wiLCBcIjMsOFwiLCBcIjMsOVwiLCBcIjI3LDExXCIsIFwiMjcsMTJcIiwgXCIyNywxM1wiLCBcIjI3LDE0XCIsIFwiMjcsMTVcIiwgXCIyNywxNlwiLCBcIjI3LDE3XCIsIFwiMjcsMThcIiwgXCIyNywxOVwiLCBcIjI3LDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJyZXNvdXJjZUVuZXJneVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzVcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImVuZXJneVwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIyLDBcIiwgXCIyLDFcIiwgXCIyLDJcIiwgXCIyLDNcIiwgXCIyLDRcIiwgXCIyLDVcIiwgXCIyLDZcIiwgXCIyLDdcIiwgXCIyLDhcIiwgXCIyLDlcIiwgXCIyLDExXCIsIFwiMiwxMlwiLCBcIjIsMTNcIiwgXCIyLDE0XCIsIFwiMiwxNVwiLCBcIjIsMTZcIiwgXCIyLDE3XCIsIFwiMiwxOFwiLCBcIjIsMTlcIiwgXCIyLDIwXCIsIFwiMjgsMFwiLCBcIjI4LDFcIiwgXCIyOCwyXCIsIFwiMjgsM1wiLCBcIjI4LDRcIiwgXCIyOCw1XCIsIFwiMjgsNlwiLCBcIjI4LDdcIiwgXCIyOCw4XCIsIFwiMjgsOVwiLCBcIjI4LDExXCIsIFwiMjgsMTJcIiwgXCIyOCwxM1wiLCBcIjI4LDE0XCIsIFwiMjgsMTVcIiwgXCIyOCwxNlwiLCBcIjI4LDE3XCIsIFwiMjgsMThcIiwgXCIyOCwxOVwiLCBcIjI4LDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJyZXNvdXJjZUJpb21hc3NcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDM2XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJiaW9tYXNzXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjUsMTFcIiwgXCI1LDEyXCIsIFwiNSwxM1wiLCBcIjUsMTRcIiwgXCI1LDE1XCIsIFwiNSwxNlwiLCBcIjUsMTdcIiwgXCI1LDE4XCIsIFwiNSwxOVwiLCBcIjUsMjBcIiwgXCIyNSwwXCIsIFwiMjUsMVwiLCBcIjI1LDJcIiwgXCIyNSwzXCIsIFwiMjUsNFwiLCBcIjI1LDVcIiwgXCIyNSw2XCIsIFwiMjUsN1wiLCBcIjI1LDhcIiwgXCIyNSw5XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJyZXNvdXJjZUJpb2Ryb25lXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAzN1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiYmlvZHJvbmVcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNCwxMVwiLCBcIjQsMTJcIiwgXCI0LDEzXCIsIFwiNCwxNFwiLCBcIjQsMTVcIiwgXCI0LDE2XCIsIFwiNCwxN1wiLCBcIjQsMThcIiwgXCI0LDE5XCIsIFwiNCwyMFwiLCBcIjI2LDBcIiwgXCIyNiwxXCIsIFwiMjYsMlwiLCBcIjI2LDNcIiwgXCIyNiw0XCIsIFwiMjYsNVwiLCBcIjI2LDZcIiwgXCIyNiw3XCIsIFwiMjYsOFwiLCBcIjI2LDlcIl1cclxuXHRcdH0sXHJcblx0XHRcInJlc291cmNlVXJhbml1bVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzhcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInVyYW5pdW1cIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMywxMVwiLCBcIjMsMTJcIiwgXCIzLDEzXCIsIFwiMywxNFwiLCBcIjMsMTVcIiwgXCIzLDE2XCIsIFwiMywxN1wiLCBcIjMsMThcIiwgXCIzLDE5XCIsIFwiMywyMFwiLCBcIjI3LDBcIiwgXCIyNywxXCIsIFwiMjcsMlwiLCBcIjI3LDNcIiwgXCIyNyw0XCIsIFwiMjcsNVwiLCBcIjI3LDZcIiwgXCIyNyw3XCIsIFwiMjcsOFwiLCBcIjI3LDlcIl1cclxuXHRcdH1cclxuXHR9XHJcbn0iLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICByZXR1cm4gIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG52YXIgcm5nO1xuXG52YXIgY3J5cHRvID0gZ2xvYmFsLmNyeXB0byB8fCBnbG9iYWwubXNDcnlwdG87IC8vIGZvciBJRSAxMVxuaWYgKGNyeXB0byAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG4gIHJuZyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59XG5cbmlmICghcm5nKSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyICBybmRzID0gbmV3IEFycmF5KDE2KTtcbiAgcm5nID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcm5nO1xuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG5cbiAgaWYgKHR5cGVvZihvcHRpb25zKSA9PSAnc3RyaW5nJykge1xuICAgIGJ1ZiA9IG9wdGlvbnMgPT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgKytpaSkge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHY0O1xuIiwiaW1wb3J0IENsaWVudCBmcm9tICcuL3ByZWZhYnMvY2xpZW50JztcclxuaW1wb3J0IEJvb3QgZnJvbSAnLi9zdGF0ZXMvYm9vdCc7XHJcbmltcG9ydCBHYW1lIGZyb20gJy4vc3RhdGVzL2dhbWUnO1xyXG5pbXBvcnQgU2V0dXAgZnJvbSAnLi9zdGF0ZXMvc2V0dXAnO1xyXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJy4vc3RhdGVzL3ByZWxvYWRlcic7XHJcbmltcG9ydCBHYW1lb3ZlciBmcm9tICcuL3N0YXRlcy9nYW1lb3Zlcic7XHJcbmltcG9ydCBTZXB0aWtvbiBmcm9tICcuL3ByZWZhYnMvc2VwdGlrb24nO1xyXG5cclxuaWYodHlwZW9mKFN0b3JhZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VwdFVVSUQnKSAhPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgdXVpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXB0VVVJRCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB1dWlkID0gcmVxdWlyZSgndXVpZC92NCcpKCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlcHRVVUlEJywgdXVpZCk7XHJcbiAgICB9XHJcbn0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiTG9jYWwgU3RvcmFnZSBpcyByZXF1aXJlZCFcIik7XHJcbn1cclxuXHJcbi8vIGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCwgUGhhc2VyLkFVVE8sICdwaGFzZXItdGVzdC1nYW1lJyk7XHJcbmNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoXCIxMDBcIiwgXCIxMDBcIiwgUGhhc2VyLkFVVE8pO1xyXG5nYW1lLnNlcHRpa29uID0gbmV3IFNlcHRpa29uKGdhbWUpO1xyXG5nYW1lLmNsaWVudCA9IG5ldyBDbGllbnQoZ2FtZS5zZXB0aWtvbik7XHJcblxyXG5nYW1lLnN0YXRlLmFkZCgnYm9vdCcsIG5ldyBCb290KCkpO1xyXG5nYW1lLnN0YXRlLmFkZCgnZ2FtZScsIG5ldyBHYW1lKCkpO1xyXG5nYW1lLnN0YXRlLmFkZCgnc2V0dXAnLCBuZXcgU2V0dXAoKSk7XHJcbmdhbWUuc3RhdGUuYWRkKCdwcmVsb2FkZXInLCBuZXcgUHJlbG9hZGVyKCkpO1xyXG5nYW1lLnN0YXRlLmFkZCgnZ2FtZW92ZXInLCBuZXcgR2FtZW92ZXIoKSk7XHJcblxyXG5nYW1lLnN0YXRlLnN0YXJ0KCdib290Jyk7XHJcbiIsInZhciBnYW1lTW9kYWwgPSBnYW1lTW9kYWwgfHwge307XHJcblxyXG5cclxuZ2FtZU1vZGFsID0gZnVuY3Rpb24gKGdhbWUpIHtcclxuXHJcblx0dmFyIF90aGlzID0gdGhpcztcclxuXHRnYW1lLm1vZGFscyA9IHt9O1xyXG5cclxuXHQvKipcclxuXHQgKiBbaGlkZU1vZGFsIGRlc2NyaXB0aW9uXVxyXG5cdCAqIEBwYXJhbSAge1t0eXBlXX0gdHlwZSBbZGVzY3JpcHRpb25dXHJcblx0ICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cclxuXHQgKi9cclxuXHR0aGlzLmhpZGVNb2RhbCA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcblx0XHR3aW5kb3cuY29uc29sZS5sb2codHlwZSk7XHJcblx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gZmFsc2U7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGNyZWF0ZU1vZGFsOiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cdFx0XHR2YXIgdHlwZSA9IG9wdGlvbnMudHlwZSB8fCAnJzsgLy8gbXVzdCBiZSB1bmlxdWVcclxuXHRcdFx0dmFyIGluY2x1ZGVCYWNrZ3JvdW5kID0gb3B0aW9ucy5pbmNsdWRlQmFja2dyb3VuZDsgLy8gbWF5YmUgbm90IG9wdGlvbmFsXHJcblx0XHRcdHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvciB8fCBcIjB4MDAwMDAwXCI7XHJcblx0XHRcdHZhciBiYWNrZ3JvdW5kT3BhY2l0eSA9IG9wdGlvbnMuYmFja2dyb3VuZE9wYWNpdHkgPT09IHVuZGVmaW5lZCA/XHJcblx0XHRcdFx0MC43IDogb3B0aW9ucy5iYWNrZ3JvdW5kT3BhY2l0eTtcclxuXHRcdFx0dmFyIG1vZGFsQ2xvc2VPbklucHV0ID0gb3B0aW9ucy5tb2RhbENsb3NlT25JbnB1dCB8fCBmYWxzZTtcclxuXHRcdFx0dmFyIG1vZGFsQmFja2dyb3VuZENhbGxiYWNrID0gb3B0aW9ucy5tb2RhbEJhY2tncm91bmRDYWxsYmFjayB8fCBmYWxzZTtcclxuXHRcdFx0dmFyIHZDZW50ZXIgPSBvcHRpb25zLnZDZW50ZXIgfHwgdHJ1ZTtcclxuXHRcdFx0dmFyIGhDZW50ZXIgPSBvcHRpb25zLmhDZW50ZXIgfHwgdHJ1ZTtcclxuXHRcdFx0dmFyIGl0ZW1zQXJyID0gb3B0aW9ucy5pdGVtc0FyciB8fCBbXTtcclxuXHRcdFx0dmFyIGZpeGVkVG9DYW1lcmEgPSBvcHRpb25zLmZpeGVkVG9DYW1lcmEgfHwgZmFsc2U7XHJcblxyXG5cdFx0XHR2YXIgbW9kYWw7XHJcblx0XHRcdHZhciBtb2RhbEdyb3VwID0gZ2FtZS5hZGQuZ3JvdXAoKTtcclxuXHRcdFx0aWYgKGZpeGVkVG9DYW1lcmEgPT09IHRydWUpIHtcclxuXHRcdFx0XHRtb2RhbEdyb3VwLmZpeGVkVG9DYW1lcmEgPSB0cnVlO1xyXG5cdFx0XHRcdG1vZGFsR3JvdXAuY2FtZXJhT2Zmc2V0LnggPSAwO1xyXG5cdFx0XHRcdG1vZGFsR3JvdXAuY2FtZXJhT2Zmc2V0LnkgPSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoaW5jbHVkZUJhY2tncm91bmQgPT09IHRydWUpIHtcclxuXHRcdFx0XHRtb2RhbCA9IGdhbWUuYWRkLmdyYXBoaWNzKGdhbWUud2lkdGgsIGdhbWUuaGVpZ2h0KTtcclxuXHRcdFx0XHRtb2RhbC5iZWdpbkZpbGwoYmFja2dyb3VuZENvbG9yLCBiYWNrZ3JvdW5kT3BhY2l0eSk7XHJcblx0XHRcdFx0bW9kYWwueCA9IDA7XHJcblx0XHRcdFx0bW9kYWwueSA9IDA7XHJcblxyXG5cdFx0XHRcdG1vZGFsLmRyYXdSZWN0KDAsIDAsIGdhbWUud2lkdGgsIGdhbWUuaGVpZ2h0KTtcclxuXHJcblx0XHRcdFx0aWYgKG1vZGFsQ2xvc2VPbklucHV0ID09PSB0cnVlKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGlubmVyTW9kYWwgPSBnYW1lLmFkZC5zcHJpdGUoMCwgMCk7XHJcblx0XHRcdFx0XHRpbm5lck1vZGFsLmlucHV0RW5hYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRpbm5lck1vZGFsLndpZHRoID0gZ2FtZS53aWR0aDtcclxuXHRcdFx0XHRcdGlubmVyTW9kYWwuaGVpZ2h0ID0gZ2FtZS5oZWlnaHQ7XHJcblx0XHRcdFx0XHRpbm5lck1vZGFsLnR5cGUgPSB0eXBlO1xyXG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5pbnB1dC5wcmlvcml0eUlEID0gMDtcclxuXHRcdFx0XHRcdGlubmVyTW9kYWwuZXZlbnRzLm9uSW5wdXREb3duLmFkZChmdW5jdGlvbiAoZSwgcG9pbnRlcikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmhpZGVNb2RhbChlLnR5cGUpO1xyXG5cdFx0XHRcdFx0fSwgX3RoaXMsIDIpO1xyXG5cclxuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKGlubmVyTW9kYWwpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0bW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2sgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG1vZGFsQmFja2dyb3VuZENhbGxiYWNrKSB7XHJcblx0XHRcdFx0dmFyIGlubmVyTW9kYWwgPSBnYW1lLmFkZC5zcHJpdGUoMCwgMCk7XHJcblx0XHRcdFx0aW5uZXJNb2RhbC5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdGlubmVyTW9kYWwud2lkdGggPSBnYW1lLndpZHRoO1xyXG5cdFx0XHRcdGlubmVyTW9kYWwuaGVpZ2h0ID0gZ2FtZS5oZWlnaHQ7XHJcblx0XHRcdFx0aW5uZXJNb2RhbC50eXBlID0gdHlwZTtcclxuXHRcdFx0XHRpbm5lck1vZGFsLmlucHV0LnByaW9yaXR5SUQgPSAwO1xyXG5cclxuXHRcdFx0XHRtb2RhbEdyb3VwLmFkZChpbm5lck1vZGFsKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGluY2x1ZGVCYWNrZ3JvdW5kKSB7XHJcblx0XHRcdFx0bW9kYWxHcm91cC5hZGQobW9kYWwpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgbW9kYWxMYWJlbDtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtc0Fyci5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdFx0XHRcdHZhciBpdGVtID0gaXRlbXNBcnJbaV07XHJcblx0XHRcdFx0dmFyIGl0ZW1UeXBlID0gaXRlbS50eXBlIHx8ICd0ZXh0JztcclxuXHRcdFx0XHR2YXIgaXRlbUNvbG9yID0gaXRlbS5jb2xvciB8fCAweDAwMDAwMDtcclxuXHRcdFx0XHR2YXIgaXRlbUZvbnRmYW1pbHkgPSBpdGVtLmZvbnRGYW1pbHkgfHwgJ0FyaWFsJztcclxuXHRcdFx0XHR2YXIgaXRlbUZvbnRTaXplID0gaXRlbS5mb250U2l6ZSB8fCAzMjtcclxuXHRcdFx0XHR2YXIgaXRlbVN0cm9rZSA9IGl0ZW0uc3Ryb2tlIHx8ICcweDAwMDAwMCc7XHJcblx0XHRcdFx0dmFyIGl0ZW1TdHJva2VUaGlja25lc3MgPSBpdGVtLnN0cm9rZVRoaWNrbmVzcyB8fCAwO1xyXG5cdFx0XHRcdHZhciBpdGVtQWxpZ24gPSBpdGVtLmFsaWduIHx8ICdjZW50ZXInO1xyXG5cdFx0XHRcdHZhciBvZmZzZXRYID0gaXRlbS5vZmZzZXRYIHx8IDA7XHJcblx0XHRcdFx0dmFyIG9mZnNldFkgPSBpdGVtLm9mZnNldFkgfHwgMDtcclxuXHRcdFx0XHR2YXIgY29udGVudFNjYWxlID0gaXRlbS5jb250ZW50U2NhbGUgfHwgMTtcclxuXHRcdFx0XHR2YXIgY29udGVudCA9IGl0ZW0uY29udGVudCB8fCBcIlwiO1xyXG5cdFx0XHRcdHZhciBjZW50ZXJYID0gZ2FtZS53aWR0aCAvIDI7XHJcblx0XHRcdFx0dmFyIGNlbnRlclkgPSBnYW1lLmhlaWdodCAvIDI7XHJcblx0XHRcdFx0dmFyIGNhbGxiYWNrID0gaXRlbS5jYWxsYmFjayB8fCBmYWxzZTtcclxuXHRcdFx0XHR2YXIgdGV4dEFsaWduID0gaXRlbS50ZXh0QWxpZ24gfHwgXCJsZWZ0XCI7XHJcblx0XHRcdFx0dmFyIGF0bGFzUGFyZW50ID0gaXRlbS5hdGxhc1BhcmVudCB8fCBcIlwiO1xyXG5cdFx0XHRcdHZhciBidXR0b25Ib3ZlciA9IGl0ZW0uYnV0dG9uSG92ZXIgfHwgY29udGVudDtcclxuXHRcdFx0XHR2YXIgYnV0dG9uQWN0aXZlID0gaXRlbS5idXR0b25BY3RpdmUgfHwgY29udGVudDtcclxuXHRcdFx0XHR2YXIgZ3JhcGhpY0NvbG9yID0gaXRlbS5ncmFwaGljQ29sb3IgfHwgMHhmZmZmZmY7XHJcblx0XHRcdFx0dmFyIGdyYXBoaWNPcGFjaXR5ID0gaXRlbS5ncmFwaGljT3BhY2l0eSB8fCAxO1xyXG5cdFx0XHRcdHZhciBncmFwaGljVyA9IGl0ZW0uZ3JhcGhpY1dpZHRoIHx8IDIwMDtcclxuXHRcdFx0XHR2YXIgZ3JhcGhpY0ggPSBpdGVtLmdyYXBoaWNIZWlnaHQgfHwgMjAwO1xyXG5cdFx0XHRcdHZhciBncmFwaGljUmFkaXVzID0gaXRlbS5ncmFwaGljUmFkaXVzIHx8IDA7XHJcblx0XHRcdFx0dmFyIGxvY2tQb3NpdGlvbiA9IGl0ZW0ubG9ja1Bvc2l0aW9uIHx8IGZhbHNlO1xyXG5cclxuXHRcdFx0XHR2YXIgaXRlbUFuY2hvciA9IGl0ZW0uYW5jaG9yIHx8IHt4OjAseTowfTtcclxuXHRcdFx0XHR2YXIgaXRlbUFuZ2xlID0gaXRlbS5hbmdsZSB8fCAwO1xyXG5cdFx0XHRcdHZhciBpdGVtWCA9IGl0ZW0ueCB8fCAwO1xyXG5cdFx0XHRcdHZhciBpdGVtWSA9IGl0ZW0ueSB8fCAwO1xyXG5cdFx0XHRcdHZhciBpbWFnZUZyYW1lID0gaXRlbS5mcmFtZSB8fCBudWxsO1xyXG5cdFx0XHRcdHZhciB0aWxlU3ByaXRlV2lkdGggPSBpdGVtLnRpbGVTcHJpdGVXaWR0aCB8fCBnYW1lLndpZHRoO1xyXG5cdFx0XHRcdHZhciB0aWxlU3ByaXRlSGVpZ2h0ID0gaXRlbS50aWxlU3ByaXRlSGVpZ2h0IHx8IGdhbWUuaGVpZ2h0O1xyXG5cclxuXHRcdFx0XHRtb2RhbExhYmVsID0gbnVsbDtcclxuXHJcblx0XHRcdFx0aWYgKGl0ZW1UeXBlID09PSBcInRleHRcIiB8fCBpdGVtVHlwZSA9PT0gXCJiaXRtYXBUZXh0XCIpIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoaXRlbVR5cGUgPT09IFwidGV4dFwiKSB7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC50ZXh0KDAsIDAsIGNvbnRlbnQsIHtcclxuXHRcdFx0XHRcdFx0XHRmb250OiBpdGVtRm9udFNpemUgKyAncHggJyArIGl0ZW1Gb250ZmFtaWx5LFxyXG5cdFx0XHRcdFx0XHRcdGZpbGw6IFwiI1wiICsgU3RyaW5nKGl0ZW1Db2xvcikucmVwbGFjZShcIjB4XCIsIFwiXCIpLFxyXG5cdFx0XHRcdFx0XHRcdHN0cm9rZTogXCIjXCIgKyBTdHJpbmcoaXRlbVN0cm9rZSkucmVwbGFjZShcIjB4XCIsIFwiXCIpLFxyXG5cdFx0XHRcdFx0XHRcdHN0cm9rZVRoaWNrbmVzczogaXRlbVN0cm9rZVRoaWNrbmVzcyxcclxuXHRcdFx0XHRcdFx0XHRhbGlnbjogaXRlbUFsaWduXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ3RleHQnO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnVwZGF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoKGdhbWUud2lkdGggLyAyKSAtIChtb2RhbExhYmVsLndpZHRoIC8gMikpICsgb2Zmc2V0WDtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKChnYW1lLmhlaWdodCAvIDIpIC0gKG1vZGFsTGFiZWwuaGVpZ2h0IC8gMikpICsgb2Zmc2V0WTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5iaXRtYXBUZXh0KDAsIDAsIGl0ZW1Gb250ZmFtaWx5LCBTdHJpbmcoY29udGVudCksIGl0ZW1Gb250U2l6ZSk7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnYml0bWFwVGV4dCc7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuYWxpZ24gPSB0ZXh0QWxpZ247XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwudXBkYXRlVGV4dCgpO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtIChtb2RhbExhYmVsLndpZHRoIC8gMikpICsgb2Zmc2V0WDtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAobW9kYWxMYWJlbC5oZWlnaHQgLyAyKSkgKyBvZmZzZXRZO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcImltYWdlXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5pbWFnZSgwLCAwLCBjb250ZW50KTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdpbWFnZSc7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtICgobW9kYWxMYWJlbC53aWR0aCkgLyAyKSkgKyBvZmZzZXRYO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJ0aWxlU3ByaXRlXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC50aWxlU3ByaXRlKGl0ZW1YLCBpdGVtWSxcclxuXHRcdFx0XHRcdFx0dGlsZVNwcml0ZVdpZHRoLCB0aWxlU3ByaXRlSGVpZ2h0LCBjb250ZW50LCBpbWFnZUZyYW1lKTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5hbmNob3Iuc2V0VG8oaXRlbUFuY2hvci54LCBpdGVtQW5jaG9yLnkpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5hbmdsZSA9IGl0ZW1BbmdsZTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAndGlsZVNwcml0ZSc7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJzcHJpdGVcIikge1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnNwcml0ZSgwLCAwLCBhdGxhc1BhcmVudCwgY29udGVudCk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnNjYWxlLnNldFRvKGNvbnRlbnRTY2FsZSwgY29udGVudFNjYWxlKTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnc3ByaXRlJztcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcImJ1dHRvblwiKSB7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuYnV0dG9uKDAsIDAsIGF0bGFzUGFyZW50LCBjYWxsYmFjayxcclxuXHRcdFx0XHRcdFx0dGhpcywgYnV0dG9uSG92ZXIsIGNvbnRlbnQsIGJ1dHRvbkFjdGl2ZSwgY29udGVudCk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnNjYWxlLnNldFRvKGNvbnRlbnRTY2FsZSwgY29udGVudFNjYWxlKTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnYnV0dG9uJztcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJncmFwaGljc1wiKSB7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuZ3JhcGhpY3MoZ3JhcGhpY1csIGdyYXBoaWNIKTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYmVnaW5GaWxsKGdyYXBoaWNDb2xvciwgZ3JhcGhpY09wYWNpdHkpO1xyXG5cdFx0XHRcdFx0aWYgKGdyYXBoaWNSYWRpdXMgPD0gMCkge1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmRyYXdSZWN0KDAsIDAsIGdyYXBoaWNXLCBncmFwaGljSCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmRyYXdSb3VuZGVkUmVjdCgwLCAwLCBncmFwaGljVywgZ3JhcGhpY0gsIGdyYXBoaWNSYWRpdXMpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5lbmRGaWxsKCk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtICgobW9kYWxMYWJlbC53aWR0aCkgLyAyKSkgKyBvZmZzZXRYO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRtb2RhbExhYmVsW1wiX29mZnNldFhcIl0gPSAwO1xyXG5cdFx0XHRcdG1vZGFsTGFiZWxbXCJfb2Zmc2V0WVwiXSA9IDA7XHJcblx0XHRcdFx0bW9kYWxMYWJlbFtcImxvY2tQb3NpdGlvblwiXSA9IGxvY2tQb3NpdGlvbjtcclxuXHRcdFx0XHRtb2RhbExhYmVsLl9vZmZzZXRYID0gb2Zmc2V0WDtcclxuXHRcdFx0XHRtb2RhbExhYmVsLl9vZmZzZXRZID0gb2Zmc2V0WTtcclxuXHJcblxyXG5cdFx0XHRcdGlmIChjYWxsYmFjayAhPT0gZmFsc2UgJiYgaXRlbVR5cGUgIT09IFwiYnV0dG9uXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuaW5wdXRFbmFibGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwucGl4ZWxQZXJmZWN0Q2xpY2sgPSB0cnVlO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5wcmlvcml0eUlEID0gMTA7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmV2ZW50cy5vbklucHV0RG93bi5hZGQoY2FsbGJhY2ssIG1vZGFsTGFiZWwpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGl0ZW1UeXBlICE9PSBcImJpdG1hcFRleHRcIiAmJiBpdGVtVHlwZSAhPT0gXCJncmFwaGljc1wiKSB7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmJyaW5nVG9Ub3AoKTtcclxuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKG1vZGFsTGFiZWwpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5icmluZ1RvVG9wKCk7XHJcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmJyaW5nVG9Ub3AobW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKG1vZGFsTGFiZWwpO1xyXG5cdFx0XHRcdFx0bW9kYWxHcm91cC5icmluZ1RvVG9wKG1vZGFsTGFiZWwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bW9kYWxHcm91cC52aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdGdhbWUubW9kYWxzW3R5cGVdID0gbW9kYWxHcm91cDtcclxuXHJcblx0XHR9LFxyXG5cdFx0dXBkYXRlTW9kYWxWYWx1ZTogZnVuY3Rpb24gKHZhbHVlLCB0eXBlLCBpbmRleCwgaWQpIHtcclxuXHRcdFx0dmFyIGl0ZW07XHJcblx0XHRcdGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGluZGV4ICE9PSBudWxsKSB7XHJcblx0XHRcdFx0aXRlbSA9IGdhbWUubW9kYWxzW3R5cGVdLmdldENoaWxkQXQoaW5kZXgpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGlkICE9PSB1bmRlZmluZWQgJiYgaWQgIT09IG51bGwpIHtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChpdGVtLmNvbnRlbnRUeXBlID09PSBcInRleHRcIikge1xyXG5cdFx0XHRcdGl0ZW0udGV4dCA9IHZhbHVlO1xyXG5cdFx0XHRcdGl0ZW0udXBkYXRlKCk7XHJcblx0XHRcdFx0aWYgKGl0ZW0ubG9ja1Bvc2l0aW9uID09PSB0cnVlKSB7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpdGVtLnggPSAoKGdhbWUud2lkdGggLyAyKSAtIChpdGVtLndpZHRoIC8gMikpICsgaXRlbS5fb2Zmc2V0WDtcclxuXHRcdFx0XHRcdGl0ZW0ueSA9ICgoZ2FtZS5oZWlnaHQgLyAyKSAtIChpdGVtLmhlaWdodCAvIDIpKSArIGl0ZW0uX29mZnNldFk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwiYml0bWFwVGV4dFwiKSB7XHJcblx0XHRcdFx0aXRlbS50ZXh0ID0gdmFsdWU7XHJcblx0XHRcdFx0aXRlbS51cGRhdGVUZXh0KCk7XHJcblx0XHRcdFx0aWYgKGl0ZW0ubG9ja1Bvc2l0aW9uID09PSB0cnVlKSB7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpdGVtLnggPSAoKGdhbWUud2lkdGggLyAyKSAtIChpdGVtLndpZHRoIC8gMikpICsgaXRlbS5fb2Zmc2V0WDtcclxuXHRcdFx0XHRcdGl0ZW0ueSA9ICgoZ2FtZS5oZWlnaHQgLyAyKSAtIChpdGVtLmhlaWdodCAvIDIpKSArIGl0ZW0uX29mZnNldFk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwiaW1hZ2VcIikge1xyXG5cdFx0XHRcdGl0ZW0ubG9hZFRleHR1cmUodmFsdWUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHRcdGdldE1vZGFsSXRlbTogZnVuY3Rpb24gKHR5cGUsIGluZGV4KSB7XHJcblx0XHRcdHJldHVybiBnYW1lLm1vZGFsc1t0eXBlXS5nZXRDaGlsZEF0KGluZGV4KTtcclxuXHRcdH0sXHJcblx0XHRzaG93TW9kYWw6IGZ1bmN0aW9uICh0eXBlKSB7XHJcblx0XHRcdGdhbWUud29ybGQuYnJpbmdUb1RvcChnYW1lLm1vZGFsc1t0eXBlXSk7XHJcblx0XHRcdGdhbWUubW9kYWxzW3R5cGVdLnZpc2libGUgPSB0cnVlO1xyXG5cdFx0XHQvLyB5b3UgY2FuIGFkZCBhbmltYXRpb24gaGVyZVxyXG5cdFx0fSxcclxuXHRcdGhpZGVNb2RhbDogZnVuY3Rpb24gKHR5cGUpIHtcclxuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0udmlzaWJsZSA9IGZhbHNlO1xyXG5cdFx0XHQvLyB5b3UgY2FuIGFkZCBhbmltYXRpb24gaGVyZVxyXG5cdFx0fSxcclxuXHRcdGRlc3Ryb3lNb2RhbDogZnVuY3Rpb24gKHR5cGUpIHtcclxuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0uZGVzdHJveSgpO1xyXG5cdFx0XHRkZWxldGUgZ2FtZS5tb2RhbHNbdHlwZV07XHJcblx0XHR9XHJcblx0fTtcclxufTtcclxuIiwiXHJcbmNsYXNzIENsaWVudCB7XHJcbiAgICBcclxuXHRjb25zdHJ1Y3RvcihzZXB0aWtvbikge1xyXG4gICAgICAgIFxyXG5cdFx0dGhpcy5zb2NrZXQgPSBpby5jb25uZWN0KCk7XHJcbiAgICAgICAgdGhpcy5zZXB0aWtvbiA9IHRoaXMuc29ja2V0LnNlcHRpa29uID0gc2VwdGlrb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2xvZycsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTE9HOiAnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCd1cGRhdGUnLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgaWYoZGF0YS50eXBlID09IFwicGVyc29ubmVsXCIpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZGF0YS5kZXRhaWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi5hZGRDbG9uZShkYXRhLmRldGFpbHNbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEudHlwZSA9PSBcInJlc291cmNlc1wiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3Rpb24gPT0gXCJpbml0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLmluaXRSZXNvdXJjZXMoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihkYXRhLmFjdGlvbiArIFwiIG5vdCBhIGxlZ2FsIGFjdGlvbiBmb3IgUmVzb3VyY2UgdXBkYXRlLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09IFwiZGljZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZSBkaWNlP1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24uZ2FtZS5kaWNlLnNldFZhbHVlKGRhdGEudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVUERBVEU6Jyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEudHlwZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdyZXF1ZXN0JywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSRVFVRVNUOiAnKTtcclxuICAgICAgICAgICAgc3dpdGNoKGRhdGEuZGV0YWlscy50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYXNrU3RhcnRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLnNob3dNb2RhbCgnYXNrU3RhcnQnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2FjdGlvbicsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mKHRoaXMuc2VwdGlrb25bZGF0YS5jYWxsYmFja10pID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb25bZGF0YS5jYWxsYmFja10oZGF0YS5kZXRhaWxzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IG5vIG1ldGhvZCBmb3VuZCBjYWxsZWQgc2VwdGlrb24uXCIgKyBkYXRhLmNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cdH1cclxuXHJcblx0YXNrTmV3UGxheWVyKCkge1xyXG5cdFx0dGhpcy5zb2NrZXQuZW1pdCgnbmV3UGxheWVyJywge3V1aWQ6bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcHRVVUlEJyl9KTtcclxuXHR9XHJcbiAgICBcclxuICAgIHNlbmRJbnB1dChwYXlsb2FkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbmRpbmcgaW5wdXQnKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdpbnB1dCcsIHBheWxvYWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnQ7XHJcbiIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXHJcblxyXG5jbGFzcyBDbG9uZSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUsIHV1aWQpIHtcclxuICAgIHN1cGVyKGdhbWUsIHgsIHksICdjbG9uZScsIGZyYW1lKTtcclxuICAgICAgICBcclxuICAgIC8vc2V0dXAgcGh5c2ljcyBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNjUpO1xyXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZUJvZHkodGhpcyk7XHJcbiAgICAvL3RoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMudXVpZCA9IHV1aWQ7XHJcbiAgICAvL3NldCBzaXplXHJcbiAgICB0aGlzLndpZHRoID0gMjc7XHJcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xyXG4gICAgXHJcbiAgICAvL3NldCByb3RhdGlvbiAodGhpcyBzaG91bGQgYmUgYmFzZWQgb24gdGhlIGJhc2UgdGhpcyBjbG9uZSBvY2N1cGllcylcclxuICAgIHRoaXMuYW5nbGUgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSAqIC0xO1xyXG5cclxuICAgIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5waXhlbHNUb1RpbGUodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XHJcblxyXG4gIH1cclxuICBcclxuICByZW1vdmUoKSB7XHJcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIGhpZ2hsaWdodE9uKCkge1xyXG4gICAgdGhpcy50aW50ID0gMHhGRjU1MDA7XHJcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0uYWxwaGEgPSAxO1xyXG4gIH1cclxuICBcclxuICBoaWdobGlnaHRPZmYoKSB7XHJcbiAgICB0aGlzLnRpbnQgPSAweGZmZmZmZjtcclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS5hbHBoYSA9IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGdldExlZ2FsTW92ZXMoKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSB0aGlzLmdhbWUuc2VwdGlrb24ucGl4ZWxzVG9UaWxlKHRoaXMueCwgdGhpcy55KTtcclxuICAgIHZhciBjdXJyZW50TGVnYWxNb3ZlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5nZXRMZWdhbE1vdmVzKHRoaXMuZ2FtZS5nbG9iYWwubGFzdERpY2VSb2xsLCB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMpO1xyXG4gICAgdmFyIGxlZ2FsVGlsZXNBcnJheSA9IFtdO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGZvciAodmFyIHRpbGUgaW4gY3VycmVudExlZ2FsTW92ZXMpIHtcclxuICAgICAgICBsZWdhbFRpbGVzQXJyYXkucHVzaCh0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W2N1cnJlbnRMZWdhbE1vdmVzW3RpbGVdLnhdW2N1cnJlbnRMZWdhbE1vdmVzW3RpbGVdLnldKTtcclxuICAgICAgICAvL2xlZ2FsVGlsZXNBcnJheVtsZWdhbFRpbGVzQXJyYXkubGVuZ3RoLTFdLmFscGhhID0gMC41O1xyXG4gICAgICAgIC8vbGVnYWxUaWxlc0FycmF5W2xlZ2FsVGlsZXNBcnJheS5sZW5ndGgtMV0ubGVnYWxGb3IgPSB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gbGVnYWxUaWxlc0FycmF5O1xyXG4gIH1cclxuICBcclxuICBtb3ZlKGNvb3JkaW5hdGVzKSB7XHJcbiAgXHJcbiAgICAvLyBDbGVhciBcImxlZ2FsRm9yXCJcclxuICAgIGZvciAodmFyIHRpbGUgaW4gdGhpcy5sZWdhbFRpbGVzQXJyYXkpIHtcclxuICAgICAgICB0aGlzLmxlZ2FsVGlsZXNBcnJheVt0aWxlXS5hbHBoYSA9IDA7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlc0FycmF5W3RpbGVdLmxlZ2FsRm9yO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBNb3ZlIHRvIG5ldyBob21lXHJcbiAgICAvLyBOZWVkIHRvIGFkZCBhIGNoZWNrIGZvciBhcm1lZCBvcHBvbmVudHMgKGJpb2Ryb25lcy9lc3Bpb25hZ2VkIGNsb25lcy9jbG9uZXMgaW4gZW5lbXkgYmFzZSwgZXRjLilcclxuICAgIHZhciBwb2ludHMgPSB0aGlzLmdhbWUuc2VwdGlrb24udGlsZVRvUGl4ZWxzKGNvb3JkaW5hdGVzLngsIGNvb3JkaW5hdGVzLnkpO1xyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IGZhbHNlO1xyXG4gICAgdmFyIGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy55IC0gcG9pbnRzLnkgKyB0aGlzLnggLSBwb2ludHMueCkudG9GaXhlZCgxKTtcclxuICAgIFxyXG4gICAgLy8gVXBkYXRlIHRoZSBwZXJzb25uZWwgY29vcmRpbmF0ZSBwcm9wZXJ0eVxyXG4gICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XHJcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgLy8gV2FpdCBmb3IgYW5pbWF0aW9uIHRvIGNvbXBsZXRlLCB0aGVuIHByb2Nlc3MgdGlsZSB0cmlnZ2VyXHJcbiAgICB2YXIgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMpLnRvKCB7eDpwb2ludHMueCwgeTpwb2ludHMueX0sIChkaXN0YW5jZSoxMSksIFBoYXNlci5FYXNpbmcuQ3ViaWMuT3V0LCB0cnVlKTtcclxuICAgIHR3ZWVuLm9uQ29tcGxldGUuYWRkKHRoaXMuZ2FtZS5zZXB0aWtvbi50cmlnZ2VyVGlsZSwgdGhpcy5nYW1lLnNlcHRpa29uKTtcclxuICAgIFxyXG4gICAgLy8gQ2xlYXIgdGhpcy5jdXJyZW50TGVnYWxNb3Zlc1xyXG4gICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlc0FycmF5O1xyXG4gICAgZGVsZXRlIHRoaXMuY3VycmVudExlZ2FsTW92ZXM7ICAgIFxyXG4gIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbG9uZTtcclxuIiwiLy9Eb2N1bWVudGF0aW9uIGZvciBQaGFzZXIncyAoMi42LjIpIHNwcml0ZXM6OiBwaGFzZXIuaW8vZG9jcy8yLjYuMi9QaGFzZXIuU3ByaXRlLmh0bWxcclxuY2xhc3MgQ3Jvc3NoYWlycyBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUpIHtcclxuICAgIHN1cGVyKGdhbWUsIHgsIHksICdjcm9zc2hhaXJzJywgZnJhbWUpO1xyXG5cclxuICAgIC8vc2V0IHNpemVcclxuICAgIHRoaXMud2lkdGggPSAzNTsgXHJcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xyXG5cclxuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpe1xyXG4gICAgdGhpcy54ID0gdGhpcy5nYW1lLmlucHV0Lm1vdXNlUG9pbnRlci54O1xyXG4gICAgdGhpcy55ID0gdGhpcy5nYW1lLmlucHV0Lm1vdXNlUG9pbnRlci55O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyb3NzaGFpcnM7XHJcbiIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXHJcbmNsYXNzIERpY2UgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7ICBcclxuICAgIHN1cGVyKGdhbWUsIHgsIHksICdkaWNlJywgZnJhbWUpO1xyXG5cclxuICAgIC8vc2V0dXAgcGh5c2ljcyBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XHJcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlQm9keSh0aGlzKTtcclxuXHJcbiAgICAvL3NldCBjbGljayBldmVudFxyXG4gICAgdGhpcy5pbnB1dEVuYWJsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuZXZlbnRzLm9uSW5wdXREb3duLmFkZCh0aGlzLmNsaWNrZWQsIHRoaXMpO1xyXG5cclxuICAgIC8vc2V0IHNpemVcclxuICAgIHRoaXMud2lkdGggPSA1MDtcclxuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XHJcbiAgICB0aGlzLmZpbHRlcnMgPSBbdGhpcy5nYW1lLmFkZC5maWx0ZXIoJ0dyYXknKV07XHJcbiAgICB0aGlzLmFscGhhID0gMC41O1xyXG4gICAgXHJcbiAgICB0aGlzLnZhbHVlID0gMTA7XHJcbiAgICB0aGlzLmZyYW1lID0gdGhpcy52YWx1ZS0xO1xyXG4gIH1cclxuXHJcbiAgY2xpY2tlZCAoKSB7XHJcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICdkaWNlQ2xpY2tlZCd9KTtcclxuICB9XHJcblxyXG4gIGVuYWJsZSgpIHtcclxuICAgICAgdGhpcy5hbHBoYSA9IDE7XHJcbiAgICAgIHRoaXMuZmlsdGVycyA9IG51bGw7XHJcbiAgICAgIHRoaXMuaW5wdXRFbmFibGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGRpc2FibGUoKSB7XHJcbiAgICAgIHRoaXMuYWxwaGEgPSAwLjU7XHJcbiAgICAgIHRoaXMuZmlsdGVycyA9IFt0aGlzLmdhbWUuYWRkLmZpbHRlcignR3JheScpXTtcclxuICAgICAgdGhpcy5pbnB1dEVuYWJsZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHNldFZhbHVlKHZhbHVlKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmZyYW1lID0gdmFsdWUgLSAxO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGljZTtcclxuIiwiY2xhc3MgTWFzdGVyIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKCkgeyBcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hc3RlcjsiLCJjbGFzcyBPcmRuYW5jZSB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRuYW5jZTsiLCJjbGFzcyBQZXJzb25uZWwgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUpIHtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAnY2xvbmUnLCBmcmFtZSk7ICBcclxuICAgIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29ubmVsOyIsImNsYXNzIFJlc291cmNlcyB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICB0aGlzLnJlc291cmNlRW51bSA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgIE9YWUdFTjogMCxcclxuICAgICAgICBST0NLRVQ6IDEsXHJcbiAgICAgICAgTUVUQUw6IDIsXHJcbiAgICAgICAgRU5FUkdZOiAzLFxyXG4gICAgICAgIEJJT01BU1M6IDQsXHJcbiAgICAgICAgQklPRFJPTkU6IDUsXHJcbiAgICAgICAgVVJBTklVTTogNlxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnJlc291cmNlcyA9IHt9O1xyXG4gICAgZm9yKHZhciB0eXBlIGluIHRoaXMucmVzb3VyY2VFbnVtKSB7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZXNbdGhpcy5yZXNvdXJjZUVudW1bdHlwZV1dID0gNTtcclxuICAgIH07XHJcbiAgfVxyXG4gIFxyXG4gIGNoZWNrKHR5cGUsIGNvdW50KSB7XHJcbiAgICBpZih0aGlzLnJlc291cmNlc1t0aGlzLnJlc291cmNlRW51bVt0eXBlXV0gPiBjb3VudClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgXHJcbiAgZ2V0Q291bnQodHlwZSkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzW3R5cGVdO1xyXG4gIH1cclxuICAgIFxyXG4gIGFkZCh0eXBlLCBjb3VudCkge1xyXG4gIH1cclxuICBcclxuICByZW1vdmUodHlwZSwgY291bnQpIHtcclxuICAgIHRoaXMucmVzb3VyY2VzW3R5cGVdIC09IGNvdW50O1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VzOyIsImltcG9ydCBDbG9uZSBmcm9tICcuLi9wcmVmYWJzL2Nsb25lJztcclxuXHJcbmNsYXNzIFNlcHRpa29uIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHsgXHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgXHJcbiAgICB0aGlzLnBsYXllciA9IHtcclxuICAgICAgICBpZDogMCxcclxuICAgICAgICBwZXJzb25uZWxBcnJheTogW11cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5vcHBvbmVudCA9IHtcclxuICAgICAgICBwZXJzb25uZWxBcnJheTogW11cclxuICAgIH07XHJcbiAgICBcclxuICAgIHRoaXMuc2hvd25UaWxlcyA9IFtdO1xyXG4gICAgdGhpcy50aWxlQXJyYXkgPSBbXTtcclxuICAgIHRoaXMuYmdSYXRpbyA9IDA7XHJcbiAgICB0aGlzLndvcmxkUmF0aW8gPSAwO1xyXG4gICAgdGhpcy50dXJuU3RhdGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgU1RBUlQ6IDAsXHJcbiAgICAgICAgU0VMRUNUX0NMT05FOiAxLCBcclxuICAgICAgICBNT1ZFX0NMT05FOiAyLFxyXG4gICAgICAgIFNFTEVDVF9HVU5ORVI6IDMsXHJcbiAgICAgICAgU0VMRUNUX0FDVElPTl9PUkRFUjogNCwgXHJcbiAgICAgICAgQUNUSU9OOiA1LFxyXG4gICAgICAgIEVORDogNlxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRpcmVjdGlvbkVudW0gPSBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICBOT1JUSDoxLFxyXG4gICAgICAgIEVBU1Q6MixcclxuICAgICAgICBTT1VUSDo0LFxyXG4gICAgICAgIFdFU1Q6OFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnR1cm5TdGF0ZSA9IDA7XHJcblxyXG4gIH1cclxuXHJcbiAgc2hvd01vZGFsKHR5cGUpIHtcclxuICAgIHRoaXMuZ2FtZS5tb2RhbC5zaG93TW9kYWwodHlwZSk7XHJcbiAgfVxyXG5cclxuICBcclxuICBkaWNlUm9sbGVkKGRldGFpbHMpIHtcclxuICAgIHRoaXMuZ2FtZS5kaWNlLnNldFZhbHVlKGRldGFpbHMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb2ZmZXJEaWNlKCkge1xyXG4gICAgICB0aGlzLmdhbWUuZGljZS5lbmFibGUoKTtcclxuICB9XHJcbiAgXHJcbiAgYWRkQ2xvbmUoZGV0YWlscykge1xyXG4gICAgdmFyIHBvaW50ID0gdGhpcy50aWxlVG9QaXhlbHMoZGV0YWlscy54LCBkZXRhaWxzLnkpO1xyXG4gICAgdmFyIGNsb25lID0gbmV3IENsb25lKHRoaXMuZ2FtZSwgcG9pbnQueCwgcG9pbnQueSwgbnVsbCwgZGV0YWlscy51dWlkKTtcclxuICAgIGlmKGRldGFpbHMucGxheWVySUQgPT0gdGhpcy5wbGF5ZXIuaWQpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheS5wdXNoKGNsb25lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheS5wdXNoKGNsb25lKTtcclxuICAgIH1cclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFkZChjbG9uZSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVBbGxQZXJzb25uZWwoKXtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZih0aGlzLmdhbWUuYm9hcmRHcm91cC5jaGlsZHJlbltpXS5jb25zdHJ1Y3RvciA9PSBDbG9uZSl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNoaWxkcmVuW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgdXBkYXRlUGxheWVyKGRldGFpbHMpIHtcclxuICAgIGZvciAodmFyIGkgaW4gZGV0YWlscykge1xyXG4gICAgICAgIHRoaXMucGxheWVyW2ldID0gZGV0YWlsc1tpXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGluaXRSZXNvdXJjZXMoKSB7XHJcbiAgICAgIFxyXG4gIH1cclxuICBcclxuICBjcmVhdGVUaWxlQXJyYXkoY29sdW1ucywgcm93cywgcG9pbnQpIHtcclxuICAgIHRoaXMudGlsZURldGFpbCA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRKU09OKCd0aWxlRGV0YWlsJyk7XHJcblxyXG4gICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcyA9IHt4OjAsIHk6MH07XHJcblxyXG4gICAgXHJcbiAgICB0aGlzLm1hcmdpbkJvdHRvbSA9IHRoaXMubWFyZ2luVG9wID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAuaGVpZ2h0LzE3LjQ3NTtcclxuICAgIHRoaXMubWFyZ2luTGVmdCA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoLzI0O1xyXG4gICAgdGhpcy5tYXJnaW5SaWdodCA9ICB0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aC8yNi4zMTU4O1xyXG4gICAgdGhpcy50aWxlV2lkdGggPSB0aGlzLnRpbGVIZWlnaHQgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aC8zOTtcclxuICAgIHRoaXMucGFkZGluZyA9ICh0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aCAtICh0aGlzLm1hcmdpbkxlZnQgKyB0aGlzLm1hcmdpblJpZ2h0KSAtICh0aGlzLnRpbGVXaWR0aCAqIDMxKSkvMzA7XHJcbiAgICAgICAgXHJcbiAgICAvL3RoaXMudGlsZVdpZHRoID0gMjU7Ly8odGhpcy5iYWNrZ3JvdW5kV2lkdGggLSAoKHRoaXMubWFyZ2luTGVmdCArIHRoaXMubWFyZ2luUmlnaHQpICsgKHRoaXMucGFkZGluZyAqIChjb2x1bW5zIC0gMSkpKSkgLyBjb2x1bW5zO1xyXG4gICAgLy90aGlzLnRpbGVIZWlnaHQgPSAyNTsvLyh0aGlzLmJhY2tncm91bmRIZWlnaHQgLSAoKHRoaXMubWFyZ2luVG9wICsgdGhpcy5tYXJnaW5Cb3R0b20pICsgKHRoaXMucGFkZGluZyAqIChyb3dzIC0gMSkpKSkgLyByb3dzO1xyXG4gICAgICAgIFxyXG4gICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy54ID0gcG9pbnQueCArIHRoaXMubWFyZ2luTGVmdDtcclxuICAgIHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMueSA9IHBvaW50LnkgKyB0aGlzLm1hcmdpblRvcDtcclxuICAgIFxyXG4gICAgdmFyIGdyYXBoaWNzID0gdGhpcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcclxuICAgIC8vZ3JhcGhpY3MubGluZVN0eWxlKDQsIDB4ZmZkOTAwLCAxKTtcclxuICAgIGdyYXBoaWNzLmJlZ2luRmlsbCgweGZmZDkwMCwgMSk7XHJcbiAgICBncmFwaGljcy5kcmF3UmVjdCgxMDAsIDEwMCwgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZUhlaWdodCk7XHJcbiAgICBcclxuICAgIGZvciAodmFyIGNvbHVtbiA9IDA7IGNvbHVtbiA8IGNvbHVtbnM7IGNvbHVtbisrKSB7XHJcbiAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgcm93czsgcm93KyspIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciB4ID0gdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy54ICsgKHRoaXMudGlsZVdpZHRoICogY29sdW1uKSArICh0aGlzLnBhZGRpbmcgKiBjb2x1bW4gLSAxKTtcclxuICAgICAgICAgICAgdmFyIHkgPSB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnkgKyAodGhpcy50aWxlSGVpZ2h0ICogcm93KSArICh0aGlzLnBhZGRpbmcgKiByb3cgLSAxKTtcclxuICAgICAgICAgICAgZ3JhcGhpY3MuZ2VuZXJhdGVUZXh0dXJlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgY3VycmVudFRpbGUgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh4LCB5LCBncmFwaGljcy5nZW5lcmF0ZVRleHR1cmUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFkZChjdXJyZW50VGlsZSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlLmFscGhhID0gMDsgLy8gMC4yNTtcclxuICAgICAgICAgICAgY3VycmVudFRpbGUuaW5wdXRFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY3VycmVudFRpbGUuZXZlbnRzLm9uSW5wdXREb3duLmFkZCh0aGlzLnRpbGVDbGlja2VkLCB0aGlzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy50aWxlQXJyYXlbY29sdW1uXSA9PSAndW5kZWZpbmVkJykgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjb2x1bW5dID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NvbHVtbl1bcm93XSA9IGN1cnJlbnRUaWxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZ3JhcGhpY3MuZGVzdHJveSgpO1xyXG4gICAgXHJcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy50aWxlRGV0YWlsKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRpbGVEZXRhaWwuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMudGlsZURldGFpbFtrZXldO1xyXG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIC8vIHNraXAgbG9vcCBpZiB0aGUgcHJvcGVydHkgaXMgZnJvbSBwcm90b3R5cGVcclxuICAgICAgICAgICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgbG9jYXRpb25Db3VudCA9IG9ialtwcm9wXS5sb2NhdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IoIHZhciBpID0gMDsgaSA8IGxvY2F0aW9uQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgY29vcmRzID0gb2JqW3Byb3BdLmxvY2F0aW9uc1tpXS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9IGNvb3Jkc1swXTtcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gY29vcmRzWzFdO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlRGFtYWdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZU9jY3VwaWVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlWCA9IHg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlWSA9IHk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlVHlwZSA9IG9ialtwcm9wXS50eXBlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy50aWxlQXJyYXlbeF1beV0gIT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZU5hbWUgPSBvYmpbcHJvcF0ubmFtZTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4ICsgXCI6XCIgKyB5ICsgXCIgbm90IGZvdW5kIVwiKTtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW3Byb3BdLnByb3BlcnRpZXMgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XVsndGlsZVByb3BlcnRpZXMnXSA9IG9ialtwcm9wXS5wcm9wZXJ0aWVzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfX1cclxuXHJcbiAgcGl4ZWxzVG9UaWxlKHgsIHkpIHtcclxuICAgIHZhciB4VGlsZSA9IDA7XHJcbiAgICB2YXIgeVRpbGUgPSAwO1xyXG4gICAgXHJcbiAgICBmb3IgKHZhciBjb2wgaW4gdGhpcy50aWxlQXJyYXkpIHtcclxuICAgICAgICBmb3IgKHZhciByb3cgaW4gdGhpcy50aWxlQXJyYXlbY29sXSkge1xyXG4gICAgICAgICAgICB2YXIgb2JqID0gdGhpcy50aWxlQXJyYXlbY29sXVtyb3ddXHJcbiAgICAgICAgICAgIGlmKHggPiBvYmoueCAmJiB4IDwgb2JqLnggKyBvYmoud2lkdGgpXHJcbiAgICAgICAgICAgICAgICB4VGlsZSA9IHBhcnNlSW50KGNvbCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoeSA+IG9iai55ICYmIHkgPCBvYmoueSArIG9iai5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICB5VGlsZSA9IHBhcnNlSW50KHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHt4OnhUaWxlLCB5OnlUaWxlfTtcclxuICB9XHJcbiAgXHJcbiAgdGlsZVRvUGl4ZWxzKHgsIHkpIHtcclxuICAgIHZhciB0aWxlT2JqID0gdGhpcy50aWxlQXJyYXlbeF1beV07XHJcbiAgICByZXR1cm4ge3g6dGlsZU9iai54ICsgdGlsZU9iai53aWR0aC8yLCB5OnRpbGVPYmoueSArIHRpbGVPYmouaGVpZ2h0LzJ9O1xyXG4gIH1cclxuICBcclxuICB0aWxlQ2xpY2tlZChvYmopIHtcclxuICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ3RpbGVDbGlja2VkJywgeDpwYXJzZUludChvYmoudGlsZVgpLCB5OnBhcnNlSW50KG9iai50aWxlWSl9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgXHJcbiAgdHJpZ2dlclRpbGUoY2FsbGVyKSB7XHJcbiAgXHJcbiAgICB2YXIgdGlsZSA9IHRoaXMudGlsZUFycmF5W2NhbGxlci5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW2NhbGxlci5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldO1xyXG4gICAgY2FsbGVyLmlzR3VubmVyID0gZmFsc2U7XHJcbiAgICB2YXIgcHJvcHMgPSB0aWxlLnRpbGVQcm9wZXJ0aWVzO1xyXG4gICAgXHJcbiAgICBzd2l0Y2godGlsZS50aWxlVHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3N1cmZhY2UnOiBcclxuICAgICAgICAgICAgY2FsbGVyLmlzR3VubmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hUdXJuKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlICdiYXR0bGUnOlxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3BzLnJlc291cmNlQ29zdENvdW50ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDQU4gVEhJUyBURUFNIEFGRk9SRCBUSEUgQ09TVD9cclxuICAgICAgICAgICAgICAgIC8vIEVYQ0hBTkdFIFJFU09VUkNFUyAvLyBQQVkgVVAhIVxyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBhdmFpbGFibGUgcmVzb3VyY2UgY291bnQgYW5kIHByZXBhcmUgdG8gb2ZmZXIgXCJndW5uZXJcIiBjbG9uZXMgZm9yIHNlbGVjdGlvbi5cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJJcyB0aGlzIHJlc291cmNlIGF2YWlsYWJsZT9cIik7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBUeXBlcyBvZiBiYXR0bGUgdGlsZXMgd2l0aCBhIEZJUkUgYWN0aW9uOlxyXG4gICAgICAgICAgICAgICAgLy8gIC0gU2F0ZWxsaXRlOiBndW5uZXI6dHJ1ZSwgcHJvamVjdGlsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy8gIC0gVGhlcm1pdGU6IGd1bm5lcjp0cnVlLCBwcm9qZWN0aWxlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgLy8gIC0gU2hpZWxkOiBndW5uZXI6dHJ1ZSwgcHJvamVjdGlsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy8gIC0gQmlvZHJvbmU6IGd1bm5lcjp0cnVlLCBwcm9qZWN0aWxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAvLyAgLSBMYXNlcjogZ3VubmVyOnRydWUsIHByb2plY3RpbGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAvLyAgLSBSb2NrZXQ6IGd1bm5lcjp0cnVlLCBwcm9qZWN0aWxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aWxlLnRpbGVOYW1lKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxUZWFtLm9mZmVyR3VubmVycygpID09IGZhbHNlICYmICh0aWxlLnRpbGVOYW1lID09IFwic2F0ZWxsaXRlXCIgfHwgdGlsZS50aWxlTmFtZSA9PSBcInRoZXJtaXRlXCIgfHwgdGlsZS50aWxlTmFtZSA9PSBcInNoaWVsZFwiIHx8IHRpbGUudGlsZU5hbWUgPT0gXCJiaW9kcm9uZVwiIHx8IHRpbGUudGlsZU5hbWUgPT0gXCJsYXNlclwiIHx8IHRpbGUudGlsZU5hbWUgPT0gXCJyb2NrZXRcIiApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hUdXJuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubG9jYWxUZWFtLmNoZWNrUmVjKHRoaXMubG9jYWxUZWFtLnJlY0VudW1bcHJvcHMucmVzb3VyY2VDb3N0VHlwZS50b1VwcGVyQ2FzZSgpXSwgcHJvcHMucmVzb3VyY2VDb3N0Q291bnQpKTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMubG9jYWxUZWFtLmNoZWNrUmVjKHRoaXMubG9jYWxUZWFtLnJlY0VudW1bcHJvcHMucmVzb3VyY2VDb3N0VHlwZS50b1VwcGVyQ2FzZSgpXSwgcHJvcHMucmVzb3VyY2VDb3N0Q291bnQpID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxUZWFtLnJlbW92ZVJlYyh0aGlzLmxvY2FsVGVhbS5yZWNFbnVtW3Byb3BzLnJlc291cmNlQ29zdFR5cGUudG9VcHBlckNhc2UoKV0sIHByb3BzLnJlc291cmNlQ29zdENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTmV3IGNvdW50IG9mIFwiICsgcHJvcHMucmVzb3VyY2VDb3N0VHlwZSArIFwiIGlzIFwiICsgdGhpcy5sb2NhbFRlYW0uZ2V0UmVjQ291bnQodGhpcy5sb2NhbFRlYW0ucmVjRW51bVtwcm9wcy5yZXNvdXJjZUNvc3RUeXBlLnRvVXBwZXJDYXNlKCldKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5sb2NhbFRlYW0ub2ZmZXJHdW5uZXJzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9uID0ge3Byb3BzLCBjYWxsZXJ9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBPRkZFUiBHVU5ORVJTIEFORCBBV0FJVCBTRUxFQ1RJT04gKHJlbWVtYmVyIHRoZSBjb3N0IHBlciBndW5uZXIpXHJcbiAgICAgICAgICAgIC8vIFRoaXMgd2lsbCByZXF1aXJlIGFuIGFycmF5IG9mIGNsb25lcyBhc3NvY2lhdGVkIHdpdGggdGhlIHRlYW0uIFxyXG4gICAgICAgICAgICAvLyBJdGVyYXRlIHRoZSBhcnJheSBsb29raW5nIGZvciAnaXNHdW5uZXIgPT0gdHJ1ZSdcclxuICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IGFsbCBcImd1bm5lclwiIGNsb25lc1xyXG4gICAgICAgICAgICAvLyBBbGxvdyBzZWxlY3Rpb24gb2Ygb25seSBhcyBtYW55IGFzIHRlYW0gY2FuIGFmZm9yZFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBUaGlzIHdpbGwgY2FsbCB0aGUgbWV0aG9kIGRlZmluZWQgaW4gSlNPTi4gSW4gdGhpcyBjYXNlIGZpcmluZyBhIHdlYXBvbi5cclxuICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aGUgc2VsZWN0ZWQgZ3VubmVycyBhbmQgY2FsbCB0aGUgbWV0aG9kLlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ2FybW9yeSc6XHJcbiAgICAgICAgICAgIC8vU0VUIFRFQU0gV0VBUE9OUyFcclxuICAgICAgICAgICAgLy8gVGhpcyByZXF1aXJlcyBhIFRlYW0gcHJvcGVydHkgZm9yIHN0b3JpbmcgYSB3ZWFwb25zIChhcm1zPykgYXJyYXkuXHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoVHVybigpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSAncHJvZHVjdGlvbic6XHJcbiAgICAgICAgICAgIC8vIE5PVEU6IFRoZXNlIGFyZSByZXF1aXJlZCBpZiByZXNvdXJjZXMgYWxsb3dcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wcy5yZXNvdXJjZUNvc3RDb3VudCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgLy8gQ0FOIFRISVMgVEVBTSBBRkZPUkQgVEhFIENPU1Q/XHJcbiAgICAgICAgICAgICAgICAvLyBSZXF1aXJlcyBUZWFtIG9iamVjdCB0byBjaGVjayBmb3IgcmVzb3VyY2VzXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEdldCBjb3N0IGNvdW50XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgY29zdCB0eXBlXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEdldCB5aWVsZCBjb3VudFxyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHlpZWxkIHR5cGVcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gRXhlY3V0ZSB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hUdXJuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ2xvY2snOlxyXG4gICAgICAgICAgICAvLyBOT1RISU5HIEhFUkUgKG1heWJlIGFuIHVwZGF0ZSBmZWF0dXJlPz8pXHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoVHVybigpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9OyBcclxuICAgICAgICAgICAgXHJcbiAgICAvLyBDT01NSVQgQUNUSU9OXHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgICBmaXJlKHdlYXBvblR5cGUsIGNhbGxlcikge1xyXG4gICAgY29uc29sZS5sb2coXCJGaXJpbmcgdGhlIFwiICsgd2VhcG9uVHlwZSk7XHJcbiAgICBcclxuICAgIHN3aXRjaCAod2VhcG9uVHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2xhc2VyJzpcclxuICAgICAgICAgICAgLy9mb3IgKHZhciBpIGluIHRoaXMubG9jYWxUZWFtLnNlbGVjdGVkR3VubmVycykge1xyXG4gICAgICAgICAgICAvLyAgICB0aGlzLnNob290VGlsZSh0aGlzLmxvY2FsVGVhbS5zZWxlY3RlZEd1bm5lcnNbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcyk7XHJcbiAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgICAvL2JyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlICdzYXRlbGxpdGUnOlxyXG4gICAgICAgICAgICAvLyBQTEFDRSBBIFNBVEVMTElURVxyXG4gICAgICAgICAgIC8vIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlICd0aGVybWl0ZSc6XHJcbiAgICAgICAgICAgIC8vdGhpcy5zaG9vdFRpbGUoY2FsbGVyLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMsIHRydWUpO1xyXG4gICAgICAgICAgICAvL2JyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlICdzaGllbGQnOlxyXG4gICAgICAgICAgICAvL2JyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlICdiaW9kcm9uZSc6XHJcbiAgICAgICAgICAgIC8vYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ3JvY2tldCc6IFxyXG4gICAgICAgICAgICAvL2JyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMubG9jYWxUZWFtLnNlbGVjdGVkR3VubmVycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG9vdFRpbGUodGhpcy5sb2NhbFRlYW0uc2VsZWN0ZWRHdW5uZXJzW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgdGhpcy5sb2NhbFRlYW0uY2xlYXJHdW5uZXJzKCk7XHJcbiAgICAvL3RoaXMuZ2FtZS5zZXB0aWtvbi50dXJuU3RhdGUgPSB0aGlzLmdhbWUuc2VwdGlrb24udHVyblN0YXRlRW51bS5TVEFSVDtcclxuICAgIHRoaXMuZmluaXNoVHVybigpO1xyXG4gIH1cclxuICBcclxuICByZXBhaXIoY291bnQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVwYWlyIFwiICsgY291bnQgKyBcIiBvZiB0aGUgdGhpbmdzIVwiKTtcclxuICB9XHJcbiAgXHJcbiAgZXNwaW9uYWdlKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJHaW1tZSB5ZXIgY2xvbmUhIVwiKTtcclxuICB9XHJcbiAgXHJcbiAgdGFrZW92ZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkdpbW1lIHllciBzYXRlbGxpdGUhIVwiKTtcclxuICB9XHJcbiAgXHJcbiAgY291bnRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiR2ltbWUgYmFjayBteSBjbG9uZSEhXCIpO1xyXG4gIH1cclxuICBcclxuICBraWxsQmlvZHJvbmUoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlllciBzb3VsZCBiZXR0ZXIgYmVsb25nIHRvIEplc3VzISBDdXogeWVyIGFzcyBiZWxvbmdzIHRvIG1lIVwiKTtcclxuICB9XHJcbiAgXHJcbiAgZmluaXNoVHVybigpIHtcclxuICAgIHRoaXMudHVyblN0YXRlID0gdGhpcy5nYW1lLnNlcHRpa29uLnR1cm5TdGF0ZUVudW0uU1RBUlQ7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiQWxhcy4gWW91ciB0dXJuIGlzIG92ZXIuIFwiKTtcclxuICB9XHJcbiAgXHJcblxyXG4gIGdldExlZ2FsTW92ZXMobW92ZXMsIGN1cnJlbnRDb29yZCwgcHJldmlvdXNDb29yZCkge1xyXG5cdG1vdmVzLS07XHJcblx0dmFyIGxlZ2FsTW92ZXMgPSBbXTtcclxuXHRmb3IodmFyIGRpcmVjdGlvbiBpbiB0aGlzLmRpcmVjdGlvbkVudW0pIHtcdFxyXG5cdFx0Ly8gTkVFRCBUTyBDSEVDSyBGT1IgTE9DS1NcclxuXHRcdHZhciBtb3ZlQ2hlY2sgPSB0aGlzLmdldENvb3JkRnJvbURpcmVjdGlvbihjdXJyZW50Q29vcmQsZGlyZWN0aW9uKTtcclxuICAgICAgICBpZiAobW92ZUNoZWNrID09IGZhbHNlKVxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdmFyIHRpbGVUb0NoZWNrID0gdGhpcy50aWxlQXJyYXlbbW92ZUNoZWNrLnhdW21vdmVDaGVjay55XTtcclxuXHJcbiAgICAgICAgLy8gdGlsZSBpcyBsZWdhbCBJRiBkaXJlY3Rpb24gaXMgb2sgQU5EIHRpbGUgaXMgbm90IGRhbWFnZWQgQU5EICggdGhlcmUgaXMgbm8gcHJldmlvdXMgY29vcmRpbmF0ZSBPUiB0aGlzIGlzIG5vdCB0aGUgcHJldmlvdXMgY29vcmRpbmF0ZSApXHJcblx0XHRpZih0aGlzLmNoZWNrV2FsbCh0aGlzLmRpcmVjdGlvbkVudW1bZGlyZWN0aW9uXSwgY3VycmVudENvb3JkKSA9PT0gdHJ1ZSAmJiB0aWxlVG9DaGVjay50aWxlRGFtYWdlZCA9PT0gZmFsc2UgJiYgKCh0eXBlb2YgcHJldmlvdXNDb29yZCA9PT0gJ3VuZGVmaW5lZCcpIHx8ICgodHlwZW9mIHByZXZpb3VzQ29vcmQgIT09ICd1bmRlZmluZWQnKSAmJiAoSlNPTi5zdHJpbmdpZnkobW92ZUNoZWNrKSAhPT0gSlNPTi5zdHJpbmdpZnkocHJldmlvdXNDb29yZCkpICkpKSB7XHJcblx0XHRcdC8vIENoZWNrIGlmIHRpbGUgaXMgb2NjdXBpZWRcclxuICAgICAgICAgICAgaWYobW92ZXM9PTApe1xyXG4gICAgICAgICAgICAgICAgaWYodGlsZVRvQ2hlY2sudGlsZU9jY3VwaWVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZ2FsTW92ZXMucHVzaChtb3ZlQ2hlY2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHZhciByZXR1cm5BcnJheSA9ICh0aGlzLmdldExlZ2FsTW92ZXMobW92ZXMsIG1vdmVDaGVjaywgY3VycmVudENvb3JkKSk7XHJcblx0XHRcdFx0Zm9yKHZhciBpbmRleCBpbiByZXR1cm5BcnJheSkge1xyXG5cdFx0XHRcdFx0aWYoSlNPTi5zdHJpbmdpZnkocmV0dXJuQXJyYXlbaW5kZXhdKSAhPT0gSlNPTi5zdHJpbmdpZnkoY3VycmVudENvb3JkKSlcclxuXHRcdFx0XHRcdFx0bGVnYWxNb3Zlcy5wdXNoKHJldHVybkFycmF5W2luZGV4XSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBsZWdhbE1vdmVzO1xyXG4gIH1cclxuICAgIFxyXG4gIGdldENvb3JkRnJvbURpcmVjdGlvbihvcmlnaW5Db29yZCxkaXJlY3Rpb24pIHtcclxuXHJcblx0dmFyIGRpcj17Tk9SVEg6e3g6MCx5Oi0xfSxFQVNUOnt4OjEseTowfSxTT1VUSDp7eDowLHk6MX0sV0VTVDp7eDotMSx5OjB9fTtcclxuICAgIFxyXG4gICAgdmFyIG9iaiA9IHt4OihwYXJzZUludChvcmlnaW5Db29yZC54KSArIHBhcnNlSW50KGRpcltkaXJlY3Rpb25dLngpKSwgeToocGFyc2VJbnQob3JpZ2luQ29vcmQueSkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS55KSl9O1xyXG4gICAgaWYob2JqLnggPCAwIHx8IG9iai55IDwgMCkgXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdGVsc2VcclxuICAgICAgICByZXR1cm4ge3g6KHBhcnNlSW50KG9yaWdpbkNvb3JkLngpICsgcGFyc2VJbnQoZGlyW2RpcmVjdGlvbl0ueCkpLCB5OihwYXJzZUludChvcmlnaW5Db29yZC55KSArIHBhcnNlSW50KGRpcltkaXJlY3Rpb25dLnkpKX07XHJcblx0XHRcclxuICB9XHJcbiAgXHJcbiAgc2hvd1RpbGVzKHRpbGVzQXJyYXkpIHtcclxuICAgIGZvciAodmFyIGkgaW4gdGlsZXNBcnJheSkge1xyXG4gICAgICAgIHRoaXMuc2hvd25UaWxlcy5wdXNoKHRpbGVzQXJyYXlbaV0pO1xyXG4gICAgICAgIHRpbGVzQXJyYXlbaV0uYWxwaGEgPSAwLjU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGhpZGVUaWxlcyh0aWxlQXJyYXkpIHtcclxuICAgIGlmKCF0aWxlQXJyYXkpIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuc2hvd25UaWxlcykge1xyXG4gICAgICAgICAgICB0aGlzLnNob3duVGlsZXNbaV0uYWxwaGEgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3duVGlsZXMgPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob290VGlsZShjbG9uZUNvb3JkaW5hdGVzKSB7XHJcbiAgXHJcbiAgICB2YXIgY3VycmVudFggPSBjbG9uZUNvb3JkaW5hdGVzLng7XHJcbiAgICB2YXIgY3VycmVudFkgPSBjbG9uZUNvb3JkaW5hdGVzLnk7XHJcbiAgICB2YXIgY3VycmVudFRpbGUgPSB0aGlzLnRpbGVBcnJheVtjdXJyZW50WF1bY3VycmVudFldO1xyXG4gICAgZG8ge1xyXG4gICAgICAgIGN1cnJlbnRYKys7XHJcbiAgICAgICAgY3VycmVudFRpbGUgPSB0aGlzLnRpbGVBcnJheVtjdXJyZW50WF1bY3VycmVudFldO1xyXG4gICAgfSB3aGlsZSAoY3VycmVudFRpbGUudGlsZVR5cGUgPT0gJ3NwYWNlJyB8fCBjdXJyZW50VGlsZS50aWxlVHlwZSA9PSAnc3VyZmFjZScgfHwgY3VycmVudFRpbGUudGlsZURhbWFnZWQgPT0gdHJ1ZSk7XHJcbiAgICBcclxuICAgIGN1cnJlbnRUaWxlLnRpbnQgPSAwWDMzMzMzMztcclxuICAgIGN1cnJlbnRUaWxlLmFscGhhID0gMC44O1xyXG4gICAgY3VycmVudFRpbGUudGlsZURhbWFnZWQgPSB0cnVlO1xyXG4gICAgXHJcbiAgICB0aGlzLnRlc3QgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZShjdXJyZW50VGlsZS54LCBjdXJyZW50VGlsZS55ICsoY3VycmVudFRpbGUuaGVpZ2h0LzIpLCAnYm9vbScpO1xyXG4gICAgdGhpcy50ZXN0LmFuZ2xlID0gMjcwO1xyXG4gICAgdGhpcy50ZXN0LmFuY2hvci5zZXQoMC41LDAuNyk7XHJcbiAgICB0aGlzLnRlc3QuYW5pbWF0aW9ucy5hZGQoJ2Jvb20nKTtcclxuICAgIHRoaXMudGVzdC5hbmltYXRpb25zLnBsYXkoJ2Jvb20nLCAyMCwgZmFsc2UsIHRydWUpO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIGNoZWNrV2FsbChkaXJlY3Rpb24sIGN1cnJlbnRDb29yZGluYXRlKSB7XHJcbiAgICB0aGlzLndhbGxHcmlkID0gdGhpcy5nYW1lLmNhY2hlLmdldEpTT04oJ3dhbGxHcmlkJyk7XHJcblx0c3dpdGNoIChkaXJlY3Rpb24pe1xyXG5cdFx0Y2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uTk9SVEg6IC8vIFVQXHJcblx0XHRcdGlmIChwYXJzZUludCh0aGlzLndhbGxHcmlkLmdyaWRbY3VycmVudENvb3JkaW5hdGUueF1bY3VycmVudENvb3JkaW5hdGUueV0mdGhpcy5kaXJlY3Rpb25FbnVtLk5PUlRIKSA9PSAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdFx0Y2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uU09VVEg6IC8vIERPV05cclxuXHRcdFx0aWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uU09VVEgpID09IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblx0XHRjYXNlIHRoaXMuZGlyZWN0aW9uRW51bS5FQVNUOiAvLyBSSUdIVFxyXG5cdFx0XHRpZiAocGFyc2VJbnQodGhpcy53YWxsR3JpZC5ncmlkW2N1cnJlbnRDb29yZGluYXRlLnhdW2N1cnJlbnRDb29yZGluYXRlLnldJnRoaXMuZGlyZWN0aW9uRW51bS5FQVNUKSA9PSAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdFx0Y2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uV0VTVDogLy8gTEVGVFxyXG5cdFx0XHRpZiAocGFyc2VJbnQodGhpcy53YWxsR3JpZC5ncmlkW2N1cnJlbnRDb29yZGluYXRlLnhdW2N1cnJlbnRDb29yZGluYXRlLnldJnRoaXMuZGlyZWN0aW9uRW51bS5XRVNUKSA9PSAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuICAgIFxyXG4gIH1cclxuICBcclxuICBzZXR1cCgpIHtcclxuICAgIC8vU2hvdWxkIGFzayBmb3IgcGxheWVyIG5hbWUgYW5kIGFzc2lnbiBhIGNvbG9yLiBcclxuICAgIC8vR2l2ZSB3YWl0aW5nIGluZGljYXRvclxyXG4gICAgLy9PZmZlciBzb21lIHdheSB0byBwaWNrIGEgZ2FtZT8gSURLLi5cclxuICB9XHJcbiAgXHJcbiAgc3RhcnRHYW1lKCkge1xyXG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XHJcbiAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcHRpa29uO1xyXG4iLCJpbXBvcnQgUmVzb3VyY2VzIGZyb20gJy4uL3ByZWZhYnMvcmVzb3VyY2VzJztcclxuaW1wb3J0IFBlcnNvbm5lbCBmcm9tICcuLi9wcmVmYWJzL3BlcnNvbm5lbCc7XHJcbmltcG9ydCBPcmRuYW5jZSBmcm9tICcuLi9wcmVmYWJzL29yZG5hbmNlJztcclxuaW1wb3J0IENsb25lIGZyb20gJy4uL3ByZWZhYnMvY2xvbmUnOyAvLyBUaGlzIHdpbGwgYmUgaW5jb3Jwb3JhdGVkIGluIHBlcnNvbm5lbFxyXG5cclxuY2xhc3MgVGVhbSB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7IFxyXG4gICAgdGhpcy5yZWMgPSBuZXcgUmVzb3VyY2VzKCk7XHJcbiAgICB0aGlzLnJlY0VudW0gPSB0aGlzLnJlYy5yZXNvdXJjZUVudW07XHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgXHJcbiAgICB0aGlzLnBlcnNvbm5lbCA9IFtdO1xyXG4gICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMgPSBbXTtcclxuICB9XHJcbiAgXHJcbiAgcmVmcmVzaCgpIHtcclxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcclxuICAgICAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvL1Jlc291cmNlIEludGVyZmFjZVxyXG4gIGdldFJlY0NvdW50KHR5cGUpIHtcclxuICAgIHJldHVybiB0aGlzLnJlYy5nZXRDb3VudCh0eXBlKTtcclxuICB9XHJcbiAgXHJcbiAgY2hlY2tSZWModHlwZSwgY291bnQpIHtcclxuICAgIGlmICh0aGlzLmdldFJlY0NvdW50KHR5cGUpID49IGNvdW50KSBcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgXHJcbiAgZXhjaGFuZ2VSZWMoY29zdFR5cGUsIGNvc3RDb3VudCwgeWllbGRUeXBlLCB5aWVsZENvdW50KSB7XHJcbiAgfVxyXG4gIFxyXG4gIGFkZFJlYyh0eXBlLCBjb3VudCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVjLmFkZCh0eXBlLCBjb3VudCk7XHJcbiAgfVxyXG4gIFxyXG4gIHJlbW92ZVJlYyh0eXBlLCBjb3VudCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVjLnJlbW92ZSh0eXBlLCBjb3VudCk7XHJcbiAgfVxyXG4gIFxyXG4gIGFkZENsb25lKHgsIHksIHByb3BzKSB7XHJcbiAgICB2YXIgcG9pbnQgPSB0aGlzLmdhbWUuc2VwdGlrb24udGlsZVRvUGl4ZWxzKHgseSk7XHJcbiAgICB2YXIgY2xvbmUgPSBuZXcgQ2xvbmUodGhpcy5nYW1lLHBvaW50LngscG9pbnQueSk7XHJcbiAgICBjbG9uZS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnggPSB4O1xyXG4gICAgY2xvbmUuY3VycmVudFRpbGVDb29yZGluYXRlcy55ID0geTtcclxuICAgIFxyXG4gICAgZm9yICh2YXIgaSBpbiBwcm9wcykge1xyXG4gICAgICAgIGNsb25lW2ldID0gcHJvcHNbaV07XHJcbiAgICB9XHJcbiAgICB0aGlzLnBlcnNvbm5lbC5wdXNoKGNsb25lKTtcclxuICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZChjbG9uZSk7XHJcbiAgfVxyXG4gIFxyXG4gIGdldENsb25lKGNvb3JkKSB7XHJcbiAgICBmb3IgKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XHJcbiAgICAgICAgaWYodGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy54ID09IGNvb3JkLnggJiYgdGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy55ID09IGNvb3JkLnkpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wZXJzb25uZWxbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBraWxsQ2xvbmUoY29vcmQpIHtcclxuICAgIHZhciBjbG9uZSA9IHRoaXMuZ2V0Q2xvbmUoY29vcmQpO1xyXG4gICAgdGhpcy5nYW1lLnN0YWdlLnJlbW92ZUNoaWxkKGNsb25lKTtcclxuICAgIFxyXG4gICAgdmFyIGluZGV4ID0gdGhpcy5wZXJzb25uZWwuaW5kZXhPZihjbG9uZSk7XHJcbiAgICB0aGlzLnBlcnNvbm5lbC5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICBcclxuICAgIGNsb25lLnJlbW92ZSgpO1xyXG4gIH1cclxuICAgIFxyXG4gIG9mZmVyTGVnYWxDbG9uZXMoKSB7XHJcbiAgICAvLyBPZmZlciBjbG9uZXMgdGhhdCBoYXZlIGxlZ2FsIG1vdmVzXHJcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcclxuICAgICAgICB2YXIgbW92ZXMgPSB0aGlzLnBlcnNvbm5lbFtpXS5nZXRMZWdhbE1vdmVzKCk7XHJcblxyXG4gICAgICAgIGlmKG1vdmVzICE9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyc29ubmVsW2ldLmhpZ2hsaWdodE9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBvZmZlckd1bm5lcnMoKSB7XHJcbiAgICAvLyBPZmZlciBndW5uZXIgXHJcbiAgICB2YXIgZ3VubmVyRm91bmQgPSBmYWxzZTtcclxuICAgIGZvcih2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbCkge1xyXG4gICAgICAgIGlmKHRoaXMucGVyc29ubmVsW2ldLmlzR3VubmVyKSB7XHJcbiAgICAgICAgICAgIGd1bm5lckZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy90aGlzLnBlcnNvbm5lbFtpXS5oaWdobGlnaHRPbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBndW5uZXJGb3VuZDtcclxuICB9XHJcbiAgXHJcbiAgc2VsZWN0R3VubmVyKGNvb3Jkcykge1xyXG4gICAgdmFyIGNsb25lID0gdGhpcy5nZXRDbG9uZShjb29yZHMpO1xyXG4gICAgaWYoIWNsb25lKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGlmKCFjbG9uZS5pc0d1bm5lcilcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICB2YXIgZXhpc3RpbmdHdW5uZXIgPSB0aGlzLnNlbGVjdGVkR3VubmVycy5pbmRleE9mKGNsb25lKTtcclxuICAgIGlmKGV4aXN0aW5nR3VubmVyID49IDApe1xyXG4gICAgICAgIGNsb25lLmhpZ2hsaWdodE9mZigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzLnNwbGljZShleGlzdGluZ0d1bm5lciwgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNsb25lLmhpZ2hsaWdodE9uKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMucHVzaChjbG9uZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGNsZWFyR3VubmVycygpIHtcclxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5zZWxlY3RlZEd1bm5lcnMpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVyc1tpXS5oaWdobGlnaHRPZmYoKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzID0gW107XHJcbiAgfVxyXG4gIFxyXG4gIHNlbGVjdENsb25lRm9yTW92ZShjb29yZHMpIHsgICAgXHJcbiAgXHJcbiAgICB2YXIgY2xvbmUgPSB0aGlzLmdldENsb25lKGNvb3Jkcyk7XHJcbiAgICBpZighY2xvbmUpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGZvcih2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbCkge1xyXG4gICAgICAgIHRoaXMucGVyc29ubmVsW2ldLmhpZ2hsaWdodE9mZigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sZWdhbFRpbGVzID0gY2xvbmUuZ2V0TGVnYWxNb3ZlcygpO1xyXG4gICAgdGhpcy5zZWxlY3RlZENsb25lID0gY2xvbmU7XHJcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24uc2hvd1RpbGVzKHRoaXMubGVnYWxUaWxlcyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgXHJcbiAgbW92ZVNlbGVjdGVkQ2xvbmUoY29vcmRzKSB7XHJcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5sZWdhbFRpbGVzKSB7XHJcbiAgICAgICAgaWYodGhpcy5sZWdhbFRpbGVzW2ldLnRpbGVYID09IGNvb3Jkcy54ICYmIHRoaXMubGVnYWxUaWxlc1tpXS50aWxlWSA9PSBjb29yZHMueSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2xvbmUubW92ZShjb29yZHMpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZENsb25lO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5sZWdhbFRpbGVzO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZWFtOyIsImNsYXNzIE9yZG5hbmNlIHtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuT3JkbmFuY2UgPSBPcmRuYW5jZTtcclxuIiwiY2xhc3MgUGVyc29ubmVsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCB4LCB5LCB1dWlkKSB7XHJcbiAgICAgICAgdGhpcy50eXBlRW51bSA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgICAgICBjbG9uZTogMCxcclxuICAgICAgICAgICAgYmlvZHJvbmU6IDFcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZDtcclxuICAgICAgICBcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnYmlvZHJvbmUnOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Nsb25lJzpcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZUVudW1bdHlwZV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG1vdmUoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuUGVyc29ubmVsID0gUGVyc29ubmVsO1xyXG4iLCJ2YXIgUGVyc29ubmVsID0gcmVxdWlyZSgnLi9wZXJzb25uZWwnKS5QZXJzb25uZWw7XHJcbnZhciBSZXNvdXJjZSA9IHJlcXVpcmUoJy4vcmVzb3VyY2UnKS5SZXNvdXJjZTtcclxudmFyIE9yZG5hbmNlID0gcmVxdWlyZSgnLi9vcmRuYW5jZScpLk9yZG5hbmNlO1xyXG5cclxuXHJcbmNsYXNzIFBsYXllciB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc29ja2V0SUQsIGlkLCB1dWlkKSB7IFxyXG4gICAgICAgIHRoaXMuc29ja2V0SUQgPSBzb2NrZXRJRDtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7IC8vcGxheWVyIDEgb3IgcGxheWVyIDI7IHRoaXMgd2lsbCBkZXRlcm1pbmUgdGhlIHNpZGUgb2YgdGhlIGJvYXJkIGF0IGNsaWVudCBzdGFydC5cclxuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xyXG4gICAgICAgIHRoaXMucGVyc29ubmVsQXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLnJlc291cmNlQXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLm9yZG5hbmNlQXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLnJlYWR5VG9TdGFydCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RhcnRpbmdDbG9uZUNvdW50ID0gNTsgICAgXHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICBhZGRQZXJzb25uZWwodHlwZSwgeCwgeSwgdXVpZCkge1xyXG4gICAgICAgIGlmKHR5cGUgPT0gXCJjbG9uZVwiICYmIHRoaXMuZ2V0UGVyc29ubmVsKHR5cGUpLmxlbmd0aCA8IHRoaXMuc3RhcnRpbmdDbG9uZUNvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyc29ubmVsQXJyYXkucHVzaChuZXcgUGVyc29ubmVsKCdjbG9uZScsIHgsIHksIHV1aWQpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVQZXJzb25uZWwocGVyc29ubmVsLCBwdXJnZUFsbCkge1xyXG4gICAgICAgIGlmIChwdXJnZUFsbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBlcnNvbm5lbEFycmF5ID0gW107XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFBlcnNvbm5lbCh0eXBlKSB7XHJcbiAgICAgICAgdmFyIHJldHVybkFycmF5ID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpIGluIHRoaXMucGVyc29ubmVsQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5wZXJzb25uZWxBcnJheVtpXS50eXBlID09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMucGVyc29ubmVsQXJyYXlbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLlBsYXllciA9IFBsYXllcjtcclxuIiwiY2xhc3MgUmVzb3VyY2VzIHtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuUmVzb3VyY2VzID0gUmVzb3VyY2VzO1xyXG4iLCJ2YXIgUGxheWVyID0gcmVxdWlyZSgnLi9wbGF5ZXInKS5QbGF5ZXI7XHJcblxyXG5jbGFzcyBTZXB0aWtvbiB7XHJcbiAgICBcclxuXHRjb25zdHJ1Y3Rvcihpbykge1xyXG4gICAgICAgIHRoaXMuaW8gPSBpbztcclxuICAgICAgICB0aGlzLmxhc3RQbGF5ZXJJRCA9IDA7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzQXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IDA7XHJcbiAgICAgICAgdGhpcy50dXJuU3RhdGUgPSAwO1xyXG4gICAgICAgIHRoaXMudXVpZCA9IHJlcXVpcmUoJ3V1aWQvdjQnKSgpO1xyXG5cclxuICAgICAgICB0aGlzLmFjdGl2ZVBsYXllciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RGljZVZhbHVlID0gMDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZUVudW0gPSBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICAgICAgU0VUVVA6IDAsXHJcbiAgICAgICAgICAgIEdBTUU6IDEsIFxyXG4gICAgICAgICAgICBQQVVTRTogMixcclxuICAgICAgICAgICAgR0FNRU9WRVI6IDNcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnR1cm5TdGF0ZUVudW0gPSBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICAgICAgUk9MTDogMCxcclxuICAgICAgICAgICAgTU9WRTogMSwgXHJcbiAgICAgICAgICAgIEFDVElPTjogMixcclxuICAgICAgICAgICAgRU5EOiAzXHJcbiAgICAgICAgfSk7ICBcclxuXHJcbiAgICAgICAgdGhpcy50aWxlQ29sdW1ucyA9IDMxO1xyXG4gICAgICAgIHRoaXMudGlsZVJvd3MgPSAyMTtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlQXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVRpbGVBcnJheSgpOyAgICAgIFxyXG5cdH1cclxuXHJcblx0YWRkTmV3UGxheWVyKHNvY2tldElELCB1dWlkKSB7XHJcbiAgICAgICAgdGhpcy5sYXN0UGxheWVySUQrKztcclxuICAgICAgICB2YXIgcGxheWVyID0gbmV3IFBsYXllcihzb2NrZXRJRCwgdGhpcy5sYXN0UGxheWVySUQsIHV1aWQpO1xyXG4gICAgICAgIHRoaXMucGxheWVyc0FycmF5LnB1c2gocGxheWVyKTtcclxuICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3VwZGF0ZVBsYXllcicsIGRldGFpbHM6IHtpZDogdGhpcy5sYXN0UGxheWVySUR9fSwgc29ja2V0SUQpO1xyXG4gICAgICAgIHJldHVybiBwbGF5ZXI7XHJcblx0fVxyXG5cclxuICAgIHNldFBsYXllclN0YXRlKHN0YXRlKSB7XHJcbiAgICAgICAgc3dpdGNoIChzdGF0ZS52YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlICdyZXNldCc6IFxyXG4gICAgICAgICAgICAgICAgdmFyIHBsYXllciA9IHRoaXMuZ2V0UGxheWVyQnlTb2NrZXRJRChzdGF0ZS5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIucmVtb3ZlUGVyc29ubmVsKG51bGwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJyZW1vdmVBbGxQZXJzb25uZWxcIiwgZGV0YWlsczoge319LCBwbGF5ZXIuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzogXHJcbiAgICAgICAgICAgICAgICB2YXIgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXJCeVNvY2tldElEKHN0YXRlLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgIHBsYXllci5yZWFkeVRvU3RhcnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wcG9uZW50ID0gdGhpcy5nZXRQbGF5ZXJPcHBvbmVudChwbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgaWYoIW9wcG9uZW50IHx8ICFvcHBvbmVudC5yZWFkeVRvU3RhcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHBDbG9uZXMgPSBvcHBvbmVudC5nZXRQZXJzb25uZWwoJ2Nsb25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRQbGF5ZXJDbG9uZXMgPSBwbGF5ZXIuZ2V0UGVyc29ubmVsKCdjbG9uZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBOb3RpZnkgY3VycmVudCBwbGF5ZXIgb2Ygb3Bwb25lbnQgcG9zaXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBsYXllclBheWxvYWQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIG9wcENsb25lcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJQYXlsb2FkLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDpvcHBDbG9uZXNbaV0ueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6b3BwQ2xvbmVzW2ldLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dWlkOm9wcENsb25lc1tpXS51dWlkLCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywge3R5cGU6XCJwZXJzb25uZWxcIiwgZGV0YWlsczpwbGF5ZXJQYXlsb2FkfSwgcGxheWVyLnNvY2tldElEKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90aWZ5IG9wcG9uZW50IG9mIGN1cnJlbnQgcGxheWVyJ3MgcG9zaXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wcFBheWxvYWQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIGN1cnJlbnRQbGF5ZXJDbG9uZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BwUGF5bG9hZC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6Y3VycmVudFBsYXllckNsb25lc1tpXS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTpjdXJyZW50UGxheWVyQ2xvbmVzW2ldLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dWlkOmN1cnJlbnRQbGF5ZXJDbG9uZXNbaV0udXVpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywge3R5cGU6XCJwZXJzb25uZWxcIiwgZGV0YWlsczpvcHBQYXlsb2FkfSwgb3Bwb25lbnQuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnJvYWRjYXN0KCd1cGRhdGUnLCB7dHlwZTpcInJlc291cmNlc1wiLCBhY3Rpb246J2luaXQnfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyID0gdGhpcy5nZXRSYW5kb21QbGF5ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcIm9mZmVyRGljZVwiLCBkZXRhaWxzOiB7fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSsrO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihzdGF0ZS52YWx1ZSArIFwiIGlzIG5vdCBhIHZhbGlkIHBsYXllciBzdGF0ZSFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFBsYXllck9wcG9uZW50KHBsYXllcikge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcnNBcnJheS5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcnNBcnJheVswXSA9PT0gcGxheWVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheVsxXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXlbMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFJhbmRvbVBsYXllcigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMildO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRQbGF5ZXJCeVVVSUQodXVpZCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXJzQXJyYXlbaV0udXVpZCA9PSB1dWlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5W2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFBsYXllckJ5U29ja2V0SUQoaWQpIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMucGxheWVyc0FycmF5KSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyc0FycmF5W2ldLnNvY2tldElEID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXlbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBleGlzdHNQbGF5ZXJVVUlEKHV1aWQpIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMucGxheWVyc0FycmF5KSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyc0FycmF5W2ldLnV1aWQgPT0gdXVpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNsaWNrZWQoZGF0YSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vY2hlY2sgZ2FtZSBzdGF0ZVxyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5nYW1lU3RhdGUpIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSB0aGlzLmdhbWVTdGF0ZUVudW0uU0VUVVA6XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jaGVjayBpZiB0aWxlIGlzIHR5cGU6IHN1cmZhY2UsIGJhdHRsZSwgYXJtb3J5LCBsb2NrLCBvciBwcm9kdWN0aW9uXHJcbiAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHRpbGUgYmVsb25ncyB0byBwbGF5ZXIncyB0ZWFtXHJcbiAgICAgICAgICAgICAgICAvL2FkZCBjbG9uZSB0byBwbGF5ZXIncyBwZXJzb25uZWxcclxuICAgICAgICAgICAgICAgIHZhciBwbGF5ZXIgPSB0aGlzLmdldFBsYXllckJ5U29ja2V0SUQoZGF0YS5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlQ2xvbmUocGxheWVyLCBkYXRhLngsIGRhdGEueSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSB0aGlzLmdhbWVTdGF0ZUVudW0uR0FNRTpcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL2NoZWNrIHR1cm5TdGF0ZVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwbGFjZUNsb25lKHBsYXllciwgeCwgeSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHR5cGVvZihwbGF5ZXIpICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZFRpbGUgPSB0aGlzLmdldFRpbGUoeCwgeSk7XHJcbiAgICAgICAgICAgIGlmKHBsYXllci5pZCAhPSBzZWxlY3RlZFRpbGUub3duZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoc2VsZWN0ZWRUaWxlLnR5cGUgPT0gXCJsb2NrXCIgfHwgc2VsZWN0ZWRUaWxlLnR5cGUgPT0gXCJiYXR0bGVcIiB8fCBzZWxlY3RlZFRpbGUudHlwZSA9PSBcImFybW9yeVwiIHx8IHNlbGVjdGVkVGlsZS50eXBlID09IFwicHJvZHVjdGlvblwiIHx8IHNlbGVjdGVkVGlsZS50eXBlID09IFwic3VyZmFjZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXVpZCA9IHJlcXVpcmUoJ3V1aWQvdjQnKSgpO1xyXG4gICAgICAgICAgICAgICAgaWYocGxheWVyLmFkZFBlcnNvbm5lbCgnY2xvbmUnLCB4LCB5LCB1dWlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwiYWRkQ2xvbmVcIiwgZGV0YWlsczoge3g6eCwgeTp5LCBwbGF5ZXJJRDogcGxheWVyLmlkLCB1dWlkOnV1aWR9fSwgcGxheWVyLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXIuZ2V0UGVyc29ubmVsKCdjbG9uZScpLmxlbmd0aCA9PSBwbGF5ZXIuc3RhcnRpbmdDbG9uZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgncmVxdWVzdCcsIHtjYWxsYmFjazpcIm1vZGFsXCIsIGRldGFpbHM6IHt0eXBlOlwiYXNrU3RhcnRcIn19LCBwbGF5ZXIuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFUlJPUjogcGxheWVyIG5vdCBmb3VuZCEnKTsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVUaWxlQXJyYXkoKSB7XHJcbiAgICAgICAgdmFyIHRpbGVKU09OID0gcmVxdWlyZSgnLi4vLi4vYXNzZXRzL3RpbGVEZXRhaWwuanNvbicpO1xyXG5cclxuICAgICAgICBmb3IodmFyIGMgPSAwOyBjIDwgdGhpcy50aWxlQ29sdW1uczsgYysrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NdID0gW107XHJcbiAgICAgICAgICAgIGZvcih2YXIgciA9IDA7IHIgPCB0aGlzLnRpbGVSb3dzOyByKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NdW3JdID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aWxlSlNPTikge1xyXG4gICAgICAgICAgICBpZiAoIXRpbGVKU09OLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIG9iaiA9IHRpbGVKU09OW2tleV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBza2lwIGxvb3AgaWYgdGhlIHByb3BlcnR5IGlzIGZyb20gcHJvdG90eXBlXHJcbiAgICAgICAgICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KHByb3ApKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uQ291bnQgPSBvYmpbcHJvcF0ubG9jYXRpb25zLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYXRpb25Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvb3JkcyA9IG9ialtwcm9wXS5sb2NhdGlvbnNbaV0uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gY29vcmRzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gY29vcmRzWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLmRhbWFnZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5vY2N1cGllZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnR5cGUgPSBvYmpbcHJvcF0udHlwZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPCA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLm93bmVyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHggPiAyMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5vd25lciA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVBcnJheVt4XVt5XSAhPSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0ubmFtZSA9IG9ialtwcm9wXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeCArIFwiOlwiICsgeSArIFwiIG5vdCBmb3VuZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcF0ucHJvcGVydGllcyAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XVsndGlsZVByb3BlcnRpZXMnXSA9IG9ialtwcm9wXS5wcm9wZXJ0aWVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGlsZSh4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZUFycmF5W3hdW3ldO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByb2xsRGljZShkYXRhKSB7XHJcbiAgICAgICAgaWYodGhpcy50dXJuU3RhdGUgPT0gdGhpcy50dXJuU3RhdGVFbnVtLlJPTEwgJiYgdGhpcy5nYW1lU3RhdGUgPT0gdGhpcy5nYW1lU3RhdGVFbnVtLkdBTUUgJiYgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQgPT0gZGF0YS5zb2NrZXRJRCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREaWNlVmFsdWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDE7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwiZGljZVJvbGxlZFwiLCBkZXRhaWxzOiB7dmFsdWU6dGhpcy5jdXJyZW50RGljZVZhbHVlfX0sIGRhdGEuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHt0eXBlOlwiZGljZVwiLCBkZXRhaWxzOiB7dmFsdWU6dGhpcy5jdXJyZW50RGljZVZhbHVlfX0sIHRoaXMuZ2V0UGxheWVyT3Bwb25lbnQodGhpcy5hY3RpdmVQbGF5ZXIpLnNvY2tldElEKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUT0RPOiBcXG4gLSBDYWxjdWxhdGUgbGVnYWwgcGVyc29ubmVsIHNlbGVjdGlvbnNcXG4gLSBDYWxjdWxhdGUgbGVnYWwgb3JkbmFuY2Ugc2VsZWN0aW9uc1xcbiAtIGVtaXQgYWN0aW9uIHRvIG9mZmVyIGNsb25lc1xcbiAtIENhbGN1bGF0ZSBsZWdhbCBwZXJzb25uZWwgc2VsZWN0aW9uc1wiKVxyXG4gICAgICAgICAgICB0aGlzLnR1cm5TdGF0ZSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0KGRhdGEpIHtcclxuICAgICAgICBpZih0eXBlb2YoZGF0YS5wcm9wZXJ0eSkgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZXNwb25zZScsIHtkZXRhaWxzOnRoaXNbZGF0YS5wcm9wZXJ0eV19LCBkYXRhLnNvY2tldElEKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGVtaXQobXNnLCBkYXRhLCBzb2NrZXRJRCkge1xyXG4gICAgICAgIGlmKG1zZyA9PSBcInJlc3BvbnNlXCIgfHwgbXNnID09IFwicmVxdWVzdFwiIHx8IG1zZyA9PSBcInVwZGF0ZVwiKSB7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZihzb2NrZXRJRCkgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIFNvY2tldElEIGZvdW5kIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlvLnNvY2tldHMuY29ubmVjdGVkW3NvY2tldElEXS5lbWl0KG1zZywgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaWYobXNnID09IFwiYWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgaWYodHlwZW9mKHNvY2tldElEKSA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gU29ja2V0SUQgZm91bmQhXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW8uc29ja2V0cy5jb25uZWN0ZWRbc29ja2V0SURdLmVtaXQobXNnLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYobXNnID09IFwibG9nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5pby5zb2NrZXRzLmVtaXQobXNnLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJyb2FkY2FzdChtc2csIGRhdGEpIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMucGxheWVyc0FycmF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChtc2csIGRhdGEsIHRoaXMucGxheWVyc0FycmF5W2ldLnNvY2tldElEKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5TZXB0aWtvbiA9IFNlcHRpa29uO1xyXG4iLCJpbXBvcnQgU2VwdGlrb24gZnJvbSAnLi4vcHJlZmFicy9zZXB0aWtvbic7XHJcblxyXG5jbGFzcyBCb290IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcHJlbG9hZCgpIHtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgncHJlbG9hZGVyJywgJ2Fzc2V0cy9wcmVsb2FkZXIuZ2lmJyk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICB0aGlzLmdhbWUuaW5wdXQubWF4UG9pbnRlcnMgPSAxO1xyXG4gICAgdGhpcy5nYW1lLnRpbWUuYWR2YW5jZWRUaW1pbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5nYW1lLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlJFU0laRTtcclxuICAgIC8vc2V0dXAgZGV2aWNlIHNjYWxpbmdcclxuICAgIGlmICghdGhpcy5nYW1lLmRldmljZS5kZXNrdG9wKSB7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5wYXJlbnRJc1dpbmRvdyA9IHRydWU7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlJFU0laRTtcclxuICAgICAgdGhpcy5nYW1lLnNjYWxlLm1pbldpZHRoID0gIDQ4MDtcclxuICAgICAgdGhpcy5nYW1lLnNjYWxlLm1pbkhlaWdodCA9IDI2MDtcclxuICAgICAgdGhpcy5nYW1lLnNjYWxlLmZvcmNlT3JpZW50YXRpb24odHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbml0R2xvYmFsVmFyaWFibGVzKCk7XHJcbiAgICBcclxuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgncHJlbG9hZGVyJyk7XHJcbiAgfVxyXG5cclxuICBpbml0R2xvYmFsVmFyaWFibGVzKCl7XHJcbiAgICB0aGlzLmdhbWUuZ2xvYmFsID0ge1xyXG4gICAgICBzY29yZTogMCxcclxuICAgICAgbGFzdERpY2VSb2xsOiAwLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb290O1xyXG4iLCJpbXBvcnQgRGljZSBmcm9tICcuLi9wcmVmYWJzL2RpY2UnO1xyXG5cclxuY2xhc3MgR2FtZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcbiAgXHJcbiAgY3JlYXRlKCkge1xyXG4gIFxyXG4gICAgLy90aGlzLmdhbWUuaW5wdXQub25Eb3duLmFkZCh0aGlzLnRvZ2dsZUZ1bGxzY3JlZW4sIHRoaXMpO1xyXG4gICAgdGhpcy5nYW1lLnN0YWdlLmRpc2FibGVWaXNpYmlsaXR5Q2hhbmdlID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XHJcbiAgICB0aGlzLmdhbWUuaHVkR3JvdXAgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XHJcblxyXG4gICAgdGhpcy5nYW1lLm1vZGFsID0gbmV3IGdhbWVNb2RhbCh0aGlzLmdhbWUpO1xyXG4gICAgdGhpcy5jcmVhdGVNb2RhbHMoKTtcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLDAsJ2JhY2tncm91bmQnKTtcclxuICAgIHRoaXMuYmFja2dyb3VuZC5hbmNob3Iuc2V0VG8oMC41LDAuNSk7XHJcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5jZW50ZXJYID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclg7XHJcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5jZW50ZXJZID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmRpY2UgPSBuZXcgRGljZSh0aGlzLmdhbWUsIDUwLCA0MCk7XHJcbiAgICB0aGlzLmdhbWUuZGljZS5zY2FsZS5zZXRUbygwLjI1KTtcclxuXHJcbiAgICB0aGlzLmdhbWUuYWRkLmV4aXN0aW5nKHRoaXMuZ2FtZS5kaWNlKTtcclxuICAgIFxyXG4gICAgdGhpcy5nYW1lLmh1ZEdyb3VwLmFkZCh0aGlzLmdhbWUuZGljZSk7XHJcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQodGhpcy5iYWNrZ3JvdW5kKTtcclxuXHJcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24uY3JlYXRlVGlsZUFycmF5KDMxLCAyMSwge3g6MC10aGlzLmJhY2tncm91bmQud2lkdGgvMiwgeTowLXRoaXMuYmFja2dyb3VuZC5oZWlnaHQvMn0pO1xyXG5cclxuXHJcbiAgICB0aGlzLnJlZnJlc2hCb2FyZCgpO1xyXG5cclxuICB9XHJcblxyXG4gIGNyZWF0ZU1vZGFscygpIHtcclxuICAgICAgdGhpcy5nYW1lLm1vZGFsLmNyZWF0ZU1vZGFsKFxyXG4gICAgICAgIHtcclxuICAgICAgICB0eXBlOiBcImFza1N0YXJ0XCIsXHJcbiAgICAgICAgaW5jbHVkZUJhY2tncm91bmQ6IHRydWUsXHJcbiAgICAgICAgbW9kYWxDbG9zZU9uSW5wdXQ6IHRydWUsXHJcbiAgICAgICAgaXRlbXNBcnI6IFt7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ3JhcGhpY3NcIixcclxuICAgICAgICAgICAgZ3JhcGhpY0NvbG9yOiBcIjB4ZmZmZmZmXCIsXHJcbiAgICAgICAgICAgIGdyYXBoaWNXaWR0aDogMzAwLFxyXG4gICAgICAgICAgICBncmFwaGljSGVpZ2h0OiAzMDAsXHJcbiAgICAgICAgICAgIGdyYXBoaWNSYWRpdXM6IDQwXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgY29udGVudDogXCJBcmUgeW91IGhhcHB5IHdpdGhcXG4gdGhhdCBjbG9uZSBsYXlvdXQ/XCIsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTHVja2llc3QgR3V5XCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAyMixcclxuICAgICAgICAgICAgY29sb3I6IFwiMHgxZTFlMWVcIixcclxuICAgICAgICAgICAgb2Zmc2V0WTogLTUwXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwidGV4dF95ZXNcIixcclxuICAgICAgICAgICAgb2Zmc2V0WTogMTAwLFxyXG4gICAgICAgICAgICBvZmZzZXRYOiAtODAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRTY2FsZTogMC42LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLm1vZGFsLmhpZGVNb2RhbChcImFza1N0YXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OidzZXRQbGF5ZXJTdGF0ZScsIHZhbHVlOidzdGFydCd9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiBcInRleHRfbm9cIixcclxuICAgICAgICAgICAgb2Zmc2V0WTogMTAwLFxyXG4gICAgICAgICAgICBvZmZzZXRYOiA4MCxcclxuICAgICAgICAgICAgY29udGVudFNjYWxlOiAwLjYsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUubW9kYWwuaGlkZU1vZGFsKFwiYXNrU3RhcnRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6J3NldFBsYXllclN0YXRlJywgdmFsdWU6J3Jlc2V0J30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoQm9hcmQoKSB7XHJcblxyXG4gICAgdmFyIHNjYWxlID0gd2luZG93LmlubmVyV2lkdGgvdGhpcy5iYWNrZ3JvdW5kLmhlaWdodDtcclxuICAgIGlmKHNjYWxlID4gMS45KSB7XHJcbiAgICAgICAgc2NhbGUgPSAxLjk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnNjYWxlLnNldFRvKHNjYWxlKTtcclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnggPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWDtcclxuXHJcbiAgICBpZih0aGlzLmdhbWUuc2VwdGlrb24ucGxheWVyLmlkID09IDEpIHtcclxuICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSA9IC05MDsgXHJcbiAgICAgICAgLy90aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclk7IC8vIENlbnRlcmVkIG9uIFNlcHRpa29uIExvZ29cclxuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSArICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIG9wcG9uZW50J3Mgc2lkZVxyXG4gICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSAtICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIHRoaXMgcGxheWVyJ3Mgc2lkZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSA9IDkwOyBcclxuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWTsgLy8gQ2VudGVyZWQgb24gU2VwdGlrb24gTG9nb1xyXG4gICAgICAgIC8vdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZICsgKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gb3Bwb25lbnQncyBzaWRlXHJcbiAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZIC0gKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gdGhpcyBwbGF5ZXIncyBzaWRlXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgLy8gICB0aGlzLmRpY2UuZnJhbWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDE7XHJcbiAgICAvLyB0aGlzLmdhbWUuZGVidWcudGV4dCgnTW91c2UnLCA3MDAsIDMyKTtcclxuICAgIFxyXG4gICAgLy8gdGhpcy5nYW1lLmRlYnVnLnRleHQoJ01vdXNlIFg6ICcgKyB0aGlzLmdhbWUuaW5wdXQueCwgNzAwLCA2NCk7XHJcbiAgICAvLyB0aGlzLmdhbWUuZGVidWcudGV4dCgnTW91c2UgWTogJyArIHRoaXMuZ2FtZS5pbnB1dC55LCA3MDAsIDkyKTtcclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyICgpIHtcclxuICAgICAgdGhpcy5yZWZyZXNoQm9hcmQoKTtcclxuICAgICAgLypcclxuXHJcbiAgICB2YXIgeCA9IDMyO1xyXG4gICAgdmFyIHkgPSAwO1xyXG4gICAgdmFyIHlpID0gMzI7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnVmlld3BvcnQnLCB4LCB5ICs9IHlpKTtcclxuXHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnVmlld3BvcnQgV2lkdGg6ICcgKyB0aGlzLmdhbWUuc2NhbGUudmlld3BvcnRXaWR0aCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93LmlubmVyV2lkdGg6ICcgKyB3aW5kb3cuaW5uZXJXaWR0aCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93Lm91dGVyV2lkdGg6ICcgKyB3aW5kb3cub3V0ZXJXaWR0aCwgeCwgeSArPSB5aSk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ1ZpZXdwb3J0IEhlaWdodDogJyArIHRoaXMuZ2FtZS5zY2FsZS52aWV3cG9ydEhlaWdodCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93LmlubmVySGVpZ2h0OiAnICsgd2luZG93LmlubmVySGVpZ2h0LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd3aW5kb3cub3V0ZXJIZWlnaHQ6ICcgKyB3aW5kb3cub3V0ZXJIZWlnaHQsIHgsIHkgKz0geWkpO1xyXG5cclxuICAgIC8vICBEZXZpY2U6IEhvdyB0byBnZXQgZGV2aWNlIHNpemUuXHJcblxyXG4gICAgLy8gIFVzZSB3aW5kb3cuc2NyZWVuLndpZHRoIGZvciBkZXZpY2Ugd2lkdGggYW5kIHdpbmRvdy5zY3JlZW4uaGVpZ2h0IGZvciBkZXZpY2UgaGVpZ2h0LiBcclxuICAgIC8vICAuYXZhaWxXaWR0aCBhbmQgLmF2YWlsSGVpZ2h0IGdpdmUgeW91IHRoZSBkZXZpY2Ugc2l6ZSBtaW51cyBVSSB0YXNrYmFycy4gKFRyeSBvbiBhbiBpUGhvbmUuKSBcclxuICAgIC8vICBEZXZpY2Ugc2l6ZSBpcyBzdGF0aWMgYW5kIGRvZXMgbm90IGNoYW5nZSB3aGVuIHRoZSBwYWdlIGlzIHJlc2l6ZWQgb3Igcm90YXRlZC5cclxuXHJcbiAgICB4ID0gMzUwO1xyXG4gICAgeSA9IDA7XHJcblxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ0JvYXJkIEdyb3VwJywgeCwgeSArPSB5aSk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuZ2FtZS5ib2FyZEdyb3VwLng6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC54LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC55OiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAueSwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGg6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5nYW1lLmJvYXJkR3JvdXAuaGVpZ2h0OiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAuaGVpZ2h0LCB4LCB5ICs9IHlpKTtcclxuXHJcbiAgICB4ID0gMzI7XHJcbiAgICB5ID0gMzAwO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdCYWNrZ3JvdW5kIERldGFpbCcsIHgsIHkgKz0geWkpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQueDogJyArIHRoaXMuYmFja2dyb3VuZC54LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQueTogJyArIHRoaXMuYmFja2dyb3VuZC55LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQud2lkdGg6ICcgKyB0aGlzLmJhY2tncm91bmQud2lkdGgsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC5oZWlnaHQ6ICcgKyB0aGlzLmJhY2tncm91bmQuaGVpZ2h0LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQuc2NhbGU6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC5zY2FsZS54LCB4LCB5ICs9IHlpKTtcclxuICAgICovXHJcbiAgICB9XHJcbiAgICBcclxuICB0b2dnbGVGdWxsc2NyZWVuKCkge1xyXG4gICAgaWYodGhpcy5nYW1lLnNjYWxlLmlzRnVsbFNjcmVlbikge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5zdG9wRnVsbFNjcmVlbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmdhbWUuc2NhbGUuc3RhcnRGdWxsU2NyZWVuKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcbiIsImNsYXNzIE1lbnUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICAvL2FkZCBiYWNrZ3JvdW5kIGltYWdlXHJcbiAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLDAsJ2JhY2tncm91bmQnKTtcclxuICAgIHRoaXMuYmdSYXRpbyA9IHRoaXMuYmFja2dyb3VuZC50ZXh0dXJlLndpZHRoIC8gdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUuaGVpZ2h0O1xyXG4gICAgdGhpcy53b3JsZFJhdGlvID0gdGhpcy5nYW1lLndvcmxkLndpZHRoIC8gdGhpcy5nYW1lLndvcmxkLmhlaWdodDtcclxuICAgIGlmICgoKHRoaXMud29ybGRSYXRpbyAtIHRoaXMuYmdSYXRpbykgLyAyICogdGhpcy5nYW1lLndvcmxkLndpZHRoKSA+IDApIHtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQud2lkdGggPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0L3RoaXMuYmFja2dyb3VuZC50ZXh0dXJlLmhlaWdodCp0aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aDtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQuaGVpZ2h0ID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodDtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQueCA9ICh0aGlzLmdhbWUud29ybGQud2lkdGggLSB0aGlzLmJhY2tncm91bmQud2lkdGgpIC8gMjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLndpZHRoID0gdGhpcy5nYW1lLndvcmxkLndpZHRoO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQgPSB0aGlzLmdhbWUud29ybGQud2lkdGgvdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUud2lkdGgqdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC55ID0gKHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgLSB0aGlzLmJhY2tncm91bmQuaGVpZ2h0KSAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgLy9hZGQgaW50cm8gdGV4dFxyXG4gICAgdGhpcy5nYW1lb3ZlclRleHQgPSB0aGlzLmFkZC50ZXh0KHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLCBcIlNjb3JlID0gXCIrdGhpcy5nYW1lLmdsb2JhbC5zY29yZSwge1xyXG4gICAgICBmb250OiAnNDJweCBBcmlhbCcsIGZpbGw6ICcjZmZmZmZmJywgYWxpZ246ICdjZW50ZXInXHJcbiAgICB9KTtcclxuICAgIHRoaXMuZ2FtZW92ZXJUZXh0LmFuY2hvci5zZXQoMC41KTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uRG93bi5hZGQodGhpcy5vbklucHV0RG93biwgdGhpcyk7XHJcblxyXG4gICAgLy9wcmV2ZW50IGFjY2lkZW50YWwgY2xpY2stdGhydSBieSBub3QgYWxsb3dpbmcgc3RhdGUgdHJhbnNpdGlvbiBmb3IgYSBzaG9ydCB0aW1lXHJcbiAgICB0aGlzLmNhbkNvbnRpbnVlVG9OZXh0U3RhdGUgPSBmYWxzZTtcclxuICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoUGhhc2VyLlRpbWVyLlNFQ09ORCAqIDAuNSwgZnVuY3Rpb24oKXsgdGhpcy5jYW5Db250aW51ZVRvTmV4dFN0YXRlID0gdHJ1ZTsgfSwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5zYXZlVmFyc1RvTG9jYWxTdG9yYWdlKCk7XHJcbiAgICB0aGlzLnJlc2V0R2xvYmFsVmFyaWFibGVzKCk7XHJcbiAgfVxyXG5cclxuICBzYXZlVmFyc1RvTG9jYWxTdG9yYWdlKCl7XHJcbiAgICB2YXIgbWF4ID0gbG9jYWxTdG9yYWdlLm1heFNjb3JlIHx8IDA7IC8vZGVmYXVsdCB2YWx1ZSBvZiAwIGlzIGl0IGRvZXMgbm90IGV4aXN0XHJcbiAgICBpZiAodGhpcy5nYW1lLmdsb2JhbC5zY29yZSA+IG1heCl7IGxvY2FsU3RvcmFnZS5tYXhTY29yZSA9IHRoaXMuZ2FtZS5nbG9iYWwuc2NvcmU7IH1cclxuICB9XHJcblxyXG4gIHJlc2V0R2xvYmFsVmFyaWFibGVzKCl7XHJcbiAgICB0aGlzLmdhbWUuZ2xvYmFsLnNjb3JlID0gMDtcclxuICB9XHJcbiAgdXBkYXRlKCkge31cclxuXHJcbiAgb25JbnB1dERvd24gKCkge1xyXG4gICAgaWYodGhpcy5jYW5Db250aW51ZVRvTmV4dFN0YXRlKXtcclxuICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdtZW51Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuIiwiY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5hc3NldCA9IG51bGw7XHJcbiAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcmVsb2FkKCkge1xyXG4gICAgLy9zZXR1cCBsb2FkaW5nIGJhclxyXG4gICAgdGhpcy5hc3NldCA9IHRoaXMuYWRkLnNwcml0ZSh0aGlzLmdhbWUud2lkdGggKiAwLjUgLSAxMTAsIHRoaXMuZ2FtZS5oZWlnaHQgKiAwLjUgLSAxMCwgJ3ByZWxvYWRlcicpO1xyXG4gICAgdGhpcy5sb2FkLnNldFByZWxvYWRTcHJpdGUodGhpcy5hc3NldCk7XHJcbiAgICBcclxuICAgIC8vU2V0dXAgbG9hZGluZyBhbmQgaXRzIGV2ZW50c1xyXG4gICAgdGhpcy5sb2FkLm9uTG9hZENvbXBsZXRlLmFkZE9uY2UodGhpcy5vbkxvYWRDb21wbGV0ZSwgdGhpcyk7XHJcbiAgICB0aGlzLmxvYWRSZXNvdXJjZXMoKTtcclxuICB9XHJcblxyXG4gIGxvYWRSZXNvdXJjZXMoKSB7XHJcbiAgICAgIFxyXG4gICAgLy9NRU5VIFJFU09VUkNFU1xyXG4gICAgLy9tZW51IGJhY2tncm91bmRcclxuICAgIC8vdGV4dCBpbWFnZXNcclxuICAgIC8vbXVzaWMgZmlsZXMgP1xyXG4vLyAgTG9hZCBmaWx0ZXIgc2NyaXB0c1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuc2NyaXB0KCdncmF5JywgJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL21hc3Rlci92Mi9maWx0ZXJzL0dyYXkuanMnKTtcclxuXHJcbiAgICBcclxuICAgIC8vbG9hZCBnYW1lIGRhdGFcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmpzb24oJ3RpbGVEZXRhaWwnLCAnYXNzZXRzL3RpbGVEZXRhaWwuanNvbicpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuanNvbignd2FsbEdyaWQnLCAnYXNzZXRzL3dhbGxHcmlkLmpzb24nKTtcclxuICBcclxuICAgIC8vR0FNRSBSRVNPVVJDRVNcclxuICAgIC8vZ2FtZSBib2FyZCBiYWNrZ3JvdW5kXHJcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnYmFja2dyb3VuZCcsJ2Fzc2V0cy9tZWRpdW1fYm9hcmQucG5nJyk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnZGljZScsJ2Fzc2V0cy9kaWNlLnBuZycsIDEyOCwgMTk0LCAxMCk7XHJcbiAgICBcclxuICAgIC8vIG1vZGFsIGltYWdlc1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfeWVzJywnYXNzZXRzL3RleHRfeWVzLnBuZycpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfbm8nLCdhc3NldHMvdGV4dF9uby5wbmcnKTtcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X2dvJywnYXNzZXRzL3RleHRfZ28ucG5nJyk7XHJcblxyXG4gICAgLy9wbGF5ZXIgdG9rZW5zIHNwcml0ZXNoZWV0c1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ2Nsb25lJywgJ2Fzc2V0cy9jbG9uZS5wbmcnLDExMCwxNjgpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuYXRsYXMoJ2Jvb20nLCAnYXNzZXRzL2Jvb20ucG5nJywgJ2Fzc2V0cy9ib29tLmpzb24nLCBQaGFzZXIuTG9hZGVyLlRFWFRVUkVfQVRMQVNfSlNPTl9IQVNIKTtcclxuXHJcbiAgICAvL2F1ZGlvIGZpbGVzIFxyXG4gICAgXHJcbiAgICAvL3RoaXMuZ2FtZS5sb2FkLmltYWdlKCdjcm9zc2hhaXJzJywgJ2Fzc2V0cy9jcm9zc2hhaXJfcmVkX3NtYWxsLnBuZycpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfZ28nLCAnYXNzZXRzL3RleHRfZ28ucG5nJyk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9yZWFkeScsICdhc3NldHMvdGV4dF9yZWFkeS5wbmcnKTtcclxuXHJcbiAgICAvL3RoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCd0YXJnZXQnLCAnYXNzZXRzL3RhcmdldC5wbmcnLDEyOC42NiwxMjgpO1xyXG5cclxuICAgIC8vdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ2d1bnNob3QnLCdhc3NldHMvZ3Vuc2hvdC53YXYnKTtcclxuICAgIC8vdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ2RpbmcnLCdhc3NldHMvZGluZy53YXYnKTtcclxuICB9XHJcblxyXG4gIG9uTG9hZENvbXBsZXRlKCkge1xyXG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdzZXR1cCcpO1xyXG4gICAgLy90aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ2dhbWUnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZWxvYWRlcjtcclxuIiwiY2xhc3MgU2V0dXAgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiB9XHJcbiAgXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5nYW1lLm5hbWUgPSBcInVzZXJcIjtcclxuXHJcbiAgICB0aGlzLmdhbWUuc3RhZ2UuZGlzYWJsZVZpc2liaWxpdHlDaGFuZ2UgPSB0cnVlO1xyXG4gICAgdGhpcy5nYW1lLm1vZGFsID0gbmV3IGdhbWVNb2RhbCh0aGlzLmdhbWUpO1xyXG4gICAgdGhpcy5jcmVhdGVNb2RhbHMoKTtcclxuICAgIHRoaXMuZ2FtZS5tb2RhbC5zaG93TW9kYWwoJ3VzZXJuYW1lJyk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmFkZENhbGxiYWNrcyh0aGlzLCBudWxsLCBudWxsLCB0aGlzLmtleVByZXNzKTtcclxuICAgIHRoaXMuYmtzcCA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleWJvYXJkLkJBQ0tTUEFDRSk7XHJcbiAgICB0aGlzLmJrc3Aub25Eb3duLmFkZCh0aGlzLmtleVByZXNzLCB0aGlzKTtcclxuICAgIHRoaXMuZW50ZXIgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5LZXlib2FyZC5FTlRFUik7XHJcbiAgICB0aGlzLmVudGVyLm9uRG93bi5hZGQodGhpcy5rZXlQcmVzcywgdGhpcyk7XHJcbiAgICB0aGlzLmdhbWUuY2xpZW50LmFza05ld1BsYXllcigpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi5zZXR1cCgpO1xyXG59XHJcblxyXG5rZXlQcmVzcyhjaGFyKSB7XHJcblxyXG4gICAgaWYodHlwZW9mKGNoYXIpID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgaWYgKGNoYXIuZXZlbnQuY29kZSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyLmV2ZW50LmNvZGUgPT09IFwiQmFja3NwYWNlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLm5hbWUgPSB0aGlzLmdhbWUubmFtZS5zdWJzdHJpbmcoMCwgdGhpcy5nYW1lLm5hbWUubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY2hhciA9PSBcIiBcIikge1xyXG4gICAgICAgICAgICBjaGFyID0gXCJfXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZS5uYW1lICs9IGNoYXI7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdhbWUubW9kYWwudXBkYXRlTW9kYWxWYWx1ZSh0aGlzLmdhbWUubmFtZSwgJ3VzZXJuYW1lJywgNCk7XHJcbn1cclxuICBcclxuICBjcmVhdGVNb2RhbHMoKSB7XHJcbiAgXHJcbiAgICAvLyBTdGFydCBHYW1lXHJcbiAgICB0aGlzLmdhbWUubW9kYWwuY3JlYXRlTW9kYWwoXHJcbiAgICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwidXNlcm5hbWVcIixcclxuICAgICAgICBpbmNsdWRlQmFja2dyb3VuZDogdHJ1ZSxcclxuICAgICAgICBtb2RhbENsb3NlT25JbnB1dDogZmFsc2UsXHJcbiAgICAgICAgaXRlbXNBcnI6IFt7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ3JhcGhpY3NcIixcclxuICAgICAgICAgICAgZ3JhcGhpY0NvbG9yOiBcIjB4ZmZmZmZmXCIsXHJcbiAgICAgICAgICAgIGdyYXBoaWNXaWR0aDogMzAwLFxyXG4gICAgICAgICAgICBncmFwaGljSGVpZ2h0OiAzMDAsXHJcbiAgICAgICAgICAgIGdyYXBoaWNSYWRpdXM6IDQwXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgY29udGVudDogXCJUeXBlIGEgdXNlcm5hbWUsXFxudGhlbiBoaXQgPEVOVEVSPlxcblxcbihtYXggb2YgMjUgY2hhcmFjdGVycylcIixcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIweDFlMWUxZVwiLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiAtNTBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmdhbWUubmFtZSxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIweDFlMWUxZVwiLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiA1MFxyXG4gICAgICAgIH0sIF1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHVwO1xyXG4iXX0=
