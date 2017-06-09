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

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ordnance = function (_Phaser$Sprite) {
  _inherits(Ordnance, _Phaser$Sprite);

  //initialization code in the constructor
  function Ordnance(game, x, y, frame, type, uuid) {
    _classCallCheck(this, Ordnance);

    var ordFrame;
    switch (type) {
      case "shield":
        ordFrame = 4;
        break;
      case "biodrone":
        ordFrame = 1;
        break;
      case "satellite":
        ordFrame = 5;
        break;
      case "rocket":
        ordFrame = 2;
        break;
      default:
        console.error("Bad ordnance type");
        break;
    }

    //setup physics properties
    var _this = _possibleConstructorReturn(this, (Ordnance.__proto__ || Object.getPrototypeOf(Ordnance)).call(this, game, x, y, 'ordnance', ordFrame));

    _this.anchor.setTo(0.5, 0.5);
    _this.game.physics.arcade.enableBody(_this);
    //this.body.collideWorldBounds = true;

    _this.uuid = uuid;
    _this.type = type;
    //set size
    _this.width = 50;
    _this.scale.y = Math.abs(_this.scale.x);

    //set rotation (this should be based on the base this clone occupies)
    _this.angle = _this.game.boardGroup.angle * -1;

    _this.currentTileCoordinates = _this.game.septikon.pixelsToTile(_this.x, _this.y);
    _this.game.septikon.tileArray[_this.currentTileCoordinates.x][_this.currentTileCoordinates.y].tileOccupied = true;

    return _this;
  }

  return Ordnance;
}(Phaser.Sprite);

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
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clone = require('../prefabs/clone');

var _clone2 = _interopRequireDefault(_clone);

var _ordnance = require('../prefabs/ordnance');

var _ordnance2 = _interopRequireDefault(_ordnance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Septikon = function () {

    //initialization code in the constructor
    function Septikon(game) {
        _classCallCheck(this, Septikon);

        this.game = game;

        this.player = {
            id: 0,
            personnelArray: [],
            ordnanceArray: []
        };

        this.opponent = {
            personnelArray: [],
            ordnanceArray: []
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
        key: 'showModal',
        value: function showModal(type) {
            this.game.modal.showModal(type);
        }
    }, {
        key: 'diceRolled',
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
        key: 'offerDice',
        value: function offerDice() {
            this.game.dice.enable();
        }
    }, {
        key: 'takeDice',
        value: function takeDice() {
            this.game.dice.disable();
        }
    }, {
        key: 'offerGunners',
        value: function offerGunners(data) {
            this.choosingTargets = true;
            this.legalGunners = data.gunners;
            this.game.go.enable();
            console.log("animate some indication of viable gunners on the surface. Maybe a pointer bouncing over them?");
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
        key: 'addOrdnance',
        value: function addOrdnance(details) {
            var point = this.tileToPixels(details.point.x, details.point.y);
            var ord = new _ordnance2.default(this.game, point.x, point.y, null, details.type, details.uuid);
            if (details.playerID == this.player.id) {
                this.player.ordnanceArray.push(ord);
            } else {
                this.opponent.ordnanceArray.push(ord);
            }
            this.game.boardGroup.add(ord);
        }
    }, {
        key: 'movePersonnel',
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
        key: 'moveOrdnance',
        value: function moveOrdnance(data) {
            var tween = null;
            var distance = null;
            var point = this.tileToPixels(data.x, data.y);
            for (var i in this.player.ordnanceArray) {
                if (this.player.ordnanceArray[i].uuid == data.uuid) {
                    distance = Math.abs(this.player.ordnanceArray[i].y - point.y + this.player.ordnanceArray[i].x - point.x).toFixed(1);
                    tween = this.game.add.tween(this.player.ordnanceArray[i]).to({ x: point.x, y: point.y }, distance * 11, Phaser.Easing.Cubic.Out, true);
                    // Trigger tile. Not quite sure how to do this yet.
                    //tween.onComplete.add(this.game.client.sendInput({event: 'moveComplete', x:parseInt(obj.tileX), y:parseInt(obj.tileY)});, this.game.septikon);
                }
            }
            for (var j in this.opponent.ordnanceArray) {
                if (this.opponent.ordnanceArray[j].uuid == data.uuid) {
                    distance = Math.abs(this.opponent.ordnanceArray[j].y - point.y + this.opponent.ordnanceArray[j].x - point.x).toFixed(1);
                    tween = this.game.add.tween(this.opponent.ordnanceArray[j]).to({ x: point.x, y: point.y }, distance * 11, Phaser.Easing.Cubic.Out, true);
                    // Trigger tile. Not quite sure how to do this yet.
                    //tween.onComplete.add(this.game.client.sendInput({event: 'moveComplete', x:parseInt(obj.tileX), y:parseInt(obj.tileY)});, this.game.septikon);
                }
            }
        }
    }, {
        key: 'updatePersonnel',
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
        key: 'removePersonnel',
        value: function removePersonnel(data) {
            var personnelToDestroy;
            for (var i = 0; i < this.player.personnelArray.length; i++) {
                if (this.player.personnelArray[i].uuid == data.uuid) {
                    personnelToDestroy = this.player.personnelArray[i];
                    this.player.personnelArray.splice(i, 1);
                    personnelToDestroy.destroy();
                    return true;
                }
            }
            return false;
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
        key: 'createTileArray',
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
            this.hideTiles();
            this.game.client.sendInput({ event: 'tileClicked', x: parseInt(obj.tileX), y: parseInt(obj.tileY) });
            //   this.addOrdnance({point:{x:obj.tileX, y:obj.tileY}, type:'shield', uuid:Math.random()});

            return;
        }
    }, {
        key: 'showTiles',
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
        key: 'hideTiles',
        value: function hideTiles(tileArray) {
            if (!tileArray) {
                for (var i in this.shownTiles) {
                    this.tileArray[this.shownTiles[i].x][this.shownTiles[i].y].alpha = 0;
                }
                this.shownTiles = [];
            }
        }
    }, {
        key: 'damageTile',
        value: function damageTile(data) {

            var currentTile = this.tileArray[data.x][data.y];

            currentTile.tint = 0X333333;
            currentTile.alpha = 0.8;
            currentTile.tileDamaged = true;

            var test = this.game.add.sprite(currentTile.x, currentTile.y + currentTile.height / 2, 'boom');
            this.game.boardGroup.add(test);
            test.angle = 270;
            test.anchor.set(0.5, 0.7);
            test.animations.add('boom');
            test.animations.play('boom', 20, false, true);
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

},{"../prefabs/clone":9,"../prefabs/ordnance":13}],17:[function(require,module,exports){
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

var Ordnance = function Ordnance(type, x, y, uuid) {
    _classCallCheck(this, Ordnance);

    this.typeEnum = Object.freeze({
        SHIELD: 0,
        BIODRONE: 1,
        SATELLITE: 2,
        ROCKET: 3
    });

    this.x = x;
    this.y = y;
    this.uuid = uuid;
    this.type = this.typeEnum[type.toUpperCase()];
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
        this.selectedGunners = [];
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
        key: 'addOrdnance',
        value: function addOrdnance(type, point, uuid) {
            var ord = new Ordnance(type, point.x, point.y, uuid);
            this.ordnanceArray.push(ord);
            return ord;
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
        key: 'getSelectedGunners',
        value: function getSelectedGunners() {
            return this.selectedGunners;
        }
    }, {
        key: 'toggleGunnerSelection',
        value: function toggleGunnerSelection(gunner) {
            if (this.selectedGunners.length <= 0) {
                this.selectedGunners.push(gunner);
                return;
            }
            for (var i = 0; i < this.selectedGunners.length; i++) {
                if (JSON.stringify(gunner) === JSON.stringify(this.selectedGunners[i])) {
                    this.selectedGunners.splice(i, 1);
                    return;
                }
            }
            this.selectedGunners.push(gunner);
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
            MOVE: 1, // Selecting the clone and their target space
            ACTION: 2, // Trigger tile  
            TARGETS: 3, // Assign target(s) (ie. - gunner, tile, espionaged clone) 
            BIODRONE: 4, // Move biodrone(s)
            END: 5 // assess victory conditions
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

                    var selectedPersonnel = false;

                    switch (this.turnState) {
                        case this.turnStateEnum.MOVE:

                            // Player can move one clone per turn.
                            // Note: The array of legal personnel (in this.activePlayer) was sent by rollDice().

                            this.emit('action', { callback: 'hideTiles', details: null }, this.activePlayer.socketID);

                            selectedPersonnel = this.activePlayer.getPersonnelByPoint({ x: data.x, y: data.y });

                            if (selectedPersonnel !== false) {
                                // Clone was clicked, so:
                                var isLegalPersonnel = this.activePlayer.checkPersonnelMove(selectedPersonnel);
                                // If personnel is a "biodrone" type AND clones remain in the Player.currentlegalpieces array, emit modal warning to player.
                                // Clone must move and tile must be triggered prior to biodrone movement.
                                if (isLegalPersonnel === true) {
                                    this.activePlayer.selectedPersonnelToMove = selectedPersonnel;
                                    //  - Show Clones in client
                                    //     TODO: emit something here
                                    this.emit('action', { callback: 'showTiles', details: {} }, this.activePlayer.socketID);
                                    //  - Show this clone's moves in client
                                    //     TODO: emit something here
                                    this.emit('action', { callback: 'showTiles', details: {} }, this.activePlayer.socketID);
                                    //  - show this clone in different color in client
                                    //     TODO: emit something here
                                    this.emit('action', { callback: 'showTiles', details: {} }, this.activePlayer.socketID);
                                }
                            } else if (this.activePlayer.selectedPersonnelToMove !== null) {
                                var isLegalMove = this.activePlayer.checkPersonnelMove(this.activePlayer.selectedPersonnelToMove, { x: data.x, y: data.y });
                                if (isLegalMove === false) {
                                    // TODO: emit something to show clones to client
                                    this.emit('action', { callback: 'showTiles', details: {} }, this.activePlayer.socketID);
                                } else {
                                    this.activePlayer.selectedPersonnelToMove.move(data.x, data.y);
                                    this.emit('action', { callback: 'movePersonnel', details: { uuid: this.activePlayer.selectedPersonnelToMove.uuid, x: data.x, y: data.y } }, this.activePlayer.socketID);
                                    this.emit('update', { type: "personnel", details: { uuid: this.activePlayer.selectedPersonnelToMove.uuid, x: data.x, y: data.y } }, this.getPlayerOpponent(this.activePlayer).socketID); // clear moved personnel from the player array. If moved personnel was a clone, remove ALL clones from array.
                                    this.activePlayer.purgeLegalPieces(this.activePlayer.selectedPersonnelToMove, true); // 2nd arg: true is passed for clones; null for biodrones.

                                    // TODO: This is dirty code to test gunner selection
                                    if (this.getTile(data.x, data.y).name == "surface") {
                                        this.turnState = 0;
                                        this.activateTile({ x: data.x, y: data.y });
                                        this.changeActivePlayer();
                                        return;
                                    }
                                    // TODO: END dirty code
                                    this.turnState++;
                                    // TODO: trigger tile and emit battle targets (gunners, etc) to Player
                                    this.activateTile({ x: data.x, y: data.y });
                                }
                                this.activePlayer.selectedPersonnelToMove = null;
                            }

                            break;

                        case this.turnStateEnum.ACTION:

                            // Player will designate gunner(s) for firing and/or additional targets, depending on the battle tile type.
                            // Player will confirm movement selections with GO!
                            // Array of eligible gunners sent via activateTile();
                            // Emit array of eligible gunners and number of selectable gunners to Player.
                            if (this.queuedBattleTileType == "counterEspionage" || this.queuedBattleTileType == "repair" || this.queuedBattleTileType == "repairTwo") {
                                // TODO: Special cases. 
                            } else {
                                selectedPersonnel = this.activePlayer.getPersonnelByPoint({ x: data.x, y: data.y });
                                if (selectedPersonnel !== false) {
                                    if (this.activePlayer.toggleGunnerSelection(selectedPersonnel) === 0) {
                                        this.emit('action', { callback: 'showTiles', details: { x: data.x, y: data.y } }, this.activePlayer.socketID);
                                    } else {
                                        this.emit('action', { callback: 'hideTiles', details: { x: data.x, y: data.y } }, this.activePlayer.socketID);
                                    }
                                }
                            }
                            console.log(this.activePlayer.selectedGunners);

                            break;

                        case this.turnStateEnum.TARGETS:

                            // Player will choose additional targets if required by the tile. Espoinage, for instance, requires a gunner and an enemy clone in the selected gunner's line of fire.
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
                    // This case may not be needed.

                    break;

                case this.turnStateEnum.ACTION:
                    // Player has confirmed gunner selection.
                    // TODO: Fire weapon / trigger tile.
                    this.fireWeapon(this.queuedBattleTileType, this.activePlayer.getSelectedGunners());

                    // TODO: consume resources.
                    // TODO: Emit to clients
                    // TODO: If targets are required (ie espionage) send that array now.
                    // TODO: Advance turnstate (calculate if further turnstate are needed. This could be end of turn.)

                    // TODO: TEST CODE
                    this.turnState = 0;
                    this.changeActivePlayer();
                    // TODO: END TEST CODE

                    break;
                case this.turnStateEnum.TARGETS:
                    // Player has confirmed all targets (this will apply to limited battle tiles like espionage)
                    // I may come back to this a bit later.
                    // TODO: Update client with result
                    break;
                case this.turnStateEnum.BIODRONE:
                    // Player has confirmed that biodrone selection (if any) is final. 
                    // TODO: Move biodrone(s) and wreak havok. 
                    // TODO: advance turnstate
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
                    this.activePlayer.getPersonnelByPoint({ x: data.x, y: data.y }).isGunner = true;
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
                            // this.turnState++; // Set state to ACTION.
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
                            // TODO: emit showTiles() with array of legal gunners
                            this.emit('action', { callback: "offerGunners", details: { gunners: activeGunners } }, this.activePlayer.socketID);
                            // Ready to select gunners! This will take place on the next legal click event.
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
        key: 'fireWeapon',
        value: function fireWeapon(weaponTile, gunnerArray) {
            if (gunnerArray.length <= 0) {
                return false;
            }

            for (var i = 0; i < gunnerArray.length; i++) {
                var ordnancePoint = { x: gunnerArray[i].x, y: gunnerArray[i].y };
                var impacted = false;
                var ordUUID;

                switch (weaponTile) {
                    case "laser":
                        var currentTile;
                        var currentOccupant;
                        while (impacted === false) {
                            if (this.activePlayer.id == 1) {
                                ordnancePoint.x++;
                            } else {
                                ordnancePoint.x--;
                            }
                            currentTile = this.getTile(ordnancePoint.x, ordnancePoint.y);
                            switch (currentTile.name) {
                                case "space":
                                case "surface":
                                    if (currentTile.occupied === true) {
                                        currentOccupant = this.getTileOccupant(ordnancePoint);
                                        // TODO: destroy occupant. This will wait on sats and shields and rockets.
                                        currentTile.occupied = false;
                                        impacted = true;
                                        break;
                                    }
                                    break;
                                default:
                                    // You are in the opponent mine.
                                    if (currentTile.occupied === true) {
                                        currentOccupant = this.getTileOccupant(ordnancePoint);
                                        this.activePlayer.removePersonnel(currentOccupant);
                                        // TODO: emit death animation to clients. (maybe just add that to the removePersonnel()?)
                                        this.emit('action', { callback: "removePersonnel", details: currentOccupant }, this.activePlayer.socketID);
                                        currentTile.occupied = false;
                                        impacted = true;
                                        break;
                                    }
                                    if (currentTile.damaged === true) {
                                        break;
                                    } else {
                                        currentTile.damaged = true;
                                        this.emit('action', { callback: "damageTile", details: ordnancePoint }, this.activePlayer.socketID);
                                        impacted = true;
                                        break;
                                    }
                            }
                        }
                        break;
                    case "shield":
                    case "biodrone":
                    case "satellite":
                    case "rocket":
                        if (this.activePlayer.id == 1) {
                            ordnancePoint.x += this.currentDiceValue;
                        } else {
                            ordnancePoint.x -= this.currentDiceValue;
                        }
                        currentTile = this.getTile(ordnancePoint.x, ordnancePoint.y);
                        ordUUID = uuid();
                        this.activePlayer.addOrdnance(weaponTile, ordnancePoint, ordUUID);
                        this.emit('action', { callback: "addOrdnance", details: { type: weaponTile, point: ordnancePoint, uuid: ordUUID } }, this.activePlayer.socketID);
                        break;
                    case "thermite":
                        if (this.activePlayer.id == 1) {
                            ordnancePoint.x = 31 - this.currentDiceValue;
                        } else {
                            ordnancePoint.x = this.currentDiceValue - 1;
                        }
                        currentTile = this.getTile(ordnancePoint.x, ordnancePoint.y);
                        ordUUID = uuid();
                        this.activePlayer.addOrdnance(weaponTile, ordnancePoint, ordUUID);
                        this.emit('action', { callback: "addOrdnance", details: { type: weaponTile, point: ordnancePoint, uuid: ordUUID } }, this.activePlayer.socketID);
                        break;
                    default:
                        console.error("There is a problem with that weaponTile argument");
                }
            }
            return;
            // switch (weaponTile.name) {
            //     case "espionage":
            //     case "takeover":
            //         break;
            //     default:
            //         console.error("There is a problem with that weaponTile argument");
            // }
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
                    this.game.client.sendInput({ event: 'go' });
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
      this.game.load.spritesheet('ordnance', 'assets/ordnance.png', 264, 264, 7);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvdGlsZURldGFpbC5qc29uIiwiYXNzZXRzL3dhbGxHcmlkLmpzb24iLCJub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsInNyY1xcbWFpbi5qcyIsInNyY1xcbW9kYWwuanMiLCJzcmNcXHByZWZhYnNcXGNsaWVudC5qcyIsInNyY1xccHJlZmFic1xcY2xvbmUuanMiLCJzcmNcXHByZWZhYnNcXGNyb3NzaGFpcnMuanMiLCJzcmNcXHByZWZhYnNcXGRpY2UuanMiLCJzcmNcXHByZWZhYnNcXG1hc3Rlci5qcyIsInNyY1xccHJlZmFic1xcb3JkbmFuY2UuanMiLCJzcmNcXHByZWZhYnNcXHBlcnNvbm5lbC5qcyIsInNyY1xccHJlZmFic1xccmVzb3VyY2VzLmpzIiwic3JjXFxwcmVmYWJzXFxzZXB0aWtvbi5qcyIsInNyY1xccHJlZmFic1xcdGVhbS5qcyIsInNyY1xcc2VydmVyXFxvcmRuYW5jZS5qcyIsInNyY1xcc2VydmVyXFxwZXJzb25uZWwuanMiLCJzcmNcXHNlcnZlclxccGxheWVyLmpzIiwic3JjXFxzZXJ2ZXJcXHJlc291cmNlLmpzIiwic3JjXFxzZXJ2ZXJcXHNlcHRpa29uLmpzIiwic3JjXFxzdGF0ZXNcXGJvb3QuanMiLCJzcmNcXHN0YXRlc1xcZ2FtZS5qcyIsInNyY1xcc3RhdGVzXFxnYW1lb3Zlci5qcyIsInNyY1xcc3RhdGVzXFxwcmVsb2FkZXIuanMiLCJzcmNcXHN0YXRlc1xcc2V0dXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0JBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFHLE9BQU8sT0FBUCxLQUFvQixXQUF2QixFQUFvQztBQUNoQyxRQUFHLGFBQWEsT0FBYixDQUFxQixVQUFyQixNQUFxQyxJQUF4QyxFQUE4QztBQUMxQyxZQUFNLE9BQU8sYUFBYSxPQUFiLENBQXFCLFVBQXJCLENBQWI7QUFDSCxLQUZELE1BRU87QUFDSCxZQUFNLFFBQU8sUUFBUSxTQUFSLEdBQWI7QUFDQSxxQkFBYSxPQUFiLENBQXFCLFVBQXJCLEVBQWlDLEtBQWpDO0FBQ0g7QUFDSixDQVBELE1BT087QUFDSCxZQUFRLEtBQVIsQ0FBYyw0QkFBZDtBQUNIOztBQUVEO0FBQ0EsSUFBTSxPQUFPLElBQUksT0FBTyxJQUFYLENBQWdCLEtBQWhCLEVBQXVCLEtBQXZCLEVBQThCLE9BQU8sSUFBckMsQ0FBYjtBQUNBLEtBQUssUUFBTCxHQUFnQix1QkFBYSxJQUFiLENBQWhCO0FBQ0EsS0FBSyxNQUFMLEdBQWMscUJBQVcsS0FBSyxRQUFoQixDQUFkOztBQUVBLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxNQUFmLEVBQXVCLG9CQUF2QjtBQUNBLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxNQUFmLEVBQXVCLG9CQUF2QjtBQUNBLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxPQUFmLEVBQXdCLHFCQUF4QjtBQUNBLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxXQUFmLEVBQTRCLHlCQUE1QjtBQUNBLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxVQUFmLEVBQTJCLHdCQUEzQjs7QUFFQSxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLE1BQWpCOzs7OztBQzlCQSxJQUFJLFlBQVksYUFBYSxFQUE3Qjs7QUFHQSxZQUFZLG1CQUFVLElBQVYsRUFBZ0I7O0FBRTNCLEtBQUksUUFBUSxJQUFaO0FBQ0EsTUFBSyxNQUFMLEdBQWMsRUFBZDs7QUFFQTs7Ozs7QUFLQSxNQUFLLFNBQUwsR0FBaUIsVUFBVSxJQUFWLEVBQWdCO0FBQ2hDLFNBQU8sT0FBUCxDQUFlLEdBQWYsQ0FBbUIsSUFBbkI7QUFDQSxPQUFLLE1BQUwsQ0FBWSxJQUFaLEVBQWtCLE9BQWxCLEdBQTRCLEtBQTVCO0FBQ0EsRUFIRDs7QUFLQSxRQUFPO0FBQ04sZUFBYSxxQkFBVSxPQUFWLEVBQW1CO0FBQy9CLE9BQUksT0FBTyxRQUFRLElBQVIsSUFBZ0IsRUFBM0IsQ0FEK0IsQ0FDQTtBQUMvQixPQUFJLG9CQUFvQixRQUFRLGlCQUFoQyxDQUYrQixDQUVvQjtBQUNuRCxPQUFJLGtCQUFrQixRQUFRLGVBQVIsSUFBMkIsVUFBakQ7QUFDQSxPQUFJLG9CQUFvQixRQUFRLGlCQUFSLEtBQThCLFNBQTlCLEdBQ3ZCLEdBRHVCLEdBQ2pCLFFBQVEsaUJBRGY7QUFFQSxPQUFJLG9CQUFvQixRQUFRLGlCQUFSLElBQTZCLEtBQXJEO0FBQ0EsT0FBSSwwQkFBMEIsUUFBUSx1QkFBUixJQUFtQyxLQUFqRTtBQUNBLE9BQUksVUFBVSxRQUFRLE9BQVIsSUFBbUIsSUFBakM7QUFDQSxPQUFJLFVBQVUsUUFBUSxPQUFSLElBQW1CLElBQWpDO0FBQ0EsT0FBSSxXQUFXLFFBQVEsUUFBUixJQUFvQixFQUFuQztBQUNBLE9BQUksZ0JBQWdCLFFBQVEsYUFBUixJQUF5QixLQUE3Qzs7QUFFQSxPQUFJLEtBQUo7QUFDQSxPQUFJLFVBQUo7QUFDQSxPQUFJLGFBQWEsS0FBSyxHQUFMLENBQVMsS0FBVCxFQUFqQjtBQUNBLE9BQUksa0JBQWtCLElBQXRCLEVBQTRCO0FBQzNCLGVBQVcsYUFBWCxHQUEyQixJQUEzQjtBQUNBLGVBQVcsWUFBWCxDQUF3QixDQUF4QixHQUE0QixDQUE1QjtBQUNBLGVBQVcsWUFBWCxDQUF3QixDQUF4QixHQUE0QixDQUE1QjtBQUNBOztBQUVELE9BQUksc0JBQXNCLElBQTFCLEVBQWdDO0FBQy9CLFlBQVEsS0FBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixLQUFLLEtBQXZCLEVBQThCLEtBQUssTUFBbkMsQ0FBUjtBQUNBLFVBQU0sU0FBTixDQUFnQixlQUFoQixFQUFpQyxpQkFBakM7QUFDQSxVQUFNLENBQU4sR0FBVSxDQUFWO0FBQ0EsVUFBTSxDQUFOLEdBQVUsQ0FBVjs7QUFFQSxVQUFNLFFBQU4sQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLEtBQUssS0FBMUIsRUFBaUMsS0FBSyxNQUF0Qzs7QUFFQSxRQUFJLHNCQUFzQixJQUExQixFQUFnQzs7QUFFL0Isa0JBQWEsS0FBSyxHQUFMLENBQVMsTUFBVCxDQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUFiO0FBQ0EsZ0JBQVcsWUFBWCxHQUEwQixJQUExQjtBQUNBLGdCQUFXLEtBQVgsR0FBbUIsS0FBSyxLQUF4QjtBQUNBLGdCQUFXLE1BQVgsR0FBb0IsS0FBSyxNQUF6QjtBQUNBLGdCQUFXLElBQVgsR0FBa0IsSUFBbEI7QUFDQSxnQkFBVyxLQUFYLENBQWlCLFVBQWpCLEdBQThCLENBQTlCO0FBQ0EsZ0JBQVcsTUFBWCxDQUFrQixXQUFsQixDQUE4QixHQUE5QixDQUFrQyxVQUFVLENBQVYsRUFBYSxPQUFiLEVBQXNCO0FBQ3ZELFdBQUssU0FBTCxDQUFlLEVBQUUsSUFBakI7QUFDQSxNQUZELEVBRUcsS0FGSCxFQUVVLENBRlY7O0FBSUEsZ0JBQVcsR0FBWCxDQUFlLFVBQWY7QUFDQSxLQWJELE1BYU87O0FBRU4sK0JBQTBCLElBQTFCO0FBQ0E7QUFDRDs7QUFFRCxPQUFJLHVCQUFKLEVBQTZCO0FBQzVCLGlCQUFhLEtBQUssR0FBTCxDQUFTLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FBYjtBQUNBLGVBQVcsWUFBWCxHQUEwQixJQUExQjtBQUNBLGVBQVcsS0FBWCxHQUFtQixLQUFLLEtBQXhCO0FBQ0EsZUFBVyxNQUFYLEdBQW9CLEtBQUssTUFBekI7QUFDQSxlQUFXLElBQVgsR0FBa0IsSUFBbEI7QUFDQSxlQUFXLEtBQVgsQ0FBaUIsVUFBakIsR0FBOEIsQ0FBOUI7O0FBRUEsZUFBVyxHQUFYLENBQWUsVUFBZjtBQUNBOztBQUVELE9BQUksaUJBQUosRUFBdUI7QUFDdEIsZUFBVyxHQUFYLENBQWUsS0FBZjtBQUNBOztBQUVELE9BQUksVUFBSjtBQUNBLFFBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxTQUFTLE1BQTdCLEVBQXFDLEtBQUssQ0FBMUMsRUFBNkM7QUFDNUMsUUFBSSxPQUFPLFNBQVMsQ0FBVCxDQUFYO0FBQ0EsUUFBSSxXQUFXLEtBQUssSUFBTCxJQUFhLE1BQTVCO0FBQ0EsUUFBSSxZQUFZLEtBQUssS0FBTCxJQUFjLFFBQTlCO0FBQ0EsUUFBSSxpQkFBaUIsS0FBSyxVQUFMLElBQW1CLE9BQXhDO0FBQ0EsUUFBSSxlQUFlLEtBQUssUUFBTCxJQUFpQixFQUFwQztBQUNBLFFBQUksYUFBYSxLQUFLLE1BQUwsSUFBZSxVQUFoQztBQUNBLFFBQUksc0JBQXNCLEtBQUssZUFBTCxJQUF3QixDQUFsRDtBQUNBLFFBQUksWUFBWSxLQUFLLEtBQUwsSUFBYyxRQUE5QjtBQUNBLFFBQUksVUFBVSxLQUFLLE9BQUwsSUFBZ0IsQ0FBOUI7QUFDQSxRQUFJLFVBQVUsS0FBSyxPQUFMLElBQWdCLENBQTlCO0FBQ0EsUUFBSSxlQUFlLEtBQUssWUFBTCxJQUFxQixDQUF4QztBQUNBLFFBQUksVUFBVSxLQUFLLE9BQUwsSUFBZ0IsRUFBOUI7QUFDQSxRQUFJLFVBQVUsS0FBSyxLQUFMLEdBQWEsQ0FBM0I7QUFDQSxRQUFJLFVBQVUsS0FBSyxNQUFMLEdBQWMsQ0FBNUI7QUFDQSxRQUFJLFdBQVcsS0FBSyxRQUFMLElBQWlCLEtBQWhDO0FBQ0EsUUFBSSxZQUFZLEtBQUssU0FBTCxJQUFrQixNQUFsQztBQUNBLFFBQUksY0FBYyxLQUFLLFdBQUwsSUFBb0IsRUFBdEM7QUFDQSxRQUFJLGNBQWMsS0FBSyxXQUFMLElBQW9CLE9BQXRDO0FBQ0EsUUFBSSxlQUFlLEtBQUssWUFBTCxJQUFxQixPQUF4QztBQUNBLFFBQUksZUFBZSxLQUFLLFlBQUwsSUFBcUIsUUFBeEM7QUFDQSxRQUFJLGlCQUFpQixLQUFLLGNBQUwsSUFBdUIsQ0FBNUM7QUFDQSxRQUFJLFdBQVcsS0FBSyxZQUFMLElBQXFCLEdBQXBDO0FBQ0EsUUFBSSxXQUFXLEtBQUssYUFBTCxJQUFzQixHQUFyQztBQUNBLFFBQUksZ0JBQWdCLEtBQUssYUFBTCxJQUFzQixDQUExQztBQUNBLFFBQUksZUFBZSxLQUFLLFlBQUwsSUFBcUIsS0FBeEM7O0FBRUEsUUFBSSxhQUFhLEtBQUssTUFBTCxJQUFlLEVBQUMsR0FBRSxDQUFILEVBQUssR0FBRSxDQUFQLEVBQWhDO0FBQ0EsUUFBSSxZQUFZLEtBQUssS0FBTCxJQUFjLENBQTlCO0FBQ0EsUUFBSSxRQUFRLEtBQUssQ0FBTCxJQUFVLENBQXRCO0FBQ0EsUUFBSSxRQUFRLEtBQUssQ0FBTCxJQUFVLENBQXRCO0FBQ0EsUUFBSSxhQUFhLEtBQUssS0FBTCxJQUFjLElBQS9CO0FBQ0EsUUFBSSxrQkFBa0IsS0FBSyxlQUFMLElBQXdCLEtBQUssS0FBbkQ7QUFDQSxRQUFJLG1CQUFtQixLQUFLLGdCQUFMLElBQXlCLEtBQUssTUFBckQ7O0FBRUEsaUJBQWEsSUFBYjs7QUFFQSxRQUFJLGFBQWEsTUFBYixJQUF1QixhQUFhLFlBQXhDLEVBQXNEOztBQUVyRCxTQUFJLGFBQWEsTUFBakIsRUFBeUI7QUFDeEIsbUJBQWEsS0FBSyxHQUFMLENBQVMsSUFBVCxDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsT0FBcEIsRUFBNkI7QUFDekMsYUFBTSxlQUFlLEtBQWYsR0FBdUIsY0FEWTtBQUV6QyxhQUFNLE1BQU0sT0FBTyxTQUFQLEVBQWtCLE9BQWxCLENBQTBCLElBQTFCLEVBQWdDLEVBQWhDLENBRjZCO0FBR3pDLGVBQVEsTUFBTSxPQUFPLFVBQVAsRUFBbUIsT0FBbkIsQ0FBMkIsSUFBM0IsRUFBaUMsRUFBakMsQ0FIMkI7QUFJekMsd0JBQWlCLG1CQUp3QjtBQUt6QyxjQUFPO0FBTGtDLE9BQTdCLENBQWI7QUFPQSxpQkFBVyxXQUFYLEdBQXlCLE1BQXpCO0FBQ0EsaUJBQVcsTUFBWDtBQUNBLGlCQUFXLENBQVgsR0FBaUIsS0FBSyxLQUFMLEdBQWEsQ0FBZCxHQUFvQixXQUFXLEtBQVgsR0FBbUIsQ0FBeEMsR0FBOEMsT0FBN0Q7QUFDQSxpQkFBVyxDQUFYLEdBQWlCLEtBQUssTUFBTCxHQUFjLENBQWYsR0FBcUIsV0FBVyxNQUFYLEdBQW9CLENBQTFDLEdBQWdELE9BQS9EO0FBQ0EsTUFaRCxNQVlPO0FBQ04sbUJBQWEsS0FBSyxHQUFMLENBQVMsVUFBVCxDQUFvQixDQUFwQixFQUF1QixDQUF2QixFQUEwQixjQUExQixFQUEwQyxPQUFPLE9BQVAsQ0FBMUMsRUFBMkQsWUFBM0QsQ0FBYjtBQUNBLGlCQUFXLFdBQVgsR0FBeUIsWUFBekI7QUFDQSxpQkFBVyxLQUFYLEdBQW1CLFNBQW5CO0FBQ0EsaUJBQVcsVUFBWDtBQUNBLGlCQUFXLENBQVgsR0FBZ0IsVUFBVyxXQUFXLEtBQVgsR0FBbUIsQ0FBL0IsR0FBcUMsT0FBcEQ7QUFDQSxpQkFBVyxDQUFYLEdBQWdCLFVBQVcsV0FBVyxNQUFYLEdBQW9CLENBQWhDLEdBQXNDLE9BQXJEO0FBQ0E7QUFFRCxLQXZCRCxNQXVCTyxJQUFJLGFBQWEsT0FBakIsRUFBMEI7QUFDaEMsa0JBQWEsS0FBSyxHQUFMLENBQVMsS0FBVCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsT0FBckIsQ0FBYjtBQUNBLGdCQUFXLEtBQVgsQ0FBaUIsS0FBakIsQ0FBdUIsWUFBdkIsRUFBcUMsWUFBckM7QUFDQSxnQkFBVyxXQUFYLEdBQXlCLE9BQXpCO0FBQ0EsZ0JBQVcsQ0FBWCxHQUFnQixVQUFZLFdBQVcsS0FBWixHQUFxQixDQUFqQyxHQUF1QyxPQUF0RDtBQUNBLGdCQUFXLENBQVgsR0FBZ0IsVUFBWSxXQUFXLE1BQVosR0FBc0IsQ0FBbEMsR0FBd0MsT0FBdkQ7QUFDQSxLQU5NLE1BTUEsSUFBSSxhQUFhLFlBQWpCLEVBQStCO0FBQ3JDLGtCQUFhLEtBQUssR0FBTCxDQUFTLFVBQVQsQ0FBb0IsS0FBcEIsRUFBMkIsS0FBM0IsRUFDWixlQURZLEVBQ0ssZ0JBREwsRUFDdUIsT0FEdkIsRUFDZ0MsVUFEaEMsQ0FBYjtBQUVBLGdCQUFXLEtBQVgsQ0FBaUIsS0FBakIsQ0FBdUIsWUFBdkIsRUFBcUMsWUFBckM7QUFDQSxnQkFBVyxNQUFYLENBQWtCLEtBQWxCLENBQXdCLFdBQVcsQ0FBbkMsRUFBc0MsV0FBVyxDQUFqRDtBQUNBLGdCQUFXLEtBQVgsR0FBbUIsU0FBbkI7QUFDQSxnQkFBVyxXQUFYLEdBQXlCLFlBQXpCO0FBQ0EsS0FQTSxNQU9BLElBQUksYUFBYSxRQUFqQixFQUEyQjtBQUNqQyxrQkFBYSxLQUFLLEdBQUwsQ0FBUyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLFdBQXRCLEVBQW1DLE9BQW5DLENBQWI7QUFDQSxnQkFBVyxLQUFYLENBQWlCLEtBQWpCLENBQXVCLFlBQXZCLEVBQXFDLFlBQXJDO0FBQ0EsZ0JBQVcsV0FBWCxHQUF5QixRQUF6QjtBQUNBLGdCQUFXLENBQVgsR0FBZ0IsVUFBWSxXQUFXLEtBQVosR0FBcUIsQ0FBakMsR0FBdUMsT0FBdEQ7QUFDQSxnQkFBVyxDQUFYLEdBQWdCLFVBQVksV0FBVyxNQUFaLEdBQXNCLENBQWxDLEdBQXdDLE9BQXZEO0FBQ0EsS0FOTSxNQU1BLElBQUksYUFBYSxRQUFqQixFQUEyQjtBQUNqQyxrQkFBYSxLQUFLLEdBQUwsQ0FBUyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLFdBQXRCLEVBQW1DLFFBQW5DLEVBQ1osSUFEWSxFQUNOLFdBRE0sRUFDTyxPQURQLEVBQ2dCLFlBRGhCLEVBQzhCLE9BRDlCLENBQWI7QUFFQSxnQkFBVyxLQUFYLENBQWlCLEtBQWpCLENBQXVCLFlBQXZCLEVBQXFDLFlBQXJDO0FBQ0EsZ0JBQVcsV0FBWCxHQUF5QixRQUF6QjtBQUNBLGdCQUFXLENBQVgsR0FBZ0IsVUFBWSxXQUFXLEtBQVosR0FBcUIsQ0FBakMsR0FBdUMsT0FBdEQ7QUFDQSxnQkFBVyxDQUFYLEdBQWdCLFVBQVksV0FBVyxNQUFaLEdBQXNCLENBQWxDLEdBQXdDLE9BQXZEO0FBRUEsS0FSTSxNQVFBLElBQUksYUFBYSxVQUFqQixFQUE2QjtBQUNuQyxrQkFBYSxLQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLFFBQWxCLEVBQTRCLFFBQTVCLENBQWI7QUFDQSxnQkFBVyxTQUFYLENBQXFCLFlBQXJCLEVBQW1DLGNBQW5DO0FBQ0EsU0FBSSxpQkFBaUIsQ0FBckIsRUFBd0I7QUFDdkIsaUJBQVcsUUFBWCxDQUFvQixDQUFwQixFQUF1QixDQUF2QixFQUEwQixRQUExQixFQUFvQyxRQUFwQztBQUNBLE1BRkQsTUFFTztBQUNOLGlCQUFXLGVBQVgsQ0FBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUMsUUFBakMsRUFBMkMsUUFBM0MsRUFBcUQsYUFBckQ7QUFDQTtBQUNELGdCQUFXLE9BQVg7QUFDQSxnQkFBVyxDQUFYLEdBQWdCLFVBQVksV0FBVyxLQUFaLEdBQXFCLENBQWpDLEdBQXVDLE9BQXREO0FBQ0EsZ0JBQVcsQ0FBWCxHQUFnQixVQUFZLFdBQVcsTUFBWixHQUFzQixDQUFsQyxHQUF3QyxPQUF2RDtBQUNBOztBQUVELGVBQVcsUUFBWCxHQUFzQixDQUF0QjtBQUNBLGVBQVcsUUFBWCxHQUFzQixDQUF0QjtBQUNBLGVBQVcsWUFBWCxHQUEwQixZQUExQjtBQUNBLGVBQVcsUUFBWCxHQUFzQixPQUF0QjtBQUNBLGVBQVcsUUFBWCxHQUFzQixPQUF0Qjs7QUFHQSxRQUFJLGFBQWEsS0FBYixJQUFzQixhQUFhLFFBQXZDLEVBQWlEO0FBQ2hELGdCQUFXLFlBQVgsR0FBMEIsSUFBMUI7QUFDQSxnQkFBVyxpQkFBWCxHQUErQixJQUEvQjtBQUNBLGdCQUFXLFVBQVgsR0FBd0IsRUFBeEI7QUFDQSxnQkFBVyxNQUFYLENBQWtCLFdBQWxCLENBQThCLEdBQTlCLENBQWtDLFFBQWxDLEVBQTRDLFVBQTVDO0FBQ0E7O0FBRUQsUUFBSSxhQUFhLFlBQWIsSUFBNkIsYUFBYSxVQUE5QyxFQUEwRDtBQUN6RCxnQkFBVyxVQUFYO0FBQ0EsZ0JBQVcsR0FBWCxDQUFlLFVBQWY7QUFDQSxnQkFBVyxVQUFYO0FBQ0EsZ0JBQVcsVUFBWCxDQUFzQixVQUF0QjtBQUNBLEtBTEQsTUFLTztBQUNOLGdCQUFXLEdBQVgsQ0FBZSxVQUFmO0FBQ0EsZ0JBQVcsVUFBWCxDQUFzQixVQUF0QjtBQUNBO0FBQ0Q7O0FBRUQsY0FBVyxPQUFYLEdBQXFCLEtBQXJCO0FBQ0EsUUFBSyxNQUFMLENBQVksSUFBWixJQUFvQixVQUFwQjtBQUVBLEdBbE1LO0FBbU1OLG9CQUFrQiwwQkFBVSxLQUFWLEVBQWlCLElBQWpCLEVBQXVCLEtBQXZCLEVBQThCLEVBQTlCLEVBQWtDO0FBQ25ELE9BQUksSUFBSjtBQUNBLE9BQUksVUFBVSxTQUFWLElBQXVCLFVBQVUsSUFBckMsRUFBMkM7QUFDMUMsV0FBTyxLQUFLLE1BQUwsQ0FBWSxJQUFaLEVBQWtCLFVBQWxCLENBQTZCLEtBQTdCLENBQVA7QUFDQSxJQUZELE1BRU8sSUFBSSxPQUFPLFNBQVAsSUFBb0IsT0FBTyxJQUEvQixFQUFxQyxDQUUzQzs7QUFFRCxPQUFJLEtBQUssV0FBTCxLQUFxQixNQUF6QixFQUFpQztBQUNoQyxTQUFLLElBQUwsR0FBWSxLQUFaO0FBQ0EsU0FBSyxNQUFMO0FBQ0EsUUFBSSxLQUFLLFlBQUwsS0FBc0IsSUFBMUIsRUFBZ0MsQ0FFL0IsQ0FGRCxNQUVPO0FBQ04sVUFBSyxDQUFMLEdBQVcsS0FBSyxLQUFMLEdBQWEsQ0FBZCxHQUFvQixLQUFLLEtBQUwsR0FBYSxDQUFsQyxHQUF3QyxLQUFLLFFBQXREO0FBQ0EsVUFBSyxDQUFMLEdBQVcsS0FBSyxNQUFMLEdBQWMsQ0FBZixHQUFxQixLQUFLLE1BQUwsR0FBYyxDQUFwQyxHQUEwQyxLQUFLLFFBQXhEO0FBQ0E7QUFDRCxJQVRELE1BU08sSUFBSSxLQUFLLFdBQUwsS0FBcUIsWUFBekIsRUFBdUM7QUFDN0MsU0FBSyxJQUFMLEdBQVksS0FBWjtBQUNBLFNBQUssVUFBTDtBQUNBLFFBQUksS0FBSyxZQUFMLEtBQXNCLElBQTFCLEVBQWdDLENBRS9CLENBRkQsTUFFTztBQUNOLFVBQUssQ0FBTCxHQUFXLEtBQUssS0FBTCxHQUFhLENBQWQsR0FBb0IsS0FBSyxLQUFMLEdBQWEsQ0FBbEMsR0FBd0MsS0FBSyxRQUF0RDtBQUNBLFVBQUssQ0FBTCxHQUFXLEtBQUssTUFBTCxHQUFjLENBQWYsR0FBcUIsS0FBSyxNQUFMLEdBQWMsQ0FBcEMsR0FBMEMsS0FBSyxRQUF4RDtBQUNBO0FBQ0QsSUFUTSxNQVNBLElBQUksS0FBSyxXQUFMLEtBQXFCLE9BQXpCLEVBQWtDO0FBQ3hDLFNBQUssV0FBTCxDQUFpQixLQUFqQjtBQUNBO0FBRUQsR0FqT0s7QUFrT04sZ0JBQWMsc0JBQVUsSUFBVixFQUFnQixLQUFoQixFQUF1QjtBQUNwQyxVQUFPLEtBQUssTUFBTCxDQUFZLElBQVosRUFBa0IsVUFBbEIsQ0FBNkIsS0FBN0IsQ0FBUDtBQUNBLEdBcE9LO0FBcU9OLGFBQVcsbUJBQVUsSUFBVixFQUFnQjtBQUMxQixRQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLEtBQUssTUFBTCxDQUFZLElBQVosQ0FBdEI7QUFDQSxRQUFLLE1BQUwsQ0FBWSxJQUFaLEVBQWtCLE9BQWxCLEdBQTRCLElBQTVCO0FBQ0E7QUFDQSxHQXpPSztBQTBPTixhQUFXLG1CQUFVLElBQVYsRUFBZ0I7QUFDMUIsUUFBSyxNQUFMLENBQVksSUFBWixFQUFrQixPQUFsQixHQUE0QixLQUE1QjtBQUNBO0FBQ0EsR0E3T0s7QUE4T04sZ0JBQWMsc0JBQVUsSUFBVixFQUFnQjtBQUM3QixRQUFLLE1BQUwsQ0FBWSxJQUFaLEVBQWtCLE9BQWxCO0FBQ0EsVUFBTyxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQVA7QUFDQTtBQWpQSyxFQUFQO0FBbVBBLENBbFFEOzs7Ozs7Ozs7Ozs7O0lDRk0sTTtBQUVMLG9CQUFZLFFBQVosRUFBc0I7QUFBQTs7QUFFckIsYUFBSyxNQUFMLEdBQWMsR0FBRyxPQUFILEVBQWQ7QUFDTSxhQUFLLFFBQUwsR0FBZ0IsS0FBSyxNQUFMLENBQVksUUFBWixHQUF1QixRQUF2Qzs7QUFFQSxhQUFLLE1BQUwsQ0FBWSxFQUFaLENBQWUsS0FBZixFQUFzQixVQUFTLElBQVQsRUFBYztBQUNoQyxvQkFBUSxHQUFSLENBQVksT0FBWjtBQUNBLG9CQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0gsU0FIRDs7QUFLQSxhQUFLLE1BQUwsQ0FBWSxFQUFaLENBQWUsUUFBZixFQUF5QixVQUFTLElBQVQsRUFBYztBQUNuQyxnQkFBRyxLQUFLLElBQUwsSUFBYSxXQUFoQixFQUE2QjtBQUN6QixxQkFBSyxRQUFMLENBQWMsZUFBZCxDQUE4QixJQUE5QjtBQUNIO0FBQ0QsZ0JBQUcsS0FBSyxJQUFMLElBQWEsV0FBaEIsRUFBNkI7QUFDekIsb0JBQUksS0FBSyxNQUFMLElBQWUsTUFBbkIsRUFBMkI7QUFDdkIseUJBQUssUUFBTCxDQUFjLGFBQWQ7QUFDSCxpQkFGRCxNQUVPO0FBQ0gsNEJBQVEsS0FBUixDQUFjLEtBQUssTUFBTCxHQUFjLDBDQUE1QjtBQUNIO0FBQ0o7QUFDRCxnQkFBSSxLQUFLLElBQUwsSUFBYSxNQUFqQixFQUF5QjtBQUNyQixxQkFBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixJQUFuQixDQUF3QixRQUF4QixDQUFpQyxLQUFLLE9BQUwsQ0FBYSxLQUE5QztBQUNIO0FBQ0Qsb0JBQVEsR0FBUixDQUFZLFNBQVo7QUFDQSxvQkFBUSxHQUFSLENBQVksS0FBSyxJQUFqQjtBQUNILFNBaEJEOztBQWtCQSxhQUFLLE1BQUwsQ0FBWSxFQUFaLENBQWUsU0FBZixFQUEwQixVQUFTLElBQVQsRUFBYztBQUNwQyxvQkFBUSxHQUFSLENBQVksV0FBWjtBQUNBLG9CQUFPLEtBQUssT0FBTCxDQUFhLElBQXBCO0FBQ0kscUJBQUssVUFBTDtBQUNJLHlCQUFLLFFBQUwsQ0FBYyxTQUFkLENBQXdCLFVBQXhCO0FBQ0E7O0FBSFI7QUFNSCxTQVJEOztBQVVBLGFBQUssTUFBTCxDQUFZLEVBQVosQ0FBZSxRQUFmLEVBQXlCLFVBQVMsSUFBVCxFQUFjO0FBQ25DLGdCQUFJLE9BQU8sS0FBSyxRQUFMLENBQWMsS0FBSyxRQUFuQixDQUFQLEtBQXlDLFVBQTdDLEVBQXlEO0FBQ3JELHFCQUFLLFFBQUwsQ0FBYyxLQUFLLFFBQW5CLEVBQTZCLEtBQUssT0FBbEM7QUFDQSx3QkFBUSxHQUFSLENBQVksSUFBWjtBQUNILGFBSEQsTUFHTztBQUNILHdCQUFRLEdBQVIsQ0FBWSw0Q0FBNEMsS0FBSyxRQUE3RDtBQUNIO0FBQ0osU0FQRDtBQVFOOzs7O3VDQUVjO0FBQ2QsaUJBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsV0FBakIsRUFBOEIsRUFBQyxNQUFLLGFBQWEsT0FBYixDQUFxQixVQUFyQixDQUFOLEVBQTlCO0FBQ0E7OztrQ0FFWSxPLEVBQVM7QUFDZixvQkFBUSxHQUFSLENBQVksZUFBWjtBQUNBLGlCQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLE9BQWpCLEVBQTBCLE9BQTFCO0FBQ0g7Ozs7OztrQkFHVSxNOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEZjs7SUFFTSxLOzs7QUFFSjtBQUNBLGlCQUFZLElBQVosRUFBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsS0FBeEIsRUFBK0IsSUFBL0IsRUFBcUM7QUFBQTs7QUFHbkM7QUFIbUMsOEdBQzdCLElBRDZCLEVBQ3ZCLENBRHVCLEVBQ3BCLENBRG9CLEVBQ2pCLE9BRGlCLEVBQ1IsS0FEUTs7QUFJbkMsVUFBSyxNQUFMLENBQVksS0FBWixDQUFrQixHQUFsQixFQUF1QixJQUF2QjtBQUNBLFVBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsTUFBbEIsQ0FBeUIsVUFBekI7QUFDQTs7QUFFQSxVQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0E7QUFDQSxVQUFLLEtBQUwsR0FBYSxFQUFiO0FBQ0EsVUFBSyxLQUFMLENBQVcsQ0FBWCxHQUFlLEtBQUssR0FBTCxDQUFTLE1BQUssS0FBTCxDQUFXLENBQXBCLENBQWY7O0FBRUE7QUFDQSxVQUFLLEtBQUwsR0FBYSxNQUFLLElBQUwsQ0FBVSxVQUFWLENBQXFCLEtBQXJCLEdBQTZCLENBQUMsQ0FBM0M7O0FBRUEsVUFBSyxzQkFBTCxHQUE4QixNQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFlBQW5CLENBQWdDLE1BQUssQ0FBckMsRUFBd0MsTUFBSyxDQUE3QyxDQUE5QjtBQUNBLFVBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsU0FBbkIsQ0FBNkIsTUFBSyxzQkFBTCxDQUE0QixDQUF6RCxFQUE0RCxNQUFLLHNCQUFMLENBQTRCLENBQXhGLEVBQTJGLFlBQTNGLEdBQTBHLElBQTFHOztBQWpCbUM7QUFtQnBDOzs7OzZCQUVRO0FBQ1AsV0FBSyxJQUFMLENBQVUsUUFBVixDQUFtQixTQUFuQixDQUE2QixLQUFLLHNCQUFMLENBQTRCLENBQXpELEVBQTRELEtBQUssc0JBQUwsQ0FBNEIsQ0FBeEYsRUFBMkYsWUFBM0YsR0FBMEcsS0FBMUc7QUFDQSxXQUFLLE9BQUw7QUFDRDs7O2tDQUVhO0FBQ1osV0FBSyxJQUFMLEdBQVksUUFBWjtBQUNBLFdBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsU0FBbkIsQ0FBNkIsS0FBSyxzQkFBTCxDQUE0QixDQUF6RCxFQUE0RCxLQUFLLHNCQUFMLENBQTRCLENBQXhGLEVBQTJGLEtBQTNGLEdBQW1HLENBQW5HO0FBQ0Q7OzttQ0FFYztBQUNiLFdBQUssSUFBTCxHQUFZLFFBQVo7QUFDQSxXQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFNBQW5CLENBQTZCLEtBQUssc0JBQUwsQ0FBNEIsQ0FBekQsRUFBNEQsS0FBSyxzQkFBTCxDQUE0QixDQUF4RixFQUEyRixLQUEzRixHQUFtRyxDQUFuRztBQUNEOzs7b0NBRWU7QUFDZCxXQUFLLHNCQUFMLEdBQThCLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsWUFBbkIsQ0FBZ0MsS0FBSyxDQUFyQyxFQUF3QyxLQUFLLENBQTdDLENBQTlCO0FBQ0EsVUFBSSxvQkFBb0IsS0FBSyxJQUFMLENBQVUsUUFBVixDQUFtQixhQUFuQixDQUFpQyxLQUFLLElBQUwsQ0FBVSxNQUFWLENBQWlCLFlBQWxELEVBQWdFLEtBQUssc0JBQXJFLENBQXhCO0FBQ0EsVUFBSSxrQkFBa0IsRUFBdEI7O0FBR0EsV0FBSyxJQUFJLElBQVQsSUFBaUIsaUJBQWpCLEVBQW9DO0FBQ2hDLHdCQUFnQixJQUFoQixDQUFxQixLQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFNBQW5CLENBQTZCLGtCQUFrQixJQUFsQixFQUF3QixDQUFyRCxFQUF3RCxrQkFBa0IsSUFBbEIsRUFBd0IsQ0FBaEYsQ0FBckI7QUFDQTtBQUNBO0FBQ0g7O0FBRUQsYUFBTyxlQUFQO0FBQ0Q7Ozt5QkFFSSxXLEVBQWE7O0FBRWhCO0FBQ0EsV0FBSyxJQUFJLElBQVQsSUFBaUIsS0FBSyxlQUF0QixFQUF1QztBQUNuQyxhQUFLLGVBQUwsQ0FBcUIsSUFBckIsRUFBMkIsS0FBM0IsR0FBbUMsQ0FBbkM7QUFDQSxlQUFPLEtBQUssZUFBTCxDQUFxQixJQUFyQixFQUEyQixRQUFsQztBQUNIOztBQUVEO0FBQ0E7QUFDQSxVQUFJLFNBQVMsS0FBSyxJQUFMLENBQVUsUUFBVixDQUFtQixZQUFuQixDQUFnQyxZQUFZLENBQTVDLEVBQStDLFlBQVksQ0FBM0QsQ0FBYjtBQUNBLFdBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsU0FBbkIsQ0FBNkIsS0FBSyxzQkFBTCxDQUE0QixDQUF6RCxFQUE0RCxLQUFLLHNCQUFMLENBQTRCLENBQXhGLEVBQTJGLFlBQTNGLEdBQTBHLEtBQTFHO0FBQ0EsVUFBSSxXQUFXLEtBQUssR0FBTCxDQUFTLEtBQUssQ0FBTCxHQUFTLE9BQU8sQ0FBaEIsR0FBb0IsS0FBSyxDQUF6QixHQUE2QixPQUFPLENBQTdDLEVBQWdELE9BQWhELENBQXdELENBQXhELENBQWY7O0FBRUE7QUFDQSxXQUFLLHNCQUFMLEdBQThCLFdBQTlCO0FBQ0EsV0FBSyxJQUFMLENBQVUsUUFBVixDQUFtQixTQUFuQixDQUE2QixLQUFLLHNCQUFMLENBQTRCLENBQXpELEVBQTRELEtBQUssc0JBQUwsQ0FBNEIsQ0FBeEYsRUFBMkYsWUFBM0YsR0FBMEcsSUFBMUc7O0FBRUE7QUFDQSxVQUFJLFFBQVEsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLEtBQWQsQ0FBb0IsSUFBcEIsRUFBMEIsRUFBMUIsQ0FBOEIsRUFBQyxHQUFFLE9BQU8sQ0FBVixFQUFhLEdBQUUsT0FBTyxDQUF0QixFQUE5QixFQUF5RCxXQUFTLEVBQWxFLEVBQXVFLE9BQU8sTUFBUCxDQUFjLEtBQWQsQ0FBb0IsR0FBM0YsRUFBZ0csSUFBaEcsQ0FBWjtBQUNBLFlBQU0sVUFBTixDQUFpQixHQUFqQixDQUFxQixLQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFdBQXhDLEVBQXFELEtBQUssSUFBTCxDQUFVLFFBQS9EOztBQUVBO0FBQ0EsYUFBTyxLQUFLLGVBQVo7QUFDQSxhQUFPLEtBQUssaUJBQVo7QUFDRDs7OztFQS9FaUIsT0FBTyxNOztrQkFtRlosSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRmY7SUFDTSxVOzs7QUFFSjtBQUNBLHNCQUFZLElBQVosRUFBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsS0FBeEIsRUFBK0I7QUFBQTs7QUFHN0I7QUFINkIsd0hBQ3ZCLElBRHVCLEVBQ2pCLENBRGlCLEVBQ2QsQ0FEYyxFQUNYLFlBRFcsRUFDRyxLQURIOztBQUk3QixVQUFLLEtBQUwsR0FBYSxFQUFiO0FBQ0EsVUFBSyxLQUFMLENBQVcsQ0FBWCxHQUFlLEtBQUssR0FBTCxDQUFTLE1BQUssS0FBTCxDQUFXLENBQXBCLENBQWY7O0FBRUEsVUFBSyxNQUFMLENBQVksS0FBWixDQUFrQixHQUFsQixFQUF1QixHQUF2QjtBQVA2QjtBQVE5Qjs7Ozs2QkFFTztBQUNOLFdBQUssQ0FBTCxHQUFTLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsWUFBaEIsQ0FBNkIsQ0FBdEM7QUFDQSxXQUFLLENBQUwsR0FBUyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFlBQWhCLENBQTZCLENBQXRDO0FBQ0Q7Ozs7RUFoQnNCLE9BQU8sTTs7a0JBb0JqQixVOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCZjtJQUNNLEk7OztBQUVKO0FBQ0EsZ0JBQVksSUFBWixFQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixLQUF4QixFQUErQjtBQUFBOztBQUc3QjtBQUg2Qiw0R0FDdkIsSUFEdUIsRUFDakIsQ0FEaUIsRUFDZCxDQURjLEVBQ1gsTUFEVyxFQUNILEtBREc7O0FBSTdCLFVBQUssTUFBTCxDQUFZLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsR0FBdkI7QUFDQSxVQUFLLElBQUwsQ0FBVSxPQUFWLENBQWtCLE1BQWxCLENBQXlCLFVBQXpCOztBQUVBO0FBQ0EsVUFBSyxZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsVUFBSyxNQUFMLENBQVksV0FBWixDQUF3QixHQUF4QixDQUE0QixNQUFLLE9BQWpDOztBQUVBO0FBQ0EsVUFBSyxLQUFMLEdBQWEsRUFBYjtBQUNBLFVBQUssS0FBTCxDQUFXLENBQVgsR0FBZSxLQUFLLEdBQUwsQ0FBUyxNQUFLLEtBQUwsQ0FBVyxDQUFwQixDQUFmO0FBQ0EsVUFBSyxPQUFMLEdBQWUsQ0FBQyxNQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsTUFBZCxDQUFxQixNQUFyQixDQUFELENBQWY7QUFDQSxVQUFLLEtBQUwsR0FBYSxHQUFiOztBQUVBLFVBQUssS0FBTCxHQUFhLEVBQWI7QUFDQSxVQUFLLEtBQUwsR0FBYSxNQUFLLEtBQUwsR0FBVyxDQUF4QjtBQWxCNkI7QUFtQjlCOzs7OzhCQUVVO0FBQ1QsV0FBSyxJQUFMLENBQVUsTUFBVixDQUFpQixTQUFqQixDQUEyQixFQUFDLE9BQU8sYUFBUixFQUEzQjtBQUNEOzs7NkJBRVE7QUFDTCxXQUFLLEtBQUwsR0FBYSxDQUFiO0FBQ0EsV0FBSyxPQUFMLEdBQWUsSUFBZjtBQUNBLFdBQUssWUFBTCxHQUFvQixJQUFwQjtBQUNIOzs7OEJBRVM7QUFDTixXQUFLLEtBQUwsR0FBYSxHQUFiO0FBQ0EsV0FBSyxPQUFMLEdBQWUsQ0FBQyxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsTUFBZCxDQUFxQixNQUFyQixDQUFELENBQWY7QUFDQSxXQUFLLFlBQUwsR0FBb0IsS0FBcEI7QUFDSDs7OzZCQUVRLEssRUFBTztBQUNkLFdBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxXQUFLLEtBQUwsR0FBYSxRQUFRLENBQXJCO0FBQ0Q7Ozs7RUEzQ2dCLE9BQU8sTTs7a0JBOENYLEk7Ozs7Ozs7Ozs7O0lDL0NULE07O0FBRUo7QUFDQSxrQkFBYztBQUFBO0FBQ2IsQzs7a0JBSVksTTs7Ozs7Ozs7Ozs7Ozs7O0lDUlQsUTs7O0FBRUo7QUFDQSxvQkFBWSxJQUFaLEVBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLEtBQXhCLEVBQStCLElBQS9CLEVBQXFDLElBQXJDLEVBQTJDO0FBQUE7O0FBQ3pDLFFBQUksUUFBSjtBQUNBLFlBQVEsSUFBUjtBQUNFLFdBQUssUUFBTDtBQUNFLG1CQUFXLENBQVg7QUFDQTtBQUNGLFdBQUssVUFBTDtBQUNFLG1CQUFXLENBQVg7QUFDQTtBQUNGLFdBQUssV0FBTDtBQUNFLG1CQUFXLENBQVg7QUFDQTtBQUNGLFdBQUssUUFBTDtBQUNFLG1CQUFXLENBQVg7QUFDQTtBQUNGO0FBQ0UsZ0JBQVEsS0FBUixDQUFjLG1CQUFkO0FBQ0E7QUFmSjs7QUFtQkE7QUFyQnlDLG9IQW1CbkMsSUFuQm1DLEVBbUI3QixDQW5CNkIsRUFtQjFCLENBbkIwQixFQW1CdkIsVUFuQnVCLEVBbUJYLFFBbkJXOztBQXNCekMsVUFBSyxNQUFMLENBQVksS0FBWixDQUFrQixHQUFsQixFQUF1QixHQUF2QjtBQUNBLFVBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsTUFBbEIsQ0FBeUIsVUFBekI7QUFDQTs7QUFFQSxVQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsVUFBSyxJQUFMLEdBQVksSUFBWjtBQUNBO0FBQ0EsVUFBSyxLQUFMLEdBQWEsRUFBYjtBQUNBLFVBQUssS0FBTCxDQUFXLENBQVgsR0FBZSxLQUFLLEdBQUwsQ0FBUyxNQUFLLEtBQUwsQ0FBVyxDQUFwQixDQUFmOztBQUVBO0FBQ0EsVUFBSyxLQUFMLEdBQWEsTUFBSyxJQUFMLENBQVUsVUFBVixDQUFxQixLQUFyQixHQUE2QixDQUFDLENBQTNDOztBQUVBLFVBQUssc0JBQUwsR0FBOEIsTUFBSyxJQUFMLENBQVUsUUFBVixDQUFtQixZQUFuQixDQUFnQyxNQUFLLENBQXJDLEVBQXdDLE1BQUssQ0FBN0MsQ0FBOUI7QUFDQSxVQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFNBQW5CLENBQTZCLE1BQUssc0JBQUwsQ0FBNEIsQ0FBekQsRUFBNEQsTUFBSyxzQkFBTCxDQUE0QixDQUF4RixFQUEyRixZQUEzRixHQUEwRyxJQUExRzs7QUFwQ3lDO0FBc0MxQzs7O0VBekNvQixPQUFPLE07O2tCQTZDZixROzs7Ozs7Ozs7Ozs7Ozs7SUM3Q1QsUzs7O0FBRUo7QUFDRSxxQkFBWSxJQUFaLEVBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLEtBQXhCLEVBQStCO0FBQUE7O0FBQUEsaUhBQ3JCLElBRHFCLEVBQ2YsQ0FEZSxFQUNaLENBRFksRUFDVCxPQURTLEVBQ0EsS0FEQTtBQUU5Qjs7O0VBTG1CLE9BQU8sTTs7a0JBU2hCLFM7Ozs7Ozs7Ozs7Ozs7SUNUVCxTOztBQUVKO0FBQ0EsdUJBQWM7QUFBQTs7QUFDWixTQUFLLFlBQUwsR0FBb0IsT0FBTyxNQUFQLENBQWM7QUFDOUIsY0FBUSxDQURzQjtBQUU5QixjQUFRLENBRnNCO0FBRzlCLGFBQU8sQ0FIdUI7QUFJOUIsY0FBUSxDQUpzQjtBQUs5QixlQUFTLENBTHFCO0FBTTlCLGdCQUFVLENBTm9CO0FBTzlCLGVBQVM7QUFQcUIsS0FBZCxDQUFwQjtBQVNBLFNBQUssU0FBTCxHQUFpQixFQUFqQjtBQUNBLFNBQUksSUFBSSxJQUFSLElBQWdCLEtBQUssWUFBckIsRUFBbUM7QUFDL0IsV0FBSyxTQUFMLENBQWUsS0FBSyxZQUFMLENBQWtCLElBQWxCLENBQWYsSUFBMEMsQ0FBMUM7QUFDSDtBQUNGOzs7OzBCQUVLLEksRUFBTSxLLEVBQU87QUFDakIsVUFBRyxLQUFLLFNBQUwsQ0FBZSxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBZixJQUEwQyxLQUE3QyxFQUNJLE9BQU8sSUFBUDs7QUFFSixhQUFPLEtBQVA7QUFDRDs7OzZCQUVRLEksRUFBTTtBQUNiLGFBQU8sS0FBSyxTQUFMLENBQWUsSUFBZixDQUFQO0FBQ0Q7Ozt3QkFFRyxJLEVBQU0sSyxFQUFPLENBQ2hCOzs7MkJBRU0sSSxFQUFNLEssRUFBTztBQUNsQixXQUFLLFNBQUwsQ0FBZSxJQUFmLEtBQXdCLEtBQXhCO0FBQ0Q7Ozs7OztrQkFJWSxTOzs7Ozs7Ozs7OztBQ3ZDZjs7OztBQUNBOzs7Ozs7OztJQUVNLFE7O0FBRUo7QUFDQSxzQkFBWSxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLGFBQUssSUFBTCxHQUFZLElBQVo7O0FBRUEsYUFBSyxNQUFMLEdBQWM7QUFDVixnQkFBSSxDQURNO0FBRVYsNEJBQWdCLEVBRk47QUFHViwyQkFBZTtBQUhMLFNBQWQ7O0FBTUEsYUFBSyxRQUFMLEdBQWdCO0FBQ1osNEJBQWdCLEVBREo7QUFFWiwyQkFBZTtBQUZILFNBQWhCOztBQUtBLGFBQUssVUFBTCxHQUFrQixFQUFsQjtBQUNBLGFBQUssU0FBTCxHQUFpQixFQUFqQjs7QUFFQSxhQUFLLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxhQUFLLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxhQUFLLFlBQUwsR0FBb0IsSUFBcEI7O0FBRUEsYUFBSyxlQUFMLEdBQXVCLEtBQXZCO0FBQ0EsYUFBSyxlQUFMLEdBQXVCLEVBQXZCO0FBQ0Q7Ozs7a0NBRVMsSSxFQUFNO0FBQ2QsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsU0FBaEIsQ0FBMEIsSUFBMUI7QUFDRDs7O21DQUVVLE8sRUFBUztBQUNsQixpQkFBSyxJQUFMLENBQVUsSUFBVixDQUFlLFFBQWYsQ0FBd0IsUUFBUSxLQUFoQztBQUNBLGlCQUFLLFVBQUwsR0FBa0IsUUFBUSxVQUExQjtBQUNBLGlCQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksUUFBUSxVQUFSLENBQW1CLE1BQXZDLEVBQStDLEdBQS9DLEVBQW9EO0FBQ2hELHFCQUFLLElBQUksQ0FBVCxJQUFjLFFBQVEsVUFBUixDQUFtQixDQUFuQixFQUFzQixLQUFwQyxFQUEyQztBQUN2Qyx3QkFBSSxJQUFJLFFBQVEsVUFBUixDQUFtQixDQUFuQixFQUFzQixLQUF0QixDQUE0QixDQUE1QixFQUErQixDQUF2QztBQUNBLHdCQUFJLElBQUksUUFBUSxVQUFSLENBQW1CLENBQW5CLEVBQXNCLEtBQXRCLENBQTRCLENBQTVCLEVBQStCLENBQXZDO0FBQ0EseUJBQUssU0FBTCxDQUFlLENBQUMsUUFBUSxVQUFSLENBQW1CLENBQW5CLEVBQXNCLE1BQXZCLENBQWYsRUFBK0MsUUFBL0M7QUFDSDtBQUNKO0FBQ0Y7OztvQ0FFVztBQUNSLGlCQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsTUFBZjtBQUNIOzs7bUNBRVU7QUFDUCxpQkFBSyxJQUFMLENBQVUsSUFBVixDQUFlLE9BQWY7QUFDSDs7O3FDQUVZLEksRUFBTTtBQUNmLGlCQUFLLGVBQUwsR0FBdUIsSUFBdkI7QUFDQSxpQkFBSyxZQUFMLEdBQW9CLEtBQUssT0FBekI7QUFDQSxpQkFBSyxJQUFMLENBQVUsRUFBVixDQUFhLE1BQWI7QUFDQSxvQkFBUSxHQUFSLENBQVksK0ZBQVo7QUFDSDs7O2lDQUVRLE8sRUFBUztBQUNoQixnQkFBSSxRQUFRLEtBQUssWUFBTCxDQUFrQixRQUFRLENBQTFCLEVBQTZCLFFBQVEsQ0FBckMsQ0FBWjtBQUNBLGdCQUFJLFFBQVEsb0JBQVUsS0FBSyxJQUFmLEVBQXFCLE1BQU0sQ0FBM0IsRUFBOEIsTUFBTSxDQUFwQyxFQUF1QyxJQUF2QyxFQUE2QyxRQUFRLElBQXJELENBQVo7QUFDQSxnQkFBRyxRQUFRLFFBQVIsSUFBb0IsS0FBSyxNQUFMLENBQVksRUFBbkMsRUFBdUM7QUFDbkMscUJBQUssTUFBTCxDQUFZLGNBQVosQ0FBMkIsSUFBM0IsQ0FBZ0MsS0FBaEM7QUFDSCxhQUZELE1BRU87QUFDSCxxQkFBSyxRQUFMLENBQWMsY0FBZCxDQUE2QixJQUE3QixDQUFrQyxLQUFsQztBQUNIO0FBQ0QsaUJBQUssSUFBTCxDQUFVLFVBQVYsQ0FBcUIsR0FBckIsQ0FBeUIsS0FBekI7QUFDRDs7O29DQUVXLE8sRUFBUztBQUNuQixnQkFBSSxRQUFRLEtBQUssWUFBTCxDQUFrQixRQUFRLEtBQVIsQ0FBYyxDQUFoQyxFQUFtQyxRQUFRLEtBQVIsQ0FBYyxDQUFqRCxDQUFaO0FBQ0EsZ0JBQUksTUFBTSx1QkFBYSxLQUFLLElBQWxCLEVBQXdCLE1BQU0sQ0FBOUIsRUFBaUMsTUFBTSxDQUF2QyxFQUEwQyxJQUExQyxFQUFnRCxRQUFRLElBQXhELEVBQThELFFBQVEsSUFBdEUsQ0FBVjtBQUNBLGdCQUFHLFFBQVEsUUFBUixJQUFvQixLQUFLLE1BQUwsQ0FBWSxFQUFuQyxFQUF1QztBQUNuQyxxQkFBSyxNQUFMLENBQVksYUFBWixDQUEwQixJQUExQixDQUErQixHQUEvQjtBQUNILGFBRkQsTUFFTztBQUNILHFCQUFLLFFBQUwsQ0FBYyxhQUFkLENBQTRCLElBQTVCLENBQWlDLEdBQWpDO0FBQ0g7QUFDRCxpQkFBSyxJQUFMLENBQVUsVUFBVixDQUFxQixHQUFyQixDQUF5QixHQUF6QjtBQUNEOzs7c0NBRWEsSSxFQUFNO0FBQ2xCLGdCQUFJLFFBQVEsSUFBWjtBQUNBLGdCQUFJLFdBQVcsSUFBZjtBQUNBLGdCQUFJLFFBQVEsS0FBSyxZQUFMLENBQWtCLEtBQUssQ0FBdkIsRUFBMEIsS0FBSyxDQUEvQixDQUFaO0FBQ0EsaUJBQUssSUFBSSxDQUFULElBQWMsS0FBSyxNQUFMLENBQVksY0FBMUIsRUFBMEM7QUFDdEMsb0JBQUksS0FBSyxNQUFMLENBQVksY0FBWixDQUEyQixDQUEzQixFQUE4QixJQUE5QixJQUFzQyxLQUFLLElBQS9DLEVBQXFEO0FBQ2pELCtCQUFXLEtBQUssR0FBTCxDQUFTLEtBQUssTUFBTCxDQUFZLGNBQVosQ0FBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsR0FBa0MsTUFBTSxDQUF4QyxHQUE0QyxLQUFLLE1BQUwsQ0FBWSxjQUFaLENBQTJCLENBQTNCLEVBQThCLENBQTFFLEdBQThFLE1BQU0sQ0FBN0YsRUFBZ0csT0FBaEcsQ0FBd0csQ0FBeEcsQ0FBWDtBQUNBLDRCQUFRLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxLQUFkLENBQW9CLEtBQUssTUFBTCxDQUFZLGNBQVosQ0FBMkIsQ0FBM0IsQ0FBcEIsRUFBbUQsRUFBbkQsQ0FBdUQsRUFBQyxHQUFFLE1BQU0sQ0FBVCxFQUFZLEdBQUUsTUFBTSxDQUFwQixFQUF2RCxFQUFnRixXQUFTLEVBQXpGLEVBQThGLE9BQU8sTUFBUCxDQUFjLEtBQWQsQ0FBb0IsR0FBbEgsRUFBdUgsSUFBdkgsQ0FBUjtBQUNBO0FBQ0E7QUFDSDtBQUNKO0FBQ0QsaUJBQUssSUFBSSxDQUFULElBQWMsS0FBSyxRQUFMLENBQWMsY0FBNUIsRUFBNEM7QUFDeEMsb0JBQUksS0FBSyxRQUFMLENBQWMsY0FBZCxDQUE2QixDQUE3QixFQUFnQyxJQUFoQyxJQUF3QyxLQUFLLElBQWpELEVBQXVEO0FBQ25ELCtCQUFXLEtBQUssR0FBTCxDQUFTLEtBQUssUUFBTCxDQUFjLGNBQWQsQ0FBNkIsQ0FBN0IsRUFBZ0MsQ0FBaEMsR0FBb0MsTUFBTSxDQUExQyxHQUE4QyxLQUFLLFFBQUwsQ0FBYyxjQUFkLENBQTZCLENBQTdCLEVBQWdDLENBQTlFLEdBQWtGLE1BQU0sQ0FBakcsRUFBb0csT0FBcEcsQ0FBNEcsQ0FBNUcsQ0FBWDtBQUNBLDRCQUFRLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxLQUFkLENBQW9CLEtBQUssUUFBTCxDQUFjLGNBQWQsQ0FBNkIsQ0FBN0IsQ0FBcEIsRUFBcUQsRUFBckQsQ0FBeUQsRUFBQyxHQUFFLE1BQU0sQ0FBVCxFQUFZLEdBQUUsTUFBTSxDQUFwQixFQUF6RCxFQUFrRixXQUFTLEVBQTNGLEVBQWdHLE9BQU8sTUFBUCxDQUFjLEtBQWQsQ0FBb0IsR0FBcEgsRUFBeUgsSUFBekgsQ0FBUjtBQUNBO0FBQ0E7QUFDSDtBQUNKO0FBQ0Y7OztxQ0FFWSxJLEVBQU07QUFDakIsZ0JBQUksUUFBUSxJQUFaO0FBQ0EsZ0JBQUksV0FBVyxJQUFmO0FBQ0EsZ0JBQUksUUFBUSxLQUFLLFlBQUwsQ0FBa0IsS0FBSyxDQUF2QixFQUEwQixLQUFLLENBQS9CLENBQVo7QUFDQSxpQkFBSyxJQUFJLENBQVQsSUFBYyxLQUFLLE1BQUwsQ0FBWSxhQUExQixFQUF5QztBQUNyQyxvQkFBSSxLQUFLLE1BQUwsQ0FBWSxhQUFaLENBQTBCLENBQTFCLEVBQTZCLElBQTdCLElBQXFDLEtBQUssSUFBOUMsRUFBb0Q7QUFDaEQsK0JBQVcsS0FBSyxHQUFMLENBQVMsS0FBSyxNQUFMLENBQVksYUFBWixDQUEwQixDQUExQixFQUE2QixDQUE3QixHQUFpQyxNQUFNLENBQXZDLEdBQTJDLEtBQUssTUFBTCxDQUFZLGFBQVosQ0FBMEIsQ0FBMUIsRUFBNkIsQ0FBeEUsR0FBNEUsTUFBTSxDQUEzRixFQUE4RixPQUE5RixDQUFzRyxDQUF0RyxDQUFYO0FBQ0EsNEJBQVEsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLEtBQWQsQ0FBb0IsS0FBSyxNQUFMLENBQVksYUFBWixDQUEwQixDQUExQixDQUFwQixFQUFrRCxFQUFsRCxDQUFzRCxFQUFDLEdBQUUsTUFBTSxDQUFULEVBQVksR0FBRSxNQUFNLENBQXBCLEVBQXRELEVBQStFLFdBQVMsRUFBeEYsRUFBNkYsT0FBTyxNQUFQLENBQWMsS0FBZCxDQUFvQixHQUFqSCxFQUFzSCxJQUF0SCxDQUFSO0FBQ0E7QUFDQTtBQUNIO0FBQ0o7QUFDRCxpQkFBSyxJQUFJLENBQVQsSUFBYyxLQUFLLFFBQUwsQ0FBYyxhQUE1QixFQUEyQztBQUN2QyxvQkFBSSxLQUFLLFFBQUwsQ0FBYyxhQUFkLENBQTRCLENBQTVCLEVBQStCLElBQS9CLElBQXVDLEtBQUssSUFBaEQsRUFBc0Q7QUFDbEQsK0JBQVcsS0FBSyxHQUFMLENBQVMsS0FBSyxRQUFMLENBQWMsYUFBZCxDQUE0QixDQUE1QixFQUErQixDQUEvQixHQUFtQyxNQUFNLENBQXpDLEdBQTZDLEtBQUssUUFBTCxDQUFjLGFBQWQsQ0FBNEIsQ0FBNUIsRUFBK0IsQ0FBNUUsR0FBZ0YsTUFBTSxDQUEvRixFQUFrRyxPQUFsRyxDQUEwRyxDQUExRyxDQUFYO0FBQ0EsNEJBQVEsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLEtBQWQsQ0FBb0IsS0FBSyxRQUFMLENBQWMsYUFBZCxDQUE0QixDQUE1QixDQUFwQixFQUFvRCxFQUFwRCxDQUF3RCxFQUFDLEdBQUUsTUFBTSxDQUFULEVBQVksR0FBRSxNQUFNLENBQXBCLEVBQXhELEVBQWlGLFdBQVMsRUFBMUYsRUFBK0YsT0FBTyxNQUFQLENBQWMsS0FBZCxDQUFvQixHQUFuSCxFQUF3SCxJQUF4SCxDQUFSO0FBQ0E7QUFDQTtBQUNIO0FBQ0o7QUFDRjs7O3dDQUVlLEksRUFBTTtBQUNsQixnQkFBSSxtQkFBbUIsSUFBdkI7QUFDQSxnQkFBSSxNQUFNLE9BQU4sQ0FBYyxLQUFLLE9BQW5CLE1BQWdDLEtBQXBDLEVBQTJDO0FBQ3ZDLHFCQUFLLE9BQUwsR0FBZSxDQUFDLEtBQUssT0FBTixDQUFmO0FBQ0g7O0FBRUQsZ0JBQUksS0FBSyxRQUFMLENBQWMsY0FBZCxDQUE2QixNQUE3QixLQUF3QyxDQUF4QyxJQUE2QyxLQUFLLE9BQUwsQ0FBYSxNQUFiLEtBQXdCLENBQXpFLEVBQTRFO0FBQzFFLHFCQUFLLElBQUksQ0FBVCxJQUFjLEtBQUssT0FBbkIsRUFBNEI7QUFDeEIseUJBQUssUUFBTCxDQUFjLEtBQUssT0FBTCxDQUFhLENBQWIsQ0FBZDtBQUNIO0FBQ0YsYUFKRCxNQUlPO0FBQ0wscUJBQUssSUFBSSxDQUFULElBQWMsS0FBSyxRQUFMLENBQWMsY0FBNUIsRUFBNEM7QUFDeEMsdUNBQW1CLEtBQUssUUFBTCxDQUFjLGNBQWQsQ0FBNkIsQ0FBN0IsQ0FBbkI7QUFDQSx5QkFBSyxJQUFJLENBQVQsSUFBYyxLQUFLLE9BQW5CLEVBQTRCO0FBQ3hCLDRCQUFJLGlCQUFpQixJQUFqQixJQUF5QixLQUFLLE9BQUwsQ0FBYSxDQUFiLEVBQWdCLElBQTdDLEVBQW1EO0FBQy9DLGlDQUFLLGFBQUwsQ0FBbUIsS0FBSyxPQUFMLENBQWEsQ0FBYixDQUFuQjtBQUNIO0FBQ0o7QUFDSjtBQUNGO0FBQ0o7Ozt3Q0FFZSxJLEVBQU07QUFDbEIsZ0JBQUksa0JBQUo7QUFDQSxpQkFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLEtBQUssTUFBTCxDQUFZLGNBQVosQ0FBMkIsTUFBL0MsRUFBdUQsR0FBdkQsRUFBNEQ7QUFDeEQsb0JBQUksS0FBSyxNQUFMLENBQVksY0FBWixDQUEyQixDQUEzQixFQUE4QixJQUE5QixJQUFzQyxLQUFLLElBQS9DLEVBQXFEO0FBQ2pELHlDQUFxQixLQUFLLE1BQUwsQ0FBWSxjQUFaLENBQTJCLENBQTNCLENBQXJCO0FBQ0EseUJBQUssTUFBTCxDQUFZLGNBQVosQ0FBMkIsTUFBM0IsQ0FBa0MsQ0FBbEMsRUFBb0MsQ0FBcEM7QUFDQSx1Q0FBbUIsT0FBbkI7QUFDQSwyQkFBTyxJQUFQO0FBQ0g7QUFDSjtBQUNELG1CQUFPLEtBQVA7QUFDSDs7OzZDQUVtQjtBQUNsQixpQkFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLEtBQUssSUFBTCxDQUFVLFVBQVYsQ0FBcUIsUUFBckIsQ0FBOEIsTUFBbEQsRUFBMEQsR0FBMUQsRUFBK0Q7QUFDM0Qsb0JBQUcsS0FBSyxJQUFMLENBQVUsVUFBVixDQUFxQixRQUFyQixDQUE4QixDQUE5QixFQUFpQyxXQUFqQyxtQkFBSCxFQUF5RDtBQUNyRCx5QkFBSyxJQUFMLENBQVUsVUFBVixDQUFxQixRQUFyQixDQUE4QixDQUE5QixFQUFpQyxPQUFqQztBQUNBO0FBQ0g7QUFDSjtBQUNGOzs7cUNBRVksTyxFQUFTO0FBQ3BCLGlCQUFLLElBQUksQ0FBVCxJQUFjLE9BQWQsRUFBdUI7QUFDbkIscUJBQUssTUFBTCxDQUFZLENBQVosSUFBaUIsUUFBUSxDQUFSLENBQWpCO0FBQ0g7QUFDRjs7O3dDQUVlO0FBQ2QsZ0JBQUksYUFBYSxJQUFqQjtBQUNBLGdCQUFJLFdBQVcsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLFFBQWQsQ0FBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBZjtBQUNBO0FBQ0EscUJBQVMsU0FBVCxDQUFtQixRQUFuQixFQUE2QixDQUE3QjtBQUNBLHFCQUFTLGVBQVQsQ0FBeUIsR0FBekIsRUFBOEIsR0FBOUIsRUFBbUMsS0FBSyxTQUFMLEdBQWUsQ0FBbEQsRUFBcUQsS0FBSyxVQUFMLEdBQWdCLENBQXJFLEVBQXdFLEVBQXhFOztBQUVBLGlCQUFLLElBQUksQ0FBVCxJQUFjLEtBQUssU0FBbkIsRUFBOEI7QUFDMUIscUJBQUssSUFBSSxDQUFULElBQWMsS0FBSyxTQUFMLENBQWUsQ0FBZixDQUFkLEVBQWlDO0FBQzdCLHdCQUFHLEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsU0FBckIsSUFBa0MsS0FBSyxNQUFMLENBQVksRUFBOUMsSUFBb0QsS0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixRQUFyQixJQUFpQyxXQUF4RixFQUFxRztBQUNqRyw0QkFBSSxJQUFJLENBQUosSUFBUyxJQUFJLEVBQWpCLEVBQXFCO0FBQ2pCLHlDQUFhLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxNQUFkLENBQXFCLEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsR0FBd0IsS0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixLQUFyQixHQUEyQixDQUF4RSxFQUE0RSxLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLENBQXJCLEdBQXdCLEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsS0FBckIsR0FBMkIsQ0FBL0gsRUFBbUksU0FBUyxlQUFULEVBQW5JLENBQWI7QUFDQSx1Q0FBVyxLQUFYLEdBQW1CLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFjLEVBQXpCLElBQTZCLEVBQWhEO0FBQ0EsdUNBQVcsTUFBWCxDQUFrQixLQUFsQixDQUF3QixHQUF4QjtBQUNBLG9DQUFRLEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsUUFBN0I7QUFDSSxxQ0FBSyxRQUFMO0FBQ0MsK0NBQVcsSUFBWCxHQUFrQixRQUFsQjtBQUNBO0FBQ0QscUNBQUssUUFBTDtBQUNDLCtDQUFXLElBQVgsR0FBa0IsUUFBbEI7QUFDQTtBQUNELHFDQUFLLFFBQUw7QUFDQywrQ0FBVyxJQUFYLEdBQWtCLFFBQWxCO0FBQ0E7QUFDRCxxQ0FBSyxPQUFMO0FBQ0MsK0NBQVcsSUFBWCxHQUFrQixRQUFsQjtBQUNBO0FBQ0QscUNBQUssU0FBTDtBQUNDLCtDQUFXLElBQVgsR0FBa0IsUUFBbEI7QUFDQTtBQUNELHFDQUFLLFVBQUw7QUFDQywrQ0FBVyxJQUFYLEdBQWtCLFFBQWxCO0FBQ0E7QUFDRCxxQ0FBSyxTQUFMO0FBQ0MsK0NBQVcsSUFBWCxHQUFrQixRQUFsQjtBQUNBO0FBQ0Q7QUFDQztBQXZCTDtBQXlCQSxpQ0FBSyxJQUFMLENBQVUsVUFBVixDQUFxQixHQUFyQixDQUF5QixVQUF6QjtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ0QscUJBQVMsT0FBVDtBQUNEOzs7d0NBRWUsTyxFQUFTLEksRUFBTSxLLEVBQU87QUFDcEMsaUJBQUssVUFBTCxHQUFrQixLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE9BQWhCLENBQXdCLFlBQXhCLENBQWxCOztBQUVBLGlCQUFLLG9CQUFMLEdBQTRCLEVBQUMsR0FBRSxDQUFILEVBQU0sR0FBRSxDQUFSLEVBQTVCOztBQUVBLGdCQUFJLENBQUosRUFBTyxDQUFQOztBQUVBLGlCQUFLLFlBQUwsR0FBb0IsS0FBSyxTQUFMLEdBQWlCLEtBQUssSUFBTCxDQUFVLFVBQVYsQ0FBcUIsTUFBckIsR0FBNEIsTUFBakU7QUFDQSxpQkFBSyxVQUFMLEdBQWtCLEtBQUssSUFBTCxDQUFVLFVBQVYsQ0FBcUIsS0FBckIsR0FBMkIsRUFBN0M7QUFDQSxpQkFBSyxXQUFMLEdBQW9CLEtBQUssSUFBTCxDQUFVLFVBQVYsQ0FBcUIsS0FBckIsR0FBMkIsT0FBL0M7QUFDQSxpQkFBSyxTQUFMLEdBQWlCLEtBQUssVUFBTCxHQUFrQixLQUFLLElBQUwsQ0FBVSxVQUFWLENBQXFCLEtBQXJCLEdBQTJCLEVBQTlEO0FBQ0EsaUJBQUssT0FBTCxHQUFlLENBQUMsS0FBSyxJQUFMLENBQVUsVUFBVixDQUFxQixLQUFyQixJQUE4QixLQUFLLFVBQUwsR0FBa0IsS0FBSyxXQUFyRCxJQUFxRSxLQUFLLFNBQUwsR0FBaUIsRUFBdkYsSUFBNEYsRUFBM0c7O0FBRUE7QUFDQTs7QUFFQSxpQkFBSyxvQkFBTCxDQUEwQixDQUExQixHQUE4QixNQUFNLENBQU4sR0FBVSxLQUFLLFVBQTdDO0FBQ0EsaUJBQUssb0JBQUwsQ0FBMEIsQ0FBMUIsR0FBOEIsTUFBTSxDQUFOLEdBQVUsS0FBSyxTQUE3Qzs7QUFFQSxnQkFBSSxXQUFXLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxRQUFkLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLENBQWY7QUFDQTtBQUNBLHFCQUFTLFNBQVQsQ0FBbUIsUUFBbkIsRUFBNkIsQ0FBN0I7QUFDQSxxQkFBUyxRQUFULENBQWtCLEdBQWxCLEVBQXVCLEdBQXZCLEVBQTRCLEtBQUssU0FBakMsRUFBNEMsS0FBSyxVQUFqRDs7QUFFQSxpQkFBSyxJQUFJLFNBQVMsQ0FBbEIsRUFBcUIsU0FBUyxPQUE5QixFQUF1QyxRQUF2QyxFQUFpRDtBQUM3QyxxQkFBSyxJQUFJLE1BQU0sQ0FBZixFQUFrQixNQUFNLElBQXhCLEVBQThCLEtBQTlCLEVBQXFDOztBQUVqQyx3QkFBSSxLQUFLLG9CQUFMLENBQTBCLENBQTFCLEdBQStCLEtBQUssU0FBTCxHQUFpQixNQUFoRCxJQUEyRCxLQUFLLE9BQUwsR0FBZSxNQUFmLEdBQXdCLENBQW5GLENBQUo7QUFDQSx3QkFBSSxLQUFLLG9CQUFMLENBQTBCLENBQTFCLEdBQStCLEtBQUssVUFBTCxHQUFrQixHQUFqRCxJQUF5RCxLQUFLLE9BQUwsR0FBZSxHQUFmLEdBQXFCLENBQTlFLENBQUo7QUFDQTs7QUFFQSx3QkFBSSxjQUFjLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxNQUFkLENBQXFCLENBQXJCLEVBQXdCLENBQXhCLEVBQTJCLFNBQVMsZUFBVCxFQUEzQixDQUFsQjtBQUNBLHlCQUFLLElBQUwsQ0FBVSxVQUFWLENBQXFCLEdBQXJCLENBQXlCLFdBQXpCO0FBQ0EsZ0NBQVksS0FBWixHQUFvQixDQUFwQixDQVJpQyxDQVFWO0FBQ3ZCLGdDQUFZLFlBQVosR0FBMkIsSUFBM0I7QUFDQSxnQ0FBWSxNQUFaLENBQW1CLFdBQW5CLENBQStCLEdBQS9CLENBQW1DLEtBQUssV0FBeEMsRUFBcUQsSUFBckQ7O0FBRUEsd0JBQUksT0FBTyxLQUFLLFNBQUwsQ0FBZSxNQUFmLENBQVAsSUFBaUMsV0FBckMsRUFDSSxLQUFLLFNBQUwsQ0FBZSxNQUFmLElBQXlCLEVBQXpCOztBQUVKLHlCQUFLLFNBQUwsQ0FBZSxNQUFmLEVBQXVCLEdBQXZCLElBQThCLFdBQTlCO0FBQ0g7QUFDSjs7QUFFRCxxQkFBUyxPQUFUOztBQUVBLGlCQUFLLElBQUksR0FBVCxJQUFnQixLQUFLLFVBQXJCLEVBQWlDO0FBQzdCLG9CQUFJLENBQUMsS0FBSyxVQUFMLENBQWdCLGNBQWhCLENBQStCLEdBQS9CLENBQUwsRUFBMEM7O0FBRTFDLG9CQUFJLE1BQU0sS0FBSyxVQUFMLENBQWdCLEdBQWhCLENBQVY7QUFDQSxxQkFBSyxJQUFJLElBQVQsSUFBaUIsR0FBakIsRUFBc0I7QUFDbEI7QUFDQSx3QkFBRyxDQUFDLElBQUksY0FBSixDQUFtQixJQUFuQixDQUFKLEVBQThCOztBQUU5Qix3QkFBSSxnQkFBZ0IsSUFBSSxJQUFKLEVBQVUsU0FBVixDQUFvQixNQUF4QztBQUNBLHlCQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksYUFBcEIsRUFBbUMsR0FBbkMsRUFBd0M7O0FBRXBDLDRCQUFJLFNBQVMsSUFBSSxJQUFKLEVBQVUsU0FBVixDQUFvQixDQUFwQixFQUF1QixLQUF2QixDQUE2QixHQUE3QixDQUFiO0FBQ0EsNEJBQUksT0FBTyxDQUFQLENBQUo7QUFDQSw0QkFBSSxPQUFPLENBQVAsQ0FBSjs7QUFFQSw2QkFBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixXQUFyQixHQUFtQyxLQUFuQztBQUNBLDZCQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLFlBQXJCLEdBQW9DLEtBQXBDO0FBQ0EsNkJBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsS0FBckIsR0FBNkIsQ0FBN0I7QUFDQSw2QkFBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixLQUFyQixHQUE2QixDQUE3QjtBQUNBLDZCQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLFFBQXJCLEdBQWdDLElBQUksSUFBSixFQUFVLElBQTFDOztBQUVBLDRCQUFJLE9BQU8sS0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixDQUFQLElBQStCLFdBQW5DLEVBQ0ksS0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixRQUFyQixHQUFnQyxJQUFJLElBQUosRUFBVSxJQUExQyxDQURKLEtBR0ksUUFBUSxHQUFSLENBQVksSUFBSSxHQUFKLEdBQVUsQ0FBVixHQUFjLGFBQTFCOztBQUVKLDRCQUFHLElBQUksQ0FBUCxFQUNJLEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsU0FBckIsR0FBaUMsQ0FBakMsQ0FESixLQUVLLElBQUksSUFBRSxFQUFOLEVBQ0QsS0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixTQUFyQixHQUFpQyxDQUFqQzs7QUFFSiw0QkFBSSxPQUFPLElBQUksSUFBSixFQUFVLFVBQWpCLElBQStCLFdBQW5DLEVBQWdEO0FBQzVDLGlDQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLGNBQXJCLEdBQXNDLElBQUksSUFBSixFQUFVLFVBQWhEO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFDRjs7O3FDQUVZLEMsRUFBRyxDLEVBQUc7QUFDakIsZ0JBQUksUUFBUSxDQUFaO0FBQ0EsZ0JBQUksUUFBUSxDQUFaOztBQUVBLGlCQUFLLElBQUksR0FBVCxJQUFnQixLQUFLLFNBQXJCLEVBQWdDO0FBQzVCLHFCQUFLLElBQUksR0FBVCxJQUFnQixLQUFLLFNBQUwsQ0FBZSxHQUFmLENBQWhCLEVBQXFDO0FBQ2pDLHdCQUFJLE1BQU0sS0FBSyxTQUFMLENBQWUsR0FBZixFQUFvQixHQUFwQixDQUFWO0FBQ0Esd0JBQUcsSUFBSSxJQUFJLENBQVIsSUFBYSxJQUFJLElBQUksQ0FBSixHQUFRLElBQUksS0FBaEMsRUFDSSxRQUFRLFNBQVMsR0FBVCxDQUFSOztBQUVKLHdCQUFHLElBQUksSUFBSSxDQUFSLElBQWEsSUFBSSxJQUFJLENBQUosR0FBUSxJQUFJLE1BQWhDLEVBQ0ksUUFBUSxTQUFTLEdBQVQsQ0FBUjtBQUNQO0FBQ0o7QUFDRCxtQkFBTyxFQUFDLEdBQUUsS0FBSCxFQUFVLEdBQUUsS0FBWixFQUFQO0FBQ0Q7OztxQ0FFWSxDLEVBQUcsQyxFQUFHO0FBQ2pCLGdCQUFJLFVBQVUsS0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixDQUFkO0FBQ0EsbUJBQU8sRUFBQyxHQUFFLFFBQVEsQ0FBUixHQUFZLFFBQVEsS0FBUixHQUFjLENBQTdCLEVBQWdDLEdBQUUsUUFBUSxDQUFSLEdBQVksUUFBUSxNQUFSLEdBQWUsQ0FBN0QsRUFBUDtBQUNEOzs7b0NBRVcsRyxFQUFLO0FBQ2IsaUJBQUssU0FBTDtBQUNBLGlCQUFLLElBQUwsQ0FBVSxNQUFWLENBQWlCLFNBQWpCLENBQTJCLEVBQUMsT0FBTyxhQUFSLEVBQXVCLEdBQUUsU0FBUyxJQUFJLEtBQWIsQ0FBekIsRUFBOEMsR0FBRSxTQUFTLElBQUksS0FBYixDQUFoRCxFQUEzQjtBQUNGOztBQUVFO0FBQ0g7OztrQ0FFUyxXLEVBQWEsSyxFQUFPO0FBQzVCLGlCQUFLLElBQUksQ0FBVCxJQUFjLFdBQWQsRUFBMkI7QUFDdkIscUJBQUssU0FBTCxDQUFlLFlBQVksQ0FBWixFQUFlLENBQTlCLEVBQWlDLFlBQVksQ0FBWixFQUFlLENBQWhELEVBQW1ELEtBQW5ELEdBQTJELEdBQTNEO0FBQ0Esb0JBQUcsS0FBSCxFQUFVO0FBQ04seUJBQUssU0FBTCxDQUFlLFlBQVksQ0FBWixFQUFlLENBQTlCLEVBQWlDLFlBQVksQ0FBWixFQUFlLENBQWhELEVBQW1ELElBQW5ELEdBQTBELEtBQTFEO0FBQ0gsaUJBRkQsTUFFTztBQUNILHlCQUFLLFNBQUwsQ0FBZSxZQUFZLENBQVosRUFBZSxDQUE5QixFQUFpQyxZQUFZLENBQVosRUFBZSxDQUFoRCxFQUFtRCxJQUFuRCxHQUEwRCxRQUExRDtBQUNIO0FBQ0QscUJBQUssVUFBTCxDQUFnQixJQUFoQixDQUFxQixFQUFDLEdBQUUsWUFBWSxDQUFaLEVBQWUsQ0FBbEIsRUFBb0IsR0FBRSxZQUFZLENBQVosRUFBZSxDQUFyQyxFQUFyQjtBQUNIO0FBQ0Y7OztrQ0FFUyxTLEVBQVc7QUFDbkIsZ0JBQUcsQ0FBQyxTQUFKLEVBQWU7QUFDWCxxQkFBSyxJQUFJLENBQVQsSUFBYyxLQUFLLFVBQW5CLEVBQStCO0FBQzNCLHlCQUFLLFNBQUwsQ0FBZSxLQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbEMsRUFBcUMsS0FBSyxVQUFMLENBQWdCLENBQWhCLEVBQW1CLENBQXhELEVBQTJELEtBQTNELEdBQW1FLENBQW5FO0FBQ0g7QUFDRCxxQkFBSyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0g7QUFDRjs7O21DQUVVLEksRUFBTTs7QUFFZixnQkFBSSxjQUFjLEtBQUssU0FBTCxDQUFlLEtBQUssQ0FBcEIsRUFBdUIsS0FBSyxDQUE1QixDQUFsQjs7QUFFQSx3QkFBWSxJQUFaLEdBQW1CLFFBQW5CO0FBQ0Esd0JBQVksS0FBWixHQUFvQixHQUFwQjtBQUNBLHdCQUFZLFdBQVosR0FBMEIsSUFBMUI7O0FBRUEsZ0JBQUksT0FBTyxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsTUFBZCxDQUFxQixZQUFZLENBQWpDLEVBQW9DLFlBQVksQ0FBWixHQUFnQixZQUFZLE1BQVosR0FBbUIsQ0FBdkUsRUFBMkUsTUFBM0UsQ0FBWDtBQUNBLGlCQUFLLElBQUwsQ0FBVSxVQUFWLENBQXFCLEdBQXJCLENBQXlCLElBQXpCO0FBQ0EsaUJBQUssS0FBTCxHQUFhLEdBQWI7QUFDQSxpQkFBSyxNQUFMLENBQVksR0FBWixDQUFnQixHQUFoQixFQUFvQixHQUFwQjtBQUNBLGlCQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBb0IsTUFBcEI7QUFDQSxpQkFBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLE1BQXJCLEVBQTZCLEVBQTdCLEVBQWlDLEtBQWpDLEVBQXdDLElBQXhDO0FBRUQ7OztvQ0FFVztBQUNWLGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLEtBQWhCLENBQXNCLE1BQXRCO0FBQ0Q7Ozs7OztrQkFJWSxROzs7Ozs7Ozs7OztBQ2hZZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFBc0M7O0lBRWhDLEk7O0FBRUo7QUFDQSxrQkFBWSxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLGFBQUssR0FBTCxHQUFXLHlCQUFYO0FBQ0EsYUFBSyxPQUFMLEdBQWUsS0FBSyxHQUFMLENBQVMsWUFBeEI7QUFDQSxhQUFLLElBQUwsR0FBWSxJQUFaOztBQUVBLGFBQUssU0FBTCxHQUFpQixFQUFqQjtBQUNBLGFBQUssZUFBTCxHQUF1QixFQUF2QjtBQUNEOzs7O2tDQUVTO0FBQ1IsaUJBQUssSUFBSSxDQUFULElBQWMsS0FBSyxTQUFuQixFQUE4QjtBQUMxQixxQkFBSyxJQUFMLENBQVUsUUFBVixDQUFtQixTQUFuQixDQUE2QixLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLHNCQUFsQixDQUF5QyxDQUF0RSxFQUF5RSxLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLHNCQUFsQixDQUF5QyxDQUFsSCxFQUFxSCxZQUFySCxHQUFvSSxJQUFwSTtBQUNIO0FBQ0Y7O0FBRUQ7Ozs7b0NBQ1ksSSxFQUFNO0FBQ2hCLG1CQUFPLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsSUFBbEIsQ0FBUDtBQUNEOzs7aUNBRVEsSSxFQUFNLEssRUFBTztBQUNwQixnQkFBSSxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsS0FBMEIsS0FBOUIsRUFDSSxPQUFPLElBQVA7O0FBRUosbUJBQU8sS0FBUDtBQUNEOzs7b0NBRVcsUSxFQUFVLFMsRUFBVyxTLEVBQVcsVSxFQUFZLENBQ3ZEOzs7K0JBRU0sSSxFQUFNLEssRUFBTztBQUNsQixtQkFBTyxLQUFLLEdBQUwsQ0FBUyxHQUFULENBQWEsSUFBYixFQUFtQixLQUFuQixDQUFQO0FBQ0Q7OztrQ0FFUyxJLEVBQU0sSyxFQUFPO0FBQ3JCLG1CQUFPLEtBQUssR0FBTCxDQUFTLE1BQVQsQ0FBZ0IsSUFBaEIsRUFBc0IsS0FBdEIsQ0FBUDtBQUNEOzs7aUNBRVEsQyxFQUFHLEMsRUFBRyxLLEVBQU87QUFDcEIsZ0JBQUksUUFBUSxLQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFlBQW5CLENBQWdDLENBQWhDLEVBQWtDLENBQWxDLENBQVo7QUFDQSxnQkFBSSxRQUFRLG9CQUFVLEtBQUssSUFBZixFQUFvQixNQUFNLENBQTFCLEVBQTRCLE1BQU0sQ0FBbEMsQ0FBWjtBQUNBLGtCQUFNLHNCQUFOLENBQTZCLENBQTdCLEdBQWlDLENBQWpDO0FBQ0Esa0JBQU0sc0JBQU4sQ0FBNkIsQ0FBN0IsR0FBaUMsQ0FBakM7O0FBRUEsaUJBQUssSUFBSSxDQUFULElBQWMsS0FBZCxFQUFxQjtBQUNqQixzQkFBTSxDQUFOLElBQVcsTUFBTSxDQUFOLENBQVg7QUFDSDtBQUNELGlCQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLEtBQXBCO0FBQ0EsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsUUFBaEIsQ0FBeUIsS0FBekI7QUFDRDs7O2lDQUVRLEssRUFBTztBQUNkLGlCQUFLLElBQUksQ0FBVCxJQUFjLEtBQUssU0FBbkIsRUFBOEI7QUFDMUIsb0JBQUcsS0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixzQkFBbEIsQ0FBeUMsQ0FBekMsSUFBOEMsTUFBTSxDQUFwRCxJQUF5RCxLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLHNCQUFsQixDQUF5QyxDQUF6QyxJQUE4QyxNQUFNLENBQWhILEVBQWtIO0FBQzlHLDJCQUFPLEtBQUssU0FBTCxDQUFlLENBQWYsQ0FBUDtBQUNIO0FBQ0o7QUFDRjs7O2tDQUVTLEssRUFBTztBQUNmLGdCQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFaO0FBQ0EsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsV0FBaEIsQ0FBNEIsS0FBNUI7O0FBRUEsZ0JBQUksUUFBUSxLQUFLLFNBQUwsQ0FBZSxPQUFmLENBQXVCLEtBQXZCLENBQVo7QUFDQSxpQkFBSyxTQUFMLENBQWUsTUFBZixDQUFzQixLQUF0QixFQUE0QixDQUE1Qjs7QUFFQSxrQkFBTSxNQUFOO0FBQ0Q7OzsyQ0FFa0I7QUFDakI7QUFDQSxpQkFBSSxJQUFJLENBQVIsSUFBYSxLQUFLLFNBQWxCLEVBQTZCO0FBQ3pCLG9CQUFJLFFBQVEsS0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixhQUFsQixFQUFaOztBQUVBLG9CQUFHLFVBQVUsS0FBYixFQUFvQjtBQUNoQix5QkFBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixXQUFsQjtBQUNIO0FBQ0o7QUFDRjs7O3VDQUVjO0FBQ2I7QUFDQSxnQkFBSSxjQUFjLEtBQWxCO0FBQ0EsaUJBQUksSUFBSSxDQUFSLElBQWEsS0FBSyxTQUFsQixFQUE2QjtBQUN6QixvQkFBRyxLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLFFBQXJCLEVBQStCO0FBQzNCLGtDQUFjLElBQWQ7QUFDQTtBQUNIO0FBQ0o7QUFDRCxtQkFBTyxXQUFQO0FBQ0Q7OztxQ0FFWSxNLEVBQVE7QUFDbkIsZ0JBQUksUUFBUSxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQVo7QUFDQSxnQkFBRyxDQUFDLEtBQUosRUFDSSxPQUFPLEtBQVA7QUFDSixnQkFBRyxDQUFDLE1BQU0sUUFBVixFQUNJLE9BQU8sS0FBUDs7QUFFSixnQkFBSSxpQkFBaUIsS0FBSyxlQUFMLENBQXFCLE9BQXJCLENBQTZCLEtBQTdCLENBQXJCO0FBQ0EsZ0JBQUcsa0JBQWtCLENBQXJCLEVBQXVCO0FBQ25CLHNCQUFNLFlBQU47QUFDQSxxQkFBSyxlQUFMLENBQXFCLE1BQXJCLENBQTRCLGNBQTVCLEVBQTRDLENBQTVDO0FBQ0gsYUFIRCxNQUdPO0FBQ0gsc0JBQU0sV0FBTjtBQUNBLHFCQUFLLGVBQUwsQ0FBcUIsSUFBckIsQ0FBMEIsS0FBMUI7QUFDSDtBQUNGOzs7dUNBRWM7QUFDYixpQkFBSyxJQUFJLENBQVQsSUFBYyxLQUFLLGVBQW5CLEVBQW9DO0FBQ2hDLHFCQUFLLGVBQUwsQ0FBcUIsQ0FBckIsRUFBd0IsWUFBeEI7QUFDSDtBQUNELGlCQUFLLGVBQUwsR0FBdUIsRUFBdkI7QUFDRDs7OzJDQUVrQixNLEVBQVE7O0FBRXpCLGdCQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFaO0FBQ0EsZ0JBQUcsQ0FBQyxLQUFKLEVBQ0ksT0FBTyxLQUFQOztBQUVKLGlCQUFJLElBQUksQ0FBUixJQUFhLEtBQUssU0FBbEIsRUFBNkI7QUFDekIscUJBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsWUFBbEI7QUFDSDtBQUNELGlCQUFLLFVBQUwsR0FBa0IsTUFBTSxhQUFOLEVBQWxCO0FBQ0EsaUJBQUssYUFBTCxHQUFxQixLQUFyQjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFNBQW5CLENBQTZCLEtBQUssVUFBbEM7QUFDQSxtQkFBTyxJQUFQO0FBQ0Q7OzswQ0FFaUIsTSxFQUFRO0FBQ3hCLGlCQUFJLElBQUksQ0FBUixJQUFhLEtBQUssVUFBbEIsRUFBOEI7QUFDMUIsb0JBQUcsS0FBSyxVQUFMLENBQWdCLENBQWhCLEVBQW1CLEtBQW5CLElBQTRCLE9BQU8sQ0FBbkMsSUFBd0MsS0FBSyxVQUFMLENBQWdCLENBQWhCLEVBQW1CLEtBQW5CLElBQTRCLE9BQU8sQ0FBOUUsRUFBaUY7QUFDN0UseUJBQUssYUFBTCxDQUFtQixJQUFuQixDQUF3QixNQUF4QjtBQUNBLDJCQUFPLEtBQUssYUFBWjtBQUNBLDJCQUFPLEtBQUssVUFBWjtBQUNBLDJCQUFPLElBQVA7QUFDSDtBQUNKO0FBQ0QsbUJBQU8sS0FBUDtBQUNEOzs7Ozs7a0JBR1ksSTs7Ozs7OztJQ3hKVCxRLEdBRUYsa0JBQVksSUFBWixFQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixJQUF4QixFQUE4QjtBQUFBOztBQUMxQixTQUFLLFFBQUwsR0FBZ0IsT0FBTyxNQUFQLENBQWM7QUFDMUIsZ0JBQVEsQ0FEa0I7QUFFMUIsa0JBQVUsQ0FGZ0I7QUFHMUIsbUJBQVcsQ0FIZTtBQUkxQixnQkFBUTtBQUprQixLQUFkLENBQWhCOztBQU9BLFNBQUssQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLLENBQUwsR0FBUyxDQUFUO0FBQ0EsU0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUssSUFBTCxHQUFZLEtBQUssUUFBTCxDQUFjLEtBQUssV0FBTCxFQUFkLENBQVo7QUFFSCxDOztBQUlMLE9BQU8sT0FBUCxDQUFlLFFBQWYsR0FBMEIsUUFBMUI7Ozs7Ozs7OztJQ25CTSxTO0FBRUYsdUJBQVksSUFBWixFQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixJQUF4QixFQUE4QjtBQUFBOztBQUMxQixhQUFLLFFBQUwsR0FBZ0IsT0FBTyxNQUFQLENBQWM7QUFDMUIsbUJBQU8sQ0FEbUI7QUFFMUIsc0JBQVU7QUFGZ0IsU0FBZCxDQUFoQjs7QUFLQSxhQUFLLENBQUwsR0FBUyxDQUFUO0FBQ0EsYUFBSyxDQUFMLEdBQVMsQ0FBVDtBQUNBLGFBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxhQUFLLGNBQUwsR0FBc0IsS0FBdEI7QUFDQSxhQUFLLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxhQUFLLElBQUwsR0FBWSxLQUFLLFFBQUwsQ0FBYyxLQUFLLFdBQUwsRUFBZCxDQUFaOztBQUVBLGdCQUFRLElBQVI7QUFDSSxpQkFBSyxVQUFMO0FBQ0k7QUFDSixpQkFBSyxPQUFMO0FBQ0k7QUFDSjtBQUNJLHFCQUFLLElBQUwsR0FBWSxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQVo7QUFDQTtBQVBSO0FBU0g7Ozs7NkJBRUksQyxFQUFHLEMsRUFBRztBQUNQLGlCQUFLLENBQUwsR0FBUyxDQUFUO0FBQ0EsaUJBQUssQ0FBTCxHQUFTLENBQVQ7QUFDSDs7Ozs7O0FBR0wsT0FBTyxPQUFQLENBQWUsU0FBZixHQUEyQixTQUEzQjs7Ozs7Ozs7O0FDaENBLElBQUksWUFBWSxRQUFRLGFBQVIsRUFBdUIsU0FBdkM7QUFDQSxJQUFJLFdBQVcsUUFBUSxZQUFSLEVBQXNCLFFBQXJDO0FBQ0EsSUFBSSxXQUFXLFFBQVEsWUFBUixFQUFzQixRQUFyQzs7SUFHTSxNO0FBRUYsb0JBQVksUUFBWixFQUFzQixFQUF0QixFQUEwQixJQUExQixFQUFnQztBQUFBOztBQUM1QixhQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSxhQUFLLEVBQUwsR0FBVSxFQUFWLENBRjRCLENBRWQ7QUFDZCxhQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsYUFBSyxjQUFMLEdBQXNCLEVBQXRCO0FBQ0EsYUFBSyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsYUFBSyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsYUFBSyxZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsYUFBSyxrQkFBTCxHQUEwQixDQUExQjtBQUNBLGFBQUssU0FBTCxHQUFpQixFQUFqQjs7QUFFQSxhQUFLLHVCQUFMLEdBQStCLElBQS9CO0FBQ0EsYUFBSyxlQUFMLEdBQXVCLEVBQXZCO0FBQ0EsYUFBSyxrQkFBTCxHQUEwQixFQUExQjs7QUFFQSxhQUFLLGFBQUw7QUFDSDs7OztxQ0FFWSxJLEVBQU0sQyxFQUFHLEMsRUFBRyxJLEVBQU07QUFDM0IsZ0JBQUcsUUFBUSxPQUFSLElBQW1CLEtBQUssWUFBTCxDQUFrQixJQUFsQixFQUF3QixNQUF4QixHQUFpQyxLQUFLLGtCQUE1RCxFQUFnRjtBQUM1RSxvQkFBSSxZQUFZLElBQUksU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkIsSUFBN0IsQ0FBaEI7QUFDQSxxQkFBSyxjQUFMLENBQW9CLElBQXBCLENBQXlCLFNBQXpCO0FBQ0EsdUJBQU8sU0FBUDtBQUNIO0FBQ0QsbUJBQU8sS0FBUDtBQUNIOzs7d0NBRWUsUyxFQUFXLFEsRUFBVTtBQUNqQyxnQkFBSSxhQUFhLElBQWpCLEVBQXVCO0FBQ25CLHFCQUFLLGNBQUwsR0FBc0IsRUFBdEI7QUFDQTtBQUNIO0FBQ0o7OztxQ0FFWSxJLEVBQU07QUFDZixnQkFBSSxjQUFjLEVBQWxCO0FBQ0EsaUJBQUksSUFBSSxDQUFSLElBQWEsS0FBSyxjQUFsQixFQUFrQztBQUM5QixvQkFBRyxTQUFTLElBQVQsSUFBaUIsS0FBSyxjQUFMLENBQW9CLENBQXBCLEVBQXVCLElBQXZCLEtBQWdDLENBQXBELEVBQ0ksWUFBWSxJQUFaLENBQWlCLEtBQUssY0FBTCxDQUFvQixDQUFwQixDQUFqQjtBQUNQO0FBQ0QsbUJBQU8sV0FBUDtBQUNIOzs7MkNBRWtCLEksRUFBTTtBQUNyQixnQkFBSSxZQUFZLEtBQUssWUFBTCxFQUFoQjtBQUNBLGlCQUFLLElBQUksQ0FBVCxJQUFjLFNBQWQsRUFBeUI7QUFDckIsb0JBQUksVUFBVSxDQUFWLEVBQWEsSUFBYixJQUFxQixJQUF6QixFQUErQjtBQUMzQiwyQkFBTyxVQUFVLENBQVYsQ0FBUDtBQUNIO0FBQ0o7QUFDRCxtQkFBTyxLQUFQO0FBQ0g7Ozs0Q0FFbUIsSyxFQUFPO0FBQ3ZCLGdCQUFJLGFBQWEsS0FBSyxZQUFMLEVBQWpCO0FBQ0EsaUJBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxXQUFXLE1BQS9CLEVBQXVDLEdBQXZDLEVBQTRDO0FBQ3hDLG9CQUFJLFdBQVcsQ0FBWCxFQUFjLENBQWQsSUFBbUIsTUFBTSxDQUF6QixJQUE4QixXQUFXLENBQVgsRUFBYyxDQUFkLElBQW1CLE1BQU0sQ0FBM0QsRUFBOEQ7QUFDMUQsMkJBQU8sV0FBVyxDQUFYLENBQVA7QUFDSDtBQUNKO0FBQ0QsbUJBQU8sS0FBUDtBQUNIOzs7MkNBRWtCLFMsRUFBVyxLLEVBQU87QUFDakMsaUJBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxLQUFLLGtCQUFMLENBQXdCLE1BQTVDLEVBQW9ELEdBQXBELEVBQXlEO0FBQ3JELG9CQUFJLFVBQVUsQ0FBVixJQUFlLEtBQUssa0JBQUwsQ0FBd0IsQ0FBeEIsRUFBMkIsTUFBM0IsQ0FBa0MsQ0FBakQsSUFBc0QsVUFBVSxDQUFWLElBQWUsS0FBSyxrQkFBTCxDQUF3QixDQUF4QixFQUEyQixNQUEzQixDQUFrQyxDQUEzRyxFQUE4RztBQUMxRyx3QkFBSSxPQUFPLEtBQVAsS0FBaUIsV0FBckIsRUFBa0M7QUFDOUIsNkJBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxLQUFLLGtCQUFMLENBQXdCLENBQXhCLEVBQTJCLEtBQTNCLENBQWlDLE1BQXJELEVBQTZELEdBQTdELEVBQWtFO0FBQzlELGdDQUFJLEtBQUssa0JBQUwsQ0FBd0IsQ0FBeEIsRUFBMkIsS0FBM0IsQ0FBaUMsQ0FBakMsRUFBb0MsQ0FBcEMsSUFBeUMsTUFBTSxDQUEvQyxJQUFvRCxLQUFLLGtCQUFMLENBQXdCLENBQXhCLEVBQTJCLEtBQTNCLENBQWlDLENBQWpDLEVBQW9DLENBQXBDLElBQXlDLE1BQU0sQ0FBdkcsRUFBMEc7QUFDdEcsdUNBQU8sSUFBUDtBQUNIO0FBQ0o7QUFDSixxQkFORCxNQU1PO0FBQ0gsK0JBQU8sSUFBUDtBQUNIO0FBQ0o7QUFDSjtBQUNELG1CQUFPLEtBQVA7QUFDSDs7O29DQUVXLEksRUFBTSxLLEVBQU8sSSxFQUFNO0FBQzNCLGdCQUFJLE1BQU0sSUFBSSxRQUFKLENBQWEsSUFBYixFQUFtQixNQUFNLENBQXpCLEVBQTRCLE1BQU0sQ0FBbEMsRUFBcUMsSUFBckMsQ0FBVjtBQUNBLGlCQUFLLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBd0IsR0FBeEI7QUFDQSxtQkFBTyxHQUFQO0FBQ0g7Ozt5Q0FFZ0IsUyxFQUFXLHFCLEVBQXVCO0FBQy9DLGdCQUFJLE9BQU8sU0FBUCxLQUFxQixXQUF6QixFQUFzQztBQUNsQyxxQkFBSyxrQkFBTCxHQUEwQixFQUExQjtBQUNBO0FBQ0g7QUFDRCxnQkFBSSxJQUFJLEtBQUssa0JBQUwsQ0FBd0IsTUFBaEM7QUFDQSxtQkFDSSxHQURKLEVBQ1M7QUFDTCxvQkFBSSxLQUFLLGtCQUFMLENBQXdCLENBQXhCLEVBQTJCLElBQTNCLEtBQW9DLFVBQVUsSUFBOUMsSUFBc0QsMEJBQTBCLElBQXBGLEVBQTBGO0FBQ3RGLHlCQUFLLGtCQUFMLENBQXdCLE1BQXhCLENBQStCLENBQS9CLEVBQWlDLENBQWpDO0FBQ0g7QUFDSjtBQUNKOzs7cUNBRVk7QUFDVCxnQkFBSSxjQUFjLEVBQWxCO0FBQ0EsZ0JBQUksU0FBUyxLQUFLLFlBQUwsQ0FBa0IsT0FBbEIsQ0FBYjtBQUNBLGlCQUFLLElBQUksQ0FBVCxJQUFjLE1BQWQsRUFBc0I7QUFDbEIsb0JBQUksT0FBTyxDQUFQLEVBQVUsUUFBZCxFQUF3QjtBQUNwQixnQ0FBWSxJQUFaLENBQWlCLE9BQU8sQ0FBUCxDQUFqQjtBQUNIO0FBQ0o7QUFDRCxtQkFBTyxXQUFQO0FBQ0g7Ozs2Q0FFb0I7QUFDakIsbUJBQU8sS0FBSyxlQUFaO0FBQ0g7Ozs4Q0FFcUIsTSxFQUFRO0FBQzFCLGdCQUFJLEtBQUssZUFBTCxDQUFxQixNQUFyQixJQUErQixDQUFuQyxFQUFzQztBQUNsQyxxQkFBSyxlQUFMLENBQXFCLElBQXJCLENBQTBCLE1BQTFCO0FBQ0E7QUFDSDtBQUNELGlCQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksS0FBSyxlQUFMLENBQXFCLE1BQXpDLEVBQWlELEdBQWpELEVBQXNEO0FBQ2xELG9CQUFJLEtBQUssU0FBTCxDQUFlLE1BQWYsTUFBMkIsS0FBSyxTQUFMLENBQWUsS0FBSyxlQUFMLENBQXFCLENBQXJCLENBQWYsQ0FBL0IsRUFBd0U7QUFDcEUseUJBQUssZUFBTCxDQUFxQixNQUFyQixDQUE0QixDQUE1QixFQUE4QixDQUE5QjtBQUNBO0FBQ0g7QUFDSjtBQUNELGlCQUFLLGVBQUwsQ0FBcUIsSUFBckIsQ0FBMEIsTUFBMUI7QUFDSDs7O29DQUVXLEksRUFBTTtBQUNkLGdCQUFJLGNBQWMsRUFBbEI7QUFDQSxpQkFBSSxJQUFJLENBQVIsSUFBYSxLQUFLLGFBQWxCLEVBQWlDO0FBQzdCLG9CQUFHLFNBQVMsSUFBVCxJQUFpQixLQUFLLGFBQUwsQ0FBbUIsQ0FBbkIsRUFBc0IsSUFBdEIsS0FBK0IsQ0FBbkQsRUFDSSxZQUFZLElBQVosQ0FBaUIsS0FBSyxhQUFMLENBQW1CLENBQW5CLENBQWpCO0FBQ1A7QUFDRCxtQkFBTyxXQUFQO0FBQ0g7Ozt3Q0FFZTtBQUNaLGdCQUFJLFdBQVcsQ0FDWCxTQURXLEVBRVgsU0FGVyxFQUdYLFFBSFcsRUFJWCxPQUpXLEVBS1gsVUFMVyxFQU1YLFFBTlcsRUFPWCxTQVBXLEVBUVgsU0FSVyxDQUFmO0FBVUEsZ0JBQUksTUFBTSxJQUFWO0FBQ0EsaUJBQUssSUFBSSxDQUFULElBQWMsUUFBZCxFQUF3QjtBQUNwQixzQkFBTSxJQUFJLFFBQUosQ0FBYSxTQUFTLENBQVQsQ0FBYixDQUFOO0FBQ0EscUJBQUssYUFBTCxDQUFtQixTQUFTLENBQVQsQ0FBbkIsSUFBa0MsRUFBbEM7QUFDQSxxQkFBSyxJQUFJLFFBQVEsQ0FBakIsRUFBb0IsUUFBUSxFQUE1QixFQUFnQyxPQUFoQyxFQUF5QztBQUNyQyx3QkFBSSxRQUFRLENBQVosRUFBZTtBQUNYLDZCQUFLLGFBQUwsQ0FBbUIsU0FBUyxDQUFULENBQW5CLEVBQWdDLElBQWhDLENBQXFDLEdBQXJDO0FBQ0gscUJBRkQsTUFFTztBQUNILDZCQUFLLGFBQUwsQ0FBbUIsU0FBUyxDQUFULENBQW5CLEVBQWdDLElBQWhDLENBQXFDLElBQXJDO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7Ozt5Q0FFZ0IsSSxFQUFNO0FBQ25CLGdCQUFJLGlCQUFpQixDQUFyQjtBQUNBLGdCQUFJLHNCQUFzQixDQUExQjs7QUFFQSxnQkFBSSxRQUFRLFFBQVosRUFBc0I7QUFDbEIsdUJBQU8sS0FBSyxnQkFBTCxDQUFzQixTQUF0QixJQUFtQyxLQUFLLGdCQUFMLENBQXNCLFNBQXRCLENBQTFDO0FBQ0g7O0FBRUQsbUJBQU8sdUJBQXVCLENBQTlCLEVBQWlDO0FBQzdCLG9CQUFJLEtBQUssYUFBTCxDQUFtQixJQUFuQixFQUF5QixtQkFBekIsTUFBa0QsSUFBdEQsRUFBNEQ7QUFDeEQ7QUFDQTtBQUNILGlCQUhELE1BR08sSUFBSSxLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsRUFBeUIsbUJBQXpCLEVBQThDLE9BQTlDLEtBQTBELElBQTlELEVBQW9FO0FBQ3ZFLDJCQUFPLGNBQVA7QUFDSCxpQkFGTSxNQUVBO0FBQ0g7QUFDSDtBQUNEO0FBQ0g7QUFDRCxtQkFBTyxjQUFQO0FBQ0g7O0FBRUQ7Ozs7c0NBQ2MsSSxFQUFNLEssRUFBTyxNLEVBQVE7QUFDL0IsZ0JBQUksc0JBQXNCLENBQTFCO0FBQ0EsZ0JBQUksaUJBQWlCLENBQXJCO0FBQ0EsZ0JBQUksZ0JBQWdCLENBQXBCOztBQUVBLGdCQUFHLFFBQVEsTUFBWCxFQUFtQjtBQUNmLHdCQUFRLEdBQVIsQ0FBWSwyREFBWjtBQUNBLHVCQUFPLEtBQVA7QUFDSDs7QUFFRCxnQkFBRyxRQUFRLFFBQVgsRUFBcUI7QUFDakIsb0JBQUksS0FBSyxLQUFLLGFBQUwsQ0FBbUIsU0FBbkIsRUFBOEIsS0FBOUIsRUFBcUMsTUFBckMsQ0FBVDtBQUNBLG9CQUFJLEtBQUssS0FBSyxhQUFMLENBQW1CLFNBQW5CLEVBQThCLEtBQTlCLEVBQXFDLE1BQXJDLENBQVQ7O0FBRUEsb0JBQUcsT0FBTyxJQUFWLEVBQWdCO0FBQ1osMkJBQU8sRUFBUDtBQUNILGlCQUZELE1BRU8sSUFBSSxPQUFPLElBQVgsRUFBaUI7QUFDcEIsMkJBQU8sRUFBUDtBQUNILGlCQUZNLE1BRUE7QUFDSCwyQkFBTyxLQUFQO0FBQ0g7QUFDSjs7QUFFRCxtQkFBTyx1QkFBdUIsQ0FBOUIsRUFBaUM7QUFDN0Isb0JBQUksS0FBSyxhQUFMLENBQW1CLElBQW5CLEVBQXlCLG1CQUF6QixNQUFrRCxJQUF0RCxFQUE0RDtBQUN4RCx3QkFBSSxXQUFXLElBQWYsRUFBcUI7QUFDakI7QUFDQSw0QkFBSSxpQkFBaUIsS0FBckIsRUFBNEI7QUFDeEIsbUNBQU8sSUFBUDtBQUNIO0FBQ0o7QUFDRDtBQUNBO0FBQ0gsaUJBVEQsTUFTTyxJQUFJLEtBQUssYUFBTCxDQUFtQixJQUFuQixFQUF5QixtQkFBekIsRUFBOEMsT0FBOUMsS0FBMEQsSUFBOUQsRUFBb0U7QUFDdkUsd0JBQUcsV0FBVyxJQUFkLEVBQW9CO0FBQ2hCO0FBQ0gscUJBRkQsTUFFTztBQUNILCtCQUFPLEtBQVA7QUFDSDtBQUNKLGlCQU5NLE1BTUE7QUFDSDtBQUNIOztBQUVELG9CQUFHLFdBQVcsS0FBWCxJQUFvQixtQkFBbUIsS0FBMUMsRUFBaUQ7QUFDN0MsMkJBQU8sSUFBUDtBQUNIO0FBQ0Q7QUFDSDtBQUNELG1CQUFPLEtBQVA7QUFDSDs7O3NDQUVhLEksRUFBTSxLLEVBQU87QUFDdkIsZ0JBQUksc0JBQXNCLENBQTFCO0FBQ0EsZ0JBQUksZ0JBQWdCLEtBQXBCOztBQUVBLGdCQUFJLFFBQVEsUUFBWixFQUFzQjtBQUNsQixvQkFBSSxVQUFVLEtBQWQ7QUFDQSx1QkFBTyxRQUFRLENBQWYsRUFBa0I7QUFDZCw4QkFBVSxLQUFLLGFBQUwsQ0FBbUIsU0FBbkIsRUFBOEIsQ0FBOUIsQ0FBVjtBQUNBLHdCQUFJLFlBQVksS0FBaEIsRUFBdUI7QUFDbkI7QUFDSCxxQkFGRCxNQUVPO0FBQ0gsa0NBQVUsS0FBSyxhQUFMLENBQW1CLFNBQW5CLEVBQThCLENBQTlCLENBQVY7QUFDQSw0QkFBSSxZQUFZLEtBQWhCLEVBQXVCO0FBQ25CO0FBQ0g7QUFDSjtBQUNKO0FBQ0QsdUJBQU8sYUFBUDtBQUNIOztBQUVELG1CQUFPLHVCQUF1QixDQUF2QixJQUE0QixRQUFRLENBQTNDLEVBQThDO0FBQzFDLG9CQUFJLEtBQUssYUFBTCxDQUFtQixJQUFuQixFQUF5QixtQkFBekIsTUFBa0QsSUFBdEQsRUFBNEQ7QUFDeEQ7QUFDQTtBQUNILGlCQUhELE1BR08sSUFBSSxLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsRUFBeUIsbUJBQXpCLEVBQThDLE9BQTlDLEtBQTBELElBQTlELEVBQW9FO0FBQ3ZFO0FBQ0EsMkJBQU8sS0FBUDtBQUNILGlCQUhNLE1BR0E7QUFDSCx5QkFBSyxhQUFMLENBQW1CLElBQW5CLEVBQXlCLG1CQUF6QixJQUFnRCxJQUFoRDtBQUNBO0FBQ0g7QUFDSjs7QUFFRCxtQkFBTyxhQUFQO0FBQ0g7Ozt1Q0FFYyxJLEVBQU0sSyxFQUFPO0FBQ3hCLGdCQUFJLFdBQVcsSUFBZjtBQUNBLGdCQUFJLHNCQUFzQixDQUExQjtBQUNBLGdCQUFJLFlBQVksSUFBaEI7QUFDQSxnQkFBSSxnQkFBZ0IsS0FBcEI7O0FBRUEsZ0JBQUksUUFBUSxRQUFaLEVBQXNCO0FBQ2xCLG9CQUFJLFVBQVUsS0FBZDtBQUNBLHVCQUFPLFFBQVEsQ0FBZixFQUFrQjtBQUNkLDhCQUFVLEtBQUssY0FBTCxDQUFvQixTQUFwQixFQUErQixDQUEvQixDQUFWO0FBQ0Esd0JBQUksWUFBWSxLQUFoQixFQUF1QjtBQUNuQjtBQUNILHFCQUZELE1BRU87QUFDSCxrQ0FBVSxLQUFLLGNBQUwsQ0FBb0IsU0FBcEIsRUFBK0IsQ0FBL0IsQ0FBVjtBQUNBLDRCQUFJLFlBQVksS0FBaEIsRUFBdUI7QUFDbkI7QUFDSDtBQUNKO0FBQ0o7QUFDRCx1QkFBTyxhQUFQO0FBQ0g7QUFDRCxtQkFBTyxDQUFQLEVBQVU7QUFDTixvQkFBSSxjQUFjLElBQWxCLEVBQXdCO0FBQ3BCO0FBQ0Esd0JBQUksS0FBSyxhQUFMLENBQW1CLElBQW5CLEVBQXlCLG1CQUF6QixNQUFrRCxJQUF0RCxFQUE0RDtBQUN4RCxnQ0FBUSxLQUFSLENBQWMsNEJBQWQ7QUFDQSwrQkFBTyxLQUFQO0FBQ0g7QUFDRCx3QkFBSSx3QkFBd0IsQ0FBeEIsSUFBNkIsS0FBSyxhQUFMLENBQW1CLElBQW5CLEVBQXlCLHNCQUFzQixDQUEvQyxNQUFzRCxJQUF2RixFQUE2RjtBQUN6RixvQ0FBWSxLQUFaO0FBQ0E7QUFDSDtBQUNEO0FBQ0gsaUJBWEQsTUFXTztBQUNILHdCQUFHLHNCQUFzQixDQUF0QixHQUEwQixLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsRUFBeUIsTUFBdEQsRUFBOEQ7QUFDMUQsK0JBQU8sZ0JBQWdCLEtBQXZCO0FBQ0g7QUFDRCwrQkFBVyxJQUFJLFFBQUosQ0FBYSxJQUFiLENBQVg7QUFDQSx5QkFBSyxhQUFMLENBQW1CLElBQW5CLEVBQXlCLG1CQUF6QixJQUFnRCxRQUFoRDtBQUNBO0FBQ0Esd0JBQUcsVUFBVSxDQUFiLEVBQWdCO0FBQ1osK0JBQU8sYUFBUDtBQUNIO0FBQ0Q7QUFDTjtBQUNFLG9CQUFHLHNCQUFzQixDQUF6QixFQUE0QjtBQUN4Qiw0QkFBUSxLQUFSLENBQWMsZ0RBQWQ7QUFDQSwyQkFBTyxLQUFQO0FBQ0g7QUFDSjtBQUNKOzs7Ozs7QUFHTCxPQUFPLE9BQVAsQ0FBZSxNQUFmLEdBQXdCLE1BQXhCOzs7Ozs7O0lDN1VNLFEsR0FFRixrQkFBWSxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsU0FBSyxJQUFMLEdBQVksSUFBWjtBQUVILEM7O0FBR0wsT0FBTyxPQUFQLENBQWUsUUFBZixHQUEwQixRQUExQjs7Ozs7Ozs7O0FDUkEsSUFBSSxTQUFTLFFBQVEsVUFBUixFQUFvQixNQUFqQztBQUNBLElBQUksT0FBTyxRQUFRLFNBQVIsQ0FBWDs7SUFFTSxRO0FBRUwsc0JBQVksRUFBWixFQUFnQjtBQUFBOztBQUNULGFBQUssRUFBTCxHQUFVLEVBQVY7QUFDQSxhQUFLLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxhQUFLLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxhQUFLLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxhQUFLLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxhQUFLLElBQUwsR0FBWSxRQUFRLFNBQVIsR0FBWjs7QUFFQSxhQUFLLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxhQUFLLGdCQUFMLEdBQXdCLENBQXhCOztBQUVBLGFBQUssYUFBTCxHQUFxQixPQUFPLE1BQVAsQ0FBYztBQUMvQixtQkFBTyxDQUR3QjtBQUUvQixrQkFBTSxDQUZ5QjtBQUcvQixtQkFBTyxDQUh3QjtBQUkvQixzQkFBVTtBQUpxQixTQUFkLENBQXJCOztBQU9BLGFBQUssYUFBTCxHQUFxQixPQUFPLE1BQVAsQ0FBYztBQUMvQixrQkFBTSxDQUR5QixFQUNuQjtBQUNaLGtCQUFNLENBRnlCLEVBRW5CO0FBQ1osb0JBQVEsQ0FIdUIsRUFHbkI7QUFDWixxQkFBUyxDQUpzQixFQUluQjtBQUNaLHNCQUFVLENBTHFCLEVBS25CO0FBQ1osaUJBQUssQ0FOMEIsQ0FNbkI7QUFObUIsU0FBZCxDQUFyQjs7QUFTQSxhQUFLLGFBQUwsR0FBcUIsT0FBTyxNQUFQLENBQWM7QUFDL0IsbUJBQU0sQ0FEeUI7QUFFL0Isa0JBQUssQ0FGMEI7QUFHL0IsbUJBQU0sQ0FIeUI7QUFJL0Isa0JBQUs7QUFKMEIsU0FBZCxDQUFyQjs7QUFPQSxhQUFLLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxhQUFLLFFBQUwsR0FBZ0IsRUFBaEI7O0FBRUEsYUFBSyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsYUFBSyxlQUFMOztBQUVBLGFBQUssb0JBQUwsR0FBNEIsSUFBNUI7QUFDTjs7OztnQ0FFVSxJLEVBQU07O0FBRVY7QUFDQTs7QUFFQSxvQkFBUSxLQUFLLFNBQWI7O0FBRUkscUJBQUssS0FBSyxhQUFMLENBQW1CLEtBQXhCOztBQUVJO0FBQ0Esd0JBQUksU0FBUyxLQUFLLG1CQUFMLENBQXlCLEtBQUssUUFBOUIsQ0FBYjtBQUNBLHdCQUFJLFVBQVUsS0FBZDs7QUFFQSx3QkFBRyxPQUFPLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkIsTUFBN0IsR0FBc0MsT0FBTyxrQkFBaEQsRUFBb0U7QUFDaEUsa0NBQVUsS0FBSyxVQUFMLENBQWdCLE1BQWhCLEVBQXdCLEtBQUssQ0FBN0IsRUFBZ0MsS0FBSyxDQUFyQyxDQUFWO0FBQ0g7O0FBRUQsd0JBQUksWUFBWSxJQUFoQixFQUFzQjtBQUNsQjtBQUNBLDRCQUFHLE9BQU8sWUFBUCxDQUFvQixPQUFwQixFQUE2QixNQUE3QixJQUF1QyxPQUFPLGtCQUFqRCxFQUFxRTtBQUNqRSxpQ0FBSyxJQUFMLENBQVUsU0FBVixFQUFxQixFQUFDLFVBQVMsT0FBVixFQUFtQixTQUFTLEVBQUMsTUFBSyxVQUFOLEVBQTVCLEVBQXJCLEVBQXFFLE9BQU8sUUFBNUU7QUFDSDtBQUNKO0FBQ0Q7O0FBRUoscUJBQUssS0FBSyxhQUFMLENBQW1CLElBQXhCOztBQUVBLHdCQUFJLG9CQUFvQixLQUF4Qjs7QUFFSSw0QkFBUSxLQUFLLFNBQWI7QUFDSSw2QkFBSyxLQUFLLGFBQUwsQ0FBbUIsSUFBeEI7O0FBRUk7QUFDQTs7QUFFQSxpQ0FBSyxJQUFMLENBQVUsUUFBVixFQUFvQixFQUFDLFVBQVUsV0FBWCxFQUF3QixTQUFTLElBQWpDLEVBQXBCLEVBQTRELEtBQUssWUFBTCxDQUFrQixRQUE5RTs7QUFFQSxnREFBb0IsS0FBSyxZQUFMLENBQWtCLG1CQUFsQixDQUFzQyxFQUFDLEdBQUUsS0FBSyxDQUFSLEVBQVcsR0FBRSxLQUFLLENBQWxCLEVBQXRDLENBQXBCOztBQUVBLGdDQUFJLHNCQUFzQixLQUExQixFQUFpQztBQUM3QjtBQUNBLG9DQUFJLG1CQUFtQixLQUFLLFlBQUwsQ0FBa0Isa0JBQWxCLENBQXFDLGlCQUFyQyxDQUF2QjtBQUNBO0FBQ0E7QUFDQSxvQ0FBSSxxQkFBcUIsSUFBekIsRUFBK0I7QUFDM0IseUNBQUssWUFBTCxDQUFrQix1QkFBbEIsR0FBNEMsaUJBQTVDO0FBQ0E7QUFDQTtBQUNBLHlDQUFLLElBQUwsQ0FBVSxRQUFWLEVBQW9CLEVBQUMsVUFBVSxXQUFYLEVBQXdCLFNBQVMsRUFBakMsRUFBcEIsRUFBMEQsS0FBSyxZQUFMLENBQWtCLFFBQTVFO0FBQ0E7QUFDQTtBQUNBLHlDQUFLLElBQUwsQ0FBVSxRQUFWLEVBQW9CLEVBQUMsVUFBVSxXQUFYLEVBQXdCLFNBQVMsRUFBakMsRUFBcEIsRUFBMEQsS0FBSyxZQUFMLENBQWtCLFFBQTVFO0FBQ0E7QUFDQTtBQUNBLHlDQUFLLElBQUwsQ0FBVSxRQUFWLEVBQW9CLEVBQUMsVUFBVSxXQUFYLEVBQXdCLFNBQVMsRUFBakMsRUFBcEIsRUFBMEQsS0FBSyxZQUFMLENBQWtCLFFBQTVFO0FBQ0g7QUFFSiw2QkFsQkQsTUFrQk8sSUFBSSxLQUFLLFlBQUwsQ0FBa0IsdUJBQWxCLEtBQThDLElBQWxELEVBQXdEO0FBQzNELG9DQUFJLGNBQWMsS0FBSyxZQUFMLENBQWtCLGtCQUFsQixDQUFxQyxLQUFLLFlBQUwsQ0FBa0IsdUJBQXZELEVBQStFLEVBQUMsR0FBRSxLQUFLLENBQVIsRUFBVyxHQUFFLEtBQUssQ0FBbEIsRUFBL0UsQ0FBbEI7QUFDQSxvQ0FBSSxnQkFBZ0IsS0FBcEIsRUFBMkI7QUFDdkI7QUFDQSx5Q0FBSyxJQUFMLENBQVUsUUFBVixFQUFvQixFQUFDLFVBQVUsV0FBWCxFQUF3QixTQUFTLEVBQWpDLEVBQXBCLEVBQTBELEtBQUssWUFBTCxDQUFrQixRQUE1RTtBQUNILGlDQUhELE1BR087QUFDSCx5Q0FBSyxZQUFMLENBQWtCLHVCQUFsQixDQUEwQyxJQUExQyxDQUErQyxLQUFLLENBQXBELEVBQXVELEtBQUssQ0FBNUQ7QUFDQSx5Q0FBSyxJQUFMLENBQVUsUUFBVixFQUFvQixFQUFDLFVBQVUsZUFBWCxFQUE0QixTQUFTLEVBQUMsTUFBSyxLQUFLLFlBQUwsQ0FBa0IsdUJBQWxCLENBQTBDLElBQWhELEVBQXNELEdBQUUsS0FBSyxDQUE3RCxFQUFnRSxHQUFFLEtBQUssQ0FBdkUsRUFBckMsRUFBcEIsRUFBcUksS0FBSyxZQUFMLENBQWtCLFFBQXZKO0FBQ0EseUNBQUssSUFBTCxDQUFVLFFBQVYsRUFBb0IsRUFBQyxNQUFLLFdBQU4sRUFBbUIsU0FBUyxFQUFDLE1BQUssS0FBSyxZQUFMLENBQWtCLHVCQUFsQixDQUEwQyxJQUFoRCxFQUFzRCxHQUFFLEtBQUssQ0FBN0QsRUFBZ0UsR0FBRSxLQUFLLENBQXZFLEVBQTVCLEVBQXBCLEVBQTRILEtBQUssaUJBQUwsQ0FBdUIsS0FBSyxZQUE1QixFQUEwQyxRQUF0SyxFQUhHLENBRzRNO0FBQy9NLHlDQUFLLFlBQUwsQ0FBa0IsZ0JBQWxCLENBQW1DLEtBQUssWUFBTCxDQUFrQix1QkFBckQsRUFBOEUsSUFBOUUsRUFKRyxDQUlrRjs7QUFFckY7QUFDQSx3Q0FBSSxLQUFLLE9BQUwsQ0FBYSxLQUFLLENBQWxCLEVBQXFCLEtBQUssQ0FBMUIsRUFBNkIsSUFBN0IsSUFBcUMsU0FBekMsRUFBb0Q7QUFDaEQsNkNBQUssU0FBTCxHQUFpQixDQUFqQjtBQUNBLDZDQUFLLFlBQUwsQ0FBa0IsRUFBQyxHQUFFLEtBQUssQ0FBUixFQUFXLEdBQUUsS0FBSyxDQUFsQixFQUFsQjtBQUNBLDZDQUFLLGtCQUFMO0FBQ0E7QUFDSDtBQUNEO0FBQ0EseUNBQUssU0FBTDtBQUNBO0FBQ0EseUNBQUssWUFBTCxDQUFrQixFQUFDLEdBQUUsS0FBSyxDQUFSLEVBQVcsR0FBRSxLQUFLLENBQWxCLEVBQWxCO0FBQ0g7QUFDRCxxQ0FBSyxZQUFMLENBQWtCLHVCQUFsQixHQUE0QyxJQUE1QztBQUNIOztBQUVEOztBQUVKLDZCQUFLLEtBQUssYUFBTCxDQUFtQixNQUF4Qjs7QUFFSTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFJLEtBQUssb0JBQUwsSUFBNkIsa0JBQTdCLElBQW1ELEtBQUssb0JBQUwsSUFBNkIsUUFBaEYsSUFBNEYsS0FBSyxvQkFBTCxJQUE2QixXQUE3SCxFQUEwSTtBQUN0STtBQUNILDZCQUZELE1BRU87QUFDSCxvREFBb0IsS0FBSyxZQUFMLENBQWtCLG1CQUFsQixDQUFzQyxFQUFDLEdBQUUsS0FBSyxDQUFSLEVBQVcsR0FBRSxLQUFLLENBQWxCLEVBQXRDLENBQXBCO0FBQ0Esb0NBQUksc0JBQXNCLEtBQTFCLEVBQWlDO0FBQzdCLHdDQUFJLEtBQUssWUFBTCxDQUFrQixxQkFBbEIsQ0FBd0MsaUJBQXhDLE1BQStELENBQW5FLEVBQXNFO0FBQ2xFLDZDQUFLLElBQUwsQ0FBVSxRQUFWLEVBQW9CLEVBQUMsVUFBVSxXQUFYLEVBQXdCLFNBQVMsRUFBQyxHQUFFLEtBQUssQ0FBUixFQUFXLEdBQUUsS0FBSyxDQUFsQixFQUFqQyxFQUFwQixFQUE0RSxLQUFLLFlBQUwsQ0FBa0IsUUFBOUY7QUFDSCxxQ0FGRCxNQUVPO0FBQ0gsNkNBQUssSUFBTCxDQUFVLFFBQVYsRUFBb0IsRUFBQyxVQUFVLFdBQVgsRUFBd0IsU0FBUyxFQUFDLEdBQUUsS0FBSyxDQUFSLEVBQVcsR0FBRSxLQUFLLENBQWxCLEVBQWpDLEVBQXBCLEVBQTRFLEtBQUssWUFBTCxDQUFrQixRQUE5RjtBQUNIO0FBQ0o7QUFDSjtBQUNELG9DQUFRLEdBQVIsQ0FBWSxLQUFLLFlBQUwsQ0FBa0IsZUFBOUI7O0FBRUE7O0FBRUosNkJBQUssS0FBSyxhQUFMLENBQW1CLE9BQXhCOztBQUVJO0FBQ0E7O0FBRUEsb0NBQVEsR0FBUixDQUFZLGdCQUFaO0FBQ0EsaUNBQUssa0JBQUw7QUFDQTs7QUFFSiw2QkFBSyxLQUFLLGFBQUwsQ0FBbUIsR0FBeEI7O0FBRUk7QUFDQSxpQ0FBSyxTQUFMLEdBQWlCLEtBQUssYUFBTCxDQUFtQixJQUFwQztBQUNBO0FBM0ZSO0FBNkZBOztBQUVKO0FBQ0k7QUF4SFI7QUEySEg7OzsyQkFFRSxJLEVBQU07QUFDTCxvQkFBUSxLQUFLLFNBQWI7QUFDSSxxQkFBSyxLQUFLLGFBQUwsQ0FBbUIsSUFBeEI7QUFDSTs7QUFFQTs7QUFFSixxQkFBSyxLQUFLLGFBQUwsQ0FBbUIsTUFBeEI7QUFDSTtBQUNBO0FBQ0EseUJBQUssVUFBTCxDQUFnQixLQUFLLG9CQUFyQixFQUEyQyxLQUFLLFlBQUwsQ0FBa0Isa0JBQWxCLEVBQTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQUssU0FBTCxHQUFpQixDQUFqQjtBQUNBLHlCQUFLLGtCQUFMO0FBQ0E7O0FBRUE7QUFDSixxQkFBSyxLQUFLLGFBQUwsQ0FBbUIsT0FBeEI7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNKLHFCQUFLLEtBQUssYUFBTCxDQUFtQixRQUF4QjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0oscUJBQUssS0FBSyxhQUFMLENBQW1CLEdBQXhCO0FBQ0k7QUFqQ1I7QUFtQ0Esb0JBQVEsR0FBUixDQUFZLElBQVo7QUFDSDs7O3FDQUVTLFEsRUFBVSxJLEVBQU07QUFDdEIsaUJBQUssWUFBTDtBQUNBLGdCQUFJLFNBQVMsSUFBSSxNQUFKLENBQVcsUUFBWCxFQUFxQixLQUFLLFlBQTFCLEVBQXdDLElBQXhDLENBQWI7QUFDQSxpQkFBSyxZQUFMLENBQWtCLElBQWxCLENBQXVCLE1BQXZCO0FBQ0EsaUJBQUssSUFBTCxDQUFVLFFBQVYsRUFBb0IsRUFBQyxVQUFVLGNBQVgsRUFBMkIsU0FBUyxFQUFDLElBQUksS0FBSyxZQUFWLEVBQXBDLEVBQXBCLEVBQWtGLFFBQWxGO0FBQ0EsbUJBQU8sTUFBUDtBQUNOOzs7a0NBRVksTSxFQUFRO0FBQ2QsaUJBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixNQUF2QjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxRQUFWLEVBQW9CLEVBQUMsVUFBVSxjQUFYLEVBQTJCLFNBQVMsRUFBQyxJQUFJLE9BQU8sRUFBWixFQUFwQyxFQUFwQixFQUEwRSxPQUFPLFFBQWpGO0FBQ0g7Ozt1Q0FFYyxLLEVBQU87QUFDbEIsZ0JBQUksU0FBUyxJQUFiO0FBQ0Esb0JBQVEsTUFBTSxLQUFkO0FBQ0kscUJBQUssT0FBTDtBQUNJLDZCQUFTLEtBQUssbUJBQUwsQ0FBeUIsTUFBTSxRQUEvQixDQUFUO0FBQ0EsMkJBQU8sZUFBUCxDQUF1QixJQUF2QixFQUE2QixJQUE3QjtBQUNBLHlCQUFLLElBQUwsQ0FBVSxRQUFWLEVBQW9CLEVBQUMsVUFBUyxvQkFBVixFQUFnQyxTQUFTLEVBQXpDLEVBQXBCLEVBQWtFLE9BQU8sUUFBekU7QUFDQTtBQUNKLHFCQUFLLE9BQUw7QUFDSSw2QkFBUyxLQUFLLG1CQUFMLENBQXlCLE1BQU0sUUFBL0IsQ0FBVDtBQUNBLDJCQUFPLFlBQVAsR0FBc0IsSUFBdEI7QUFDQSx3QkFBSSxXQUFXLEtBQUssaUJBQUwsQ0FBdUIsTUFBdkIsQ0FBZjtBQUNBLHdCQUFHLENBQUMsUUFBRCxJQUFhLENBQUMsU0FBUyxZQUExQixFQUF3QztBQUNwQztBQUNILHFCQUZELE1BRU87QUFDSCw0QkFBSSxZQUFZLFNBQVMsWUFBVCxDQUFzQixPQUF0QixDQUFoQjtBQUNBLDRCQUFJLHNCQUFzQixPQUFPLFlBQVAsQ0FBb0IsT0FBcEIsQ0FBMUI7O0FBRUE7QUFDQSw0QkFBSSxnQkFBZ0IsRUFBcEI7QUFDQSw2QkFBSyxJQUFJLENBQVQsSUFBYyxTQUFkLEVBQXlCO0FBQ3JCLDBDQUFjLElBQWQsQ0FBbUI7QUFDZixtQ0FBRSxVQUFVLENBQVYsRUFBYSxDQURBO0FBRWYsbUNBQUUsVUFBVSxDQUFWLEVBQWEsQ0FGQTtBQUdmLHNDQUFLLFVBQVUsQ0FBVixFQUFhO0FBSEgsNkJBQW5CO0FBS0g7QUFDRCw2QkFBSyxJQUFMLENBQVUsUUFBVixFQUFvQixFQUFDLE1BQUssV0FBTixFQUFtQixTQUFRLGFBQTNCLEVBQXBCLEVBQStELE9BQU8sUUFBdEU7O0FBRUE7QUFDQSw0QkFBSSxhQUFhLEVBQWpCO0FBQ0EsNkJBQUssSUFBSSxDQUFULElBQWMsbUJBQWQsRUFBbUM7QUFDL0IsdUNBQVcsSUFBWCxDQUFnQjtBQUNaLG1DQUFFLG9CQUFvQixDQUFwQixFQUF1QixDQURiO0FBRVosbUNBQUUsb0JBQW9CLENBQXBCLEVBQXVCLENBRmI7QUFHWixzQ0FBSyxvQkFBb0IsQ0FBcEIsRUFBdUI7QUFIaEIsNkJBQWhCO0FBS0g7QUFDRCw2QkFBSyxJQUFMLENBQVUsUUFBVixFQUFvQixFQUFDLE1BQUssV0FBTixFQUFtQixTQUFRLFVBQTNCLEVBQXBCLEVBQTRELFNBQVMsUUFBckU7QUFDQSw2QkFBSyxTQUFMLENBQWUsUUFBZixFQUF5QixFQUFDLE1BQUssV0FBTixFQUFtQixRQUFPLE1BQTFCLEVBQXpCOztBQUVBLDZCQUFLLFlBQUwsR0FBb0IsS0FBSyxlQUFMLEVBQXBCO0FBQ0EsNkJBQUssSUFBTCxDQUFVLFFBQVYsRUFBb0IsRUFBQyxVQUFTLFdBQVYsRUFBdUIsU0FBUyxFQUFoQyxFQUFwQixFQUF5RCxLQUFLLFlBQUwsQ0FBa0IsUUFBM0U7QUFDQSw2QkFBSyxTQUFMO0FBRUg7QUFDRDtBQUNKO0FBQ0ksNEJBQVEsR0FBUixDQUFZLE1BQU0sS0FBbEI7QUFDQSw0QkFBUSxLQUFSLENBQWMsTUFBTSxLQUFOLEdBQWMsK0JBQTVCO0FBL0NSO0FBaURIOzs7MENBRWlCLE0sRUFBUTtBQUN0QixnQkFBSSxLQUFLLFlBQUwsQ0FBa0IsTUFBbEIsSUFBNEIsQ0FBaEMsRUFBbUM7QUFDL0IsdUJBQU8sS0FBUDtBQUNIO0FBQ0QsZ0JBQUksS0FBSyxZQUFMLENBQWtCLENBQWxCLE1BQXlCLE1BQTdCLEVBQXFDO0FBQ2pDLHVCQUFPLEtBQUssWUFBTCxDQUFrQixDQUFsQixDQUFQO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsdUJBQU8sS0FBSyxZQUFMLENBQWtCLENBQWxCLENBQVA7QUFDSDtBQUNKOzs7NkNBRW9CO0FBQ2pCLGlCQUFLLElBQUwsQ0FBVSxRQUFWLEVBQW9CLEVBQUMsVUFBUyxVQUFWLEVBQXNCLFNBQVMsRUFBL0IsRUFBcEIsRUFBd0QsS0FBSyxZQUFMLENBQWtCLFFBQTFFO0FBQ0EsaUJBQUssWUFBTCxHQUFvQixLQUFLLGlCQUFMLENBQXVCLEtBQUssWUFBNUIsQ0FBcEI7QUFDQSxpQkFBSyxJQUFMLENBQVUsUUFBVixFQUFvQixFQUFDLFVBQVMsV0FBVixFQUF1QixTQUFTLEVBQWhDLEVBQXBCLEVBQXlELEtBQUssWUFBTCxDQUFrQixRQUEzRTtBQUNIOzs7MENBRWdCO0FBQ2IsbUJBQU8sS0FBSyxZQUFMLENBQWtCLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFjLENBQXpCLENBQWxCLENBQVA7QUFDSDs7O3dDQUVlLEksRUFBTTtBQUNsQixpQkFBSyxJQUFJLENBQVQsSUFBYyxLQUFLLFlBQW5CLEVBQWlDO0FBQzdCLG9CQUFHLEtBQUssWUFBTCxDQUFrQixDQUFsQixFQUFxQixJQUFyQixJQUE2QixJQUFoQyxFQUNJLE9BQU8sS0FBSyxZQUFMLENBQWtCLENBQWxCLENBQVA7QUFDUDtBQUNELG1CQUFPLElBQVA7QUFDSDs7OzRDQUVtQixFLEVBQUk7QUFDcEIsaUJBQUssSUFBSSxDQUFULElBQWMsS0FBSyxZQUFuQixFQUFpQztBQUM3QixvQkFBRyxLQUFLLFlBQUwsQ0FBa0IsQ0FBbEIsRUFBcUIsUUFBckIsSUFBaUMsRUFBcEMsRUFBd0M7QUFDcEMsMkJBQU8sS0FBSyxZQUFMLENBQWtCLENBQWxCLENBQVA7QUFDSDtBQUNKO0FBQ0QsbUJBQU8sS0FBUDtBQUNIOzs7eUNBRWdCO0FBQ2IsbUJBQU8sS0FBSyxZQUFMLENBQWtCLE1BQXpCO0FBQ0g7OztrQ0FFUyxNLEVBQVE7QUFDZCxtQkFBTyxTQUFQLEdBQW1CLEVBQW5CO0FBQ0EsaUJBQUssSUFBSSxDQUFULElBQWMsT0FBTyxjQUFyQixFQUFxQztBQUNqQyxvQkFBSSxLQUFLLFNBQUwsQ0FBZSxPQUFPLGNBQVAsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBeEMsRUFBMkMsT0FBTyxjQUFQLENBQXNCLENBQXRCLEVBQXlCLENBQXBFLEVBQXVFLElBQXZFLElBQStFLFFBQW5GLEVBQTZGO0FBQ3pGLDJCQUFPLFNBQVAsQ0FBaUIsSUFBakIsQ0FBc0IsS0FBSyxTQUFMLENBQWUsT0FBTyxjQUFQLENBQXNCLENBQXRCLEVBQXlCLENBQXhDLEVBQTJDLE9BQU8sY0FBUCxDQUFzQixDQUF0QixFQUF5QixDQUFwRSxFQUF1RSxJQUE3RjtBQUNIO0FBQ0o7QUFDSjs7O3FDQUVZLE0sRUFBUTtBQUNqQixpQkFBSyxJQUFJLENBQVQsSUFBYyxPQUFPLGNBQXJCLEVBQXFDO0FBQ2pDLG9CQUFJLEtBQUssU0FBTCxDQUFlLE9BQU8sY0FBUCxDQUFzQixDQUF0QixFQUF5QixDQUF4QyxFQUEyQyxPQUFPLGNBQVAsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBcEUsRUFBdUUsSUFBdkUsSUFBK0UsU0FBbkYsRUFBOEY7QUFDMUYsMkJBQU8sY0FBUCxDQUFzQixDQUF0QixFQUF5QixRQUF6QixHQUFvQyxJQUFwQztBQUNILGlCQUZELE1BRU87QUFDSCwyQkFBTyxjQUFQLENBQXNCLENBQXRCLEVBQXlCLFFBQXpCLEdBQW9DLEtBQXBDO0FBQ0g7QUFDSjtBQUNKOzs7eUNBRWdCLEksRUFBTTtBQUNuQixpQkFBSyxJQUFJLENBQVQsSUFBYyxLQUFLLFlBQW5CLEVBQWlDO0FBQzdCLG9CQUFHLEtBQUssWUFBTCxDQUFrQixDQUFsQixFQUFxQixJQUFyQixJQUE2QixJQUFoQyxFQUNJLE9BQU8sSUFBUDtBQUNQO0FBQ0QsbUJBQU8sS0FBUDtBQUNIOzs7cUNBRVksSSxFQUFNO0FBQ2YsZ0JBQUksT0FBTyxLQUFLLE9BQUwsQ0FBYSxLQUFLLENBQWxCLEVBQXFCLEtBQUssQ0FBMUIsQ0FBWDtBQUNBLGdCQUFJLGlCQUFpQixJQUFyQjs7QUFFQSxvQkFBUSxLQUFLLElBQWI7QUFDSSxxQkFBSyxTQUFMO0FBQ0kseUJBQUssWUFBTCxDQUFrQixtQkFBbEIsQ0FBc0MsRUFBQyxHQUFFLEtBQUssQ0FBUixFQUFXLEdBQUUsS0FBSyxDQUFsQixFQUF0QyxFQUE0RCxRQUE1RCxHQUF1RSxJQUF2RTtBQUNBO0FBQ0oscUJBQUssWUFBTDs7QUFFSTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBRyxLQUFLLElBQUwsSUFBYSxhQUFoQixFQUErQjtBQUMzQjtBQUNBLGdDQUFRLEdBQVIsQ0FBWSx5QkFBWjtBQUNBO0FBQ0g7O0FBRUQsd0JBQUksS0FBSyxJQUFMLElBQWEsWUFBakIsRUFBK0I7QUFDM0I7QUFDQSxnQ0FBUSxHQUFSLENBQVksb0JBQVo7QUFDQTtBQUNIOztBQUVELHdCQUFJLEtBQUssSUFBTCxJQUFhLGVBQWpCLEVBQWtDO0FBQzlCO0FBQ0EsZ0NBQVEsR0FBUixDQUFZLGVBQVo7QUFDQTtBQUNIOztBQUVELHlCQUFLLElBQUksQ0FBVCxJQUFjLEtBQUssVUFBTCxDQUFnQixnQkFBOUIsRUFBZ0Q7QUFDNUMsNEJBQUksS0FBSyxZQUFMLENBQWtCLGFBQWxCLENBQWdDLEtBQUssVUFBTCxDQUFnQixnQkFBaEIsQ0FBaUMsQ0FBakMsQ0FBaEMsRUFBcUUsS0FBSyxVQUFMLENBQWdCLGlCQUFoQixDQUFrQyxDQUFsQyxDQUFyRSxNQUErRyxLQUFuSCxFQUEwSDtBQUN0SDtBQUNBLG9DQUFRLEdBQVIsQ0FBWSxrQkFBWjtBQUNBLG1DQUFPLEtBQVA7QUFDSDtBQUNKOztBQUVELHlCQUFLLElBQUksQ0FBVCxJQUFjLEtBQUssVUFBTCxDQUFnQixpQkFBOUIsRUFBaUQ7QUFDN0MsNEJBQUksS0FBSyxZQUFMLENBQWtCLGFBQWxCLENBQWdDLEtBQUssVUFBTCxDQUFnQixpQkFBaEIsQ0FBa0MsQ0FBbEMsQ0FBaEMsRUFBc0UsS0FBSyxVQUFMLENBQWdCLGtCQUFoQixDQUFtQyxDQUFuQyxDQUF0RSxFQUE2RyxJQUE3RyxNQUF1SCxLQUEzSCxFQUFrSTtBQUM5SDtBQUNBLG9DQUFRLEdBQVIsQ0FBWSw0Q0FBWjtBQUNBLG1DQUFPLEtBQVA7QUFDSDtBQUNKOztBQUVELHlCQUFLLElBQUksQ0FBVCxJQUFjLEtBQUssVUFBTCxDQUFnQixnQkFBOUIsRUFBZ0Q7QUFDNUMseUNBQWlCLEtBQUssWUFBTCxDQUFrQixhQUFsQixDQUFnQyxLQUFLLFVBQUwsQ0FBZ0IsZ0JBQWhCLENBQWlDLENBQWpDLENBQWhDLEVBQXFFLEtBQUssVUFBTCxDQUFnQixpQkFBaEIsQ0FBa0MsQ0FBbEMsQ0FBckUsQ0FBakI7QUFDQSxnQ0FBUSxHQUFSLENBQVksb0JBQW9CLGNBQXBCLEdBQXFDLEdBQXJDLEdBQTJDLEtBQUssVUFBTCxDQUFnQixnQkFBaEIsQ0FBaUMsQ0FBakMsQ0FBM0MsR0FBaUYseUJBQWpGLEdBQTZHLEtBQUssWUFBTCxDQUFrQixnQkFBbEIsQ0FBbUMsS0FBSyxVQUFMLENBQWdCLGdCQUFoQixDQUFpQyxDQUFqQyxDQUFuQyxDQUF6SDtBQUNIOztBQUVELHlCQUFLLElBQUksQ0FBVCxJQUFjLEtBQUssVUFBTCxDQUFnQixpQkFBOUIsRUFBaUQ7QUFDN0MseUNBQWlCLEtBQUssWUFBTCxDQUFrQixjQUFsQixDQUFpQyxLQUFLLFVBQUwsQ0FBZ0IsaUJBQWhCLENBQWtDLENBQWxDLENBQWpDLEVBQXVFLEtBQUssVUFBTCxDQUFnQixrQkFBaEIsQ0FBbUMsQ0FBbkMsQ0FBdkUsQ0FBakI7QUFDQSw0QkFBSSxjQUFKLEVBQ0ksUUFBUSxHQUFSLENBQVksb0JBQW9CLGNBQXBCLEdBQXFDLEdBQXJDLEdBQTJDLEtBQUssVUFBTCxDQUFnQixpQkFBaEIsQ0FBa0MsQ0FBbEMsQ0FBM0MsR0FBa0YseUJBQWxGLEdBQThHLEtBQUssWUFBTCxDQUFrQixnQkFBbEIsQ0FBbUMsS0FBSyxVQUFMLENBQWdCLGlCQUFoQixDQUFrQyxDQUFsQyxDQUFuQyxDQUExSDtBQUNQOztBQUVEO0FBQ0E7O0FBRUoscUJBQUssUUFBTDtBQUNJLHlCQUFLLFNBQUwsQ0FBZSxLQUFLLFlBQXBCO0FBQ0E7QUFDQTtBQUNBOztBQUVKLHFCQUFLLFFBQUw7QUFDSSw0QkFBUSxLQUFLLElBQWI7QUFDSSw2QkFBSyxRQUFMO0FBQ0EsNkJBQUssVUFBTDtBQUNBLDZCQUFLLE9BQUw7QUFDQSw2QkFBSyxVQUFMO0FBQ0EsNkJBQUssV0FBTDtBQUNBLDZCQUFLLFFBQUw7QUFDQSw2QkFBSyxXQUFMO0FBQ0EsNkJBQUssVUFBTDtBQUNJO0FBQ0EsZ0NBQUksdUJBQXVCLENBQTNCO0FBQ0EsZ0NBQUksK0JBQStCLENBQW5DO0FBQ0EsZ0NBQUksbUJBQW1CLElBQXZCO0FBQ0EsZ0NBQUksY0FBYyxFQUFsQjtBQUNBLGdDQUFJLGdCQUFnQixLQUFLLFlBQUwsQ0FBa0IsVUFBbEIsRUFBcEI7O0FBRUEsZ0NBQUksY0FBYyxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzFCLHVDQUQwQixDQUNsQjtBQUNYOztBQUVELGlDQUFLLElBQUksQ0FBVCxJQUFjLEtBQUssVUFBTCxDQUFnQixnQkFBOUIsRUFBZ0Q7QUFDNUMsdURBQXVCLEtBQUssWUFBTCxDQUFrQixnQkFBbEIsQ0FBbUMsS0FBSyxVQUFMLENBQWdCLGdCQUFoQixDQUFpQyxDQUFqQyxDQUFuQyxDQUF2QjtBQUNBLCtEQUErQix1QkFBdUIsS0FBSyxVQUFMLENBQWdCLGlCQUF0RTtBQUNBLG9DQUFJLCtCQUErQixDQUFuQyxFQUFzQztBQUNsQywyQ0FEa0MsQ0FDMUI7QUFDWDtBQUNELG9DQUFJLHFCQUFxQixJQUFyQixJQUE2QiwrQkFBK0IsZ0JBQWhFLEVBQWtGO0FBQzlFLHVEQUFtQiw0QkFBbkI7QUFDSDtBQUNKO0FBQ0Qsb0NBQVEsR0FBUixDQUFZLGlDQUFpQyxnQkFBakMsR0FBb0QsWUFBaEU7QUFDQSxpQ0FBSyxvQkFBTCxHQUE0QixLQUFLLElBQWpDO0FBQ0E7QUFDQSxpQ0FBSyxJQUFMLENBQVUsUUFBVixFQUFvQixFQUFDLFVBQVMsY0FBVixFQUEwQixTQUFRLEVBQUMsU0FBUSxhQUFULEVBQWxDLEVBQXBCLEVBQWdGLEtBQUssWUFBTCxDQUFrQixRQUFsRztBQUNBO0FBQ0E7O0FBR0osNkJBQUssa0JBQUw7QUFDSTtBQUNBOztBQUVKLDZCQUFLLFFBQUw7QUFDQSw2QkFBSyxXQUFMO0FBQ0ksbURBQXVCLENBQXZCO0FBQ0EsZ0NBQUkscUJBQXFCLEtBQUssZUFBTCxDQUFxQixLQUFLLFlBQTFCLENBQXpCO0FBQ0EsZ0NBQUksbUJBQW1CLE1BQW5CLEdBQTRCLENBQWhDLEVBQW1DO0FBQy9CO0FBQ0g7QUFDRDtBQUNBLGlDQUFLLElBQUksQ0FBVCxJQUFjLEtBQUssVUFBTCxDQUFnQixnQkFBOUIsRUFBZ0Q7QUFDNUMsdURBQXVCLEtBQUssWUFBTCxDQUFrQixnQkFBbEIsQ0FBbUMsS0FBSyxVQUFMLENBQWdCLGdCQUFoQixDQUFpQyxDQUFqQyxDQUFuQyxDQUF2QjtBQUNBLG9DQUFJLHVCQUF1QixLQUFLLFVBQUwsQ0FBZ0IsaUJBQTNDLEVBQThEO0FBQzFELDJDQUQwRCxDQUNsRDtBQUNYO0FBQ0o7QUFDRCxvQ0FBUSxHQUFSLENBQVkseURBQVo7QUFDQTtBQXpEUjtBQTJEQTs7QUFFSjtBQUNJO0FBaElSO0FBa0lIOzs7bUNBRVUsVSxFQUFZLFcsRUFBYTtBQUNoQyxnQkFBSSxZQUFZLE1BQVosSUFBc0IsQ0FBMUIsRUFBOEI7QUFDMUIsdUJBQU8sS0FBUDtBQUNIOztBQUVELGlCQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksWUFBWSxNQUFoQyxFQUF3QyxHQUF4QyxFQUE2QztBQUN6QyxvQkFBSSxnQkFBZ0IsRUFBQyxHQUFFLFlBQVksQ0FBWixFQUFlLENBQWxCLEVBQXFCLEdBQUUsWUFBWSxDQUFaLEVBQWUsQ0FBdEMsRUFBcEI7QUFDQSxvQkFBSSxXQUFXLEtBQWY7QUFDQSxvQkFBSSxPQUFKOztBQUVBLHdCQUFRLFVBQVI7QUFDSSx5QkFBSyxPQUFMO0FBQ0ksNEJBQUksV0FBSjtBQUNBLDRCQUFJLGVBQUo7QUFDQSwrQkFBTyxhQUFhLEtBQXBCLEVBQTJCO0FBQ3ZCLGdDQUFJLEtBQUssWUFBTCxDQUFrQixFQUFsQixJQUF3QixDQUE1QixFQUErQjtBQUMzQiw4Q0FBYyxDQUFkO0FBQ0gsNkJBRkQsTUFFTztBQUNILDhDQUFjLENBQWQ7QUFDSDtBQUNELDBDQUFjLEtBQUssT0FBTCxDQUFhLGNBQWMsQ0FBM0IsRUFBOEIsY0FBYyxDQUE1QyxDQUFkO0FBQ0Esb0NBQVEsWUFBWSxJQUFwQjtBQUNJLHFDQUFLLE9BQUw7QUFDQSxxQ0FBSyxTQUFMO0FBQ0ksd0NBQUksWUFBWSxRQUFaLEtBQXlCLElBQTdCLEVBQW1DO0FBQy9CLDBEQUFrQixLQUFLLGVBQUwsQ0FBcUIsYUFBckIsQ0FBbEI7QUFDQTtBQUNBLG9EQUFZLFFBQVosR0FBdUIsS0FBdkI7QUFDQSxtREFBVyxJQUFYO0FBQ0E7QUFDSDtBQUNEO0FBQ0o7QUFDSTtBQUNBLHdDQUFJLFlBQVksUUFBWixLQUF5QixJQUE3QixFQUFtQztBQUMvQiwwREFBa0IsS0FBSyxlQUFMLENBQXFCLGFBQXJCLENBQWxCO0FBQ0EsNkNBQUssWUFBTCxDQUFrQixlQUFsQixDQUFrQyxlQUFsQztBQUNBO0FBQ0EsNkNBQUssSUFBTCxDQUFVLFFBQVYsRUFBb0IsRUFBQyxVQUFTLGlCQUFWLEVBQTZCLFNBQVEsZUFBckMsRUFBcEIsRUFBMkUsS0FBSyxZQUFMLENBQWtCLFFBQTdGO0FBQ0Esb0RBQVksUUFBWixHQUF1QixLQUF2QjtBQUNBLG1EQUFXLElBQVg7QUFDQTtBQUNIO0FBQ0Qsd0NBQUksWUFBWSxPQUFaLEtBQXdCLElBQTVCLEVBQWtDO0FBQzlCO0FBQ0gscUNBRkQsTUFFTztBQUNILG9EQUFZLE9BQVosR0FBc0IsSUFBdEI7QUFDQSw2Q0FBSyxJQUFMLENBQVUsUUFBVixFQUFvQixFQUFDLFVBQVMsWUFBVixFQUF3QixTQUFRLGFBQWhDLEVBQXBCLEVBQW9FLEtBQUssWUFBTCxDQUFrQixRQUF0RjtBQUNBLG1EQUFXLElBQVg7QUFDQTtBQUNIO0FBN0JUO0FBK0JIO0FBQ0Q7QUFDSix5QkFBSyxRQUFMO0FBQ0EseUJBQUssVUFBTDtBQUNBLHlCQUFLLFdBQUw7QUFDQSx5QkFBSyxRQUFMO0FBQ0ksNEJBQUksS0FBSyxZQUFMLENBQWtCLEVBQWxCLElBQXdCLENBQTVCLEVBQStCO0FBQzNCLDBDQUFjLENBQWQsSUFBbUIsS0FBSyxnQkFBeEI7QUFDSCx5QkFGRCxNQUVPO0FBQ0gsMENBQWMsQ0FBZCxJQUFtQixLQUFLLGdCQUF4QjtBQUNIO0FBQ0Qsc0NBQWMsS0FBSyxPQUFMLENBQWEsY0FBYyxDQUEzQixFQUE4QixjQUFjLENBQTVDLENBQWQ7QUFDQSxrQ0FBVSxNQUFWO0FBQ0EsNkJBQUssWUFBTCxDQUFrQixXQUFsQixDQUE4QixVQUE5QixFQUEwQyxhQUExQyxFQUF5RCxPQUF6RDtBQUNBLDZCQUFLLElBQUwsQ0FBVSxRQUFWLEVBQW9CLEVBQUMsVUFBUyxhQUFWLEVBQXlCLFNBQVEsRUFBQyxNQUFLLFVBQU4sRUFBa0IsT0FBTSxhQUF4QixFQUF1QyxNQUFLLE9BQTVDLEVBQWpDLEVBQXBCLEVBQTRHLEtBQUssWUFBTCxDQUFrQixRQUE5SDtBQUNBO0FBQ0oseUJBQUssVUFBTDtBQUNJLDRCQUFJLEtBQUssWUFBTCxDQUFrQixFQUFsQixJQUF3QixDQUE1QixFQUErQjtBQUMzQiwwQ0FBYyxDQUFkLEdBQWtCLEtBQUssS0FBSyxnQkFBNUI7QUFDSCx5QkFGRCxNQUVPO0FBQ0gsMENBQWMsQ0FBZCxHQUFrQixLQUFLLGdCQUFMLEdBQXdCLENBQTFDO0FBQ0g7QUFDRCxzQ0FBYyxLQUFLLE9BQUwsQ0FBYSxjQUFjLENBQTNCLEVBQThCLGNBQWMsQ0FBNUMsQ0FBZDtBQUNBLGtDQUFVLE1BQVY7QUFDQSw2QkFBSyxZQUFMLENBQWtCLFdBQWxCLENBQThCLFVBQTlCLEVBQTBDLGFBQTFDLEVBQXlELE9BQXpEO0FBQ0EsNkJBQUssSUFBTCxDQUFVLFFBQVYsRUFBb0IsRUFBQyxVQUFTLGFBQVYsRUFBeUIsU0FBUSxFQUFDLE1BQUssVUFBTixFQUFrQixPQUFNLGFBQXhCLEVBQXVDLE1BQUssT0FBNUMsRUFBakMsRUFBcEIsRUFBNEcsS0FBSyxZQUFMLENBQWtCLFFBQTlIO0FBQ0E7QUFDSjtBQUNJLGdDQUFRLEtBQVIsQ0FBYyxrREFBZDtBQXRFUjtBQXdFSDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7O2lDQUVRLE0sRUFBUTtBQUNiLGdCQUFJLGNBQWMsRUFBbEI7QUFDQSxpQkFBSyxJQUFJLENBQVQsSUFBYyxLQUFLLFNBQW5CLEVBQThCO0FBQzFCLHFCQUFLLElBQUksQ0FBVCxJQUFjLEtBQUssU0FBTCxDQUFlLENBQWYsQ0FBZCxFQUFpQztBQUM3Qix3QkFBSSxLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLElBQXJCLElBQTZCLE1BQWpDLEVBQXlDO0FBQ3JDLDRCQUFJLE1BQUosRUFBWTtBQUNSLGdDQUFJLE9BQU8sRUFBUCxJQUFhLENBQWIsSUFBa0IsSUFBSSxFQUExQixFQUE4QjtBQUMxQiw0Q0FBWSxJQUFaLENBQWlCLEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FBakI7QUFDSCw2QkFGRCxNQUVPLElBQUksT0FBTyxFQUFQLElBQWEsQ0FBYixJQUFrQixJQUFJLEVBQTFCLEVBQThCO0FBQ2pDLDRDQUFZLElBQVosQ0FBaUIsS0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixDQUFqQjtBQUNIO0FBQ0oseUJBTkQsTUFNTztBQUNILHdDQUFZLElBQVosQ0FBaUIsS0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixDQUFqQjtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ0QsbUJBQU8sV0FBUDtBQUNIOzs7d0NBRWUsTSxFQUFRO0FBQ3BCLGdCQUFJLGNBQWMsRUFBbEI7QUFDQSxpQkFBSyxJQUFJLENBQVQsSUFBYyxLQUFLLFNBQW5CLEVBQThCO0FBQzFCLHFCQUFLLElBQUksQ0FBVCxJQUFjLEtBQUssU0FBTCxDQUFlLENBQWYsQ0FBZCxFQUFpQztBQUM3Qix3QkFBSSxNQUFKLEVBQVk7QUFDUiw0QkFBSSxPQUFPLEVBQVAsSUFBYSxDQUFqQixFQUFvQjtBQUNoQixnQ0FBSSxJQUFJLEVBQUosSUFBVSxLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLE9BQXJCLEtBQWlDLElBQS9DLEVBQXFEO0FBQ2pELDRDQUFZLElBQVosQ0FBaUIsS0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixDQUFqQjtBQUNIO0FBQ0oseUJBSkQsTUFJTztBQUNILGdDQUFJLElBQUksRUFBSixJQUFVLEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsT0FBckIsS0FBaUMsSUFBL0MsRUFBcUQ7QUFDakQsNENBQVksSUFBWixDQUFpQixLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBQWpCO0FBQ0g7QUFDSjtBQUNKLHFCQVZELE1BVU87QUFDSCw0QkFBSSxLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLE9BQXJCLEtBQWlDLElBQXJDLEVBQTJDO0FBQ3ZDLHdDQUFZLElBQVosQ0FBaUIsS0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixDQUFqQjtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ0QsbUJBQU8sV0FBUDtBQUNIOzs7bUNBRVUsTSxFQUFRLEMsRUFBRyxDLEVBQUc7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQUksT0FBTyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLFdBQVcsSUFBaEQsRUFBc0Q7QUFDbEQsdUJBQU8sS0FBUDtBQUNIOztBQUVELGdCQUFJLGVBQWUsS0FBSyxPQUFMLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFuQjtBQUNBLGdCQUFJLEtBQUosRUFBVyxTQUFYOztBQUVBLGdCQUFJLE9BQU8sRUFBUCxJQUFhLGFBQWEsS0FBMUIsSUFBbUMsYUFBYSxRQUFiLEtBQTBCLElBQWpFLEVBQXVFO0FBQ25FO0FBQ0g7O0FBRUQ7QUFDQSxnQkFBSSxLQUFLLFNBQUwsS0FBbUIsS0FBSyxhQUFMLENBQW1CLEtBQTFDLEVBQWlEO0FBQzdDLG9CQUFHLGFBQWEsSUFBYixJQUFxQixNQUFyQixJQUErQixhQUFhLElBQWIsSUFBcUIsUUFBcEQsSUFBZ0UsYUFBYSxJQUFiLElBQXFCLFFBQXJGLElBQWlHLGFBQWEsSUFBYixJQUFxQixZQUF6SCxFQUF1STtBQUNuSSxnQ0FBWSxNQUFaO0FBQ0E7QUFDQSw0QkFBUSxPQUFPLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkIsQ0FBN0IsRUFBZ0MsQ0FBaEMsRUFBbUMsU0FBbkMsQ0FBUjtBQUNBLHdCQUFJLFVBQVUsS0FBZCxFQUFxQjtBQUNqQiw2QkFBSyxTQUFMLENBQWUsTUFBZjtBQUNBLHFDQUFhLFFBQWIsR0FBd0IsSUFBeEI7QUFDQSw2QkFBSyxJQUFMLENBQVUsUUFBVixFQUFvQixFQUFDLFVBQVMsVUFBVixFQUFzQixTQUFTLEVBQUMsR0FBRSxDQUFILEVBQU0sR0FBRSxDQUFSLEVBQVcsVUFBVSxPQUFPLEVBQTVCLEVBQWdDLE1BQUssU0FBckMsRUFBL0IsRUFBcEIsRUFBcUcsT0FBTyxRQUE1RztBQUNBLCtCQUFPLElBQVA7QUFDSCxxQkFMRCxNQUtPO0FBQ0gsK0JBQU8sS0FBUDtBQUNIO0FBQ0o7QUFDSjs7QUFFRDtBQUNBLGdCQUFJLEtBQUssU0FBTCxLQUFtQixLQUFLLGFBQUwsQ0FBbUIsSUFBMUMsRUFBZ0Q7QUFDNUMsb0JBQUksYUFBYSxJQUFiLElBQXFCLE1BQXpCLEVBQWlDO0FBQzdCLGdDQUFZLE1BQVo7QUFDQTtBQUNBLDRCQUFRLE9BQU8sWUFBUCxDQUFvQixPQUFwQixFQUE2QixDQUE3QixFQUFnQyxDQUFoQyxFQUFtQyxTQUFuQyxDQUFSO0FBQ0Esd0JBQUksVUFBVSxLQUFkLEVBQXFCO0FBQ2pCLDZCQUFLLFNBQUwsQ0FBZSxNQUFmO0FBQ0EscUNBQWEsUUFBYixHQUF3QixJQUF4QjtBQUNBLDZCQUFLLElBQUwsQ0FBVSxRQUFWLEVBQW9CLEVBQUMsVUFBUyxVQUFWLEVBQXNCLFNBQVMsRUFBQyxHQUFFLENBQUgsRUFBTSxHQUFFLENBQVIsRUFBVyxVQUFVLE9BQU8sRUFBNUIsRUFBZ0MsTUFBSyxTQUFyQyxFQUEvQixFQUFwQixFQUFxRyxPQUFPLFFBQTVHO0FBQ0EsK0JBQU8sSUFBUDtBQUNILHFCQUxELE1BS087QUFDSCwrQkFBTyxLQUFQO0FBQ0g7QUFDSjtBQUNKO0FBRUo7OzswQ0FFaUI7QUFDZCxnQkFBSSxXQUFXLFFBQVEsOEJBQVIsQ0FBZjs7QUFFQSxpQkFBSSxJQUFJLElBQUksQ0FBWixFQUFlLElBQUksS0FBSyxXQUF4QixFQUFxQyxHQUFyQyxFQUEwQztBQUN0QyxxQkFBSyxTQUFMLENBQWUsQ0FBZixJQUFvQixFQUFwQjtBQUNBLHFCQUFJLElBQUksSUFBSSxDQUFaLEVBQWUsSUFBSSxLQUFLLFFBQXhCLEVBQWtDLEdBQWxDLEVBQXVDO0FBQ25DLHlCQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLElBQXVCO0FBQ25CLDJCQUFFLENBRGlCO0FBRW5CLDJCQUFFO0FBRmlCLHFCQUF2QjtBQUlIO0FBQ0o7O0FBRUQsaUJBQUssSUFBSSxHQUFULElBQWdCLFFBQWhCLEVBQTBCO0FBQ3RCLG9CQUFJLENBQUMsU0FBUyxjQUFULENBQXdCLEdBQXhCLENBQUwsRUFBbUM7O0FBRW5DLG9CQUFJLE1BQU0sU0FBUyxHQUFULENBQVY7QUFDQSxxQkFBSyxJQUFJLElBQVQsSUFBaUIsR0FBakIsRUFBc0I7QUFDbEI7QUFDQSx3QkFBRyxDQUFDLElBQUksY0FBSixDQUFtQixJQUFuQixDQUFKLEVBQThCOztBQUU5Qix3QkFBSSxnQkFBZ0IsSUFBSSxJQUFKLEVBQVUsU0FBVixDQUFvQixNQUF4QztBQUNBLHlCQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksYUFBcEIsRUFBbUMsR0FBbkMsRUFBd0M7O0FBRXBDLDRCQUFJLFNBQVMsSUFBSSxJQUFKLEVBQVUsU0FBVixDQUFvQixDQUFwQixFQUF1QixLQUF2QixDQUE2QixHQUE3QixDQUFiO0FBQ0EsNEJBQUksSUFBSSxPQUFPLENBQVAsQ0FBUjtBQUNBLDRCQUFJLElBQUksT0FBTyxDQUFQLENBQVI7O0FBRUEsNkJBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsT0FBckIsR0FBK0IsS0FBL0I7QUFDQSw2QkFBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixRQUFyQixHQUFnQyxLQUFoQztBQUNBLDZCQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLElBQXJCLEdBQTRCLElBQUksSUFBSixFQUFVLElBQXRDOztBQUVBLDRCQUFJLElBQUksQ0FBUixFQUFXO0FBQ1AsaUNBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsS0FBckIsR0FBNkIsQ0FBN0I7QUFDSCx5QkFGRCxNQUVPLElBQUksSUFBSSxFQUFSLEVBQVk7QUFDZixpQ0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixLQUFyQixHQUE2QixDQUE3QjtBQUNIOztBQUVELDRCQUFJLE9BQU8sS0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixDQUFQLElBQStCLFdBQW5DLEVBQ0ksS0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixJQUFyQixHQUE0QixJQUFJLElBQUosRUFBVSxJQUF0QyxDQURKLEtBR0ksUUFBUSxHQUFSLENBQVksSUFBSSxHQUFKLEdBQVUsQ0FBVixHQUFjLGFBQTFCOztBQUVKLDRCQUFJLE9BQU8sSUFBSSxJQUFKLEVBQVUsVUFBakIsSUFBK0IsV0FBbkMsRUFBZ0Q7QUFDNUMsaUNBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsVUFBckIsR0FBa0MsSUFBSSxJQUFKLEVBQVUsVUFBNUM7QUFDSDtBQUNKO0FBQ0o7QUFFSjtBQUNKOzs7Z0NBRU8sQyxFQUFHLEMsRUFBRztBQUNWLG1CQUFPLEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FBUDtBQUNIOzs7eUNBRWdCO0FBQ2IsZ0JBQUksaUJBQWlCLEtBQUssWUFBTCxDQUFrQixZQUFsQixFQUFyQjtBQUNBLGdCQUFJLGdCQUFnQixLQUFLLFlBQUwsQ0FBa0IsV0FBbEIsRUFBcEI7QUFDQSxnQkFBSSxjQUFjLEVBQWxCO0FBQ0EsZ0JBQUksYUFBYSxFQUFqQjs7QUFFQSxpQkFBSyxJQUFJLENBQVQsSUFBYyxjQUFkLEVBQThCO0FBQzFCLDZCQUFhLEtBQUssYUFBTCxDQUFtQixlQUFlLENBQWYsQ0FBbkIsRUFBc0MsS0FBSyxnQkFBM0MsRUFBNkQsRUFBQyxHQUFFLGVBQWUsQ0FBZixFQUFrQixDQUFyQixFQUF3QixHQUFFLGVBQWUsQ0FBZixFQUFrQixDQUE1QyxFQUE3RCxDQUFiO0FBQ0Esb0JBQUksV0FBVyxNQUFYLEdBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCLGdDQUFZLElBQVosQ0FBaUIsRUFBQyxNQUFLLGVBQWUsQ0FBZixFQUFrQixJQUF4QixFQUE2QixRQUFPLEVBQUMsR0FBRSxlQUFlLENBQWYsRUFBa0IsQ0FBckIsRUFBdUIsR0FBRSxlQUFlLENBQWYsRUFBa0IsQ0FBM0MsRUFBcEMsRUFBbUYsTUFBSyxlQUFlLENBQWYsRUFBa0IsSUFBMUcsRUFBZ0gsT0FBTSxVQUF0SCxFQUFqQjtBQUNIO0FBQ0o7O0FBRUQsaUJBQUssSUFBSSxDQUFULElBQWMsYUFBZCxFQUE2QjtBQUN6Qiw2QkFBYSxLQUFLLGFBQUwsQ0FBbUIsZUFBZSxDQUFmLENBQW5CLEVBQXNDLEtBQUssZ0JBQTNDLEVBQTZELEVBQUMsR0FBRSxlQUFlLENBQWYsRUFBa0IsQ0FBckIsRUFBd0IsR0FBRSxlQUFlLENBQWYsRUFBa0IsQ0FBNUMsRUFBN0QsQ0FBYjtBQUNBLG9CQUFJLFdBQVcsTUFBWCxHQUFvQixDQUF4QixFQUEyQjtBQUN2QixnQ0FBWSxJQUFaLENBQWlCLEVBQUMsTUFBSyxVQUFOLEVBQWtCLE1BQUssY0FBYyxDQUFkLEVBQWlCLElBQXhDLEVBQThDLE9BQU0sVUFBcEQsRUFBakI7QUFDSDtBQUNKO0FBQ0QsbUJBQU8sV0FBUDtBQUNIOzs7OENBRXFCLFcsRUFBWSxTLEVBQVc7QUFDekMsZ0JBQUksTUFBSSxFQUFDLE9BQU0sRUFBQyxHQUFFLENBQUgsRUFBSyxHQUFFLENBQUMsQ0FBUixFQUFQLEVBQWtCLE1BQUssRUFBQyxHQUFFLENBQUgsRUFBSyxHQUFFLENBQVAsRUFBdkIsRUFBaUMsT0FBTSxFQUFDLEdBQUUsQ0FBSCxFQUFLLEdBQUUsQ0FBUCxFQUF2QyxFQUFpRCxNQUFLLEVBQUMsR0FBRSxDQUFDLENBQUosRUFBTSxHQUFFLENBQVIsRUFBdEQsRUFBUjs7QUFFQSxnQkFBSSxNQUFNLEVBQUMsR0FBRyxTQUFTLFlBQVksQ0FBckIsSUFBMEIsU0FBUyxJQUFJLFNBQUosRUFBZSxDQUF4QixDQUE5QixFQUEyRCxHQUFHLFNBQVMsWUFBWSxDQUFyQixJQUEwQixTQUFTLElBQUksU0FBSixFQUFlLENBQXhCLENBQXhGLEVBQVY7QUFDQSxnQkFBRyxJQUFJLENBQUosR0FBUSxDQUFSLElBQWEsSUFBSSxDQUFKLEdBQVEsRUFBckIsSUFBMEIsSUFBSSxDQUFKLEdBQVEsQ0FBbEMsSUFBdUMsSUFBSSxDQUFKLEdBQVEsRUFBbEQsRUFDSSxPQUFPLEtBQVAsQ0FESixLQUdJLE9BQU8sRUFBQyxHQUFHLFNBQVMsWUFBWSxDQUFyQixJQUEwQixTQUFTLElBQUksU0FBSixFQUFlLENBQXhCLENBQTlCLEVBQTJELEdBQUcsU0FBUyxZQUFZLENBQXJCLElBQTBCLFNBQVMsSUFBSSxTQUFKLEVBQWUsQ0FBeEIsQ0FBeEYsRUFBUDtBQUNQOzs7c0NBRWEsYSxFQUFlLEssRUFBTyxZLEVBQWMsYSxFQUFjO0FBQzVELGdCQUFJLFFBQVEsQ0FBWixFQUFlO0FBQ1gsd0JBQVEsS0FBUixDQUFjLDBEQUFkO0FBQ0EsdUJBQU8sS0FBUDtBQUNIO0FBQ0QsZ0JBQUksYUFBYSxFQUFqQjtBQUNBLGdCQUFJLGNBQWMsRUFBbEI7QUFDQSxnQkFBSSxrQkFBa0IsSUFBdEI7QUFDQSxnQkFBSSxrQkFBa0IsSUFBdEI7QUFDQTtBQUNBOztBQUVBLGdCQUFJLE9BQU8sYUFBUCxLQUF5QixXQUE3QixFQUEwQztBQUN0QyxvQkFBSSxRQUFRLEtBQUssUUFBTCxDQUFjLEtBQUssWUFBbkIsQ0FBWjtBQUNBLG9CQUFJLFNBQVMsS0FBYjs7QUFFQSxxQkFBSyxJQUFJLENBQVQsSUFBYyxLQUFkLEVBQXFCO0FBQ2pCLHdCQUFJLE1BQU0sQ0FBTixFQUFTLENBQVQsSUFBYyxhQUFhLENBQTNCLElBQWdDLE1BQU0sQ0FBTixFQUFTLENBQVQsSUFBYyxhQUFhLENBQS9ELEVBQWtFO0FBQzlELGlDQUFTLElBQVQ7QUFDSDtBQUNKOztBQUVELG9CQUFJLFdBQVcsSUFBZixFQUFxQjtBQUNqQix5QkFBSyxJQUFJLENBQVQsSUFBYyxLQUFkLEVBQXFCO0FBQ2pCLDRCQUFJLGFBQWEsQ0FBYixJQUFrQixNQUFNLENBQU4sRUFBUyxDQUEzQixJQUFnQyxhQUFhLENBQWIsSUFBa0IsTUFBTSxDQUFOLEVBQVMsQ0FBL0QsRUFBa0U7QUFBRTtBQUFXLHlCQUQ5RCxDQUMrRDtBQUNoRiw0QkFBSSxLQUFLLFNBQUwsQ0FBZSxNQUFNLENBQU4sRUFBUyxDQUF4QixFQUEyQixNQUFNLENBQU4sRUFBUyxDQUFwQyxFQUF1QyxRQUF2QyxLQUFvRCxJQUF4RCxFQUE4RDtBQUFFO0FBQVcseUJBRjFELENBRTJEO0FBQzVFLDRCQUFJLFFBQVEsQ0FBWixFQUFlO0FBQ1gsMENBQWMsWUFBWSxNQUFaLENBQW1CLEtBQUssYUFBTCxDQUFtQixhQUFuQixFQUFrQyxLQUFsQyxFQUF5QyxFQUFDLEdBQUUsTUFBTSxDQUFOLEVBQVMsQ0FBWixFQUFlLEdBQUUsTUFBTSxDQUFOLEVBQVMsQ0FBMUIsRUFBekMsRUFBdUUsWUFBdkUsQ0FBbkIsQ0FBZDtBQUNILHlCQUZELE1BRU87QUFDSCx3Q0FBWSxJQUFaLENBQWlCLE1BQU0sQ0FBTixDQUFqQjtBQUNIO0FBQ0QsNkJBQUssSUFBSSxDQUFULElBQWMsV0FBZCxFQUEyQjtBQUN2QixnQ0FBRyxZQUFZLENBQVosRUFBZSxDQUFmLEtBQXFCLGFBQWEsQ0FBbEMsSUFBdUMsWUFBWSxDQUFaLEVBQWUsQ0FBZixLQUFxQixhQUFhLENBQTVFLEVBQ0ksV0FBVyxJQUFYLENBQWdCLFlBQVksQ0FBWixDQUFoQjtBQUNQO0FBQ0o7QUFDSjtBQUNKOztBQUVELGlCQUFLLElBQUksU0FBVCxJQUFzQixLQUFLLGFBQTNCLEVBQTBDO0FBQ3RDLGtDQUFrQixLQUFLLHFCQUFMLENBQTJCLFlBQTNCLEVBQXlDLFNBQXpDLENBQWxCO0FBQ0Esb0JBQUcsb0JBQW9CLEtBQXZCLEVBQThCO0FBQUU7QUFBVzs7QUFFM0Msa0NBQWtCLEtBQUssU0FBTCxDQUFlLGdCQUFnQixDQUEvQixFQUFrQyxnQkFBZ0IsQ0FBbEQsQ0FBbEI7O0FBRUEsb0JBQUksZ0JBQWdCLE9BQWhCLEtBQTRCLElBQWhDLEVBQXNDO0FBQUU7QUFBVztBQUNuRCxvQkFBSSxnQkFBZ0IsSUFBaEIsS0FBeUIsT0FBN0IsRUFBc0M7QUFBRTtBQUFXO0FBQ25ELG9CQUFJLEtBQUssU0FBTCxDQUFlLEtBQUssYUFBTCxDQUFtQixTQUFuQixDQUFmLEVBQThDLFlBQTlDLE1BQWdFLEtBQXBFLEVBQTJFO0FBQUU7QUFBVzs7QUFFeEYsb0JBQUksT0FBTyxhQUFQLEtBQXlCLFdBQTFCLElBQTRDLE9BQU8sYUFBUCxLQUF5QixXQUExQixJQUEyQyxLQUFLLFNBQUwsQ0FBZSxlQUFmLE1BQW9DLEtBQUssU0FBTCxDQUFlLGFBQWYsQ0FBN0gsRUFBK0o7QUFDM0o7QUFDQSx3QkFBSSxVQUFVLENBQWQsRUFBZ0I7QUFDWiw0QkFBRyxnQkFBZ0IsUUFBaEIsS0FBNkIsS0FBaEMsRUFBdUM7QUFDbkMsdUNBQVcsSUFBWCxDQUFnQixlQUFoQjtBQUNIO0FBQ0oscUJBSkQsTUFLSztBQUNELHNDQUFjLFlBQVksTUFBWixDQUFtQixLQUFLLGFBQUwsQ0FBbUIsYUFBbkIsRUFBa0MsS0FBbEMsRUFBeUMsZUFBekMsRUFBMEQsWUFBMUQsQ0FBbkIsQ0FBZDtBQUNBLDZCQUFJLElBQUksS0FBUixJQUFpQixXQUFqQixFQUE4QjtBQUMxQixnQ0FBRyxZQUFZLEtBQVosRUFBbUIsQ0FBbkIsS0FBeUIsYUFBYSxDQUF0QyxJQUEyQyxZQUFZLEtBQVosRUFBbUIsQ0FBbkIsS0FBeUIsYUFBYSxDQUFwRixFQUNJLFdBQVcsSUFBWCxDQUFnQixZQUFZLEtBQVosQ0FBaEI7QUFDUDtBQUNKO0FBQ0o7QUFDSjtBQUNELG1CQUFPLFVBQVA7QUFDSDs7O2tDQUVTLFMsRUFBVyxpQixFQUFtQjtBQUNwQyxpQkFBSyxRQUFMLEdBQWdCLFFBQVEsNEJBQVIsQ0FBaEI7O0FBRUEsb0JBQVEsU0FBUjtBQUNJLHFCQUFLLEtBQUssYUFBTCxDQUFtQixLQUF4QjtBQUErQjtBQUMzQix3QkFBSSxTQUFTLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsa0JBQWtCLENBQXJDLEVBQXdDLGtCQUFrQixDQUExRCxJQUE2RCxLQUFLLGFBQUwsQ0FBbUIsS0FBekYsTUFBb0csQ0FBeEcsRUFBMkc7QUFDdkcsK0JBQU8sSUFBUDtBQUNIO0FBQ0QsMkJBQU8sS0FBUDtBQUNKLHFCQUFLLEtBQUssYUFBTCxDQUFtQixLQUF4QjtBQUErQjtBQUMzQix3QkFBSSxTQUFTLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsa0JBQWtCLENBQXJDLEVBQXdDLGtCQUFrQixDQUExRCxJQUE2RCxLQUFLLGFBQUwsQ0FBbUIsS0FBekYsTUFBb0csQ0FBeEcsRUFBMkc7QUFDdkcsK0JBQU8sSUFBUDtBQUNIO0FBQ0QsMkJBQU8sS0FBUDtBQUNKLHFCQUFLLEtBQUssYUFBTCxDQUFtQixJQUF4QjtBQUE4QjtBQUMxQix3QkFBSSxTQUFTLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsa0JBQWtCLENBQXJDLEVBQXdDLGtCQUFrQixDQUExRCxJQUE2RCxLQUFLLGFBQUwsQ0FBbUIsSUFBekYsTUFBbUcsQ0FBdkcsRUFBMEc7QUFDdEcsK0JBQU8sSUFBUDtBQUNIO0FBQ0QsMkJBQU8sS0FBUDtBQUNKLHFCQUFLLEtBQUssYUFBTCxDQUFtQixJQUF4QjtBQUE4QjtBQUMxQix3QkFBSSxTQUFTLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsa0JBQWtCLENBQXJDLEVBQXdDLGtCQUFrQixDQUExRCxJQUE2RCxLQUFLLGFBQUwsQ0FBbUIsSUFBekYsTUFBbUcsQ0FBdkcsRUFBMEc7QUFDdEcsK0JBQU8sSUFBUDtBQUNIO0FBQ0QsMkJBQU8sS0FBUDtBQUNKO0FBQ0ksMkJBQU8sS0FBUDtBQXRCUjtBQXlCSDs7O2lDQUVRLEksRUFBTTtBQUNYLGdCQUFHLEtBQUssU0FBTCxJQUFrQixLQUFLLGFBQUwsQ0FBbUIsSUFBckMsSUFBNkMsS0FBSyxTQUFMLElBQWtCLEtBQUssYUFBTCxDQUFtQixJQUFsRixJQUEwRixLQUFLLFlBQUwsQ0FBa0IsUUFBbEIsSUFBOEIsS0FBSyxRQUFoSSxFQUEwSTtBQUN0SSxxQkFBSyxnQkFBTCxHQUF3QixLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBZ0IsQ0FBM0IsSUFBZ0MsQ0FBeEQ7QUFDQSxxQkFBSyxZQUFMLENBQWtCLGtCQUFsQixHQUF1QyxLQUFLLGNBQUwsRUFBdkM7O0FBRUE7QUFDQSxxQkFBSyxJQUFMLENBQVUsUUFBVixFQUFvQixFQUFDLFVBQVMsWUFBVixFQUF3QixTQUFTLEVBQUMsT0FBTSxLQUFLLGdCQUFaLEVBQThCLFlBQVcsS0FBSyxZQUFMLENBQWtCLGtCQUEzRCxFQUFqQyxFQUFwQixFQUFzSSxLQUFLLFFBQTNJO0FBQ0EscUJBQUssU0FBTDtBQUNIO0FBQ0o7Ozs0QkFFRyxJLEVBQU07QUFDTixnQkFBRyxPQUFPLEtBQUssUUFBWixJQUF5QixXQUE1QixFQUF5QztBQUNyQyxxQkFBSyxJQUFMLENBQVUsVUFBVixFQUFzQixFQUFDLFNBQVEsS0FBSyxLQUFLLFFBQVYsQ0FBVCxFQUF0QixFQUFxRCxLQUFLLFFBQTFEO0FBQ0g7QUFDSjs7OzZCQUVJLEcsRUFBSyxJLEVBQU0sUSxFQUFVO0FBQ3RCLGdCQUFHLE9BQU8sVUFBUCxJQUFxQixPQUFPLFNBQTVCLElBQXlDLE9BQU8sUUFBbkQsRUFBNkQ7QUFDekQsb0JBQUcsT0FBTyxRQUFQLElBQW9CLFdBQXZCLEVBQW9DO0FBQ2hDLDRCQUFRLEtBQVIsQ0FBYyxvQkFBZDtBQUNBO0FBQ0g7QUFDRCxxQkFBSyxFQUFMLENBQVEsT0FBUixDQUFnQixTQUFoQixDQUEwQixRQUExQixFQUFvQyxJQUFwQyxDQUF5QyxHQUF6QyxFQUE4QyxJQUE5QztBQUNIOztBQUVELGdCQUFHLE9BQU8sUUFBVixFQUFvQjtBQUNoQixvQkFBRyxPQUFPLFFBQVAsSUFBb0IsV0FBdkIsRUFBb0M7QUFDaEMsNEJBQVEsS0FBUixDQUFjLG9CQUFkO0FBQ0E7QUFDSDtBQUNELHFCQUFLLEVBQUwsQ0FBUSxPQUFSLENBQWdCLFNBQWhCLENBQTBCLFFBQTFCLEVBQW9DLElBQXBDLENBQXlDLEdBQXpDLEVBQThDLElBQTlDO0FBQ0g7O0FBRUQsZ0JBQUcsT0FBTyxLQUFWLEVBQWlCO0FBQ2IscUJBQUssRUFBTCxDQUFRLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBcUIsR0FBckIsRUFBMEIsSUFBMUI7QUFDSDtBQUNKOzs7a0NBRVMsRyxFQUFLLEksRUFBTTtBQUNqQixpQkFBSyxJQUFJLENBQVQsSUFBYyxLQUFLLFlBQW5CLEVBQWlDO0FBQzdCLHFCQUFLLElBQUwsQ0FBVSxHQUFWLEVBQWUsSUFBZixFQUFxQixLQUFLLFlBQUwsQ0FBa0IsQ0FBbEIsRUFBcUIsUUFBMUM7QUFDSDtBQUNKOzs7Ozs7QUFLTCxPQUFPLE9BQVAsQ0FBZSxRQUFmLEdBQTBCLFFBQTFCOzs7Ozs7Ozs7OztBQ2w1QkE7Ozs7Ozs7Ozs7OztJQUVNLEk7OztBQUVKLGtCQUFjO0FBQUE7O0FBQUE7QUFFYjs7Ozs4QkFFUztBQUNSLFdBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsV0FBaEIsRUFBNkIsc0JBQTdCO0FBQ0Q7Ozs2QkFFUTtBQUNQLFdBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsV0FBaEIsR0FBOEIsQ0FBOUI7QUFDQSxXQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsY0FBZixHQUFnQyxJQUFoQztBQUNBLFdBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IscUJBQWhCLEdBQXdDLElBQXhDO0FBQ0UsV0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixTQUFoQixHQUE0QixPQUFPLFlBQVAsQ0FBb0IsTUFBaEQ7QUFDRjtBQUNBLFVBQUksQ0FBQyxLQUFLLElBQUwsQ0FBVSxNQUFWLENBQWlCLE9BQXRCLEVBQStCO0FBQzdCLGFBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsY0FBaEIsR0FBaUMsSUFBakM7QUFDQSxhQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFNBQWhCLEdBQTRCLE9BQU8sWUFBUCxDQUFvQixNQUFoRDtBQUNBLGFBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsUUFBaEIsR0FBNEIsR0FBNUI7QUFDQSxhQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFNBQWhCLEdBQTRCLEdBQTVCO0FBQ0EsYUFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixnQkFBaEIsQ0FBaUMsSUFBakM7QUFDRDs7QUFFRCxXQUFLLG1CQUFMOztBQUVBLFdBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsS0FBaEIsQ0FBc0IsV0FBdEI7QUFDRDs7OzBDQUVvQjtBQUNuQixXQUFLLElBQUwsQ0FBVSxNQUFWLEdBQW1CO0FBQ2pCLGVBQU8sQ0FEVTtBQUVqQixzQkFBYztBQUZHLE9BQW5CO0FBSUQ7Ozs7RUFsQ2dCLE9BQU8sSzs7a0JBc0NYLEk7Ozs7Ozs7Ozs7O0FDeENmOzs7Ozs7Ozs7Ozs7SUFFTSxJOzs7QUFFSixvQkFBYztBQUFBOztBQUFBO0FBRWI7Ozs7aUNBRVE7O0FBRVA7QUFDQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQix1QkFBaEIsR0FBMEMsSUFBMUM7O0FBRUEsaUJBQUssSUFBTCxDQUFVLFVBQVYsR0FBdUIsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLEtBQWQsRUFBdkI7QUFDQSxpQkFBSyxJQUFMLENBQVUsUUFBVixHQUFxQixLQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsS0FBZCxFQUFyQjs7QUFFQSxpQkFBSyxJQUFMLENBQVUsS0FBVixHQUFrQixJQUFJLFNBQUosQ0FBYyxLQUFLLElBQW5CLENBQWxCO0FBQ0EsaUJBQUssWUFBTDs7QUFFQSxpQkFBSyxVQUFMLEdBQWtCLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxNQUFkLENBQXFCLENBQXJCLEVBQXVCLENBQXZCLEVBQXlCLFlBQXpCLENBQWxCO0FBQ0EsaUJBQUssVUFBTCxDQUFnQixNQUFoQixDQUF1QixLQUF2QixDQUE2QixHQUE3QixFQUFpQyxHQUFqQztBQUNBLGlCQUFLLElBQUwsQ0FBVSxVQUFWLENBQXFCLE9BQXJCLEdBQStCLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsT0FBL0M7QUFDQSxpQkFBSyxJQUFMLENBQVUsVUFBVixDQUFxQixPQUFyQixHQUErQixLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE9BQS9DOztBQUVBLGlCQUFLLElBQUwsQ0FBVSxLQUFWLEdBQWtCLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxNQUFkLENBQXFCLENBQXJCLEVBQXVCLENBQXZCLEVBQXlCLFFBQXpCLENBQWxCOztBQUVBLGlCQUFLLElBQUwsQ0FBVSxFQUFWLEdBQWUsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLE1BQWQsQ0FBcUIsRUFBckIsRUFBd0IsRUFBeEIsRUFBMkIsU0FBM0IsQ0FBZjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxFQUFWLENBQWEsS0FBYixDQUFtQixLQUFuQixDQUF5QixJQUF6QjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxFQUFWLENBQWEsWUFBYixHQUE0QixLQUE1QjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxFQUFWLENBQWEsT0FBYixHQUF1QixDQUFDLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxNQUFkLENBQXFCLE1BQXJCLENBQUQsQ0FBdkI7O0FBRUEsaUJBQUssSUFBTCxDQUFVLEVBQVYsQ0FBYSxPQUFiLEdBQXVCLFlBQVc7QUFDOUIsb0JBQUksS0FBSyxJQUFMLENBQVUsUUFBVixDQUFtQixlQUFuQixLQUF1QyxJQUEzQyxFQUFpRDtBQUM3Qyx5QkFBSyxJQUFMLENBQVUsTUFBVixDQUFpQixTQUFqQixDQUEyQixFQUFDLE9BQU8sSUFBUixFQUEzQjtBQUNIO0FBQ0osYUFKRDs7QUFNQSxpQkFBSyxJQUFMLENBQVUsRUFBVixDQUFhLE1BQWIsQ0FBb0IsV0FBcEIsQ0FBZ0MsR0FBaEMsQ0FBb0MsS0FBSyxJQUFMLENBQVUsRUFBVixDQUFhLE9BQWpELEVBQTBELElBQTFEOztBQUVBLGlCQUFLLElBQUwsQ0FBVSxFQUFWLENBQWEsTUFBYixHQUFzQixZQUFXO0FBQzdCLHFCQUFLLE9BQUwsR0FBZSxJQUFmO0FBQ0EscUJBQUssWUFBTCxHQUFvQixJQUFwQjtBQUNILGFBSEQ7O0FBS0EsaUJBQUssSUFBTCxDQUFVLEVBQVYsQ0FBYSxPQUFiLEdBQXVCLFlBQVc7QUFDOUIscUJBQUssT0FBTCxHQUFlLENBQUMsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLE1BQWQsQ0FBcUIsTUFBckIsQ0FBRCxDQUFmO0FBQ0EscUJBQUssWUFBTCxHQUFvQixLQUFwQjtBQUNILGFBSEQ7O0FBS0EsaUJBQUssSUFBTCxDQUFVLElBQVYsR0FBaUIsbUJBQVMsS0FBSyxJQUFkLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLENBQWpCO0FBQ0EsaUJBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxLQUFmLENBQXFCLEtBQXJCLENBQTJCLElBQTNCOztBQUVBLGlCQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsUUFBZCxDQUF1QixLQUFLLElBQUwsQ0FBVSxJQUFqQzs7QUFFQSxpQkFBSyxJQUFMLENBQVUsUUFBVixDQUFtQixHQUFuQixDQUF1QixLQUFLLElBQUwsQ0FBVSxLQUFqQztBQUNBLGlCQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLEdBQW5CLENBQXVCLEtBQUssSUFBTCxDQUFVLElBQWpDO0FBQ0EsaUJBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsR0FBbkIsQ0FBdUIsS0FBSyxJQUFMLENBQVUsRUFBakM7QUFDQSxpQkFBSyxJQUFMLENBQVUsVUFBVixDQUFxQixHQUFyQixDQUF5QixLQUFLLFVBQTlCOztBQUVBLGlCQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLGVBQW5CLENBQW1DLEVBQW5DLEVBQXVDLEVBQXZDLEVBQTJDLEVBQUMsR0FBRSxJQUFFLEtBQUssVUFBTCxDQUFnQixLQUFoQixHQUFzQixDQUEzQixFQUE4QixHQUFFLElBQUUsS0FBSyxVQUFMLENBQWdCLE1BQWhCLEdBQXVCLENBQXpELEVBQTNDOztBQUdBLGlCQUFLLFlBQUw7QUFFRDs7O3VDQUdjO0FBQ1gsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsV0FBaEIsQ0FDRTtBQUNBLHNCQUFNLFVBRE47QUFFQSxtQ0FBbUIsS0FGbkI7QUFHQSxtQ0FBbUIsS0FIbkI7QUFJQSwwQkFBVSxDQUFDO0FBQ1AsMEJBQU0sVUFEQztBQUVQLGtDQUFjLFVBRlA7QUFHUCxrQ0FBYyxHQUhQO0FBSVAsbUNBQWUsR0FKUjtBQUtQLG1DQUFlO0FBTFIsaUJBQUQsRUFNUDtBQUNDLDBCQUFNLE1BRFA7QUFFQyw2QkFBUyx5Q0FGVjtBQUdDLGdDQUFZLGNBSGI7QUFJQyw4QkFBVSxFQUpYO0FBS0MsMkJBQU8sVUFMUjtBQU1DLDZCQUFTLENBQUM7QUFOWCxpQkFOTyxFQWFQO0FBQ0MsMEJBQU0sT0FEUDtBQUVDLDZCQUFTLFVBRlY7QUFHQyw2QkFBUyxHQUhWO0FBSUMsNkJBQVMsQ0FBQyxFQUpYO0FBS0Msa0NBQWMsR0FMZjtBQU1DLDhCQUFVLG9CQUFZO0FBQ2xCLDZCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFNBQWhCLENBQTBCLFVBQTFCO0FBQ0EsNkJBQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsU0FBakIsQ0FBMkIsRUFBQyxPQUFNLGdCQUFQLEVBQXlCLE9BQU0sT0FBL0IsRUFBM0I7QUFDSDtBQVRGLGlCQWJPLEVBdUJQO0FBQ0MsMEJBQU0sT0FEUDtBQUVDLDZCQUFTLFNBRlY7QUFHQyw2QkFBUyxHQUhWO0FBSUMsNkJBQVMsRUFKVjtBQUtDLGtDQUFjLEdBTGY7QUFNQyw4QkFBVSxvQkFBWTtBQUNsQiw2QkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixTQUFoQixDQUEwQixVQUExQjtBQUNBLDZCQUFLLElBQUwsQ0FBVSxNQUFWLENBQWlCLFNBQWpCLENBQTJCLEVBQUMsT0FBTSxnQkFBUCxFQUF5QixPQUFNLE9BQS9CLEVBQTNCO0FBQ0g7QUFURixpQkF2Qk87QUFKVixhQURGO0FBd0NIOzs7dUNBRWM7O0FBRWIsZ0JBQUksUUFBUSxPQUFPLFVBQVAsR0FBa0IsS0FBSyxVQUFMLENBQWdCLE1BQTlDO0FBQ0EsZ0JBQUcsUUFBUSxHQUFYLEVBQWdCO0FBQ1osd0JBQVEsR0FBUjtBQUNIOztBQUVELGlCQUFLLElBQUwsQ0FBVSxVQUFWLENBQXFCLEtBQXJCLENBQTJCLEtBQTNCLENBQWlDLEtBQWpDO0FBQ0EsaUJBQUssSUFBTCxDQUFVLFVBQVYsQ0FBcUIsQ0FBckIsR0FBeUIsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixPQUF6Qzs7QUFFQSxnQkFBRyxLQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLE1BQW5CLENBQTBCLEVBQTFCLElBQWdDLENBQW5DLEVBQXNDO0FBQ2xDLHFCQUFLLElBQUwsQ0FBVSxVQUFWLENBQXFCLEtBQXJCLEdBQTZCLENBQUMsRUFBOUI7QUFDQTtBQUNBO0FBQ0EscUJBQUssSUFBTCxDQUFVLFVBQVYsQ0FBcUIsQ0FBckIsR0FBeUIsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixPQUFoQixHQUEwQixDQUFFLEtBQUssVUFBTCxDQUFnQixLQUFoQixHQUFzQixLQUF2QixHQUE4QixPQUFPLFdBQXRDLElBQW1ELENBQXRHLENBSmtDLENBSXVFO0FBQzVHLGFBTEQsTUFLTztBQUNILHFCQUFLLElBQUwsQ0FBVSxVQUFWLENBQXFCLEtBQXJCLEdBQTZCLEVBQTdCO0FBQ0E7QUFDQTtBQUNBLHFCQUFLLElBQUwsQ0FBVSxVQUFWLENBQXFCLENBQXJCLEdBQXlCLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsT0FBaEIsR0FBMEIsQ0FBRSxLQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsR0FBc0IsS0FBdkIsR0FBOEIsT0FBTyxXQUF0QyxJQUFtRCxDQUF0RyxDQUpHLENBSXNHO0FBQzVHO0FBRUY7OztpQ0FHUTtBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNEOzs7aUNBRVM7QUFDTixpQkFBSyxZQUFMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQ0Q7OzsyQ0FFZ0I7QUFDakIsZ0JBQUcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixZQUFuQixFQUFpQztBQUM3QixxQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixjQUFoQjtBQUNILGFBRkQsTUFFTztBQUNILHFCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLGVBQWhCLENBQWdDLEtBQWhDO0FBQ0g7QUFDRjs7OztFQWpNZ0IsT0FBTyxLOztrQkFvTVgsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN0TVQsSTs7O0FBRUosa0JBQWM7QUFBQTs7QUFBQTtBQUViOzs7OzZCQUVRO0FBQ1A7QUFDQSxXQUFLLFVBQUwsR0FBa0IsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLE1BQWQsQ0FBcUIsQ0FBckIsRUFBdUIsQ0FBdkIsRUFBeUIsWUFBekIsQ0FBbEI7QUFDQSxXQUFLLE9BQUwsR0FBZSxLQUFLLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBd0IsS0FBeEIsR0FBZ0MsS0FBSyxVQUFMLENBQWdCLE9BQWhCLENBQXdCLE1BQXZFO0FBQ0EsV0FBSyxVQUFMLEdBQWtCLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsS0FBaEIsR0FBd0IsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixNQUExRDtBQUNBLFVBQUssQ0FBQyxLQUFLLFVBQUwsR0FBa0IsS0FBSyxPQUF4QixJQUFtQyxDQUFuQyxHQUF1QyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLEtBQXhELEdBQWlFLENBQXJFLEVBQXdFO0FBQ3BFLGFBQUssVUFBTCxDQUFnQixLQUFoQixHQUF3QixLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE1BQWhCLEdBQXVCLEtBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixNQUEvQyxHQUFzRCxLQUFLLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBd0IsS0FBdEc7QUFDQSxhQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsR0FBeUIsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixNQUF6QztBQUNBLGFBQUssVUFBTCxDQUFnQixDQUFoQixHQUFvQixDQUFDLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsS0FBaEIsR0FBd0IsS0FBSyxVQUFMLENBQWdCLEtBQXpDLElBQWtELENBQXRFO0FBQ0gsT0FKRCxNQUlPO0FBQ0gsYUFBSyxVQUFMLENBQWdCLEtBQWhCLEdBQXdCLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsS0FBeEM7QUFDQSxhQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsR0FBeUIsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixLQUFoQixHQUFzQixLQUFLLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBd0IsS0FBOUMsR0FBb0QsS0FBSyxVQUFMLENBQWdCLE9BQWhCLENBQXdCLE1BQXJHO0FBQ0EsYUFBSyxVQUFMLENBQWdCLENBQWhCLEdBQW9CLENBQUMsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixNQUFoQixHQUF5QixLQUFLLFVBQUwsQ0FBZ0IsTUFBMUMsSUFBb0QsQ0FBeEU7QUFDSDs7QUFFRDtBQUNBLFdBQUssWUFBTCxHQUFvQixLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixPQUE5QixFQUFzQyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE9BQXRELEVBQStELGFBQVcsS0FBSyxJQUFMLENBQVUsTUFBVixDQUFpQixLQUEzRixFQUFrRztBQUNwSCxjQUFNLFlBRDhHLEVBQ2hHLE1BQU0sU0FEMEYsRUFDL0UsT0FBTztBQUR3RSxPQUFsRyxDQUFwQjtBQUdBLFdBQUssWUFBTCxDQUFrQixNQUFsQixDQUF5QixHQUF6QixDQUE2QixHQUE3Qjs7QUFFQSxXQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLEdBQWxCLENBQXNCLEtBQUssV0FBM0IsRUFBd0MsSUFBeEM7O0FBRUE7QUFDQSxXQUFLLHNCQUFMLEdBQThCLEtBQTlCO0FBQ0EsV0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLE1BQWYsQ0FBc0IsR0FBdEIsQ0FBMEIsT0FBTyxLQUFQLENBQWEsTUFBYixHQUFzQixHQUFoRCxFQUFxRCxZQUFVO0FBQUUsYUFBSyxzQkFBTCxHQUE4QixJQUE5QjtBQUFxQyxPQUF0RyxFQUF3RyxJQUF4Rzs7QUFFQSxXQUFLLHNCQUFMO0FBQ0EsV0FBSyxvQkFBTDtBQUNEOzs7NkNBRXVCO0FBQ3RCLFVBQUksTUFBTSxhQUFhLFFBQWIsSUFBeUIsQ0FBbkMsQ0FEc0IsQ0FDZ0I7QUFDdEMsVUFBSSxLQUFLLElBQUwsQ0FBVSxNQUFWLENBQWlCLEtBQWpCLEdBQXlCLEdBQTdCLEVBQWlDO0FBQUUscUJBQWEsUUFBYixHQUF3QixLQUFLLElBQUwsQ0FBVSxNQUFWLENBQWlCLEtBQXpDO0FBQWlEO0FBQ3JGOzs7MkNBRXFCO0FBQ3BCLFdBQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsS0FBakIsR0FBeUIsQ0FBekI7QUFDRDs7OzZCQUNRLENBQUU7OztrQ0FFSTtBQUNiLFVBQUcsS0FBSyxzQkFBUixFQUErQjtBQUM3QixhQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLEtBQWhCLENBQXNCLE1BQXRCO0FBQ0Q7QUFDRjs7OztFQW5EZ0IsT0FBTyxLOztrQkF1RFgsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN2RFQsUzs7O0FBRUosdUJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLLEtBQUwsR0FBYSxJQUFiO0FBQ0EsVUFBSyxLQUFMLEdBQWEsS0FBYjtBQUhZO0FBSWI7Ozs7OEJBRVM7QUFDUjtBQUNBLFdBQUssS0FBTCxHQUFhLEtBQUssR0FBTCxDQUFTLE1BQVQsQ0FBZ0IsS0FBSyxJQUFMLENBQVUsS0FBVixHQUFrQixHQUFsQixHQUF3QixHQUF4QyxFQUE2QyxLQUFLLElBQUwsQ0FBVSxNQUFWLEdBQW1CLEdBQW5CLEdBQXlCLEVBQXRFLEVBQTBFLFdBQTFFLENBQWI7QUFDQSxXQUFLLElBQUwsQ0FBVSxnQkFBVixDQUEyQixLQUFLLEtBQWhDOztBQUVBO0FBQ0EsV0FBSyxJQUFMLENBQVUsY0FBVixDQUF5QixPQUF6QixDQUFpQyxLQUFLLGNBQXRDLEVBQXNELElBQXREO0FBQ0EsV0FBSyxhQUFMO0FBQ0Q7OztvQ0FFZTs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNKO0FBQ0ksV0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLE1BQWYsQ0FBc0IsTUFBdEIsRUFBOEIscUVBQTlCOztBQUdBO0FBQ0EsV0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLElBQWYsQ0FBb0IsWUFBcEIsRUFBa0Msd0JBQWxDO0FBQ0EsV0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLElBQWYsQ0FBb0IsVUFBcEIsRUFBZ0Msc0JBQWhDOztBQUVBO0FBQ0E7QUFDQSxXQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsS0FBZixDQUFxQixZQUFyQixFQUFrQyx5QkFBbEM7QUFDQSxXQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsV0FBZixDQUEyQixNQUEzQixFQUFrQyxpQkFBbEMsRUFBcUQsR0FBckQsRUFBMEQsR0FBMUQsRUFBK0QsRUFBL0Q7QUFDQSxXQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsS0FBZixDQUFxQixRQUFyQixFQUE4QixtQkFBOUI7O0FBRUE7QUFDQSxXQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsS0FBZixDQUFxQixVQUFyQixFQUFnQyxxQkFBaEM7QUFDQSxXQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsS0FBZixDQUFxQixTQUFyQixFQUErQixvQkFBL0I7QUFDQSxXQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsS0FBZixDQUFxQixTQUFyQixFQUErQixvQkFBL0I7O0FBRUE7QUFDQSxXQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsV0FBZixDQUEyQixPQUEzQixFQUFvQyxrQkFBcEMsRUFBd0QsR0FBeEQsRUFBNkQsR0FBN0Q7QUFDQSxXQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsV0FBZixDQUEyQixVQUEzQixFQUF1QyxxQkFBdkMsRUFBNkQsR0FBN0QsRUFBa0UsR0FBbEUsRUFBdUUsQ0FBdkU7QUFDQSxXQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsS0FBZixDQUFxQixNQUFyQixFQUE2QixpQkFBN0IsRUFBZ0Qsa0JBQWhELEVBQW9FLE9BQU8sTUFBUCxDQUFjLHVCQUFsRjs7QUFFQTs7QUFFQTtBQUNBLFdBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxLQUFmLENBQXFCLFNBQXJCLEVBQWdDLG9CQUFoQztBQUNBLFdBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxLQUFmLENBQXFCLFlBQXJCLEVBQW1DLHVCQUFuQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Q7OztxQ0FFZ0I7QUFDZixXQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLEtBQWhCLENBQXNCLE9BQXRCO0FBQ0E7QUFDRDs7OztFQS9EcUIsT0FBTyxLOztrQkFrRWhCLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRVQsSzs7O0FBRUoscUJBQWM7QUFBQTs7QUFBQTtBQUVkOzs7O2lDQUVTO0FBQ1AsaUJBQUssSUFBTCxDQUFVLElBQVYsR0FBaUIsTUFBakI7O0FBRUEsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsdUJBQWhCLEdBQTBDLElBQTFDO0FBQ0EsaUJBQUssSUFBTCxDQUFVLEtBQVYsR0FBa0IsSUFBSSxTQUFKLENBQWMsS0FBSyxJQUFuQixDQUFsQjtBQUNBLGlCQUFLLFlBQUw7QUFDQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixTQUFoQixDQUEwQixVQUExQjs7QUFFQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixRQUFoQixDQUF5QixZQUF6QixDQUFzQyxJQUF0QyxFQUE0QyxJQUE1QyxFQUFrRCxJQUFsRCxFQUF3RCxLQUFLLFFBQTdEO0FBQ0EsaUJBQUssSUFBTCxHQUFZLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsUUFBaEIsQ0FBeUIsTUFBekIsQ0FBZ0MsT0FBTyxRQUFQLENBQWdCLFNBQWhELENBQVo7QUFDQSxpQkFBSyxJQUFMLENBQVUsTUFBVixDQUFpQixHQUFqQixDQUFxQixLQUFLLFFBQTFCLEVBQW9DLElBQXBDO0FBQ0EsaUJBQUssS0FBTCxHQUFhLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsUUFBaEIsQ0FBeUIsTUFBekIsQ0FBZ0MsT0FBTyxRQUFQLENBQWdCLEtBQWhELENBQWI7QUFDQSxpQkFBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixHQUFsQixDQUFzQixLQUFLLFFBQTNCLEVBQXFDLElBQXJDO0FBQ0EsaUJBQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsWUFBakI7O0FBRUE7QUFDSDs7O2lDQUVRLEksRUFBTTs7QUFFWCxnQkFBRyxRQUFPLElBQVAseUNBQU8sSUFBUCxPQUFpQixRQUFwQixFQUE4QjtBQUMxQixvQkFBSSxLQUFLLEtBQUwsQ0FBVyxJQUFYLEtBQW9CLE9BQXhCLEVBQWlDO0FBQzdCLHlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLEtBQWhCLENBQXNCLE1BQXRCO0FBQ0E7QUFDSCxpQkFIRCxNQUdPLElBQUksS0FBSyxLQUFMLENBQVcsSUFBWCxLQUFvQixXQUF4QixFQUFxQztBQUN4Qyx5QkFBSyxJQUFMLENBQVUsSUFBVixHQUFpQixLQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsU0FBZixDQUF5QixDQUF6QixFQUE0QixLQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsTUFBZixHQUF3QixDQUFwRCxDQUFqQjtBQUNIO0FBQ0osYUFQRCxNQU9PO0FBQ0gsb0JBQUksUUFBUSxHQUFaLEVBQWlCO0FBQ2IsMkJBQU8sR0FBUDtBQUNIO0FBQ0QscUJBQUssSUFBTCxDQUFVLElBQVYsSUFBa0IsSUFBbEI7QUFDSDtBQUNELGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLGdCQUFoQixDQUFpQyxLQUFLLElBQUwsQ0FBVSxJQUEzQyxFQUFpRCxVQUFqRCxFQUE2RCxDQUE3RDtBQUNIOzs7dUNBRWdCOztBQUViO0FBQ0EsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsV0FBaEIsQ0FDSTtBQUNBLHNCQUFNLFVBRE47QUFFQSxtQ0FBbUIsSUFGbkI7QUFHQSxtQ0FBbUIsSUFIbkI7QUFJQSwwQkFBVSxDQUFDO0FBQ1AsMEJBQU0sVUFEQztBQUVQLGtDQUFjLFVBRlA7QUFHUCxrQ0FBYyxHQUhQO0FBSVAsbUNBQWUsR0FKUjtBQUtQLG1DQUFlO0FBTFIsaUJBQUQsRUFNUDtBQUNDLDBCQUFNLE1BRFA7QUFFQyw2QkFBUyw4REFGVjtBQUdDLGdDQUFZLGNBSGI7QUFJQyw4QkFBVSxFQUpYO0FBS0MsMkJBQU8sVUFMUjtBQU1DLDZCQUFTLENBQUM7QUFOWCxpQkFOTyxFQWFQO0FBQ0MsMEJBQU0sTUFEUDtBQUVDLDZCQUFTLEtBQUssSUFBTCxDQUFVLElBRnBCO0FBR0MsZ0NBQVksY0FIYjtBQUlDLDhCQUFVLEVBSlg7QUFLQywyQkFBTyxVQUxSO0FBTUMsNkJBQVM7QUFOVixpQkFiTztBQUpWLGFBREo7QUE0QkQ7Ozs7RUF6RWlCLE9BQU8sSzs7a0JBNEVaLEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHM9e1xyXG5cdFwidGlsZVByb3BlcnR5QXJyYXlcIjoge1xyXG5cdFx0XCJvdGhlclNwYWNlXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwMFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJzcGFjZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJzcGFjZVwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI5LDBcIiwgXCI5LDFcIiwgXCI5LDJcIiwgXCI5LDNcIiwgXCI5LDRcIiwgXCI5LDVcIiwgXCI5LDZcIiwgXCI5LDdcIiwgXCI5LDhcIiwgXCI5LDlcIiwgXCI5LDEwXCIsIFwiOSwxMVwiLCBcIjksMTJcIiwgXCI5LDEzXCIsIFwiOSwxNFwiLCBcIjksMTVcIiwgXCI5LDE2XCIsIFwiOSwxN1wiLCBcIjksMThcIiwgXCI5LDE5XCIsIFwiOSwyMFwiLCBcIjEwLDBcIiwgXCIxMCwxXCIsIFwiMTAsMlwiLCBcIjEwLDNcIiwgXCIxMCw0XCIsIFwiMTAsNVwiLCBcIjEwLDZcIiwgXCIxMCw3XCIsIFwiMTAsOFwiLCBcIjEwLDlcIiwgXCIxMCwxMFwiLCBcIjEwLDExXCIsIFwiMTAsMTJcIiwgXCIxMCwxM1wiLCBcIjEwLDE0XCIsIFwiMTAsMTVcIiwgXCIxMCwxNlwiLCBcIjEwLDE3XCIsIFwiMTAsMThcIiwgXCIxMCwxOVwiLCBcIjEwLDIwXCIsIFwiMTEsMFwiLCBcIjExLDFcIiwgXCIxMSwyXCIsIFwiMTEsM1wiLCBcIjExLDRcIiwgXCIxMSw1XCIsIFwiMTEsNlwiLCBcIjExLDdcIiwgXCIxMSw4XCIsIFwiMTEsOVwiLCBcIjExLDEwXCIsIFwiMTEsMTFcIiwgXCIxMSwxMlwiLCBcIjExLDEzXCIsIFwiMTEsMTRcIiwgXCIxMSwxNVwiLCBcIjExLDE2XCIsIFwiMTEsMTdcIiwgXCIxMSwxOFwiLCBcIjExLDE5XCIsIFwiMTEsMjBcIiwgXCIxMiwwXCIsIFwiMTIsMVwiLCBcIjEyLDJcIiwgXCIxMiwzXCIsIFwiMTIsNFwiLCBcIjEyLDVcIiwgXCIxMiw2XCIsIFwiMTIsN1wiLCBcIjEyLDhcIiwgXCIxMiw5XCIsIFwiMTIsMTBcIiwgXCIxMiwxMVwiLCBcIjEyLDEyXCIsIFwiMTIsMTNcIiwgXCIxMiwxNFwiLCBcIjEyLDE1XCIsIFwiMTIsMTZcIiwgXCIxMiwxN1wiLCBcIjEyLDE4XCIsIFwiMTIsMTlcIiwgXCIxMiwyMFwiLCBcIjEzLDBcIiwgXCIxMywxXCIsIFwiMTMsMlwiLCBcIjEzLDNcIiwgXCIxMyw0XCIsIFwiMTMsNVwiLCBcIjEzLDZcIiwgXCIxMyw3XCIsIFwiMTMsOFwiLCBcIjEzLDlcIiwgXCIxMywxMFwiLCBcIjEzLDExXCIsIFwiMTMsMTJcIiwgXCIxMywxM1wiLCBcIjEzLDE0XCIsIFwiMTMsMTVcIiwgXCIxMywxNlwiLCBcIjEzLDE3XCIsIFwiMTMsMThcIiwgXCIxMywxOVwiLCBcIjEzLDIwXCIsIFwiMTQsMFwiLCBcIjE0LDFcIiwgXCIxNCwyXCIsIFwiMTQsM1wiLCBcIjE0LDRcIiwgXCIxNCw1XCIsIFwiMTQsNlwiLCBcIjE0LDdcIiwgXCIxNCw4XCIsIFwiMTQsOVwiLCBcIjE0LDEwXCIsIFwiMTQsMTFcIiwgXCIxNCwxMlwiLCBcIjE0LDEzXCIsIFwiMTQsMTRcIiwgXCIxNCwxNVwiLCBcIjE0LDE2XCIsIFwiMTQsMTdcIiwgXCIxNCwxOFwiLCBcIjE0LDE5XCIsIFwiMTQsMjBcIiwgXCIxNSwwXCIsIFwiMTUsMVwiLCBcIjE1LDJcIiwgXCIxNSwzXCIsIFwiMTUsNFwiLCBcIjE1LDVcIiwgXCIxNSw2XCIsIFwiMTUsN1wiLCBcIjE1LDhcIiwgXCIxNSw5XCIsIFwiMTUsMTBcIiwgXCIxNSwxMVwiLCBcIjE1LDEyXCIsIFwiMTUsMTNcIiwgXCIxNSwxNFwiLCBcIjE1LDE1XCIsIFwiMTUsMTZcIiwgXCIxNSwxN1wiLCBcIjE1LDE4XCIsIFwiMTUsMTlcIiwgXCIxNSwyMFwiLCBcIjE2LDBcIiwgXCIxNiwxXCIsIFwiMTYsMlwiLCBcIjE2LDNcIiwgXCIxNiw0XCIsIFwiMTYsNVwiLCBcIjE2LDZcIiwgXCIxNiw3XCIsIFwiMTYsOFwiLCBcIjE2LDlcIiwgXCIxNiwxMFwiLCBcIjE2LDExXCIsIFwiMTYsMTJcIiwgXCIxNiwxM1wiLCBcIjE2LDE0XCIsIFwiMTYsMTVcIiwgXCIxNiwxNlwiLCBcIjE2LDE3XCIsIFwiMTYsMThcIiwgXCIxNiwxOVwiLCBcIjE2LDIwXCIsIFwiMTcsMFwiLCBcIjE3LDFcIiwgXCIxNywyXCIsIFwiMTcsM1wiLCBcIjE3LDRcIiwgXCIxNyw1XCIsIFwiMTcsNlwiLCBcIjE3LDdcIiwgXCIxNyw4XCIsIFwiMTcsOVwiLCBcIjE3LDEwXCIsIFwiMTcsMTFcIiwgXCIxNywxMlwiLCBcIjE3LDEzXCIsIFwiMTcsMTRcIiwgXCIxNywxNVwiLCBcIjE3LDE2XCIsIFwiMTcsMTdcIiwgXCIxNywxOFwiLCBcIjE3LDE5XCIsIFwiMTcsMjBcIiwgXCIxOCwwXCIsIFwiMTgsMVwiLCBcIjE4LDJcIiwgXCIxOCwzXCIsIFwiMTgsNFwiLCBcIjE4LDVcIiwgXCIxOCw2XCIsIFwiMTgsN1wiLCBcIjE4LDhcIiwgXCIxOCw5XCIsIFwiMTgsMTBcIiwgXCIxOCwxMVwiLCBcIjE4LDEyXCIsIFwiMTgsMTNcIiwgXCIxOCwxNFwiLCBcIjE4LDE1XCIsIFwiMTgsMTZcIiwgXCIxOCwxN1wiLCBcIjE4LDE4XCIsIFwiMTgsMTlcIiwgXCIxOCwyMFwiLCBcIjE5LDBcIiwgXCIxOSwxXCIsIFwiMTksMlwiLCBcIjE5LDNcIiwgXCIxOSw0XCIsIFwiMTksNVwiLCBcIjE5LDZcIiwgXCIxOSw3XCIsIFwiMTksOFwiLCBcIjE5LDlcIiwgXCIxOSwxMFwiLCBcIjE5LDExXCIsIFwiMTksMTJcIiwgXCIxOSwxM1wiLCBcIjE5LDE0XCIsIFwiMTksMTVcIiwgXCIxOSwxNlwiLCBcIjE5LDE3XCIsIFwiMTksMThcIiwgXCIxOSwxOVwiLCBcIjE5LDIwXCIsIFwiMjAsMFwiLCBcIjIwLDFcIiwgXCIyMCwyXCIsIFwiMjAsM1wiLCBcIjIwLDRcIiwgXCIyMCw1XCIsIFwiMjAsNlwiLCBcIjIwLDdcIiwgXCIyMCw4XCIsIFwiMjAsOVwiLCBcIjIwLDEwXCIsIFwiMjAsMTFcIiwgXCIyMCwxMlwiLCBcIjIwLDEzXCIsIFwiMjAsMTRcIiwgXCIyMCwxNVwiLCBcIjIwLDE2XCIsIFwiMjAsMTdcIiwgXCIyMCwxOFwiLCBcIjIwLDE5XCIsIFwiMjAsMjBcIiwgXCIyMSwwXCIsIFwiMjEsMVwiLCBcIjIxLDJcIiwgXCIyMSwzXCIsIFwiMjEsNFwiLCBcIjIxLDVcIiwgXCIyMSw2XCIsIFwiMjEsN1wiLCBcIjIxLDhcIiwgXCIyMSw5XCIsIFwiMjEsMTBcIiwgXCIyMSwxMVwiLCBcIjIxLDEyXCIsIFwiMjEsMTNcIiwgXCIyMSwxNFwiLCBcIjIxLDE1XCIsIFwiMjEsMTZcIiwgXCIyMSwxN1wiLCBcIjIxLDE4XCIsIFwiMjEsMTlcIiwgXCIyMSwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlVGhlcm1pdGVcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDAxXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJ0aGVybWl0ZVwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJiaW9tYXNzXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzJdLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXHJcblx0XHRcdFx0XCJhcmdzXCI6IFwidGhlcm1pdGVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDIwXCIsIFwiNywxXCIsIFwiNyw3XCIsIFwiMjMsMTNcIiwgXCIyMywxOVwiLCBcIjI0LDBcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZVNoaWVsZFwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDJcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInNoaWVsZFwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcclxuXHRcdFx0XHRcImFyZ3NcIjogXCJzaGllbGRcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDZcIiwgXCI2LDEzXCIsIFwiNiwxOVwiLCBcIjcsMlwiLCBcIjcsMTJcIiwgXCIyMyw4XCIsIFwiMjMsMThcIiwgXCIyNCwxXCIsIFwiMjQsN1wiLCBcIjI0LDE0XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVCaW9kcm9uZVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDNcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImJpb2Ryb25lXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImJpb2Ryb25lXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXHJcblx0XHRcdFx0XCJhcmdzXCI6IFwiYmlvZHJvbmVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDVcIiwgXCI3LDNcIiwgXCI3LDE1XCIsIFwiMjMsNVwiLCBcIjIzLDE3XCIsIFwiMjQsMTVcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZVNhdGVsbGl0ZVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDRcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInNhdGVsbGl0ZVwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJtZXRhbFwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxyXG5cdFx0XHRcdFwiYXJnc1wiOiBcInNhdGVsbGl0ZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMFwiLCBcIjYsMTRcIiwgXCI3LDRcIiwgXCI3LDE3XCIsIFwiMjMsM1wiLCBcIjIzLDE2XCIsIFwiMjQsNlwiLCBcIjI0LDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVMYXNlclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDVcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImxhc2VyXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxyXG5cdFx0XHRcdFwiYXJnc1wiOiBcImxhc2VyXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwzXCIsIFwiNiw3XCIsIFwiNiw4XCIsIFwiNiwxMlwiLCBcIjYsMTZcIiwgXCI3LDVcIiwgXCI3LDZcIiwgXCI3LDlcIiwgXCI3LDE4XCIsIFwiNywxOVwiLCBcIjIzLDFcIiwgXCIyMywyXCIsIFwiMjMsMTFcIiwgXCIyMywxNFwiLCBcIjIzLDE1XCIsIFwiMjQsNFwiLCBcIjI0LDhcIiwgXCIyNCwxMlwiLCBcIjI0LDEzXCIsIFwiMjQsMTdcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZVJlcGFpclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDZcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInJlcGFpclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJtZXRhbFwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwicmVwYWlyXCIsXHJcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDFcIiwgXCI2LDEwXCIsIFwiNiwxOFwiLCBcIjcsOFwiLCBcIjcsMTNcIiwgXCIyMyw3XCIsIFwiMjMsMTJcIiwgXCIyNCwyXCIsIFwiMjQsMTBcIiwgXCIyNCwxOVwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlUm9ja2V0XCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwN1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwicm9ja2V0XCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcInJvY2tldFwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxyXG5cdFx0XHRcdFwiYXJnc1wiOiBcInJvY2tldFwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsNFwiLCBcIjYsMTFcIiwgXCI3LDEwXCIsIFwiNywxNlwiLCBcIjIzLDRcIiwgXCIyMywxMFwiLCBcIjI0LDlcIiwgXCIyNCwxNlwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlRXNwaW9uYWdlXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwOFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiZXNwaW9uYWdlXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImJpb21hc3NcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbM10sXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImVzcGlvbmFnZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMTVcIiwgXCI3LDExXCIsIFwiMjMsOVwiLCBcIjI0LDVcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZVRha2VvdmVyXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwOVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwidGFrZW92ZXJcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzJdLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJ0YWtlb3ZlclwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMTdcIiwgXCI3LDE0XCIsIFwiMjMsNlwiLCBcIjI0LDNcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZVJlcGFpclR3b1wiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMTBcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInJlcGFpclR3b1wiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIiwgXCJveHlnZW5cIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMV0sXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcInJlcGFpclwiLFxyXG5cdFx0XHRcdFwiYXJnc1wiOiAyXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsOVwiLCBcIjI0LDExXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVDb3VudGVyRXNwaW9uYWdlXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxMVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiY291bnRlckVzcGlvbmFnZVwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJiaW9tYXNzXCIsIFwib3h5Z2VuXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzEsIDFdLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJjb3VudGVyXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwyXCIsIFwiMjQsMThcIl1cclxuXHRcdH0sXHJcblx0XHRcIm90aGVyU3VyZmFjZVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMTJcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwic3VyZmFjZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJzdXJmYWNlXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjgsMFwiLCBcIjgsMVwiLCBcIjgsMlwiLCBcIjgsM1wiLCBcIjgsNFwiLCBcIjgsNVwiLCBcIjgsNlwiLCBcIjgsN1wiLCBcIjgsOFwiLCBcIjgsOVwiLCBcIjgsMTBcIiwgXCI4LDExXCIsIFwiOCwxMlwiLCBcIjgsMTNcIiwgXCI4LDE0XCIsIFwiOCwxNVwiLCBcIjgsMTZcIiwgXCI4LDE3XCIsIFwiOCwxOFwiLCBcIjgsMTlcIiwgXCI4LDIwXCIsIFwiMjIsMFwiLCBcIjIyLDFcIiwgXCIyMiwyXCIsIFwiMjIsM1wiLCBcIjIyLDRcIiwgXCIyMiw1XCIsIFwiMjIsNlwiLCBcIjIyLDdcIiwgXCIyMiw4XCIsIFwiMjIsOVwiLCBcIjIyLDEwXCIsIFwiMjIsMTFcIiwgXCIyMiwxMlwiLCBcIjIyLDEzXCIsIFwiMjIsMTRcIiwgXCIyMiwxNVwiLCBcIjIyLDE2XCIsIFwiMjIsMTdcIiwgXCIyMiwxOFwiLCBcIjIyLDE5XCIsIFwiMjIsMjBcIl1cclxuXHRcdH0sXHJcblx0XHRcIm90aGVyTG9ja1wiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMTNcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwibG9ja1wiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJsb2NrXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjcsMFwiLCBcIjUsMTBcIiwgXCIxLDEwXCIsIFwiNywyMFwiLCBcIjIzLDBcIiwgXCIyMywyMFwiLCBcIjI1LDEwXCIsIFwiMjksMTBcIl1cclxuXHRcdH0sXHJcblx0XHRcImFybW9yeURyaWxsXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxNFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJhcm1vcnlcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiZHJpbGxcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNCwxMFwiLCBcIjI2LDEwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJBcm1vcnlDYW5ub25cIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDE1XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImFybW9yeVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJjYW5ub25cIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMywxMFwiLCBcIjI3LDEwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJhcm1vcnlFeHBsb3NpdmVzXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxNlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJhcm1vcnlcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiZXhwbG9zaXZlc1wiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIyLDEwXCIsIFwiMjgsMTBcIl1cclxuXHRcdH0sXHJcblx0XHRcImxpY2hlblwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMTdcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJsaWNoZW5cIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcImJpb21hc3NcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzFdXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMFwiLCBcIjAsMTBcIiwgXCIwLDE3XCIsIFwiMSwyXCIsIFwiMSw4XCIsIFwiMSwxNlwiLCBcIjEsMjBcIiwgXCIyOSwwXCIsIFwiMjksNFwiLCBcIjI5LDEyXCIsIFwiMjksMThcIiwgXCIzMCwzXCIsIFwiMzAsMTBcIiwgXCIzMCwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbkxpY2hlblR3b1wiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMThcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJsaWNoZW5Ud29cIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcImJpb21hc3NcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzJdXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsNFwiLCBcIjMwLDE2XCJdXHJcblxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbkNoZW1pY2FsUmVhY3RvclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMTlcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJjaGVtaWNhbFJlYWN0b3JcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcIm94eWdlblwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMSwxXCIsIFwiMSw5XCIsIFwiMjksMTlcIiwgXCIyOSwxMVwiXVxyXG5cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25DaGVtaWNhbFJlYWN0b3JUd29cIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDIwXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiY2hlbWljYWxSZWFjdG9yVHdvXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImJpb21hc3NcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJveHlnZW5cIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzJdXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsNVwiLCBcIjMwLDE1XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uQWlyRmlsdGVyXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyMVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImFpckZpbHRlclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJveHlnZW5cIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJveHlnZW5cIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzNdXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMTVcIiwgXCIxLDExXCIsIFwiMjksOVwiLCBcIjMwLDVcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25CaW9jb2xsZWN0b3JcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDIyXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiYmlvY29sbGVjdG9yXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm94eWdlblwiLCBcImJpb21hc3NcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMV0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJiaW9kcm9uZVwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxNFwiLCBcIjAsMThcIiwgXCIxLDZcIiwgXCIxLDE3XCIsIFwiMzAsNlwiLCBcIjMwLDJcIiwgXCIyOSwxNFwiLCBcIjI5LDNcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25VcmFuaXVtTWluZVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjNcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJ1cmFuaXVtTWluZVwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJveHlnZW5cIiwgXCJlbmVyZ3lcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMV0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJ1cmFuaXVtXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsxXVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDJcIiwgXCIwLDZcIiwgXCIxLDNcIiwgXCIzMCwxOFwiLCBcIjMwLDE0XCIsIFwiMjksMTdcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25OdWNsZWFyUmVhY3RvclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjRcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJudWNsZWFyUmVhY3RvclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJ1cmFuaXVtXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wiZW5lcmd5XCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFszXVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDlcIiwgXCIwLDE2XCIsIFwiMSw3XCIsIFwiMSwxNFwiLCBcIjEsMTlcIiwgXCIzMCwxMVwiLCBcIjMwLDRcIiwgXCIyOSwxM1wiLCBcIjI5LDZcIiwgXCIyOSwxXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uVGhlcm1hbEdlbmVyYXRvclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjVcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJ0aGVybWFsR2VuZXJhdG9yXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImJpb21hc3NcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJlbmVyZ3lcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzFdXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMTJcIiwgXCIzMCw4XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uRm91bmRyeVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjZcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJmb3VuZHJ5XCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcIm1ldGFsXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsxXVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDNcIiwgXCIwLDExXCIsIFwiMCwxOVwiLCBcIjEsMTNcIiwgXCIzMCwxN1wiLCBcIjMwLDlcIiwgXCIzMCwxXCIsIFwiMjksN1wiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbkZvdW5kcnlUd29cIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDI3XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiZm91bmRyeVR3b1wiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJtZXRhbFwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMl1cclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMSwwXCIsIFwiMjksMjBcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25Sb2NrZXRXb3Jrc2hvcFwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjhcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJyb2NrZXRXb3Jrc2hvcFwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJyb2NrZXRcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzFdXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMVwiLCBcIjAsN1wiLCBcIjEsNVwiLCBcIjEsMTJcIiwgXCIxLDE1XCIsIFwiMzAsMTlcIiwgXCIzMCwxM1wiLCBcIjI5LDE1XCIsIFwiMjksOFwiLCBcIjI5LDVcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25TZW5zb3JDYWJpblwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjlcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJzZW5zb3JDYWJpblwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJraWxsQmlvZHJvbmVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDEzXCIsIFwiMzAsN1wiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbk51Y2xlYXJBcm1vcnlcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDMwXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwibnVjbGVhckFybW9yeVwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJveHlnZW5cIiwgXCJlbmVyZ3lcIiwgXCJ1cmFuaXVtXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzEsIDEsIDFdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wibnVrZVwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwyMFwiLCBcIjEsNFwiLCBcIjEsMThcIiwgXCIzMCwwXCIsIFwiMjksMTZcIiwgXCIyOSwyXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uUmVwYWlyXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAzMVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInByb2RSZXBhaXJcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJyZXBhaXJcIixcclxuXHRcdFx0XHRcInRpbGVUYXJnZXRJRFwiOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsOFwiLCBcIjMwLDEyXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJyZXNvdXJjZU94eWdlblwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzJcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcIm94eWdlblwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI1LDBcIiwgXCI1LDFcIiwgXCI1LDJcIiwgXCI1LDNcIiwgXCI1LDRcIiwgXCI1LDVcIiwgXCI1LDZcIiwgXCI1LDdcIiwgXCI1LDhcIiwgXCI1LDlcIiwgXCIyNSwxMVwiLCBcIjI1LDEyXCIsIFwiMjUsMTNcIiwgXCIyNSwxNFwiLCBcIjI1LDE1XCIsIFwiMjUsMTZcIiwgXCIyNSwxN1wiLCBcIjI1LDE4XCIsIFwiMjUsMTlcIiwgXCIyNSwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwicmVzb3VyY2VSb2NrZXRcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDMzXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJyb2NrZXRcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNCwwXCIsIFwiNCwxXCIsIFwiNCwyXCIsIFwiNCwzXCIsIFwiNCw0XCIsIFwiNCw1XCIsIFwiNCw2XCIsIFwiNCw3XCIsIFwiNCw4XCIsIFwiNCw5XCIsIFwiMjYsMTFcIiwgXCIyNiwxMlwiLCBcIjI2LDEzXCIsIFwiMjYsMTRcIiwgXCIyNiwxNVwiLCBcIjI2LDE2XCIsIFwiMjYsMTdcIiwgXCIyNiwxOFwiLCBcIjI2LDE5XCIsIFwiMjYsMjBcIl1cclxuXHRcdH0sXHJcblx0XHRcInJlc291cmNlTWV0YWxcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDM0XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJtZXRhbFwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIzLDBcIiwgXCIzLDFcIiwgXCIzLDJcIiwgXCIzLDNcIiwgXCIzLDRcIiwgXCIzLDVcIiwgXCIzLDZcIiwgXCIzLDdcIiwgXCIzLDhcIiwgXCIzLDlcIiwgXCIyNywxMVwiLCBcIjI3LDEyXCIsIFwiMjcsMTNcIiwgXCIyNywxNFwiLCBcIjI3LDE1XCIsIFwiMjcsMTZcIiwgXCIyNywxN1wiLCBcIjI3LDE4XCIsIFwiMjcsMTlcIiwgXCIyNywyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwicmVzb3VyY2VFbmVyZ3lcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDM1XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJlbmVyZ3lcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMiwwXCIsIFwiMiwxXCIsIFwiMiwyXCIsIFwiMiwzXCIsIFwiMiw0XCIsIFwiMiw1XCIsIFwiMiw2XCIsIFwiMiw3XCIsIFwiMiw4XCIsIFwiMiw5XCIsIFwiMiwxMVwiLCBcIjIsMTJcIiwgXCIyLDEzXCIsIFwiMiwxNFwiLCBcIjIsMTVcIiwgXCIyLDE2XCIsIFwiMiwxN1wiLCBcIjIsMThcIiwgXCIyLDE5XCIsIFwiMiwyMFwiLCBcIjI4LDBcIiwgXCIyOCwxXCIsIFwiMjgsMlwiLCBcIjI4LDNcIiwgXCIyOCw0XCIsIFwiMjgsNVwiLCBcIjI4LDZcIiwgXCIyOCw3XCIsIFwiMjgsOFwiLCBcIjI4LDlcIiwgXCIyOCwxMVwiLCBcIjI4LDEyXCIsIFwiMjgsMTNcIiwgXCIyOCwxNFwiLCBcIjI4LDE1XCIsIFwiMjgsMTZcIiwgXCIyOCwxN1wiLCBcIjI4LDE4XCIsIFwiMjgsMTlcIiwgXCIyOCwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwicmVzb3VyY2VCaW9tYXNzXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAzNlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiYmlvbWFzc1wiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI1LDExXCIsIFwiNSwxMlwiLCBcIjUsMTNcIiwgXCI1LDE0XCIsIFwiNSwxNVwiLCBcIjUsMTZcIiwgXCI1LDE3XCIsIFwiNSwxOFwiLCBcIjUsMTlcIiwgXCI1LDIwXCIsIFwiMjUsMFwiLCBcIjI1LDFcIiwgXCIyNSwyXCIsIFwiMjUsM1wiLCBcIjI1LDRcIiwgXCIyNSw1XCIsIFwiMjUsNlwiLCBcIjI1LDdcIiwgXCIyNSw4XCIsIFwiMjUsOVwiXVxyXG5cdFx0fSxcclxuXHRcdFwicmVzb3VyY2VCaW9kcm9uZVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzdcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImJpb2Ryb25lXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjQsMTFcIiwgXCI0LDEyXCIsIFwiNCwxM1wiLCBcIjQsMTRcIiwgXCI0LDE1XCIsIFwiNCwxNlwiLCBcIjQsMTdcIiwgXCI0LDE4XCIsIFwiNCwxOVwiLCBcIjQsMjBcIiwgXCIyNiwwXCIsIFwiMjYsMVwiLCBcIjI2LDJcIiwgXCIyNiwzXCIsIFwiMjYsNFwiLCBcIjI2LDVcIiwgXCIyNiw2XCIsIFwiMjYsN1wiLCBcIjI2LDhcIiwgXCIyNiw5XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJyZXNvdXJjZVVyYW5pdW1cIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDM4XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJ1cmFuaXVtXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjMsMTFcIiwgXCIzLDEyXCIsIFwiMywxM1wiLCBcIjMsMTRcIiwgXCIzLDE1XCIsIFwiMywxNlwiLCBcIjMsMTdcIiwgXCIzLDE4XCIsIFwiMywxOVwiLCBcIjMsMjBcIiwgXCIyNywwXCIsIFwiMjcsMVwiLCBcIjI3LDJcIiwgXCIyNywzXCIsIFwiMjcsNFwiLCBcIjI3LDVcIiwgXCIyNyw2XCIsIFwiMjcsN1wiLCBcIjI3LDhcIiwgXCIyNyw5XCJdXHJcblx0XHR9XHJcblx0fVxyXG59IiwibW9kdWxlLmV4cG9ydHM9e1xyXG5cdFwiZ3JpZFwiOiBbXHJcblx0XHRbOSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEyXSxcclxuXHRcdFszLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA4LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA2XSxcclxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxyXG5cdFx0WzExLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA1LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxNF0sXHJcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcclxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxyXG5cdFx0WzksIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDIsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEyXSxcclxuXHRcdFsxLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNF0sXHJcblx0XHRbMywgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDZdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxyXG5cdFx0WzEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDRdLFxyXG5cdFx0WzEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA0XSxcclxuXHRcdFszLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA4LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA2XSxcclxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxyXG5cdFx0WzExLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA1LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxNF0sXHJcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcclxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxyXG5cdFx0WzksIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDIsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEyXSxcclxuXHRcdFszLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNl1cclxuXHRdXHJcbn0iLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICByZXR1cm4gIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG52YXIgcm5nO1xuXG52YXIgY3J5cHRvID0gZ2xvYmFsLmNyeXB0byB8fCBnbG9iYWwubXNDcnlwdG87IC8vIGZvciBJRSAxMVxuaWYgKGNyeXB0byAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG4gIHJuZyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59XG5cbmlmICghcm5nKSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyICBybmRzID0gbmV3IEFycmF5KDE2KTtcbiAgcm5nID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcm5nO1xuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG5cbiAgaWYgKHR5cGVvZihvcHRpb25zKSA9PSAnc3RyaW5nJykge1xuICAgIGJ1ZiA9IG9wdGlvbnMgPT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgKytpaSkge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHY0O1xuIiwiaW1wb3J0IENsaWVudCBmcm9tICcuL3ByZWZhYnMvY2xpZW50JztcclxuaW1wb3J0IEJvb3QgZnJvbSAnLi9zdGF0ZXMvYm9vdCc7XHJcbmltcG9ydCBHYW1lIGZyb20gJy4vc3RhdGVzL2dhbWUnO1xyXG5pbXBvcnQgU2V0dXAgZnJvbSAnLi9zdGF0ZXMvc2V0dXAnO1xyXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJy4vc3RhdGVzL3ByZWxvYWRlcic7XHJcbmltcG9ydCBHYW1lb3ZlciBmcm9tICcuL3N0YXRlcy9nYW1lb3Zlcic7XHJcbmltcG9ydCBTZXB0aWtvbiBmcm9tICcuL3ByZWZhYnMvc2VwdGlrb24nO1xyXG5cclxuaWYodHlwZW9mKFN0b3JhZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VwdFVVSUQnKSAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IHV1aWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VwdFVVSUQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdXVpZCA9IHJlcXVpcmUoJ3V1aWQvdjQnKSgpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXB0VVVJRCcsIHV1aWQpO1xyXG4gICAgfVxyXG59IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkxvY2FsIFN0b3JhZ2UgaXMgcmVxdWlyZWQhXCIpO1xyXG59XHJcblxyXG4vLyBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQsIFBoYXNlci5BVVRPLCAncGhhc2VyLXRlc3QtZ2FtZScpO1xyXG5jb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKFwiMTAwXCIsIFwiMTAwXCIsIFBoYXNlci5BVVRPKTtcclxuZ2FtZS5zZXB0aWtvbiA9IG5ldyBTZXB0aWtvbihnYW1lKTtcclxuZ2FtZS5jbGllbnQgPSBuZXcgQ2xpZW50KGdhbWUuc2VwdGlrb24pO1xyXG5cclxuZ2FtZS5zdGF0ZS5hZGQoJ2Jvb3QnLCBuZXcgQm9vdCgpKTtcclxuZ2FtZS5zdGF0ZS5hZGQoJ2dhbWUnLCBuZXcgR2FtZSgpKTtcclxuZ2FtZS5zdGF0ZS5hZGQoJ3NldHVwJywgbmV3IFNldHVwKCkpO1xyXG5nYW1lLnN0YXRlLmFkZCgncHJlbG9hZGVyJywgbmV3IFByZWxvYWRlcigpKTtcclxuZ2FtZS5zdGF0ZS5hZGQoJ2dhbWVvdmVyJywgbmV3IEdhbWVvdmVyKCkpO1xyXG5cclxuZ2FtZS5zdGF0ZS5zdGFydCgnYm9vdCcpO1xyXG4iLCJ2YXIgZ2FtZU1vZGFsID0gZ2FtZU1vZGFsIHx8IHt9O1xyXG5cclxuXHJcbmdhbWVNb2RhbCA9IGZ1bmN0aW9uIChnYW1lKSB7XHJcblxyXG5cdHZhciBfdGhpcyA9IHRoaXM7XHJcblx0Z2FtZS5tb2RhbHMgPSB7fTtcclxuXHJcblx0LyoqXHJcblx0ICogW2hpZGVNb2RhbCBkZXNjcmlwdGlvbl1cclxuXHQgKiBAcGFyYW0gIHtbdHlwZV19IHR5cGUgW2Rlc2NyaXB0aW9uXVxyXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXHJcblx0ICovXHJcblx0dGhpcy5oaWRlTW9kYWwgPSBmdW5jdGlvbiAodHlwZSkge1xyXG5cdFx0d2luZG93LmNvbnNvbGUubG9nKHR5cGUpO1xyXG5cdFx0Z2FtZS5tb2RhbHNbdHlwZV0udmlzaWJsZSA9IGZhbHNlO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRjcmVhdGVNb2RhbDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuXHRcdFx0dmFyIHR5cGUgPSBvcHRpb25zLnR5cGUgfHwgJyc7IC8vIG11c3QgYmUgdW5pcXVlXHJcblx0XHRcdHZhciBpbmNsdWRlQmFja2dyb3VuZCA9IG9wdGlvbnMuaW5jbHVkZUJhY2tncm91bmQ7IC8vIG1heWJlIG5vdCBvcHRpb25hbFxyXG5cdFx0XHR2YXIgYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgfHwgXCIweDAwMDAwMFwiO1xyXG5cdFx0XHR2YXIgYmFja2dyb3VuZE9wYWNpdHkgPSBvcHRpb25zLmJhY2tncm91bmRPcGFjaXR5ID09PSB1bmRlZmluZWQgP1xyXG5cdFx0XHRcdDAuNyA6IG9wdGlvbnMuYmFja2dyb3VuZE9wYWNpdHk7XHJcblx0XHRcdHZhciBtb2RhbENsb3NlT25JbnB1dCA9IG9wdGlvbnMubW9kYWxDbG9zZU9uSW5wdXQgfHwgZmFsc2U7XHJcblx0XHRcdHZhciBtb2RhbEJhY2tncm91bmRDYWxsYmFjayA9IG9wdGlvbnMubW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2sgfHwgZmFsc2U7XHJcblx0XHRcdHZhciB2Q2VudGVyID0gb3B0aW9ucy52Q2VudGVyIHx8IHRydWU7XHJcblx0XHRcdHZhciBoQ2VudGVyID0gb3B0aW9ucy5oQ2VudGVyIHx8IHRydWU7XHJcblx0XHRcdHZhciBpdGVtc0FyciA9IG9wdGlvbnMuaXRlbXNBcnIgfHwgW107XHJcblx0XHRcdHZhciBmaXhlZFRvQ2FtZXJhID0gb3B0aW9ucy5maXhlZFRvQ2FtZXJhIHx8IGZhbHNlO1xyXG5cclxuXHRcdFx0dmFyIG1vZGFsO1xyXG5cdFx0XHR2YXIgaW5uZXJNb2RhbDtcclxuXHRcdFx0dmFyIG1vZGFsR3JvdXAgPSBnYW1lLmFkZC5ncm91cCgpO1xyXG5cdFx0XHRpZiAoZml4ZWRUb0NhbWVyYSA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdG1vZGFsR3JvdXAuZml4ZWRUb0NhbWVyYSA9IHRydWU7XHJcblx0XHRcdFx0bW9kYWxHcm91cC5jYW1lcmFPZmZzZXQueCA9IDA7XHJcblx0XHRcdFx0bW9kYWxHcm91cC5jYW1lcmFPZmZzZXQueSA9IDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChpbmNsdWRlQmFja2dyb3VuZCA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdG1vZGFsID0gZ2FtZS5hZGQuZ3JhcGhpY3MoZ2FtZS53aWR0aCwgZ2FtZS5oZWlnaHQpO1xyXG5cdFx0XHRcdG1vZGFsLmJlZ2luRmlsbChiYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRPcGFjaXR5KTtcclxuXHRcdFx0XHRtb2RhbC54ID0gMDtcclxuXHRcdFx0XHRtb2RhbC55ID0gMDtcclxuXHJcblx0XHRcdFx0bW9kYWwuZHJhd1JlY3QoMCwgMCwgZ2FtZS53aWR0aCwgZ2FtZS5oZWlnaHQpO1xyXG5cclxuXHRcdFx0XHRpZiAobW9kYWxDbG9zZU9uSW5wdXQgPT09IHRydWUpIHtcclxuXHJcblx0XHRcdFx0XHRpbm5lck1vZGFsID0gZ2FtZS5hZGQuc3ByaXRlKDAsIDApO1xyXG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0aW5uZXJNb2RhbC53aWR0aCA9IGdhbWUud2lkdGg7XHJcblx0XHRcdFx0XHRpbm5lck1vZGFsLmhlaWdodCA9IGdhbWUuaGVpZ2h0O1xyXG5cdFx0XHRcdFx0aW5uZXJNb2RhbC50eXBlID0gdHlwZTtcclxuXHRcdFx0XHRcdGlubmVyTW9kYWwuaW5wdXQucHJpb3JpdHlJRCA9IDA7XHJcblx0XHRcdFx0XHRpbm5lck1vZGFsLmV2ZW50cy5vbklucHV0RG93bi5hZGQoZnVuY3Rpb24gKGUsIHBvaW50ZXIpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5oaWRlTW9kYWwoZS50eXBlKTtcclxuXHRcdFx0XHRcdH0sIF90aGlzLCAyKTtcclxuXHJcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmFkZChpbm5lck1vZGFsKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRcdG1vZGFsQmFja2dyb3VuZENhbGxiYWNrID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChtb2RhbEJhY2tncm91bmRDYWxsYmFjaykge1xyXG5cdFx0XHRcdGlubmVyTW9kYWwgPSBnYW1lLmFkZC5zcHJpdGUoMCwgMCk7XHJcblx0XHRcdFx0aW5uZXJNb2RhbC5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdGlubmVyTW9kYWwud2lkdGggPSBnYW1lLndpZHRoO1xyXG5cdFx0XHRcdGlubmVyTW9kYWwuaGVpZ2h0ID0gZ2FtZS5oZWlnaHQ7XHJcblx0XHRcdFx0aW5uZXJNb2RhbC50eXBlID0gdHlwZTtcclxuXHRcdFx0XHRpbm5lck1vZGFsLmlucHV0LnByaW9yaXR5SUQgPSAwO1xyXG5cclxuXHRcdFx0XHRtb2RhbEdyb3VwLmFkZChpbm5lck1vZGFsKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGluY2x1ZGVCYWNrZ3JvdW5kKSB7XHJcblx0XHRcdFx0bW9kYWxHcm91cC5hZGQobW9kYWwpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR2YXIgbW9kYWxMYWJlbDtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtc0Fyci5sZW5ndGg7IGkgKz0gMSkge1xyXG5cdFx0XHRcdHZhciBpdGVtID0gaXRlbXNBcnJbaV07XHJcblx0XHRcdFx0dmFyIGl0ZW1UeXBlID0gaXRlbS50eXBlIHx8ICd0ZXh0JztcclxuXHRcdFx0XHR2YXIgaXRlbUNvbG9yID0gaXRlbS5jb2xvciB8fCAweDAwMDAwMDtcclxuXHRcdFx0XHR2YXIgaXRlbUZvbnRmYW1pbHkgPSBpdGVtLmZvbnRGYW1pbHkgfHwgJ0FyaWFsJztcclxuXHRcdFx0XHR2YXIgaXRlbUZvbnRTaXplID0gaXRlbS5mb250U2l6ZSB8fCAzMjtcclxuXHRcdFx0XHR2YXIgaXRlbVN0cm9rZSA9IGl0ZW0uc3Ryb2tlIHx8ICcweDAwMDAwMCc7XHJcblx0XHRcdFx0dmFyIGl0ZW1TdHJva2VUaGlja25lc3MgPSBpdGVtLnN0cm9rZVRoaWNrbmVzcyB8fCAwO1xyXG5cdFx0XHRcdHZhciBpdGVtQWxpZ24gPSBpdGVtLmFsaWduIHx8ICdjZW50ZXInO1xyXG5cdFx0XHRcdHZhciBvZmZzZXRYID0gaXRlbS5vZmZzZXRYIHx8IDA7XHJcblx0XHRcdFx0dmFyIG9mZnNldFkgPSBpdGVtLm9mZnNldFkgfHwgMDtcclxuXHRcdFx0XHR2YXIgY29udGVudFNjYWxlID0gaXRlbS5jb250ZW50U2NhbGUgfHwgMTtcclxuXHRcdFx0XHR2YXIgY29udGVudCA9IGl0ZW0uY29udGVudCB8fCBcIlwiO1xyXG5cdFx0XHRcdHZhciBjZW50ZXJYID0gZ2FtZS53aWR0aCAvIDI7XHJcblx0XHRcdFx0dmFyIGNlbnRlclkgPSBnYW1lLmhlaWdodCAvIDI7XHJcblx0XHRcdFx0dmFyIGNhbGxiYWNrID0gaXRlbS5jYWxsYmFjayB8fCBmYWxzZTtcclxuXHRcdFx0XHR2YXIgdGV4dEFsaWduID0gaXRlbS50ZXh0QWxpZ24gfHwgXCJsZWZ0XCI7XHJcblx0XHRcdFx0dmFyIGF0bGFzUGFyZW50ID0gaXRlbS5hdGxhc1BhcmVudCB8fCBcIlwiO1xyXG5cdFx0XHRcdHZhciBidXR0b25Ib3ZlciA9IGl0ZW0uYnV0dG9uSG92ZXIgfHwgY29udGVudDtcclxuXHRcdFx0XHR2YXIgYnV0dG9uQWN0aXZlID0gaXRlbS5idXR0b25BY3RpdmUgfHwgY29udGVudDtcclxuXHRcdFx0XHR2YXIgZ3JhcGhpY0NvbG9yID0gaXRlbS5ncmFwaGljQ29sb3IgfHwgMHhmZmZmZmY7XHJcblx0XHRcdFx0dmFyIGdyYXBoaWNPcGFjaXR5ID0gaXRlbS5ncmFwaGljT3BhY2l0eSB8fCAxO1xyXG5cdFx0XHRcdHZhciBncmFwaGljVyA9IGl0ZW0uZ3JhcGhpY1dpZHRoIHx8IDIwMDtcclxuXHRcdFx0XHR2YXIgZ3JhcGhpY0ggPSBpdGVtLmdyYXBoaWNIZWlnaHQgfHwgMjAwO1xyXG5cdFx0XHRcdHZhciBncmFwaGljUmFkaXVzID0gaXRlbS5ncmFwaGljUmFkaXVzIHx8IDA7XHJcblx0XHRcdFx0dmFyIGxvY2tQb3NpdGlvbiA9IGl0ZW0ubG9ja1Bvc2l0aW9uIHx8IGZhbHNlO1xyXG5cclxuXHRcdFx0XHR2YXIgaXRlbUFuY2hvciA9IGl0ZW0uYW5jaG9yIHx8IHt4OjAseTowfTtcclxuXHRcdFx0XHR2YXIgaXRlbUFuZ2xlID0gaXRlbS5hbmdsZSB8fCAwO1xyXG5cdFx0XHRcdHZhciBpdGVtWCA9IGl0ZW0ueCB8fCAwO1xyXG5cdFx0XHRcdHZhciBpdGVtWSA9IGl0ZW0ueSB8fCAwO1xyXG5cdFx0XHRcdHZhciBpbWFnZUZyYW1lID0gaXRlbS5mcmFtZSB8fCBudWxsO1xyXG5cdFx0XHRcdHZhciB0aWxlU3ByaXRlV2lkdGggPSBpdGVtLnRpbGVTcHJpdGVXaWR0aCB8fCBnYW1lLndpZHRoO1xyXG5cdFx0XHRcdHZhciB0aWxlU3ByaXRlSGVpZ2h0ID0gaXRlbS50aWxlU3ByaXRlSGVpZ2h0IHx8IGdhbWUuaGVpZ2h0O1xyXG5cclxuXHRcdFx0XHRtb2RhbExhYmVsID0gbnVsbDtcclxuXHJcblx0XHRcdFx0aWYgKGl0ZW1UeXBlID09PSBcInRleHRcIiB8fCBpdGVtVHlwZSA9PT0gXCJiaXRtYXBUZXh0XCIpIHtcclxuXHJcblx0XHRcdFx0XHRpZiAoaXRlbVR5cGUgPT09IFwidGV4dFwiKSB7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC50ZXh0KDAsIDAsIGNvbnRlbnQsIHtcclxuXHRcdFx0XHRcdFx0XHRmb250OiBpdGVtRm9udFNpemUgKyAncHggJyArIGl0ZW1Gb250ZmFtaWx5LFxyXG5cdFx0XHRcdFx0XHRcdGZpbGw6IFwiI1wiICsgU3RyaW5nKGl0ZW1Db2xvcikucmVwbGFjZShcIjB4XCIsIFwiXCIpLFxyXG5cdFx0XHRcdFx0XHRcdHN0cm9rZTogXCIjXCIgKyBTdHJpbmcoaXRlbVN0cm9rZSkucmVwbGFjZShcIjB4XCIsIFwiXCIpLFxyXG5cdFx0XHRcdFx0XHRcdHN0cm9rZVRoaWNrbmVzczogaXRlbVN0cm9rZVRoaWNrbmVzcyxcclxuXHRcdFx0XHRcdFx0XHRhbGlnbjogaXRlbUFsaWduXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ3RleHQnO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnVwZGF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoKGdhbWUud2lkdGggLyAyKSAtIChtb2RhbExhYmVsLndpZHRoIC8gMikpICsgb2Zmc2V0WDtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKChnYW1lLmhlaWdodCAvIDIpIC0gKG1vZGFsTGFiZWwuaGVpZ2h0IC8gMikpICsgb2Zmc2V0WTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5iaXRtYXBUZXh0KDAsIDAsIGl0ZW1Gb250ZmFtaWx5LCBTdHJpbmcoY29udGVudCksIGl0ZW1Gb250U2l6ZSk7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnYml0bWFwVGV4dCc7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuYWxpZ24gPSB0ZXh0QWxpZ247XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwudXBkYXRlVGV4dCgpO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtIChtb2RhbExhYmVsLndpZHRoIC8gMikpICsgb2Zmc2V0WDtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAobW9kYWxMYWJlbC5oZWlnaHQgLyAyKSkgKyBvZmZzZXRZO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcImltYWdlXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5pbWFnZSgwLCAwLCBjb250ZW50KTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdpbWFnZSc7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtICgobW9kYWxMYWJlbC53aWR0aCkgLyAyKSkgKyBvZmZzZXRYO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJ0aWxlU3ByaXRlXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC50aWxlU3ByaXRlKGl0ZW1YLCBpdGVtWSxcclxuXHRcdFx0XHRcdFx0dGlsZVNwcml0ZVdpZHRoLCB0aWxlU3ByaXRlSGVpZ2h0LCBjb250ZW50LCBpbWFnZUZyYW1lKTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5hbmNob3Iuc2V0VG8oaXRlbUFuY2hvci54LCBpdGVtQW5jaG9yLnkpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5hbmdsZSA9IGl0ZW1BbmdsZTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAndGlsZVNwcml0ZSc7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJzcHJpdGVcIikge1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnNwcml0ZSgwLCAwLCBhdGxhc1BhcmVudCwgY29udGVudCk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnNjYWxlLnNldFRvKGNvbnRlbnRTY2FsZSwgY29udGVudFNjYWxlKTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnc3ByaXRlJztcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcImJ1dHRvblwiKSB7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuYnV0dG9uKDAsIDAsIGF0bGFzUGFyZW50LCBjYWxsYmFjayxcclxuXHRcdFx0XHRcdFx0dGhpcywgYnV0dG9uSG92ZXIsIGNvbnRlbnQsIGJ1dHRvbkFjdGl2ZSwgY29udGVudCk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnNjYWxlLnNldFRvKGNvbnRlbnRTY2FsZSwgY29udGVudFNjYWxlKTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnYnV0dG9uJztcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJncmFwaGljc1wiKSB7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuZ3JhcGhpY3MoZ3JhcGhpY1csIGdyYXBoaWNIKTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYmVnaW5GaWxsKGdyYXBoaWNDb2xvciwgZ3JhcGhpY09wYWNpdHkpO1xyXG5cdFx0XHRcdFx0aWYgKGdyYXBoaWNSYWRpdXMgPD0gMCkge1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmRyYXdSZWN0KDAsIDAsIGdyYXBoaWNXLCBncmFwaGljSCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmRyYXdSb3VuZGVkUmVjdCgwLCAwLCBncmFwaGljVywgZ3JhcGhpY0gsIGdyYXBoaWNSYWRpdXMpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5lbmRGaWxsKCk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtICgobW9kYWxMYWJlbC53aWR0aCkgLyAyKSkgKyBvZmZzZXRYO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRtb2RhbExhYmVsLl9vZmZzZXRYID0gMDtcclxuXHRcdFx0XHRtb2RhbExhYmVsLl9vZmZzZXRZID0gMDtcclxuXHRcdFx0XHRtb2RhbExhYmVsLmxvY2tQb3NpdGlvbiA9IGxvY2tQb3NpdGlvbjtcclxuXHRcdFx0XHRtb2RhbExhYmVsLl9vZmZzZXRYID0gb2Zmc2V0WDtcclxuXHRcdFx0XHRtb2RhbExhYmVsLl9vZmZzZXRZID0gb2Zmc2V0WTtcclxuXHJcblxyXG5cdFx0XHRcdGlmIChjYWxsYmFjayAhPT0gZmFsc2UgJiYgaXRlbVR5cGUgIT09IFwiYnV0dG9uXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuaW5wdXRFbmFibGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwucGl4ZWxQZXJmZWN0Q2xpY2sgPSB0cnVlO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5wcmlvcml0eUlEID0gMTA7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmV2ZW50cy5vbklucHV0RG93bi5hZGQoY2FsbGJhY2ssIG1vZGFsTGFiZWwpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKGl0ZW1UeXBlICE9PSBcImJpdG1hcFRleHRcIiAmJiBpdGVtVHlwZSAhPT0gXCJncmFwaGljc1wiKSB7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmJyaW5nVG9Ub3AoKTtcclxuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKG1vZGFsTGFiZWwpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5icmluZ1RvVG9wKCk7XHJcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmJyaW5nVG9Ub3AobW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKG1vZGFsTGFiZWwpO1xyXG5cdFx0XHRcdFx0bW9kYWxHcm91cC5icmluZ1RvVG9wKG1vZGFsTGFiZWwpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bW9kYWxHcm91cC52aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdGdhbWUubW9kYWxzW3R5cGVdID0gbW9kYWxHcm91cDtcclxuXHJcblx0XHR9LFxyXG5cdFx0dXBkYXRlTW9kYWxWYWx1ZTogZnVuY3Rpb24gKHZhbHVlLCB0eXBlLCBpbmRleCwgaWQpIHtcclxuXHRcdFx0dmFyIGl0ZW07XHJcblx0XHRcdGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGluZGV4ICE9PSBudWxsKSB7XHJcblx0XHRcdFx0aXRlbSA9IGdhbWUubW9kYWxzW3R5cGVdLmdldENoaWxkQXQoaW5kZXgpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGlkICE9PSB1bmRlZmluZWQgJiYgaWQgIT09IG51bGwpIHtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChpdGVtLmNvbnRlbnRUeXBlID09PSBcInRleHRcIikge1xyXG5cdFx0XHRcdGl0ZW0udGV4dCA9IHZhbHVlO1xyXG5cdFx0XHRcdGl0ZW0udXBkYXRlKCk7XHJcblx0XHRcdFx0aWYgKGl0ZW0ubG9ja1Bvc2l0aW9uID09PSB0cnVlKSB7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpdGVtLnggPSAoKGdhbWUud2lkdGggLyAyKSAtIChpdGVtLndpZHRoIC8gMikpICsgaXRlbS5fb2Zmc2V0WDtcclxuXHRcdFx0XHRcdGl0ZW0ueSA9ICgoZ2FtZS5oZWlnaHQgLyAyKSAtIChpdGVtLmhlaWdodCAvIDIpKSArIGl0ZW0uX29mZnNldFk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwiYml0bWFwVGV4dFwiKSB7XHJcblx0XHRcdFx0aXRlbS50ZXh0ID0gdmFsdWU7XHJcblx0XHRcdFx0aXRlbS51cGRhdGVUZXh0KCk7XHJcblx0XHRcdFx0aWYgKGl0ZW0ubG9ja1Bvc2l0aW9uID09PSB0cnVlKSB7XHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpdGVtLnggPSAoKGdhbWUud2lkdGggLyAyKSAtIChpdGVtLndpZHRoIC8gMikpICsgaXRlbS5fb2Zmc2V0WDtcclxuXHRcdFx0XHRcdGl0ZW0ueSA9ICgoZ2FtZS5oZWlnaHQgLyAyKSAtIChpdGVtLmhlaWdodCAvIDIpKSArIGl0ZW0uX29mZnNldFk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwiaW1hZ2VcIikge1xyXG5cdFx0XHRcdGl0ZW0ubG9hZFRleHR1cmUodmFsdWUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHRcdGdldE1vZGFsSXRlbTogZnVuY3Rpb24gKHR5cGUsIGluZGV4KSB7XHJcblx0XHRcdHJldHVybiBnYW1lLm1vZGFsc1t0eXBlXS5nZXRDaGlsZEF0KGluZGV4KTtcclxuXHRcdH0sXHJcblx0XHRzaG93TW9kYWw6IGZ1bmN0aW9uICh0eXBlKSB7XHJcblx0XHRcdGdhbWUud29ybGQuYnJpbmdUb1RvcChnYW1lLm1vZGFsc1t0eXBlXSk7XHJcblx0XHRcdGdhbWUubW9kYWxzW3R5cGVdLnZpc2libGUgPSB0cnVlO1xyXG5cdFx0XHQvLyB5b3UgY2FuIGFkZCBhbmltYXRpb24gaGVyZVxyXG5cdFx0fSxcclxuXHRcdGhpZGVNb2RhbDogZnVuY3Rpb24gKHR5cGUpIHtcclxuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0udmlzaWJsZSA9IGZhbHNlO1xyXG5cdFx0XHQvLyB5b3UgY2FuIGFkZCBhbmltYXRpb24gaGVyZVxyXG5cdFx0fSxcclxuXHRcdGRlc3Ryb3lNb2RhbDogZnVuY3Rpb24gKHR5cGUpIHtcclxuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0uZGVzdHJveSgpO1xyXG5cdFx0XHRkZWxldGUgZ2FtZS5tb2RhbHNbdHlwZV07XHJcblx0XHR9XHJcblx0fTtcclxufTtcclxuIiwiXHJcbmNsYXNzIENsaWVudCB7XHJcbiAgICBcclxuXHRjb25zdHJ1Y3RvcihzZXB0aWtvbikge1xyXG4gICAgICAgIFxyXG5cdFx0dGhpcy5zb2NrZXQgPSBpby5jb25uZWN0KCk7XHJcbiAgICAgICAgdGhpcy5zZXB0aWtvbiA9IHRoaXMuc29ja2V0LnNlcHRpa29uID0gc2VwdGlrb247XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2xvZycsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTE9HOiAnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCd1cGRhdGUnLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgaWYoZGF0YS50eXBlID09IFwicGVyc29ubmVsXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24udXBkYXRlUGVyc29ubmVsKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEudHlwZSA9PSBcInJlc291cmNlc1wiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3Rpb24gPT0gXCJpbml0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLmluaXRSZXNvdXJjZXMoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihkYXRhLmFjdGlvbiArIFwiIG5vdCBhIGxlZ2FsIGFjdGlvbiBmb3IgUmVzb3VyY2UgdXBkYXRlLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09IFwiZGljZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLmdhbWUuZGljZS5zZXRWYWx1ZShkYXRhLmRldGFpbHMudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVUERBVEU6Jyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEudHlwZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdyZXF1ZXN0JywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSRVFVRVNUOiAnKTtcclxuICAgICAgICAgICAgc3dpdGNoKGRhdGEuZGV0YWlscy50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYXNrU3RhcnRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLnNob3dNb2RhbCgnYXNrU3RhcnQnKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2FjdGlvbicsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mKHRoaXMuc2VwdGlrb25bZGF0YS5jYWxsYmFja10pID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb25bZGF0YS5jYWxsYmFja10oZGF0YS5kZXRhaWxzKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogbm8gbWV0aG9kIGZvdW5kIGNhbGxlZCBzZXB0aWtvbi5cIiArIGRhdGEuY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG5cclxuXHRhc2tOZXdQbGF5ZXIoKSB7XHJcblx0XHR0aGlzLnNvY2tldC5lbWl0KCduZXdQbGF5ZXInLCB7dXVpZDpsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VwdFVVSUQnKX0pO1xyXG5cdH1cclxuICAgIFxyXG4gICAgc2VuZElucHV0KHBheWxvYWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2VuZGluZyBpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ2lucHV0JywgcGF5bG9hZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaWVudDtcclxuIiwiLy9Eb2N1bWVudGF0aW9uIGZvciBQaGFzZXIncyAoMi42LjIpIHNwcml0ZXM6OiBwaGFzZXIuaW8vZG9jcy8yLjYuMi9QaGFzZXIuU3ByaXRlLmh0bWxcclxuXHJcbmNsYXNzIENsb25lIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSwgdXVpZCkge1xyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2Nsb25lJywgZnJhbWUpO1xyXG4gICAgICAgIFxyXG4gICAgLy9zZXR1cCBwaHlzaWNzIHByb3BlcnRpZXNcclxuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC42NSk7XHJcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlQm9keSh0aGlzKTtcclxuICAgIC8vdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XHJcblxyXG4gICAgdGhpcy51dWlkID0gdXVpZDtcclxuICAgIC8vc2V0IHNpemVcclxuICAgIHRoaXMud2lkdGggPSAyNztcclxuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XHJcbiAgICBcclxuICAgIC8vc2V0IHJvdGF0aW9uICh0aGlzIHNob3VsZCBiZSBiYXNlZCBvbiB0aGUgYmFzZSB0aGlzIGNsb25lIG9jY3VwaWVzKVxyXG4gICAgdGhpcy5hbmdsZSA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFuZ2xlICogLTE7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gdGhpcy5nYW1lLnNlcHRpa29uLnBpeGVsc1RvVGlsZSh0aGlzLngsIHRoaXMueSk7XHJcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gdHJ1ZTtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIHJlbW92ZSgpIHtcclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgaGlnaGxpZ2h0T24oKSB7XHJcbiAgICB0aGlzLnRpbnQgPSAweEZGNTUwMDtcclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS5hbHBoYSA9IDE7XHJcbiAgfVxyXG4gIFxyXG4gIGhpZ2hsaWdodE9mZigpIHtcclxuICAgIHRoaXMudGludCA9IDB4ZmZmZmZmO1xyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLmFscGhhID0gMDtcclxuICB9XHJcbiAgXHJcbiAgZ2V0TGVnYWxNb3ZlcygpIHtcclxuICAgIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5waXhlbHNUb1RpbGUodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgdmFyIGN1cnJlbnRMZWdhbE1vdmVzID0gdGhpcy5nYW1lLnNlcHRpa29uLmdldExlZ2FsTW92ZXModGhpcy5nYW1lLmdsb2JhbC5sYXN0RGljZVJvbGwsIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyk7XHJcbiAgICB2YXIgbGVnYWxUaWxlc0FycmF5ID0gW107XHJcbiAgICBcclxuICAgIFxyXG4gICAgZm9yICh2YXIgdGlsZSBpbiBjdXJyZW50TGVnYWxNb3Zlcykge1xyXG4gICAgICAgIGxlZ2FsVGlsZXNBcnJheS5wdXNoKHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbY3VycmVudExlZ2FsTW92ZXNbdGlsZV0ueF1bY3VycmVudExlZ2FsTW92ZXNbdGlsZV0ueV0pO1xyXG4gICAgICAgIC8vbGVnYWxUaWxlc0FycmF5W2xlZ2FsVGlsZXNBcnJheS5sZW5ndGgtMV0uYWxwaGEgPSAwLjU7XHJcbiAgICAgICAgLy9sZWdhbFRpbGVzQXJyYXlbbGVnYWxUaWxlc0FycmF5Lmxlbmd0aC0xXS5sZWdhbEZvciA9IHRoaXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBsZWdhbFRpbGVzQXJyYXk7XHJcbiAgfVxyXG4gIFxyXG4gIG1vdmUoY29vcmRpbmF0ZXMpIHtcclxuICBcclxuICAgIC8vIENsZWFyIFwibGVnYWxGb3JcIlxyXG4gICAgZm9yICh2YXIgdGlsZSBpbiB0aGlzLmxlZ2FsVGlsZXNBcnJheSkge1xyXG4gICAgICAgIHRoaXMubGVnYWxUaWxlc0FycmF5W3RpbGVdLmFscGhhID0gMDtcclxuICAgICAgICBkZWxldGUgdGhpcy5sZWdhbFRpbGVzQXJyYXlbdGlsZV0ubGVnYWxGb3I7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIE1vdmUgdG8gbmV3IGhvbWVcclxuICAgIC8vIE5lZWQgdG8gYWRkIGEgY2hlY2sgZm9yIGFybWVkIG9wcG9uZW50cyAoYmlvZHJvbmVzL2VzcGlvbmFnZWQgY2xvbmVzL2Nsb25lcyBpbiBlbmVteSBiYXNlLCBldGMuKVxyXG4gICAgdmFyIHBvaW50cyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlVG9QaXhlbHMoY29vcmRpbmF0ZXMueCwgY29vcmRpbmF0ZXMueSk7XHJcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gZmFsc2U7XHJcbiAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLnkgLSBwb2ludHMueSArIHRoaXMueCAtIHBvaW50cy54KS50b0ZpeGVkKDEpO1xyXG4gICAgXHJcbiAgICAvLyBVcGRhdGUgdGhlIHBlcnNvbm5lbCBjb29yZGluYXRlIHByb3BlcnR5XHJcbiAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSB0cnVlO1xyXG4gICAgXHJcbiAgICAvLyBXYWl0IGZvciBhbmltYXRpb24gdG8gY29tcGxldGUsIHRoZW4gcHJvY2VzcyB0aWxlIHRyaWdnZXJcclxuICAgIHZhciB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcykudG8oIHt4OnBvaW50cy54LCB5OnBvaW50cy55fSwgKGRpc3RhbmNlKjExKSwgUGhhc2VyLkVhc2luZy5DdWJpYy5PdXQsIHRydWUpO1xyXG4gICAgdHdlZW4ub25Db21wbGV0ZS5hZGQodGhpcy5nYW1lLnNlcHRpa29uLnRyaWdnZXJUaWxlLCB0aGlzLmdhbWUuc2VwdGlrb24pO1xyXG4gICAgXHJcbiAgICAvLyBDbGVhciB0aGlzLmN1cnJlbnRMZWdhbE1vdmVzXHJcbiAgICBkZWxldGUgdGhpcy5sZWdhbFRpbGVzQXJyYXk7XHJcbiAgICBkZWxldGUgdGhpcy5jdXJyZW50TGVnYWxNb3ZlczsgICAgXHJcbiAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsb25lO1xyXG4iLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxyXG5jbGFzcyBDcm9zc2hhaXJzIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSkge1xyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2Nyb3NzaGFpcnMnLCBmcmFtZSk7XHJcblxyXG4gICAgLy9zZXQgc2l6ZVxyXG4gICAgdGhpcy53aWR0aCA9IDM1OyBcclxuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XHJcblxyXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCl7XHJcbiAgICB0aGlzLnggPSB0aGlzLmdhbWUuaW5wdXQubW91c2VQb2ludGVyLng7XHJcbiAgICB0aGlzLnkgPSB0aGlzLmdhbWUuaW5wdXQubW91c2VQb2ludGVyLnk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3Jvc3NoYWlycztcclxuIiwiLy9Eb2N1bWVudGF0aW9uIGZvciBQaGFzZXIncyAoMi42LjIpIHNwcml0ZXM6OiBwaGFzZXIuaW8vZG9jcy8yLjYuMi9QaGFzZXIuU3ByaXRlLmh0bWxcclxuY2xhc3MgRGljZSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUpIHsgIFxyXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2RpY2UnLCBmcmFtZSk7XHJcblxyXG4gICAgLy9zZXR1cCBwaHlzaWNzIHByb3BlcnRpZXNcclxuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcclxuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGVCb2R5KHRoaXMpO1xyXG5cclxuICAgIC8vc2V0IGNsaWNrIGV2ZW50XHJcbiAgICB0aGlzLmlucHV0RW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5ldmVudHMub25JbnB1dERvd24uYWRkKHRoaXMuY2xpY2tlZCwgdGhpcyk7XHJcblxyXG4gICAgLy9zZXQgc2l6ZVxyXG4gICAgdGhpcy53aWR0aCA9IDUwO1xyXG4gICAgdGhpcy5zY2FsZS55ID0gTWF0aC5hYnModGhpcy5zY2FsZS54KTtcclxuICAgIHRoaXMuZmlsdGVycyA9IFt0aGlzLmdhbWUuYWRkLmZpbHRlcignR3JheScpXTtcclxuICAgIHRoaXMuYWxwaGEgPSAwLjU7XHJcbiAgICBcclxuICAgIHRoaXMudmFsdWUgPSAxMDtcclxuICAgIHRoaXMuZnJhbWUgPSB0aGlzLnZhbHVlLTE7XHJcbiAgfVxyXG5cclxuICBjbGlja2VkICgpIHtcclxuICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ2RpY2VDbGlja2VkJ30pO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlKCkge1xyXG4gICAgICB0aGlzLmFscGhhID0gMTtcclxuICAgICAgdGhpcy5maWx0ZXJzID0gbnVsbDtcclxuICAgICAgdGhpcy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZSgpIHtcclxuICAgICAgdGhpcy5hbHBoYSA9IDAuNTtcclxuICAgICAgdGhpcy5maWx0ZXJzID0gW3RoaXMuZ2FtZS5hZGQuZmlsdGVyKCdHcmF5JyldO1xyXG4gICAgICB0aGlzLmlucHV0RW5hYmxlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWUpIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuZnJhbWUgPSB2YWx1ZSAtIDE7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaWNlO1xyXG4iLCJjbGFzcyBNYXN0ZXIge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoKSB7IFxyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFzdGVyOyIsImNsYXNzIE9yZG5hbmNlIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSwgdHlwZSwgdXVpZCkge1xyXG4gICAgdmFyIG9yZEZyYW1lO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJzaGllbGRcIjpcclxuICAgICAgICBvcmRGcmFtZSA9IDQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJiaW9kcm9uZVwiOlxyXG4gICAgICAgIG9yZEZyYW1lID0gMTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInNhdGVsbGl0ZVwiOlxyXG4gICAgICAgIG9yZEZyYW1lID0gNTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInJvY2tldFwiOlxyXG4gICAgICAgIG9yZEZyYW1lID0gMjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQmFkIG9yZG5hbmNlIHR5cGVcIik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnb3JkbmFuY2UnLCBvcmRGcmFtZSk7XHJcbiAgICAgICAgXHJcbiAgICAvL3NldHVwIHBoeXNpY3MgcHJvcGVydGllc1xyXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xyXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZUJvZHkodGhpcyk7XHJcbiAgICAvL3RoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMudXVpZCA9IHV1aWQ7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgLy9zZXQgc2l6ZVxyXG4gICAgdGhpcy53aWR0aCA9IDUwO1xyXG4gICAgdGhpcy5zY2FsZS55ID0gTWF0aC5hYnModGhpcy5zY2FsZS54KTtcclxuICAgIFxyXG4gICAgLy9zZXQgcm90YXRpb24gKHRoaXMgc2hvdWxkIGJlIGJhc2VkIG9uIHRoZSBiYXNlIHRoaXMgY2xvbmUgb2NjdXBpZXMpXHJcbiAgICB0aGlzLmFuZ2xlID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAuYW5nbGUgKiAtMTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSB0aGlzLmdhbWUuc2VwdGlrb24ucGl4ZWxzVG9UaWxlKHRoaXMueCwgdGhpcy55KTtcclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSB0cnVlO1xyXG5cclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9yZG5hbmNlOyIsImNsYXNzIFBlcnNvbm5lbCBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSkge1xyXG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksICdjbG9uZScsIGZyYW1lKTsgIFxyXG4gICAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJzb25uZWw7IiwiY2xhc3MgUmVzb3VyY2VzIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKCkgeyBcclxuICAgIHRoaXMucmVzb3VyY2VFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgT1hZR0VOOiAwLFxyXG4gICAgICAgIFJPQ0tFVDogMSxcclxuICAgICAgICBNRVRBTDogMixcclxuICAgICAgICBFTkVSR1k6IDMsXHJcbiAgICAgICAgQklPTUFTUzogNCxcclxuICAgICAgICBCSU9EUk9ORTogNSxcclxuICAgICAgICBVUkFOSVVNOiA2XHJcbiAgICB9KTtcclxuICAgIHRoaXMucmVzb3VyY2VzID0ge307XHJcbiAgICBmb3IodmFyIHR5cGUgaW4gdGhpcy5yZXNvdXJjZUVudW0pIHtcclxuICAgICAgICB0aGlzLnJlc291cmNlc1t0aGlzLnJlc291cmNlRW51bVt0eXBlXV0gPSA1O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBjaGVjayh0eXBlLCBjb3VudCkge1xyXG4gICAgaWYodGhpcy5yZXNvdXJjZXNbdGhpcy5yZXNvdXJjZUVudW1bdHlwZV1dID4gY291bnQpXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIFxyXG4gIGdldENvdW50KHR5cGUpIHtcclxuICAgIHJldHVybiB0aGlzLnJlc291cmNlc1t0eXBlXTtcclxuICB9XHJcbiAgICBcclxuICBhZGQodHlwZSwgY291bnQpIHtcclxuICB9XHJcbiAgXHJcbiAgcmVtb3ZlKHR5cGUsIGNvdW50KSB7XHJcbiAgICB0aGlzLnJlc291cmNlc1t0eXBlXSAtPSBjb3VudDtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc291cmNlczsiLCJpbXBvcnQgQ2xvbmUgZnJvbSAnLi4vcHJlZmFicy9jbG9uZSc7XHJcbmltcG9ydCBPcmRuYW5jZSBmcm9tICcuLi9wcmVmYWJzL29yZG5hbmNlJztcclxuXHJcbmNsYXNzIFNlcHRpa29uIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHsgXHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgXHJcbiAgICB0aGlzLnBsYXllciA9IHtcclxuICAgICAgICBpZDogMCxcclxuICAgICAgICBwZXJzb25uZWxBcnJheTogW10sXHJcbiAgICAgICAgb3JkbmFuY2VBcnJheTogW11cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5vcHBvbmVudCA9IHtcclxuICAgICAgICBwZXJzb25uZWxBcnJheTogW10sXHJcbiAgICAgICAgb3JkbmFuY2VBcnJheTogW11cclxuICAgIH07XHJcbiAgICBcclxuICAgIHRoaXMuc2hvd25UaWxlcyA9IFtdO1xyXG4gICAgdGhpcy50aWxlQXJyYXkgPSBbXTtcclxuXHJcbiAgICB0aGlzLmxlZ2FsTW92ZXMgPSBudWxsO1xyXG4gICAgdGhpcy5zZWxlY3RlZFRvTW92ZSA9IG51bGw7XHJcbiAgICB0aGlzLmxlZ2FsR3VubmVycyA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5jaG9vc2luZ1RhcmdldHMgPSBmYWxzZTtcclxuICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzID0gW107XHJcbiAgfVxyXG5cclxuICBzaG93TW9kYWwodHlwZSkge1xyXG4gICAgdGhpcy5nYW1lLm1vZGFsLnNob3dNb2RhbCh0eXBlKTtcclxuICB9XHJcbiAgXHJcbiAgZGljZVJvbGxlZChkZXRhaWxzKSB7XHJcbiAgICB0aGlzLmdhbWUuZGljZS5zZXRWYWx1ZShkZXRhaWxzLnZhbHVlKTtcclxuICAgIHRoaXMubGVnYWxNb3ZlcyA9IGRldGFpbHMuZ2FtZVBpZWNlcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGV0YWlscy5nYW1lUGllY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yICh2YXIgbSBpbiBkZXRhaWxzLmdhbWVQaWVjZXNbaV0ubW92ZXMpIHtcclxuICAgICAgICAgICAgdmFyIHggPSBkZXRhaWxzLmdhbWVQaWVjZXNbaV0ubW92ZXNbbV0ueDtcclxuICAgICAgICAgICAgdmFyIHkgPSBkZXRhaWxzLmdhbWVQaWVjZXNbaV0ubW92ZXNbbV0ueTtcclxuICAgICAgICAgICAgdGhpcy5zaG93VGlsZXMoW2RldGFpbHMuZ2FtZVBpZWNlc1tpXS5vcmlnaW5dLCAweEY2MzYzNik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb2ZmZXJEaWNlKCkge1xyXG4gICAgICB0aGlzLmdhbWUuZGljZS5lbmFibGUoKTtcclxuICB9XHJcblxyXG4gIHRha2VEaWNlKCkge1xyXG4gICAgICB0aGlzLmdhbWUuZGljZS5kaXNhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBvZmZlckd1bm5lcnMoZGF0YSkge1xyXG4gICAgICB0aGlzLmNob29zaW5nVGFyZ2V0cyA9IHRydWU7XHJcbiAgICAgIHRoaXMubGVnYWxHdW5uZXJzID0gZGF0YS5ndW5uZXJzO1xyXG4gICAgICB0aGlzLmdhbWUuZ28uZW5hYmxlKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYW5pbWF0ZSBzb21lIGluZGljYXRpb24gb2YgdmlhYmxlIGd1bm5lcnMgb24gdGhlIHN1cmZhY2UuIE1heWJlIGEgcG9pbnRlciBib3VuY2luZyBvdmVyIHRoZW0/XCIpO1xyXG4gIH1cclxuICBcclxuICBhZGRDbG9uZShkZXRhaWxzKSB7XHJcbiAgICB2YXIgcG9pbnQgPSB0aGlzLnRpbGVUb1BpeGVscyhkZXRhaWxzLngsIGRldGFpbHMueSk7XHJcbiAgICB2YXIgY2xvbmUgPSBuZXcgQ2xvbmUodGhpcy5nYW1lLCBwb2ludC54LCBwb2ludC55LCBudWxsLCBkZXRhaWxzLnV1aWQpO1xyXG4gICAgaWYoZGV0YWlscy5wbGF5ZXJJRCA9PSB0aGlzLnBsYXllci5pZCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5LnB1c2goY2xvbmUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5LnB1c2goY2xvbmUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKGNsb25lKTtcclxuICB9XHJcblxyXG4gIGFkZE9yZG5hbmNlKGRldGFpbHMpIHtcclxuICAgIHZhciBwb2ludCA9IHRoaXMudGlsZVRvUGl4ZWxzKGRldGFpbHMucG9pbnQueCwgZGV0YWlscy5wb2ludC55KTtcclxuICAgIHZhciBvcmQgPSBuZXcgT3JkbmFuY2UodGhpcy5nYW1lLCBwb2ludC54LCBwb2ludC55LCBudWxsLCBkZXRhaWxzLnR5cGUsIGRldGFpbHMudXVpZCk7XHJcbiAgICBpZihkZXRhaWxzLnBsYXllcklEID09IHRoaXMucGxheWVyLmlkKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheS5wdXNoKG9yZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMub3Bwb25lbnQub3JkbmFuY2VBcnJheS5wdXNoKG9yZCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQob3JkKTtcclxuICB9XHJcblxyXG4gIG1vdmVQZXJzb25uZWwoZGF0YSkge1xyXG4gICAgdmFyIHR3ZWVuID0gbnVsbDtcclxuICAgIHZhciBkaXN0YW5jZSA9IG51bGw7XHJcbiAgICB2YXIgcG9pbnQgPSB0aGlzLnRpbGVUb1BpeGVscyhkYXRhLngsIGRhdGEueSk7XHJcbiAgICBmb3IgKHZhciBpIGluIHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnV1aWQgPT0gZGF0YS51dWlkKSB7XHJcbiAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueSAtIHBvaW50LnkgKyB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtpXS54IC0gcG9pbnQueCkudG9GaXhlZCgxKTtcclxuICAgICAgICAgICAgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldKS50bygge3g6cG9pbnQueCwgeTpwb2ludC55fSwgKGRpc3RhbmNlKjExKSwgUGhhc2VyLkVhc2luZy5DdWJpYy5PdXQsIHRydWUpO1xyXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIHRpbGUuIE5vdCBxdWl0ZSBzdXJlIGhvdyB0byBkbyB0aGlzIHlldC5cclxuICAgICAgICAgICAgLy90d2Vlbi5vbkNvbXBsZXRlLmFkZCh0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICdtb3ZlQ29tcGxldGUnLCB4OnBhcnNlSW50KG9iai50aWxlWCksIHk6cGFyc2VJbnQob2JqLnRpbGVZKX0pOywgdGhpcy5nYW1lLnNlcHRpa29uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBqIGluIHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXkpIHtcclxuICAgICAgICBpZiAodGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheVtqXS51dWlkID09IGRhdGEudXVpZCkge1xyXG4gICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXlbal0ueSAtIHBvaW50LnkgKyB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5W2pdLnggLSBwb2ludC54KS50b0ZpeGVkKDEpO1xyXG4gICAgICAgICAgICB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheVtqXSkudG8oIHt4OnBvaW50LngsIHk6cG9pbnQueX0sIChkaXN0YW5jZSoxMSksIFBoYXNlci5FYXNpbmcuQ3ViaWMuT3V0LCB0cnVlKTtcclxuICAgICAgICAgICAgLy8gVHJpZ2dlciB0aWxlLiBOb3QgcXVpdGUgc3VyZSBob3cgdG8gZG8gdGhpcyB5ZXQuXHJcbiAgICAgICAgICAgIC8vdHdlZW4ub25Db21wbGV0ZS5hZGQodGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAnbW92ZUNvbXBsZXRlJywgeDpwYXJzZUludChvYmoudGlsZVgpLCB5OnBhcnNlSW50KG9iai50aWxlWSl9KTssIHRoaXMuZ2FtZS5zZXB0aWtvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW92ZU9yZG5hbmNlKGRhdGEpIHtcclxuICAgIHZhciB0d2VlbiA9IG51bGw7XHJcbiAgICB2YXIgZGlzdGFuY2UgPSBudWxsO1xyXG4gICAgdmFyIHBvaW50ID0gdGhpcy50aWxlVG9QaXhlbHMoZGF0YS54LCBkYXRhLnkpO1xyXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnBsYXllci5vcmRuYW5jZUFycmF5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLm9yZG5hbmNlQXJyYXlbaV0udXVpZCA9PSBkYXRhLnV1aWQpIHtcclxuICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLnBsYXllci5vcmRuYW5jZUFycmF5W2ldLnkgLSBwb2ludC55ICsgdGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheVtpXS54IC0gcG9pbnQueCkudG9GaXhlZCgxKTtcclxuICAgICAgICAgICAgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMucGxheWVyLm9yZG5hbmNlQXJyYXlbaV0pLnRvKCB7eDpwb2ludC54LCB5OnBvaW50Lnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgdGlsZS4gTm90IHF1aXRlIHN1cmUgaG93IHRvIGRvIHRoaXMgeWV0LlxyXG4gICAgICAgICAgICAvL3R3ZWVuLm9uQ29tcGxldGUuYWRkKHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ21vdmVDb21wbGV0ZScsIHg6cGFyc2VJbnQob2JqLnRpbGVYKSwgeTpwYXJzZUludChvYmoudGlsZVkpfSk7LCB0aGlzLmdhbWUuc2VwdGlrb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAodmFyIGogaW4gdGhpcy5vcHBvbmVudC5vcmRuYW5jZUFycmF5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3Bwb25lbnQub3JkbmFuY2VBcnJheVtqXS51dWlkID09IGRhdGEudXVpZCkge1xyXG4gICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMub3Bwb25lbnQub3JkbmFuY2VBcnJheVtqXS55IC0gcG9pbnQueSArIHRoaXMub3Bwb25lbnQub3JkbmFuY2VBcnJheVtqXS54IC0gcG9pbnQueCkudG9GaXhlZCgxKTtcclxuICAgICAgICAgICAgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMub3Bwb25lbnQub3JkbmFuY2VBcnJheVtqXSkudG8oIHt4OnBvaW50LngsIHk6cG9pbnQueX0sIChkaXN0YW5jZSoxMSksIFBoYXNlci5FYXNpbmcuQ3ViaWMuT3V0LCB0cnVlKTtcclxuICAgICAgICAgICAgLy8gVHJpZ2dlciB0aWxlLiBOb3QgcXVpdGUgc3VyZSBob3cgdG8gZG8gdGhpcyB5ZXQuXHJcbiAgICAgICAgICAgIC8vdHdlZW4ub25Db21wbGV0ZS5hZGQodGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAnbW92ZUNvbXBsZXRlJywgeDpwYXJzZUludChvYmoudGlsZVgpLCB5OnBhcnNlSW50KG9iai50aWxlWSl9KTssIHRoaXMuZ2FtZS5zZXB0aWtvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGVyc29ubmVsKGRhdGEpIHtcclxuICAgICAgdmFyIGN1cnJlbnRQZXJzb25uZWwgPSBudWxsO1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmRldGFpbHMpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgZGF0YS5kZXRhaWxzID0gW2RhdGEuZGV0YWlsc107XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5Lmxlbmd0aCA9PT0gMCAmJiBkYXRhLmRldGFpbHMubGVuZ3RoID09PSA1KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBkYXRhLmRldGFpbHMpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRDbG9uZShkYXRhLmRldGFpbHNbaV0pO1xyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXkpIHtcclxuICAgICAgICAgICAgY3VycmVudFBlcnNvbm5lbCA9IHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXlbcF07XHJcbiAgICAgICAgICAgIGZvciAodmFyIGQgaW4gZGF0YS5kZXRhaWxzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBlcnNvbm5lbC51dWlkID09IGRhdGEuZGV0YWlsc1tkXS51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGVyc29ubmVsKGRhdGEuZGV0YWlsc1tkXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVBlcnNvbm5lbChkYXRhKSB7XHJcbiAgICAgIHZhciBwZXJzb25uZWxUb0Rlc3Ryb3k7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtpXS51dWlkID09IGRhdGEudXVpZCkge1xyXG4gICAgICAgICAgICAgIHBlcnNvbm5lbFRvRGVzdHJveSA9IHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldO1xyXG4gICAgICAgICAgICAgIHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgIHBlcnNvbm5lbFRvRGVzdHJveS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQWxsUGVyc29ubmVsKCl7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYodGhpcy5nYW1lLmJvYXJkR3JvdXAuY2hpbGRyZW5baV0uY29uc3RydWN0b3IgPT0gQ2xvbmUpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5jaGlsZHJlbltpXS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIGktLTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHVwZGF0ZVBsYXllcihkZXRhaWxzKSB7XHJcbiAgICBmb3IgKHZhciBpIGluIGRldGFpbHMpIHtcclxuICAgICAgICB0aGlzLnBsYXllcltpXSA9IGRldGFpbHNbaV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbml0UmVzb3VyY2VzKCkge1xyXG4gICAgdmFyIGN1cnJlbnRSZWMgPSBudWxsO1xyXG4gICAgdmFyIGdyYXBoaWNzID0gdGhpcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcclxuICAgIC8vZ3JhcGhpY3MubGluZVN0eWxlKDQsIDB4ZmZkOTAwLCAxKTtcclxuICAgIGdyYXBoaWNzLmJlZ2luRmlsbCgweGZmZmZmZiwgMSk7XHJcbiAgICBncmFwaGljcy5kcmF3Um91bmRlZFJlY3QoMTAwLCAxMDAsIHRoaXMudGlsZVdpZHRoLTQsIHRoaXMudGlsZUhlaWdodC00LCAxNCk7XHJcblxyXG4gICAgZm9yICh2YXIgYyBpbiB0aGlzLnRpbGVBcnJheSkge1xyXG4gICAgICAgIGZvciAodmFyIHIgaW4gdGhpcy50aWxlQXJyYXlbY10pIHtcclxuICAgICAgICAgICAgaWYodGhpcy50aWxlQXJyYXlbY11bcl0udGlsZU93bmVyID09IHRoaXMucGxheWVyLmlkICYmIHRoaXMudGlsZUFycmF5W2NdW3JdLnRpbGVUeXBlID09IFwid2FyZWhvdXNlXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyIDwgNSB8fCByID4gMTUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUodGhpcy50aWxlQXJyYXlbY11bcl0ueCsodGhpcy50aWxlQXJyYXlbY11bcl0ud2lkdGgvMiksIHRoaXMudGlsZUFycmF5W2NdW3JdLnkrKHRoaXMudGlsZUFycmF5W2NdW3JdLndpZHRoLzIpLCBncmFwaGljcy5nZW5lcmF0ZVRleHR1cmUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYy5hbmdsZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0MCktMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYy5hbmNob3Iuc2V0VG8oMC41KTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMudGlsZUFycmF5W2NdW3JdLnRpbGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlbmVyZ3lcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4ZmNlMzE1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJveHlnZW5cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4MDBiMWYwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyb2NrZXRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4ZTgyYTJjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtZXRhbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYy50aW50ID0gMHhmZmZmZmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJpb21hc3NcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4OGFjMzQyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJiaW9kcm9uZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYy50aW50ID0gMHg5ZjNhOWI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInVyYW5pdW1cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4ZjM2NTIwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQoY3VycmVudFJlYyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBncmFwaGljcy5kZXN0cm95KCk7XHJcbiAgfVxyXG4gIFxyXG4gIGNyZWF0ZVRpbGVBcnJheShjb2x1bW5zLCByb3dzLCBwb2ludCkge1xyXG4gICAgdGhpcy50aWxlRGV0YWlsID0gdGhpcy5nYW1lLmNhY2hlLmdldEpTT04oJ3RpbGVEZXRhaWwnKTtcclxuXHJcbiAgICB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzID0ge3g6MCwgeTowfTtcclxuXHJcbiAgICB2YXIgeCwgeTtcclxuICAgIFxyXG4gICAgdGhpcy5tYXJnaW5Cb3R0b20gPSB0aGlzLm1hcmdpblRvcCA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmhlaWdodC8xNy40NzU7XHJcbiAgICB0aGlzLm1hcmdpbkxlZnQgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aC8yNDtcclxuICAgIHRoaXMubWFyZ2luUmlnaHQgPSAgdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGgvMjYuMzE1ODtcclxuICAgIHRoaXMudGlsZVdpZHRoID0gdGhpcy50aWxlSGVpZ2h0ID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGgvMzk7XHJcbiAgICB0aGlzLnBhZGRpbmcgPSAodGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGggLSAodGhpcy5tYXJnaW5MZWZ0ICsgdGhpcy5tYXJnaW5SaWdodCkgLSAodGhpcy50aWxlV2lkdGggKiAzMSkpLzMwO1xyXG4gICAgICAgIFxyXG4gICAgLy90aGlzLnRpbGVXaWR0aCA9IDI1Oy8vKHRoaXMuYmFja2dyb3VuZFdpZHRoIC0gKCh0aGlzLm1hcmdpbkxlZnQgKyB0aGlzLm1hcmdpblJpZ2h0KSArICh0aGlzLnBhZGRpbmcgKiAoY29sdW1ucyAtIDEpKSkpIC8gY29sdW1ucztcclxuICAgIC8vdGhpcy50aWxlSGVpZ2h0ID0gMjU7Ly8odGhpcy5iYWNrZ3JvdW5kSGVpZ2h0IC0gKCh0aGlzLm1hcmdpblRvcCArIHRoaXMubWFyZ2luQm90dG9tKSArICh0aGlzLnBhZGRpbmcgKiAocm93cyAtIDEpKSkpIC8gcm93cztcclxuICAgICAgICBcclxuICAgIHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMueCA9IHBvaW50LnggKyB0aGlzLm1hcmdpbkxlZnQ7XHJcbiAgICB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnkgPSBwb2ludC55ICsgdGhpcy5tYXJnaW5Ub3A7XHJcbiAgICBcclxuICAgIHZhciBncmFwaGljcyA9IHRoaXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XHJcbiAgICAvL2dyYXBoaWNzLmxpbmVTdHlsZSg0LCAweGZmZDkwMCwgMSk7XHJcbiAgICBncmFwaGljcy5iZWdpbkZpbGwoMHhmZmZmZmYsIDEpO1xyXG4gICAgZ3JhcGhpY3MuZHJhd1JlY3QoMTAwLCAxMDAsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQpO1xyXG4gICAgXHJcbiAgICBmb3IgKHZhciBjb2x1bW4gPSAwOyBjb2x1bW4gPCBjb2x1bW5zOyBjb2x1bW4rKykge1xyXG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHJvd3M7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB4ID0gdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy54ICsgKHRoaXMudGlsZVdpZHRoICogY29sdW1uKSArICh0aGlzLnBhZGRpbmcgKiBjb2x1bW4gLSAxKTtcclxuICAgICAgICAgICAgeSA9IHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMueSArICh0aGlzLnRpbGVIZWlnaHQgKiByb3cpICsgKHRoaXMucGFkZGluZyAqIHJvdyAtIDEpO1xyXG4gICAgICAgICAgICAvL2dyYXBoaWNzLmdlbmVyYXRlVGV4dHVyZSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaWxlID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoeCwgeSwgZ3JhcGhpY3MuZ2VuZXJhdGVUZXh0dXJlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQoY3VycmVudFRpbGUpO1xyXG4gICAgICAgICAgICBjdXJyZW50VGlsZS5hbHBoYSA9IDA7IC8vIDAuMjU7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlLmlucHV0RW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlLmV2ZW50cy5vbklucHV0RG93bi5hZGQodGhpcy50aWxlQ2xpY2tlZCwgdGhpcyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMudGlsZUFycmF5W2NvbHVtbl0gPT0gJ3VuZGVmaW5lZCcpIFxyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbY29sdW1uXSA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjb2x1bW5dW3Jvd10gPSBjdXJyZW50VGlsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdyYXBoaWNzLmRlc3Ryb3koKTtcclxuICAgIFxyXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMudGlsZURldGFpbCkge1xyXG4gICAgICAgIGlmICghdGhpcy50aWxlRGV0YWlsLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBvYmogPSB0aGlzLnRpbGVEZXRhaWxba2V5XTtcclxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xyXG4gICAgICAgICAgICAvLyBza2lwIGxvb3AgaWYgdGhlIHByb3BlcnR5IGlzIGZyb20gcHJvdG90eXBlXHJcbiAgICAgICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGxvY2F0aW9uQ291bnQgPSBvYmpbcHJvcF0ubG9jYXRpb25zLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yKCB2YXIgaSA9IDA7IGkgPCBsb2NhdGlvbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIGNvb3JkcyA9IG9ialtwcm9wXS5sb2NhdGlvbnNbaV0uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICAgICAgeCA9IGNvb3Jkc1swXTtcclxuICAgICAgICAgICAgICAgIHkgPSBjb29yZHNbMV07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVEYW1hZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlT2NjdXBpZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVYID0geDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVZID0geTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVUeXBlID0gb2JqW3Byb3BdLnR5cGU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVBcnJheVt4XVt5XSAhPSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlTmFtZSA9IG9ialtwcm9wXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHggKyBcIjpcIiArIHkgKyBcIiBub3QgZm91bmQhXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHggPCA5KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVPd25lciA9IDE7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4PjIwKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVPd25lciA9IDI7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtwcm9wXS5wcm9wZXJ0aWVzICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZVByb3BlcnRpZXMgPSBvYmpbcHJvcF0ucHJvcGVydGllcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBpeGVsc1RvVGlsZSh4LCB5KSB7XHJcbiAgICB2YXIgeFRpbGUgPSAwO1xyXG4gICAgdmFyIHlUaWxlID0gMDtcclxuICAgIFxyXG4gICAgZm9yICh2YXIgY29sIGluIHRoaXMudGlsZUFycmF5KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcm93IGluIHRoaXMudGlsZUFycmF5W2NvbF0pIHtcclxuICAgICAgICAgICAgdmFyIG9iaiA9IHRoaXMudGlsZUFycmF5W2NvbF1bcm93XTtcclxuICAgICAgICAgICAgaWYoeCA+IG9iai54ICYmIHggPCBvYmoueCArIG9iai53aWR0aClcclxuICAgICAgICAgICAgICAgIHhUaWxlID0gcGFyc2VJbnQoY29sKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih5ID4gb2JqLnkgJiYgeSA8IG9iai55ICsgb2JqLmhlaWdodClcclxuICAgICAgICAgICAgICAgIHlUaWxlID0gcGFyc2VJbnQocm93KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge3g6eFRpbGUsIHk6eVRpbGV9O1xyXG4gIH1cclxuICBcclxuICB0aWxlVG9QaXhlbHMoeCwgeSkge1xyXG4gICAgdmFyIHRpbGVPYmogPSB0aGlzLnRpbGVBcnJheVt4XVt5XTtcclxuICAgIHJldHVybiB7eDp0aWxlT2JqLnggKyB0aWxlT2JqLndpZHRoLzIsIHk6dGlsZU9iai55ICsgdGlsZU9iai5oZWlnaHQvMn07XHJcbiAgfVxyXG4gIFxyXG4gIHRpbGVDbGlja2VkKG9iaikge1xyXG4gICAgICB0aGlzLmhpZGVUaWxlcygpO1xyXG4gICAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICd0aWxlQ2xpY2tlZCcsIHg6cGFyc2VJbnQob2JqLnRpbGVYKSwgeTpwYXJzZUludChvYmoudGlsZVkpfSk7XHJcbiAgICAvLyAgIHRoaXMuYWRkT3JkbmFuY2Uoe3BvaW50Ont4Om9iai50aWxlWCwgeTpvYmoudGlsZVl9LCB0eXBlOidzaGllbGQnLCB1dWlkOk1hdGgucmFuZG9tKCl9KTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICB9XHJcbiAgXHJcbiAgc2hvd1RpbGVzKGNvb3Jkc0FycmF5LCBjb2xvcikge1xyXG4gICAgZm9yICh2YXIgaSBpbiBjb29yZHNBcnJheSkge1xyXG4gICAgICAgIHRoaXMudGlsZUFycmF5W2Nvb3Jkc0FycmF5W2ldLnhdW2Nvb3Jkc0FycmF5W2ldLnldLmFscGhhID0gMC41O1xyXG4gICAgICAgIGlmKGNvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2Nvb3Jkc0FycmF5W2ldLnhdW2Nvb3Jkc0FycmF5W2ldLnldLnRpbnQgPSBjb2xvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjb29yZHNBcnJheVtpXS54XVtjb29yZHNBcnJheVtpXS55XS50aW50ID0gMHhmZmQ5MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd25UaWxlcy5wdXNoKHt4OmNvb3Jkc0FycmF5W2ldLngseTpjb29yZHNBcnJheVtpXS55fSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGhpZGVUaWxlcyh0aWxlQXJyYXkpIHtcclxuICAgIGlmKCF0aWxlQXJyYXkpIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuc2hvd25UaWxlcykge1xyXG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt0aGlzLnNob3duVGlsZXNbaV0ueF1bdGhpcy5zaG93blRpbGVzW2ldLnldLmFscGhhID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93blRpbGVzID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkYW1hZ2VUaWxlKGRhdGEpIHtcclxuICBcclxuICAgIHZhciBjdXJyZW50VGlsZSA9IHRoaXMudGlsZUFycmF5W2RhdGEueF1bZGF0YS55XTtcclxuICAgIFxyXG4gICAgY3VycmVudFRpbGUudGludCA9IDBYMzMzMzMzO1xyXG4gICAgY3VycmVudFRpbGUuYWxwaGEgPSAwLjg7XHJcbiAgICBjdXJyZW50VGlsZS50aWxlRGFtYWdlZCA9IHRydWU7XHJcbiAgICBcclxuICAgIHZhciB0ZXN0ID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoY3VycmVudFRpbGUueCwgY3VycmVudFRpbGUueSArKGN1cnJlbnRUaWxlLmhlaWdodC8yKSwgJ2Jvb20nKTtcclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFkZCh0ZXN0KTtcclxuICAgIHRlc3QuYW5nbGUgPSAyNzA7XHJcbiAgICB0ZXN0LmFuY2hvci5zZXQoMC41LDAuNyk7XHJcbiAgICB0ZXN0LmFuaW1hdGlvbnMuYWRkKCdib29tJyk7XHJcbiAgICB0ZXN0LmFuaW1hdGlvbnMucGxheSgnYm9vbScsIDIwLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgc3RhcnRHYW1lKCkge1xyXG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XHJcbiAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcHRpa29uO1xyXG4iLCJpbXBvcnQgUmVzb3VyY2VzIGZyb20gJy4uL3ByZWZhYnMvcmVzb3VyY2VzJztcclxuaW1wb3J0IFBlcnNvbm5lbCBmcm9tICcuLi9wcmVmYWJzL3BlcnNvbm5lbCc7XHJcbmltcG9ydCBPcmRuYW5jZSBmcm9tICcuLi9wcmVmYWJzL29yZG5hbmNlJztcclxuaW1wb3J0IENsb25lIGZyb20gJy4uL3ByZWZhYnMvY2xvbmUnOyAvLyBUaGlzIHdpbGwgYmUgaW5jb3Jwb3JhdGVkIGluIHBlcnNvbm5lbFxyXG5cclxuY2xhc3MgVGVhbSB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7IFxyXG4gICAgdGhpcy5yZWMgPSBuZXcgUmVzb3VyY2VzKCk7XHJcbiAgICB0aGlzLnJlY0VudW0gPSB0aGlzLnJlYy5yZXNvdXJjZUVudW07XHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgXHJcbiAgICB0aGlzLnBlcnNvbm5lbCA9IFtdO1xyXG4gICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMgPSBbXTtcclxuICB9XHJcbiAgXHJcbiAgcmVmcmVzaCgpIHtcclxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcclxuICAgICAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvL1Jlc291cmNlIEludGVyZmFjZVxyXG4gIGdldFJlY0NvdW50KHR5cGUpIHtcclxuICAgIHJldHVybiB0aGlzLnJlYy5nZXRDb3VudCh0eXBlKTtcclxuICB9XHJcbiAgXHJcbiAgY2hlY2tSZWModHlwZSwgY291bnQpIHtcclxuICAgIGlmICh0aGlzLmdldFJlY0NvdW50KHR5cGUpID49IGNvdW50KSBcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgXHJcbiAgZXhjaGFuZ2VSZWMoY29zdFR5cGUsIGNvc3RDb3VudCwgeWllbGRUeXBlLCB5aWVsZENvdW50KSB7XHJcbiAgfVxyXG4gIFxyXG4gIGFkZFJlYyh0eXBlLCBjb3VudCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVjLmFkZCh0eXBlLCBjb3VudCk7XHJcbiAgfVxyXG4gIFxyXG4gIHJlbW92ZVJlYyh0eXBlLCBjb3VudCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVjLnJlbW92ZSh0eXBlLCBjb3VudCk7XHJcbiAgfVxyXG4gIFxyXG4gIGFkZENsb25lKHgsIHksIHByb3BzKSB7XHJcbiAgICB2YXIgcG9pbnQgPSB0aGlzLmdhbWUuc2VwdGlrb24udGlsZVRvUGl4ZWxzKHgseSk7XHJcbiAgICB2YXIgY2xvbmUgPSBuZXcgQ2xvbmUodGhpcy5nYW1lLHBvaW50LngscG9pbnQueSk7XHJcbiAgICBjbG9uZS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnggPSB4O1xyXG4gICAgY2xvbmUuY3VycmVudFRpbGVDb29yZGluYXRlcy55ID0geTtcclxuICAgIFxyXG4gICAgZm9yICh2YXIgaSBpbiBwcm9wcykge1xyXG4gICAgICAgIGNsb25lW2ldID0gcHJvcHNbaV07XHJcbiAgICB9XHJcbiAgICB0aGlzLnBlcnNvbm5lbC5wdXNoKGNsb25lKTtcclxuICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZChjbG9uZSk7XHJcbiAgfVxyXG4gIFxyXG4gIGdldENsb25lKGNvb3JkKSB7XHJcbiAgICBmb3IgKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XHJcbiAgICAgICAgaWYodGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy54ID09IGNvb3JkLnggJiYgdGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy55ID09IGNvb3JkLnkpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wZXJzb25uZWxbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBraWxsQ2xvbmUoY29vcmQpIHtcclxuICAgIHZhciBjbG9uZSA9IHRoaXMuZ2V0Q2xvbmUoY29vcmQpO1xyXG4gICAgdGhpcy5nYW1lLnN0YWdlLnJlbW92ZUNoaWxkKGNsb25lKTtcclxuICAgIFxyXG4gICAgdmFyIGluZGV4ID0gdGhpcy5wZXJzb25uZWwuaW5kZXhPZihjbG9uZSk7XHJcbiAgICB0aGlzLnBlcnNvbm5lbC5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICBcclxuICAgIGNsb25lLnJlbW92ZSgpO1xyXG4gIH1cclxuICAgIFxyXG4gIG9mZmVyTGVnYWxDbG9uZXMoKSB7XHJcbiAgICAvLyBPZmZlciBjbG9uZXMgdGhhdCBoYXZlIGxlZ2FsIG1vdmVzXHJcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcclxuICAgICAgICB2YXIgbW92ZXMgPSB0aGlzLnBlcnNvbm5lbFtpXS5nZXRMZWdhbE1vdmVzKCk7XHJcblxyXG4gICAgICAgIGlmKG1vdmVzICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBlcnNvbm5lbFtpXS5oaWdobGlnaHRPbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgb2ZmZXJHdW5uZXJzKCkge1xyXG4gICAgLy8gT2ZmZXIgZ3VubmVyIFxyXG4gICAgdmFyIGd1bm5lckZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcclxuICAgICAgICBpZih0aGlzLnBlcnNvbm5lbFtpXS5pc0d1bm5lcikge1xyXG4gICAgICAgICAgICBndW5uZXJGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vdGhpcy5wZXJzb25uZWxbaV0uaGlnaGxpZ2h0T24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ3VubmVyRm91bmQ7XHJcbiAgfVxyXG4gIFxyXG4gIHNlbGVjdEd1bm5lcihjb29yZHMpIHtcclxuICAgIHZhciBjbG9uZSA9IHRoaXMuZ2V0Q2xvbmUoY29vcmRzKTtcclxuICAgIGlmKCFjbG9uZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBpZighY2xvbmUuaXNHdW5uZXIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgdmFyIGV4aXN0aW5nR3VubmVyID0gdGhpcy5zZWxlY3RlZEd1bm5lcnMuaW5kZXhPZihjbG9uZSk7XHJcbiAgICBpZihleGlzdGluZ0d1bm5lciA+PSAwKXtcclxuICAgICAgICBjbG9uZS5oaWdobGlnaHRPZmYoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycy5zcGxpY2UoZXhpc3RpbmdHdW5uZXIsIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjbG9uZS5oaWdobGlnaHRPbigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzLnB1c2goY2xvbmUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBjbGVhckd1bm5lcnMoKSB7XHJcbiAgICBmb3IgKHZhciBpIGluIHRoaXMuc2VsZWN0ZWRHdW5uZXJzKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnNbaV0uaGlnaGxpZ2h0T2ZmKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGVjdGVkR3VubmVycyA9IFtdO1xyXG4gIH1cclxuICBcclxuICBzZWxlY3RDbG9uZUZvck1vdmUoY29vcmRzKSB7ICAgIFxyXG4gIFxyXG4gICAgdmFyIGNsb25lID0gdGhpcy5nZXRDbG9uZShjb29yZHMpO1xyXG4gICAgaWYoIWNsb25lKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcclxuICAgICAgICB0aGlzLnBlcnNvbm5lbFtpXS5oaWdobGlnaHRPZmYoKTtcclxuICAgIH1cclxuICAgIHRoaXMubGVnYWxUaWxlcyA9IGNsb25lLmdldExlZ2FsTW92ZXMoKTtcclxuICAgIHRoaXMuc2VsZWN0ZWRDbG9uZSA9IGNsb25lO1xyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnNob3dUaWxlcyh0aGlzLmxlZ2FsVGlsZXMpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIG1vdmVTZWxlY3RlZENsb25lKGNvb3Jkcykge1xyXG4gICAgZm9yKHZhciBpIGluIHRoaXMubGVnYWxUaWxlcykge1xyXG4gICAgICAgIGlmKHRoaXMubGVnYWxUaWxlc1tpXS50aWxlWCA9PSBjb29yZHMueCAmJiB0aGlzLmxlZ2FsVGlsZXNbaV0udGlsZVkgPT0gY29vcmRzLnkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENsb25lLm1vdmUoY29vcmRzKTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRDbG9uZTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlcztcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbTsiLCJjbGFzcyBPcmRuYW5jZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodHlwZSwgeCwgeSwgdXVpZCkge1xyXG4gICAgICAgIHRoaXMudHlwZUVudW0gPSBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICAgICAgU0hJRUxEOiAwLFxyXG4gICAgICAgICAgICBCSU9EUk9ORTogMSxcclxuICAgICAgICAgICAgU0FURUxMSVRFOiAyLFxyXG4gICAgICAgICAgICBST0NLRVQ6IDNcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZDtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVFbnVtW3R5cGUudG9VcHBlckNhc2UoKV07XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cy5PcmRuYW5jZSA9IE9yZG5hbmNlO1xyXG4iLCJjbGFzcyBQZXJzb25uZWwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIHgsIHksIHV1aWQpIHtcclxuICAgICAgICB0aGlzLnR5cGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgICAgIENMT05FOiAwLFxyXG4gICAgICAgICAgICBCSU9EUk9ORTogMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xyXG4gICAgICAgIHRoaXMudW5kZXJFc3Bpb25hZ2UgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzR3VubmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlRW51bVt0eXBlLnRvVXBwZXJDYXNlKCldO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdiaW9kcm9uZSc6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnY2xvbmUnOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVFbnVtW3R5cGVdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBtb3ZlKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLlBlcnNvbm5lbCA9IFBlcnNvbm5lbDtcclxuIiwidmFyIFBlcnNvbm5lbCA9IHJlcXVpcmUoJy4vcGVyc29ubmVsJykuUGVyc29ubmVsO1xyXG52YXIgUmVzb3VyY2UgPSByZXF1aXJlKCcuL3Jlc291cmNlJykuUmVzb3VyY2U7XHJcbnZhciBPcmRuYW5jZSA9IHJlcXVpcmUoJy4vb3JkbmFuY2UnKS5PcmRuYW5jZTtcclxuXHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNvY2tldElELCBpZCwgdXVpZCkgeyBcclxuICAgICAgICB0aGlzLnNvY2tldElEID0gc29ja2V0SUQ7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkOyAvL3BsYXllciAxIG9yIHBsYXllciAyOyB0aGlzIHdpbGwgZGV0ZXJtaW5lIHRoZSBzaWRlIG9mIHRoZSBib2FyZCBhdCBjbGllbnQgc3RhcnQuXHJcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZDtcclxuICAgICAgICB0aGlzLnBlcnNvbm5lbEFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5vcmRuYW5jZUFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5yZWFkeVRvU3RhcnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXJ0aW5nQ2xvbmVDb3VudCA9IDU7XHJcbiAgICAgICAgdGhpcy5hcm1zQXJyYXkgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlcyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRSZXNvdXJjZXMoKTtcclxuICAgIH1cclxuICAgICAgICBcclxuICAgIGFkZFBlcnNvbm5lbCh0eXBlLCB4LCB5LCB1dWlkKSB7XHJcbiAgICAgICAgaWYodHlwZSA9PSBcImNsb25lXCIgJiYgdGhpcy5nZXRQZXJzb25uZWwodHlwZSkubGVuZ3RoIDwgdGhpcy5zdGFydGluZ0Nsb25lQ291bnQpIHtcclxuICAgICAgICAgICAgdmFyIHBlcnNvbm5lbCA9IG5ldyBQZXJzb25uZWwoJ2Nsb25lJywgeCwgeSwgdXVpZCk7XHJcbiAgICAgICAgICAgIHRoaXMucGVyc29ubmVsQXJyYXkucHVzaChwZXJzb25uZWwpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGVyc29ubmVsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlUGVyc29ubmVsKHBlcnNvbm5lbCwgcHVyZ2VBbGwpIHtcclxuICAgICAgICBpZiAocHVyZ2VBbGwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5wZXJzb25uZWxBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFBlcnNvbm5lbCh0eXBlKSB7XHJcbiAgICAgICAgdmFyIHJldHVybkFycmF5ID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpIGluIHRoaXMucGVyc29ubmVsQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYodHlwZSA9PT0gbnVsbCB8fCB0aGlzLnBlcnNvbm5lbEFycmF5W2ldLnR5cGUgPT09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMucGVyc29ubmVsQXJyYXlbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGVyc29ubmVsQnlVVUlEKHV1aWQpIHtcclxuICAgICAgICB2YXIgcGVyc29ubmVsID0gdGhpcy5nZXRQZXJzb25uZWwoKTtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHBlcnNvbm5lbCkge1xyXG4gICAgICAgICAgICBpZiAocGVyc29ubmVsW2ldLnV1aWQgPT0gdXVpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlcnNvbm5lbFtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGVyc29ubmVsQnlQb2ludChwb2ludCkge1xyXG4gICAgICAgIHZhciBwZXJzb25uZWxzID0gdGhpcy5nZXRQZXJzb25uZWwoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBlcnNvbm5lbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHBlcnNvbm5lbHNbaV0ueCA9PSBwb2ludC54ICYmIHBlcnNvbm5lbHNbaV0ueSA9PSBwb2ludC55KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGVyc29ubmVsc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tQZXJzb25uZWxNb3ZlKHBlcnNvbm5lbCwgcG9pbnQpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY3VycmVudExlZ2FsUGllY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChwZXJzb25uZWwueCA9PSB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlc1tpXS5vcmlnaW4ueCAmJiBwZXJzb25uZWwueSA9PSB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlc1tpXS5vcmlnaW4ueSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwb2ludCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY3VycmVudExlZ2FsUGllY2VzW2ldLm1vdmVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZWdhbFBpZWNlc1tpXS5tb3Zlc1tqXS54ID09IHBvaW50LnggJiYgdGhpcy5jdXJyZW50TGVnYWxQaWVjZXNbaV0ubW92ZXNbal0ueSA9PSBwb2ludC55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRPcmRuYW5jZSh0eXBlLCBwb2ludCwgdXVpZCkge1xyXG4gICAgICAgIHZhciBvcmQgPSBuZXcgT3JkbmFuY2UodHlwZSwgcG9pbnQueCwgcG9pbnQueSwgdXVpZCk7XHJcbiAgICAgICAgdGhpcy5vcmRuYW5jZUFycmF5LnB1c2gob3JkKTtcclxuICAgICAgICByZXR1cm4gb3JkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1cmdlTGVnYWxQaWVjZXMocGVyc29ubmVsLCBwdXJnZUFsbE1hdGNoaW5nVHlwZXMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHBlcnNvbm5lbCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGVnYWxQaWVjZXMgPSBbXTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaSA9IHRoaXMuY3VycmVudExlZ2FsUGllY2VzLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAoXHJcbiAgICAgICAgICAgIGktLSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TGVnYWxQaWVjZXNbaV0udHlwZSA9PT0gcGVyc29ubmVsLnR5cGUgJiYgcHVyZ2VBbGxNYXRjaGluZ1R5cGVzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlcy5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRHdW5uZXJzKCkge1xyXG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xyXG4gICAgICAgIHZhciBjbG9uZXMgPSB0aGlzLmdldFBlcnNvbm5lbCgnY2xvbmUnKTtcclxuICAgICAgICBmb3IgKHZhciBpIGluIGNsb25lcykge1xyXG4gICAgICAgICAgICBpZiAoY2xvbmVzW2ldLmlzR3VubmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKGNsb25lc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVybkFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlbGVjdGVkR3VubmVycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEd1bm5lcnM7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlR3VubmVyU2VsZWN0aW9uKGd1bm5lcikge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkR3VubmVycy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycy5wdXNoKGd1bm5lcik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkR3VubmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoZ3VubmVyKSA9PT0gSlNPTi5zdHJpbmdpZnkodGhpcy5zZWxlY3RlZEd1bm5lcnNbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycy5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycy5wdXNoKGd1bm5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3JkbmFuY2UodHlwZSkge1xyXG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLm9yZG5hbmNlQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYodHlwZSA9PT0gbnVsbCB8fCB0aGlzLm9yZG5hbmNlQXJyYXlbaV0udHlwZSA9PT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy5vcmRuYW5jZUFycmF5W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVybkFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRSZXNvdXJjZXMoKSB7XHJcbiAgICAgICAgdmFyIHJlY0FycmF5ID0gW1xyXG4gICAgICAgICAgICAnZW5lcmd5MScsIFxyXG4gICAgICAgICAgICAnZW5lcmd5MicsXHJcbiAgICAgICAgICAgICdveHlnZW4nLFxyXG4gICAgICAgICAgICAnbWV0YWwnLFxyXG4gICAgICAgICAgICAnYmlvZHJvbmUnLFxyXG4gICAgICAgICAgICAncm9ja2V0JyxcclxuICAgICAgICAgICAgJ3VyYW5pdW0nLFxyXG4gICAgICAgICAgICAnYmlvbWFzcydcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB2YXIgcmVjID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHJlY0FycmF5KSB7XHJcbiAgICAgICAgICAgIHJlYyA9IG5ldyBSZXNvdXJjZShyZWNBcnJheVtpXSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VBcnJheVtyZWNBcnJheVtpXV0gPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgY291bnQgPSAwOyBjb3VudCA8IDEwOyBjb3VudCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPCA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5W3JlY0FycmF5W2ldXS5wdXNoKHJlYyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2VBcnJheVtyZWNBcnJheVtpXV0ucHVzaChudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRSZXNvdXJjZUNvdW50KHR5cGUpIHtcclxuICAgICAgICB2YXIgZm91bmRSZXNvdXJjZXMgPSAwO1xyXG4gICAgICAgIHZhciBjdXJyZW50UmVzb3VyY2VTbG90ID0gOTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJlbmVyZ3lcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSZXNvdXJjZUNvdW50KCdlbmVyZ3kxJykgKyB0aGlzLmdldFJlc291cmNlQ291bnQoJ2VuZXJneTInKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlIChjdXJyZW50UmVzb3VyY2VTbG90ID49IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXVtjdXJyZW50UmVzb3VyY2VTbG90XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdLmRhbWFnZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZFJlc291cmNlcztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvdW5kUmVzb3VyY2VzKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm91bmRSZXNvdXJjZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2tSZXNvdXJjZSBkZWZhdWx0cyB0byBhc3N1bWUgeW91IGFyZSBjaGVja2luZyB0byBzcGVuZCBhIHJlc291cmNlLiBTZXQgXCJhY2NlcHRcIiB0byB0cnVlIGlmIHlvdSBhcmUgY2hlY2tpbmcgdG8gcmVjZWl2ZSBhIHJlc291cmNlXHJcbiAgICBjaGVja1Jlc291cmNlKHR5cGUsIGNvdW50LCBhY2NlcHQpIHtcclxuICAgICAgICB2YXIgY3VycmVudFJlc291cmNlU2xvdCA9IDk7XHJcbiAgICAgICAgdmFyIGZvdW5kUmVzb3VyY2VzID0gMDtcclxuICAgICAgICB2YXIgcmVzb3VyY2VTbG90cyA9IDA7XHJcblxyXG4gICAgICAgIGlmKHR5cGUgPT0gXCJudWtlXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzcGVjaWFsIGNhc2U6IHRoaXMgcHJvZHVjZXMgb3JkbmFuY2UuIENoZWNrIGJhY2sgbGF0ZXIuLi5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHR5cGUgPT0gXCJlbmVyZ3lcIikge1xyXG4gICAgICAgICAgICB2YXIgZTEgPSB0aGlzLmNoZWNrUmVzb3VyY2UoXCJlbmVyZ3kxXCIsIGNvdW50LCBhY2NlcHQpO1xyXG4gICAgICAgICAgICB2YXIgZTIgPSB0aGlzLmNoZWNrUmVzb3VyY2UoXCJlbmVyZ3kyXCIsIGNvdW50LCBhY2NlcHQpO1xyXG5cclxuICAgICAgICAgICAgaWYoZTEgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlMTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlMiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGUyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aGlsZSAoY3VycmVudFJlc291cmNlU2xvdCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY2NlcHQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZVNsb3RzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc291cmNlU2xvdHMgPT0gY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdLmRhbWFnZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmKGFjY2VwdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm91bmRSZXNvdXJjZXMrKztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoYWNjZXB0ICE9PSBmYWxzZSAmJiBmb3VuZFJlc291cmNlcyA9PT0gY291bnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1cnJlbnRSZXNvdXJjZVNsb3QtLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNwZW5kUmVzb3VyY2UodHlwZSwgY291bnQpIHtcclxuICAgICAgICB2YXIgY3VycmVudFJlc291cmNlU2xvdCA9IDk7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsQ291bnQgPSBjb3VudDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJlbmVyZ3lcIikge1xyXG4gICAgICAgICAgICB2YXIgc3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB3aGlsZSAoY291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5zcGVuZFJlc291cmNlKFwiZW5lcmd5MVwiLCAxKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLnNwZW5kUmVzb3VyY2UoXCJlbmVyZ3kyXCIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxDb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlIChjdXJyZW50UmVzb3VyY2VTbG90ID49IDAgJiYgY291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRSZXNvdXJjZVNsb3QtLTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXVtjdXJyZW50UmVzb3VyY2VTbG90XS5kYW1hZ2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUuZXJyb3IoXCJUcmllZCB0byBzcGVuZCByZXNvdXJjZXMgeW91IGRvbid0IGhhdmUhXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvcmlnaW5hbENvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIGFjY2VwdFJlc291cmNlKHR5cGUsIGNvdW50KSB7XHJcbiAgICAgICAgdmFyIHJlc291cmNlID0gbnVsbDtcclxuICAgICAgICB2YXIgY3VycmVudFJlc291cmNlU2xvdCA9IDk7XHJcbiAgICAgICAgdmFyIHNlYXJjaGluZyA9IHRydWU7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsQ291bnQgPSBjb3VudDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJlbmVyZ3lcIikge1xyXG4gICAgICAgICAgICB2YXIgc3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB3aGlsZSAoY291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5hY2NlcHRSZXNvdXJjZShcImVuZXJneTFcIiwgMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3VjY2VzcyAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5hY2NlcHRSZXNvdXJjZShcImVuZXJneTJcIiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbENvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoMSkge1xyXG4gICAgICAgICAgICBpZiAoc2VhcmNoaW5nID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBwZWVrIGF0IG5leHQgcmVzb3VyY2VcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwibm8gcm9vbSBmb3IgdGhpcyByZXNvdXJjZSFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZXNvdXJjZVNsb3QgPT09IDAgfHwgdGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3QgLSAxXSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFJlc291cmNlU2xvdCArIDEgPiB0aGlzLnJlc291cmNlQXJyYXlbdHlwZV0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsQ291bnQgLSBjb3VudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc291cmNlID0gbmV3IFJlc291cmNlKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdID0gcmVzb3VyY2U7XHJcbiAgICAgICAgICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgaWYoY291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxDb3VudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRSZXNvdXJjZVNsb3QrKztcclxuICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjdXJyZW50UmVzb3VyY2VTbG90IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk91dCBvZiBib3VuZHMuIE5vIGVtcHR5IHJlc291cnVjZSBzbG90cyBmb3VuZC5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLlBsYXllciA9IFBsYXllcjtcclxuIiwiY2xhc3MgUmVzb3VyY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5SZXNvdXJjZSA9IFJlc291cmNlO1xyXG4iLCJ2YXIgUGxheWVyID0gcmVxdWlyZSgnLi9wbGF5ZXInKS5QbGF5ZXI7XHJcbnZhciB1dWlkID0gcmVxdWlyZSgndXVpZC92NCcpO1xyXG5cclxuY2xhc3MgU2VwdGlrb24ge1xyXG4gICAgXHJcblx0Y29uc3RydWN0b3IoaW8pIHtcclxuICAgICAgICB0aGlzLmlvID0gaW87XHJcbiAgICAgICAgdGhpcy5sYXN0UGxheWVySUQgPSAwO1xyXG4gICAgICAgIHRoaXMucGxheWVyc0FycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAwO1xyXG4gICAgICAgIHRoaXMudHVyblN0YXRlID0gMDtcclxuICAgICAgICB0aGlzLnV1aWQgPSByZXF1aXJlKCd1dWlkL3Y0JykoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERpY2VWYWx1ZSA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgICAgIFNFVFVQOiAwLFxyXG4gICAgICAgICAgICBHQU1FOiAxLCBcclxuICAgICAgICAgICAgUEFVU0U6IDIsXHJcbiAgICAgICAgICAgIEdBTUVPVkVSOiAzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50dXJuU3RhdGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgICAgIFJPTEw6IDAsICAgIC8vIExpdGVyYWxseSB0aGUgYWN0IG9mIHJvbGxpbmcgdGhlIGRpZVxyXG4gICAgICAgICAgICBNT1ZFOiAxLCAgICAvLyBTZWxlY3RpbmcgdGhlIGNsb25lIGFuZCB0aGVpciB0YXJnZXQgc3BhY2VcclxuICAgICAgICAgICAgQUNUSU9OOiAyLCAgLy8gVHJpZ2dlciB0aWxlICBcclxuICAgICAgICAgICAgVEFSR0VUUzogMywgLy8gQXNzaWduIHRhcmdldChzKSAoaWUuIC0gZ3VubmVyLCB0aWxlLCBlc3Bpb25hZ2VkIGNsb25lKSBcclxuICAgICAgICAgICAgQklPRFJPTkU6IDQsLy8gTW92ZSBiaW9kcm9uZShzKVxyXG4gICAgICAgICAgICBFTkQ6IDUgICAgICAvLyBhc3Nlc3MgdmljdG9yeSBjb25kaXRpb25zXHJcbiAgICAgICAgfSk7ICBcclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25FbnVtID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgICAgIE5PUlRIOjEsXHJcbiAgICAgICAgICAgIEVBU1Q6MixcclxuICAgICAgICAgICAgU09VVEg6NCxcclxuICAgICAgICAgICAgV0VTVDo4XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZUNvbHVtbnMgPSAzMTtcclxuICAgICAgICB0aGlzLnRpbGVSb3dzID0gMjE7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZUFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5jcmVhdGVUaWxlQXJyYXkoKTsgXHJcblxyXG4gICAgICAgIHRoaXMucXVldWVkQmF0dGxlVGlsZVR5cGUgPSBudWxsOyAgICAgXHJcblx0fVxyXG5cclxuICAgIGNsaWNrZWQoZGF0YSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFByb2Nlc3MgdGhlIGNsaWNrIGZyb20gdGhlIGNsaWVudC4gXHJcbiAgICAgICAgLy8gQmFzaWNhbGx5LCBjaGVjayBnYW1lIGFuZCB0dXJuIHN0YXRlLlxyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5nYW1lU3RhdGUpIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSB0aGlzLmdhbWVTdGF0ZUVudW0uU0VUVVA6XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUGxheWVyIGlzIHBsYWNpbmcgbmV3IGNsb25lcyBpbiB0aGUgZmllbGQuXHJcbiAgICAgICAgICAgICAgICB2YXIgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXJCeVNvY2tldElEKGRhdGEuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3MgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihwbGF5ZXIuZ2V0UGVyc29ubmVsKCdjbG9uZScpLmxlbmd0aCA8IHBsYXllci5zdGFydGluZ0Nsb25lQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5wbGFjZUNsb25lKHBsYXllciwgZGF0YS54LCBkYXRhLnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgb24gcGVyc29ubmVsIGNvdW50LiBJZiBwZXJzb25uZWwgaXMgYXQgdGhlIHN0YXJ0IGNvdW50LCBzZW5kIG1vZGFsIHRvIHN0YXJ0IGdhbWUuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocGxheWVyLmdldFBlcnNvbm5lbCgnY2xvbmUnKS5sZW5ndGggPT0gcGxheWVyLnN0YXJ0aW5nQ2xvbmVDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3JlcXVlc3QnLCB7Y2FsbGJhY2s6XCJtb2RhbFwiLCBkZXRhaWxzOiB7dHlwZTpcImFza1N0YXJ0XCJ9fSwgcGxheWVyLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIHRoaXMuZ2FtZVN0YXRlRW51bS5HQU1FOlxyXG5cclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkUGVyc29ubmVsID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnR1cm5TdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLk1PVkU6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgY2FuIG1vdmUgb25lIGNsb25lIHBlciB0dXJuLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RlOiBUaGUgYXJyYXkgb2YgbGVnYWwgcGVyc29ubmVsIChpbiB0aGlzLmFjdGl2ZVBsYXllcikgd2FzIHNlbnQgYnkgcm9sbERpY2UoKS5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAnaGlkZVRpbGVzJywgZGV0YWlsczogbnVsbH0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGVyc29ubmVsID0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UGVyc29ubmVsQnlQb2ludCh7eDpkYXRhLngsIHk6ZGF0YS55fSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRQZXJzb25uZWwgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbG9uZSB3YXMgY2xpY2tlZCwgc286XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNMZWdhbFBlcnNvbm5lbCA9IHRoaXMuYWN0aXZlUGxheWVyLmNoZWNrUGVyc29ubmVsTW92ZShzZWxlY3RlZFBlcnNvbm5lbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBwZXJzb25uZWwgaXMgYSBcImJpb2Ryb25lXCIgdHlwZSBBTkQgY2xvbmVzIHJlbWFpbiBpbiB0aGUgUGxheWVyLmN1cnJlbnRsZWdhbHBpZWNlcyBhcnJheSwgZW1pdCBtb2RhbCB3YXJuaW5nIHRvIHBsYXllci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsb25lIG11c3QgbW92ZSBhbmQgdGlsZSBtdXN0IGJlIHRyaWdnZXJlZCBwcmlvciB0byBiaW9kcm9uZSBtb3ZlbWVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0xlZ2FsUGVyc29ubmVsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUgPSBzZWxlY3RlZFBlcnNvbm5lbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgLSBTaG93IENsb25lcyBpbiBjbGllbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgVE9ETzogZW1pdCBzb21ldGhpbmcgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAnc2hvd1RpbGVzJywgZGV0YWlsczoge319LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIC0gU2hvdyB0aGlzIGNsb25lJ3MgbW92ZXMgaW4gY2xpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFRPRE86IGVtaXQgc29tZXRoaW5nIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3Nob3dUaWxlcycsIGRldGFpbHM6IHt9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAtIHNob3cgdGhpcyBjbG9uZSBpbiBkaWZmZXJlbnQgY29sb3IgaW4gY2xpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFRPRE86IGVtaXQgc29tZXRoaW5nIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3Nob3dUaWxlcycsIGRldGFpbHM6IHt9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0xlZ2FsTW92ZSA9IHRoaXMuYWN0aXZlUGxheWVyLmNoZWNrUGVyc29ubmVsTW92ZSh0aGlzLmFjdGl2ZVBsYXllci5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZSx7eDpkYXRhLngsIHk6ZGF0YS55fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNMZWdhbE1vdmUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogZW1pdCBzb21ldGhpbmcgdG8gc2hvdyBjbG9uZXMgdG8gY2xpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdzaG93VGlsZXMnLCBkZXRhaWxzOiB7fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUubW92ZShkYXRhLngsIGRhdGEueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdtb3ZlUGVyc29ubmVsJywgZGV0YWlsczoge3V1aWQ6dGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUudXVpZCwgeDpkYXRhLngsIHk6ZGF0YS55fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHt0eXBlOlwicGVyc29ubmVsXCIsIGRldGFpbHM6IHt1dWlkOnRoaXMuYWN0aXZlUGxheWVyLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlLnV1aWQsIHg6ZGF0YS54LCB5OmRhdGEueX19LCB0aGlzLmdldFBsYXllck9wcG9uZW50KHRoaXMuYWN0aXZlUGxheWVyKS5zb2NrZXRJRCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsZWFyIG1vdmVkIHBlcnNvbm5lbCBmcm9tIHRoZSBwbGF5ZXIgYXJyYXkuIElmIG1vdmVkIHBlcnNvbm5lbCB3YXMgYSBjbG9uZSwgcmVtb3ZlIEFMTCBjbG9uZXMgZnJvbSBhcnJheS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllci5wdXJnZUxlZ2FsUGllY2VzKHRoaXMuYWN0aXZlUGxheWVyLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlLCB0cnVlKTsgLy8gMm5kIGFyZzogdHJ1ZSBpcyBwYXNzZWQgZm9yIGNsb25lczsgbnVsbCBmb3IgYmlvZHJvbmVzLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBUaGlzIGlzIGRpcnR5IGNvZGUgdG8gdGVzdCBndW5uZXIgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0VGlsZShkYXRhLngsIGRhdGEueSkubmFtZSA9PSBcInN1cmZhY2VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR1cm5TdGF0ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVUaWxlKHt4OmRhdGEueCwgeTpkYXRhLnl9KTsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3RpdmVQbGF5ZXIoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IEVORCBkaXJ0eSBjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50dXJuU3RhdGUrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB0cmlnZ2VyIHRpbGUgYW5kIGVtaXQgYmF0dGxlIHRhcmdldHMgKGd1bm5lcnMsIGV0YykgdG8gUGxheWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVRpbGUoe3g6ZGF0YS54LCB5OmRhdGEueX0pOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllci5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMudHVyblN0YXRlRW51bS5BQ1RJT046XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgd2lsbCBkZXNpZ25hdGUgZ3VubmVyKHMpIGZvciBmaXJpbmcgYW5kL29yIGFkZGl0aW9uYWwgdGFyZ2V0cywgZGVwZW5kaW5nIG9uIHRoZSBiYXR0bGUgdGlsZSB0eXBlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgd2lsbCBjb25maXJtIG1vdmVtZW50IHNlbGVjdGlvbnMgd2l0aCBHTyFcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXJyYXkgb2YgZWxpZ2libGUgZ3VubmVycyBzZW50IHZpYSBhY3RpdmF0ZVRpbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW1pdCBhcnJheSBvZiBlbGlnaWJsZSBndW5uZXJzIGFuZCBudW1iZXIgb2Ygc2VsZWN0YWJsZSBndW5uZXJzIHRvIFBsYXllci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucXVldWVkQmF0dGxlVGlsZVR5cGUgPT0gXCJjb3VudGVyRXNwaW9uYWdlXCIgfHwgdGhpcy5xdWV1ZWRCYXR0bGVUaWxlVHlwZSA9PSBcInJlcGFpclwiIHx8IHRoaXMucXVldWVkQmF0dGxlVGlsZVR5cGUgPT0gXCJyZXBhaXJUd29cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogU3BlY2lhbCBjYXNlcy4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBlcnNvbm5lbCA9IHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbEJ5UG9pbnQoe3g6ZGF0YS54LCB5OmRhdGEueX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkUGVyc29ubmVsICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci50b2dnbGVHdW5uZXJTZWxlY3Rpb24oc2VsZWN0ZWRQZXJzb25uZWwpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAnc2hvd1RpbGVzJywgZGV0YWlsczoge3g6ZGF0YS54LCB5OmRhdGEueX19LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdoaWRlVGlsZXMnLCBkZXRhaWxzOiB7eDpkYXRhLngsIHk6ZGF0YS55fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRHdW5uZXJzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMudHVyblN0YXRlRW51bS5UQVJHRVRTOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGxheWVyIHdpbGwgY2hvb3NlIGFkZGl0aW9uYWwgdGFyZ2V0cyBpZiByZXF1aXJlZCBieSB0aGUgdGlsZS4gRXNwb2luYWdlLCBmb3IgaW5zdGFuY2UsIHJlcXVpcmVzIGEgZ3VubmVyIGFuZCBhbiBlbmVteSBjbG9uZSBpbiB0aGUgc2VsZWN0ZWQgZ3VubmVyJ3MgbGluZSBvZiBmaXJlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgd2lsbCBjb25maXJtIHRhcmdldHMgd2l0aCBHTyFcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGFyZ2V0IHF1ZXVlZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQWN0aXZlUGxheWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMudHVyblN0YXRlRW51bS5FTkQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbnkgcG9zdC10dXJuIHByb2Nlc3NpbmcgY2FuIGhhcHBlbiBoZXJlLiBPdGhlcndpc2UsIHRoZSB0dXJuIG1heSBhbHJlYWR5IGJlIG92ZXIuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50dXJuU3RhdGUgPSB0aGlzLnR1cm5TdGF0ZUVudW0uUk9MTDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdvKGRhdGEpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMudHVyblN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLk1PVkU6XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGNhc2UgbWF5IG5vdCBiZSBuZWVkZWQuXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIHRoaXMudHVyblN0YXRlRW51bS5BQ1RJT046XHJcbiAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgaGFzIGNvbmZpcm1lZCBndW5uZXIgc2VsZWN0aW9uLlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogRmlyZSB3ZWFwb24gLyB0cmlnZ2VyIHRpbGUuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmVXZWFwb24odGhpcy5xdWV1ZWRCYXR0bGVUaWxlVHlwZSwgdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0U2VsZWN0ZWRHdW5uZXJzKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGNvbnN1bWUgcmVzb3VyY2VzLlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogRW1pdCB0byBjbGllbnRzXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBJZiB0YXJnZXRzIGFyZSByZXF1aXJlZCAoaWUgZXNwaW9uYWdlKSBzZW5kIHRoYXQgYXJyYXkgbm93LlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogQWR2YW5jZSB0dXJuc3RhdGUgKGNhbGN1bGF0ZSBpZiBmdXJ0aGVyIHR1cm5zdGF0ZSBhcmUgbmVlZGVkLiBUaGlzIGNvdWxkIGJlIGVuZCBvZiB0dXJuLilcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBURVNUIENPREVcclxuICAgICAgICAgICAgICAgIHRoaXMudHVyblN0YXRlID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQWN0aXZlUGxheWVyKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBFTkQgVEVTVCBDT0RFXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHRoaXMudHVyblN0YXRlRW51bS5UQVJHRVRTOlxyXG4gICAgICAgICAgICAgICAgLy8gUGxheWVyIGhhcyBjb25maXJtZWQgYWxsIHRhcmdldHMgKHRoaXMgd2lsbCBhcHBseSB0byBsaW1pdGVkIGJhdHRsZSB0aWxlcyBsaWtlIGVzcGlvbmFnZSlcclxuICAgICAgICAgICAgICAgIC8vIEkgbWF5IGNvbWUgYmFjayB0byB0aGlzIGEgYml0IGxhdGVyLlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVXBkYXRlIGNsaWVudCB3aXRoIHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLkJJT0RST05FOlxyXG4gICAgICAgICAgICAgICAgLy8gUGxheWVyIGhhcyBjb25maXJtZWQgdGhhdCBiaW9kcm9uZSBzZWxlY3Rpb24gKGlmIGFueSkgaXMgZmluYWwuIFxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogTW92ZSBiaW9kcm9uZShzKSBhbmQgd3JlYWsgaGF2b2suIFxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogYWR2YW5jZSB0dXJuc3RhdGVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHRoaXMudHVyblN0YXRlRW51bS5FTkQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9XHJcblxyXG5cdGFkZE5ld1BsYXllcihzb2NrZXRJRCwgdXVpZCkge1xyXG4gICAgICAgIHRoaXMubGFzdFBsYXllcklEKys7XHJcbiAgICAgICAgdmFyIHBsYXllciA9IG5ldyBQbGF5ZXIoc29ja2V0SUQsIHRoaXMubGFzdFBsYXllcklELCB1dWlkKTtcclxuICAgICAgICB0aGlzLnBsYXllcnNBcnJheS5wdXNoKHBsYXllcik7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICd1cGRhdGVQbGF5ZXInLCBkZXRhaWxzOiB7aWQ6IHRoaXMubGFzdFBsYXllcklEfX0sIHNvY2tldElEKTtcclxuICAgICAgICByZXR1cm4gcGxheWVyO1xyXG5cdH1cclxuXHJcbiAgICBhZGRQbGF5ZXIocGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzQXJyYXkucHVzaChwbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAndXBkYXRlUGxheWVyJywgZGV0YWlsczoge2lkOiBwbGF5ZXIuaWR9fSwgcGxheWVyLnNvY2tldElEKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQbGF5ZXJTdGF0ZShzdGF0ZSkge1xyXG4gICAgICAgIHZhciBwbGF5ZXIgPSBudWxsO1xyXG4gICAgICAgIHN3aXRjaCAoc3RhdGUudmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAncmVzZXQnOiBcclxuICAgICAgICAgICAgICAgIHBsYXllciA9IHRoaXMuZ2V0UGxheWVyQnlTb2NrZXRJRChzdGF0ZS5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIucmVtb3ZlUGVyc29ubmVsKG51bGwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJyZW1vdmVBbGxQZXJzb25uZWxcIiwgZGV0YWlsczoge319LCBwbGF5ZXIuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzogXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIgPSB0aGlzLmdldFBsYXllckJ5U29ja2V0SUQoc3RhdGUuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnJlYWR5VG9TdGFydCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3Bwb25lbnQgPSB0aGlzLmdldFBsYXllck9wcG9uZW50KHBsYXllcik7XHJcbiAgICAgICAgICAgICAgICBpZighb3Bwb25lbnQgfHwgIW9wcG9uZW50LnJlYWR5VG9TdGFydCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wcENsb25lcyA9IG9wcG9uZW50LmdldFBlcnNvbm5lbCgnY2xvbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFBsYXllckNsb25lcyA9IHBsYXllci5nZXRQZXJzb25uZWwoJ2Nsb25lJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGlmeSBjdXJyZW50IHBsYXllciBvZiBvcHBvbmVudCBwb3NpdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGxheWVyUGF5bG9hZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gb3BwQ2xvbmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllclBheWxvYWQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Om9wcENsb25lc1tpXS54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTpvcHBDbG9uZXNbaV0ueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV1aWQ6b3BwQ2xvbmVzW2ldLnV1aWQsICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB7dHlwZTpcInBlcnNvbm5lbFwiLCBkZXRhaWxzOnBsYXllclBheWxvYWR9LCBwbGF5ZXIuc29ja2V0SUQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBOb3RpZnkgb3Bwb25lbnQgb2YgY3VycmVudCBwbGF5ZXIncyBwb3NpdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3BwUGF5bG9hZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGMgaW4gY3VycmVudFBsYXllckNsb25lcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHBQYXlsb2FkLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDpjdXJyZW50UGxheWVyQ2xvbmVzW2NdLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OmN1cnJlbnRQbGF5ZXJDbG9uZXNbY10ueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV1aWQ6Y3VycmVudFBsYXllckNsb25lc1tjXS51dWlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB7dHlwZTpcInBlcnNvbm5lbFwiLCBkZXRhaWxzOm9wcFBheWxvYWR9LCBvcHBvbmVudC5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3QoJ3VwZGF0ZScsIHt0eXBlOlwicmVzb3VyY2VzXCIsIGFjdGlvbjonaW5pdCd9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIgPSB0aGlzLmdldFJhbmRvbVBsYXllcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwib2ZmZXJEaWNlXCIsIGRldGFpbHM6IHt9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlKys7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHN0YXRlLnZhbHVlICsgXCIgaXMgbm90IGEgdmFsaWQgcGxheWVyIHN0YXRlIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxheWVyT3Bwb25lbnQocGxheWVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyc0FycmF5Lmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyc0FycmF5WzBdID09PSBwbGF5ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5WzFdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheVswXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQWN0aXZlUGxheWVyKCkge1xyXG4gICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwidGFrZURpY2VcIiwgZGV0YWlsczoge319LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIgPSB0aGlzLmdldFBsYXllck9wcG9uZW50KHRoaXMuYWN0aXZlUGxheWVyKTtcclxuICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcIm9mZmVyRGljZVwiLCBkZXRhaWxzOiB7fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5kb21QbGF5ZXIoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIpXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0UGxheWVyQnlVVUlEKHV1aWQpIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMucGxheWVyc0FycmF5KSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyc0FycmF5W2ldLnV1aWQgPT0gdXVpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheVtpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFBsYXllckJ5U29ja2V0SUQoaWQpIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMucGxheWVyc0FycmF5KSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyc0FycmF5W2ldLnNvY2tldElEID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXlbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBsYXllckNvdW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tBcm1zKHBsYXllcikge1xyXG4gICAgICAgIHBsYXllci5hcm1zQXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHBsYXllci5wZXJzb25uZWxBcnJheSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50aWxlQXJyYXlbcGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnhdW3BsYXllci5wZXJzb25uZWxBcnJheVtpXS55XS50eXBlID09IFwiYXJtb3J5XCIpIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci5hcm1zQXJyYXkucHVzaCh0aGlzLnRpbGVBcnJheVtwbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueF1bcGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnldLm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjaGVja0d1bm5lcnMocGxheWVyKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBwbGF5ZXIucGVyc29ubmVsQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGlsZUFycmF5W3BsYXllci5wZXJzb25uZWxBcnJheVtpXS54XVtwbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueV0udHlwZSA9PSBcInN1cmZhY2VcIikge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLmlzR3VubmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci5wZXJzb25uZWxBcnJheVtpXS5pc0d1bm5lciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4aXN0c1BsYXllclVVSUQodXVpZCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXJzQXJyYXlbaV0udXVpZCA9PSB1dWlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgYWN0aXZhdGVUaWxlKGRhdGEpIHtcclxuICAgICAgICB2YXIgdGlsZSA9IHRoaXMuZ2V0VGlsZShkYXRhLngsIGRhdGEueSk7XHJcbiAgICAgICAgdmFyIHJlbWFpbmluZ0NvdW50ID0gbnVsbDtcclxuICAgICAgICBcclxuICAgICAgICBzd2l0Y2ggKHRpbGUudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwic3VyZmFjZVwiOiBcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbEJ5UG9pbnQoe3g6ZGF0YS54LCB5OmRhdGEueX0pLmlzR3VubmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicHJvZHVjdGlvblwiOlxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRocmVlIHNwZWNpYWwgY2FzZXM6IFxyXG4gICAgICAgICAgICAgICAgLy8gIC0gU2Vuc29yIENhYmluIGRvZXMgbm90IGNvc3Qgb3IgeWllbGQgYW55dGhpbmcuIFdlIGNhbiBoYW5kbGUgdGhpcyBpbW1lZGlhdGVseSlcclxuICAgICAgICAgICAgICAgIC8vICAtIFByb2R1Y3Rpb24gUmVwYWlyIGNvc3RzLCBidXQgdHJpZ2dlcnMgYSByZXBhaXIganVzdCBsaWtlIHRoZSBSZXBhaXIgYmF0dGxlIHRpbGUgKFdlIG5lZWQgdG8gY2hlY2sgaWYgd2UgY2FuIGFmZm9yZClcclxuICAgICAgICAgICAgICAgIC8vICAtIE51Y2xlYXIgQXJtb3J5IHByb2R1Y2VzIGEgbnVrZSB3aGljaCByZWxpZXMgb24gb3JkbmFuY2Ugd2hpY2ggaGFzIG5vdCBiZWVuIGJ1aWx0IHlldFxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRpbGUubmFtZSA9PSBcInNlbnNvckNhYmluXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgc2Vuc29yIGNhYmluIHNvIGp1c3QgdHJpZ2dlciB0aGUgYWN0aW9uIGFuZCBtb3ZlIG9uLlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2Vuc29yIGNhYmlucyBhcmUgZnJlZSFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aWxlLm5hbWUgPT0gXCJwcm9kUmVwYWlyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIHRoZSByZXBhaXIgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJpZ2dlciB0aGUgcmVwYWlyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjsgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGlsZS5uYW1lID09IFwibnVjbGVhckFybW9yeVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVHJpZ2dlciB0aGUgcmVwYWlyICBcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJ1aWxkIGEgbnVrZSFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuY2hlY2tSZXNvdXJjZSh0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZVtpXSwgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdENvdW50W2ldKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FuJ3QgYWZmb3JkIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FuJ3QgYWZmb3JkIGl0IVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5jaGVja1Jlc291cmNlKHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkVHlwZVtqXSwgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRDb3VudFtqXSwgdHJ1ZSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vIHJvb20gdG8gc3RvcmUgaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYW4ndCBhY2NlcHQgdGhlIHlpZWxkIGN1eiB3ZSBnb3Qgbm8gcm9vbSFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgayBpbiB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ0NvdW50ID0gdGhpcy5hY3RpdmVQbGF5ZXIuc3BlbmRSZXNvdXJjZSh0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZVtrXSwgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdENvdW50W2tdKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIllvdSBoYXZlIHNwZW50IFwiICsgcmVtYWluaW5nQ291bnQgKyBcIiBcIiArIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlW2tdICsgXCIuIFRoaXMgbGVhdmVzIHlvdSB3aXRoIFwiICsgdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UmVzb3VyY2VDb3VudCh0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZVtrXSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGwgaW4gdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nQ291bnQgPSB0aGlzLmFjdGl2ZVBsYXllci5hY2NlcHRSZXNvdXJjZSh0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZFR5cGVbbF0sIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkQ291bnRbbF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZW1haW5pbmdDb3VudCkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWW91IGhhdmUgYWRkZWQgXCIgKyByZW1haW5pbmdDb3VudCArIFwiIFwiICsgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRUeXBlW2xdICsgXCIuIFRoaXMgbGVhdmVzIHlvdSB3aXRoIFwiICsgdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UmVzb3VyY2VDb3VudCh0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZFR5cGVbbF0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgcGxheWVyIHRvIHRoZWlyIG5ldyB3YXJlaG91c2UgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNhc2UgXCJhcm1vcnlcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tBcm1zKHRoaXMuYWN0aXZlUGxheWVyKTtcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBwbGF5ZXIncyBwZXJzb25uZWwgdG8gYmUgYXJtZWRcclxuICAgICAgICAgICAgICAgIC8vIE1heWJlIGhhdmUgdGhyZWUgb3ZlcmxhcHBpbmcgc3ByaXRlcy4gRHJpbGwsIENhbm5vbiwgRXhwbG9zaXZlcz9cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBcImJhdHRsZVwiOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aWxlLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2hpZWxkXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJpb2Ryb25lXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImxhc2VyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRoZXJtaXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNhdGVsbGl0ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyb2NrZXRcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZXNwaW9uYWdlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRha2VvdmVyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudHVyblN0YXRlKys7IC8vIFNldCBzdGF0ZSB0byBBQ1RJT04uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50UmVzb3VyY2VDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50UmVzb3VyY2VBZmZvcmRhYmlsaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFmZm9yZGFibGVSb3VuZHMgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUd1bm5lcnMgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRHdW5uZXJzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlR3VubmVycy5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIE5vIGd1bm5lcnMhIEdldCBvdXQgb2YgaGVyZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbSBpbiB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlQ291bnQgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRSZXNvdXJjZUNvdW50KHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlW21dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZXNvdXJjZUFmZm9yZGFiaWxpdHkgPSBjdXJyZW50UmVzb3VyY2VDb3VudCAvIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVzb3VyY2VBZmZvcmRhYmlsaXR5IDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gTm90IGVub3VnaCBvZiBhIHJlc291cmNlIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZmZvcmRhYmxlUm91bmRzID09PSBudWxsIHx8IGN1cnJlbnRSZXNvdXJjZUFmZm9yZGFiaWxpdHkgPCBhZmZvcmRhYmxlUm91bmRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZmb3JkYWJsZVJvdW5kcyA9IGN1cnJlbnRSZXNvdXJjZUFmZm9yZGFiaWxpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZWxsIHBsYXllciB0aGV5IGNhbiBhZmZvcmQgXCIgKyBhZmZvcmRhYmxlUm91bmRzICsgXCIgZ3VubmVyKHMpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlZEJhdHRsZVRpbGVUeXBlID0gdGlsZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBlbWl0IHNob3dUaWxlcygpIHdpdGggYXJyYXkgb2YgbGVnYWwgZ3VubmVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcIm9mZmVyR3VubmVyc1wiLCBkZXRhaWxzOntndW5uZXJzOmFjdGl2ZUd1bm5lcnN9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWFkeSB0byBzZWxlY3QgZ3VubmVycyEgVGhpcyB3aWxsIHRha2UgcGxhY2Ugb24gdGhlIG5leHQgbGVnYWwgY2xpY2sgZXZlbnQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvdW50ZXJFc3Bpb25hZ2VcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9vayBmb3IgY2xvbmVzIHRoYXQgYXJlIG9wcG9uZW50J3Mgc3BpZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyZXBhaXJcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmVwYWlyVHdvXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZXNvdXJjZUNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZURhbWFnZWRUaWxlcyA9IHRoaXMuZ2V0RGFtYWdlZFRpbGVzKHRoaXMuYWN0aXZlUGxheWVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZURhbWFnZWRUaWxlcy5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIGNvc3Qgb2YgcmVwYWlyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG4gaW4gdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZXNvdXJjZUNvdW50ID0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UmVzb3VyY2VDb3VudCh0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZVtuXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlc291cmNlQ291bnQgPCB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0Q291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIE5vdCBlbm91Z2ggb2YgYSByZXNvdXJjZSFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUZWxsIHBsYXllciB0aGF0IHRoZXkgY2FuIGFmZm9yZCB0byBmaXggdXAgdGhlIHN0YXRpb24hXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaXJlV2VhcG9uKHdlYXBvblRpbGUsIGd1bm5lckFycmF5KSB7XHJcbiAgICAgICAgaWYgKGd1bm5lckFycmF5Lmxlbmd0aCA8PSAwICkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGd1bm5lckFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBvcmRuYW5jZVBvaW50ID0ge3g6Z3VubmVyQXJyYXlbaV0ueCwgeTpndW5uZXJBcnJheVtpXS55fTtcclxuICAgICAgICAgICAgdmFyIGltcGFjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBvcmRVVUlEO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh3ZWFwb25UaWxlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibGFzZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFRpbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRPY2N1cGFudDtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaW1wYWN0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5pZCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRuYW5jZVBvaW50LngrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZG5hbmNlUG9pbnQueC0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlID0gdGhpcy5nZXRUaWxlKG9yZG5hbmNlUG9pbnQueCwgb3JkbmFuY2VQb2ludC55KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjdXJyZW50VGlsZS5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3BhY2VcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzdXJmYWNlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUaWxlLm9jY3VwaWVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPY2N1cGFudCA9IHRoaXMuZ2V0VGlsZU9jY3VwYW50KG9yZG5hbmNlUG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBkZXN0cm95IG9jY3VwYW50LiBUaGlzIHdpbGwgd2FpdCBvbiBzYXRzIGFuZCBzaGllbGRzIGFuZCByb2NrZXRzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGlsZS5vY2N1cGllZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBhY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gWW91IGFyZSBpbiB0aGUgb3Bwb25lbnQgbWluZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFRpbGUub2NjdXBpZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9jY3VwYW50ID0gdGhpcy5nZXRUaWxlT2NjdXBhbnQob3JkbmFuY2VQb2ludCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLnJlbW92ZVBlcnNvbm5lbChjdXJyZW50T2NjdXBhbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBlbWl0IGRlYXRoIGFuaW1hdGlvbiB0byBjbGllbnRzLiAobWF5YmUganVzdCBhZGQgdGhhdCB0byB0aGUgcmVtb3ZlUGVyc29ubmVsKCk/KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcInJlbW92ZVBlcnNvbm5lbFwiLCBkZXRhaWxzOmN1cnJlbnRPY2N1cGFudH0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbGUub2NjdXBpZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wYWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUaWxlLmRhbWFnZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbGUuZGFtYWdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwiZGFtYWdlVGlsZVwiICxkZXRhaWxzOm9yZG5hbmNlUG9pbnR9LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcGFjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInNoaWVsZFwiOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJpb2Ryb25lXCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic2F0ZWxsaXRlXCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicm9ja2V0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmlkID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkbmFuY2VQb2ludC54ICs9IHRoaXMuY3VycmVudERpY2VWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRuYW5jZVBvaW50LnggLT0gdGhpcy5jdXJyZW50RGljZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGlsZSA9IHRoaXMuZ2V0VGlsZShvcmRuYW5jZVBvaW50LngsIG9yZG5hbmNlUG9pbnQueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkVVVJRCA9IHV1aWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllci5hZGRPcmRuYW5jZSh3ZWFwb25UaWxlLCBvcmRuYW5jZVBvaW50LCBvcmRVVUlEKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcImFkZE9yZG5hbmNlXCIsIGRldGFpbHM6e3R5cGU6d2VhcG9uVGlsZSwgcG9pbnQ6b3JkbmFuY2VQb2ludCwgdXVpZDpvcmRVVUlEfX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJ0aGVybWl0ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5pZCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZG5hbmNlUG9pbnQueCA9IDMxIC0gdGhpcy5jdXJyZW50RGljZVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZG5hbmNlUG9pbnQueCA9IHRoaXMuY3VycmVudERpY2VWYWx1ZSAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlID0gdGhpcy5nZXRUaWxlKG9yZG5hbmNlUG9pbnQueCwgb3JkbmFuY2VQb2ludC55KTtcclxuICAgICAgICAgICAgICAgICAgICBvcmRVVUlEID0gdXVpZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLmFkZE9yZG5hbmNlKHdlYXBvblRpbGUsIG9yZG5hbmNlUG9pbnQsIG9yZFVVSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwiYWRkT3JkbmFuY2VcIiwgZGV0YWlsczp7dHlwZTp3ZWFwb25UaWxlLCBwb2ludDpvcmRuYW5jZVBvaW50LCB1dWlkOm9yZFVVSUR9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgaXMgYSBwcm9ibGVtIHdpdGggdGhhdCB3ZWFwb25UaWxlIGFyZ3VtZW50XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybjsgXHJcbiAgICAgICAgLy8gc3dpdGNoICh3ZWFwb25UaWxlLm5hbWUpIHtcclxuICAgICAgICAvLyAgICAgY2FzZSBcImVzcGlvbmFnZVwiOlxyXG4gICAgICAgIC8vICAgICBjYXNlIFwidGFrZW92ZXJcIjpcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIGlzIGEgcHJvYmxlbSB3aXRoIHRoYXQgd2VhcG9uVGlsZSBhcmd1bWVudFwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9ja3MocGxheWVyKSB7XHJcbiAgICAgICAgdmFyIHJldHVybkFycmF5ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgYyBpbiB0aGlzLnRpbGVBcnJheSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciByIGluIHRoaXMudGlsZUFycmF5W2NdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlQXJyYXlbY11bcl0ubmFtZSA9PSBcImxvY2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5pZCA9PSAxICYmIGMgPCAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLnRpbGVBcnJheVtjXVtyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyLmlkID09IDIgJiYgYyA+IDE4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMudGlsZUFycmF5W2NdW3JdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy50aWxlQXJyYXlbY11bcl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGFtYWdlZFRpbGVzKHBsYXllcikge1xyXG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGMgaW4gdGhpcy50aWxlQXJyYXkpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgciBpbiB0aGlzLnRpbGVBcnJheVtjXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuaWQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYyA8IDEyICYmIHRoaXMudGlsZUFycmF5W2NdW3JdLmRhbWFnZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy50aWxlQXJyYXlbY11bcl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjID4gMTggJiYgdGhpcy50aWxlQXJyYXlbY11bcl0uZGFtYWdlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLnRpbGVBcnJheVtjXVtyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlQXJyYXlbY11bcl0uZGFtYWdlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMudGlsZUFycmF5W2NdW3JdKTtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcGxhY2VDbG9uZShwbGF5ZXIsIHgsIHkpIHtcclxuXHJcbiAgICAgICAgLy8gQXR0ZW1wdCB0byBwbGFjZSBjbG9uZXNcclxuICAgICAgICAvLyBJZiB0aGUgZ2FtZXN0YXRlIGlzIFNFVFVQLCBjbG9uZXMgY2FuIGdvIGludG8gYW55IHVub2NjdXBpZWQsIHBsYXllci1vd25lZCwgYmF0dGxlLCBwcm9kdWN0aW9uLCBsb2NrLCBvciBhcm1vcnkgdGlsZS5cclxuICAgICAgICAvLyBJZiB0aGUgZ2FtZXN0YXRlIGlzIEdBTUUsIGNsb25lcyBjYW4gb25seSBnbyBpbnRvIHVub2NjdXBpZWQsIHBsYXllci1vd25lZCwgbG9ja3MuXHJcbiAgICAgICAgLy8gUkVUVVJOIHRydWUgb3IgZmFsc2UgZm9yIHN1Y2Nlc3Mgb3IgZmFpbHVyZS5cclxuICAgICAgICAvLyBJIHNob3VsZCByZWZhY3RvciB0aGlzLCBidXQgSSdtIHRpcmVkLlxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHBsYXllciA9PT0gJ3VuZGVmaW5lZCcgfHwgcGxheWVyID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzZWxlY3RlZFRpbGUgPSB0aGlzLmdldFRpbGUoeCwgeSk7XHJcbiAgICAgICAgdmFyIGNsb25lLCBjbG9uZVVVSUQ7XHJcblxyXG4gICAgICAgIGlmIChwbGF5ZXIuaWQgIT0gc2VsZWN0ZWRUaWxlLm93bmVyIHx8IHNlbGVjdGVkVGlsZS5vY2N1cGllZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiBnYW1lc3RhdGUgaXMgU0VUVVBcclxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IHRoaXMuZ2FtZVN0YXRlRW51bS5TRVRVUCkge1xyXG4gICAgICAgICAgICBpZihzZWxlY3RlZFRpbGUudHlwZSA9PSBcImxvY2tcIiB8fCBzZWxlY3RlZFRpbGUudHlwZSA9PSBcImJhdHRsZVwiIHx8IHNlbGVjdGVkVGlsZS50eXBlID09IFwiYXJtb3J5XCIgfHwgc2VsZWN0ZWRUaWxlLnR5cGUgPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGNsb25lVVVJRCA9IHV1aWQoKTtcclxuICAgICAgICAgICAgICAgIC8vdmFyIHV1aWQgPSByZXF1aXJlKCd1dWlkL3Y0JykoKTtcclxuICAgICAgICAgICAgICAgIGNsb25lID0gcGxheWVyLmFkZFBlcnNvbm5lbCgnY2xvbmUnLCB4LCB5LCBjbG9uZVVVSUQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsb25lICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tBcm1zKHBsYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUaWxlLm9jY3VwaWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcImFkZENsb25lXCIsIGRldGFpbHM6IHt4OngsIHk6eSwgcGxheWVySUQ6IHBsYXllci5pZCwgdXVpZDpjbG9uZVVVSUR9fSwgcGxheWVyLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiBnYW1lc3RhdGUgaXMgR0FNRVxyXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gdGhpcy5nYW1lU3RhdGVFbnVtLkdBTUUpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkVGlsZS50eXBlID09IFwibG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9uZVVVSUQgPSB1dWlkKCk7XHJcbiAgICAgICAgICAgICAgICAvL3ZhciB1dWlkID0gcmVxdWlyZSgndXVpZC92NCcpKCk7XHJcbiAgICAgICAgICAgICAgICBjbG9uZSA9IHBsYXllci5hZGRQZXJzb25uZWwoJ2Nsb25lJywgeCwgeSwgY2xvbmVVVUlEKTtcclxuICAgICAgICAgICAgICAgIGlmIChjbG9uZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQXJtcyhwbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGlsZS5vY2N1cGllZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJhZGRDbG9uZVwiLCBkZXRhaWxzOiB7eDp4LCB5OnksIHBsYXllcklEOiBwbGF5ZXIuaWQsIHV1aWQ6Y2xvbmVVVUlEfX0sIHBsYXllci5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVUaWxlQXJyYXkoKSB7XHJcbiAgICAgICAgdmFyIHRpbGVKU09OID0gcmVxdWlyZSgnLi4vLi4vYXNzZXRzL3RpbGVEZXRhaWwuanNvbicpO1xyXG5cclxuICAgICAgICBmb3IodmFyIGMgPSAwOyBjIDwgdGhpcy50aWxlQ29sdW1uczsgYysrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NdID0gW107XHJcbiAgICAgICAgICAgIGZvcih2YXIgciA9IDA7IHIgPCB0aGlzLnRpbGVSb3dzOyByKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NdW3JdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6YyxcclxuICAgICAgICAgICAgICAgICAgICB5OnJcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aWxlSlNPTikge1xyXG4gICAgICAgICAgICBpZiAoIXRpbGVKU09OLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIG9iaiA9IHRpbGVKU09OW2tleV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBza2lwIGxvb3AgaWYgdGhlIHByb3BlcnR5IGlzIGZyb20gcHJvdG90eXBlXHJcbiAgICAgICAgICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KHByb3ApKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uQ291bnQgPSBvYmpbcHJvcF0ubG9jYXRpb25zLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYXRpb25Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvb3JkcyA9IG9ialtwcm9wXS5sb2NhdGlvbnNbaV0uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gY29vcmRzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gY29vcmRzWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLmRhbWFnZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5vY2N1cGllZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnR5cGUgPSBvYmpbcHJvcF0udHlwZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPCA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLm93bmVyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHggPiAyMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5vd25lciA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVBcnJheVt4XVt5XSAhPSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0ubmFtZSA9IG9ialtwcm9wXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeCArIFwiOlwiICsgeSArIFwiIG5vdCBmb3VuZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcF0ucHJvcGVydGllcyAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5wcm9wZXJ0aWVzID0gb2JqW3Byb3BdLnByb3BlcnRpZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUaWxlKHgsIHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWxlQXJyYXlbeF1beV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGVnYWxQaWVjZXMoKSB7XHJcbiAgICAgICAgdmFyIHBlcnNvbm5lbEFycmF5ID0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UGVyc29ubmVsKCk7XHJcbiAgICAgICAgdmFyIG9yZG5hbmNlQXJyYXkgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRPcmRuYW5jZSgpO1xyXG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xyXG4gICAgICAgIHZhciBtb3Zlc0FycmF5ID0gW107XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgaW4gcGVyc29ubmVsQXJyYXkpIHtcclxuICAgICAgICAgICAgbW92ZXNBcnJheSA9IHRoaXMuZ2V0TGVnYWxNb3ZlcyhwZXJzb25uZWxBcnJheVtpXSwgdGhpcy5jdXJyZW50RGljZVZhbHVlLCB7eDpwZXJzb25uZWxBcnJheVtpXS54LCB5OnBlcnNvbm5lbEFycmF5W2ldLnl9KTtcclxuICAgICAgICAgICAgaWYgKG1vdmVzQXJyYXkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh7dHlwZTpwZXJzb25uZWxBcnJheVtpXS50eXBlLG9yaWdpbjp7eDpwZXJzb25uZWxBcnJheVtpXS54LHk6cGVyc29ubmVsQXJyYXlbaV0ueX0sIHV1aWQ6cGVyc29ubmVsQXJyYXlbaV0udXVpZCwgbW92ZXM6bW92ZXNBcnJheX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBqIGluIG9yZG5hbmNlQXJyYXkpIHtcclxuICAgICAgICAgICAgbW92ZXNBcnJheSA9IHRoaXMuZ2V0TGVnYWxNb3ZlcyhwZXJzb25uZWxBcnJheVtqXSwgdGhpcy5jdXJyZW50RGljZVZhbHVlLCB7eDpwZXJzb25uZWxBcnJheVtqXS54LCB5OnBlcnNvbm5lbEFycmF5W2pdLnl9KTtcclxuICAgICAgICAgICAgaWYgKG1vdmVzQXJyYXkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh7dHlwZTpcIm9yZG5hbmNlXCIsIHV1aWQ6b3JkbmFuY2VBcnJheVtqXS51dWlkLCBtb3Zlczptb3Zlc0FycmF5fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVybkFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvb3JkRnJvbURpcmVjdGlvbihvcmlnaW5Db29yZCxkaXJlY3Rpb24pIHtcclxuICAgICAgICB2YXIgZGlyPXtOT1JUSDp7eDowLHk6LTF9LEVBU1Q6e3g6MSx5OjB9LFNPVVRIOnt4OjAseToxfSxXRVNUOnt4Oi0xLHk6MH19O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBvYmogPSB7eDoocGFyc2VJbnQob3JpZ2luQ29vcmQueCkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS54KSksIHk6KHBhcnNlSW50KG9yaWdpbkNvb3JkLnkpICsgcGFyc2VJbnQoZGlyW2RpcmVjdGlvbl0ueSkpfTtcclxuICAgICAgICBpZihvYmoueCA8IDAgfHwgb2JqLnggPiAzMHx8IG9iai55IDwgMCB8fCBvYmoueSA+IDIwKSBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHt4OihwYXJzZUludChvcmlnaW5Db29yZC54KSArIHBhcnNlSW50KGRpcltkaXJlY3Rpb25dLngpKSwgeToocGFyc2VJbnQob3JpZ2luQ29vcmQueSkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS55KSl9OyAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldExlZ2FsTW92ZXMoZ2FtZVBpZWNlVHlwZSwgbW92ZXMsIGN1cnJlbnRDb29yZCwgcHJldmlvdXNDb29yZCl7XHJcbiAgICAgICAgaWYgKG1vdmVzIDwgMSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSWxsZWdhbCBtb3ZlIG51bWJlciEgVGhpcyBjb3VsZCByZXN1bHQgaW4gaW5maW5pdGUgbG9vcC5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGxlZ2FsTW92ZXMgPSBbXTtcclxuICAgICAgICB2YXIgcmV0dXJuQXJyYXkgPSBbXTtcclxuICAgICAgICB2YXIgbmV4dE1vdmVUb0NoZWNrID0gbnVsbDtcclxuICAgICAgICB2YXIgbmV4dFRpbGVUb0NoZWNrID0gbnVsbDtcclxuICAgICAgICBtb3Zlcy0tO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2Nlc3MubWVtb3J5VXNhZ2UoKS5oZWFwVXNlZCk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgcHJldmlvdXNDb29yZCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdmFyIGxvY2tzID0gdGhpcy5nZXRMb2Nrcyh0aGlzLmFjdGl2ZVBsYXllcik7XHJcbiAgICAgICAgICAgIHZhciBpc0xvY2sgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGwgaW4gbG9ja3MpIHtcclxuICAgICAgICAgICAgICAgIGlmIChsb2Nrc1tsXS54ID09IGN1cnJlbnRDb29yZC54ICYmIGxvY2tzW2xdLnkgPT0gY3VycmVudENvb3JkLnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0xvY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNMb2NrID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIGxvY2tzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRDb29yZC54ID09IGxvY2tzW2ldLnggJiYgY3VycmVudENvb3JkLnkgPT0gbG9ja3NbaV0ueSkgeyBjb250aW51ZTsgfSAvLyBkb24ndCBpbmNsdWRlIHRoZSBsb2NrIHlvdSdyZSBzaXR0aW5nIG9uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZUFycmF5W2xvY2tzW2ldLnhdW2xvY2tzW2ldLnldLm9jY3VwaWVkID09PSB0cnVlKSB7IGNvbnRpbnVlOyB9IC8vIGRvbid0IGluY2x1ZGUgbG9jayB0aGF0IG90aGVycyBhcmUgc2l0dGluZyBvblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlcyA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkgPSByZXR1cm5BcnJheS5jb25jYXQodGhpcy5nZXRMZWdhbE1vdmVzKGdhbWVQaWVjZVR5cGUsIG1vdmVzLCB7eDpsb2Nrc1tpXS54LCB5OmxvY2tzW2ldLnl9LCBjdXJyZW50Q29vcmQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKGxvY2tzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYyBpbiByZXR1cm5BcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXR1cm5BcnJheVtjXS54ICE9PSBjdXJyZW50Q29vcmQueCB8fCByZXR1cm5BcnJheVtjXS55ICE9PSBjdXJyZW50Q29vcmQueSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2FsTW92ZXMucHVzaChyZXR1cm5BcnJheVtjXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAodmFyIGRpcmVjdGlvbiBpbiB0aGlzLmRpcmVjdGlvbkVudW0pIHtcclxuICAgICAgICAgICAgbmV4dE1vdmVUb0NoZWNrID0gdGhpcy5nZXRDb29yZEZyb21EaXJlY3Rpb24oY3VycmVudENvb3JkLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICBpZihuZXh0TW92ZVRvQ2hlY2sgPT09IGZhbHNlKSB7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuZXh0VGlsZVRvQ2hlY2sgPSB0aGlzLnRpbGVBcnJheVtuZXh0TW92ZVRvQ2hlY2sueF1bbmV4dE1vdmVUb0NoZWNrLnldO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKG5leHRUaWxlVG9DaGVjay5kYW1hZ2VkID09PSB0cnVlKSB7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgIGlmIChuZXh0VGlsZVRvQ2hlY2sudHlwZSA9PT0gXCJzcGFjZVwiKSB7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrV2FsbCh0aGlzLmRpcmVjdGlvbkVudW1bZGlyZWN0aW9uXSwgY3VycmVudENvb3JkKSA9PT0gZmFsc2UpIHsgY29udGludWU7IH1cclxuXHJcbiAgICAgICAgICAgIGlmKCh0eXBlb2YgcHJldmlvdXNDb29yZCA9PT0gJ3VuZGVmaW5lZCcpIHx8ICgodHlwZW9mIHByZXZpb3VzQ29vcmQgIT09ICd1bmRlZmluZWQnKSAmJiAoSlNPTi5zdHJpbmdpZnkobmV4dE1vdmVUb0NoZWNrKSAhPT0gSlNPTi5zdHJpbmdpZnkocHJldmlvdXNDb29yZCkpICkpIHtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRpbGUgaXMgb2NjdXBpZWRcclxuICAgICAgICAgICAgICAgIGlmIChtb3ZlcyA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobmV4dFRpbGVUb0NoZWNrLm9jY3VwaWVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWdhbE1vdmVzLnB1c2gobmV4dE1vdmVUb0NoZWNrKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheSA9IHJldHVybkFycmF5LmNvbmNhdCh0aGlzLmdldExlZ2FsTW92ZXMoZ2FtZVBpZWNlVHlwZSwgbW92ZXMsIG5leHRNb3ZlVG9DaGVjaywgY3VycmVudENvb3JkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpbmRleCBpbiByZXR1cm5BcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXR1cm5BcnJheVtpbmRleF0ueCAhPT0gY3VycmVudENvb3JkLnggfHwgcmV0dXJuQXJyYXlbaW5kZXhdLnkgIT09IGN1cnJlbnRDb29yZC55KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnYWxNb3Zlcy5wdXNoKHJldHVybkFycmF5W2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZWdhbE1vdmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrV2FsbChkaXJlY3Rpb24sIGN1cnJlbnRDb29yZGluYXRlKSB7XHJcbiAgICAgICAgdGhpcy53YWxsR3JpZCA9IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy93YWxsR3JpZC5qc29uJyk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKXtcclxuICAgICAgICAgICAgY2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uTk9SVEg6IC8vIFVQXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy53YWxsR3JpZC5ncmlkW2N1cnJlbnRDb29yZGluYXRlLnhdW2N1cnJlbnRDb29yZGluYXRlLnldJnRoaXMuZGlyZWN0aW9uRW51bS5OT1JUSCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgY2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uU09VVEg6IC8vIERPV05cclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCh0aGlzLndhbGxHcmlkLmdyaWRbY3VycmVudENvb3JkaW5hdGUueF1bY3VycmVudENvb3JkaW5hdGUueV0mdGhpcy5kaXJlY3Rpb25FbnVtLlNPVVRIKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBjYXNlIHRoaXMuZGlyZWN0aW9uRW51bS5FQVNUOiAvLyBSSUdIVFxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uRUFTVCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgY2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uV0VTVDogLy8gTEVGVFxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uV0VTVCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByb2xsRGljZShkYXRhKSB7XHJcbiAgICAgICAgaWYodGhpcy50dXJuU3RhdGUgPT0gdGhpcy50dXJuU3RhdGVFbnVtLlJPTEwgJiYgdGhpcy5nYW1lU3RhdGUgPT0gdGhpcy5nYW1lU3RhdGVFbnVtLkdBTUUgJiYgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQgPT0gZGF0YS5zb2NrZXRJRCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREaWNlVmFsdWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDE7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLmN1cnJlbnRMZWdhbFBpZWNlcyA9IHRoaXMuZ2V0TGVnYWxQaWVjZXMoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFBsYXllciByZWNlaXZlcyBhcnJheSBvZiBsZWdhbCBwZXJzb25uZWwgKGNsb25lcyBhbmQgYmlvZHJvbmVzKSBhbmQgdHVybiBzdGF0ZSBhZHZhbmNlcyB0byBNT1ZFXHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwiZGljZVJvbGxlZFwiLCBkZXRhaWxzOiB7dmFsdWU6dGhpcy5jdXJyZW50RGljZVZhbHVlLCBnYW1lUGllY2VzOnRoaXMuYWN0aXZlUGxheWVyLmN1cnJlbnRMZWdhbFBpZWNlc319LCBkYXRhLnNvY2tldElEKTtcclxuICAgICAgICAgICAgdGhpcy50dXJuU3RhdGUrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldChkYXRhKSB7XHJcbiAgICAgICAgaWYodHlwZW9mKGRhdGEucHJvcGVydHkpID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVzcG9uc2UnLCB7ZGV0YWlsczp0aGlzW2RhdGEucHJvcGVydHldfSwgZGF0YS5zb2NrZXRJRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBlbWl0KG1zZywgZGF0YSwgc29ja2V0SUQpIHtcclxuICAgICAgICBpZihtc2cgPT0gXCJyZXNwb25zZVwiIHx8IG1zZyA9PSBcInJlcXVlc3RcIiB8fCBtc2cgPT0gXCJ1cGRhdGVcIikge1xyXG4gICAgICAgICAgICBpZih0eXBlb2Yoc29ja2V0SUQpID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBTb2NrZXRJRCBmb3VuZCFcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pby5zb2NrZXRzLmNvbm5lY3RlZFtzb2NrZXRJRF0uZW1pdChtc2csIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlmKG1zZyA9PSBcImFjdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZihzb2NrZXRJRCkgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIFNvY2tldElEIGZvdW5kIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlvLnNvY2tldHMuY29ubmVjdGVkW3NvY2tldElEXS5lbWl0KG1zZywgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKG1zZyA9PSBcImxvZ1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW8uc29ja2V0cy5lbWl0KG1zZywgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBicm9hZGNhc3QobXNnLCBkYXRhKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnBsYXllcnNBcnJheSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQobXNnLCBkYXRhLCB0aGlzLnBsYXllcnNBcnJheVtpXS5zb2NrZXRJRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuU2VwdGlrb24gPSBTZXB0aWtvbjtcclxuIiwiaW1wb3J0IFNlcHRpa29uIGZyb20gJy4uL3ByZWZhYnMvc2VwdGlrb24nO1xyXG5cclxuY2xhc3MgQm9vdCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHByZWxvYWQoKSB7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3ByZWxvYWRlcicsICdhc3NldHMvcHJlbG9hZGVyLmdpZicpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5nYW1lLmlucHV0Lm1heFBvaW50ZXJzID0gMTtcclxuICAgIHRoaXMuZ2FtZS50aW1lLmFkdmFuY2VkVGltaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuZ2FtZS5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xyXG4gICAgICB0aGlzLmdhbWUuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5SRVNJWkU7XHJcbiAgICAvL3NldHVwIGRldmljZSBzY2FsaW5nXHJcbiAgICBpZiAoIXRoaXMuZ2FtZS5kZXZpY2UuZGVza3RvcCkge1xyXG4gICAgICB0aGlzLmdhbWUuc2NhbGUucGFyZW50SXNXaW5kb3cgPSB0cnVlO1xyXG4gICAgICB0aGlzLmdhbWUuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5SRVNJWkU7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5taW5XaWR0aCA9ICA0ODA7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5taW5IZWlnaHQgPSAyNjA7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5mb3JjZU9yaWVudGF0aW9uKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5pdEdsb2JhbFZhcmlhYmxlcygpO1xyXG4gICAgXHJcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ3ByZWxvYWRlcicpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEdsb2JhbFZhcmlhYmxlcygpe1xyXG4gICAgdGhpcy5nYW1lLmdsb2JhbCA9IHtcclxuICAgICAgc2NvcmU6IDAsXHJcbiAgICAgIGxhc3REaWNlUm9sbDogMCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9vdDtcclxuIiwiaW1wb3J0IERpY2UgZnJvbSAnLi4vcHJlZmFicy9kaWNlJztcclxuXHJcbmNsYXNzIEdhbWUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGNyZWF0ZSgpIHtcclxuICBcclxuICAgIC8vdGhpcy5nYW1lLmlucHV0Lm9uRG93bi5hZGQodGhpcy50b2dnbGVGdWxsc2NyZWVuLCB0aGlzKTtcclxuICAgIHRoaXMuZ2FtZS5zdGFnZS5kaXNhYmxlVmlzaWJpbGl0eUNoYW5nZSA9IHRydWU7XHJcbiAgICBcclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xyXG4gICAgdGhpcy5nYW1lLmh1ZEdyb3VwID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5tb2RhbCA9IG5ldyBnYW1lTW9kYWwodGhpcy5nYW1lKTtcclxuICAgIHRoaXMuY3JlYXRlTW9kYWxzKCk7XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwwLCdiYWNrZ3JvdW5kJyk7XHJcbiAgICB0aGlzLmJhY2tncm91bmQuYW5jaG9yLnNldFRvKDAuNSwwLjUpO1xyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2VudGVyWCA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYO1xyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2VudGVyWSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5odWRCZyA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwnaHVkLWJnJyk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmdvID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoNDAsODAsJ3RleHRfZ28nKTtcclxuICAgIHRoaXMuZ2FtZS5nby5zY2FsZS5zZXRUbygwLjI1KTtcclxuICAgIHRoaXMuZ2FtZS5nby5pbnB1dEVuYWJsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuZ2FtZS5nby5maWx0ZXJzID0gW3RoaXMuZ2FtZS5hZGQuZmlsdGVyKCdHcmF5JyldO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5nby5jbGlja2VkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5zZXB0aWtvbi5jaG9vc2luZ1RhcmdldHMgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAnZ28nfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmdhbWUuZ28uZXZlbnRzLm9uSW5wdXREb3duLmFkZCh0aGlzLmdhbWUuZ28uY2xpY2tlZCwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmdvLmVuYWJsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmdhbWUuZ28uZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IFt0aGlzLmdhbWUuYWRkLmZpbHRlcignR3JheScpXTtcclxuICAgICAgICB0aGlzLmlucHV0RW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmdhbWUuZGljZSA9IG5ldyBEaWNlKHRoaXMuZ2FtZSwgNTAsIDQwKTtcclxuICAgIHRoaXMuZ2FtZS5kaWNlLnNjYWxlLnNldFRvKDAuMjUpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5hZGQuZXhpc3RpbmcodGhpcy5nYW1lLmRpY2UpO1xyXG4gICAgXHJcbiAgICB0aGlzLmdhbWUuaHVkR3JvdXAuYWRkKHRoaXMuZ2FtZS5odWRCZyk7XHJcbiAgICB0aGlzLmdhbWUuaHVkR3JvdXAuYWRkKHRoaXMuZ2FtZS5kaWNlKTtcclxuICAgIHRoaXMuZ2FtZS5odWRHcm91cC5hZGQodGhpcy5nYW1lLmdvKTtcclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFkZCh0aGlzLmJhY2tncm91bmQpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi5jcmVhdGVUaWxlQXJyYXkoMzEsIDIxLCB7eDowLXRoaXMuYmFja2dyb3VuZC53aWR0aC8yLCB5OjAtdGhpcy5iYWNrZ3JvdW5kLmhlaWdodC8yfSk7XHJcblxyXG5cclxuICAgIHRoaXMucmVmcmVzaEJvYXJkKCk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIGNyZWF0ZU1vZGFscygpIHtcclxuICAgICAgdGhpcy5nYW1lLm1vZGFsLmNyZWF0ZU1vZGFsKFxyXG4gICAgICAgIHtcclxuICAgICAgICB0eXBlOiBcImFza1N0YXJ0XCIsXHJcbiAgICAgICAgaW5jbHVkZUJhY2tncm91bmQ6IGZhbHNlLFxyXG4gICAgICAgIG1vZGFsQ2xvc2VPbklucHV0OiBmYWxzZSxcclxuICAgICAgICBpdGVtc0FycjogW3tcclxuICAgICAgICAgICAgdHlwZTogXCJncmFwaGljc1wiLFxyXG4gICAgICAgICAgICBncmFwaGljQ29sb3I6IFwiMHhmZmZmZmZcIixcclxuICAgICAgICAgICAgZ3JhcGhpY1dpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgIGdyYXBoaWNIZWlnaHQ6IDMwMCxcclxuICAgICAgICAgICAgZ3JhcGhpY1JhZGl1czogNDBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiBcIkFyZSB5b3UgaGFwcHkgd2l0aFxcbiB0aGF0IGNsb25lIGxheW91dD9cIixcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIweDFlMWUxZVwiLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiAtNTBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcclxuICAgICAgICAgICAgY29udGVudDogXCJ0ZXh0X3llc1wiLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiAxMDAsXHJcbiAgICAgICAgICAgIG9mZnNldFg6IC04MCxcclxuICAgICAgICAgICAgY29udGVudFNjYWxlOiAwLjYsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUubW9kYWwuaGlkZU1vZGFsKFwiYXNrU3RhcnRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6J3NldFBsYXllclN0YXRlJywgdmFsdWU6J3N0YXJ0J30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwidGV4dF9ub1wiLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiAxMDAsXHJcbiAgICAgICAgICAgIG9mZnNldFg6IDgwLFxyXG4gICAgICAgICAgICBjb250ZW50U2NhbGU6IDAuNixcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5tb2RhbC5oaWRlTW9kYWwoXCJhc2tTdGFydFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDonc2V0UGxheWVyU3RhdGUnLCB2YWx1ZToncmVzZXQnfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2hCb2FyZCgpIHtcclxuXHJcbiAgICB2YXIgc2NhbGUgPSB3aW5kb3cuaW5uZXJXaWR0aC90aGlzLmJhY2tncm91bmQuaGVpZ2h0O1xyXG4gICAgaWYoc2NhbGUgPiAxLjkpIHtcclxuICAgICAgICBzY2FsZSA9IDEuOTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuc2NhbGUuc2V0VG8oc2NhbGUpO1xyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAueCA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYO1xyXG5cclxuICAgIGlmKHRoaXMuZ2FtZS5zZXB0aWtvbi5wbGF5ZXIuaWQgPT0gMSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFuZ2xlID0gLTkwOyBcclxuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWTsgLy8gQ2VudGVyZWQgb24gU2VwdGlrb24gTG9nb1xyXG4gICAgICAgIC8vdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZICsgKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gb3Bwb25lbnQncyBzaWRlXHJcbiAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZIC0gKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gdGhpcyBwbGF5ZXIncyBzaWRlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFuZ2xlID0gOTA7IFxyXG4gICAgICAgIC8vdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZOyAvLyBDZW50ZXJlZCBvbiBTZXB0aWtvbiBMb2dvXHJcbiAgICAgICAgLy90aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgKyAoKHRoaXMuYmFja2dyb3VuZC53aWR0aCpzY2FsZSktd2luZG93LmlubmVySGVpZ2h0KS8yOyAvLyBDZW50ZXJlZCBvbiBvcHBvbmVudCdzIHNpZGVcclxuICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgLSAoKHRoaXMuYmFja2dyb3VuZC53aWR0aCpzY2FsZSktd2luZG93LmlubmVySGVpZ2h0KS8yOyAvLyBDZW50ZXJlZCBvbiB0aGlzIHBsYXllcidzIHNpZGVcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBcclxuICB1cGRhdGUoKSB7XHJcbiAgICAvLyAgIHRoaXMuZGljZS5mcmFtZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpICsgMTtcclxuICAgIC8vIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdNb3VzZScsIDcwMCwgMzIpO1xyXG4gICAgXHJcbiAgICAvLyB0aGlzLmdhbWUuZGVidWcudGV4dCgnTW91c2UgWDogJyArIHRoaXMuZ2FtZS5pbnB1dC54LCA3MDAsIDY0KTtcclxuICAgIC8vIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdNb3VzZSBZOiAnICsgdGhpcy5nYW1lLmlucHV0LnksIDcwMCwgOTIpO1xyXG4gIH1cclxuICBcclxuICByZW5kZXIgKCkge1xyXG4gICAgICB0aGlzLnJlZnJlc2hCb2FyZCgpO1xyXG4gICAgICAvKlxyXG5cclxuICAgIHZhciB4ID0gMzI7XHJcbiAgICB2YXIgeSA9IDA7XHJcbiAgICB2YXIgeWkgPSAzMjtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdWaWV3cG9ydCcsIHgsIHkgKz0geWkpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdWaWV3cG9ydCBXaWR0aDogJyArIHRoaXMuZ2FtZS5zY2FsZS52aWV3cG9ydFdpZHRoLCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd3aW5kb3cuaW5uZXJXaWR0aDogJyArIHdpbmRvdy5pbm5lcldpZHRoLCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd3aW5kb3cub3V0ZXJXaWR0aDogJyArIHdpbmRvdy5vdXRlcldpZHRoLCB4LCB5ICs9IHlpKTtcclxuXHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnVmlld3BvcnQgSGVpZ2h0OiAnICsgdGhpcy5nYW1lLnNjYWxlLnZpZXdwb3J0SGVpZ2h0LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd3aW5kb3cuaW5uZXJIZWlnaHQ6ICcgKyB3aW5kb3cuaW5uZXJIZWlnaHQsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3dpbmRvdy5vdXRlckhlaWdodDogJyArIHdpbmRvdy5vdXRlckhlaWdodCwgeCwgeSArPSB5aSk7XHJcblxyXG4gICAgLy8gIERldmljZTogSG93IHRvIGdldCBkZXZpY2Ugc2l6ZS5cclxuXHJcbiAgICAvLyAgVXNlIHdpbmRvdy5zY3JlZW4ud2lkdGggZm9yIGRldmljZSB3aWR0aCBhbmQgd2luZG93LnNjcmVlbi5oZWlnaHQgZm9yIGRldmljZSBoZWlnaHQuIFxyXG4gICAgLy8gIC5hdmFpbFdpZHRoIGFuZCAuYXZhaWxIZWlnaHQgZ2l2ZSB5b3UgdGhlIGRldmljZSBzaXplIG1pbnVzIFVJIHRhc2tiYXJzLiAoVHJ5IG9uIGFuIGlQaG9uZS4pIFxyXG4gICAgLy8gIERldmljZSBzaXplIGlzIHN0YXRpYyBhbmQgZG9lcyBub3QgY2hhbmdlIHdoZW4gdGhlIHBhZ2UgaXMgcmVzaXplZCBvciByb3RhdGVkLlxyXG5cclxuICAgIHggPSAzNTA7XHJcbiAgICB5ID0gMDtcclxuXHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnQm9hcmQgR3JvdXAnLCB4LCB5ICs9IHlpKTtcclxuXHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5nYW1lLmJvYXJkR3JvdXAueDogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLngsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnk6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC55LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aDogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoLCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC5oZWlnaHQ6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC5oZWlnaHQsIHgsIHkgKz0geWkpO1xyXG5cclxuICAgIHggPSAzMjtcclxuICAgIHkgPSAzMDA7XHJcblxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ0JhY2tncm91bmQgRGV0YWlsJywgeCwgeSArPSB5aSk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC54OiAnICsgdGhpcy5iYWNrZ3JvdW5kLngsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC55OiAnICsgdGhpcy5iYWNrZ3JvdW5kLnksIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC53aWR0aDogJyArIHRoaXMuYmFja2dyb3VuZC53aWR0aCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLmhlaWdodDogJyArIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC5zY2FsZTogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnNjYWxlLngsIHgsIHkgKz0geWkpO1xyXG4gICAgKi9cclxuICAgIH1cclxuICAgIFxyXG4gIHRvZ2dsZUZ1bGxzY3JlZW4oKSB7XHJcbiAgICBpZih0aGlzLmdhbWUuc2NhbGUuaXNGdWxsU2NyZWVuKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnN0b3BGdWxsU2NyZWVuKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5zdGFydEZ1bGxTY3JlZW4oZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcclxuIiwiY2xhc3MgTWVudSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIC8vYWRkIGJhY2tncm91bmQgaW1hZ2VcclxuICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwnYmFja2dyb3VuZCcpO1xyXG4gICAgdGhpcy5iZ1JhdGlvID0gdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUud2lkdGggLyB0aGlzLmJhY2tncm91bmQudGV4dHVyZS5oZWlnaHQ7XHJcbiAgICB0aGlzLndvcmxkUmF0aW8gPSB0aGlzLmdhbWUud29ybGQud2lkdGggLyB0aGlzLmdhbWUud29ybGQuaGVpZ2h0O1xyXG4gICAgaWYgKCgodGhpcy53b3JsZFJhdGlvIC0gdGhpcy5iZ1JhdGlvKSAvIDIgKiB0aGlzLmdhbWUud29ybGQud2lkdGgpID4gMCkge1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQvdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUuaGVpZ2h0KnRoaXMuYmFja2dyb3VuZC50ZXh0dXJlLndpZHRoO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQgPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC54ID0gKHRoaXMuZ2FtZS53b3JsZC53aWR0aCAtIHRoaXMuYmFja2dyb3VuZC53aWR0aCkgLyAyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQud2lkdGggPSB0aGlzLmdhbWUud29ybGQud2lkdGg7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aC90aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aCp0aGlzLmJhY2tncm91bmQudGV4dHVyZS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnkgPSAodGhpcy5nYW1lLndvcmxkLmhlaWdodCAtIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQpIC8gMjtcclxuICAgIH1cclxuXHJcbiAgICAvL2FkZCBpbnRybyB0ZXh0XHJcbiAgICB0aGlzLmdhbWVvdmVyVGV4dCA9IHRoaXMuYWRkLnRleHQodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsdGhpcy5nYW1lLndvcmxkLmNlbnRlclksIFwiU2NvcmUgPSBcIit0aGlzLmdhbWUuZ2xvYmFsLnNjb3JlLCB7XHJcbiAgICAgIGZvbnQ6ICc0MnB4IEFyaWFsJywgZmlsbDogJyNmZmZmZmYnLCBhbGlnbjogJ2NlbnRlcidcclxuICAgIH0pO1xyXG4gICAgdGhpcy5nYW1lb3ZlclRleHQuYW5jaG9yLnNldCgwLjUpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub25Eb3duLmFkZCh0aGlzLm9uSW5wdXREb3duLCB0aGlzKTtcclxuXHJcbiAgICAvL3ByZXZlbnQgYWNjaWRlbnRhbCBjbGljay10aHJ1IGJ5IG5vdCBhbGxvd2luZyBzdGF0ZSB0cmFuc2l0aW9uIGZvciBhIHNob3J0IHRpbWVcclxuICAgIHRoaXMuY2FuQ29udGludWVUb05leHRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChQaGFzZXIuVGltZXIuU0VDT05EICogMC41LCBmdW5jdGlvbigpeyB0aGlzLmNhbkNvbnRpbnVlVG9OZXh0U3RhdGUgPSB0cnVlOyB9LCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLnNhdmVWYXJzVG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgIHRoaXMucmVzZXRHbG9iYWxWYXJpYWJsZXMoKTtcclxuICB9XHJcblxyXG4gIHNhdmVWYXJzVG9Mb2NhbFN0b3JhZ2UoKXtcclxuICAgIHZhciBtYXggPSBsb2NhbFN0b3JhZ2UubWF4U2NvcmUgfHwgMDsgLy9kZWZhdWx0IHZhbHVlIG9mIDAgaXMgaXQgZG9lcyBub3QgZXhpc3RcclxuICAgIGlmICh0aGlzLmdhbWUuZ2xvYmFsLnNjb3JlID4gbWF4KXsgbG9jYWxTdG9yYWdlLm1heFNjb3JlID0gdGhpcy5nYW1lLmdsb2JhbC5zY29yZTsgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRHbG9iYWxWYXJpYWJsZXMoKXtcclxuICAgIHRoaXMuZ2FtZS5nbG9iYWwuc2NvcmUgPSAwO1xyXG4gIH1cclxuICB1cGRhdGUoKSB7fVxyXG5cclxuICBvbklucHV0RG93biAoKSB7XHJcbiAgICBpZih0aGlzLmNhbkNvbnRpbnVlVG9OZXh0U3RhdGUpe1xyXG4gICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ21lbnUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51O1xyXG4iLCJjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmFzc2V0ID0gbnVsbDtcclxuICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByZWxvYWQoKSB7XHJcbiAgICAvL3NldHVwIGxvYWRpbmcgYmFyXHJcbiAgICB0aGlzLmFzc2V0ID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53aWR0aCAqIDAuNSAtIDExMCwgdGhpcy5nYW1lLmhlaWdodCAqIDAuNSAtIDEwLCAncHJlbG9hZGVyJyk7XHJcbiAgICB0aGlzLmxvYWQuc2V0UHJlbG9hZFNwcml0ZSh0aGlzLmFzc2V0KTtcclxuICAgIFxyXG4gICAgLy9TZXR1cCBsb2FkaW5nIGFuZCBpdHMgZXZlbnRzXHJcbiAgICB0aGlzLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLm9uTG9hZENvbXBsZXRlLCB0aGlzKTtcclxuICAgIHRoaXMubG9hZFJlc291cmNlcygpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFJlc291cmNlcygpIHtcclxuICAgICAgXHJcbiAgICAvL01FTlUgUkVTT1VSQ0VTXHJcbiAgICAvL21lbnUgYmFja2dyb3VuZFxyXG4gICAgLy90ZXh0IGltYWdlc1xyXG4gICAgLy9tdXNpYyBmaWxlcyA/XHJcbi8vICBMb2FkIGZpbHRlciBzY3JpcHRzXHJcbiAgICB0aGlzLmdhbWUubG9hZC5zY3JpcHQoJ2dyYXknLCAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9waG90b25zdG9ybS9waGFzZXIvbWFzdGVyL3YyL2ZpbHRlcnMvR3JheS5qcycpO1xyXG5cclxuICAgIFxyXG4gICAgLy9sb2FkIGdhbWUgZGF0YVxyXG4gICAgdGhpcy5nYW1lLmxvYWQuanNvbigndGlsZURldGFpbCcsICdhc3NldHMvdGlsZURldGFpbC5qc29uJyk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5qc29uKCd3YWxsR3JpZCcsICdhc3NldHMvd2FsbEdyaWQuanNvbicpO1xyXG4gIFxyXG4gICAgLy9HQU1FIFJFU09VUkNFU1xyXG4gICAgLy9nYW1lIGJvYXJkIGJhY2tncm91bmRcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdiYWNrZ3JvdW5kJywnYXNzZXRzL21lZGl1bV9ib2FyZC5wbmcnKTtcclxuICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdkaWNlJywnYXNzZXRzL2RpY2UucG5nJywgMTI4LCAxOTQsIDEwKTtcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdodWQtYmcnLCdhc3NldHMvaHVkLWJnLnBuZycpO1xyXG4gICAgXHJcbiAgICAvLyBtb2RhbCBpbWFnZXNcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X3llcycsJ2Fzc2V0cy90ZXh0X3llcy5wbmcnKTtcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X25vJywnYXNzZXRzL3RleHRfbm8ucG5nJyk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9nbycsJ2Fzc2V0cy90ZXh0X2dvLnBuZycpO1xyXG5cclxuICAgIC8vcGxheWVyIHRva2VucyBzcHJpdGVzaGVldHNcclxuICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdjbG9uZScsICdhc3NldHMvY2xvbmUucG5nJywgMTEwLCAxNjgpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ29yZG5hbmNlJywgJ2Fzc2V0cy9vcmRuYW5jZS5wbmcnLDI2NCwgMjY0LCA3KTtcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmF0bGFzKCdib29tJywgJ2Fzc2V0cy9ib29tLnBuZycsICdhc3NldHMvYm9vbS5qc29uJywgUGhhc2VyLkxvYWRlci5URVhUVVJFX0FUTEFTX0pTT05fSEFTSCk7XHJcblxyXG4gICAgLy9hdWRpbyBmaWxlcyBcclxuICAgIFxyXG4gICAgLy90aGlzLmdhbWUubG9hZC5pbWFnZSgnY3Jvc3NoYWlycycsICdhc3NldHMvY3Jvc3NoYWlyX3JlZF9zbWFsbC5wbmcnKTtcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X2dvJywgJ2Fzc2V0cy90ZXh0X2dvLnBuZycpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfcmVhZHknLCAnYXNzZXRzL3RleHRfcmVhZHkucG5nJyk7XHJcblxyXG4gICAgLy90aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgndGFyZ2V0JywgJ2Fzc2V0cy90YXJnZXQucG5nJywxMjguNjYsMTI4KTtcclxuXHJcbiAgICAvL3RoaXMuZ2FtZS5sb2FkLmF1ZGlvKCdndW5zaG90JywnYXNzZXRzL2d1bnNob3Qud2F2Jyk7XHJcbiAgICAvL3RoaXMuZ2FtZS5sb2FkLmF1ZGlvKCdkaW5nJywnYXNzZXRzL2Rpbmcud2F2Jyk7XHJcbiAgfVxyXG5cclxuICBvbkxvYWRDb21wbGV0ZSgpIHtcclxuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnc2V0dXAnKTtcclxuICAgIC8vdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmVsb2FkZXI7XHJcbiIsImNsYXNzIFNldHVwIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gfVxyXG4gIFxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIHRoaXMuZ2FtZS5uYW1lID0gXCJ1c2VyXCI7XHJcblxyXG4gICAgdGhpcy5nYW1lLnN0YWdlLmRpc2FibGVWaXNpYmlsaXR5Q2hhbmdlID0gdHJ1ZTtcclxuICAgIHRoaXMuZ2FtZS5tb2RhbCA9IG5ldyBnYW1lTW9kYWwodGhpcy5nYW1lKTtcclxuICAgIHRoaXMuY3JlYXRlTW9kYWxzKCk7XHJcbiAgICB0aGlzLmdhbWUubW9kYWwuc2hvd01vZGFsKCd1c2VybmFtZScpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRDYWxsYmFja3ModGhpcywgbnVsbCwgbnVsbCwgdGhpcy5rZXlQcmVzcyk7XHJcbiAgICB0aGlzLmJrc3AgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5LZXlib2FyZC5CQUNLU1BBQ0UpO1xyXG4gICAgdGhpcy5ia3NwLm9uRG93bi5hZGQodGhpcy5rZXlQcmVzcywgdGhpcyk7XHJcbiAgICB0aGlzLmVudGVyID0gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuS2V5Ym9hcmQuRU5URVIpO1xyXG4gICAgdGhpcy5lbnRlci5vbkRvd24uYWRkKHRoaXMua2V5UHJlc3MsIHRoaXMpO1xyXG4gICAgdGhpcy5nYW1lLmNsaWVudC5hc2tOZXdQbGF5ZXIoKTtcclxuXHJcbiAgICAvL3RoaXMuZ2FtZS5zZXB0aWtvbi5zZXR1cCgpO1xyXG59XHJcblxyXG5rZXlQcmVzcyhjaGFyKSB7XHJcblxyXG4gICAgaWYodHlwZW9mKGNoYXIpID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgaWYgKGNoYXIuZXZlbnQuY29kZSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyLmV2ZW50LmNvZGUgPT09IFwiQmFja3NwYWNlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLm5hbWUgPSB0aGlzLmdhbWUubmFtZS5zdWJzdHJpbmcoMCwgdGhpcy5nYW1lLm5hbWUubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY2hhciA9PSBcIiBcIikge1xyXG4gICAgICAgICAgICBjaGFyID0gXCJfXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZS5uYW1lICs9IGNoYXI7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdhbWUubW9kYWwudXBkYXRlTW9kYWxWYWx1ZSh0aGlzLmdhbWUubmFtZSwgJ3VzZXJuYW1lJywgNCk7XHJcbn1cclxuICBcclxuICBjcmVhdGVNb2RhbHMoKSB7XHJcbiAgXHJcbiAgICAvLyBTdGFydCBHYW1lXHJcbiAgICB0aGlzLmdhbWUubW9kYWwuY3JlYXRlTW9kYWwoXHJcbiAgICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwidXNlcm5hbWVcIixcclxuICAgICAgICBpbmNsdWRlQmFja2dyb3VuZDogdHJ1ZSxcclxuICAgICAgICBtb2RhbENsb3NlT25JbnB1dDogdHJ1ZSxcclxuICAgICAgICBpdGVtc0FycjogW3tcclxuICAgICAgICAgICAgdHlwZTogXCJncmFwaGljc1wiLFxyXG4gICAgICAgICAgICBncmFwaGljQ29sb3I6IFwiMHhmZmZmZmZcIixcclxuICAgICAgICAgICAgZ3JhcGhpY1dpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgIGdyYXBoaWNIZWlnaHQ6IDMwMCxcclxuICAgICAgICAgICAgZ3JhcGhpY1JhZGl1czogNDBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiBcIlR5cGUgYSB1c2VybmFtZSxcXG50aGVuIGhpdCA8RU5URVI+XFxuXFxuKG1heCBvZiAyNSBjaGFyYWN0ZXJzKVwiLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkx1Y2tpZXN0IEd1eVwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMjIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIjB4MWUxZTFlXCIsXHJcbiAgICAgICAgICAgIG9mZnNldFk6IC01MFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuZ2FtZS5uYW1lLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkx1Y2tpZXN0IEd1eVwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMjIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIjB4MWUxZTFlXCIsXHJcbiAgICAgICAgICAgIG9mZnNldFk6IDUwXHJcbiAgICAgICAgfSwgXVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dXA7XHJcbiJdfQ==
