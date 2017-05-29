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
module.exports={
	"grid": [
		[9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12],
		[3, 10, 10, 10, 10, 10, 10, 10, 10, 10, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 6],
		[11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
		[11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
		[11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
		[11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
		[9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 2, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12],
		[1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 4],
		[3, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 6],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
		[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
		[1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 4],
		[3, 10, 10, 10, 10, 10, 10, 10, 10, 10, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 6],
		[11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
		[11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
		[11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
		[11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 5, 10, 10, 10, 10, 10, 10, 10, 10, 10, 14],
		[9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 2, 10, 10, 10, 10, 10, 10, 10, 10, 10, 12],
		[3, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 6]
	]
}
},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{"./lib/bytesToUuid":3,"./lib/rng":4}],6:[function(require,module,exports){
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

},{"./prefabs/client":8,"./prefabs/septikon":16,"./states/boot":23,"./states/game":24,"./states/gameover":25,"./states/preloader":26,"./states/setup":27,"uuid/v4":5}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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
                this.septikon.game.dice.setValue(data.details.value);
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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
            console.log(details);
            for (var i in details.gamePieces) {
                for (var m in details.gamePieces[i].moves) {
                    var x = details.gamePieces[i].moves[m].x;
                    var y = details.gamePieces[i].moves[m].y;
                    this.showTiles([details.gamePieces[i].origin]);
                }
            }
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
        value: function initResources() {
            console.log('lets init recs');

            var currentRec = null;
            var graphics = this.game.add.graphics(0, 0);
            //graphics.lineStyle(4, 0xffd900, 1);
            graphics.beginFill(0xffd900, 1);
            graphics.drawRoundedRect(100, 100, this.tileWidth - 2, this.tileHeight - 2, 12);

            for (var c in this.tileArray) {
                for (var r in this.tileArray[c]) {
                    if (this.tileArray[c][r].tileOwner == this.player.id && this.tileArray[c][r].tileType == "warehouse") {
                        if (r < 5 || r > 15) {
                            currentRec = this.game.add.sprite(this.tileArray[c][r].x + this.tileArray[c][r].width / 2, this.tileArray[c][r].y + this.tileArray[c][r].width / 2, graphics.generateTexture());
                            currentRec.angle = Math.floor(Math.random() * 40) - 20;
                            currentRec.anchor.setTo(0.5);
                            this.game.boardGroup.add(currentRec);
                        }
                    }
                }
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

                        if (x < 9) this.tileArray[x][y].tileOwner = 1;else if (x > 20) this.tileArray[x][y].tileOwner = 2;

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
        value: function showTiles(coordsArray) {
            for (var i in coordsArray) {
                this.tileArray[coordsArray[i].x][coordsArray[i].y].alpha = 0.5;
            }

            // for (var i in tilesArray) {
            //     this.shownTiles.push(tilesArray[i]);
            //     tilesArray[i].alpha = 0.5;
            // }
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

},{"../prefabs/clone":9}],17:[function(require,module,exports){
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

},{"../prefabs/clone":9,"../prefabs/ordnance":13,"../prefabs/personnel":14,"../prefabs/resources":15}],18:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ordnance = function Ordnance() {
  _classCallCheck(this, Ordnance);
};

module.exports.Ordnance = Ordnance;

},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

        this.initResources();
        console.log('complete');
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
                if (type === null || this.personnelArray[i].type == 0) returnArray.push(this.personnelArray[i]);
            }
            return returnArray;
        }
    }, {
        key: 'getOrdnance',
        value: function getOrdnance(type) {
            var returnArray = [];
            for (var i in this.ordnanceArray) {
                if (type === null || this.ordnanceArray[i].type == 0) returnArray.push(this.ordnanceArray[i]);
            }
            return returnArray;
        }
    }, {
        key: 'initResources',
        value: function initResources() {
            var recArray = ['energy1', 'energy2', 'oxygen', 'metal', 'biodrone', 'rocket', 'uranium', 'biomass'];
            var rec = null;
            for (var i in recArray) {
                rec = new Resource(recArray[i]);
                this.resourceArray[recArray[i]] = [];
                for (var count = 0; count < 5; count++) {
                    this.resourceArray[recArray[i]].push(rec);
                }
                for (var count = 0; count < 5; count++) {
                    this.resourceArray[recArray[i]].push(null);
                }
            }
        }
    }]);

    return Player;
}();

module.exports.Player = Player;

},{"./ordnance":18,"./personnel":19,"./resource":21}],21:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resource = function Resource(type) {
    _classCallCheck(this, Resource);

    this.type = type;
};

