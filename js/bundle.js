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

},{"./prefabs/client":8,"./prefabs/septikon":16,"./states/boot":23,"./states/game":24,"./states/gameover":25,"./states/preloader":26,"./states/serverFull":27,"./states/setup":28,"uuid/v4":5}],7:[function(require,module,exports){
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
    }, {
        key: 'serverFull',
        value: function serverFull(player) {
            this.emit('action', { callback: 'serverFull', details: { id: player.id } }, player.socketID);
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

},{"../prefabs/septikon":16}],28:[function(require,module,exports){
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

},{}]},{},[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvdGlsZURldGFpbC5qc29uIiwiYXNzZXRzL3dhbGxHcmlkLmpzb24iLCJub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsInNyYy9tYWluLmpzIiwic3JjL21vZGFsLmpzIiwic3JjL3ByZWZhYnMvY2xpZW50LmpzIiwic3JjL3ByZWZhYnMvY2xvbmUuanMiLCJzcmMvcHJlZmFicy9jcm9zc2hhaXJzLmpzIiwic3JjL3ByZWZhYnMvZGljZS5qcyIsInNyYy9wcmVmYWJzL21hc3Rlci5qcyIsInNyYy9wcmVmYWJzL29yZG5hbmNlLmpzIiwic3JjL3ByZWZhYnMvcGVyc29ubmVsLmpzIiwic3JjL3ByZWZhYnMvcmVzb3VyY2VzLmpzIiwic3JjL3ByZWZhYnMvc2VwdGlrb24uanMiLCJzcmMvcHJlZmFicy90ZWFtLmpzIiwic3JjL3NlcnZlci9vcmRuYW5jZS5qcyIsInNyYy9zZXJ2ZXIvcGVyc29ubmVsLmpzIiwic3JjL3NlcnZlci9wbGF5ZXIuanMiLCJzcmMvc2VydmVyL3Jlc291cmNlLmpzIiwic3JjL3NlcnZlci9zZXB0aWtvbi5qcyIsInNyYy9zdGF0ZXMvYm9vdC5qcyIsInNyYy9zdGF0ZXMvZ2FtZS5qcyIsInNyYy9zdGF0ZXMvZ2FtZW92ZXIuanMiLCJzcmMvc3RhdGVzL3ByZWxvYWRlci5qcyIsInNyYy9zdGF0ZXMvc2VydmVyRnVsbC5qcyIsInNyYy9zdGF0ZXMvc2V0dXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdCQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFHLE9BQU8sT0FBUCxLQUFvQixXQUF2QixFQUFvQztBQUNoQyxRQUFH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SUMsOEJBQVUsRUFKWDtBQUtDLDJCQUFPLFVBTFI7QUFNQyw2QkFBUztBQU5WLGlCQWJPO0FBSlYsYUFESjtBQTRCRDs7OztFQTVFaUIsT0FBTyxLOztrQkErRVosSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIm1vZHVsZS5leHBvcnRzPXtcblx0XCJ0aWxlUHJvcGVydHlBcnJheVwiOiB7XG5cdFx0XCJvdGhlclNwYWNlXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMDBcIixcblx0XHRcdFwidHlwZVwiOiBcInNwYWNlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJzcGFjZVwiLFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiOSwwXCIsIFwiOSwxXCIsIFwiOSwyXCIsIFwiOSwzXCIsIFwiOSw0XCIsIFwiOSw1XCIsIFwiOSw2XCIsIFwiOSw3XCIsIFwiOSw4XCIsIFwiOSw5XCIsIFwiOSwxMFwiLCBcIjksMTFcIiwgXCI5LDEyXCIsIFwiOSwxM1wiLCBcIjksMTRcIiwgXCI5LDE1XCIsIFwiOSwxNlwiLCBcIjksMTdcIiwgXCI5LDE4XCIsIFwiOSwxOVwiLCBcIjksMjBcIiwgXCIxMCwwXCIsIFwiMTAsMVwiLCBcIjEwLDJcIiwgXCIxMCwzXCIsIFwiMTAsNFwiLCBcIjEwLDVcIiwgXCIxMCw2XCIsIFwiMTAsN1wiLCBcIjEwLDhcIiwgXCIxMCw5XCIsIFwiMTAsMTBcIiwgXCIxMCwxMVwiLCBcIjEwLDEyXCIsIFwiMTAsMTNcIiwgXCIxMCwxNFwiLCBcIjEwLDE1XCIsIFwiMTAsMTZcIiwgXCIxMCwxN1wiLCBcIjEwLDE4XCIsIFwiMTAsMTlcIiwgXCIxMCwyMFwiLCBcIjExLDBcIiwgXCIxMSwxXCIsIFwiMTEsMlwiLCBcIjExLDNcIiwgXCIxMSw0XCIsIFwiMTEsNVwiLCBcIjExLDZcIiwgXCIxMSw3XCIsIFwiMTEsOFwiLCBcIjExLDlcIiwgXCIxMSwxMFwiLCBcIjExLDExXCIsIFwiMTEsMTJcIiwgXCIxMSwxM1wiLCBcIjExLDE0XCIsIFwiMTEsMTVcIiwgXCIxMSwxNlwiLCBcIjExLDE3XCIsIFwiMTEsMThcIiwgXCIxMSwxOVwiLCBcIjExLDIwXCIsIFwiMTIsMFwiLCBcIjEyLDFcIiwgXCIxMiwyXCIsIFwiMTIsM1wiLCBcIjEyLDRcIiwgXCIxMiw1XCIsIFwiMTIsNlwiLCBcIjEyLDdcIiwgXCIxMiw4XCIsIFwiMTIsOVwiLCBcIjEyLDEwXCIsIFwiMTIsMTFcIiwgXCIxMiwxMlwiLCBcIjEyLDEzXCIsIFwiMTIsMTRcIiwgXCIxMiwxNVwiLCBcIjEyLDE2XCIsIFwiMTIsMTdcIiwgXCIxMiwxOFwiLCBcIjEyLDE5XCIsIFwiMTIsMjBcIiwgXCIxMywwXCIsIFwiMTMsMVwiLCBcIjEzLDJcIiwgXCIxMywzXCIsIFwiMTMsNFwiLCBcIjEzLDVcIiwgXCIxMyw2XCIsIFwiMTMsN1wiLCBcIjEzLDhcIiwgXCIxMyw5XCIsIFwiMTMsMTBcIiwgXCIxMywxMVwiLCBcIjEzLDEyXCIsIFwiMTMsMTNcIiwgXCIxMywxNFwiLCBcIjEzLDE1XCIsIFwiMTMsMTZcIiwgXCIxMywxN1wiLCBcIjEzLDE4XCIsIFwiMTMsMTlcIiwgXCIxMywyMFwiLCBcIjE0LDBcIiwgXCIxNCwxXCIsIFwiMTQsMlwiLCBcIjE0LDNcIiwgXCIxNCw0XCIsIFwiMTQsNVwiLCBcIjE0LDZcIiwgXCIxNCw3XCIsIFwiMTQsOFwiLCBcIjE0LDlcIiwgXCIxNCwxMFwiLCBcIjE0LDExXCIsIFwiMTQsMTJcIiwgXCIxNCwxM1wiLCBcIjE0LDE0XCIsIFwiMTQsMTVcIiwgXCIxNCwxNlwiLCBcIjE0LDE3XCIsIFwiMTQsMThcIiwgXCIxNCwxOVwiLCBcIjE0LDIwXCIsIFwiMTUsMFwiLCBcIjE1LDFcIiwgXCIxNSwyXCIsIFwiMTUsM1wiLCBcIjE1LDRcIiwgXCIxNSw1XCIsIFwiMTUsNlwiLCBcIjE1LDdcIiwgXCIxNSw4XCIsIFwiMTUsOVwiLCBcIjE1LDEwXCIsIFwiMTUsMTFcIiwgXCIxNSwxMlwiLCBcIjE1LDEzXCIsIFwiMTUsMTRcIiwgXCIxNSwxNVwiLCBcIjE1LDE2XCIsIFwiMTUsMTdcIiwgXCIxNSwxOFwiLCBcIjE1LDE5XCIsIFwiMTUsMjBcIiwgXCIxNiwwXCIsIFwiMTYsMVwiLCBcIjE2LDJcIiwgXCIxNiwzXCIsIFwiMTYsNFwiLCBcIjE2LDVcIiwgXCIxNiw2XCIsIFwiMTYsN1wiLCBcIjE2LDhcIiwgXCIxNiw5XCIsIFwiMTYsMTBcIiwgXCIxNiwxMVwiLCBcIjE2LDEyXCIsIFwiMTYsMTNcIiwgXCIxNiwxNFwiLCBcIjE2LDE1XCIsIFwiMTYsMTZcIiwgXCIxNiwxN1wiLCBcIjE2LDE4XCIsIFwiMTYsMTlcIiwgXCIxNiwyMFwiLCBcIjE3LDBcIiwgXCIxNywxXCIsIFwiMTcsMlwiLCBcIjE3LDNcIiwgXCIxNyw0XCIsIFwiMTcsNVwiLCBcIjE3LDZcIiwgXCIxNyw3XCIsIFwiMTcsOFwiLCBcIjE3LDlcIiwgXCIxNywxMFwiLCBcIjE3LDExXCIsIFwiMTcsMTJcIiwgXCIxNywxM1wiLCBcIjE3LDE0XCIsIFwiMTcsMTVcIiwgXCIxNywxNlwiLCBcIjE3LDE3XCIsIFwiMTcsMThcIiwgXCIxNywxOVwiLCBcIjE3LDIwXCIsIFwiMTgsMFwiLCBcIjE4LDFcIiwgXCIxOCwyXCIsIFwiMTgsM1wiLCBcIjE4LDRcIiwgXCIxOCw1XCIsIFwiMTgsNlwiLCBcIjE4LDdcIiwgXCIxOCw4XCIsIFwiMTgsOVwiLCBcIjE4LDEwXCIsIFwiMTgsMTFcIiwgXCIxOCwxMlwiLCBcIjE4LDEzXCIsIFwiMTgsMTRcIiwgXCIxOCwxNVwiLCBcIjE4LDE2XCIsIFwiMTgsMTdcIiwgXCIxOCwxOFwiLCBcIjE4LDE5XCIsIFwiMTgsMjBcIiwgXCIxOSwwXCIsIFwiMTksMVwiLCBcIjE5LDJcIiwgXCIxOSwzXCIsIFwiMTksNFwiLCBcIjE5LDVcIiwgXCIxOSw2XCIsIFwiMTksN1wiLCBcIjE5LDhcIiwgXCIxOSw5XCIsIFwiMTksMTBcIiwgXCIxOSwxMVwiLCBcIjE5LDEyXCIsIFwiMTksMTNcIiwgXCIxOSwxNFwiLCBcIjE5LDE1XCIsIFwiMTksMTZcIiwgXCIxOSwxN1wiLCBcIjE5LDE4XCIsIFwiMTksMTlcIiwgXCIxOSwyMFwiLCBcIjIwLDBcIiwgXCIyMCwxXCIsIFwiMjAsMlwiLCBcIjIwLDNcIiwgXCIyMCw0XCIsIFwiMjAsNVwiLCBcIjIwLDZcIiwgXCIyMCw3XCIsIFwiMjAsOFwiLCBcIjIwLDlcIiwgXCIyMCwxMFwiLCBcIjIwLDExXCIsIFwiMjAsMTJcIiwgXCIyMCwxM1wiLCBcIjIwLDE0XCIsIFwiMjAsMTVcIiwgXCIyMCwxNlwiLCBcIjIwLDE3XCIsIFwiMjAsMThcIiwgXCIyMCwxOVwiLCBcIjIwLDIwXCIsIFwiMjEsMFwiLCBcIjIxLDFcIiwgXCIyMSwyXCIsIFwiMjEsM1wiLCBcIjIxLDRcIiwgXCIyMSw1XCIsIFwiMjEsNlwiLCBcIjIxLDdcIiwgXCIyMSw4XCIsIFwiMjEsOVwiLCBcIjIxLDEwXCIsIFwiMjEsMTFcIiwgXCIyMSwxMlwiLCBcIjIxLDEzXCIsIFwiMjEsMTRcIiwgXCIyMSwxNVwiLCBcIjIxLDE2XCIsIFwiMjEsMTdcIiwgXCIyMSwxOFwiLCBcIjIxLDE5XCIsIFwiMjEsMjBcIl1cblx0XHR9LFxuXHRcdFwiYmF0dGxlVGhlcm1pdGVcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAwMVwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJ0aGVybWl0ZVwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJiaW9tYXNzXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsyXSxcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcblx0XHRcdFx0XCJhcmdzXCI6IFwidGhlcm1pdGVcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMjBcIiwgXCI3LDFcIiwgXCI3LDdcIiwgXCIyMywxM1wiLCBcIjIzLDE5XCIsIFwiMjQsMFwiXVxuXHRcdH0sXG5cdFx0XCJiYXR0bGVTaGllbGRcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAwMlwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJzaGllbGRcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcblx0XHRcdFx0XCJhcmdzXCI6IFwic2hpZWxkXCJcblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDZcIiwgXCI2LDEzXCIsIFwiNiwxOVwiLCBcIjcsMlwiLCBcIjcsMTJcIiwgXCIyMyw4XCIsIFwiMjMsMThcIiwgXCIyNCwxXCIsIFwiMjQsN1wiLCBcIjI0LDE0XCJdXG5cdFx0fSxcblx0XHRcImJhdHRsZUJpb2Ryb25lXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMDNcIixcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiYmlvZHJvbmVcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvZHJvbmVcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxuXHRcdFx0XHRcImFyZ3NcIjogXCJiaW9kcm9uZVwiXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiw1XCIsIFwiNywzXCIsIFwiNywxNVwiLCBcIjIzLDVcIiwgXCIyMywxN1wiLCBcIjI0LDE1XCJdXG5cdFx0fSxcblx0XHRcImJhdHRsZVNhdGVsbGl0ZVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDA0XCIsXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcblx0XHRcdFwibmFtZVwiOiBcInNhdGVsbGl0ZVwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJtZXRhbFwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXG5cdFx0XHRcdFwiYXJnc1wiOiBcInNhdGVsbGl0ZVwiXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwwXCIsIFwiNiwxNFwiLCBcIjcsNFwiLCBcIjcsMTdcIiwgXCIyMywzXCIsIFwiMjMsMTZcIiwgXCIyNCw2XCIsIFwiMjQsMjBcIl1cblx0XHR9LFxuXHRcdFwiYmF0dGxlTGFzZXJcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAwNVwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJsYXNlclwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxuXHRcdFx0XHRcImFyZ3NcIjogXCJsYXNlclwiXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwzXCIsIFwiNiw3XCIsIFwiNiw4XCIsIFwiNiwxMlwiLCBcIjYsMTZcIiwgXCI3LDVcIiwgXCI3LDZcIiwgXCI3LDlcIiwgXCI3LDE4XCIsIFwiNywxOVwiLCBcIjIzLDFcIiwgXCIyMywyXCIsIFwiMjMsMTFcIiwgXCIyMywxNFwiLCBcIjIzLDE1XCIsIFwiMjQsNFwiLCBcIjI0LDhcIiwgXCIyNCwxMlwiLCBcIjI0LDEzXCIsIFwiMjQsMTdcIl1cblx0XHR9LFxuXHRcdFwiYmF0dGxlUmVwYWlyXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMDZcIixcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwicmVwYWlyXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm1ldGFsXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcInJlcGFpclwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiAxXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwxXCIsIFwiNiwxMFwiLCBcIjYsMThcIiwgXCI3LDhcIiwgXCI3LDEzXCIsIFwiMjMsN1wiLCBcIjIzLDEyXCIsIFwiMjQsMlwiLCBcIjI0LDEwXCIsIFwiMjQsMTlcIl1cblx0XHR9LFxuXHRcdFwiYmF0dGxlUm9ja2V0XCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMDdcIixcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwicm9ja2V0XCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcInJvY2tldFwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXG5cdFx0XHRcdFwiYXJnc1wiOiBcInJvY2tldFwiXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiw0XCIsIFwiNiwxMVwiLCBcIjcsMTBcIiwgXCI3LDE2XCIsIFwiMjMsNFwiLCBcIjIzLDEwXCIsIFwiMjQsOVwiLCBcIjI0LDE2XCJdXG5cdFx0fSxcblx0XHRcImJhdHRsZUVzcGlvbmFnZVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDA4XCIsXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcblx0XHRcdFwibmFtZVwiOiBcImVzcGlvbmFnZVwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJiaW9tYXNzXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFszXSxcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImVzcGlvbmFnZVwiXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwxNVwiLCBcIjcsMTFcIiwgXCIyMyw5XCIsIFwiMjQsNVwiXVxuXHRcdH0sXG5cdFx0XCJiYXR0bGVUYWtlb3ZlclwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDA5XCIsXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcblx0XHRcdFwibmFtZVwiOiBcInRha2VvdmVyXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMl0sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJ0YWtlb3ZlclwiXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwxN1wiLCBcIjcsMTRcIiwgXCIyMyw2XCIsIFwiMjQsM1wiXVxuXHRcdH0sXG5cdFx0XCJiYXR0bGVSZXBhaXJUd29cIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAxMFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJyZXBhaXJUd29cIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCIsIFwib3h5Z2VuXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxXSxcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcInJlcGFpclwiLFxuXHRcdFx0XHRcImFyZ3NcIjogMlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsOVwiLCBcIjI0LDExXCJdXG5cdFx0fSxcblx0XHRcImJhdHRsZUNvdW50ZXJFc3Bpb25hZ2VcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAxMVwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJjb3VudGVyRXNwaW9uYWdlXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImJpb21hc3NcIiwgXCJveHlnZW5cIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzEsIDFdLFxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiY291bnRlclwiXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiwyXCIsIFwiMjQsMThcIl1cblx0XHR9LFxuXHRcdFwib3RoZXJTdXJmYWNlXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMTJcIixcblx0XHRcdFwidHlwZVwiOiBcInN1cmZhY2VcIixcblx0XHRcdFwibmFtZVwiOiBcInN1cmZhY2VcIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjgsMFwiLCBcIjgsMVwiLCBcIjgsMlwiLCBcIjgsM1wiLCBcIjgsNFwiLCBcIjgsNVwiLCBcIjgsNlwiLCBcIjgsN1wiLCBcIjgsOFwiLCBcIjgsOVwiLCBcIjgsMTBcIiwgXCI4LDExXCIsIFwiOCwxMlwiLCBcIjgsMTNcIiwgXCI4LDE0XCIsIFwiOCwxNVwiLCBcIjgsMTZcIiwgXCI4LDE3XCIsIFwiOCwxOFwiLCBcIjgsMTlcIiwgXCI4LDIwXCIsIFwiMjIsMFwiLCBcIjIyLDFcIiwgXCIyMiwyXCIsIFwiMjIsM1wiLCBcIjIyLDRcIiwgXCIyMiw1XCIsIFwiMjIsNlwiLCBcIjIyLDdcIiwgXCIyMiw4XCIsIFwiMjIsOVwiLCBcIjIyLDEwXCIsIFwiMjIsMTFcIiwgXCIyMiwxMlwiLCBcIjIyLDEzXCIsIFwiMjIsMTRcIiwgXCIyMiwxNVwiLCBcIjIyLDE2XCIsIFwiMjIsMTdcIiwgXCIyMiwxOFwiLCBcIjIyLDE5XCIsIFwiMjIsMjBcIl1cblx0XHR9LFxuXHRcdFwib3RoZXJMb2NrXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMTNcIixcblx0XHRcdFwidHlwZVwiOiBcImxvY2tcIixcblx0XHRcdFwibmFtZVwiOiBcImxvY2tcIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjcsMFwiLCBcIjUsMTBcIiwgXCIxLDEwXCIsIFwiNywyMFwiLCBcIjIzLDBcIiwgXCIyMywyMFwiLCBcIjI1LDEwXCIsIFwiMjksMTBcIl1cblx0XHR9LFxuXHRcdFwiYXJtb3J5RHJpbGxcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAxNFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwiYXJtb3J5XCIsXG5cdFx0XHRcIm5hbWVcIjogXCJkcmlsbFwiLFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNCwxMFwiLCBcIjI2LDEwXCJdXG5cdFx0fSxcblx0XHRcIkFybW9yeUNhbm5vblwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDE1XCIsXG5cdFx0XHRcInR5cGVcIjogXCJhcm1vcnlcIixcblx0XHRcdFwibmFtZVwiOiBcImNhbm5vblwiLFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMywxMFwiLCBcIjI3LDEwXCJdXG5cdFx0fSxcblx0XHRcImFybW9yeUV4cGxvc2l2ZXNcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAxNlwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwiYXJtb3J5XCIsXG5cdFx0XHRcIm5hbWVcIjogXCJleHBsb3NpdmVzXCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIyLDEwXCIsIFwiMjgsMTBcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvbkxpY2hlblwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDE3XCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJsaWNoZW5cIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcImJpb21hc3NcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsxXVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMFwiLCBcIjAsMTBcIiwgXCIwLDE3XCIsIFwiMSwyXCIsIFwiMSw4XCIsIFwiMSwxNlwiLCBcIjEsMjBcIiwgXCIyOSwwXCIsIFwiMjksNFwiLCBcIjI5LDEyXCIsIFwiMjksMThcIiwgXCIzMCwzXCIsIFwiMzAsMTBcIiwgXCIzMCwyMFwiXVxuXHRcdH0sXG5cdFx0XCJwcm9kdWN0aW9uTGljaGVuVHdvXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMThcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcImxpY2hlblR3b1wiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzJdXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCw0XCIsIFwiMzAsMTZcIl1cblxuXHRcdH0sXG5cdFx0XCJwcm9kdWN0aW9uQ2hlbWljYWxSZWFjdG9yXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMTlcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcImNoZW1pY2FsUmVhY3RvclwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJiaW9tYXNzXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJveHlnZW5cIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsxXVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjEsMVwiLCBcIjEsOVwiLCBcIjI5LDE5XCIsIFwiMjksMTFcIl1cblxuXHRcdH0sXG5cdFx0XCJwcm9kdWN0aW9uQ2hlbWljYWxSZWFjdG9yVHdvXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMjBcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcImNoZW1pY2FsUmVhY3RvclR3b1wiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJiaW9tYXNzXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsyXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJveHlnZW5cIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsyXVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsNVwiLCBcIjMwLDE1XCJdXG5cdFx0fSxcblx0XHRcInByb2R1Y3Rpb25BaXJGaWx0ZXJcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAyMVwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiYWlyRmlsdGVyXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm94eWdlblwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wib3h5Z2VuXCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbM11cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDE1XCIsIFwiMSwxMVwiLCBcIjI5LDlcIiwgXCIzMCw1XCJdXG5cdFx0fSxcblx0XHRcInByb2R1Y3Rpb25CaW9jb2xsZWN0b3JcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAyMlwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiYmlvY29sbGVjdG9yXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm94eWdlblwiLCBcImJpb21hc3NcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzEsIDFdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcImJpb2Ryb25lXCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDE0XCIsIFwiMCwxOFwiLCBcIjEsNlwiLCBcIjEsMTdcIiwgXCIzMCw2XCIsIFwiMzAsMlwiLCBcIjI5LDE0XCIsIFwiMjksM1wiXVxuXHRcdH0sXG5cdFx0XCJwcm9kdWN0aW9uVXJhbml1bU1pbmVcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAyM1wiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwidXJhbml1bU1pbmVcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wib3h5Z2VuXCIsIFwiZW5lcmd5XCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJ1cmFuaXVtXCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDJcIiwgXCIwLDZcIiwgXCIxLDNcIiwgXCIzMCwxOFwiLCBcIjMwLDE0XCIsIFwiMjksMTdcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvbk51Y2xlYXJSZWFjdG9yXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMjRcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcIm51Y2xlYXJSZWFjdG9yXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcInVyYW5pdW1cIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcImVuZXJneVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzNdXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCw5XCIsIFwiMCwxNlwiLCBcIjEsN1wiLCBcIjEsMTRcIiwgXCIxLDE5XCIsIFwiMzAsMTFcIiwgXCIzMCw0XCIsIFwiMjksMTNcIiwgXCIyOSw2XCIsIFwiMjksMVwiXVxuXHRcdH0sXG5cdFx0XCJwcm9kdWN0aW9uVGhlcm1hbEdlbmVyYXRvclwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDI1XCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJ0aGVybWFsR2VuZXJhdG9yXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImJpb21hc3NcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcImVuZXJneVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzFdXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxMlwiLCBcIjMwLDhcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvbkZvdW5kcnlcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAyNlwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiZm91bmRyeVwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcIm1ldGFsXCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDNcIiwgXCIwLDExXCIsIFwiMCwxOVwiLCBcIjEsMTNcIiwgXCIzMCwxN1wiLCBcIjMwLDlcIiwgXCIzMCwxXCIsIFwiMjksN1wiXVxuXHRcdH0sXG5cdFx0XCJwcm9kdWN0aW9uRm91bmRyeVR3b1wiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDI3XCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJmb3VuZHJ5VHdvXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wibWV0YWxcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsyXVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjEsMFwiLCBcIjI5LDIwXCJdXG5cdFx0fSxcblx0XHRcInByb2R1Y3Rpb25Sb2NrZXRXb3Jrc2hvcFwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDI4XCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJyb2NrZXRXb3Jrc2hvcFwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcInJvY2tldFwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzFdXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxXCIsIFwiMCw3XCIsIFwiMSw1XCIsIFwiMSwxMlwiLCBcIjEsMTVcIiwgXCIzMCwxOVwiLCBcIjMwLDEzXCIsIFwiMjksMTVcIiwgXCIyOSw4XCIsIFwiMjksNVwiXVxuXHRcdH0sXG5cdFx0XCJwcm9kdWN0aW9uU2Vuc29yQ2FiaW5cIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAyOVwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwic2Vuc29yQ2FiaW5cIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwia2lsbEJpb2Ryb25lXCJcblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDEzXCIsIFwiMzAsN1wiXVxuXHRcdH0sXG5cdFx0XCJwcm9kdWN0aW9uTnVjbGVhckFybW9yeVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDMwXCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJudWNsZWFyQXJtb3J5XCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm94eWdlblwiLCBcImVuZXJneVwiLCBcInVyYW5pdW1cIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzEsIDEsIDFdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcIm51a2VcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsxXVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMjBcIiwgXCIxLDRcIiwgXCIxLDE4XCIsIFwiMzAsMFwiLCBcIjI5LDE2XCIsIFwiMjksMlwiXVxuXHRcdH0sXG5cdFx0XCJwcm9kdWN0aW9uUmVwYWlyXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMzFcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcInByb2RSZXBhaXJcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcInJlcGFpclwiLFxuXHRcdFx0XHRcInRpbGVUYXJnZXRJRFwiOiAxXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCw4XCIsIFwiMzAsMTJcIl1cblx0XHR9LFxuXHRcdFwicmVzb3VyY2VPeHlnZW5cIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAzMlwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJveHlnZW5cIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjUsMFwiLCBcIjUsMVwiLCBcIjUsMlwiLCBcIjUsM1wiLCBcIjUsNFwiLCBcIjUsNVwiLCBcIjUsNlwiLCBcIjUsN1wiLCBcIjUsOFwiLCBcIjUsOVwiLCBcIjI1LDExXCIsIFwiMjUsMTJcIiwgXCIyNSwxM1wiLCBcIjI1LDE0XCIsIFwiMjUsMTVcIiwgXCIyNSwxNlwiLCBcIjI1LDE3XCIsIFwiMjUsMThcIiwgXCIyNSwxOVwiLCBcIjI1LDIwXCJdXG5cdFx0fSxcblx0XHRcInJlc291cmNlUm9ja2V0XCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMzNcIixcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwicm9ja2V0XCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI0LDBcIiwgXCI0LDFcIiwgXCI0LDJcIiwgXCI0LDNcIiwgXCI0LDRcIiwgXCI0LDVcIiwgXCI0LDZcIiwgXCI0LDdcIiwgXCI0LDhcIiwgXCI0LDlcIiwgXCIyNiwxMVwiLCBcIjI2LDEyXCIsIFwiMjYsMTNcIiwgXCIyNiwxNFwiLCBcIjI2LDE1XCIsIFwiMjYsMTZcIiwgXCIyNiwxN1wiLCBcIjI2LDE4XCIsIFwiMjYsMTlcIiwgXCIyNiwyMFwiXVxuXHRcdH0sXG5cdFx0XCJyZXNvdXJjZU1ldGFsXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMzRcIixcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwibWV0YWxcIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjMsMFwiLCBcIjMsMVwiLCBcIjMsMlwiLCBcIjMsM1wiLCBcIjMsNFwiLCBcIjMsNVwiLCBcIjMsNlwiLCBcIjMsN1wiLCBcIjMsOFwiLCBcIjMsOVwiLCBcIjI3LDExXCIsIFwiMjcsMTJcIiwgXCIyNywxM1wiLCBcIjI3LDE0XCIsIFwiMjcsMTVcIiwgXCIyNywxNlwiLCBcIjI3LDE3XCIsIFwiMjcsMThcIiwgXCIyNywxOVwiLCBcIjI3LDIwXCJdXG5cdFx0fSxcblx0XHRcInJlc291cmNlRW5lcmd5XCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMzVcIixcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiZW5lcmd5XCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIyLDBcIiwgXCIyLDFcIiwgXCIyLDJcIiwgXCIyLDNcIiwgXCIyLDRcIiwgXCIyLDVcIiwgXCIyLDZcIiwgXCIyLDdcIiwgXCIyLDhcIiwgXCIyLDlcIiwgXCIyLDExXCIsIFwiMiwxMlwiLCBcIjIsMTNcIiwgXCIyLDE0XCIsIFwiMiwxNVwiLCBcIjIsMTZcIiwgXCIyLDE3XCIsIFwiMiwxOFwiLCBcIjIsMTlcIiwgXCIyLDIwXCIsIFwiMjgsMFwiLCBcIjI4LDFcIiwgXCIyOCwyXCIsIFwiMjgsM1wiLCBcIjI4LDRcIiwgXCIyOCw1XCIsIFwiMjgsNlwiLCBcIjI4LDdcIiwgXCIyOCw4XCIsIFwiMjgsOVwiLCBcIjI4LDExXCIsIFwiMjgsMTJcIiwgXCIyOCwxM1wiLCBcIjI4LDE0XCIsIFwiMjgsMTVcIiwgXCIyOCwxNlwiLCBcIjI4LDE3XCIsIFwiMjgsMThcIiwgXCIyOCwxOVwiLCBcIjI4LDIwXCJdXG5cdFx0fSxcblx0XHRcInJlc291cmNlQmlvbWFzc1wiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDM2XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcblx0XHRcdFwibmFtZVwiOiBcImJpb21hc3NcIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjUsMTFcIiwgXCI1LDEyXCIsIFwiNSwxM1wiLCBcIjUsMTRcIiwgXCI1LDE1XCIsIFwiNSwxNlwiLCBcIjUsMTdcIiwgXCI1LDE4XCIsIFwiNSwxOVwiLCBcIjUsMjBcIiwgXCIyNSwwXCIsIFwiMjUsMVwiLCBcIjI1LDJcIiwgXCIyNSwzXCIsIFwiMjUsNFwiLCBcIjI1LDVcIiwgXCIyNSw2XCIsIFwiMjUsN1wiLCBcIjI1LDhcIiwgXCIyNSw5XCJdXG5cdFx0fSxcblx0XHRcInJlc291cmNlQmlvZHJvbmVcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAzN1wiLFxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJiaW9kcm9uZVwiLFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNCwxMVwiLCBcIjQsMTJcIiwgXCI0LDEzXCIsIFwiNCwxNFwiLCBcIjQsMTVcIiwgXCI0LDE2XCIsIFwiNCwxN1wiLCBcIjQsMThcIiwgXCI0LDE5XCIsIFwiNCwyMFwiLCBcIjI2LDBcIiwgXCIyNiwxXCIsIFwiMjYsMlwiLCBcIjI2LDNcIiwgXCIyNiw0XCIsIFwiMjYsNVwiLCBcIjI2LDZcIiwgXCIyNiw3XCIsIFwiMjYsOFwiLCBcIjI2LDlcIl1cblx0XHR9LFxuXHRcdFwicmVzb3VyY2VVcmFuaXVtXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMzhcIixcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwidXJhbml1bVwiLFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMywxMVwiLCBcIjMsMTJcIiwgXCIzLDEzXCIsIFwiMywxNFwiLCBcIjMsMTVcIiwgXCIzLDE2XCIsIFwiMywxN1wiLCBcIjMsMThcIiwgXCIzLDE5XCIsIFwiMywyMFwiLCBcIjI3LDBcIiwgXCIyNywxXCIsIFwiMjcsMlwiLCBcIjI3LDNcIiwgXCIyNyw0XCIsIFwiMjcsNVwiLCBcIjI3LDZcIiwgXCIyNyw3XCIsIFwiMjcsOFwiLCBcIjI3LDlcIl1cblx0XHR9XG5cdH1cbn0iLCJtb2R1bGUuZXhwb3J0cz17XG5cdFwiZ3JpZFwiOiBbXG5cdFx0WzksIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMl0sXG5cdFx0WzMsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDgsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDZdLFxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxuXHRcdFs5LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAyLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMl0sXG5cdFx0WzEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA0XSxcblx0XHRbMywgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDZdLFxuXHRcdFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA0XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxuXHRcdFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA0XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxuXHRcdFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA0XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxuXHRcdFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA0XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxuXHRcdFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA0XSxcblx0XHRbMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgNF0sXG5cdFx0WzEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA0XSxcblx0XHRbMywgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgOCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNl0sXG5cdFx0WzExLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA1LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxNF0sXG5cdFx0WzExLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA1LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxNF0sXG5cdFx0WzExLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA1LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxNF0sXG5cdFx0WzExLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA1LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxNF0sXG5cdFx0WzksIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDIsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEyXSxcblx0XHRbMywgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDZdXG5cdF1cbn0iLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb1V1aWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGJ0aCA9IGJ5dGVUb0hleDtcbiAgLy8gam9pbiB1c2VkIHRvIGZpeCBtZW1vcnkgaXNzdWUgY2F1c2VkIGJ5IGNvbmNhdGVuYXRpb246IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMxNzUjYzRcbiAgcmV0dXJuIChbYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXV0pLmpvaW4oJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cblxuLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvXG4vLyBpbXBsZW1lbnRhdGlvbi4gQWxzbywgZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIG9uIElFMTEuXG52YXIgZ2V0UmFuZG9tVmFsdWVzID0gKHR5cGVvZihjcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZihtc0NyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5tc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0bykpO1xuXG5pZiAoZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWF0aFJORygpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cbiIsInZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuXG4gIGlmICh0eXBlb2Yob3B0aW9ucykgPT0gJ3N0cmluZycpIHtcbiAgICBidWYgPSBvcHRpb25zID09PSAnYmluYXJ5JyA/IG5ldyBBcnJheSgxNikgOiBudWxsO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDE2OyArK2lpKSB7XG4gICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYgfHwgYnl0ZXNUb1V1aWQocm5kcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjQ7XG4iLCJpbXBvcnQgQ2xpZW50IGZyb20gJy4vcHJlZmFicy9jbGllbnQnO1xuaW1wb3J0IEJvb3QgZnJvbSAnLi9zdGF0ZXMvYm9vdCc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL3N0YXRlcy9nYW1lJztcbmltcG9ydCBTZXR1cCBmcm9tICcuL3N0YXRlcy9zZXR1cCc7XG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJy4vc3RhdGVzL3ByZWxvYWRlcic7XG5pbXBvcnQgR2FtZW92ZXIgZnJvbSAnLi9zdGF0ZXMvZ2FtZW92ZXInO1xuaW1wb3J0IFNlcnZlckZ1bGwgZnJvbSAnLi9zdGF0ZXMvc2VydmVyRnVsbCc7XG5pbXBvcnQgU2VwdGlrb24gZnJvbSAnLi9wcmVmYWJzL3NlcHRpa29uJztcblxuaWYodHlwZW9mKFN0b3JhZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcHRVVUlEJykgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdXVpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXB0VVVJRCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHV1aWQgPSByZXF1aXJlKCd1dWlkL3Y0JykoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlcHRVVUlEJywgdXVpZCk7XG4gICAgfVxufSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKFwiTG9jYWwgU3RvcmFnZSBpcyByZXF1aXJlZCFcIik7XG59XG5cbi8vIGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCwgUGhhc2VyLkFVVE8sICdwaGFzZXItdGVzdC1nYW1lJyk7XG5jb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKFwiMTAwXCIsIFwiMTAwXCIsIFBoYXNlci5BVVRPKTtcbmdhbWUuc2VwdGlrb24gPSBuZXcgU2VwdGlrb24oZ2FtZSk7XG5nYW1lLmNsaWVudCA9IG5ldyBDbGllbnQoZ2FtZS5zZXB0aWtvbik7XG5cbmdhbWUuc3RhdGUuYWRkKCdib290JywgbmV3IEJvb3QoKSk7XG5nYW1lLnN0YXRlLmFkZCgnZ2FtZScsIG5ldyBHYW1lKCkpO1xuZ2FtZS5zdGF0ZS5hZGQoJ3NldHVwJywgbmV3IFNldHVwKCkpO1xuZ2FtZS5zdGF0ZS5hZGQoJ3ByZWxvYWRlcicsIG5ldyBQcmVsb2FkZXIoKSk7XG5nYW1lLnN0YXRlLmFkZCgnZ2FtZW92ZXInLCBuZXcgR2FtZW92ZXIoKSk7XG5nYW1lLnN0YXRlLmFkZCgnc2VydmVyRnVsbCcsIG5ldyBTZXJ2ZXJGdWxsKCkpO1xuXG5nYW1lLnN0YXRlLnN0YXJ0KCdib290Jyk7XG4iLCJ2YXIgZ2FtZU1vZGFsID0gZ2FtZU1vZGFsIHx8IHt9O1xuXG5cbmdhbWVNb2RhbCA9IGZ1bmN0aW9uIChnYW1lKSB7XG5cblx0dmFyIF90aGlzID0gdGhpcztcblx0Z2FtZS5tb2RhbHMgPSB7fTtcblxuXHQvKipcblx0ICogW2hpZGVNb2RhbCBkZXNjcmlwdGlvbl1cblx0ICogQHBhcmFtICB7W3R5cGVdfSB0eXBlIFtkZXNjcmlwdGlvbl1cblx0ICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cblx0ICovXG5cdHRoaXMuaGlkZU1vZGFsID0gZnVuY3Rpb24gKHR5cGUpIHtcblx0XHR3aW5kb3cuY29uc29sZS5sb2codHlwZSk7XG5cdFx0Z2FtZS5tb2RhbHNbdHlwZV0udmlzaWJsZSA9IGZhbHNlO1xuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0Y3JlYXRlTW9kYWw6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdFx0XHR2YXIgdHlwZSA9IG9wdGlvbnMudHlwZSB8fCAnJzsgLy8gbXVzdCBiZSB1bmlxdWVcblx0XHRcdHZhciBpbmNsdWRlQmFja2dyb3VuZCA9IG9wdGlvbnMuaW5jbHVkZUJhY2tncm91bmQ7IC8vIG1heWJlIG5vdCBvcHRpb25hbFxuXHRcdFx0dmFyIGJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yIHx8IFwiMHgwMDAwMDBcIjtcblx0XHRcdHZhciBiYWNrZ3JvdW5kT3BhY2l0eSA9IG9wdGlvbnMuYmFja2dyb3VuZE9wYWNpdHkgPT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdDAuNyA6IG9wdGlvbnMuYmFja2dyb3VuZE9wYWNpdHk7XG5cdFx0XHR2YXIgbW9kYWxDbG9zZU9uSW5wdXQgPSBvcHRpb25zLm1vZGFsQ2xvc2VPbklucHV0IHx8IGZhbHNlO1xuXHRcdFx0dmFyIG1vZGFsQmFja2dyb3VuZENhbGxiYWNrID0gb3B0aW9ucy5tb2RhbEJhY2tncm91bmRDYWxsYmFjayB8fCBmYWxzZTtcblx0XHRcdHZhciB2Q2VudGVyID0gb3B0aW9ucy52Q2VudGVyIHx8IHRydWU7XG5cdFx0XHR2YXIgaENlbnRlciA9IG9wdGlvbnMuaENlbnRlciB8fCB0cnVlO1xuXHRcdFx0dmFyIGl0ZW1zQXJyID0gb3B0aW9ucy5pdGVtc0FyciB8fCBbXTtcblx0XHRcdHZhciBmaXhlZFRvQ2FtZXJhID0gb3B0aW9ucy5maXhlZFRvQ2FtZXJhIHx8IGZhbHNlO1xuXG5cdFx0XHR2YXIgbW9kYWw7XG5cdFx0XHR2YXIgaW5uZXJNb2RhbDtcblx0XHRcdHZhciBtb2RhbEdyb3VwID0gZ2FtZS5hZGQuZ3JvdXAoKTtcblx0XHRcdGlmIChmaXhlZFRvQ2FtZXJhID09PSB0cnVlKSB7XG5cdFx0XHRcdG1vZGFsR3JvdXAuZml4ZWRUb0NhbWVyYSA9IHRydWU7XG5cdFx0XHRcdG1vZGFsR3JvdXAuY2FtZXJhT2Zmc2V0LnggPSAwO1xuXHRcdFx0XHRtb2RhbEdyb3VwLmNhbWVyYU9mZnNldC55ID0gMDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGluY2x1ZGVCYWNrZ3JvdW5kID09PSB0cnVlKSB7XG5cdFx0XHRcdG1vZGFsID0gZ2FtZS5hZGQuZ3JhcGhpY3MoZ2FtZS53aWR0aCwgZ2FtZS5oZWlnaHQpO1xuXHRcdFx0XHRtb2RhbC5iZWdpbkZpbGwoYmFja2dyb3VuZENvbG9yLCBiYWNrZ3JvdW5kT3BhY2l0eSk7XG5cdFx0XHRcdG1vZGFsLnggPSAwO1xuXHRcdFx0XHRtb2RhbC55ID0gMDtcblxuXHRcdFx0XHRtb2RhbC5kcmF3UmVjdCgwLCAwLCBnYW1lLndpZHRoLCBnYW1lLmhlaWdodCk7XG5cblx0XHRcdFx0aWYgKG1vZGFsQ2xvc2VPbklucHV0ID09PSB0cnVlKSB7XG5cblx0XHRcdFx0XHRpbm5lck1vZGFsID0gZ2FtZS5hZGQuc3ByaXRlKDAsIDApO1xuXHRcdFx0XHRcdGlubmVyTW9kYWwuaW5wdXRFbmFibGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRpbm5lck1vZGFsLndpZHRoID0gZ2FtZS53aWR0aDtcblx0XHRcdFx0XHRpbm5lck1vZGFsLmhlaWdodCA9IGdhbWUuaGVpZ2h0O1xuXHRcdFx0XHRcdGlubmVyTW9kYWwudHlwZSA9IHR5cGU7XG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5pbnB1dC5wcmlvcml0eUlEID0gMDtcblx0XHRcdFx0XHRpbm5lck1vZGFsLmV2ZW50cy5vbklucHV0RG93bi5hZGQoZnVuY3Rpb24gKGUsIHBvaW50ZXIpIHtcblx0XHRcdFx0XHRcdHRoaXMuaGlkZU1vZGFsKGUudHlwZSk7XG5cdFx0XHRcdFx0fSwgX3RoaXMsIDIpO1xuXG5cdFx0XHRcdFx0bW9kYWxHcm91cC5hZGQoaW5uZXJNb2RhbCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRtb2RhbEJhY2tncm91bmRDYWxsYmFjayA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKG1vZGFsQmFja2dyb3VuZENhbGxiYWNrKSB7XG5cdFx0XHRcdGlubmVyTW9kYWwgPSBnYW1lLmFkZC5zcHJpdGUoMCwgMCk7XG5cdFx0XHRcdGlubmVyTW9kYWwuaW5wdXRFbmFibGVkID0gdHJ1ZTtcblx0XHRcdFx0aW5uZXJNb2RhbC53aWR0aCA9IGdhbWUud2lkdGg7XG5cdFx0XHRcdGlubmVyTW9kYWwuaGVpZ2h0ID0gZ2FtZS5oZWlnaHQ7XG5cdFx0XHRcdGlubmVyTW9kYWwudHlwZSA9IHR5cGU7XG5cdFx0XHRcdGlubmVyTW9kYWwuaW5wdXQucHJpb3JpdHlJRCA9IDA7XG5cblx0XHRcdFx0bW9kYWxHcm91cC5hZGQoaW5uZXJNb2RhbCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpbmNsdWRlQmFja2dyb3VuZCkge1xuXHRcdFx0XHRtb2RhbEdyb3VwLmFkZChtb2RhbCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBtb2RhbExhYmVsO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtc0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0XHR2YXIgaXRlbSA9IGl0ZW1zQXJyW2ldO1xuXHRcdFx0XHR2YXIgaXRlbVR5cGUgPSBpdGVtLnR5cGUgfHwgJ3RleHQnO1xuXHRcdFx0XHR2YXIgaXRlbUNvbG9yID0gaXRlbS5jb2xvciB8fCAweDAwMDAwMDtcblx0XHRcdFx0dmFyIGl0ZW1Gb250ZmFtaWx5ID0gaXRlbS5mb250RmFtaWx5IHx8ICdBcmlhbCc7XG5cdFx0XHRcdHZhciBpdGVtRm9udFNpemUgPSBpdGVtLmZvbnRTaXplIHx8IDMyO1xuXHRcdFx0XHR2YXIgaXRlbVN0cm9rZSA9IGl0ZW0uc3Ryb2tlIHx8ICcweDAwMDAwMCc7XG5cdFx0XHRcdHZhciBpdGVtU3Ryb2tlVGhpY2tuZXNzID0gaXRlbS5zdHJva2VUaGlja25lc3MgfHwgMDtcblx0XHRcdFx0dmFyIGl0ZW1BbGlnbiA9IGl0ZW0uYWxpZ24gfHwgJ2NlbnRlcic7XG5cdFx0XHRcdHZhciBvZmZzZXRYID0gaXRlbS5vZmZzZXRYIHx8IDA7XG5cdFx0XHRcdHZhciBvZmZzZXRZID0gaXRlbS5vZmZzZXRZIHx8IDA7XG5cdFx0XHRcdHZhciBjb250ZW50U2NhbGUgPSBpdGVtLmNvbnRlbnRTY2FsZSB8fCAxO1xuXHRcdFx0XHR2YXIgY29udGVudCA9IGl0ZW0uY29udGVudCB8fCBcIlwiO1xuXHRcdFx0XHR2YXIgY2VudGVyWCA9IGdhbWUud2lkdGggLyAyO1xuXHRcdFx0XHR2YXIgY2VudGVyWSA9IGdhbWUuaGVpZ2h0IC8gMjtcblx0XHRcdFx0dmFyIGNhbGxiYWNrID0gaXRlbS5jYWxsYmFjayB8fCBmYWxzZTtcblx0XHRcdFx0dmFyIHRleHRBbGlnbiA9IGl0ZW0udGV4dEFsaWduIHx8IFwibGVmdFwiO1xuXHRcdFx0XHR2YXIgYXRsYXNQYXJlbnQgPSBpdGVtLmF0bGFzUGFyZW50IHx8IFwiXCI7XG5cdFx0XHRcdHZhciBidXR0b25Ib3ZlciA9IGl0ZW0uYnV0dG9uSG92ZXIgfHwgY29udGVudDtcblx0XHRcdFx0dmFyIGJ1dHRvbkFjdGl2ZSA9IGl0ZW0uYnV0dG9uQWN0aXZlIHx8IGNvbnRlbnQ7XG5cdFx0XHRcdHZhciBncmFwaGljQ29sb3IgPSBpdGVtLmdyYXBoaWNDb2xvciB8fCAweGZmZmZmZjtcblx0XHRcdFx0dmFyIGdyYXBoaWNPcGFjaXR5ID0gaXRlbS5ncmFwaGljT3BhY2l0eSB8fCAxO1xuXHRcdFx0XHR2YXIgZ3JhcGhpY1cgPSBpdGVtLmdyYXBoaWNXaWR0aCB8fCAyMDA7XG5cdFx0XHRcdHZhciBncmFwaGljSCA9IGl0ZW0uZ3JhcGhpY0hlaWdodCB8fCAyMDA7XG5cdFx0XHRcdHZhciBncmFwaGljUmFkaXVzID0gaXRlbS5ncmFwaGljUmFkaXVzIHx8IDA7XG5cdFx0XHRcdHZhciBsb2NrUG9zaXRpb24gPSBpdGVtLmxvY2tQb3NpdGlvbiB8fCBmYWxzZTtcblxuXHRcdFx0XHR2YXIgaXRlbUFuY2hvciA9IGl0ZW0uYW5jaG9yIHx8IHt4OjAseTowfTtcblx0XHRcdFx0dmFyIGl0ZW1BbmdsZSA9IGl0ZW0uYW5nbGUgfHwgMDtcblx0XHRcdFx0dmFyIGl0ZW1YID0gaXRlbS54IHx8IDA7XG5cdFx0XHRcdHZhciBpdGVtWSA9IGl0ZW0ueSB8fCAwO1xuXHRcdFx0XHR2YXIgaW1hZ2VGcmFtZSA9IGl0ZW0uZnJhbWUgfHwgbnVsbDtcblx0XHRcdFx0dmFyIHRpbGVTcHJpdGVXaWR0aCA9IGl0ZW0udGlsZVNwcml0ZVdpZHRoIHx8IGdhbWUud2lkdGg7XG5cdFx0XHRcdHZhciB0aWxlU3ByaXRlSGVpZ2h0ID0gaXRlbS50aWxlU3ByaXRlSGVpZ2h0IHx8IGdhbWUuaGVpZ2h0O1xuXG5cdFx0XHRcdG1vZGFsTGFiZWwgPSBudWxsO1xuXG5cdFx0XHRcdGlmIChpdGVtVHlwZSA9PT0gXCJ0ZXh0XCIgfHwgaXRlbVR5cGUgPT09IFwiYml0bWFwVGV4dFwiKSB7XG5cblx0XHRcdFx0XHRpZiAoaXRlbVR5cGUgPT09IFwidGV4dFwiKSB7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQudGV4dCgwLCAwLCBjb250ZW50LCB7XG5cdFx0XHRcdFx0XHRcdGZvbnQ6IGl0ZW1Gb250U2l6ZSArICdweCAnICsgaXRlbUZvbnRmYW1pbHksXG5cdFx0XHRcdFx0XHRcdGZpbGw6IFwiI1wiICsgU3RyaW5nKGl0ZW1Db2xvcikucmVwbGFjZShcIjB4XCIsIFwiXCIpLFxuXHRcdFx0XHRcdFx0XHRzdHJva2U6IFwiI1wiICsgU3RyaW5nKGl0ZW1TdHJva2UpLnJlcGxhY2UoXCIweFwiLCBcIlwiKSxcblx0XHRcdFx0XHRcdFx0c3Ryb2tlVGhpY2tuZXNzOiBpdGVtU3Ryb2tlVGhpY2tuZXNzLFxuXHRcdFx0XHRcdFx0XHRhbGlnbjogaXRlbUFsaWduXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAndGV4dCc7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnVwZGF0ZSgpO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKChnYW1lLndpZHRoIC8gMikgLSAobW9kYWxMYWJlbC53aWR0aCAvIDIpKSArIG9mZnNldFg7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoKGdhbWUuaGVpZ2h0IC8gMikgLSAobW9kYWxMYWJlbC5oZWlnaHQgLyAyKSkgKyBvZmZzZXRZO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuYml0bWFwVGV4dCgwLCAwLCBpdGVtRm9udGZhbWlseSwgU3RyaW5nKGNvbnRlbnQpLCBpdGVtRm9udFNpemUpO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdiaXRtYXBUZXh0Jztcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuYWxpZ24gPSB0ZXh0QWxpZ247XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnVwZGF0ZVRleHQoKTtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKG1vZGFsTGFiZWwud2lkdGggLyAyKSkgKyBvZmZzZXRYO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAobW9kYWxMYWJlbC5oZWlnaHQgLyAyKSkgKyBvZmZzZXRZO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcImltYWdlXCIpIHtcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuaW1hZ2UoMCwgMCwgY29udGVudCk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdpbWFnZSc7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJ0aWxlU3ByaXRlXCIpIHtcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQudGlsZVNwcml0ZShpdGVtWCwgaXRlbVksXG5cdFx0XHRcdFx0XHR0aWxlU3ByaXRlV2lkdGgsIHRpbGVTcHJpdGVIZWlnaHQsIGNvbnRlbnQsIGltYWdlRnJhbWUpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYW5jaG9yLnNldFRvKGl0ZW1BbmNob3IueCwgaXRlbUFuY2hvci55KTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmFuZ2xlID0gaXRlbUFuZ2xlO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAndGlsZVNwcml0ZSc7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwic3ByaXRlXCIpIHtcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuc3ByaXRlKDAsIDAsIGF0bGFzUGFyZW50LCBjb250ZW50KTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnNjYWxlLnNldFRvKGNvbnRlbnRTY2FsZSwgY29udGVudFNjYWxlKTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ3Nwcml0ZSc7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJidXR0b25cIikge1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5idXR0b24oMCwgMCwgYXRsYXNQYXJlbnQsIGNhbGxiYWNrLFxuXHRcdFx0XHRcdFx0dGhpcywgYnV0dG9uSG92ZXIsIGNvbnRlbnQsIGJ1dHRvbkFjdGl2ZSwgY29udGVudCk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdidXR0b24nO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XG5cblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJncmFwaGljc1wiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmdyYXBoaWNzKGdyYXBoaWNXLCBncmFwaGljSCk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5iZWdpbkZpbGwoZ3JhcGhpY0NvbG9yLCBncmFwaGljT3BhY2l0eSk7XG5cdFx0XHRcdFx0aWYgKGdyYXBoaWNSYWRpdXMgPD0gMCkge1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5kcmF3UmVjdCgwLCAwLCBncmFwaGljVywgZ3JhcGhpY0gpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmRyYXdSb3VuZGVkUmVjdCgwLCAwLCBncmFwaGljVywgZ3JhcGhpY0gsIGdyYXBoaWNSYWRpdXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtb2RhbExhYmVsLmVuZEZpbGwoKTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtICgobW9kYWxMYWJlbC53aWR0aCkgLyAyKSkgKyBvZmZzZXRYO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKChtb2RhbExhYmVsLmhlaWdodCkgLyAyKSkgKyBvZmZzZXRZO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bW9kYWxMYWJlbC5fb2Zmc2V0WCA9IDA7XG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFkgPSAwO1xuXHRcdFx0XHRtb2RhbExhYmVsLmxvY2tQb3NpdGlvbiA9IGxvY2tQb3NpdGlvbjtcblx0XHRcdFx0bW9kYWxMYWJlbC5fb2Zmc2V0WCA9IG9mZnNldFg7XG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFkgPSBvZmZzZXRZO1xuXG5cblx0XHRcdFx0aWYgKGNhbGxiYWNrICE9PSBmYWxzZSAmJiBpdGVtVHlwZSAhPT0gXCJidXR0b25cIikge1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuaW5wdXRFbmFibGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnBpeGVsUGVyZmVjdENsaWNrID0gdHJ1ZTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnByaW9yaXR5SUQgPSAxMDtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmV2ZW50cy5vbklucHV0RG93bi5hZGQoY2FsbGJhY2ssIG1vZGFsTGFiZWwpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGl0ZW1UeXBlICE9PSBcImJpdG1hcFRleHRcIiAmJiBpdGVtVHlwZSAhPT0gXCJncmFwaGljc1wiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5icmluZ1RvVG9wKCk7XG5cdFx0XHRcdFx0bW9kYWxHcm91cC5hZGQobW9kYWxMYWJlbCk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5icmluZ1RvVG9wKCk7XG5cdFx0XHRcdFx0bW9kYWxHcm91cC5icmluZ1RvVG9wKG1vZGFsTGFiZWwpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKG1vZGFsTGFiZWwpO1xuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYnJpbmdUb1RvcChtb2RhbExhYmVsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRtb2RhbEdyb3VwLnZpc2libGUgPSBmYWxzZTtcblx0XHRcdGdhbWUubW9kYWxzW3R5cGVdID0gbW9kYWxHcm91cDtcblxuXHRcdH0sXG5cdFx0dXBkYXRlTW9kYWxWYWx1ZTogZnVuY3Rpb24gKHZhbHVlLCB0eXBlLCBpbmRleCwgaWQpIHtcblx0XHRcdHZhciBpdGVtO1xuXHRcdFx0aWYgKGluZGV4ICE9PSB1bmRlZmluZWQgJiYgaW5kZXggIT09IG51bGwpIHtcblx0XHRcdFx0aXRlbSA9IGdhbWUubW9kYWxzW3R5cGVdLmdldENoaWxkQXQoaW5kZXgpO1xuXHRcdFx0fSBlbHNlIGlmIChpZCAhPT0gdW5kZWZpbmVkICYmIGlkICE9PSBudWxsKSB7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwidGV4dFwiKSB7XG5cdFx0XHRcdGl0ZW0udGV4dCA9IHZhbHVlO1xuXHRcdFx0XHRpdGVtLnVwZGF0ZSgpO1xuXHRcdFx0XHRpZiAoaXRlbS5sb2NrUG9zaXRpb24gPT09IHRydWUpIHtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGl0ZW0ueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKGl0ZW0ud2lkdGggLyAyKSkgKyBpdGVtLl9vZmZzZXRYO1xuXHRcdFx0XHRcdGl0ZW0ueSA9ICgoZ2FtZS5oZWlnaHQgLyAyKSAtIChpdGVtLmhlaWdodCAvIDIpKSArIGl0ZW0uX29mZnNldFk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoaXRlbS5jb250ZW50VHlwZSA9PT0gXCJiaXRtYXBUZXh0XCIpIHtcblx0XHRcdFx0aXRlbS50ZXh0ID0gdmFsdWU7XG5cdFx0XHRcdGl0ZW0udXBkYXRlVGV4dCgpO1xuXHRcdFx0XHRpZiAoaXRlbS5sb2NrUG9zaXRpb24gPT09IHRydWUpIHtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGl0ZW0ueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKGl0ZW0ud2lkdGggLyAyKSkgKyBpdGVtLl9vZmZzZXRYO1xuXHRcdFx0XHRcdGl0ZW0ueSA9ICgoZ2FtZS5oZWlnaHQgLyAyKSAtIChpdGVtLmhlaWdodCAvIDIpKSArIGl0ZW0uX29mZnNldFk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoaXRlbS5jb250ZW50VHlwZSA9PT0gXCJpbWFnZVwiKSB7XG5cdFx0XHRcdGl0ZW0ubG9hZFRleHR1cmUodmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0fSxcblx0XHRnZXRNb2RhbEl0ZW06IGZ1bmN0aW9uICh0eXBlLCBpbmRleCkge1xuXHRcdFx0cmV0dXJuIGdhbWUubW9kYWxzW3R5cGVdLmdldENoaWxkQXQoaW5kZXgpO1xuXHRcdH0sXG5cdFx0c2hvd01vZGFsOiBmdW5jdGlvbiAodHlwZSkge1xuXHRcdFx0Z2FtZS53b3JsZC5icmluZ1RvVG9wKGdhbWUubW9kYWxzW3R5cGVdKTtcblx0XHRcdGdhbWUubW9kYWxzW3R5cGVdLnZpc2libGUgPSB0cnVlO1xuXHRcdFx0Ly8geW91IGNhbiBhZGQgYW5pbWF0aW9uIGhlcmVcblx0XHR9LFxuXHRcdGhpZGVNb2RhbDogZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRcdGdhbWUubW9kYWxzW3R5cGVdLnZpc2libGUgPSBmYWxzZTtcblx0XHRcdC8vIHlvdSBjYW4gYWRkIGFuaW1hdGlvbiBoZXJlXG5cdFx0fSxcblx0XHRkZXN0cm95TW9kYWw6IGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS5kZXN0cm95KCk7XG5cdFx0XHRkZWxldGUgZ2FtZS5tb2RhbHNbdHlwZV07XG5cdFx0fVxuXHR9O1xufTtcbiIsIlxuY2xhc3MgQ2xpZW50IHtcbiAgICBcblx0Y29uc3RydWN0b3Ioc2VwdGlrb24pIHtcbiAgICAgICAgXG5cdFx0dGhpcy5zb2NrZXQgPSBpby5jb25uZWN0KCk7XG4gICAgICAgIHRoaXMuc2VwdGlrb24gPSB0aGlzLnNvY2tldC5zZXB0aWtvbiA9IHNlcHRpa29uO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2xvZycsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0xPRzogJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ3VwZGF0ZScsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgaWYoZGF0YS50eXBlID09IFwicGVyc29ubmVsXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLnVwZGF0ZVBlcnNvbm5lbChkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGRhdGEudHlwZSA9PSBcInJlc291cmNlc1wiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWN0aW9uID09IFwiaW5pdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24uaW5pdFJlc291cmNlcygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZGF0YS5hY3Rpb24gKyBcIiBub3QgYSBsZWdhbCBhY3Rpb24gZm9yIFJlc291cmNlIHVwZGF0ZS5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PSBcImRpY2VcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24uZ2FtZS5kaWNlLnNldFZhbHVlKGRhdGEuZGV0YWlscy52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVVBEQVRFOicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS50eXBlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ3JlcXVlc3QnLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSRVFVRVNUOiAnKTtcbiAgICAgICAgICAgIHN3aXRjaChkYXRhLmRldGFpbHMudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJhc2tTdGFydFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLnNob3dNb2RhbCgnYXNrU3RhcnQnKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2FjdGlvbicsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBQ1RJT046IFwiKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YodGhpcy5zZXB0aWtvbltkYXRhLmNhbGxiYWNrXSkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb25bZGF0YS5jYWxsYmFja10oZGF0YS5kZXRhaWxzKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogbm8gbWV0aG9kIGZvdW5kIGNhbGxlZCBzZXB0aWtvbi5cIiArIGRhdGEuY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblx0fVxuXG5cdGFza05ld1BsYXllcigpIHtcblx0XHR0aGlzLnNvY2tldC5lbWl0KCduZXdQbGF5ZXInLCB7dXVpZDpsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VwdFVVSUQnKX0pO1xuXHR9XG4gICAgXG4gICAgc2VuZElucHV0KHBheWxvYWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbmRpbmcgaW5wdXQnKTtcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnaW5wdXQnLCBwYXlsb2FkKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENsaWVudDtcbiIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXG5cbmNsYXNzIENsb25lIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSwgdXVpZCkge1xuICAgIHN1cGVyKGdhbWUsIHgsIHksICdjbG9uZScsIGZyYW1lKTtcbiAgICAgICAgXG4gICAgLy9zZXR1cCBwaHlzaWNzIHByb3BlcnRpZXNcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNjUpO1xuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGVCb2R5KHRoaXMpO1xuICAgIC8vdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG5cbiAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgIC8vc2V0IHNpemVcbiAgICB0aGlzLndpZHRoID0gMjc7XG4gICAgdGhpcy5zY2FsZS55ID0gTWF0aC5hYnModGhpcy5zY2FsZS54KTtcbiAgICBcbiAgICAvL3NldCByb3RhdGlvbiAodGhpcyBzaG91bGQgYmUgYmFzZWQgb24gdGhlIGJhc2UgdGhpcyBjbG9uZSBvY2N1cGllcylcbiAgICB0aGlzLmFuZ2xlID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAuYW5nbGUgKiAtMTtcblxuICAgIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5waXhlbHNUb1RpbGUodGhpcy54LCB0aGlzLnkpO1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSB0cnVlO1xuXG4gIH1cbiAgXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gZmFsc2U7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICBoaWdobGlnaHRPbigpIHtcbiAgICB0aGlzLnRpbnQgPSAweEZGNTUwMDtcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0uYWxwaGEgPSAxO1xuICB9XG4gIFxuICBoaWdobGlnaHRPZmYoKSB7XG4gICAgdGhpcy50aW50ID0gMHhmZmZmZmY7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLmFscGhhID0gMDtcbiAgfVxuICBcbiAgZ2V0TGVnYWxNb3ZlcygpIHtcbiAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSB0aGlzLmdhbWUuc2VwdGlrb24ucGl4ZWxzVG9UaWxlKHRoaXMueCwgdGhpcy55KTtcbiAgICB2YXIgY3VycmVudExlZ2FsTW92ZXMgPSB0aGlzLmdhbWUuc2VwdGlrb24uZ2V0TGVnYWxNb3Zlcyh0aGlzLmdhbWUuZ2xvYmFsLmxhc3REaWNlUm9sbCwgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzKTtcbiAgICB2YXIgbGVnYWxUaWxlc0FycmF5ID0gW107XG4gICAgXG4gICAgXG4gICAgZm9yICh2YXIgdGlsZSBpbiBjdXJyZW50TGVnYWxNb3Zlcykge1xuICAgICAgICBsZWdhbFRpbGVzQXJyYXkucHVzaCh0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W2N1cnJlbnRMZWdhbE1vdmVzW3RpbGVdLnhdW2N1cnJlbnRMZWdhbE1vdmVzW3RpbGVdLnldKTtcbiAgICAgICAgLy9sZWdhbFRpbGVzQXJyYXlbbGVnYWxUaWxlc0FycmF5Lmxlbmd0aC0xXS5hbHBoYSA9IDAuNTtcbiAgICAgICAgLy9sZWdhbFRpbGVzQXJyYXlbbGVnYWxUaWxlc0FycmF5Lmxlbmd0aC0xXS5sZWdhbEZvciA9IHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBsZWdhbFRpbGVzQXJyYXk7XG4gIH1cbiAgXG4gIG1vdmUoY29vcmRpbmF0ZXMpIHtcbiAgXG4gICAgLy8gQ2xlYXIgXCJsZWdhbEZvclwiXG4gICAgZm9yICh2YXIgdGlsZSBpbiB0aGlzLmxlZ2FsVGlsZXNBcnJheSkge1xuICAgICAgICB0aGlzLmxlZ2FsVGlsZXNBcnJheVt0aWxlXS5hbHBoYSA9IDA7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmxlZ2FsVGlsZXNBcnJheVt0aWxlXS5sZWdhbEZvcjtcbiAgICB9XG4gICAgXG4gICAgLy8gTW92ZSB0byBuZXcgaG9tZVxuICAgIC8vIE5lZWQgdG8gYWRkIGEgY2hlY2sgZm9yIGFybWVkIG9wcG9uZW50cyAoYmlvZHJvbmVzL2VzcGlvbmFnZWQgY2xvbmVzL2Nsb25lcyBpbiBlbmVteSBiYXNlLCBldGMuKVxuICAgIHZhciBwb2ludHMgPSB0aGlzLmdhbWUuc2VwdGlrb24udGlsZVRvUGl4ZWxzKGNvb3JkaW5hdGVzLngsIGNvb3JkaW5hdGVzLnkpO1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSBmYWxzZTtcbiAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLnkgLSBwb2ludHMueSArIHRoaXMueCAtIHBvaW50cy54KS50b0ZpeGVkKDEpO1xuICAgIFxuICAgIC8vIFVwZGF0ZSB0aGUgcGVyc29ubmVsIGNvb3JkaW5hdGUgcHJvcGVydHlcbiAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gdHJ1ZTtcbiAgICBcbiAgICAvLyBXYWl0IGZvciBhbmltYXRpb24gdG8gY29tcGxldGUsIHRoZW4gcHJvY2VzcyB0aWxlIHRyaWdnZXJcbiAgICB2YXIgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMpLnRvKCB7eDpwb2ludHMueCwgeTpwb2ludHMueX0sIChkaXN0YW5jZSoxMSksIFBoYXNlci5FYXNpbmcuQ3ViaWMuT3V0LCB0cnVlKTtcbiAgICB0d2Vlbi5vbkNvbXBsZXRlLmFkZCh0aGlzLmdhbWUuc2VwdGlrb24udHJpZ2dlclRpbGUsIHRoaXMuZ2FtZS5zZXB0aWtvbik7XG4gICAgXG4gICAgLy8gQ2xlYXIgdGhpcy5jdXJyZW50TGVnYWxNb3Zlc1xuICAgIGRlbGV0ZSB0aGlzLmxlZ2FsVGlsZXNBcnJheTtcbiAgICBkZWxldGUgdGhpcy5jdXJyZW50TGVnYWxNb3ZlczsgICAgXG4gIH1cbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xvbmU7XG4iLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxuY2xhc3MgQ3Jvc3NoYWlycyBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUpIHtcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnY3Jvc3NoYWlycycsIGZyYW1lKTtcblxuICAgIC8vc2V0IHNpemVcbiAgICB0aGlzLndpZHRoID0gMzU7IFxuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XG5cbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gIH1cblxuICB1cGRhdGUoKXtcbiAgICB0aGlzLnggPSB0aGlzLmdhbWUuaW5wdXQubW91c2VQb2ludGVyLng7XG4gICAgdGhpcy55ID0gdGhpcy5nYW1lLmlucHV0Lm1vdXNlUG9pbnRlci55O1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3Jvc3NoYWlycztcbiIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXG5jbGFzcyBEaWNlIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSkgeyAgXG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2RpY2UnLCBmcmFtZSk7XG5cbiAgICAvL3NldHVwIHBoeXNpY3MgcHJvcGVydGllc1xuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlQm9keSh0aGlzKTtcblxuICAgIC8vc2V0IGNsaWNrIGV2ZW50XG4gICAgdGhpcy5pbnB1dEVuYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmV2ZW50cy5vbklucHV0RG93bi5hZGQodGhpcy5jbGlja2VkLCB0aGlzKTtcblxuICAgIC8vc2V0IHNpemVcbiAgICB0aGlzLndpZHRoID0gNTA7XG4gICAgdGhpcy5zY2FsZS55ID0gTWF0aC5hYnModGhpcy5zY2FsZS54KTtcbiAgICB0aGlzLmZpbHRlcnMgPSBbdGhpcy5nYW1lLmFkZC5maWx0ZXIoJ0dyYXknKV07XG4gICAgdGhpcy5hbHBoYSA9IDAuNTtcbiAgICBcbiAgICB0aGlzLnZhbHVlID0gMTA7XG4gICAgdGhpcy5mcmFtZSA9IHRoaXMudmFsdWUtMTtcbiAgfVxuXG4gIGNsaWNrZWQgKCkge1xuICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ2RpY2VDbGlja2VkJ30pO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgICAgdGhpcy5hbHBoYSA9IDE7XG4gICAgICB0aGlzLmZpbHRlcnMgPSBudWxsO1xuICAgICAgdGhpcy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICAgIHRoaXMuYWxwaGEgPSAwLjU7XG4gICAgICB0aGlzLmZpbHRlcnMgPSBbdGhpcy5nYW1lLmFkZC5maWx0ZXIoJ0dyYXknKV07XG4gICAgICB0aGlzLmlucHV0RW5hYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5mcmFtZSA9IHZhbHVlIC0gMTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaWNlO1xuIiwiY2xhc3MgTWFzdGVyIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKCkgeyBcbiAgfVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFzdGVyOyIsImNsYXNzIE9yZG5hbmNlIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSwgdHlwZSwgdXVpZCkge1xuICAgIHZhciBvcmRGcmFtZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgXCJzaGllbGRcIjpcbiAgICAgICAgb3JkRnJhbWUgPSA0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJiaW9kcm9uZVwiOlxuICAgICAgICBvcmRGcmFtZSA9IDE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNhdGVsbGl0ZVwiOlxuICAgICAgICBvcmRGcmFtZSA9IDU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInJvY2tldFwiOlxuICAgICAgICBvcmRGcmFtZSA9IDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkJhZCBvcmRuYW5jZSB0eXBlXCIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ29yZG5hbmNlJywgb3JkRnJhbWUpO1xuICAgICAgICBcbiAgICAvL3NldHVwIHBoeXNpY3MgcHJvcGVydGllc1xuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlQm9keSh0aGlzKTtcbiAgICAvL3RoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuXG4gICAgdGhpcy51dWlkID0gdXVpZDtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIC8vc2V0IHNpemVcbiAgICB0aGlzLndpZHRoID0gNTA7XG4gICAgdGhpcy5zY2FsZS55ID0gTWF0aC5hYnModGhpcy5zY2FsZS54KTtcbiAgICBcbiAgICAvL3NldCByb3RhdGlvbiAodGhpcyBzaG91bGQgYmUgYmFzZWQgb24gdGhlIGJhc2UgdGhpcyBjbG9uZSBvY2N1cGllcylcbiAgICB0aGlzLmFuZ2xlID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAuYW5nbGUgKiAtMTtcblxuICAgIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5waXhlbHNUb1RpbGUodGhpcy54LCB0aGlzLnkpO1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSB0cnVlO1xuXG4gIH1cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZG5hbmNlOyIsImNsYXNzIFBlcnNvbm5lbCBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSkge1xuICAgICAgICBzdXBlcihnYW1lLCB4LCB5LCAnY2xvbmUnLCBmcmFtZSk7ICBcbiAgICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBQZXJzb25uZWw7IiwiY2xhc3MgUmVzb3VyY2VzIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKCkgeyBcbiAgICB0aGlzLnJlc291cmNlRW51bSA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICBPWFlHRU46IDAsXG4gICAgICAgIFJPQ0tFVDogMSxcbiAgICAgICAgTUVUQUw6IDIsXG4gICAgICAgIEVORVJHWTogMyxcbiAgICAgICAgQklPTUFTUzogNCxcbiAgICAgICAgQklPRFJPTkU6IDUsXG4gICAgICAgIFVSQU5JVU06IDZcbiAgICB9KTtcbiAgICB0aGlzLnJlc291cmNlcyA9IHt9O1xuICAgIGZvcih2YXIgdHlwZSBpbiB0aGlzLnJlc291cmNlRW51bSkge1xuICAgICAgICB0aGlzLnJlc291cmNlc1t0aGlzLnJlc291cmNlRW51bVt0eXBlXV0gPSA1O1xuICAgIH1cbiAgfVxuICBcbiAgY2hlY2sodHlwZSwgY291bnQpIHtcbiAgICBpZih0aGlzLnJlc291cmNlc1t0aGlzLnJlc291cmNlRW51bVt0eXBlXV0gPiBjb3VudClcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgZ2V0Q291bnQodHlwZSkge1xuICAgIHJldHVybiB0aGlzLnJlc291cmNlc1t0eXBlXTtcbiAgfVxuICAgIFxuICBhZGQodHlwZSwgY291bnQpIHtcbiAgfVxuICBcbiAgcmVtb3ZlKHR5cGUsIGNvdW50KSB7XG4gICAgdGhpcy5yZXNvdXJjZXNbdHlwZV0gLT0gY291bnQ7XG4gIH1cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc291cmNlczsiLCJpbXBvcnQgQ2xvbmUgZnJvbSAnLi4vcHJlZmFicy9jbG9uZSc7XG5pbXBvcnQgT3JkbmFuY2UgZnJvbSAnLi4vcHJlZmFicy9vcmRuYW5jZSc7XG5cbmNsYXNzIFNlcHRpa29uIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHsgXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICBcbiAgICB0aGlzLnBsYXllciA9IHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIHBlcnNvbm5lbEFycmF5OiBbXSxcbiAgICAgICAgb3JkbmFuY2VBcnJheTogW11cbiAgICB9O1xuXG4gICAgdGhpcy5vcHBvbmVudCA9IHtcbiAgICAgICAgcGVyc29ubmVsQXJyYXk6IFtdLFxuICAgICAgICBvcmRuYW5jZUFycmF5OiBbXVxuICAgIH07XG4gICAgXG4gICAgdGhpcy5zaG93blRpbGVzID0gW107XG4gICAgdGhpcy50aWxlQXJyYXkgPSBbXTtcblxuICAgIHRoaXMubGVnYWxNb3ZlcyA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RlZFRvTW92ZSA9IG51bGw7XG4gICAgdGhpcy5sZWdhbEd1bm5lcnMgPSBudWxsO1xuXG4gICAgdGhpcy5jaG9vc2luZ1RhcmdldHMgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkR3VubmVycyA9IFtdO1xuICB9XG5cbiAgc2hvd01vZGFsKHR5cGUpIHtcbiAgICB0aGlzLmdhbWUubW9kYWwuc2hvd01vZGFsKHR5cGUpO1xuICB9XG4gIFxuICBkaWNlUm9sbGVkKGRldGFpbHMpIHtcbiAgICB0aGlzLmdhbWUuZGljZS5zZXRWYWx1ZShkZXRhaWxzLnZhbHVlKTtcbiAgICB0aGlzLmxlZ2FsTW92ZXMgPSBkZXRhaWxzLmdhbWVQaWVjZXM7XG4gICAgdmFyIHBvaW50QXJyYXkgPSBbXTtcbiAgICAvLyBjb25zb2xlLmxvZyhkZXRhaWxzLmdhbWVQaWVjZXNbMF0ub3JpZ2luKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRldGFpbHMuZ2FtZVBpZWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwb2ludEFycmF5LnB1c2goeyB4OiBkZXRhaWxzLmdhbWVQaWVjZXNbaV0ub3JpZ2luLngsIHk6IGRldGFpbHMuZ2FtZVBpZWNlc1tpXS5vcmlnaW4ueSB9KTtcbiAgICB9XG4gICAgdGhpcy5zaG93VGlsZXMocG9pbnRBcnJheSwgMHhGNjM2MzYpO1xuICB9XG5cbiAgb2ZmZXJEaWNlKCkge1xuICAgICAgdGhpcy5nYW1lLmRpY2UuZW5hYmxlKCk7XG4gIH1cblxuICB0YWtlRGljZSgpIHtcbiAgICAgIHRoaXMuZ2FtZS5kaWNlLmRpc2FibGUoKTtcbiAgfVxuXG4gIG9mZmVyR3VubmVycyhkYXRhKSB7XG4gICAgICB0aGlzLmNob29zaW5nVGFyZ2V0cyA9IHRydWU7XG4gICAgICB0aGlzLmxlZ2FsR3VubmVycyA9IGRhdGEuZ3VubmVycztcbiAgICAgIHRoaXMuZ2FtZS5nby5lbmFibGUoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYW5pbWF0ZSBzb21lIGluZGljYXRpb24gb2YgdmlhYmxlIGd1bm5lcnMgb24gdGhlIHN1cmZhY2UuIE1heWJlIGEgcG9pbnRlciBib3VuY2luZyBvdmVyIHRoZW0/XCIpO1xuICAgICAgLy9UT0RPOiBFbWl0IGFuIGluZGljYXRvciBmb3Igc2VsZWN0aW5nIGEgZ3VubmVyXG4gIH1cbiAgXG4gIGFkZENsb25lKGRldGFpbHMpIHtcbiAgICB2YXIgcG9pbnQgPSB0aGlzLnRpbGVUb1BpeGVscyhkZXRhaWxzLngsIGRldGFpbHMueSk7XG4gICAgdmFyIGNsb25lID0gbmV3IENsb25lKHRoaXMuZ2FtZSwgcG9pbnQueCwgcG9pbnQueSwgbnVsbCwgZGV0YWlscy51dWlkKTtcbiAgICBpZihkZXRhaWxzLnBsYXllcklEID09IHRoaXMucGxheWVyLmlkKSB7XG4gICAgICAgIHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5LnB1c2goY2xvbmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXkucHVzaChjbG9uZSk7XG4gICAgfVxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFkZChjbG9uZSk7XG4gIH1cblxuICBhZGRPcmRuYW5jZShkZXRhaWxzKSB7XG4gICAgdmFyIHBvaW50ID0gdGhpcy50aWxlVG9QaXhlbHMoZGV0YWlscy5wb2ludC54LCBkZXRhaWxzLnBvaW50LnkpO1xuICAgIHZhciBvcmQgPSBuZXcgT3JkbmFuY2UodGhpcy5nYW1lLCBwb2ludC54LCBwb2ludC55LCBudWxsLCBkZXRhaWxzLnR5cGUsIGRldGFpbHMudXVpZCk7XG4gICAgaWYoZGV0YWlscy5wbGF5ZXJJRCA9PSB0aGlzLnBsYXllci5pZCkge1xuICAgICAgICB0aGlzLnBsYXllci5vcmRuYW5jZUFycmF5LnB1c2gob3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wcG9uZW50Lm9yZG5hbmNlQXJyYXkucHVzaChvcmQpO1xuICAgIH1cbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQob3JkKTtcbiAgfVxuXG4gIG1vdmVQZXJzb25uZWwoZGF0YSkge1xuICAgIHZhciB0d2VlbiA9IG51bGw7XG4gICAgdmFyIGRpc3RhbmNlID0gbnVsbDtcbiAgICB2YXIgcG9pbnQgPSB0aGlzLnRpbGVUb1BpeGVscyhkYXRhLngsIGRhdGEueSk7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheSkge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0udXVpZCA9PSBkYXRhLnV1aWQpIHtcbiAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueSAtIHBvaW50LnkgKyB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtpXS54IC0gcG9pbnQueCkudG9GaXhlZCgxKTtcbiAgICAgICAgICAgIHR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtpXSkudG8oIHt4OnBvaW50LngsIHk6cG9pbnQueX0sIChkaXN0YW5jZSoxMSksIFBoYXNlci5FYXNpbmcuQ3ViaWMuT3V0LCB0cnVlKTtcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgdGlsZS4gTm90IHF1aXRlIHN1cmUgaG93IHRvIGRvIHRoaXMgeWV0LlxuICAgICAgICAgICAgLy90d2Vlbi5vbkNvbXBsZXRlLmFkZCh0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICdtb3ZlQ29tcGxldGUnLCB4OnBhcnNlSW50KG9iai50aWxlWCksIHk6cGFyc2VJbnQob2JqLnRpbGVZKX0pOywgdGhpcy5nYW1lLnNlcHRpa29uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBqIGluIHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXkpIHtcbiAgICAgICAgaWYgKHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXlbal0udXVpZCA9PSBkYXRhLnV1aWQpIHtcbiAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheVtqXS55IC0gcG9pbnQueSArIHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXlbal0ueCAtIHBvaW50LngpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheVtqXSkudG8oIHt4OnBvaW50LngsIHk6cG9pbnQueX0sIChkaXN0YW5jZSoxMSksIFBoYXNlci5FYXNpbmcuQ3ViaWMuT3V0LCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdmVPcmRuYW5jZShkYXRhKSB7XG4gICAgdmFyIHR3ZWVuID0gbnVsbDtcbiAgICB2YXIgZGlzdGFuY2UgPSBudWxsO1xuICAgIHZhciBwb2ludCA9IG51bGw7XG4gICAgZm9yICh2YXIgZGF0YUluZGV4ID0gMDsgZGF0YUluZGV4IDwgZGF0YS5sZW5ndGg7IGRhdGFJbmRleCsrKSB7XG4gICAgICAgIHBvaW50ID0gdGhpcy50aWxlVG9QaXhlbHMoZGF0YVtkYXRhSW5kZXhdLngsIGRhdGFbZGF0YUluZGV4XS55KTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnBsYXllci5vcmRuYW5jZUFycmF5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheVtpXS51dWlkID09IGRhdGFbZGF0YUluZGV4XS51dWlkKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLnBsYXllci5vcmRuYW5jZUFycmF5W2ldLnkgLSBwb2ludC55ICsgdGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheVtpXS54IC0gcG9pbnQueCkudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheVtpXSkudG8oIHt4OnBvaW50LngsIHk6cG9pbnQueX0sIChkaXN0YW5jZSoxMSksIFBoYXNlci5FYXNpbmcuQ3ViaWMuT3V0LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBqIGluIHRoaXMub3Bwb25lbnQub3JkbmFuY2VBcnJheSkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3Bwb25lbnQub3JkbmFuY2VBcnJheVtqXS51dWlkID09IGRhdGFbZGF0YUluZGV4XS51dWlkKSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLm9wcG9uZW50Lm9yZG5hbmNlQXJyYXlbal0ueSAtIHBvaW50LnkgKyB0aGlzLm9wcG9uZW50Lm9yZG5hbmNlQXJyYXlbal0ueCAtIHBvaW50LngpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMub3Bwb25lbnQub3JkbmFuY2VBcnJheVtqXSkudG8oIHt4OnBvaW50LngsIHk6cG9pbnQueX0sIChkaXN0YW5jZSoxMSksIFBoYXNlci5FYXNpbmcuQ3ViaWMuT3V0LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVBlcnNvbm5lbChkYXRhKSB7XG4gICAgICB2YXIgY3VycmVudFBlcnNvbm5lbCA9IG51bGw7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmRldGFpbHMpID09PSBmYWxzZSkge1xuICAgICAgICAgIGRhdGEuZGV0YWlscyA9IFtkYXRhLmRldGFpbHNdO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheS5sZW5ndGggPT09IDAgJiYgZGF0YS5kZXRhaWxzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICBmb3IgKHZhciBpIGluIGRhdGEuZGV0YWlscykge1xuICAgICAgICAgICAgdGhpcy5hZGRDbG9uZShkYXRhLmRldGFpbHNbaV0pO1xuICAgICAgICB9ICAgICAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKHZhciBwIGluIHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXkpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQZXJzb25uZWwgPSB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5W3BdO1xuICAgICAgICAgICAgZm9yICh2YXIgZCBpbiBkYXRhLmRldGFpbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBlcnNvbm5lbC51dWlkID09IGRhdGEuZGV0YWlsc1tkXS51dWlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVBlcnNvbm5lbChkYXRhLmRldGFpbHNbZF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgcmVtb3ZlUGVyc29ubmVsKGRhdGEpIHtcbiAgICAgIHZhciBwZXJzb25uZWxUb0Rlc3Ryb3k7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnV1aWQgPT0gZGF0YS51dWlkKSB7XG4gICAgICAgICAgICAgIHBlcnNvbm5lbFRvRGVzdHJveSA9IHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldO1xuICAgICAgICAgICAgICB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheS5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgICAgcGVyc29ubmVsVG9EZXN0cm95LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVtb3ZlQWxsUGVyc29ubmVsKCl7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdhbWUuYm9hcmRHcm91cC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0aGlzLmdhbWUuYm9hcmRHcm91cC5jaGlsZHJlbltpXS5jb25zdHJ1Y3RvciA9PSBDbG9uZSl7XG4gICAgICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5jaGlsZHJlbltpXS5kZXN0cm95KCk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIHVwZGF0ZVBsYXllcihkZXRhaWxzKSB7XG4gICAgZm9yICh2YXIgaSBpbiBkZXRhaWxzKSB7XG4gICAgICAgIHRoaXMucGxheWVyW2ldID0gZGV0YWlsc1tpXTtcbiAgICB9XG4gIH1cblxuICBpbml0UmVzb3VyY2VzKCkge1xuICAgIHZhciBjdXJyZW50UmVjID0gbnVsbDtcbiAgICB2YXIgZ3JhcGhpY3MgPSB0aGlzLmdhbWUuYWRkLmdyYXBoaWNzKDAsIDApO1xuICAgIC8vZ3JhcGhpY3MubGluZVN0eWxlKDQsIDB4ZmZkOTAwLCAxKTtcbiAgICBncmFwaGljcy5iZWdpbkZpbGwoMHhmZmZmZmYsIDEpO1xuICAgIGdyYXBoaWNzLmRyYXdSb3VuZGVkUmVjdCgxMDAsIDEwMCwgdGhpcy50aWxlV2lkdGgtNCwgdGhpcy50aWxlSGVpZ2h0LTQsIDE0KTtcblxuICAgIGZvciAodmFyIGMgaW4gdGhpcy50aWxlQXJyYXkpIHtcbiAgICAgICAgZm9yICh2YXIgciBpbiB0aGlzLnRpbGVBcnJheVtjXSkge1xuICAgICAgICAgICAgaWYodGhpcy50aWxlQXJyYXlbY11bcl0udGlsZU93bmVyID09IHRoaXMucGxheWVyLmlkICYmIHRoaXMudGlsZUFycmF5W2NdW3JdLnRpbGVUeXBlID09IFwid2FyZWhvdXNlXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAociA8IDUgfHwgciA+IDE1KSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh0aGlzLnRpbGVBcnJheVtjXVtyXS54Kyh0aGlzLnRpbGVBcnJheVtjXVtyXS53aWR0aC8yKSwgdGhpcy50aWxlQXJyYXlbY11bcl0ueSsodGhpcy50aWxlQXJyYXlbY11bcl0ud2lkdGgvMiksIGdyYXBoaWNzLmdlbmVyYXRlVGV4dHVyZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYy5hbmdsZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0MCktMjA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMuYW5jaG9yLnNldFRvKDAuNSk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy50aWxlQXJyYXlbY11bcl0udGlsZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlbmVyZ3lcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweGZjZTMxNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJveHlnZW5cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweDAwYjFmMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyb2NrZXRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweGU4MmEyYztcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtZXRhbFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4ZmZmZmZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJpb21hc3NcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweDhhYzM0MjtcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJiaW9kcm9uZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4OWYzYTliO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInVyYW5pdW1cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweGYzNjUyMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQoY3VycmVudFJlYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdyYXBoaWNzLmRlc3Ryb3koKTtcbiAgfVxuICBcbiAgY3JlYXRlVGlsZUFycmF5KGNvbHVtbnMsIHJvd3MsIHBvaW50KSB7XG4gICAgdGhpcy50aWxlRGV0YWlsID0gdGhpcy5nYW1lLmNhY2hlLmdldEpTT04oJ3RpbGVEZXRhaWwnKTtcblxuICAgIHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMgPSB7eDowLCB5OjB9O1xuXG4gICAgdmFyIHgsIHk7XG4gICAgXG4gICAgdGhpcy5tYXJnaW5Cb3R0b20gPSB0aGlzLm1hcmdpblRvcCA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmhlaWdodC8xNy40NzU7XG4gICAgdGhpcy5tYXJnaW5MZWZ0ID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGgvMjQ7XG4gICAgdGhpcy5tYXJnaW5SaWdodCA9ICB0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aC8yNi4zMTU4O1xuICAgIHRoaXMudGlsZVdpZHRoID0gdGhpcy50aWxlSGVpZ2h0ID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGgvMzk7XG4gICAgdGhpcy5wYWRkaW5nID0gKHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoIC0gKHRoaXMubWFyZ2luTGVmdCArIHRoaXMubWFyZ2luUmlnaHQpIC0gKHRoaXMudGlsZVdpZHRoICogMzEpKS8zMDtcbiAgICAgICAgXG4gICAgLy90aGlzLnRpbGVXaWR0aCA9IDI1Oy8vKHRoaXMuYmFja2dyb3VuZFdpZHRoIC0gKCh0aGlzLm1hcmdpbkxlZnQgKyB0aGlzLm1hcmdpblJpZ2h0KSArICh0aGlzLnBhZGRpbmcgKiAoY29sdW1ucyAtIDEpKSkpIC8gY29sdW1ucztcbiAgICAvL3RoaXMudGlsZUhlaWdodCA9IDI1Oy8vKHRoaXMuYmFja2dyb3VuZEhlaWdodCAtICgodGhpcy5tYXJnaW5Ub3AgKyB0aGlzLm1hcmdpbkJvdHRvbSkgKyAodGhpcy5wYWRkaW5nICogKHJvd3MgLSAxKSkpKSAvIHJvd3M7XG4gICAgICAgIFxuICAgIHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMueCA9IHBvaW50LnggKyB0aGlzLm1hcmdpbkxlZnQ7XG4gICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy55ID0gcG9pbnQueSArIHRoaXMubWFyZ2luVG9wO1xuICAgIFxuICAgIHZhciBncmFwaGljcyA9IHRoaXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XG4gICAgLy9ncmFwaGljcy5saW5lU3R5bGUoNCwgMHhmZmQ5MDAsIDEpO1xuICAgIGdyYXBoaWNzLmJlZ2luRmlsbCgweGZmZmZmZiwgMSk7XG4gICAgZ3JhcGhpY3MuZHJhd1JlY3QoMTAwLCAxMDAsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQpO1xuICAgIFxuICAgIGZvciAodmFyIGNvbHVtbiA9IDA7IGNvbHVtbiA8IGNvbHVtbnM7IGNvbHVtbisrKSB7XG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHJvd3M7IHJvdysrKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHggPSB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnggKyAodGhpcy50aWxlV2lkdGggKiBjb2x1bW4pICsgKHRoaXMucGFkZGluZyAqIGNvbHVtbiAtIDEpO1xuICAgICAgICAgICAgeSA9IHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMueSArICh0aGlzLnRpbGVIZWlnaHQgKiByb3cpICsgKHRoaXMucGFkZGluZyAqIHJvdyAtIDEpO1xuICAgICAgICAgICAgLy9ncmFwaGljcy5nZW5lcmF0ZVRleHR1cmUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaWxlID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoeCwgeSwgZ3JhcGhpY3MuZ2VuZXJhdGVUZXh0dXJlKCkpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKGN1cnJlbnRUaWxlKTtcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlLmFscGhhID0gMDsgLy8gMC4yNTtcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBjdXJyZW50VGlsZS5ldmVudHMub25JbnB1dERvd24uYWRkKHRoaXMudGlsZUNsaWNrZWQsIHRoaXMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMudGlsZUFycmF5W2NvbHVtbl0gPT0gJ3VuZGVmaW5lZCcpIFxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NvbHVtbl0gPSBbXTtcbiAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjb2x1bW5dW3Jvd10gPSBjdXJyZW50VGlsZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBncmFwaGljcy5kZXN0cm95KCk7XG4gICAgXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMudGlsZURldGFpbCkge1xuICAgICAgICBpZiAoIXRoaXMudGlsZURldGFpbC5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcbiAgICAgICAgXG4gICAgICAgIHZhciBvYmogPSB0aGlzLnRpbGVEZXRhaWxba2V5XTtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgIC8vIHNraXAgbG9vcCBpZiB0aGUgcHJvcGVydHkgaXMgZnJvbSBwcm90b3R5cGVcbiAgICAgICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgbG9jYXRpb25Db3VudCA9IG9ialtwcm9wXS5sb2NhdGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yKCB2YXIgaSA9IDA7IGkgPCBsb2NhdGlvbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgY29vcmRzID0gb2JqW3Byb3BdLmxvY2F0aW9uc1tpXS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgeCA9IGNvb3Jkc1swXTtcbiAgICAgICAgICAgICAgICB5ID0gY29vcmRzWzFdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVEYW1hZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZU9jY3VwaWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZVggPSB4O1xuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVZID0geTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlVHlwZSA9IG9ialtwcm9wXS50eXBlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVBcnJheVt4XVt5XSAhPSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZU5hbWUgPSBvYmpbcHJvcF0ubmFtZTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHggKyBcIjpcIiArIHkgKyBcIiBub3QgZm91bmQhXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYoeCA8IDkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVPd25lciA9IDE7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeD4yMClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZU93bmVyID0gMjtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcF0ucHJvcGVydGllcyAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlUHJvcGVydGllcyA9IG9ialtwcm9wXS5wcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBpeGVsc1RvVGlsZSh4LCB5KSB7XG4gICAgdmFyIHhUaWxlID0gMDtcbiAgICB2YXIgeVRpbGUgPSAwO1xuICAgIFxuICAgIGZvciAodmFyIGNvbCBpbiB0aGlzLnRpbGVBcnJheSkge1xuICAgICAgICBmb3IgKHZhciByb3cgaW4gdGhpcy50aWxlQXJyYXlbY29sXSkge1xuICAgICAgICAgICAgdmFyIG9iaiA9IHRoaXMudGlsZUFycmF5W2NvbF1bcm93XTtcbiAgICAgICAgICAgIGlmKHggPiBvYmoueCAmJiB4IDwgb2JqLnggKyBvYmoud2lkdGgpXG4gICAgICAgICAgICAgICAgeFRpbGUgPSBwYXJzZUludChjb2wpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoeSA+IG9iai55ICYmIHkgPCBvYmoueSArIG9iai5oZWlnaHQpXG4gICAgICAgICAgICAgICAgeVRpbGUgPSBwYXJzZUludChyb3cpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7eDp4VGlsZSwgeTp5VGlsZX07XG4gIH1cbiAgXG4gIHRpbGVUb1BpeGVscyh4LCB5KSB7XG4gICAgdmFyIHRpbGVPYmogPSB0aGlzLnRpbGVBcnJheVt4XVt5XTtcbiAgICByZXR1cm4ge3g6dGlsZU9iai54ICsgdGlsZU9iai53aWR0aC8yLCB5OnRpbGVPYmoueSArIHRpbGVPYmouaGVpZ2h0LzJ9O1xuICB9XG4gIFxuICB0aWxlQ2xpY2tlZChvYmopIHtcbiAgICAgIHRoaXMuaGlkZVRpbGVzKCk7XG4gICAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICd0aWxlQ2xpY2tlZCcsIHg6cGFyc2VJbnQob2JqLnRpbGVYKSwgeTpwYXJzZUludChvYmoudGlsZVkpfSk7XG4gICAgLy8gICB0aGlzLmFkZE9yZG5hbmNlKHtwb2ludDp7eDpvYmoudGlsZVgsIHk6b2JqLnRpbGVZfSwgdHlwZTonc2hpZWxkJywgdXVpZDpNYXRoLnJhbmRvbSgpfSk7XG5cbiAgICAgIHJldHVybjtcbiAgfVxuICBcbiAgc2hvd1RpbGVzKGNvb3Jkc0FycmF5LCBjb2xvcikge1xuICAgICAgY29uc29sZS5sb2coXCJTSE9XIFRJTEVTISFcIik7XG4gICAgICBjb25zb2xlLmxvZyhjb29yZHNBcnJheSk7XG4gICAgLy8gaWYodHlwZW9mKGNvb3Jkc0FycmF5LnBvaW50QXJyYXkpICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vICAgICBjb29yZHNBcnJheSA9IGNvb3Jkc0FycmF5LnBvaW50QXJyYXk7XG4gICAgLy8gfVxuICAgIGZvciAodmFyIGkgaW4gY29vcmRzQXJyYXkpIHtcbiAgICAgICAgdGhpcy50aWxlQXJyYXlbY29vcmRzQXJyYXlbaV0ueF1bY29vcmRzQXJyYXlbaV0ueV0uYWxwaGEgPSAwLjU7XG4gICAgICAgIGlmKGNvbG9yKSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjb29yZHNBcnJheVtpXS54XVtjb29yZHNBcnJheVtpXS55XS50aW50ID0gY29sb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjb29yZHNBcnJheVtpXS54XVtjb29yZHNBcnJheVtpXS55XS50aW50ID0gMHhmZmQ5MDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93blRpbGVzLnB1c2goe3g6Y29vcmRzQXJyYXlbaV0ueCx5OmNvb3Jkc0FycmF5W2ldLnl9KTtcbiAgICB9XG4gIH1cbiAgXG4gIGhpZGVUaWxlcyh0aWxlQXJyYXkpIHtcbiAgICBpZighdGlsZUFycmF5KSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5zaG93blRpbGVzKSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt0aGlzLnNob3duVGlsZXNbaV0ueF1bdGhpcy5zaG93blRpbGVzW2ldLnldLmFscGhhID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNob3duVGlsZXMgPSBbXTtcbiAgICB9XG4gIH1cblxuICBkYW1hZ2VUaWxlKGRhdGEpIHtcbiAgXG4gICAgdmFyIGN1cnJlbnRUaWxlID0gdGhpcy50aWxlQXJyYXlbZGF0YS54XVtkYXRhLnldO1xuICAgIFxuICAgIGN1cnJlbnRUaWxlLnRpbnQgPSAwWDMzMzMzMztcbiAgICBjdXJyZW50VGlsZS5hbHBoYSA9IDAuODtcbiAgICBjdXJyZW50VGlsZS50aWxlRGFtYWdlZCA9IHRydWU7XG4gICAgXG4gICAgdmFyIHRlc3QgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZShjdXJyZW50VGlsZS54LCBjdXJyZW50VGlsZS55ICsoY3VycmVudFRpbGUuaGVpZ2h0LzIpLCAnYm9vbScpO1xuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFkZCh0ZXN0KTtcbiAgICB0ZXN0LmFuZ2xlID0gMjcwO1xuICAgIHRlc3QuYW5jaG9yLnNldCgwLjUsMC43KTtcbiAgICB0ZXN0LmFuaW1hdGlvbnMuYWRkKCdib29tJyk7XG4gICAgdGVzdC5hbmltYXRpb25zLnBsYXkoJ2Jvb20nLCAyMCwgZmFsc2UsIHRydWUpO1xuICAgIFxuICB9XG4gIFxuICBzdGFydEdhbWUoKSB7XG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XG4gIH1cblxuICBcbiAgc2VydmVyRnVsbCgpIHtcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ3NlcnZlckZ1bGwnKTtcbiAgfSAgIFxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXB0aWtvbjtcbiIsImltcG9ydCBSZXNvdXJjZXMgZnJvbSAnLi4vcHJlZmFicy9yZXNvdXJjZXMnO1xuaW1wb3J0IFBlcnNvbm5lbCBmcm9tICcuLi9wcmVmYWJzL3BlcnNvbm5lbCc7XG5pbXBvcnQgT3JkbmFuY2UgZnJvbSAnLi4vcHJlZmFicy9vcmRuYW5jZSc7XG5pbXBvcnQgQ2xvbmUgZnJvbSAnLi4vcHJlZmFicy9jbG9uZSc7IC8vIFRoaXMgd2lsbCBiZSBpbmNvcnBvcmF0ZWQgaW4gcGVyc29ubmVsXG5cbmNsYXNzIFRlYW0ge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoZ2FtZSkgeyBcbiAgICB0aGlzLnJlYyA9IG5ldyBSZXNvdXJjZXMoKTtcbiAgICB0aGlzLnJlY0VudW0gPSB0aGlzLnJlYy5yZXNvdXJjZUVudW07XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICBcbiAgICB0aGlzLnBlcnNvbm5lbCA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzID0gW107XG4gIH1cbiAgXG4gIHJlZnJlc2goKSB7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnBlcnNvbm5lbCkge1xuICAgICAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy55XS50aWxlT2NjdXBpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgLy9SZXNvdXJjZSBJbnRlcmZhY2VcbiAgZ2V0UmVjQ291bnQodHlwZSkge1xuICAgIHJldHVybiB0aGlzLnJlYy5nZXRDb3VudCh0eXBlKTtcbiAgfVxuICBcbiAgY2hlY2tSZWModHlwZSwgY291bnQpIHtcbiAgICBpZiAodGhpcy5nZXRSZWNDb3VudCh0eXBlKSA+PSBjb3VudCkgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIGV4Y2hhbmdlUmVjKGNvc3RUeXBlLCBjb3N0Q291bnQsIHlpZWxkVHlwZSwgeWllbGRDb3VudCkge1xuICB9XG4gIFxuICBhZGRSZWModHlwZSwgY291bnQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWMuYWRkKHR5cGUsIGNvdW50KTtcbiAgfVxuICBcbiAgcmVtb3ZlUmVjKHR5cGUsIGNvdW50KSB7XG4gICAgcmV0dXJuIHRoaXMucmVjLnJlbW92ZSh0eXBlLCBjb3VudCk7XG4gIH1cbiAgXG4gIGFkZENsb25lKHgsIHksIHByb3BzKSB7XG4gICAgdmFyIHBvaW50ID0gdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVUb1BpeGVscyh4LHkpO1xuICAgIHZhciBjbG9uZSA9IG5ldyBDbG9uZSh0aGlzLmdhbWUscG9pbnQueCxwb2ludC55KTtcbiAgICBjbG9uZS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnggPSB4O1xuICAgIGNsb25lLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueSA9IHk7XG4gICAgXG4gICAgZm9yICh2YXIgaSBpbiBwcm9wcykge1xuICAgICAgICBjbG9uZVtpXSA9IHByb3BzW2ldO1xuICAgIH1cbiAgICB0aGlzLnBlcnNvbm5lbC5wdXNoKGNsb25lKTtcbiAgICB0aGlzLmdhbWUuc3RhZ2UuYWRkQ2hpbGQoY2xvbmUpO1xuICB9XG4gIFxuICBnZXRDbG9uZShjb29yZCkge1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcbiAgICAgICAgaWYodGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy54ID09IGNvb3JkLnggJiYgdGhpcy5wZXJzb25uZWxbaV0uY3VycmVudFRpbGVDb29yZGluYXRlcy55ID09IGNvb3JkLnkpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGVyc29ubmVsW2ldO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBraWxsQ2xvbmUoY29vcmQpIHtcbiAgICB2YXIgY2xvbmUgPSB0aGlzLmdldENsb25lKGNvb3JkKTtcbiAgICB0aGlzLmdhbWUuc3RhZ2UucmVtb3ZlQ2hpbGQoY2xvbmUpO1xuICAgIFxuICAgIHZhciBpbmRleCA9IHRoaXMucGVyc29ubmVsLmluZGV4T2YoY2xvbmUpO1xuICAgIHRoaXMucGVyc29ubmVsLnNwbGljZShpbmRleCwxKTtcbiAgICBcbiAgICBjbG9uZS5yZW1vdmUoKTtcbiAgfVxuICAgIFxuICBvZmZlckxlZ2FsQ2xvbmVzKCkge1xuICAgIC8vIE9mZmVyIGNsb25lcyB0aGF0IGhhdmUgbGVnYWwgbW92ZXNcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcbiAgICAgICAgdmFyIG1vdmVzID0gdGhpcy5wZXJzb25uZWxbaV0uZ2V0TGVnYWxNb3ZlcygpO1xuXG4gICAgICAgIGlmKG1vdmVzICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5wZXJzb25uZWxbaV0uaGlnaGxpZ2h0T24oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgb2ZmZXJHdW5uZXJzKCkge1xuICAgIC8vIE9mZmVyIGd1bm5lciBcbiAgICB2YXIgZ3VubmVyRm91bmQgPSBmYWxzZTtcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcbiAgICAgICAgaWYodGhpcy5wZXJzb25uZWxbaV0uaXNHdW5uZXIpIHtcbiAgICAgICAgICAgIGd1bm5lckZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vdGhpcy5wZXJzb25uZWxbaV0uaGlnaGxpZ2h0T24oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ3VubmVyRm91bmQ7XG4gIH1cbiAgXG4gIHNlbGVjdEd1bm5lcihjb29yZHMpIHtcbiAgICB2YXIgY2xvbmUgPSB0aGlzLmdldENsb25lKGNvb3Jkcyk7XG4gICAgaWYoIWNsb25lKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYoIWNsb25lLmlzR3VubmVyKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIFxuICAgIHZhciBleGlzdGluZ0d1bm5lciA9IHRoaXMuc2VsZWN0ZWRHdW5uZXJzLmluZGV4T2YoY2xvbmUpO1xuICAgIGlmKGV4aXN0aW5nR3VubmVyID49IDApe1xuICAgICAgICBjbG9uZS5oaWdobGlnaHRPZmYoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMuc3BsaWNlKGV4aXN0aW5nR3VubmVyLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjbG9uZS5oaWdobGlnaHRPbigpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycy5wdXNoKGNsb25lKTtcbiAgICB9XG4gIH1cbiAgXG4gIGNsZWFyR3VubmVycygpIHtcbiAgICBmb3IgKHZhciBpIGluIHRoaXMuc2VsZWN0ZWRHdW5uZXJzKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzW2ldLmhpZ2hsaWdodE9mZigpO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkR3VubmVycyA9IFtdO1xuICB9XG4gIFxuICBzZWxlY3RDbG9uZUZvck1vdmUoY29vcmRzKSB7ICAgIFxuICBcbiAgICB2YXIgY2xvbmUgPSB0aGlzLmdldENsb25lKGNvb3Jkcyk7XG4gICAgaWYoIWNsb25lKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcbiAgICAgICAgdGhpcy5wZXJzb25uZWxbaV0uaGlnaGxpZ2h0T2ZmKCk7XG4gICAgfVxuICAgIHRoaXMubGVnYWxUaWxlcyA9IGNsb25lLmdldExlZ2FsTW92ZXMoKTtcbiAgICB0aGlzLnNlbGVjdGVkQ2xvbmUgPSBjbG9uZTtcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24uc2hvd1RpbGVzKHRoaXMubGVnYWxUaWxlcyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgXG4gIG1vdmVTZWxlY3RlZENsb25lKGNvb3Jkcykge1xuICAgIGZvcih2YXIgaSBpbiB0aGlzLmxlZ2FsVGlsZXMpIHtcbiAgICAgICAgaWYodGhpcy5sZWdhbFRpbGVzW2ldLnRpbGVYID09IGNvb3Jkcy54ICYmIHRoaXMubGVnYWxUaWxlc1tpXS50aWxlWSA9PSBjb29yZHMueSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENsb25lLm1vdmUoY29vcmRzKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNlbGVjdGVkQ2xvbmU7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5sZWdhbFRpbGVzO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW07IiwiY2xhc3MgT3JkbmFuY2Uge1xuXG4gICAgY29uc3RydWN0b3IodHlwZSwgeCwgeSwgdXVpZCkge1xuICAgICAgICB0aGlzLnR5cGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgICAgICBTSElFTEQ6IDAsXG4gICAgICAgICAgICBCSU9EUk9ORTogMSxcbiAgICAgICAgICAgIFNBVEVMTElURTogMixcbiAgICAgICAgICAgIFJPQ0tFVDogM1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZUVudW1bdHlwZS50b1VwcGVyQ2FzZSgpXTtcbiAgICAgICAgXG4gICAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzLk9yZG5hbmNlID0gT3JkbmFuY2U7XG4iLCJjbGFzcyBQZXJzb25uZWwge1xuXG4gICAgY29uc3RydWN0b3IodHlwZSwgeCwgeSwgdXVpZCkge1xuICAgICAgICB0aGlzLnR5cGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgICAgICBDTE9ORTogMCxcbiAgICAgICAgICAgIEJJT0RST05FOiAxXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZDtcbiAgICAgICAgdGhpcy51bmRlckVzcGlvbmFnZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzR3VubmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZUVudW1bdHlwZS50b1VwcGVyQ2FzZSgpXTtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnYmlvZHJvbmUnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY2xvbmUnOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVFbnVtW3R5cGVdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG1vdmUoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMuUGVyc29ubmVsID0gUGVyc29ubmVsO1xuIiwidmFyIFBlcnNvbm5lbCA9IHJlcXVpcmUoJy4vcGVyc29ubmVsJykuUGVyc29ubmVsO1xudmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9yZXNvdXJjZScpLlJlc291cmNlO1xudmFyIE9yZG5hbmNlID0gcmVxdWlyZSgnLi9vcmRuYW5jZScpLk9yZG5hbmNlO1xuXG5cbmNsYXNzIFBsYXllciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihzb2NrZXRJRCwgaWQsIHV1aWQpIHsgXG4gICAgICAgIHRoaXMuc29ja2V0SUQgPSBzb2NrZXRJRDtcbiAgICAgICAgdGhpcy5pZCA9IGlkOyAvL3BsYXllciAxIG9yIHBsYXllciAyOyB0aGlzIHdpbGwgZGV0ZXJtaW5lIHRoZSBzaWRlIG9mIHRoZSBib2FyZCBhdCBjbGllbnQgc3RhcnQuXG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgICAgIHRoaXMucGVyc29ubmVsQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5ID0gW107XG4gICAgICAgIHRoaXMub3JkbmFuY2VBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLnJlYWR5VG9TdGFydCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXJ0aW5nQ2xvbmVDb3VudCA9IDU7XG4gICAgICAgIHRoaXMuYXJtc0FycmF5ID0gW107XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudExlZ2FsUGllY2VzID0gW107XG5cbiAgICAgICAgdGhpcy5pbml0UmVzb3VyY2VzKCk7XG4gICAgfVxuXG4gICAgY2xlYXJRdWV1ZXMoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlcyA9IFtdO1xuICAgIH1cbiAgICAgICAgXG4gICAgYWRkUGVyc29ubmVsKHR5cGUsIHgsIHksIHV1aWQpIHtcbiAgICAgICAgaWYodHlwZSA9PSBcImNsb25lXCIgJiYgdGhpcy5nZXRQZXJzb25uZWwodHlwZSkubGVuZ3RoIDwgMTApIHtcbiAgICAgICAgICAgIHZhciBwZXJzb25uZWwgPSBuZXcgUGVyc29ubmVsKCdjbG9uZScsIHgsIHksIHV1aWQpO1xuICAgICAgICAgICAgdGhpcy5wZXJzb25uZWxBcnJheS5wdXNoKHBlcnNvbm5lbCk7XG4gICAgICAgICAgICByZXR1cm4gcGVyc29ubmVsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZW1vdmVQZXJzb25uZWwocGVyc29ubmVsLCBwdXJnZUFsbCkge1xuICAgICAgICBpZiAocHVyZ2VBbGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMucGVyc29ubmVsQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFBlcnNvbm5lbCh0eXBlKSB7XG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucGVyc29ubmVsQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5wZXJzb25uZWxBcnJheVtpXS50eXBlID09PSB0aGlzLnBlcnNvbm5lbEFycmF5W2ldLnR5cGVFbnVtW3R5cGUudG9VcHBlckNhc2UoKV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMucGVyc29ubmVsQXJyYXlbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcbiAgICB9XG5cbiAgICBnZXRQZXJzb25uZWxCeVVVSUQodXVpZCkge1xuICAgICAgICB2YXIgcGVyc29ubmVsID0gdGhpcy5nZXRQZXJzb25uZWwoKTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBwZXJzb25uZWwpIHtcbiAgICAgICAgICAgIGlmIChwZXJzb25uZWxbaV0udXVpZCA9PSB1dWlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlcnNvbm5lbFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0UGVyc29ubmVsQnlQb2ludChwb2ludCkge1xuICAgICAgICB2YXIgcGVyc29ubmVscyA9IHRoaXMuZ2V0UGVyc29ubmVsKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGVyc29ubmVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHBlcnNvbm5lbHNbaV0ueCA9PSBwb2ludC54ICYmIHBlcnNvbm5lbHNbaV0ueSA9PSBwb2ludC55KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlcnNvbm5lbHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNoZWNrUGVyc29ubmVsTW92ZShwZXJzb25uZWwsIHBvaW50KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50TGVnYWxQaWVjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwZXJzb25uZWwueCA9PSB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlc1tpXS5vcmlnaW4ueCAmJiBwZXJzb25uZWwueSA9PSB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlc1tpXS5vcmlnaW4ueSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcG9pbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5jdXJyZW50TGVnYWxQaWVjZXNbaV0ubW92ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZWdhbFBpZWNlc1tpXS5tb3Zlc1tqXS54ID09IHBvaW50LnggJiYgdGhpcy5jdXJyZW50TGVnYWxQaWVjZXNbaV0ubW92ZXNbal0ueSA9PSBwb2ludC55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBhZGRPcmRuYW5jZSh0eXBlLCBwb2ludCwgdXVpZCkge1xuICAgICAgICB2YXIgb3JkID0gbmV3IE9yZG5hbmNlKHR5cGUsIHBvaW50LngsIHBvaW50LnksIHV1aWQpO1xuICAgICAgICB0aGlzLm9yZG5hbmNlQXJyYXkucHVzaChvcmQpO1xuICAgICAgICByZXR1cm4gb3JkO1xuICAgIH1cblxuICAgIHB1cmdlTGVnYWxQaWVjZXMocGVyc29ubmVsLCBwdXJnZUFsbE1hdGNoaW5nVHlwZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwZXJzb25uZWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlcyA9IFtdO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gdGhpcy5jdXJyZW50TGVnYWxQaWVjZXMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICBpLS0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZWdhbFBpZWNlc1tpXS50eXBlID09PSBwZXJzb25uZWwudHlwZSAmJiBwdXJnZUFsbE1hdGNoaW5nVHlwZXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlcy5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEd1bm5lcnMoKSB7XG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xuICAgICAgICB2YXIgY2xvbmVzID0gdGhpcy5nZXRQZXJzb25uZWwoJ2Nsb25lJyk7XG4gICAgICAgIGZvciAodmFyIGkgaW4gY2xvbmVzKSB7XG4gICAgICAgICAgICBpZiAoY2xvbmVzW2ldLmlzR3VubmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaChjbG9uZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcbiAgICB9XG5cbiAgICBnZXRTZWxlY3RlZEd1bm5lcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkR3VubmVycztcbiAgICB9XG5cbiAgICBjbGVhclNlbGVjdGVkR3VubmVycygpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMgPSBbXTtcbiAgICB9XG5cbiAgICB0b2dnbGVHdW5uZXJTZWxlY3Rpb24oZ3VubmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkR3VubmVycy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMucHVzaChndW5uZXIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZEd1bm5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShndW5uZXIpID09PSBKU09OLnN0cmluZ2lmeSh0aGlzLnNlbGVjdGVkR3VubmVyc1tpXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycy5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMucHVzaChndW5uZXIpO1xuICAgIH1cblxuICAgIGdldE9yZG5hbmNlKHR5cGUpIHtcbiAgICAgICAgdmFyIHJldHVybkFycmF5ID0gW107XG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLm9yZG5hbmNlQXJyYXkpIHtcbiAgICAgICAgICAgIGlmKHR5cGUgPT09IG51bGwgfHwgdGhpcy5vcmRuYW5jZUFycmF5W2ldLnR5cGUgPT09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLm9yZG5hbmNlQXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcbiAgICB9XG5cbiAgICByZW1vdmUodGFyZ2V0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XG4gICAgfVxuXG4gICAgZ2V0T3JkbmFuY2VCeVBvaW50KHBvaW50KSB7XG4gICAgICAgIHZhciBvcmRuYW5jZXMgPSB0aGlzLmdldE9yZG5hbmNlKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3JkbmFuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAob3JkbmFuY2VzW2ldLnggPT0gcG9pbnQueCAmJiBvcmRuYW5jZXNbaV0ueSA9PSBwb2ludC55KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yZG5hbmNlc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbW92ZU9yZG5hbmNlKGNvdW50KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcmRuYW5jZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcmRuYW5jZUFycmF5W2ldLnR5cGUgPT0gXCJiaW9kcm9uZVwiIHx8IHRoaXMub3JkbmFuY2VBcnJheVtpXS50eXBlID09IFwicm9ja2V0XCIgfHwgdGhpcy5vcmRuYW5jZUFycmF5W2ldLnR5cGUgPT0gXCJudWtlXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkbmFuY2VBcnJheVtpXS54ICs9IGNvdW50O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkbmFuY2VBcnJheVtpXS54IC09IGNvdW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vcmRuYW5jZUFycmF5O1xuICAgIH1cblxuICAgIGluaXRSZXNvdXJjZXMoKSB7XG4gICAgICAgIHZhciByZWNBcnJheSA9IFtcbiAgICAgICAgICAgICdlbmVyZ3kxJywgXG4gICAgICAgICAgICAnZW5lcmd5MicsXG4gICAgICAgICAgICAnb3h5Z2VuJyxcbiAgICAgICAgICAgICdtZXRhbCcsXG4gICAgICAgICAgICAnYmlvZHJvbmUnLFxuICAgICAgICAgICAgJ3JvY2tldCcsXG4gICAgICAgICAgICAndXJhbml1bScsXG4gICAgICAgICAgICAnYmlvbWFzcycsXG4gICAgICAgICAgICAnbnVrZSdcbiAgICAgICAgICAgIF07XG4gICAgICAgIHZhciByZWMgPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBpIGluIHJlY0FycmF5KSB7XG4gICAgICAgICAgICByZWMgPSBuZXcgUmVzb3VyY2UocmVjQXJyYXlbaV0pO1xuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5W3JlY0FycmF5W2ldXSA9IFtdO1xuICAgICAgICAgICAgaWYgKHJlY0FycmF5W2ldICE9IFwibnVrZVwiKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY291bnQgPSAwOyBjb3VudCA8IDEwOyBjb3VudCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA8IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2VBcnJheVtyZWNBcnJheVtpXV0ucHVzaChyZWMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5W3JlY0FycmF5W2ldXS5wdXNoKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UmVzb3VyY2VDb3VudCh0eXBlKSB7XG4gICAgICAgIHZhciBmb3VuZFJlc291cmNlcyA9IDA7XG4gICAgICAgIHZhciBjdXJyZW50UmVzb3VyY2VTbG90ID0gOTtcblxuICAgICAgICBpZiAodHlwZSA9PSBcImVuZXJneVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSZXNvdXJjZUNvdW50KCdlbmVyZ3kxJykgKyB0aGlzLmdldFJlc291cmNlQ291bnQoJ2VuZXJneTInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09IFwibnVrZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChjdXJyZW50UmVzb3VyY2VTbG90ID49IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VTbG90LS07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXVtjdXJyZW50UmVzb3VyY2VTbG90XS5kYW1hZ2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kUmVzb3VyY2VzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3VuZFJlc291cmNlcysrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3VuZFJlc291cmNlcztcbiAgICB9XG5cbiAgICAvLyBDaGVja1Jlc291cmNlIGRlZmF1bHRzIHRvIGFzc3VtZSB5b3UgYXJlIGNoZWNraW5nIHRvIHNwZW5kIGEgcmVzb3VyY2UuIFNldCBcImFjY2VwdFwiIHRvIHRydWUgaWYgeW91IGFyZSBjaGVja2luZyB0byByZWNlaXZlIGEgcmVzb3VyY2VcbiAgICBjaGVja1Jlc291cmNlKHR5cGUsIGNvdW50LCBhY2NlcHQpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRSZXNvdXJjZVNsb3QgPSA5O1xuICAgICAgICB2YXIgZm91bmRSZXNvdXJjZXMgPSAwO1xuICAgICAgICB2YXIgcmVzb3VyY2VTbG90cyA9IDA7XG5cbiAgICAgICAgaWYgKHR5cGUgPT0gXCJudWtlXCIpIHtcbiAgICAgICAgICAgIGlmIChhY2NlcHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXS5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZih0eXBlID09IFwiZW5lcmd5XCIpIHtcbiAgICAgICAgICAgIHZhciBlMSA9IHRoaXMuY2hlY2tSZXNvdXJjZShcImVuZXJneTFcIiwgY291bnQsIGFjY2VwdCk7XG4gICAgICAgICAgICB2YXIgZTIgPSB0aGlzLmNoZWNrUmVzb3VyY2UoXCJlbmVyZ3kyXCIsIGNvdW50LCBhY2NlcHQpO1xuXG4gICAgICAgICAgICBpZihlMSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZTIgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZTI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChjdXJyZW50UmVzb3VyY2VTbG90ID49IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWNjZXB0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlU2xvdHMrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc291cmNlU2xvdHMgPT0gY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRSZXNvdXJjZVNsb3QtLTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdLmRhbWFnZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZihhY2NlcHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvdW5kUmVzb3VyY2VzKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGFjY2VwdCAhPT0gZmFsc2UgJiYgZm91bmRSZXNvdXJjZXMgPT09IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VTbG90LS07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHNwZW5kUmVzb3VyY2UodHlwZSwgY291bnQpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRSZXNvdXJjZVNsb3QgPSA5O1xuICAgICAgICB2YXIgb3JpZ2luYWxDb3VudCA9IGNvdW50O1xuXG4gICAgICAgIGlmICh0eXBlID09IFwiZW5lcmd5XCIpIHtcbiAgICAgICAgICAgIHZhciBzdWNjZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB3aGlsZSAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuc3BlbmRSZXNvdXJjZShcImVuZXJneTFcIiwgMSk7XG4gICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuc3BlbmRSZXNvdXJjZShcImVuZXJneTJcIiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbENvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnRSZXNvdXJjZVNsb3QgPj0gMCAmJiBjb3VudCA+IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VTbG90LS07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXVtjdXJyZW50UmVzb3VyY2VTbG90XS5kYW1hZ2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKFwiVHJpZWQgdG8gc3BlbmQgcmVzb3VyY2VzIHlvdSBkb24ndCBoYXZlIVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXVtjdXJyZW50UmVzb3VyY2VTbG90XSA9IG51bGw7XG4gICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcmlnaW5hbENvdW50O1xuICAgIH1cblxuICAgIGFjY2VwdFJlc291cmNlKHR5cGUsIGNvdW50KSB7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG51bGw7XG4gICAgICAgIHZhciBjdXJyZW50UmVzb3VyY2VTbG90ID0gOTtcbiAgICAgICAgdmFyIHNlYXJjaGluZyA9IHRydWU7XG4gICAgICAgIHZhciBvcmlnaW5hbENvdW50ID0gY291bnQ7XG5cbiAgICAgICAgaWYgKHR5cGUgPT0gXCJudWtlXCIpIHtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXS5wdXNoKG5ldyBSZXNvdXJjZSh0eXBlKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09IFwiZW5lcmd5XCIpIHtcbiAgICAgICAgICAgIHZhciBzdWNjZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB3aGlsZSAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuYWNjZXB0UmVzb3VyY2UoXCJlbmVyZ3kxXCIsIDEpO1xuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLmFjY2VwdFJlc291cmNlKFwiZW5lcmd5MlwiLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsQ291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgaWYgKHNlYXJjaGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vIHBlZWsgYXQgbmV4dCByZXNvdXJjZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm5vIHJvb20gZm9yIHRoaXMgcmVzb3VyY2UhXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVzb3VyY2VTbG90ID09PSAwIHx8IHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXVtjdXJyZW50UmVzb3VyY2VTbG90IC0gMV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VTbG90LS07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRSZXNvdXJjZVNsb3QgKyAxID4gdGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxDb3VudCAtIGNvdW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvdXJjZSA9IG5ldyBSZXNvdXJjZSh0eXBlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gPSByZXNvdXJjZTtcbiAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgIGlmKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbENvdW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VTbG90Kys7XG4gICAgICAgICB9XG4gICAgICAgICAgICBpZihjdXJyZW50UmVzb3VyY2VTbG90IDwgMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJPdXQgb2YgYm91bmRzLiBObyBlbXB0eSByZXNvdXJ1Y2Ugc2xvdHMgZm91bmQuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMuUGxheWVyID0gUGxheWVyO1xuIiwiY2xhc3MgUmVzb3VyY2Uge1xuXG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICBcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzLlJlc291cmNlID0gUmVzb3VyY2U7XG4iLCIvLyAgVGhpcyBpcyB0aGUgc2VydmVyLXNpZGUgcnVsZSBlbmdpbmUuIEl0IHByb2Nlc3NlcyB0aGUgcnVsZXMgYW5kIHN0YXRlcyBhbmQgdGhlbiBlbWl0cyBkaXJlY3Rpb25zIGJhY2sgdG8gdGhlIGNsaWVudC5cblxudmFyIFBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyJykuUGxheWVyO1xudmFyIHV1aWQgPSByZXF1aXJlKCd1dWlkL3Y0Jyk7XG5cbmNsYXNzIFNlcHRpa29uIHtcbiAgICBcblx0Y29uc3RydWN0b3IoaW8pIHtcbiAgICAgICAgdGhpcy5pbyA9IGlvO1xuICAgICAgICB0aGlzLmxhc3RQbGF5ZXJJRCA9IDA7XG4gICAgICAgIHRoaXMucGxheWVyc0FycmF5ID0gW107XG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gMDtcbiAgICAgICAgdGhpcy50dXJuU3RhdGUgPSAwO1xuICAgICAgICB0aGlzLnV1aWQgPSByZXF1aXJlKCd1dWlkL3Y0JykoKTtcblxuICAgICAgICB0aGlzLmFjdGl2ZVBsYXllciA9IG51bGw7XG4gICAgICAgIHRoaXMuY3VycmVudERpY2VWYWx1ZSA9IDA7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmdhbWVTdGF0ZUVudW0gPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgICAgIFNFVFVQOiAwLFxuICAgICAgICAgICAgR0FNRTogMSwgXG4gICAgICAgICAgICBQQVVTRTogMixcbiAgICAgICAgICAgIEdBTUVPVkVSOiAzLFxuICAgICAgICAgICAgU0VSVkVSRlVMTDogNFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudHVyblN0YXRlRW51bSA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICAgICAgUk9MTDogMCwgICAgLy8gTGl0ZXJhbGx5IHRoZSBhY3Qgb2Ygcm9sbGluZyB0aGUgZGllXG4gICAgICAgICAgICBNT1ZFOiAxLCAgICAvLyBTZWxlY3RpbmcgdGhlIGNsb25lIGFuZCB0aGVpciB0YXJnZXQgc3BhY2VcbiAgICAgICAgICAgIEFDVElPTjogMiwgIC8vIFRyaWdnZXIgdGlsZSAgXG4gICAgICAgICAgICBUQVJHRVRTOiAzLCAvLyBBc3NpZ24gdGFyZ2V0KHMpIChpZS4gLSBndW5uZXIsIHRpbGUsIGVzcGlvbmFnZWQgY2xvbmUpIFxuICAgICAgICAgICAgQklPRFJPTkU6IDQsLy8gTW92ZSBiaW9kcm9uZShzKVxuICAgICAgICAgICAgT1JETkFOQ0U6IDUsLy8gbW92ZSBvcmRuYW5jZSBhY2NvcmRpbmcgdG8gZGljZSByb2xsICh0aGlzIG1heSBub3QgcmVxdWlyZSBhIHN0YXRlLi4uKVxuICAgICAgICAgICAgRU5EOiA2ICAgICAgLy8gYXNzZXNzIG9yZG5hbmNlIGRhbWFnZSBhbmQgY2xvbmUvYmlvZHJvbmUga2lsbHMuIEFzc2VzcyB2aWN0b3J5IGNvbmRpdGlvbnMgKHRoaXMgbWF5IG5vdCByZXF1aXJlIGEgc3RhdGUuLi4pXG4gICAgICAgIH0pOyAgXG5cbiAgICAgICAgdGhpcy5kaXJlY3Rpb25FbnVtID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgICAgICBOT1JUSDoxLFxuICAgICAgICAgICAgRUFTVDoyLFxuICAgICAgICAgICAgU09VVEg6NCxcbiAgICAgICAgICAgIFdFU1Q6OFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRpbGVDb2x1bW5zID0gMzE7XG4gICAgICAgIHRoaXMudGlsZVJvd3MgPSAyMTtcblxuICAgICAgICB0aGlzLnRpbGVBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLmNyZWF0ZVRpbGVBcnJheSgpOyBcblxuICAgICAgICB0aGlzLnF1ZXVlZFRpbGUgPSBudWxsO1xuICAgICAgICB0aGlzLnRpbGVzUmVwYWlyZWRUaGlzVHVybiA9IDA7XG4gICAgICAgIHRoaXMuYXZhaWxhYmxlQ2xvbmVzVG9BZGQgPSAwO1xuXHR9XG5cbiAgICBjbGlja2VkKGRhdGEpIHtcbiAgICAgICAgXG4gICAgICAgIC8vIFByb2Nlc3MgdGhlIGNsaWNrIGZyb20gdGhlIGNsaWVudC4gXG4gICAgICAgIC8vIENsaWVudCBzaG91bGQgZG8gTk8gcnVsZSBwcm9jZXNzaW5nLiBQYXNzIHRoZSBjbGljayBmcm9tIGNsaWVudCB0byBzZXJ2ZXI7IHByb2Nlc3MgdGhlIGRhdGE7IHRlbGwgdGhlIGNsaWVudCB3aGF0IHRvIGRvLlxuICAgICAgICAvLyBCYXNpY2FsbHksIGNoZWNrIGdhbWUgc3RhdGUgYW5kIHR1cm4gc3RhdGUuXG4gICAgICAgIFxuICAgICAgICBzd2l0Y2ggKHRoaXMuZ2FtZVN0YXRlKSB7XG4gICAgICAgIFxuICAgICAgICAgICAgY2FzZSB0aGlzLmdhbWVTdGF0ZUVudW0uU0VUVVA6XG5cbiAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgaXMgcGxhY2luZyBuZXcgY2xvbmVzIGluIHRoZSBmaWVsZC5cbiAgICAgICAgICAgICAgICB2YXIgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXJCeVNvY2tldElEKGRhdGEuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgIHZhciBzdWNjZXNzID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZihwbGF5ZXIuZ2V0UGVyc29ubmVsKCdjbG9uZScpLmxlbmd0aCA8IHBsYXllci5zdGFydGluZ0Nsb25lQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMucGxhY2VDbG9uZShwbGF5ZXIsIGRhdGEueCwgZGF0YS55KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBvbiBwZXJzb25uZWwgY291bnQuIElmIHBlcnNvbm5lbCBpcyBhdCB0aGUgc3RhcnQgY291bnQsIHNlbmQgbW9kYWwgdG8gc3RhcnQgZ2FtZS5cbiAgICAgICAgICAgICAgICAgICAgaWYocGxheWVyLmdldFBlcnNvbm5lbCgnY2xvbmUnKS5sZW5ndGggPT0gcGxheWVyLnN0YXJ0aW5nQ2xvbmVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdyZXF1ZXN0Jywge2NhbGxiYWNrOlwibW9kYWxcIiwgZGV0YWlsczoge3R5cGU6XCJhc2tTdGFydFwifX0sIHBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIHRoaXMuZ2FtZVN0YXRlRW51bS5HQU1FOlxuXG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkUGVyc29ubmVsID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMudHVyblN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLk1PVkU6XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBsYXllciBjYW4gbW92ZSBvbmUgY2xvbmUgcGVyIHR1cm4uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RlOiBUaGUgYXJyYXkgb2YgbGVnYWwgcGVyc29ubmVsIChpbiB0aGlzLmFjdGl2ZVBsYXllcikgd2FzIHNlbnQgYnkgcm9sbERpY2UoKS5cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdoaWRlVGlsZXMnLCBkZXRhaWxzOiBudWxsfSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBlcnNvbm5lbCA9IHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbEJ5UG9pbnQoe3g6ZGF0YS54LCB5OmRhdGEueX0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRQZXJzb25uZWwgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xvbmUgd2FzIGNsaWNrZWQsIHNvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0xlZ2FsUGVyc29ubmVsID0gdGhpcy5hY3RpdmVQbGF5ZXIuY2hlY2tQZXJzb25uZWxNb3ZlKHNlbGVjdGVkUGVyc29ubmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBJZiBwZXJzb25uZWwgaXMgYSBcImJpb2Ryb25lXCIgdHlwZSBBTkQgY2xvbmVzIHJlbWFpbiBpbiB0aGUgUGxheWVyLmN1cnJlbnRsZWdhbHBpZWNlcyBhcnJheSwgZW1pdCBtb2RhbCB3YXJuaW5nIHRvIHBsYXllci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbG9uZSBtdXN0IG1vdmUgYW5kIHRpbGUgbXVzdCBiZSB0cmlnZ2VyZWQgcHJpb3IgdG8gYmlvZHJvbmUgbW92ZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTGVnYWxQZXJzb25uZWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUgPSBzZWxlY3RlZFBlcnNvbm5lbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIC0gU2hvdyBoaWdobGlnaHQgc2VsZWN0ZWQgcGVyc29ubmVsIGluIGNsaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgLSBTaG93IGxlZ2FsIG1vdmVzIG9mIHRoZSBzZWxlY3RlZCBwZXJzb25uZWwgaW4gYSBkaWZmZXJlbnQgY29sb3JcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9pbnRBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludEFycmF5ID0gdGhpcy5nZXRMZWdhbE1vdmVzKHNlbGVjdGVkUGVyc29ubmVsLCB0aGlzLmN1cnJlbnREaWNlVmFsdWUsIHt4OnNlbGVjdGVkUGVyc29ubmVsLngsIHk6c2VsZWN0ZWRQZXJzb25uZWwueX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3Nob3dUaWxlcycsIGRldGFpbHM6IHt4OmRhdGEueCwgeTpkYXRhLnl9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBTaG93IGluIGRpZmZlcmVudCBjb2xvci4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3Nob3dUaWxlcycsIGRldGFpbHM6IHBvaW50QXJyYXl9LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZVBsYXllci5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0xlZ2FsTW92ZSA9IHRoaXMuYWN0aXZlUGxheWVyLmNoZWNrUGVyc29ubmVsTW92ZSh0aGlzLmFjdGl2ZVBsYXllci5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZSx7eDpkYXRhLngsIHk6ZGF0YS55fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTGVnYWxNb3ZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUb2dnbGUgYmFjayB0byBoaWdobGlnaHRpbmcgdGhlIHBlcnNvbm5lbCB3aXRoIGxlZ2FsIG1vdmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGVtaXQgc29tZXRoaW5nIHRvIHNob3cgY2xvbmVzIHRvIGNsaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3Nob3dUaWxlcycsIGRldGFpbHM6IHt9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgdGhlIHBlcnNvbm5lbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllci5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZS5tb3ZlKGRhdGEueCwgZGF0YS55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdtb3ZlUGVyc29ubmVsJywgZGV0YWlsczoge3V1aWQ6dGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUudXVpZCwgeDpkYXRhLngsIHk6ZGF0YS55fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB7dHlwZTpcInBlcnNvbm5lbFwiLCBkZXRhaWxzOiB7dXVpZDp0aGlzLmFjdGl2ZVBsYXllci5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZS51dWlkLCB4OmRhdGEueCwgeTpkYXRhLnl9fSwgdGhpcy5nZXRQbGF5ZXJPcHBvbmVudCh0aGlzLmFjdGl2ZVBsYXllcikuc29ja2V0SUQpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGVhciBtb3ZlZCBwZXJzb25uZWwgZnJvbSB0aGUgcGxheWVyIGFycmF5LiBJZiBtb3ZlZCBwZXJzb25uZWwgd2FzIGEgY2xvbmUsIHJlbW92ZSBBTEwgY2xvbmVzIGZyb20gYXJyYXkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLnB1cmdlTGVnYWxQaWVjZXModGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUsIHRydWUpOyAvLyAybmQgYXJnOiB0cnVlIGlzIHBhc3NlZCBmb3IgY2xvbmVzOyBudWxsIGZvciBiaW9kcm9uZXMuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50dXJuU3RhdGUrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogdHJpZ2dlciB0aWxlIGFuZCBlbWl0IGJhdHRsZSB0YXJnZXRzIChndW5uZXJzLCBldGMpIHRvIFBsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRlVGlsZSh7eDpkYXRhLngsIHk6ZGF0YS55fSk7ICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGlmIHRpbGUgaXMgcHJvZHVjdGlvbiwgc3VyZmFjZSwgb3IgYXJtb3J5OyBjaGVjayBmb3IgYmlvZHJvbmVzIGFuZCBtb3ZlIG9yZG5hbmNlLCB0aGVuIChpZiBub25lIGFyZSBmb3VuZCkgY2hhbmdlIHBsYXllcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aWxlID0gdGhpcy5nZXRUaWxlKGRhdGEueCwgZGF0YS55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0aWxlLnR5cGUgPT0gXCJwcm9kdWN0aW9uXCIgIHx8IHRpbGUudHlwZSA9PSBcInN1cmZhY2VcIiB8fCB0aWxlLnR5cGUgPT0gXCJhcm1vcnlcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbGUubmFtZSA9PSBcInByb2RSZXBhaXJcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWV1ZWRUaWxlID0gdGlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGlsZS5uYW1lID09IFwiY2hlbWljYWxSZWFjdG9yXCIgfHwgdGlsZS5uYW1lID09IFwiY2hlbWljYWxSZWFjdG9yVHdvXCIgfHwgdGlsZS5uYW1lID09IFwiYWlyRmlsdGVyXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWV1ZWRUaWxlID0gdGlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UGVyc29ubmVsKCdiaW9kcm9uZScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBzZW5kIGJpb2Ryb25lIGFycmF5IHRvIGNsaWVudCBmb3Igc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmdldE9yZG5hbmNlKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IG1vdmUgb3JkbmFuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUFjdGl2ZVBsYXllcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMudHVyblN0YXRlRW51bS5BQ1RJT046XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBsYXllciB3aWxsIGRlc2lnbmF0ZSBndW5uZXIocykgZm9yIGZpcmluZyBhbmQvb3IgYWRkaXRpb25hbCB0YXJnZXRzLCBkZXBlbmRpbmcgb24gdGhlIGJhdHRsZSB0aWxlIHR5cGUuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgd2lsbCBjb25maXJtIG1vdmVtZW50IHNlbGVjdGlvbnMgd2l0aCBHTyEgKHVubGVzcyByZXBhaXIgb3IgY291bnRlciBlc3Bpb25hZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBcnJheSBvZiBlbGlnaWJsZSBndW5uZXJzIHNlbnQgdmlhIGFjdGl2YXRlVGlsZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW1pdCBhcnJheSBvZiBlbGlnaWJsZSBndW5uZXJzIGFuZCBudW1iZXIgb2Ygc2VsZWN0YWJsZSBndW5uZXJzIHRvIFBsYXllci5cblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvblRpbGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnF1ZXVlZFRpbGUubmFtZSA9PSBcImNoZW1pY2FsUmVhY3RvclwiIHx8IHRoaXMucXVldWVkVGlsZS5uYW1lID09IFwiY2hlbWljYWxSZWFjdG9yVHdvXCIgfHwgdGhpcy5xdWV1ZWRUaWxlLm5hbWUgPT0gXCJhaXJGaWx0ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblRpbGUgPSB0aGlzLmdldFRpbGUoZGF0YS54LCBkYXRhLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb25UaWxlLm5hbWUgPT0gXCJsb2NrXCIgJiYgYWN0aW9uVGlsZS5kYW1hZ2VkID09PSBmYWxzZSAmJiBhY3Rpb25UaWxlLm9jY3VwaWVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlQ2xvbmUodGhpcy5hY3RpdmVQbGF5ZXIsIGRhdGEueCwgZGF0YS55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVDbG9uZXNUb0FkZC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hdmFpbGFibGVDbG9uZXNUb0FkZCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UGVyc29ubmVsKCdiaW9kcm9uZXMnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBzZW5kIGJpb2Ryb25lIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5nZXRPcmRuYW5jZSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IE1vdmUgb3JkbmFuY2UgYW5kIGNoZWNrIGZvciBkYW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUFjdGl2ZVBsYXllcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnF1ZXVlZFRpbGUubmFtZSA9PSBcImNvdW50ZXJFc3Bpb25hZ2VcIiApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBzcGVjaWFsIGNhc2UuXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucXVldWVkVGlsZS5uYW1lID09IFwicmVwYWlyXCIgfHwgdGhpcy5xdWV1ZWRUaWxlLm5hbWUgPT0gXCJyZXBhaXJUd29cIiB8fCB0aGlzLnF1ZXVlZFRpbGUubmFtZSA9PSBcInByb2RSZXBhaXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IFNwZWNpYWwgY2FzZXMuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblRpbGUgPSB0aGlzLmdldFRpbGUoZGF0YS54LCBkYXRhLnkpLmRhbWFnZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvblRpbGUuZGFtYWdlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25UaWxlLmRhbWFnZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVzUmVwYWlyZWRUaGlzVHVybisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAncmVwYWlyVGlsZScsIGRldGFpbHM6IHt4OmRhdGEueCwgeTpkYXRhLnl9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVzUmVwYWlyZWRUaGlzVHVybiA9PSAxKSB7ICAvLyBUT0RPOiBjaGVjayBmb3IgcmVwYWlyVHdvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZXNSZXBhaXJlZFRoaXNUdXJuID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbCgnYmlvZHJvbmVzJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogc2VuZCBiaW9kcm9uZSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuZ2V0T3JkbmFuY2UoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBNb3ZlIG9yZG5hbmNlIGFuZCBjaGVjayBmb3IgZGFtYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3RpdmVQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQZXJzb25uZWwgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRQZXJzb25uZWxCeVBvaW50KHt4OmRhdGEueCwgeTpkYXRhLnl9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRQZXJzb25uZWwgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci50b2dnbGVHdW5uZXJTZWxlY3Rpb24oc2VsZWN0ZWRQZXJzb25uZWwpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3Nob3dUaWxlcycsIGRldGFpbHM6IHt4OmRhdGEueCwgeTpkYXRhLnl9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdoaWRlVGlsZXMnLCBkZXRhaWxzOiB7eDpkYXRhLngsIHk6ZGF0YS55fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uVEFSR0VUUzpcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGxheWVyIHdpbGwgY2hvb3NlIGFkZGl0aW9uYWwgdGFyZ2V0cyBpZiByZXF1aXJlZCBieSB0aGUgdGlsZS4gRXNwb2luYWdlLCBmb3IgaW5zdGFuY2UsIHJlcXVpcmVzIGEgZ3VubmVyIGFuZCBhbiBlbmVteSBjbG9uZSBpbiB0aGUgc2VsZWN0ZWQgZ3VubmVyJ3MgbGluZSBvZiBmaXJlLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGxheWVyIHdpbGwgY29uZmlybSB0YXJnZXRzIHdpdGggR08hXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGFyZ2V0IHF1ZXVlZCFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMudHVyblN0YXRlRW51bS5PUkROQU5DRTpcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uRU5EOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbnkgcG9zdC10dXJuIHByb2Nlc3NpbmcgY2FuIGhhcHBlbiBoZXJlLiBPdGhlcndpc2UsIHRoZSB0dXJuIG1heSBhbHJlYWR5IGJlIG92ZXIuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHVyblN0YXRlID0gdGhpcy50dXJuU3RhdGVFbnVtLlJPTEw7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgICAgIFxuICAgIH1cblxuICAgIGdvKGRhdGEpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnR1cm5TdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uQUNUSU9OOlxuICAgICAgICAgICAgICAgIC8vIFBsYXllciBoYXMgY29uZmlybWVkIGd1bm5lciBzZWxlY3Rpb24uXG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuZ2V0U2VsZWN0ZWRHdW5uZXJzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcmVXZWFwb24odGhpcy5xdWV1ZWRUaWxlLCB0aGlzLmFjdGl2ZVBsYXllci5nZXRTZWxlY3RlZEd1bm5lcnMoKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IElmIHRhcmdldHMgYXJlIHJlcXVpcmVkIChpZSBlc3Bpb25hZ2UpIHNlbmQgdGhhdCBhcnJheSBub3cgYW5kIGFkdmFuY2UgdG8gVEFSR0VUUyBhbmQgUkVUVVJOXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogSWYgYmlvZHJvbmVzIGV4aXN0LCBzZW5kIHRoYXQgYXJyYXkgbm93IGFuZCBhZHZhbmNlIHRvIEJJT0RST05FUyBhbmQgUkVUVVJOXG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBJZiBwbGF5ZXIgaGFzIG9yZG5hbmNlLCBtb3ZlIG9yZG5hbmNlL2NoZWNrIGRhbWFnZSBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIub3JkbmFuY2VBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cGRhdGVkT3JkbmFuY2UgPSB0aGlzLmFjdGl2ZVBsYXllci5tb3ZlT3JkbmFuY2UodGhpcy5jdXJyZW50RGljZVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogQ2hlY2sgLyBhcHBseSBkYW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6J21vdmVPcmRuYW5jZScsIGRldGFpbHM6dXBkYXRlZE9yZG5hbmNlfSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQWN0aXZlUGxheWVyKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHRoaXMudHVyblN0YXRlRW51bS5UQVJHRVRTOlxuICAgICAgICAgICAgICAgIC8vIFBsYXllciBoYXMgY29uZmlybWVkIGFsbCB0YXJnZXRzICh0aGlzIHdpbGwgYXBwbHkgdG8gbGltaXRlZCBiYXR0bGUgdGlsZXMgbGlrZSBlc3Bpb25hZ2UpXG4gICAgICAgICAgICAgICAgLy8gSSBtYXkgY29tZSBiYWNrIHRvIHRoaXMgYSBiaXQgbGF0ZXIuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVXBkYXRlIGNsaWVudCB3aXRoIHJlc3VsdFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uQklPRFJPTkU6XG4gICAgICAgICAgICAgICAgLy8gUGxheWVyIGhhcyBjb25maXJtZWQgdGhhdCBiaW9kcm9uZSBzZWxlY3Rpb24gKGlmIGFueSkgaXMgZmluYWwuIFxuICAgICAgICAgICAgICAgIC8vIFRPRE86IE1vdmUgYmlvZHJvbmUocykgYW5kIHdyZWFrIGhhdm9rLiBcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBhZHZhbmNlIHR1cm5zdGF0ZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uRU5EOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH1cblxuXHRhZGROZXdQbGF5ZXIoc29ja2V0SUQsIHV1aWQpIHtcbiAgICAgICAgdGhpcy5sYXN0UGxheWVySUQrKztcbiAgICAgICAgdmFyIHBsYXllciA9IG5ldyBQbGF5ZXIoc29ja2V0SUQsIHRoaXMubGFzdFBsYXllcklELCB1dWlkKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzQXJyYXkucHVzaChwbGF5ZXIpO1xuICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3VwZGF0ZVBsYXllcicsIGRldGFpbHM6IHtpZDogdGhpcy5sYXN0UGxheWVySUR9fSwgc29ja2V0SUQpO1xuICAgICAgICByZXR1cm4gcGxheWVyO1xuXHR9XG5cbiAgICBhZGRQbGF5ZXIocGxheWVyKSB7XG4gICAgICAgIHRoaXMucGxheWVyc0FycmF5LnB1c2gocGxheWVyKTtcbiAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICd1cGRhdGVQbGF5ZXInLCBkZXRhaWxzOiB7aWQ6IHBsYXllci5pZH19LCBwbGF5ZXIuc29ja2V0SUQpO1xuICAgIH1cblxuICAgIHNldFBsYXllclN0YXRlKHN0YXRlKSB7XG4gICAgICAgIHZhciBwbGF5ZXIgPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKHN0YXRlLnZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlICdyZXNldCc6IFxuICAgICAgICAgICAgICAgIHBsYXllciA9IHRoaXMuZ2V0UGxheWVyQnlTb2NrZXRJRChzdGF0ZS5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgcGxheWVyLnJlbW92ZVBlcnNvbm5lbChudWxsLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcInJlbW92ZUFsbFBlcnNvbm5lbFwiLCBkZXRhaWxzOiB7fX0sIHBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdGFydCc6IFxuICAgICAgICAgICAgICAgIHBsYXllciA9IHRoaXMuZ2V0UGxheWVyQnlTb2NrZXRJRChzdGF0ZS5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgcGxheWVyLnJlYWR5VG9TdGFydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFyIG9wcG9uZW50ID0gdGhpcy5nZXRQbGF5ZXJPcHBvbmVudChwbGF5ZXIpO1xuICAgICAgICAgICAgICAgIGlmKCFvcHBvbmVudCB8fCAhb3Bwb25lbnQucmVhZHlUb1N0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3BwQ2xvbmVzID0gb3Bwb25lbnQuZ2V0UGVyc29ubmVsKCdjbG9uZScpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFBsYXllckNsb25lcyA9IHBsYXllci5nZXRQZXJzb25uZWwoJ2Nsb25lJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm90aWZ5IGN1cnJlbnQgcGxheWVyIG9mIG9wcG9uZW50IHBvc2l0aW9uc1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGxheWVyUGF5bG9hZCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIG9wcENsb25lcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyUGF5bG9hZC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Om9wcENsb25lc1tpXS54LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6b3BwQ2xvbmVzW2ldLnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXVpZDpvcHBDbG9uZXNbaV0udXVpZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHt0eXBlOlwicGVyc29ubmVsXCIsIGRldGFpbHM6cGxheWVyUGF5bG9hZH0sIHBsYXllci5zb2NrZXRJRCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm90aWZ5IG9wcG9uZW50IG9mIGN1cnJlbnQgcGxheWVyJ3MgcG9zaXRpb25zXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHBQYXlsb2FkID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGMgaW4gY3VycmVudFBsYXllckNsb25lcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BwUGF5bG9hZC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OmN1cnJlbnRQbGF5ZXJDbG9uZXNbY10ueCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OmN1cnJlbnRQbGF5ZXJDbG9uZXNbY10ueSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dWlkOmN1cnJlbnRQbGF5ZXJDbG9uZXNbY10udXVpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywge3R5cGU6XCJwZXJzb25uZWxcIiwgZGV0YWlsczpvcHBQYXlsb2FkfSwgb3Bwb25lbnQuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2FkY2FzdCgndXBkYXRlJywge3R5cGU6XCJyZXNvdXJjZXNcIiwgYWN0aW9uOidpbml0J30pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyID0gdGhpcy5nZXRSYW5kb21QbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJvZmZlckRpY2VcIiwgZGV0YWlsczoge319LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlKys7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHN0YXRlLnZhbHVlICsgXCIgaXMgbm90IGEgdmFsaWQgcGxheWVyIHN0YXRlIVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFBsYXllck9wcG9uZW50KHBsYXllcikge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZXJzQXJyYXkubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJzQXJyYXlbMF0gPT09IHBsYXllcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5WzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5WzBdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlQWN0aXZlUGxheWVyKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZVBsYXllci5jbGVhclF1ZXVlcygpO1xuICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcInRha2VEaWNlXCIsIGRldGFpbHM6IHt9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICB0aGlzLmFjdGl2ZVBsYXllciA9IHRoaXMuZ2V0UGxheWVyT3Bwb25lbnQodGhpcy5hY3RpdmVQbGF5ZXIpO1xuICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcIm9mZmVyRGljZVwiLCBkZXRhaWxzOiB7fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgdGhpcy50dXJuU3RhdGUgPSAwO1xuICAgIH1cblxuICAgIGdldFJhbmRvbVBsYXllcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIpXTtcbiAgICB9XG4gICAgXG4gICAgZ2V0UGxheWVyQnlVVUlEKHV1aWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnBsYXllcnNBcnJheSkge1xuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXJzQXJyYXlbaV0udXVpZCA9PSB1dWlkKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheVtpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgZ2V0UGxheWVyQnlTb2NrZXRJRChpZCkge1xuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMucGxheWVyc0FycmF5KSB7XG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcnNBcnJheVtpXS5zb2NrZXRJRCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0UGxheWVyQ291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheS5sZW5ndGg7XG4gICAgfVxuXG4gICAgY2hlY2tBcm1zKHBsYXllcikge1xuICAgICAgICBwbGF5ZXIuYXJtc0FycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgaW4gcGxheWVyLnBlcnNvbm5lbEFycmF5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy50aWxlQXJyYXlbcGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnhdW3BsYXllci5wZXJzb25uZWxBcnJheVtpXS55XS50eXBlID09IFwiYXJtb3J5XCIpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuYXJtc0FycmF5LnB1c2godGhpcy50aWxlQXJyYXlbcGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnhdW3BsYXllci5wZXJzb25uZWxBcnJheVtpXS55XS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjaGVja0d1bm5lcnMocGxheWVyKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gcGxheWVyLnBlcnNvbm5lbEFycmF5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy50aWxlQXJyYXlbcGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnhdW3BsYXllci5wZXJzb25uZWxBcnJheVtpXS55XS50eXBlID09IFwic3VyZmFjZVwiKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLmlzR3VubmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLmlzR3VubmVyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleGlzdHNQbGF5ZXJVVUlEKHV1aWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnBsYXllcnNBcnJheSkge1xuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXJzQXJyYXlbaV0udXVpZCA9PSB1dWlkKVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9ICAgIFxuXG4gICAgYWN0aXZhdGVUaWxlKGRhdGEpIHtcbiAgICAgICAgdmFyIHRpbGUgPSB0aGlzLmdldFRpbGUoZGF0YS54LCBkYXRhLnkpO1xuICAgICAgICB2YXIgcmVtYWluaW5nQ291bnQgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgc3dpdGNoICh0aWxlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzdXJmYWNlXCI6IFxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbEJ5UG9pbnQoe3g6ZGF0YS54LCB5OmRhdGEueX0pLmlzR3VubmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwcm9kdWN0aW9uXCI6XG5cbiAgICAgICAgICAgICAgICAvLyBUaHJlZSBzcGVjaWFsIGNhc2VzOiBcbiAgICAgICAgICAgICAgICAvLyAgLSBTZW5zb3IgQ2FiaW4gZG9lcyBub3QgY29zdCBvciB5aWVsZCBhbnl0aGluZy4gV2UgY2FuIGhhbmRsZSB0aGlzIGltbWVkaWF0ZWx5KVxuICAgICAgICAgICAgICAgIC8vICAtIFByb2R1Y3Rpb24gUmVwYWlyIGNvc3RzLCBidXQgdHJpZ2dlcnMgYSByZXBhaXIganVzdCBsaWtlIHRoZSBSZXBhaXIgYmF0dGxlIHRpbGUgKFdlIG5lZWQgdG8gY2hlY2sgaWYgd2UgY2FuIGFmZm9yZClcbiAgICAgICAgICAgICAgICAvLyAgLSBOdWNsZWFyIEFybW9yeSBwcm9kdWNlcyBhIG51a2Ugd2hpY2ggcmVsaWVzIG9uIG9yZG5hbmNlIHdoaWNoIGhhcyBub3QgYmVlbiBidWlsdCB5ZXRcblxuICAgICAgICAgICAgICAgIGlmKHRpbGUubmFtZSA9PSBcInNlbnNvckNhYmluXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHNlbnNvciBjYWJpbiBzbyBqdXN0IHRyaWdnZXIgdGhlIGFjdGlvbiBhbmQgbW92ZSBvbi5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZW5zb3IgY2FiaW5zIGFyZSBmcmVlIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmNoZWNrUmVzb3VyY2UodGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGVbaV0sIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RDb3VudFtpXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYW4ndCBhZmZvcmQgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2FuJ3QgYWZmb3JkIGl0IVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogaW4gdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5jaGVja1Jlc291cmNlKHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkVHlwZVtqXSwgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRDb3VudFtqXSwgdHJ1ZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBObyByb29tIHRvIHN0b3JlIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhbid0IGFjY2VwdCB0aGUgeWllbGQgY3V6IHdlIGdvdCBubyByb29tIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aWxlLm5hbWUgPT0gXCJjaGVtaWNhbFJlYWN0b3JcIiB8fCB0aWxlLm5hbWUgPT0gXCJjaGVtaWNhbFJlYWN0b3JUd29cIiApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVDbG9uZXNUb0FkZCA9IHRoaXMuYWN0aXZlUGxheWVyLmdldFJlc291cmNlQ291bnQoJ294eWdlbicpICsgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRDb3VudFswXSAtIHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbCgnY2xvbmUnKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggdGlsZS5uYW1lID09IFwiYWlyRmlsdGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVDbG9uZXNUb0FkZCA9IHRoaXMuYWN0aXZlUGxheWVyLmdldFJlc291cmNlQ291bnQoJ294eWdlbicpICsgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRDb3VudFswXSAtIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RDb3VudFswXSAtIHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbCgnY2xvbmUnKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgayBpbiB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdDb3VudCA9IHRoaXMuYWN0aXZlUGxheWVyLnNwZW5kUmVzb3VyY2UodGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGVba10sIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RDb3VudFtrXSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIFwiICsgdGhpcy5hY3RpdmVQbGF5ZXIuaWQgKyBcIiBzcGVudCBcIiArIHJlbWFpbmluZ0NvdW50ICsgXCIgXCIgKyB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZVtrXSArIFwiLiBUaGlzIGxlYXZlcyB0aGVtIHdpdGggXCIgKyB0aGlzLmFjdGl2ZVBsYXllci5nZXRSZXNvdXJjZUNvdW50KHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlW2tdKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbCBpbiB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nQ291bnQgPSB0aGlzLmFjdGl2ZVBsYXllci5hY2NlcHRSZXNvdXJjZSh0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZFR5cGVbbF0sIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkQ291bnRbbF0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVtYWluaW5nQ291bnQpIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXIgXCIgKyB0aGlzLmFjdGl2ZVBsYXllci5pZCArIFwiIGFkZGVkIFwiICsgcmVtYWluaW5nQ291bnQgKyBcIiBcIiArIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkVHlwZVtsXSArIFwiLiBUaGlzIGxlYXZlcyB0aGVtIHdpdGggXCIgKyB0aGlzLmFjdGl2ZVBsYXllci5nZXRSZXNvdXJjZUNvdW50KHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkVHlwZVtsXSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aWxlLm5hbWUgPT0gXCJveHlnZW5cIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBDaGVjayBpZiBveHlnZW4gaXMgZ3JlYXRlciB0aGFuIHRoZSBudW1iZXIgb2YgY2xvbmVzLiBJZiBzbywgYWRkIGEgY2xvbmUuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5nZXRSZXNvdXJjZUNvdW50KCdveHlnZW4nKSA+IHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbCgnY2xvbmUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWV1ZWRUaWxlID0gdGlsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aWxlLm5hbWUgPT0gXCJwcm9kUmVwYWlyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVHJpZ2dlciB0aGUgcmVwYWlyIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlZFRpbGUgPSB0aWxlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nIChcIisrKysrKytcIik7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgcGxheWVyIHRvIHRoZWlyIG5ldyB3YXJlaG91c2UgdmFsdWVzXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgXCJhcm1vcnlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQXJtcyh0aGlzLmFjdGl2ZVBsYXllcik7XG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHBsYXllcidzIHBlcnNvbm5lbCB0byBiZSBhcm1lZFxuICAgICAgICAgICAgICAgIC8vIE1heWJlIGhhdmUgdGhyZWUgb3ZlcmxhcHBpbmcgc3ByaXRlcy4gRHJpbGwsIENhbm5vbiwgRXhwbG9zaXZlcz9cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImJhdHRsZVwiOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGlsZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzaGllbGRcIjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJpb2Ryb25lXCI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJsYXNlclwiOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidGhlcm1pdGVcIjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNhdGVsbGl0ZVwiOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicm9ja2V0XCI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlc3Bpb25hZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRha2VvdmVyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnR1cm5TdGF0ZSsrOyAvLyBTZXQgc3RhdGUgdG8gQUNUSU9OLlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRSZXNvdXJjZUNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50UmVzb3VyY2VBZmZvcmRhYmlsaXR5ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhZmZvcmRhYmxlUm91bmRzID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUd1bm5lcnMgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRHdW5uZXJzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVHdW5uZXJzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIE5vIGd1bm5lcnMhIEdldCBvdXQgb2YgaGVyZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbSBpbiB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZXNvdXJjZUNvdW50ID0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UmVzb3VyY2VDb3VudCh0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZVttXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlQWZmb3JkYWJpbGl0eSA9IGN1cnJlbnRSZXNvdXJjZUNvdW50IC8gdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdENvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVzb3VyY2VBZmZvcmRhYmlsaXR5IDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIE5vdCBlbm91Z2ggb2YgYSByZXNvdXJjZSFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZmZvcmRhYmxlUm91bmRzID09PSBudWxsIHx8IGN1cnJlbnRSZXNvdXJjZUFmZm9yZGFiaWxpdHkgPCBhZmZvcmRhYmxlUm91bmRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFmZm9yZGFibGVSb3VuZHMgPSBjdXJyZW50UmVzb3VyY2VBZmZvcmRhYmlsaXR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVsbCBwbGF5ZXIgdGhleSBjYW4gYWZmb3JkIFwiICsgYWZmb3JkYWJsZVJvdW5kcyArIFwiIGd1bm5lcihzKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVldWVkVGlsZSA9IHRpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBlbWl0IHNob3dUaWxlcygpIHdpdGggYXJyYXkgb2YgbGVnYWwgZ3VubmVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJvZmZlckd1bm5lcnNcIiwgZGV0YWlsczp7Z3VubmVyczphY3RpdmVHdW5uZXJzfX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlYWR5IHRvIHNlbGVjdCBndW5uZXJzISBUaGlzIHdpbGwgdGFrZSBwbGFjZSBvbiB0aGUgbmV4dCBsZWdhbCBjbGljayBldmVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvdW50ZXJFc3Bpb25hZ2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvb2sgZm9yIGNsb25lcyB0aGF0IGFyZSBvcHBvbmVudCdzIHNwaWVkXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmVwYWlyXCI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyZXBhaXJUd29cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVldWVkVGlsZSA9IHRpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjdXJyZW50UmVzb3VyY2VDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2YXIgYWN0aXZlRGFtYWdlZFRpbGVzID0gdGhpcy5nZXREYW1hZ2VkVGlsZXModGhpcy5hY3RpdmVQbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGFjdGl2ZURhbWFnZWRUaWxlcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLy8gY2FsY3VsYXRlIGNvc3Qgb2YgcmVwYWlyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IgKHZhciBuIGluIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY3VycmVudFJlc291cmNlQ291bnQgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRSZXNvdXJjZUNvdW50KHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlW25dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoY3VycmVudFJlc291cmNlQ291bnQgPCB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0Q291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuOyAvLyBOb3QgZW5vdWdoIG9mIGEgcmVzb3VyY2UhXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGVsbCBwbGF5ZXIgdGhhdCB0aGV5IGNhbiBhZmZvcmQgdG8gZml4IHVwIHRoZSBzdGF0aW9uIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRpbGVPY2N1cGFudChwb2ludCkge1xuICAgICAgICB2YXIgb3JkbmFuY2UsIHBlcnNvbm5lbDtcbiAgICAgICAgZm9yICh2YXIgcGkgPSAwOyBwaSA8IHRoaXMucGxheWVyc0FycmF5Lmxlbmd0aDsgcGkrKykge1xuICAgICAgICAgICAgb3JkbmFuY2UgPSB0aGlzLnBsYXllcnNBcnJheVtwaV0uZ2V0T3JkbmFuY2VCeVBvaW50KHBvaW50KTtcbiAgICAgICAgICAgIHBlcnNvbm5lbCA9IHRoaXMucGxheWVyc0FycmF5W3BpXS5nZXRQZXJzb25uZWxCeVBvaW50KHBvaW50KTtcbiAgICAgICAgICAgIGlmIChvcmRuYW5jZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JkbmFuY2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBlcnNvbm5lbCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGVyc29ubmVsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJlV2VhcG9uKHdlYXBvblRpbGUsIGd1bm5lckFycmF5KSB7XG4gICAgICAgIGlmIChndW5uZXJBcnJheS5sZW5ndGggPD0gMCApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3VubmVyQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvcmRuYW5jZVBvaW50ID0ge3g6Z3VubmVyQXJyYXlbaV0ueCwgeTpndW5uZXJBcnJheVtpXS55fTtcbiAgICAgICAgICAgIHZhciBpbXBhY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIG9yZFVVSUQ7XG5cbiAgICAgICAgICAgIHN3aXRjaCAod2VhcG9uVGlsZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImxhc2VyXCI6XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VGlsZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRPY2N1cGFudDtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGltcGFjdGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmlkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRuYW5jZVBvaW50LngrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkbmFuY2VQb2ludC54LS07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGlsZSA9IHRoaXMuZ2V0VGlsZShvcmRuYW5jZVBvaW50LngsIG9yZG5hbmNlUG9pbnQueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGN1cnJlbnRUaWxlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3BhY2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic3VyZmFjZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFRpbGUub2NjdXBpZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPY2N1cGFudCA9IHRoaXMuZ2V0VGlsZU9jY3VwYW50KG9yZG5hbmNlUG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIucmVtb3ZlKGN1cnJlbnRPY2N1cGFudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGlsZS5vY2N1cGllZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wYWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gWW91IGFyZSBpbiB0aGUgb3Bwb25lbnQgbWluZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUaWxlLm9jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50T2NjdXBhbnQgPSB0aGlzLmdldFRpbGVPY2N1cGFudChvcmRuYW5jZVBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLnJlbW92ZVBlcnNvbm5lbChjdXJyZW50T2NjdXBhbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogZW1pdCBkZWF0aCBhbmltYXRpb24gdG8gY2xpZW50cy4gKG1heWJlIGp1c3QgYWRkIHRoYXQgdG8gdGhlIHJlbW92ZVBlcnNvbm5lbCgpPylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwicmVtb3ZlUGVyc29ubmVsXCIsIGRldGFpbHM6Y3VycmVudE9jY3VwYW50fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbGUub2NjdXBpZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcGFjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGlsZS5kYW1hZ2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlLmRhbWFnZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJkYW1hZ2VUaWxlXCIgLGRldGFpbHM6b3JkbmFuY2VQb2ludH0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcGFjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNoaWVsZFwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJiaW9kcm9uZVwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJzYXRlbGxpdGVcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwicm9ja2V0XCI6XG4gICAgICAgICAgICAgICAgICAgIGlmICh3ZWFwb25UaWxlLm5hbWUgPT0gXCJzaGllbGRcIiB8fCB3ZWFwb25UaWxlLm5hbWUgPT0gXCJzYXRlbGxpdGVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmlkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRuYW5jZVBvaW50LnggKz0gdGhpcy5jdXJyZW50RGljZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRuYW5jZVBvaW50LnggLT0gdGhpcy5jdXJyZW50RGljZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlID0gdGhpcy5nZXRUaWxlKG9yZG5hbmNlUG9pbnQueCwgb3JkbmFuY2VQb2ludC55KTtcbiAgICAgICAgICAgICAgICAgICAgb3JkVVVJRCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIuYWRkT3JkbmFuY2Uod2VhcG9uVGlsZS5uYW1lLCBvcmRuYW5jZVBvaW50LCBvcmRVVUlEKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJhZGRPcmRuYW5jZVwiLCBkZXRhaWxzOnt0eXBlOndlYXBvblRpbGUubmFtZSwgcGxheWVySUQ6IHRoaXMuYWN0aXZlUGxheWVyLmlkLCBwb2ludDpvcmRuYW5jZVBvaW50LCB1dWlkOm9yZFVVSUR9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwidGhlcm1pdGVcIjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmlkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZG5hbmNlUG9pbnQueCA9IDMxIC0gdGhpcy5jdXJyZW50RGljZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JkbmFuY2VQb2ludC54ID0gdGhpcy5jdXJyZW50RGljZVZhbHVlIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGlsZSA9IHRoaXMuZ2V0VGlsZShvcmRuYW5jZVBvaW50LngsIG9yZG5hbmNlUG9pbnQueSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGlsZS5kYW1hZ2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlLmRhbWFnZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJkYW1hZ2VUaWxlXCIgLGRldGFpbHM6b3JkbmFuY2VQb2ludH0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSBpcyBhIHByb2JsZW0gd2l0aCB0aGF0IHdlYXBvblRpbGUgYXJndW1lbnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuOyBcbiAgICAgICAgLy8gc3dpdGNoICh3ZWFwb25UaWxlLm5hbWUpIHtcbiAgICAgICAgLy8gICAgIGNhc2UgXCJlc3Bpb25hZ2VcIjpcbiAgICAgICAgLy8gICAgIGNhc2UgXCJ0YWtlb3ZlclwiOlxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xuICAgICAgICAvLyAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgaXMgYSBwcm9ibGVtIHdpdGggdGhhdCB3ZWFwb25UaWxlIGFyZ3VtZW50XCIpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgZ2V0TG9ja3MocGxheWVyKSB7XG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBjIGluIHRoaXMudGlsZUFycmF5KSB7XG4gICAgICAgICAgICBmb3IgKHZhciByIGluIHRoaXMudGlsZUFycmF5W2NdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZUFycmF5W2NdW3JdLm5hbWUgPT0gXCJsb2NrXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5pZCA9PSAxICYmIGMgPCAxMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy50aWxlQXJyYXlbY11bcl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIuaWQgPT0gMiAmJiBjID4gMTgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMudGlsZUFycmF5W2NdW3JdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy50aWxlQXJyYXlbY11bcl0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcbiAgICB9XG5cbiAgICBnZXREYW1hZ2VkVGlsZXMocGxheWVyKSB7XG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBjIGluIHRoaXMudGlsZUFycmF5KSB7XG4gICAgICAgICAgICBmb3IgKHZhciByIGluIHRoaXMudGlsZUFycmF5W2NdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyLmlkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjIDwgMTIgJiYgdGhpcy50aWxlQXJyYXlbY11bcl0uZGFtYWdlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy50aWxlQXJyYXlbY11bcl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjID4gMTggJiYgdGhpcy50aWxlQXJyYXlbY11bcl0uZGFtYWdlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy50aWxlQXJyYXlbY11bcl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVBcnJheVtjXVtyXS5kYW1hZ2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMudGlsZUFycmF5W2NdW3JdKTtcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVybkFycmF5O1xuICAgIH1cbiAgICBcbiAgICBwbGFjZUNsb25lKHBsYXllciwgeCwgeSkge1xuXG4gICAgICAgIC8vIEF0dGVtcHQgdG8gcGxhY2UgY2xvbmVzXG4gICAgICAgIC8vIElmIHRoZSBnYW1lc3RhdGUgaXMgU0VUVVAsIGNsb25lcyBjYW4gZ28gaW50byBhbnkgdW5vY2N1cGllZCwgcGxheWVyLW93bmVkLCBiYXR0bGUsIHByb2R1Y3Rpb24sIGxvY2ssIG9yIGFybW9yeSB0aWxlLlxuICAgICAgICAvLyBJZiB0aGUgZ2FtZXN0YXRlIGlzIEdBTUUsIGNsb25lcyBjYW4gb25seSBnbyBpbnRvIHVub2NjdXBpZWQsIHBsYXllci1vd25lZCwgbG9ja3MuXG4gICAgICAgIC8vIFJFVFVSTiB0cnVlIG9yIGZhbHNlIGZvciBzdWNjZXNzIG9yIGZhaWx1cmUuXG4gICAgICAgIC8vIEkgc2hvdWxkIHJlZmFjdG9yIHRoaXMsIGJ1dCBJJ20gdGlyZWQuXG5cbiAgICAgICAgaWYgKHR5cGVvZiBwbGF5ZXIgPT09ICd1bmRlZmluZWQnIHx8IHBsYXllciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGVjdGVkVGlsZSA9IHRoaXMuZ2V0VGlsZSh4LCB5KTtcbiAgICAgICAgdmFyIGNsb25lLCBjbG9uZVVVSUQ7XG5cbiAgICAgICAgaWYgKHBsYXllci5pZCAhPSBzZWxlY3RlZFRpbGUub3duZXIgfHwgc2VsZWN0ZWRUaWxlLm9jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBnYW1lc3RhdGUgaXMgU0VUVVBcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSB0aGlzLmdhbWVTdGF0ZUVudW0uU0VUVVApIHtcbiAgICAgICAgICAgIGlmKHNlbGVjdGVkVGlsZS50eXBlID09IFwibG9ja1wiIHx8IHNlbGVjdGVkVGlsZS50eXBlID09IFwiYmF0dGxlXCIgfHwgc2VsZWN0ZWRUaWxlLnR5cGUgPT0gXCJhcm1vcnlcIiB8fCBzZWxlY3RlZFRpbGUudHlwZSA9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgICAgIGNsb25lVVVJRCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgICAvL3ZhciB1dWlkID0gcmVxdWlyZSgndXVpZC92NCcpKCk7XG4gICAgICAgICAgICAgICAgY2xvbmUgPSBwbGF5ZXIuYWRkUGVyc29ubmVsKCdjbG9uZScsIHgsIHksIGNsb25lVVVJRCk7XG4gICAgICAgICAgICAgICAgaWYgKGNsb25lICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQXJtcyhwbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRpbGUub2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcImFkZENsb25lXCIsIGRldGFpbHM6IHt4OngsIHk6eSwgcGxheWVySUQ6IHBsYXllci5pZCwgdXVpZDpjbG9uZVVVSUR9fSwgcGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGdhbWVzdGF0ZSBpcyBHQU1FXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gdGhpcy5nYW1lU3RhdGVFbnVtLkdBTUUpIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFRpbGUudHlwZSA9PSBcImxvY2tcIikge1xuICAgICAgICAgICAgICAgIGNsb25lVVVJRCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgICAvL3ZhciB1dWlkID0gcmVxdWlyZSgndXVpZC92NCcpKCk7XG4gICAgICAgICAgICAgICAgY2xvbmUgPSBwbGF5ZXIuYWRkUGVyc29ubmVsKCdjbG9uZScsIHgsIHksIGNsb25lVVVJRCk7XG4gICAgICAgICAgICAgICAgaWYgKGNsb25lICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQXJtcyhwbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRpbGUub2NjdXBpZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcImFkZENsb25lXCIsIGRldGFpbHM6IHt4OngsIHk6eSwgcGxheWVySUQ6IHBsYXllci5pZCwgdXVpZDpjbG9uZVVVSUR9fSwgcGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBjcmVhdGVUaWxlQXJyYXkoKSB7XG4gICAgICAgIHZhciB0aWxlSlNPTiA9IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy90aWxlRGV0YWlsLmpzb24nKTtcblxuICAgICAgICBmb3IodmFyIGMgPSAwOyBjIDwgdGhpcy50aWxlQ29sdW1uczsgYysrKSB7XG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjXSA9IFtdO1xuICAgICAgICAgICAgZm9yKHZhciByID0gMDsgciA8IHRoaXMudGlsZVJvd3M7IHIrKykge1xuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NdW3JdID0ge1xuICAgICAgICAgICAgICAgICAgICB4OmMsXG4gICAgICAgICAgICAgICAgICAgIHk6clxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGlsZUpTT04pIHtcbiAgICAgICAgICAgIGlmICghdGlsZUpTT04uaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciBvYmogPSB0aWxlSlNPTltrZXldO1xuICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAvLyBza2lwIGxvb3AgaWYgdGhlIHByb3BlcnR5IGlzIGZyb20gcHJvdG90eXBlXG4gICAgICAgICAgICAgICAgaWYoIW9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uQ291bnQgPSBvYmpbcHJvcF0ubG9jYXRpb25zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvY2F0aW9uQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvb3JkcyA9IG9ialtwcm9wXS5sb2NhdGlvbnNbaV0uc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IGNvb3Jkc1swXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBjb29yZHNbMV07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5kYW1hZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLm9jY3VwaWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnR5cGUgPSBvYmpbcHJvcF0udHlwZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPCA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5vd25lciA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeCA+IDIxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5vd25lciA9IDI7XG4gICAgICAgICAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVBcnJheVt4XVt5XSAhPSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLm5hbWUgPSBvYmpbcHJvcF0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeCArIFwiOlwiICsgeSArIFwiIG5vdCBmb3VuZCFcIik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9ialtwcm9wXS5wcm9wZXJ0aWVzICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5wcm9wZXJ0aWVzID0gb2JqW3Byb3BdLnByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRpbGUoeCwgeSkge1xuICAgICAgICByZXR1cm4gdGhpcy50aWxlQXJyYXlbeF1beV07XG4gICAgfVxuXG4gICAgZ2V0TGVnYWxQaWVjZXMoKSB7XG4gICAgICAgIHZhciBwZXJzb25uZWxBcnJheSA9IHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbCgpO1xuICAgICAgICB2YXIgcmV0dXJuQXJyYXkgPSBbXTtcbiAgICAgICAgdmFyIG1vdmVzQXJyYXkgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpIGluIHBlcnNvbm5lbEFycmF5KSB7XG4gICAgICAgICAgICBtb3Zlc0FycmF5ID0gdGhpcy5nZXRMZWdhbE1vdmVzKHBlcnNvbm5lbEFycmF5W2ldLCB0aGlzLmN1cnJlbnREaWNlVmFsdWUsIHt4OnBlcnNvbm5lbEFycmF5W2ldLngsIHk6cGVyc29ubmVsQXJyYXlbaV0ueX0pO1xuICAgICAgICAgICAgaWYgKG1vdmVzQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2goe3R5cGU6cGVyc29ubmVsQXJyYXlbaV0udHlwZSxvcmlnaW46e3g6cGVyc29ubmVsQXJyYXlbaV0ueCx5OnBlcnNvbm5lbEFycmF5W2ldLnl9LCB1dWlkOnBlcnNvbm5lbEFycmF5W2ldLnV1aWQsIG1vdmVzOm1vdmVzQXJyYXl9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XG4gICAgfVxuXG4gICAgZ2V0Q29vcmRGcm9tRGlyZWN0aW9uKG9yaWdpbkNvb3JkLGRpcmVjdGlvbikge1xuICAgICAgICB2YXIgZGlyPXtOT1JUSDp7eDowLHk6LTF9LEVBU1Q6e3g6MSx5OjB9LFNPVVRIOnt4OjAseToxfSxXRVNUOnt4Oi0xLHk6MH19O1xuICAgICAgICBcbiAgICAgICAgdmFyIG9iaiA9IHt4OihwYXJzZUludChvcmlnaW5Db29yZC54KSArIHBhcnNlSW50KGRpcltkaXJlY3Rpb25dLngpKSwgeToocGFyc2VJbnQob3JpZ2luQ29vcmQueSkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS55KSl9O1xuICAgICAgICBpZihvYmoueCA8IDAgfHwgb2JqLnggPiAzMHx8IG9iai55IDwgMCB8fCBvYmoueSA+IDIwKSBcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHt4OihwYXJzZUludChvcmlnaW5Db29yZC54KSArIHBhcnNlSW50KGRpcltkaXJlY3Rpb25dLngpKSwgeToocGFyc2VJbnQob3JpZ2luQ29vcmQueSkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS55KSl9OyAgICAgICAgICAgIFxuICAgIH1cblxuICAgIGdldExlZ2FsTW92ZXMoZ2FtZVBpZWNlVHlwZSwgbW92ZXMsIGN1cnJlbnRDb29yZCwgcHJldmlvdXNDb29yZCl7XG4gICAgICAgIGlmIChtb3ZlcyA8IDEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbGxlZ2FsIG1vdmUgbnVtYmVyISBUaGlzIGNvdWxkIHJlc3VsdCBpbiBpbmZpbml0ZSBsb29wLlwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGVnYWxNb3ZlcyA9IFtdO1xuICAgICAgICB2YXIgcmV0dXJuQXJyYXkgPSBbXTtcbiAgICAgICAgdmFyIG5leHRNb3ZlVG9DaGVjayA9IG51bGw7XG4gICAgICAgIHZhciBuZXh0VGlsZVRvQ2hlY2sgPSBudWxsO1xuICAgICAgICBtb3Zlcy0tO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9jZXNzLm1lbW9yeVVzYWdlKCkuaGVhcFVzZWQpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcHJldmlvdXNDb29yZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHZhciBsb2NrcyA9IHRoaXMuZ2V0TG9ja3ModGhpcy5hY3RpdmVQbGF5ZXIpO1xuICAgICAgICAgICAgdmFyIGlzTG9jayA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBsIGluIGxvY2tzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvY2tzW2xdLnggPT0gY3VycmVudENvb3JkLnggJiYgbG9ja3NbbF0ueSA9PSBjdXJyZW50Q29vcmQueSkge1xuICAgICAgICAgICAgICAgICAgICBpc0xvY2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzTG9jayA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gbG9ja3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRDb29yZC54ID09IGxvY2tzW2ldLnggJiYgY3VycmVudENvb3JkLnkgPT0gbG9ja3NbaV0ueSkgeyBjb250aW51ZTsgfSAvLyBkb24ndCBpbmNsdWRlIHRoZSBsb2NrIHlvdSdyZSBzaXR0aW5nIG9uXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVBcnJheVtsb2Nrc1tpXS54XVtsb2Nrc1tpXS55XS5vY2N1cGllZCA9PT0gdHJ1ZSkgeyBjb250aW51ZTsgfSAvLyBkb24ndCBpbmNsdWRlIGxvY2sgdGhhdCBvdGhlcnMgYXJlIHNpdHRpbmcgb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vdmVzID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkgPSByZXR1cm5BcnJheS5jb25jYXQodGhpcy5nZXRMZWdhbE1vdmVzKGdhbWVQaWVjZVR5cGUsIG1vdmVzLCB7eDpsb2Nrc1tpXS54LCB5OmxvY2tzW2ldLnl9LCBjdXJyZW50Q29vcmQpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2gobG9ja3NbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGMgaW4gcmV0dXJuQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJldHVybkFycmF5W2NdLnggIT09IGN1cnJlbnRDb29yZC54IHx8IHJldHVybkFycmF5W2NdLnkgIT09IGN1cnJlbnRDb29yZC55KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2FsTW92ZXMucHVzaChyZXR1cm5BcnJheVtjXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGRpcmVjdGlvbiBpbiB0aGlzLmRpcmVjdGlvbkVudW0pIHtcbiAgICAgICAgICAgIG5leHRNb3ZlVG9DaGVjayA9IHRoaXMuZ2V0Q29vcmRGcm9tRGlyZWN0aW9uKGN1cnJlbnRDb29yZCwgZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGlmKG5leHRNb3ZlVG9DaGVjayA9PT0gZmFsc2UpIHsgY29udGludWU7IH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbmV4dFRpbGVUb0NoZWNrID0gdGhpcy50aWxlQXJyYXlbbmV4dE1vdmVUb0NoZWNrLnhdW25leHRNb3ZlVG9DaGVjay55XTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKG5leHRUaWxlVG9DaGVjay5kYW1hZ2VkID09PSB0cnVlKSB7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICBpZiAobmV4dFRpbGVUb0NoZWNrLnR5cGUgPT09IFwic3BhY2VcIikgeyBjb250aW51ZTsgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tXYWxsKHRoaXMuZGlyZWN0aW9uRW51bVtkaXJlY3Rpb25dLCBjdXJyZW50Q29vcmQpID09PSBmYWxzZSkgeyBjb250aW51ZTsgfVxuXG4gICAgICAgICAgICBpZigodHlwZW9mIHByZXZpb3VzQ29vcmQgPT09ICd1bmRlZmluZWQnKSB8fCAoKHR5cGVvZiBwcmV2aW91c0Nvb3JkICE9PSAndW5kZWZpbmVkJykgJiYgKEpTT04uc3RyaW5naWZ5KG5leHRNb3ZlVG9DaGVjaykgIT09IEpTT04uc3RyaW5naWZ5KHByZXZpb3VzQ29vcmQpKSApKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGlsZSBpcyBvY2N1cGllZFxuICAgICAgICAgICAgICAgIGlmIChtb3ZlcyA9PT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKG5leHRUaWxlVG9DaGVjay5vY2N1cGllZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2FsTW92ZXMucHVzaChuZXh0TW92ZVRvQ2hlY2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheSA9IHJldHVybkFycmF5LmNvbmNhdCh0aGlzLmdldExlZ2FsTW92ZXMoZ2FtZVBpZWNlVHlwZSwgbW92ZXMsIG5leHRNb3ZlVG9DaGVjaywgY3VycmVudENvb3JkKSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaW5kZXggaW4gcmV0dXJuQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJldHVybkFycmF5W2luZGV4XS54ICE9PSBjdXJyZW50Q29vcmQueCB8fCByZXR1cm5BcnJheVtpbmRleF0ueSAhPT0gY3VycmVudENvb3JkLnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnYWxNb3Zlcy5wdXNoKHJldHVybkFycmF5W2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZ2FsTW92ZXM7XG4gICAgfVxuXG4gICAgY2hlY2tXYWxsKGRpcmVjdGlvbiwgY3VycmVudENvb3JkaW5hdGUpIHtcbiAgICAgICAgdGhpcy53YWxsR3JpZCA9IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy93YWxsR3JpZC5qc29uJyk7XG5cbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pe1xuICAgICAgICAgICAgY2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uTk9SVEg6IC8vIFVQXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uTk9SVEgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlIHRoaXMuZGlyZWN0aW9uRW51bS5TT1VUSDogLy8gRE9XTlxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCh0aGlzLndhbGxHcmlkLmdyaWRbY3VycmVudENvb3JkaW5hdGUueF1bY3VycmVudENvb3JkaW5hdGUueV0mdGhpcy5kaXJlY3Rpb25FbnVtLlNPVVRIKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uRUFTVDogLy8gUklHSFRcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy53YWxsR3JpZC5ncmlkW2N1cnJlbnRDb29yZGluYXRlLnhdW2N1cnJlbnRDb29yZGluYXRlLnldJnRoaXMuZGlyZWN0aW9uRW51bS5FQVNUKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uV0VTVDogLy8gTEVGVFxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCh0aGlzLndhbGxHcmlkLmdyaWRbY3VycmVudENvb3JkaW5hdGUueF1bY3VycmVudENvb3JkaW5hdGUueV0mdGhpcy5kaXJlY3Rpb25FbnVtLldFU1QpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIFxuICAgIHJvbGxEaWNlKGRhdGEpIHtcbiAgICAgICAgaWYodGhpcy50dXJuU3RhdGUgPT0gdGhpcy50dXJuU3RhdGVFbnVtLlJPTEwgJiYgdGhpcy5nYW1lU3RhdGUgPT0gdGhpcy5nYW1lU3RhdGVFbnVtLkdBTUUgJiYgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQgPT0gZGF0YS5zb2NrZXRJRCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RGljZVZhbHVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIuY3VycmVudExlZ2FsUGllY2VzID0gdGhpcy5nZXRMZWdhbFBpZWNlcygpO1xuXG4gICAgICAgICAgICAvLyBQbGF5ZXIgcmVjZWl2ZXMgYXJyYXkgb2YgbGVnYWwgcGVyc29ubmVsIChjbG9uZXMpIGFuZCB0dXJuIHN0YXRlIGFkdmFuY2VzIHRvIE1PVkVcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwiZGljZVJvbGxlZFwiLCBkZXRhaWxzOiB7dmFsdWU6dGhpcy5jdXJyZW50RGljZVZhbHVlLCBnYW1lUGllY2VzOnRoaXMuYWN0aXZlUGxheWVyLmN1cnJlbnRMZWdhbFBpZWNlc319LCBkYXRhLnNvY2tldElEKTtcbiAgICAgICAgICAgIHRoaXMudHVyblN0YXRlKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ2V0KGRhdGEpIHtcbiAgICAgICAgaWYodHlwZW9mKGRhdGEucHJvcGVydHkpID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3Jlc3BvbnNlJywge2RldGFpbHM6dGhpc1tkYXRhLnByb3BlcnR5XX0sIGRhdGEuc29ja2V0SUQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGVtaXQobXNnLCBkYXRhLCBzb2NrZXRJRCkge1xuICAgICAgICBpZihtc2cgPT0gXCJyZXNwb25zZVwiIHx8IG1zZyA9PSBcInJlcXVlc3RcIiB8fCBtc2cgPT0gXCJ1cGRhdGVcIikge1xuICAgICAgICAgICAgaWYodHlwZW9mKHNvY2tldElEKSA9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5vIFNvY2tldElEIGZvdW5kIVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlvLnNvY2tldHMuY29ubmVjdGVkW3NvY2tldElEXS5lbWl0KG1zZywgZGF0YSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYobXNnID09IFwiYWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGlmKHR5cGVvZihzb2NrZXRJRCkgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBTb2NrZXRJRCBmb3VuZCFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pby5zb2NrZXRzLmNvbm5lY3RlZFtzb2NrZXRJRF0uZW1pdChtc2csIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZihtc2cgPT0gXCJsb2dcIikge1xuICAgICAgICAgICAgdGhpcy5pby5zb2NrZXRzLmVtaXQobXNnLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBicm9hZGNhc3QobXNnLCBkYXRhKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdChtc2csIGRhdGEsIHRoaXMucGxheWVyc0FycmF5W2ldLnNvY2tldElEKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzZXJ2ZXJGdWxsKHBsYXllcikge1xuICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3NlcnZlckZ1bGwnLCBkZXRhaWxzOiB7aWQ6IHBsYXllci5pZH19LCBwbGF5ZXIuc29ja2V0SUQpO1xuICAgIH1cbiAgICBcbn1cblxubW9kdWxlLmV4cG9ydHMuU2VwdGlrb24gPSBTZXB0aWtvbjtcbiIsImltcG9ydCBTZXB0aWtvbiBmcm9tICcuLi9wcmVmYWJzL3NlcHRpa29uJztcblxuY2xhc3MgQm9vdCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHByZWxvYWQoKSB7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdwcmVsb2FkZXInLCAnYXNzZXRzL3ByZWxvYWRlci5naWYnKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmdhbWUuaW5wdXQubWF4UG9pbnRlcnMgPSAxO1xuICAgIHRoaXMuZ2FtZS50aW1lLmFkdmFuY2VkVGltaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmdhbWUuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gdHJ1ZTtcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlJFU0laRTtcbiAgICAvL3NldHVwIGRldmljZSBzY2FsaW5nXG4gICAgaWYgKCF0aGlzLmdhbWUuZGV2aWNlLmRlc2t0b3ApIHtcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5wYXJlbnRJc1dpbmRvdyA9IHRydWU7XG4gICAgICB0aGlzLmdhbWUuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5SRVNJWkU7XG4gICAgICB0aGlzLmdhbWUuc2NhbGUubWluV2lkdGggPSAgNDgwO1xuICAgICAgdGhpcy5nYW1lLnNjYWxlLm1pbkhlaWdodCA9IDI2MDtcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5mb3JjZU9yaWVudGF0aW9uKHRydWUpO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdEdsb2JhbFZhcmlhYmxlcygpO1xuICAgIFxuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgncHJlbG9hZGVyJyk7XG4gIH1cblxuICBpbml0R2xvYmFsVmFyaWFibGVzKCl7XG4gICAgdGhpcy5nYW1lLmdsb2JhbCA9IHtcbiAgICAgIHNjb3JlOiAwLFxuICAgICAgbGFzdERpY2VSb2xsOiAwLFxuICAgIH07XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCb290O1xuIiwiaW1wb3J0IERpY2UgZnJvbSAnLi4vcHJlZmFicy9kaWNlJztcblxuY2xhc3MgR2FtZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBcbiAgY3JlYXRlKCkge1xuICBcbiAgICAvL3RoaXMuZ2FtZS5pbnB1dC5vbkRvd24uYWRkKHRoaXMudG9nZ2xlRnVsbHNjcmVlbiwgdGhpcyk7XG4gICAgdGhpcy5nYW1lLnN0YWdlLmRpc2FibGVWaXNpYmlsaXR5Q2hhbmdlID0gdHJ1ZTtcbiAgICBcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cCA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICB0aGlzLmdhbWUuaHVkR3JvdXAgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XG5cbiAgICB0aGlzLmdhbWUubW9kYWwgPSBuZXcgZ2FtZU1vZGFsKHRoaXMuZ2FtZSk7XG4gICAgdGhpcy5jcmVhdGVNb2RhbHMoKTtcblxuICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwnYmFja2dyb3VuZCcpO1xuICAgIHRoaXMuYmFja2dyb3VuZC5hbmNob3Iuc2V0VG8oMC41LDAuNSk7XG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2VudGVyWCA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYO1xuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNlbnRlclkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWTtcblxuICAgIHRoaXMuZ2FtZS5odWRCZyA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwnaHVkLWJnJyk7XG5cbiAgICB0aGlzLmdhbWUuZ28gPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSg0MCw4MCwndGV4dF9nbycpO1xuICAgIHRoaXMuZ2FtZS5nby5zY2FsZS5zZXRUbygwLjI1KTtcbiAgICB0aGlzLmdhbWUuZ28uaW5wdXRFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lLmdvLmZpbHRlcnMgPSBbdGhpcy5nYW1lLmFkZC5maWx0ZXIoJ0dyYXknKV07XG5cbiAgICB0aGlzLmdhbWUuZ28uY2xpY2tlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5nYW1lLnNlcHRpa29uLmNob29zaW5nVGFyZ2V0cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAnZ28nfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5nYW1lLmdvLmV2ZW50cy5vbklucHV0RG93bi5hZGQodGhpcy5nYW1lLmdvLmNsaWNrZWQsIHRoaXMpO1xuXG4gICAgdGhpcy5nYW1lLmdvLmVuYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmZpbHRlcnMgPSBudWxsO1xuICAgICAgICB0aGlzLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgfTtcblxuICAgIHRoaXMuZ2FtZS5nby5kaXNhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZmlsdGVycyA9IFt0aGlzLmdhbWUuYWRkLmZpbHRlcignR3JheScpXTtcbiAgICAgICAgdGhpcy5pbnB1dEVuYWJsZWQgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgdGhpcy5nYW1lLmRpY2UgPSBuZXcgRGljZSh0aGlzLmdhbWUsIDUwLCA0MCk7XG4gICAgdGhpcy5nYW1lLmRpY2Uuc2NhbGUuc2V0VG8oMC4yNSk7XG5cbiAgICB0aGlzLmdhbWUuYWRkLmV4aXN0aW5nKHRoaXMuZ2FtZS5kaWNlKTtcbiAgICBcbiAgICB0aGlzLmdhbWUuaHVkR3JvdXAuYWRkKHRoaXMuZ2FtZS5odWRCZyk7XG4gICAgdGhpcy5nYW1lLmh1ZEdyb3VwLmFkZCh0aGlzLmdhbWUuZGljZSk7XG4gICAgdGhpcy5nYW1lLmh1ZEdyb3VwLmFkZCh0aGlzLmdhbWUuZ28pO1xuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFkZCh0aGlzLmJhY2tncm91bmQpO1xuXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLmNyZWF0ZVRpbGVBcnJheSgzMSwgMjEsIHt4OjAtdGhpcy5iYWNrZ3JvdW5kLndpZHRoLzIsIHk6MC10aGlzLmJhY2tncm91bmQuaGVpZ2h0LzJ9KTtcblxuXG4gICAgdGhpcy5yZWZyZXNoQm9hcmQoKTtcblxuICB9XG5cblxuICBjcmVhdGVNb2RhbHMoKSB7XG4gICAgICB0aGlzLmdhbWUubW9kYWwuY3JlYXRlTW9kYWwoXG4gICAgICAgIHtcbiAgICAgICAgdHlwZTogXCJhc2tTdGFydFwiLFxuICAgICAgICBpbmNsdWRlQmFja2dyb3VuZDogZmFsc2UsXG4gICAgICAgIG1vZGFsQ2xvc2VPbklucHV0OiBmYWxzZSxcbiAgICAgICAgaXRlbXNBcnI6IFt7XG4gICAgICAgICAgICB0eXBlOiBcImdyYXBoaWNzXCIsXG4gICAgICAgICAgICBncmFwaGljQ29sb3I6IFwiMHhmZmZmZmZcIixcbiAgICAgICAgICAgIGdyYXBoaWNXaWR0aDogMzAwLFxuICAgICAgICAgICAgZ3JhcGhpY0hlaWdodDogMzAwLFxuICAgICAgICAgICAgZ3JhcGhpY1JhZGl1czogNDBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIkFyZSB5b3UgaGFwcHkgd2l0aFxcbiB0aGF0IGNsb25lIGxheW91dD9cIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTHVja2llc3QgR3V5XCIsXG4gICAgICAgICAgICBmb250U2l6ZTogMjIsXG4gICAgICAgICAgICBjb2xvcjogXCIweDFlMWUxZVwiLFxuICAgICAgICAgICAgb2Zmc2V0WTogLTUwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwidGV4dF95ZXNcIixcbiAgICAgICAgICAgIG9mZnNldFk6IDEwMCxcbiAgICAgICAgICAgIG9mZnNldFg6IC04MCxcbiAgICAgICAgICAgIGNvbnRlbnRTY2FsZTogMC42LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUubW9kYWwuaGlkZU1vZGFsKFwiYXNrU3RhcnRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OidzZXRQbGF5ZXJTdGF0ZScsIHZhbHVlOidzdGFydCd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxuICAgICAgICAgICAgY29udGVudDogXCJ0ZXh0X25vXCIsXG4gICAgICAgICAgICBvZmZzZXRZOiAxMDAsXG4gICAgICAgICAgICBvZmZzZXRYOiA4MCxcbiAgICAgICAgICAgIGNvbnRlbnRTY2FsZTogMC42LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUubW9kYWwuaGlkZU1vZGFsKFwiYXNrU3RhcnRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OidzZXRQbGF5ZXJTdGF0ZScsIHZhbHVlOidyZXNldCd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgXVxuICAgIH0pO1xuICB9XG5cbiAgcmVmcmVzaEJvYXJkKCkge1xuXG4gICAgdmFyIHNjYWxlID0gd2luZG93LmlubmVyV2lkdGgvdGhpcy5iYWNrZ3JvdW5kLmhlaWdodDtcbiAgICBpZihzY2FsZSA+IDEuOSkge1xuICAgICAgICBzY2FsZSA9IDEuOTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuc2NhbGUuc2V0VG8oc2NhbGUpO1xuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnggPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWDtcblxuICAgIGlmKHRoaXMuZ2FtZS5zZXB0aWtvbi5wbGF5ZXIuaWQgPT0gMSkge1xuICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSA9IC05MDsgXG4gICAgICAgIC8vdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZOyAvLyBDZW50ZXJlZCBvbiBTZXB0aWtvbiBMb2dvXG4gICAgICAgIC8vdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZICsgKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gb3Bwb25lbnQncyBzaWRlXG4gICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSAtICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIHRoaXMgcGxheWVyJ3Mgc2lkZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFuZ2xlID0gOTA7IFxuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWTsgLy8gQ2VudGVyZWQgb24gU2VwdGlrb24gTG9nb1xuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSArICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIG9wcG9uZW50J3Mgc2lkZVxuICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgLSAoKHRoaXMuYmFja2dyb3VuZC53aWR0aCpzY2FsZSktd2luZG93LmlubmVySGVpZ2h0KS8yOyAvLyBDZW50ZXJlZCBvbiB0aGlzIHBsYXllcidzIHNpZGVcbiAgICB9XG5cbiAgfVxuXG4gIFxuICB1cGRhdGUoKSB7XG4gICAgLy8gICB0aGlzLmRpY2UuZnJhbWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDE7XG4gICAgLy8gdGhpcy5nYW1lLmRlYnVnLnRleHQoJ01vdXNlJywgNzAwLCAzMik7XG4gICAgXG4gICAgLy8gdGhpcy5nYW1lLmRlYnVnLnRleHQoJ01vdXNlIFg6ICcgKyB0aGlzLmdhbWUuaW5wdXQueCwgNzAwLCA2NCk7XG4gICAgLy8gdGhpcy5nYW1lLmRlYnVnLnRleHQoJ01vdXNlIFk6ICcgKyB0aGlzLmdhbWUuaW5wdXQueSwgNzAwLCA5Mik7XG4gIH1cbiAgXG4gIHJlbmRlciAoKSB7XG4gICAgICB0aGlzLnJlZnJlc2hCb2FyZCgpO1xuICAgICAgLypcblxuICAgIHZhciB4ID0gMzI7XG4gICAgdmFyIHkgPSAwO1xuICAgIHZhciB5aSA9IDMyO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdWaWV3cG9ydCcsIHgsIHkgKz0geWkpO1xuXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ1ZpZXdwb3J0IFdpZHRoOiAnICsgdGhpcy5nYW1lLnNjYWxlLnZpZXdwb3J0V2lkdGgsIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd3aW5kb3cuaW5uZXJXaWR0aDogJyArIHdpbmRvdy5pbm5lcldpZHRoLCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93Lm91dGVyV2lkdGg6ICcgKyB3aW5kb3cub3V0ZXJXaWR0aCwgeCwgeSArPSB5aSk7XG5cbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnVmlld3BvcnQgSGVpZ2h0OiAnICsgdGhpcy5nYW1lLnNjYWxlLnZpZXdwb3J0SGVpZ2h0LCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93LmlubmVySGVpZ2h0OiAnICsgd2luZG93LmlubmVySGVpZ2h0LCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93Lm91dGVySGVpZ2h0OiAnICsgd2luZG93Lm91dGVySGVpZ2h0LCB4LCB5ICs9IHlpKTtcblxuICAgIC8vICBEZXZpY2U6IEhvdyB0byBnZXQgZGV2aWNlIHNpemUuXG5cbiAgICAvLyAgVXNlIHdpbmRvdy5zY3JlZW4ud2lkdGggZm9yIGRldmljZSB3aWR0aCBhbmQgd2luZG93LnNjcmVlbi5oZWlnaHQgZm9yIGRldmljZSBoZWlnaHQuIFxuICAgIC8vICAuYXZhaWxXaWR0aCBhbmQgLmF2YWlsSGVpZ2h0IGdpdmUgeW91IHRoZSBkZXZpY2Ugc2l6ZSBtaW51cyBVSSB0YXNrYmFycy4gKFRyeSBvbiBhbiBpUGhvbmUuKSBcbiAgICAvLyAgRGV2aWNlIHNpemUgaXMgc3RhdGljIGFuZCBkb2VzIG5vdCBjaGFuZ2Ugd2hlbiB0aGUgcGFnZSBpcyByZXNpemVkIG9yIHJvdGF0ZWQuXG5cbiAgICB4ID0gMzUwO1xuICAgIHkgPSAwO1xuXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ0JvYXJkIEdyb3VwJywgeCwgeSArPSB5aSk7XG5cbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5nYW1lLmJvYXJkR3JvdXAueDogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLngsIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC55OiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAueSwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoOiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGgsIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC5oZWlnaHQ6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC5oZWlnaHQsIHgsIHkgKz0geWkpO1xuXG4gICAgeCA9IDMyO1xuICAgIHkgPSAzMDA7XG5cbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnQmFja2dyb3VuZCBEZXRhaWwnLCB4LCB5ICs9IHlpKTtcblxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQueDogJyArIHRoaXMuYmFja2dyb3VuZC54LCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLnk6ICcgKyB0aGlzLmJhY2tncm91bmQueSwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC53aWR0aDogJyArIHRoaXMuYmFja2dyb3VuZC53aWR0aCwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC5oZWlnaHQ6ICcgKyB0aGlzLmJhY2tncm91bmQuaGVpZ2h0LCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLnNjYWxlOiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAuc2NhbGUueCwgeCwgeSArPSB5aSk7XG4gICAgKi9cbiAgICB9XG4gICAgXG4gIHRvZ2dsZUZ1bGxzY3JlZW4oKSB7XG4gICAgaWYodGhpcy5nYW1lLnNjYWxlLmlzRnVsbFNjcmVlbikge1xuICAgICAgICB0aGlzLmdhbWUuc2NhbGUuc3RvcEZ1bGxTY3JlZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdhbWUuc2NhbGUuc3RhcnRGdWxsU2NyZWVuKGZhbHNlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImNsYXNzIE1lbnUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgLy9hZGQgYmFja2dyb3VuZCBpbWFnZVxuICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwnYmFja2dyb3VuZCcpO1xuICAgIHRoaXMuYmdSYXRpbyA9IHRoaXMuYmFja2dyb3VuZC50ZXh0dXJlLndpZHRoIC8gdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUuaGVpZ2h0O1xuICAgIHRoaXMud29ybGRSYXRpbyA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAvIHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQ7XG4gICAgaWYgKCgodGhpcy53b3JsZFJhdGlvIC0gdGhpcy5iZ1JhdGlvKSAvIDIgKiB0aGlzLmdhbWUud29ybGQud2lkdGgpID4gMCkge1xuICAgICAgICB0aGlzLmJhY2tncm91bmQud2lkdGggPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0L3RoaXMuYmFja2dyb3VuZC50ZXh0dXJlLmhlaWdodCp0aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC54ID0gKHRoaXMuZ2FtZS53b3JsZC53aWR0aCAtIHRoaXMuYmFja2dyb3VuZC53aWR0aCkgLyAyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aC90aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aCp0aGlzLmJhY2tncm91bmQudGV4dHVyZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC55ID0gKHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgLSB0aGlzLmJhY2tncm91bmQuaGVpZ2h0KSAvIDI7XG4gICAgfVxuXG4gICAgLy9hZGQgaW50cm8gdGV4dFxuICAgIHRoaXMuZ2FtZW92ZXJUZXh0ID0gdGhpcy5hZGQudGV4dCh0aGlzLmdhbWUud29ybGQuY2VudGVyWCx0aGlzLmdhbWUud29ybGQuY2VudGVyWSwgXCJTY29yZSA9IFwiK3RoaXMuZ2FtZS5nbG9iYWwuc2NvcmUsIHtcbiAgICAgIGZvbnQ6ICc0MnB4IEFyaWFsJywgZmlsbDogJyNmZmZmZmYnLCBhbGlnbjogJ2NlbnRlcidcbiAgICB9KTtcbiAgICB0aGlzLmdhbWVvdmVyVGV4dC5hbmNob3Iuc2V0KDAuNSk7XG5cbiAgICB0aGlzLmlucHV0Lm9uRG93bi5hZGQodGhpcy5vbklucHV0RG93biwgdGhpcyk7XG5cbiAgICAvL3ByZXZlbnQgYWNjaWRlbnRhbCBjbGljay10aHJ1IGJ5IG5vdCBhbGxvd2luZyBzdGF0ZSB0cmFuc2l0aW9uIGZvciBhIHNob3J0IHRpbWVcbiAgICB0aGlzLmNhbkNvbnRpbnVlVG9OZXh0U3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKFBoYXNlci5UaW1lci5TRUNPTkQgKiAwLjUsIGZ1bmN0aW9uKCl7IHRoaXMuY2FuQ29udGludWVUb05leHRTdGF0ZSA9IHRydWU7IH0sIHRoaXMpO1xuXG4gICAgdGhpcy5zYXZlVmFyc1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgdGhpcy5yZXNldEdsb2JhbFZhcmlhYmxlcygpO1xuICB9XG5cbiAgc2F2ZVZhcnNUb0xvY2FsU3RvcmFnZSgpe1xuICAgIHZhciBtYXggPSBsb2NhbFN0b3JhZ2UubWF4U2NvcmUgfHwgMDsgLy9kZWZhdWx0IHZhbHVlIG9mIDAgaXMgaXQgZG9lcyBub3QgZXhpc3RcbiAgICBpZiAodGhpcy5nYW1lLmdsb2JhbC5zY29yZSA+IG1heCl7IGxvY2FsU3RvcmFnZS5tYXhTY29yZSA9IHRoaXMuZ2FtZS5nbG9iYWwuc2NvcmU7IH1cbiAgfVxuXG4gIHJlc2V0R2xvYmFsVmFyaWFibGVzKCl7XG4gICAgdGhpcy5nYW1lLmdsb2JhbC5zY29yZSA9IDA7XG4gIH1cbiAgdXBkYXRlKCkge31cblxuICBvbklucHV0RG93biAoKSB7XG4gICAgaWYodGhpcy5jYW5Db250aW51ZVRvTmV4dFN0YXRlKXtcbiAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnbWVudScpO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iLCJjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hc3NldCA9IG51bGw7XG4gICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICB9XG5cbiAgcHJlbG9hZCgpIHtcbiAgICAvL3NldHVwIGxvYWRpbmcgYmFyXG4gICAgdGhpcy5hc3NldCA9IHRoaXMuYWRkLnNwcml0ZSh0aGlzLmdhbWUud2lkdGggKiAwLjUgLSAxMTAsIHRoaXMuZ2FtZS5oZWlnaHQgKiAwLjUgLSAxMCwgJ3ByZWxvYWRlcicpO1xuICAgIHRoaXMubG9hZC5zZXRQcmVsb2FkU3ByaXRlKHRoaXMuYXNzZXQpO1xuICAgIFxuICAgIC8vU2V0dXAgbG9hZGluZyBhbmQgaXRzIGV2ZW50c1xuICAgIHRoaXMubG9hZC5vbkxvYWRDb21wbGV0ZS5hZGRPbmNlKHRoaXMub25Mb2FkQ29tcGxldGUsIHRoaXMpO1xuICAgIHRoaXMubG9hZFJlc291cmNlcygpO1xuICB9XG5cbiAgbG9hZFJlc291cmNlcygpIHtcbiAgICAgIFxuICAgIC8vTUVOVSBSRVNPVVJDRVNcbiAgICAvL21lbnUgYmFja2dyb3VuZFxuICAgIC8vdGV4dCBpbWFnZXNcbiAgICAvL211c2ljIGZpbGVzID9cbiAgICAvLyAgTG9hZCBmaWx0ZXIgc2NyaXB0c1xuICAgIC8vIHRoaXMuZ2FtZS5sb2FkLnNjcmlwdCgnZ3JheScsICdodHRwczovL2Nkbi5yYXdnaXQuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9tYXN0ZXIvdjIvZmlsdGVycy9HcmF5LmpzJyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuc2NyaXB0KCdncmF5JywgJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyLWNlL21hc3Rlci9maWx0ZXJzL0dyYXkuanMnKTtcblxuICAgIFxuICAgIC8vbG9hZCBnYW1lIGRhdGFcbiAgICB0aGlzLmdhbWUubG9hZC5qc29uKCd0aWxlRGV0YWlsJywgJ2Fzc2V0cy90aWxlRGV0YWlsLmpzb24nKTtcbiAgICB0aGlzLmdhbWUubG9hZC5qc29uKCd3YWxsR3JpZCcsICdhc3NldHMvd2FsbEdyaWQuanNvbicpO1xuICBcbiAgICAvL0dBTUUgUkVTT1VSQ0VTXG4gICAgLy9nYW1lIGJvYXJkIGJhY2tncm91bmRcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnYmFja2dyb3VuZCcsJ2Fzc2V0cy9tZWRpdW1fYm9hcmQucG5nJyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ2RpY2UnLCdhc3NldHMvZGljZS5wbmcnLCAxMjgsIDE5NCwgMTApO1xuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdodWQtYmcnLCdhc3NldHMvaHVkLWJnLnBuZycpO1xuICAgIFxuICAgIC8vIG1vZGFsIGltYWdlc1xuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X3llcycsJ2Fzc2V0cy90ZXh0X3llcy5wbmcnKTtcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9ubycsJ2Fzc2V0cy90ZXh0X25vLnBuZycpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X2dvJywnYXNzZXRzL3RleHRfZ28ucG5nJyk7XG5cbiAgICAvL3BsYXllciB0b2tlbnMgc3ByaXRlc2hlZXRzXG4gICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ2Nsb25lJywgJ2Fzc2V0cy9jbG9uZS5wbmcnLCAxMTAsIDE2OCk7XG4gICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ29yZG5hbmNlJywgJ2Fzc2V0cy9vcmRuYW5jZS5wbmcnLDI2NCwgMjY0LCA3KTtcbiAgICB0aGlzLmdhbWUubG9hZC5hdGxhcygnYm9vbScsICdhc3NldHMvYm9vbS5wbmcnLCAnYXNzZXRzL2Jvb20uanNvbicsIFBoYXNlci5Mb2FkZXIuVEVYVFVSRV9BVExBU19KU09OX0hBU0gpO1xuXG4gICAgLy9hdWRpbyBmaWxlcyBcbiAgICBcbiAgICAvL3RoaXMuZ2FtZS5sb2FkLmltYWdlKCdjcm9zc2hhaXJzJywgJ2Fzc2V0cy9jcm9zc2hhaXJfcmVkX3NtYWxsLnBuZycpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X2dvJywgJ2Fzc2V0cy90ZXh0X2dvLnBuZycpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X3JlYWR5JywgJ2Fzc2V0cy90ZXh0X3JlYWR5LnBuZycpO1xuXG4gICAgLy90aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgndGFyZ2V0JywgJ2Fzc2V0cy90YXJnZXQucG5nJywxMjguNjYsMTI4KTtcblxuICAgIC8vdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ2d1bnNob3QnLCdhc3NldHMvZ3Vuc2hvdC53YXYnKTtcbiAgICAvL3RoaXMuZ2FtZS5sb2FkLmF1ZGlvKCdkaW5nJywnYXNzZXRzL2Rpbmcud2F2Jyk7XG4gIH1cblxuICBvbkxvYWRDb21wbGV0ZSgpIHtcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ3NldHVwJyk7XG4gICAgLy90aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ2dhbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmVsb2FkZXI7XG4iLCJpbXBvcnQgU2VwdGlrb24gZnJvbSAnLi4vcHJlZmFicy9zZXB0aWtvbic7XG5cbmNsYXNzIFNlcnZlckZ1bGwgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgY29uc29sZS5sb2coXCJTZXJ2ZXIgaXMgZnVsbC4gVHJ5IGFnYWluIGxhdGVyLlwiKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2ZXJGdWxsO1xuIiwiY2xhc3MgU2V0dXAgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gfVxuICBcbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuZ2FtZS5uYW1lID0gXCJ1c2VyXCI7XG5cbiAgICB0aGlzLmdhbWUuc3RhZ2UuZGlzYWJsZVZpc2liaWxpdHlDaGFuZ2UgPSB0cnVlO1xuICAgIFxuICAgIC8vIHRoaXMuZ2FtZS5tb2RhbCA9IG5ldyBnYW1lTW9kYWwodGhpcy5nYW1lKTtcbiAgICAvLyB0aGlzLmNyZWF0ZU1vZGFscygpO1xuICAgIC8vIHRoaXMuZ2FtZS5tb2RhbC5zaG93TW9kYWwoJ3VzZXJuYW1lJyk7XG5cbiAgICAvLyB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkQ2FsbGJhY2tzKHRoaXMsIG51bGwsIG51bGwsIHRoaXMua2V5UHJlc3MpO1xuICAgIC8vIHRoaXMuYmtzcCA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleWJvYXJkLkJBQ0tTUEFDRSk7XG4gICAgLy8gdGhpcy5ia3NwLm9uRG93bi5hZGQodGhpcy5rZXlQcmVzcywgdGhpcyk7XG4gICAgLy8gdGhpcy5lbnRlciA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleWJvYXJkLkVOVEVSKTtcbiAgICAvLyB0aGlzLmVudGVyLm9uRG93bi5hZGQodGhpcy5rZXlQcmVzcywgdGhpcyk7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5hc2tOZXdQbGF5ZXIoKTtcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ2dhbWUnKTtcbiAgICByZXR1cm47XG4gICAgLy90aGlzLmdhbWUuc2VwdGlrb24uc2V0dXAoKTtcbiAgICBcbn1cblxua2V5UHJlc3MoY2hhcikge1xuXG4gICAgaWYodHlwZW9mKGNoYXIpID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGlmIChjaGFyLmV2ZW50LmNvZGUgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhci5ldmVudC5jb2RlID09PSBcIkJhY2tzcGFjZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubmFtZSA9IHRoaXMuZ2FtZS5uYW1lLnN1YnN0cmluZygwLCB0aGlzLmdhbWUubmFtZS5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjaGFyID09IFwiIFwiKSB7XG4gICAgICAgICAgICBjaGFyID0gXCJfXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nYW1lLm5hbWUgKz0gY2hhcjtcbiAgICB9XG4gICAgdGhpcy5nYW1lLm1vZGFsLnVwZGF0ZU1vZGFsVmFsdWUodGhpcy5nYW1lLm5hbWUsICd1c2VybmFtZScsIDQpO1xufVxuICBcbiAgY3JlYXRlTW9kYWxzKCkge1xuICBcbiAgICAvLyBTdGFydCBHYW1lXG4gICAgdGhpcy5nYW1lLm1vZGFsLmNyZWF0ZU1vZGFsKFxuICAgICAgICB7XG4gICAgICAgIHR5cGU6IFwidXNlcm5hbWVcIixcbiAgICAgICAgaW5jbHVkZUJhY2tncm91bmQ6IHRydWUsXG4gICAgICAgIG1vZGFsQ2xvc2VPbklucHV0OiB0cnVlLFxuICAgICAgICBpdGVtc0FycjogW3tcbiAgICAgICAgICAgIHR5cGU6IFwiZ3JhcGhpY3NcIixcbiAgICAgICAgICAgIGdyYXBoaWNDb2xvcjogXCIweGZmZmZmZlwiLFxuICAgICAgICAgICAgZ3JhcGhpY1dpZHRoOiAzMDAsXG4gICAgICAgICAgICBncmFwaGljSGVpZ2h0OiAzMDAsXG4gICAgICAgICAgICBncmFwaGljUmFkaXVzOiA0MFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiVHlwZSBhIHVzZXJuYW1lLFxcbnRoZW4gaGl0IDxFTlRFUj5cXG5cXG4obWF4IG9mIDI1IGNoYXJhY3RlcnMpXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkx1Y2tpZXN0IEd1eVwiLFxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxuICAgICAgICAgICAgY29sb3I6IFwiMHgxZTFlMWVcIixcbiAgICAgICAgICAgIG9mZnNldFk6IC01MFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuZ2FtZS5uYW1lLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiAyMixcbiAgICAgICAgICAgIGNvbG9yOiBcIjB4MWUxZTFlXCIsXG4gICAgICAgICAgICBvZmZzZXRZOiA1MFxuICAgICAgICB9LCBdXG4gICAgfSk7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXR1cDtcbiJdfQ==
