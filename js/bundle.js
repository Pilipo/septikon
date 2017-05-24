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

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'phaser-test-game');
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

        this.socket.on('request', function (data) {
            console.log('REQUEST: ');
            switch (data.details.type) {
                case "askStart":
                    this.septikon.showModal('askStart');
                    break;

            }
            console.log(data);
        });

        this.socket.on('action', function (data) {
            //console.log('ACTION: ');
            //console.log(data);
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
            //console.log(localStorage.getItem('septUUID'));
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
  function Clone(game, x, y, frame, team) {
    _classCallCheck(this, Clone);

    //setup physics properties
    var _this = _possibleConstructorReturn(this, (Clone.__proto__ || Object.getPrototypeOf(Clone)).call(this, game, x, y, 'clone', frame));

    _this.anchor.setTo(0.5, 0.65);
    _this.game.physics.arcade.enableBody(_this);
    //this.body.collideWorldBounds = true;

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
            var clone = new _clone2.default(this.game, point.x, point.y);
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
    function Personnel(type, x, y) {
        _classCallCheck(this, Personnel);

        this.typeEnum = Object.freeze({
            clone: 0,
            biodrone: 1
        });

        this.x = x;
        this.y = y;

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

        this.startingCloneCount = 5;
    }

    _createClass(Player, [{
        key: 'addPersonnel',
        value: function addPersonnel(type, x, y) {
            if (type == "clone" && this.getPersonnel(type).length < this.startingCloneCount) {
                this.personnelArray.push(new Personnel('clone', x, y));
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
                    console.log("player has requested clones be reset during init. \nTODO: \n - dump server clones\n - tell player to dump clones.");
                    var player = this.getPlayerBySocketID(state.socketID);
                    player.removePersonnel(null, true);
                    this.emit('action', { callback: "removeAllPersonnel", details: {} }, player.socketID);
                    break;
                case 'start':
                    console.log("player ready to start! \nTODO:\n - Check on opponent. \n - Send message to user HUD.");
                    break;
                default:
                    console.log(state.value);
                    console.error(state.value + " is not a valid player state!");
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
                    if (player.addPersonnel('clone', x, y)) {
                        this.emit('action', { callback: "addClone", details: { x: x, y: y } }, player.socketID);
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
            if (msg == "response" || msg == "request") {
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
      //setup device scaling
      if (!this.game.device.desktop) {
        //this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.parentIsWindow = true;
        this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
        this.game.scale.minWidth = 480;
        this.game.scale.minHeight = 260;
        this.game.scale.forceOrientation(true);
        //this.game.scale.setSize();
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
"use strict";

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
        key: "create",
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

            var scale = window.innerWidth / this.background.height;

            this.game.boardGroup.add(this.background);

            this.game.septikon.createTileArray(31, 21, { x: 0 - this.background.width / 2, y: 0 - this.background.height / 2 });
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
        key: "createModals",
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
        key: "update",
        value: function update() {
            this.game.debug.text('Mouse', 700, 32);

            this.game.debug.text('Mouse X: ' + this.game.input.x, 700, 64);
            this.game.debug.text('Mouse Y: ' + this.game.input.y, 700, 92);
        }
    }, {
        key: "render",
        value: function render() {

            var x = 32;
            var y = 0;
            var yi = 32;
            /*
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
        key: "toggleFullscreen",
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
      this.game.load.image('dice', 'assets/text_go.png');

      // modal images
      this.game.load.image('text_yes', 'assets/text_yes.png');
      this.game.load.image('text_no', 'assets/text_no.png');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvdGlsZURldGFpbC5qc29uIiwibm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvdjQuanMiLCJzcmNcXG1haW4uanMiLCJzcmNcXG1vZGFsLmpzIiwic3JjXFxwcmVmYWJzXFxjbGllbnQuanMiLCJzcmNcXHByZWZhYnNcXGNsb25lLmpzIiwic3JjXFxwcmVmYWJzXFxjcm9zc2hhaXJzLmpzIiwic3JjXFxwcmVmYWJzXFxkaWNlLmpzIiwic3JjXFxwcmVmYWJzXFxtYXN0ZXIuanMiLCJzcmNcXHByZWZhYnNcXG9yZG5hbmNlLmpzIiwic3JjXFxwcmVmYWJzXFxwZXJzb25uZWwuanMiLCJzcmNcXHByZWZhYnNcXHJlc291cmNlcy5qcyIsInNyY1xccHJlZmFic1xcc2VwdGlrb24uanMiLCJzcmNcXHByZWZhYnNcXHRlYW0uanMiLCJzcmNcXHNlcnZlclxcb3JkbmFuY2UuanMiLCJzcmNcXHNlcnZlclxccGVyc29ubmVsLmpzIiwic3JjXFxzZXJ2ZXJcXHBsYXllci5qcyIsInNyY1xcc2VydmVyXFxyZXNvdXJjZS5qcyIsInNyY1xcc2VydmVyXFxzZXB0aWtvbi5qcyIsInNyY1xcc3RhdGVzXFxib290LmpzIiwic3JjXFxzdGF0ZXNcXGdhbWUuanMiLCJzcmNcXHN0YXRlc1xcZ2FtZW92ZXIuanMiLCJzcmNcXHN0YXRlc1xccHJlbG9hZGVyLmpzIiwic3JjXFxzdGF0ZXNcXHNldHVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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VixDQUFnQixXQUFoQixDQUNJO0FBQ0Esc0JBQU0sVUFETjtBQUVBLG1DQUFtQixJQUZuQjtBQUdBLG1DQUFtQixLQUhuQjtBQUlBLDBCQUFVLENBQUM7QUFDUCwwQkFBTSxVQURDO0FBRVAsa0NBQWMsVUFGUDtBQUdQLGtDQUFjLEdBSFA7QUFJUCxtQ0FBZSxHQUpSO0FBS1AsbUNBQWU7QUFMUixpQkFBRCxFQU1QO0FBQ0MsMEJBQU0sTUFEUDtBQUVDLDZCQUFTLDhEQUZWO0FBR0MsZ0NBQVksY0FIYjtBQUlDLDhCQUFVLEVBSlg7QUFLQywyQkFBTyxVQUxSO0FBTUMsNkJBQVMsQ0FBQztBQU5YLGlCQU5PLEVBYVA7QUFDQywwQkFBTSxNQURQO0FBRUMsNkJBQVMsS0FBSyxJQUFMLENBQVUsSUFGcEI7QUFHQyxnQ0FBWSxjQUhiO0FBSUMsOEJBQVUsRUFKWDtBQUtDLDJCQUFPLFVBTFI7QUFNQyw2QkFBUztBQU5WLGlCQWJPO0FBSlYsYUFESjtBQTRCRDs7OztFQXpFaUIsT0FBTyxLOztrQkE0RVosSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cz17XHJcblx0XCJ0aWxlUHJvcGVydHlBcnJheVwiOiB7XHJcblx0XHRcIm90aGVyU3BhY2VcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDAwXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInNwYWNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInNwYWNlXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjksMFwiLCBcIjksMVwiLCBcIjksMlwiLCBcIjksM1wiLCBcIjksNFwiLCBcIjksNVwiLCBcIjksNlwiLCBcIjksN1wiLCBcIjksOFwiLCBcIjksOVwiLCBcIjksMTBcIiwgXCI5LDExXCIsIFwiOSwxMlwiLCBcIjksMTNcIiwgXCI5LDE0XCIsIFwiOSwxNVwiLCBcIjksMTZcIiwgXCI5LDE3XCIsIFwiOSwxOFwiLCBcIjksMTlcIiwgXCI5LDIwXCIsIFwiMTAsMFwiLCBcIjEwLDFcIiwgXCIxMCwyXCIsIFwiMTAsM1wiLCBcIjEwLDRcIiwgXCIxMCw1XCIsIFwiMTAsNlwiLCBcIjEwLDdcIiwgXCIxMCw4XCIsIFwiMTAsOVwiLCBcIjEwLDEwXCIsIFwiMTAsMTFcIiwgXCIxMCwxMlwiLCBcIjEwLDEzXCIsIFwiMTAsMTRcIiwgXCIxMCwxNVwiLCBcIjEwLDE2XCIsIFwiMTAsMTdcIiwgXCIxMCwxOFwiLCBcIjEwLDE5XCIsIFwiMTAsMjBcIiwgXCIxMSwwXCIsIFwiMTEsMVwiLCBcIjExLDJcIiwgXCIxMSwzXCIsIFwiMTEsNFwiLCBcIjExLDVcIiwgXCIxMSw2XCIsIFwiMTEsN1wiLCBcIjExLDhcIiwgXCIxMSw5XCIsIFwiMTEsMTBcIiwgXCIxMSwxMVwiLCBcIjExLDEyXCIsIFwiMTEsMTNcIiwgXCIxMSwxNFwiLCBcIjExLDE1XCIsIFwiMTEsMTZcIiwgXCIxMSwxN1wiLCBcIjExLDE4XCIsIFwiMTEsMTlcIiwgXCIxMSwyMFwiLCBcIjEyLDBcIiwgXCIxMiwxXCIsIFwiMTIsMlwiLCBcIjEyLDNcIiwgXCIxMiw0XCIsIFwiMTIsNVwiLCBcIjEyLDZcIiwgXCIxMiw3XCIsIFwiMTIsOFwiLCBcIjEyLDlcIiwgXCIxMiwxMFwiLCBcIjEyLDExXCIsIFwiMTIsMTJcIiwgXCIxMiwxM1wiLCBcIjEyLDE0XCIsIFwiMTIsMTVcIiwgXCIxMiwxNlwiLCBcIjEyLDE3XCIsIFwiMTIsMThcIiwgXCIxMiwxOVwiLCBcIjEyLDIwXCIsIFwiMTMsMFwiLCBcIjEzLDFcIiwgXCIxMywyXCIsIFwiMTMsM1wiLCBcIjEzLDRcIiwgXCIxMyw1XCIsIFwiMTMsNlwiLCBcIjEzLDdcIiwgXCIxMyw4XCIsIFwiMTMsOVwiLCBcIjEzLDEwXCIsIFwiMTMsMTFcIiwgXCIxMywxMlwiLCBcIjEzLDEzXCIsIFwiMTMsMTRcIiwgXCIxMywxNVwiLCBcIjEzLDE2XCIsIFwiMTMsMTdcIiwgXCIxMywxOFwiLCBcIjEzLDE5XCIsIFwiMTMsMjBcIiwgXCIxNCwwXCIsIFwiMTQsMVwiLCBcIjE0LDJcIiwgXCIxNCwzXCIsIFwiMTQsNFwiLCBcIjE0LDVcIiwgXCIxNCw2XCIsIFwiMTQsN1wiLCBcIjE0LDhcIiwgXCIxNCw5XCIsIFwiMTQsMTBcIiwgXCIxNCwxMVwiLCBcIjE0LDEyXCIsIFwiMTQsMTNcIiwgXCIxNCwxNFwiLCBcIjE0LDE1XCIsIFwiMTQsMTZcIiwgXCIxNCwxN1wiLCBcIjE0LDE4XCIsIFwiMTQsMTlcIiwgXCIxNCwyMFwiLCBcIjE1LDBcIiwgXCIxNSwxXCIsIFwiMTUsMlwiLCBcIjE1LDNcIiwgXCIxNSw0XCIsIFwiMTUsNVwiLCBcIjE1LDZcIiwgXCIxNSw3XCIsIFwiMTUsOFwiLCBcIjE1LDlcIiwgXCIxNSwxMFwiLCBcIjE1LDExXCIsIFwiMTUsMTJcIiwgXCIxNSwxM1wiLCBcIjE1LDE0XCIsIFwiMTUsMTVcIiwgXCIxNSwxNlwiLCBcIjE1LDE3XCIsIFwiMTUsMThcIiwgXCIxNSwxOVwiLCBcIjE1LDIwXCIsIFwiMTYsMFwiLCBcIjE2LDFcIiwgXCIxNiwyXCIsIFwiMTYsM1wiLCBcIjE2LDRcIiwgXCIxNiw1XCIsIFwiMTYsNlwiLCBcIjE2LDdcIiwgXCIxNiw4XCIsIFwiMTYsOVwiLCBcIjE2LDEwXCIsIFwiMTYsMTFcIiwgXCIxNiwxMlwiLCBcIjE2LDEzXCIsIFwiMTYsMTRcIiwgXCIxNiwxNVwiLCBcIjE2LDE2XCIsIFwiMTYsMTdcIiwgXCIxNiwxOFwiLCBcIjE2LDE5XCIsIFwiMTYsMjBcIiwgXCIxNywwXCIsIFwiMTcsMVwiLCBcIjE3LDJcIiwgXCIxNywzXCIsIFwiMTcsNFwiLCBcIjE3LDVcIiwgXCIxNyw2XCIsIFwiMTcsN1wiLCBcIjE3LDhcIiwgXCIxNyw5XCIsIFwiMTcsMTBcIiwgXCIxNywxMVwiLCBcIjE3LDEyXCIsIFwiMTcsMTNcIiwgXCIxNywxNFwiLCBcIjE3LDE1XCIsIFwiMTcsMTZcIiwgXCIxNywxN1wiLCBcIjE3LDE4XCIsIFwiMTcsMTlcIiwgXCIxNywyMFwiLCBcIjE4LDBcIiwgXCIxOCwxXCIsIFwiMTgsMlwiLCBcIjE4LDNcIiwgXCIxOCw0XCIsIFwiMTgsNVwiLCBcIjE4LDZcIiwgXCIxOCw3XCIsIFwiMTgsOFwiLCBcIjE4LDlcIiwgXCIxOCwxMFwiLCBcIjE4LDExXCIsIFwiMTgsMTJcIiwgXCIxOCwxM1wiLCBcIjE4LDE0XCIsIFwiMTgsMTVcIiwgXCIxOCwxNlwiLCBcIjE4LDE3XCIsIFwiMTgsMThcIiwgXCIxOCwxOVwiLCBcIjE4LDIwXCIsIFwiMTksMFwiLCBcIjE5LDFcIiwgXCIxOSwyXCIsIFwiMTksM1wiLCBcIjE5LDRcIiwgXCIxOSw1XCIsIFwiMTksNlwiLCBcIjE5LDdcIiwgXCIxOSw4XCIsIFwiMTksOVwiLCBcIjE5LDEwXCIsIFwiMTksMTFcIiwgXCIxOSwxMlwiLCBcIjE5LDEzXCIsIFwiMTksMTRcIiwgXCIxOSwxNVwiLCBcIjE5LDE2XCIsIFwiMTksMTdcIiwgXCIxOSwxOFwiLCBcIjE5LDE5XCIsIFwiMTksMjBcIiwgXCIyMCwwXCIsIFwiMjAsMVwiLCBcIjIwLDJcIiwgXCIyMCwzXCIsIFwiMjAsNFwiLCBcIjIwLDVcIiwgXCIyMCw2XCIsIFwiMjAsN1wiLCBcIjIwLDhcIiwgXCIyMCw5XCIsIFwiMjAsMTBcIiwgXCIyMCwxMVwiLCBcIjIwLDEyXCIsIFwiMjAsMTNcIiwgXCIyMCwxNFwiLCBcIjIwLDE1XCIsIFwiMjAsMTZcIiwgXCIyMCwxN1wiLCBcIjIwLDE4XCIsIFwiMjAsMTlcIiwgXCIyMCwyMFwiLCBcIjIxLDBcIiwgXCIyMSwxXCIsIFwiMjEsMlwiLCBcIjIxLDNcIiwgXCIyMSw0XCIsIFwiMjEsNVwiLCBcIjIxLDZcIiwgXCIyMSw3XCIsIFwiMjEsOFwiLCBcIjIxLDlcIiwgXCIyMSwxMFwiLCBcIjIxLDExXCIsIFwiMjEsMTJcIiwgXCIyMSwxM1wiLCBcIjIxLDE0XCIsIFwiMjEsMTVcIiwgXCIyMSwxNlwiLCBcIjIxLDE3XCIsIFwiMjEsMThcIiwgXCIyMSwxOVwiLCBcIjIxLDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVUaGVybWl0ZVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDFcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInRoZXJtaXRlXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwiYmlvbWFzc1wiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMixcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxyXG5cdFx0XHRcdFwiYXJnc1wiOiBcInRoZXJtaXRlXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwyMFwiLCBcIjcsMVwiLCBcIjcsN1wiLCBcIjIzLDEzXCIsIFwiMjMsMTlcIiwgXCIyNCwwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVTaGllbGRcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDAyXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJzaGllbGRcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJlbmVyZ3lcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDEsXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcclxuXHRcdFx0XHRcImFyZ3NcIjogXCJzaGllbGRcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDZcIiwgXCI2LDEzXCIsIFwiNiwxOVwiLCBcIjcsMlwiLCBcIjcsMTJcIiwgXCIyMyw4XCIsIFwiMjMsMThcIiwgXCIyNCwxXCIsIFwiMjQsN1wiLCBcIjI0LDE0XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVCaW9kcm9uZVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDNcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImJpb2Ryb25lXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwiYmlvZHJvbmVcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDEsXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcclxuXHRcdFx0XHRcImFyZ3NcIjogXCJiaW9kcm9uZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsNVwiLCBcIjcsM1wiLCBcIjcsMTVcIiwgXCIyMyw1XCIsIFwiMjMsMTdcIiwgXCIyNCwxNVwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlU2F0ZWxsaXRlXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwNFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwic2F0ZWxsaXRlXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwibWV0YWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDEsXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcclxuXHRcdFx0XHRcImFyZ3NcIjogXCJzYXRlbGxpdGVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDBcIiwgXCI2LDE0XCIsIFwiNyw0XCIsIFwiNywxN1wiLCBcIjIzLDNcIiwgXCIyMywxNlwiLCBcIjI0LDZcIiwgXCIyNCwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlTGFzZXJcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDA1XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJsYXNlclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcImVuZXJneVwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxyXG5cdFx0XHRcdFwiYXJnc1wiOiBcImxhc2VyXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwzXCIsIFwiNiw3XCIsIFwiNiw4XCIsIFwiNiwxMlwiLCBcIjYsMTZcIiwgXCI3LDVcIiwgXCI3LDZcIiwgXCI3LDlcIiwgXCI3LDE4XCIsIFwiNywxOVwiLCBcIjIzLDFcIiwgXCIyMywyXCIsIFwiMjMsMTFcIiwgXCIyMywxNFwiLCBcIjIzLDE1XCIsIFwiMjQsNFwiLCBcIjI0LDhcIiwgXCIyNCwxMlwiLCBcIjI0LDEzXCIsIFwiMjQsMTdcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZVJlcGFpclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDZcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInJlcGFpclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcIm1ldGFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAxLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJyZXBhaXJcIixcclxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMVwiLCBcIjYsMTBcIiwgXCI2LDE4XCIsIFwiNyw4XCIsIFwiNywxM1wiLCBcIjIzLDdcIiwgXCIyMywxMlwiLCBcIjI0LDJcIiwgXCIyNCwxMFwiLCBcIjI0LDE5XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVSb2NrZXRcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDA3XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJyb2NrZXRcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJyb2NrZXRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDEsXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcclxuXHRcdFx0XHRcImFyZ3NcIjogXCJyb2NrZXRcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDRcIiwgXCI2LDExXCIsIFwiNywxMFwiLCBcIjcsMTZcIiwgXCIyMyw0XCIsIFwiMjMsMTBcIiwgXCIyNCw5XCIsIFwiMjQsMTZcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZUVzcGlvbmFnZVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDhcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImVzcGlvbmFnZVwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcImJpb21hc3NcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDMsXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImVzcGlvbmFnZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMTVcIiwgXCI3LDExXCIsIFwiMjMsOVwiLCBcIjI0LDVcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZVRha2VvdmVyXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwOVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwidGFrZW92ZXJcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJlbmVyZ3lcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDIsXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcInRha2VvdmVyXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwxN1wiLCBcIjcsMTRcIiwgXCIyMyw2XCIsIFwiMjQsM1wiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlUmVwYWlyVHdvXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxMFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwicmVwYWlyVHdvXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiLCBcIm94eWdlblwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxXSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwicmVwYWlyXCIsXHJcblx0XHRcdFx0XCJhcmdzXCI6IDJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiw5XCIsIFwiMjQsMTFcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZUNvdW50ZXJFc3Bpb25hZ2VcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDExXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJjb3VudGVyRXNwaW9uYWdlXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImJpb21hc3NcIiwgXCJveHlnZW5cIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMV0sXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImNvdW50ZXJcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDJcIiwgXCIyNCwxOFwiXVxyXG5cdFx0fSxcclxuXHRcdFwib3RoZXJTdXJmYWNlXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxMlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJzdXJmYWNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInN1cmZhY2VcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiOCwwXCIsIFwiOCwxXCIsIFwiOCwyXCIsIFwiOCwzXCIsIFwiOCw0XCIsIFwiOCw1XCIsIFwiOCw2XCIsIFwiOCw3XCIsIFwiOCw4XCIsIFwiOCw5XCIsIFwiOCwxMFwiLCBcIjgsMTFcIiwgXCI4LDEyXCIsIFwiOCwxM1wiLCBcIjgsMTRcIiwgXCI4LDE1XCIsIFwiOCwxNlwiLCBcIjgsMTdcIiwgXCI4LDE4XCIsIFwiOCwxOVwiLCBcIjgsMjBcIiwgXCIyMiwwXCIsIFwiMjIsMVwiLCBcIjIyLDJcIiwgXCIyMiwzXCIsIFwiMjIsNFwiLCBcIjIyLDVcIiwgXCIyMiw2XCIsIFwiMjIsN1wiLCBcIjIyLDhcIiwgXCIyMiw5XCIsIFwiMjIsMTBcIiwgXCIyMiwxMVwiLCBcIjIyLDEyXCIsIFwiMjIsMTNcIiwgXCIyMiwxNFwiLCBcIjIyLDE1XCIsIFwiMjIsMTZcIiwgXCIyMiwxN1wiLCBcIjIyLDE4XCIsIFwiMjIsMTlcIiwgXCIyMiwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwib3RoZXJMb2NrXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxM1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJsb2NrXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImxvY2tcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNywwXCIsIFwiNSwxMFwiLCBcIjEsMTBcIiwgXCI3LDIwXCIsIFwiMjMsMFwiLCBcIjIzLDIwXCIsIFwiMjUsMTBcIiwgXCIyOSwxMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYXJtb3J5RHJpbGxcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDE0XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImFybW9yeVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJkcmlsbFwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI0LDEwXCIsIFwiMjYsMTBcIl1cclxuXHRcdH0sXHJcblx0XHRcIkFybW9yeUNhbm5vblwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMTVcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYXJtb3J5XCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImNhbm5vblwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIzLDEwXCIsIFwiMjcsMTBcIl1cclxuXHRcdH0sXHJcblx0XHRcImFybW9yeUV4cGxvc2l2ZXNcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDE2XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImFybW9yeVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJleHBsb3NpdmVzXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjIsMTBcIiwgXCIyOCwxMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwibGljaGVuXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxN1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImxpY2hlblwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogXCJiaW9tYXNzXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDBcIiwgXCIwLDEwXCIsIFwiMCwxN1wiLCBcIjEsMlwiLCBcIjEsOFwiLCBcIjEsMTZcIiwgXCIxLDIwXCIsIFwiMjksMFwiLCBcIjI5LDRcIiwgXCIyOSwxMlwiLCBcIjI5LDE4XCIsIFwiMzAsM1wiLCBcIjMwLDEwXCIsIFwiMzAsMjBcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25MaWNoZW5Ud29cIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDE4XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwibGljaGVuVHdvXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcImJpb21hc3NcIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAyXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsNFwiLCBcIjMwLDE2XCJdXHJcblxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbkNoZW1pY2FsUmVhY3RvclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMTlcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJjaGVtaWNhbFJlYWN0b3JcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJiaW9tYXNzXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAxLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogXCJveHlnZW5cIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjEsMVwiLCBcIjEsOVwiLCBcIjI5LDE5XCIsIFwiMjksMTFcIl1cclxuXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uQ2hlbWljYWxSZWFjdG9yVHdvXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyMFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImNoZW1pY2FsUmVhY3RvclR3b1wiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcImJpb21hc3NcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcIm94eWdlblwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IDJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCw1XCIsIFwiMzAsMTVcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25BaXJGaWx0ZXJcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDIxXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiYWlyRmlsdGVyXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwib3h5Z2VuXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAyLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogXCJveHlnZW5cIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAzXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMTVcIiwgXCIxLDExXCIsIFwiMjksOVwiLCBcIjMwLDVcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25CaW9jb2xsZWN0b3JcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDIyXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiYmlvY29sbGVjdG9yXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm94eWdlblwiLCBcImJpb21hc3NcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMV0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcImJpb2Ryb25lXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDE0XCIsIFwiMCwxOFwiLCBcIjEsNlwiLCBcIjEsMTdcIiwgXCIzMCw2XCIsIFwiMzAsMlwiLCBcIjI5LDE0XCIsIFwiMjksM1wiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvblVyYW5pdW1NaW5lXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyM1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInVyYW5pdW1NaW5lXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm94eWdlblwiLCBcImVuZXJneVwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFwidXJhbml1bVwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwyXCIsIFwiMCw2XCIsIFwiMSwzXCIsIFwiMzAsMThcIiwgXCIzMCwxNFwiLCBcIjI5LDE3XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uTnVjbGVhclJlYWN0b3JcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDI0XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwibnVjbGVhclJlYWN0b3JcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJ1cmFuaXVtXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAxLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogXCJlbmVyZ3lcIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAzXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsOVwiLCBcIjAsMTZcIiwgXCIxLDdcIiwgXCIxLDE0XCIsIFwiMSwxOVwiLCBcIjMwLDExXCIsIFwiMzAsNFwiLCBcIjI5LDEzXCIsIFwiMjksNlwiLCBcIjI5LDFcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25UaGVybWFsR2VuZXJhdG9yXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyNVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInRoZXJtYWxHZW5lcmF0b3JcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJiaW9tYXNzXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAxLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogXCJlbmVyZ3lcIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMTJcIiwgXCIzMCw4XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uRm91bmRyeVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjZcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJmb3VuZHJ5XCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwiZW5lcmd5XCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAxLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogXCJtZXRhbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwzXCIsIFwiMCwxMVwiLCBcIjAsMTlcIiwgXCIxLDEzXCIsIFwiMzAsMTdcIiwgXCIzMCw5XCIsIFwiMzAsMVwiLCBcIjI5LDdcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25Gb3VuZHJ5VHdvXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyN1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImZvdW5kcnlUd29cIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJlbmVyZ3lcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcIm1ldGFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogMlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIxLDBcIiwgXCIyOSwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvblJvY2tldFdvcmtzaG9wXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyOFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInJvY2tldFdvcmtzaG9wXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwiZW5lcmd5XCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAxLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogXCJyb2NrZXRcIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMVwiLCBcIjAsN1wiLCBcIjEsNVwiLCBcIjEsMTJcIiwgXCIxLDE1XCIsIFwiMzAsMTlcIiwgXCIzMCwxM1wiLCBcIjI5LDE1XCIsIFwiMjksOFwiLCBcIjI5LDVcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25TZW5zb3JDYWJpblwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjlcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJzZW5zb3JDYWJpblwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJraWxsQmlvZHJvbmVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDEzXCIsIFwiMzAsN1wiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbk51Y2xlYXJBcm1vcnlcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDMwXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwibnVjbGVhckFybW9yeVwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJveHlnZW5cIiwgXCJlbmVyZ3lcIiwgXCJ1cmFuaXVtXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzEsIDEsIDFdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogXCJudWtlXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDIwXCIsIFwiMSw0XCIsIFwiMSwxOFwiLCBcIjMwLDBcIiwgXCIyOSwxNlwiLCBcIjI5LDJcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25SZXBhaXJcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDMxXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwicHJvZFJlcGFpclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcInJlcGFpclwiLFxyXG5cdFx0XHRcdFwidGlsZVRhcmdldElEXCI6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCw4XCIsIFwiMzAsMTJcIl1cclxuXHRcdH0sXHJcblx0XHRcInJlc291cmNlT3h5Z2VuXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAzMlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwib3h5Z2VuXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjUsMFwiLCBcIjUsMVwiLCBcIjUsMlwiLCBcIjUsM1wiLCBcIjUsNFwiLCBcIjUsNVwiLCBcIjUsNlwiLCBcIjUsN1wiLCBcIjUsOFwiLCBcIjUsOVwiLCBcIjI1LDExXCIsIFwiMjUsMTJcIiwgXCIyNSwxM1wiLCBcIjI1LDE0XCIsIFwiMjUsMTVcIiwgXCIyNSwxNlwiLCBcIjI1LDE3XCIsIFwiMjUsMThcIiwgXCIyNSwxOVwiLCBcIjI1LDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJyZXNvdXJjZVJvY2tldFwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzNcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInJvY2tldFwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI0LDBcIiwgXCI0LDFcIiwgXCI0LDJcIiwgXCI0LDNcIiwgXCI0LDRcIiwgXCI0LDVcIiwgXCI0LDZcIiwgXCI0LDdcIiwgXCI0LDhcIiwgXCI0LDlcIiwgXCIyNiwxMVwiLCBcIjI2LDEyXCIsIFwiMjYsMTNcIiwgXCIyNiwxNFwiLCBcIjI2LDE1XCIsIFwiMjYsMTZcIiwgXCIyNiwxN1wiLCBcIjI2LDE4XCIsIFwiMjYsMTlcIiwgXCIyNiwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwicmVzb3VyY2VNZXRhbFwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzRcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcIm1ldGFsXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjMsMFwiLCBcIjMsMVwiLCBcIjMsMlwiLCBcIjMsM1wiLCBcIjMsNFwiLCBcIjMsNVwiLCBcIjMsNlwiLCBcIjMsN1wiLCBcIjMsOFwiLCBcIjMsOVwiLCBcIjI3LDExXCIsIFwiMjcsMTJcIiwgXCIyNywxM1wiLCBcIjI3LDE0XCIsIFwiMjcsMTVcIiwgXCIyNywxNlwiLCBcIjI3LDE3XCIsIFwiMjcsMThcIiwgXCIyNywxOVwiLCBcIjI3LDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJyZXNvdXJjZUVuZXJneVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzVcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImVuZXJneVwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIyLDBcIiwgXCIyLDFcIiwgXCIyLDJcIiwgXCIyLDNcIiwgXCIyLDRcIiwgXCIyLDVcIiwgXCIyLDZcIiwgXCIyLDdcIiwgXCIyLDhcIiwgXCIyLDlcIiwgXCIyLDExXCIsIFwiMiwxMlwiLCBcIjIsMTNcIiwgXCIyLDE0XCIsIFwiMiwxNVwiLCBcIjIsMTZcIiwgXCIyLDE3XCIsIFwiMiwxOFwiLCBcIjIsMTlcIiwgXCIyLDIwXCIsIFwiMjgsMFwiLCBcIjI4LDFcIiwgXCIyOCwyXCIsIFwiMjgsM1wiLCBcIjI4LDRcIiwgXCIyOCw1XCIsIFwiMjgsNlwiLCBcIjI4LDdcIiwgXCIyOCw4XCIsIFwiMjgsOVwiLCBcIjI4LDExXCIsIFwiMjgsMTJcIiwgXCIyOCwxM1wiLCBcIjI4LDE0XCIsIFwiMjgsMTVcIiwgXCIyOCwxNlwiLCBcIjI4LDE3XCIsIFwiMjgsMThcIiwgXCIyOCwxOVwiLCBcIjI4LDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJyZXNvdXJjZUJpb21hc3NcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDM2XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJiaW9tYXNzXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjUsMTFcIiwgXCI1LDEyXCIsIFwiNSwxM1wiLCBcIjUsMTRcIiwgXCI1LDE1XCIsIFwiNSwxNlwiLCBcIjUsMTdcIiwgXCI1LDE4XCIsIFwiNSwxOVwiLCBcIjUsMjBcIiwgXCIyNSwwXCIsIFwiMjUsMVwiLCBcIjI1LDJcIiwgXCIyNSwzXCIsIFwiMjUsNFwiLCBcIjI1LDVcIiwgXCIyNSw2XCIsIFwiMjUsN1wiLCBcIjI1LDhcIiwgXCIyNSw5XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJyZXNvdXJjZUJpb2Ryb25lXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAzN1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiYmlvZHJvbmVcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNCwxMVwiLCBcIjQsMTJcIiwgXCI0LDEzXCIsIFwiNCwxNFwiLCBcIjQsMTVcIiwgXCI0LDE2XCIsIFwiNCwxN1wiLCBcIjQsMThcIiwgXCI0LDE5XCIsIFwiNCwyMFwiLCBcIjI2LDBcIiwgXCIyNiwxXCIsIFwiMjYsMlwiLCBcIjI2LDNcIiwgXCIyNiw0XCIsIFwiMjYsNVwiLCBcIjI2LDZcIiwgXCIyNiw3XCIsIFwiMjYsOFwiLCBcIjI2LDlcIl1cclxuXHRcdH0sXHJcblx0XHRcInJlc291cmNlVXJhbml1bVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzhcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInVyYW5pdW1cIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMywxMVwiLCBcIjMsMTJcIiwgXCIzLDEzXCIsIFwiMywxNFwiLCBcIjMsMTVcIiwgXCIzLDE2XCIsIFwiMywxN1wiLCBcIjMsMThcIiwgXCIzLDE5XCIsIFwiMywyMFwiLCBcIjI3LDBcIiwgXCIyNywxXCIsIFwiMjcsMlwiLCBcIjI3LDNcIiwgXCIyNyw0XCIsIFwiMjcsNVwiLCBcIjI3LDZcIiwgXCIyNyw3XCIsIFwiMjcsOFwiLCBcIjI3LDlcIl1cclxuXHRcdH1cclxuXHR9XHJcbn0iLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICByZXR1cm4gIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG52YXIgcm5nO1xuXG52YXIgY3J5cHRvID0gZ2xvYmFsLmNyeXB0byB8fCBnbG9iYWwubXNDcnlwdG87IC8vIGZvciBJRSAxMVxuaWYgKGNyeXB0byAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG4gIHJuZyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59XG5cbmlmICghcm5nKSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyICBybmRzID0gbmV3IEFycmF5KDE2KTtcbiAgcm5nID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcm5nO1xuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG5cbiAgaWYgKHR5cGVvZihvcHRpb25zKSA9PSAnc3RyaW5nJykge1xuICAgIGJ1ZiA9IG9wdGlvbnMgPT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgKytpaSkge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHY0O1xuIiwiaW1wb3J0IENsaWVudCBmcm9tICcuL3ByZWZhYnMvY2xpZW50JztcclxuaW1wb3J0IEJvb3QgZnJvbSAnLi9zdGF0ZXMvYm9vdCc7XHJcbmltcG9ydCBHYW1lIGZyb20gJy4vc3RhdGVzL2dhbWUnO1xyXG5pbXBvcnQgU2V0dXAgZnJvbSAnLi9zdGF0ZXMvc2V0dXAnO1xyXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJy4vc3RhdGVzL3ByZWxvYWRlcic7XHJcbmltcG9ydCBHYW1lb3ZlciBmcm9tICcuL3N0YXRlcy9nYW1lb3Zlcic7XHJcbmltcG9ydCBTZXB0aWtvbiBmcm9tICcuL3ByZWZhYnMvc2VwdGlrb24nO1xyXG5cclxuaWYodHlwZW9mKFN0b3JhZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VwdFVVSUQnKSAhPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgdXVpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXB0VVVJRCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB1dWlkID0gcmVxdWlyZSgndXVpZC92NCcpKCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlcHRVVUlEJywgdXVpZCk7XHJcbiAgICB9XHJcbn0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiTG9jYWwgU3RvcmFnZSBpcyByZXF1aXJlZCFcIik7XHJcbn1cclxuXHJcbmNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCwgUGhhc2VyLkFVVE8sICdwaGFzZXItdGVzdC1nYW1lJyk7XHJcbmdhbWUuc2VwdGlrb24gPSBuZXcgU2VwdGlrb24oZ2FtZSk7XHJcbmdhbWUuY2xpZW50ID0gbmV3IENsaWVudChnYW1lLnNlcHRpa29uKTtcclxuXHJcbmdhbWUuc3RhdGUuYWRkKCdib290JywgbmV3IEJvb3QoKSk7XHJcbmdhbWUuc3RhdGUuYWRkKCdnYW1lJywgbmV3IEdhbWUoKSk7XHJcbmdhbWUuc3RhdGUuYWRkKCdzZXR1cCcsIG5ldyBTZXR1cCgpKTtcclxuZ2FtZS5zdGF0ZS5hZGQoJ3ByZWxvYWRlcicsIG5ldyBQcmVsb2FkZXIoKSk7XHJcbmdhbWUuc3RhdGUuYWRkKCdnYW1lb3ZlcicsIG5ldyBHYW1lb3ZlcigpKTtcclxuXHJcbmdhbWUuc3RhdGUuc3RhcnQoJ2Jvb3QnKTtcclxuIiwidmFyIGdhbWVNb2RhbCA9IGdhbWVNb2RhbCB8fCB7fTtcclxuXHJcblxyXG5nYW1lTW9kYWwgPSBmdW5jdGlvbiAoZ2FtZSkge1xyXG5cclxuXHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdGdhbWUubW9kYWxzID0ge307XHJcblxyXG5cdC8qKlxyXG5cdCAqIFtoaWRlTW9kYWwgZGVzY3JpcHRpb25dXHJcblx0ICogQHBhcmFtICB7W3R5cGVdfSB0eXBlIFtkZXNjcmlwdGlvbl1cclxuXHQgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgW2Rlc2NyaXB0aW9uXVxyXG5cdCAqL1xyXG5cdHRoaXMuaGlkZU1vZGFsID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuXHRcdHdpbmRvdy5jb25zb2xlLmxvZyh0eXBlKTtcclxuXHRcdGdhbWUubW9kYWxzW3R5cGVdLnZpc2libGUgPSBmYWxzZTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Y3JlYXRlTW9kYWw6IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblx0XHRcdHZhciB0eXBlID0gb3B0aW9ucy50eXBlIHx8ICcnOyAvLyBtdXN0IGJlIHVuaXF1ZVxyXG5cdFx0XHR2YXIgaW5jbHVkZUJhY2tncm91bmQgPSBvcHRpb25zLmluY2x1ZGVCYWNrZ3JvdW5kOyAvLyBtYXliZSBub3Qgb3B0aW9uYWxcclxuXHRcdFx0dmFyIGJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yIHx8IFwiMHgwMDAwMDBcIjtcclxuXHRcdFx0dmFyIGJhY2tncm91bmRPcGFjaXR5ID0gb3B0aW9ucy5iYWNrZ3JvdW5kT3BhY2l0eSA9PT0gdW5kZWZpbmVkID9cclxuXHRcdFx0XHQwLjcgOiBvcHRpb25zLmJhY2tncm91bmRPcGFjaXR5O1xyXG5cdFx0XHR2YXIgbW9kYWxDbG9zZU9uSW5wdXQgPSBvcHRpb25zLm1vZGFsQ2xvc2VPbklucHV0IHx8IGZhbHNlO1xyXG5cdFx0XHR2YXIgbW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2sgPSBvcHRpb25zLm1vZGFsQmFja2dyb3VuZENhbGxiYWNrIHx8IGZhbHNlO1xyXG5cdFx0XHR2YXIgdkNlbnRlciA9IG9wdGlvbnMudkNlbnRlciB8fCB0cnVlO1xyXG5cdFx0XHR2YXIgaENlbnRlciA9IG9wdGlvbnMuaENlbnRlciB8fCB0cnVlO1xyXG5cdFx0XHR2YXIgaXRlbXNBcnIgPSBvcHRpb25zLml0ZW1zQXJyIHx8IFtdO1xyXG5cdFx0XHR2YXIgZml4ZWRUb0NhbWVyYSA9IG9wdGlvbnMuZml4ZWRUb0NhbWVyYSB8fCBmYWxzZTtcclxuXHJcblx0XHRcdHZhciBtb2RhbDtcclxuXHRcdFx0dmFyIG1vZGFsR3JvdXAgPSBnYW1lLmFkZC5ncm91cCgpO1xyXG5cdFx0XHRpZiAoZml4ZWRUb0NhbWVyYSA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdG1vZGFsR3JvdXAuZml4ZWRUb0NhbWVyYSA9IHRydWU7XHJcblx0XHRcdFx0bW9kYWxHcm91cC5jYW1lcmFPZmZzZXQueCA9IDA7XHJcblx0XHRcdFx0bW9kYWxHcm91cC5jYW1lcmFPZmZzZXQueSA9IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChpbmNsdWRlQmFja2dyb3VuZCA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdG1vZGFsID0gZ2FtZS5hZGQuZ3JhcGhpY3MoZ2FtZS53aWR0aCwgZ2FtZS5oZWlnaHQpO1xyXG5cdFx0XHRcdG1vZGFsLmJlZ2luRmlsbChiYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRPcGFjaXR5KTtcclxuXHRcdFx0XHRtb2RhbC54ID0gMDtcclxuXHRcdFx0XHRtb2RhbC55ID0gMDtcclxuXHJcblx0XHRcdFx0bW9kYWwuZHJhd1JlY3QoMCwgMCwgZ2FtZS53aWR0aCwgZ2FtZS5oZWlnaHQpO1xyXG5cclxuXHRcdFx0XHRpZiAobW9kYWxDbG9zZU9uSW5wdXQgPT09IHRydWUpIHtcclxuXHJcblx0XHRcdFx0XHR2YXIgaW5uZXJNb2RhbCA9IGdhbWUuYWRkLnNwcml0ZSgwLCAwKTtcclxuXHRcdFx0XHRcdGlubmVyTW9kYWwuaW5wdXRFbmFibGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGlubmVyTW9kYWwud2lkdGggPSBnYW1lLndpZHRoO1xyXG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5oZWlnaHQgPSBnYW1lLmhlaWdodDtcclxuXHRcdFx0XHRcdGlubmVyTW9kYWwudHlwZSA9IHR5cGU7XHJcblx0XHRcdFx0XHRpbm5lck1vZGFsLmlucHV0LnByaW9yaXR5SUQgPSAwO1xyXG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5ldmVudHMub25JbnB1dERvd24uYWRkKGZ1bmN0aW9uIChlLCBwb2ludGVyKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuaGlkZU1vZGFsKGUudHlwZSk7XHJcblx0XHRcdFx0XHR9LCBfdGhpcywgMik7XHJcblxyXG5cdFx0XHRcdFx0bW9kYWxHcm91cC5hZGQoaW5uZXJNb2RhbCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRtb2RhbEJhY2tncm91bmRDYWxsYmFjayA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2spIHtcclxuXHRcdFx0XHR2YXIgaW5uZXJNb2RhbCA9IGdhbWUuYWRkLnNwcml0ZSgwLCAwKTtcclxuXHRcdFx0XHRpbm5lck1vZGFsLmlucHV0RW5hYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0aW5uZXJNb2RhbC53aWR0aCA9IGdhbWUud2lkdGg7XHJcblx0XHRcdFx0aW5uZXJNb2RhbC5oZWlnaHQgPSBnYW1lLmhlaWdodDtcclxuXHRcdFx0XHRpbm5lck1vZGFsLnR5cGUgPSB0eXBlO1xyXG5cdFx0XHRcdGlubmVyTW9kYWwuaW5wdXQucHJpb3JpdHlJRCA9IDA7XHJcblxyXG5cdFx0XHRcdG1vZGFsR3JvdXAuYWRkKGlubmVyTW9kYWwpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoaW5jbHVkZUJhY2tncm91bmQpIHtcclxuXHRcdFx0XHRtb2RhbEdyb3VwLmFkZChtb2RhbCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBtb2RhbExhYmVsO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zQXJyLmxlbmd0aDsgaSArPSAxKSB7XHJcblx0XHRcdFx0dmFyIGl0ZW0gPSBpdGVtc0FycltpXTtcclxuXHRcdFx0XHR2YXIgaXRlbVR5cGUgPSBpdGVtLnR5cGUgfHwgJ3RleHQnO1xyXG5cdFx0XHRcdHZhciBpdGVtQ29sb3IgPSBpdGVtLmNvbG9yIHx8IDB4MDAwMDAwO1xyXG5cdFx0XHRcdHZhciBpdGVtRm9udGZhbWlseSA9IGl0ZW0uZm9udEZhbWlseSB8fCAnQXJpYWwnO1xyXG5cdFx0XHRcdHZhciBpdGVtRm9udFNpemUgPSBpdGVtLmZvbnRTaXplIHx8IDMyO1xyXG5cdFx0XHRcdHZhciBpdGVtU3Ryb2tlID0gaXRlbS5zdHJva2UgfHwgJzB4MDAwMDAwJztcclxuXHRcdFx0XHR2YXIgaXRlbVN0cm9rZVRoaWNrbmVzcyA9IGl0ZW0uc3Ryb2tlVGhpY2tuZXNzIHx8IDA7XHJcblx0XHRcdFx0dmFyIGl0ZW1BbGlnbiA9IGl0ZW0uYWxpZ24gfHwgJ2NlbnRlcic7XHJcblx0XHRcdFx0dmFyIG9mZnNldFggPSBpdGVtLm9mZnNldFggfHwgMDtcclxuXHRcdFx0XHR2YXIgb2Zmc2V0WSA9IGl0ZW0ub2Zmc2V0WSB8fCAwO1xyXG5cdFx0XHRcdHZhciBjb250ZW50U2NhbGUgPSBpdGVtLmNvbnRlbnRTY2FsZSB8fCAxO1xyXG5cdFx0XHRcdHZhciBjb250ZW50ID0gaXRlbS5jb250ZW50IHx8IFwiXCI7XHJcblx0XHRcdFx0dmFyIGNlbnRlclggPSBnYW1lLndpZHRoIC8gMjtcclxuXHRcdFx0XHR2YXIgY2VudGVyWSA9IGdhbWUuaGVpZ2h0IC8gMjtcclxuXHRcdFx0XHR2YXIgY2FsbGJhY2sgPSBpdGVtLmNhbGxiYWNrIHx8IGZhbHNlO1xyXG5cdFx0XHRcdHZhciB0ZXh0QWxpZ24gPSBpdGVtLnRleHRBbGlnbiB8fCBcImxlZnRcIjtcclxuXHRcdFx0XHR2YXIgYXRsYXNQYXJlbnQgPSBpdGVtLmF0bGFzUGFyZW50IHx8IFwiXCI7XHJcblx0XHRcdFx0dmFyIGJ1dHRvbkhvdmVyID0gaXRlbS5idXR0b25Ib3ZlciB8fCBjb250ZW50O1xyXG5cdFx0XHRcdHZhciBidXR0b25BY3RpdmUgPSBpdGVtLmJ1dHRvbkFjdGl2ZSB8fCBjb250ZW50O1xyXG5cdFx0XHRcdHZhciBncmFwaGljQ29sb3IgPSBpdGVtLmdyYXBoaWNDb2xvciB8fCAweGZmZmZmZjtcclxuXHRcdFx0XHR2YXIgZ3JhcGhpY09wYWNpdHkgPSBpdGVtLmdyYXBoaWNPcGFjaXR5IHx8IDE7XHJcblx0XHRcdFx0dmFyIGdyYXBoaWNXID0gaXRlbS5ncmFwaGljV2lkdGggfHwgMjAwO1xyXG5cdFx0XHRcdHZhciBncmFwaGljSCA9IGl0ZW0uZ3JhcGhpY0hlaWdodCB8fCAyMDA7XHJcblx0XHRcdFx0dmFyIGdyYXBoaWNSYWRpdXMgPSBpdGVtLmdyYXBoaWNSYWRpdXMgfHwgMDtcclxuXHRcdFx0XHR2YXIgbG9ja1Bvc2l0aW9uID0gaXRlbS5sb2NrUG9zaXRpb24gfHwgZmFsc2U7XHJcblxyXG5cdFx0XHRcdHZhciBpdGVtQW5jaG9yID0gaXRlbS5hbmNob3IgfHwge3g6MCx5OjB9O1xyXG5cdFx0XHRcdHZhciBpdGVtQW5nbGUgPSBpdGVtLmFuZ2xlIHx8IDA7XHJcblx0XHRcdFx0dmFyIGl0ZW1YID0gaXRlbS54IHx8IDA7XHJcblx0XHRcdFx0dmFyIGl0ZW1ZID0gaXRlbS55IHx8IDA7XHJcblx0XHRcdFx0dmFyIGltYWdlRnJhbWUgPSBpdGVtLmZyYW1lIHx8IG51bGw7XHJcblx0XHRcdFx0dmFyIHRpbGVTcHJpdGVXaWR0aCA9IGl0ZW0udGlsZVNwcml0ZVdpZHRoIHx8IGdhbWUud2lkdGg7XHJcblx0XHRcdFx0dmFyIHRpbGVTcHJpdGVIZWlnaHQgPSBpdGVtLnRpbGVTcHJpdGVIZWlnaHQgfHwgZ2FtZS5oZWlnaHQ7XHJcblxyXG5cdFx0XHRcdG1vZGFsTGFiZWwgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRpZiAoaXRlbVR5cGUgPT09IFwidGV4dFwiIHx8IGl0ZW1UeXBlID09PSBcImJpdG1hcFRleHRcIikge1xyXG5cclxuXHRcdFx0XHRcdGlmIChpdGVtVHlwZSA9PT0gXCJ0ZXh0XCIpIHtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnRleHQoMCwgMCwgY29udGVudCwge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQ6IGl0ZW1Gb250U2l6ZSArICdweCAnICsgaXRlbUZvbnRmYW1pbHksXHJcblx0XHRcdFx0XHRcdFx0ZmlsbDogXCIjXCIgKyBTdHJpbmcoaXRlbUNvbG9yKS5yZXBsYWNlKFwiMHhcIiwgXCJcIiksXHJcblx0XHRcdFx0XHRcdFx0c3Ryb2tlOiBcIiNcIiArIFN0cmluZyhpdGVtU3Ryb2tlKS5yZXBsYWNlKFwiMHhcIiwgXCJcIiksXHJcblx0XHRcdFx0XHRcdFx0c3Ryb2tlVGhpY2tuZXNzOiBpdGVtU3Ryb2tlVGhpY2tuZXNzLFxyXG5cdFx0XHRcdFx0XHRcdGFsaWduOiBpdGVtQWxpZ25cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAndGV4dCc7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwudXBkYXRlKCk7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKG1vZGFsTGFiZWwud2lkdGggLyAyKSkgKyBvZmZzZXRYO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoKGdhbWUuaGVpZ2h0IC8gMikgLSAobW9kYWxMYWJlbC5oZWlnaHQgLyAyKSkgKyBvZmZzZXRZO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmJpdG1hcFRleHQoMCwgMCwgaXRlbUZvbnRmYW1pbHksIFN0cmluZyhjb250ZW50KSwgaXRlbUZvbnRTaXplKTtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdiaXRtYXBUZXh0JztcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5hbGlnbiA9IHRleHRBbGlnbjtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC51cGRhdGVUZXh0KCk7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKG1vZGFsTGFiZWwud2lkdGggLyAyKSkgKyBvZmZzZXRYO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtIChtb2RhbExhYmVsLmhlaWdodCAvIDIpKSArIG9mZnNldFk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiaW1hZ2VcIikge1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmltYWdlKDAsIDAsIGNvbnRlbnQpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ2ltYWdlJztcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcInRpbGVTcHJpdGVcIikge1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnRpbGVTcHJpdGUoaXRlbVgsIGl0ZW1ZLFxyXG5cdFx0XHRcdFx0XHR0aWxlU3ByaXRlV2lkdGgsIHRpbGVTcHJpdGVIZWlnaHQsIGNvbnRlbnQsIGltYWdlRnJhbWUpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmFuY2hvci5zZXRUbyhpdGVtQW5jaG9yLngsIGl0ZW1BbmNob3IueSk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmFuZ2xlID0gaXRlbUFuZ2xlO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICd0aWxlU3ByaXRlJztcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcInNwcml0ZVwiKSB7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuc3ByaXRlKDAsIDAsIGF0bGFzUGFyZW50LCBjb250ZW50KTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdzcHJpdGUnO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKChtb2RhbExhYmVsLmhlaWdodCkgLyAyKSkgKyBvZmZzZXRZO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiYnV0dG9uXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5idXR0b24oMCwgMCwgYXRsYXNQYXJlbnQsIGNhbGxiYWNrLFxyXG5cdFx0XHRcdFx0XHR0aGlzLCBidXR0b25Ib3ZlciwgY29udGVudCwgYnV0dG9uQWN0aXZlLCBjb250ZW50KTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdidXR0b24nO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKChtb2RhbExhYmVsLmhlaWdodCkgLyAyKSkgKyBvZmZzZXRZO1xyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcImdyYXBoaWNzXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5ncmFwaGljcyhncmFwaGljVywgZ3JhcGhpY0gpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5iZWdpbkZpbGwoZ3JhcGhpY0NvbG9yLCBncmFwaGljT3BhY2l0eSk7XHJcblx0XHRcdFx0XHRpZiAoZ3JhcGhpY1JhZGl1cyA8PSAwKSB7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuZHJhd1JlY3QoMCwgMCwgZ3JhcGhpY1csIGdyYXBoaWNIKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuZHJhd1JvdW5kZWRSZWN0KDAsIDAsIGdyYXBoaWNXLCBncmFwaGljSCwgZ3JhcGhpY1JhZGl1cyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmVuZEZpbGwoKTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG1vZGFsTGFiZWxbXCJfb2Zmc2V0WFwiXSA9IDA7XHJcblx0XHRcdFx0bW9kYWxMYWJlbFtcIl9vZmZzZXRZXCJdID0gMDtcclxuXHRcdFx0XHRtb2RhbExhYmVsW1wibG9ja1Bvc2l0aW9uXCJdID0gbG9ja1Bvc2l0aW9uO1xyXG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFggPSBvZmZzZXRYO1xyXG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFkgPSBvZmZzZXRZO1xyXG5cclxuXHJcblx0XHRcdFx0aWYgKGNhbGxiYWNrICE9PSBmYWxzZSAmJiBpdGVtVHlwZSAhPT0gXCJidXR0b25cIikge1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5waXhlbFBlcmZlY3RDbGljayA9IHRydWU7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnByaW9yaXR5SUQgPSAxMDtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuZXZlbnRzLm9uSW5wdXREb3duLmFkZChjYWxsYmFjaywgbW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoaXRlbVR5cGUgIT09IFwiYml0bWFwVGV4dFwiICYmIGl0ZW1UeXBlICE9PSBcImdyYXBoaWNzXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYnJpbmdUb1RvcCgpO1xyXG5cdFx0XHRcdFx0bW9kYWxHcm91cC5hZGQobW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmJyaW5nVG9Ub3AoKTtcclxuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYnJpbmdUb1RvcChtb2RhbExhYmVsKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bW9kYWxHcm91cC5hZGQobW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmJyaW5nVG9Ub3AobW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtb2RhbEdyb3VwLnZpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0gPSBtb2RhbEdyb3VwO1xyXG5cclxuXHRcdH0sXHJcblx0XHR1cGRhdGVNb2RhbFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIHR5cGUsIGluZGV4LCBpZCkge1xyXG5cdFx0XHR2YXIgaXRlbTtcclxuXHRcdFx0aWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgaW5kZXggIT09IG51bGwpIHtcclxuXHRcdFx0XHRpdGVtID0gZ2FtZS5tb2RhbHNbdHlwZV0uZ2V0Q2hpbGRBdChpbmRleCk7XHJcblx0XHRcdH0gZWxzZSBpZiAoaWQgIT09IHVuZGVmaW5lZCAmJiBpZCAhPT0gbnVsbCkge1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwidGV4dFwiKSB7XHJcblx0XHRcdFx0aXRlbS50ZXh0ID0gdmFsdWU7XHJcblx0XHRcdFx0aXRlbS51cGRhdGUoKTtcclxuXHRcdFx0XHRpZiAoaXRlbS5sb2NrUG9zaXRpb24gPT09IHRydWUpIHtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGl0ZW0ueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKGl0ZW0ud2lkdGggLyAyKSkgKyBpdGVtLl9vZmZzZXRYO1xyXG5cdFx0XHRcdFx0aXRlbS55ID0gKChnYW1lLmhlaWdodCAvIDIpIC0gKGl0ZW0uaGVpZ2h0IC8gMikpICsgaXRlbS5fb2Zmc2V0WTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoaXRlbS5jb250ZW50VHlwZSA9PT0gXCJiaXRtYXBUZXh0XCIpIHtcclxuXHRcdFx0XHRpdGVtLnRleHQgPSB2YWx1ZTtcclxuXHRcdFx0XHRpdGVtLnVwZGF0ZVRleHQoKTtcclxuXHRcdFx0XHRpZiAoaXRlbS5sb2NrUG9zaXRpb24gPT09IHRydWUpIHtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGl0ZW0ueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKGl0ZW0ud2lkdGggLyAyKSkgKyBpdGVtLl9vZmZzZXRYO1xyXG5cdFx0XHRcdFx0aXRlbS55ID0gKChnYW1lLmhlaWdodCAvIDIpIC0gKGl0ZW0uaGVpZ2h0IC8gMikpICsgaXRlbS5fb2Zmc2V0WTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoaXRlbS5jb250ZW50VHlwZSA9PT0gXCJpbWFnZVwiKSB7XHJcblx0XHRcdFx0aXRlbS5sb2FkVGV4dHVyZSh2YWx1ZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9LFxyXG5cdFx0Z2V0TW9kYWxJdGVtOiBmdW5jdGlvbiAodHlwZSwgaW5kZXgpIHtcclxuXHRcdFx0cmV0dXJuIGdhbWUubW9kYWxzW3R5cGVdLmdldENoaWxkQXQoaW5kZXgpO1xyXG5cdFx0fSxcclxuXHRcdHNob3dNb2RhbDogZnVuY3Rpb24gKHR5cGUpIHtcclxuXHRcdFx0Z2FtZS53b3JsZC5icmluZ1RvVG9wKGdhbWUubW9kYWxzW3R5cGVdKTtcclxuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0udmlzaWJsZSA9IHRydWU7XHJcblx0XHRcdC8vIHlvdSBjYW4gYWRkIGFuaW1hdGlvbiBoZXJlXHJcblx0XHR9LFxyXG5cdFx0aGlkZU1vZGFsOiBmdW5jdGlvbiAodHlwZSkge1xyXG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdC8vIHlvdSBjYW4gYWRkIGFuaW1hdGlvbiBoZXJlXHJcblx0XHR9LFxyXG5cdFx0ZGVzdHJveU1vZGFsOiBmdW5jdGlvbiAodHlwZSkge1xyXG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS5kZXN0cm95KCk7XHJcblx0XHRcdGRlbGV0ZSBnYW1lLm1vZGFsc1t0eXBlXTtcclxuXHRcdH1cclxuXHR9O1xyXG59O1xyXG4iLCJcclxuY2xhc3MgQ2xpZW50IHtcclxuICAgIFxyXG5cdGNvbnN0cnVjdG9yKHNlcHRpa29uKSB7XHJcbiAgICAgICAgXHJcblx0XHR0aGlzLnNvY2tldCA9IGlvLmNvbm5lY3QoKTtcclxuICAgICAgICB0aGlzLnNlcHRpa29uID0gdGhpcy5zb2NrZXQuc2VwdGlrb24gPSBzZXB0aWtvbjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNvY2tldC5vbignbG9nJywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMT0c6ICcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ3JlcXVlc3QnLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JFUVVFU1Q6ICcpO1xyXG4gICAgICAgICAgICBzd2l0Y2goZGF0YS5kZXRhaWxzLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJhc2tTdGFydFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24uc2hvd01vZGFsKCdhc2tTdGFydCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2FjdGlvbicsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdBQ1RJT046ICcpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mKHRoaXMuc2VwdGlrb25bZGF0YS5jYWxsYmFja10pID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb25bZGF0YS5jYWxsYmFja10oZGF0YS5kZXRhaWxzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IG5vIG1ldGhvZCBmb3VuZCBjYWxsZWQgc2VwdGlrb24uXCIgKyBkYXRhLmNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cdH1cclxuXHJcblx0YXNrTmV3UGxheWVyKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcHRVVUlEJykpO1xyXG5cdFx0dGhpcy5zb2NrZXQuZW1pdCgnbmV3UGxheWVyJywge3V1aWQ6bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcHRVVUlEJyl9KTtcclxuXHR9XHJcbiAgICBcclxuICAgIHNlbmRJbnB1dChwYXlsb2FkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbmRpbmcgaW5wdXQnKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdpbnB1dCcsIHBheWxvYWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnQ7XHJcbiIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXHJcblxyXG5jbGFzcyBDbG9uZSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUsIHRlYW0pIHtcclxuICAgIHN1cGVyKGdhbWUsIHgsIHksICdjbG9uZScsIGZyYW1lKTtcclxuICAgICAgICBcclxuICAgIC8vc2V0dXAgcGh5c2ljcyBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNjUpO1xyXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZUJvZHkodGhpcyk7XHJcbiAgICAvL3RoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xyXG5cclxuICAgIC8vc2V0IHNpemVcclxuICAgIHRoaXMud2lkdGggPSAyNztcclxuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XHJcbiAgICBcclxuICAgIC8vc2V0IHJvdGF0aW9uICh0aGlzIHNob3VsZCBiZSBiYXNlZCBvbiB0aGUgYmFzZSB0aGlzIGNsb25lIG9jY3VwaWVzKVxyXG4gICAgdGhpcy5hbmdsZSA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFuZ2xlICogLTE7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gdGhpcy5nYW1lLnNlcHRpa29uLnBpeGVsc1RvVGlsZSh0aGlzLngsIHRoaXMueSk7XHJcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gdHJ1ZTtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIHJlbW92ZSgpIHtcclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgaGlnaGxpZ2h0T24oKSB7XHJcbiAgICB0aGlzLnRpbnQgPSAweEZGNTUwMDtcclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS5hbHBoYSA9IDE7XHJcbiAgfVxyXG4gIFxyXG4gIGhpZ2hsaWdodE9mZigpIHtcclxuICAgIHRoaXMudGludCA9IDB4ZmZmZmZmO1xyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLmFscGhhID0gMDtcclxuICB9XHJcbiAgXHJcbiAgZ2V0TGVnYWxNb3ZlcygpIHtcclxuICAgIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5waXhlbHNUb1RpbGUodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgdmFyIGN1cnJlbnRMZWdhbE1vdmVzID0gdGhpcy5nYW1lLnNlcHRpa29uLmdldExlZ2FsTW92ZXModGhpcy5nYW1lLmdsb2JhbC5sYXN0RGljZVJvbGwsIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyk7XHJcbiAgICB2YXIgbGVnYWxUaWxlc0FycmF5ID0gW107XHJcbiAgICBcclxuICAgIFxyXG4gICAgZm9yICh2YXIgdGlsZSBpbiBjdXJyZW50TGVnYWxNb3Zlcykge1xyXG4gICAgICAgIGxlZ2FsVGlsZXNBcnJheS5wdXNoKHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbY3VycmVudExlZ2FsTW92ZXNbdGlsZV0ueF1bY3VycmVudExlZ2FsTW92ZXNbdGlsZV0ueV0pO1xyXG4gICAgICAgIC8vbGVnYWxUaWxlc0FycmF5W2xlZ2FsVGlsZXNBcnJheS5sZW5ndGgtMV0uYWxwaGEgPSAwLjU7XHJcbiAgICAgICAgLy9sZWdhbFRpbGVzQXJyYXlbbGVnYWxUaWxlc0FycmF5Lmxlbmd0aC0xXS5sZWdhbEZvciA9IHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBsZWdhbFRpbGVzQXJyYXk7XHJcbiAgfVxyXG4gIFxyXG4gIG1vdmUoY29vcmRpbmF0ZXMpIHtcclxuICBcclxuICAgIC8vIENsZWFyIFwibGVnYWxGb3JcIlxyXG4gICAgZm9yICh2YXIgdGlsZSBpbiB0aGlzLmxlZ2FsVGlsZXNBcnJheSkge1xyXG4gICAgICAgIHRoaXMubGVnYWxUaWxlc0FycmF5W3RpbGVdLmFscGhhID0gMDtcclxuICAgICAgICBkZWxldGUgdGhpcy5sZWdhbFRpbGVzQXJyYXlbdGlsZV0ubGVnYWxGb3I7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIE1vdmUgdG8gbmV3IGhvbWVcclxuICAgIC8vIE5lZWQgdG8gYWRkIGEgY2hlY2sgZm9yIGFybWVkIG9wcG9uZW50cyAoYmlvZHJvbmVzL2VzcGlvbmFnZWQgY2xvbmVzL2Nsb25lcyBpbiBlbmVteSBiYXNlLCBldGMuKVxyXG4gICAgdmFyIHBvaW50cyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlVG9QaXhlbHMoY29vcmRpbmF0ZXMueCwgY29vcmRpbmF0ZXMueSk7XHJcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gZmFsc2U7XHJcbiAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLnkgLSBwb2ludHMueSArIHRoaXMueCAtIHBvaW50cy54KS50b0ZpeGVkKDEpO1xyXG4gICAgXHJcbiAgICAvLyBVcGRhdGUgdGhlIHBlcnNvbm5lbCBjb29yZGluYXRlIHByb3BlcnR5XHJcbiAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSB0cnVlO1xyXG4gICAgXHJcbiAgICAvLyBXYWl0IGZvciBhbmltYXRpb24gdG8gY29tcGxldGUsIHRoZW4gcHJvY2VzcyB0aWxlIHRyaWdnZXJcclxuICAgIHZhciB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcykudG8oIHt4OnBvaW50cy54LCB5OnBvaW50cy55fSwgKGRpc3RhbmNlKjExKSwgUGhhc2VyLkVhc2luZy5DdWJpYy5PdXQsIHRydWUpO1xyXG4gICAgdHdlZW4ub25Db21wbGV0ZS5hZGQodGhpcy5nYW1lLnNlcHRpa29uLnRyaWdnZXJUaWxlLCB0aGlzLmdhbWUuc2VwdGlrb24pO1xyXG4gICAgXHJcbiAgICAvLyBDbGVhciB0aGlzLmN1cnJlbnRMZWdhbE1vdmVzXHJcbiAgICBkZWxldGUgdGhpcy5sZWdhbFRpbGVzQXJyYXk7XHJcbiAgICBkZWxldGUgdGhpcy5jdXJyZW50TGVnYWxNb3ZlczsgICAgXHJcbiAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsb25lO1xyXG4iLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxyXG5jbGFzcyBDcm9zc2hhaXJzIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2Nyb3NzaGFpcnMnLCBmcmFtZSk7XHJcblxyXG4gICAgLy9zZXQgc2l6ZVxyXG4gICAgdGhpcy53aWR0aCA9IDM1OyBcclxuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XHJcblxyXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCl7XHJcbiAgICB0aGlzLnggPSB0aGlzLmdhbWUuaW5wdXQubW91c2VQb2ludGVyLng7XHJcbiAgICB0aGlzLnkgPSB0aGlzLmdhbWUuaW5wdXQubW91c2VQb2ludGVyLnk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3Jvc3NoYWlycztcclxuIiwiLy9Eb2N1bWVudGF0aW9uIGZvciBQaGFzZXIncyAoMi42LjIpIHNwcml0ZXM6OiBwaGFzZXIuaW8vZG9jcy8yLjYuMi9QaGFzZXIuU3ByaXRlLmh0bWxcclxuY2xhc3MgRGljZSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUpIHsgIFxyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2RpY2UnLCBmcmFtZSk7XHJcblxyXG4gICAgLy9zZXR1cCBwaHlzaWNzIHByb3BlcnRpZXNcclxuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcclxuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGVCb2R5KHRoaXMpO1xyXG4gICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XHJcblxyXG4gICAgLy9zZXQgY2xpY2sgZXZlbnRcclxuICAgIHRoaXMuaW5wdXRFbmFibGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuZXZlbnRzLm9uSW5wdXREb3duLmFkZCh0aGlzLmNsaWNrZWQsIHRoaXMpO1xyXG5cclxuICAgIC8vc2V0IHNpemVcclxuICAgIHRoaXMud2lkdGggPSA1MDtcclxuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XHJcbiAgICBcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2lkbGluZycsbnVsbCw1LHRydWUpO1xyXG4gICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ2lkbGluZycpO1xyXG5cclxuICB9XHJcblxyXG4gIGNsaWNrZWQgKCkge1xyXG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAnZGljZUNsaWNrZWQnfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGljZTtcclxuIiwiY2xhc3MgTWFzdGVyIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKCkgeyBcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hc3RlcjsiLCJjbGFzcyBPcmRuYW5jZSB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRuYW5jZTsiLCJjbGFzcyBQZXJzb25uZWwgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUpIHtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAnY2xvbmUnLCBmcmFtZSk7ICBcclxuICAgIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29ubmVsOyIsImNsYXNzIFJlc291cmNlcyB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICB0aGlzLnJlc291cmNlRW51bSA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgIE9YWUdFTjogMCxcclxuICAgICAgICBST0NLRVQ6IDEsXHJcbiAgICAgICAgTUVUQUw6IDIsXHJcbiAgICAgICAgRU5FUkdZOiAzLFxyXG4gICAgICAgIEJJT01BU1M6IDQsXHJcbiAgICAgICAgQklPRFJPTkU6IDUsXHJcbiAgICAgICAgVVJBTklVTTogNlxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnJlc291cmNlcyA9IHt9O1xyXG4gICAgZm9yKHZhciB0eXBlIGluIHRoaXMucmVzb3VyY2VFbnVtKSB7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZXNbdGhpcy5yZXNvdXJjZUVudW1bdHlwZV1dID0gNTtcclxuICAgIH07XHJcbiAgfVxyXG4gIFxyXG4gIGNoZWNrKHR5cGUsIGNvdW50KSB7XHJcbiAgICBpZih0aGlzLnJlc291cmNlc1t0aGlzLnJlc291cmNlRW51bVt0eXBlXV0gPiBjb3VudClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgXHJcbiAgZ2V0Q291bnQodHlwZSkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzW3R5cGVdO1xyXG4gIH1cclxuICAgIFxyXG4gIGFkZCh0eXBlLCBjb3VudCkge1xyXG4gIH1cclxuICBcclxuICByZW1vdmUodHlwZSwgY291bnQpIHtcclxuICAgIHRoaXMucmVzb3VyY2VzW3R5cGVdIC09IGNvdW50O1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VzOyIsImltcG9ydCBDbG9uZSBmcm9tICcuLi9wcmVmYWJzL2Nsb25lJztcclxuXHJcbmNsYXNzIFNlcHRpa29uIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHsgXHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgXHJcbiAgICB0aGlzLnBsYXllciA9IHtcclxuICAgICAgICBpZDogMFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgdGhpcy5zaG93blRpbGVzID0gW107XHJcbiAgICB0aGlzLnRpbGVBcnJheSA9IFtdO1xyXG4gICAgdGhpcy5iZ1JhdGlvID0gMDtcclxuICAgIHRoaXMud29ybGRSYXRpbyA9IDA7XHJcbiAgICB0aGlzLnR1cm5TdGF0ZUVudW0gPSBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICBTVEFSVDogMCxcclxuICAgICAgICBTRUxFQ1RfQ0xPTkU6IDEsIFxyXG4gICAgICAgIE1PVkVfQ0xPTkU6IDIsXHJcbiAgICAgICAgU0VMRUNUX0dVTk5FUjogMyxcclxuICAgICAgICBTRUxFQ1RfQUNUSU9OX09SREVSOiA0LCBcclxuICAgICAgICBBQ1RJT046IDUsXHJcbiAgICAgICAgRU5EOiA2XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGlyZWN0aW9uRW51bSA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgIE5PUlRIOjEsXHJcbiAgICAgICAgRUFTVDoyLFxyXG4gICAgICAgIFNPVVRIOjQsXHJcbiAgICAgICAgV0VTVDo4XHJcbiAgICB9KTtcclxuICAgIHRoaXMudHVyblN0YXRlID0gMDtcclxuXHJcbiAgfVxyXG5cclxuICAgIHNob3dNb2RhbCh0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLm1vZGFsLnNob3dNb2RhbCh0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgXHJcbiAgZGljZVJvbGxlZChkZXRhaWxzKSB7XHJcbiAgICB0aGlzLmdhbWUuZ2xvYmFsLmxhc3REaWNlUm9sbCA9IGRldGFpbHMudmFsdWU7XHJcbiAgfVxyXG4gIFxyXG4gIGFkZENsb25lKGRldGFpbHMpIHtcclxuICAgIHZhciBwb2ludCA9IHRoaXMudGlsZVRvUGl4ZWxzKGRldGFpbHMueCwgZGV0YWlscy55KTtcclxuICAgIHZhciBjbG9uZSA9IG5ldyBDbG9uZSh0aGlzLmdhbWUsIHBvaW50LngsIHBvaW50LnkpO1xyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKGNsb25lKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUFsbFBlcnNvbm5lbCgpe1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdhbWUuYm9hcmRHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNoaWxkcmVuW2ldLmNvbnN0cnVjdG9yID09IENsb25lKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBpLS07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICB1cGRhdGVQbGF5ZXIoZGV0YWlscykge1xyXG4gICAgZm9yICh2YXIgaSBpbiBkZXRhaWxzKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJbaV0gPSBkZXRhaWxzW2ldO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBjcmVhdGVUaWxlQXJyYXkoY29sdW1ucywgcm93cywgcG9pbnQpIHtcclxuICAgIHRoaXMudGlsZURldGFpbCA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRKU09OKCd0aWxlRGV0YWlsJyk7XHJcblxyXG4gICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcyA9IHt4OjAsIHk6MH07XHJcblxyXG4gICAgXHJcbiAgICB0aGlzLm1hcmdpbkJvdHRvbSA9IHRoaXMubWFyZ2luVG9wID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAuaGVpZ2h0LzE3LjQ3NTtcclxuICAgIHRoaXMubWFyZ2luTGVmdCA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoLzI0O1xyXG4gICAgdGhpcy5tYXJnaW5SaWdodCA9ICB0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aC8yNi4zMTU4O1xyXG4gICAgdGhpcy50aWxlV2lkdGggPSB0aGlzLnRpbGVIZWlnaHQgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aC8zOTtcclxuICAgIHRoaXMucGFkZGluZyA9ICh0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aCAtICh0aGlzLm1hcmdpbkxlZnQgKyB0aGlzLm1hcmdpblJpZ2h0KSAtICh0aGlzLnRpbGVXaWR0aCAqIDMxKSkvMzA7XHJcbiAgICAgICAgXHJcbiAgICAvL3RoaXMudGlsZVdpZHRoID0gMjU7Ly8odGhpcy5iYWNrZ3JvdW5kV2lkdGggLSAoKHRoaXMubWFyZ2luTGVmdCArIHRoaXMubWFyZ2luUmlnaHQpICsgKHRoaXMucGFkZGluZyAqIChjb2x1bW5zIC0gMSkpKSkgLyBjb2x1bW5zO1xyXG4gICAgLy90aGlzLnRpbGVIZWlnaHQgPSAyNTsvLyh0aGlzLmJhY2tncm91bmRIZWlnaHQgLSAoKHRoaXMubWFyZ2luVG9wICsgdGhpcy5tYXJnaW5Cb3R0b20pICsgKHRoaXMucGFkZGluZyAqIChyb3dzIC0gMSkpKSkgLyByb3dzO1xyXG4gICAgICAgIFxyXG4gICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy54ID0gcG9pbnQueCArIHRoaXMubWFyZ2luTGVmdDtcclxuICAgIHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMueSA9IHBvaW50LnkgKyB0aGlzLm1hcmdpblRvcDtcclxuICAgIFxyXG4gICAgdmFyIGdyYXBoaWNzID0gdGhpcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcclxuICAgIC8vZ3JhcGhpY3MubGluZVN0eWxlKDQsIDB4ZmZkOTAwLCAxKTtcclxuICAgIGdyYXBoaWNzLmJlZ2luRmlsbCgweGZmZDkwMCwgMSk7XHJcbiAgICBncmFwaGljcy5kcmF3UmVjdCgxMDAsIDEwMCwgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZUhlaWdodCk7XHJcbiAgICBcclxuICAgIGZvciAodmFyIGNvbHVtbiA9IDA7IGNvbHVtbiA8IGNvbHVtbnM7IGNvbHVtbisrKSB7XHJcbiAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgcm93czsgcm93KyspIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciB4ID0gdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy54ICsgKHRoaXMudGlsZVdpZHRoICogY29sdW1uKSArICh0aGlzLnBhZGRpbmcgKiBjb2x1bW4gLSAxKTtcclxuICAgICAgICAgICAgdmFyIHkgPSB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnkgKyAodGhpcy50aWxlSGVpZ2h0ICogcm93KSArICh0aGlzLnBhZGRpbmcgKiByb3cgLSAxKTtcclxuICAgICAgICAgICAgZ3JhcGhpY3MuZ2VuZXJhdGVUZXh0dXJlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgY3VycmVudFRpbGUgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh4LCB5LCBncmFwaGljcy5nZW5lcmF0ZVRleHR1cmUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFkZChjdXJyZW50VGlsZSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlLmFscGhhID0gMDsgLy8gMC4yNTtcclxuICAgICAgICAgICAgY3VycmVudFRpbGUuaW5wdXRFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY3VycmVudFRpbGUuZXZlbnRzLm9uSW5wdXREb3duLmFkZCh0aGlzLnRpbGVDbGlja2VkLCB0aGlzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy50aWxlQXJyYXlbY29sdW1uXSA9PSAndW5kZWZpbmVkJykgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjb2x1bW5dID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NvbHVtbl1bcm93XSA9IGN1cnJlbnRUaWxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZ3JhcGhpY3MuZGVzdHJveSgpO1xyXG4gICAgXHJcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy50aWxlRGV0YWlsKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRpbGVEZXRhaWwuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMudGlsZURldGFpbFtrZXldO1xyXG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIC8vIHNraXAgbG9vcCBpZiB0aGUgcHJvcGVydHkgaXMgZnJvbSBwcm90b3R5cGVcclxuICAgICAgICAgICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgbG9jYXRpb25Db3VudCA9IG9ialtwcm9wXS5sb2NhdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IoIHZhciBpID0gMDsgaSA8IGxvY2F0aW9uQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgY29vcmRzID0gb2JqW3Byb3BdLmxvY2F0aW9uc1tpXS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9IGNvb3Jkc1swXTtcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gY29vcmRzWzFdO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlRGFtYWdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZU9jY3VwaWVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlWCA9IHg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlWSA9IHk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlVHlwZSA9IG9ialtwcm9wXS50eXBlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy50aWxlQXJyYXlbeF1beV0gIT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZU5hbWUgPSBvYmpbcHJvcF0ubmFtZTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4ICsgXCI6XCIgKyB5ICsgXCIgbm90IGZvdW5kIVwiKTtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW3Byb3BdLnByb3BlcnRpZXMgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XVsndGlsZVByb3BlcnRpZXMnXSA9IG9ialtwcm9wXS5wcm9wZXJ0aWVzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfX1cclxuXHJcbiAgcGl4ZWxzVG9UaWxlKHgsIHkpIHtcclxuICAgIHZhciB4VGlsZSA9IDA7XHJcbiAgICB2YXIgeVRpbGUgPSAwO1xyXG4gICAgXHJcbiAgICBmb3IgKHZhciBjb2wgaW4gdGhpcy50aWxlQXJyYXkpIHtcclxuICAgICAgICBmb3IgKHZhciByb3cgaW4gdGhpcy50aWxlQXJyYXlbY29sXSkge1xyXG4gICAgICAgICAgICB2YXIgb2JqID0gdGhpcy50aWxlQXJyYXlbY29sXVtyb3ddXHJcbiAgICAgICAgICAgIGlmKHggPiBvYmoueCAmJiB4IDwgb2JqLnggKyBvYmoud2lkdGgpXHJcbiAgICAgICAgICAgICAgICB4VGlsZSA9IHBhcnNlSW50KGNvbCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoeSA+IG9iai55ICYmIHkgPCBvYmoueSArIG9iai5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICB5VGlsZSA9IHBhcnNlSW50KHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHt4OnhUaWxlLCB5OnlUaWxlfTtcclxuICB9XHJcbiAgXHJcbiAgdGlsZVRvUGl4ZWxzKHgsIHkpIHtcclxuICAgIHZhciB0aWxlT2JqID0gdGhpcy50aWxlQXJyYXlbeF1beV07XHJcbiAgICByZXR1cm4ge3g6dGlsZU9iai54ICsgdGlsZU9iai53aWR0aC8yLCB5OnRpbGVPYmoueSArIHRpbGVPYmouaGVpZ2h0LzJ9O1xyXG4gIH1cclxuICBcclxuICB0aWxlQ2xpY2tlZChvYmopIHtcclxuICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ3RpbGVDbGlja2VkJywgeDpwYXJzZUludChvYmoudGlsZVgpLCB5OnBhcnNlSW50KG9iai50aWxlWSl9KTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgXHJcbiAgdHJpZ2dlclRpbGUoY2FsbGVyKSB7XHJcbiAgXHJcbiAgICB2YXIgdGlsZSA9IHRoaXMudGlsZUFycmF5W2NhbGxlci5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW2NhbGxlci5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldO1xyXG4gICAgY2FsbGVyLmlzR3VubmVyID0gZmFsc2U7XHJcbiAgICB2YXIgcHJvcHMgPSB0aWxlLnRpbGVQcm9wZXJ0aWVzO1xyXG4gICAgXHJcbiAgICBzd2l0Y2godGlsZS50aWxlVHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ3N1cmZhY2UnOiBcclxuICAgICAgICAgICAgY2FsbGVyLmlzR3VubmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hUdXJuKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlICdiYXR0bGUnOlxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3BzLnJlc291cmNlQ29zdENvdW50ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDQU4gVEhJUyBURUFNIEFGRk9SRCBUSEUgQ09TVD9cclxuICAgICAgICAgICAgICAgIC8vIEVYQ0hBTkdFIFJFU09VUkNFUyAvLyBQQVkgVVAhIVxyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBhdmFpbGFibGUgcmVzb3VyY2UgY291bnQgYW5kIHByZXBhcmUgdG8gb2ZmZXIgXCJndW5uZXJcIiBjbG9uZXMgZm9yIHNlbGVjdGlvbi5cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJJcyB0aGlzIHJlc291cmNlIGF2YWlsYWJsZT9cIik7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBUeXBlcyBvZiBiYXR0bGUgdGlsZXMgd2l0aCBhIEZJUkUgYWN0aW9uOlxyXG4gICAgICAgICAgICAgICAgLy8gIC0gU2F0ZWxsaXRlOiBndW5uZXI6dHJ1ZSwgcHJvamVjdGlsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy8gIC0gVGhlcm1pdGU6IGd1bm5lcjp0cnVlLCBwcm9qZWN0aWxlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgLy8gIC0gU2hpZWxkOiBndW5uZXI6dHJ1ZSwgcHJvamVjdGlsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy8gIC0gQmlvZHJvbmU6IGd1bm5lcjp0cnVlLCBwcm9qZWN0aWxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAvLyAgLSBMYXNlcjogZ3VubmVyOnRydWUsIHByb2plY3RpbGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAvLyAgLSBSb2NrZXQ6IGd1bm5lcjp0cnVlLCBwcm9qZWN0aWxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aWxlLnRpbGVOYW1lKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubG9jYWxUZWFtLm9mZmVyR3VubmVycygpID09IGZhbHNlICYmICh0aWxlLnRpbGVOYW1lID09IFwic2F0ZWxsaXRlXCIgfHwgdGlsZS50aWxlTmFtZSA9PSBcInRoZXJtaXRlXCIgfHwgdGlsZS50aWxlTmFtZSA9PSBcInNoaWVsZFwiIHx8IHRpbGUudGlsZU5hbWUgPT0gXCJiaW9kcm9uZVwiIHx8IHRpbGUudGlsZU5hbWUgPT0gXCJsYXNlclwiIHx8IHRpbGUudGlsZU5hbWUgPT0gXCJyb2NrZXRcIiApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5pc2hUdXJuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubG9jYWxUZWFtLmNoZWNrUmVjKHRoaXMubG9jYWxUZWFtLnJlY0VudW1bcHJvcHMucmVzb3VyY2VDb3N0VHlwZS50b1VwcGVyQ2FzZSgpXSwgcHJvcHMucmVzb3VyY2VDb3N0Q291bnQpKTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMubG9jYWxUZWFtLmNoZWNrUmVjKHRoaXMubG9jYWxUZWFtLnJlY0VudW1bcHJvcHMucmVzb3VyY2VDb3N0VHlwZS50b1VwcGVyQ2FzZSgpXSwgcHJvcHMucmVzb3VyY2VDb3N0Q291bnQpID09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxUZWFtLnJlbW92ZVJlYyh0aGlzLmxvY2FsVGVhbS5yZWNFbnVtW3Byb3BzLnJlc291cmNlQ29zdFR5cGUudG9VcHBlckNhc2UoKV0sIHByb3BzLnJlc291cmNlQ29zdENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTmV3IGNvdW50IG9mIFwiICsgcHJvcHMucmVzb3VyY2VDb3N0VHlwZSArIFwiIGlzIFwiICsgdGhpcy5sb2NhbFRlYW0uZ2V0UmVjQ291bnQodGhpcy5sb2NhbFRlYW0ucmVjRW51bVtwcm9wcy5yZXNvdXJjZUNvc3RUeXBlLnRvVXBwZXJDYXNlKCldKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5sb2NhbFRlYW0ub2ZmZXJHdW5uZXJzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nQWN0aW9uID0ge3Byb3BzLCBjYWxsZXJ9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBPRkZFUiBHVU5ORVJTIEFORCBBV0FJVCBTRUxFQ1RJT04gKHJlbWVtYmVyIHRoZSBjb3N0IHBlciBndW5uZXIpXHJcbiAgICAgICAgICAgIC8vIFRoaXMgd2lsbCByZXF1aXJlIGFuIGFycmF5IG9mIGNsb25lcyBhc3NvY2lhdGVkIHdpdGggdGhlIHRlYW0uIFxyXG4gICAgICAgICAgICAvLyBJdGVyYXRlIHRoZSBhcnJheSBsb29raW5nIGZvciAnaXNHdW5uZXIgPT0gdHJ1ZSdcclxuICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IGFsbCBcImd1bm5lclwiIGNsb25lc1xyXG4gICAgICAgICAgICAvLyBBbGxvdyBzZWxlY3Rpb24gb2Ygb25seSBhcyBtYW55IGFzIHRlYW0gY2FuIGFmZm9yZFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBUaGlzIHdpbGwgY2FsbCB0aGUgbWV0aG9kIGRlZmluZWQgaW4gSlNPTi4gSW4gdGhpcyBjYXNlIGZpcmluZyBhIHdlYXBvbi5cclxuICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aGUgc2VsZWN0ZWQgZ3VubmVycyBhbmQgY2FsbCB0aGUgbWV0aG9kLlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ2FybW9yeSc6XHJcbiAgICAgICAgICAgIC8vU0VUIFRFQU0gV0VBUE9OUyFcclxuICAgICAgICAgICAgLy8gVGhpcyByZXF1aXJlcyBhIFRlYW0gcHJvcGVydHkgZm9yIHN0b3JpbmcgYSB3ZWFwb25zIChhcm1zPykgYXJyYXkuXHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoVHVybigpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSAncHJvZHVjdGlvbic6XHJcbiAgICAgICAgICAgIC8vIE5PVEU6IFRoZXNlIGFyZSByZXF1aXJlZCBpZiByZXNvdXJjZXMgYWxsb3dcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wcy5yZXNvdXJjZUNvc3RDb3VudCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgLy8gQ0FOIFRISVMgVEVBTSBBRkZPUkQgVEhFIENPU1Q/XHJcbiAgICAgICAgICAgICAgICAvLyBSZXF1aXJlcyBUZWFtIG9iamVjdCB0byBjaGVjayBmb3IgcmVzb3VyY2VzXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEdldCBjb3N0IGNvdW50XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgY29zdCB0eXBlXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEdldCB5aWVsZCBjb3VudFxyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHlpZWxkIHR5cGVcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gRXhlY3V0ZSB0cmFuc2FjdGlvblxyXG4gICAgICAgICAgICAgICAgdGhpcy5maW5pc2hUdXJuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ2xvY2snOlxyXG4gICAgICAgICAgICAvLyBOT1RISU5HIEhFUkUgKG1heWJlIGFuIHVwZGF0ZSBmZWF0dXJlPz8pXHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoVHVybigpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9OyBcclxuICAgICAgICAgICAgXHJcbiAgICAvLyBDT01NSVQgQUNUSU9OXHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgICBmaXJlKHdlYXBvblR5cGUsIGNhbGxlcikge1xyXG4gICAgY29uc29sZS5sb2coXCJGaXJpbmcgdGhlIFwiICsgd2VhcG9uVHlwZSk7XHJcbiAgICBcclxuICAgIHN3aXRjaCAod2VhcG9uVHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ2xhc2VyJzpcclxuICAgICAgICAgICAgLy9mb3IgKHZhciBpIGluIHRoaXMubG9jYWxUZWFtLnNlbGVjdGVkR3VubmVycykge1xyXG4gICAgICAgICAgICAvLyAgICB0aGlzLnNob290VGlsZSh0aGlzLmxvY2FsVGVhbS5zZWxlY3RlZEd1bm5lcnNbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcyk7XHJcbiAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgICAvL2JyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlICdzYXRlbGxpdGUnOlxyXG4gICAgICAgICAgICAvLyBQTEFDRSBBIFNBVEVMTElURVxyXG4gICAgICAgICAgIC8vIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlICd0aGVybWl0ZSc6XHJcbiAgICAgICAgICAgIC8vdGhpcy5zaG9vdFRpbGUoY2FsbGVyLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMsIHRydWUpO1xyXG4gICAgICAgICAgICAvL2JyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlICdzaGllbGQnOlxyXG4gICAgICAgICAgICAvL2JyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlICdiaW9kcm9uZSc6XHJcbiAgICAgICAgICAgIC8vYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ3JvY2tldCc6IFxyXG4gICAgICAgICAgICAvL2JyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMubG9jYWxUZWFtLnNlbGVjdGVkR3VubmVycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG9vdFRpbGUodGhpcy5sb2NhbFRlYW0uc2VsZWN0ZWRHdW5uZXJzW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgdGhpcy5sb2NhbFRlYW0uY2xlYXJHdW5uZXJzKCk7XHJcbiAgICAvL3RoaXMuZ2FtZS5zZXB0aWtvbi50dXJuU3RhdGUgPSB0aGlzLmdhbWUuc2VwdGlrb24udHVyblN0YXRlRW51bS5TVEFSVDtcclxuICAgIHRoaXMuZmluaXNoVHVybigpO1xyXG4gIH1cclxuICBcclxuICByZXBhaXIoY291bnQpIHtcclxuICAgIGNvbnNvbGUubG9nKFwicmVwYWlyIFwiICsgY291bnQgKyBcIiBvZiB0aGUgdGhpbmdzIVwiKTtcclxuICB9XHJcbiAgXHJcbiAgZXNwaW9uYWdlKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJHaW1tZSB5ZXIgY2xvbmUhIVwiKTtcclxuICB9XHJcbiAgXHJcbiAgdGFrZW92ZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkdpbW1lIHllciBzYXRlbGxpdGUhIVwiKTtcclxuICB9XHJcbiAgXHJcbiAgY291bnRlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiR2ltbWUgYmFjayBteSBjbG9uZSEhXCIpO1xyXG4gIH1cclxuICBcclxuICBraWxsQmlvZHJvbmUoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlllciBzb3VsZCBiZXR0ZXIgYmVsb25nIHRvIEplc3VzISBDdXogeWVyIGFzcyBiZWxvbmdzIHRvIG1lIVwiKTtcclxuICB9XHJcbiAgXHJcbiAgZmluaXNoVHVybigpIHtcclxuICAgIHRoaXMudHVyblN0YXRlID0gdGhpcy5nYW1lLnNlcHRpa29uLnR1cm5TdGF0ZUVudW0uU1RBUlQ7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiQWxhcy4gWW91ciB0dXJuIGlzIG92ZXIuIFwiKTtcclxuICB9XHJcbiAgXHJcblxyXG4gIGdldExlZ2FsTW92ZXMobW92ZXMsIGN1cnJlbnRDb29yZCwgcHJldmlvdXNDb29yZCkge1xyXG5cdG1vdmVzLS07XHJcblx0dmFyIGxlZ2FsTW92ZXMgPSBbXTtcclxuXHRmb3IodmFyIGRpcmVjdGlvbiBpbiB0aGlzLmRpcmVjdGlvbkVudW0pIHtcdFxyXG5cdFx0Ly8gTkVFRCBUTyBDSEVDSyBGT1IgTE9DS1NcclxuXHRcdHZhciBtb3ZlQ2hlY2sgPSB0aGlzLmdldENvb3JkRnJvbURpcmVjdGlvbihjdXJyZW50Q29vcmQsZGlyZWN0aW9uKTtcclxuICAgICAgICBpZiAobW92ZUNoZWNrID09IGZhbHNlKVxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdmFyIHRpbGVUb0NoZWNrID0gdGhpcy50aWxlQXJyYXlbbW92ZUNoZWNrLnhdW21vdmVDaGVjay55XTtcclxuXHJcbiAgICAgICAgLy8gdGlsZSBpcyBsZWdhbCBJRiBkaXJlY3Rpb24gaXMgb2sgQU5EIHRpbGUgaXMgbm90IGRhbWFnZWQgQU5EICggdGhlcmUgaXMgbm8gcHJldmlvdXMgY29vcmRpbmF0ZSBPUiB0aGlzIGlzIG5vdCB0aGUgcHJldmlvdXMgY29vcmRpbmF0ZSApXHJcblx0XHRpZih0aGlzLmNoZWNrV2FsbCh0aGlzLmRpcmVjdGlvbkVudW1bZGlyZWN0aW9uXSwgY3VycmVudENvb3JkKSA9PT0gdHJ1ZSAmJiB0aWxlVG9DaGVjay50aWxlRGFtYWdlZCA9PT0gZmFsc2UgJiYgKCh0eXBlb2YgcHJldmlvdXNDb29yZCA9PT0gJ3VuZGVmaW5lZCcpIHx8ICgodHlwZW9mIHByZXZpb3VzQ29vcmQgIT09ICd1bmRlZmluZWQnKSAmJiAoSlNPTi5zdHJpbmdpZnkobW92ZUNoZWNrKSAhPT0gSlNPTi5zdHJpbmdpZnkocHJldmlvdXNDb29yZCkpICkpKSB7XHJcblx0XHRcdC8vIENoZWNrIGlmIHRpbGUgaXMgb2NjdXBpZWRcclxuICAgICAgICAgICAgaWYobW92ZXM9PTApe1xyXG4gICAgICAgICAgICAgICAgaWYodGlsZVRvQ2hlY2sudGlsZU9jY3VwaWVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZ2FsTW92ZXMucHVzaChtb3ZlQ2hlY2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHZhciByZXR1cm5BcnJheSA9ICh0aGlzLmdldExlZ2FsTW92ZXMobW92ZXMsIG1vdmVDaGVjaywgY3VycmVudENvb3JkKSk7XHJcblx0XHRcdFx0Zm9yKHZhciBpbmRleCBpbiByZXR1cm5BcnJheSkge1xyXG5cdFx0XHRcdFx0aWYoSlNPTi5zdHJpbmdpZnkocmV0dXJuQXJyYXlbaW5kZXhdKSAhPT0gSlNPTi5zdHJpbmdpZnkoY3VycmVudENvb3JkKSlcclxuXHRcdFx0XHRcdFx0bGVnYWxNb3Zlcy5wdXNoKHJldHVybkFycmF5W2luZGV4XSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBsZWdhbE1vdmVzO1xyXG4gIH1cclxuICAgIFxyXG4gIGdldENvb3JkRnJvbURpcmVjdGlvbihvcmlnaW5Db29yZCxkaXJlY3Rpb24pIHtcclxuXHJcblx0dmFyIGRpcj17Tk9SVEg6e3g6MCx5Oi0xfSxFQVNUOnt4OjEseTowfSxTT1VUSDp7eDowLHk6MX0sV0VTVDp7eDotMSx5OjB9fTtcclxuICAgIFxyXG4gICAgdmFyIG9iaiA9IHt4OihwYXJzZUludChvcmlnaW5Db29yZC54KSArIHBhcnNlSW50KGRpcltkaXJlY3Rpb25dLngpKSwgeToocGFyc2VJbnQob3JpZ2luQ29vcmQueSkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS55KSl9O1xyXG4gICAgaWYob2JqLnggPCAwIHx8IG9iai55IDwgMCkgXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdGVsc2VcclxuICAgICAgICByZXR1cm4ge3g6KHBhcnNlSW50KG9yaWdpbkNvb3JkLngpICsgcGFyc2VJbnQoZGlyW2RpcmVjdGlvbl0ueCkpLCB5OihwYXJzZUludChvcmlnaW5Db29yZC55KSArIHBhcnNlSW50KGRpcltkaXJlY3Rpb25dLnkpKX07XHJcblx0XHRcclxuICB9XHJcbiAgXHJcbiAgc2hvd1RpbGVzKHRpbGVzQXJyYXkpIHtcclxuICAgIGZvciAodmFyIGkgaW4gdGlsZXNBcnJheSkge1xyXG4gICAgICAgIHRoaXMuc2hvd25UaWxlcy5wdXNoKHRpbGVzQXJyYXlbaV0pO1xyXG4gICAgICAgIHRpbGVzQXJyYXlbaV0uYWxwaGEgPSAwLjU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGhpZGVUaWxlcyh0aWxlQXJyYXkpIHtcclxuICAgIGlmKCF0aWxlQXJyYXkpIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuc2hvd25UaWxlcykge1xyXG4gICAgICAgICAgICB0aGlzLnNob3duVGlsZXNbaV0uYWxwaGEgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3duVGlsZXMgPSBbXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNob290VGlsZShjbG9uZUNvb3JkaW5hdGVzKSB7XHJcbiAgXHJcbiAgICB2YXIgY3VycmVudFggPSBjbG9uZUNvb3JkaW5hdGVzLng7XHJcbiAgICB2YXIgY3VycmVudFkgPSBjbG9uZUNvb3JkaW5hdGVzLnk7XHJcbiAgICB2YXIgY3VycmVudFRpbGUgPSB0aGlzLnRpbGVBcnJheVtjdXJyZW50WF1bY3VycmVudFldO1xyXG4gICAgZG8ge1xyXG4gICAgICAgIGN1cnJlbnRYKys7XHJcbiAgICAgICAgY3VycmVudFRpbGUgPSB0aGlzLnRpbGVBcnJheVtjdXJyZW50WF1bY3VycmVudFldO1xyXG4gICAgfSB3aGlsZSAoY3VycmVudFRpbGUudGlsZVR5cGUgPT0gJ3NwYWNlJyB8fCBjdXJyZW50VGlsZS50aWxlVHlwZSA9PSAnc3VyZmFjZScgfHwgY3VycmVudFRpbGUudGlsZURhbWFnZWQgPT0gdHJ1ZSk7XHJcbiAgICBcclxuICAgIGN1cnJlbnRUaWxlLnRpbnQgPSAwWDMzMzMzMztcclxuICAgIGN1cnJlbnRUaWxlLmFscGhhID0gMC44O1xyXG4gICAgY3VycmVudFRpbGUudGlsZURhbWFnZWQgPSB0cnVlO1xyXG4gICAgXHJcbiAgICB0aGlzLnRlc3QgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZShjdXJyZW50VGlsZS54LCBjdXJyZW50VGlsZS55ICsoY3VycmVudFRpbGUuaGVpZ2h0LzIpLCAnYm9vbScpO1xyXG4gICAgdGhpcy50ZXN0LmFuZ2xlID0gMjcwO1xyXG4gICAgdGhpcy50ZXN0LmFuY2hvci5zZXQoMC41LDAuNyk7XHJcbiAgICB0aGlzLnRlc3QuYW5pbWF0aW9ucy5hZGQoJ2Jvb20nKTtcclxuICAgIHRoaXMudGVzdC5hbmltYXRpb25zLnBsYXkoJ2Jvb20nLCAyMCwgZmFsc2UsIHRydWUpO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIGNoZWNrV2FsbChkaXJlY3Rpb24sIGN1cnJlbnRDb29yZGluYXRlKSB7XHJcbiAgICB0aGlzLndhbGxHcmlkID0gdGhpcy5nYW1lLmNhY2hlLmdldEpTT04oJ3dhbGxHcmlkJyk7XHJcblx0c3dpdGNoIChkaXJlY3Rpb24pe1xyXG5cdFx0Y2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uTk9SVEg6IC8vIFVQXHJcblx0XHRcdGlmIChwYXJzZUludCh0aGlzLndhbGxHcmlkLmdyaWRbY3VycmVudENvb3JkaW5hdGUueF1bY3VycmVudENvb3JkaW5hdGUueV0mdGhpcy5kaXJlY3Rpb25FbnVtLk5PUlRIKSA9PSAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdFx0Y2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uU09VVEg6IC8vIERPV05cclxuXHRcdFx0aWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uU09VVEgpID09IDApIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblx0XHRjYXNlIHRoaXMuZGlyZWN0aW9uRW51bS5FQVNUOiAvLyBSSUdIVFxyXG5cdFx0XHRpZiAocGFyc2VJbnQodGhpcy53YWxsR3JpZC5ncmlkW2N1cnJlbnRDb29yZGluYXRlLnhdW2N1cnJlbnRDb29yZGluYXRlLnldJnRoaXMuZGlyZWN0aW9uRW51bS5FQVNUKSA9PSAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdFx0Y2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uV0VTVDogLy8gTEVGVFxyXG5cdFx0XHRpZiAocGFyc2VJbnQodGhpcy53YWxsR3JpZC5ncmlkW2N1cnJlbnRDb29yZGluYXRlLnhdW2N1cnJlbnRDb29yZGluYXRlLnldJnRoaXMuZGlyZWN0aW9uRW51bS5XRVNUKSA9PSAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuICAgIFxyXG4gIH1cclxuICBcclxuICBzZXR1cCgpIHtcclxuICAgIC8vU2hvdWxkIGFzayBmb3IgcGxheWVyIG5hbWUgYW5kIGFzc2lnbiBhIGNvbG9yLiBcclxuICAgIC8vR2l2ZSB3YWl0aW5nIGluZGljYXRvclxyXG4gICAgLy9PZmZlciBzb21lIHdheSB0byBwaWNrIGEgZ2FtZT8gSURLLi5cclxuICB9XHJcbiAgXHJcbiAgc3RhcnRHYW1lKCkge1xyXG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XHJcbiAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcHRpa29uO1xyXG4iLCJpbXBvcnQgUmVzb3VyY2VzIGZyb20gJy4uL3ByZWZhYnMvcmVzb3VyY2VzJztcclxuaW1wb3J0IFBlcnNvbm5lbCBmcm9tICcuLi9wcmVmYWJzL3BlcnNvbm5lbCc7XHJcbmltcG9ydCBPcmRuYW5jZSBmcm9tICcuLi9wcmVmYWJzL29yZG5hbmNlJztcclxuaW1wb3J0IENsb25lIGZyb20gJy4uL3ByZWZhYnMvY2xvbmUnOyAvLyBUaGlzIHdpbGwgYmUgaW5jb3Jwb3JhdGVkIGluIHBlcnNvbm5lbFxyXG5cclxuY2xhc3MgVGVhbSB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7IFxyXG4gICAgdGhpcy5yZWMgPSBuZXcgUmVzb3VyY2VzKCk7XHJcbiAgICB0aGlzLnJlY0VudW0gPSB0aGlzLnJlYy5yZXNvdXJjZUVudW07XHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgXHJcbiAgICB0aGlzLnBlcnNvbm5lbCA9IFtdO1xyXG4gICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMgPSBbXTtcclxuICB9XHJcbiAgXHJcbiAgcmVmcmVzaCgpIHtcclxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcclxuICAgICAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvL1Jlc291cmNlIEludGVyZmFjZVxyXG4gIGdldFJlY0NvdW50KHR5cGUpIHtcclxuICAgIHJldHVybiB0aGlzLnJlYy5nZXRDb3VudCh0eXBlKTtcclxuICB9XHJcbiAgXHJcbiAgY2hlY2tSZWModHlwZSwgY291bnQpIHtcclxuICAgIGlmICh0aGlzLmdldFJlY0NvdW50KHR5cGUpID49IGNvdW50KSBcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgXHJcbiAgZXhjaGFuZ2VSZWMoY29zdFR5cGUsIGNvc3RDb3VudCwgeWllbGRUeXBlLCB5aWVsZENvdW50KSB7XHJcbiAgfVxyXG4gIFxyXG4gIGFkZFJlYyh0eXBlLCBjb3VudCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVjLmFkZCh0eXBlLCBjb3VudCk7XHJcbiAgfVxyXG4gIFxyXG4gIHJlbW92ZVJlYyh0eXBlLCBjb3VudCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVjLnJlbW92ZSh0eXBlLCBjb3VudCk7XHJcbiAgfVxyXG4gIFxyXG4gIGFkZENsb25lKHgsIHksIHByb3BzKSB7XHJcbiAgICB2YXIgcG9pbnQgPSB0aGlzLmdhbWUuc2VwdGlrb24udGlsZVRvUGl4ZWxzKHgseSk7XHJcbiAgICB2YXIgY2xvbmUgPSBuZXcgQ2xvbmUodGhpcy5nYW1lLHBvaW50LngscG9pbnQueSk7XHJcbiAgICBjbG9uZS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnggPSB4O1xyXG4gICAgY2xvbmUuY3VycmVudFRpbGVDb29yZGluYXRlcy55ID0geTtcclxuICAgIFxyXG4gICAgZm9yICh2YXIgaSBpbiBwcm9wcykge1xyXG4gICAgICAgIGNsb25lW2ldID0gcHJvcHNbaV07XHJcbiAgICB9XHJcbiAgICB0aGlzLnBlcnNvbm5lbC5wdXNoKGNsb25lKTtcclxuICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZChjbG9uZSk7XHJcbiAgfVxyXG4gIFxyXG4gIGdldENsb25lKGNvb3JkKSB7XHJcbiAgICBmb3IgKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XHJcbiAgICAgICAgaWYodGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy54ID09IGNvb3JkLnggJiYgdGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy55ID09IGNvb3JkLnkpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wZXJzb25uZWxbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBraWxsQ2xvbmUoY29vcmQpIHtcclxuICAgIHZhciBjbG9uZSA9IHRoaXMuZ2V0Q2xvbmUoY29vcmQpO1xyXG4gICAgdGhpcy5nYW1lLnN0YWdlLnJlbW92ZUNoaWxkKGNsb25lKTtcclxuICAgIFxyXG4gICAgdmFyIGluZGV4ID0gdGhpcy5wZXJzb25uZWwuaW5kZXhPZihjbG9uZSk7XHJcbiAgICB0aGlzLnBlcnNvbm5lbC5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICBcclxuICAgIGNsb25lLnJlbW92ZSgpO1xyXG4gIH1cclxuICAgIFxyXG4gIG9mZmVyTGVnYWxDbG9uZXMoKSB7XHJcbiAgICAvLyBPZmZlciBjbG9uZXMgdGhhdCBoYXZlIGxlZ2FsIG1vdmVzXHJcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcclxuICAgICAgICB2YXIgbW92ZXMgPSB0aGlzLnBlcnNvbm5lbFtpXS5nZXRMZWdhbE1vdmVzKCk7XHJcblxyXG4gICAgICAgIGlmKG1vdmVzICE9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyc29ubmVsW2ldLmhpZ2hsaWdodE9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBvZmZlckd1bm5lcnMoKSB7XHJcbiAgICAvLyBPZmZlciBndW5uZXIgXHJcbiAgICB2YXIgZ3VubmVyRm91bmQgPSBmYWxzZTtcclxuICAgIGZvcih2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbCkge1xyXG4gICAgICAgIGlmKHRoaXMucGVyc29ubmVsW2ldLmlzR3VubmVyKSB7XHJcbiAgICAgICAgICAgIGd1bm5lckZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy90aGlzLnBlcnNvbm5lbFtpXS5oaWdobGlnaHRPbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBndW5uZXJGb3VuZDtcclxuICB9XHJcbiAgXHJcbiAgc2VsZWN0R3VubmVyKGNvb3Jkcykge1xyXG4gICAgdmFyIGNsb25lID0gdGhpcy5nZXRDbG9uZShjb29yZHMpO1xyXG4gICAgaWYoIWNsb25lKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGlmKCFjbG9uZS5pc0d1bm5lcilcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICB2YXIgZXhpc3RpbmdHdW5uZXIgPSB0aGlzLnNlbGVjdGVkR3VubmVycy5pbmRleE9mKGNsb25lKTtcclxuICAgIGlmKGV4aXN0aW5nR3VubmVyID49IDApe1xyXG4gICAgICAgIGNsb25lLmhpZ2hsaWdodE9mZigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzLnNwbGljZShleGlzdGluZ0d1bm5lciwgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNsb25lLmhpZ2hsaWdodE9uKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMucHVzaChjbG9uZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGNsZWFyR3VubmVycygpIHtcclxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5zZWxlY3RlZEd1bm5lcnMpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVyc1tpXS5oaWdobGlnaHRPZmYoKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzID0gW107XHJcbiAgfVxyXG4gIFxyXG4gIHNlbGVjdENsb25lRm9yTW92ZShjb29yZHMpIHsgICAgXHJcbiAgXHJcbiAgICB2YXIgY2xvbmUgPSB0aGlzLmdldENsb25lKGNvb3Jkcyk7XHJcbiAgICBpZighY2xvbmUpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIGZvcih2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbCkge1xyXG4gICAgICAgIHRoaXMucGVyc29ubmVsW2ldLmhpZ2hsaWdodE9mZigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sZWdhbFRpbGVzID0gY2xvbmUuZ2V0TGVnYWxNb3ZlcygpO1xyXG4gICAgdGhpcy5zZWxlY3RlZENsb25lID0gY2xvbmU7XHJcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24uc2hvd1RpbGVzKHRoaXMubGVnYWxUaWxlcyk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgXHJcbiAgbW92ZVNlbGVjdGVkQ2xvbmUoY29vcmRzKSB7XHJcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5sZWdhbFRpbGVzKSB7XHJcbiAgICAgICAgaWYodGhpcy5sZWdhbFRpbGVzW2ldLnRpbGVYID09IGNvb3Jkcy54ICYmIHRoaXMubGVnYWxUaWxlc1tpXS50aWxlWSA9PSBjb29yZHMueSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2xvbmUubW92ZShjb29yZHMpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZENsb25lO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5sZWdhbFRpbGVzO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZWFtOyIsImNsYXNzIE9yZG5hbmNlIHtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuT3JkbmFuY2UgPSBPcmRuYW5jZTtcclxuIiwiY2xhc3MgUGVyc29ubmVsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCB4LCB5KSB7XHJcbiAgICAgICAgdGhpcy50eXBlRW51bSA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgICAgICBjbG9uZTogMCxcclxuICAgICAgICAgICAgYmlvZHJvbmU6IDFcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Jpb2Ryb25lJzpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjbG9uZSc6XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVFbnVtW3R5cGVdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBtb3ZlKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLlBlcnNvbm5lbCA9IFBlcnNvbm5lbDtcclxuIiwidmFyIFBlcnNvbm5lbCA9IHJlcXVpcmUoJy4vcGVyc29ubmVsJykuUGVyc29ubmVsO1xyXG52YXIgUmVzb3VyY2UgPSByZXF1aXJlKCcuL3Jlc291cmNlJykuUmVzb3VyY2U7XHJcbnZhciBPcmRuYW5jZSA9IHJlcXVpcmUoJy4vb3JkbmFuY2UnKS5PcmRuYW5jZTtcclxuXHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNvY2tldElELCBpZCwgdXVpZCkgeyBcclxuICAgICAgICB0aGlzLnNvY2tldElEID0gc29ja2V0SUQ7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkOyAvL3BsYXllciAxIG9yIHBsYXllciAyOyB0aGlzIHdpbGwgZGV0ZXJtaW5lIHRoZSBzaWRlIG9mIHRoZSBib2FyZCBhdCBjbGllbnQgc3RhcnQuXHJcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZDtcclxuICAgICAgICB0aGlzLnBlcnNvbm5lbEFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5vcmRuYW5jZUFycmF5ID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdGFydGluZ0Nsb25lQ291bnQgPSA1OyAgICBcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIGFkZFBlcnNvbm5lbCh0eXBlLCB4LCB5KSB7XHJcbiAgICAgICAgaWYodHlwZSA9PSBcImNsb25lXCIgJiYgdGhpcy5nZXRQZXJzb25uZWwodHlwZSkubGVuZ3RoIDwgdGhpcy5zdGFydGluZ0Nsb25lQ291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wZXJzb25uZWxBcnJheS5wdXNoKG5ldyBQZXJzb25uZWwoJ2Nsb25lJywgeCwgeSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVBlcnNvbm5lbChwZXJzb25uZWwsIHB1cmdlQWxsKSB7XHJcbiAgICAgICAgaWYgKHB1cmdlQWxsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyc29ubmVsQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0UGVyc29ubmVsKHR5cGUpIHtcclxuICAgICAgICB2YXIgcmV0dXJuQXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWxBcnJheSkge1xyXG4gICAgICAgICAgICBpZih0aGlzLnBlcnNvbm5lbEFycmF5W2ldLnR5cGUgPT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy5wZXJzb25uZWxBcnJheVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuUGxheWVyID0gUGxheWVyO1xyXG4iLCJjbGFzcyBSZXNvdXJjZXMge1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5SZXNvdXJjZXMgPSBSZXNvdXJjZXM7XHJcbiIsInZhciBQbGF5ZXIgPSByZXF1aXJlKCcuL3BsYXllcicpLlBsYXllcjtcclxuXHJcbmNsYXNzIFNlcHRpa29uIHtcclxuICAgIFxyXG5cdGNvbnN0cnVjdG9yKGlvKSB7XHJcbiAgICAgICAgdGhpcy5pbyA9IGlvO1xyXG4gICAgICAgIHRoaXMubGFzdFBsYXllcklEID0gMDtcclxuICAgICAgICB0aGlzLnBsYXllcnNBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gMDtcclxuICAgICAgICB0aGlzLnR1cm5TdGF0ZSA9IDA7XHJcbiAgICAgICAgdGhpcy51dWlkID0gcmVxdWlyZSgndXVpZC92NCcpKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVySUQgPSB0aGlzLmxhc3RQbGF5ZXJJRDtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmN1cnJlbnREaWNlVmFsdWUgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlRW51bSA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgICAgICBTRVRVUDogMCxcclxuICAgICAgICAgICAgR0FNRTogMSwgXHJcbiAgICAgICAgICAgIFBBVVNFOiAyLFxyXG4gICAgICAgICAgICBHQU1FT1ZFUjogM1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudHVyblN0YXRlRW51bSA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgICAgICBST0xMOiAwLFxyXG4gICAgICAgICAgICBNT1ZFOiAxLCBcclxuICAgICAgICAgICAgQUNUSU9OOiAyLFxyXG4gICAgICAgICAgICBFTkQ6IDNcclxuICAgICAgICB9KTsgIFxyXG5cclxuICAgICAgICB0aGlzLnRpbGVDb2x1bW5zID0gMzE7XHJcbiAgICAgICAgdGhpcy50aWxlUm93cyA9IDIxO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVGlsZUFycmF5KCk7ICAgICAgXHJcblx0fVxyXG5cclxuXHRhZGROZXdQbGF5ZXIoc29ja2V0SUQsIHV1aWQpIHtcclxuICAgICAgICB0aGlzLmxhc3RQbGF5ZXJJRCsrO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllcklEID0gdGhpcy5sYXN0UGxheWVySUQ7XHJcbiAgICAgICAgdmFyIHBsYXllciA9IG5ldyBQbGF5ZXIoc29ja2V0SUQsIHRoaXMubGFzdFBsYXllcklELCB1dWlkKTtcclxuICAgICAgICB0aGlzLnBsYXllcnNBcnJheS5wdXNoKHBsYXllcik7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICd1cGRhdGVQbGF5ZXInLCBkZXRhaWxzOiB7aWQ6IHRoaXMubGFzdFBsYXllcklEfX0sIHNvY2tldElEKTtcclxuICAgICAgICByZXR1cm4gcGxheWVyO1xyXG5cdH1cclxuXHJcbiAgICBzZXRQbGF5ZXJTdGF0ZShzdGF0ZSkge1xyXG4gICAgICAgIHN3aXRjaCAoc3RhdGUudmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAncmVzZXQnOiBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyIGhhcyByZXF1ZXN0ZWQgY2xvbmVzIGJlIHJlc2V0IGR1cmluZyBpbml0LiBcXG5UT0RPOiBcXG4gLSBkdW1wIHNlcnZlciBjbG9uZXNcXG4gLSB0ZWxsIHBsYXllciB0byBkdW1wIGNsb25lcy5cIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXJCeVNvY2tldElEKHN0YXRlLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgIHBsYXllci5yZW1vdmVQZXJzb25uZWwobnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcInJlbW92ZUFsbFBlcnNvbm5lbFwiLCBkZXRhaWxzOiB7fX0sIHBsYXllci5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOiBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyIHJlYWR5IHRvIHN0YXJ0ISBcXG5UT0RPOlxcbiAtIENoZWNrIG9uIG9wcG9uZW50LiBcXG4gLSBTZW5kIG1lc3NhZ2UgdG8gdXNlciBIVUQuXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHN0YXRlLnZhbHVlICsgXCIgaXMgbm90IGEgdmFsaWQgcGxheWVyIHN0YXRlIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFBsYXllckJ5VVVJRCh1dWlkKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnBsYXllcnNBcnJheSkge1xyXG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcnNBcnJheVtpXS51dWlkID09IHV1aWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXlbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0UGxheWVyQnlTb2NrZXRJRChpZCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXJzQXJyYXlbaV0uc29ja2V0SUQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheVtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGV4aXN0c1BsYXllclVVSUQodXVpZCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXJzQXJyYXlbaV0udXVpZCA9PSB1dWlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2xpY2tlZChkYXRhKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9jaGVjayBnYW1lIHN0YXRlXHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmdhbWVTdGF0ZSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIHRoaXMuZ2FtZVN0YXRlRW51bS5TRVRVUDpcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHRpbGUgaXMgdHlwZTogc3VyZmFjZSwgYmF0dGxlLCBhcm1vcnksIGxvY2ssIG9yIHByb2R1Y3Rpb25cclxuICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgdGlsZSBiZWxvbmdzIHRvIHBsYXllcidzIHRlYW1cclxuICAgICAgICAgICAgICAgIC8vYWRkIGNsb25lIHRvIHBsYXllcidzIHBlcnNvbm5lbFxyXG4gICAgICAgICAgICAgICAgdmFyIHBsYXllciA9IHRoaXMuZ2V0UGxheWVyQnlTb2NrZXRJRChkYXRhLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxhY2VDbG9uZShwbGF5ZXIsIGRhdGEueCwgZGF0YS55KTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIHRoaXMuZ2FtZVN0YXRlRW51bS5HQU1FOlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vY2hlY2sgdHVyblN0YXRlXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHBsYWNlQ2xvbmUocGxheWVyLCB4LCB5KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodHlwZW9mKHBsYXllcikgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkVGlsZSA9IHRoaXMuZ2V0VGlsZSh4LCB5KTtcclxuICAgICAgICAgICAgaWYocGxheWVyLmlkICE9IHNlbGVjdGVkVGlsZS5vd25lcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHNlbGVjdGVkVGlsZS50eXBlID09IFwibG9ja1wiIHx8IHNlbGVjdGVkVGlsZS50eXBlID09IFwiYmF0dGxlXCIgfHwgc2VsZWN0ZWRUaWxlLnR5cGUgPT0gXCJhcm1vcnlcIiB8fCBzZWxlY3RlZFRpbGUudHlwZSA9PSBcInByb2R1Y3Rpb25cIiB8fCBzZWxlY3RlZFRpbGUudHlwZSA9PSBcInN1cmZhY2VcIikge1xyXG4gICAgICAgICAgICAgICAgaWYocGxheWVyLmFkZFBlcnNvbm5lbCgnY2xvbmUnLCB4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwiYWRkQ2xvbmVcIiwgZGV0YWlsczoge3g6eCwgeTp5fX0sIHBsYXllci5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocGxheWVyLmdldFBlcnNvbm5lbCgnY2xvbmUnKS5sZW5ndGggPT0gcGxheWVyLnN0YXJ0aW5nQ2xvbmVDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbmRpbmcgbW9kYWwgcmVxdWVzdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdyZXF1ZXN0Jywge2NhbGxiYWNrOlwibW9kYWxcIiwgZGV0YWlsczoge3R5cGU6XCJhc2tTdGFydFwifX0sIHBsYXllci5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjogcGxheWVyIG5vdCBmb3VuZCEnKTsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVUaWxlQXJyYXkoKSB7XHJcbiAgICAgICAgdmFyIHRpbGVKU09OID0gcmVxdWlyZSgnLi4vLi4vYXNzZXRzL3RpbGVEZXRhaWwuanNvbicpO1xyXG5cclxuICAgICAgICBmb3IodmFyIGMgPSAwOyBjIDwgdGhpcy50aWxlQ29sdW1uczsgYysrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NdID0gW107XHJcbiAgICAgICAgICAgIGZvcih2YXIgciA9IDA7IHIgPCB0aGlzLnRpbGVSb3dzOyByKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NdW3JdID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aWxlSlNPTikge1xyXG4gICAgICAgICAgICBpZiAoIXRpbGVKU09OLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIG9iaiA9IHRpbGVKU09OW2tleV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBza2lwIGxvb3AgaWYgdGhlIHByb3BlcnR5IGlzIGZyb20gcHJvdG90eXBlXHJcbiAgICAgICAgICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KHByb3ApKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uQ291bnQgPSBvYmpbcHJvcF0ubG9jYXRpb25zLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYXRpb25Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvb3JkcyA9IG9ialtwcm9wXS5sb2NhdGlvbnNbaV0uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gY29vcmRzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gY29vcmRzWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLmRhbWFnZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5vY2N1cGllZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnR5cGUgPSBvYmpbcHJvcF0udHlwZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPCA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLm93bmVyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHggPiAyMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5vd25lciA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVBcnJheVt4XVt5XSAhPSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0ubmFtZSA9IG9ialtwcm9wXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeCArIFwiOlwiICsgeSArIFwiIG5vdCBmb3VuZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcF0ucHJvcGVydGllcyAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XVsndGlsZVByb3BlcnRpZXMnXSA9IG9ialtwcm9wXS5wcm9wZXJ0aWVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGlsZSh4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZUFycmF5W3hdW3ldO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByb2xsRGljZShkYXRhKSB7XHJcbiAgICAgICAgaWYodGhpcy50dXJuU3RhdGUgPT0gdGhpcy50dXJuU3RhdGVFbnVtLlJPTEwgJiYgdGhpcy5nYW1lU3RhdGUgPT0gdGhpcy5nYW1lU3RhdGVFbnVtLkdBTUUpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGljZVZhbHVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcImRpY2VSb2xsZWRcIiwgZGV0YWlsczoge3ZhbHVlOnRoaXMuY3VycmVudERpY2VWYWx1ZX19LCBkYXRhLnNvY2tldElEKTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdsb2cnLCB7bXNnOlwiUGxheWVyIHJvbGxlZCBcIiArIHRoaXMuY3VycmVudERpY2VWYWx1ZX0pO1xyXG4gICAgICAgICAgICB0aGlzLnR1cm5TdGF0ZSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0KGRhdGEpIHtcclxuICAgICAgICBpZih0eXBlb2YoZGF0YS5wcm9wZXJ0eSkgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZXNwb25zZScsIHtkZXRhaWxzOnRoaXNbZGF0YS5wcm9wZXJ0eV19LCBkYXRhLnNvY2tldElEKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGVtaXQobXNnLCBkYXRhLCBzb2NrZXRJRCkge1xyXG4gICAgICAgIGlmKG1zZyA9PSBcInJlc3BvbnNlXCIgfHwgbXNnID09IFwicmVxdWVzdFwiKSB7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZihzb2NrZXRJRCkgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIFNvY2tldElEIGZvdW5kIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlvLnNvY2tldHMuY29ubmVjdGVkW3NvY2tldElEXS5lbWl0KG1zZywgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaWYobXNnID09IFwiYWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgaWYodHlwZW9mKHNvY2tldElEKSA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gU29ja2V0SUQgZm91bmQhXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW8uc29ja2V0cy5jb25uZWN0ZWRbc29ja2V0SURdLmVtaXQobXNnLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYobXNnID09IFwibG9nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5pby5zb2NrZXRzLmVtaXQobXNnLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGJyb2FkY2FzdChtc2csIGRhdGEpIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMucGxheWVyc0FycmF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdChtc2csIGRhdGEsIHRoaXMucGxheWVyc0FycmF5W2ldLnNvY2tldElEKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5TZXB0aWtvbiA9IFNlcHRpa29uO1xyXG4iLCJpbXBvcnQgU2VwdGlrb24gZnJvbSAnLi4vcHJlZmFicy9zZXB0aWtvbic7XHJcblxyXG5jbGFzcyBCb290IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgcHJlbG9hZCgpIHtcclxuICAgIHRoaXMubG9hZC5pbWFnZSgncHJlbG9hZGVyJywgJ2Fzc2V0cy9wcmVsb2FkZXIuZ2lmJyk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICB0aGlzLmdhbWUuaW5wdXQubWF4UG9pbnRlcnMgPSAxO1xyXG4gICAgdGhpcy5nYW1lLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XHJcbiAgICAvL3NldHVwIGRldmljZSBzY2FsaW5nXHJcbiAgICBpZiAoIXRoaXMuZ2FtZS5kZXZpY2UuZGVza3RvcCkge1xyXG4gICAgICAvL3RoaXMuZ2FtZS5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlNIT1dfQUxMO1xyXG4gICAgICB0aGlzLmdhbWUuc2NhbGUucGFyZW50SXNXaW5kb3cgPSB0cnVlO1xyXG4gICAgICB0aGlzLmdhbWUuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5SRVNJWkU7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5taW5XaWR0aCA9ICA0ODA7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5taW5IZWlnaHQgPSAyNjA7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5mb3JjZU9yaWVudGF0aW9uKHRydWUpO1xyXG4gICAgICAvL3RoaXMuZ2FtZS5zY2FsZS5zZXRTaXplKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbml0R2xvYmFsVmFyaWFibGVzKCk7XHJcbiAgICBcclxuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgncHJlbG9hZGVyJyk7XHJcbiAgfVxyXG5cclxuICBpbml0R2xvYmFsVmFyaWFibGVzKCl7XHJcbiAgICB0aGlzLmdhbWUuZ2xvYmFsID0ge1xyXG4gICAgICBzY29yZTogMCxcclxuICAgICAgbGFzdERpY2VSb2xsOiAwLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb290O1xyXG4iLCJcclxuY2xhc3MgR2FtZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcbiAgXHJcbiAgY3JlYXRlKCkge1xyXG4gIFxyXG4gICAgLy90aGlzLmdhbWUuaW5wdXQub25Eb3duLmFkZCh0aGlzLnRvZ2dsZUZ1bGxzY3JlZW4sIHRoaXMpO1xyXG4gICAgdGhpcy5nYW1lLnN0YWdlLmRpc2FibGVWaXNpYmlsaXR5Q2hhbmdlID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XHJcbiAgICB0aGlzLmdhbWUubW9kYWwgPSBuZXcgZ2FtZU1vZGFsKHRoaXMuZ2FtZSk7XHJcbiAgICB0aGlzLmNyZWF0ZU1vZGFscygpO1xyXG5cclxuICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwnYmFja2dyb3VuZCcpO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kLmFuY2hvci5zZXRUbygwLjUsMC41KTtcclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNlbnRlclggPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWDtcclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNlbnRlclkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWTtcclxuXHJcbiAgICB2YXIgc2NhbGUgPSB3aW5kb3cuaW5uZXJXaWR0aC90aGlzLmJhY2tncm91bmQuaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFkZCh0aGlzLmJhY2tncm91bmQpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi5jcmVhdGVUaWxlQXJyYXkoMzEsIDIxLCB7eDowLXRoaXMuYmFja2dyb3VuZC53aWR0aC8yLCB5OjAtdGhpcy5iYWNrZ3JvdW5kLmhlaWdodC8yfSk7XHJcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5zY2FsZS5zZXRUbyhzY2FsZSk7XHJcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC54ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclg7XHJcblxyXG4gICAgaWYodGhpcy5nYW1lLnNlcHRpa29uLnBsYXllci5pZCA9PSAxKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYW5nbGUgPSAtOTA7IFxyXG4gICAgICAgIC8vdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZOyAvLyBDZW50ZXJlZCBvbiBTZXB0aWtvbiBMb2dvXHJcbiAgICAgICAgLy90aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgKyAoKHRoaXMuYmFja2dyb3VuZC53aWR0aCpzY2FsZSktd2luZG93LmlubmVySGVpZ2h0KS8yOyAvLyBDZW50ZXJlZCBvbiBvcHBvbmVudCdzIHNpZGVcclxuICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgLSAoKHRoaXMuYmFja2dyb3VuZC53aWR0aCpzY2FsZSktd2luZG93LmlubmVySGVpZ2h0KS8yOyAvLyBDZW50ZXJlZCBvbiB0aGlzIHBsYXllcidzIHNpZGVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYW5nbGUgPSA5MDsgXHJcbiAgICAgICAgLy90aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclk7IC8vIENlbnRlcmVkIG9uIFNlcHRpa29uIExvZ29cclxuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSArICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIG9wcG9uZW50J3Mgc2lkZVxyXG4gICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSAtICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIHRoaXMgcGxheWVyJ3Mgc2lkZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlTW9kYWxzKCkge1xyXG4gICAgICB0aGlzLmdhbWUubW9kYWwuY3JlYXRlTW9kYWwoXHJcbiAgICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwiYXNrU3RhcnRcIixcclxuICAgICAgICBpbmNsdWRlQmFja2dyb3VuZDogdHJ1ZSxcclxuICAgICAgICBtb2RhbENsb3NlT25JbnB1dDogdHJ1ZSxcclxuICAgICAgICBpdGVtc0FycjogW3tcclxuICAgICAgICAgICAgdHlwZTogXCJncmFwaGljc1wiLFxyXG4gICAgICAgICAgICBncmFwaGljQ29sb3I6IFwiMHhmZmZmZmZcIixcclxuICAgICAgICAgICAgZ3JhcGhpY1dpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgIGdyYXBoaWNIZWlnaHQ6IDMwMCxcclxuICAgICAgICAgICAgZ3JhcGhpY1JhZGl1czogNDBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiBcIkFyZSB5b3UgaGFwcHkgd2l0aFxcbiB0aGF0IGNsb25lIGxheW91dD9cIixcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIweDFlMWUxZVwiLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiAtNTBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcclxuICAgICAgICAgICAgY29udGVudDogXCJ0ZXh0X3llc1wiLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiAxMDAsXHJcbiAgICAgICAgICAgIG9mZnNldFg6IC04MCxcclxuICAgICAgICAgICAgY29udGVudFNjYWxlOiAwLjYsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUubW9kYWwuaGlkZU1vZGFsKFwiYXNrU3RhcnRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6J3NldFBsYXllclN0YXRlJywgdmFsdWU6J3N0YXJ0J30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwidGV4dF9ub1wiLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiAxMDAsXHJcbiAgICAgICAgICAgIG9mZnNldFg6IDgwLFxyXG4gICAgICAgICAgICBjb250ZW50U2NhbGU6IDAuNixcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5tb2RhbC5oaWRlTW9kYWwoXCJhc2tTdGFydFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDonc2V0UGxheWVyU3RhdGUnLCB2YWx1ZToncmVzZXQnfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIFxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdNb3VzZScsIDcwMCwgMzIpO1xyXG4gICAgXHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnTW91c2UgWDogJyArIHRoaXMuZ2FtZS5pbnB1dC54LCA3MDAsIDY0KTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdNb3VzZSBZOiAnICsgdGhpcy5nYW1lLmlucHV0LnksIDcwMCwgOTIpO1xyXG4gIH1cclxuICBcclxuICByZW5kZXIgKCkge1xyXG4gIFxyXG4gICAgdmFyIHggPSAzMjtcclxuICAgIHZhciB5ID0gMDtcclxuICAgIHZhciB5aSA9IDMyO1xyXG4gICAgLypcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdWaWV3cG9ydCcsIHgsIHkgKz0geWkpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdWaWV3cG9ydCBXaWR0aDogJyArIHRoaXMuZ2FtZS5zY2FsZS52aWV3cG9ydFdpZHRoLCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd3aW5kb3cuaW5uZXJXaWR0aDogJyArIHdpbmRvdy5pbm5lcldpZHRoLCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd3aW5kb3cub3V0ZXJXaWR0aDogJyArIHdpbmRvdy5vdXRlcldpZHRoLCB4LCB5ICs9IHlpKTtcclxuXHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnVmlld3BvcnQgSGVpZ2h0OiAnICsgdGhpcy5nYW1lLnNjYWxlLnZpZXdwb3J0SGVpZ2h0LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd3aW5kb3cuaW5uZXJIZWlnaHQ6ICcgKyB3aW5kb3cuaW5uZXJIZWlnaHQsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3dpbmRvdy5vdXRlckhlaWdodDogJyArIHdpbmRvdy5vdXRlckhlaWdodCwgeCwgeSArPSB5aSk7XHJcblxyXG4gICAgLy8gIERldmljZTogSG93IHRvIGdldCBkZXZpY2Ugc2l6ZS5cclxuXHJcbiAgICAvLyAgVXNlIHdpbmRvdy5zY3JlZW4ud2lkdGggZm9yIGRldmljZSB3aWR0aCBhbmQgd2luZG93LnNjcmVlbi5oZWlnaHQgZm9yIGRldmljZSBoZWlnaHQuIFxyXG4gICAgLy8gIC5hdmFpbFdpZHRoIGFuZCAuYXZhaWxIZWlnaHQgZ2l2ZSB5b3UgdGhlIGRldmljZSBzaXplIG1pbnVzIFVJIHRhc2tiYXJzLiAoVHJ5IG9uIGFuIGlQaG9uZS4pIFxyXG4gICAgLy8gIERldmljZSBzaXplIGlzIHN0YXRpYyBhbmQgZG9lcyBub3QgY2hhbmdlIHdoZW4gdGhlIHBhZ2UgaXMgcmVzaXplZCBvciByb3RhdGVkLlxyXG5cclxuICAgIHggPSAzNTA7XHJcbiAgICB5ID0gMDtcclxuXHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnQm9hcmQgR3JvdXAnLCB4LCB5ICs9IHlpKTtcclxuXHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5nYW1lLmJvYXJkR3JvdXAueDogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLngsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnk6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC55LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aDogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoLCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC5oZWlnaHQ6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC5oZWlnaHQsIHgsIHkgKz0geWkpO1xyXG5cclxuICAgIHggPSAzMjtcclxuICAgIHkgPSAzMDA7XHJcblxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ0JhY2tncm91bmQgRGV0YWlsJywgeCwgeSArPSB5aSk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC54OiAnICsgdGhpcy5iYWNrZ3JvdW5kLngsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC55OiAnICsgdGhpcy5iYWNrZ3JvdW5kLnksIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC53aWR0aDogJyArIHRoaXMuYmFja2dyb3VuZC53aWR0aCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLmhlaWdodDogJyArIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC5zY2FsZTogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnNjYWxlLngsIHgsIHkgKz0geWkpO1xyXG4gICAgKi9cclxuICAgIH1cclxuICAgIFxyXG4gIHRvZ2dsZUZ1bGxzY3JlZW4oKSB7XHJcbiAgICBpZih0aGlzLmdhbWUuc2NhbGUuaXNGdWxsU2NyZWVuKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnN0b3BGdWxsU2NyZWVuKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5zdGFydEZ1bGxTY3JlZW4oZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcclxuIiwiY2xhc3MgTWVudSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIC8vYWRkIGJhY2tncm91bmQgaW1hZ2VcclxuICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwnYmFja2dyb3VuZCcpO1xyXG4gICAgdGhpcy5iZ1JhdGlvID0gdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUud2lkdGggLyB0aGlzLmJhY2tncm91bmQudGV4dHVyZS5oZWlnaHQ7XHJcbiAgICB0aGlzLndvcmxkUmF0aW8gPSB0aGlzLmdhbWUud29ybGQud2lkdGggLyB0aGlzLmdhbWUud29ybGQuaGVpZ2h0O1xyXG4gICAgaWYgKCgodGhpcy53b3JsZFJhdGlvIC0gdGhpcy5iZ1JhdGlvKSAvIDIgKiB0aGlzLmdhbWUud29ybGQud2lkdGgpID4gMCkge1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQvdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUuaGVpZ2h0KnRoaXMuYmFja2dyb3VuZC50ZXh0dXJlLndpZHRoO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQgPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC54ID0gKHRoaXMuZ2FtZS53b3JsZC53aWR0aCAtIHRoaXMuYmFja2dyb3VuZC53aWR0aCkgLyAyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQud2lkdGggPSB0aGlzLmdhbWUud29ybGQud2lkdGg7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aC90aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aCp0aGlzLmJhY2tncm91bmQudGV4dHVyZS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnkgPSAodGhpcy5nYW1lLndvcmxkLmhlaWdodCAtIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQpIC8gMjtcclxuICAgIH1cclxuXHJcbiAgICAvL2FkZCBpbnRybyB0ZXh0XHJcbiAgICB0aGlzLmdhbWVvdmVyVGV4dCA9IHRoaXMuYWRkLnRleHQodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsdGhpcy5nYW1lLndvcmxkLmNlbnRlclksIFwiU2NvcmUgPSBcIit0aGlzLmdhbWUuZ2xvYmFsLnNjb3JlLCB7XHJcbiAgICAgIGZvbnQ6ICc0MnB4IEFyaWFsJywgZmlsbDogJyNmZmZmZmYnLCBhbGlnbjogJ2NlbnRlcidcclxuICAgIH0pO1xyXG4gICAgdGhpcy5nYW1lb3ZlclRleHQuYW5jaG9yLnNldCgwLjUpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub25Eb3duLmFkZCh0aGlzLm9uSW5wdXREb3duLCB0aGlzKTtcclxuXHJcbiAgICAvL3ByZXZlbnQgYWNjaWRlbnRhbCBjbGljay10aHJ1IGJ5IG5vdCBhbGxvd2luZyBzdGF0ZSB0cmFuc2l0aW9uIGZvciBhIHNob3J0IHRpbWVcclxuICAgIHRoaXMuY2FuQ29udGludWVUb05leHRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChQaGFzZXIuVGltZXIuU0VDT05EICogMC41LCBmdW5jdGlvbigpeyB0aGlzLmNhbkNvbnRpbnVlVG9OZXh0U3RhdGUgPSB0cnVlOyB9LCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLnNhdmVWYXJzVG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgIHRoaXMucmVzZXRHbG9iYWxWYXJpYWJsZXMoKTtcclxuICB9XHJcblxyXG4gIHNhdmVWYXJzVG9Mb2NhbFN0b3JhZ2UoKXtcclxuICAgIHZhciBtYXggPSBsb2NhbFN0b3JhZ2UubWF4U2NvcmUgfHwgMDsgLy9kZWZhdWx0IHZhbHVlIG9mIDAgaXMgaXQgZG9lcyBub3QgZXhpc3RcclxuICAgIGlmICh0aGlzLmdhbWUuZ2xvYmFsLnNjb3JlID4gbWF4KXsgbG9jYWxTdG9yYWdlLm1heFNjb3JlID0gdGhpcy5nYW1lLmdsb2JhbC5zY29yZTsgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRHbG9iYWxWYXJpYWJsZXMoKXtcclxuICAgIHRoaXMuZ2FtZS5nbG9iYWwuc2NvcmUgPSAwO1xyXG4gIH1cclxuICB1cGRhdGUoKSB7fVxyXG5cclxuICBvbklucHV0RG93biAoKSB7XHJcbiAgICBpZih0aGlzLmNhbkNvbnRpbnVlVG9OZXh0U3RhdGUpe1xyXG4gICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ21lbnUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51O1xyXG4iLCJjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmFzc2V0ID0gbnVsbDtcclxuICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByZWxvYWQoKSB7XHJcbiAgICAvL3NldHVwIGxvYWRpbmcgYmFyXHJcbiAgICB0aGlzLmFzc2V0ID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53aWR0aCAqIDAuNSAtIDExMCwgdGhpcy5nYW1lLmhlaWdodCAqIDAuNSAtIDEwLCAncHJlbG9hZGVyJyk7XHJcbiAgICB0aGlzLmxvYWQuc2V0UHJlbG9hZFNwcml0ZSh0aGlzLmFzc2V0KTtcclxuICAgIFxyXG4gICAgLy9TZXR1cCBsb2FkaW5nIGFuZCBpdHMgZXZlbnRzXHJcbiAgICB0aGlzLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLm9uTG9hZENvbXBsZXRlLCB0aGlzKTtcclxuICAgIHRoaXMubG9hZFJlc291cmNlcygpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFJlc291cmNlcygpIHtcclxuICAgICAgXHJcbiAgICAvL01FTlUgUkVTT1VSQ0VTXHJcbiAgICAvL21lbnUgYmFja2dyb3VuZFxyXG4gICAgLy90ZXh0IGltYWdlc1xyXG4gICAgLy9tdXNpYyBmaWxlcyA/XHJcbiAgICBcclxuICAgIC8vbG9hZCBnYW1lIGRhdGFcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmpzb24oJ3RpbGVEZXRhaWwnLCAnYXNzZXRzL3RpbGVEZXRhaWwuanNvbicpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuanNvbignd2FsbEdyaWQnLCAnYXNzZXRzL3dhbGxHcmlkLmpzb24nKTtcclxuICBcclxuICAgIC8vR0FNRSBSRVNPVVJDRVNcclxuICAgIC8vZ2FtZSBib2FyZCBiYWNrZ3JvdW5kXHJcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnYmFja2dyb3VuZCcsJ2Fzc2V0cy9tZWRpdW1fYm9hcmQucG5nJyk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnZGljZScsJ2Fzc2V0cy90ZXh0X2dvLnBuZycpO1xyXG4gICAgXHJcbiAgICAvLyBtb2RhbCBpbWFnZXNcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X3llcycsJ2Fzc2V0cy90ZXh0X3llcy5wbmcnKTtcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X25vJywnYXNzZXRzL3RleHRfbm8ucG5nJyk7XHJcblxyXG4gICAgLy9wbGF5ZXIgdG9rZW5zIHNwcml0ZXNoZWV0c1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ2Nsb25lJywgJ2Fzc2V0cy9jbG9uZS5wbmcnLDExMCwxNjgpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuYXRsYXMoJ2Jvb20nLCAnYXNzZXRzL2Jvb20ucG5nJywgJ2Fzc2V0cy9ib29tLmpzb24nLCBQaGFzZXIuTG9hZGVyLlRFWFRVUkVfQVRMQVNfSlNPTl9IQVNIKTtcclxuXHJcbiAgICAvL2F1ZGlvIGZpbGVzIFxyXG4gICAgXHJcbiAgICAvL3RoaXMuZ2FtZS5sb2FkLmltYWdlKCdjcm9zc2hhaXJzJywgJ2Fzc2V0cy9jcm9zc2hhaXJfcmVkX3NtYWxsLnBuZycpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfZ28nLCAnYXNzZXRzL3RleHRfZ28ucG5nJyk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9yZWFkeScsICdhc3NldHMvdGV4dF9yZWFkeS5wbmcnKTtcclxuXHJcbiAgICAvL3RoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCd0YXJnZXQnLCAnYXNzZXRzL3RhcmdldC5wbmcnLDEyOC42NiwxMjgpO1xyXG5cclxuICAgIC8vdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ2d1bnNob3QnLCdhc3NldHMvZ3Vuc2hvdC53YXYnKTtcclxuICAgIC8vdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ2RpbmcnLCdhc3NldHMvZGluZy53YXYnKTtcclxuICB9XHJcblxyXG4gIG9uTG9hZENvbXBsZXRlKCkge1xyXG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdzZXR1cCcpO1xyXG4gICAgLy90aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ2dhbWUnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZWxvYWRlcjtcclxuIiwiY2xhc3MgU2V0dXAgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiB9XHJcbiAgXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5nYW1lLm5hbWUgPSBcInVzZXJcIjtcclxuXHJcbiAgICB0aGlzLmdhbWUuc3RhZ2UuZGlzYWJsZVZpc2liaWxpdHlDaGFuZ2UgPSB0cnVlO1xyXG4gICAgdGhpcy5nYW1lLm1vZGFsID0gbmV3IGdhbWVNb2RhbCh0aGlzLmdhbWUpO1xyXG4gICAgdGhpcy5jcmVhdGVNb2RhbHMoKTtcclxuICAgIHRoaXMuZ2FtZS5tb2RhbC5zaG93TW9kYWwoJ3VzZXJuYW1lJyk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmFkZENhbGxiYWNrcyh0aGlzLCBudWxsLCBudWxsLCB0aGlzLmtleVByZXNzKTtcclxuICAgIHRoaXMuYmtzcCA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleWJvYXJkLkJBQ0tTUEFDRSk7XHJcbiAgICB0aGlzLmJrc3Aub25Eb3duLmFkZCh0aGlzLmtleVByZXNzLCB0aGlzKTtcclxuICAgIHRoaXMuZW50ZXIgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5LZXlib2FyZC5FTlRFUik7XHJcbiAgICB0aGlzLmVudGVyLm9uRG93bi5hZGQodGhpcy5rZXlQcmVzcywgdGhpcyk7XHJcbiAgICB0aGlzLmdhbWUuY2xpZW50LmFza05ld1BsYXllcigpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi5zZXR1cCgpO1xyXG59XHJcblxyXG5rZXlQcmVzcyhjaGFyKSB7XHJcblxyXG4gICAgaWYodHlwZW9mKGNoYXIpID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgaWYgKGNoYXIuZXZlbnQuY29kZSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyLmV2ZW50LmNvZGUgPT09IFwiQmFja3NwYWNlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLm5hbWUgPSB0aGlzLmdhbWUubmFtZS5zdWJzdHJpbmcoMCwgdGhpcy5nYW1lLm5hbWUubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY2hhciA9PSBcIiBcIikge1xyXG4gICAgICAgICAgICBjaGFyID0gXCJfXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZS5uYW1lICs9IGNoYXI7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdhbWUubW9kYWwudXBkYXRlTW9kYWxWYWx1ZSh0aGlzLmdhbWUubmFtZSwgJ3VzZXJuYW1lJywgNCk7XHJcbn1cclxuICBcclxuICBjcmVhdGVNb2RhbHMoKSB7XHJcbiAgXHJcbiAgICAvLyBTdGFydCBHYW1lXHJcbiAgICB0aGlzLmdhbWUubW9kYWwuY3JlYXRlTW9kYWwoXHJcbiAgICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwidXNlcm5hbWVcIixcclxuICAgICAgICBpbmNsdWRlQmFja2dyb3VuZDogdHJ1ZSxcclxuICAgICAgICBtb2RhbENsb3NlT25JbnB1dDogZmFsc2UsXHJcbiAgICAgICAgaXRlbXNBcnI6IFt7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ3JhcGhpY3NcIixcclxuICAgICAgICAgICAgZ3JhcGhpY0NvbG9yOiBcIjB4ZmZmZmZmXCIsXHJcbiAgICAgICAgICAgIGdyYXBoaWNXaWR0aDogMzAwLFxyXG4gICAgICAgICAgICBncmFwaGljSGVpZ2h0OiAzMDAsXHJcbiAgICAgICAgICAgIGdyYXBoaWNSYWRpdXM6IDQwXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgY29udGVudDogXCJUeXBlIGEgdXNlcm5hbWUsXFxudGhlbiBoaXQgPEVOVEVSPlxcblxcbihtYXggb2YgMjUgY2hhcmFjdGVycylcIixcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIweDFlMWUxZVwiLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiAtNTBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmdhbWUubmFtZSxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIweDFlMWUxZVwiLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiA1MFxyXG4gICAgICAgIH0sIF1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHVwO1xyXG4iXX0=