module.exports.Resource = Resource;

},{}],22:[function(require,module,exports){
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

        this.directionEnum = Object.freeze({
            NORTH: 1,
            EAST: 2,
            SOUTH: 4,
            WEST: 8
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
        key: 'addPlayer',
        value: function addPlayer(player) {
            this.playersArray.push(player);
            this.emit('action', { callback: 'updatePlayer', details: { id: player.id } }, player.socketID);
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
            return null;
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
        key: 'getPlayerCount',
        value: function getPlayerCount() {
            return this.playersArray.length;
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
                if (player.id != selectedTile.owner || selectedTile.occupied === true) {
                    return;
                }

                if (selectedTile.type == "lock" || selectedTile.type == "battle" || selectedTile.type == "armory" || selectedTile.type == "production" || selectedTile.type == "surface") {
                    var uuid = require('uuid/v4')();
                    if (player.addPersonnel('clone', x, y, uuid)) {
                        selectedTile.occupied = true;
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
        key: 'getLegalPieces',
        value: function getLegalPieces() {
            var personnelArray = this.activePlayer.getPersonnel();
            var ordnanceArray = this.activePlayer.getOrdnance();
            var returnArray = [];
            var movesArray = [];

            for (var i in personnelArray) {
                movesArray = this.getLegalMoves(personnelArray[i], this.currentDiceValue, { x: personnelArray[i].x, y: personnelArray[i].y });
                if (movesArray.length > 0) {
                    returnArray.push({ type: "personnel", origin: { x: personnelArray[i].x, y: personnelArray[i].y }, uuid: personnelArray[i].uuid, moves: movesArray });
                }
            }

            for (var i in ordnanceArray) {
                movesArray = this.getLegalMoves(personnelArray[i], this.currentDiceValue, { x: personnelArray[i].x, y: personnelArray[i].y });
                if (movesArray.length > 0) {
                    returnArray.push({ type: "ordnance", uuid: ordnanceArray[i].uuid, moves: movesArray });
                }
            }
            return returnArray;
        }
    }, {
        key: 'getCoordFromDirection',
        value: function getCoordFromDirection(originCoord, direction) {
            var dir = { NORTH: { x: 0, y: -1 }, EAST: { x: 1, y: 0 }, SOUTH: { x: 0, y: 1 }, WEST: { x: -1, y: 0 } };

            var obj = { x: parseInt(originCoord.x) + parseInt(dir[direction].x), y: parseInt(originCoord.y) + parseInt(dir[direction].y) };
            if (obj.x < 0 || obj.x > 30 || obj.y < 0 || obj.y > 20) return false;else return { x: parseInt(originCoord.x) + parseInt(dir[direction].x), y: parseInt(originCoord.y) + parseInt(dir[direction].y) };
        }
    }, {
        key: 'getLegalMoves',
        value: function getLegalMoves(gamePieceType, moves, currentCoord, previousCoord) {
            moves--;
            var legalMoves = [];
            for (var direction in this.directionEnum) {
                var moveCheck = this.getCoordFromDirection(currentCoord, direction);
                if (moveCheck === false) continue;

                var tileToCheck = this.tileArray[moveCheck.x][moveCheck.y];

                if (this.checkWall(this.directionEnum[direction], currentCoord) === true && tileToCheck.damaged === false && tileToCheck.type != "space" && (typeof previousCoord === 'undefined' || typeof previousCoord !== 'undefined' && JSON.stringify(moveCheck) !== JSON.stringify(previousCoord))) {
                    // Check if tile is occupied
                    if (moves == 0) {
                        if (tileToCheck.occupied === false) {
                            legalMoves.push(moveCheck);
                        }
                    } else {
                        var returnArray = this.getLegalMoves(gamePieceType, moves, moveCheck, currentCoord);
                        for (var index in returnArray) {
                            if (JSON.stringify(returnArray[index]) !== JSON.stringify(currentCoord)) legalMoves.push(returnArray[index]);
                        }
                    }
                }
            }
            return legalMoves;
        }
    }, {
        key: 'checkWall',
        value: function checkWall(direction, currentCoordinate) {
            this.wallGrid = require('../../assets/wallGrid.json');

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
        key: 'rollDice',
        value: function rollDice(data) {
            if (this.turnState == this.turnStateEnum.ROLL && this.gameState == this.gameStateEnum.GAME && this.activePlayer.socketID == data.socketID) {
                this.currentDiceValue = Math.floor(Math.random() * 6) + 1;
                this.emit('action', { callback: "diceRolled", details: { value: this.currentDiceValue, gamePieces: this.getLegalPieces() } }, data.socketID);
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

},{"../../assets/tileDetail.json":1,"../../assets/wallGrid.json":2,"./player":20,"uuid/v4":5}],23:[function(require,module,exports){
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

},{"../prefabs/septikon":16}],24:[function(require,module,exports){
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

            console.log(this);
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
                includeBackground: false,
                modalCloseOnInput: false,
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

},{"../prefabs/dice":11}],25:[function(require,module,exports){
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

},{}],26:[function(require,module,exports){
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

},{}],27:[function(require,module,exports){
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

},{}]},{},[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvdGlsZURldGFpbC5qc29uIiwiYXNzZXRzL3dhbGxHcmlkLmpzb24iLCJub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsInNyY1xcbWFpbi5qcyIsInNyY1xcbW9kYWwuanMiLCJzcmNcXHByZWZhYnNcXGNsaWVudC5qcyIsInNyY1xccHJlZmFic1xcY2xvbmUuanMiLCJzcmNcXHByZWZhYnNcXGNyb3NzaGFpcnMuanMiLCJzcmNcXHByZWZhYnNcXGRpY2UuanMiLCJzcmNcXHByZWZhYnNcXG1hc3Rlci5qcyIsInNyY1xccHJlZmFic1xcb3JkbmFuY2UuanMiLCJzcmNcXHByZWZhYnNcXHBlcnNvbm5lbC5qcyIsInNyY1xccHJlZmFic1xccmVzb3VyY2VzLmpzIiwic3JjXFxwcmVmYWJzXFxzZXB0aWtvbi5qcyIsInNyY1xccHJlZmFic1xcdGVhbS5qcyIsInNyY1xcc2VydmVyXFxvcmRuYW5jZS5qcyIsInNyY1xcc2VydmVyXFxwZXJzb25uZWwuanMiLCJzcmNcXHNlcnZlclxccGxheWVyLmpzIiwic3JjXFxzZXJ2ZXJcXHJlc291cmNlLmpzIiwic3JjXFxzZXJ2ZXJcXHNlcHRpa29uLmpzIiwic3JjXFxzdGF0ZXNcXGJvb3QuanMiLCJzcmNcXHN0YXRlc1xcZ2FtZS5qcyIsInNyY1xcc3RhdGVzXFxnYW1lb3Zlci5qcyIsInNyY1xcc3RhdGVzXFxwcmVsb2FkZXIuanMiLCJzcmNcXHN0YXRlc1xcc2V0dXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0JBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFHLE9BQU8sT0FBUCxLQUFvQixXQUF2QixFQUFvQztBQUNoQyxRQUFH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REFGVjtBQUdDLGdDQUFZLGNBSGI7QUFJQyw4QkFBVSxFQUpYO0FBS0MsMkJBQU8sVUFMUjtBQU1DLDZCQUFTLENBQUM7QUFOWCxpQkFOTyxFQWFQO0FBQ0MsMEJBQU0sTUFEUDtBQUVDLDZCQUFTLEtBQUssSUFBTCxDQUFVLElBRnBCO0FBR0MsZ0NBQVksY0FIYjtBQUlDLDhCQUFVLEVBSlg7QUFLQywyQkFBTyxVQUxSO0FBTUMsNkJBQVM7QUFOVixpQkFiTztBQUpWLGFBREo7QUE0QkQ7Ozs7RUF6RWlCLE9BQU8sSzs7a0JBNEVaLEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHM9e1xyXG5cdFwidGlsZVByb3BlcnR5QXJyYXlcIjoge1xyXG5cdFx0XCJvdGhlclNwYWNlXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwMFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJzcGFjZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJzcGFjZVwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI5LDBcIiwgXCI5LDFcIiwgXCI5LDJcIiwgXCI5LDNcIiwgXCI5LDRcIiwgXCI5LDVcIiwgXCI5LDZcIiwgXCI5LDdcIiwgXCI5LDhcIiwgXCI5LDlcIiwgXCI5LDEwXCIsIFwiOSwxMVwiLCBcIjksMTJcIiwgXCI5LDEzXCIsIFwiOSwxNFwiLCBcIjksMTVcIiwgXCI5LDE2XCIsIFwiOSwxN1wiLCBcIjksMThcIiwgXCI5LDE5XCIsIFwiOSwyMFwiLCBcIjEwLDBcIiwgXCIxMCwxXCIsIFwiMTAsMlwiLCBcIjEwLDNcIiwgXCIxMCw0XCIsIFwiMTAsNVwiLCBcIjEwLDZcIiwgXCIxMCw3XCIsIFwiMTAsOFwiLCBcIjEwLDlcIiwgXCIxMCwxMFwiLCBcIjEwLDExXCIsIFwiMTAsMTJcIiwgXCIxMCwxM1wiLCBcIjEwLDE0XCIsIFwiMTAsMTVcIiwgXCIxMCwxNlwiLCBcIjEwLDE3XCIsIFwiMTAsMThcIiwgXCIxMCwxOVwiLCBcIjEwLDIwXCIsIFwiMTEsMFwiLCBcIjExLDFcIiwgXCIxMSwyXCIsIFwiMTEsM1wiLCBcIjExLDRcIiwgXCIxMSw1XCIsIFwiMTEsNlwiLCBcIjExLDdcIiwgXCIxMSw4XCIsIFwiMTEsOVwiLCBcIjExLDEwXCIsIFwiMTEsMTFcIiwgXCIxMSwxMlwiLCBcIjExLDEzXCIsIFwiMTEsMTRcIiwgXCIxMSwxNVwiLCBcIjExLDE2XCIsIFwiMTEsMTdcIiwgXCIxMSwxOFwiLCBcIjExLDE5XCIsIFwiMTEsMjBcIiwgXCIxMiwwXCIsIFwiMTIsMVwiLCBcIjEyLDJcIiwgXCIxMiwzXCIsIFwiMTIsNFwiLCBcIjEyLDVcIiwgXCIxMiw2XCIsIFwiMTIsN1wiLCBcIjEyLDhcIiwgXCIxMiw5XCIsIFwiMTIsMTBcIiwgXCIxMiwxMVwiLCBcIjEyLDEyXCIsIFwiMTIsMTNcIiwgXCIxMiwxNFwiLCBcIjEyLDE1XCIsIFwiMTIsMTZcIiwgXCIxMiwxN1wiLCBcIjEyLDE4XCIsIFwiMTIsMTlcIiwgXCIxMiwyMFwiLCBcIjEzLDBcIiwgXCIxMywxXCIsIFwiMTMsMlwiLCBcIjEzLDNcIiwgXCIxMyw0XCIsIFwiMTMsNVwiLCBcIjEzLDZcIiwgXCIxMyw3XCIsIFwiMTMsOFwiLCBcIjEzLDlcIiwgXCIxMywxMFwiLCBcIjEzLDExXCIsIFwiMTMsMTJcIiwgXCIxMywxM1wiLCBcIjEzLDE0XCIsIFwiMTMsMTVcIiwgXCIxMywxNlwiLCBcIjEzLDE3XCIsIFwiMTMsMThcIiwgXCIxMywxOVwiLCBcIjEzLDIwXCIsIFwiMTQsMFwiLCBcIjE0LDFcIiwgXCIxNCwyXCIsIFwiMTQsM1wiLCBcIjE0LDRcIiwgXCIxNCw1XCIsIFwiMTQsNlwiLCBcIjE0LDdcIiwgXCIxNCw4XCIsIFwiMTQsOVwiLCBcIjE0LDEwXCIsIFwiMTQsMTFcIiwgXCIxNCwxMlwiLCBcIjE0LDEzXCIsIFwiMTQsMTRcIiwgXCIxNCwxNVwiLCBcIjE0LDE2XCIsIFwiMTQsMTdcIiwgXCIxNCwxOFwiLCBcIjE0LDE5XCIsIFwiMTQsMjBcIiwgXCIxNSwwXCIsIFwiMTUsMVwiLCBcIjE1LDJcIiwgXCIxNSwzXCIsIFwiMTUsNFwiLCBcIjE1LDVcIiwgXCIxNSw2XCIsIFwiMTUsN1wiLCBcIjE1LDhcIiwgXCIxNSw5XCIsIFwiMTUsMTBcIiwgXCIxNSwxMVwiLCBcIjE1LDEyXCIsIFwiMTUsMTNcIiwgXCIxNSwxNFwiLCBcIjE1LDE1XCIsIFwiMTUsMTZcIiwgXCIxNSwxN1wiLCBcIjE1LDE4XCIsIFwiMTUsMTlcIiwgXCIxNSwyMFwiLCBcIjE2LDBcIiwgXCIxNiwxXCIsIFwiMTYsMlwiLCBcIjE2LDNcIiwgXCIxNiw0XCIsIFwiMTYsNVwiLCBcIjE2LDZcIiwgXCIxNiw3XCIsIFwiMTYsOFwiLCBcIjE2LDlcIiwgXCIxNiwxMFwiLCBcIjE2LDExXCIsIFwiMTYsMTJcIiwgXCIxNiwxM1wiLCBcIjE2LDE0XCIsIFwiMTYsMTVcIiwgXCIxNiwxNlwiLCBcIjE2LDE3XCIsIFwiMTYsMThcIiwgXCIxNiwxOVwiLCBcIjE2LDIwXCIsIFwiMTcsMFwiLCBcIjE3LDFcIiwgXCIxNywyXCIsIFwiMTcsM1wiLCBcIjE3LDRcIiwgXCIxNyw1XCIsIFwiMTcsNlwiLCBcIjE3LDdcIiwgXCIxNyw4XCIsIFwiMTcsOVwiLCBcIjE3LDEwXCIsIFwiMTcsMTFcIiwgXCIxNywxMlwiLCBcIjE3LDEzXCIsIFwiMTcsMTRcIiwgXCIxNywxNVwiLCBcIjE3LDE2XCIsIFwiMTcsMTdcIiwgXCIxNywxOFwiLCBcIjE3LDE5XCIsIFwiMTcsMjBcIiwgXCIxOCwwXCIsIFwiMTgsMVwiLCBcIjE4LDJcIiwgXCIxOCwzXCIsIFwiMTgsNFwiLCBcIjE4LDVcIiwgXCIxOCw2XCIsIFwiMTgsN1wiLCBcIjE4LDhcIiwgXCIxOCw5XCIsIFwiMTgsMTBcIiwgXCIxOCwxMVwiLCBcIjE4LDEyXCIsIFwiMTgsMTNcIiwgXCIxOCwxNFwiLCBcIjE4LDE1XCIsIFwiMTgsMTZcIiwgXCIxOCwxN1wiLCBcIjE4LDE4XCIsIFwiMTgsMTlcIiwgXCIxOCwyMFwiLCBcIjE5LDBcIiwgXCIxOSwxXCIsIFwiMTksMlwiLCBcIjE5LDNcIiwgXCIxOSw0XCIsIFwiMTksNVwiLCBcIjE5LDZcIiwgXCIxOSw3XCIsIFwiMTksOFwiLCBcIjE5LDlcIiwgXCIxOSwxMFwiLCBcIjE5LDExXCIsIFwiMTksMTJcIiwgXCIxOSwxM1wiLCBcIjE5LDE0XCIsIFwiMTksMTVcIiwgXCIxOSwxNlwiLCBcIjE5LDE3XCIsIFwiMTksMThcIiwgXCIxOSwxOVwiLCBcIjE5LDIwXCIsIFwiMjAsMFwiLCBcIjIwLDFcIiwgXCIyMCwyXCIsIFwiMjAsM1wiLCBcIjIwLDRcIiwgXCIyMCw1XCIsIFwiMjAsNlwiLCBcIjIwLDdcIiwgXCIyMCw4XCIsIFwiMjAsOVwiLCBcIjIwLDEwXCIsIFwiMjAsMTFcIiwgXCIyMCwxMlwiLCBcIjIwLDEzXCIsIFwiMjAsMTRcIiwgXCIyMCwxNVwiLCBcIjIwLDE2XCIsIFwiMjAsMTdcIiwgXCIyMCwxOFwiLCBcIjIwLDE5XCIsIFwiMjAsMjBcIiwgXCIyMSwwXCIsIFwiMjEsMVwiLCBcIjIxLDJcIiwgXCIyMSwzXCIsIFwiMjEsNFwiLCBcIjIxLDVcIiwgXCIyMSw2XCIsIFwiMjEsN1wiLCBcIjIxLDhcIiwgXCIyMSw5XCIsIFwiMjEsMTBcIiwgXCIyMSwxMVwiLCBcIjIxLDEyXCIsIFwiMjEsMTNcIiwgXCIyMSwxNFwiLCBcIjIxLDE1XCIsIFwiMjEsMTZcIiwgXCIyMSwxN1wiLCBcIjIxLDE4XCIsIFwiMjEsMTlcIiwgXCIyMSwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlVGhlcm1pdGVcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDAxXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJ0aGVybWl0ZVwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcImJpb21hc3NcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDIsXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcclxuXHRcdFx0XHRcImFyZ3NcIjogXCJ0aGVybWl0ZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMjBcIiwgXCI3LDFcIiwgXCI3LDdcIiwgXCIyMywxM1wiLCBcIjIzLDE5XCIsIFwiMjQsMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlU2hpZWxkXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwMlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwic2hpZWxkXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwiZW5lcmd5XCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAxLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXHJcblx0XHRcdFx0XCJhcmdzXCI6IFwic2hpZWxkXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiw2XCIsIFwiNiwxM1wiLCBcIjYsMTlcIiwgXCI3LDJcIiwgXCI3LDEyXCIsIFwiMjMsOFwiLCBcIjIzLDE4XCIsIFwiMjQsMVwiLCBcIjI0LDdcIiwgXCIyNCwxNFwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlQmlvZHJvbmVcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDAzXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJiaW9kcm9uZVwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcImJpb2Ryb25lXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAxLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXHJcblx0XHRcdFx0XCJhcmdzXCI6IFwiYmlvZHJvbmVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDVcIiwgXCI3LDNcIiwgXCI3LDE1XCIsIFwiMjMsNVwiLCBcIjIzLDE3XCIsIFwiMjQsMTVcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZVNhdGVsbGl0ZVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDRcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInNhdGVsbGl0ZVwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcIm1ldGFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAxLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXHJcblx0XHRcdFx0XCJhcmdzXCI6IFwic2F0ZWxsaXRlXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwwXCIsIFwiNiwxNFwiLCBcIjcsNFwiLCBcIjcsMTdcIiwgXCIyMywzXCIsIFwiMjMsMTZcIiwgXCIyNCw2XCIsIFwiMjQsMjBcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZUxhc2VyXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwNVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwibGFzZXJcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJlbmVyZ3lcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IDEsXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcclxuXHRcdFx0XHRcImFyZ3NcIjogXCJsYXNlclwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsM1wiLCBcIjYsN1wiLCBcIjYsOFwiLCBcIjYsMTJcIiwgXCI2LDE2XCIsIFwiNyw1XCIsIFwiNyw2XCIsIFwiNyw5XCIsIFwiNywxOFwiLCBcIjcsMTlcIiwgXCIyMywxXCIsIFwiMjMsMlwiLCBcIjIzLDExXCIsIFwiMjMsMTRcIiwgXCIyMywxNVwiLCBcIjI0LDRcIiwgXCIyNCw4XCIsIFwiMjQsMTJcIiwgXCIyNCwxM1wiLCBcIjI0LDE3XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVSZXBhaXJcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDA2XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJyZXBhaXJcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJtZXRhbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwicmVwYWlyXCIsXHJcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDFcIiwgXCI2LDEwXCIsIFwiNiwxOFwiLCBcIjcsOFwiLCBcIjcsMTNcIiwgXCIyMyw3XCIsIFwiMjMsMTJcIiwgXCIyNCwyXCIsIFwiMjQsMTBcIiwgXCIyNCwxOVwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlUm9ja2V0XCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwN1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwicm9ja2V0XCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwicm9ja2V0XCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAxLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXHJcblx0XHRcdFx0XCJhcmdzXCI6IFwicm9ja2V0XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiw0XCIsIFwiNiwxMVwiLCBcIjcsMTBcIiwgXCI3LDE2XCIsIFwiMjMsNFwiLCBcIjIzLDEwXCIsIFwiMjQsOVwiLCBcIjI0LDE2XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVFc3Bpb25hZ2VcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDA4XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJlc3Bpb25hZ2VcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJiaW9tYXNzXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAzLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJlc3Bpb25hZ2VcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDE1XCIsIFwiNywxMVwiLCBcIjIzLDlcIiwgXCIyNCw1XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVUYWtlb3ZlclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDlcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInRha2VvdmVyXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwiZW5lcmd5XCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAyLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJ0YWtlb3ZlclwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMTdcIiwgXCI3LDE0XCIsIFwiMjMsNlwiLCBcIjI0LDNcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZVJlcGFpclR3b1wiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMTBcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInJlcGFpclR3b1wiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIiwgXCJveHlnZW5cIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMV0sXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcInJlcGFpclwiLFxyXG5cdFx0XHRcdFwiYXJnc1wiOiAyXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsOVwiLCBcIjI0LDExXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVDb3VudGVyRXNwaW9uYWdlXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxMVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiY291bnRlckVzcGlvbmFnZVwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJiaW9tYXNzXCIsIFwib3h5Z2VuXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzEsIDFdLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJjb3VudGVyXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwyXCIsIFwiMjQsMThcIl1cclxuXHRcdH0sXHJcblx0XHRcIm90aGVyU3VyZmFjZVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMTJcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwic3VyZmFjZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJzdXJmYWNlXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjgsMFwiLCBcIjgsMVwiLCBcIjgsMlwiLCBcIjgsM1wiLCBcIjgsNFwiLCBcIjgsNVwiLCBcIjgsNlwiLCBcIjgsN1wiLCBcIjgsOFwiLCBcIjgsOVwiLCBcIjgsMTBcIiwgXCI4LDExXCIsIFwiOCwxMlwiLCBcIjgsMTNcIiwgXCI4LDE0XCIsIFwiOCwxNVwiLCBcIjgsMTZcIiwgXCI4LDE3XCIsIFwiOCwxOFwiLCBcIjgsMTlcIiwgXCI4LDIwXCIsIFwiMjIsMFwiLCBcIjIyLDFcIiwgXCIyMiwyXCIsIFwiMjIsM1wiLCBcIjIyLDRcIiwgXCIyMiw1XCIsIFwiMjIsNlwiLCBcIjIyLDdcIiwgXCIyMiw4XCIsIFwiMjIsOVwiLCBcIjIyLDEwXCIsIFwiMjIsMTFcIiwgXCIyMiwxMlwiLCBcIjIyLDEzXCIsIFwiMjIsMTRcIiwgXCIyMiwxNVwiLCBcIjIyLDE2XCIsIFwiMjIsMTdcIiwgXCIyMiwxOFwiLCBcIjIyLDE5XCIsIFwiMjIsMjBcIl1cclxuXHRcdH0sXHJcblx0XHRcIm90aGVyTG9ja1wiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMTNcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwibG9ja1wiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJsb2NrXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjcsMFwiLCBcIjUsMTBcIiwgXCIxLDEwXCIsIFwiNywyMFwiLCBcIjIzLDBcIiwgXCIyMywyMFwiLCBcIjI1LDEwXCIsIFwiMjksMTBcIl1cclxuXHRcdH0sXHJcblx0XHRcImFybW9yeURyaWxsXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxNFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJhcm1vcnlcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiZHJpbGxcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNCwxMFwiLCBcIjI2LDEwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJBcm1vcnlDYW5ub25cIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDE1XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImFybW9yeVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJjYW5ub25cIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMywxMFwiLCBcIjI3LDEwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJhcm1vcnlFeHBsb3NpdmVzXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxNlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJhcm1vcnlcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiZXhwbG9zaXZlc1wiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIyLDEwXCIsIFwiMjgsMTBcIl1cclxuXHRcdH0sXHJcblx0XHRcImxpY2hlblwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMTdcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJsaWNoZW5cIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFwiYmlvbWFzc1wiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwwXCIsIFwiMCwxMFwiLCBcIjAsMTdcIiwgXCIxLDJcIiwgXCIxLDhcIiwgXCIxLDE2XCIsIFwiMSwyMFwiLCBcIjI5LDBcIiwgXCIyOSw0XCIsIFwiMjksMTJcIiwgXCIyOSwxOFwiLCBcIjMwLDNcIiwgXCIzMCwxMFwiLCBcIjMwLDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uTGljaGVuVHdvXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxOFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImxpY2hlblR3b1wiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogXCJiaW9tYXNzXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogMlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDRcIiwgXCIzMCwxNlwiXVxyXG5cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25DaGVtaWNhbFJlYWN0b3JcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDE5XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiY2hlbWljYWxSZWFjdG9yXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwiYmlvbWFzc1wiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFwib3h5Z2VuXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIxLDFcIiwgXCIxLDlcIiwgXCIyOSwxOVwiLCBcIjI5LDExXCJdXHJcblxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbkNoZW1pY2FsUmVhY3RvclR3b1wiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjBcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJjaGVtaWNhbFJlYWN0b3JUd29cIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogXCJiaW9tYXNzXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAyLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogXCJveHlnZW5cIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAyXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsNVwiLCBcIjMwLDE1XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uQWlyRmlsdGVyXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyMVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImFpckZpbHRlclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcIm94eWdlblwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFwib3h5Z2VuXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogM1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDE1XCIsIFwiMSwxMVwiLCBcIjI5LDlcIiwgXCIzMCw1XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uQmlvY29sbGVjdG9yXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyMlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImJpb2NvbGxlY3RvclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJveHlnZW5cIiwgXCJiaW9tYXNzXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzEsIDFdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogXCJiaW9kcm9uZVwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxNFwiLCBcIjAsMThcIiwgXCIxLDZcIiwgXCIxLDE3XCIsIFwiMzAsNlwiLCBcIjMwLDJcIiwgXCIyOSwxNFwiLCBcIjI5LDNcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25VcmFuaXVtTWluZVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjNcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJ1cmFuaXVtTWluZVwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJveHlnZW5cIiwgXCJlbmVyZ3lcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMV0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBcInVyYW5pdW1cIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMlwiLCBcIjAsNlwiLCBcIjEsM1wiLCBcIjMwLDE4XCIsIFwiMzAsMTRcIiwgXCIyOSwxN1wiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbk51Y2xlYXJSZWFjdG9yXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyNFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcIm51Y2xlYXJSZWFjdG9yXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwidXJhbml1bVwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFwiZW5lcmd5XCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogM1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDlcIiwgXCIwLDE2XCIsIFwiMSw3XCIsIFwiMSwxNFwiLCBcIjEsMTlcIiwgXCIzMCwxMVwiLCBcIjMwLDRcIiwgXCIyOSwxM1wiLCBcIjI5LDZcIiwgXCIyOSwxXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uVGhlcm1hbEdlbmVyYXRvclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjVcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJ0aGVybWFsR2VuZXJhdG9yXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwiYmlvbWFzc1wiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFwiZW5lcmd5XCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDEyXCIsIFwiMzAsOFwiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbkZvdW5kcnlcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDI2XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiZm91bmRyeVwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcImVuZXJneVwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFwibWV0YWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsM1wiLCBcIjAsMTFcIiwgXCIwLDE5XCIsIFwiMSwxM1wiLCBcIjMwLDE3XCIsIFwiMzAsOVwiLCBcIjMwLDFcIiwgXCIyOSw3XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uRm91bmRyeVR3b1wiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjdcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJmb3VuZHJ5VHdvXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFwiZW5lcmd5XCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiAyLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogXCJtZXRhbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IDJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMSwwXCIsIFwiMjksMjBcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25Sb2NrZXRXb3Jrc2hvcFwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjhcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJyb2NrZXRXb3Jrc2hvcFwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBcImVuZXJneVwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogMSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFwicm9ja2V0XCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDFcIiwgXCIwLDdcIiwgXCIxLDVcIiwgXCIxLDEyXCIsIFwiMSwxNVwiLCBcIjMwLDE5XCIsIFwiMzAsMTNcIiwgXCIyOSwxNVwiLCBcIjI5LDhcIiwgXCIyOSw1XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uU2Vuc29yQ2FiaW5cIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDI5XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwic2Vuc29yQ2FiaW5cIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwia2lsbEJpb2Ryb25lXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxM1wiLCBcIjMwLDdcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25OdWNsZWFyQXJtb3J5XCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAzMFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcIm51Y2xlYXJBcm1vcnlcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wib3h5Z2VuXCIsIFwiZW5lcmd5XCIsIFwidXJhbml1bVwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxLCAxXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFwibnVrZVwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwyMFwiLCBcIjEsNFwiLCBcIjEsMThcIiwgXCIzMCwwXCIsIFwiMjksMTZcIiwgXCIyOSwyXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uUmVwYWlyXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAzMVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInByb2RSZXBhaXJcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJyZXBhaXJcIixcclxuXHRcdFx0XHRcInRpbGVUYXJnZXRJRFwiOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsOFwiLCBcIjMwLDEyXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJyZXNvdXJjZU94eWdlblwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzJcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcIm94eWdlblwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI1LDBcIiwgXCI1LDFcIiwgXCI1LDJcIiwgXCI1LDNcIiwgXCI1LDRcIiwgXCI1LDVcIiwgXCI1LDZcIiwgXCI1LDdcIiwgXCI1LDhcIiwgXCI1LDlcIiwgXCIyNSwxMVwiLCBcIjI1LDEyXCIsIFwiMjUsMTNcIiwgXCIyNSwxNFwiLCBcIjI1LDE1XCIsIFwiMjUsMTZcIiwgXCIyNSwxN1wiLCBcIjI1LDE4XCIsIFwiMjUsMTlcIiwgXCIyNSwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwicmVzb3VyY2VSb2NrZXRcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDMzXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJyb2NrZXRcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNCwwXCIsIFwiNCwxXCIsIFwiNCwyXCIsIFwiNCwzXCIsIFwiNCw0XCIsIFwiNCw1XCIsIFwiNCw2XCIsIFwiNCw3XCIsIFwiNCw4XCIsIFwiNCw5XCIsIFwiMjYsMTFcIiwgXCIyNiwxMlwiLCBcIjI2LDEzXCIsIFwiMjYsMTRcIiwgXCIyNiwxNVwiLCBcIjI2LDE2XCIsIFwiMjYsMTdcIiwgXCIyNiwxOFwiLCBcIjI2LDE5XCIsIFwiMjYsMjBcIl1cclxuXHRcdH0sXHJcblx0XHRcInJlc291cmNlTWV0YWxcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDM0XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJtZXRhbFwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIzLDBcIiwgXCIzLDFcIiwgXCIzLDJcIiwgXCIzLDNcIiwgXCIzLDRcIiwgXCIzLDVcIiwgXCIzLDZcIiwgXCIzLDdcIiwgXCIzLDhcIiwgXCIzLDlcIiwgXCIyNywxMVwiLCBcIjI3LDEyXCIsIFwiMjcsMTNcIiwgXCIyNywxNFwiLCBcIjI3LDE1XCIsIFwiMjcsMTZcIiwgXCIyNywxN1wiLCBcIjI3LDE4XCIsIFwiMjcsMTlcIiwgXCIyNywyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwicmVzb3VyY2VFbmVyZ3lcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDM1XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJlbmVyZ3lcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMiwwXCIsIFwiMiwxXCIsIFwiMiwyXCIsIFwiMiwzXCIsIFwiMiw0XCIsIFwiMiw1XCIsIFwiMiw2XCIsIFwiMiw3XCIsIFwiMiw4XCIsIFwiMiw5XCIsIFwiMiwxMVwiLCBcIjIsMTJcIiwgXCIyLDEzXCIsIFwiMiwxNFwiLCBcIjIsMTVcIiwgXCIyLDE2XCIsIFwiMiwxN1wiLCBcIjIsMThcIiwgXCIyLDE5XCIsIFwiMiwyMFwiLCBcIjI4LDBcIiwgXCIyOCwxXCIsIFwiMjgsMlwiLCBcIjI4LDNcIiwgXCIyOCw0XCIsIFwiMjgsNVwiLCBcIjI4LDZcIiwgXCIyOCw3XCIsIFwiMjgsOFwiLCBcIjI4LDlcIiwgXCIyOCwxMVwiLCBcIjI4LDEyXCIsIFwiMjgsMTNcIiwgXCIyOCwxNFwiLCBcIjI4LDE1XCIsIFwiMjgsMTZcIiwgXCIyOCwxN1wiLCBcIjI4LDE4XCIsIFwiMjgsMTlcIiwgXCIyOCwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwicmVzb3VyY2VCaW9tYXNzXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAzNlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiYmlvbWFzc1wiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI1LDExXCIsIFwiNSwxMlwiLCBcIjUsMTNcIiwgXCI1LDE0XCIsIFwiNSwxNVwiLCBcIjUsMTZcIiwgXCI1LDE3XCIsIFwiNSwxOFwiLCBcIjUsMTlcIiwgXCI1LDIwXCIsIFwiMjUsMFwiLCBcIjI1LDFcIiwgXCIyNSwyXCIsIFwiMjUsM1wiLCBcIjI1LDRcIiwgXCIyNSw1XCIsIFwiMjUsNlwiLCBcIjI1LDdcIiwgXCIyNSw4XCIsIFwiMjUsOVwiXVxyXG5cdFx0fSxcclxuXHRcdFwicmVzb3VyY2VCaW9kcm9uZVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzdcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImJpb2Ryb25lXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjQsMTFcIiwgXCI0LDEyXCIsIFwiNCwxM1wiLCBcIjQsMTRcIiwgXCI0LDE1XCIsIFwiNCwxNlwiLCBcIjQsMTdcIiwgXCI0LDE4XCIsIFwiNCwxOVwiLCBcIjQsMjBcIiwgXCIyNiwwXCIsIFwiMjYsMVwiLCBcIjI2LDJcIiwgXCIyNiwzXCIsIFwiMjYsNFwiLCBcIjI2LDVcIiwgXCIyNiw2XCIsIFwiMjYsN1wiLCBcIjI2LDhcIiwgXCIyNiw5XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJyZXNvdXJjZVVyYW5pdW1cIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDM4XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJ1cmFuaXVtXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjMsMTFcIiwgXCIzLDEyXCIsIFwiMywxM1wiLCBcIjMsMTRcIiwgXCIzLDE1XCIsIFwiMywxNlwiLCBcIjMsMTdcIiwgXCIzLDE4XCIsIFwiMywxOVwiLCBcIjMsMjBcIiwgXCIyNywwXCIsIFwiMjcsMVwiLCBcIjI3LDJcIiwgXCIyNywzXCIsIFwiMjcsNFwiLCBcIjI3LDVcIiwgXCIyNyw2XCIsIFwiMjcsN1wiLCBcIjI3LDhcIiwgXCIyNyw5XCJdXHJcblx0XHR9XHJcblx0fVxyXG59IiwibW9kdWxlLmV4cG9ydHM9e1xyXG5cdFwiZ3JpZFwiOiBbXHJcblx0XHRbOSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEyXSxcclxuXHRcdFszLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA4LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA2XSxcclxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxyXG5cdFx0WzExLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA1LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxNF0sXHJcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcclxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxyXG5cdFx0WzksIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDIsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEyXSxcclxuXHRcdFsxLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNF0sXHJcblx0XHRbMywgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDZdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDRdLFxyXG5cdFx0WzEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA0XSxcclxuXHRcdFszLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA4LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA2XSxcclxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxyXG5cdFx0WzExLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA1LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxNF0sXHJcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcclxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxyXG5cdFx0WzksIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDIsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEyXSxcclxuXHRcdFszLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNl1cclxuXHRdXHJcbn0iLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICByZXR1cm4gIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG52YXIgcm5nO1xuXG52YXIgY3J5cHRvID0gZ2xvYmFsLmNyeXB0byB8fCBnbG9iYWwubXNDcnlwdG87IC8vIGZvciBJRSAxMVxuaWYgKGNyeXB0byAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG4gIHJuZyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59XG5cbmlmICghcm5nKSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyICBybmRzID0gbmV3IEFycmF5KDE2KTtcbiAgcm5nID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcm5nO1xuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG5cbiAgaWYgKHR5cGVvZihvcHRpb25zKSA9PSAnc3RyaW5nJykge1xuICAgIGJ1ZiA9IG9wdGlvbnMgPT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgKytpaSkge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHY0O1xuIiwiaW1wb3J0IENsaWVudCBmcm9tICcuL3ByZWZhYnMvY2xpZW50JztcclxuaW1wb3J0IEJvb3QgZnJvbSAnLi9zdGF0ZXMvYm9vdCc7XHJcbmltcG9ydCBHYW1lIGZyb20gJy4vc3RhdGVzL2dhbWUnO1xyXG5pbXBvcnQgU2V0dXAgZnJvbSAnLi9zdGF0ZXMvc2V0dXAnO1xyXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJy4vc3RhdGVzL3ByZWxvYWRlcic7XHJcbmltcG9ydCBHYW1lb3ZlciBmcm9tICcuL3N0YXRlcy9nYW1lb3Zlcic7XHJcbmltcG9ydCBTZXB0aWtvbiBmcm9tICcuL3ByZWZhYnMvc2VwdGlrb24nO1xyXG5cclxuaWYodHlwZW9mKFN0b3JhZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VwdFVVSUQnKSAhPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgdXVpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXB0VVVJRCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB1dWlkID0gcmVxdWlyZSgndXVpZC92NCcpKCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlcHRVVUlEJywgdXVpZCk7XHJcbiAgICB9XHJcbn0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiTG9jYWwgU3RvcmFnZSBpcyByZXF1aXJlZCFcIik7XHJcbn1cclxuXHJcbi8vIGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCwgUGhhc2VyLkFVVE8sICdwaGFzZXItdGVzdC1nYW1lJyk7XHJcbmNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoXCIxMDBcIiwgXCIxMDBcIiwgUGhhc2VyLkFVVE8pO1xyXG5nYW1lLnNlcHRpa29uID0gbmV3IFNlcHRpa29uKGdhbWUpO1xyXG5nYW1lLmNsaWVudCA9IG5ldyBDbGllbnQoZ2FtZS5zZXB0aWtvbik7XHJcblxyXG5nYW1lLnN0YXRlLmFkZCgnYm9vdCcsIG5ldyBCb290KCkpO1xyXG5nYW1lLnN0YXRlLmFkZCgnZ2FtZScsIG5ldyBHYW1lKCkpO1xyXG5nYW1lLnN0YXRlLmFkZCgnc2V0dXAnLCBuZXcgU2V0dXAoKSk7XHJcbmdhbWUuc3RhdGUuYWRkKCdwcmVsb2FkZXInLCBuZXcgUHJlbG9hZGVyKCkpO1xyXG5nYW1lLnN0YXRlLmFkZCgnZ2FtZW92ZXInLCBuZXcgR2FtZW92ZXIoKSk7XHJcblxyXG5nYW1lLnN0YXRlLnN0YXJ0KCdib290Jyk7XHJcbiIsInZhciBnYW1lTW9kYWwgPSBnYW1lTW9kYWwgfHwge307XHJcblxyXG5cclxuZ2FtZU1vZGFsID0gZnVuY3Rpb24gKGdhbWUpIHtcclxuXHJcblx0dmFyIF90aGlzID0gdGhpcztcclxuXHRnYW1lLm1vZGFscyA9IHt9O1xyXG5cclxuXHQvKipcclxuXHQgKiBbaGlkZU1vZGFsIGRlc2NyaXB0aW9uXVxyXG5cdCAqIEBwYXJhbSAge1t0eXBlXX0gdHlwZSBbZGVzY3JpcHRpb25dXHJcblx0ICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cclxuXHQgKi9cclxuXHR0aGlzLmhpZGVNb2RhbCA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcblx0XHR3aW5kb3cuY29uc29sZS5sb2codHlwZSk7XHJcblx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gZmFsc2U7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGNyZWF0ZU1vZGFsOiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cdFx0XHR2YXIgdHlwZSA9IG9wdGlvbnMudHlwZSB8fCAnJzsgLy8gbXVzdCBiZSB1bmlxdWVcclxuXHRcdFx0dmFyIGluY2x1ZGVCYWNrZ3JvdW5kID0gb3B0aW9ucy5pbmNsdWRlQmFja2dyb3VuZDsgLy8gbWF5YmUgbm90IG9wdGlvbmFsXHJcblx0XHRcdHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvciB8fCBcIjB4MDAwMDAwXCI7XHJcblx0XHRcdHZhciBiYWNrZ3JvdW5kT3BhY2l0eSA9IG9wdGlvbnMuYmFja2dyb3VuZE9wYWNpdHkgPT09IHVuZGVmaW5lZCA/XHJcblx0XHRcdFx0MC43IDogb3B0aW9ucy5iYWNrZ3JvdW5kT3BhY2l0eTtcclxuXHRcdFx0dmFyIG1vZGFsQ2xvc2VPbklucHV0ID0gb3B0aW9ucy5tb2RhbENsb3NlT25JbnB1dCB8fCBmYWxzZTtcclxuXHRcdFx0dmFyIG1vZGFsQmFja2dyb3VuZENhbGxiYWNrID0gb3B0aW9ucy5tb2RhbEJhY2tncm91bmRDYWxsYmFjayB8fCBmYWxzZTtcclxuXHRcdFx0dmFyIHZDZW50ZXIgPSBvcHRpb25zLnZDZW50ZXIgfHwgdHJ1ZTtcclxuXHRcdFx0dmFyIGhDZW50ZXIgPSBvcHRpb25zLmhDZW50ZXIgfHwgdHJ1ZTtcclxuXHRcdFx0dmFyIGl0ZW1zQXJyID0gb3B0aW9ucy5pdGVtc0FyciB8fCBbXTtcclxuXHRcdFx0dmFyIGZpeGVkVG9DYW1lcmEgPSBvcHRpb25zLmZpeGVkVG9DYW1lcmEgfHwgZmFsc2U7XHJcblxyXG5cdFx0XHR2YXIgbW9kYWw7XHJcblx0XHRcdHZhciBtb2RhbEdyb3VwID0gZ2FtZS5hZGQuZ3JvdXAoKTtcclxuXHRcdFx0aWYgKGZpeGVkVG9DYW1lcmEgPT09IHRydWUpIHtcclxuXHRcdFx0XHRtb2RhbEdyb3VwLmZpeGVkVG9DYW1lcmEgPSB0cnVlO1xyXG5cdFx0XHRcdG1vZGFsR3JvdXAuY2FtZXJhT2Zmc2V0LnggPSAwO1xyXG5cdFx0XHRcdG1vZGFsR3JvdXAuY2FtZXJhT2Zmc2V0LnkgPSAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoaW5jbHVkZUJhY2tncm91bmQgPT09IHRydWUpIHtcclxuXHRcdFx0XHRtb2RhbCA9IGdhbWUuYWRkLmdyYXBoaWNzKGdhbWUud2lkdGgsIGdhbWUuaGVpZ2h0KTtcclxuXHRcdFx0XHRtb2RhbC5iZWdpbkZpbGwoYmFja2dyb3VuZENvbG9yLCBiYWNrZ3JvdW5kT3BhY2l0eSk7XHJcblx0XHRcdFx0bW9kYWwueCA9IDA7XHJcblx0XHRcdFx0bW9kYWwueSA9IDA7XHJcblxyXG5cdFx0XHRcdG1vZGFsLmRyYXdSZWN0KDAsIDAsIGdhbWUud2lkdGgsIGdhbWUuaGVpZ2h0KTtcclxuXHJcblx0XHRcdFx0aWYgKG1vZGFsQ2xvc2VPbklucHV0ID09PSB0cnVlKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGlubmVyTW9kYWwgPSBnYW1lLmFkZC5zcHJpdGUoMCwgMCk7XHJcblx0XHRcdFx0XHRpbm5lck1vZGFsLmlucHV0RW5hYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRpbm5lck1vZGFsLndpZHRoID0gZ2FtZS53aWR0aDtcclxuXHRcdFx0XHRcdGlubmVyTW9kYWwuaGVpZ2h0ID0gZ2FtZS5oZWlnaHQ7XHJcblx0XHRcdFx0XHRpbm5lck1vZGFsLnR5cGUgPSB0eXBlO1xyXG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5pbnB1dC5wcmlvcml0eUlEID0gMDtcclxuXHRcdFx0XHRcdGlubmVyTW9kYWwuZXZlbnRzLm9uSW5wdXREb3duLmFkZChmdW5jdGlvbiAoZSwgcG9pbnRlcikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmhpZGVNb2RhbChlLnR5cGUpO1xyXG5cdFx0XHRcdFx0fSwgX3RoaXMsIDIpO1xyXG5cclxuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKGlubmVyTW9kYWwpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0bW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2sgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG1vZGFsQmFja2dyb3VuZENhbGxiYWNrKSB7XHJcblx0XHRcdFx0dmFyIGlubmVyTW9kYWwgPSBnYW1lLmFkZC5zcHJpdGUoMCwgMCk7XHJcblx0XHRcdFx0aW5uZXJNb2RhbC5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdGlubmVyTW9kYWwud2lkdGggPSBnYW1lLndpZHRoO1xyXG5cdFx0XHRcdGlubmVyTW9kYWwuaGVpZ2h0ID0gZ2FtZS5oZWlnaHQ7XHJcblx0XHRcdFx0aW5uZXJNb2RhbC50eXBlID0gdHlwZTtcclxuXHRcdFx0XHRpbm5lck1vZGFsLmlucHV0LnByaW9yaXR5SUQgPSAwO1xyXG5cclxuXHRcdFx0XHRtb2RhbEdyb3VwLmFkZChpbm5lck1vZGFsKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGluY2x1ZGVCYWNrZ3JvdW5kKSB7XHJcblx0XHRcdFx0bW9kYWxHcm91cC5hZGQobW9kYWwpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgbW9kYWxMYWJlbDtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtc0Fyci5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdFx0XHRcdHZhciBpdGVtID0gaXRlbXNBcnJbaV07XHJcblx0XHRcdFx0dmFyIGl0ZW1UeXBlID0gaXRlbS50eXBlIHx8ICd0ZXh0JztcclxuXHRcdFx0XHR2YXIgaXRlbUNvbG9yID0gaXRlbS5jb2xvciB8fCAweDAwMDAwMDtcclxuXHRcdFx0XHR2YXIgaXRlbUZvbnRmYW1pbHkgPSBpdGVtLmZvbnRGYW1pbHkgfHwgJ0FyaWFsJztcclxuXHRcdFx0XHR2YXIgaXRlbUZvbnRTaXplID0gaXRlbS5mb250U2l6ZSB8fCAzMjtcclxuXHRcdFx0XHR2YXIgaXRlbVN0cm9rZSA9IGl0ZW0uc3Ryb2tlIHx8ICcweDAwMDAwMCc7XHJcblx0XHRcdFx0dmFyIGl0ZW1TdHJva2VUaGlja25lc3MgPSBpdGVtLnN0cm9rZVRoaWNrbmVzcyB8fCAwO1xyXG5cdFx0XHRcdHZhciBpdGVtQWxpZ24gPSBpdGVtLmFsaWduIHx8ICdjZW50ZXInO1xyXG5cdFx0XHRcdHZhciBvZmZzZXRYID0gaXRlbS5vZmZzZXRYIHx8IDA7XHJcblx0XHRcdFx0dmFyIG9mZnNldFkgPSBpdGVtLm9mZnNldFkgfHwgMDtcclxuXHRcdFx0XHR2YXIgY29udGVudFNjYWxlID0gaXRlbS5jb250ZW50U2NhbGUgfHwgMTtcclxuXHRcdFx0XHR2YXIgY29udGVudCA9IGl0ZW0uY29udGVudCB8fCBcIlwiO1xyXG5cdFx0XHRcdHZhciBjZW50ZXJYID0gZ2FtZS53aWR0aCAvIDI7XHJcblx0XHRcdFx0dmFyIGNlbnRlclkgPSBnYW1lLmhlaWdodCAvIDI7XHJcblx0XHRcdFx0dmFyIGNhbGxiYWNrID0gaXRlbS5jYWxsYmFjayB8fCBmYWxzZTtcclxuXHRcdFx0XHR2YXIgdGV4dEFsaWduID0gaXRlbS50ZXh0QWxpZ24gfHwgXCJsZWZ0XCI7XHJcblx0XHRcdFx0dmFyIGF0bGFzUGFyZW50ID0gaXRlbS5hdGxhc1BhcmVudCB8fCBcIlwiO1xyXG5cdFx0XHRcdHZhciBidXR0b25Ib3ZlciA9IGl0ZW0uYnV0dG9uSG92ZXIgfHwgY29udGVudDtcclxuXHRcdFx0XHR2YXIgYnV0dG9uQWN0aXZlID0gaXRlbS5idXR0b25BY3RpdmUgfHwgY29udGVudDtcclxuXHRcdFx0XHR2YXIgZ3JhcGhpY0NvbG9yID0gaXRlbS5ncmFwaGljQ29sb3IgfHwgMHhmZmZmZmY7XHJcblx0XHRcdFx0dmFyIGdyYXBoaWNPcGFjaXR5ID0gaXRlbS5ncmFwaGljT3BhY2l0eSB8fCAxO1xyXG5cdFx0XHRcdHZhciBncmFwaGljVyA9IGl0ZW0uZ3JhcGhpY1dpZHRoIHx8IDIwMDtcclxuXHRcdFx0XHR2YXIgZ3JhcGhpY0ggPSBpdGVtLmdyYXBoaWNIZWlnaHQgfHwgMjAwO1xyXG5cdFx0XHRcdHZhciBncmFwaGljUmFkaXVzID0gaXRlbS5ncmFwaGljUmFkaXVzIHx8IDA7XHJcblx0XHRcdFx0dmFyIGxvY2tQb3NpdGlvbiA9IGl0ZW0ubG9ja1Bvc2l0aW9uIHx8IGZhbHNlO1xyXG5cclxuXHRcdFx0XHR2YXIgaXRlbUFuY2hvciA9IGl0ZW0uYW5jaG9yIHx8IHt4OjAseTowfTtcclxuXHRcdFx0XHR2YXIgaXRlbUFuZ2xlID0gaXRlbS5hbmdsZSB8fCAwO1xyXG5cdFx0XHRcdHZhciBpdGVtWCA9IGl0ZW0ueCB8fCAwO1xyXG5cdFx0XHRcdHZhciBpdGVtWSA9IGl0ZW0ueSB8fCAwO1xyXG5cdFx0XHRcdHZhciBpbWFnZUZyYW1lID0gaXRlbS5mcmFtZSB8fCBudWxsO1xyXG5cdFx0XHRcdHZhciB0aWxlU3ByaXRlV2lkdGggPSBpdGVtLnRpbGVTcHJpdGVXaWR0aCB8fCBnYW1lLndpZHRoO1xyXG5cdFx0XHRcdHZhciB0aWxlU3ByaXRlSGVpZ2h0ID0gaXRlbS50aWxlU3ByaXRlSGVpZ2h0IHx8IGdhbWUuaGVpZ2h0O1xyXG5cclxuXHRcdFx0XHRtb2RhbExhYmVsID0gbnVsbDtcclxuXHJcblx0XHRcdFx0aWYgKGl0ZW1UeXBlID09PSBcInRleHRcIiB8fCBpdGVtVHlwZSA9PT0gXCJiaXRtYXBUZXh0XCIpIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoaXRlbVR5cGUgPT09IFwidGV4dFwiKSB7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC50ZXh0KDAsIDAsIGNvbnRlbnQsIHtcclxuXHRcdFx0XHRcdFx0XHRmb250OiBpdGVtRm9udFNpemUgKyAncHggJyArIGl0ZW1Gb250ZmFtaWx5LFxyXG5cdFx0XHRcdFx0XHRcdGZpbGw6IFwiI1wiICsgU3RyaW5nKGl0ZW1Db2xvcikucmVwbGFjZShcIjB4XCIsIFwiXCIpLFxyXG5cdFx0XHRcdFx0XHRcdHN0cm9rZTogXCIjXCIgKyBTdHJpbmcoaXRlbVN0cm9rZSkucmVwbGFjZShcIjB4XCIsIFwiXCIpLFxyXG5cdFx0XHRcdFx0XHRcdHN0cm9rZVRoaWNrbmVzczogaXRlbVN0cm9rZVRoaWNrbmVzcyxcclxuXHRcdFx0XHRcdFx0XHRhbGlnbjogaXRlbUFsaWduXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ3RleHQnO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnVwZGF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoKGdhbWUud2lkdGggLyAyKSAtIChtb2RhbExhYmVsLndpZHRoIC8gMikpICsgb2Zmc2V0WDtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKChnYW1lLmhlaWdodCAvIDIpIC0gKG1vZGFsTGFiZWwuaGVpZ2h0IC8gMikpICsgb2Zmc2V0WTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5iaXRtYXBUZXh0KDAsIDAsIGl0ZW1Gb250ZmFtaWx5LCBTdHJpbmcoY29udGVudCksIGl0ZW1Gb250U2l6ZSk7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnYml0bWFwVGV4dCc7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuYWxpZ24gPSB0ZXh0QWxpZ247XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwudXBkYXRlVGV4dCgpO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtIChtb2RhbExhYmVsLndpZHRoIC8gMikpICsgb2Zmc2V0WDtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAobW9kYWxMYWJlbC5oZWlnaHQgLyAyKSkgKyBvZmZzZXRZO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcImltYWdlXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5pbWFnZSgwLCAwLCBjb250ZW50KTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdpbWFnZSc7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtICgobW9kYWxMYWJlbC53aWR0aCkgLyAyKSkgKyBvZmZzZXRYO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJ0aWxlU3ByaXRlXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC50aWxlU3ByaXRlKGl0ZW1YLCBpdGVtWSxcclxuXHRcdFx0XHRcdFx0dGlsZVNwcml0ZVdpZHRoLCB0aWxlU3ByaXRlSGVpZ2h0LCBjb250ZW50LCBpbWFnZUZyYW1lKTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5hbmNob3Iuc2V0VG8oaXRlbUFuY2hvci54LCBpdGVtQW5jaG9yLnkpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5hbmdsZSA9IGl0ZW1BbmdsZTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAndGlsZVNwcml0ZSc7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJzcHJpdGVcIikge1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnNwcml0ZSgwLCAwLCBhdGxhc1BhcmVudCwgY29udGVudCk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnNjYWxlLnNldFRvKGNvbnRlbnRTY2FsZSwgY29udGVudFNjYWxlKTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnc3ByaXRlJztcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcImJ1dHRvblwiKSB7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuYnV0dG9uKDAsIDAsIGF0bGFzUGFyZW50LCBjYWxsYmFjayxcclxuXHRcdFx0XHRcdFx0dGhpcywgYnV0dG9uSG92ZXIsIGNvbnRlbnQsIGJ1dHRvbkFjdGl2ZSwgY29udGVudCk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnNjYWxlLnNldFRvKGNvbnRlbnRTY2FsZSwgY29udGVudFNjYWxlKTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnYnV0dG9uJztcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJncmFwaGljc1wiKSB7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuZ3JhcGhpY3MoZ3JhcGhpY1csIGdyYXBoaWNIKTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYmVnaW5GaWxsKGdyYXBoaWNDb2xvciwgZ3JhcGhpY09wYWNpdHkpO1xyXG5cdFx0XHRcdFx0aWYgKGdyYXBoaWNSYWRpdXMgPD0gMCkge1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmRyYXdSZWN0KDAsIDAsIGdyYXBoaWNXLCBncmFwaGljSCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmRyYXdSb3VuZGVkUmVjdCgwLCAwLCBncmFwaGljVywgZ3JhcGhpY0gsIGdyYXBoaWNSYWRpdXMpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5lbmRGaWxsKCk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtICgobW9kYWxMYWJlbC53aWR0aCkgLyAyKSkgKyBvZmZzZXRYO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRtb2RhbExhYmVsW1wiX29mZnNldFhcIl0gPSAwO1xyXG5cdFx0XHRcdG1vZGFsTGFiZWxbXCJfb2Zmc2V0WVwiXSA9IDA7XHJcblx0XHRcdFx0bW9kYWxMYWJlbFtcImxvY2tQb3NpdGlvblwiXSA9IGxvY2tQb3NpdGlvbjtcclxuXHRcdFx0XHRtb2RhbExhYmVsLl9vZmZzZXRYID0gb2Zmc2V0WDtcclxuXHRcdFx0XHRtb2RhbExhYmVsLl9vZmZzZXRZID0gb2Zmc2V0WTtcclxuXHJcblxyXG5cdFx0XHRcdGlmIChjYWxsYmFjayAhPT0gZmFsc2UgJiYgaXRlbVR5cGUgIT09IFwiYnV0dG9uXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuaW5wdXRFbmFibGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwucGl4ZWxQZXJmZWN0Q2xpY2sgPSB0cnVlO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5wcmlvcml0eUlEID0gMTA7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmV2ZW50cy5vbklucHV0RG93bi5hZGQoY2FsbGJhY2ssIG1vZGFsTGFiZWwpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGl0ZW1UeXBlICE9PSBcImJpdG1hcFRleHRcIiAmJiBpdGVtVHlwZSAhPT0gXCJncmFwaGljc1wiKSB7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmJyaW5nVG9Ub3AoKTtcclxuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKG1vZGFsTGFiZWwpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5icmluZ1RvVG9wKCk7XHJcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmJyaW5nVG9Ub3AobW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKG1vZGFsTGFiZWwpO1xyXG5cdFx0XHRcdFx0bW9kYWxHcm91cC5icmluZ1RvVG9wKG1vZGFsTGFiZWwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bW9kYWxHcm91cC52aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdGdhbWUubW9kYWxzW3R5cGVdID0gbW9kYWxHcm91cDtcclxuXHJcblx0XHR9LFxyXG5cdFx0dXBkYXRlTW9kYWxWYWx1ZTogZnVuY3Rpb24gKHZhbHVlLCB0eXBlLCBpbmRleCwgaWQpIHtcclxuXHRcdFx0dmFyIGl0ZW07XHJcblx0XHRcdGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGluZGV4ICE9PSBudWxsKSB7XHJcblx0XHRcdFx0aXRlbSA9IGdhbWUubW9kYWxzW3R5cGVdLmdldENoaWxkQXQoaW5kZXgpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGlkICE9PSB1bmRlZmluZWQgJiYgaWQgIT09IG51bGwpIHtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChpdGVtLmNvbnRlbnRUeXBlID09PSBcInRleHRcIikge1xyXG5cdFx0XHRcdGl0ZW0udGV4dCA9IHZhbHVlO1xyXG5cdFx0XHRcdGl0ZW0udXBkYXRlKCk7XHJcblx0XHRcdFx0aWYgKGl0ZW0ubG9ja1Bvc2l0aW9uID09PSB0cnVlKSB7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpdGVtLnggPSAoKGdhbWUud2lkdGggLyAyKSAtIChpdGVtLndpZHRoIC8gMikpICsgaXRlbS5fb2Zmc2V0WDtcclxuXHRcdFx0XHRcdGl0ZW0ueSA9ICgoZ2FtZS5oZWlnaHQgLyAyKSAtIChpdGVtLmhlaWdodCAvIDIpKSArIGl0ZW0uX29mZnNldFk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwiYml0bWFwVGV4dFwiKSB7XHJcblx0XHRcdFx0aXRlbS50ZXh0ID0gdmFsdWU7XHJcblx0XHRcdFx0aXRlbS51cGRhdGVUZXh0KCk7XHJcblx0XHRcdFx0aWYgKGl0ZW0ubG9ja1Bvc2l0aW9uID09PSB0cnVlKSB7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpdGVtLnggPSAoKGdhbWUud2lkdGggLyAyKSAtIChpdGVtLndpZHRoIC8gMikpICsgaXRlbS5fb2Zmc2V0WDtcclxuXHRcdFx0XHRcdGl0ZW0ueSA9ICgoZ2FtZS5oZWlnaHQgLyAyKSAtIChpdGVtLmhlaWdodCAvIDIpKSArIGl0ZW0uX29mZnNldFk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwiaW1hZ2VcIikge1xyXG5cdFx0XHRcdGl0ZW0ubG9hZFRleHR1cmUodmFsdWUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHRcdGdldE1vZGFsSXRlbTogZnVuY3Rpb24gKHR5cGUsIGluZGV4KSB7XHJcblx0XHRcdHJldHVybiBnYW1lLm1vZGFsc1t0eXBlXS5nZXRDaGlsZEF0KGluZGV4KTtcclxuXHRcdH0sXHJcblx0XHRzaG93TW9kYWw6IGZ1bmN0aW9uICh0eXBlKSB7XHJcblx0XHRcdGdhbWUud29ybGQuYnJpbmdUb1RvcChnYW1lLm1vZGFsc1t0eXBlXSk7XHJcblx0XHRcdGdhbWUubW9kYWxzW3R5cGVdLnZpc2libGUgPSB0cnVlO1xyXG5cdFx0XHQvLyB5b3UgY2FuIGFkZCBhbmltYXRpb24gaGVyZVxyXG5cdFx0fSxcclxuXHRcdGhpZGVNb2RhbDogZnVuY3Rpb24gKHR5cGUpIHtcclxuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0udmlzaWJsZSA9IGZhbHNlO1xyXG5cdFx0XHQvLyB5b3UgY2FuIGFkZCBhbmltYXRpb24gaGVyZVxyXG5cdFx0fSxcclxuXHRcdGRlc3Ryb3lNb2RhbDogZnVuY3Rpb24gKHR5cGUpIHtcclxuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0uZGVzdHJveSgpO1xyXG5cdFx0XHRkZWxldGUgZ2FtZS5tb2RhbHNbdHlwZV07XHJcblx0XHR9XHJcblx0fTtcclxufTtcclxuIiwiXHJcbmNsYXNzIENsaWVudCB7XHJcbiAgICBcclxuXHRjb25zdHJ1Y3RvcihzZXB0aWtvbikge1xyXG4gICAgICAgIFxyXG5cdFx0dGhpcy5zb2NrZXQgPSBpby5jb25uZWN0KCk7XHJcbiAgICAgICAgdGhpcy5zZXB0aWtvbiA9IHRoaXMuc29ja2V0LnNlcHRpa29uID0gc2VwdGlrb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2xvZycsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTE9HOiAnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCd1cGRhdGUnLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgaWYoZGF0YS50eXBlID09IFwicGVyc29ubmVsXCIpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gZGF0YS5kZXRhaWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi5hZGRDbG9uZShkYXRhLmRldGFpbHNbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEudHlwZSA9PSBcInJlc291cmNlc1wiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3Rpb24gPT0gXCJpbml0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLmluaXRSZXNvdXJjZXMoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihkYXRhLmFjdGlvbiArIFwiIG5vdCBhIGxlZ2FsIGFjdGlvbiBmb3IgUmVzb3VyY2UgdXBkYXRlLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09IFwiZGljZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLmdhbWUuZGljZS5zZXRWYWx1ZShkYXRhLmRldGFpbHMudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVUERBVEU6Jyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEudHlwZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdyZXF1ZXN0JywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSRVFVRVNUOiAnKTtcclxuICAgICAgICAgICAgc3dpdGNoKGRhdGEuZGV0YWlscy50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYXNrU3RhcnRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLnNob3dNb2RhbCgnYXNrU3RhcnQnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2FjdGlvbicsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mKHRoaXMuc2VwdGlrb25bZGF0YS5jYWxsYmFja10pID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb25bZGF0YS5jYWxsYmFja10oZGF0YS5kZXRhaWxzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IG5vIG1ldGhvZCBmb3VuZCBjYWxsZWQgc2VwdGlrb24uXCIgKyBkYXRhLmNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cdH1cclxuXHJcblx0YXNrTmV3UGxheWVyKCkge1xyXG5cdFx0dGhpcy5zb2NrZXQuZW1pdCgnbmV3UGxheWVyJywge3V1aWQ6bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcHRVVUlEJyl9KTtcclxuXHR9XHJcbiAgICBcclxuICAgIHNlbmRJbnB1dChwYXlsb2FkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbmRpbmcgaW5wdXQnKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdpbnB1dCcsIHBheWxvYWQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbGllbnQ7XHJcbiIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXHJcblxyXG5jbGFzcyBDbG9uZSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUsIHV1aWQpIHtcclxuICAgIHN1cGVyKGdhbWUsIHgsIHksICdjbG9uZScsIGZyYW1lKTtcclxuICAgICAgICBcclxuICAgIC8vc2V0dXAgcGh5c2ljcyBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNjUpO1xyXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZUJvZHkodGhpcyk7XHJcbiAgICAvL3RoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMudXVpZCA9IHV1aWQ7XHJcbiAgICAvL3NldCBzaXplXHJcbiAgICB0aGlzLndpZHRoID0gMjc7XHJcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xyXG4gICAgXHJcbiAgICAvL3NldCByb3RhdGlvbiAodGhpcyBzaG91bGQgYmUgYmFzZWQgb24gdGhlIGJhc2UgdGhpcyBjbG9uZSBvY2N1cGllcylcclxuICAgIHRoaXMuYW5nbGUgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSAqIC0xO1xyXG5cclxuICAgIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5waXhlbHNUb1RpbGUodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XHJcblxyXG4gIH1cclxuICBcclxuICByZW1vdmUoKSB7XHJcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIGhpZ2hsaWdodE9uKCkge1xyXG4gICAgdGhpcy50aW50ID0gMHhGRjU1MDA7XHJcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0uYWxwaGEgPSAxO1xyXG4gIH1cclxuICBcclxuICBoaWdobGlnaHRPZmYoKSB7XHJcbiAgICB0aGlzLnRpbnQgPSAweGZmZmZmZjtcclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS5hbHBoYSA9IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGdldExlZ2FsTW92ZXMoKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSB0aGlzLmdhbWUuc2VwdGlrb24ucGl4ZWxzVG9UaWxlKHRoaXMueCwgdGhpcy55KTtcclxuICAgIHZhciBjdXJyZW50TGVnYWxNb3ZlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5nZXRMZWdhbE1vdmVzKHRoaXMuZ2FtZS5nbG9iYWwubGFzdERpY2VSb2xsLCB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMpO1xyXG4gICAgdmFyIGxlZ2FsVGlsZXNBcnJheSA9IFtdO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGZvciAodmFyIHRpbGUgaW4gY3VycmVudExlZ2FsTW92ZXMpIHtcclxuICAgICAgICBsZWdhbFRpbGVzQXJyYXkucHVzaCh0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W2N1cnJlbnRMZWdhbE1vdmVzW3RpbGVdLnhdW2N1cnJlbnRMZWdhbE1vdmVzW3RpbGVdLnldKTtcclxuICAgICAgICAvL2xlZ2FsVGlsZXNBcnJheVtsZWdhbFRpbGVzQXJyYXkubGVuZ3RoLTFdLmFscGhhID0gMC41O1xyXG4gICAgICAgIC8vbGVnYWxUaWxlc0FycmF5W2xlZ2FsVGlsZXNBcnJheS5sZW5ndGgtMV0ubGVnYWxGb3IgPSB0aGlzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gbGVnYWxUaWxlc0FycmF5O1xyXG4gIH1cclxuICBcclxuICBtb3ZlKGNvb3JkaW5hdGVzKSB7XHJcbiAgXHJcbiAgICAvLyBDbGVhciBcImxlZ2FsRm9yXCJcclxuICAgIGZvciAodmFyIHRpbGUgaW4gdGhpcy5sZWdhbFRpbGVzQXJyYXkpIHtcclxuICAgICAgICB0aGlzLmxlZ2FsVGlsZXNBcnJheVt0aWxlXS5hbHBoYSA9IDA7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlc0FycmF5W3RpbGVdLmxlZ2FsRm9yO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBNb3ZlIHRvIG5ldyBob21lXHJcbiAgICAvLyBOZWVkIHRvIGFkZCBhIGNoZWNrIGZvciBhcm1lZCBvcHBvbmVudHMgKGJpb2Ryb25lcy9lc3Bpb25hZ2VkIGNsb25lcy9jbG9uZXMgaW4gZW5lbXkgYmFzZSwgZXRjLilcclxuICAgIHZhciBwb2ludHMgPSB0aGlzLmdhbWUuc2VwdGlrb24udGlsZVRvUGl4ZWxzKGNvb3JkaW5hdGVzLngsIGNvb3JkaW5hdGVzLnkpO1xyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IGZhbHNlO1xyXG4gICAgdmFyIGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy55IC0gcG9pbnRzLnkgKyB0aGlzLnggLSBwb2ludHMueCkudG9GaXhlZCgxKTtcclxuICAgIFxyXG4gICAgLy8gVXBkYXRlIHRoZSBwZXJzb25uZWwgY29vcmRpbmF0ZSBwcm9wZXJ0eVxyXG4gICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XHJcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgLy8gV2FpdCBmb3IgYW5pbWF0aW9uIHRvIGNvbXBsZXRlLCB0aGVuIHByb2Nlc3MgdGlsZSB0cmlnZ2VyXHJcbiAgICB2YXIgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMpLnRvKCB7eDpwb2ludHMueCwgeTpwb2ludHMueX0sIChkaXN0YW5jZSoxMSksIFBoYXNlci5FYXNpbmcuQ3ViaWMuT3V0LCB0cnVlKTtcclxuICAgIHR3ZWVuLm9uQ29tcGxldGUuYWRkKHRoaXMuZ2FtZS5zZXB0aWtvbi50cmlnZ2VyVGlsZSwgdGhpcy5nYW1lLnNlcHRpa29uKTtcclxuICAgIFxyXG4gICAgLy8gQ2xlYXIgdGhpcy5jdXJyZW50TGVnYWxNb3Zlc1xyXG4gICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlc0FycmF5O1xyXG4gICAgZGVsZXRlIHRoaXMuY3VycmVudExlZ2FsTW92ZXM7ICAgIFxyXG4gIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDbG9uZTtcclxuIiwiLy9Eb2N1bWVudGF0aW9uIGZvciBQaGFzZXIncyAoMi42LjIpIHNwcml0ZXM6OiBwaGFzZXIuaW8vZG9jcy8yLjYuMi9QaGFzZXIuU3ByaXRlLmh0bWxcclxuY2xhc3MgQ3Jvc3NoYWlycyBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUpIHtcclxuICAgIHN1cGVyKGdhbWUsIHgsIHksICdjcm9zc2hhaXJzJywgZnJhbWUpO1xyXG5cclxuICAgIC8vc2V0IHNpemVcclxuICAgIHRoaXMud2lkdGggPSAzNTsgXHJcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xyXG5cclxuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpe1xyXG4gICAgdGhpcy54ID0gdGhpcy5nYW1lLmlucHV0Lm1vdXNlUG9pbnRlci54O1xyXG4gICAgdGhpcy55ID0gdGhpcy5nYW1lLmlucHV0Lm1vdXNlUG9pbnRlci55O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyb3NzaGFpcnM7XHJcbiIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXHJcbmNsYXNzIERpY2UgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7ICBcclxuICAgIHN1cGVyKGdhbWUsIHgsIHksICdkaWNlJywgZnJhbWUpO1xyXG5cclxuICAgIC8vc2V0dXAgcGh5c2ljcyBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XHJcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlQm9keSh0aGlzKTtcclxuXHJcbiAgICAvL3NldCBjbGljayBldmVudFxyXG4gICAgdGhpcy5pbnB1dEVuYWJsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuZXZlbnRzLm9uSW5wdXREb3duLmFkZCh0aGlzLmNsaWNrZWQsIHRoaXMpO1xyXG5cclxuICAgIC8vc2V0IHNpemVcclxuICAgIHRoaXMud2lkdGggPSA1MDtcclxuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XHJcbiAgICB0aGlzLmZpbHRlcnMgPSBbdGhpcy5nYW1lLmFkZC5maWx0ZXIoJ0dyYXknKV07XHJcbiAgICB0aGlzLmFscGhhID0gMC41O1xyXG4gICAgXHJcbiAgICB0aGlzLnZhbHVlID0gMTA7XHJcbiAgICB0aGlzLmZyYW1lID0gdGhpcy52YWx1ZS0xO1xyXG4gIH1cclxuXHJcbiAgY2xpY2tlZCAoKSB7XHJcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICdkaWNlQ2xpY2tlZCd9KTtcclxuICB9XHJcblxyXG4gIGVuYWJsZSgpIHtcclxuICAgICAgdGhpcy5hbHBoYSA9IDE7XHJcbiAgICAgIHRoaXMuZmlsdGVycyA9IG51bGw7XHJcbiAgICAgIHRoaXMuaW5wdXRFbmFibGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGRpc2FibGUoKSB7XHJcbiAgICAgIHRoaXMuYWxwaGEgPSAwLjU7XHJcbiAgICAgIHRoaXMuZmlsdGVycyA9IFt0aGlzLmdhbWUuYWRkLmZpbHRlcignR3JheScpXTtcclxuICAgICAgdGhpcy5pbnB1dEVuYWJsZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHNldFZhbHVlKHZhbHVlKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmZyYW1lID0gdmFsdWUgLSAxO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGljZTtcclxuIiwiY2xhc3MgTWFzdGVyIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKCkgeyBcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hc3RlcjsiLCJjbGFzcyBPcmRuYW5jZSB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRuYW5jZTsiLCJjbGFzcyBQZXJzb25uZWwgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUpIHtcclxuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAnY2xvbmUnLCBmcmFtZSk7ICBcclxuICAgIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc29ubmVsOyIsImNsYXNzIFJlc291cmNlcyB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICB0aGlzLnJlc291cmNlRW51bSA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgIE9YWUdFTjogMCxcclxuICAgICAgICBST0NLRVQ6IDEsXHJcbiAgICAgICAgTUVUQUw6IDIsXHJcbiAgICAgICAgRU5FUkdZOiAzLFxyXG4gICAgICAgIEJJT01BU1M6IDQsXHJcbiAgICAgICAgQklPRFJPTkU6IDUsXHJcbiAgICAgICAgVVJBTklVTTogNlxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnJlc291cmNlcyA9IHt9O1xyXG4gICAgZm9yKHZhciB0eXBlIGluIHRoaXMucmVzb3VyY2VFbnVtKSB7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZXNbdGhpcy5yZXNvdXJjZUVudW1bdHlwZV1dID0gNTtcclxuICAgIH07XHJcbiAgfVxyXG4gIFxyXG4gIGNoZWNrKHR5cGUsIGNvdW50KSB7XHJcbiAgICBpZih0aGlzLnJlc291cmNlc1t0aGlzLnJlc291cmNlRW51bVt0eXBlXV0gPiBjb3VudClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgXHJcbiAgZ2V0Q291bnQodHlwZSkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzW3R5cGVdO1xyXG4gIH1cclxuICAgIFxyXG4gIGFkZCh0eXBlLCBjb3VudCkge1xyXG4gIH1cclxuICBcclxuICByZW1vdmUodHlwZSwgY291bnQpIHtcclxuICAgIHRoaXMucmVzb3VyY2VzW3R5cGVdIC09IGNvdW50O1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VzOyIsImltcG9ydCBDbG9uZSBmcm9tICcuLi9wcmVmYWJzL2Nsb25lJztcclxuXHJcbmNsYXNzIFNlcHRpa29uIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHsgXHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgXHJcbiAgICB0aGlzLnBsYXllciA9IHtcclxuICAgICAgICBpZDogMCxcclxuICAgICAgICBwZXJzb25uZWxBcnJheTogW11cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5vcHBvbmVudCA9IHtcclxuICAgICAgICBwZXJzb25uZWxBcnJheTogW11cclxuICAgIH07XHJcbiAgICBcclxuICAgIHRoaXMuc2hvd25UaWxlcyA9IFtdO1xyXG4gICAgdGhpcy50aWxlQXJyYXkgPSBbXTtcclxuICAgIHRoaXMuYmdSYXRpbyA9IDA7XHJcbiAgICB0aGlzLndvcmxkUmF0aW8gPSAwO1xyXG4gICAgdGhpcy50dXJuU3RhdGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgU1RBUlQ6IDAsXHJcbiAgICAgICAgU0VMRUNUX0NMT05FOiAxLCBcclxuICAgICAgICBNT1ZFX0NMT05FOiAyLFxyXG4gICAgICAgIFNFTEVDVF9HVU5ORVI6IDMsXHJcbiAgICAgICAgU0VMRUNUX0FDVElPTl9PUkRFUjogNCwgXHJcbiAgICAgICAgQUNUSU9OOiA1LFxyXG4gICAgICAgIEVORDogNlxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmRpcmVjdGlvbkVudW0gPSBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICBOT1JUSDoxLFxyXG4gICAgICAgIEVBU1Q6MixcclxuICAgICAgICBTT1VUSDo0LFxyXG4gICAgICAgIFdFU1Q6OFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnR1cm5TdGF0ZSA9IDA7XHJcblxyXG4gIH1cclxuXHJcbiAgc2hvd01vZGFsKHR5cGUpIHtcclxuICAgIHRoaXMuZ2FtZS5tb2RhbC5zaG93TW9kYWwodHlwZSk7XHJcbiAgfVxyXG5cclxuICBcclxuICBkaWNlUm9sbGVkKGRldGFpbHMpIHtcclxuICAgIHRoaXMuZ2FtZS5kaWNlLnNldFZhbHVlKGRldGFpbHMudmFsdWUpO1xyXG4gICAgY29uc29sZS5sb2coZGV0YWlscyk7IFxyXG4gICAgZm9yICh2YXIgaSBpbiBkZXRhaWxzLmdhbWVQaWVjZXMpIHtcclxuICAgICAgICBmb3IgKHZhciBtIGluIGRldGFpbHMuZ2FtZVBpZWNlc1tpXS5tb3Zlcykge1xyXG4gICAgICAgICAgICB2YXIgeCA9IGRldGFpbHMuZ2FtZVBpZWNlc1tpXS5tb3Zlc1ttXS54O1xyXG4gICAgICAgICAgICB2YXIgeSA9IGRldGFpbHMuZ2FtZVBpZWNlc1tpXS5tb3Zlc1ttXS55O1xyXG4gICAgICAgICAgICB0aGlzLnNob3dUaWxlcyhbZGV0YWlscy5nYW1lUGllY2VzW2ldLm9yaWdpbl0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvZmZlckRpY2UoKSB7XHJcbiAgICAgIHRoaXMuZ2FtZS5kaWNlLmVuYWJsZSgpO1xyXG4gIH1cclxuICBcclxuICBhZGRDbG9uZShkZXRhaWxzKSB7XHJcbiAgICB2YXIgcG9pbnQgPSB0aGlzLnRpbGVUb1BpeGVscyhkZXRhaWxzLngsIGRldGFpbHMueSk7XHJcbiAgICB2YXIgY2xvbmUgPSBuZXcgQ2xvbmUodGhpcy5nYW1lLCBwb2ludC54LCBwb2ludC55LCBudWxsLCBkZXRhaWxzLnV1aWQpO1xyXG4gICAgaWYoZGV0YWlscy5wbGF5ZXJJRCA9PSB0aGlzLnBsYXllci5pZCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5LnB1c2goY2xvbmUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5LnB1c2goY2xvbmUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKGNsb25lKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUFsbFBlcnNvbm5lbCgpe1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdhbWUuYm9hcmRHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNoaWxkcmVuW2ldLmNvbnN0cnVjdG9yID09IENsb25lKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBpLS07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICB1cGRhdGVQbGF5ZXIoZGV0YWlscykge1xyXG4gICAgZm9yICh2YXIgaSBpbiBkZXRhaWxzKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJbaV0gPSBkZXRhaWxzW2ldO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdFJlc291cmNlcygpIHtcclxuICAgIGNvbnNvbGUubG9nKCdsZXRzIGluaXQgcmVjcycpO1xyXG5cclxuICAgIHZhciBjdXJyZW50UmVjID0gbnVsbDtcclxuICAgIHZhciBncmFwaGljcyA9IHRoaXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XHJcbiAgICAvL2dyYXBoaWNzLmxpbmVTdHlsZSg0LCAweGZmZDkwMCwgMSk7XHJcbiAgICBncmFwaGljcy5iZWdpbkZpbGwoMHhmZmQ5MDAsIDEpO1xyXG4gICAgZ3JhcGhpY3MuZHJhd1JvdW5kZWRSZWN0KDEwMCwgMTAwLCB0aGlzLnRpbGVXaWR0aC0yLCB0aGlzLnRpbGVIZWlnaHQtMiwgMTIpO1xyXG5cclxuICAgIGZvciAodmFyIGMgaW4gdGhpcy50aWxlQXJyYXkpIHtcclxuICAgICAgICBmb3IgKHZhciByIGluIHRoaXMudGlsZUFycmF5W2NdKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGlsZUFycmF5W2NdW3JdLnRpbGVPd25lciA9PSB0aGlzLnBsYXllci5pZCAmJiB0aGlzLnRpbGVBcnJheVtjXVtyXS50aWxlVHlwZSA9PSBcIndhcmVob3VzZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAociA8IDUgfHwgciA+IDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYyA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHRoaXMudGlsZUFycmF5W2NdW3JdLngrKHRoaXMudGlsZUFycmF5W2NdW3JdLndpZHRoLzIpLCB0aGlzLnRpbGVBcnJheVtjXVtyXS55Kyh0aGlzLnRpbGVBcnJheVtjXVtyXS53aWR0aC8yKSwgZ3JhcGhpY3MuZ2VuZXJhdGVUZXh0dXJlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMuYW5nbGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNDApLTIwO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMuYW5jaG9yLnNldFRvKDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKGN1cnJlbnRSZWMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICAgIFxyXG4gIH1cclxuICBcclxuICBjcmVhdGVUaWxlQXJyYXkoY29sdW1ucywgcm93cywgcG9pbnQpIHtcclxuICAgIHRoaXMudGlsZURldGFpbCA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRKU09OKCd0aWxlRGV0YWlsJyk7XHJcblxyXG4gICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcyA9IHt4OjAsIHk6MH07XHJcblxyXG4gICAgXHJcbiAgICB0aGlzLm1hcmdpbkJvdHRvbSA9IHRoaXMubWFyZ2luVG9wID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAuaGVpZ2h0LzE3LjQ3NTtcclxuICAgIHRoaXMubWFyZ2luTGVmdCA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoLzI0O1xyXG4gICAgdGhpcy5tYXJnaW5SaWdodCA9ICB0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aC8yNi4zMTU4O1xyXG4gICAgdGhpcy50aWxlV2lkdGggPSB0aGlzLnRpbGVIZWlnaHQgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aC8zOTtcclxuICAgIHRoaXMucGFkZGluZyA9ICh0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aCAtICh0aGlzLm1hcmdpbkxlZnQgKyB0aGlzLm1hcmdpblJpZ2h0KSAtICh0aGlzLnRpbGVXaWR0aCAqIDMxKSkvMzA7XHJcbiAgICAgICAgXHJcbiAgICAvL3RoaXMudGlsZVdpZHRoID0gMjU7Ly8odGhpcy5iYWNrZ3JvdW5kV2lkdGggLSAoKHRoaXMubWFyZ2luTGVmdCArIHRoaXMubWFyZ2luUmlnaHQpICsgKHRoaXMucGFkZGluZyAqIChjb2x1bW5zIC0gMSkpKSkgLyBjb2x1bW5zO1xyXG4gICAgLy90aGlzLnRpbGVIZWlnaHQgPSAyNTsvLyh0aGlzLmJhY2tncm91bmRIZWlnaHQgLSAoKHRoaXMubWFyZ2luVG9wICsgdGhpcy5tYXJnaW5Cb3R0b20pICsgKHRoaXMucGFkZGluZyAqIChyb3dzIC0gMSkpKSkgLyByb3dzO1xyXG4gICAgICAgIFxyXG4gICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy54ID0gcG9pbnQueCArIHRoaXMubWFyZ2luTGVmdDtcclxuICAgIHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMueSA9IHBvaW50LnkgKyB0aGlzLm1hcmdpblRvcDtcclxuICAgIFxyXG4gICAgdmFyIGdyYXBoaWNzID0gdGhpcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcclxuICAgIC8vZ3JhcGhpY3MubGluZVN0eWxlKDQsIDB4ZmZkOTAwLCAxKTtcclxuICAgIGdyYXBoaWNzLmJlZ2luRmlsbCgweGZmZDkwMCwgMSk7XHJcbiAgICBncmFwaGljcy5kcmF3UmVjdCgxMDAsIDEwMCwgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZUhlaWdodCk7XHJcbiAgICBcclxuICAgIGZvciAodmFyIGNvbHVtbiA9IDA7IGNvbHVtbiA8IGNvbHVtbnM7IGNvbHVtbisrKSB7XHJcbiAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgcm93czsgcm93KyspIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciB4ID0gdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy54ICsgKHRoaXMudGlsZVdpZHRoICogY29sdW1uKSArICh0aGlzLnBhZGRpbmcgKiBjb2x1bW4gLSAxKTtcclxuICAgICAgICAgICAgdmFyIHkgPSB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnkgKyAodGhpcy50aWxlSGVpZ2h0ICogcm93KSArICh0aGlzLnBhZGRpbmcgKiByb3cgLSAxKTtcclxuICAgICAgICAgICAgZ3JhcGhpY3MuZ2VuZXJhdGVUZXh0dXJlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgY3VycmVudFRpbGUgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh4LCB5LCBncmFwaGljcy5nZW5lcmF0ZVRleHR1cmUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFkZChjdXJyZW50VGlsZSk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlLmFscGhhID0gMDsgLy8gMC4yNTtcclxuICAgICAgICAgICAgY3VycmVudFRpbGUuaW5wdXRFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY3VycmVudFRpbGUuZXZlbnRzLm9uSW5wdXREb3duLmFkZCh0aGlzLnRpbGVDbGlja2VkLCB0aGlzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy50aWxlQXJyYXlbY29sdW1uXSA9PSAndW5kZWZpbmVkJykgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjb2x1bW5dID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NvbHVtbl1bcm93XSA9IGN1cnJlbnRUaWxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZ3JhcGhpY3MuZGVzdHJveSgpO1xyXG4gICAgXHJcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy50aWxlRGV0YWlsKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRpbGVEZXRhaWwuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMudGlsZURldGFpbFtrZXldO1xyXG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIC8vIHNraXAgbG9vcCBpZiB0aGUgcHJvcGVydHkgaXMgZnJvbSBwcm90b3R5cGVcclxuICAgICAgICAgICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgbG9jYXRpb25Db3VudCA9IG9ialtwcm9wXS5sb2NhdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IoIHZhciBpID0gMDsgaSA8IGxvY2F0aW9uQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgY29vcmRzID0gb2JqW3Byb3BdLmxvY2F0aW9uc1tpXS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9IGNvb3Jkc1swXTtcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gY29vcmRzWzFdO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlRGFtYWdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZU9jY3VwaWVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlWCA9IHg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlWSA9IHk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlVHlwZSA9IG9ialtwcm9wXS50eXBlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy50aWxlQXJyYXlbeF1beV0gIT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZU5hbWUgPSBvYmpbcHJvcF0ubmFtZTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4ICsgXCI6XCIgKyB5ICsgXCIgbm90IGZvdW5kIVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih4IDwgOSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlT3duZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeD4yMClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlT3duZXIgPSAyO1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcF0ucHJvcGVydGllcyAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldWyd0aWxlUHJvcGVydGllcyddID0gb2JqW3Byb3BdLnByb3BlcnRpZXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9fVxyXG5cclxuICBwaXhlbHNUb1RpbGUoeCwgeSkge1xyXG4gICAgdmFyIHhUaWxlID0gMDtcclxuICAgIHZhciB5VGlsZSA9IDA7XHJcbiAgICBcclxuICAgIGZvciAodmFyIGNvbCBpbiB0aGlzLnRpbGVBcnJheSkge1xyXG4gICAgICAgIGZvciAodmFyIHJvdyBpbiB0aGlzLnRpbGVBcnJheVtjb2xdKSB7XHJcbiAgICAgICAgICAgIHZhciBvYmogPSB0aGlzLnRpbGVBcnJheVtjb2xdW3Jvd11cclxuICAgICAgICAgICAgaWYoeCA+IG9iai54ICYmIHggPCBvYmoueCArIG9iai53aWR0aClcclxuICAgICAgICAgICAgICAgIHhUaWxlID0gcGFyc2VJbnQoY29sKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih5ID4gb2JqLnkgJiYgeSA8IG9iai55ICsgb2JqLmhlaWdodClcclxuICAgICAgICAgICAgICAgIHlUaWxlID0gcGFyc2VJbnQocm93KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge3g6eFRpbGUsIHk6eVRpbGV9O1xyXG4gIH1cclxuICBcclxuICB0aWxlVG9QaXhlbHMoeCwgeSkge1xyXG4gICAgdmFyIHRpbGVPYmogPSB0aGlzLnRpbGVBcnJheVt4XVt5XTtcclxuICAgIHJldHVybiB7eDp0aWxlT2JqLnggKyB0aWxlT2JqLndpZHRoLzIsIHk6dGlsZU9iai55ICsgdGlsZU9iai5oZWlnaHQvMn07XHJcbiAgfVxyXG4gIFxyXG4gIHRpbGVDbGlja2VkKG9iaikge1xyXG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAndGlsZUNsaWNrZWQnLCB4OnBhcnNlSW50KG9iai50aWxlWCksIHk6cGFyc2VJbnQob2JqLnRpbGVZKX0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBcclxuICB0cmlnZ2VyVGlsZShjYWxsZXIpIHtcclxuICBcclxuICAgIHZhciB0aWxlID0gdGhpcy50aWxlQXJyYXlbY2FsbGVyLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bY2FsbGVyLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV07XHJcbiAgICBjYWxsZXIuaXNHdW5uZXIgPSBmYWxzZTtcclxuICAgIHZhciBwcm9wcyA9IHRpbGUudGlsZVByb3BlcnRpZXM7XHJcbiAgICBcclxuICAgIHN3aXRjaCh0aWxlLnRpbGVUeXBlKSB7XHJcbiAgICAgICAgY2FzZSAnc3VyZmFjZSc6IFxyXG4gICAgICAgICAgICBjYWxsZXIuaXNHdW5uZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaFR1cm4oKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ2JhdHRsZSc6XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcHMucmVzb3VyY2VDb3N0Q291bnQgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIENBTiBUSElTIFRFQU0gQUZGT1JEIFRIRSBDT1NUP1xyXG4gICAgICAgICAgICAgICAgLy8gRVhDSEFOR0UgUkVTT1VSQ0VTIC8vIFBBWSBVUCEhXHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGF2YWlsYWJsZSByZXNvdXJjZSBjb3VudCBhbmQgcHJlcGFyZSB0byBvZmZlciBcImd1bm5lclwiIGNsb25lcyBmb3Igc2VsZWN0aW9uLlxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIklzIHRoaXMgcmVzb3VyY2UgYXZhaWxhYmxlP1wiKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFR5cGVzIG9mIGJhdHRsZSB0aWxlcyB3aXRoIGEgRklSRSBhY3Rpb246XHJcbiAgICAgICAgICAgICAgICAvLyAgLSBTYXRlbGxpdGU6IGd1bm5lcjp0cnVlLCBwcm9qZWN0aWxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAvLyAgLSBUaGVybWl0ZTogZ3VubmVyOnRydWUsIHByb2plY3RpbGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAvLyAgLSBTaGllbGQ6IGd1bm5lcjp0cnVlLCBwcm9qZWN0aWxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAvLyAgLSBCaW9kcm9uZTogZ3VubmVyOnRydWUsIHByb2plY3RpbGU6IHRydWVcclxuICAgICAgICAgICAgICAgIC8vICAtIExhc2VyOiBndW5uZXI6dHJ1ZSwgcHJvamVjdGlsZTogZmFsc2VcclxuICAgICAgICAgICAgICAgIC8vICAtIFJvY2tldDogZ3VubmVyOnRydWUsIHByb2plY3RpbGU6IHRydWVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRpbGUudGlsZU5hbWUpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbFRlYW0ub2ZmZXJHdW5uZXJzKCkgPT0gZmFsc2UgJiYgKHRpbGUudGlsZU5hbWUgPT0gXCJzYXRlbGxpdGVcIiB8fCB0aWxlLnRpbGVOYW1lID09IFwidGhlcm1pdGVcIiB8fCB0aWxlLnRpbGVOYW1lID09IFwic2hpZWxkXCIgfHwgdGlsZS50aWxlTmFtZSA9PSBcImJpb2Ryb25lXCIgfHwgdGlsZS50aWxlTmFtZSA9PSBcImxhc2VyXCIgfHwgdGlsZS50aWxlTmFtZSA9PSBcInJvY2tldFwiICkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaFR1cm4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5sb2NhbFRlYW0uY2hlY2tSZWModGhpcy5sb2NhbFRlYW0ucmVjRW51bVtwcm9wcy5yZXNvdXJjZUNvc3RUeXBlLnRvVXBwZXJDYXNlKCldLCBwcm9wcy5yZXNvdXJjZUNvc3RDb3VudCkpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5sb2NhbFRlYW0uY2hlY2tSZWModGhpcy5sb2NhbFRlYW0ucmVjRW51bVtwcm9wcy5yZXNvdXJjZUNvc3RUeXBlLnRvVXBwZXJDYXNlKCldLCBwcm9wcy5yZXNvdXJjZUNvc3RDb3VudCkgPT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbFRlYW0ucmVtb3ZlUmVjKHRoaXMubG9jYWxUZWFtLnJlY0VudW1bcHJvcHMucmVzb3VyY2VDb3N0VHlwZS50b1VwcGVyQ2FzZSgpXSwgcHJvcHMucmVzb3VyY2VDb3N0Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJOZXcgY291bnQgb2YgXCIgKyBwcm9wcy5yZXNvdXJjZUNvc3RUeXBlICsgXCIgaXMgXCIgKyB0aGlzLmxvY2FsVGVhbS5nZXRSZWNDb3VudCh0aGlzLmxvY2FsVGVhbS5yZWNFbnVtW3Byb3BzLnJlc291cmNlQ29zdFR5cGUudG9VcHBlckNhc2UoKV0pKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmxvY2FsVGVhbS5vZmZlckd1bm5lcnMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdBY3Rpb24gPSB7cHJvcHMsIGNhbGxlcn07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIE9GRkVSIEdVTk5FUlMgQU5EIEFXQUlUIFNFTEVDVElPTiAocmVtZW1iZXIgdGhlIGNvc3QgcGVyIGd1bm5lcilcclxuICAgICAgICAgICAgLy8gVGhpcyB3aWxsIHJlcXVpcmUgYW4gYXJyYXkgb2YgY2xvbmVzIGFzc29jaWF0ZWQgd2l0aCB0aGUgdGVhbS4gXHJcbiAgICAgICAgICAgIC8vIEl0ZXJhdGUgdGhlIGFycmF5IGxvb2tpbmcgZm9yICdpc0d1bm5lciA9PSB0cnVlJ1xyXG4gICAgICAgICAgICAvLyBIaWdobGlnaHQgYWxsIFwiZ3VubmVyXCIgY2xvbmVzXHJcbiAgICAgICAgICAgIC8vIEFsbG93IHNlbGVjdGlvbiBvZiBvbmx5IGFzIG1hbnkgYXMgdGVhbSBjYW4gYWZmb3JkXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFRoaXMgd2lsbCBjYWxsIHRoZSBtZXRob2QgZGVmaW5lZCBpbiBKU09OLiBJbiB0aGlzIGNhc2UgZmlyaW5nIGEgd2VhcG9uLlxyXG4gICAgICAgICAgICAvLyBJdGVyYXRlIHRoZSBzZWxlY3RlZCBndW5uZXJzIGFuZCBjYWxsIHRoZSBtZXRob2QuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSAnYXJtb3J5JzpcclxuICAgICAgICAgICAgLy9TRVQgVEVBTSBXRUFQT05TIVxyXG4gICAgICAgICAgICAvLyBUaGlzIHJlcXVpcmVzIGEgVGVhbSBwcm9wZXJ0eSBmb3Igc3RvcmluZyBhIHdlYXBvbnMgKGFybXM/KSBhcnJheS5cclxuICAgICAgICAgICAgdGhpcy5maW5pc2hUdXJuKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjYXNlICdwcm9kdWN0aW9uJzpcclxuICAgICAgICAgICAgLy8gTk9URTogVGhlc2UgYXJlIHJlcXVpcmVkIGlmIHJlc291cmNlcyBhbGxvd1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3BzLnJlc291cmNlQ29zdENvdW50ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDQU4gVEhJUyBURUFNIEFGRk9SRCBUSEUgQ09TVD9cclxuICAgICAgICAgICAgICAgIC8vIFJlcXVpcmVzIFRlYW0gb2JqZWN0IHRvIGNoZWNrIGZvciByZXNvdXJjZXNcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gR2V0IGNvc3QgY291bnRcclxuICAgICAgICAgICAgICAgIC8vIEdldCBjb3N0IHR5cGVcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gR2V0IHlpZWxkIGNvdW50XHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgeWllbGQgdHlwZVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBFeGVjdXRlIHRyYW5zYWN0aW9uXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaFR1cm4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSAnbG9jayc6XHJcbiAgICAgICAgICAgIC8vIE5PVEhJTkcgSEVSRSAobWF5YmUgYW4gdXBkYXRlIGZlYXR1cmU/PylcclxuICAgICAgICAgICAgdGhpcy5maW5pc2hUdXJuKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH07IFxyXG4gICAgICAgICAgICBcclxuICAgIC8vIENPTU1JVCBBQ1RJT05cclxuICAgIFxyXG4gIH1cclxuICBcclxuICAgIGZpcmUod2VhcG9uVHlwZSwgY2FsbGVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZpcmluZyB0aGUgXCIgKyB3ZWFwb25UeXBlKTtcclxuICAgIFxyXG4gICAgc3dpdGNoICh3ZWFwb25UeXBlKSB7XHJcbiAgICAgICAgY2FzZSAnbGFzZXInOlxyXG4gICAgICAgICAgICAvL2ZvciAodmFyIGkgaW4gdGhpcy5sb2NhbFRlYW0uc2VsZWN0ZWRHdW5uZXJzKSB7XHJcbiAgICAgICAgICAgIC8vICAgIHRoaXMuc2hvb3RUaWxlKHRoaXMubG9jYWxUZWFtLnNlbGVjdGVkR3VubmVyc1tpXS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzKTtcclxuICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgIC8vYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ3NhdGVsbGl0ZSc6XHJcbiAgICAgICAgICAgIC8vIFBMQUNFIEEgU0FURUxMSVRFXHJcbiAgICAgICAgICAgLy8gYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ3RoZXJtaXRlJzpcclxuICAgICAgICAgICAgLy90aGlzLnNob290VGlsZShjYWxsZXIuY3VycmVudFRpbGVDb29yZGluYXRlcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ3NoaWVsZCc6XHJcbiAgICAgICAgICAgIC8vYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ2Jpb2Ryb25lJzpcclxuICAgICAgICAgICAgLy9icmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSAncm9ja2V0JzogXHJcbiAgICAgICAgICAgIC8vYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5sb2NhbFRlYW0uc2VsZWN0ZWRHdW5uZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob290VGlsZSh0aGlzLmxvY2FsVGVhbS5zZWxlY3RlZEd1bm5lcnNbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB0aGlzLmxvY2FsVGVhbS5jbGVhckd1bm5lcnMoKTtcclxuICAgIC8vdGhpcy5nYW1lLnNlcHRpa29uLnR1cm5TdGF0ZSA9IHRoaXMuZ2FtZS5zZXB0aWtvbi50dXJuU3RhdGVFbnVtLlNUQVJUO1xyXG4gICAgdGhpcy5maW5pc2hUdXJuKCk7XHJcbiAgfVxyXG4gIFxyXG4gIHJlcGFpcihjb3VudCkge1xyXG4gICAgY29uc29sZS5sb2coXCJyZXBhaXIgXCIgKyBjb3VudCArIFwiIG9mIHRoZSB0aGluZ3MhXCIpO1xyXG4gIH1cclxuICBcclxuICBlc3Bpb25hZ2UoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkdpbW1lIHllciBjbG9uZSEhXCIpO1xyXG4gIH1cclxuICBcclxuICB0YWtlb3ZlcigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiR2ltbWUgeWVyIHNhdGVsbGl0ZSEhXCIpO1xyXG4gIH1cclxuICBcclxuICBjb3VudGVyKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJHaW1tZSBiYWNrIG15IGNsb25lISFcIik7XHJcbiAgfVxyXG4gIFxyXG4gIGtpbGxCaW9kcm9uZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiWWVyIHNvdWxkIGJldHRlciBiZWxvbmcgdG8gSmVzdXMhIEN1eiB5ZXIgYXNzIGJlbG9uZ3MgdG8gbWUhXCIpO1xyXG4gIH1cclxuICBcclxuICBmaW5pc2hUdXJuKCkge1xyXG4gICAgdGhpcy50dXJuU3RhdGUgPSB0aGlzLmdhbWUuc2VwdGlrb24udHVyblN0YXRlRW51bS5TVEFSVDtcclxuICAgIC8vY29uc29sZS5sb2coXCJBbGFzLiBZb3VyIHR1cm4gaXMgb3Zlci4gXCIpO1xyXG4gIH1cclxuICBcclxuXHJcbiAgZ2V0TGVnYWxNb3Zlcyhtb3ZlcywgY3VycmVudENvb3JkLCBwcmV2aW91c0Nvb3JkKSB7XHJcblx0bW92ZXMtLTtcclxuXHR2YXIgbGVnYWxNb3ZlcyA9IFtdO1xyXG5cdGZvcih2YXIgZGlyZWN0aW9uIGluIHRoaXMuZGlyZWN0aW9uRW51bSkge1x0XHJcblx0XHQvLyBORUVEIFRPIENIRUNLIEZPUiBMT0NLU1xyXG5cdFx0dmFyIG1vdmVDaGVjayA9IHRoaXMuZ2V0Q29vcmRGcm9tRGlyZWN0aW9uKGN1cnJlbnRDb29yZCxkaXJlY3Rpb24pO1xyXG4gICAgICAgIGlmIChtb3ZlQ2hlY2sgPT0gZmFsc2UpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB2YXIgdGlsZVRvQ2hlY2sgPSB0aGlzLnRpbGVBcnJheVttb3ZlQ2hlY2sueF1bbW92ZUNoZWNrLnldO1xyXG5cclxuICAgICAgICAvLyB0aWxlIGlzIGxlZ2FsIElGIGRpcmVjdGlvbiBpcyBvayBBTkQgdGlsZSBpcyBub3QgZGFtYWdlZCBBTkQgKCB0aGVyZSBpcyBubyBwcmV2aW91cyBjb29yZGluYXRlIE9SIHRoaXMgaXMgbm90IHRoZSBwcmV2aW91cyBjb29yZGluYXRlIClcclxuXHRcdGlmKHRoaXMuY2hlY2tXYWxsKHRoaXMuZGlyZWN0aW9uRW51bVtkaXJlY3Rpb25dLCBjdXJyZW50Q29vcmQpID09PSB0cnVlICYmIHRpbGVUb0NoZWNrLnRpbGVEYW1hZ2VkID09PSBmYWxzZSAmJiAoKHR5cGVvZiBwcmV2aW91c0Nvb3JkID09PSAndW5kZWZpbmVkJykgfHwgKCh0eXBlb2YgcHJldmlvdXNDb29yZCAhPT0gJ3VuZGVmaW5lZCcpICYmIChKU09OLnN0cmluZ2lmeShtb3ZlQ2hlY2spICE9PSBKU09OLnN0cmluZ2lmeShwcmV2aW91c0Nvb3JkKSkgKSkpIHtcclxuXHRcdFx0Ly8gQ2hlY2sgaWYgdGlsZSBpcyBvY2N1cGllZFxyXG4gICAgICAgICAgICBpZihtb3Zlcz09MCl7XHJcbiAgICAgICAgICAgICAgICBpZih0aWxlVG9DaGVjay50aWxlT2NjdXBpZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVnYWxNb3Zlcy5wdXNoKG1vdmVDaGVjayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dmFyIHJldHVybkFycmF5ID0gKHRoaXMuZ2V0TGVnYWxNb3Zlcyhtb3ZlcywgbW92ZUNoZWNrLCBjdXJyZW50Q29vcmQpKTtcclxuXHRcdFx0XHRmb3IodmFyIGluZGV4IGluIHJldHVybkFycmF5KSB7XHJcblx0XHRcdFx0XHRpZihKU09OLnN0cmluZ2lmeShyZXR1cm5BcnJheVtpbmRleF0pICE9PSBKU09OLnN0cmluZ2lmeShjdXJyZW50Q29vcmQpKVxyXG5cdFx0XHRcdFx0XHRsZWdhbE1vdmVzLnB1c2gocmV0dXJuQXJyYXlbaW5kZXhdKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIGxlZ2FsTW92ZXM7XHJcbiAgfVxyXG4gICAgXHJcbiAgZ2V0Q29vcmRGcm9tRGlyZWN0aW9uKG9yaWdpbkNvb3JkLGRpcmVjdGlvbikge1xyXG5cclxuXHR2YXIgZGlyPXtOT1JUSDp7eDowLHk6LTF9LEVBU1Q6e3g6MSx5OjB9LFNPVVRIOnt4OjAseToxfSxXRVNUOnt4Oi0xLHk6MH19O1xyXG4gICAgXHJcbiAgICB2YXIgb2JqID0ge3g6KHBhcnNlSW50KG9yaWdpbkNvb3JkLngpICsgcGFyc2VJbnQoZGlyW2RpcmVjdGlvbl0ueCkpLCB5OihwYXJzZUludChvcmlnaW5Db29yZC55KSArIHBhcnNlSW50KGRpcltkaXJlY3Rpb25dLnkpKX07XHJcbiAgICBpZihvYmoueCA8IDAgfHwgb2JqLnkgPCAwKSBcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblx0ZWxzZVxyXG4gICAgICAgIHJldHVybiB7eDoocGFyc2VJbnQob3JpZ2luQ29vcmQueCkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS54KSksIHk6KHBhcnNlSW50KG9yaWdpbkNvb3JkLnkpICsgcGFyc2VJbnQoZGlyW2RpcmVjdGlvbl0ueSkpfTtcclxuXHRcdFxyXG4gIH1cclxuICBcclxuICBzaG93VGlsZXMoY29vcmRzQXJyYXkpIHtcclxuICAgIGZvciAodmFyIGkgaW4gY29vcmRzQXJyYXkpIHtcclxuICAgICAgICB0aGlzLnRpbGVBcnJheVtjb29yZHNBcnJheVtpXS54XVtjb29yZHNBcnJheVtpXS55XS5hbHBoYSA9IDAuNTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmb3IgKHZhciBpIGluIHRpbGVzQXJyYXkpIHtcclxuICAgIC8vICAgICB0aGlzLnNob3duVGlsZXMucHVzaCh0aWxlc0FycmF5W2ldKTtcclxuICAgIC8vICAgICB0aWxlc0FycmF5W2ldLmFscGhhID0gMC41O1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICBcclxuICBoaWRlVGlsZXModGlsZUFycmF5KSB7XHJcbiAgICBpZighdGlsZUFycmF5KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnNob3duVGlsZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93blRpbGVzW2ldLmFscGhhID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93blRpbGVzID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG9vdFRpbGUoY2xvbmVDb29yZGluYXRlcykge1xyXG4gIFxyXG4gICAgdmFyIGN1cnJlbnRYID0gY2xvbmVDb29yZGluYXRlcy54O1xyXG4gICAgdmFyIGN1cnJlbnRZID0gY2xvbmVDb29yZGluYXRlcy55O1xyXG4gICAgdmFyIGN1cnJlbnRUaWxlID0gdGhpcy50aWxlQXJyYXlbY3VycmVudFhdW2N1cnJlbnRZXTtcclxuICAgIGRvIHtcclxuICAgICAgICBjdXJyZW50WCsrO1xyXG4gICAgICAgIGN1cnJlbnRUaWxlID0gdGhpcy50aWxlQXJyYXlbY3VycmVudFhdW2N1cnJlbnRZXTtcclxuICAgIH0gd2hpbGUgKGN1cnJlbnRUaWxlLnRpbGVUeXBlID09ICdzcGFjZScgfHwgY3VycmVudFRpbGUudGlsZVR5cGUgPT0gJ3N1cmZhY2UnIHx8IGN1cnJlbnRUaWxlLnRpbGVEYW1hZ2VkID09IHRydWUpO1xyXG4gICAgXHJcbiAgICBjdXJyZW50VGlsZS50aW50ID0gMFgzMzMzMzM7XHJcbiAgICBjdXJyZW50VGlsZS5hbHBoYSA9IDAuODtcclxuICAgIGN1cnJlbnRUaWxlLnRpbGVEYW1hZ2VkID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgdGhpcy50ZXN0ID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoY3VycmVudFRpbGUueCwgY3VycmVudFRpbGUueSArKGN1cnJlbnRUaWxlLmhlaWdodC8yKSwgJ2Jvb20nKTtcclxuICAgIHRoaXMudGVzdC5hbmdsZSA9IDI3MDtcclxuICAgIHRoaXMudGVzdC5hbmNob3Iuc2V0KDAuNSwwLjcpO1xyXG4gICAgdGhpcy50ZXN0LmFuaW1hdGlvbnMuYWRkKCdib29tJyk7XHJcbiAgICB0aGlzLnRlc3QuYW5pbWF0aW9ucy5wbGF5KCdib29tJywgMjAsIGZhbHNlLCB0cnVlKTtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICBjaGVja1dhbGwoZGlyZWN0aW9uLCBjdXJyZW50Q29vcmRpbmF0ZSkge1xyXG4gICAgdGhpcy53YWxsR3JpZCA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRKU09OKCd3YWxsR3JpZCcpO1xyXG5cdHN3aXRjaCAoZGlyZWN0aW9uKXtcclxuXHRcdGNhc2UgdGhpcy5kaXJlY3Rpb25FbnVtLk5PUlRIOiAvLyBVUFxyXG5cdFx0XHRpZiAocGFyc2VJbnQodGhpcy53YWxsR3JpZC5ncmlkW2N1cnJlbnRDb29yZGluYXRlLnhdW2N1cnJlbnRDb29yZGluYXRlLnldJnRoaXMuZGlyZWN0aW9uRW51bS5OT1JUSCkgPT0gMCkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHRcdGNhc2UgdGhpcy5kaXJlY3Rpb25FbnVtLlNPVVRIOiAvLyBET1dOXHJcblx0XHRcdGlmIChwYXJzZUludCh0aGlzLndhbGxHcmlkLmdyaWRbY3VycmVudENvb3JkaW5hdGUueF1bY3VycmVudENvb3JkaW5hdGUueV0mdGhpcy5kaXJlY3Rpb25FbnVtLlNPVVRIKSA9PSAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdFx0Y2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uRUFTVDogLy8gUklHSFRcclxuXHRcdFx0aWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uRUFTVCkgPT0gMCkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHRcdGNhc2UgdGhpcy5kaXJlY3Rpb25FbnVtLldFU1Q6IC8vIExFRlRcclxuXHRcdFx0aWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uV0VTVCkgPT0gMCkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgc2V0dXAoKSB7XHJcbiAgICAvL1Nob3VsZCBhc2sgZm9yIHBsYXllciBuYW1lIGFuZCBhc3NpZ24gYSBjb2xvci4gXHJcbiAgICAvL0dpdmUgd2FpdGluZyBpbmRpY2F0b3JcclxuICAgIC8vT2ZmZXIgc29tZSB3YXkgdG8gcGljayBhIGdhbWU/IElESy4uXHJcbiAgfVxyXG4gIFxyXG4gIHN0YXJ0R2FtZSgpIHtcclxuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xyXG4gIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXB0aWtvbjtcclxuIiwiaW1wb3J0IFJlc291cmNlcyBmcm9tICcuLi9wcmVmYWJzL3Jlc291cmNlcyc7XHJcbmltcG9ydCBQZXJzb25uZWwgZnJvbSAnLi4vcHJlZmFicy9wZXJzb25uZWwnO1xyXG5pbXBvcnQgT3JkbmFuY2UgZnJvbSAnLi4vcHJlZmFicy9vcmRuYW5jZSc7XHJcbmltcG9ydCBDbG9uZSBmcm9tICcuLi9wcmVmYWJzL2Nsb25lJzsgLy8gVGhpcyB3aWxsIGJlIGluY29ycG9yYXRlZCBpbiBwZXJzb25uZWxcclxuXHJcbmNsYXNzIFRlYW0ge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoZ2FtZSkgeyBcclxuICAgIHRoaXMucmVjID0gbmV3IFJlc291cmNlcygpO1xyXG4gICAgdGhpcy5yZWNFbnVtID0gdGhpcy5yZWMucmVzb3VyY2VFbnVtO1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgIFxyXG4gICAgdGhpcy5wZXJzb25uZWwgPSBbXTtcclxuICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzID0gW107XHJcbiAgfVxyXG4gIFxyXG4gIHJlZnJlc2goKSB7XHJcbiAgICBmb3IgKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLnBlcnNvbm5lbFtpXS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy9SZXNvdXJjZSBJbnRlcmZhY2VcclxuICBnZXRSZWNDb3VudCh0eXBlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZWMuZ2V0Q291bnQodHlwZSk7XHJcbiAgfVxyXG4gIFxyXG4gIGNoZWNrUmVjKHR5cGUsIGNvdW50KSB7XHJcbiAgICBpZiAodGhpcy5nZXRSZWNDb3VudCh0eXBlKSA+PSBjb3VudCkgXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIFxyXG4gIGV4Y2hhbmdlUmVjKGNvc3RUeXBlLCBjb3N0Q291bnQsIHlpZWxkVHlwZSwgeWllbGRDb3VudCkge1xyXG4gIH1cclxuICBcclxuICBhZGRSZWModHlwZSwgY291bnQpIHtcclxuICAgIHJldHVybiB0aGlzLnJlYy5hZGQodHlwZSwgY291bnQpO1xyXG4gIH1cclxuICBcclxuICByZW1vdmVSZWModHlwZSwgY291bnQpIHtcclxuICAgIHJldHVybiB0aGlzLnJlYy5yZW1vdmUodHlwZSwgY291bnQpO1xyXG4gIH1cclxuICBcclxuICBhZGRDbG9uZSh4LCB5LCBwcm9wcykge1xyXG4gICAgdmFyIHBvaW50ID0gdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVUb1BpeGVscyh4LHkpO1xyXG4gICAgdmFyIGNsb25lID0gbmV3IENsb25lKHRoaXMuZ2FtZSxwb2ludC54LHBvaW50LnkpO1xyXG4gICAgY2xvbmUuY3VycmVudFRpbGVDb29yZGluYXRlcy54ID0geDtcclxuICAgIGNsb25lLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueSA9IHk7XHJcbiAgICBcclxuICAgIGZvciAodmFyIGkgaW4gcHJvcHMpIHtcclxuICAgICAgICBjbG9uZVtpXSA9IHByb3BzW2ldO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wZXJzb25uZWwucHVzaChjbG9uZSk7XHJcbiAgICB0aGlzLmdhbWUuc3RhZ2UuYWRkQ2hpbGQoY2xvbmUpO1xyXG4gIH1cclxuICBcclxuICBnZXRDbG9uZShjb29yZCkge1xyXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbCkge1xyXG4gICAgICAgIGlmKHRoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueCA9PSBjb29yZC54ICYmIHRoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueSA9PSBjb29yZC55KXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGVyc29ubmVsW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAga2lsbENsb25lKGNvb3JkKSB7XHJcbiAgICB2YXIgY2xvbmUgPSB0aGlzLmdldENsb25lKGNvb3JkKTtcclxuICAgIHRoaXMuZ2FtZS5zdGFnZS5yZW1vdmVDaGlsZChjbG9uZSk7XHJcbiAgICBcclxuICAgIHZhciBpbmRleCA9IHRoaXMucGVyc29ubmVsLmluZGV4T2YoY2xvbmUpO1xyXG4gICAgdGhpcy5wZXJzb25uZWwuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgXHJcbiAgICBjbG9uZS5yZW1vdmUoKTtcclxuICB9XHJcbiAgICBcclxuICBvZmZlckxlZ2FsQ2xvbmVzKCkge1xyXG4gICAgLy8gT2ZmZXIgY2xvbmVzIHRoYXQgaGF2ZSBsZWdhbCBtb3Zlc1xyXG4gICAgZm9yKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XHJcbiAgICAgICAgdmFyIG1vdmVzID0gdGhpcy5wZXJzb25uZWxbaV0uZ2V0TGVnYWxNb3ZlcygpO1xyXG5cclxuICAgICAgICBpZihtb3ZlcyAhPSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBlcnNvbm5lbFtpXS5oaWdobGlnaHRPbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgb2ZmZXJHdW5uZXJzKCkge1xyXG4gICAgLy8gT2ZmZXIgZ3VubmVyIFxyXG4gICAgdmFyIGd1bm5lckZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcclxuICAgICAgICBpZih0aGlzLnBlcnNvbm5lbFtpXS5pc0d1bm5lcikge1xyXG4gICAgICAgICAgICBndW5uZXJGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vdGhpcy5wZXJzb25uZWxbaV0uaGlnaGxpZ2h0T24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ3VubmVyRm91bmQ7XHJcbiAgfVxyXG4gIFxyXG4gIHNlbGVjdEd1bm5lcihjb29yZHMpIHtcclxuICAgIHZhciBjbG9uZSA9IHRoaXMuZ2V0Q2xvbmUoY29vcmRzKTtcclxuICAgIGlmKCFjbG9uZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBpZighY2xvbmUuaXNHdW5uZXIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgdmFyIGV4aXN0aW5nR3VubmVyID0gdGhpcy5zZWxlY3RlZEd1bm5lcnMuaW5kZXhPZihjbG9uZSk7XHJcbiAgICBpZihleGlzdGluZ0d1bm5lciA+PSAwKXtcclxuICAgICAgICBjbG9uZS5oaWdobGlnaHRPZmYoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycy5zcGxpY2UoZXhpc3RpbmdHdW5uZXIsIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjbG9uZS5oaWdobGlnaHRPbigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzLnB1c2goY2xvbmUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBjbGVhckd1bm5lcnMoKSB7XHJcbiAgICBmb3IgKHZhciBpIGluIHRoaXMuc2VsZWN0ZWRHdW5uZXJzKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnNbaV0uaGlnaGxpZ2h0T2ZmKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGVjdGVkR3VubmVycyA9IFtdO1xyXG4gIH1cclxuICBcclxuICBzZWxlY3RDbG9uZUZvck1vdmUoY29vcmRzKSB7ICAgIFxyXG4gIFxyXG4gICAgdmFyIGNsb25lID0gdGhpcy5nZXRDbG9uZShjb29yZHMpO1xyXG4gICAgaWYoIWNsb25lKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcclxuICAgICAgICB0aGlzLnBlcnNvbm5lbFtpXS5oaWdobGlnaHRPZmYoKTtcclxuICAgIH1cclxuICAgIHRoaXMubGVnYWxUaWxlcyA9IGNsb25lLmdldExlZ2FsTW92ZXMoKTtcclxuICAgIHRoaXMuc2VsZWN0ZWRDbG9uZSA9IGNsb25lO1xyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnNob3dUaWxlcyh0aGlzLmxlZ2FsVGlsZXMpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIG1vdmVTZWxlY3RlZENsb25lKGNvb3Jkcykge1xyXG4gICAgZm9yKHZhciBpIGluIHRoaXMubGVnYWxUaWxlcykge1xyXG4gICAgICAgIGlmKHRoaXMubGVnYWxUaWxlc1tpXS50aWxlWCA9PSBjb29yZHMueCAmJiB0aGlzLmxlZ2FsVGlsZXNbaV0udGlsZVkgPT0gY29vcmRzLnkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENsb25lLm1vdmUoY29vcmRzKTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRDbG9uZTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlcztcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbTsiLCJjbGFzcyBPcmRuYW5jZSB7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLk9yZG5hbmNlID0gT3JkbmFuY2U7XHJcbiIsImNsYXNzIFBlcnNvbm5lbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodHlwZSwgeCwgeSwgdXVpZCkge1xyXG4gICAgICAgIHRoaXMudHlwZUVudW0gPSBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICAgICAgY2xvbmU6IDAsXHJcbiAgICAgICAgICAgIGJpb2Ryb25lOiAxXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Jpb2Ryb25lJzpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjbG9uZSc6XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVFbnVtW3R5cGVdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBtb3ZlKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLlBlcnNvbm5lbCA9IFBlcnNvbm5lbDtcclxuIiwidmFyIFBlcnNvbm5lbCA9IHJlcXVpcmUoJy4vcGVyc29ubmVsJykuUGVyc29ubmVsO1xyXG52YXIgUmVzb3VyY2UgPSByZXF1aXJlKCcuL3Jlc291cmNlJykuUmVzb3VyY2U7XHJcbnZhciBPcmRuYW5jZSA9IHJlcXVpcmUoJy4vb3JkbmFuY2UnKS5PcmRuYW5jZTtcclxuXHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNvY2tldElELCBpZCwgdXVpZCkgeyBcclxuICAgICAgICB0aGlzLnNvY2tldElEID0gc29ja2V0SUQ7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkOyAvL3BsYXllciAxIG9yIHBsYXllciAyOyB0aGlzIHdpbGwgZGV0ZXJtaW5lIHRoZSBzaWRlIG9mIHRoZSBib2FyZCBhdCBjbGllbnQgc3RhcnQuXHJcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZDtcclxuICAgICAgICB0aGlzLnBlcnNvbm5lbEFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5vcmRuYW5jZUFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5yZWFkeVRvU3RhcnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXJ0aW5nQ2xvbmVDb3VudCA9IDU7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdFJlc291cmNlcygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21wbGV0ZScpXHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICBhZGRQZXJzb25uZWwodHlwZSwgeCwgeSwgdXVpZCkge1xyXG4gICAgICAgIGlmKHR5cGUgPT0gXCJjbG9uZVwiICYmIHRoaXMuZ2V0UGVyc29ubmVsKHR5cGUpLmxlbmd0aCA8IHRoaXMuc3RhcnRpbmdDbG9uZUNvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyc29ubmVsQXJyYXkucHVzaChuZXcgUGVyc29ubmVsKCdjbG9uZScsIHgsIHksIHV1aWQpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVQZXJzb25uZWwocGVyc29ubmVsLCBwdXJnZUFsbCkge1xyXG4gICAgICAgIGlmIChwdXJnZUFsbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBlcnNvbm5lbEFycmF5ID0gW107XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFBlcnNvbm5lbCh0eXBlKSB7XHJcbiAgICAgICAgdmFyIHJldHVybkFycmF5ID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpIGluIHRoaXMucGVyc29ubmVsQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYodHlwZSA9PT0gbnVsbCB8fCB0aGlzLnBlcnNvbm5lbEFycmF5W2ldLnR5cGUgPT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy5wZXJzb25uZWxBcnJheVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPcmRuYW5jZSh0eXBlKSB7XHJcbiAgICAgICAgdmFyIHJldHVybkFycmF5ID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpIGluIHRoaXMub3JkbmFuY2VBcnJheSkge1xyXG4gICAgICAgICAgICBpZih0eXBlID09PSBudWxsIHx8IHRoaXMub3JkbmFuY2VBcnJheVtpXS50eXBlID09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMub3JkbmFuY2VBcnJheVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0UmVzb3VyY2VzKCkge1xyXG4gICAgICAgIHZhciByZWNBcnJheSA9IFtcclxuICAgICAgICAgICAgJ2VuZXJneTEnLCBcclxuICAgICAgICAgICAgJ2VuZXJneTInLFxyXG4gICAgICAgICAgICAnb3h5Z2VuJyxcclxuICAgICAgICAgICAgJ21ldGFsJyxcclxuICAgICAgICAgICAgJ2Jpb2Ryb25lJyxcclxuICAgICAgICAgICAgJ3JvY2tldCcsXHJcbiAgICAgICAgICAgICd1cmFuaXVtJyxcclxuICAgICAgICAgICAgJ2Jpb21hc3MnXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgdmFyIHJlYyA9IG51bGw7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiByZWNBcnJheSkge1xyXG4gICAgICAgICAgICByZWMgPSBuZXcgUmVzb3VyY2UocmVjQXJyYXlbaV0pO1xyXG4gICAgICAgICAgICB0aGlzLnJlc291cmNlQXJyYXlbcmVjQXJyYXlbaV1dID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGNvdW50ID0gMDsgY291bnQgPCA1OyBjb3VudCsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlQXJyYXlbcmVjQXJyYXlbaV1dLnB1c2gocmVjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKHZhciBjb3VudCA9IDA7IGNvdW50IDwgNTsgY291bnQrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5W3JlY0FycmF5W2ldXS5wdXNoKG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5QbGF5ZXIgPSBQbGF5ZXI7XHJcbiIsImNsYXNzIFJlc291cmNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuUmVzb3VyY2UgPSBSZXNvdXJjZTtcclxuIiwidmFyIFBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyJykuUGxheWVyO1xyXG5cclxuY2xhc3MgU2VwdGlrb24ge1xyXG4gICAgXHJcblx0Y29uc3RydWN0b3IoaW8pIHtcclxuICAgICAgICB0aGlzLmlvID0gaW87XHJcbiAgICAgICAgdGhpcy5sYXN0UGxheWVySUQgPSAwO1xyXG4gICAgICAgIHRoaXMucGxheWVyc0FycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAwO1xyXG4gICAgICAgIHRoaXMudHVyblN0YXRlID0gMDtcclxuICAgICAgICB0aGlzLnV1aWQgPSByZXF1aXJlKCd1dWlkL3Y0JykoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERpY2VWYWx1ZSA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgICAgIFNFVFVQOiAwLFxyXG4gICAgICAgICAgICBHQU1FOiAxLCBcclxuICAgICAgICAgICAgUEFVU0U6IDIsXHJcbiAgICAgICAgICAgIEdBTUVPVkVSOiAzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50dXJuU3RhdGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgICAgIFJPTEw6IDAsXHJcbiAgICAgICAgICAgIE1PVkU6IDEsIFxyXG4gICAgICAgICAgICBBQ1RJT046IDIsXHJcbiAgICAgICAgICAgIEVORDogM1xyXG4gICAgICAgIH0pOyAgXHJcblxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uRW51bSA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgICAgICBOT1JUSDoxLFxyXG4gICAgICAgICAgICBFQVNUOjIsXHJcbiAgICAgICAgICAgIFNPVVRIOjQsXHJcbiAgICAgICAgICAgIFdFU1Q6OFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVDb2x1bW5zID0gMzE7XHJcbiAgICAgICAgdGhpcy50aWxlUm93cyA9IDIxO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVBcnJheSA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVGlsZUFycmF5KCk7ICAgICAgXHJcblx0fVxyXG5cclxuXHRhZGROZXdQbGF5ZXIoc29ja2V0SUQsIHV1aWQpIHtcclxuICAgICAgICB0aGlzLmxhc3RQbGF5ZXJJRCsrO1xyXG4gICAgICAgIHZhciBwbGF5ZXIgPSBuZXcgUGxheWVyKHNvY2tldElELCB0aGlzLmxhc3RQbGF5ZXJJRCwgdXVpZCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzQXJyYXkucHVzaChwbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAndXBkYXRlUGxheWVyJywgZGV0YWlsczoge2lkOiB0aGlzLmxhc3RQbGF5ZXJJRH19LCBzb2NrZXRJRCk7XHJcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcclxuXHR9XHJcblxyXG4gICAgYWRkUGxheWVyKHBsYXllcikge1xyXG4gICAgICAgIHRoaXMucGxheWVyc0FycmF5LnB1c2gocGxheWVyKTtcclxuICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3VwZGF0ZVBsYXllcicsIGRldGFpbHM6IHtpZDogcGxheWVyLmlkfX0sIHBsYXllci5zb2NrZXRJRCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGxheWVyU3RhdGUoc3RhdGUpIHtcclxuICAgICAgICBzd2l0Y2ggKHN0YXRlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Jlc2V0JzogXHJcbiAgICAgICAgICAgICAgICB2YXIgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXJCeVNvY2tldElEKHN0YXRlLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgIHBsYXllci5yZW1vdmVQZXJzb25uZWwobnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcInJlbW92ZUFsbFBlcnNvbm5lbFwiLCBkZXRhaWxzOiB7fX0sIHBsYXllci5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOiBcclxuICAgICAgICAgICAgICAgIHZhciBwbGF5ZXIgPSB0aGlzLmdldFBsYXllckJ5U29ja2V0SUQoc3RhdGUuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnJlYWR5VG9TdGFydCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3Bwb25lbnQgPSB0aGlzLmdldFBsYXllck9wcG9uZW50KHBsYXllcik7XHJcbiAgICAgICAgICAgICAgICBpZighb3Bwb25lbnQgfHwgIW9wcG9uZW50LnJlYWR5VG9TdGFydCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wcENsb25lcyA9IG9wcG9uZW50LmdldFBlcnNvbm5lbCgnY2xvbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFBsYXllckNsb25lcyA9IHBsYXllci5nZXRQZXJzb25uZWwoJ2Nsb25lJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGlmeSBjdXJyZW50IHBsYXllciBvZiBvcHBvbmVudCBwb3NpdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGxheWVyUGF5bG9hZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gb3BwQ2xvbmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllclBheWxvYWQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Om9wcENsb25lc1tpXS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTpvcHBDbG9uZXNbaV0ueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV1aWQ6b3BwQ2xvbmVzW2ldLnV1aWQsICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB7dHlwZTpcInBlcnNvbm5lbFwiLCBkZXRhaWxzOnBsYXllclBheWxvYWR9LCBwbGF5ZXIuc29ja2V0SUQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBOb3RpZnkgb3Bwb25lbnQgb2YgY3VycmVudCBwbGF5ZXIncyBwb3NpdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3BwUGF5bG9hZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gY3VycmVudFBsYXllckNsb25lcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHBQYXlsb2FkLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDpjdXJyZW50UGxheWVyQ2xvbmVzW2ldLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OmN1cnJlbnRQbGF5ZXJDbG9uZXNbaV0ueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV1aWQ6Y3VycmVudFBsYXllckNsb25lc1tpXS51dWlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB7dHlwZTpcInBlcnNvbm5lbFwiLCBkZXRhaWxzOm9wcFBheWxvYWR9LCBvcHBvbmVudC5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3QoJ3VwZGF0ZScsIHt0eXBlOlwicmVzb3VyY2VzXCIsIGFjdGlvbjonaW5pdCd9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIgPSB0aGlzLmdldFJhbmRvbVBsYXllcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwib2ZmZXJEaWNlXCIsIGRldGFpbHM6IHt9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlKys7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHN0YXRlLnZhbHVlICsgXCIgaXMgbm90IGEgdmFsaWQgcGxheWVyIHN0YXRlIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxheWVyT3Bwb25lbnQocGxheWVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyc0FycmF5Lmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyc0FycmF5WzBdID09PSBwbGF5ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5WzFdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheVswXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmFuZG9tUGxheWVyKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKV07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFBsYXllckJ5VVVJRCh1dWlkKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnBsYXllcnNBcnJheSkge1xyXG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcnNBcnJheVtpXS51dWlkID09IHV1aWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXlbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRQbGF5ZXJCeVNvY2tldElEKGlkKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnBsYXllcnNBcnJheSkge1xyXG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcnNBcnJheVtpXS5zb2NrZXRJRCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5W2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQbGF5ZXJDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXkubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBleGlzdHNQbGF5ZXJVVUlEKHV1aWQpIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMucGxheWVyc0FycmF5KSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyc0FycmF5W2ldLnV1aWQgPT0gdXVpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNsaWNrZWQoZGF0YSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vY2hlY2sgZ2FtZSBzdGF0ZVxyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5nYW1lU3RhdGUpIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSB0aGlzLmdhbWVTdGF0ZUVudW0uU0VUVVA6XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jaGVjayBpZiB0aWxlIGlzIHR5cGU6IHN1cmZhY2UsIGJhdHRsZSwgYXJtb3J5LCBsb2NrLCBvciBwcm9kdWN0aW9uXHJcbiAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHRpbGUgYmVsb25ncyB0byBwbGF5ZXIncyB0ZWFtXHJcbiAgICAgICAgICAgICAgICAvL2FkZCBjbG9uZSB0byBwbGF5ZXIncyBwZXJzb25uZWxcclxuICAgICAgICAgICAgICAgIHZhciBwbGF5ZXIgPSB0aGlzLmdldFBsYXllckJ5U29ja2V0SUQoZGF0YS5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlQ2xvbmUocGxheWVyLCBkYXRhLngsIGRhdGEueSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSB0aGlzLmdhbWVTdGF0ZUVudW0uR0FNRTpcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL2NoZWNrIHR1cm5TdGF0ZVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwbGFjZUNsb25lKHBsYXllciwgeCwgeSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHR5cGVvZihwbGF5ZXIpICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZFRpbGUgPSB0aGlzLmdldFRpbGUoeCwgeSk7XHJcbiAgICAgICAgICAgIGlmKHBsYXllci5pZCAhPSBzZWxlY3RlZFRpbGUub3duZXIgfHwgc2VsZWN0ZWRUaWxlLm9jY3VwaWVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHNlbGVjdGVkVGlsZS50eXBlID09IFwibG9ja1wiIHx8IHNlbGVjdGVkVGlsZS50eXBlID09IFwiYmF0dGxlXCIgfHwgc2VsZWN0ZWRUaWxlLnR5cGUgPT0gXCJhcm1vcnlcIiB8fCBzZWxlY3RlZFRpbGUudHlwZSA9PSBcInByb2R1Y3Rpb25cIiB8fCBzZWxlY3RlZFRpbGUudHlwZSA9PSBcInN1cmZhY2VcIikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHV1aWQgPSByZXF1aXJlKCd1dWlkL3Y0JykoKTtcclxuICAgICAgICAgICAgICAgIGlmKHBsYXllci5hZGRQZXJzb25uZWwoJ2Nsb25lJywgeCwgeSwgdXVpZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRpbGUub2NjdXBpZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwiYWRkQ2xvbmVcIiwgZGV0YWlsczoge3g6eCwgeTp5LCBwbGF5ZXJJRDogcGxheWVyLmlkLCB1dWlkOnV1aWR9fSwgcGxheWVyLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXIuZ2V0UGVyc29ubmVsKCdjbG9uZScpLmxlbmd0aCA9PSBwbGF5ZXIuc3RhcnRpbmdDbG9uZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgncmVxdWVzdCcsIHtjYWxsYmFjazpcIm1vZGFsXCIsIGRldGFpbHM6IHt0eXBlOlwiYXNrU3RhcnRcIn19LCBwbGF5ZXIuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFUlJPUjogcGxheWVyIG5vdCBmb3VuZCEnKTsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVUaWxlQXJyYXkoKSB7XHJcbiAgICAgICAgdmFyIHRpbGVKU09OID0gcmVxdWlyZSgnLi4vLi4vYXNzZXRzL3RpbGVEZXRhaWwuanNvbicpO1xyXG5cclxuICAgICAgICBmb3IodmFyIGMgPSAwOyBjIDwgdGhpcy50aWxlQ29sdW1uczsgYysrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NdID0gW107XHJcbiAgICAgICAgICAgIGZvcih2YXIgciA9IDA7IHIgPCB0aGlzLnRpbGVSb3dzOyByKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NdW3JdID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aWxlSlNPTikge1xyXG4gICAgICAgICAgICBpZiAoIXRpbGVKU09OLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIG9iaiA9IHRpbGVKU09OW2tleV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBza2lwIGxvb3AgaWYgdGhlIHByb3BlcnR5IGlzIGZyb20gcHJvdG90eXBlXHJcbiAgICAgICAgICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KHByb3ApKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uQ291bnQgPSBvYmpbcHJvcF0ubG9jYXRpb25zLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYXRpb25Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvb3JkcyA9IG9ialtwcm9wXS5sb2NhdGlvbnNbaV0uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gY29vcmRzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gY29vcmRzWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLmRhbWFnZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5vY2N1cGllZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnR5cGUgPSBvYmpbcHJvcF0udHlwZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPCA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLm93bmVyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHggPiAyMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5vd25lciA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVBcnJheVt4XVt5XSAhPSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0ubmFtZSA9IG9ialtwcm9wXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeCArIFwiOlwiICsgeSArIFwiIG5vdCBmb3VuZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcF0ucHJvcGVydGllcyAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XVsndGlsZVByb3BlcnRpZXMnXSA9IG9ialtwcm9wXS5wcm9wZXJ0aWVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGlsZSh4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZUFycmF5W3hdW3ldO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExlZ2FsUGllY2VzKCkge1xyXG4gICAgICAgIHZhciBwZXJzb25uZWxBcnJheSA9IHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbCgpO1xyXG4gICAgICAgIHZhciBvcmRuYW5jZUFycmF5ID0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0T3JkbmFuY2UoKTtcclxuICAgICAgICB2YXIgcmV0dXJuQXJyYXkgPSBbXTtcclxuICAgICAgICB2YXIgbW92ZXNBcnJheSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpIGluIHBlcnNvbm5lbEFycmF5KSB7XHJcbiAgICAgICAgICAgIG1vdmVzQXJyYXkgPSB0aGlzLmdldExlZ2FsTW92ZXMocGVyc29ubmVsQXJyYXlbaV0sIHRoaXMuY3VycmVudERpY2VWYWx1ZSwge3g6cGVyc29ubmVsQXJyYXlbaV0ueCwgeTpwZXJzb25uZWxBcnJheVtpXS55fSk7XHJcbiAgICAgICAgICAgIGlmIChtb3Zlc0FycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2goe3R5cGU6XCJwZXJzb25uZWxcIixvcmlnaW46e3g6cGVyc29ubmVsQXJyYXlbaV0ueCx5OnBlcnNvbm5lbEFycmF5W2ldLnl9LCB1dWlkOnBlcnNvbm5lbEFycmF5W2ldLnV1aWQsIG1vdmVzOm1vdmVzQXJyYXl9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBvcmRuYW5jZUFycmF5KSB7XHJcbiAgICAgICAgICAgIG1vdmVzQXJyYXkgPSB0aGlzLmdldExlZ2FsTW92ZXMocGVyc29ubmVsQXJyYXlbaV0sIHRoaXMuY3VycmVudERpY2VWYWx1ZSwge3g6cGVyc29ubmVsQXJyYXlbaV0ueCwgeTpwZXJzb25uZWxBcnJheVtpXS55fSk7XHJcbiAgICAgICAgICAgIGlmIChtb3Zlc0FycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2goe3R5cGU6XCJvcmRuYW5jZVwiLCB1dWlkOm9yZG5hbmNlQXJyYXlbaV0udXVpZCwgbW92ZXM6bW92ZXNBcnJheX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb29yZEZyb21EaXJlY3Rpb24ob3JpZ2luQ29vcmQsZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIGRpcj17Tk9SVEg6e3g6MCx5Oi0xfSxFQVNUOnt4OjEseTowfSxTT1VUSDp7eDowLHk6MX0sV0VTVDp7eDotMSx5OjB9fTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgb2JqID0ge3g6KHBhcnNlSW50KG9yaWdpbkNvb3JkLngpICsgcGFyc2VJbnQoZGlyW2RpcmVjdGlvbl0ueCkpLCB5OihwYXJzZUludChvcmlnaW5Db29yZC55KSArIHBhcnNlSW50KGRpcltkaXJlY3Rpb25dLnkpKX07XHJcbiAgICAgICAgaWYob2JqLnggPCAwIHx8IG9iai54ID4gMzB8fCBvYmoueSA8IDAgfHwgb2JqLnkgPiAyMCkgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB7eDoocGFyc2VJbnQob3JpZ2luQ29vcmQueCkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS54KSksIHk6KHBhcnNlSW50KG9yaWdpbkNvb3JkLnkpICsgcGFyc2VJbnQoZGlyW2RpcmVjdGlvbl0ueSkpfTsgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXRMZWdhbE1vdmVzKGdhbWVQaWVjZVR5cGUsIG1vdmVzLCBjdXJyZW50Q29vcmQsIHByZXZpb3VzQ29vcmQpe1xyXG4gICAgICAgIG1vdmVzLS07XHJcbiAgICAgICAgdmFyIGxlZ2FsTW92ZXMgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBkaXJlY3Rpb24gaW4gdGhpcy5kaXJlY3Rpb25FbnVtKSB7XHJcbiAgICAgICAgICAgIHZhciBtb3ZlQ2hlY2sgPSB0aGlzLmdldENvb3JkRnJvbURpcmVjdGlvbihjdXJyZW50Q29vcmQsIGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGlmKG1vdmVDaGVjayA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciB0aWxlVG9DaGVjayA9IHRoaXMudGlsZUFycmF5W21vdmVDaGVjay54XVttb3ZlQ2hlY2sueV07XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmNoZWNrV2FsbCh0aGlzLmRpcmVjdGlvbkVudW1bZGlyZWN0aW9uXSwgY3VycmVudENvb3JkKSA9PT0gdHJ1ZSAmJiB0aWxlVG9DaGVjay5kYW1hZ2VkID09PSBmYWxzZSAmJiB0aWxlVG9DaGVjay50eXBlICE9IFwic3BhY2VcIiAmJiAoKHR5cGVvZiBwcmV2aW91c0Nvb3JkID09PSAndW5kZWZpbmVkJykgfHwgKCh0eXBlb2YgcHJldmlvdXNDb29yZCAhPT0gJ3VuZGVmaW5lZCcpICYmIChKU09OLnN0cmluZ2lmeShtb3ZlQ2hlY2spICE9PSBKU09OLnN0cmluZ2lmeShwcmV2aW91c0Nvb3JkKSkgKSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRpbGUgaXMgb2NjdXBpZWRcclxuICAgICAgICAgICAgICAgIGlmKG1vdmVzPT0wKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aWxlVG9DaGVjay5vY2N1cGllZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVnYWxNb3Zlcy5wdXNoKG1vdmVDaGVjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVybkFycmF5ID0gKHRoaXMuZ2V0TGVnYWxNb3ZlcyhnYW1lUGllY2VUeXBlLCBtb3ZlcywgbW92ZUNoZWNrLCBjdXJyZW50Q29vcmQpKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGluZGV4IGluIHJldHVybkFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKEpTT04uc3RyaW5naWZ5KHJldHVybkFycmF5W2luZGV4XSkgIT09IEpTT04uc3RyaW5naWZ5KGN1cnJlbnRDb29yZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdhbE1vdmVzLnB1c2gocmV0dXJuQXJyYXlbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxlZ2FsTW92ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tXYWxsKGRpcmVjdGlvbiwgY3VycmVudENvb3JkaW5hdGUpIHtcclxuICAgICAgICB0aGlzLndhbGxHcmlkID0gcmVxdWlyZSgnLi4vLi4vYXNzZXRzL3dhbGxHcmlkLmpzb24nKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pe1xyXG4gICAgICAgICAgICBjYXNlIHRoaXMuZGlyZWN0aW9uRW51bS5OT1JUSDogLy8gVVBcclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCh0aGlzLndhbGxHcmlkLmdyaWRbY3VycmVudENvb3JkaW5hdGUueF1bY3VycmVudENvb3JkaW5hdGUueV0mdGhpcy5kaXJlY3Rpb25FbnVtLk5PUlRIKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5kaXJlY3Rpb25FbnVtLlNPVVRIOiAvLyBET1dOXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy53YWxsR3JpZC5ncmlkW2N1cnJlbnRDb29yZGluYXRlLnhdW2N1cnJlbnRDb29yZGluYXRlLnldJnRoaXMuZGlyZWN0aW9uRW51bS5TT1VUSCkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBjYXNlIHRoaXMuZGlyZWN0aW9uRW51bS5FQVNUOiAvLyBSSUdIVFxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uRUFTVCkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBjYXNlIHRoaXMuZGlyZWN0aW9uRW51bS5XRVNUOiAvLyBMRUZUXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy53YWxsR3JpZC5ncmlkW2N1cnJlbnRDb29yZGluYXRlLnhdW2N1cnJlbnRDb29yZGluYXRlLnldJnRoaXMuZGlyZWN0aW9uRW51bS5XRVNUKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgcm9sbERpY2UoZGF0YSkge1xyXG4gICAgICAgIGlmKHRoaXMudHVyblN0YXRlID09IHRoaXMudHVyblN0YXRlRW51bS5ST0xMICYmIHRoaXMuZ2FtZVN0YXRlID09IHRoaXMuZ2FtZVN0YXRlRW51bS5HQU1FICYmIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEID09IGRhdGEuc29ja2V0SUQpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGljZVZhbHVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxO1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcImRpY2VSb2xsZWRcIiwgZGV0YWlsczoge3ZhbHVlOnRoaXMuY3VycmVudERpY2VWYWx1ZSwgZ2FtZVBpZWNlczp0aGlzLmdldExlZ2FsUGllY2VzKCl9fSwgZGF0YS5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywge3R5cGU6XCJkaWNlXCIsIGRldGFpbHM6IHt2YWx1ZTp0aGlzLmN1cnJlbnREaWNlVmFsdWV9fSwgdGhpcy5nZXRQbGF5ZXJPcHBvbmVudCh0aGlzLmFjdGl2ZVBsYXllcikuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRPRE86IFxcbiAtIENhbGN1bGF0ZSBsZWdhbCBwZXJzb25uZWwgc2VsZWN0aW9uc1xcbiAtIENhbGN1bGF0ZSBsZWdhbCBvcmRuYW5jZSBzZWxlY3Rpb25zXFxuIC0gZW1pdCBhY3Rpb24gdG8gb2ZmZXIgY2xvbmVzXFxuIC0gQ2FsY3VsYXRlIGxlZ2FsIHBlcnNvbm5lbCBzZWxlY3Rpb25zXCIpXHJcbiAgICAgICAgICAgIHRoaXMudHVyblN0YXRlKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQoZGF0YSkge1xyXG4gICAgICAgIGlmKHR5cGVvZihkYXRhLnByb3BlcnR5KSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3Jlc3BvbnNlJywge2RldGFpbHM6dGhpc1tkYXRhLnByb3BlcnR5XX0sIGRhdGEuc29ja2V0SUQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZW1pdChtc2csIGRhdGEsIHNvY2tldElEKSB7XHJcbiAgICAgICAgaWYobXNnID09IFwicmVzcG9uc2VcIiB8fCBtc2cgPT0gXCJyZXF1ZXN0XCIgfHwgbXNnID09IFwidXBkYXRlXCIpIHtcclxuICAgICAgICAgICAgaWYodHlwZW9mKHNvY2tldElEKSA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gU29ja2V0SUQgZm91bmQhXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW8uc29ja2V0cy5jb25uZWN0ZWRbc29ja2V0SURdLmVtaXQobXNnLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBpZihtc2cgPT0gXCJhY3Rpb25cIikge1xyXG4gICAgICAgICAgICBpZih0eXBlb2Yoc29ja2V0SUQpID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBTb2NrZXRJRCBmb3VuZCFcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pby5zb2NrZXRzLmNvbm5lY3RlZFtzb2NrZXRJRF0uZW1pdChtc2csIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZihtc2cgPT0gXCJsb2dcIikge1xyXG4gICAgICAgICAgICB0aGlzLmlvLnNvY2tldHMuZW1pdChtc2csIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgYnJvYWRjYXN0KG1zZywgZGF0YSkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0KG1zZywgZGF0YSwgdGhpcy5wbGF5ZXJzQXJyYXlbaV0uc29ja2V0SUQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLlNlcHRpa29uID0gU2VwdGlrb247XHJcbiIsImltcG9ydCBTZXB0aWtvbiBmcm9tICcuLi9wcmVmYWJzL3NlcHRpa29uJztcclxuXHJcbmNsYXNzIEJvb3QgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBwcmVsb2FkKCkge1xyXG4gICAgdGhpcy5sb2FkLmltYWdlKCdwcmVsb2FkZXInLCAnYXNzZXRzL3ByZWxvYWRlci5naWYnKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIHRoaXMuZ2FtZS5pbnB1dC5tYXhQb2ludGVycyA9IDE7XHJcbiAgICB0aGlzLmdhbWUudGltZS5hZHZhbmNlZFRpbWluZyA9IHRydWU7XHJcbiAgICB0aGlzLmdhbWUuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5nYW1lLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuUkVTSVpFO1xyXG4gICAgLy9zZXR1cCBkZXZpY2Ugc2NhbGluZ1xyXG4gICAgaWYgKCF0aGlzLmdhbWUuZGV2aWNlLmRlc2t0b3ApIHtcclxuICAgICAgdGhpcy5nYW1lLnNjYWxlLnBhcmVudElzV2luZG93ID0gdHJ1ZTtcclxuICAgICAgdGhpcy5nYW1lLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuUkVTSVpFO1xyXG4gICAgICB0aGlzLmdhbWUuc2NhbGUubWluV2lkdGggPSAgNDgwO1xyXG4gICAgICB0aGlzLmdhbWUuc2NhbGUubWluSGVpZ2h0ID0gMjYwO1xyXG4gICAgICB0aGlzLmdhbWUuc2NhbGUuZm9yY2VPcmllbnRhdGlvbih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmluaXRHbG9iYWxWYXJpYWJsZXMoKTtcclxuICAgIFxyXG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdwcmVsb2FkZXInKTtcclxuICB9XHJcblxyXG4gIGluaXRHbG9iYWxWYXJpYWJsZXMoKXtcclxuICAgIHRoaXMuZ2FtZS5nbG9iYWwgPSB7XHJcbiAgICAgIHNjb3JlOiAwLFxyXG4gICAgICBsYXN0RGljZVJvbGw6IDAsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb3Q7XHJcbiIsImltcG9ydCBEaWNlIGZyb20gJy4uL3ByZWZhYnMvZGljZSc7XHJcblxyXG5jbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuICBcclxuICBjcmVhdGUoKSB7XHJcbiAgXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgIC8vdGhpcy5nYW1lLmlucHV0Lm9uRG93bi5hZGQodGhpcy50b2dnbGVGdWxsc2NyZWVuLCB0aGlzKTtcclxuICAgIHRoaXMuZ2FtZS5zdGFnZS5kaXNhYmxlVmlzaWJpbGl0eUNoYW5nZSA9IHRydWU7XHJcbiAgICBcclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xyXG4gICAgdGhpcy5nYW1lLmh1ZEdyb3VwID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5tb2RhbCA9IG5ldyBnYW1lTW9kYWwodGhpcy5nYW1lKTtcclxuICAgIHRoaXMuY3JlYXRlTW9kYWxzKCk7XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwwLCdiYWNrZ3JvdW5kJyk7XHJcbiAgICB0aGlzLmJhY2tncm91bmQuYW5jaG9yLnNldFRvKDAuNSwwLjUpO1xyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2VudGVyWCA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYO1xyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2VudGVyWSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5kaWNlID0gbmV3IERpY2UodGhpcy5nYW1lLCA1MCwgNDApO1xyXG4gICAgdGhpcy5nYW1lLmRpY2Uuc2NhbGUuc2V0VG8oMC4yNSk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmFkZC5leGlzdGluZyh0aGlzLmdhbWUuZGljZSk7XHJcbiAgICBcclxuICAgIHRoaXMuZ2FtZS5odWRHcm91cC5hZGQodGhpcy5nYW1lLmRpY2UpO1xyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKHRoaXMuYmFja2dyb3VuZCk7XHJcblxyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLmNyZWF0ZVRpbGVBcnJheSgzMSwgMjEsIHt4OjAtdGhpcy5iYWNrZ3JvdW5kLndpZHRoLzIsIHk6MC10aGlzLmJhY2tncm91bmQuaGVpZ2h0LzJ9KTtcclxuXHJcblxyXG4gICAgdGhpcy5yZWZyZXNoQm9hcmQoKTtcclxuXHJcbiAgfVxyXG5cclxuICBjcmVhdGVNb2RhbHMoKSB7XHJcbiAgICAgIHRoaXMuZ2FtZS5tb2RhbC5jcmVhdGVNb2RhbChcclxuICAgICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJhc2tTdGFydFwiLFxyXG4gICAgICAgIGluY2x1ZGVCYWNrZ3JvdW5kOiBmYWxzZSxcclxuICAgICAgICBtb2RhbENsb3NlT25JbnB1dDogZmFsc2UsXHJcbiAgICAgICAgaXRlbXNBcnI6IFt7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ3JhcGhpY3NcIixcclxuICAgICAgICAgICAgZ3JhcGhpY0NvbG9yOiBcIjB4ZmZmZmZmXCIsXHJcbiAgICAgICAgICAgIGdyYXBoaWNXaWR0aDogMzAwLFxyXG4gICAgICAgICAgICBncmFwaGljSGVpZ2h0OiAzMDAsXHJcbiAgICAgICAgICAgIGdyYXBoaWNSYWRpdXM6IDQwXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgY29udGVudDogXCJBcmUgeW91IGhhcHB5IHdpdGhcXG4gdGhhdCBjbG9uZSBsYXlvdXQ/XCIsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTHVja2llc3QgR3V5XCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAyMixcclxuICAgICAgICAgICAgY29sb3I6IFwiMHgxZTFlMWVcIixcclxuICAgICAgICAgICAgb2Zmc2V0WTogLTUwXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwidGV4dF95ZXNcIixcclxuICAgICAgICAgICAgb2Zmc2V0WTogMTAwLFxyXG4gICAgICAgICAgICBvZmZzZXRYOiAtODAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRTY2FsZTogMC42LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLm1vZGFsLmhpZGVNb2RhbChcImFza1N0YXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OidzZXRQbGF5ZXJTdGF0ZScsIHZhbHVlOidzdGFydCd9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiBcInRleHRfbm9cIixcclxuICAgICAgICAgICAgb2Zmc2V0WTogMTAwLFxyXG4gICAgICAgICAgICBvZmZzZXRYOiA4MCxcclxuICAgICAgICAgICAgY29udGVudFNjYWxlOiAwLjYsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUubW9kYWwuaGlkZU1vZGFsKFwiYXNrU3RhcnRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6J3NldFBsYXllclN0YXRlJywgdmFsdWU6J3Jlc2V0J30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoQm9hcmQoKSB7XHJcblxyXG4gICAgdmFyIHNjYWxlID0gd2luZG93LmlubmVyV2lkdGgvdGhpcy5iYWNrZ3JvdW5kLmhlaWdodDtcclxuICAgIGlmKHNjYWxlID4gMS45KSB7XHJcbiAgICAgICAgc2NhbGUgPSAxLjk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnNjYWxlLnNldFRvKHNjYWxlKTtcclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnggPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWDtcclxuXHJcbiAgICBpZih0aGlzLmdhbWUuc2VwdGlrb24ucGxheWVyLmlkID09IDEpIHtcclxuICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSA9IC05MDsgXHJcbiAgICAgICAgLy90aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclk7IC8vIENlbnRlcmVkIG9uIFNlcHRpa29uIExvZ29cclxuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSArICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIG9wcG9uZW50J3Mgc2lkZVxyXG4gICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSAtICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIHRoaXMgcGxheWVyJ3Mgc2lkZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSA9IDkwOyBcclxuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWTsgLy8gQ2VudGVyZWQgb24gU2VwdGlrb24gTG9nb1xyXG4gICAgICAgIC8vdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZICsgKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gb3Bwb25lbnQncyBzaWRlXHJcbiAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZIC0gKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gdGhpcyBwbGF5ZXIncyBzaWRlXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgLy8gICB0aGlzLmRpY2UuZnJhbWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDE7XHJcbiAgICAvLyB0aGlzLmdhbWUuZGVidWcudGV4dCgnTW91c2UnLCA3MDAsIDMyKTtcclxuICAgIFxyXG4gICAgLy8gdGhpcy5nYW1lLmRlYnVnLnRleHQoJ01vdXNlIFg6ICcgKyB0aGlzLmdhbWUuaW5wdXQueCwgNzAwLCA2NCk7XHJcbiAgICAvLyB0aGlzLmdhbWUuZGVidWcudGV4dCgnTW91c2UgWTogJyArIHRoaXMuZ2FtZS5pbnB1dC55LCA3MDAsIDkyKTtcclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyICgpIHtcclxuICAgICAgdGhpcy5yZWZyZXNoQm9hcmQoKTtcclxuICAgICAgLypcclxuXHJcbiAgICB2YXIgeCA9IDMyO1xyXG4gICAgdmFyIHkgPSAwO1xyXG4gICAgdmFyIHlpID0gMzI7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnVmlld3BvcnQnLCB4LCB5ICs9IHlpKTtcclxuXHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnVmlld3BvcnQgV2lkdGg6ICcgKyB0aGlzLmdhbWUuc2NhbGUudmlld3BvcnRXaWR0aCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93LmlubmVyV2lkdGg6ICcgKyB3aW5kb3cuaW5uZXJXaWR0aCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93Lm91dGVyV2lkdGg6ICcgKyB3aW5kb3cub3V0ZXJXaWR0aCwgeCwgeSArPSB5aSk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ1ZpZXdwb3J0IEhlaWdodDogJyArIHRoaXMuZ2FtZS5zY2FsZS52aWV3cG9ydEhlaWdodCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93LmlubmVySGVpZ2h0OiAnICsgd2luZG93LmlubmVySGVpZ2h0LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd3aW5kb3cub3V0ZXJIZWlnaHQ6ICcgKyB3aW5kb3cub3V0ZXJIZWlnaHQsIHgsIHkgKz0geWkpO1xyXG5cclxuICAgIC8vICBEZXZpY2U6IEhvdyB0byBnZXQgZGV2aWNlIHNpemUuXHJcblxyXG4gICAgLy8gIFVzZSB3aW5kb3cuc2NyZWVuLndpZHRoIGZvciBkZXZpY2Ugd2lkdGggYW5kIHdpbmRvdy5zY3JlZW4uaGVpZ2h0IGZvciBkZXZpY2UgaGVpZ2h0LiBcclxuICAgIC8vICAuYXZhaWxXaWR0aCBhbmQgLmF2YWlsSGVpZ2h0IGdpdmUgeW91IHRoZSBkZXZpY2Ugc2l6ZSBtaW51cyBVSSB0YXNrYmFycy4gKFRyeSBvbiBhbiBpUGhvbmUuKSBcclxuICAgIC8vICBEZXZpY2Ugc2l6ZSBpcyBzdGF0aWMgYW5kIGRvZXMgbm90IGNoYW5nZSB3aGVuIHRoZSBwYWdlIGlzIHJlc2l6ZWQgb3Igcm90YXRlZC5cclxuXHJcbiAgICB4ID0gMzUwO1xyXG4gICAgeSA9IDA7XHJcblxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ0JvYXJkIEdyb3VwJywgeCwgeSArPSB5aSk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuZ2FtZS5ib2FyZEdyb3VwLng6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC54LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC55OiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAueSwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGg6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5nYW1lLmJvYXJkR3JvdXAuaGVpZ2h0OiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAuaGVpZ2h0LCB4LCB5ICs9IHlpKTtcclxuXHJcbiAgICB4ID0gMzI7XHJcbiAgICB5ID0gMzAwO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdCYWNrZ3JvdW5kIERldGFpbCcsIHgsIHkgKz0geWkpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQueDogJyArIHRoaXMuYmFja2dyb3VuZC54LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQueTogJyArIHRoaXMuYmFja2dyb3VuZC55LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQud2lkdGg6ICcgKyB0aGlzLmJhY2tncm91bmQud2lkdGgsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC5oZWlnaHQ6ICcgKyB0aGlzLmJhY2tncm91bmQuaGVpZ2h0LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQuc2NhbGU6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC5zY2FsZS54LCB4LCB5ICs9IHlpKTtcclxuICAgICovXHJcbiAgICB9XHJcbiAgICBcclxuICB0b2dnbGVGdWxsc2NyZWVuKCkge1xyXG4gICAgaWYodGhpcy5nYW1lLnNjYWxlLmlzRnVsbFNjcmVlbikge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5zdG9wRnVsbFNjcmVlbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmdhbWUuc2NhbGUuc3RhcnRGdWxsU2NyZWVuKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcbiIsImNsYXNzIE1lbnUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICAvL2FkZCBiYWNrZ3JvdW5kIGltYWdlXHJcbiAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLDAsJ2JhY2tncm91bmQnKTtcclxuICAgIHRoaXMuYmdSYXRpbyA9IHRoaXMuYmFja2dyb3VuZC50ZXh0dXJlLndpZHRoIC8gdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUuaGVpZ2h0O1xyXG4gICAgdGhpcy53b3JsZFJhdGlvID0gdGhpcy5nYW1lLndvcmxkLndpZHRoIC8gdGhpcy5nYW1lLndvcmxkLmhlaWdodDtcclxuICAgIGlmICgoKHRoaXMud29ybGRSYXRpbyAtIHRoaXMuYmdSYXRpbykgLyAyICogdGhpcy5nYW1lLndvcmxkLndpZHRoKSA+IDApIHtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQud2lkdGggPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0L3RoaXMuYmFja2dyb3VuZC50ZXh0dXJlLmhlaWdodCp0aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aDtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQuaGVpZ2h0ID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodDtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQueCA9ICh0aGlzLmdhbWUud29ybGQud2lkdGggLSB0aGlzLmJhY2tncm91bmQud2lkdGgpIC8gMjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLndpZHRoID0gdGhpcy5nYW1lLndvcmxkLndpZHRoO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQgPSB0aGlzLmdhbWUud29ybGQud2lkdGgvdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUud2lkdGgqdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC55ID0gKHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgLSB0aGlzLmJhY2tncm91bmQuaGVpZ2h0KSAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgLy9hZGQgaW50cm8gdGV4dFxyXG4gICAgdGhpcy5nYW1lb3ZlclRleHQgPSB0aGlzLmFkZC50ZXh0KHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLCBcIlNjb3JlID0gXCIrdGhpcy5nYW1lLmdsb2JhbC5zY29yZSwge1xyXG4gICAgICBmb250OiAnNDJweCBBcmlhbCcsIGZpbGw6ICcjZmZmZmZmJywgYWxpZ246ICdjZW50ZXInXHJcbiAgICB9KTtcclxuICAgIHRoaXMuZ2FtZW92ZXJUZXh0LmFuY2hvci5zZXQoMC41KTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uRG93bi5hZGQodGhpcy5vbklucHV0RG93biwgdGhpcyk7XHJcblxyXG4gICAgLy9wcmV2ZW50IGFjY2lkZW50YWwgY2xpY2stdGhydSBieSBub3QgYWxsb3dpbmcgc3RhdGUgdHJhbnNpdGlvbiBmb3IgYSBzaG9ydCB0aW1lXHJcbiAgICB0aGlzLmNhbkNvbnRpbnVlVG9OZXh0U3RhdGUgPSBmYWxzZTtcclxuICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoUGhhc2VyLlRpbWVyLlNFQ09ORCAqIDAuNSwgZnVuY3Rpb24oKXsgdGhpcy5jYW5Db250aW51ZVRvTmV4dFN0YXRlID0gdHJ1ZTsgfSwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5zYXZlVmFyc1RvTG9jYWxTdG9yYWdlKCk7XHJcbiAgICB0aGlzLnJlc2V0R2xvYmFsVmFyaWFibGVzKCk7XHJcbiAgfVxyXG5cclxuICBzYXZlVmFyc1RvTG9jYWxTdG9yYWdlKCl7XHJcbiAgICB2YXIgbWF4ID0gbG9jYWxTdG9yYWdlLm1heFNjb3JlIHx8IDA7IC8vZGVmYXVsdCB2YWx1ZSBvZiAwIGlzIGl0IGRvZXMgbm90IGV4aXN0XHJcbiAgICBpZiAodGhpcy5nYW1lLmdsb2JhbC5zY29yZSA+IG1heCl7IGxvY2FsU3RvcmFnZS5tYXhTY29yZSA9IHRoaXMuZ2FtZS5nbG9iYWwuc2NvcmU7IH1cclxuICB9XHJcblxyXG4gIHJlc2V0R2xvYmFsVmFyaWFibGVzKCl7XHJcbiAgICB0aGlzLmdhbWUuZ2xvYmFsLnNjb3JlID0gMDtcclxuICB9XHJcbiAgdXBkYXRlKCkge31cclxuXHJcbiAgb25JbnB1dERvd24gKCkge1xyXG4gICAgaWYodGhpcy5jYW5Db250aW51ZVRvTmV4dFN0YXRlKXtcclxuICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdtZW51Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuIiwiY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5hc3NldCA9IG51bGw7XHJcbiAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcmVsb2FkKCkge1xyXG4gICAgLy9zZXR1cCBsb2FkaW5nIGJhclxyXG4gICAgdGhpcy5hc3NldCA9IHRoaXMuYWRkLnNwcml0ZSh0aGlzLmdhbWUud2lkdGggKiAwLjUgLSAxMTAsIHRoaXMuZ2FtZS5oZWlnaHQgKiAwLjUgLSAxMCwgJ3ByZWxvYWRlcicpO1xyXG4gICAgdGhpcy5sb2FkLnNldFByZWxvYWRTcHJpdGUodGhpcy5hc3NldCk7XHJcbiAgICBcclxuICAgIC8vU2V0dXAgbG9hZGluZyBhbmQgaXRzIGV2ZW50c1xyXG4gICAgdGhpcy5sb2FkLm9uTG9hZENvbXBsZXRlLmFkZE9uY2UodGhpcy5vbkxvYWRDb21wbGV0ZSwgdGhpcyk7XHJcbiAgICB0aGlzLmxvYWRSZXNvdXJjZXMoKTtcclxuICB9XHJcblxyXG4gIGxvYWRSZXNvdXJjZXMoKSB7XHJcbiAgICAgIFxyXG4gICAgLy9NRU5VIFJFU09VUkNFU1xyXG4gICAgLy9tZW51IGJhY2tncm91bmRcclxuICAgIC8vdGV4dCBpbWFnZXNcclxuICAgIC8vbXVzaWMgZmlsZXMgP1xyXG4vLyAgTG9hZCBmaWx0ZXIgc2NyaXB0c1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuc2NyaXB0KCdncmF5JywgJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL21hc3Rlci92Mi9maWx0ZXJzL0dyYXkuanMnKTtcclxuXHJcbiAgICBcclxuICAgIC8vbG9hZCBnYW1lIGRhdGFcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmpzb24oJ3RpbGVEZXRhaWwnLCAnYXNzZXRzL3RpbGVEZXRhaWwuanNvbicpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuanNvbignd2FsbEdyaWQnLCAnYXNzZXRzL3dhbGxHcmlkLmpzb24nKTtcclxuICBcclxuICAgIC8vR0FNRSBSRVNPVVJDRVNcclxuICAgIC8vZ2FtZSBib2FyZCBiYWNrZ3JvdW5kXHJcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnYmFja2dyb3VuZCcsJ2Fzc2V0cy9tZWRpdW1fYm9hcmQucG5nJyk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnZGljZScsJ2Fzc2V0cy9kaWNlLnBuZycsIDEyOCwgMTk0LCAxMCk7XHJcbiAgICBcclxuICAgIC8vIG1vZGFsIGltYWdlc1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfeWVzJywnYXNzZXRzL3RleHRfeWVzLnBuZycpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfbm8nLCdhc3NldHMvdGV4dF9uby5wbmcnKTtcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X2dvJywnYXNzZXRzL3RleHRfZ28ucG5nJyk7XHJcblxyXG4gICAgLy9wbGF5ZXIgdG9rZW5zIHNwcml0ZXNoZWV0c1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ2Nsb25lJywgJ2Fzc2V0cy9jbG9uZS5wbmcnLDExMCwxNjgpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuYXRsYXMoJ2Jvb20nLCAnYXNzZXRzL2Jvb20ucG5nJywgJ2Fzc2V0cy9ib29tLmpzb24nLCBQaGFzZXIuTG9hZGVyLlRFWFRVUkVfQVRMQVNfSlNPTl9IQVNIKTtcclxuXHJcbiAgICAvL2F1ZGlvIGZpbGVzIFxyXG4gICAgXHJcbiAgICAvL3RoaXMuZ2FtZS5sb2FkLmltYWdlKCdjcm9zc2hhaXJzJywgJ2Fzc2V0cy9jcm9zc2hhaXJfcmVkX3NtYWxsLnBuZycpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfZ28nLCAnYXNzZXRzL3RleHRfZ28ucG5nJyk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9yZWFkeScsICdhc3NldHMvdGV4dF9yZWFkeS5wbmcnKTtcclxuXHJcbiAgICAvL3RoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCd0YXJnZXQnLCAnYXNzZXRzL3RhcmdldC5wbmcnLDEyOC42NiwxMjgpO1xyXG5cclxuICAgIC8vdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ2d1bnNob3QnLCdhc3NldHMvZ3Vuc2hvdC53YXYnKTtcclxuICAgIC8vdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ2RpbmcnLCdhc3NldHMvZGluZy53YXYnKTtcclxuICB9XHJcblxyXG4gIG9uTG9hZENvbXBsZXRlKCkge1xyXG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdzZXR1cCcpO1xyXG4gICAgLy90aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ2dhbWUnKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZWxvYWRlcjtcclxuIiwiY2xhc3MgU2V0dXAgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiB9XHJcbiAgXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5nYW1lLm5hbWUgPSBcInVzZXJcIjtcclxuXHJcbiAgICB0aGlzLmdhbWUuc3RhZ2UuZGlzYWJsZVZpc2liaWxpdHlDaGFuZ2UgPSB0cnVlO1xyXG4gICAgdGhpcy5nYW1lLm1vZGFsID0gbmV3IGdhbWVNb2RhbCh0aGlzLmdhbWUpO1xyXG4gICAgdGhpcy5jcmVhdGVNb2RhbHMoKTtcclxuICAgIHRoaXMuZ2FtZS5tb2RhbC5zaG93TW9kYWwoJ3VzZXJuYW1lJyk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmFkZENhbGxiYWNrcyh0aGlzLCBudWxsLCBudWxsLCB0aGlzLmtleVByZXNzKTtcclxuICAgIHRoaXMuYmtzcCA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleWJvYXJkLkJBQ0tTUEFDRSk7XHJcbiAgICB0aGlzLmJrc3Aub25Eb3duLmFkZCh0aGlzLmtleVByZXNzLCB0aGlzKTtcclxuICAgIHRoaXMuZW50ZXIgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5LZXlib2FyZC5FTlRFUik7XHJcbiAgICB0aGlzLmVudGVyLm9uRG93bi5hZGQodGhpcy5rZXlQcmVzcywgdGhpcyk7XHJcbiAgICB0aGlzLmdhbWUuY2xpZW50LmFza05ld1BsYXllcigpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi5zZXR1cCgpO1xyXG59XHJcblxyXG5rZXlQcmVzcyhjaGFyKSB7XHJcblxyXG4gICAgaWYodHlwZW9mKGNoYXIpID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgaWYgKGNoYXIuZXZlbnQuY29kZSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyLmV2ZW50LmNvZGUgPT09IFwiQmFja3NwYWNlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLm5hbWUgPSB0aGlzLmdhbWUubmFtZS5zdWJzdHJpbmcoMCwgdGhpcy5nYW1lLm5hbWUubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY2hhciA9PSBcIiBcIikge1xyXG4gICAgICAgICAgICBjaGFyID0gXCJfXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZS5uYW1lICs9IGNoYXI7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdhbWUubW9kYWwudXBkYXRlTW9kYWxWYWx1ZSh0aGlzLmdhbWUubmFtZSwgJ3VzZXJuYW1lJywgNCk7XHJcbn1cclxuICBcclxuICBjcmVhdGVNb2RhbHMoKSB7XHJcbiAgXHJcbiAgICAvLyBTdGFydCBHYW1lXHJcbiAgICB0aGlzLmdhbWUubW9kYWwuY3JlYXRlTW9kYWwoXHJcbiAgICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwidXNlcm5hbWVcIixcclxuICAgICAgICBpbmNsdWRlQmFja2dyb3VuZDogdHJ1ZSxcclxuICAgICAgICBtb2RhbENsb3NlT25JbnB1dDogZmFsc2UsXHJcbiAgICAgICAgaXRlbXNBcnI6IFt7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ3JhcGhpY3NcIixcclxuICAgICAgICAgICAgZ3JhcGhpY0NvbG9yOiBcIjB4ZmZmZmZmXCIsXHJcbiAgICAgICAgICAgIGdyYXBoaWNXaWR0aDogMzAwLFxyXG4gICAgICAgICAgICBncmFwaGljSGVpZ2h0OiAzMDAsXHJcbiAgICAgICAgICAgIGdyYXBoaWNSYWRpdXM6IDQwXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgY29udGVudDogXCJUeXBlIGEgdXNlcm5hbWUsXFxudGhlbiBoaXQgPEVOVEVSPlxcblxcbihtYXggb2YgMjUgY2hhcmFjdGVycylcIixcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIweDFlMWUxZVwiLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiAtNTBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmdhbWUubmFtZSxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIweDFlMWUxZVwiLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiA1MFxyXG4gICAgICAgIH0sIF1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHVwO1xyXG4iXX0=
