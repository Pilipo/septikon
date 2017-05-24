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

        this.socket.on('update', function (data) {
            if (data.type == "personnel") {
                for (var i in data.details) {
                    this.septikon.addClone(data.details[i]);
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
                        var payload = [];
                        for (var i in oppClones) {
                            payload.push({
                                x: oppClones[i].x,
                                y: oppClones[i].y,
                                uuid: oppClones[i].uuid
                            });
                        }
                        this.emit('update', { type: "personnel", details: payload }, player.socketID);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvdGlsZURldGFpbC5qc29uIiwibm9kZV9tb2R1bGVzL3V1aWQvbGliL2J5dGVzVG9VdWlkLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvdjQuanMiLCJzcmNcXG1haW4uanMiLCJzcmNcXG1vZGFsLmpzIiwic3JjXFxwcmVmYWJzXFxjbGllbnQuanMiLCJzcmNcXHByZWZhYnNcXGNsb25lLmpzIiwic3JjXFxwcmVmYWJzXFxjcm9zc2hhaXJzLmpzIiwic3JjXFxwcmVmYWJzXFxkaWNlLmpzIiwic3JjXFxwcmVmYWJzXFxtYXN0ZXIuanMiLCJzcmNcXHByZWZhYnNcXG9yZG5hbmNlLmpzIiwic3JjXFxwcmVmYWJzXFxwZXJzb25uZWwuanMiLCJzcmNcXHByZWZhYnNcXHJlc291cmNlcy5qcyIsInNyY1xccHJlZmFic1xcc2VwdGlrb24uanMiLCJzcmNcXHByZWZhYnNcXHRlYW0uanMiLCJzcmNcXHNlcnZlclxcb3JkbmFuY2UuanMiLCJzcmNcXHNlcnZlclxccGVyc29ubmVsLmpzIiwic3JjXFxzZXJ2ZXJcXHBsYXllci5qcyIsInNyY1xcc2VydmVyXFxyZXNvdXJjZS5qcyIsInNyY1xcc2VydmVyXFxzZXB0aWtvbi5qcyIsInNyY1xcc3RhdGVzXFxib290LmpzIiwic3JjXFxzdGF0ZXNcXGdhbWUuanMiLCJzcmNcXHN0YXRlc1xcZ2FtZW92ZXIuanMiLCJzcmNcXHN0YXRlc1xccHJlbG9hZGVyLmpzIiwic3JjXFxzdGF0ZXNcXHNldHVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUdDLGdDQUFZLGNBSGI7QUFJQyw4QkFBVSxFQUpYO0FBS0MsMkJBQU8sVUFMUjtBQU1DLDZCQUFTO0FBTlYsaUJBYk87QUFKVixhQURKO0FBNEJEOzs7O0VBekVpQixPQUFPLEs7O2tCQTRFWixLIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzPXtcclxuXHRcInRpbGVQcm9wZXJ0eUFycmF5XCI6IHtcclxuXHRcdFwib3RoZXJTcGFjZVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDBcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwic3BhY2VcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwic3BhY2VcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiOSwwXCIsIFwiOSwxXCIsIFwiOSwyXCIsIFwiOSwzXCIsIFwiOSw0XCIsIFwiOSw1XCIsIFwiOSw2XCIsIFwiOSw3XCIsIFwiOSw4XCIsIFwiOSw5XCIsIFwiOSwxMFwiLCBcIjksMTFcIiwgXCI5LDEyXCIsIFwiOSwxM1wiLCBcIjksMTRcIiwgXCI5LDE1XCIsIFwiOSwxNlwiLCBcIjksMTdcIiwgXCI5LDE4XCIsIFwiOSwxOVwiLCBcIjksMjBcIiwgXCIxMCwwXCIsIFwiMTAsMVwiLCBcIjEwLDJcIiwgXCIxMCwzXCIsIFwiMTAsNFwiLCBcIjEwLDVcIiwgXCIxMCw2XCIsIFwiMTAsN1wiLCBcIjEwLDhcIiwgXCIxMCw5XCIsIFwiMTAsMTBcIiwgXCIxMCwxMVwiLCBcIjEwLDEyXCIsIFwiMTAsMTNcIiwgXCIxMCwxNFwiLCBcIjEwLDE1XCIsIFwiMTAsMTZcIiwgXCIxMCwxN1wiLCBcIjEwLDE4XCIsIFwiMTAsMTlcIiwgXCIxMCwyMFwiLCBcIjExLDBcIiwgXCIxMSwxXCIsIFwiMTEsMlwiLCBcIjExLDNcIiwgXCIxMSw0XCIsIFwiMTEsNVwiLCBcIjExLDZcIiwgXCIxMSw3XCIsIFwiMTEsOFwiLCBcIjExLDlcIiwgXCIxMSwxMFwiLCBcIjExLDExXCIsIFwiMTEsMTJcIiwgXCIxMSwxM1wiLCBcIjExLDE0XCIsIFwiMTEsMTVcIiwgXCIxMSwxNlwiLCBcIjExLDE3XCIsIFwiMTEsMThcIiwgXCIxMSwxOVwiLCBcIjExLDIwXCIsIFwiMTIsMFwiLCBcIjEyLDFcIiwgXCIxMiwyXCIsIFwiMTIsM1wiLCBcIjEyLDRcIiwgXCIxMiw1XCIsIFwiMTIsNlwiLCBcIjEyLDdcIiwgXCIxMiw4XCIsIFwiMTIsOVwiLCBcIjEyLDEwXCIsIFwiMTIsMTFcIiwgXCIxMiwxMlwiLCBcIjEyLDEzXCIsIFwiMTIsMTRcIiwgXCIxMiwxNVwiLCBcIjEyLDE2XCIsIFwiMTIsMTdcIiwgXCIxMiwxOFwiLCBcIjEyLDE5XCIsIFwiMTIsMjBcIiwgXCIxMywwXCIsIFwiMTMsMVwiLCBcIjEzLDJcIiwgXCIxMywzXCIsIFwiMTMsNFwiLCBcIjEzLDVcIiwgXCIxMyw2XCIsIFwiMTMsN1wiLCBcIjEzLDhcIiwgXCIxMyw5XCIsIFwiMTMsMTBcIiwgXCIxMywxMVwiLCBcIjEzLDEyXCIsIFwiMTMsMTNcIiwgXCIxMywxNFwiLCBcIjEzLDE1XCIsIFwiMTMsMTZcIiwgXCIxMywxN1wiLCBcIjEzLDE4XCIsIFwiMTMsMTlcIiwgXCIxMywyMFwiLCBcIjE0LDBcIiwgXCIxNCwxXCIsIFwiMTQsMlwiLCBcIjE0LDNcIiwgXCIxNCw0XCIsIFwiMTQsNVwiLCBcIjE0LDZcIiwgXCIxNCw3XCIsIFwiMTQsOFwiLCBcIjE0LDlcIiwgXCIxNCwxMFwiLCBcIjE0LDExXCIsIFwiMTQsMTJcIiwgXCIxNCwxM1wiLCBcIjE0LDE0XCIsIFwiMTQsMTVcIiwgXCIxNCwxNlwiLCBcIjE0LDE3XCIsIFwiMTQsMThcIiwgXCIxNCwxOVwiLCBcIjE0LDIwXCIsIFwiMTUsMFwiLCBcIjE1LDFcIiwgXCIxNSwyXCIsIFwiMTUsM1wiLCBcIjE1LDRcIiwgXCIxNSw1XCIsIFwiMTUsNlwiLCBcIjE1LDdcIiwgXCIxNSw4XCIsIFwiMTUsOVwiLCBcIjE1LDEwXCIsIFwiMTUsMTFcIiwgXCIxNSwxMlwiLCBcIjE1LDEzXCIsIFwiMTUsMTRcIiwgXCIxNSwxNVwiLCBcIjE1LDE2XCIsIFwiMTUsMTdcIiwgXCIxNSwxOFwiLCBcIjE1LDE5XCIsIFwiMTUsMjBcIiwgXCIxNiwwXCIsIFwiMTYsMVwiLCBcIjE2LDJcIiwgXCIxNiwzXCIsIFwiMTYsNFwiLCBcIjE2LDVcIiwgXCIxNiw2XCIsIFwiMTYsN1wiLCBcIjE2LDhcIiwgXCIxNiw5XCIsIFwiMTYsMTBcIiwgXCIxNiwxMVwiLCBcIjE2LDEyXCIsIFwiMTYsMTNcIiwgXCIxNiwxNFwiLCBcIjE2LDE1XCIsIFwiMTYsMTZcIiwgXCIxNiwxN1wiLCBcIjE2LDE4XCIsIFwiMTYsMTlcIiwgXCIxNiwyMFwiLCBcIjE3LDBcIiwgXCIxNywxXCIsIFwiMTcsMlwiLCBcIjE3LDNcIiwgXCIxNyw0XCIsIFwiMTcsNVwiLCBcIjE3LDZcIiwgXCIxNyw3XCIsIFwiMTcsOFwiLCBcIjE3LDlcIiwgXCIxNywxMFwiLCBcIjE3LDExXCIsIFwiMTcsMTJcIiwgXCIxNywxM1wiLCBcIjE3LDE0XCIsIFwiMTcsMTVcIiwgXCIxNywxNlwiLCBcIjE3LDE3XCIsIFwiMTcsMThcIiwgXCIxNywxOVwiLCBcIjE3LDIwXCIsIFwiMTgsMFwiLCBcIjE4LDFcIiwgXCIxOCwyXCIsIFwiMTgsM1wiLCBcIjE4LDRcIiwgXCIxOCw1XCIsIFwiMTgsNlwiLCBcIjE4LDdcIiwgXCIxOCw4XCIsIFwiMTgsOVwiLCBcIjE4LDEwXCIsIFwiMTgsMTFcIiwgXCIxOCwxMlwiLCBcIjE4LDEzXCIsIFwiMTgsMTRcIiwgXCIxOCwxNVwiLCBcIjE4LDE2XCIsIFwiMTgsMTdcIiwgXCIxOCwxOFwiLCBcIjE4LDE5XCIsIFwiMTgsMjBcIiwgXCIxOSwwXCIsIFwiMTksMVwiLCBcIjE5LDJcIiwgXCIxOSwzXCIsIFwiMTksNFwiLCBcIjE5LDVcIiwgXCIxOSw2XCIsIFwiMTksN1wiLCBcIjE5LDhcIiwgXCIxOSw5XCIsIFwiMTksMTBcIiwgXCIxOSwxMVwiLCBcIjE5LDEyXCIsIFwiMTksMTNcIiwgXCIxOSwxNFwiLCBcIjE5LDE1XCIsIFwiMTksMTZcIiwgXCIxOSwxN1wiLCBcIjE5LDE4XCIsIFwiMTksMTlcIiwgXCIxOSwyMFwiLCBcIjIwLDBcIiwgXCIyMCwxXCIsIFwiMjAsMlwiLCBcIjIwLDNcIiwgXCIyMCw0XCIsIFwiMjAsNVwiLCBcIjIwLDZcIiwgXCIyMCw3XCIsIFwiMjAsOFwiLCBcIjIwLDlcIiwgXCIyMCwxMFwiLCBcIjIwLDExXCIsIFwiMjAsMTJcIiwgXCIyMCwxM1wiLCBcIjIwLDE0XCIsIFwiMjAsMTVcIiwgXCIyMCwxNlwiLCBcIjIwLDE3XCIsIFwiMjAsMThcIiwgXCIyMCwxOVwiLCBcIjIwLDIwXCIsIFwiMjEsMFwiLCBcIjIxLDFcIiwgXCIyMSwyXCIsIFwiMjEsM1wiLCBcIjIxLDRcIiwgXCIyMSw1XCIsIFwiMjEsNlwiLCBcIjIxLDdcIiwgXCIyMSw4XCIsIFwiMjEsOVwiLCBcIjIxLDEwXCIsIFwiMjEsMTFcIiwgXCIyMSwxMlwiLCBcIjIxLDEzXCIsIFwiMjEsMTRcIiwgXCIyMSwxNVwiLCBcIjIxLDE2XCIsIFwiMjEsMTdcIiwgXCIyMSwxOFwiLCBcIjIxLDE5XCIsIFwiMjEsMjBcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZVRoZXJtaXRlXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwMVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwidGhlcm1pdGVcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJiaW9tYXNzXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAyLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXHJcblx0XHRcdFx0XCJhcmdzXCI6IFwidGhlcm1pdGVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDIwXCIsIFwiNywxXCIsIFwiNyw3XCIsIFwiMjMsMTNcIiwgXCIyMywxOVwiLCBcIjI0LDBcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZVNoaWVsZFwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDJcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInNoaWVsZFwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcImVuZXJneVwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxyXG5cdFx0XHRcdFwiYXJnc1wiOiBcInNoaWVsZFwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsNlwiLCBcIjYsMTNcIiwgXCI2LDE5XCIsIFwiNywyXCIsIFwiNywxMlwiLCBcIjIzLDhcIiwgXCIyMywxOFwiLCBcIjI0LDFcIiwgXCIyNCw3XCIsIFwiMjQsMTRcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZUJpb2Ryb25lXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwM1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiYmlvZHJvbmVcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJiaW9kcm9uZVwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxyXG5cdFx0XHRcdFwiYXJnc1wiOiBcImJpb2Ryb25lXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiw1XCIsIFwiNywzXCIsIFwiNywxNVwiLCBcIjIzLDVcIiwgXCIyMywxN1wiLCBcIjI0LDE1XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVTYXRlbGxpdGVcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDA0XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJzYXRlbGxpdGVcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJtZXRhbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxyXG5cdFx0XHRcdFwiYXJnc1wiOiBcInNhdGVsbGl0ZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMFwiLCBcIjYsMTRcIiwgXCI3LDRcIiwgXCI3LDE3XCIsIFwiMjMsM1wiLCBcIjIzLDE2XCIsIFwiMjQsNlwiLCBcIjI0LDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVMYXNlclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDVcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImxhc2VyXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwiZW5lcmd5XCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAxLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXHJcblx0XHRcdFx0XCJhcmdzXCI6IFwibGFzZXJcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDNcIiwgXCI2LDdcIiwgXCI2LDhcIiwgXCI2LDEyXCIsIFwiNiwxNlwiLCBcIjcsNVwiLCBcIjcsNlwiLCBcIjcsOVwiLCBcIjcsMThcIiwgXCI3LDE5XCIsIFwiMjMsMVwiLCBcIjIzLDJcIiwgXCIyMywxMVwiLCBcIjIzLDE0XCIsIFwiMjMsMTVcIiwgXCIyNCw0XCIsIFwiMjQsOFwiLCBcIjI0LDEyXCIsIFwiMjQsMTNcIiwgXCIyNCwxN1wiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlUmVwYWlyXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwNlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwicmVwYWlyXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwibWV0YWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDEsXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcInJlcGFpclwiLFxyXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwxXCIsIFwiNiwxMFwiLCBcIjYsMThcIiwgXCI3LDhcIiwgXCI3LDEzXCIsIFwiMjMsN1wiLCBcIjIzLDEyXCIsIFwiMjQsMlwiLCBcIjI0LDEwXCIsIFwiMjQsMTlcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZVJvY2tldFwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDdcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInJvY2tldFwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcInJvY2tldFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxyXG5cdFx0XHRcdFwiYXJnc1wiOiBcInJvY2tldFwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsNFwiLCBcIjYsMTFcIiwgXCI3LDEwXCIsIFwiNywxNlwiLCBcIjIzLDRcIiwgXCIyMywxMFwiLCBcIjI0LDlcIiwgXCIyNCwxNlwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlRXNwaW9uYWdlXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwOFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiZXNwaW9uYWdlXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwiYmlvbWFzc1wiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMyxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZXNwaW9uYWdlXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwxNVwiLCBcIjcsMTFcIiwgXCIyMyw5XCIsIFwiMjQsNVwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlVGFrZW92ZXJcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDA5XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJ0YWtlb3ZlclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcImVuZXJneVwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMixcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwidGFrZW92ZXJcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDE3XCIsIFwiNywxNFwiLCBcIjIzLDZcIiwgXCIyNCwzXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVSZXBhaXJUd29cIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDEwXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJyZXBhaXJUd29cIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCIsIFwib3h5Z2VuXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzEsIDFdLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJyZXBhaXJcIixcclxuXHRcdFx0XHRcImFyZ3NcIjogMlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDlcIiwgXCIyNCwxMVwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlQ291bnRlckVzcGlvbmFnZVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMTFcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImNvdW50ZXJFc3Bpb25hZ2VcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiLCBcIm94eWdlblwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxXSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiY291bnRlclwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMlwiLCBcIjI0LDE4XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJvdGhlclN1cmZhY2VcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDEyXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInN1cmZhY2VcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwic3VyZmFjZVwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI4LDBcIiwgXCI4LDFcIiwgXCI4LDJcIiwgXCI4LDNcIiwgXCI4LDRcIiwgXCI4LDVcIiwgXCI4LDZcIiwgXCI4LDdcIiwgXCI4LDhcIiwgXCI4LDlcIiwgXCI4LDEwXCIsIFwiOCwxMVwiLCBcIjgsMTJcIiwgXCI4LDEzXCIsIFwiOCwxNFwiLCBcIjgsMTVcIiwgXCI4LDE2XCIsIFwiOCwxN1wiLCBcIjgsMThcIiwgXCI4LDE5XCIsIFwiOCwyMFwiLCBcIjIyLDBcIiwgXCIyMiwxXCIsIFwiMjIsMlwiLCBcIjIyLDNcIiwgXCIyMiw0XCIsIFwiMjIsNVwiLCBcIjIyLDZcIiwgXCIyMiw3XCIsIFwiMjIsOFwiLCBcIjIyLDlcIiwgXCIyMiwxMFwiLCBcIjIyLDExXCIsIFwiMjIsMTJcIiwgXCIyMiwxM1wiLCBcIjIyLDE0XCIsIFwiMjIsMTVcIiwgXCIyMiwxNlwiLCBcIjIyLDE3XCIsIFwiMjIsMThcIiwgXCIyMiwxOVwiLCBcIjIyLDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJvdGhlckxvY2tcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDEzXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImxvY2tcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwibG9ja1wiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI3LDBcIiwgXCI1LDEwXCIsIFwiMSwxMFwiLCBcIjcsMjBcIiwgXCIyMywwXCIsIFwiMjMsMjBcIiwgXCIyNSwxMFwiLCBcIjI5LDEwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJhcm1vcnlEcmlsbFwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMTRcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYXJtb3J5XCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImRyaWxsXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjQsMTBcIiwgXCIyNiwxMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwiQXJtb3J5Q2Fubm9uXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxNVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJhcm1vcnlcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiY2Fubm9uXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjMsMTBcIiwgXCIyNywxMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYXJtb3J5RXhwbG9zaXZlc1wiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMTZcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYXJtb3J5XCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImV4cGxvc2l2ZXNcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMiwxMFwiLCBcIjI4LDEwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJsaWNoZW5cIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDE3XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwibGljaGVuXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcImJpb21hc3NcIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMFwiLCBcIjAsMTBcIiwgXCIwLDE3XCIsIFwiMSwyXCIsIFwiMSw4XCIsIFwiMSwxNlwiLCBcIjEsMjBcIiwgXCIyOSwwXCIsIFwiMjksNFwiLCBcIjI5LDEyXCIsIFwiMjksMThcIiwgXCIzMCwzXCIsIFwiMzAsMTBcIiwgXCIzMCwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbkxpY2hlblR3b1wiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMThcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJsaWNoZW5Ud29cIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFwiYmlvbWFzc1wiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IDJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCw0XCIsIFwiMzAsMTZcIl1cclxuXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uQ2hlbWljYWxSZWFjdG9yXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxOVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImNoZW1pY2FsUmVhY3RvclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcImJpb21hc3NcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDEsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcIm94eWdlblwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMSwxXCIsIFwiMSw5XCIsIFwiMjksMTlcIiwgXCIyOSwxMVwiXVxyXG5cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25DaGVtaWNhbFJlYWN0b3JUd29cIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDIwXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiY2hlbWljYWxSZWFjdG9yVHdvXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwiYmlvbWFzc1wiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFwib3h5Z2VuXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogMlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDVcIiwgXCIzMCwxNVwiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbkFpckZpbHRlclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjFcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJhaXJGaWx0ZXJcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJveHlnZW5cIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcIm94eWdlblwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IDNcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxNVwiLCBcIjEsMTFcIiwgXCIyOSw5XCIsIFwiMzAsNVwiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbkJpb2NvbGxlY3RvclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjJcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJiaW9jb2xsZWN0b3JcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wib3h5Z2VuXCIsIFwiYmlvbWFzc1wiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFwiYmlvZHJvbmVcIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMTRcIiwgXCIwLDE4XCIsIFwiMSw2XCIsIFwiMSwxN1wiLCBcIjMwLDZcIiwgXCIzMCwyXCIsIFwiMjksMTRcIiwgXCIyOSwzXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uVXJhbml1bU1pbmVcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDIzXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwidXJhbml1bU1pbmVcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wib3h5Z2VuXCIsIFwiZW5lcmd5XCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzEsIDFdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogXCJ1cmFuaXVtXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDJcIiwgXCIwLDZcIiwgXCIxLDNcIiwgXCIzMCwxOFwiLCBcIjMwLDE0XCIsIFwiMjksMTdcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25OdWNsZWFyUmVhY3RvclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjRcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJudWNsZWFyUmVhY3RvclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcInVyYW5pdW1cIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDEsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcImVuZXJneVwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IDNcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCw5XCIsIFwiMCwxNlwiLCBcIjEsN1wiLCBcIjEsMTRcIiwgXCIxLDE5XCIsIFwiMzAsMTFcIiwgXCIzMCw0XCIsIFwiMjksMTNcIiwgXCIyOSw2XCIsIFwiMjksMVwiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvblRoZXJtYWxHZW5lcmF0b3JcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDI1XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwidGhlcm1hbEdlbmVyYXRvclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcImJpb21hc3NcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDEsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcImVuZXJneVwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxMlwiLCBcIjMwLDhcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25Gb3VuZHJ5XCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyNlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImZvdW5kcnlcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJlbmVyZ3lcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDEsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcIm1ldGFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDNcIiwgXCIwLDExXCIsIFwiMCwxOVwiLCBcIjEsMTNcIiwgXCIzMCwxN1wiLCBcIjMwLDlcIiwgXCIzMCwxXCIsIFwiMjksN1wiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbkZvdW5kcnlUd29cIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDI3XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiZm91bmRyeVR3b1wiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcImVuZXJneVwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFwibWV0YWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAyXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjEsMFwiLCBcIjI5LDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uUm9ja2V0V29ya3Nob3BcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDI4XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwicm9ja2V0V29ya3Nob3BcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJlbmVyZ3lcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDEsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcInJvY2tldFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxXCIsIFwiMCw3XCIsIFwiMSw1XCIsIFwiMSwxMlwiLCBcIjEsMTVcIiwgXCIzMCwxOVwiLCBcIjMwLDEzXCIsIFwiMjksMTVcIiwgXCIyOSw4XCIsIFwiMjksNVwiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvblNlbnNvckNhYmluXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyOVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInNlbnNvckNhYmluXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImtpbGxCaW9kcm9uZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMTNcIiwgXCIzMCw3XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uTnVjbGVhckFybW9yeVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzBcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJudWNsZWFyQXJtb3J5XCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm94eWdlblwiLCBcImVuZXJneVwiLCBcInVyYW5pdW1cIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMSwgMV0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcIm51a2VcIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMjBcIiwgXCIxLDRcIiwgXCIxLDE4XCIsIFwiMzAsMFwiLCBcIjI5LDE2XCIsIFwiMjksMlwiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvblJlcGFpclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzFcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJwcm9kUmVwYWlyXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwicmVwYWlyXCIsXHJcblx0XHRcdFx0XCJ0aWxlVGFyZ2V0SURcIjogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDhcIiwgXCIzMCwxMlwiXVxyXG5cdFx0fSxcclxuXHRcdFwicmVzb3VyY2VPeHlnZW5cIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDMyXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJveHlnZW5cIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNSwwXCIsIFwiNSwxXCIsIFwiNSwyXCIsIFwiNSwzXCIsIFwiNSw0XCIsIFwiNSw1XCIsIFwiNSw2XCIsIFwiNSw3XCIsIFwiNSw4XCIsIFwiNSw5XCIsIFwiMjUsMTFcIiwgXCIyNSwxMlwiLCBcIjI1LDEzXCIsIFwiMjUsMTRcIiwgXCIyNSwxNVwiLCBcIjI1LDE2XCIsIFwiMjUsMTdcIiwgXCIyNSwxOFwiLCBcIjI1LDE5XCIsIFwiMjUsMjBcIl1cclxuXHRcdH0sXHJcblx0XHRcInJlc291cmNlUm9ja2V0XCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAzM1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwicm9ja2V0XCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjQsMFwiLCBcIjQsMVwiLCBcIjQsMlwiLCBcIjQsM1wiLCBcIjQsNFwiLCBcIjQsNVwiLCBcIjQsNlwiLCBcIjQsN1wiLCBcIjQsOFwiLCBcIjQsOVwiLCBcIjI2LDExXCIsIFwiMjYsMTJcIiwgXCIyNiwxM1wiLCBcIjI2LDE0XCIsIFwiMjYsMTVcIiwgXCIyNiwxNlwiLCBcIjI2LDE3XCIsIFwiMjYsMThcIiwgXCIyNiwxOVwiLCBcIjI2LDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJyZXNvdXJjZU1ldGFsXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAzNFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwibWV0YWxcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMywwXCIsIFwiMywxXCIsIFwiMywyXCIsIFwiMywzXCIsIFwiMyw0XCIsIFwiMyw1XCIsIFwiMyw2XCIsIFwiMyw3XCIsIFwiMyw4XCIsIFwiMyw5XCIsIFwiMjcsMTFcIiwgXCIyNywxMlwiLCBcIjI3LDEzXCIsIFwiMjcsMTRcIiwgXCIyNywxNVwiLCBcIjI3LDE2XCIsIFwiMjcsMTdcIiwgXCIyNywxOFwiLCBcIjI3LDE5XCIsIFwiMjcsMjBcIl1cclxuXHRcdH0sXHJcblx0XHRcInJlc291cmNlRW5lcmd5XCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAzNVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiZW5lcmd5XCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjIsMFwiLCBcIjIsMVwiLCBcIjIsMlwiLCBcIjIsM1wiLCBcIjIsNFwiLCBcIjIsNVwiLCBcIjIsNlwiLCBcIjIsN1wiLCBcIjIsOFwiLCBcIjIsOVwiLCBcIjIsMTFcIiwgXCIyLDEyXCIsIFwiMiwxM1wiLCBcIjIsMTRcIiwgXCIyLDE1XCIsIFwiMiwxNlwiLCBcIjIsMTdcIiwgXCIyLDE4XCIsIFwiMiwxOVwiLCBcIjIsMjBcIiwgXCIyOCwwXCIsIFwiMjgsMVwiLCBcIjI4LDJcIiwgXCIyOCwzXCIsIFwiMjgsNFwiLCBcIjI4LDVcIiwgXCIyOCw2XCIsIFwiMjgsN1wiLCBcIjI4LDhcIiwgXCIyOCw5XCIsIFwiMjgsMTFcIiwgXCIyOCwxMlwiLCBcIjI4LDEzXCIsIFwiMjgsMTRcIiwgXCIyOCwxNVwiLCBcIjI4LDE2XCIsIFwiMjgsMTdcIiwgXCIyOCwxOFwiLCBcIjI4LDE5XCIsIFwiMjgsMjBcIl1cclxuXHRcdH0sXHJcblx0XHRcInJlc291cmNlQmlvbWFzc1wiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzZcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImJpb21hc3NcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNSwxMVwiLCBcIjUsMTJcIiwgXCI1LDEzXCIsIFwiNSwxNFwiLCBcIjUsMTVcIiwgXCI1LDE2XCIsIFwiNSwxN1wiLCBcIjUsMThcIiwgXCI1LDE5XCIsIFwiNSwyMFwiLCBcIjI1LDBcIiwgXCIyNSwxXCIsIFwiMjUsMlwiLCBcIjI1LDNcIiwgXCIyNSw0XCIsIFwiMjUsNVwiLCBcIjI1LDZcIiwgXCIyNSw3XCIsIFwiMjUsOFwiLCBcIjI1LDlcIl1cclxuXHRcdH0sXHJcblx0XHRcInJlc291cmNlQmlvZHJvbmVcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDM3XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJiaW9kcm9uZVwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI0LDExXCIsIFwiNCwxMlwiLCBcIjQsMTNcIiwgXCI0LDE0XCIsIFwiNCwxNVwiLCBcIjQsMTZcIiwgXCI0LDE3XCIsIFwiNCwxOFwiLCBcIjQsMTlcIiwgXCI0LDIwXCIsIFwiMjYsMFwiLCBcIjI2LDFcIiwgXCIyNiwyXCIsIFwiMjYsM1wiLCBcIjI2LDRcIiwgXCIyNiw1XCIsIFwiMjYsNlwiLCBcIjI2LDdcIiwgXCIyNiw4XCIsIFwiMjYsOVwiXVxyXG5cdFx0fSxcclxuXHRcdFwicmVzb3VyY2VVcmFuaXVtXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAzOFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwidXJhbml1bVwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIzLDExXCIsIFwiMywxMlwiLCBcIjMsMTNcIiwgXCIzLDE0XCIsIFwiMywxNVwiLCBcIjMsMTZcIiwgXCIzLDE3XCIsIFwiMywxOFwiLCBcIjMsMTlcIiwgXCIzLDIwXCIsIFwiMjcsMFwiLCBcIjI3LDFcIiwgXCIyNywyXCIsIFwiMjcsM1wiLCBcIjI3LDRcIiwgXCIyNyw1XCIsIFwiMjcsNlwiLCBcIjI3LDdcIiwgXCIyNyw4XCIsIFwiMjcsOVwiXVxyXG5cdFx0fVxyXG5cdH1cclxufSIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIHJldHVybiAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cbnZhciBybmc7XG5cbnZhciBjcnlwdG8gPSBnbG9iYWwuY3J5cHRvIHx8IGdsb2JhbC5tc0NyeXB0bzsgLy8gZm9yIElFIDExXG5pZiAoY3J5cHRvICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgcm5nID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn1cblxuaWYgKCFybmcpIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuICBybmcgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBybmc7XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PSAnYmluYXJ5JyA/IG5ldyBBcnJheSgxNikgOiBudWxsO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDE2OyArK2lpKSB7XG4gICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYgfHwgYnl0ZXNUb1V1aWQocm5kcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjQ7XG4iLCJpbXBvcnQgQ2xpZW50IGZyb20gJy4vcHJlZmFicy9jbGllbnQnO1xyXG5pbXBvcnQgQm9vdCBmcm9tICcuL3N0YXRlcy9ib290JztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9zdGF0ZXMvZ2FtZSc7XHJcbmltcG9ydCBTZXR1cCBmcm9tICcuL3N0YXRlcy9zZXR1cCc7XHJcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnLi9zdGF0ZXMvcHJlbG9hZGVyJztcclxuaW1wb3J0IEdhbWVvdmVyIGZyb20gJy4vc3RhdGVzL2dhbWVvdmVyJztcclxuaW1wb3J0IFNlcHRpa29uIGZyb20gJy4vcHJlZmFicy9zZXB0aWtvbic7XHJcblxyXG5pZih0eXBlb2YoU3RvcmFnZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXB0VVVJRCcpICE9IG51bGwpIHtcclxuICAgICAgICBjb25zdCB1dWlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcHRVVUlEJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHV1aWQgPSByZXF1aXJlKCd1dWlkL3Y0JykoKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VwdFVVSUQnLCB1dWlkKTtcclxuICAgIH1cclxufSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJMb2NhbCBTdG9yYWdlIGlzIHJlcXVpcmVkIVwiKTtcclxufVxyXG5cclxuY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0LCBQaGFzZXIuQVVUTywgJ3BoYXNlci10ZXN0LWdhbWUnKTtcclxuZ2FtZS5zZXB0aWtvbiA9IG5ldyBTZXB0aWtvbihnYW1lKTtcclxuZ2FtZS5jbGllbnQgPSBuZXcgQ2xpZW50KGdhbWUuc2VwdGlrb24pO1xyXG5cclxuZ2FtZS5zdGF0ZS5hZGQoJ2Jvb3QnLCBuZXcgQm9vdCgpKTtcclxuZ2FtZS5zdGF0ZS5hZGQoJ2dhbWUnLCBuZXcgR2FtZSgpKTtcclxuZ2FtZS5zdGF0ZS5hZGQoJ3NldHVwJywgbmV3IFNldHVwKCkpO1xyXG5nYW1lLnN0YXRlLmFkZCgncHJlbG9hZGVyJywgbmV3IFByZWxvYWRlcigpKTtcclxuZ2FtZS5zdGF0ZS5hZGQoJ2dhbWVvdmVyJywgbmV3IEdhbWVvdmVyKCkpO1xyXG5cclxuZ2FtZS5zdGF0ZS5zdGFydCgnYm9vdCcpO1xyXG4iLCJ2YXIgZ2FtZU1vZGFsID0gZ2FtZU1vZGFsIHx8IHt9O1xyXG5cclxuXHJcbmdhbWVNb2RhbCA9IGZ1bmN0aW9uIChnYW1lKSB7XHJcblxyXG5cdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0Z2FtZS5tb2RhbHMgPSB7fTtcclxuXHJcblx0LyoqXHJcblx0ICogW2hpZGVNb2RhbCBkZXNjcmlwdGlvbl1cclxuXHQgKiBAcGFyYW0gIHtbdHlwZV19IHR5cGUgW2Rlc2NyaXB0aW9uXVxyXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXHJcblx0ICovXHJcblx0dGhpcy5oaWRlTW9kYWwgPSBmdW5jdGlvbiAodHlwZSkge1xyXG5cdFx0d2luZG93LmNvbnNvbGUubG9nKHR5cGUpO1xyXG5cdFx0Z2FtZS5tb2RhbHNbdHlwZV0udmlzaWJsZSA9IGZhbHNlO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRjcmVhdGVNb2RhbDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuXHRcdFx0dmFyIHR5cGUgPSBvcHRpb25zLnR5cGUgfHwgJyc7IC8vIG11c3QgYmUgdW5pcXVlXHJcblx0XHRcdHZhciBpbmNsdWRlQmFja2dyb3VuZCA9IG9wdGlvbnMuaW5jbHVkZUJhY2tncm91bmQ7IC8vIG1heWJlIG5vdCBvcHRpb25hbFxyXG5cdFx0XHR2YXIgYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgfHwgXCIweDAwMDAwMFwiO1xyXG5cdFx0XHR2YXIgYmFja2dyb3VuZE9wYWNpdHkgPSBvcHRpb25zLmJhY2tncm91bmRPcGFjaXR5ID09PSB1bmRlZmluZWQgP1xyXG5cdFx0XHRcdDAuNyA6IG9wdGlvbnMuYmFja2dyb3VuZE9wYWNpdHk7XHJcblx0XHRcdHZhciBtb2RhbENsb3NlT25JbnB1dCA9IG9wdGlvbnMubW9kYWxDbG9zZU9uSW5wdXQgfHwgZmFsc2U7XHJcblx0XHRcdHZhciBtb2RhbEJhY2tncm91bmRDYWxsYmFjayA9IG9wdGlvbnMubW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2sgfHwgZmFsc2U7XHJcblx0XHRcdHZhciB2Q2VudGVyID0gb3B0aW9ucy52Q2VudGVyIHx8IHRydWU7XHJcblx0XHRcdHZhciBoQ2VudGVyID0gb3B0aW9ucy5oQ2VudGVyIHx8IHRydWU7XHJcblx0XHRcdHZhciBpdGVtc0FyciA9IG9wdGlvbnMuaXRlbXNBcnIgfHwgW107XHJcblx0XHRcdHZhciBmaXhlZFRvQ2FtZXJhID0gb3B0aW9ucy5maXhlZFRvQ2FtZXJhIHx8IGZhbHNlO1xyXG5cclxuXHRcdFx0dmFyIG1vZGFsO1xyXG5cdFx0XHR2YXIgbW9kYWxHcm91cCA9IGdhbWUuYWRkLmdyb3VwKCk7XHJcblx0XHRcdGlmIChmaXhlZFRvQ2FtZXJhID09PSB0cnVlKSB7XHJcblx0XHRcdFx0bW9kYWxHcm91cC5maXhlZFRvQ2FtZXJhID0gdHJ1ZTtcclxuXHRcdFx0XHRtb2RhbEdyb3VwLmNhbWVyYU9mZnNldC54ID0gMDtcclxuXHRcdFx0XHRtb2RhbEdyb3VwLmNhbWVyYU9mZnNldC55ID0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGluY2x1ZGVCYWNrZ3JvdW5kID09PSB0cnVlKSB7XHJcblx0XHRcdFx0bW9kYWwgPSBnYW1lLmFkZC5ncmFwaGljcyhnYW1lLndpZHRoLCBnYW1lLmhlaWdodCk7XHJcblx0XHRcdFx0bW9kYWwuYmVnaW5GaWxsKGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZE9wYWNpdHkpO1xyXG5cdFx0XHRcdG1vZGFsLnggPSAwO1xyXG5cdFx0XHRcdG1vZGFsLnkgPSAwO1xyXG5cclxuXHRcdFx0XHRtb2RhbC5kcmF3UmVjdCgwLCAwLCBnYW1lLndpZHRoLCBnYW1lLmhlaWdodCk7XHJcblxyXG5cdFx0XHRcdGlmIChtb2RhbENsb3NlT25JbnB1dCA9PT0gdHJ1ZSkge1xyXG5cclxuXHRcdFx0XHRcdHZhciBpbm5lck1vZGFsID0gZ2FtZS5hZGQuc3ByaXRlKDAsIDApO1xyXG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0aW5uZXJNb2RhbC53aWR0aCA9IGdhbWUud2lkdGg7XHJcblx0XHRcdFx0XHRpbm5lck1vZGFsLmhlaWdodCA9IGdhbWUuaGVpZ2h0O1xyXG5cdFx0XHRcdFx0aW5uZXJNb2RhbC50eXBlID0gdHlwZTtcclxuXHRcdFx0XHRcdGlubmVyTW9kYWwuaW5wdXQucHJpb3JpdHlJRCA9IDA7XHJcblx0XHRcdFx0XHRpbm5lck1vZGFsLmV2ZW50cy5vbklucHV0RG93bi5hZGQoZnVuY3Rpb24gKGUsIHBvaW50ZXIpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5oaWRlTW9kYWwoZS50eXBlKTtcclxuXHRcdFx0XHRcdH0sIF90aGlzLCAyKTtcclxuXHJcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmFkZChpbm5lck1vZGFsKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdG1vZGFsQmFja2dyb3VuZENhbGxiYWNrID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChtb2RhbEJhY2tncm91bmRDYWxsYmFjaykge1xyXG5cdFx0XHRcdHZhciBpbm5lck1vZGFsID0gZ2FtZS5hZGQuc3ByaXRlKDAsIDApO1xyXG5cdFx0XHRcdGlubmVyTW9kYWwuaW5wdXRFbmFibGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRpbm5lck1vZGFsLndpZHRoID0gZ2FtZS53aWR0aDtcclxuXHRcdFx0XHRpbm5lck1vZGFsLmhlaWdodCA9IGdhbWUuaGVpZ2h0O1xyXG5cdFx0XHRcdGlubmVyTW9kYWwudHlwZSA9IHR5cGU7XHJcblx0XHRcdFx0aW5uZXJNb2RhbC5pbnB1dC5wcmlvcml0eUlEID0gMDtcclxuXHJcblx0XHRcdFx0bW9kYWxHcm91cC5hZGQoaW5uZXJNb2RhbCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChpbmNsdWRlQmFja2dyb3VuZCkge1xyXG5cdFx0XHRcdG1vZGFsR3JvdXAuYWRkKG1vZGFsKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIG1vZGFsTGFiZWw7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXNBcnIubGVuZ3RoOyBpICs9IDEpIHtcclxuXHRcdFx0XHR2YXIgaXRlbSA9IGl0ZW1zQXJyW2ldO1xyXG5cdFx0XHRcdHZhciBpdGVtVHlwZSA9IGl0ZW0udHlwZSB8fCAndGV4dCc7XHJcblx0XHRcdFx0dmFyIGl0ZW1Db2xvciA9IGl0ZW0uY29sb3IgfHwgMHgwMDAwMDA7XHJcblx0XHRcdFx0dmFyIGl0ZW1Gb250ZmFtaWx5ID0gaXRlbS5mb250RmFtaWx5IHx8ICdBcmlhbCc7XHJcblx0XHRcdFx0dmFyIGl0ZW1Gb250U2l6ZSA9IGl0ZW0uZm9udFNpemUgfHwgMzI7XHJcblx0XHRcdFx0dmFyIGl0ZW1TdHJva2UgPSBpdGVtLnN0cm9rZSB8fCAnMHgwMDAwMDAnO1xyXG5cdFx0XHRcdHZhciBpdGVtU3Ryb2tlVGhpY2tuZXNzID0gaXRlbS5zdHJva2VUaGlja25lc3MgfHwgMDtcclxuXHRcdFx0XHR2YXIgaXRlbUFsaWduID0gaXRlbS5hbGlnbiB8fCAnY2VudGVyJztcclxuXHRcdFx0XHR2YXIgb2Zmc2V0WCA9IGl0ZW0ub2Zmc2V0WCB8fCAwO1xyXG5cdFx0XHRcdHZhciBvZmZzZXRZID0gaXRlbS5vZmZzZXRZIHx8IDA7XHJcblx0XHRcdFx0dmFyIGNvbnRlbnRTY2FsZSA9IGl0ZW0uY29udGVudFNjYWxlIHx8IDE7XHJcblx0XHRcdFx0dmFyIGNvbnRlbnQgPSBpdGVtLmNvbnRlbnQgfHwgXCJcIjtcclxuXHRcdFx0XHR2YXIgY2VudGVyWCA9IGdhbWUud2lkdGggLyAyO1xyXG5cdFx0XHRcdHZhciBjZW50ZXJZID0gZ2FtZS5oZWlnaHQgLyAyO1xyXG5cdFx0XHRcdHZhciBjYWxsYmFjayA9IGl0ZW0uY2FsbGJhY2sgfHwgZmFsc2U7XHJcblx0XHRcdFx0dmFyIHRleHRBbGlnbiA9IGl0ZW0udGV4dEFsaWduIHx8IFwibGVmdFwiO1xyXG5cdFx0XHRcdHZhciBhdGxhc1BhcmVudCA9IGl0ZW0uYXRsYXNQYXJlbnQgfHwgXCJcIjtcclxuXHRcdFx0XHR2YXIgYnV0dG9uSG92ZXIgPSBpdGVtLmJ1dHRvbkhvdmVyIHx8IGNvbnRlbnQ7XHJcblx0XHRcdFx0dmFyIGJ1dHRvbkFjdGl2ZSA9IGl0ZW0uYnV0dG9uQWN0aXZlIHx8IGNvbnRlbnQ7XHJcblx0XHRcdFx0dmFyIGdyYXBoaWNDb2xvciA9IGl0ZW0uZ3JhcGhpY0NvbG9yIHx8IDB4ZmZmZmZmO1xyXG5cdFx0XHRcdHZhciBncmFwaGljT3BhY2l0eSA9IGl0ZW0uZ3JhcGhpY09wYWNpdHkgfHwgMTtcclxuXHRcdFx0XHR2YXIgZ3JhcGhpY1cgPSBpdGVtLmdyYXBoaWNXaWR0aCB8fCAyMDA7XHJcblx0XHRcdFx0dmFyIGdyYXBoaWNIID0gaXRlbS5ncmFwaGljSGVpZ2h0IHx8IDIwMDtcclxuXHRcdFx0XHR2YXIgZ3JhcGhpY1JhZGl1cyA9IGl0ZW0uZ3JhcGhpY1JhZGl1cyB8fCAwO1xyXG5cdFx0XHRcdHZhciBsb2NrUG9zaXRpb24gPSBpdGVtLmxvY2tQb3NpdGlvbiB8fCBmYWxzZTtcclxuXHJcblx0XHRcdFx0dmFyIGl0ZW1BbmNob3IgPSBpdGVtLmFuY2hvciB8fCB7eDowLHk6MH07XHJcblx0XHRcdFx0dmFyIGl0ZW1BbmdsZSA9IGl0ZW0uYW5nbGUgfHwgMDtcclxuXHRcdFx0XHR2YXIgaXRlbVggPSBpdGVtLnggfHwgMDtcclxuXHRcdFx0XHR2YXIgaXRlbVkgPSBpdGVtLnkgfHwgMDtcclxuXHRcdFx0XHR2YXIgaW1hZ2VGcmFtZSA9IGl0ZW0uZnJhbWUgfHwgbnVsbDtcclxuXHRcdFx0XHR2YXIgdGlsZVNwcml0ZVdpZHRoID0gaXRlbS50aWxlU3ByaXRlV2lkdGggfHwgZ2FtZS53aWR0aDtcclxuXHRcdFx0XHR2YXIgdGlsZVNwcml0ZUhlaWdodCA9IGl0ZW0udGlsZVNwcml0ZUhlaWdodCB8fCBnYW1lLmhlaWdodDtcclxuXHJcblx0XHRcdFx0bW9kYWxMYWJlbCA9IG51bGw7XHJcblxyXG5cdFx0XHRcdGlmIChpdGVtVHlwZSA9PT0gXCJ0ZXh0XCIgfHwgaXRlbVR5cGUgPT09IFwiYml0bWFwVGV4dFwiKSB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGl0ZW1UeXBlID09PSBcInRleHRcIikge1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQudGV4dCgwLCAwLCBjb250ZW50LCB7XHJcblx0XHRcdFx0XHRcdFx0Zm9udDogaXRlbUZvbnRTaXplICsgJ3B4ICcgKyBpdGVtRm9udGZhbWlseSxcclxuXHRcdFx0XHRcdFx0XHRmaWxsOiBcIiNcIiArIFN0cmluZyhpdGVtQ29sb3IpLnJlcGxhY2UoXCIweFwiLCBcIlwiKSxcclxuXHRcdFx0XHRcdFx0XHRzdHJva2U6IFwiI1wiICsgU3RyaW5nKGl0ZW1TdHJva2UpLnJlcGxhY2UoXCIweFwiLCBcIlwiKSxcclxuXHRcdFx0XHRcdFx0XHRzdHJva2VUaGlja25lc3M6IGl0ZW1TdHJva2VUaGlja25lc3MsXHJcblx0XHRcdFx0XHRcdFx0YWxpZ246IGl0ZW1BbGlnblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICd0ZXh0JztcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC51cGRhdGUoKTtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKChnYW1lLndpZHRoIC8gMikgLSAobW9kYWxMYWJlbC53aWR0aCAvIDIpKSArIG9mZnNldFg7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9ICgoZ2FtZS5oZWlnaHQgLyAyKSAtIChtb2RhbExhYmVsLmhlaWdodCAvIDIpKSArIG9mZnNldFk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuYml0bWFwVGV4dCgwLCAwLCBpdGVtRm9udGZhbWlseSwgU3RyaW5nKGNvbnRlbnQpLCBpdGVtRm9udFNpemUpO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ2JpdG1hcFRleHQnO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmFsaWduID0gdGV4dEFsaWduO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnVwZGF0ZVRleHQoKTtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAobW9kYWxMYWJlbC53aWR0aCAvIDIpKSArIG9mZnNldFg7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKG1vZGFsTGFiZWwuaGVpZ2h0IC8gMikpICsgb2Zmc2V0WTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJpbWFnZVwiKSB7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuaW1hZ2UoMCwgMCwgY29udGVudCk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnNjYWxlLnNldFRvKGNvbnRlbnRTY2FsZSwgY29udGVudFNjYWxlKTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnaW1hZ2UnO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKChtb2RhbExhYmVsLmhlaWdodCkgLyAyKSkgKyBvZmZzZXRZO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwidGlsZVNwcml0ZVwiKSB7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQudGlsZVNwcml0ZShpdGVtWCwgaXRlbVksXHJcblx0XHRcdFx0XHRcdHRpbGVTcHJpdGVXaWR0aCwgdGlsZVNwcml0ZUhlaWdodCwgY29udGVudCwgaW1hZ2VGcmFtZSk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnNjYWxlLnNldFRvKGNvbnRlbnRTY2FsZSwgY29udGVudFNjYWxlKTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYW5jaG9yLnNldFRvKGl0ZW1BbmNob3IueCwgaXRlbUFuY2hvci55KTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYW5nbGUgPSBpdGVtQW5nbGU7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ3RpbGVTcHJpdGUnO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwic3ByaXRlXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5zcHJpdGUoMCwgMCwgYXRsYXNQYXJlbnQsIGNvbnRlbnQpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ3Nwcml0ZSc7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtICgobW9kYWxMYWJlbC53aWR0aCkgLyAyKSkgKyBvZmZzZXRYO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJidXR0b25cIikge1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmJ1dHRvbigwLCAwLCBhdGxhc1BhcmVudCwgY2FsbGJhY2ssXHJcblx0XHRcdFx0XHRcdHRoaXMsIGJ1dHRvbkhvdmVyLCBjb250ZW50LCBidXR0b25BY3RpdmUsIGNvbnRlbnQpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ2J1dHRvbic7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtICgobW9kYWxMYWJlbC53aWR0aCkgLyAyKSkgKyBvZmZzZXRYO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiZ3JhcGhpY3NcIikge1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmdyYXBoaWNzKGdyYXBoaWNXLCBncmFwaGljSCk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmJlZ2luRmlsbChncmFwaGljQ29sb3IsIGdyYXBoaWNPcGFjaXR5KTtcclxuXHRcdFx0XHRcdGlmIChncmFwaGljUmFkaXVzIDw9IDApIHtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5kcmF3UmVjdCgwLCAwLCBncmFwaGljVywgZ3JhcGhpY0gpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5kcmF3Um91bmRlZFJlY3QoMCwgMCwgZ3JhcGhpY1csIGdyYXBoaWNILCBncmFwaGljUmFkaXVzKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuZW5kRmlsbCgpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKChtb2RhbExhYmVsLmhlaWdodCkgLyAyKSkgKyBvZmZzZXRZO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bW9kYWxMYWJlbFtcIl9vZmZzZXRYXCJdID0gMDtcclxuXHRcdFx0XHRtb2RhbExhYmVsW1wiX29mZnNldFlcIl0gPSAwO1xyXG5cdFx0XHRcdG1vZGFsTGFiZWxbXCJsb2NrUG9zaXRpb25cIl0gPSBsb2NrUG9zaXRpb247XHJcblx0XHRcdFx0bW9kYWxMYWJlbC5fb2Zmc2V0WCA9IG9mZnNldFg7XHJcblx0XHRcdFx0bW9kYWxMYWJlbC5fb2Zmc2V0WSA9IG9mZnNldFk7XHJcblxyXG5cclxuXHRcdFx0XHRpZiAoY2FsbGJhY2sgIT09IGZhbHNlICYmIGl0ZW1UeXBlICE9PSBcImJ1dHRvblwiKSB7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmlucHV0RW5hYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnBpeGVsUGVyZmVjdENsaWNrID0gdHJ1ZTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwucHJpb3JpdHlJRCA9IDEwO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5ldmVudHMub25JbnB1dERvd24uYWRkKGNhbGxiYWNrLCBtb2RhbExhYmVsKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChpdGVtVHlwZSAhPT0gXCJiaXRtYXBUZXh0XCIgJiYgaXRlbVR5cGUgIT09IFwiZ3JhcGhpY3NcIikge1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5icmluZ1RvVG9wKCk7XHJcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmFkZChtb2RhbExhYmVsKTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYnJpbmdUb1RvcCgpO1xyXG5cdFx0XHRcdFx0bW9kYWxHcm91cC5icmluZ1RvVG9wKG1vZGFsTGFiZWwpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmFkZChtb2RhbExhYmVsKTtcclxuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYnJpbmdUb1RvcChtb2RhbExhYmVsKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1vZGFsR3JvdXAudmlzaWJsZSA9IGZhbHNlO1xyXG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXSA9IG1vZGFsR3JvdXA7XHJcblxyXG5cdFx0fSxcclxuXHRcdHVwZGF0ZU1vZGFsVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSwgaW5kZXgsIGlkKSB7XHJcblx0XHRcdHZhciBpdGVtO1xyXG5cdFx0XHRpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBpbmRleCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdGl0ZW0gPSBnYW1lLm1vZGFsc1t0eXBlXS5nZXRDaGlsZEF0KGluZGV4KTtcclxuXHRcdFx0fSBlbHNlIGlmIChpZCAhPT0gdW5kZWZpbmVkICYmIGlkICE9PSBudWxsKSB7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoaXRlbS5jb250ZW50VHlwZSA9PT0gXCJ0ZXh0XCIpIHtcclxuXHRcdFx0XHRpdGVtLnRleHQgPSB2YWx1ZTtcclxuXHRcdFx0XHRpdGVtLnVwZGF0ZSgpO1xyXG5cdFx0XHRcdGlmIChpdGVtLmxvY2tQb3NpdGlvbiA9PT0gdHJ1ZSkge1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aXRlbS54ID0gKChnYW1lLndpZHRoIC8gMikgLSAoaXRlbS53aWR0aCAvIDIpKSArIGl0ZW0uX29mZnNldFg7XHJcblx0XHRcdFx0XHRpdGVtLnkgPSAoKGdhbWUuaGVpZ2h0IC8gMikgLSAoaXRlbS5oZWlnaHQgLyAyKSkgKyBpdGVtLl9vZmZzZXRZO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChpdGVtLmNvbnRlbnRUeXBlID09PSBcImJpdG1hcFRleHRcIikge1xyXG5cdFx0XHRcdGl0ZW0udGV4dCA9IHZhbHVlO1xyXG5cdFx0XHRcdGl0ZW0udXBkYXRlVGV4dCgpO1xyXG5cdFx0XHRcdGlmIChpdGVtLmxvY2tQb3NpdGlvbiA9PT0gdHJ1ZSkge1xyXG5cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aXRlbS54ID0gKChnYW1lLndpZHRoIC8gMikgLSAoaXRlbS53aWR0aCAvIDIpKSArIGl0ZW0uX29mZnNldFg7XHJcblx0XHRcdFx0XHRpdGVtLnkgPSAoKGdhbWUuaGVpZ2h0IC8gMikgLSAoaXRlbS5oZWlnaHQgLyAyKSkgKyBpdGVtLl9vZmZzZXRZO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChpdGVtLmNvbnRlbnRUeXBlID09PSBcImltYWdlXCIpIHtcclxuXHRcdFx0XHRpdGVtLmxvYWRUZXh0dXJlKHZhbHVlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0sXHJcblx0XHRnZXRNb2RhbEl0ZW06IGZ1bmN0aW9uICh0eXBlLCBpbmRleCkge1xyXG5cdFx0XHRyZXR1cm4gZ2FtZS5tb2RhbHNbdHlwZV0uZ2V0Q2hpbGRBdChpbmRleCk7XHJcblx0XHR9LFxyXG5cdFx0c2hvd01vZGFsOiBmdW5jdGlvbiAodHlwZSkge1xyXG5cdFx0XHRnYW1lLndvcmxkLmJyaW5nVG9Ub3AoZ2FtZS5tb2RhbHNbdHlwZV0pO1xyXG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gdHJ1ZTtcclxuXHRcdFx0Ly8geW91IGNhbiBhZGQgYW5pbWF0aW9uIGhlcmVcclxuXHRcdH0sXHJcblx0XHRoaWRlTW9kYWw6IGZ1bmN0aW9uICh0eXBlKSB7XHJcblx0XHRcdGdhbWUubW9kYWxzW3R5cGVdLnZpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0Ly8geW91IGNhbiBhZGQgYW5pbWF0aW9uIGhlcmVcclxuXHRcdH0sXHJcblx0XHRkZXN0cm95TW9kYWw6IGZ1bmN0aW9uICh0eXBlKSB7XHJcblx0XHRcdGdhbWUubW9kYWxzW3R5cGVdLmRlc3Ryb3koKTtcclxuXHRcdFx0ZGVsZXRlIGdhbWUubW9kYWxzW3R5cGVdO1xyXG5cdFx0fVxyXG5cdH07XHJcbn07XHJcbiIsIlxyXG5jbGFzcyBDbGllbnQge1xyXG4gICAgXHJcblx0Y29uc3RydWN0b3Ioc2VwdGlrb24pIHtcclxuICAgICAgICBcclxuXHRcdHRoaXMuc29ja2V0ID0gaW8uY29ubmVjdCgpO1xyXG4gICAgICAgIHRoaXMuc2VwdGlrb24gPSB0aGlzLnNvY2tldC5zZXB0aWtvbiA9IHNlcHRpa29uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdsb2cnLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0xPRzogJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNvY2tldC5vbigndXBkYXRlJywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGlmKGRhdGEudHlwZSA9PSBcInBlcnNvbm5lbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIGRhdGEuZGV0YWlscykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24uYWRkQ2xvbmUoZGF0YS5kZXRhaWxzW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVVBEQVRFOicpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ3JlcXVlc3QnLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JFUVVFU1Q6ICcpO1xyXG4gICAgICAgICAgICBzd2l0Y2goZGF0YS5kZXRhaWxzLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJhc2tTdGFydFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24uc2hvd01vZGFsKCdhc2tTdGFydCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNvY2tldC5vbignYWN0aW9uJywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YodGhpcy5zZXB0aWtvbltkYXRhLmNhbGxiYWNrXSkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbltkYXRhLmNhbGxiYWNrXShkYXRhLmRldGFpbHMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogbm8gbWV0aG9kIGZvdW5kIGNhbGxlZCBzZXB0aWtvbi5cIiArIGRhdGEuY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG5cclxuXHRhc2tOZXdQbGF5ZXIoKSB7XHJcblx0XHR0aGlzLnNvY2tldC5lbWl0KCduZXdQbGF5ZXInLCB7dXVpZDpsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VwdFVVSUQnKX0pO1xyXG5cdH1cclxuICAgIFxyXG4gICAgc2VuZElucHV0KHBheWxvYWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2VuZGluZyBpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ2lucHV0JywgcGF5bG9hZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudDtcclxuIiwiLy9Eb2N1bWVudGF0aW9uIGZvciBQaGFzZXIncyAoMi42LjIpIHNwcml0ZXM6OiBwaGFzZXIuaW8vZG9jcy8yLjYuMi9QaGFzZXIuU3ByaXRlLmh0bWxcclxuXHJcbmNsYXNzIENsb25lIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSwgdXVpZCkge1xyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2Nsb25lJywgZnJhbWUpO1xyXG4gICAgICAgIFxyXG4gICAgLy9zZXR1cCBwaHlzaWNzIHByb3BlcnRpZXNcclxuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC42NSk7XHJcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlQm9keSh0aGlzKTtcclxuICAgIC8vdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XHJcblxyXG4gICAgdGhpcy51dWlkID0gdXVpZDtcclxuICAgIC8vc2V0IHNpemVcclxuICAgIHRoaXMud2lkdGggPSAyNztcclxuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XHJcbiAgICBcclxuICAgIC8vc2V0IHJvdGF0aW9uICh0aGlzIHNob3VsZCBiZSBiYXNlZCBvbiB0aGUgYmFzZSB0aGlzIGNsb25lIG9jY3VwaWVzKVxyXG4gICAgdGhpcy5hbmdsZSA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFuZ2xlICogLTE7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gdGhpcy5nYW1lLnNlcHRpa29uLnBpeGVsc1RvVGlsZSh0aGlzLngsIHRoaXMueSk7XHJcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gdHJ1ZTtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIHJlbW92ZSgpIHtcclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgaGlnaGxpZ2h0T24oKSB7XHJcbiAgICB0aGlzLnRpbnQgPSAweEZGNTUwMDtcclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS5hbHBoYSA9IDE7XHJcbiAgfVxyXG4gIFxyXG4gIGhpZ2hsaWdodE9mZigpIHtcclxuICAgIHRoaXMudGludCA9IDB4ZmZmZmZmO1xyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLmFscGhhID0gMDtcclxuICB9XHJcbiAgXHJcbiAgZ2V0TGVnYWxNb3ZlcygpIHtcclxuICAgIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5waXhlbHNUb1RpbGUodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgdmFyIGN1cnJlbnRMZWdhbE1vdmVzID0gdGhpcy5nYW1lLnNlcHRpa29uLmdldExlZ2FsTW92ZXModGhpcy5nYW1lLmdsb2JhbC5sYXN0RGljZVJvbGwsIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyk7XHJcbiAgICB2YXIgbGVnYWxUaWxlc0FycmF5ID0gW107XHJcbiAgICBcclxuICAgIFxyXG4gICAgZm9yICh2YXIgdGlsZSBpbiBjdXJyZW50TGVnYWxNb3Zlcykge1xyXG4gICAgICAgIGxlZ2FsVGlsZXNBcnJheS5wdXNoKHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbY3VycmVudExlZ2FsTW92ZXNbdGlsZV0ueF1bY3VycmVudExlZ2FsTW92ZXNbdGlsZV0ueV0pO1xyXG4gICAgICAgIC8vbGVnYWxUaWxlc0FycmF5W2xlZ2FsVGlsZXNBcnJheS5sZW5ndGgtMV0uYWxwaGEgPSAwLjU7XHJcbiAgICAgICAgLy9sZWdhbFRpbGVzQXJyYXlbbGVnYWxUaWxlc0FycmF5Lmxlbmd0aC0xXS5sZWdhbEZvciA9IHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBsZWdhbFRpbGVzQXJyYXk7XHJcbiAgfVxyXG4gIFxyXG4gIG1vdmUoY29vcmRpbmF0ZXMpIHtcclxuICBcclxuICAgIC8vIENsZWFyIFwibGVnYWxGb3JcIlxyXG4gICAgZm9yICh2YXIgdGlsZSBpbiB0aGlzLmxlZ2FsVGlsZXNBcnJheSkge1xyXG4gICAgICAgIHRoaXMubGVnYWxUaWxlc0FycmF5W3RpbGVdLmFscGhhID0gMDtcclxuICAgICAgICBkZWxldGUgdGhpcy5sZWdhbFRpbGVzQXJyYXlbdGlsZV0ubGVnYWxGb3I7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIE1vdmUgdG8gbmV3IGhvbWVcclxuICAgIC8vIE5lZWQgdG8gYWRkIGEgY2hlY2sgZm9yIGFybWVkIG9wcG9uZW50cyAoYmlvZHJvbmVzL2VzcGlvbmFnZWQgY2xvbmVzL2Nsb25lcyBpbiBlbmVteSBiYXNlLCBldGMuKVxyXG4gICAgdmFyIHBvaW50cyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlVG9QaXhlbHMoY29vcmRpbmF0ZXMueCwgY29vcmRpbmF0ZXMueSk7XHJcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gZmFsc2U7XHJcbiAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLnkgLSBwb2ludHMueSArIHRoaXMueCAtIHBvaW50cy54KS50b0ZpeGVkKDEpO1xyXG4gICAgXHJcbiAgICAvLyBVcGRhdGUgdGhlIHBlcnNvbm5lbCBjb29yZGluYXRlIHByb3BlcnR5XHJcbiAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSB0cnVlO1xyXG4gICAgXHJcbiAgICAvLyBXYWl0IGZvciBhbmltYXRpb24gdG8gY29tcGxldGUsIHRoZW4gcHJvY2VzcyB0aWxlIHRyaWdnZXJcclxuICAgIHZhciB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcykudG8oIHt4OnBvaW50cy54LCB5OnBvaW50cy55fSwgKGRpc3RhbmNlKjExKSwgUGhhc2VyLkVhc2luZy5DdWJpYy5PdXQsIHRydWUpO1xyXG4gICAgdHdlZW4ub25Db21wbGV0ZS5hZGQodGhpcy5nYW1lLnNlcHRpa29uLnRyaWdnZXJUaWxlLCB0aGlzLmdhbWUuc2VwdGlrb24pO1xyXG4gICAgXHJcbiAgICAvLyBDbGVhciB0aGlzLmN1cnJlbnRMZWdhbE1vdmVzXHJcbiAgICBkZWxldGUgdGhpcy5sZWdhbFRpbGVzQXJyYXk7XHJcbiAgICBkZWxldGUgdGhpcy5jdXJyZW50TGVnYWxNb3ZlczsgICAgXHJcbiAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsb25lO1xyXG4iLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxyXG5jbGFzcyBDcm9zc2hhaXJzIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2Nyb3NzaGFpcnMnLCBmcmFtZSk7XHJcblxyXG4gICAgLy9zZXQgc2l6ZVxyXG4gICAgdGhpcy53aWR0aCA9IDM1OyBcclxuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XHJcblxyXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCl7XHJcbiAgICB0aGlzLnggPSB0aGlzLmdhbWUuaW5wdXQubW91c2VQb2ludGVyLng7XHJcbiAgICB0aGlzLnkgPSB0aGlzLmdhbWUuaW5wdXQubW91c2VQb2ludGVyLnk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3Jvc3NoYWlycztcclxuIiwiLy9Eb2N1bWVudGF0aW9uIGZvciBQaGFzZXIncyAoMi42LjIpIHNwcml0ZXM6OiBwaGFzZXIuaW8vZG9jcy8yLjYuMi9QaGFzZXIuU3ByaXRlLmh0bWxcclxuY2xhc3MgRGljZSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUpIHsgIFxyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2RpY2UnLCBmcmFtZSk7XHJcblxyXG4gICAgLy9zZXR1cCBwaHlzaWNzIHByb3BlcnRpZXNcclxuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcclxuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGVCb2R5KHRoaXMpO1xyXG4gICAgdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XHJcblxyXG4gICAgLy9zZXQgY2xpY2sgZXZlbnRcclxuICAgIHRoaXMuaW5wdXRFbmFibGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuZXZlbnRzLm9uSW5wdXREb3duLmFkZCh0aGlzLmNsaWNrZWQsIHRoaXMpO1xyXG5cclxuICAgIC8vc2V0IHNpemVcclxuICAgIHRoaXMud2lkdGggPSA1MDtcclxuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XHJcbiAgICBcclxuICAgIHRoaXMuYW5pbWF0aW9ucy5hZGQoJ2lkbGluZycsbnVsbCw1LHRydWUpO1xyXG4gICAgdGhpcy5hbmltYXRpb25zLnBsYXkoJ2lkbGluZycpO1xyXG5cclxuICB9XHJcblxyXG4gIGNsaWNrZWQgKCkge1xyXG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAnZGljZUNsaWNrZWQnfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGljZTtcclxuIiwiY2xhc3MgTWFzdGVyIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKCkgeyBcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hc3RlcjsiLCJjbGFzcyBPcmRuYW5jZSB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRuYW5jZTsiLCJjbGFzcyBQZXJzb25uZWwgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUpIHtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAnY2xvbmUnLCBmcmFtZSk7ICBcclxuICAgIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29ubmVsOyIsImNsYXNzIFJlc291cmNlcyB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICB0aGlzLnJlc291cmNlRW51bSA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgIE9YWUdFTjogMCxcclxuICAgICAgICBST0NLRVQ6IDEsXHJcbiAgICAgICAgTUVUQUw6IDIsXHJcbiAgICAgICAgRU5FUkdZOiAzLFxyXG4gICAgICAgIEJJT01BU1M6IDQsXHJcbiAgICAgICAgQklPRFJPTkU6IDUsXHJcbiAgICAgICAgVVJBTklVTTogNlxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnJlc291cmNlcyA9IHt9O1xyXG4gICAgZm9yKHZhciB0eXBlIGluIHRoaXMucmVzb3VyY2VFbnVtKSB7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZXNbdGhpcy5yZXNvdXJjZUVudW1bdHlwZV1dID0gNTtcclxuICAgIH07XHJcbiAgfVxyXG4gIFxyXG4gIGNoZWNrKHR5cGUsIGNvdW50KSB7XHJcbiAgICBpZih0aGlzLnJlc291cmNlc1t0aGlzLnJlc291cmNlRW51bVt0eXBlXV0gPiBjb3VudClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgXHJcbiAgZ2V0Q291bnQodHlwZSkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzW3R5cGVdO1xyXG4gIH1cclxuICAgIFxyXG4gIGFkZCh0eXBlLCBjb3VudCkge1xyXG4gIH1cclxuICBcclxuICByZW1vdmUodHlwZSwgY291bnQpIHtcclxuICAgIHRoaXMucmVzb3VyY2VzW3R5cGVdIC09IGNvdW50O1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VzOyIsImltcG9ydCBDbG9uZSBmcm9tICcuLi9wcmVmYWJzL2Nsb25lJztcclxuXHJcbmNsYXNzIFNlcHRpa29uIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHsgXHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgXHJcbiAgICB0aGlzLnBsYXllciA9IHtcclxuICAgICAgICBpZDogMCxcclxuICAgICAgICBwZXJzb25uZWxBcnJheTogW11cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5vcHBvbmVudCA9IHtcclxuICAgICAgICBwZXJzb25uZWxBcnJheTogW11cclxuICAgIH07XHJcbiAgICBcclxuICAgIHRoaXMuc2hvd25UaWxlcyA9IFtdO1xyXG4gICAgdGhpcy50aWxlQXJyYXkgPSBbXTtcclxuICAgIHRoaXMuYmdSYXRpbyA9IDA7XHJcbiAgICB0aGlzLndvcmxkUmF0aW8gPSAwO1xyXG4gICAgdGhpcy50dXJuU3RhdGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgU1RBUlQ6IDAsXHJcbiAgICAgICAgU0VMRUNUX0NMT05FOiAxLCBcclxuICAgICAgICBNT1ZFX0NMT05FOiAyLFxyXG4gICAgICAgIFNFTEVDVF9HVU5ORVI6IDMsXHJcbiAgICAgICAgU0VMRUNUX0FDVElPTl9PUkRFUjogNCwgXHJcbiAgICAgICAgQUNUSU9OOiA1LFxyXG4gICAgICAgIEVORDogNlxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRpcmVjdGlvbkVudW0gPSBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICBOT1JUSDoxLFxyXG4gICAgICAgIEVBU1Q6MixcclxuICAgICAgICBTT1VUSDo0LFxyXG4gICAgICAgIFdFU1Q6OFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnR1cm5TdGF0ZSA9IDA7XHJcblxyXG4gIH1cclxuXHJcbiAgc2hvd01vZGFsKHR5cGUpIHtcclxuICAgIHRoaXMuZ2FtZS5tb2RhbC5zaG93TW9kYWwodHlwZSk7XHJcbiAgfVxyXG5cclxuICBcclxuICBkaWNlUm9sbGVkKGRldGFpbHMpIHtcclxuICAgIHRoaXMuZ2FtZS5nbG9iYWwubGFzdERpY2VSb2xsID0gZGV0YWlscy52YWx1ZTtcclxuICB9XHJcbiAgXHJcbiAgYWRkQ2xvbmUoZGV0YWlscykge1xyXG4gICAgdmFyIHBvaW50ID0gdGhpcy50aWxlVG9QaXhlbHMoZGV0YWlscy54LCBkZXRhaWxzLnkpO1xyXG4gICAgdmFyIGNsb25lID0gbmV3IENsb25lKHRoaXMuZ2FtZSwgcG9pbnQueCwgcG9pbnQueSwgbnVsbCwgZGV0YWlscy51dWlkKTtcclxuICAgIGlmKGRldGFpbHMucGxheWVySUQgPT0gdGhpcy5wbGF5ZXIuaWQpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheS5wdXNoKGNsb25lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheS5wdXNoKGNsb25lKTtcclxuICAgIH1cclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFkZChjbG9uZSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVBbGxQZXJzb25uZWwoKXtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZih0aGlzLmdhbWUuYm9hcmRHcm91cC5jaGlsZHJlbltpXS5jb25zdHJ1Y3RvciA9PSBDbG9uZSl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNoaWxkcmVuW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgaS0tO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgdXBkYXRlUGxheWVyKGRldGFpbHMpIHtcclxuICAgIGZvciAodmFyIGkgaW4gZGV0YWlscykge1xyXG4gICAgICAgIHRoaXMucGxheWVyW2ldID0gZGV0YWlsc1tpXTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgY3JlYXRlVGlsZUFycmF5KGNvbHVtbnMsIHJvd3MsIHBvaW50KSB7XHJcbiAgICB0aGlzLnRpbGVEZXRhaWwgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTigndGlsZURldGFpbCcpO1xyXG5cclxuICAgIHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMgPSB7eDowLCB5OjB9O1xyXG5cclxuICAgIFxyXG4gICAgdGhpcy5tYXJnaW5Cb3R0b20gPSB0aGlzLm1hcmdpblRvcCA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmhlaWdodC8xNy40NzU7XHJcbiAgICB0aGlzLm1hcmdpbkxlZnQgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aC8yNDtcclxuICAgIHRoaXMubWFyZ2luUmlnaHQgPSAgdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGgvMjYuMzE1ODtcclxuICAgIHRoaXMudGlsZVdpZHRoID0gdGhpcy50aWxlSGVpZ2h0ID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGgvMzk7XHJcbiAgICB0aGlzLnBhZGRpbmcgPSAodGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGggLSAodGhpcy5tYXJnaW5MZWZ0ICsgdGhpcy5tYXJnaW5SaWdodCkgLSAodGhpcy50aWxlV2lkdGggKiAzMSkpLzMwO1xyXG4gICAgICAgIFxyXG4gICAgLy90aGlzLnRpbGVXaWR0aCA9IDI1Oy8vKHRoaXMuYmFja2dyb3VuZFdpZHRoIC0gKCh0aGlzLm1hcmdpbkxlZnQgKyB0aGlzLm1hcmdpblJpZ2h0KSArICh0aGlzLnBhZGRpbmcgKiAoY29sdW1ucyAtIDEpKSkpIC8gY29sdW1ucztcclxuICAgIC8vdGhpcy50aWxlSGVpZ2h0ID0gMjU7Ly8odGhpcy5iYWNrZ3JvdW5kSGVpZ2h0IC0gKCh0aGlzLm1hcmdpblRvcCArIHRoaXMubWFyZ2luQm90dG9tKSArICh0aGlzLnBhZGRpbmcgKiAocm93cyAtIDEpKSkpIC8gcm93cztcclxuICAgICAgICBcclxuICAgIHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMueCA9IHBvaW50LnggKyB0aGlzLm1hcmdpbkxlZnQ7XHJcbiAgICB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnkgPSBwb2ludC55ICsgdGhpcy5tYXJnaW5Ub3A7XHJcbiAgICBcclxuICAgIHZhciBncmFwaGljcyA9IHRoaXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XHJcbiAgICAvL2dyYXBoaWNzLmxpbmVTdHlsZSg0LCAweGZmZDkwMCwgMSk7XHJcbiAgICBncmFwaGljcy5iZWdpbkZpbGwoMHhmZmQ5MDAsIDEpO1xyXG4gICAgZ3JhcGhpY3MuZHJhd1JlY3QoMTAwLCAxMDAsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQpO1xyXG4gICAgXHJcbiAgICBmb3IgKHZhciBjb2x1bW4gPSAwOyBjb2x1bW4gPCBjb2x1bW5zOyBjb2x1bW4rKykge1xyXG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHJvd3M7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgeCA9IHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMueCArICh0aGlzLnRpbGVXaWR0aCAqIGNvbHVtbikgKyAodGhpcy5wYWRkaW5nICogY29sdW1uIC0gMSk7XHJcbiAgICAgICAgICAgIHZhciB5ID0gdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy55ICsgKHRoaXMudGlsZUhlaWdodCAqIHJvdykgKyAodGhpcy5wYWRkaW5nICogcm93IC0gMSk7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmdlbmVyYXRlVGV4dHVyZSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaWxlID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoeCwgeSwgZ3JhcGhpY3MuZ2VuZXJhdGVUZXh0dXJlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQoY3VycmVudFRpbGUpO1xyXG4gICAgICAgICAgICBjdXJyZW50VGlsZS5hbHBoYSA9IDA7IC8vIDAuMjU7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlLmlucHV0RW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlLmV2ZW50cy5vbklucHV0RG93bi5hZGQodGhpcy50aWxlQ2xpY2tlZCwgdGhpcyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMudGlsZUFycmF5W2NvbHVtbl0gPT0gJ3VuZGVmaW5lZCcpIFxyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbY29sdW1uXSA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjb2x1bW5dW3Jvd10gPSBjdXJyZW50VGlsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdyYXBoaWNzLmRlc3Ryb3koKTtcclxuICAgIFxyXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMudGlsZURldGFpbCkge1xyXG4gICAgICAgIGlmICghdGhpcy50aWxlRGV0YWlsLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBvYmogPSB0aGlzLnRpbGVEZXRhaWxba2V5XTtcclxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xyXG4gICAgICAgICAgICAvLyBza2lwIGxvb3AgaWYgdGhlIHByb3BlcnR5IGlzIGZyb20gcHJvdG90eXBlXHJcbiAgICAgICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGxvY2F0aW9uQ291bnQgPSBvYmpbcHJvcF0ubG9jYXRpb25zLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yKCB2YXIgaSA9IDA7IGkgPCBsb2NhdGlvbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIGNvb3JkcyA9IG9ialtwcm9wXS5sb2NhdGlvbnNbaV0uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSBjb29yZHNbMF07XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9IGNvb3Jkc1sxXTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZURhbWFnZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVPY2N1cGllZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZVggPSB4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZVkgPSB5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZVR5cGUgPSBvYmpbcHJvcF0udHlwZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMudGlsZUFycmF5W3hdW3ldICE9ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVOYW1lID0gb2JqW3Byb3BdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeCArIFwiOlwiICsgeSArIFwiIG5vdCBmb3VuZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtwcm9wXS5wcm9wZXJ0aWVzICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV1bJ3RpbGVQcm9wZXJ0aWVzJ10gPSBvYmpbcHJvcF0ucHJvcGVydGllcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH19XHJcblxyXG4gIHBpeGVsc1RvVGlsZSh4LCB5KSB7XHJcbiAgICB2YXIgeFRpbGUgPSAwO1xyXG4gICAgdmFyIHlUaWxlID0gMDtcclxuICAgIFxyXG4gICAgZm9yICh2YXIgY29sIGluIHRoaXMudGlsZUFycmF5KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcm93IGluIHRoaXMudGlsZUFycmF5W2NvbF0pIHtcclxuICAgICAgICAgICAgdmFyIG9iaiA9IHRoaXMudGlsZUFycmF5W2NvbF1bcm93XVxyXG4gICAgICAgICAgICBpZih4ID4gb2JqLnggJiYgeCA8IG9iai54ICsgb2JqLndpZHRoKVxyXG4gICAgICAgICAgICAgICAgeFRpbGUgPSBwYXJzZUludChjb2wpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHkgPiBvYmoueSAmJiB5IDwgb2JqLnkgKyBvYmouaGVpZ2h0KVxyXG4gICAgICAgICAgICAgICAgeVRpbGUgPSBwYXJzZUludChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7eDp4VGlsZSwgeTp5VGlsZX07XHJcbiAgfVxyXG4gIFxyXG4gIHRpbGVUb1BpeGVscyh4LCB5KSB7XHJcbiAgICB2YXIgdGlsZU9iaiA9IHRoaXMudGlsZUFycmF5W3hdW3ldO1xyXG4gICAgcmV0dXJuIHt4OnRpbGVPYmoueCArIHRpbGVPYmoud2lkdGgvMiwgeTp0aWxlT2JqLnkgKyB0aWxlT2JqLmhlaWdodC8yfTtcclxuICB9XHJcbiAgXHJcbiAgdGlsZUNsaWNrZWQob2JqKSB7XHJcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICd0aWxlQ2xpY2tlZCcsIHg6cGFyc2VJbnQob2JqLnRpbGVYKSwgeTpwYXJzZUludChvYmoudGlsZVkpfSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIFxyXG4gIHRyaWdnZXJUaWxlKGNhbGxlcikge1xyXG4gIFxyXG4gICAgdmFyIHRpbGUgPSB0aGlzLnRpbGVBcnJheVtjYWxsZXIuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVtjYWxsZXIuY3VycmVudFRpbGVDb29yZGluYXRlcy55XTtcclxuICAgIGNhbGxlci5pc0d1bm5lciA9IGZhbHNlO1xyXG4gICAgdmFyIHByb3BzID0gdGlsZS50aWxlUHJvcGVydGllcztcclxuICAgIFxyXG4gICAgc3dpdGNoKHRpbGUudGlsZVR5cGUpIHtcclxuICAgICAgICBjYXNlICdzdXJmYWNlJzogXHJcbiAgICAgICAgICAgIGNhbGxlci5pc0d1bm5lciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoVHVybigpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSAnYmF0dGxlJzpcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wcy5yZXNvdXJjZUNvc3RDb3VudCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgLy8gQ0FOIFRISVMgVEVBTSBBRkZPUkQgVEhFIENPU1Q/XHJcbiAgICAgICAgICAgICAgICAvLyBFWENIQU5HRSBSRVNPVVJDRVMgLy8gUEFZIFVQISFcclxuICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgYXZhaWxhYmxlIHJlc291cmNlIGNvdW50IGFuZCBwcmVwYXJlIHRvIG9mZmVyIFwiZ3VubmVyXCIgY2xvbmVzIGZvciBzZWxlY3Rpb24uXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiSXMgdGhpcyByZXNvdXJjZSBhdmFpbGFibGU/XCIpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gVHlwZXMgb2YgYmF0dGxlIHRpbGVzIHdpdGggYSBGSVJFIGFjdGlvbjpcclxuICAgICAgICAgICAgICAgIC8vICAtIFNhdGVsbGl0ZTogZ3VubmVyOnRydWUsIHByb2plY3RpbGU6IHRydWVcclxuICAgICAgICAgICAgICAgIC8vICAtIFRoZXJtaXRlOiBndW5uZXI6dHJ1ZSwgcHJvamVjdGlsZTogZmFsc2VcclxuICAgICAgICAgICAgICAgIC8vICAtIFNoaWVsZDogZ3VubmVyOnRydWUsIHByb2plY3RpbGU6IHRydWVcclxuICAgICAgICAgICAgICAgIC8vICAtIEJpb2Ryb25lOiBndW5uZXI6dHJ1ZSwgcHJvamVjdGlsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy8gIC0gTGFzZXI6IGd1bm5lcjp0cnVlLCBwcm9qZWN0aWxlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgLy8gIC0gUm9ja2V0OiBndW5uZXI6dHJ1ZSwgcHJvamVjdGlsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGlsZS50aWxlTmFtZSlcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsVGVhbS5vZmZlckd1bm5lcnMoKSA9PSBmYWxzZSAmJiAodGlsZS50aWxlTmFtZSA9PSBcInNhdGVsbGl0ZVwiIHx8IHRpbGUudGlsZU5hbWUgPT0gXCJ0aGVybWl0ZVwiIHx8IHRpbGUudGlsZU5hbWUgPT0gXCJzaGllbGRcIiB8fCB0aWxlLnRpbGVOYW1lID09IFwiYmlvZHJvbmVcIiB8fCB0aWxlLnRpbGVOYW1lID09IFwibGFzZXJcIiB8fCB0aWxlLnRpbGVOYW1lID09IFwicm9ja2V0XCIgKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoVHVybigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmxvY2FsVGVhbS5jaGVja1JlYyh0aGlzLmxvY2FsVGVhbS5yZWNFbnVtW3Byb3BzLnJlc291cmNlQ29zdFR5cGUudG9VcHBlckNhc2UoKV0sIHByb3BzLnJlc291cmNlQ29zdENvdW50KSk7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmxvY2FsVGVhbS5jaGVja1JlYyh0aGlzLmxvY2FsVGVhbS5yZWNFbnVtW3Byb3BzLnJlc291cmNlQ29zdFR5cGUudG9VcHBlckNhc2UoKV0sIHByb3BzLnJlc291cmNlQ29zdENvdW50KSA9PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsVGVhbS5yZW1vdmVSZWModGhpcy5sb2NhbFRlYW0ucmVjRW51bVtwcm9wcy5yZXNvdXJjZUNvc3RUeXBlLnRvVXBwZXJDYXNlKCldLCBwcm9wcy5yZXNvdXJjZUNvc3RDb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk5ldyBjb3VudCBvZiBcIiArIHByb3BzLnJlc291cmNlQ29zdFR5cGUgKyBcIiBpcyBcIiArIHRoaXMubG9jYWxUZWFtLmdldFJlY0NvdW50KHRoaXMubG9jYWxUZWFtLnJlY0VudW1bcHJvcHMucmVzb3VyY2VDb3N0VHlwZS50b1VwcGVyQ2FzZSgpXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMubG9jYWxUZWFtLm9mZmVyR3VubmVycygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0FjdGlvbiA9IHtwcm9wcywgY2FsbGVyfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gT0ZGRVIgR1VOTkVSUyBBTkQgQVdBSVQgU0VMRUNUSU9OIChyZW1lbWJlciB0aGUgY29zdCBwZXIgZ3VubmVyKVxyXG4gICAgICAgICAgICAvLyBUaGlzIHdpbGwgcmVxdWlyZSBhbiBhcnJheSBvZiBjbG9uZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSB0ZWFtLiBcclxuICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aGUgYXJyYXkgbG9va2luZyBmb3IgJ2lzR3VubmVyID09IHRydWUnXHJcbiAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBhbGwgXCJndW5uZXJcIiBjbG9uZXNcclxuICAgICAgICAgICAgLy8gQWxsb3cgc2VsZWN0aW9uIG9mIG9ubHkgYXMgbWFueSBhcyB0ZWFtIGNhbiBhZmZvcmRcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gVGhpcyB3aWxsIGNhbGwgdGhlIG1ldGhvZCBkZWZpbmVkIGluIEpTT04uIEluIHRoaXMgY2FzZSBmaXJpbmcgYSB3ZWFwb24uXHJcbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgdGhlIHNlbGVjdGVkIGd1bm5lcnMgYW5kIGNhbGwgdGhlIG1ldGhvZC5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlICdhcm1vcnknOlxyXG4gICAgICAgICAgICAvL1NFVCBURUFNIFdFQVBPTlMhXHJcbiAgICAgICAgICAgIC8vIFRoaXMgcmVxdWlyZXMgYSBUZWFtIHByb3BlcnR5IGZvciBzdG9yaW5nIGEgd2VhcG9ucyAoYXJtcz8pIGFycmF5LlxyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaFR1cm4oKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ3Byb2R1Y3Rpb24nOlxyXG4gICAgICAgICAgICAvLyBOT1RFOiBUaGVzZSBhcmUgcmVxdWlyZWQgaWYgcmVzb3VyY2VzIGFsbG93XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcHMucmVzb3VyY2VDb3N0Q291bnQgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIENBTiBUSElTIFRFQU0gQUZGT1JEIFRIRSBDT1NUP1xyXG4gICAgICAgICAgICAgICAgLy8gUmVxdWlyZXMgVGVhbSBvYmplY3QgdG8gY2hlY2sgZm9yIHJlc291cmNlc1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgY29zdCBjb3VudFxyXG4gICAgICAgICAgICAgICAgLy8gR2V0IGNvc3QgdHlwZVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgeWllbGQgY291bnRcclxuICAgICAgICAgICAgICAgIC8vIEdldCB5aWVsZCB0eXBlXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEV4ZWN1dGUgdHJhbnNhY3Rpb25cclxuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoVHVybigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlICdsb2NrJzpcclxuICAgICAgICAgICAgLy8gTk9USElORyBIRVJFIChtYXliZSBhbiB1cGRhdGUgZmVhdHVyZT8/KVxyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaFR1cm4oKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfTsgXHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gQ09NTUlUIEFDVElPTlxyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gICAgZmlyZSh3ZWFwb25UeXBlLCBjYWxsZXIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRmlyaW5nIHRoZSBcIiArIHdlYXBvblR5cGUpO1xyXG4gICAgXHJcbiAgICBzd2l0Y2ggKHdlYXBvblR5cGUpIHtcclxuICAgICAgICBjYXNlICdsYXNlcic6XHJcbiAgICAgICAgICAgIC8vZm9yICh2YXIgaSBpbiB0aGlzLmxvY2FsVGVhbS5zZWxlY3RlZEd1bm5lcnMpIHtcclxuICAgICAgICAgICAgLy8gICAgdGhpcy5zaG9vdFRpbGUodGhpcy5sb2NhbFRlYW0uc2VsZWN0ZWRHdW5uZXJzW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMpO1xyXG4gICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgLy9icmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSAnc2F0ZWxsaXRlJzpcclxuICAgICAgICAgICAgLy8gUExBQ0UgQSBTQVRFTExJVEVcclxuICAgICAgICAgICAvLyBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSAndGhlcm1pdGUnOlxyXG4gICAgICAgICAgICAvL3RoaXMuc2hvb3RUaWxlKGNhbGxlci5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLCB0cnVlKTtcclxuICAgICAgICAgICAgLy9icmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSAnc2hpZWxkJzpcclxuICAgICAgICAgICAgLy9icmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSAnYmlvZHJvbmUnOlxyXG4gICAgICAgICAgICAvL2JyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlICdyb2NrZXQnOiBcclxuICAgICAgICAgICAgLy9icmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmxvY2FsVGVhbS5zZWxlY3RlZEd1bm5lcnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvb3RUaWxlKHRoaXMubG9jYWxUZWFtLnNlbGVjdGVkR3VubmVyc1tpXS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH07XHJcbiAgICBcclxuICAgIHRoaXMubG9jYWxUZWFtLmNsZWFyR3VubmVycygpO1xyXG4gICAgLy90aGlzLmdhbWUuc2VwdGlrb24udHVyblN0YXRlID0gdGhpcy5nYW1lLnNlcHRpa29uLnR1cm5TdGF0ZUVudW0uU1RBUlQ7XHJcbiAgICB0aGlzLmZpbmlzaFR1cm4oKTtcclxuICB9XHJcbiAgXHJcbiAgcmVwYWlyKGNvdW50KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlcGFpciBcIiArIGNvdW50ICsgXCIgb2YgdGhlIHRoaW5ncyFcIik7XHJcbiAgfVxyXG4gIFxyXG4gIGVzcGlvbmFnZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiR2ltbWUgeWVyIGNsb25lISFcIik7XHJcbiAgfVxyXG4gIFxyXG4gIHRha2VvdmVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJHaW1tZSB5ZXIgc2F0ZWxsaXRlISFcIik7XHJcbiAgfVxyXG4gIFxyXG4gIGNvdW50ZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkdpbW1lIGJhY2sgbXkgY2xvbmUhIVwiKTtcclxuICB9XHJcbiAgXHJcbiAga2lsbEJpb2Ryb25lKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJZZXIgc291bGQgYmV0dGVyIGJlbG9uZyB0byBKZXN1cyEgQ3V6IHllciBhc3MgYmVsb25ncyB0byBtZSFcIik7XHJcbiAgfVxyXG4gIFxyXG4gIGZpbmlzaFR1cm4oKSB7XHJcbiAgICB0aGlzLnR1cm5TdGF0ZSA9IHRoaXMuZ2FtZS5zZXB0aWtvbi50dXJuU3RhdGVFbnVtLlNUQVJUO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIkFsYXMuIFlvdXIgdHVybiBpcyBvdmVyLiBcIik7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBnZXRMZWdhbE1vdmVzKG1vdmVzLCBjdXJyZW50Q29vcmQsIHByZXZpb3VzQ29vcmQpIHtcclxuXHRtb3Zlcy0tO1xyXG5cdHZhciBsZWdhbE1vdmVzID0gW107XHJcblx0Zm9yKHZhciBkaXJlY3Rpb24gaW4gdGhpcy5kaXJlY3Rpb25FbnVtKSB7XHRcclxuXHRcdC8vIE5FRUQgVE8gQ0hFQ0sgRk9SIExPQ0tTXHJcblx0XHR2YXIgbW92ZUNoZWNrID0gdGhpcy5nZXRDb29yZEZyb21EaXJlY3Rpb24oY3VycmVudENvb3JkLGRpcmVjdGlvbik7XHJcbiAgICAgICAgaWYgKG1vdmVDaGVjayA9PSBmYWxzZSlcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHZhciB0aWxlVG9DaGVjayA9IHRoaXMudGlsZUFycmF5W21vdmVDaGVjay54XVttb3ZlQ2hlY2sueV07XHJcblxyXG4gICAgICAgIC8vIHRpbGUgaXMgbGVnYWwgSUYgZGlyZWN0aW9uIGlzIG9rIEFORCB0aWxlIGlzIG5vdCBkYW1hZ2VkIEFORCAoIHRoZXJlIGlzIG5vIHByZXZpb3VzIGNvb3JkaW5hdGUgT1IgdGhpcyBpcyBub3QgdGhlIHByZXZpb3VzIGNvb3JkaW5hdGUgKVxyXG5cdFx0aWYodGhpcy5jaGVja1dhbGwodGhpcy5kaXJlY3Rpb25FbnVtW2RpcmVjdGlvbl0sIGN1cnJlbnRDb29yZCkgPT09IHRydWUgJiYgdGlsZVRvQ2hlY2sudGlsZURhbWFnZWQgPT09IGZhbHNlICYmICgodHlwZW9mIHByZXZpb3VzQ29vcmQgPT09ICd1bmRlZmluZWQnKSB8fCAoKHR5cGVvZiBwcmV2aW91c0Nvb3JkICE9PSAndW5kZWZpbmVkJykgJiYgKEpTT04uc3RyaW5naWZ5KG1vdmVDaGVjaykgIT09IEpTT04uc3RyaW5naWZ5KHByZXZpb3VzQ29vcmQpKSApKSkge1xyXG5cdFx0XHQvLyBDaGVjayBpZiB0aWxlIGlzIG9jY3VwaWVkXHJcbiAgICAgICAgICAgIGlmKG1vdmVzPT0wKXtcclxuICAgICAgICAgICAgICAgIGlmKHRpbGVUb0NoZWNrLnRpbGVPY2N1cGllZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWdhbE1vdmVzLnB1c2gobW92ZUNoZWNrKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR2YXIgcmV0dXJuQXJyYXkgPSAodGhpcy5nZXRMZWdhbE1vdmVzKG1vdmVzLCBtb3ZlQ2hlY2ssIGN1cnJlbnRDb29yZCkpO1xyXG5cdFx0XHRcdGZvcih2YXIgaW5kZXggaW4gcmV0dXJuQXJyYXkpIHtcclxuXHRcdFx0XHRcdGlmKEpTT04uc3RyaW5naWZ5KHJldHVybkFycmF5W2luZGV4XSkgIT09IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRDb29yZCkpXHJcblx0XHRcdFx0XHRcdGxlZ2FsTW92ZXMucHVzaChyZXR1cm5BcnJheVtpbmRleF0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gbGVnYWxNb3ZlcztcclxuICB9XHJcbiAgICBcclxuICBnZXRDb29yZEZyb21EaXJlY3Rpb24ob3JpZ2luQ29vcmQsZGlyZWN0aW9uKSB7XHJcblxyXG5cdHZhciBkaXI9e05PUlRIOnt4OjAseTotMX0sRUFTVDp7eDoxLHk6MH0sU09VVEg6e3g6MCx5OjF9LFdFU1Q6e3g6LTEseTowfX07XHJcbiAgICBcclxuICAgIHZhciBvYmogPSB7eDoocGFyc2VJbnQob3JpZ2luQ29vcmQueCkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS54KSksIHk6KHBhcnNlSW50KG9yaWdpbkNvb3JkLnkpICsgcGFyc2VJbnQoZGlyW2RpcmVjdGlvbl0ueSkpfTtcclxuICAgIGlmKG9iai54IDwgMCB8fCBvYmoueSA8IDApIFxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHRlbHNlXHJcbiAgICAgICAgcmV0dXJuIHt4OihwYXJzZUludChvcmlnaW5Db29yZC54KSArIHBhcnNlSW50KGRpcltkaXJlY3Rpb25dLngpKSwgeToocGFyc2VJbnQob3JpZ2luQ29vcmQueSkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS55KSl9O1xyXG5cdFx0XHJcbiAgfVxyXG4gIFxyXG4gIHNob3dUaWxlcyh0aWxlc0FycmF5KSB7XHJcbiAgICBmb3IgKHZhciBpIGluIHRpbGVzQXJyYXkpIHtcclxuICAgICAgICB0aGlzLnNob3duVGlsZXMucHVzaCh0aWxlc0FycmF5W2ldKTtcclxuICAgICAgICB0aWxlc0FycmF5W2ldLmFscGhhID0gMC41O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBoaWRlVGlsZXModGlsZUFycmF5KSB7XHJcbiAgICBpZighdGlsZUFycmF5KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnNob3duVGlsZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93blRpbGVzW2ldLmFscGhhID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93blRpbGVzID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG9vdFRpbGUoY2xvbmVDb29yZGluYXRlcykge1xyXG4gIFxyXG4gICAgdmFyIGN1cnJlbnRYID0gY2xvbmVDb29yZGluYXRlcy54O1xyXG4gICAgdmFyIGN1cnJlbnRZID0gY2xvbmVDb29yZGluYXRlcy55O1xyXG4gICAgdmFyIGN1cnJlbnRUaWxlID0gdGhpcy50aWxlQXJyYXlbY3VycmVudFhdW2N1cnJlbnRZXTtcclxuICAgIGRvIHtcclxuICAgICAgICBjdXJyZW50WCsrO1xyXG4gICAgICAgIGN1cnJlbnRUaWxlID0gdGhpcy50aWxlQXJyYXlbY3VycmVudFhdW2N1cnJlbnRZXTtcclxuICAgIH0gd2hpbGUgKGN1cnJlbnRUaWxlLnRpbGVUeXBlID09ICdzcGFjZScgfHwgY3VycmVudFRpbGUudGlsZVR5cGUgPT0gJ3N1cmZhY2UnIHx8IGN1cnJlbnRUaWxlLnRpbGVEYW1hZ2VkID09IHRydWUpO1xyXG4gICAgXHJcbiAgICBjdXJyZW50VGlsZS50aW50ID0gMFgzMzMzMzM7XHJcbiAgICBjdXJyZW50VGlsZS5hbHBoYSA9IDAuODtcclxuICAgIGN1cnJlbnRUaWxlLnRpbGVEYW1hZ2VkID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgdGhpcy50ZXN0ID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoY3VycmVudFRpbGUueCwgY3VycmVudFRpbGUueSArKGN1cnJlbnRUaWxlLmhlaWdodC8yKSwgJ2Jvb20nKTtcclxuICAgIHRoaXMudGVzdC5hbmdsZSA9IDI3MDtcclxuICAgIHRoaXMudGVzdC5hbmNob3Iuc2V0KDAuNSwwLjcpO1xyXG4gICAgdGhpcy50ZXN0LmFuaW1hdGlvbnMuYWRkKCdib29tJyk7XHJcbiAgICB0aGlzLnRlc3QuYW5pbWF0aW9ucy5wbGF5KCdib29tJywgMjAsIGZhbHNlLCB0cnVlKTtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBjaGVja1dhbGwoZGlyZWN0aW9uLCBjdXJyZW50Q29vcmRpbmF0ZSkge1xyXG4gICAgdGhpcy53YWxsR3JpZCA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRKU09OKCd3YWxsR3JpZCcpO1xyXG5cdHN3aXRjaCAoZGlyZWN0aW9uKXtcclxuXHRcdGNhc2UgdGhpcy5kaXJlY3Rpb25FbnVtLk5PUlRIOiAvLyBVUFxyXG5cdFx0XHRpZiAocGFyc2VJbnQodGhpcy53YWxsR3JpZC5ncmlkW2N1cnJlbnRDb29yZGluYXRlLnhdW2N1cnJlbnRDb29yZGluYXRlLnldJnRoaXMuZGlyZWN0aW9uRW51bS5OT1JUSCkgPT0gMCkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHRcdGNhc2UgdGhpcy5kaXJlY3Rpb25FbnVtLlNPVVRIOiAvLyBET1dOXHJcblx0XHRcdGlmIChwYXJzZUludCh0aGlzLndhbGxHcmlkLmdyaWRbY3VycmVudENvb3JkaW5hdGUueF1bY3VycmVudENvb3JkaW5hdGUueV0mdGhpcy5kaXJlY3Rpb25FbnVtLlNPVVRIKSA9PSAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdFx0Y2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uRUFTVDogLy8gUklHSFRcclxuXHRcdFx0aWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uRUFTVCkgPT0gMCkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHRcdGNhc2UgdGhpcy5kaXJlY3Rpb25FbnVtLldFU1Q6IC8vIExFRlRcclxuXHRcdFx0aWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uV0VTVCkgPT0gMCkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgc2V0dXAoKSB7XHJcbiAgICAvL1Nob3VsZCBhc2sgZm9yIHBsYXllciBuYW1lIGFuZCBhc3NpZ24gYSBjb2xvci4gXHJcbiAgICAvL0dpdmUgd2FpdGluZyBpbmRpY2F0b3JcclxuICAgIC8vT2ZmZXIgc29tZSB3YXkgdG8gcGljayBhIGdhbWU/IElESy4uXHJcbiAgfVxyXG4gIFxyXG4gIHN0YXJ0R2FtZSgpIHtcclxuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xyXG4gIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXB0aWtvbjtcclxuIiwiaW1wb3J0IFJlc291cmNlcyBmcm9tICcuLi9wcmVmYWJzL3Jlc291cmNlcyc7XHJcbmltcG9ydCBQZXJzb25uZWwgZnJvbSAnLi4vcHJlZmFicy9wZXJzb25uZWwnO1xyXG5pbXBvcnQgT3JkbmFuY2UgZnJvbSAnLi4vcHJlZmFicy9vcmRuYW5jZSc7XHJcbmltcG9ydCBDbG9uZSBmcm9tICcuLi9wcmVmYWJzL2Nsb25lJzsgLy8gVGhpcyB3aWxsIGJlIGluY29ycG9yYXRlZCBpbiBwZXJzb25uZWxcclxuXHJcbmNsYXNzIFRlYW0ge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoZ2FtZSkgeyBcclxuICAgIHRoaXMucmVjID0gbmV3IFJlc291cmNlcygpO1xyXG4gICAgdGhpcy5yZWNFbnVtID0gdGhpcy5yZWMucmVzb3VyY2VFbnVtO1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgIFxyXG4gICAgdGhpcy5wZXJzb25uZWwgPSBbXTtcclxuICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzID0gW107XHJcbiAgfVxyXG4gIFxyXG4gIHJlZnJlc2goKSB7XHJcbiAgICBmb3IgKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLnBlcnNvbm5lbFtpXS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy9SZXNvdXJjZSBJbnRlcmZhY2VcclxuICBnZXRSZWNDb3VudCh0eXBlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZWMuZ2V0Q291bnQodHlwZSk7XHJcbiAgfVxyXG4gIFxyXG4gIGNoZWNrUmVjKHR5cGUsIGNvdW50KSB7XHJcbiAgICBpZiAodGhpcy5nZXRSZWNDb3VudCh0eXBlKSA+PSBjb3VudCkgXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIFxyXG4gIGV4Y2hhbmdlUmVjKGNvc3RUeXBlLCBjb3N0Q291bnQsIHlpZWxkVHlwZSwgeWllbGRDb3VudCkge1xyXG4gIH1cclxuICBcclxuICBhZGRSZWModHlwZSwgY291bnQpIHtcclxuICAgIHJldHVybiB0aGlzLnJlYy5hZGQodHlwZSwgY291bnQpO1xyXG4gIH1cclxuICBcclxuICByZW1vdmVSZWModHlwZSwgY291bnQpIHtcclxuICAgIHJldHVybiB0aGlzLnJlYy5yZW1vdmUodHlwZSwgY291bnQpO1xyXG4gIH1cclxuICBcclxuICBhZGRDbG9uZSh4LCB5LCBwcm9wcykge1xyXG4gICAgdmFyIHBvaW50ID0gdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVUb1BpeGVscyh4LHkpO1xyXG4gICAgdmFyIGNsb25lID0gbmV3IENsb25lKHRoaXMuZ2FtZSxwb2ludC54LHBvaW50LnkpO1xyXG4gICAgY2xvbmUuY3VycmVudFRpbGVDb29yZGluYXRlcy54ID0geDtcclxuICAgIGNsb25lLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueSA9IHk7XHJcbiAgICBcclxuICAgIGZvciAodmFyIGkgaW4gcHJvcHMpIHtcclxuICAgICAgICBjbG9uZVtpXSA9IHByb3BzW2ldO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wZXJzb25uZWwucHVzaChjbG9uZSk7XHJcbiAgICB0aGlzLmdhbWUuc3RhZ2UuYWRkQ2hpbGQoY2xvbmUpO1xyXG4gIH1cclxuICBcclxuICBnZXRDbG9uZShjb29yZCkge1xyXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbCkge1xyXG4gICAgICAgIGlmKHRoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueCA9PSBjb29yZC54ICYmIHRoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueSA9PSBjb29yZC55KXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGVyc29ubmVsW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAga2lsbENsb25lKGNvb3JkKSB7XHJcbiAgICB2YXIgY2xvbmUgPSB0aGlzLmdldENsb25lKGNvb3JkKTtcclxuICAgIHRoaXMuZ2FtZS5zdGFnZS5yZW1vdmVDaGlsZChjbG9uZSk7XHJcbiAgICBcclxuICAgIHZhciBpbmRleCA9IHRoaXMucGVyc29ubmVsLmluZGV4T2YoY2xvbmUpO1xyXG4gICAgdGhpcy5wZXJzb25uZWwuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgXHJcbiAgICBjbG9uZS5yZW1vdmUoKTtcclxuICB9XHJcbiAgICBcclxuICBvZmZlckxlZ2FsQ2xvbmVzKCkge1xyXG4gICAgLy8gT2ZmZXIgY2xvbmVzIHRoYXQgaGF2ZSBsZWdhbCBtb3Zlc1xyXG4gICAgZm9yKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XHJcbiAgICAgICAgdmFyIG1vdmVzID0gdGhpcy5wZXJzb25uZWxbaV0uZ2V0TGVnYWxNb3ZlcygpO1xyXG5cclxuICAgICAgICBpZihtb3ZlcyAhPSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBlcnNvbm5lbFtpXS5oaWdobGlnaHRPbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgb2ZmZXJHdW5uZXJzKCkge1xyXG4gICAgLy8gT2ZmZXIgZ3VubmVyIFxyXG4gICAgdmFyIGd1bm5lckZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcclxuICAgICAgICBpZih0aGlzLnBlcnNvbm5lbFtpXS5pc0d1bm5lcikge1xyXG4gICAgICAgICAgICBndW5uZXJGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vdGhpcy5wZXJzb25uZWxbaV0uaGlnaGxpZ2h0T24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ3VubmVyRm91bmQ7XHJcbiAgfVxyXG4gIFxyXG4gIHNlbGVjdEd1bm5lcihjb29yZHMpIHtcclxuICAgIHZhciBjbG9uZSA9IHRoaXMuZ2V0Q2xvbmUoY29vcmRzKTtcclxuICAgIGlmKCFjbG9uZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBpZighY2xvbmUuaXNHdW5uZXIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgdmFyIGV4aXN0aW5nR3VubmVyID0gdGhpcy5zZWxlY3RlZEd1bm5lcnMuaW5kZXhPZihjbG9uZSk7XHJcbiAgICBpZihleGlzdGluZ0d1bm5lciA+PSAwKXtcclxuICAgICAgICBjbG9uZS5oaWdobGlnaHRPZmYoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycy5zcGxpY2UoZXhpc3RpbmdHdW5uZXIsIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjbG9uZS5oaWdobGlnaHRPbigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzLnB1c2goY2xvbmUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBjbGVhckd1bm5lcnMoKSB7XHJcbiAgICBmb3IgKHZhciBpIGluIHRoaXMuc2VsZWN0ZWRHdW5uZXJzKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnNbaV0uaGlnaGxpZ2h0T2ZmKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGVjdGVkR3VubmVycyA9IFtdO1xyXG4gIH1cclxuICBcclxuICBzZWxlY3RDbG9uZUZvck1vdmUoY29vcmRzKSB7ICAgIFxyXG4gIFxyXG4gICAgdmFyIGNsb25lID0gdGhpcy5nZXRDbG9uZShjb29yZHMpO1xyXG4gICAgaWYoIWNsb25lKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcclxuICAgICAgICB0aGlzLnBlcnNvbm5lbFtpXS5oaWdobGlnaHRPZmYoKTtcclxuICAgIH1cclxuICAgIHRoaXMubGVnYWxUaWxlcyA9IGNsb25lLmdldExlZ2FsTW92ZXMoKTtcclxuICAgIHRoaXMuc2VsZWN0ZWRDbG9uZSA9IGNsb25lO1xyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnNob3dUaWxlcyh0aGlzLmxlZ2FsVGlsZXMpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIG1vdmVTZWxlY3RlZENsb25lKGNvb3Jkcykge1xyXG4gICAgZm9yKHZhciBpIGluIHRoaXMubGVnYWxUaWxlcykge1xyXG4gICAgICAgIGlmKHRoaXMubGVnYWxUaWxlc1tpXS50aWxlWCA9PSBjb29yZHMueCAmJiB0aGlzLmxlZ2FsVGlsZXNbaV0udGlsZVkgPT0gY29vcmRzLnkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENsb25lLm1vdmUoY29vcmRzKTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRDbG9uZTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlcztcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbTsiLCJjbGFzcyBPcmRuYW5jZSB7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLk9yZG5hbmNlID0gT3JkbmFuY2U7XHJcbiIsImNsYXNzIFBlcnNvbm5lbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodHlwZSwgeCwgeSwgdXVpZCkge1xyXG4gICAgICAgIHRoaXMudHlwZUVudW0gPSBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICAgICAgY2xvbmU6IDAsXHJcbiAgICAgICAgICAgIGJpb2Ryb25lOiAxXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Jpb2Ryb25lJzpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjbG9uZSc6XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVFbnVtW3R5cGVdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBtb3ZlKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLlBlcnNvbm5lbCA9IFBlcnNvbm5lbDtcclxuIiwidmFyIFBlcnNvbm5lbCA9IHJlcXVpcmUoJy4vcGVyc29ubmVsJykuUGVyc29ubmVsO1xyXG52YXIgUmVzb3VyY2UgPSByZXF1aXJlKCcuL3Jlc291cmNlJykuUmVzb3VyY2U7XHJcbnZhciBPcmRuYW5jZSA9IHJlcXVpcmUoJy4vb3JkbmFuY2UnKS5PcmRuYW5jZTtcclxuXHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNvY2tldElELCBpZCwgdXVpZCkgeyBcclxuICAgICAgICB0aGlzLnNvY2tldElEID0gc29ja2V0SUQ7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkOyAvL3BsYXllciAxIG9yIHBsYXllciAyOyB0aGlzIHdpbGwgZGV0ZXJtaW5lIHRoZSBzaWRlIG9mIHRoZSBib2FyZCBhdCBjbGllbnQgc3RhcnQuXHJcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZDtcclxuICAgICAgICB0aGlzLnBlcnNvbm5lbEFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5vcmRuYW5jZUFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5yZWFkeVRvU3RhcnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXJ0aW5nQ2xvbmVDb3VudCA9IDU7ICAgIFxyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgYWRkUGVyc29ubmVsKHR5cGUsIHgsIHksIHV1aWQpIHtcclxuICAgICAgICBpZih0eXBlID09IFwiY2xvbmVcIiAmJiB0aGlzLmdldFBlcnNvbm5lbCh0eXBlKS5sZW5ndGggPCB0aGlzLnN0YXJ0aW5nQ2xvbmVDb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLnBlcnNvbm5lbEFycmF5LnB1c2gobmV3IFBlcnNvbm5lbCgnY2xvbmUnLCB4LCB5LCB1dWlkKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlUGVyc29ubmVsKHBlcnNvbm5lbCwgcHVyZ2VBbGwpIHtcclxuICAgICAgICBpZiAocHVyZ2VBbGwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5wZXJzb25uZWxBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRQZXJzb25uZWwodHlwZSkge1xyXG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbEFycmF5KSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGVyc29ubmVsQXJyYXlbaV0udHlwZSA9PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLnBlcnNvbm5lbEFycmF5W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVybkFycmF5O1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5QbGF5ZXIgPSBQbGF5ZXI7XHJcbiIsImNsYXNzIFJlc291cmNlcyB7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLlJlc291cmNlcyA9IFJlc291cmNlcztcclxuIiwidmFyIFBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyJykuUGxheWVyO1xyXG5cclxuY2xhc3MgU2VwdGlrb24ge1xyXG4gICAgXHJcblx0Y29uc3RydWN0b3IoaW8pIHtcclxuICAgICAgICB0aGlzLmlvID0gaW87XHJcbiAgICAgICAgdGhpcy5sYXN0UGxheWVySUQgPSAwO1xyXG4gICAgICAgIHRoaXMucGxheWVyc0FycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAwO1xyXG4gICAgICAgIHRoaXMudHVyblN0YXRlID0gMDtcclxuICAgICAgICB0aGlzLnV1aWQgPSByZXF1aXJlKCd1dWlkL3Y0JykoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJJRCA9IHRoaXMubGFzdFBsYXllcklEO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY3VycmVudERpY2VWYWx1ZSA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgICAgIFNFVFVQOiAwLFxyXG4gICAgICAgICAgICBHQU1FOiAxLCBcclxuICAgICAgICAgICAgUEFVU0U6IDIsXHJcbiAgICAgICAgICAgIEdBTUVPVkVSOiAzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50dXJuU3RhdGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgICAgIFJPTEw6IDAsXHJcbiAgICAgICAgICAgIE1PVkU6IDEsIFxyXG4gICAgICAgICAgICBBQ1RJT046IDIsXHJcbiAgICAgICAgICAgIEVORDogM1xyXG4gICAgICAgIH0pOyAgXHJcblxyXG4gICAgICAgIHRoaXMudGlsZUNvbHVtbnMgPSAzMTtcclxuICAgICAgICB0aGlzLnRpbGVSb3dzID0gMjE7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZUFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5jcmVhdGVUaWxlQXJyYXkoKTsgICAgICBcclxuXHR9XHJcblxyXG5cdGFkZE5ld1BsYXllcihzb2NrZXRJRCwgdXVpZCkge1xyXG4gICAgICAgIHRoaXMubGFzdFBsYXllcklEKys7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVySUQgPSB0aGlzLmxhc3RQbGF5ZXJJRDtcclxuICAgICAgICB2YXIgcGxheWVyID0gbmV3IFBsYXllcihzb2NrZXRJRCwgdGhpcy5sYXN0UGxheWVySUQsIHV1aWQpO1xyXG4gICAgICAgIHRoaXMucGxheWVyc0FycmF5LnB1c2gocGxheWVyKTtcclxuICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3VwZGF0ZVBsYXllcicsIGRldGFpbHM6IHtpZDogdGhpcy5sYXN0UGxheWVySUR9fSwgc29ja2V0SUQpO1xyXG4gICAgICAgIHJldHVybiBwbGF5ZXI7XHJcblx0fVxyXG5cclxuICAgIHNldFBsYXllclN0YXRlKHN0YXRlKSB7XHJcbiAgICAgICAgc3dpdGNoIChzdGF0ZS52YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlICdyZXNldCc6IFxyXG4gICAgICAgICAgICAgICAgdmFyIHBsYXllciA9IHRoaXMuZ2V0UGxheWVyQnlTb2NrZXRJRChzdGF0ZS5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIucmVtb3ZlUGVyc29ubmVsKG51bGwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJyZW1vdmVBbGxQZXJzb25uZWxcIiwgZGV0YWlsczoge319LCBwbGF5ZXIuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzogXHJcbiAgICAgICAgICAgICAgICB2YXIgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXJCeVNvY2tldElEKHN0YXRlLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgIHBsYXllci5yZWFkeVRvU3RhcnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wcG9uZW50ID0gdGhpcy5nZXRQbGF5ZXJPcHBvbmVudChwbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgaWYoIW9wcG9uZW50IHx8ICFvcHBvbmVudC5yZWFkeVRvU3RhcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllciByZWFkeSB0byBzdGFydCwgYnV0IHdhaXRpbmcgb24gb3Bwb25lbnQhIFxcblRPRE86IFxcbiAtIFNlbmQgbWVzc2FnZSB0byBib3RoIHVzZXJzJyBIVURzLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVycyBoYXZlIGJvdGggY29uZmlybWVkISBSYXR0bGUgZGVtIGJvbmVzLi4uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHBDbG9uZXMgPSBvcHBvbmVudC5nZXRQZXJzb25uZWwoJ2Nsb25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIG9wcENsb25lcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDpvcHBDbG9uZXNbaV0ueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6b3BwQ2xvbmVzW2ldLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dWlkOm9wcENsb25lc1tpXS51dWlkLCAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywge3R5cGU6XCJwZXJzb25uZWxcIiwgZGV0YWlsczpwYXlsb2FkfSwgcGxheWVyLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihzdGF0ZS52YWx1ZSArIFwiIGlzIG5vdCBhIHZhbGlkIHBsYXllciBzdGF0ZSFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFBsYXllck9wcG9uZW50KHBsYXllcikge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcnNBcnJheS5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcnNBcnJheVswXSA9PT0gcGxheWVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheVsxXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXlbMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRQbGF5ZXJCeVVVSUQodXVpZCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXJzQXJyYXlbaV0udXVpZCA9PSB1dWlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5W2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFBsYXllckJ5U29ja2V0SUQoaWQpIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMucGxheWVyc0FycmF5KSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyc0FycmF5W2ldLnNvY2tldElEID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXlbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBleGlzdHNQbGF5ZXJVVUlEKHV1aWQpIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMucGxheWVyc0FycmF5KSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyc0FycmF5W2ldLnV1aWQgPT0gdXVpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNsaWNrZWQoZGF0YSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vY2hlY2sgZ2FtZSBzdGF0ZVxyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5nYW1lU3RhdGUpIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSB0aGlzLmdhbWVTdGF0ZUVudW0uU0VUVVA6XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jaGVjayBpZiB0aWxlIGlzIHR5cGU6IHN1cmZhY2UsIGJhdHRsZSwgYXJtb3J5LCBsb2NrLCBvciBwcm9kdWN0aW9uXHJcbiAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHRpbGUgYmVsb25ncyB0byBwbGF5ZXIncyB0ZWFtXHJcbiAgICAgICAgICAgICAgICAvL2FkZCBjbG9uZSB0byBwbGF5ZXIncyBwZXJzb25uZWxcclxuICAgICAgICAgICAgICAgIHZhciBwbGF5ZXIgPSB0aGlzLmdldFBsYXllckJ5U29ja2V0SUQoZGF0YS5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlQ2xvbmUocGxheWVyLCBkYXRhLngsIGRhdGEueSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSB0aGlzLmdhbWVTdGF0ZUVudW0uR0FNRTpcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL2NoZWNrIHR1cm5TdGF0ZVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwbGFjZUNsb25lKHBsYXllciwgeCwgeSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHR5cGVvZihwbGF5ZXIpICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZFRpbGUgPSB0aGlzLmdldFRpbGUoeCwgeSk7XHJcbiAgICAgICAgICAgIGlmKHBsYXllci5pZCAhPSBzZWxlY3RlZFRpbGUub3duZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoc2VsZWN0ZWRUaWxlLnR5cGUgPT0gXCJsb2NrXCIgfHwgc2VsZWN0ZWRUaWxlLnR5cGUgPT0gXCJiYXR0bGVcIiB8fCBzZWxlY3RlZFRpbGUudHlwZSA9PSBcImFybW9yeVwiIHx8IHNlbGVjdGVkVGlsZS50eXBlID09IFwicHJvZHVjdGlvblwiIHx8IHNlbGVjdGVkVGlsZS50eXBlID09IFwic3VyZmFjZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXVpZCA9IHJlcXVpcmUoJ3V1aWQvdjQnKSgpO1xyXG4gICAgICAgICAgICAgICAgaWYocGxheWVyLmFkZFBlcnNvbm5lbCgnY2xvbmUnLCB4LCB5LCB1dWlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwiYWRkQ2xvbmVcIiwgZGV0YWlsczoge3g6eCwgeTp5LCBwbGF5ZXJJRDogcGxheWVyLmlkLCB1dWlkOnV1aWR9fSwgcGxheWVyLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXIuZ2V0UGVyc29ubmVsKCdjbG9uZScpLmxlbmd0aCA9PSBwbGF5ZXIuc3RhcnRpbmdDbG9uZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VuZGluZyBtb2RhbCByZXF1ZXN0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3JlcXVlc3QnLCB7Y2FsbGJhY2s6XCJtb2RhbFwiLCBkZXRhaWxzOiB7dHlwZTpcImFza1N0YXJ0XCJ9fSwgcGxheWVyLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SOiBwbGF5ZXIgbm90IGZvdW5kIScpOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVRpbGVBcnJheSgpIHtcclxuICAgICAgICB2YXIgdGlsZUpTT04gPSByZXF1aXJlKCcuLi8uLi9hc3NldHMvdGlsZURldGFpbC5qc29uJyk7XHJcblxyXG4gICAgICAgIGZvcih2YXIgYyA9IDA7IGMgPCB0aGlzLnRpbGVDb2x1bW5zOyBjKyspIHtcclxuICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbY10gPSBbXTtcclxuICAgICAgICAgICAgZm9yKHZhciByID0gMDsgciA8IHRoaXMudGlsZVJvd3M7IHIrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbY11bcl0gPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRpbGVKU09OKSB7XHJcbiAgICAgICAgICAgIGlmICghdGlsZUpTT04uaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgb2JqID0gdGlsZUpTT05ba2V5XTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcclxuICAgICAgICAgICAgICAgIC8vIHNraXAgbG9vcCBpZiB0aGUgcHJvcGVydHkgaXMgZnJvbSBwcm90b3R5cGVcclxuICAgICAgICAgICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgbG9jYXRpb25Db3VudCA9IG9ialtwcm9wXS5sb2NhdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2NhdGlvbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29vcmRzID0gb2JqW3Byb3BdLmxvY2F0aW9uc1tpXS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBjb29yZHNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBjb29yZHNbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0uZGFtYWdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLm9jY3VwaWVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udHlwZSA9IG9ialtwcm9wXS50eXBlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoeCA8IDkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0ub3duZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeCA+IDIxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLm93bmVyID0gMjtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMudGlsZUFycmF5W3hdW3ldICE9ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5uYW1lID0gb2JqW3Byb3BdLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4ICsgXCI6XCIgKyB5ICsgXCIgbm90IGZvdW5kIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtwcm9wXS5wcm9wZXJ0aWVzICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldWyd0aWxlUHJvcGVydGllcyddID0gb2JqW3Byb3BdLnByb3BlcnRpZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUaWxlKHgsIHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWxlQXJyYXlbeF1beV07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJvbGxEaWNlKGRhdGEpIHtcclxuICAgICAgICBpZih0aGlzLnR1cm5TdGF0ZSA9PSB0aGlzLnR1cm5TdGF0ZUVudW0uUk9MTCAmJiB0aGlzLmdhbWVTdGF0ZSA9PSB0aGlzLmdhbWVTdGF0ZUVudW0uR0FNRSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREaWNlVmFsdWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDE7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwiZGljZVJvbGxlZFwiLCBkZXRhaWxzOiB7dmFsdWU6dGhpcy5jdXJyZW50RGljZVZhbHVlfX0sIGRhdGEuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2xvZycsIHttc2c6XCJQbGF5ZXIgcm9sbGVkIFwiICsgdGhpcy5jdXJyZW50RGljZVZhbHVlfSk7XHJcbiAgICAgICAgICAgIHRoaXMudHVyblN0YXRlKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQoZGF0YSkge1xyXG4gICAgICAgIGlmKHR5cGVvZihkYXRhLnByb3BlcnR5KSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3Jlc3BvbnNlJywge2RldGFpbHM6dGhpc1tkYXRhLnByb3BlcnR5XX0sIGRhdGEuc29ja2V0SUQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZW1pdChtc2csIGRhdGEsIHNvY2tldElEKSB7XHJcbiAgICAgICAgaWYobXNnID09IFwicmVzcG9uc2VcIiB8fCBtc2cgPT0gXCJyZXF1ZXN0XCIgfHwgbXNnID09IFwidXBkYXRlXCIpIHtcclxuICAgICAgICAgICAgaWYodHlwZW9mKHNvY2tldElEKSA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gU29ja2V0SUQgZm91bmQhXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW8uc29ja2V0cy5jb25uZWN0ZWRbc29ja2V0SURdLmVtaXQobXNnLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBpZihtc2cgPT0gXCJhY3Rpb25cIikge1xyXG4gICAgICAgICAgICBpZih0eXBlb2Yoc29ja2V0SUQpID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBTb2NrZXRJRCBmb3VuZCFcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pby5zb2NrZXRzLmNvbm5lY3RlZFtzb2NrZXRJRF0uZW1pdChtc2csIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZihtc2cgPT0gXCJsb2dcIikge1xyXG4gICAgICAgICAgICB0aGlzLmlvLnNvY2tldHMuZW1pdChtc2csIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgYnJvYWRjYXN0KG1zZywgZGF0YSkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KG1zZywgZGF0YSwgdGhpcy5wbGF5ZXJzQXJyYXlbaV0uc29ja2V0SUQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLlNlcHRpa29uID0gU2VwdGlrb247XHJcbiIsImltcG9ydCBTZXB0aWtvbiBmcm9tICcuLi9wcmVmYWJzL3NlcHRpa29uJztcclxuXHJcbmNsYXNzIEJvb3QgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBwcmVsb2FkKCkge1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdwcmVsb2FkZXInLCAnYXNzZXRzL3ByZWxvYWRlci5naWYnKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIHRoaXMuZ2FtZS5pbnB1dC5tYXhQb2ludGVycyA9IDE7XHJcbiAgICB0aGlzLmdhbWUuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gdHJ1ZTtcclxuICAgIC8vc2V0dXAgZGV2aWNlIHNjYWxpbmdcclxuICAgIGlmICghdGhpcy5nYW1lLmRldmljZS5kZXNrdG9wKSB7XHJcbiAgICAgIC8vdGhpcy5nYW1lLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuU0hPV19BTEw7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5wYXJlbnRJc1dpbmRvdyA9IHRydWU7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlJFU0laRTtcclxuICAgICAgdGhpcy5nYW1lLnNjYWxlLm1pbldpZHRoID0gIDQ4MDtcclxuICAgICAgdGhpcy5nYW1lLnNjYWxlLm1pbkhlaWdodCA9IDI2MDtcclxuICAgICAgdGhpcy5nYW1lLnNjYWxlLmZvcmNlT3JpZW50YXRpb24odHJ1ZSk7XHJcbiAgICAgIC8vdGhpcy5nYW1lLnNjYWxlLnNldFNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluaXRHbG9iYWxWYXJpYWJsZXMoKTtcclxuICAgIFxyXG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdwcmVsb2FkZXInKTtcclxuICB9XHJcblxyXG4gIGluaXRHbG9iYWxWYXJpYWJsZXMoKXtcclxuICAgIHRoaXMuZ2FtZS5nbG9iYWwgPSB7XHJcbiAgICAgIHNjb3JlOiAwLFxyXG4gICAgICBsYXN0RGljZVJvbGw6IDAsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb3Q7XHJcbiIsIlxyXG5jbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuICBcclxuICBjcmVhdGUoKSB7XHJcbiAgXHJcbiAgICAvL3RoaXMuZ2FtZS5pbnB1dC5vbkRvd24uYWRkKHRoaXMudG9nZ2xlRnVsbHNjcmVlbiwgdGhpcyk7XHJcbiAgICB0aGlzLmdhbWUuc3RhZ2UuZGlzYWJsZVZpc2liaWxpdHlDaGFuZ2UgPSB0cnVlO1xyXG4gICAgXHJcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cCA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcclxuICAgIHRoaXMuZ2FtZS5tb2RhbCA9IG5ldyBnYW1lTW9kYWwodGhpcy5nYW1lKTtcclxuICAgIHRoaXMuY3JlYXRlTW9kYWxzKCk7XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwwLCdiYWNrZ3JvdW5kJyk7XHJcbiAgICB0aGlzLmJhY2tncm91bmQuYW5jaG9yLnNldFRvKDAuNSwwLjUpO1xyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2VudGVyWCA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYO1xyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2VudGVyWSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZO1xyXG5cclxuICAgIHZhciBzY2FsZSA9IHdpbmRvdy5pbm5lcldpZHRoL3RoaXMuYmFja2dyb3VuZC5oZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKHRoaXMuYmFja2dyb3VuZCk7XHJcblxyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLmNyZWF0ZVRpbGVBcnJheSgzMSwgMjEsIHt4OjAtdGhpcy5iYWNrZ3JvdW5kLndpZHRoLzIsIHk6MC10aGlzLmJhY2tncm91bmQuaGVpZ2h0LzJ9KTtcclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnNjYWxlLnNldFRvKHNjYWxlKTtcclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnggPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWDtcclxuXHJcbiAgICBpZih0aGlzLmdhbWUuc2VwdGlrb24ucGxheWVyLmlkID09IDEpIHtcclxuICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSA9IC05MDsgXHJcbiAgICAgICAgLy90aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclk7IC8vIENlbnRlcmVkIG9uIFNlcHRpa29uIExvZ29cclxuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSArICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIG9wcG9uZW50J3Mgc2lkZVxyXG4gICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSAtICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIHRoaXMgcGxheWVyJ3Mgc2lkZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSA9IDkwOyBcclxuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWTsgLy8gQ2VudGVyZWQgb24gU2VwdGlrb24gTG9nb1xyXG4gICAgICAgIC8vdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZICsgKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gb3Bwb25lbnQncyBzaWRlXHJcbiAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZIC0gKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gdGhpcyBwbGF5ZXIncyBzaWRlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVNb2RhbHMoKSB7XHJcbiAgICAgIHRoaXMuZ2FtZS5tb2RhbC5jcmVhdGVNb2RhbChcclxuICAgICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJhc2tTdGFydFwiLFxyXG4gICAgICAgIGluY2x1ZGVCYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgICAgIG1vZGFsQ2xvc2VPbklucHV0OiB0cnVlLFxyXG4gICAgICAgIGl0ZW1zQXJyOiBbe1xyXG4gICAgICAgICAgICB0eXBlOiBcImdyYXBoaWNzXCIsXHJcbiAgICAgICAgICAgIGdyYXBoaWNDb2xvcjogXCIweGZmZmZmZlwiLFxyXG4gICAgICAgICAgICBncmFwaGljV2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgZ3JhcGhpY0hlaWdodDogMzAwLFxyXG4gICAgICAgICAgICBncmFwaGljUmFkaXVzOiA0MFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiQXJlIHlvdSBoYXBweSB3aXRoXFxuIHRoYXQgY2xvbmUgbGF5b3V0P1wiLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkx1Y2tpZXN0IEd1eVwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMjIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIjB4MWUxZTFlXCIsXHJcbiAgICAgICAgICAgIG9mZnNldFk6IC01MFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiBcInRleHRfeWVzXCIsXHJcbiAgICAgICAgICAgIG9mZnNldFk6IDEwMCxcclxuICAgICAgICAgICAgb2Zmc2V0WDogLTgwLFxyXG4gICAgICAgICAgICBjb250ZW50U2NhbGU6IDAuNixcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5tb2RhbC5oaWRlTW9kYWwoXCJhc2tTdGFydFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDonc2V0UGxheWVyU3RhdGUnLCB2YWx1ZTonc3RhcnQnfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcclxuICAgICAgICAgICAgY29udGVudDogXCJ0ZXh0X25vXCIsXHJcbiAgICAgICAgICAgIG9mZnNldFk6IDEwMCxcclxuICAgICAgICAgICAgb2Zmc2V0WDogODAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRTY2FsZTogMC42LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLm1vZGFsLmhpZGVNb2RhbChcImFza1N0YXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OidzZXRQbGF5ZXJTdGF0ZScsIHZhbHVlOidyZXNldCd9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIF1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ01vdXNlJywgNzAwLCAzMik7XHJcbiAgICBcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdNb3VzZSBYOiAnICsgdGhpcy5nYW1lLmlucHV0LngsIDcwMCwgNjQpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ01vdXNlIFk6ICcgKyB0aGlzLmdhbWUuaW5wdXQueSwgNzAwLCA5Mik7XHJcbiAgfVxyXG4gIFxyXG4gIHJlbmRlciAoKSB7XHJcbiAgXHJcbiAgICB2YXIgeCA9IDMyO1xyXG4gICAgdmFyIHkgPSAwO1xyXG4gICAgdmFyIHlpID0gMzI7XHJcbiAgICAvKlxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ1ZpZXdwb3J0JywgeCwgeSArPSB5aSk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ1ZpZXdwb3J0IFdpZHRoOiAnICsgdGhpcy5nYW1lLnNjYWxlLnZpZXdwb3J0V2lkdGgsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3dpbmRvdy5pbm5lcldpZHRoOiAnICsgd2luZG93LmlubmVyV2lkdGgsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3dpbmRvdy5vdXRlcldpZHRoOiAnICsgd2luZG93Lm91dGVyV2lkdGgsIHgsIHkgKz0geWkpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdWaWV3cG9ydCBIZWlnaHQ6ICcgKyB0aGlzLmdhbWUuc2NhbGUudmlld3BvcnRIZWlnaHQsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3dpbmRvdy5pbm5lckhlaWdodDogJyArIHdpbmRvdy5pbm5lckhlaWdodCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93Lm91dGVySGVpZ2h0OiAnICsgd2luZG93Lm91dGVySGVpZ2h0LCB4LCB5ICs9IHlpKTtcclxuXHJcbiAgICAvLyAgRGV2aWNlOiBIb3cgdG8gZ2V0IGRldmljZSBzaXplLlxyXG5cclxuICAgIC8vICBVc2Ugd2luZG93LnNjcmVlbi53aWR0aCBmb3IgZGV2aWNlIHdpZHRoIGFuZCB3aW5kb3cuc2NyZWVuLmhlaWdodCBmb3IgZGV2aWNlIGhlaWdodC4gXHJcbiAgICAvLyAgLmF2YWlsV2lkdGggYW5kIC5hdmFpbEhlaWdodCBnaXZlIHlvdSB0aGUgZGV2aWNlIHNpemUgbWludXMgVUkgdGFza2JhcnMuIChUcnkgb24gYW4gaVBob25lLikgXHJcbiAgICAvLyAgRGV2aWNlIHNpemUgaXMgc3RhdGljIGFuZCBkb2VzIG5vdCBjaGFuZ2Ugd2hlbiB0aGUgcGFnZSBpcyByZXNpemVkIG9yIHJvdGF0ZWQuXHJcblxyXG4gICAgeCA9IDM1MDtcclxuICAgIHkgPSAwO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdCb2FyZCBHcm91cCcsIHgsIHkgKz0geWkpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC54OiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAueCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5nYW1lLmJvYXJkR3JvdXAueTogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnksIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoOiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGgsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuZ2FtZS5ib2FyZEdyb3VwLmhlaWdodDogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmhlaWdodCwgeCwgeSArPSB5aSk7XHJcblxyXG4gICAgeCA9IDMyO1xyXG4gICAgeSA9IDMwMDtcclxuXHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnQmFja2dyb3VuZCBEZXRhaWwnLCB4LCB5ICs9IHlpKTtcclxuXHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLng6ICcgKyB0aGlzLmJhY2tncm91bmQueCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLnk6ICcgKyB0aGlzLmJhY2tncm91bmQueSwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLndpZHRoOiAnICsgdGhpcy5iYWNrZ3JvdW5kLndpZHRoLCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQuaGVpZ2h0OiAnICsgdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLnNjYWxlOiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAuc2NhbGUueCwgeCwgeSArPSB5aSk7XHJcbiAgICAqL1xyXG4gICAgfVxyXG4gICAgXHJcbiAgdG9nZ2xlRnVsbHNjcmVlbigpIHtcclxuICAgIGlmKHRoaXMuZ2FtZS5zY2FsZS5pc0Z1bGxTY3JlZW4pIHtcclxuICAgICAgICB0aGlzLmdhbWUuc2NhbGUuc3RvcEZ1bGxTY3JlZW4oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnN0YXJ0RnVsbFNjcmVlbihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xyXG4iLCJjbGFzcyBNZW51IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgLy9hZGQgYmFja2dyb3VuZCBpbWFnZVxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwwLCdiYWNrZ3JvdW5kJyk7XHJcbiAgICB0aGlzLmJnUmF0aW8gPSB0aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aCAvIHRoaXMuYmFja2dyb3VuZC50ZXh0dXJlLmhlaWdodDtcclxuICAgIHRoaXMud29ybGRSYXRpbyA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAvIHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQ7XHJcbiAgICBpZiAoKCh0aGlzLndvcmxkUmF0aW8gLSB0aGlzLmJnUmF0aW8pIC8gMiAqIHRoaXMuZ2FtZS53b3JsZC53aWR0aCkgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLndpZHRoID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodC90aGlzLmJhY2tncm91bmQudGV4dHVyZS5oZWlnaHQqdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUud2lkdGg7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnggPSAodGhpcy5nYW1lLndvcmxkLndpZHRoIC0gdGhpcy5iYWNrZ3JvdW5kLndpZHRoKSAvIDI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aDtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQuaGVpZ2h0ID0gdGhpcy5nYW1lLndvcmxkLndpZHRoL3RoaXMuYmFja2dyb3VuZC50ZXh0dXJlLndpZHRoKnRoaXMuYmFja2dyb3VuZC50ZXh0dXJlLmhlaWdodDtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQueSA9ICh0aGlzLmdhbWUud29ybGQuaGVpZ2h0IC0gdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCkgLyAyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vYWRkIGludHJvIHRleHRcclxuICAgIHRoaXMuZ2FtZW92ZXJUZXh0ID0gdGhpcy5hZGQudGV4dCh0aGlzLmdhbWUud29ybGQuY2VudGVyWCx0aGlzLmdhbWUud29ybGQuY2VudGVyWSwgXCJTY29yZSA9IFwiK3RoaXMuZ2FtZS5nbG9iYWwuc2NvcmUsIHtcclxuICAgICAgZm9udDogJzQycHggQXJpYWwnLCBmaWxsOiAnI2ZmZmZmZicsIGFsaWduOiAnY2VudGVyJ1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmdhbWVvdmVyVGV4dC5hbmNob3Iuc2V0KDAuNSk7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5vbkRvd24uYWRkKHRoaXMub25JbnB1dERvd24sIHRoaXMpO1xyXG5cclxuICAgIC8vcHJldmVudCBhY2NpZGVudGFsIGNsaWNrLXRocnUgYnkgbm90IGFsbG93aW5nIHN0YXRlIHRyYW5zaXRpb24gZm9yIGEgc2hvcnQgdGltZVxyXG4gICAgdGhpcy5jYW5Db250aW51ZVRvTmV4dFN0YXRlID0gZmFsc2U7XHJcbiAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKFBoYXNlci5UaW1lci5TRUNPTkQgKiAwLjUsIGZ1bmN0aW9uKCl7IHRoaXMuY2FuQ29udGludWVUb05leHRTdGF0ZSA9IHRydWU7IH0sIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuc2F2ZVZhcnNUb0xvY2FsU3RvcmFnZSgpO1xyXG4gICAgdGhpcy5yZXNldEdsb2JhbFZhcmlhYmxlcygpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVZhcnNUb0xvY2FsU3RvcmFnZSgpe1xyXG4gICAgdmFyIG1heCA9IGxvY2FsU3RvcmFnZS5tYXhTY29yZSB8fCAwOyAvL2RlZmF1bHQgdmFsdWUgb2YgMCBpcyBpdCBkb2VzIG5vdCBleGlzdFxyXG4gICAgaWYgKHRoaXMuZ2FtZS5nbG9iYWwuc2NvcmUgPiBtYXgpeyBsb2NhbFN0b3JhZ2UubWF4U2NvcmUgPSB0aGlzLmdhbWUuZ2xvYmFsLnNjb3JlOyB9XHJcbiAgfVxyXG5cclxuICByZXNldEdsb2JhbFZhcmlhYmxlcygpe1xyXG4gICAgdGhpcy5nYW1lLmdsb2JhbC5zY29yZSA9IDA7XHJcbiAgfVxyXG4gIHVwZGF0ZSgpIHt9XHJcblxyXG4gIG9uSW5wdXREb3duICgpIHtcclxuICAgIGlmKHRoaXMuY2FuQ29udGludWVUb05leHRTdGF0ZSl7XHJcbiAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnbWVudScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7XHJcbiIsImNsYXNzIFByZWxvYWRlciBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuYXNzZXQgPSBudWxsO1xyXG4gICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJlbG9hZCgpIHtcclxuICAgIC8vc2V0dXAgbG9hZGluZyBiYXJcclxuICAgIHRoaXMuYXNzZXQgPSB0aGlzLmFkZC5zcHJpdGUodGhpcy5nYW1lLndpZHRoICogMC41IC0gMTEwLCB0aGlzLmdhbWUuaGVpZ2h0ICogMC41IC0gMTAsICdwcmVsb2FkZXInKTtcclxuICAgIHRoaXMubG9hZC5zZXRQcmVsb2FkU3ByaXRlKHRoaXMuYXNzZXQpO1xyXG4gICAgXHJcbiAgICAvL1NldHVwIGxvYWRpbmcgYW5kIGl0cyBldmVudHNcclxuICAgIHRoaXMubG9hZC5vbkxvYWRDb21wbGV0ZS5hZGRPbmNlKHRoaXMub25Mb2FkQ29tcGxldGUsIHRoaXMpO1xyXG4gICAgdGhpcy5sb2FkUmVzb3VyY2VzKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkUmVzb3VyY2VzKCkge1xyXG4gICAgICBcclxuICAgIC8vTUVOVSBSRVNPVVJDRVNcclxuICAgIC8vbWVudSBiYWNrZ3JvdW5kXHJcbiAgICAvL3RleHQgaW1hZ2VzXHJcbiAgICAvL211c2ljIGZpbGVzID9cclxuICAgIFxyXG4gICAgLy9sb2FkIGdhbWUgZGF0YVxyXG4gICAgdGhpcy5nYW1lLmxvYWQuanNvbigndGlsZURldGFpbCcsICdhc3NldHMvdGlsZURldGFpbC5qc29uJyk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5qc29uKCd3YWxsR3JpZCcsICdhc3NldHMvd2FsbEdyaWQuanNvbicpO1xyXG4gIFxyXG4gICAgLy9HQU1FIFJFU09VUkNFU1xyXG4gICAgLy9nYW1lIGJvYXJkIGJhY2tncm91bmRcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdiYWNrZ3JvdW5kJywnYXNzZXRzL21lZGl1bV9ib2FyZC5wbmcnKTtcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdkaWNlJywnYXNzZXRzL3RleHRfZ28ucG5nJyk7XHJcbiAgICBcclxuICAgIC8vIG1vZGFsIGltYWdlc1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfeWVzJywnYXNzZXRzL3RleHRfeWVzLnBuZycpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfbm8nLCdhc3NldHMvdGV4dF9uby5wbmcnKTtcclxuXHJcbiAgICAvL3BsYXllciB0b2tlbnMgc3ByaXRlc2hlZXRzXHJcbiAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnY2xvbmUnLCAnYXNzZXRzL2Nsb25lLnBuZycsMTEwLDE2OCk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5hdGxhcygnYm9vbScsICdhc3NldHMvYm9vbS5wbmcnLCAnYXNzZXRzL2Jvb20uanNvbicsIFBoYXNlci5Mb2FkZXIuVEVYVFVSRV9BVExBU19KU09OX0hBU0gpO1xyXG5cclxuICAgIC8vYXVkaW8gZmlsZXMgXHJcbiAgICBcclxuICAgIC8vdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2Nyb3NzaGFpcnMnLCAnYXNzZXRzL2Nyb3NzaGFpcl9yZWRfc21hbGwucG5nJyk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9nbycsICdhc3NldHMvdGV4dF9nby5wbmcnKTtcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X3JlYWR5JywgJ2Fzc2V0cy90ZXh0X3JlYWR5LnBuZycpO1xyXG5cclxuICAgIC8vdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ3RhcmdldCcsICdhc3NldHMvdGFyZ2V0LnBuZycsMTI4LjY2LDEyOCk7XHJcblxyXG4gICAgLy90aGlzLmdhbWUubG9hZC5hdWRpbygnZ3Vuc2hvdCcsJ2Fzc2V0cy9ndW5zaG90LndhdicpO1xyXG4gICAgLy90aGlzLmdhbWUubG9hZC5hdWRpbygnZGluZycsJ2Fzc2V0cy9kaW5nLndhdicpO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkQ29tcGxldGUoKSB7XHJcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ3NldHVwJyk7XHJcbiAgICAvL3RoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlbG9hZGVyO1xyXG4iLCJjbGFzcyBTZXR1cCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuIH1cclxuICBcclxuICBjcmVhdGUoKSB7XHJcbiAgICB0aGlzLmdhbWUubmFtZSA9IFwidXNlclwiO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5zdGFnZS5kaXNhYmxlVmlzaWJpbGl0eUNoYW5nZSA9IHRydWU7XHJcbiAgICB0aGlzLmdhbWUubW9kYWwgPSBuZXcgZ2FtZU1vZGFsKHRoaXMuZ2FtZSk7XHJcbiAgICB0aGlzLmNyZWF0ZU1vZGFscygpO1xyXG4gICAgdGhpcy5nYW1lLm1vZGFsLnNob3dNb2RhbCgndXNlcm5hbWUnKTtcclxuXHJcbiAgICB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkQ2FsbGJhY2tzKHRoaXMsIG51bGwsIG51bGwsIHRoaXMua2V5UHJlc3MpO1xyXG4gICAgdGhpcy5ia3NwID0gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuS2V5Ym9hcmQuQkFDS1NQQUNFKTtcclxuICAgIHRoaXMuYmtzcC5vbkRvd24uYWRkKHRoaXMua2V5UHJlc3MsIHRoaXMpO1xyXG4gICAgdGhpcy5lbnRlciA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleWJvYXJkLkVOVEVSKTtcclxuICAgIHRoaXMuZW50ZXIub25Eb3duLmFkZCh0aGlzLmtleVByZXNzLCB0aGlzKTtcclxuICAgIHRoaXMuZ2FtZS5jbGllbnQuYXNrTmV3UGxheWVyKCk7XHJcblxyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnNldHVwKCk7XHJcbn1cclxuXHJcbmtleVByZXNzKGNoYXIpIHtcclxuXHJcbiAgICBpZih0eXBlb2YoY2hhcikgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICBpZiAoY2hhci5ldmVudC5jb2RlID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKGNoYXIuZXZlbnQuY29kZSA9PT0gXCJCYWNrc3BhY2VcIikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUubmFtZSA9IHRoaXMuZ2FtZS5uYW1lLnN1YnN0cmluZygwLCB0aGlzLmdhbWUubmFtZS5sZW5ndGggLSAxKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChjaGFyID09IFwiIFwiKSB7XHJcbiAgICAgICAgICAgIGNoYXIgPSBcIl9cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lLm5hbWUgKz0gY2hhcjtcclxuICAgIH1cclxuICAgIHRoaXMuZ2FtZS5tb2RhbC51cGRhdGVNb2RhbFZhbHVlKHRoaXMuZ2FtZS5uYW1lLCAndXNlcm5hbWUnLCA0KTtcclxufVxyXG4gIFxyXG4gIGNyZWF0ZU1vZGFscygpIHtcclxuICBcclxuICAgIC8vIFN0YXJ0IEdhbWVcclxuICAgIHRoaXMuZ2FtZS5tb2RhbC5jcmVhdGVNb2RhbChcclxuICAgICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJ1c2VybmFtZVwiLFxyXG4gICAgICAgIGluY2x1ZGVCYWNrZ3JvdW5kOiB0cnVlLFxyXG4gICAgICAgIG1vZGFsQ2xvc2VPbklucHV0OiBmYWxzZSxcclxuICAgICAgICBpdGVtc0FycjogW3tcclxuICAgICAgICAgICAgdHlwZTogXCJncmFwaGljc1wiLFxyXG4gICAgICAgICAgICBncmFwaGljQ29sb3I6IFwiMHhmZmZmZmZcIixcclxuICAgICAgICAgICAgZ3JhcGhpY1dpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgIGdyYXBoaWNIZWlnaHQ6IDMwMCxcclxuICAgICAgICAgICAgZ3JhcGhpY1JhZGl1czogNDBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiBcIlR5cGUgYSB1c2VybmFtZSxcXG50aGVuIGhpdCA8RU5URVI+XFxuXFxuKG1heCBvZiAyNSBjaGFyYWN0ZXJzKVwiLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkx1Y2tpZXN0IEd1eVwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMjIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIjB4MWUxZTFlXCIsXHJcbiAgICAgICAgICAgIG9mZnNldFk6IC01MFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuZ2FtZS5uYW1lLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkx1Y2tpZXN0IEd1eVwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMjIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIjB4MWUxZTFlXCIsXHJcbiAgICAgICAgICAgIG9mZnNldFk6IDUwXHJcbiAgICAgICAgfSwgXVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dXA7XHJcbiJdfQ==
