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
				"resourceCostType": ["biomass"],
				"resourceCostCount": [2],
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
				"resourceCostType": ["energy"],
				"resourceCostCount": [1],
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
				"resourceCostType": ["biodrone"],
				"resourceCostCount": [1],
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
				"resourceCostType": ["metal"],
				"resourceCostCount": [1],
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
				"resourceCostType": ["energy"],
				"resourceCostCount": [1],
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
				"resourceCostType": ["metal"],
				"resourceCostCount": [1],
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
				"resourceCostType": ["rocket"],
				"resourceCostCount": [1],
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
				"resourceCostType": ["biomass"],
				"resourceCostCount": [3],
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
				"resourceCostType": ["energy"],
				"resourceCostCount": [2],
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
				"resourceYieldType": ["biomass"],
				"resourceYieldCount": [1]
			},
			"locations": ["0,0", "0,10", "0,17", "1,2", "1,8", "1,16", "1,20", "29,0", "29,4", "29,12", "29,18", "30,3", "30,10", "30,20"]
		},
		"productionLichenTwo": {
			"id": "018",
			"type": "production",
			"name": "lichenTwo",
			"properties": {
                "action": "required",
				"resourceYieldType": ["biomass"],
				"resourceYieldCount": [2]
			},
			"locations": ["0,4", "30,16"]

		},
		"productionChemicalReactor": {
			"id": "019",
			"type": "production",
			"name": "chemicalReactor",
			"properties": {
                "action": "required",
				"resourceCostType": ["biomass"],
				"resourceCostCount": [1],
				"resourceYieldType": ["oxygen"],
				"resourceYieldCount": [1]
			},
			"locations": ["1,1", "1,9", "29,19", "29,11"]

		},
		"productionChemicalReactorTwo": {
			"id": "020",
			"type": "production",
			"name": "chemicalReactorTwo",
			"properties": {
                "action": "required",
				"resourceCostType": ["biomass"],
				"resourceCostCount": [2],
				"resourceYieldType": ["oxygen"],
				"resourceYieldCount": [2]
			},
			"locations": ["0,5", "30,15"]
		},
		"productionAirFilter": {
			"id": "021",
			"type": "production",
			"name": "airFilter",
			"properties": {
                "action": "required",
				"resourceCostType": ["oxygen"],
				"resourceCostCount": [2],
				"resourceYieldType": ["oxygen"],
				"resourceYieldCount": [3]
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
				"resourceYieldType": ["biodrone"],
				"resourceYieldCount": [1]
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
				"resourceYieldType": ["uranium"],
				"resourceYieldCount": [1]
			},
			"locations": ["0,2", "0,6", "1,3", "30,18", "30,14", "29,17"]
		},
		"productionNuclearReactor": {
			"id": "024",
			"type": "production",
			"name": "nuclearReactor",
			"properties": {
                "action": "required",
				"resourceCostType": ["uranium"],
				"resourceCostCount": [1],
				"resourceYieldType": ["energy"],
				"resourceYieldCount": [3]
			},
			"locations": ["0,9", "0,16", "1,7", "1,14", "1,19", "30,11", "30,4", "29,13", "29,6", "29,1"]
		},
		"productionThermalGenerator": {
			"id": "025",
			"type": "production",
			"name": "thermalGenerator",
			"properties": {
                "action": "required",
				"resourceCostType": ["biomass"],
				"resourceCostCount": [1],
				"resourceYieldType": ["energy"],
				"resourceYieldCount": [1]
			},
			"locations": ["0,12", "30,8"]
		},
		"productionFoundry": {
			"id": "026",
			"type": "production",
			"name": "foundry",
			"properties": {
                "action": "required",
				"resourceCostType": ["energy"],
				"resourceCostCount": [1],
				"resourceYieldType": ["metal"],
				"resourceYieldCount": [1]
			},
			"locations": ["0,3", "0,11", "0,19", "1,13", "30,17", "30,9", "30,1", "29,7"]
		},
		"productionFoundryTwo": {
			"id": "027",
			"type": "production",
			"name": "foundryTwo",
			"properties": {
                "action": "required",
				"resourceCostType": ["energy"],
				"resourceCostCount": [2],
				"resourceYieldType": ["metal"],
				"resourceYieldCount": [2]
			},
			"locations": ["1,0", "29,20"]
		},
		"productionRocketWorkshop": {
			"id": "028",
			"type": "production",
			"name": "rocketWorkshop",
			"properties": {
                "action": "required",
				"resourceCostType": ["energy"],
				"resourceCostCount": [1],
				"resourceYieldType": ["rocket"],
				"resourceYieldCount": [1]
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
				"resourceYieldType": ["nuke"],
				"resourceYieldCount": [1]
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
    if (localStorage.getItem('septUUID') !== null) {
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
			var innerModal;
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

					innerModal = game.add.sprite(0, 0);
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
				innerModal = game.add.sprite(0, 0);
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

				modalLabel._offsetX = 0;
				modalLabel._offsetY = 0;
				modalLabel.lockPosition = lockPosition;
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
                this.septikon.updatePersonnel(data);
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
                console.log(data);
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
    }
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
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clone = require("../prefabs/clone");

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

        this.legalMoves = null;
        this.selectedToMove = null;
        this.legalGunners = null;

        this.choosingTargets = false;
        this.selectedGunners = [];
    }

    _createClass(Septikon, [{
        key: "showModal",
        value: function showModal(type) {
            this.game.modal.showModal(type);
        }
    }, {
        key: "diceRolled",
        value: function diceRolled(details) {
            this.game.dice.setValue(details.value);
            this.legalMoves = details.gamePieces;
            for (var i = 0; i < details.gamePieces.length; i++) {
                for (var m in details.gamePieces[i].moves) {
                    var x = details.gamePieces[i].moves[m].x;
                    var y = details.gamePieces[i].moves[m].y;
                    this.showTiles([details.gamePieces[i].origin], 0xF63636);
                }
            }
        }
    }, {
        key: "offerDice",
        value: function offerDice() {
            this.game.dice.enable();
        }
    }, {
        key: "takeDice",
        value: function takeDice() {
            this.game.dice.disable();
        }
    }, {
        key: "offerGunners",
        value: function offerGunners(data) {
            this.choosingTargets = true;
            this.legalGunners = data.gunners;
            this.game.go.enable();
            console.log("animate some indication of viable gunners on the surface. Maybe a pointer bouncing over them?");
        }
    }, {
        key: "addClone",
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
        key: "movePersonnel",
        value: function movePersonnel(data) {
            var tween = null;
            var distance = null;
            var point = this.tileToPixels(data.x, data.y);
            for (var i in this.player.personnelArray) {
                if (this.player.personnelArray[i].uuid == data.uuid) {
                    distance = Math.abs(this.player.personnelArray[i].y - point.y + this.player.personnelArray[i].x - point.x).toFixed(1);
                    tween = this.game.add.tween(this.player.personnelArray[i]).to({ x: point.x, y: point.y }, distance * 11, Phaser.Easing.Cubic.Out, true);
                    // Trigger tile. Not quite sure how to do this yet.
                    //tween.onComplete.add(this.game.client.sendInput({event: 'moveComplete', x:parseInt(obj.tileX), y:parseInt(obj.tileY)});, this.game.septikon);
                }
            }
            for (var j in this.opponent.personnelArray) {
                if (this.opponent.personnelArray[j].uuid == data.uuid) {
                    distance = Math.abs(this.opponent.personnelArray[j].y - point.y + this.opponent.personnelArray[j].x - point.x).toFixed(1);
                    tween = this.game.add.tween(this.opponent.personnelArray[j]).to({ x: point.x, y: point.y }, distance * 11, Phaser.Easing.Cubic.Out, true);
                    // Trigger tile. Not quite sure how to do this yet.
                    //tween.onComplete.add(this.game.client.sendInput({event: 'moveComplete', x:parseInt(obj.tileX), y:parseInt(obj.tileY)});, this.game.septikon);
                }
            }
        }
    }, {
        key: "updatePersonnel",
        value: function updatePersonnel(data) {
            var currentPersonnel = null;
            if (Array.isArray(data.details) === false) {
                data.details = [data.details];
            }

            if (this.opponent.personnelArray.length === 0 && data.details.length === 5) {
                for (var i in data.details) {
                    this.addClone(data.details[i]);
                }
            } else {
                for (var p in this.opponent.personnelArray) {
                    currentPersonnel = this.opponent.personnelArray[p];
                    for (var d in data.details) {
                        if (currentPersonnel.uuid == data.details[d].uuid) {
                            this.movePersonnel(data.details[d]);
                        }
                    }
                }
            }
        }
    }, {
        key: "removeAllPersonnel",
        value: function removeAllPersonnel() {
            for (var i = 0; i < this.game.boardGroup.children.length; i++) {
                if (this.game.boardGroup.children[i].constructor == _clone2.default) {
                    this.game.boardGroup.children[i].destroy();
                    i--;
                }
            }
        }
    }, {
        key: "updatePlayer",
        value: function updatePlayer(details) {
            for (var i in details) {
                this.player[i] = details[i];
            }
        }
    }, {
        key: "initResources",
        value: function initResources() {
            var currentRec = null;
            var graphics = this.game.add.graphics(0, 0);
            //graphics.lineStyle(4, 0xffd900, 1);
            graphics.beginFill(0xffffff, 1);
            graphics.drawRoundedRect(100, 100, this.tileWidth - 4, this.tileHeight - 4, 14);

            for (var c in this.tileArray) {
                for (var r in this.tileArray[c]) {
                    if (this.tileArray[c][r].tileOwner == this.player.id && this.tileArray[c][r].tileType == "warehouse") {
                        if (r < 5 || r > 15) {
                            currentRec = this.game.add.sprite(this.tileArray[c][r].x + this.tileArray[c][r].width / 2, this.tileArray[c][r].y + this.tileArray[c][r].width / 2, graphics.generateTexture());
                            currentRec.angle = Math.floor(Math.random() * 40) - 20;
                            currentRec.anchor.setTo(0.5);
                            switch (this.tileArray[c][r].tileName) {
                                case "energy":
                                    currentRec.tint = 0xfce315;
                                    break;
                                case "oxygen":
                                    currentRec.tint = 0x00b1f0;
                                    break;
                                case "rocket":
                                    currentRec.tint = 0xe82a2c;
                                    break;
                                case "metal":
                                    currentRec.tint = 0xfffffe;
                                    break;
                                case "biomass":
                                    currentRec.tint = 0x8ac342;
                                    break;
                                case "biodrone":
                                    currentRec.tint = 0x9f3a9b;
                                    break;
                                case "uranium":
                                    currentRec.tint = 0xf36520;
                                    break;
                                default:
                                    break;
                            }
                            this.game.boardGroup.add(currentRec);
                        }
                    }
                }
            }
            graphics.destroy();
        }
    }, {
        key: "createTileArray",
        value: function createTileArray(columns, rows, point) {
            this.tileDetail = this.game.cache.getJSON('tileDetail');

            this.tileStartCoordinates = { x: 0, y: 0 };

            var x, y;

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
            graphics.beginFill(0xffffff, 1);
            graphics.drawRect(100, 100, this.tileWidth, this.tileHeight);

            for (var column = 0; column < columns; column++) {
                for (var row = 0; row < rows; row++) {

                    x = this.tileStartCoordinates.x + this.tileWidth * column + (this.padding * column - 1);
                    y = this.tileStartCoordinates.y + this.tileHeight * row + (this.padding * row - 1);
                    //graphics.generateTexture();

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
                        x = coords[0];
                        y = coords[1];

                        this.tileArray[x][y].tileDamaged = false;
                        this.tileArray[x][y].tileOccupied = false;
                        this.tileArray[x][y].tileX = x;
                        this.tileArray[x][y].tileY = y;
                        this.tileArray[x][y].tileType = obj[prop].type;

                        if (typeof this.tileArray[x][y] != 'undefined') this.tileArray[x][y].tileName = obj[prop].name;else console.log(x + ":" + y + " not found!");

                        if (x < 9) this.tileArray[x][y].tileOwner = 1;else if (x > 20) this.tileArray[x][y].tileOwner = 2;

                        if (typeof obj[prop].properties != 'undefined') {
                            this.tileArray[x][y].tileProperties = obj[prop].properties;
                        }
                    }
                }
            }
        }
    }, {
        key: "pixelsToTile",
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
        key: "tileToPixels",
        value: function tileToPixels(x, y) {
            var tileObj = this.tileArray[x][y];
            return { x: tileObj.x + tileObj.width / 2, y: tileObj.y + tileObj.height / 2 };
        }
    }, {
        key: "tileClicked",
        value: function tileClicked(obj) {
            this.hideTiles();
            this.game.client.sendInput({ event: 'tileClicked', x: parseInt(obj.tileX), y: parseInt(obj.tileY) });
            return;
        }
    }, {
        key: "showTiles",
        value: function showTiles(coordsArray, color) {
            for (var i in coordsArray) {
                this.tileArray[coordsArray[i].x][coordsArray[i].y].alpha = 0.5;
                if (color) {
                    this.tileArray[coordsArray[i].x][coordsArray[i].y].tint = color;
                } else {
                    this.tileArray[coordsArray[i].x][coordsArray[i].y].tint = 0xffd900;
                }
                this.shownTiles.push({ x: coordsArray[i].x, y: coordsArray[i].y });
            }
        }
    }, {
        key: "hideTiles",
        value: function hideTiles(tileArray) {
            if (!tileArray) {
                for (var i in this.shownTiles) {
                    this.tileArray[this.shownTiles[i].x][this.shownTiles[i].y].alpha = 0;
                }
                this.shownTiles = [];
            }
        }
    }, {
        key: "shootTile",
        value: function shootTile(cloneCoordinates) {

            var currentX = cloneCoordinates.x;
            var currentY = cloneCoordinates.y;
            var currentTile = this.tileArray[currentX][currentY];
            do {
                currentX++;
                currentTile = this.tileArray[currentX][currentY];
            } while (currentTile.tileType == 'space' || currentTile.tileType == 'surface' || currentTile.tileDamaged === true);

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
        key: "startGame",
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

                if (moves !== false) {
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
            CLONE: 0,
            BIODRONE: 1
        });

        this.x = x;
        this.y = y;
        this.uuid = uuid;
        this.underEspionage = false;
        this.isGunner = false;
        this.type = this.typeEnum[type.toUpperCase()];

        switch (type) {
            case 'biodrone':
                break;
            case 'clone':
                break;
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
        this.armsArray = [];

        this.selectedPersonnelToMove = null;
        this.currentLegalPieces = [];

        this.initResources();
    }

    _createClass(Player, [{
        key: 'addPersonnel',
        value: function addPersonnel(type, x, y, uuid) {
            if (type == "clone" && this.getPersonnel(type).length < this.startingCloneCount) {
                var personnel = new Personnel('clone', x, y, uuid);
                this.personnelArray.push(personnel);
                return personnel;
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
                if (type === null || this.personnelArray[i].type === 0) returnArray.push(this.personnelArray[i]);
            }
            return returnArray;
        }
    }, {
        key: 'getPersonnelByUUID',
        value: function getPersonnelByUUID(uuid) {
            var personnel = this.getPersonnel();
            for (var i in personnel) {
                if (personnel[i].uuid == uuid) {
                    return personnel[i];
                }
            }
            return false;
        }
    }, {
        key: 'getPersonnelByPoint',
        value: function getPersonnelByPoint(point) {
            var personnels = this.getPersonnel();
            for (var i = 0; i < personnels.length; i++) {
                if (personnels[i].x == point.x && personnels[i].y == point.y) {
                    return personnels[i];
                }
            }
            return false;
        }
    }, {
        key: 'checkPersonnelMove',
        value: function checkPersonnelMove(personnel, point) {
            for (var i = 0; i < this.currentLegalPieces.length; i++) {
                if (personnel.x == this.currentLegalPieces[i].origin.x && personnel.y == this.currentLegalPieces[i].origin.y) {
                    if (typeof point !== 'undefined') {
                        for (var j = 0; j < this.currentLegalPieces[i].moves.length; j++) {
                            if (this.currentLegalPieces[i].moves[j].x == point.x && this.currentLegalPieces[i].moves[j].y == point.y) {
                                return true;
                            }
                        }
                    } else {
                        return true;
                    }
                }
            }
            return false;
        }
    }, {
        key: 'purgeLegalPieces',
        value: function purgeLegalPieces(personnel, purgeAllMatchingTypes) {
            if (typeof personnel === 'undefined') {
                this.currentLegalPieces = [];
                return;
            }
            var i = this.currentLegalPieces.length;
            while (i--) {
                if (this.currentLegalPieces[i].type === personnel.type && purgeAllMatchingTypes === true) {
                    this.currentLegalPieces.splice(i, 1);
                }
            }
        }
    }, {
        key: 'getGunners',
        value: function getGunners() {
            var returnArray = [];
            var clones = this.getPersonnel('clone');
            for (var i in clones) {
                if (clones[i].isGunner) {
                    returnArray.push(clones[i]);
                }
            }
            return returnArray;
        }
    }, {
        key: 'getOrdnance',
        value: function getOrdnance(type) {
            var returnArray = [];
            for (var i in this.ordnanceArray) {
                if (type === null || this.ordnanceArray[i].type === 0) returnArray.push(this.ordnanceArray[i]);
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
                for (var count = 0; count < 10; count++) {
                    if (count < 5) {
                        this.resourceArray[recArray[i]].push(rec);
                    } else {
                        this.resourceArray[recArray[i]].push(null);
                    }
                }
            }
        }
    }, {
        key: 'getResourceCount',
        value: function getResourceCount(type) {
            var foundResources = 0;
            var currentResourceSlot = 9;

            if (type == "energy") {
                return this.getResourceCount('energy1') + this.getResourceCount('energy2');
            }

            while (currentResourceSlot >= 0) {
                if (this.resourceArray[type][currentResourceSlot] === null) {
                    currentResourceSlot--;
                    continue;
                } else if (this.resourceArray[type][currentResourceSlot].damaged === true) {
                    return foundResources;
                } else {
                    foundResources++;
                }
                currentResourceSlot--;
            }
            return foundResources;
        }

        // CheckResource defaults to assume you are checking to spend a resource. Set "accept" to true if you are checking to receive a resource

    }, {
        key: 'checkResource',
        value: function checkResource(type, count, accept) {
            var currentResourceSlot = 9;
            var foundResources = 0;
            var resourceSlots = 0;

            if (type == "nuke") {
                console.log("special case: this produces ordnance. Check back later...");
                return false;
            }

            if (type == "energy") {
                var e1 = this.checkResource("energy1", count, accept);
                var e2 = this.checkResource("energy2", count, accept);

                if (e1 === true) {
                    return e1;
                } else if (e2 === true) {
                    return e2;
                } else {
                    return false;
                }
            }

            while (currentResourceSlot >= 0) {
                if (this.resourceArray[type][currentResourceSlot] === null) {
                    if (accept === true) {
                        resourceSlots++;
                        if (resourceSlots == count) {
                            return true;
                        }
                    }
                    currentResourceSlot--;
                    continue;
                } else if (this.resourceArray[type][currentResourceSlot].damaged === true) {
                    if (accept === true) {
                        // return false;
                    } else {
                        return false;
                    }
                } else {
                    foundResources++;
                }

                if (accept !== false && foundResources === count) {
                    return true;
                }
                currentResourceSlot--;
            }
            return false;
        }
    }, {
        key: 'spendResource',
        value: function spendResource(type, count) {
            var currentResourceSlot = 9;
            var originalCount = count;

            if (type == "energy") {
                var success = false;
                while (count > 0) {
                    success = this.spendResource("energy1", 1);
                    if (success !== false) {
                        count--;
                    } else {
                        success = this.spendResource("energy2", 1);
                        if (success !== false) {
                            count--;
                        }
                    }
                }
                return originalCount;
            }

            while (currentResourceSlot >= 0 && count > 0) {
                if (this.resourceArray[type][currentResourceSlot] === null) {
                    currentResourceSlot--;
                    continue;
                } else if (this.resourceArray[type][currentResourceSlot].damaged === true) {
                    //console.error("Tried to spend resources you don't have!");
                    return false;
                } else {
                    this.resourceArray[type][currentResourceSlot] = null;
                    count--;
                }
            }

            return originalCount;
        }
    }, {
        key: 'acceptResource',
        value: function acceptResource(type, count) {
            var resource = null;
            var currentResourceSlot = 9;
            var searching = true;
            var originalCount = count;

            if (type == "energy") {
                var success = false;
                while (count > 0) {
                    success = this.acceptResource("energy1", 1);
                    if (success !== false) {
                        count--;
                    } else {
                        success = this.acceptResource("energy2", 1);
                        if (success !== false) {
                            count--;
                        }
                    }
                }
                return originalCount;
            }
            while (1) {
                if (searching === true) {
                    // peek at next resource
                    if (this.resourceArray[type][currentResourceSlot] !== null) {
                        console.error("no room for this resource!");
                        return false;
                    }
                    if (currentResourceSlot === 0 || this.resourceArray[type][currentResourceSlot - 1] !== null) {
                        searching = false;
                        continue;
                    }
                    currentResourceSlot--;
                } else {
                    if (currentResourceSlot + 1 > this.resourceArray[type].length) {
                        return originalCount - count;
                    }
                    resource = new Resource(type);
                    this.resourceArray[type][currentResourceSlot] = resource;
                    count--;
                    if (count === 0) {
                        return originalCount;
                    }
                    currentResourceSlot++;
                }
                if (currentResourceSlot < 0) {
                    console.error("Out of bounds. No empty resouruce slots found.");
                    return false;
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
var uuid = require('uuid/v4');

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
            ROLL: 0, // Literally the act of rolling the die
            MOVE: 1, // Selecting the clone and (optionally) the biodrone(s) and their target spaces
            ACTION: 2, // Trigger tile  
            TARGETS: 3, // Assign target(s) (ie. - gunner, tile, espionaged clone) 
            END: 4 // assess victory conditions
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

        this.queuedBattleTileType = null;
    }

    _createClass(Septikon, [{
        key: 'clicked',
        value: function clicked(data) {

            // Process the click from the client. 
            // Basically, check game and turn state.

            switch (this.gameState) {

                case this.gameStateEnum.SETUP:

                    // Player is placing new clones in the field.
                    var player = this.getPlayerBySocketID(data.socketID);
                    var success = false;

                    if (player.getPersonnel('clone').length < player.startingCloneCount) {
                        success = this.placeClone(player, data.x, data.y);
                    }

                    if (success === true) {
                        // Check on personnel count. If personnel is at the start count, send modal to start game.
                        if (player.getPersonnel('clone').length == player.startingCloneCount) {
                            this.emit('request', { callback: "modal", details: { type: "askStart" } }, player.socketID);
                        }
                    }
                    break;

                case this.gameStateEnum.GAME:

                    switch (this.turnState) {
                        case this.turnStateEnum.MOVE:

                            // Player will click to designate the desired personnel to move, so queue up the selection(s) and wait for confirmation message.
                            // Player can move one clone and any/all biodrone(s) per turn.
                            // Note: The array of legal personnel (in this.activePlayer) was sent by rollDice().
                            // THIS IS UNTESTED WITH BIODRONES.

                            // emit a hideTiles()

                            var selectedPersonnel = this.activePlayer.getPersonnelByPoint({ x: data.x, y: data.y });

                            if (selectedPersonnel !== false) {
                                // Clone was clicked, so:
                                var isLegalPersonnel = this.activePlayer.checkPersonnelMove(selectedPersonnel);
                                if (isLegalPersonnel === true) {
                                    //  - set selected in player
                                    this.activePlayer.selectedPersonnelToMove = selectedPersonnel;
                                    //  - Show Clones in client
                                    //      emit something here
                                    //  - Show this clone's moves in client
                                    //      emit something here
                                    //  - show this clone in different color in client
                                    //      emit something here
                                }
                            } else if (this.activePlayer.selectedPersonnelToMove !== null) {
                                // check for legal tile
                                var isLegalMove = this.activePlayer.checkPersonnelMove(this.activePlayer.selectedPersonnelToMove, { x: data.x, y: data.y });
                                if (isLegalMove === false) {
                                    // emit something to show clones to client
                                } else {
                                    // if is legal, clear selectedPer... and trigger move
                                    this.activePlayer.selectedPersonnelToMove.move({ x: data.x, y: data.y });
                                    // emit move to client
                                    this.emit('action', { callback: 'movePersonnel', details: { uuid: data.uuid, x: data.x, y: data.y } }, this.activePlayer.socketID);

                                    // clear moved personnel from the player array. If moved personnel was a clone, remove ALL clones from array.
                                    this.activePlayer.purgeLegalPieces(this.activePlayer.selectedPersonnelToMove, true); // true is passed for clones. null for biodrones.
                                }
                                this.activePlayer.selectedPersonnelToMove = null;
                            }

                            // If legal personnel are empty, advance turnstate.
                            if (this.activePlayer.currentLegalPieces.length <= 0) {
                                this.turnState++;
                                // emit some indication to client
                            }
                            break;

                        case this.turnStateEnum.ACTION:

                            // Player will click to designate the desired where selected personnel are to move, so queue up the selections and wait for confirmation message.
                            // Player will confirm movement selections with GO!

                            console.log("Movement queued!");
                            break;

                        case this.turnStateEnum.TARGETS:

                            // Player will designate gunner(s) for firing and/or additional targets, depending on the battle tile type.
                            // Player will confirm targets with GO!

                            console.log("Target queued!");
                            this.changeActivePlayer();
                            break;

                        case this.turnStateEnum.END:

                            // Any post-turn processing can happen here. Otherwise, the turn may already be over...
                            this.turnState = this.turnStateEnum.ROLL;
                            break;
                    }
                    break;

                default:
                    break;
            }
        }
    }, {
        key: 'go',
        value: function go(data) {
            switch (this.turnState) {
                case this.turnStateEnum.MOVE:
                    // Player has confirmed clone and biodrone selection.
                    // Verify that a clone was selected. 
                    // Advance turnState
                    // Send Player move options for selected personnel.
                    if (this.activePlayer.queuedPersonnelToMove.length < 1) {
                        return;
                    }
                    this.turnState++;
                    console.log("personnel selection confirmed");
                    break;

                case this.turnStateEnum.ACTION:
                    // Player has confirmed where personnel will move.
                    // Send move order to client.
                    // Trigger tile action or send target options (gunners, tiles, etc)
                    break;
                case this.turnStateEnum.TARGETS:
                    // Player has confirmed all targets
                    // Fire ordnance or lasers or whatever
                    // Update client with result
                    break;
                case this.turnStateEnum.END:
                    break;
            }
            console.log(data);
        }
    }, {
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
            var player = null;
            switch (state.value) {
                case 'reset':
                    player = this.getPlayerBySocketID(state.socketID);
                    player.removePersonnel(null, true);
                    this.emit('action', { callback: "removeAllPersonnel", details: {} }, player.socketID);
                    break;
                case 'start':
                    player = this.getPlayerBySocketID(state.socketID);
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
                        for (var c in currentPlayerClones) {
                            oppPayload.push({
                                x: currentPlayerClones[c].x,
                                y: currentPlayerClones[c].y,
                                uuid: currentPlayerClones[c].uuid
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
        key: 'changeActivePlayer',
        value: function changeActivePlayer() {
            this.emit('action', { callback: "takeDice", details: {} }, this.activePlayer.socketID);
            this.activePlayer = this.getPlayerOpponent(this.activePlayer);
            this.emit('action', { callback: "offerDice", details: {} }, this.activePlayer.socketID);
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
        key: 'checkArms',
        value: function checkArms(player) {
            player.armsArray = [];
            for (var i in player.personnelArray) {
                if (this.tileArray[player.personnelArray[i].x][player.personnelArray[i].y].type == "armory") {
                    player.armsArray.push(this.tileArray[player.personnelArray[i].x][player.personnelArray[i].y].name);
                }
            }
        }
    }, {
        key: 'checkGunners',
        value: function checkGunners(player) {
            for (var i in player.personnelArray) {
                if (this.tileArray[player.personnelArray[i].x][player.personnelArray[i].y].type == "surface") {
                    player.personnelArray[i].isGunner = true;
                } else {
                    player.personnelArray[i].isGunner = false;
                }
            }
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
        key: 'activateTile',
        value: function activateTile(data) {
            var tile = this.getTile(data.x, data.y);
            var remainingCount = null;

            switch (tile.type) {
                case "surface":
                    break;
                case "production":

                    // Three special cases: 
                    //  - Sensor Cabin does not cost or yield anything. We can handle this immediately)
                    //  - Production Repair costs, but triggers a repair just like the Repair battle tile (We need to check if we can afford)
                    //  - Nuclear Armory produces a nuke which relies on ordnance which has not been built yet

                    if (tile.name == "sensorCabin") {
                        // This is a sensor cabin so just trigger the action and move on.
                        console.log("sensor cabins are free!");
                        return;
                    }

                    if (tile.name == "prodRepair") {
                        // Trigger the repair  
                        console.log("trigger the repair");
                        return;
                    }

                    if (tile.name == "nuclearArmory") {
                        // Trigger the repair  
                        console.log("Build a nuke!");
                        return;
                    }

                    for (var i in tile.properties.resourceCostType) {
                        if (this.activePlayer.checkResource(tile.properties.resourceCostType[i], tile.properties.resourceCostCount[i]) === false) {
                            // Can't afford it
                            console.log("Can't afford it!");
                            return false;
                        }
                    }

                    for (var j in tile.properties.resourceYieldType) {
                        if (this.activePlayer.checkResource(tile.properties.resourceYieldType[j], tile.properties.resourceYieldCount[j], true) === false) {
                            // No room to store it
                            console.log("can't accept the yield cuz we got no room!");
                            return false;
                        }
                    }

                    for (var k in tile.properties.resourceCostType) {
                        remainingCount = this.activePlayer.spendResource(tile.properties.resourceCostType[k], tile.properties.resourceCostCount[k]);
                        console.log("You have spent " + remainingCount + " " + tile.properties.resourceCostType[k] + ". This leaves you with " + this.activePlayer.getResourceCount(tile.properties.resourceCostType[k]));
                    }

                    for (var l in tile.properties.resourceYieldType) {
                        remainingCount = this.activePlayer.acceptResource(tile.properties.resourceYieldType[l], tile.properties.resourceYieldCount[l]);
                        if (remainingCount) console.log("You have added " + remainingCount + " " + tile.properties.resourceYieldType[l] + ". This leaves you with " + this.activePlayer.getResourceCount(tile.properties.resourceYieldType[l]));
                    }

                    // Update player to their new warehouse values
                    break;

                case "armory":
                    this.checkArms(this.activePlayer);
                    // Update player's personnel to be armed
                    // Maybe have three overlapping sprites. Drill, Cannon, Explosives?
                    break;

                case "battle":
                    switch (tile.name) {
                        case "shield":
                        case "biodrone":
                        case "laser":
                        case "thermite":
                        case "satellite":
                        case "rocket":
                        case "espionage":
                        case "takeover":
                            this.turnState++; // Set state to target.
                            var currentResourceCount = 0;
                            var currentResourceAffordability = 0;
                            var affordableRounds = null;
                            var returnArray = [];
                            var activeGunners = this.activePlayer.getGunners();

                            if (activeGunners.length < 1) {
                                return; // No gunners! Get out of here.
                            }

                            for (var m in tile.properties.resourceCostType) {
                                currentResourceCount = this.activePlayer.getResourceCount(tile.properties.resourceCostType[m]);
                                currentResourceAffordability = currentResourceCount / tile.properties.resourceCostCount;
                                if (currentResourceAffordability < 1) {
                                    return; // Not enough of a resource!
                                }
                                if (affordableRounds === null || currentResourceAffordability < affordableRounds) {
                                    affordableRounds = currentResourceAffordability;
                                }
                            }
                            console.log("tell player they can afford " + affordableRounds + " gunner(s)");
                            this.queuedBattleTileType = tile.name;
                            this.emit('action', { callback: "offerGunners", details: { gunners: activeGunners } }, this.activePlayer.socketID);
                            // Ready to select gunners!
                            break;

                        case "counterEspionage":
                            // look for clones that are opponent's spied
                            break;

                        case "repair":
                        case "repairTwo":
                            currentResourceCount = 0;
                            var activeDamagedTiles = this.getDamagedTiles(this.activePlayer);
                            if (activeDamagedTiles.length < 1) {
                                return;
                            }
                            // calculate cost of repair
                            for (var n in tile.properties.resourceCostType) {
                                currentResourceCount = this.activePlayer.getResourceCount(tile.properties.resourceCostType[n]);
                                if (currentResourceCount < tile.properties.resourceCostCount) {
                                    return; // Not enough of a resource!
                                }
                            }
                            console.log("Tell player that they can afford to fix up the station!");
                            break;
                    }
                    break;

                default:
                    break;
            }
        }
    }, {
        key: 'getLocks',
        value: function getLocks(player) {
            var returnArray = [];
            for (var c in this.tileArray) {
                for (var r in this.tileArray[c]) {
                    if (this.tileArray[c][r].name == "lock") {
                        if (player) {
                            if (player.id == 1 && c < 12) {
                                returnArray.push(this.tileArray[c][r]);
                            } else if (player.id == 2 && c > 18) {
                                returnArray.push(this.tileArray[c][r]);
                            }
                        } else {
                            returnArray.push(this.tileArray[c][r]);
                        }
                    }
                }
            }
            return returnArray;
        }
    }, {
        key: 'getDamagedTiles',
        value: function getDamagedTiles(player) {
            var returnArray = [];
            for (var c in this.tileArray) {
                for (var r in this.tileArray[c]) {
                    if (player) {
                        if (player.id == 1) {
                            if (c < 12 && this.tileArray[c][r].damaged === true) {
                                returnArray.push(this.tileArray[c][r]);
                            }
                        } else {
                            if (c > 18 && this.tileArray[c][r].damaged === true) {
                                returnArray.push(this.tileArray[c][r]);
                            }
                        }
                    } else {
                        if (this.tileArray[c][r].damaged === true) {
                            returnArray.push(this.tileArray[c][r]);
                        }
                    }
                }
            }
            return returnArray;
        }
    }, {
        key: 'placeClone',
        value: function placeClone(player, x, y) {

            // Attempt to place clones
            // If the gamestate is SETUP, clones can go into any unoccupied, player-owned, battle, production, lock, or armory tile.
            // If the gamestate is GAME, clones can only go into unoccupied, player-owned, locks.
            // RETURN true or false for success or failure.
            // I should refactor this, but I'm tired.

            if (typeof player === 'undefined' || player === null) {
                return false;
            }

            var selectedTile = this.getTile(x, y);
            var clone, cloneUUID;

            if (player.id != selectedTile.owner || selectedTile.occupied === true) {
                return;
            }

            // if gamestate is SETUP
            if (this.gameState === this.gameStateEnum.SETUP) {
                if (selectedTile.type == "lock" || selectedTile.type == "battle" || selectedTile.type == "armory" || selectedTile.type == "production") {
                    cloneUUID = uuid();
                    //var uuid = require('uuid/v4')();
                    clone = player.addPersonnel('clone', x, y, cloneUUID);
                    if (clone !== false) {
                        this.checkArms(player);
                        selectedTile.occupied = true;
                        this.emit('action', { callback: "addClone", details: { x: x, y: y, playerID: player.id, uuid: cloneUUID } }, player.socketID);
                        return true;
                    } else {
                        return false;
                    }
                }
            }

            // if gamestate is GAME
            if (this.gameState === this.gameStateEnum.GAME) {
                if (selectedTile.type == "lock") {
                    cloneUUID = uuid();
                    //var uuid = require('uuid/v4')();
                    clone = player.addPersonnel('clone', x, y, cloneUUID);
                    if (clone !== false) {
                        this.checkArms(player);
                        selectedTile.occupied = true;
                        this.emit('action', { callback: "addClone", details: { x: x, y: y, playerID: player.id, uuid: cloneUUID } }, player.socketID);
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        }
    }, {
        key: 'createTileArray',
        value: function createTileArray() {
            var tileJSON = require('../../assets/tileDetail.json');

            for (var c = 0; c < this.tileColumns; c++) {
                this.tileArray[c] = [];
                for (var r = 0; r < this.tileRows; r++) {
                    this.tileArray[c][r] = {
                        x: c,
                        y: r
                    };
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
                            this.tileArray[x][y].properties = obj[prop].properties;
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
                    returnArray.push({ type: personnelArray[i].type, origin: { x: personnelArray[i].x, y: personnelArray[i].y }, uuid: personnelArray[i].uuid, moves: movesArray });
                }
            }

            for (var j in ordnanceArray) {
                movesArray = this.getLegalMoves(personnelArray[j], this.currentDiceValue, { x: personnelArray[j].x, y: personnelArray[j].y });
                if (movesArray.length > 0) {
                    returnArray.push({ type: "ordnance", uuid: ordnanceArray[j].uuid, moves: movesArray });
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
            if (moves < 1) {
                console.error("Illegal move number! This could result in infinite loop.");
                return false;
            }
            var legalMoves = [];
            var returnArray = [];
            var nextMoveToCheck = null;
            var nextTileToCheck = null;
            moves--;
            // console.log(process.memoryUsage().heapUsed);

            if (typeof previousCoord === 'undefined') {
                var locks = this.getLocks(this.activePlayer);
                var isLock = false;

                for (var l in locks) {
                    if (locks[l].x == currentCoord.x && locks[l].y == currentCoord.y) {
                        isLock = true;
                    }
                }

                if (isLock === true) {
                    for (var i in locks) {
                        if (currentCoord.x == locks[i].x && currentCoord.y == locks[i].y) {
                            continue;
                        } // don't include the lock you're sitting on
                        if (this.tileArray[locks[i].x][locks[i].y].occupied === true) {
                            continue;
                        } // don't include lock that others are sitting on
                        if (moves > 1) {
                            returnArray = returnArray.concat(this.getLegalMoves(gamePieceType, moves, { x: locks[i].x, y: locks[i].y }, currentCoord));
                        } else {
                            returnArray.push(locks[i]);
                        }
                        for (var c in returnArray) {
                            if (returnArray[c].x !== currentCoord.x || returnArray[c].y !== currentCoord.y) legalMoves.push(returnArray[c]);
                        }
                    }
                }
            }

            for (var direction in this.directionEnum) {
                nextMoveToCheck = this.getCoordFromDirection(currentCoord, direction);
                if (nextMoveToCheck === false) {
                    continue;
                }

                nextTileToCheck = this.tileArray[nextMoveToCheck.x][nextMoveToCheck.y];

                if (nextTileToCheck.damaged === true) {
                    continue;
                }
                if (nextTileToCheck.type === "space") {
                    continue;
                }
                if (this.checkWall(this.directionEnum[direction], currentCoord) === false) {
                    continue;
                }

                if (typeof previousCoord === 'undefined' || typeof previousCoord !== 'undefined' && JSON.stringify(nextMoveToCheck) !== JSON.stringify(previousCoord)) {
                    // Check if tile is occupied
                    if (moves === 0) {
                        if (nextTileToCheck.occupied === false) {
                            legalMoves.push(nextMoveToCheck);
                        }
                    } else {
                        returnArray = returnArray.concat(this.getLegalMoves(gamePieceType, moves, nextMoveToCheck, currentCoord));
                        for (var index in returnArray) {
                            if (returnArray[index].x !== currentCoord.x || returnArray[index].y !== currentCoord.y) legalMoves.push(returnArray[index]);
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
                    if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y] & this.directionEnum.NORTH) === 0) {
                        return true;
                    }
                    return false;
                case this.directionEnum.SOUTH:
                    // DOWN
                    if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y] & this.directionEnum.SOUTH) === 0) {
                        return true;
                    }
                    return false;
                case this.directionEnum.EAST:
                    // RIGHT
                    if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y] & this.directionEnum.EAST) === 0) {
                        return true;
                    }
                    return false;
                case this.directionEnum.WEST:
                    // LEFT
                    if (parseInt(this.wallGrid.grid[currentCoordinate.x][currentCoordinate.y] & this.directionEnum.WEST) === 0) {
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
                this.activePlayer.currentLegalPieces = this.getLegalPieces();

                // Player receives array of legal personnel (clones and biodrones) and turn state advances to MOVE
                this.emit('action', { callback: "diceRolled", details: { value: this.currentDiceValue, gamePieces: this.activePlayer.currentLegalPieces } }, data.socketID);
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

            this.game.hudBg = this.game.add.sprite(0, 0, 'hud-bg');

            this.game.go = this.game.add.sprite(40, 80, 'text_go');
            this.game.go.scale.setTo(0.25);
            this.game.go.inputEnabled = false;
            this.game.go.filters = [this.game.add.filter('Gray')];

            this.game.go.clicked = function () {
                if (this.game.septikon.choosingTargets === true) {
                    this.game.client.sendInput({ event: 'gunnersSelected', gunners: this.game.septikon.selectedGunners });
                }
            };

            this.game.go.events.onInputDown.add(this.game.go.clicked, this);

            this.game.go.enable = function () {
                this.filters = null;
                this.inputEnabled = true;
            };

            this.game.go.disable = function () {
                this.filters = [this.game.add.filter('Gray')];
                this.inputEnabled = false;
            };

            this.game.dice = new _dice2.default(this.game, 50, 40);
            this.game.dice.scale.setTo(0.25);

            this.game.add.existing(this.game.dice);

            this.game.hudGroup.add(this.game.hudBg);
            this.game.hudGroup.add(this.game.dice);
            this.game.hudGroup.add(this.game.go);
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
      this.game.load.image('hud-bg', 'assets/hud-bg.png');

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

            //this.game.septikon.setup();
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
                modalCloseOnInput: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvdGlsZURldGFpbC5qc29uIiwiYXNzZXRzL3dhbGxHcmlkLmpzb24iLCJub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsInNyY1xcbWFpbi5qcyIsInNyY1xcbW9kYWwuanMiLCJzcmNcXHByZWZhYnNcXGNsaWVudC5qcyIsInNyY1xccHJlZmFic1xcY2xvbmUuanMiLCJzcmNcXHByZWZhYnNcXGNyb3NzaGFpcnMuanMiLCJzcmNcXHByZWZhYnNcXGRpY2UuanMiLCJzcmNcXHByZWZhYnNcXG1hc3Rlci5qcyIsInNyY1xccHJlZmFic1xcb3JkbmFuY2UuanMiLCJzcmNcXHByZWZhYnNcXHBlcnNvbm5lbC5qcyIsInNyY1xccHJlZmFic1xccmVzb3VyY2VzLmpzIiwic3JjXFxwcmVmYWJzXFxzZXB0aWtvbi5qcyIsInNyY1xccHJlZmFic1xcdGVhbS5qcyIsInNyY1xcc2VydmVyXFxvcmRuYW5jZS5qcyIsInNyY1xcc2VydmVyXFxwZXJzb25uZWwuanMiLCJzcmNcXHNlcnZlclxccGxheWVyLmpzIiwic3JjXFxzZXJ2ZXJcXHJlc291cmNlLmpzIiwic3JjXFxzZXJ2ZXJcXHNlcHRpa29uLmpzIiwic3JjXFxzdGF0ZXNcXGJvb3QuanMiLCJzcmNcXHN0YXRlc1xcZ2FtZS5qcyIsInNyY1xcc3RhdGVzXFxnYW1lb3Zlci5qcyIsInNyY1xcc3RhdGVzXFxwcmVsb2FkZXIuanMiLCJzcmNcXHN0YXRlc1xcc2V0dXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0JBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFHLE9BQU8sT0FBUCxLQUFvQixXQUF2QixFQUFvQztBQUNoQyxRQUFH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QUssSUFBTCxDQUFVLElBQTNDLEVBQWlELFVBQWpELEVBQTZELENBQTdEO0FBQ0g7Ozt1Q0FFZ0I7O0FBRWI7QUFDQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixXQUFoQixDQUNJO0FBQ0Esc0JBQU0sVUFETjtBQUVBLG1DQUFtQixJQUZuQjtBQUdBLG1DQUFtQixJQUhuQjtBQUlBLDBCQUFVLENBQUM7QUFDUCwwQkFBTSxVQURDO0FBRVAsa0NBQWMsVUFGUDtBQUdQLGtDQUFjLEdBSFA7QUFJUCxtQ0FBZSxHQUpSO0FBS1AsbUNBQWU7QUFMUixpQkFBRCxFQU1QO0FBQ0MsMEJBQU0sTUFEUDtBQUVDLDZCQUFTLDhEQUZWO0FBR0MsZ0NBQVksY0FIYjtBQUlDLDhCQUFVLEVBSlg7QUFLQywyQkFBTyxVQUxSO0FBTUMsNkJBQVMsQ0FBQztBQU5YLGlCQU5PLEVBYVA7QUFDQywwQkFBTSxNQURQO0FBRUMsNkJBQVMsS0FBSyxJQUFMLENBQVUsSUFGcEI7QUFHQyxnQ0FBWSxjQUhiO0FBSUMsOEJBQVUsRUFKWDtBQUtDLDJCQUFPLFVBTFI7QUFNQyw2QkFBUztBQU5WLGlCQWJPO0FBSlYsYUFESjtBQTRCRDs7OztFQXpFaUIsT0FBTyxLOztrQkE0RVosSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cz17XHJcblx0XCJ0aWxlUHJvcGVydHlBcnJheVwiOiB7XHJcblx0XHRcIm90aGVyU3BhY2VcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDAwXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInNwYWNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInNwYWNlXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjksMFwiLCBcIjksMVwiLCBcIjksMlwiLCBcIjksM1wiLCBcIjksNFwiLCBcIjksNVwiLCBcIjksNlwiLCBcIjksN1wiLCBcIjksOFwiLCBcIjksOVwiLCBcIjksMTBcIiwgXCI5LDExXCIsIFwiOSwxMlwiLCBcIjksMTNcIiwgXCI5LDE0XCIsIFwiOSwxNVwiLCBcIjksMTZcIiwgXCI5LDE3XCIsIFwiOSwxOFwiLCBcIjksMTlcIiwgXCI5LDIwXCIsIFwiMTAsMFwiLCBcIjEwLDFcIiwgXCIxMCwyXCIsIFwiMTAsM1wiLCBcIjEwLDRcIiwgXCIxMCw1XCIsIFwiMTAsNlwiLCBcIjEwLDdcIiwgXCIxMCw4XCIsIFwiMTAsOVwiLCBcIjEwLDEwXCIsIFwiMTAsMTFcIiwgXCIxMCwxMlwiLCBcIjEwLDEzXCIsIFwiMTAsMTRcIiwgXCIxMCwxNVwiLCBcIjEwLDE2XCIsIFwiMTAsMTdcIiwgXCIxMCwxOFwiLCBcIjEwLDE5XCIsIFwiMTAsMjBcIiwgXCIxMSwwXCIsIFwiMTEsMVwiLCBcIjExLDJcIiwgXCIxMSwzXCIsIFwiMTEsNFwiLCBcIjExLDVcIiwgXCIxMSw2XCIsIFwiMTEsN1wiLCBcIjExLDhcIiwgXCIxMSw5XCIsIFwiMTEsMTBcIiwgXCIxMSwxMVwiLCBcIjExLDEyXCIsIFwiMTEsMTNcIiwgXCIxMSwxNFwiLCBcIjExLDE1XCIsIFwiMTEsMTZcIiwgXCIxMSwxN1wiLCBcIjExLDE4XCIsIFwiMTEsMTlcIiwgXCIxMSwyMFwiLCBcIjEyLDBcIiwgXCIxMiwxXCIsIFwiMTIsMlwiLCBcIjEyLDNcIiwgXCIxMiw0XCIsIFwiMTIsNVwiLCBcIjEyLDZcIiwgXCIxMiw3XCIsIFwiMTIsOFwiLCBcIjEyLDlcIiwgXCIxMiwxMFwiLCBcIjEyLDExXCIsIFwiMTIsMTJcIiwgXCIxMiwxM1wiLCBcIjEyLDE0XCIsIFwiMTIsMTVcIiwgXCIxMiwxNlwiLCBcIjEyLDE3XCIsIFwiMTIsMThcIiwgXCIxMiwxOVwiLCBcIjEyLDIwXCIsIFwiMTMsMFwiLCBcIjEzLDFcIiwgXCIxMywyXCIsIFwiMTMsM1wiLCBcIjEzLDRcIiwgXCIxMyw1XCIsIFwiMTMsNlwiLCBcIjEzLDdcIiwgXCIxMyw4XCIsIFwiMTMsOVwiLCBcIjEzLDEwXCIsIFwiMTMsMTFcIiwgXCIxMywxMlwiLCBcIjEzLDEzXCIsIFwiMTMsMTRcIiwgXCIxMywxNVwiLCBcIjEzLDE2XCIsIFwiMTMsMTdcIiwgXCIxMywxOFwiLCBcIjEzLDE5XCIsIFwiMTMsMjBcIiwgXCIxNCwwXCIsIFwiMTQsMVwiLCBcIjE0LDJcIiwgXCIxNCwzXCIsIFwiMTQsNFwiLCBcIjE0LDVcIiwgXCIxNCw2XCIsIFwiMTQsN1wiLCBcIjE0LDhcIiwgXCIxNCw5XCIsIFwiMTQsMTBcIiwgXCIxNCwxMVwiLCBcIjE0LDEyXCIsIFwiMTQsMTNcIiwgXCIxNCwxNFwiLCBcIjE0LDE1XCIsIFwiMTQsMTZcIiwgXCIxNCwxN1wiLCBcIjE0LDE4XCIsIFwiMTQsMTlcIiwgXCIxNCwyMFwiLCBcIjE1LDBcIiwgXCIxNSwxXCIsIFwiMTUsMlwiLCBcIjE1LDNcIiwgXCIxNSw0XCIsIFwiMTUsNVwiLCBcIjE1LDZcIiwgXCIxNSw3XCIsIFwiMTUsOFwiLCBcIjE1LDlcIiwgXCIxNSwxMFwiLCBcIjE1LDExXCIsIFwiMTUsMTJcIiwgXCIxNSwxM1wiLCBcIjE1LDE0XCIsIFwiMTUsMTVcIiwgXCIxNSwxNlwiLCBcIjE1LDE3XCIsIFwiMTUsMThcIiwgXCIxNSwxOVwiLCBcIjE1LDIwXCIsIFwiMTYsMFwiLCBcIjE2LDFcIiwgXCIxNiwyXCIsIFwiMTYsM1wiLCBcIjE2LDRcIiwgXCIxNiw1XCIsIFwiMTYsNlwiLCBcIjE2LDdcIiwgXCIxNiw4XCIsIFwiMTYsOVwiLCBcIjE2LDEwXCIsIFwiMTYsMTFcIiwgXCIxNiwxMlwiLCBcIjE2LDEzXCIsIFwiMTYsMTRcIiwgXCIxNiwxNVwiLCBcIjE2LDE2XCIsIFwiMTYsMTdcIiwgXCIxNiwxOFwiLCBcIjE2LDE5XCIsIFwiMTYsMjBcIiwgXCIxNywwXCIsIFwiMTcsMVwiLCBcIjE3LDJcIiwgXCIxNywzXCIsIFwiMTcsNFwiLCBcIjE3LDVcIiwgXCIxNyw2XCIsIFwiMTcsN1wiLCBcIjE3LDhcIiwgXCIxNyw5XCIsIFwiMTcsMTBcIiwgXCIxNywxMVwiLCBcIjE3LDEyXCIsIFwiMTcsMTNcIiwgXCIxNywxNFwiLCBcIjE3LDE1XCIsIFwiMTcsMTZcIiwgXCIxNywxN1wiLCBcIjE3LDE4XCIsIFwiMTcsMTlcIiwgXCIxNywyMFwiLCBcIjE4LDBcIiwgXCIxOCwxXCIsIFwiMTgsMlwiLCBcIjE4LDNcIiwgXCIxOCw0XCIsIFwiMTgsNVwiLCBcIjE4LDZcIiwgXCIxOCw3XCIsIFwiMTgsOFwiLCBcIjE4LDlcIiwgXCIxOCwxMFwiLCBcIjE4LDExXCIsIFwiMTgsMTJcIiwgXCIxOCwxM1wiLCBcIjE4LDE0XCIsIFwiMTgsMTVcIiwgXCIxOCwxNlwiLCBcIjE4LDE3XCIsIFwiMTgsMThcIiwgXCIxOCwxOVwiLCBcIjE4LDIwXCIsIFwiMTksMFwiLCBcIjE5LDFcIiwgXCIxOSwyXCIsIFwiMTksM1wiLCBcIjE5LDRcIiwgXCIxOSw1XCIsIFwiMTksNlwiLCBcIjE5LDdcIiwgXCIxOSw4XCIsIFwiMTksOVwiLCBcIjE5LDEwXCIsIFwiMTksMTFcIiwgXCIxOSwxMlwiLCBcIjE5LDEzXCIsIFwiMTksMTRcIiwgXCIxOSwxNVwiLCBcIjE5LDE2XCIsIFwiMTksMTdcIiwgXCIxOSwxOFwiLCBcIjE5LDE5XCIsIFwiMTksMjBcIiwgXCIyMCwwXCIsIFwiMjAsMVwiLCBcIjIwLDJcIiwgXCIyMCwzXCIsIFwiMjAsNFwiLCBcIjIwLDVcIiwgXCIyMCw2XCIsIFwiMjAsN1wiLCBcIjIwLDhcIiwgXCIyMCw5XCIsIFwiMjAsMTBcIiwgXCIyMCwxMVwiLCBcIjIwLDEyXCIsIFwiMjAsMTNcIiwgXCIyMCwxNFwiLCBcIjIwLDE1XCIsIFwiMjAsMTZcIiwgXCIyMCwxN1wiLCBcIjIwLDE4XCIsIFwiMjAsMTlcIiwgXCIyMCwyMFwiLCBcIjIxLDBcIiwgXCIyMSwxXCIsIFwiMjEsMlwiLCBcIjIxLDNcIiwgXCIyMSw0XCIsIFwiMjEsNVwiLCBcIjIxLDZcIiwgXCIyMSw3XCIsIFwiMjEsOFwiLCBcIjIxLDlcIiwgXCIyMSwxMFwiLCBcIjIxLDExXCIsIFwiMjEsMTJcIiwgXCIyMSwxM1wiLCBcIjIxLDE0XCIsIFwiMjEsMTVcIiwgXCIyMSwxNlwiLCBcIjIxLDE3XCIsIFwiMjEsMThcIiwgXCIyMSwxOVwiLCBcIjIxLDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVUaGVybWl0ZVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDFcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInRoZXJtaXRlXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImJpb21hc3NcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMl0sXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcclxuXHRcdFx0XHRcImFyZ3NcIjogXCJ0aGVybWl0ZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMjBcIiwgXCI3LDFcIiwgXCI3LDdcIiwgXCIyMywxM1wiLCBcIjIzLDE5XCIsIFwiMjQsMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlU2hpZWxkXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwMlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwic2hpZWxkXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxyXG5cdFx0XHRcdFwiYXJnc1wiOiBcInNoaWVsZFwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsNlwiLCBcIjYsMTNcIiwgXCI2LDE5XCIsIFwiNywyXCIsIFwiNywxMlwiLCBcIjIzLDhcIiwgXCIyMywxOFwiLCBcIjI0LDFcIiwgXCIyNCw3XCIsIFwiMjQsMTRcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZUJpb2Ryb25lXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwM1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiYmlvZHJvbmVcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvZHJvbmVcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcclxuXHRcdFx0XHRcImFyZ3NcIjogXCJiaW9kcm9uZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsNVwiLCBcIjcsM1wiLCBcIjcsMTVcIiwgXCIyMyw1XCIsIFwiMjMsMTdcIiwgXCIyNCwxNVwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlU2F0ZWxsaXRlXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwNFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwic2F0ZWxsaXRlXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm1ldGFsXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXHJcblx0XHRcdFx0XCJhcmdzXCI6IFwic2F0ZWxsaXRlXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwwXCIsIFwiNiwxNFwiLCBcIjcsNFwiLCBcIjcsMTdcIiwgXCIyMywzXCIsIFwiMjMsMTZcIiwgXCIyNCw2XCIsIFwiMjQsMjBcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZUxhc2VyXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwNVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwibGFzZXJcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXHJcblx0XHRcdFx0XCJhcmdzXCI6IFwibGFzZXJcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDNcIiwgXCI2LDdcIiwgXCI2LDhcIiwgXCI2LDEyXCIsIFwiNiwxNlwiLCBcIjcsNVwiLCBcIjcsNlwiLCBcIjcsOVwiLCBcIjcsMThcIiwgXCI3LDE5XCIsIFwiMjMsMVwiLCBcIjIzLDJcIiwgXCIyMywxMVwiLCBcIjIzLDE0XCIsIFwiMjMsMTVcIiwgXCIyNCw0XCIsIFwiMjQsOFwiLCBcIjI0LDEyXCIsIFwiMjQsMTNcIiwgXCIyNCwxN1wiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlUmVwYWlyXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwNlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwicmVwYWlyXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm1ldGFsXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJyZXBhaXJcIixcclxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMVwiLCBcIjYsMTBcIiwgXCI2LDE4XCIsIFwiNyw4XCIsIFwiNywxM1wiLCBcIjIzLDdcIiwgXCIyMywxMlwiLCBcIjI0LDJcIiwgXCIyNCwxMFwiLCBcIjI0LDE5XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVSb2NrZXRcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDA3XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJyb2NrZXRcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wicm9ja2V0XCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXHJcblx0XHRcdFx0XCJhcmdzXCI6IFwicm9ja2V0XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiw0XCIsIFwiNiwxMVwiLCBcIjcsMTBcIiwgXCI3LDE2XCIsIFwiMjMsNFwiLCBcIjIzLDEwXCIsIFwiMjQsOVwiLCBcIjI0LDE2XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVFc3Bpb25hZ2VcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDA4XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJlc3Bpb25hZ2VcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFszXSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZXNwaW9uYWdlXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwxNVwiLCBcIjcsMTFcIiwgXCIyMyw5XCIsIFwiMjQsNVwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlVGFrZW92ZXJcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDA5XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJ0YWtlb3ZlclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMl0sXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcInRha2VvdmVyXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwxN1wiLCBcIjcsMTRcIiwgXCIyMyw2XCIsIFwiMjQsM1wiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlUmVwYWlyVHdvXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxMFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwicmVwYWlyVHdvXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiLCBcIm94eWdlblwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxXSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwicmVwYWlyXCIsXHJcblx0XHRcdFx0XCJhcmdzXCI6IDJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiw5XCIsIFwiMjQsMTFcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZUNvdW50ZXJFc3Bpb25hZ2VcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDExXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJjb3VudGVyRXNwaW9uYWdlXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImJpb21hc3NcIiwgXCJveHlnZW5cIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMV0sXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImNvdW50ZXJcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDJcIiwgXCIyNCwxOFwiXVxyXG5cdFx0fSxcclxuXHRcdFwib3RoZXJTdXJmYWNlXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxMlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJzdXJmYWNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInN1cmZhY2VcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiOCwwXCIsIFwiOCwxXCIsIFwiOCwyXCIsIFwiOCwzXCIsIFwiOCw0XCIsIFwiOCw1XCIsIFwiOCw2XCIsIFwiOCw3XCIsIFwiOCw4XCIsIFwiOCw5XCIsIFwiOCwxMFwiLCBcIjgsMTFcIiwgXCI4LDEyXCIsIFwiOCwxM1wiLCBcIjgsMTRcIiwgXCI4LDE1XCIsIFwiOCwxNlwiLCBcIjgsMTdcIiwgXCI4LDE4XCIsIFwiOCwxOVwiLCBcIjgsMjBcIiwgXCIyMiwwXCIsIFwiMjIsMVwiLCBcIjIyLDJcIiwgXCIyMiwzXCIsIFwiMjIsNFwiLCBcIjIyLDVcIiwgXCIyMiw2XCIsIFwiMjIsN1wiLCBcIjIyLDhcIiwgXCIyMiw5XCIsIFwiMjIsMTBcIiwgXCIyMiwxMVwiLCBcIjIyLDEyXCIsIFwiMjIsMTNcIiwgXCIyMiwxNFwiLCBcIjIyLDE1XCIsIFwiMjIsMTZcIiwgXCIyMiwxN1wiLCBcIjIyLDE4XCIsIFwiMjIsMTlcIiwgXCIyMiwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwib3RoZXJMb2NrXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxM1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJsb2NrXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImxvY2tcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNywwXCIsIFwiNSwxMFwiLCBcIjEsMTBcIiwgXCI3LDIwXCIsIFwiMjMsMFwiLCBcIjIzLDIwXCIsIFwiMjUsMTBcIiwgXCIyOSwxMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYXJtb3J5RHJpbGxcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDE0XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImFybW9yeVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJkcmlsbFwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI0LDEwXCIsIFwiMjYsMTBcIl1cclxuXHRcdH0sXHJcblx0XHRcIkFybW9yeUNhbm5vblwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMTVcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYXJtb3J5XCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImNhbm5vblwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIzLDEwXCIsIFwiMjcsMTBcIl1cclxuXHRcdH0sXHJcblx0XHRcImFybW9yeUV4cGxvc2l2ZXNcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDE2XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImFybW9yeVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJleHBsb3NpdmVzXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjIsMTBcIiwgXCIyOCwxMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwibGljaGVuXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxN1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImxpY2hlblwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwwXCIsIFwiMCwxMFwiLCBcIjAsMTdcIiwgXCIxLDJcIiwgXCIxLDhcIiwgXCIxLDE2XCIsIFwiMSwyMFwiLCBcIjI5LDBcIiwgXCIyOSw0XCIsIFwiMjksMTJcIiwgXCIyOSwxOFwiLCBcIjMwLDNcIiwgXCIzMCwxMFwiLCBcIjMwLDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uTGljaGVuVHdvXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxOFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImxpY2hlblR3b1wiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMl1cclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCw0XCIsIFwiMzAsMTZcIl1cclxuXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uQ2hlbWljYWxSZWFjdG9yXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxOVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImNoZW1pY2FsUmVhY3RvclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJiaW9tYXNzXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wib3h5Z2VuXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsxXVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIxLDFcIiwgXCIxLDlcIiwgXCIyOSwxOVwiLCBcIjI5LDExXCJdXHJcblxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbkNoZW1pY2FsUmVhY3RvclR3b1wiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjBcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJjaGVtaWNhbFJlYWN0b3JUd29cIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsyXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcIm94eWdlblwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMl1cclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCw1XCIsIFwiMzAsMTVcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25BaXJGaWx0ZXJcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDIxXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiYWlyRmlsdGVyXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm94eWdlblwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsyXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcIm94eWdlblwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbM11cclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxNVwiLCBcIjEsMTFcIiwgXCIyOSw5XCIsIFwiMzAsNVwiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbkJpb2NvbGxlY3RvclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjJcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJiaW9jb2xsZWN0b3JcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wib3h5Z2VuXCIsIFwiYmlvbWFzc1wiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcImJpb2Ryb25lXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsxXVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDE0XCIsIFwiMCwxOFwiLCBcIjEsNlwiLCBcIjEsMTdcIiwgXCIzMCw2XCIsIFwiMzAsMlwiLCBcIjI5LDE0XCIsIFwiMjksM1wiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvblVyYW5pdW1NaW5lXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyM1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInVyYW5pdW1NaW5lXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm94eWdlblwiLCBcImVuZXJneVwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcInVyYW5pdW1cIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzFdXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMlwiLCBcIjAsNlwiLCBcIjEsM1wiLCBcIjMwLDE4XCIsIFwiMzAsMTRcIiwgXCIyOSwxN1wiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbk51Y2xlYXJSZWFjdG9yXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyNFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcIm51Y2xlYXJSZWFjdG9yXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcInVyYW5pdW1cIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJlbmVyZ3lcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzNdXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsOVwiLCBcIjAsMTZcIiwgXCIxLDdcIiwgXCIxLDE0XCIsIFwiMSwxOVwiLCBcIjMwLDExXCIsIFwiMzAsNFwiLCBcIjI5LDEzXCIsIFwiMjksNlwiLCBcIjI5LDFcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25UaGVybWFsR2VuZXJhdG9yXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyNVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInRoZXJtYWxHZW5lcmF0b3JcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcImVuZXJneVwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxMlwiLCBcIjMwLDhcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25Gb3VuZHJ5XCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyNlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImZvdW5kcnlcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wibWV0YWxcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzFdXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsM1wiLCBcIjAsMTFcIiwgXCIwLDE5XCIsIFwiMSwxM1wiLCBcIjMwLDE3XCIsIFwiMzAsOVwiLCBcIjMwLDFcIiwgXCIyOSw3XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uRm91bmRyeVR3b1wiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjdcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJmb3VuZHJ5VHdvXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsyXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcIm1ldGFsXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsyXVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIxLDBcIiwgXCIyOSwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvblJvY2tldFdvcmtzaG9wXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyOFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInJvY2tldFdvcmtzaG9wXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcInJvY2tldFwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxXCIsIFwiMCw3XCIsIFwiMSw1XCIsIFwiMSwxMlwiLCBcIjEsMTVcIiwgXCIzMCwxOVwiLCBcIjMwLDEzXCIsIFwiMjksMTVcIiwgXCIyOSw4XCIsIFwiMjksNVwiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvblNlbnNvckNhYmluXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyOVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInNlbnNvckNhYmluXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImtpbGxCaW9kcm9uZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMTNcIiwgXCIzMCw3XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uTnVjbGVhckFybW9yeVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzBcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJudWNsZWFyQXJtb3J5XCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm94eWdlblwiLCBcImVuZXJneVwiLCBcInVyYW5pdW1cIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMSwgMV0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJudWtlXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsxXVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDIwXCIsIFwiMSw0XCIsIFwiMSwxOFwiLCBcIjMwLDBcIiwgXCIyOSwxNlwiLCBcIjI5LDJcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25SZXBhaXJcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDMxXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwicHJvZFJlcGFpclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcInJlcGFpclwiLFxyXG5cdFx0XHRcdFwidGlsZVRhcmdldElEXCI6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCw4XCIsIFwiMzAsMTJcIl1cclxuXHRcdH0sXHJcblx0XHRcInJlc291cmNlT3h5Z2VuXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAzMlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwib3h5Z2VuXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjUsMFwiLCBcIjUsMVwiLCBcIjUsMlwiLCBcIjUsM1wiLCBcIjUsNFwiLCBcIjUsNVwiLCBcIjUsNlwiLCBcIjUsN1wiLCBcIjUsOFwiLCBcIjUsOVwiLCBcIjI1LDExXCIsIFwiMjUsMTJcIiwgXCIyNSwxM1wiLCBcIjI1LDE0XCIsIFwiMjUsMTVcIiwgXCIyNSwxNlwiLCBcIjI1LDE3XCIsIFwiMjUsMThcIiwgXCIyNSwxOVwiLCBcIjI1LDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJyZXNvdXJjZVJvY2tldFwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzNcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInJvY2tldFwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI0LDBcIiwgXCI0LDFcIiwgXCI0LDJcIiwgXCI0LDNcIiwgXCI0LDRcIiwgXCI0LDVcIiwgXCI0LDZcIiwgXCI0LDdcIiwgXCI0LDhcIiwgXCI0LDlcIiwgXCIyNiwxMVwiLCBcIjI2LDEyXCIsIFwiMjYsMTNcIiwgXCIyNiwxNFwiLCBcIjI2LDE1XCIsIFwiMjYsMTZcIiwgXCIyNiwxN1wiLCBcIjI2LDE4XCIsIFwiMjYsMTlcIiwgXCIyNiwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwicmVzb3VyY2VNZXRhbFwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzRcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcIm1ldGFsXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjMsMFwiLCBcIjMsMVwiLCBcIjMsMlwiLCBcIjMsM1wiLCBcIjMsNFwiLCBcIjMsNVwiLCBcIjMsNlwiLCBcIjMsN1wiLCBcIjMsOFwiLCBcIjMsOVwiLCBcIjI3LDExXCIsIFwiMjcsMTJcIiwgXCIyNywxM1wiLCBcIjI3LDE0XCIsIFwiMjcsMTVcIiwgXCIyNywxNlwiLCBcIjI3LDE3XCIsIFwiMjcsMThcIiwgXCIyNywxOVwiLCBcIjI3LDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJyZXNvdXJjZUVuZXJneVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzVcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImVuZXJneVwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIyLDBcIiwgXCIyLDFcIiwgXCIyLDJcIiwgXCIyLDNcIiwgXCIyLDRcIiwgXCIyLDVcIiwgXCIyLDZcIiwgXCIyLDdcIiwgXCIyLDhcIiwgXCIyLDlcIiwgXCIyLDExXCIsIFwiMiwxMlwiLCBcIjIsMTNcIiwgXCIyLDE0XCIsIFwiMiwxNVwiLCBcIjIsMTZcIiwgXCIyLDE3XCIsIFwiMiwxOFwiLCBcIjIsMTlcIiwgXCIyLDIwXCIsIFwiMjgsMFwiLCBcIjI4LDFcIiwgXCIyOCwyXCIsIFwiMjgsM1wiLCBcIjI4LDRcIiwgXCIyOCw1XCIsIFwiMjgsNlwiLCBcIjI4LDdcIiwgXCIyOCw4XCIsIFwiMjgsOVwiLCBcIjI4LDExXCIsIFwiMjgsMTJcIiwgXCIyOCwxM1wiLCBcIjI4LDE0XCIsIFwiMjgsMTVcIiwgXCIyOCwxNlwiLCBcIjI4LDE3XCIsIFwiMjgsMThcIiwgXCIyOCwxOVwiLCBcIjI4LDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJyZXNvdXJjZUJpb21hc3NcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDM2XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJiaW9tYXNzXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjUsMTFcIiwgXCI1LDEyXCIsIFwiNSwxM1wiLCBcIjUsMTRcIiwgXCI1LDE1XCIsIFwiNSwxNlwiLCBcIjUsMTdcIiwgXCI1LDE4XCIsIFwiNSwxOVwiLCBcIjUsMjBcIiwgXCIyNSwwXCIsIFwiMjUsMVwiLCBcIjI1LDJcIiwgXCIyNSwzXCIsIFwiMjUsNFwiLCBcIjI1LDVcIiwgXCIyNSw2XCIsIFwiMjUsN1wiLCBcIjI1LDhcIiwgXCIyNSw5XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJyZXNvdXJjZUJpb2Ryb25lXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAzN1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiYmlvZHJvbmVcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNCwxMVwiLCBcIjQsMTJcIiwgXCI0LDEzXCIsIFwiNCwxNFwiLCBcIjQsMTVcIiwgXCI0LDE2XCIsIFwiNCwxN1wiLCBcIjQsMThcIiwgXCI0LDE5XCIsIFwiNCwyMFwiLCBcIjI2LDBcIiwgXCIyNiwxXCIsIFwiMjYsMlwiLCBcIjI2LDNcIiwgXCIyNiw0XCIsIFwiMjYsNVwiLCBcIjI2LDZcIiwgXCIyNiw3XCIsIFwiMjYsOFwiLCBcIjI2LDlcIl1cclxuXHRcdH0sXHJcblx0XHRcInJlc291cmNlVXJhbml1bVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzhcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInVyYW5pdW1cIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMywxMVwiLCBcIjMsMTJcIiwgXCIzLDEzXCIsIFwiMywxNFwiLCBcIjMsMTVcIiwgXCIzLDE2XCIsIFwiMywxN1wiLCBcIjMsMThcIiwgXCIzLDE5XCIsIFwiMywyMFwiLCBcIjI3LDBcIiwgXCIyNywxXCIsIFwiMjcsMlwiLCBcIjI3LDNcIiwgXCIyNyw0XCIsIFwiMjcsNVwiLCBcIjI3LDZcIiwgXCIyNyw3XCIsIFwiMjcsOFwiLCBcIjI3LDlcIl1cclxuXHRcdH1cclxuXHR9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cz17XHJcblx0XCJncmlkXCI6IFtcclxuXHRcdFs5LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTJdLFxyXG5cdFx0WzMsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDgsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDZdLFxyXG5cdFx0WzExLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA1LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxNF0sXHJcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcclxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxyXG5cdFx0WzExLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA1LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxNF0sXHJcblx0XHRbOSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMiwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTJdLFxyXG5cdFx0WzEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA0XSxcclxuXHRcdFszLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNl0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgNF0sXHJcblx0XHRbMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDRdLFxyXG5cdFx0WzMsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDgsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDZdLFxyXG5cdFx0WzExLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA1LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxNF0sXHJcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcclxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxyXG5cdFx0WzExLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA1LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxNF0sXHJcblx0XHRbOSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMiwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTJdLFxyXG5cdFx0WzMsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA2XVxyXG5cdF1cclxufSIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIHJldHVybiAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cbnZhciBybmc7XG5cbnZhciBjcnlwdG8gPSBnbG9iYWwuY3J5cHRvIHx8IGdsb2JhbC5tc0NyeXB0bzsgLy8gZm9yIElFIDExXG5pZiAoY3J5cHRvICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgcm5nID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn1cblxuaWYgKCFybmcpIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuICBybmcgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBybmc7XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PSAnYmluYXJ5JyA/IG5ldyBBcnJheSgxNikgOiBudWxsO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDE2OyArK2lpKSB7XG4gICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYgfHwgYnl0ZXNUb1V1aWQocm5kcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjQ7XG4iLCJpbXBvcnQgQ2xpZW50IGZyb20gJy4vcHJlZmFicy9jbGllbnQnO1xyXG5pbXBvcnQgQm9vdCBmcm9tICcuL3N0YXRlcy9ib290JztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9zdGF0ZXMvZ2FtZSc7XHJcbmltcG9ydCBTZXR1cCBmcm9tICcuL3N0YXRlcy9zZXR1cCc7XHJcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnLi9zdGF0ZXMvcHJlbG9hZGVyJztcclxuaW1wb3J0IEdhbWVvdmVyIGZyb20gJy4vc3RhdGVzL2dhbWVvdmVyJztcclxuaW1wb3J0IFNlcHRpa29uIGZyb20gJy4vcHJlZmFicy9zZXB0aWtvbic7XHJcblxyXG5pZih0eXBlb2YoU3RvcmFnZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXB0VVVJRCcpICE9PSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgdXVpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXB0VVVJRCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB1dWlkID0gcmVxdWlyZSgndXVpZC92NCcpKCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlcHRVVUlEJywgdXVpZCk7XHJcbiAgICB9XHJcbn0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiTG9jYWwgU3RvcmFnZSBpcyByZXF1aXJlZCFcIik7XHJcbn1cclxuXHJcbi8vIGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCwgUGhhc2VyLkFVVE8sICdwaGFzZXItdGVzdC1nYW1lJyk7XHJcbmNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoXCIxMDBcIiwgXCIxMDBcIiwgUGhhc2VyLkFVVE8pO1xyXG5nYW1lLnNlcHRpa29uID0gbmV3IFNlcHRpa29uKGdhbWUpO1xyXG5nYW1lLmNsaWVudCA9IG5ldyBDbGllbnQoZ2FtZS5zZXB0aWtvbik7XHJcblxyXG5nYW1lLnN0YXRlLmFkZCgnYm9vdCcsIG5ldyBCb290KCkpO1xyXG5nYW1lLnN0YXRlLmFkZCgnZ2FtZScsIG5ldyBHYW1lKCkpO1xyXG5nYW1lLnN0YXRlLmFkZCgnc2V0dXAnLCBuZXcgU2V0dXAoKSk7XHJcbmdhbWUuc3RhdGUuYWRkKCdwcmVsb2FkZXInLCBuZXcgUHJlbG9hZGVyKCkpO1xyXG5nYW1lLnN0YXRlLmFkZCgnZ2FtZW92ZXInLCBuZXcgR2FtZW92ZXIoKSk7XHJcblxyXG5nYW1lLnN0YXRlLnN0YXJ0KCdib290Jyk7XHJcbiIsInZhciBnYW1lTW9kYWwgPSBnYW1lTW9kYWwgfHwge307XHJcblxyXG5cclxuZ2FtZU1vZGFsID0gZnVuY3Rpb24gKGdhbWUpIHtcclxuXHJcblx0dmFyIF90aGlzID0gdGhpcztcclxuXHRnYW1lLm1vZGFscyA9IHt9O1xyXG5cclxuXHQvKipcclxuXHQgKiBbaGlkZU1vZGFsIGRlc2NyaXB0aW9uXVxyXG5cdCAqIEBwYXJhbSAge1t0eXBlXX0gdHlwZSBbZGVzY3JpcHRpb25dXHJcblx0ICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cclxuXHQgKi9cclxuXHR0aGlzLmhpZGVNb2RhbCA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcblx0XHR3aW5kb3cuY29uc29sZS5sb2codHlwZSk7XHJcblx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gZmFsc2U7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGNyZWF0ZU1vZGFsOiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cdFx0XHR2YXIgdHlwZSA9IG9wdGlvbnMudHlwZSB8fCAnJzsgLy8gbXVzdCBiZSB1bmlxdWVcclxuXHRcdFx0dmFyIGluY2x1ZGVCYWNrZ3JvdW5kID0gb3B0aW9ucy5pbmNsdWRlQmFja2dyb3VuZDsgLy8gbWF5YmUgbm90IG9wdGlvbmFsXHJcblx0XHRcdHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvciB8fCBcIjB4MDAwMDAwXCI7XHJcblx0XHRcdHZhciBiYWNrZ3JvdW5kT3BhY2l0eSA9IG9wdGlvbnMuYmFja2dyb3VuZE9wYWNpdHkgPT09IHVuZGVmaW5lZCA/XHJcblx0XHRcdFx0MC43IDogb3B0aW9ucy5iYWNrZ3JvdW5kT3BhY2l0eTtcclxuXHRcdFx0dmFyIG1vZGFsQ2xvc2VPbklucHV0ID0gb3B0aW9ucy5tb2RhbENsb3NlT25JbnB1dCB8fCBmYWxzZTtcclxuXHRcdFx0dmFyIG1vZGFsQmFja2dyb3VuZENhbGxiYWNrID0gb3B0aW9ucy5tb2RhbEJhY2tncm91bmRDYWxsYmFjayB8fCBmYWxzZTtcclxuXHRcdFx0dmFyIHZDZW50ZXIgPSBvcHRpb25zLnZDZW50ZXIgfHwgdHJ1ZTtcclxuXHRcdFx0dmFyIGhDZW50ZXIgPSBvcHRpb25zLmhDZW50ZXIgfHwgdHJ1ZTtcclxuXHRcdFx0dmFyIGl0ZW1zQXJyID0gb3B0aW9ucy5pdGVtc0FyciB8fCBbXTtcclxuXHRcdFx0dmFyIGZpeGVkVG9DYW1lcmEgPSBvcHRpb25zLmZpeGVkVG9DYW1lcmEgfHwgZmFsc2U7XHJcblxyXG5cdFx0XHR2YXIgbW9kYWw7XHJcblx0XHRcdHZhciBpbm5lck1vZGFsO1xyXG5cdFx0XHR2YXIgbW9kYWxHcm91cCA9IGdhbWUuYWRkLmdyb3VwKCk7XHJcblx0XHRcdGlmIChmaXhlZFRvQ2FtZXJhID09PSB0cnVlKSB7XHJcblx0XHRcdFx0bW9kYWxHcm91cC5maXhlZFRvQ2FtZXJhID0gdHJ1ZTtcclxuXHRcdFx0XHRtb2RhbEdyb3VwLmNhbWVyYU9mZnNldC54ID0gMDtcclxuXHRcdFx0XHRtb2RhbEdyb3VwLmNhbWVyYU9mZnNldC55ID0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGluY2x1ZGVCYWNrZ3JvdW5kID09PSB0cnVlKSB7XHJcblx0XHRcdFx0bW9kYWwgPSBnYW1lLmFkZC5ncmFwaGljcyhnYW1lLndpZHRoLCBnYW1lLmhlaWdodCk7XHJcblx0XHRcdFx0bW9kYWwuYmVnaW5GaWxsKGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZE9wYWNpdHkpO1xyXG5cdFx0XHRcdG1vZGFsLnggPSAwO1xyXG5cdFx0XHRcdG1vZGFsLnkgPSAwO1xyXG5cclxuXHRcdFx0XHRtb2RhbC5kcmF3UmVjdCgwLCAwLCBnYW1lLndpZHRoLCBnYW1lLmhlaWdodCk7XHJcblxyXG5cdFx0XHRcdGlmIChtb2RhbENsb3NlT25JbnB1dCA9PT0gdHJ1ZSkge1xyXG5cclxuXHRcdFx0XHRcdGlubmVyTW9kYWwgPSBnYW1lLmFkZC5zcHJpdGUoMCwgMCk7XHJcblx0XHRcdFx0XHRpbm5lck1vZGFsLmlucHV0RW5hYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRpbm5lck1vZGFsLndpZHRoID0gZ2FtZS53aWR0aDtcclxuXHRcdFx0XHRcdGlubmVyTW9kYWwuaGVpZ2h0ID0gZ2FtZS5oZWlnaHQ7XHJcblx0XHRcdFx0XHRpbm5lck1vZGFsLnR5cGUgPSB0eXBlO1xyXG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5pbnB1dC5wcmlvcml0eUlEID0gMDtcclxuXHRcdFx0XHRcdGlubmVyTW9kYWwuZXZlbnRzLm9uSW5wdXREb3duLmFkZChmdW5jdGlvbiAoZSwgcG9pbnRlcikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmhpZGVNb2RhbChlLnR5cGUpO1xyXG5cdFx0XHRcdFx0fSwgX3RoaXMsIDIpO1xyXG5cclxuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKGlubmVyTW9kYWwpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0bW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2sgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG1vZGFsQmFja2dyb3VuZENhbGxiYWNrKSB7XHJcblx0XHRcdFx0aW5uZXJNb2RhbCA9IGdhbWUuYWRkLnNwcml0ZSgwLCAwKTtcclxuXHRcdFx0XHRpbm5lck1vZGFsLmlucHV0RW5hYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0aW5uZXJNb2RhbC53aWR0aCA9IGdhbWUud2lkdGg7XHJcblx0XHRcdFx0aW5uZXJNb2RhbC5oZWlnaHQgPSBnYW1lLmhlaWdodDtcclxuXHRcdFx0XHRpbm5lck1vZGFsLnR5cGUgPSB0eXBlO1xyXG5cdFx0XHRcdGlubmVyTW9kYWwuaW5wdXQucHJpb3JpdHlJRCA9IDA7XHJcblxyXG5cdFx0XHRcdG1vZGFsR3JvdXAuYWRkKGlubmVyTW9kYWwpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoaW5jbHVkZUJhY2tncm91bmQpIHtcclxuXHRcdFx0XHRtb2RhbEdyb3VwLmFkZChtb2RhbCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBtb2RhbExhYmVsO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zQXJyLmxlbmd0aDsgaSArPSAxKSB7XHJcblx0XHRcdFx0dmFyIGl0ZW0gPSBpdGVtc0FycltpXTtcclxuXHRcdFx0XHR2YXIgaXRlbVR5cGUgPSBpdGVtLnR5cGUgfHwgJ3RleHQnO1xyXG5cdFx0XHRcdHZhciBpdGVtQ29sb3IgPSBpdGVtLmNvbG9yIHx8IDB4MDAwMDAwO1xyXG5cdFx0XHRcdHZhciBpdGVtRm9udGZhbWlseSA9IGl0ZW0uZm9udEZhbWlseSB8fCAnQXJpYWwnO1xyXG5cdFx0XHRcdHZhciBpdGVtRm9udFNpemUgPSBpdGVtLmZvbnRTaXplIHx8IDMyO1xyXG5cdFx0XHRcdHZhciBpdGVtU3Ryb2tlID0gaXRlbS5zdHJva2UgfHwgJzB4MDAwMDAwJztcclxuXHRcdFx0XHR2YXIgaXRlbVN0cm9rZVRoaWNrbmVzcyA9IGl0ZW0uc3Ryb2tlVGhpY2tuZXNzIHx8IDA7XHJcblx0XHRcdFx0dmFyIGl0ZW1BbGlnbiA9IGl0ZW0uYWxpZ24gfHwgJ2NlbnRlcic7XHJcblx0XHRcdFx0dmFyIG9mZnNldFggPSBpdGVtLm9mZnNldFggfHwgMDtcclxuXHRcdFx0XHR2YXIgb2Zmc2V0WSA9IGl0ZW0ub2Zmc2V0WSB8fCAwO1xyXG5cdFx0XHRcdHZhciBjb250ZW50U2NhbGUgPSBpdGVtLmNvbnRlbnRTY2FsZSB8fCAxO1xyXG5cdFx0XHRcdHZhciBjb250ZW50ID0gaXRlbS5jb250ZW50IHx8IFwiXCI7XHJcblx0XHRcdFx0dmFyIGNlbnRlclggPSBnYW1lLndpZHRoIC8gMjtcclxuXHRcdFx0XHR2YXIgY2VudGVyWSA9IGdhbWUuaGVpZ2h0IC8gMjtcclxuXHRcdFx0XHR2YXIgY2FsbGJhY2sgPSBpdGVtLmNhbGxiYWNrIHx8IGZhbHNlO1xyXG5cdFx0XHRcdHZhciB0ZXh0QWxpZ24gPSBpdGVtLnRleHRBbGlnbiB8fCBcImxlZnRcIjtcclxuXHRcdFx0XHR2YXIgYXRsYXNQYXJlbnQgPSBpdGVtLmF0bGFzUGFyZW50IHx8IFwiXCI7XHJcblx0XHRcdFx0dmFyIGJ1dHRvbkhvdmVyID0gaXRlbS5idXR0b25Ib3ZlciB8fCBjb250ZW50O1xyXG5cdFx0XHRcdHZhciBidXR0b25BY3RpdmUgPSBpdGVtLmJ1dHRvbkFjdGl2ZSB8fCBjb250ZW50O1xyXG5cdFx0XHRcdHZhciBncmFwaGljQ29sb3IgPSBpdGVtLmdyYXBoaWNDb2xvciB8fCAweGZmZmZmZjtcclxuXHRcdFx0XHR2YXIgZ3JhcGhpY09wYWNpdHkgPSBpdGVtLmdyYXBoaWNPcGFjaXR5IHx8IDE7XHJcblx0XHRcdFx0dmFyIGdyYXBoaWNXID0gaXRlbS5ncmFwaGljV2lkdGggfHwgMjAwO1xyXG5cdFx0XHRcdHZhciBncmFwaGljSCA9IGl0ZW0uZ3JhcGhpY0hlaWdodCB8fCAyMDA7XHJcblx0XHRcdFx0dmFyIGdyYXBoaWNSYWRpdXMgPSBpdGVtLmdyYXBoaWNSYWRpdXMgfHwgMDtcclxuXHRcdFx0XHR2YXIgbG9ja1Bvc2l0aW9uID0gaXRlbS5sb2NrUG9zaXRpb24gfHwgZmFsc2U7XHJcblxyXG5cdFx0XHRcdHZhciBpdGVtQW5jaG9yID0gaXRlbS5hbmNob3IgfHwge3g6MCx5OjB9O1xyXG5cdFx0XHRcdHZhciBpdGVtQW5nbGUgPSBpdGVtLmFuZ2xlIHx8IDA7XHJcblx0XHRcdFx0dmFyIGl0ZW1YID0gaXRlbS54IHx8IDA7XHJcblx0XHRcdFx0dmFyIGl0ZW1ZID0gaXRlbS55IHx8IDA7XHJcblx0XHRcdFx0dmFyIGltYWdlRnJhbWUgPSBpdGVtLmZyYW1lIHx8IG51bGw7XHJcblx0XHRcdFx0dmFyIHRpbGVTcHJpdGVXaWR0aCA9IGl0ZW0udGlsZVNwcml0ZVdpZHRoIHx8IGdhbWUud2lkdGg7XHJcblx0XHRcdFx0dmFyIHRpbGVTcHJpdGVIZWlnaHQgPSBpdGVtLnRpbGVTcHJpdGVIZWlnaHQgfHwgZ2FtZS5oZWlnaHQ7XHJcblxyXG5cdFx0XHRcdG1vZGFsTGFiZWwgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRpZiAoaXRlbVR5cGUgPT09IFwidGV4dFwiIHx8IGl0ZW1UeXBlID09PSBcImJpdG1hcFRleHRcIikge1xyXG5cclxuXHRcdFx0XHRcdGlmIChpdGVtVHlwZSA9PT0gXCJ0ZXh0XCIpIHtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnRleHQoMCwgMCwgY29udGVudCwge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQ6IGl0ZW1Gb250U2l6ZSArICdweCAnICsgaXRlbUZvbnRmYW1pbHksXHJcblx0XHRcdFx0XHRcdFx0ZmlsbDogXCIjXCIgKyBTdHJpbmcoaXRlbUNvbG9yKS5yZXBsYWNlKFwiMHhcIiwgXCJcIiksXHJcblx0XHRcdFx0XHRcdFx0c3Ryb2tlOiBcIiNcIiArIFN0cmluZyhpdGVtU3Ryb2tlKS5yZXBsYWNlKFwiMHhcIiwgXCJcIiksXHJcblx0XHRcdFx0XHRcdFx0c3Ryb2tlVGhpY2tuZXNzOiBpdGVtU3Ryb2tlVGhpY2tuZXNzLFxyXG5cdFx0XHRcdFx0XHRcdGFsaWduOiBpdGVtQWxpZ25cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAndGV4dCc7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwudXBkYXRlKCk7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKG1vZGFsTGFiZWwud2lkdGggLyAyKSkgKyBvZmZzZXRYO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoKGdhbWUuaGVpZ2h0IC8gMikgLSAobW9kYWxMYWJlbC5oZWlnaHQgLyAyKSkgKyBvZmZzZXRZO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmJpdG1hcFRleHQoMCwgMCwgaXRlbUZvbnRmYW1pbHksIFN0cmluZyhjb250ZW50KSwgaXRlbUZvbnRTaXplKTtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdiaXRtYXBUZXh0JztcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5hbGlnbiA9IHRleHRBbGlnbjtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC51cGRhdGVUZXh0KCk7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKG1vZGFsTGFiZWwud2lkdGggLyAyKSkgKyBvZmZzZXRYO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtIChtb2RhbExhYmVsLmhlaWdodCAvIDIpKSArIG9mZnNldFk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiaW1hZ2VcIikge1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmltYWdlKDAsIDAsIGNvbnRlbnQpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ2ltYWdlJztcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcInRpbGVTcHJpdGVcIikge1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnRpbGVTcHJpdGUoaXRlbVgsIGl0ZW1ZLFxyXG5cdFx0XHRcdFx0XHR0aWxlU3ByaXRlV2lkdGgsIHRpbGVTcHJpdGVIZWlnaHQsIGNvbnRlbnQsIGltYWdlRnJhbWUpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmFuY2hvci5zZXRUbyhpdGVtQW5jaG9yLngsIGl0ZW1BbmNob3IueSk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmFuZ2xlID0gaXRlbUFuZ2xlO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICd0aWxlU3ByaXRlJztcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcInNwcml0ZVwiKSB7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuc3ByaXRlKDAsIDAsIGF0bGFzUGFyZW50LCBjb250ZW50KTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdzcHJpdGUnO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKChtb2RhbExhYmVsLmhlaWdodCkgLyAyKSkgKyBvZmZzZXRZO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiYnV0dG9uXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5idXR0b24oMCwgMCwgYXRsYXNQYXJlbnQsIGNhbGxiYWNrLFxyXG5cdFx0XHRcdFx0XHR0aGlzLCBidXR0b25Ib3ZlciwgY29udGVudCwgYnV0dG9uQWN0aXZlLCBjb250ZW50KTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdidXR0b24nO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKChtb2RhbExhYmVsLmhlaWdodCkgLyAyKSkgKyBvZmZzZXRZO1xyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcImdyYXBoaWNzXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5ncmFwaGljcyhncmFwaGljVywgZ3JhcGhpY0gpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5iZWdpbkZpbGwoZ3JhcGhpY0NvbG9yLCBncmFwaGljT3BhY2l0eSk7XHJcblx0XHRcdFx0XHRpZiAoZ3JhcGhpY1JhZGl1cyA8PSAwKSB7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuZHJhd1JlY3QoMCwgMCwgZ3JhcGhpY1csIGdyYXBoaWNIKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuZHJhd1JvdW5kZWRSZWN0KDAsIDAsIGdyYXBoaWNXLCBncmFwaGljSCwgZ3JhcGhpY1JhZGl1cyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmVuZEZpbGwoKTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFggPSAwO1xyXG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFkgPSAwO1xyXG5cdFx0XHRcdG1vZGFsTGFiZWwubG9ja1Bvc2l0aW9uID0gbG9ja1Bvc2l0aW9uO1xyXG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFggPSBvZmZzZXRYO1xyXG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFkgPSBvZmZzZXRZO1xyXG5cclxuXHJcblx0XHRcdFx0aWYgKGNhbGxiYWNrICE9PSBmYWxzZSAmJiBpdGVtVHlwZSAhPT0gXCJidXR0b25cIikge1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5waXhlbFBlcmZlY3RDbGljayA9IHRydWU7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnByaW9yaXR5SUQgPSAxMDtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuZXZlbnRzLm9uSW5wdXREb3duLmFkZChjYWxsYmFjaywgbW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoaXRlbVR5cGUgIT09IFwiYml0bWFwVGV4dFwiICYmIGl0ZW1UeXBlICE9PSBcImdyYXBoaWNzXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYnJpbmdUb1RvcCgpO1xyXG5cdFx0XHRcdFx0bW9kYWxHcm91cC5hZGQobW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmJyaW5nVG9Ub3AoKTtcclxuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYnJpbmdUb1RvcChtb2RhbExhYmVsKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bW9kYWxHcm91cC5hZGQobW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmJyaW5nVG9Ub3AobW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtb2RhbEdyb3VwLnZpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0gPSBtb2RhbEdyb3VwO1xyXG5cclxuXHRcdH0sXHJcblx0XHR1cGRhdGVNb2RhbFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIHR5cGUsIGluZGV4LCBpZCkge1xyXG5cdFx0XHR2YXIgaXRlbTtcclxuXHRcdFx0aWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgaW5kZXggIT09IG51bGwpIHtcclxuXHRcdFx0XHRpdGVtID0gZ2FtZS5tb2RhbHNbdHlwZV0uZ2V0Q2hpbGRBdChpbmRleCk7XHJcblx0XHRcdH0gZWxzZSBpZiAoaWQgIT09IHVuZGVmaW5lZCAmJiBpZCAhPT0gbnVsbCkge1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwidGV4dFwiKSB7XHJcblx0XHRcdFx0aXRlbS50ZXh0ID0gdmFsdWU7XHJcblx0XHRcdFx0aXRlbS51cGRhdGUoKTtcclxuXHRcdFx0XHRpZiAoaXRlbS5sb2NrUG9zaXRpb24gPT09IHRydWUpIHtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGl0ZW0ueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKGl0ZW0ud2lkdGggLyAyKSkgKyBpdGVtLl9vZmZzZXRYO1xyXG5cdFx0XHRcdFx0aXRlbS55ID0gKChnYW1lLmhlaWdodCAvIDIpIC0gKGl0ZW0uaGVpZ2h0IC8gMikpICsgaXRlbS5fb2Zmc2V0WTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoaXRlbS5jb250ZW50VHlwZSA9PT0gXCJiaXRtYXBUZXh0XCIpIHtcclxuXHRcdFx0XHRpdGVtLnRleHQgPSB2YWx1ZTtcclxuXHRcdFx0XHRpdGVtLnVwZGF0ZVRleHQoKTtcclxuXHRcdFx0XHRpZiAoaXRlbS5sb2NrUG9zaXRpb24gPT09IHRydWUpIHtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGl0ZW0ueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKGl0ZW0ud2lkdGggLyAyKSkgKyBpdGVtLl9vZmZzZXRYO1xyXG5cdFx0XHRcdFx0aXRlbS55ID0gKChnYW1lLmhlaWdodCAvIDIpIC0gKGl0ZW0uaGVpZ2h0IC8gMikpICsgaXRlbS5fb2Zmc2V0WTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoaXRlbS5jb250ZW50VHlwZSA9PT0gXCJpbWFnZVwiKSB7XHJcblx0XHRcdFx0aXRlbS5sb2FkVGV4dHVyZSh2YWx1ZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9LFxyXG5cdFx0Z2V0TW9kYWxJdGVtOiBmdW5jdGlvbiAodHlwZSwgaW5kZXgpIHtcclxuXHRcdFx0cmV0dXJuIGdhbWUubW9kYWxzW3R5cGVdLmdldENoaWxkQXQoaW5kZXgpO1xyXG5cdFx0fSxcclxuXHRcdHNob3dNb2RhbDogZnVuY3Rpb24gKHR5cGUpIHtcclxuXHRcdFx0Z2FtZS53b3JsZC5icmluZ1RvVG9wKGdhbWUubW9kYWxzW3R5cGVdKTtcclxuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0udmlzaWJsZSA9IHRydWU7XHJcblx0XHRcdC8vIHlvdSBjYW4gYWRkIGFuaW1hdGlvbiBoZXJlXHJcblx0XHR9LFxyXG5cdFx0aGlkZU1vZGFsOiBmdW5jdGlvbiAodHlwZSkge1xyXG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdC8vIHlvdSBjYW4gYWRkIGFuaW1hdGlvbiBoZXJlXHJcblx0XHR9LFxyXG5cdFx0ZGVzdHJveU1vZGFsOiBmdW5jdGlvbiAodHlwZSkge1xyXG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS5kZXN0cm95KCk7XHJcblx0XHRcdGRlbGV0ZSBnYW1lLm1vZGFsc1t0eXBlXTtcclxuXHRcdH1cclxuXHR9O1xyXG59O1xyXG4iLCJcclxuY2xhc3MgQ2xpZW50IHtcclxuICAgIFxyXG5cdGNvbnN0cnVjdG9yKHNlcHRpa29uKSB7XHJcbiAgICAgICAgXHJcblx0XHR0aGlzLnNvY2tldCA9IGlvLmNvbm5lY3QoKTtcclxuICAgICAgICB0aGlzLnNlcHRpa29uID0gdGhpcy5zb2NrZXQuc2VwdGlrb24gPSBzZXB0aWtvbjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNvY2tldC5vbignbG9nJywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMT0c6ICcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ3VwZGF0ZScsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBpZihkYXRhLnR5cGUgPT0gXCJwZXJzb25uZWxcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi51cGRhdGVQZXJzb25uZWwoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS50eXBlID09IFwicmVzb3VyY2VzXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFjdGlvbiA9PSBcImluaXRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24uaW5pdFJlc291cmNlcygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGRhdGEuYWN0aW9uICsgXCIgbm90IGEgbGVnYWwgYWN0aW9uIGZvciBSZXNvdXJjZSB1cGRhdGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT0gXCJkaWNlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24uZ2FtZS5kaWNlLnNldFZhbHVlKGRhdGEuZGV0YWlscy52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VQREFURTonKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS50eXBlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ3JlcXVlc3QnLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JFUVVFU1Q6ICcpO1xyXG4gICAgICAgICAgICBzd2l0Y2goZGF0YS5kZXRhaWxzLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJhc2tTdGFydFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24uc2hvd01vZGFsKCdhc2tTdGFydCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNvY2tldC5vbignYWN0aW9uJywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YodGhpcy5zZXB0aWtvbltkYXRhLmNhbGxiYWNrXSkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbltkYXRhLmNhbGxiYWNrXShkYXRhLmRldGFpbHMpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SOiBubyBtZXRob2QgZm91bmQgY2FsbGVkIHNlcHRpa29uLlwiICsgZGF0YS5jYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHR9XHJcblxyXG5cdGFza05ld1BsYXllcigpIHtcclxuXHRcdHRoaXMuc29ja2V0LmVtaXQoJ25ld1BsYXllcicsIHt1dWlkOmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXB0VVVJRCcpfSk7XHJcblx0fVxyXG4gICAgXHJcbiAgICBzZW5kSW5wdXQocGF5bG9hZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZW5kaW5nIGlucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnaW5wdXQnLCBwYXlsb2FkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50O1xyXG4iLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxyXG5cclxuY2xhc3MgQ2xvbmUgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lLCB1dWlkKSB7XHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnY2xvbmUnLCBmcmFtZSk7XHJcbiAgICAgICAgXHJcbiAgICAvL3NldHVwIHBoeXNpY3MgcHJvcGVydGllc1xyXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjY1KTtcclxuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGVCb2R5KHRoaXMpO1xyXG4gICAgLy90aGlzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnV1aWQgPSB1dWlkO1xyXG4gICAgLy9zZXQgc2l6ZVxyXG4gICAgdGhpcy53aWR0aCA9IDI3O1xyXG4gICAgdGhpcy5zY2FsZS55ID0gTWF0aC5hYnModGhpcy5zY2FsZS54KTtcclxuICAgIFxyXG4gICAgLy9zZXQgcm90YXRpb24gKHRoaXMgc2hvdWxkIGJlIGJhc2VkIG9uIHRoZSBiYXNlIHRoaXMgY2xvbmUgb2NjdXBpZXMpXHJcbiAgICB0aGlzLmFuZ2xlID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAuYW5nbGUgKiAtMTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSB0aGlzLmdhbWUuc2VwdGlrb24ucGl4ZWxzVG9UaWxlKHRoaXMueCwgdGhpcy55KTtcclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSB0cnVlO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBoaWdobGlnaHRPbigpIHtcclxuICAgIHRoaXMudGludCA9IDB4RkY1NTAwO1xyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLmFscGhhID0gMTtcclxuICB9XHJcbiAgXHJcbiAgaGlnaGxpZ2h0T2ZmKCkge1xyXG4gICAgdGhpcy50aW50ID0gMHhmZmZmZmY7XHJcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0uYWxwaGEgPSAwO1xyXG4gIH1cclxuICBcclxuICBnZXRMZWdhbE1vdmVzKCkge1xyXG4gICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gdGhpcy5nYW1lLnNlcHRpa29uLnBpeGVsc1RvVGlsZSh0aGlzLngsIHRoaXMueSk7XHJcbiAgICB2YXIgY3VycmVudExlZ2FsTW92ZXMgPSB0aGlzLmdhbWUuc2VwdGlrb24uZ2V0TGVnYWxNb3Zlcyh0aGlzLmdhbWUuZ2xvYmFsLmxhc3REaWNlUm9sbCwgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzKTtcclxuICAgIHZhciBsZWdhbFRpbGVzQXJyYXkgPSBbXTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBmb3IgKHZhciB0aWxlIGluIGN1cnJlbnRMZWdhbE1vdmVzKSB7XHJcbiAgICAgICAgbGVnYWxUaWxlc0FycmF5LnB1c2godGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVtjdXJyZW50TGVnYWxNb3Zlc1t0aWxlXS54XVtjdXJyZW50TGVnYWxNb3Zlc1t0aWxlXS55XSk7XHJcbiAgICAgICAgLy9sZWdhbFRpbGVzQXJyYXlbbGVnYWxUaWxlc0FycmF5Lmxlbmd0aC0xXS5hbHBoYSA9IDAuNTtcclxuICAgICAgICAvL2xlZ2FsVGlsZXNBcnJheVtsZWdhbFRpbGVzQXJyYXkubGVuZ3RoLTFdLmxlZ2FsRm9yID0gdGhpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGxlZ2FsVGlsZXNBcnJheTtcclxuICB9XHJcbiAgXHJcbiAgbW92ZShjb29yZGluYXRlcykge1xyXG4gIFxyXG4gICAgLy8gQ2xlYXIgXCJsZWdhbEZvclwiXHJcbiAgICBmb3IgKHZhciB0aWxlIGluIHRoaXMubGVnYWxUaWxlc0FycmF5KSB7XHJcbiAgICAgICAgdGhpcy5sZWdhbFRpbGVzQXJyYXlbdGlsZV0uYWxwaGEgPSAwO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmxlZ2FsVGlsZXNBcnJheVt0aWxlXS5sZWdhbEZvcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gTW92ZSB0byBuZXcgaG9tZVxyXG4gICAgLy8gTmVlZCB0byBhZGQgYSBjaGVjayBmb3IgYXJtZWQgb3Bwb25lbnRzIChiaW9kcm9uZXMvZXNwaW9uYWdlZCBjbG9uZXMvY2xvbmVzIGluIGVuZW15IGJhc2UsIGV0Yy4pXHJcbiAgICB2YXIgcG9pbnRzID0gdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVUb1BpeGVscyhjb29yZGluYXRlcy54LCBjb29yZGluYXRlcy55KTtcclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSBmYWxzZTtcclxuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMueSAtIHBvaW50cy55ICsgdGhpcy54IC0gcG9pbnRzLngpLnRvRml4ZWQoMSk7XHJcbiAgICBcclxuICAgIC8vIFVwZGF0ZSB0aGUgcGVyc29ubmVsIGNvb3JkaW5hdGUgcHJvcGVydHlcclxuICAgIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XHJcbiAgICBcclxuICAgIC8vIFdhaXQgZm9yIGFuaW1hdGlvbiB0byBjb21wbGV0ZSwgdGhlbiBwcm9jZXNzIHRpbGUgdHJpZ2dlclxyXG4gICAgdmFyIHR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzKS50bygge3g6cG9pbnRzLngsIHk6cG9pbnRzLnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XHJcbiAgICB0d2Vlbi5vbkNvbXBsZXRlLmFkZCh0aGlzLmdhbWUuc2VwdGlrb24udHJpZ2dlclRpbGUsIHRoaXMuZ2FtZS5zZXB0aWtvbik7XHJcbiAgICBcclxuICAgIC8vIENsZWFyIHRoaXMuY3VycmVudExlZ2FsTW92ZXNcclxuICAgIGRlbGV0ZSB0aGlzLmxlZ2FsVGlsZXNBcnJheTtcclxuICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRMZWdhbE1vdmVzOyAgICBcclxuICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xvbmU7XHJcbiIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXHJcbmNsYXNzIENyb3NzaGFpcnMgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnY3Jvc3NoYWlycycsIGZyYW1lKTtcclxuXHJcbiAgICAvL3NldCBzaXplXHJcbiAgICB0aGlzLndpZHRoID0gMzU7IFxyXG4gICAgdGhpcy5zY2FsZS55ID0gTWF0aC5hYnModGhpcy5zY2FsZS54KTtcclxuXHJcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKXtcclxuICAgIHRoaXMueCA9IHRoaXMuZ2FtZS5pbnB1dC5tb3VzZVBvaW50ZXIueDtcclxuICAgIHRoaXMueSA9IHRoaXMuZ2FtZS5pbnB1dC5tb3VzZVBvaW50ZXIueTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcm9zc2hhaXJzO1xyXG4iLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxyXG5jbGFzcyBEaWNlIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSkgeyAgXHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnZGljZScsIGZyYW1lKTtcclxuXHJcbiAgICAvL3NldHVwIHBoeXNpY3MgcHJvcGVydGllc1xyXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xyXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZUJvZHkodGhpcyk7XHJcblxyXG4gICAgLy9zZXQgY2xpY2sgZXZlbnRcclxuICAgIHRoaXMuaW5wdXRFbmFibGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmV2ZW50cy5vbklucHV0RG93bi5hZGQodGhpcy5jbGlja2VkLCB0aGlzKTtcclxuXHJcbiAgICAvL3NldCBzaXplXHJcbiAgICB0aGlzLndpZHRoID0gNTA7XHJcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xyXG4gICAgdGhpcy5maWx0ZXJzID0gW3RoaXMuZ2FtZS5hZGQuZmlsdGVyKCdHcmF5JyldO1xyXG4gICAgdGhpcy5hbHBoYSA9IDAuNTtcclxuICAgIFxyXG4gICAgdGhpcy52YWx1ZSA9IDEwO1xyXG4gICAgdGhpcy5mcmFtZSA9IHRoaXMudmFsdWUtMTtcclxuICB9XHJcblxyXG4gIGNsaWNrZWQgKCkge1xyXG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAnZGljZUNsaWNrZWQnfSk7XHJcbiAgfVxyXG5cclxuICBlbmFibGUoKSB7XHJcbiAgICAgIHRoaXMuYWxwaGEgPSAxO1xyXG4gICAgICB0aGlzLmZpbHRlcnMgPSBudWxsO1xyXG4gICAgICB0aGlzLmlucHV0RW5hYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlKCkge1xyXG4gICAgICB0aGlzLmFscGhhID0gMC41O1xyXG4gICAgICB0aGlzLmZpbHRlcnMgPSBbdGhpcy5nYW1lLmFkZC5maWx0ZXIoJ0dyYXknKV07XHJcbiAgICAgIHRoaXMuaW5wdXRFbmFibGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZSh2YWx1ZSkge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5mcmFtZSA9IHZhbHVlIC0gMTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpY2U7XHJcbiIsImNsYXNzIE1hc3RlciB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXN0ZXI7IiwiY2xhc3MgT3JkbmFuY2Uge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoKSB7IFxyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkbmFuY2U7IiwiY2xhc3MgUGVyc29ubmVsIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2Nsb25lJywgZnJhbWUpOyAgXHJcbiAgICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlcnNvbm5lbDsiLCJjbGFzcyBSZXNvdXJjZXMge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoKSB7IFxyXG4gICAgdGhpcy5yZXNvdXJjZUVudW0gPSBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICBPWFlHRU46IDAsXHJcbiAgICAgICAgUk9DS0VUOiAxLFxyXG4gICAgICAgIE1FVEFMOiAyLFxyXG4gICAgICAgIEVORVJHWTogMyxcclxuICAgICAgICBCSU9NQVNTOiA0LFxyXG4gICAgICAgIEJJT0RST05FOiA1LFxyXG4gICAgICAgIFVSQU5JVU06IDZcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yZXNvdXJjZXMgPSB7fTtcclxuICAgIGZvcih2YXIgdHlwZSBpbiB0aGlzLnJlc291cmNlRW51bSkge1xyXG4gICAgICAgIHRoaXMucmVzb3VyY2VzW3RoaXMucmVzb3VyY2VFbnVtW3R5cGVdXSA9IDU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGNoZWNrKHR5cGUsIGNvdW50KSB7XHJcbiAgICBpZih0aGlzLnJlc291cmNlc1t0aGlzLnJlc291cmNlRW51bVt0eXBlXV0gPiBjb3VudClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgXHJcbiAgZ2V0Q291bnQodHlwZSkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzW3R5cGVdO1xyXG4gIH1cclxuICAgIFxyXG4gIGFkZCh0eXBlLCBjb3VudCkge1xyXG4gIH1cclxuICBcclxuICByZW1vdmUodHlwZSwgY291bnQpIHtcclxuICAgIHRoaXMucmVzb3VyY2VzW3R5cGVdIC09IGNvdW50O1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VzOyIsImltcG9ydCBDbG9uZSBmcm9tICcuLi9wcmVmYWJzL2Nsb25lJztcclxuXHJcbmNsYXNzIFNlcHRpa29uIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHsgXHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgXHJcbiAgICB0aGlzLnBsYXllciA9IHtcclxuICAgICAgICBpZDogMCxcclxuICAgICAgICBwZXJzb25uZWxBcnJheTogW11cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5vcHBvbmVudCA9IHtcclxuICAgICAgICBwZXJzb25uZWxBcnJheTogW11cclxuICAgIH07XHJcbiAgICBcclxuICAgIHRoaXMuc2hvd25UaWxlcyA9IFtdO1xyXG4gICAgdGhpcy50aWxlQXJyYXkgPSBbXTtcclxuXHJcbiAgICB0aGlzLmxlZ2FsTW92ZXMgPSBudWxsO1xyXG4gICAgdGhpcy5zZWxlY3RlZFRvTW92ZSA9IG51bGw7XHJcbiAgICB0aGlzLmxlZ2FsR3VubmVycyA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5jaG9vc2luZ1RhcmdldHMgPSBmYWxzZTtcclxuICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzID0gW107XHJcbiAgfVxyXG5cclxuICBzaG93TW9kYWwodHlwZSkge1xyXG4gICAgdGhpcy5nYW1lLm1vZGFsLnNob3dNb2RhbCh0eXBlKTtcclxuICB9XHJcbiAgXHJcbiAgZGljZVJvbGxlZChkZXRhaWxzKSB7XHJcbiAgICB0aGlzLmdhbWUuZGljZS5zZXRWYWx1ZShkZXRhaWxzLnZhbHVlKTtcclxuICAgIHRoaXMubGVnYWxNb3ZlcyA9IGRldGFpbHMuZ2FtZVBpZWNlcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGV0YWlscy5nYW1lUGllY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yICh2YXIgbSBpbiBkZXRhaWxzLmdhbWVQaWVjZXNbaV0ubW92ZXMpIHtcclxuICAgICAgICAgICAgdmFyIHggPSBkZXRhaWxzLmdhbWVQaWVjZXNbaV0ubW92ZXNbbV0ueDtcclxuICAgICAgICAgICAgdmFyIHkgPSBkZXRhaWxzLmdhbWVQaWVjZXNbaV0ubW92ZXNbbV0ueTtcclxuICAgICAgICAgICAgdGhpcy5zaG93VGlsZXMoW2RldGFpbHMuZ2FtZVBpZWNlc1tpXS5vcmlnaW5dLCAweEY2MzYzNik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb2ZmZXJEaWNlKCkge1xyXG4gICAgICB0aGlzLmdhbWUuZGljZS5lbmFibGUoKTtcclxuICB9XHJcblxyXG4gIHRha2VEaWNlKCkge1xyXG4gICAgICB0aGlzLmdhbWUuZGljZS5kaXNhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBvZmZlckd1bm5lcnMoZGF0YSkge1xyXG4gICAgICB0aGlzLmNob29zaW5nVGFyZ2V0cyA9IHRydWU7XHJcbiAgICAgIHRoaXMubGVnYWxHdW5uZXJzID0gZGF0YS5ndW5uZXJzO1xyXG4gICAgICB0aGlzLmdhbWUuZ28uZW5hYmxlKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYW5pbWF0ZSBzb21lIGluZGljYXRpb24gb2YgdmlhYmxlIGd1bm5lcnMgb24gdGhlIHN1cmZhY2UuIE1heWJlIGEgcG9pbnRlciBib3VuY2luZyBvdmVyIHRoZW0/XCIpO1xyXG4gIH1cclxuICBcclxuICBhZGRDbG9uZShkZXRhaWxzKSB7XHJcbiAgICB2YXIgcG9pbnQgPSB0aGlzLnRpbGVUb1BpeGVscyhkZXRhaWxzLngsIGRldGFpbHMueSk7XHJcbiAgICB2YXIgY2xvbmUgPSBuZXcgQ2xvbmUodGhpcy5nYW1lLCBwb2ludC54LCBwb2ludC55LCBudWxsLCBkZXRhaWxzLnV1aWQpO1xyXG4gICAgaWYoZGV0YWlscy5wbGF5ZXJJRCA9PSB0aGlzLnBsYXllci5pZCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5LnB1c2goY2xvbmUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5LnB1c2goY2xvbmUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKGNsb25lKTtcclxuICB9XHJcblxyXG4gIG1vdmVQZXJzb25uZWwoZGF0YSkge1xyXG4gICAgdmFyIHR3ZWVuID0gbnVsbDtcclxuICAgIHZhciBkaXN0YW5jZSA9IG51bGw7XHJcbiAgICB2YXIgcG9pbnQgPSB0aGlzLnRpbGVUb1BpeGVscyhkYXRhLngsIGRhdGEueSk7XHJcbiAgICBmb3IgKHZhciBpIGluIHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnV1aWQgPT0gZGF0YS51dWlkKSB7XHJcbiAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueSAtIHBvaW50LnkgKyB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtpXS54IC0gcG9pbnQueCkudG9GaXhlZCgxKTtcclxuICAgICAgICAgICAgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldKS50bygge3g6cG9pbnQueCwgeTpwb2ludC55fSwgKGRpc3RhbmNlKjExKSwgUGhhc2VyLkVhc2luZy5DdWJpYy5PdXQsIHRydWUpO1xyXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIHRpbGUuIE5vdCBxdWl0ZSBzdXJlIGhvdyB0byBkbyB0aGlzIHlldC5cclxuICAgICAgICAgICAgLy90d2Vlbi5vbkNvbXBsZXRlLmFkZCh0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICdtb3ZlQ29tcGxldGUnLCB4OnBhcnNlSW50KG9iai50aWxlWCksIHk6cGFyc2VJbnQob2JqLnRpbGVZKX0pOywgdGhpcy5nYW1lLnNlcHRpa29uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBqIGluIHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXkpIHtcclxuICAgICAgICBpZiAodGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheVtqXS51dWlkID09IGRhdGEudXVpZCkge1xyXG4gICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXlbal0ueSAtIHBvaW50LnkgKyB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5W2pdLnggLSBwb2ludC54KS50b0ZpeGVkKDEpO1xyXG4gICAgICAgICAgICB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheVtqXSkudG8oIHt4OnBvaW50LngsIHk6cG9pbnQueX0sIChkaXN0YW5jZSoxMSksIFBoYXNlci5FYXNpbmcuQ3ViaWMuT3V0LCB0cnVlKTtcclxuICAgICAgICAgICAgLy8gVHJpZ2dlciB0aWxlLiBOb3QgcXVpdGUgc3VyZSBob3cgdG8gZG8gdGhpcyB5ZXQuXHJcbiAgICAgICAgICAgIC8vdHdlZW4ub25Db21wbGV0ZS5hZGQodGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAnbW92ZUNvbXBsZXRlJywgeDpwYXJzZUludChvYmoudGlsZVgpLCB5OnBhcnNlSW50KG9iai50aWxlWSl9KTssIHRoaXMuZ2FtZS5zZXB0aWtvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGVyc29ubmVsKGRhdGEpIHtcclxuICAgICAgdmFyIGN1cnJlbnRQZXJzb25uZWwgPSBudWxsO1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmRldGFpbHMpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgZGF0YS5kZXRhaWxzID0gW2RhdGEuZGV0YWlsc107XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5Lmxlbmd0aCA9PT0gMCAmJiBkYXRhLmRldGFpbHMubGVuZ3RoID09PSA1KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBkYXRhLmRldGFpbHMpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRDbG9uZShkYXRhLmRldGFpbHNbaV0pO1xyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXkpIHtcclxuICAgICAgICAgICAgY3VycmVudFBlcnNvbm5lbCA9IHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXlbcF07XHJcbiAgICAgICAgICAgIGZvciAodmFyIGQgaW4gZGF0YS5kZXRhaWxzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBlcnNvbm5lbC51dWlkID09IGRhdGEuZGV0YWlsc1tkXS51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGVyc29ubmVsKGRhdGEuZGV0YWlsc1tkXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUFsbFBlcnNvbm5lbCgpe1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdhbWUuYm9hcmRHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmKHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNoaWxkcmVuW2ldLmNvbnN0cnVjdG9yID09IENsb25lKXtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBpLS07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICB1cGRhdGVQbGF5ZXIoZGV0YWlscykge1xyXG4gICAgZm9yICh2YXIgaSBpbiBkZXRhaWxzKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJbaV0gPSBkZXRhaWxzW2ldO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5pdFJlc291cmNlcygpIHtcclxuICAgIHZhciBjdXJyZW50UmVjID0gbnVsbDtcclxuICAgIHZhciBncmFwaGljcyA9IHRoaXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XHJcbiAgICAvL2dyYXBoaWNzLmxpbmVTdHlsZSg0LCAweGZmZDkwMCwgMSk7XHJcbiAgICBncmFwaGljcy5iZWdpbkZpbGwoMHhmZmZmZmYsIDEpO1xyXG4gICAgZ3JhcGhpY3MuZHJhd1JvdW5kZWRSZWN0KDEwMCwgMTAwLCB0aGlzLnRpbGVXaWR0aC00LCB0aGlzLnRpbGVIZWlnaHQtNCwgMTQpO1xyXG5cclxuICAgIGZvciAodmFyIGMgaW4gdGhpcy50aWxlQXJyYXkpIHtcclxuICAgICAgICBmb3IgKHZhciByIGluIHRoaXMudGlsZUFycmF5W2NdKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudGlsZUFycmF5W2NdW3JdLnRpbGVPd25lciA9PSB0aGlzLnBsYXllci5pZCAmJiB0aGlzLnRpbGVBcnJheVtjXVtyXS50aWxlVHlwZSA9PSBcIndhcmVob3VzZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAociA8IDUgfHwgciA+IDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYyA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHRoaXMudGlsZUFycmF5W2NdW3JdLngrKHRoaXMudGlsZUFycmF5W2NdW3JdLndpZHRoLzIpLCB0aGlzLnRpbGVBcnJheVtjXVtyXS55Kyh0aGlzLnRpbGVBcnJheVtjXVtyXS53aWR0aC8yKSwgZ3JhcGhpY3MuZ2VuZXJhdGVUZXh0dXJlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMuYW5nbGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNDApLTIwO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMuYW5jaG9yLnNldFRvKDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnRpbGVBcnJheVtjXVtyXS50aWxlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW5lcmd5XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweGZjZTMxNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwib3h5Z2VuXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweDAwYjFmMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicm9ja2V0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweGU4MmEyYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWV0YWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4ZmZmZmZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJiaW9tYXNzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweDhhYzM0MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYmlvZHJvbmVcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4OWYzYTliO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ1cmFuaXVtXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweGYzNjUyMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKGN1cnJlbnRSZWMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ3JhcGhpY3MuZGVzdHJveSgpO1xyXG4gIH1cclxuICBcclxuICBjcmVhdGVUaWxlQXJyYXkoY29sdW1ucywgcm93cywgcG9pbnQpIHtcclxuICAgIHRoaXMudGlsZURldGFpbCA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRKU09OKCd0aWxlRGV0YWlsJyk7XHJcblxyXG4gICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcyA9IHt4OjAsIHk6MH07XHJcblxyXG4gICAgdmFyIHgsIHk7XHJcbiAgICBcclxuICAgIHRoaXMubWFyZ2luQm90dG9tID0gdGhpcy5tYXJnaW5Ub3AgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC5oZWlnaHQvMTcuNDc1O1xyXG4gICAgdGhpcy5tYXJnaW5MZWZ0ID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGgvMjQ7XHJcbiAgICB0aGlzLm1hcmdpblJpZ2h0ID0gIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoLzI2LjMxNTg7XHJcbiAgICB0aGlzLnRpbGVXaWR0aCA9IHRoaXMudGlsZUhlaWdodCA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoLzM5O1xyXG4gICAgdGhpcy5wYWRkaW5nID0gKHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoIC0gKHRoaXMubWFyZ2luTGVmdCArIHRoaXMubWFyZ2luUmlnaHQpIC0gKHRoaXMudGlsZVdpZHRoICogMzEpKS8zMDtcclxuICAgICAgICBcclxuICAgIC8vdGhpcy50aWxlV2lkdGggPSAyNTsvLyh0aGlzLmJhY2tncm91bmRXaWR0aCAtICgodGhpcy5tYXJnaW5MZWZ0ICsgdGhpcy5tYXJnaW5SaWdodCkgKyAodGhpcy5wYWRkaW5nICogKGNvbHVtbnMgLSAxKSkpKSAvIGNvbHVtbnM7XHJcbiAgICAvL3RoaXMudGlsZUhlaWdodCA9IDI1Oy8vKHRoaXMuYmFja2dyb3VuZEhlaWdodCAtICgodGhpcy5tYXJnaW5Ub3AgKyB0aGlzLm1hcmdpbkJvdHRvbSkgKyAodGhpcy5wYWRkaW5nICogKHJvd3MgLSAxKSkpKSAvIHJvd3M7XHJcbiAgICAgICAgXHJcbiAgICB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnggPSBwb2ludC54ICsgdGhpcy5tYXJnaW5MZWZ0O1xyXG4gICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy55ID0gcG9pbnQueSArIHRoaXMubWFyZ2luVG9wO1xyXG4gICAgXHJcbiAgICB2YXIgZ3JhcGhpY3MgPSB0aGlzLmdhbWUuYWRkLmdyYXBoaWNzKDAsIDApO1xyXG4gICAgLy9ncmFwaGljcy5saW5lU3R5bGUoNCwgMHhmZmQ5MDAsIDEpO1xyXG4gICAgZ3JhcGhpY3MuYmVnaW5GaWxsKDB4ZmZmZmZmLCAxKTtcclxuICAgIGdyYXBoaWNzLmRyYXdSZWN0KDEwMCwgMTAwLCB0aGlzLnRpbGVXaWR0aCwgdGhpcy50aWxlSGVpZ2h0KTtcclxuICAgIFxyXG4gICAgZm9yICh2YXIgY29sdW1uID0gMDsgY29sdW1uIDwgY29sdW1uczsgY29sdW1uKyspIHtcclxuICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCByb3dzOyByb3crKykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgeCA9IHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMueCArICh0aGlzLnRpbGVXaWR0aCAqIGNvbHVtbikgKyAodGhpcy5wYWRkaW5nICogY29sdW1uIC0gMSk7XHJcbiAgICAgICAgICAgIHkgPSB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnkgKyAodGhpcy50aWxlSGVpZ2h0ICogcm93KSArICh0aGlzLnBhZGRpbmcgKiByb3cgLSAxKTtcclxuICAgICAgICAgICAgLy9ncmFwaGljcy5nZW5lcmF0ZVRleHR1cmUoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50VGlsZSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHgsIHksIGdyYXBoaWNzLmdlbmVyYXRlVGV4dHVyZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKGN1cnJlbnRUaWxlKTtcclxuICAgICAgICAgICAgY3VycmVudFRpbGUuYWxwaGEgPSAwOyAvLyAwLjI1O1xyXG4gICAgICAgICAgICBjdXJyZW50VGlsZS5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjdXJyZW50VGlsZS5ldmVudHMub25JbnB1dERvd24uYWRkKHRoaXMudGlsZUNsaWNrZWQsIHRoaXMpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVBcnJheVtjb2x1bW5dID09ICd1bmRlZmluZWQnKSBcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NvbHVtbl0gPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbY29sdW1uXVtyb3ddID0gY3VycmVudFRpbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBncmFwaGljcy5kZXN0cm95KCk7XHJcbiAgICBcclxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnRpbGVEZXRhaWwpIHtcclxuICAgICAgICBpZiAoIXRoaXMudGlsZURldGFpbC5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgb2JqID0gdGhpcy50aWxlRGV0YWlsW2tleV07XHJcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcclxuICAgICAgICAgICAgLy8gc2tpcCBsb29wIGlmIHRoZSBwcm9wZXJ0eSBpcyBmcm9tIHByb3RvdHlwZVxyXG4gICAgICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KHByb3ApKSBjb250aW51ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbkNvdW50ID0gb2JqW3Byb3BdLmxvY2F0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciggdmFyIGkgPSAwOyBpIDwgbG9jYXRpb25Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciBjb29yZHMgPSBvYmpbcHJvcF0ubG9jYXRpb25zW2ldLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgICAgIHggPSBjb29yZHNbMF07XHJcbiAgICAgICAgICAgICAgICB5ID0gY29vcmRzWzFdO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlRGFtYWdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZU9jY3VwaWVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlWCA9IHg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlWSA9IHk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlVHlwZSA9IG9ialtwcm9wXS50eXBlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy50aWxlQXJyYXlbeF1beV0gIT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZU5hbWUgPSBvYmpbcHJvcF0ubmFtZTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4ICsgXCI6XCIgKyB5ICsgXCIgbm90IGZvdW5kIVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih4IDwgOSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlT3duZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeD4yMClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlT3duZXIgPSAyO1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcF0ucHJvcGVydGllcyAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVQcm9wZXJ0aWVzID0gb2JqW3Byb3BdLnByb3BlcnRpZXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwaXhlbHNUb1RpbGUoeCwgeSkge1xyXG4gICAgdmFyIHhUaWxlID0gMDtcclxuICAgIHZhciB5VGlsZSA9IDA7XHJcbiAgICBcclxuICAgIGZvciAodmFyIGNvbCBpbiB0aGlzLnRpbGVBcnJheSkge1xyXG4gICAgICAgIGZvciAodmFyIHJvdyBpbiB0aGlzLnRpbGVBcnJheVtjb2xdKSB7XHJcbiAgICAgICAgICAgIHZhciBvYmogPSB0aGlzLnRpbGVBcnJheVtjb2xdW3Jvd107XHJcbiAgICAgICAgICAgIGlmKHggPiBvYmoueCAmJiB4IDwgb2JqLnggKyBvYmoud2lkdGgpXHJcbiAgICAgICAgICAgICAgICB4VGlsZSA9IHBhcnNlSW50KGNvbCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoeSA+IG9iai55ICYmIHkgPCBvYmoueSArIG9iai5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICB5VGlsZSA9IHBhcnNlSW50KHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHt4OnhUaWxlLCB5OnlUaWxlfTtcclxuICB9XHJcbiAgXHJcbiAgdGlsZVRvUGl4ZWxzKHgsIHkpIHtcclxuICAgIHZhciB0aWxlT2JqID0gdGhpcy50aWxlQXJyYXlbeF1beV07XHJcbiAgICByZXR1cm4ge3g6dGlsZU9iai54ICsgdGlsZU9iai53aWR0aC8yLCB5OnRpbGVPYmoueSArIHRpbGVPYmouaGVpZ2h0LzJ9O1xyXG4gIH1cclxuICBcclxuICB0aWxlQ2xpY2tlZChvYmopIHtcclxuICAgICAgdGhpcy5oaWRlVGlsZXMoKTtcclxuICAgICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAndGlsZUNsaWNrZWQnLCB4OnBhcnNlSW50KG9iai50aWxlWCksIHk6cGFyc2VJbnQob2JqLnRpbGVZKX0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgfVxyXG4gIFxyXG4gIHNob3dUaWxlcyhjb29yZHNBcnJheSwgY29sb3IpIHtcclxuICAgIGZvciAodmFyIGkgaW4gY29vcmRzQXJyYXkpIHtcclxuICAgICAgICB0aGlzLnRpbGVBcnJheVtjb29yZHNBcnJheVtpXS54XVtjb29yZHNBcnJheVtpXS55XS5hbHBoYSA9IDAuNTtcclxuICAgICAgICBpZihjb2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjb29yZHNBcnJheVtpXS54XVtjb29yZHNBcnJheVtpXS55XS50aW50ID0gY29sb3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbY29vcmRzQXJyYXlbaV0ueF1bY29vcmRzQXJyYXlbaV0ueV0udGludCA9IDB4ZmZkOTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3duVGlsZXMucHVzaCh7eDpjb29yZHNBcnJheVtpXS54LHk6Y29vcmRzQXJyYXlbaV0ueX0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBoaWRlVGlsZXModGlsZUFycmF5KSB7XHJcbiAgICBpZighdGlsZUFycmF5KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnNob3duVGlsZXMpIHtcclxuICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbdGhpcy5zaG93blRpbGVzW2ldLnhdW3RoaXMuc2hvd25UaWxlc1tpXS55XS5hbHBoYSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd25UaWxlcyA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvb3RUaWxlKGNsb25lQ29vcmRpbmF0ZXMpIHtcclxuICBcclxuICAgIHZhciBjdXJyZW50WCA9IGNsb25lQ29vcmRpbmF0ZXMueDtcclxuICAgIHZhciBjdXJyZW50WSA9IGNsb25lQ29vcmRpbmF0ZXMueTtcclxuICAgIHZhciBjdXJyZW50VGlsZSA9IHRoaXMudGlsZUFycmF5W2N1cnJlbnRYXVtjdXJyZW50WV07XHJcbiAgICBkbyB7XHJcbiAgICAgICAgY3VycmVudFgrKztcclxuICAgICAgICBjdXJyZW50VGlsZSA9IHRoaXMudGlsZUFycmF5W2N1cnJlbnRYXVtjdXJyZW50WV07XHJcbiAgICB9IHdoaWxlIChjdXJyZW50VGlsZS50aWxlVHlwZSA9PSAnc3BhY2UnIHx8IGN1cnJlbnRUaWxlLnRpbGVUeXBlID09ICdzdXJmYWNlJyB8fCBjdXJyZW50VGlsZS50aWxlRGFtYWdlZCA9PT0gdHJ1ZSk7XHJcbiAgICBcclxuICAgIGN1cnJlbnRUaWxlLnRpbnQgPSAwWDMzMzMzMztcclxuICAgIGN1cnJlbnRUaWxlLmFscGhhID0gMC44O1xyXG4gICAgY3VycmVudFRpbGUudGlsZURhbWFnZWQgPSB0cnVlO1xyXG4gICAgXHJcbiAgICB0aGlzLnRlc3QgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZShjdXJyZW50VGlsZS54LCBjdXJyZW50VGlsZS55ICsoY3VycmVudFRpbGUuaGVpZ2h0LzIpLCAnYm9vbScpO1xyXG4gICAgdGhpcy50ZXN0LmFuZ2xlID0gMjcwO1xyXG4gICAgdGhpcy50ZXN0LmFuY2hvci5zZXQoMC41LDAuNyk7XHJcbiAgICB0aGlzLnRlc3QuYW5pbWF0aW9ucy5hZGQoJ2Jvb20nKTtcclxuICAgIHRoaXMudGVzdC5hbmltYXRpb25zLnBsYXkoJ2Jvb20nLCAyMCwgZmFsc2UsIHRydWUpO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIHN0YXJ0R2FtZSgpIHtcclxuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xyXG4gIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXB0aWtvbjtcclxuIiwiaW1wb3J0IFJlc291cmNlcyBmcm9tICcuLi9wcmVmYWJzL3Jlc291cmNlcyc7XHJcbmltcG9ydCBQZXJzb25uZWwgZnJvbSAnLi4vcHJlZmFicy9wZXJzb25uZWwnO1xyXG5pbXBvcnQgT3JkbmFuY2UgZnJvbSAnLi4vcHJlZmFicy9vcmRuYW5jZSc7XHJcbmltcG9ydCBDbG9uZSBmcm9tICcuLi9wcmVmYWJzL2Nsb25lJzsgLy8gVGhpcyB3aWxsIGJlIGluY29ycG9yYXRlZCBpbiBwZXJzb25uZWxcclxuXHJcbmNsYXNzIFRlYW0ge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoZ2FtZSkgeyBcclxuICAgIHRoaXMucmVjID0gbmV3IFJlc291cmNlcygpO1xyXG4gICAgdGhpcy5yZWNFbnVtID0gdGhpcy5yZWMucmVzb3VyY2VFbnVtO1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgIFxyXG4gICAgdGhpcy5wZXJzb25uZWwgPSBbXTtcclxuICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzID0gW107XHJcbiAgfVxyXG4gIFxyXG4gIHJlZnJlc2goKSB7XHJcbiAgICBmb3IgKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLnBlcnNvbm5lbFtpXS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy9SZXNvdXJjZSBJbnRlcmZhY2VcclxuICBnZXRSZWNDb3VudCh0eXBlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZWMuZ2V0Q291bnQodHlwZSk7XHJcbiAgfVxyXG4gIFxyXG4gIGNoZWNrUmVjKHR5cGUsIGNvdW50KSB7XHJcbiAgICBpZiAodGhpcy5nZXRSZWNDb3VudCh0eXBlKSA+PSBjb3VudCkgXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIFxyXG4gIGV4Y2hhbmdlUmVjKGNvc3RUeXBlLCBjb3N0Q291bnQsIHlpZWxkVHlwZSwgeWllbGRDb3VudCkge1xyXG4gIH1cclxuICBcclxuICBhZGRSZWModHlwZSwgY291bnQpIHtcclxuICAgIHJldHVybiB0aGlzLnJlYy5hZGQodHlwZSwgY291bnQpO1xyXG4gIH1cclxuICBcclxuICByZW1vdmVSZWModHlwZSwgY291bnQpIHtcclxuICAgIHJldHVybiB0aGlzLnJlYy5yZW1vdmUodHlwZSwgY291bnQpO1xyXG4gIH1cclxuICBcclxuICBhZGRDbG9uZSh4LCB5LCBwcm9wcykge1xyXG4gICAgdmFyIHBvaW50ID0gdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVUb1BpeGVscyh4LHkpO1xyXG4gICAgdmFyIGNsb25lID0gbmV3IENsb25lKHRoaXMuZ2FtZSxwb2ludC54LHBvaW50LnkpO1xyXG4gICAgY2xvbmUuY3VycmVudFRpbGVDb29yZGluYXRlcy54ID0geDtcclxuICAgIGNsb25lLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueSA9IHk7XHJcbiAgICBcclxuICAgIGZvciAodmFyIGkgaW4gcHJvcHMpIHtcclxuICAgICAgICBjbG9uZVtpXSA9IHByb3BzW2ldO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wZXJzb25uZWwucHVzaChjbG9uZSk7XHJcbiAgICB0aGlzLmdhbWUuc3RhZ2UuYWRkQ2hpbGQoY2xvbmUpO1xyXG4gIH1cclxuICBcclxuICBnZXRDbG9uZShjb29yZCkge1xyXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbCkge1xyXG4gICAgICAgIGlmKHRoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueCA9PSBjb29yZC54ICYmIHRoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueSA9PSBjb29yZC55KXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGVyc29ubmVsW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAga2lsbENsb25lKGNvb3JkKSB7XHJcbiAgICB2YXIgY2xvbmUgPSB0aGlzLmdldENsb25lKGNvb3JkKTtcclxuICAgIHRoaXMuZ2FtZS5zdGFnZS5yZW1vdmVDaGlsZChjbG9uZSk7XHJcbiAgICBcclxuICAgIHZhciBpbmRleCA9IHRoaXMucGVyc29ubmVsLmluZGV4T2YoY2xvbmUpO1xyXG4gICAgdGhpcy5wZXJzb25uZWwuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgXHJcbiAgICBjbG9uZS5yZW1vdmUoKTtcclxuICB9XHJcbiAgICBcclxuICBvZmZlckxlZ2FsQ2xvbmVzKCkge1xyXG4gICAgLy8gT2ZmZXIgY2xvbmVzIHRoYXQgaGF2ZSBsZWdhbCBtb3Zlc1xyXG4gICAgZm9yKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XHJcbiAgICAgICAgdmFyIG1vdmVzID0gdGhpcy5wZXJzb25uZWxbaV0uZ2V0TGVnYWxNb3ZlcygpO1xyXG5cclxuICAgICAgICBpZihtb3ZlcyAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5wZXJzb25uZWxbaV0uaGlnaGxpZ2h0T24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIG9mZmVyR3VubmVycygpIHtcclxuICAgIC8vIE9mZmVyIGd1bm5lciBcclxuICAgIHZhciBndW5uZXJGb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XHJcbiAgICAgICAgaWYodGhpcy5wZXJzb25uZWxbaV0uaXNHdW5uZXIpIHtcclxuICAgICAgICAgICAgZ3VubmVyRm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAvL3RoaXMucGVyc29ubmVsW2ldLmhpZ2hsaWdodE9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGd1bm5lckZvdW5kO1xyXG4gIH1cclxuICBcclxuICBzZWxlY3RHdW5uZXIoY29vcmRzKSB7XHJcbiAgICB2YXIgY2xvbmUgPSB0aGlzLmdldENsb25lKGNvb3Jkcyk7XHJcbiAgICBpZighY2xvbmUpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYoIWNsb25lLmlzR3VubmVyKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBcclxuICAgIHZhciBleGlzdGluZ0d1bm5lciA9IHRoaXMuc2VsZWN0ZWRHdW5uZXJzLmluZGV4T2YoY2xvbmUpO1xyXG4gICAgaWYoZXhpc3RpbmdHdW5uZXIgPj0gMCl7XHJcbiAgICAgICAgY2xvbmUuaGlnaGxpZ2h0T2ZmKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMuc3BsaWNlKGV4aXN0aW5nR3VubmVyLCAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2xvbmUuaGlnaGxpZ2h0T24oKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycy5wdXNoKGNsb25lKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgY2xlYXJHdW5uZXJzKCkge1xyXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnNlbGVjdGVkR3VubmVycykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzW2ldLmhpZ2hsaWdodE9mZigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMgPSBbXTtcclxuICB9XHJcbiAgXHJcbiAgc2VsZWN0Q2xvbmVGb3JNb3ZlKGNvb3JkcykgeyAgICBcclxuICBcclxuICAgIHZhciBjbG9uZSA9IHRoaXMuZ2V0Q2xvbmUoY29vcmRzKTtcclxuICAgIGlmKCFjbG9uZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZm9yKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XHJcbiAgICAgICAgdGhpcy5wZXJzb25uZWxbaV0uaGlnaGxpZ2h0T2ZmKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxlZ2FsVGlsZXMgPSBjbG9uZS5nZXRMZWdhbE1vdmVzKCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ2xvbmUgPSBjbG9uZTtcclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi5zaG93VGlsZXModGhpcy5sZWdhbFRpbGVzKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICBcclxuICBtb3ZlU2VsZWN0ZWRDbG9uZShjb29yZHMpIHtcclxuICAgIGZvcih2YXIgaSBpbiB0aGlzLmxlZ2FsVGlsZXMpIHtcclxuICAgICAgICBpZih0aGlzLmxlZ2FsVGlsZXNbaV0udGlsZVggPT0gY29vcmRzLnggJiYgdGhpcy5sZWdhbFRpbGVzW2ldLnRpbGVZID09IGNvb3Jkcy55KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDbG9uZS5tb3ZlKGNvb3Jkcyk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkQ2xvbmU7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmxlZ2FsVGlsZXM7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW07IiwiY2xhc3MgT3JkbmFuY2Uge1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5PcmRuYW5jZSA9IE9yZG5hbmNlO1xyXG4iLCJjbGFzcyBQZXJzb25uZWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIHgsIHksIHV1aWQpIHtcclxuICAgICAgICB0aGlzLnR5cGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgICAgIENMT05FOiAwLFxyXG4gICAgICAgICAgICBCSU9EUk9ORTogMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xyXG4gICAgICAgIHRoaXMudW5kZXJFc3Bpb25hZ2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzR3VubmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlRW51bVt0eXBlLnRvVXBwZXJDYXNlKCldO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdiaW9kcm9uZSc6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnY2xvbmUnOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVFbnVtW3R5cGVdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBtb3ZlKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLlBlcnNvbm5lbCA9IFBlcnNvbm5lbDtcclxuIiwidmFyIFBlcnNvbm5lbCA9IHJlcXVpcmUoJy4vcGVyc29ubmVsJykuUGVyc29ubmVsO1xyXG52YXIgUmVzb3VyY2UgPSByZXF1aXJlKCcuL3Jlc291cmNlJykuUmVzb3VyY2U7XHJcbnZhciBPcmRuYW5jZSA9IHJlcXVpcmUoJy4vb3JkbmFuY2UnKS5PcmRuYW5jZTtcclxuXHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNvY2tldElELCBpZCwgdXVpZCkgeyBcclxuICAgICAgICB0aGlzLnNvY2tldElEID0gc29ja2V0SUQ7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkOyAvL3BsYXllciAxIG9yIHBsYXllciAyOyB0aGlzIHdpbGwgZGV0ZXJtaW5lIHRoZSBzaWRlIG9mIHRoZSBib2FyZCBhdCBjbGllbnQgc3RhcnQuXHJcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZDtcclxuICAgICAgICB0aGlzLnBlcnNvbm5lbEFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5vcmRuYW5jZUFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5yZWFkeVRvU3RhcnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXJ0aW5nQ2xvbmVDb3VudCA9IDU7XHJcbiAgICAgICAgdGhpcy5hcm1zQXJyYXkgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TGVnYWxQaWVjZXMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0UmVzb3VyY2VzKCk7XHJcbiAgICB9XHJcbiAgICAgICAgXHJcbiAgICBhZGRQZXJzb25uZWwodHlwZSwgeCwgeSwgdXVpZCkge1xyXG4gICAgICAgIGlmKHR5cGUgPT0gXCJjbG9uZVwiICYmIHRoaXMuZ2V0UGVyc29ubmVsKHR5cGUpLmxlbmd0aCA8IHRoaXMuc3RhcnRpbmdDbG9uZUNvdW50KSB7XHJcbiAgICAgICAgICAgIHZhciBwZXJzb25uZWwgPSBuZXcgUGVyc29ubmVsKCdjbG9uZScsIHgsIHksIHV1aWQpO1xyXG4gICAgICAgICAgICB0aGlzLnBlcnNvbm5lbEFycmF5LnB1c2gocGVyc29ubmVsKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBlcnNvbm5lbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVBlcnNvbm5lbChwZXJzb25uZWwsIHB1cmdlQWxsKSB7XHJcbiAgICAgICAgaWYgKHB1cmdlQWxsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyc29ubmVsQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRQZXJzb25uZWwodHlwZSkge1xyXG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbEFycmF5KSB7XHJcbiAgICAgICAgICAgIGlmKHR5cGUgPT09IG51bGwgfHwgdGhpcy5wZXJzb25uZWxBcnJheVtpXS50eXBlID09PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLnBlcnNvbm5lbEFycmF5W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVybkFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBlcnNvbm5lbEJ5VVVJRCh1dWlkKSB7XHJcbiAgICAgICAgdmFyIHBlcnNvbm5lbCA9IHRoaXMuZ2V0UGVyc29ubmVsKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBwZXJzb25uZWwpIHtcclxuICAgICAgICAgICAgaWYgKHBlcnNvbm5lbFtpXS51dWlkID09IHV1aWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwZXJzb25uZWxbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBlcnNvbm5lbEJ5UG9pbnQocG9pbnQpIHtcclxuICAgICAgICB2YXIgcGVyc29ubmVscyA9IHRoaXMuZ2V0UGVyc29ubmVsKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwZXJzb25uZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChwZXJzb25uZWxzW2ldLnggPT0gcG9pbnQueCAmJiBwZXJzb25uZWxzW2ldLnkgPT0gcG9pbnQueSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlcnNvbm5lbHNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrUGVyc29ubmVsTW92ZShwZXJzb25uZWwsIHBvaW50KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocGVyc29ubmVsLnggPT0gdGhpcy5jdXJyZW50TGVnYWxQaWVjZXNbaV0ub3JpZ2luLnggJiYgcGVyc29ubmVsLnkgPT0gdGhpcy5jdXJyZW50TGVnYWxQaWVjZXNbaV0ub3JpZ2luLnkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcG9pbnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlc1tpXS5tb3Zlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TGVnYWxQaWVjZXNbaV0ubW92ZXNbal0ueCA9PSBwb2ludC54ICYmIHRoaXMuY3VycmVudExlZ2FsUGllY2VzW2ldLm1vdmVzW2pdLnkgPT0gcG9pbnQueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVyZ2VMZWdhbFBpZWNlcyhwZXJzb25uZWwsIHB1cmdlQWxsTWF0Y2hpbmdUeXBlcykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgcGVyc29ubmVsID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlcyA9IFtdO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpID0gdGhpcy5jdXJyZW50TGVnYWxQaWVjZXMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChcclxuICAgICAgICAgICAgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZWdhbFBpZWNlc1tpXS50eXBlID09PSBwZXJzb25uZWwudHlwZSAmJiBwdXJnZUFsbE1hdGNoaW5nVHlwZXMgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExlZ2FsUGllY2VzLnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEd1bm5lcnMoKSB7XHJcbiAgICAgICAgdmFyIHJldHVybkFycmF5ID0gW107XHJcbiAgICAgICAgdmFyIGNsb25lcyA9IHRoaXMuZ2V0UGVyc29ubmVsKCdjbG9uZScpO1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gY2xvbmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChjbG9uZXNbaV0uaXNHdW5uZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2goY2xvbmVzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3JkbmFuY2UodHlwZSkge1xyXG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLm9yZG5hbmNlQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYodHlwZSA9PT0gbnVsbCB8fCB0aGlzLm9yZG5hbmNlQXJyYXlbaV0udHlwZSA9PT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy5vcmRuYW5jZUFycmF5W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVybkFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRSZXNvdXJjZXMoKSB7XHJcbiAgICAgICAgdmFyIHJlY0FycmF5ID0gW1xyXG4gICAgICAgICAgICAnZW5lcmd5MScsIFxyXG4gICAgICAgICAgICAnZW5lcmd5MicsXHJcbiAgICAgICAgICAgICdveHlnZW4nLFxyXG4gICAgICAgICAgICAnbWV0YWwnLFxyXG4gICAgICAgICAgICAnYmlvZHJvbmUnLFxyXG4gICAgICAgICAgICAncm9ja2V0JyxcclxuICAgICAgICAgICAgJ3VyYW5pdW0nLFxyXG4gICAgICAgICAgICAnYmlvbWFzcydcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB2YXIgcmVjID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHJlY0FycmF5KSB7XHJcbiAgICAgICAgICAgIHJlYyA9IG5ldyBSZXNvdXJjZShyZWNBcnJheVtpXSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VBcnJheVtyZWNBcnJheVtpXV0gPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgY291bnQgPSAwOyBjb3VudCA8IDEwOyBjb3VudCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPCA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5W3JlY0FycmF5W2ldXS5wdXNoKHJlYyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2VBcnJheVtyZWNBcnJheVtpXV0ucHVzaChudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRSZXNvdXJjZUNvdW50KHR5cGUpIHtcclxuICAgICAgICB2YXIgZm91bmRSZXNvdXJjZXMgPSAwO1xyXG4gICAgICAgIHZhciBjdXJyZW50UmVzb3VyY2VTbG90ID0gOTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJlbmVyZ3lcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSZXNvdXJjZUNvdW50KCdlbmVyZ3kxJykgKyB0aGlzLmdldFJlc291cmNlQ291bnQoJ2VuZXJneTInKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlIChjdXJyZW50UmVzb3VyY2VTbG90ID49IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXVtjdXJyZW50UmVzb3VyY2VTbG90XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdLmRhbWFnZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZFJlc291cmNlcztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvdW5kUmVzb3VyY2VzKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm91bmRSZXNvdXJjZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2tSZXNvdXJjZSBkZWZhdWx0cyB0byBhc3N1bWUgeW91IGFyZSBjaGVja2luZyB0byBzcGVuZCBhIHJlc291cmNlLiBTZXQgXCJhY2NlcHRcIiB0byB0cnVlIGlmIHlvdSBhcmUgY2hlY2tpbmcgdG8gcmVjZWl2ZSBhIHJlc291cmNlXHJcbiAgICBjaGVja1Jlc291cmNlKHR5cGUsIGNvdW50LCBhY2NlcHQpIHtcclxuICAgICAgICB2YXIgY3VycmVudFJlc291cmNlU2xvdCA9IDk7XHJcbiAgICAgICAgdmFyIGZvdW5kUmVzb3VyY2VzID0gMDtcclxuICAgICAgICB2YXIgcmVzb3VyY2VTbG90cyA9IDA7XHJcblxyXG4gICAgICAgIGlmKHR5cGUgPT0gXCJudWtlXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzcGVjaWFsIGNhc2U6IHRoaXMgcHJvZHVjZXMgb3JkbmFuY2UuIENoZWNrIGJhY2sgbGF0ZXIuLi5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHR5cGUgPT0gXCJlbmVyZ3lcIikge1xyXG4gICAgICAgICAgICB2YXIgZTEgPSB0aGlzLmNoZWNrUmVzb3VyY2UoXCJlbmVyZ3kxXCIsIGNvdW50LCBhY2NlcHQpO1xyXG4gICAgICAgICAgICB2YXIgZTIgPSB0aGlzLmNoZWNrUmVzb3VyY2UoXCJlbmVyZ3kyXCIsIGNvdW50LCBhY2NlcHQpO1xyXG5cclxuICAgICAgICAgICAgaWYoZTEgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlMTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlMiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGUyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aGlsZSAoY3VycmVudFJlc291cmNlU2xvdCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY2NlcHQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZVNsb3RzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc291cmNlU2xvdHMgPT0gY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdLmRhbWFnZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmKGFjY2VwdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm91bmRSZXNvdXJjZXMrKztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoYWNjZXB0ICE9PSBmYWxzZSAmJiBmb3VuZFJlc291cmNlcyA9PT0gY291bnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1cnJlbnRSZXNvdXJjZVNsb3QtLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNwZW5kUmVzb3VyY2UodHlwZSwgY291bnQpIHtcclxuICAgICAgICB2YXIgY3VycmVudFJlc291cmNlU2xvdCA9IDk7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsQ291bnQgPSBjb3VudDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJlbmVyZ3lcIikge1xyXG4gICAgICAgICAgICB2YXIgc3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB3aGlsZSAoY291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5zcGVuZFJlc291cmNlKFwiZW5lcmd5MVwiLCAxKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLnNwZW5kUmVzb3VyY2UoXCJlbmVyZ3kyXCIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxDb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlIChjdXJyZW50UmVzb3VyY2VTbG90ID49IDAgJiYgY291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRSZXNvdXJjZVNsb3QtLTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXVtjdXJyZW50UmVzb3VyY2VTbG90XS5kYW1hZ2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUuZXJyb3IoXCJUcmllZCB0byBzcGVuZCByZXNvdXJjZXMgeW91IGRvbid0IGhhdmUhXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvcmlnaW5hbENvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIGFjY2VwdFJlc291cmNlKHR5cGUsIGNvdW50KSB7XHJcbiAgICAgICAgdmFyIHJlc291cmNlID0gbnVsbDtcclxuICAgICAgICB2YXIgY3VycmVudFJlc291cmNlU2xvdCA9IDk7XHJcbiAgICAgICAgdmFyIHNlYXJjaGluZyA9IHRydWU7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsQ291bnQgPSBjb3VudDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJlbmVyZ3lcIikge1xyXG4gICAgICAgICAgICB2YXIgc3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB3aGlsZSAoY291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5hY2NlcHRSZXNvdXJjZShcImVuZXJneTFcIiwgMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3VjY2VzcyAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5hY2NlcHRSZXNvdXJjZShcImVuZXJneTJcIiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbENvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoMSkge1xyXG4gICAgICAgICAgICBpZiAoc2VhcmNoaW5nID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBwZWVrIGF0IG5leHQgcmVzb3VyY2VcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwibm8gcm9vbSBmb3IgdGhpcyByZXNvdXJjZSFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZXNvdXJjZVNsb3QgPT09IDAgfHwgdGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3QgLSAxXSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFJlc291cmNlU2xvdCArIDEgPiB0aGlzLnJlc291cmNlQXJyYXlbdHlwZV0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsQ291bnQgLSBjb3VudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc291cmNlID0gbmV3IFJlc291cmNlKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdID0gcmVzb3VyY2U7XHJcbiAgICAgICAgICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgaWYoY291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxDb3VudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRSZXNvdXJjZVNsb3QrKztcclxuICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjdXJyZW50UmVzb3VyY2VTbG90IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk91dCBvZiBib3VuZHMuIE5vIGVtcHR5IHJlc291cnVjZSBzbG90cyBmb3VuZC5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLlBsYXllciA9IFBsYXllcjtcclxuIiwiY2xhc3MgUmVzb3VyY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5SZXNvdXJjZSA9IFJlc291cmNlO1xyXG4iLCJ2YXIgUGxheWVyID0gcmVxdWlyZSgnLi9wbGF5ZXInKS5QbGF5ZXI7XHJcbnZhciB1dWlkID0gcmVxdWlyZSgndXVpZC92NCcpO1xyXG5cclxuY2xhc3MgU2VwdGlrb24ge1xyXG4gICAgXHJcblx0Y29uc3RydWN0b3IoaW8pIHtcclxuICAgICAgICB0aGlzLmlvID0gaW87XHJcbiAgICAgICAgdGhpcy5sYXN0UGxheWVySUQgPSAwO1xyXG4gICAgICAgIHRoaXMucGxheWVyc0FycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAwO1xyXG4gICAgICAgIHRoaXMudHVyblN0YXRlID0gMDtcclxuICAgICAgICB0aGlzLnV1aWQgPSByZXF1aXJlKCd1dWlkL3Y0JykoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERpY2VWYWx1ZSA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgICAgIFNFVFVQOiAwLFxyXG4gICAgICAgICAgICBHQU1FOiAxLCBcclxuICAgICAgICAgICAgUEFVU0U6IDIsXHJcbiAgICAgICAgICAgIEdBTUVPVkVSOiAzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50dXJuU3RhdGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgICAgIFJPTEw6IDAsICAgIC8vIExpdGVyYWxseSB0aGUgYWN0IG9mIHJvbGxpbmcgdGhlIGRpZVxyXG4gICAgICAgICAgICBNT1ZFOiAxLCAgICAvLyBTZWxlY3RpbmcgdGhlIGNsb25lIGFuZCAob3B0aW9uYWxseSkgdGhlIGJpb2Ryb25lKHMpIGFuZCB0aGVpciB0YXJnZXQgc3BhY2VzXHJcbiAgICAgICAgICAgIEFDVElPTjogMiwgIC8vIFRyaWdnZXIgdGlsZSAgXHJcbiAgICAgICAgICAgIFRBUkdFVFM6IDMsIC8vIEFzc2lnbiB0YXJnZXQocykgKGllLiAtIGd1bm5lciwgdGlsZSwgZXNwaW9uYWdlZCBjbG9uZSkgXHJcbiAgICAgICAgICAgIEVORDogNCAgICAgIC8vIGFzc2VzcyB2aWN0b3J5IGNvbmRpdGlvbnNcclxuICAgICAgICB9KTsgIFxyXG5cclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkVudW0gPSBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICAgICAgTk9SVEg6MSxcclxuICAgICAgICAgICAgRUFTVDoyLFxyXG4gICAgICAgICAgICBTT1VUSDo0LFxyXG4gICAgICAgICAgICBXRVNUOjhcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlQ29sdW1ucyA9IDMxO1xyXG4gICAgICAgIHRoaXMudGlsZVJvd3MgPSAyMTtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlQXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVRpbGVBcnJheSgpOyBcclxuXHJcbiAgICAgICAgdGhpcy5xdWV1ZWRCYXR0bGVUaWxlVHlwZSA9IG51bGw7ICAgICBcclxuXHR9XHJcblxyXG4gICAgY2xpY2tlZChkYXRhKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUHJvY2VzcyB0aGUgY2xpY2sgZnJvbSB0aGUgY2xpZW50LiBcclxuICAgICAgICAvLyBCYXNpY2FsbHksIGNoZWNrIGdhbWUgYW5kIHR1cm4gc3RhdGUuXHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmdhbWVTdGF0ZSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIHRoaXMuZ2FtZVN0YXRlRW51bS5TRVRVUDpcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgaXMgcGxhY2luZyBuZXcgY2xvbmVzIGluIHRoZSBmaWVsZC5cclxuICAgICAgICAgICAgICAgIHZhciBwbGF5ZXIgPSB0aGlzLmdldFBsYXllckJ5U29ja2V0SUQoZGF0YS5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3VjY2VzcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHBsYXllci5nZXRQZXJzb25uZWwoJ2Nsb25lJykubGVuZ3RoIDwgcGxheWVyLnN0YXJ0aW5nQ2xvbmVDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLnBsYWNlQ2xvbmUocGxheWVyLCBkYXRhLngsIGRhdGEueSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBvbiBwZXJzb25uZWwgY291bnQuIElmIHBlcnNvbm5lbCBpcyBhdCB0aGUgc3RhcnQgY291bnQsIHNlbmQgbW9kYWwgdG8gc3RhcnQgZ2FtZS5cclxuICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXIuZ2V0UGVyc29ubmVsKCdjbG9uZScpLmxlbmd0aCA9PSBwbGF5ZXIuc3RhcnRpbmdDbG9uZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgncmVxdWVzdCcsIHtjYWxsYmFjazpcIm1vZGFsXCIsIGRldGFpbHM6IHt0eXBlOlwiYXNrU3RhcnRcIn19LCBwbGF5ZXIuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5nYW1lU3RhdGVFbnVtLkdBTUU6XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnR1cm5TdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLk1PVkU6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgd2lsbCBjbGljayB0byBkZXNpZ25hdGUgdGhlIGRlc2lyZWQgcGVyc29ubmVsIHRvIG1vdmUsIHNvIHF1ZXVlIHVwIHRoZSBzZWxlY3Rpb24ocykgYW5kIHdhaXQgZm9yIGNvbmZpcm1hdGlvbiBtZXNzYWdlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgY2FuIG1vdmUgb25lIGNsb25lIGFuZCBhbnkvYWxsIGJpb2Ryb25lKHMpIHBlciB0dXJuLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RlOiBUaGUgYXJyYXkgb2YgbGVnYWwgcGVyc29ubmVsIChpbiB0aGlzLmFjdGl2ZVBsYXllcikgd2FzIHNlbnQgYnkgcm9sbERpY2UoKS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVEhJUyBJUyBVTlRFU1RFRCBXSVRIIEJJT0RST05FUy5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVtaXQgYSBoaWRlVGlsZXMoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkUGVyc29ubmVsID0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UGVyc29ubmVsQnlQb2ludCh7eDpkYXRhLngsIHk6ZGF0YS55fSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRQZXJzb25uZWwgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbG9uZSB3YXMgY2xpY2tlZCwgc286XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNMZWdhbFBlcnNvbm5lbCA9IHRoaXMuYWN0aXZlUGxheWVyLmNoZWNrUGVyc29ubmVsTW92ZShzZWxlY3RlZFBlcnNvbm5lbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNMZWdhbFBlcnNvbm5lbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAtIHNldCBzZWxlY3RlZCBpbiBwbGF5ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllci5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZSA9IHNlbGVjdGVkUGVyc29ubmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAtIFNob3cgQ2xvbmVzIGluIGNsaWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgZW1pdCBzb21ldGhpbmcgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAtIFNob3cgdGhpcyBjbG9uZSdzIG1vdmVzIGluIGNsaWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgZW1pdCBzb21ldGhpbmcgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAtIHNob3cgdGhpcyBjbG9uZSBpbiBkaWZmZXJlbnQgY29sb3IgaW4gY2xpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICBlbWl0IHNvbWV0aGluZyBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZVBsYXllci5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGxlZ2FsIHRpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0xlZ2FsTW92ZSA9IHRoaXMuYWN0aXZlUGxheWVyLmNoZWNrUGVyc29ubmVsTW92ZSh0aGlzLmFjdGl2ZVBsYXllci5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZSx7eDpkYXRhLngsIHk6ZGF0YS55fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNMZWdhbE1vdmUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW1pdCBzb21ldGhpbmcgdG8gc2hvdyBjbG9uZXMgdG8gY2xpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGlzIGxlZ2FsLCBjbGVhciBzZWxlY3RlZFBlci4uLiBhbmQgdHJpZ2dlciBtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUubW92ZSh7eDpkYXRhLngsIHk6ZGF0YS55fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW1pdCBtb3ZlIHRvIGNsaWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAnbW92ZVBlcnNvbm5lbCcsIGRldGFpbHM6IHt1dWlkOmRhdGEudXVpZCwgeDpkYXRhLngsIHk6ZGF0YS55fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xlYXIgbW92ZWQgcGVyc29ubmVsIGZyb20gdGhlIHBsYXllciBhcnJheS4gSWYgbW92ZWQgcGVyc29ubmVsIHdhcyBhIGNsb25lLCByZW1vdmUgQUxMIGNsb25lcyBmcm9tIGFycmF5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLnB1cmdlTGVnYWxQaWVjZXModGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUsIHRydWUpOyAvLyB0cnVlIGlzIHBhc3NlZCBmb3IgY2xvbmVzLiBudWxsIGZvciBiaW9kcm9uZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllci5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBsZWdhbCBwZXJzb25uZWwgYXJlIGVtcHR5LCBhZHZhbmNlIHR1cm5zdGF0ZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmN1cnJlbnRMZWdhbFBpZWNlcy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50dXJuU3RhdGUrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVtaXQgc29tZSBpbmRpY2F0aW9uIHRvIGNsaWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMudHVyblN0YXRlRW51bS5BQ1RJT046XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgd2lsbCBjbGljayB0byBkZXNpZ25hdGUgdGhlIGRlc2lyZWQgd2hlcmUgc2VsZWN0ZWQgcGVyc29ubmVsIGFyZSB0byBtb3ZlLCBzbyBxdWV1ZSB1cCB0aGUgc2VsZWN0aW9ucyBhbmQgd2FpdCBmb3IgY29uZmlybWF0aW9uIG1lc3NhZ2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBsYXllciB3aWxsIGNvbmZpcm0gbW92ZW1lbnQgc2VsZWN0aW9ucyB3aXRoIEdPIVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNb3ZlbWVudCBxdWV1ZWQhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uVEFSR0VUUzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBsYXllciB3aWxsIGRlc2lnbmF0ZSBndW5uZXIocykgZm9yIGZpcmluZyBhbmQvb3IgYWRkaXRpb25hbCB0YXJnZXRzLCBkZXBlbmRpbmcgb24gdGhlIGJhdHRsZSB0aWxlIHR5cGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBsYXllciB3aWxsIGNvbmZpcm0gdGFyZ2V0cyB3aXRoIEdPIVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUYXJnZXQgcXVldWVkIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3RpdmVQbGF5ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLkVORDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFueSBwb3N0LXR1cm4gcHJvY2Vzc2luZyBjYW4gaGFwcGVuIGhlcmUuIE90aGVyd2lzZSwgdGhlIHR1cm4gbWF5IGFscmVhZHkgYmUgb3Zlci4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR1cm5TdGF0ZSA9IHRoaXMudHVyblN0YXRlRW51bS5ST0xMO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ28oZGF0YSkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy50dXJuU3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uTU9WRTpcclxuICAgICAgICAgICAgICAgIC8vIFBsYXllciBoYXMgY29uZmlybWVkIGNsb25lIGFuZCBiaW9kcm9uZSBzZWxlY3Rpb24uXHJcbiAgICAgICAgICAgICAgICAvLyBWZXJpZnkgdGhhdCBhIGNsb25lIHdhcyBzZWxlY3RlZC4gXHJcbiAgICAgICAgICAgICAgICAvLyBBZHZhbmNlIHR1cm5TdGF0ZVxyXG4gICAgICAgICAgICAgICAgLy8gU2VuZCBQbGF5ZXIgbW92ZSBvcHRpb25zIGZvciBzZWxlY3RlZCBwZXJzb25uZWwuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIucXVldWVkUGVyc29ubmVsVG9Nb3ZlLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5TdGF0ZSsrO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwZXJzb25uZWwgc2VsZWN0aW9uIGNvbmZpcm1lZFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uQUNUSU9OOlxyXG4gICAgICAgICAgICAgICAgLy8gUGxheWVyIGhhcyBjb25maXJtZWQgd2hlcmUgcGVyc29ubmVsIHdpbGwgbW92ZS5cclxuICAgICAgICAgICAgICAgIC8vIFNlbmQgbW92ZSBvcmRlciB0byBjbGllbnQuXHJcbiAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIHRpbGUgYWN0aW9uIG9yIHNlbmQgdGFyZ2V0IG9wdGlvbnMgKGd1bm5lcnMsIHRpbGVzLCBldGMpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uVEFSR0VUUzpcclxuICAgICAgICAgICAgICAgIC8vIFBsYXllciBoYXMgY29uZmlybWVkIGFsbCB0YXJnZXRzXHJcbiAgICAgICAgICAgICAgICAvLyBGaXJlIG9yZG5hbmNlIG9yIGxhc2VycyBvciB3aGF0ZXZlclxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGNsaWVudCB3aXRoIHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLkVORDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH1cclxuXHJcblx0YWRkTmV3UGxheWVyKHNvY2tldElELCB1dWlkKSB7XHJcbiAgICAgICAgdGhpcy5sYXN0UGxheWVySUQrKztcclxuICAgICAgICB2YXIgcGxheWVyID0gbmV3IFBsYXllcihzb2NrZXRJRCwgdGhpcy5sYXN0UGxheWVySUQsIHV1aWQpO1xyXG4gICAgICAgIHRoaXMucGxheWVyc0FycmF5LnB1c2gocGxheWVyKTtcclxuICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3VwZGF0ZVBsYXllcicsIGRldGFpbHM6IHtpZDogdGhpcy5sYXN0UGxheWVySUR9fSwgc29ja2V0SUQpO1xyXG4gICAgICAgIHJldHVybiBwbGF5ZXI7XHJcblx0fVxyXG5cclxuICAgIGFkZFBsYXllcihwbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLnBsYXllcnNBcnJheS5wdXNoKHBsYXllcik7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICd1cGRhdGVQbGF5ZXInLCBkZXRhaWxzOiB7aWQ6IHBsYXllci5pZH19LCBwbGF5ZXIuc29ja2V0SUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBsYXllclN0YXRlKHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIHBsYXllciA9IG51bGw7XHJcbiAgICAgICAgc3dpdGNoIChzdGF0ZS52YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlICdyZXNldCc6IFxyXG4gICAgICAgICAgICAgICAgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXJCeVNvY2tldElEKHN0YXRlLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgIHBsYXllci5yZW1vdmVQZXJzb25uZWwobnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcInJlbW92ZUFsbFBlcnNvbm5lbFwiLCBkZXRhaWxzOiB7fX0sIHBsYXllci5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOiBcclxuICAgICAgICAgICAgICAgIHBsYXllciA9IHRoaXMuZ2V0UGxheWVyQnlTb2NrZXRJRChzdGF0ZS5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIucmVhZHlUb1N0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHZhciBvcHBvbmVudCA9IHRoaXMuZ2V0UGxheWVyT3Bwb25lbnQocGxheWVyKTtcclxuICAgICAgICAgICAgICAgIGlmKCFvcHBvbmVudCB8fCAhb3Bwb25lbnQucmVhZHlUb1N0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3BwQ2xvbmVzID0gb3Bwb25lbnQuZ2V0UGVyc29ubmVsKCdjbG9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50UGxheWVyQ2xvbmVzID0gcGxheWVyLmdldFBlcnNvbm5lbCgnY2xvbmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90aWZ5IGN1cnJlbnQgcGxheWVyIG9mIG9wcG9uZW50IHBvc2l0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwbGF5ZXJQYXlsb2FkID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBvcHBDbG9uZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyUGF5bG9hZC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6b3BwQ2xvbmVzW2ldLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Om9wcENsb25lc1tpXS55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXVpZDpvcHBDbG9uZXNbaV0udXVpZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHt0eXBlOlwicGVyc29ubmVsXCIsIGRldGFpbHM6cGxheWVyUGF5bG9hZH0sIHBsYXllci5zb2NrZXRJRCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGlmeSBvcHBvbmVudCBvZiBjdXJyZW50IHBsYXllcidzIHBvc2l0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHBQYXlsb2FkID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYyBpbiBjdXJyZW50UGxheWVyQ2xvbmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wcFBheWxvYWQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OmN1cnJlbnRQbGF5ZXJDbG9uZXNbY10ueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6Y3VycmVudFBsYXllckNsb25lc1tjXS55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXVpZDpjdXJyZW50UGxheWVyQ2xvbmVzW2NdLnV1aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHt0eXBlOlwicGVyc29ubmVsXCIsIGRldGFpbHM6b3BwUGF5bG9hZH0sIG9wcG9uZW50LnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdCgndXBkYXRlJywge3R5cGU6XCJyZXNvdXJjZXNcIiwgYWN0aW9uOidpbml0J30pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllciA9IHRoaXMuZ2V0UmFuZG9tUGxheWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJvZmZlckRpY2VcIiwgZGV0YWlsczoge319LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUrKztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3Ioc3RhdGUudmFsdWUgKyBcIiBpcyBub3QgYSB2YWxpZCBwbGF5ZXIgc3RhdGUhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRQbGF5ZXJPcHBvbmVudChwbGF5ZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJzQXJyYXkubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJzQXJyYXlbMF0gPT09IHBsYXllcikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXlbMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5WzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VBY3RpdmVQbGF5ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJ0YWtlRGljZVwiLCBkZXRhaWxzOiB7fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZVBsYXllciA9IHRoaXMuZ2V0UGxheWVyT3Bwb25lbnQodGhpcy5hY3RpdmVQbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwib2ZmZXJEaWNlXCIsIGRldGFpbHM6IHt9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJhbmRvbVBsYXllcigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMildO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRQbGF5ZXJCeVVVSUQodXVpZCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXJzQXJyYXlbaV0udXVpZCA9PSB1dWlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5W2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0UGxheWVyQnlTb2NrZXRJRChpZCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXJzQXJyYXlbaV0uc29ja2V0SUQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheVtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxheWVyQ291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5Lmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0FybXMocGxheWVyKSB7XHJcbiAgICAgICAgcGxheWVyLmFybXNBcnJheSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gcGxheWVyLnBlcnNvbm5lbEFycmF5KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbGVBcnJheVtwbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueF1bcGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnldLnR5cGUgPT0gXCJhcm1vcnlcIikge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLmFybXNBcnJheS5wdXNoKHRoaXMudGlsZUFycmF5W3BsYXllci5wZXJzb25uZWxBcnJheVtpXS54XVtwbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueV0ubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNoZWNrR3VubmVycyhwbGF5ZXIpIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHBsYXllci5wZXJzb25uZWxBcnJheSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50aWxlQXJyYXlbcGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnhdW3BsYXllci5wZXJzb25uZWxBcnJheVtpXS55XS50eXBlID09IFwic3VyZmFjZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0uaXNHdW5uZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLmlzR3VubmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpc3RzUGxheWVyVVVJRCh1dWlkKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnBsYXllcnNBcnJheSkge1xyXG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcnNBcnJheVtpXS51dWlkID09IHV1aWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBhY3RpdmF0ZVRpbGUoZGF0YSkge1xyXG4gICAgICAgIHZhciB0aWxlID0gdGhpcy5nZXRUaWxlKGRhdGEueCwgZGF0YS55KTtcclxuICAgICAgICB2YXIgcmVtYWluaW5nQ291bnQgPSBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAodGlsZS50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdXJmYWNlXCI6IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwcm9kdWN0aW9uXCI6XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVGhyZWUgc3BlY2lhbCBjYXNlczogXHJcbiAgICAgICAgICAgICAgICAvLyAgLSBTZW5zb3IgQ2FiaW4gZG9lcyBub3QgY29zdCBvciB5aWVsZCBhbnl0aGluZy4gV2UgY2FuIGhhbmRsZSB0aGlzIGltbWVkaWF0ZWx5KVxyXG4gICAgICAgICAgICAgICAgLy8gIC0gUHJvZHVjdGlvbiBSZXBhaXIgY29zdHMsIGJ1dCB0cmlnZ2VycyBhIHJlcGFpciBqdXN0IGxpa2UgdGhlIFJlcGFpciBiYXR0bGUgdGlsZSAoV2UgbmVlZCB0byBjaGVjayBpZiB3ZSBjYW4gYWZmb3JkKVxyXG4gICAgICAgICAgICAgICAgLy8gIC0gTnVjbGVhciBBcm1vcnkgcHJvZHVjZXMgYSBudWtlIHdoaWNoIHJlbGllcyBvbiBvcmRuYW5jZSB3aGljaCBoYXMgbm90IGJlZW4gYnVpbHQgeWV0XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGlsZS5uYW1lID09IFwic2Vuc29yQ2FiaW5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBzZW5zb3IgY2FiaW4gc28ganVzdCB0cmlnZ2VyIHRoZSBhY3Rpb24gYW5kIG1vdmUgb24uXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZW5zb3IgY2FiaW5zIGFyZSBmcmVlIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRpbGUubmFtZSA9PSBcInByb2RSZXBhaXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIHJlcGFpciAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmlnZ2VyIHRoZSByZXBhaXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aWxlLm5hbWUgPT0gXCJudWNsZWFyQXJtb3J5XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIHRoZSByZXBhaXIgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQnVpbGQgYSBudWtlIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5jaGVja1Jlc291cmNlKHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlW2ldLCB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0Q291bnRbaV0pID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYW4ndCBhZmZvcmQgaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYW4ndCBhZmZvcmQgaXQhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogaW4gdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmNoZWNrUmVzb3VyY2UodGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRUeXBlW2pdLCB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZENvdW50W2pdLCB0cnVlKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm8gcm9vbSB0byBzdG9yZSBpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbid0IGFjY2VwdCB0aGUgeWllbGQgY3V6IHdlIGdvdCBubyByb29tIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrIGluIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nQ291bnQgPSB0aGlzLmFjdGl2ZVBsYXllci5zcGVuZFJlc291cmNlKHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlW2tdLCB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0Q291bnRba10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWW91IGhhdmUgc3BlbnQgXCIgKyByZW1haW5pbmdDb3VudCArIFwiIFwiICsgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGVba10gKyBcIi4gVGhpcyBsZWF2ZXMgeW91IHdpdGggXCIgKyB0aGlzLmFjdGl2ZVBsYXllci5nZXRSZXNvdXJjZUNvdW50KHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlW2tdKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbCBpbiB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdDb3VudCA9IHRoaXMuYWN0aXZlUGxheWVyLmFjY2VwdFJlc291cmNlKHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkVHlwZVtsXSwgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRDb3VudFtsXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbWFpbmluZ0NvdW50KSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJZb3UgaGF2ZSBhZGRlZCBcIiArIHJlbWFpbmluZ0NvdW50ICsgXCIgXCIgKyB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZFR5cGVbbF0gKyBcIi4gVGhpcyBsZWF2ZXMgeW91IHdpdGggXCIgKyB0aGlzLmFjdGl2ZVBsYXllci5nZXRSZXNvdXJjZUNvdW50KHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkVHlwZVtsXSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBwbGF5ZXIgdG8gdGhlaXIgbmV3IHdhcmVob3VzZSB2YWx1ZXNcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBcImFybW9yeVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0FybXModGhpcy5hY3RpdmVQbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHBsYXllcidzIHBlcnNvbm5lbCB0byBiZSBhcm1lZFxyXG4gICAgICAgICAgICAgICAgLy8gTWF5YmUgaGF2ZSB0aHJlZSBvdmVybGFwcGluZyBzcHJpdGVzLiBEcmlsbCwgQ2Fubm9uLCBFeHBsb3NpdmVzP1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYmF0dGxlXCI6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRpbGUubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzaGllbGRcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYmlvZHJvbmVcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibGFzZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidGhlcm1pdGVcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2F0ZWxsaXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJvY2tldFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlc3Bpb25hZ2VcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidGFrZW92ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50dXJuU3RhdGUrKzsgLy8gU2V0IHN0YXRlIHRvIHRhcmdldC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRSZXNvdXJjZUNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRSZXNvdXJjZUFmZm9yZGFiaWxpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWZmb3JkYWJsZVJvdW5kcyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlR3VubmVycyA9IHRoaXMuYWN0aXZlUGxheWVyLmdldEd1bm5lcnMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVHdW5uZXJzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gTm8gZ3VubmVycyEgR2V0IG91dCBvZiBoZXJlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtIGluIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VDb3VudCA9IHRoaXMuYWN0aXZlUGxheWVyLmdldFJlc291cmNlQ291bnQodGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGVbbV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlQWZmb3JkYWJpbGl0eSA9IGN1cnJlbnRSZXNvdXJjZUNvdW50IC8gdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdENvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZXNvdXJjZUFmZm9yZGFiaWxpdHkgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBOb3QgZW5vdWdoIG9mIGEgcmVzb3VyY2UhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFmZm9yZGFibGVSb3VuZHMgPT09IG51bGwgfHwgY3VycmVudFJlc291cmNlQWZmb3JkYWJpbGl0eSA8IGFmZm9yZGFibGVSb3VuZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZmZvcmRhYmxlUm91bmRzID0gY3VycmVudFJlc291cmNlQWZmb3JkYWJpbGl0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlbGwgcGxheWVyIHRoZXkgY2FuIGFmZm9yZCBcIiArIGFmZm9yZGFibGVSb3VuZHMgKyBcIiBndW5uZXIocylcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVldWVkQmF0dGxlVGlsZVR5cGUgPSB0aWxlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwib2ZmZXJHdW5uZXJzXCIsIGRldGFpbHM6e2d1bm5lcnM6YWN0aXZlR3VubmVyc319LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlYWR5IHRvIHNlbGVjdCBndW5uZXJzIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb3VudGVyRXNwaW9uYWdlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvb2sgZm9yIGNsb25lcyB0aGF0IGFyZSBvcHBvbmVudCdzIHNwaWVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmVwYWlyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJlcGFpclR3b1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVEYW1hZ2VkVGlsZXMgPSB0aGlzLmdldERhbWFnZWRUaWxlcyh0aGlzLmFjdGl2ZVBsYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVEYW1hZ2VkVGlsZXMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSBjb3N0IG9mIHJlcGFpclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBuIGluIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VDb3VudCA9IHRoaXMuYWN0aXZlUGxheWVyLmdldFJlc291cmNlQ291bnQodGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGVbbl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZXNvdXJjZUNvdW50IDwgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBOb3QgZW5vdWdoIG9mIGEgcmVzb3VyY2UhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGVsbCBwbGF5ZXIgdGhhdCB0aGV5IGNhbiBhZmZvcmQgdG8gZml4IHVwIHRoZSBzdGF0aW9uIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9ja3MocGxheWVyKSB7XHJcbiAgICAgICAgdmFyIHJldHVybkFycmF5ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgYyBpbiB0aGlzLnRpbGVBcnJheSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciByIGluIHRoaXMudGlsZUFycmF5W2NdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlQXJyYXlbY11bcl0ubmFtZSA9PSBcImxvY2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5pZCA9PSAxICYmIGMgPCAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLnRpbGVBcnJheVtjXVtyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyLmlkID09IDIgJiYgYyA+IDE4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMudGlsZUFycmF5W2NdW3JdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy50aWxlQXJyYXlbY11bcl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGFtYWdlZFRpbGVzKHBsYXllcikge1xyXG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGMgaW4gdGhpcy50aWxlQXJyYXkpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgciBpbiB0aGlzLnRpbGVBcnJheVtjXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuaWQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYyA8IDEyICYmIHRoaXMudGlsZUFycmF5W2NdW3JdLmRhbWFnZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy50aWxlQXJyYXlbY11bcl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjID4gMTggJiYgdGhpcy50aWxlQXJyYXlbY11bcl0uZGFtYWdlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLnRpbGVBcnJheVtjXVtyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlQXJyYXlbY11bcl0uZGFtYWdlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMudGlsZUFycmF5W2NdW3JdKTtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcGxhY2VDbG9uZShwbGF5ZXIsIHgsIHkpIHtcclxuXHJcbiAgICAgICAgLy8gQXR0ZW1wdCB0byBwbGFjZSBjbG9uZXNcclxuICAgICAgICAvLyBJZiB0aGUgZ2FtZXN0YXRlIGlzIFNFVFVQLCBjbG9uZXMgY2FuIGdvIGludG8gYW55IHVub2NjdXBpZWQsIHBsYXllci1vd25lZCwgYmF0dGxlLCBwcm9kdWN0aW9uLCBsb2NrLCBvciBhcm1vcnkgdGlsZS5cclxuICAgICAgICAvLyBJZiB0aGUgZ2FtZXN0YXRlIGlzIEdBTUUsIGNsb25lcyBjYW4gb25seSBnbyBpbnRvIHVub2NjdXBpZWQsIHBsYXllci1vd25lZCwgbG9ja3MuXHJcbiAgICAgICAgLy8gUkVUVVJOIHRydWUgb3IgZmFsc2UgZm9yIHN1Y2Nlc3Mgb3IgZmFpbHVyZS5cclxuICAgICAgICAvLyBJIHNob3VsZCByZWZhY3RvciB0aGlzLCBidXQgSSdtIHRpcmVkLlxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHBsYXllciA9PT0gJ3VuZGVmaW5lZCcgfHwgcGxheWVyID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzZWxlY3RlZFRpbGUgPSB0aGlzLmdldFRpbGUoeCwgeSk7XHJcbiAgICAgICAgdmFyIGNsb25lLCBjbG9uZVVVSUQ7XHJcblxyXG4gICAgICAgIGlmIChwbGF5ZXIuaWQgIT0gc2VsZWN0ZWRUaWxlLm93bmVyIHx8IHNlbGVjdGVkVGlsZS5vY2N1cGllZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiBnYW1lc3RhdGUgaXMgU0VUVVBcclxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IHRoaXMuZ2FtZVN0YXRlRW51bS5TRVRVUCkge1xyXG4gICAgICAgICAgICBpZihzZWxlY3RlZFRpbGUudHlwZSA9PSBcImxvY2tcIiB8fCBzZWxlY3RlZFRpbGUudHlwZSA9PSBcImJhdHRsZVwiIHx8IHNlbGVjdGVkVGlsZS50eXBlID09IFwiYXJtb3J5XCIgfHwgc2VsZWN0ZWRUaWxlLnR5cGUgPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGNsb25lVVVJRCA9IHV1aWQoKTtcclxuICAgICAgICAgICAgICAgIC8vdmFyIHV1aWQgPSByZXF1aXJlKCd1dWlkL3Y0JykoKTtcclxuICAgICAgICAgICAgICAgIGNsb25lID0gcGxheWVyLmFkZFBlcnNvbm5lbCgnY2xvbmUnLCB4LCB5LCBjbG9uZVVVSUQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsb25lICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tBcm1zKHBsYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUaWxlLm9jY3VwaWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcImFkZENsb25lXCIsIGRldGFpbHM6IHt4OngsIHk6eSwgcGxheWVySUQ6IHBsYXllci5pZCwgdXVpZDpjbG9uZVVVSUR9fSwgcGxheWVyLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiBnYW1lc3RhdGUgaXMgR0FNRVxyXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gdGhpcy5nYW1lU3RhdGVFbnVtLkdBTUUpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkVGlsZS50eXBlID09IFwibG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9uZVVVSUQgPSB1dWlkKCk7XHJcbiAgICAgICAgICAgICAgICAvL3ZhciB1dWlkID0gcmVxdWlyZSgndXVpZC92NCcpKCk7XHJcbiAgICAgICAgICAgICAgICBjbG9uZSA9IHBsYXllci5hZGRQZXJzb25uZWwoJ2Nsb25lJywgeCwgeSwgY2xvbmVVVUlEKTtcclxuICAgICAgICAgICAgICAgIGlmIChjbG9uZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQXJtcyhwbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGlsZS5vY2N1cGllZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJhZGRDbG9uZVwiLCBkZXRhaWxzOiB7eDp4LCB5OnksIHBsYXllcklEOiBwbGF5ZXIuaWQsIHV1aWQ6Y2xvbmVVVUlEfX0sIHBsYXllci5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVUaWxlQXJyYXkoKSB7XHJcbiAgICAgICAgdmFyIHRpbGVKU09OID0gcmVxdWlyZSgnLi4vLi4vYXNzZXRzL3RpbGVEZXRhaWwuanNvbicpO1xyXG5cclxuICAgICAgICBmb3IodmFyIGMgPSAwOyBjIDwgdGhpcy50aWxlQ29sdW1uczsgYysrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NdID0gW107XHJcbiAgICAgICAgICAgIGZvcih2YXIgciA9IDA7IHIgPCB0aGlzLnRpbGVSb3dzOyByKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NdW3JdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6YyxcclxuICAgICAgICAgICAgICAgICAgICB5OnJcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aWxlSlNPTikge1xyXG4gICAgICAgICAgICBpZiAoIXRpbGVKU09OLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIG9iaiA9IHRpbGVKU09OW2tleV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBza2lwIGxvb3AgaWYgdGhlIHByb3BlcnR5IGlzIGZyb20gcHJvdG90eXBlXHJcbiAgICAgICAgICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KHByb3ApKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uQ291bnQgPSBvYmpbcHJvcF0ubG9jYXRpb25zLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYXRpb25Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvb3JkcyA9IG9ialtwcm9wXS5sb2NhdGlvbnNbaV0uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gY29vcmRzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gY29vcmRzWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLmRhbWFnZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5vY2N1cGllZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnR5cGUgPSBvYmpbcHJvcF0udHlwZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPCA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLm93bmVyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHggPiAyMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5vd25lciA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVBcnJheVt4XVt5XSAhPSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0ubmFtZSA9IG9ialtwcm9wXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeCArIFwiOlwiICsgeSArIFwiIG5vdCBmb3VuZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcF0ucHJvcGVydGllcyAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5wcm9wZXJ0aWVzID0gb2JqW3Byb3BdLnByb3BlcnRpZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUaWxlKHgsIHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWxlQXJyYXlbeF1beV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGVnYWxQaWVjZXMoKSB7XHJcbiAgICAgICAgdmFyIHBlcnNvbm5lbEFycmF5ID0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UGVyc29ubmVsKCk7XHJcbiAgICAgICAgdmFyIG9yZG5hbmNlQXJyYXkgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRPcmRuYW5jZSgpO1xyXG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xyXG4gICAgICAgIHZhciBtb3Zlc0FycmF5ID0gW107XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgaW4gcGVyc29ubmVsQXJyYXkpIHtcclxuICAgICAgICAgICAgbW92ZXNBcnJheSA9IHRoaXMuZ2V0TGVnYWxNb3ZlcyhwZXJzb25uZWxBcnJheVtpXSwgdGhpcy5jdXJyZW50RGljZVZhbHVlLCB7eDpwZXJzb25uZWxBcnJheVtpXS54LCB5OnBlcnNvbm5lbEFycmF5W2ldLnl9KTtcclxuICAgICAgICAgICAgaWYgKG1vdmVzQXJyYXkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh7dHlwZTpwZXJzb25uZWxBcnJheVtpXS50eXBlLG9yaWdpbjp7eDpwZXJzb25uZWxBcnJheVtpXS54LHk6cGVyc29ubmVsQXJyYXlbaV0ueX0sIHV1aWQ6cGVyc29ubmVsQXJyYXlbaV0udXVpZCwgbW92ZXM6bW92ZXNBcnJheX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBqIGluIG9yZG5hbmNlQXJyYXkpIHtcclxuICAgICAgICAgICAgbW92ZXNBcnJheSA9IHRoaXMuZ2V0TGVnYWxNb3ZlcyhwZXJzb25uZWxBcnJheVtqXSwgdGhpcy5jdXJyZW50RGljZVZhbHVlLCB7eDpwZXJzb25uZWxBcnJheVtqXS54LCB5OnBlcnNvbm5lbEFycmF5W2pdLnl9KTtcclxuICAgICAgICAgICAgaWYgKG1vdmVzQXJyYXkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh7dHlwZTpcIm9yZG5hbmNlXCIsIHV1aWQ6b3JkbmFuY2VBcnJheVtqXS51dWlkLCBtb3Zlczptb3Zlc0FycmF5fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVybkFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvb3JkRnJvbURpcmVjdGlvbihvcmlnaW5Db29yZCxkaXJlY3Rpb24pIHtcclxuICAgICAgICB2YXIgZGlyPXtOT1JUSDp7eDowLHk6LTF9LEVBU1Q6e3g6MSx5OjB9LFNPVVRIOnt4OjAseToxfSxXRVNUOnt4Oi0xLHk6MH19O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBvYmogPSB7eDoocGFyc2VJbnQob3JpZ2luQ29vcmQueCkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS54KSksIHk6KHBhcnNlSW50KG9yaWdpbkNvb3JkLnkpICsgcGFyc2VJbnQoZGlyW2RpcmVjdGlvbl0ueSkpfTtcclxuICAgICAgICBpZihvYmoueCA8IDAgfHwgb2JqLnggPiAzMHx8IG9iai55IDwgMCB8fCBvYmoueSA+IDIwKSBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHt4OihwYXJzZUludChvcmlnaW5Db29yZC54KSArIHBhcnNlSW50KGRpcltkaXJlY3Rpb25dLngpKSwgeToocGFyc2VJbnQob3JpZ2luQ29vcmQueSkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS55KSl9OyAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldExlZ2FsTW92ZXMoZ2FtZVBpZWNlVHlwZSwgbW92ZXMsIGN1cnJlbnRDb29yZCwgcHJldmlvdXNDb29yZCl7XHJcbiAgICAgICAgaWYgKG1vdmVzIDwgMSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSWxsZWdhbCBtb3ZlIG51bWJlciEgVGhpcyBjb3VsZCByZXN1bHQgaW4gaW5maW5pdGUgbG9vcC5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGxlZ2FsTW92ZXMgPSBbXTtcclxuICAgICAgICB2YXIgcmV0dXJuQXJyYXkgPSBbXTtcclxuICAgICAgICB2YXIgbmV4dE1vdmVUb0NoZWNrID0gbnVsbDtcclxuICAgICAgICB2YXIgbmV4dFRpbGVUb0NoZWNrID0gbnVsbDtcclxuICAgICAgICBtb3Zlcy0tO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2Nlc3MubWVtb3J5VXNhZ2UoKS5oZWFwVXNlZCk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgcHJldmlvdXNDb29yZCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdmFyIGxvY2tzID0gdGhpcy5nZXRMb2Nrcyh0aGlzLmFjdGl2ZVBsYXllcik7XHJcbiAgICAgICAgICAgIHZhciBpc0xvY2sgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGwgaW4gbG9ja3MpIHtcclxuICAgICAgICAgICAgICAgIGlmIChsb2Nrc1tsXS54ID09IGN1cnJlbnRDb29yZC54ICYmIGxvY2tzW2xdLnkgPT0gY3VycmVudENvb3JkLnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0xvY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNMb2NrID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIGxvY2tzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRDb29yZC54ID09IGxvY2tzW2ldLnggJiYgY3VycmVudENvb3JkLnkgPT0gbG9ja3NbaV0ueSkgeyBjb250aW51ZTsgfSAvLyBkb24ndCBpbmNsdWRlIHRoZSBsb2NrIHlvdSdyZSBzaXR0aW5nIG9uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZUFycmF5W2xvY2tzW2ldLnhdW2xvY2tzW2ldLnldLm9jY3VwaWVkID09PSB0cnVlKSB7IGNvbnRpbnVlOyB9IC8vIGRvbid0IGluY2x1ZGUgbG9jayB0aGF0IG90aGVycyBhcmUgc2l0dGluZyBvblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlcyA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkgPSByZXR1cm5BcnJheS5jb25jYXQodGhpcy5nZXRMZWdhbE1vdmVzKGdhbWVQaWVjZVR5cGUsIG1vdmVzLCB7eDpsb2Nrc1tpXS54LCB5OmxvY2tzW2ldLnl9LCBjdXJyZW50Q29vcmQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKGxvY2tzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYyBpbiByZXR1cm5BcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXR1cm5BcnJheVtjXS54ICE9PSBjdXJyZW50Q29vcmQueCB8fCByZXR1cm5BcnJheVtjXS55ICE9PSBjdXJyZW50Q29vcmQueSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2FsTW92ZXMucHVzaChyZXR1cm5BcnJheVtjXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAodmFyIGRpcmVjdGlvbiBpbiB0aGlzLmRpcmVjdGlvbkVudW0pIHtcclxuICAgICAgICAgICAgbmV4dE1vdmVUb0NoZWNrID0gdGhpcy5nZXRDb29yZEZyb21EaXJlY3Rpb24oY3VycmVudENvb3JkLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICBpZihuZXh0TW92ZVRvQ2hlY2sgPT09IGZhbHNlKSB7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuZXh0VGlsZVRvQ2hlY2sgPSB0aGlzLnRpbGVBcnJheVtuZXh0TW92ZVRvQ2hlY2sueF1bbmV4dE1vdmVUb0NoZWNrLnldO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKG5leHRUaWxlVG9DaGVjay5kYW1hZ2VkID09PSB0cnVlKSB7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgIGlmIChuZXh0VGlsZVRvQ2hlY2sudHlwZSA9PT0gXCJzcGFjZVwiKSB7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrV2FsbCh0aGlzLmRpcmVjdGlvbkVudW1bZGlyZWN0aW9uXSwgY3VycmVudENvb3JkKSA9PT0gZmFsc2UpIHsgY29udGludWU7IH1cclxuXHJcbiAgICAgICAgICAgIGlmKCh0eXBlb2YgcHJldmlvdXNDb29yZCA9PT0gJ3VuZGVmaW5lZCcpIHx8ICgodHlwZW9mIHByZXZpb3VzQ29vcmQgIT09ICd1bmRlZmluZWQnKSAmJiAoSlNPTi5zdHJpbmdpZnkobmV4dE1vdmVUb0NoZWNrKSAhPT0gSlNPTi5zdHJpbmdpZnkocHJldmlvdXNDb29yZCkpICkpIHtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRpbGUgaXMgb2NjdXBpZWRcclxuICAgICAgICAgICAgICAgIGlmIChtb3ZlcyA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobmV4dFRpbGVUb0NoZWNrLm9jY3VwaWVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWdhbE1vdmVzLnB1c2gobmV4dE1vdmVUb0NoZWNrKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheSA9IHJldHVybkFycmF5LmNvbmNhdCh0aGlzLmdldExlZ2FsTW92ZXMoZ2FtZVBpZWNlVHlwZSwgbW92ZXMsIG5leHRNb3ZlVG9DaGVjaywgY3VycmVudENvb3JkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpbmRleCBpbiByZXR1cm5BcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXR1cm5BcnJheVtpbmRleF0ueCAhPT0gY3VycmVudENvb3JkLnggfHwgcmV0dXJuQXJyYXlbaW5kZXhdLnkgIT09IGN1cnJlbnRDb29yZC55KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnYWxNb3Zlcy5wdXNoKHJldHVybkFycmF5W2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZWdhbE1vdmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrV2FsbChkaXJlY3Rpb24sIGN1cnJlbnRDb29yZGluYXRlKSB7XHJcbiAgICAgICAgdGhpcy53YWxsR3JpZCA9IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy93YWxsR3JpZC5qc29uJyk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKXtcclxuICAgICAgICAgICAgY2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uTk9SVEg6IC8vIFVQXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy53YWxsR3JpZC5ncmlkW2N1cnJlbnRDb29yZGluYXRlLnhdW2N1cnJlbnRDb29yZGluYXRlLnldJnRoaXMuZGlyZWN0aW9uRW51bS5OT1JUSCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgY2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uU09VVEg6IC8vIERPV05cclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCh0aGlzLndhbGxHcmlkLmdyaWRbY3VycmVudENvb3JkaW5hdGUueF1bY3VycmVudENvb3JkaW5hdGUueV0mdGhpcy5kaXJlY3Rpb25FbnVtLlNPVVRIKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBjYXNlIHRoaXMuZGlyZWN0aW9uRW51bS5FQVNUOiAvLyBSSUdIVFxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uRUFTVCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgY2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uV0VTVDogLy8gTEVGVFxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uV0VTVCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByb2xsRGljZShkYXRhKSB7XHJcbiAgICAgICAgaWYodGhpcy50dXJuU3RhdGUgPT0gdGhpcy50dXJuU3RhdGVFbnVtLlJPTEwgJiYgdGhpcy5nYW1lU3RhdGUgPT0gdGhpcy5nYW1lU3RhdGVFbnVtLkdBTUUgJiYgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQgPT0gZGF0YS5zb2NrZXRJRCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREaWNlVmFsdWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDE7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLmN1cnJlbnRMZWdhbFBpZWNlcyA9IHRoaXMuZ2V0TGVnYWxQaWVjZXMoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFBsYXllciByZWNlaXZlcyBhcnJheSBvZiBsZWdhbCBwZXJzb25uZWwgKGNsb25lcyBhbmQgYmlvZHJvbmVzKSBhbmQgdHVybiBzdGF0ZSBhZHZhbmNlcyB0byBNT1ZFXHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwiZGljZVJvbGxlZFwiLCBkZXRhaWxzOiB7dmFsdWU6dGhpcy5jdXJyZW50RGljZVZhbHVlLCBnYW1lUGllY2VzOnRoaXMuYWN0aXZlUGxheWVyLmN1cnJlbnRMZWdhbFBpZWNlc319LCBkYXRhLnNvY2tldElEKTtcclxuICAgICAgICAgICAgdGhpcy50dXJuU3RhdGUrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldChkYXRhKSB7XHJcbiAgICAgICAgaWYodHlwZW9mKGRhdGEucHJvcGVydHkpID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVzcG9uc2UnLCB7ZGV0YWlsczp0aGlzW2RhdGEucHJvcGVydHldfSwgZGF0YS5zb2NrZXRJRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBlbWl0KG1zZywgZGF0YSwgc29ja2V0SUQpIHtcclxuICAgICAgICBpZihtc2cgPT0gXCJyZXNwb25zZVwiIHx8IG1zZyA9PSBcInJlcXVlc3RcIiB8fCBtc2cgPT0gXCJ1cGRhdGVcIikge1xyXG4gICAgICAgICAgICBpZih0eXBlb2Yoc29ja2V0SUQpID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBTb2NrZXRJRCBmb3VuZCFcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pby5zb2NrZXRzLmNvbm5lY3RlZFtzb2NrZXRJRF0uZW1pdChtc2csIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlmKG1zZyA9PSBcImFjdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZihzb2NrZXRJRCkgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIFNvY2tldElEIGZvdW5kIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlvLnNvY2tldHMuY29ubmVjdGVkW3NvY2tldElEXS5lbWl0KG1zZywgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKG1zZyA9PSBcImxvZ1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW8uc29ja2V0cy5lbWl0KG1zZywgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBicm9hZGNhc3QobXNnLCBkYXRhKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnBsYXllcnNBcnJheSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQobXNnLCBkYXRhLCB0aGlzLnBsYXllcnNBcnJheVtpXS5zb2NrZXRJRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuU2VwdGlrb24gPSBTZXB0aWtvbjtcclxuIiwiaW1wb3J0IFNlcHRpa29uIGZyb20gJy4uL3ByZWZhYnMvc2VwdGlrb24nO1xyXG5cclxuY2xhc3MgQm9vdCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHByZWxvYWQoKSB7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3ByZWxvYWRlcicsICdhc3NldHMvcHJlbG9hZGVyLmdpZicpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5nYW1lLmlucHV0Lm1heFBvaW50ZXJzID0gMTtcclxuICAgIHRoaXMuZ2FtZS50aW1lLmFkdmFuY2VkVGltaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuZ2FtZS5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xyXG4gICAgICB0aGlzLmdhbWUuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5SRVNJWkU7XHJcbiAgICAvL3NldHVwIGRldmljZSBzY2FsaW5nXHJcbiAgICBpZiAoIXRoaXMuZ2FtZS5kZXZpY2UuZGVza3RvcCkge1xyXG4gICAgICB0aGlzLmdhbWUuc2NhbGUucGFyZW50SXNXaW5kb3cgPSB0cnVlO1xyXG4gICAgICB0aGlzLmdhbWUuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5SRVNJWkU7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5taW5XaWR0aCA9ICA0ODA7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5taW5IZWlnaHQgPSAyNjA7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5mb3JjZU9yaWVudGF0aW9uKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5pdEdsb2JhbFZhcmlhYmxlcygpO1xyXG4gICAgXHJcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ3ByZWxvYWRlcicpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEdsb2JhbFZhcmlhYmxlcygpe1xyXG4gICAgdGhpcy5nYW1lLmdsb2JhbCA9IHtcclxuICAgICAgc2NvcmU6IDAsXHJcbiAgICAgIGxhc3REaWNlUm9sbDogMCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9vdDtcclxuIiwiaW1wb3J0IERpY2UgZnJvbSAnLi4vcHJlZmFicy9kaWNlJztcclxuXHJcbmNsYXNzIEdhbWUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGNyZWF0ZSgpIHtcclxuICBcclxuICAgIC8vdGhpcy5nYW1lLmlucHV0Lm9uRG93bi5hZGQodGhpcy50b2dnbGVGdWxsc2NyZWVuLCB0aGlzKTtcclxuICAgIHRoaXMuZ2FtZS5zdGFnZS5kaXNhYmxlVmlzaWJpbGl0eUNoYW5nZSA9IHRydWU7XHJcbiAgICBcclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xyXG4gICAgdGhpcy5nYW1lLmh1ZEdyb3VwID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5tb2RhbCA9IG5ldyBnYW1lTW9kYWwodGhpcy5nYW1lKTtcclxuICAgIHRoaXMuY3JlYXRlTW9kYWxzKCk7XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwwLCdiYWNrZ3JvdW5kJyk7XHJcbiAgICB0aGlzLmJhY2tncm91bmQuYW5jaG9yLnNldFRvKDAuNSwwLjUpO1xyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2VudGVyWCA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYO1xyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2VudGVyWSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5odWRCZyA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwnaHVkLWJnJyk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmdvID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoNDAsODAsJ3RleHRfZ28nKTtcclxuICAgIHRoaXMuZ2FtZS5nby5zY2FsZS5zZXRUbygwLjI1KTtcclxuICAgIHRoaXMuZ2FtZS5nby5pbnB1dEVuYWJsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuZ2FtZS5nby5maWx0ZXJzID0gW3RoaXMuZ2FtZS5hZGQuZmlsdGVyKCdHcmF5JyldO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5nby5jbGlja2VkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5zZXB0aWtvbi5jaG9vc2luZ1RhcmdldHMgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAnZ3VubmVyc1NlbGVjdGVkJywgZ3VubmVyczogdGhpcy5nYW1lLnNlcHRpa29uLnNlbGVjdGVkR3VubmVyc30pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5nYW1lLmdvLmV2ZW50cy5vbklucHV0RG93bi5hZGQodGhpcy5nYW1lLmdvLmNsaWNrZWQsIHRoaXMpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5nby5lbmFibGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmZpbHRlcnMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaW5wdXRFbmFibGVkID0gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5nYW1lLmdvLmRpc2FibGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmZpbHRlcnMgPSBbdGhpcy5nYW1lLmFkZC5maWx0ZXIoJ0dyYXknKV07XHJcbiAgICAgICAgdGhpcy5pbnB1dEVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5nYW1lLmRpY2UgPSBuZXcgRGljZSh0aGlzLmdhbWUsIDUwLCA0MCk7XHJcbiAgICB0aGlzLmdhbWUuZGljZS5zY2FsZS5zZXRUbygwLjI1KTtcclxuXHJcbiAgICB0aGlzLmdhbWUuYWRkLmV4aXN0aW5nKHRoaXMuZ2FtZS5kaWNlKTtcclxuICAgIFxyXG4gICAgdGhpcy5nYW1lLmh1ZEdyb3VwLmFkZCh0aGlzLmdhbWUuaHVkQmcpO1xyXG4gICAgdGhpcy5nYW1lLmh1ZEdyb3VwLmFkZCh0aGlzLmdhbWUuZGljZSk7XHJcbiAgICB0aGlzLmdhbWUuaHVkR3JvdXAuYWRkKHRoaXMuZ2FtZS5nbyk7XHJcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQodGhpcy5iYWNrZ3JvdW5kKTtcclxuXHJcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24uY3JlYXRlVGlsZUFycmF5KDMxLCAyMSwge3g6MC10aGlzLmJhY2tncm91bmQud2lkdGgvMiwgeTowLXRoaXMuYmFja2dyb3VuZC5oZWlnaHQvMn0pO1xyXG5cclxuXHJcbiAgICB0aGlzLnJlZnJlc2hCb2FyZCgpO1xyXG5cclxuICB9XHJcblxyXG5cclxuICBjcmVhdGVNb2RhbHMoKSB7XHJcbiAgICAgIHRoaXMuZ2FtZS5tb2RhbC5jcmVhdGVNb2RhbChcclxuICAgICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJhc2tTdGFydFwiLFxyXG4gICAgICAgIGluY2x1ZGVCYWNrZ3JvdW5kOiBmYWxzZSxcclxuICAgICAgICBtb2RhbENsb3NlT25JbnB1dDogZmFsc2UsXHJcbiAgICAgICAgaXRlbXNBcnI6IFt7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ3JhcGhpY3NcIixcclxuICAgICAgICAgICAgZ3JhcGhpY0NvbG9yOiBcIjB4ZmZmZmZmXCIsXHJcbiAgICAgICAgICAgIGdyYXBoaWNXaWR0aDogMzAwLFxyXG4gICAgICAgICAgICBncmFwaGljSGVpZ2h0OiAzMDAsXHJcbiAgICAgICAgICAgIGdyYXBoaWNSYWRpdXM6IDQwXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgY29udGVudDogXCJBcmUgeW91IGhhcHB5IHdpdGhcXG4gdGhhdCBjbG9uZSBsYXlvdXQ/XCIsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTHVja2llc3QgR3V5XCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAyMixcclxuICAgICAgICAgICAgY29sb3I6IFwiMHgxZTFlMWVcIixcclxuICAgICAgICAgICAgb2Zmc2V0WTogLTUwXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwidGV4dF95ZXNcIixcclxuICAgICAgICAgICAgb2Zmc2V0WTogMTAwLFxyXG4gICAgICAgICAgICBvZmZzZXRYOiAtODAsXHJcbiAgICAgICAgICAgIGNvbnRlbnRTY2FsZTogMC42LFxyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLm1vZGFsLmhpZGVNb2RhbChcImFza1N0YXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OidzZXRQbGF5ZXJTdGF0ZScsIHZhbHVlOidzdGFydCd9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiBcInRleHRfbm9cIixcclxuICAgICAgICAgICAgb2Zmc2V0WTogMTAwLFxyXG4gICAgICAgICAgICBvZmZzZXRYOiA4MCxcclxuICAgICAgICAgICAgY29udGVudFNjYWxlOiAwLjYsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUubW9kYWwuaGlkZU1vZGFsKFwiYXNrU3RhcnRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6J3NldFBsYXllclN0YXRlJywgdmFsdWU6J3Jlc2V0J30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZWZyZXNoQm9hcmQoKSB7XHJcblxyXG4gICAgdmFyIHNjYWxlID0gd2luZG93LmlubmVyV2lkdGgvdGhpcy5iYWNrZ3JvdW5kLmhlaWdodDtcclxuICAgIGlmKHNjYWxlID4gMS45KSB7XHJcbiAgICAgICAgc2NhbGUgPSAxLjk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnNjYWxlLnNldFRvKHNjYWxlKTtcclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnggPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWDtcclxuXHJcbiAgICBpZih0aGlzLmdhbWUuc2VwdGlrb24ucGxheWVyLmlkID09IDEpIHtcclxuICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSA9IC05MDsgXHJcbiAgICAgICAgLy90aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclk7IC8vIENlbnRlcmVkIG9uIFNlcHRpa29uIExvZ29cclxuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSArICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIG9wcG9uZW50J3Mgc2lkZVxyXG4gICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSAtICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIHRoaXMgcGxheWVyJ3Mgc2lkZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSA9IDkwOyBcclxuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWTsgLy8gQ2VudGVyZWQgb24gU2VwdGlrb24gTG9nb1xyXG4gICAgICAgIC8vdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZICsgKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gb3Bwb25lbnQncyBzaWRlXHJcbiAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZIC0gKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gdGhpcyBwbGF5ZXIncyBzaWRlXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgLy8gICB0aGlzLmRpY2UuZnJhbWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDE7XHJcbiAgICAvLyB0aGlzLmdhbWUuZGVidWcudGV4dCgnTW91c2UnLCA3MDAsIDMyKTtcclxuICAgIFxyXG4gICAgLy8gdGhpcy5nYW1lLmRlYnVnLnRleHQoJ01vdXNlIFg6ICcgKyB0aGlzLmdhbWUuaW5wdXQueCwgNzAwLCA2NCk7XHJcbiAgICAvLyB0aGlzLmdhbWUuZGVidWcudGV4dCgnTW91c2UgWTogJyArIHRoaXMuZ2FtZS5pbnB1dC55LCA3MDAsIDkyKTtcclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyICgpIHtcclxuICAgICAgdGhpcy5yZWZyZXNoQm9hcmQoKTtcclxuICAgICAgLypcclxuXHJcbiAgICB2YXIgeCA9IDMyO1xyXG4gICAgdmFyIHkgPSAwO1xyXG4gICAgdmFyIHlpID0gMzI7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnVmlld3BvcnQnLCB4LCB5ICs9IHlpKTtcclxuXHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnVmlld3BvcnQgV2lkdGg6ICcgKyB0aGlzLmdhbWUuc2NhbGUudmlld3BvcnRXaWR0aCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93LmlubmVyV2lkdGg6ICcgKyB3aW5kb3cuaW5uZXJXaWR0aCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93Lm91dGVyV2lkdGg6ICcgKyB3aW5kb3cub3V0ZXJXaWR0aCwgeCwgeSArPSB5aSk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ1ZpZXdwb3J0IEhlaWdodDogJyArIHRoaXMuZ2FtZS5zY2FsZS52aWV3cG9ydEhlaWdodCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93LmlubmVySGVpZ2h0OiAnICsgd2luZG93LmlubmVySGVpZ2h0LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd3aW5kb3cub3V0ZXJIZWlnaHQ6ICcgKyB3aW5kb3cub3V0ZXJIZWlnaHQsIHgsIHkgKz0geWkpO1xyXG5cclxuICAgIC8vICBEZXZpY2U6IEhvdyB0byBnZXQgZGV2aWNlIHNpemUuXHJcblxyXG4gICAgLy8gIFVzZSB3aW5kb3cuc2NyZWVuLndpZHRoIGZvciBkZXZpY2Ugd2lkdGggYW5kIHdpbmRvdy5zY3JlZW4uaGVpZ2h0IGZvciBkZXZpY2UgaGVpZ2h0LiBcclxuICAgIC8vICAuYXZhaWxXaWR0aCBhbmQgLmF2YWlsSGVpZ2h0IGdpdmUgeW91IHRoZSBkZXZpY2Ugc2l6ZSBtaW51cyBVSSB0YXNrYmFycy4gKFRyeSBvbiBhbiBpUGhvbmUuKSBcclxuICAgIC8vICBEZXZpY2Ugc2l6ZSBpcyBzdGF0aWMgYW5kIGRvZXMgbm90IGNoYW5nZSB3aGVuIHRoZSBwYWdlIGlzIHJlc2l6ZWQgb3Igcm90YXRlZC5cclxuXHJcbiAgICB4ID0gMzUwO1xyXG4gICAgeSA9IDA7XHJcblxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ0JvYXJkIEdyb3VwJywgeCwgeSArPSB5aSk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuZ2FtZS5ib2FyZEdyb3VwLng6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC54LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC55OiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAueSwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGg6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5nYW1lLmJvYXJkR3JvdXAuaGVpZ2h0OiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAuaGVpZ2h0LCB4LCB5ICs9IHlpKTtcclxuXHJcbiAgICB4ID0gMzI7XHJcbiAgICB5ID0gMzAwO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdCYWNrZ3JvdW5kIERldGFpbCcsIHgsIHkgKz0geWkpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQueDogJyArIHRoaXMuYmFja2dyb3VuZC54LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQueTogJyArIHRoaXMuYmFja2dyb3VuZC55LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQud2lkdGg6ICcgKyB0aGlzLmJhY2tncm91bmQud2lkdGgsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC5oZWlnaHQ6ICcgKyB0aGlzLmJhY2tncm91bmQuaGVpZ2h0LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQuc2NhbGU6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC5zY2FsZS54LCB4LCB5ICs9IHlpKTtcclxuICAgICovXHJcbiAgICB9XHJcbiAgICBcclxuICB0b2dnbGVGdWxsc2NyZWVuKCkge1xyXG4gICAgaWYodGhpcy5nYW1lLnNjYWxlLmlzRnVsbFNjcmVlbikge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5zdG9wRnVsbFNjcmVlbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmdhbWUuc2NhbGUuc3RhcnRGdWxsU2NyZWVuKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7XHJcbiIsImNsYXNzIE1lbnUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoKSB7XHJcbiAgICAvL2FkZCBiYWNrZ3JvdW5kIGltYWdlXHJcbiAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLDAsJ2JhY2tncm91bmQnKTtcclxuICAgIHRoaXMuYmdSYXRpbyA9IHRoaXMuYmFja2dyb3VuZC50ZXh0dXJlLndpZHRoIC8gdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUuaGVpZ2h0O1xyXG4gICAgdGhpcy53b3JsZFJhdGlvID0gdGhpcy5nYW1lLndvcmxkLndpZHRoIC8gdGhpcy5nYW1lLndvcmxkLmhlaWdodDtcclxuICAgIGlmICgoKHRoaXMud29ybGRSYXRpbyAtIHRoaXMuYmdSYXRpbykgLyAyICogdGhpcy5nYW1lLndvcmxkLndpZHRoKSA+IDApIHtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQud2lkdGggPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0L3RoaXMuYmFja2dyb3VuZC50ZXh0dXJlLmhlaWdodCp0aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aDtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQuaGVpZ2h0ID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodDtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQueCA9ICh0aGlzLmdhbWUud29ybGQud2lkdGggLSB0aGlzLmJhY2tncm91bmQud2lkdGgpIC8gMjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLndpZHRoID0gdGhpcy5nYW1lLndvcmxkLndpZHRoO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQgPSB0aGlzLmdhbWUud29ybGQud2lkdGgvdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUud2lkdGgqdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC55ID0gKHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgLSB0aGlzLmJhY2tncm91bmQuaGVpZ2h0KSAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgLy9hZGQgaW50cm8gdGV4dFxyXG4gICAgdGhpcy5nYW1lb3ZlclRleHQgPSB0aGlzLmFkZC50ZXh0KHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYLHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZLCBcIlNjb3JlID0gXCIrdGhpcy5nYW1lLmdsb2JhbC5zY29yZSwge1xyXG4gICAgICBmb250OiAnNDJweCBBcmlhbCcsIGZpbGw6ICcjZmZmZmZmJywgYWxpZ246ICdjZW50ZXInXHJcbiAgICB9KTtcclxuICAgIHRoaXMuZ2FtZW92ZXJUZXh0LmFuY2hvci5zZXQoMC41KTtcclxuXHJcbiAgICB0aGlzLmlucHV0Lm9uRG93bi5hZGQodGhpcy5vbklucHV0RG93biwgdGhpcyk7XHJcblxyXG4gICAgLy9wcmV2ZW50IGFjY2lkZW50YWwgY2xpY2stdGhydSBieSBub3QgYWxsb3dpbmcgc3RhdGUgdHJhbnNpdGlvbiBmb3IgYSBzaG9ydCB0aW1lXHJcbiAgICB0aGlzLmNhbkNvbnRpbnVlVG9OZXh0U3RhdGUgPSBmYWxzZTtcclxuICAgIHRoaXMuZ2FtZS50aW1lLmV2ZW50cy5hZGQoUGhhc2VyLlRpbWVyLlNFQ09ORCAqIDAuNSwgZnVuY3Rpb24oKXsgdGhpcy5jYW5Db250aW51ZVRvTmV4dFN0YXRlID0gdHJ1ZTsgfSwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5zYXZlVmFyc1RvTG9jYWxTdG9yYWdlKCk7XHJcbiAgICB0aGlzLnJlc2V0R2xvYmFsVmFyaWFibGVzKCk7XHJcbiAgfVxyXG5cclxuICBzYXZlVmFyc1RvTG9jYWxTdG9yYWdlKCl7XHJcbiAgICB2YXIgbWF4ID0gbG9jYWxTdG9yYWdlLm1heFNjb3JlIHx8IDA7IC8vZGVmYXVsdCB2YWx1ZSBvZiAwIGlzIGl0IGRvZXMgbm90IGV4aXN0XHJcbiAgICBpZiAodGhpcy5nYW1lLmdsb2JhbC5zY29yZSA+IG1heCl7IGxvY2FsU3RvcmFnZS5tYXhTY29yZSA9IHRoaXMuZ2FtZS5nbG9iYWwuc2NvcmU7IH1cclxuICB9XHJcblxyXG4gIHJlc2V0R2xvYmFsVmFyaWFibGVzKCl7XHJcbiAgICB0aGlzLmdhbWUuZ2xvYmFsLnNjb3JlID0gMDtcclxuICB9XHJcbiAgdXBkYXRlKCkge31cclxuXHJcbiAgb25JbnB1dERvd24gKCkge1xyXG4gICAgaWYodGhpcy5jYW5Db250aW51ZVRvTmV4dFN0YXRlKXtcclxuICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdtZW51Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuIiwiY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5hc3NldCA9IG51bGw7XHJcbiAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcmVsb2FkKCkge1xyXG4gICAgLy9zZXR1cCBsb2FkaW5nIGJhclxyXG4gICAgdGhpcy5hc3NldCA9IHRoaXMuYWRkLnNwcml0ZSh0aGlzLmdhbWUud2lkdGggKiAwLjUgLSAxMTAsIHRoaXMuZ2FtZS5oZWlnaHQgKiAwLjUgLSAxMCwgJ3ByZWxvYWRlcicpO1xyXG4gICAgdGhpcy5sb2FkLnNldFByZWxvYWRTcHJpdGUodGhpcy5hc3NldCk7XHJcbiAgICBcclxuICAgIC8vU2V0dXAgbG9hZGluZyBhbmQgaXRzIGV2ZW50c1xyXG4gICAgdGhpcy5sb2FkLm9uTG9hZENvbXBsZXRlLmFkZE9uY2UodGhpcy5vbkxvYWRDb21wbGV0ZSwgdGhpcyk7XHJcbiAgICB0aGlzLmxvYWRSZXNvdXJjZXMoKTtcclxuICB9XHJcblxyXG4gIGxvYWRSZXNvdXJjZXMoKSB7XHJcbiAgICAgIFxyXG4gICAgLy9NRU5VIFJFU09VUkNFU1xyXG4gICAgLy9tZW51IGJhY2tncm91bmRcclxuICAgIC8vdGV4dCBpbWFnZXNcclxuICAgIC8vbXVzaWMgZmlsZXMgP1xyXG4vLyAgTG9hZCBmaWx0ZXIgc2NyaXB0c1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuc2NyaXB0KCdncmF5JywgJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyL21hc3Rlci92Mi9maWx0ZXJzL0dyYXkuanMnKTtcclxuXHJcbiAgICBcclxuICAgIC8vbG9hZCBnYW1lIGRhdGFcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmpzb24oJ3RpbGVEZXRhaWwnLCAnYXNzZXRzL3RpbGVEZXRhaWwuanNvbicpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuanNvbignd2FsbEdyaWQnLCAnYXNzZXRzL3dhbGxHcmlkLmpzb24nKTtcclxuICBcclxuICAgIC8vR0FNRSBSRVNPVVJDRVNcclxuICAgIC8vZ2FtZSBib2FyZCBiYWNrZ3JvdW5kXHJcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnYmFja2dyb3VuZCcsJ2Fzc2V0cy9tZWRpdW1fYm9hcmQucG5nJyk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnZGljZScsJ2Fzc2V0cy9kaWNlLnBuZycsIDEyOCwgMTk0LCAxMCk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnaHVkLWJnJywnYXNzZXRzL2h1ZC1iZy5wbmcnKTtcclxuICAgIFxyXG4gICAgLy8gbW9kYWwgaW1hZ2VzXHJcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF95ZXMnLCdhc3NldHMvdGV4dF95ZXMucG5nJyk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9ubycsJ2Fzc2V0cy90ZXh0X25vLnBuZycpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfZ28nLCdhc3NldHMvdGV4dF9nby5wbmcnKTtcclxuXHJcbiAgICAvL3BsYXllciB0b2tlbnMgc3ByaXRlc2hlZXRzXHJcbiAgICB0aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgnY2xvbmUnLCAnYXNzZXRzL2Nsb25lLnBuZycsMTEwLDE2OCk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5hdGxhcygnYm9vbScsICdhc3NldHMvYm9vbS5wbmcnLCAnYXNzZXRzL2Jvb20uanNvbicsIFBoYXNlci5Mb2FkZXIuVEVYVFVSRV9BVExBU19KU09OX0hBU0gpO1xyXG5cclxuICAgIC8vYXVkaW8gZmlsZXMgXHJcbiAgICBcclxuICAgIC8vdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2Nyb3NzaGFpcnMnLCAnYXNzZXRzL2Nyb3NzaGFpcl9yZWRfc21hbGwucG5nJyk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9nbycsICdhc3NldHMvdGV4dF9nby5wbmcnKTtcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X3JlYWR5JywgJ2Fzc2V0cy90ZXh0X3JlYWR5LnBuZycpO1xyXG5cclxuICAgIC8vdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ3RhcmdldCcsICdhc3NldHMvdGFyZ2V0LnBuZycsMTI4LjY2LDEyOCk7XHJcblxyXG4gICAgLy90aGlzLmdhbWUubG9hZC5hdWRpbygnZ3Vuc2hvdCcsJ2Fzc2V0cy9ndW5zaG90LndhdicpO1xyXG4gICAgLy90aGlzLmdhbWUubG9hZC5hdWRpbygnZGluZycsJ2Fzc2V0cy9kaW5nLndhdicpO1xyXG4gIH1cclxuXHJcbiAgb25Mb2FkQ29tcGxldGUoKSB7XHJcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ3NldHVwJyk7XHJcbiAgICAvL3RoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlbG9hZGVyO1xyXG4iLCJjbGFzcyBTZXR1cCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuIH1cclxuICBcclxuICBjcmVhdGUoKSB7XHJcbiAgICB0aGlzLmdhbWUubmFtZSA9IFwidXNlclwiO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5zdGFnZS5kaXNhYmxlVmlzaWJpbGl0eUNoYW5nZSA9IHRydWU7XHJcbiAgICB0aGlzLmdhbWUubW9kYWwgPSBuZXcgZ2FtZU1vZGFsKHRoaXMuZ2FtZSk7XHJcbiAgICB0aGlzLmNyZWF0ZU1vZGFscygpO1xyXG4gICAgdGhpcy5nYW1lLm1vZGFsLnNob3dNb2RhbCgndXNlcm5hbWUnKTtcclxuXHJcbiAgICB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkQ2FsbGJhY2tzKHRoaXMsIG51bGwsIG51bGwsIHRoaXMua2V5UHJlc3MpO1xyXG4gICAgdGhpcy5ia3NwID0gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuS2V5Ym9hcmQuQkFDS1NQQUNFKTtcclxuICAgIHRoaXMuYmtzcC5vbkRvd24uYWRkKHRoaXMua2V5UHJlc3MsIHRoaXMpO1xyXG4gICAgdGhpcy5lbnRlciA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleWJvYXJkLkVOVEVSKTtcclxuICAgIHRoaXMuZW50ZXIub25Eb3duLmFkZCh0aGlzLmtleVByZXNzLCB0aGlzKTtcclxuICAgIHRoaXMuZ2FtZS5jbGllbnQuYXNrTmV3UGxheWVyKCk7XHJcblxyXG4gICAgLy90aGlzLmdhbWUuc2VwdGlrb24uc2V0dXAoKTtcclxufVxyXG5cclxua2V5UHJlc3MoY2hhcikge1xyXG5cclxuICAgIGlmKHR5cGVvZihjaGFyKSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgIGlmIChjaGFyLmV2ZW50LmNvZGUgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ2dhbWUnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2hhci5ldmVudC5jb2RlID09PSBcIkJhY2tzcGFjZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5uYW1lID0gdGhpcy5nYW1lLm5hbWUuc3Vic3RyaW5nKDAsIHRoaXMuZ2FtZS5uYW1lLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGNoYXIgPT0gXCIgXCIpIHtcclxuICAgICAgICAgICAgY2hhciA9IFwiX1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdhbWUubmFtZSArPSBjaGFyO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nYW1lLm1vZGFsLnVwZGF0ZU1vZGFsVmFsdWUodGhpcy5nYW1lLm5hbWUsICd1c2VybmFtZScsIDQpO1xyXG59XHJcbiAgXHJcbiAgY3JlYXRlTW9kYWxzKCkge1xyXG4gIFxyXG4gICAgLy8gU3RhcnQgR2FtZVxyXG4gICAgdGhpcy5nYW1lLm1vZGFsLmNyZWF0ZU1vZGFsKFxyXG4gICAgICAgIHtcclxuICAgICAgICB0eXBlOiBcInVzZXJuYW1lXCIsXHJcbiAgICAgICAgaW5jbHVkZUJhY2tncm91bmQ6IHRydWUsXHJcbiAgICAgICAgbW9kYWxDbG9zZU9uSW5wdXQ6IHRydWUsXHJcbiAgICAgICAgaXRlbXNBcnI6IFt7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ3JhcGhpY3NcIixcclxuICAgICAgICAgICAgZ3JhcGhpY0NvbG9yOiBcIjB4ZmZmZmZmXCIsXHJcbiAgICAgICAgICAgIGdyYXBoaWNXaWR0aDogMzAwLFxyXG4gICAgICAgICAgICBncmFwaGljSGVpZ2h0OiAzMDAsXHJcbiAgICAgICAgICAgIGdyYXBoaWNSYWRpdXM6IDQwXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgY29udGVudDogXCJUeXBlIGEgdXNlcm5hbWUsXFxudGhlbiBoaXQgPEVOVEVSPlxcblxcbihtYXggb2YgMjUgY2hhcmFjdGVycylcIixcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIweDFlMWUxZVwiLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiAtNTBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmdhbWUubmFtZSxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIweDFlMWUxZVwiLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiA1MFxyXG4gICAgICAgIH0sIF1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNldHVwO1xyXG4iXX0=
