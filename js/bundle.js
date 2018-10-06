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
            if (data.type == "arms") {
                console.log("update personnel arms!");
                console.log(data);
                this.septikon.updateArms(data);
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
    _this.angle = _this.game.personnelGroup.angle * -1;

    _this.currentTileCoordinates = _this.game.septikon.pixelsToTile(_this.x, _this.y);
    _this.game.septikon.tileArray[_this.currentTileCoordinates.x][_this.currentTileCoordinates.y].tileOccupied = true;
    _this.game.personnelGroup.add(_this);
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
            // MOVE personnel

            if (data.details.action === "add") {
                console.log("adding personnel");
                this.addPersonnel(data.details.personnel, data.details.playerID);
            }

            if (data.details.action === "remove") {
                console.log("removing personnel");
                this.removePersonnel(data.details.personnel, data.details.playerID);
            }

            if (data.details.action === "move") {
                console.log("moving personnel");
                for (var j = 0; j < this.player.personnelArray.length; j++) {
                    var myPerson = this.player.personnelArray[j];
                    if (myPerson.uuid === data.details.personnel.uuid) {
                        var point = this.tileToPixels(data.details.personnel.x, data.details.personnel.y);
                        var distance = Math.abs(myPerson.y - point.y + myPerson.x - point.x).toFixed(1);
                        this.game.add.tween(myPerson).to({ x: point.x, y: point.y }, distance * 11, Phaser.Easing.Cubic.Out, true);
                        this.player.personnelArray[j] = data.details.personnel;
                    }
                }
                console.log(data);
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
            console.log(this.game.personnelGroup.children);
            for (var i = 0; i < this.game.personnelGroup.children.length; i++) {
                if (this.game.personnelGroup.children[i].uuid === data.uuid) {
                    this.game.personnelGroup.children[i].destroy();
                }
            }
            console.log(this.game.personnelGroup.children);
            return true;
            //   for (let i = 0; i < this.player.personnelArray.length; i++) {
            //       if (this.player.personnelArray[i].uuid == data.uuid) {
            //           let personnelToDestroy = this.player.personnelArray[i];
            //           this.player.personnelArray.splice(i,1);
            //           personnelToDestroy.destroy();
            //           return true;
            //       }
            //   }
            //   return false;
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
        this.armsArray = [false, false, false];
        this.armsEnum = Object.freeze({
            EXPLOSIVES: 0,
            DRILL: 1,
            CANNON: 2
        });
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
        key: 'addArms',
        value: function addArms(type) {
            this.armsArray[type] = true;
        }
    }, {
        key: 'removeArms',
        value: function removeArms(type) {
            this.armsArray[type] = false;
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
            var player = this.getPlayerBySocketID(data.socketID); // DOES THIS ALLOW BOTH PLAYERS TO INTERACT?!?!

            // (1) Check gamestate
            // (2) Check turnphase
            // (3) Check phasestep

            if (this.gameStateEnum.SETUP === this.gameState) {
                if (data.event === "confirmClicked" && player.readyToStart === false) {
                    if (player.personnelArray.length === player.startingCloneCount) {
                        this.emit('request', { callback: "modal", details: { type: "askStart" } }, player.socketID);
                    }
                } else if (data.event === "tileClicked" && player.readyToStart === false) {
                    for (var i = 0; i < player.personnelArray.length; i++) {
                        var personnel = player.personnelArray[i];
                        if (data.x === personnel.x && data.y === personnel.y) {
                            player.personnelArray.splice(i, 1);
                            this.emit('update', { type: "personnel", details: { personnel: personnel, action: 'remove', playerID: player.id } });
                            this.emit('update', { type: "tile", details: [{ x: data.x, y: data.y, occupied: false }] });
                            return;
                        }
                    }
                    var clone = this.placeClone(player, data.x, data.y);
                    if (clone !== false) {
                        this.emit('update', { type: "personnel", details: { personnel: clone, action: 'add', playerID: player.id } });
                        this.emit('update', { type: "tile", details: [{ x: data.x, y: data.y, occupied: true }] });
                    }
                }
            } else if (this.gameStateEnum.GAME === this.gameState) {
                // This gamestate has phases (or "this.turnstate"):
                // (1) - rolling die
                // (2) - moving a clone
                // (3) - tile activation
                // (4) - moving biodrone(s)
                // (5) - moving rockets
                // (6) - assessing damage
                // (7) - check victory

                if (this.turnStateEnum.ROLL === this.turnState) {
                    if (data.event === "diceClicked" && this.activePlayer.socketID === data.socketID) {
                        this.currentDiceValue = Math.floor(Math.random() * 6) + 1;
                        this.activePlayer.currentLegalPieces = this.getLegalPieces();
                        this.emit('update', { type: "dice", details: { value: this.currentDiceValue, gamePieces: this.activePlayer.currentLegalPieces } });
                        this.turnState++;
                    }
                } else if (this.turnStateEnum.MOVE === this.turnState && data.event === "tileClicked") {
                    var selectedClone = this.activePlayer.getPersonnelByPoint({ x: data.x, y: data.y });
                    var doesSelectedCloneHaveLegalMoves = this.activePlayer.checkPersonnelMove(selectedClone);

                    if (this.activePlayer.selectedPersonnelToMove === null) {
                        if (selectedClone === false || doesSelectedCloneHaveLegalMoves === false) {
                            return;
                        } else {
                            this.activePlayer.selectedPersonnelToMove = selectedClone;
                            var pointArray = this.getLegalMoves(selectedClone, this.currentDiceValue, { x: selectedClone.x, y: selectedClone.y });
                            this.emit('action', { callback: 'showTiles', details: [{ x: data.x, y: data.y }] }, this.activePlayer.socketID);
                            this.emit('action', { callback: 'showTiles', details: pointArray }, this.activePlayer.socketID);
                            return;
                        }
                    } else {
                        this.emit('action', { callback: 'hideTiles', details: null }, this.activePlayer.socketID);
                        selectedClone = this.activePlayer.selectedPersonnelToMove;
                        if (selectedClone.x === data.x && selectedClone.y === data.y) {
                            this.activePlayer.selectedPersonnelToMove = null;
                            return;
                        } else if (this.activePlayer.checkPersonnelMove(selectedClone, { x: data.x, y: data.y }) === true) {
                            var originalTile = this.getTile(selectedClone.x, selectedClone.y);
                            var newTile = this.getTile(data.x, data.y);
                            selectedClone.move(data.x, data.y);
                            if (originalTile.type === "surface") {
                                selectedClone.isGunner = false;
                            }
                            if (newTile.type === "surface") {
                                selectedClone.isGunner = true;
                            }
                            this.emit('update', { type: "personnel", details: { personnel: selectedClone, action: 'move', playerID: this.activePlayer.id } });
                            this.emit('update', { type: "tile", details: [{ x: originalTile.x, y: originalTile.y, occupied: false }] });
                            this.emit('update', { type: "tile", details: [{ x: newTile.x, y: newTile.y, occupied: true }] });
                            if (originalTile.type === "armory") {
                                this.activePlayer.removeArms(originalTile.name.toUpperCase());
                                this.emit('update', { type: "arms", details: { type: originalTile.name, action: "remove" } });
                            }
                            if (newTile.type === "armory") {
                                this.activePlayer.addArms(newTile.name.toUpperCase());
                                this.emit('update', { type: "arms", details: { type: newTile.name, action: "add" } });
                            }
                            return;
                        }
                    }
                }
            } else if (this.gameState === this.gameStateEnum.PAUSE) {} else if (this.gameState === this.gameStateEnum.GAMEOVER) {} else if (this.gameState === this.gameStateEnum.SERVERFULL) {}
        }
    }, {
        key: 'clicked',
        value: function clicked(data) {

            // Process the click from the client. 
            // Client should do NO rule processing. Pass the click from client to server; process the data; tell the client what to do.
            // Basically, check game state and turn state.

            switch (this.gameState) {

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
                case 'start':
                    player = this.getPlayerBySocketID(state.socketID);
                    player.readyToStart = true;
                    var opponent = this.getPlayerOpponent(player);
                    if (!opponent || !opponent.readyToStart) {
                        return;
                    } else {
                        this.activePlayer = this.getRandomPlayer();
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
            return false;
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
            this.game.personnelGroup = this.game.add.group();
            this.game.ordnanceGroup = this.game.add.group();
            this.game.resourcesGroup = this.game.add.group();
            this.game.hudGroup = this.game.add.group();

            this.game.modal = new gameModal(this.game);
            this.createModals();

            this.background = this.game.add.sprite(0, 0, 'background');
            this.background.anchor.setTo(0.5, 0.5);
            this.game.boardGroup.centerX = this.game.personnelGroup.centerX = this.game.ordnanceGroup.centerX = this.game.resourcesGroup.centerX = this.game.world.centerX;
            this.game.boardGroup.centerY = this.game.personnelGroup.centerY = this.game.ordnanceGroup.centerY = this.game.resourcesGroup.centerY = this.game.world.centerY;

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
            this.game.personnelGroup.scale.setTo(scale);
            this.game.ordnanceGroup.scale.setTo(scale);
            this.game.resourcesGroup.scale.setTo(scale);
            this.game.boardGroup.scale.setTo(scale);
            this.game.personnelGroup.scale = this.game.ordnanceGroup.scale = this.game.resourcesGroup.scale = this.game.boardGroup.scale;
            this.game.boardGroup.x = this.game.world.centerX;
            this.game.personnelGroup.x = this.game.ordnanceGroup.x = this.game.resourcesGroup.x = this.game.boardGroup.x;

            if (this.game.septikon.player.id == 1) {
                this.game.personnelGroup.angle = this.game.ordnanceGroup.angle = this.game.resourcesGroup.angle = this.game.boardGroup.angle = -90;
                //this.game.boardGroup.y = this.game.world.centerY; // Centered on Septikon Logo
                //this.game.boardGroup.y = this.game.world.centerY + ((this.background.width*scale)-window.innerHeight)/2; // Centered on opponent's side
                this.game.personnelGroup.y = this.game.ordnanceGroup.y = this.game.resourcesGroup.y = this.game.boardGroup.y = this.game.world.centerY - (this.background.width * scale - window.innerHeight) / 2; // Centered on this player's side
            } else {
                this.game.personnelGroup.angle = this.game.ordnanceGroup.angle = this.game.resourcesGroup.angle = this.game.boardGroup.angle = 90;
                //this.game.boardGroup.y = this.game.world.centerY; // Centered on Septikon Logo
                //this.game.boardGroup.y = this.game.world.centerY + ((this.background.width*scale)-window.innerHeight)/2; // Centered on opponent's side
                this.game.personnelGroup.y = this.game.ordnanceGroup.y = this.game.resourcesGroup.y = this.game.boardGroup.y = this.game.world.centerY - (this.background.width * scale - window.innerHeight) / 2; // Centered on this player's side
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvdGlsZURldGFpbC5qc29uIiwiYXNzZXRzL3dhbGxHcmlkLmpzb24iLCJub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsInNyYy9tYWluLmpzIiwic3JjL21vZGFsLmpzIiwic3JjL3ByZWZhYnMvYmlvZHJvbmUuanMiLCJzcmMvcHJlZmFicy9jbGllbnQuanMiLCJzcmMvcHJlZmFicy9jbG9uZS5qcyIsInNyYy9wcmVmYWJzL2NvbmZpcm0uanMiLCJzcmMvcHJlZmFicy9jcm9zc2hhaXJzLmpzIiwic3JjL3ByZWZhYnMvZGljZS5qcyIsInNyYy9wcmVmYWJzL21hc3Rlci5qcyIsInNyYy9wcmVmYWJzL29yZG5hbmNlLmpzIiwic3JjL3ByZWZhYnMvcGVyc29ubmVsLmpzIiwic3JjL3ByZWZhYnMvcmVzb3VyY2VzLmpzIiwic3JjL3ByZWZhYnMvc2VwdGlrb24uanMiLCJzcmMvcHJlZmFicy90ZWFtLmpzIiwic3JjL3NlcnZlci9vcmRuYW5jZS5qcyIsInNyYy9zZXJ2ZXIvcGVyc29ubmVsLmpzIiwic3JjL3NlcnZlci9wbGF5ZXIuanMiLCJzcmMvc2VydmVyL3Jlc291cmNlLmpzIiwic3JjL3NlcnZlci9zZXB0aWtvbi5qcyIsInNyYy9zdGF0ZXMvYm9vdC5qcyIsInNyYy9zdGF0ZXMvZ2FtZS5qcyIsInNyYy9zdGF0ZXMvZ2FtZW92ZXIuanMiLCJzcmMvc3RhdGVzL3ByZWxvYWRlci5qcyIsInNyYy9zdGF0ZXMvc2VydmVyRnVsbC5qcyIsInNyYy9zdGF0ZXMvc2V0dXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdCQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7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LDBCQUFNLE1BRFA7QUFFQyw2QkFBUyw4REFGVjtBQUdDLGdDQUFZLGNBSGI7QUFJQyw4QkFBVSxFQUpYO0FBS0MsMkJBQU8sVUFMUjtBQU1DLDZCQUFTLENBQUM7QUFOWCxpQkFOTyxFQWFQO0FBQ0MsMEJBQU0sTUFEUDtBQUVDLDZCQUFTLEtBQUssSUFBTCxDQUFVLElBRnBCO0FBR0MsZ0NBQVksY0FIYjtBQUlDLDhCQUFVLEVBSlg7QUFLQywyQkFBTyxVQUxSO0FBTUMsNkJBQVM7QUFOVixpQkFiTztBQUpWLGFBREo7QUE0QkQ7Ozs7RUE1RWlCLE9BQU8sSzs7a0JBK0VaLEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJtb2R1bGUuZXhwb3J0cz17XG5cdFwidGlsZVByb3BlcnR5QXJyYXlcIjoge1xuXHRcdFwib3RoZXJTcGFjZVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDAwXCIsXG5cdFx0XHRcInR5cGVcIjogXCJzcGFjZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwic3BhY2VcIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjksMFwiLCBcIjksMVwiLCBcIjksMlwiLCBcIjksM1wiLCBcIjksNFwiLCBcIjksNVwiLCBcIjksNlwiLCBcIjksN1wiLCBcIjksOFwiLCBcIjksOVwiLCBcIjksMTBcIiwgXCI5LDExXCIsIFwiOSwxMlwiLCBcIjksMTNcIiwgXCI5LDE0XCIsIFwiOSwxNVwiLCBcIjksMTZcIiwgXCI5LDE3XCIsIFwiOSwxOFwiLCBcIjksMTlcIiwgXCI5LDIwXCIsIFwiMTAsMFwiLCBcIjEwLDFcIiwgXCIxMCwyXCIsIFwiMTAsM1wiLCBcIjEwLDRcIiwgXCIxMCw1XCIsIFwiMTAsNlwiLCBcIjEwLDdcIiwgXCIxMCw4XCIsIFwiMTAsOVwiLCBcIjEwLDEwXCIsIFwiMTAsMTFcIiwgXCIxMCwxMlwiLCBcIjEwLDEzXCIsIFwiMTAsMTRcIiwgXCIxMCwxNVwiLCBcIjEwLDE2XCIsIFwiMTAsMTdcIiwgXCIxMCwxOFwiLCBcIjEwLDE5XCIsIFwiMTAsMjBcIiwgXCIxMSwwXCIsIFwiMTEsMVwiLCBcIjExLDJcIiwgXCIxMSwzXCIsIFwiMTEsNFwiLCBcIjExLDVcIiwgXCIxMSw2XCIsIFwiMTEsN1wiLCBcIjExLDhcIiwgXCIxMSw5XCIsIFwiMTEsMTBcIiwgXCIxMSwxMVwiLCBcIjExLDEyXCIsIFwiMTEsMTNcIiwgXCIxMSwxNFwiLCBcIjExLDE1XCIsIFwiMTEsMTZcIiwgXCIxMSwxN1wiLCBcIjExLDE4XCIsIFwiMTEsMTlcIiwgXCIxMSwyMFwiLCBcIjEyLDBcIiwgXCIxMiwxXCIsIFwiMTIsMlwiLCBcIjEyLDNcIiwgXCIxMiw0XCIsIFwiMTIsNVwiLCBcIjEyLDZcIiwgXCIxMiw3XCIsIFwiMTIsOFwiLCBcIjEyLDlcIiwgXCIxMiwxMFwiLCBcIjEyLDExXCIsIFwiMTIsMTJcIiwgXCIxMiwxM1wiLCBcIjEyLDE0XCIsIFwiMTIsMTVcIiwgXCIxMiwxNlwiLCBcIjEyLDE3XCIsIFwiMTIsMThcIiwgXCIxMiwxOVwiLCBcIjEyLDIwXCIsIFwiMTMsMFwiLCBcIjEzLDFcIiwgXCIxMywyXCIsIFwiMTMsM1wiLCBcIjEzLDRcIiwgXCIxMyw1XCIsIFwiMTMsNlwiLCBcIjEzLDdcIiwgXCIxMyw4XCIsIFwiMTMsOVwiLCBcIjEzLDEwXCIsIFwiMTMsMTFcIiwgXCIxMywxMlwiLCBcIjEzLDEzXCIsIFwiMTMsMTRcIiwgXCIxMywxNVwiLCBcIjEzLDE2XCIsIFwiMTMsMTdcIiwgXCIxMywxOFwiLCBcIjEzLDE5XCIsIFwiMTMsMjBcIiwgXCIxNCwwXCIsIFwiMTQsMVwiLCBcIjE0LDJcIiwgXCIxNCwzXCIsIFwiMTQsNFwiLCBcIjE0LDVcIiwgXCIxNCw2XCIsIFwiMTQsN1wiLCBcIjE0LDhcIiwgXCIxNCw5XCIsIFwiMTQsMTBcIiwgXCIxNCwxMVwiLCBcIjE0LDEyXCIsIFwiMTQsMTNcIiwgXCIxNCwxNFwiLCBcIjE0LDE1XCIsIFwiMTQsMTZcIiwgXCIxNCwxN1wiLCBcIjE0LDE4XCIsIFwiMTQsMTlcIiwgXCIxNCwyMFwiLCBcIjE1LDBcIiwgXCIxNSwxXCIsIFwiMTUsMlwiLCBcIjE1LDNcIiwgXCIxNSw0XCIsIFwiMTUsNVwiLCBcIjE1LDZcIiwgXCIxNSw3XCIsIFwiMTUsOFwiLCBcIjE1LDlcIiwgXCIxNSwxMFwiLCBcIjE1LDExXCIsIFwiMTUsMTJcIiwgXCIxNSwxM1wiLCBcIjE1LDE0XCIsIFwiMTUsMTVcIiwgXCIxNSwxNlwiLCBcIjE1LDE3XCIsIFwiMTUsMThcIiwgXCIxNSwxOVwiLCBcIjE1LDIwXCIsIFwiMTYsMFwiLCBcIjE2LDFcIiwgXCIxNiwyXCIsIFwiMTYsM1wiLCBcIjE2LDRcIiwgXCIxNiw1XCIsIFwiMTYsNlwiLCBcIjE2LDdcIiwgXCIxNiw4XCIsIFwiMTYsOVwiLCBcIjE2LDEwXCIsIFwiMTYsMTFcIiwgXCIxNiwxMlwiLCBcIjE2LDEzXCIsIFwiMTYsMTRcIiwgXCIxNiwxNVwiLCBcIjE2LDE2XCIsIFwiMTYsMTdcIiwgXCIxNiwxOFwiLCBcIjE2LDE5XCIsIFwiMTYsMjBcIiwgXCIxNywwXCIsIFwiMTcsMVwiLCBcIjE3LDJcIiwgXCIxNywzXCIsIFwiMTcsNFwiLCBcIjE3LDVcIiwgXCIxNyw2XCIsIFwiMTcsN1wiLCBcIjE3LDhcIiwgXCIxNyw5XCIsIFwiMTcsMTBcIiwgXCIxNywxMVwiLCBcIjE3LDEyXCIsIFwiMTcsMTNcIiwgXCIxNywxNFwiLCBcIjE3LDE1XCIsIFwiMTcsMTZcIiwgXCIxNywxN1wiLCBcIjE3LDE4XCIsIFwiMTcsMTlcIiwgXCIxNywyMFwiLCBcIjE4LDBcIiwgXCIxOCwxXCIsIFwiMTgsMlwiLCBcIjE4LDNcIiwgXCIxOCw0XCIsIFwiMTgsNVwiLCBcIjE4LDZcIiwgXCIxOCw3XCIsIFwiMTgsOFwiLCBcIjE4LDlcIiwgXCIxOCwxMFwiLCBcIjE4LDExXCIsIFwiMTgsMTJcIiwgXCIxOCwxM1wiLCBcIjE4LDE0XCIsIFwiMTgsMTVcIiwgXCIxOCwxNlwiLCBcIjE4LDE3XCIsIFwiMTgsMThcIiwgXCIxOCwxOVwiLCBcIjE4LDIwXCIsIFwiMTksMFwiLCBcIjE5LDFcIiwgXCIxOSwyXCIsIFwiMTksM1wiLCBcIjE5LDRcIiwgXCIxOSw1XCIsIFwiMTksNlwiLCBcIjE5LDdcIiwgXCIxOSw4XCIsIFwiMTksOVwiLCBcIjE5LDEwXCIsIFwiMTksMTFcIiwgXCIxOSwxMlwiLCBcIjE5LDEzXCIsIFwiMTksMTRcIiwgXCIxOSwxNVwiLCBcIjE5LDE2XCIsIFwiMTksMTdcIiwgXCIxOSwxOFwiLCBcIjE5LDE5XCIsIFwiMTksMjBcIiwgXCIyMCwwXCIsIFwiMjAsMVwiLCBcIjIwLDJcIiwgXCIyMCwzXCIsIFwiMjAsNFwiLCBcIjIwLDVcIiwgXCIyMCw2XCIsIFwiMjAsN1wiLCBcIjIwLDhcIiwgXCIyMCw5XCIsIFwiMjAsMTBcIiwgXCIyMCwxMVwiLCBcIjIwLDEyXCIsIFwiMjAsMTNcIiwgXCIyMCwxNFwiLCBcIjIwLDE1XCIsIFwiMjAsMTZcIiwgXCIyMCwxN1wiLCBcIjIwLDE4XCIsIFwiMjAsMTlcIiwgXCIyMCwyMFwiLCBcIjIxLDBcIiwgXCIyMSwxXCIsIFwiMjEsMlwiLCBcIjIxLDNcIiwgXCIyMSw0XCIsIFwiMjEsNVwiLCBcIjIxLDZcIiwgXCIyMSw3XCIsIFwiMjEsOFwiLCBcIjIxLDlcIiwgXCIyMSwxMFwiLCBcIjIxLDExXCIsIFwiMjEsMTJcIiwgXCIyMSwxM1wiLCBcIjIxLDE0XCIsIFwiMjEsMTVcIiwgXCIyMSwxNlwiLCBcIjIxLDE3XCIsIFwiMjEsMThcIiwgXCIyMSwxOVwiLCBcIjIxLDIwXCJdXG5cdFx0fSxcblx0XHRcImJhdHRsZVRoZXJtaXRlXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMDFcIixcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwidGhlcm1pdGVcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMl0sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXG5cdFx0XHRcdFwiYXJnc1wiOiBcInRoZXJtaXRlXCJcblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDIwXCIsIFwiNywxXCIsIFwiNyw3XCIsIFwiMjMsMTNcIiwgXCIyMywxOVwiLCBcIjI0LDBcIl1cblx0XHR9LFxuXHRcdFwiYmF0dGxlU2hpZWxkXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMDJcIixcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwic2hpZWxkXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXG5cdFx0XHRcdFwiYXJnc1wiOiBcInNoaWVsZFwiXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiw2XCIsIFwiNiwxM1wiLCBcIjYsMTlcIiwgXCI3LDJcIiwgXCI3LDEyXCIsIFwiMjMsOFwiLCBcIjIzLDE4XCIsIFwiMjQsMVwiLCBcIjI0LDdcIiwgXCIyNCwxNFwiXVxuXHRcdH0sXG5cdFx0XCJiYXR0bGVCaW9kcm9uZVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDAzXCIsXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcblx0XHRcdFwibmFtZVwiOiBcImJpb2Ryb25lXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImJpb2Ryb25lXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcblx0XHRcdFx0XCJhcmdzXCI6IFwiYmlvZHJvbmVcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsNVwiLCBcIjcsM1wiLCBcIjcsMTVcIiwgXCIyMyw1XCIsIFwiMjMsMTdcIiwgXCIyNCwxNVwiXVxuXHRcdH0sXG5cdFx0XCJiYXR0bGVTYXRlbGxpdGVcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAwNFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJzYXRlbGxpdGVcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wibWV0YWxcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxuXHRcdFx0XHRcImFyZ3NcIjogXCJzYXRlbGxpdGVcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMFwiLCBcIjYsMTRcIiwgXCI3LDRcIiwgXCI3LDE3XCIsIFwiMjMsM1wiLCBcIjIzLDE2XCIsIFwiMjQsNlwiLCBcIjI0LDIwXCJdXG5cdFx0fSxcblx0XHRcImJhdHRsZUxhc2VyXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMDVcIixcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwibGFzZXJcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcblx0XHRcdFx0XCJhcmdzXCI6IFwibGFzZXJcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsM1wiLCBcIjYsN1wiLCBcIjYsOFwiLCBcIjYsMTJcIiwgXCI2LDE2XCIsIFwiNyw1XCIsIFwiNyw2XCIsIFwiNyw5XCIsIFwiNywxOFwiLCBcIjcsMTlcIiwgXCIyMywxXCIsIFwiMjMsMlwiLCBcIjIzLDExXCIsIFwiMjMsMTRcIiwgXCIyMywxNVwiLCBcIjI0LDRcIiwgXCIyNCw4XCIsIFwiMjQsMTJcIiwgXCIyNCwxM1wiLCBcIjI0LDE3XCJdXG5cdFx0fSxcblx0XHRcImJhdHRsZVJlcGFpclwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDA2XCIsXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcblx0XHRcdFwibmFtZVwiOiBcInJlcGFpclwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJtZXRhbFwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJyZXBhaXJcIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogMVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMVwiLCBcIjYsMTBcIiwgXCI2LDE4XCIsIFwiNyw4XCIsIFwiNywxM1wiLCBcIjIzLDdcIiwgXCIyMywxMlwiLCBcIjI0LDJcIiwgXCIyNCwxMFwiLCBcIjI0LDE5XCJdXG5cdFx0fSxcblx0XHRcImJhdHRsZVJvY2tldFwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDA3XCIsXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcblx0XHRcdFwibmFtZVwiOiBcInJvY2tldFwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJyb2NrZXRcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxuXHRcdFx0XHRcImFyZ3NcIjogXCJyb2NrZXRcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsNFwiLCBcIjYsMTFcIiwgXCI3LDEwXCIsIFwiNywxNlwiLCBcIjIzLDRcIiwgXCIyMywxMFwiLCBcIjI0LDlcIiwgXCIyNCwxNlwiXVxuXHRcdH0sXG5cdFx0XCJiYXR0bGVFc3Bpb25hZ2VcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAwOFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJlc3Bpb25hZ2VcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbM10sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJlc3Bpb25hZ2VcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMTVcIiwgXCI3LDExXCIsIFwiMjMsOVwiLCBcIjI0LDVcIl1cblx0XHR9LFxuXHRcdFwiYmF0dGxlVGFrZW92ZXJcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAwOVwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJ0YWtlb3ZlclwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzJdLFxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwidGFrZW92ZXJcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMTdcIiwgXCI3LDE0XCIsIFwiMjMsNlwiLCBcIjI0LDNcIl1cblx0XHR9LFxuXHRcdFwiYmF0dGxlUmVwYWlyVHdvXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMTBcIixcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwicmVwYWlyVHdvXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiLCBcIm94eWdlblwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMV0sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJyZXBhaXJcIixcblx0XHRcdFx0XCJhcmdzXCI6IDJcblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDlcIiwgXCIyNCwxMVwiXVxuXHRcdH0sXG5cdFx0XCJiYXR0bGVDb3VudGVyRXNwaW9uYWdlXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMTFcIixcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiY291bnRlckVzcGlvbmFnZVwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJiaW9tYXNzXCIsIFwib3h5Z2VuXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxXSxcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImNvdW50ZXJcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMlwiLCBcIjI0LDE4XCJdXG5cdFx0fSxcblx0XHRcIm90aGVyU3VyZmFjZVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDEyXCIsXG5cdFx0XHRcInR5cGVcIjogXCJzdXJmYWNlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJzdXJmYWNlXCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI4LDBcIiwgXCI4LDFcIiwgXCI4LDJcIiwgXCI4LDNcIiwgXCI4LDRcIiwgXCI4LDVcIiwgXCI4LDZcIiwgXCI4LDdcIiwgXCI4LDhcIiwgXCI4LDlcIiwgXCI4LDEwXCIsIFwiOCwxMVwiLCBcIjgsMTJcIiwgXCI4LDEzXCIsIFwiOCwxNFwiLCBcIjgsMTVcIiwgXCI4LDE2XCIsIFwiOCwxN1wiLCBcIjgsMThcIiwgXCI4LDE5XCIsIFwiOCwyMFwiLCBcIjIyLDBcIiwgXCIyMiwxXCIsIFwiMjIsMlwiLCBcIjIyLDNcIiwgXCIyMiw0XCIsIFwiMjIsNVwiLCBcIjIyLDZcIiwgXCIyMiw3XCIsIFwiMjIsOFwiLCBcIjIyLDlcIiwgXCIyMiwxMFwiLCBcIjIyLDExXCIsIFwiMjIsMTJcIiwgXCIyMiwxM1wiLCBcIjIyLDE0XCIsIFwiMjIsMTVcIiwgXCIyMiwxNlwiLCBcIjIyLDE3XCIsIFwiMjIsMThcIiwgXCIyMiwxOVwiLCBcIjIyLDIwXCJdXG5cdFx0fSxcblx0XHRcIm90aGVyTG9ja1wiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDEzXCIsXG5cdFx0XHRcInR5cGVcIjogXCJsb2NrXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJsb2NrXCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI3LDBcIiwgXCI1LDEwXCIsIFwiMSwxMFwiLCBcIjcsMjBcIiwgXCIyMywwXCIsIFwiMjMsMjBcIiwgXCIyNSwxMFwiLCBcIjI5LDEwXCJdXG5cdFx0fSxcblx0XHRcImFybW9yeURyaWxsXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMTRcIixcblx0XHRcdFwidHlwZVwiOiBcImFybW9yeVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiZHJpbGxcIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjQsMTBcIiwgXCIyNiwxMFwiXVxuXHRcdH0sXG5cdFx0XCJBcm1vcnlDYW5ub25cIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAxNVwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwiYXJtb3J5XCIsXG5cdFx0XHRcIm5hbWVcIjogXCJjYW5ub25cIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjMsMTBcIiwgXCIyNywxMFwiXVxuXHRcdH0sXG5cdFx0XCJhcm1vcnlFeHBsb3NpdmVzXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMTZcIixcblx0XHRcdFwidHlwZVwiOiBcImFybW9yeVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiZXhwbG9zaXZlc1wiLFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMiwxMFwiLCBcIjI4LDEwXCJdXG5cdFx0fSxcblx0XHRcInByb2R1Y3Rpb25MaWNoZW5cIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAxN1wiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwibGljaGVuXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJiaW9tYXNzXCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDBcIiwgXCIwLDEwXCIsIFwiMCwxN1wiLCBcIjEsMlwiLCBcIjEsOFwiLCBcIjEsMTZcIiwgXCIxLDIwXCIsIFwiMjksMFwiLCBcIjI5LDRcIiwgXCIyOSwxMlwiLCBcIjI5LDE4XCIsIFwiMzAsM1wiLCBcIjMwLDEwXCIsIFwiMzAsMjBcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvbkxpY2hlblR3b1wiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDE4XCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJsaWNoZW5Ud29cIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcImJpb21hc3NcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsyXVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsNFwiLCBcIjMwLDE2XCJdXG5cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvbkNoZW1pY2FsUmVhY3RvclwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDE5XCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJjaGVtaWNhbFJlYWN0b3JcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wib3h5Z2VuXCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIxLDFcIiwgXCIxLDlcIiwgXCIyOSwxOVwiLCBcIjI5LDExXCJdXG5cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvbkNoZW1pY2FsUmVhY3RvclR3b1wiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDIwXCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJjaGVtaWNhbFJlYWN0b3JUd29cIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wib3h5Z2VuXCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMl1cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDVcIiwgXCIzMCwxNVwiXVxuXHRcdH0sXG5cdFx0XCJwcm9kdWN0aW9uQWlyRmlsdGVyXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMjFcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcImFpckZpbHRlclwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJveHlnZW5cIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcIm94eWdlblwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzNdXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxNVwiLCBcIjEsMTFcIiwgXCIyOSw5XCIsIFwiMzAsNVwiXVxuXHRcdH0sXG5cdFx0XCJwcm9kdWN0aW9uQmlvY29sbGVjdG9yXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMjJcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcImJpb2NvbGxlY3RvclwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJveHlnZW5cIiwgXCJiaW9tYXNzXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJiaW9kcm9uZVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzFdXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxNFwiLCBcIjAsMThcIiwgXCIxLDZcIiwgXCIxLDE3XCIsIFwiMzAsNlwiLCBcIjMwLDJcIiwgXCIyOSwxNFwiLCBcIjI5LDNcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvblVyYW5pdW1NaW5lXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMjNcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcInVyYW5pdW1NaW5lXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm94eWdlblwiLCBcImVuZXJneVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMV0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1widXJhbml1bVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzFdXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwyXCIsIFwiMCw2XCIsIFwiMSwzXCIsIFwiMzAsMThcIiwgXCIzMCwxNFwiLCBcIjI5LDE3XCJdXG5cdFx0fSxcblx0XHRcInByb2R1Y3Rpb25OdWNsZWFyUmVhY3RvclwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDI0XCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJudWNsZWFyUmVhY3RvclwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJ1cmFuaXVtXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJlbmVyZ3lcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFszXVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsOVwiLCBcIjAsMTZcIiwgXCIxLDdcIiwgXCIxLDE0XCIsIFwiMSwxOVwiLCBcIjMwLDExXCIsIFwiMzAsNFwiLCBcIjI5LDEzXCIsIFwiMjksNlwiLCBcIjI5LDFcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvblRoZXJtYWxHZW5lcmF0b3JcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAyNVwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwidGhlcm1hbEdlbmVyYXRvclwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJiaW9tYXNzXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJlbmVyZ3lcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsxXVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMTJcIiwgXCIzMCw4XCJdXG5cdFx0fSxcblx0XHRcInByb2R1Y3Rpb25Gb3VuZHJ5XCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMjZcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcImZvdW5kcnlcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJtZXRhbFwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzFdXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwzXCIsIFwiMCwxMVwiLCBcIjAsMTlcIiwgXCIxLDEzXCIsIFwiMzAsMTdcIiwgXCIzMCw5XCIsIFwiMzAsMVwiLCBcIjI5LDdcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvbkZvdW5kcnlUd29cIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAyN1wiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiZm91bmRyeVR3b1wiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcIm1ldGFsXCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMl1cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIxLDBcIiwgXCIyOSwyMFwiXVxuXHRcdH0sXG5cdFx0XCJwcm9kdWN0aW9uUm9ja2V0V29ya3Nob3BcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAyOFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwicm9ja2V0V29ya3Nob3BcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJyb2NrZXRcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsxXVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMVwiLCBcIjAsN1wiLCBcIjEsNVwiLCBcIjEsMTJcIiwgXCIxLDE1XCIsIFwiMzAsMTlcIiwgXCIzMCwxM1wiLCBcIjI5LDE1XCIsIFwiMjksOFwiLCBcIjI5LDVcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvblNlbnNvckNhYmluXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMjlcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcInNlbnNvckNhYmluXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImtpbGxCaW9kcm9uZVwiXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxM1wiLCBcIjMwLDdcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvbk51Y2xlYXJBcm1vcnlcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAzMFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwibnVjbGVhckFybW9yeVwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJveHlnZW5cIiwgXCJlbmVyZ3lcIiwgXCJ1cmFuaXVtXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxLCAxXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJudWtlXCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDIwXCIsIFwiMSw0XCIsIFwiMSwxOFwiLCBcIjMwLDBcIiwgXCIyOSwxNlwiLCBcIjI5LDJcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvblJlcGFpclwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDMxXCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJwcm9kUmVwYWlyXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJyZXBhaXJcIixcblx0XHRcdFx0XCJ0aWxlVGFyZ2V0SURcIjogMVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsOFwiLCBcIjMwLDEyXCJdXG5cdFx0fSxcblx0XHRcInJlc291cmNlT3h5Z2VuXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMzJcIixcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwib3h5Z2VuXCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI1LDBcIiwgXCI1LDFcIiwgXCI1LDJcIiwgXCI1LDNcIiwgXCI1LDRcIiwgXCI1LDVcIiwgXCI1LDZcIiwgXCI1LDdcIiwgXCI1LDhcIiwgXCI1LDlcIiwgXCIyNSwxMVwiLCBcIjI1LDEyXCIsIFwiMjUsMTNcIiwgXCIyNSwxNFwiLCBcIjI1LDE1XCIsIFwiMjUsMTZcIiwgXCIyNSwxN1wiLCBcIjI1LDE4XCIsIFwiMjUsMTlcIiwgXCIyNSwyMFwiXVxuXHRcdH0sXG5cdFx0XCJyZXNvdXJjZVJvY2tldFwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDMzXCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcblx0XHRcdFwibmFtZVwiOiBcInJvY2tldFwiLFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNCwwXCIsIFwiNCwxXCIsIFwiNCwyXCIsIFwiNCwzXCIsIFwiNCw0XCIsIFwiNCw1XCIsIFwiNCw2XCIsIFwiNCw3XCIsIFwiNCw4XCIsIFwiNCw5XCIsIFwiMjYsMTFcIiwgXCIyNiwxMlwiLCBcIjI2LDEzXCIsIFwiMjYsMTRcIiwgXCIyNiwxNVwiLCBcIjI2LDE2XCIsIFwiMjYsMTdcIiwgXCIyNiwxOFwiLCBcIjI2LDE5XCIsIFwiMjYsMjBcIl1cblx0XHR9LFxuXHRcdFwicmVzb3VyY2VNZXRhbFwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDM0XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcblx0XHRcdFwibmFtZVwiOiBcIm1ldGFsXCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIzLDBcIiwgXCIzLDFcIiwgXCIzLDJcIiwgXCIzLDNcIiwgXCIzLDRcIiwgXCIzLDVcIiwgXCIzLDZcIiwgXCIzLDdcIiwgXCIzLDhcIiwgXCIzLDlcIiwgXCIyNywxMVwiLCBcIjI3LDEyXCIsIFwiMjcsMTNcIiwgXCIyNywxNFwiLCBcIjI3LDE1XCIsIFwiMjcsMTZcIiwgXCIyNywxN1wiLCBcIjI3LDE4XCIsIFwiMjcsMTlcIiwgXCIyNywyMFwiXVxuXHRcdH0sXG5cdFx0XCJyZXNvdXJjZUVuZXJneVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDM1XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcblx0XHRcdFwibmFtZVwiOiBcImVuZXJneVwiLFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMiwwXCIsIFwiMiwxXCIsIFwiMiwyXCIsIFwiMiwzXCIsIFwiMiw0XCIsIFwiMiw1XCIsIFwiMiw2XCIsIFwiMiw3XCIsIFwiMiw4XCIsIFwiMiw5XCIsIFwiMiwxMVwiLCBcIjIsMTJcIiwgXCIyLDEzXCIsIFwiMiwxNFwiLCBcIjIsMTVcIiwgXCIyLDE2XCIsIFwiMiwxN1wiLCBcIjIsMThcIiwgXCIyLDE5XCIsIFwiMiwyMFwiLCBcIjI4LDBcIiwgXCIyOCwxXCIsIFwiMjgsMlwiLCBcIjI4LDNcIiwgXCIyOCw0XCIsIFwiMjgsNVwiLCBcIjI4LDZcIiwgXCIyOCw3XCIsIFwiMjgsOFwiLCBcIjI4LDlcIiwgXCIyOCwxMVwiLCBcIjI4LDEyXCIsIFwiMjgsMTNcIiwgXCIyOCwxNFwiLCBcIjI4LDE1XCIsIFwiMjgsMTZcIiwgXCIyOCwxN1wiLCBcIjI4LDE4XCIsIFwiMjgsMTlcIiwgXCIyOCwyMFwiXVxuXHRcdH0sXG5cdFx0XCJyZXNvdXJjZUJpb21hc3NcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAzNlwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJiaW9tYXNzXCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI1LDExXCIsIFwiNSwxMlwiLCBcIjUsMTNcIiwgXCI1LDE0XCIsIFwiNSwxNVwiLCBcIjUsMTZcIiwgXCI1LDE3XCIsIFwiNSwxOFwiLCBcIjUsMTlcIiwgXCI1LDIwXCIsIFwiMjUsMFwiLCBcIjI1LDFcIiwgXCIyNSwyXCIsIFwiMjUsM1wiLCBcIjI1LDRcIiwgXCIyNSw1XCIsIFwiMjUsNlwiLCBcIjI1LDdcIiwgXCIyNSw4XCIsIFwiMjUsOVwiXVxuXHRcdH0sXG5cdFx0XCJyZXNvdXJjZUJpb2Ryb25lXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMzdcIixcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiYmlvZHJvbmVcIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjQsMTFcIiwgXCI0LDEyXCIsIFwiNCwxM1wiLCBcIjQsMTRcIiwgXCI0LDE1XCIsIFwiNCwxNlwiLCBcIjQsMTdcIiwgXCI0LDE4XCIsIFwiNCwxOVwiLCBcIjQsMjBcIiwgXCIyNiwwXCIsIFwiMjYsMVwiLCBcIjI2LDJcIiwgXCIyNiwzXCIsIFwiMjYsNFwiLCBcIjI2LDVcIiwgXCIyNiw2XCIsIFwiMjYsN1wiLCBcIjI2LDhcIiwgXCIyNiw5XCJdXG5cdFx0fSxcblx0XHRcInJlc291cmNlVXJhbml1bVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDM4XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcblx0XHRcdFwibmFtZVwiOiBcInVyYW5pdW1cIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjMsMTFcIiwgXCIzLDEyXCIsIFwiMywxM1wiLCBcIjMsMTRcIiwgXCIzLDE1XCIsIFwiMywxNlwiLCBcIjMsMTdcIiwgXCIzLDE4XCIsIFwiMywxOVwiLCBcIjMsMjBcIiwgXCIyNywwXCIsIFwiMjcsMVwiLCBcIjI3LDJcIiwgXCIyNywzXCIsIFwiMjcsNFwiLCBcIjI3LDVcIiwgXCIyNyw2XCIsIFwiMjcsN1wiLCBcIjI3LDhcIiwgXCIyNyw5XCJdXG5cdFx0fVxuXHR9XG59IiwibW9kdWxlLmV4cG9ydHM9e1xuXHRcImdyaWRcIjogW1xuXHRcdFs5LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTJdLFxuXHRcdFszLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA4LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA2XSxcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcblx0XHRbOSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMiwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTJdLFxuXHRcdFsxLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNF0sXG5cdFx0WzMsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA2XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxuXHRcdFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA0XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxuXHRcdFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA0XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxuXHRcdFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA0XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxuXHRcdFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA0XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDRdLFxuXHRcdFsxLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNF0sXG5cdFx0WzMsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDgsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDZdLFxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxuXHRcdFs5LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAyLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMl0sXG5cdFx0WzMsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA2XVxuXHRdXG59IiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIC8vIGpvaW4gdXNlZCB0byBmaXggbWVtb3J5IGlzc3VlIGNhdXNlZCBieSBjb25jYXRlbmF0aW9uOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMTc1I2M0XG4gIHJldHVybiAoW2J0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sIFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV1dKS5qb2luKCcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0b1xuLy8gaW1wbGVtZW50YXRpb24uIEFsc28sIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byBvbiBJRTExLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcblxuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgKytpaSkge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHY0O1xuIiwiaW1wb3J0IENsaWVudCBmcm9tICcuL3ByZWZhYnMvY2xpZW50JztcbmltcG9ydCBCb290IGZyb20gJy4vc3RhdGVzL2Jvb3QnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zdGF0ZXMvZ2FtZSc7XG5pbXBvcnQgU2V0dXAgZnJvbSAnLi9zdGF0ZXMvc2V0dXAnO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICcuL3N0YXRlcy9wcmVsb2FkZXInO1xuaW1wb3J0IEdhbWVvdmVyIGZyb20gJy4vc3RhdGVzL2dhbWVvdmVyJztcbmltcG9ydCBTZXJ2ZXJGdWxsIGZyb20gJy4vc3RhdGVzL3NlcnZlckZ1bGwnO1xuaW1wb3J0IFNlcHRpa29uIGZyb20gJy4vcHJlZmFicy9zZXB0aWtvbic7XG5cbmlmKHR5cGVvZihTdG9yYWdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXB0VVVJRCcpICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHV1aWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VwdFVVSUQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB1dWlkID0gcmVxdWlyZSgndXVpZC92NCcpKCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXB0VVVJRCcsIHV1aWQpO1xuICAgIH1cbn0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihcIkxvY2FsIFN0b3JhZ2UgaXMgcmVxdWlyZWQhXCIpO1xufVxuXG4vLyBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQsIFBoYXNlci5BVVRPLCAncGhhc2VyLXRlc3QtZ2FtZScpO1xuY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShcIjEwMFwiLCBcIjEwMFwiLCBQaGFzZXIuQVVUTyk7XG5nYW1lLnNlcHRpa29uID0gbmV3IFNlcHRpa29uKGdhbWUpO1xuZ2FtZS5jbGllbnQgPSBuZXcgQ2xpZW50KGdhbWUuc2VwdGlrb24pO1xuXG5nYW1lLnN0YXRlLmFkZCgnYm9vdCcsIG5ldyBCb290KCkpO1xuZ2FtZS5zdGF0ZS5hZGQoJ2dhbWUnLCBuZXcgR2FtZSgpKTtcbmdhbWUuc3RhdGUuYWRkKCdzZXR1cCcsIG5ldyBTZXR1cCgpKTtcbmdhbWUuc3RhdGUuYWRkKCdwcmVsb2FkZXInLCBuZXcgUHJlbG9hZGVyKCkpO1xuZ2FtZS5zdGF0ZS5hZGQoJ2dhbWVvdmVyJywgbmV3IEdhbWVvdmVyKCkpO1xuZ2FtZS5zdGF0ZS5hZGQoJ3NlcnZlckZ1bGwnLCBuZXcgU2VydmVyRnVsbCgpKTtcblxuZ2FtZS5zdGF0ZS5zdGFydCgnYm9vdCcpO1xuIiwidmFyIGdhbWVNb2RhbCA9IGdhbWVNb2RhbCB8fCB7fTtcblxuXG5nYW1lTW9kYWwgPSBmdW5jdGlvbiAoZ2FtZSkge1xuXG5cdHZhciBfdGhpcyA9IHRoaXM7XG5cdGdhbWUubW9kYWxzID0ge307XG5cblx0LyoqXG5cdCAqIFtoaWRlTW9kYWwgZGVzY3JpcHRpb25dXG5cdCAqIEBwYXJhbSAge1t0eXBlXX0gdHlwZSBbZGVzY3JpcHRpb25dXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHR0aGlzLmhpZGVNb2RhbCA9IGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0d2luZG93LmNvbnNvbGUubG9nKHR5cGUpO1xuXHRcdGdhbWUubW9kYWxzW3R5cGVdLnZpc2libGUgPSBmYWxzZTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGNyZWF0ZU1vZGFsOiBmdW5jdGlvbiAob3B0aW9ucykge1xuXHRcdFx0dmFyIHR5cGUgPSBvcHRpb25zLnR5cGUgfHwgJyc7IC8vIG11c3QgYmUgdW5pcXVlXG5cdFx0XHR2YXIgaW5jbHVkZUJhY2tncm91bmQgPSBvcHRpb25zLmluY2x1ZGVCYWNrZ3JvdW5kOyAvLyBtYXliZSBub3Qgb3B0aW9uYWxcblx0XHRcdHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvciB8fCBcIjB4MDAwMDAwXCI7XG5cdFx0XHR2YXIgYmFja2dyb3VuZE9wYWNpdHkgPSBvcHRpb25zLmJhY2tncm91bmRPcGFjaXR5ID09PSB1bmRlZmluZWQgP1xuXHRcdFx0XHQwLjcgOiBvcHRpb25zLmJhY2tncm91bmRPcGFjaXR5O1xuXHRcdFx0dmFyIG1vZGFsQ2xvc2VPbklucHV0ID0gb3B0aW9ucy5tb2RhbENsb3NlT25JbnB1dCB8fCBmYWxzZTtcblx0XHRcdHZhciBtb2RhbEJhY2tncm91bmRDYWxsYmFjayA9IG9wdGlvbnMubW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2sgfHwgZmFsc2U7XG5cdFx0XHR2YXIgdkNlbnRlciA9IG9wdGlvbnMudkNlbnRlciB8fCB0cnVlO1xuXHRcdFx0dmFyIGhDZW50ZXIgPSBvcHRpb25zLmhDZW50ZXIgfHwgdHJ1ZTtcblx0XHRcdHZhciBpdGVtc0FyciA9IG9wdGlvbnMuaXRlbXNBcnIgfHwgW107XG5cdFx0XHR2YXIgZml4ZWRUb0NhbWVyYSA9IG9wdGlvbnMuZml4ZWRUb0NhbWVyYSB8fCBmYWxzZTtcblxuXHRcdFx0dmFyIG1vZGFsO1xuXHRcdFx0dmFyIGlubmVyTW9kYWw7XG5cdFx0XHR2YXIgbW9kYWxHcm91cCA9IGdhbWUuYWRkLmdyb3VwKCk7XG5cdFx0XHRpZiAoZml4ZWRUb0NhbWVyYSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRtb2RhbEdyb3VwLmZpeGVkVG9DYW1lcmEgPSB0cnVlO1xuXHRcdFx0XHRtb2RhbEdyb3VwLmNhbWVyYU9mZnNldC54ID0gMDtcblx0XHRcdFx0bW9kYWxHcm91cC5jYW1lcmFPZmZzZXQueSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpbmNsdWRlQmFja2dyb3VuZCA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRtb2RhbCA9IGdhbWUuYWRkLmdyYXBoaWNzKGdhbWUud2lkdGgsIGdhbWUuaGVpZ2h0KTtcblx0XHRcdFx0bW9kYWwuYmVnaW5GaWxsKGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZE9wYWNpdHkpO1xuXHRcdFx0XHRtb2RhbC54ID0gMDtcblx0XHRcdFx0bW9kYWwueSA9IDA7XG5cblx0XHRcdFx0bW9kYWwuZHJhd1JlY3QoMCwgMCwgZ2FtZS53aWR0aCwgZ2FtZS5oZWlnaHQpO1xuXG5cdFx0XHRcdGlmIChtb2RhbENsb3NlT25JbnB1dCA9PT0gdHJ1ZSkge1xuXG5cdFx0XHRcdFx0aW5uZXJNb2RhbCA9IGdhbWUuYWRkLnNwcml0ZSgwLCAwKTtcblx0XHRcdFx0XHRpbm5lck1vZGFsLmlucHV0RW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0aW5uZXJNb2RhbC53aWR0aCA9IGdhbWUud2lkdGg7XG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5oZWlnaHQgPSBnYW1lLmhlaWdodDtcblx0XHRcdFx0XHRpbm5lck1vZGFsLnR5cGUgPSB0eXBlO1xuXHRcdFx0XHRcdGlubmVyTW9kYWwuaW5wdXQucHJpb3JpdHlJRCA9IDA7XG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5ldmVudHMub25JbnB1dERvd24uYWRkKGZ1bmN0aW9uIChlLCBwb2ludGVyKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmhpZGVNb2RhbChlLnR5cGUpO1xuXHRcdFx0XHRcdH0sIF90aGlzLCAyKTtcblxuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKGlubmVyTW9kYWwpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0bW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2sgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChtb2RhbEJhY2tncm91bmRDYWxsYmFjaykge1xuXHRcdFx0XHRpbm5lck1vZGFsID0gZ2FtZS5hZGQuc3ByaXRlKDAsIDApO1xuXHRcdFx0XHRpbm5lck1vZGFsLmlucHV0RW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdGlubmVyTW9kYWwud2lkdGggPSBnYW1lLndpZHRoO1xuXHRcdFx0XHRpbm5lck1vZGFsLmhlaWdodCA9IGdhbWUuaGVpZ2h0O1xuXHRcdFx0XHRpbm5lck1vZGFsLnR5cGUgPSB0eXBlO1xuXHRcdFx0XHRpbm5lck1vZGFsLmlucHV0LnByaW9yaXR5SUQgPSAwO1xuXG5cdFx0XHRcdG1vZGFsR3JvdXAuYWRkKGlubmVyTW9kYWwpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaW5jbHVkZUJhY2tncm91bmQpIHtcblx0XHRcdFx0bW9kYWxHcm91cC5hZGQobW9kYWwpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbW9kYWxMYWJlbDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXNBcnIubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBpdGVtc0FycltpXTtcblx0XHRcdFx0dmFyIGl0ZW1UeXBlID0gaXRlbS50eXBlIHx8ICd0ZXh0Jztcblx0XHRcdFx0dmFyIGl0ZW1Db2xvciA9IGl0ZW0uY29sb3IgfHwgMHgwMDAwMDA7XG5cdFx0XHRcdHZhciBpdGVtRm9udGZhbWlseSA9IGl0ZW0uZm9udEZhbWlseSB8fCAnQXJpYWwnO1xuXHRcdFx0XHR2YXIgaXRlbUZvbnRTaXplID0gaXRlbS5mb250U2l6ZSB8fCAzMjtcblx0XHRcdFx0dmFyIGl0ZW1TdHJva2UgPSBpdGVtLnN0cm9rZSB8fCAnMHgwMDAwMDAnO1xuXHRcdFx0XHR2YXIgaXRlbVN0cm9rZVRoaWNrbmVzcyA9IGl0ZW0uc3Ryb2tlVGhpY2tuZXNzIHx8IDA7XG5cdFx0XHRcdHZhciBpdGVtQWxpZ24gPSBpdGVtLmFsaWduIHx8ICdjZW50ZXInO1xuXHRcdFx0XHR2YXIgb2Zmc2V0WCA9IGl0ZW0ub2Zmc2V0WCB8fCAwO1xuXHRcdFx0XHR2YXIgb2Zmc2V0WSA9IGl0ZW0ub2Zmc2V0WSB8fCAwO1xuXHRcdFx0XHR2YXIgY29udGVudFNjYWxlID0gaXRlbS5jb250ZW50U2NhbGUgfHwgMTtcblx0XHRcdFx0dmFyIGNvbnRlbnQgPSBpdGVtLmNvbnRlbnQgfHwgXCJcIjtcblx0XHRcdFx0dmFyIGNlbnRlclggPSBnYW1lLndpZHRoIC8gMjtcblx0XHRcdFx0dmFyIGNlbnRlclkgPSBnYW1lLmhlaWdodCAvIDI7XG5cdFx0XHRcdHZhciBjYWxsYmFjayA9IGl0ZW0uY2FsbGJhY2sgfHwgZmFsc2U7XG5cdFx0XHRcdHZhciB0ZXh0QWxpZ24gPSBpdGVtLnRleHRBbGlnbiB8fCBcImxlZnRcIjtcblx0XHRcdFx0dmFyIGF0bGFzUGFyZW50ID0gaXRlbS5hdGxhc1BhcmVudCB8fCBcIlwiO1xuXHRcdFx0XHR2YXIgYnV0dG9uSG92ZXIgPSBpdGVtLmJ1dHRvbkhvdmVyIHx8IGNvbnRlbnQ7XG5cdFx0XHRcdHZhciBidXR0b25BY3RpdmUgPSBpdGVtLmJ1dHRvbkFjdGl2ZSB8fCBjb250ZW50O1xuXHRcdFx0XHR2YXIgZ3JhcGhpY0NvbG9yID0gaXRlbS5ncmFwaGljQ29sb3IgfHwgMHhmZmZmZmY7XG5cdFx0XHRcdHZhciBncmFwaGljT3BhY2l0eSA9IGl0ZW0uZ3JhcGhpY09wYWNpdHkgfHwgMTtcblx0XHRcdFx0dmFyIGdyYXBoaWNXID0gaXRlbS5ncmFwaGljV2lkdGggfHwgMjAwO1xuXHRcdFx0XHR2YXIgZ3JhcGhpY0ggPSBpdGVtLmdyYXBoaWNIZWlnaHQgfHwgMjAwO1xuXHRcdFx0XHR2YXIgZ3JhcGhpY1JhZGl1cyA9IGl0ZW0uZ3JhcGhpY1JhZGl1cyB8fCAwO1xuXHRcdFx0XHR2YXIgbG9ja1Bvc2l0aW9uID0gaXRlbS5sb2NrUG9zaXRpb24gfHwgZmFsc2U7XG5cblx0XHRcdFx0dmFyIGl0ZW1BbmNob3IgPSBpdGVtLmFuY2hvciB8fCB7eDowLHk6MH07XG5cdFx0XHRcdHZhciBpdGVtQW5nbGUgPSBpdGVtLmFuZ2xlIHx8IDA7XG5cdFx0XHRcdHZhciBpdGVtWCA9IGl0ZW0ueCB8fCAwO1xuXHRcdFx0XHR2YXIgaXRlbVkgPSBpdGVtLnkgfHwgMDtcblx0XHRcdFx0dmFyIGltYWdlRnJhbWUgPSBpdGVtLmZyYW1lIHx8IG51bGw7XG5cdFx0XHRcdHZhciB0aWxlU3ByaXRlV2lkdGggPSBpdGVtLnRpbGVTcHJpdGVXaWR0aCB8fCBnYW1lLndpZHRoO1xuXHRcdFx0XHR2YXIgdGlsZVNwcml0ZUhlaWdodCA9IGl0ZW0udGlsZVNwcml0ZUhlaWdodCB8fCBnYW1lLmhlaWdodDtcblxuXHRcdFx0XHRtb2RhbExhYmVsID0gbnVsbDtcblxuXHRcdFx0XHRpZiAoaXRlbVR5cGUgPT09IFwidGV4dFwiIHx8IGl0ZW1UeXBlID09PSBcImJpdG1hcFRleHRcIikge1xuXG5cdFx0XHRcdFx0aWYgKGl0ZW1UeXBlID09PSBcInRleHRcIikge1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnRleHQoMCwgMCwgY29udGVudCwge1xuXHRcdFx0XHRcdFx0XHRmb250OiBpdGVtRm9udFNpemUgKyAncHggJyArIGl0ZW1Gb250ZmFtaWx5LFxuXHRcdFx0XHRcdFx0XHRmaWxsOiBcIiNcIiArIFN0cmluZyhpdGVtQ29sb3IpLnJlcGxhY2UoXCIweFwiLCBcIlwiKSxcblx0XHRcdFx0XHRcdFx0c3Ryb2tlOiBcIiNcIiArIFN0cmluZyhpdGVtU3Ryb2tlKS5yZXBsYWNlKFwiMHhcIiwgXCJcIiksXG5cdFx0XHRcdFx0XHRcdHN0cm9rZVRoaWNrbmVzczogaXRlbVN0cm9rZVRoaWNrbmVzcyxcblx0XHRcdFx0XHRcdFx0YWxpZ246IGl0ZW1BbGlnblxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ3RleHQnO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC51cGRhdGUoKTtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKG1vZGFsTGFiZWwud2lkdGggLyAyKSkgKyBvZmZzZXRYO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKChnYW1lLmhlaWdodCAvIDIpIC0gKG1vZGFsTGFiZWwuaGVpZ2h0IC8gMikpICsgb2Zmc2V0WTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmJpdG1hcFRleHQoMCwgMCwgaXRlbUZvbnRmYW1pbHksIFN0cmluZyhjb250ZW50KSwgaXRlbUZvbnRTaXplKTtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnYml0bWFwVGV4dCc7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmFsaWduID0gdGV4dEFsaWduO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC51cGRhdGVUZXh0KCk7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtIChtb2RhbExhYmVsLndpZHRoIC8gMikpICsgb2Zmc2V0WDtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKG1vZGFsTGFiZWwuaGVpZ2h0IC8gMikpICsgb2Zmc2V0WTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJpbWFnZVwiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmltYWdlKDAsIDAsIGNvbnRlbnQpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnaW1hZ2UnO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwidGlsZVNwcml0ZVwiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnRpbGVTcHJpdGUoaXRlbVgsIGl0ZW1ZLFxuXHRcdFx0XHRcdFx0dGlsZVNwcml0ZVdpZHRoLCB0aWxlU3ByaXRlSGVpZ2h0LCBjb250ZW50LCBpbWFnZUZyYW1lKTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnNjYWxlLnNldFRvKGNvbnRlbnRTY2FsZSwgY29udGVudFNjYWxlKTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmFuY2hvci5zZXRUbyhpdGVtQW5jaG9yLngsIGl0ZW1BbmNob3IueSk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5hbmdsZSA9IGl0ZW1BbmdsZTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ3RpbGVTcHJpdGUnO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcInNwcml0ZVwiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnNwcml0ZSgwLCAwLCBhdGxhc1BhcmVudCwgY29udGVudCk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdzcHJpdGUnO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiYnV0dG9uXCIpIHtcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuYnV0dG9uKDAsIDAsIGF0bGFzUGFyZW50LCBjYWxsYmFjayxcblx0XHRcdFx0XHRcdHRoaXMsIGJ1dHRvbkhvdmVyLCBjb250ZW50LCBidXR0b25BY3RpdmUsIGNvbnRlbnQpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnYnV0dG9uJztcblx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtICgobW9kYWxMYWJlbC53aWR0aCkgLyAyKSkgKyBvZmZzZXRYO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKChtb2RhbExhYmVsLmhlaWdodCkgLyAyKSkgKyBvZmZzZXRZO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiZ3JhcGhpY3NcIikge1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5ncmFwaGljcyhncmFwaGljVywgZ3JhcGhpY0gpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYmVnaW5GaWxsKGdyYXBoaWNDb2xvciwgZ3JhcGhpY09wYWNpdHkpO1xuXHRcdFx0XHRcdGlmIChncmFwaGljUmFkaXVzIDw9IDApIHtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuZHJhd1JlY3QoMCwgMCwgZ3JhcGhpY1csIGdyYXBoaWNIKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5kcmF3Um91bmRlZFJlY3QoMCwgMCwgZ3JhcGhpY1csIGdyYXBoaWNILCBncmFwaGljUmFkaXVzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5lbmRGaWxsKCk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFggPSAwO1xuXHRcdFx0XHRtb2RhbExhYmVsLl9vZmZzZXRZID0gMDtcblx0XHRcdFx0bW9kYWxMYWJlbC5sb2NrUG9zaXRpb24gPSBsb2NrUG9zaXRpb247XG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFggPSBvZmZzZXRYO1xuXHRcdFx0XHRtb2RhbExhYmVsLl9vZmZzZXRZID0gb2Zmc2V0WTtcblxuXG5cdFx0XHRcdGlmIChjYWxsYmFjayAhPT0gZmFsc2UgJiYgaXRlbVR5cGUgIT09IFwiYnV0dG9uXCIpIHtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmlucHV0RW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5waXhlbFBlcmZlY3RDbGljayA9IHRydWU7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5wcmlvcml0eUlEID0gMTA7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5ldmVudHMub25JbnB1dERvd24uYWRkKGNhbGxiYWNrLCBtb2RhbExhYmVsKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpdGVtVHlwZSAhPT0gXCJiaXRtYXBUZXh0XCIgJiYgaXRlbVR5cGUgIT09IFwiZ3JhcGhpY3NcIikge1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYnJpbmdUb1RvcCgpO1xuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKG1vZGFsTGFiZWwpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYnJpbmdUb1RvcCgpO1xuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYnJpbmdUb1RvcChtb2RhbExhYmVsKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmFkZChtb2RhbExhYmVsKTtcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmJyaW5nVG9Ub3AobW9kYWxMYWJlbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bW9kYWxHcm91cC52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXSA9IG1vZGFsR3JvdXA7XG5cblx0XHR9LFxuXHRcdHVwZGF0ZU1vZGFsVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSwgaW5kZXgsIGlkKSB7XG5cdFx0XHR2YXIgaXRlbTtcblx0XHRcdGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGluZGV4ICE9PSBudWxsKSB7XG5cdFx0XHRcdGl0ZW0gPSBnYW1lLm1vZGFsc1t0eXBlXS5nZXRDaGlsZEF0KGluZGV4KTtcblx0XHRcdH0gZWxzZSBpZiAoaWQgIT09IHVuZGVmaW5lZCAmJiBpZCAhPT0gbnVsbCkge1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmIChpdGVtLmNvbnRlbnRUeXBlID09PSBcInRleHRcIikge1xuXHRcdFx0XHRpdGVtLnRleHQgPSB2YWx1ZTtcblx0XHRcdFx0aXRlbS51cGRhdGUoKTtcblx0XHRcdFx0aWYgKGl0ZW0ubG9ja1Bvc2l0aW9uID09PSB0cnVlKSB7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpdGVtLnggPSAoKGdhbWUud2lkdGggLyAyKSAtIChpdGVtLndpZHRoIC8gMikpICsgaXRlbS5fb2Zmc2V0WDtcblx0XHRcdFx0XHRpdGVtLnkgPSAoKGdhbWUuaGVpZ2h0IC8gMikgLSAoaXRlbS5oZWlnaHQgLyAyKSkgKyBpdGVtLl9vZmZzZXRZO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwiYml0bWFwVGV4dFwiKSB7XG5cdFx0XHRcdGl0ZW0udGV4dCA9IHZhbHVlO1xuXHRcdFx0XHRpdGVtLnVwZGF0ZVRleHQoKTtcblx0XHRcdFx0aWYgKGl0ZW0ubG9ja1Bvc2l0aW9uID09PSB0cnVlKSB7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpdGVtLnggPSAoKGdhbWUud2lkdGggLyAyKSAtIChpdGVtLndpZHRoIC8gMikpICsgaXRlbS5fb2Zmc2V0WDtcblx0XHRcdFx0XHRpdGVtLnkgPSAoKGdhbWUuaGVpZ2h0IC8gMikgLSAoaXRlbS5oZWlnaHQgLyAyKSkgKyBpdGVtLl9vZmZzZXRZO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwiaW1hZ2VcIikge1xuXHRcdFx0XHRpdGVtLmxvYWRUZXh0dXJlKHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdH0sXG5cdFx0Z2V0TW9kYWxJdGVtOiBmdW5jdGlvbiAodHlwZSwgaW5kZXgpIHtcblx0XHRcdHJldHVybiBnYW1lLm1vZGFsc1t0eXBlXS5nZXRDaGlsZEF0KGluZGV4KTtcblx0XHR9LFxuXHRcdHNob3dNb2RhbDogZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRcdGdhbWUud29ybGQuYnJpbmdUb1RvcChnYW1lLm1vZGFsc1t0eXBlXSk7XG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdC8vIHlvdSBjYW4gYWRkIGFuaW1hdGlvbiBoZXJlXG5cdFx0fSxcblx0XHRoaWRlTW9kYWw6IGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHQvLyB5b3UgY2FuIGFkZCBhbmltYXRpb24gaGVyZVxuXHRcdH0sXG5cdFx0ZGVzdHJveU1vZGFsOiBmdW5jdGlvbiAodHlwZSkge1xuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0uZGVzdHJveSgpO1xuXHRcdFx0ZGVsZXRlIGdhbWUubW9kYWxzW3R5cGVdO1xuXHRcdH1cblx0fTtcbn07XG4iLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxyXG5cclxuY2xhc3MgQmlvZHJvbmUgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcclxuXHJcbiAgICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSwgdXVpZCkge1xyXG4gICAgICBzdXBlcihnYW1lLCB4LCB5LCAnYmlvZHJvbmUnLCBmcmFtZSk7XHJcbiAgICAgICAgICBcclxuICAgICAgLy9zZXR1cCBwaHlzaWNzIHByb3BlcnRpZXNcclxuICAgICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjY1KTtcclxuICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZUJvZHkodGhpcyk7XHJcbiAgICAgIC8vdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XHJcbiAgXHJcbiAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XHJcbiAgICAgIC8vc2V0IHNpemVcclxuICAgICAgdGhpcy53aWR0aCA9IDI3O1xyXG4gICAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xyXG4gICAgICBcclxuICAgICAgLy9zZXQgcm90YXRpb24gKHRoaXMgc2hvdWxkIGJlIGJhc2VkIG9uIHRoZSBiYXNlIHRoaXMgYmlvZHJvbmUgb2NjdXBpZXMpXHJcbiAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSAqIC0xO1xyXG4gIFxyXG4gICAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSB0aGlzLmdhbWUuc2VwdGlrb24ucGl4ZWxzVG9UaWxlKHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XHJcbiAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICBcclxuICAgIGhpZ2hsaWdodE9uKCkge1xyXG4gICAgICB0aGlzLnRpbnQgPSAweEZGNTUwMDtcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLmFscGhhID0gMTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaGlnaGxpZ2h0T2ZmKCkge1xyXG4gICAgICB0aGlzLnRpbnQgPSAweGZmZmZmZjtcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLmFscGhhID0gMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0TGVnYWxNb3ZlcygpIHtcclxuICAgICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gdGhpcy5nYW1lLnNlcHRpa29uLnBpeGVsc1RvVGlsZSh0aGlzLngsIHRoaXMueSk7XHJcbiAgICAgIHZhciBjdXJyZW50TGVnYWxNb3ZlcyA9IHRoaXMuZ2FtZS5zZXB0aWtvbi5nZXRMZWdhbE1vdmVzKHRoaXMuZ2FtZS5nbG9iYWwubGFzdERpY2VSb2xsLCB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMpO1xyXG4gICAgICB2YXIgbGVnYWxUaWxlc0FycmF5ID0gW107XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgZm9yICh2YXIgdGlsZSBpbiBjdXJyZW50TGVnYWxNb3Zlcykge1xyXG4gICAgICAgICAgbGVnYWxUaWxlc0FycmF5LnB1c2godGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVtjdXJyZW50TGVnYWxNb3Zlc1t0aWxlXS54XVtjdXJyZW50TGVnYWxNb3Zlc1t0aWxlXS55XSk7XHJcbiAgICAgICAgICAvL2xlZ2FsVGlsZXNBcnJheVtsZWdhbFRpbGVzQXJyYXkubGVuZ3RoLTFdLmFscGhhID0gMC41O1xyXG4gICAgICAgICAgLy9sZWdhbFRpbGVzQXJyYXlbbGVnYWxUaWxlc0FycmF5Lmxlbmd0aC0xXS5sZWdhbEZvciA9IHRoaXM7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHJldHVybiBsZWdhbFRpbGVzQXJyYXk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG1vdmUoY29vcmRpbmF0ZXMpIHtcclxuICAgIFxyXG4gICAgICAvLyBDbGVhciBcImxlZ2FsRm9yXCJcclxuICAgICAgZm9yICh2YXIgdGlsZSBpbiB0aGlzLmxlZ2FsVGlsZXNBcnJheSkge1xyXG4gICAgICAgICAgdGhpcy5sZWdhbFRpbGVzQXJyYXlbdGlsZV0uYWxwaGEgPSAwO1xyXG4gICAgICAgICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlc0FycmF5W3RpbGVdLmxlZ2FsRm9yO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBNb3ZlIHRvIG5ldyBob21lXHJcbiAgICAgIC8vIE5lZWQgdG8gYWRkIGEgY2hlY2sgZm9yIGFybWVkIG9wcG9uZW50cyAoYmlvZHJvbmVzL2VzcGlvbmFnZWQgY2xvbmVzL2Nsb25lcyBpbiBlbmVteSBiYXNlLCBldGMuKVxyXG4gICAgICB2YXIgcG9pbnRzID0gdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVUb1BpeGVscyhjb29yZGluYXRlcy54LCBjb29yZGluYXRlcy55KTtcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IGZhbHNlO1xyXG4gICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLmFicyh0aGlzLnkgLSBwb2ludHMueSArIHRoaXMueCAtIHBvaW50cy54KS50b0ZpeGVkKDEpO1xyXG4gICAgICBcclxuICAgICAgLy8gVXBkYXRlIHRoZSBwZXJzb25uZWwgY29vcmRpbmF0ZSBwcm9wZXJ0eVxyXG4gICAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcclxuICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XHJcbiAgICAgIFxyXG4gICAgICAvLyBXYWl0IGZvciBhbmltYXRpb24gdG8gY29tcGxldGUsIHRoZW4gcHJvY2VzcyB0aWxlIHRyaWdnZXJcclxuICAgICAgdmFyIHR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzKS50bygge3g6cG9pbnRzLngsIHk6cG9pbnRzLnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XHJcbiAgICAgIHR3ZWVuLm9uQ29tcGxldGUuYWRkKHRoaXMuZ2FtZS5zZXB0aWtvbi50cmlnZ2VyVGlsZSwgdGhpcy5nYW1lLnNlcHRpa29uKTtcclxuICAgICAgXHJcbiAgICAgIC8vIENsZWFyIHRoaXMuY3VycmVudExlZ2FsTW92ZXNcclxuICAgICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlc0FycmF5O1xyXG4gICAgICBkZWxldGUgdGhpcy5jdXJyZW50TGVnYWxNb3ZlczsgICAgXHJcbiAgICB9XHJcbiAgICAgIFxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBCaW9kcm9uZTtcclxuICAiLCJcbmNsYXNzIENsaWVudCB7XG4gICAgXG5cdGNvbnN0cnVjdG9yKHNlcHRpa29uKSB7XG4gICAgICAgIFxuXHRcdHRoaXMuc29ja2V0ID0gaW8uY29ubmVjdCgpO1xuICAgICAgICB0aGlzLnNlcHRpa29uID0gdGhpcy5zb2NrZXQuc2VwdGlrb24gPSBzZXB0aWtvbjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdsb2cnLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMT0c6ICcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCd1cGRhdGUnLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGlmKGRhdGEudHlwZSA9PSBcInBlcnNvbm5lbFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi51cGRhdGVQZXJzb25uZWwoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihkYXRhLnR5cGUgPT0gXCJvcmRuYW5jZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi51cGRhdGVPcmRuYW5jZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGRhdGEudHlwZSA9PSBcInJlc291cmNlc1wiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi51cGRhdGVSZXNvdXJjZXMoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihkYXRhLnR5cGUgPT0gXCJ0aWxlc1wiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi51cGRhdGVUaWxlcyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT0gXCJkaWNlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLmdhbWUuZGljZS5zZXRWYWx1ZShkYXRhLmRldGFpbHMudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZGF0YS50eXBlID09IFwiYXJtc1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGUgcGVyc29ubmVsIGFybXMhXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24udXBkYXRlQXJtcyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT0gXCJpbmZvXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNlcHRpa29uLnVwZGF0ZUluZm8oZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdyZXF1ZXN0JywgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUkVRVUVTVDogJyk7XG4gICAgICAgICAgICBzd2l0Y2goZGF0YS5kZXRhaWxzLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiYXNrU3RhcnRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi5zaG93TW9kYWwoJ2Fza1N0YXJ0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdhY3Rpb24nLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQUNUSU9OOiBcIik7XG4gICAgICAgICAgICBpZiAodHlwZW9mKHRoaXMuc2VwdGlrb25bZGF0YS5jYWxsYmFja10pID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uW2RhdGEuY2FsbGJhY2tdKGRhdGEuZGV0YWlscyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUjogbm8gbWV0aG9kIGZvdW5kIGNhbGxlZCBzZXB0aWtvbi5cIiArIGRhdGEuY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblx0fVxuXG5cdGFza05ld1BsYXllcigpIHtcblx0XHR0aGlzLnNvY2tldC5lbWl0KCduZXdQbGF5ZXInLCB7dXVpZDpsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VwdFVVSUQnKX0pO1xuXHR9XG4gICAgXG4gICAgc2VuZElucHV0KHBheWxvYWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbmRpbmcgaW5wdXQnKTtcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnaW5wdXQnLCBwYXlsb2FkKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENsaWVudDtcbiIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXG5cbmNsYXNzIENsb25lIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSwgdXVpZCkge1xuICAgIHN1cGVyKGdhbWUsIHgsIHksICdjbG9uZScsIGZyYW1lKTtcbiAgICAgICAgXG4gICAgLy9zZXR1cCBwaHlzaWNzIHByb3BlcnRpZXNcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNjUpO1xuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGVCb2R5KHRoaXMpO1xuICAgIC8vdGhpcy5ib2R5LmNvbGxpZGVXb3JsZEJvdW5kcyA9IHRydWU7XG5cbiAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgIC8vc2V0IHNpemVcbiAgICB0aGlzLndpZHRoID0gMjc7XG4gICAgdGhpcy5zY2FsZS55ID0gTWF0aC5hYnModGhpcy5zY2FsZS54KTtcbiAgICBcbiAgICAvL3NldCByb3RhdGlvbiAodGhpcyBzaG91bGQgYmUgYmFzZWQgb24gdGhlIGJhc2UgdGhpcyBjbG9uZSBvY2N1cGllcylcbiAgICB0aGlzLmFuZ2xlID0gdGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLmFuZ2xlICogLTE7XG5cbiAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSB0aGlzLmdhbWUuc2VwdGlrb24ucGl4ZWxzVG9UaWxlKHRoaXMueCwgdGhpcy55KTtcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gdHJ1ZTtcbiAgICB0aGlzLmdhbWUucGVyc29ubmVsR3JvdXAuYWRkKHRoaXMpO1xuICB9XG4gIFxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG5cbiAgaGlnaGxpZ2h0T24oKSB7XG4gICAgdGhpcy50aW50ID0gMHhGRjU1MDA7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLmFscGhhID0gMTtcbiAgfVxuICBcbiAgaGlnaGxpZ2h0T2ZmKCkge1xuICAgIHRoaXMudGludCA9IDB4ZmZmZmZmO1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS5hbHBoYSA9IDA7XG4gIH1cbiAgXG4gIGdldExlZ2FsTW92ZXMoKSB7XG4gICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gdGhpcy5nYW1lLnNlcHRpa29uLnBpeGVsc1RvVGlsZSh0aGlzLngsIHRoaXMueSk7XG4gICAgdmFyIGN1cnJlbnRMZWdhbE1vdmVzID0gdGhpcy5nYW1lLnNlcHRpa29uLmdldExlZ2FsTW92ZXModGhpcy5nYW1lLmdsb2JhbC5sYXN0RGljZVJvbGwsIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyk7XG4gICAgdmFyIGxlZ2FsVGlsZXNBcnJheSA9IFtdO1xuICAgIFxuICAgIFxuICAgIGZvciAodmFyIHRpbGUgaW4gY3VycmVudExlZ2FsTW92ZXMpIHtcbiAgICAgICAgbGVnYWxUaWxlc0FycmF5LnB1c2godGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVtjdXJyZW50TGVnYWxNb3Zlc1t0aWxlXS54XVtjdXJyZW50TGVnYWxNb3Zlc1t0aWxlXS55XSk7XG4gICAgICAgIC8vbGVnYWxUaWxlc0FycmF5W2xlZ2FsVGlsZXNBcnJheS5sZW5ndGgtMV0uYWxwaGEgPSAwLjU7XG4gICAgICAgIC8vbGVnYWxUaWxlc0FycmF5W2xlZ2FsVGlsZXNBcnJheS5sZW5ndGgtMV0ubGVnYWxGb3IgPSB0aGlzO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbGVnYWxUaWxlc0FycmF5O1xuICB9XG4gIFxuICBtb3ZlKGNvb3JkaW5hdGVzKSB7XG4gIFxuICAgIC8vIENsZWFyIFwibGVnYWxGb3JcIlxuICAgIGZvciAodmFyIHRpbGUgaW4gdGhpcy5sZWdhbFRpbGVzQXJyYXkpIHtcbiAgICAgICAgdGhpcy5sZWdhbFRpbGVzQXJyYXlbdGlsZV0uYWxwaGEgPSAwO1xuICAgICAgICBkZWxldGUgdGhpcy5sZWdhbFRpbGVzQXJyYXlbdGlsZV0ubGVnYWxGb3I7XG4gICAgfVxuICAgIFxuICAgIC8vIE1vdmUgdG8gbmV3IGhvbWVcbiAgICAvLyBOZWVkIHRvIGFkZCBhIGNoZWNrIGZvciBhcm1lZCBvcHBvbmVudHMgKGJpb2Ryb25lcy9lc3Bpb25hZ2VkIGNsb25lcy9jbG9uZXMgaW4gZW5lbXkgYmFzZSwgZXRjLilcbiAgICB2YXIgcG9pbnRzID0gdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVUb1BpeGVscyhjb29yZGluYXRlcy54LCBjb29yZGluYXRlcy55KTtcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gZmFsc2U7XG4gICAgdmFyIGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy55IC0gcG9pbnRzLnkgKyB0aGlzLnggLSBwb2ludHMueCkudG9GaXhlZCgxKTtcbiAgICBcbiAgICAvLyBVcGRhdGUgdGhlIHBlcnNvbm5lbCBjb29yZGluYXRlIHByb3BlcnR5XG4gICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XG4gICAgXG4gICAgLy8gV2FpdCBmb3IgYW5pbWF0aW9uIHRvIGNvbXBsZXRlLCB0aGVuIHByb2Nlc3MgdGlsZSB0cmlnZ2VyXG4gICAgdmFyIHR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzKS50bygge3g6cG9pbnRzLngsIHk6cG9pbnRzLnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XG4gICAgdHdlZW4ub25Db21wbGV0ZS5hZGQodGhpcy5nYW1lLnNlcHRpa29uLnRyaWdnZXJUaWxlLCB0aGlzLmdhbWUuc2VwdGlrb24pO1xuICAgIFxuICAgIC8vIENsZWFyIHRoaXMuY3VycmVudExlZ2FsTW92ZXNcbiAgICBkZWxldGUgdGhpcy5sZWdhbFRpbGVzQXJyYXk7XG4gICAgZGVsZXRlIHRoaXMuY3VycmVudExlZ2FsTW92ZXM7ICAgIFxuICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IENsb25lO1xuIiwiLy9Eb2N1bWVudGF0aW9uIGZvciBQaGFzZXIncyAoMi42LjIpIHNwcml0ZXM6OiBwaGFzZXIuaW8vZG9jcy8yLjYuMi9QaGFzZXIuU3ByaXRlLmh0bWxcclxuY2xhc3MgQ29uZmlybSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xyXG5cclxuICAgIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHkpIHsgIFxyXG4gICAgICBzdXBlcihnYW1lLCB4LCB5LCAndGV4dF9nbycpO1xyXG4gIFxyXG4gICAgICAvL3NldHVwIHBoeXNpY3MgcHJvcGVydGllc1xyXG4gICAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XHJcbiAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGVCb2R5KHRoaXMpO1xyXG4gIFxyXG4gICAgICAvL3NldCBjbGljayBldmVudFxyXG4gICAgICB0aGlzLmlucHV0RW5hYmxlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuZXZlbnRzLm9uSW5wdXREb3duLmFkZCh0aGlzLmNsaWNrZWQsIHRoaXMpO1xyXG4gIFxyXG4gICAgICAvL3NldCBzaXplXHJcbiAgICAgIHRoaXMud2lkdGggPSA1MDtcclxuICAgICAgdGhpcy5zY2FsZS55ID0gTWF0aC5hYnModGhpcy5zY2FsZS54KTtcclxuICAgICAgLy8gdGhpcy5maWx0ZXJzID0gW3RoaXMuZ2FtZS5hZGQuZmlsdGVyKCdHcmF5JyldO1xyXG4gICAgICAvLyB0aGlzLmFscGhhID0gMC41O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY2xpY2tlZCAoKSB7XHJcbiAgICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ2NvbmZpcm1DbGlja2VkJ30pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZW5hYmxlKCkge1xyXG4gICAgICAgIC8vIHRoaXMuYWxwaGEgPSAxO1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IG51bGw7XHJcbiAgICAgICAgLy8gdGhpcy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGlzYWJsZSgpIHtcclxuICAgICAgICAvLyB0aGlzLmFscGhhID0gMC41O1xyXG4gICAgICAgIC8vIHRoaXMuZmlsdGVycyA9IFt0aGlzLmdhbWUuYWRkLmZpbHRlcignR3JheScpXTtcclxuICAgICAgICAvLyB0aGlzLmlucHV0RW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBDb25maXJtO1xyXG4gICIsIi8vRG9jdW1lbnRhdGlvbiBmb3IgUGhhc2VyJ3MgKDIuNi4yKSBzcHJpdGVzOjogcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLlNwcml0ZS5odG1sXG5jbGFzcyBDcm9zc2hhaXJzIGV4dGVuZHMgUGhhc2VyLlNwcml0ZSB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihnYW1lLCB4LCB5LCBmcmFtZSkge1xuICAgIHN1cGVyKGdhbWUsIHgsIHksICdjcm9zc2hhaXJzJywgZnJhbWUpO1xuXG4gICAgLy9zZXQgc2l6ZVxuICAgIHRoaXMud2lkdGggPSAzNTsgXG4gICAgdGhpcy5zY2FsZS55ID0gTWF0aC5hYnModGhpcy5zY2FsZS54KTtcblxuICAgIHRoaXMuYW5jaG9yLnNldFRvKDAuNSwgMC41KTtcbiAgfVxuXG4gIHVwZGF0ZSgpe1xuICAgIHRoaXMueCA9IHRoaXMuZ2FtZS5pbnB1dC5tb3VzZVBvaW50ZXIueDtcbiAgICB0aGlzLnkgPSB0aGlzLmdhbWUuaW5wdXQubW91c2VQb2ludGVyLnk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDcm9zc2hhaXJzO1xuIiwiLy9Eb2N1bWVudGF0aW9uIGZvciBQaGFzZXIncyAoMi42LjIpIHNwcml0ZXM6OiBwaGFzZXIuaW8vZG9jcy8yLjYuMi9QaGFzZXIuU3ByaXRlLmh0bWxcbmNsYXNzIERpY2UgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7ICBcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnZGljZScsIGZyYW1lKTtcblxuICAgIC8vc2V0dXAgcGh5c2ljcyBwcm9wZXJ0aWVzXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICAgIHRoaXMuZ2FtZS5waHlzaWNzLmFyY2FkZS5lbmFibGVCb2R5KHRoaXMpO1xuXG4gICAgLy9zZXQgY2xpY2sgZXZlbnRcbiAgICB0aGlzLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5ldmVudHMub25JbnB1dERvd24uYWRkKHRoaXMuY2xpY2tlZCwgdGhpcyk7XG5cbiAgICAvL3NldCBzaXplXG4gICAgdGhpcy53aWR0aCA9IDUwO1xuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XG4gICAgLy8gdGhpcy5maWx0ZXJzID0gW3RoaXMuZ2FtZS5hZGQuZmlsdGVyKCdHcmF5JyldO1xuICAgIC8vIHRoaXMuYWxwaGEgPSAwLjU7XG4gICAgXG4gICAgdGhpcy52YWx1ZSA9IDEwO1xuICAgIHRoaXMuZnJhbWUgPSB0aGlzLnZhbHVlLTE7XG4gIH1cblxuICBjbGlja2VkICgpIHtcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICdkaWNlQ2xpY2tlZCd9KTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICAgIHRoaXMuYWxwaGEgPSAxO1xuICAgICAgdGhpcy5maWx0ZXJzID0gbnVsbDtcbiAgICAgIHRoaXMuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgICAvLyB0aGlzLmFscGhhID0gMC41O1xuICAgICAgLy8gdGhpcy5maWx0ZXJzID0gW3RoaXMuZ2FtZS5hZGQuZmlsdGVyKCdHcmF5JyldO1xuICAgICAgLy8gdGhpcy5pbnB1dEVuYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuZnJhbWUgPSB2YWx1ZSAtIDE7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGljZTtcbiIsImNsYXNzIE1hc3RlciB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcigpIHsgXG4gIH1cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hc3RlcjsiLCJjbGFzcyBPcmRuYW5jZSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUsIHR5cGUsIHV1aWQpIHtcbiAgICB2YXIgb3JkRnJhbWU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwic2hpZWxkXCI6XG4gICAgICAgIG9yZEZyYW1lID0gNDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYmlvZHJvbmVcIjpcbiAgICAgICAgb3JkRnJhbWUgPSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzYXRlbGxpdGVcIjpcbiAgICAgICAgb3JkRnJhbWUgPSA1O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJyb2NrZXRcIjpcbiAgICAgICAgb3JkRnJhbWUgPSAyO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJCYWQgb3JkbmFuY2UgdHlwZVwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN1cGVyKGdhbWUsIHgsIHksICdvcmRuYW5jZScsIG9yZEZyYW1lKTtcbiAgICAgICAgXG4gICAgLy9zZXR1cCBwaHlzaWNzIHByb3BlcnRpZXNcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZUJvZHkodGhpcyk7XG4gICAgLy90aGlzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcblxuICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAvL3NldCBzaXplXG4gICAgdGhpcy53aWR0aCA9IDUwO1xuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XG4gICAgXG4gICAgLy9zZXQgcm90YXRpb24gKHRoaXMgc2hvdWxkIGJlIGJhc2VkIG9uIHRoZSBiYXNlIHRoaXMgY2xvbmUgb2NjdXBpZXMpXG4gICAgdGhpcy5hbmdsZSA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFuZ2xlICogLTE7XG5cbiAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSB0aGlzLmdhbWUuc2VwdGlrb24ucGl4ZWxzVG9UaWxlKHRoaXMueCwgdGhpcy55KTtcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gdHJ1ZTtcblxuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBPcmRuYW5jZTsiLCJjbGFzcyBQZXJzb25uZWwgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUpIHtcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2Nsb25lJywgZnJhbWUpOyAgXG4gICAgfVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyc29ubmVsOyIsImNsYXNzIFJlc291cmNlcyB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcigpIHsgXG4gICAgdGhpcy5yZXNvdXJjZUVudW0gPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgT1hZR0VOOiAwLFxuICAgICAgICBST0NLRVQ6IDEsXG4gICAgICAgIE1FVEFMOiAyLFxuICAgICAgICBFTkVSR1k6IDMsXG4gICAgICAgIEJJT01BU1M6IDQsXG4gICAgICAgIEJJT0RST05FOiA1LFxuICAgICAgICBVUkFOSVVNOiA2XG4gICAgfSk7XG4gICAgdGhpcy5yZXNvdXJjZXMgPSB7fTtcbiAgICBmb3IodmFyIHR5cGUgaW4gdGhpcy5yZXNvdXJjZUVudW0pIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXNbdGhpcy5yZXNvdXJjZUVudW1bdHlwZV1dID0gNTtcbiAgICB9XG4gIH1cbiAgXG4gIGNoZWNrKHR5cGUsIGNvdW50KSB7XG4gICAgaWYodGhpcy5yZXNvdXJjZXNbdGhpcy5yZXNvdXJjZUVudW1bdHlwZV1dID4gY291bnQpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIGdldENvdW50KHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZXNbdHlwZV07XG4gIH1cbiAgICBcbiAgYWRkKHR5cGUsIGNvdW50KSB7XG4gIH1cbiAgXG4gIHJlbW92ZSh0eXBlLCBjb3VudCkge1xuICAgIHRoaXMucmVzb3VyY2VzW3R5cGVdIC09IGNvdW50O1xuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNvdXJjZXM7IiwiaW1wb3J0IENsb25lIGZyb20gJy4uL3ByZWZhYnMvY2xvbmUnO1xuaW1wb3J0IEJpb2Ryb25lIGZyb20gJy4uL3ByZWZhYnMvYmlvZHJvbmUnO1xuaW1wb3J0IE9yZG5hbmNlIGZyb20gJy4uL3ByZWZhYnMvb3JkbmFuY2UnO1xuXG5jbGFzcyBTZXB0aWtvbiB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7IFxuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5wbGF5ZXIgPSB7IFxuICAgICAgICBwZXJzb25uZWxBcnJheTogW10sXG4gICAgICAgIG9yZG5hbmNlQXJyYXk6IFtdXG4gICAgfTtcbiAgICB0aGlzLm9wcG9uZW50ID0ge1xuICAgICAgICBwZXJzb25uZWxBcnJheTogW10sXG4gICAgICAgIG9yZG5hbmNlQXJyYXk6IFtdXG4gICAgfTtcbiAgICBcbiAgICB0aGlzLnNob3duVGlsZXMgPSBbXTtcbiAgICB0aGlzLnRpbGVBcnJheSA9IFtdO1xuXG4gICAgdGhpcy5sZWdhbE1vdmVzID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGVkVG9Nb3ZlID0gbnVsbDtcbiAgICB0aGlzLmxlZ2FsR3VubmVycyA9IG51bGw7XG5cbiAgICB0aGlzLmNob29zaW5nVGFyZ2V0cyA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzID0gW107XG4gIH1cblxuICAgIHVwZGF0ZVBlcnNvbm5lbChkYXRhKSB7XG4gICAgICAgIC8vIE1PVkUgcGVyc29ubmVsXG5cbiAgICAgICAgaWYgKGRhdGEuZGV0YWlscy5hY3Rpb24gPT09IFwiYWRkXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkaW5nIHBlcnNvbm5lbFwiKTtcbiAgICAgICAgICAgIHRoaXMuYWRkUGVyc29ubmVsKGRhdGEuZGV0YWlscy5wZXJzb25uZWwsIGRhdGEuZGV0YWlscy5wbGF5ZXJJRCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5kZXRhaWxzLmFjdGlvbiA9PT0gXCJyZW1vdmVcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZW1vdmluZyBwZXJzb25uZWxcIik7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVBlcnNvbm5lbChkYXRhLmRldGFpbHMucGVyc29ubmVsLCBkYXRhLmRldGFpbHMucGxheWVySUQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEuZGV0YWlscy5hY3Rpb24gPT09IFwibW92ZVwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1vdmluZyBwZXJzb25uZWxcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG15UGVyc29uID0gdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXlbal07XG4gICAgICAgICAgICAgICAgaWYgKG15UGVyc29uLnV1aWQgPT09IGRhdGEuZGV0YWlscy5wZXJzb25uZWwudXVpZCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9pbnQgPSB0aGlzLnRpbGVUb1BpeGVscyhkYXRhLmRldGFpbHMucGVyc29ubmVsLngsIGRhdGEuZGV0YWlscy5wZXJzb25uZWwueSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IE1hdGguYWJzKG15UGVyc29uLnkgLSBwb2ludC55ICsgbXlQZXJzb24ueCAtIHBvaW50LngpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5hZGQudHdlZW4obXlQZXJzb24pLnRvKCB7eDpwb2ludC54LCB5OnBvaW50Lnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2pdID0gZGF0YS5kZXRhaWxzLnBlcnNvbm5lbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLy8gZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgLy8gICAgIGxldCBteVBlcnNvbiA9IHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2pdO1xuICAgICAgICAgICAgLy8gICAgIGlmIChteVBlcnNvbi51dWlkID09PSBwLnV1aWQpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgbWF0Y2hGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAvLyB2YXIgY3VycmVudFBlcnNvbm5lbCA9IG51bGw7XG4gICAgICAgIC8vIGlmIChBcnJheS5pc0FycmF5KGRhdGEuZGV0YWlscykgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vICAgICBkYXRhLmRldGFpbHMgPSBbZGF0YS5kZXRhaWxzXTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIGlmICh0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5Lmxlbmd0aCA9PT0gMCAmJiBkYXRhLmRldGFpbHMubGVuZ3RoID09PSA1KSB7XG4gICAgICAgIC8vICAgICBmb3IgKHZhciBpIGluIGRhdGEuZGV0YWlscykge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuYWRkQ2xvbmUoZGF0YS5kZXRhaWxzW2ldKTtcbiAgICAgICAgLy8gICAgIH0gICAgICBcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIGZvciAodmFyIHAgaW4gdGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheSkge1xuICAgICAgICAvLyAgICAgICAgIGN1cnJlbnRQZXJzb25uZWwgPSB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5W3BdO1xuICAgICAgICAvLyAgICAgICAgIGZvciAodmFyIGQgaW4gZGF0YS5kZXRhaWxzKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChjdXJyZW50UGVyc29ubmVsLnV1aWQgPT0gZGF0YS5kZXRhaWxzW2RdLnV1aWQpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubW92ZVBlcnNvbm5lbChkYXRhLmRldGFpbHNbZF0pO1xuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgdXBkYXRlT3JkbmFuY2UoZGF0YSkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICB1cGRhdGVSZXNvdXJjZXMoZGF0YSkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICB1cGRhdGVUaWxlcyhkYXRhKSB7XG4gICAgICAgIFxuICAgIH1cblxuICBzaG93TW9kYWwodHlwZSkge1xuICAgIHRoaXMuZ2FtZS5tb2RhbC5zaG93TW9kYWwodHlwZSk7XG4gIH1cbiAgXG4gIGRpY2VSb2xsZWQoZGV0YWlscykge1xuICAgIHRoaXMuZ2FtZS5kaWNlLnNldFZhbHVlKGRldGFpbHMudmFsdWUpO1xuICAgIHRoaXMubGVnYWxNb3ZlcyA9IGRldGFpbHMuZ2FtZVBpZWNlcztcbiAgICB2YXIgcG9pbnRBcnJheSA9IFtdO1xuICAgIC8vIGNvbnNvbGUubG9nKGRldGFpbHMuZ2FtZVBpZWNlc1swXS5vcmlnaW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGV0YWlscy5nYW1lUGllY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBvaW50QXJyYXkucHVzaCh7IHg6IGRldGFpbHMuZ2FtZVBpZWNlc1tpXS5vcmlnaW4ueCwgeTogZGV0YWlscy5nYW1lUGllY2VzW2ldLm9yaWdpbi55IH0pO1xuICAgIH1cbiAgICB0aGlzLnNob3dUaWxlcyhwb2ludEFycmF5LCAweEY2MzYzNik7XG4gIH1cblxuICBvZmZlckRpY2UoKSB7XG4gICAgICB0aGlzLmdhbWUuZGljZS5lbmFibGUoKTtcbiAgfVxuXG4gIHRha2VEaWNlKCkge1xuICAgICAgdGhpcy5nYW1lLmRpY2UuZGlzYWJsZSgpO1xuICB9XG5cbiAgb2ZmZXJHdW5uZXJzKGRhdGEpIHtcbiAgICAgIHRoaXMuY2hvb3NpbmdUYXJnZXRzID0gdHJ1ZTtcbiAgICAgIHRoaXMubGVnYWxHdW5uZXJzID0gZGF0YS5ndW5uZXJzO1xuICAgICAgdGhpcy5nYW1lLmdvLmVuYWJsZSgpO1xuICAgICAgY29uc29sZS5sb2coXCJhbmltYXRlIHNvbWUgaW5kaWNhdGlvbiBvZiB2aWFibGUgZ3VubmVycyBvbiB0aGUgc3VyZmFjZS4gTWF5YmUgYSBwb2ludGVyIGJvdW5jaW5nIG92ZXIgdGhlbT9cIik7XG4gICAgICAvL1RPRE86IEVtaXQgYW4gaW5kaWNhdG9yIGZvciBzZWxlY3RpbmcgYSBndW5uZXJcbiAgfVxuICBcbiAgYWRkUGVyc29ubmVsKHBlcnNvbm5lbCwgcGxheWVySUQpIHtcbiAgICBsZXQgcG9pbnQgPSB0aGlzLnRpbGVUb1BpeGVscyhwZXJzb25uZWwueCwgcGVyc29ubmVsLnkpO1xuICAgIGxldCBuZXdQZXJzb25uZWwgPSBudWxsO1xuICAgIGlmIChwZXJzb25uZWwudHlwZUVudW0uQ0xPTkUgPT09IHBlcnNvbm5lbC50eXBlKSB7XG4gICAgICAgIG5ld1BlcnNvbm5lbCA9IG5ldyBDbG9uZSh0aGlzLmdhbWUsIHBvaW50LngsIHBvaW50LnksIG51bGwsIHBlcnNvbm5lbC51dWlkKTtcbiAgICB9IGVsc2UgaWYgKHBlcnNvbm5lbC50eXBlRW51bS5CSU9EUk9ORSA9PT0gcGVyc29ubmVsLnR5cGUpIHtcbiAgICAgICAgbmV3UGVyc29ubmVsID0gbmV3IEJpb2Ryb25lKHRoaXMuZ2FtZSwgcG9pbnQueCwgcG9pbnQueSwgbnVsbCwgcGVyc29ubmVsLnV1aWQpO1xuICAgIH1cbiAgICBpZihwbGF5ZXJJRCA9PSB0aGlzLnBsYXllci5pZCkge1xuICAgICAgICB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheS5wdXNoKG5ld1BlcnNvbm5lbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheS5wdXNoKG5ld1BlcnNvbm5lbCk7XG4gICAgfVxuICB9XG5cbiAgYWRkT3JkbmFuY2UoZGV0YWlscykge1xuICAgIHZhciBwb2ludCA9IHRoaXMudGlsZVRvUGl4ZWxzKGRldGFpbHMucG9pbnQueCwgZGV0YWlscy5wb2ludC55KTtcbiAgICB2YXIgb3JkID0gbmV3IE9yZG5hbmNlKHRoaXMuZ2FtZSwgcG9pbnQueCwgcG9pbnQueSwgbnVsbCwgZGV0YWlscy50eXBlLCBkZXRhaWxzLnV1aWQpO1xuICAgIGlmKGRldGFpbHMucGxheWVySUQgPT0gdGhpcy5wbGF5ZXIuaWQpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheS5wdXNoKG9yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcHBvbmVudC5vcmRuYW5jZUFycmF5LnB1c2gob3JkKTtcbiAgICB9XG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKG9yZCk7XG4gIH1cblxuICBtb3ZlUGVyc29ubmVsKGRhdGEpIHtcbiAgICBsZXQgdHdlZW4gPSBudWxsO1xuICAgIGxldCBkaXN0YW5jZSA9IG51bGw7XG4gICAgbGV0IHBvaW50ID0gdGhpcy50aWxlVG9QaXhlbHMoZGF0YS54LCBkYXRhLnkpO1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXkpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnV1aWQgPT0gZGF0YS51dWlkKSB7XG4gICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnkgLSBwb2ludC55ICsgdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueCAtIHBvaW50LngpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0pLnRvKCB7eDpwb2ludC54LCB5OnBvaW50Lnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XG4gICAgICAgICAgICAvLyBUcmlnZ2VyIHRpbGUuIE5vdCBxdWl0ZSBzdXJlIGhvdyB0byBkbyB0aGlzIHlldC5cbiAgICAgICAgICAgIC8vdHdlZW4ub25Db21wbGV0ZS5hZGQodGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAnbW92ZUNvbXBsZXRlJywgeDpwYXJzZUludChvYmoudGlsZVgpLCB5OnBhcnNlSW50KG9iai50aWxlWSl9KTssIHRoaXMuZ2FtZS5zZXB0aWtvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgaiBpbiB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5KSB7XG4gICAgICAgIGlmICh0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5W2pdLnV1aWQgPT0gZGF0YS51dWlkKSB7XG4gICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXlbal0ueSAtIHBvaW50LnkgKyB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5W2pdLnggLSBwb2ludC54KS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXlbal0pLnRvKCB7eDpwb2ludC54LCB5OnBvaW50Lnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3ZlT3JkbmFuY2UoZGF0YSkge1xuICAgIHZhciB0d2VlbiA9IG51bGw7XG4gICAgdmFyIGRpc3RhbmNlID0gbnVsbDtcbiAgICB2YXIgcG9pbnQgPSBudWxsO1xuICAgIGZvciAodmFyIGRhdGFJbmRleCA9IDA7IGRhdGFJbmRleCA8IGRhdGEubGVuZ3RoOyBkYXRhSW5kZXgrKykge1xuICAgICAgICBwb2ludCA9IHRoaXMudGlsZVRvUGl4ZWxzKGRhdGFbZGF0YUluZGV4XS54LCBkYXRhW2RhdGFJbmRleF0ueSk7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLm9yZG5hbmNlQXJyYXlbaV0udXVpZCA9PSBkYXRhW2RhdGFJbmRleF0udXVpZCkge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheVtpXS55IC0gcG9pbnQueSArIHRoaXMucGxheWVyLm9yZG5hbmNlQXJyYXlbaV0ueCAtIHBvaW50LngpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMucGxheWVyLm9yZG5hbmNlQXJyYXlbaV0pLnRvKCB7eDpwb2ludC54LCB5OnBvaW50Lnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaiBpbiB0aGlzLm9wcG9uZW50Lm9yZG5hbmNlQXJyYXkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wcG9uZW50Lm9yZG5hbmNlQXJyYXlbal0udXVpZCA9PSBkYXRhW2RhdGFJbmRleF0udXVpZCkge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy5vcHBvbmVudC5vcmRuYW5jZUFycmF5W2pdLnkgLSBwb2ludC55ICsgdGhpcy5vcHBvbmVudC5vcmRuYW5jZUFycmF5W2pdLnggLSBwb2ludC54KS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgIHR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLm9wcG9uZW50Lm9yZG5hbmNlQXJyYXlbal0pLnRvKCB7eDpwb2ludC54LCB5OnBvaW50Lnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIHJlbW92ZVBlcnNvbm5lbChkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cC5jaGlsZHJlbik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLmNoaWxkcmVuW2ldLnV1aWQgPT09IGRhdGEudXVpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cC5jaGlsZHJlbltpXS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLmNoaWxkcmVuKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgICAgaWYgKHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnV1aWQgPT0gZGF0YS51dWlkKSB7XG4gICAgLy8gICAgICAgICAgIGxldCBwZXJzb25uZWxUb0Rlc3Ryb3kgPSB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtpXTtcbiAgICAvLyAgICAgICAgICAgdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXkuc3BsaWNlKGksMSk7XG4gICAgLy8gICAgICAgICAgIHBlcnNvbm5lbFRvRGVzdHJveS5kZXN0cm95KCk7XG4gICAgLy8gICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlbW92ZUFsbFBlcnNvbm5lbCgpe1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYodGhpcy5nYW1lLmJvYXJkR3JvdXAuY2hpbGRyZW5baV0uY29uc3RydWN0b3IgPT0gQ2xvbmUpe1xuICAgICAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIFxuICB1cGRhdGVQbGF5ZXIoZGV0YWlscykge1xuICAgIGZvciAodmFyIGkgaW4gZGV0YWlscykge1xuICAgICAgICB0aGlzLnBsYXllcltpXSA9IGRldGFpbHNbaV07XG4gICAgfVxuXG4gICAgLy8gREVCVUcgQkxPQ0tcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICd0aWxlQ2xpY2tlZCcsIHg6NywgeTowfSk7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAndGlsZUNsaWNrZWQnLCB4OjcsIHk6MTl9KTtcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICd0aWxlQ2xpY2tlZCcsIHg6NiwgeToxMH0pO1xuICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ3RpbGVDbGlja2VkJywgeDo0LCB5OjEwfSk7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAndGlsZUNsaWNrZWQnLCB4OjAsIHk6MTB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAndGlsZUNsaWNrZWQnLCB4OjIzLCB5OjIwfSk7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAndGlsZUNsaWNrZWQnLCB4OjIzLCB5OjF9KTtcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICd0aWxlQ2xpY2tlZCcsIHg6MjQsIHk6MTB9KTtcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICd0aWxlQ2xpY2tlZCcsIHg6MjYsIHk6MTB9KTtcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICd0aWxlQ2xpY2tlZCcsIHg6MzAsIHk6MTB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gIH1cblxuICBpbml0UmVzb3VyY2VzKCkge1xuICAgIHZhciBjdXJyZW50UmVjID0gbnVsbDtcbiAgICB2YXIgZ3JhcGhpY3MgPSB0aGlzLmdhbWUuYWRkLmdyYXBoaWNzKDAsIDApO1xuICAgIC8vZ3JhcGhpY3MubGluZVN0eWxlKDQsIDB4ZmZkOTAwLCAxKTtcbiAgICBncmFwaGljcy5iZWdpbkZpbGwoMHhmZmZmZmYsIDEpO1xuICAgIGdyYXBoaWNzLmRyYXdSb3VuZGVkUmVjdCgxMDAsIDEwMCwgdGhpcy50aWxlV2lkdGgtNCwgdGhpcy50aWxlSGVpZ2h0LTQsIDE0KTtcblxuICAgIGZvciAodmFyIGMgaW4gdGhpcy50aWxlQXJyYXkpIHtcbiAgICAgICAgZm9yICh2YXIgciBpbiB0aGlzLnRpbGVBcnJheVtjXSkge1xuICAgICAgICAgICAgaWYodGhpcy50aWxlQXJyYXlbY11bcl0udGlsZU93bmVyID09IHRoaXMucGxheWVyLmlkICYmIHRoaXMudGlsZUFycmF5W2NdW3JdLnRpbGVUeXBlID09IFwid2FyZWhvdXNlXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAociA8IDUgfHwgciA+IDE1KSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh0aGlzLnRpbGVBcnJheVtjXVtyXS54Kyh0aGlzLnRpbGVBcnJheVtjXVtyXS53aWR0aC8yKSwgdGhpcy50aWxlQXJyYXlbY11bcl0ueSsodGhpcy50aWxlQXJyYXlbY11bcl0ud2lkdGgvMiksIGdyYXBoaWNzLmdlbmVyYXRlVGV4dHVyZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYy5hbmdsZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0MCktMjA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMuYW5jaG9yLnNldFRvKDAuNSk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy50aWxlQXJyYXlbY11bcl0udGlsZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlbmVyZ3lcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweGZjZTMxNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJveHlnZW5cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweDAwYjFmMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyb2NrZXRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweGU4MmEyYztcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtZXRhbFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4ZmZmZmZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJpb21hc3NcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweDhhYzM0MjtcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJiaW9kcm9uZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4OWYzYTliO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInVyYW5pdW1cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweGYzNjUyMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQoY3VycmVudFJlYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdyYXBoaWNzLmRlc3Ryb3koKTtcbiAgfVxuICBcbiAgY3JlYXRlVGlsZUFycmF5KGNvbHVtbnMsIHJvd3MsIHBvaW50KSB7XG4gICAgdGhpcy50aWxlRGV0YWlsID0gdGhpcy5nYW1lLmNhY2hlLmdldEpTT04oJ3RpbGVEZXRhaWwnKTtcblxuICAgIHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMgPSB7eDowLCB5OjB9O1xuXG4gICAgdmFyIHgsIHk7XG4gICAgXG4gICAgdGhpcy5tYXJnaW5Cb3R0b20gPSB0aGlzLm1hcmdpblRvcCA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmhlaWdodC8xNy40NzU7XG4gICAgdGhpcy5tYXJnaW5MZWZ0ID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGgvMjQ7XG4gICAgdGhpcy5tYXJnaW5SaWdodCA9ICB0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aC8yNi4zMTU4O1xuICAgIHRoaXMudGlsZVdpZHRoID0gdGhpcy50aWxlSGVpZ2h0ID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGgvMzk7XG4gICAgdGhpcy5wYWRkaW5nID0gKHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoIC0gKHRoaXMubWFyZ2luTGVmdCArIHRoaXMubWFyZ2luUmlnaHQpIC0gKHRoaXMudGlsZVdpZHRoICogMzEpKS8zMDtcbiAgICAgICAgXG4gICAgLy90aGlzLnRpbGVXaWR0aCA9IDI1Oy8vKHRoaXMuYmFja2dyb3VuZFdpZHRoIC0gKCh0aGlzLm1hcmdpbkxlZnQgKyB0aGlzLm1hcmdpblJpZ2h0KSArICh0aGlzLnBhZGRpbmcgKiAoY29sdW1ucyAtIDEpKSkpIC8gY29sdW1ucztcbiAgICAvL3RoaXMudGlsZUhlaWdodCA9IDI1Oy8vKHRoaXMuYmFja2dyb3VuZEhlaWdodCAtICgodGhpcy5tYXJnaW5Ub3AgKyB0aGlzLm1hcmdpbkJvdHRvbSkgKyAodGhpcy5wYWRkaW5nICogKHJvd3MgLSAxKSkpKSAvIHJvd3M7XG4gICAgICAgIFxuICAgIHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMueCA9IHBvaW50LnggKyB0aGlzLm1hcmdpbkxlZnQ7XG4gICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy55ID0gcG9pbnQueSArIHRoaXMubWFyZ2luVG9wO1xuICAgIFxuICAgIHZhciBncmFwaGljcyA9IHRoaXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XG4gICAgLy9ncmFwaGljcy5saW5lU3R5bGUoNCwgMHhmZmQ5MDAsIDEpO1xuICAgIGdyYXBoaWNzLmJlZ2luRmlsbCgweGZmZmZmZiwgMSk7XG4gICAgZ3JhcGhpY3MuZHJhd1JlY3QoMTAwLCAxMDAsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQpO1xuICAgIFxuICAgIGZvciAodmFyIGNvbHVtbiA9IDA7IGNvbHVtbiA8IGNvbHVtbnM7IGNvbHVtbisrKSB7XG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHJvd3M7IHJvdysrKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHggPSB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnggKyAodGhpcy50aWxlV2lkdGggKiBjb2x1bW4pICsgKHRoaXMucGFkZGluZyAqIGNvbHVtbiAtIDEpO1xuICAgICAgICAgICAgeSA9IHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMueSArICh0aGlzLnRpbGVIZWlnaHQgKiByb3cpICsgKHRoaXMucGFkZGluZyAqIHJvdyAtIDEpO1xuICAgICAgICAgICAgLy9ncmFwaGljcy5nZW5lcmF0ZVRleHR1cmUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaWxlID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoeCwgeSwgZ3JhcGhpY3MuZ2VuZXJhdGVUZXh0dXJlKCkpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKGN1cnJlbnRUaWxlKTtcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlLmFscGhhID0gMDsgLy8gMC4yNTtcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBjdXJyZW50VGlsZS5ldmVudHMub25JbnB1dERvd24uYWRkKHRoaXMudGlsZUNsaWNrZWQsIHRoaXMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMudGlsZUFycmF5W2NvbHVtbl0gPT0gJ3VuZGVmaW5lZCcpIFxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NvbHVtbl0gPSBbXTtcbiAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjb2x1bW5dW3Jvd10gPSBjdXJyZW50VGlsZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBncmFwaGljcy5kZXN0cm95KCk7XG4gICAgXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMudGlsZURldGFpbCkge1xuICAgICAgICBpZiAoIXRoaXMudGlsZURldGFpbC5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcbiAgICAgICAgXG4gICAgICAgIHZhciBvYmogPSB0aGlzLnRpbGVEZXRhaWxba2V5XTtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgIC8vIHNraXAgbG9vcCBpZiB0aGUgcHJvcGVydHkgaXMgZnJvbSBwcm90b3R5cGVcbiAgICAgICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgbG9jYXRpb25Db3VudCA9IG9ialtwcm9wXS5sb2NhdGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yKCB2YXIgaSA9IDA7IGkgPCBsb2NhdGlvbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgY29vcmRzID0gb2JqW3Byb3BdLmxvY2F0aW9uc1tpXS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgeCA9IGNvb3Jkc1swXTtcbiAgICAgICAgICAgICAgICB5ID0gY29vcmRzWzFdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVEYW1hZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZU9jY3VwaWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZVggPSB4O1xuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVZID0geTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlVHlwZSA9IG9ialtwcm9wXS50eXBlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVBcnJheVt4XVt5XSAhPSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZU5hbWUgPSBvYmpbcHJvcF0ubmFtZTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHggKyBcIjpcIiArIHkgKyBcIiBub3QgZm91bmQhXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYoeCA8IDkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVPd25lciA9IDE7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeD4yMClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZU93bmVyID0gMjtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcF0ucHJvcGVydGllcyAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlUHJvcGVydGllcyA9IG9ialtwcm9wXS5wcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBpeGVsc1RvVGlsZSh4LCB5KSB7XG4gICAgdmFyIHhUaWxlID0gMDtcbiAgICB2YXIgeVRpbGUgPSAwO1xuICAgIFxuICAgIGZvciAodmFyIGNvbCBpbiB0aGlzLnRpbGVBcnJheSkge1xuICAgICAgICBmb3IgKHZhciByb3cgaW4gdGhpcy50aWxlQXJyYXlbY29sXSkge1xuICAgICAgICAgICAgdmFyIG9iaiA9IHRoaXMudGlsZUFycmF5W2NvbF1bcm93XTtcbiAgICAgICAgICAgIGlmKHggPiBvYmoueCAmJiB4IDwgb2JqLnggKyBvYmoud2lkdGgpXG4gICAgICAgICAgICAgICAgeFRpbGUgPSBwYXJzZUludChjb2wpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoeSA+IG9iai55ICYmIHkgPCBvYmoueSArIG9iai5oZWlnaHQpXG4gICAgICAgICAgICAgICAgeVRpbGUgPSBwYXJzZUludChyb3cpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7eDp4VGlsZSwgeTp5VGlsZX07XG4gIH1cbiAgXG4gIHRpbGVUb1BpeGVscyh4LCB5KSB7XG4gICAgdmFyIHRpbGVPYmogPSB0aGlzLnRpbGVBcnJheVt4XVt5XTtcbiAgICByZXR1cm4ge3g6dGlsZU9iai54ICsgdGlsZU9iai53aWR0aC8yLCB5OnRpbGVPYmoueSArIHRpbGVPYmouaGVpZ2h0LzJ9O1xuICB9XG4gIFxuICB0aWxlQ2xpY2tlZChvYmopIHtcbiAgICB0aGlzLmhpZGVUaWxlcygpO1xuICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ3RpbGVDbGlja2VkJywgeDpwYXJzZUludChvYmoudGlsZVgpLCB5OnBhcnNlSW50KG9iai50aWxlWSl9KTtcblxuICAgIC8vIERFQlVHIEJMT0NLXG4gICAgY29uc29sZS5sb2coXCItLS0tVElMRSBERVRBSUwtLS0tXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiTmFtZTogXCIgKyBvYmoudGlsZU5hbWUpO1xuICAgIGNvbnNvbGUubG9nKFwiVHlwZTogXCIgKyBvYmoudGlsZVR5cGUpO1xuICAgIGNvbnNvbGUubG9nKFwiT2NjdXBpZWQ6IFwiICsgb2JqLnRpbGVPY2N1cGllZCk7XG4gICAgY29uc29sZS5sb2coXCJEYW1hZ2VkOiBcIiArIG9iai50aWxlRGFtYWdlZCk7XG4gICAgY29uc29sZS5sb2coXCJYOiBcIiArIG9iai50aWxlWCArIFwiIFk6XCIgKyBvYmoudGlsZVkpO1xuICAgIC8vICAgdGhpcy5hZGRPcmRuYW5jZSh7cG9pbnQ6e3g6b2JqLnRpbGVYLCB5Om9iai50aWxlWX0sIHR5cGU6J2Jpb2Ryb25lJywgdXVpZDpNYXRoLnJhbmRvbSgpfSk7XG5cbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIHNob3dUaWxlcyhjb29yZHNBcnJheSwgY29sb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU0hPVyBUSUxFUyEhXCIpO1xuICAgICAgY29uc29sZS5sb2coY29vcmRzQXJyYXkpO1xuICAgIC8vIGlmKHR5cGVvZihjb29yZHNBcnJheS5wb2ludEFycmF5KSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyAgICAgY29vcmRzQXJyYXkgPSBjb29yZHNBcnJheS5wb2ludEFycmF5O1xuICAgIC8vIH1cbiAgICBmb3IgKHZhciBpIGluIGNvb3Jkc0FycmF5KSB7XG4gICAgICAgIHRoaXMudGlsZUFycmF5W2Nvb3Jkc0FycmF5W2ldLnhdW2Nvb3Jkc0FycmF5W2ldLnldLmFscGhhID0gMC41O1xuICAgICAgICBpZihjb2xvcikge1xuICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbY29vcmRzQXJyYXlbaV0ueF1bY29vcmRzQXJyYXlbaV0ueV0udGludCA9IGNvbG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbY29vcmRzQXJyYXlbaV0ueF1bY29vcmRzQXJyYXlbaV0ueV0udGludCA9IDB4ZmZkOTAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd25UaWxlcy5wdXNoKHt4OmNvb3Jkc0FycmF5W2ldLngseTpjb29yZHNBcnJheVtpXS55fSk7XG4gICAgfVxuICB9XG4gIFxuICBoaWRlVGlsZXModGlsZUFycmF5KSB7XG4gICAgaWYoIXRpbGVBcnJheSkge1xuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuc2hvd25UaWxlcykge1xuICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbdGhpcy5zaG93blRpbGVzW2ldLnhdW3RoaXMuc2hvd25UaWxlc1tpXS55XS5hbHBoYSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93blRpbGVzID0gW107XG4gICAgfVxuICB9XG5cbiAgZGFtYWdlVGlsZShkYXRhKSB7XG4gIFxuICAgIHZhciBjdXJyZW50VGlsZSA9IHRoaXMudGlsZUFycmF5W2RhdGEueF1bZGF0YS55XTtcbiAgICBcbiAgICBjdXJyZW50VGlsZS50aW50ID0gMFgzMzMzMzM7XG4gICAgY3VycmVudFRpbGUuYWxwaGEgPSAwLjg7XG4gICAgY3VycmVudFRpbGUudGlsZURhbWFnZWQgPSB0cnVlO1xuICAgIFxuICAgIHZhciB0ZXN0ID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoY3VycmVudFRpbGUueCwgY3VycmVudFRpbGUueSArKGN1cnJlbnRUaWxlLmhlaWdodC8yKSwgJ2Jvb20nKTtcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQodGVzdCk7XG4gICAgdGVzdC5hbmdsZSA9IDI3MDtcbiAgICB0ZXN0LmFuY2hvci5zZXQoMC41LDAuNyk7XG4gICAgdGVzdC5hbmltYXRpb25zLmFkZCgnYm9vbScpO1xuICAgIHRlc3QuYW5pbWF0aW9ucy5wbGF5KCdib29tJywgMjAsIGZhbHNlLCB0cnVlKTtcbiAgICBcbiAgfVxuICBcbiAgc3RhcnRHYW1lKCkge1xuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xuICB9XG5cbiAgXG4gIHNlcnZlckZ1bGwoKSB7XG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdzZXJ2ZXJGdWxsJyk7XG4gIH0gICBcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VwdGlrb247XG4iLCJpbXBvcnQgUmVzb3VyY2VzIGZyb20gJy4uL3ByZWZhYnMvcmVzb3VyY2VzJztcbmltcG9ydCBQZXJzb25uZWwgZnJvbSAnLi4vcHJlZmFicy9wZXJzb25uZWwnO1xuaW1wb3J0IE9yZG5hbmNlIGZyb20gJy4uL3ByZWZhYnMvb3JkbmFuY2UnO1xuaW1wb3J0IENsb25lIGZyb20gJy4uL3ByZWZhYnMvY2xvbmUnOyAvLyBUaGlzIHdpbGwgYmUgaW5jb3Jwb3JhdGVkIGluIHBlcnNvbm5lbFxuXG5jbGFzcyBUZWFtIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHsgXG4gICAgdGhpcy5yZWMgPSBuZXcgUmVzb3VyY2VzKCk7XG4gICAgdGhpcy5yZWNFbnVtID0gdGhpcy5yZWMucmVzb3VyY2VFbnVtO1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgXG4gICAgdGhpcy5wZXJzb25uZWwgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkR3VubmVycyA9IFtdO1xuICB9XG4gIFxuICByZWZyZXNoKCkge1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcbiAgICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLnBlcnNvbm5lbFtpXS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgXG4gIC8vUmVzb3VyY2UgSW50ZXJmYWNlXG4gIGdldFJlY0NvdW50KHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZWMuZ2V0Q291bnQodHlwZSk7XG4gIH1cbiAgXG4gIGNoZWNrUmVjKHR5cGUsIGNvdW50KSB7XG4gICAgaWYgKHRoaXMuZ2V0UmVjQ291bnQodHlwZSkgPj0gY291bnQpIFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICBleGNoYW5nZVJlYyhjb3N0VHlwZSwgY29zdENvdW50LCB5aWVsZFR5cGUsIHlpZWxkQ291bnQpIHtcbiAgfVxuICBcbiAgYWRkUmVjKHR5cGUsIGNvdW50KSB7XG4gICAgcmV0dXJuIHRoaXMucmVjLmFkZCh0eXBlLCBjb3VudCk7XG4gIH1cbiAgXG4gIHJlbW92ZVJlYyh0eXBlLCBjb3VudCkge1xuICAgIHJldHVybiB0aGlzLnJlYy5yZW1vdmUodHlwZSwgY291bnQpO1xuICB9XG4gIFxuICBhZGRDbG9uZSh4LCB5LCBwcm9wcykge1xuICAgIHZhciBwb2ludCA9IHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlVG9QaXhlbHMoeCx5KTtcbiAgICB2YXIgY2xvbmUgPSBuZXcgQ2xvbmUodGhpcy5nYW1lLHBvaW50LngscG9pbnQueSk7XG4gICAgY2xvbmUuY3VycmVudFRpbGVDb29yZGluYXRlcy54ID0geDtcbiAgICBjbG9uZS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnkgPSB5O1xuICAgIFxuICAgIGZvciAodmFyIGkgaW4gcHJvcHMpIHtcbiAgICAgICAgY2xvbmVbaV0gPSBwcm9wc1tpXTtcbiAgICB9XG4gICAgdGhpcy5wZXJzb25uZWwucHVzaChjbG9uZSk7XG4gICAgdGhpcy5nYW1lLnN0YWdlLmFkZENoaWxkKGNsb25lKTtcbiAgfVxuICBcbiAgZ2V0Q2xvbmUoY29vcmQpIHtcbiAgICBmb3IgKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XG4gICAgICAgIGlmKHRoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueCA9PSBjb29yZC54ICYmIHRoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueSA9PSBjb29yZC55KXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBlcnNvbm5lbFtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAga2lsbENsb25lKGNvb3JkKSB7XG4gICAgdmFyIGNsb25lID0gdGhpcy5nZXRDbG9uZShjb29yZCk7XG4gICAgdGhpcy5nYW1lLnN0YWdlLnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICBcbiAgICB2YXIgaW5kZXggPSB0aGlzLnBlcnNvbm5lbC5pbmRleE9mKGNsb25lKTtcbiAgICB0aGlzLnBlcnNvbm5lbC5zcGxpY2UoaW5kZXgsMSk7XG4gICAgXG4gICAgY2xvbmUucmVtb3ZlKCk7XG4gIH1cbiAgICBcbiAgb2ZmZXJMZWdhbENsb25lcygpIHtcbiAgICAvLyBPZmZlciBjbG9uZXMgdGhhdCBoYXZlIGxlZ2FsIG1vdmVzXG4gICAgZm9yKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XG4gICAgICAgIHZhciBtb3ZlcyA9IHRoaXMucGVyc29ubmVsW2ldLmdldExlZ2FsTW92ZXMoKTtcblxuICAgICAgICBpZihtb3ZlcyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMucGVyc29ubmVsW2ldLmhpZ2hsaWdodE9uKCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIG9mZmVyR3VubmVycygpIHtcbiAgICAvLyBPZmZlciBndW5uZXIgXG4gICAgdmFyIGd1bm5lckZvdW5kID0gZmFsc2U7XG4gICAgZm9yKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XG4gICAgICAgIGlmKHRoaXMucGVyc29ubmVsW2ldLmlzR3VubmVyKSB7XG4gICAgICAgICAgICBndW5uZXJGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAvL3RoaXMucGVyc29ubmVsW2ldLmhpZ2hsaWdodE9uKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGd1bm5lckZvdW5kO1xuICB9XG4gIFxuICBzZWxlY3RHdW5uZXIoY29vcmRzKSB7XG4gICAgdmFyIGNsb25lID0gdGhpcy5nZXRDbG9uZShjb29yZHMpO1xuICAgIGlmKCFjbG9uZSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmKCFjbG9uZS5pc0d1bm5lcilcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBcbiAgICB2YXIgZXhpc3RpbmdHdW5uZXIgPSB0aGlzLnNlbGVjdGVkR3VubmVycy5pbmRleE9mKGNsb25lKTtcbiAgICBpZihleGlzdGluZ0d1bm5lciA+PSAwKXtcbiAgICAgICAgY2xvbmUuaGlnaGxpZ2h0T2ZmKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzLnNwbGljZShleGlzdGluZ0d1bm5lciwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2xvbmUuaGlnaGxpZ2h0T24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMucHVzaChjbG9uZSk7XG4gICAgfVxuICB9XG4gIFxuICBjbGVhckd1bm5lcnMoKSB7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnNlbGVjdGVkR3VubmVycykge1xuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVyc1tpXS5oaWdobGlnaHRPZmYoKTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMgPSBbXTtcbiAgfVxuICBcbiAgc2VsZWN0Q2xvbmVGb3JNb3ZlKGNvb3JkcykgeyAgICBcbiAgXG4gICAgdmFyIGNsb25lID0gdGhpcy5nZXRDbG9uZShjb29yZHMpO1xuICAgIGlmKCFjbG9uZSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XG4gICAgICAgIHRoaXMucGVyc29ubmVsW2ldLmhpZ2hsaWdodE9mZigpO1xuICAgIH1cbiAgICB0aGlzLmxlZ2FsVGlsZXMgPSBjbG9uZS5nZXRMZWdhbE1vdmVzKCk7XG4gICAgdGhpcy5zZWxlY3RlZENsb25lID0gY2xvbmU7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnNob3dUaWxlcyh0aGlzLmxlZ2FsVGlsZXMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIFxuICBtb3ZlU2VsZWN0ZWRDbG9uZShjb29yZHMpIHtcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5sZWdhbFRpbGVzKSB7XG4gICAgICAgIGlmKHRoaXMubGVnYWxUaWxlc1tpXS50aWxlWCA9PSBjb29yZHMueCAmJiB0aGlzLmxlZ2FsVGlsZXNbaV0udGlsZVkgPT0gY29vcmRzLnkpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDbG9uZS5tb3ZlKGNvb3Jkcyk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZENsb25lO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlcztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZWFtOyIsImNsYXNzIE9yZG5hbmNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIHgsIHksIHV1aWQpIHtcbiAgICAgICAgdGhpcy50eXBlRW51bSA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICAgICAgU0hJRUxEOiAwLFxuICAgICAgICAgICAgQklPRFJPTkU6IDEsXG4gICAgICAgICAgICBTQVRFTExJVEU6IDIsXG4gICAgICAgICAgICBST0NLRVQ6IDNcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVFbnVtW3R5cGUudG9VcHBlckNhc2UoKV07XG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cy5PcmRuYW5jZSA9IE9yZG5hbmNlO1xuIiwiY2xhc3MgUGVyc29ubmVsIHtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIHgsIHksIHV1aWQpIHtcbiAgICAgICAgdGhpcy50eXBlRW51bSA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICAgICAgQ0xPTkU6IDAsXG4gICAgICAgICAgICBCSU9EUk9ORTogMVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgICAgIHRoaXMudW5kZXJFc3Bpb25hZ2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0d1bm5lciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVFbnVtW3R5cGUudG9VcHBlckNhc2UoKV07XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Jpb2Ryb25lJzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Nsb25lJzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlRW51bVt0eXBlXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBtb3ZlKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzLlBlcnNvbm5lbCA9IFBlcnNvbm5lbDtcbiIsInZhciBQZXJzb25uZWwgPSByZXF1aXJlKCcuL3BlcnNvbm5lbCcpLlBlcnNvbm5lbDtcbnZhciBSZXNvdXJjZSA9IHJlcXVpcmUoJy4vcmVzb3VyY2UnKS5SZXNvdXJjZTtcbnZhciBPcmRuYW5jZSA9IHJlcXVpcmUoJy4vb3JkbmFuY2UnKS5PcmRuYW5jZTtcblxuXG5jbGFzcyBQbGF5ZXIge1xuXG4gICAgY29uc3RydWN0b3Ioc29ja2V0SUQsIGlkLCB1dWlkKSB7IFxuICAgICAgICB0aGlzLnNvY2tldElEID0gc29ja2V0SUQ7XG4gICAgICAgIHRoaXMuaWQgPSBpZDsgLy9wbGF5ZXIgMSBvciBwbGF5ZXIgMjsgdGhpcyB3aWxsIGRldGVybWluZSB0aGUgc2lkZSBvZiB0aGUgYm9hcmQgYXQgY2xpZW50IHN0YXJ0LlxuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgICAgICB0aGlzLnBlcnNvbm5lbEFycmF5ID0gW107XG4gICAgICAgIHRoaXMucmVzb3VyY2VBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLm9yZG5hbmNlQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5yZWFkeVRvU3RhcnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGFydGluZ0Nsb25lQ291bnQgPSA1O1xuICAgICAgICB0aGlzLmFybXNBcnJheSA9IFtmYWxzZSwgZmFsc2UsIGZhbHNlXTtcbiAgICAgICAgdGhpcy5hcm1zRW51bSA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICAgICAgRVhQTE9TSVZFUzogMCxcbiAgICAgICAgICAgIERSSUxMOiAxLCBcbiAgICAgICAgICAgIENBTk5PTjogMixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlcyA9IFtdO1xuXG4gICAgICAgIHRoaXMuaW5pdFJlc291cmNlcygpO1xuICAgIH1cblxuICAgIGNsZWFyUXVldWVzKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50TGVnYWxQaWVjZXMgPSBbXTtcbiAgICB9XG4gICAgICAgIFxuICAgIGFkZFBlcnNvbm5lbCh0eXBlLCB4LCB5LCB1dWlkKSB7XG4gICAgICAgIGlmKHR5cGUgPT0gXCJjbG9uZVwiKSB7XG4gICAgICAgICAgICB2YXIgcGVyc29ubmVsID0gbmV3IFBlcnNvbm5lbCgnY2xvbmUnLCB4LCB5LCB1dWlkKTtcbiAgICAgICAgICAgIHRoaXMucGVyc29ubmVsQXJyYXkucHVzaChwZXJzb25uZWwpO1xuICAgICAgICAgICAgcmV0dXJuIHBlcnNvbm5lbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcInBlcnNvbm5lbCBpcyBub3QgYSBjbG9uZSB0eXBlLlwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJlbW92ZVBlcnNvbm5lbChwZXJzb25uZWwsIHB1cmdlQWxsKSB7XG4gICAgICAgIGlmIChwdXJnZUFsbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5wZXJzb25uZWxBcnJheSA9IFtdO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UGVyc29ubmVsKHR5cGUpIHtcbiAgICAgICAgdmFyIHJldHVybkFycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wZXJzb25uZWxBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0aGlzLnBlcnNvbm5lbEFycmF5W2ldLnR5cGUgPT09IHRoaXMucGVyc29ubmVsQXJyYXlbaV0udHlwZUVudW1bdHlwZS50b1VwcGVyQ2FzZSgpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy5wZXJzb25uZWxBcnJheVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVybkFycmF5O1xuICAgIH1cblxuICAgIGdldFBlcnNvbm5lbEJ5VVVJRCh1dWlkKSB7XG4gICAgICAgIHZhciBwZXJzb25uZWwgPSB0aGlzLmdldFBlcnNvbm5lbCgpO1xuICAgICAgICBmb3IgKHZhciBpIGluIHBlcnNvbm5lbCkge1xuICAgICAgICAgICAgaWYgKHBlcnNvbm5lbFtpXS51dWlkID09IHV1aWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGVyc29ubmVsW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRQZXJzb25uZWxCeVBvaW50KHBvaW50KSB7XG4gICAgICAgIHZhciBwZXJzb25uZWxzID0gdGhpcy5nZXRQZXJzb25uZWwoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwZXJzb25uZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocGVyc29ubmVsc1tpXS54ID09IHBvaW50LnggJiYgcGVyc29ubmVsc1tpXS55ID09IHBvaW50LnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGVyc29ubmVsc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY2hlY2tQZXJzb25uZWxNb3ZlKHBlcnNvbm5lbCwgcG9pbnQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHBlcnNvbm5lbC54ID09IHRoaXMuY3VycmVudExlZ2FsUGllY2VzW2ldLm9yaWdpbi54ICYmIHBlcnNvbm5lbC55ID09IHRoaXMuY3VycmVudExlZ2FsUGllY2VzW2ldLm9yaWdpbi55KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwb2ludCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlc1tpXS5tb3Zlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudExlZ2FsUGllY2VzW2ldLm1vdmVzW2pdLnggPT0gcG9pbnQueCAmJiB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlc1tpXS5tb3Zlc1tqXS55ID09IHBvaW50LnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGFkZEFybXMgKHR5cGUpIHtcbiAgICAgICAgdGhpcy5hcm1zQXJyYXlbdHlwZV0gPSB0cnVlO1xuICAgIH1cblxuICAgIHJlbW92ZUFybXMgKHR5cGUpIHtcbiAgICAgICAgdGhpcy5hcm1zQXJyYXlbdHlwZV0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhZGRPcmRuYW5jZSh0eXBlLCBwb2ludCwgdXVpZCkge1xuICAgICAgICB2YXIgb3JkID0gbmV3IE9yZG5hbmNlKHR5cGUsIHBvaW50LngsIHBvaW50LnksIHV1aWQpO1xuICAgICAgICB0aGlzLm9yZG5hbmNlQXJyYXkucHVzaChvcmQpO1xuICAgICAgICByZXR1cm4gb3JkO1xuICAgIH1cblxuICAgIHB1cmdlTGVnYWxQaWVjZXMocGVyc29ubmVsLCBwdXJnZUFsbE1hdGNoaW5nVHlwZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwZXJzb25uZWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlcyA9IFtdO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gdGhpcy5jdXJyZW50TGVnYWxQaWVjZXMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgICBpLS0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRMZWdhbFBpZWNlc1tpXS50eXBlID09PSBwZXJzb25uZWwudHlwZSAmJiBwdXJnZUFsbE1hdGNoaW5nVHlwZXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlcy5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEd1bm5lcnMoKSB7XG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xuICAgICAgICB2YXIgY2xvbmVzID0gdGhpcy5nZXRQZXJzb25uZWwoJ2Nsb25lJyk7XG4gICAgICAgIGZvciAodmFyIGkgaW4gY2xvbmVzKSB7XG4gICAgICAgICAgICBpZiAoY2xvbmVzW2ldLmlzR3VubmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaChjbG9uZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcbiAgICB9XG5cbiAgICBnZXRTZWxlY3RlZEd1bm5lcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkR3VubmVycztcbiAgICB9XG5cbiAgICBjbGVhclNlbGVjdGVkR3VubmVycygpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMgPSBbXTtcbiAgICB9XG5cbiAgICB0b2dnbGVHdW5uZXJTZWxlY3Rpb24oZ3VubmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkR3VubmVycy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMucHVzaChndW5uZXIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RlZEd1bm5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShndW5uZXIpID09PSBKU09OLnN0cmluZ2lmeSh0aGlzLnNlbGVjdGVkR3VubmVyc1tpXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycy5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMucHVzaChndW5uZXIpO1xuICAgIH1cblxuICAgIGdldE9yZG5hbmNlKHR5cGUpIHtcbiAgICAgICAgdmFyIHJldHVybkFycmF5ID0gW107XG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLm9yZG5hbmNlQXJyYXkpIHtcbiAgICAgICAgICAgIGlmKHR5cGUgPT09IG51bGwgfHwgdGhpcy5vcmRuYW5jZUFycmF5W2ldLnR5cGUgPT09IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLm9yZG5hbmNlQXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcbiAgICB9XG5cbiAgICByZW1vdmUodGFyZ2V0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XG4gICAgfVxuXG4gICAgZ2V0T3JkbmFuY2VCeVBvaW50KHBvaW50KSB7XG4gICAgICAgIHZhciBvcmRuYW5jZXMgPSB0aGlzLmdldE9yZG5hbmNlKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3JkbmFuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAob3JkbmFuY2VzW2ldLnggPT0gcG9pbnQueCAmJiBvcmRuYW5jZXNbaV0ueSA9PSBwb2ludC55KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yZG5hbmNlc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbW92ZU9yZG5hbmNlKGNvdW50KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcmRuYW5jZUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcmRuYW5jZUFycmF5W2ldLnR5cGUgPT0gXCJiaW9kcm9uZVwiIHx8IHRoaXMub3JkbmFuY2VBcnJheVtpXS50eXBlID09IFwicm9ja2V0XCIgfHwgdGhpcy5vcmRuYW5jZUFycmF5W2ldLnR5cGUgPT0gXCJudWtlXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkbmFuY2VBcnJheVtpXS54ICs9IGNvdW50O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JkbmFuY2VBcnJheVtpXS54IC09IGNvdW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vcmRuYW5jZUFycmF5O1xuICAgIH1cblxuICAgIGluaXRSZXNvdXJjZXMoKSB7XG4gICAgICAgIHZhciByZWNBcnJheSA9IFtcbiAgICAgICAgICAgICdlbmVyZ3kxJywgXG4gICAgICAgICAgICAnZW5lcmd5MicsXG4gICAgICAgICAgICAnb3h5Z2VuJyxcbiAgICAgICAgICAgICdtZXRhbCcsXG4gICAgICAgICAgICAnYmlvZHJvbmUnLFxuICAgICAgICAgICAgJ3JvY2tldCcsXG4gICAgICAgICAgICAndXJhbml1bScsXG4gICAgICAgICAgICAnYmlvbWFzcycsXG4gICAgICAgICAgICAnbnVrZSdcbiAgICAgICAgICAgIF07XG4gICAgICAgIHZhciByZWMgPSBudWxsO1xuICAgICAgICBmb3IgKHZhciBpIGluIHJlY0FycmF5KSB7XG4gICAgICAgICAgICByZWMgPSBuZXcgUmVzb3VyY2UocmVjQXJyYXlbaV0pO1xuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5W3JlY0FycmF5W2ldXSA9IFtdO1xuICAgICAgICAgICAgaWYgKHJlY0FycmF5W2ldICE9IFwibnVrZVwiKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgY291bnQgPSAwOyBjb3VudCA8IDEwOyBjb3VudCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA8IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2VBcnJheVtyZWNBcnJheVtpXV0ucHVzaChyZWMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5W3JlY0FycmF5W2ldXS5wdXNoKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UmVzb3VyY2VDb3VudCh0eXBlKSB7XG4gICAgICAgIHZhciBmb3VuZFJlc291cmNlcyA9IDA7XG4gICAgICAgIHZhciBjdXJyZW50UmVzb3VyY2VTbG90ID0gOTtcblxuICAgICAgICBpZiAodHlwZSA9PSBcImVuZXJneVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSZXNvdXJjZUNvdW50KCdlbmVyZ3kxJykgKyB0aGlzLmdldFJlc291cmNlQ291bnQoJ2VuZXJneTInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09IFwibnVrZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChjdXJyZW50UmVzb3VyY2VTbG90ID49IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VTbG90LS07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXVtjdXJyZW50UmVzb3VyY2VTbG90XS5kYW1hZ2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kUmVzb3VyY2VzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3VuZFJlc291cmNlcysrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3VuZFJlc291cmNlcztcbiAgICB9XG5cbiAgICAvLyBDaGVja1Jlc291cmNlIGRlZmF1bHRzIHRvIGFzc3VtZSB5b3UgYXJlIGNoZWNraW5nIHRvIHNwZW5kIGEgcmVzb3VyY2UuIFNldCBcImFjY2VwdFwiIHRvIHRydWUgaWYgeW91IGFyZSBjaGVja2luZyB0byByZWNlaXZlIGEgcmVzb3VyY2VcbiAgICBjaGVja1Jlc291cmNlKHR5cGUsIGNvdW50LCBhY2NlcHQpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRSZXNvdXJjZVNsb3QgPSA5O1xuICAgICAgICB2YXIgZm91bmRSZXNvdXJjZXMgPSAwO1xuICAgICAgICB2YXIgcmVzb3VyY2VTbG90cyA9IDA7XG5cbiAgICAgICAgaWYgKHR5cGUgPT0gXCJudWtlXCIpIHtcbiAgICAgICAgICAgIGlmIChhY2NlcHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXS5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZih0eXBlID09IFwiZW5lcmd5XCIpIHtcbiAgICAgICAgICAgIHZhciBlMSA9IHRoaXMuY2hlY2tSZXNvdXJjZShcImVuZXJneTFcIiwgY291bnQsIGFjY2VwdCk7XG4gICAgICAgICAgICB2YXIgZTIgPSB0aGlzLmNoZWNrUmVzb3VyY2UoXCJlbmVyZ3kyXCIsIGNvdW50LCBhY2NlcHQpO1xuXG4gICAgICAgICAgICBpZihlMSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZTIgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZTI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChjdXJyZW50UmVzb3VyY2VTbG90ID49IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWNjZXB0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlU2xvdHMrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc291cmNlU2xvdHMgPT0gY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRSZXNvdXJjZVNsb3QtLTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdLmRhbWFnZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZihhY2NlcHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvdW5kUmVzb3VyY2VzKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGFjY2VwdCAhPT0gZmFsc2UgJiYgZm91bmRSZXNvdXJjZXMgPT09IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VTbG90LS07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHNwZW5kUmVzb3VyY2UodHlwZSwgY291bnQpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRSZXNvdXJjZVNsb3QgPSA5O1xuICAgICAgICB2YXIgb3JpZ2luYWxDb3VudCA9IGNvdW50O1xuXG4gICAgICAgIGlmICh0eXBlID09IFwiZW5lcmd5XCIpIHtcbiAgICAgICAgICAgIHZhciBzdWNjZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB3aGlsZSAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuc3BlbmRSZXNvdXJjZShcImVuZXJneTFcIiwgMSk7XG4gICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuc3BlbmRSZXNvdXJjZShcImVuZXJneTJcIiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbENvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnRSZXNvdXJjZVNsb3QgPj0gMCAmJiBjb3VudCA+IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VTbG90LS07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXVtjdXJyZW50UmVzb3VyY2VTbG90XS5kYW1hZ2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmVycm9yKFwiVHJpZWQgdG8gc3BlbmQgcmVzb3VyY2VzIHlvdSBkb24ndCBoYXZlIVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXVtjdXJyZW50UmVzb3VyY2VTbG90XSA9IG51bGw7XG4gICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcmlnaW5hbENvdW50O1xuICAgIH1cblxuICAgIGFjY2VwdFJlc291cmNlKHR5cGUsIGNvdW50KSB7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IG51bGw7XG4gICAgICAgIHZhciBjdXJyZW50UmVzb3VyY2VTbG90ID0gOTtcbiAgICAgICAgdmFyIHNlYXJjaGluZyA9IHRydWU7XG4gICAgICAgIHZhciBvcmlnaW5hbENvdW50ID0gY291bnQ7XG5cbiAgICAgICAgaWYgKHR5cGUgPT0gXCJudWtlXCIpIHtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXS5wdXNoKG5ldyBSZXNvdXJjZSh0eXBlKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09IFwiZW5lcmd5XCIpIHtcbiAgICAgICAgICAgIHZhciBzdWNjZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB3aGlsZSAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9IHRoaXMuYWNjZXB0UmVzb3VyY2UoXCJlbmVyZ3kxXCIsIDEpO1xuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLmFjY2VwdFJlc291cmNlKFwiZW5lcmd5MlwiLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsQ291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgaWYgKHNlYXJjaGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vIHBlZWsgYXQgbmV4dCByZXNvdXJjZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm5vIHJvb20gZm9yIHRoaXMgcmVzb3VyY2UhXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVzb3VyY2VTbG90ID09PSAwIHx8IHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXVtjdXJyZW50UmVzb3VyY2VTbG90IC0gMV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VTbG90LS07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRSZXNvdXJjZVNsb3QgKyAxID4gdGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxDb3VudCAtIGNvdW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvdXJjZSA9IG5ldyBSZXNvdXJjZSh0eXBlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gPSByZXNvdXJjZTtcbiAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgIGlmKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbENvdW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VTbG90Kys7XG4gICAgICAgICB9XG4gICAgICAgICAgICBpZihjdXJyZW50UmVzb3VyY2VTbG90IDwgMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJPdXQgb2YgYm91bmRzLiBObyBlbXB0eSByZXNvdXJ1Y2Ugc2xvdHMgZm91bmQuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMuUGxheWVyID0gUGxheWVyO1xuIiwiY2xhc3MgUmVzb3VyY2Uge1xuXG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICBcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzLlJlc291cmNlID0gUmVzb3VyY2U7XG4iLCIvLyAgVGhpcyBpcyB0aGUgc2VydmVyLXNpZGUgcnVsZSBlbmdpbmUuIEl0IHByb2Nlc3NlcyB0aGUgcnVsZXMgYW5kIHN0YXRlcyBhbmQgdGhlbiBlbWl0cyBkaXJlY3Rpb25zIGJhY2sgdG8gdGhlIGNsaWVudC5cblxudmFyIFBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyJykuUGxheWVyO1xudmFyIHV1aWQgPSByZXF1aXJlKCd1dWlkL3Y0Jyk7XG5cbmNsYXNzIFNlcHRpa29uIHtcbiAgICBcblx0Y29uc3RydWN0b3IoaW8pIHtcbiAgICAgICAgdGhpcy5pbyA9IGlvO1xuICAgICAgICB0aGlzLmxhc3RQbGF5ZXJJRCA9IDA7XG4gICAgICAgIHRoaXMucGxheWVyc0FycmF5ID0gW107XG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gMDtcbiAgICAgICAgdGhpcy50dXJuU3RhdGUgPSAwO1xuICAgICAgICB0aGlzLnV1aWQgPSByZXF1aXJlKCd1dWlkL3Y0JykoKTtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZSA9IDA7XG5cbiAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmN1cnJlbnREaWNlVmFsdWUgPSAwO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5nYW1lU3RhdGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgICAgICBTRVRVUDogMCxcbiAgICAgICAgICAgIEdBTUU6IDEsIFxuICAgICAgICAgICAgUEFVU0U6IDIsXG4gICAgICAgICAgICBHQU1FT1ZFUjogMyxcbiAgICAgICAgICAgIFNFUlZFUkZVTEw6IDRcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnR1cm5TdGF0ZUVudW0gPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgICAgIFJPTEw6IDAsICAgIC8vIExpdGVyYWxseSB0aGUgYWN0IG9mIHJvbGxpbmcgdGhlIGRpZVxuICAgICAgICAgICAgTU9WRTogMSwgICAgLy8gU2VsZWN0aW5nIHRoZSBjbG9uZSBhbmQgdGhlaXIgdGFyZ2V0IHNwYWNlXG4gICAgICAgICAgICBBQ1RJT046IDIsICAvLyBUcmlnZ2VyIHRpbGUgIFxuICAgICAgICAgICAgVEFSR0VUUzogMywgLy8gQXNzaWduIHRhcmdldChzKSAoaWUuIC0gZ3VubmVyLCB0aWxlLCBlc3Bpb25hZ2VkIGNsb25lKSBcbiAgICAgICAgICAgIEJJT0RST05FOiA0LC8vIE1vdmUgYmlvZHJvbmUocylcbiAgICAgICAgICAgIE9SRE5BTkNFOiA1LC8vIG1vdmUgb3JkbmFuY2UgYWNjb3JkaW5nIHRvIGRpY2Ugcm9sbCAodGhpcyBtYXkgbm90IHJlcXVpcmUgYSBzdGF0ZS4uLilcbiAgICAgICAgICAgIEVORDogNiAgICAgIC8vIGFzc2VzcyBvcmRuYW5jZSBkYW1hZ2UgYW5kIGNsb25lL2Jpb2Ryb25lIGtpbGxzLiBBc3Nlc3MgdmljdG9yeSBjb25kaXRpb25zICh0aGlzIG1heSBub3QgcmVxdWlyZSBhIHN0YXRlLi4uKVxuICAgICAgICB9KTsgIFxuXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uRW51bSA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICAgICAgTk9SVEg6MSxcbiAgICAgICAgICAgIEVBU1Q6MixcbiAgICAgICAgICAgIFNPVVRIOjQsXG4gICAgICAgICAgICBXRVNUOjhcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50aWxlQ29sdW1ucyA9IDMxO1xuICAgICAgICB0aGlzLnRpbGVSb3dzID0gMjE7XG5cbiAgICAgICAgdGhpcy50aWxlQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5jcmVhdGVUaWxlQXJyYXkoKTsgXG5cbiAgICAgICAgdGhpcy5xdWV1ZWRUaWxlID0gbnVsbDtcbiAgICAgICAgdGhpcy50aWxlc1JlcGFpcmVkVGhpc1R1cm4gPSAwO1xuICAgICAgICB0aGlzLmF2YWlsYWJsZUNsb25lc1RvQWRkID0gMDtcbiAgICB9XG4gICAgXG4gICAgcHJvY2Vzc0NsaWNrKGRhdGEpIHtcbiAgICAgICAgLy8gV2hhdCBpcyBhbHdheXMgdHJ1ZSBvZiBhIGNsaWNrP1xuICAgICAgICAvLyAgLSBzZW5kIHRpbGUgZGV0YWlscyB0byB0aGUgY2xpZW50XG4gICAgICAgIC8vICAtIHNlbmQgb2NjdXBhbnQgZGV0YWlscyB0byBjbGllbnQgKGlmIGFueSlcbiAgICAgICAgLy8gIC0gc3VjY2Vzc2Z1bCBpbnRlcmFjdGlvbnMgKGxpa2UgbW92aW5nIGEgY2xvbmUpIHNob3VsZCBlbWl0IHRvIGNsaWVudCBPTkxZIGZyb20gdGhpcyBmdW5jdGlvbi5cblxuICAgICAgICAvLyBEbyB0aGUgbmVlZGZ1bFxuICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXJCeVNvY2tldElEKGRhdGEuc29ja2V0SUQpOyAvLyBET0VTIFRISVMgQUxMT1cgQk9USCBQTEFZRVJTIFRPIElOVEVSQUNUPyE/IVxuXG4gICAgICAgIC8vICgxKSBDaGVjayBnYW1lc3RhdGVcbiAgICAgICAgLy8gKDIpIENoZWNrIHR1cm5waGFzZVxuICAgICAgICAvLyAoMykgQ2hlY2sgcGhhc2VzdGVwXG5cbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlRW51bS5TRVRVUCA9PT0gdGhpcy5nYW1lU3RhdGUpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmV2ZW50ID09PSBcImNvbmZpcm1DbGlja2VkXCIgJiYgcGxheWVyLnJlYWR5VG9TdGFydCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLnBlcnNvbm5lbEFycmF5Lmxlbmd0aCA9PT0gcGxheWVyLnN0YXJ0aW5nQ2xvbmVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3JlcXVlc3QnLCB7Y2FsbGJhY2s6XCJtb2RhbFwiLCBkZXRhaWxzOiB7dHlwZTpcImFza1N0YXJ0XCJ9fSwgcGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuZXZlbnQgPT09IFwidGlsZUNsaWNrZWRcIiAmJiBwbGF5ZXIucmVhZHlUb1N0YXJ0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLnBlcnNvbm5lbEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwZXJzb25uZWwgPSBwbGF5ZXIucGVyc29ubmVsQXJyYXlbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnggPT09IHBlcnNvbm5lbC54ICYmIGRhdGEueSA9PT0gcGVyc29ubmVsLnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5wZXJzb25uZWxBcnJheS5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywge3R5cGU6XCJwZXJzb25uZWxcIiwgZGV0YWlsczoge3BlcnNvbm5lbDogcGVyc29ubmVsLCBhY3Rpb246ICdyZW1vdmUnLCBwbGF5ZXJJRDogcGxheWVyLmlkfX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB7dHlwZTpcInRpbGVcIiwgZGV0YWlsczogW3t4OmRhdGEueCwgeTpkYXRhLnksIG9jY3VwaWVkOiBmYWxzZX1dfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGNsb25lID0gdGhpcy5wbGFjZUNsb25lKHBsYXllciwgZGF0YS54LCBkYXRhLnkpO1xuICAgICAgICAgICAgICAgIGlmIChjbG9uZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB7dHlwZTpcInBlcnNvbm5lbFwiLCBkZXRhaWxzOiB7cGVyc29ubmVsOiBjbG9uZSwgYWN0aW9uOiAnYWRkJywgcGxheWVySUQ6IHBsYXllci5pZH19KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB7dHlwZTpcInRpbGVcIiwgZGV0YWlsczogW3t4OmRhdGEueCwgeTpkYXRhLnksIG9jY3VwaWVkOiB0cnVlfV19KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nYW1lU3RhdGVFbnVtLkdBTUUgPT09IHRoaXMuZ2FtZVN0YXRlKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGdhbWVzdGF0ZSBoYXMgcGhhc2VzIChvciBcInRoaXMudHVybnN0YXRlXCIpOlxuICAgICAgICAgICAgLy8gKDEpIC0gcm9sbGluZyBkaWVcbiAgICAgICAgICAgIC8vICgyKSAtIG1vdmluZyBhIGNsb25lXG4gICAgICAgICAgICAvLyAoMykgLSB0aWxlIGFjdGl2YXRpb25cbiAgICAgICAgICAgIC8vICg0KSAtIG1vdmluZyBiaW9kcm9uZShzKVxuICAgICAgICAgICAgLy8gKDUpIC0gbW92aW5nIHJvY2tldHNcbiAgICAgICAgICAgIC8vICg2KSAtIGFzc2Vzc2luZyBkYW1hZ2VcbiAgICAgICAgICAgIC8vICg3KSAtIGNoZWNrIHZpY3RvcnlcbiAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy50dXJuU3RhdGVFbnVtLlJPTEwgPT09IHRoaXMudHVyblN0YXRlKSB7XG4gICAgICAgICAgICAgICAgaWYoZGF0YS5ldmVudCA9PT0gXCJkaWNlQ2xpY2tlZFwiICYmIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEID09PSBkYXRhLnNvY2tldElEKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERpY2VWYWx1ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIuY3VycmVudExlZ2FsUGllY2VzID0gdGhpcy5nZXRMZWdhbFBpZWNlcygpOyAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB7dHlwZTpcImRpY2VcIiwgZGV0YWlsczoge3ZhbHVlOnRoaXMuY3VycmVudERpY2VWYWx1ZSwgZ2FtZVBpZWNlczp0aGlzLmFjdGl2ZVBsYXllci5jdXJyZW50TGVnYWxQaWVjZXN9fSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHVyblN0YXRlKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR1cm5TdGF0ZUVudW0uTU9WRSA9PT0gdGhpcy50dXJuU3RhdGUgJiYgZGF0YS5ldmVudCA9PT0gXCJ0aWxlQ2xpY2tlZFwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkQ2xvbmUgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRQZXJzb25uZWxCeVBvaW50KHt4OmRhdGEueCwgeTpkYXRhLnl9KTtcbiAgICAgICAgICAgICAgICBsZXQgZG9lc1NlbGVjdGVkQ2xvbmVIYXZlTGVnYWxNb3ZlcyA9IHRoaXMuYWN0aXZlUGxheWVyLmNoZWNrUGVyc29ubmVsTW92ZShzZWxlY3RlZENsb25lKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRDbG9uZSA9PT0gZmFsc2UgfHwgZG9lc1NlbGVjdGVkQ2xvbmVIYXZlTGVnYWxNb3ZlcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlID0gc2VsZWN0ZWRDbG9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb2ludEFycmF5ID0gdGhpcy5nZXRMZWdhbE1vdmVzKHNlbGVjdGVkQ2xvbmUsIHRoaXMuY3VycmVudERpY2VWYWx1ZSwge3g6c2VsZWN0ZWRDbG9uZS54LCB5OnNlbGVjdGVkQ2xvbmUueX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdzaG93VGlsZXMnLCBkZXRhaWxzOiBbe3g6ZGF0YS54LCB5OmRhdGEueX1dfSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdzaG93VGlsZXMnLCBkZXRhaWxzOiBwb2ludEFycmF5fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdoaWRlVGlsZXMnLCBkZXRhaWxzOiBudWxsfSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENsb25lID0gdGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZENsb25lLnggPT09IGRhdGEueCAmJiBzZWxlY3RlZENsb25lLnkgPT09IGRhdGEueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmNoZWNrUGVyc29ubmVsTW92ZShzZWxlY3RlZENsb25lLCB7eDpkYXRhLngsIHk6ZGF0YS55fSkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcmlnaW5hbFRpbGUgPSB0aGlzLmdldFRpbGUoc2VsZWN0ZWRDbG9uZS54LCBzZWxlY3RlZENsb25lLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1RpbGUgPSB0aGlzLmdldFRpbGUoZGF0YS54LCBkYXRhLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDbG9uZS5tb3ZlKGRhdGEueCwgZGF0YS55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbFRpbGUudHlwZSA9PT0gXCJzdXJmYWNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENsb25lLmlzR3VubmVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VGlsZS50eXBlID09PSBcInN1cmZhY2VcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2xvbmUuaXNHdW5uZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB7dHlwZTpcInBlcnNvbm5lbFwiLCBkZXRhaWxzOiB7cGVyc29ubmVsOiBzZWxlY3RlZENsb25lLCBhY3Rpb246ICdtb3ZlJywgcGxheWVySUQ6IHRoaXMuYWN0aXZlUGxheWVyLmlkfX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB7dHlwZTpcInRpbGVcIiwgZGV0YWlsczogW3t4Om9yaWdpbmFsVGlsZS54LCB5Om9yaWdpbmFsVGlsZS55LCBvY2N1cGllZDogZmFsc2V9XX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB7dHlwZTpcInRpbGVcIiwgZGV0YWlsczogW3t4Om5ld1RpbGUueCwgeTpuZXdUaWxlLnksIG9jY3VwaWVkOiB0cnVlfV19KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbFRpbGUudHlwZSA9PT0gXCJhcm1vcnlcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLnJlbW92ZUFybXMob3JpZ2luYWxUaWxlLm5hbWUudG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB7dHlwZTpcImFybXNcIiwgZGV0YWlsczoge3R5cGU6IG9yaWdpbmFsVGlsZS5uYW1lLCBhY3Rpb246IFwicmVtb3ZlXCJ9fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VGlsZS50eXBlID09PSBcImFybW9yeVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIuYWRkQXJtcyhuZXdUaWxlLm5hbWUudG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB7dHlwZTpcImFybXNcIiwgZGV0YWlsczoge3R5cGU6IG5ld1RpbGUubmFtZSwgYWN0aW9uOiBcImFkZFwifX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gdGhpcy5nYW1lU3RhdGVFbnVtLlBBVVNFKSB7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nYW1lU3RhdGUgPT09IHRoaXMuZ2FtZVN0YXRlRW51bS5HQU1FT1ZFUikge1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FtZVN0YXRlID09PSB0aGlzLmdhbWVTdGF0ZUVudW0uU0VSVkVSRlVMTCkge1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xpY2tlZChkYXRhKSB7XG4gICAgICAgIFxuICAgICAgICAvLyBQcm9jZXNzIHRoZSBjbGljayBmcm9tIHRoZSBjbGllbnQuIFxuICAgICAgICAvLyBDbGllbnQgc2hvdWxkIGRvIE5PIHJ1bGUgcHJvY2Vzc2luZy4gUGFzcyB0aGUgY2xpY2sgZnJvbSBjbGllbnQgdG8gc2VydmVyOyBwcm9jZXNzIHRoZSBkYXRhOyB0ZWxsIHRoZSBjbGllbnQgd2hhdCB0byBkby5cbiAgICAgICAgLy8gQmFzaWNhbGx5LCBjaGVjayBnYW1lIHN0YXRlIGFuZCB0dXJuIHN0YXRlLlxuICAgICAgICBcbiAgICAgICAgc3dpdGNoICh0aGlzLmdhbWVTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIHRoaXMuZ2FtZVN0YXRlRW51bS5HQU1FOlxuXG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkUGVyc29ubmVsID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMudHVyblN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLk1PVkU6XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBsYXllciBjYW4gbW92ZSBvbmUgY2xvbmUgcGVyIHR1cm4uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RlOiBUaGUgYXJyYXkgb2YgbGVnYWwgcGVyc29ubmVsIChpbiB0aGlzLmFjdGl2ZVBsYXllcikgd2FzIHNlbnQgYnkgcm9sbERpY2UoKS5cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdoaWRlVGlsZXMnLCBkZXRhaWxzOiBudWxsfSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBlcnNvbm5lbCA9IHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbEJ5UG9pbnQoe3g6ZGF0YS54LCB5OmRhdGEueX0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRQZXJzb25uZWwgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xvbmUgd2FzIGNsaWNrZWQsIHNvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0xlZ2FsUGVyc29ubmVsID0gdGhpcy5hY3RpdmVQbGF5ZXIuY2hlY2tQZXJzb25uZWxNb3ZlKHNlbGVjdGVkUGVyc29ubmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBJZiBwZXJzb25uZWwgaXMgYSBcImJpb2Ryb25lXCIgdHlwZSBBTkQgY2xvbmVzIHJlbWFpbiBpbiB0aGUgUGxheWVyLmN1cnJlbnRsZWdhbHBpZWNlcyBhcnJheSwgZW1pdCBtb2RhbCB3YXJuaW5nIHRvIHBsYXllci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbG9uZSBtdXN0IG1vdmUgYW5kIHRpbGUgbXVzdCBiZSB0cmlnZ2VyZWQgcHJpb3IgdG8gYmlvZHJvbmUgbW92ZW1lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTGVnYWxQZXJzb25uZWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUgPSBzZWxlY3RlZFBlcnNvbm5lbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIC0gU2hvdyBoaWdobGlnaHQgc2VsZWN0ZWQgcGVyc29ubmVsIGluIGNsaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgLSBTaG93IGxlZ2FsIG1vdmVzIG9mIHRoZSBzZWxlY3RlZCBwZXJzb25uZWwgaW4gYSBkaWZmZXJlbnQgY29sb3JcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9pbnRBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludEFycmF5ID0gdGhpcy5nZXRMZWdhbE1vdmVzKHNlbGVjdGVkUGVyc29ubmVsLCB0aGlzLmN1cnJlbnREaWNlVmFsdWUsIHt4OnNlbGVjdGVkUGVyc29ubmVsLngsIHk6c2VsZWN0ZWRQZXJzb25uZWwueX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3Nob3dUaWxlcycsIGRldGFpbHM6IHt4OmRhdGEueCwgeTpkYXRhLnl9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBTaG93IGluIGRpZmZlcmVudCBjb2xvci4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3Nob3dUaWxlcycsIGRldGFpbHM6IHBvaW50QXJyYXl9LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZVBsYXllci5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0xlZ2FsTW92ZSA9IHRoaXMuYWN0aXZlUGxheWVyLmNoZWNrUGVyc29ubmVsTW92ZSh0aGlzLmFjdGl2ZVBsYXllci5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZSx7eDpkYXRhLngsIHk6ZGF0YS55fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTGVnYWxNb3ZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUb2dnbGUgYmFjayB0byBoaWdobGlnaHRpbmcgdGhlIHBlcnNvbm5lbCB3aXRoIGxlZ2FsIG1vdmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGVtaXQgc29tZXRoaW5nIHRvIHNob3cgY2xvbmVzIHRvIGNsaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3Nob3dUaWxlcycsIGRldGFpbHM6IHt9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgdGhlIHBlcnNvbm5lbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllci5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZS5tb3ZlKGRhdGEueCwgZGF0YS55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdtb3ZlUGVyc29ubmVsJywgZGV0YWlsczoge3V1aWQ6dGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUudXVpZCwgeDpkYXRhLngsIHk6ZGF0YS55fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB7dHlwZTpcInBlcnNvbm5lbFwiLCBkZXRhaWxzOiB7dXVpZDp0aGlzLmFjdGl2ZVBsYXllci5zZWxlY3RlZFBlcnNvbm5lbFRvTW92ZS51dWlkLCB4OmRhdGEueCwgeTpkYXRhLnl9fSwgdGhpcy5nZXRQbGF5ZXJPcHBvbmVudCh0aGlzLmFjdGl2ZVBsYXllcikuc29ja2V0SUQpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGVhciBtb3ZlZCBwZXJzb25uZWwgZnJvbSB0aGUgcGxheWVyIGFycmF5LiBJZiBtb3ZlZCBwZXJzb25uZWwgd2FzIGEgY2xvbmUsIHJlbW92ZSBBTEwgY2xvbmVzIGZyb20gYXJyYXkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLnB1cmdlTGVnYWxQaWVjZXModGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUsIHRydWUpOyAvLyAybmQgYXJnOiB0cnVlIGlzIHBhc3NlZCBmb3IgY2xvbmVzOyBudWxsIGZvciBiaW9kcm9uZXMuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50dXJuU3RhdGUrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogdHJpZ2dlciB0aWxlIGFuZCBlbWl0IGJhdHRsZSB0YXJnZXRzIChndW5uZXJzLCBldGMpIHRvIFBsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2YXRlVGlsZSh7eDpkYXRhLngsIHk6ZGF0YS55fSk7ICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGlmIHRpbGUgaXMgcHJvZHVjdGlvbiwgc3VyZmFjZSwgb3IgYXJtb3J5OyBjaGVjayBmb3IgYmlvZHJvbmVzIGFuZCBtb3ZlIG9yZG5hbmNlLCB0aGVuIChpZiBub25lIGFyZSBmb3VuZCkgY2hhbmdlIHBsYXllcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aWxlID0gdGhpcy5nZXRUaWxlKGRhdGEueCwgZGF0YS55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB0aWxlLnR5cGUgPT0gXCJwcm9kdWN0aW9uXCIgIHx8IHRpbGUudHlwZSA9PSBcInN1cmZhY2VcIiB8fCB0aWxlLnR5cGUgPT0gXCJhcm1vcnlcIiB8fCB0aWxlLnR5cGUgPT0gXCJsb2NrXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aWxlLm5hbWUgPT0gXCJwcm9kUmVwYWlyXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVldWVkVGlsZSA9IHRpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbGUubmFtZSA9PSBcImNoZW1pY2FsUmVhY3RvclwiIHx8IHRpbGUubmFtZSA9PSBcImNoZW1pY2FsUmVhY3RvclR3b1wiIHx8IHRpbGUubmFtZSA9PSBcImFpckZpbHRlclwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVldWVkVGlsZSA9IHRpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbCgnYmlvZHJvbmUnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogc2VuZCBiaW9kcm9uZSBhcnJheSB0byBjbGllbnQgZm9yIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5nZXRPcmRuYW5jZSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBtb3ZlIG9yZG5hbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3RpdmVQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uQUNUSU9OOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgd2lsbCBkZXNpZ25hdGUgZ3VubmVyKHMpIGZvciBmaXJpbmcgYW5kL29yIGFkZGl0aW9uYWwgdGFyZ2V0cywgZGVwZW5kaW5nIG9uIHRoZSBiYXR0bGUgdGlsZSB0eXBlLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGxheWVyIHdpbGwgY29uZmlybSBtb3ZlbWVudCBzZWxlY3Rpb25zIHdpdGggR08hICh1bmxlc3MgcmVwYWlyIG9yIGNvdW50ZXIgZXNwaW9uYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXJyYXkgb2YgZWxpZ2libGUgZ3VubmVycyBzZW50IHZpYSBhY3RpdmF0ZVRpbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVtaXQgYXJyYXkgb2YgZWxpZ2libGUgZ3VubmVycyBhbmQgbnVtYmVyIG9mIHNlbGVjdGFibGUgZ3VubmVycyB0byBQbGF5ZXIuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3Rpb25UaWxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5xdWV1ZWRUaWxlLm5hbWUgPT0gXCJjaGVtaWNhbFJlYWN0b3JcIiB8fCB0aGlzLnF1ZXVlZFRpbGUubmFtZSA9PSBcImNoZW1pY2FsUmVhY3RvclR3b1wiIHx8IHRoaXMucXVldWVkVGlsZS5uYW1lID09IFwiYWlyRmlsdGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25UaWxlID0gdGhpcy5nZXRUaWxlKGRhdGEueCwgZGF0YS55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uVGlsZS5uYW1lID09IFwibG9ja1wiICYmIGFjdGlvblRpbGUuZGFtYWdlZCA9PT0gZmFsc2UgJiYgYWN0aW9uVGlsZS5vY2N1cGllZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUNsb25lKHRoaXMuYWN0aXZlUGxheWVyLCBkYXRhLngsIGRhdGEueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlQ2xvbmVzVG9BZGQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXZhaWxhYmxlQ2xvbmVzVG9BZGQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbCgnYmlvZHJvbmVzJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogc2VuZCBiaW9kcm9uZSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuZ2V0T3JkbmFuY2UoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBNb3ZlIG9yZG5hbmNlIGFuZCBjaGVjayBmb3IgZGFtYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3RpdmVQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5xdWV1ZWRUaWxlLm5hbWUgPT0gXCJjb3VudGVyRXNwaW9uYWdlXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogc3BlY2lhbCBjYXNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnF1ZXVlZFRpbGUubmFtZSA9PSBcInJlcGFpclwiIHx8IHRoaXMucXVldWVkVGlsZS5uYW1lID09IFwicmVwYWlyVHdvXCIgfHwgdGhpcy5xdWV1ZWRUaWxlLm5hbWUgPT0gXCJwcm9kUmVwYWlyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBTcGVjaWFsIGNhc2VzLiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25UaWxlID0gdGhpcy5nZXRUaWxlKGRhdGEueCwgZGF0YS55KS5kYW1hZ2VkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb25UaWxlLmRhbWFnZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uVGlsZS5kYW1hZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlc1JlcGFpcmVkVGhpc1R1cm4rKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3JlcGFpclRpbGUnLCBkZXRhaWxzOiB7eDpkYXRhLngsIHk6ZGF0YS55fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlc1JlcGFpcmVkVGhpc1R1cm4gPT0gMSkgeyAgLy8gVE9ETzogY2hlY2sgZm9yIHJlcGFpclR3b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVzUmVwYWlyZWRUaGlzVHVybiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5nZXRQZXJzb25uZWwoJ2Jpb2Ryb25lcycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHNlbmQgYmlvZHJvbmUgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmdldE9yZG5hbmNlKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogTW92ZSBvcmRuYW5jZSBhbmQgY2hlY2sgZm9yIGRhbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQWN0aXZlUGxheWVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGVyc29ubmVsID0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UGVyc29ubmVsQnlQb2ludCh7eDpkYXRhLngsIHk6ZGF0YS55fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkUGVyc29ubmVsICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIudG9nZ2xlR3VubmVyU2VsZWN0aW9uKHNlbGVjdGVkUGVyc29ubmVsKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdzaG93VGlsZXMnLCBkZXRhaWxzOiB7eDpkYXRhLngsIHk6ZGF0YS55fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAnaGlkZVRpbGVzJywgZGV0YWlsczoge3g6ZGF0YS54LCB5OmRhdGEueX19LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLlRBUkdFVFM6XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBsYXllciB3aWxsIGNob29zZSBhZGRpdGlvbmFsIHRhcmdldHMgaWYgcmVxdWlyZWQgYnkgdGhlIHRpbGUuIEVzcG9pbmFnZSwgZm9yIGluc3RhbmNlLCByZXF1aXJlcyBhIGd1bm5lciBhbmQgYW4gZW5lbXkgY2xvbmUgaW4gdGhlIHNlbGVjdGVkIGd1bm5lcidzIGxpbmUgb2YgZmlyZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBsYXllciB3aWxsIGNvbmZpcm0gdGFyZ2V0cyB3aXRoIEdPIVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRhcmdldCBxdWV1ZWQhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uT1JETkFOQ0U6XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLkVORDpcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQW55IHBvc3QtdHVybiBwcm9jZXNzaW5nIGNhbiBoYXBwZW4gaGVyZS4gT3RoZXJ3aXNlLCB0aGUgdHVybiBtYXkgYWxyZWFkeSBiZSBvdmVyLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR1cm5TdGF0ZSA9IHRoaXMudHVyblN0YXRlRW51bS5ST0xMO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAgICBcbiAgICB9XG5cbiAgICBnbyhkYXRhKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy50dXJuU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLkFDVElPTjpcbiAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgaGFzIGNvbmZpcm1lZCBndW5uZXIgc2VsZWN0aW9uLlxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmdldFNlbGVjdGVkR3VubmVycygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJlV2VhcG9uKHRoaXMucXVldWVkVGlsZSwgdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0U2VsZWN0ZWRHdW5uZXJzKCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBJZiB0YXJnZXRzIGFyZSByZXF1aXJlZCAoaWUgZXNwaW9uYWdlKSBzZW5kIHRoYXQgYXJyYXkgbm93IGFuZCBhZHZhbmNlIHRvIFRBUkdFVFMgYW5kIFJFVFVSTlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IElmIGJpb2Ryb25lcyBleGlzdCwgc2VuZCB0aGF0IGFycmF5IG5vdyBhbmQgYWR2YW5jZSB0byBCSU9EUk9ORVMgYW5kIFJFVFVSTlxuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogSWYgcGxheWVyIGhhcyBvcmRuYW5jZSwgbW92ZSBvcmRuYW5jZS9jaGVjayBkYW1hZ2UgXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLm9yZG5hbmNlQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXBkYXRlZE9yZG5hbmNlID0gdGhpcy5hY3RpdmVQbGF5ZXIubW92ZU9yZG5hbmNlKHRoaXMuY3VycmVudERpY2VWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IENoZWNrIC8gYXBwbHkgZGFtYWdlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOidtb3ZlT3JkbmFuY2UnLCBkZXRhaWxzOnVwZGF0ZWRPcmRuYW5jZX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUFjdGl2ZVBsYXllcigpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uVEFSR0VUUzpcbiAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgaGFzIGNvbmZpcm1lZCBhbGwgdGFyZ2V0cyAodGhpcyB3aWxsIGFwcGx5IHRvIGxpbWl0ZWQgYmF0dGxlIHRpbGVzIGxpa2UgZXNwaW9uYWdlKVxuICAgICAgICAgICAgICAgIC8vIEkgbWF5IGNvbWUgYmFjayB0byB0aGlzIGEgYml0IGxhdGVyLlxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFVwZGF0ZSBjbGllbnQgd2l0aCByZXN1bHRcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLkJJT0RST05FOlxuICAgICAgICAgICAgICAgIC8vIFBsYXllciBoYXMgY29uZmlybWVkIHRoYXQgYmlvZHJvbmUgc2VsZWN0aW9uIChpZiBhbnkpIGlzIGZpbmFsLiBcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBNb3ZlIGJpb2Ryb25lKHMpIGFuZCB3cmVhayBoYXZvay4gXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogYWR2YW5jZSB0dXJuc3RhdGVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLkVORDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9XG5cblx0YWRkTmV3UGxheWVyKHNvY2tldElELCB1dWlkKSB7XG4gICAgICAgIHRoaXMubGFzdFBsYXllcklEKys7XG4gICAgICAgIHZhciBwbGF5ZXIgPSBuZXcgUGxheWVyKHNvY2tldElELCB0aGlzLmxhc3RQbGF5ZXJJRCwgdXVpZCk7XG4gICAgICAgIHRoaXMucGxheWVyc0FycmF5LnB1c2gocGxheWVyKTtcbiAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICd1cGRhdGVQbGF5ZXInLCBkZXRhaWxzOiB7aWQ6IHRoaXMubGFzdFBsYXllcklEfX0sIHNvY2tldElEKTtcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcblx0fVxuXG4gICAgYWRkUGxheWVyKHBsYXllcikge1xuICAgICAgICB0aGlzLnBsYXllcnNBcnJheS5wdXNoKHBsYXllcik7XG4gICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAndXBkYXRlUGxheWVyJywgZGV0YWlsczoge2lkOiBwbGF5ZXIuaWR9fSwgcGxheWVyLnNvY2tldElEKTtcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJTdGF0ZShzdGF0ZSkge1xuICAgICAgICB2YXIgcGxheWVyID0gbnVsbDtcbiAgICAgICAgc3dpdGNoIChzdGF0ZS52YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOiBcbiAgICAgICAgICAgICAgICBwbGF5ZXIgPSB0aGlzLmdldFBsYXllckJ5U29ja2V0SUQoc3RhdGUuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgIHBsYXllci5yZWFkeVRvU3RhcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhciBvcHBvbmVudCA9IHRoaXMuZ2V0UGxheWVyT3Bwb25lbnQocGxheWVyKTtcbiAgICAgICAgICAgICAgICBpZighb3Bwb25lbnQgfHwgIW9wcG9uZW50LnJlYWR5VG9TdGFydCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIgPSB0aGlzLmdldFJhbmRvbVBsYXllcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3RhdGUudmFsdWUpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3Ioc3RhdGUudmFsdWUgKyBcIiBpcyBub3QgYSB2YWxpZCBwbGF5ZXIgc3RhdGUhXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UGxheWVyT3Bwb25lbnQocGxheWVyKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllcnNBcnJheS5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBsYXllcnNBcnJheVswXSA9PT0gcGxheWVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXlbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXlbMF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VBY3RpdmVQbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLmNsZWFyUXVldWVzKCk7XG4gICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwidGFrZURpY2VcIiwgZGV0YWlsczoge319LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgIHRoaXMuYWN0aXZlUGxheWVyID0gdGhpcy5nZXRQbGF5ZXJPcHBvbmVudCh0aGlzLmFjdGl2ZVBsYXllcik7XG4gICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwib2ZmZXJEaWNlXCIsIGRldGFpbHM6IHt9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICB0aGlzLnR1cm5TdGF0ZSA9IDA7XG4gICAgfVxuXG4gICAgZ2V0UmFuZG9tUGxheWVyKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMildO1xuICAgIH1cbiAgICBcbiAgICBnZXRQbGF5ZXJCeVVVSUQodXVpZCkge1xuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMucGxheWVyc0FycmF5KSB7XG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcnNBcnJheVtpXS51dWlkID09IHV1aWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5W2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBcbiAgICBnZXRQbGF5ZXJCeVNvY2tldElEKGlkKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyc0FycmF5W2ldLnNvY2tldElEID09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5W2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRQbGF5ZXJDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5Lmxlbmd0aDtcbiAgICB9XG5cbiAgICBjaGVja0FybXMocGxheWVyKSB7XG4gICAgICAgIHBsYXllci5hcm1zQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBwbGF5ZXIucGVyc29ubmVsQXJyYXkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbGVBcnJheVtwbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueF1bcGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnldLnR5cGUgPT0gXCJhcm1vcnlcIikge1xuICAgICAgICAgICAgICAgIHBsYXllci5hcm1zQXJyYXkucHVzaCh0aGlzLnRpbGVBcnJheVtwbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueF1bcGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnldLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNoZWNrR3VubmVycyhwbGF5ZXIpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBwbGF5ZXIucGVyc29ubmVsQXJyYXkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbGVBcnJheVtwbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueF1bcGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnldLnR5cGUgPT0gXCJzdXJmYWNlXCIpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0uaXNHdW5uZXIgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0uaXNHdW5uZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4aXN0c1BsYXllclVVSUQodXVpZCkge1xuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMucGxheWVyc0FycmF5KSB7XG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcnNBcnJheVtpXS51dWlkID09IHV1aWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gICAgXG5cbiAgICBhY3RpdmF0ZVRpbGUoZGF0YSkge1xuICAgICAgICB2YXIgdGlsZSA9IHRoaXMuZ2V0VGlsZShkYXRhLngsIGRhdGEueSk7XG4gICAgICAgIHZhciByZW1haW5pbmdDb3VudCA9IG51bGw7XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2ggKHRpbGUudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcInN1cmZhY2VcIjogXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UGVyc29ubmVsQnlQb2ludCh7eDpkYXRhLngsIHk6ZGF0YS55fSkuaXNHdW5uZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInByb2R1Y3Rpb25cIjpcblxuICAgICAgICAgICAgICAgIC8vIFRocmVlIHNwZWNpYWwgY2FzZXM6IFxuICAgICAgICAgICAgICAgIC8vICAtIFNlbnNvciBDYWJpbiBkb2VzIG5vdCBjb3N0IG9yIHlpZWxkIGFueXRoaW5nLiBXZSBjYW4gaGFuZGxlIHRoaXMgaW1tZWRpYXRlbHkpXG4gICAgICAgICAgICAgICAgLy8gIC0gUHJvZHVjdGlvbiBSZXBhaXIgY29zdHMsIGJ1dCB0cmlnZ2VycyBhIHJlcGFpciBqdXN0IGxpa2UgdGhlIFJlcGFpciBiYXR0bGUgdGlsZSAoV2UgbmVlZCB0byBjaGVjayBpZiB3ZSBjYW4gYWZmb3JkKVxuICAgICAgICAgICAgICAgIC8vICAtIE51Y2xlYXIgQXJtb3J5IHByb2R1Y2VzIGEgbnVrZSB3aGljaCByZWxpZXMgb24gb3JkbmFuY2Ugd2hpY2ggaGFzIG5vdCBiZWVuIGJ1aWx0IHlldFxuXG4gICAgICAgICAgICAgICAgaWYodGlsZS5uYW1lID09IFwic2Vuc29yQ2FiaW5cIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgc2Vuc29yIGNhYmluIHNvIGp1c3QgdHJpZ2dlciB0aGUgYWN0aW9uIGFuZCBtb3ZlIG9uLlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbnNvciBjYWJpbnMgYXJlIGZyZWUhXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuY2hlY2tSZXNvdXJjZSh0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZVtpXSwgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdENvdW50W2ldKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbid0IGFmZm9yZCBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDYW4ndCBhZmZvcmQgaXQhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiBpbiB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmNoZWNrUmVzb3VyY2UodGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRUeXBlW2pdLCB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZENvdW50W2pdLCB0cnVlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vIHJvb20gdG8gc3RvcmUgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FuJ3QgYWNjZXB0IHRoZSB5aWVsZCBjdXogd2UgZ290IG5vIHJvb20hXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRpbGUubmFtZSA9PSBcImNoZW1pY2FsUmVhY3RvclwiIHx8IHRpbGUubmFtZSA9PSBcImNoZW1pY2FsUmVhY3RvclR3b1wiICkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF2YWlsYWJsZUNsb25lc1RvQWRkID0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UmVzb3VyY2VDb3VudCgnb3h5Z2VuJykgKyB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZENvdW50WzBdIC0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UGVyc29ubmVsKCdjbG9uZScpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCB0aWxlLm5hbWUgPT0gXCJhaXJGaWx0ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF2YWlsYWJsZUNsb25lc1RvQWRkID0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UmVzb3VyY2VDb3VudCgnb3h5Z2VuJykgKyB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZENvdW50WzBdIC0gdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdENvdW50WzBdIC0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UGVyc29ubmVsKCdjbG9uZScpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrIGluIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ0NvdW50ID0gdGhpcy5hY3RpdmVQbGF5ZXIuc3BlbmRSZXNvdXJjZSh0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZVtrXSwgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdENvdW50W2tdKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXIgXCIgKyB0aGlzLmFjdGl2ZVBsYXllci5pZCArIFwiIHNwZW50IFwiICsgcmVtYWluaW5nQ291bnQgKyBcIiBcIiArIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlW2tdICsgXCIuIFRoaXMgbGVhdmVzIHRoZW0gd2l0aCBcIiArIHRoaXMuYWN0aXZlUGxheWVyLmdldFJlc291cmNlQ291bnQodGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGVba10pKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBsIGluIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdDb3VudCA9IHRoaXMuYWN0aXZlUGxheWVyLmFjY2VwdFJlc291cmNlKHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkVHlwZVtsXSwgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRDb3VudFtsXSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZW1haW5pbmdDb3VudCkgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllciBcIiArIHRoaXMuYWN0aXZlUGxheWVyLmlkICsgXCIgYWRkZWQgXCIgKyByZW1haW5pbmdDb3VudCArIFwiIFwiICsgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRUeXBlW2xdICsgXCIuIFRoaXMgbGVhdmVzIHRoZW0gd2l0aCBcIiArIHRoaXMuYWN0aXZlUGxheWVyLmdldFJlc291cmNlQ291bnQodGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRUeXBlW2xdKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRpbGUubmFtZSA9PSBcIm94eWdlblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IENoZWNrIGlmIG94eWdlbiBpcyBncmVhdGVyIHRoYW4gdGhlIG51bWJlciBvZiBjbG9uZXMuIElmIHNvLCBhZGQgYSBjbG9uZS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmdldFJlc291cmNlQ291bnQoJ294eWdlbicpID4gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UGVyc29ubmVsKCdjbG9uZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlZFRpbGUgPSB0aWxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRpbGUubmFtZSA9PSBcInByb2RSZXBhaXJcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIHRoZSByZXBhaXIgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVldWVkVGlsZSA9IHRpbGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKFwiKysrKysrK1wiKTtcblxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBwbGF5ZXIgdG8gdGhlaXIgbmV3IHdhcmVob3VzZSB2YWx1ZXNcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSBcImFybW9yeVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tBcm1zKHRoaXMuYWN0aXZlUGxheWVyKTtcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgcGxheWVyJ3MgcGVyc29ubmVsIHRvIGJlIGFybWVkXG4gICAgICAgICAgICAgICAgLy8gTWF5YmUgaGF2ZSB0aHJlZSBvdmVybGFwcGluZyBzcHJpdGVzLiBEcmlsbCwgQ2Fubm9uLCBFeHBsb3NpdmVzP1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiYmF0dGxlXCI6XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aWxlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNoaWVsZFwiOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYmlvZHJvbmVcIjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImxhc2VyXCI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0aGVybWl0ZVwiOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2F0ZWxsaXRlXCI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyb2NrZXRcIjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVzcGlvbmFnZVwiOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwidGFrZW92ZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudHVyblN0YXRlKys7IC8vIFNldCBzdGF0ZSB0byBBQ1RJT04uXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFJlc291cmNlQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRSZXNvdXJjZUFmZm9yZGFiaWxpdHkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFmZm9yZGFibGVSb3VuZHMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVybkFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlR3VubmVycyA9IHRoaXMuYWN0aXZlUGxheWVyLmdldEd1bm5lcnMoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUd1bm5lcnMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gTm8gZ3VubmVycyEgR2V0IG91dCBvZiBoZXJlLlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBtIGluIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlQ291bnQgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRSZXNvdXJjZUNvdW50KHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlW21dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VBZmZvcmRhYmlsaXR5ID0gY3VycmVudFJlc291cmNlQ291bnQgLyB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZXNvdXJjZUFmZm9yZGFiaWxpdHkgPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjsgLy8gTm90IGVub3VnaCBvZiBhIHJlc291cmNlIVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFmZm9yZGFibGVSb3VuZHMgPT09IG51bGwgfHwgY3VycmVudFJlc291cmNlQWZmb3JkYWJpbGl0eSA8IGFmZm9yZGFibGVSb3VuZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZmb3JkYWJsZVJvdW5kcyA9IGN1cnJlbnRSZXNvdXJjZUFmZm9yZGFiaWxpdHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZWxsIHBsYXllciB0aGV5IGNhbiBhZmZvcmQgXCIgKyBhZmZvcmRhYmxlUm91bmRzICsgXCIgZ3VubmVyKHMpXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWV1ZWRUaWxlID0gdGlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGVtaXQgc2hvd1RpbGVzKCkgd2l0aCBhcnJheSBvZiBsZWdhbCBndW5uZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcIm9mZmVyR3VubmVyc1wiLCBkZXRhaWxzOntndW5uZXJzOmFjdGl2ZUd1bm5lcnN9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVhZHkgdG8gc2VsZWN0IGd1bm5lcnMhIFRoaXMgd2lsbCB0YWtlIHBsYWNlIG9uIHRoZSBuZXh0IGxlZ2FsIGNsaWNrIGV2ZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY291bnRlckVzcGlvbmFnZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9vayBmb3IgY2xvbmVzIHRoYXQgYXJlIG9wcG9uZW50J3Mgc3BpZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyZXBhaXJcIjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJlcGFpclR3b1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWV1ZWRUaWxlID0gdGlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGN1cnJlbnRSZXNvdXJjZUNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhciBhY3RpdmVEYW1hZ2VkVGlsZXMgPSB0aGlzLmdldERhbWFnZWRUaWxlcyh0aGlzLmFjdGl2ZVBsYXllcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoYWN0aXZlRGFtYWdlZFRpbGVzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAvLyBjYWxjdWxhdGUgY29zdCBvZiByZXBhaXJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciAodmFyIG4gaW4gdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjdXJyZW50UmVzb3VyY2VDb3VudCA9IHRoaXMuYWN0aXZlUGxheWVyLmdldFJlc291cmNlQ291bnQodGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGVbbl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmIChjdXJyZW50UmVzb3VyY2VDb3VudCA8IHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm47IC8vIE5vdCBlbm91Z2ggb2YgYSByZXNvdXJjZSFcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUZWxsIHBsYXllciB0aGF0IHRoZXkgY2FuIGFmZm9yZCB0byBmaXggdXAgdGhlIHN0YXRpb24hXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGlsZU9jY3VwYW50KHBvaW50KSB7XG4gICAgICAgIHZhciBvcmRuYW5jZSwgcGVyc29ubmVsO1xuICAgICAgICBmb3IgKHZhciBwaSA9IDA7IHBpIDwgdGhpcy5wbGF5ZXJzQXJyYXkubGVuZ3RoOyBwaSsrKSB7XG4gICAgICAgICAgICBvcmRuYW5jZSA9IHRoaXMucGxheWVyc0FycmF5W3BpXS5nZXRPcmRuYW5jZUJ5UG9pbnQocG9pbnQpO1xuICAgICAgICAgICAgcGVyc29ubmVsID0gdGhpcy5wbGF5ZXJzQXJyYXlbcGldLmdldFBlcnNvbm5lbEJ5UG9pbnQocG9pbnQpO1xuICAgICAgICAgICAgaWYgKG9yZG5hbmNlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcmRuYW5jZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGVyc29ubmVsICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwZXJzb25uZWw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmVXZWFwb24od2VhcG9uVGlsZSwgZ3VubmVyQXJyYXkpIHtcbiAgICAgICAgaWYgKGd1bm5lckFycmF5Lmxlbmd0aCA8PSAwICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBndW5uZXJBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG9yZG5hbmNlUG9pbnQgPSB7eDpndW5uZXJBcnJheVtpXS54LCB5Omd1bm5lckFycmF5W2ldLnl9O1xuICAgICAgICAgICAgdmFyIGltcGFjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgb3JkVVVJRDtcblxuICAgICAgICAgICAgc3dpdGNoICh3ZWFwb25UaWxlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwibGFzZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRUaWxlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudE9jY3VwYW50O1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaW1wYWN0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuaWQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZG5hbmNlUG9pbnQueCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRuYW5jZVBvaW50LngtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlID0gdGhpcy5nZXRUaWxlKG9yZG5hbmNlUG9pbnQueCwgb3JkbmFuY2VQb2ludC55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudFRpbGUubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzcGFjZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzdXJmYWNlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGlsZS5vY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9jY3VwYW50ID0gdGhpcy5nZXRUaWxlT2NjdXBhbnQob3JkbmFuY2VQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllci5yZW1vdmUoY3VycmVudE9jY3VwYW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlLm9jY3VwaWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBhY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBZb3UgYXJlIGluIHRoZSBvcHBvbmVudCBtaW5lLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFRpbGUub2NjdXBpZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPY2N1cGFudCA9IHRoaXMuZ2V0VGlsZU9jY3VwYW50KG9yZG5hbmNlUG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIucmVtb3ZlUGVyc29ubmVsKGN1cnJlbnRPY2N1cGFudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBlbWl0IGRlYXRoIGFuaW1hdGlvbiB0byBjbGllbnRzLiAobWF5YmUganVzdCBhZGQgdGhhdCB0byB0aGUgcmVtb3ZlUGVyc29ubmVsKCk/KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJyZW1vdmVQZXJzb25uZWxcIiwgZGV0YWlsczpjdXJyZW50T2NjdXBhbnR9LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGlsZS5vY2N1cGllZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJkYW1hZ2VUaWxlXCIgLGRldGFpbHM6b3JkbmFuY2VQb2ludH0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHVwZGF0ZSBvcHBvbmVudCdzIGNsaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wYWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUaWxlLmRhbWFnZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbGUuZGFtYWdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcImRhbWFnZVRpbGVcIiAsZGV0YWlsczpvcmRuYW5jZVBvaW50fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogdXBkYXRlIG9wcG9uZW50J3MgY2xpZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBhY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzaGllbGRcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmlvZHJvbmVcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwic2F0ZWxsaXRlXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcInJvY2tldFwiOlxuICAgICAgICAgICAgICAgICAgICBpZiAod2VhcG9uVGlsZS5uYW1lID09IFwic2hpZWxkXCIgfHwgd2VhcG9uVGlsZS5uYW1lID09IFwic2F0ZWxsaXRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5pZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkbmFuY2VQb2ludC54ICs9IHRoaXMuY3VycmVudERpY2VWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkbmFuY2VQb2ludC54IC09IHRoaXMuY3VycmVudERpY2VWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGlsZSA9IHRoaXMuZ2V0VGlsZShvcmRuYW5jZVBvaW50LngsIG9yZG5hbmNlUG9pbnQueSk7XG4gICAgICAgICAgICAgICAgICAgIG9yZFVVSUQgPSB1dWlkKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLmFkZE9yZG5hbmNlKHdlYXBvblRpbGUubmFtZSwgb3JkbmFuY2VQb2ludCwgb3JkVVVJRCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwiYWRkT3JkbmFuY2VcIiwgZGV0YWlsczp7dHlwZTp3ZWFwb25UaWxlLm5hbWUsIHBsYXllcklEOiB0aGlzLmFjdGl2ZVBsYXllci5pZCwgcG9pbnQ6b3JkbmFuY2VQb2ludCwgdXVpZDpvcmRVVUlEfX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiB1cGRhdGVQZXJzb25uZWwgb24gb3Bwb25lbnQgY2xpZW50XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0aGVybWl0ZVwiOlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuaWQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JkbmFuY2VQb2ludC54ID0gMzEgLSB0aGlzLmN1cnJlbnREaWNlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRuYW5jZVBvaW50LnggPSB0aGlzLmN1cnJlbnREaWNlVmFsdWUgLSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlID0gdGhpcy5nZXRUaWxlKG9yZG5hbmNlUG9pbnQueCwgb3JkbmFuY2VQb2ludC55KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUaWxlLmRhbWFnZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbGUuZGFtYWdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcImRhbWFnZVRpbGVcIiAsZGV0YWlsczpvcmRuYW5jZVBvaW50fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIGlzIGEgcHJvYmxlbSB3aXRoIHRoYXQgd2VhcG9uVGlsZSBhcmd1bWVudFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm47IFxuICAgICAgICAvLyBzd2l0Y2ggKHdlYXBvblRpbGUubmFtZSkge1xuICAgICAgICAvLyAgICAgY2FzZSBcImVzcGlvbmFnZVwiOlxuICAgICAgICAvLyAgICAgY2FzZSBcInRha2VvdmVyXCI6XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICBkZWZhdWx0OlxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSBpcyBhIHByb2JsZW0gd2l0aCB0aGF0IHdlYXBvblRpbGUgYXJndW1lbnRcIik7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBnZXRMb2NrcyhwbGF5ZXIpIHtcbiAgICAgICAgdmFyIHJldHVybkFycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIGMgaW4gdGhpcy50aWxlQXJyYXkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHIgaW4gdGhpcy50aWxlQXJyYXlbY10pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlQXJyYXlbY11bcl0ubmFtZSA9PSBcImxvY2tcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyLmlkID09IDEgJiYgYyA8IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLnRpbGVBcnJheVtjXVtyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBsYXllci5pZCA9PSAyICYmIGMgPiAxOCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy50aWxlQXJyYXlbY11bcl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLnRpbGVBcnJheVtjXVtyXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVybkFycmF5O1xuICAgIH1cblxuICAgIGdldERhbWFnZWRUaWxlcyhwbGF5ZXIpIHtcbiAgICAgICAgdmFyIHJldHVybkFycmF5ID0gW107XG4gICAgICAgIGZvciAodmFyIGMgaW4gdGhpcy50aWxlQXJyYXkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIHIgaW4gdGhpcy50aWxlQXJyYXlbY10pIHtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuaWQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMgPCAxMiAmJiB0aGlzLnRpbGVBcnJheVtjXVtyXS5kYW1hZ2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLnRpbGVBcnJheVtjXVtyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMgPiAxOCAmJiB0aGlzLnRpbGVBcnJheVtjXVtyXS5kYW1hZ2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLnRpbGVBcnJheVtjXVtyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZUFycmF5W2NdW3JdLmRhbWFnZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy50aWxlQXJyYXlbY11bcl0pO1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XG4gICAgfVxuICAgIFxuICAgIHBsYWNlQ2xvbmUocGxheWVyLCB4LCB5KSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwbGF5ZXIgPT09ICd1bmRlZmluZWQnIHx8IHBsYXllciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGVjdGVkVGlsZSA9IHRoaXMuZ2V0VGlsZSh4LCB5KTtcbiAgICAgICAgdmFyIGNsb25lLCBjbG9uZVVVSUQ7XG5cbiAgICAgICAgaWYgKHBsYXllci5pZCAhPSBzZWxlY3RlZFRpbGUub3duZXIgfHwgc2VsZWN0ZWRUaWxlLm9jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBnYW1lc3RhdGUgaXMgU0VUVVAgeW91IGNhbiBwbGFjZSBpbiBsb2NrLCBiYXR0bGUsIGFybW9yeSwgYW5kIHByb2R1Y3Rpb24gdGlsZXMsIG90aGVyd2lzZSBvbmx5IGluIGxvY2sgdGlsZXMuXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gdGhpcy5nYW1lU3RhdGVFbnVtLlNFVFVQKSB7XG4gICAgICAgICAgICBpZiAocGxheWVyLmdldFBlcnNvbm5lbCgnY2xvbmUnKS5sZW5ndGggPT09IHBsYXllci5zdGFydGluZ0Nsb25lQ291bnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihzZWxlY3RlZFRpbGUudHlwZSA9PSBcImxvY2tcIiB8fCBzZWxlY3RlZFRpbGUudHlwZSA9PSBcImJhdHRsZVwiIHx8IHNlbGVjdGVkVGlsZS50eXBlID09IFwiYXJtb3J5XCIgfHwgc2VsZWN0ZWRUaWxlLnR5cGUgPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBjbG9uZVVVSUQgPSB1dWlkKCk7XG4gICAgICAgICAgICAgICAgY2xvbmUgPSBwbGF5ZXIuYWRkUGVyc29ubmVsKCdjbG9uZScsIHgsIHksIGNsb25lVVVJRCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFRpbGUudHlwZSA9PSBcImxvY2tcIikge1xuICAgICAgICAgICAgICAgIGNsb25lVVVJRCA9IHV1aWQoKTtcbiAgICAgICAgICAgICAgICBjbG9uZSA9IHBsYXllci5hZGRQZXJzb25uZWwoJ2Nsb25lJywgeCwgeSwgY2xvbmVVVUlEKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNyZWF0ZVRpbGVBcnJheSgpIHtcbiAgICAgICAgdmFyIHRpbGVKU09OID0gcmVxdWlyZSgnLi4vLi4vYXNzZXRzL3RpbGVEZXRhaWwuanNvbicpO1xuXG4gICAgICAgIGZvcih2YXIgYyA9IDA7IGMgPCB0aGlzLnRpbGVDb2x1bW5zOyBjKyspIHtcbiAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NdID0gW107XG4gICAgICAgICAgICBmb3IodmFyIHIgPSAwOyByIDwgdGhpcy50aWxlUm93czsgcisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbY11bcl0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6YyxcbiAgICAgICAgICAgICAgICAgICAgeTpyXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aWxlSlNPTikge1xuICAgICAgICAgICAgaWYgKCF0aWxlSlNPTi5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIG9iaiA9IHRpbGVKU09OW2tleV07XG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgICAgICAgICAgICAgIC8vIHNraXAgbG9vcCBpZiB0aGUgcHJvcGVydHkgaXMgZnJvbSBwcm90b3R5cGVcbiAgICAgICAgICAgICAgICBpZighb2JqLmhhc093blByb3BlcnR5KHByb3ApKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgbG9jYXRpb25Db3VudCA9IG9ialtwcm9wXS5sb2NhdGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYXRpb25Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB2YXIgY29vcmRzID0gb2JqW3Byb3BdLmxvY2F0aW9uc1tpXS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gY29vcmRzWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IGNvb3Jkc1sxXTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLmRhbWFnZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0ub2NjdXBpZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udHlwZSA9IG9ialtwcm9wXS50eXBlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoeCA8IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLm93bmVyID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh4ID4gMjEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLm93bmVyID0gMjtcbiAgICAgICAgICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMudGlsZUFycmF5W3hdW3ldICE9ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0ubmFtZSA9IG9ialtwcm9wXS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4ICsgXCI6XCIgKyB5ICsgXCIgbm90IGZvdW5kIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW3Byb3BdLnByb3BlcnRpZXMgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnByb3BlcnRpZXMgPSBvYmpbcHJvcF0ucHJvcGVydGllcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0VGlsZSh4LCB5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVBcnJheVt4XVt5XTtcbiAgICB9XG5cbiAgICBnZXRMZWdhbFBpZWNlcygpIHtcbiAgICAgICAgdmFyIHBlcnNvbm5lbEFycmF5ID0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UGVyc29ubmVsKCk7XG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xuICAgICAgICB2YXIgbW92ZXNBcnJheSA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgaW4gcGVyc29ubmVsQXJyYXkpIHtcbiAgICAgICAgICAgIG1vdmVzQXJyYXkgPSB0aGlzLmdldExlZ2FsTW92ZXMocGVyc29ubmVsQXJyYXlbaV0sIHRoaXMuY3VycmVudERpY2VWYWx1ZSwge3g6cGVyc29ubmVsQXJyYXlbaV0ueCwgeTpwZXJzb25uZWxBcnJheVtpXS55fSk7XG4gICAgICAgICAgICBpZiAobW92ZXNBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh7dHlwZTpwZXJzb25uZWxBcnJheVtpXS50eXBlLG9yaWdpbjp7eDpwZXJzb25uZWxBcnJheVtpXS54LHk6cGVyc29ubmVsQXJyYXlbaV0ueX0sIHV1aWQ6cGVyc29ubmVsQXJyYXlbaV0udXVpZCwgbW92ZXM6bW92ZXNBcnJheX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcbiAgICB9XG5cbiAgICBnZXRDb29yZEZyb21EaXJlY3Rpb24ob3JpZ2luQ29vcmQsZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBkaXI9e05PUlRIOnt4OjAseTotMX0sRUFTVDp7eDoxLHk6MH0sU09VVEg6e3g6MCx5OjF9LFdFU1Q6e3g6LTEseTowfX07XG4gICAgICAgIFxuICAgICAgICB2YXIgb2JqID0ge3g6KHBhcnNlSW50KG9yaWdpbkNvb3JkLngpICsgcGFyc2VJbnQoZGlyW2RpcmVjdGlvbl0ueCkpLCB5OihwYXJzZUludChvcmlnaW5Db29yZC55KSArIHBhcnNlSW50KGRpcltkaXJlY3Rpb25dLnkpKX07XG4gICAgICAgIGlmKG9iai54IDwgMCB8fCBvYmoueCA+IDMwfHwgb2JqLnkgPCAwIHx8IG9iai55ID4gMjApIFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4ge3g6KHBhcnNlSW50KG9yaWdpbkNvb3JkLngpICsgcGFyc2VJbnQoZGlyW2RpcmVjdGlvbl0ueCkpLCB5OihwYXJzZUludChvcmlnaW5Db29yZC55KSArIHBhcnNlSW50KGRpcltkaXJlY3Rpb25dLnkpKX07ICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgZ2V0TGVnYWxNb3ZlcyhnYW1lUGllY2VUeXBlLCBtb3ZlcywgY3VycmVudENvb3JkLCBwcmV2aW91c0Nvb3JkKXtcbiAgICAgICAgaWYgKG1vdmVzIDwgMSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIklsbGVnYWwgbW92ZSBudW1iZXIhIFRoaXMgY291bGQgcmVzdWx0IGluIGluZmluaXRlIGxvb3AuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsZWdhbE1vdmVzID0gW107XG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xuICAgICAgICB2YXIgbmV4dE1vdmVUb0NoZWNrID0gbnVsbDtcbiAgICAgICAgdmFyIG5leHRUaWxlVG9DaGVjayA9IG51bGw7XG4gICAgICAgIG1vdmVzLS07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2Nlc3MubWVtb3J5VXNhZ2UoKS5oZWFwVXNlZCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwcmV2aW91c0Nvb3JkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdmFyIGxvY2tzID0gdGhpcy5nZXRMb2Nrcyh0aGlzLmFjdGl2ZVBsYXllcik7XG4gICAgICAgICAgICB2YXIgaXNMb2NrID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGwgaW4gbG9ja3MpIHtcbiAgICAgICAgICAgICAgICBpZiAobG9ja3NbbF0ueCA9PSBjdXJyZW50Q29vcmQueCAmJiBsb2Nrc1tsXS55ID09IGN1cnJlbnRDb29yZC55KSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTG9jayA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNMb2NrID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBsb2Nrcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudENvb3JkLnggPT0gbG9ja3NbaV0ueCAmJiBjdXJyZW50Q29vcmQueSA9PSBsb2Nrc1tpXS55KSB7IGNvbnRpbnVlOyB9IC8vIGRvbid0IGluY2x1ZGUgdGhlIGxvY2sgeW91J3JlIHNpdHRpbmcgb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZUFycmF5W2xvY2tzW2ldLnhdW2xvY2tzW2ldLnldLm9jY3VwaWVkID09PSB0cnVlKSB7IGNvbnRpbnVlOyB9IC8vIGRvbid0IGluY2x1ZGUgbG9jayB0aGF0IG90aGVycyBhcmUgc2l0dGluZyBvblxuICAgICAgICAgICAgICAgICAgICBpZiAobW92ZXMgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheSA9IHJldHVybkFycmF5LmNvbmNhdCh0aGlzLmdldExlZ2FsTW92ZXMoZ2FtZVBpZWNlVHlwZSwgbW92ZXMsIHt4OmxvY2tzW2ldLngsIHk6bG9ja3NbaV0ueX0sIGN1cnJlbnRDb29yZCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaChsb2Nrc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYyBpbiByZXR1cm5BcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmV0dXJuQXJyYXlbY10ueCAhPT0gY3VycmVudENvb3JkLnggfHwgcmV0dXJuQXJyYXlbY10ueSAhPT0gY3VycmVudENvb3JkLnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVnYWxNb3Zlcy5wdXNoKHJldHVybkFycmF5W2NdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgZGlyZWN0aW9uIGluIHRoaXMuZGlyZWN0aW9uRW51bSkge1xuICAgICAgICAgICAgbmV4dE1vdmVUb0NoZWNrID0gdGhpcy5nZXRDb29yZEZyb21EaXJlY3Rpb24oY3VycmVudENvb3JkLCBkaXJlY3Rpb24pO1xuICAgICAgICAgICAgaWYobmV4dE1vdmVUb0NoZWNrID09PSBmYWxzZSkgeyBjb250aW51ZTsgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBuZXh0VGlsZVRvQ2hlY2sgPSB0aGlzLnRpbGVBcnJheVtuZXh0TW92ZVRvQ2hlY2sueF1bbmV4dE1vdmVUb0NoZWNrLnldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAobmV4dFRpbGVUb0NoZWNrLmRhbWFnZWQgPT09IHRydWUpIHsgY29udGludWU7IH1cbiAgICAgICAgICAgIGlmIChuZXh0VGlsZVRvQ2hlY2sudHlwZSA9PT0gXCJzcGFjZVwiKSB7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja1dhbGwodGhpcy5kaXJlY3Rpb25FbnVtW2RpcmVjdGlvbl0sIGN1cnJlbnRDb29yZCkgPT09IGZhbHNlKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAgICAgICAgIGlmKCh0eXBlb2YgcHJldmlvdXNDb29yZCA9PT0gJ3VuZGVmaW5lZCcpIHx8ICgodHlwZW9mIHByZXZpb3VzQ29vcmQgIT09ICd1bmRlZmluZWQnKSAmJiAoSlNPTi5zdHJpbmdpZnkobmV4dE1vdmVUb0NoZWNrKSAhPT0gSlNPTi5zdHJpbmdpZnkocHJldmlvdXNDb29yZCkpICkpIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aWxlIGlzIG9jY3VwaWVkXG4gICAgICAgICAgICAgICAgaWYgKG1vdmVzID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgaWYobmV4dFRpbGVUb0NoZWNrLm9jY3VwaWVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVnYWxNb3Zlcy5wdXNoKG5leHRNb3ZlVG9DaGVjayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5ID0gcmV0dXJuQXJyYXkuY29uY2F0KHRoaXMuZ2V0TGVnYWxNb3ZlcyhnYW1lUGllY2VUeXBlLCBtb3ZlcywgbmV4dE1vdmVUb0NoZWNrLCBjdXJyZW50Q29vcmQpKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpbmRleCBpbiByZXR1cm5BcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmV0dXJuQXJyYXlbaW5kZXhdLnggIT09IGN1cnJlbnRDb29yZC54IHx8IHJldHVybkFycmF5W2luZGV4XS55ICE9PSBjdXJyZW50Q29vcmQueSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdhbE1vdmVzLnB1c2gocmV0dXJuQXJyYXlbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVnYWxNb3ZlcztcbiAgICB9XG5cbiAgICBjaGVja1dhbGwoZGlyZWN0aW9uLCBjdXJyZW50Q29vcmRpbmF0ZSkge1xuICAgICAgICB0aGlzLndhbGxHcmlkID0gcmVxdWlyZSgnLi4vLi4vYXNzZXRzL3dhbGxHcmlkLmpzb24nKTtcblxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbil7XG4gICAgICAgICAgICBjYXNlIHRoaXMuZGlyZWN0aW9uRW51bS5OT1JUSDogLy8gVVBcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy53YWxsR3JpZC5ncmlkW2N1cnJlbnRDb29yZGluYXRlLnhdW2N1cnJlbnRDb29yZGluYXRlLnldJnRoaXMuZGlyZWN0aW9uRW51bS5OT1JUSCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5kaXJlY3Rpb25FbnVtLlNPVVRIOiAvLyBET1dOXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uU09VVEgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlIHRoaXMuZGlyZWN0aW9uRW51bS5FQVNUOiAvLyBSSUdIVFxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCh0aGlzLndhbGxHcmlkLmdyaWRbY3VycmVudENvb3JkaW5hdGUueF1bY3VycmVudENvb3JkaW5hdGUueV0mdGhpcy5kaXJlY3Rpb25FbnVtLkVBU1QpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBjYXNlIHRoaXMuZGlyZWN0aW9uRW51bS5XRVNUOiAvLyBMRUZUXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uV0VTVCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgXG4gICAgXG4gICAgZ2V0KGRhdGEpIHtcbiAgICAgICAgaWYodHlwZW9mKGRhdGEucHJvcGVydHkpID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3Jlc3BvbnNlJywge2RldGFpbHM6dGhpc1tkYXRhLnByb3BlcnR5XX0sIGRhdGEuc29ja2V0SUQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGVtaXQobXNnLCBkYXRhLCBzb2NrZXRJRCkge1xuXG4gICAgICAgIGlmKHR5cGVvZihzb2NrZXRJRCkgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5icm9hZGNhc3QobXNnLCBkYXRhKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW8uc29ja2V0cy5jb25uZWN0ZWRbc29ja2V0SURdLmVtaXQobXNnLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBicm9hZGNhc3QobXNnLCBkYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdChtc2csIGRhdGEsIHRoaXMucGxheWVyc0FycmF5W2ldLnNvY2tldElEKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzZXJ2ZXJGdWxsKHBsYXllcikge1xuICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3NlcnZlckZ1bGwnLCBkZXRhaWxzOiB7aWQ6IHBsYXllci5pZH19LCBwbGF5ZXIuc29ja2V0SUQpO1xuICAgIH1cbiAgICBcbn1cblxubW9kdWxlLmV4cG9ydHMuU2VwdGlrb24gPSBTZXB0aWtvbjtcbiIsImltcG9ydCBTZXB0aWtvbiBmcm9tICcuLi9wcmVmYWJzL3NlcHRpa29uJztcblxuY2xhc3MgQm9vdCBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHByZWxvYWQoKSB7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdwcmVsb2FkZXInLCAnYXNzZXRzL3ByZWxvYWRlci5naWYnKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmdhbWUuaW5wdXQubWF4UG9pbnRlcnMgPSAxO1xuICAgIHRoaXMuZ2FtZS50aW1lLmFkdmFuY2VkVGltaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmdhbWUuc2NhbGUucGFnZUFsaWduSG9yaXpvbnRhbGx5ID0gdHJ1ZTtcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5zY2FsZU1vZGUgPSBQaGFzZXIuU2NhbGVNYW5hZ2VyLlJFU0laRTtcbiAgICAvL3NldHVwIGRldmljZSBzY2FsaW5nXG4gICAgaWYgKCF0aGlzLmdhbWUuZGV2aWNlLmRlc2t0b3ApIHtcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5wYXJlbnRJc1dpbmRvdyA9IHRydWU7XG4gICAgICB0aGlzLmdhbWUuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5SRVNJWkU7XG4gICAgICB0aGlzLmdhbWUuc2NhbGUubWluV2lkdGggPSAgNDgwO1xuICAgICAgdGhpcy5nYW1lLnNjYWxlLm1pbkhlaWdodCA9IDI2MDtcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5mb3JjZU9yaWVudGF0aW9uKHRydWUpO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdEdsb2JhbFZhcmlhYmxlcygpO1xuICAgIFxuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgncHJlbG9hZGVyJyk7XG4gIH1cblxuICBpbml0R2xvYmFsVmFyaWFibGVzKCl7XG4gICAgdGhpcy5nYW1lLmdsb2JhbCA9IHtcbiAgICAgIHNjb3JlOiAwLFxuICAgICAgbGFzdERpY2VSb2xsOiAwLFxuICAgIH07XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCb290O1xuIiwiaW1wb3J0IERpY2UgZnJvbSAnLi4vcHJlZmFicy9kaWNlJztcbmltcG9ydCBDb25maXJtIGZyb20gJy4uL3ByZWZhYnMvY29uZmlybSc7XG5cbmNsYXNzIEdhbWUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgXG4gIGNyZWF0ZSgpIHtcbiAgXG4gICAgLy90aGlzLmdhbWUuaW5wdXQub25Eb3duLmFkZCh0aGlzLnRvZ2dsZUZ1bGxzY3JlZW4sIHRoaXMpO1xuICAgIHRoaXMuZ2FtZS5zdGFnZS5kaXNhYmxlVmlzaWJpbGl0eUNoYW5nZSA9IHRydWU7XG4gICAgXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XG4gICAgdGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xuICAgIHRoaXMuZ2FtZS5vcmRuYW5jZUdyb3VwID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xuICAgIHRoaXMuZ2FtZS5yZXNvdXJjZXNHcm91cCA9IHRoaXMuZ2FtZS5hZGQuZ3JvdXAoKTtcbiAgICB0aGlzLmdhbWUuaHVkR3JvdXAgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XG5cblxuICAgIHRoaXMuZ2FtZS5tb2RhbCA9IG5ldyBnYW1lTW9kYWwodGhpcy5nYW1lKTtcbiAgICB0aGlzLmNyZWF0ZU1vZGFscygpO1xuXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwwLCdiYWNrZ3JvdW5kJyk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kLmFuY2hvci5zZXRUbygwLjUsMC41KTtcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5jZW50ZXJYID0gdGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLmNlbnRlclggPSB0aGlzLmdhbWUub3JkbmFuY2VHcm91cC5jZW50ZXJYID0gdGhpcy5nYW1lLnJlc291cmNlc0dyb3VwLmNlbnRlclggPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWDtcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5jZW50ZXJZID0gdGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLmNlbnRlclkgPSB0aGlzLmdhbWUub3JkbmFuY2VHcm91cC5jZW50ZXJZID0gdGhpcy5nYW1lLnJlc291cmNlc0dyb3VwLmNlbnRlclkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWTtcblxuICAgIHRoaXMuZ2FtZS5odWRCZyA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwnaHVkLWJnJyk7XG5cbiAgICB0aGlzLmdhbWUuZGljZSA9IG5ldyBEaWNlKHRoaXMuZ2FtZSwgNTAsIDQwKTtcbiAgICB0aGlzLmdhbWUuZGljZS5zY2FsZS5zZXRUbygwLjI1KTtcbiAgICB0aGlzLmdhbWUuY29uZmlybSA9IG5ldyBDb25maXJtKHRoaXMuZ2FtZSwgNDAsODApO1xuICAgIHRoaXMuZ2FtZS5jb25maXJtLnNjYWxlLnNldFRvKDAuMjUpO1xuXG4gICAgdGhpcy5nYW1lLmFkZC5leGlzdGluZyh0aGlzLmdhbWUuZGljZSk7XG4gICAgdGhpcy5nYW1lLmFkZC5leGlzdGluZyh0aGlzLmdhbWUuY29uZmlybSk7XG4gICAgXG4gICAgdGhpcy5nYW1lLmh1ZEdyb3VwLmFkZCh0aGlzLmdhbWUuaHVkQmcpO1xuICAgIHRoaXMuZ2FtZS5odWRHcm91cC5hZGQodGhpcy5nYW1lLmRpY2UpO1xuICAgIHRoaXMuZ2FtZS5odWRHcm91cC5hZGQodGhpcy5nYW1lLmNvbmZpcm0pO1xuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFkZCh0aGlzLmJhY2tncm91bmQpO1xuXG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLmNyZWF0ZVRpbGVBcnJheSgzMSwgMjEsIHt4OjAtdGhpcy5iYWNrZ3JvdW5kLndpZHRoLzIsIHk6MC10aGlzLmJhY2tncm91bmQuaGVpZ2h0LzJ9KTtcblxuXG4gICAgdGhpcy5yZWZyZXNoQm9hcmQoKTtcblxuICB9XG5cblxuICBjcmVhdGVNb2RhbHMoKSB7XG4gICAgICB0aGlzLmdhbWUubW9kYWwuY3JlYXRlTW9kYWwoXG4gICAgICAgIHtcbiAgICAgICAgdHlwZTogXCJhc2tTdGFydFwiLFxuICAgICAgICBpbmNsdWRlQmFja2dyb3VuZDogZmFsc2UsXG4gICAgICAgIG1vZGFsQ2xvc2VPbklucHV0OiBmYWxzZSxcbiAgICAgICAgaXRlbXNBcnI6IFt7XG4gICAgICAgICAgICB0eXBlOiBcImdyYXBoaWNzXCIsXG4gICAgICAgICAgICBncmFwaGljQ29sb3I6IFwiMHhmZmZmZmZcIixcbiAgICAgICAgICAgIGdyYXBoaWNXaWR0aDogMzAwLFxuICAgICAgICAgICAgZ3JhcGhpY0hlaWdodDogMzAwLFxuICAgICAgICAgICAgZ3JhcGhpY1JhZGl1czogNDBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIkFyZSB5b3UgaGFwcHkgd2l0aFxcbiB0aGF0IGNsb25lIGxheW91dD9cIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTHVja2llc3QgR3V5XCIsXG4gICAgICAgICAgICBmb250U2l6ZTogMjIsXG4gICAgICAgICAgICBjb2xvcjogXCIweDFlMWUxZVwiLFxuICAgICAgICAgICAgb2Zmc2V0WTogLTUwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwidGV4dF95ZXNcIixcbiAgICAgICAgICAgIG9mZnNldFk6IDEwMCxcbiAgICAgICAgICAgIG9mZnNldFg6IC04MCxcbiAgICAgICAgICAgIGNvbnRlbnRTY2FsZTogMC42LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUubW9kYWwuaGlkZU1vZGFsKFwiYXNrU3RhcnRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OidzZXRQbGF5ZXJTdGF0ZScsIHZhbHVlOidzdGFydCd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiLFxuICAgICAgICAgICAgY29udGVudDogXCJ0ZXh0X25vXCIsXG4gICAgICAgICAgICBvZmZzZXRZOiAxMDAsXG4gICAgICAgICAgICBvZmZzZXRYOiA4MCxcbiAgICAgICAgICAgIGNvbnRlbnRTY2FsZTogMC42LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUubW9kYWwuaGlkZU1vZGFsKFwiYXNrU3RhcnRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIF1cbiAgICB9KTtcbiAgfVxuXG4gIHJlZnJlc2hCb2FyZCgpIHtcblxuICAgIHZhciBzY2FsZSA9IHdpbmRvdy5pbm5lcldpZHRoL3RoaXMuYmFja2dyb3VuZC5oZWlnaHQ7XG4gICAgaWYoc2NhbGUgPiAxLjkpIHtcbiAgICAgICAgc2NhbGUgPSAxLjk7XG4gICAgfVxuICAgIHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cC5zY2FsZS5zZXRUbyhzY2FsZSk7XG4gICAgdGhpcy5nYW1lLm9yZG5hbmNlR3JvdXAuc2NhbGUuc2V0VG8oc2NhbGUpO1xuICAgIHRoaXMuZ2FtZS5yZXNvdXJjZXNHcm91cC5zY2FsZS5zZXRUbyhzY2FsZSk7XG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuc2NhbGUuc2V0VG8oc2NhbGUpO1xuICAgIHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cC5zY2FsZSA9IHRoaXMuZ2FtZS5vcmRuYW5jZUdyb3VwLnNjYWxlID0gdGhpcy5nYW1lLnJlc291cmNlc0dyb3VwLnNjYWxlID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAuc2NhbGU7XG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAueCA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJYO1xuICAgIHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cC54ID0gdGhpcy5nYW1lLm9yZG5hbmNlR3JvdXAueCA9IHRoaXMuZ2FtZS5yZXNvdXJjZXNHcm91cC54ID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAueDtcbiAgICBcbiAgICBpZih0aGlzLmdhbWUuc2VwdGlrb24ucGxheWVyLmlkID09IDEpIHtcbiAgICAgICAgdGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLmFuZ2xlID0gdGhpcy5nYW1lLm9yZG5hbmNlR3JvdXAuYW5nbGUgPSB0aGlzLmdhbWUucmVzb3VyY2VzR3JvdXAuYW5nbGUgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSA9IC05MDsgXG4gICAgICAgIC8vdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZOyAvLyBDZW50ZXJlZCBvbiBTZXB0aWtvbiBMb2dvXG4gICAgICAgIC8vdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZICsgKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gb3Bwb25lbnQncyBzaWRlXG4gICAgICAgIHRoaXMuZ2FtZS5wZXJzb25uZWxHcm91cC55ID0gdGhpcy5nYW1lLm9yZG5hbmNlR3JvdXAueSA9IHRoaXMuZ2FtZS5yZXNvdXJjZXNHcm91cC55ID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZIC0gKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gdGhpcyBwbGF5ZXIncyBzaWRlXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLmFuZ2xlID0gdGhpcy5nYW1lLm9yZG5hbmNlR3JvdXAuYW5nbGUgPSB0aGlzLmdhbWUucmVzb3VyY2VzR3JvdXAuYW5nbGUgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSA9IDkwOyBcbiAgICAgICAgLy90aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclk7IC8vIENlbnRlcmVkIG9uIFNlcHRpa29uIExvZ29cbiAgICAgICAgLy90aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgKyAoKHRoaXMuYmFja2dyb3VuZC53aWR0aCpzY2FsZSktd2luZG93LmlubmVySGVpZ2h0KS8yOyAvLyBDZW50ZXJlZCBvbiBvcHBvbmVudCdzIHNpZGVcbiAgICAgICAgdGhpcy5nYW1lLnBlcnNvbm5lbEdyb3VwLnkgPSB0aGlzLmdhbWUub3JkbmFuY2VHcm91cC55ID0gdGhpcy5nYW1lLnJlc291cmNlc0dyb3VwLnkgPSB0aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgLSAoKHRoaXMuYmFja2dyb3VuZC53aWR0aCpzY2FsZSktd2luZG93LmlubmVySGVpZ2h0KS8yOyAvLyBDZW50ZXJlZCBvbiB0aGlzIHBsYXllcidzIHNpZGVcbiAgICB9XG5cbiAgfVxuXG4gIFxuICB1cGRhdGUoKSB7XG4gICAgLy8gICB0aGlzLmRpY2UuZnJhbWUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDE7XG4gICAgLy8gdGhpcy5nYW1lLmRlYnVnLnRleHQoJ01vdXNlJywgNzAwLCAzMik7XG4gICAgXG4gICAgLy8gdGhpcy5nYW1lLmRlYnVnLnRleHQoJ01vdXNlIFg6ICcgKyB0aGlzLmdhbWUuaW5wdXQueCwgNzAwLCA2NCk7XG4gICAgLy8gdGhpcy5nYW1lLmRlYnVnLnRleHQoJ01vdXNlIFk6ICcgKyB0aGlzLmdhbWUuaW5wdXQueSwgNzAwLCA5Mik7XG4gIH1cbiAgXG4gIHJlbmRlciAoKSB7XG4gICAgICB0aGlzLnJlZnJlc2hCb2FyZCgpO1xuICAgICAgLypcblxuICAgIHZhciB4ID0gMzI7XG4gICAgdmFyIHkgPSAwO1xuICAgIHZhciB5aSA9IDMyO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdWaWV3cG9ydCcsIHgsIHkgKz0geWkpO1xuXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ1ZpZXdwb3J0IFdpZHRoOiAnICsgdGhpcy5nYW1lLnNjYWxlLnZpZXdwb3J0V2lkdGgsIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd3aW5kb3cuaW5uZXJXaWR0aDogJyArIHdpbmRvdy5pbm5lcldpZHRoLCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93Lm91dGVyV2lkdGg6ICcgKyB3aW5kb3cub3V0ZXJXaWR0aCwgeCwgeSArPSB5aSk7XG5cbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnVmlld3BvcnQgSGVpZ2h0OiAnICsgdGhpcy5nYW1lLnNjYWxlLnZpZXdwb3J0SGVpZ2h0LCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93LmlubmVySGVpZ2h0OiAnICsgd2luZG93LmlubmVySGVpZ2h0LCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93Lm91dGVySGVpZ2h0OiAnICsgd2luZG93Lm91dGVySGVpZ2h0LCB4LCB5ICs9IHlpKTtcblxuICAgIC8vICBEZXZpY2U6IEhvdyB0byBnZXQgZGV2aWNlIHNpemUuXG5cbiAgICAvLyAgVXNlIHdpbmRvdy5zY3JlZW4ud2lkdGggZm9yIGRldmljZSB3aWR0aCBhbmQgd2luZG93LnNjcmVlbi5oZWlnaHQgZm9yIGRldmljZSBoZWlnaHQuIFxuICAgIC8vICAuYXZhaWxXaWR0aCBhbmQgLmF2YWlsSGVpZ2h0IGdpdmUgeW91IHRoZSBkZXZpY2Ugc2l6ZSBtaW51cyBVSSB0YXNrYmFycy4gKFRyeSBvbiBhbiBpUGhvbmUuKSBcbiAgICAvLyAgRGV2aWNlIHNpemUgaXMgc3RhdGljIGFuZCBkb2VzIG5vdCBjaGFuZ2Ugd2hlbiB0aGUgcGFnZSBpcyByZXNpemVkIG9yIHJvdGF0ZWQuXG5cbiAgICB4ID0gMzUwO1xuICAgIHkgPSAwO1xuXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ0JvYXJkIEdyb3VwJywgeCwgeSArPSB5aSk7XG5cbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5nYW1lLmJvYXJkR3JvdXAueDogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLngsIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC55OiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAueSwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoOiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGgsIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC5oZWlnaHQ6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC5oZWlnaHQsIHgsIHkgKz0geWkpO1xuXG4gICAgeCA9IDMyO1xuICAgIHkgPSAzMDA7XG5cbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnQmFja2dyb3VuZCBEZXRhaWwnLCB4LCB5ICs9IHlpKTtcblxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQueDogJyArIHRoaXMuYmFja2dyb3VuZC54LCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLnk6ICcgKyB0aGlzLmJhY2tncm91bmQueSwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC53aWR0aDogJyArIHRoaXMuYmFja2dyb3VuZC53aWR0aCwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC5oZWlnaHQ6ICcgKyB0aGlzLmJhY2tncm91bmQuaGVpZ2h0LCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLnNjYWxlOiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAuc2NhbGUueCwgeCwgeSArPSB5aSk7XG4gICAgKi9cbiAgICB9XG4gICAgXG4gIHRvZ2dsZUZ1bGxzY3JlZW4oKSB7XG4gICAgaWYodGhpcy5nYW1lLnNjYWxlLmlzRnVsbFNjcmVlbikge1xuICAgICAgICB0aGlzLmdhbWUuc2NhbGUuc3RvcEZ1bGxTY3JlZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdhbWUuc2NhbGUuc3RhcnRGdWxsU2NyZWVuKGZhbHNlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiIsImNsYXNzIE1lbnUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgLy9hZGQgYmFja2dyb3VuZCBpbWFnZVxuICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsMCwnYmFja2dyb3VuZCcpO1xuICAgIHRoaXMuYmdSYXRpbyA9IHRoaXMuYmFja2dyb3VuZC50ZXh0dXJlLndpZHRoIC8gdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUuaGVpZ2h0O1xuICAgIHRoaXMud29ybGRSYXRpbyA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aCAvIHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQ7XG4gICAgaWYgKCgodGhpcy53b3JsZFJhdGlvIC0gdGhpcy5iZ1JhdGlvKSAvIDIgKiB0aGlzLmdhbWUud29ybGQud2lkdGgpID4gMCkge1xuICAgICAgICB0aGlzLmJhY2tncm91bmQud2lkdGggPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0L3RoaXMuYmFja2dyb3VuZC50ZXh0dXJlLmhlaWdodCp0aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC54ID0gKHRoaXMuZ2FtZS53b3JsZC53aWR0aCAtIHRoaXMuYmFja2dyb3VuZC53aWR0aCkgLyAyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC53aWR0aCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCA9IHRoaXMuZ2FtZS53b3JsZC53aWR0aC90aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aCp0aGlzLmJhY2tncm91bmQudGV4dHVyZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC55ID0gKHRoaXMuZ2FtZS53b3JsZC5oZWlnaHQgLSB0aGlzLmJhY2tncm91bmQuaGVpZ2h0KSAvIDI7XG4gICAgfVxuXG4gICAgLy9hZGQgaW50cm8gdGV4dFxuICAgIHRoaXMuZ2FtZW92ZXJUZXh0ID0gdGhpcy5hZGQudGV4dCh0aGlzLmdhbWUud29ybGQuY2VudGVyWCx0aGlzLmdhbWUud29ybGQuY2VudGVyWSwgXCJTY29yZSA9IFwiK3RoaXMuZ2FtZS5nbG9iYWwuc2NvcmUsIHtcbiAgICAgIGZvbnQ6ICc0MnB4IEFyaWFsJywgZmlsbDogJyNmZmZmZmYnLCBhbGlnbjogJ2NlbnRlcidcbiAgICB9KTtcbiAgICB0aGlzLmdhbWVvdmVyVGV4dC5hbmNob3Iuc2V0KDAuNSk7XG5cbiAgICB0aGlzLmlucHV0Lm9uRG93bi5hZGQodGhpcy5vbklucHV0RG93biwgdGhpcyk7XG5cbiAgICAvL3ByZXZlbnQgYWNjaWRlbnRhbCBjbGljay10aHJ1IGJ5IG5vdCBhbGxvd2luZyBzdGF0ZSB0cmFuc2l0aW9uIGZvciBhIHNob3J0IHRpbWVcbiAgICB0aGlzLmNhbkNvbnRpbnVlVG9OZXh0U3RhdGUgPSBmYWxzZTtcbiAgICB0aGlzLmdhbWUudGltZS5ldmVudHMuYWRkKFBoYXNlci5UaW1lci5TRUNPTkQgKiAwLjUsIGZ1bmN0aW9uKCl7IHRoaXMuY2FuQ29udGludWVUb05leHRTdGF0ZSA9IHRydWU7IH0sIHRoaXMpO1xuXG4gICAgdGhpcy5zYXZlVmFyc1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgdGhpcy5yZXNldEdsb2JhbFZhcmlhYmxlcygpO1xuICB9XG5cbiAgc2F2ZVZhcnNUb0xvY2FsU3RvcmFnZSgpe1xuICAgIHZhciBtYXggPSBsb2NhbFN0b3JhZ2UubWF4U2NvcmUgfHwgMDsgLy9kZWZhdWx0IHZhbHVlIG9mIDAgaXMgaXQgZG9lcyBub3QgZXhpc3RcbiAgICBpZiAodGhpcy5nYW1lLmdsb2JhbC5zY29yZSA+IG1heCl7IGxvY2FsU3RvcmFnZS5tYXhTY29yZSA9IHRoaXMuZ2FtZS5nbG9iYWwuc2NvcmU7IH1cbiAgfVxuXG4gIHJlc2V0R2xvYmFsVmFyaWFibGVzKCl7XG4gICAgdGhpcy5nYW1lLmdsb2JhbC5zY29yZSA9IDA7XG4gIH1cbiAgdXBkYXRlKCkge31cblxuICBvbklucHV0RG93biAoKSB7XG4gICAgaWYodGhpcy5jYW5Db250aW51ZVRvTmV4dFN0YXRlKXtcbiAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnbWVudScpO1xuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iLCJjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5hc3NldCA9IG51bGw7XG4gICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICB9XG5cbiAgcHJlbG9hZCgpIHtcbiAgICAvL3NldHVwIGxvYWRpbmcgYmFyXG4gICAgdGhpcy5hc3NldCA9IHRoaXMuYWRkLnNwcml0ZSh0aGlzLmdhbWUud2lkdGggKiAwLjUgLSAxMTAsIHRoaXMuZ2FtZS5oZWlnaHQgKiAwLjUgLSAxMCwgJ3ByZWxvYWRlcicpO1xuICAgIHRoaXMubG9hZC5zZXRQcmVsb2FkU3ByaXRlKHRoaXMuYXNzZXQpO1xuICAgIFxuICAgIC8vU2V0dXAgbG9hZGluZyBhbmQgaXRzIGV2ZW50c1xuICAgIHRoaXMubG9hZC5vbkxvYWRDb21wbGV0ZS5hZGRPbmNlKHRoaXMub25Mb2FkQ29tcGxldGUsIHRoaXMpO1xuICAgIHRoaXMubG9hZFJlc291cmNlcygpO1xuICB9XG5cbiAgbG9hZFJlc291cmNlcygpIHtcbiAgICAgIFxuICAgIC8vTUVOVSBSRVNPVVJDRVNcbiAgICAvL21lbnUgYmFja2dyb3VuZFxuICAgIC8vdGV4dCBpbWFnZXNcbiAgICAvL211c2ljIGZpbGVzID9cbiAgICAvLyAgTG9hZCBmaWx0ZXIgc2NyaXB0c1xuICAgIC8vIHRoaXMuZ2FtZS5sb2FkLnNjcmlwdCgnZ3JheScsICdodHRwczovL2Nkbi5yYXdnaXQuY29tL3Bob3RvbnN0b3JtL3BoYXNlci9tYXN0ZXIvdjIvZmlsdGVycy9HcmF5LmpzJyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuc2NyaXB0KCdncmF5JywgJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vcGhvdG9uc3Rvcm0vcGhhc2VyLWNlL21hc3Rlci9maWx0ZXJzL0dyYXkuanMnKTtcblxuICAgIFxuICAgIC8vbG9hZCBnYW1lIGRhdGFcbiAgICB0aGlzLmdhbWUubG9hZC5qc29uKCd0aWxlRGV0YWlsJywgJ2Fzc2V0cy90aWxlRGV0YWlsLmpzb24nKTtcbiAgICB0aGlzLmdhbWUubG9hZC5qc29uKCd3YWxsR3JpZCcsICdhc3NldHMvd2FsbEdyaWQuanNvbicpO1xuICBcbiAgICAvL0dBTUUgUkVTT1VSQ0VTXG4gICAgLy9nYW1lIGJvYXJkIGJhY2tncm91bmRcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnYmFja2dyb3VuZCcsJ2Fzc2V0cy9tZWRpdW1fYm9hcmQucG5nJyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ2RpY2UnLCdhc3NldHMvZGljZS5wbmcnLCAxMjgsIDE5NCwgMTApO1xuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCdodWQtYmcnLCdhc3NldHMvaHVkLWJnLnBuZycpO1xuICAgIFxuICAgIC8vIG1vZGFsIGltYWdlc1xuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X3llcycsJ2Fzc2V0cy90ZXh0X3llcy5wbmcnKTtcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9ubycsJ2Fzc2V0cy90ZXh0X25vLnBuZycpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X2dvJywnYXNzZXRzL3RleHRfZ28ucG5nJyk7XG5cbiAgICAvL3BsYXllciB0b2tlbnMgc3ByaXRlc2hlZXRzXG4gICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ2Nsb25lJywgJ2Fzc2V0cy9jbG9uZS5wbmcnLCAxMTAsIDE2OCk7XG4gICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ29yZG5hbmNlJywgJ2Fzc2V0cy9vcmRuYW5jZS5wbmcnLDI2NCwgMjY0LCA3KTtcbiAgICB0aGlzLmdhbWUubG9hZC5hdGxhcygnYm9vbScsICdhc3NldHMvYm9vbS5wbmcnLCAnYXNzZXRzL2Jvb20uanNvbicsIFBoYXNlci5Mb2FkZXIuVEVYVFVSRV9BVExBU19KU09OX0hBU0gpO1xuXG4gICAgLy9hdWRpbyBmaWxlcyBcbiAgICBcbiAgICAvL3RoaXMuZ2FtZS5sb2FkLmltYWdlKCdjcm9zc2hhaXJzJywgJ2Fzc2V0cy9jcm9zc2hhaXJfcmVkX3NtYWxsLnBuZycpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X2dvJywgJ2Fzc2V0cy90ZXh0X2dvLnBuZycpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKCd0ZXh0X3JlYWR5JywgJ2Fzc2V0cy90ZXh0X3JlYWR5LnBuZycpO1xuXG4gICAgLy90aGlzLmdhbWUubG9hZC5zcHJpdGVzaGVldCgndGFyZ2V0JywgJ2Fzc2V0cy90YXJnZXQucG5nJywxMjguNjYsMTI4KTtcblxuICAgIC8vdGhpcy5nYW1lLmxvYWQuYXVkaW8oJ2d1bnNob3QnLCdhc3NldHMvZ3Vuc2hvdC53YXYnKTtcbiAgICAvL3RoaXMuZ2FtZS5sb2FkLmF1ZGlvKCdkaW5nJywnYXNzZXRzL2Rpbmcud2F2Jyk7XG4gIH1cblxuICBvbkxvYWRDb21wbGV0ZSgpIHtcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ3NldHVwJyk7XG4gICAgLy90aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ2dhbWUnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmVsb2FkZXI7XG4iLCJpbXBvcnQgU2VwdGlrb24gZnJvbSAnLi4vcHJlZmFicy9zZXB0aWtvbic7XG5cbmNsYXNzIFNlcnZlckZ1bGwgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgY29uc29sZS5sb2coXCJTZXJ2ZXIgaXMgZnVsbC4gVHJ5IGFnYWluIGxhdGVyLlwiKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2ZXJGdWxsO1xuIiwiY2xhc3MgU2V0dXAgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gfVxuICBcbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuZ2FtZS5uYW1lID0gXCJ1c2VyXCI7XG5cbiAgICB0aGlzLmdhbWUuc3RhZ2UuZGlzYWJsZVZpc2liaWxpdHlDaGFuZ2UgPSB0cnVlO1xuICAgIFxuICAgIC8vIHRoaXMuZ2FtZS5tb2RhbCA9IG5ldyBnYW1lTW9kYWwodGhpcy5nYW1lKTtcbiAgICAvLyB0aGlzLmNyZWF0ZU1vZGFscygpO1xuICAgIC8vIHRoaXMuZ2FtZS5tb2RhbC5zaG93TW9kYWwoJ3VzZXJuYW1lJyk7XG5cbiAgICAvLyB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkQ2FsbGJhY2tzKHRoaXMsIG51bGwsIG51bGwsIHRoaXMua2V5UHJlc3MpO1xuICAgIC8vIHRoaXMuYmtzcCA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleWJvYXJkLkJBQ0tTUEFDRSk7XG4gICAgLy8gdGhpcy5ia3NwLm9uRG93bi5hZGQodGhpcy5rZXlQcmVzcywgdGhpcyk7XG4gICAgLy8gdGhpcy5lbnRlciA9IHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLktleWJvYXJkLkVOVEVSKTtcbiAgICAvLyB0aGlzLmVudGVyLm9uRG93bi5hZGQodGhpcy5rZXlQcmVzcywgdGhpcyk7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5hc2tOZXdQbGF5ZXIoKTtcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ2dhbWUnKTtcbiAgICByZXR1cm47XG4gICAgLy90aGlzLmdhbWUuc2VwdGlrb24uc2V0dXAoKTtcbiAgICBcbn1cblxua2V5UHJlc3MoY2hhcikge1xuXG4gICAgaWYodHlwZW9mKGNoYXIpID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGlmIChjaGFyLmV2ZW50LmNvZGUgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhci5ldmVudC5jb2RlID09PSBcIkJhY2tzcGFjZVwiKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubmFtZSA9IHRoaXMuZ2FtZS5uYW1lLnN1YnN0cmluZygwLCB0aGlzLmdhbWUubmFtZS5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjaGFyID09IFwiIFwiKSB7XG4gICAgICAgICAgICBjaGFyID0gXCJfXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nYW1lLm5hbWUgKz0gY2hhcjtcbiAgICB9XG4gICAgdGhpcy5nYW1lLm1vZGFsLnVwZGF0ZU1vZGFsVmFsdWUodGhpcy5nYW1lLm5hbWUsICd1c2VybmFtZScsIDQpO1xufVxuICBcbiAgY3JlYXRlTW9kYWxzKCkge1xuICBcbiAgICAvLyBTdGFydCBHYW1lXG4gICAgdGhpcy5nYW1lLm1vZGFsLmNyZWF0ZU1vZGFsKFxuICAgICAgICB7XG4gICAgICAgIHR5cGU6IFwidXNlcm5hbWVcIixcbiAgICAgICAgaW5jbHVkZUJhY2tncm91bmQ6IHRydWUsXG4gICAgICAgIG1vZGFsQ2xvc2VPbklucHV0OiB0cnVlLFxuICAgICAgICBpdGVtc0FycjogW3tcbiAgICAgICAgICAgIHR5cGU6IFwiZ3JhcGhpY3NcIixcbiAgICAgICAgICAgIGdyYXBoaWNDb2xvcjogXCIweGZmZmZmZlwiLFxuICAgICAgICAgICAgZ3JhcGhpY1dpZHRoOiAzMDAsXG4gICAgICAgICAgICBncmFwaGljSGVpZ2h0OiAzMDAsXG4gICAgICAgICAgICBncmFwaGljUmFkaXVzOiA0MFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiVHlwZSBhIHVzZXJuYW1lLFxcbnRoZW4gaGl0IDxFTlRFUj5cXG5cXG4obWF4IG9mIDI1IGNoYXJhY3RlcnMpXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkx1Y2tpZXN0IEd1eVwiLFxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxuICAgICAgICAgICAgY29sb3I6IFwiMHgxZTFlMWVcIixcbiAgICAgICAgICAgIG9mZnNldFk6IC01MFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuZ2FtZS5uYW1lLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiAyMixcbiAgICAgICAgICAgIGNvbG9yOiBcIjB4MWUxZTFlXCIsXG4gICAgICAgICAgICBvZmZzZXRZOiA1MFxuICAgICAgICB9LCBdXG4gICAgfSk7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXR1cDtcbiJdfQ==
