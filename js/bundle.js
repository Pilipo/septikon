(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
		"productionLichen": {
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
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;

},{}],4:[function(require,module,exports){
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

},{}],5:[function(require,module,exports){
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
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
            console.log("ACTION: ");
            if (typeof this.septikon[data.callback] === "function") {
                console.log(data);
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
                }
            }
        }
    }, {
        key: 'moveOrdnance',
        value: function moveOrdnance(data) {
            var tween = null;
            var distance = null;
            var point = null;
            for (var dataIndex = 0; dataIndex < data.length; dataIndex++) {
                point = this.tileToPixels(data[dataIndex].x, data[dataIndex].y);
                for (var i in this.player.ordnanceArray) {
                    if (this.player.ordnanceArray[i].uuid == data[dataIndex].uuid) {
                        distance = Math.abs(this.player.ordnanceArray[i].y - point.y + this.player.ordnanceArray[i].x - point.x).toFixed(1);
                        tween = this.game.add.tween(this.player.ordnanceArray[i]).to({ x: point.x, y: point.y }, distance * 11, Phaser.Easing.Cubic.Out, true);
                    }
                }
                for (var j in this.opponent.ordnanceArray) {
                    if (this.opponent.ordnanceArray[j].uuid == data[dataIndex].uuid) {
                        distance = Math.abs(this.opponent.ordnanceArray[j].y - point.y + this.opponent.ordnanceArray[j].x - point.x).toFixed(1);
                        tween = this.game.add.tween(this.opponent.ordnanceArray[j]).to({ x: point.x, y: point.y }, distance * 11, Phaser.Easing.Cubic.Out, true);
                    }
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
            if (typeof coordsArray.pointArray !== 'undefined') {
                coordsArray = coordsArray.pointArray;
            }
            for (var i in coordsArray) {
                console.log(this.tileArray[coordsArray[i].x][coordsArray[i].y]);
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
        key: 'clearQueues',
        value: function clearQueues() {
            this.selectedPersonnelToMove = null;
            this.selectedGunners = [];
            this.currentLegalPieces = [];
        }
    }, {
        key: 'addPersonnel',
        value: function addPersonnel(type, x, y, uuid) {
            if (type == "clone" && this.getPersonnel(type).length < 10) {
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
            for (var i = 0; i < this.personnelArray.length; i++) {
                if (typeof type === 'undefined' || this.personnelArray[i].type === this.personnelArray[i].typeEnum[type.toUpperCase()]) {
                    returnArray.push(this.personnelArray[i]);
                }
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
        key: 'clearSelectedGunners',
        value: function clearSelectedGunners() {
            this.selectedGunners = [];
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
        key: 'remove',
        value: function remove(target) {
            console.log(target);
        }
    }, {
        key: 'getOrdnanceByPoint',
        value: function getOrdnanceByPoint(point) {
            var ordnances = this.getOrdnance();
            for (var i = 0; i < ordnances.length; i++) {
                if (ordnances[i].x == point.x && ordnances[i].y == point.y) {
                    return ordnances[i];
                }
            }
            return false;
        }
    }, {
        key: 'moveOrdnance',
        value: function moveOrdnance(count) {
            for (var i = 0; i < this.ordnanceArray.length; i++) {
                if (this.ordnanceArray[i].type == "biodrone" || this.ordnanceArray[i].type == "rocket" || this.ordnanceArray[i].type == "nuke") {
                    if (this.id == 1) {
                        this.ordnanceArray[i].x += count;
                    } else {
                        this.ordnanceArray[i].x -= count;
                    }
                }
            }
            return this.ordnanceArray;
        }
    }, {
        key: 'initResources',
        value: function initResources() {
            var recArray = ['energy1', 'energy2', 'oxygen', 'metal', 'biodrone', 'rocket', 'uranium', 'biomass', 'nuke'];
            var rec = null;
            for (var i in recArray) {
                rec = new Resource(recArray[i]);
                this.resourceArray[recArray[i]] = [];
                if (recArray[i] != "nuke") {
                    for (var count = 0; count < 10; count++) {
                        if (count < 5) {
                            this.resourceArray[recArray[i]].push(rec);
                        } else {
                            this.resourceArray[recArray[i]].push(null);
                        }
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

            if (type == "nuke") {
                return this.resourceArray[type].length;
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
                if (accept === true) {
                    return true;
                } else {
                    return this.resourceArray[type].length;
                }
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

            if (type == "nuke") {
                this.resourceArray[type].push(new Resource(type));
                return this.resourceArray[type].length;
            }

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
            ORDNANCE: 5, // move ordnance according to dice roll (this may not require a state...)
            END: 6 // assess ordnance damage and clone/biodrone kills. Assess victory conditions (this may not require a state...)
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

        this.queuedTile = null;
        this.tilesRepairedThisTurn = 0;
        this.availableClonesToAdd = 0;
    }

    _createClass(Septikon, [{
        key: 'clicked',
        value: function clicked(data) {

            // Process the click from the client. 
            // Client should do NO rule processing. Pass the click from client to server; process the data; tell the client what to do.
            // Basically, check game state and turn state.

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
                                    var pointArray = [];
                                    for (var pi = 0; pi < this.activePlayer.currentLegalPieces.length; pi++) {
                                        pointArray.push(this.activePlayer.currentLegalPieces[pi].origin);
                                        pointArray.concat(this.activePlayer.currentLegalPieces[pi].moves);
                                    }
                                    this.emit('action', { callback: 'showTiles', details: { pointArray: pointArray } }, this.activePlayer.socketID);
                                    //  - Show this clone's moves in client
                                    //     TODO: emit something here
                                    // this.emit('action', {callback: 'showTiles', details: {pointArray}}, this.activePlayer.socketID);
                                    //  - show this clone in different color in client
                                    //     TODO: emit something here
                                    // this.emit('action', {callback: 'showTiles', details: {pointArray}}, this.activePlayer.socketID);
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

                                    this.turnState++;
                                    // TODO: trigger tile and emit battle targets (gunners, etc) to Player
                                    this.activateTile({ x: data.x, y: data.y });

                                    // TODO: if tile is production, surface, or armory; check for biodrones and move ordnance, then (if none are found) change players.
                                    var tile = this.getTile(data.x, data.y);
                                    if (tile.type == "production" || tile.type == "surface" || tile.type == "armory") {
                                        this.activePlayer.selectedPersonnelToMove = null;
                                        if (tile.name == "prodRepair") {
                                            this.queuedTile = tile;
                                            return;
                                        }
                                        if (tile.name == "chemicalReactor" || tile.name == "chemicalReactorTwo" || tile.name == "airFilter") {
                                            this.queuedTile = tile;
                                            return;
                                        }
                                        if (this.activePlayer.getPersonnel('biodrone').length > 0) {
                                            // TODO: send biodrone array to client for selection
                                            return;
                                        }
                                        if (this.activePlayer.getOrdnance().length > 0) {
                                            // TODO: move ordnance
                                            return;
                                        }
                                        this.changeActivePlayer();
                                        return;
                                    }
                                }
                                this.activePlayer.selectedPersonnelToMove = null;
                            }

                            break;

                        case this.turnStateEnum.ACTION:

                            // Player will designate gunner(s) for firing and/or additional targets, depending on the battle tile type.
                            // Player will confirm movement selections with GO! (unless repair or counter espionage)
                            // Array of eligible gunners sent via activateTile();
                            // Emit array of eligible gunners and number of selectable gunners to Player.

                            var actionTile;

                            if (this.queuedTile.name == "chemicalReactor" || this.queuedTile.name == "chemicalReactorTwo" || this.queuedTile.name == "airFilter") {
                                actionTile = this.getTile(data.x, data.y);
                                if (actionTile.name == "lock" && actionTile.damaged === false && actionTile.occupied === false) {
                                    this.placeClone(this.activePlayer, data.x, data.y);
                                    this.availableClonesToAdd--;
                                    if (this.availableClonesToAdd > 0) {
                                        return;
                                    }
                                    if (this.activePlayer.getPersonnel('biodrones').length > 0) {
                                        // TODO: send biodrone selection
                                        return;
                                    }
                                    if (this.activePlayer.getOrdnance().length > 0) {
                                        // TODO: Move ordnance and check for damage
                                        return;
                                    }
                                    this.changeActivePlayer();
                                    return;
                                }
                            } else if (this.queuedTile.name == "counterEspionage") {
                                // TODO: special case.
                            } else if (this.queuedTile.name == "repair" || this.queuedTile.name == "repairTwo" || this.queuedTile.name == "prodRepair") {
                                // TODO: Special cases. 
                                actionTile = this.getTile(data.x, data.y).damaged;
                                if (actionTile.damaged === false) {
                                    return;
                                }
                                actionTile.damaged = false;
                                this.tilesRepairedThisTurn++;
                                this.emit('action', { callback: 'repairTile', details: { x: data.x, y: data.y } }, this.activePlayer.socketID);
                                if (this.tilesRepairedThisTurn == 1) {
                                    // TODO: check for repairTwo
                                    this.tilesRepairedThisTurn = 0;
                                    if (this.activePlayer.getPersonnel('biodrones').length > 0) {
                                        // TODO: send biodrone selection
                                        return;
                                    }
                                    if (this.activePlayer.getOrdnance().length > 0) {
                                        // TODO: Move ordnance and check for damage
                                        return;
                                    }
                                    this.changeActivePlayer();
                                    return;
                                }
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

                            break;

                        case this.turnStateEnum.TARGETS:

                            // Player will choose additional targets if required by the tile. Espoinage, for instance, requires a gunner and an enemy clone in the selected gunner's line of fire.
                            // Player will confirm targets with GO!

                            console.log("Target queued!");
                            break;

                        case this.turnStateEnum.ORDNANCE:

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
                case this.turnStateEnum.ACTION:
                    // Player has confirmed gunner selection.

                    if (this.activePlayer.getSelectedGunners().length > 0) {
                        this.fireWeapon(this.queuedTile, this.activePlayer.getSelectedGunners());
                        // TODO: If targets are required (ie espionage) send that array now and advance to TARGETS and RETURN
                    }

                    // TODO: If biodrones exist, send that array now and advance to BIODRONES and RETURN

                    // TODO: If player has ordnance, move ordnance/check damage 
                    if (this.activePlayer.ordnanceArray.length > 0) {
                        var updatedOrdnance = this.activePlayer.moveOrdnance(this.currentDiceValue);
                        // TODO: Check / apply damage
                        this.emit('action', { callback: 'moveOrdnance', details: updatedOrdnance }, this.activePlayer.socketID);
                    }

                    this.changeActivePlayer();

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
            this.activePlayer.clearQueues();
            this.emit('action', { callback: "takeDice", details: {} }, this.activePlayer.socketID);
            this.activePlayer = this.getPlayerOpponent(this.activePlayer);
            this.emit('action', { callback: "offerDice", details: {} }, this.activePlayer.socketID);
            this.turnState = 0;
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

                    if (tile.name == "chemicalReactor" || tile.name == "chemicalReactorTwo") {
                        this.availableClonesToAdd = this.activePlayer.getResourceCount('oxygen') + tile.properties.resourceYieldCount[0] - this.activePlayer.getPersonnel('clone').length;
                    } else if (tile.name == "airFilter") {
                        this.availableClonesToAdd = this.activePlayer.getResourceCount('oxygen') + tile.properties.resourceYieldCount[0] - tile.properties.resourceCostCount[0] - this.activePlayer.getPersonnel('clone').length;
                    }

                    for (var k in tile.properties.resourceCostType) {
                        remainingCount = this.activePlayer.spendResource(tile.properties.resourceCostType[k], tile.properties.resourceCostCount[k]);
                        console.log("Player " + this.activePlayer.id + " spent " + remainingCount + " " + tile.properties.resourceCostType[k] + ". This leaves them with " + this.activePlayer.getResourceCount(tile.properties.resourceCostType[k]));
                    }

                    for (var l in tile.properties.resourceYieldType) {
                        remainingCount = this.activePlayer.acceptResource(tile.properties.resourceYieldType[l], tile.properties.resourceYieldCount[l]);
                        if (remainingCount) console.log("Player " + this.activePlayer.id + " added " + remainingCount + " " + tile.properties.resourceYieldType[l] + ". This leaves them with " + this.activePlayer.getResourceCount(tile.properties.resourceYieldType[l]));
                    }

                    if (tile.name == "oxygen") {
                        // TODO: Check if oxygen is greater than the number of clones. If so, add a clone.
                        if (this.activePlayer.getResourceCount('oxygen') > this.activePlayer.getPersonnel('clone')) {
                            this.queuedTile = tile;
                        }
                    }

                    if (tile.name == "prodRepair") {
                        // Trigger the repair 
                        this.queuedTile = tile;
                        return;
                    }
                    console.log("+++++++");

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
                            this.queuedTile = tile;
                            // TODO: emit showTiles() with array of legal gunners
                            this.emit('action', { callback: "offerGunners", details: { gunners: activeGunners } }, this.activePlayer.socketID);
                            // Ready to select gunners! This will take place on the next legal click event.
                            break;

                        case "counterEspionage":
                            // look for clones that are opponent's spied
                            break;

                        case "repair":
                        case "repairTwo":
                            this.queuedTile = tile;
                            // currentResourceCount = 0;
                            // var activeDamagedTiles = this.getDamagedTiles(this.activePlayer);
                            // if (activeDamagedTiles.length < 1) {
                            //     return;
                            // }
                            // // calculate cost of repair
                            // for (var n in tile.properties.resourceCostType) {
                            //     currentResourceCount = this.activePlayer.getResourceCount(tile.properties.resourceCostType[n]);
                            //     if (currentResourceCount < tile.properties.resourceCostCount) {
                            //         return; // Not enough of a resource!
                            //     } 
                            // }
                            console.log("Tell player that they can afford to fix up the station!");
                            break;
                    }
                    break;

                default:
                    break;
            }
        }
    }, {
        key: 'getTileOccupant',
        value: function getTileOccupant(point) {
            var ordnance, personnel;
            for (var pi = 0; pi < this.playersArray.length; pi++) {
                ordnance = this.playersArray[pi].getOrdnanceByPoint(point);
                personnel = this.playersArray[pi].getPersonnelByPoint(point);
                if (ordnance !== false) {
                    return ordnance;
                } else if (personnel !== false) {
                    return personnel;
                } else {
                    return false;
                }
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

                switch (weaponTile.name) {
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
                                        this.activePlayer.remove(currentOccupant);
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
                        if (weaponTile.name == "shield" || weaponTile.name == "satellite") {
                            if (this.activePlayer.id == 1) {
                                ordnancePoint.x += this.currentDiceValue;
                            } else {
                                ordnancePoint.x -= this.currentDiceValue;
                            }
                        }
                        currentTile = this.getTile(ordnancePoint.x, ordnancePoint.y);
                        ordUUID = uuid();
                        this.activePlayer.addOrdnance(weaponTile.name, ordnancePoint, ordUUID);
                        this.emit('action', { callback: "addOrdnance", details: { type: weaponTile.name, playerID: this.activePlayer.id, point: ordnancePoint, uuid: ordUUID } }, this.activePlayer.socketID);
                        break;
                    case "thermite":
                        if (this.activePlayer.id == 1) {
                            ordnancePoint.x = 31 - this.currentDiceValue;
                        } else {
                            ordnancePoint.x = this.currentDiceValue - 1;
                        }
                        currentTile = this.getTile(ordnancePoint.x, ordnancePoint.y);
                        if (currentTile.damaged === true) {
                            break;
                        } else {
                            currentTile.damaged = true;
                            this.emit('action', { callback: "damageTile", details: ordnancePoint }, this.activePlayer.socketID);
                            break;
                        }
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
            var returnArray = [];
            var movesArray = [];

            for (var i in personnelArray) {
                movesArray = this.getLegalMoves(personnelArray[i], this.currentDiceValue, { x: personnelArray[i].x, y: personnelArray[i].y });
                if (movesArray.length > 0) {
                    returnArray.push({ type: personnelArray[i].type, origin: { x: personnelArray[i].x, y: personnelArray[i].y }, uuid: personnelArray[i].uuid, moves: movesArray });
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

                // Player receives array of legal personnel (clones) and turn state advances to MOVE
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
      // this.game.load.script('gray', 'https://cdn.rawgit.com/photonstorm/phaser/master/v2/filters/Gray.js');
      this.game.load.script('gray', 'https://cdn.rawgit.com/photonstorm/phaser-ce/master/filters/Gray.js');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvdGlsZURldGFpbC5qc29uIiwiYXNzZXRzL3dhbGxHcmlkLmpzb24iLCJub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsInNyYy9tYWluLmpzIiwic3JjL21vZGFsLmpzIiwic3JjL3ByZWZhYnMvY2xpZW50LmpzIiwic3JjL3ByZWZhYnMvY2xvbmUuanMiLCJzcmMvcHJlZmFicy9jcm9zc2hhaXJzLmpzIiwic3JjL3ByZWZhYnMvZGljZS5qcyIsInNyYy9wcmVmYWJzL21hc3Rlci5qcyIsInNyYy9wcmVmYWJzL29yZG5hbmNlLmpzIiwic3JjL3ByZWZhYnMvcGVyc29ubmVsLmpzIiwic3JjL3ByZWZhYnMvcmVzb3VyY2VzLmpzIiwic3JjL3ByZWZhYnMvc2VwdGlrb24uanMiLCJzcmMvcHJlZmFicy90ZWFtLmpzIiwic3JjL3NlcnZlci9vcmRuYW5jZS5qcyIsInNyYy9zZXJ2ZXIvcGVyc29ubmVsLmpzIiwic3JjL3NlcnZlci9wbGF5ZXIuanMiLCJzcmMvc2VydmVyL3Jlc291cmNlLmpzIiwic3JjL3NlcnZlci9zZXB0aWtvbi5qcyIsInNyYy9zdGF0ZXMvYm9vdC5qcyIsInNyYy9zdGF0ZXMvZ2FtZS5qcyIsInNyYy9zdGF0ZXMvZ2FtZW92ZXIuanMiLCJzcmMvc3RhdGVzL3ByZWxvYWRlci5qcyIsInNyYy9zdGF0ZXMvc2V0dXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdCQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBRyxPQUFPLE9BQVAsS0FBb0IsV0FBdkIsRUFBb0M7QUFDaEMsUUFBRyxhQUFhLE9BQWIsQ0FBcUIsVUFBckIsTUFBcUMsSUFBeEMs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LG1DQUFlLEdBSlI7QUFLUCxtQ0FBZTtBQUxSLGlCQUFELEVBTVA7QUFDQywwQkFBTSxNQURQO0FBRUMsNkJBQVMsOERBRlY7QUFHQyxnQ0FBWSxjQUhiO0FBSUMsOEJBQVUsRUFKWDtBQUtDLDJCQUFPLFVBTFI7QUFNQyw2QkFBUyxDQUFDO0FBTlgsaUJBTk8sRUFhUDtBQUNDLDBCQUFNLE1BRFA7QUFFQyw2QkFBUyxLQUFLLElBQUwsQ0FBVSxJQUZwQjtBQUdDLGdDQUFZLGNBSGI7QUFJQyw4QkFBVSxFQUpYO0FBS0MsMkJBQU8sVUFMUjtBQU1DLDZCQUFTO0FBTlYsaUJBYk87QUFKVixhQURKO0FBNEJEOzs7O0VBekVpQixPQUFPLEs7O2tCQTRFWixLIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwibW9kdWxlLmV4cG9ydHM9e1xuXHRcInRpbGVQcm9wZXJ0eUFycmF5XCI6IHtcblx0XHRcIm90aGVyU3BhY2VcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAwMFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwic3BhY2VcIixcblx0XHRcdFwibmFtZVwiOiBcInNwYWNlXCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI5LDBcIiwgXCI5LDFcIiwgXCI5LDJcIiwgXCI5LDNcIiwgXCI5LDRcIiwgXCI5LDVcIiwgXCI5LDZcIiwgXCI5LDdcIiwgXCI5LDhcIiwgXCI5LDlcIiwgXCI5LDEwXCIsIFwiOSwxMVwiLCBcIjksMTJcIiwgXCI5LDEzXCIsIFwiOSwxNFwiLCBcIjksMTVcIiwgXCI5LDE2XCIsIFwiOSwxN1wiLCBcIjksMThcIiwgXCI5LDE5XCIsIFwiOSwyMFwiLCBcIjEwLDBcIiwgXCIxMCwxXCIsIFwiMTAsMlwiLCBcIjEwLDNcIiwgXCIxMCw0XCIsIFwiMTAsNVwiLCBcIjEwLDZcIiwgXCIxMCw3XCIsIFwiMTAsOFwiLCBcIjEwLDlcIiwgXCIxMCwxMFwiLCBcIjEwLDExXCIsIFwiMTAsMTJcIiwgXCIxMCwxM1wiLCBcIjEwLDE0XCIsIFwiMTAsMTVcIiwgXCIxMCwxNlwiLCBcIjEwLDE3XCIsIFwiMTAsMThcIiwgXCIxMCwxOVwiLCBcIjEwLDIwXCIsIFwiMTEsMFwiLCBcIjExLDFcIiwgXCIxMSwyXCIsIFwiMTEsM1wiLCBcIjExLDRcIiwgXCIxMSw1XCIsIFwiMTEsNlwiLCBcIjExLDdcIiwgXCIxMSw4XCIsIFwiMTEsOVwiLCBcIjExLDEwXCIsIFwiMTEsMTFcIiwgXCIxMSwxMlwiLCBcIjExLDEzXCIsIFwiMTEsMTRcIiwgXCIxMSwxNVwiLCBcIjExLDE2XCIsIFwiMTEsMTdcIiwgXCIxMSwxOFwiLCBcIjExLDE5XCIsIFwiMTEsMjBcIiwgXCIxMiwwXCIsIFwiMTIsMVwiLCBcIjEyLDJcIiwgXCIxMiwzXCIsIFwiMTIsNFwiLCBcIjEyLDVcIiwgXCIxMiw2XCIsIFwiMTIsN1wiLCBcIjEyLDhcIiwgXCIxMiw5XCIsIFwiMTIsMTBcIiwgXCIxMiwxMVwiLCBcIjEyLDEyXCIsIFwiMTIsMTNcIiwgXCIxMiwxNFwiLCBcIjEyLDE1XCIsIFwiMTIsMTZcIiwgXCIxMiwxN1wiLCBcIjEyLDE4XCIsIFwiMTIsMTlcIiwgXCIxMiwyMFwiLCBcIjEzLDBcIiwgXCIxMywxXCIsIFwiMTMsMlwiLCBcIjEzLDNcIiwgXCIxMyw0XCIsIFwiMTMsNVwiLCBcIjEzLDZcIiwgXCIxMyw3XCIsIFwiMTMsOFwiLCBcIjEzLDlcIiwgXCIxMywxMFwiLCBcIjEzLDExXCIsIFwiMTMsMTJcIiwgXCIxMywxM1wiLCBcIjEzLDE0XCIsIFwiMTMsMTVcIiwgXCIxMywxNlwiLCBcIjEzLDE3XCIsIFwiMTMsMThcIiwgXCIxMywxOVwiLCBcIjEzLDIwXCIsIFwiMTQsMFwiLCBcIjE0LDFcIiwgXCIxNCwyXCIsIFwiMTQsM1wiLCBcIjE0LDRcIiwgXCIxNCw1XCIsIFwiMTQsNlwiLCBcIjE0LDdcIiwgXCIxNCw4XCIsIFwiMTQsOVwiLCBcIjE0LDEwXCIsIFwiMTQsMTFcIiwgXCIxNCwxMlwiLCBcIjE0LDEzXCIsIFwiMTQsMTRcIiwgXCIxNCwxNVwiLCBcIjE0LDE2XCIsIFwiMTQsMTdcIiwgXCIxNCwxOFwiLCBcIjE0LDE5XCIsIFwiMTQsMjBcIiwgXCIxNSwwXCIsIFwiMTUsMVwiLCBcIjE1LDJcIiwgXCIxNSwzXCIsIFwiMTUsNFwiLCBcIjE1LDVcIiwgXCIxNSw2XCIsIFwiMTUsN1wiLCBcIjE1LDhcIiwgXCIxNSw5XCIsIFwiMTUsMTBcIiwgXCIxNSwxMVwiLCBcIjE1LDEyXCIsIFwiMTUsMTNcIiwgXCIxNSwxNFwiLCBcIjE1LDE1XCIsIFwiMTUsMTZcIiwgXCIxNSwxN1wiLCBcIjE1LDE4XCIsIFwiMTUsMTlcIiwgXCIxNSwyMFwiLCBcIjE2LDBcIiwgXCIxNiwxXCIsIFwiMTYsMlwiLCBcIjE2LDNcIiwgXCIxNiw0XCIsIFwiMTYsNVwiLCBcIjE2LDZcIiwgXCIxNiw3XCIsIFwiMTYsOFwiLCBcIjE2LDlcIiwgXCIxNiwxMFwiLCBcIjE2LDExXCIsIFwiMTYsMTJcIiwgXCIxNiwxM1wiLCBcIjE2LDE0XCIsIFwiMTYsMTVcIiwgXCIxNiwxNlwiLCBcIjE2LDE3XCIsIFwiMTYsMThcIiwgXCIxNiwxOVwiLCBcIjE2LDIwXCIsIFwiMTcsMFwiLCBcIjE3LDFcIiwgXCIxNywyXCIsIFwiMTcsM1wiLCBcIjE3LDRcIiwgXCIxNyw1XCIsIFwiMTcsNlwiLCBcIjE3LDdcIiwgXCIxNyw4XCIsIFwiMTcsOVwiLCBcIjE3LDEwXCIsIFwiMTcsMTFcIiwgXCIxNywxMlwiLCBcIjE3LDEzXCIsIFwiMTcsMTRcIiwgXCIxNywxNVwiLCBcIjE3LDE2XCIsIFwiMTcsMTdcIiwgXCIxNywxOFwiLCBcIjE3LDE5XCIsIFwiMTcsMjBcIiwgXCIxOCwwXCIsIFwiMTgsMVwiLCBcIjE4LDJcIiwgXCIxOCwzXCIsIFwiMTgsNFwiLCBcIjE4LDVcIiwgXCIxOCw2XCIsIFwiMTgsN1wiLCBcIjE4LDhcIiwgXCIxOCw5XCIsIFwiMTgsMTBcIiwgXCIxOCwxMVwiLCBcIjE4LDEyXCIsIFwiMTgsMTNcIiwgXCIxOCwxNFwiLCBcIjE4LDE1XCIsIFwiMTgsMTZcIiwgXCIxOCwxN1wiLCBcIjE4LDE4XCIsIFwiMTgsMTlcIiwgXCIxOCwyMFwiLCBcIjE5LDBcIiwgXCIxOSwxXCIsIFwiMTksMlwiLCBcIjE5LDNcIiwgXCIxOSw0XCIsIFwiMTksNVwiLCBcIjE5LDZcIiwgXCIxOSw3XCIsIFwiMTksOFwiLCBcIjE5LDlcIiwgXCIxOSwxMFwiLCBcIjE5LDExXCIsIFwiMTksMTJcIiwgXCIxOSwxM1wiLCBcIjE5LDE0XCIsIFwiMTksMTVcIiwgXCIxOSwxNlwiLCBcIjE5LDE3XCIsIFwiMTksMThcIiwgXCIxOSwxOVwiLCBcIjE5LDIwXCIsIFwiMjAsMFwiLCBcIjIwLDFcIiwgXCIyMCwyXCIsIFwiMjAsM1wiLCBcIjIwLDRcIiwgXCIyMCw1XCIsIFwiMjAsNlwiLCBcIjIwLDdcIiwgXCIyMCw4XCIsIFwiMjAsOVwiLCBcIjIwLDEwXCIsIFwiMjAsMTFcIiwgXCIyMCwxMlwiLCBcIjIwLDEzXCIsIFwiMjAsMTRcIiwgXCIyMCwxNVwiLCBcIjIwLDE2XCIsIFwiMjAsMTdcIiwgXCIyMCwxOFwiLCBcIjIwLDE5XCIsIFwiMjAsMjBcIiwgXCIyMSwwXCIsIFwiMjEsMVwiLCBcIjIxLDJcIiwgXCIyMSwzXCIsIFwiMjEsNFwiLCBcIjIxLDVcIiwgXCIyMSw2XCIsIFwiMjEsN1wiLCBcIjIxLDhcIiwgXCIyMSw5XCIsIFwiMjEsMTBcIiwgXCIyMSwxMVwiLCBcIjIxLDEyXCIsIFwiMjEsMTNcIiwgXCIyMSwxNFwiLCBcIjIxLDE1XCIsIFwiMjEsMTZcIiwgXCIyMSwxN1wiLCBcIjIxLDE4XCIsIFwiMjEsMTlcIiwgXCIyMSwyMFwiXVxuXHRcdH0sXG5cdFx0XCJiYXR0bGVUaGVybWl0ZVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDAxXCIsXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcblx0XHRcdFwibmFtZVwiOiBcInRoZXJtaXRlXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImJpb21hc3NcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzJdLFxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxuXHRcdFx0XHRcImFyZ3NcIjogXCJ0aGVybWl0ZVwiXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwyMFwiLCBcIjcsMVwiLCBcIjcsN1wiLCBcIjIzLDEzXCIsIFwiMjMsMTlcIiwgXCIyNCwwXCJdXG5cdFx0fSxcblx0XHRcImJhdHRsZVNoaWVsZFwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDAyXCIsXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcblx0XHRcdFwibmFtZVwiOiBcInNoaWVsZFwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxuXHRcdFx0XHRcImFyZ3NcIjogXCJzaGllbGRcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsNlwiLCBcIjYsMTNcIiwgXCI2LDE5XCIsIFwiNywyXCIsIFwiNywxMlwiLCBcIjIzLDhcIiwgXCIyMywxOFwiLCBcIjI0LDFcIiwgXCIyNCw3XCIsIFwiMjQsMTRcIl1cblx0XHR9LFxuXHRcdFwiYmF0dGxlQmlvZHJvbmVcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAwM1wiLFxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJiaW9kcm9uZVwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJiaW9kcm9uZVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXG5cdFx0XHRcdFwiYXJnc1wiOiBcImJpb2Ryb25lXCJcblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDVcIiwgXCI3LDNcIiwgXCI3LDE1XCIsIFwiMjMsNVwiLCBcIjIzLDE3XCIsIFwiMjQsMTVcIl1cblx0XHR9LFxuXHRcdFwiYmF0dGxlU2F0ZWxsaXRlXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMDRcIixcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwic2F0ZWxsaXRlXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm1ldGFsXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcblx0XHRcdFx0XCJhcmdzXCI6IFwic2F0ZWxsaXRlXCJcblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDBcIiwgXCI2LDE0XCIsIFwiNyw0XCIsIFwiNywxN1wiLCBcIjIzLDNcIiwgXCIyMywxNlwiLCBcIjI0LDZcIiwgXCIyNCwyMFwiXVxuXHRcdH0sXG5cdFx0XCJiYXR0bGVMYXNlclwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDA1XCIsXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcblx0XHRcdFwibmFtZVwiOiBcImxhc2VyXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXG5cdFx0XHRcdFwiYXJnc1wiOiBcImxhc2VyXCJcblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDNcIiwgXCI2LDdcIiwgXCI2LDhcIiwgXCI2LDEyXCIsIFwiNiwxNlwiLCBcIjcsNVwiLCBcIjcsNlwiLCBcIjcsOVwiLCBcIjcsMThcIiwgXCI3LDE5XCIsIFwiMjMsMVwiLCBcIjIzLDJcIiwgXCIyMywxMVwiLCBcIjIzLDE0XCIsIFwiMjMsMTVcIiwgXCIyNCw0XCIsIFwiMjQsOFwiLCBcIjI0LDEyXCIsIFwiMjQsMTNcIiwgXCIyNCwxN1wiXVxuXHRcdH0sXG5cdFx0XCJiYXR0bGVSZXBhaXJcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAwNlwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJyZXBhaXJcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wibWV0YWxcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwicmVwYWlyXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IDFcblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDFcIiwgXCI2LDEwXCIsIFwiNiwxOFwiLCBcIjcsOFwiLCBcIjcsMTNcIiwgXCIyMyw3XCIsIFwiMjMsMTJcIiwgXCIyNCwyXCIsIFwiMjQsMTBcIiwgXCIyNCwxOVwiXVxuXHRcdH0sXG5cdFx0XCJiYXR0bGVSb2NrZXRcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAwN1wiLFxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJyb2NrZXRcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wicm9ja2V0XCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcblx0XHRcdFx0XCJhcmdzXCI6IFwicm9ja2V0XCJcblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDRcIiwgXCI2LDExXCIsIFwiNywxMFwiLCBcIjcsMTZcIiwgXCIyMyw0XCIsIFwiMjMsMTBcIiwgXCIyNCw5XCIsIFwiMjQsMTZcIl1cblx0XHR9LFxuXHRcdFwiYmF0dGxlRXNwaW9uYWdlXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMDhcIixcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiZXNwaW9uYWdlXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImJpb21hc3NcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzNdLFxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZXNwaW9uYWdlXCJcblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDE1XCIsIFwiNywxMVwiLCBcIjIzLDlcIiwgXCIyNCw1XCJdXG5cdFx0fSxcblx0XHRcImJhdHRsZVRha2VvdmVyXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMDlcIixcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwidGFrZW92ZXJcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsyXSxcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcInRha2VvdmVyXCJcblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDE3XCIsIFwiNywxNFwiLCBcIjIzLDZcIiwgXCIyNCwzXCJdXG5cdFx0fSxcblx0XHRcImJhdHRsZVJlcGFpclR3b1wiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDEwXCIsXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcblx0XHRcdFwibmFtZVwiOiBcInJlcGFpclR3b1wiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIiwgXCJveHlnZW5cIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzEsIDFdLFxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwicmVwYWlyXCIsXG5cdFx0XHRcdFwiYXJnc1wiOiAyXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiw5XCIsIFwiMjQsMTFcIl1cblx0XHR9LFxuXHRcdFwiYmF0dGxlQ291bnRlckVzcGlvbmFnZVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDExXCIsXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcblx0XHRcdFwibmFtZVwiOiBcImNvdW50ZXJFc3Bpb25hZ2VcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiLCBcIm94eWdlblwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMV0sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJjb3VudGVyXCJcblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDJcIiwgXCIyNCwxOFwiXVxuXHRcdH0sXG5cdFx0XCJvdGhlclN1cmZhY2VcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAxMlwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwic3VyZmFjZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwic3VyZmFjZVwiLFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiOCwwXCIsIFwiOCwxXCIsIFwiOCwyXCIsIFwiOCwzXCIsIFwiOCw0XCIsIFwiOCw1XCIsIFwiOCw2XCIsIFwiOCw3XCIsIFwiOCw4XCIsIFwiOCw5XCIsIFwiOCwxMFwiLCBcIjgsMTFcIiwgXCI4LDEyXCIsIFwiOCwxM1wiLCBcIjgsMTRcIiwgXCI4LDE1XCIsIFwiOCwxNlwiLCBcIjgsMTdcIiwgXCI4LDE4XCIsIFwiOCwxOVwiLCBcIjgsMjBcIiwgXCIyMiwwXCIsIFwiMjIsMVwiLCBcIjIyLDJcIiwgXCIyMiwzXCIsIFwiMjIsNFwiLCBcIjIyLDVcIiwgXCIyMiw2XCIsIFwiMjIsN1wiLCBcIjIyLDhcIiwgXCIyMiw5XCIsIFwiMjIsMTBcIiwgXCIyMiwxMVwiLCBcIjIyLDEyXCIsIFwiMjIsMTNcIiwgXCIyMiwxNFwiLCBcIjIyLDE1XCIsIFwiMjIsMTZcIiwgXCIyMiwxN1wiLCBcIjIyLDE4XCIsIFwiMjIsMTlcIiwgXCIyMiwyMFwiXVxuXHRcdH0sXG5cdFx0XCJvdGhlckxvY2tcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAxM1wiLFxuXHRcdFx0XCJ0eXBlXCI6IFwibG9ja1wiLFxuXHRcdFx0XCJuYW1lXCI6IFwibG9ja1wiLFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNywwXCIsIFwiNSwxMFwiLCBcIjEsMTBcIiwgXCI3LDIwXCIsIFwiMjMsMFwiLCBcIjIzLDIwXCIsIFwiMjUsMTBcIiwgXCIyOSwxMFwiXVxuXHRcdH0sXG5cdFx0XCJhcm1vcnlEcmlsbFwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDE0XCIsXG5cdFx0XHRcInR5cGVcIjogXCJhcm1vcnlcIixcblx0XHRcdFwibmFtZVwiOiBcImRyaWxsXCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI0LDEwXCIsIFwiMjYsMTBcIl1cblx0XHR9LFxuXHRcdFwiQXJtb3J5Q2Fubm9uXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMTVcIixcblx0XHRcdFwidHlwZVwiOiBcImFybW9yeVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiY2Fubm9uXCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIzLDEwXCIsIFwiMjcsMTBcIl1cblx0XHR9LFxuXHRcdFwiYXJtb3J5RXhwbG9zaXZlc1wiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDE2XCIsXG5cdFx0XHRcInR5cGVcIjogXCJhcm1vcnlcIixcblx0XHRcdFwibmFtZVwiOiBcImV4cGxvc2l2ZXNcIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjIsMTBcIiwgXCIyOCwxMFwiXVxuXHRcdH0sXG5cdFx0XCJwcm9kdWN0aW9uTGljaGVuXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMTdcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcImxpY2hlblwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzFdXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwwXCIsIFwiMCwxMFwiLCBcIjAsMTdcIiwgXCIxLDJcIiwgXCIxLDhcIiwgXCIxLDE2XCIsIFwiMSwyMFwiLCBcIjI5LDBcIiwgXCIyOSw0XCIsIFwiMjksMTJcIiwgXCIyOSwxOFwiLCBcIjMwLDNcIiwgXCIzMCwxMFwiLCBcIjMwLDIwXCJdXG5cdFx0fSxcblx0XHRcInByb2R1Y3Rpb25MaWNoZW5Ud29cIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAxOFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwibGljaGVuVHdvXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJiaW9tYXNzXCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMl1cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDRcIiwgXCIzMCwxNlwiXVxuXG5cdFx0fSxcblx0XHRcInByb2R1Y3Rpb25DaGVtaWNhbFJlYWN0b3JcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAxOVwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiY2hlbWljYWxSZWFjdG9yXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImJpb21hc3NcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcIm94eWdlblwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzFdXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMSwxXCIsIFwiMSw5XCIsIFwiMjksMTlcIiwgXCIyOSwxMVwiXVxuXG5cdFx0fSxcblx0XHRcInByb2R1Y3Rpb25DaGVtaWNhbFJlYWN0b3JUd29cIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAyMFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiY2hlbWljYWxSZWFjdG9yVHdvXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImJpb21hc3NcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcIm94eWdlblwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzJdXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCw1XCIsIFwiMzAsMTVcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvbkFpckZpbHRlclwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDIxXCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJhaXJGaWx0ZXJcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wib3h5Z2VuXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsyXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJveHlnZW5cIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFszXVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMTVcIiwgXCIxLDExXCIsIFwiMjksOVwiLCBcIjMwLDVcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvbkJpb2NvbGxlY3RvclwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDIyXCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJiaW9jb2xsZWN0b3JcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wib3h5Z2VuXCIsIFwiYmlvbWFzc1wiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMV0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wiYmlvZHJvbmVcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsxXVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMTRcIiwgXCIwLDE4XCIsIFwiMSw2XCIsIFwiMSwxN1wiLCBcIjMwLDZcIiwgXCIzMCwyXCIsIFwiMjksMTRcIiwgXCIyOSwzXCJdXG5cdFx0fSxcblx0XHRcInByb2R1Y3Rpb25VcmFuaXVtTWluZVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDIzXCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJ1cmFuaXVtTWluZVwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJveHlnZW5cIiwgXCJlbmVyZ3lcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzEsIDFdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcInVyYW5pdW1cIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsxXVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMlwiLCBcIjAsNlwiLCBcIjEsM1wiLCBcIjMwLDE4XCIsIFwiMzAsMTRcIiwgXCIyOSwxN1wiXVxuXHRcdH0sXG5cdFx0XCJwcm9kdWN0aW9uTnVjbGVhclJlYWN0b3JcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAyNFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwibnVjbGVhclJlYWN0b3JcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1widXJhbml1bVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wiZW5lcmd5XCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbM11cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDlcIiwgXCIwLDE2XCIsIFwiMSw3XCIsIFwiMSwxNFwiLCBcIjEsMTlcIiwgXCIzMCwxMVwiLCBcIjMwLDRcIiwgXCIyOSwxM1wiLCBcIjI5LDZcIiwgXCIyOSwxXCJdXG5cdFx0fSxcblx0XHRcInByb2R1Y3Rpb25UaGVybWFsR2VuZXJhdG9yXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMjVcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcInRoZXJtYWxHZW5lcmF0b3JcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wiZW5lcmd5XCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDEyXCIsIFwiMzAsOFwiXVxuXHRcdH0sXG5cdFx0XCJwcm9kdWN0aW9uRm91bmRyeVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDI2XCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJmb3VuZHJ5XCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wibWV0YWxcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsxXVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsM1wiLCBcIjAsMTFcIiwgXCIwLDE5XCIsIFwiMSwxM1wiLCBcIjMwLDE3XCIsIFwiMzAsOVwiLCBcIjMwLDFcIiwgXCIyOSw3XCJdXG5cdFx0fSxcblx0XHRcInByb2R1Y3Rpb25Gb3VuZHJ5VHdvXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMjdcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcImZvdW5kcnlUd29cIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsyXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJtZXRhbFwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzJdXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMSwwXCIsIFwiMjksMjBcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvblJvY2tldFdvcmtzaG9wXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMjhcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcInJvY2tldFdvcmtzaG9wXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wicm9ja2V0XCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDFcIiwgXCIwLDdcIiwgXCIxLDVcIiwgXCIxLDEyXCIsIFwiMSwxNVwiLCBcIjMwLDE5XCIsIFwiMzAsMTNcIiwgXCIyOSwxNVwiLCBcIjI5LDhcIiwgXCIyOSw1XCJdXG5cdFx0fSxcblx0XHRcInByb2R1Y3Rpb25TZW5zb3JDYWJpblwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDI5XCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJzZW5zb3JDYWJpblwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJraWxsQmlvZHJvbmVcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMTNcIiwgXCIzMCw3XCJdXG5cdFx0fSxcblx0XHRcInByb2R1Y3Rpb25OdWNsZWFyQXJtb3J5XCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMzBcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcIm51Y2xlYXJBcm1vcnlcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wib3h5Z2VuXCIsIFwiZW5lcmd5XCIsIFwidXJhbml1bVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMSwgMV0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wibnVrZVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzFdXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwyMFwiLCBcIjEsNFwiLCBcIjEsMThcIiwgXCIzMCwwXCIsIFwiMjksMTZcIiwgXCIyOSwyXCJdXG5cdFx0fSxcblx0XHRcInByb2R1Y3Rpb25SZXBhaXJcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAzMVwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwicHJvZFJlcGFpclwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwicmVwYWlyXCIsXG5cdFx0XHRcdFwidGlsZVRhcmdldElEXCI6IDFcblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDhcIiwgXCIzMCwxMlwiXVxuXHRcdH0sXG5cdFx0XCJyZXNvdXJjZU94eWdlblwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDMyXCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcblx0XHRcdFwibmFtZVwiOiBcIm94eWdlblwiLFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNSwwXCIsIFwiNSwxXCIsIFwiNSwyXCIsIFwiNSwzXCIsIFwiNSw0XCIsIFwiNSw1XCIsIFwiNSw2XCIsIFwiNSw3XCIsIFwiNSw4XCIsIFwiNSw5XCIsIFwiMjUsMTFcIiwgXCIyNSwxMlwiLCBcIjI1LDEzXCIsIFwiMjUsMTRcIiwgXCIyNSwxNVwiLCBcIjI1LDE2XCIsIFwiMjUsMTdcIiwgXCIyNSwxOFwiLCBcIjI1LDE5XCIsIFwiMjUsMjBcIl1cblx0XHR9LFxuXHRcdFwicmVzb3VyY2VSb2NrZXRcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAzM1wiLFxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJyb2NrZXRcIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjQsMFwiLCBcIjQsMVwiLCBcIjQsMlwiLCBcIjQsM1wiLCBcIjQsNFwiLCBcIjQsNVwiLCBcIjQsNlwiLCBcIjQsN1wiLCBcIjQsOFwiLCBcIjQsOVwiLCBcIjI2LDExXCIsIFwiMjYsMTJcIiwgXCIyNiwxM1wiLCBcIjI2LDE0XCIsIFwiMjYsMTVcIiwgXCIyNiwxNlwiLCBcIjI2LDE3XCIsIFwiMjYsMThcIiwgXCIyNiwxOVwiLCBcIjI2LDIwXCJdXG5cdFx0fSxcblx0XHRcInJlc291cmNlTWV0YWxcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAzNFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJtZXRhbFwiLFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMywwXCIsIFwiMywxXCIsIFwiMywyXCIsIFwiMywzXCIsIFwiMyw0XCIsIFwiMyw1XCIsIFwiMyw2XCIsIFwiMyw3XCIsIFwiMyw4XCIsIFwiMyw5XCIsIFwiMjcsMTFcIiwgXCIyNywxMlwiLCBcIjI3LDEzXCIsIFwiMjcsMTRcIiwgXCIyNywxNVwiLCBcIjI3LDE2XCIsIFwiMjcsMTdcIiwgXCIyNywxOFwiLCBcIjI3LDE5XCIsIFwiMjcsMjBcIl1cblx0XHR9LFxuXHRcdFwicmVzb3VyY2VFbmVyZ3lcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAzNVwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJlbmVyZ3lcIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjIsMFwiLCBcIjIsMVwiLCBcIjIsMlwiLCBcIjIsM1wiLCBcIjIsNFwiLCBcIjIsNVwiLCBcIjIsNlwiLCBcIjIsN1wiLCBcIjIsOFwiLCBcIjIsOVwiLCBcIjIsMTFcIiwgXCIyLDEyXCIsIFwiMiwxM1wiLCBcIjIsMTRcIiwgXCIyLDE1XCIsIFwiMiwxNlwiLCBcIjIsMTdcIiwgXCIyLDE4XCIsIFwiMiwxOVwiLCBcIjIsMjBcIiwgXCIyOCwwXCIsIFwiMjgsMVwiLCBcIjI4LDJcIiwgXCIyOCwzXCIsIFwiMjgsNFwiLCBcIjI4LDVcIiwgXCIyOCw2XCIsIFwiMjgsN1wiLCBcIjI4LDhcIiwgXCIyOCw5XCIsIFwiMjgsMTFcIiwgXCIyOCwxMlwiLCBcIjI4LDEzXCIsIFwiMjgsMTRcIiwgXCIyOCwxNVwiLCBcIjI4LDE2XCIsIFwiMjgsMTdcIiwgXCIyOCwxOFwiLCBcIjI4LDE5XCIsIFwiMjgsMjBcIl1cblx0XHR9LFxuXHRcdFwicmVzb3VyY2VCaW9tYXNzXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMzZcIixcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiYmlvbWFzc1wiLFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNSwxMVwiLCBcIjUsMTJcIiwgXCI1LDEzXCIsIFwiNSwxNFwiLCBcIjUsMTVcIiwgXCI1LDE2XCIsIFwiNSwxN1wiLCBcIjUsMThcIiwgXCI1LDE5XCIsIFwiNSwyMFwiLCBcIjI1LDBcIiwgXCIyNSwxXCIsIFwiMjUsMlwiLCBcIjI1LDNcIiwgXCIyNSw0XCIsIFwiMjUsNVwiLCBcIjI1LDZcIiwgXCIyNSw3XCIsIFwiMjUsOFwiLCBcIjI1LDlcIl1cblx0XHR9LFxuXHRcdFwicmVzb3VyY2VCaW9kcm9uZVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDM3XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcblx0XHRcdFwibmFtZVwiOiBcImJpb2Ryb25lXCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI0LDExXCIsIFwiNCwxMlwiLCBcIjQsMTNcIiwgXCI0LDE0XCIsIFwiNCwxNVwiLCBcIjQsMTZcIiwgXCI0LDE3XCIsIFwiNCwxOFwiLCBcIjQsMTlcIiwgXCI0LDIwXCIsIFwiMjYsMFwiLCBcIjI2LDFcIiwgXCIyNiwyXCIsIFwiMjYsM1wiLCBcIjI2LDRcIiwgXCIyNiw1XCIsIFwiMjYsNlwiLCBcIjI2LDdcIiwgXCIyNiw4XCIsIFwiMjYsOVwiXVxuXHRcdH0sXG5cdFx0XCJyZXNvdXJjZVVyYW5pdW1cIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAzOFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJ1cmFuaXVtXCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIzLDExXCIsIFwiMywxMlwiLCBcIjMsMTNcIiwgXCIzLDE0XCIsIFwiMywxNVwiLCBcIjMsMTZcIiwgXCIzLDE3XCIsIFwiMywxOFwiLCBcIjMsMTlcIiwgXCIzLDIwXCIsIFwiMjcsMFwiLCBcIjI3LDFcIiwgXCIyNywyXCIsIFwiMjcsM1wiLCBcIjI3LDRcIiwgXCIyNyw1XCIsIFwiMjcsNlwiLCBcIjI3LDdcIiwgXCIyNyw4XCIsIFwiMjcsOVwiXVxuXHRcdH1cblx0fVxufSIsIm1vZHVsZS5leHBvcnRzPXtcblx0XCJncmlkXCI6IFtcblx0XHRbOSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEyXSxcblx0XHRbMywgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgOCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNl0sXG5cdFx0WzExLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA1LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxNF0sXG5cdFx0WzExLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA1LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxNF0sXG5cdFx0WzExLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA1LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxNF0sXG5cdFx0WzExLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA1LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxNF0sXG5cdFx0WzksIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDIsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEyXSxcblx0XHRbMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDRdLFxuXHRcdFszLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNl0sXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxuXHRcdFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA0XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxuXHRcdFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA0XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxuXHRcdFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA0XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxuXHRcdFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA0XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxuXHRcdFsxLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCA0XSxcblx0XHRbMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDRdLFxuXHRcdFszLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA4LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA2XSxcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcblx0XHRbOSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMiwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTJdLFxuXHRcdFszLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNl1cblx0XVxufSIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICAvLyBqb2luIHVzZWQgdG8gZml4IG1lbW9yeSBpc3N1ZSBjYXVzZWQgYnkgY29uY2F0ZW5hdGlvbjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzE3NSNjNFxuICByZXR1cm4gKFtidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCBcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dXSkuam9pbignJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG4iLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgSW4gdGhlXG4vLyBicm93c2VyIHRoaXMgaXMgYSBsaXR0bGUgY29tcGxpY2F0ZWQgZHVlIHRvIHVua25vd24gcXVhbGl0eSBvZiBNYXRoLnJhbmRvbSgpXG4vLyBhbmQgaW5jb25zaXN0ZW50IHN1cHBvcnQgZm9yIHRoZSBgY3J5cHRvYCBBUEkuICBXZSBkbyB0aGUgYmVzdCB3ZSBjYW4gdmlhXG4vLyBmZWF0dXJlLWRldGVjdGlvblxuXG4vLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG9cbi8vIGltcGxlbWVudGF0aW9uLiBBbHNvLCBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gb24gSUUxMS5cbnZhciBnZXRSYW5kb21WYWx1ZXMgPSAodHlwZW9mKGNyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mKG1zQ3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93Lm1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKSk7XG5cbmlmIChnZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG4gICAgcmV0dXJuIHJuZHM4O1xuICB9O1xufSBlbHNlIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgcm5kcyA9IG5ldyBBcnJheSgxNik7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXRoUk5HKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICBybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgIH1cblxuICAgIHJldHVybiBybmRzO1xuICB9O1xufVxuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG5cbiAgaWYgKHR5cGVvZihvcHRpb25zKSA9PSAnc3RyaW5nJykge1xuICAgIGJ1ZiA9IG9wdGlvbnMgPT09ICdiaW5hcnknID8gbmV3IEFycmF5KDE2KSA6IG51bGw7XG4gICAgb3B0aW9ucyA9IG51bGw7XG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuXG4gIC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcbiAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG5cbiAgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG4gIGlmIChidWYpIHtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgMTY7ICsraWkpIHtcbiAgICAgIGJ1ZltpICsgaWldID0gcm5kc1tpaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCBieXRlc1RvVXVpZChybmRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2NDtcbiIsImltcG9ydCBDbGllbnQgZnJvbSAnLi9wcmVmYWJzL2NsaWVudCc7XG5pbXBvcnQgQm9vdCBmcm9tICcuL3N0YXRlcy9ib290JztcbmltcG9ydCBHYW1lIGZyb20gJy4vc3RhdGVzL2dhbWUnO1xuaW1wb3J0IFNldHVwIGZyb20gJy4vc3RhdGVzL3NldHVwJztcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnLi9zdGF0ZXMvcHJlbG9hZGVyJztcbmltcG9ydCBHYW1lb3ZlciBmcm9tICcuL3N0YXRlcy9nYW1lb3Zlcic7XG5pbXBvcnQgU2VwdGlrb24gZnJvbSAnLi9wcmVmYWJzL3NlcHRpa29uJztcblxuaWYodHlwZW9mKFN0b3JhZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcHRVVUlEJykgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdXVpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXB0VVVJRCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHV1aWQgPSByZXF1aXJlKCd1dWlkL3Y0JykoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlcHRVVUlEJywgdXVpZCk7XG4gICAgfVxufSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKFwiTG9jYWwgU3RvcmFnZSBpcyByZXF1aXJlZCFcIik7XG59XG5cbi8vIGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCwgUGhhc2VyLkFVVE8sICdwaGFzZXItdGVzdC1nYW1lJyk7XG5jb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKFwiMTAwXCIsIFwiMTAwXCIsIFBoYXNlci5BVVRPKTtcbmdhbWUuc2VwdGlrb24gPSBuZXcgU2VwdGlrb24oZ2FtZSk7XG5nYW1lLmNsaWVudCA9IG5ldyBDbGllbnQoZ2FtZS5zZXB0aWtvbik7XG5cbmdhbWUuc3RhdGUuYWRkKCdib290JywgbmV3IEJvb3QoKSk7XG5nYW1lLnN0YXRlLmFkZCgnZ2FtZScsIG5ldyBHYW1lKCkpO1xuZ2FtZS5zdGF0ZS5hZGQoJ3NldHVwJywgbmV3IFNldHVwKCkpO1xuZ2FtZS5zdGF0ZS5hZGQoJ3ByZWxvYWRlcicsIG5ldyBQcmVsb2FkZXIoKSk7XG5nYW1lLnN0YXRlLmFkZCgnZ2FtZW92ZXInLCBuZXcgR2FtZW92ZXIoKSk7XG5cbmdhbWUuc3RhdGUuc3RhcnQoJ2Jvb3QnKTtcbiIsInZhciBnYW1lTW9kYWwgPSBnYW1lTW9kYWwgfHwge307XG5cblxuZ2FtZU1vZGFsID0gZnVuY3Rpb24gKGdhbWUpIHtcblxuXHR2YXIgX3RoaXMgPSB0aGlzO1xuXHRnYW1lLm1vZGFscyA9IHt9O1xuXG5cdC8qKlxuXHQgKiBbaGlkZU1vZGFsIGRlc2NyaXB0aW9uXVxuXHQgKiBAcGFyYW0gIHtbdHlwZV19IHR5cGUgW2Rlc2NyaXB0aW9uXVxuXHQgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgW2Rlc2NyaXB0aW9uXVxuXHQgKi9cblx0dGhpcy5oaWRlTW9kYWwgPSBmdW5jdGlvbiAodHlwZSkge1xuXHRcdHdpbmRvdy5jb25zb2xlLmxvZyh0eXBlKTtcblx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gZmFsc2U7XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRjcmVhdGVNb2RhbDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0XHRcdHZhciB0eXBlID0gb3B0aW9ucy50eXBlIHx8ICcnOyAvLyBtdXN0IGJlIHVuaXF1ZVxuXHRcdFx0dmFyIGluY2x1ZGVCYWNrZ3JvdW5kID0gb3B0aW9ucy5pbmNsdWRlQmFja2dyb3VuZDsgLy8gbWF5YmUgbm90IG9wdGlvbmFsXG5cdFx0XHR2YXIgYmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgfHwgXCIweDAwMDAwMFwiO1xuXHRcdFx0dmFyIGJhY2tncm91bmRPcGFjaXR5ID0gb3B0aW9ucy5iYWNrZ3JvdW5kT3BhY2l0eSA9PT0gdW5kZWZpbmVkID9cblx0XHRcdFx0MC43IDogb3B0aW9ucy5iYWNrZ3JvdW5kT3BhY2l0eTtcblx0XHRcdHZhciBtb2RhbENsb3NlT25JbnB1dCA9IG9wdGlvbnMubW9kYWxDbG9zZU9uSW5wdXQgfHwgZmFsc2U7XG5cdFx0XHR2YXIgbW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2sgPSBvcHRpb25zLm1vZGFsQmFja2dyb3VuZENhbGxiYWNrIHx8IGZhbHNlO1xuXHRcdFx0dmFyIHZDZW50ZXIgPSBvcHRpb25zLnZDZW50ZXIgfHwgdHJ1ZTtcblx0XHRcdHZhciBoQ2VudGVyID0gb3B0aW9ucy5oQ2VudGVyIHx8IHRydWU7XG5cdFx0XHR2YXIgaXRlbXNBcnIgPSBvcHRpb25zLml0ZW1zQXJyIHx8IFtdO1xuXHRcdFx0dmFyIGZpeGVkVG9DYW1lcmEgPSBvcHRpb25zLmZpeGVkVG9DYW1lcmEgfHwgZmFsc2U7XG5cblx0XHRcdHZhciBtb2RhbDtcblx0XHRcdHZhciBpbm5lck1vZGFsO1xuXHRcdFx0dmFyIG1vZGFsR3JvdXAgPSBnYW1lLmFkZC5ncm91cCgpO1xuXHRcdFx0aWYgKGZpeGVkVG9DYW1lcmEgPT09IHRydWUpIHtcblx0XHRcdFx0bW9kYWxHcm91cC5maXhlZFRvQ2FtZXJhID0gdHJ1ZTtcblx0XHRcdFx0bW9kYWxHcm91cC5jYW1lcmFPZmZzZXQueCA9IDA7XG5cdFx0XHRcdG1vZGFsR3JvdXAuY2FtZXJhT2Zmc2V0LnkgPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaW5jbHVkZUJhY2tncm91bmQgPT09IHRydWUpIHtcblx0XHRcdFx0bW9kYWwgPSBnYW1lLmFkZC5ncmFwaGljcyhnYW1lLndpZHRoLCBnYW1lLmhlaWdodCk7XG5cdFx0XHRcdG1vZGFsLmJlZ2luRmlsbChiYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRPcGFjaXR5KTtcblx0XHRcdFx0bW9kYWwueCA9IDA7XG5cdFx0XHRcdG1vZGFsLnkgPSAwO1xuXG5cdFx0XHRcdG1vZGFsLmRyYXdSZWN0KDAsIDAsIGdhbWUud2lkdGgsIGdhbWUuaGVpZ2h0KTtcblxuXHRcdFx0XHRpZiAobW9kYWxDbG9zZU9uSW5wdXQgPT09IHRydWUpIHtcblxuXHRcdFx0XHRcdGlubmVyTW9kYWwgPSBnYW1lLmFkZC5zcHJpdGUoMCwgMCk7XG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRcdGlubmVyTW9kYWwud2lkdGggPSBnYW1lLndpZHRoO1xuXHRcdFx0XHRcdGlubmVyTW9kYWwuaGVpZ2h0ID0gZ2FtZS5oZWlnaHQ7XG5cdFx0XHRcdFx0aW5uZXJNb2RhbC50eXBlID0gdHlwZTtcblx0XHRcdFx0XHRpbm5lck1vZGFsLmlucHV0LnByaW9yaXR5SUQgPSAwO1xuXHRcdFx0XHRcdGlubmVyTW9kYWwuZXZlbnRzLm9uSW5wdXREb3duLmFkZChmdW5jdGlvbiAoZSwgcG9pbnRlcikge1xuXHRcdFx0XHRcdFx0dGhpcy5oaWRlTW9kYWwoZS50eXBlKTtcblx0XHRcdFx0XHR9LCBfdGhpcywgMik7XG5cblx0XHRcdFx0XHRtb2RhbEdyb3VwLmFkZChpbm5lck1vZGFsKTtcblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdG1vZGFsQmFja2dyb3VuZENhbGxiYWNrID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAobW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2spIHtcblx0XHRcdFx0aW5uZXJNb2RhbCA9IGdhbWUuYWRkLnNwcml0ZSgwLCAwKTtcblx0XHRcdFx0aW5uZXJNb2RhbC5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRpbm5lck1vZGFsLndpZHRoID0gZ2FtZS53aWR0aDtcblx0XHRcdFx0aW5uZXJNb2RhbC5oZWlnaHQgPSBnYW1lLmhlaWdodDtcblx0XHRcdFx0aW5uZXJNb2RhbC50eXBlID0gdHlwZTtcblx0XHRcdFx0aW5uZXJNb2RhbC5pbnB1dC5wcmlvcml0eUlEID0gMDtcblxuXHRcdFx0XHRtb2RhbEdyb3VwLmFkZChpbm5lck1vZGFsKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGluY2x1ZGVCYWNrZ3JvdW5kKSB7XG5cdFx0XHRcdG1vZGFsR3JvdXAuYWRkKG1vZGFsKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIG1vZGFsTGFiZWw7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zQXJyLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdHZhciBpdGVtID0gaXRlbXNBcnJbaV07XG5cdFx0XHRcdHZhciBpdGVtVHlwZSA9IGl0ZW0udHlwZSB8fCAndGV4dCc7XG5cdFx0XHRcdHZhciBpdGVtQ29sb3IgPSBpdGVtLmNvbG9yIHx8IDB4MDAwMDAwO1xuXHRcdFx0XHR2YXIgaXRlbUZvbnRmYW1pbHkgPSBpdGVtLmZvbnRGYW1pbHkgfHwgJ0FyaWFsJztcblx0XHRcdFx0dmFyIGl0ZW1Gb250U2l6ZSA9IGl0ZW0uZm9udFNpemUgfHwgMzI7XG5cdFx0XHRcdHZhciBpdGVtU3Ryb2tlID0gaXRlbS5zdHJva2UgfHwgJzB4MDAwMDAwJztcblx0XHRcdFx0dmFyIGl0ZW1TdHJva2VUaGlja25lc3MgPSBpdGVtLnN0cm9rZVRoaWNrbmVzcyB8fCAwO1xuXHRcdFx0XHR2YXIgaXRlbUFsaWduID0gaXRlbS5hbGlnbiB8fCAnY2VudGVyJztcblx0XHRcdFx0dmFyIG9mZnNldFggPSBpdGVtLm9mZnNldFggfHwgMDtcblx0XHRcdFx0dmFyIG9mZnNldFkgPSBpdGVtLm9mZnNldFkgfHwgMDtcblx0XHRcdFx0dmFyIGNvbnRlbnRTY2FsZSA9IGl0ZW0uY29udGVudFNjYWxlIHx8IDE7XG5cdFx0XHRcdHZhciBjb250ZW50ID0gaXRlbS5jb250ZW50IHx8IFwiXCI7XG5cdFx0XHRcdHZhciBjZW50ZXJYID0gZ2FtZS53aWR0aCAvIDI7XG5cdFx0XHRcdHZhciBjZW50ZXJZID0gZ2FtZS5oZWlnaHQgLyAyO1xuXHRcdFx0XHR2YXIgY2FsbGJhY2sgPSBpdGVtLmNhbGxiYWNrIHx8IGZhbHNlO1xuXHRcdFx0XHR2YXIgdGV4dEFsaWduID0gaXRlbS50ZXh0QWxpZ24gfHwgXCJsZWZ0XCI7XG5cdFx0XHRcdHZhciBhdGxhc1BhcmVudCA9IGl0ZW0uYXRsYXNQYXJlbnQgfHwgXCJcIjtcblx0XHRcdFx0dmFyIGJ1dHRvbkhvdmVyID0gaXRlbS5idXR0b25Ib3ZlciB8fCBjb250ZW50O1xuXHRcdFx0XHR2YXIgYnV0dG9uQWN0aXZlID0gaXRlbS5idXR0b25BY3RpdmUgfHwgY29udGVudDtcblx0XHRcdFx0dmFyIGdyYXBoaWNDb2xvciA9IGl0ZW0uZ3JhcGhpY0NvbG9yIHx8IDB4ZmZmZmZmO1xuXHRcdFx0XHR2YXIgZ3JhcGhpY09wYWNpdHkgPSBpdGVtLmdyYXBoaWNPcGFjaXR5IHx8IDE7XG5cdFx0XHRcdHZhciBncmFwaGljVyA9IGl0ZW0uZ3JhcGhpY1dpZHRoIHx8IDIwMDtcblx0XHRcdFx0dmFyIGdyYXBoaWNIID0gaXRlbS5ncmFwaGljSGVpZ2h0IHx8IDIwMDtcblx0XHRcdFx0dmFyIGdyYXBoaWNSYWRpdXMgPSBpdGVtLmdyYXBoaWNSYWRpdXMgfHwgMDtcblx0XHRcdFx0dmFyIGxvY2tQb3NpdGlvbiA9IGl0ZW0ubG9ja1Bvc2l0aW9uIHx8IGZhbHNlO1xuXG5cdFx0XHRcdHZhciBpdGVtQW5jaG9yID0gaXRlbS5hbmNob3IgfHwge3g6MCx5OjB9O1xuXHRcdFx0XHR2YXIgaXRlbUFuZ2xlID0gaXRlbS5hbmdsZSB8fCAwO1xuXHRcdFx0XHR2YXIgaXRlbVggPSBpdGVtLnggfHwgMDtcblx0XHRcdFx0dmFyIGl0ZW1ZID0gaXRlbS55IHx8IDA7XG5cdFx0XHRcdHZhciBpbWFnZUZyYW1lID0gaXRlbS5mcmFtZSB8fCBudWxsO1xuXHRcdFx0XHR2YXIgdGlsZVNwcml0ZVdpZHRoID0gaXRlbS50aWxlU3ByaXRlV2lkdGggfHwgZ2FtZS53aWR0aDtcblx0XHRcdFx0dmFyIHRpbGVTcHJpdGVIZWlnaHQgPSBpdGVtLnRpbGVTcHJpdGVIZWlnaHQgfHwgZ2FtZS5oZWlnaHQ7XG5cblx0XHRcdFx0bW9kYWxMYWJlbCA9IG51bGw7XG5cblx0XHRcdFx0aWYgKGl0ZW1UeXBlID09PSBcInRleHRcIiB8fCBpdGVtVHlwZSA9PT0gXCJiaXRtYXBUZXh0XCIpIHtcblxuXHRcdFx0XHRcdGlmIChpdGVtVHlwZSA9PT0gXCJ0ZXh0XCIpIHtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC50ZXh0KDAsIDAsIGNvbnRlbnQsIHtcblx0XHRcdFx0XHRcdFx0Zm9udDogaXRlbUZvbnRTaXplICsgJ3B4ICcgKyBpdGVtRm9udGZhbWlseSxcblx0XHRcdFx0XHRcdFx0ZmlsbDogXCIjXCIgKyBTdHJpbmcoaXRlbUNvbG9yKS5yZXBsYWNlKFwiMHhcIiwgXCJcIiksXG5cdFx0XHRcdFx0XHRcdHN0cm9rZTogXCIjXCIgKyBTdHJpbmcoaXRlbVN0cm9rZSkucmVwbGFjZShcIjB4XCIsIFwiXCIpLFxuXHRcdFx0XHRcdFx0XHRzdHJva2VUaGlja25lc3M6IGl0ZW1TdHJva2VUaGlja25lc3MsXG5cdFx0XHRcdFx0XHRcdGFsaWduOiBpdGVtQWxpZ25cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICd0ZXh0Jztcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwudXBkYXRlKCk7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoKGdhbWUud2lkdGggLyAyKSAtIChtb2RhbExhYmVsLndpZHRoIC8gMikpICsgb2Zmc2V0WDtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9ICgoZ2FtZS5oZWlnaHQgLyAyKSAtIChtb2RhbExhYmVsLmhlaWdodCAvIDIpKSArIG9mZnNldFk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5iaXRtYXBUZXh0KDAsIDAsIGl0ZW1Gb250ZmFtaWx5LCBTdHJpbmcoY29udGVudCksIGl0ZW1Gb250U2l6ZSk7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ2JpdG1hcFRleHQnO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5hbGlnbiA9IHRleHRBbGlnbjtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwudXBkYXRlVGV4dCgpO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAobW9kYWxMYWJlbC53aWR0aCAvIDIpKSArIG9mZnNldFg7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtIChtb2RhbExhYmVsLmhlaWdodCAvIDIpKSArIG9mZnNldFk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiaW1hZ2VcIikge1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5pbWFnZSgwLCAwLCBjb250ZW50KTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnNjYWxlLnNldFRvKGNvbnRlbnRTY2FsZSwgY29udGVudFNjYWxlKTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ2ltYWdlJztcblx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtICgobW9kYWxMYWJlbC53aWR0aCkgLyAyKSkgKyBvZmZzZXRYO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKChtb2RhbExhYmVsLmhlaWdodCkgLyAyKSkgKyBvZmZzZXRZO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcInRpbGVTcHJpdGVcIikge1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC50aWxlU3ByaXRlKGl0ZW1YLCBpdGVtWSxcblx0XHRcdFx0XHRcdHRpbGVTcHJpdGVXaWR0aCwgdGlsZVNwcml0ZUhlaWdodCwgY29udGVudCwgaW1hZ2VGcmFtZSk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5hbmNob3Iuc2V0VG8oaXRlbUFuY2hvci54LCBpdGVtQW5jaG9yLnkpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYW5nbGUgPSBpdGVtQW5nbGU7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICd0aWxlU3ByaXRlJztcblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJzcHJpdGVcIikge1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5zcHJpdGUoMCwgMCwgYXRsYXNQYXJlbnQsIGNvbnRlbnQpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnc3ByaXRlJztcblx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtICgobW9kYWxMYWJlbC53aWR0aCkgLyAyKSkgKyBvZmZzZXRYO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKChtb2RhbExhYmVsLmhlaWdodCkgLyAyKSkgKyBvZmZzZXRZO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcImJ1dHRvblwiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmJ1dHRvbigwLCAwLCBhdGxhc1BhcmVudCwgY2FsbGJhY2ssXG5cdFx0XHRcdFx0XHR0aGlzLCBidXR0b25Ib3ZlciwgY29udGVudCwgYnV0dG9uQWN0aXZlLCBjb250ZW50KTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnNjYWxlLnNldFRvKGNvbnRlbnRTY2FsZSwgY29udGVudFNjYWxlKTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ2J1dHRvbic7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcblxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcImdyYXBoaWNzXCIpIHtcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuZ3JhcGhpY3MoZ3JhcGhpY1csIGdyYXBoaWNIKTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmJlZ2luRmlsbChncmFwaGljQ29sb3IsIGdyYXBoaWNPcGFjaXR5KTtcblx0XHRcdFx0XHRpZiAoZ3JhcGhpY1JhZGl1cyA8PSAwKSB7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmRyYXdSZWN0KDAsIDAsIGdyYXBoaWNXLCBncmFwaGljSCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuZHJhd1JvdW5kZWRSZWN0KDAsIDAsIGdyYXBoaWNXLCBncmFwaGljSCwgZ3JhcGhpY1JhZGl1cyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG1vZGFsTGFiZWwuZW5kRmlsbCgpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRtb2RhbExhYmVsLl9vZmZzZXRYID0gMDtcblx0XHRcdFx0bW9kYWxMYWJlbC5fb2Zmc2V0WSA9IDA7XG5cdFx0XHRcdG1vZGFsTGFiZWwubG9ja1Bvc2l0aW9uID0gbG9ja1Bvc2l0aW9uO1xuXHRcdFx0XHRtb2RhbExhYmVsLl9vZmZzZXRYID0gb2Zmc2V0WDtcblx0XHRcdFx0bW9kYWxMYWJlbC5fb2Zmc2V0WSA9IG9mZnNldFk7XG5cblxuXHRcdFx0XHRpZiAoY2FsbGJhY2sgIT09IGZhbHNlICYmIGl0ZW1UeXBlICE9PSBcImJ1dHRvblwiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwucGl4ZWxQZXJmZWN0Q2xpY2sgPSB0cnVlO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwucHJpb3JpdHlJRCA9IDEwO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuZXZlbnRzLm9uSW5wdXREb3duLmFkZChjYWxsYmFjaywgbW9kYWxMYWJlbCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaXRlbVR5cGUgIT09IFwiYml0bWFwVGV4dFwiICYmIGl0ZW1UeXBlICE9PSBcImdyYXBoaWNzXCIpIHtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmJyaW5nVG9Ub3AoKTtcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmFkZChtb2RhbExhYmVsKTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmJyaW5nVG9Ub3AoKTtcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmJyaW5nVG9Ub3AobW9kYWxMYWJlbCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bW9kYWxHcm91cC5hZGQobW9kYWxMYWJlbCk7XG5cdFx0XHRcdFx0bW9kYWxHcm91cC5icmluZ1RvVG9wKG1vZGFsTGFiZWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG1vZGFsR3JvdXAudmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0gPSBtb2RhbEdyb3VwO1xuXG5cdFx0fSxcblx0XHR1cGRhdGVNb2RhbFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIHR5cGUsIGluZGV4LCBpZCkge1xuXHRcdFx0dmFyIGl0ZW07XG5cdFx0XHRpZiAoaW5kZXggIT09IHVuZGVmaW5lZCAmJiBpbmRleCAhPT0gbnVsbCkge1xuXHRcdFx0XHRpdGVtID0gZ2FtZS5tb2RhbHNbdHlwZV0uZ2V0Q2hpbGRBdChpbmRleCk7XG5cdFx0XHR9IGVsc2UgaWYgKGlkICE9PSB1bmRlZmluZWQgJiYgaWQgIT09IG51bGwpIHtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXRlbS5jb250ZW50VHlwZSA9PT0gXCJ0ZXh0XCIpIHtcblx0XHRcdFx0aXRlbS50ZXh0ID0gdmFsdWU7XG5cdFx0XHRcdGl0ZW0udXBkYXRlKCk7XG5cdFx0XHRcdGlmIChpdGVtLmxvY2tQb3NpdGlvbiA9PT0gdHJ1ZSkge1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aXRlbS54ID0gKChnYW1lLndpZHRoIC8gMikgLSAoaXRlbS53aWR0aCAvIDIpKSArIGl0ZW0uX29mZnNldFg7XG5cdFx0XHRcdFx0aXRlbS55ID0gKChnYW1lLmhlaWdodCAvIDIpIC0gKGl0ZW0uaGVpZ2h0IC8gMikpICsgaXRlbS5fb2Zmc2V0WTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChpdGVtLmNvbnRlbnRUeXBlID09PSBcImJpdG1hcFRleHRcIikge1xuXHRcdFx0XHRpdGVtLnRleHQgPSB2YWx1ZTtcblx0XHRcdFx0aXRlbS51cGRhdGVUZXh0KCk7XG5cdFx0XHRcdGlmIChpdGVtLmxvY2tQb3NpdGlvbiA9PT0gdHJ1ZSkge1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aXRlbS54ID0gKChnYW1lLndpZHRoIC8gMikgLSAoaXRlbS53aWR0aCAvIDIpKSArIGl0ZW0uX29mZnNldFg7XG5cdFx0XHRcdFx0aXRlbS55ID0gKChnYW1lLmhlaWdodCAvIDIpIC0gKGl0ZW0uaGVpZ2h0IC8gMikpICsgaXRlbS5fb2Zmc2V0WTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChpdGVtLmNvbnRlbnRUeXBlID09PSBcImltYWdlXCIpIHtcblx0XHRcdFx0aXRlbS5sb2FkVGV4dHVyZSh2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHR9LFxuXHRcdGdldE1vZGFsSXRlbTogZnVuY3Rpb24gKHR5cGUsIGluZGV4KSB7XG5cdFx0XHRyZXR1cm4gZ2FtZS5tb2RhbHNbdHlwZV0uZ2V0Q2hpbGRBdChpbmRleCk7XG5cdFx0fSxcblx0XHRzaG93TW9kYWw6IGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0XHRnYW1lLndvcmxkLmJyaW5nVG9Ub3AoZ2FtZS5tb2RhbHNbdHlwZV0pO1xuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0udmlzaWJsZSA9IHRydWU7XG5cdFx0XHQvLyB5b3UgY2FuIGFkZCBhbmltYXRpb24gaGVyZVxuXHRcdH0sXG5cdFx0aGlkZU1vZGFsOiBmdW5jdGlvbiAodHlwZSkge1xuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0udmlzaWJsZSA9IGZhbHNlO1xuXHRcdFx0Ly8geW91IGNhbiBhZGQgYW5pbWF0aW9uIGhlcmVcblx0XHR9LFxuXHRcdGRlc3Ryb3lNb2RhbDogZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRcdGdhbWUubW9kYWxzW3R5cGVdLmRlc3Ryb3koKTtcblx0XHRcdGRlbGV0ZSBnYW1lLm1vZGFsc1t0eXBlXTtcblx0XHR9XG5cdH07XG59O1xuIiwiXG5jbGFzcyBDbGllbnQge1xuICAgIFxuXHRjb25zdHJ1Y3RvcihzZXB0aWtvbikge1xuICAgICAgICBcblx0XHR0aGlzLnNvY2tldCA9IGlvLmNvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5zZXB0aWtvbiA9IHRoaXMuc29ja2V0LnNlcHRpa29uID0gc2VwdGlrb247XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNvY2tldC5vbignbG9nJywgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTE9HOiAnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNvY2tldC5vbigndXBkYXRlJywgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBpZihkYXRhLnR5cGUgPT0gXCJwZXJzb25uZWxcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24udXBkYXRlUGVyc29ubmVsKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZGF0YS50eXBlID09IFwicmVzb3VyY2VzXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3Rpb24gPT0gXCJpbml0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi5pbml0UmVzb3VyY2VzKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihkYXRhLmFjdGlvbiArIFwiIG5vdCBhIGxlZ2FsIGFjdGlvbiBmb3IgUmVzb3VyY2UgdXBkYXRlLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09IFwiZGljZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi5nYW1lLmRpY2Uuc2V0VmFsdWUoZGF0YS5kZXRhaWxzLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVUERBVEU6Jyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLnR5cGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNvY2tldC5vbigncmVxdWVzdCcsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JFUVVFU1Q6ICcpO1xuICAgICAgICAgICAgc3dpdGNoKGRhdGEuZGV0YWlscy50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImFza1N0YXJ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24uc2hvd01vZGFsKCdhc2tTdGFydCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNvY2tldC5vbignYWN0aW9uJywgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFDVElPTjogXCIpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZih0aGlzLnNlcHRpa29uW2RhdGEuY2FsbGJhY2tdKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbltkYXRhLmNhbGxiYWNrXShkYXRhLmRldGFpbHMpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SOiBubyBtZXRob2QgZm91bmQgY2FsbGVkIHNlcHRpa29uLlwiICsgZGF0YS5jYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXHR9XG5cblx0YXNrTmV3UGxheWVyKCkge1xuXHRcdHRoaXMuc29ja2V0LmVtaXQoJ25ld1BsYXllcicsIHt1dWlkOmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXB0VVVJRCcpfSk7XG5cdH1cbiAgICBcbiAgICBzZW5kSW5wdXQocGF5bG9hZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2VuZGluZyBpbnB1dCcpO1xuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdpbnB1dCcsIHBheWxvYWQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50O1xuIiwiLy9Eb2N1bWVudGF0aW9uIGZvciBQaGFzZXIncyAoMi42LjIpIHNwcml0ZXM6OiBwaGFzZXIuaW8vZG9jcy8yLjYuMi9QaGFzZXIuU3ByaXRlLmh0bWxcblxuY2xhc3MgQ2xvbmUgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lLCB1dWlkKSB7XG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2Nsb25lJywgZnJhbWUpO1xuICAgICAgICBcbiAgICAvL3NldHVwIHBoeXNpY3MgcHJvcGVydGllc1xuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC42NSk7XG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZUJvZHkodGhpcyk7XG4gICAgLy90aGlzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcblxuICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgLy9zZXQgc2l6ZVxuICAgIHRoaXMud2lkdGggPSAyNztcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xuICAgIFxuICAgIC8vc2V0IHJvdGF0aW9uICh0aGlzIHNob3VsZCBiZSBiYXNlZCBvbiB0aGUgYmFzZSB0aGlzIGNsb25lIG9jY3VwaWVzKVxuICAgIHRoaXMuYW5nbGUgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSAqIC0xO1xuXG4gICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gdGhpcy5nYW1lLnNlcHRpa29uLnBpeGVsc1RvVGlsZSh0aGlzLngsIHRoaXMueSk7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XG5cbiAgfVxuICBcbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxuXG4gIGhpZ2hsaWdodE9uKCkge1xuICAgIHRoaXMudGludCA9IDB4RkY1NTAwO1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS5hbHBoYSA9IDE7XG4gIH1cbiAgXG4gIGhpZ2hsaWdodE9mZigpIHtcbiAgICB0aGlzLnRpbnQgPSAweGZmZmZmZjtcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0uYWxwaGEgPSAwO1xuICB9XG4gIFxuICBnZXRMZWdhbE1vdmVzKCkge1xuICAgIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5waXhlbHNUb1RpbGUodGhpcy54LCB0aGlzLnkpO1xuICAgIHZhciBjdXJyZW50TGVnYWxNb3ZlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5nZXRMZWdhbE1vdmVzKHRoaXMuZ2FtZS5nbG9iYWwubGFzdERpY2VSb2xsLCB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMpO1xuICAgIHZhciBsZWdhbFRpbGVzQXJyYXkgPSBbXTtcbiAgICBcbiAgICBcbiAgICBmb3IgKHZhciB0aWxlIGluIGN1cnJlbnRMZWdhbE1vdmVzKSB7XG4gICAgICAgIGxlZ2FsVGlsZXNBcnJheS5wdXNoKHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbY3VycmVudExlZ2FsTW92ZXNbdGlsZV0ueF1bY3VycmVudExlZ2FsTW92ZXNbdGlsZV0ueV0pO1xuICAgICAgICAvL2xlZ2FsVGlsZXNBcnJheVtsZWdhbFRpbGVzQXJyYXkubGVuZ3RoLTFdLmFscGhhID0gMC41O1xuICAgICAgICAvL2xlZ2FsVGlsZXNBcnJheVtsZWdhbFRpbGVzQXJyYXkubGVuZ3RoLTFdLmxlZ2FsRm9yID0gdGhpcztcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGxlZ2FsVGlsZXNBcnJheTtcbiAgfVxuICBcbiAgbW92ZShjb29yZGluYXRlcykge1xuICBcbiAgICAvLyBDbGVhciBcImxlZ2FsRm9yXCJcbiAgICBmb3IgKHZhciB0aWxlIGluIHRoaXMubGVnYWxUaWxlc0FycmF5KSB7XG4gICAgICAgIHRoaXMubGVnYWxUaWxlc0FycmF5W3RpbGVdLmFscGhhID0gMDtcbiAgICAgICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlc0FycmF5W3RpbGVdLmxlZ2FsRm9yO1xuICAgIH1cbiAgICBcbiAgICAvLyBNb3ZlIHRvIG5ldyBob21lXG4gICAgLy8gTmVlZCB0byBhZGQgYSBjaGVjayBmb3IgYXJtZWQgb3Bwb25lbnRzIChiaW9kcm9uZXMvZXNwaW9uYWdlZCBjbG9uZXMvY2xvbmVzIGluIGVuZW15IGJhc2UsIGV0Yy4pXG4gICAgdmFyIHBvaW50cyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlVG9QaXhlbHMoY29vcmRpbmF0ZXMueCwgY29vcmRpbmF0ZXMueSk7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IGZhbHNlO1xuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMueSAtIHBvaW50cy55ICsgdGhpcy54IC0gcG9pbnRzLngpLnRvRml4ZWQoMSk7XG4gICAgXG4gICAgLy8gVXBkYXRlIHRoZSBwZXJzb25uZWwgY29vcmRpbmF0ZSBwcm9wZXJ0eVxuICAgIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSB0cnVlO1xuICAgIFxuICAgIC8vIFdhaXQgZm9yIGFuaW1hdGlvbiB0byBjb21wbGV0ZSwgdGhlbiBwcm9jZXNzIHRpbGUgdHJpZ2dlclxuICAgIHZhciB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcykudG8oIHt4OnBvaW50cy54LCB5OnBvaW50cy55fSwgKGRpc3RhbmNlKjExKSwgUGhhc2VyLkVhc2luZy5DdWJpYy5PdXQsIHRydWUpO1xuICAgIHR3ZWVuLm9uQ29tcGxldGUuYWRkKHRoaXMuZ2FtZS5zZXB0aWtvbi50cmlnZ2VyVGlsZSwgdGhpcy5nYW1lLnNlcHRpa29uKTtcbiAgICBcbiAgICAvLyBDbGVhciB0aGlzLmN1cnJlbnRMZWdhbE1vdmVzXG4gICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlc0FycmF5O1xuICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRMZWdhbE1vdmVzOyAgICBcbiAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBDbG9uZTtcbiIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXG5jbGFzcyBDcm9zc2hhaXJzIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSkge1xuICAgIHN1cGVyKGdhbWUsIHgsIHksICdjcm9zc2hhaXJzJywgZnJhbWUpO1xuXG4gICAgLy9zZXQgc2l6ZVxuICAgIHRoaXMud2lkdGggPSAzNTsgXG4gICAgdGhpcy5zY2FsZS55ID0gTWF0aC5hYnModGhpcy5zY2FsZS54KTtcblxuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgfVxuXG4gIHVwZGF0ZSgpe1xuICAgIHRoaXMueCA9IHRoaXMuZ2FtZS5pbnB1dC5tb3VzZVBvaW50ZXIueDtcbiAgICB0aGlzLnkgPSB0aGlzLmdhbWUuaW5wdXQubW91c2VQb2ludGVyLnk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDcm9zc2hhaXJzO1xuIiwiLy9Eb2N1bWVudGF0aW9uIGZvciBQaGFzZXIncyAoMi42LjIpIHNwcml0ZXM6OiBwaGFzZXIuaW8vZG9jcy8yLjYuMi9QaGFzZXIuU3ByaXRlLmh0bWxcbmNsYXNzIERpY2UgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7ICBcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnZGljZScsIGZyYW1lKTtcblxuICAgIC8vc2V0dXAgcGh5c2ljcyBwcm9wZXJ0aWVzXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGVCb2R5KHRoaXMpO1xuXG4gICAgLy9zZXQgY2xpY2sgZXZlbnRcbiAgICB0aGlzLmlucHV0RW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZXZlbnRzLm9uSW5wdXREb3duLmFkZCh0aGlzLmNsaWNrZWQsIHRoaXMpO1xuXG4gICAgLy9zZXQgc2l6ZVxuICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xuICAgIHRoaXMuZmlsdGVycyA9IFt0aGlzLmdhbWUuYWRkLmZpbHRlcignR3JheScpXTtcbiAgICB0aGlzLmFscGhhID0gMC41O1xuICAgIFxuICAgIHRoaXMudmFsdWUgPSAxMDtcbiAgICB0aGlzLmZyYW1lID0gdGhpcy52YWx1ZS0xO1xuICB9XG5cbiAgY2xpY2tlZCAoKSB7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAnZGljZUNsaWNrZWQnfSk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgICB0aGlzLmFscGhhID0gMTtcbiAgICAgIHRoaXMuZmlsdGVycyA9IG51bGw7XG4gICAgICB0aGlzLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgICAgdGhpcy5hbHBoYSA9IDAuNTtcbiAgICAgIHRoaXMuZmlsdGVycyA9IFt0aGlzLmdhbWUuYWRkLmZpbHRlcignR3JheScpXTtcbiAgICAgIHRoaXMuaW5wdXRFbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmZyYW1lID0gdmFsdWUgLSAxO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpY2U7XG4iLCJjbGFzcyBNYXN0ZXIge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoKSB7IFxuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXN0ZXI7IiwiY2xhc3MgT3JkbmFuY2UgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lLCB0eXBlLCB1dWlkKSB7XG4gICAgdmFyIG9yZEZyYW1lO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcInNoaWVsZFwiOlxuICAgICAgICBvcmRGcmFtZSA9IDQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImJpb2Ryb25lXCI6XG4gICAgICAgIG9yZEZyYW1lID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2F0ZWxsaXRlXCI6XG4gICAgICAgIG9yZEZyYW1lID0gNTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicm9ja2V0XCI6XG4gICAgICAgIG9yZEZyYW1lID0gMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQmFkIG9yZG5hbmNlIHR5cGVcIik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnb3JkbmFuY2UnLCBvcmRGcmFtZSk7XG4gICAgICAgIFxuICAgIC8vc2V0dXAgcGh5c2ljcyBwcm9wZXJ0aWVzXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGVCb2R5KHRoaXMpO1xuICAgIC8vdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG5cbiAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgLy9zZXQgc2l6ZVxuICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xuICAgIFxuICAgIC8vc2V0IHJvdGF0aW9uICh0aGlzIHNob3VsZCBiZSBiYXNlZCBvbiB0aGUgYmFzZSB0aGlzIGNsb25lIG9jY3VwaWVzKVxuICAgIHRoaXMuYW5nbGUgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSAqIC0xO1xuXG4gICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gdGhpcy5nYW1lLnNlcHRpa29uLnBpeGVsc1RvVGlsZSh0aGlzLngsIHRoaXMueSk7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XG5cbiAgfVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkbmFuY2U7IiwiY2xhc3MgUGVyc29ubmVsIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7XG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksICdjbG9uZScsIGZyYW1lKTsgIFxuICAgIH1cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlcnNvbm5lbDsiLCJjbGFzcyBSZXNvdXJjZXMge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoKSB7IFxuICAgIHRoaXMucmVzb3VyY2VFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIE9YWUdFTjogMCxcbiAgICAgICAgUk9DS0VUOiAxLFxuICAgICAgICBNRVRBTDogMixcbiAgICAgICAgRU5FUkdZOiAzLFxuICAgICAgICBCSU9NQVNTOiA0LFxuICAgICAgICBCSU9EUk9ORTogNSxcbiAgICAgICAgVVJBTklVTTogNlxuICAgIH0pO1xuICAgIHRoaXMucmVzb3VyY2VzID0ge307XG4gICAgZm9yKHZhciB0eXBlIGluIHRoaXMucmVzb3VyY2VFbnVtKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzW3RoaXMucmVzb3VyY2VFbnVtW3R5cGVdXSA9IDU7XG4gICAgfVxuICB9XG4gIFxuICBjaGVjayh0eXBlLCBjb3VudCkge1xuICAgIGlmKHRoaXMucmVzb3VyY2VzW3RoaXMucmVzb3VyY2VFbnVtW3R5cGVdXSA+IGNvdW50KVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICBnZXRDb3VudCh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzW3R5cGVdO1xuICB9XG4gICAgXG4gIGFkZCh0eXBlLCBjb3VudCkge1xuICB9XG4gIFxuICByZW1vdmUodHlwZSwgY291bnQpIHtcbiAgICB0aGlzLnJlc291cmNlc1t0eXBlXSAtPSBjb3VudDtcbiAgfVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VzOyIsImltcG9ydCBDbG9uZSBmcm9tICcuLi9wcmVmYWJzL2Nsb25lJztcbmltcG9ydCBPcmRuYW5jZSBmcm9tICcuLi9wcmVmYWJzL29yZG5hbmNlJztcblxuY2xhc3MgU2VwdGlrb24ge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoZ2FtZSkgeyBcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIFxuICAgIHRoaXMucGxheWVyID0ge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgcGVyc29ubmVsQXJyYXk6IFtdLFxuICAgICAgICBvcmRuYW5jZUFycmF5OiBbXVxuICAgIH07XG5cbiAgICB0aGlzLm9wcG9uZW50ID0ge1xuICAgICAgICBwZXJzb25uZWxBcnJheTogW10sXG4gICAgICAgIG9yZG5hbmNlQXJyYXk6IFtdXG4gICAgfTtcbiAgICBcbiAgICB0aGlzLnNob3duVGlsZXMgPSBbXTtcbiAgICB0aGlzLnRpbGVBcnJheSA9IFtdO1xuXG4gICAgdGhpcy5sZWdhbE1vdmVzID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkVG9Nb3ZlID0gbnVsbDtcbiAgICB0aGlzLmxlZ2FsR3VubmVycyA9IG51bGw7XG5cbiAgICB0aGlzLmNob29zaW5nVGFyZ2V0cyA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzID0gW107XG4gIH1cblxuICBzaG93TW9kYWwodHlwZSkge1xuICAgIHRoaXMuZ2FtZS5tb2RhbC5zaG93TW9kYWwodHlwZSk7XG4gIH1cbiAgXG4gIGRpY2VSb2xsZWQoZGV0YWlscykge1xuICAgIHRoaXMuZ2FtZS5kaWNlLnNldFZhbHVlKGRldGFpbHMudmFsdWUpO1xuICAgIHRoaXMubGVnYWxNb3ZlcyA9IGRldGFpbHMuZ2FtZVBpZWNlcztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRldGFpbHMuZ2FtZVBpZWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKHZhciBtIGluIGRldGFpbHMuZ2FtZVBpZWNlc1tpXS5tb3Zlcykge1xuICAgICAgICAgICAgdmFyIHggPSBkZXRhaWxzLmdhbWVQaWVjZXNbaV0ubW92ZXNbbV0ueDtcbiAgICAgICAgICAgIHZhciB5ID0gZGV0YWlscy5nYW1lUGllY2VzW2ldLm1vdmVzW21dLnk7XG4gICAgICAgICAgICB0aGlzLnNob3dUaWxlcyhbZGV0YWlscy5nYW1lUGllY2VzW2ldLm9yaWdpbl0sIDB4RjYzNjM2KTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9mZmVyRGljZSgpIHtcbiAgICAgIHRoaXMuZ2FtZS5kaWNlLmVuYWJsZSgpO1xuICB9XG5cbiAgdGFrZURpY2UoKSB7XG4gICAgICB0aGlzLmdhbWUuZGljZS5kaXNhYmxlKCk7XG4gIH1cblxuICBvZmZlckd1bm5lcnMoZGF0YSkge1xuICAgICAgdGhpcy5jaG9vc2luZ1RhcmdldHMgPSB0cnVlO1xuICAgICAgdGhpcy5sZWdhbEd1bm5lcnMgPSBkYXRhLmd1bm5lcnM7XG4gICAgICB0aGlzLmdhbWUuZ28uZW5hYmxlKCk7XG4gICAgICBjb25zb2xlLmxvZyhcImFuaW1hdGUgc29tZSBpbmRpY2F0aW9uIG9mIHZpYWJsZSBndW5uZXJzIG9uIHRoZSBzdXJmYWNlLiBNYXliZSBhIHBvaW50ZXIgYm91bmNpbmcgb3ZlciB0aGVtP1wiKTtcbiAgfVxuICBcbiAgYWRkQ2xvbmUoZGV0YWlscykge1xuICAgIHZhciBwb2ludCA9IHRoaXMudGlsZVRvUGl4ZWxzKGRldGFpbHMueCwgZGV0YWlscy55KTtcbiAgICB2YXIgY2xvbmUgPSBuZXcgQ2xvbmUodGhpcy5nYW1lLCBwb2ludC54LCBwb2ludC55LCBudWxsLCBkZXRhaWxzLnV1aWQpO1xuICAgIGlmKGRldGFpbHMucGxheWVySUQgPT0gdGhpcy5wbGF5ZXIuaWQpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXkucHVzaChjbG9uZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheS5wdXNoKGNsb25lKTtcbiAgICB9XG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKGNsb25lKTtcbiAgfVxuXG4gIGFkZE9yZG5hbmNlKGRldGFpbHMpIHtcbiAgICB2YXIgcG9pbnQgPSB0aGlzLnRpbGVUb1BpeGVscyhkZXRhaWxzLnBvaW50LngsIGRldGFpbHMucG9pbnQueSk7XG4gICAgdmFyIG9yZCA9IG5ldyBPcmRuYW5jZSh0aGlzLmdhbWUsIHBvaW50LngsIHBvaW50LnksIG51bGwsIGRldGFpbHMudHlwZSwgZGV0YWlscy51dWlkKTtcbiAgICBpZihkZXRhaWxzLnBsYXllcklEID09IHRoaXMucGxheWVyLmlkKSB7XG4gICAgICAgIHRoaXMucGxheWVyLm9yZG5hbmNlQXJyYXkucHVzaChvcmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3Bwb25lbnQub3JkbmFuY2VBcnJheS5wdXNoKG9yZCk7XG4gICAgfVxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFkZChvcmQpO1xuICB9XG5cbiAgbW92ZVBlcnNvbm5lbChkYXRhKSB7XG4gICAgdmFyIHR3ZWVuID0gbnVsbDtcbiAgICB2YXIgZGlzdGFuY2UgPSBudWxsO1xuICAgIHZhciBwb2ludCA9IHRoaXMudGlsZVRvUGl4ZWxzKGRhdGEueCwgZGF0YS55KTtcbiAgICBmb3IgKHZhciBpIGluIHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5KSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtpXS51dWlkID09IGRhdGEudXVpZCkge1xuICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtpXS55IC0gcG9pbnQueSArIHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnggLSBwb2ludC54KS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldKS50bygge3g6cG9pbnQueCwgeTpwb2ludC55fSwgKGRpc3RhbmNlKjExKSwgUGhhc2VyLkVhc2luZy5DdWJpYy5PdXQsIHRydWUpO1xuICAgICAgICAgICAgLy8gVHJpZ2dlciB0aWxlLiBOb3QgcXVpdGUgc3VyZSBob3cgdG8gZG8gdGhpcyB5ZXQuXG4gICAgICAgICAgICAvL3R3ZWVuLm9uQ29tcGxldGUuYWRkKHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ21vdmVDb21wbGV0ZScsIHg6cGFyc2VJbnQob2JqLnRpbGVYKSwgeTpwYXJzZUludChvYmoudGlsZVkpfSk7LCB0aGlzLmdhbWUuc2VwdGlrb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGogaW4gdGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheSkge1xuICAgICAgICBpZiAodGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheVtqXS51dWlkID09IGRhdGEudXVpZCkge1xuICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5W2pdLnkgLSBwb2ludC55ICsgdGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheVtqXS54IC0gcG9pbnQueCkudG9GaXhlZCgxKTtcbiAgICAgICAgICAgIHR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5W2pdKS50bygge3g6cG9pbnQueCwgeTpwb2ludC55fSwgKGRpc3RhbmNlKjExKSwgUGhhc2VyLkVhc2luZy5DdWJpYy5PdXQsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW92ZU9yZG5hbmNlKGRhdGEpIHtcbiAgICB2YXIgdHdlZW4gPSBudWxsO1xuICAgIHZhciBkaXN0YW5jZSA9IG51bGw7XG4gICAgdmFyIHBvaW50ID0gbnVsbDtcbiAgICBmb3IgKHZhciBkYXRhSW5kZXggPSAwOyBkYXRhSW5kZXggPCBkYXRhLmxlbmd0aDsgZGF0YUluZGV4KyspIHtcbiAgICAgICAgcG9pbnQgPSB0aGlzLnRpbGVUb1BpeGVscyhkYXRhW2RhdGFJbmRleF0ueCwgZGF0YVtkYXRhSW5kZXhdLnkpO1xuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMucGxheWVyLm9yZG5hbmNlQXJyYXkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5vcmRuYW5jZUFycmF5W2ldLnV1aWQgPT0gZGF0YVtkYXRhSW5kZXhdLnV1aWQpIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMucGxheWVyLm9yZG5hbmNlQXJyYXlbaV0ueSAtIHBvaW50LnkgKyB0aGlzLnBsYXllci5vcmRuYW5jZUFycmF5W2ldLnggLSBwb2ludC54KS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgIHR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLnBsYXllci5vcmRuYW5jZUFycmF5W2ldKS50bygge3g6cG9pbnQueCwgeTpwb2ludC55fSwgKGRpc3RhbmNlKjExKSwgUGhhc2VyLkVhc2luZy5DdWJpYy5PdXQsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGogaW4gdGhpcy5vcHBvbmVudC5vcmRuYW5jZUFycmF5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHBvbmVudC5vcmRuYW5jZUFycmF5W2pdLnV1aWQgPT0gZGF0YVtkYXRhSW5kZXhdLnV1aWQpIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMub3Bwb25lbnQub3JkbmFuY2VBcnJheVtqXS55IC0gcG9pbnQueSArIHRoaXMub3Bwb25lbnQub3JkbmFuY2VBcnJheVtqXS54IC0gcG9pbnQueCkudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5vcHBvbmVudC5vcmRuYW5jZUFycmF5W2pdKS50bygge3g6cG9pbnQueCwgeTpwb2ludC55fSwgKGRpc3RhbmNlKjExKSwgUGhhc2VyLkVhc2luZy5DdWJpYy5PdXQsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUGVyc29ubmVsKGRhdGEpIHtcbiAgICAgIHZhciBjdXJyZW50UGVyc29ubmVsID0gbnVsbDtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuZGV0YWlscykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgZGF0YS5kZXRhaWxzID0gW2RhdGEuZGV0YWlsc107XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5Lmxlbmd0aCA9PT0gMCAmJiBkYXRhLmRldGFpbHMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gZGF0YS5kZXRhaWxzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZENsb25lKGRhdGEuZGV0YWlsc1tpXSk7XG4gICAgICAgIH0gICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gdGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheSkge1xuICAgICAgICAgICAgY3VycmVudFBlcnNvbm5lbCA9IHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXlbcF07XG4gICAgICAgICAgICBmb3IgKHZhciBkIGluIGRhdGEuZGV0YWlscykge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGVyc29ubmVsLnV1aWQgPT0gZGF0YS5kZXRhaWxzW2RdLnV1aWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGVyc29ubmVsKGRhdGEuZGV0YWlsc1tkXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuICByZW1vdmVQZXJzb25uZWwoZGF0YSkge1xuICAgICAgdmFyIHBlcnNvbm5lbFRvRGVzdHJveTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0udXVpZCA9PSBkYXRhLnV1aWQpIHtcbiAgICAgICAgICAgICAgcGVyc29ubmVsVG9EZXN0cm95ID0gdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXlbaV07XG4gICAgICAgICAgICAgIHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5LnNwbGljZShpLDEpO1xuICAgICAgICAgICAgICBwZXJzb25uZWxUb0Rlc3Ryb3kuZGVzdHJveSgpO1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZW1vdmVBbGxQZXJzb25uZWwoKXtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNoaWxkcmVuW2ldLmNvbnN0cnVjdG9yID09IENsb25lKXtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNoaWxkcmVuW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgdXBkYXRlUGxheWVyKGRldGFpbHMpIHtcbiAgICBmb3IgKHZhciBpIGluIGRldGFpbHMpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJbaV0gPSBkZXRhaWxzW2ldO1xuICAgIH1cbiAgfVxuXG4gIGluaXRSZXNvdXJjZXMoKSB7XG4gICAgdmFyIGN1cnJlbnRSZWMgPSBudWxsO1xuICAgIHZhciBncmFwaGljcyA9IHRoaXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XG4gICAgLy9ncmFwaGljcy5saW5lU3R5bGUoNCwgMHhmZmQ5MDAsIDEpO1xuICAgIGdyYXBoaWNzLmJlZ2luRmlsbCgweGZmZmZmZiwgMSk7XG4gICAgZ3JhcGhpY3MuZHJhd1JvdW5kZWRSZWN0KDEwMCwgMTAwLCB0aGlzLnRpbGVXaWR0aC00LCB0aGlzLnRpbGVIZWlnaHQtNCwgMTQpO1xuXG4gICAgZm9yICh2YXIgYyBpbiB0aGlzLnRpbGVBcnJheSkge1xuICAgICAgICBmb3IgKHZhciByIGluIHRoaXMudGlsZUFycmF5W2NdKSB7XG4gICAgICAgICAgICBpZih0aGlzLnRpbGVBcnJheVtjXVtyXS50aWxlT3duZXIgPT0gdGhpcy5wbGF5ZXIuaWQgJiYgdGhpcy50aWxlQXJyYXlbY11bcl0udGlsZVR5cGUgPT0gXCJ3YXJlaG91c2VcIikge1xuICAgICAgICAgICAgICAgIGlmIChyIDwgNSB8fCByID4gMTUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYyA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHRoaXMudGlsZUFycmF5W2NdW3JdLngrKHRoaXMudGlsZUFycmF5W2NdW3JdLndpZHRoLzIpLCB0aGlzLnRpbGVBcnJheVtjXVtyXS55Kyh0aGlzLnRpbGVBcnJheVtjXVtyXS53aWR0aC8yKSwgZ3JhcGhpY3MuZ2VuZXJhdGVUZXh0dXJlKCkpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLmFuZ2xlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjQwKS0yMDtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYy5hbmNob3Iuc2V0VG8oMC41KTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnRpbGVBcnJheVtjXVtyXS50aWxlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVuZXJneVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4ZmNlMzE1O1xuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm94eWdlblwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4MDBiMWYwO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJvY2tldFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4ZTgyYTJjO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1ldGFsXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYy50aW50ID0gMHhmZmZmZmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYmlvbWFzc1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4OGFjMzQyO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJpb2Ryb25lXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYy50aW50ID0gMHg5ZjNhOWI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidXJhbml1bVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4ZjM2NTIwO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFkZChjdXJyZW50UmVjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ3JhcGhpY3MuZGVzdHJveSgpO1xuICB9XG4gIFxuICBjcmVhdGVUaWxlQXJyYXkoY29sdW1ucywgcm93cywgcG9pbnQpIHtcbiAgICB0aGlzLnRpbGVEZXRhaWwgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTigndGlsZURldGFpbCcpO1xuXG4gICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcyA9IHt4OjAsIHk6MH07XG5cbiAgICB2YXIgeCwgeTtcbiAgICBcbiAgICB0aGlzLm1hcmdpbkJvdHRvbSA9IHRoaXMubWFyZ2luVG9wID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAuaGVpZ2h0LzE3LjQ3NTtcbiAgICB0aGlzLm1hcmdpbkxlZnQgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aC8yNDtcbiAgICB0aGlzLm1hcmdpblJpZ2h0ID0gIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoLzI2LjMxNTg7XG4gICAgdGhpcy50aWxlV2lkdGggPSB0aGlzLnRpbGVIZWlnaHQgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aC8zOTtcbiAgICB0aGlzLnBhZGRpbmcgPSAodGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGggLSAodGhpcy5tYXJnaW5MZWZ0ICsgdGhpcy5tYXJnaW5SaWdodCkgLSAodGhpcy50aWxlV2lkdGggKiAzMSkpLzMwO1xuICAgICAgICBcbiAgICAvL3RoaXMudGlsZVdpZHRoID0gMjU7Ly8odGhpcy5iYWNrZ3JvdW5kV2lkdGggLSAoKHRoaXMubWFyZ2luTGVmdCArIHRoaXMubWFyZ2luUmlnaHQpICsgKHRoaXMucGFkZGluZyAqIChjb2x1bW5zIC0gMSkpKSkgLyBjb2x1bW5zO1xuICAgIC8vdGhpcy50aWxlSGVpZ2h0ID0gMjU7Ly8odGhpcy5iYWNrZ3JvdW5kSGVpZ2h0IC0gKCh0aGlzLm1hcmdpblRvcCArIHRoaXMubWFyZ2luQm90dG9tKSArICh0aGlzLnBhZGRpbmcgKiAocm93cyAtIDEpKSkpIC8gcm93cztcbiAgICAgICAgXG4gICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy54ID0gcG9pbnQueCArIHRoaXMubWFyZ2luTGVmdDtcbiAgICB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnkgPSBwb2ludC55ICsgdGhpcy5tYXJnaW5Ub3A7XG4gICAgXG4gICAgdmFyIGdyYXBoaWNzID0gdGhpcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcbiAgICAvL2dyYXBoaWNzLmxpbmVTdHlsZSg0LCAweGZmZDkwMCwgMSk7XG4gICAgZ3JhcGhpY3MuYmVnaW5GaWxsKDB4ZmZmZmZmLCAxKTtcbiAgICBncmFwaGljcy5kcmF3UmVjdCgxMDAsIDEwMCwgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZUhlaWdodCk7XG4gICAgXG4gICAgZm9yICh2YXIgY29sdW1uID0gMDsgY29sdW1uIDwgY29sdW1uczsgY29sdW1uKyspIHtcbiAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgcm93czsgcm93KyspIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgeCA9IHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMueCArICh0aGlzLnRpbGVXaWR0aCAqIGNvbHVtbikgKyAodGhpcy5wYWRkaW5nICogY29sdW1uIC0gMSk7XG4gICAgICAgICAgICB5ID0gdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy55ICsgKHRoaXMudGlsZUhlaWdodCAqIHJvdykgKyAodGhpcy5wYWRkaW5nICogcm93IC0gMSk7XG4gICAgICAgICAgICAvL2dyYXBoaWNzLmdlbmVyYXRlVGV4dHVyZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgY3VycmVudFRpbGUgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh4LCB5LCBncmFwaGljcy5nZW5lcmF0ZVRleHR1cmUoKSk7XG4gICAgICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQoY3VycmVudFRpbGUpO1xuICAgICAgICAgICAgY3VycmVudFRpbGUuYWxwaGEgPSAwOyAvLyAwLjI1O1xuICAgICAgICAgICAgY3VycmVudFRpbGUuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlLmV2ZW50cy5vbklucHV0RG93bi5hZGQodGhpcy50aWxlQ2xpY2tlZCwgdGhpcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy50aWxlQXJyYXlbY29sdW1uXSA9PSAndW5kZWZpbmVkJykgXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbY29sdW1uXSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NvbHVtbl1bcm93XSA9IGN1cnJlbnRUaWxlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdyYXBoaWNzLmRlc3Ryb3koKTtcbiAgICBcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy50aWxlRGV0YWlsKSB7XG4gICAgICAgIGlmICghdGhpcy50aWxlRGV0YWlsLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xuICAgICAgICBcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMudGlsZURldGFpbFtrZXldO1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgICAgICAgICAgLy8gc2tpcCBsb29wIGlmIHRoZSBwcm9wZXJ0eSBpcyBmcm9tIHByb3RvdHlwZVxuICAgICAgICAgICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgY29udGludWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbkNvdW50ID0gb2JqW3Byb3BdLmxvY2F0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IoIHZhciBpID0gMDsgaSA8IGxvY2F0aW9uQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBjb29yZHMgPSBvYmpbcHJvcF0ubG9jYXRpb25zW2ldLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICB4ID0gY29vcmRzWzBdO1xuICAgICAgICAgICAgICAgIHkgPSBjb29yZHNbMV07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZURhbWFnZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlT2NjdXBpZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlWCA9IHg7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZVkgPSB5O1xuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVUeXBlID0gb2JqW3Byb3BdLnR5cGU7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMudGlsZUFycmF5W3hdW3ldICE9ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlTmFtZSA9IG9ialtwcm9wXS5uYW1lO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeCArIFwiOlwiICsgeSArIFwiIG5vdCBmb3VuZCFcIik7XG5cbiAgICAgICAgICAgICAgICBpZih4IDwgOSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZU93bmVyID0gMTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4PjIwKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlT3duZXIgPSAyO1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtwcm9wXS5wcm9wZXJ0aWVzICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVQcm9wZXJ0aWVzID0gb2JqW3Byb3BdLnByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGl4ZWxzVG9UaWxlKHgsIHkpIHtcbiAgICB2YXIgeFRpbGUgPSAwO1xuICAgIHZhciB5VGlsZSA9IDA7XG4gICAgXG4gICAgZm9yICh2YXIgY29sIGluIHRoaXMudGlsZUFycmF5KSB7XG4gICAgICAgIGZvciAodmFyIHJvdyBpbiB0aGlzLnRpbGVBcnJheVtjb2xdKSB7XG4gICAgICAgICAgICB2YXIgb2JqID0gdGhpcy50aWxlQXJyYXlbY29sXVtyb3ddO1xuICAgICAgICAgICAgaWYoeCA+IG9iai54ICYmIHggPCBvYmoueCArIG9iai53aWR0aClcbiAgICAgICAgICAgICAgICB4VGlsZSA9IHBhcnNlSW50KGNvbCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih5ID4gb2JqLnkgJiYgeSA8IG9iai55ICsgb2JqLmhlaWdodClcbiAgICAgICAgICAgICAgICB5VGlsZSA9IHBhcnNlSW50KHJvdyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt4OnhUaWxlLCB5OnlUaWxlfTtcbiAgfVxuICBcbiAgdGlsZVRvUGl4ZWxzKHgsIHkpIHtcbiAgICB2YXIgdGlsZU9iaiA9IHRoaXMudGlsZUFycmF5W3hdW3ldO1xuICAgIHJldHVybiB7eDp0aWxlT2JqLnggKyB0aWxlT2JqLndpZHRoLzIsIHk6dGlsZU9iai55ICsgdGlsZU9iai5oZWlnaHQvMn07XG4gIH1cbiAgXG4gIHRpbGVDbGlja2VkKG9iaikge1xuICAgICAgdGhpcy5oaWRlVGlsZXMoKTtcbiAgICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ3RpbGVDbGlja2VkJywgeDpwYXJzZUludChvYmoudGlsZVgpLCB5OnBhcnNlSW50KG9iai50aWxlWSl9KTtcbiAgICAvLyAgIHRoaXMuYWRkT3JkbmFuY2Uoe3BvaW50Ont4Om9iai50aWxlWCwgeTpvYmoudGlsZVl9LCB0eXBlOidzaGllbGQnLCB1dWlkOk1hdGgucmFuZG9tKCl9KTtcblxuICAgICAgcmV0dXJuO1xuICB9XG4gIFxuICBzaG93VGlsZXMoY29vcmRzQXJyYXksIGNvbG9yKSB7XG4gICAgaWYodHlwZW9mKGNvb3Jkc0FycmF5LnBvaW50QXJyYXkpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb29yZHNBcnJheSA9IGNvb3Jkc0FycmF5LnBvaW50QXJyYXk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgaW4gY29vcmRzQXJyYXkpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy50aWxlQXJyYXlbY29vcmRzQXJyYXlbaV0ueF1bY29vcmRzQXJyYXlbaV0ueV0pO1xuICAgICAgICB0aGlzLnRpbGVBcnJheVtjb29yZHNBcnJheVtpXS54XVtjb29yZHNBcnJheVtpXS55XS5hbHBoYSA9IDAuNTtcbiAgICAgICAgaWYoY29sb3IpIHtcbiAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2Nvb3Jkc0FycmF5W2ldLnhdW2Nvb3Jkc0FycmF5W2ldLnldLnRpbnQgPSBjb2xvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2Nvb3Jkc0FycmF5W2ldLnhdW2Nvb3Jkc0FycmF5W2ldLnldLnRpbnQgPSAweGZmZDkwMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3duVGlsZXMucHVzaCh7eDpjb29yZHNBcnJheVtpXS54LHk6Y29vcmRzQXJyYXlbaV0ueX0pO1xuICAgIH1cbiAgfVxuICBcbiAgaGlkZVRpbGVzKHRpbGVBcnJheSkge1xuICAgIGlmKCF0aWxlQXJyYXkpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnNob3duVGlsZXMpIHtcbiAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3RoaXMuc2hvd25UaWxlc1tpXS54XVt0aGlzLnNob3duVGlsZXNbaV0ueV0uYWxwaGEgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd25UaWxlcyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIGRhbWFnZVRpbGUoZGF0YSkge1xuICBcbiAgICB2YXIgY3VycmVudFRpbGUgPSB0aGlzLnRpbGVBcnJheVtkYXRhLnhdW2RhdGEueV07XG4gICAgXG4gICAgY3VycmVudFRpbGUudGludCA9IDBYMzMzMzMzO1xuICAgIGN1cnJlbnRUaWxlLmFscGhhID0gMC44O1xuICAgIGN1cnJlbnRUaWxlLnRpbGVEYW1hZ2VkID0gdHJ1ZTtcbiAgICBcbiAgICB2YXIgdGVzdCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKGN1cnJlbnRUaWxlLngsIGN1cnJlbnRUaWxlLnkgKyhjdXJyZW50VGlsZS5oZWlnaHQvMiksICdib29tJyk7XG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKHRlc3QpO1xuICAgIHRlc3QuYW5nbGUgPSAyNzA7XG4gICAgdGVzdC5hbmNob3Iuc2V0KDAuNSwwLjcpO1xuICAgIHRlc3QuYW5pbWF0aW9ucy5hZGQoJ2Jvb20nKTtcbiAgICB0ZXN0LmFuaW1hdGlvbnMucGxheSgnYm9vbScsIDIwLCBmYWxzZSwgdHJ1ZSk7XG4gICAgXG4gIH1cbiAgXG4gIHN0YXJ0R2FtZSgpIHtcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ2dhbWUnKTtcbiAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXB0aWtvbjtcbiIsImltcG9ydCBSZXNvdXJjZXMgZnJvbSAnLi4vcHJlZmFicy9yZXNvdXJjZXMnO1xuaW1wb3J0IFBlcnNvbm5lbCBmcm9tICcuLi9wcmVmYWJzL3BlcnNvbm5lbCc7XG5pbXBvcnQgT3JkbmFuY2UgZnJvbSAnLi4vcHJlZmFicy9vcmRuYW5jZSc7XG5pbXBvcnQgQ2xvbmUgZnJvbSAnLi4vcHJlZmFicy9jbG9uZSc7IC8vIFRoaXMgd2lsbCBiZSBpbmNvcnBvcmF0ZWQgaW4gcGVyc29ubmVsXG5cbmNsYXNzIFRlYW0ge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoZ2FtZSkgeyBcbiAgICB0aGlzLnJlYyA9IG5ldyBSZXNvdXJjZXMoKTtcbiAgICB0aGlzLnJlY0VudW0gPSB0aGlzLnJlYy5yZXNvdXJjZUVudW07XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICBcbiAgICB0aGlzLnBlcnNvbm5lbCA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzID0gW107XG4gIH1cbiAgXG4gIHJlZnJlc2goKSB7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbCkge1xuICAgICAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgLy9SZXNvdXJjZSBJbnRlcmZhY2VcbiAgZ2V0UmVjQ291bnQodHlwZSkge1xuICAgIHJldHVybiB0aGlzLnJlYy5nZXRDb3VudCh0eXBlKTtcbiAgfVxuICBcbiAgY2hlY2tSZWModHlwZSwgY291bnQpIHtcbiAgICBpZiAodGhpcy5nZXRSZWNDb3VudCh0eXBlKSA+PSBjb3VudCkgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIGV4Y2hhbmdlUmVjKGNvc3RUeXBlLCBjb3N0Q291bnQsIHlpZWxkVHlwZSwgeWllbGRDb3VudCkge1xuICB9XG4gIFxuICBhZGRSZWModHlwZSwgY291bnQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWMuYWRkKHR5cGUsIGNvdW50KTtcbiAgfVxuICBcbiAgcmVtb3ZlUmVjKHR5cGUsIGNvdW50KSB7XG4gICAgcmV0dXJuIHRoaXMucmVjLnJlbW92ZSh0eXBlLCBjb3VudCk7XG4gIH1cbiAgXG4gIGFkZENsb25lKHgsIHksIHByb3BzKSB7XG4gICAgdmFyIHBvaW50ID0gdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVUb1BpeGVscyh4LHkpO1xuICAgIHZhciBjbG9uZSA9IG5ldyBDbG9uZSh0aGlzLmdhbWUscG9pbnQueCxwb2ludC55KTtcbiAgICBjbG9uZS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnggPSB4O1xuICAgIGNsb25lLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueSA9IHk7XG4gICAgXG4gICAgZm9yICh2YXIgaSBpbiBwcm9wcykge1xuICAgICAgICBjbG9uZVtpXSA9IHByb3BzW2ldO1xuICAgIH1cbiAgICB0aGlzLnBlcnNvbm5lbC5wdXNoKGNsb25lKTtcbiAgICB0aGlzLmdhbWUuc3RhZ2UuYWRkQ2hpbGQoY2xvbmUpO1xuICB9XG4gIFxuICBnZXRDbG9uZShjb29yZCkge1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcbiAgICAgICAgaWYodGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy54ID09IGNvb3JkLnggJiYgdGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy55ID09IGNvb3JkLnkpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGVyc29ubmVsW2ldO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBraWxsQ2xvbmUoY29vcmQpIHtcbiAgICB2YXIgY2xvbmUgPSB0aGlzLmdldENsb25lKGNvb3JkKTtcbiAgICB0aGlzLmdhbWUuc3RhZ2UucmVtb3ZlQ2hpbGQoY2xvbmUpO1xuICAgIFxuICAgIHZhciBpbmRleCA9IHRoaXMucGVyc29ubmVsLmluZGV4T2YoY2xvbmUpO1xuICAgIHRoaXMucGVyc29ubmVsLnNwbGljZShpbmRleCwxKTtcbiAgICBcbiAgICBjbG9uZS5yZW1vdmUoKTtcbiAgfVxuICAgIFxuICBvZmZlckxlZ2FsQ2xvbmVzKCkge1xuICAgIC8vIE9mZmVyIGNsb25lcyB0aGF0IGhhdmUgbGVnYWwgbW92ZXNcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcbiAgICAgICAgdmFyIG1vdmVzID0gdGhpcy5wZXJzb25uZWxbaV0uZ2V0TGVnYWxNb3ZlcygpO1xuXG4gICAgICAgIGlmKG1vdmVzICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5wZXJzb25uZWxbaV0uaGlnaGxpZ2h0T24oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgb2ZmZXJHdW5uZXJzKCkge1xuICAgIC8vIE9mZmVyIGd1bm5lciBcbiAgICB2YXIgZ3VubmVyRm91bmQgPSBmYWxzZTtcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcbiAgICAgICAgaWYodGhpcy5wZXJzb25uZWxbaV0uaXNHdW5uZXIpIHtcbiAgICAgICAgICAgIGd1bm5lckZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vdGhpcy5wZXJzb25uZWxbaV0uaGlnaGxpZ2h0T24oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ3VubmVyRm91bmQ7XG4gIH1cbiAgXG4gIHNlbGVjdEd1bm5lcihjb29yZHMpIHtcbiAgICB2YXIgY2xvbmUgPSB0aGlzLmdldENsb25lKGNvb3Jkcyk7XG4gICAgaWYoIWNsb25lKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYoIWNsb25lLmlzR3VubmVyKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIFxuICAgIHZhciBleGlzdGluZ0d1bm5lciA9IHRoaXMuc2VsZWN0ZWRHdW5uZXJzLmluZGV4T2YoY2xvbmUpO1xuICAgIGlmKGV4aXN0aW5nR3VubmVyID49IDApe1xuICAgICAgICBjbG9uZS5oaWdobGlnaHRPZmYoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMuc3BsaWNlKGV4aXN0aW5nR3VubmVyLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjbG9uZS5oaWdobGlnaHRPbigpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycy5wdXNoKGNsb25lKTtcbiAgICB9XG4gIH1cbiAgXG4gIGNsZWFyR3VubmVycygpIHtcbiAgICBmb3IgKHZhciBpIGluIHRoaXMuc2VsZWN0ZWRHdW5uZXJzKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzW2ldLmhpZ2hsaWdodE9mZigpO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkR3VubmVycyA9IFtdO1xuICB9XG4gIFxuICBzZWxlY3RDbG9uZUZvck1vdmUoY29vcmRzKSB7ICAgIFxuICBcbiAgICB2YXIgY2xvbmUgPSB0aGlzLmdldENsb25lKGNvb3Jkcyk7XG4gICAgaWYoIWNsb25lKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcbiAgICAgICAgdGhpcy5wZXJzb25uZWxbaV0uaGlnaGxpZ2h0T2ZmKCk7XG4gICAgfVxuICAgIHRoaXMubGVnYWxUaWxlcyA9IGNsb25lLmdldExlZ2FsTW92ZXMoKTtcbiAgICB0aGlzLnNlbGVjdGVkQ2xvbmUgPSBjbG9uZTtcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24uc2hvd1RpbGVzKHRoaXMubGVnYWxUaWxlcyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgXG4gIG1vdmVTZWxlY3RlZENsb25lKGNvb3Jkcykge1xuICAgIGZvcih2YXIgaSBpbiB0aGlzLmxlZ2FsVGlsZXMpIHtcbiAgICAgICAgaWYodGhpcy5sZWdhbFRpbGVzW2ldLnRpbGVYID09IGNvb3Jkcy54ICYmIHRoaXMubGVnYWxUaWxlc1tpXS50aWxlWSA9PSBjb29yZHMueSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENsb25lLm1vdmUoY29vcmRzKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkQ2xvbmU7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5sZWdhbFRpbGVzO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW07IiwiY2xhc3MgT3JkbmFuY2Uge1xuXG4gICAgY29uc3RydWN0b3IodHlwZSwgeCwgeSwgdXVpZCkge1xuICAgICAgICB0aGlzLnR5cGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgICAgICBTSElFTEQ6IDAsXG4gICAgICAgICAgICBCSU9EUk9ORTogMSxcbiAgICAgICAgICAgIFNBVEVMTElURTogMixcbiAgICAgICAgICAgIFJPQ0tFVDogM1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZUVudW1bdHlwZS50b1VwcGVyQ2FzZSgpXTtcbiAgICAgICAgXG4gICAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzLk9yZG5hbmNlID0gT3JkbmFuY2U7XG4iLCJjbGFzcyBQZXJzb25uZWwge1xuXG4gICAgY29uc3RydWN0b3IodHlwZSwgeCwgeSwgdXVpZCkge1xuICAgICAgICB0aGlzLnR5cGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgICAgICBDTE9ORTogMCxcbiAgICAgICAgICAgIEJJT0RST05FOiAxXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZDtcbiAgICAgICAgdGhpcy51bmRlckVzcGlvbmFnZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzR3VubmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZUVudW1bdHlwZS50b1VwcGVyQ2FzZSgpXTtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnYmlvZHJvbmUnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2xvbmUnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVFbnVtW3R5cGVdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG1vdmUoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMuUGVyc29ubmVsID0gUGVyc29ubmVsO1xuIiwidmFyIFBlcnNvbm5lbCA9IHJlcXVpcmUoJy4vcGVyc29ubmVsJykuUGVyc29ubmVsO1xudmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9yZXNvdXJjZScpLlJlc291cmNlO1xudmFyIE9yZG5hbmNlID0gcmVxdWlyZSgnLi9vcmRuYW5jZScpLk9yZG5hbmNlO1xuXG5cbmNsYXNzIFBsYXllciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihzb2NrZXRJRCwgaWQsIHV1aWQpIHsgXG4gICAgICAgIHRoaXMuc29ja2V0SUQgPSBzb2NrZXRJRDtcbiAgICAgICAgdGhpcy5pZCA9IGlkOyAvL3BsYXllciAxIG9yIHBsYXllciAyOyB0aGlzIHdpbGwgZGV0ZXJtaW5lIHRoZSBzaWRlIG9mIHRoZSBib2FyZCBhdCBjbGllbnQgc3RhcnQuXG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgICAgIHRoaXMucGVyc29ubmVsQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5ID0gW107XG4gICAgICAgIHRoaXMub3JkbmFuY2VBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLnJlYWR5VG9TdGFydCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXJ0aW5nQ2xvbmVDb3VudCA9IDU7XG4gICAgICAgIHRoaXMuYXJtc0FycmF5ID0gW107XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudExlZ2FsUGllY2VzID0gW107XG5cbiAgICAgICAgdGhpcy5pbml0UmVzb3VyY2VzKCk7XG4gICAgfVxuXG4gICAgY2xlYXJRdWV1ZXMoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlcyA9IFtdO1xuICAgIH1cbiAgICAgICAgXG4gICAgYWRkUGVyc29ubmVsKHR5cGUsIHgsIHksIHV1aWQpIHtcbiAgICAgICAgaWYodHlwZSA9PSBcImNsb25lXCIgJiYgdGhpcy5nZXRQZXJzb25uZWwodHlwZSkubGVuZ3RoIDwgMTApIHtcbiAgICAgICAgICAgIHZhciBwZXJzb25uZWwgPSBuZXcgUGVyc29ubmVsKCdjbG9uZScsIHgsIHksIHV1aWQpO1xuICAgICAgICAgICAgdGhpcy5wZXJzb25uZWxBcnJheS5wdXNoKHBlcnNvbm5lbCk7XG4gICAgICAgICAgICByZXR1cm4gcGVyc29ubmVsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZW1vdmVQZXJzb25uZWwocGVyc29ubmVsLCBwdXJnZUFsbCkge1xuICAgICAgICBpZiAocHVyZ2VBbGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMucGVyc29ubmVsQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFBlcnNvbm5lbCh0eXBlKSB7XG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGVyc29ubmVsQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5wZXJzb25uZWxBcnJheVtpXS50eXBlID09PSB0aGlzLnBlcnNvbm5lbEFycmF5W2ldLnR5cGVFbnVtW3R5cGUudG9VcHBlckNhc2UoKV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMucGVyc29ubmVsQXJyYXlbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcbiAgICB9XG5cbiAgICBnZXRQZXJzb25uZWxCeVVVSUQodXVpZCkge1xuICAgICAgICB2YXIgcGVyc29ubmVsID0gdGhpcy5nZXRQZXJzb25uZWwoKTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBwZXJzb25uZWwpIHtcbiAgICAgICAgICAgIGlmIChwZXJzb25uZWxbaV0udXVpZCA9PSB1dWlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlcnNvbm5lbFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0UGVyc29ubmVsQnlQb2ludChwb2ludCkge1xuICAgICAgICB2YXIgcGVyc29ubmVscyA9IHRoaXMuZ2V0UGVyc29ubmVsKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGVyc29ubmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHBlcnNvbm5lbHNbaV0ueCA9PSBwb2ludC54ICYmIHBlcnNvbm5lbHNbaV0ueSA9PSBwb2ludC55KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlcnNvbm5lbHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNoZWNrUGVyc29ubmVsTW92ZShwZXJzb25uZWwsIHBvaW50KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50TGVnYWxQaWVjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwZXJzb25uZWwueCA9PSB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlc1tpXS5vcmlnaW4ueCAmJiBwZXJzb25uZWwueSA9PSB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlc1tpXS5vcmlnaW4ueSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcG9pbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jdXJyZW50TGVnYWxQaWVjZXNbaV0ubW92ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZWdhbFBpZWNlc1tpXS5tb3Zlc1tqXS54ID09IHBvaW50LnggJiYgdGhpcy5jdXJyZW50TGVnYWxQaWVjZXNbaV0ubW92ZXNbal0ueSA9PSBwb2ludC55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhZGRPcmRuYW5jZSh0eXBlLCBwb2ludCwgdXVpZCkge1xuICAgICAgICB2YXIgb3JkID0gbmV3IE9yZG5hbmNlKHR5cGUsIHBvaW50LngsIHBvaW50LnksIHV1aWQpO1xuICAgICAgICB0aGlzLm9yZG5hbmNlQXJyYXkucHVzaChvcmQpO1xuICAgICAgICByZXR1cm4gb3JkO1xuICAgIH1cblxuICAgIHB1cmdlTGVnYWxQaWVjZXMocGVyc29ubmVsLCBwdXJnZUFsbE1hdGNoaW5nVHlwZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwZXJzb25uZWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlcyA9IFtdO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gdGhpcy5jdXJyZW50TGVnYWxQaWVjZXMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICBpLS0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZWdhbFBpZWNlc1tpXS50eXBlID09PSBwZXJzb25uZWwudHlwZSAmJiBwdXJnZUFsbE1hdGNoaW5nVHlwZXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlcy5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEd1bm5lcnMoKSB7XG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xuICAgICAgICB2YXIgY2xvbmVzID0gdGhpcy5nZXRQZXJzb25uZWwoJ2Nsb25lJyk7XG4gICAgICAgIGZvciAodmFyIGkgaW4gY2xvbmVzKSB7XG4gICAgICAgICAgICBpZiAoY2xvbmVzW2ldLmlzR3VubmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaChjbG9uZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcbiAgICB9XG5cbiAgICBnZXRTZWxlY3RlZEd1bm5lcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkR3VubmVycztcbiAgICB9XG5cbiAgICBjbGVhclNlbGVjdGVkR3VubmVycygpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMgPSBbXTtcbiAgICB9XG5cbiAgICB0b2dnbGVHdW5uZXJTZWxlY3Rpb24oZ3VubmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkR3VubmVycy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMucHVzaChndW5uZXIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZEd1bm5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShndW5uZXIpID09PSBKU09OLnN0cmluZ2lmeSh0aGlzLnNlbGVjdGVkR3VubmVyc1tpXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycy5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMucHVzaChndW5uZXIpO1xuICAgIH1cblxuICAgIGdldE9yZG5hbmNlKHR5cGUpIHtcbiAgICAgICAgdmFyIHJldHVybkFycmF5ID0gW107XG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLm9yZG5hbmNlQXJyYXkpIHtcbiAgICAgICAgICAgIGlmKHR5cGUgPT09IG51bGwgfHwgdGhpcy5vcmRuYW5jZUFycmF5W2ldLnR5cGUgPT09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLm9yZG5hbmNlQXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcbiAgICB9XG5cbiAgICByZW1vdmUodGFyZ2V0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XG4gICAgfVxuXG4gICAgZ2V0T3JkbmFuY2VCeVBvaW50KHBvaW50KSB7XG4gICAgICAgIHZhciBvcmRuYW5jZXMgPSB0aGlzLmdldE9yZG5hbmNlKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3JkbmFuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAob3JkbmFuY2VzW2ldLnggPT0gcG9pbnQueCAmJiBvcmRuYW5jZXNbaV0ueSA9PSBwb2ludC55KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yZG5hbmNlc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbW92ZU9yZG5hbmNlKGNvdW50KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcmRuYW5jZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcmRuYW5jZUFycmF5W2ldLnR5cGUgPT0gXCJiaW9kcm9uZVwiIHx8IHRoaXMub3JkbmFuY2VBcnJheVtpXS50eXBlID09IFwicm9ja2V0XCIgfHwgdGhpcy5vcmRuYW5jZUFycmF5W2ldLnR5cGUgPT0gXCJudWtlXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkbmFuY2VBcnJheVtpXS54ICs9IGNvdW50O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkbmFuY2VBcnJheVtpXS54IC09IGNvdW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vcmRuYW5jZUFycmF5O1xuICAgIH1cblxuICAgIGluaXRSZXNvdXJjZXMoKSB7XG4gICAgICAgIHZhciByZWNBcnJheSA9IFtcbiAgICAgICAgICAgICdlbmVyZ3kxJywgXG4gICAgICAgICAgICAnZW5lcmd5MicsXG4gICAgICAgICAgICAnb3h5Z2VuJyxcbiAgICAgICAgICAgICdtZXRhbCcsXG4gICAgICAgICAgICAnYmlvZHJvbmUnLFxuICAgICAgICAgICAgJ3JvY2tldCcsXG4gICAgICAgICAgICAndXJhbml1bScsXG4gICAgICAgICAgICAnYmlvbWFzcycsXG4gICAgICAgICAgICAnbnVrZSdcbiAgICAgICAgICAgIF07XG4gICAgICAgIHZhciByZWMgPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBpIGluIHJlY0FycmF5KSB7XG4gICAgICAgICAgICByZWMgPSBuZXcgUmVzb3VyY2UocmVjQXJyYXlbaV0pO1xuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5W3JlY0FycmF5W2ldXSA9IFtdO1xuICAgICAgICAgICAgaWYgKHJlY0FycmF5W2ldICE9IFwibnVrZVwiKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY291bnQgPSAwOyBjb3VudCA8IDEwOyBjb3VudCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA8IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2VBcnJheVtyZWNBcnJheVtpXV0ucHVzaChyZWMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5W3JlY0FycmF5W2ldXS5wdXNoKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UmVzb3VyY2VDb3VudCh0eXBlKSB7XG4gICAgICAgIHZhciBmb3VuZFJlc291cmNlcyA9IDA7XG4gICAgICAgIHZhciBjdXJyZW50UmVzb3VyY2VTbG90ID0gOTtcblxuICAgICAgICBpZiAodHlwZSA9PSBcImVuZXJneVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSZXNvdXJjZUNvdW50KCdlbmVyZ3kxJykgKyB0aGlzLmdldFJlc291cmNlQ291bnQoJ2VuZXJneTInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09IFwibnVrZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChjdXJyZW50UmVzb3VyY2VTbG90ID49IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VTbG90LS07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXVtjdXJyZW50UmVzb3VyY2VTbG90XS5kYW1hZ2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kUmVzb3VyY2VzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3VuZFJlc291cmNlcysrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3VuZFJlc291cmNlcztcbiAgICB9XG5cbiAgICAvLyBDaGVja1Jlc291cmNlIGRlZmF1bHRzIHRvIGFzc3VtZSB5b3UgYXJlIGNoZWNraW5nIHRvIHNwZW5kIGEgcmVzb3VyY2UuIFNldCBcImFjY2VwdFwiIHRvIHRydWUgaWYgeW91IGFyZSBjaGVja2luZyB0byByZWNlaXZlIGEgcmVzb3VyY2VcbiAgICBjaGVja1Jlc291cmNlKHR5cGUsIGNvdW50LCBhY2NlcHQpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRSZXNvdXJjZVNsb3QgPSA5O1xuICAgICAgICB2YXIgZm91bmRSZXNvdXJjZXMgPSAwO1xuICAgICAgICB2YXIgcmVzb3VyY2VTbG90cyA9IDA7XG5cbiAgICAgICAgaWYgKHR5cGUgPT0gXCJudWtlXCIpIHtcbiAgICAgICAgICAgIGlmIChhY2NlcHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXS5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZih0eXBlID09IFwiZW5lcmd5XCIpIHtcbiAgICAgICAgICAgIHZhciBlMSA9IHRoaXMuY2hlY2tSZXNvdXJjZShcImVuZXJneTFcIiwgY291bnQsIGFjY2VwdCk7XG4gICAgICAgICAgICB2YXIgZTIgPSB0aGlzLmNoZWNrUmVzb3VyY2UoXCJlbmVyZ3kyXCIsIGNvdW50LCBhY2NlcHQpO1xuXG4gICAgICAgICAgICBpZihlMSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZTIgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZTI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChjdXJyZW50UmVzb3VyY2VTbG90ID49IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWNjZXB0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlU2xvdHMrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc291cmNlU2xvdHMgPT0gY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRSZXNvdXJjZVNsb3QtLTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdLmRhbWFnZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZihhY2NlcHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvdW5kUmVzb3VyY2VzKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGFjY2VwdCAhPT0gZmFsc2UgJiYgZm91bmRSZXNvdXJjZXMgPT09IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VTbG90LS07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHNwZW5kUmVzb3VyY2UodHlwZSwgY291bnQpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRSZXNvdXJjZVNsb3QgPSA5O1xuICAgICAgICB2YXIgb3JpZ2luYWxDb3VudCA9IGNvdW50O1xuXG4gICAgICAgIGlmICh0eXBlID09IFwiZW5lcmd5XCIpIHtcbiAgICAgICAgICAgIHZhciBzdWNjZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB3aGlsZSAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuc3BlbmRSZXNvdXJjZShcImVuZXJneTFcIiwgMSk7XG4gICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuc3BlbmRSZXNvdXJjZShcImVuZXJneTJcIiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbENvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnRSZXNvdXJjZVNsb3QgPj0gMCAmJiBjb3VudCA+IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VTbG90LS07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXVtjdXJyZW50UmVzb3VyY2VTbG90XS5kYW1hZ2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKFwiVHJpZWQgdG8gc3BlbmQgcmVzb3VyY2VzIHlvdSBkb24ndCBoYXZlIVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXVtjdXJyZW50UmVzb3VyY2VTbG90XSA9IG51bGw7XG4gICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcmlnaW5hbENvdW50O1xuICAgIH1cblxuICAgIGFjY2VwdFJlc291cmNlKHR5cGUsIGNvdW50KSB7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG51bGw7XG4gICAgICAgIHZhciBjdXJyZW50UmVzb3VyY2VTbG90ID0gOTtcbiAgICAgICAgdmFyIHNlYXJjaGluZyA9IHRydWU7XG4gICAgICAgIHZhciBvcmlnaW5hbENvdW50ID0gY291bnQ7XG5cbiAgICAgICAgaWYgKHR5cGUgPT0gXCJudWtlXCIpIHtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXS5wdXNoKG5ldyBSZXNvdXJjZSh0eXBlKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09IFwiZW5lcmd5XCIpIHtcbiAgICAgICAgICAgIHZhciBzdWNjZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB3aGlsZSAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuYWNjZXB0UmVzb3VyY2UoXCJlbmVyZ3kxXCIsIDEpO1xuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLmFjY2VwdFJlc291cmNlKFwiZW5lcmd5MlwiLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsQ291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgaWYgKHNlYXJjaGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vIHBlZWsgYXQgbmV4dCByZXNvdXJjZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm5vIHJvb20gZm9yIHRoaXMgcmVzb3VyY2UhXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVzb3VyY2VTbG90ID09PSAwIHx8IHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXVtjdXJyZW50UmVzb3VyY2VTbG90IC0gMV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VTbG90LS07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRSZXNvdXJjZVNsb3QgKyAxID4gdGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxDb3VudCAtIGNvdW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvdXJjZSA9IG5ldyBSZXNvdXJjZSh0eXBlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gPSByZXNvdXJjZTtcbiAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgIGlmKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbENvdW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VTbG90Kys7XG4gICAgICAgICB9XG4gICAgICAgICAgICBpZihjdXJyZW50UmVzb3VyY2VTbG90IDwgMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJPdXQgb2YgYm91bmRzLiBObyBlbXB0eSByZXNvdXJ1Y2Ugc2xvdHMgZm91bmQuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMuUGxheWVyID0gUGxheWVyO1xuIiwiY2xhc3MgUmVzb3VyY2Uge1xuXG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICBcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzLlJlc291cmNlID0gUmVzb3VyY2U7XG4iLCJ2YXIgUGxheWVyID0gcmVxdWlyZSgnLi9wbGF5ZXInKS5QbGF5ZXI7XG52YXIgdXVpZCA9IHJlcXVpcmUoJ3V1aWQvdjQnKTtcblxuY2xhc3MgU2VwdGlrb24ge1xuICAgIFxuXHRjb25zdHJ1Y3Rvcihpbykge1xuICAgICAgICB0aGlzLmlvID0gaW87XG4gICAgICAgIHRoaXMubGFzdFBsYXllcklEID0gMDtcbiAgICAgICAgdGhpcy5wbGF5ZXJzQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAwO1xuICAgICAgICB0aGlzLnR1cm5TdGF0ZSA9IDA7XG4gICAgICAgIHRoaXMudXVpZCA9IHJlcXVpcmUoJ3V1aWQvdjQnKSgpO1xuXG4gICAgICAgIHRoaXMuYWN0aXZlUGxheWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5jdXJyZW50RGljZVZhbHVlID0gMDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlRW51bSA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICAgICAgU0VUVVA6IDAsXG4gICAgICAgICAgICBHQU1FOiAxLCBcbiAgICAgICAgICAgIFBBVVNFOiAyLFxuICAgICAgICAgICAgR0FNRU9WRVI6IDNcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnR1cm5TdGF0ZUVudW0gPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgICAgIFJPTEw6IDAsICAgIC8vIExpdGVyYWxseSB0aGUgYWN0IG9mIHJvbGxpbmcgdGhlIGRpZVxuICAgICAgICAgICAgTU9WRTogMSwgICAgLy8gU2VsZWN0aW5nIHRoZSBjbG9uZSBhbmQgdGhlaXIgdGFyZ2V0IHNwYWNlXG4gICAgICAgICAgICBBQ1RJT046IDIsICAvLyBUcmlnZ2VyIHRpbGUgIFxuICAgICAgICAgICAgVEFSR0VUUzogMywgLy8gQXNzaWduIHRhcmdldChzKSAoaWUuIC0gZ3VubmVyLCB0aWxlLCBlc3Bpb25hZ2VkIGNsb25lKSBcbiAgICAgICAgICAgIEJJT0RST05FOiA0LC8vIE1vdmUgYmlvZHJvbmUocylcbiAgICAgICAgICAgIE9SRE5BTkNFOiA1LC8vIG1vdmUgb3JkbmFuY2UgYWNjb3JkaW5nIHRvIGRpY2Ugcm9sbCAodGhpcyBtYXkgbm90IHJlcXVpcmUgYSBzdGF0ZS4uLilcbiAgICAgICAgICAgIEVORDogNiAgICAgIC8vIGFzc2VzcyBvcmRuYW5jZSBkYW1hZ2UgYW5kIGNsb25lL2Jpb2Ryb25lIGtpbGxzLiBBc3Nlc3MgdmljdG9yeSBjb25kaXRpb25zICh0aGlzIG1heSBub3QgcmVxdWlyZSBhIHN0YXRlLi4uKVxuICAgICAgICB9KTsgIFxuXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uRW51bSA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICAgICAgTk9SVEg6MSxcbiAgICAgICAgICAgIEVBU1Q6MixcbiAgICAgICAgICAgIFNPVVRIOjQsXG4gICAgICAgICAgICBXRVNUOjhcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50aWxlQ29sdW1ucyA9IDMxO1xuICAgICAgICB0aGlzLnRpbGVSb3dzID0gMjE7XG5cbiAgICAgICAgdGhpcy50aWxlQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5jcmVhdGVUaWxlQXJyYXkoKTsgXG5cbiAgICAgICAgdGhpcy5xdWV1ZWRUaWxlID0gbnVsbDtcbiAgICAgICAgdGhpcy50aWxlc1JlcGFpcmVkVGhpc1R1cm4gPSAwO1xuICAgICAgICB0aGlzLmF2YWlsYWJsZUNsb25lc1RvQWRkID0gMDtcblx0fVxuXG4gICAgY2xpY2tlZChkYXRhKSB7XG4gICAgICAgIFxuICAgICAgICAvLyBQcm9jZXNzIHRoZSBjbGljayBmcm9tIHRoZSBjbGllbnQuIFxuICAgICAgICAvLyBDbGllbnQgc2hvdWxkIGRvIE5PIHJ1bGUgcHJvY2Vzc2luZy4gUGFzcyB0aGUgY2xpY2sgZnJvbSBjbGllbnQgdG8gc2VydmVyOyBwcm9jZXNzIHRoZSBkYXRhOyB0ZWxsIHRoZSBjbGllbnQgd2hhdCB0byBkby5cbiAgICAgICAgLy8gQmFzaWNhbGx5LCBjaGVjayBnYW1lIHN0YXRlIGFuZCB0dXJuIHN0YXRlLlxuICAgICAgICBcbiAgICAgICAgc3dpdGNoICh0aGlzLmdhbWVTdGF0ZSkge1xuICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgdGhpcy5nYW1lU3RhdGVFbnVtLlNFVFVQOlxuXG4gICAgICAgICAgICAgICAgLy8gUGxheWVyIGlzIHBsYWNpbmcgbmV3IGNsb25lcyBpbiB0aGUgZmllbGQuXG4gICAgICAgICAgICAgICAgdmFyIHBsYXllciA9IHRoaXMuZ2V0UGxheWVyQnlTb2NrZXRJRChkYXRhLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICB2YXIgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYocGxheWVyLmdldFBlcnNvbm5lbCgnY2xvbmUnKS5sZW5ndGggPCBwbGF5ZXIuc3RhcnRpbmdDbG9uZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLnBsYWNlQ2xvbmUocGxheWVyLCBkYXRhLngsIGRhdGEueSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgb24gcGVyc29ubmVsIGNvdW50LiBJZiBwZXJzb25uZWwgaXMgYXQgdGhlIHN0YXJ0IGNvdW50LCBzZW5kIG1vZGFsIHRvIHN0YXJ0IGdhbWUuXG4gICAgICAgICAgICAgICAgICAgIGlmKHBsYXllci5nZXRQZXJzb25uZWwoJ2Nsb25lJykubGVuZ3RoID09IHBsYXllci5zdGFydGluZ0Nsb25lQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgncmVxdWVzdCcsIHtjYWxsYmFjazpcIm1vZGFsXCIsIGRldGFpbHM6IHt0eXBlOlwiYXNrU3RhcnRcIn19LCBwbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSB0aGlzLmdhbWVTdGF0ZUVudW0uR0FNRTpcblxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZFBlcnNvbm5lbCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnR1cm5TdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMudHVyblN0YXRlRW51bS5NT1ZFOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgY2FuIG1vdmUgb25lIGNsb25lIHBlciB0dXJuLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm90ZTogVGhlIGFycmF5IG9mIGxlZ2FsIHBlcnNvbm5lbCAoaW4gdGhpcy5hY3RpdmVQbGF5ZXIpIHdhcyBzZW50IGJ5IHJvbGxEaWNlKCkuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAnaGlkZVRpbGVzJywgZGV0YWlsczogbnVsbH0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQZXJzb25uZWwgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRQZXJzb25uZWxCeVBvaW50KHt4OmRhdGEueCwgeTpkYXRhLnl9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkUGVyc29ubmVsICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsb25lIHdhcyBjbGlja2VkLCBzbzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNMZWdhbFBlcnNvbm5lbCA9IHRoaXMuYWN0aXZlUGxheWVyLmNoZWNrUGVyc29ubmVsTW92ZShzZWxlY3RlZFBlcnNvbm5lbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgcGVyc29ubmVsIGlzIGEgXCJiaW9kcm9uZVwiIHR5cGUgQU5EIGNsb25lcyByZW1haW4gaW4gdGhlIFBsYXllci5jdXJyZW50bGVnYWxwaWVjZXMgYXJyYXksIGVtaXQgbW9kYWwgd2FybmluZyB0byBwbGF5ZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xvbmUgbXVzdCBtb3ZlIGFuZCB0aWxlIG11c3QgYmUgdHJpZ2dlcmVkIHByaW9yIHRvIGJpb2Ryb25lIG1vdmVtZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0xlZ2FsUGVyc29ubmVsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlID0gc2VsZWN0ZWRQZXJzb25uZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAtIFNob3cgQ2xvbmVzIGluIGNsaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgVE9ETzogZW1pdCBzb21ldGhpbmcgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9pbnRBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwaSA9IDA7IHBpIDwgdGhpcy5hY3RpdmVQbGF5ZXIuY3VycmVudExlZ2FsUGllY2VzLmxlbmd0aDsgcGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRBcnJheS5wdXNoKHRoaXMuYWN0aXZlUGxheWVyLmN1cnJlbnRMZWdhbFBpZWNlc1twaV0ub3JpZ2luKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50QXJyYXkuY29uY2F0KHRoaXMuYWN0aXZlUGxheWVyLmN1cnJlbnRMZWdhbFBpZWNlc1twaV0ubW92ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAnc2hvd1RpbGVzJywgZGV0YWlsczoge3BvaW50QXJyYXl9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgLSBTaG93IHRoaXMgY2xvbmUncyBtb3ZlcyBpbiBjbGllbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFRPRE86IGVtaXQgc29tZXRoaW5nIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdzaG93VGlsZXMnLCBkZXRhaWxzOiB7cG9pbnRBcnJheX19LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAtIHNob3cgdGhpcyBjbG9uZSBpbiBkaWZmZXJlbnQgY29sb3IgaW4gY2xpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBUT0RPOiBlbWl0IHNvbWV0aGluZyBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAnc2hvd1RpbGVzJywgZGV0YWlsczoge3BvaW50QXJyYXl9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNMZWdhbE1vdmUgPSB0aGlzLmFjdGl2ZVBsYXllci5jaGVja1BlcnNvbm5lbE1vdmUodGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUse3g6ZGF0YS54LCB5OmRhdGEueX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0xlZ2FsTW92ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogZW1pdCBzb21ldGhpbmcgdG8gc2hvdyBjbG9uZXMgdG8gY2xpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAnc2hvd1RpbGVzJywgZGV0YWlsczoge319LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUubW92ZShkYXRhLngsIGRhdGEueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAnbW92ZVBlcnNvbm5lbCcsIGRldGFpbHM6IHt1dWlkOnRoaXMuYWN0aXZlUGxheWVyLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlLnV1aWQsIHg6ZGF0YS54LCB5OmRhdGEueX19LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywge3R5cGU6XCJwZXJzb25uZWxcIiwgZGV0YWlsczoge3V1aWQ6dGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUudXVpZCwgeDpkYXRhLngsIHk6ZGF0YS55fX0sIHRoaXMuZ2V0UGxheWVyT3Bwb25lbnQodGhpcy5hY3RpdmVQbGF5ZXIpLnNvY2tldElEKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xlYXIgbW92ZWQgcGVyc29ubmVsIGZyb20gdGhlIHBsYXllciBhcnJheS4gSWYgbW92ZWQgcGVyc29ubmVsIHdhcyBhIGNsb25lLCByZW1vdmUgQUxMIGNsb25lcyBmcm9tIGFycmF5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllci5wdXJnZUxlZ2FsUGllY2VzKHRoaXMuYWN0aXZlUGxheWVyLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlLCB0cnVlKTsgLy8gMm5kIGFyZzogdHJ1ZSBpcyBwYXNzZWQgZm9yIGNsb25lczsgbnVsbCBmb3IgYmlvZHJvbmVzLlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHVyblN0YXRlKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHRyaWdnZXIgdGlsZSBhbmQgZW1pdCBiYXR0bGUgdGFyZ2V0cyAoZ3VubmVycywgZXRjKSB0byBQbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVRpbGUoe3g6ZGF0YS54LCB5OmRhdGEueX0pOyAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBpZiB0aWxlIGlzIHByb2R1Y3Rpb24sIHN1cmZhY2UsIG9yIGFybW9yeTsgY2hlY2sgZm9yIGJpb2Ryb25lcyBhbmQgbW92ZSBvcmRuYW5jZSwgdGhlbiAoaWYgbm9uZSBhcmUgZm91bmQpIGNoYW5nZSBwbGF5ZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGlsZSA9IHRoaXMuZ2V0VGlsZShkYXRhLngsIGRhdGEueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdGlsZS50eXBlID09IFwicHJvZHVjdGlvblwiICB8fCB0aWxlLnR5cGUgPT0gXCJzdXJmYWNlXCIgfHwgdGlsZS50eXBlID09IFwiYXJtb3J5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aWxlLm5hbWUgPT0gXCJwcm9kUmVwYWlyXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVldWVkVGlsZSA9IHRpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbGUubmFtZSA9PSBcImNoZW1pY2FsUmVhY3RvclwiIHx8IHRpbGUubmFtZSA9PSBcImNoZW1pY2FsUmVhY3RvclR3b1wiIHx8IHRpbGUubmFtZSA9PSBcImFpckZpbHRlclwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVldWVkVGlsZSA9IHRpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbCgnYmlvZHJvbmUnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogc2VuZCBiaW9kcm9uZSBhcnJheSB0byBjbGllbnQgZm9yIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5nZXRPcmRuYW5jZSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBtb3ZlIG9yZG5hbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3RpdmVQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uQUNUSU9OOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgd2lsbCBkZXNpZ25hdGUgZ3VubmVyKHMpIGZvciBmaXJpbmcgYW5kL29yIGFkZGl0aW9uYWwgdGFyZ2V0cywgZGVwZW5kaW5nIG9uIHRoZSBiYXR0bGUgdGlsZSB0eXBlLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGxheWVyIHdpbGwgY29uZmlybSBtb3ZlbWVudCBzZWxlY3Rpb25zIHdpdGggR08hICh1bmxlc3MgcmVwYWlyIG9yIGNvdW50ZXIgZXNwaW9uYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXJyYXkgb2YgZWxpZ2libGUgZ3VubmVycyBzZW50IHZpYSBhY3RpdmF0ZVRpbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVtaXQgYXJyYXkgb2YgZWxpZ2libGUgZ3VubmVycyBhbmQgbnVtYmVyIG9mIHNlbGVjdGFibGUgZ3VubmVycyB0byBQbGF5ZXIuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3Rpb25UaWxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5xdWV1ZWRUaWxlLm5hbWUgPT0gXCJjaGVtaWNhbFJlYWN0b3JcIiB8fCB0aGlzLnF1ZXVlZFRpbGUubmFtZSA9PSBcImNoZW1pY2FsUmVhY3RvclR3b1wiIHx8IHRoaXMucXVldWVkVGlsZS5uYW1lID09IFwiYWlyRmlsdGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25UaWxlID0gdGhpcy5nZXRUaWxlKGRhdGEueCwgZGF0YS55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uVGlsZS5uYW1lID09IFwibG9ja1wiICYmIGFjdGlvblRpbGUuZGFtYWdlZCA9PT0gZmFsc2UgJiYgYWN0aW9uVGlsZS5vY2N1cGllZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUNsb25lKHRoaXMuYWN0aXZlUGxheWVyLCBkYXRhLngsIGRhdGEueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlQ2xvbmVzVG9BZGQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXZhaWxhYmxlQ2xvbmVzVG9BZGQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbCgnYmlvZHJvbmVzJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogc2VuZCBiaW9kcm9uZSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuZ2V0T3JkbmFuY2UoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBNb3ZlIG9yZG5hbmNlIGFuZCBjaGVjayBmb3IgZGFtYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3RpdmVQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5xdWV1ZWRUaWxlLm5hbWUgPT0gXCJjb3VudGVyRXNwaW9uYWdlXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogc3BlY2lhbCBjYXNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnF1ZXVlZFRpbGUubmFtZSA9PSBcInJlcGFpclwiIHx8IHRoaXMucXVldWVkVGlsZS5uYW1lID09IFwicmVwYWlyVHdvXCIgfHwgdGhpcy5xdWV1ZWRUaWxlLm5hbWUgPT0gXCJwcm9kUmVwYWlyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBTcGVjaWFsIGNhc2VzLiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25UaWxlID0gdGhpcy5nZXRUaWxlKGRhdGEueCwgZGF0YS55KS5kYW1hZ2VkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb25UaWxlLmRhbWFnZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uVGlsZS5kYW1hZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlc1JlcGFpcmVkVGhpc1R1cm4rKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3JlcGFpclRpbGUnLCBkZXRhaWxzOiB7eDpkYXRhLngsIHk6ZGF0YS55fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlc1JlcGFpcmVkVGhpc1R1cm4gPT0gMSkgeyAgLy8gVE9ETzogY2hlY2sgZm9yIHJlcGFpclR3b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVzUmVwYWlyZWRUaGlzVHVybiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5nZXRQZXJzb25uZWwoJ2Jpb2Ryb25lcycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHNlbmQgYmlvZHJvbmUgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmdldE9yZG5hbmNlKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogTW92ZSBvcmRuYW5jZSBhbmQgY2hlY2sgZm9yIGRhbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQWN0aXZlUGxheWVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGVyc29ubmVsID0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UGVyc29ubmVsQnlQb2ludCh7eDpkYXRhLngsIHk6ZGF0YS55fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkUGVyc29ubmVsICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIudG9nZ2xlR3VubmVyU2VsZWN0aW9uKHNlbGVjdGVkUGVyc29ubmVsKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdzaG93VGlsZXMnLCBkZXRhaWxzOiB7eDpkYXRhLngsIHk6ZGF0YS55fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAnaGlkZVRpbGVzJywgZGV0YWlsczoge3g6ZGF0YS54LCB5OmRhdGEueX19LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLlRBUkdFVFM6XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBsYXllciB3aWxsIGNob29zZSBhZGRpdGlvbmFsIHRhcmdldHMgaWYgcmVxdWlyZWQgYnkgdGhlIHRpbGUuIEVzcG9pbmFnZSwgZm9yIGluc3RhbmNlLCByZXF1aXJlcyBhIGd1bm5lciBhbmQgYW4gZW5lbXkgY2xvbmUgaW4gdGhlIHNlbGVjdGVkIGd1bm5lcidzIGxpbmUgb2YgZmlyZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBsYXllciB3aWxsIGNvbmZpcm0gdGFyZ2V0cyB3aXRoIEdPIVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRhcmdldCBxdWV1ZWQhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uT1JETkFOQ0U6XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLkVORDpcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQW55IHBvc3QtdHVybiBwcm9jZXNzaW5nIGNhbiBoYXBwZW4gaGVyZS4gT3RoZXJ3aXNlLCB0aGUgdHVybiBtYXkgYWxyZWFkeSBiZSBvdmVyLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR1cm5TdGF0ZSA9IHRoaXMudHVyblN0YXRlRW51bS5ST0xMO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAgICBcbiAgICB9XG5cbiAgICBnbyhkYXRhKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy50dXJuU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLkFDVElPTjpcbiAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgaGFzIGNvbmZpcm1lZCBndW5uZXIgc2VsZWN0aW9uLlxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmdldFNlbGVjdGVkR3VubmVycygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJlV2VhcG9uKHRoaXMucXVldWVkVGlsZSwgdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0U2VsZWN0ZWRHdW5uZXJzKCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBJZiB0YXJnZXRzIGFyZSByZXF1aXJlZCAoaWUgZXNwaW9uYWdlKSBzZW5kIHRoYXQgYXJyYXkgbm93IGFuZCBhZHZhbmNlIHRvIFRBUkdFVFMgYW5kIFJFVFVSTlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IElmIGJpb2Ryb25lcyBleGlzdCwgc2VuZCB0aGF0IGFycmF5IG5vdyBhbmQgYWR2YW5jZSB0byBCSU9EUk9ORVMgYW5kIFJFVFVSTlxuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogSWYgcGxheWVyIGhhcyBvcmRuYW5jZSwgbW92ZSBvcmRuYW5jZS9jaGVjayBkYW1hZ2UgXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLm9yZG5hbmNlQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXBkYXRlZE9yZG5hbmNlID0gdGhpcy5hY3RpdmVQbGF5ZXIubW92ZU9yZG5hbmNlKHRoaXMuY3VycmVudERpY2VWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IENoZWNrIC8gYXBwbHkgZGFtYWdlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOidtb3ZlT3JkbmFuY2UnLCBkZXRhaWxzOnVwZGF0ZWRPcmRuYW5jZX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUFjdGl2ZVBsYXllcigpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uVEFSR0VUUzpcbiAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgaGFzIGNvbmZpcm1lZCBhbGwgdGFyZ2V0cyAodGhpcyB3aWxsIGFwcGx5IHRvIGxpbWl0ZWQgYmF0dGxlIHRpbGVzIGxpa2UgZXNwaW9uYWdlKVxuICAgICAgICAgICAgICAgIC8vIEkgbWF5IGNvbWUgYmFjayB0byB0aGlzIGEgYml0IGxhdGVyLlxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFVwZGF0ZSBjbGllbnQgd2l0aCByZXN1bHRcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLkJJT0RST05FOlxuICAgICAgICAgICAgICAgIC8vIFBsYXllciBoYXMgY29uZmlybWVkIHRoYXQgYmlvZHJvbmUgc2VsZWN0aW9uIChpZiBhbnkpIGlzIGZpbmFsLiBcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBNb3ZlIGJpb2Ryb25lKHMpIGFuZCB3cmVhayBoYXZvay4gXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogYWR2YW5jZSB0dXJuc3RhdGVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLkVORDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9XG5cblx0YWRkTmV3UGxheWVyKHNvY2tldElELCB1dWlkKSB7XG4gICAgICAgIHRoaXMubGFzdFBsYXllcklEKys7XG4gICAgICAgIHZhciBwbGF5ZXIgPSBuZXcgUGxheWVyKHNvY2tldElELCB0aGlzLmxhc3RQbGF5ZXJJRCwgdXVpZCk7XG4gICAgICAgIHRoaXMucGxheWVyc0FycmF5LnB1c2gocGxheWVyKTtcbiAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICd1cGRhdGVQbGF5ZXInLCBkZXRhaWxzOiB7aWQ6IHRoaXMubGFzdFBsYXllcklEfX0sIHNvY2tldElEKTtcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcblx0fVxuXG4gICAgYWRkUGxheWVyKHBsYXllcikge1xuICAgICAgICB0aGlzLnBsYXllcnNBcnJheS5wdXNoKHBsYXllcik7XG4gICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAndXBkYXRlUGxheWVyJywgZGV0YWlsczoge2lkOiBwbGF5ZXIuaWR9fSwgcGxheWVyLnNvY2tldElEKTtcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJTdGF0ZShzdGF0ZSkge1xuICAgICAgICB2YXIgcGxheWVyID0gbnVsbDtcbiAgICAgICAgc3dpdGNoIChzdGF0ZS52YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAncmVzZXQnOiBcbiAgICAgICAgICAgICAgICBwbGF5ZXIgPSB0aGlzLmdldFBsYXllckJ5U29ja2V0SUQoc3RhdGUuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgIHBsYXllci5yZW1vdmVQZXJzb25uZWwobnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJyZW1vdmVBbGxQZXJzb25uZWxcIiwgZGV0YWlsczoge319LCBwbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOiBcbiAgICAgICAgICAgICAgICBwbGF5ZXIgPSB0aGlzLmdldFBsYXllckJ5U29ja2V0SUQoc3RhdGUuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgIHBsYXllci5yZWFkeVRvU3RhcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhciBvcHBvbmVudCA9IHRoaXMuZ2V0UGxheWVyT3Bwb25lbnQocGxheWVyKTtcbiAgICAgICAgICAgICAgICBpZighb3Bwb25lbnQgfHwgIW9wcG9uZW50LnJlYWR5VG9TdGFydCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wcENsb25lcyA9IG9wcG9uZW50LmdldFBlcnNvbm5lbCgnY2xvbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRQbGF5ZXJDbG9uZXMgPSBwbGF5ZXIuZ2V0UGVyc29ubmVsKCdjbG9uZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGlmeSBjdXJyZW50IHBsYXllciBvZiBvcHBvbmVudCBwb3NpdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBsYXllclBheWxvYWQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBvcHBDbG9uZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllclBheWxvYWQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDpvcHBDbG9uZXNbaV0ueCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Om9wcENsb25lc1tpXS55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV1aWQ6b3BwQ2xvbmVzW2ldLnV1aWQsICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB7dHlwZTpcInBlcnNvbm5lbFwiLCBkZXRhaWxzOnBsYXllclBheWxvYWR9LCBwbGF5ZXIuc29ja2V0SUQpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGlmeSBvcHBvbmVudCBvZiBjdXJyZW50IHBsYXllcidzIHBvc2l0aW9uc1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3BwUGF5bG9hZCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjIGluIGN1cnJlbnRQbGF5ZXJDbG9uZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wcFBheWxvYWQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDpjdXJyZW50UGxheWVyQ2xvbmVzW2NdLngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTpjdXJyZW50UGxheWVyQ2xvbmVzW2NdLnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXVpZDpjdXJyZW50UGxheWVyQ2xvbmVzW2NdLnV1aWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHt0eXBlOlwicGVyc29ubmVsXCIsIGRldGFpbHM6b3BwUGF5bG9hZH0sIG9wcG9uZW50LnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3QoJ3VwZGF0ZScsIHt0eXBlOlwicmVzb3VyY2VzXCIsIGFjdGlvbjonaW5pdCd9KTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllciA9IHRoaXMuZ2V0UmFuZG9tUGxheWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwib2ZmZXJEaWNlXCIsIGRldGFpbHM6IHt9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSsrO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihzdGF0ZS52YWx1ZSArIFwiIGlzIG5vdCBhIHZhbGlkIHBsYXllciBzdGF0ZSFcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQbGF5ZXJPcHBvbmVudChwbGF5ZXIpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyc0FycmF5Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGxheWVyc0FycmF5WzBdID09PSBwbGF5ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheVsxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheVswXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZUFjdGl2ZVBsYXllcigpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIuY2xlYXJRdWV1ZXMoKTtcbiAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJ0YWtlRGljZVwiLCBkZXRhaWxzOiB7fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIgPSB0aGlzLmdldFBsYXllck9wcG9uZW50KHRoaXMuYWN0aXZlUGxheWVyKTtcbiAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJvZmZlckRpY2VcIiwgZGV0YWlsczoge319LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgIHRoaXMudHVyblN0YXRlID0gMDtcbiAgICB9XG5cbiAgICBnZXRSYW5kb21QbGF5ZXIoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKV07XG4gICAgfVxuICAgIFxuICAgIGdldFBsYXllckJ5VVVJRCh1dWlkKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyc0FycmF5W2ldLnV1aWQgPT0gdXVpZClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXlbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFxuICAgIGdldFBsYXllckJ5U29ja2V0SUQoaWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnBsYXllcnNBcnJheSkge1xuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXJzQXJyYXlbaV0uc29ja2V0SUQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXlbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldFBsYXllckNvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXkubGVuZ3RoO1xuICAgIH1cblxuICAgIGNoZWNrQXJtcyhwbGF5ZXIpIHtcbiAgICAgICAgcGxheWVyLmFybXNBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpIGluIHBsYXllci5wZXJzb25uZWxBcnJheSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGlsZUFycmF5W3BsYXllci5wZXJzb25uZWxBcnJheVtpXS54XVtwbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueV0udHlwZSA9PSBcImFybW9yeVwiKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLmFybXNBcnJheS5wdXNoKHRoaXMudGlsZUFycmF5W3BsYXllci5wZXJzb25uZWxBcnJheVtpXS54XVtwbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueV0ubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY2hlY2tHdW5uZXJzKHBsYXllcikge1xuICAgICAgICBmb3IgKHZhciBpIGluIHBsYXllci5wZXJzb25uZWxBcnJheSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGlsZUFycmF5W3BsYXllci5wZXJzb25uZWxBcnJheVtpXS54XVtwbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueV0udHlwZSA9PSBcInN1cmZhY2VcIikge1xuICAgICAgICAgICAgICAgIHBsYXllci5wZXJzb25uZWxBcnJheVtpXS5pc0d1bm5lciA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBsYXllci5wZXJzb25uZWxBcnJheVtpXS5pc0d1bm5lciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhpc3RzUGxheWVyVVVJRCh1dWlkKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyc0FycmF5W2ldLnV1aWQgPT0gdXVpZClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAgICBcblxuICAgIGFjdGl2YXRlVGlsZShkYXRhKSB7XG4gICAgICAgIHZhciB0aWxlID0gdGhpcy5nZXRUaWxlKGRhdGEueCwgZGF0YS55KTtcbiAgICAgICAgdmFyIHJlbWFpbmluZ0NvdW50ID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaCAodGlsZS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwic3VyZmFjZVwiOiBcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllci5nZXRQZXJzb25uZWxCeVBvaW50KHt4OmRhdGEueCwgeTpkYXRhLnl9KS5pc0d1bm5lciA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicHJvZHVjdGlvblwiOlxuXG4gICAgICAgICAgICAgICAgLy8gVGhyZWUgc3BlY2lhbCBjYXNlczogXG4gICAgICAgICAgICAgICAgLy8gIC0gU2Vuc29yIENhYmluIGRvZXMgbm90IGNvc3Qgb3IgeWllbGQgYW55dGhpbmcuIFdlIGNhbiBoYW5kbGUgdGhpcyBpbW1lZGlhdGVseSlcbiAgICAgICAgICAgICAgICAvLyAgLSBQcm9kdWN0aW9uIFJlcGFpciBjb3N0cywgYnV0IHRyaWdnZXJzIGEgcmVwYWlyIGp1c3QgbGlrZSB0aGUgUmVwYWlyIGJhdHRsZSB0aWxlIChXZSBuZWVkIHRvIGNoZWNrIGlmIHdlIGNhbiBhZmZvcmQpXG4gICAgICAgICAgICAgICAgLy8gIC0gTnVjbGVhciBBcm1vcnkgcHJvZHVjZXMgYSBudWtlIHdoaWNoIHJlbGllcyBvbiBvcmRuYW5jZSB3aGljaCBoYXMgbm90IGJlZW4gYnVpbHQgeWV0XG5cbiAgICAgICAgICAgICAgICBpZih0aWxlLm5hbWUgPT0gXCJzZW5zb3JDYWJpblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBzZW5zb3IgY2FiaW4gc28ganVzdCB0cmlnZ2VyIHRoZSBhY3Rpb24gYW5kIG1vdmUgb24uXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2Vuc29yIGNhYmlucyBhcmUgZnJlZSFcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5jaGVja1Jlc291cmNlKHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlW2ldLCB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0Q291bnRbaV0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FuJ3QgYWZmb3JkIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbid0IGFmZm9yZCBpdCFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuY2hlY2tSZXNvdXJjZSh0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZFR5cGVbal0sIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkQ291bnRbal0sIHRydWUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm8gcm9vbSB0byBzdG9yZSBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYW4ndCBhY2NlcHQgdGhlIHlpZWxkIGN1eiB3ZSBnb3Qgbm8gcm9vbSFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGlsZS5uYW1lID09IFwiY2hlbWljYWxSZWFjdG9yXCIgfHwgdGlsZS5uYW1lID09IFwiY2hlbWljYWxSZWFjdG9yVHdvXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlQ2xvbmVzVG9BZGQgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRSZXNvdXJjZUNvdW50KCdveHlnZW4nKSArIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkQ291bnRbMF0gLSB0aGlzLmFjdGl2ZVBsYXllci5nZXRQZXJzb25uZWwoJ2Nsb25lJykubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIHRpbGUubmFtZSA9PSBcImFpckZpbHRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlQ2xvbmVzVG9BZGQgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRSZXNvdXJjZUNvdW50KCdveHlnZW4nKSArIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkQ291bnRbMF0gLSB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0Q291bnRbMF0gLSB0aGlzLmFjdGl2ZVBsYXllci5nZXRQZXJzb25uZWwoJ2Nsb25lJykubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgaW4gdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nQ291bnQgPSB0aGlzLmFjdGl2ZVBsYXllci5zcGVuZFJlc291cmNlKHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlW2tdLCB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0Q291bnRba10pO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllciBcIiArIHRoaXMuYWN0aXZlUGxheWVyLmlkICsgXCIgc3BlbnQgXCIgKyByZW1haW5pbmdDb3VudCArIFwiIFwiICsgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGVba10gKyBcIi4gVGhpcyBsZWF2ZXMgdGhlbSB3aXRoIFwiICsgdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UmVzb3VyY2VDb3VudCh0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZVtrXSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGwgaW4gdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ0NvdW50ID0gdGhpcy5hY3RpdmVQbGF5ZXIuYWNjZXB0UmVzb3VyY2UodGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRUeXBlW2xdLCB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZENvdW50W2xdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbWFpbmluZ0NvdW50KSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIFwiICsgdGhpcy5hY3RpdmVQbGF5ZXIuaWQgKyBcIiBhZGRlZCBcIiArIHJlbWFpbmluZ0NvdW50ICsgXCIgXCIgKyB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZFR5cGVbbF0gKyBcIi4gVGhpcyBsZWF2ZXMgdGhlbSB3aXRoIFwiICsgdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UmVzb3VyY2VDb3VudCh0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZFR5cGVbbF0pKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGlsZS5uYW1lID09IFwib3h5Z2VuXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogQ2hlY2sgaWYgb3h5Z2VuIGlzIGdyZWF0ZXIgdGhhbiB0aGUgbnVtYmVyIG9mIGNsb25lcy4gSWYgc28sIGFkZCBhIGNsb25lLlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UmVzb3VyY2VDb3VudCgnb3h5Z2VuJykgPiB0aGlzLmFjdGl2ZVBsYXllci5nZXRQZXJzb25uZWwoJ2Nsb25lJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVldWVkVGlsZSA9IHRpbGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGlsZS5uYW1lID09IFwicHJvZFJlcGFpclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIHJlcGFpciBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWV1ZWRUaWxlID0gdGlsZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyAoXCIrKysrKysrXCIpO1xuXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHBsYXllciB0byB0aGVpciBuZXcgd2FyZWhvdXNlIHZhbHVlc1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIFwiYXJtb3J5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0FybXModGhpcy5hY3RpdmVQbGF5ZXIpO1xuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBwbGF5ZXIncyBwZXJzb25uZWwgdG8gYmUgYXJtZWRcbiAgICAgICAgICAgICAgICAvLyBNYXliZSBoYXZlIHRocmVlIG92ZXJsYXBwaW5nIHNwcml0ZXMuIERyaWxsLCBDYW5ub24sIEV4cGxvc2l2ZXM/XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJiYXR0bGVcIjpcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRpbGUubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2hpZWxkXCI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJiaW9kcm9uZVwiOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibGFzZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRoZXJtaXRlXCI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzYXRlbGxpdGVcIjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJvY2tldFwiOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZXNwaW9uYWdlXCI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0YWtlb3ZlclwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy50dXJuU3RhdGUrKzsgLy8gU2V0IHN0YXRlIHRvIEFDVElPTi5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50UmVzb3VyY2VDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFJlc291cmNlQWZmb3JkYWJpbGl0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWZmb3JkYWJsZVJvdW5kcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVHdW5uZXJzID0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0R3VubmVycygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlR3VubmVycy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBObyBndW5uZXJzISBHZXQgb3V0IG9mIGhlcmUuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG0gaW4gdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VDb3VudCA9IHRoaXMuYWN0aXZlUGxheWVyLmdldFJlc291cmNlQ291bnQodGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGVbbV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZXNvdXJjZUFmZm9yZGFiaWxpdHkgPSBjdXJyZW50UmVzb3VyY2VDb3VudCAvIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlc291cmNlQWZmb3JkYWJpbGl0eSA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBOb3QgZW5vdWdoIG9mIGEgcmVzb3VyY2UhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWZmb3JkYWJsZVJvdW5kcyA9PT0gbnVsbCB8fCBjdXJyZW50UmVzb3VyY2VBZmZvcmRhYmlsaXR5IDwgYWZmb3JkYWJsZVJvdW5kcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZmZvcmRhYmxlUm91bmRzID0gY3VycmVudFJlc291cmNlQWZmb3JkYWJpbGl0eTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlbGwgcGxheWVyIHRoZXkgY2FuIGFmZm9yZCBcIiArIGFmZm9yZGFibGVSb3VuZHMgKyBcIiBndW5uZXIocylcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlZFRpbGUgPSB0aWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogZW1pdCBzaG93VGlsZXMoKSB3aXRoIGFycmF5IG9mIGxlZ2FsIGd1bm5lcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwib2ZmZXJHdW5uZXJzXCIsIGRldGFpbHM6e2d1bm5lcnM6YWN0aXZlR3VubmVyc319LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWFkeSB0byBzZWxlY3QgZ3VubmVycyEgVGhpcyB3aWxsIHRha2UgcGxhY2Ugb24gdGhlIG5leHQgbGVnYWwgY2xpY2sgZXZlbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb3VudGVyRXNwaW9uYWdlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb29rIGZvciBjbG9uZXMgdGhhdCBhcmUgb3Bwb25lbnQncyBzcGllZFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJlcGFpclwiOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmVwYWlyVHdvXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlZFRpbGUgPSB0aWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3VycmVudFJlc291cmNlQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFyIGFjdGl2ZURhbWFnZWRUaWxlcyA9IHRoaXMuZ2V0RGFtYWdlZFRpbGVzKHRoaXMuYWN0aXZlUGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChhY3RpdmVEYW1hZ2VkVGlsZXMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC8vIGNhbGN1bGF0ZSBjb3N0IG9mIHJlcGFpclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yICh2YXIgbiBpbiB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGN1cnJlbnRSZXNvdXJjZUNvdW50ID0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UmVzb3VyY2VDb3VudCh0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZVtuXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGN1cnJlbnRSZXNvdXJjZUNvdW50IDwgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdENvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybjsgLy8gTm90IGVub3VnaCBvZiBhIHJlc291cmNlIVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRlbGwgcGxheWVyIHRoYXQgdGhleSBjYW4gYWZmb3JkIHRvIGZpeCB1cCB0aGUgc3RhdGlvbiFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUaWxlT2NjdXBhbnQocG9pbnQpIHtcbiAgICAgICAgdmFyIG9yZG5hbmNlLCBwZXJzb25uZWw7XG4gICAgICAgIGZvciAodmFyIHBpID0gMDsgcGkgPCB0aGlzLnBsYXllcnNBcnJheS5sZW5ndGg7IHBpKyspIHtcbiAgICAgICAgICAgIG9yZG5hbmNlID0gdGhpcy5wbGF5ZXJzQXJyYXlbcGldLmdldE9yZG5hbmNlQnlQb2ludChwb2ludCk7XG4gICAgICAgICAgICBwZXJzb25uZWwgPSB0aGlzLnBsYXllcnNBcnJheVtwaV0uZ2V0UGVyc29ubmVsQnlQb2ludChwb2ludCk7XG4gICAgICAgICAgICBpZiAob3JkbmFuY2UgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yZG5hbmNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwZXJzb25uZWwgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlcnNvbm5lbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZVdlYXBvbih3ZWFwb25UaWxlLCBndW5uZXJBcnJheSkge1xuICAgICAgICBpZiAoZ3VubmVyQXJyYXkubGVuZ3RoIDw9IDAgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGd1bm5lckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgb3JkbmFuY2VQb2ludCA9IHt4Omd1bm5lckFycmF5W2ldLngsIHk6Z3VubmVyQXJyYXlbaV0ueX07XG4gICAgICAgICAgICB2YXIgaW1wYWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBvcmRVVUlEO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHdlYXBvblRpbGUubmFtZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJsYXNlclwiOlxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFRpbGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50T2NjdXBhbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpbXBhY3RlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5pZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkbmFuY2VQb2ludC54Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZG5hbmNlUG9pbnQueC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbGUgPSB0aGlzLmdldFRpbGUob3JkbmFuY2VQb2ludC54LCBvcmRuYW5jZVBvaW50LnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjdXJyZW50VGlsZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNwYWNlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN1cmZhY2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUaWxlLm9jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50T2NjdXBhbnQgPSB0aGlzLmdldFRpbGVPY2N1cGFudChvcmRuYW5jZVBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLnJlbW92ZShjdXJyZW50T2NjdXBhbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbGUub2NjdXBpZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcGFjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlvdSBhcmUgaW4gdGhlIG9wcG9uZW50IG1pbmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGlsZS5vY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9jY3VwYW50ID0gdGhpcy5nZXRUaWxlT2NjdXBhbnQob3JkbmFuY2VQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllci5yZW1vdmVQZXJzb25uZWwoY3VycmVudE9jY3VwYW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGVtaXQgZGVhdGggYW5pbWF0aW9uIHRvIGNsaWVudHMuIChtYXliZSBqdXN0IGFkZCB0aGF0IHRvIHRoZSByZW1vdmVQZXJzb25uZWwoKT8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcInJlbW92ZVBlcnNvbm5lbFwiLCBkZXRhaWxzOmN1cnJlbnRPY2N1cGFudH0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlLm9jY3VwaWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBhY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFRpbGUuZGFtYWdlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGlsZS5kYW1hZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwiZGFtYWdlVGlsZVwiICxkZXRhaWxzOm9yZG5hbmNlUG9pbnR9LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBhY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzaGllbGRcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmlvZHJvbmVcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwic2F0ZWxsaXRlXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcInJvY2tldFwiOlxuICAgICAgICAgICAgICAgICAgICBpZiAod2VhcG9uVGlsZS5uYW1lID09IFwic2hpZWxkXCIgfHwgd2VhcG9uVGlsZS5uYW1lID09IFwic2F0ZWxsaXRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5pZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkbmFuY2VQb2ludC54ICs9IHRoaXMuY3VycmVudERpY2VWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkbmFuY2VQb2ludC54IC09IHRoaXMuY3VycmVudERpY2VWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGlsZSA9IHRoaXMuZ2V0VGlsZShvcmRuYW5jZVBvaW50LngsIG9yZG5hbmNlUG9pbnQueSk7XG4gICAgICAgICAgICAgICAgICAgIG9yZFVVSUQgPSB1dWlkKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLmFkZE9yZG5hbmNlKHdlYXBvblRpbGUubmFtZSwgb3JkbmFuY2VQb2ludCwgb3JkVVVJRCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwiYWRkT3JkbmFuY2VcIiwgZGV0YWlsczp7dHlwZTp3ZWFwb25UaWxlLm5hbWUsIHBsYXllcklEOiB0aGlzLmFjdGl2ZVBsYXllci5pZCwgcG9pbnQ6b3JkbmFuY2VQb2ludCwgdXVpZDpvcmRVVUlEfX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRoZXJtaXRlXCI6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5pZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRuYW5jZVBvaW50LnggPSAzMSAtIHRoaXMuY3VycmVudERpY2VWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZG5hbmNlUG9pbnQueCA9IHRoaXMuY3VycmVudERpY2VWYWx1ZSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbGUgPSB0aGlzLmdldFRpbGUob3JkbmFuY2VQb2ludC54LCBvcmRuYW5jZVBvaW50LnkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFRpbGUuZGFtYWdlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGlsZS5kYW1hZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwiZGFtYWdlVGlsZVwiICxkZXRhaWxzOm9yZG5hbmNlUG9pbnR9LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgaXMgYSBwcm9ibGVtIHdpdGggdGhhdCB3ZWFwb25UaWxlIGFyZ3VtZW50XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjsgXG4gICAgICAgIC8vIHN3aXRjaCAod2VhcG9uVGlsZS5uYW1lKSB7XG4gICAgICAgIC8vICAgICBjYXNlIFwiZXNwaW9uYWdlXCI6XG4gICAgICAgIC8vICAgICBjYXNlIFwidGFrZW92ZXJcIjpcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIGlzIGEgcHJvYmxlbSB3aXRoIHRoYXQgd2VhcG9uVGlsZSBhcmd1bWVudFwiKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGdldExvY2tzKHBsYXllcikge1xuICAgICAgICB2YXIgcmV0dXJuQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgYyBpbiB0aGlzLnRpbGVBcnJheSkge1xuICAgICAgICAgICAgZm9yICh2YXIgciBpbiB0aGlzLnRpbGVBcnJheVtjXSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVBcnJheVtjXVtyXS5uYW1lID09IFwibG9ja1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuaWQgPT0gMSAmJiBjIDwgMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMudGlsZUFycmF5W2NdW3JdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyLmlkID09IDIgJiYgYyA+IDE4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLnRpbGVBcnJheVtjXVtyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMudGlsZUFycmF5W2NdW3JdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XG4gICAgfVxuXG4gICAgZ2V0RGFtYWdlZFRpbGVzKHBsYXllcikge1xuICAgICAgICB2YXIgcmV0dXJuQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgYyBpbiB0aGlzLnRpbGVBcnJheSkge1xuICAgICAgICAgICAgZm9yICh2YXIgciBpbiB0aGlzLnRpbGVBcnJheVtjXSkge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5pZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYyA8IDEyICYmIHRoaXMudGlsZUFycmF5W2NdW3JdLmRhbWFnZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMudGlsZUFycmF5W2NdW3JdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYyA+IDE4ICYmIHRoaXMudGlsZUFycmF5W2NdW3JdLmRhbWFnZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMudGlsZUFycmF5W2NdW3JdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlQXJyYXlbY11bcl0uZGFtYWdlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLnRpbGVBcnJheVtjXVtyXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcbiAgICB9XG4gICAgXG4gICAgcGxhY2VDbG9uZShwbGF5ZXIsIHgsIHkpIHtcblxuICAgICAgICAvLyBBdHRlbXB0IHRvIHBsYWNlIGNsb25lc1xuICAgICAgICAvLyBJZiB0aGUgZ2FtZXN0YXRlIGlzIFNFVFVQLCBjbG9uZXMgY2FuIGdvIGludG8gYW55IHVub2NjdXBpZWQsIHBsYXllci1vd25lZCwgYmF0dGxlLCBwcm9kdWN0aW9uLCBsb2NrLCBvciBhcm1vcnkgdGlsZS5cbiAgICAgICAgLy8gSWYgdGhlIGdhbWVzdGF0ZSBpcyBHQU1FLCBjbG9uZXMgY2FuIG9ubHkgZ28gaW50byB1bm9jY3VwaWVkLCBwbGF5ZXItb3duZWQsIGxvY2tzLlxuICAgICAgICAvLyBSRVRVUk4gdHJ1ZSBvciBmYWxzZSBmb3Igc3VjY2VzcyBvciBmYWlsdXJlLlxuICAgICAgICAvLyBJIHNob3VsZCByZWZhY3RvciB0aGlzLCBidXQgSSdtIHRpcmVkLlxuXG4gICAgICAgIGlmICh0eXBlb2YgcGxheWVyID09PSAndW5kZWZpbmVkJyB8fCBwbGF5ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxlY3RlZFRpbGUgPSB0aGlzLmdldFRpbGUoeCwgeSk7XG4gICAgICAgIHZhciBjbG9uZSwgY2xvbmVVVUlEO1xuXG4gICAgICAgIGlmIChwbGF5ZXIuaWQgIT0gc2VsZWN0ZWRUaWxlLm93bmVyIHx8IHNlbGVjdGVkVGlsZS5vY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgZ2FtZXN0YXRlIGlzIFNFVFVQXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gdGhpcy5nYW1lU3RhdGVFbnVtLlNFVFVQKSB7XG4gICAgICAgICAgICBpZihzZWxlY3RlZFRpbGUudHlwZSA9PSBcImxvY2tcIiB8fCBzZWxlY3RlZFRpbGUudHlwZSA9PSBcImJhdHRsZVwiIHx8IHNlbGVjdGVkVGlsZS50eXBlID09IFwiYXJtb3J5XCIgfHwgc2VsZWN0ZWRUaWxlLnR5cGUgPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBjbG9uZVVVSUQgPSB1dWlkKCk7XG4gICAgICAgICAgICAgICAgLy92YXIgdXVpZCA9IHJlcXVpcmUoJ3V1aWQvdjQnKSgpO1xuICAgICAgICAgICAgICAgIGNsb25lID0gcGxheWVyLmFkZFBlcnNvbm5lbCgnY2xvbmUnLCB4LCB5LCBjbG9uZVVVSUQpO1xuICAgICAgICAgICAgICAgIGlmIChjbG9uZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0FybXMocGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUaWxlLm9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJhZGRDbG9uZVwiLCBkZXRhaWxzOiB7eDp4LCB5OnksIHBsYXllcklEOiBwbGF5ZXIuaWQsIHV1aWQ6Y2xvbmVVVUlEfX0sIHBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBnYW1lc3RhdGUgaXMgR0FNRVxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IHRoaXMuZ2FtZVN0YXRlRW51bS5HQU1FKSB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRUaWxlLnR5cGUgPT0gXCJsb2NrXCIpIHtcbiAgICAgICAgICAgICAgICBjbG9uZVVVSUQgPSB1dWlkKCk7XG4gICAgICAgICAgICAgICAgLy92YXIgdXVpZCA9IHJlcXVpcmUoJ3V1aWQvdjQnKSgpO1xuICAgICAgICAgICAgICAgIGNsb25lID0gcGxheWVyLmFkZFBlcnNvbm5lbCgnY2xvbmUnLCB4LCB5LCBjbG9uZVVVSUQpO1xuICAgICAgICAgICAgICAgIGlmIChjbG9uZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0FybXMocGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUaWxlLm9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJhZGRDbG9uZVwiLCBkZXRhaWxzOiB7eDp4LCB5OnksIHBsYXllcklEOiBwbGF5ZXIuaWQsIHV1aWQ6Y2xvbmVVVUlEfX0sIHBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgY3JlYXRlVGlsZUFycmF5KCkge1xuICAgICAgICB2YXIgdGlsZUpTT04gPSByZXF1aXJlKCcuLi8uLi9hc3NldHMvdGlsZURldGFpbC5qc29uJyk7XG5cbiAgICAgICAgZm9yKHZhciBjID0gMDsgYyA8IHRoaXMudGlsZUNvbHVtbnM7IGMrKykge1xuICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbY10gPSBbXTtcbiAgICAgICAgICAgIGZvcih2YXIgciA9IDA7IHIgPCB0aGlzLnRpbGVSb3dzOyByKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjXVtyXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDpjLFxuICAgICAgICAgICAgICAgICAgICB5OnJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRpbGVKU09OKSB7XG4gICAgICAgICAgICBpZiAoIXRpbGVKU09OLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgb2JqID0gdGlsZUpTT05ba2V5XTtcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgLy8gc2tpcCBsb29wIGlmIHRoZSBwcm9wZXJ0eSBpcyBmcm9tIHByb3RvdHlwZVxuICAgICAgICAgICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBsb2NhdGlvbkNvdW50ID0gb2JqW3Byb3BdLmxvY2F0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2NhdGlvbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb29yZHMgPSBvYmpbcHJvcF0ubG9jYXRpb25zW2ldLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBjb29yZHNbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gY29vcmRzWzFdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0uZGFtYWdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5vY2N1cGllZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50eXBlID0gb2JqW3Byb3BdLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4IDwgOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0ub3duZXIgPSAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHggPiAyMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0ub3duZXIgPSAyO1xuICAgICAgICAgICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy50aWxlQXJyYXlbeF1beV0gIT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5uYW1lID0gb2JqW3Byb3BdLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHggKyBcIjpcIiArIHkgKyBcIiBub3QgZm91bmQhXCIpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcF0ucHJvcGVydGllcyAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0ucHJvcGVydGllcyA9IG9ialtwcm9wXS5wcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUaWxlKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZUFycmF5W3hdW3ldO1xuICAgIH1cblxuICAgIGdldExlZ2FsUGllY2VzKCkge1xuICAgICAgICB2YXIgcGVyc29ubmVsQXJyYXkgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRQZXJzb25uZWwoKTtcbiAgICAgICAgdmFyIHJldHVybkFycmF5ID0gW107XG4gICAgICAgIHZhciBtb3Zlc0FycmF5ID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSBpbiBwZXJzb25uZWxBcnJheSkge1xuICAgICAgICAgICAgbW92ZXNBcnJheSA9IHRoaXMuZ2V0TGVnYWxNb3ZlcyhwZXJzb25uZWxBcnJheVtpXSwgdGhpcy5jdXJyZW50RGljZVZhbHVlLCB7eDpwZXJzb25uZWxBcnJheVtpXS54LCB5OnBlcnNvbm5lbEFycmF5W2ldLnl9KTtcbiAgICAgICAgICAgIGlmIChtb3Zlc0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHt0eXBlOnBlcnNvbm5lbEFycmF5W2ldLnR5cGUsb3JpZ2luOnt4OnBlcnNvbm5lbEFycmF5W2ldLngseTpwZXJzb25uZWxBcnJheVtpXS55fSwgdXVpZDpwZXJzb25uZWxBcnJheVtpXS51dWlkLCBtb3Zlczptb3Zlc0FycmF5fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVybkFycmF5O1xuICAgIH1cblxuICAgIGdldENvb3JkRnJvbURpcmVjdGlvbihvcmlnaW5Db29yZCxkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIGRpcj17Tk9SVEg6e3g6MCx5Oi0xfSxFQVNUOnt4OjEseTowfSxTT1VUSDp7eDowLHk6MX0sV0VTVDp7eDotMSx5OjB9fTtcbiAgICAgICAgXG4gICAgICAgIHZhciBvYmogPSB7eDoocGFyc2VJbnQob3JpZ2luQ29vcmQueCkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS54KSksIHk6KHBhcnNlSW50KG9yaWdpbkNvb3JkLnkpICsgcGFyc2VJbnQoZGlyW2RpcmVjdGlvbl0ueSkpfTtcbiAgICAgICAgaWYob2JqLnggPCAwIHx8IG9iai54ID4gMzB8fCBvYmoueSA8IDAgfHwgb2JqLnkgPiAyMCkgXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB7eDoocGFyc2VJbnQob3JpZ2luQ29vcmQueCkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS54KSksIHk6KHBhcnNlSW50KG9yaWdpbkNvb3JkLnkpICsgcGFyc2VJbnQoZGlyW2RpcmVjdGlvbl0ueSkpfTsgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBnZXRMZWdhbE1vdmVzKGdhbWVQaWVjZVR5cGUsIG1vdmVzLCBjdXJyZW50Q29vcmQsIHByZXZpb3VzQ29vcmQpe1xuICAgICAgICBpZiAobW92ZXMgPCAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSWxsZWdhbCBtb3ZlIG51bWJlciEgVGhpcyBjb3VsZCByZXN1bHQgaW4gaW5maW5pdGUgbG9vcC5cIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxlZ2FsTW92ZXMgPSBbXTtcbiAgICAgICAgdmFyIHJldHVybkFycmF5ID0gW107XG4gICAgICAgIHZhciBuZXh0TW92ZVRvQ2hlY2sgPSBudWxsO1xuICAgICAgICB2YXIgbmV4dFRpbGVUb0NoZWNrID0gbnVsbDtcbiAgICAgICAgbW92ZXMtLTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvY2Vzcy5tZW1vcnlVc2FnZSgpLmhlYXBVc2VkKTtcblxuICAgICAgICBpZiAodHlwZW9mIHByZXZpb3VzQ29vcmQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2YXIgbG9ja3MgPSB0aGlzLmdldExvY2tzKHRoaXMuYWN0aXZlUGxheWVyKTtcbiAgICAgICAgICAgIHZhciBpc0xvY2sgPSBmYWxzZTtcblxuICAgICAgICAgICAgZm9yICh2YXIgbCBpbiBsb2Nrcykge1xuICAgICAgICAgICAgICAgIGlmIChsb2Nrc1tsXS54ID09IGN1cnJlbnRDb29yZC54ICYmIGxvY2tzW2xdLnkgPT0gY3VycmVudENvb3JkLnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNMb2NrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc0xvY2sgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIGxvY2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q29vcmQueCA9PSBsb2Nrc1tpXS54ICYmIGN1cnJlbnRDb29yZC55ID09IGxvY2tzW2ldLnkpIHsgY29udGludWU7IH0gLy8gZG9uJ3QgaW5jbHVkZSB0aGUgbG9jayB5b3UncmUgc2l0dGluZyBvblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlQXJyYXlbbG9ja3NbaV0ueF1bbG9ja3NbaV0ueV0ub2NjdXBpZWQgPT09IHRydWUpIHsgY29udGludWU7IH0gLy8gZG9uJ3QgaW5jbHVkZSBsb2NrIHRoYXQgb3RoZXJzIGFyZSBzaXR0aW5nIG9uXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlcyA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5ID0gcmV0dXJuQXJyYXkuY29uY2F0KHRoaXMuZ2V0TGVnYWxNb3ZlcyhnYW1lUGllY2VUeXBlLCBtb3Zlcywge3g6bG9ja3NbaV0ueCwgeTpsb2Nrc1tpXS55fSwgY3VycmVudENvb3JkKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKGxvY2tzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjIGluIHJldHVybkFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXR1cm5BcnJheVtjXS54ICE9PSBjdXJyZW50Q29vcmQueCB8fCByZXR1cm5BcnJheVtjXS55ICE9PSBjdXJyZW50Q29vcmQueSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdhbE1vdmVzLnB1c2gocmV0dXJuQXJyYXlbY10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciBkaXJlY3Rpb24gaW4gdGhpcy5kaXJlY3Rpb25FbnVtKSB7XG4gICAgICAgICAgICBuZXh0TW92ZVRvQ2hlY2sgPSB0aGlzLmdldENvb3JkRnJvbURpcmVjdGlvbihjdXJyZW50Q29vcmQsIGRpcmVjdGlvbik7XG4gICAgICAgICAgICBpZihuZXh0TW92ZVRvQ2hlY2sgPT09IGZhbHNlKSB7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG5leHRUaWxlVG9DaGVjayA9IHRoaXMudGlsZUFycmF5W25leHRNb3ZlVG9DaGVjay54XVtuZXh0TW92ZVRvQ2hlY2sueV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChuZXh0VGlsZVRvQ2hlY2suZGFtYWdlZCA9PT0gdHJ1ZSkgeyBjb250aW51ZTsgfVxuICAgICAgICAgICAgaWYgKG5leHRUaWxlVG9DaGVjay50eXBlID09PSBcInNwYWNlXCIpIHsgY29udGludWU7IH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrV2FsbCh0aGlzLmRpcmVjdGlvbkVudW1bZGlyZWN0aW9uXSwgY3VycmVudENvb3JkKSA9PT0gZmFsc2UpIHsgY29udGludWU7IH1cblxuICAgICAgICAgICAgaWYoKHR5cGVvZiBwcmV2aW91c0Nvb3JkID09PSAndW5kZWZpbmVkJykgfHwgKCh0eXBlb2YgcHJldmlvdXNDb29yZCAhPT0gJ3VuZGVmaW5lZCcpICYmIChKU09OLnN0cmluZ2lmeShuZXh0TW92ZVRvQ2hlY2spICE9PSBKU09OLnN0cmluZ2lmeShwcmV2aW91c0Nvb3JkKSkgKSkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRpbGUgaXMgb2NjdXBpZWRcbiAgICAgICAgICAgICAgICBpZiAobW92ZXMgPT09IDApe1xuICAgICAgICAgICAgICAgICAgICBpZihuZXh0VGlsZVRvQ2hlY2sub2NjdXBpZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWdhbE1vdmVzLnB1c2gobmV4dE1vdmVUb0NoZWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkgPSByZXR1cm5BcnJheS5jb25jYXQodGhpcy5nZXRMZWdhbE1vdmVzKGdhbWVQaWVjZVR5cGUsIG1vdmVzLCBuZXh0TW92ZVRvQ2hlY2ssIGN1cnJlbnRDb29yZCkpO1xuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGluZGV4IGluIHJldHVybkFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXR1cm5BcnJheVtpbmRleF0ueCAhPT0gY3VycmVudENvb3JkLnggfHwgcmV0dXJuQXJyYXlbaW5kZXhdLnkgIT09IGN1cnJlbnRDb29yZC55KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2FsTW92ZXMucHVzaChyZXR1cm5BcnJheVtpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWdhbE1vdmVzO1xuICAgIH1cblxuICAgIGNoZWNrV2FsbChkaXJlY3Rpb24sIGN1cnJlbnRDb29yZGluYXRlKSB7XG4gICAgICAgIHRoaXMud2FsbEdyaWQgPSByZXF1aXJlKCcuLi8uLi9hc3NldHMvd2FsbEdyaWQuanNvbicpO1xuXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKXtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5kaXJlY3Rpb25FbnVtLk5PUlRIOiAvLyBVUFxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCh0aGlzLndhbGxHcmlkLmdyaWRbY3VycmVudENvb3JkaW5hdGUueF1bY3VycmVudENvb3JkaW5hdGUueV0mdGhpcy5kaXJlY3Rpb25FbnVtLk5PUlRIKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uU09VVEg6IC8vIERPV05cbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy53YWxsR3JpZC5ncmlkW2N1cnJlbnRDb29yZGluYXRlLnhdW2N1cnJlbnRDb29yZGluYXRlLnldJnRoaXMuZGlyZWN0aW9uRW51bS5TT1VUSCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5kaXJlY3Rpb25FbnVtLkVBU1Q6IC8vIFJJR0hUXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uRUFTVCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5kaXJlY3Rpb25FbnVtLldFU1Q6IC8vIExFRlRcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy53YWxsR3JpZC5ncmlkW2N1cnJlbnRDb29yZGluYXRlLnhdW2N1cnJlbnRDb29yZGluYXRlLnldJnRoaXMuZGlyZWN0aW9uRW51bS5XRVNUKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBcbiAgICByb2xsRGljZShkYXRhKSB7XG4gICAgICAgIGlmKHRoaXMudHVyblN0YXRlID09IHRoaXMudHVyblN0YXRlRW51bS5ST0xMICYmIHRoaXMuZ2FtZVN0YXRlID09IHRoaXMuZ2FtZVN0YXRlRW51bS5HQU1FICYmIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEID09IGRhdGEuc29ja2V0SUQpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERpY2VWYWx1ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpICsgMTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLmN1cnJlbnRMZWdhbFBpZWNlcyA9IHRoaXMuZ2V0TGVnYWxQaWVjZXMoKTtcblxuICAgICAgICAgICAgLy8gUGxheWVyIHJlY2VpdmVzIGFycmF5IG9mIGxlZ2FsIHBlcnNvbm5lbCAoY2xvbmVzKSBhbmQgdHVybiBzdGF0ZSBhZHZhbmNlcyB0byBNT1ZFXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcImRpY2VSb2xsZWRcIiwgZGV0YWlsczoge3ZhbHVlOnRoaXMuY3VycmVudERpY2VWYWx1ZSwgZ2FtZVBpZWNlczp0aGlzLmFjdGl2ZVBsYXllci5jdXJyZW50TGVnYWxQaWVjZXN9fSwgZGF0YS5zb2NrZXRJRCk7XG4gICAgICAgICAgICB0aGlzLnR1cm5TdGF0ZSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldChkYXRhKSB7XG4gICAgICAgIGlmKHR5cGVvZihkYXRhLnByb3BlcnR5KSA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZXNwb25zZScsIHtkZXRhaWxzOnRoaXNbZGF0YS5wcm9wZXJ0eV19LCBkYXRhLnNvY2tldElEKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBlbWl0KG1zZywgZGF0YSwgc29ja2V0SUQpIHtcbiAgICAgICAgaWYobXNnID09IFwicmVzcG9uc2VcIiB8fCBtc2cgPT0gXCJyZXF1ZXN0XCIgfHwgbXNnID09IFwidXBkYXRlXCIpIHtcbiAgICAgICAgICAgIGlmKHR5cGVvZihzb2NrZXRJRCkgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBTb2NrZXRJRCBmb3VuZCFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pby5zb2NrZXRzLmNvbm5lY3RlZFtzb2NrZXRJRF0uZW1pdChtc2csIGRhdGEpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmKG1zZyA9PSBcImFjdGlvblwiKSB7XG4gICAgICAgICAgICBpZih0eXBlb2Yoc29ja2V0SUQpID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gU29ja2V0SUQgZm91bmQhXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW8uc29ja2V0cy5jb25uZWN0ZWRbc29ja2V0SURdLmVtaXQobXNnLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYobXNnID09IFwibG9nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuaW8uc29ja2V0cy5lbWl0KG1zZywgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYnJvYWRjYXN0KG1zZywgZGF0YSkge1xuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMucGxheWVyc0FycmF5KSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQobXNnLCBkYXRhLCB0aGlzLnBsYXllcnNBcnJheVtpXS5zb2NrZXRJRCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgXG59XG5cbm1vZHVsZS5leHBvcnRzLlNlcHRpa29uID0gU2VwdGlrb247XG4iLCJpbXBvcnQgU2VwdGlrb24gZnJvbSAnLi4vcHJlZmFicy9zZXB0aWtvbic7XG5cbmNsYXNzIEJvb3QgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcmVsb2FkKCkge1xuICAgIHRoaXMubG9hZC5pbWFnZSgncHJlbG9hZGVyJywgJ2Fzc2V0cy9wcmVsb2FkZXIuZ2lmJyk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5nYW1lLmlucHV0Lm1heFBvaW50ZXJzID0gMTtcbiAgICB0aGlzLmdhbWUudGltZS5hZHZhbmNlZFRpbWluZyA9IHRydWU7XG4gICAgdGhpcy5nYW1lLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XG4gICAgICB0aGlzLmdhbWUuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5SRVNJWkU7XG4gICAgLy9zZXR1cCBkZXZpY2Ugc2NhbGluZ1xuICAgIGlmICghdGhpcy5nYW1lLmRldmljZS5kZXNrdG9wKSB7XG4gICAgICB0aGlzLmdhbWUuc2NhbGUucGFyZW50SXNXaW5kb3cgPSB0cnVlO1xuICAgICAgdGhpcy5nYW1lLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuUkVTSVpFO1xuICAgICAgdGhpcy5nYW1lLnNjYWxlLm1pbldpZHRoID0gIDQ4MDtcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5taW5IZWlnaHQgPSAyNjA7XG4gICAgICB0aGlzLmdhbWUuc2NhbGUuZm9yY2VPcmllbnRhdGlvbih0cnVlKTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRHbG9iYWxWYXJpYWJsZXMoKTtcbiAgICBcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ3ByZWxvYWRlcicpO1xuICB9XG5cbiAgaW5pdEdsb2JhbFZhcmlhYmxlcygpe1xuICAgIHRoaXMuZ2FtZS5nbG9iYWwgPSB7XG4gICAgICBzY29yZTogMCxcbiAgICAgIGxhc3REaWNlUm9sbDogMCxcbiAgICB9O1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vdDtcbiIsImltcG9ydCBEaWNlIGZyb20gJy4uL3ByZWZhYnMvZGljZSc7XG5cbmNsYXNzIEdhbWUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgXG4gIGNyZWF0ZSgpIHtcbiAgXG4gICAgLy90aGlzLmdhbWUuaW5wdXQub25Eb3duLmFkZCh0aGlzLnRvZ2dsZUZ1bGxzY3JlZW4sIHRoaXMpO1xuICAgIHRoaXMuZ2FtZS5zdGFnZS5kaXNhYmxlVmlzaWJpbGl0eUNoYW5nZSA9IHRydWU7XG4gICAgXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XG4gICAgdGhpcy5nYW1lLmh1ZEdyb3VwID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xuXG4gICAgdGhpcy5nYW1lLm1vZGFsID0gbmV3IGdhbWVNb2RhbCh0aGlzLmdhbWUpO1xuICAgIHRoaXMuY3JlYXRlTW9kYWxzKCk7XG5cbiAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLDAsJ2JhY2tncm91bmQnKTtcbiAgICB0aGlzLmJhY2tncm91bmQuYW5jaG9yLnNldFRvKDAuNSwwLjUpO1xuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNlbnRlclggPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWDtcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5jZW50ZXJZID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclk7XG5cbiAgICB0aGlzLmdhbWUuaHVkQmcgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLDAsJ2h1ZC1iZycpO1xuXG4gICAgdGhpcy5nYW1lLmdvID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoNDAsODAsJ3RleHRfZ28nKTtcbiAgICB0aGlzLmdhbWUuZ28uc2NhbGUuc2V0VG8oMC4yNSk7XG4gICAgdGhpcy5nYW1lLmdvLmlucHV0RW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2FtZS5nby5maWx0ZXJzID0gW3RoaXMuZ2FtZS5hZGQuZmlsdGVyKCdHcmF5JyldO1xuXG4gICAgdGhpcy5nYW1lLmdvLmNsaWNrZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5zZXB0aWtvbi5jaG9vc2luZ1RhcmdldHMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ2dvJ30pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuZ2FtZS5nby5ldmVudHMub25JbnB1dERvd24uYWRkKHRoaXMuZ2FtZS5nby5jbGlja2VkLCB0aGlzKTtcblxuICAgIHRoaXMuZ2FtZS5nby5lbmFibGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICB0aGlzLmdhbWUuZ28uZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmZpbHRlcnMgPSBbdGhpcy5nYW1lLmFkZC5maWx0ZXIoJ0dyYXknKV07XG4gICAgICAgIHRoaXMuaW5wdXRFbmFibGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2FtZS5kaWNlID0gbmV3IERpY2UodGhpcy5nYW1lLCA1MCwgNDApO1xuICAgIHRoaXMuZ2FtZS5kaWNlLnNjYWxlLnNldFRvKDAuMjUpO1xuXG4gICAgdGhpcy5nYW1lLmFkZC5leGlzdGluZyh0aGlzLmdhbWUuZGljZSk7XG4gICAgXG4gICAgdGhpcy5nYW1lLmh1ZEdyb3VwLmFkZCh0aGlzLmdhbWUuaHVkQmcpO1xuICAgIHRoaXMuZ2FtZS5odWRHcm91cC5hZGQodGhpcy5nYW1lLmRpY2UpO1xuICAgIHRoaXMuZ2FtZS5odWRHcm91cC5hZGQodGhpcy5nYW1lLmdvKTtcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQodGhpcy5iYWNrZ3JvdW5kKTtcblxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi5jcmVhdGVUaWxlQXJyYXkoMzEsIDIxLCB7eDowLXRoaXMuYmFja2dyb3VuZC53aWR0aC8yLCB5OjAtdGhpcy5iYWNrZ3JvdW5kLmhlaWdodC8yfSk7XG5cblxuICAgIHRoaXMucmVmcmVzaEJvYXJkKCk7XG5cbiAgfVxuXG5cbiAgY3JlYXRlTW9kYWxzKCkge1xuICAgICAgdGhpcy5nYW1lLm1vZGFsLmNyZWF0ZU1vZGFsKFxuICAgICAgICB7XG4gICAgICAgIHR5cGU6IFwiYXNrU3RhcnRcIixcbiAgICAgICAgaW5jbHVkZUJhY2tncm91bmQ6IGZhbHNlLFxuICAgICAgICBtb2RhbENsb3NlT25JbnB1dDogZmFsc2UsXG4gICAgICAgIGl0ZW1zQXJyOiBbe1xuICAgICAgICAgICAgdHlwZTogXCJncmFwaGljc1wiLFxuICAgICAgICAgICAgZ3JhcGhpY0NvbG9yOiBcIjB4ZmZmZmZmXCIsXG4gICAgICAgICAgICBncmFwaGljV2lkdGg6IDMwMCxcbiAgICAgICAgICAgIGdyYXBoaWNIZWlnaHQ6IDMwMCxcbiAgICAgICAgICAgIGdyYXBoaWNSYWRpdXM6IDQwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgY29udGVudDogXCJBcmUgeW91IGhhcHB5IHdpdGhcXG4gdGhhdCBjbG9uZSBsYXlvdXQ/XCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkx1Y2tpZXN0IEd1eVwiLFxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxuICAgICAgICAgICAgY29sb3I6IFwiMHgxZTFlMWVcIixcbiAgICAgICAgICAgIG9mZnNldFk6IC01MFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gICAgICAgICAgICBjb250ZW50OiBcInRleHRfeWVzXCIsXG4gICAgICAgICAgICBvZmZzZXRZOiAxMDAsXG4gICAgICAgICAgICBvZmZzZXRYOiAtODAsXG4gICAgICAgICAgICBjb250ZW50U2NhbGU6IDAuNixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLm1vZGFsLmhpZGVNb2RhbChcImFza1N0YXJ0XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDonc2V0UGxheWVyU3RhdGUnLCB2YWx1ZTonc3RhcnQnfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwidGV4dF9ub1wiLFxuICAgICAgICAgICAgb2Zmc2V0WTogMTAwLFxuICAgICAgICAgICAgb2Zmc2V0WDogODAsXG4gICAgICAgICAgICBjb250ZW50U2NhbGU6IDAuNixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLm1vZGFsLmhpZGVNb2RhbChcImFza1N0YXJ0XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDonc2V0UGxheWVyU3RhdGUnLCB2YWx1ZToncmVzZXQnfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIF1cbiAgICB9KTtcbiAgfVxuXG4gIHJlZnJlc2hCb2FyZCgpIHtcblxuICAgIHZhciBzY2FsZSA9IHdpbmRvdy5pbm5lcldpZHRoL3RoaXMuYmFja2dyb3VuZC5oZWlnaHQ7XG4gICAgaWYoc2NhbGUgPiAxLjkpIHtcbiAgICAgICAgc2NhbGUgPSAxLjk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnNjYWxlLnNldFRvKHNjYWxlKTtcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC54ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclg7XG5cbiAgICBpZih0aGlzLmdhbWUuc2VwdGlrb24ucGxheWVyLmlkID09IDEpIHtcbiAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYW5nbGUgPSAtOTA7IFxuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWTsgLy8gQ2VudGVyZWQgb24gU2VwdGlrb24gTG9nb1xuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSArICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIG9wcG9uZW50J3Mgc2lkZVxuICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgLSAoKHRoaXMuYmFja2dyb3VuZC53aWR0aCpzY2FsZSktd2luZG93LmlubmVySGVpZ2h0KS8yOyAvLyBDZW50ZXJlZCBvbiB0aGlzIHBsYXllcidzIHNpZGVcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSA9IDkwOyBcbiAgICAgICAgLy90aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclk7IC8vIENlbnRlcmVkIG9uIFNlcHRpa29uIExvZ29cbiAgICAgICAgLy90aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgKyAoKHRoaXMuYmFja2dyb3VuZC53aWR0aCpzY2FsZSktd2luZG93LmlubmVySGVpZ2h0KS8yOyAvLyBDZW50ZXJlZCBvbiBvcHBvbmVudCdzIHNpZGVcbiAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZIC0gKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gdGhpcyBwbGF5ZXIncyBzaWRlXG4gICAgfVxuXG4gIH1cblxuICBcbiAgdXBkYXRlKCkge1xuICAgIC8vICAgdGhpcy5kaWNlLmZyYW1lID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxO1xuICAgIC8vIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdNb3VzZScsIDcwMCwgMzIpO1xuICAgIFxuICAgIC8vIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdNb3VzZSBYOiAnICsgdGhpcy5nYW1lLmlucHV0LngsIDcwMCwgNjQpO1xuICAgIC8vIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdNb3VzZSBZOiAnICsgdGhpcy5nYW1lLmlucHV0LnksIDcwMCwgOTIpO1xuICB9XG4gIFxuICByZW5kZXIgKCkge1xuICAgICAgdGhpcy5yZWZyZXNoQm9hcmQoKTtcbiAgICAgIC8qXG5cbiAgICB2YXIgeCA9IDMyO1xuICAgIHZhciB5ID0gMDtcbiAgICB2YXIgeWkgPSAzMjtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnVmlld3BvcnQnLCB4LCB5ICs9IHlpKTtcblxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdWaWV3cG9ydCBXaWR0aDogJyArIHRoaXMuZ2FtZS5zY2FsZS52aWV3cG9ydFdpZHRoLCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93LmlubmVyV2lkdGg6ICcgKyB3aW5kb3cuaW5uZXJXaWR0aCwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3dpbmRvdy5vdXRlcldpZHRoOiAnICsgd2luZG93Lm91dGVyV2lkdGgsIHgsIHkgKz0geWkpO1xuXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ1ZpZXdwb3J0IEhlaWdodDogJyArIHRoaXMuZ2FtZS5zY2FsZS52aWV3cG9ydEhlaWdodCwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3dpbmRvdy5pbm5lckhlaWdodDogJyArIHdpbmRvdy5pbm5lckhlaWdodCwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3dpbmRvdy5vdXRlckhlaWdodDogJyArIHdpbmRvdy5vdXRlckhlaWdodCwgeCwgeSArPSB5aSk7XG5cbiAgICAvLyAgRGV2aWNlOiBIb3cgdG8gZ2V0IGRldmljZSBzaXplLlxuXG4gICAgLy8gIFVzZSB3aW5kb3cuc2NyZWVuLndpZHRoIGZvciBkZXZpY2Ugd2lkdGggYW5kIHdpbmRvdy5zY3JlZW4uaGVpZ2h0IGZvciBkZXZpY2UgaGVpZ2h0LiBcbiAgICAvLyAgLmF2YWlsV2lkdGggYW5kIC5hdmFpbEhlaWdodCBnaXZlIHlvdSB0aGUgZGV2aWNlIHNpemUgbWludXMgVUkgdGFza2JhcnMuIChUcnkgb24gYW4gaVBob25lLikgXG4gICAgLy8gIERldmljZSBzaXplIGlzIHN0YXRpYyBhbmQgZG9lcyBub3QgY2hhbmdlIHdoZW4gdGhlIHBhZ2UgaXMgcmVzaXplZCBvciByb3RhdGVkLlxuXG4gICAgeCA9IDM1MDtcbiAgICB5ID0gMDtcblxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdCb2FyZCBHcm91cCcsIHgsIHkgKz0geWkpO1xuXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuZ2FtZS5ib2FyZEdyb3VwLng6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC54LCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5nYW1lLmJvYXJkR3JvdXAueTogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnksIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aDogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoLCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5nYW1lLmJvYXJkR3JvdXAuaGVpZ2h0OiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAuaGVpZ2h0LCB4LCB5ICs9IHlpKTtcblxuICAgIHggPSAzMjtcbiAgICB5ID0gMzAwO1xuXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ0JhY2tncm91bmQgRGV0YWlsJywgeCwgeSArPSB5aSk7XG5cbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLng6ICcgKyB0aGlzLmJhY2tncm91bmQueCwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC55OiAnICsgdGhpcy5iYWNrZ3JvdW5kLnksIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQud2lkdGg6ICcgKyB0aGlzLmJhY2tncm91bmQud2lkdGgsIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQuaGVpZ2h0OiAnICsgdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC5zY2FsZTogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnNjYWxlLngsIHgsIHkgKz0geWkpO1xuICAgICovXG4gICAgfVxuICAgIFxuICB0b2dnbGVGdWxsc2NyZWVuKCkge1xuICAgIGlmKHRoaXMuZ2FtZS5zY2FsZS5pc0Z1bGxTY3JlZW4pIHtcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnN0b3BGdWxsU2NyZWVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnN0YXJ0RnVsbFNjcmVlbihmYWxzZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJjbGFzcyBNZW51IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIC8vYWRkIGJhY2tncm91bmQgaW1hZ2VcbiAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLDAsJ2JhY2tncm91bmQnKTtcbiAgICB0aGlzLmJnUmF0aW8gPSB0aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aCAvIHRoaXMuYmFja2dyb3VuZC50ZXh0dXJlLmhlaWdodDtcbiAgICB0aGlzLndvcmxkUmF0aW8gPSB0aGlzLmdhbWUud29ybGQud2lkdGggLyB0aGlzLmdhbWUud29ybGQuaGVpZ2h0O1xuICAgIGlmICgoKHRoaXMud29ybGRSYXRpbyAtIHRoaXMuYmdSYXRpbykgLyAyICogdGhpcy5nYW1lLndvcmxkLndpZHRoKSA+IDApIHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLndpZHRoID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodC90aGlzLmJhY2tncm91bmQudGV4dHVyZS5oZWlnaHQqdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUud2lkdGg7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQgPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJhY2tncm91bmQueCA9ICh0aGlzLmdhbWUud29ybGQud2lkdGggLSB0aGlzLmJhY2tncm91bmQud2lkdGgpIC8gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJhY2tncm91bmQud2lkdGggPSB0aGlzLmdhbWUud29ybGQud2lkdGg7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQgPSB0aGlzLmdhbWUud29ybGQud2lkdGgvdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUud2lkdGgqdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJhY2tncm91bmQueSA9ICh0aGlzLmdhbWUud29ybGQuaGVpZ2h0IC0gdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCkgLyAyO1xuICAgIH1cblxuICAgIC8vYWRkIGludHJvIHRleHRcbiAgICB0aGlzLmdhbWVvdmVyVGV4dCA9IHRoaXMuYWRkLnRleHQodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsdGhpcy5nYW1lLndvcmxkLmNlbnRlclksIFwiU2NvcmUgPSBcIit0aGlzLmdhbWUuZ2xvYmFsLnNjb3JlLCB7XG4gICAgICBmb250OiAnNDJweCBBcmlhbCcsIGZpbGw6ICcjZmZmZmZmJywgYWxpZ246ICdjZW50ZXInXG4gICAgfSk7XG4gICAgdGhpcy5nYW1lb3ZlclRleHQuYW5jaG9yLnNldCgwLjUpO1xuXG4gICAgdGhpcy5pbnB1dC5vbkRvd24uYWRkKHRoaXMub25JbnB1dERvd24sIHRoaXMpO1xuXG4gICAgLy9wcmV2ZW50IGFjY2lkZW50YWwgY2xpY2stdGhydSBieSBub3QgYWxsb3dpbmcgc3RhdGUgdHJhbnNpdGlvbiBmb3IgYSBzaG9ydCB0aW1lXG4gICAgdGhpcy5jYW5Db250aW51ZVRvTmV4dFN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChQaGFzZXIuVGltZXIuU0VDT05EICogMC41LCBmdW5jdGlvbigpeyB0aGlzLmNhbkNvbnRpbnVlVG9OZXh0U3RhdGUgPSB0cnVlOyB9LCB0aGlzKTtcblxuICAgIHRoaXMuc2F2ZVZhcnNUb0xvY2FsU3RvcmFnZSgpO1xuICAgIHRoaXMucmVzZXRHbG9iYWxWYXJpYWJsZXMoKTtcbiAgfVxuXG4gIHNhdmVWYXJzVG9Mb2NhbFN0b3JhZ2UoKXtcbiAgICB2YXIgbWF4ID0gbG9jYWxTdG9yYWdlLm1heFNjb3JlIHx8IDA7IC8vZGVmYXVsdCB2YWx1ZSBvZiAwIGlzIGl0IGRvZXMgbm90IGV4aXN0XG4gICAgaWYgKHRoaXMuZ2FtZS5nbG9iYWwuc2NvcmUgPiBtYXgpeyBsb2NhbFN0b3JhZ2UubWF4U2NvcmUgPSB0aGlzLmdhbWUuZ2xvYmFsLnNjb3JlOyB9XG4gIH1cblxuICByZXNldEdsb2JhbFZhcmlhYmxlcygpe1xuICAgIHRoaXMuZ2FtZS5nbG9iYWwuc2NvcmUgPSAwO1xuICB9XG4gIHVwZGF0ZSgpIHt9XG5cbiAgb25JbnB1dERvd24gKCkge1xuICAgIGlmKHRoaXMuY2FuQ29udGludWVUb05leHRTdGF0ZSl7XG4gICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ21lbnUnKTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIiwiY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXNzZXQgPSBudWxsO1xuICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcbiAgfVxuXG4gIHByZWxvYWQoKSB7XG4gICAgLy9zZXR1cCBsb2FkaW5nIGJhclxuICAgIHRoaXMuYXNzZXQgPSB0aGlzLmFkZC5zcHJpdGUodGhpcy5nYW1lLndpZHRoICogMC41IC0gMTEwLCB0aGlzLmdhbWUuaGVpZ2h0ICogMC41IC0gMTAsICdwcmVsb2FkZXInKTtcbiAgICB0aGlzLmxvYWQuc2V0UHJlbG9hZFNwcml0ZSh0aGlzLmFzc2V0KTtcbiAgICBcbiAgICAvL1NldHVwIGxvYWRpbmcgYW5kIGl0cyBldmVudHNcbiAgICB0aGlzLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLm9uTG9hZENvbXBsZXRlLCB0aGlzKTtcbiAgICB0aGlzLmxvYWRSZXNvdXJjZXMoKTtcbiAgfVxuXG4gIGxvYWRSZXNvdXJjZXMoKSB7XG4gICAgICBcbiAgICAvL01FTlUgUkVTT1VSQ0VTXG4gICAgLy9tZW51IGJhY2tncm91bmRcbiAgICAvL3RleHQgaW1hZ2VzXG4gICAgLy9tdXNpYyBmaWxlcyA/XG4gICAgLy8gIExvYWQgZmlsdGVyIHNjcmlwdHNcbiAgICAvLyB0aGlzLmdhbWUubG9hZC5zY3JpcHQoJ2dyYXknLCAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9waG90b25zdG9ybS9waGFzZXIvbWFzdGVyL3YyL2ZpbHRlcnMvR3JheS5qcycpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLnNjcmlwdCgnZ3JheScsICdodHRwczovL2Nkbi5yYXdnaXQuY29tL3Bob3RvbnN0b3JtL3BoYXNlci1jZS9tYXN0ZXIvZmlsdGVycy9HcmF5LmpzJyk7XG5cbiAgICBcbiAgICAvL2xvYWQgZ2FtZSBkYXRhXG4gICAgdGhpcy5nYW1lLmxvYWQuanNvbigndGlsZURldGFpbCcsICdhc3NldHMvdGlsZURldGFpbC5qc29uJyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuanNvbignd2FsbEdyaWQnLCAnYXNzZXRzL3dhbGxHcmlkLmpzb24nKTtcbiAgXG4gICAgLy9HQU1FIFJFU09VUkNFU1xuICAgIC8vZ2FtZSBib2FyZCBiYWNrZ3JvdW5kXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2JhY2tncm91bmQnLCdhc3NldHMvbWVkaXVtX2JvYXJkLnBuZycpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdkaWNlJywnYXNzZXRzL2RpY2UucG5nJywgMTI4LCAxOTQsIDEwKTtcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnaHVkLWJnJywnYXNzZXRzL2h1ZC1iZy5wbmcnKTtcbiAgICBcbiAgICAvLyBtb2RhbCBpbWFnZXNcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF95ZXMnLCdhc3NldHMvdGV4dF95ZXMucG5nJyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfbm8nLCdhc3NldHMvdGV4dF9uby5wbmcnKTtcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9nbycsJ2Fzc2V0cy90ZXh0X2dvLnBuZycpO1xuXG4gICAgLy9wbGF5ZXIgdG9rZW5zIHNwcml0ZXNoZWV0c1xuICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdjbG9uZScsICdhc3NldHMvY2xvbmUucG5nJywgMTEwLCAxNjgpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdvcmRuYW5jZScsICdhc3NldHMvb3JkbmFuY2UucG5nJywyNjQsIDI2NCwgNyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuYXRsYXMoJ2Jvb20nLCAnYXNzZXRzL2Jvb20ucG5nJywgJ2Fzc2V0cy9ib29tLmpzb24nLCBQaGFzZXIuTG9hZGVyLlRFWFRVUkVfQVRMQVNfSlNPTl9IQVNIKTtcblxuICAgIC8vYXVkaW8gZmlsZXMgXG4gICAgXG4gICAgLy90aGlzLmdhbWUubG9hZC5pbWFnZSgnY3Jvc3NoYWlycycsICdhc3NldHMvY3Jvc3NoYWlyX3JlZF9zbWFsbC5wbmcnKTtcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9nbycsICdhc3NldHMvdGV4dF9nby5wbmcnKTtcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9yZWFkeScsICdhc3NldHMvdGV4dF9yZWFkeS5wbmcnKTtcblxuICAgIC8vdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ3RhcmdldCcsICdhc3NldHMvdGFyZ2V0LnBuZycsMTI4LjY2LDEyOCk7XG5cbiAgICAvL3RoaXMuZ2FtZS5sb2FkLmF1ZGlvKCdndW5zaG90JywnYXNzZXRzL2d1bnNob3Qud2F2Jyk7XG4gICAgLy90aGlzLmdhbWUubG9hZC5hdWRpbygnZGluZycsJ2Fzc2V0cy9kaW5nLndhdicpO1xuICB9XG5cbiAgb25Mb2FkQ29tcGxldGUoKSB7XG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdzZXR1cCcpO1xuICAgIC8vdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJlbG9hZGVyO1xuIiwiY2xhc3MgU2V0dXAgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gfVxuICBcbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuZ2FtZS5uYW1lID0gXCJ1c2VyXCI7XG5cbiAgICB0aGlzLmdhbWUuc3RhZ2UuZGlzYWJsZVZpc2liaWxpdHlDaGFuZ2UgPSB0cnVlO1xuICAgIHRoaXMuZ2FtZS5tb2RhbCA9IG5ldyBnYW1lTW9kYWwodGhpcy5nYW1lKTtcbiAgICB0aGlzLmNyZWF0ZU1vZGFscygpO1xuICAgIHRoaXMuZ2FtZS5tb2RhbC5zaG93TW9kYWwoJ3VzZXJuYW1lJyk7XG5cbiAgICB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkQ2FsbGJhY2tzKHRoaXMsIG51bGwsIG51bGwsIHRoaXMua2V5UHJlc3MpO1xuICAgIHRoaXMuYmtzcCA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleWJvYXJkLkJBQ0tTUEFDRSk7XG4gICAgdGhpcy5ia3NwLm9uRG93bi5hZGQodGhpcy5rZXlQcmVzcywgdGhpcyk7XG4gICAgdGhpcy5lbnRlciA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleWJvYXJkLkVOVEVSKTtcbiAgICB0aGlzLmVudGVyLm9uRG93bi5hZGQodGhpcy5rZXlQcmVzcywgdGhpcyk7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5hc2tOZXdQbGF5ZXIoKTtcblxuICAgIC8vdGhpcy5nYW1lLnNlcHRpa29uLnNldHVwKCk7XG59XG5cbmtleVByZXNzKGNoYXIpIHtcblxuICAgIGlmKHR5cGVvZihjaGFyKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBpZiAoY2hhci5ldmVudC5jb2RlID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXIuZXZlbnQuY29kZSA9PT0gXCJCYWNrc3BhY2VcIikge1xuICAgICAgICAgICAgdGhpcy5nYW1lLm5hbWUgPSB0aGlzLmdhbWUubmFtZS5zdWJzdHJpbmcoMCwgdGhpcy5nYW1lLm5hbWUubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY2hhciA9PSBcIiBcIikge1xuICAgICAgICAgICAgY2hhciA9IFwiX1wiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2FtZS5uYW1lICs9IGNoYXI7XG4gICAgfVxuICAgIHRoaXMuZ2FtZS5tb2RhbC51cGRhdGVNb2RhbFZhbHVlKHRoaXMuZ2FtZS5uYW1lLCAndXNlcm5hbWUnLCA0KTtcbn1cbiAgXG4gIGNyZWF0ZU1vZGFscygpIHtcbiAgXG4gICAgLy8gU3RhcnQgR2FtZVxuICAgIHRoaXMuZ2FtZS5tb2RhbC5jcmVhdGVNb2RhbChcbiAgICAgICAge1xuICAgICAgICB0eXBlOiBcInVzZXJuYW1lXCIsXG4gICAgICAgIGluY2x1ZGVCYWNrZ3JvdW5kOiB0cnVlLFxuICAgICAgICBtb2RhbENsb3NlT25JbnB1dDogdHJ1ZSxcbiAgICAgICAgaXRlbXNBcnI6IFt7XG4gICAgICAgICAgICB0eXBlOiBcImdyYXBoaWNzXCIsXG4gICAgICAgICAgICBncmFwaGljQ29sb3I6IFwiMHhmZmZmZmZcIixcbiAgICAgICAgICAgIGdyYXBoaWNXaWR0aDogMzAwLFxuICAgICAgICAgICAgZ3JhcGhpY0hlaWdodDogMzAwLFxuICAgICAgICAgICAgZ3JhcGhpY1JhZGl1czogNDBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIlR5cGUgYSB1c2VybmFtZSxcXG50aGVuIGhpdCA8RU5URVI+XFxuXFxuKG1heCBvZiAyNSBjaGFyYWN0ZXJzKVwiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiAyMixcbiAgICAgICAgICAgIGNvbG9yOiBcIjB4MWUxZTFlXCIsXG4gICAgICAgICAgICBvZmZzZXRZOiAtNTBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmdhbWUubmFtZSxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTHVja2llc3QgR3V5XCIsXG4gICAgICAgICAgICBmb250U2l6ZTogMjIsXG4gICAgICAgICAgICBjb2xvcjogXCIweDFlMWUxZVwiLFxuICAgICAgICAgICAgb2Zmc2V0WTogNTBcbiAgICAgICAgfSwgXVxuICAgIH0pO1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2V0dXA7XG4iXX0=
