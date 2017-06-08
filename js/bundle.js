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
        key: "removePersonnel",
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
        key: "damageTile",
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

                                    // TODO: THis is dirty code to test gunner selection
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

                    // TODO: deal the damage.
                    // TODO: consume resources.
                    // TODO: Emit to clients
                    // TODO: If targets are required (ie espionage) send that array now.
                    // TODO: Advance turnstate (calculate if further turnstate are needed. This could be end of turn.)

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
                switch (weaponTile) {
                    case "laser":
                        var impacted = false;
                        var laserPoint = { x: gunnerArray[i].x, y: gunnerArray[i].y };
                        var currentTile;
                        var currentOccupant;
                        while (impacted === false) {
                            if (this.activePlayer.id == 1) {
                                laserPoint.x++;
                            } else {
                                laserPoint.x--;
                            }
                            currentTile = this.getTile(laserPoint.x, laserPoint.y);
                            switch (currentTile.name) {
                                case "space":
                                case "surface":
                                    if (currentTile.occupied === true) {
                                        currentOccupant = this.getTileOccupant(laserPoint);
                                        // TODO: destroy occupant. This will wait on sats and shields and rockets.
                                        currentTile.occupied = false;
                                        impacted = true;
                                        break;
                                    }
                                    break;
                                default:
                                    // You are in the opponent mine.
                                    if (currentTile.occupied === true) {
                                        currentOccupant = this.getTileOccupant(laserPoint);
                                        this.activePlayer.removePersonnel(currentOccupant);
                                        // TODO: emit death animation to clients.
                                        this.emit('action', { callback: "removePersonnel", details: currentOccupant }, this.activePlayer.socketID);
                                        currentTile.occupied = false;
                                        impacted = true;
                                        break;
                                    }
                                    if (currentTile.damaged === true) {
                                        break;
                                    } else {
                                        currentTile.damaged = true;
                                        this.emit('action', { callback: "damageTile", details: laserPoint }, this.activePlayer.socketID);
                                        impacted = true;
                                        break;
                                    }
                            }
                        }
                        break;
                    default:
                        console.error("There is a problem with that weaponTile argument");
                }
            }
            return;
            // switch (weaponTile.name) {
            //     case "shield":
            //     case "biodrone":
            //     case "thermite":
            //     case "satellite":
            //     case "rocket":
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvdGlsZURldGFpbC5qc29uIiwiYXNzZXRzL3dhbGxHcmlkLmpzb24iLCJub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsInNyY1xcbWFpbi5qcyIsInNyY1xcbW9kYWwuanMiLCJzcmNcXHByZWZhYnNcXGNsaWVudC5qcyIsInNyY1xccHJlZmFic1xcY2xvbmUuanMiLCJzcmNcXHByZWZhYnNcXGNyb3NzaGFpcnMuanMiLCJzcmNcXHByZWZhYnNcXGRpY2UuanMiLCJzcmNcXHByZWZhYnNcXG1hc3Rlci5qcyIsInNyY1xccHJlZmFic1xcb3JkbmFuY2UuanMiLCJzcmNcXHByZWZhYnNcXHBlcnNvbm5lbC5qcyIsInNyY1xccHJlZmFic1xccmVzb3VyY2VzLmpzIiwic3JjXFxwcmVmYWJzXFxzZXB0aWtvbi5qcyIsInNyY1xccHJlZmFic1xcdGVhbS5qcyIsInNyY1xcc2VydmVyXFxvcmRuYW5jZS5qcyIsInNyY1xcc2VydmVyXFxwZXJzb25uZWwuanMiLCJzcmNcXHNlcnZlclxccGxheWVyLmpzIiwic3JjXFxzZXJ2ZXJcXHJlc291cmNlLmpzIiwic3JjXFxzZXJ2ZXJcXHNlcHRpa29uLmpzIiwic3JjXFxzdGF0ZXNcXGJvb3QuanMiLCJzcmNcXHN0YXRlc1xcZ2FtZS5qcyIsInNyY1xcc3RhdGVzXFxnYW1lb3Zlci5qcyIsInNyY1xcc3RhdGVzXFxwcmVsb2FkZXIuanMiLCJzcmNcXHN0YXRlc1xcc2V0dXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0JBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFHLE9BQU8sT0FBUCxLQUFvQixXQUF2QixFQUFvQztBQUNoQyxRQUFH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QVYsQ0FBZ0IsZ0JBQWhCLENBQWlDLEtBQUssSUFBTCxDQUFVLElBQTNDLEVBQWlELFVBQWpELEVBQTZELENBQTdEO0FBQ0g7Ozt1Q0FFZ0I7O0FBRWI7QUFDQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixXQUFoQixDQUNJO0FBQ0Esc0JBQU0sVUFETjtBQUVBLG1DQUFtQixJQUZuQjtBQUdBLG1DQUFtQixJQUhuQjtBQUlBLDBCQUFVLENBQUM7QUFDUCwwQkFBTSxVQURDO0FBRVAsa0NBQWMsVUFGUDtBQUdQLGtDQUFjLEdBSFA7QUFJUCxtQ0FBZSxHQUpSO0FBS1AsbUNBQWU7QUFMUixpQkFBRCxFQU1QO0FBQ0MsMEJBQU0sTUFEUDtBQUVDLDZCQUFTLDhEQUZWO0FBR0MsZ0NBQVksY0FIYjtBQUlDLDhCQUFVLEVBSlg7QUFLQywyQkFBTyxVQUxSO0FBTUMsNkJBQVMsQ0FBQztBQU5YLGlCQU5PLEVBYVA7QUFDQywwQkFBTSxNQURQO0FBRUMsNkJBQVMsS0FBSyxJQUFMLENBQVUsSUFGcEI7QUFHQyxnQ0FBWSxjQUhiO0FBSUMsOEJBQVUsRUFKWDtBQUtDLDJCQUFPLFVBTFI7QUFNQyw2QkFBUztBQU5WLGlCQWJPO0FBSlYsYUFESjtBQTRCRDs7OztFQXpFaUIsT0FBTyxLOztrQkE0RVosSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cz17XHJcblx0XCJ0aWxlUHJvcGVydHlBcnJheVwiOiB7XHJcblx0XHRcIm90aGVyU3BhY2VcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDAwXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInNwYWNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInNwYWNlXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjksMFwiLCBcIjksMVwiLCBcIjksMlwiLCBcIjksM1wiLCBcIjksNFwiLCBcIjksNVwiLCBcIjksNlwiLCBcIjksN1wiLCBcIjksOFwiLCBcIjksOVwiLCBcIjksMTBcIiwgXCI5LDExXCIsIFwiOSwxMlwiLCBcIjksMTNcIiwgXCI5LDE0XCIsIFwiOSwxNVwiLCBcIjksMTZcIiwgXCI5LDE3XCIsIFwiOSwxOFwiLCBcIjksMTlcIiwgXCI5LDIwXCIsIFwiMTAsMFwiLCBcIjEwLDFcIiwgXCIxMCwyXCIsIFwiMTAsM1wiLCBcIjEwLDRcIiwgXCIxMCw1XCIsIFwiMTAsNlwiLCBcIjEwLDdcIiwgXCIxMCw4XCIsIFwiMTAsOVwiLCBcIjEwLDEwXCIsIFwiMTAsMTFcIiwgXCIxMCwxMlwiLCBcIjEwLDEzXCIsIFwiMTAsMTRcIiwgXCIxMCwxNVwiLCBcIjEwLDE2XCIsIFwiMTAsMTdcIiwgXCIxMCwxOFwiLCBcIjEwLDE5XCIsIFwiMTAsMjBcIiwgXCIxMSwwXCIsIFwiMTEsMVwiLCBcIjExLDJcIiwgXCIxMSwzXCIsIFwiMTEsNFwiLCBcIjExLDVcIiwgXCIxMSw2XCIsIFwiMTEsN1wiLCBcIjExLDhcIiwgXCIxMSw5XCIsIFwiMTEsMTBcIiwgXCIxMSwxMVwiLCBcIjExLDEyXCIsIFwiMTEsMTNcIiwgXCIxMSwxNFwiLCBcIjExLDE1XCIsIFwiMTEsMTZcIiwgXCIxMSwxN1wiLCBcIjExLDE4XCIsIFwiMTEsMTlcIiwgXCIxMSwyMFwiLCBcIjEyLDBcIiwgXCIxMiwxXCIsIFwiMTIsMlwiLCBcIjEyLDNcIiwgXCIxMiw0XCIsIFwiMTIsNVwiLCBcIjEyLDZcIiwgXCIxMiw3XCIsIFwiMTIsOFwiLCBcIjEyLDlcIiwgXCIxMiwxMFwiLCBcIjEyLDExXCIsIFwiMTIsMTJcIiwgXCIxMiwxM1wiLCBcIjEyLDE0XCIsIFwiMTIsMTVcIiwgXCIxMiwxNlwiLCBcIjEyLDE3XCIsIFwiMTIsMThcIiwgXCIxMiwxOVwiLCBcIjEyLDIwXCIsIFwiMTMsMFwiLCBcIjEzLDFcIiwgXCIxMywyXCIsIFwiMTMsM1wiLCBcIjEzLDRcIiwgXCIxMyw1XCIsIFwiMTMsNlwiLCBcIjEzLDdcIiwgXCIxMyw4XCIsIFwiMTMsOVwiLCBcIjEzLDEwXCIsIFwiMTMsMTFcIiwgXCIxMywxMlwiLCBcIjEzLDEzXCIsIFwiMTMsMTRcIiwgXCIxMywxNVwiLCBcIjEzLDE2XCIsIFwiMTMsMTdcIiwgXCIxMywxOFwiLCBcIjEzLDE5XCIsIFwiMTMsMjBcIiwgXCIxNCwwXCIsIFwiMTQsMVwiLCBcIjE0LDJcIiwgXCIxNCwzXCIsIFwiMTQsNFwiLCBcIjE0LDVcIiwgXCIxNCw2XCIsIFwiMTQsN1wiLCBcIjE0LDhcIiwgXCIxNCw5XCIsIFwiMTQsMTBcIiwgXCIxNCwxMVwiLCBcIjE0LDEyXCIsIFwiMTQsMTNcIiwgXCIxNCwxNFwiLCBcIjE0LDE1XCIsIFwiMTQsMTZcIiwgXCIxNCwxN1wiLCBcIjE0LDE4XCIsIFwiMTQsMTlcIiwgXCIxNCwyMFwiLCBcIjE1LDBcIiwgXCIxNSwxXCIsIFwiMTUsMlwiLCBcIjE1LDNcIiwgXCIxNSw0XCIsIFwiMTUsNVwiLCBcIjE1LDZcIiwgXCIxNSw3XCIsIFwiMTUsOFwiLCBcIjE1LDlcIiwgXCIxNSwxMFwiLCBcIjE1LDExXCIsIFwiMTUsMTJcIiwgXCIxNSwxM1wiLCBcIjE1LDE0XCIsIFwiMTUsMTVcIiwgXCIxNSwxNlwiLCBcIjE1LDE3XCIsIFwiMTUsMThcIiwgXCIxNSwxOVwiLCBcIjE1LDIwXCIsIFwiMTYsMFwiLCBcIjE2LDFcIiwgXCIxNiwyXCIsIFwiMTYsM1wiLCBcIjE2LDRcIiwgXCIxNiw1XCIsIFwiMTYsNlwiLCBcIjE2LDdcIiwgXCIxNiw4XCIsIFwiMTYsOVwiLCBcIjE2LDEwXCIsIFwiMTYsMTFcIiwgXCIxNiwxMlwiLCBcIjE2LDEzXCIsIFwiMTYsMTRcIiwgXCIxNiwxNVwiLCBcIjE2LDE2XCIsIFwiMTYsMTdcIiwgXCIxNiwxOFwiLCBcIjE2LDE5XCIsIFwiMTYsMjBcIiwgXCIxNywwXCIsIFwiMTcsMVwiLCBcIjE3LDJcIiwgXCIxNywzXCIsIFwiMTcsNFwiLCBcIjE3LDVcIiwgXCIxNyw2XCIsIFwiMTcsN1wiLCBcIjE3LDhcIiwgXCIxNyw5XCIsIFwiMTcsMTBcIiwgXCIxNywxMVwiLCBcIjE3LDEyXCIsIFwiMTcsMTNcIiwgXCIxNywxNFwiLCBcIjE3LDE1XCIsIFwiMTcsMTZcIiwgXCIxNywxN1wiLCBcIjE3LDE4XCIsIFwiMTcsMTlcIiwgXCIxNywyMFwiLCBcIjE4LDBcIiwgXCIxOCwxXCIsIFwiMTgsMlwiLCBcIjE4LDNcIiwgXCIxOCw0XCIsIFwiMTgsNVwiLCBcIjE4LDZcIiwgXCIxOCw3XCIsIFwiMTgsOFwiLCBcIjE4LDlcIiwgXCIxOCwxMFwiLCBcIjE4LDExXCIsIFwiMTgsMTJcIiwgXCIxOCwxM1wiLCBcIjE4LDE0XCIsIFwiMTgsMTVcIiwgXCIxOCwxNlwiLCBcIjE4LDE3XCIsIFwiMTgsMThcIiwgXCIxOCwxOVwiLCBcIjE4LDIwXCIsIFwiMTksMFwiLCBcIjE5LDFcIiwgXCIxOSwyXCIsIFwiMTksM1wiLCBcIjE5LDRcIiwgXCIxOSw1XCIsIFwiMTksNlwiLCBcIjE5LDdcIiwgXCIxOSw4XCIsIFwiMTksOVwiLCBcIjE5LDEwXCIsIFwiMTksMTFcIiwgXCIxOSwxMlwiLCBcIjE5LDEzXCIsIFwiMTksMTRcIiwgXCIxOSwxNVwiLCBcIjE5LDE2XCIsIFwiMTksMTdcIiwgXCIxOSwxOFwiLCBcIjE5LDE5XCIsIFwiMTksMjBcIiwgXCIyMCwwXCIsIFwiMjAsMVwiLCBcIjIwLDJcIiwgXCIyMCwzXCIsIFwiMjAsNFwiLCBcIjIwLDVcIiwgXCIyMCw2XCIsIFwiMjAsN1wiLCBcIjIwLDhcIiwgXCIyMCw5XCIsIFwiMjAsMTBcIiwgXCIyMCwxMVwiLCBcIjIwLDEyXCIsIFwiMjAsMTNcIiwgXCIyMCwxNFwiLCBcIjIwLDE1XCIsIFwiMjAsMTZcIiwgXCIyMCwxN1wiLCBcIjIwLDE4XCIsIFwiMjAsMTlcIiwgXCIyMCwyMFwiLCBcIjIxLDBcIiwgXCIyMSwxXCIsIFwiMjEsMlwiLCBcIjIxLDNcIiwgXCIyMSw0XCIsIFwiMjEsNVwiLCBcIjIxLDZcIiwgXCIyMSw3XCIsIFwiMjEsOFwiLCBcIjIxLDlcIiwgXCIyMSwxMFwiLCBcIjIxLDExXCIsIFwiMjEsMTJcIiwgXCIyMSwxM1wiLCBcIjIxLDE0XCIsIFwiMjEsMTVcIiwgXCIyMSwxNlwiLCBcIjIxLDE3XCIsIFwiMjEsMThcIiwgXCIyMSwxOVwiLCBcIjIxLDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVUaGVybWl0ZVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMDFcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInRoZXJtaXRlXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImJpb21hc3NcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMl0sXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcclxuXHRcdFx0XHRcImFyZ3NcIjogXCJ0aGVybWl0ZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMjBcIiwgXCI3LDFcIiwgXCI3LDdcIiwgXCIyMywxM1wiLCBcIjIzLDE5XCIsIFwiMjQsMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlU2hpZWxkXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwMlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwic2hpZWxkXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxyXG5cdFx0XHRcdFwiYXJnc1wiOiBcInNoaWVsZFwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsNlwiLCBcIjYsMTNcIiwgXCI2LDE5XCIsIFwiNywyXCIsIFwiNywxMlwiLCBcIjIzLDhcIiwgXCIyMywxOFwiLCBcIjI0LDFcIiwgXCIyNCw3XCIsIFwiMjQsMTRcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZUJpb2Ryb25lXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwM1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiYmlvZHJvbmVcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvZHJvbmVcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcclxuXHRcdFx0XHRcImFyZ3NcIjogXCJiaW9kcm9uZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsNVwiLCBcIjcsM1wiLCBcIjcsMTVcIiwgXCIyMyw1XCIsIFwiMjMsMTdcIiwgXCIyNCwxNVwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlU2F0ZWxsaXRlXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwNFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwic2F0ZWxsaXRlXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm1ldGFsXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXHJcblx0XHRcdFx0XCJhcmdzXCI6IFwic2F0ZWxsaXRlXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwwXCIsIFwiNiwxNFwiLCBcIjcsNFwiLCBcIjcsMTdcIiwgXCIyMywzXCIsIFwiMjMsMTZcIiwgXCIyNCw2XCIsIFwiMjQsMjBcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZUxhc2VyXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwNVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwibGFzZXJcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXHJcblx0XHRcdFx0XCJhcmdzXCI6IFwibGFzZXJcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDNcIiwgXCI2LDdcIiwgXCI2LDhcIiwgXCI2LDEyXCIsIFwiNiwxNlwiLCBcIjcsNVwiLCBcIjcsNlwiLCBcIjcsOVwiLCBcIjcsMThcIiwgXCI3LDE5XCIsIFwiMjMsMVwiLCBcIjIzLDJcIiwgXCIyMywxMVwiLCBcIjIzLDE0XCIsIFwiMjMsMTVcIiwgXCIyNCw0XCIsIFwiMjQsOFwiLCBcIjI0LDEyXCIsIFwiMjQsMTNcIiwgXCIyNCwxN1wiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlUmVwYWlyXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAwNlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwicmVwYWlyXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm1ldGFsXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJyZXBhaXJcIixcclxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiAxXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMVwiLCBcIjYsMTBcIiwgXCI2LDE4XCIsIFwiNyw4XCIsIFwiNywxM1wiLCBcIjIzLDdcIiwgXCIyMywxMlwiLCBcIjI0LDJcIiwgXCIyNCwxMFwiLCBcIjI0LDE5XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVSb2NrZXRcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDA3XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJyb2NrZXRcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wicm9ja2V0XCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxyXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXHJcblx0XHRcdFx0XCJhcmdzXCI6IFwicm9ja2V0XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiw0XCIsIFwiNiwxMVwiLCBcIjcsMTBcIiwgXCI3LDE2XCIsIFwiMjMsNFwiLCBcIjIzLDEwXCIsIFwiMjQsOVwiLCBcIjI0LDE2XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJiYXR0bGVFc3Bpb25hZ2VcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDA4XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJlc3Bpb25hZ2VcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFszXSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZXNwaW9uYWdlXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwxNVwiLCBcIjcsMTFcIiwgXCIyMyw5XCIsIFwiMjQsNVwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlVGFrZW92ZXJcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDA5XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJ0YWtlb3ZlclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMl0sXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcInRha2VvdmVyXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwxN1wiLCBcIjcsMTRcIiwgXCIyMyw2XCIsIFwiMjQsM1wiXVxyXG5cdFx0fSxcclxuXHRcdFwiYmF0dGxlUmVwYWlyVHdvXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxMFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwicmVwYWlyVHdvXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiLCBcIm94eWdlblwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxXSxcclxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwicmVwYWlyXCIsXHJcblx0XHRcdFx0XCJhcmdzXCI6IDJcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiw5XCIsIFwiMjQsMTFcIl1cclxuXHRcdH0sXHJcblx0XHRcImJhdHRsZUNvdW50ZXJFc3Bpb25hZ2VcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDExXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJjb3VudGVyRXNwaW9uYWdlXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImJpb21hc3NcIiwgXCJveHlnZW5cIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMV0sXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImNvdW50ZXJcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDJcIiwgXCIyNCwxOFwiXVxyXG5cdFx0fSxcclxuXHRcdFwib3RoZXJTdXJmYWNlXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxMlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJzdXJmYWNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInN1cmZhY2VcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiOCwwXCIsIFwiOCwxXCIsIFwiOCwyXCIsIFwiOCwzXCIsIFwiOCw0XCIsIFwiOCw1XCIsIFwiOCw2XCIsIFwiOCw3XCIsIFwiOCw4XCIsIFwiOCw5XCIsIFwiOCwxMFwiLCBcIjgsMTFcIiwgXCI4LDEyXCIsIFwiOCwxM1wiLCBcIjgsMTRcIiwgXCI4LDE1XCIsIFwiOCwxNlwiLCBcIjgsMTdcIiwgXCI4LDE4XCIsIFwiOCwxOVwiLCBcIjgsMjBcIiwgXCIyMiwwXCIsIFwiMjIsMVwiLCBcIjIyLDJcIiwgXCIyMiwzXCIsIFwiMjIsNFwiLCBcIjIyLDVcIiwgXCIyMiw2XCIsIFwiMjIsN1wiLCBcIjIyLDhcIiwgXCIyMiw5XCIsIFwiMjIsMTBcIiwgXCIyMiwxMVwiLCBcIjIyLDEyXCIsIFwiMjIsMTNcIiwgXCIyMiwxNFwiLCBcIjIyLDE1XCIsIFwiMjIsMTZcIiwgXCIyMiwxN1wiLCBcIjIyLDE4XCIsIFwiMjIsMTlcIiwgXCIyMiwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwib3RoZXJMb2NrXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxM1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJsb2NrXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImxvY2tcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNywwXCIsIFwiNSwxMFwiLCBcIjEsMTBcIiwgXCI3LDIwXCIsIFwiMjMsMFwiLCBcIjIzLDIwXCIsIFwiMjUsMTBcIiwgXCIyOSwxMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwiYXJtb3J5RHJpbGxcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDE0XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImFybW9yeVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJkcmlsbFwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI0LDEwXCIsIFwiMjYsMTBcIl1cclxuXHRcdH0sXHJcblx0XHRcIkFybW9yeUNhbm5vblwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMTVcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwiYXJtb3J5XCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImNhbm5vblwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIzLDEwXCIsIFwiMjcsMTBcIl1cclxuXHRcdH0sXHJcblx0XHRcImFybW9yeUV4cGxvc2l2ZXNcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDE2XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcImFybW9yeVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJleHBsb3NpdmVzXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjIsMTBcIiwgXCIyOCwxMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwibGljaGVuXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxN1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImxpY2hlblwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwwXCIsIFwiMCwxMFwiLCBcIjAsMTdcIiwgXCIxLDJcIiwgXCIxLDhcIiwgXCIxLDE2XCIsIFwiMSwyMFwiLCBcIjI5LDBcIiwgXCIyOSw0XCIsIFwiMjksMTJcIiwgXCIyOSwxOFwiLCBcIjMwLDNcIiwgXCIzMCwxMFwiLCBcIjMwLDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uTGljaGVuVHdvXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxOFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImxpY2hlblR3b1wiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMl1cclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCw0XCIsIFwiMzAsMTZcIl1cclxuXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uQ2hlbWljYWxSZWFjdG9yXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAxOVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImNoZW1pY2FsUmVhY3RvclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJiaW9tYXNzXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wib3h5Z2VuXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsxXVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIxLDFcIiwgXCIxLDlcIiwgXCIyOSwxOVwiLCBcIjI5LDExXCJdXHJcblxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbkNoZW1pY2FsUmVhY3RvclR3b1wiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjBcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJjaGVtaWNhbFJlYWN0b3JUd29cIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsyXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcIm94eWdlblwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMl1cclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCw1XCIsIFwiMzAsMTVcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25BaXJGaWx0ZXJcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDIxXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiYWlyRmlsdGVyXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm94eWdlblwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsyXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcIm94eWdlblwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbM11cclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxNVwiLCBcIjEsMTFcIiwgXCIyOSw5XCIsIFwiMzAsNVwiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbkJpb2NvbGxlY3RvclwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjJcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJiaW9jb2xsZWN0b3JcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wib3h5Z2VuXCIsIFwiYmlvbWFzc1wiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcImJpb2Ryb25lXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsxXVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDE0XCIsIFwiMCwxOFwiLCBcIjEsNlwiLCBcIjEsMTdcIiwgXCIzMCw2XCIsIFwiMzAsMlwiLCBcIjI5LDE0XCIsIFwiMjksM1wiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvblVyYW5pdW1NaW5lXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyM1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInVyYW5pdW1NaW5lXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm94eWdlblwiLCBcImVuZXJneVwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcInVyYW5pdW1cIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzFdXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMlwiLCBcIjAsNlwiLCBcIjEsM1wiLCBcIjMwLDE4XCIsIFwiMzAsMTRcIiwgXCIyOSwxN1wiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvbk51Y2xlYXJSZWFjdG9yXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyNFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcIm51Y2xlYXJSZWFjdG9yXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcInVyYW5pdW1cIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJlbmVyZ3lcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzNdXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsOVwiLCBcIjAsMTZcIiwgXCIxLDdcIiwgXCIxLDE0XCIsIFwiMSwxOVwiLCBcIjMwLDExXCIsIFwiMzAsNFwiLCBcIjI5LDEzXCIsIFwiMjksNlwiLCBcIjI5LDFcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25UaGVybWFsR2VuZXJhdG9yXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyNVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInRoZXJtYWxHZW5lcmF0b3JcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcImVuZXJneVwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxMlwiLCBcIjMwLDhcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25Gb3VuZHJ5XCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyNlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImZvdW5kcnlcIixcclxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wibWV0YWxcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzFdXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsM1wiLCBcIjAsMTFcIiwgXCIwLDE5XCIsIFwiMSwxM1wiLCBcIjMwLDE3XCIsIFwiMzAsOVwiLCBcIjMwLDFcIiwgXCIyOSw3XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uRm91bmRyeVR3b1wiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMjdcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJmb3VuZHJ5VHdvXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsyXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcIm1ldGFsXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsyXVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIxLDBcIiwgXCIyOSwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvblJvY2tldFdvcmtzaG9wXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyOFwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInJvY2tldFdvcmtzaG9wXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcInJvY2tldFwiXSxcclxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxXCIsIFwiMCw3XCIsIFwiMSw1XCIsIFwiMSwxMlwiLCBcIjEsMTVcIiwgXCIzMCwxOVwiLCBcIjMwLDEzXCIsIFwiMjksMTVcIiwgXCIyOSw4XCIsIFwiMjksNVwiXVxyXG5cdFx0fSxcclxuXHRcdFwicHJvZHVjdGlvblNlbnNvckNhYmluXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAyOVwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInNlbnNvckNhYmluXCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImtpbGxCaW9kcm9uZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMTNcIiwgXCIzMCw3XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJwcm9kdWN0aW9uTnVjbGVhckFybW9yeVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzBcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJudWNsZWFyQXJtb3J5XCIsXHJcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm94eWdlblwiLCBcImVuZXJneVwiLCBcInVyYW5pdW1cIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMSwgMV0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJudWtlXCJdLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsxXVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDIwXCIsIFwiMSw0XCIsIFwiMSwxOFwiLCBcIjMwLDBcIiwgXCIyOSwxNlwiLCBcIjI5LDJcIl1cclxuXHRcdH0sXHJcblx0XHRcInByb2R1Y3Rpb25SZXBhaXJcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDMxXCIsXHJcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcclxuXHRcdFx0XCJuYW1lXCI6IFwicHJvZFJlcGFpclwiLFxyXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxyXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIl0sXHJcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXHJcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcInJlcGFpclwiLFxyXG5cdFx0XHRcdFwidGlsZVRhcmdldElEXCI6IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCw4XCIsIFwiMzAsMTJcIl1cclxuXHRcdH0sXHJcblx0XHRcInJlc291cmNlT3h5Z2VuXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAzMlwiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwib3h5Z2VuXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjUsMFwiLCBcIjUsMVwiLCBcIjUsMlwiLCBcIjUsM1wiLCBcIjUsNFwiLCBcIjUsNVwiLCBcIjUsNlwiLCBcIjUsN1wiLCBcIjUsOFwiLCBcIjUsOVwiLCBcIjI1LDExXCIsIFwiMjUsMTJcIiwgXCIyNSwxM1wiLCBcIjI1LDE0XCIsIFwiMjUsMTVcIiwgXCIyNSwxNlwiLCBcIjI1LDE3XCIsIFwiMjUsMThcIiwgXCIyNSwxOVwiLCBcIjI1LDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJyZXNvdXJjZVJvY2tldFwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzNcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInJvY2tldFwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI0LDBcIiwgXCI0LDFcIiwgXCI0LDJcIiwgXCI0LDNcIiwgXCI0LDRcIiwgXCI0LDVcIiwgXCI0LDZcIiwgXCI0LDdcIiwgXCI0LDhcIiwgXCI0LDlcIiwgXCIyNiwxMVwiLCBcIjI2LDEyXCIsIFwiMjYsMTNcIiwgXCIyNiwxNFwiLCBcIjI2LDE1XCIsIFwiMjYsMTZcIiwgXCIyNiwxN1wiLCBcIjI2LDE4XCIsIFwiMjYsMTlcIiwgXCIyNiwyMFwiXVxyXG5cdFx0fSxcclxuXHRcdFwicmVzb3VyY2VNZXRhbFwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzRcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcIm1ldGFsXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjMsMFwiLCBcIjMsMVwiLCBcIjMsMlwiLCBcIjMsM1wiLCBcIjMsNFwiLCBcIjMsNVwiLCBcIjMsNlwiLCBcIjMsN1wiLCBcIjMsOFwiLCBcIjMsOVwiLCBcIjI3LDExXCIsIFwiMjcsMTJcIiwgXCIyNywxM1wiLCBcIjI3LDE0XCIsIFwiMjcsMTVcIiwgXCIyNywxNlwiLCBcIjI3LDE3XCIsIFwiMjcsMThcIiwgXCIyNywxOVwiLCBcIjI3LDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJyZXNvdXJjZUVuZXJneVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzVcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcImVuZXJneVwiLFxyXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIyLDBcIiwgXCIyLDFcIiwgXCIyLDJcIiwgXCIyLDNcIiwgXCIyLDRcIiwgXCIyLDVcIiwgXCIyLDZcIiwgXCIyLDdcIiwgXCIyLDhcIiwgXCIyLDlcIiwgXCIyLDExXCIsIFwiMiwxMlwiLCBcIjIsMTNcIiwgXCIyLDE0XCIsIFwiMiwxNVwiLCBcIjIsMTZcIiwgXCIyLDE3XCIsIFwiMiwxOFwiLCBcIjIsMTlcIiwgXCIyLDIwXCIsIFwiMjgsMFwiLCBcIjI4LDFcIiwgXCIyOCwyXCIsIFwiMjgsM1wiLCBcIjI4LDRcIiwgXCIyOCw1XCIsIFwiMjgsNlwiLCBcIjI4LDdcIiwgXCIyOCw4XCIsIFwiMjgsOVwiLCBcIjI4LDExXCIsIFwiMjgsMTJcIiwgXCIyOCwxM1wiLCBcIjI4LDE0XCIsIFwiMjgsMTVcIiwgXCIyOCwxNlwiLCBcIjI4LDE3XCIsIFwiMjgsMThcIiwgXCIyOCwxOVwiLCBcIjI4LDIwXCJdXHJcblx0XHR9LFxyXG5cdFx0XCJyZXNvdXJjZUJpb21hc3NcIjoge1xyXG5cdFx0XHRcImlkXCI6IFwiMDM2XCIsXHJcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxyXG5cdFx0XHRcIm5hbWVcIjogXCJiaW9tYXNzXCIsXHJcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjUsMTFcIiwgXCI1LDEyXCIsIFwiNSwxM1wiLCBcIjUsMTRcIiwgXCI1LDE1XCIsIFwiNSwxNlwiLCBcIjUsMTdcIiwgXCI1LDE4XCIsIFwiNSwxOVwiLCBcIjUsMjBcIiwgXCIyNSwwXCIsIFwiMjUsMVwiLCBcIjI1LDJcIiwgXCIyNSwzXCIsIFwiMjUsNFwiLCBcIjI1LDVcIiwgXCIyNSw2XCIsIFwiMjUsN1wiLCBcIjI1LDhcIiwgXCIyNSw5XCJdXHJcblx0XHR9LFxyXG5cdFx0XCJyZXNvdXJjZUJpb2Ryb25lXCI6IHtcclxuXHRcdFx0XCJpZFwiOiBcIjAzN1wiLFxyXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcclxuXHRcdFx0XCJuYW1lXCI6IFwiYmlvZHJvbmVcIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNCwxMVwiLCBcIjQsMTJcIiwgXCI0LDEzXCIsIFwiNCwxNFwiLCBcIjQsMTVcIiwgXCI0LDE2XCIsIFwiNCwxN1wiLCBcIjQsMThcIiwgXCI0LDE5XCIsIFwiNCwyMFwiLCBcIjI2LDBcIiwgXCIyNiwxXCIsIFwiMjYsMlwiLCBcIjI2LDNcIiwgXCIyNiw0XCIsIFwiMjYsNVwiLCBcIjI2LDZcIiwgXCIyNiw3XCIsIFwiMjYsOFwiLCBcIjI2LDlcIl1cclxuXHRcdH0sXHJcblx0XHRcInJlc291cmNlVXJhbml1bVwiOiB7XHJcblx0XHRcdFwiaWRcIjogXCIwMzhcIixcclxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXHJcblx0XHRcdFwibmFtZVwiOiBcInVyYW5pdW1cIixcclxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMywxMVwiLCBcIjMsMTJcIiwgXCIzLDEzXCIsIFwiMywxNFwiLCBcIjMsMTVcIiwgXCIzLDE2XCIsIFwiMywxN1wiLCBcIjMsMThcIiwgXCIzLDE5XCIsIFwiMywyMFwiLCBcIjI3LDBcIiwgXCIyNywxXCIsIFwiMjcsMlwiLCBcIjI3LDNcIiwgXCIyNyw0XCIsIFwiMjcsNVwiLCBcIjI3LDZcIiwgXCIyNyw3XCIsIFwiMjcsOFwiLCBcIjI3LDlcIl1cclxuXHRcdH1cclxuXHR9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cz17XHJcblx0XCJncmlkXCI6IFtcclxuXHRcdFs5LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTJdLFxyXG5cdFx0WzMsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDgsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDZdLFxyXG5cdFx0WzExLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA1LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxNF0sXHJcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcclxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxyXG5cdFx0WzExLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA1LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxNF0sXHJcblx0XHRbOSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMiwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTJdLFxyXG5cdFx0WzEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA0XSxcclxuXHRcdFszLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNl0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXHJcblx0XHRbMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgNF0sXHJcblx0XHRbMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDRdLFxyXG5cdFx0WzMsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDgsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDZdLFxyXG5cdFx0WzExLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA1LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxNF0sXHJcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcclxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxyXG5cdFx0WzExLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA1LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxNF0sXHJcblx0XHRbOSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMiwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTJdLFxyXG5cdFx0WzMsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA2XVxyXG5cdF1cclxufSIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIHJldHVybiAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cbnZhciBybmc7XG5cbnZhciBjcnlwdG8gPSBnbG9iYWwuY3J5cHRvIHx8IGdsb2JhbC5tc0NyeXB0bzsgLy8gZm9yIElFIDExXG5pZiAoY3J5cHRvICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgcm5nID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn1cblxuaWYgKCFybmcpIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuICBybmcgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBybmc7XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PSAnYmluYXJ5JyA/IG5ldyBBcnJheSgxNikgOiBudWxsO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDE2OyArK2lpKSB7XG4gICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYgfHwgYnl0ZXNUb1V1aWQocm5kcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjQ7XG4iLCJpbXBvcnQgQ2xpZW50IGZyb20gJy4vcHJlZmFicy9jbGllbnQnO1xyXG5pbXBvcnQgQm9vdCBmcm9tICcuL3N0YXRlcy9ib290JztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9zdGF0ZXMvZ2FtZSc7XHJcbmltcG9ydCBTZXR1cCBmcm9tICcuL3N0YXRlcy9zZXR1cCc7XHJcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnLi9zdGF0ZXMvcHJlbG9hZGVyJztcclxuaW1wb3J0IEdhbWVvdmVyIGZyb20gJy4vc3RhdGVzL2dhbWVvdmVyJztcclxuaW1wb3J0IFNlcHRpa29uIGZyb20gJy4vcHJlZmFicy9zZXB0aWtvbic7XHJcblxyXG5pZih0eXBlb2YoU3RvcmFnZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXB0VVVJRCcpICE9PSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgdXVpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXB0VVVJRCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB1dWlkID0gcmVxdWlyZSgndXVpZC92NCcpKCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlcHRVVUlEJywgdXVpZCk7XHJcbiAgICB9XHJcbn0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiTG9jYWwgU3RvcmFnZSBpcyByZXF1aXJlZCFcIik7XHJcbn1cclxuXHJcbi8vIGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCwgUGhhc2VyLkFVVE8sICdwaGFzZXItdGVzdC1nYW1lJyk7XHJcbmNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoXCIxMDBcIiwgXCIxMDBcIiwgUGhhc2VyLkFVVE8pO1xyXG5nYW1lLnNlcHRpa29uID0gbmV3IFNlcHRpa29uKGdhbWUpO1xyXG5nYW1lLmNsaWVudCA9IG5ldyBDbGllbnQoZ2FtZS5zZXB0aWtvbik7XHJcblxyXG5nYW1lLnN0YXRlLmFkZCgnYm9vdCcsIG5ldyBCb290KCkpO1xyXG5nYW1lLnN0YXRlLmFkZCgnZ2FtZScsIG5ldyBHYW1lKCkpO1xyXG5nYW1lLnN0YXRlLmFkZCgnc2V0dXAnLCBuZXcgU2V0dXAoKSk7XHJcbmdhbWUuc3RhdGUuYWRkKCdwcmVsb2FkZXInLCBuZXcgUHJlbG9hZGVyKCkpO1xyXG5nYW1lLnN0YXRlLmFkZCgnZ2FtZW92ZXInLCBuZXcgR2FtZW92ZXIoKSk7XHJcblxyXG5nYW1lLnN0YXRlLnN0YXJ0KCdib290Jyk7XHJcbiIsInZhciBnYW1lTW9kYWwgPSBnYW1lTW9kYWwgfHwge307XHJcblxyXG5cclxuZ2FtZU1vZGFsID0gZnVuY3Rpb24gKGdhbWUpIHtcclxuXHJcblx0dmFyIF90aGlzID0gdGhpcztcclxuXHRnYW1lLm1vZGFscyA9IHt9O1xyXG5cclxuXHQvKipcclxuXHQgKiBbaGlkZU1vZGFsIGRlc2NyaXB0aW9uXVxyXG5cdCAqIEBwYXJhbSAge1t0eXBlXX0gdHlwZSBbZGVzY3JpcHRpb25dXHJcblx0ICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cclxuXHQgKi9cclxuXHR0aGlzLmhpZGVNb2RhbCA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcblx0XHR3aW5kb3cuY29uc29sZS5sb2codHlwZSk7XHJcblx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gZmFsc2U7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGNyZWF0ZU1vZGFsOiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cdFx0XHR2YXIgdHlwZSA9IG9wdGlvbnMudHlwZSB8fCAnJzsgLy8gbXVzdCBiZSB1bmlxdWVcclxuXHRcdFx0dmFyIGluY2x1ZGVCYWNrZ3JvdW5kID0gb3B0aW9ucy5pbmNsdWRlQmFja2dyb3VuZDsgLy8gbWF5YmUgbm90IG9wdGlvbmFsXHJcblx0XHRcdHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvciB8fCBcIjB4MDAwMDAwXCI7XHJcblx0XHRcdHZhciBiYWNrZ3JvdW5kT3BhY2l0eSA9IG9wdGlvbnMuYmFja2dyb3VuZE9wYWNpdHkgPT09IHVuZGVmaW5lZCA/XHJcblx0XHRcdFx0MC43IDogb3B0aW9ucy5iYWNrZ3JvdW5kT3BhY2l0eTtcclxuXHRcdFx0dmFyIG1vZGFsQ2xvc2VPbklucHV0ID0gb3B0aW9ucy5tb2RhbENsb3NlT25JbnB1dCB8fCBmYWxzZTtcclxuXHRcdFx0dmFyIG1vZGFsQmFja2dyb3VuZENhbGxiYWNrID0gb3B0aW9ucy5tb2RhbEJhY2tncm91bmRDYWxsYmFjayB8fCBmYWxzZTtcclxuXHRcdFx0dmFyIHZDZW50ZXIgPSBvcHRpb25zLnZDZW50ZXIgfHwgdHJ1ZTtcclxuXHRcdFx0dmFyIGhDZW50ZXIgPSBvcHRpb25zLmhDZW50ZXIgfHwgdHJ1ZTtcclxuXHRcdFx0dmFyIGl0ZW1zQXJyID0gb3B0aW9ucy5pdGVtc0FyciB8fCBbXTtcclxuXHRcdFx0dmFyIGZpeGVkVG9DYW1lcmEgPSBvcHRpb25zLmZpeGVkVG9DYW1lcmEgfHwgZmFsc2U7XHJcblxyXG5cdFx0XHR2YXIgbW9kYWw7XHJcblx0XHRcdHZhciBpbm5lck1vZGFsO1xyXG5cdFx0XHR2YXIgbW9kYWxHcm91cCA9IGdhbWUuYWRkLmdyb3VwKCk7XHJcblx0XHRcdGlmIChmaXhlZFRvQ2FtZXJhID09PSB0cnVlKSB7XHJcblx0XHRcdFx0bW9kYWxHcm91cC5maXhlZFRvQ2FtZXJhID0gdHJ1ZTtcclxuXHRcdFx0XHRtb2RhbEdyb3VwLmNhbWVyYU9mZnNldC54ID0gMDtcclxuXHRcdFx0XHRtb2RhbEdyb3VwLmNhbWVyYU9mZnNldC55ID0gMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGluY2x1ZGVCYWNrZ3JvdW5kID09PSB0cnVlKSB7XHJcblx0XHRcdFx0bW9kYWwgPSBnYW1lLmFkZC5ncmFwaGljcyhnYW1lLndpZHRoLCBnYW1lLmhlaWdodCk7XHJcblx0XHRcdFx0bW9kYWwuYmVnaW5GaWxsKGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZE9wYWNpdHkpO1xyXG5cdFx0XHRcdG1vZGFsLnggPSAwO1xyXG5cdFx0XHRcdG1vZGFsLnkgPSAwO1xyXG5cclxuXHRcdFx0XHRtb2RhbC5kcmF3UmVjdCgwLCAwLCBnYW1lLndpZHRoLCBnYW1lLmhlaWdodCk7XHJcblxyXG5cdFx0XHRcdGlmIChtb2RhbENsb3NlT25JbnB1dCA9PT0gdHJ1ZSkge1xyXG5cclxuXHRcdFx0XHRcdGlubmVyTW9kYWwgPSBnYW1lLmFkZC5zcHJpdGUoMCwgMCk7XHJcblx0XHRcdFx0XHRpbm5lck1vZGFsLmlucHV0RW5hYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRpbm5lck1vZGFsLndpZHRoID0gZ2FtZS53aWR0aDtcclxuXHRcdFx0XHRcdGlubmVyTW9kYWwuaGVpZ2h0ID0gZ2FtZS5oZWlnaHQ7XHJcblx0XHRcdFx0XHRpbm5lck1vZGFsLnR5cGUgPSB0eXBlO1xyXG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5pbnB1dC5wcmlvcml0eUlEID0gMDtcclxuXHRcdFx0XHRcdGlubmVyTW9kYWwuZXZlbnRzLm9uSW5wdXREb3duLmFkZChmdW5jdGlvbiAoZSwgcG9pbnRlcikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmhpZGVNb2RhbChlLnR5cGUpO1xyXG5cdFx0XHRcdFx0fSwgX3RoaXMsIDIpO1xyXG5cclxuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKGlubmVyTW9kYWwpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdFx0bW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2sgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKG1vZGFsQmFja2dyb3VuZENhbGxiYWNrKSB7XHJcblx0XHRcdFx0aW5uZXJNb2RhbCA9IGdhbWUuYWRkLnNwcml0ZSgwLCAwKTtcclxuXHRcdFx0XHRpbm5lck1vZGFsLmlucHV0RW5hYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0aW5uZXJNb2RhbC53aWR0aCA9IGdhbWUud2lkdGg7XHJcblx0XHRcdFx0aW5uZXJNb2RhbC5oZWlnaHQgPSBnYW1lLmhlaWdodDtcclxuXHRcdFx0XHRpbm5lck1vZGFsLnR5cGUgPSB0eXBlO1xyXG5cdFx0XHRcdGlubmVyTW9kYWwuaW5wdXQucHJpb3JpdHlJRCA9IDA7XHJcblxyXG5cdFx0XHRcdG1vZGFsR3JvdXAuYWRkKGlubmVyTW9kYWwpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoaW5jbHVkZUJhY2tncm91bmQpIHtcclxuXHRcdFx0XHRtb2RhbEdyb3VwLmFkZChtb2RhbCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHZhciBtb2RhbExhYmVsO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zQXJyLmxlbmd0aDsgaSArPSAxKSB7XHJcblx0XHRcdFx0dmFyIGl0ZW0gPSBpdGVtc0FycltpXTtcclxuXHRcdFx0XHR2YXIgaXRlbVR5cGUgPSBpdGVtLnR5cGUgfHwgJ3RleHQnO1xyXG5cdFx0XHRcdHZhciBpdGVtQ29sb3IgPSBpdGVtLmNvbG9yIHx8IDB4MDAwMDAwO1xyXG5cdFx0XHRcdHZhciBpdGVtRm9udGZhbWlseSA9IGl0ZW0uZm9udEZhbWlseSB8fCAnQXJpYWwnO1xyXG5cdFx0XHRcdHZhciBpdGVtRm9udFNpemUgPSBpdGVtLmZvbnRTaXplIHx8IDMyO1xyXG5cdFx0XHRcdHZhciBpdGVtU3Ryb2tlID0gaXRlbS5zdHJva2UgfHwgJzB4MDAwMDAwJztcclxuXHRcdFx0XHR2YXIgaXRlbVN0cm9rZVRoaWNrbmVzcyA9IGl0ZW0uc3Ryb2tlVGhpY2tuZXNzIHx8IDA7XHJcblx0XHRcdFx0dmFyIGl0ZW1BbGlnbiA9IGl0ZW0uYWxpZ24gfHwgJ2NlbnRlcic7XHJcblx0XHRcdFx0dmFyIG9mZnNldFggPSBpdGVtLm9mZnNldFggfHwgMDtcclxuXHRcdFx0XHR2YXIgb2Zmc2V0WSA9IGl0ZW0ub2Zmc2V0WSB8fCAwO1xyXG5cdFx0XHRcdHZhciBjb250ZW50U2NhbGUgPSBpdGVtLmNvbnRlbnRTY2FsZSB8fCAxO1xyXG5cdFx0XHRcdHZhciBjb250ZW50ID0gaXRlbS5jb250ZW50IHx8IFwiXCI7XHJcblx0XHRcdFx0dmFyIGNlbnRlclggPSBnYW1lLndpZHRoIC8gMjtcclxuXHRcdFx0XHR2YXIgY2VudGVyWSA9IGdhbWUuaGVpZ2h0IC8gMjtcclxuXHRcdFx0XHR2YXIgY2FsbGJhY2sgPSBpdGVtLmNhbGxiYWNrIHx8IGZhbHNlO1xyXG5cdFx0XHRcdHZhciB0ZXh0QWxpZ24gPSBpdGVtLnRleHRBbGlnbiB8fCBcImxlZnRcIjtcclxuXHRcdFx0XHR2YXIgYXRsYXNQYXJlbnQgPSBpdGVtLmF0bGFzUGFyZW50IHx8IFwiXCI7XHJcblx0XHRcdFx0dmFyIGJ1dHRvbkhvdmVyID0gaXRlbS5idXR0b25Ib3ZlciB8fCBjb250ZW50O1xyXG5cdFx0XHRcdHZhciBidXR0b25BY3RpdmUgPSBpdGVtLmJ1dHRvbkFjdGl2ZSB8fCBjb250ZW50O1xyXG5cdFx0XHRcdHZhciBncmFwaGljQ29sb3IgPSBpdGVtLmdyYXBoaWNDb2xvciB8fCAweGZmZmZmZjtcclxuXHRcdFx0XHR2YXIgZ3JhcGhpY09wYWNpdHkgPSBpdGVtLmdyYXBoaWNPcGFjaXR5IHx8IDE7XHJcblx0XHRcdFx0dmFyIGdyYXBoaWNXID0gaXRlbS5ncmFwaGljV2lkdGggfHwgMjAwO1xyXG5cdFx0XHRcdHZhciBncmFwaGljSCA9IGl0ZW0uZ3JhcGhpY0hlaWdodCB8fCAyMDA7XHJcblx0XHRcdFx0dmFyIGdyYXBoaWNSYWRpdXMgPSBpdGVtLmdyYXBoaWNSYWRpdXMgfHwgMDtcclxuXHRcdFx0XHR2YXIgbG9ja1Bvc2l0aW9uID0gaXRlbS5sb2NrUG9zaXRpb24gfHwgZmFsc2U7XHJcblxyXG5cdFx0XHRcdHZhciBpdGVtQW5jaG9yID0gaXRlbS5hbmNob3IgfHwge3g6MCx5OjB9O1xyXG5cdFx0XHRcdHZhciBpdGVtQW5nbGUgPSBpdGVtLmFuZ2xlIHx8IDA7XHJcblx0XHRcdFx0dmFyIGl0ZW1YID0gaXRlbS54IHx8IDA7XHJcblx0XHRcdFx0dmFyIGl0ZW1ZID0gaXRlbS55IHx8IDA7XHJcblx0XHRcdFx0dmFyIGltYWdlRnJhbWUgPSBpdGVtLmZyYW1lIHx8IG51bGw7XHJcblx0XHRcdFx0dmFyIHRpbGVTcHJpdGVXaWR0aCA9IGl0ZW0udGlsZVNwcml0ZVdpZHRoIHx8IGdhbWUud2lkdGg7XHJcblx0XHRcdFx0dmFyIHRpbGVTcHJpdGVIZWlnaHQgPSBpdGVtLnRpbGVTcHJpdGVIZWlnaHQgfHwgZ2FtZS5oZWlnaHQ7XHJcblxyXG5cdFx0XHRcdG1vZGFsTGFiZWwgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRpZiAoaXRlbVR5cGUgPT09IFwidGV4dFwiIHx8IGl0ZW1UeXBlID09PSBcImJpdG1hcFRleHRcIikge1xyXG5cclxuXHRcdFx0XHRcdGlmIChpdGVtVHlwZSA9PT0gXCJ0ZXh0XCIpIHtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnRleHQoMCwgMCwgY29udGVudCwge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQ6IGl0ZW1Gb250U2l6ZSArICdweCAnICsgaXRlbUZvbnRmYW1pbHksXHJcblx0XHRcdFx0XHRcdFx0ZmlsbDogXCIjXCIgKyBTdHJpbmcoaXRlbUNvbG9yKS5yZXBsYWNlKFwiMHhcIiwgXCJcIiksXHJcblx0XHRcdFx0XHRcdFx0c3Ryb2tlOiBcIiNcIiArIFN0cmluZyhpdGVtU3Ryb2tlKS5yZXBsYWNlKFwiMHhcIiwgXCJcIiksXHJcblx0XHRcdFx0XHRcdFx0c3Ryb2tlVGhpY2tuZXNzOiBpdGVtU3Ryb2tlVGhpY2tuZXNzLFxyXG5cdFx0XHRcdFx0XHRcdGFsaWduOiBpdGVtQWxpZ25cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAndGV4dCc7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwudXBkYXRlKCk7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKG1vZGFsTGFiZWwud2lkdGggLyAyKSkgKyBvZmZzZXRYO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoKGdhbWUuaGVpZ2h0IC8gMikgLSAobW9kYWxMYWJlbC5oZWlnaHQgLyAyKSkgKyBvZmZzZXRZO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmJpdG1hcFRleHQoMCwgMCwgaXRlbUZvbnRmYW1pbHksIFN0cmluZyhjb250ZW50KSwgaXRlbUZvbnRTaXplKTtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdiaXRtYXBUZXh0JztcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5hbGlnbiA9IHRleHRBbGlnbjtcclxuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC51cGRhdGVUZXh0KCk7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKG1vZGFsTGFiZWwud2lkdGggLyAyKSkgKyBvZmZzZXRYO1xyXG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtIChtb2RhbExhYmVsLmhlaWdodCAvIDIpKSArIG9mZnNldFk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiaW1hZ2VcIikge1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmltYWdlKDAsIDAsIGNvbnRlbnQpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ2ltYWdlJztcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcInRpbGVTcHJpdGVcIikge1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnRpbGVTcHJpdGUoaXRlbVgsIGl0ZW1ZLFxyXG5cdFx0XHRcdFx0XHR0aWxlU3ByaXRlV2lkdGgsIHRpbGVTcHJpdGVIZWlnaHQsIGNvbnRlbnQsIGltYWdlRnJhbWUpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmFuY2hvci5zZXRUbyhpdGVtQW5jaG9yLngsIGl0ZW1BbmNob3IueSk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmFuZ2xlID0gaXRlbUFuZ2xlO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICd0aWxlU3ByaXRlJztcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcInNwcml0ZVwiKSB7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuc3ByaXRlKDAsIDAsIGF0bGFzUGFyZW50LCBjb250ZW50KTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdzcHJpdGUnO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKChtb2RhbExhYmVsLmhlaWdodCkgLyAyKSkgKyBvZmZzZXRZO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiYnV0dG9uXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5idXR0b24oMCwgMCwgYXRsYXNQYXJlbnQsIGNhbGxiYWNrLFxyXG5cdFx0XHRcdFx0XHR0aGlzLCBidXR0b25Ib3ZlciwgY29udGVudCwgYnV0dG9uQWN0aXZlLCBjb250ZW50KTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdidXR0b24nO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKChtb2RhbExhYmVsLmhlaWdodCkgLyAyKSkgKyBvZmZzZXRZO1xyXG5cclxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcImdyYXBoaWNzXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5ncmFwaGljcyhncmFwaGljVywgZ3JhcGhpY0gpO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5iZWdpbkZpbGwoZ3JhcGhpY0NvbG9yLCBncmFwaGljT3BhY2l0eSk7XHJcblx0XHRcdFx0XHRpZiAoZ3JhcGhpY1JhZGl1cyA8PSAwKSB7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuZHJhd1JlY3QoMCwgMCwgZ3JhcGhpY1csIGdyYXBoaWNIKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuZHJhd1JvdW5kZWRSZWN0KDAsIDAsIGdyYXBoaWNXLCBncmFwaGljSCwgZ3JhcGhpY1JhZGl1cyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmVuZEZpbGwoKTtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFggPSAwO1xyXG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFkgPSAwO1xyXG5cdFx0XHRcdG1vZGFsTGFiZWwubG9ja1Bvc2l0aW9uID0gbG9ja1Bvc2l0aW9uO1xyXG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFggPSBvZmZzZXRYO1xyXG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFkgPSBvZmZzZXRZO1xyXG5cclxuXHJcblx0XHRcdFx0aWYgKGNhbGxiYWNrICE9PSBmYWxzZSAmJiBpdGVtVHlwZSAhPT0gXCJidXR0b25cIikge1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5waXhlbFBlcmZlY3RDbGljayA9IHRydWU7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLnByaW9yaXR5SUQgPSAxMDtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuZXZlbnRzLm9uSW5wdXREb3duLmFkZChjYWxsYmFjaywgbW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoaXRlbVR5cGUgIT09IFwiYml0bWFwVGV4dFwiICYmIGl0ZW1UeXBlICE9PSBcImdyYXBoaWNzXCIpIHtcclxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYnJpbmdUb1RvcCgpO1xyXG5cdFx0XHRcdFx0bW9kYWxHcm91cC5hZGQobW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0XHRtb2RhbExhYmVsLmJyaW5nVG9Ub3AoKTtcclxuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYnJpbmdUb1RvcChtb2RhbExhYmVsKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bW9kYWxHcm91cC5hZGQobW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmJyaW5nVG9Ub3AobW9kYWxMYWJlbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtb2RhbEdyb3VwLnZpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0gPSBtb2RhbEdyb3VwO1xyXG5cclxuXHRcdH0sXHJcblx0XHR1cGRhdGVNb2RhbFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIHR5cGUsIGluZGV4LCBpZCkge1xyXG5cdFx0XHR2YXIgaXRlbTtcclxuXHRcdFx0aWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgaW5kZXggIT09IG51bGwpIHtcclxuXHRcdFx0XHRpdGVtID0gZ2FtZS5tb2RhbHNbdHlwZV0uZ2V0Q2hpbGRBdChpbmRleCk7XHJcblx0XHRcdH0gZWxzZSBpZiAoaWQgIT09IHVuZGVmaW5lZCAmJiBpZCAhPT0gbnVsbCkge1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwidGV4dFwiKSB7XHJcblx0XHRcdFx0aXRlbS50ZXh0ID0gdmFsdWU7XHJcblx0XHRcdFx0aXRlbS51cGRhdGUoKTtcclxuXHRcdFx0XHRpZiAoaXRlbS5sb2NrUG9zaXRpb24gPT09IHRydWUpIHtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGl0ZW0ueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKGl0ZW0ud2lkdGggLyAyKSkgKyBpdGVtLl9vZmZzZXRYO1xyXG5cdFx0XHRcdFx0aXRlbS55ID0gKChnYW1lLmhlaWdodCAvIDIpIC0gKGl0ZW0uaGVpZ2h0IC8gMikpICsgaXRlbS5fb2Zmc2V0WTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoaXRlbS5jb250ZW50VHlwZSA9PT0gXCJiaXRtYXBUZXh0XCIpIHtcclxuXHRcdFx0XHRpdGVtLnRleHQgPSB2YWx1ZTtcclxuXHRcdFx0XHRpdGVtLnVwZGF0ZVRleHQoKTtcclxuXHRcdFx0XHRpZiAoaXRlbS5sb2NrUG9zaXRpb24gPT09IHRydWUpIHtcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGl0ZW0ueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKGl0ZW0ud2lkdGggLyAyKSkgKyBpdGVtLl9vZmZzZXRYO1xyXG5cdFx0XHRcdFx0aXRlbS55ID0gKChnYW1lLmhlaWdodCAvIDIpIC0gKGl0ZW0uaGVpZ2h0IC8gMikpICsgaXRlbS5fb2Zmc2V0WTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoaXRlbS5jb250ZW50VHlwZSA9PT0gXCJpbWFnZVwiKSB7XHJcblx0XHRcdFx0aXRlbS5sb2FkVGV4dHVyZSh2YWx1ZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9LFxyXG5cdFx0Z2V0TW9kYWxJdGVtOiBmdW5jdGlvbiAodHlwZSwgaW5kZXgpIHtcclxuXHRcdFx0cmV0dXJuIGdhbWUubW9kYWxzW3R5cGVdLmdldENoaWxkQXQoaW5kZXgpO1xyXG5cdFx0fSxcclxuXHRcdHNob3dNb2RhbDogZnVuY3Rpb24gKHR5cGUpIHtcclxuXHRcdFx0Z2FtZS53b3JsZC5icmluZ1RvVG9wKGdhbWUubW9kYWxzW3R5cGVdKTtcclxuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0udmlzaWJsZSA9IHRydWU7XHJcblx0XHRcdC8vIHlvdSBjYW4gYWRkIGFuaW1hdGlvbiBoZXJlXHJcblx0XHR9LFxyXG5cdFx0aGlkZU1vZGFsOiBmdW5jdGlvbiAodHlwZSkge1xyXG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gZmFsc2U7XHJcblx0XHRcdC8vIHlvdSBjYW4gYWRkIGFuaW1hdGlvbiBoZXJlXHJcblx0XHR9LFxyXG5cdFx0ZGVzdHJveU1vZGFsOiBmdW5jdGlvbiAodHlwZSkge1xyXG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS5kZXN0cm95KCk7XHJcblx0XHRcdGRlbGV0ZSBnYW1lLm1vZGFsc1t0eXBlXTtcclxuXHRcdH1cclxuXHR9O1xyXG59O1xyXG4iLCJcclxuY2xhc3MgQ2xpZW50IHtcclxuICAgIFxyXG5cdGNvbnN0cnVjdG9yKHNlcHRpa29uKSB7XHJcbiAgICAgICAgXHJcblx0XHR0aGlzLnNvY2tldCA9IGlvLmNvbm5lY3QoKTtcclxuICAgICAgICB0aGlzLnNlcHRpa29uID0gdGhpcy5zb2NrZXQuc2VwdGlrb24gPSBzZXB0aWtvbjtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNvY2tldC5vbignbG9nJywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMT0c6ICcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ3VwZGF0ZScsIGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgICAgICBpZihkYXRhLnR5cGUgPT0gXCJwZXJzb25uZWxcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi51cGRhdGVQZXJzb25uZWwoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS50eXBlID09IFwicmVzb3VyY2VzXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFjdGlvbiA9PSBcImluaXRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24uaW5pdFJlc291cmNlcygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGRhdGEuYWN0aW9uICsgXCIgbm90IGEgbGVnYWwgYWN0aW9uIGZvciBSZXNvdXJjZSB1cGRhdGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT0gXCJkaWNlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24uZ2FtZS5kaWNlLnNldFZhbHVlKGRhdGEuZGV0YWlscy52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VQREFURTonKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS50eXBlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ3JlcXVlc3QnLCBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JFUVVFU1Q6ICcpO1xyXG4gICAgICAgICAgICBzd2l0Y2goZGF0YS5kZXRhaWxzLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJhc2tTdGFydFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24uc2hvd01vZGFsKCdhc2tTdGFydCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNvY2tldC5vbignYWN0aW9uJywgZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YodGhpcy5zZXB0aWtvbltkYXRhLmNhbGxiYWNrXSkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbltkYXRhLmNhbGxiYWNrXShkYXRhLmRldGFpbHMpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SOiBubyBtZXRob2QgZm91bmQgY2FsbGVkIHNlcHRpa29uLlwiICsgZGF0YS5jYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHR9XHJcblxyXG5cdGFza05ld1BsYXllcigpIHtcclxuXHRcdHRoaXMuc29ja2V0LmVtaXQoJ25ld1BsYXllcicsIHt1dWlkOmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXB0VVVJRCcpfSk7XHJcblx0fVxyXG4gICAgXHJcbiAgICBzZW5kSW5wdXQocGF5bG9hZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZW5kaW5nIGlucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnaW5wdXQnLCBwYXlsb2FkKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50O1xyXG4iLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxyXG5cclxuY2xhc3MgQ2xvbmUgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lLCB1dWlkKSB7XHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnY2xvbmUnLCBmcmFtZSk7XHJcbiAgICAgICAgXHJcbiAgICAvL3NldHVwIHBoeXNpY3MgcHJvcGVydGllc1xyXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjY1KTtcclxuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGVCb2R5KHRoaXMpO1xyXG4gICAgLy90aGlzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnV1aWQgPSB1dWlkO1xyXG4gICAgLy9zZXQgc2l6ZVxyXG4gICAgdGhpcy53aWR0aCA9IDI3O1xyXG4gICAgdGhpcy5zY2FsZS55ID0gTWF0aC5hYnModGhpcy5zY2FsZS54KTtcclxuICAgIFxyXG4gICAgLy9zZXQgcm90YXRpb24gKHRoaXMgc2hvdWxkIGJlIGJhc2VkIG9uIHRoZSBiYXNlIHRoaXMgY2xvbmUgb2NjdXBpZXMpXHJcbiAgICB0aGlzLmFuZ2xlID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAuYW5nbGUgKiAtMTtcclxuXHJcbiAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSB0aGlzLmdhbWUuc2VwdGlrb24ucGl4ZWxzVG9UaWxlKHRoaXMueCwgdGhpcy55KTtcclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSB0cnVlO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgcmVtb3ZlKCkge1xyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBoaWdobGlnaHRPbigpIHtcclxuICAgIHRoaXMudGludCA9IDB4RkY1NTAwO1xyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLmFscGhhID0gMTtcclxuICB9XHJcbiAgXHJcbiAgaGlnaGxpZ2h0T2ZmKCkge1xyXG4gICAgdGhpcy50aW50ID0gMHhmZmZmZmY7XHJcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0uYWxwaGEgPSAwO1xyXG4gIH1cclxuICBcclxuICBnZXRMZWdhbE1vdmVzKCkge1xyXG4gICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gdGhpcy5nYW1lLnNlcHRpa29uLnBpeGVsc1RvVGlsZSh0aGlzLngsIHRoaXMueSk7XHJcbiAgICB2YXIgY3VycmVudExlZ2FsTW92ZXMgPSB0aGlzLmdhbWUuc2VwdGlrb24uZ2V0TGVnYWxNb3Zlcyh0aGlzLmdhbWUuZ2xvYmFsLmxhc3REaWNlUm9sbCwgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzKTtcclxuICAgIHZhciBsZWdhbFRpbGVzQXJyYXkgPSBbXTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBmb3IgKHZhciB0aWxlIGluIGN1cnJlbnRMZWdhbE1vdmVzKSB7XHJcbiAgICAgICAgbGVnYWxUaWxlc0FycmF5LnB1c2godGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVtjdXJyZW50TGVnYWxNb3Zlc1t0aWxlXS54XVtjdXJyZW50TGVnYWxNb3Zlc1t0aWxlXS55XSk7XHJcbiAgICAgICAgLy9sZWdhbFRpbGVzQXJyYXlbbGVnYWxUaWxlc0FycmF5Lmxlbmd0aC0xXS5hbHBoYSA9IDAuNTtcclxuICAgICAgICAvL2xlZ2FsVGlsZXNBcnJheVtsZWdhbFRpbGVzQXJyYXkubGVuZ3RoLTFdLmxlZ2FsRm9yID0gdGhpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGxlZ2FsVGlsZXNBcnJheTtcclxuICB9XHJcbiAgXHJcbiAgbW92ZShjb29yZGluYXRlcykge1xyXG4gIFxyXG4gICAgLy8gQ2xlYXIgXCJsZWdhbEZvclwiXHJcbiAgICBmb3IgKHZhciB0aWxlIGluIHRoaXMubGVnYWxUaWxlc0FycmF5KSB7XHJcbiAgICAgICAgdGhpcy5sZWdhbFRpbGVzQXJyYXlbdGlsZV0uYWxwaGEgPSAwO1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmxlZ2FsVGlsZXNBcnJheVt0aWxlXS5sZWdhbEZvcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gTW92ZSB0byBuZXcgaG9tZVxyXG4gICAgLy8gTmVlZCB0byBhZGQgYSBjaGVjayBmb3IgYXJtZWQgb3Bwb25lbnRzIChiaW9kcm9uZXMvZXNwaW9uYWdlZCBjbG9uZXMvY2xvbmVzIGluIGVuZW15IGJhc2UsIGV0Yy4pXHJcbiAgICB2YXIgcG9pbnRzID0gdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVUb1BpeGVscyhjb29yZGluYXRlcy54LCBjb29yZGluYXRlcy55KTtcclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSBmYWxzZTtcclxuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMueSAtIHBvaW50cy55ICsgdGhpcy54IC0gcG9pbnRzLngpLnRvRml4ZWQoMSk7XHJcbiAgICBcclxuICAgIC8vIFVwZGF0ZSB0aGUgcGVyc29ubmVsIGNvb3JkaW5hdGUgcHJvcGVydHlcclxuICAgIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XHJcbiAgICBcclxuICAgIC8vIFdhaXQgZm9yIGFuaW1hdGlvbiB0byBjb21wbGV0ZSwgdGhlbiBwcm9jZXNzIHRpbGUgdHJpZ2dlclxyXG4gICAgdmFyIHR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzKS50bygge3g6cG9pbnRzLngsIHk6cG9pbnRzLnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XHJcbiAgICB0d2Vlbi5vbkNvbXBsZXRlLmFkZCh0aGlzLmdhbWUuc2VwdGlrb24udHJpZ2dlclRpbGUsIHRoaXMuZ2FtZS5zZXB0aWtvbik7XHJcbiAgICBcclxuICAgIC8vIENsZWFyIHRoaXMuY3VycmVudExlZ2FsTW92ZXNcclxuICAgIGRlbGV0ZSB0aGlzLmxlZ2FsVGlsZXNBcnJheTtcclxuICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRMZWdhbE1vdmVzOyAgICBcclxuICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xvbmU7XHJcbiIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXHJcbmNsYXNzIENyb3NzaGFpcnMgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7XHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnY3Jvc3NoYWlycycsIGZyYW1lKTtcclxuXHJcbiAgICAvL3NldCBzaXplXHJcbiAgICB0aGlzLndpZHRoID0gMzU7IFxyXG4gICAgdGhpcy5zY2FsZS55ID0gTWF0aC5hYnModGhpcy5zY2FsZS54KTtcclxuXHJcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKXtcclxuICAgIHRoaXMueCA9IHRoaXMuZ2FtZS5pbnB1dC5tb3VzZVBvaW50ZXIueDtcclxuICAgIHRoaXMueSA9IHRoaXMuZ2FtZS5pbnB1dC5tb3VzZVBvaW50ZXIueTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcm9zc2hhaXJzO1xyXG4iLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxyXG5jbGFzcyBEaWNlIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSkgeyAgXHJcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnZGljZScsIGZyYW1lKTtcclxuXHJcbiAgICAvL3NldHVwIHBoeXNpY3MgcHJvcGVydGllc1xyXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xyXG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZUJvZHkodGhpcyk7XHJcblxyXG4gICAgLy9zZXQgY2xpY2sgZXZlbnRcclxuICAgIHRoaXMuaW5wdXRFbmFibGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmV2ZW50cy5vbklucHV0RG93bi5hZGQodGhpcy5jbGlja2VkLCB0aGlzKTtcclxuXHJcbiAgICAvL3NldCBzaXplXHJcbiAgICB0aGlzLndpZHRoID0gNTA7XHJcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xyXG4gICAgdGhpcy5maWx0ZXJzID0gW3RoaXMuZ2FtZS5hZGQuZmlsdGVyKCdHcmF5JyldO1xyXG4gICAgdGhpcy5hbHBoYSA9IDAuNTtcclxuICAgIFxyXG4gICAgdGhpcy52YWx1ZSA9IDEwO1xyXG4gICAgdGhpcy5mcmFtZSA9IHRoaXMudmFsdWUtMTtcclxuICB9XHJcblxyXG4gIGNsaWNrZWQgKCkge1xyXG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAnZGljZUNsaWNrZWQnfSk7XHJcbiAgfVxyXG5cclxuICBlbmFibGUoKSB7XHJcbiAgICAgIHRoaXMuYWxwaGEgPSAxO1xyXG4gICAgICB0aGlzLmZpbHRlcnMgPSBudWxsO1xyXG4gICAgICB0aGlzLmlucHV0RW5hYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlKCkge1xyXG4gICAgICB0aGlzLmFscGhhID0gMC41O1xyXG4gICAgICB0aGlzLmZpbHRlcnMgPSBbdGhpcy5nYW1lLmFkZC5maWx0ZXIoJ0dyYXknKV07XHJcbiAgICAgIHRoaXMuaW5wdXRFbmFibGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZSh2YWx1ZSkge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5mcmFtZSA9IHZhbHVlIC0gMTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpY2U7XHJcbiIsImNsYXNzIE1hc3RlciB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXN0ZXI7IiwiY2xhc3MgT3JkbmFuY2Uge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoKSB7IFxyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkbmFuY2U7IiwiY2xhc3MgUGVyc29ubmVsIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2Nsb25lJywgZnJhbWUpOyAgXHJcbiAgICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlcnNvbm5lbDsiLCJjbGFzcyBSZXNvdXJjZXMge1xyXG5cclxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoKSB7IFxyXG4gICAgdGhpcy5yZXNvdXJjZUVudW0gPSBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICBPWFlHRU46IDAsXHJcbiAgICAgICAgUk9DS0VUOiAxLFxyXG4gICAgICAgIE1FVEFMOiAyLFxyXG4gICAgICAgIEVORVJHWTogMyxcclxuICAgICAgICBCSU9NQVNTOiA0LFxyXG4gICAgICAgIEJJT0RST05FOiA1LFxyXG4gICAgICAgIFVSQU5JVU06IDZcclxuICAgIH0pO1xyXG4gICAgdGhpcy5yZXNvdXJjZXMgPSB7fTtcclxuICAgIGZvcih2YXIgdHlwZSBpbiB0aGlzLnJlc291cmNlRW51bSkge1xyXG4gICAgICAgIHRoaXMucmVzb3VyY2VzW3RoaXMucmVzb3VyY2VFbnVtW3R5cGVdXSA9IDU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGNoZWNrKHR5cGUsIGNvdW50KSB7XHJcbiAgICBpZih0aGlzLnJlc291cmNlc1t0aGlzLnJlc291cmNlRW51bVt0eXBlXV0gPiBjb3VudClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgXHJcbiAgZ2V0Q291bnQodHlwZSkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzW3R5cGVdO1xyXG4gIH1cclxuICAgIFxyXG4gIGFkZCh0eXBlLCBjb3VudCkge1xyXG4gIH1cclxuICBcclxuICByZW1vdmUodHlwZSwgY291bnQpIHtcclxuICAgIHRoaXMucmVzb3VyY2VzW3R5cGVdIC09IGNvdW50O1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VzOyIsImltcG9ydCBDbG9uZSBmcm9tICcuLi9wcmVmYWJzL2Nsb25lJztcclxuXHJcbmNsYXNzIFNlcHRpa29uIHtcclxuXHJcbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxyXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHsgXHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgXHJcbiAgICB0aGlzLnBsYXllciA9IHtcclxuICAgICAgICBpZDogMCxcclxuICAgICAgICBwZXJzb25uZWxBcnJheTogW11cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5vcHBvbmVudCA9IHtcclxuICAgICAgICBwZXJzb25uZWxBcnJheTogW11cclxuICAgIH07XHJcbiAgICBcclxuICAgIHRoaXMuc2hvd25UaWxlcyA9IFtdO1xyXG4gICAgdGhpcy50aWxlQXJyYXkgPSBbXTtcclxuXHJcbiAgICB0aGlzLmxlZ2FsTW92ZXMgPSBudWxsO1xyXG4gICAgdGhpcy5zZWxlY3RlZFRvTW92ZSA9IG51bGw7XHJcbiAgICB0aGlzLmxlZ2FsR3VubmVycyA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5jaG9vc2luZ1RhcmdldHMgPSBmYWxzZTtcclxuICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzID0gW107XHJcbiAgfVxyXG5cclxuICBzaG93TW9kYWwodHlwZSkge1xyXG4gICAgdGhpcy5nYW1lLm1vZGFsLnNob3dNb2RhbCh0eXBlKTtcclxuICB9XHJcbiAgXHJcbiAgZGljZVJvbGxlZChkZXRhaWxzKSB7XHJcbiAgICB0aGlzLmdhbWUuZGljZS5zZXRWYWx1ZShkZXRhaWxzLnZhbHVlKTtcclxuICAgIHRoaXMubGVnYWxNb3ZlcyA9IGRldGFpbHMuZ2FtZVBpZWNlcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGV0YWlscy5nYW1lUGllY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZm9yICh2YXIgbSBpbiBkZXRhaWxzLmdhbWVQaWVjZXNbaV0ubW92ZXMpIHtcclxuICAgICAgICAgICAgdmFyIHggPSBkZXRhaWxzLmdhbWVQaWVjZXNbaV0ubW92ZXNbbV0ueDtcclxuICAgICAgICAgICAgdmFyIHkgPSBkZXRhaWxzLmdhbWVQaWVjZXNbaV0ubW92ZXNbbV0ueTtcclxuICAgICAgICAgICAgdGhpcy5zaG93VGlsZXMoW2RldGFpbHMuZ2FtZVBpZWNlc1tpXS5vcmlnaW5dLCAweEY2MzYzNik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb2ZmZXJEaWNlKCkge1xyXG4gICAgICB0aGlzLmdhbWUuZGljZS5lbmFibGUoKTtcclxuICB9XHJcblxyXG4gIHRha2VEaWNlKCkge1xyXG4gICAgICB0aGlzLmdhbWUuZGljZS5kaXNhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBvZmZlckd1bm5lcnMoZGF0YSkge1xyXG4gICAgICB0aGlzLmNob29zaW5nVGFyZ2V0cyA9IHRydWU7XHJcbiAgICAgIHRoaXMubGVnYWxHdW5uZXJzID0gZGF0YS5ndW5uZXJzO1xyXG4gICAgICB0aGlzLmdhbWUuZ28uZW5hYmxlKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiYW5pbWF0ZSBzb21lIGluZGljYXRpb24gb2YgdmlhYmxlIGd1bm5lcnMgb24gdGhlIHN1cmZhY2UuIE1heWJlIGEgcG9pbnRlciBib3VuY2luZyBvdmVyIHRoZW0/XCIpO1xyXG4gIH1cclxuICBcclxuICBhZGRDbG9uZShkZXRhaWxzKSB7XHJcbiAgICB2YXIgcG9pbnQgPSB0aGlzLnRpbGVUb1BpeGVscyhkZXRhaWxzLngsIGRldGFpbHMueSk7XHJcbiAgICB2YXIgY2xvbmUgPSBuZXcgQ2xvbmUodGhpcy5nYW1lLCBwb2ludC54LCBwb2ludC55LCBudWxsLCBkZXRhaWxzLnV1aWQpO1xyXG4gICAgaWYoZGV0YWlscy5wbGF5ZXJJRCA9PSB0aGlzLnBsYXllci5pZCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5LnB1c2goY2xvbmUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5LnB1c2goY2xvbmUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKGNsb25lKTtcclxuICB9XHJcblxyXG4gIG1vdmVQZXJzb25uZWwoZGF0YSkge1xyXG4gICAgdmFyIHR3ZWVuID0gbnVsbDtcclxuICAgIHZhciBkaXN0YW5jZSA9IG51bGw7XHJcbiAgICB2YXIgcG9pbnQgPSB0aGlzLnRpbGVUb1BpeGVscyhkYXRhLngsIGRhdGEueSk7XHJcbiAgICBmb3IgKHZhciBpIGluIHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5KSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnV1aWQgPT0gZGF0YS51dWlkKSB7XHJcbiAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueSAtIHBvaW50LnkgKyB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtpXS54IC0gcG9pbnQueCkudG9GaXhlZCgxKTtcclxuICAgICAgICAgICAgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldKS50bygge3g6cG9pbnQueCwgeTpwb2ludC55fSwgKGRpc3RhbmNlKjExKSwgUGhhc2VyLkVhc2luZy5DdWJpYy5PdXQsIHRydWUpO1xyXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIHRpbGUuIE5vdCBxdWl0ZSBzdXJlIGhvdyB0byBkbyB0aGlzIHlldC5cclxuICAgICAgICAgICAgLy90d2Vlbi5vbkNvbXBsZXRlLmFkZCh0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICdtb3ZlQ29tcGxldGUnLCB4OnBhcnNlSW50KG9iai50aWxlWCksIHk6cGFyc2VJbnQob2JqLnRpbGVZKX0pOywgdGhpcy5nYW1lLnNlcHRpa29uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBqIGluIHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXkpIHtcclxuICAgICAgICBpZiAodGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheVtqXS51dWlkID09IGRhdGEudXVpZCkge1xyXG4gICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXlbal0ueSAtIHBvaW50LnkgKyB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5W2pdLnggLSBwb2ludC54KS50b0ZpeGVkKDEpO1xyXG4gICAgICAgICAgICB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheVtqXSkudG8oIHt4OnBvaW50LngsIHk6cG9pbnQueX0sIChkaXN0YW5jZSoxMSksIFBoYXNlci5FYXNpbmcuQ3ViaWMuT3V0LCB0cnVlKTtcclxuICAgICAgICAgICAgLy8gVHJpZ2dlciB0aWxlLiBOb3QgcXVpdGUgc3VyZSBob3cgdG8gZG8gdGhpcyB5ZXQuXHJcbiAgICAgICAgICAgIC8vdHdlZW4ub25Db21wbGV0ZS5hZGQodGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAnbW92ZUNvbXBsZXRlJywgeDpwYXJzZUludChvYmoudGlsZVgpLCB5OnBhcnNlSW50KG9iai50aWxlWSl9KTssIHRoaXMuZ2FtZS5zZXB0aWtvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGVyc29ubmVsKGRhdGEpIHtcclxuICAgICAgdmFyIGN1cnJlbnRQZXJzb25uZWwgPSBudWxsO1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmRldGFpbHMpID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgZGF0YS5kZXRhaWxzID0gW2RhdGEuZGV0YWlsc107XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5Lmxlbmd0aCA9PT0gMCAmJiBkYXRhLmRldGFpbHMubGVuZ3RoID09PSA1KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBkYXRhLmRldGFpbHMpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRDbG9uZShkYXRhLmRldGFpbHNbaV0pO1xyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXkpIHtcclxuICAgICAgICAgICAgY3VycmVudFBlcnNvbm5lbCA9IHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXlbcF07XHJcbiAgICAgICAgICAgIGZvciAodmFyIGQgaW4gZGF0YS5kZXRhaWxzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBlcnNvbm5lbC51dWlkID09IGRhdGEuZGV0YWlsc1tkXS51dWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGVyc29ubmVsKGRhdGEuZGV0YWlsc1tkXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZVBlcnNvbm5lbChkYXRhKSB7XHJcbiAgICAgIHZhciBwZXJzb25uZWxUb0Rlc3Ryb3k7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtpXS51dWlkID09IGRhdGEudXVpZCkge1xyXG4gICAgICAgICAgICAgIHBlcnNvbm5lbFRvRGVzdHJveSA9IHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldO1xyXG4gICAgICAgICAgICAgIHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5LnNwbGljZShpLDEpO1xyXG4gICAgICAgICAgICAgIHBlcnNvbm5lbFRvRGVzdHJveS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQWxsUGVyc29ubmVsKCl7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYodGhpcy5nYW1lLmJvYXJkR3JvdXAuY2hpbGRyZW5baV0uY29uc3RydWN0b3IgPT0gQ2xvbmUpe1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5jaGlsZHJlbltpXS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIGktLTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHVwZGF0ZVBsYXllcihkZXRhaWxzKSB7XHJcbiAgICBmb3IgKHZhciBpIGluIGRldGFpbHMpIHtcclxuICAgICAgICB0aGlzLnBsYXllcltpXSA9IGRldGFpbHNbaV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbml0UmVzb3VyY2VzKCkge1xyXG4gICAgdmFyIGN1cnJlbnRSZWMgPSBudWxsO1xyXG4gICAgdmFyIGdyYXBoaWNzID0gdGhpcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcclxuICAgIC8vZ3JhcGhpY3MubGluZVN0eWxlKDQsIDB4ZmZkOTAwLCAxKTtcclxuICAgIGdyYXBoaWNzLmJlZ2luRmlsbCgweGZmZmZmZiwgMSk7XHJcbiAgICBncmFwaGljcy5kcmF3Um91bmRlZFJlY3QoMTAwLCAxMDAsIHRoaXMudGlsZVdpZHRoLTQsIHRoaXMudGlsZUhlaWdodC00LCAxNCk7XHJcblxyXG4gICAgZm9yICh2YXIgYyBpbiB0aGlzLnRpbGVBcnJheSkge1xyXG4gICAgICAgIGZvciAodmFyIHIgaW4gdGhpcy50aWxlQXJyYXlbY10pIHtcclxuICAgICAgICAgICAgaWYodGhpcy50aWxlQXJyYXlbY11bcl0udGlsZU93bmVyID09IHRoaXMucGxheWVyLmlkICYmIHRoaXMudGlsZUFycmF5W2NdW3JdLnRpbGVUeXBlID09IFwid2FyZWhvdXNlXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyIDwgNSB8fCByID4gMTUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUodGhpcy50aWxlQXJyYXlbY11bcl0ueCsodGhpcy50aWxlQXJyYXlbY11bcl0ud2lkdGgvMiksIHRoaXMudGlsZUFycmF5W2NdW3JdLnkrKHRoaXMudGlsZUFycmF5W2NdW3JdLndpZHRoLzIpLCBncmFwaGljcy5nZW5lcmF0ZVRleHR1cmUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYy5hbmdsZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0MCktMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYy5hbmNob3Iuc2V0VG8oMC41KTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMudGlsZUFycmF5W2NdW3JdLnRpbGVOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlbmVyZ3lcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4ZmNlMzE1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJveHlnZW5cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4MDBiMWYwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyb2NrZXRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4ZTgyYTJjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtZXRhbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYy50aW50ID0gMHhmZmZmZmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJpb21hc3NcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4OGFjMzQyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJiaW9kcm9uZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYy50aW50ID0gMHg5ZjNhOWI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInVyYW5pdW1cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4ZjM2NTIwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQoY3VycmVudFJlYyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBncmFwaGljcy5kZXN0cm95KCk7XHJcbiAgfVxyXG4gIFxyXG4gIGNyZWF0ZVRpbGVBcnJheShjb2x1bW5zLCByb3dzLCBwb2ludCkge1xyXG4gICAgdGhpcy50aWxlRGV0YWlsID0gdGhpcy5nYW1lLmNhY2hlLmdldEpTT04oJ3RpbGVEZXRhaWwnKTtcclxuXHJcbiAgICB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzID0ge3g6MCwgeTowfTtcclxuXHJcbiAgICB2YXIgeCwgeTtcclxuICAgIFxyXG4gICAgdGhpcy5tYXJnaW5Cb3R0b20gPSB0aGlzLm1hcmdpblRvcCA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmhlaWdodC8xNy40NzU7XHJcbiAgICB0aGlzLm1hcmdpbkxlZnQgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aC8yNDtcclxuICAgIHRoaXMubWFyZ2luUmlnaHQgPSAgdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGgvMjYuMzE1ODtcclxuICAgIHRoaXMudGlsZVdpZHRoID0gdGhpcy50aWxlSGVpZ2h0ID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGgvMzk7XHJcbiAgICB0aGlzLnBhZGRpbmcgPSAodGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGggLSAodGhpcy5tYXJnaW5MZWZ0ICsgdGhpcy5tYXJnaW5SaWdodCkgLSAodGhpcy50aWxlV2lkdGggKiAzMSkpLzMwO1xyXG4gICAgICAgIFxyXG4gICAgLy90aGlzLnRpbGVXaWR0aCA9IDI1Oy8vKHRoaXMuYmFja2dyb3VuZFdpZHRoIC0gKCh0aGlzLm1hcmdpbkxlZnQgKyB0aGlzLm1hcmdpblJpZ2h0KSArICh0aGlzLnBhZGRpbmcgKiAoY29sdW1ucyAtIDEpKSkpIC8gY29sdW1ucztcclxuICAgIC8vdGhpcy50aWxlSGVpZ2h0ID0gMjU7Ly8odGhpcy5iYWNrZ3JvdW5kSGVpZ2h0IC0gKCh0aGlzLm1hcmdpblRvcCArIHRoaXMubWFyZ2luQm90dG9tKSArICh0aGlzLnBhZGRpbmcgKiAocm93cyAtIDEpKSkpIC8gcm93cztcclxuICAgICAgICBcclxuICAgIHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMueCA9IHBvaW50LnggKyB0aGlzLm1hcmdpbkxlZnQ7XHJcbiAgICB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnkgPSBwb2ludC55ICsgdGhpcy5tYXJnaW5Ub3A7XHJcbiAgICBcclxuICAgIHZhciBncmFwaGljcyA9IHRoaXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XHJcbiAgICAvL2dyYXBoaWNzLmxpbmVTdHlsZSg0LCAweGZmZDkwMCwgMSk7XHJcbiAgICBncmFwaGljcy5iZWdpbkZpbGwoMHhmZmZmZmYsIDEpO1xyXG4gICAgZ3JhcGhpY3MuZHJhd1JlY3QoMTAwLCAxMDAsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQpO1xyXG4gICAgXHJcbiAgICBmb3IgKHZhciBjb2x1bW4gPSAwOyBjb2x1bW4gPCBjb2x1bW5zOyBjb2x1bW4rKykge1xyXG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHJvd3M7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB4ID0gdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy54ICsgKHRoaXMudGlsZVdpZHRoICogY29sdW1uKSArICh0aGlzLnBhZGRpbmcgKiBjb2x1bW4gLSAxKTtcclxuICAgICAgICAgICAgeSA9IHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMueSArICh0aGlzLnRpbGVIZWlnaHQgKiByb3cpICsgKHRoaXMucGFkZGluZyAqIHJvdyAtIDEpO1xyXG4gICAgICAgICAgICAvL2dyYXBoaWNzLmdlbmVyYXRlVGV4dHVyZSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaWxlID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoeCwgeSwgZ3JhcGhpY3MuZ2VuZXJhdGVUZXh0dXJlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQoY3VycmVudFRpbGUpO1xyXG4gICAgICAgICAgICBjdXJyZW50VGlsZS5hbHBoYSA9IDA7IC8vIDAuMjU7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlLmlucHV0RW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlLmV2ZW50cy5vbklucHV0RG93bi5hZGQodGhpcy50aWxlQ2xpY2tlZCwgdGhpcyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMudGlsZUFycmF5W2NvbHVtbl0gPT0gJ3VuZGVmaW5lZCcpIFxyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbY29sdW1uXSA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjb2x1bW5dW3Jvd10gPSBjdXJyZW50VGlsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdyYXBoaWNzLmRlc3Ryb3koKTtcclxuICAgIFxyXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMudGlsZURldGFpbCkge1xyXG4gICAgICAgIGlmICghdGhpcy50aWxlRGV0YWlsLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBvYmogPSB0aGlzLnRpbGVEZXRhaWxba2V5XTtcclxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xyXG4gICAgICAgICAgICAvLyBza2lwIGxvb3AgaWYgdGhlIHByb3BlcnR5IGlzIGZyb20gcHJvdG90eXBlXHJcbiAgICAgICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIGxvY2F0aW9uQ291bnQgPSBvYmpbcHJvcF0ubG9jYXRpb25zLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yKCB2YXIgaSA9IDA7IGkgPCBsb2NhdGlvbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIGNvb3JkcyA9IG9ialtwcm9wXS5sb2NhdGlvbnNbaV0uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICAgICAgeCA9IGNvb3Jkc1swXTtcclxuICAgICAgICAgICAgICAgIHkgPSBjb29yZHNbMV07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVEYW1hZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlT2NjdXBpZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVYID0geDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVZID0geTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVUeXBlID0gb2JqW3Byb3BdLnR5cGU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVBcnJheVt4XVt5XSAhPSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlTmFtZSA9IG9ialtwcm9wXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHggKyBcIjpcIiArIHkgKyBcIiBub3QgZm91bmQhXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHggPCA5KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVPd25lciA9IDE7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4PjIwKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVPd25lciA9IDI7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtwcm9wXS5wcm9wZXJ0aWVzICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZVByb3BlcnRpZXMgPSBvYmpbcHJvcF0ucHJvcGVydGllcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBpeGVsc1RvVGlsZSh4LCB5KSB7XHJcbiAgICB2YXIgeFRpbGUgPSAwO1xyXG4gICAgdmFyIHlUaWxlID0gMDtcclxuICAgIFxyXG4gICAgZm9yICh2YXIgY29sIGluIHRoaXMudGlsZUFycmF5KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcm93IGluIHRoaXMudGlsZUFycmF5W2NvbF0pIHtcclxuICAgICAgICAgICAgdmFyIG9iaiA9IHRoaXMudGlsZUFycmF5W2NvbF1bcm93XTtcclxuICAgICAgICAgICAgaWYoeCA+IG9iai54ICYmIHggPCBvYmoueCArIG9iai53aWR0aClcclxuICAgICAgICAgICAgICAgIHhUaWxlID0gcGFyc2VJbnQoY29sKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih5ID4gb2JqLnkgJiYgeSA8IG9iai55ICsgb2JqLmhlaWdodClcclxuICAgICAgICAgICAgICAgIHlUaWxlID0gcGFyc2VJbnQocm93KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge3g6eFRpbGUsIHk6eVRpbGV9O1xyXG4gIH1cclxuICBcclxuICB0aWxlVG9QaXhlbHMoeCwgeSkge1xyXG4gICAgdmFyIHRpbGVPYmogPSB0aGlzLnRpbGVBcnJheVt4XVt5XTtcclxuICAgIHJldHVybiB7eDp0aWxlT2JqLnggKyB0aWxlT2JqLndpZHRoLzIsIHk6dGlsZU9iai55ICsgdGlsZU9iai5oZWlnaHQvMn07XHJcbiAgfVxyXG4gIFxyXG4gIHRpbGVDbGlja2VkKG9iaikge1xyXG4gICAgICB0aGlzLmhpZGVUaWxlcygpO1xyXG4gICAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICd0aWxlQ2xpY2tlZCcsIHg6cGFyc2VJbnQob2JqLnRpbGVYKSwgeTpwYXJzZUludChvYmoudGlsZVkpfSk7XHJcbiAgICAgIHJldHVybjtcclxuICB9XHJcbiAgXHJcbiAgc2hvd1RpbGVzKGNvb3Jkc0FycmF5LCBjb2xvcikge1xyXG4gICAgZm9yICh2YXIgaSBpbiBjb29yZHNBcnJheSkge1xyXG4gICAgICAgIHRoaXMudGlsZUFycmF5W2Nvb3Jkc0FycmF5W2ldLnhdW2Nvb3Jkc0FycmF5W2ldLnldLmFscGhhID0gMC41O1xyXG4gICAgICAgIGlmKGNvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2Nvb3Jkc0FycmF5W2ldLnhdW2Nvb3Jkc0FycmF5W2ldLnldLnRpbnQgPSBjb2xvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjb29yZHNBcnJheVtpXS54XVtjb29yZHNBcnJheVtpXS55XS50aW50ID0gMHhmZmQ5MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd25UaWxlcy5wdXNoKHt4OmNvb3Jkc0FycmF5W2ldLngseTpjb29yZHNBcnJheVtpXS55fSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGhpZGVUaWxlcyh0aWxlQXJyYXkpIHtcclxuICAgIGlmKCF0aWxlQXJyYXkpIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuc2hvd25UaWxlcykge1xyXG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt0aGlzLnNob3duVGlsZXNbaV0ueF1bdGhpcy5zaG93blRpbGVzW2ldLnldLmFscGhhID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93blRpbGVzID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkYW1hZ2VUaWxlKGRhdGEpIHtcclxuICBcclxuICAgIHZhciBjdXJyZW50VGlsZSA9IHRoaXMudGlsZUFycmF5W2RhdGEueF1bZGF0YS55XTtcclxuICAgIFxyXG4gICAgY3VycmVudFRpbGUudGludCA9IDBYMzMzMzMzO1xyXG4gICAgY3VycmVudFRpbGUuYWxwaGEgPSAwLjg7XHJcbiAgICBjdXJyZW50VGlsZS50aWxlRGFtYWdlZCA9IHRydWU7XHJcbiAgICBcclxuICAgIHZhciB0ZXN0ID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoY3VycmVudFRpbGUueCwgY3VycmVudFRpbGUueSArKGN1cnJlbnRUaWxlLmhlaWdodC8yKSwgJ2Jvb20nKTtcclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFkZCh0ZXN0KTtcclxuICAgIHRlc3QuYW5nbGUgPSAyNzA7XHJcbiAgICB0ZXN0LmFuY2hvci5zZXQoMC41LDAuNyk7XHJcbiAgICB0ZXN0LmFuaW1hdGlvbnMuYWRkKCdib29tJyk7XHJcbiAgICB0ZXN0LmFuaW1hdGlvbnMucGxheSgnYm9vbScsIDIwLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgc3RhcnRHYW1lKCkge1xyXG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XHJcbiAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcHRpa29uO1xyXG4iLCJpbXBvcnQgUmVzb3VyY2VzIGZyb20gJy4uL3ByZWZhYnMvcmVzb3VyY2VzJztcclxuaW1wb3J0IFBlcnNvbm5lbCBmcm9tICcuLi9wcmVmYWJzL3BlcnNvbm5lbCc7XHJcbmltcG9ydCBPcmRuYW5jZSBmcm9tICcuLi9wcmVmYWJzL29yZG5hbmNlJztcclxuaW1wb3J0IENsb25lIGZyb20gJy4uL3ByZWZhYnMvY2xvbmUnOyAvLyBUaGlzIHdpbGwgYmUgaW5jb3Jwb3JhdGVkIGluIHBlcnNvbm5lbFxyXG5cclxuY2xhc3MgVGVhbSB7XHJcblxyXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7IFxyXG4gICAgdGhpcy5yZWMgPSBuZXcgUmVzb3VyY2VzKCk7XHJcbiAgICB0aGlzLnJlY0VudW0gPSB0aGlzLnJlYy5yZXNvdXJjZUVudW07XHJcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgXHJcbiAgICB0aGlzLnBlcnNvbm5lbCA9IFtdO1xyXG4gICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMgPSBbXTtcclxuICB9XHJcbiAgXHJcbiAgcmVmcmVzaCgpIHtcclxuICAgIGZvciAodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcclxuICAgICAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvL1Jlc291cmNlIEludGVyZmFjZVxyXG4gIGdldFJlY0NvdW50KHR5cGUpIHtcclxuICAgIHJldHVybiB0aGlzLnJlYy5nZXRDb3VudCh0eXBlKTtcclxuICB9XHJcbiAgXHJcbiAgY2hlY2tSZWModHlwZSwgY291bnQpIHtcclxuICAgIGlmICh0aGlzLmdldFJlY0NvdW50KHR5cGUpID49IGNvdW50KSBcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgXHJcbiAgZXhjaGFuZ2VSZWMoY29zdFR5cGUsIGNvc3RDb3VudCwgeWllbGRUeXBlLCB5aWVsZENvdW50KSB7XHJcbiAgfVxyXG4gIFxyXG4gIGFkZFJlYyh0eXBlLCBjb3VudCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVjLmFkZCh0eXBlLCBjb3VudCk7XHJcbiAgfVxyXG4gIFxyXG4gIHJlbW92ZVJlYyh0eXBlLCBjb3VudCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVjLnJlbW92ZSh0eXBlLCBjb3VudCk7XHJcbiAgfVxyXG4gIFxyXG4gIGFkZENsb25lKHgsIHksIHByb3BzKSB7XHJcbiAgICB2YXIgcG9pbnQgPSB0aGlzLmdhbWUuc2VwdGlrb24udGlsZVRvUGl4ZWxzKHgseSk7XHJcbiAgICB2YXIgY2xvbmUgPSBuZXcgQ2xvbmUodGhpcy5nYW1lLHBvaW50LngscG9pbnQueSk7XHJcbiAgICBjbG9uZS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnggPSB4O1xyXG4gICAgY2xvbmUuY3VycmVudFRpbGVDb29yZGluYXRlcy55ID0geTtcclxuICAgIFxyXG4gICAgZm9yICh2YXIgaSBpbiBwcm9wcykge1xyXG4gICAgICAgIGNsb25lW2ldID0gcHJvcHNbaV07XHJcbiAgICB9XHJcbiAgICB0aGlzLnBlcnNvbm5lbC5wdXNoKGNsb25lKTtcclxuICAgIHRoaXMuZ2FtZS5zdGFnZS5hZGRDaGlsZChjbG9uZSk7XHJcbiAgfVxyXG4gIFxyXG4gIGdldENsb25lKGNvb3JkKSB7XHJcbiAgICBmb3IgKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XHJcbiAgICAgICAgaWYodGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy54ID09IGNvb3JkLnggJiYgdGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy55ID09IGNvb3JkLnkpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wZXJzb25uZWxbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBraWxsQ2xvbmUoY29vcmQpIHtcclxuICAgIHZhciBjbG9uZSA9IHRoaXMuZ2V0Q2xvbmUoY29vcmQpO1xyXG4gICAgdGhpcy5nYW1lLnN0YWdlLnJlbW92ZUNoaWxkKGNsb25lKTtcclxuICAgIFxyXG4gICAgdmFyIGluZGV4ID0gdGhpcy5wZXJzb25uZWwuaW5kZXhPZihjbG9uZSk7XHJcbiAgICB0aGlzLnBlcnNvbm5lbC5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICBcclxuICAgIGNsb25lLnJlbW92ZSgpO1xyXG4gIH1cclxuICAgIFxyXG4gIG9mZmVyTGVnYWxDbG9uZXMoKSB7XHJcbiAgICAvLyBPZmZlciBjbG9uZXMgdGhhdCBoYXZlIGxlZ2FsIG1vdmVzXHJcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcclxuICAgICAgICB2YXIgbW92ZXMgPSB0aGlzLnBlcnNvbm5lbFtpXS5nZXRMZWdhbE1vdmVzKCk7XHJcblxyXG4gICAgICAgIGlmKG1vdmVzICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBlcnNvbm5lbFtpXS5oaWdobGlnaHRPbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgb2ZmZXJHdW5uZXJzKCkge1xyXG4gICAgLy8gT2ZmZXIgZ3VubmVyIFxyXG4gICAgdmFyIGd1bm5lckZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcclxuICAgICAgICBpZih0aGlzLnBlcnNvbm5lbFtpXS5pc0d1bm5lcikge1xyXG4gICAgICAgICAgICBndW5uZXJGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vdGhpcy5wZXJzb25uZWxbaV0uaGlnaGxpZ2h0T24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ3VubmVyRm91bmQ7XHJcbiAgfVxyXG4gIFxyXG4gIHNlbGVjdEd1bm5lcihjb29yZHMpIHtcclxuICAgIHZhciBjbG9uZSA9IHRoaXMuZ2V0Q2xvbmUoY29vcmRzKTtcclxuICAgIGlmKCFjbG9uZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBpZighY2xvbmUuaXNHdW5uZXIpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgdmFyIGV4aXN0aW5nR3VubmVyID0gdGhpcy5zZWxlY3RlZEd1bm5lcnMuaW5kZXhPZihjbG9uZSk7XHJcbiAgICBpZihleGlzdGluZ0d1bm5lciA+PSAwKXtcclxuICAgICAgICBjbG9uZS5oaWdobGlnaHRPZmYoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycy5zcGxpY2UoZXhpc3RpbmdHdW5uZXIsIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjbG9uZS5oaWdobGlnaHRPbigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzLnB1c2goY2xvbmUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBjbGVhckd1bm5lcnMoKSB7XHJcbiAgICBmb3IgKHZhciBpIGluIHRoaXMuc2VsZWN0ZWRHdW5uZXJzKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnNbaV0uaGlnaGxpZ2h0T2ZmKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGVjdGVkR3VubmVycyA9IFtdO1xyXG4gIH1cclxuICBcclxuICBzZWxlY3RDbG9uZUZvck1vdmUoY29vcmRzKSB7ICAgIFxyXG4gIFxyXG4gICAgdmFyIGNsb25lID0gdGhpcy5nZXRDbG9uZShjb29yZHMpO1xyXG4gICAgaWYoIWNsb25lKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcclxuICAgICAgICB0aGlzLnBlcnNvbm5lbFtpXS5oaWdobGlnaHRPZmYoKTtcclxuICAgIH1cclxuICAgIHRoaXMubGVnYWxUaWxlcyA9IGNsb25lLmdldExlZ2FsTW92ZXMoKTtcclxuICAgIHRoaXMuc2VsZWN0ZWRDbG9uZSA9IGNsb25lO1xyXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnNob3dUaWxlcyh0aGlzLmxlZ2FsVGlsZXMpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIG1vdmVTZWxlY3RlZENsb25lKGNvb3Jkcykge1xyXG4gICAgZm9yKHZhciBpIGluIHRoaXMubGVnYWxUaWxlcykge1xyXG4gICAgICAgIGlmKHRoaXMubGVnYWxUaWxlc1tpXS50aWxlWCA9PSBjb29yZHMueCAmJiB0aGlzLmxlZ2FsVGlsZXNbaV0udGlsZVkgPT0gY29vcmRzLnkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENsb25lLm1vdmUoY29vcmRzKTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2VsZWN0ZWRDbG9uZTtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlcztcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbTsiLCJjbGFzcyBPcmRuYW5jZSB7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLk9yZG5hbmNlID0gT3JkbmFuY2U7XHJcbiIsImNsYXNzIFBlcnNvbm5lbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodHlwZSwgeCwgeSwgdXVpZCkge1xyXG4gICAgICAgIHRoaXMudHlwZUVudW0gPSBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICAgICAgQ0xPTkU6IDAsXHJcbiAgICAgICAgICAgIEJJT0RST05FOiAxXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XHJcbiAgICAgICAgdGhpcy51bmRlckVzcGlvbmFnZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNHdW5uZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVFbnVtW3R5cGUudG9VcHBlckNhc2UoKV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Jpb2Ryb25lJzpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjbG9uZSc6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZUVudW1bdHlwZV07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG1vdmUoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuUGVyc29ubmVsID0gUGVyc29ubmVsO1xyXG4iLCJ2YXIgUGVyc29ubmVsID0gcmVxdWlyZSgnLi9wZXJzb25uZWwnKS5QZXJzb25uZWw7XHJcbnZhciBSZXNvdXJjZSA9IHJlcXVpcmUoJy4vcmVzb3VyY2UnKS5SZXNvdXJjZTtcclxudmFyIE9yZG5hbmNlID0gcmVxdWlyZSgnLi9vcmRuYW5jZScpLk9yZG5hbmNlO1xyXG5cclxuXHJcbmNsYXNzIFBsYXllciB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc29ja2V0SUQsIGlkLCB1dWlkKSB7IFxyXG4gICAgICAgIHRoaXMuc29ja2V0SUQgPSBzb2NrZXRJRDtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7IC8vcGxheWVyIDEgb3IgcGxheWVyIDI7IHRoaXMgd2lsbCBkZXRlcm1pbmUgdGhlIHNpZGUgb2YgdGhlIGJvYXJkIGF0IGNsaWVudCBzdGFydC5cclxuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xyXG4gICAgICAgIHRoaXMucGVyc29ubmVsQXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLnJlc291cmNlQXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLm9yZG5hbmNlQXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLnJlYWR5VG9TdGFydCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RhcnRpbmdDbG9uZUNvdW50ID0gNTtcclxuICAgICAgICB0aGlzLmFybXNBcnJheSA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudExlZ2FsUGllY2VzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdFJlc291cmNlcygpO1xyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgYWRkUGVyc29ubmVsKHR5cGUsIHgsIHksIHV1aWQpIHtcclxuICAgICAgICBpZih0eXBlID09IFwiY2xvbmVcIiAmJiB0aGlzLmdldFBlcnNvbm5lbCh0eXBlKS5sZW5ndGggPCB0aGlzLnN0YXJ0aW5nQ2xvbmVDb3VudCkge1xyXG4gICAgICAgICAgICB2YXIgcGVyc29ubmVsID0gbmV3IFBlcnNvbm5lbCgnY2xvbmUnLCB4LCB5LCB1dWlkKTtcclxuICAgICAgICAgICAgdGhpcy5wZXJzb25uZWxBcnJheS5wdXNoKHBlcnNvbm5lbCk7XHJcbiAgICAgICAgICAgIHJldHVybiBwZXJzb25uZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVQZXJzb25uZWwocGVyc29ubmVsLCBwdXJnZUFsbCkge1xyXG4gICAgICAgIGlmIChwdXJnZUFsbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBlcnNvbm5lbEFycmF5ID0gW107XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGVyc29ubmVsKHR5cGUpIHtcclxuICAgICAgICB2YXIgcmV0dXJuQXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWxBcnJheSkge1xyXG4gICAgICAgICAgICBpZih0eXBlID09PSBudWxsIHx8IHRoaXMucGVyc29ubmVsQXJyYXlbaV0udHlwZSA9PT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy5wZXJzb25uZWxBcnJheVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQZXJzb25uZWxCeVVVSUQodXVpZCkge1xyXG4gICAgICAgIHZhciBwZXJzb25uZWwgPSB0aGlzLmdldFBlcnNvbm5lbCgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gcGVyc29ubmVsKSB7XHJcbiAgICAgICAgICAgIGlmIChwZXJzb25uZWxbaV0udXVpZCA9PSB1dWlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGVyc29ubmVsW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQZXJzb25uZWxCeVBvaW50KHBvaW50KSB7XHJcbiAgICAgICAgdmFyIHBlcnNvbm5lbHMgPSB0aGlzLmdldFBlcnNvbm5lbCgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGVyc29ubmVscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocGVyc29ubmVsc1tpXS54ID09IHBvaW50LnggJiYgcGVyc29ubmVsc1tpXS55ID09IHBvaW50LnkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwZXJzb25uZWxzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja1BlcnNvbm5lbE1vdmUocGVyc29ubmVsLCBwb2ludCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50TGVnYWxQaWVjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHBlcnNvbm5lbC54ID09IHRoaXMuY3VycmVudExlZ2FsUGllY2VzW2ldLm9yaWdpbi54ICYmIHBlcnNvbm5lbC55ID09IHRoaXMuY3VycmVudExlZ2FsUGllY2VzW2ldLm9yaWdpbi55KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBvaW50ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jdXJyZW50TGVnYWxQaWVjZXNbaV0ubW92ZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudExlZ2FsUGllY2VzW2ldLm1vdmVzW2pdLnggPT0gcG9pbnQueCAmJiB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlc1tpXS5tb3Zlc1tqXS55ID09IHBvaW50LnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1cmdlTGVnYWxQaWVjZXMocGVyc29ubmVsLCBwdXJnZUFsbE1hdGNoaW5nVHlwZXMpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHBlcnNvbm5lbCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGVnYWxQaWVjZXMgPSBbXTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaSA9IHRoaXMuY3VycmVudExlZ2FsUGllY2VzLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAoXHJcbiAgICAgICAgICAgIGktLSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TGVnYWxQaWVjZXNbaV0udHlwZSA9PT0gcGVyc29ubmVsLnR5cGUgJiYgcHVyZ2VBbGxNYXRjaGluZ1R5cGVzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlcy5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRHdW5uZXJzKCkge1xyXG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xyXG4gICAgICAgIHZhciBjbG9uZXMgPSB0aGlzLmdldFBlcnNvbm5lbCgnY2xvbmUnKTtcclxuICAgICAgICBmb3IgKHZhciBpIGluIGNsb25lcykge1xyXG4gICAgICAgICAgICBpZiAoY2xvbmVzW2ldLmlzR3VubmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKGNsb25lc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVybkFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlbGVjdGVkR3VubmVycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEd1bm5lcnM7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlR3VubmVyU2VsZWN0aW9uKGd1bm5lcikge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkR3VubmVycy5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycy5wdXNoKGd1bm5lcik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnNlbGVjdGVkR3VubmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoZ3VubmVyKSA9PT0gSlNPTi5zdHJpbmdpZnkodGhpcy5zZWxlY3RlZEd1bm5lcnNbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycy5zcGxpY2UoaSwxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycy5wdXNoKGd1bm5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3JkbmFuY2UodHlwZSkge1xyXG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLm9yZG5hbmNlQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYodHlwZSA9PT0gbnVsbCB8fCB0aGlzLm9yZG5hbmNlQXJyYXlbaV0udHlwZSA9PT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy5vcmRuYW5jZUFycmF5W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVybkFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRSZXNvdXJjZXMoKSB7XHJcbiAgICAgICAgdmFyIHJlY0FycmF5ID0gW1xyXG4gICAgICAgICAgICAnZW5lcmd5MScsIFxyXG4gICAgICAgICAgICAnZW5lcmd5MicsXHJcbiAgICAgICAgICAgICdveHlnZW4nLFxyXG4gICAgICAgICAgICAnbWV0YWwnLFxyXG4gICAgICAgICAgICAnYmlvZHJvbmUnLFxyXG4gICAgICAgICAgICAncm9ja2V0JyxcclxuICAgICAgICAgICAgJ3VyYW5pdW0nLFxyXG4gICAgICAgICAgICAnYmlvbWFzcydcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB2YXIgcmVjID0gbnVsbDtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHJlY0FycmF5KSB7XHJcbiAgICAgICAgICAgIHJlYyA9IG5ldyBSZXNvdXJjZShyZWNBcnJheVtpXSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VBcnJheVtyZWNBcnJheVtpXV0gPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgY291bnQgPSAwOyBjb3VudCA8IDEwOyBjb3VudCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPCA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5W3JlY0FycmF5W2ldXS5wdXNoKHJlYyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2VBcnJheVtyZWNBcnJheVtpXV0ucHVzaChudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRSZXNvdXJjZUNvdW50KHR5cGUpIHtcclxuICAgICAgICB2YXIgZm91bmRSZXNvdXJjZXMgPSAwO1xyXG4gICAgICAgIHZhciBjdXJyZW50UmVzb3VyY2VTbG90ID0gOTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJlbmVyZ3lcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSZXNvdXJjZUNvdW50KCdlbmVyZ3kxJykgKyB0aGlzLmdldFJlc291cmNlQ291bnQoJ2VuZXJneTInKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlIChjdXJyZW50UmVzb3VyY2VTbG90ID49IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXVtjdXJyZW50UmVzb3VyY2VTbG90XSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdLmRhbWFnZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZFJlc291cmNlcztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvdW5kUmVzb3VyY2VzKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm91bmRSZXNvdXJjZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2tSZXNvdXJjZSBkZWZhdWx0cyB0byBhc3N1bWUgeW91IGFyZSBjaGVja2luZyB0byBzcGVuZCBhIHJlc291cmNlLiBTZXQgXCJhY2NlcHRcIiB0byB0cnVlIGlmIHlvdSBhcmUgY2hlY2tpbmcgdG8gcmVjZWl2ZSBhIHJlc291cmNlXHJcbiAgICBjaGVja1Jlc291cmNlKHR5cGUsIGNvdW50LCBhY2NlcHQpIHtcclxuICAgICAgICB2YXIgY3VycmVudFJlc291cmNlU2xvdCA9IDk7XHJcbiAgICAgICAgdmFyIGZvdW5kUmVzb3VyY2VzID0gMDtcclxuICAgICAgICB2YXIgcmVzb3VyY2VTbG90cyA9IDA7XHJcblxyXG4gICAgICAgIGlmKHR5cGUgPT0gXCJudWtlXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzcGVjaWFsIGNhc2U6IHRoaXMgcHJvZHVjZXMgb3JkbmFuY2UuIENoZWNrIGJhY2sgbGF0ZXIuLi5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHR5cGUgPT0gXCJlbmVyZ3lcIikge1xyXG4gICAgICAgICAgICB2YXIgZTEgPSB0aGlzLmNoZWNrUmVzb3VyY2UoXCJlbmVyZ3kxXCIsIGNvdW50LCBhY2NlcHQpO1xyXG4gICAgICAgICAgICB2YXIgZTIgPSB0aGlzLmNoZWNrUmVzb3VyY2UoXCJlbmVyZ3kyXCIsIGNvdW50LCBhY2NlcHQpO1xyXG5cclxuICAgICAgICAgICAgaWYoZTEgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlMTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlMiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGUyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aGlsZSAoY3VycmVudFJlc291cmNlU2xvdCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY2NlcHQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZVNsb3RzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc291cmNlU2xvdHMgPT0gY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdLmRhbWFnZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmKGFjY2VwdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm91bmRSZXNvdXJjZXMrKztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoYWNjZXB0ICE9PSBmYWxzZSAmJiBmb3VuZFJlc291cmNlcyA9PT0gY291bnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1cnJlbnRSZXNvdXJjZVNsb3QtLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNwZW5kUmVzb3VyY2UodHlwZSwgY291bnQpIHtcclxuICAgICAgICB2YXIgY3VycmVudFJlc291cmNlU2xvdCA9IDk7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsQ291bnQgPSBjb3VudDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJlbmVyZ3lcIikge1xyXG4gICAgICAgICAgICB2YXIgc3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB3aGlsZSAoY291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5zcGVuZFJlc291cmNlKFwiZW5lcmd5MVwiLCAxKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLnNwZW5kUmVzb3VyY2UoXCJlbmVyZ3kyXCIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxDb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlIChjdXJyZW50UmVzb3VyY2VTbG90ID49IDAgJiYgY291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRSZXNvdXJjZVNsb3QtLTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXVtjdXJyZW50UmVzb3VyY2VTbG90XS5kYW1hZ2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUuZXJyb3IoXCJUcmllZCB0byBzcGVuZCByZXNvdXJjZXMgeW91IGRvbid0IGhhdmUhXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvcmlnaW5hbENvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIGFjY2VwdFJlc291cmNlKHR5cGUsIGNvdW50KSB7XHJcbiAgICAgICAgdmFyIHJlc291cmNlID0gbnVsbDtcclxuICAgICAgICB2YXIgY3VycmVudFJlc291cmNlU2xvdCA9IDk7XHJcbiAgICAgICAgdmFyIHNlYXJjaGluZyA9IHRydWU7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsQ291bnQgPSBjb3VudDtcclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJlbmVyZ3lcIikge1xyXG4gICAgICAgICAgICB2YXIgc3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB3aGlsZSAoY291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5hY2NlcHRSZXNvdXJjZShcImVuZXJneTFcIiwgMSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3VjY2VzcyAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5hY2NlcHRSZXNvdXJjZShcImVuZXJneTJcIiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbENvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoMSkge1xyXG4gICAgICAgICAgICBpZiAoc2VhcmNoaW5nID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBwZWVrIGF0IG5leHQgcmVzb3VyY2VcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwibm8gcm9vbSBmb3IgdGhpcyByZXNvdXJjZSFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZXNvdXJjZVNsb3QgPT09IDAgfHwgdGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3QgLSAxXSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudFJlc291cmNlU2xvdCArIDEgPiB0aGlzLnJlc291cmNlQXJyYXlbdHlwZV0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsQ291bnQgLSBjb3VudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc291cmNlID0gbmV3IFJlc291cmNlKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdID0gcmVzb3VyY2U7XHJcbiAgICAgICAgICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgaWYoY291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxDb3VudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRSZXNvdXJjZVNsb3QrKztcclxuICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjdXJyZW50UmVzb3VyY2VTbG90IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk91dCBvZiBib3VuZHMuIE5vIGVtcHR5IHJlc291cnVjZSBzbG90cyBmb3VuZC5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzLlBsYXllciA9IFBsYXllcjtcclxuIiwiY2xhc3MgUmVzb3VyY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5SZXNvdXJjZSA9IFJlc291cmNlO1xyXG4iLCJ2YXIgUGxheWVyID0gcmVxdWlyZSgnLi9wbGF5ZXInKS5QbGF5ZXI7XHJcbnZhciB1dWlkID0gcmVxdWlyZSgndXVpZC92NCcpO1xyXG5cclxuY2xhc3MgU2VwdGlrb24ge1xyXG4gICAgXHJcblx0Y29uc3RydWN0b3IoaW8pIHtcclxuICAgICAgICB0aGlzLmlvID0gaW87XHJcbiAgICAgICAgdGhpcy5sYXN0UGxheWVySUQgPSAwO1xyXG4gICAgICAgIHRoaXMucGxheWVyc0FycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAwO1xyXG4gICAgICAgIHRoaXMudHVyblN0YXRlID0gMDtcclxuICAgICAgICB0aGlzLnV1aWQgPSByZXF1aXJlKCd1dWlkL3Y0JykoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERpY2VWYWx1ZSA9IDA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgICAgIFNFVFVQOiAwLFxyXG4gICAgICAgICAgICBHQU1FOiAxLCBcclxuICAgICAgICAgICAgUEFVU0U6IDIsXHJcbiAgICAgICAgICAgIEdBTUVPVkVSOiAzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50dXJuU3RhdGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgICAgIFJPTEw6IDAsICAgIC8vIExpdGVyYWxseSB0aGUgYWN0IG9mIHJvbGxpbmcgdGhlIGRpZVxyXG4gICAgICAgICAgICBNT1ZFOiAxLCAgICAvLyBTZWxlY3RpbmcgdGhlIGNsb25lIGFuZCB0aGVpciB0YXJnZXQgc3BhY2VcclxuICAgICAgICAgICAgQUNUSU9OOiAyLCAgLy8gVHJpZ2dlciB0aWxlICBcclxuICAgICAgICAgICAgVEFSR0VUUzogMywgLy8gQXNzaWduIHRhcmdldChzKSAoaWUuIC0gZ3VubmVyLCB0aWxlLCBlc3Bpb25hZ2VkIGNsb25lKSBcclxuICAgICAgICAgICAgQklPRFJPTkU6IDQsLy8gTW92ZSBiaW9kcm9uZShzKVxyXG4gICAgICAgICAgICBFTkQ6IDUgICAgICAvLyBhc3Nlc3MgdmljdG9yeSBjb25kaXRpb25zXHJcbiAgICAgICAgfSk7ICBcclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25FbnVtID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgICAgIE5PUlRIOjEsXHJcbiAgICAgICAgICAgIEVBU1Q6MixcclxuICAgICAgICAgICAgU09VVEg6NCxcclxuICAgICAgICAgICAgV0VTVDo4XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZUNvbHVtbnMgPSAzMTtcclxuICAgICAgICB0aGlzLnRpbGVSb3dzID0gMjE7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZUFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5jcmVhdGVUaWxlQXJyYXkoKTsgXHJcblxyXG4gICAgICAgIHRoaXMucXVldWVkQmF0dGxlVGlsZVR5cGUgPSBudWxsOyAgICAgXHJcblx0fVxyXG5cclxuICAgIGNsaWNrZWQoZGF0YSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFByb2Nlc3MgdGhlIGNsaWNrIGZyb20gdGhlIGNsaWVudC4gXHJcbiAgICAgICAgLy8gQmFzaWNhbGx5LCBjaGVjayBnYW1lIGFuZCB0dXJuIHN0YXRlLlxyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5nYW1lU3RhdGUpIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSB0aGlzLmdhbWVTdGF0ZUVudW0uU0VUVVA6XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUGxheWVyIGlzIHBsYWNpbmcgbmV3IGNsb25lcyBpbiB0aGUgZmllbGQuXHJcbiAgICAgICAgICAgICAgICB2YXIgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXJCeVNvY2tldElEKGRhdGEuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3MgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihwbGF5ZXIuZ2V0UGVyc29ubmVsKCdjbG9uZScpLmxlbmd0aCA8IHBsYXllci5zdGFydGluZ0Nsb25lQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5wbGFjZUNsb25lKHBsYXllciwgZGF0YS54LCBkYXRhLnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgb24gcGVyc29ubmVsIGNvdW50LiBJZiBwZXJzb25uZWwgaXMgYXQgdGhlIHN0YXJ0IGNvdW50LCBzZW5kIG1vZGFsIHRvIHN0YXJ0IGdhbWUuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocGxheWVyLmdldFBlcnNvbm5lbCgnY2xvbmUnKS5sZW5ndGggPT0gcGxheWVyLnN0YXJ0aW5nQ2xvbmVDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3JlcXVlc3QnLCB7Y2FsbGJhY2s6XCJtb2RhbFwiLCBkZXRhaWxzOiB7dHlwZTpcImFza1N0YXJ0XCJ9fSwgcGxheWVyLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYXNlIHRoaXMuZ2FtZVN0YXRlRW51bS5HQU1FOlxyXG5cclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkUGVyc29ubmVsID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnR1cm5TdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLk1PVkU6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgY2FuIG1vdmUgb25lIGNsb25lIHBlciB0dXJuLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RlOiBUaGUgYXJyYXkgb2YgbGVnYWwgcGVyc29ubmVsIChpbiB0aGlzLmFjdGl2ZVBsYXllcikgd2FzIHNlbnQgYnkgcm9sbERpY2UoKS5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAnaGlkZVRpbGVzJywgZGV0YWlsczogbnVsbH0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGVyc29ubmVsID0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UGVyc29ubmVsQnlQb2ludCh7eDpkYXRhLngsIHk6ZGF0YS55fSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRQZXJzb25uZWwgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbG9uZSB3YXMgY2xpY2tlZCwgc286XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNMZWdhbFBlcnNvbm5lbCA9IHRoaXMuYWN0aXZlUGxheWVyLmNoZWNrUGVyc29ubmVsTW92ZShzZWxlY3RlZFBlcnNvbm5lbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBwZXJzb25uZWwgaXMgYSBcImJpb2Ryb25lXCIgdHlwZSBBTkQgY2xvbmVzIHJlbWFpbiBpbiB0aGUgUGxheWVyLmN1cnJlbnRsZWdhbHBpZWNlcyBhcnJheSwgZW1pdCBtb2RhbCB3YXJuaW5nIHRvIHBsYXllci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsb25lIG11c3QgbW92ZSBhbmQgdGlsZSBtdXN0IGJlIHRyaWdnZXJlZCBwcmlvciB0byBiaW9kcm9uZSBtb3ZlbWVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0xlZ2FsUGVyc29ubmVsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUgPSBzZWxlY3RlZFBlcnNvbm5lbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgLSBTaG93IENsb25lcyBpbiBjbGllbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgVE9ETzogZW1pdCBzb21ldGhpbmcgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAnc2hvd1RpbGVzJywgZGV0YWlsczoge319LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIC0gU2hvdyB0aGlzIGNsb25lJ3MgbW92ZXMgaW4gY2xpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFRPRE86IGVtaXQgc29tZXRoaW5nIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3Nob3dUaWxlcycsIGRldGFpbHM6IHt9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAtIHNob3cgdGhpcyBjbG9uZSBpbiBkaWZmZXJlbnQgY29sb3IgaW4gY2xpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFRPRE86IGVtaXQgc29tZXRoaW5nIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3Nob3dUaWxlcycsIGRldGFpbHM6IHt9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0xlZ2FsTW92ZSA9IHRoaXMuYWN0aXZlUGxheWVyLmNoZWNrUGVyc29ubmVsTW92ZSh0aGlzLmFjdGl2ZVBsYXllci5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZSx7eDpkYXRhLngsIHk6ZGF0YS55fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNMZWdhbE1vdmUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogZW1pdCBzb21ldGhpbmcgdG8gc2hvdyBjbG9uZXMgdG8gY2xpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdzaG93VGlsZXMnLCBkZXRhaWxzOiB7fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUubW92ZShkYXRhLngsIGRhdGEueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdtb3ZlUGVyc29ubmVsJywgZGV0YWlsczoge3V1aWQ6dGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUudXVpZCwgeDpkYXRhLngsIHk6ZGF0YS55fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHt0eXBlOlwicGVyc29ubmVsXCIsIGRldGFpbHM6IHt1dWlkOnRoaXMuYWN0aXZlUGxheWVyLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlLnV1aWQsIHg6ZGF0YS54LCB5OmRhdGEueX19LCB0aGlzLmdldFBsYXllck9wcG9uZW50KHRoaXMuYWN0aXZlUGxheWVyKS5zb2NrZXRJRCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsZWFyIG1vdmVkIHBlcnNvbm5lbCBmcm9tIHRoZSBwbGF5ZXIgYXJyYXkuIElmIG1vdmVkIHBlcnNvbm5lbCB3YXMgYSBjbG9uZSwgcmVtb3ZlIEFMTCBjbG9uZXMgZnJvbSBhcnJheS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllci5wdXJnZUxlZ2FsUGllY2VzKHRoaXMuYWN0aXZlUGxheWVyLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlLCB0cnVlKTsgLy8gMm5kIGFyZzogdHJ1ZSBpcyBwYXNzZWQgZm9yIGNsb25lczsgbnVsbCBmb3IgYmlvZHJvbmVzLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBUSGlzIGlzIGRpcnR5IGNvZGUgdG8gdGVzdCBndW5uZXIgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0VGlsZShkYXRhLngsIGRhdGEueSkubmFtZSA9PSBcInN1cmZhY2VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR1cm5TdGF0ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVUaWxlKHt4OmRhdGEueCwgeTpkYXRhLnl9KTsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3RpdmVQbGF5ZXIoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IEVORCBkaXJ0eSBjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50dXJuU3RhdGUrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB0cmlnZ2VyIHRpbGUgYW5kIGVtaXQgYmF0dGxlIHRhcmdldHMgKGd1bm5lcnMsIGV0YykgdG8gUGxheWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVRpbGUoe3g6ZGF0YS54LCB5OmRhdGEueX0pOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllci5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMudHVyblN0YXRlRW51bS5BQ1RJT046XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgd2lsbCBkZXNpZ25hdGUgZ3VubmVyKHMpIGZvciBmaXJpbmcgYW5kL29yIGFkZGl0aW9uYWwgdGFyZ2V0cywgZGVwZW5kaW5nIG9uIHRoZSBiYXR0bGUgdGlsZSB0eXBlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgd2lsbCBjb25maXJtIG1vdmVtZW50IHNlbGVjdGlvbnMgd2l0aCBHTyFcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXJyYXkgb2YgZWxpZ2libGUgZ3VubmVycyBzZW50IHZpYSBhY3RpdmF0ZVRpbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW1pdCBhcnJheSBvZiBlbGlnaWJsZSBndW5uZXJzIGFuZCBudW1iZXIgb2Ygc2VsZWN0YWJsZSBndW5uZXJzIHRvIFBsYXllci5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucXVldWVkQmF0dGxlVGlsZVR5cGUgPT0gXCJjb3VudGVyRXNwaW9uYWdlXCIgfHwgdGhpcy5xdWV1ZWRCYXR0bGVUaWxlVHlwZSA9PSBcInJlcGFpclwiIHx8IHRoaXMucXVldWVkQmF0dGxlVGlsZVR5cGUgPT0gXCJyZXBhaXJUd29cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogU3BlY2lhbCBjYXNlcy4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBlcnNvbm5lbCA9IHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbEJ5UG9pbnQoe3g6ZGF0YS54LCB5OmRhdGEueX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkUGVyc29ubmVsICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci50b2dnbGVHdW5uZXJTZWxlY3Rpb24oc2VsZWN0ZWRQZXJzb25uZWwpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAnc2hvd1RpbGVzJywgZGV0YWlsczoge3g6ZGF0YS54LCB5OmRhdGEueX19LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdoaWRlVGlsZXMnLCBkZXRhaWxzOiB7eDpkYXRhLngsIHk6ZGF0YS55fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRHdW5uZXJzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMudHVyblN0YXRlRW51bS5UQVJHRVRTOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGxheWVyIHdpbGwgY2hvb3NlIGFkZGl0aW9uYWwgdGFyZ2V0cyBpZiByZXF1aXJlZCBieSB0aGUgdGlsZS4gRXNwb2luYWdlLCBmb3IgaW5zdGFuY2UsIHJlcXVpcmVzIGEgZ3VubmVyIGFuZCBhbiBlbmVteSBjbG9uZSBpbiB0aGUgc2VsZWN0ZWQgZ3VubmVyJ3MgbGluZSBvZiBmaXJlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgd2lsbCBjb25maXJtIHRhcmdldHMgd2l0aCBHTyFcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGFyZ2V0IHF1ZXVlZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQWN0aXZlUGxheWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMudHVyblN0YXRlRW51bS5FTkQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbnkgcG9zdC10dXJuIHByb2Nlc3NpbmcgY2FuIGhhcHBlbiBoZXJlLiBPdGhlcndpc2UsIHRoZSB0dXJuIG1heSBhbHJlYWR5IGJlIG92ZXIuLi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50dXJuU3RhdGUgPSB0aGlzLnR1cm5TdGF0ZUVudW0uUk9MTDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdvKGRhdGEpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMudHVyblN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLk1PVkU6XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGNhc2UgbWF5IG5vdCBiZSBuZWVkZWQuXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIHRoaXMudHVyblN0YXRlRW51bS5BQ1RJT046XHJcbiAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgaGFzIGNvbmZpcm1lZCBndW5uZXIgc2VsZWN0aW9uLlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogRmlyZSB3ZWFwb24gLyB0cmlnZ2VyIHRpbGUuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmVXZWFwb24odGhpcy5xdWV1ZWRCYXR0bGVUaWxlVHlwZSwgdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0U2VsZWN0ZWRHdW5uZXJzKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGRlYWwgdGhlIGRhbWFnZS5cclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGNvbnN1bWUgcmVzb3VyY2VzLlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogRW1pdCB0byBjbGllbnRzXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBJZiB0YXJnZXRzIGFyZSByZXF1aXJlZCAoaWUgZXNwaW9uYWdlKSBzZW5kIHRoYXQgYXJyYXkgbm93LlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogQWR2YW5jZSB0dXJuc3RhdGUgKGNhbGN1bGF0ZSBpZiBmdXJ0aGVyIHR1cm5zdGF0ZSBhcmUgbmVlZGVkLiBUaGlzIGNvdWxkIGJlIGVuZCBvZiB0dXJuLilcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLlRBUkdFVFM6XHJcbiAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgaGFzIGNvbmZpcm1lZCBhbGwgdGFyZ2V0cyAodGhpcyB3aWxsIGFwcGx5IHRvIGxpbWl0ZWQgYmF0dGxlIHRpbGVzIGxpa2UgZXNwaW9uYWdlKVxyXG4gICAgICAgICAgICAgICAgLy8gSSBtYXkgY29tZSBiYWNrIHRvIHRoaXMgYSBiaXQgbGF0ZXIuXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBVcGRhdGUgY2xpZW50IHdpdGggcmVzdWx0XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uQklPRFJPTkU6XHJcbiAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgaGFzIGNvbmZpcm1lZCB0aGF0IGJpb2Ryb25lIHNlbGVjdGlvbiAoaWYgYW55KSBpcyBmaW5hbC4gXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBNb3ZlIGJpb2Ryb25lKHMpIGFuZCB3cmVhayBoYXZvay4gXHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBhZHZhbmNlIHR1cm5zdGF0ZVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLkVORDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH1cclxuXHJcblx0YWRkTmV3UGxheWVyKHNvY2tldElELCB1dWlkKSB7XHJcbiAgICAgICAgdGhpcy5sYXN0UGxheWVySUQrKztcclxuICAgICAgICB2YXIgcGxheWVyID0gbmV3IFBsYXllcihzb2NrZXRJRCwgdGhpcy5sYXN0UGxheWVySUQsIHV1aWQpO1xyXG4gICAgICAgIHRoaXMucGxheWVyc0FycmF5LnB1c2gocGxheWVyKTtcclxuICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3VwZGF0ZVBsYXllcicsIGRldGFpbHM6IHtpZDogdGhpcy5sYXN0UGxheWVySUR9fSwgc29ja2V0SUQpO1xyXG4gICAgICAgIHJldHVybiBwbGF5ZXI7XHJcblx0fVxyXG5cclxuICAgIGFkZFBsYXllcihwbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLnBsYXllcnNBcnJheS5wdXNoKHBsYXllcik7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICd1cGRhdGVQbGF5ZXInLCBkZXRhaWxzOiB7aWQ6IHBsYXllci5pZH19LCBwbGF5ZXIuc29ja2V0SUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBsYXllclN0YXRlKHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIHBsYXllciA9IG51bGw7XHJcbiAgICAgICAgc3dpdGNoIChzdGF0ZS52YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlICdyZXNldCc6IFxyXG4gICAgICAgICAgICAgICAgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXJCeVNvY2tldElEKHN0YXRlLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgIHBsYXllci5yZW1vdmVQZXJzb25uZWwobnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcInJlbW92ZUFsbFBlcnNvbm5lbFwiLCBkZXRhaWxzOiB7fX0sIHBsYXllci5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOiBcclxuICAgICAgICAgICAgICAgIHBsYXllciA9IHRoaXMuZ2V0UGxheWVyQnlTb2NrZXRJRChzdGF0ZS5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIucmVhZHlUb1N0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHZhciBvcHBvbmVudCA9IHRoaXMuZ2V0UGxheWVyT3Bwb25lbnQocGxheWVyKTtcclxuICAgICAgICAgICAgICAgIGlmKCFvcHBvbmVudCB8fCAhb3Bwb25lbnQucmVhZHlUb1N0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3BwQ2xvbmVzID0gb3Bwb25lbnQuZ2V0UGVyc29ubmVsKCdjbG9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50UGxheWVyQ2xvbmVzID0gcGxheWVyLmdldFBlcnNvbm5lbCgnY2xvbmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90aWZ5IGN1cnJlbnQgcGxheWVyIG9mIG9wcG9uZW50IHBvc2l0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwbGF5ZXJQYXlsb2FkID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBvcHBDbG9uZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyUGF5bG9hZC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6b3BwQ2xvbmVzW2ldLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Om9wcENsb25lc1tpXS55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXVpZDpvcHBDbG9uZXNbaV0udXVpZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHt0eXBlOlwicGVyc29ubmVsXCIsIGRldGFpbHM6cGxheWVyUGF5bG9hZH0sIHBsYXllci5zb2NrZXRJRCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGlmeSBvcHBvbmVudCBvZiBjdXJyZW50IHBsYXllcidzIHBvc2l0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHBQYXlsb2FkID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYyBpbiBjdXJyZW50UGxheWVyQ2xvbmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wcFBheWxvYWQucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OmN1cnJlbnRQbGF5ZXJDbG9uZXNbY10ueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6Y3VycmVudFBsYXllckNsb25lc1tjXS55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXVpZDpjdXJyZW50UGxheWVyQ2xvbmVzW2NdLnV1aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHt0eXBlOlwicGVyc29ubmVsXCIsIGRldGFpbHM6b3BwUGF5bG9hZH0sIG9wcG9uZW50LnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdCgndXBkYXRlJywge3R5cGU6XCJyZXNvdXJjZXNcIiwgYWN0aW9uOidpbml0J30pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllciA9IHRoaXMuZ2V0UmFuZG9tUGxheWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJvZmZlckRpY2VcIiwgZGV0YWlsczoge319LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUrKztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3Ioc3RhdGUudmFsdWUgKyBcIiBpcyBub3QgYSB2YWxpZCBwbGF5ZXIgc3RhdGUhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRQbGF5ZXJPcHBvbmVudChwbGF5ZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJzQXJyYXkubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJzQXJyYXlbMF0gPT09IHBsYXllcikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXlbMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5WzBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VBY3RpdmVQbGF5ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJ0YWtlRGljZVwiLCBkZXRhaWxzOiB7fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZVBsYXllciA9IHRoaXMuZ2V0UGxheWVyT3Bwb25lbnQodGhpcy5hY3RpdmVQbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwib2ZmZXJEaWNlXCIsIGRldGFpbHM6IHt9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJhbmRvbVBsYXllcigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMildO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRQbGF5ZXJCeVVVSUQodXVpZCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXJzQXJyYXlbaV0udXVpZCA9PSB1dWlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5W2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0UGxheWVyQnlTb2NrZXRJRChpZCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXJzQXJyYXlbaV0uc29ja2V0SUQgPT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheVtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxheWVyQ291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5Lmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0FybXMocGxheWVyKSB7XHJcbiAgICAgICAgcGxheWVyLmFybXNBcnJheSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gcGxheWVyLnBlcnNvbm5lbEFycmF5KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbGVBcnJheVtwbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueF1bcGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnldLnR5cGUgPT0gXCJhcm1vcnlcIikge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLmFybXNBcnJheS5wdXNoKHRoaXMudGlsZUFycmF5W3BsYXllci5wZXJzb25uZWxBcnJheVtpXS54XVtwbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueV0ubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNoZWNrR3VubmVycyhwbGF5ZXIpIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIHBsYXllci5wZXJzb25uZWxBcnJheSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50aWxlQXJyYXlbcGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnhdW3BsYXllci5wZXJzb25uZWxBcnJheVtpXS55XS50eXBlID09IFwic3VyZmFjZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0uaXNHdW5uZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLmlzR3VubmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhpc3RzUGxheWVyVVVJRCh1dWlkKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnBsYXllcnNBcnJheSkge1xyXG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcnNBcnJheVtpXS51dWlkID09IHV1aWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBhY3RpdmF0ZVRpbGUoZGF0YSkge1xyXG4gICAgICAgIHZhciB0aWxlID0gdGhpcy5nZXRUaWxlKGRhdGEueCwgZGF0YS55KTtcclxuICAgICAgICB2YXIgcmVtYWluaW5nQ291bnQgPSBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHN3aXRjaCAodGlsZS50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdXJmYWNlXCI6IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UGVyc29ubmVsQnlQb2ludCh7eDpkYXRhLngsIHk6ZGF0YS55fSkuaXNHdW5uZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwcm9kdWN0aW9uXCI6XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVGhyZWUgc3BlY2lhbCBjYXNlczogXHJcbiAgICAgICAgICAgICAgICAvLyAgLSBTZW5zb3IgQ2FiaW4gZG9lcyBub3QgY29zdCBvciB5aWVsZCBhbnl0aGluZy4gV2UgY2FuIGhhbmRsZSB0aGlzIGltbWVkaWF0ZWx5KVxyXG4gICAgICAgICAgICAgICAgLy8gIC0gUHJvZHVjdGlvbiBSZXBhaXIgY29zdHMsIGJ1dCB0cmlnZ2VycyBhIHJlcGFpciBqdXN0IGxpa2UgdGhlIFJlcGFpciBiYXR0bGUgdGlsZSAoV2UgbmVlZCB0byBjaGVjayBpZiB3ZSBjYW4gYWZmb3JkKVxyXG4gICAgICAgICAgICAgICAgLy8gIC0gTnVjbGVhciBBcm1vcnkgcHJvZHVjZXMgYSBudWtlIHdoaWNoIHJlbGllcyBvbiBvcmRuYW5jZSB3aGljaCBoYXMgbm90IGJlZW4gYnVpbHQgeWV0XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGlsZS5uYW1lID09IFwic2Vuc29yQ2FiaW5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBzZW5zb3IgY2FiaW4gc28ganVzdCB0cmlnZ2VyIHRoZSBhY3Rpb24gYW5kIG1vdmUgb24uXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZW5zb3IgY2FiaW5zIGFyZSBmcmVlIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRpbGUubmFtZSA9PSBcInByb2RSZXBhaXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIHJlcGFpciAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmlnZ2VyIHRoZSByZXBhaXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aWxlLm5hbWUgPT0gXCJudWNsZWFyQXJtb3J5XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIHRoZSByZXBhaXIgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQnVpbGQgYSBudWtlIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5jaGVja1Jlc291cmNlKHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlW2ldLCB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0Q291bnRbaV0pID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYW4ndCBhZmZvcmQgaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYW4ndCBhZmZvcmQgaXQhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogaW4gdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmNoZWNrUmVzb3VyY2UodGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRUeXBlW2pdLCB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZENvdW50W2pdLCB0cnVlKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm8gcm9vbSB0byBzdG9yZSBpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbid0IGFjY2VwdCB0aGUgeWllbGQgY3V6IHdlIGdvdCBubyByb29tIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrIGluIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nQ291bnQgPSB0aGlzLmFjdGl2ZVBsYXllci5zcGVuZFJlc291cmNlKHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlW2tdLCB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0Q291bnRba10pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWW91IGhhdmUgc3BlbnQgXCIgKyByZW1haW5pbmdDb3VudCArIFwiIFwiICsgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGVba10gKyBcIi4gVGhpcyBsZWF2ZXMgeW91IHdpdGggXCIgKyB0aGlzLmFjdGl2ZVBsYXllci5nZXRSZXNvdXJjZUNvdW50KHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlW2tdKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbCBpbiB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZFR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdDb3VudCA9IHRoaXMuYWN0aXZlUGxheWVyLmFjY2VwdFJlc291cmNlKHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkVHlwZVtsXSwgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRDb3VudFtsXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbWFpbmluZ0NvdW50KSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJZb3UgaGF2ZSBhZGRlZCBcIiArIHJlbWFpbmluZ0NvdW50ICsgXCIgXCIgKyB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZFR5cGVbbF0gKyBcIi4gVGhpcyBsZWF2ZXMgeW91IHdpdGggXCIgKyB0aGlzLmFjdGl2ZVBsYXllci5nZXRSZXNvdXJjZUNvdW50KHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkVHlwZVtsXSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBwbGF5ZXIgdG8gdGhlaXIgbmV3IHdhcmVob3VzZSB2YWx1ZXNcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FzZSBcImFybW9yeVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0FybXModGhpcy5hY3RpdmVQbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHBsYXllcidzIHBlcnNvbm5lbCB0byBiZSBhcm1lZFxyXG4gICAgICAgICAgICAgICAgLy8gTWF5YmUgaGF2ZSB0aHJlZSBvdmVybGFwcGluZyBzcHJpdGVzLiBEcmlsbCwgQ2Fubm9uLCBFeHBsb3NpdmVzP1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiYmF0dGxlXCI6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRpbGUubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzaGllbGRcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYmlvZHJvbmVcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibGFzZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidGhlcm1pdGVcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2F0ZWxsaXRlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJvY2tldFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlc3Bpb25hZ2VcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidGFrZW92ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy50dXJuU3RhdGUrKzsgLy8gU2V0IHN0YXRlIHRvIEFDVElPTi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRSZXNvdXJjZUNvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRSZXNvdXJjZUFmZm9yZGFiaWxpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWZmb3JkYWJsZVJvdW5kcyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlR3VubmVycyA9IHRoaXMuYWN0aXZlUGxheWVyLmdldEd1bm5lcnMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVHdW5uZXJzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gTm8gZ3VubmVycyEgR2V0IG91dCBvZiBoZXJlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtIGluIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VDb3VudCA9IHRoaXMuYWN0aXZlUGxheWVyLmdldFJlc291cmNlQ291bnQodGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGVbbV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlQWZmb3JkYWJpbGl0eSA9IGN1cnJlbnRSZXNvdXJjZUNvdW50IC8gdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdENvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZXNvdXJjZUFmZm9yZGFiaWxpdHkgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBOb3QgZW5vdWdoIG9mIGEgcmVzb3VyY2UhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFmZm9yZGFibGVSb3VuZHMgPT09IG51bGwgfHwgY3VycmVudFJlc291cmNlQWZmb3JkYWJpbGl0eSA8IGFmZm9yZGFibGVSb3VuZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZmZvcmRhYmxlUm91bmRzID0gY3VycmVudFJlc291cmNlQWZmb3JkYWJpbGl0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlbGwgcGxheWVyIHRoZXkgY2FuIGFmZm9yZCBcIiArIGFmZm9yZGFibGVSb3VuZHMgKyBcIiBndW5uZXIocylcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVldWVkQmF0dGxlVGlsZVR5cGUgPSB0aWxlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGVtaXQgc2hvd1RpbGVzKCkgd2l0aCBhcnJheSBvZiBsZWdhbCBndW5uZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwib2ZmZXJHdW5uZXJzXCIsIGRldGFpbHM6e2d1bm5lcnM6YWN0aXZlR3VubmVyc319LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlYWR5IHRvIHNlbGVjdCBndW5uZXJzISBUaGlzIHdpbGwgdGFrZSBwbGFjZSBvbiB0aGUgbmV4dCBsZWdhbCBjbGljayBldmVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY291bnRlckVzcGlvbmFnZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb29rIGZvciBjbG9uZXMgdGhhdCBhcmUgb3Bwb25lbnQncyBzcGllZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJlcGFpclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyZXBhaXJUd29cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlQ291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlRGFtYWdlZFRpbGVzID0gdGhpcy5nZXREYW1hZ2VkVGlsZXModGhpcy5hY3RpdmVQbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlRGFtYWdlZFRpbGVzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgY29zdCBvZiByZXBhaXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiBpbiB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlQ291bnQgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRSZXNvdXJjZUNvdW50KHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlW25dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVzb3VyY2VDb3VudCA8IHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gTm90IGVub3VnaCBvZiBhIHJlc291cmNlIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRlbGwgcGxheWVyIHRoYXQgdGhleSBjYW4gYWZmb3JkIHRvIGZpeCB1cCB0aGUgc3RhdGlvbiFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZpcmVXZWFwb24od2VhcG9uVGlsZSwgZ3VubmVyQXJyYXkpIHtcclxuICAgICAgICBpZiAoZ3VubmVyQXJyYXkubGVuZ3RoIDw9IDAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3VubmVyQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc3dpdGNoICh3ZWFwb25UaWxlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibGFzZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1wYWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGFzZXJQb2ludCA9IHt4Omd1bm5lckFycmF5W2ldLngsIHk6Z3VubmVyQXJyYXlbaV0ueX07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRUaWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50T2NjdXBhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGltcGFjdGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuaWQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzZXJQb2ludC54Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXNlclBvaW50LngtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGlsZSA9IHRoaXMuZ2V0VGlsZShsYXNlclBvaW50LngsIGxhc2VyUG9pbnQueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudFRpbGUubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNwYWNlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3VyZmFjZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGlsZS5vY2N1cGllZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50T2NjdXBhbnQgPSB0aGlzLmdldFRpbGVPY2N1cGFudChsYXNlclBvaW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogZGVzdHJveSBvY2N1cGFudC4gVGhpcyB3aWxsIHdhaXQgb24gc2F0cyBhbmQgc2hpZWxkcyBhbmQgcm9ja2V0cy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbGUub2NjdXBpZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wYWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlvdSBhcmUgaW4gdGhlIG9wcG9uZW50IG1pbmUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUaWxlLm9jY3VwaWVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPY2N1cGFudCA9IHRoaXMuZ2V0VGlsZU9jY3VwYW50KGxhc2VyUG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllci5yZW1vdmVQZXJzb25uZWwoY3VycmVudE9jY3VwYW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogZW1pdCBkZWF0aCBhbmltYXRpb24gdG8gY2xpZW50cy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJyZW1vdmVQZXJzb25uZWxcIiwgZGV0YWlsczpjdXJyZW50T2NjdXBhbnR9LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlLm9jY3VwaWVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcGFjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGlsZS5kYW1hZ2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlLmRhbWFnZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcImRhbWFnZVRpbGVcIiAsZGV0YWlsczpsYXNlclBvaW50fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBhY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIGlzIGEgcHJvYmxlbSB3aXRoIHRoYXQgd2VhcG9uVGlsZSBhcmd1bWVudFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47IFxyXG4gICAgICAgIC8vIHN3aXRjaCAod2VhcG9uVGlsZS5uYW1lKSB7XHJcbiAgICAgICAgLy8gICAgIGNhc2UgXCJzaGllbGRcIjpcclxuICAgICAgICAvLyAgICAgY2FzZSBcImJpb2Ryb25lXCI6XHJcbiAgICAgICAgLy8gICAgIGNhc2UgXCJ0aGVybWl0ZVwiOlxyXG4gICAgICAgIC8vICAgICBjYXNlIFwic2F0ZWxsaXRlXCI6XHJcbiAgICAgICAgLy8gICAgIGNhc2UgXCJyb2NrZXRcIjpcclxuICAgICAgICAvLyAgICAgY2FzZSBcImVzcGlvbmFnZVwiOlxyXG4gICAgICAgIC8vICAgICBjYXNlIFwidGFrZW92ZXJcIjpcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIGlzIGEgcHJvYmxlbSB3aXRoIHRoYXQgd2VhcG9uVGlsZSBhcmd1bWVudFwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9ja3MocGxheWVyKSB7XHJcbiAgICAgICAgdmFyIHJldHVybkFycmF5ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgYyBpbiB0aGlzLnRpbGVBcnJheSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciByIGluIHRoaXMudGlsZUFycmF5W2NdKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlQXJyYXlbY11bcl0ubmFtZSA9PSBcImxvY2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5pZCA9PSAxICYmIGMgPCAxMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLnRpbGVBcnJheVtjXVtyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyLmlkID09IDIgJiYgYyA+IDE4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMudGlsZUFycmF5W2NdW3JdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy50aWxlQXJyYXlbY11bcl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGFtYWdlZFRpbGVzKHBsYXllcikge1xyXG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGMgaW4gdGhpcy50aWxlQXJyYXkpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgciBpbiB0aGlzLnRpbGVBcnJheVtjXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuaWQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYyA8IDEyICYmIHRoaXMudGlsZUFycmF5W2NdW3JdLmRhbWFnZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy50aWxlQXJyYXlbY11bcl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjID4gMTggJiYgdGhpcy50aWxlQXJyYXlbY11bcl0uZGFtYWdlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLnRpbGVBcnJheVtjXVtyXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlQXJyYXlbY11bcl0uZGFtYWdlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMudGlsZUFycmF5W2NdW3JdKTtcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcGxhY2VDbG9uZShwbGF5ZXIsIHgsIHkpIHtcclxuXHJcbiAgICAgICAgLy8gQXR0ZW1wdCB0byBwbGFjZSBjbG9uZXNcclxuICAgICAgICAvLyBJZiB0aGUgZ2FtZXN0YXRlIGlzIFNFVFVQLCBjbG9uZXMgY2FuIGdvIGludG8gYW55IHVub2NjdXBpZWQsIHBsYXllci1vd25lZCwgYmF0dGxlLCBwcm9kdWN0aW9uLCBsb2NrLCBvciBhcm1vcnkgdGlsZS5cclxuICAgICAgICAvLyBJZiB0aGUgZ2FtZXN0YXRlIGlzIEdBTUUsIGNsb25lcyBjYW4gb25seSBnbyBpbnRvIHVub2NjdXBpZWQsIHBsYXllci1vd25lZCwgbG9ja3MuXHJcbiAgICAgICAgLy8gUkVUVVJOIHRydWUgb3IgZmFsc2UgZm9yIHN1Y2Nlc3Mgb3IgZmFpbHVyZS5cclxuICAgICAgICAvLyBJIHNob3VsZCByZWZhY3RvciB0aGlzLCBidXQgSSdtIHRpcmVkLlxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHBsYXllciA9PT0gJ3VuZGVmaW5lZCcgfHwgcGxheWVyID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzZWxlY3RlZFRpbGUgPSB0aGlzLmdldFRpbGUoeCwgeSk7XHJcbiAgICAgICAgdmFyIGNsb25lLCBjbG9uZVVVSUQ7XHJcblxyXG4gICAgICAgIGlmIChwbGF5ZXIuaWQgIT0gc2VsZWN0ZWRUaWxlLm93bmVyIHx8IHNlbGVjdGVkVGlsZS5vY2N1cGllZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiBnYW1lc3RhdGUgaXMgU0VUVVBcclxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IHRoaXMuZ2FtZVN0YXRlRW51bS5TRVRVUCkge1xyXG4gICAgICAgICAgICBpZihzZWxlY3RlZFRpbGUudHlwZSA9PSBcImxvY2tcIiB8fCBzZWxlY3RlZFRpbGUudHlwZSA9PSBcImJhdHRsZVwiIHx8IHNlbGVjdGVkVGlsZS50eXBlID09IFwiYXJtb3J5XCIgfHwgc2VsZWN0ZWRUaWxlLnR5cGUgPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGNsb25lVVVJRCA9IHV1aWQoKTtcclxuICAgICAgICAgICAgICAgIC8vdmFyIHV1aWQgPSByZXF1aXJlKCd1dWlkL3Y0JykoKTtcclxuICAgICAgICAgICAgICAgIGNsb25lID0gcGxheWVyLmFkZFBlcnNvbm5lbCgnY2xvbmUnLCB4LCB5LCBjbG9uZVVVSUQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsb25lICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tBcm1zKHBsYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUaWxlLm9jY3VwaWVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcImFkZENsb25lXCIsIGRldGFpbHM6IHt4OngsIHk6eSwgcGxheWVySUQ6IHBsYXllci5pZCwgdXVpZDpjbG9uZVVVSUR9fSwgcGxheWVyLnNvY2tldElEKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiBnYW1lc3RhdGUgaXMgR0FNRVxyXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gdGhpcy5nYW1lU3RhdGVFbnVtLkdBTUUpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkVGlsZS50eXBlID09IFwibG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgICBjbG9uZVVVSUQgPSB1dWlkKCk7XHJcbiAgICAgICAgICAgICAgICAvL3ZhciB1dWlkID0gcmVxdWlyZSgndXVpZC92NCcpKCk7XHJcbiAgICAgICAgICAgICAgICBjbG9uZSA9IHBsYXllci5hZGRQZXJzb25uZWwoJ2Nsb25lJywgeCwgeSwgY2xvbmVVVUlEKTtcclxuICAgICAgICAgICAgICAgIGlmIChjbG9uZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQXJtcyhwbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGlsZS5vY2N1cGllZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJhZGRDbG9uZVwiLCBkZXRhaWxzOiB7eDp4LCB5OnksIHBsYXllcklEOiBwbGF5ZXIuaWQsIHV1aWQ6Y2xvbmVVVUlEfX0sIHBsYXllci5zb2NrZXRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVUaWxlQXJyYXkoKSB7XHJcbiAgICAgICAgdmFyIHRpbGVKU09OID0gcmVxdWlyZSgnLi4vLi4vYXNzZXRzL3RpbGVEZXRhaWwuanNvbicpO1xyXG5cclxuICAgICAgICBmb3IodmFyIGMgPSAwOyBjIDwgdGhpcy50aWxlQ29sdW1uczsgYysrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NdID0gW107XHJcbiAgICAgICAgICAgIGZvcih2YXIgciA9IDA7IHIgPCB0aGlzLnRpbGVSb3dzOyByKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NdW3JdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6YyxcclxuICAgICAgICAgICAgICAgICAgICB5OnJcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aWxlSlNPTikge1xyXG4gICAgICAgICAgICBpZiAoIXRpbGVKU09OLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIG9iaiA9IHRpbGVKU09OW2tleV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBza2lwIGxvb3AgaWYgdGhlIHByb3BlcnR5IGlzIGZyb20gcHJvdG90eXBlXHJcbiAgICAgICAgICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KHByb3ApKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uQ291bnQgPSBvYmpbcHJvcF0ubG9jYXRpb25zLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYXRpb25Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvb3JkcyA9IG9ialtwcm9wXS5sb2NhdGlvbnNbaV0uc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gY29vcmRzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gY29vcmRzWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLmRhbWFnZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5vY2N1cGllZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnR5cGUgPSBvYmpbcHJvcF0udHlwZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPCA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLm93bmVyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHggPiAyMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5vd25lciA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVBcnJheVt4XVt5XSAhPSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0ubmFtZSA9IG9ialtwcm9wXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeCArIFwiOlwiICsgeSArIFwiIG5vdCBmb3VuZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcF0ucHJvcGVydGllcyAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5wcm9wZXJ0aWVzID0gb2JqW3Byb3BdLnByb3BlcnRpZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUaWxlKHgsIHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aWxlQXJyYXlbeF1beV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGVnYWxQaWVjZXMoKSB7XHJcbiAgICAgICAgdmFyIHBlcnNvbm5lbEFycmF5ID0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UGVyc29ubmVsKCk7XHJcbiAgICAgICAgdmFyIG9yZG5hbmNlQXJyYXkgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRPcmRuYW5jZSgpO1xyXG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xyXG4gICAgICAgIHZhciBtb3Zlc0FycmF5ID0gW107XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgaW4gcGVyc29ubmVsQXJyYXkpIHtcclxuICAgICAgICAgICAgbW92ZXNBcnJheSA9IHRoaXMuZ2V0TGVnYWxNb3ZlcyhwZXJzb25uZWxBcnJheVtpXSwgdGhpcy5jdXJyZW50RGljZVZhbHVlLCB7eDpwZXJzb25uZWxBcnJheVtpXS54LCB5OnBlcnNvbm5lbEFycmF5W2ldLnl9KTtcclxuICAgICAgICAgICAgaWYgKG1vdmVzQXJyYXkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh7dHlwZTpwZXJzb25uZWxBcnJheVtpXS50eXBlLG9yaWdpbjp7eDpwZXJzb25uZWxBcnJheVtpXS54LHk6cGVyc29ubmVsQXJyYXlbaV0ueX0sIHV1aWQ6cGVyc29ubmVsQXJyYXlbaV0udXVpZCwgbW92ZXM6bW92ZXNBcnJheX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBqIGluIG9yZG5hbmNlQXJyYXkpIHtcclxuICAgICAgICAgICAgbW92ZXNBcnJheSA9IHRoaXMuZ2V0TGVnYWxNb3ZlcyhwZXJzb25uZWxBcnJheVtqXSwgdGhpcy5jdXJyZW50RGljZVZhbHVlLCB7eDpwZXJzb25uZWxBcnJheVtqXS54LCB5OnBlcnNvbm5lbEFycmF5W2pdLnl9KTtcclxuICAgICAgICAgICAgaWYgKG1vdmVzQXJyYXkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh7dHlwZTpcIm9yZG5hbmNlXCIsIHV1aWQ6b3JkbmFuY2VBcnJheVtqXS51dWlkLCBtb3Zlczptb3Zlc0FycmF5fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVybkFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvb3JkRnJvbURpcmVjdGlvbihvcmlnaW5Db29yZCxkaXJlY3Rpb24pIHtcclxuICAgICAgICB2YXIgZGlyPXtOT1JUSDp7eDowLHk6LTF9LEVBU1Q6e3g6MSx5OjB9LFNPVVRIOnt4OjAseToxfSxXRVNUOnt4Oi0xLHk6MH19O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBvYmogPSB7eDoocGFyc2VJbnQob3JpZ2luQ29vcmQueCkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS54KSksIHk6KHBhcnNlSW50KG9yaWdpbkNvb3JkLnkpICsgcGFyc2VJbnQoZGlyW2RpcmVjdGlvbl0ueSkpfTtcclxuICAgICAgICBpZihvYmoueCA8IDAgfHwgb2JqLnggPiAzMHx8IG9iai55IDwgMCB8fCBvYmoueSA+IDIwKSBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHt4OihwYXJzZUludChvcmlnaW5Db29yZC54KSArIHBhcnNlSW50KGRpcltkaXJlY3Rpb25dLngpKSwgeToocGFyc2VJbnQob3JpZ2luQ29vcmQueSkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS55KSl9OyAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldExlZ2FsTW92ZXMoZ2FtZVBpZWNlVHlwZSwgbW92ZXMsIGN1cnJlbnRDb29yZCwgcHJldmlvdXNDb29yZCl7XHJcbiAgICAgICAgaWYgKG1vdmVzIDwgMSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSWxsZWdhbCBtb3ZlIG51bWJlciEgVGhpcyBjb3VsZCByZXN1bHQgaW4gaW5maW5pdGUgbG9vcC5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGxlZ2FsTW92ZXMgPSBbXTtcclxuICAgICAgICB2YXIgcmV0dXJuQXJyYXkgPSBbXTtcclxuICAgICAgICB2YXIgbmV4dE1vdmVUb0NoZWNrID0gbnVsbDtcclxuICAgICAgICB2YXIgbmV4dFRpbGVUb0NoZWNrID0gbnVsbDtcclxuICAgICAgICBtb3Zlcy0tO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2Nlc3MubWVtb3J5VXNhZ2UoKS5oZWFwVXNlZCk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgcHJldmlvdXNDb29yZCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdmFyIGxvY2tzID0gdGhpcy5nZXRMb2Nrcyh0aGlzLmFjdGl2ZVBsYXllcik7XHJcbiAgICAgICAgICAgIHZhciBpc0xvY2sgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGwgaW4gbG9ja3MpIHtcclxuICAgICAgICAgICAgICAgIGlmIChsb2Nrc1tsXS54ID09IGN1cnJlbnRDb29yZC54ICYmIGxvY2tzW2xdLnkgPT0gY3VycmVudENvb3JkLnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0xvY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNMb2NrID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIGxvY2tzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRDb29yZC54ID09IGxvY2tzW2ldLnggJiYgY3VycmVudENvb3JkLnkgPT0gbG9ja3NbaV0ueSkgeyBjb250aW51ZTsgfSAvLyBkb24ndCBpbmNsdWRlIHRoZSBsb2NrIHlvdSdyZSBzaXR0aW5nIG9uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZUFycmF5W2xvY2tzW2ldLnhdW2xvY2tzW2ldLnldLm9jY3VwaWVkID09PSB0cnVlKSB7IGNvbnRpbnVlOyB9IC8vIGRvbid0IGluY2x1ZGUgbG9jayB0aGF0IG90aGVycyBhcmUgc2l0dGluZyBvblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlcyA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkgPSByZXR1cm5BcnJheS5jb25jYXQodGhpcy5nZXRMZWdhbE1vdmVzKGdhbWVQaWVjZVR5cGUsIG1vdmVzLCB7eDpsb2Nrc1tpXS54LCB5OmxvY2tzW2ldLnl9LCBjdXJyZW50Q29vcmQpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKGxvY2tzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYyBpbiByZXR1cm5BcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXR1cm5BcnJheVtjXS54ICE9PSBjdXJyZW50Q29vcmQueCB8fCByZXR1cm5BcnJheVtjXS55ICE9PSBjdXJyZW50Q29vcmQueSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2FsTW92ZXMucHVzaChyZXR1cm5BcnJheVtjXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAodmFyIGRpcmVjdGlvbiBpbiB0aGlzLmRpcmVjdGlvbkVudW0pIHtcclxuICAgICAgICAgICAgbmV4dE1vdmVUb0NoZWNrID0gdGhpcy5nZXRDb29yZEZyb21EaXJlY3Rpb24oY3VycmVudENvb3JkLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICBpZihuZXh0TW92ZVRvQ2hlY2sgPT09IGZhbHNlKSB7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBuZXh0VGlsZVRvQ2hlY2sgPSB0aGlzLnRpbGVBcnJheVtuZXh0TW92ZVRvQ2hlY2sueF1bbmV4dE1vdmVUb0NoZWNrLnldO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKG5leHRUaWxlVG9DaGVjay5kYW1hZ2VkID09PSB0cnVlKSB7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgIGlmIChuZXh0VGlsZVRvQ2hlY2sudHlwZSA9PT0gXCJzcGFjZVwiKSB7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrV2FsbCh0aGlzLmRpcmVjdGlvbkVudW1bZGlyZWN0aW9uXSwgY3VycmVudENvb3JkKSA9PT0gZmFsc2UpIHsgY29udGludWU7IH1cclxuXHJcbiAgICAgICAgICAgIGlmKCh0eXBlb2YgcHJldmlvdXNDb29yZCA9PT0gJ3VuZGVmaW5lZCcpIHx8ICgodHlwZW9mIHByZXZpb3VzQ29vcmQgIT09ICd1bmRlZmluZWQnKSAmJiAoSlNPTi5zdHJpbmdpZnkobmV4dE1vdmVUb0NoZWNrKSAhPT0gSlNPTi5zdHJpbmdpZnkocHJldmlvdXNDb29yZCkpICkpIHtcclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRpbGUgaXMgb2NjdXBpZWRcclxuICAgICAgICAgICAgICAgIGlmIChtb3ZlcyA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobmV4dFRpbGVUb0NoZWNrLm9jY3VwaWVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWdhbE1vdmVzLnB1c2gobmV4dE1vdmVUb0NoZWNrKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheSA9IHJldHVybkFycmF5LmNvbmNhdCh0aGlzLmdldExlZ2FsTW92ZXMoZ2FtZVBpZWNlVHlwZSwgbW92ZXMsIG5leHRNb3ZlVG9DaGVjaywgY3VycmVudENvb3JkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpbmRleCBpbiByZXR1cm5BcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXR1cm5BcnJheVtpbmRleF0ueCAhPT0gY3VycmVudENvb3JkLnggfHwgcmV0dXJuQXJyYXlbaW5kZXhdLnkgIT09IGN1cnJlbnRDb29yZC55KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnYWxNb3Zlcy5wdXNoKHJldHVybkFycmF5W2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZWdhbE1vdmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrV2FsbChkaXJlY3Rpb24sIGN1cnJlbnRDb29yZGluYXRlKSB7XHJcbiAgICAgICAgdGhpcy53YWxsR3JpZCA9IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy93YWxsR3JpZC5qc29uJyk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKXtcclxuICAgICAgICAgICAgY2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uTk9SVEg6IC8vIFVQXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy53YWxsR3JpZC5ncmlkW2N1cnJlbnRDb29yZGluYXRlLnhdW2N1cnJlbnRDb29yZGluYXRlLnldJnRoaXMuZGlyZWN0aW9uRW51bS5OT1JUSCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgY2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uU09VVEg6IC8vIERPV05cclxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCh0aGlzLndhbGxHcmlkLmdyaWRbY3VycmVudENvb3JkaW5hdGUueF1bY3VycmVudENvb3JkaW5hdGUueV0mdGhpcy5kaXJlY3Rpb25FbnVtLlNPVVRIKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBjYXNlIHRoaXMuZGlyZWN0aW9uRW51bS5FQVNUOiAvLyBSSUdIVFxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uRUFTVCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgY2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uV0VTVDogLy8gTEVGVFxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uV0VTVCkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByb2xsRGljZShkYXRhKSB7XHJcbiAgICAgICAgaWYodGhpcy50dXJuU3RhdGUgPT0gdGhpcy50dXJuU3RhdGVFbnVtLlJPTEwgJiYgdGhpcy5nYW1lU3RhdGUgPT0gdGhpcy5nYW1lU3RhdGVFbnVtLkdBTUUgJiYgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQgPT0gZGF0YS5zb2NrZXRJRCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREaWNlVmFsdWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDE7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLmN1cnJlbnRMZWdhbFBpZWNlcyA9IHRoaXMuZ2V0TGVnYWxQaWVjZXMoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFBsYXllciByZWNlaXZlcyBhcnJheSBvZiBsZWdhbCBwZXJzb25uZWwgKGNsb25lcyBhbmQgYmlvZHJvbmVzKSBhbmQgdHVybiBzdGF0ZSBhZHZhbmNlcyB0byBNT1ZFXHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwiZGljZVJvbGxlZFwiLCBkZXRhaWxzOiB7dmFsdWU6dGhpcy5jdXJyZW50RGljZVZhbHVlLCBnYW1lUGllY2VzOnRoaXMuYWN0aXZlUGxheWVyLmN1cnJlbnRMZWdhbFBpZWNlc319LCBkYXRhLnNvY2tldElEKTtcclxuICAgICAgICAgICAgdGhpcy50dXJuU3RhdGUrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldChkYXRhKSB7XHJcbiAgICAgICAgaWYodHlwZW9mKGRhdGEucHJvcGVydHkpID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVzcG9uc2UnLCB7ZGV0YWlsczp0aGlzW2RhdGEucHJvcGVydHldfSwgZGF0YS5zb2NrZXRJRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBlbWl0KG1zZywgZGF0YSwgc29ja2V0SUQpIHtcclxuICAgICAgICBpZihtc2cgPT0gXCJyZXNwb25zZVwiIHx8IG1zZyA9PSBcInJlcXVlc3RcIiB8fCBtc2cgPT0gXCJ1cGRhdGVcIikge1xyXG4gICAgICAgICAgICBpZih0eXBlb2Yoc29ja2V0SUQpID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBTb2NrZXRJRCBmb3VuZCFcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pby5zb2NrZXRzLmNvbm5lY3RlZFtzb2NrZXRJRF0uZW1pdChtc2csIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlmKG1zZyA9PSBcImFjdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZihzb2NrZXRJRCkgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIFNvY2tldElEIGZvdW5kIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlvLnNvY2tldHMuY29ubmVjdGVkW3NvY2tldElEXS5lbWl0KG1zZywgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKG1zZyA9PSBcImxvZ1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW8uc29ja2V0cy5lbWl0KG1zZywgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBicm9hZGNhc3QobXNnLCBkYXRhKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnBsYXllcnNBcnJheSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXQobXNnLCBkYXRhLCB0aGlzLnBsYXllcnNBcnJheVtpXS5zb2NrZXRJRCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMuU2VwdGlrb24gPSBTZXB0aWtvbjtcclxuIiwiaW1wb3J0IFNlcHRpa29uIGZyb20gJy4uL3ByZWZhYnMvc2VwdGlrb24nO1xyXG5cclxuY2xhc3MgQm9vdCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIHByZWxvYWQoKSB7XHJcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3ByZWxvYWRlcicsICdhc3NldHMvcHJlbG9hZGVyLmdpZicpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5nYW1lLmlucHV0Lm1heFBvaW50ZXJzID0gMTtcclxuICAgIHRoaXMuZ2FtZS50aW1lLmFkdmFuY2VkVGltaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuZ2FtZS5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xyXG4gICAgICB0aGlzLmdhbWUuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5SRVNJWkU7XHJcbiAgICAvL3NldHVwIGRldmljZSBzY2FsaW5nXHJcbiAgICBpZiAoIXRoaXMuZ2FtZS5kZXZpY2UuZGVza3RvcCkge1xyXG4gICAgICB0aGlzLmdhbWUuc2NhbGUucGFyZW50SXNXaW5kb3cgPSB0cnVlO1xyXG4gICAgICB0aGlzLmdhbWUuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5SRVNJWkU7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5taW5XaWR0aCA9ICA0ODA7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5taW5IZWlnaHQgPSAyNjA7XHJcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5mb3JjZU9yaWVudGF0aW9uKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5pdEdsb2JhbFZhcmlhYmxlcygpO1xyXG4gICAgXHJcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ3ByZWxvYWRlcicpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEdsb2JhbFZhcmlhYmxlcygpe1xyXG4gICAgdGhpcy5nYW1lLmdsb2JhbCA9IHtcclxuICAgICAgc2NvcmU6IDAsXHJcbiAgICAgIGxhc3REaWNlUm9sbDogMCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9vdDtcclxuIiwiaW1wb3J0IERpY2UgZnJvbSAnLi4vcHJlZmFicy9kaWNlJztcclxuXHJcbmNsYXNzIEdhbWUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG4gIFxyXG4gIGNyZWF0ZSgpIHtcclxuICBcclxuICAgIC8vdGhpcy5nYW1lLmlucHV0Lm9uRG93bi5hZGQodGhpcy50b2dnbGVGdWxsc2NyZWVuLCB0aGlzKTtcclxuICAgIHRoaXMuZ2FtZS5zdGFnZS5kaXNhYmxlVmlzaWJpbGl0eUNoYW5nZSA9IHRydWU7XHJcbiAgICBcclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xyXG4gICAgdGhpcy5nYW1lLmh1ZEdyb3VwID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5tb2RhbCA9IG5ldyBnYW1lTW9kYWwodGhpcy5nYW1lKTtcclxuICAgIHRoaXMuY3JlYXRlTW9kYWxzKCk7XHJcblxyXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwwLCdiYWNrZ3JvdW5kJyk7XHJcbiAgICB0aGlzLmJhY2tncm91bmQuYW5jaG9yLnNldFRvKDAuNSwwLjUpO1xyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2VudGVyWCA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYO1xyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2VudGVyWSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5odWRCZyA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwnaHVkLWJnJyk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmdvID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoNDAsODAsJ3RleHRfZ28nKTtcclxuICAgIHRoaXMuZ2FtZS5nby5zY2FsZS5zZXRUbygwLjI1KTtcclxuICAgIHRoaXMuZ2FtZS5nby5pbnB1dEVuYWJsZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuZ2FtZS5nby5maWx0ZXJzID0gW3RoaXMuZ2FtZS5hZGQuZmlsdGVyKCdHcmF5JyldO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5nby5jbGlja2VkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5zZXB0aWtvbi5jaG9vc2luZ1RhcmdldHMgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAnZ28nfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmdhbWUuZ28uZXZlbnRzLm9uSW5wdXREb3duLmFkZCh0aGlzLmdhbWUuZ28uY2xpY2tlZCwgdGhpcyk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmdvLmVuYWJsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmdhbWUuZ28uZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IFt0aGlzLmdhbWUuYWRkLmZpbHRlcignR3JheScpXTtcclxuICAgICAgICB0aGlzLmlucHV0RW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmdhbWUuZGljZSA9IG5ldyBEaWNlKHRoaXMuZ2FtZSwgNTAsIDQwKTtcclxuICAgIHRoaXMuZ2FtZS5kaWNlLnNjYWxlLnNldFRvKDAuMjUpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5hZGQuZXhpc3RpbmcodGhpcy5nYW1lLmRpY2UpO1xyXG4gICAgXHJcbiAgICB0aGlzLmdhbWUuaHVkR3JvdXAuYWRkKHRoaXMuZ2FtZS5odWRCZyk7XHJcbiAgICB0aGlzLmdhbWUuaHVkR3JvdXAuYWRkKHRoaXMuZ2FtZS5kaWNlKTtcclxuICAgIHRoaXMuZ2FtZS5odWRHcm91cC5hZGQodGhpcy5nYW1lLmdvKTtcclxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFkZCh0aGlzLmJhY2tncm91bmQpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi5jcmVhdGVUaWxlQXJyYXkoMzEsIDIxLCB7eDowLXRoaXMuYmFja2dyb3VuZC53aWR0aC8yLCB5OjAtdGhpcy5iYWNrZ3JvdW5kLmhlaWdodC8yfSk7XHJcblxyXG5cclxuICAgIHRoaXMucmVmcmVzaEJvYXJkKCk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIGNyZWF0ZU1vZGFscygpIHtcclxuICAgICAgdGhpcy5nYW1lLm1vZGFsLmNyZWF0ZU1vZGFsKFxyXG4gICAgICAgIHtcclxuICAgICAgICB0eXBlOiBcImFza1N0YXJ0XCIsXHJcbiAgICAgICAgaW5jbHVkZUJhY2tncm91bmQ6IGZhbHNlLFxyXG4gICAgICAgIG1vZGFsQ2xvc2VPbklucHV0OiBmYWxzZSxcclxuICAgICAgICBpdGVtc0FycjogW3tcclxuICAgICAgICAgICAgdHlwZTogXCJncmFwaGljc1wiLFxyXG4gICAgICAgICAgICBncmFwaGljQ29sb3I6IFwiMHhmZmZmZmZcIixcclxuICAgICAgICAgICAgZ3JhcGhpY1dpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgIGdyYXBoaWNIZWlnaHQ6IDMwMCxcclxuICAgICAgICAgICAgZ3JhcGhpY1JhZGl1czogNDBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiBcIkFyZSB5b3UgaGFwcHkgd2l0aFxcbiB0aGF0IGNsb25lIGxheW91dD9cIixcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIweDFlMWUxZVwiLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiAtNTBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcclxuICAgICAgICAgICAgY29udGVudDogXCJ0ZXh0X3llc1wiLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiAxMDAsXHJcbiAgICAgICAgICAgIG9mZnNldFg6IC04MCxcclxuICAgICAgICAgICAgY29udGVudFNjYWxlOiAwLjYsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUubW9kYWwuaGlkZU1vZGFsKFwiYXNrU3RhcnRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6J3NldFBsYXllclN0YXRlJywgdmFsdWU6J3N0YXJ0J30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwidGV4dF9ub1wiLFxyXG4gICAgICAgICAgICBvZmZzZXRZOiAxMDAsXHJcbiAgICAgICAgICAgIG9mZnNldFg6IDgwLFxyXG4gICAgICAgICAgICBjb250ZW50U2NhbGU6IDAuNixcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5tb2RhbC5oaWRlTW9kYWwoXCJhc2tTdGFydFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDonc2V0UGxheWVyU3RhdGUnLCB2YWx1ZToncmVzZXQnfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2hCb2FyZCgpIHtcclxuXHJcbiAgICB2YXIgc2NhbGUgPSB3aW5kb3cuaW5uZXJXaWR0aC90aGlzLmJhY2tncm91bmQuaGVpZ2h0O1xyXG4gICAgaWYoc2NhbGUgPiAxLjkpIHtcclxuICAgICAgICBzY2FsZSA9IDEuOTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuc2NhbGUuc2V0VG8oc2NhbGUpO1xyXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAueCA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYO1xyXG5cclxuICAgIGlmKHRoaXMuZ2FtZS5zZXB0aWtvbi5wbGF5ZXIuaWQgPT0gMSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFuZ2xlID0gLTkwOyBcclxuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWTsgLy8gQ2VudGVyZWQgb24gU2VwdGlrb24gTG9nb1xyXG4gICAgICAgIC8vdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZICsgKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gb3Bwb25lbnQncyBzaWRlXHJcbiAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZIC0gKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gdGhpcyBwbGF5ZXIncyBzaWRlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFuZ2xlID0gOTA7IFxyXG4gICAgICAgIC8vdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZOyAvLyBDZW50ZXJlZCBvbiBTZXB0aWtvbiBMb2dvXHJcbiAgICAgICAgLy90aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgKyAoKHRoaXMuYmFja2dyb3VuZC53aWR0aCpzY2FsZSktd2luZG93LmlubmVySGVpZ2h0KS8yOyAvLyBDZW50ZXJlZCBvbiBvcHBvbmVudCdzIHNpZGVcclxuICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgLSAoKHRoaXMuYmFja2dyb3VuZC53aWR0aCpzY2FsZSktd2luZG93LmlubmVySGVpZ2h0KS8yOyAvLyBDZW50ZXJlZCBvbiB0aGlzIHBsYXllcidzIHNpZGVcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBcclxuICB1cGRhdGUoKSB7XHJcbiAgICAvLyAgIHRoaXMuZGljZS5mcmFtZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpICsgMTtcclxuICAgIC8vIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdNb3VzZScsIDcwMCwgMzIpO1xyXG4gICAgXHJcbiAgICAvLyB0aGlzLmdhbWUuZGVidWcudGV4dCgnTW91c2UgWDogJyArIHRoaXMuZ2FtZS5pbnB1dC54LCA3MDAsIDY0KTtcclxuICAgIC8vIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdNb3VzZSBZOiAnICsgdGhpcy5nYW1lLmlucHV0LnksIDcwMCwgOTIpO1xyXG4gIH1cclxuICBcclxuICByZW5kZXIgKCkge1xyXG4gICAgICB0aGlzLnJlZnJlc2hCb2FyZCgpO1xyXG4gICAgICAvKlxyXG5cclxuICAgIHZhciB4ID0gMzI7XHJcbiAgICB2YXIgeSA9IDA7XHJcbiAgICB2YXIgeWkgPSAzMjtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdWaWV3cG9ydCcsIHgsIHkgKz0geWkpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdWaWV3cG9ydCBXaWR0aDogJyArIHRoaXMuZ2FtZS5zY2FsZS52aWV3cG9ydFdpZHRoLCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd3aW5kb3cuaW5uZXJXaWR0aDogJyArIHdpbmRvdy5pbm5lcldpZHRoLCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd3aW5kb3cub3V0ZXJXaWR0aDogJyArIHdpbmRvdy5vdXRlcldpZHRoLCB4LCB5ICs9IHlpKTtcclxuXHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnVmlld3BvcnQgSGVpZ2h0OiAnICsgdGhpcy5nYW1lLnNjYWxlLnZpZXdwb3J0SGVpZ2h0LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd3aW5kb3cuaW5uZXJIZWlnaHQ6ICcgKyB3aW5kb3cuaW5uZXJIZWlnaHQsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3dpbmRvdy5vdXRlckhlaWdodDogJyArIHdpbmRvdy5vdXRlckhlaWdodCwgeCwgeSArPSB5aSk7XHJcblxyXG4gICAgLy8gIERldmljZTogSG93IHRvIGdldCBkZXZpY2Ugc2l6ZS5cclxuXHJcbiAgICAvLyAgVXNlIHdpbmRvdy5zY3JlZW4ud2lkdGggZm9yIGRldmljZSB3aWR0aCBhbmQgd2luZG93LnNjcmVlbi5oZWlnaHQgZm9yIGRldmljZSBoZWlnaHQuIFxyXG4gICAgLy8gIC5hdmFpbFdpZHRoIGFuZCAuYXZhaWxIZWlnaHQgZ2l2ZSB5b3UgdGhlIGRldmljZSBzaXplIG1pbnVzIFVJIHRhc2tiYXJzLiAoVHJ5IG9uIGFuIGlQaG9uZS4pIFxyXG4gICAgLy8gIERldmljZSBzaXplIGlzIHN0YXRpYyBhbmQgZG9lcyBub3QgY2hhbmdlIHdoZW4gdGhlIHBhZ2UgaXMgcmVzaXplZCBvciByb3RhdGVkLlxyXG5cclxuICAgIHggPSAzNTA7XHJcbiAgICB5ID0gMDtcclxuXHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnQm9hcmQgR3JvdXAnLCB4LCB5ICs9IHlpKTtcclxuXHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5nYW1lLmJvYXJkR3JvdXAueDogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLngsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnk6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC55LCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aDogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoLCB4LCB5ICs9IHlpKTtcclxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC5oZWlnaHQ6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC5oZWlnaHQsIHgsIHkgKz0geWkpO1xyXG5cclxuICAgIHggPSAzMjtcclxuICAgIHkgPSAzMDA7XHJcblxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ0JhY2tncm91bmQgRGV0YWlsJywgeCwgeSArPSB5aSk7XHJcblxyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC54OiAnICsgdGhpcy5iYWNrZ3JvdW5kLngsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC55OiAnICsgdGhpcy5iYWNrZ3JvdW5kLnksIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC53aWR0aDogJyArIHRoaXMuYmFja2dyb3VuZC53aWR0aCwgeCwgeSArPSB5aSk7XHJcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLmhlaWdodDogJyArIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQsIHgsIHkgKz0geWkpO1xyXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC5zY2FsZTogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnNjYWxlLngsIHgsIHkgKz0geWkpO1xyXG4gICAgKi9cclxuICAgIH1cclxuICAgIFxyXG4gIHRvZ2dsZUZ1bGxzY3JlZW4oKSB7XHJcbiAgICBpZih0aGlzLmdhbWUuc2NhbGUuaXNGdWxsU2NyZWVuKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnN0b3BGdWxsU2NyZWVuKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY2FsZS5zdGFydEZ1bGxTY3JlZW4oZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcclxuIiwiY2xhc3MgTWVudSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIC8vYWRkIGJhY2tncm91bmQgaW1hZ2VcclxuICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwnYmFja2dyb3VuZCcpO1xyXG4gICAgdGhpcy5iZ1JhdGlvID0gdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUud2lkdGggLyB0aGlzLmJhY2tncm91bmQudGV4dHVyZS5oZWlnaHQ7XHJcbiAgICB0aGlzLndvcmxkUmF0aW8gPSB0aGlzLmdhbWUud29ybGQud2lkdGggLyB0aGlzLmdhbWUud29ybGQuaGVpZ2h0O1xyXG4gICAgaWYgKCgodGhpcy53b3JsZFJhdGlvIC0gdGhpcy5iZ1JhdGlvKSAvIDIgKiB0aGlzLmdhbWUud29ybGQud2lkdGgpID4gMCkge1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQvdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUuaGVpZ2h0KnRoaXMuYmFja2dyb3VuZC50ZXh0dXJlLndpZHRoO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQgPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC54ID0gKHRoaXMuZ2FtZS53b3JsZC53aWR0aCAtIHRoaXMuYmFja2dyb3VuZC53aWR0aCkgLyAyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQud2lkdGggPSB0aGlzLmdhbWUud29ybGQud2lkdGg7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aC90aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aCp0aGlzLmJhY2tncm91bmQudGV4dHVyZS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnkgPSAodGhpcy5nYW1lLndvcmxkLmhlaWdodCAtIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQpIC8gMjtcclxuICAgIH1cclxuXHJcbiAgICAvL2FkZCBpbnRybyB0ZXh0XHJcbiAgICB0aGlzLmdhbWVvdmVyVGV4dCA9IHRoaXMuYWRkLnRleHQodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsdGhpcy5nYW1lLndvcmxkLmNlbnRlclksIFwiU2NvcmUgPSBcIit0aGlzLmdhbWUuZ2xvYmFsLnNjb3JlLCB7XHJcbiAgICAgIGZvbnQ6ICc0MnB4IEFyaWFsJywgZmlsbDogJyNmZmZmZmYnLCBhbGlnbjogJ2NlbnRlcidcclxuICAgIH0pO1xyXG4gICAgdGhpcy5nYW1lb3ZlclRleHQuYW5jaG9yLnNldCgwLjUpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQub25Eb3duLmFkZCh0aGlzLm9uSW5wdXREb3duLCB0aGlzKTtcclxuXHJcbiAgICAvL3ByZXZlbnQgYWNjaWRlbnRhbCBjbGljay10aHJ1IGJ5IG5vdCBhbGxvd2luZyBzdGF0ZSB0cmFuc2l0aW9uIGZvciBhIHNob3J0IHRpbWVcclxuICAgIHRoaXMuY2FuQ29udGludWVUb05leHRTdGF0ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChQaGFzZXIuVGltZXIuU0VDT05EICogMC41LCBmdW5jdGlvbigpeyB0aGlzLmNhbkNvbnRpbnVlVG9OZXh0U3RhdGUgPSB0cnVlOyB9LCB0aGlzKTtcclxuXHJcbiAgICB0aGlzLnNhdmVWYXJzVG9Mb2NhbFN0b3JhZ2UoKTtcclxuICAgIHRoaXMucmVzZXRHbG9iYWxWYXJpYWJsZXMoKTtcclxuICB9XHJcblxyXG4gIHNhdmVWYXJzVG9Mb2NhbFN0b3JhZ2UoKXtcclxuICAgIHZhciBtYXggPSBsb2NhbFN0b3JhZ2UubWF4U2NvcmUgfHwgMDsgLy9kZWZhdWx0IHZhbHVlIG9mIDAgaXMgaXQgZG9lcyBub3QgZXhpc3RcclxuICAgIGlmICh0aGlzLmdhbWUuZ2xvYmFsLnNjb3JlID4gbWF4KXsgbG9jYWxTdG9yYWdlLm1heFNjb3JlID0gdGhpcy5nYW1lLmdsb2JhbC5zY29yZTsgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRHbG9iYWxWYXJpYWJsZXMoKXtcclxuICAgIHRoaXMuZ2FtZS5nbG9iYWwuc2NvcmUgPSAwO1xyXG4gIH1cclxuICB1cGRhdGUoKSB7fVxyXG5cclxuICBvbklucHV0RG93biAoKSB7XHJcbiAgICBpZih0aGlzLmNhbkNvbnRpbnVlVG9OZXh0U3RhdGUpe1xyXG4gICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ21lbnUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51O1xyXG4iLCJjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmFzc2V0ID0gbnVsbDtcclxuICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByZWxvYWQoKSB7XHJcbiAgICAvL3NldHVwIGxvYWRpbmcgYmFyXHJcbiAgICB0aGlzLmFzc2V0ID0gdGhpcy5hZGQuc3ByaXRlKHRoaXMuZ2FtZS53aWR0aCAqIDAuNSAtIDExMCwgdGhpcy5nYW1lLmhlaWdodCAqIDAuNSAtIDEwLCAncHJlbG9hZGVyJyk7XHJcbiAgICB0aGlzLmxvYWQuc2V0UHJlbG9hZFNwcml0ZSh0aGlzLmFzc2V0KTtcclxuICAgIFxyXG4gICAgLy9TZXR1cCBsb2FkaW5nIGFuZCBpdHMgZXZlbnRzXHJcbiAgICB0aGlzLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLm9uTG9hZENvbXBsZXRlLCB0aGlzKTtcclxuICAgIHRoaXMubG9hZFJlc291cmNlcygpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFJlc291cmNlcygpIHtcclxuICAgICAgXHJcbiAgICAvL01FTlUgUkVTT1VSQ0VTXHJcbiAgICAvL21lbnUgYmFja2dyb3VuZFxyXG4gICAgLy90ZXh0IGltYWdlc1xyXG4gICAgLy9tdXNpYyBmaWxlcyA/XHJcbi8vICBMb2FkIGZpbHRlciBzY3JpcHRzXHJcbiAgICB0aGlzLmdhbWUubG9hZC5zY3JpcHQoJ2dyYXknLCAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9waG90b25zdG9ybS9waGFzZXIvbWFzdGVyL3YyL2ZpbHRlcnMvR3JheS5qcycpO1xyXG5cclxuICAgIFxyXG4gICAgLy9sb2FkIGdhbWUgZGF0YVxyXG4gICAgdGhpcy5nYW1lLmxvYWQuanNvbigndGlsZURldGFpbCcsICdhc3NldHMvdGlsZURldGFpbC5qc29uJyk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5qc29uKCd3YWxsR3JpZCcsICdhc3NldHMvd2FsbEdyaWQuanNvbicpO1xyXG4gIFxyXG4gICAgLy9HQU1FIFJFU09VUkNFU1xyXG4gICAgLy9nYW1lIGJvYXJkIGJhY2tncm91bmRcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdiYWNrZ3JvdW5kJywnYXNzZXRzL21lZGl1bV9ib2FyZC5wbmcnKTtcclxuICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdkaWNlJywnYXNzZXRzL2RpY2UucG5nJywgMTI4LCAxOTQsIDEwKTtcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdodWQtYmcnLCdhc3NldHMvaHVkLWJnLnBuZycpO1xyXG4gICAgXHJcbiAgICAvLyBtb2RhbCBpbWFnZXNcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X3llcycsJ2Fzc2V0cy90ZXh0X3llcy5wbmcnKTtcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X25vJywnYXNzZXRzL3RleHRfbm8ucG5nJyk7XHJcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9nbycsJ2Fzc2V0cy90ZXh0X2dvLnBuZycpO1xyXG5cclxuICAgIC8vcGxheWVyIHRva2VucyBzcHJpdGVzaGVldHNcclxuICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdjbG9uZScsICdhc3NldHMvY2xvbmUucG5nJywxMTAsMTY4KTtcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmF0bGFzKCdib29tJywgJ2Fzc2V0cy9ib29tLnBuZycsICdhc3NldHMvYm9vbS5qc29uJywgUGhhc2VyLkxvYWRlci5URVhUVVJFX0FUTEFTX0pTT05fSEFTSCk7XHJcblxyXG4gICAgLy9hdWRpbyBmaWxlcyBcclxuICAgIFxyXG4gICAgLy90aGlzLmdhbWUubG9hZC5pbWFnZSgnY3Jvc3NoYWlycycsICdhc3NldHMvY3Jvc3NoYWlyX3JlZF9zbWFsbC5wbmcnKTtcclxuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X2dvJywgJ2Fzc2V0cy90ZXh0X2dvLnBuZycpO1xyXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfcmVhZHknLCAnYXNzZXRzL3RleHRfcmVhZHkucG5nJyk7XHJcblxyXG4gICAgLy90aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgndGFyZ2V0JywgJ2Fzc2V0cy90YXJnZXQucG5nJywxMjguNjYsMTI4KTtcclxuXHJcbiAgICAvL3RoaXMuZ2FtZS5sb2FkLmF1ZGlvKCdndW5zaG90JywnYXNzZXRzL2d1bnNob3Qud2F2Jyk7XHJcbiAgICAvL3RoaXMuZ2FtZS5sb2FkLmF1ZGlvKCdkaW5nJywnYXNzZXRzL2Rpbmcud2F2Jyk7XHJcbiAgfVxyXG5cclxuICBvbkxvYWRDb21wbGV0ZSgpIHtcclxuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnc2V0dXAnKTtcclxuICAgIC8vdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmVsb2FkZXI7XHJcbiIsImNsYXNzIFNldHVwIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gfVxyXG4gIFxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIHRoaXMuZ2FtZS5uYW1lID0gXCJ1c2VyXCI7XHJcblxyXG4gICAgdGhpcy5nYW1lLnN0YWdlLmRpc2FibGVWaXNpYmlsaXR5Q2hhbmdlID0gdHJ1ZTtcclxuICAgIHRoaXMuZ2FtZS5tb2RhbCA9IG5ldyBnYW1lTW9kYWwodGhpcy5nYW1lKTtcclxuICAgIHRoaXMuY3JlYXRlTW9kYWxzKCk7XHJcbiAgICB0aGlzLmdhbWUubW9kYWwuc2hvd01vZGFsKCd1c2VybmFtZScpO1xyXG5cclxuICAgIHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRDYWxsYmFja3ModGhpcywgbnVsbCwgbnVsbCwgdGhpcy5rZXlQcmVzcyk7XHJcbiAgICB0aGlzLmJrc3AgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5LZXlib2FyZC5CQUNLU1BBQ0UpO1xyXG4gICAgdGhpcy5ia3NwLm9uRG93bi5hZGQodGhpcy5rZXlQcmVzcywgdGhpcyk7XHJcbiAgICB0aGlzLmVudGVyID0gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuS2V5Ym9hcmQuRU5URVIpO1xyXG4gICAgdGhpcy5lbnRlci5vbkRvd24uYWRkKHRoaXMua2V5UHJlc3MsIHRoaXMpO1xyXG4gICAgdGhpcy5nYW1lLmNsaWVudC5hc2tOZXdQbGF5ZXIoKTtcclxuXHJcbiAgICAvL3RoaXMuZ2FtZS5zZXB0aWtvbi5zZXR1cCgpO1xyXG59XHJcblxyXG5rZXlQcmVzcyhjaGFyKSB7XHJcblxyXG4gICAgaWYodHlwZW9mKGNoYXIpID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgaWYgKGNoYXIuZXZlbnQuY29kZSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyLmV2ZW50LmNvZGUgPT09IFwiQmFja3NwYWNlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lLm5hbWUgPSB0aGlzLmdhbWUubmFtZS5zdWJzdHJpbmcoMCwgdGhpcy5nYW1lLm5hbWUubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY2hhciA9PSBcIiBcIikge1xyXG4gICAgICAgICAgICBjaGFyID0gXCJfXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZS5uYW1lICs9IGNoYXI7XHJcbiAgICB9XHJcbiAgICB0aGlzLmdhbWUubW9kYWwudXBkYXRlTW9kYWxWYWx1ZSh0aGlzLmdhbWUubmFtZSwgJ3VzZXJuYW1lJywgNCk7XHJcbn1cclxuICBcclxuICBjcmVhdGVNb2RhbHMoKSB7XHJcbiAgXHJcbiAgICAvLyBTdGFydCBHYW1lXHJcbiAgICB0aGlzLmdhbWUubW9kYWwuY3JlYXRlTW9kYWwoXHJcbiAgICAgICAge1xyXG4gICAgICAgIHR5cGU6IFwidXNlcm5hbWVcIixcclxuICAgICAgICBpbmNsdWRlQmFja2dyb3VuZDogdHJ1ZSxcclxuICAgICAgICBtb2RhbENsb3NlT25JbnB1dDogdHJ1ZSxcclxuICAgICAgICBpdGVtc0FycjogW3tcclxuICAgICAgICAgICAgdHlwZTogXCJncmFwaGljc1wiLFxyXG4gICAgICAgICAgICBncmFwaGljQ29sb3I6IFwiMHhmZmZmZmZcIixcclxuICAgICAgICAgICAgZ3JhcGhpY1dpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgIGdyYXBoaWNIZWlnaHQ6IDMwMCxcclxuICAgICAgICAgICAgZ3JhcGhpY1JhZGl1czogNDBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxyXG4gICAgICAgICAgICBjb250ZW50OiBcIlR5cGUgYSB1c2VybmFtZSxcXG50aGVuIGhpdCA8RU5URVI+XFxuXFxuKG1heCBvZiAyNSBjaGFyYWN0ZXJzKVwiLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkx1Y2tpZXN0IEd1eVwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMjIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIjB4MWUxZTFlXCIsXHJcbiAgICAgICAgICAgIG9mZnNldFk6IC01MFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuZ2FtZS5uYW1lLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkx1Y2tpZXN0IEd1eVwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMjIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIjB4MWUxZTFlXCIsXHJcbiAgICAgICAgICAgIG9mZnNldFk6IDUwXHJcbiAgICAgICAgfSwgXVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dXA7XHJcbiJdfQ==
