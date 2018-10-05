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

var _serverFull = require('./states/serverFull');

var _serverFull2 = _interopRequireDefault(_serverFull);

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
game.state.add('serverFull', new _serverFull2.default());

game.state.start('boot');

},{"./prefabs/client":9,"./prefabs/septikon":18,"./states/boot":25,"./states/game":26,"./states/gameover":27,"./states/preloader":28,"./states/serverFull":29,"./states/setup":30,"uuid/v4":5}],7:[function(require,module,exports){
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

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Documentation for Phaser's (2.6.2) sprites:: phaser.io/docs/2.6.2/Phaser.Sprite.html

var Biodrone = function (_Phaser$Sprite) {
  _inherits(Biodrone, _Phaser$Sprite);

  //initialization code in the constructor
  function Biodrone(game, x, y, frame, uuid) {
    _classCallCheck(this, Biodrone);

    //setup physics properties
    var _this = _possibleConstructorReturn(this, (Biodrone.__proto__ || Object.getPrototypeOf(Biodrone)).call(this, game, x, y, 'biodrone', frame));

    _this.anchor.setTo(0.5, 0.65);
    _this.game.physics.arcade.enableBody(_this);
    //this.body.collideWorldBounds = true;

    _this.uuid = uuid;
    //set size
    _this.width = 27;
    _this.scale.y = Math.abs(_this.scale.x);

    //set rotation (this should be based on the base this biodrone occupies)
    _this.angle = _this.game.boardGroup.angle * -1;

    _this.currentTileCoordinates = _this.game.septikon.pixelsToTile(_this.x, _this.y);
    _this.game.septikon.tileArray[_this.currentTileCoordinates.x][_this.currentTileCoordinates.y].tileOccupied = true;

    return _this;
  }

  _createClass(Biodrone, [{
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

  return Biodrone;
}(Phaser.Sprite);

exports.default = Biodrone;

},{}],9:[function(require,module,exports){
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
            if (data.type == "ordnance") {
                this.septikon.updateOrdnance(data);
            }
            if (data.type == "resources") {
                this.septikon.updateResources(data);
            }
            if (data.type == "tiles") {
                this.septikon.updateTiles(data);
            }
            if (data.type == "dice") {
                this.septikon.game.dice.setValue(data.details.value);
            }
            if (data.type == "info") {
                console.log(data);
                // this.septikon.updateInfo(data);
            }
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
var Confirm = function (_Phaser$Sprite) {
    _inherits(Confirm, _Phaser$Sprite);

    //initialization code in the constructor
    function Confirm(game, x, y) {
        _classCallCheck(this, Confirm);

        //setup physics properties
        var _this = _possibleConstructorReturn(this, (Confirm.__proto__ || Object.getPrototypeOf(Confirm)).call(this, game, x, y, 'text_go'));

        _this.anchor.setTo(0.5, 0.5);
        _this.game.physics.arcade.enableBody(_this);

        //set click event
        _this.inputEnabled = true;
        _this.events.onInputDown.add(_this.clicked, _this);

        //set size
        _this.width = 50;
        _this.scale.y = Math.abs(_this.scale.x);
        // this.filters = [this.game.add.filter('Gray')];
        // this.alpha = 0.5;
        return _this;
    }

    _createClass(Confirm, [{
        key: 'clicked',
        value: function clicked() {
            this.game.client.sendInput({ event: 'confirmClicked' });
        }
    }, {
        key: 'enable',
        value: function enable() {
            // this.alpha = 1;
            this.filters = null;
            // this.inputEnabled = true;
        }
    }, {
        key: 'disable',
        value: function disable() {
            // this.alpha = 0.5;
            // this.filters = [this.game.add.filter('Gray')];
            // this.inputEnabled = false;
        }
    }]);

    return Confirm;
}(Phaser.Sprite);

exports.default = Confirm;

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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
    _this.inputEnabled = true;
    _this.events.onInputDown.add(_this.clicked, _this);

    //set size
    _this.width = 50;
    _this.scale.y = Math.abs(_this.scale.x);
    // this.filters = [this.game.add.filter('Gray')];
    // this.alpha = 0.5;

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
      // this.alpha = 0.5;
      // this.filters = [this.game.add.filter('Gray')];
      // this.inputEnabled = false;
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clone = require('../prefabs/clone');

var _clone2 = _interopRequireDefault(_clone);

var _biodrone = require('../prefabs/biodrone');

var _biodrone2 = _interopRequireDefault(_biodrone);

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
        key: 'updatePersonnel',
        value: function updatePersonnel(data) {
            // ADD personnel
            // REMOVE personnel
            // MOVE personnel

            if (data.details.action === "add") {
                console.log("adding personnel");
                this.addPersonnel(data.details.personnel, data.details.playerID);
            }

            // for (let j = 0; j < this.player.personnelArray.length; j++) {
            //     let myPerson = this.player.personnelArray[j];
            //     if (myPerson.uuid === p.uuid) {
            //         matchFound = true;
            //     }
            // }
            // var currentPersonnel = null;
            // if (Array.isArray(data.details) === false) {
            //     data.details = [data.details];
            // }

            // if (this.opponent.personnelArray.length === 0 && data.details.length === 5) {
            //     for (var i in data.details) {
            //         this.addClone(data.details[i]);
            //     }      
            // } else {
            //     for (var p in this.opponent.personnelArray) {
            //         currentPersonnel = this.opponent.personnelArray[p];
            //         for (var d in data.details) {
            //             if (currentPersonnel.uuid == data.details[d].uuid) {
            //                 this.movePersonnel(data.details[d]);
            //             }
            //         }
            //     }
            // }
        }
    }, {
        key: 'updateOrdnance',
        value: function updateOrdnance(data) {}
    }, {
        key: 'updateResources',
        value: function updateResources(data) {}
    }, {
        key: 'updateTiles',
        value: function updateTiles(data) {}
    }, {
        key: 'showModal',
        value: function showModal(type) {
            this.game.modal.showModal(type);
        }
    }, {
        key: 'diceRolled',
        value: function diceRolled(details) {
            this.game.dice.setValue(details.value);
            this.legalMoves = details.gamePieces;
            var pointArray = [];
            // console.log(details.gamePieces[0].origin);
            for (var i = 0; i < details.gamePieces.length; i++) {
                pointArray.push({ x: details.gamePieces[i].origin.x, y: details.gamePieces[i].origin.y });
            }
            this.showTiles(pointArray, 0xF63636);
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
            //TODO: Emit an indicator for selecting a gunner
        }
    }, {
        key: 'addPersonnel',
        value: function addPersonnel(personnel, playerID) {
            var point = this.tileToPixels(personnel.x, personnel.y);
            var newPersonnel = null;
            if (personnel.typeEnum.CLONE === personnel.type) {
                newPersonnel = new _clone2.default(this.game, point.x, point.y, null, personnel.uuid);
            } else if (personnel.typeEnum.BIODRONE === personnel.type) {
                newPersonnel = new _biodrone2.default(this.game, point.x, point.y, null, personnel.uuid);
            }
            if (playerID == this.player.id) {
                this.player.personnelArray.push(newPersonnel);
            } else {
                this.opponent.personnelArray.push(newPersonnel);
            }
            this.game.boardGroup.add(newPersonnel);
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

            // DEBUG BLOCK
            this.game.client.sendInput({ event: 'tileClicked', x: 7, y: 0 });
            this.game.client.sendInput({ event: 'tileClicked', x: 7, y: 19 });
            this.game.client.sendInput({ event: 'tileClicked', x: 6, y: 10 });
            this.game.client.sendInput({ event: 'tileClicked', x: 4, y: 10 });
            this.game.client.sendInput({ event: 'tileClicked', x: 0, y: 10 });

            this.game.client.sendInput({ event: 'tileClicked', x: 23, y: 20 });
            this.game.client.sendInput({ event: 'tileClicked', x: 23, y: 1 });
            this.game.client.sendInput({ event: 'tileClicked', x: 24, y: 10 });
            this.game.client.sendInput({ event: 'tileClicked', x: 26, y: 10 });
            this.game.client.sendInput({ event: 'tileClicked', x: 30, y: 10 });
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

            // DEBUG BLOCK
            console.log("----TILE DETAIL----");
            console.log("Name: " + obj.tileName);
            console.log("Type: " + obj.tileType);
            console.log("Occupied: " + obj.tileOccupied);
            console.log("Damaged: " + obj.tileDamaged);
            console.log("X: " + obj.tileX + " Y:" + obj.tileY);
            //   this.addOrdnance({point:{x:obj.tileX, y:obj.tileY}, type:'biodrone', uuid:Math.random()});

            return;
        }
    }, {
        key: 'showTiles',
        value: function showTiles(coordsArray, color) {
            console.log("SHOW TILES!!");
            console.log(coordsArray);
            // if(typeof(coordsArray.pointArray) !== 'undefined') {
            //     coordsArray = coordsArray.pointArray;
            // }
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
    }, {
        key: 'serverFull',
        value: function serverFull() {
            this.game.state.start('serverFull');
        }
    }]);

    return Septikon;
}();

exports.default = Septikon;

},{"../prefabs/biodrone":8,"../prefabs/clone":10,"../prefabs/ordnance":15}],19:[function(require,module,exports){
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

},{"../prefabs/clone":10,"../prefabs/ordnance":15,"../prefabs/personnel":16,"../prefabs/resources":17}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
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
            if (type == "clone") {
                var personnel = new Personnel('clone', x, y, uuid);
                this.personnelArray.push(personnel);
                return personnel;
            }
            console.log("personnel is not a clone type.");
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

},{"./ordnance":20,"./personnel":21,"./resource":23}],23:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Resource = function Resource(type) {
    _classCallCheck(this, Resource);

    this.type = type;
};

module.exports.Resource = Resource;

},{}],24:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//  This is the server-side rule engine. It processes the rules and states and then emits directions back to the client.

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
        this.sequence = 0;

        this.activePlayer = null;
        this.currentDiceValue = 0;

        this.gameStateEnum = Object.freeze({
            SETUP: 0,
            GAME: 1,
            PAUSE: 2,
            GAMEOVER: 3,
            SERVERFULL: 4
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
        key: 'processClick',
        value: function processClick(data) {
            // What is always true of a click?
            //  - send tile details to the client
            //  - send occupant details to client (if any)
            //  - successful interactions (like moving a clone) should emit to client ONLY from this function.

            // Do the needful
            var player = this.getPlayerBySocketID(data.socketID);

            // (1) Check gamestate
            // (2) Check turnphase
            // (3) Check phasestep

            if (this.gameState === this.gameStateEnum.SETUP) {
                // This gamestate allows:
                //  - placing clones
                //    - check legal placement
                //    - add clone
                //  - removing clones
                //    - check if clone exists here
                //    - remove clone
                //  - confirming selection
                //    - check if starting count is placed
                //    - advance gamestate

                // console.log("placing clone")
                var clone = this.placeClone(player, data.x, data.y);
                // console.log(clone); 
                if (clone !== false) {
                    // emit the added clone and the tile occupation
                    // this.emit('action', {callback:"addClone", details: {x:x, y:y, playerID: player.id, uuid:cloneUUID}}, player.socketID);
                    this.emit('update', { type: "personnel", details: { personnel: clone, action: 'add', playerID: player.id } });
                    this.emit('update', { type: "tile", details: [{ x: data.x, y: data.y, occupied: true }] });
                }
            } else if (this.gameState === this.gameStateEnum.GAME) {
                // This gamestate has phases:
                // (1) - rolling die
                // (2) - moving a clone
                // (3) - tile activation
                // (4) - moving biodrone(s)
                // (5) - moving rockets
                // (6) - assessing damage
                // (7) - check victory
            } else if (this.gameState === this.gameStateEnum.PAUSE) {} else if (this.gameState === this.gameStateEnum.GAMEOVER) {} else if (this.gameState === this.gameStateEnum.SERVERFULL) {}
        }
    }, {
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
                                // TODO: If personnel is a "biodrone" type AND clones remain in the Player.currentlegalpieces array, emit modal warning to player.
                                // Clone must move and tile must be triggered prior to biodrone movement.
                                if (isLegalPersonnel === true) {
                                    this.activePlayer.selectedPersonnelToMove = selectedPersonnel;
                                    //  - Show highlight selected personnel in client
                                    //  - Show legal moves of the selected personnel in a different color

                                    var pointArray = [];
                                    pointArray = this.getLegalMoves(selectedPersonnel, this.currentDiceValue, { x: selectedPersonnel.x, y: selectedPersonnel.y });
                                    this.emit('action', { callback: 'showTiles', details: { x: data.x, y: data.y } }, this.activePlayer.socketID);
                                    // TODO: Show in different color...
                                    this.emit('action', { callback: 'showTiles', details: pointArray }, this.activePlayer.socketID);
                                }
                            } else if (this.activePlayer.selectedPersonnelToMove !== null) {
                                var isLegalMove = this.activePlayer.checkPersonnelMove(this.activePlayer.selectedPersonnelToMove, { x: data.x, y: data.y });
                                if (isLegalMove === false) {
                                    // Toggle back to highlighting the personnel with legal moves
                                    // TODO: emit something to show clones to client
                                    this.emit('action', { callback: 'showTiles', details: {} }, this.activePlayer.socketID);
                                } else {
                                    // Move the personnel
                                    this.activePlayer.selectedPersonnelToMove.move(data.x, data.y);
                                    this.emit('action', { callback: 'movePersonnel', details: { uuid: this.activePlayer.selectedPersonnelToMove.uuid, x: data.x, y: data.y } }, this.activePlayer.socketID);
                                    this.emit('update', { type: "personnel", details: { uuid: this.activePlayer.selectedPersonnelToMove.uuid, x: data.x, y: data.y } }, this.getPlayerOpponent(this.activePlayer).socketID); // clear moved personnel from the player array. If moved personnel was a clone, remove ALL clones from array.
                                    this.activePlayer.purgeLegalPieces(this.activePlayer.selectedPersonnelToMove, true); // 2nd arg: true is passed for clones; null for biodrones.

                                    this.turnState++;
                                    // TODO: trigger tile and emit battle targets (gunners, etc) to Player
                                    this.activateTile({ x: data.x, y: data.y });

                                    // TODO: if tile is production, surface, or armory; check for biodrones and move ordnance, then (if none are found) change players.
                                    var tile = this.getTile(data.x, data.y);
                                    if (tile.type == "production" || tile.type == "surface" || tile.type == "armory" || tile.type == "lock") {
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
                            console.log(currentTile);
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
                                        this.emit('action', { callback: "damageTile", details: ordnancePoint }, this.activePlayer.socketID);
                                        // TODO: update opponent's client
                                        impacted = true;
                                        break;
                                    }
                                    if (currentTile.damaged === true) {
                                        break;
                                    } else {
                                        currentTile.damaged = true;
                                        this.emit('action', { callback: "damageTile", details: ordnancePoint }, this.activePlayer.socketID);
                                        // TODO: update opponent's client
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
                        //TODO: updatePersonnel on opponent client
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

            if (typeof player === 'undefined' || player === null) {
                return false;
            }

            var selectedTile = this.getTile(x, y);
            var clone, cloneUUID;

            if (player.id != selectedTile.owner || selectedTile.occupied === true) {
                return false;
            }

            // if gamestate is SETUP you can place in lock, battle, armory, and production tiles, otherwise only in lock tiles.
            if (this.gameState === this.gameStateEnum.SETUP) {
                if (player.getPersonnel('clone').length === player.startingCloneCount) {
                    return false;
                }
                if (selectedTile.type == "lock" || selectedTile.type == "battle" || selectedTile.type == "armory" || selectedTile.type == "production") {
                    cloneUUID = uuid();
                    clone = player.addPersonnel('clone', x, y, cloneUUID);
                    return clone;
                }
            } else {
                if (selectedTile.type == "lock") {
                    cloneUUID = uuid();
                    clone = player.addPersonnel('clone', x, y, cloneUUID);
                    return clone;
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

            if (typeof socketID == "undefined") {
                console.error("No SocketID found, so I'm broadcasting!");
                this.broadcast(msg, data);
                return;
            } else {
                this.io.sockets.connected[socketID].emit(msg, data);
            }
        }
    }, {
        key: 'broadcast',
        value: function broadcast(msg, data) {
            for (var i in this.playersArray) {
                console.log(msg + " :: " + data + " :: " + this.playersArray[i].socketID);
                this.emit(msg, data, this.playersArray[i].socketID);
            }
        }
    }, {
        key: 'serverFull',
        value: function serverFull(player) {
            this.emit('action', { callback: 'serverFull', details: { id: player.id } }, player.socketID);
        }
    }]);

    return Septikon;
}();

module.exports.Septikon = Septikon;

},{"../../assets/tileDetail.json":1,"../../assets/wallGrid.json":2,"./player":22,"uuid/v4":5}],25:[function(require,module,exports){
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

},{"../prefabs/septikon":18}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dice = require('../prefabs/dice');

var _dice2 = _interopRequireDefault(_dice);

var _confirm = require('../prefabs/confirm');

var _confirm2 = _interopRequireDefault(_confirm);

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

            this.game.dice = new _dice2.default(this.game, 50, 40);
            this.game.dice.scale.setTo(0.25);
            this.game.confirm = new _confirm2.default(this.game, 40, 80);
            this.game.confirm.scale.setTo(0.25);

            this.game.add.existing(this.game.dice);
            this.game.add.existing(this.game.confirm);

            this.game.hudGroup.add(this.game.hudBg);
            this.game.hudGroup.add(this.game.dice);
            this.game.hudGroup.add(this.game.confirm);
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

},{"../prefabs/confirm":11,"../prefabs/dice":13}],27:[function(require,module,exports){
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

},{}],28:[function(require,module,exports){
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

},{}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _septikon = require("../prefabs/septikon");

var _septikon2 = _interopRequireDefault(_septikon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ServerFull = function (_Phaser$State) {
  _inherits(ServerFull, _Phaser$State);

  function ServerFull() {
    _classCallCheck(this, ServerFull);

    return _possibleConstructorReturn(this, (ServerFull.__proto__ || Object.getPrototypeOf(ServerFull)).call(this));
  }

  _createClass(ServerFull, [{
    key: "create",
    value: function create() {
      console.log("Server is full. Try again later.");
    }
  }]);

  return ServerFull;
}(Phaser.State);

exports.default = ServerFull;

},{"../prefabs/septikon":18}],30:[function(require,module,exports){
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

            // this.game.modal = new gameModal(this.game);
            // this.createModals();
            // this.game.modal.showModal('username');

            // this.game.input.keyboard.addCallbacks(this, null, null, this.keyPress);
            // this.bksp = this.game.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE);
            // this.bksp.onDown.add(this.keyPress, this);
            // this.enter = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
            // this.enter.onDown.add(this.keyPress, this);
            this.game.client.askNewPlayer();
            this.game.state.start('game');
            return;
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

},{}]},{},[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvdGlsZURldGFpbC5qc29uIiwiYXNzZXRzL3dhbGxHcmlkLmpzb24iLCJub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsInNyYy9tYWluLmpzIiwic3JjL21vZGFsLmpzIiwic3JjL3ByZWZhYnMvYmlvZHJvbmUuanMiLCJzcmMvcHJlZmFicy9jbGllbnQuanMiLCJzcmMvcHJlZmFicy9jbG9uZS5qcyIsInNyYy9wcmVmYWJzL2NvbmZpcm0uanMiLCJzcmMvcHJlZmFicy9jcm9zc2hhaXJzLmpzIiwic3JjL3ByZWZhYnMvZGljZS5qcyIsInNyYy9wcmVmYWJzL21hc3Rlci5qcyIsInNyYy9wcmVmYWJzL29yZG5hbmNlLmpzIiwic3JjL3ByZWZhYnMvcGVyc29ubmVsLmpzIiwic3JjL3ByZWZhYnMvcmVzb3VyY2VzLmpzIiwic3JjL3ByZWZhYnMvc2VwdGlrb24uanMiLCJzcmMvcHJlZmFicy90ZWFtLmpzIiwic3JjL3NlcnZlci9vcmRuYW5jZS5qcyIsInNyYy9zZXJ2ZXIvcGVyc29ubmVsLmpzIiwic3JjL3NlcnZlci9wbGF5ZXIuanMiLCJzcmMvc2VydmVyL3Jlc291cmNlLmpzIiwic3JjL3NlcnZlci9zZXB0aWtvbi5qcyIsInNyYy9zdGF0ZXMvYm9vdC5qcyIsInNyYy9zdGF0ZXMvZ2FtZS5qcyIsInNyYy9zdGF0ZXMvZ2FtZW92ZXIuanMiLCJzcmMvc3RhdGVzL3ByZWxvYWRlci5qcyIsInNyYy9zdGF0ZXMvc2VydmVyRnVsbC5qcyIsInNyYy9zdGF0ZXMvc2V0dXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdCQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFHLE9BQU8sT0FBUCxLQUFvQixXQUF2QixFQUFvQztBQUNoQyxRQUFHLGFBQWEsT0FBYixDQUFxQixVQUFyQixNQUFxQyxJQUF4QyxFQUE4QztBQUMxQyxZQUFNLE9BQU8sYUFBYSxPQUFiLENBQXFCLFVBQXJCLENBQWI7QUFDSCxLQUZELE1BRU87QUFDSCxZQUFNLFFBQU8sUUFBUSxTQUFSLEdBQWI7QUFDQSxxQkFBYSxPQUFiLENBQXFCLFVBQXJCLEVBQWlDLEtBQWpDO0FBQ0g7QUFDSixDQVBELE1BT087QUFDSCxZQUFRLEtBQVIsQ0FBYyw0QkFBZDtBQUNIOztBQUVEO0FBQ0EsSUFBTSxPQUFPLElBQUksT0FBTyxJQUFYLENBQWdCLEtBQWhCLEVBQXVCLEtBQXZCLEVBQThCLE9BQU8sSUFBckMsQ0FBYjtBQUNBLEtBQUssUUFBTCxHQUFnQixJQUFJLGtCQUFKLENBQWEsSUFBYixDQUFoQjtBQUNBLEtBQUssTUFBTCxHQUFjLElBQUksZ0JBQUosQ0FBVyxLQUFLLFFBQWhCLENBQWQ7O0FBRUEsS0FBSyxLQUFMLENBQVcsR0FBWCxDQUFlLE1BQWYsRUFBdUIsSUFBSSxjQUFKLEVBQXZCO0FBQ0EsS0FBSyxLQUFMLENBQVcsR0FBWCxDQUFlLE1BQWYsRUFBdUIsSUFBSSxjQUFKLEVBQXZCO0FBQ0EsS0FBSyxLQUFMLENBQVcsR0FBWCxDQUFlLE9BQWYsRUFBd0IsSUFBSSxlQUFKLEVBQXhCO0FBQ0EsS0FBSyxLQUFMLENBQVcsR0FBWCxDQUFlLFdBQWYsRUFBNEIsSUFBSSxtQkFBSixFQUE1QjtBQUNBLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBZSxVQUFmLEVBQTJCLElBQUksa0JBQUosRUFBM0I7QUFDQSxLQUFLLEtBQUwsQ0FBVyxHQUFYLENBQWUsWUFBZixFQUE2QixJQUFJLG9CQUFKLEVBQTdCOztBQUVBLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsTUFBakI7Ozs7O0FDaENBLElBQUksWUFBWSxhQUFhLEVBQTdCOztBQUdBLFlBQVksbUJBQVUsSUFBVixFQUFnQjs7QUFFM0IsS0FBSSxRQUFRLElBQVo7QUFDQSxNQUFLLE1BQUwsR0FBYyxFQUFkOztBQUVBOzs7OztBQUtBLE1BQUssU0FBTCxHQUFpQixVQUFVLElBQVYsRUFBZ0I7QUFDaEMsU0FBTyxPQUFQLENBQWUsR0FBZixDQUFtQixJQUFuQjtBQUNBLE9BQUssTUFBTCxDQUFZLElBQVosRUFBa0IsT0FBbEIsR0FBNEIsS0FBNUI7QUFDQSxFQUhEOztBQUtBLFFBQU87QUFDTixlQUFhLHFCQUFVLE9BQVYsRUFBbUI7QUFDL0IsT0FBSSxPQUFPLFFBQVEsSUFBUixJQUFnQixFQUEzQixDQUQrQixDQUNBO0FBQy9CLE9BQUksb0JBQW9CLFFBQVEsaUJBQWhDLENBRitCLENBRW9CO0FBQ25ELE9BQUksa0JBQWtCLFFBQVEsZUFBUixJQUEyQixVQUFqRDtBQUNBLE9BQUksb0JBQW9CLFFBQVEsaUJBQVIsS0FBOEIsU0FBOUIsR0FDdkIsR0FEdUIsR0FDakIsUUFBUSxpQkFEZjtBQUVBLE9BQUksb0JBQW9CLFFBQVEsaUJBQVIsSUFBNkIsS0FBckQ7QUFDQSxPQUFJLDBCQUEwQixRQUFRLHVCQUFSLElBQW1DLEtBQWpFO0FBQ0EsT0FBSSxVQUFVLFFBQVEsT0FBUixJQUFtQixJQUFqQztBQUNBLE9BQUksVUFBVSxRQUFRLE9BQVIsSUFBbUIsSUFBakM7QUFDQSxPQUFJLFdBQVcsUUFBUSxRQUFSLElBQW9CLEVBQW5DO0FBQ0EsT0FBSSxnQkFBZ0IsUUFBUSxhQUFSLElBQXlCLEtBQTdDOztBQUVBLE9BQUksS0FBSjtBQUNBLE9BQUksVUFBSjtBQUNBLE9BQUksYUFBYSxLQUFLLEdBQUwsQ0FBUyxLQUFULEVBQWpCO0FBQ0EsT0FBSSxrQkFBa0IsSUFBdEIsRUFBNEI7QUFDM0IsZUFBVyxhQUFYLEdBQTJCLElBQTNCO0FBQ0EsZUFBVyxZQUFYLENBQXdCLENBQXhCLEdBQTRCLENBQTVCO0FBQ0EsZUFBVyxZQUFYLENBQXdCLENBQXhCLEdBQTRCLENBQTVCO0FBQ0E7O0FBRUQsT0FBSSxzQkFBc0IsSUFBMUIsRUFBZ0M7QUFDL0IsWUFBUSxLQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLEtBQUssS0FBdkIsRUFBOEIsS0FBSyxNQUFuQyxDQUFSO0FBQ0EsVUFBTSxTQUFOLENBQWdCLGVBQWhCLEVBQWlDLGlCQUFqQztBQUNBLFVBQU0sQ0FBTixHQUFVLENBQVY7QUFDQSxVQUFNLENBQU4sR0FBVSxDQUFWOztBQUVBLFVBQU0sUUFBTixDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsS0FBSyxLQUExQixFQUFpQyxLQUFLLE1BQXRDOztBQUVBLFFBQUksc0JBQXNCLElBQTFCLEVBQWdDOztBQUUvQixrQkFBYSxLQUFLLEdBQUwsQ0FBUyxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQWI7QUFDQSxnQkFBVyxZQUFYLEdBQTBCLElBQTFCO0FBQ0EsZ0JBQVcsS0FBWCxHQUFtQixLQUFLLEtBQXhCO0FBQ0EsZ0JBQVcsTUFBWCxHQUFvQixLQUFLLE1BQXpCO0FBQ0EsZ0JBQVcsSUFBWCxHQUFrQixJQUFsQjtBQUNBLGdCQUFXLEtBQVgsQ0FBaUIsVUFBakIsR0FBOEIsQ0FBOUI7QUFDQSxnQkFBVyxNQUFYLENBQWtCLFdBQWxCLENBQThCLEdBQTlCLENBQWtDLFVBQVUsQ0FBVixFQUFhLE9BQWIsRUFBc0I7QUFDdkQsV0FBSyxTQUFMLENBQWUsRUFBRSxJQUFqQjtBQUNBLE1BRkQsRUFFRyxLQUZILEVBRVUsQ0FGVjs7QUFJQSxnQkFBVyxHQUFYLENBQWUsVUFBZjtBQUNBLEtBYkQsTUFhTzs7QUFFTiwrQkFBMEIsSUFBMUI7QUFDQTtBQUNEOztBQUVELE9BQUksdUJBQUosRUFBNkI7QUFDNUIsaUJBQWEsS0FBSyxHQUFMLENBQVMsTUFBVCxDQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUFiO0FBQ0EsZUFBVyxZQUFYLEdBQTBCLElBQTFCO0FBQ0EsZUFBVyxLQUFYLEdBQW1CLEtBQUssS0FBeEI7QUFDQSxlQUFXLE1BQVgsR0FBb0IsS0FBSyxNQUF6QjtBQUNBLGVBQVcsSUFBWCxHQUFrQixJQUFsQjtBQUNBLGVBQVcsS0FBWCxDQUFpQixVQUFqQixHQUE4QixDQUE5Qjs7QUFFQSxlQUFXLEdBQVgsQ0FBZSxVQUFmO0FBQ0E7O0FBRUQsT0FBSSxpQkFBSixFQUF1QjtBQUN0QixlQUFXLEdBQVgsQ0FBZSxLQUFmO0FBQ0E7O0FBRUQsT0FBSSxVQUFKO0FBQ0EsUUFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFNBQVMsTUFBN0IsRUFBcUMsS0FBSyxDQUExQyxFQUE2QztBQUM1QyxRQUFJLE9BQU8sU0FBUyxDQUFULENBQVg7QUFDQSxRQUFJLFdBQVcsS0FBSyxJQUFMLElBQWEsTUFBNUI7QUFDQSxRQUFJLFlBQVksS0FBSyxLQUFMLElBQWMsUUFBOUI7QUFDQSxRQUFJLGlCQUFpQixLQUFLLFVBQUwsSUFBbUIsT0FBeEM7QUFDQSxRQUFJLGVBQWUsS0FBSyxRQUFMLElBQWlCLEVBQXBDO0FBQ0EsUUFBSSxhQUFhLEtBQUssTUFBTCxJQUFlLFVBQWhDO0FBQ0EsUUFBSSxzQkFBc0IsS0FBSyxlQUFMLElBQXdCLENBQWxEO0FBQ0EsUUFBSSxZQUFZLEtBQUssS0FBTCxJQUFjLFFBQTlCO0FBQ0EsUUFBSSxVQUFVLEtBQUssT0FBTCxJQUFnQixDQUE5QjtBQUNBLFFBQUksVUFBVSxLQUFLLE9BQUwsSUFBZ0IsQ0FBOUI7QUFDQSxRQUFJLGVBQWUsS0FBSyxZQUFMLElBQXFCLENBQXhDO0FBQ0EsUUFBSSxVQUFVLEtBQUssT0FBTCxJQUFnQixFQUE5QjtBQUNBLFFBQUksVUFBVSxLQUFLLEtBQUwsR0FBYSxDQUEzQjtBQUNBLFFBQUksVUFBVSxLQUFLLE1BQUwsR0FBYyxDQUE1QjtBQUNBLFFBQUksV0FBVyxLQUFLLFFBQUwsSUFBaUIsS0FBaEM7QUFDQSxRQUFJLFlBQVksS0FBSyxTQUFMLElBQWtCLE1BQWxDO0FBQ0EsUUFBSSxjQUFjLEtBQUssV0FBTCxJQUFvQixFQUF0QztBQUNBLFFBQUksY0FBYyxLQUFLLFdBQUwsSUFBb0IsT0FBdEM7QUFDQSxRQUFJLGVBQWUsS0FBSyxZQUFMLElBQXFCLE9BQXhDO0FBQ0EsUUFBSSxlQUFlLEtBQUssWUFBTCxJQUFxQixRQUF4QztBQUNBLFFBQUksaUJBQWlCLEtBQUssY0FBTCxJQUF1QixDQUE1QztBQUNBLFFBQUksV0FBVyxLQUFLLFlBQUwsSUFBcUIsR0FBcEM7QUFDQSxRQUFJLFdBQVcsS0FBSyxhQUFMLElBQXNCLEdBQXJDO0FBQ0EsUUFBSSxnQkFBZ0IsS0FBSyxhQUFMLElBQXNCLENBQTFDO0FBQ0EsUUFBSSxlQUFlLEtBQUssWUFBTCxJQUFxQixLQUF4Qzs7QUFFQSxRQUFJLGFBQWEsS0FBSyxNQUFMLElBQWUsRUFBQyxHQUFFLENBQUgsRUFBSyxHQUFFLENBQVAsRUFBaEM7QUFDQSxRQUFJLFlBQVksS0FBSyxLQUFMLElBQWMsQ0FBOUI7QUFDQSxRQUFJLFFBQVEsS0FBSyxDQUFMLElBQVUsQ0FBdEI7QUFDQSxRQUFJLFFBQVEsS0FBSyxDQUFMLElBQVUsQ0FBdEI7QUFDQSxRQUFJLGFBQWEsS0FBSyxLQUFMLElBQWMsSUFBL0I7QUFDQSxRQUFJLGtCQUFrQixLQUFLLGVBQUwsSUFBd0IsS0FBSyxLQUFuRDtBQUNBLFFBQUksbUJBQW1CLEtBQUssZ0JBQUwsSUFBeUIsS0FBSyxNQUFyRDs7QUFFQSxpQkFBYSxJQUFiOztBQUVBLFFBQUksYUFBYSxNQUFiLElBQXVCLGFBQWEsWUFBeEMsRUFBc0Q7O0FBRXJELFNBQUksYUFBYSxNQUFqQixFQUF5QjtBQUN4QixtQkFBYSxLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixPQUFwQixFQUE2QjtBQUN6QyxhQUFNLGVBQWUsS0FBZixHQUF1QixjQURZO0FBRXpDLGFBQU0sTUFBTSxPQUFPLFNBQVAsRUFBa0IsT0FBbEIsQ0FBMEIsSUFBMUIsRUFBZ0MsRUFBaEMsQ0FGNkI7QUFHekMsZUFBUSxNQUFNLE9BQU8sVUFBUCxFQUFtQixPQUFuQixDQUEyQixJQUEzQixFQUFpQyxFQUFqQyxDQUgyQjtBQUl6Qyx3QkFBaUIsbUJBSndCO0FBS3pDLGNBQU87QUFMa0MsT0FBN0IsQ0FBYjtBQU9BLGlCQUFXLFdBQVgsR0FBeUIsTUFBekI7QUFDQSxpQkFBVyxNQUFYO0FBQ0EsaUJBQVcsQ0FBWCxHQUFpQixLQUFLLEtBQUwsR0FBYSxDQUFkLEdBQW9CLFdBQVcsS0FBWCxHQUFtQixDQUF4QyxHQUE4QyxPQUE3RDtBQUNBLGlCQUFXLENBQVgsR0FBaUIsS0FBSyxNQUFMLEdBQWMsQ0FBZixHQUFxQixXQUFXLE1BQVgsR0FBb0IsQ0FBMUMsR0FBZ0QsT0FBL0Q7QUFDQSxNQVpELE1BWU87QUFDTixtQkFBYSxLQUFLLEdBQUwsQ0FBUyxVQUFULENBQW9CLENBQXBCLEVBQXVCLENBQXZCLEVBQTBCLGNBQTFCLEVBQTBDLE9BQU8sT0FBUCxDQUExQyxFQUEyRCxZQUEzRCxDQUFiO0FBQ0EsaUJBQVcsV0FBWCxHQUF5QixZQUF6QjtBQUNBLGlCQUFXLEtBQVgsR0FBbUIsU0FBbkI7QUFDQSxpQkFBVyxVQUFYO0FBQ0EsaUJBQVcsQ0FBWCxHQUFnQixVQUFXLFdBQVcsS0FBWCxHQUFtQixDQUEvQixHQUFxQyxPQUFwRDtBQUNBLGlCQUFXLENBQVgsR0FBZ0IsVUFBVyxXQUFXLE1BQVgsR0FBb0IsQ0FBaEMsR0FBc0MsT0FBckQ7QUFDQTtBQUVELEtBdkJELE1BdUJPLElBQUksYUFBYSxPQUFqQixFQUEwQjtBQUNoQyxrQkFBYSxLQUFLLEdBQUwsQ0FBUyxLQUFULENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixPQUFyQixDQUFiO0FBQ0EsZ0JBQVcsS0FBWCxDQUFpQixLQUFqQixDQUF1QixZQUF2QixFQUFxQyxZQUFyQztBQUNBLGdCQUFXLFdBQVgsR0FBeUIsT0FBekI7QUFDQSxnQkFBVyxDQUFYLEdBQWdCLFVBQVksV0FBVyxLQUFaLEdBQXFCLENBQWpDLEdBQXVDLE9BQXREO0FBQ0EsZ0JBQVcsQ0FBWCxHQUFnQixVQUFZLFdBQVcsTUFBWixHQUFzQixDQUFsQyxHQUF3QyxPQUF2RDtBQUNBLEtBTk0sTUFNQSxJQUFJLGFBQWEsWUFBakIsRUFBK0I7QUFDckMsa0JBQWEsS0FBSyxHQUFMLENBQVMsVUFBVCxDQUFvQixLQUFwQixFQUEyQixLQUEzQixFQUNaLGVBRFksRUFDSyxnQkFETCxFQUN1QixPQUR2QixFQUNnQyxVQURoQyxDQUFiO0FBRUEsZ0JBQVcsS0FBWCxDQUFpQixLQUFqQixDQUF1QixZQUF2QixFQUFxQyxZQUFyQztBQUNBLGdCQUFXLE1BQVgsQ0FBa0IsS0FBbEIsQ0FBd0IsV0FBVyxDQUFuQyxFQUFzQyxXQUFXLENBQWpEO0FBQ0EsZ0JBQVcsS0FBWCxHQUFtQixTQUFuQjtBQUNBLGdCQUFXLFdBQVgsR0FBeUIsWUFBekI7QUFDQSxLQVBNLE1BT0EsSUFBSSxhQUFhLFFBQWpCLEVBQTJCO0FBQ2pDLGtCQUFhLEtBQUssR0FBTCxDQUFTLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsV0FBdEIsRUFBbUMsT0FBbkMsQ0FBYjtBQUNBLGdCQUFXLEtBQVgsQ0FBaUIsS0FBakIsQ0FBdUIsWUFBdkIsRUFBcUMsWUFBckM7QUFDQSxnQkFBVyxXQUFYLEdBQXlCLFFBQXpCO0FBQ0EsZ0JBQVcsQ0FBWCxHQUFnQixVQUFZLFdBQVcsS0FBWixHQUFxQixDQUFqQyxHQUF1QyxPQUF0RDtBQUNBLGdCQUFXLENBQVgsR0FBZ0IsVUFBWSxXQUFXLE1BQVosR0FBc0IsQ0FBbEMsR0FBd0MsT0FBdkQ7QUFDQSxLQU5NLE1BTUEsSUFBSSxhQUFhLFFBQWpCLEVBQTJCO0FBQ2pDLGtCQUFhLEtBQUssR0FBTCxDQUFTLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsV0FBdEIsRUFBbUMsUUFBbkMsRUFDWixJQURZLEVBQ04sV0FETSxFQUNPLE9BRFAsRUFDZ0IsWUFEaEIsRUFDOEIsT0FEOUIsQ0FBYjtBQUVBLGdCQUFXLEtBQVgsQ0FBaUIsS0FBakIsQ0FBdUIsWUFBdkIsRUFBcUMsWUFBckM7QUFDQSxnQkFBVyxXQUFYLEdBQXlCLFFBQXpCO0FBQ0EsZ0JBQVcsQ0FBWCxHQUFnQixVQUFZLFdBQVcsS0FBWixHQUFxQixDQUFqQyxHQUF1QyxPQUF0RDtBQUNBLGdCQUFXLENBQVgsR0FBZ0IsVUFBWSxXQUFXLE1BQVosR0FBc0IsQ0FBbEMsR0FBd0MsT0FBdkQ7QUFFQSxLQVJNLE1BUUEsSUFBSSxhQUFhLFVBQWpCLEVBQTZCO0FBQ25DLGtCQUFhLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsUUFBbEIsRUFBNEIsUUFBNUIsQ0FBYjtBQUNBLGdCQUFXLFNBQVgsQ0FBcUIsWUFBckIsRUFBbUMsY0FBbkM7QUFDQSxTQUFJLGlCQUFpQixDQUFyQixFQUF3QjtBQUN2QixpQkFBVyxRQUFYLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLEVBQTBCLFFBQTFCLEVBQW9DLFFBQXBDO0FBQ0EsTUFGRCxNQUVPO0FBQ04saUJBQVcsZUFBWCxDQUEyQixDQUEzQixFQUE4QixDQUE5QixFQUFpQyxRQUFqQyxFQUEyQyxRQUEzQyxFQUFxRCxhQUFyRDtBQUNBO0FBQ0QsZ0JBQVcsT0FBWDtBQUNBLGdCQUFXLENBQVgsR0FBZ0IsVUFBWSxXQUFXLEtBQVosR0FBcUIsQ0FBakMsR0FBdUMsT0FBdEQ7QUFDQSxnQkFBVyxDQUFYLEdBQWdCLFVBQVksV0FBVyxNQUFaLEdBQXNCLENBQWxDLEdBQXdDLE9BQXZEO0FBQ0E7O0FBRUQsZUFBVyxRQUFYLEdBQXNCLENBQXRCO0FBQ0EsZUFBVyxRQUFYLEdBQXNCLENBQXRCO0FBQ0EsZUFBVyxZQUFYLEdBQTBCLFlBQTFCO0FBQ0EsZUFBVyxRQUFYLEdBQXNCLE9BQXRCO0FBQ0EsZUFBVyxRQUFYLEdBQXNCLE9BQXRCOztBQUdBLFFBQUksYUFBYSxLQUFiLElBQXNCLGFBQWEsUUFBdkMsRUFBaUQ7QUFDaEQsZ0JBQVcsWUFBWCxHQUEwQixJQUExQjtBQUNBLGdCQUFXLGlCQUFYLEdBQStCLElBQS9CO0FBQ0EsZ0JBQVcsVUFBWCxHQUF3QixFQUF4QjtBQUNBLGdCQUFXLE1BQVgsQ0FBa0IsV0FBbEIsQ0FBOEIsR0FBOUIsQ0FBa0MsUUFBbEMsRUFBNEMsVUFBNUM7QUFDQTs7QUFFRCxRQUFJLGFBQWEsWUFBYixJQUE2QixhQUFhLFVBQTlDLEVBQTBEO0FBQ3pELGdCQUFXLFVBQVg7QUFDQSxnQkFBVyxHQUFYLENBQWUsVUFBZjtBQUNBLGdCQUFXLFVBQVg7QUFDQSxnQkFBVyxVQUFYLENBQXNCLFVBQXRCO0FBQ0EsS0FMRCxNQUtPO0FBQ04sZ0JBQVcsR0FBWCxDQUFlLFVBQWY7QUFDQSxnQkFBVyxVQUFYLENBQXNCLFVBQXRCO0FBQ0E7QUFDRDs7QUFFRCxjQUFXLE9BQVgsR0FBcUIsS0FBckI7QUFDQSxRQUFLLE1BQUwsQ0FBWSxJQUFaLElBQW9CLFVBQXBCO0FBRUEsR0FsTUs7QUFtTU4sb0JBQWtCLDBCQUFVLEtBQVYsRUFBaUIsSUFBakIsRUFBdUIsS0FBdkIsRUFBOEIsRUFBOUIsRUFBa0M7QUFDbkQsT0FBSSxJQUFKO0FBQ0EsT0FBSSxVQUFVLFNBQVYsSUFBdUIsVUFBVSxJQUFyQyxFQUEyQztBQUMxQyxXQUFPLEtBQUssTUFBTCxDQUFZLElBQVosRUFBa0IsVUFBbEIsQ0FBNkIsS0FBN0IsQ0FBUDtBQUNBLElBRkQsTUFFTyxJQUFJLE9BQU8sU0FBUCxJQUFvQixPQUFPLElBQS9CLEVBQXFDLENBRTNDOztBQUVELE9BQUksS0FBSyxXQUFMLEtBQXFCLE1BQXpCLEVBQWlDO0FBQ2hDLFNBQUssSUFBTCxHQUFZLEtBQVo7QUFDQSxTQUFLLE1BQUw7QUFDQSxRQUFJLEtBQUssWUFBTCxLQUFzQixJQUExQixFQUFnQyxDQUUvQixDQUZELE1BRU87QUFDTixVQUFLLENBQUwsR0FBVyxLQUFLLEtBQUwsR0FBYSxDQUFkLEdBQW9CLEtBQUssS0FBTCxHQUFhLENBQWxDLEdBQXdDLEtBQUssUUFBdEQ7QUFDQSxVQUFLLENBQUwsR0FBVyxLQUFLLE1BQUwsR0FBYyxDQUFmLEdBQXFCLEtBQUssTUFBTCxHQUFjLENBQXBDLEdBQTBDLEtBQUssUUFBeEQ7QUFDQTtBQUNELElBVEQsTUFTTyxJQUFJLEtBQUssV0FBTCxLQUFxQixZQUF6QixFQUF1QztBQUM3QyxTQUFLLElBQUwsR0FBWSxLQUFaO0FBQ0EsU0FBSyxVQUFMO0FBQ0EsUUFBSSxLQUFLLFlBQUwsS0FBc0IsSUFBMUIsRUFBZ0MsQ0FFL0IsQ0FGRCxNQUVPO0FBQ04sVUFBSyxDQUFMLEdBQVcsS0FBSyxLQUFMLEdBQWEsQ0FBZCxHQUFvQixLQUFLLEtBQUwsR0FBYSxDQUFsQyxHQUF3QyxLQUFLLFFBQXREO0FBQ0EsVUFBSyxDQUFMLEdBQVcsS0FBSyxNQUFMLEdBQWMsQ0FBZixHQUFxQixLQUFLLE1BQUwsR0FBYyxDQUFwQyxHQUEwQyxLQUFLLFFBQXhEO0FBQ0E7QUFDRCxJQVRNLE1BU0EsSUFBSSxLQUFLLFdBQUwsS0FBcUIsT0FBekIsRUFBa0M7QUFDeEMsU0FBSyxXQUFMLENBQWlCLEtBQWpCO0FBQ0E7QUFFRCxHQWpPSztBQWtPTixnQkFBYyxzQkFBVSxJQUFWLEVBQWdCLEtBQWhCLEVBQXVCO0FBQ3BDLFVBQU8sS0FBSyxNQUFMLENBQVksSUFBWixFQUFrQixVQUFsQixDQUE2QixLQUE3QixDQUFQO0FBQ0EsR0FwT0s7QUFxT04sYUFBVyxtQkFBVSxJQUFWLEVBQWdCO0FBQzFCLFFBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsS0FBSyxNQUFMLENBQVksSUFBWixDQUF0QjtBQUNBLFFBQUssTUFBTCxDQUFZLElBQVosRUFBa0IsT0FBbEIsR0FBNEIsSUFBNUI7QUFDQTtBQUNBLEdBek9LO0FBME9OLGFBQVcsbUJBQVUsSUFBVixFQUFnQjtBQUMxQixRQUFLLE1BQUwsQ0FBWSxJQUFaLEVBQWtCLE9BQWxCLEdBQTRCLEtBQTVCO0FBQ0E7QUFDQSxHQTdPSztBQThPTixnQkFBYyxzQkFBVSxJQUFWLEVBQWdCO0FBQzdCLFFBQUssTUFBTCxDQUFZLElBQVosRUFBa0IsT0FBbEI7QUFDQSxVQUFPLEtBQUssTUFBTCxDQUFZLElBQVosQ0FBUDtBQUNBO0FBalBLLEVBQVA7QUFtUEEsQ0FsUUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7O0lBRU0sUTs7O0FBRUY7QUFDQSxvQkFBWSxJQUFaLEVBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLEtBQXhCLEVBQStCLElBQS9CLEVBQXFDO0FBQUE7O0FBR25DO0FBSG1DLG9IQUM3QixJQUQ2QixFQUN2QixDQUR1QixFQUNwQixDQURvQixFQUNqQixVQURpQixFQUNMLEtBREs7O0FBSW5DLFVBQUssTUFBTCxDQUFZLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsSUFBdkI7QUFDQSxVQUFLLElBQUwsQ0FBVSxPQUFWLENBQWtCLE1BQWxCLENBQXlCLFVBQXpCO0FBQ0E7O0FBRUEsVUFBSyxJQUFMLEdBQVksSUFBWjtBQUNBO0FBQ0EsVUFBSyxLQUFMLEdBQWEsRUFBYjtBQUNBLFVBQUssS0FBTCxDQUFXLENBQVgsR0FBZSxLQUFLLEdBQUwsQ0FBUyxNQUFLLEtBQUwsQ0FBVyxDQUFwQixDQUFmOztBQUVBO0FBQ0EsVUFBSyxLQUFMLEdBQWEsTUFBSyxJQUFMLENBQVUsVUFBVixDQUFxQixLQUFyQixHQUE2QixDQUFDLENBQTNDOztBQUVBLFVBQUssc0JBQUwsR0FBOEIsTUFBSyxJQUFMLENBQVUsUUFBVixDQUFtQixZQUFuQixDQUFnQyxNQUFLLENBQXJDLEVBQXdDLE1BQUssQ0FBN0MsQ0FBOUI7QUFDQSxVQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFNBQW5CLENBQTZCLE1BQUssc0JBQUwsQ0FBNEIsQ0FBekQsRUFBNEQsTUFBSyxzQkFBTCxDQUE0QixDQUF4RixFQUEyRixZQUEzRixHQUEwRyxJQUExRzs7QUFqQm1DO0FBbUJwQzs7Ozs2QkFFUTtBQUNQLFdBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsU0FBbkIsQ0FBNkIsS0FBSyxzQkFBTCxDQUE0QixDQUF6RCxFQUE0RCxLQUFLLHNCQUFMLENBQTRCLENBQXhGLEVBQTJGLFlBQTNGLEdBQTBHLEtBQTFHO0FBQ0EsV0FBSyxPQUFMO0FBQ0Q7OztrQ0FFYTtBQUNaLFdBQUssSUFBTCxHQUFZLFFBQVo7QUFDQSxXQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFNBQW5CLENBQTZCLEtBQUssc0JBQUwsQ0FBNEIsQ0FBekQsRUFBNEQsS0FBSyxzQkFBTCxDQUE0QixDQUF4RixFQUEyRixLQUEzRixHQUFtRyxDQUFuRztBQUNEOzs7bUNBRWM7QUFDYixXQUFLLElBQUwsR0FBWSxRQUFaO0FBQ0EsV0FBSyxJQUFMLENBQVUsUUFBVixDQUFtQixTQUFuQixDQUE2QixLQUFLLHNCQUFMLENBQTRCLENBQXpELEVBQTRELEtBQUssc0JBQUwsQ0FBNEIsQ0FBeEYsRUFBMkYsS0FBM0YsR0FBbUcsQ0FBbkc7QUFDRDs7O29DQUVlO0FBQ2QsV0FBSyxzQkFBTCxHQUE4QixLQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFlBQW5CLENBQWdDLEtBQUssQ0FBckMsRUFBd0MsS0FBSyxDQUE3QyxDQUE5QjtBQUNBLFVBQUksb0JBQW9CLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsYUFBbkIsQ0FBaUMsS0FBSyxJQUFMLENBQVUsTUFBVixDQUFpQixZQUFsRCxFQUFnRSxLQUFLLHNCQUFyRSxDQUF4QjtBQUNBLFVBQUksa0JBQWtCLEVBQXRCOztBQUdBLFdBQUssSUFBSSxJQUFULElBQWlCLGlCQUFqQixFQUFvQztBQUNoQyx3QkFBZ0IsSUFBaEIsQ0FBcUIsS0FBSyxJQUFMLENBQVUsUUFBVixDQUFtQixTQUFuQixDQUE2QixrQkFBa0IsSUFBbEIsRUFBd0IsQ0FBckQsRUFBd0Qsa0JBQWtCLElBQWxCLEVBQXdCLENBQWhGLENBQXJCO0FBQ0E7QUFDQTtBQUNIOztBQUVELGFBQU8sZUFBUDtBQUNEOzs7eUJBRUksVyxFQUFhOztBQUVoQjtBQUNBLFdBQUssSUFBSSxJQUFULElBQWlCLEtBQUssZUFBdEIsRUFBdUM7QUFDbkMsYUFBSyxlQUFMLENBQXFCLElBQXJCLEVBQTJCLEtBQTNCLEdBQW1DLENBQW5DO0FBQ0EsZUFBTyxLQUFLLGVBQUwsQ0FBcUIsSUFBckIsRUFBMkIsUUFBbEM7QUFDSDs7QUFFRDtBQUNBO0FBQ0EsVUFBSSxTQUFTLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsWUFBbkIsQ0FBZ0MsWUFBWSxDQUE1QyxFQUErQyxZQUFZLENBQTNELENBQWI7QUFDQSxXQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFNBQW5CLENBQTZCLEtBQUssc0JBQUwsQ0FBNEIsQ0FBekQsRUFBNEQsS0FBSyxzQkFBTCxDQUE0QixDQUF4RixFQUEyRixZQUEzRixHQUEwRyxLQUExRztBQUNBLFVBQUksV0FBVyxLQUFLLEdBQUwsQ0FBUyxLQUFLLENBQUwsR0FBUyxPQUFPLENBQWhCLEdBQW9CLEtBQUssQ0FBekIsR0FBNkIsT0FBTyxDQUE3QyxFQUFnRCxPQUFoRCxDQUF3RCxDQUF4RCxDQUFmOztBQUVBO0FBQ0EsV0FBSyxzQkFBTCxHQUE4QixXQUE5QjtBQUNBLFdBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsU0FBbkIsQ0FBNkIsS0FBSyxzQkFBTCxDQUE0QixDQUF6RCxFQUE0RCxLQUFLLHNCQUFMLENBQTRCLENBQXhGLEVBQTJGLFlBQTNGLEdBQTBHLElBQTFHOztBQUVBO0FBQ0EsVUFBSSxRQUFRLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxLQUFkLENBQW9CLElBQXBCLEVBQTBCLEVBQTFCLENBQThCLEVBQUMsR0FBRSxPQUFPLENBQVYsRUFBYSxHQUFFLE9BQU8sQ0FBdEIsRUFBOUIsRUFBeUQsV0FBUyxFQUFsRSxFQUF1RSxPQUFPLE1BQVAsQ0FBYyxLQUFkLENBQW9CLEdBQTNGLEVBQWdHLElBQWhHLENBQVo7QUFDQSxZQUFNLFVBQU4sQ0FBaUIsR0FBakIsQ0FBcUIsS0FBSyxJQUFMLENBQVUsUUFBVixDQUFtQixXQUF4QyxFQUFxRCxLQUFLLElBQUwsQ0FBVSxRQUEvRDs7QUFFQTtBQUNBLGFBQU8sS0FBSyxlQUFaO0FBQ0EsYUFBTyxLQUFLLGlCQUFaO0FBQ0Q7Ozs7RUEvRWtCLE9BQU8sTTs7a0JBbUZiLFE7Ozs7Ozs7Ozs7Ozs7SUNwRlgsTTtBQUVMLG9CQUFZLFFBQVosRUFBc0I7QUFBQTs7QUFFckIsYUFBSyxNQUFMLEdBQWMsR0FBRyxPQUFILEVBQWQ7QUFDTSxhQUFLLFFBQUwsR0FBZ0IsS0FBSyxNQUFMLENBQVksUUFBWixHQUF1QixRQUF2Qzs7QUFFQSxhQUFLLE1BQUwsQ0FBWSxFQUFaLENBQWUsS0FBZixFQUFzQixVQUFTLElBQVQsRUFBYztBQUNoQyxvQkFBUSxHQUFSLENBQVksT0FBWjtBQUNBLG9CQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0gsU0FIRDs7QUFLQSxhQUFLLE1BQUwsQ0FBWSxFQUFaLENBQWUsUUFBZixFQUF5QixVQUFTLElBQVQsRUFBYztBQUNuQyxnQkFBRyxLQUFLLElBQUwsSUFBYSxXQUFoQixFQUE2QjtBQUN6QixxQkFBSyxRQUFMLENBQWMsZUFBZCxDQUE4QixJQUE5QjtBQUNIO0FBQ0QsZ0JBQUcsS0FBSyxJQUFMLElBQWEsVUFBaEIsRUFBNEI7QUFDeEIscUJBQUssUUFBTCxDQUFjLGNBQWQsQ0FBNkIsSUFBN0I7QUFDSDtBQUNELGdCQUFHLEtBQUssSUFBTCxJQUFhLFdBQWhCLEVBQTZCO0FBQ3pCLHFCQUFLLFFBQUwsQ0FBYyxlQUFkLENBQThCLElBQTlCO0FBQ0g7QUFDRCxnQkFBRyxLQUFLLElBQUwsSUFBYSxPQUFoQixFQUF5QjtBQUNyQixxQkFBSyxRQUFMLENBQWMsV0FBZCxDQUEwQixJQUExQjtBQUNIO0FBQ0QsZ0JBQUksS0FBSyxJQUFMLElBQWEsTUFBakIsRUFBeUI7QUFDckIscUJBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsSUFBbkIsQ0FBd0IsUUFBeEIsQ0FBaUMsS0FBSyxPQUFMLENBQWEsS0FBOUM7QUFDSDtBQUNELGdCQUFJLEtBQUssSUFBTCxJQUFhLE1BQWpCLEVBQXlCO0FBQ3JCLHdCQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0E7QUFDSDtBQUNKLFNBcEJEOztBQXNCQSxhQUFLLE1BQUwsQ0FBWSxFQUFaLENBQWUsU0FBZixFQUEwQixVQUFTLElBQVQsRUFBYztBQUNwQyxvQkFBUSxHQUFSLENBQVksV0FBWjtBQUNBLG9CQUFPLEtBQUssT0FBTCxDQUFhLElBQXBCO0FBQ0kscUJBQUssVUFBTDtBQUNJLHlCQUFLLFFBQUwsQ0FBYyxTQUFkLENBQXdCLFVBQXhCO0FBQ0E7O0FBSFI7QUFNSCxTQVJEOztBQVVBLGFBQUssTUFBTCxDQUFZLEVBQVosQ0FBZSxRQUFmLEVBQXlCLFVBQVMsSUFBVCxFQUFjO0FBQ25DLG9CQUFRLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsZ0JBQUksT0FBTyxLQUFLLFFBQUwsQ0FBYyxLQUFLLFFBQW5CLENBQVAsS0FBeUMsVUFBN0MsRUFBeUQ7QUFDckQsd0JBQVEsR0FBUixDQUFZLElBQVo7QUFDQSxxQkFBSyxRQUFMLENBQWMsS0FBSyxRQUFuQixFQUE2QixLQUFLLE9BQWxDO0FBRUgsYUFKRCxNQUlPO0FBQ0gsd0JBQVEsR0FBUixDQUFZLDRDQUE0QyxLQUFLLFFBQTdEO0FBQ0g7QUFDSixTQVREO0FBVU47Ozs7dUNBRWM7QUFDZCxpQkFBSyxNQUFMLENBQVksSUFBWixDQUFpQixXQUFqQixFQUE4QixFQUFDLE1BQUssYUFBYSxPQUFiLENBQXFCLFVBQXJCLENBQU4sRUFBOUI7QUFDQTs7O2tDQUVZLE8sRUFBUztBQUNmLG9CQUFRLEdBQVIsQ0FBWSxlQUFaO0FBQ0EsaUJBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsT0FBakIsRUFBMEIsT0FBMUI7QUFDSDs7Ozs7O2tCQUdVLE07Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVmOztJQUVNLEs7OztBQUVKO0FBQ0EsaUJBQVksSUFBWixFQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixLQUF4QixFQUErQixJQUEvQixFQUFxQztBQUFBOztBQUduQztBQUhtQyw4R0FDN0IsSUFENkIsRUFDdkIsQ0FEdUIsRUFDcEIsQ0FEb0IsRUFDakIsT0FEaUIsRUFDUixLQURROztBQUluQyxVQUFLLE1BQUwsQ0FBWSxLQUFaLENBQWtCLEdBQWxCLEVBQXVCLElBQXZCO0FBQ0EsVUFBSyxJQUFMLENBQVUsT0FBVixDQUFrQixNQUFsQixDQUF5QixVQUF6QjtBQUNBOztBQUVBLFVBQUssSUFBTCxHQUFZLElBQVo7QUFDQTtBQUNBLFVBQUssS0FBTCxHQUFhLEVBQWI7QUFDQSxVQUFLLEtBQUwsQ0FBVyxDQUFYLEdBQWUsS0FBSyxHQUFMLENBQVMsTUFBSyxLQUFMLENBQVcsQ0FBcEIsQ0FBZjs7QUFFQTtBQUNBLFVBQUssS0FBTCxHQUFhLE1BQUssSUFBTCxDQUFVLFVBQVYsQ0FBcUIsS0FBckIsR0FBNkIsQ0FBQyxDQUEzQzs7QUFFQSxVQUFLLHNCQUFMLEdBQThCLE1BQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsWUFBbkIsQ0FBZ0MsTUFBSyxDQUFyQyxFQUF3QyxNQUFLLENBQTdDLENBQTlCO0FBQ0EsVUFBSyxJQUFMLENBQVUsUUFBVixDQUFtQixTQUFuQixDQUE2QixNQUFLLHNCQUFMLENBQTRCLENBQXpELEVBQTRELE1BQUssc0JBQUwsQ0FBNEIsQ0FBeEYsRUFBMkYsWUFBM0YsR0FBMEcsSUFBMUc7O0FBakJtQztBQW1CcEM7Ozs7NkJBRVE7QUFDUCxXQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFNBQW5CLENBQTZCLEtBQUssc0JBQUwsQ0FBNEIsQ0FBekQsRUFBNEQsS0FBSyxzQkFBTCxDQUE0QixDQUF4RixFQUEyRixZQUEzRixHQUEwRyxLQUExRztBQUNBLFdBQUssT0FBTDtBQUNEOzs7a0NBRWE7QUFDWixXQUFLLElBQUwsR0FBWSxRQUFaO0FBQ0EsV0FBSyxJQUFMLENBQVUsUUFBVixDQUFtQixTQUFuQixDQUE2QixLQUFLLHNCQUFMLENBQTRCLENBQXpELEVBQTRELEtBQUssc0JBQUwsQ0FBNEIsQ0FBeEYsRUFBMkYsS0FBM0YsR0FBbUcsQ0FBbkc7QUFDRDs7O21DQUVjO0FBQ2IsV0FBSyxJQUFMLEdBQVksUUFBWjtBQUNBLFdBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsU0FBbkIsQ0FBNkIsS0FBSyxzQkFBTCxDQUE0QixDQUF6RCxFQUE0RCxLQUFLLHNCQUFMLENBQTRCLENBQXhGLEVBQTJGLEtBQTNGLEdBQW1HLENBQW5HO0FBQ0Q7OztvQ0FFZTtBQUNkLFdBQUssc0JBQUwsR0FBOEIsS0FBSyxJQUFMLENBQVUsUUFBVixDQUFtQixZQUFuQixDQUFnQyxLQUFLLENBQXJDLEVBQXdDLEtBQUssQ0FBN0MsQ0FBOUI7QUFDQSxVQUFJLG9CQUFvQixLQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLGFBQW5CLENBQWlDLEtBQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsWUFBbEQsRUFBZ0UsS0FBSyxzQkFBckUsQ0FBeEI7QUFDQSxVQUFJLGtCQUFrQixFQUF0Qjs7QUFHQSxXQUFLLElBQUksSUFBVCxJQUFpQixpQkFBakIsRUFBb0M7QUFDaEMsd0JBQWdCLElBQWhCLENBQXFCLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsU0FBbkIsQ0FBNkIsa0JBQWtCLElBQWxCLEVBQXdCLENBQXJELEVBQXdELGtCQUFrQixJQUFsQixFQUF3QixDQUFoRixDQUFyQjtBQUNBO0FBQ0E7QUFDSDs7QUFFRCxhQUFPLGVBQVA7QUFDRDs7O3lCQUVJLFcsRUFBYTs7QUFFaEI7QUFDQSxXQUFLLElBQUksSUFBVCxJQUFpQixLQUFLLGVBQXRCLEVBQXVDO0FBQ25DLGFBQUssZUFBTCxDQUFxQixJQUFyQixFQUEyQixLQUEzQixHQUFtQyxDQUFuQztBQUNBLGVBQU8sS0FBSyxlQUFMLENBQXFCLElBQXJCLEVBQTJCLFFBQWxDO0FBQ0g7O0FBRUQ7QUFDQTtBQUNBLFVBQUksU0FBUyxLQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFlBQW5CLENBQWdDLFlBQVksQ0FBNUMsRUFBK0MsWUFBWSxDQUEzRCxDQUFiO0FBQ0EsV0FBSyxJQUFMLENBQVUsUUFBVixDQUFtQixTQUFuQixDQUE2QixLQUFLLHNCQUFMLENBQTRCLENBQXpELEVBQTRELEtBQUssc0JBQUwsQ0FBNEIsQ0FBeEYsRUFBMkYsWUFBM0YsR0FBMEcsS0FBMUc7QUFDQSxVQUFJLFdBQVcsS0FBSyxHQUFMLENBQVMsS0FBSyxDQUFMLEdBQVMsT0FBTyxDQUFoQixHQUFvQixLQUFLLENBQXpCLEdBQTZCLE9BQU8sQ0FBN0MsRUFBZ0QsT0FBaEQsQ0FBd0QsQ0FBeEQsQ0FBZjs7QUFFQTtBQUNBLFdBQUssc0JBQUwsR0FBOEIsV0FBOUI7QUFDQSxXQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFNBQW5CLENBQTZCLEtBQUssc0JBQUwsQ0FBNEIsQ0FBekQsRUFBNEQsS0FBSyxzQkFBTCxDQUE0QixDQUF4RixFQUEyRixZQUEzRixHQUEwRyxJQUExRzs7QUFFQTtBQUNBLFVBQUksUUFBUSxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsS0FBZCxDQUFvQixJQUFwQixFQUEwQixFQUExQixDQUE4QixFQUFDLEdBQUUsT0FBTyxDQUFWLEVBQWEsR0FBRSxPQUFPLENBQXRCLEVBQTlCLEVBQXlELFdBQVMsRUFBbEUsRUFBdUUsT0FBTyxNQUFQLENBQWMsS0FBZCxDQUFvQixHQUEzRixFQUFnRyxJQUFoRyxDQUFaO0FBQ0EsWUFBTSxVQUFOLENBQWlCLEdBQWpCLENBQXFCLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsV0FBeEMsRUFBcUQsS0FBSyxJQUFMLENBQVUsUUFBL0Q7O0FBRUE7QUFDQSxhQUFPLEtBQUssZUFBWjtBQUNBLGFBQU8sS0FBSyxpQkFBWjtBQUNEOzs7O0VBL0VpQixPQUFPLE07O2tCQW1GWixLOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGZjtJQUNNLE87OztBQUVGO0FBQ0EscUJBQVksSUFBWixFQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QjtBQUFBOztBQUd0QjtBQUhzQixzSEFDaEIsSUFEZ0IsRUFDVixDQURVLEVBQ1AsQ0FETyxFQUNKLFNBREk7O0FBSXRCLGNBQUssTUFBTCxDQUFZLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsR0FBdkI7QUFDQSxjQUFLLElBQUwsQ0FBVSxPQUFWLENBQWtCLE1BQWxCLENBQXlCLFVBQXpCOztBQUVBO0FBQ0EsY0FBSyxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsY0FBSyxNQUFMLENBQVksV0FBWixDQUF3QixHQUF4QixDQUE0QixNQUFLLE9BQWpDOztBQUVBO0FBQ0EsY0FBSyxLQUFMLEdBQWEsRUFBYjtBQUNBLGNBQUssS0FBTCxDQUFXLENBQVgsR0FBZSxLQUFLLEdBQUwsQ0FBUyxNQUFLLEtBQUwsQ0FBVyxDQUFwQixDQUFmO0FBQ0E7QUFDQTtBQWZzQjtBQWdCdkI7Ozs7a0NBRVU7QUFDVCxpQkFBSyxJQUFMLENBQVUsTUFBVixDQUFpQixTQUFqQixDQUEyQixFQUFDLE9BQU8sZ0JBQVIsRUFBM0I7QUFDRDs7O2lDQUVRO0FBQ0w7QUFDQSxpQkFBSyxPQUFMLEdBQWUsSUFBZjtBQUNBO0FBQ0g7OztrQ0FFUztBQUNOO0FBQ0E7QUFDQTtBQUNIOzs7O0VBbkNpQixPQUFPLE07O2tCQXVDWixPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDakI7SUFDTSxVOzs7QUFFSjtBQUNBLHNCQUFZLElBQVosRUFBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsS0FBeEIsRUFBK0I7QUFBQTs7QUFHN0I7QUFINkIsd0hBQ3ZCLElBRHVCLEVBQ2pCLENBRGlCLEVBQ2QsQ0FEYyxFQUNYLFlBRFcsRUFDRyxLQURIOztBQUk3QixVQUFLLEtBQUwsR0FBYSxFQUFiO0FBQ0EsVUFBSyxLQUFMLENBQVcsQ0FBWCxHQUFlLEtBQUssR0FBTCxDQUFTLE1BQUssS0FBTCxDQUFXLENBQXBCLENBQWY7O0FBRUEsVUFBSyxNQUFMLENBQVksS0FBWixDQUFrQixHQUFsQixFQUF1QixHQUF2QjtBQVA2QjtBQVE5Qjs7Ozs2QkFFTztBQUNOLFdBQUssQ0FBTCxHQUFTLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsWUFBaEIsQ0FBNkIsQ0FBdEM7QUFDQSxXQUFLLENBQUwsR0FBUyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFlBQWhCLENBQTZCLENBQXRDO0FBQ0Q7Ozs7RUFoQnNCLE9BQU8sTTs7a0JBb0JqQixVOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCZjtJQUNNLEk7OztBQUVKO0FBQ0EsZ0JBQVksSUFBWixFQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixLQUF4QixFQUErQjtBQUFBOztBQUc3QjtBQUg2Qiw0R0FDdkIsSUFEdUIsRUFDakIsQ0FEaUIsRUFDZCxDQURjLEVBQ1gsTUFEVyxFQUNILEtBREc7O0FBSTdCLFVBQUssTUFBTCxDQUFZLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsR0FBdkI7QUFDQSxVQUFLLElBQUwsQ0FBVSxPQUFWLENBQWtCLE1BQWxCLENBQXlCLFVBQXpCOztBQUVBO0FBQ0EsVUFBSyxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsVUFBSyxNQUFMLENBQVksV0FBWixDQUF3QixHQUF4QixDQUE0QixNQUFLLE9BQWpDOztBQUVBO0FBQ0EsVUFBSyxLQUFMLEdBQWEsRUFBYjtBQUNBLFVBQUssS0FBTCxDQUFXLENBQVgsR0FBZSxLQUFLLEdBQUwsQ0FBUyxNQUFLLEtBQUwsQ0FBVyxDQUFwQixDQUFmO0FBQ0E7QUFDQTs7QUFFQSxVQUFLLEtBQUwsR0FBYSxFQUFiO0FBQ0EsVUFBSyxLQUFMLEdBQWEsTUFBSyxLQUFMLEdBQVcsQ0FBeEI7QUFsQjZCO0FBbUI5Qjs7Ozs4QkFFVTtBQUNULFdBQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsU0FBakIsQ0FBMkIsRUFBQyxPQUFPLGFBQVIsRUFBM0I7QUFDRDs7OzZCQUVRO0FBQ0wsV0FBSyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFdBQUssT0FBTCxHQUFlLElBQWY7QUFDQSxXQUFLLFlBQUwsR0FBb0IsSUFBcEI7QUFDSDs7OzhCQUVTO0FBQ047QUFDQTtBQUNBO0FBQ0g7Ozs2QkFFUSxLLEVBQU87QUFDZCxXQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsV0FBSyxLQUFMLEdBQWEsUUFBUSxDQUFyQjtBQUNEOzs7O0VBM0NnQixPQUFPLE07O2tCQThDWCxJOzs7Ozs7Ozs7OztJQy9DVCxNOztBQUVKO0FBQ0Esa0JBQWM7QUFBQTtBQUNiLEM7O2tCQUlZLE07Ozs7Ozs7Ozs7Ozs7OztJQ1JULFE7OztBQUVKO0FBQ0Esb0JBQVksSUFBWixFQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixLQUF4QixFQUErQixJQUEvQixFQUFxQyxJQUFyQyxFQUEyQztBQUFBOztBQUN6QyxRQUFJLFFBQUo7QUFDQSxZQUFRLElBQVI7QUFDRSxXQUFLLFFBQUw7QUFDRSxtQkFBVyxDQUFYO0FBQ0E7QUFDRixXQUFLLFVBQUw7QUFDRSxtQkFBVyxDQUFYO0FBQ0E7QUFDRixXQUFLLFdBQUw7QUFDRSxtQkFBVyxDQUFYO0FBQ0E7QUFDRixXQUFLLFFBQUw7QUFDRSxtQkFBVyxDQUFYO0FBQ0E7QUFDRjtBQUNFLGdCQUFRLEtBQVIsQ0FBYyxtQkFBZDtBQUNBO0FBZko7O0FBbUJBO0FBckJ5QyxvSEFtQm5DLElBbkJtQyxFQW1CN0IsQ0FuQjZCLEVBbUIxQixDQW5CMEIsRUFtQnZCLFVBbkJ1QixFQW1CWCxRQW5CVzs7QUFzQnpDLFVBQUssTUFBTCxDQUFZLEtBQVosQ0FBa0IsR0FBbEIsRUFBdUIsR0FBdkI7QUFDQSxVQUFLLElBQUwsQ0FBVSxPQUFWLENBQWtCLE1BQWxCLENBQXlCLFVBQXpCO0FBQ0E7O0FBRUEsVUFBSyxJQUFMLEdBQVksSUFBWjtBQUNBLFVBQUssSUFBTCxHQUFZLElBQVo7QUFDQTtBQUNBLFVBQUssS0FBTCxHQUFhLEVBQWI7QUFDQSxVQUFLLEtBQUwsQ0FBVyxDQUFYLEdBQWUsS0FBSyxHQUFMLENBQVMsTUFBSyxLQUFMLENBQVcsQ0FBcEIsQ0FBZjs7QUFFQTtBQUNBLFVBQUssS0FBTCxHQUFhLE1BQUssSUFBTCxDQUFVLFVBQVYsQ0FBcUIsS0FBckIsR0FBNkIsQ0FBQyxDQUEzQzs7QUFFQSxVQUFLLHNCQUFMLEdBQThCLE1BQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsWUFBbkIsQ0FBZ0MsTUFBSyxDQUFyQyxFQUF3QyxNQUFLLENBQTdDLENBQTlCO0FBQ0EsVUFBSyxJQUFMLENBQVUsUUFBVixDQUFtQixTQUFuQixDQUE2QixNQUFLLHNCQUFMLENBQTRCLENBQXpELEVBQTRELE1BQUssc0JBQUwsQ0FBNEIsQ0FBeEYsRUFBMkYsWUFBM0YsR0FBMEcsSUFBMUc7O0FBcEN5QztBQXNDMUM7OztFQXpDb0IsT0FBTyxNOztrQkE2Q2YsUTs7Ozs7Ozs7Ozs7Ozs7O0lDN0NULFM7OztBQUVKO0FBQ0UscUJBQVksSUFBWixFQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixLQUF4QixFQUErQjtBQUFBOztBQUFBLGlIQUNyQixJQURxQixFQUNmLENBRGUsRUFDWixDQURZLEVBQ1QsT0FEUyxFQUNBLEtBREE7QUFFOUI7OztFQUxtQixPQUFPLE07O2tCQVNoQixTOzs7Ozs7Ozs7Ozs7O0lDVFQsUzs7QUFFSjtBQUNBLHVCQUFjO0FBQUE7O0FBQ1osU0FBSyxZQUFMLEdBQW9CLE9BQU8sTUFBUCxDQUFjO0FBQzlCLGNBQVEsQ0FEc0I7QUFFOUIsY0FBUSxDQUZzQjtBQUc5QixhQUFPLENBSHVCO0FBSTlCLGNBQVEsQ0FKc0I7QUFLOUIsZUFBUyxDQUxxQjtBQU05QixnQkFBVSxDQU5vQjtBQU85QixlQUFTO0FBUHFCLEtBQWQsQ0FBcEI7QUFTQSxTQUFLLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxTQUFJLElBQUksSUFBUixJQUFnQixLQUFLLFlBQXJCLEVBQW1DO0FBQy9CLFdBQUssU0FBTCxDQUFlLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUFmLElBQTBDLENBQTFDO0FBQ0g7QUFDRjs7OzswQkFFSyxJLEVBQU0sSyxFQUFPO0FBQ2pCLFVBQUcsS0FBSyxTQUFMLENBQWUsS0FBSyxZQUFMLENBQWtCLElBQWxCLENBQWYsSUFBMEMsS0FBN0MsRUFDSSxPQUFPLElBQVA7O0FBRUosYUFBTyxLQUFQO0FBQ0Q7Ozs2QkFFUSxJLEVBQU07QUFDYixhQUFPLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBUDtBQUNEOzs7d0JBRUcsSSxFQUFNLEssRUFBTyxDQUNoQjs7OzJCQUVNLEksRUFBTSxLLEVBQU87QUFDbEIsV0FBSyxTQUFMLENBQWUsSUFBZixLQUF3QixLQUF4QjtBQUNEOzs7Ozs7a0JBSVksUzs7Ozs7Ozs7Ozs7QUN2Q2Y7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztJQUVNLFE7O0FBRUo7QUFDQSxzQkFBWSxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLGFBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxhQUFLLE1BQUwsR0FBYztBQUNWLDRCQUFnQixFQUROO0FBRVYsMkJBQWU7QUFGTCxTQUFkO0FBSUEsYUFBSyxRQUFMLEdBQWdCO0FBQ1osNEJBQWdCLEVBREo7QUFFWiwyQkFBZTtBQUZILFNBQWhCOztBQUtBLGFBQUssVUFBTCxHQUFrQixFQUFsQjtBQUNBLGFBQUssU0FBTCxHQUFpQixFQUFqQjs7QUFFQSxhQUFLLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxhQUFLLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxhQUFLLFlBQUwsR0FBb0IsSUFBcEI7O0FBRUEsYUFBSyxlQUFMLEdBQXVCLEtBQXZCO0FBQ0EsYUFBSyxlQUFMLEdBQXVCLEVBQXZCO0FBQ0Q7Ozs7d0NBRWlCLEksRUFBTTtBQUNsQjtBQUNBO0FBQ0E7O0FBRUEsZ0JBQUksS0FBSyxPQUFMLENBQWEsTUFBYixLQUF3QixLQUE1QixFQUFtQztBQUMvQix3QkFBUSxHQUFSLENBQVksa0JBQVo7QUFDQSxxQkFBSyxZQUFMLENBQWtCLEtBQUssT0FBTCxDQUFhLFNBQS9CLEVBQTBDLEtBQUssT0FBTCxDQUFhLFFBQXZEO0FBQ0g7O0FBRUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOzs7dUNBRWMsSSxFQUFNLENBRXBCOzs7d0NBRWUsSSxFQUFNLENBRXJCOzs7b0NBRVcsSSxFQUFNLENBRWpCOzs7a0NBRU8sSSxFQUFNO0FBQ2QsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsU0FBaEIsQ0FBMEIsSUFBMUI7QUFDRDs7O21DQUVVLE8sRUFBUztBQUNsQixpQkFBSyxJQUFMLENBQVUsSUFBVixDQUFlLFFBQWYsQ0FBd0IsUUFBUSxLQUFoQztBQUNBLGlCQUFLLFVBQUwsR0FBa0IsUUFBUSxVQUExQjtBQUNBLGdCQUFJLGFBQWEsRUFBakI7QUFDQTtBQUNBLGlCQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksUUFBUSxVQUFSLENBQW1CLE1BQXZDLEVBQStDLEdBQS9DLEVBQW9EO0FBQ2hELDJCQUFXLElBQVgsQ0FBZ0IsRUFBRSxHQUFHLFFBQVEsVUFBUixDQUFtQixDQUFuQixFQUFzQixNQUF0QixDQUE2QixDQUFsQyxFQUFxQyxHQUFHLFFBQVEsVUFBUixDQUFtQixDQUFuQixFQUFzQixNQUF0QixDQUE2QixDQUFyRSxFQUFoQjtBQUNIO0FBQ0QsaUJBQUssU0FBTCxDQUFlLFVBQWYsRUFBMkIsUUFBM0I7QUFDRDs7O29DQUVXO0FBQ1IsaUJBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxNQUFmO0FBQ0g7OzttQ0FFVTtBQUNQLGlCQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsT0FBZjtBQUNIOzs7cUNBRVksSSxFQUFNO0FBQ2YsaUJBQUssZUFBTCxHQUF1QixJQUF2QjtBQUNBLGlCQUFLLFlBQUwsR0FBb0IsS0FBSyxPQUF6QjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxFQUFWLENBQWEsTUFBYjtBQUNBLG9CQUFRLEdBQVIsQ0FBWSwrRkFBWjtBQUNBO0FBQ0g7OztxQ0FFWSxTLEVBQVcsUSxFQUFVO0FBQ2hDLGdCQUFJLFFBQVEsS0FBSyxZQUFMLENBQWtCLFVBQVUsQ0FBNUIsRUFBK0IsVUFBVSxDQUF6QyxDQUFaO0FBQ0EsZ0JBQUksZUFBZSxJQUFuQjtBQUNBLGdCQUFJLFVBQVUsUUFBVixDQUFtQixLQUFuQixLQUE2QixVQUFVLElBQTNDLEVBQWlEO0FBQzdDLCtCQUFlLElBQUksZUFBSixDQUFVLEtBQUssSUFBZixFQUFxQixNQUFNLENBQTNCLEVBQThCLE1BQU0sQ0FBcEMsRUFBdUMsSUFBdkMsRUFBNkMsVUFBVSxJQUF2RCxDQUFmO0FBQ0gsYUFGRCxNQUVPLElBQUksVUFBVSxRQUFWLENBQW1CLFFBQW5CLEtBQWdDLFVBQVUsSUFBOUMsRUFBb0Q7QUFDdkQsK0JBQWUsSUFBSSxrQkFBSixDQUFhLEtBQUssSUFBbEIsRUFBd0IsTUFBTSxDQUE5QixFQUFpQyxNQUFNLENBQXZDLEVBQTBDLElBQTFDLEVBQWdELFVBQVUsSUFBMUQsQ0FBZjtBQUNIO0FBQ0QsZ0JBQUcsWUFBWSxLQUFLLE1BQUwsQ0FBWSxFQUEzQixFQUErQjtBQUMzQixxQkFBSyxNQUFMLENBQVksY0FBWixDQUEyQixJQUEzQixDQUFnQyxZQUFoQztBQUNILGFBRkQsTUFFTztBQUNILHFCQUFLLFFBQUwsQ0FBYyxjQUFkLENBQTZCLElBQTdCLENBQWtDLFlBQWxDO0FBQ0g7QUFDRCxpQkFBSyxJQUFMLENBQVUsVUFBVixDQUFxQixHQUFyQixDQUF5QixZQUF6QjtBQUNEOzs7b0NBRVcsTyxFQUFTO0FBQ25CLGdCQUFJLFFBQVEsS0FBSyxZQUFMLENBQWtCLFFBQVEsS0FBUixDQUFjLENBQWhDLEVBQW1DLFFBQVEsS0FBUixDQUFjLENBQWpELENBQVo7QUFDQSxnQkFBSSxNQUFNLElBQUksa0JBQUosQ0FBYSxLQUFLLElBQWxCLEVBQXdCLE1BQU0sQ0FBOUIsRUFBaUMsTUFBTSxDQUF2QyxFQUEwQyxJQUExQyxFQUFnRCxRQUFRLElBQXhELEVBQThELFFBQVEsSUFBdEUsQ0FBVjtBQUNBLGdCQUFHLFFBQVEsUUFBUixJQUFvQixLQUFLLE1BQUwsQ0FBWSxFQUFuQyxFQUF1QztBQUNuQyxxQkFBSyxNQUFMLENBQVksYUFBWixDQUEwQixJQUExQixDQUErQixHQUEvQjtBQUNILGFBRkQsTUFFTztBQUNILHFCQUFLLFFBQUwsQ0FBYyxhQUFkLENBQTRCLElBQTVCLENBQWlDLEdBQWpDO0FBQ0g7QUFDRCxpQkFBSyxJQUFMLENBQVUsVUFBVixDQUFxQixHQUFyQixDQUF5QixHQUF6QjtBQUNEOzs7c0NBRWEsSSxFQUFNO0FBQ2xCLGdCQUFJLFFBQVEsSUFBWjtBQUNBLGdCQUFJLFdBQVcsSUFBZjtBQUNBLGdCQUFJLFFBQVEsS0FBSyxZQUFMLENBQWtCLEtBQUssQ0FBdkIsRUFBMEIsS0FBSyxDQUEvQixDQUFaO0FBQ0EsaUJBQUssSUFBSSxDQUFULElBQWMsS0FBSyxNQUFMLENBQVksY0FBMUIsRUFBMEM7QUFDdEMsb0JBQUksS0FBSyxNQUFMLENBQVksY0FBWixDQUEyQixDQUEzQixFQUE4QixJQUE5QixJQUFzQyxLQUFLLElBQS9DLEVBQXFEO0FBQ2pELCtCQUFXLEtBQUssR0FBTCxDQUFTLEtBQUssTUFBTCxDQUFZLGNBQVosQ0FBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsR0FBa0MsTUFBTSxDQUF4QyxHQUE0QyxLQUFLLE1BQUwsQ0FBWSxjQUFaLENBQTJCLENBQTNCLEVBQThCLENBQTFFLEdBQThFLE1BQU0sQ0FBN0YsRUFBZ0csT0FBaEcsQ0FBd0csQ0FBeEcsQ0FBWDtBQUNBLDRCQUFRLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxLQUFkLENBQW9CLEtBQUssTUFBTCxDQUFZLGNBQVosQ0FBMkIsQ0FBM0IsQ0FBcEIsRUFBbUQsRUFBbkQsQ0FBdUQsRUFBQyxHQUFFLE1BQU0sQ0FBVCxFQUFZLEdBQUUsTUFBTSxDQUFwQixFQUF2RCxFQUFnRixXQUFTLEVBQXpGLEVBQThGLE9BQU8sTUFBUCxDQUFjLEtBQWQsQ0FBb0IsR0FBbEgsRUFBdUgsSUFBdkgsQ0FBUjtBQUNBO0FBQ0E7QUFDSDtBQUNKO0FBQ0QsaUJBQUssSUFBSSxDQUFULElBQWMsS0FBSyxRQUFMLENBQWMsY0FBNUIsRUFBNEM7QUFDeEMsb0JBQUksS0FBSyxRQUFMLENBQWMsY0FBZCxDQUE2QixDQUE3QixFQUFnQyxJQUFoQyxJQUF3QyxLQUFLLElBQWpELEVBQXVEO0FBQ25ELCtCQUFXLEtBQUssR0FBTCxDQUFTLEtBQUssUUFBTCxDQUFjLGNBQWQsQ0FBNkIsQ0FBN0IsRUFBZ0MsQ0FBaEMsR0FBb0MsTUFBTSxDQUExQyxHQUE4QyxLQUFLLFFBQUwsQ0FBYyxjQUFkLENBQTZCLENBQTdCLEVBQWdDLENBQTlFLEdBQWtGLE1BQU0sQ0FBakcsRUFBb0csT0FBcEcsQ0FBNEcsQ0FBNUcsQ0FBWDtBQUNBLDRCQUFRLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxLQUFkLENBQW9CLEtBQUssUUFBTCxDQUFjLGNBQWQsQ0FBNkIsQ0FBN0IsQ0FBcEIsRUFBcUQsRUFBckQsQ0FBeUQsRUFBQyxHQUFFLE1BQU0sQ0FBVCxFQUFZLEdBQUUsTUFBTSxDQUFwQixFQUF6RCxFQUFrRixXQUFTLEVBQTNGLEVBQWdHLE9BQU8sTUFBUCxDQUFjLEtBQWQsQ0FBb0IsR0FBcEgsRUFBeUgsSUFBekgsQ0FBUjtBQUNIO0FBQ0o7QUFDRjs7O3FDQUVZLEksRUFBTTtBQUNqQixnQkFBSSxRQUFRLElBQVo7QUFDQSxnQkFBSSxXQUFXLElBQWY7QUFDQSxnQkFBSSxRQUFRLElBQVo7QUFDQSxpQkFBSyxJQUFJLFlBQVksQ0FBckIsRUFBd0IsWUFBWSxLQUFLLE1BQXpDLEVBQWlELFdBQWpELEVBQThEO0FBQzFELHdCQUFRLEtBQUssWUFBTCxDQUFrQixLQUFLLFNBQUwsRUFBZ0IsQ0FBbEMsRUFBcUMsS0FBSyxTQUFMLEVBQWdCLENBQXJELENBQVI7QUFDQSxxQkFBSyxJQUFJLENBQVQsSUFBYyxLQUFLLE1BQUwsQ0FBWSxhQUExQixFQUF5QztBQUNyQyx3QkFBSSxLQUFLLE1BQUwsQ0FBWSxhQUFaLENBQTBCLENBQTFCLEVBQTZCLElBQTdCLElBQXFDLEtBQUssU0FBTCxFQUFnQixJQUF6RCxFQUErRDtBQUMzRCxtQ0FBVyxLQUFLLEdBQUwsQ0FBUyxLQUFLLE1BQUwsQ0FBWSxhQUFaLENBQTBCLENBQTFCLEVBQTZCLENBQTdCLEdBQWlDLE1BQU0sQ0FBdkMsR0FBMkMsS0FBSyxNQUFMLENBQVksYUFBWixDQUEwQixDQUExQixFQUE2QixDQUF4RSxHQUE0RSxNQUFNLENBQTNGLEVBQThGLE9BQTlGLENBQXNHLENBQXRHLENBQVg7QUFDQSxnQ0FBUSxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsS0FBZCxDQUFvQixLQUFLLE1BQUwsQ0FBWSxhQUFaLENBQTBCLENBQTFCLENBQXBCLEVBQWtELEVBQWxELENBQXNELEVBQUMsR0FBRSxNQUFNLENBQVQsRUFBWSxHQUFFLE1BQU0sQ0FBcEIsRUFBdEQsRUFBK0UsV0FBUyxFQUF4RixFQUE2RixPQUFPLE1BQVAsQ0FBYyxLQUFkLENBQW9CLEdBQWpILEVBQXNILElBQXRILENBQVI7QUFDSDtBQUNKO0FBQ0QscUJBQUssSUFBSSxDQUFULElBQWMsS0FBSyxRQUFMLENBQWMsYUFBNUIsRUFBMkM7QUFDdkMsd0JBQUksS0FBSyxRQUFMLENBQWMsYUFBZCxDQUE0QixDQUE1QixFQUErQixJQUEvQixJQUF1QyxLQUFLLFNBQUwsRUFBZ0IsSUFBM0QsRUFBaUU7QUFDN0QsbUNBQVcsS0FBSyxHQUFMLENBQVMsS0FBSyxRQUFMLENBQWMsYUFBZCxDQUE0QixDQUE1QixFQUErQixDQUEvQixHQUFtQyxNQUFNLENBQXpDLEdBQTZDLEtBQUssUUFBTCxDQUFjLGFBQWQsQ0FBNEIsQ0FBNUIsRUFBK0IsQ0FBNUUsR0FBZ0YsTUFBTSxDQUEvRixFQUFrRyxPQUFsRyxDQUEwRyxDQUExRyxDQUFYO0FBQ0EsZ0NBQVEsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLEtBQWQsQ0FBb0IsS0FBSyxRQUFMLENBQWMsYUFBZCxDQUE0QixDQUE1QixDQUFwQixFQUFvRCxFQUFwRCxDQUF3RCxFQUFDLEdBQUUsTUFBTSxDQUFULEVBQVksR0FBRSxNQUFNLENBQXBCLEVBQXhELEVBQWlGLFdBQVMsRUFBMUYsRUFBK0YsT0FBTyxNQUFQLENBQWMsS0FBZCxDQUFvQixHQUFuSCxFQUF3SCxJQUF4SCxDQUFSO0FBQ0g7QUFDSjtBQUNKO0FBQ0Y7Ozt3Q0FHZSxJLEVBQU07QUFDbEIsZ0JBQUksa0JBQUo7QUFDQSxpQkFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLEtBQUssTUFBTCxDQUFZLGNBQVosQ0FBMkIsTUFBL0MsRUFBdUQsR0FBdkQsRUFBNEQ7QUFDeEQsb0JBQUksS0FBSyxNQUFMLENBQVksY0FBWixDQUEyQixDQUEzQixFQUE4QixJQUE5QixJQUFzQyxLQUFLLElBQS9DLEVBQXFEO0FBQ2pELHlDQUFxQixLQUFLLE1BQUwsQ0FBWSxjQUFaLENBQTJCLENBQTNCLENBQXJCO0FBQ0EseUJBQUssTUFBTCxDQUFZLGNBQVosQ0FBMkIsTUFBM0IsQ0FBa0MsQ0FBbEMsRUFBb0MsQ0FBcEM7QUFDQSx1Q0FBbUIsT0FBbkI7QUFDQSwyQkFBTyxJQUFQO0FBQ0g7QUFDSjtBQUNELG1CQUFPLEtBQVA7QUFDSDs7OzZDQUVtQjtBQUNsQixpQkFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLEtBQUssSUFBTCxDQUFVLFVBQVYsQ0FBcUIsUUFBckIsQ0FBOEIsTUFBbEQsRUFBMEQsR0FBMUQsRUFBK0Q7QUFDM0Qsb0JBQUcsS0FBSyxJQUFMLENBQVUsVUFBVixDQUFxQixRQUFyQixDQUE4QixDQUE5QixFQUFpQyxXQUFqQyxJQUFnRCxlQUFuRCxFQUF5RDtBQUNyRCx5QkFBSyxJQUFMLENBQVUsVUFBVixDQUFxQixRQUFyQixDQUE4QixDQUE5QixFQUFpQyxPQUFqQztBQUNBO0FBQ0g7QUFDSjtBQUNGOzs7cUNBRVksTyxFQUFTO0FBQ3BCLGlCQUFLLElBQUksQ0FBVCxJQUFjLE9BQWQsRUFBdUI7QUFDbkIscUJBQUssTUFBTCxDQUFZLENBQVosSUFBaUIsUUFBUSxDQUFSLENBQWpCO0FBQ0g7O0FBRUQ7QUFDQSxpQkFBSyxJQUFMLENBQVUsTUFBVixDQUFpQixTQUFqQixDQUEyQixFQUFDLE9BQU8sYUFBUixFQUF1QixHQUFFLENBQXpCLEVBQTRCLEdBQUUsQ0FBOUIsRUFBM0I7QUFDQSxpQkFBSyxJQUFMLENBQVUsTUFBVixDQUFpQixTQUFqQixDQUEyQixFQUFDLE9BQU8sYUFBUixFQUF1QixHQUFFLENBQXpCLEVBQTRCLEdBQUUsRUFBOUIsRUFBM0I7QUFDQSxpQkFBSyxJQUFMLENBQVUsTUFBVixDQUFpQixTQUFqQixDQUEyQixFQUFDLE9BQU8sYUFBUixFQUF1QixHQUFFLENBQXpCLEVBQTRCLEdBQUUsRUFBOUIsRUFBM0I7QUFDQSxpQkFBSyxJQUFMLENBQVUsTUFBVixDQUFpQixTQUFqQixDQUEyQixFQUFDLE9BQU8sYUFBUixFQUF1QixHQUFFLENBQXpCLEVBQTRCLEdBQUUsRUFBOUIsRUFBM0I7QUFDQSxpQkFBSyxJQUFMLENBQVUsTUFBVixDQUFpQixTQUFqQixDQUEyQixFQUFDLE9BQU8sYUFBUixFQUF1QixHQUFFLENBQXpCLEVBQTRCLEdBQUUsRUFBOUIsRUFBM0I7O0FBRUEsaUJBQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsU0FBakIsQ0FBMkIsRUFBQyxPQUFPLGFBQVIsRUFBdUIsR0FBRSxFQUF6QixFQUE2QixHQUFFLEVBQS9CLEVBQTNCO0FBQ0EsaUJBQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsU0FBakIsQ0FBMkIsRUFBQyxPQUFPLGFBQVIsRUFBdUIsR0FBRSxFQUF6QixFQUE2QixHQUFFLENBQS9CLEVBQTNCO0FBQ0EsaUJBQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsU0FBakIsQ0FBMkIsRUFBQyxPQUFPLGFBQVIsRUFBdUIsR0FBRSxFQUF6QixFQUE2QixHQUFFLEVBQS9CLEVBQTNCO0FBQ0EsaUJBQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsU0FBakIsQ0FBMkIsRUFBQyxPQUFPLGFBQVIsRUFBdUIsR0FBRSxFQUF6QixFQUE2QixHQUFFLEVBQS9CLEVBQTNCO0FBQ0EsaUJBQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsU0FBakIsQ0FBMkIsRUFBQyxPQUFPLGFBQVIsRUFBdUIsR0FBRSxFQUF6QixFQUE2QixHQUFFLEVBQS9CLEVBQTNCO0FBR0Q7Ozt3Q0FFZTtBQUNkLGdCQUFJLGFBQWEsSUFBakI7QUFDQSxnQkFBSSxXQUFXLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxRQUFkLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLENBQWY7QUFDQTtBQUNBLHFCQUFTLFNBQVQsQ0FBbUIsUUFBbkIsRUFBNkIsQ0FBN0I7QUFDQSxxQkFBUyxlQUFULENBQXlCLEdBQXpCLEVBQThCLEdBQTlCLEVBQW1DLEtBQUssU0FBTCxHQUFlLENBQWxELEVBQXFELEtBQUssVUFBTCxHQUFnQixDQUFyRSxFQUF3RSxFQUF4RTs7QUFFQSxpQkFBSyxJQUFJLENBQVQsSUFBYyxLQUFLLFNBQW5CLEVBQThCO0FBQzFCLHFCQUFLLElBQUksQ0FBVCxJQUFjLEtBQUssU0FBTCxDQUFlLENBQWYsQ0FBZCxFQUFpQztBQUM3Qix3QkFBRyxLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLFNBQXJCLElBQWtDLEtBQUssTUFBTCxDQUFZLEVBQTlDLElBQW9ELEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsUUFBckIsSUFBaUMsV0FBeEYsRUFBcUc7QUFDakcsNEJBQUksSUFBSSxDQUFKLElBQVMsSUFBSSxFQUFqQixFQUFxQjtBQUNqQix5Q0FBYSxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsTUFBZCxDQUFxQixLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLENBQXJCLEdBQXdCLEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsS0FBckIsR0FBMkIsQ0FBeEUsRUFBNEUsS0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixDQUFyQixHQUF3QixLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLEtBQXJCLEdBQTJCLENBQS9ILEVBQW1JLFNBQVMsZUFBVCxFQUFuSSxDQUFiO0FBQ0EsdUNBQVcsS0FBWCxHQUFtQixLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBYyxFQUF6QixJQUE2QixFQUFoRDtBQUNBLHVDQUFXLE1BQVgsQ0FBa0IsS0FBbEIsQ0FBd0IsR0FBeEI7QUFDQSxvQ0FBUSxLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLFFBQTdCO0FBQ0kscUNBQUssUUFBTDtBQUNDLCtDQUFXLElBQVgsR0FBa0IsUUFBbEI7QUFDQTtBQUNELHFDQUFLLFFBQUw7QUFDQywrQ0FBVyxJQUFYLEdBQWtCLFFBQWxCO0FBQ0E7QUFDRCxxQ0FBSyxRQUFMO0FBQ0MsK0NBQVcsSUFBWCxHQUFrQixRQUFsQjtBQUNBO0FBQ0QscUNBQUssT0FBTDtBQUNDLCtDQUFXLElBQVgsR0FBa0IsUUFBbEI7QUFDQTtBQUNELHFDQUFLLFNBQUw7QUFDQywrQ0FBVyxJQUFYLEdBQWtCLFFBQWxCO0FBQ0E7QUFDRCxxQ0FBSyxVQUFMO0FBQ0MsK0NBQVcsSUFBWCxHQUFrQixRQUFsQjtBQUNBO0FBQ0QscUNBQUssU0FBTDtBQUNDLCtDQUFXLElBQVgsR0FBa0IsUUFBbEI7QUFDQTtBQUNEO0FBQ0M7QUF2Qkw7QUF5QkEsaUNBQUssSUFBTCxDQUFVLFVBQVYsQ0FBcUIsR0FBckIsQ0FBeUIsVUFBekI7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNELHFCQUFTLE9BQVQ7QUFDRDs7O3dDQUVlLE8sRUFBUyxJLEVBQU0sSyxFQUFPO0FBQ3BDLGlCQUFLLFVBQUwsR0FBa0IsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixPQUFoQixDQUF3QixZQUF4QixDQUFsQjs7QUFFQSxpQkFBSyxvQkFBTCxHQUE0QixFQUFDLEdBQUUsQ0FBSCxFQUFNLEdBQUUsQ0FBUixFQUE1Qjs7QUFFQSxnQkFBSSxDQUFKLEVBQU8sQ0FBUDs7QUFFQSxpQkFBSyxZQUFMLEdBQW9CLEtBQUssU0FBTCxHQUFpQixLQUFLLElBQUwsQ0FBVSxVQUFWLENBQXFCLE1BQXJCLEdBQTRCLE1BQWpFO0FBQ0EsaUJBQUssVUFBTCxHQUFrQixLQUFLLElBQUwsQ0FBVSxVQUFWLENBQXFCLEtBQXJCLEdBQTJCLEVBQTdDO0FBQ0EsaUJBQUssV0FBTCxHQUFvQixLQUFLLElBQUwsQ0FBVSxVQUFWLENBQXFCLEtBQXJCLEdBQTJCLE9BQS9DO0FBQ0EsaUJBQUssU0FBTCxHQUFpQixLQUFLLFVBQUwsR0FBa0IsS0FBSyxJQUFMLENBQVUsVUFBVixDQUFxQixLQUFyQixHQUEyQixFQUE5RDtBQUNBLGlCQUFLLE9BQUwsR0FBZSxDQUFDLEtBQUssSUFBTCxDQUFVLFVBQVYsQ0FBcUIsS0FBckIsSUFBOEIsS0FBSyxVQUFMLEdBQWtCLEtBQUssV0FBckQsSUFBcUUsS0FBSyxTQUFMLEdBQWlCLEVBQXZGLElBQTRGLEVBQTNHOztBQUVBO0FBQ0E7O0FBRUEsaUJBQUssb0JBQUwsQ0FBMEIsQ0FBMUIsR0FBOEIsTUFBTSxDQUFOLEdBQVUsS0FBSyxVQUE3QztBQUNBLGlCQUFLLG9CQUFMLENBQTBCLENBQTFCLEdBQThCLE1BQU0sQ0FBTixHQUFVLEtBQUssU0FBN0M7O0FBRUEsZ0JBQUksV0FBVyxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsUUFBZCxDQUF1QixDQUF2QixFQUEwQixDQUExQixDQUFmO0FBQ0E7QUFDQSxxQkFBUyxTQUFULENBQW1CLFFBQW5CLEVBQTZCLENBQTdCO0FBQ0EscUJBQVMsUUFBVCxDQUFrQixHQUFsQixFQUF1QixHQUF2QixFQUE0QixLQUFLLFNBQWpDLEVBQTRDLEtBQUssVUFBakQ7O0FBRUEsaUJBQUssSUFBSSxTQUFTLENBQWxCLEVBQXFCLFNBQVMsT0FBOUIsRUFBdUMsUUFBdkMsRUFBaUQ7QUFDN0MscUJBQUssSUFBSSxNQUFNLENBQWYsRUFBa0IsTUFBTSxJQUF4QixFQUE4QixLQUE5QixFQUFxQzs7QUFFakMsd0JBQUksS0FBSyxvQkFBTCxDQUEwQixDQUExQixHQUErQixLQUFLLFNBQUwsR0FBaUIsTUFBaEQsSUFBMkQsS0FBSyxPQUFMLEdBQWUsTUFBZixHQUF3QixDQUFuRixDQUFKO0FBQ0Esd0JBQUksS0FBSyxvQkFBTCxDQUEwQixDQUExQixHQUErQixLQUFLLFVBQUwsR0FBa0IsR0FBakQsSUFBeUQsS0FBSyxPQUFMLEdBQWUsR0FBZixHQUFxQixDQUE5RSxDQUFKO0FBQ0E7O0FBRUEsd0JBQUksY0FBYyxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsTUFBZCxDQUFxQixDQUFyQixFQUF3QixDQUF4QixFQUEyQixTQUFTLGVBQVQsRUFBM0IsQ0FBbEI7QUFDQSx5QkFBSyxJQUFMLENBQVUsVUFBVixDQUFxQixHQUFyQixDQUF5QixXQUF6QjtBQUNBLGdDQUFZLEtBQVosR0FBb0IsQ0FBcEIsQ0FSaUMsQ0FRVjtBQUN2QixnQ0FBWSxZQUFaLEdBQTJCLElBQTNCO0FBQ0EsZ0NBQVksTUFBWixDQUFtQixXQUFuQixDQUErQixHQUEvQixDQUFtQyxLQUFLLFdBQXhDLEVBQXFELElBQXJEOztBQUVBLHdCQUFJLE9BQU8sS0FBSyxTQUFMLENBQWUsTUFBZixDQUFQLElBQWlDLFdBQXJDLEVBQ0ksS0FBSyxTQUFMLENBQWUsTUFBZixJQUF5QixFQUF6Qjs7QUFFSix5QkFBSyxTQUFMLENBQWUsTUFBZixFQUF1QixHQUF2QixJQUE4QixXQUE5QjtBQUNIO0FBQ0o7O0FBRUQscUJBQVMsT0FBVDs7QUFFQSxpQkFBSyxJQUFJLEdBQVQsSUFBZ0IsS0FBSyxVQUFyQixFQUFpQztBQUM3QixvQkFBSSxDQUFDLEtBQUssVUFBTCxDQUFnQixjQUFoQixDQUErQixHQUEvQixDQUFMLEVBQTBDOztBQUUxQyxvQkFBSSxNQUFNLEtBQUssVUFBTCxDQUFnQixHQUFoQixDQUFWO0FBQ0EscUJBQUssSUFBSSxJQUFULElBQWlCLEdBQWpCLEVBQXNCO0FBQ2xCO0FBQ0Esd0JBQUcsQ0FBQyxJQUFJLGNBQUosQ0FBbUIsSUFBbkIsQ0FBSixFQUE4Qjs7QUFFOUIsd0JBQUksZ0JBQWdCLElBQUksSUFBSixFQUFVLFNBQVYsQ0FBb0IsTUFBeEM7QUFDQSx5QkFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLGFBQXBCLEVBQW1DLEdBQW5DLEVBQXdDOztBQUVwQyw0QkFBSSxTQUFTLElBQUksSUFBSixFQUFVLFNBQVYsQ0FBb0IsQ0FBcEIsRUFBdUIsS0FBdkIsQ0FBNkIsR0FBN0IsQ0FBYjtBQUNBLDRCQUFJLE9BQU8sQ0FBUCxDQUFKO0FBQ0EsNEJBQUksT0FBTyxDQUFQLENBQUo7O0FBRUEsNkJBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsV0FBckIsR0FBbUMsS0FBbkM7QUFDQSw2QkFBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixZQUFyQixHQUFvQyxLQUFwQztBQUNBLDZCQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLEtBQXJCLEdBQTZCLENBQTdCO0FBQ0EsNkJBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsS0FBckIsR0FBNkIsQ0FBN0I7QUFDQSw2QkFBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixRQUFyQixHQUFnQyxJQUFJLElBQUosRUFBVSxJQUExQzs7QUFFQSw0QkFBSSxPQUFPLEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FBUCxJQUErQixXQUFuQyxFQUNJLEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsUUFBckIsR0FBZ0MsSUFBSSxJQUFKLEVBQVUsSUFBMUMsQ0FESixLQUdJLFFBQVEsR0FBUixDQUFZLElBQUksR0FBSixHQUFVLENBQVYsR0FBYyxhQUExQjs7QUFFSiw0QkFBRyxJQUFJLENBQVAsRUFDSSxLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLFNBQXJCLEdBQWlDLENBQWpDLENBREosS0FFSyxJQUFJLElBQUUsRUFBTixFQUNELEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsU0FBckIsR0FBaUMsQ0FBakM7O0FBRUosNEJBQUksT0FBTyxJQUFJLElBQUosRUFBVSxVQUFqQixJQUErQixXQUFuQyxFQUFnRDtBQUM1QyxpQ0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixjQUFyQixHQUFzQyxJQUFJLElBQUosRUFBVSxVQUFoRDtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ0Y7OztxQ0FFWSxDLEVBQUcsQyxFQUFHO0FBQ2pCLGdCQUFJLFFBQVEsQ0FBWjtBQUNBLGdCQUFJLFFBQVEsQ0FBWjs7QUFFQSxpQkFBSyxJQUFJLEdBQVQsSUFBZ0IsS0FBSyxTQUFyQixFQUFnQztBQUM1QixxQkFBSyxJQUFJLEdBQVQsSUFBZ0IsS0FBSyxTQUFMLENBQWUsR0FBZixDQUFoQixFQUFxQztBQUNqQyx3QkFBSSxNQUFNLEtBQUssU0FBTCxDQUFlLEdBQWYsRUFBb0IsR0FBcEIsQ0FBVjtBQUNBLHdCQUFHLElBQUksSUFBSSxDQUFSLElBQWEsSUFBSSxJQUFJLENBQUosR0FBUSxJQUFJLEtBQWhDLEVBQ0ksUUFBUSxTQUFTLEdBQVQsQ0FBUjs7QUFFSix3QkFBRyxJQUFJLElBQUksQ0FBUixJQUFhLElBQUksSUFBSSxDQUFKLEdBQVEsSUFBSSxNQUFoQyxFQUNJLFFBQVEsU0FBUyxHQUFULENBQVI7QUFDUDtBQUNKO0FBQ0QsbUJBQU8sRUFBQyxHQUFFLEtBQUgsRUFBVSxHQUFFLEtBQVosRUFBUDtBQUNEOzs7cUNBRVksQyxFQUFHLEMsRUFBRztBQUNqQixnQkFBSSxVQUFVLEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FBZDtBQUNBLG1CQUFPLEVBQUMsR0FBRSxRQUFRLENBQVIsR0FBWSxRQUFRLEtBQVIsR0FBYyxDQUE3QixFQUFnQyxHQUFFLFFBQVEsQ0FBUixHQUFZLFFBQVEsTUFBUixHQUFlLENBQTdELEVBQVA7QUFDRDs7O29DQUVXLEcsRUFBSztBQUNmLGlCQUFLLFNBQUw7QUFDQSxpQkFBSyxJQUFMLENBQVUsTUFBVixDQUFpQixTQUFqQixDQUEyQixFQUFDLE9BQU8sYUFBUixFQUF1QixHQUFFLFNBQVMsSUFBSSxLQUFiLENBQXpCLEVBQThDLEdBQUUsU0FBUyxJQUFJLEtBQWIsQ0FBaEQsRUFBM0I7O0FBRUE7QUFDQSxvQkFBUSxHQUFSLENBQVkscUJBQVo7QUFDQSxvQkFBUSxHQUFSLENBQVksV0FBVyxJQUFJLFFBQTNCO0FBQ0Esb0JBQVEsR0FBUixDQUFZLFdBQVcsSUFBSSxRQUEzQjtBQUNBLG9CQUFRLEdBQVIsQ0FBWSxlQUFlLElBQUksWUFBL0I7QUFDQSxvQkFBUSxHQUFSLENBQVksY0FBYyxJQUFJLFdBQTlCO0FBQ0Esb0JBQVEsR0FBUixDQUFZLFFBQVEsSUFBSSxLQUFaLEdBQW9CLEtBQXBCLEdBQTRCLElBQUksS0FBNUM7QUFDQTs7QUFFQTtBQUNEOzs7a0NBRVMsVyxFQUFhLEssRUFBTztBQUMxQixvQkFBUSxHQUFSLENBQVksY0FBWjtBQUNBLG9CQUFRLEdBQVIsQ0FBWSxXQUFaO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsaUJBQUssSUFBSSxDQUFULElBQWMsV0FBZCxFQUEyQjtBQUN2QixxQkFBSyxTQUFMLENBQWUsWUFBWSxDQUFaLEVBQWUsQ0FBOUIsRUFBaUMsWUFBWSxDQUFaLEVBQWUsQ0FBaEQsRUFBbUQsS0FBbkQsR0FBMkQsR0FBM0Q7QUFDQSxvQkFBRyxLQUFILEVBQVU7QUFDTix5QkFBSyxTQUFMLENBQWUsWUFBWSxDQUFaLEVBQWUsQ0FBOUIsRUFBaUMsWUFBWSxDQUFaLEVBQWUsQ0FBaEQsRUFBbUQsSUFBbkQsR0FBMEQsS0FBMUQ7QUFDSCxpQkFGRCxNQUVPO0FBQ0gseUJBQUssU0FBTCxDQUFlLFlBQVksQ0FBWixFQUFlLENBQTlCLEVBQWlDLFlBQVksQ0FBWixFQUFlLENBQWhELEVBQW1ELElBQW5ELEdBQTBELFFBQTFEO0FBQ0g7QUFDRCxxQkFBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLEVBQUMsR0FBRSxZQUFZLENBQVosRUFBZSxDQUFsQixFQUFvQixHQUFFLFlBQVksQ0FBWixFQUFlLENBQXJDLEVBQXJCO0FBQ0g7QUFDRjs7O2tDQUVTLFMsRUFBVztBQUNuQixnQkFBRyxDQUFDLFNBQUosRUFBZTtBQUNYLHFCQUFLLElBQUksQ0FBVCxJQUFjLEtBQUssVUFBbkIsRUFBK0I7QUFDM0IseUJBQUssU0FBTCxDQUFlLEtBQUssVUFBTCxDQUFnQixDQUFoQixFQUFtQixDQUFsQyxFQUFxQyxLQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBeEQsRUFBMkQsS0FBM0QsR0FBbUUsQ0FBbkU7QUFDSDtBQUNELHFCQUFLLFVBQUwsR0FBa0IsRUFBbEI7QUFDSDtBQUNGOzs7bUNBRVUsSSxFQUFNOztBQUVmLGdCQUFJLGNBQWMsS0FBSyxTQUFMLENBQWUsS0FBSyxDQUFwQixFQUF1QixLQUFLLENBQTVCLENBQWxCOztBQUVBLHdCQUFZLElBQVosR0FBbUIsUUFBbkI7QUFDQSx3QkFBWSxLQUFaLEdBQW9CLEdBQXBCO0FBQ0Esd0JBQVksV0FBWixHQUEwQixJQUExQjs7QUFFQSxnQkFBSSxPQUFPLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxNQUFkLENBQXFCLFlBQVksQ0FBakMsRUFBb0MsWUFBWSxDQUFaLEdBQWdCLFlBQVksTUFBWixHQUFtQixDQUF2RSxFQUEyRSxNQUEzRSxDQUFYO0FBQ0EsaUJBQUssSUFBTCxDQUFVLFVBQVYsQ0FBcUIsR0FBckIsQ0FBeUIsSUFBekI7QUFDQSxpQkFBSyxLQUFMLEdBQWEsR0FBYjtBQUNBLGlCQUFLLE1BQUwsQ0FBWSxHQUFaLENBQWdCLEdBQWhCLEVBQW9CLEdBQXBCO0FBQ0EsaUJBQUssVUFBTCxDQUFnQixHQUFoQixDQUFvQixNQUFwQjtBQUNBLGlCQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsTUFBckIsRUFBNkIsRUFBN0IsRUFBaUMsS0FBakMsRUFBd0MsSUFBeEM7QUFFRDs7O29DQUVXO0FBQ1YsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsS0FBaEIsQ0FBc0IsTUFBdEI7QUFDRDs7O3FDQUdZO0FBQ1gsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsS0FBaEIsQ0FBc0IsWUFBdEI7QUFDRDs7Ozs7O2tCQUlZLFE7Ozs7Ozs7Ozs7O0FDN2JmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUFzQzs7SUFFaEMsSTs7QUFFSjtBQUNBLGtCQUFZLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsYUFBSyxHQUFMLEdBQVcsSUFBSSxtQkFBSixFQUFYO0FBQ0EsYUFBSyxPQUFMLEdBQWUsS0FBSyxHQUFMLENBQVMsWUFBeEI7QUFDQSxhQUFLLElBQUwsR0FBWSxJQUFaOztBQUVBLGFBQUssU0FBTCxHQUFpQixFQUFqQjtBQUNBLGFBQUssZUFBTCxHQUF1QixFQUF2QjtBQUNEOzs7O2tDQUVTO0FBQ1IsaUJBQUssSUFBSSxDQUFULElBQWMsS0FBSyxTQUFuQixFQUE4QjtBQUMxQixxQkFBSyxJQUFMLENBQVUsUUFBVixDQUFtQixTQUFuQixDQUE2QixLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLHNCQUFsQixDQUF5QyxDQUF0RSxFQUF5RSxLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLHNCQUFsQixDQUF5QyxDQUFsSCxFQUFxSCxZQUFySCxHQUFvSSxJQUFwSTtBQUNIO0FBQ0Y7O0FBRUQ7Ozs7b0NBQ1ksSSxFQUFNO0FBQ2hCLG1CQUFPLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0IsSUFBbEIsQ0FBUDtBQUNEOzs7aUNBRVEsSSxFQUFNLEssRUFBTztBQUNwQixnQkFBSSxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsS0FBMEIsS0FBOUIsRUFDSSxPQUFPLElBQVA7O0FBRUosbUJBQU8sS0FBUDtBQUNEOzs7b0NBRVcsUSxFQUFVLFMsRUFBVyxTLEVBQVcsVSxFQUFZLENBQ3ZEOzs7K0JBRU0sSSxFQUFNLEssRUFBTztBQUNsQixtQkFBTyxLQUFLLEdBQUwsQ0FBUyxHQUFULENBQWEsSUFBYixFQUFtQixLQUFuQixDQUFQO0FBQ0Q7OztrQ0FFUyxJLEVBQU0sSyxFQUFPO0FBQ3JCLG1CQUFPLEtBQUssR0FBTCxDQUFTLE1BQVQsQ0FBZ0IsSUFBaEIsRUFBc0IsS0FBdEIsQ0FBUDtBQUNEOzs7aUNBRVEsQyxFQUFHLEMsRUFBRyxLLEVBQU87QUFDcEIsZ0JBQUksUUFBUSxLQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFlBQW5CLENBQWdDLENBQWhDLEVBQWtDLENBQWxDLENBQVo7QUFDQSxnQkFBSSxRQUFRLElBQUksZUFBSixDQUFVLEtBQUssSUFBZixFQUFvQixNQUFNLENBQTFCLEVBQTRCLE1BQU0sQ0FBbEMsQ0FBWjtBQUNBLGtCQUFNLHNCQUFOLENBQTZCLENBQTdCLEdBQWlDLENBQWpDO0FBQ0Esa0JBQU0sc0JBQU4sQ0FBNkIsQ0FBN0IsR0FBaUMsQ0FBakM7O0FBRUEsaUJBQUssSUFBSSxDQUFULElBQWMsS0FBZCxFQUFxQjtBQUNqQixzQkFBTSxDQUFOLElBQVcsTUFBTSxDQUFOLENBQVg7QUFDSDtBQUNELGlCQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLEtBQXBCO0FBQ0EsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsUUFBaEIsQ0FBeUIsS0FBekI7QUFDRDs7O2lDQUVRLEssRUFBTztBQUNkLGlCQUFLLElBQUksQ0FBVCxJQUFjLEtBQUssU0FBbkIsRUFBOEI7QUFDMUIsb0JBQUcsS0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixzQkFBbEIsQ0FBeUMsQ0FBekMsSUFBOEMsTUFBTSxDQUFwRCxJQUF5RCxLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLHNCQUFsQixDQUF5QyxDQUF6QyxJQUE4QyxNQUFNLENBQWhILEVBQWtIO0FBQzlHLDJCQUFPLEtBQUssU0FBTCxDQUFlLENBQWYsQ0FBUDtBQUNIO0FBQ0o7QUFDRjs7O2tDQUVTLEssRUFBTztBQUNmLGdCQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsS0FBZCxDQUFaO0FBQ0EsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsV0FBaEIsQ0FBNEIsS0FBNUI7O0FBRUEsZ0JBQUksUUFBUSxLQUFLLFNBQUwsQ0FBZSxPQUFmLENBQXVCLEtBQXZCLENBQVo7QUFDQSxpQkFBSyxTQUFMLENBQWUsTUFBZixDQUFzQixLQUF0QixFQUE0QixDQUE1Qjs7QUFFQSxrQkFBTSxNQUFOO0FBQ0Q7OzsyQ0FFa0I7QUFDakI7QUFDQSxpQkFBSSxJQUFJLENBQVIsSUFBYSxLQUFLLFNBQWxCLEVBQTZCO0FBQ3pCLG9CQUFJLFFBQVEsS0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixhQUFsQixFQUFaOztBQUVBLG9CQUFHLFVBQVUsS0FBYixFQUFvQjtBQUNoQix5QkFBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixXQUFsQjtBQUNIO0FBQ0o7QUFDRjs7O3VDQUVjO0FBQ2I7QUFDQSxnQkFBSSxjQUFjLEtBQWxCO0FBQ0EsaUJBQUksSUFBSSxDQUFSLElBQWEsS0FBSyxTQUFsQixFQUE2QjtBQUN6QixvQkFBRyxLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLFFBQXJCLEVBQStCO0FBQzNCLGtDQUFjLElBQWQ7QUFDQTtBQUNIO0FBQ0o7QUFDRCxtQkFBTyxXQUFQO0FBQ0Q7OztxQ0FFWSxNLEVBQVE7QUFDbkIsZ0JBQUksUUFBUSxLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQVo7QUFDQSxnQkFBRyxDQUFDLEtBQUosRUFDSSxPQUFPLEtBQVA7QUFDSixnQkFBRyxDQUFDLE1BQU0sUUFBVixFQUNJLE9BQU8sS0FBUDs7QUFFSixnQkFBSSxpQkFBaUIsS0FBSyxlQUFMLENBQXFCLE9BQXJCLENBQTZCLEtBQTdCLENBQXJCO0FBQ0EsZ0JBQUcsa0JBQWtCLENBQXJCLEVBQXVCO0FBQ25CLHNCQUFNLFlBQU47QUFDQSxxQkFBSyxlQUFMLENBQXFCLE1BQXJCLENBQTRCLGNBQTVCLEVBQTRDLENBQTVDO0FBQ0gsYUFIRCxNQUdPO0FBQ0gsc0JBQU0sV0FBTjtBQUNBLHFCQUFLLGVBQUwsQ0FBcUIsSUFBckIsQ0FBMEIsS0FBMUI7QUFDSDtBQUNGOzs7dUNBRWM7QUFDYixpQkFBSyxJQUFJLENBQVQsSUFBYyxLQUFLLGVBQW5CLEVBQW9DO0FBQ2hDLHFCQUFLLGVBQUwsQ0FBcUIsQ0FBckIsRUFBd0IsWUFBeEI7QUFDSDtBQUNELGlCQUFLLGVBQUwsR0FBdUIsRUFBdkI7QUFDRDs7OzJDQUVrQixNLEVBQVE7O0FBRXpCLGdCQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFaO0FBQ0EsZ0JBQUcsQ0FBQyxLQUFKLEVBQ0ksT0FBTyxLQUFQOztBQUVKLGlCQUFJLElBQUksQ0FBUixJQUFhLEtBQUssU0FBbEIsRUFBNkI7QUFDekIscUJBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsWUFBbEI7QUFDSDtBQUNELGlCQUFLLFVBQUwsR0FBa0IsTUFBTSxhQUFOLEVBQWxCO0FBQ0EsaUJBQUssYUFBTCxHQUFxQixLQUFyQjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFNBQW5CLENBQTZCLEtBQUssVUFBbEM7QUFDQSxtQkFBTyxJQUFQO0FBQ0Q7OzswQ0FFaUIsTSxFQUFRO0FBQ3hCLGlCQUFJLElBQUksQ0FBUixJQUFhLEtBQUssVUFBbEIsRUFBOEI7QUFDMUIsb0JBQUcsS0FBSyxVQUFMLENBQWdCLENBQWhCLEVBQW1CLEtBQW5CLElBQTRCLE9BQU8sQ0FBbkMsSUFBd0MsS0FBSyxVQUFMLENBQWdCLENBQWhCLEVBQW1CLEtBQW5CLElBQTRCLE9BQU8sQ0FBOUUsRUFBaUY7QUFDN0UseUJBQUssYUFBTCxDQUFtQixJQUFuQixDQUF3QixNQUF4QjtBQUNBLDJCQUFPLEtBQUssYUFBWjtBQUNBLDJCQUFPLEtBQUssVUFBWjtBQUNBLDJCQUFPLElBQVA7QUFDSDtBQUNKO0FBQ0QsbUJBQU8sS0FBUDtBQUNEOzs7Ozs7a0JBR1ksSTs7Ozs7OztJQ3hKVCxRLEdBRUYsa0JBQVksSUFBWixFQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixJQUF4QixFQUE4QjtBQUFBOztBQUMxQixTQUFLLFFBQUwsR0FBZ0IsT0FBTyxNQUFQLENBQWM7QUFDMUIsZ0JBQVEsQ0FEa0I7QUFFMUIsa0JBQVUsQ0FGZ0I7QUFHMUIsbUJBQVcsQ0FIZTtBQUkxQixnQkFBUTtBQUprQixLQUFkLENBQWhCOztBQU9BLFNBQUssQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLLENBQUwsR0FBUyxDQUFUO0FBQ0EsU0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUssSUFBTCxHQUFZLEtBQUssUUFBTCxDQUFjLEtBQUssV0FBTCxFQUFkLENBQVo7QUFFSCxDOztBQUlMLE9BQU8sT0FBUCxDQUFlLFFBQWYsR0FBMEIsUUFBMUI7Ozs7Ozs7OztJQ25CTSxTO0FBRUYsdUJBQVksSUFBWixFQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QixJQUF4QixFQUE4QjtBQUFBOztBQUMxQixhQUFLLFFBQUwsR0FBZ0IsT0FBTyxNQUFQLENBQWM7QUFDMUIsbUJBQU8sQ0FEbUI7QUFFMUIsc0JBQVU7QUFGZ0IsU0FBZCxDQUFoQjs7QUFLQSxhQUFLLENBQUwsR0FBUyxDQUFUO0FBQ0EsYUFBSyxDQUFMLEdBQVMsQ0FBVDtBQUNBLGFBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxhQUFLLGNBQUwsR0FBc0IsS0FBdEI7QUFDQSxhQUFLLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxhQUFLLElBQUwsR0FBWSxLQUFLLFFBQUwsQ0FBYyxLQUFLLFdBQUwsRUFBZCxDQUFaOztBQUVBLGdCQUFRLElBQVI7QUFDSSxpQkFBSyxVQUFMO0FBQ0k7QUFDSixpQkFBSyxPQUFMO0FBQ0k7QUFDSjtBQUNJLHFCQUFLLElBQUwsR0FBWSxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQVo7QUFDQTtBQVBSO0FBU0g7Ozs7NkJBRUksQyxFQUFHLEMsRUFBRztBQUNQLGlCQUFLLENBQUwsR0FBUyxDQUFUO0FBQ0EsaUJBQUssQ0FBTCxHQUFTLENBQVQ7QUFDSDs7Ozs7O0FBR0wsT0FBTyxPQUFQLENBQWUsU0FBZixHQUEyQixTQUEzQjs7Ozs7Ozs7O0FDaENBLElBQUksWUFBWSxRQUFRLGFBQVIsRUFBdUIsU0FBdkM7QUFDQSxJQUFJLFdBQVcsUUFBUSxZQUFSLEVBQXNCLFFBQXJDO0FBQ0EsSUFBSSxXQUFXLFFBQVEsWUFBUixFQUFzQixRQUFyQzs7SUFHTSxNO0FBRUYsb0JBQVksUUFBWixFQUFzQixFQUF0QixFQUEwQixJQUExQixFQUFnQztBQUFBOztBQUM1QixhQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSxhQUFLLEVBQUwsR0FBVSxFQUFWLENBRjRCLENBRWQ7QUFDZCxhQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsYUFBSyxjQUFMLEdBQXNCLEVBQXRCO0FBQ0EsYUFBSyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsYUFBSyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsYUFBSyxZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsYUFBSyxrQkFBTCxHQUEwQixDQUExQjtBQUNBLGFBQUssU0FBTCxHQUFpQixFQUFqQjs7QUFFQSxhQUFLLHVCQUFMLEdBQStCLElBQS9CO0FBQ0EsYUFBSyxlQUFMLEdBQXVCLEVBQXZCO0FBQ0EsYUFBSyxrQkFBTCxHQUEwQixFQUExQjs7QUFFQSxhQUFLLGFBQUw7QUFDSDs7OztzQ0FFYTtBQUNWLGlCQUFLLHVCQUFMLEdBQStCLElBQS9CO0FBQ0EsaUJBQUssZUFBTCxHQUF1QixFQUF2QjtBQUNBLGlCQUFLLGtCQUFMLEdBQTBCLEVBQTFCO0FBQ0g7OztxQ0FFWSxJLEVBQU0sQyxFQUFHLEMsRUFBRyxJLEVBQU07QUFDM0IsZ0JBQUcsUUFBUSxPQUFYLEVBQW9CO0FBQ2hCLG9CQUFJLFlBQVksSUFBSSxTQUFKLENBQWMsT0FBZCxFQUF1QixDQUF2QixFQUEwQixDQUExQixFQUE2QixJQUE3QixDQUFoQjtBQUNBLHFCQUFLLGNBQUwsQ0FBb0IsSUFBcEIsQ0FBeUIsU0FBekI7QUFDQSx1QkFBTyxTQUFQO0FBQ0g7QUFDRCxvQkFBUSxHQUFSLENBQVksZ0NBQVo7QUFDQSxtQkFBTyxLQUFQO0FBQ0g7Ozt3Q0FFZSxTLEVBQVcsUSxFQUFVO0FBQ2pDLGdCQUFJLGFBQWEsSUFBakIsRUFBdUI7QUFDbkIscUJBQUssY0FBTCxHQUFzQixFQUF0QjtBQUNBO0FBQ0g7QUFDSjs7O3FDQUVZLEksRUFBTTtBQUNmLGdCQUFJLGNBQWMsRUFBbEI7QUFDQSxpQkFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLEtBQUssY0FBTCxDQUFvQixNQUF4QyxFQUFnRCxHQUFoRCxFQUFxRDtBQUNqRCxvQkFBSSxPQUFPLElBQVAsS0FBZ0IsV0FBaEIsSUFBK0IsS0FBSyxjQUFMLENBQW9CLENBQXBCLEVBQXVCLElBQXZCLEtBQWdDLEtBQUssY0FBTCxDQUFvQixDQUFwQixFQUF1QixRQUF2QixDQUFnQyxLQUFLLFdBQUwsRUFBaEMsQ0FBbkUsRUFBd0g7QUFDcEgsZ0NBQVksSUFBWixDQUFpQixLQUFLLGNBQUwsQ0FBb0IsQ0FBcEIsQ0FBakI7QUFDSDtBQUNKO0FBQ0QsbUJBQU8sV0FBUDtBQUNIOzs7MkNBRWtCLEksRUFBTTtBQUNyQixnQkFBSSxZQUFZLEtBQUssWUFBTCxFQUFoQjtBQUNBLGlCQUFLLElBQUksQ0FBVCxJQUFjLFNBQWQsRUFBeUI7QUFDckIsb0JBQUksVUFBVSxDQUFWLEVBQWEsSUFBYixJQUFxQixJQUF6QixFQUErQjtBQUMzQiwyQkFBTyxVQUFVLENBQVYsQ0FBUDtBQUNIO0FBQ0o7QUFDRCxtQkFBTyxLQUFQO0FBQ0g7Ozs0Q0FFbUIsSyxFQUFPO0FBQ3ZCLGdCQUFJLGFBQWEsS0FBSyxZQUFMLEVBQWpCO0FBQ0EsaUJBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxXQUFXLE1BQS9CLEVBQXVDLEdBQXZDLEVBQTRDO0FBQ3hDLG9CQUFJLFdBQVcsQ0FBWCxFQUFjLENBQWQsSUFBbUIsTUFBTSxDQUF6QixJQUE4QixXQUFXLENBQVgsRUFBYyxDQUFkLElBQW1CLE1BQU0sQ0FBM0QsRUFBOEQ7QUFDMUQsMkJBQU8sV0FBVyxDQUFYLENBQVA7QUFDSDtBQUNKO0FBQ0QsbUJBQU8sS0FBUDtBQUNIOzs7MkNBRWtCLFMsRUFBVyxLLEVBQU87QUFDakMsaUJBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxLQUFLLGtCQUFMLENBQXdCLE1BQTVDLEVBQW9ELEdBQXBELEVBQXlEO0FBQ3JELG9CQUFJLFVBQVUsQ0FBVixJQUFlLEtBQUssa0JBQUwsQ0FBd0IsQ0FBeEIsRUFBMkIsTUFBM0IsQ0FBa0MsQ0FBakQsSUFBc0QsVUFBVSxDQUFWLElBQWUsS0FBSyxrQkFBTCxDQUF3QixDQUF4QixFQUEyQixNQUEzQixDQUFrQyxDQUEzRyxFQUE4RztBQUMxRyx3QkFBSSxPQUFPLEtBQVAsS0FBaUIsV0FBckIsRUFBa0M7QUFDOUIsNkJBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxLQUFLLGtCQUFMLENBQXdCLENBQXhCLEVBQTJCLEtBQTNCLENBQWlDLE1BQXJELEVBQTZELEdBQTdELEVBQWtFO0FBQzlELGdDQUFJLEtBQUssa0JBQUwsQ0FBd0IsQ0FBeEIsRUFBMkIsS0FBM0IsQ0FBaUMsQ0FBakMsRUFBb0MsQ0FBcEMsSUFBeUMsTUFBTSxDQUEvQyxJQUFvRCxLQUFLLGtCQUFMLENBQXdCLENBQXhCLEVBQTJCLEtBQTNCLENBQWlDLENBQWpDLEVBQW9DLENBQXBDLElBQXlDLE1BQU0sQ0FBdkcsRUFBMEc7QUFDdEcsdUNBQU8sSUFBUDtBQUNIO0FBQ0o7QUFDSixxQkFORCxNQU1PO0FBQ0gsK0JBQU8sSUFBUDtBQUNIO0FBQ0o7QUFDSjtBQUNELG1CQUFPLEtBQVA7QUFDSDs7O29DQUVXLEksRUFBTSxLLEVBQU8sSSxFQUFNO0FBQzNCLGdCQUFJLE1BQU0sSUFBSSxRQUFKLENBQWEsSUFBYixFQUFtQixNQUFNLENBQXpCLEVBQTRCLE1BQU0sQ0FBbEMsRUFBcUMsSUFBckMsQ0FBVjtBQUNBLGlCQUFLLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBd0IsR0FBeEI7QUFDQSxtQkFBTyxHQUFQO0FBQ0g7Ozt5Q0FFZ0IsUyxFQUFXLHFCLEVBQXVCO0FBQy9DLGdCQUFJLE9BQU8sU0FBUCxLQUFxQixXQUF6QixFQUFzQztBQUNsQyxxQkFBSyxrQkFBTCxHQUEwQixFQUExQjtBQUNBO0FBQ0g7QUFDRCxnQkFBSSxJQUFJLEtBQUssa0JBQUwsQ0FBd0IsTUFBaEM7QUFDQSxtQkFDSSxHQURKLEVBQ1M7QUFDTCxvQkFBSSxLQUFLLGtCQUFMLENBQXdCLENBQXhCLEVBQTJCLElBQTNCLEtBQW9DLFVBQVUsSUFBOUMsSUFBc0QsMEJBQTBCLElBQXBGLEVBQTBGO0FBQ3RGLHlCQUFLLGtCQUFMLENBQXdCLE1BQXhCLENBQStCLENBQS9CLEVBQWlDLENBQWpDO0FBQ0g7QUFDSjtBQUNKOzs7cUNBRVk7QUFDVCxnQkFBSSxjQUFjLEVBQWxCO0FBQ0EsZ0JBQUksU0FBUyxLQUFLLFlBQUwsQ0FBa0IsT0FBbEIsQ0FBYjtBQUNBLGlCQUFLLElBQUksQ0FBVCxJQUFjLE1BQWQsRUFBc0I7QUFDbEIsb0JBQUksT0FBTyxDQUFQLEVBQVUsUUFBZCxFQUF3QjtBQUNwQixnQ0FBWSxJQUFaLENBQWlCLE9BQU8sQ0FBUCxDQUFqQjtBQUNIO0FBQ0o7QUFDRCxtQkFBTyxXQUFQO0FBQ0g7Ozs2Q0FFb0I7QUFDakIsbUJBQU8sS0FBSyxlQUFaO0FBQ0g7OzsrQ0FFc0I7QUFDbkIsaUJBQUssZUFBTCxHQUF1QixFQUF2QjtBQUNIOzs7OENBRXFCLE0sRUFBUTtBQUMxQixnQkFBSSxLQUFLLGVBQUwsQ0FBcUIsTUFBckIsSUFBK0IsQ0FBbkMsRUFBc0M7QUFDbEMscUJBQUssZUFBTCxDQUFxQixJQUFyQixDQUEwQixNQUExQjtBQUNBO0FBQ0g7QUFDRCxpQkFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLEtBQUssZUFBTCxDQUFxQixNQUF6QyxFQUFpRCxHQUFqRCxFQUFzRDtBQUNsRCxvQkFBSSxLQUFLLFNBQUwsQ0FBZSxNQUFmLE1BQTJCLEtBQUssU0FBTCxDQUFlLEtBQUssZUFBTCxDQUFxQixDQUFyQixDQUFmLENBQS9CLEVBQXdFO0FBQ3BFLHlCQUFLLGVBQUwsQ0FBcUIsTUFBckIsQ0FBNEIsQ0FBNUIsRUFBOEIsQ0FBOUI7QUFDQTtBQUNIO0FBQ0o7QUFDRCxpQkFBSyxlQUFMLENBQXFCLElBQXJCLENBQTBCLE1BQTFCO0FBQ0g7OztvQ0FFVyxJLEVBQU07QUFDZCxnQkFBSSxjQUFjLEVBQWxCO0FBQ0EsaUJBQUksSUFBSSxDQUFSLElBQWEsS0FBSyxhQUFsQixFQUFpQztBQUM3QixvQkFBRyxTQUFTLElBQVQsSUFBaUIsS0FBSyxhQUFMLENBQW1CLENBQW5CLEVBQXNCLElBQXRCLEtBQStCLENBQW5ELEVBQ0ksWUFBWSxJQUFaLENBQWlCLEtBQUssYUFBTCxDQUFtQixDQUFuQixDQUFqQjtBQUNQO0FBQ0QsbUJBQU8sV0FBUDtBQUNIOzs7K0JBRU0sTSxFQUFRO0FBQ1gsb0JBQVEsR0FBUixDQUFZLE1BQVo7QUFDSDs7OzJDQUVrQixLLEVBQU87QUFDdEIsZ0JBQUksWUFBWSxLQUFLLFdBQUwsRUFBaEI7QUFDQSxpQkFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFVBQVUsTUFBOUIsRUFBc0MsR0FBdEMsRUFBMkM7QUFDdkMsb0JBQUksVUFBVSxDQUFWLEVBQWEsQ0FBYixJQUFrQixNQUFNLENBQXhCLElBQTZCLFVBQVUsQ0FBVixFQUFhLENBQWIsSUFBa0IsTUFBTSxDQUF6RCxFQUE0RDtBQUN4RCwyQkFBTyxVQUFVLENBQVYsQ0FBUDtBQUNIO0FBQ0o7QUFDRCxtQkFBTyxLQUFQO0FBQ0g7OztxQ0FFWSxLLEVBQU87QUFDaEIsaUJBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxLQUFLLGFBQUwsQ0FBbUIsTUFBdkMsRUFBK0MsR0FBL0MsRUFBb0Q7QUFDaEQsb0JBQUksS0FBSyxhQUFMLENBQW1CLENBQW5CLEVBQXNCLElBQXRCLElBQThCLFVBQTlCLElBQTRDLEtBQUssYUFBTCxDQUFtQixDQUFuQixFQUFzQixJQUF0QixJQUE4QixRQUExRSxJQUFzRixLQUFLLGFBQUwsQ0FBbUIsQ0FBbkIsRUFBc0IsSUFBdEIsSUFBOEIsTUFBeEgsRUFBZ0k7QUFDNUgsd0JBQUksS0FBSyxFQUFMLElBQVcsQ0FBZixFQUFrQjtBQUNkLDZCQUFLLGFBQUwsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsSUFBMkIsS0FBM0I7QUFDSCxxQkFGRCxNQUVPO0FBQ0gsNkJBQUssYUFBTCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixJQUEyQixLQUEzQjtBQUNIO0FBQ0o7QUFDSjtBQUNELG1CQUFPLEtBQUssYUFBWjtBQUNIOzs7d0NBRWU7QUFDWixnQkFBSSxXQUFXLENBQ1gsU0FEVyxFQUVYLFNBRlcsRUFHWCxRQUhXLEVBSVgsT0FKVyxFQUtYLFVBTFcsRUFNWCxRQU5XLEVBT1gsU0FQVyxFQVFYLFNBUlcsRUFTWCxNQVRXLENBQWY7QUFXQSxnQkFBSSxNQUFNLElBQVY7QUFDQSxpQkFBSyxJQUFJLENBQVQsSUFBYyxRQUFkLEVBQXdCO0FBQ3BCLHNCQUFNLElBQUksUUFBSixDQUFhLFNBQVMsQ0FBVCxDQUFiLENBQU47QUFDQSxxQkFBSyxhQUFMLENBQW1CLFNBQVMsQ0FBVCxDQUFuQixJQUFrQyxFQUFsQztBQUNBLG9CQUFJLFNBQVMsQ0FBVCxLQUFlLE1BQW5CLEVBQTJCO0FBQ3ZCLHlCQUFLLElBQUksUUFBUSxDQUFqQixFQUFvQixRQUFRLEVBQTVCLEVBQWdDLE9BQWhDLEVBQXlDO0FBQ3JDLDRCQUFJLFFBQVEsQ0FBWixFQUFlO0FBQ1gsaUNBQUssYUFBTCxDQUFtQixTQUFTLENBQVQsQ0FBbkIsRUFBZ0MsSUFBaEMsQ0FBcUMsR0FBckM7QUFDSCx5QkFGRCxNQUVPO0FBQ0gsaUNBQUssYUFBTCxDQUFtQixTQUFTLENBQVQsQ0FBbkIsRUFBZ0MsSUFBaEMsQ0FBcUMsSUFBckM7QUFDSDtBQUNKO0FBQ0o7QUFDSjtBQUNKOzs7eUNBRWdCLEksRUFBTTtBQUNuQixnQkFBSSxpQkFBaUIsQ0FBckI7QUFDQSxnQkFBSSxzQkFBc0IsQ0FBMUI7O0FBRUEsZ0JBQUksUUFBUSxRQUFaLEVBQXNCO0FBQ2xCLHVCQUFPLEtBQUssZ0JBQUwsQ0FBc0IsU0FBdEIsSUFBbUMsS0FBSyxnQkFBTCxDQUFzQixTQUF0QixDQUExQztBQUNIOztBQUVELGdCQUFJLFFBQVEsTUFBWixFQUFvQjtBQUNoQix1QkFBTyxLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsRUFBeUIsTUFBaEM7QUFDSDs7QUFFRCxtQkFBTyx1QkFBdUIsQ0FBOUIsRUFBaUM7QUFDN0Isb0JBQUksS0FBSyxhQUFMLENBQW1CLElBQW5CLEVBQXlCLG1CQUF6QixNQUFrRCxJQUF0RCxFQUE0RDtBQUN4RDtBQUNBO0FBQ0gsaUJBSEQsTUFHTyxJQUFJLEtBQUssYUFBTCxDQUFtQixJQUFuQixFQUF5QixtQkFBekIsRUFBOEMsT0FBOUMsS0FBMEQsSUFBOUQsRUFBb0U7QUFDdkUsMkJBQU8sY0FBUDtBQUNILGlCQUZNLE1BRUE7QUFDSDtBQUNIO0FBQ0Q7QUFDSDtBQUNELG1CQUFPLGNBQVA7QUFDSDs7QUFFRDs7OztzQ0FDYyxJLEVBQU0sSyxFQUFPLE0sRUFBUTtBQUMvQixnQkFBSSxzQkFBc0IsQ0FBMUI7QUFDQSxnQkFBSSxpQkFBaUIsQ0FBckI7QUFDQSxnQkFBSSxnQkFBZ0IsQ0FBcEI7O0FBRUEsZ0JBQUksUUFBUSxNQUFaLEVBQW9CO0FBQ2hCLG9CQUFJLFdBQVcsSUFBZixFQUFxQjtBQUNqQiwyQkFBTyxJQUFQO0FBQ0gsaUJBRkQsTUFFTztBQUNILDJCQUFPLEtBQUssYUFBTCxDQUFtQixJQUFuQixFQUF5QixNQUFoQztBQUNIO0FBQ0o7O0FBRUQsZ0JBQUcsUUFBUSxRQUFYLEVBQXFCO0FBQ2pCLG9CQUFJLEtBQUssS0FBSyxhQUFMLENBQW1CLFNBQW5CLEVBQThCLEtBQTlCLEVBQXFDLE1BQXJDLENBQVQ7QUFDQSxvQkFBSSxLQUFLLEtBQUssYUFBTCxDQUFtQixTQUFuQixFQUE4QixLQUE5QixFQUFxQyxNQUFyQyxDQUFUOztBQUVBLG9CQUFHLE9BQU8sSUFBVixFQUFnQjtBQUNaLDJCQUFPLEVBQVA7QUFDSCxpQkFGRCxNQUVPLElBQUksT0FBTyxJQUFYLEVBQWlCO0FBQ3BCLDJCQUFPLEVBQVA7QUFDSCxpQkFGTSxNQUVBO0FBQ0gsMkJBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBRUQsbUJBQU8sdUJBQXVCLENBQTlCLEVBQWlDO0FBQzdCLG9CQUFJLEtBQUssYUFBTCxDQUFtQixJQUFuQixFQUF5QixtQkFBekIsTUFBa0QsSUFBdEQsRUFBNEQ7QUFDeEQsd0JBQUksV0FBVyxJQUFmLEVBQXFCO0FBQ2pCO0FBQ0EsNEJBQUksaUJBQWlCLEtBQXJCLEVBQTRCO0FBQ3hCLG1DQUFPLElBQVA7QUFDSDtBQUNKO0FBQ0Q7QUFDQTtBQUNILGlCQVRELE1BU08sSUFBSSxLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsRUFBeUIsbUJBQXpCLEVBQThDLE9BQTlDLEtBQTBELElBQTlELEVBQW9FO0FBQ3ZFLHdCQUFHLFdBQVcsSUFBZCxFQUFvQjtBQUNoQjtBQUNILHFCQUZELE1BRU87QUFDSCwrQkFBTyxLQUFQO0FBQ0g7QUFDSixpQkFOTSxNQU1BO0FBQ0g7QUFDSDs7QUFFRCxvQkFBRyxXQUFXLEtBQVgsSUFBb0IsbUJBQW1CLEtBQTFDLEVBQWlEO0FBQzdDLDJCQUFPLElBQVA7QUFDSDtBQUNEO0FBQ0g7QUFDRCxtQkFBTyxLQUFQO0FBQ0g7OztzQ0FFYSxJLEVBQU0sSyxFQUFPO0FBQ3ZCLGdCQUFJLHNCQUFzQixDQUExQjtBQUNBLGdCQUFJLGdCQUFnQixLQUFwQjs7QUFFQSxnQkFBSSxRQUFRLFFBQVosRUFBc0I7QUFDbEIsb0JBQUksVUFBVSxLQUFkO0FBQ0EsdUJBQU8sUUFBUSxDQUFmLEVBQWtCO0FBQ2QsOEJBQVUsS0FBSyxhQUFMLENBQW1CLFNBQW5CLEVBQThCLENBQTlCLENBQVY7QUFDQSx3QkFBSSxZQUFZLEtBQWhCLEVBQXVCO0FBQ25CO0FBQ0gscUJBRkQsTUFFTztBQUNILGtDQUFVLEtBQUssYUFBTCxDQUFtQixTQUFuQixFQUE4QixDQUE5QixDQUFWO0FBQ0EsNEJBQUksWUFBWSxLQUFoQixFQUF1QjtBQUNuQjtBQUNIO0FBQ0o7QUFDSjtBQUNELHVCQUFPLGFBQVA7QUFDSDs7QUFFRCxtQkFBTyx1QkFBdUIsQ0FBdkIsSUFBNEIsUUFBUSxDQUEzQyxFQUE4QztBQUMxQyxvQkFBSSxLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsRUFBeUIsbUJBQXpCLE1BQWtELElBQXRELEVBQTREO0FBQ3hEO0FBQ0E7QUFDSCxpQkFIRCxNQUdPLElBQUksS0FBSyxhQUFMLENBQW1CLElBQW5CLEVBQXlCLG1CQUF6QixFQUE4QyxPQUE5QyxLQUEwRCxJQUE5RCxFQUFvRTtBQUN2RTtBQUNBLDJCQUFPLEtBQVA7QUFDSCxpQkFITSxNQUdBO0FBQ0gseUJBQUssYUFBTCxDQUFtQixJQUFuQixFQUF5QixtQkFBekIsSUFBZ0QsSUFBaEQ7QUFDQTtBQUNIO0FBQ0o7O0FBRUQsbUJBQU8sYUFBUDtBQUNIOzs7dUNBRWMsSSxFQUFNLEssRUFBTztBQUN4QixnQkFBSSxXQUFXLElBQWY7QUFDQSxnQkFBSSxzQkFBc0IsQ0FBMUI7QUFDQSxnQkFBSSxZQUFZLElBQWhCO0FBQ0EsZ0JBQUksZ0JBQWdCLEtBQXBCOztBQUVBLGdCQUFJLFFBQVEsTUFBWixFQUFvQjtBQUNoQixxQkFBSyxhQUFMLENBQW1CLElBQW5CLEVBQXlCLElBQXpCLENBQThCLElBQUksUUFBSixDQUFhLElBQWIsQ0FBOUI7QUFDQSx1QkFBTyxLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsRUFBeUIsTUFBaEM7QUFDSDs7QUFFRCxnQkFBSSxRQUFRLFFBQVosRUFBc0I7QUFDbEIsb0JBQUksVUFBVSxLQUFkO0FBQ0EsdUJBQU8sUUFBUSxDQUFmLEVBQWtCO0FBQ2QsOEJBQVUsS0FBSyxjQUFMLENBQW9CLFNBQXBCLEVBQStCLENBQS9CLENBQVY7QUFDQSx3QkFBSSxZQUFZLEtBQWhCLEVBQXVCO0FBQ25CO0FBQ0gscUJBRkQsTUFFTztBQUNILGtDQUFVLEtBQUssY0FBTCxDQUFvQixTQUFwQixFQUErQixDQUEvQixDQUFWO0FBQ0EsNEJBQUksWUFBWSxLQUFoQixFQUF1QjtBQUNuQjtBQUNIO0FBQ0o7QUFDSjtBQUNELHVCQUFPLGFBQVA7QUFDSDs7QUFFRCxtQkFBTyxDQUFQLEVBQVU7QUFDTixvQkFBSSxjQUFjLElBQWxCLEVBQXdCO0FBQ3BCO0FBQ0Esd0JBQUksS0FBSyxhQUFMLENBQW1CLElBQW5CLEVBQXlCLG1CQUF6QixNQUFrRCxJQUF0RCxFQUE0RDtBQUN4RCxnQ0FBUSxLQUFSLENBQWMsNEJBQWQ7QUFDQSwrQkFBTyxLQUFQO0FBQ0g7QUFDRCx3QkFBSSx3QkFBd0IsQ0FBeEIsSUFBNkIsS0FBSyxhQUFMLENBQW1CLElBQW5CLEVBQXlCLHNCQUFzQixDQUEvQyxNQUFzRCxJQUF2RixFQUE2RjtBQUN6RixvQ0FBWSxLQUFaO0FBQ0E7QUFDSDtBQUNEO0FBQ0gsaUJBWEQsTUFXTztBQUNILHdCQUFHLHNCQUFzQixDQUF0QixHQUEwQixLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsRUFBeUIsTUFBdEQsRUFBOEQ7QUFDMUQsK0JBQU8sZ0JBQWdCLEtBQXZCO0FBQ0g7QUFDRCwrQkFBVyxJQUFJLFFBQUosQ0FBYSxJQUFiLENBQVg7QUFDQSx5QkFBSyxhQUFMLENBQW1CLElBQW5CLEVBQXlCLG1CQUF6QixJQUFnRCxRQUFoRDtBQUNBO0FBQ0Esd0JBQUcsVUFBVSxDQUFiLEVBQWdCO0FBQ1osK0JBQU8sYUFBUDtBQUNIO0FBQ0Q7QUFDTjtBQUNFLG9CQUFHLHNCQUFzQixDQUF6QixFQUE0QjtBQUN4Qiw0QkFBUSxLQUFSLENBQWMsZ0RBQWQ7QUFDQSwyQkFBTyxLQUFQO0FBQ0g7QUFDSjtBQUNKOzs7Ozs7QUFHTCxPQUFPLE9BQVAsQ0FBZSxNQUFmLEdBQXdCLE1BQXhCOzs7Ozs7O0lDcFlNLFEsR0FFRixrQkFBWSxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsU0FBSyxJQUFMLEdBQVksSUFBWjtBQUVILEM7O0FBR0wsT0FBTyxPQUFQLENBQWUsUUFBZixHQUEwQixRQUExQjs7Ozs7Ozs7O0FDUkE7O0FBRUEsSUFBSSxTQUFTLFFBQVEsVUFBUixFQUFvQixNQUFqQztBQUNBLElBQUksT0FBTyxRQUFRLFNBQVIsQ0FBWDs7SUFFTSxRO0FBRUwsc0JBQVksRUFBWixFQUFnQjtBQUFBOztBQUNULGFBQUssRUFBTCxHQUFVLEVBQVY7QUFDQSxhQUFLLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxhQUFLLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxhQUFLLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxhQUFLLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxhQUFLLElBQUwsR0FBWSxRQUFRLFNBQVIsR0FBWjtBQUNBLGFBQUssUUFBTCxHQUFnQixDQUFoQjs7QUFFQSxhQUFLLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxhQUFLLGdCQUFMLEdBQXdCLENBQXhCOztBQUVBLGFBQUssYUFBTCxHQUFxQixPQUFPLE1BQVAsQ0FBYztBQUMvQixtQkFBTyxDQUR3QjtBQUUvQixrQkFBTSxDQUZ5QjtBQUcvQixtQkFBTyxDQUh3QjtBQUkvQixzQkFBVSxDQUpxQjtBQUsvQix3QkFBWTtBQUxtQixTQUFkLENBQXJCOztBQVFBLGFBQUssYUFBTCxHQUFxQixPQUFPLE1BQVAsQ0FBYztBQUMvQixrQkFBTSxDQUR5QixFQUNuQjtBQUNaLGtCQUFNLENBRnlCLEVBRW5CO0FBQ1osb0JBQVEsQ0FIdUIsRUFHbkI7QUFDWixxQkFBUyxDQUpzQixFQUluQjtBQUNaLHNCQUFVLENBTHFCLEVBS25CO0FBQ1osc0JBQVUsQ0FOcUIsRUFNbkI7QUFDWixpQkFBSyxDQVAwQixDQU9uQjtBQVBtQixTQUFkLENBQXJCOztBQVVBLGFBQUssYUFBTCxHQUFxQixPQUFPLE1BQVAsQ0FBYztBQUMvQixtQkFBTSxDQUR5QjtBQUUvQixrQkFBSyxDQUYwQjtBQUcvQixtQkFBTSxDQUh5QjtBQUkvQixrQkFBSztBQUowQixTQUFkLENBQXJCOztBQU9BLGFBQUssV0FBTCxHQUFtQixFQUFuQjtBQUNBLGFBQUssUUFBTCxHQUFnQixFQUFoQjs7QUFFQSxhQUFLLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxhQUFLLGVBQUw7O0FBRUEsYUFBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsYUFBSyxxQkFBTCxHQUE2QixDQUE3QjtBQUNBLGFBQUssb0JBQUwsR0FBNEIsQ0FBNUI7QUFDSDs7OztxQ0FFWSxJLEVBQU07QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFJLFNBQVMsS0FBSyxtQkFBTCxDQUF5QixLQUFLLFFBQTlCLENBQWI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFJLEtBQUssU0FBTCxLQUFtQixLQUFLLGFBQUwsQ0FBbUIsS0FBMUMsRUFBaUQ7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBSSxRQUFRLEtBQUssVUFBTCxDQUFnQixNQUFoQixFQUF3QixLQUFLLENBQTdCLEVBQWdDLEtBQUssQ0FBckMsQ0FBWjtBQUNBO0FBQ0Esb0JBQUksVUFBVSxLQUFkLEVBQXFCO0FBQ2pCO0FBQ0E7QUFDQSx5QkFBSyxJQUFMLENBQVUsUUFBVixFQUFvQixFQUFDLE1BQUssV0FBTixFQUFtQixTQUFTLEVBQUMsV0FBVyxLQUFaLEVBQW1CLFFBQVEsS0FBM0IsRUFBa0MsVUFBVSxPQUFPLEVBQW5ELEVBQTVCLEVBQXBCO0FBQ0EseUJBQUssSUFBTCxDQUFVLFFBQVYsRUFBb0IsRUFBQyxNQUFLLE1BQU4sRUFBYyxTQUFTLENBQUMsRUFBQyxHQUFFLEtBQUssQ0FBUixFQUFXLEdBQUUsS0FBSyxDQUFsQixFQUFxQixVQUFVLElBQS9CLEVBQUQsQ0FBdkIsRUFBcEI7QUFDSDtBQUNKLGFBckJELE1BcUJPLElBQUksS0FBSyxTQUFMLEtBQW1CLEtBQUssYUFBTCxDQUFtQixJQUExQyxFQUFnRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsYUFUTSxNQVNBLElBQUksS0FBSyxTQUFMLEtBQW1CLEtBQUssYUFBTCxDQUFtQixLQUExQyxFQUFpRCxDQUN2RCxDQURNLE1BQ0EsSUFBSSxLQUFLLFNBQUwsS0FBbUIsS0FBSyxhQUFMLENBQW1CLFFBQTFDLEVBQW9ELENBQzFELENBRE0sTUFDQSxJQUFJLEtBQUssU0FBTCxLQUFtQixLQUFLLGFBQUwsQ0FBbUIsVUFBMUMsRUFBc0QsQ0FDNUQ7QUFDSjs7O2dDQUVPLEksRUFBTTs7QUFFVjtBQUNBO0FBQ0E7O0FBRUEsb0JBQVEsS0FBSyxTQUFiOztBQUVJLHFCQUFLLEtBQUssYUFBTCxDQUFtQixLQUF4Qjs7QUFFSTtBQUNBLHdCQUFJLFNBQVMsS0FBSyxtQkFBTCxDQUF5QixLQUFLLFFBQTlCLENBQWI7QUFDQSx3QkFBSSxVQUFVLEtBQWQ7O0FBRUEsd0JBQUcsT0FBTyxZQUFQLENBQW9CLE9BQXBCLEVBQTZCLE1BQTdCLEdBQXNDLE9BQU8sa0JBQWhELEVBQW9FO0FBQ2hFLGtDQUFVLEtBQUssVUFBTCxDQUFnQixNQUFoQixFQUF3QixLQUFLLENBQTdCLEVBQWdDLEtBQUssQ0FBckMsQ0FBVjtBQUNIOztBQUVELHdCQUFJLFlBQVksSUFBaEIsRUFBc0I7QUFDbEI7QUFDQSw0QkFBRyxPQUFPLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkIsTUFBN0IsSUFBdUMsT0FBTyxrQkFBakQsRUFBcUU7QUFDakUsaUNBQUssSUFBTCxDQUFVLFNBQVYsRUFBcUIsRUFBQyxVQUFTLE9BQVYsRUFBbUIsU0FBUyxFQUFDLE1BQUssVUFBTixFQUE1QixFQUFyQixFQUFxRSxPQUFPLFFBQTVFO0FBQ0g7QUFDSjtBQUNEOztBQUVKLHFCQUFLLEtBQUssYUFBTCxDQUFtQixJQUF4Qjs7QUFFSSx3QkFBSSxvQkFBb0IsS0FBeEI7O0FBRUEsNEJBQVEsS0FBSyxTQUFiO0FBQ0ksNkJBQUssS0FBSyxhQUFMLENBQW1CLElBQXhCOztBQUVJO0FBQ0E7O0FBRUEsaUNBQUssSUFBTCxDQUFVLFFBQVYsRUFBb0IsRUFBQyxVQUFVLFdBQVgsRUFBd0IsU0FBUyxJQUFqQyxFQUFwQixFQUE0RCxLQUFLLFlBQUwsQ0FBa0IsUUFBOUU7O0FBRUEsZ0RBQW9CLEtBQUssWUFBTCxDQUFrQixtQkFBbEIsQ0FBc0MsRUFBQyxHQUFFLEtBQUssQ0FBUixFQUFXLEdBQUUsS0FBSyxDQUFsQixFQUF0QyxDQUFwQjs7QUFFQSxnQ0FBSSxzQkFBc0IsS0FBMUIsRUFBaUM7QUFDN0I7QUFDQSxvQ0FBSSxtQkFBbUIsS0FBSyxZQUFMLENBQWtCLGtCQUFsQixDQUFxQyxpQkFBckMsQ0FBdkI7QUFDQTtBQUNBO0FBQ0Esb0NBQUkscUJBQXFCLElBQXpCLEVBQStCO0FBQzNCLHlDQUFLLFlBQUwsQ0FBa0IsdUJBQWxCLEdBQTRDLGlCQUE1QztBQUNBO0FBQ0E7O0FBRUEsd0NBQUksYUFBYSxFQUFqQjtBQUNBLGlEQUFhLEtBQUssYUFBTCxDQUFtQixpQkFBbkIsRUFBc0MsS0FBSyxnQkFBM0MsRUFBNkQsRUFBQyxHQUFFLGtCQUFrQixDQUFyQixFQUF3QixHQUFFLGtCQUFrQixDQUE1QyxFQUE3RCxDQUFiO0FBQ0EseUNBQUssSUFBTCxDQUFVLFFBQVYsRUFBb0IsRUFBQyxVQUFVLFdBQVgsRUFBd0IsU0FBUyxFQUFDLEdBQUUsS0FBSyxDQUFSLEVBQVcsR0FBRSxLQUFLLENBQWxCLEVBQWpDLEVBQXBCLEVBQTRFLEtBQUssWUFBTCxDQUFrQixRQUE5RjtBQUNBO0FBQ0EseUNBQUssSUFBTCxDQUFVLFFBQVYsRUFBb0IsRUFBQyxVQUFVLFdBQVgsRUFBd0IsU0FBUyxVQUFqQyxFQUFwQixFQUFrRSxLQUFLLFlBQUwsQ0FBa0IsUUFBcEY7QUFDSDtBQUVKLDZCQWpCRCxNQWlCTyxJQUFJLEtBQUssWUFBTCxDQUFrQix1QkFBbEIsS0FBOEMsSUFBbEQsRUFBd0Q7QUFDM0Qsb0NBQUksY0FBYyxLQUFLLFlBQUwsQ0FBa0Isa0JBQWxCLENBQXFDLEtBQUssWUFBTCxDQUFrQix1QkFBdkQsRUFBK0UsRUFBQyxHQUFFLEtBQUssQ0FBUixFQUFXLEdBQUUsS0FBSyxDQUFsQixFQUEvRSxDQUFsQjtBQUNBLG9DQUFJLGdCQUFnQixLQUFwQixFQUEyQjtBQUN2QjtBQUNBO0FBQ0EseUNBQUssSUFBTCxDQUFVLFFBQVYsRUFBb0IsRUFBQyxVQUFVLFdBQVgsRUFBd0IsU0FBUyxFQUFqQyxFQUFwQixFQUEwRCxLQUFLLFlBQUwsQ0FBa0IsUUFBNUU7QUFDSCxpQ0FKRCxNQUlPO0FBQ0g7QUFDQSx5Q0FBSyxZQUFMLENBQWtCLHVCQUFsQixDQUEwQyxJQUExQyxDQUErQyxLQUFLLENBQXBELEVBQXVELEtBQUssQ0FBNUQ7QUFDQSx5Q0FBSyxJQUFMLENBQVUsUUFBVixFQUFvQixFQUFDLFVBQVUsZUFBWCxFQUE0QixTQUFTLEVBQUMsTUFBSyxLQUFLLFlBQUwsQ0FBa0IsdUJBQWxCLENBQTBDLElBQWhELEVBQXNELEdBQUUsS0FBSyxDQUE3RCxFQUFnRSxHQUFFLEtBQUssQ0FBdkUsRUFBckMsRUFBcEIsRUFBcUksS0FBSyxZQUFMLENBQWtCLFFBQXZKO0FBQ0EseUNBQUssSUFBTCxDQUFVLFFBQVYsRUFBb0IsRUFBQyxNQUFLLFdBQU4sRUFBbUIsU0FBUyxFQUFDLE1BQUssS0FBSyxZQUFMLENBQWtCLHVCQUFsQixDQUEwQyxJQUFoRCxFQUFzRCxHQUFFLEtBQUssQ0FBN0QsRUFBZ0UsR0FBRSxLQUFLLENBQXZFLEVBQTVCLEVBQXBCLEVBQTRILEtBQUssaUJBQUwsQ0FBdUIsS0FBSyxZQUE1QixFQUEwQyxRQUF0SyxFQUpHLENBSTRNO0FBQy9NLHlDQUFLLFlBQUwsQ0FBa0IsZ0JBQWxCLENBQW1DLEtBQUssWUFBTCxDQUFrQix1QkFBckQsRUFBOEUsSUFBOUUsRUFMRyxDQUtrRjs7QUFFckYseUNBQUssU0FBTDtBQUNBO0FBQ0EseUNBQUssWUFBTCxDQUFrQixFQUFDLEdBQUUsS0FBSyxDQUFSLEVBQVcsR0FBRSxLQUFLLENBQWxCLEVBQWxCOztBQUVBO0FBQ0Esd0NBQUksT0FBTyxLQUFLLE9BQUwsQ0FBYSxLQUFLLENBQWxCLEVBQXFCLEtBQUssQ0FBMUIsQ0FBWDtBQUNBLHdDQUFLLEtBQUssSUFBTCxJQUFhLFlBQWIsSUFBOEIsS0FBSyxJQUFMLElBQWEsU0FBM0MsSUFBd0QsS0FBSyxJQUFMLElBQWEsUUFBckUsSUFBaUYsS0FBSyxJQUFMLElBQWEsTUFBbkcsRUFBMkc7QUFDdkcsNkNBQUssWUFBTCxDQUFrQix1QkFBbEIsR0FBNEMsSUFBNUM7QUFDQSw0Q0FBSSxLQUFLLElBQUwsSUFBYSxZQUFqQixFQUE4QjtBQUMxQixpREFBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0E7QUFDSDtBQUNELDRDQUFJLEtBQUssSUFBTCxJQUFhLGlCQUFiLElBQWtDLEtBQUssSUFBTCxJQUFhLG9CQUEvQyxJQUF1RSxLQUFLLElBQUwsSUFBYSxXQUF4RixFQUFzRztBQUNsRyxpREFBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0E7QUFDSDtBQUNELDRDQUFJLEtBQUssWUFBTCxDQUFrQixZQUFsQixDQUErQixVQUEvQixFQUEyQyxNQUEzQyxHQUFvRCxDQUF4RCxFQUEyRDtBQUN2RDtBQUNBO0FBQ0g7QUFDRCw0Q0FBSSxLQUFLLFlBQUwsQ0FBa0IsV0FBbEIsR0FBZ0MsTUFBaEMsR0FBeUMsQ0FBN0MsRUFBZ0Q7QUFDNUM7QUFDQTtBQUNIO0FBQ0QsNkNBQUssa0JBQUw7QUFDQTtBQUNIO0FBRUo7QUFDRCxxQ0FBSyxZQUFMLENBQWtCLHVCQUFsQixHQUE0QyxJQUE1QztBQUNIOztBQUVEOztBQUVKLDZCQUFLLEtBQUssYUFBTCxDQUFtQixNQUF4Qjs7QUFFSTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBSSxVQUFKOztBQUVBLGdDQUFJLEtBQUssVUFBTCxDQUFnQixJQUFoQixJQUF3QixpQkFBeEIsSUFBNkMsS0FBSyxVQUFMLENBQWdCLElBQWhCLElBQXdCLG9CQUFyRSxJQUE2RixLQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsSUFBd0IsV0FBekgsRUFBc0k7QUFDbEksNkNBQWEsS0FBSyxPQUFMLENBQWEsS0FBSyxDQUFsQixFQUFxQixLQUFLLENBQTFCLENBQWI7QUFDQSxvQ0FBSSxXQUFXLElBQVgsSUFBbUIsTUFBbkIsSUFBNkIsV0FBVyxPQUFYLEtBQXVCLEtBQXBELElBQTZELFdBQVcsUUFBWCxLQUF3QixLQUF6RixFQUFnRztBQUM1Rix5Q0FBSyxVQUFMLENBQWdCLEtBQUssWUFBckIsRUFBbUMsS0FBSyxDQUF4QyxFQUEyQyxLQUFLLENBQWhEO0FBQ0EseUNBQUssb0JBQUw7QUFDQSx3Q0FBSSxLQUFLLG9CQUFMLEdBQTRCLENBQWhDLEVBQW1DO0FBQy9CO0FBQ0g7QUFDRCx3Q0FBSSxLQUFLLFlBQUwsQ0FBa0IsWUFBbEIsQ0FBK0IsV0FBL0IsRUFBNEMsTUFBNUMsR0FBcUQsQ0FBekQsRUFBNEQ7QUFDeEQ7QUFDQTtBQUNIO0FBQ0Qsd0NBQUksS0FBSyxZQUFMLENBQWtCLFdBQWxCLEdBQWdDLE1BQWhDLEdBQXlDLENBQTdDLEVBQWdEO0FBQzVDO0FBQ0E7QUFDSDtBQUNELHlDQUFLLGtCQUFMO0FBQ0E7QUFDSDtBQUNKLDZCQW5CRCxNQW1CTyxJQUFJLEtBQUssVUFBTCxDQUFnQixJQUFoQixJQUF3QixrQkFBNUIsRUFBaUQ7QUFDcEQ7QUFDSCw2QkFGTSxNQUVBLElBQUksS0FBSyxVQUFMLENBQWdCLElBQWhCLElBQXdCLFFBQXhCLElBQW9DLEtBQUssVUFBTCxDQUFnQixJQUFoQixJQUF3QixXQUE1RCxJQUEyRSxLQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsSUFBd0IsWUFBdkcsRUFBcUg7QUFDeEg7QUFDQSw2Q0FBYSxLQUFLLE9BQUwsQ0FBYSxLQUFLLENBQWxCLEVBQXFCLEtBQUssQ0FBMUIsRUFBNkIsT0FBMUM7QUFDQSxvQ0FBSSxXQUFXLE9BQVgsS0FBdUIsS0FBM0IsRUFBa0M7QUFDOUI7QUFDSDtBQUNELDJDQUFXLE9BQVgsR0FBcUIsS0FBckI7QUFDQSxxQ0FBSyxxQkFBTDtBQUNBLHFDQUFLLElBQUwsQ0FBVSxRQUFWLEVBQW9CLEVBQUMsVUFBVSxZQUFYLEVBQXlCLFNBQVMsRUFBQyxHQUFFLEtBQUssQ0FBUixFQUFXLEdBQUUsS0FBSyxDQUFsQixFQUFsQyxFQUFwQixFQUE2RSxLQUFLLFlBQUwsQ0FBa0IsUUFBL0Y7QUFDQSxvQ0FBSSxLQUFLLHFCQUFMLElBQThCLENBQWxDLEVBQXFDO0FBQUc7QUFDcEMseUNBQUsscUJBQUwsR0FBNkIsQ0FBN0I7QUFDQSx3Q0FBSSxLQUFLLFlBQUwsQ0FBa0IsWUFBbEIsQ0FBK0IsV0FBL0IsRUFBNEMsTUFBNUMsR0FBcUQsQ0FBekQsRUFBNEQ7QUFDeEQ7QUFDQTtBQUNIO0FBQ0Qsd0NBQUksS0FBSyxZQUFMLENBQWtCLFdBQWxCLEdBQWdDLE1BQWhDLEdBQXlDLENBQTdDLEVBQWdEO0FBQzVDO0FBQ0E7QUFDSDtBQUNELHlDQUFLLGtCQUFMO0FBQ0E7QUFDSDtBQUNKLDZCQXRCTSxNQXNCQTtBQUNILG9EQUFvQixLQUFLLFlBQUwsQ0FBa0IsbUJBQWxCLENBQXNDLEVBQUMsR0FBRSxLQUFLLENBQVIsRUFBVyxHQUFFLEtBQUssQ0FBbEIsRUFBdEMsQ0FBcEI7QUFDQSxvQ0FBSSxzQkFBc0IsS0FBMUIsRUFBaUM7QUFDN0Isd0NBQUksS0FBSyxZQUFMLENBQWtCLHFCQUFsQixDQUF3QyxpQkFBeEMsTUFBK0QsQ0FBbkUsRUFBc0U7QUFDbEUsNkNBQUssSUFBTCxDQUFVLFFBQVYsRUFBb0IsRUFBQyxVQUFVLFdBQVgsRUFBd0IsU0FBUyxFQUFDLEdBQUUsS0FBSyxDQUFSLEVBQVcsR0FBRSxLQUFLLENBQWxCLEVBQWpDLEVBQXBCLEVBQTRFLEtBQUssWUFBTCxDQUFrQixRQUE5RjtBQUNILHFDQUZELE1BRU87QUFDSCw2Q0FBSyxJQUFMLENBQVUsUUFBVixFQUFvQixFQUFDLFVBQVUsV0FBWCxFQUF3QixTQUFTLEVBQUMsR0FBRSxLQUFLLENBQVIsRUFBVyxHQUFFLEtBQUssQ0FBbEIsRUFBakMsRUFBcEIsRUFBNEUsS0FBSyxZQUFMLENBQWtCLFFBQTlGO0FBQ0g7QUFDSjtBQUNKOztBQUVEOztBQUVKLDZCQUFLLEtBQUssYUFBTCxDQUFtQixPQUF4Qjs7QUFFSTtBQUNBOztBQUVBLG9DQUFRLEdBQVIsQ0FBWSxnQkFBWjtBQUNBOztBQUVKLDZCQUFLLEtBQUssYUFBTCxDQUFtQixRQUF4Qjs7QUFFSTs7QUFFSiw2QkFBSyxLQUFLLGFBQUwsQ0FBbUIsR0FBeEI7O0FBRUk7QUFDQSxpQ0FBSyxTQUFMLEdBQWlCLEtBQUssYUFBTCxDQUFtQixJQUFwQztBQUNBO0FBM0pSO0FBNkpBOztBQUVKO0FBQ0k7QUF4TFI7QUEyTEg7OzsyQkFFRSxJLEVBQU07QUFDTCxvQkFBUSxLQUFLLFNBQWI7QUFDSSxxQkFBSyxLQUFLLGFBQUwsQ0FBbUIsTUFBeEI7QUFDSTs7QUFFQSx3QkFBSSxLQUFLLFlBQUwsQ0FBa0Isa0JBQWxCLEdBQXVDLE1BQXZDLEdBQWdELENBQXBELEVBQXVEO0FBQ25ELDZCQUFLLFVBQUwsQ0FBZ0IsS0FBSyxVQUFyQixFQUFpQyxLQUFLLFlBQUwsQ0FBa0Isa0JBQWxCLEVBQWpDO0FBQ0E7QUFDSDs7QUFFRDs7QUFFQTtBQUNBLHdCQUFJLEtBQUssWUFBTCxDQUFrQixhQUFsQixDQUFnQyxNQUFoQyxHQUF5QyxDQUE3QyxFQUFnRDtBQUM1Qyw0QkFBSSxrQkFBa0IsS0FBSyxZQUFMLENBQWtCLFlBQWxCLENBQStCLEtBQUssZ0JBQXBDLENBQXRCO0FBQ0E7QUFDQSw2QkFBSyxJQUFMLENBQVUsUUFBVixFQUFvQixFQUFDLFVBQVMsY0FBVixFQUEwQixTQUFRLGVBQWxDLEVBQXBCLEVBQXdFLEtBQUssWUFBTCxDQUFrQixRQUExRjtBQUNIOztBQUVELHlCQUFLLGtCQUFMOztBQUVBO0FBQ0oscUJBQUssS0FBSyxhQUFMLENBQW1CLE9BQXhCO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDSixxQkFBSyxLQUFLLGFBQUwsQ0FBbUIsUUFBeEI7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNKLHFCQUFLLEtBQUssYUFBTCxDQUFtQixHQUF4QjtBQUNJO0FBaENSO0FBa0NBLG9CQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0g7OztxQ0FFUyxRLEVBQVUsSSxFQUFNO0FBQ3RCLGlCQUFLLFlBQUw7QUFDQSxnQkFBSSxTQUFTLElBQUksTUFBSixDQUFXLFFBQVgsRUFBcUIsS0FBSyxZQUExQixFQUF3QyxJQUF4QyxDQUFiO0FBQ0EsaUJBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixNQUF2QjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxRQUFWLEVBQW9CLEVBQUMsVUFBVSxjQUFYLEVBQTJCLFNBQVMsRUFBQyxJQUFJLEtBQUssWUFBVixFQUFwQyxFQUFwQixFQUFrRixRQUFsRjtBQUNBLG1CQUFPLE1BQVA7QUFDTjs7O2tDQUVZLE0sRUFBUTtBQUNkLGlCQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsTUFBdkI7QUFDQSxpQkFBSyxJQUFMLENBQVUsUUFBVixFQUFvQixFQUFDLFVBQVUsY0FBWCxFQUEyQixTQUFTLEVBQUMsSUFBSSxPQUFPLEVBQVosRUFBcEMsRUFBcEIsRUFBMEUsT0FBTyxRQUFqRjtBQUNIOzs7dUNBRWMsSyxFQUFPO0FBQ2xCLGdCQUFJLFNBQVMsSUFBYjtBQUNBLG9CQUFRLE1BQU0sS0FBZDtBQUNJLHFCQUFLLE9BQUw7QUFDSSw2QkFBUyxLQUFLLG1CQUFMLENBQXlCLE1BQU0sUUFBL0IsQ0FBVDtBQUNBLDJCQUFPLGVBQVAsQ0FBdUIsSUFBdkIsRUFBNkIsSUFBN0I7QUFDQSx5QkFBSyxJQUFMLENBQVUsUUFBVixFQUFvQixFQUFDLFVBQVMsb0JBQVYsRUFBZ0MsU0FBUyxFQUF6QyxFQUFwQixFQUFrRSxPQUFPLFFBQXpFO0FBQ0E7QUFDSixxQkFBSyxPQUFMO0FBQ0ksNkJBQVMsS0FBSyxtQkFBTCxDQUF5QixNQUFNLFFBQS9CLENBQVQ7QUFDQSwyQkFBTyxZQUFQLEdBQXNCLElBQXRCO0FBQ0Esd0JBQUksV0FBVyxLQUFLLGlCQUFMLENBQXVCLE1BQXZCLENBQWY7QUFDQSx3QkFBRyxDQUFDLFFBQUQsSUFBYSxDQUFDLFNBQVMsWUFBMUIsRUFBd0M7QUFDcEM7QUFDSCxxQkFGRCxNQUVPO0FBQ0gsNEJBQUksWUFBWSxTQUFTLFlBQVQsQ0FBc0IsT0FBdEIsQ0FBaEI7QUFDQSw0QkFBSSxzQkFBc0IsT0FBTyxZQUFQLENBQW9CLE9BQXBCLENBQTFCOztBQUVBO0FBQ0EsNEJBQUksZ0JBQWdCLEVBQXBCO0FBQ0EsNkJBQUssSUFBSSxDQUFULElBQWMsU0FBZCxFQUF5QjtBQUNyQiwwQ0FBYyxJQUFkLENBQW1CO0FBQ2YsbUNBQUUsVUFBVSxDQUFWLEVBQWEsQ0FEQTtBQUVmLG1DQUFFLFVBQVUsQ0FBVixFQUFhLENBRkE7QUFHZixzQ0FBSyxVQUFVLENBQVYsRUFBYTtBQUhILDZCQUFuQjtBQUtIO0FBQ0QsNkJBQUssSUFBTCxDQUFVLFFBQVYsRUFBb0IsRUFBQyxNQUFLLFdBQU4sRUFBbUIsU0FBUSxhQUEzQixFQUFwQixFQUErRCxPQUFPLFFBQXRFOztBQUVBO0FBQ0EsNEJBQUksYUFBYSxFQUFqQjtBQUNBLDZCQUFLLElBQUksQ0FBVCxJQUFjLG1CQUFkLEVBQW1DO0FBQy9CLHVDQUFXLElBQVgsQ0FBZ0I7QUFDWixtQ0FBRSxvQkFBb0IsQ0FBcEIsRUFBdUIsQ0FEYjtBQUVaLG1DQUFFLG9CQUFvQixDQUFwQixFQUF1QixDQUZiO0FBR1osc0NBQUssb0JBQW9CLENBQXBCLEVBQXVCO0FBSGhCLDZCQUFoQjtBQUtIO0FBQ0QsNkJBQUssSUFBTCxDQUFVLFFBQVYsRUFBb0IsRUFBQyxNQUFLLFdBQU4sRUFBbUIsU0FBUSxVQUEzQixFQUFwQixFQUE0RCxTQUFTLFFBQXJFO0FBQ0EsNkJBQUssU0FBTCxDQUFlLFFBQWYsRUFBeUIsRUFBQyxNQUFLLFdBQU4sRUFBbUIsUUFBTyxNQUExQixFQUF6Qjs7QUFFQSw2QkFBSyxZQUFMLEdBQW9CLEtBQUssZUFBTCxFQUFwQjtBQUNBLDZCQUFLLElBQUwsQ0FBVSxRQUFWLEVBQW9CLEVBQUMsVUFBUyxXQUFWLEVBQXVCLFNBQVMsRUFBaEMsRUFBcEIsRUFBeUQsS0FBSyxZQUFMLENBQWtCLFFBQTNFO0FBQ0EsNkJBQUssU0FBTDtBQUVIO0FBQ0Q7QUFDSjtBQUNJLDRCQUFRLEdBQVIsQ0FBWSxNQUFNLEtBQWxCO0FBQ0EsNEJBQVEsS0FBUixDQUFjLE1BQU0sS0FBTixHQUFjLCtCQUE1QjtBQS9DUjtBQWlESDs7OzBDQUVpQixNLEVBQVE7QUFDdEIsZ0JBQUksS0FBSyxZQUFMLENBQWtCLE1BQWxCLElBQTRCLENBQWhDLEVBQW1DO0FBQy9CLHVCQUFPLEtBQVA7QUFDSDtBQUNELGdCQUFJLEtBQUssWUFBTCxDQUFrQixDQUFsQixNQUF5QixNQUE3QixFQUFxQztBQUNqQyx1QkFBTyxLQUFLLFlBQUwsQ0FBa0IsQ0FBbEIsQ0FBUDtBQUNILGFBRkQsTUFFTztBQUNILHVCQUFPLEtBQUssWUFBTCxDQUFrQixDQUFsQixDQUFQO0FBQ0g7QUFDSjs7OzZDQUVvQjtBQUNqQixpQkFBSyxZQUFMLENBQWtCLFdBQWxCO0FBQ0EsaUJBQUssSUFBTCxDQUFVLFFBQVYsRUFBb0IsRUFBQyxVQUFTLFVBQVYsRUFBc0IsU0FBUyxFQUEvQixFQUFwQixFQUF3RCxLQUFLLFlBQUwsQ0FBa0IsUUFBMUU7QUFDQSxpQkFBSyxZQUFMLEdBQW9CLEtBQUssaUJBQUwsQ0FBdUIsS0FBSyxZQUE1QixDQUFwQjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxRQUFWLEVBQW9CLEVBQUMsVUFBUyxXQUFWLEVBQXVCLFNBQVMsRUFBaEMsRUFBcEIsRUFBeUQsS0FBSyxZQUFMLENBQWtCLFFBQTNFO0FBQ0EsaUJBQUssU0FBTCxHQUFpQixDQUFqQjtBQUNIOzs7MENBRWdCO0FBQ2IsbUJBQU8sS0FBSyxZQUFMLENBQWtCLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFjLENBQXpCLENBQWxCLENBQVA7QUFDSDs7O3dDQUVlLEksRUFBTTtBQUNsQixpQkFBSyxJQUFJLENBQVQsSUFBYyxLQUFLLFlBQW5CLEVBQWlDO0FBQzdCLG9CQUFHLEtBQUssWUFBTCxDQUFrQixDQUFsQixFQUFxQixJQUFyQixJQUE2QixJQUFoQyxFQUNJLE9BQU8sS0FBSyxZQUFMLENBQWtCLENBQWxCLENBQVA7QUFDUDtBQUNELG1CQUFPLElBQVA7QUFDSDs7OzRDQUVtQixFLEVBQUk7QUFDcEIsaUJBQUssSUFBSSxDQUFULElBQWMsS0FBSyxZQUFuQixFQUFpQztBQUM3QixvQkFBRyxLQUFLLFlBQUwsQ0FBa0IsQ0FBbEIsRUFBcUIsUUFBckIsSUFBaUMsRUFBcEMsRUFBd0M7QUFDcEMsMkJBQU8sS0FBSyxZQUFMLENBQWtCLENBQWxCLENBQVA7QUFDSDtBQUNKO0FBQ0QsbUJBQU8sS0FBUDtBQUNIOzs7eUNBRWdCO0FBQ2IsbUJBQU8sS0FBSyxZQUFMLENBQWtCLE1BQXpCO0FBQ0g7OztrQ0FFUyxNLEVBQVE7QUFDZCxtQkFBTyxTQUFQLEdBQW1CLEVBQW5CO0FBQ0EsaUJBQUssSUFBSSxDQUFULElBQWMsT0FBTyxjQUFyQixFQUFxQztBQUNqQyxvQkFBSSxLQUFLLFNBQUwsQ0FBZSxPQUFPLGNBQVAsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBeEMsRUFBMkMsT0FBTyxjQUFQLENBQXNCLENBQXRCLEVBQXlCLENBQXBFLEVBQXVFLElBQXZFLElBQStFLFFBQW5GLEVBQTZGO0FBQ3pGLDJCQUFPLFNBQVAsQ0FBaUIsSUFBakIsQ0FBc0IsS0FBSyxTQUFMLENBQWUsT0FBTyxjQUFQLENBQXNCLENBQXRCLEVBQXlCLENBQXhDLEVBQTJDLE9BQU8sY0FBUCxDQUFzQixDQUF0QixFQUF5QixDQUFwRSxFQUF1RSxJQUE3RjtBQUNIO0FBQ0o7QUFDSjs7O3FDQUVZLE0sRUFBUTtBQUNqQixpQkFBSyxJQUFJLENBQVQsSUFBYyxPQUFPLGNBQXJCLEVBQXFDO0FBQ2pDLG9CQUFJLEtBQUssU0FBTCxDQUFlLE9BQU8sY0FBUCxDQUFzQixDQUF0QixFQUF5QixDQUF4QyxFQUEyQyxPQUFPLGNBQVAsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBcEUsRUFBdUUsSUFBdkUsSUFBK0UsU0FBbkYsRUFBOEY7QUFDMUYsMkJBQU8sY0FBUCxDQUFzQixDQUF0QixFQUF5QixRQUF6QixHQUFvQyxJQUFwQztBQUNILGlCQUZELE1BRU87QUFDSCwyQkFBTyxjQUFQLENBQXNCLENBQXRCLEVBQXlCLFFBQXpCLEdBQW9DLEtBQXBDO0FBQ0g7QUFDSjtBQUNKOzs7eUNBRWdCLEksRUFBTTtBQUNuQixpQkFBSyxJQUFJLENBQVQsSUFBYyxLQUFLLFlBQW5CLEVBQWlDO0FBQzdCLG9CQUFHLEtBQUssWUFBTCxDQUFrQixDQUFsQixFQUFxQixJQUFyQixJQUE2QixJQUFoQyxFQUNJLE9BQU8sSUFBUDtBQUNQO0FBQ0QsbUJBQU8sS0FBUDtBQUNIOzs7cUNBRVksSSxFQUFNO0FBQ2YsZ0JBQUksT0FBTyxLQUFLLE9BQUwsQ0FBYSxLQUFLLENBQWxCLEVBQXFCLEtBQUssQ0FBMUIsQ0FBWDtBQUNBLGdCQUFJLGlCQUFpQixJQUFyQjs7QUFFQSxvQkFBUSxLQUFLLElBQWI7QUFDSSxxQkFBSyxTQUFMO0FBQ0kseUJBQUssWUFBTCxDQUFrQixtQkFBbEIsQ0FBc0MsRUFBQyxHQUFFLEtBQUssQ0FBUixFQUFXLEdBQUUsS0FBSyxDQUFsQixFQUF0QyxFQUE0RCxRQUE1RCxHQUF1RSxJQUF2RTtBQUNBO0FBQ0oscUJBQUssWUFBTDs7QUFFSTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBRyxLQUFLLElBQUwsSUFBYSxhQUFoQixFQUErQjtBQUMzQjtBQUNBLGdDQUFRLEdBQVIsQ0FBWSx5QkFBWjtBQUNBO0FBQ0g7O0FBRUQseUJBQUssSUFBSSxDQUFULElBQWMsS0FBSyxVQUFMLENBQWdCLGdCQUE5QixFQUFnRDtBQUM1Qyw0QkFBSSxLQUFLLFlBQUwsQ0FBa0IsYUFBbEIsQ0FBZ0MsS0FBSyxVQUFMLENBQWdCLGdCQUFoQixDQUFpQyxDQUFqQyxDQUFoQyxFQUFxRSxLQUFLLFVBQUwsQ0FBZ0IsaUJBQWhCLENBQWtDLENBQWxDLENBQXJFLE1BQStHLEtBQW5ILEVBQTBIO0FBQ3RIO0FBQ0Esb0NBQVEsR0FBUixDQUFZLGtCQUFaO0FBQ0EsbUNBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBRUQseUJBQUssSUFBSSxDQUFULElBQWMsS0FBSyxVQUFMLENBQWdCLGlCQUE5QixFQUFpRDtBQUM3Qyw0QkFBSSxLQUFLLFlBQUwsQ0FBa0IsYUFBbEIsQ0FBZ0MsS0FBSyxVQUFMLENBQWdCLGlCQUFoQixDQUFrQyxDQUFsQyxDQUFoQyxFQUFzRSxLQUFLLFVBQUwsQ0FBZ0Isa0JBQWhCLENBQW1DLENBQW5DLENBQXRFLEVBQTZHLElBQTdHLE1BQXVILEtBQTNILEVBQWtJO0FBQzlIO0FBQ0Esb0NBQVEsR0FBUixDQUFZLDRDQUFaO0FBQ0EsbUNBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBRUQsd0JBQUksS0FBSyxJQUFMLElBQWEsaUJBQWIsSUFBa0MsS0FBSyxJQUFMLElBQWEsb0JBQW5ELEVBQTBFO0FBQ3RFLDZCQUFLLG9CQUFMLEdBQTRCLEtBQUssWUFBTCxDQUFrQixnQkFBbEIsQ0FBbUMsUUFBbkMsSUFBK0MsS0FBSyxVQUFMLENBQWdCLGtCQUFoQixDQUFtQyxDQUFuQyxDQUEvQyxHQUF1RixLQUFLLFlBQUwsQ0FBa0IsWUFBbEIsQ0FBK0IsT0FBL0IsRUFBd0MsTUFBM0o7QUFDSCxxQkFGRCxNQUVPLElBQUssS0FBSyxJQUFMLElBQWEsV0FBbEIsRUFBK0I7QUFDbEMsNkJBQUssb0JBQUwsR0FBNEIsS0FBSyxZQUFMLENBQWtCLGdCQUFsQixDQUFtQyxRQUFuQyxJQUErQyxLQUFLLFVBQUwsQ0FBZ0Isa0JBQWhCLENBQW1DLENBQW5DLENBQS9DLEdBQXVGLEtBQUssVUFBTCxDQUFnQixpQkFBaEIsQ0FBa0MsQ0FBbEMsQ0FBdkYsR0FBOEgsS0FBSyxZQUFMLENBQWtCLFlBQWxCLENBQStCLE9BQS9CLEVBQXdDLE1BQWxNO0FBQ0g7O0FBRUQseUJBQUssSUFBSSxDQUFULElBQWMsS0FBSyxVQUFMLENBQWdCLGdCQUE5QixFQUFnRDtBQUM1Qyx5Q0FBaUIsS0FBSyxZQUFMLENBQWtCLGFBQWxCLENBQWdDLEtBQUssVUFBTCxDQUFnQixnQkFBaEIsQ0FBaUMsQ0FBakMsQ0FBaEMsRUFBcUUsS0FBSyxVQUFMLENBQWdCLGlCQUFoQixDQUFrQyxDQUFsQyxDQUFyRSxDQUFqQjtBQUNBLGdDQUFRLEdBQVIsQ0FBWSxZQUFZLEtBQUssWUFBTCxDQUFrQixFQUE5QixHQUFtQyxTQUFuQyxHQUErQyxjQUEvQyxHQUFnRSxHQUFoRSxHQUFzRSxLQUFLLFVBQUwsQ0FBZ0IsZ0JBQWhCLENBQWlDLENBQWpDLENBQXRFLEdBQTRHLDBCQUE1RyxHQUF5SSxLQUFLLFlBQUwsQ0FBa0IsZ0JBQWxCLENBQW1DLEtBQUssVUFBTCxDQUFnQixnQkFBaEIsQ0FBaUMsQ0FBakMsQ0FBbkMsQ0FBcko7QUFDSDs7QUFFRCx5QkFBSyxJQUFJLENBQVQsSUFBYyxLQUFLLFVBQUwsQ0FBZ0IsaUJBQTlCLEVBQWlEO0FBQzdDLHlDQUFpQixLQUFLLFlBQUwsQ0FBa0IsY0FBbEIsQ0FBaUMsS0FBSyxVQUFMLENBQWdCLGlCQUFoQixDQUFrQyxDQUFsQyxDQUFqQyxFQUF1RSxLQUFLLFVBQUwsQ0FBZ0Isa0JBQWhCLENBQW1DLENBQW5DLENBQXZFLENBQWpCO0FBQ0EsNEJBQUksY0FBSixFQUNJLFFBQVEsR0FBUixDQUFZLFlBQVksS0FBSyxZQUFMLENBQWtCLEVBQTlCLEdBQW1DLFNBQW5DLEdBQStDLGNBQS9DLEdBQWdFLEdBQWhFLEdBQXNFLEtBQUssVUFBTCxDQUFnQixpQkFBaEIsQ0FBa0MsQ0FBbEMsQ0FBdEUsR0FBNkcsMEJBQTdHLEdBQTBJLEtBQUssWUFBTCxDQUFrQixnQkFBbEIsQ0FBbUMsS0FBSyxVQUFMLENBQWdCLGlCQUFoQixDQUFrQyxDQUFsQyxDQUFuQyxDQUF0SjtBQUNQOztBQUVELHdCQUFJLEtBQUssSUFBTCxJQUFhLFFBQWpCLEVBQTJCO0FBQ3ZCO0FBQ0EsNEJBQUksS0FBSyxZQUFMLENBQWtCLGdCQUFsQixDQUFtQyxRQUFuQyxJQUErQyxLQUFLLFlBQUwsQ0FBa0IsWUFBbEIsQ0FBK0IsT0FBL0IsQ0FBbkQsRUFBNEY7QUFDeEYsaUNBQUssVUFBTCxHQUFrQixJQUFsQjtBQUNIO0FBQ0o7O0FBRUQsd0JBQUksS0FBSyxJQUFMLElBQWEsWUFBakIsRUFBK0I7QUFDM0I7QUFDQSw2QkFBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0E7QUFDSDtBQUNELDRCQUFRLEdBQVIsQ0FBYSxTQUFiOztBQUVBO0FBQ0E7O0FBRUoscUJBQUssUUFBTDtBQUNJLHlCQUFLLFNBQUwsQ0FBZSxLQUFLLFlBQXBCO0FBQ0E7QUFDQTtBQUNBOztBQUVKLHFCQUFLLFFBQUw7QUFDSSw0QkFBUSxLQUFLLElBQWI7QUFDSSw2QkFBSyxRQUFMO0FBQ0EsNkJBQUssVUFBTDtBQUNBLDZCQUFLLE9BQUw7QUFDQSw2QkFBSyxVQUFMO0FBQ0EsNkJBQUssV0FBTDtBQUNBLDZCQUFLLFFBQUw7QUFDQSw2QkFBSyxXQUFMO0FBQ0EsNkJBQUssVUFBTDtBQUNJO0FBQ0EsZ0NBQUksdUJBQXVCLENBQTNCO0FBQ0EsZ0NBQUksK0JBQStCLENBQW5DO0FBQ0EsZ0NBQUksbUJBQW1CLElBQXZCO0FBQ0EsZ0NBQUksY0FBYyxFQUFsQjtBQUNBLGdDQUFJLGdCQUFnQixLQUFLLFlBQUwsQ0FBa0IsVUFBbEIsRUFBcEI7O0FBRUEsZ0NBQUksY0FBYyxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzFCLHVDQUQwQixDQUNsQjtBQUNYOztBQUVELGlDQUFLLElBQUksQ0FBVCxJQUFjLEtBQUssVUFBTCxDQUFnQixnQkFBOUIsRUFBZ0Q7QUFDNUMsdURBQXVCLEtBQUssWUFBTCxDQUFrQixnQkFBbEIsQ0FBbUMsS0FBSyxVQUFMLENBQWdCLGdCQUFoQixDQUFpQyxDQUFqQyxDQUFuQyxDQUF2QjtBQUNBLCtEQUErQix1QkFBdUIsS0FBSyxVQUFMLENBQWdCLGlCQUF0RTtBQUNBLG9DQUFJLCtCQUErQixDQUFuQyxFQUFzQztBQUNsQywyQ0FEa0MsQ0FDMUI7QUFDWDtBQUNELG9DQUFJLHFCQUFxQixJQUFyQixJQUE2QiwrQkFBK0IsZ0JBQWhFLEVBQWtGO0FBQzlFLHVEQUFtQiw0QkFBbkI7QUFDSDtBQUNKO0FBQ0Qsb0NBQVEsR0FBUixDQUFZLGlDQUFpQyxnQkFBakMsR0FBb0QsWUFBaEU7QUFDQSxpQ0FBSyxVQUFMLEdBQWtCLElBQWxCO0FBQ0E7QUFDQSxpQ0FBSyxJQUFMLENBQVUsUUFBVixFQUFvQixFQUFDLFVBQVMsY0FBVixFQUEwQixTQUFRLEVBQUMsU0FBUSxhQUFULEVBQWxDLEVBQXBCLEVBQWdGLEtBQUssWUFBTCxDQUFrQixRQUFsRztBQUNBO0FBQ0E7O0FBR0osNkJBQUssa0JBQUw7QUFDSTtBQUNBOztBQUVKLDZCQUFLLFFBQUw7QUFDQSw2QkFBSyxXQUFMO0FBQ0ksaUNBQUssVUFBTCxHQUFrQixJQUFsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFRLEdBQVIsQ0FBWSx5REFBWjtBQUNBO0FBMURSO0FBNERBOztBQUVKO0FBQ0k7QUF6SVI7QUEySUg7Ozt3Q0FFZSxLLEVBQU87QUFDbkIsZ0JBQUksUUFBSixFQUFjLFNBQWQ7QUFDQSxpQkFBSyxJQUFJLEtBQUssQ0FBZCxFQUFpQixLQUFLLEtBQUssWUFBTCxDQUFrQixNQUF4QyxFQUFnRCxJQUFoRCxFQUFzRDtBQUNsRCwyQkFBVyxLQUFLLFlBQUwsQ0FBa0IsRUFBbEIsRUFBc0Isa0JBQXRCLENBQXlDLEtBQXpDLENBQVg7QUFDQSw0QkFBWSxLQUFLLFlBQUwsQ0FBa0IsRUFBbEIsRUFBc0IsbUJBQXRCLENBQTBDLEtBQTFDLENBQVo7QUFDQSxvQkFBSSxhQUFhLEtBQWpCLEVBQXdCO0FBQ3BCLDJCQUFPLFFBQVA7QUFDSCxpQkFGRCxNQUVPLElBQUksY0FBYyxLQUFsQixFQUF5QjtBQUM1QiwyQkFBTyxTQUFQO0FBQ0gsaUJBRk0sTUFFQTtBQUNILDJCQUFPLEtBQVA7QUFDSDtBQUNKO0FBQ0o7OzttQ0FFVSxVLEVBQVksVyxFQUFhO0FBQ2hDLGdCQUFJLFlBQVksTUFBWixJQUFzQixDQUExQixFQUE4QjtBQUMxQix1QkFBTyxLQUFQO0FBQ0g7O0FBRUQsaUJBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxZQUFZLE1BQWhDLEVBQXdDLEdBQXhDLEVBQTZDO0FBQ3pDLG9CQUFJLGdCQUFnQixFQUFDLEdBQUUsWUFBWSxDQUFaLEVBQWUsQ0FBbEIsRUFBcUIsR0FBRSxZQUFZLENBQVosRUFBZSxDQUF0QyxFQUFwQjtBQUNBLG9CQUFJLFdBQVcsS0FBZjtBQUNBLG9CQUFJLE9BQUo7O0FBRUEsd0JBQVEsV0FBVyxJQUFuQjtBQUNJLHlCQUFLLE9BQUw7QUFDSSw0QkFBSSxXQUFKO0FBQ0EsNEJBQUksZUFBSjtBQUNBLCtCQUFPLGFBQWEsS0FBcEIsRUFBMkI7QUFDdkIsZ0NBQUksS0FBSyxZQUFMLENBQWtCLEVBQWxCLElBQXdCLENBQTVCLEVBQStCO0FBQzNCLDhDQUFjLENBQWQ7QUFDSCw2QkFGRCxNQUVPO0FBQ0gsOENBQWMsQ0FBZDtBQUNIO0FBQ0QsMENBQWMsS0FBSyxPQUFMLENBQWEsY0FBYyxDQUEzQixFQUE4QixjQUFjLENBQTVDLENBQWQ7QUFDQSxvQ0FBUSxHQUFSLENBQVksV0FBWjtBQUNBLG9DQUFRLFlBQVksSUFBcEI7QUFDSSxxQ0FBSyxPQUFMO0FBQ0EscUNBQUssU0FBTDtBQUNJLHdDQUFJLFlBQVksUUFBWixLQUF5QixJQUE3QixFQUFtQztBQUMvQiwwREFBa0IsS0FBSyxlQUFMLENBQXFCLGFBQXJCLENBQWxCO0FBQ0EsNkNBQUssWUFBTCxDQUFrQixNQUFsQixDQUF5QixlQUF6QjtBQUNBLG9EQUFZLFFBQVosR0FBdUIsS0FBdkI7QUFDQSxtREFBVyxJQUFYO0FBQ0E7QUFDSDtBQUNEO0FBQ0o7QUFDSTtBQUNBLHdDQUFJLFlBQVksUUFBWixLQUF5QixJQUE3QixFQUFtQztBQUMvQiwwREFBa0IsS0FBSyxlQUFMLENBQXFCLGFBQXJCLENBQWxCO0FBQ0EsNkNBQUssWUFBTCxDQUFrQixlQUFsQixDQUFrQyxlQUFsQztBQUNBO0FBQ0EsNkNBQUssSUFBTCxDQUFVLFFBQVYsRUFBb0IsRUFBQyxVQUFTLGlCQUFWLEVBQTZCLFNBQVEsZUFBckMsRUFBcEIsRUFBMkUsS0FBSyxZQUFMLENBQWtCLFFBQTdGO0FBQ0Esb0RBQVksUUFBWixHQUF1QixLQUF2QjtBQUNBLDZDQUFLLElBQUwsQ0FBVSxRQUFWLEVBQW9CLEVBQUMsVUFBUyxZQUFWLEVBQXdCLFNBQVEsYUFBaEMsRUFBcEIsRUFBb0UsS0FBSyxZQUFMLENBQWtCLFFBQXRGO0FBQ0E7QUFDQSxtREFBVyxJQUFYO0FBQ0E7QUFDSDtBQUNELHdDQUFJLFlBQVksT0FBWixLQUF3QixJQUE1QixFQUFrQztBQUM5QjtBQUNILHFDQUZELE1BRU87QUFDSCxvREFBWSxPQUFaLEdBQXNCLElBQXRCO0FBQ0EsNkNBQUssSUFBTCxDQUFVLFFBQVYsRUFBb0IsRUFBQyxVQUFTLFlBQVYsRUFBd0IsU0FBUSxhQUFoQyxFQUFwQixFQUFvRSxLQUFLLFlBQUwsQ0FBa0IsUUFBdEY7QUFDQTtBQUNBLG1EQUFXLElBQVg7QUFDQTtBQUNIO0FBaENUO0FBa0NIO0FBQ0Q7QUFDSix5QkFBSyxRQUFMO0FBQ0EseUJBQUssVUFBTDtBQUNBLHlCQUFLLFdBQUw7QUFDQSx5QkFBSyxRQUFMO0FBQ0ksNEJBQUksV0FBVyxJQUFYLElBQW1CLFFBQW5CLElBQStCLFdBQVcsSUFBWCxJQUFtQixXQUF0RCxFQUFtRTtBQUMvRCxnQ0FBSSxLQUFLLFlBQUwsQ0FBa0IsRUFBbEIsSUFBd0IsQ0FBNUIsRUFBK0I7QUFDM0IsOENBQWMsQ0FBZCxJQUFtQixLQUFLLGdCQUF4QjtBQUNILDZCQUZELE1BRU87QUFDSCw4Q0FBYyxDQUFkLElBQW1CLEtBQUssZ0JBQXhCO0FBQ0g7QUFDSjtBQUNELHNDQUFjLEtBQUssT0FBTCxDQUFhLGNBQWMsQ0FBM0IsRUFBOEIsY0FBYyxDQUE1QyxDQUFkO0FBQ0Esa0NBQVUsTUFBVjtBQUNBLDZCQUFLLFlBQUwsQ0FBa0IsV0FBbEIsQ0FBOEIsV0FBVyxJQUF6QyxFQUErQyxhQUEvQyxFQUE4RCxPQUE5RDtBQUNBLDZCQUFLLElBQUwsQ0FBVSxRQUFWLEVBQW9CLEVBQUMsVUFBUyxhQUFWLEVBQXlCLFNBQVEsRUFBQyxNQUFLLFdBQVcsSUFBakIsRUFBdUIsVUFBVSxLQUFLLFlBQUwsQ0FBa0IsRUFBbkQsRUFBdUQsT0FBTSxhQUE3RCxFQUE0RSxNQUFLLE9BQWpGLEVBQWpDLEVBQXBCLEVBQWlKLEtBQUssWUFBTCxDQUFrQixRQUFuSztBQUNBO0FBQ0E7QUFDSix5QkFBSyxVQUFMO0FBQ0ksNEJBQUksS0FBSyxZQUFMLENBQWtCLEVBQWxCLElBQXdCLENBQTVCLEVBQStCO0FBQzNCLDBDQUFjLENBQWQsR0FBa0IsS0FBSyxLQUFLLGdCQUE1QjtBQUNILHlCQUZELE1BRU87QUFDSCwwQ0FBYyxDQUFkLEdBQWtCLEtBQUssZ0JBQUwsR0FBd0IsQ0FBMUM7QUFDSDtBQUNELHNDQUFjLEtBQUssT0FBTCxDQUFhLGNBQWMsQ0FBM0IsRUFBOEIsY0FBYyxDQUE1QyxDQUFkO0FBQ0EsNEJBQUksWUFBWSxPQUFaLEtBQXdCLElBQTVCLEVBQWtDO0FBQzlCO0FBQ0gseUJBRkQsTUFFTztBQUNILHdDQUFZLE9BQVosR0FBc0IsSUFBdEI7QUFDQSxpQ0FBSyxJQUFMLENBQVUsUUFBVixFQUFvQixFQUFDLFVBQVMsWUFBVixFQUF3QixTQUFRLGFBQWhDLEVBQXBCLEVBQW9FLEtBQUssWUFBTCxDQUFrQixRQUF0RjtBQUNBO0FBQ0g7QUFDRDtBQUNKO0FBQ0ksZ0NBQVEsS0FBUixDQUFjLGtEQUFkO0FBakZSO0FBbUZIO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOzs7aUNBRVEsTSxFQUFRO0FBQ2IsZ0JBQUksY0FBYyxFQUFsQjtBQUNBLGlCQUFLLElBQUksQ0FBVCxJQUFjLEtBQUssU0FBbkIsRUFBOEI7QUFDMUIscUJBQUssSUFBSSxDQUFULElBQWMsS0FBSyxTQUFMLENBQWUsQ0FBZixDQUFkLEVBQWlDO0FBQzdCLHdCQUFJLEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsSUFBckIsSUFBNkIsTUFBakMsRUFBeUM7QUFDckMsNEJBQUksTUFBSixFQUFZO0FBQ1IsZ0NBQUksT0FBTyxFQUFQLElBQWEsQ0FBYixJQUFrQixJQUFJLEVBQTFCLEVBQThCO0FBQzFCLDRDQUFZLElBQVosQ0FBaUIsS0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixDQUFqQjtBQUNILDZCQUZELE1BRU8sSUFBSSxPQUFPLEVBQVAsSUFBYSxDQUFiLElBQWtCLElBQUksRUFBMUIsRUFBOEI7QUFDakMsNENBQVksSUFBWixDQUFpQixLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBQWpCO0FBQ0g7QUFDSix5QkFORCxNQU1PO0FBQ0gsd0NBQVksSUFBWixDQUFpQixLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBQWpCO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFDRCxtQkFBTyxXQUFQO0FBQ0g7Ozt3Q0FFZSxNLEVBQVE7QUFDcEIsZ0JBQUksY0FBYyxFQUFsQjtBQUNBLGlCQUFLLElBQUksQ0FBVCxJQUFjLEtBQUssU0FBbkIsRUFBOEI7QUFDMUIscUJBQUssSUFBSSxDQUFULElBQWMsS0FBSyxTQUFMLENBQWUsQ0FBZixDQUFkLEVBQWlDO0FBQzdCLHdCQUFJLE1BQUosRUFBWTtBQUNSLDRCQUFJLE9BQU8sRUFBUCxJQUFhLENBQWpCLEVBQW9CO0FBQ2hCLGdDQUFJLElBQUksRUFBSixJQUFVLEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsT0FBckIsS0FBaUMsSUFBL0MsRUFBcUQ7QUFDakQsNENBQVksSUFBWixDQUFpQixLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBQWpCO0FBQ0g7QUFDSix5QkFKRCxNQUlPO0FBQ0gsZ0NBQUksSUFBSSxFQUFKLElBQVUsS0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixPQUFyQixLQUFpQyxJQUEvQyxFQUFxRDtBQUNqRCw0Q0FBWSxJQUFaLENBQWlCLEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FBakI7QUFDSDtBQUNKO0FBQ0oscUJBVkQsTUFVTztBQUNILDRCQUFJLEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsT0FBckIsS0FBaUMsSUFBckMsRUFBMkM7QUFDdkMsd0NBQVksSUFBWixDQUFpQixLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBQWpCO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFDRCxtQkFBTyxXQUFQO0FBQ0g7OzttQ0FFVSxNLEVBQVEsQyxFQUFHLEMsRUFBRzs7QUFFckIsZ0JBQUksT0FBTyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLFdBQVcsSUFBaEQsRUFBc0Q7QUFDbEQsdUJBQU8sS0FBUDtBQUNIOztBQUVELGdCQUFJLGVBQWUsS0FBSyxPQUFMLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFuQjtBQUNBLGdCQUFJLEtBQUosRUFBVyxTQUFYOztBQUVBLGdCQUFJLE9BQU8sRUFBUCxJQUFhLGFBQWEsS0FBMUIsSUFBbUMsYUFBYSxRQUFiLEtBQTBCLElBQWpFLEVBQXVFO0FBQ25FLHVCQUFPLEtBQVA7QUFDSDs7QUFFRDtBQUNBLGdCQUFJLEtBQUssU0FBTCxLQUFtQixLQUFLLGFBQUwsQ0FBbUIsS0FBMUMsRUFBaUQ7QUFDN0Msb0JBQUksT0FBTyxZQUFQLENBQW9CLE9BQXBCLEVBQTZCLE1BQTdCLEtBQXdDLE9BQU8sa0JBQW5ELEVBQXVFO0FBQ25FLDJCQUFPLEtBQVA7QUFDSDtBQUNELG9CQUFHLGFBQWEsSUFBYixJQUFxQixNQUFyQixJQUErQixhQUFhLElBQWIsSUFBcUIsUUFBcEQsSUFBZ0UsYUFBYSxJQUFiLElBQXFCLFFBQXJGLElBQWlHLGFBQWEsSUFBYixJQUFxQixZQUF6SCxFQUF1STtBQUNuSSxnQ0FBWSxNQUFaO0FBQ0EsNEJBQVEsT0FBTyxZQUFQLENBQW9CLE9BQXBCLEVBQTZCLENBQTdCLEVBQWdDLENBQWhDLEVBQW1DLFNBQW5DLENBQVI7QUFDQSwyQkFBTyxLQUFQO0FBQ0g7QUFDSixhQVRELE1BU1E7QUFDSixvQkFBSSxhQUFhLElBQWIsSUFBcUIsTUFBekIsRUFBaUM7QUFDN0IsZ0NBQVksTUFBWjtBQUNBLDRCQUFRLE9BQU8sWUFBUCxDQUFvQixPQUFwQixFQUE2QixDQUE3QixFQUFnQyxDQUFoQyxFQUFtQyxTQUFuQyxDQUFSO0FBQ0EsMkJBQU8sS0FBUDtBQUNIO0FBQ0o7QUFDSjs7OzBDQUVpQjtBQUNkLGdCQUFJLFdBQVcsUUFBUSw4QkFBUixDQUFmOztBQUVBLGlCQUFJLElBQUksSUFBSSxDQUFaLEVBQWUsSUFBSSxLQUFLLFdBQXhCLEVBQXFDLEdBQXJDLEVBQTBDO0FBQ3RDLHFCQUFLLFNBQUwsQ0FBZSxDQUFmLElBQW9CLEVBQXBCO0FBQ0EscUJBQUksSUFBSSxJQUFJLENBQVosRUFBZSxJQUFJLEtBQUssUUFBeEIsRUFBa0MsR0FBbEMsRUFBdUM7QUFDbkMseUJBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsSUFBdUI7QUFDbkIsMkJBQUUsQ0FEaUI7QUFFbkIsMkJBQUU7QUFGaUIscUJBQXZCO0FBSUg7QUFDSjs7QUFFRCxpQkFBSyxJQUFJLEdBQVQsSUFBZ0IsUUFBaEIsRUFBMEI7QUFDdEIsb0JBQUksQ0FBQyxTQUFTLGNBQVQsQ0FBd0IsR0FBeEIsQ0FBTCxFQUFtQzs7QUFFbkMsb0JBQUksTUFBTSxTQUFTLEdBQVQsQ0FBVjtBQUNBLHFCQUFLLElBQUksSUFBVCxJQUFpQixHQUFqQixFQUFzQjtBQUNsQjtBQUNBLHdCQUFHLENBQUMsSUFBSSxjQUFKLENBQW1CLElBQW5CLENBQUosRUFBOEI7O0FBRTlCLHdCQUFJLGdCQUFnQixJQUFJLElBQUosRUFBVSxTQUFWLENBQW9CLE1BQXhDO0FBQ0EseUJBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxhQUFwQixFQUFtQyxHQUFuQyxFQUF3Qzs7QUFFcEMsNEJBQUksU0FBUyxJQUFJLElBQUosRUFBVSxTQUFWLENBQW9CLENBQXBCLEVBQXVCLEtBQXZCLENBQTZCLEdBQTdCLENBQWI7QUFDQSw0QkFBSSxJQUFJLE9BQU8sQ0FBUCxDQUFSO0FBQ0EsNEJBQUksSUFBSSxPQUFPLENBQVAsQ0FBUjs7QUFFQSw2QkFBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixPQUFyQixHQUErQixLQUEvQjtBQUNBLDZCQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLFFBQXJCLEdBQWdDLEtBQWhDO0FBQ0EsNkJBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsSUFBckIsR0FBNEIsSUFBSSxJQUFKLEVBQVUsSUFBdEM7QUFDQSw0QkFBSSxJQUFJLENBQVIsRUFBVztBQUNQLGlDQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLEtBQXJCLEdBQTZCLENBQTdCO0FBQ0gseUJBRkQsTUFFTyxJQUFJLElBQUksRUFBUixFQUFZO0FBQ2YsaUNBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsS0FBckIsR0FBNkIsQ0FBN0I7QUFDSDs7QUFFRCw0QkFBSSxPQUFPLEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FBUCxJQUErQixXQUFuQyxFQUNJLEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsSUFBckIsR0FBNEIsSUFBSSxJQUFKLEVBQVUsSUFBdEMsQ0FESixLQUdJLFFBQVEsR0FBUixDQUFZLElBQUksR0FBSixHQUFVLENBQVYsR0FBYyxhQUExQjs7QUFFSiw0QkFBSSxPQUFPLElBQUksSUFBSixFQUFVLFVBQWpCLElBQStCLFdBQW5DLEVBQWdEO0FBQzVDLGlDQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLFVBQXJCLEdBQWtDLElBQUksSUFBSixFQUFVLFVBQTVDO0FBQ0g7QUFDSjtBQUNKO0FBRUo7QUFDSjs7O2dDQUVPLEMsRUFBRyxDLEVBQUc7QUFDVixtQkFBTyxLQUFLLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBQVA7QUFDSDs7O3lDQUVnQjtBQUNiLGdCQUFJLGlCQUFpQixLQUFLLFlBQUwsQ0FBa0IsWUFBbEIsRUFBckI7QUFDQSxnQkFBSSxjQUFjLEVBQWxCO0FBQ0EsZ0JBQUksYUFBYSxFQUFqQjs7QUFFQSxpQkFBSyxJQUFJLENBQVQsSUFBYyxjQUFkLEVBQThCO0FBQzFCLDZCQUFhLEtBQUssYUFBTCxDQUFtQixlQUFlLENBQWYsQ0FBbkIsRUFBc0MsS0FBSyxnQkFBM0MsRUFBNkQsRUFBQyxHQUFFLGVBQWUsQ0FBZixFQUFrQixDQUFyQixFQUF3QixHQUFFLGVBQWUsQ0FBZixFQUFrQixDQUE1QyxFQUE3RCxDQUFiO0FBQ0Esb0JBQUksV0FBVyxNQUFYLEdBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCLGdDQUFZLElBQVosQ0FBaUIsRUFBQyxNQUFLLGVBQWUsQ0FBZixFQUFrQixJQUF4QixFQUE2QixRQUFPLEVBQUMsR0FBRSxlQUFlLENBQWYsRUFBa0IsQ0FBckIsRUFBdUIsR0FBRSxlQUFlLENBQWYsRUFBa0IsQ0FBM0MsRUFBcEMsRUFBbUYsTUFBSyxlQUFlLENBQWYsRUFBa0IsSUFBMUcsRUFBZ0gsT0FBTSxVQUF0SCxFQUFqQjtBQUNIO0FBQ0o7QUFDRCxtQkFBTyxXQUFQO0FBQ0g7Ozs4Q0FFcUIsVyxFQUFZLFMsRUFBVztBQUN6QyxnQkFBSSxNQUFJLEVBQUMsT0FBTSxFQUFDLEdBQUUsQ0FBSCxFQUFLLEdBQUUsQ0FBQyxDQUFSLEVBQVAsRUFBa0IsTUFBSyxFQUFDLEdBQUUsQ0FBSCxFQUFLLEdBQUUsQ0FBUCxFQUF2QixFQUFpQyxPQUFNLEVBQUMsR0FBRSxDQUFILEVBQUssR0FBRSxDQUFQLEVBQXZDLEVBQWlELE1BQUssRUFBQyxHQUFFLENBQUMsQ0FBSixFQUFNLEdBQUUsQ0FBUixFQUF0RCxFQUFSOztBQUVBLGdCQUFJLE1BQU0sRUFBQyxHQUFHLFNBQVMsWUFBWSxDQUFyQixJQUEwQixTQUFTLElBQUksU0FBSixFQUFlLENBQXhCLENBQTlCLEVBQTJELEdBQUcsU0FBUyxZQUFZLENBQXJCLElBQTBCLFNBQVMsSUFBSSxTQUFKLEVBQWUsQ0FBeEIsQ0FBeEYsRUFBVjtBQUNBLGdCQUFHLElBQUksQ0FBSixHQUFRLENBQVIsSUFBYSxJQUFJLENBQUosR0FBUSxFQUFyQixJQUEwQixJQUFJLENBQUosR0FBUSxDQUFsQyxJQUF1QyxJQUFJLENBQUosR0FBUSxFQUFsRCxFQUNJLE9BQU8sS0FBUCxDQURKLEtBR0ksT0FBTyxFQUFDLEdBQUcsU0FBUyxZQUFZLENBQXJCLElBQTBCLFNBQVMsSUFBSSxTQUFKLEVBQWUsQ0FBeEIsQ0FBOUIsRUFBMkQsR0FBRyxTQUFTLFlBQVksQ0FBckIsSUFBMEIsU0FBUyxJQUFJLFNBQUosRUFBZSxDQUF4QixDQUF4RixFQUFQO0FBQ1A7OztzQ0FFYSxhLEVBQWUsSyxFQUFPLFksRUFBYyxhLEVBQWM7QUFDNUQsZ0JBQUksUUFBUSxDQUFaLEVBQWU7QUFDWCx3QkFBUSxLQUFSLENBQWMsMERBQWQ7QUFDQSx1QkFBTyxLQUFQO0FBQ0g7QUFDRCxnQkFBSSxhQUFhLEVBQWpCO0FBQ0EsZ0JBQUksY0FBYyxFQUFsQjtBQUNBLGdCQUFJLGtCQUFrQixJQUF0QjtBQUNBLGdCQUFJLGtCQUFrQixJQUF0QjtBQUNBO0FBQ0E7O0FBRUEsZ0JBQUksT0FBTyxhQUFQLEtBQXlCLFdBQTdCLEVBQTBDO0FBQ3RDLG9CQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsS0FBSyxZQUFuQixDQUFaO0FBQ0Esb0JBQUksU0FBUyxLQUFiOztBQUVBLHFCQUFLLElBQUksQ0FBVCxJQUFjLEtBQWQsRUFBcUI7QUFDakIsd0JBQUksTUFBTSxDQUFOLEVBQVMsQ0FBVCxJQUFjLGFBQWEsQ0FBM0IsSUFBZ0MsTUFBTSxDQUFOLEVBQVMsQ0FBVCxJQUFjLGFBQWEsQ0FBL0QsRUFBa0U7QUFDOUQsaUNBQVMsSUFBVDtBQUNIO0FBQ0o7O0FBRUQsb0JBQUksV0FBVyxJQUFmLEVBQXFCO0FBQ2pCLHlCQUFLLElBQUksQ0FBVCxJQUFjLEtBQWQsRUFBcUI7QUFDakIsNEJBQUksYUFBYSxDQUFiLElBQWtCLE1BQU0sQ0FBTixFQUFTLENBQTNCLElBQWdDLGFBQWEsQ0FBYixJQUFrQixNQUFNLENBQU4sRUFBUyxDQUEvRCxFQUFrRTtBQUFFO0FBQVcseUJBRDlELENBQytEO0FBQ2hGLDRCQUFJLEtBQUssU0FBTCxDQUFlLE1BQU0sQ0FBTixFQUFTLENBQXhCLEVBQTJCLE1BQU0sQ0FBTixFQUFTLENBQXBDLEVBQXVDLFFBQXZDLEtBQW9ELElBQXhELEVBQThEO0FBQUU7QUFBVyx5QkFGMUQsQ0FFMkQ7QUFDNUUsNEJBQUksUUFBUSxDQUFaLEVBQWU7QUFDWCwwQ0FBYyxZQUFZLE1BQVosQ0FBbUIsS0FBSyxhQUFMLENBQW1CLGFBQW5CLEVBQWtDLEtBQWxDLEVBQXlDLEVBQUMsR0FBRSxNQUFNLENBQU4sRUFBUyxDQUFaLEVBQWUsR0FBRSxNQUFNLENBQU4sRUFBUyxDQUExQixFQUF6QyxFQUF1RSxZQUF2RSxDQUFuQixDQUFkO0FBQ0gseUJBRkQsTUFFTztBQUNILHdDQUFZLElBQVosQ0FBaUIsTUFBTSxDQUFOLENBQWpCO0FBQ0g7QUFDRCw2QkFBSyxJQUFJLENBQVQsSUFBYyxXQUFkLEVBQTJCO0FBQ3ZCLGdDQUFHLFlBQVksQ0FBWixFQUFlLENBQWYsS0FBcUIsYUFBYSxDQUFsQyxJQUF1QyxZQUFZLENBQVosRUFBZSxDQUFmLEtBQXFCLGFBQWEsQ0FBNUUsRUFDSSxXQUFXLElBQVgsQ0FBZ0IsWUFBWSxDQUFaLENBQWhCO0FBQ1A7QUFDSjtBQUNKO0FBQ0o7O0FBRUQsaUJBQUssSUFBSSxTQUFULElBQXNCLEtBQUssYUFBM0IsRUFBMEM7QUFDdEMsa0NBQWtCLEtBQUsscUJBQUwsQ0FBMkIsWUFBM0IsRUFBeUMsU0FBekMsQ0FBbEI7QUFDQSxvQkFBRyxvQkFBb0IsS0FBdkIsRUFBOEI7QUFBRTtBQUFXOztBQUUzQyxrQ0FBa0IsS0FBSyxTQUFMLENBQWUsZ0JBQWdCLENBQS9CLEVBQWtDLGdCQUFnQixDQUFsRCxDQUFsQjs7QUFFQSxvQkFBSSxnQkFBZ0IsT0FBaEIsS0FBNEIsSUFBaEMsRUFBc0M7QUFBRTtBQUFXO0FBQ25ELG9CQUFJLGdCQUFnQixJQUFoQixLQUF5QixPQUE3QixFQUFzQztBQUFFO0FBQVc7QUFDbkQsb0JBQUksS0FBSyxTQUFMLENBQWUsS0FBSyxhQUFMLENBQW1CLFNBQW5CLENBQWYsRUFBOEMsWUFBOUMsTUFBZ0UsS0FBcEUsRUFBMkU7QUFBRTtBQUFXOztBQUV4RixvQkFBSSxPQUFPLGFBQVAsS0FBeUIsV0FBMUIsSUFBNEMsT0FBTyxhQUFQLEtBQXlCLFdBQTFCLElBQTJDLEtBQUssU0FBTCxDQUFlLGVBQWYsTUFBb0MsS0FBSyxTQUFMLENBQWUsYUFBZixDQUE3SCxFQUErSjtBQUMzSjtBQUNBLHdCQUFJLFVBQVUsQ0FBZCxFQUFnQjtBQUNaLDRCQUFHLGdCQUFnQixRQUFoQixLQUE2QixLQUFoQyxFQUF1QztBQUNuQyx1Q0FBVyxJQUFYLENBQWdCLGVBQWhCO0FBQ0g7QUFDSixxQkFKRCxNQUtLO0FBQ0Qsc0NBQWMsWUFBWSxNQUFaLENBQW1CLEtBQUssYUFBTCxDQUFtQixhQUFuQixFQUFrQyxLQUFsQyxFQUF5QyxlQUF6QyxFQUEwRCxZQUExRCxDQUFuQixDQUFkO0FBQ0EsNkJBQUksSUFBSSxLQUFSLElBQWlCLFdBQWpCLEVBQThCO0FBQzFCLGdDQUFHLFlBQVksS0FBWixFQUFtQixDQUFuQixLQUF5QixhQUFhLENBQXRDLElBQTJDLFlBQVksS0FBWixFQUFtQixDQUFuQixLQUF5QixhQUFhLENBQXBGLEVBQ0ksV0FBVyxJQUFYLENBQWdCLFlBQVksS0FBWixDQUFoQjtBQUNQO0FBQ0o7QUFDSjtBQUNKO0FBQ0QsbUJBQU8sVUFBUDtBQUNIOzs7a0NBRVMsUyxFQUFXLGlCLEVBQW1CO0FBQ3BDLGlCQUFLLFFBQUwsR0FBZ0IsUUFBUSw0QkFBUixDQUFoQjs7QUFFQSxvQkFBUSxTQUFSO0FBQ0kscUJBQUssS0FBSyxhQUFMLENBQW1CLEtBQXhCO0FBQStCO0FBQzNCLHdCQUFJLFNBQVMsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixrQkFBa0IsQ0FBckMsRUFBd0Msa0JBQWtCLENBQTFELElBQTZELEtBQUssYUFBTCxDQUFtQixLQUF6RixNQUFvRyxDQUF4RyxFQUEyRztBQUN2RywrQkFBTyxJQUFQO0FBQ0g7QUFDRCwyQkFBTyxLQUFQO0FBQ0oscUJBQUssS0FBSyxhQUFMLENBQW1CLEtBQXhCO0FBQStCO0FBQzNCLHdCQUFJLFNBQVMsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixrQkFBa0IsQ0FBckMsRUFBd0Msa0JBQWtCLENBQTFELElBQTZELEtBQUssYUFBTCxDQUFtQixLQUF6RixNQUFvRyxDQUF4RyxFQUEyRztBQUN2RywrQkFBTyxJQUFQO0FBQ0g7QUFDRCwyQkFBTyxLQUFQO0FBQ0oscUJBQUssS0FBSyxhQUFMLENBQW1CLElBQXhCO0FBQThCO0FBQzFCLHdCQUFJLFNBQVMsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixrQkFBa0IsQ0FBckMsRUFBd0Msa0JBQWtCLENBQTFELElBQTZELEtBQUssYUFBTCxDQUFtQixJQUF6RixNQUFtRyxDQUF2RyxFQUEwRztBQUN0RywrQkFBTyxJQUFQO0FBQ0g7QUFDRCwyQkFBTyxLQUFQO0FBQ0oscUJBQUssS0FBSyxhQUFMLENBQW1CLElBQXhCO0FBQThCO0FBQzFCLHdCQUFJLFNBQVMsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixrQkFBa0IsQ0FBckMsRUFBd0Msa0JBQWtCLENBQTFELElBQTZELEtBQUssYUFBTCxDQUFtQixJQUF6RixNQUFtRyxDQUF2RyxFQUEwRztBQUN0RywrQkFBTyxJQUFQO0FBQ0g7QUFDRCwyQkFBTyxLQUFQO0FBQ0o7QUFDSSwyQkFBTyxLQUFQO0FBdEJSO0FBeUJIOzs7aUNBRVEsSSxFQUFNO0FBQ1gsZ0JBQUcsS0FBSyxTQUFMLElBQWtCLEtBQUssYUFBTCxDQUFtQixJQUFyQyxJQUE2QyxLQUFLLFNBQUwsSUFBa0IsS0FBSyxhQUFMLENBQW1CLElBQWxGLElBQTBGLEtBQUssWUFBTCxDQUFrQixRQUFsQixJQUE4QixLQUFLLFFBQWhJLEVBQTBJO0FBQ3RJLHFCQUFLLGdCQUFMLEdBQXdCLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFnQixDQUEzQixJQUFnQyxDQUF4RDtBQUNBLHFCQUFLLFlBQUwsQ0FBa0Isa0JBQWxCLEdBQXVDLEtBQUssY0FBTCxFQUF2Qzs7QUFFQTtBQUNBLHFCQUFLLElBQUwsQ0FBVSxRQUFWLEVBQW9CLEVBQUMsVUFBUyxZQUFWLEVBQXdCLFNBQVMsRUFBQyxPQUFNLEtBQUssZ0JBQVosRUFBOEIsWUFBVyxLQUFLLFlBQUwsQ0FBa0Isa0JBQTNELEVBQWpDLEVBQXBCLEVBQXNJLEtBQUssUUFBM0k7QUFDQSxxQkFBSyxTQUFMO0FBQ0g7QUFDSjs7OzRCQUVHLEksRUFBTTtBQUNOLGdCQUFHLE9BQU8sS0FBSyxRQUFaLElBQXlCLFdBQTVCLEVBQXlDO0FBQ3JDLHFCQUFLLElBQUwsQ0FBVSxVQUFWLEVBQXNCLEVBQUMsU0FBUSxLQUFLLEtBQUssUUFBVixDQUFULEVBQXRCLEVBQXFELEtBQUssUUFBMUQ7QUFDSDtBQUNKOzs7NkJBRUksRyxFQUFLLEksRUFBTSxRLEVBQVU7O0FBRXRCLGdCQUFHLE9BQU8sUUFBUCxJQUFvQixXQUF2QixFQUFvQztBQUNoQyx3QkFBUSxLQUFSLENBQWMseUNBQWQ7QUFDQSxxQkFBSyxTQUFMLENBQWUsR0FBZixFQUFvQixJQUFwQjtBQUNBO0FBQ0gsYUFKRCxNQUlPO0FBQ0gscUJBQUssRUFBTCxDQUFRLE9BQVIsQ0FBZ0IsU0FBaEIsQ0FBMEIsUUFBMUIsRUFBb0MsSUFBcEMsQ0FBeUMsR0FBekMsRUFBOEMsSUFBOUM7QUFDSDtBQUNKOzs7a0NBRVMsRyxFQUFLLEksRUFBTTtBQUNqQixpQkFBSyxJQUFJLENBQVQsSUFBYyxLQUFLLFlBQW5CLEVBQWlDO0FBQzdCLHdCQUFRLEdBQVIsQ0FBWSxNQUFNLE1BQU4sR0FBZSxJQUFmLEdBQXNCLE1BQXRCLEdBQWdDLEtBQUssWUFBTCxDQUFrQixDQUFsQixFQUFxQixRQUFqRTtBQUNBLHFCQUFLLElBQUwsQ0FBVSxHQUFWLEVBQWUsSUFBZixFQUFxQixLQUFLLFlBQUwsQ0FBa0IsQ0FBbEIsRUFBcUIsUUFBMUM7QUFDSDtBQUNKOzs7bUNBRVUsTSxFQUFRO0FBQ2YsaUJBQUssSUFBTCxDQUFVLFFBQVYsRUFBb0IsRUFBQyxVQUFVLFlBQVgsRUFBeUIsU0FBUyxFQUFDLElBQUksT0FBTyxFQUFaLEVBQWxDLEVBQXBCLEVBQXdFLE9BQU8sUUFBL0U7QUFDSDs7Ozs7O0FBSUwsT0FBTyxPQUFQLENBQWUsUUFBZixHQUEwQixRQUExQjs7Ozs7Ozs7Ozs7QUN4Z0NBOzs7Ozs7Ozs7Ozs7SUFFTSxJOzs7QUFFSixrQkFBYztBQUFBOztBQUFBO0FBRWI7Ozs7OEJBRVM7QUFDUixXQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFdBQWhCLEVBQTZCLHNCQUE3QjtBQUNEOzs7NkJBRVE7QUFDUCxXQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFdBQWhCLEdBQThCLENBQTlCO0FBQ0EsV0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLGNBQWYsR0FBZ0MsSUFBaEM7QUFDQSxXQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLHFCQUFoQixHQUF3QyxJQUF4QztBQUNFLFdBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsU0FBaEIsR0FBNEIsT0FBTyxZQUFQLENBQW9CLE1BQWhEO0FBQ0Y7QUFDQSxVQUFJLENBQUMsS0FBSyxJQUFMLENBQVUsTUFBVixDQUFpQixPQUF0QixFQUErQjtBQUM3QixhQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLGNBQWhCLEdBQWlDLElBQWpDO0FBQ0EsYUFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixTQUFoQixHQUE0QixPQUFPLFlBQVAsQ0FBb0IsTUFBaEQ7QUFDQSxhQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFFBQWhCLEdBQTRCLEdBQTVCO0FBQ0EsYUFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixTQUFoQixHQUE0QixHQUE1QjtBQUNBLGFBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsZ0JBQWhCLENBQWlDLElBQWpDO0FBQ0Q7O0FBRUQsV0FBSyxtQkFBTDs7QUFFQSxXQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLEtBQWhCLENBQXNCLFdBQXRCO0FBQ0Q7OzswQ0FFb0I7QUFDbkIsV0FBSyxJQUFMLENBQVUsTUFBVixHQUFtQjtBQUNqQixlQUFPLENBRFU7QUFFakIsc0JBQWM7QUFGRyxPQUFuQjtBQUlEOzs7O0VBbENnQixPQUFPLEs7O2tCQXNDWCxJOzs7Ozs7Ozs7OztBQ3hDZjs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxJOzs7QUFFSixvQkFBYztBQUFBOztBQUFBO0FBRWI7Ozs7aUNBRVE7O0FBRVA7QUFDQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQix1QkFBaEIsR0FBMEMsSUFBMUM7O0FBRUEsaUJBQUssSUFBTCxDQUFVLFVBQVYsR0FBdUIsS0FBSyxJQUFMLENBQVUsR0FBVixDQUFjLEtBQWQsRUFBdkI7QUFDQSxpQkFBSyxJQUFMLENBQVUsUUFBVixHQUFxQixLQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsS0FBZCxFQUFyQjs7QUFFQSxpQkFBSyxJQUFMLENBQVUsS0FBVixHQUFrQixJQUFJLFNBQUosQ0FBYyxLQUFLLElBQW5CLENBQWxCO0FBQ0EsaUJBQUssWUFBTDs7QUFFQSxpQkFBSyxVQUFMLEdBQWtCLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxNQUFkLENBQXFCLENBQXJCLEVBQXVCLENBQXZCLEVBQXlCLFlBQXpCLENBQWxCO0FBQ0EsaUJBQUssVUFBTCxDQUFnQixNQUFoQixDQUF1QixLQUF2QixDQUE2QixHQUE3QixFQUFpQyxHQUFqQztBQUNBLGlCQUFLLElBQUwsQ0FBVSxVQUFWLENBQXFCLE9BQXJCLEdBQStCLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsT0FBL0M7QUFDQSxpQkFBSyxJQUFMLENBQVUsVUFBVixDQUFxQixPQUFyQixHQUErQixLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE9BQS9DOztBQUVBLGlCQUFLLElBQUwsQ0FBVSxLQUFWLEdBQWtCLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxNQUFkLENBQXFCLENBQXJCLEVBQXVCLENBQXZCLEVBQXlCLFFBQXpCLENBQWxCOztBQUVBLGlCQUFLLElBQUwsQ0FBVSxJQUFWLEdBQWlCLElBQUksY0FBSixDQUFTLEtBQUssSUFBZCxFQUFvQixFQUFwQixFQUF3QixFQUF4QixDQUFqQjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsS0FBZixDQUFxQixLQUFyQixDQUEyQixJQUEzQjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxPQUFWLEdBQW9CLElBQUksaUJBQUosQ0FBWSxLQUFLLElBQWpCLEVBQXVCLEVBQXZCLEVBQTBCLEVBQTFCLENBQXBCO0FBQ0EsaUJBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsS0FBbEIsQ0FBd0IsS0FBeEIsQ0FBOEIsSUFBOUI7O0FBRUEsaUJBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxRQUFkLENBQXVCLEtBQUssSUFBTCxDQUFVLElBQWpDO0FBQ0EsaUJBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxRQUFkLENBQXVCLEtBQUssSUFBTCxDQUFVLE9BQWpDOztBQUVBLGlCQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLEdBQW5CLENBQXVCLEtBQUssSUFBTCxDQUFVLEtBQWpDO0FBQ0EsaUJBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsR0FBbkIsQ0FBdUIsS0FBSyxJQUFMLENBQVUsSUFBakM7QUFDQSxpQkFBSyxJQUFMLENBQVUsUUFBVixDQUFtQixHQUFuQixDQUF1QixLQUFLLElBQUwsQ0FBVSxPQUFqQztBQUNBLGlCQUFLLElBQUwsQ0FBVSxVQUFWLENBQXFCLEdBQXJCLENBQXlCLEtBQUssVUFBOUI7O0FBRUEsaUJBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsZUFBbkIsQ0FBbUMsRUFBbkMsRUFBdUMsRUFBdkMsRUFBMkMsRUFBQyxHQUFFLElBQUUsS0FBSyxVQUFMLENBQWdCLEtBQWhCLEdBQXNCLENBQTNCLEVBQThCLEdBQUUsSUFBRSxLQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsR0FBdUIsQ0FBekQsRUFBM0M7O0FBR0EsaUJBQUssWUFBTDtBQUVEOzs7dUNBR2M7QUFDWCxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixXQUFoQixDQUNFO0FBQ0Esc0JBQU0sVUFETjtBQUVBLG1DQUFtQixLQUZuQjtBQUdBLG1DQUFtQixLQUhuQjtBQUlBLDBCQUFVLENBQUM7QUFDUCwwQkFBTSxVQURDO0FBRVAsa0NBQWMsVUFGUDtBQUdQLGtDQUFjLEdBSFA7QUFJUCxtQ0FBZSxHQUpSO0FBS1AsbUNBQWU7QUFMUixpQkFBRCxFQU1QO0FBQ0MsMEJBQU0sTUFEUDtBQUVDLDZCQUFTLHlDQUZWO0FBR0MsZ0NBQVksY0FIYjtBQUlDLDhCQUFVLEVBSlg7QUFLQywyQkFBTyxVQUxSO0FBTUMsNkJBQVMsQ0FBQztBQU5YLGlCQU5PLEVBYVA7QUFDQywwQkFBTSxPQURQO0FBRUMsNkJBQVMsVUFGVjtBQUdDLDZCQUFTLEdBSFY7QUFJQyw2QkFBUyxDQUFDLEVBSlg7QUFLQyxrQ0FBYyxHQUxmO0FBTUMsOEJBQVUsb0JBQVk7QUFDbEIsNkJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsU0FBaEIsQ0FBMEIsVUFBMUI7QUFDQSw2QkFBSyxJQUFMLENBQVUsTUFBVixDQUFpQixTQUFqQixDQUEyQixFQUFDLE9BQU0sZ0JBQVAsRUFBeUIsT0FBTSxPQUEvQixFQUEzQjtBQUNIO0FBVEYsaUJBYk8sRUF1QlA7QUFDQywwQkFBTSxPQURQO0FBRUMsNkJBQVMsU0FGVjtBQUdDLDZCQUFTLEdBSFY7QUFJQyw2QkFBUyxFQUpWO0FBS0Msa0NBQWMsR0FMZjtBQU1DLDhCQUFVLG9CQUFZO0FBQ2xCLDZCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFNBQWhCLENBQTBCLFVBQTFCO0FBQ0EsNkJBQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsU0FBakIsQ0FBMkIsRUFBQyxPQUFNLGdCQUFQLEVBQXlCLE9BQU0sT0FBL0IsRUFBM0I7QUFDSDtBQVRGLGlCQXZCTztBQUpWLGFBREY7QUF3Q0g7Ozt1Q0FFYzs7QUFFYixnQkFBSSxRQUFRLE9BQU8sVUFBUCxHQUFrQixLQUFLLFVBQUwsQ0FBZ0IsTUFBOUM7QUFDQSxnQkFBRyxRQUFRLEdBQVgsRUFBZ0I7QUFDWix3QkFBUSxHQUFSO0FBQ0g7O0FBRUQsaUJBQUssSUFBTCxDQUFVLFVBQVYsQ0FBcUIsS0FBckIsQ0FBMkIsS0FBM0IsQ0FBaUMsS0FBakM7QUFDQSxpQkFBSyxJQUFMLENBQVUsVUFBVixDQUFxQixDQUFyQixHQUF5QixLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE9BQXpDOztBQUVBLGdCQUFHLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsTUFBbkIsQ0FBMEIsRUFBMUIsSUFBZ0MsQ0FBbkMsRUFBc0M7QUFDbEMscUJBQUssSUFBTCxDQUFVLFVBQVYsQ0FBcUIsS0FBckIsR0FBNkIsQ0FBQyxFQUE5QjtBQUNBO0FBQ0E7QUFDQSxxQkFBSyxJQUFMLENBQVUsVUFBVixDQUFxQixDQUFyQixHQUF5QixLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE9BQWhCLEdBQTBCLENBQUUsS0FBSyxVQUFMLENBQWdCLEtBQWhCLEdBQXNCLEtBQXZCLEdBQThCLE9BQU8sV0FBdEMsSUFBbUQsQ0FBdEcsQ0FKa0MsQ0FJdUU7QUFDNUcsYUFMRCxNQUtPO0FBQ0gscUJBQUssSUFBTCxDQUFVLFVBQVYsQ0FBcUIsS0FBckIsR0FBNkIsRUFBN0I7QUFDQTtBQUNBO0FBQ0EscUJBQUssSUFBTCxDQUFVLFVBQVYsQ0FBcUIsQ0FBckIsR0FBeUIsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixPQUFoQixHQUEwQixDQUFFLEtBQUssVUFBTCxDQUFnQixLQUFoQixHQUFzQixLQUF2QixHQUE4QixPQUFPLFdBQXRDLElBQW1ELENBQXRHLENBSkcsQ0FJc0c7QUFDNUc7QUFFRjs7O2lDQUdRO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0Q7OztpQ0FFUztBQUNOLGlCQUFLLFlBQUw7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDRDs7OzJDQUVnQjtBQUNqQixnQkFBRyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLFlBQW5CLEVBQWlDO0FBQzdCLHFCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLGNBQWhCO0FBQ0gsYUFGRCxNQUVPO0FBQ0gscUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsZUFBaEIsQ0FBZ0MsS0FBaEM7QUFDSDtBQUNGOzs7O0VBN0tnQixPQUFPLEs7O2tCQWdMWCxJOzs7Ozs7Ozs7Ozs7Ozs7OztJQ25MVCxJOzs7QUFFSixrQkFBYztBQUFBOztBQUFBO0FBRWI7Ozs7NkJBRVE7QUFDUDtBQUNBLFdBQUssVUFBTCxHQUFrQixLQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsTUFBZCxDQUFxQixDQUFyQixFQUF1QixDQUF2QixFQUF5QixZQUF6QixDQUFsQjtBQUNBLFdBQUssT0FBTCxHQUFlLEtBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixLQUF4QixHQUFnQyxLQUFLLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBd0IsTUFBdkU7QUFDQSxXQUFLLFVBQUwsR0FBa0IsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixLQUFoQixHQUF3QixLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE1BQTFEO0FBQ0EsVUFBSyxDQUFDLEtBQUssVUFBTCxHQUFrQixLQUFLLE9BQXhCLElBQW1DLENBQW5DLEdBQXVDLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsS0FBeEQsR0FBaUUsQ0FBckUsRUFBd0U7QUFDcEUsYUFBSyxVQUFMLENBQWdCLEtBQWhCLEdBQXdCLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsTUFBaEIsR0FBdUIsS0FBSyxVQUFMLENBQWdCLE9BQWhCLENBQXdCLE1BQS9DLEdBQXNELEtBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixLQUF0RztBQUNBLGFBQUssVUFBTCxDQUFnQixNQUFoQixHQUF5QixLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE1BQXpDO0FBQ0EsYUFBSyxVQUFMLENBQWdCLENBQWhCLEdBQW9CLENBQUMsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixLQUFoQixHQUF3QixLQUFLLFVBQUwsQ0FBZ0IsS0FBekMsSUFBa0QsQ0FBdEU7QUFDSCxPQUpELE1BSU87QUFDSCxhQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsR0FBd0IsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixLQUF4QztBQUNBLGFBQUssVUFBTCxDQUFnQixNQUFoQixHQUF5QixLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLEtBQWhCLEdBQXNCLEtBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixLQUE5QyxHQUFvRCxLQUFLLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBd0IsTUFBckc7QUFDQSxhQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsR0FBb0IsQ0FBQyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE1BQWhCLEdBQXlCLEtBQUssVUFBTCxDQUFnQixNQUExQyxJQUFvRCxDQUF4RTtBQUNIOztBQUVEO0FBQ0EsV0FBSyxZQUFMLEdBQW9CLEtBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE9BQTlCLEVBQXNDLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsT0FBdEQsRUFBK0QsYUFBVyxLQUFLLElBQUwsQ0FBVSxNQUFWLENBQWlCLEtBQTNGLEVBQWtHO0FBQ3BILGNBQU0sWUFEOEcsRUFDaEcsTUFBTSxTQUQwRixFQUMvRSxPQUFPO0FBRHdFLE9BQWxHLENBQXBCO0FBR0EsV0FBSyxZQUFMLENBQWtCLE1BQWxCLENBQXlCLEdBQXpCLENBQTZCLEdBQTdCOztBQUVBLFdBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsR0FBbEIsQ0FBc0IsS0FBSyxXQUEzQixFQUF3QyxJQUF4Qzs7QUFFQTtBQUNBLFdBQUssc0JBQUwsR0FBOEIsS0FBOUI7QUFDQSxXQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsTUFBZixDQUFzQixHQUF0QixDQUEwQixPQUFPLEtBQVAsQ0FBYSxNQUFiLEdBQXNCLEdBQWhELEVBQXFELFlBQVU7QUFBRSxhQUFLLHNCQUFMLEdBQThCLElBQTlCO0FBQXFDLE9BQXRHLEVBQXdHLElBQXhHOztBQUVBLFdBQUssc0JBQUw7QUFDQSxXQUFLLG9CQUFMO0FBQ0Q7Ozs2Q0FFdUI7QUFDdEIsVUFBSSxNQUFNLGFBQWEsUUFBYixJQUF5QixDQUFuQyxDQURzQixDQUNnQjtBQUN0QyxVQUFJLEtBQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsS0FBakIsR0FBeUIsR0FBN0IsRUFBaUM7QUFBRSxxQkFBYSxRQUFiLEdBQXdCLEtBQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsS0FBekM7QUFBaUQ7QUFDckY7OzsyQ0FFcUI7QUFDcEIsV0FBSyxJQUFMLENBQVUsTUFBVixDQUFpQixLQUFqQixHQUF5QixDQUF6QjtBQUNEOzs7NkJBQ1EsQ0FBRTs7O2tDQUVJO0FBQ2IsVUFBRyxLQUFLLHNCQUFSLEVBQStCO0FBQzdCLGFBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsS0FBaEIsQ0FBc0IsTUFBdEI7QUFDRDtBQUNGOzs7O0VBbkRnQixPQUFPLEs7O2tCQXVEWCxJOzs7Ozs7Ozs7Ozs7Ozs7OztJQ3ZEVCxTOzs7QUFFSix1QkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUssS0FBTCxHQUFhLElBQWI7QUFDQSxVQUFLLEtBQUwsR0FBYSxLQUFiO0FBSFk7QUFJYjs7Ozs4QkFFUztBQUNSO0FBQ0EsV0FBSyxLQUFMLEdBQWEsS0FBSyxHQUFMLENBQVMsTUFBVCxDQUFnQixLQUFLLElBQUwsQ0FBVSxLQUFWLEdBQWtCLEdBQWxCLEdBQXdCLEdBQXhDLEVBQTZDLEtBQUssSUFBTCxDQUFVLE1BQVYsR0FBbUIsR0FBbkIsR0FBeUIsRUFBdEUsRUFBMEUsV0FBMUUsQ0FBYjtBQUNBLFdBQUssSUFBTCxDQUFVLGdCQUFWLENBQTJCLEtBQUssS0FBaEM7O0FBRUE7QUFDQSxXQUFLLElBQUwsQ0FBVSxjQUFWLENBQXlCLE9BQXpCLENBQWlDLEtBQUssY0FBdEMsRUFBc0QsSUFBdEQ7QUFDQSxXQUFLLGFBQUw7QUFDRDs7O29DQUVlOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxNQUFmLENBQXNCLE1BQXRCLEVBQThCLHFFQUE5Qjs7QUFHQTtBQUNBLFdBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxJQUFmLENBQW9CLFlBQXBCLEVBQWtDLHdCQUFsQztBQUNBLFdBQUssSUFBTCxDQUFVLElBQVYsQ0FBZSxJQUFmLENBQW9CLFVBQXBCLEVBQWdDLHNCQUFoQzs7QUFFQTtBQUNBO0FBQ0EsV0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLEtBQWYsQ0FBcUIsWUFBckIsRUFBa0MseUJBQWxDO0FBQ0EsV0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLFdBQWYsQ0FBMkIsTUFBM0IsRUFBa0MsaUJBQWxDLEVBQXFELEdBQXJELEVBQTBELEdBQTFELEVBQStELEVBQS9EO0FBQ0EsV0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLEtBQWYsQ0FBcUIsUUFBckIsRUFBOEIsbUJBQTlCOztBQUVBO0FBQ0EsV0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLEtBQWYsQ0FBcUIsVUFBckIsRUFBZ0MscUJBQWhDO0FBQ0EsV0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLEtBQWYsQ0FBcUIsU0FBckIsRUFBK0Isb0JBQS9CO0FBQ0EsV0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLEtBQWYsQ0FBcUIsU0FBckIsRUFBK0Isb0JBQS9COztBQUVBO0FBQ0EsV0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLFdBQWYsQ0FBMkIsT0FBM0IsRUFBb0Msa0JBQXBDLEVBQXdELEdBQXhELEVBQTZELEdBQTdEO0FBQ0EsV0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLFdBQWYsQ0FBMkIsVUFBM0IsRUFBdUMscUJBQXZDLEVBQTZELEdBQTdELEVBQWtFLEdBQWxFLEVBQXVFLENBQXZFO0FBQ0EsV0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLEtBQWYsQ0FBcUIsTUFBckIsRUFBNkIsaUJBQTdCLEVBQWdELGtCQUFoRCxFQUFvRSxPQUFPLE1BQVAsQ0FBYyx1QkFBbEY7O0FBRUE7O0FBRUE7QUFDQSxXQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsS0FBZixDQUFxQixTQUFyQixFQUFnQyxvQkFBaEM7QUFDQSxXQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsS0FBZixDQUFxQixZQUFyQixFQUFtQyx1QkFBbkM7O0FBRUE7O0FBRUE7QUFDQTtBQUNEOzs7cUNBRWdCO0FBQ2YsV0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixLQUFoQixDQUFzQixPQUF0QjtBQUNBO0FBQ0Q7Ozs7RUFoRXFCLE9BQU8sSzs7a0JBbUVoQixTOzs7Ozs7Ozs7OztBQ25FZjs7Ozs7Ozs7Ozs7O0lBRU0sVTs7O0FBRUosd0JBQWM7QUFBQTs7QUFBQTtBQUViOzs7OzZCQUVRO0FBQ1AsY0FBUSxHQUFSLENBQVksa0NBQVo7QUFDRDs7OztFQVJzQixPQUFPLEs7O2tCQVdqQixVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDYlQsSzs7O0FBRUoscUJBQWM7QUFBQTs7QUFBQTtBQUVkOzs7O2lDQUVTO0FBQ1AsaUJBQUssSUFBTCxDQUFVLElBQVYsR0FBaUIsTUFBakI7O0FBRUEsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsdUJBQWhCLEdBQTBDLElBQTFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsWUFBakI7QUFDQSxpQkFBSyxJQUFMLENBQVUsS0FBVixDQUFnQixLQUFoQixDQUFzQixNQUF0QjtBQUNBO0FBQ0E7QUFFSDs7O2lDQUVRLEksRUFBTTs7QUFFWCxnQkFBRyxRQUFPLElBQVAseUNBQU8sSUFBUCxPQUFpQixRQUFwQixFQUE4QjtBQUMxQixvQkFBSSxLQUFLLEtBQUwsQ0FBVyxJQUFYLEtBQW9CLE9BQXhCLEVBQWlDO0FBQzdCLHlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLEtBQWhCLENBQXNCLE1BQXRCO0FBQ0E7QUFDSCxpQkFIRCxNQUdPLElBQUksS0FBSyxLQUFMLENBQVcsSUFBWCxLQUFvQixXQUF4QixFQUFxQztBQUN4Qyx5QkFBSyxJQUFMLENBQVUsSUFBVixHQUFpQixLQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsU0FBZixDQUF5QixDQUF6QixFQUE0QixLQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsTUFBZixHQUF3QixDQUFwRCxDQUFqQjtBQUNIO0FBQ0osYUFQRCxNQU9PO0FBQ0gsb0JBQUksUUFBUSxHQUFaLEVBQWlCO0FBQ2IsMkJBQU8sR0FBUDtBQUNIO0FBQ0QscUJBQUssSUFBTCxDQUFVLElBQVYsSUFBa0IsSUFBbEI7QUFDSDtBQUNELGlCQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLGdCQUFoQixDQUFpQyxLQUFLLElBQUwsQ0FBVSxJQUEzQyxFQUFpRCxVQUFqRCxFQUE2RCxDQUE3RDtBQUNIOzs7dUNBRWdCOztBQUViO0FBQ0EsaUJBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsV0FBaEIsQ0FDSTtBQUNBLHNCQUFNLFVBRE47QUFFQSxtQ0FBbUIsSUFGbkI7QUFHQSxtQ0FBbUIsSUFIbkI7QUFJQSwwQkFBVSxDQUFDO0FBQ1AsMEJBQU0sVUFEQztBQUVQLGtDQUFjLFVBRlA7QUFHUCxrQ0FBYyxHQUhQO0FBSVAsbUNBQWUsR0FKUjtBQUtQLG1DQUFlO0FBTFIsaUJBQUQsRUFNUDtBQUNDLDBCQUFNLE1BRFA7QUFFQyw2QkFBUyw4REFGVjtBQUdDLGdDQUFZLGNBSGI7QUFJQyw4QkFBVSxFQUpYO0FBS0MsMkJBQU8sVUFMUjtBQU1DLDZCQUFTLENBQUM7QUFOWCxpQkFOTyxFQWFQO0FBQ0MsMEJBQU0sTUFEUDtBQUVDLDZCQUFTLEtBQUssSUFBTCxDQUFVLElBRnBCO0FBR0MsZ0NBQVksY0FIYjtBQUlDLDhCQUFVLEVBSlg7QUFLQywyQkFBTyxVQUxSO0FBTUMsNkJBQVM7QUFOVixpQkFiTztBQUpWLGFBREo7QUE0QkQ7Ozs7RUE1RWlCLE9BQU8sSzs7a0JBK0VaLEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJtb2R1bGUuZXhwb3J0cz17XG5cdFwidGlsZVByb3BlcnR5QXJyYXlcIjoge1xuXHRcdFwib3RoZXJTcGFjZVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDAwXCIsXG5cdFx0XHRcInR5cGVcIjogXCJzcGFjZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwic3BhY2VcIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjksMFwiLCBcIjksMVwiLCBcIjksMlwiLCBcIjksM1wiLCBcIjksNFwiLCBcIjksNVwiLCBcIjksNlwiLCBcIjksN1wiLCBcIjksOFwiLCBcIjksOVwiLCBcIjksMTBcIiwgXCI5LDExXCIsIFwiOSwxMlwiLCBcIjksMTNcIiwgXCI5LDE0XCIsIFwiOSwxNVwiLCBcIjksMTZcIiwgXCI5LDE3XCIsIFwiOSwxOFwiLCBcIjksMTlcIiwgXCI5LDIwXCIsIFwiMTAsMFwiLCBcIjEwLDFcIiwgXCIxMCwyXCIsIFwiMTAsM1wiLCBcIjEwLDRcIiwgXCIxMCw1XCIsIFwiMTAsNlwiLCBcIjEwLDdcIiwgXCIxMCw4XCIsIFwiMTAsOVwiLCBcIjEwLDEwXCIsIFwiMTAsMTFcIiwgXCIxMCwxMlwiLCBcIjEwLDEzXCIsIFwiMTAsMTRcIiwgXCIxMCwxNVwiLCBcIjEwLDE2XCIsIFwiMTAsMTdcIiwgXCIxMCwxOFwiLCBcIjEwLDE5XCIsIFwiMTAsMjBcIiwgXCIxMSwwXCIsIFwiMTEsMVwiLCBcIjExLDJcIiwgXCIxMSwzXCIsIFwiMTEsNFwiLCBcIjExLDVcIiwgXCIxMSw2XCIsIFwiMTEsN1wiLCBcIjExLDhcIiwgXCIxMSw5XCIsIFwiMTEsMTBcIiwgXCIxMSwxMVwiLCBcIjExLDEyXCIsIFwiMTEsMTNcIiwgXCIxMSwxNFwiLCBcIjExLDE1XCIsIFwiMTEsMTZcIiwgXCIxMSwxN1wiLCBcIjExLDE4XCIsIFwiMTEsMTlcIiwgXCIxMSwyMFwiLCBcIjEyLDBcIiwgXCIxMiwxXCIsIFwiMTIsMlwiLCBcIjEyLDNcIiwgXCIxMiw0XCIsIFwiMTIsNVwiLCBcIjEyLDZcIiwgXCIxMiw3XCIsIFwiMTIsOFwiLCBcIjEyLDlcIiwgXCIxMiwxMFwiLCBcIjEyLDExXCIsIFwiMTIsMTJcIiwgXCIxMiwxM1wiLCBcIjEyLDE0XCIsIFwiMTIsMTVcIiwgXCIxMiwxNlwiLCBcIjEyLDE3XCIsIFwiMTIsMThcIiwgXCIxMiwxOVwiLCBcIjEyLDIwXCIsIFwiMTMsMFwiLCBcIjEzLDFcIiwgXCIxMywyXCIsIFwiMTMsM1wiLCBcIjEzLDRcIiwgXCIxMyw1XCIsIFwiMTMsNlwiLCBcIjEzLDdcIiwgXCIxMyw4XCIsIFwiMTMsOVwiLCBcIjEzLDEwXCIsIFwiMTMsMTFcIiwgXCIxMywxMlwiLCBcIjEzLDEzXCIsIFwiMTMsMTRcIiwgXCIxMywxNVwiLCBcIjEzLDE2XCIsIFwiMTMsMTdcIiwgXCIxMywxOFwiLCBcIjEzLDE5XCIsIFwiMTMsMjBcIiwgXCIxNCwwXCIsIFwiMTQsMVwiLCBcIjE0LDJcIiwgXCIxNCwzXCIsIFwiMTQsNFwiLCBcIjE0LDVcIiwgXCIxNCw2XCIsIFwiMTQsN1wiLCBcIjE0LDhcIiwgXCIxNCw5XCIsIFwiMTQsMTBcIiwgXCIxNCwxMVwiLCBcIjE0LDEyXCIsIFwiMTQsMTNcIiwgXCIxNCwxNFwiLCBcIjE0LDE1XCIsIFwiMTQsMTZcIiwgXCIxNCwxN1wiLCBcIjE0LDE4XCIsIFwiMTQsMTlcIiwgXCIxNCwyMFwiLCBcIjE1LDBcIiwgXCIxNSwxXCIsIFwiMTUsMlwiLCBcIjE1LDNcIiwgXCIxNSw0XCIsIFwiMTUsNVwiLCBcIjE1LDZcIiwgXCIxNSw3XCIsIFwiMTUsOFwiLCBcIjE1LDlcIiwgXCIxNSwxMFwiLCBcIjE1LDExXCIsIFwiMTUsMTJcIiwgXCIxNSwxM1wiLCBcIjE1LDE0XCIsIFwiMTUsMTVcIiwgXCIxNSwxNlwiLCBcIjE1LDE3XCIsIFwiMTUsMThcIiwgXCIxNSwxOVwiLCBcIjE1LDIwXCIsIFwiMTYsMFwiLCBcIjE2LDFcIiwgXCIxNiwyXCIsIFwiMTYsM1wiLCBcIjE2LDRcIiwgXCIxNiw1XCIsIFwiMTYsNlwiLCBcIjE2LDdcIiwgXCIxNiw4XCIsIFwiMTYsOVwiLCBcIjE2LDEwXCIsIFwiMTYsMTFcIiwgXCIxNiwxMlwiLCBcIjE2LDEzXCIsIFwiMTYsMTRcIiwgXCIxNiwxNVwiLCBcIjE2LDE2XCIsIFwiMTYsMTdcIiwgXCIxNiwxOFwiLCBcIjE2LDE5XCIsIFwiMTYsMjBcIiwgXCIxNywwXCIsIFwiMTcsMVwiLCBcIjE3LDJcIiwgXCIxNywzXCIsIFwiMTcsNFwiLCBcIjE3LDVcIiwgXCIxNyw2XCIsIFwiMTcsN1wiLCBcIjE3LDhcIiwgXCIxNyw5XCIsIFwiMTcsMTBcIiwgXCIxNywxMVwiLCBcIjE3LDEyXCIsIFwiMTcsMTNcIiwgXCIxNywxNFwiLCBcIjE3LDE1XCIsIFwiMTcsMTZcIiwgXCIxNywxN1wiLCBcIjE3LDE4XCIsIFwiMTcsMTlcIiwgXCIxNywyMFwiLCBcIjE4LDBcIiwgXCIxOCwxXCIsIFwiMTgsMlwiLCBcIjE4LDNcIiwgXCIxOCw0XCIsIFwiMTgsNVwiLCBcIjE4LDZcIiwgXCIxOCw3XCIsIFwiMTgsOFwiLCBcIjE4LDlcIiwgXCIxOCwxMFwiLCBcIjE4LDExXCIsIFwiMTgsMTJcIiwgXCIxOCwxM1wiLCBcIjE4LDE0XCIsIFwiMTgsMTVcIiwgXCIxOCwxNlwiLCBcIjE4LDE3XCIsIFwiMTgsMThcIiwgXCIxOCwxOVwiLCBcIjE4LDIwXCIsIFwiMTksMFwiLCBcIjE5LDFcIiwgXCIxOSwyXCIsIFwiMTksM1wiLCBcIjE5LDRcIiwgXCIxOSw1XCIsIFwiMTksNlwiLCBcIjE5LDdcIiwgXCIxOSw4XCIsIFwiMTksOVwiLCBcIjE5LDEwXCIsIFwiMTksMTFcIiwgXCIxOSwxMlwiLCBcIjE5LDEzXCIsIFwiMTksMTRcIiwgXCIxOSwxNVwiLCBcIjE5LDE2XCIsIFwiMTksMTdcIiwgXCIxOSwxOFwiLCBcIjE5LDE5XCIsIFwiMTksMjBcIiwgXCIyMCwwXCIsIFwiMjAsMVwiLCBcIjIwLDJcIiwgXCIyMCwzXCIsIFwiMjAsNFwiLCBcIjIwLDVcIiwgXCIyMCw2XCIsIFwiMjAsN1wiLCBcIjIwLDhcIiwgXCIyMCw5XCIsIFwiMjAsMTBcIiwgXCIyMCwxMVwiLCBcIjIwLDEyXCIsIFwiMjAsMTNcIiwgXCIyMCwxNFwiLCBcIjIwLDE1XCIsIFwiMjAsMTZcIiwgXCIyMCwxN1wiLCBcIjIwLDE4XCIsIFwiMjAsMTlcIiwgXCIyMCwyMFwiLCBcIjIxLDBcIiwgXCIyMSwxXCIsIFwiMjEsMlwiLCBcIjIxLDNcIiwgXCIyMSw0XCIsIFwiMjEsNVwiLCBcIjIxLDZcIiwgXCIyMSw3XCIsIFwiMjEsOFwiLCBcIjIxLDlcIiwgXCIyMSwxMFwiLCBcIjIxLDExXCIsIFwiMjEsMTJcIiwgXCIyMSwxM1wiLCBcIjIxLDE0XCIsIFwiMjEsMTVcIiwgXCIyMSwxNlwiLCBcIjIxLDE3XCIsIFwiMjEsMThcIiwgXCIyMSwxOVwiLCBcIjIxLDIwXCJdXG5cdFx0fSxcblx0XHRcImJhdHRsZVRoZXJtaXRlXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMDFcIixcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwidGhlcm1pdGVcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMl0sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXG5cdFx0XHRcdFwiYXJnc1wiOiBcInRoZXJtaXRlXCJcblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDIwXCIsIFwiNywxXCIsIFwiNyw3XCIsIFwiMjMsMTNcIiwgXCIyMywxOVwiLCBcIjI0LDBcIl1cblx0XHR9LFxuXHRcdFwiYmF0dGxlU2hpZWxkXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMDJcIixcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwic2hpZWxkXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXG5cdFx0XHRcdFwiYXJnc1wiOiBcInNoaWVsZFwiXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiw2XCIsIFwiNiwxM1wiLCBcIjYsMTlcIiwgXCI3LDJcIiwgXCI3LDEyXCIsIFwiMjMsOFwiLCBcIjIzLDE4XCIsIFwiMjQsMVwiLCBcIjI0LDdcIiwgXCIyNCwxNFwiXVxuXHRcdH0sXG5cdFx0XCJiYXR0bGVCaW9kcm9uZVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDAzXCIsXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcblx0XHRcdFwibmFtZVwiOiBcImJpb2Ryb25lXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImJpb2Ryb25lXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcblx0XHRcdFx0XCJhcmdzXCI6IFwiYmlvZHJvbmVcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsNVwiLCBcIjcsM1wiLCBcIjcsMTVcIiwgXCIyMyw1XCIsIFwiMjMsMTdcIiwgXCIyNCwxNVwiXVxuXHRcdH0sXG5cdFx0XCJiYXR0bGVTYXRlbGxpdGVcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAwNFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJzYXRlbGxpdGVcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wibWV0YWxcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxuXHRcdFx0XHRcImFyZ3NcIjogXCJzYXRlbGxpdGVcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMFwiLCBcIjYsMTRcIiwgXCI3LDRcIiwgXCI3LDE3XCIsIFwiMjMsM1wiLCBcIjIzLDE2XCIsIFwiMjQsNlwiLCBcIjI0LDIwXCJdXG5cdFx0fSxcblx0XHRcImJhdHRsZUxhc2VyXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMDVcIixcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwibGFzZXJcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcblx0XHRcdFx0XCJhcmdzXCI6IFwibGFzZXJcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsM1wiLCBcIjYsN1wiLCBcIjYsOFwiLCBcIjYsMTJcIiwgXCI2LDE2XCIsIFwiNyw1XCIsIFwiNyw2XCIsIFwiNyw5XCIsIFwiNywxOFwiLCBcIjcsMTlcIiwgXCIyMywxXCIsIFwiMjMsMlwiLCBcIjIzLDExXCIsIFwiMjMsMTRcIiwgXCIyMywxNVwiLCBcIjI0LDRcIiwgXCIyNCw4XCIsIFwiMjQsMTJcIiwgXCIyNCwxM1wiLCBcIjI0LDE3XCJdXG5cdFx0fSxcblx0XHRcImJhdHRsZVJlcGFpclwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDA2XCIsXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcblx0XHRcdFwibmFtZVwiOiBcInJlcGFpclwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJtZXRhbFwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJyZXBhaXJcIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogMVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMVwiLCBcIjYsMTBcIiwgXCI2LDE4XCIsIFwiNyw4XCIsIFwiNywxM1wiLCBcIjIzLDdcIiwgXCIyMywxMlwiLCBcIjI0LDJcIiwgXCIyNCwxMFwiLCBcIjI0LDE5XCJdXG5cdFx0fSxcblx0XHRcImJhdHRsZVJvY2tldFwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDA3XCIsXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcblx0XHRcdFwibmFtZVwiOiBcInJvY2tldFwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJyb2NrZXRcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxuXHRcdFx0XHRcImFyZ3NcIjogXCJyb2NrZXRcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsNFwiLCBcIjYsMTFcIiwgXCI3LDEwXCIsIFwiNywxNlwiLCBcIjIzLDRcIiwgXCIyMywxMFwiLCBcIjI0LDlcIiwgXCIyNCwxNlwiXVxuXHRcdH0sXG5cdFx0XCJiYXR0bGVFc3Bpb25hZ2VcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAwOFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJlc3Bpb25hZ2VcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbM10sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJlc3Bpb25hZ2VcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMTVcIiwgXCI3LDExXCIsIFwiMjMsOVwiLCBcIjI0LDVcIl1cblx0XHR9LFxuXHRcdFwiYmF0dGxlVGFrZW92ZXJcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAwOVwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJ0YWtlb3ZlclwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzJdLFxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwidGFrZW92ZXJcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMTdcIiwgXCI3LDE0XCIsIFwiMjMsNlwiLCBcIjI0LDNcIl1cblx0XHR9LFxuXHRcdFwiYmF0dGxlUmVwYWlyVHdvXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMTBcIixcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwicmVwYWlyVHdvXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiLCBcIm94eWdlblwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMV0sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJyZXBhaXJcIixcblx0XHRcdFx0XCJhcmdzXCI6IDJcblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDlcIiwgXCIyNCwxMVwiXVxuXHRcdH0sXG5cdFx0XCJiYXR0bGVDb3VudGVyRXNwaW9uYWdlXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMTFcIixcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiY291bnRlckVzcGlvbmFnZVwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJiaW9tYXNzXCIsIFwib3h5Z2VuXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxXSxcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImNvdW50ZXJcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMlwiLCBcIjI0LDE4XCJdXG5cdFx0fSxcblx0XHRcIm90aGVyU3VyZmFjZVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDEyXCIsXG5cdFx0XHRcInR5cGVcIjogXCJzdXJmYWNlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJzdXJmYWNlXCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI4LDBcIiwgXCI4LDFcIiwgXCI4LDJcIiwgXCI4LDNcIiwgXCI4LDRcIiwgXCI4LDVcIiwgXCI4LDZcIiwgXCI4LDdcIiwgXCI4LDhcIiwgXCI4LDlcIiwgXCI4LDEwXCIsIFwiOCwxMVwiLCBcIjgsMTJcIiwgXCI4LDEzXCIsIFwiOCwxNFwiLCBcIjgsMTVcIiwgXCI4LDE2XCIsIFwiOCwxN1wiLCBcIjgsMThcIiwgXCI4LDE5XCIsIFwiOCwyMFwiLCBcIjIyLDBcIiwgXCIyMiwxXCIsIFwiMjIsMlwiLCBcIjIyLDNcIiwgXCIyMiw0XCIsIFwiMjIsNVwiLCBcIjIyLDZcIiwgXCIyMiw3XCIsIFwiMjIsOFwiLCBcIjIyLDlcIiwgXCIyMiwxMFwiLCBcIjIyLDExXCIsIFwiMjIsMTJcIiwgXCIyMiwxM1wiLCBcIjIyLDE0XCIsIFwiMjIsMTVcIiwgXCIyMiwxNlwiLCBcIjIyLDE3XCIsIFwiMjIsMThcIiwgXCIyMiwxOVwiLCBcIjIyLDIwXCJdXG5cdFx0fSxcblx0XHRcIm90aGVyTG9ja1wiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDEzXCIsXG5cdFx0XHRcInR5cGVcIjogXCJsb2NrXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJsb2NrXCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI3LDBcIiwgXCI1LDEwXCIsIFwiMSwxMFwiLCBcIjcsMjBcIiwgXCIyMywwXCIsIFwiMjMsMjBcIiwgXCIyNSwxMFwiLCBcIjI5LDEwXCJdXG5cdFx0fSxcblx0XHRcImFybW9yeURyaWxsXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMTRcIixcblx0XHRcdFwidHlwZVwiOiBcImFybW9yeVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiZHJpbGxcIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjQsMTBcIiwgXCIyNiwxMFwiXVxuXHRcdH0sXG5cdFx0XCJBcm1vcnlDYW5ub25cIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAxNVwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwiYXJtb3J5XCIsXG5cdFx0XHRcIm5hbWVcIjogXCJjYW5ub25cIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjMsMTBcIiwgXCIyNywxMFwiXVxuXHRcdH0sXG5cdFx0XCJhcm1vcnlFeHBsb3NpdmVzXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMTZcIixcblx0XHRcdFwidHlwZVwiOiBcImFybW9yeVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiZXhwbG9zaXZlc1wiLFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMiwxMFwiLCBcIjI4LDEwXCJdXG5cdFx0fSxcblx0XHRcInByb2R1Y3Rpb25MaWNoZW5cIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAxN1wiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwibGljaGVuXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJiaW9tYXNzXCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDBcIiwgXCIwLDEwXCIsIFwiMCwxN1wiLCBcIjEsMlwiLCBcIjEsOFwiLCBcIjEsMTZcIiwgXCIxLDIwXCIsIFwiMjksMFwiLCBcIjI5LDRcIiwgXCIyOSwxMlwiLCBcIjI5LDE4XCIsIFwiMzAsM1wiLCBcIjMwLDEwXCIsIFwiMzAsMjBcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvbkxpY2hlblR3b1wiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDE4XCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJsaWNoZW5Ud29cIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcImJpb21hc3NcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsyXVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsNFwiLCBcIjMwLDE2XCJdXG5cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvbkNoZW1pY2FsUmVhY3RvclwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDE5XCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJjaGVtaWNhbFJlYWN0b3JcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wib3h5Z2VuXCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIxLDFcIiwgXCIxLDlcIiwgXCIyOSwxOVwiLCBcIjI5LDExXCJdXG5cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvbkNoZW1pY2FsUmVhY3RvclR3b1wiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDIwXCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJjaGVtaWNhbFJlYWN0b3JUd29cIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wib3h5Z2VuXCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMl1cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDVcIiwgXCIzMCwxNVwiXVxuXHRcdH0sXG5cdFx0XCJwcm9kdWN0aW9uQWlyRmlsdGVyXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMjFcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcImFpckZpbHRlclwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJveHlnZW5cIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcIm94eWdlblwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzNdXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxNVwiLCBcIjEsMTFcIiwgXCIyOSw5XCIsIFwiMzAsNVwiXVxuXHRcdH0sXG5cdFx0XCJwcm9kdWN0aW9uQmlvY29sbGVjdG9yXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMjJcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcImJpb2NvbGxlY3RvclwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJveHlnZW5cIiwgXCJiaW9tYXNzXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJiaW9kcm9uZVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzFdXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxNFwiLCBcIjAsMThcIiwgXCIxLDZcIiwgXCIxLDE3XCIsIFwiMzAsNlwiLCBcIjMwLDJcIiwgXCIyOSwxNFwiLCBcIjI5LDNcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvblVyYW5pdW1NaW5lXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMjNcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcInVyYW5pdW1NaW5lXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm94eWdlblwiLCBcImVuZXJneVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMV0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1widXJhbml1bVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzFdXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwyXCIsIFwiMCw2XCIsIFwiMSwzXCIsIFwiMzAsMThcIiwgXCIzMCwxNFwiLCBcIjI5LDE3XCJdXG5cdFx0fSxcblx0XHRcInByb2R1Y3Rpb25OdWNsZWFyUmVhY3RvclwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDI0XCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJudWNsZWFyUmVhY3RvclwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJ1cmFuaXVtXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJlbmVyZ3lcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFszXVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsOVwiLCBcIjAsMTZcIiwgXCIxLDdcIiwgXCIxLDE0XCIsIFwiMSwxOVwiLCBcIjMwLDExXCIsIFwiMzAsNFwiLCBcIjI5LDEzXCIsIFwiMjksNlwiLCBcIjI5LDFcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvblRoZXJtYWxHZW5lcmF0b3JcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAyNVwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwidGhlcm1hbEdlbmVyYXRvclwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJiaW9tYXNzXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJlbmVyZ3lcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsxXVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMTJcIiwgXCIzMCw4XCJdXG5cdFx0fSxcblx0XHRcInByb2R1Y3Rpb25Gb3VuZHJ5XCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMjZcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcImZvdW5kcnlcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJtZXRhbFwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzFdXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwzXCIsIFwiMCwxMVwiLCBcIjAsMTlcIiwgXCIxLDEzXCIsIFwiMzAsMTdcIiwgXCIzMCw5XCIsIFwiMzAsMVwiLCBcIjI5LDdcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvbkZvdW5kcnlUd29cIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAyN1wiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiZm91bmRyeVR3b1wiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcIm1ldGFsXCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMl1cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIxLDBcIiwgXCIyOSwyMFwiXVxuXHRcdH0sXG5cdFx0XCJwcm9kdWN0aW9uUm9ja2V0V29ya3Nob3BcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAyOFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwicm9ja2V0V29ya3Nob3BcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJyb2NrZXRcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsxXVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMVwiLCBcIjAsN1wiLCBcIjEsNVwiLCBcIjEsMTJcIiwgXCIxLDE1XCIsIFwiMzAsMTlcIiwgXCIzMCwxM1wiLCBcIjI5LDE1XCIsIFwiMjksOFwiLCBcIjI5LDVcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvblNlbnNvckNhYmluXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMjlcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcInNlbnNvckNhYmluXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImtpbGxCaW9kcm9uZVwiXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxM1wiLCBcIjMwLDdcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvbk51Y2xlYXJBcm1vcnlcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAzMFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwibnVjbGVhckFybW9yeVwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJveHlnZW5cIiwgXCJlbmVyZ3lcIiwgXCJ1cmFuaXVtXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxLCAxXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJudWtlXCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDIwXCIsIFwiMSw0XCIsIFwiMSwxOFwiLCBcIjMwLDBcIiwgXCIyOSwxNlwiLCBcIjI5LDJcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvblJlcGFpclwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDMxXCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJwcm9kUmVwYWlyXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJyZXBhaXJcIixcblx0XHRcdFx0XCJ0aWxlVGFyZ2V0SURcIjogMVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsOFwiLCBcIjMwLDEyXCJdXG5cdFx0fSxcblx0XHRcInJlc291cmNlT3h5Z2VuXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMzJcIixcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwib3h5Z2VuXCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI1LDBcIiwgXCI1LDFcIiwgXCI1LDJcIiwgXCI1LDNcIiwgXCI1LDRcIiwgXCI1LDVcIiwgXCI1LDZcIiwgXCI1LDdcIiwgXCI1LDhcIiwgXCI1LDlcIiwgXCIyNSwxMVwiLCBcIjI1LDEyXCIsIFwiMjUsMTNcIiwgXCIyNSwxNFwiLCBcIjI1LDE1XCIsIFwiMjUsMTZcIiwgXCIyNSwxN1wiLCBcIjI1LDE4XCIsIFwiMjUsMTlcIiwgXCIyNSwyMFwiXVxuXHRcdH0sXG5cdFx0XCJyZXNvdXJjZVJvY2tldFwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDMzXCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcblx0XHRcdFwibmFtZVwiOiBcInJvY2tldFwiLFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNCwwXCIsIFwiNCwxXCIsIFwiNCwyXCIsIFwiNCwzXCIsIFwiNCw0XCIsIFwiNCw1XCIsIFwiNCw2XCIsIFwiNCw3XCIsIFwiNCw4XCIsIFwiNCw5XCIsIFwiMjYsMTFcIiwgXCIyNiwxMlwiLCBcIjI2LDEzXCIsIFwiMjYsMTRcIiwgXCIyNiwxNVwiLCBcIjI2LDE2XCIsIFwiMjYsMTdcIiwgXCIyNiwxOFwiLCBcIjI2LDE5XCIsIFwiMjYsMjBcIl1cblx0XHR9LFxuXHRcdFwicmVzb3VyY2VNZXRhbFwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDM0XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcblx0XHRcdFwibmFtZVwiOiBcIm1ldGFsXCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIzLDBcIiwgXCIzLDFcIiwgXCIzLDJcIiwgXCIzLDNcIiwgXCIzLDRcIiwgXCIzLDVcIiwgXCIzLDZcIiwgXCIzLDdcIiwgXCIzLDhcIiwgXCIzLDlcIiwgXCIyNywxMVwiLCBcIjI3LDEyXCIsIFwiMjcsMTNcIiwgXCIyNywxNFwiLCBcIjI3LDE1XCIsIFwiMjcsMTZcIiwgXCIyNywxN1wiLCBcIjI3LDE4XCIsIFwiMjcsMTlcIiwgXCIyNywyMFwiXVxuXHRcdH0sXG5cdFx0XCJyZXNvdXJjZUVuZXJneVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDM1XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcblx0XHRcdFwibmFtZVwiOiBcImVuZXJneVwiLFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMiwwXCIsIFwiMiwxXCIsIFwiMiwyXCIsIFwiMiwzXCIsIFwiMiw0XCIsIFwiMiw1XCIsIFwiMiw2XCIsIFwiMiw3XCIsIFwiMiw4XCIsIFwiMiw5XCIsIFwiMiwxMVwiLCBcIjIsMTJcIiwgXCIyLDEzXCIsIFwiMiwxNFwiLCBcIjIsMTVcIiwgXCIyLDE2XCIsIFwiMiwxN1wiLCBcIjIsMThcIiwgXCIyLDE5XCIsIFwiMiwyMFwiLCBcIjI4LDBcIiwgXCIyOCwxXCIsIFwiMjgsMlwiLCBcIjI4LDNcIiwgXCIyOCw0XCIsIFwiMjgsNVwiLCBcIjI4LDZcIiwgXCIyOCw3XCIsIFwiMjgsOFwiLCBcIjI4LDlcIiwgXCIyOCwxMVwiLCBcIjI4LDEyXCIsIFwiMjgsMTNcIiwgXCIyOCwxNFwiLCBcIjI4LDE1XCIsIFwiMjgsMTZcIiwgXCIyOCwxN1wiLCBcIjI4LDE4XCIsIFwiMjgsMTlcIiwgXCIyOCwyMFwiXVxuXHRcdH0sXG5cdFx0XCJyZXNvdXJjZUJpb21hc3NcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAzNlwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJiaW9tYXNzXCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI1LDExXCIsIFwiNSwxMlwiLCBcIjUsMTNcIiwgXCI1LDE0XCIsIFwiNSwxNVwiLCBcIjUsMTZcIiwgXCI1LDE3XCIsIFwiNSwxOFwiLCBcIjUsMTlcIiwgXCI1LDIwXCIsIFwiMjUsMFwiLCBcIjI1LDFcIiwgXCIyNSwyXCIsIFwiMjUsM1wiLCBcIjI1LDRcIiwgXCIyNSw1XCIsIFwiMjUsNlwiLCBcIjI1LDdcIiwgXCIyNSw4XCIsIFwiMjUsOVwiXVxuXHRcdH0sXG5cdFx0XCJyZXNvdXJjZUJpb2Ryb25lXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMzdcIixcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiYmlvZHJvbmVcIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjQsMTFcIiwgXCI0LDEyXCIsIFwiNCwxM1wiLCBcIjQsMTRcIiwgXCI0LDE1XCIsIFwiNCwxNlwiLCBcIjQsMTdcIiwgXCI0LDE4XCIsIFwiNCwxOVwiLCBcIjQsMjBcIiwgXCIyNiwwXCIsIFwiMjYsMVwiLCBcIjI2LDJcIiwgXCIyNiwzXCIsIFwiMjYsNFwiLCBcIjI2LDVcIiwgXCIyNiw2XCIsIFwiMjYsN1wiLCBcIjI2LDhcIiwgXCIyNiw5XCJdXG5cdFx0fSxcblx0XHRcInJlc291cmNlVXJhbml1bVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDM4XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcblx0XHRcdFwibmFtZVwiOiBcInVyYW5pdW1cIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjMsMTFcIiwgXCIzLDEyXCIsIFwiMywxM1wiLCBcIjMsMTRcIiwgXCIzLDE1XCIsIFwiMywxNlwiLCBcIjMsMTdcIiwgXCIzLDE4XCIsIFwiMywxOVwiLCBcIjMsMjBcIiwgXCIyNywwXCIsIFwiMjcsMVwiLCBcIjI3LDJcIiwgXCIyNywzXCIsIFwiMjcsNFwiLCBcIjI3LDVcIiwgXCIyNyw2XCIsIFwiMjcsN1wiLCBcIjI3LDhcIiwgXCIyNyw5XCJdXG5cdFx0fVxuXHR9XG59IiwibW9kdWxlLmV4cG9ydHM9e1xuXHRcImdyaWRcIjogW1xuXHRcdFs5LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTJdLFxuXHRcdFszLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA4LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA2XSxcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcblx0XHRbOSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMiwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTJdLFxuXHRcdFsxLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNF0sXG5cdFx0WzMsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA2XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxuXHRcdFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA0XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxuXHRcdFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA0XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxuXHRcdFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA0XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxuXHRcdFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA0XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDRdLFxuXHRcdFsxLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNF0sXG5cdFx0WzMsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDgsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDZdLFxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxuXHRcdFs5LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAyLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMl0sXG5cdFx0WzMsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA2XVxuXHRdXG59IiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIC8vIGpvaW4gdXNlZCB0byBmaXggbWVtb3J5IGlzc3VlIGNhdXNlZCBieSBjb25jYXRlbmF0aW9uOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMTc1I2M0XG4gIHJldHVybiAoW2J0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sIFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV1dKS5qb2luKCcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0b1xuLy8gaW1wbGVtZW50YXRpb24uIEFsc28sIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byBvbiBJRTExLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcblxuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgKytpaSkge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHY0O1xuIiwiaW1wb3J0IENsaWVudCBmcm9tICcuL3ByZWZhYnMvY2xpZW50JztcbmltcG9ydCBCb290IGZyb20gJy4vc3RhdGVzL2Jvb3QnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zdGF0ZXMvZ2FtZSc7XG5pbXBvcnQgU2V0dXAgZnJvbSAnLi9zdGF0ZXMvc2V0dXAnO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICcuL3N0YXRlcy9wcmVsb2FkZXInO1xuaW1wb3J0IEdhbWVvdmVyIGZyb20gJy4vc3RhdGVzL2dhbWVvdmVyJztcbmltcG9ydCBTZXJ2ZXJGdWxsIGZyb20gJy4vc3RhdGVzL3NlcnZlckZ1bGwnO1xuaW1wb3J0IFNlcHRpa29uIGZyb20gJy4vcHJlZmFicy9zZXB0aWtvbic7XG5cbmlmKHR5cGVvZihTdG9yYWdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXB0VVVJRCcpICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHV1aWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VwdFVVSUQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB1dWlkID0gcmVxdWlyZSgndXVpZC92NCcpKCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXB0VVVJRCcsIHV1aWQpO1xuICAgIH1cbn0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihcIkxvY2FsIFN0b3JhZ2UgaXMgcmVxdWlyZWQhXCIpO1xufVxuXG4vLyBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQsIFBoYXNlci5BVVRPLCAncGhhc2VyLXRlc3QtZ2FtZScpO1xuY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShcIjEwMFwiLCBcIjEwMFwiLCBQaGFzZXIuQVVUTyk7XG5nYW1lLnNlcHRpa29uID0gbmV3IFNlcHRpa29uKGdhbWUpO1xuZ2FtZS5jbGllbnQgPSBuZXcgQ2xpZW50KGdhbWUuc2VwdGlrb24pO1xuXG5nYW1lLnN0YXRlLmFkZCgnYm9vdCcsIG5ldyBCb290KCkpO1xuZ2FtZS5zdGF0ZS5hZGQoJ2dhbWUnLCBuZXcgR2FtZSgpKTtcbmdhbWUuc3RhdGUuYWRkKCdzZXR1cCcsIG5ldyBTZXR1cCgpKTtcbmdhbWUuc3RhdGUuYWRkKCdwcmVsb2FkZXInLCBuZXcgUHJlbG9hZGVyKCkpO1xuZ2FtZS5zdGF0ZS5hZGQoJ2dhbWVvdmVyJywgbmV3IEdhbWVvdmVyKCkpO1xuZ2FtZS5zdGF0ZS5hZGQoJ3NlcnZlckZ1bGwnLCBuZXcgU2VydmVyRnVsbCgpKTtcblxuZ2FtZS5zdGF0ZS5zdGFydCgnYm9vdCcpO1xuIiwidmFyIGdhbWVNb2RhbCA9IGdhbWVNb2RhbCB8fCB7fTtcblxuXG5nYW1lTW9kYWwgPSBmdW5jdGlvbiAoZ2FtZSkge1xuXG5cdHZhciBfdGhpcyA9IHRoaXM7XG5cdGdhbWUubW9kYWxzID0ge307XG5cblx0LyoqXG5cdCAqIFtoaWRlTW9kYWwgZGVzY3JpcHRpb25dXG5cdCAqIEBwYXJhbSAge1t0eXBlXX0gdHlwZSBbZGVzY3JpcHRpb25dXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHR0aGlzLmhpZGVNb2RhbCA9IGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0d2luZG93LmNvbnNvbGUubG9nKHR5cGUpO1xuXHRcdGdhbWUubW9kYWxzW3R5cGVdLnZpc2libGUgPSBmYWxzZTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGNyZWF0ZU1vZGFsOiBmdW5jdGlvbiAob3B0aW9ucykge1xuXHRcdFx0dmFyIHR5cGUgPSBvcHRpb25zLnR5cGUgfHwgJyc7IC8vIG11c3QgYmUgdW5pcXVlXG5cdFx0XHR2YXIgaW5jbHVkZUJhY2tncm91bmQgPSBvcHRpb25zLmluY2x1ZGVCYWNrZ3JvdW5kOyAvLyBtYXliZSBub3Qgb3B0aW9uYWxcblx0XHRcdHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvciB8fCBcIjB4MDAwMDAwXCI7XG5cdFx0XHR2YXIgYmFja2dyb3VuZE9wYWNpdHkgPSBvcHRpb25zLmJhY2tncm91bmRPcGFjaXR5ID09PSB1bmRlZmluZWQgP1xuXHRcdFx0XHQwLjcgOiBvcHRpb25zLmJhY2tncm91bmRPcGFjaXR5O1xuXHRcdFx0dmFyIG1vZGFsQ2xvc2VPbklucHV0ID0gb3B0aW9ucy5tb2RhbENsb3NlT25JbnB1dCB8fCBmYWxzZTtcblx0XHRcdHZhciBtb2RhbEJhY2tncm91bmRDYWxsYmFjayA9IG9wdGlvbnMubW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2sgfHwgZmFsc2U7XG5cdFx0XHR2YXIgdkNlbnRlciA9IG9wdGlvbnMudkNlbnRlciB8fCB0cnVlO1xuXHRcdFx0dmFyIGhDZW50ZXIgPSBvcHRpb25zLmhDZW50ZXIgfHwgdHJ1ZTtcblx0XHRcdHZhciBpdGVtc0FyciA9IG9wdGlvbnMuaXRlbXNBcnIgfHwgW107XG5cdFx0XHR2YXIgZml4ZWRUb0NhbWVyYSA9IG9wdGlvbnMuZml4ZWRUb0NhbWVyYSB8fCBmYWxzZTtcblxuXHRcdFx0dmFyIG1vZGFsO1xuXHRcdFx0dmFyIGlubmVyTW9kYWw7XG5cdFx0XHR2YXIgbW9kYWxHcm91cCA9IGdhbWUuYWRkLmdyb3VwKCk7XG5cdFx0XHRpZiAoZml4ZWRUb0NhbWVyYSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRtb2RhbEdyb3VwLmZpeGVkVG9DYW1lcmEgPSB0cnVlO1xuXHRcdFx0XHRtb2RhbEdyb3VwLmNhbWVyYU9mZnNldC54ID0gMDtcblx0XHRcdFx0bW9kYWxHcm91cC5jYW1lcmFPZmZzZXQueSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpbmNsdWRlQmFja2dyb3VuZCA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRtb2RhbCA9IGdhbWUuYWRkLmdyYXBoaWNzKGdhbWUud2lkdGgsIGdhbWUuaGVpZ2h0KTtcblx0XHRcdFx0bW9kYWwuYmVnaW5GaWxsKGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZE9wYWNpdHkpO1xuXHRcdFx0XHRtb2RhbC54ID0gMDtcblx0XHRcdFx0bW9kYWwueSA9IDA7XG5cblx0XHRcdFx0bW9kYWwuZHJhd1JlY3QoMCwgMCwgZ2FtZS53aWR0aCwgZ2FtZS5oZWlnaHQpO1xuXG5cdFx0XHRcdGlmIChtb2RhbENsb3NlT25JbnB1dCA9PT0gdHJ1ZSkge1xuXG5cdFx0XHRcdFx0aW5uZXJNb2RhbCA9IGdhbWUuYWRkLnNwcml0ZSgwLCAwKTtcblx0XHRcdFx0XHRpbm5lck1vZGFsLmlucHV0RW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0aW5uZXJNb2RhbC53aWR0aCA9IGdhbWUud2lkdGg7XG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5oZWlnaHQgPSBnYW1lLmhlaWdodDtcblx0XHRcdFx0XHRpbm5lck1vZGFsLnR5cGUgPSB0eXBlO1xuXHRcdFx0XHRcdGlubmVyTW9kYWwuaW5wdXQucHJpb3JpdHlJRCA9IDA7XG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5ldmVudHMub25JbnB1dERvd24uYWRkKGZ1bmN0aW9uIChlLCBwb2ludGVyKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmhpZGVNb2RhbChlLnR5cGUpO1xuXHRcdFx0XHRcdH0sIF90aGlzLCAyKTtcblxuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKGlubmVyTW9kYWwpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0bW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2sgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChtb2RhbEJhY2tncm91bmRDYWxsYmFjaykge1xuXHRcdFx0XHRpbm5lck1vZGFsID0gZ2FtZS5hZGQuc3ByaXRlKDAsIDApO1xuXHRcdFx0XHRpbm5lck1vZGFsLmlucHV0RW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdGlubmVyTW9kYWwud2lkdGggPSBnYW1lLndpZHRoO1xuXHRcdFx0XHRpbm5lck1vZGFsLmhlaWdodCA9IGdhbWUuaGVpZ2h0O1xuXHRcdFx0XHRpbm5lck1vZGFsLnR5cGUgPSB0eXBlO1xuXHRcdFx0XHRpbm5lck1vZGFsLmlucHV0LnByaW9yaXR5SUQgPSAwO1xuXG5cdFx0XHRcdG1vZGFsR3JvdXAuYWRkKGlubmVyTW9kYWwpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaW5jbHVkZUJhY2tncm91bmQpIHtcblx0XHRcdFx0bW9kYWxHcm91cC5hZGQobW9kYWwpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbW9kYWxMYWJlbDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXNBcnIubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBpdGVtc0FycltpXTtcblx0XHRcdFx0dmFyIGl0ZW1UeXBlID0gaXRlbS50eXBlIHx8ICd0ZXh0Jztcblx0XHRcdFx0dmFyIGl0ZW1Db2xvciA9IGl0ZW0uY29sb3IgfHwgMHgwMDAwMDA7XG5cdFx0XHRcdHZhciBpdGVtRm9udGZhbWlseSA9IGl0ZW0uZm9udEZhbWlseSB8fCAnQXJpYWwnO1xuXHRcdFx0XHR2YXIgaXRlbUZvbnRTaXplID0gaXRlbS5mb250U2l6ZSB8fCAzMjtcblx0XHRcdFx0dmFyIGl0ZW1TdHJva2UgPSBpdGVtLnN0cm9rZSB8fCAnMHgwMDAwMDAnO1xuXHRcdFx0XHR2YXIgaXRlbVN0cm9rZVRoaWNrbmVzcyA9IGl0ZW0uc3Ryb2tlVGhpY2tuZXNzIHx8IDA7XG5cdFx0XHRcdHZhciBpdGVtQWxpZ24gPSBpdGVtLmFsaWduIHx8ICdjZW50ZXInO1xuXHRcdFx0XHR2YXIgb2Zmc2V0WCA9IGl0ZW0ub2Zmc2V0WCB8fCAwO1xuXHRcdFx0XHR2YXIgb2Zmc2V0WSA9IGl0ZW0ub2Zmc2V0WSB8fCAwO1xuXHRcdFx0XHR2YXIgY29udGVudFNjYWxlID0gaXRlbS5jb250ZW50U2NhbGUgfHwgMTtcblx0XHRcdFx0dmFyIGNvbnRlbnQgPSBpdGVtLmNvbnRlbnQgfHwgXCJcIjtcblx0XHRcdFx0dmFyIGNlbnRlclggPSBnYW1lLndpZHRoIC8gMjtcblx0XHRcdFx0dmFyIGNlbnRlclkgPSBnYW1lLmhlaWdodCAvIDI7XG5cdFx0XHRcdHZhciBjYWxsYmFjayA9IGl0ZW0uY2FsbGJhY2sgfHwgZmFsc2U7XG5cdFx0XHRcdHZhciB0ZXh0QWxpZ24gPSBpdGVtLnRleHRBbGlnbiB8fCBcImxlZnRcIjtcblx0XHRcdFx0dmFyIGF0bGFzUGFyZW50ID0gaXRlbS5hdGxhc1BhcmVudCB8fCBcIlwiO1xuXHRcdFx0XHR2YXIgYnV0dG9uSG92ZXIgPSBpdGVtLmJ1dHRvbkhvdmVyIHx8IGNvbnRlbnQ7XG5cdFx0XHRcdHZhciBidXR0b25BY3RpdmUgPSBpdGVtLmJ1dHRvbkFjdGl2ZSB8fCBjb250ZW50O1xuXHRcdFx0XHR2YXIgZ3JhcGhpY0NvbG9yID0gaXRlbS5ncmFwaGljQ29sb3IgfHwgMHhmZmZmZmY7XG5cdFx0XHRcdHZhciBncmFwaGljT3BhY2l0eSA9IGl0ZW0uZ3JhcGhpY09wYWNpdHkgfHwgMTtcblx0XHRcdFx0dmFyIGdyYXBoaWNXID0gaXRlbS5ncmFwaGljV2lkdGggfHwgMjAwO1xuXHRcdFx0XHR2YXIgZ3JhcGhpY0ggPSBpdGVtLmdyYXBoaWNIZWlnaHQgfHwgMjAwO1xuXHRcdFx0XHR2YXIgZ3JhcGhpY1JhZGl1cyA9IGl0ZW0uZ3JhcGhpY1JhZGl1cyB8fCAwO1xuXHRcdFx0XHR2YXIgbG9ja1Bvc2l0aW9uID0gaXRlbS5sb2NrUG9zaXRpb24gfHwgZmFsc2U7XG5cblx0XHRcdFx0dmFyIGl0ZW1BbmNob3IgPSBpdGVtLmFuY2hvciB8fCB7eDowLHk6MH07XG5cdFx0XHRcdHZhciBpdGVtQW5nbGUgPSBpdGVtLmFuZ2xlIHx8IDA7XG5cdFx0XHRcdHZhciBpdGVtWCA9IGl0ZW0ueCB8fCAwO1xuXHRcdFx0XHR2YXIgaXRlbVkgPSBpdGVtLnkgfHwgMDtcblx0XHRcdFx0dmFyIGltYWdlRnJhbWUgPSBpdGVtLmZyYW1lIHx8IG51bGw7XG5cdFx0XHRcdHZhciB0aWxlU3ByaXRlV2lkdGggPSBpdGVtLnRpbGVTcHJpdGVXaWR0aCB8fCBnYW1lLndpZHRoO1xuXHRcdFx0XHR2YXIgdGlsZVNwcml0ZUhlaWdodCA9IGl0ZW0udGlsZVNwcml0ZUhlaWdodCB8fCBnYW1lLmhlaWdodDtcblxuXHRcdFx0XHRtb2RhbExhYmVsID0gbnVsbDtcblxuXHRcdFx0XHRpZiAoaXRlbVR5cGUgPT09IFwidGV4dFwiIHx8IGl0ZW1UeXBlID09PSBcImJpdG1hcFRleHRcIikge1xuXG5cdFx0XHRcdFx0aWYgKGl0ZW1UeXBlID09PSBcInRleHRcIikge1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnRleHQoMCwgMCwgY29udGVudCwge1xuXHRcdFx0XHRcdFx0XHRmb250OiBpdGVtRm9udFNpemUgKyAncHggJyArIGl0ZW1Gb250ZmFtaWx5LFxuXHRcdFx0XHRcdFx0XHRmaWxsOiBcIiNcIiArIFN0cmluZyhpdGVtQ29sb3IpLnJlcGxhY2UoXCIweFwiLCBcIlwiKSxcblx0XHRcdFx0XHRcdFx0c3Ryb2tlOiBcIiNcIiArIFN0cmluZyhpdGVtU3Ryb2tlKS5yZXBsYWNlKFwiMHhcIiwgXCJcIiksXG5cdFx0XHRcdFx0XHRcdHN0cm9rZVRoaWNrbmVzczogaXRlbVN0cm9rZVRoaWNrbmVzcyxcblx0XHRcdFx0XHRcdFx0YWxpZ246IGl0ZW1BbGlnblxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ3RleHQnO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC51cGRhdGUoKTtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKG1vZGFsTGFiZWwud2lkdGggLyAyKSkgKyBvZmZzZXRYO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKChnYW1lLmhlaWdodCAvIDIpIC0gKG1vZGFsTGFiZWwuaGVpZ2h0IC8gMikpICsgb2Zmc2V0WTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmJpdG1hcFRleHQoMCwgMCwgaXRlbUZvbnRmYW1pbHksIFN0cmluZyhjb250ZW50KSwgaXRlbUZvbnRTaXplKTtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnYml0bWFwVGV4dCc7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmFsaWduID0gdGV4dEFsaWduO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC51cGRhdGVUZXh0KCk7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtIChtb2RhbExhYmVsLndpZHRoIC8gMikpICsgb2Zmc2V0WDtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKG1vZGFsTGFiZWwuaGVpZ2h0IC8gMikpICsgb2Zmc2V0WTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJpbWFnZVwiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmltYWdlKDAsIDAsIGNvbnRlbnQpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnaW1hZ2UnO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwidGlsZVNwcml0ZVwiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnRpbGVTcHJpdGUoaXRlbVgsIGl0ZW1ZLFxuXHRcdFx0XHRcdFx0dGlsZVNwcml0ZVdpZHRoLCB0aWxlU3ByaXRlSGVpZ2h0LCBjb250ZW50LCBpbWFnZUZyYW1lKTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnNjYWxlLnNldFRvKGNvbnRlbnRTY2FsZSwgY29udGVudFNjYWxlKTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmFuY2hvci5zZXRUbyhpdGVtQW5jaG9yLngsIGl0ZW1BbmNob3IueSk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5hbmdsZSA9IGl0ZW1BbmdsZTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ3RpbGVTcHJpdGUnO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcInNwcml0ZVwiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnNwcml0ZSgwLCAwLCBhdGxhc1BhcmVudCwgY29udGVudCk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdzcHJpdGUnO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiYnV0dG9uXCIpIHtcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuYnV0dG9uKDAsIDAsIGF0bGFzUGFyZW50LCBjYWxsYmFjayxcblx0XHRcdFx0XHRcdHRoaXMsIGJ1dHRvbkhvdmVyLCBjb250ZW50LCBidXR0b25BY3RpdmUsIGNvbnRlbnQpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnYnV0dG9uJztcblx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtICgobW9kYWxMYWJlbC53aWR0aCkgLyAyKSkgKyBvZmZzZXRYO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKChtb2RhbExhYmVsLmhlaWdodCkgLyAyKSkgKyBvZmZzZXRZO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiZ3JhcGhpY3NcIikge1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5ncmFwaGljcyhncmFwaGljVywgZ3JhcGhpY0gpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYmVnaW5GaWxsKGdyYXBoaWNDb2xvciwgZ3JhcGhpY09wYWNpdHkpO1xuXHRcdFx0XHRcdGlmIChncmFwaGljUmFkaXVzIDw9IDApIHtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuZHJhd1JlY3QoMCwgMCwgZ3JhcGhpY1csIGdyYXBoaWNIKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5kcmF3Um91bmRlZFJlY3QoMCwgMCwgZ3JhcGhpY1csIGdyYXBoaWNILCBncmFwaGljUmFkaXVzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5lbmRGaWxsKCk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFggPSAwO1xuXHRcdFx0XHRtb2RhbExhYmVsLl9vZmZzZXRZID0gMDtcblx0XHRcdFx0bW9kYWxMYWJlbC5sb2NrUG9zaXRpb24gPSBsb2NrUG9zaXRpb247XG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFggPSBvZmZzZXRYO1xuXHRcdFx0XHRtb2RhbExhYmVsLl9vZmZzZXRZID0gb2Zmc2V0WTtcblxuXG5cdFx0XHRcdGlmIChjYWxsYmFjayAhPT0gZmFsc2UgJiYgaXRlbVR5cGUgIT09IFwiYnV0dG9uXCIpIHtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmlucHV0RW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5waXhlbFBlcmZlY3RDbGljayA9IHRydWU7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5wcmlvcml0eUlEID0gMTA7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5ldmVudHMub25JbnB1dERvd24uYWRkKGNhbGxiYWNrLCBtb2RhbExhYmVsKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpdGVtVHlwZSAhPT0gXCJiaXRtYXBUZXh0XCIgJiYgaXRlbVR5cGUgIT09IFwiZ3JhcGhpY3NcIikge1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYnJpbmdUb1RvcCgpO1xuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKG1vZGFsTGFiZWwpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYnJpbmdUb1RvcCgpO1xuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYnJpbmdUb1RvcChtb2RhbExhYmVsKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmFkZChtb2RhbExhYmVsKTtcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmJyaW5nVG9Ub3AobW9kYWxMYWJlbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bW9kYWxHcm91cC52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXSA9IG1vZGFsR3JvdXA7XG5cblx0XHR9LFxuXHRcdHVwZGF0ZU1vZGFsVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSwgaW5kZXgsIGlkKSB7XG5cdFx0XHR2YXIgaXRlbTtcblx0XHRcdGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGluZGV4ICE9PSBudWxsKSB7XG5cdFx0XHRcdGl0ZW0gPSBnYW1lLm1vZGFsc1t0eXBlXS5nZXRDaGlsZEF0KGluZGV4KTtcblx0XHRcdH0gZWxzZSBpZiAoaWQgIT09IHVuZGVmaW5lZCAmJiBpZCAhPT0gbnVsbCkge1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmIChpdGVtLmNvbnRlbnRUeXBlID09PSBcInRleHRcIikge1xuXHRcdFx0XHRpdGVtLnRleHQgPSB2YWx1ZTtcblx0XHRcdFx0aXRlbS51cGRhdGUoKTtcblx0XHRcdFx0aWYgKGl0ZW0ubG9ja1Bvc2l0aW9uID09PSB0cnVlKSB7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpdGVtLnggPSAoKGdhbWUud2lkdGggLyAyKSAtIChpdGVtLndpZHRoIC8gMikpICsgaXRlbS5fb2Zmc2V0WDtcblx0XHRcdFx0XHRpdGVtLnkgPSAoKGdhbWUuaGVpZ2h0IC8gMikgLSAoaXRlbS5oZWlnaHQgLyAyKSkgKyBpdGVtLl9vZmZzZXRZO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwiYml0bWFwVGV4dFwiKSB7XG5cdFx0XHRcdGl0ZW0udGV4dCA9IHZhbHVlO1xuXHRcdFx0XHRpdGVtLnVwZGF0ZVRleHQoKTtcblx0XHRcdFx0aWYgKGl0ZW0ubG9ja1Bvc2l0aW9uID09PSB0cnVlKSB7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpdGVtLnggPSAoKGdhbWUud2lkdGggLyAyKSAtIChpdGVtLndpZHRoIC8gMikpICsgaXRlbS5fb2Zmc2V0WDtcblx0XHRcdFx0XHRpdGVtLnkgPSAoKGdhbWUuaGVpZ2h0IC8gMikgLSAoaXRlbS5oZWlnaHQgLyAyKSkgKyBpdGVtLl9vZmZzZXRZO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwiaW1hZ2VcIikge1xuXHRcdFx0XHRpdGVtLmxvYWRUZXh0dXJlKHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdH0sXG5cdFx0Z2V0TW9kYWxJdGVtOiBmdW5jdGlvbiAodHlwZSwgaW5kZXgpIHtcblx0XHRcdHJldHVybiBnYW1lLm1vZGFsc1t0eXBlXS5nZXRDaGlsZEF0KGluZGV4KTtcblx0XHR9LFxuXHRcdHNob3dNb2RhbDogZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRcdGdhbWUud29ybGQuYnJpbmdUb1RvcChnYW1lLm1vZGFsc1t0eXBlXSk7XG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdC8vIHlvdSBjYW4gYWRkIGFuaW1hdGlvbiBoZXJlXG5cdFx0fSxcblx0XHRoaWRlTW9kYWw6IGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHQvLyB5b3UgY2FuIGFkZCBhbmltYXRpb24gaGVyZVxuXHRcdH0sXG5cdFx0ZGVzdHJveU1vZGFsOiBmdW5jdGlvbiAodHlwZSkge1xuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0uZGVzdHJveSgpO1xuXHRcdFx0ZGVsZXRlIGdhbWUubW9kYWxzW3R5cGVdO1xuXHRcdH1cblx0fTtcbn07XG4iLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxyXG5cclxuY2xhc3MgQmlvZHJvbmUgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuXHJcbiAgICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSwgdXVpZCkge1xyXG4gICAgICBzdXBlcihnYW1lLCB4LCB5LCAnYmlvZHJvbmUnLCBmcmFtZSk7XHJcbiAgICAgICAgICBcclxuICAgICAgLy9zZXR1cCBwaHlzaWNzIHByb3BlcnRpZXNcclxuICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjY1KTtcclxuICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZUJvZHkodGhpcyk7XHJcbiAgICAgIC8vdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XHJcbiAgXHJcbiAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XHJcbiAgICAgIC8vc2V0IHNpemVcclxuICAgICAgdGhpcy53aWR0aCA9IDI3O1xyXG4gICAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xyXG4gICAgICBcclxuICAgICAgLy9zZXQgcm90YXRpb24gKHRoaXMgc2hvdWxkIGJlIGJhc2VkIG9uIHRoZSBiYXNlIHRoaXMgYmlvZHJvbmUgb2NjdXBpZXMpXHJcbiAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSAqIC0xO1xyXG4gIFxyXG4gICAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSB0aGlzLmdhbWUuc2VwdGlrb24ucGl4ZWxzVG9UaWxlKHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XHJcbiAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICBcclxuICAgIGhpZ2hsaWdodE9uKCkge1xyXG4gICAgICB0aGlzLnRpbnQgPSAweEZGNTUwMDtcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLmFscGhhID0gMTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaGlnaGxpZ2h0T2ZmKCkge1xyXG4gICAgICB0aGlzLnRpbnQgPSAweGZmZmZmZjtcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLmFscGhhID0gMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0TGVnYWxNb3ZlcygpIHtcclxuICAgICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gdGhpcy5nYW1lLnNlcHRpa29uLnBpeGVsc1RvVGlsZSh0aGlzLngsIHRoaXMueSk7XHJcbiAgICAgIHZhciBjdXJyZW50TGVnYWxNb3ZlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5nZXRMZWdhbE1vdmVzKHRoaXMuZ2FtZS5nbG9iYWwubGFzdERpY2VSb2xsLCB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMpO1xyXG4gICAgICB2YXIgbGVnYWxUaWxlc0FycmF5ID0gW107XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgZm9yICh2YXIgdGlsZSBpbiBjdXJyZW50TGVnYWxNb3Zlcykge1xyXG4gICAgICAgICAgbGVnYWxUaWxlc0FycmF5LnB1c2godGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVtjdXJyZW50TGVnYWxNb3Zlc1t0aWxlXS54XVtjdXJyZW50TGVnYWxNb3Zlc1t0aWxlXS55XSk7XHJcbiAgICAgICAgICAvL2xlZ2FsVGlsZXNBcnJheVtsZWdhbFRpbGVzQXJyYXkubGVuZ3RoLTFdLmFscGhhID0gMC41O1xyXG4gICAgICAgICAgLy9sZWdhbFRpbGVzQXJyYXlbbGVnYWxUaWxlc0FycmF5Lmxlbmd0aC0xXS5sZWdhbEZvciA9IHRoaXM7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHJldHVybiBsZWdhbFRpbGVzQXJyYXk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG1vdmUoY29vcmRpbmF0ZXMpIHtcclxuICAgIFxyXG4gICAgICAvLyBDbGVhciBcImxlZ2FsRm9yXCJcclxuICAgICAgZm9yICh2YXIgdGlsZSBpbiB0aGlzLmxlZ2FsVGlsZXNBcnJheSkge1xyXG4gICAgICAgICAgdGhpcy5sZWdhbFRpbGVzQXJyYXlbdGlsZV0uYWxwaGEgPSAwO1xyXG4gICAgICAgICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlc0FycmF5W3RpbGVdLmxlZ2FsRm9yO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBNb3ZlIHRvIG5ldyBob21lXHJcbiAgICAgIC8vIE5lZWQgdG8gYWRkIGEgY2hlY2sgZm9yIGFybWVkIG9wcG9uZW50cyAoYmlvZHJvbmVzL2VzcGlvbmFnZWQgY2xvbmVzL2Nsb25lcyBpbiBlbmVteSBiYXNlLCBldGMuKVxyXG4gICAgICB2YXIgcG9pbnRzID0gdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVUb1BpeGVscyhjb29yZGluYXRlcy54LCBjb29yZGluYXRlcy55KTtcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IGZhbHNlO1xyXG4gICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLnkgLSBwb2ludHMueSArIHRoaXMueCAtIHBvaW50cy54KS50b0ZpeGVkKDEpO1xyXG4gICAgICBcclxuICAgICAgLy8gVXBkYXRlIHRoZSBwZXJzb25uZWwgY29vcmRpbmF0ZSBwcm9wZXJ0eVxyXG4gICAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XHJcbiAgICAgIFxyXG4gICAgICAvLyBXYWl0IGZvciBhbmltYXRpb24gdG8gY29tcGxldGUsIHRoZW4gcHJvY2VzcyB0aWxlIHRyaWdnZXJcclxuICAgICAgdmFyIHR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzKS50bygge3g6cG9pbnRzLngsIHk6cG9pbnRzLnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XHJcbiAgICAgIHR3ZWVuLm9uQ29tcGxldGUuYWRkKHRoaXMuZ2FtZS5zZXB0aWtvbi50cmlnZ2VyVGlsZSwgdGhpcy5nYW1lLnNlcHRpa29uKTtcclxuICAgICAgXHJcbiAgICAgIC8vIENsZWFyIHRoaXMuY3VycmVudExlZ2FsTW92ZXNcclxuICAgICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlc0FycmF5O1xyXG4gICAgICBkZWxldGUgdGhpcy5jdXJyZW50TGVnYWxNb3ZlczsgICAgXHJcbiAgICB9XHJcbiAgICAgIFxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBCaW9kcm9uZTtcclxuICAiLCJcbmNsYXNzIENsaWVudCB7XG4gICAgXG5cdGNvbnN0cnVjdG9yKHNlcHRpa29uKSB7XG4gICAgICAgIFxuXHRcdHRoaXMuc29ja2V0ID0gaW8uY29ubmVjdCgpO1xuICAgICAgICB0aGlzLnNlcHRpa29uID0gdGhpcy5zb2NrZXQuc2VwdGlrb24gPSBzZXB0aWtvbjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdsb2cnLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMT0c6ICcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCd1cGRhdGUnLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGlmKGRhdGEudHlwZSA9PSBcInBlcnNvbm5lbFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi51cGRhdGVQZXJzb25uZWwoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihkYXRhLnR5cGUgPT0gXCJvcmRuYW5jZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi51cGRhdGVPcmRuYW5jZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGRhdGEudHlwZSA9PSBcInJlc291cmNlc1wiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi51cGRhdGVSZXNvdXJjZXMoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihkYXRhLnR5cGUgPT0gXCJ0aWxlc1wiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi51cGRhdGVUaWxlcyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT0gXCJkaWNlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLmdhbWUuZGljZS5zZXRWYWx1ZShkYXRhLmRldGFpbHMudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PSBcImluZm9cIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2VwdGlrb24udXBkYXRlSW5mbyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ3JlcXVlc3QnLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSRVFVRVNUOiAnKTtcbiAgICAgICAgICAgIHN3aXRjaChkYXRhLmRldGFpbHMudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJhc2tTdGFydFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLnNob3dNb2RhbCgnYXNrU3RhcnQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2FjdGlvbicsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBQ1RJT046IFwiKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YodGhpcy5zZXB0aWtvbltkYXRhLmNhbGxiYWNrXSkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb25bZGF0YS5jYWxsYmFja10oZGF0YS5kZXRhaWxzKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SOiBubyBtZXRob2QgZm91bmQgY2FsbGVkIHNlcHRpa29uLlwiICsgZGF0YS5jYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXHR9XG5cblx0YXNrTmV3UGxheWVyKCkge1xuXHRcdHRoaXMuc29ja2V0LmVtaXQoJ25ld1BsYXllcicsIHt1dWlkOmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXB0VVVJRCcpfSk7XG5cdH1cbiAgICBcbiAgICBzZW5kSW5wdXQocGF5bG9hZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2VuZGluZyBpbnB1dCcpO1xuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdpbnB1dCcsIHBheWxvYWQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50O1xuIiwiLy9Eb2N1bWVudGF0aW9uIGZvciBQaGFzZXIncyAoMi42LjIpIHNwcml0ZXM6OiBwaGFzZXIuaW8vZG9jcy8yLjYuMi9QaGFzZXIuU3ByaXRlLmh0bWxcblxuY2xhc3MgQ2xvbmUgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lLCB1dWlkKSB7XG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2Nsb25lJywgZnJhbWUpO1xuICAgICAgICBcbiAgICAvL3NldHVwIHBoeXNpY3MgcHJvcGVydGllc1xuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC42NSk7XG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZUJvZHkodGhpcyk7XG4gICAgLy90aGlzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcblxuICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgLy9zZXQgc2l6ZVxuICAgIHRoaXMud2lkdGggPSAyNztcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xuICAgIFxuICAgIC8vc2V0IHJvdGF0aW9uICh0aGlzIHNob3VsZCBiZSBiYXNlZCBvbiB0aGUgYmFzZSB0aGlzIGNsb25lIG9jY3VwaWVzKVxuICAgIHRoaXMuYW5nbGUgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSAqIC0xO1xuXG4gICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gdGhpcy5nYW1lLnNlcHRpa29uLnBpeGVsc1RvVGlsZSh0aGlzLngsIHRoaXMueSk7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XG5cbiAgfVxuICBcbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxuXG4gIGhpZ2hsaWdodE9uKCkge1xuICAgIHRoaXMudGludCA9IDB4RkY1NTAwO1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS5hbHBoYSA9IDE7XG4gIH1cbiAgXG4gIGhpZ2hsaWdodE9mZigpIHtcbiAgICB0aGlzLnRpbnQgPSAweGZmZmZmZjtcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0uYWxwaGEgPSAwO1xuICB9XG4gIFxuICBnZXRMZWdhbE1vdmVzKCkge1xuICAgIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5waXhlbHNUb1RpbGUodGhpcy54LCB0aGlzLnkpO1xuICAgIHZhciBjdXJyZW50TGVnYWxNb3ZlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5nZXRMZWdhbE1vdmVzKHRoaXMuZ2FtZS5nbG9iYWwubGFzdERpY2VSb2xsLCB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMpO1xuICAgIHZhciBsZWdhbFRpbGVzQXJyYXkgPSBbXTtcbiAgICBcbiAgICBcbiAgICBmb3IgKHZhciB0aWxlIGluIGN1cnJlbnRMZWdhbE1vdmVzKSB7XG4gICAgICAgIGxlZ2FsVGlsZXNBcnJheS5wdXNoKHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbY3VycmVudExlZ2FsTW92ZXNbdGlsZV0ueF1bY3VycmVudExlZ2FsTW92ZXNbdGlsZV0ueV0pO1xuICAgICAgICAvL2xlZ2FsVGlsZXNBcnJheVtsZWdhbFRpbGVzQXJyYXkubGVuZ3RoLTFdLmFscGhhID0gMC41O1xuICAgICAgICAvL2xlZ2FsVGlsZXNBcnJheVtsZWdhbFRpbGVzQXJyYXkubGVuZ3RoLTFdLmxlZ2FsRm9yID0gdGhpcztcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGxlZ2FsVGlsZXNBcnJheTtcbiAgfVxuICBcbiAgbW92ZShjb29yZGluYXRlcykge1xuICBcbiAgICAvLyBDbGVhciBcImxlZ2FsRm9yXCJcbiAgICBmb3IgKHZhciB0aWxlIGluIHRoaXMubGVnYWxUaWxlc0FycmF5KSB7XG4gICAgICAgIHRoaXMubGVnYWxUaWxlc0FycmF5W3RpbGVdLmFscGhhID0gMDtcbiAgICAgICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlc0FycmF5W3RpbGVdLmxlZ2FsRm9yO1xuICAgIH1cbiAgICBcbiAgICAvLyBNb3ZlIHRvIG5ldyBob21lXG4gICAgLy8gTmVlZCB0byBhZGQgYSBjaGVjayBmb3IgYXJtZWQgb3Bwb25lbnRzIChiaW9kcm9uZXMvZXNwaW9uYWdlZCBjbG9uZXMvY2xvbmVzIGluIGVuZW15IGJhc2UsIGV0Yy4pXG4gICAgdmFyIHBvaW50cyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlVG9QaXhlbHMoY29vcmRpbmF0ZXMueCwgY29vcmRpbmF0ZXMueSk7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IGZhbHNlO1xuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMueSAtIHBvaW50cy55ICsgdGhpcy54IC0gcG9pbnRzLngpLnRvRml4ZWQoMSk7XG4gICAgXG4gICAgLy8gVXBkYXRlIHRoZSBwZXJzb25uZWwgY29vcmRpbmF0ZSBwcm9wZXJ0eVxuICAgIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSB0cnVlO1xuICAgIFxuICAgIC8vIFdhaXQgZm9yIGFuaW1hdGlvbiB0byBjb21wbGV0ZSwgdGhlbiBwcm9jZXNzIHRpbGUgdHJpZ2dlclxuICAgIHZhciB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcykudG8oIHt4OnBvaW50cy54LCB5OnBvaW50cy55fSwgKGRpc3RhbmNlKjExKSwgUGhhc2VyLkVhc2luZy5DdWJpYy5PdXQsIHRydWUpO1xuICAgIHR3ZWVuLm9uQ29tcGxldGUuYWRkKHRoaXMuZ2FtZS5zZXB0aWtvbi50cmlnZ2VyVGlsZSwgdGhpcy5nYW1lLnNlcHRpa29uKTtcbiAgICBcbiAgICAvLyBDbGVhciB0aGlzLmN1cnJlbnRMZWdhbE1vdmVzXG4gICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlc0FycmF5O1xuICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRMZWdhbE1vdmVzOyAgICBcbiAgfVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBDbG9uZTtcbiIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXHJcbmNsYXNzIENvbmZpcm0gZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuXHJcbiAgICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5KSB7ICBcclxuICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ3RleHRfZ28nKTtcclxuICBcclxuICAgICAgLy9zZXR1cCBwaHlzaWNzIHByb3BlcnRpZXNcclxuICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xyXG4gICAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlQm9keSh0aGlzKTtcclxuICBcclxuICAgICAgLy9zZXQgY2xpY2sgZXZlbnRcclxuICAgICAgdGhpcy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmV2ZW50cy5vbklucHV0RG93bi5hZGQodGhpcy5jbGlja2VkLCB0aGlzKTtcclxuICBcclxuICAgICAgLy9zZXQgc2l6ZVxyXG4gICAgICB0aGlzLndpZHRoID0gNTA7XHJcbiAgICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XHJcbiAgICAgIC8vIHRoaXMuZmlsdGVycyA9IFt0aGlzLmdhbWUuYWRkLmZpbHRlcignR3JheScpXTtcclxuICAgICAgLy8gdGhpcy5hbHBoYSA9IDAuNTtcclxuICAgIH1cclxuICBcclxuICAgIGNsaWNrZWQgKCkge1xyXG4gICAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICdjb25maXJtQ2xpY2tlZCd9KTtcclxuICAgIH1cclxuICBcclxuICAgIGVuYWJsZSgpIHtcclxuICAgICAgICAvLyB0aGlzLmFscGhhID0gMTtcclxuICAgICAgICB0aGlzLmZpbHRlcnMgPSBudWxsO1xyXG4gICAgICAgIC8vIHRoaXMuaW5wdXRFbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICBcclxuICAgIGRpc2FibGUoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5hbHBoYSA9IDAuNTtcclxuICAgICAgICAvLyB0aGlzLmZpbHRlcnMgPSBbdGhpcy5nYW1lLmFkZC5maWx0ZXIoJ0dyYXknKV07XHJcbiAgICAgICAgLy8gdGhpcy5pbnB1dEVuYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgQ29uZmlybTtcclxuICAiLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxuY2xhc3MgQ3Jvc3NoYWlycyBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUpIHtcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnY3Jvc3NoYWlycycsIGZyYW1lKTtcblxuICAgIC8vc2V0IHNpemVcbiAgICB0aGlzLndpZHRoID0gMzU7IFxuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XG5cbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gIH1cblxuICB1cGRhdGUoKXtcbiAgICB0aGlzLnggPSB0aGlzLmdhbWUuaW5wdXQubW91c2VQb2ludGVyLng7XG4gICAgdGhpcy55ID0gdGhpcy5nYW1lLmlucHV0Lm1vdXNlUG9pbnRlci55O1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3Jvc3NoYWlycztcbiIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXG5jbGFzcyBEaWNlIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSkgeyAgXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2RpY2UnLCBmcmFtZSk7XG5cbiAgICAvL3NldHVwIHBoeXNpY3MgcHJvcGVydGllc1xuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlQm9keSh0aGlzKTtcblxuICAgIC8vc2V0IGNsaWNrIGV2ZW50XG4gICAgdGhpcy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuZXZlbnRzLm9uSW5wdXREb3duLmFkZCh0aGlzLmNsaWNrZWQsIHRoaXMpO1xuXG4gICAgLy9zZXQgc2l6ZVxuICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xuICAgIC8vIHRoaXMuZmlsdGVycyA9IFt0aGlzLmdhbWUuYWRkLmZpbHRlcignR3JheScpXTtcbiAgICAvLyB0aGlzLmFscGhhID0gMC41O1xuICAgIFxuICAgIHRoaXMudmFsdWUgPSAxMDtcbiAgICB0aGlzLmZyYW1lID0gdGhpcy52YWx1ZS0xO1xuICB9XG5cbiAgY2xpY2tlZCAoKSB7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAnZGljZUNsaWNrZWQnfSk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgICB0aGlzLmFscGhhID0gMTtcbiAgICAgIHRoaXMuZmlsdGVycyA9IG51bGw7XG4gICAgICB0aGlzLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgICAgLy8gdGhpcy5hbHBoYSA9IDAuNTtcbiAgICAgIC8vIHRoaXMuZmlsdGVycyA9IFt0aGlzLmdhbWUuYWRkLmZpbHRlcignR3JheScpXTtcbiAgICAgIC8vIHRoaXMuaW5wdXRFbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmZyYW1lID0gdmFsdWUgLSAxO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpY2U7XG4iLCJjbGFzcyBNYXN0ZXIge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoKSB7IFxuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXN0ZXI7IiwiY2xhc3MgT3JkbmFuY2UgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lLCB0eXBlLCB1dWlkKSB7XG4gICAgdmFyIG9yZEZyYW1lO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcInNoaWVsZFwiOlxuICAgICAgICBvcmRGcmFtZSA9IDQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImJpb2Ryb25lXCI6XG4gICAgICAgIG9yZEZyYW1lID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2F0ZWxsaXRlXCI6XG4gICAgICAgIG9yZEZyYW1lID0gNTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicm9ja2V0XCI6XG4gICAgICAgIG9yZEZyYW1lID0gMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQmFkIG9yZG5hbmNlIHR5cGVcIik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnb3JkbmFuY2UnLCBvcmRGcmFtZSk7XG4gICAgICAgIFxuICAgIC8vc2V0dXAgcGh5c2ljcyBwcm9wZXJ0aWVzXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGVCb2R5KHRoaXMpO1xuICAgIC8vdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG5cbiAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgLy9zZXQgc2l6ZVxuICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xuICAgIFxuICAgIC8vc2V0IHJvdGF0aW9uICh0aGlzIHNob3VsZCBiZSBiYXNlZCBvbiB0aGUgYmFzZSB0aGlzIGNsb25lIG9jY3VwaWVzKVxuICAgIHRoaXMuYW5nbGUgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSAqIC0xO1xuXG4gICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gdGhpcy5nYW1lLnNlcHRpa29uLnBpeGVsc1RvVGlsZSh0aGlzLngsIHRoaXMueSk7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XG5cbiAgfVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JkbmFuY2U7IiwiY2xhc3MgUGVyc29ubmVsIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7XG4gICAgICAgIHN1cGVyKGdhbWUsIHgsIHksICdjbG9uZScsIGZyYW1lKTsgIFxuICAgIH1cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlcnNvbm5lbDsiLCJjbGFzcyBSZXNvdXJjZXMge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoKSB7IFxuICAgIHRoaXMucmVzb3VyY2VFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIE9YWUdFTjogMCxcbiAgICAgICAgUk9DS0VUOiAxLFxuICAgICAgICBNRVRBTDogMixcbiAgICAgICAgRU5FUkdZOiAzLFxuICAgICAgICBCSU9NQVNTOiA0LFxuICAgICAgICBCSU9EUk9ORTogNSxcbiAgICAgICAgVVJBTklVTTogNlxuICAgIH0pO1xuICAgIHRoaXMucmVzb3VyY2VzID0ge307XG4gICAgZm9yKHZhciB0eXBlIGluIHRoaXMucmVzb3VyY2VFbnVtKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VzW3RoaXMucmVzb3VyY2VFbnVtW3R5cGVdXSA9IDU7XG4gICAgfVxuICB9XG4gIFxuICBjaGVjayh0eXBlLCBjb3VudCkge1xuICAgIGlmKHRoaXMucmVzb3VyY2VzW3RoaXMucmVzb3VyY2VFbnVtW3R5cGVdXSA+IGNvdW50KVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICBnZXRDb3VudCh0eXBlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzW3R5cGVdO1xuICB9XG4gICAgXG4gIGFkZCh0eXBlLCBjb3VudCkge1xuICB9XG4gIFxuICByZW1vdmUodHlwZSwgY291bnQpIHtcbiAgICB0aGlzLnJlc291cmNlc1t0eXBlXSAtPSBjb3VudDtcbiAgfVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VzOyIsImltcG9ydCBDbG9uZSBmcm9tICcuLi9wcmVmYWJzL2Nsb25lJztcbmltcG9ydCBCaW9kcm9uZSBmcm9tICcuLi9wcmVmYWJzL2Jpb2Ryb25lJztcbmltcG9ydCBPcmRuYW5jZSBmcm9tICcuLi9wcmVmYWJzL29yZG5hbmNlJztcblxuY2xhc3MgU2VwdGlrb24ge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoZ2FtZSkgeyBcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIHRoaXMucGxheWVyID0geyBcbiAgICAgICAgcGVyc29ubmVsQXJyYXk6IFtdLFxuICAgICAgICBvcmRuYW5jZUFycmF5OiBbXVxuICAgIH07XG4gICAgdGhpcy5vcHBvbmVudCA9IHtcbiAgICAgICAgcGVyc29ubmVsQXJyYXk6IFtdLFxuICAgICAgICBvcmRuYW5jZUFycmF5OiBbXVxuICAgIH07XG4gICAgXG4gICAgdGhpcy5zaG93blRpbGVzID0gW107XG4gICAgdGhpcy50aWxlQXJyYXkgPSBbXTtcblxuICAgIHRoaXMubGVnYWxNb3ZlcyA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RlZFRvTW92ZSA9IG51bGw7XG4gICAgdGhpcy5sZWdhbEd1bm5lcnMgPSBudWxsO1xuXG4gICAgdGhpcy5jaG9vc2luZ1RhcmdldHMgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkR3VubmVycyA9IFtdO1xuICB9XG5cbiAgICB1cGRhdGVQZXJzb25uZWwoZGF0YSkge1xuICAgICAgICAvLyBBREQgcGVyc29ubmVsXG4gICAgICAgIC8vIFJFTU9WRSBwZXJzb25uZWxcbiAgICAgICAgLy8gTU9WRSBwZXJzb25uZWxcblxuICAgICAgICBpZiAoZGF0YS5kZXRhaWxzLmFjdGlvbiA9PT0gXCJhZGRcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGRpbmcgcGVyc29ubmVsXCIpO1xuICAgICAgICAgICAgdGhpcy5hZGRQZXJzb25uZWwoZGF0YS5kZXRhaWxzLnBlcnNvbm5lbCwgZGF0YS5kZXRhaWxzLnBsYXllcklEKTtcbiAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAvLyAgICAgbGV0IG15UGVyc29uID0gdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXlbal07XG4gICAgICAgICAgICAvLyAgICAgaWYgKG15UGVyc29uLnV1aWQgPT09IHAudXVpZCkge1xuICAgICAgICAgICAgLy8gICAgICAgICBtYXRjaEZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIC8vIHZhciBjdXJyZW50UGVyc29ubmVsID0gbnVsbDtcbiAgICAgICAgLy8gaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5kZXRhaWxzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gICAgIGRhdGEuZGV0YWlscyA9IFtkYXRhLmRldGFpbHNdO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gaWYgKHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXkubGVuZ3RoID09PSAwICYmIGRhdGEuZGV0YWlscy5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgLy8gICAgIGZvciAodmFyIGkgaW4gZGF0YS5kZXRhaWxzKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5hZGRDbG9uZShkYXRhLmRldGFpbHNbaV0pO1xuICAgICAgICAvLyAgICAgfSAgICAgIFxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgZm9yICh2YXIgcCBpbiB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5KSB7XG4gICAgICAgIC8vICAgICAgICAgY3VycmVudFBlcnNvbm5lbCA9IHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXlbcF07XG4gICAgICAgIC8vICAgICAgICAgZm9yICh2YXIgZCBpbiBkYXRhLmRldGFpbHMpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGN1cnJlbnRQZXJzb25uZWwudXVpZCA9PSBkYXRhLmRldGFpbHNbZF0udXVpZCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGVyc29ubmVsKGRhdGEuZGV0YWlsc1tkXSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICB1cGRhdGVPcmRuYW5jZShkYXRhKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHVwZGF0ZVJlc291cmNlcyhkYXRhKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHVwZGF0ZVRpbGVzKGRhdGEpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gIHNob3dNb2RhbCh0eXBlKSB7XG4gICAgdGhpcy5nYW1lLm1vZGFsLnNob3dNb2RhbCh0eXBlKTtcbiAgfVxuICBcbiAgZGljZVJvbGxlZChkZXRhaWxzKSB7XG4gICAgdGhpcy5nYW1lLmRpY2Uuc2V0VmFsdWUoZGV0YWlscy52YWx1ZSk7XG4gICAgdGhpcy5sZWdhbE1vdmVzID0gZGV0YWlscy5nYW1lUGllY2VzO1xuICAgIHZhciBwb2ludEFycmF5ID0gW107XG4gICAgLy8gY29uc29sZS5sb2coZGV0YWlscy5nYW1lUGllY2VzWzBdLm9yaWdpbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZXRhaWxzLmdhbWVQaWVjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9pbnRBcnJheS5wdXNoKHsgeDogZGV0YWlscy5nYW1lUGllY2VzW2ldLm9yaWdpbi54LCB5OiBkZXRhaWxzLmdhbWVQaWVjZXNbaV0ub3JpZ2luLnkgfSk7XG4gICAgfVxuICAgIHRoaXMuc2hvd1RpbGVzKHBvaW50QXJyYXksIDB4RjYzNjM2KTtcbiAgfVxuXG4gIG9mZmVyRGljZSgpIHtcbiAgICAgIHRoaXMuZ2FtZS5kaWNlLmVuYWJsZSgpO1xuICB9XG5cbiAgdGFrZURpY2UoKSB7XG4gICAgICB0aGlzLmdhbWUuZGljZS5kaXNhYmxlKCk7XG4gIH1cblxuICBvZmZlckd1bm5lcnMoZGF0YSkge1xuICAgICAgdGhpcy5jaG9vc2luZ1RhcmdldHMgPSB0cnVlO1xuICAgICAgdGhpcy5sZWdhbEd1bm5lcnMgPSBkYXRhLmd1bm5lcnM7XG4gICAgICB0aGlzLmdhbWUuZ28uZW5hYmxlKCk7XG4gICAgICBjb25zb2xlLmxvZyhcImFuaW1hdGUgc29tZSBpbmRpY2F0aW9uIG9mIHZpYWJsZSBndW5uZXJzIG9uIHRoZSBzdXJmYWNlLiBNYXliZSBhIHBvaW50ZXIgYm91bmNpbmcgb3ZlciB0aGVtP1wiKTtcbiAgICAgIC8vVE9ETzogRW1pdCBhbiBpbmRpY2F0b3IgZm9yIHNlbGVjdGluZyBhIGd1bm5lclxuICB9XG4gIFxuICBhZGRQZXJzb25uZWwocGVyc29ubmVsLCBwbGF5ZXJJRCkge1xuICAgIGxldCBwb2ludCA9IHRoaXMudGlsZVRvUGl4ZWxzKHBlcnNvbm5lbC54LCBwZXJzb25uZWwueSk7XG4gICAgbGV0IG5ld1BlcnNvbm5lbCA9IG51bGw7XG4gICAgaWYgKHBlcnNvbm5lbC50eXBlRW51bS5DTE9ORSA9PT0gcGVyc29ubmVsLnR5cGUpIHtcbiAgICAgICAgbmV3UGVyc29ubmVsID0gbmV3IENsb25lKHRoaXMuZ2FtZSwgcG9pbnQueCwgcG9pbnQueSwgbnVsbCwgcGVyc29ubmVsLnV1aWQpO1xuICAgIH0gZWxzZSBpZiAocGVyc29ubmVsLnR5cGVFbnVtLkJJT0RST05FID09PSBwZXJzb25uZWwudHlwZSkge1xuICAgICAgICBuZXdQZXJzb25uZWwgPSBuZXcgQmlvZHJvbmUodGhpcy5nYW1lLCBwb2ludC54LCBwb2ludC55LCBudWxsLCBwZXJzb25uZWwudXVpZCk7XG4gICAgfVxuICAgIGlmKHBsYXllcklEID09IHRoaXMucGxheWVyLmlkKSB7XG4gICAgICAgIHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5LnB1c2gobmV3UGVyc29ubmVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5LnB1c2gobmV3UGVyc29ubmVsKTtcbiAgICB9XG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKG5ld1BlcnNvbm5lbCk7XG4gIH1cblxuICBhZGRPcmRuYW5jZShkZXRhaWxzKSB7XG4gICAgdmFyIHBvaW50ID0gdGhpcy50aWxlVG9QaXhlbHMoZGV0YWlscy5wb2ludC54LCBkZXRhaWxzLnBvaW50LnkpO1xuICAgIHZhciBvcmQgPSBuZXcgT3JkbmFuY2UodGhpcy5nYW1lLCBwb2ludC54LCBwb2ludC55LCBudWxsLCBkZXRhaWxzLnR5cGUsIGRldGFpbHMudXVpZCk7XG4gICAgaWYoZGV0YWlscy5wbGF5ZXJJRCA9PSB0aGlzLnBsYXllci5pZCkge1xuICAgICAgICB0aGlzLnBsYXllci5vcmRuYW5jZUFycmF5LnB1c2gob3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wcG9uZW50Lm9yZG5hbmNlQXJyYXkucHVzaChvcmQpO1xuICAgIH1cbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQob3JkKTtcbiAgfVxuXG4gIG1vdmVQZXJzb25uZWwoZGF0YSkge1xuICAgIHZhciB0d2VlbiA9IG51bGw7XG4gICAgdmFyIGRpc3RhbmNlID0gbnVsbDtcbiAgICB2YXIgcG9pbnQgPSB0aGlzLnRpbGVUb1BpeGVscyhkYXRhLngsIGRhdGEueSk7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheSkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0udXVpZCA9PSBkYXRhLnV1aWQpIHtcbiAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueSAtIHBvaW50LnkgKyB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtpXS54IC0gcG9pbnQueCkudG9GaXhlZCgxKTtcbiAgICAgICAgICAgIHR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtpXSkudG8oIHt4OnBvaW50LngsIHk6cG9pbnQueX0sIChkaXN0YW5jZSoxMSksIFBoYXNlci5FYXNpbmcuQ3ViaWMuT3V0LCB0cnVlKTtcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgdGlsZS4gTm90IHF1aXRlIHN1cmUgaG93IHRvIGRvIHRoaXMgeWV0LlxuICAgICAgICAgICAgLy90d2Vlbi5vbkNvbXBsZXRlLmFkZCh0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICdtb3ZlQ29tcGxldGUnLCB4OnBhcnNlSW50KG9iai50aWxlWCksIHk6cGFyc2VJbnQob2JqLnRpbGVZKX0pOywgdGhpcy5nYW1lLnNlcHRpa29uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBqIGluIHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXkpIHtcbiAgICAgICAgaWYgKHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXlbal0udXVpZCA9PSBkYXRhLnV1aWQpIHtcbiAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheVtqXS55IC0gcG9pbnQueSArIHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXlbal0ueCAtIHBvaW50LngpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheVtqXSkudG8oIHt4OnBvaW50LngsIHk6cG9pbnQueX0sIChkaXN0YW5jZSoxMSksIFBoYXNlci5FYXNpbmcuQ3ViaWMuT3V0LCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdmVPcmRuYW5jZShkYXRhKSB7XG4gICAgdmFyIHR3ZWVuID0gbnVsbDtcbiAgICB2YXIgZGlzdGFuY2UgPSBudWxsO1xuICAgIHZhciBwb2ludCA9IG51bGw7XG4gICAgZm9yICh2YXIgZGF0YUluZGV4ID0gMDsgZGF0YUluZGV4IDwgZGF0YS5sZW5ndGg7IGRhdGFJbmRleCsrKSB7XG4gICAgICAgIHBvaW50ID0gdGhpcy50aWxlVG9QaXhlbHMoZGF0YVtkYXRhSW5kZXhdLngsIGRhdGFbZGF0YUluZGV4XS55KTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnBsYXllci5vcmRuYW5jZUFycmF5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheVtpXS51dWlkID09IGRhdGFbZGF0YUluZGV4XS51dWlkKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLnBsYXllci5vcmRuYW5jZUFycmF5W2ldLnkgLSBwb2ludC55ICsgdGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheVtpXS54IC0gcG9pbnQueCkudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheVtpXSkudG8oIHt4OnBvaW50LngsIHk6cG9pbnQueX0sIChkaXN0YW5jZSoxMSksIFBoYXNlci5FYXNpbmcuQ3ViaWMuT3V0LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBqIGluIHRoaXMub3Bwb25lbnQub3JkbmFuY2VBcnJheSkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3Bwb25lbnQub3JkbmFuY2VBcnJheVtqXS51dWlkID09IGRhdGFbZGF0YUluZGV4XS51dWlkKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLm9wcG9uZW50Lm9yZG5hbmNlQXJyYXlbal0ueSAtIHBvaW50LnkgKyB0aGlzLm9wcG9uZW50Lm9yZG5hbmNlQXJyYXlbal0ueCAtIHBvaW50LngpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMub3Bwb25lbnQub3JkbmFuY2VBcnJheVtqXSkudG8oIHt4OnBvaW50LngsIHk6cG9pbnQueX0sIChkaXN0YW5jZSoxMSksIFBoYXNlci5FYXNpbmcuQ3ViaWMuT3V0LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgcmVtb3ZlUGVyc29ubmVsKGRhdGEpIHtcbiAgICAgIHZhciBwZXJzb25uZWxUb0Rlc3Ryb3k7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnV1aWQgPT0gZGF0YS51dWlkKSB7XG4gICAgICAgICAgICAgIHBlcnNvbm5lbFRvRGVzdHJveSA9IHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldO1xuICAgICAgICAgICAgICB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheS5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgICAgcGVyc29ubmVsVG9EZXN0cm95LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVtb3ZlQWxsUGVyc29ubmVsKCl7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdhbWUuYm9hcmRHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0aGlzLmdhbWUuYm9hcmRHcm91cC5jaGlsZHJlbltpXS5jb25zdHJ1Y3RvciA9PSBDbG9uZSl7XG4gICAgICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5jaGlsZHJlbltpXS5kZXN0cm95KCk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIHVwZGF0ZVBsYXllcihkZXRhaWxzKSB7XG4gICAgZm9yICh2YXIgaSBpbiBkZXRhaWxzKSB7XG4gICAgICAgIHRoaXMucGxheWVyW2ldID0gZGV0YWlsc1tpXTtcbiAgICB9XG5cbiAgICAvLyBERUJVRyBCTE9DS1xuICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ3RpbGVDbGlja2VkJywgeDo3LCB5OjB9KTtcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICd0aWxlQ2xpY2tlZCcsIHg6NywgeToxOX0pO1xuICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ3RpbGVDbGlja2VkJywgeDo2LCB5OjEwfSk7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAndGlsZUNsaWNrZWQnLCB4OjQsIHk6MTB9KTtcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICd0aWxlQ2xpY2tlZCcsIHg6MCwgeToxMH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICd0aWxlQ2xpY2tlZCcsIHg6MjMsIHk6MjB9KTtcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICd0aWxlQ2xpY2tlZCcsIHg6MjMsIHk6MX0pO1xuICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ3RpbGVDbGlja2VkJywgeDoyNCwgeToxMH0pO1xuICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ3RpbGVDbGlja2VkJywgeDoyNiwgeToxMH0pO1xuICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ3RpbGVDbGlja2VkJywgeDozMCwgeToxMH0pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICBcbiAgfVxuXG4gIGluaXRSZXNvdXJjZXMoKSB7XG4gICAgdmFyIGN1cnJlbnRSZWMgPSBudWxsO1xuICAgIHZhciBncmFwaGljcyA9IHRoaXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XG4gICAgLy9ncmFwaGljcy5saW5lU3R5bGUoNCwgMHhmZmQ5MDAsIDEpO1xuICAgIGdyYXBoaWNzLmJlZ2luRmlsbCgweGZmZmZmZiwgMSk7XG4gICAgZ3JhcGhpY3MuZHJhd1JvdW5kZWRSZWN0KDEwMCwgMTAwLCB0aGlzLnRpbGVXaWR0aC00LCB0aGlzLnRpbGVIZWlnaHQtNCwgMTQpO1xuXG4gICAgZm9yICh2YXIgYyBpbiB0aGlzLnRpbGVBcnJheSkge1xuICAgICAgICBmb3IgKHZhciByIGluIHRoaXMudGlsZUFycmF5W2NdKSB7XG4gICAgICAgICAgICBpZih0aGlzLnRpbGVBcnJheVtjXVtyXS50aWxlT3duZXIgPT0gdGhpcy5wbGF5ZXIuaWQgJiYgdGhpcy50aWxlQXJyYXlbY11bcl0udGlsZVR5cGUgPT0gXCJ3YXJlaG91c2VcIikge1xuICAgICAgICAgICAgICAgIGlmIChyIDwgNSB8fCByID4gMTUpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYyA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKHRoaXMudGlsZUFycmF5W2NdW3JdLngrKHRoaXMudGlsZUFycmF5W2NdW3JdLndpZHRoLzIpLCB0aGlzLnRpbGVBcnJheVtjXVtyXS55Kyh0aGlzLnRpbGVBcnJheVtjXVtyXS53aWR0aC8yKSwgZ3JhcGhpY3MuZ2VuZXJhdGVUZXh0dXJlKCkpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLmFuZ2xlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjQwKS0yMDtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYy5hbmNob3Iuc2V0VG8oMC41KTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnRpbGVBcnJheVtjXVtyXS50aWxlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVuZXJneVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4ZmNlMzE1O1xuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm94eWdlblwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4MDBiMWYwO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJvY2tldFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4ZTgyYTJjO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1ldGFsXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYy50aW50ID0gMHhmZmZmZmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYmlvbWFzc1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4OGFjMzQyO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJpb2Ryb25lXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYy50aW50ID0gMHg5ZjNhOWI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwidXJhbml1bVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4ZjM2NTIwO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFkZChjdXJyZW50UmVjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ3JhcGhpY3MuZGVzdHJveSgpO1xuICB9XG4gIFxuICBjcmVhdGVUaWxlQXJyYXkoY29sdW1ucywgcm93cywgcG9pbnQpIHtcbiAgICB0aGlzLnRpbGVEZXRhaWwgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTigndGlsZURldGFpbCcpO1xuXG4gICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcyA9IHt4OjAsIHk6MH07XG5cbiAgICB2YXIgeCwgeTtcbiAgICBcbiAgICB0aGlzLm1hcmdpbkJvdHRvbSA9IHRoaXMubWFyZ2luVG9wID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAuaGVpZ2h0LzE3LjQ3NTtcbiAgICB0aGlzLm1hcmdpbkxlZnQgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aC8yNDtcbiAgICB0aGlzLm1hcmdpblJpZ2h0ID0gIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoLzI2LjMxNTg7XG4gICAgdGhpcy50aWxlV2lkdGggPSB0aGlzLnRpbGVIZWlnaHQgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aC8zOTtcbiAgICB0aGlzLnBhZGRpbmcgPSAodGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGggLSAodGhpcy5tYXJnaW5MZWZ0ICsgdGhpcy5tYXJnaW5SaWdodCkgLSAodGhpcy50aWxlV2lkdGggKiAzMSkpLzMwO1xuICAgICAgICBcbiAgICAvL3RoaXMudGlsZVdpZHRoID0gMjU7Ly8odGhpcy5iYWNrZ3JvdW5kV2lkdGggLSAoKHRoaXMubWFyZ2luTGVmdCArIHRoaXMubWFyZ2luUmlnaHQpICsgKHRoaXMucGFkZGluZyAqIChjb2x1bW5zIC0gMSkpKSkgLyBjb2x1bW5zO1xuICAgIC8vdGhpcy50aWxlSGVpZ2h0ID0gMjU7Ly8odGhpcy5iYWNrZ3JvdW5kSGVpZ2h0IC0gKCh0aGlzLm1hcmdpblRvcCArIHRoaXMubWFyZ2luQm90dG9tKSArICh0aGlzLnBhZGRpbmcgKiAocm93cyAtIDEpKSkpIC8gcm93cztcbiAgICAgICAgXG4gICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy54ID0gcG9pbnQueCArIHRoaXMubWFyZ2luTGVmdDtcbiAgICB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnkgPSBwb2ludC55ICsgdGhpcy5tYXJnaW5Ub3A7XG4gICAgXG4gICAgdmFyIGdyYXBoaWNzID0gdGhpcy5nYW1lLmFkZC5ncmFwaGljcygwLCAwKTtcbiAgICAvL2dyYXBoaWNzLmxpbmVTdHlsZSg0LCAweGZmZDkwMCwgMSk7XG4gICAgZ3JhcGhpY3MuYmVnaW5GaWxsKDB4ZmZmZmZmLCAxKTtcbiAgICBncmFwaGljcy5kcmF3UmVjdCgxMDAsIDEwMCwgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZUhlaWdodCk7XG4gICAgXG4gICAgZm9yICh2YXIgY29sdW1uID0gMDsgY29sdW1uIDwgY29sdW1uczsgY29sdW1uKyspIHtcbiAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgcm93czsgcm93KyspIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgeCA9IHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMueCArICh0aGlzLnRpbGVXaWR0aCAqIGNvbHVtbikgKyAodGhpcy5wYWRkaW5nICogY29sdW1uIC0gMSk7XG4gICAgICAgICAgICB5ID0gdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy55ICsgKHRoaXMudGlsZUhlaWdodCAqIHJvdykgKyAodGhpcy5wYWRkaW5nICogcm93IC0gMSk7XG4gICAgICAgICAgICAvL2dyYXBoaWNzLmdlbmVyYXRlVGV4dHVyZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgY3VycmVudFRpbGUgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh4LCB5LCBncmFwaGljcy5nZW5lcmF0ZVRleHR1cmUoKSk7XG4gICAgICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQoY3VycmVudFRpbGUpO1xuICAgICAgICAgICAgY3VycmVudFRpbGUuYWxwaGEgPSAwOyAvLyAwLjI1O1xuICAgICAgICAgICAgY3VycmVudFRpbGUuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlLmV2ZW50cy5vbklucHV0RG93bi5hZGQodGhpcy50aWxlQ2xpY2tlZCwgdGhpcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy50aWxlQXJyYXlbY29sdW1uXSA9PSAndW5kZWZpbmVkJykgXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbY29sdW1uXSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NvbHVtbl1bcm93XSA9IGN1cnJlbnRUaWxlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdyYXBoaWNzLmRlc3Ryb3koKTtcbiAgICBcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy50aWxlRGV0YWlsKSB7XG4gICAgICAgIGlmICghdGhpcy50aWxlRGV0YWlsLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xuICAgICAgICBcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMudGlsZURldGFpbFtrZXldO1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgICAgICAgICAgLy8gc2tpcCBsb29wIGlmIHRoZSBwcm9wZXJ0eSBpcyBmcm9tIHByb3RvdHlwZVxuICAgICAgICAgICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgY29udGludWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbkNvdW50ID0gb2JqW3Byb3BdLmxvY2F0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IoIHZhciBpID0gMDsgaSA8IGxvY2F0aW9uQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBjb29yZHMgPSBvYmpbcHJvcF0ubG9jYXRpb25zW2ldLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICB4ID0gY29vcmRzWzBdO1xuICAgICAgICAgICAgICAgIHkgPSBjb29yZHNbMV07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZURhbWFnZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlT2NjdXBpZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlWCA9IHg7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZVkgPSB5O1xuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVUeXBlID0gb2JqW3Byb3BdLnR5cGU7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMudGlsZUFycmF5W3hdW3ldICE9ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlTmFtZSA9IG9ialtwcm9wXS5uYW1lO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeCArIFwiOlwiICsgeSArIFwiIG5vdCBmb3VuZCFcIik7XG5cbiAgICAgICAgICAgICAgICBpZih4IDwgOSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZU93bmVyID0gMTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4PjIwKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlT3duZXIgPSAyO1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtwcm9wXS5wcm9wZXJ0aWVzICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVQcm9wZXJ0aWVzID0gb2JqW3Byb3BdLnByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGl4ZWxzVG9UaWxlKHgsIHkpIHtcbiAgICB2YXIgeFRpbGUgPSAwO1xuICAgIHZhciB5VGlsZSA9IDA7XG4gICAgXG4gICAgZm9yICh2YXIgY29sIGluIHRoaXMudGlsZUFycmF5KSB7XG4gICAgICAgIGZvciAodmFyIHJvdyBpbiB0aGlzLnRpbGVBcnJheVtjb2xdKSB7XG4gICAgICAgICAgICB2YXIgb2JqID0gdGhpcy50aWxlQXJyYXlbY29sXVtyb3ddO1xuICAgICAgICAgICAgaWYoeCA+IG9iai54ICYmIHggPCBvYmoueCArIG9iai53aWR0aClcbiAgICAgICAgICAgICAgICB4VGlsZSA9IHBhcnNlSW50KGNvbCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih5ID4gb2JqLnkgJiYgeSA8IG9iai55ICsgb2JqLmhlaWdodClcbiAgICAgICAgICAgICAgICB5VGlsZSA9IHBhcnNlSW50KHJvdyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt4OnhUaWxlLCB5OnlUaWxlfTtcbiAgfVxuICBcbiAgdGlsZVRvUGl4ZWxzKHgsIHkpIHtcbiAgICB2YXIgdGlsZU9iaiA9IHRoaXMudGlsZUFycmF5W3hdW3ldO1xuICAgIHJldHVybiB7eDp0aWxlT2JqLnggKyB0aWxlT2JqLndpZHRoLzIsIHk6dGlsZU9iai55ICsgdGlsZU9iai5oZWlnaHQvMn07XG4gIH1cbiAgXG4gIHRpbGVDbGlja2VkKG9iaikge1xuICAgIHRoaXMuaGlkZVRpbGVzKCk7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAndGlsZUNsaWNrZWQnLCB4OnBhcnNlSW50KG9iai50aWxlWCksIHk6cGFyc2VJbnQob2JqLnRpbGVZKX0pO1xuXG4gICAgLy8gREVCVUcgQkxPQ0tcbiAgICBjb25zb2xlLmxvZyhcIi0tLS1USUxFIERFVEFJTC0tLS1cIik7XG4gICAgY29uc29sZS5sb2coXCJOYW1lOiBcIiArIG9iai50aWxlTmFtZSk7XG4gICAgY29uc29sZS5sb2coXCJUeXBlOiBcIiArIG9iai50aWxlVHlwZSk7XG4gICAgY29uc29sZS5sb2coXCJPY2N1cGllZDogXCIgKyBvYmoudGlsZU9jY3VwaWVkKTtcbiAgICBjb25zb2xlLmxvZyhcIkRhbWFnZWQ6IFwiICsgb2JqLnRpbGVEYW1hZ2VkKTtcbiAgICBjb25zb2xlLmxvZyhcIlg6IFwiICsgb2JqLnRpbGVYICsgXCIgWTpcIiArIG9iai50aWxlWSk7XG4gICAgLy8gICB0aGlzLmFkZE9yZG5hbmNlKHtwb2ludDp7eDpvYmoudGlsZVgsIHk6b2JqLnRpbGVZfSwgdHlwZTonYmlvZHJvbmUnLCB1dWlkOk1hdGgucmFuZG9tKCl9KTtcblxuICAgIHJldHVybjtcbiAgfVxuICBcbiAgc2hvd1RpbGVzKGNvb3Jkc0FycmF5LCBjb2xvcikge1xuICAgICAgY29uc29sZS5sb2coXCJTSE9XIFRJTEVTISFcIik7XG4gICAgICBjb25zb2xlLmxvZyhjb29yZHNBcnJheSk7XG4gICAgLy8gaWYodHlwZW9mKGNvb3Jkc0FycmF5LnBvaW50QXJyYXkpICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vICAgICBjb29yZHNBcnJheSA9IGNvb3Jkc0FycmF5LnBvaW50QXJyYXk7XG4gICAgLy8gfVxuICAgIGZvciAodmFyIGkgaW4gY29vcmRzQXJyYXkpIHtcbiAgICAgICAgdGhpcy50aWxlQXJyYXlbY29vcmRzQXJyYXlbaV0ueF1bY29vcmRzQXJyYXlbaV0ueV0uYWxwaGEgPSAwLjU7XG4gICAgICAgIGlmKGNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjb29yZHNBcnJheVtpXS54XVtjb29yZHNBcnJheVtpXS55XS50aW50ID0gY29sb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjb29yZHNBcnJheVtpXS54XVtjb29yZHNBcnJheVtpXS55XS50aW50ID0gMHhmZmQ5MDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93blRpbGVzLnB1c2goe3g6Y29vcmRzQXJyYXlbaV0ueCx5OmNvb3Jkc0FycmF5W2ldLnl9KTtcbiAgICB9XG4gIH1cbiAgXG4gIGhpZGVUaWxlcyh0aWxlQXJyYXkpIHtcbiAgICBpZighdGlsZUFycmF5KSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5zaG93blRpbGVzKSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt0aGlzLnNob3duVGlsZXNbaV0ueF1bdGhpcy5zaG93blRpbGVzW2ldLnldLmFscGhhID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3duVGlsZXMgPSBbXTtcbiAgICB9XG4gIH1cblxuICBkYW1hZ2VUaWxlKGRhdGEpIHtcbiAgXG4gICAgdmFyIGN1cnJlbnRUaWxlID0gdGhpcy50aWxlQXJyYXlbZGF0YS54XVtkYXRhLnldO1xuICAgIFxuICAgIGN1cnJlbnRUaWxlLnRpbnQgPSAwWDMzMzMzMztcbiAgICBjdXJyZW50VGlsZS5hbHBoYSA9IDAuODtcbiAgICBjdXJyZW50VGlsZS50aWxlRGFtYWdlZCA9IHRydWU7XG4gICAgXG4gICAgdmFyIHRlc3QgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZShjdXJyZW50VGlsZS54LCBjdXJyZW50VGlsZS55ICsoY3VycmVudFRpbGUuaGVpZ2h0LzIpLCAnYm9vbScpO1xuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFkZCh0ZXN0KTtcbiAgICB0ZXN0LmFuZ2xlID0gMjcwO1xuICAgIHRlc3QuYW5jaG9yLnNldCgwLjUsMC43KTtcbiAgICB0ZXN0LmFuaW1hdGlvbnMuYWRkKCdib29tJyk7XG4gICAgdGVzdC5hbmltYXRpb25zLnBsYXkoJ2Jvb20nLCAyMCwgZmFsc2UsIHRydWUpO1xuICAgIFxuICB9XG4gIFxuICBzdGFydEdhbWUoKSB7XG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XG4gIH1cblxuICBcbiAgc2VydmVyRnVsbCgpIHtcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ3NlcnZlckZ1bGwnKTtcbiAgfSAgIFxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXB0aWtvbjtcbiIsImltcG9ydCBSZXNvdXJjZXMgZnJvbSAnLi4vcHJlZmFicy9yZXNvdXJjZXMnO1xuaW1wb3J0IFBlcnNvbm5lbCBmcm9tICcuLi9wcmVmYWJzL3BlcnNvbm5lbCc7XG5pbXBvcnQgT3JkbmFuY2UgZnJvbSAnLi4vcHJlZmFicy9vcmRuYW5jZSc7XG5pbXBvcnQgQ2xvbmUgZnJvbSAnLi4vcHJlZmFicy9jbG9uZSc7IC8vIFRoaXMgd2lsbCBiZSBpbmNvcnBvcmF0ZWQgaW4gcGVyc29ubmVsXG5cbmNsYXNzIFRlYW0ge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoZ2FtZSkgeyBcbiAgICB0aGlzLnJlYyA9IG5ldyBSZXNvdXJjZXMoKTtcbiAgICB0aGlzLnJlY0VudW0gPSB0aGlzLnJlYy5yZXNvdXJjZUVudW07XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICBcbiAgICB0aGlzLnBlcnNvbm5lbCA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzID0gW107XG4gIH1cbiAgXG4gIHJlZnJlc2goKSB7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbCkge1xuICAgICAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgLy9SZXNvdXJjZSBJbnRlcmZhY2VcbiAgZ2V0UmVjQ291bnQodHlwZSkge1xuICAgIHJldHVybiB0aGlzLnJlYy5nZXRDb3VudCh0eXBlKTtcbiAgfVxuICBcbiAgY2hlY2tSZWModHlwZSwgY291bnQpIHtcbiAgICBpZiAodGhpcy5nZXRSZWNDb3VudCh0eXBlKSA+PSBjb3VudCkgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIGV4Y2hhbmdlUmVjKGNvc3RUeXBlLCBjb3N0Q291bnQsIHlpZWxkVHlwZSwgeWllbGRDb3VudCkge1xuICB9XG4gIFxuICBhZGRSZWModHlwZSwgY291bnQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWMuYWRkKHR5cGUsIGNvdW50KTtcbiAgfVxuICBcbiAgcmVtb3ZlUmVjKHR5cGUsIGNvdW50KSB7XG4gICAgcmV0dXJuIHRoaXMucmVjLnJlbW92ZSh0eXBlLCBjb3VudCk7XG4gIH1cbiAgXG4gIGFkZENsb25lKHgsIHksIHByb3BzKSB7XG4gICAgdmFyIHBvaW50ID0gdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVUb1BpeGVscyh4LHkpO1xuICAgIHZhciBjbG9uZSA9IG5ldyBDbG9uZSh0aGlzLmdhbWUscG9pbnQueCxwb2ludC55KTtcbiAgICBjbG9uZS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnggPSB4O1xuICAgIGNsb25lLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueSA9IHk7XG4gICAgXG4gICAgZm9yICh2YXIgaSBpbiBwcm9wcykge1xuICAgICAgICBjbG9uZVtpXSA9IHByb3BzW2ldO1xuICAgIH1cbiAgICB0aGlzLnBlcnNvbm5lbC5wdXNoKGNsb25lKTtcbiAgICB0aGlzLmdhbWUuc3RhZ2UuYWRkQ2hpbGQoY2xvbmUpO1xuICB9XG4gIFxuICBnZXRDbG9uZShjb29yZCkge1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcbiAgICAgICAgaWYodGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy54ID09IGNvb3JkLnggJiYgdGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy55ID09IGNvb3JkLnkpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGVyc29ubmVsW2ldO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBraWxsQ2xvbmUoY29vcmQpIHtcbiAgICB2YXIgY2xvbmUgPSB0aGlzLmdldENsb25lKGNvb3JkKTtcbiAgICB0aGlzLmdhbWUuc3RhZ2UucmVtb3ZlQ2hpbGQoY2xvbmUpO1xuICAgIFxuICAgIHZhciBpbmRleCA9IHRoaXMucGVyc29ubmVsLmluZGV4T2YoY2xvbmUpO1xuICAgIHRoaXMucGVyc29ubmVsLnNwbGljZShpbmRleCwxKTtcbiAgICBcbiAgICBjbG9uZS5yZW1vdmUoKTtcbiAgfVxuICAgIFxuICBvZmZlckxlZ2FsQ2xvbmVzKCkge1xuICAgIC8vIE9mZmVyIGNsb25lcyB0aGF0IGhhdmUgbGVnYWwgbW92ZXNcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcbiAgICAgICAgdmFyIG1vdmVzID0gdGhpcy5wZXJzb25uZWxbaV0uZ2V0TGVnYWxNb3ZlcygpO1xuXG4gICAgICAgIGlmKG1vdmVzICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5wZXJzb25uZWxbaV0uaGlnaGxpZ2h0T24oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgb2ZmZXJHdW5uZXJzKCkge1xuICAgIC8vIE9mZmVyIGd1bm5lciBcbiAgICB2YXIgZ3VubmVyRm91bmQgPSBmYWxzZTtcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcbiAgICAgICAgaWYodGhpcy5wZXJzb25uZWxbaV0uaXNHdW5uZXIpIHtcbiAgICAgICAgICAgIGd1bm5lckZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vdGhpcy5wZXJzb25uZWxbaV0uaGlnaGxpZ2h0T24oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ3VubmVyRm91bmQ7XG4gIH1cbiAgXG4gIHNlbGVjdEd1bm5lcihjb29yZHMpIHtcbiAgICB2YXIgY2xvbmUgPSB0aGlzLmdldENsb25lKGNvb3Jkcyk7XG4gICAgaWYoIWNsb25lKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYoIWNsb25lLmlzR3VubmVyKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIFxuICAgIHZhciBleGlzdGluZ0d1bm5lciA9IHRoaXMuc2VsZWN0ZWRHdW5uZXJzLmluZGV4T2YoY2xvbmUpO1xuICAgIGlmKGV4aXN0aW5nR3VubmVyID49IDApe1xuICAgICAgICBjbG9uZS5oaWdobGlnaHRPZmYoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMuc3BsaWNlKGV4aXN0aW5nR3VubmVyLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjbG9uZS5oaWdobGlnaHRPbigpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycy5wdXNoKGNsb25lKTtcbiAgICB9XG4gIH1cbiAgXG4gIGNsZWFyR3VubmVycygpIHtcbiAgICBmb3IgKHZhciBpIGluIHRoaXMuc2VsZWN0ZWRHdW5uZXJzKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzW2ldLmhpZ2hsaWdodE9mZigpO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkR3VubmVycyA9IFtdO1xuICB9XG4gIFxuICBzZWxlY3RDbG9uZUZvck1vdmUoY29vcmRzKSB7ICAgIFxuICBcbiAgICB2YXIgY2xvbmUgPSB0aGlzLmdldENsb25lKGNvb3Jkcyk7XG4gICAgaWYoIWNsb25lKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcbiAgICAgICAgdGhpcy5wZXJzb25uZWxbaV0uaGlnaGxpZ2h0T2ZmKCk7XG4gICAgfVxuICAgIHRoaXMubGVnYWxUaWxlcyA9IGNsb25lLmdldExlZ2FsTW92ZXMoKTtcbiAgICB0aGlzLnNlbGVjdGVkQ2xvbmUgPSBjbG9uZTtcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24uc2hvd1RpbGVzKHRoaXMubGVnYWxUaWxlcyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgXG4gIG1vdmVTZWxlY3RlZENsb25lKGNvb3Jkcykge1xuICAgIGZvcih2YXIgaSBpbiB0aGlzLmxlZ2FsVGlsZXMpIHtcbiAgICAgICAgaWYodGhpcy5sZWdhbFRpbGVzW2ldLnRpbGVYID09IGNvb3Jkcy54ICYmIHRoaXMubGVnYWxUaWxlc1tpXS50aWxlWSA9PSBjb29yZHMueSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENsb25lLm1vdmUoY29vcmRzKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkQ2xvbmU7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5sZWdhbFRpbGVzO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW07IiwiY2xhc3MgT3JkbmFuY2Uge1xuXG4gICAgY29uc3RydWN0b3IodHlwZSwgeCwgeSwgdXVpZCkge1xuICAgICAgICB0aGlzLnR5cGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgICAgICBTSElFTEQ6IDAsXG4gICAgICAgICAgICBCSU9EUk9ORTogMSxcbiAgICAgICAgICAgIFNBVEVMTElURTogMixcbiAgICAgICAgICAgIFJPQ0tFVDogM1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZUVudW1bdHlwZS50b1VwcGVyQ2FzZSgpXTtcbiAgICAgICAgXG4gICAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzLk9yZG5hbmNlID0gT3JkbmFuY2U7XG4iLCJjbGFzcyBQZXJzb25uZWwge1xuXG4gICAgY29uc3RydWN0b3IodHlwZSwgeCwgeSwgdXVpZCkge1xuICAgICAgICB0aGlzLnR5cGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgICAgICBDTE9ORTogMCxcbiAgICAgICAgICAgIEJJT0RST05FOiAxXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZDtcbiAgICAgICAgdGhpcy51bmRlckVzcGlvbmFnZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzR3VubmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZUVudW1bdHlwZS50b1VwcGVyQ2FzZSgpXTtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnYmlvZHJvbmUnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2xvbmUnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVFbnVtW3R5cGVdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG1vdmUoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMuUGVyc29ubmVsID0gUGVyc29ubmVsO1xuIiwidmFyIFBlcnNvbm5lbCA9IHJlcXVpcmUoJy4vcGVyc29ubmVsJykuUGVyc29ubmVsO1xudmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9yZXNvdXJjZScpLlJlc291cmNlO1xudmFyIE9yZG5hbmNlID0gcmVxdWlyZSgnLi9vcmRuYW5jZScpLk9yZG5hbmNlO1xuXG5cbmNsYXNzIFBsYXllciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihzb2NrZXRJRCwgaWQsIHV1aWQpIHsgXG4gICAgICAgIHRoaXMuc29ja2V0SUQgPSBzb2NrZXRJRDtcbiAgICAgICAgdGhpcy5pZCA9IGlkOyAvL3BsYXllciAxIG9yIHBsYXllciAyOyB0aGlzIHdpbGwgZGV0ZXJtaW5lIHRoZSBzaWRlIG9mIHRoZSBib2FyZCBhdCBjbGllbnQgc3RhcnQuXG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgICAgIHRoaXMucGVyc29ubmVsQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5ID0gW107XG4gICAgICAgIHRoaXMub3JkbmFuY2VBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLnJlYWR5VG9TdGFydCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXJ0aW5nQ2xvbmVDb3VudCA9IDU7XG4gICAgICAgIHRoaXMuYXJtc0FycmF5ID0gW107XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudExlZ2FsUGllY2VzID0gW107XG5cbiAgICAgICAgdGhpcy5pbml0UmVzb3VyY2VzKCk7XG4gICAgfVxuXG4gICAgY2xlYXJRdWV1ZXMoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlcyA9IFtdO1xuICAgIH1cbiAgICAgICAgXG4gICAgYWRkUGVyc29ubmVsKHR5cGUsIHgsIHksIHV1aWQpIHtcbiAgICAgICAgaWYodHlwZSA9PSBcImNsb25lXCIpIHtcbiAgICAgICAgICAgIHZhciBwZXJzb25uZWwgPSBuZXcgUGVyc29ubmVsKCdjbG9uZScsIHgsIHksIHV1aWQpO1xuICAgICAgICAgICAgdGhpcy5wZXJzb25uZWxBcnJheS5wdXNoKHBlcnNvbm5lbCk7XG4gICAgICAgICAgICByZXR1cm4gcGVyc29ubmVsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGVyc29ubmVsIGlzIG5vdCBhIGNsb25lIHR5cGUuXCIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVtb3ZlUGVyc29ubmVsKHBlcnNvbm5lbCwgcHVyZ2VBbGwpIHtcbiAgICAgICAgaWYgKHB1cmdlQWxsID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbm5lbEFycmF5ID0gW107XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQZXJzb25uZWwodHlwZSkge1xuICAgICAgICB2YXIgcmV0dXJuQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBlcnNvbm5lbEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMucGVyc29ubmVsQXJyYXlbaV0udHlwZSA9PT0gdGhpcy5wZXJzb25uZWxBcnJheVtpXS50eXBlRW51bVt0eXBlLnRvVXBwZXJDYXNlKCldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLnBlcnNvbm5lbEFycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XG4gICAgfVxuXG4gICAgZ2V0UGVyc29ubmVsQnlVVUlEKHV1aWQpIHtcbiAgICAgICAgdmFyIHBlcnNvbm5lbCA9IHRoaXMuZ2V0UGVyc29ubmVsKCk7XG4gICAgICAgIGZvciAodmFyIGkgaW4gcGVyc29ubmVsKSB7XG4gICAgICAgICAgICBpZiAocGVyc29ubmVsW2ldLnV1aWQgPT0gdXVpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwZXJzb25uZWxbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldFBlcnNvbm5lbEJ5UG9pbnQocG9pbnQpIHtcbiAgICAgICAgdmFyIHBlcnNvbm5lbHMgPSB0aGlzLmdldFBlcnNvbm5lbCgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBlcnNvbm5lbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwZXJzb25uZWxzW2ldLnggPT0gcG9pbnQueCAmJiBwZXJzb25uZWxzW2ldLnkgPT0gcG9pbnQueSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwZXJzb25uZWxzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjaGVja1BlcnNvbm5lbE1vdmUocGVyc29ubmVsLCBwb2ludCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY3VycmVudExlZ2FsUGllY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocGVyc29ubmVsLnggPT0gdGhpcy5jdXJyZW50TGVnYWxQaWVjZXNbaV0ub3JpZ2luLnggJiYgcGVyc29ubmVsLnkgPT0gdGhpcy5jdXJyZW50TGVnYWxQaWVjZXNbaV0ub3JpZ2luLnkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBvaW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY3VycmVudExlZ2FsUGllY2VzW2ldLm1vdmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TGVnYWxQaWVjZXNbaV0ubW92ZXNbal0ueCA9PSBwb2ludC54ICYmIHRoaXMuY3VycmVudExlZ2FsUGllY2VzW2ldLm1vdmVzW2pdLnkgPT0gcG9pbnQueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYWRkT3JkbmFuY2UodHlwZSwgcG9pbnQsIHV1aWQpIHtcbiAgICAgICAgdmFyIG9yZCA9IG5ldyBPcmRuYW5jZSh0eXBlLCBwb2ludC54LCBwb2ludC55LCB1dWlkKTtcbiAgICAgICAgdGhpcy5vcmRuYW5jZUFycmF5LnB1c2gob3JkKTtcbiAgICAgICAgcmV0dXJuIG9yZDtcbiAgICB9XG5cbiAgICBwdXJnZUxlZ2FsUGllY2VzKHBlcnNvbm5lbCwgcHVyZ2VBbGxNYXRjaGluZ1R5cGVzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcGVyc29ubmVsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGVnYWxQaWVjZXMgPSBbXTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaSA9IHRoaXMuY3VycmVudExlZ2FsUGllY2VzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgaS0tKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TGVnYWxQaWVjZXNbaV0udHlwZSA9PT0gcGVyc29ubmVsLnR5cGUgJiYgcHVyZ2VBbGxNYXRjaGluZ1R5cGVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGVnYWxQaWVjZXMuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRHdW5uZXJzKCkge1xuICAgICAgICB2YXIgcmV0dXJuQXJyYXkgPSBbXTtcbiAgICAgICAgdmFyIGNsb25lcyA9IHRoaXMuZ2V0UGVyc29ubmVsKCdjbG9uZScpO1xuICAgICAgICBmb3IgKHZhciBpIGluIGNsb25lcykge1xuICAgICAgICAgICAgaWYgKGNsb25lc1tpXS5pc0d1bm5lcikge1xuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2goY2xvbmVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XG4gICAgfVxuXG4gICAgZ2V0U2VsZWN0ZWRHdW5uZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEd1bm5lcnM7XG4gICAgfVxuXG4gICAgY2xlYXJTZWxlY3RlZEd1bm5lcnMoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzID0gW107XG4gICAgfVxuXG4gICAgdG9nZ2xlR3VubmVyU2VsZWN0aW9uKGd1bm5lcikge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEd1bm5lcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzLnB1c2goZ3VubmVyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWRHdW5uZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoZ3VubmVyKSA9PT0gSlNPTi5zdHJpbmdpZnkodGhpcy5zZWxlY3RlZEd1bm5lcnNbaV0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzLnB1c2goZ3VubmVyKTtcbiAgICB9XG5cbiAgICBnZXRPcmRuYW5jZSh0eXBlKSB7XG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xuICAgICAgICBmb3IodmFyIGkgaW4gdGhpcy5vcmRuYW5jZUFycmF5KSB7XG4gICAgICAgICAgICBpZih0eXBlID09PSBudWxsIHx8IHRoaXMub3JkbmFuY2VBcnJheVtpXS50eXBlID09PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy5vcmRuYW5jZUFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKHRhcmdldCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xuICAgIH1cblxuICAgIGdldE9yZG5hbmNlQnlQb2ludChwb2ludCkge1xuICAgICAgICB2YXIgb3JkbmFuY2VzID0gdGhpcy5nZXRPcmRuYW5jZSgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9yZG5hbmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG9yZG5hbmNlc1tpXS54ID09IHBvaW50LnggJiYgb3JkbmFuY2VzW2ldLnkgPT0gcG9pbnQueSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcmRuYW5jZXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG1vdmVPcmRuYW5jZShjb3VudCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3JkbmFuY2VBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3JkbmFuY2VBcnJheVtpXS50eXBlID09IFwiYmlvZHJvbmVcIiB8fCB0aGlzLm9yZG5hbmNlQXJyYXlbaV0udHlwZSA9PSBcInJvY2tldFwiIHx8IHRoaXMub3JkbmFuY2VBcnJheVtpXS50eXBlID09IFwibnVrZVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaWQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZG5hbmNlQXJyYXlbaV0ueCArPSBjb3VudDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZG5hbmNlQXJyYXlbaV0ueCAtPSBjb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMub3JkbmFuY2VBcnJheTtcbiAgICB9XG5cbiAgICBpbml0UmVzb3VyY2VzKCkge1xuICAgICAgICB2YXIgcmVjQXJyYXkgPSBbXG4gICAgICAgICAgICAnZW5lcmd5MScsIFxuICAgICAgICAgICAgJ2VuZXJneTInLFxuICAgICAgICAgICAgJ294eWdlbicsXG4gICAgICAgICAgICAnbWV0YWwnLFxuICAgICAgICAgICAgJ2Jpb2Ryb25lJyxcbiAgICAgICAgICAgICdyb2NrZXQnLFxuICAgICAgICAgICAgJ3VyYW5pdW0nLFxuICAgICAgICAgICAgJ2Jpb21hc3MnLFxuICAgICAgICAgICAgJ251a2UnXG4gICAgICAgICAgICBdO1xuICAgICAgICB2YXIgcmVjID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSBpbiByZWNBcnJheSkge1xuICAgICAgICAgICAgcmVjID0gbmV3IFJlc291cmNlKHJlY0FycmF5W2ldKTtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VBcnJheVtyZWNBcnJheVtpXV0gPSBbXTtcbiAgICAgICAgICAgIGlmIChyZWNBcnJheVtpXSAhPSBcIm51a2VcIikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGNvdW50ID0gMDsgY291bnQgPCAxMDsgY291bnQrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPCA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlQXJyYXlbcmVjQXJyYXlbaV1dLnB1c2gocmVjKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2VBcnJheVtyZWNBcnJheVtpXV0ucHVzaChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFJlc291cmNlQ291bnQodHlwZSkge1xuICAgICAgICB2YXIgZm91bmRSZXNvdXJjZXMgPSAwO1xuICAgICAgICB2YXIgY3VycmVudFJlc291cmNlU2xvdCA9IDk7XG5cbiAgICAgICAgaWYgKHR5cGUgPT0gXCJlbmVyZ3lcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVzb3VyY2VDb3VudCgnZW5lcmd5MScpICsgdGhpcy5nZXRSZXNvdXJjZUNvdW50KCdlbmVyZ3kyJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PSBcIm51a2VcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXS5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoY3VycmVudFJlc291cmNlU2xvdCA+PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0uZGFtYWdlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZFJlc291cmNlcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm91bmRSZXNvdXJjZXMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRSZXNvdXJjZVNsb3QtLTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm91bmRSZXNvdXJjZXM7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2tSZXNvdXJjZSBkZWZhdWx0cyB0byBhc3N1bWUgeW91IGFyZSBjaGVja2luZyB0byBzcGVuZCBhIHJlc291cmNlLiBTZXQgXCJhY2NlcHRcIiB0byB0cnVlIGlmIHlvdSBhcmUgY2hlY2tpbmcgdG8gcmVjZWl2ZSBhIHJlc291cmNlXG4gICAgY2hlY2tSZXNvdXJjZSh0eXBlLCBjb3VudCwgYWNjZXB0KSB7XG4gICAgICAgIHZhciBjdXJyZW50UmVzb3VyY2VTbG90ID0gOTtcbiAgICAgICAgdmFyIGZvdW5kUmVzb3VyY2VzID0gMDtcbiAgICAgICAgdmFyIHJlc291cmNlU2xvdHMgPSAwO1xuXG4gICAgICAgIGlmICh0eXBlID09IFwibnVrZVwiKSB7XG4gICAgICAgICAgICBpZiAoYWNjZXB0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc291cmNlQXJyYXlbdHlwZV0ubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodHlwZSA9PSBcImVuZXJneVwiKSB7XG4gICAgICAgICAgICB2YXIgZTEgPSB0aGlzLmNoZWNrUmVzb3VyY2UoXCJlbmVyZ3kxXCIsIGNvdW50LCBhY2NlcHQpO1xuICAgICAgICAgICAgdmFyIGUyID0gdGhpcy5jaGVja1Jlc291cmNlKFwiZW5lcmd5MlwiLCBjb3VudCwgYWNjZXB0KTtcblxuICAgICAgICAgICAgaWYoZTEgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZTE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUyID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoY3VycmVudFJlc291cmNlU2xvdCA+PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjY2VwdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZVNsb3RzKys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNvdXJjZVNsb3RzID09IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VTbG90LS07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXVtjdXJyZW50UmVzb3VyY2VTbG90XS5kYW1hZ2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYoYWNjZXB0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3VuZFJlc291cmNlcysrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihhY2NlcHQgIT09IGZhbHNlICYmIGZvdW5kUmVzb3VyY2VzID09PSBjb3VudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzcGVuZFJlc291cmNlKHR5cGUsIGNvdW50KSB7XG4gICAgICAgIHZhciBjdXJyZW50UmVzb3VyY2VTbG90ID0gOTtcbiAgICAgICAgdmFyIG9yaWdpbmFsQ291bnQgPSBjb3VudDtcblxuICAgICAgICBpZiAodHlwZSA9PSBcImVuZXJneVwiKSB7XG4gICAgICAgICAgICB2YXIgc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICAgICAgd2hpbGUgKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLnNwZW5kUmVzb3VyY2UoXCJlbmVyZ3kxXCIsIDEpO1xuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLnNwZW5kUmVzb3VyY2UoXCJlbmVyZ3kyXCIsIDEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3VjY2VzcyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxDb3VudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChjdXJyZW50UmVzb3VyY2VTbG90ID49IDAgJiYgY291bnQgPiAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0uZGFtYWdlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5lcnJvcihcIlRyaWVkIHRvIHNwZW5kIHJlc291cmNlcyB5b3UgZG9uJ3QgaGF2ZSFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gPSBudWxsO1xuICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3JpZ2luYWxDb3VudDtcbiAgICB9XG5cbiAgICBhY2NlcHRSZXNvdXJjZSh0eXBlLCBjb3VudCkge1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBudWxsO1xuICAgICAgICB2YXIgY3VycmVudFJlc291cmNlU2xvdCA9IDk7XG4gICAgICAgIHZhciBzZWFyY2hpbmcgPSB0cnVlO1xuICAgICAgICB2YXIgb3JpZ2luYWxDb3VudCA9IGNvdW50O1xuXG4gICAgICAgIGlmICh0eXBlID09IFwibnVrZVwiKSB7XG4gICAgICAgICAgICB0aGlzLnJlc291cmNlQXJyYXlbdHlwZV0ucHVzaChuZXcgUmVzb3VyY2UodHlwZSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXS5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PSBcImVuZXJneVwiKSB7XG4gICAgICAgICAgICB2YXIgc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICAgICAgd2hpbGUgKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLmFjY2VwdFJlc291cmNlKFwiZW5lcmd5MVwiLCAxKTtcbiAgICAgICAgICAgICAgICBpZiAoc3VjY2VzcyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5hY2NlcHRSZXNvdXJjZShcImVuZXJneTJcIiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbENvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIGlmIChzZWFyY2hpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAvLyBwZWVrIGF0IG5leHQgcmVzb3VyY2VcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJubyByb29tIGZvciB0aGlzIHJlc291cmNlIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlc291cmNlU2xvdCA9PT0gMCB8fCB0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdCAtIDFdICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50UmVzb3VyY2VTbG90ICsgMSA+IHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsQ291bnQgLSBjb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UgPSBuZXcgUmVzb3VyY2UodHlwZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdID0gcmVzb3VyY2U7XG4gICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICBpZihjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxDb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdCsrO1xuICAgICAgICAgfVxuICAgICAgICAgICAgaWYoY3VycmVudFJlc291cmNlU2xvdCA8IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiT3V0IG9mIGJvdW5kcy4gTm8gZW1wdHkgcmVzb3VydWNlIHNsb3RzIGZvdW5kLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzLlBsYXllciA9IFBsYXllcjtcbiIsImNsYXNzIFJlc291cmNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cy5SZXNvdXJjZSA9IFJlc291cmNlO1xuIiwiLy8gIFRoaXMgaXMgdGhlIHNlcnZlci1zaWRlIHJ1bGUgZW5naW5lLiBJdCBwcm9jZXNzZXMgdGhlIHJ1bGVzIGFuZCBzdGF0ZXMgYW5kIHRoZW4gZW1pdHMgZGlyZWN0aW9ucyBiYWNrIHRvIHRoZSBjbGllbnQuXG5cbnZhciBQbGF5ZXIgPSByZXF1aXJlKCcuL3BsYXllcicpLlBsYXllcjtcbnZhciB1dWlkID0gcmVxdWlyZSgndXVpZC92NCcpO1xuXG5jbGFzcyBTZXB0aWtvbiB7XG4gICAgXG5cdGNvbnN0cnVjdG9yKGlvKSB7XG4gICAgICAgIHRoaXMuaW8gPSBpbztcbiAgICAgICAgdGhpcy5sYXN0UGxheWVySUQgPSAwO1xuICAgICAgICB0aGlzLnBsYXllcnNBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IDA7XG4gICAgICAgIHRoaXMudHVyblN0YXRlID0gMDtcbiAgICAgICAgdGhpcy51dWlkID0gcmVxdWlyZSgndXVpZC92NCcpKCk7XG4gICAgICAgIHRoaXMuc2VxdWVuY2UgPSAwO1xuXG4gICAgICAgIHRoaXMuYWN0aXZlUGxheWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5jdXJyZW50RGljZVZhbHVlID0gMDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlRW51bSA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICAgICAgU0VUVVA6IDAsXG4gICAgICAgICAgICBHQU1FOiAxLCBcbiAgICAgICAgICAgIFBBVVNFOiAyLFxuICAgICAgICAgICAgR0FNRU9WRVI6IDMsXG4gICAgICAgICAgICBTRVJWRVJGVUxMOiA0XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy50dXJuU3RhdGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgICAgICBST0xMOiAwLCAgICAvLyBMaXRlcmFsbHkgdGhlIGFjdCBvZiByb2xsaW5nIHRoZSBkaWVcbiAgICAgICAgICAgIE1PVkU6IDEsICAgIC8vIFNlbGVjdGluZyB0aGUgY2xvbmUgYW5kIHRoZWlyIHRhcmdldCBzcGFjZVxuICAgICAgICAgICAgQUNUSU9OOiAyLCAgLy8gVHJpZ2dlciB0aWxlICBcbiAgICAgICAgICAgIFRBUkdFVFM6IDMsIC8vIEFzc2lnbiB0YXJnZXQocykgKGllLiAtIGd1bm5lciwgdGlsZSwgZXNwaW9uYWdlZCBjbG9uZSkgXG4gICAgICAgICAgICBCSU9EUk9ORTogNCwvLyBNb3ZlIGJpb2Ryb25lKHMpXG4gICAgICAgICAgICBPUkROQU5DRTogNSwvLyBtb3ZlIG9yZG5hbmNlIGFjY29yZGluZyB0byBkaWNlIHJvbGwgKHRoaXMgbWF5IG5vdCByZXF1aXJlIGEgc3RhdGUuLi4pXG4gICAgICAgICAgICBFTkQ6IDYgICAgICAvLyBhc3Nlc3Mgb3JkbmFuY2UgZGFtYWdlIGFuZCBjbG9uZS9iaW9kcm9uZSBraWxscy4gQXNzZXNzIHZpY3RvcnkgY29uZGl0aW9ucyAodGhpcyBtYXkgbm90IHJlcXVpcmUgYSBzdGF0ZS4uLilcbiAgICAgICAgfSk7ICBcblxuICAgICAgICB0aGlzLmRpcmVjdGlvbkVudW0gPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgICAgIE5PUlRIOjEsXG4gICAgICAgICAgICBFQVNUOjIsXG4gICAgICAgICAgICBTT1VUSDo0LFxuICAgICAgICAgICAgV0VTVDo4XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudGlsZUNvbHVtbnMgPSAzMTtcbiAgICAgICAgdGhpcy50aWxlUm93cyA9IDIxO1xuXG4gICAgICAgIHRoaXMudGlsZUFycmF5ID0gW107XG4gICAgICAgIHRoaXMuY3JlYXRlVGlsZUFycmF5KCk7IFxuXG4gICAgICAgIHRoaXMucXVldWVkVGlsZSA9IG51bGw7XG4gICAgICAgIHRoaXMudGlsZXNSZXBhaXJlZFRoaXNUdXJuID0gMDtcbiAgICAgICAgdGhpcy5hdmFpbGFibGVDbG9uZXNUb0FkZCA9IDA7XG4gICAgfVxuICAgIFxuICAgIHByb2Nlc3NDbGljayhkYXRhKSB7XG4gICAgICAgIC8vIFdoYXQgaXMgYWx3YXlzIHRydWUgb2YgYSBjbGljaz9cbiAgICAgICAgLy8gIC0gc2VuZCB0aWxlIGRldGFpbHMgdG8gdGhlIGNsaWVudFxuICAgICAgICAvLyAgLSBzZW5kIG9jY3VwYW50IGRldGFpbHMgdG8gY2xpZW50IChpZiBhbnkpXG4gICAgICAgIC8vICAtIHN1Y2Nlc3NmdWwgaW50ZXJhY3Rpb25zIChsaWtlIG1vdmluZyBhIGNsb25lKSBzaG91bGQgZW1pdCB0byBjbGllbnQgT05MWSBmcm9tIHRoaXMgZnVuY3Rpb24uXG5cbiAgICAgICAgLy8gRG8gdGhlIG5lZWRmdWxcbiAgICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0UGxheWVyQnlTb2NrZXRJRChkYXRhLnNvY2tldElEKTtcblxuICAgICAgICAvLyAoMSkgQ2hlY2sgZ2FtZXN0YXRlXG4gICAgICAgIC8vICgyKSBDaGVjayB0dXJucGhhc2VcbiAgICAgICAgLy8gKDMpIENoZWNrIHBoYXNlc3RlcFxuXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gdGhpcy5nYW1lU3RhdGVFbnVtLlNFVFVQKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGdhbWVzdGF0ZSBhbGxvd3M6XG4gICAgICAgICAgICAvLyAgLSBwbGFjaW5nIGNsb25lc1xuICAgICAgICAgICAgLy8gICAgLSBjaGVjayBsZWdhbCBwbGFjZW1lbnRcbiAgICAgICAgICAgIC8vICAgIC0gYWRkIGNsb25lXG4gICAgICAgICAgICAvLyAgLSByZW1vdmluZyBjbG9uZXNcbiAgICAgICAgICAgIC8vICAgIC0gY2hlY2sgaWYgY2xvbmUgZXhpc3RzIGhlcmVcbiAgICAgICAgICAgIC8vICAgIC0gcmVtb3ZlIGNsb25lXG4gICAgICAgICAgICAvLyAgLSBjb25maXJtaW5nIHNlbGVjdGlvblxuICAgICAgICAgICAgLy8gICAgLSBjaGVjayBpZiBzdGFydGluZyBjb3VudCBpcyBwbGFjZWRcbiAgICAgICAgICAgIC8vICAgIC0gYWR2YW5jZSBnYW1lc3RhdGVcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwbGFjaW5nIGNsb25lXCIpXG4gICAgICAgICAgICBsZXQgY2xvbmUgPSB0aGlzLnBsYWNlQ2xvbmUocGxheWVyLCBkYXRhLngsIGRhdGEueSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjbG9uZSk7IFxuICAgICAgICAgICAgaWYgKGNsb25lICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIC8vIGVtaXQgdGhlIGFkZGVkIGNsb25lIGFuZCB0aGUgdGlsZSBvY2N1cGF0aW9uXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJhZGRDbG9uZVwiLCBkZXRhaWxzOiB7eDp4LCB5OnksIHBsYXllcklEOiBwbGF5ZXIuaWQsIHV1aWQ6Y2xvbmVVVUlEfX0sIHBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB7dHlwZTpcInBlcnNvbm5lbFwiLCBkZXRhaWxzOiB7cGVyc29ubmVsOiBjbG9uZSwgYWN0aW9uOiAnYWRkJywgcGxheWVySUQ6IHBsYXllci5pZH19KTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHt0eXBlOlwidGlsZVwiLCBkZXRhaWxzOiBbe3g6ZGF0YS54LCB5OmRhdGEueSwgb2NjdXBpZWQ6IHRydWV9XX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSB0aGlzLmdhbWVTdGF0ZUVudW0uR0FNRSkge1xuICAgICAgICAgICAgLy8gVGhpcyBnYW1lc3RhdGUgaGFzIHBoYXNlczpcbiAgICAgICAgICAgIC8vICgxKSAtIHJvbGxpbmcgZGllXG4gICAgICAgICAgICAvLyAoMikgLSBtb3ZpbmcgYSBjbG9uZVxuICAgICAgICAgICAgLy8gKDMpIC0gdGlsZSBhY3RpdmF0aW9uXG4gICAgICAgICAgICAvLyAoNCkgLSBtb3ZpbmcgYmlvZHJvbmUocylcbiAgICAgICAgICAgIC8vICg1KSAtIG1vdmluZyByb2NrZXRzXG4gICAgICAgICAgICAvLyAoNikgLSBhc3Nlc3NpbmcgZGFtYWdlXG4gICAgICAgICAgICAvLyAoNykgLSBjaGVjayB2aWN0b3J5XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nYW1lU3RhdGUgPT09IHRoaXMuZ2FtZVN0YXRlRW51bS5QQVVTRSkge1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSB0aGlzLmdhbWVTdGF0ZUVudW0uR0FNRU9WRVIpIHtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gdGhpcy5nYW1lU3RhdGVFbnVtLlNFUlZFUkZVTEwpIHtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsaWNrZWQoZGF0YSkge1xuICAgICAgICBcbiAgICAgICAgLy8gUHJvY2VzcyB0aGUgY2xpY2sgZnJvbSB0aGUgY2xpZW50LiBcbiAgICAgICAgLy8gQ2xpZW50IHNob3VsZCBkbyBOTyBydWxlIHByb2Nlc3NpbmcuIFBhc3MgdGhlIGNsaWNrIGZyb20gY2xpZW50IHRvIHNlcnZlcjsgcHJvY2VzcyB0aGUgZGF0YTsgdGVsbCB0aGUgY2xpZW50IHdoYXQgdG8gZG8uXG4gICAgICAgIC8vIEJhc2ljYWxseSwgY2hlY2sgZ2FtZSBzdGF0ZSBhbmQgdHVybiBzdGF0ZS5cbiAgICAgICAgXG4gICAgICAgIHN3aXRjaCAodGhpcy5nYW1lU3RhdGUpIHtcbiAgICAgICAgXG4gICAgICAgICAgICBjYXNlIHRoaXMuZ2FtZVN0YXRlRW51bS5TRVRVUDpcblxuICAgICAgICAgICAgICAgIC8vIFBsYXllciBpcyBwbGFjaW5nIG5ldyBjbG9uZXMgaW4gdGhlIGZpZWxkLlxuICAgICAgICAgICAgICAgIHZhciBwbGF5ZXIgPSB0aGlzLmdldFBsYXllckJ5U29ja2V0SUQoZGF0YS5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmKHBsYXllci5nZXRQZXJzb25uZWwoJ2Nsb25lJykubGVuZ3RoIDwgcGxheWVyLnN0YXJ0aW5nQ2xvbmVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5wbGFjZUNsb25lKHBsYXllciwgZGF0YS54LCBkYXRhLnkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIG9uIHBlcnNvbm5lbCBjb3VudC4gSWYgcGVyc29ubmVsIGlzIGF0IHRoZSBzdGFydCBjb3VudCwgc2VuZCBtb2RhbCB0byBzdGFydCBnYW1lLlxuICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXIuZ2V0UGVyc29ubmVsKCdjbG9uZScpLmxlbmd0aCA9PSBwbGF5ZXIuc3RhcnRpbmdDbG9uZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3JlcXVlc3QnLCB7Y2FsbGJhY2s6XCJtb2RhbFwiLCBkZXRhaWxzOiB7dHlwZTpcImFza1N0YXJ0XCJ9fSwgcGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgdGhpcy5nYW1lU3RhdGVFbnVtLkdBTUU6XG5cbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRQZXJzb25uZWwgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy50dXJuU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uTU9WRTpcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGxheWVyIGNhbiBtb3ZlIG9uZSBjbG9uZSBwZXIgdHVybi5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdGU6IFRoZSBhcnJheSBvZiBsZWdhbCBwZXJzb25uZWwgKGluIHRoaXMuYWN0aXZlUGxheWVyKSB3YXMgc2VudCBieSByb2xsRGljZSgpLlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ2hpZGVUaWxlcycsIGRldGFpbHM6IG51bGx9LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGVyc29ubmVsID0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UGVyc29ubmVsQnlQb2ludCh7eDpkYXRhLngsIHk6ZGF0YS55fSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFBlcnNvbm5lbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbG9uZSB3YXMgY2xpY2tlZCwgc286XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzTGVnYWxQZXJzb25uZWwgPSB0aGlzLmFjdGl2ZVBsYXllci5jaGVja1BlcnNvbm5lbE1vdmUoc2VsZWN0ZWRQZXJzb25uZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IElmIHBlcnNvbm5lbCBpcyBhIFwiYmlvZHJvbmVcIiB0eXBlIEFORCBjbG9uZXMgcmVtYWluIGluIHRoZSBQbGF5ZXIuY3VycmVudGxlZ2FscGllY2VzIGFycmF5LCBlbWl0IG1vZGFsIHdhcm5pbmcgdG8gcGxheWVyLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsb25lIG11c3QgbW92ZSBhbmQgdGlsZSBtdXN0IGJlIHRyaWdnZXJlZCBwcmlvciB0byBiaW9kcm9uZSBtb3ZlbWVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNMZWdhbFBlcnNvbm5lbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllci5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZSA9IHNlbGVjdGVkUGVyc29ubmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgLSBTaG93IGhpZ2hsaWdodCBzZWxlY3RlZCBwZXJzb25uZWwgaW4gY2xpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAtIFNob3cgbGVnYWwgbW92ZXMgb2YgdGhlIHNlbGVjdGVkIHBlcnNvbm5lbCBpbiBhIGRpZmZlcmVudCBjb2xvclxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb2ludEFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50QXJyYXkgPSB0aGlzLmdldExlZ2FsTW92ZXMoc2VsZWN0ZWRQZXJzb25uZWwsIHRoaXMuY3VycmVudERpY2VWYWx1ZSwge3g6c2VsZWN0ZWRQZXJzb25uZWwueCwgeTpzZWxlY3RlZFBlcnNvbm5lbC55fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAnc2hvd1RpbGVzJywgZGV0YWlsczoge3g6ZGF0YS54LCB5OmRhdGEueX19LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IFNob3cgaW4gZGlmZmVyZW50IGNvbG9yLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAnc2hvd1RpbGVzJywgZGV0YWlsczogcG9pbnRBcnJheX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlUGxheWVyLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzTGVnYWxNb3ZlID0gdGhpcy5hY3RpdmVQbGF5ZXIuY2hlY2tQZXJzb25uZWxNb3ZlKHRoaXMuYWN0aXZlUGxheWVyLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlLHt4OmRhdGEueCwgeTpkYXRhLnl9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNMZWdhbE1vdmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRvZ2dsZSBiYWNrIHRvIGhpZ2hsaWdodGluZyB0aGUgcGVyc29ubmVsIHdpdGggbGVnYWwgbW92ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogZW1pdCBzb21ldGhpbmcgdG8gc2hvdyBjbG9uZXMgdG8gY2xpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAnc2hvd1RpbGVzJywgZGV0YWlsczoge319LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSB0aGUgcGVyc29ubmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlLm1vdmUoZGF0YS54LCBkYXRhLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ21vdmVQZXJzb25uZWwnLCBkZXRhaWxzOiB7dXVpZDp0aGlzLmFjdGl2ZVBsYXllci5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZS51dWlkLCB4OmRhdGEueCwgeTpkYXRhLnl9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHt0eXBlOlwicGVyc29ubmVsXCIsIGRldGFpbHM6IHt1dWlkOnRoaXMuYWN0aXZlUGxheWVyLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlLnV1aWQsIHg6ZGF0YS54LCB5OmRhdGEueX19LCB0aGlzLmdldFBsYXllck9wcG9uZW50KHRoaXMuYWN0aXZlUGxheWVyKS5zb2NrZXRJRCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsZWFyIG1vdmVkIHBlcnNvbm5lbCBmcm9tIHRoZSBwbGF5ZXIgYXJyYXkuIElmIG1vdmVkIHBlcnNvbm5lbCB3YXMgYSBjbG9uZSwgcmVtb3ZlIEFMTCBjbG9uZXMgZnJvbSBhcnJheS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIucHVyZ2VMZWdhbFBpZWNlcyh0aGlzLmFjdGl2ZVBsYXllci5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZSwgdHJ1ZSk7IC8vIDJuZCBhcmc6IHRydWUgaXMgcGFzc2VkIGZvciBjbG9uZXM7IG51bGwgZm9yIGJpb2Ryb25lcy5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR1cm5TdGF0ZSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB0cmlnZ2VyIHRpbGUgYW5kIGVtaXQgYmF0dGxlIHRhcmdldHMgKGd1bm5lcnMsIGV0YykgdG8gUGxheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVUaWxlKHt4OmRhdGEueCwgeTpkYXRhLnl9KTsgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogaWYgdGlsZSBpcyBwcm9kdWN0aW9uLCBzdXJmYWNlLCBvciBhcm1vcnk7IGNoZWNrIGZvciBiaW9kcm9uZXMgYW5kIG1vdmUgb3JkbmFuY2UsIHRoZW4gKGlmIG5vbmUgYXJlIGZvdW5kKSBjaGFuZ2UgcGxheWVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbGUgPSB0aGlzLmdldFRpbGUoZGF0YS54LCBkYXRhLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHRpbGUudHlwZSA9PSBcInByb2R1Y3Rpb25cIiAgfHwgdGlsZS50eXBlID09IFwic3VyZmFjZVwiIHx8IHRpbGUudHlwZSA9PSBcImFybW9yeVwiIHx8IHRpbGUudHlwZSA9PSBcImxvY2tcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbGUubmFtZSA9PSBcInByb2RSZXBhaXJcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWV1ZWRUaWxlID0gdGlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGlsZS5uYW1lID09IFwiY2hlbWljYWxSZWFjdG9yXCIgfHwgdGlsZS5uYW1lID09IFwiY2hlbWljYWxSZWFjdG9yVHdvXCIgfHwgdGlsZS5uYW1lID09IFwiYWlyRmlsdGVyXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWV1ZWRUaWxlID0gdGlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UGVyc29ubmVsKCdiaW9kcm9uZScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBzZW5kIGJpb2Ryb25lIGFycmF5IHRvIGNsaWVudCBmb3Igc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmdldE9yZG5hbmNlKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IG1vdmUgb3JkbmFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUFjdGl2ZVBsYXllcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMudHVyblN0YXRlRW51bS5BQ1RJT046XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBsYXllciB3aWxsIGRlc2lnbmF0ZSBndW5uZXIocykgZm9yIGZpcmluZyBhbmQvb3IgYWRkaXRpb25hbCB0YXJnZXRzLCBkZXBlbmRpbmcgb24gdGhlIGJhdHRsZSB0aWxlIHR5cGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgd2lsbCBjb25maXJtIG1vdmVtZW50IHNlbGVjdGlvbnMgd2l0aCBHTyEgKHVubGVzcyByZXBhaXIgb3IgY291bnRlciBlc3Bpb25hZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBcnJheSBvZiBlbGlnaWJsZSBndW5uZXJzIHNlbnQgdmlhIGFjdGl2YXRlVGlsZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW1pdCBhcnJheSBvZiBlbGlnaWJsZSBndW5uZXJzIGFuZCBudW1iZXIgb2Ygc2VsZWN0YWJsZSBndW5uZXJzIHRvIFBsYXllci5cblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvblRpbGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnF1ZXVlZFRpbGUubmFtZSA9PSBcImNoZW1pY2FsUmVhY3RvclwiIHx8IHRoaXMucXVldWVkVGlsZS5uYW1lID09IFwiY2hlbWljYWxSZWFjdG9yVHdvXCIgfHwgdGhpcy5xdWV1ZWRUaWxlLm5hbWUgPT0gXCJhaXJGaWx0ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblRpbGUgPSB0aGlzLmdldFRpbGUoZGF0YS54LCBkYXRhLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb25UaWxlLm5hbWUgPT0gXCJsb2NrXCIgJiYgYWN0aW9uVGlsZS5kYW1hZ2VkID09PSBmYWxzZSAmJiBhY3Rpb25UaWxlLm9jY3VwaWVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlQ2xvbmUodGhpcy5hY3RpdmVQbGF5ZXIsIGRhdGEueCwgZGF0YS55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVDbG9uZXNUb0FkZC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hdmFpbGFibGVDbG9uZXNUb0FkZCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UGVyc29ubmVsKCdiaW9kcm9uZXMnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBzZW5kIGJpb2Ryb25lIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5nZXRPcmRuYW5jZSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IE1vdmUgb3JkbmFuY2UgYW5kIGNoZWNrIGZvciBkYW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUFjdGl2ZVBsYXllcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnF1ZXVlZFRpbGUubmFtZSA9PSBcImNvdW50ZXJFc3Bpb25hZ2VcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBzcGVjaWFsIGNhc2UuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucXVldWVkVGlsZS5uYW1lID09IFwicmVwYWlyXCIgfHwgdGhpcy5xdWV1ZWRUaWxlLm5hbWUgPT0gXCJyZXBhaXJUd29cIiB8fCB0aGlzLnF1ZXVlZFRpbGUubmFtZSA9PSBcInByb2RSZXBhaXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IFNwZWNpYWwgY2FzZXMuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblRpbGUgPSB0aGlzLmdldFRpbGUoZGF0YS54LCBkYXRhLnkpLmRhbWFnZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvblRpbGUuZGFtYWdlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25UaWxlLmRhbWFnZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVzUmVwYWlyZWRUaGlzVHVybisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAncmVwYWlyVGlsZScsIGRldGFpbHM6IHt4OmRhdGEueCwgeTpkYXRhLnl9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVzUmVwYWlyZWRUaGlzVHVybiA9PSAxKSB7ICAvLyBUT0RPOiBjaGVjayBmb3IgcmVwYWlyVHdvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZXNSZXBhaXJlZFRoaXNUdXJuID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbCgnYmlvZHJvbmVzJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogc2VuZCBiaW9kcm9uZSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuZ2V0T3JkbmFuY2UoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBNb3ZlIG9yZG5hbmNlIGFuZCBjaGVjayBmb3IgZGFtYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3RpdmVQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQZXJzb25uZWwgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRQZXJzb25uZWxCeVBvaW50KHt4OmRhdGEueCwgeTpkYXRhLnl9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRQZXJzb25uZWwgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci50b2dnbGVHdW5uZXJTZWxlY3Rpb24oc2VsZWN0ZWRQZXJzb25uZWwpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3Nob3dUaWxlcycsIGRldGFpbHM6IHt4OmRhdGEueCwgeTpkYXRhLnl9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdoaWRlVGlsZXMnLCBkZXRhaWxzOiB7eDpkYXRhLngsIHk6ZGF0YS55fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uVEFSR0VUUzpcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGxheWVyIHdpbGwgY2hvb3NlIGFkZGl0aW9uYWwgdGFyZ2V0cyBpZiByZXF1aXJlZCBieSB0aGUgdGlsZS4gRXNwb2luYWdlLCBmb3IgaW5zdGFuY2UsIHJlcXVpcmVzIGEgZ3VubmVyIGFuZCBhbiBlbmVteSBjbG9uZSBpbiB0aGUgc2VsZWN0ZWQgZ3VubmVyJ3MgbGluZSBvZiBmaXJlLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGxheWVyIHdpbGwgY29uZmlybSB0YXJnZXRzIHdpdGggR08hXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGFyZ2V0IHF1ZXVlZCFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMudHVyblN0YXRlRW51bS5PUkROQU5DRTpcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uRU5EOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbnkgcG9zdC10dXJuIHByb2Nlc3NpbmcgY2FuIGhhcHBlbiBoZXJlLiBPdGhlcndpc2UsIHRoZSB0dXJuIG1heSBhbHJlYWR5IGJlIG92ZXIuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHVyblN0YXRlID0gdGhpcy50dXJuU3RhdGVFbnVtLlJPTEw7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgICAgIFxuICAgIH1cblxuICAgIGdvKGRhdGEpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnR1cm5TdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uQUNUSU9OOlxuICAgICAgICAgICAgICAgIC8vIFBsYXllciBoYXMgY29uZmlybWVkIGd1bm5lciBzZWxlY3Rpb24uXG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuZ2V0U2VsZWN0ZWRHdW5uZXJzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcmVXZWFwb24odGhpcy5xdWV1ZWRUaWxlLCB0aGlzLmFjdGl2ZVBsYXllci5nZXRTZWxlY3RlZEd1bm5lcnMoKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IElmIHRhcmdldHMgYXJlIHJlcXVpcmVkIChpZSBlc3Bpb25hZ2UpIHNlbmQgdGhhdCBhcnJheSBub3cgYW5kIGFkdmFuY2UgdG8gVEFSR0VUUyBhbmQgUkVUVVJOXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogSWYgYmlvZHJvbmVzIGV4aXN0LCBzZW5kIHRoYXQgYXJyYXkgbm93IGFuZCBhZHZhbmNlIHRvIEJJT0RST05FUyBhbmQgUkVUVVJOXG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBJZiBwbGF5ZXIgaGFzIG9yZG5hbmNlLCBtb3ZlIG9yZG5hbmNlL2NoZWNrIGRhbWFnZSBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIub3JkbmFuY2VBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cGRhdGVkT3JkbmFuY2UgPSB0aGlzLmFjdGl2ZVBsYXllci5tb3ZlT3JkbmFuY2UodGhpcy5jdXJyZW50RGljZVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogQ2hlY2sgLyBhcHBseSBkYW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6J21vdmVPcmRuYW5jZScsIGRldGFpbHM6dXBkYXRlZE9yZG5hbmNlfSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQWN0aXZlUGxheWVyKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHRoaXMudHVyblN0YXRlRW51bS5UQVJHRVRTOlxuICAgICAgICAgICAgICAgIC8vIFBsYXllciBoYXMgY29uZmlybWVkIGFsbCB0YXJnZXRzICh0aGlzIHdpbGwgYXBwbHkgdG8gbGltaXRlZCBiYXR0bGUgdGlsZXMgbGlrZSBlc3Bpb25hZ2UpXG4gICAgICAgICAgICAgICAgLy8gSSBtYXkgY29tZSBiYWNrIHRvIHRoaXMgYSBiaXQgbGF0ZXIuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVXBkYXRlIGNsaWVudCB3aXRoIHJlc3VsdFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uQklPRFJPTkU6XG4gICAgICAgICAgICAgICAgLy8gUGxheWVyIGhhcyBjb25maXJtZWQgdGhhdCBiaW9kcm9uZSBzZWxlY3Rpb24gKGlmIGFueSkgaXMgZmluYWwuIFxuICAgICAgICAgICAgICAgIC8vIFRPRE86IE1vdmUgYmlvZHJvbmUocykgYW5kIHdyZWFrIGhhdm9rLiBcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBhZHZhbmNlIHR1cm5zdGF0ZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uRU5EOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH1cblxuXHRhZGROZXdQbGF5ZXIoc29ja2V0SUQsIHV1aWQpIHtcbiAgICAgICAgdGhpcy5sYXN0UGxheWVySUQrKztcbiAgICAgICAgdmFyIHBsYXllciA9IG5ldyBQbGF5ZXIoc29ja2V0SUQsIHRoaXMubGFzdFBsYXllcklELCB1dWlkKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzQXJyYXkucHVzaChwbGF5ZXIpO1xuICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3VwZGF0ZVBsYXllcicsIGRldGFpbHM6IHtpZDogdGhpcy5sYXN0UGxheWVySUR9fSwgc29ja2V0SUQpO1xuICAgICAgICByZXR1cm4gcGxheWVyO1xuXHR9XG5cbiAgICBhZGRQbGF5ZXIocGxheWVyKSB7XG4gICAgICAgIHRoaXMucGxheWVyc0FycmF5LnB1c2gocGxheWVyKTtcbiAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICd1cGRhdGVQbGF5ZXInLCBkZXRhaWxzOiB7aWQ6IHBsYXllci5pZH19LCBwbGF5ZXIuc29ja2V0SUQpO1xuICAgIH1cblxuICAgIHNldFBsYXllclN0YXRlKHN0YXRlKSB7XG4gICAgICAgIHZhciBwbGF5ZXIgPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKHN0YXRlLnZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlICdyZXNldCc6IFxuICAgICAgICAgICAgICAgIHBsYXllciA9IHRoaXMuZ2V0UGxheWVyQnlTb2NrZXRJRChzdGF0ZS5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgcGxheWVyLnJlbW92ZVBlcnNvbm5lbChudWxsLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcInJlbW92ZUFsbFBlcnNvbm5lbFwiLCBkZXRhaWxzOiB7fX0sIHBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdGFydCc6IFxuICAgICAgICAgICAgICAgIHBsYXllciA9IHRoaXMuZ2V0UGxheWVyQnlTb2NrZXRJRChzdGF0ZS5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgcGxheWVyLnJlYWR5VG9TdGFydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFyIG9wcG9uZW50ID0gdGhpcy5nZXRQbGF5ZXJPcHBvbmVudChwbGF5ZXIpO1xuICAgICAgICAgICAgICAgIGlmKCFvcHBvbmVudCB8fCAhb3Bwb25lbnQucmVhZHlUb1N0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3BwQ2xvbmVzID0gb3Bwb25lbnQuZ2V0UGVyc29ubmVsKCdjbG9uZScpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFBsYXllckNsb25lcyA9IHBsYXllci5nZXRQZXJzb25uZWwoJ2Nsb25lJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm90aWZ5IGN1cnJlbnQgcGxheWVyIG9mIG9wcG9uZW50IHBvc2l0aW9uc1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGxheWVyUGF5bG9hZCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIG9wcENsb25lcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyUGF5bG9hZC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Om9wcENsb25lc1tpXS54LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6b3BwQ2xvbmVzW2ldLnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXVpZDpvcHBDbG9uZXNbaV0udXVpZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHt0eXBlOlwicGVyc29ubmVsXCIsIGRldGFpbHM6cGxheWVyUGF5bG9hZH0sIHBsYXllci5zb2NrZXRJRCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm90aWZ5IG9wcG9uZW50IG9mIGN1cnJlbnQgcGxheWVyJ3MgcG9zaXRpb25zXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHBQYXlsb2FkID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGMgaW4gY3VycmVudFBsYXllckNsb25lcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BwUGF5bG9hZC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OmN1cnJlbnRQbGF5ZXJDbG9uZXNbY10ueCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OmN1cnJlbnRQbGF5ZXJDbG9uZXNbY10ueSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dWlkOmN1cnJlbnRQbGF5ZXJDbG9uZXNbY10udXVpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywge3R5cGU6XCJwZXJzb25uZWxcIiwgZGV0YWlsczpvcHBQYXlsb2FkfSwgb3Bwb25lbnQuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdCgndXBkYXRlJywge3R5cGU6XCJyZXNvdXJjZXNcIiwgYWN0aW9uOidpbml0J30pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyID0gdGhpcy5nZXRSYW5kb21QbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJvZmZlckRpY2VcIiwgZGV0YWlsczoge319LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlKys7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHN0YXRlLnZhbHVlICsgXCIgaXMgbm90IGEgdmFsaWQgcGxheWVyIHN0YXRlIVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFBsYXllck9wcG9uZW50KHBsYXllcikge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXJzQXJyYXkubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJzQXJyYXlbMF0gPT09IHBsYXllcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5WzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5WzBdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlQWN0aXZlUGxheWVyKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZVBsYXllci5jbGVhclF1ZXVlcygpO1xuICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcInRha2VEaWNlXCIsIGRldGFpbHM6IHt9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICB0aGlzLmFjdGl2ZVBsYXllciA9IHRoaXMuZ2V0UGxheWVyT3Bwb25lbnQodGhpcy5hY3RpdmVQbGF5ZXIpO1xuICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcIm9mZmVyRGljZVwiLCBkZXRhaWxzOiB7fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgdGhpcy50dXJuU3RhdGUgPSAwO1xuICAgIH1cblxuICAgIGdldFJhbmRvbVBsYXllcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIpXTtcbiAgICB9XG4gICAgXG4gICAgZ2V0UGxheWVyQnlVVUlEKHV1aWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnBsYXllcnNBcnJheSkge1xuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXJzQXJyYXlbaV0udXVpZCA9PSB1dWlkKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheVtpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgZ2V0UGxheWVyQnlTb2NrZXRJRChpZCkge1xuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMucGxheWVyc0FycmF5KSB7XG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcnNBcnJheVtpXS5zb2NrZXRJRCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0UGxheWVyQ291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheS5sZW5ndGg7XG4gICAgfVxuXG4gICAgY2hlY2tBcm1zKHBsYXllcikge1xuICAgICAgICBwbGF5ZXIuYXJtc0FycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgaW4gcGxheWVyLnBlcnNvbm5lbEFycmF5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy50aWxlQXJyYXlbcGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnhdW3BsYXllci5wZXJzb25uZWxBcnJheVtpXS55XS50eXBlID09IFwiYXJtb3J5XCIpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuYXJtc0FycmF5LnB1c2godGhpcy50aWxlQXJyYXlbcGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnhdW3BsYXllci5wZXJzb25uZWxBcnJheVtpXS55XS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjaGVja0d1bm5lcnMocGxheWVyKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gcGxheWVyLnBlcnNvbm5lbEFycmF5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy50aWxlQXJyYXlbcGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnhdW3BsYXllci5wZXJzb25uZWxBcnJheVtpXS55XS50eXBlID09IFwic3VyZmFjZVwiKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLmlzR3VubmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLmlzR3VubmVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleGlzdHNQbGF5ZXJVVUlEKHV1aWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnBsYXllcnNBcnJheSkge1xuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXJzQXJyYXlbaV0udXVpZCA9PSB1dWlkKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9ICAgIFxuXG4gICAgYWN0aXZhdGVUaWxlKGRhdGEpIHtcbiAgICAgICAgdmFyIHRpbGUgPSB0aGlzLmdldFRpbGUoZGF0YS54LCBkYXRhLnkpO1xuICAgICAgICB2YXIgcmVtYWluaW5nQ291bnQgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgc3dpdGNoICh0aWxlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzdXJmYWNlXCI6IFxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbEJ5UG9pbnQoe3g6ZGF0YS54LCB5OmRhdGEueX0pLmlzR3VubmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwcm9kdWN0aW9uXCI6XG5cbiAgICAgICAgICAgICAgICAvLyBUaHJlZSBzcGVjaWFsIGNhc2VzOiBcbiAgICAgICAgICAgICAgICAvLyAgLSBTZW5zb3IgQ2FiaW4gZG9lcyBub3QgY29zdCBvciB5aWVsZCBhbnl0aGluZy4gV2UgY2FuIGhhbmRsZSB0aGlzIGltbWVkaWF0ZWx5KVxuICAgICAgICAgICAgICAgIC8vICAtIFByb2R1Y3Rpb24gUmVwYWlyIGNvc3RzLCBidXQgdHJpZ2dlcnMgYSByZXBhaXIganVzdCBsaWtlIHRoZSBSZXBhaXIgYmF0dGxlIHRpbGUgKFdlIG5lZWQgdG8gY2hlY2sgaWYgd2UgY2FuIGFmZm9yZClcbiAgICAgICAgICAgICAgICAvLyAgLSBOdWNsZWFyIEFybW9yeSBwcm9kdWNlcyBhIG51a2Ugd2hpY2ggcmVsaWVzIG9uIG9yZG5hbmNlIHdoaWNoIGhhcyBub3QgYmVlbiBidWlsdCB5ZXRcblxuICAgICAgICAgICAgICAgIGlmKHRpbGUubmFtZSA9PSBcInNlbnNvckNhYmluXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHNlbnNvciBjYWJpbiBzbyBqdXN0IHRyaWdnZXIgdGhlIGFjdGlvbiBhbmQgbW92ZSBvbi5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZW5zb3IgY2FiaW5zIGFyZSBmcmVlIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmNoZWNrUmVzb3VyY2UodGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGVbaV0sIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RDb3VudFtpXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYW4ndCBhZmZvcmQgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FuJ3QgYWZmb3JkIGl0IVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogaW4gdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5jaGVja1Jlc291cmNlKHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkVHlwZVtqXSwgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRDb3VudFtqXSwgdHJ1ZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBObyByb29tIHRvIHN0b3JlIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbid0IGFjY2VwdCB0aGUgeWllbGQgY3V6IHdlIGdvdCBubyByb29tIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aWxlLm5hbWUgPT0gXCJjaGVtaWNhbFJlYWN0b3JcIiB8fCB0aWxlLm5hbWUgPT0gXCJjaGVtaWNhbFJlYWN0b3JUd29cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVDbG9uZXNUb0FkZCA9IHRoaXMuYWN0aXZlUGxheWVyLmdldFJlc291cmNlQ291bnQoJ294eWdlbicpICsgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRDb3VudFswXSAtIHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbCgnY2xvbmUnKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggdGlsZS5uYW1lID09IFwiYWlyRmlsdGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVDbG9uZXNUb0FkZCA9IHRoaXMuYWN0aXZlUGxheWVyLmdldFJlc291cmNlQ291bnQoJ294eWdlbicpICsgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRDb3VudFswXSAtIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RDb3VudFswXSAtIHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbCgnY2xvbmUnKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgayBpbiB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdDb3VudCA9IHRoaXMuYWN0aXZlUGxheWVyLnNwZW5kUmVzb3VyY2UodGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGVba10sIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RDb3VudFtrXSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIFwiICsgdGhpcy5hY3RpdmVQbGF5ZXIuaWQgKyBcIiBzcGVudCBcIiArIHJlbWFpbmluZ0NvdW50ICsgXCIgXCIgKyB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZVtrXSArIFwiLiBUaGlzIGxlYXZlcyB0aGVtIHdpdGggXCIgKyB0aGlzLmFjdGl2ZVBsYXllci5nZXRSZXNvdXJjZUNvdW50KHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlW2tdKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbCBpbiB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nQ291bnQgPSB0aGlzLmFjdGl2ZVBsYXllci5hY2NlcHRSZXNvdXJjZSh0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZFR5cGVbbF0sIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkQ291bnRbbF0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVtYWluaW5nQ291bnQpIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXIgXCIgKyB0aGlzLmFjdGl2ZVBsYXllci5pZCArIFwiIGFkZGVkIFwiICsgcmVtYWluaW5nQ291bnQgKyBcIiBcIiArIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkVHlwZVtsXSArIFwiLiBUaGlzIGxlYXZlcyB0aGVtIHdpdGggXCIgKyB0aGlzLmFjdGl2ZVBsYXllci5nZXRSZXNvdXJjZUNvdW50KHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkVHlwZVtsXSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aWxlLm5hbWUgPT0gXCJveHlnZW5cIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBDaGVjayBpZiBveHlnZW4gaXMgZ3JlYXRlciB0aGFuIHRoZSBudW1iZXIgb2YgY2xvbmVzLiBJZiBzbywgYWRkIGEgY2xvbmUuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5nZXRSZXNvdXJjZUNvdW50KCdveHlnZW4nKSA+IHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbCgnY2xvbmUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWV1ZWRUaWxlID0gdGlsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aWxlLm5hbWUgPT0gXCJwcm9kUmVwYWlyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVHJpZ2dlciB0aGUgcmVwYWlyIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlZFRpbGUgPSB0aWxlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nIChcIisrKysrKytcIik7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgcGxheWVyIHRvIHRoZWlyIG5ldyB3YXJlaG91c2UgdmFsdWVzXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgXCJhcm1vcnlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQXJtcyh0aGlzLmFjdGl2ZVBsYXllcik7XG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHBsYXllcidzIHBlcnNvbm5lbCB0byBiZSBhcm1lZFxuICAgICAgICAgICAgICAgIC8vIE1heWJlIGhhdmUgdGhyZWUgb3ZlcmxhcHBpbmcgc3ByaXRlcy4gRHJpbGwsIENhbm5vbiwgRXhwbG9zaXZlcz9cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImJhdHRsZVwiOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGlsZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzaGllbGRcIjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJpb2Ryb25lXCI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJsYXNlclwiOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidGhlcm1pdGVcIjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNhdGVsbGl0ZVwiOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicm9ja2V0XCI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlc3Bpb25hZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRha2VvdmVyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnR1cm5TdGF0ZSsrOyAvLyBTZXQgc3RhdGUgdG8gQUNUSU9OLlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRSZXNvdXJjZUNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50UmVzb3VyY2VBZmZvcmRhYmlsaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhZmZvcmRhYmxlUm91bmRzID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUd1bm5lcnMgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRHdW5uZXJzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVHdW5uZXJzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIE5vIGd1bm5lcnMhIEdldCBvdXQgb2YgaGVyZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbSBpbiB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZXNvdXJjZUNvdW50ID0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UmVzb3VyY2VDb3VudCh0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZVttXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlQWZmb3JkYWJpbGl0eSA9IGN1cnJlbnRSZXNvdXJjZUNvdW50IC8gdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdENvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVzb3VyY2VBZmZvcmRhYmlsaXR5IDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIE5vdCBlbm91Z2ggb2YgYSByZXNvdXJjZSFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZmZvcmRhYmxlUm91bmRzID09PSBudWxsIHx8IGN1cnJlbnRSZXNvdXJjZUFmZm9yZGFiaWxpdHkgPCBhZmZvcmRhYmxlUm91bmRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmZm9yZGFibGVSb3VuZHMgPSBjdXJyZW50UmVzb3VyY2VBZmZvcmRhYmlsaXR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVsbCBwbGF5ZXIgdGhleSBjYW4gYWZmb3JkIFwiICsgYWZmb3JkYWJsZVJvdW5kcyArIFwiIGd1bm5lcihzKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVldWVkVGlsZSA9IHRpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBlbWl0IHNob3dUaWxlcygpIHdpdGggYXJyYXkgb2YgbGVnYWwgZ3VubmVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJvZmZlckd1bm5lcnNcIiwgZGV0YWlsczp7Z3VubmVyczphY3RpdmVHdW5uZXJzfX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlYWR5IHRvIHNlbGVjdCBndW5uZXJzISBUaGlzIHdpbGwgdGFrZSBwbGFjZSBvbiB0aGUgbmV4dCBsZWdhbCBjbGljayBldmVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvdW50ZXJFc3Bpb25hZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvb2sgZm9yIGNsb25lcyB0aGF0IGFyZSBvcHBvbmVudCdzIHNwaWVkXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmVwYWlyXCI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyZXBhaXJUd29cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVldWVkVGlsZSA9IHRpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjdXJyZW50UmVzb3VyY2VDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2YXIgYWN0aXZlRGFtYWdlZFRpbGVzID0gdGhpcy5nZXREYW1hZ2VkVGlsZXModGhpcy5hY3RpdmVQbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGFjdGl2ZURhbWFnZWRUaWxlcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLy8gY2FsY3VsYXRlIGNvc3Qgb2YgcmVwYWlyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IgKHZhciBuIGluIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY3VycmVudFJlc291cmNlQ291bnQgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRSZXNvdXJjZUNvdW50KHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlW25dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoY3VycmVudFJlc291cmNlQ291bnQgPCB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0Q291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuOyAvLyBOb3QgZW5vdWdoIG9mIGEgcmVzb3VyY2UhXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGVsbCBwbGF5ZXIgdGhhdCB0aGV5IGNhbiBhZmZvcmQgdG8gZml4IHVwIHRoZSBzdGF0aW9uIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRpbGVPY2N1cGFudChwb2ludCkge1xuICAgICAgICB2YXIgb3JkbmFuY2UsIHBlcnNvbm5lbDtcbiAgICAgICAgZm9yICh2YXIgcGkgPSAwOyBwaSA8IHRoaXMucGxheWVyc0FycmF5Lmxlbmd0aDsgcGkrKykge1xuICAgICAgICAgICAgb3JkbmFuY2UgPSB0aGlzLnBsYXllcnNBcnJheVtwaV0uZ2V0T3JkbmFuY2VCeVBvaW50KHBvaW50KTtcbiAgICAgICAgICAgIHBlcnNvbm5lbCA9IHRoaXMucGxheWVyc0FycmF5W3BpXS5nZXRQZXJzb25uZWxCeVBvaW50KHBvaW50KTtcbiAgICAgICAgICAgIGlmIChvcmRuYW5jZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JkbmFuY2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBlcnNvbm5lbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGVyc29ubmVsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJlV2VhcG9uKHdlYXBvblRpbGUsIGd1bm5lckFycmF5KSB7XG4gICAgICAgIGlmIChndW5uZXJBcnJheS5sZW5ndGggPD0gMCApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3VubmVyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvcmRuYW5jZVBvaW50ID0ge3g6Z3VubmVyQXJyYXlbaV0ueCwgeTpndW5uZXJBcnJheVtpXS55fTtcbiAgICAgICAgICAgIHZhciBpbXBhY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIG9yZFVVSUQ7XG5cbiAgICAgICAgICAgIHN3aXRjaCAod2VhcG9uVGlsZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImxhc2VyXCI6XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VGlsZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRPY2N1cGFudDtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGltcGFjdGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmlkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRuYW5jZVBvaW50LngrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkbmFuY2VQb2ludC54LS07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGlsZSA9IHRoaXMuZ2V0VGlsZShvcmRuYW5jZVBvaW50LngsIG9yZG5hbmNlUG9pbnQueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VGlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGN1cnJlbnRUaWxlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3BhY2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3VyZmFjZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFRpbGUub2NjdXBpZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPY2N1cGFudCA9IHRoaXMuZ2V0VGlsZU9jY3VwYW50KG9yZG5hbmNlUG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIucmVtb3ZlKGN1cnJlbnRPY2N1cGFudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGlsZS5vY2N1cGllZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wYWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gWW91IGFyZSBpbiB0aGUgb3Bwb25lbnQgbWluZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUaWxlLm9jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50T2NjdXBhbnQgPSB0aGlzLmdldFRpbGVPY2N1cGFudChvcmRuYW5jZVBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLnJlbW92ZVBlcnNvbm5lbChjdXJyZW50T2NjdXBhbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogZW1pdCBkZWF0aCBhbmltYXRpb24gdG8gY2xpZW50cy4gKG1heWJlIGp1c3QgYWRkIHRoYXQgdG8gdGhlIHJlbW92ZVBlcnNvbm5lbCgpPylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwicmVtb3ZlUGVyc29ubmVsXCIsIGRldGFpbHM6Y3VycmVudE9jY3VwYW50fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbGUub2NjdXBpZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwiZGFtYWdlVGlsZVwiICxkZXRhaWxzOm9yZG5hbmNlUG9pbnR9LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB1cGRhdGUgb3Bwb25lbnQncyBjbGllbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcGFjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGlsZS5kYW1hZ2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlLmRhbWFnZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJkYW1hZ2VUaWxlXCIgLGRldGFpbHM6b3JkbmFuY2VQb2ludH0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHVwZGF0ZSBvcHBvbmVudCdzIGNsaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wYWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic2hpZWxkXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcImJpb2Ryb25lXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcInNhdGVsbGl0ZVwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJyb2NrZXRcIjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdlYXBvblRpbGUubmFtZSA9PSBcInNoaWVsZFwiIHx8IHdlYXBvblRpbGUubmFtZSA9PSBcInNhdGVsbGl0ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuaWQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZG5hbmNlUG9pbnQueCArPSB0aGlzLmN1cnJlbnREaWNlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZG5hbmNlUG9pbnQueCAtPSB0aGlzLmN1cnJlbnREaWNlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbGUgPSB0aGlzLmdldFRpbGUob3JkbmFuY2VQb2ludC54LCBvcmRuYW5jZVBvaW50LnkpO1xuICAgICAgICAgICAgICAgICAgICBvcmRVVUlEID0gdXVpZCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllci5hZGRPcmRuYW5jZSh3ZWFwb25UaWxlLm5hbWUsIG9yZG5hbmNlUG9pbnQsIG9yZFVVSUQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcImFkZE9yZG5hbmNlXCIsIGRldGFpbHM6e3R5cGU6d2VhcG9uVGlsZS5uYW1lLCBwbGF5ZXJJRDogdGhpcy5hY3RpdmVQbGF5ZXIuaWQsIHBvaW50Om9yZG5hbmNlUG9pbnQsIHV1aWQ6b3JkVVVJRH19LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgIC8vVE9ETzogdXBkYXRlUGVyc29ubmVsIG9uIG9wcG9uZW50IGNsaWVudFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidGhlcm1pdGVcIjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmlkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZG5hbmNlUG9pbnQueCA9IDMxIC0gdGhpcy5jdXJyZW50RGljZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JkbmFuY2VQb2ludC54ID0gdGhpcy5jdXJyZW50RGljZVZhbHVlIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGlsZSA9IHRoaXMuZ2V0VGlsZShvcmRuYW5jZVBvaW50LngsIG9yZG5hbmNlUG9pbnQueSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGlsZS5kYW1hZ2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlLmRhbWFnZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJkYW1hZ2VUaWxlXCIgLGRldGFpbHM6b3JkbmFuY2VQb2ludH0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSBpcyBhIHByb2JsZW0gd2l0aCB0aGF0IHdlYXBvblRpbGUgYXJndW1lbnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuOyBcbiAgICAgICAgLy8gc3dpdGNoICh3ZWFwb25UaWxlLm5hbWUpIHtcbiAgICAgICAgLy8gICAgIGNhc2UgXCJlc3Bpb25hZ2VcIjpcbiAgICAgICAgLy8gICAgIGNhc2UgXCJ0YWtlb3ZlclwiOlxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgaXMgYSBwcm9ibGVtIHdpdGggdGhhdCB3ZWFwb25UaWxlIGFyZ3VtZW50XCIpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgZ2V0TG9ja3MocGxheWVyKSB7XG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBjIGluIHRoaXMudGlsZUFycmF5KSB7XG4gICAgICAgICAgICBmb3IgKHZhciByIGluIHRoaXMudGlsZUFycmF5W2NdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZUFycmF5W2NdW3JdLm5hbWUgPT0gXCJsb2NrXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5pZCA9PSAxICYmIGMgPCAxMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy50aWxlQXJyYXlbY11bcl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIuaWQgPT0gMiAmJiBjID4gMTgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMudGlsZUFycmF5W2NdW3JdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy50aWxlQXJyYXlbY11bcl0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcbiAgICB9XG5cbiAgICBnZXREYW1hZ2VkVGlsZXMocGxheWVyKSB7XG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBjIGluIHRoaXMudGlsZUFycmF5KSB7XG4gICAgICAgICAgICBmb3IgKHZhciByIGluIHRoaXMudGlsZUFycmF5W2NdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyLmlkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjIDwgMTIgJiYgdGhpcy50aWxlQXJyYXlbY11bcl0uZGFtYWdlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy50aWxlQXJyYXlbY11bcl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjID4gMTggJiYgdGhpcy50aWxlQXJyYXlbY11bcl0uZGFtYWdlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy50aWxlQXJyYXlbY11bcl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVBcnJheVtjXVtyXS5kYW1hZ2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMudGlsZUFycmF5W2NdW3JdKTtcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVybkFycmF5O1xuICAgIH1cbiAgICBcbiAgICBwbGFjZUNsb25lKHBsYXllciwgeCwgeSkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgcGxheWVyID09PSAndW5kZWZpbmVkJyB8fCBwbGF5ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxlY3RlZFRpbGUgPSB0aGlzLmdldFRpbGUoeCwgeSk7XG4gICAgICAgIHZhciBjbG9uZSwgY2xvbmVVVUlEO1xuXG4gICAgICAgIGlmIChwbGF5ZXIuaWQgIT0gc2VsZWN0ZWRUaWxlLm93bmVyIHx8IHNlbGVjdGVkVGlsZS5vY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgZ2FtZXN0YXRlIGlzIFNFVFVQIHlvdSBjYW4gcGxhY2UgaW4gbG9jaywgYmF0dGxlLCBhcm1vcnksIGFuZCBwcm9kdWN0aW9uIHRpbGVzLCBvdGhlcndpc2Ugb25seSBpbiBsb2NrIHRpbGVzLlxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IHRoaXMuZ2FtZVN0YXRlRW51bS5TRVRVUCkge1xuICAgICAgICAgICAgaWYgKHBsYXllci5nZXRQZXJzb25uZWwoJ2Nsb25lJykubGVuZ3RoID09PSBwbGF5ZXIuc3RhcnRpbmdDbG9uZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoc2VsZWN0ZWRUaWxlLnR5cGUgPT0gXCJsb2NrXCIgfHwgc2VsZWN0ZWRUaWxlLnR5cGUgPT0gXCJiYXR0bGVcIiB8fCBzZWxlY3RlZFRpbGUudHlwZSA9PSBcImFybW9yeVwiIHx8IHNlbGVjdGVkVGlsZS50eXBlID09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgY2xvbmVVVUlEID0gdXVpZCgpO1xuICAgICAgICAgICAgICAgIGNsb25lID0gcGxheWVyLmFkZFBlcnNvbm5lbCgnY2xvbmUnLCB4LCB5LCBjbG9uZVVVSUQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlICB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRUaWxlLnR5cGUgPT0gXCJsb2NrXCIpIHtcbiAgICAgICAgICAgICAgICBjbG9uZVVVSUQgPSB1dWlkKCk7XG4gICAgICAgICAgICAgICAgY2xvbmUgPSBwbGF5ZXIuYWRkUGVyc29ubmVsKCdjbG9uZScsIHgsIHksIGNsb25lVVVJRCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlVGlsZUFycmF5KCkge1xuICAgICAgICB2YXIgdGlsZUpTT04gPSByZXF1aXJlKCcuLi8uLi9hc3NldHMvdGlsZURldGFpbC5qc29uJyk7XG5cbiAgICAgICAgZm9yKHZhciBjID0gMDsgYyA8IHRoaXMudGlsZUNvbHVtbnM7IGMrKykge1xuICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbY10gPSBbXTtcbiAgICAgICAgICAgIGZvcih2YXIgciA9IDA7IHIgPCB0aGlzLnRpbGVSb3dzOyByKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjXVtyXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDpjLFxuICAgICAgICAgICAgICAgICAgICB5OnJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRpbGVKU09OKSB7XG4gICAgICAgICAgICBpZiAoIXRpbGVKU09OLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgb2JqID0gdGlsZUpTT05ba2V5XTtcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgLy8gc2tpcCBsb29wIGlmIHRoZSBwcm9wZXJ0eSBpcyBmcm9tIHByb3RvdHlwZVxuICAgICAgICAgICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBsb2NhdGlvbkNvdW50ID0gb2JqW3Byb3BdLmxvY2F0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2NhdGlvbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb29yZHMgPSBvYmpbcHJvcF0ubG9jYXRpb25zW2ldLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBjb29yZHNbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gY29vcmRzWzFdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0uZGFtYWdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5vY2N1cGllZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50eXBlID0gb2JqW3Byb3BdLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4IDwgOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0ub3duZXIgPSAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHggPiAyMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0ub3duZXIgPSAyO1xuICAgICAgICAgICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy50aWxlQXJyYXlbeF1beV0gIT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5uYW1lID0gb2JqW3Byb3BdLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHggKyBcIjpcIiArIHkgKyBcIiBub3QgZm91bmQhXCIpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcF0ucHJvcGVydGllcyAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0ucHJvcGVydGllcyA9IG9ialtwcm9wXS5wcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUaWxlKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZUFycmF5W3hdW3ldO1xuICAgIH1cblxuICAgIGdldExlZ2FsUGllY2VzKCkge1xuICAgICAgICB2YXIgcGVyc29ubmVsQXJyYXkgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRQZXJzb25uZWwoKTtcbiAgICAgICAgdmFyIHJldHVybkFycmF5ID0gW107XG4gICAgICAgIHZhciBtb3Zlc0FycmF5ID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSBpbiBwZXJzb25uZWxBcnJheSkge1xuICAgICAgICAgICAgbW92ZXNBcnJheSA9IHRoaXMuZ2V0TGVnYWxNb3ZlcyhwZXJzb25uZWxBcnJheVtpXSwgdGhpcy5jdXJyZW50RGljZVZhbHVlLCB7eDpwZXJzb25uZWxBcnJheVtpXS54LCB5OnBlcnNvbm5lbEFycmF5W2ldLnl9KTtcbiAgICAgICAgICAgIGlmIChtb3Zlc0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHt0eXBlOnBlcnNvbm5lbEFycmF5W2ldLnR5cGUsb3JpZ2luOnt4OnBlcnNvbm5lbEFycmF5W2ldLngseTpwZXJzb25uZWxBcnJheVtpXS55fSwgdXVpZDpwZXJzb25uZWxBcnJheVtpXS51dWlkLCBtb3Zlczptb3Zlc0FycmF5fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVybkFycmF5O1xuICAgIH1cblxuICAgIGdldENvb3JkRnJvbURpcmVjdGlvbihvcmlnaW5Db29yZCxkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIGRpcj17Tk9SVEg6e3g6MCx5Oi0xfSxFQVNUOnt4OjEseTowfSxTT1VUSDp7eDowLHk6MX0sV0VTVDp7eDotMSx5OjB9fTtcbiAgICAgICAgXG4gICAgICAgIHZhciBvYmogPSB7eDoocGFyc2VJbnQob3JpZ2luQ29vcmQueCkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS54KSksIHk6KHBhcnNlSW50KG9yaWdpbkNvb3JkLnkpICsgcGFyc2VJbnQoZGlyW2RpcmVjdGlvbl0ueSkpfTtcbiAgICAgICAgaWYob2JqLnggPCAwIHx8IG9iai54ID4gMzB8fCBvYmoueSA8IDAgfHwgb2JqLnkgPiAyMCkgXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB7eDoocGFyc2VJbnQob3JpZ2luQ29vcmQueCkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS54KSksIHk6KHBhcnNlSW50KG9yaWdpbkNvb3JkLnkpICsgcGFyc2VJbnQoZGlyW2RpcmVjdGlvbl0ueSkpfTsgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBnZXRMZWdhbE1vdmVzKGdhbWVQaWVjZVR5cGUsIG1vdmVzLCBjdXJyZW50Q29vcmQsIHByZXZpb3VzQ29vcmQpe1xuICAgICAgICBpZiAobW92ZXMgPCAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSWxsZWdhbCBtb3ZlIG51bWJlciEgVGhpcyBjb3VsZCByZXN1bHQgaW4gaW5maW5pdGUgbG9vcC5cIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxlZ2FsTW92ZXMgPSBbXTtcbiAgICAgICAgdmFyIHJldHVybkFycmF5ID0gW107XG4gICAgICAgIHZhciBuZXh0TW92ZVRvQ2hlY2sgPSBudWxsO1xuICAgICAgICB2YXIgbmV4dFRpbGVUb0NoZWNrID0gbnVsbDtcbiAgICAgICAgbW92ZXMtLTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvY2Vzcy5tZW1vcnlVc2FnZSgpLmhlYXBVc2VkKTtcblxuICAgICAgICBpZiAodHlwZW9mIHByZXZpb3VzQ29vcmQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2YXIgbG9ja3MgPSB0aGlzLmdldExvY2tzKHRoaXMuYWN0aXZlUGxheWVyKTtcbiAgICAgICAgICAgIHZhciBpc0xvY2sgPSBmYWxzZTtcblxuICAgICAgICAgICAgZm9yICh2YXIgbCBpbiBsb2Nrcykge1xuICAgICAgICAgICAgICAgIGlmIChsb2Nrc1tsXS54ID09IGN1cnJlbnRDb29yZC54ICYmIGxvY2tzW2xdLnkgPT0gY3VycmVudENvb3JkLnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNMb2NrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc0xvY2sgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIGxvY2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q29vcmQueCA9PSBsb2Nrc1tpXS54ICYmIGN1cnJlbnRDb29yZC55ID09IGxvY2tzW2ldLnkpIHsgY29udGludWU7IH0gLy8gZG9uJ3QgaW5jbHVkZSB0aGUgbG9jayB5b3UncmUgc2l0dGluZyBvblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlQXJyYXlbbG9ja3NbaV0ueF1bbG9ja3NbaV0ueV0ub2NjdXBpZWQgPT09IHRydWUpIHsgY29udGludWU7IH0gLy8gZG9uJ3QgaW5jbHVkZSBsb2NrIHRoYXQgb3RoZXJzIGFyZSBzaXR0aW5nIG9uXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlcyA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5ID0gcmV0dXJuQXJyYXkuY29uY2F0KHRoaXMuZ2V0TGVnYWxNb3ZlcyhnYW1lUGllY2VUeXBlLCBtb3Zlcywge3g6bG9ja3NbaV0ueCwgeTpsb2Nrc1tpXS55fSwgY3VycmVudENvb3JkKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKGxvY2tzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjIGluIHJldHVybkFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXR1cm5BcnJheVtjXS54ICE9PSBjdXJyZW50Q29vcmQueCB8fCByZXR1cm5BcnJheVtjXS55ICE9PSBjdXJyZW50Q29vcmQueSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdhbE1vdmVzLnB1c2gocmV0dXJuQXJyYXlbY10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciBkaXJlY3Rpb24gaW4gdGhpcy5kaXJlY3Rpb25FbnVtKSB7XG4gICAgICAgICAgICBuZXh0TW92ZVRvQ2hlY2sgPSB0aGlzLmdldENvb3JkRnJvbURpcmVjdGlvbihjdXJyZW50Q29vcmQsIGRpcmVjdGlvbik7XG4gICAgICAgICAgICBpZihuZXh0TW92ZVRvQ2hlY2sgPT09IGZhbHNlKSB7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG5leHRUaWxlVG9DaGVjayA9IHRoaXMudGlsZUFycmF5W25leHRNb3ZlVG9DaGVjay54XVtuZXh0TW92ZVRvQ2hlY2sueV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChuZXh0VGlsZVRvQ2hlY2suZGFtYWdlZCA9PT0gdHJ1ZSkgeyBjb250aW51ZTsgfVxuICAgICAgICAgICAgaWYgKG5leHRUaWxlVG9DaGVjay50eXBlID09PSBcInNwYWNlXCIpIHsgY29udGludWU7IH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrV2FsbCh0aGlzLmRpcmVjdGlvbkVudW1bZGlyZWN0aW9uXSwgY3VycmVudENvb3JkKSA9PT0gZmFsc2UpIHsgY29udGludWU7IH1cblxuICAgICAgICAgICAgaWYoKHR5cGVvZiBwcmV2aW91c0Nvb3JkID09PSAndW5kZWZpbmVkJykgfHwgKCh0eXBlb2YgcHJldmlvdXNDb29yZCAhPT0gJ3VuZGVmaW5lZCcpICYmIChKU09OLnN0cmluZ2lmeShuZXh0TW92ZVRvQ2hlY2spICE9PSBKU09OLnN0cmluZ2lmeShwcmV2aW91c0Nvb3JkKSkgKSkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRpbGUgaXMgb2NjdXBpZWRcbiAgICAgICAgICAgICAgICBpZiAobW92ZXMgPT09IDApe1xuICAgICAgICAgICAgICAgICAgICBpZihuZXh0VGlsZVRvQ2hlY2sub2NjdXBpZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWdhbE1vdmVzLnB1c2gobmV4dE1vdmVUb0NoZWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkgPSByZXR1cm5BcnJheS5jb25jYXQodGhpcy5nZXRMZWdhbE1vdmVzKGdhbWVQaWVjZVR5cGUsIG1vdmVzLCBuZXh0TW92ZVRvQ2hlY2ssIGN1cnJlbnRDb29yZCkpO1xuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGluZGV4IGluIHJldHVybkFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXR1cm5BcnJheVtpbmRleF0ueCAhPT0gY3VycmVudENvb3JkLnggfHwgcmV0dXJuQXJyYXlbaW5kZXhdLnkgIT09IGN1cnJlbnRDb29yZC55KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2FsTW92ZXMucHVzaChyZXR1cm5BcnJheVtpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWdhbE1vdmVzO1xuICAgIH1cblxuICAgIGNoZWNrV2FsbChkaXJlY3Rpb24sIGN1cnJlbnRDb29yZGluYXRlKSB7XG4gICAgICAgIHRoaXMud2FsbEdyaWQgPSByZXF1aXJlKCcuLi8uLi9hc3NldHMvd2FsbEdyaWQuanNvbicpO1xuXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKXtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5kaXJlY3Rpb25FbnVtLk5PUlRIOiAvLyBVUFxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCh0aGlzLndhbGxHcmlkLmdyaWRbY3VycmVudENvb3JkaW5hdGUueF1bY3VycmVudENvb3JkaW5hdGUueV0mdGhpcy5kaXJlY3Rpb25FbnVtLk5PUlRIKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uU09VVEg6IC8vIERPV05cbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy53YWxsR3JpZC5ncmlkW2N1cnJlbnRDb29yZGluYXRlLnhdW2N1cnJlbnRDb29yZGluYXRlLnldJnRoaXMuZGlyZWN0aW9uRW51bS5TT1VUSCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5kaXJlY3Rpb25FbnVtLkVBU1Q6IC8vIFJJR0hUXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uRUFTVCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5kaXJlY3Rpb25FbnVtLldFU1Q6IC8vIExFRlRcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy53YWxsR3JpZC5ncmlkW2N1cnJlbnRDb29yZGluYXRlLnhdW2N1cnJlbnRDb29yZGluYXRlLnldJnRoaXMuZGlyZWN0aW9uRW51bS5XRVNUKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBcbiAgICByb2xsRGljZShkYXRhKSB7XG4gICAgICAgIGlmKHRoaXMudHVyblN0YXRlID09IHRoaXMudHVyblN0YXRlRW51bS5ST0xMICYmIHRoaXMuZ2FtZVN0YXRlID09IHRoaXMuZ2FtZVN0YXRlRW51bS5HQU1FICYmIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEID09IGRhdGEuc29ja2V0SUQpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERpY2VWYWx1ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpICsgMTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLmN1cnJlbnRMZWdhbFBpZWNlcyA9IHRoaXMuZ2V0TGVnYWxQaWVjZXMoKTtcblxuICAgICAgICAgICAgLy8gUGxheWVyIHJlY2VpdmVzIGFycmF5IG9mIGxlZ2FsIHBlcnNvbm5lbCAoY2xvbmVzKSBhbmQgdHVybiBzdGF0ZSBhZHZhbmNlcyB0byBNT1ZFXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcImRpY2VSb2xsZWRcIiwgZGV0YWlsczoge3ZhbHVlOnRoaXMuY3VycmVudERpY2VWYWx1ZSwgZ2FtZVBpZWNlczp0aGlzLmFjdGl2ZVBsYXllci5jdXJyZW50TGVnYWxQaWVjZXN9fSwgZGF0YS5zb2NrZXRJRCk7XG4gICAgICAgICAgICB0aGlzLnR1cm5TdGF0ZSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldChkYXRhKSB7XG4gICAgICAgIGlmKHR5cGVvZihkYXRhLnByb3BlcnR5KSA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZXNwb25zZScsIHtkZXRhaWxzOnRoaXNbZGF0YS5wcm9wZXJ0eV19LCBkYXRhLnNvY2tldElEKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBlbWl0KG1zZywgZGF0YSwgc29ja2V0SUQpIHtcblxuICAgICAgICBpZih0eXBlb2Yoc29ja2V0SUQpID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBTb2NrZXRJRCBmb3VuZCwgc28gSSdtIGJyb2FkY2FzdGluZyFcIik7XG4gICAgICAgICAgICB0aGlzLmJyb2FkY2FzdChtc2csIGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pby5zb2NrZXRzLmNvbm5lY3RlZFtzb2NrZXRJRF0uZW1pdChtc2csIGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGJyb2FkY2FzdChtc2csIGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnBsYXllcnNBcnJheSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobXNnICsgXCIgOjogXCIgKyBkYXRhICsgXCIgOjogXCIgKyAgdGhpcy5wbGF5ZXJzQXJyYXlbaV0uc29ja2V0SUQpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KG1zZywgZGF0YSwgdGhpcy5wbGF5ZXJzQXJyYXlbaV0uc29ja2V0SUQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNlcnZlckZ1bGwocGxheWVyKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAnc2VydmVyRnVsbCcsIGRldGFpbHM6IHtpZDogcGxheWVyLmlkfX0sIHBsYXllci5zb2NrZXRJRCk7XG4gICAgfVxuICAgIFxufVxuXG5tb2R1bGUuZXhwb3J0cy5TZXB0aWtvbiA9IFNlcHRpa29uO1xuIiwiaW1wb3J0IFNlcHRpa29uIGZyb20gJy4uL3ByZWZhYnMvc2VwdGlrb24nO1xuXG5jbGFzcyBCb290IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHJlbG9hZCgpIHtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3ByZWxvYWRlcicsICdhc3NldHMvcHJlbG9hZGVyLmdpZicpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuZ2FtZS5pbnB1dC5tYXhQb2ludGVycyA9IDE7XG4gICAgdGhpcy5nYW1lLnRpbWUuYWR2YW5jZWRUaW1pbmcgPSB0cnVlO1xuICAgIHRoaXMuZ2FtZS5zY2FsZS5wYWdlQWxpZ25Ib3Jpem9udGFsbHkgPSB0cnVlO1xuICAgICAgdGhpcy5nYW1lLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuUkVTSVpFO1xuICAgIC8vc2V0dXAgZGV2aWNlIHNjYWxpbmdcbiAgICBpZiAoIXRoaXMuZ2FtZS5kZXZpY2UuZGVza3RvcCkge1xuICAgICAgdGhpcy5nYW1lLnNjYWxlLnBhcmVudElzV2luZG93ID0gdHJ1ZTtcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlJFU0laRTtcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5taW5XaWR0aCA9ICA0ODA7XG4gICAgICB0aGlzLmdhbWUuc2NhbGUubWluSGVpZ2h0ID0gMjYwO1xuICAgICAgdGhpcy5nYW1lLnNjYWxlLmZvcmNlT3JpZW50YXRpb24odHJ1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0R2xvYmFsVmFyaWFibGVzKCk7XG4gICAgXG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdwcmVsb2FkZXInKTtcbiAgfVxuXG4gIGluaXRHbG9iYWxWYXJpYWJsZXMoKXtcbiAgICB0aGlzLmdhbWUuZ2xvYmFsID0ge1xuICAgICAgc2NvcmU6IDAsXG4gICAgICBsYXN0RGljZVJvbGw6IDAsXG4gICAgfTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb3Q7XG4iLCJpbXBvcnQgRGljZSBmcm9tICcuLi9wcmVmYWJzL2RpY2UnO1xuaW1wb3J0IENvbmZpcm0gZnJvbSAnLi4vcHJlZmFicy9jb25maXJtJztcblxuY2xhc3MgR2FtZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBcbiAgY3JlYXRlKCkge1xuICBcbiAgICAvL3RoaXMuZ2FtZS5pbnB1dC5vbkRvd24uYWRkKHRoaXMudG9nZ2xlRnVsbHNjcmVlbiwgdGhpcyk7XG4gICAgdGhpcy5nYW1lLnN0YWdlLmRpc2FibGVWaXNpYmlsaXR5Q2hhbmdlID0gdHJ1ZTtcbiAgICBcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cCA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICB0aGlzLmdhbWUuaHVkR3JvdXAgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XG5cbiAgICB0aGlzLmdhbWUubW9kYWwgPSBuZXcgZ2FtZU1vZGFsKHRoaXMuZ2FtZSk7XG4gICAgdGhpcy5jcmVhdGVNb2RhbHMoKTtcblxuICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwnYmFja2dyb3VuZCcpO1xuICAgIHRoaXMuYmFja2dyb3VuZC5hbmNob3Iuc2V0VG8oMC41LDAuNSk7XG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2VudGVyWCA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYO1xuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNlbnRlclkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWTtcblxuICAgIHRoaXMuZ2FtZS5odWRCZyA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwnaHVkLWJnJyk7XG5cbiAgICB0aGlzLmdhbWUuZGljZSA9IG5ldyBEaWNlKHRoaXMuZ2FtZSwgNTAsIDQwKTtcbiAgICB0aGlzLmdhbWUuZGljZS5zY2FsZS5zZXRUbygwLjI1KTtcbiAgICB0aGlzLmdhbWUuY29uZmlybSA9IG5ldyBDb25maXJtKHRoaXMuZ2FtZSwgNDAsODApO1xuICAgIHRoaXMuZ2FtZS5jb25maXJtLnNjYWxlLnNldFRvKDAuMjUpO1xuXG4gICAgdGhpcy5nYW1lLmFkZC5leGlzdGluZyh0aGlzLmdhbWUuZGljZSk7XG4gICAgdGhpcy5nYW1lLmFkZC5leGlzdGluZyh0aGlzLmdhbWUuY29uZmlybSk7XG4gICAgXG4gICAgdGhpcy5nYW1lLmh1ZEdyb3VwLmFkZCh0aGlzLmdhbWUuaHVkQmcpO1xuICAgIHRoaXMuZ2FtZS5odWRHcm91cC5hZGQodGhpcy5nYW1lLmRpY2UpO1xuICAgIHRoaXMuZ2FtZS5odWRHcm91cC5hZGQodGhpcy5nYW1lLmNvbmZpcm0pO1xuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFkZCh0aGlzLmJhY2tncm91bmQpO1xuXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLmNyZWF0ZVRpbGVBcnJheSgzMSwgMjEsIHt4OjAtdGhpcy5iYWNrZ3JvdW5kLndpZHRoLzIsIHk6MC10aGlzLmJhY2tncm91bmQuaGVpZ2h0LzJ9KTtcblxuXG4gICAgdGhpcy5yZWZyZXNoQm9hcmQoKTtcblxuICB9XG5cblxuICBjcmVhdGVNb2RhbHMoKSB7XG4gICAgICB0aGlzLmdhbWUubW9kYWwuY3JlYXRlTW9kYWwoXG4gICAgICAgIHtcbiAgICAgICAgdHlwZTogXCJhc2tTdGFydFwiLFxuICAgICAgICBpbmNsdWRlQmFja2dyb3VuZDogZmFsc2UsXG4gICAgICAgIG1vZGFsQ2xvc2VPbklucHV0OiBmYWxzZSxcbiAgICAgICAgaXRlbXNBcnI6IFt7XG4gICAgICAgICAgICB0eXBlOiBcImdyYXBoaWNzXCIsXG4gICAgICAgICAgICBncmFwaGljQ29sb3I6IFwiMHhmZmZmZmZcIixcbiAgICAgICAgICAgIGdyYXBoaWNXaWR0aDogMzAwLFxuICAgICAgICAgICAgZ3JhcGhpY0hlaWdodDogMzAwLFxuICAgICAgICAgICAgZ3JhcGhpY1JhZGl1czogNDBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIkFyZSB5b3UgaGFwcHkgd2l0aFxcbiB0aGF0IGNsb25lIGxheW91dD9cIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTHVja2llc3QgR3V5XCIsXG4gICAgICAgICAgICBmb250U2l6ZTogMjIsXG4gICAgICAgICAgICBjb2xvcjogXCIweDFlMWUxZVwiLFxuICAgICAgICAgICAgb2Zmc2V0WTogLTUwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwidGV4dF95ZXNcIixcbiAgICAgICAgICAgIG9mZnNldFk6IDEwMCxcbiAgICAgICAgICAgIG9mZnNldFg6IC04MCxcbiAgICAgICAgICAgIGNvbnRlbnRTY2FsZTogMC42LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUubW9kYWwuaGlkZU1vZGFsKFwiYXNrU3RhcnRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OidzZXRQbGF5ZXJTdGF0ZScsIHZhbHVlOidzdGFydCd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxuICAgICAgICAgICAgY29udGVudDogXCJ0ZXh0X25vXCIsXG4gICAgICAgICAgICBvZmZzZXRZOiAxMDAsXG4gICAgICAgICAgICBvZmZzZXRYOiA4MCxcbiAgICAgICAgICAgIGNvbnRlbnRTY2FsZTogMC42LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUubW9kYWwuaGlkZU1vZGFsKFwiYXNrU3RhcnRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OidzZXRQbGF5ZXJTdGF0ZScsIHZhbHVlOidyZXNldCd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgXVxuICAgIH0pO1xuICB9XG5cbiAgcmVmcmVzaEJvYXJkKCkge1xuXG4gICAgdmFyIHNjYWxlID0gd2luZG93LmlubmVyV2lkdGgvdGhpcy5iYWNrZ3JvdW5kLmhlaWdodDtcbiAgICBpZihzY2FsZSA+IDEuOSkge1xuICAgICAgICBzY2FsZSA9IDEuOTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuc2NhbGUuc2V0VG8oc2NhbGUpO1xuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnggPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWDtcblxuICAgIGlmKHRoaXMuZ2FtZS5zZXB0aWtvbi5wbGF5ZXIuaWQgPT0gMSkge1xuICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSA9IC05MDsgXG4gICAgICAgIC8vdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZOyAvLyBDZW50ZXJlZCBvbiBTZXB0aWtvbiBMb2dvXG4gICAgICAgIC8vdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZICsgKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gb3Bwb25lbnQncyBzaWRlXG4gICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSAtICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIHRoaXMgcGxheWVyJ3Mgc2lkZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFuZ2xlID0gOTA7IFxuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWTsgLy8gQ2VudGVyZWQgb24gU2VwdGlrb24gTG9nb1xuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSArICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIG9wcG9uZW50J3Mgc2lkZVxuICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgLSAoKHRoaXMuYmFja2dyb3VuZC53aWR0aCpzY2FsZSktd2luZG93LmlubmVySGVpZ2h0KS8yOyAvLyBDZW50ZXJlZCBvbiB0aGlzIHBsYXllcidzIHNpZGVcbiAgICB9XG5cbiAgfVxuXG4gIFxuICB1cGRhdGUoKSB7XG4gICAgLy8gICB0aGlzLmRpY2UuZnJhbWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDE7XG4gICAgLy8gdGhpcy5nYW1lLmRlYnVnLnRleHQoJ01vdXNlJywgNzAwLCAzMik7XG4gICAgXG4gICAgLy8gdGhpcy5nYW1lLmRlYnVnLnRleHQoJ01vdXNlIFg6ICcgKyB0aGlzLmdhbWUuaW5wdXQueCwgNzAwLCA2NCk7XG4gICAgLy8gdGhpcy5nYW1lLmRlYnVnLnRleHQoJ01vdXNlIFk6ICcgKyB0aGlzLmdhbWUuaW5wdXQueSwgNzAwLCA5Mik7XG4gIH1cbiAgXG4gIHJlbmRlciAoKSB7XG4gICAgICB0aGlzLnJlZnJlc2hCb2FyZCgpO1xuICAgICAgLypcblxuICAgIHZhciB4ID0gMzI7XG4gICAgdmFyIHkgPSAwO1xuICAgIHZhciB5aSA9IDMyO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdWaWV3cG9ydCcsIHgsIHkgKz0geWkpO1xuXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ1ZpZXdwb3J0IFdpZHRoOiAnICsgdGhpcy5nYW1lLnNjYWxlLnZpZXdwb3J0V2lkdGgsIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd3aW5kb3cuaW5uZXJXaWR0aDogJyArIHdpbmRvdy5pbm5lcldpZHRoLCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93Lm91dGVyV2lkdGg6ICcgKyB3aW5kb3cub3V0ZXJXaWR0aCwgeCwgeSArPSB5aSk7XG5cbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnVmlld3BvcnQgSGVpZ2h0OiAnICsgdGhpcy5nYW1lLnNjYWxlLnZpZXdwb3J0SGVpZ2h0LCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93LmlubmVySGVpZ2h0OiAnICsgd2luZG93LmlubmVySGVpZ2h0LCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93Lm91dGVySGVpZ2h0OiAnICsgd2luZG93Lm91dGVySGVpZ2h0LCB4LCB5ICs9IHlpKTtcblxuICAgIC8vICBEZXZpY2U6IEhvdyB0byBnZXQgZGV2aWNlIHNpemUuXG5cbiAgICAvLyAgVXNlIHdpbmRvdy5zY3JlZW4ud2lkdGggZm9yIGRldmljZSB3aWR0aCBhbmQgd2luZG93LnNjcmVlbi5oZWlnaHQgZm9yIGRldmljZSBoZWlnaHQuIFxuICAgIC8vICAuYXZhaWxXaWR0aCBhbmQgLmF2YWlsSGVpZ2h0IGdpdmUgeW91IHRoZSBkZXZpY2Ugc2l6ZSBtaW51cyBVSSB0YXNrYmFycy4gKFRyeSBvbiBhbiBpUGhvbmUuKSBcbiAgICAvLyAgRGV2aWNlIHNpemUgaXMgc3RhdGljIGFuZCBkb2VzIG5vdCBjaGFuZ2Ugd2hlbiB0aGUgcGFnZSBpcyByZXNpemVkIG9yIHJvdGF0ZWQuXG5cbiAgICB4ID0gMzUwO1xuICAgIHkgPSAwO1xuXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ0JvYXJkIEdyb3VwJywgeCwgeSArPSB5aSk7XG5cbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5nYW1lLmJvYXJkR3JvdXAueDogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLngsIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC55OiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAueSwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoOiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGgsIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC5oZWlnaHQ6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC5oZWlnaHQsIHgsIHkgKz0geWkpO1xuXG4gICAgeCA9IDMyO1xuICAgIHkgPSAzMDA7XG5cbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnQmFja2dyb3VuZCBEZXRhaWwnLCB4LCB5ICs9IHlpKTtcblxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQueDogJyArIHRoaXMuYmFja2dyb3VuZC54LCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLnk6ICcgKyB0aGlzLmJhY2tncm91bmQueSwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC53aWR0aDogJyArIHRoaXMuYmFja2dyb3VuZC53aWR0aCwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC5oZWlnaHQ6ICcgKyB0aGlzLmJhY2tncm91bmQuaGVpZ2h0LCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLnNjYWxlOiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAuc2NhbGUueCwgeCwgeSArPSB5aSk7XG4gICAgKi9cbiAgICB9XG4gICAgXG4gIHRvZ2dsZUZ1bGxzY3JlZW4oKSB7XG4gICAgaWYodGhpcy5nYW1lLnNjYWxlLmlzRnVsbFNjcmVlbikge1xuICAgICAgICB0aGlzLmdhbWUuc2NhbGUuc3RvcEZ1bGxTY3JlZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdhbWUuc2NhbGUuc3RhcnRGdWxsU2NyZWVuKGZhbHNlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImNsYXNzIE1lbnUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgLy9hZGQgYmFja2dyb3VuZCBpbWFnZVxuICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwnYmFja2dyb3VuZCcpO1xuICAgIHRoaXMuYmdSYXRpbyA9IHRoaXMuYmFja2dyb3VuZC50ZXh0dXJlLndpZHRoIC8gdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUuaGVpZ2h0O1xuICAgIHRoaXMud29ybGRSYXRpbyA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAvIHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQ7XG4gICAgaWYgKCgodGhpcy53b3JsZFJhdGlvIC0gdGhpcy5iZ1JhdGlvKSAvIDIgKiB0aGlzLmdhbWUud29ybGQud2lkdGgpID4gMCkge1xuICAgICAgICB0aGlzLmJhY2tncm91bmQud2lkdGggPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0L3RoaXMuYmFja2dyb3VuZC50ZXh0dXJlLmhlaWdodCp0aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC54ID0gKHRoaXMuZ2FtZS53b3JsZC53aWR0aCAtIHRoaXMuYmFja2dyb3VuZC53aWR0aCkgLyAyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aC90aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aCp0aGlzLmJhY2tncm91bmQudGV4dHVyZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC55ID0gKHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgLSB0aGlzLmJhY2tncm91bmQuaGVpZ2h0KSAvIDI7XG4gICAgfVxuXG4gICAgLy9hZGQgaW50cm8gdGV4dFxuICAgIHRoaXMuZ2FtZW92ZXJUZXh0ID0gdGhpcy5hZGQudGV4dCh0aGlzLmdhbWUud29ybGQuY2VudGVyWCx0aGlzLmdhbWUud29ybGQuY2VudGVyWSwgXCJTY29yZSA9IFwiK3RoaXMuZ2FtZS5nbG9iYWwuc2NvcmUsIHtcbiAgICAgIGZvbnQ6ICc0MnB4IEFyaWFsJywgZmlsbDogJyNmZmZmZmYnLCBhbGlnbjogJ2NlbnRlcidcbiAgICB9KTtcbiAgICB0aGlzLmdhbWVvdmVyVGV4dC5hbmNob3Iuc2V0KDAuNSk7XG5cbiAgICB0aGlzLmlucHV0Lm9uRG93bi5hZGQodGhpcy5vbklucHV0RG93biwgdGhpcyk7XG5cbiAgICAvL3ByZXZlbnQgYWNjaWRlbnRhbCBjbGljay10aHJ1IGJ5IG5vdCBhbGxvd2luZyBzdGF0ZSB0cmFuc2l0aW9uIGZvciBhIHNob3J0IHRpbWVcbiAgICB0aGlzLmNhbkNvbnRpbnVlVG9OZXh0U3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKFBoYXNlci5UaW1lci5TRUNPTkQgKiAwLjUsIGZ1bmN0aW9uKCl7IHRoaXMuY2FuQ29udGludWVUb05leHRTdGF0ZSA9IHRydWU7IH0sIHRoaXMpO1xuXG4gICAgdGhpcy5zYXZlVmFyc1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgdGhpcy5yZXNldEdsb2JhbFZhcmlhYmxlcygpO1xuICB9XG5cbiAgc2F2ZVZhcnNUb0xvY2FsU3RvcmFnZSgpe1xuICAgIHZhciBtYXggPSBsb2NhbFN0b3JhZ2UubWF4U2NvcmUgfHwgMDsgLy9kZWZhdWx0IHZhbHVlIG9mIDAgaXMgaXQgZG9lcyBub3QgZXhpc3RcbiAgICBpZiAodGhpcy5nYW1lLmdsb2JhbC5zY29yZSA+IG1heCl7IGxvY2FsU3RvcmFnZS5tYXhTY29yZSA9IHRoaXMuZ2FtZS5nbG9iYWwuc2NvcmU7IH1cbiAgfVxuXG4gIHJlc2V0R2xvYmFsVmFyaWFibGVzKCl7XG4gICAgdGhpcy5nYW1lLmdsb2JhbC5zY29yZSA9IDA7XG4gIH1cbiAgdXBkYXRlKCkge31cblxuICBvbklucHV0RG93biAoKSB7XG4gICAgaWYodGhpcy5jYW5Db250aW51ZVRvTmV4dFN0YXRlKXtcbiAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnbWVudScpO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iLCJjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hc3NldCA9IG51bGw7XG4gICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICB9XG5cbiAgcHJlbG9hZCgpIHtcbiAgICAvL3NldHVwIGxvYWRpbmcgYmFyXG4gICAgdGhpcy5hc3NldCA9IHRoaXMuYWRkLnNwcml0ZSh0aGlzLmdhbWUud2lkdGggKiAwLjUgLSAxMTAsIHRoaXMuZ2FtZS5oZWlnaHQgKiAwLjUgLSAxMCwgJ3ByZWxvYWRlcicpO1xuICAgIHRoaXMubG9hZC5zZXRQcmVsb2FkU3ByaXRlKHRoaXMuYXNzZXQpO1xuICAgIFxuICAgIC8vU2V0dXAgbG9hZGluZyBhbmQgaXRzIGV2ZW50c1xuICAgIHRoaXMubG9hZC5vbkxvYWRDb21wbGV0ZS5hZGRPbmNlKHRoaXMub25Mb2FkQ29tcGxldGUsIHRoaXMpO1xuICAgIHRoaXMubG9hZFJlc291cmNlcygpO1xuICB9XG5cbiAgbG9hZFJlc291cmNlcygpIHtcbiAgICAgIFxuICAgIC8vTUVOVSBSRVNPVVJDRVNcbiAgICAvL21lbnUgYmFja2dyb3VuZFxuICAgIC8vdGV4dCBpbWFnZXNcbiAgICAvL211c2ljIGZpbGVzID9cbiAgICAvLyAgTG9hZCBmaWx0ZXIgc2NyaXB0c1xuICAgIC8vIHRoaXMuZ2FtZS5sb2FkLnNjcmlwdCgnZ3JheScsICdodHRwczovL2Nkbi5yYXdnaXQuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9tYXN0ZXIvdjIvZmlsdGVycy9HcmF5LmpzJyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuc2NyaXB0KCdncmF5JywgJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyLWNlL21hc3Rlci9maWx0ZXJzL0dyYXkuanMnKTtcblxuICAgIFxuICAgIC8vbG9hZCBnYW1lIGRhdGFcbiAgICB0aGlzLmdhbWUubG9hZC5qc29uKCd0aWxlRGV0YWlsJywgJ2Fzc2V0cy90aWxlRGV0YWlsLmpzb24nKTtcbiAgICB0aGlzLmdhbWUubG9hZC5qc29uKCd3YWxsR3JpZCcsICdhc3NldHMvd2FsbEdyaWQuanNvbicpO1xuICBcbiAgICAvL0dBTUUgUkVTT1VSQ0VTXG4gICAgLy9nYW1lIGJvYXJkIGJhY2tncm91bmRcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnYmFja2dyb3VuZCcsJ2Fzc2V0cy9tZWRpdW1fYm9hcmQucG5nJyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ2RpY2UnLCdhc3NldHMvZGljZS5wbmcnLCAxMjgsIDE5NCwgMTApO1xuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdodWQtYmcnLCdhc3NldHMvaHVkLWJnLnBuZycpO1xuICAgIFxuICAgIC8vIG1vZGFsIGltYWdlc1xuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X3llcycsJ2Fzc2V0cy90ZXh0X3llcy5wbmcnKTtcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9ubycsJ2Fzc2V0cy90ZXh0X25vLnBuZycpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X2dvJywnYXNzZXRzL3RleHRfZ28ucG5nJyk7XG5cbiAgICAvL3BsYXllciB0b2tlbnMgc3ByaXRlc2hlZXRzXG4gICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ2Nsb25lJywgJ2Fzc2V0cy9jbG9uZS5wbmcnLCAxMTAsIDE2OCk7XG4gICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ29yZG5hbmNlJywgJ2Fzc2V0cy9vcmRuYW5jZS5wbmcnLDI2NCwgMjY0LCA3KTtcbiAgICB0aGlzLmdhbWUubG9hZC5hdGxhcygnYm9vbScsICdhc3NldHMvYm9vbS5wbmcnLCAnYXNzZXRzL2Jvb20uanNvbicsIFBoYXNlci5Mb2FkZXIuVEVYVFVSRV9BVExBU19KU09OX0hBU0gpO1xuXG4gICAgLy9hdWRpbyBmaWxlcyBcbiAgICBcbiAgICAvL3RoaXMuZ2FtZS5sb2FkLmltYWdlKCdjcm9zc2hhaXJzJywgJ2Fzc2V0cy9jcm9zc2hhaXJfcmVkX3NtYWxsLnBuZycpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X2dvJywgJ2Fzc2V0cy90ZXh0X2dvLnBuZycpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X3JlYWR5JywgJ2Fzc2V0cy90ZXh0X3JlYWR5LnBuZycpO1xuXG4gICAgLy90aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgndGFyZ2V0JywgJ2Fzc2V0cy90YXJnZXQucG5nJywxMjguNjYsMTI4KTtcblxuICAgIC8vdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ2d1bnNob3QnLCdhc3NldHMvZ3Vuc2hvdC53YXYnKTtcbiAgICAvL3RoaXMuZ2FtZS5sb2FkLmF1ZGlvKCdkaW5nJywnYXNzZXRzL2Rpbmcud2F2Jyk7XG4gIH1cblxuICBvbkxvYWRDb21wbGV0ZSgpIHtcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ3NldHVwJyk7XG4gICAgLy90aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ2dhbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmVsb2FkZXI7XG4iLCJpbXBvcnQgU2VwdGlrb24gZnJvbSAnLi4vcHJlZmFicy9zZXB0aWtvbic7XG5cbmNsYXNzIFNlcnZlckZ1bGwgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgY29uc29sZS5sb2coXCJTZXJ2ZXIgaXMgZnVsbC4gVHJ5IGFnYWluIGxhdGVyLlwiKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2ZXJGdWxsO1xuIiwiY2xhc3MgU2V0dXAgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gfVxuICBcbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuZ2FtZS5uYW1lID0gXCJ1c2VyXCI7XG5cbiAgICB0aGlzLmdhbWUuc3RhZ2UuZGlzYWJsZVZpc2liaWxpdHlDaGFuZ2UgPSB0cnVlO1xuICAgIFxuICAgIC8vIHRoaXMuZ2FtZS5tb2RhbCA9IG5ldyBnYW1lTW9kYWwodGhpcy5nYW1lKTtcbiAgICAvLyB0aGlzLmNyZWF0ZU1vZGFscygpO1xuICAgIC8vIHRoaXMuZ2FtZS5tb2RhbC5zaG93TW9kYWwoJ3VzZXJuYW1lJyk7XG5cbiAgICAvLyB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkQ2FsbGJhY2tzKHRoaXMsIG51bGwsIG51bGwsIHRoaXMua2V5UHJlc3MpO1xuICAgIC8vIHRoaXMuYmtzcCA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleWJvYXJkLkJBQ0tTUEFDRSk7XG4gICAgLy8gdGhpcy5ia3NwLm9uRG93bi5hZGQodGhpcy5rZXlQcmVzcywgdGhpcyk7XG4gICAgLy8gdGhpcy5lbnRlciA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleWJvYXJkLkVOVEVSKTtcbiAgICAvLyB0aGlzLmVudGVyLm9uRG93bi5hZGQodGhpcy5rZXlQcmVzcywgdGhpcyk7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5hc2tOZXdQbGF5ZXIoKTtcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ2dhbWUnKTtcbiAgICByZXR1cm47XG4gICAgLy90aGlzLmdhbWUuc2VwdGlrb24uc2V0dXAoKTtcbiAgICBcbn1cblxua2V5UHJlc3MoY2hhcikge1xuXG4gICAgaWYodHlwZW9mKGNoYXIpID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGlmIChjaGFyLmV2ZW50LmNvZGUgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhci5ldmVudC5jb2RlID09PSBcIkJhY2tzcGFjZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubmFtZSA9IHRoaXMuZ2FtZS5uYW1lLnN1YnN0cmluZygwLCB0aGlzLmdhbWUubmFtZS5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjaGFyID09IFwiIFwiKSB7XG4gICAgICAgICAgICBjaGFyID0gXCJfXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nYW1lLm5hbWUgKz0gY2hhcjtcbiAgICB9XG4gICAgdGhpcy5nYW1lLm1vZGFsLnVwZGF0ZU1vZGFsVmFsdWUodGhpcy5nYW1lLm5hbWUsICd1c2VybmFtZScsIDQpO1xufVxuICBcbiAgY3JlYXRlTW9kYWxzKCkge1xuICBcbiAgICAvLyBTdGFydCBHYW1lXG4gICAgdGhpcy5nYW1lLm1vZGFsLmNyZWF0ZU1vZGFsKFxuICAgICAgICB7XG4gICAgICAgIHR5cGU6IFwidXNlcm5hbWVcIixcbiAgICAgICAgaW5jbHVkZUJhY2tncm91bmQ6IHRydWUsXG4gICAgICAgIG1vZGFsQ2xvc2VPbklucHV0OiB0cnVlLFxuICAgICAgICBpdGVtc0FycjogW3tcbiAgICAgICAgICAgIHR5cGU6IFwiZ3JhcGhpY3NcIixcbiAgICAgICAgICAgIGdyYXBoaWNDb2xvcjogXCIweGZmZmZmZlwiLFxuICAgICAgICAgICAgZ3JhcGhpY1dpZHRoOiAzMDAsXG4gICAgICAgICAgICBncmFwaGljSGVpZ2h0OiAzMDAsXG4gICAgICAgICAgICBncmFwaGljUmFkaXVzOiA0MFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiVHlwZSBhIHVzZXJuYW1lLFxcbnRoZW4gaGl0IDxFTlRFUj5cXG5cXG4obWF4IG9mIDI1IGNoYXJhY3RlcnMpXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkx1Y2tpZXN0IEd1eVwiLFxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxuICAgICAgICAgICAgY29sb3I6IFwiMHgxZTFlMWVcIixcbiAgICAgICAgICAgIG9mZnNldFk6IC01MFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuZ2FtZS5uYW1lLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiAyMixcbiAgICAgICAgICAgIGNvbG9yOiBcIjB4MWUxZTFlXCIsXG4gICAgICAgICAgICBvZmZzZXRZOiA1MFxuICAgICAgICB9LCBdXG4gICAgfSk7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXR1cDtcbiJdfQ==
