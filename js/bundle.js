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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvdGlsZURldGFpbC5qc29uIiwiYXNzZXRzL3dhbGxHcmlkLmpzb24iLCJub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsInNyYy9tYWluLmpzIiwic3JjL21vZGFsLmpzIiwic3JjL3ByZWZhYnMvY2xpZW50LmpzIiwic3JjL3ByZWZhYnMvY2xvbmUuanMiLCJzcmMvcHJlZmFicy9jcm9zc2hhaXJzLmpzIiwic3JjL3ByZWZhYnMvZGljZS5qcyIsInNyYy9wcmVmYWJzL21hc3Rlci5qcyIsInNyYy9wcmVmYWJzL29yZG5hbmNlLmpzIiwic3JjL3ByZWZhYnMvcGVyc29ubmVsLmpzIiwic3JjL3ByZWZhYnMvcmVzb3VyY2VzLmpzIiwic3JjL3ByZWZhYnMvc2VwdGlrb24uanMiLCJzcmMvcHJlZmFicy90ZWFtLmpzIiwic3JjL3NlcnZlci9vcmRuYW5jZS5qcyIsInNyYy9zZXJ2ZXIvcGVyc29ubmVsLmpzIiwic3JjL3NlcnZlci9wbGF5ZXIuanMiLCJzcmMvc2VydmVyL3Jlc291cmNlLmpzIiwic3JjL3NlcnZlci9zZXB0aWtvbi5qcyIsInNyYy9zdGF0ZXMvYm9vdC5qcyIsInNyYy9zdGF0ZXMvZ2FtZS5qcyIsInNyYy9zdGF0ZXMvZ2FtZW92ZXIuanMiLCJzcmMvc3RhdGVzL3ByZWxvYWRlci5qcyIsInNyYy9zdGF0ZXMvc2VydmVyRnVsbC5qcyIsInNyYy9zdGF0ZXMvc2V0dXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdCQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFHLE9BQU8sT0FBUCxLQUFvQixXQUF2QixFQUFvQztBQUNoQyxRQUFH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QUNBLHNCQUFNLFVBRE47QUFFQSxtQ0FBbUIsSUFGbkI7QUFHQSxtQ0FBbUIsSUFIbkI7QUFJQSwwQkFBVSxDQUFDO0FBQ1AsMEJBQU0sVUFEQztBQUVQLGtDQUFjLFVBRlA7QUFHUCxrQ0FBYyxHQUhQO0FBSVAsbUNBQWUsR0FKUjtBQUtQLG1DQUFlO0FBTFIsaUJBQUQsRUFNUDtBQUNDLDBCQUFNLE1BRFA7QUFFQyw2QkFBUyw4REFGVjtBQUdDLGdDQUFZLGNBSGI7QUFJQyw4QkFBVSxFQUpYO0FBS0MsMkJBQU8sVUFMUjtBQU1DLDZCQUFTLENBQUM7QUFOWCxpQkFOTyxFQWFQO0FBQ0MsMEJBQU0sTUFEUDtBQUVDLDZCQUFTLEtBQUssSUFBTCxDQUFVLElBRnBCO0FBR0MsZ0NBQVksY0FIYjtBQUlDLDhCQUFVLEVBSlg7QUFLQywyQkFBTyxVQUxSO0FBTUMsNkJBQVM7QUFOVixpQkFiTztBQUpWLGFBREo7QUE0QkQ7Ozs7RUE1RWlCLE9BQU8sSzs7a0JBK0VaLEsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJtb2R1bGUuZXhwb3J0cz17XG5cdFwidGlsZVByb3BlcnR5QXJyYXlcIjoge1xuXHRcdFwib3RoZXJTcGFjZVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDAwXCIsXG5cdFx0XHRcInR5cGVcIjogXCJzcGFjZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwic3BhY2VcIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjksMFwiLCBcIjksMVwiLCBcIjksMlwiLCBcIjksM1wiLCBcIjksNFwiLCBcIjksNVwiLCBcIjksNlwiLCBcIjksN1wiLCBcIjksOFwiLCBcIjksOVwiLCBcIjksMTBcIiwgXCI5LDExXCIsIFwiOSwxMlwiLCBcIjksMTNcIiwgXCI5LDE0XCIsIFwiOSwxNVwiLCBcIjksMTZcIiwgXCI5LDE3XCIsIFwiOSwxOFwiLCBcIjksMTlcIiwgXCI5LDIwXCIsIFwiMTAsMFwiLCBcIjEwLDFcIiwgXCIxMCwyXCIsIFwiMTAsM1wiLCBcIjEwLDRcIiwgXCIxMCw1XCIsIFwiMTAsNlwiLCBcIjEwLDdcIiwgXCIxMCw4XCIsIFwiMTAsOVwiLCBcIjEwLDEwXCIsIFwiMTAsMTFcIiwgXCIxMCwxMlwiLCBcIjEwLDEzXCIsIFwiMTAsMTRcIiwgXCIxMCwxNVwiLCBcIjEwLDE2XCIsIFwiMTAsMTdcIiwgXCIxMCwxOFwiLCBcIjEwLDE5XCIsIFwiMTAsMjBcIiwgXCIxMSwwXCIsIFwiMTEsMVwiLCBcIjExLDJcIiwgXCIxMSwzXCIsIFwiMTEsNFwiLCBcIjExLDVcIiwgXCIxMSw2XCIsIFwiMTEsN1wiLCBcIjExLDhcIiwgXCIxMSw5XCIsIFwiMTEsMTBcIiwgXCIxMSwxMVwiLCBcIjExLDEyXCIsIFwiMTEsMTNcIiwgXCIxMSwxNFwiLCBcIjExLDE1XCIsIFwiMTEsMTZcIiwgXCIxMSwxN1wiLCBcIjExLDE4XCIsIFwiMTEsMTlcIiwgXCIxMSwyMFwiLCBcIjEyLDBcIiwgXCIxMiwxXCIsIFwiMTIsMlwiLCBcIjEyLDNcIiwgXCIxMiw0XCIsIFwiMTIsNVwiLCBcIjEyLDZcIiwgXCIxMiw3XCIsIFwiMTIsOFwiLCBcIjEyLDlcIiwgXCIxMiwxMFwiLCBcIjEyLDExXCIsIFwiMTIsMTJcIiwgXCIxMiwxM1wiLCBcIjEyLDE0XCIsIFwiMTIsMTVcIiwgXCIxMiwxNlwiLCBcIjEyLDE3XCIsIFwiMTIsMThcIiwgXCIxMiwxOVwiLCBcIjEyLDIwXCIsIFwiMTMsMFwiLCBcIjEzLDFcIiwgXCIxMywyXCIsIFwiMTMsM1wiLCBcIjEzLDRcIiwgXCIxMyw1XCIsIFwiMTMsNlwiLCBcIjEzLDdcIiwgXCIxMyw4XCIsIFwiMTMsOVwiLCBcIjEzLDEwXCIsIFwiMTMsMTFcIiwgXCIxMywxMlwiLCBcIjEzLDEzXCIsIFwiMTMsMTRcIiwgXCIxMywxNVwiLCBcIjEzLDE2XCIsIFwiMTMsMTdcIiwgXCIxMywxOFwiLCBcIjEzLDE5XCIsIFwiMTMsMjBcIiwgXCIxNCwwXCIsIFwiMTQsMVwiLCBcIjE0LDJcIiwgXCIxNCwzXCIsIFwiMTQsNFwiLCBcIjE0LDVcIiwgXCIxNCw2XCIsIFwiMTQsN1wiLCBcIjE0LDhcIiwgXCIxNCw5XCIsIFwiMTQsMTBcIiwgXCIxNCwxMVwiLCBcIjE0LDEyXCIsIFwiMTQsMTNcIiwgXCIxNCwxNFwiLCBcIjE0LDE1XCIsIFwiMTQsMTZcIiwgXCIxNCwxN1wiLCBcIjE0LDE4XCIsIFwiMTQsMTlcIiwgXCIxNCwyMFwiLCBcIjE1LDBcIiwgXCIxNSwxXCIsIFwiMTUsMlwiLCBcIjE1LDNcIiwgXCIxNSw0XCIsIFwiMTUsNVwiLCBcIjE1LDZcIiwgXCIxNSw3XCIsIFwiMTUsOFwiLCBcIjE1LDlcIiwgXCIxNSwxMFwiLCBcIjE1LDExXCIsIFwiMTUsMTJcIiwgXCIxNSwxM1wiLCBcIjE1LDE0XCIsIFwiMTUsMTVcIiwgXCIxNSwxNlwiLCBcIjE1LDE3XCIsIFwiMTUsMThcIiwgXCIxNSwxOVwiLCBcIjE1LDIwXCIsIFwiMTYsMFwiLCBcIjE2LDFcIiwgXCIxNiwyXCIsIFwiMTYsM1wiLCBcIjE2LDRcIiwgXCIxNiw1XCIsIFwiMTYsNlwiLCBcIjE2LDdcIiwgXCIxNiw4XCIsIFwiMTYsOVwiLCBcIjE2LDEwXCIsIFwiMTYsMTFcIiwgXCIxNiwxMlwiLCBcIjE2LDEzXCIsIFwiMTYsMTRcIiwgXCIxNiwxNVwiLCBcIjE2LDE2XCIsIFwiMTYsMTdcIiwgXCIxNiwxOFwiLCBcIjE2LDE5XCIsIFwiMTYsMjBcIiwgXCIxNywwXCIsIFwiMTcsMVwiLCBcIjE3LDJcIiwgXCIxNywzXCIsIFwiMTcsNFwiLCBcIjE3LDVcIiwgXCIxNyw2XCIsIFwiMTcsN1wiLCBcIjE3LDhcIiwgXCIxNyw5XCIsIFwiMTcsMTBcIiwgXCIxNywxMVwiLCBcIjE3LDEyXCIsIFwiMTcsMTNcIiwgXCIxNywxNFwiLCBcIjE3LDE1XCIsIFwiMTcsMTZcIiwgXCIxNywxN1wiLCBcIjE3LDE4XCIsIFwiMTcsMTlcIiwgXCIxNywyMFwiLCBcIjE4LDBcIiwgXCIxOCwxXCIsIFwiMTgsMlwiLCBcIjE4LDNcIiwgXCIxOCw0XCIsIFwiMTgsNVwiLCBcIjE4LDZcIiwgXCIxOCw3XCIsIFwiMTgsOFwiLCBcIjE4LDlcIiwgXCIxOCwxMFwiLCBcIjE4LDExXCIsIFwiMTgsMTJcIiwgXCIxOCwxM1wiLCBcIjE4LDE0XCIsIFwiMTgsMTVcIiwgXCIxOCwxNlwiLCBcIjE4LDE3XCIsIFwiMTgsMThcIiwgXCIxOCwxOVwiLCBcIjE4LDIwXCIsIFwiMTksMFwiLCBcIjE5LDFcIiwgXCIxOSwyXCIsIFwiMTksM1wiLCBcIjE5LDRcIiwgXCIxOSw1XCIsIFwiMTksNlwiLCBcIjE5LDdcIiwgXCIxOSw4XCIsIFwiMTksOVwiLCBcIjE5LDEwXCIsIFwiMTksMTFcIiwgXCIxOSwxMlwiLCBcIjE5LDEzXCIsIFwiMTksMTRcIiwgXCIxOSwxNVwiLCBcIjE5LDE2XCIsIFwiMTksMTdcIiwgXCIxOSwxOFwiLCBcIjE5LDE5XCIsIFwiMTksMjBcIiwgXCIyMCwwXCIsIFwiMjAsMVwiLCBcIjIwLDJcIiwgXCIyMCwzXCIsIFwiMjAsNFwiLCBcIjIwLDVcIiwgXCIyMCw2XCIsIFwiMjAsN1wiLCBcIjIwLDhcIiwgXCIyMCw5XCIsIFwiMjAsMTBcIiwgXCIyMCwxMVwiLCBcIjIwLDEyXCIsIFwiMjAsMTNcIiwgXCIyMCwxNFwiLCBcIjIwLDE1XCIsIFwiMjAsMTZcIiwgXCIyMCwxN1wiLCBcIjIwLDE4XCIsIFwiMjAsMTlcIiwgXCIyMCwyMFwiLCBcIjIxLDBcIiwgXCIyMSwxXCIsIFwiMjEsMlwiLCBcIjIxLDNcIiwgXCIyMSw0XCIsIFwiMjEsNVwiLCBcIjIxLDZcIiwgXCIyMSw3XCIsIFwiMjEsOFwiLCBcIjIxLDlcIiwgXCIyMSwxMFwiLCBcIjIxLDExXCIsIFwiMjEsMTJcIiwgXCIyMSwxM1wiLCBcIjIxLDE0XCIsIFwiMjEsMTVcIiwgXCIyMSwxNlwiLCBcIjIxLDE3XCIsIFwiMjEsMThcIiwgXCIyMSwxOVwiLCBcIjIxLDIwXCJdXG5cdFx0fSxcblx0XHRcImJhdHRsZVRoZXJtaXRlXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMDFcIixcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwidGhlcm1pdGVcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMl0sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXG5cdFx0XHRcdFwiYXJnc1wiOiBcInRoZXJtaXRlXCJcblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDIwXCIsIFwiNywxXCIsIFwiNyw3XCIsIFwiMjMsMTNcIiwgXCIyMywxOVwiLCBcIjI0LDBcIl1cblx0XHR9LFxuXHRcdFwiYmF0dGxlU2hpZWxkXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMDJcIixcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwic2hpZWxkXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJmaXJlXCIsXG5cdFx0XHRcdFwiYXJnc1wiOiBcInNoaWVsZFwiXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNiw2XCIsIFwiNiwxM1wiLCBcIjYsMTlcIiwgXCI3LDJcIiwgXCI3LDEyXCIsIFwiMjMsOFwiLCBcIjIzLDE4XCIsIFwiMjQsMVwiLCBcIjI0LDdcIiwgXCIyNCwxNFwiXVxuXHRcdH0sXG5cdFx0XCJiYXR0bGVCaW9kcm9uZVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDAzXCIsXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcblx0XHRcdFwibmFtZVwiOiBcImJpb2Ryb25lXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImJpb2Ryb25lXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcblx0XHRcdFx0XCJhcmdzXCI6IFwiYmlvZHJvbmVcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsNVwiLCBcIjcsM1wiLCBcIjcsMTVcIiwgXCIyMyw1XCIsIFwiMjMsMTdcIiwgXCIyNCwxNVwiXVxuXHRcdH0sXG5cdFx0XCJiYXR0bGVTYXRlbGxpdGVcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAwNFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJzYXRlbGxpdGVcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wibWV0YWxcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxuXHRcdFx0XHRcImFyZ3NcIjogXCJzYXRlbGxpdGVcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMFwiLCBcIjYsMTRcIiwgXCI3LDRcIiwgXCI3LDE3XCIsIFwiMjMsM1wiLCBcIjIzLDE2XCIsIFwiMjQsNlwiLCBcIjI0LDIwXCJdXG5cdFx0fSxcblx0XHRcImJhdHRsZUxhc2VyXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMDVcIixcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwibGFzZXJcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImZpcmVcIixcblx0XHRcdFx0XCJhcmdzXCI6IFwibGFzZXJcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsM1wiLCBcIjYsN1wiLCBcIjYsOFwiLCBcIjYsMTJcIiwgXCI2LDE2XCIsIFwiNyw1XCIsIFwiNyw2XCIsIFwiNyw5XCIsIFwiNywxOFwiLCBcIjcsMTlcIiwgXCIyMywxXCIsIFwiMjMsMlwiLCBcIjIzLDExXCIsIFwiMjMsMTRcIiwgXCIyMywxNVwiLCBcIjI0LDRcIiwgXCIyNCw4XCIsIFwiMjQsMTJcIiwgXCIyNCwxM1wiLCBcIjI0LDE3XCJdXG5cdFx0fSxcblx0XHRcImJhdHRsZVJlcGFpclwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDA2XCIsXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcblx0XHRcdFwibmFtZVwiOiBcInJlcGFpclwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJtZXRhbFwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJyZXBhaXJcIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogMVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMVwiLCBcIjYsMTBcIiwgXCI2LDE4XCIsIFwiNyw4XCIsIFwiNywxM1wiLCBcIjIzLDdcIiwgXCIyMywxMlwiLCBcIjI0LDJcIiwgXCIyNCwxMFwiLCBcIjI0LDE5XCJdXG5cdFx0fSxcblx0XHRcImJhdHRsZVJvY2tldFwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDA3XCIsXG5cdFx0XHRcInR5cGVcIjogXCJiYXR0bGVcIixcblx0XHRcdFwibmFtZVwiOiBcInJvY2tldFwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJyb2NrZXRcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzFdLFxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwiZmlyZVwiLFxuXHRcdFx0XHRcImFyZ3NcIjogXCJyb2NrZXRcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsNFwiLCBcIjYsMTFcIiwgXCI3LDEwXCIsIFwiNywxNlwiLCBcIjIzLDRcIiwgXCIyMywxMFwiLCBcIjI0LDlcIiwgXCIyNCwxNlwiXVxuXHRcdH0sXG5cdFx0XCJiYXR0bGVFc3Bpb25hZ2VcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAwOFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJlc3Bpb25hZ2VcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJvcHRpb25hbFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbM10sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJlc3Bpb25hZ2VcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMTVcIiwgXCI3LDExXCIsIFwiMjMsOVwiLCBcIjI0LDVcIl1cblx0XHR9LFxuXHRcdFwiYmF0dGxlVGFrZW92ZXJcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAwOVwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwiYmF0dGxlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJ0YWtlb3ZlclwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzJdLFxuXHRcdFx0XHRcImNhbGxiYWNrXCI6IFwidGFrZW92ZXJcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMTdcIiwgXCI3LDE0XCIsIFwiMjMsNlwiLCBcIjI0LDNcIl1cblx0XHR9LFxuXHRcdFwiYmF0dGxlUmVwYWlyVHdvXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMTBcIixcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwicmVwYWlyVHdvXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwib3B0aW9uYWxcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiLCBcIm94eWdlblwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMV0sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJyZXBhaXJcIixcblx0XHRcdFx0XCJhcmdzXCI6IDJcblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI2LDlcIiwgXCIyNCwxMVwiXVxuXHRcdH0sXG5cdFx0XCJiYXR0bGVDb3VudGVyRXNwaW9uYWdlXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMTFcIixcblx0XHRcdFwidHlwZVwiOiBcImJhdHRsZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiY291bnRlckVzcGlvbmFnZVwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcIm9wdGlvbmFsXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJiaW9tYXNzXCIsIFwib3h5Z2VuXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxXSxcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImNvdW50ZXJcIlxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjYsMlwiLCBcIjI0LDE4XCJdXG5cdFx0fSxcblx0XHRcIm90aGVyU3VyZmFjZVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDEyXCIsXG5cdFx0XHRcInR5cGVcIjogXCJzdXJmYWNlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJzdXJmYWNlXCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI4LDBcIiwgXCI4LDFcIiwgXCI4LDJcIiwgXCI4LDNcIiwgXCI4LDRcIiwgXCI4LDVcIiwgXCI4LDZcIiwgXCI4LDdcIiwgXCI4LDhcIiwgXCI4LDlcIiwgXCI4LDEwXCIsIFwiOCwxMVwiLCBcIjgsMTJcIiwgXCI4LDEzXCIsIFwiOCwxNFwiLCBcIjgsMTVcIiwgXCI4LDE2XCIsIFwiOCwxN1wiLCBcIjgsMThcIiwgXCI4LDE5XCIsIFwiOCwyMFwiLCBcIjIyLDBcIiwgXCIyMiwxXCIsIFwiMjIsMlwiLCBcIjIyLDNcIiwgXCIyMiw0XCIsIFwiMjIsNVwiLCBcIjIyLDZcIiwgXCIyMiw3XCIsIFwiMjIsOFwiLCBcIjIyLDlcIiwgXCIyMiwxMFwiLCBcIjIyLDExXCIsIFwiMjIsMTJcIiwgXCIyMiwxM1wiLCBcIjIyLDE0XCIsIFwiMjIsMTVcIiwgXCIyMiwxNlwiLCBcIjIyLDE3XCIsIFwiMjIsMThcIiwgXCIyMiwxOVwiLCBcIjIyLDIwXCJdXG5cdFx0fSxcblx0XHRcIm90aGVyTG9ja1wiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDEzXCIsXG5cdFx0XHRcInR5cGVcIjogXCJsb2NrXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJsb2NrXCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI3LDBcIiwgXCI1LDEwXCIsIFwiMSwxMFwiLCBcIjcsMjBcIiwgXCIyMywwXCIsIFwiMjMsMjBcIiwgXCIyNSwxMFwiLCBcIjI5LDEwXCJdXG5cdFx0fSxcblx0XHRcImFybW9yeURyaWxsXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMTRcIixcblx0XHRcdFwidHlwZVwiOiBcImFybW9yeVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiZHJpbGxcIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjQsMTBcIiwgXCIyNiwxMFwiXVxuXHRcdH0sXG5cdFx0XCJBcm1vcnlDYW5ub25cIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAxNVwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwiYXJtb3J5XCIsXG5cdFx0XHRcIm5hbWVcIjogXCJjYW5ub25cIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjMsMTBcIiwgXCIyNywxMFwiXVxuXHRcdH0sXG5cdFx0XCJhcm1vcnlFeHBsb3NpdmVzXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMTZcIixcblx0XHRcdFwidHlwZVwiOiBcImFybW9yeVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiZXhwbG9zaXZlc1wiLFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMiwxMFwiLCBcIjI4LDEwXCJdXG5cdFx0fSxcblx0XHRcInByb2R1Y3Rpb25MaWNoZW5cIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAxN1wiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwibGljaGVuXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJiaW9tYXNzXCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDBcIiwgXCIwLDEwXCIsIFwiMCwxN1wiLCBcIjEsMlwiLCBcIjEsOFwiLCBcIjEsMTZcIiwgXCIxLDIwXCIsIFwiMjksMFwiLCBcIjI5LDRcIiwgXCIyOSwxMlwiLCBcIjI5LDE4XCIsIFwiMzAsM1wiLCBcIjMwLDEwXCIsIFwiMzAsMjBcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvbkxpY2hlblR3b1wiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDE4XCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJsaWNoZW5Ud29cIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcImJpb21hc3NcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsyXVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsNFwiLCBcIjMwLDE2XCJdXG5cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvbkNoZW1pY2FsUmVhY3RvclwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDE5XCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJjaGVtaWNhbFJlYWN0b3JcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wib3h5Z2VuXCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIxLDFcIiwgXCIxLDlcIiwgXCIyOSwxOVwiLCBcIjI5LDExXCJdXG5cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvbkNoZW1pY2FsUmVhY3RvclR3b1wiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDIwXCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJjaGVtaWNhbFJlYWN0b3JUd29cIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiYmlvbWFzc1wiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1wib3h5Z2VuXCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMl1cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDVcIiwgXCIzMCwxNVwiXVxuXHRcdH0sXG5cdFx0XCJwcm9kdWN0aW9uQWlyRmlsdGVyXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMjFcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcImFpckZpbHRlclwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJveHlnZW5cIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcIm94eWdlblwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzNdXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxNVwiLCBcIjEsMTFcIiwgXCIyOSw5XCIsIFwiMzAsNVwiXVxuXHRcdH0sXG5cdFx0XCJwcm9kdWN0aW9uQmlvY29sbGVjdG9yXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMjJcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcImJpb2NvbGxlY3RvclwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJveHlnZW5cIiwgXCJiaW9tYXNzXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJiaW9kcm9uZVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzFdXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxNFwiLCBcIjAsMThcIiwgXCIxLDZcIiwgXCIxLDE3XCIsIFwiMzAsNlwiLCBcIjMwLDJcIiwgXCIyOSwxNFwiLCBcIjI5LDNcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvblVyYW5pdW1NaW5lXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMjNcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcInVyYW5pdW1NaW5lXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcIm94eWdlblwiLCBcImVuZXJneVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMSwgMV0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZFR5cGVcIjogW1widXJhbml1bVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzFdXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwyXCIsIFwiMCw2XCIsIFwiMSwzXCIsIFwiMzAsMThcIiwgXCIzMCwxNFwiLCBcIjI5LDE3XCJdXG5cdFx0fSxcblx0XHRcInByb2R1Y3Rpb25OdWNsZWFyUmVhY3RvclwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDI0XCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJudWNsZWFyUmVhY3RvclwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJ1cmFuaXVtXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJlbmVyZ3lcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFszXVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsOVwiLCBcIjAsMTZcIiwgXCIxLDdcIiwgXCIxLDE0XCIsIFwiMSwxOVwiLCBcIjMwLDExXCIsIFwiMzAsNFwiLCBcIjI5LDEzXCIsIFwiMjksNlwiLCBcIjI5LDFcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvblRoZXJtYWxHZW5lcmF0b3JcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAyNVwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwidGhlcm1hbEdlbmVyYXRvclwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJiaW9tYXNzXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJlbmVyZ3lcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsxXVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMTJcIiwgXCIzMCw4XCJdXG5cdFx0fSxcblx0XHRcInByb2R1Y3Rpb25Gb3VuZHJ5XCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMjZcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcImZvdW5kcnlcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJtZXRhbFwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkQ291bnRcIjogWzFdXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwzXCIsIFwiMCwxMVwiLCBcIjAsMTlcIiwgXCIxLDEzXCIsIFwiMzAsMTdcIiwgXCIzMCw5XCIsIFwiMzAsMVwiLCBcIjI5LDdcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvbkZvdW5kcnlUd29cIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAyN1wiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiZm91bmRyeVR3b1wiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJlbmVyZ3lcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0Q291bnRcIjogWzJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRUeXBlXCI6IFtcIm1ldGFsXCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMl1cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIxLDBcIiwgXCIyOSwyMFwiXVxuXHRcdH0sXG5cdFx0XCJwcm9kdWN0aW9uUm9ja2V0V29ya3Nob3BcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAyOFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwicm9ja2V0V29ya3Nob3BcIixcblx0XHRcdFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJyZXF1aXJlZFwiLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdFR5cGVcIjogW1wiZW5lcmd5XCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJyb2NrZXRcIl0sXG5cdFx0XHRcdFwicmVzb3VyY2VZaWVsZENvdW50XCI6IFsxXVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsMVwiLCBcIjAsN1wiLCBcIjEsNVwiLCBcIjEsMTJcIiwgXCIxLDE1XCIsIFwiMzAsMTlcIiwgXCIzMCwxM1wiLCBcIjI5LDE1XCIsIFwiMjksOFwiLCBcIjI5LDVcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvblNlbnNvckNhYmluXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMjlcIixcblx0XHRcdFwidHlwZVwiOiBcInByb2R1Y3Rpb25cIixcblx0XHRcdFwibmFtZVwiOiBcInNlbnNvckNhYmluXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJjYWxsYmFja1wiOiBcImtpbGxCaW9kcm9uZVwiXG5cdFx0XHR9LFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMCwxM1wiLCBcIjMwLDdcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvbk51Y2xlYXJBcm1vcnlcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAzMFwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwicHJvZHVjdGlvblwiLFxuXHRcdFx0XCJuYW1lXCI6IFwibnVjbGVhckFybW9yeVwiLFxuXHRcdFx0XCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiBcInJlcXVpcmVkXCIsXG5cdFx0XHRcdFwicmVzb3VyY2VDb3N0VHlwZVwiOiBbXCJveHlnZW5cIiwgXCJlbmVyZ3lcIiwgXCJ1cmFuaXVtXCJdLFxuXHRcdFx0XHRcInJlc291cmNlQ29zdENvdW50XCI6IFsxLCAxLCAxXSxcblx0XHRcdFx0XCJyZXNvdXJjZVlpZWxkVHlwZVwiOiBbXCJudWtlXCJdLFxuXHRcdFx0XHRcInJlc291cmNlWWllbGRDb3VudFwiOiBbMV1cblx0XHRcdH0sXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIwLDIwXCIsIFwiMSw0XCIsIFwiMSwxOFwiLCBcIjMwLDBcIiwgXCIyOSwxNlwiLCBcIjI5LDJcIl1cblx0XHR9LFxuXHRcdFwicHJvZHVjdGlvblJlcGFpclwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDMxXCIsXG5cdFx0XHRcInR5cGVcIjogXCJwcm9kdWN0aW9uXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJwcm9kUmVwYWlyXCIsXG5cdFx0XHRcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiYWN0aW9uXCI6IFwicmVxdWlyZWRcIixcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RUeXBlXCI6IFtcImVuZXJneVwiXSxcblx0XHRcdFx0XCJyZXNvdXJjZUNvc3RDb3VudFwiOiBbMV0sXG5cdFx0XHRcdFwiY2FsbGJhY2tcIjogXCJyZXBhaXJcIixcblx0XHRcdFx0XCJ0aWxlVGFyZ2V0SURcIjogMVxuXHRcdFx0fSxcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjAsOFwiLCBcIjMwLDEyXCJdXG5cdFx0fSxcblx0XHRcInJlc291cmNlT3h5Z2VuXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMzJcIixcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwib3h5Z2VuXCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI1LDBcIiwgXCI1LDFcIiwgXCI1LDJcIiwgXCI1LDNcIiwgXCI1LDRcIiwgXCI1LDVcIiwgXCI1LDZcIiwgXCI1LDdcIiwgXCI1LDhcIiwgXCI1LDlcIiwgXCIyNSwxMVwiLCBcIjI1LDEyXCIsIFwiMjUsMTNcIiwgXCIyNSwxNFwiLCBcIjI1LDE1XCIsIFwiMjUsMTZcIiwgXCIyNSwxN1wiLCBcIjI1LDE4XCIsIFwiMjUsMTlcIiwgXCIyNSwyMFwiXVxuXHRcdH0sXG5cdFx0XCJyZXNvdXJjZVJvY2tldFwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDMzXCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcblx0XHRcdFwibmFtZVwiOiBcInJvY2tldFwiLFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiNCwwXCIsIFwiNCwxXCIsIFwiNCwyXCIsIFwiNCwzXCIsIFwiNCw0XCIsIFwiNCw1XCIsIFwiNCw2XCIsIFwiNCw3XCIsIFwiNCw4XCIsIFwiNCw5XCIsIFwiMjYsMTFcIiwgXCIyNiwxMlwiLCBcIjI2LDEzXCIsIFwiMjYsMTRcIiwgXCIyNiwxNVwiLCBcIjI2LDE2XCIsIFwiMjYsMTdcIiwgXCIyNiwxOFwiLCBcIjI2LDE5XCIsIFwiMjYsMjBcIl1cblx0XHR9LFxuXHRcdFwicmVzb3VyY2VNZXRhbFwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDM0XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcblx0XHRcdFwibmFtZVwiOiBcIm1ldGFsXCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCIzLDBcIiwgXCIzLDFcIiwgXCIzLDJcIiwgXCIzLDNcIiwgXCIzLDRcIiwgXCIzLDVcIiwgXCIzLDZcIiwgXCIzLDdcIiwgXCIzLDhcIiwgXCIzLDlcIiwgXCIyNywxMVwiLCBcIjI3LDEyXCIsIFwiMjcsMTNcIiwgXCIyNywxNFwiLCBcIjI3LDE1XCIsIFwiMjcsMTZcIiwgXCIyNywxN1wiLCBcIjI3LDE4XCIsIFwiMjcsMTlcIiwgXCIyNywyMFwiXVxuXHRcdH0sXG5cdFx0XCJyZXNvdXJjZUVuZXJneVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDM1XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcblx0XHRcdFwibmFtZVwiOiBcImVuZXJneVwiLFxuXHRcdFx0XCJsb2NhdGlvbnNcIjogW1wiMiwwXCIsIFwiMiwxXCIsIFwiMiwyXCIsIFwiMiwzXCIsIFwiMiw0XCIsIFwiMiw1XCIsIFwiMiw2XCIsIFwiMiw3XCIsIFwiMiw4XCIsIFwiMiw5XCIsIFwiMiwxMVwiLCBcIjIsMTJcIiwgXCIyLDEzXCIsIFwiMiwxNFwiLCBcIjIsMTVcIiwgXCIyLDE2XCIsIFwiMiwxN1wiLCBcIjIsMThcIiwgXCIyLDE5XCIsIFwiMiwyMFwiLCBcIjI4LDBcIiwgXCIyOCwxXCIsIFwiMjgsMlwiLCBcIjI4LDNcIiwgXCIyOCw0XCIsIFwiMjgsNVwiLCBcIjI4LDZcIiwgXCIyOCw3XCIsIFwiMjgsOFwiLCBcIjI4LDlcIiwgXCIyOCwxMVwiLCBcIjI4LDEyXCIsIFwiMjgsMTNcIiwgXCIyOCwxNFwiLCBcIjI4LDE1XCIsIFwiMjgsMTZcIiwgXCIyOCwxN1wiLCBcIjI4LDE4XCIsIFwiMjgsMTlcIiwgXCIyOCwyMFwiXVxuXHRcdH0sXG5cdFx0XCJyZXNvdXJjZUJpb21hc3NcIjoge1xuXHRcdFx0XCJpZFwiOiBcIjAzNlwiLFxuXHRcdFx0XCJ0eXBlXCI6IFwid2FyZWhvdXNlXCIsXG5cdFx0XHRcIm5hbWVcIjogXCJiaW9tYXNzXCIsXG5cdFx0XHRcImxvY2F0aW9uc1wiOiBbXCI1LDExXCIsIFwiNSwxMlwiLCBcIjUsMTNcIiwgXCI1LDE0XCIsIFwiNSwxNVwiLCBcIjUsMTZcIiwgXCI1LDE3XCIsIFwiNSwxOFwiLCBcIjUsMTlcIiwgXCI1LDIwXCIsIFwiMjUsMFwiLCBcIjI1LDFcIiwgXCIyNSwyXCIsIFwiMjUsM1wiLCBcIjI1LDRcIiwgXCIyNSw1XCIsIFwiMjUsNlwiLCBcIjI1LDdcIiwgXCIyNSw4XCIsIFwiMjUsOVwiXVxuXHRcdH0sXG5cdFx0XCJyZXNvdXJjZUJpb2Ryb25lXCI6IHtcblx0XHRcdFwiaWRcIjogXCIwMzdcIixcblx0XHRcdFwidHlwZVwiOiBcIndhcmVob3VzZVwiLFxuXHRcdFx0XCJuYW1lXCI6IFwiYmlvZHJvbmVcIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjQsMTFcIiwgXCI0LDEyXCIsIFwiNCwxM1wiLCBcIjQsMTRcIiwgXCI0LDE1XCIsIFwiNCwxNlwiLCBcIjQsMTdcIiwgXCI0LDE4XCIsIFwiNCwxOVwiLCBcIjQsMjBcIiwgXCIyNiwwXCIsIFwiMjYsMVwiLCBcIjI2LDJcIiwgXCIyNiwzXCIsIFwiMjYsNFwiLCBcIjI2LDVcIiwgXCIyNiw2XCIsIFwiMjYsN1wiLCBcIjI2LDhcIiwgXCIyNiw5XCJdXG5cdFx0fSxcblx0XHRcInJlc291cmNlVXJhbml1bVwiOiB7XG5cdFx0XHRcImlkXCI6IFwiMDM4XCIsXG5cdFx0XHRcInR5cGVcIjogXCJ3YXJlaG91c2VcIixcblx0XHRcdFwibmFtZVwiOiBcInVyYW5pdW1cIixcblx0XHRcdFwibG9jYXRpb25zXCI6IFtcIjMsMTFcIiwgXCIzLDEyXCIsIFwiMywxM1wiLCBcIjMsMTRcIiwgXCIzLDE1XCIsIFwiMywxNlwiLCBcIjMsMTdcIiwgXCIzLDE4XCIsIFwiMywxOVwiLCBcIjMsMjBcIiwgXCIyNywwXCIsIFwiMjcsMVwiLCBcIjI3LDJcIiwgXCIyNywzXCIsIFwiMjcsNFwiLCBcIjI3LDVcIiwgXCIyNyw2XCIsIFwiMjcsN1wiLCBcIjI3LDhcIiwgXCIyNyw5XCJdXG5cdFx0fVxuXHR9XG59IiwibW9kdWxlLmV4cG9ydHM9e1xuXHRcImdyaWRcIjogW1xuXHRcdFs5LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTJdLFxuXHRcdFszLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA4LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA2XSxcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcblx0XHRbMTEsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDUsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDE0XSxcblx0XHRbOSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMiwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTJdLFxuXHRcdFsxLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNF0sXG5cdFx0WzMsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA2XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxuXHRcdFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA0XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxuXHRcdFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA0XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxuXHRcdFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA0XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDRdLFxuXHRcdFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA0XSxcblx0XHRbMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgNF0sXG5cdFx0WzEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDRdLFxuXHRcdFsxLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNF0sXG5cdFx0WzMsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDgsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDZdLFxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxuXHRcdFsxMSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgNSwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTRdLFxuXHRcdFs5LCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAyLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMl0sXG5cdFx0WzMsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCAxMCwgMTAsIDEwLCA2XVxuXHRdXG59IiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIC8vIGpvaW4gdXNlZCB0byBmaXggbWVtb3J5IGlzc3VlIGNhdXNlZCBieSBjb25jYXRlbmF0aW9uOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMTc1I2M0XG4gIHJldHVybiAoW2J0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sIFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV1dKS5qb2luKCcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0b1xuLy8gaW1wbGVtZW50YXRpb24uIEFsc28sIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byBvbiBJRTExLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcblxuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgKytpaSkge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHY0O1xuIiwiaW1wb3J0IENsaWVudCBmcm9tICcuL3ByZWZhYnMvY2xpZW50JztcbmltcG9ydCBCb290IGZyb20gJy4vc3RhdGVzL2Jvb3QnO1xuaW1wb3J0IEdhbWUgZnJvbSAnLi9zdGF0ZXMvZ2FtZSc7XG5pbXBvcnQgU2V0dXAgZnJvbSAnLi9zdGF0ZXMvc2V0dXAnO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICcuL3N0YXRlcy9wcmVsb2FkZXInO1xuaW1wb3J0IEdhbWVvdmVyIGZyb20gJy4vc3RhdGVzL2dhbWVvdmVyJztcbmltcG9ydCBTZXJ2ZXJGdWxsIGZyb20gJy4vc3RhdGVzL3NlcnZlckZ1bGwnO1xuaW1wb3J0IFNlcHRpa29uIGZyb20gJy4vcHJlZmFicy9zZXB0aWtvbic7XG5cbmlmKHR5cGVvZihTdG9yYWdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXB0VVVJRCcpICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHV1aWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VwdFVVSUQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB1dWlkID0gcmVxdWlyZSgndXVpZC92NCcpKCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXB0VVVJRCcsIHV1aWQpO1xuICAgIH1cbn0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihcIkxvY2FsIFN0b3JhZ2UgaXMgcmVxdWlyZWQhXCIpO1xufVxuXG4vLyBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQsIFBoYXNlci5BVVRPLCAncGhhc2VyLXRlc3QtZ2FtZScpO1xuY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShcIjEwMFwiLCBcIjEwMFwiLCBQaGFzZXIuQVVUTyk7XG5nYW1lLnNlcHRpa29uID0gbmV3IFNlcHRpa29uKGdhbWUpO1xuZ2FtZS5jbGllbnQgPSBuZXcgQ2xpZW50KGdhbWUuc2VwdGlrb24pO1xuXG5nYW1lLnN0YXRlLmFkZCgnYm9vdCcsIG5ldyBCb290KCkpO1xuZ2FtZS5zdGF0ZS5hZGQoJ2dhbWUnLCBuZXcgR2FtZSgpKTtcbmdhbWUuc3RhdGUuYWRkKCdzZXR1cCcsIG5ldyBTZXR1cCgpKTtcbmdhbWUuc3RhdGUuYWRkKCdwcmVsb2FkZXInLCBuZXcgUHJlbG9hZGVyKCkpO1xuZ2FtZS5zdGF0ZS5hZGQoJ2dhbWVvdmVyJywgbmV3IEdhbWVvdmVyKCkpO1xuZ2FtZS5zdGF0ZS5hZGQoJ3NlcnZlckZ1bGwnLCBuZXcgU2VydmVyRnVsbCgpKTtcblxuZ2FtZS5zdGF0ZS5zdGFydCgnYm9vdCcpO1xuIiwidmFyIGdhbWVNb2RhbCA9IGdhbWVNb2RhbCB8fCB7fTtcblxuXG5nYW1lTW9kYWwgPSBmdW5jdGlvbiAoZ2FtZSkge1xuXG5cdHZhciBfdGhpcyA9IHRoaXM7XG5cdGdhbWUubW9kYWxzID0ge307XG5cblx0LyoqXG5cdCAqIFtoaWRlTW9kYWwgZGVzY3JpcHRpb25dXG5cdCAqIEBwYXJhbSAge1t0eXBlXX0gdHlwZSBbZGVzY3JpcHRpb25dXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gICAgICBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHR0aGlzLmhpZGVNb2RhbCA9IGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0d2luZG93LmNvbnNvbGUubG9nKHR5cGUpO1xuXHRcdGdhbWUubW9kYWxzW3R5cGVdLnZpc2libGUgPSBmYWxzZTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGNyZWF0ZU1vZGFsOiBmdW5jdGlvbiAob3B0aW9ucykge1xuXHRcdFx0dmFyIHR5cGUgPSBvcHRpb25zLnR5cGUgfHwgJyc7IC8vIG11c3QgYmUgdW5pcXVlXG5cdFx0XHR2YXIgaW5jbHVkZUJhY2tncm91bmQgPSBvcHRpb25zLmluY2x1ZGVCYWNrZ3JvdW5kOyAvLyBtYXliZSBub3Qgb3B0aW9uYWxcblx0XHRcdHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvciB8fCBcIjB4MDAwMDAwXCI7XG5cdFx0XHR2YXIgYmFja2dyb3VuZE9wYWNpdHkgPSBvcHRpb25zLmJhY2tncm91bmRPcGFjaXR5ID09PSB1bmRlZmluZWQgP1xuXHRcdFx0XHQwLjcgOiBvcHRpb25zLmJhY2tncm91bmRPcGFjaXR5O1xuXHRcdFx0dmFyIG1vZGFsQ2xvc2VPbklucHV0ID0gb3B0aW9ucy5tb2RhbENsb3NlT25JbnB1dCB8fCBmYWxzZTtcblx0XHRcdHZhciBtb2RhbEJhY2tncm91bmRDYWxsYmFjayA9IG9wdGlvbnMubW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2sgfHwgZmFsc2U7XG5cdFx0XHR2YXIgdkNlbnRlciA9IG9wdGlvbnMudkNlbnRlciB8fCB0cnVlO1xuXHRcdFx0dmFyIGhDZW50ZXIgPSBvcHRpb25zLmhDZW50ZXIgfHwgdHJ1ZTtcblx0XHRcdHZhciBpdGVtc0FyciA9IG9wdGlvbnMuaXRlbXNBcnIgfHwgW107XG5cdFx0XHR2YXIgZml4ZWRUb0NhbWVyYSA9IG9wdGlvbnMuZml4ZWRUb0NhbWVyYSB8fCBmYWxzZTtcblxuXHRcdFx0dmFyIG1vZGFsO1xuXHRcdFx0dmFyIGlubmVyTW9kYWw7XG5cdFx0XHR2YXIgbW9kYWxHcm91cCA9IGdhbWUuYWRkLmdyb3VwKCk7XG5cdFx0XHRpZiAoZml4ZWRUb0NhbWVyYSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRtb2RhbEdyb3VwLmZpeGVkVG9DYW1lcmEgPSB0cnVlO1xuXHRcdFx0XHRtb2RhbEdyb3VwLmNhbWVyYU9mZnNldC54ID0gMDtcblx0XHRcdFx0bW9kYWxHcm91cC5jYW1lcmFPZmZzZXQueSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpbmNsdWRlQmFja2dyb3VuZCA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRtb2RhbCA9IGdhbWUuYWRkLmdyYXBoaWNzKGdhbWUud2lkdGgsIGdhbWUuaGVpZ2h0KTtcblx0XHRcdFx0bW9kYWwuYmVnaW5GaWxsKGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZE9wYWNpdHkpO1xuXHRcdFx0XHRtb2RhbC54ID0gMDtcblx0XHRcdFx0bW9kYWwueSA9IDA7XG5cblx0XHRcdFx0bW9kYWwuZHJhd1JlY3QoMCwgMCwgZ2FtZS53aWR0aCwgZ2FtZS5oZWlnaHQpO1xuXG5cdFx0XHRcdGlmIChtb2RhbENsb3NlT25JbnB1dCA9PT0gdHJ1ZSkge1xuXG5cdFx0XHRcdFx0aW5uZXJNb2RhbCA9IGdhbWUuYWRkLnNwcml0ZSgwLCAwKTtcblx0XHRcdFx0XHRpbm5lck1vZGFsLmlucHV0RW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0aW5uZXJNb2RhbC53aWR0aCA9IGdhbWUud2lkdGg7XG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5oZWlnaHQgPSBnYW1lLmhlaWdodDtcblx0XHRcdFx0XHRpbm5lck1vZGFsLnR5cGUgPSB0eXBlO1xuXHRcdFx0XHRcdGlubmVyTW9kYWwuaW5wdXQucHJpb3JpdHlJRCA9IDA7XG5cdFx0XHRcdFx0aW5uZXJNb2RhbC5ldmVudHMub25JbnB1dERvd24uYWRkKGZ1bmN0aW9uIChlLCBwb2ludGVyKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmhpZGVNb2RhbChlLnR5cGUpO1xuXHRcdFx0XHRcdH0sIF90aGlzLCAyKTtcblxuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKGlubmVyTW9kYWwpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0bW9kYWxCYWNrZ3JvdW5kQ2FsbGJhY2sgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChtb2RhbEJhY2tncm91bmRDYWxsYmFjaykge1xuXHRcdFx0XHRpbm5lck1vZGFsID0gZ2FtZS5hZGQuc3ByaXRlKDAsIDApO1xuXHRcdFx0XHRpbm5lck1vZGFsLmlucHV0RW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdGlubmVyTW9kYWwud2lkdGggPSBnYW1lLndpZHRoO1xuXHRcdFx0XHRpbm5lck1vZGFsLmhlaWdodCA9IGdhbWUuaGVpZ2h0O1xuXHRcdFx0XHRpbm5lck1vZGFsLnR5cGUgPSB0eXBlO1xuXHRcdFx0XHRpbm5lck1vZGFsLmlucHV0LnByaW9yaXR5SUQgPSAwO1xuXG5cdFx0XHRcdG1vZGFsR3JvdXAuYWRkKGlubmVyTW9kYWwpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaW5jbHVkZUJhY2tncm91bmQpIHtcblx0XHRcdFx0bW9kYWxHcm91cC5hZGQobW9kYWwpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbW9kYWxMYWJlbDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXNBcnIubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdFx0dmFyIGl0ZW0gPSBpdGVtc0FycltpXTtcblx0XHRcdFx0dmFyIGl0ZW1UeXBlID0gaXRlbS50eXBlIHx8ICd0ZXh0Jztcblx0XHRcdFx0dmFyIGl0ZW1Db2xvciA9IGl0ZW0uY29sb3IgfHwgMHgwMDAwMDA7XG5cdFx0XHRcdHZhciBpdGVtRm9udGZhbWlseSA9IGl0ZW0uZm9udEZhbWlseSB8fCAnQXJpYWwnO1xuXHRcdFx0XHR2YXIgaXRlbUZvbnRTaXplID0gaXRlbS5mb250U2l6ZSB8fCAzMjtcblx0XHRcdFx0dmFyIGl0ZW1TdHJva2UgPSBpdGVtLnN0cm9rZSB8fCAnMHgwMDAwMDAnO1xuXHRcdFx0XHR2YXIgaXRlbVN0cm9rZVRoaWNrbmVzcyA9IGl0ZW0uc3Ryb2tlVGhpY2tuZXNzIHx8IDA7XG5cdFx0XHRcdHZhciBpdGVtQWxpZ24gPSBpdGVtLmFsaWduIHx8ICdjZW50ZXInO1xuXHRcdFx0XHR2YXIgb2Zmc2V0WCA9IGl0ZW0ub2Zmc2V0WCB8fCAwO1xuXHRcdFx0XHR2YXIgb2Zmc2V0WSA9IGl0ZW0ub2Zmc2V0WSB8fCAwO1xuXHRcdFx0XHR2YXIgY29udGVudFNjYWxlID0gaXRlbS5jb250ZW50U2NhbGUgfHwgMTtcblx0XHRcdFx0dmFyIGNvbnRlbnQgPSBpdGVtLmNvbnRlbnQgfHwgXCJcIjtcblx0XHRcdFx0dmFyIGNlbnRlclggPSBnYW1lLndpZHRoIC8gMjtcblx0XHRcdFx0dmFyIGNlbnRlclkgPSBnYW1lLmhlaWdodCAvIDI7XG5cdFx0XHRcdHZhciBjYWxsYmFjayA9IGl0ZW0uY2FsbGJhY2sgfHwgZmFsc2U7XG5cdFx0XHRcdHZhciB0ZXh0QWxpZ24gPSBpdGVtLnRleHRBbGlnbiB8fCBcImxlZnRcIjtcblx0XHRcdFx0dmFyIGF0bGFzUGFyZW50ID0gaXRlbS5hdGxhc1BhcmVudCB8fCBcIlwiO1xuXHRcdFx0XHR2YXIgYnV0dG9uSG92ZXIgPSBpdGVtLmJ1dHRvbkhvdmVyIHx8IGNvbnRlbnQ7XG5cdFx0XHRcdHZhciBidXR0b25BY3RpdmUgPSBpdGVtLmJ1dHRvbkFjdGl2ZSB8fCBjb250ZW50O1xuXHRcdFx0XHR2YXIgZ3JhcGhpY0NvbG9yID0gaXRlbS5ncmFwaGljQ29sb3IgfHwgMHhmZmZmZmY7XG5cdFx0XHRcdHZhciBncmFwaGljT3BhY2l0eSA9IGl0ZW0uZ3JhcGhpY09wYWNpdHkgfHwgMTtcblx0XHRcdFx0dmFyIGdyYXBoaWNXID0gaXRlbS5ncmFwaGljV2lkdGggfHwgMjAwO1xuXHRcdFx0XHR2YXIgZ3JhcGhpY0ggPSBpdGVtLmdyYXBoaWNIZWlnaHQgfHwgMjAwO1xuXHRcdFx0XHR2YXIgZ3JhcGhpY1JhZGl1cyA9IGl0ZW0uZ3JhcGhpY1JhZGl1cyB8fCAwO1xuXHRcdFx0XHR2YXIgbG9ja1Bvc2l0aW9uID0gaXRlbS5sb2NrUG9zaXRpb24gfHwgZmFsc2U7XG5cblx0XHRcdFx0dmFyIGl0ZW1BbmNob3IgPSBpdGVtLmFuY2hvciB8fCB7eDowLHk6MH07XG5cdFx0XHRcdHZhciBpdGVtQW5nbGUgPSBpdGVtLmFuZ2xlIHx8IDA7XG5cdFx0XHRcdHZhciBpdGVtWCA9IGl0ZW0ueCB8fCAwO1xuXHRcdFx0XHR2YXIgaXRlbVkgPSBpdGVtLnkgfHwgMDtcblx0XHRcdFx0dmFyIGltYWdlRnJhbWUgPSBpdGVtLmZyYW1lIHx8IG51bGw7XG5cdFx0XHRcdHZhciB0aWxlU3ByaXRlV2lkdGggPSBpdGVtLnRpbGVTcHJpdGVXaWR0aCB8fCBnYW1lLndpZHRoO1xuXHRcdFx0XHR2YXIgdGlsZVNwcml0ZUhlaWdodCA9IGl0ZW0udGlsZVNwcml0ZUhlaWdodCB8fCBnYW1lLmhlaWdodDtcblxuXHRcdFx0XHRtb2RhbExhYmVsID0gbnVsbDtcblxuXHRcdFx0XHRpZiAoaXRlbVR5cGUgPT09IFwidGV4dFwiIHx8IGl0ZW1UeXBlID09PSBcImJpdG1hcFRleHRcIikge1xuXG5cdFx0XHRcdFx0aWYgKGl0ZW1UeXBlID09PSBcInRleHRcIikge1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnRleHQoMCwgMCwgY29udGVudCwge1xuXHRcdFx0XHRcdFx0XHRmb250OiBpdGVtRm9udFNpemUgKyAncHggJyArIGl0ZW1Gb250ZmFtaWx5LFxuXHRcdFx0XHRcdFx0XHRmaWxsOiBcIiNcIiArIFN0cmluZyhpdGVtQ29sb3IpLnJlcGxhY2UoXCIweFwiLCBcIlwiKSxcblx0XHRcdFx0XHRcdFx0c3Ryb2tlOiBcIiNcIiArIFN0cmluZyhpdGVtU3Ryb2tlKS5yZXBsYWNlKFwiMHhcIiwgXCJcIiksXG5cdFx0XHRcdFx0XHRcdHN0cm9rZVRoaWNrbmVzczogaXRlbVN0cm9rZVRoaWNrbmVzcyxcblx0XHRcdFx0XHRcdFx0YWxpZ246IGl0ZW1BbGlnblxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ3RleHQnO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC51cGRhdGUoKTtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9ICgoZ2FtZS53aWR0aCAvIDIpIC0gKG1vZGFsTGFiZWwud2lkdGggLyAyKSkgKyBvZmZzZXRYO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKChnYW1lLmhlaWdodCAvIDIpIC0gKG1vZGFsTGFiZWwuaGVpZ2h0IC8gMikpICsgb2Zmc2V0WTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmJpdG1hcFRleHQoMCwgMCwgaXRlbUZvbnRmYW1pbHksIFN0cmluZyhjb250ZW50KSwgaXRlbUZvbnRTaXplKTtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnYml0bWFwVGV4dCc7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLmFsaWduID0gdGV4dEFsaWduO1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC51cGRhdGVUZXh0KCk7XG5cdFx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtIChtb2RhbExhYmVsLndpZHRoIC8gMikpICsgb2Zmc2V0WDtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKG1vZGFsTGFiZWwuaGVpZ2h0IC8gMikpICsgb2Zmc2V0WTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIGlmIChpdGVtVHlwZSA9PT0gXCJpbWFnZVwiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLmltYWdlKDAsIDAsIGNvbnRlbnQpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnaW1hZ2UnO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwidGlsZVNwcml0ZVwiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnRpbGVTcHJpdGUoaXRlbVgsIGl0ZW1ZLFxuXHRcdFx0XHRcdFx0dGlsZVNwcml0ZVdpZHRoLCB0aWxlU3ByaXRlSGVpZ2h0LCBjb250ZW50LCBpbWFnZUZyYW1lKTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnNjYWxlLnNldFRvKGNvbnRlbnRTY2FsZSwgY29udGVudFNjYWxlKTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmFuY2hvci5zZXRUbyhpdGVtQW5jaG9yLngsIGl0ZW1BbmNob3IueSk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5hbmdsZSA9IGl0ZW1BbmdsZTtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmNvbnRlbnRUeXBlID0gJ3RpbGVTcHJpdGUnO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGl0ZW1UeXBlID09PSBcInNwcml0ZVwiKSB7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbCA9IGdhbWUuYWRkLnNwcml0ZSgwLCAwLCBhdGxhc1BhcmVudCwgY29udGVudCk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5zY2FsZS5zZXRUbyhjb250ZW50U2NhbGUsIGNvbnRlbnRTY2FsZSk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5jb250ZW50VHlwZSA9ICdzcHJpdGUnO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueCA9IChjZW50ZXJYIC0gKChtb2RhbExhYmVsLndpZHRoKSAvIDIpKSArIG9mZnNldFg7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC55ID0gKGNlbnRlclkgLSAoKG1vZGFsTGFiZWwuaGVpZ2h0KSAvIDIpKSArIG9mZnNldFk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiYnV0dG9uXCIpIHtcblx0XHRcdFx0XHRtb2RhbExhYmVsID0gZ2FtZS5hZGQuYnV0dG9uKDAsIDAsIGF0bGFzUGFyZW50LCBjYWxsYmFjayxcblx0XHRcdFx0XHRcdHRoaXMsIGJ1dHRvbkhvdmVyLCBjb250ZW50LCBidXR0b25BY3RpdmUsIGNvbnRlbnQpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuc2NhbGUuc2V0VG8oY29udGVudFNjYWxlLCBjb250ZW50U2NhbGUpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuY29udGVudFR5cGUgPSAnYnV0dG9uJztcblx0XHRcdFx0XHRtb2RhbExhYmVsLnggPSAoY2VudGVyWCAtICgobW9kYWxMYWJlbC53aWR0aCkgLyAyKSkgKyBvZmZzZXRYO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwueSA9IChjZW50ZXJZIC0gKChtb2RhbExhYmVsLmhlaWdodCkgLyAyKSkgKyBvZmZzZXRZO1xuXG5cdFx0XHRcdH0gZWxzZSBpZiAoaXRlbVR5cGUgPT09IFwiZ3JhcGhpY3NcIikge1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwgPSBnYW1lLmFkZC5ncmFwaGljcyhncmFwaGljVywgZ3JhcGhpY0gpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYmVnaW5GaWxsKGdyYXBoaWNDb2xvciwgZ3JhcGhpY09wYWNpdHkpO1xuXHRcdFx0XHRcdGlmIChncmFwaGljUmFkaXVzIDw9IDApIHtcblx0XHRcdFx0XHRcdG1vZGFsTGFiZWwuZHJhd1JlY3QoMCwgMCwgZ3JhcGhpY1csIGdyYXBoaWNIKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bW9kYWxMYWJlbC5kcmF3Um91bmRlZFJlY3QoMCwgMCwgZ3JhcGhpY1csIGdyYXBoaWNILCBncmFwaGljUmFkaXVzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5lbmRGaWxsKCk7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC54ID0gKGNlbnRlclggLSAoKG1vZGFsTGFiZWwud2lkdGgpIC8gMikpICsgb2Zmc2V0WDtcblx0XHRcdFx0XHRtb2RhbExhYmVsLnkgPSAoY2VudGVyWSAtICgobW9kYWxMYWJlbC5oZWlnaHQpIC8gMikpICsgb2Zmc2V0WTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFggPSAwO1xuXHRcdFx0XHRtb2RhbExhYmVsLl9vZmZzZXRZID0gMDtcblx0XHRcdFx0bW9kYWxMYWJlbC5sb2NrUG9zaXRpb24gPSBsb2NrUG9zaXRpb247XG5cdFx0XHRcdG1vZGFsTGFiZWwuX29mZnNldFggPSBvZmZzZXRYO1xuXHRcdFx0XHRtb2RhbExhYmVsLl9vZmZzZXRZID0gb2Zmc2V0WTtcblxuXG5cdFx0XHRcdGlmIChjYWxsYmFjayAhPT0gZmFsc2UgJiYgaXRlbVR5cGUgIT09IFwiYnV0dG9uXCIpIHtcblx0XHRcdFx0XHRtb2RhbExhYmVsLmlucHV0RW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5waXhlbFBlcmZlY3RDbGljayA9IHRydWU7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5wcmlvcml0eUlEID0gMTA7XG5cdFx0XHRcdFx0bW9kYWxMYWJlbC5ldmVudHMub25JbnB1dERvd24uYWRkKGNhbGxiYWNrLCBtb2RhbExhYmVsKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpdGVtVHlwZSAhPT0gXCJiaXRtYXBUZXh0XCIgJiYgaXRlbVR5cGUgIT09IFwiZ3JhcGhpY3NcIikge1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYnJpbmdUb1RvcCgpO1xuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYWRkKG1vZGFsTGFiZWwpO1xuXHRcdFx0XHRcdG1vZGFsTGFiZWwuYnJpbmdUb1RvcCgpO1xuXHRcdFx0XHRcdG1vZGFsR3JvdXAuYnJpbmdUb1RvcChtb2RhbExhYmVsKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmFkZChtb2RhbExhYmVsKTtcblx0XHRcdFx0XHRtb2RhbEdyb3VwLmJyaW5nVG9Ub3AobW9kYWxMYWJlbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bW9kYWxHcm91cC52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXSA9IG1vZGFsR3JvdXA7XG5cblx0XHR9LFxuXHRcdHVwZGF0ZU1vZGFsVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSwgaW5kZXgsIGlkKSB7XG5cdFx0XHR2YXIgaXRlbTtcblx0XHRcdGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGluZGV4ICE9PSBudWxsKSB7XG5cdFx0XHRcdGl0ZW0gPSBnYW1lLm1vZGFsc1t0eXBlXS5nZXRDaGlsZEF0KGluZGV4KTtcblx0XHRcdH0gZWxzZSBpZiAoaWQgIT09IHVuZGVmaW5lZCAmJiBpZCAhPT0gbnVsbCkge1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmIChpdGVtLmNvbnRlbnRUeXBlID09PSBcInRleHRcIikge1xuXHRcdFx0XHRpdGVtLnRleHQgPSB2YWx1ZTtcblx0XHRcdFx0aXRlbS51cGRhdGUoKTtcblx0XHRcdFx0aWYgKGl0ZW0ubG9ja1Bvc2l0aW9uID09PSB0cnVlKSB7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpdGVtLnggPSAoKGdhbWUud2lkdGggLyAyKSAtIChpdGVtLndpZHRoIC8gMikpICsgaXRlbS5fb2Zmc2V0WDtcblx0XHRcdFx0XHRpdGVtLnkgPSAoKGdhbWUuaGVpZ2h0IC8gMikgLSAoaXRlbS5oZWlnaHQgLyAyKSkgKyBpdGVtLl9vZmZzZXRZO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwiYml0bWFwVGV4dFwiKSB7XG5cdFx0XHRcdGl0ZW0udGV4dCA9IHZhbHVlO1xuXHRcdFx0XHRpdGVtLnVwZGF0ZVRleHQoKTtcblx0XHRcdFx0aWYgKGl0ZW0ubG9ja1Bvc2l0aW9uID09PSB0cnVlKSB7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpdGVtLnggPSAoKGdhbWUud2lkdGggLyAyKSAtIChpdGVtLndpZHRoIC8gMikpICsgaXRlbS5fb2Zmc2V0WDtcblx0XHRcdFx0XHRpdGVtLnkgPSAoKGdhbWUuaGVpZ2h0IC8gMikgLSAoaXRlbS5oZWlnaHQgLyAyKSkgKyBpdGVtLl9vZmZzZXRZO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGl0ZW0uY29udGVudFR5cGUgPT09IFwiaW1hZ2VcIikge1xuXHRcdFx0XHRpdGVtLmxvYWRUZXh0dXJlKHZhbHVlKTtcblx0XHRcdH1cblxuXHRcdH0sXG5cdFx0Z2V0TW9kYWxJdGVtOiBmdW5jdGlvbiAodHlwZSwgaW5kZXgpIHtcblx0XHRcdHJldHVybiBnYW1lLm1vZGFsc1t0eXBlXS5nZXRDaGlsZEF0KGluZGV4KTtcblx0XHR9LFxuXHRcdHNob3dNb2RhbDogZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRcdGdhbWUud29ybGQuYnJpbmdUb1RvcChnYW1lLm1vZGFsc1t0eXBlXSk7XG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gdHJ1ZTtcblx0XHRcdC8vIHlvdSBjYW4gYWRkIGFuaW1hdGlvbiBoZXJlXG5cdFx0fSxcblx0XHRoaWRlTW9kYWw6IGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0XHRnYW1lLm1vZGFsc1t0eXBlXS52aXNpYmxlID0gZmFsc2U7XG5cdFx0XHQvLyB5b3UgY2FuIGFkZCBhbmltYXRpb24gaGVyZVxuXHRcdH0sXG5cdFx0ZGVzdHJveU1vZGFsOiBmdW5jdGlvbiAodHlwZSkge1xuXHRcdFx0Z2FtZS5tb2RhbHNbdHlwZV0uZGVzdHJveSgpO1xuXHRcdFx0ZGVsZXRlIGdhbWUubW9kYWxzW3R5cGVdO1xuXHRcdH1cblx0fTtcbn07XG4iLCJcbmNsYXNzIENsaWVudCB7XG4gICAgXG5cdGNvbnN0cnVjdG9yKHNlcHRpa29uKSB7XG4gICAgICAgIFxuXHRcdHRoaXMuc29ja2V0ID0gaW8uY29ubmVjdCgpO1xuICAgICAgICB0aGlzLnNlcHRpa29uID0gdGhpcy5zb2NrZXQuc2VwdGlrb24gPSBzZXB0aWtvbjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdsb2cnLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMT0c6ICcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCd1cGRhdGUnLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgIGlmKGRhdGEudHlwZSA9PSBcInBlcnNvbm5lbFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbi51cGRhdGVQZXJzb25uZWwoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihkYXRhLnR5cGUgPT0gXCJyZXNvdXJjZXNcIikge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFjdGlvbiA9PSBcImluaXRcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLmluaXRSZXNvdXJjZXMoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGRhdGEuYWN0aW9uICsgXCIgbm90IGEgbGVnYWwgYWN0aW9uIGZvciBSZXNvdXJjZSB1cGRhdGUuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT0gXCJkaWNlXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcHRpa29uLmdhbWUuZGljZS5zZXRWYWx1ZShkYXRhLmRldGFpbHMudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VQREFURTonKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNvY2tldC5vbigncmVxdWVzdCcsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JFUVVFU1Q6ICcpO1xuICAgICAgICAgICAgc3dpdGNoKGRhdGEuZGV0YWlscy50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImFza1N0YXJ0XCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VwdGlrb24uc2hvd01vZGFsKCdhc2tTdGFydCcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNvY2tldC5vbignYWN0aW9uJywgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFDVElPTjogXCIpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZih0aGlzLnNlcHRpa29uW2RhdGEuY2FsbGJhY2tdKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXB0aWtvbltkYXRhLmNhbGxiYWNrXShkYXRhLmRldGFpbHMpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1I6IG5vIG1ldGhvZCBmb3VuZCBjYWxsZWQgc2VwdGlrb24uXCIgKyBkYXRhLmNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cdH1cblxuXHRhc2tOZXdQbGF5ZXIoKSB7XG5cdFx0dGhpcy5zb2NrZXQuZW1pdCgnbmV3UGxheWVyJywge3V1aWQ6bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcHRVVUlEJyl9KTtcblx0fVxuICAgIFxuICAgIHNlbmRJbnB1dChwYXlsb2FkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZW5kaW5nIGlucHV0Jyk7XG4gICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ2lucHV0JywgcGF5bG9hZCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGllbnQ7XG4iLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxuXG5jbGFzcyBDbG9uZSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUsIHV1aWQpIHtcbiAgICBzdXBlcihnYW1lLCB4LCB5LCAnY2xvbmUnLCBmcmFtZSk7XG4gICAgICAgIFxuICAgIC8vc2V0dXAgcGh5c2ljcyBwcm9wZXJ0aWVzXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjY1KTtcbiAgICB0aGlzLmdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlQm9keSh0aGlzKTtcbiAgICAvL3RoaXMuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuXG4gICAgdGhpcy51dWlkID0gdXVpZDtcbiAgICAvL3NldCBzaXplXG4gICAgdGhpcy53aWR0aCA9IDI3O1xuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XG4gICAgXG4gICAgLy9zZXQgcm90YXRpb24gKHRoaXMgc2hvdWxkIGJlIGJhc2VkIG9uIHRoZSBiYXNlIHRoaXMgY2xvbmUgb2NjdXBpZXMpXG4gICAgdGhpcy5hbmdsZSA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFuZ2xlICogLTE7XG5cbiAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSB0aGlzLmdhbWUuc2VwdGlrb24ucGl4ZWxzVG9UaWxlKHRoaXMueCwgdGhpcy55KTtcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gdHJ1ZTtcblxuICB9XG4gIFxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IGZhbHNlO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG5cbiAgaGlnaGxpZ2h0T24oKSB7XG4gICAgdGhpcy50aW50ID0gMHhGRjU1MDA7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLmFscGhhID0gMTtcbiAgfVxuICBcbiAgaGlnaGxpZ2h0T2ZmKCkge1xuICAgIHRoaXMudGludCA9IDB4ZmZmZmZmO1xuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlQXJyYXlbdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy55XS5hbHBoYSA9IDA7XG4gIH1cbiAgXG4gIGdldExlZ2FsTW92ZXMoKSB7XG4gICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gdGhpcy5nYW1lLnNlcHRpa29uLnBpeGVsc1RvVGlsZSh0aGlzLngsIHRoaXMueSk7XG4gICAgdmFyIGN1cnJlbnRMZWdhbE1vdmVzID0gdGhpcy5nYW1lLnNlcHRpa29uLmdldExlZ2FsTW92ZXModGhpcy5nYW1lLmdsb2JhbC5sYXN0RGljZVJvbGwsIHRoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcyk7XG4gICAgdmFyIGxlZ2FsVGlsZXNBcnJheSA9IFtdO1xuICAgIFxuICAgIFxuICAgIGZvciAodmFyIHRpbGUgaW4gY3VycmVudExlZ2FsTW92ZXMpIHtcbiAgICAgICAgbGVnYWxUaWxlc0FycmF5LnB1c2godGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVtjdXJyZW50TGVnYWxNb3Zlc1t0aWxlXS54XVtjdXJyZW50TGVnYWxNb3Zlc1t0aWxlXS55XSk7XG4gICAgICAgIC8vbGVnYWxUaWxlc0FycmF5W2xlZ2FsVGlsZXNBcnJheS5sZW5ndGgtMV0uYWxwaGEgPSAwLjU7XG4gICAgICAgIC8vbGVnYWxUaWxlc0FycmF5W2xlZ2FsVGlsZXNBcnJheS5sZW5ndGgtMV0ubGVnYWxGb3IgPSB0aGlzO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbGVnYWxUaWxlc0FycmF5O1xuICB9XG4gIFxuICBtb3ZlKGNvb3JkaW5hdGVzKSB7XG4gIFxuICAgIC8vIENsZWFyIFwibGVnYWxGb3JcIlxuICAgIGZvciAodmFyIHRpbGUgaW4gdGhpcy5sZWdhbFRpbGVzQXJyYXkpIHtcbiAgICAgICAgdGhpcy5sZWdhbFRpbGVzQXJyYXlbdGlsZV0uYWxwaGEgPSAwO1xuICAgICAgICBkZWxldGUgdGhpcy5sZWdhbFRpbGVzQXJyYXlbdGlsZV0ubGVnYWxGb3I7XG4gICAgfVxuICAgIFxuICAgIC8vIE1vdmUgdG8gbmV3IGhvbWVcbiAgICAvLyBOZWVkIHRvIGFkZCBhIGNoZWNrIGZvciBhcm1lZCBvcHBvbmVudHMgKGJpb2Ryb25lcy9lc3Bpb25hZ2VkIGNsb25lcy9jbG9uZXMgaW4gZW5lbXkgYmFzZSwgZXRjLilcbiAgICB2YXIgcG9pbnRzID0gdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVUb1BpeGVscyhjb29yZGluYXRlcy54LCBjb29yZGluYXRlcy55KTtcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gZmFsc2U7XG4gICAgdmFyIGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy55IC0gcG9pbnRzLnkgKyB0aGlzLnggLSBwb2ludHMueCkudG9GaXhlZCgxKTtcbiAgICBcbiAgICAvLyBVcGRhdGUgdGhlIHBlcnNvbm5lbCBjb29yZGluYXRlIHByb3BlcnR5XG4gICAgdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueF1bdGhpcy5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnldLnRpbGVPY2N1cGllZCA9IHRydWU7XG4gICAgXG4gICAgLy8gV2FpdCBmb3IgYW5pbWF0aW9uIHRvIGNvbXBsZXRlLCB0aGVuIHByb2Nlc3MgdGlsZSB0cmlnZ2VyXG4gICAgdmFyIHR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzKS50bygge3g6cG9pbnRzLngsIHk6cG9pbnRzLnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XG4gICAgdHdlZW4ub25Db21wbGV0ZS5hZGQodGhpcy5nYW1lLnNlcHRpa29uLnRyaWdnZXJUaWxlLCB0aGlzLmdhbWUuc2VwdGlrb24pO1xuICAgIFxuICAgIC8vIENsZWFyIHRoaXMuY3VycmVudExlZ2FsTW92ZXNcbiAgICBkZWxldGUgdGhpcy5sZWdhbFRpbGVzQXJyYXk7XG4gICAgZGVsZXRlIHRoaXMuY3VycmVudExlZ2FsTW92ZXM7ICAgIFxuICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IENsb25lO1xuIiwiLy9Eb2N1bWVudGF0aW9uIGZvciBQaGFzZXIncyAoMi42LjIpIHNwcml0ZXM6OiBwaGFzZXIuaW8vZG9jcy8yLjYuMi9QaGFzZXIuU3ByaXRlLmh0bWxcbmNsYXNzIENyb3NzaGFpcnMgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKGdhbWUsIHgsIHksIGZyYW1lKSB7XG4gICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2Nyb3NzaGFpcnMnLCBmcmFtZSk7XG5cbiAgICAvL3NldCBzaXplXG4gICAgdGhpcy53aWR0aCA9IDM1OyBcbiAgICB0aGlzLnNjYWxlLnkgPSBNYXRoLmFicyh0aGlzLnNjYWxlLngpO1xuXG4gICAgdGhpcy5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICB9XG5cbiAgdXBkYXRlKCl7XG4gICAgdGhpcy54ID0gdGhpcy5nYW1lLmlucHV0Lm1vdXNlUG9pbnRlci54O1xuICAgIHRoaXMueSA9IHRoaXMuZ2FtZS5pbnB1dC5tb3VzZVBvaW50ZXIueTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyb3NzaGFpcnM7XG4iLCIvL0RvY3VtZW50YXRpb24gZm9yIFBoYXNlcidzICgyLjYuMikgc3ByaXRlczo6IHBoYXNlci5pby9kb2NzLzIuNi4yL1BoYXNlci5TcHJpdGUuaHRtbFxuY2xhc3MgRGljZSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUpIHsgIFxuICAgIHN1cGVyKGdhbWUsIHgsIHksICdkaWNlJywgZnJhbWUpO1xuXG4gICAgLy9zZXR1cCBwaHlzaWNzIHByb3BlcnRpZXNcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZUJvZHkodGhpcyk7XG5cbiAgICAvL3NldCBjbGljayBldmVudFxuICAgIHRoaXMuaW5wdXRFbmFibGVkID0gZmFsc2U7XG4gICAgdGhpcy5ldmVudHMub25JbnB1dERvd24uYWRkKHRoaXMuY2xpY2tlZCwgdGhpcyk7XG5cbiAgICAvL3NldCBzaXplXG4gICAgdGhpcy53aWR0aCA9IDUwO1xuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XG4gICAgdGhpcy5maWx0ZXJzID0gW3RoaXMuZ2FtZS5hZGQuZmlsdGVyKCdHcmF5JyldO1xuICAgIHRoaXMuYWxwaGEgPSAwLjU7XG4gICAgXG4gICAgdGhpcy52YWx1ZSA9IDEwO1xuICAgIHRoaXMuZnJhbWUgPSB0aGlzLnZhbHVlLTE7XG4gIH1cblxuICBjbGlja2VkICgpIHtcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICdkaWNlQ2xpY2tlZCd9KTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICAgIHRoaXMuYWxwaGEgPSAxO1xuICAgICAgdGhpcy5maWx0ZXJzID0gbnVsbDtcbiAgICAgIHRoaXMuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgICB0aGlzLmFscGhhID0gMC41O1xuICAgICAgdGhpcy5maWx0ZXJzID0gW3RoaXMuZ2FtZS5hZGQuZmlsdGVyKCdHcmF5JyldO1xuICAgICAgdGhpcy5pbnB1dEVuYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuZnJhbWUgPSB2YWx1ZSAtIDE7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGljZTtcbiIsImNsYXNzIE1hc3RlciB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcigpIHsgXG4gIH1cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hc3RlcjsiLCJjbGFzcyBPcmRuYW5jZSBleHRlbmRzIFBoYXNlci5TcHJpdGUge1xuXG4gIC8vaW5pdGlhbGl6YXRpb24gY29kZSBpbiB0aGUgY29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUsIHR5cGUsIHV1aWQpIHtcbiAgICB2YXIgb3JkRnJhbWU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFwic2hpZWxkXCI6XG4gICAgICAgIG9yZEZyYW1lID0gNDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYmlvZHJvbmVcIjpcbiAgICAgICAgb3JkRnJhbWUgPSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzYXRlbGxpdGVcIjpcbiAgICAgICAgb3JkRnJhbWUgPSA1O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJyb2NrZXRcIjpcbiAgICAgICAgb3JkRnJhbWUgPSAyO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJCYWQgb3JkbmFuY2UgdHlwZVwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHN1cGVyKGdhbWUsIHgsIHksICdvcmRuYW5jZScsIG9yZEZyYW1lKTtcbiAgICAgICAgXG4gICAgLy9zZXR1cCBwaHlzaWNzIHByb3BlcnRpZXNcbiAgICB0aGlzLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgdGhpcy5nYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZUJvZHkodGhpcyk7XG4gICAgLy90aGlzLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcblxuICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAvL3NldCBzaXplXG4gICAgdGhpcy53aWR0aCA9IDUwO1xuICAgIHRoaXMuc2NhbGUueSA9IE1hdGguYWJzKHRoaXMuc2NhbGUueCk7XG4gICAgXG4gICAgLy9zZXQgcm90YXRpb24gKHRoaXMgc2hvdWxkIGJlIGJhc2VkIG9uIHRoZSBiYXNlIHRoaXMgY2xvbmUgb2NjdXBpZXMpXG4gICAgdGhpcy5hbmdsZSA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmFuZ2xlICogLTE7XG5cbiAgICB0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMgPSB0aGlzLmdhbWUuc2VwdGlrb24ucGl4ZWxzVG9UaWxlKHRoaXMueCwgdGhpcy55KTtcbiAgICB0aGlzLmdhbWUuc2VwdGlrb24udGlsZUFycmF5W3RoaXMuY3VycmVudFRpbGVDb29yZGluYXRlcy54XVt0aGlzLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gdHJ1ZTtcblxuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBPcmRuYW5jZTsiLCJjbGFzcyBQZXJzb25uZWwgZXh0ZW5kcyBQaGFzZXIuU3ByaXRlIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgeCwgeSwgZnJhbWUpIHtcbiAgICAgICAgc3VwZXIoZ2FtZSwgeCwgeSwgJ2Nsb25lJywgZnJhbWUpOyAgXG4gICAgfVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyc29ubmVsOyIsImNsYXNzIFJlc291cmNlcyB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcigpIHsgXG4gICAgdGhpcy5yZXNvdXJjZUVudW0gPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgT1hZR0VOOiAwLFxuICAgICAgICBST0NLRVQ6IDEsXG4gICAgICAgIE1FVEFMOiAyLFxuICAgICAgICBFTkVSR1k6IDMsXG4gICAgICAgIEJJT01BU1M6IDQsXG4gICAgICAgIEJJT0RST05FOiA1LFxuICAgICAgICBVUkFOSVVNOiA2XG4gICAgfSk7XG4gICAgdGhpcy5yZXNvdXJjZXMgPSB7fTtcbiAgICBmb3IodmFyIHR5cGUgaW4gdGhpcy5yZXNvdXJjZUVudW0pIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZXNbdGhpcy5yZXNvdXJjZUVudW1bdHlwZV1dID0gNTtcbiAgICB9XG4gIH1cbiAgXG4gIGNoZWNrKHR5cGUsIGNvdW50KSB7XG4gICAgaWYodGhpcy5yZXNvdXJjZXNbdGhpcy5yZXNvdXJjZUVudW1bdHlwZV1dID4gY291bnQpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIGdldENvdW50KHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZXNbdHlwZV07XG4gIH1cbiAgICBcbiAgYWRkKHR5cGUsIGNvdW50KSB7XG4gIH1cbiAgXG4gIHJlbW92ZSh0eXBlLCBjb3VudCkge1xuICAgIHRoaXMucmVzb3VyY2VzW3R5cGVdIC09IGNvdW50O1xuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNvdXJjZXM7IiwiaW1wb3J0IENsb25lIGZyb20gJy4uL3ByZWZhYnMvY2xvbmUnO1xuaW1wb3J0IE9yZG5hbmNlIGZyb20gJy4uL3ByZWZhYnMvb3JkbmFuY2UnO1xuXG5jbGFzcyBTZXB0aWtvbiB7XG5cbiAgLy9pbml0aWFsaXphdGlvbiBjb2RlIGluIHRoZSBjb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7IFxuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgXG4gICAgdGhpcy5wbGF5ZXIgPSB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBwZXJzb25uZWxBcnJheTogW10sXG4gICAgICAgIG9yZG5hbmNlQXJyYXk6IFtdXG4gICAgfTtcblxuICAgIHRoaXMub3Bwb25lbnQgPSB7XG4gICAgICAgIHBlcnNvbm5lbEFycmF5OiBbXSxcbiAgICAgICAgb3JkbmFuY2VBcnJheTogW11cbiAgICB9O1xuICAgIFxuICAgIHRoaXMuc2hvd25UaWxlcyA9IFtdO1xuICAgIHRoaXMudGlsZUFycmF5ID0gW107XG5cbiAgICB0aGlzLmxlZ2FsTW92ZXMgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0ZWRUb01vdmUgPSBudWxsO1xuICAgIHRoaXMubGVnYWxHdW5uZXJzID0gbnVsbDtcblxuICAgIHRoaXMuY2hvb3NpbmdUYXJnZXRzID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMgPSBbXTtcbiAgfVxuXG4gIHNob3dNb2RhbCh0eXBlKSB7XG4gICAgdGhpcy5nYW1lLm1vZGFsLnNob3dNb2RhbCh0eXBlKTtcbiAgfVxuICBcbiAgZGljZVJvbGxlZChkZXRhaWxzKSB7XG4gICAgdGhpcy5nYW1lLmRpY2Uuc2V0VmFsdWUoZGV0YWlscy52YWx1ZSk7XG4gICAgdGhpcy5sZWdhbE1vdmVzID0gZGV0YWlscy5nYW1lUGllY2VzO1xuICAgIHZhciBwb2ludEFycmF5ID0gW107XG4gICAgLy8gY29uc29sZS5sb2coZGV0YWlscy5nYW1lUGllY2VzWzBdLm9yaWdpbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZXRhaWxzLmdhbWVQaWVjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcG9pbnRBcnJheS5wdXNoKHsgeDogZGV0YWlscy5nYW1lUGllY2VzW2ldLm9yaWdpbi54LCB5OiBkZXRhaWxzLmdhbWVQaWVjZXNbaV0ub3JpZ2luLnkgfSk7XG4gICAgfVxuICAgIHRoaXMuc2hvd1RpbGVzKHBvaW50QXJyYXksIDB4RjYzNjM2KTtcbiAgfVxuXG4gIG9mZmVyRGljZSgpIHtcbiAgICAgIHRoaXMuZ2FtZS5kaWNlLmVuYWJsZSgpO1xuICB9XG5cbiAgdGFrZURpY2UoKSB7XG4gICAgICB0aGlzLmdhbWUuZGljZS5kaXNhYmxlKCk7XG4gIH1cblxuICBvZmZlckd1bm5lcnMoZGF0YSkge1xuICAgICAgdGhpcy5jaG9vc2luZ1RhcmdldHMgPSB0cnVlO1xuICAgICAgdGhpcy5sZWdhbEd1bm5lcnMgPSBkYXRhLmd1bm5lcnM7XG4gICAgICB0aGlzLmdhbWUuZ28uZW5hYmxlKCk7XG4gICAgICBjb25zb2xlLmxvZyhcImFuaW1hdGUgc29tZSBpbmRpY2F0aW9uIG9mIHZpYWJsZSBndW5uZXJzIG9uIHRoZSBzdXJmYWNlLiBNYXliZSBhIHBvaW50ZXIgYm91bmNpbmcgb3ZlciB0aGVtP1wiKTtcbiAgICAgIC8vVE9ETzogRW1pdCBhbiBpbmRpY2F0b3IgZm9yIHNlbGVjdGluZyBhIGd1bm5lclxuICB9XG4gIFxuICBhZGRDbG9uZShkZXRhaWxzKSB7XG4gICAgdmFyIHBvaW50ID0gdGhpcy50aWxlVG9QaXhlbHMoZGV0YWlscy54LCBkZXRhaWxzLnkpO1xuICAgIHZhciBjbG9uZSA9IG5ldyBDbG9uZSh0aGlzLmdhbWUsIHBvaW50LngsIHBvaW50LnksIG51bGwsIGRldGFpbHMudXVpZCk7XG4gICAgaWYoZGV0YWlscy5wbGF5ZXJJRCA9PSB0aGlzLnBsYXllci5pZCkge1xuICAgICAgICB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheS5wdXNoKGNsb25lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5LnB1c2goY2xvbmUpO1xuICAgIH1cbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQoY2xvbmUpO1xuICB9XG5cbiAgYWRkT3JkbmFuY2UoZGV0YWlscykge1xuICAgIHZhciBwb2ludCA9IHRoaXMudGlsZVRvUGl4ZWxzKGRldGFpbHMucG9pbnQueCwgZGV0YWlscy5wb2ludC55KTtcbiAgICB2YXIgb3JkID0gbmV3IE9yZG5hbmNlKHRoaXMuZ2FtZSwgcG9pbnQueCwgcG9pbnQueSwgbnVsbCwgZGV0YWlscy50eXBlLCBkZXRhaWxzLnV1aWQpO1xuICAgIGlmKGRldGFpbHMucGxheWVySUQgPT0gdGhpcy5wbGF5ZXIuaWQpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheS5wdXNoKG9yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcHBvbmVudC5vcmRuYW5jZUFycmF5LnB1c2gob3JkKTtcbiAgICB9XG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKG9yZCk7XG4gIH1cblxuICBtb3ZlUGVyc29ubmVsKGRhdGEpIHtcbiAgICB2YXIgdHdlZW4gPSBudWxsO1xuICAgIHZhciBkaXN0YW5jZSA9IG51bGw7XG4gICAgdmFyIHBvaW50ID0gdGhpcy50aWxlVG9QaXhlbHMoZGF0YS54LCBkYXRhLnkpO1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXkpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnV1aWQgPT0gZGF0YS51dWlkKSB7XG4gICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMucGxheWVyLnBlcnNvbm5lbEFycmF5W2ldLnkgLSBwb2ludC55ICsgdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueCAtIHBvaW50LngpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICB0d2VlbiA9IHRoaXMuZ2FtZS5hZGQudHdlZW4odGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0pLnRvKCB7eDpwb2ludC54LCB5OnBvaW50Lnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XG4gICAgICAgICAgICAvLyBUcmlnZ2VyIHRpbGUuIE5vdCBxdWl0ZSBzdXJlIGhvdyB0byBkbyB0aGlzIHlldC5cbiAgICAgICAgICAgIC8vdHdlZW4ub25Db21wbGV0ZS5hZGQodGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAnbW92ZUNvbXBsZXRlJywgeDpwYXJzZUludChvYmoudGlsZVgpLCB5OnBhcnNlSW50KG9iai50aWxlWSl9KTssIHRoaXMuZ2FtZS5zZXB0aWtvbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgaiBpbiB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5KSB7XG4gICAgICAgIGlmICh0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5W2pdLnV1aWQgPT0gZGF0YS51dWlkKSB7XG4gICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXlbal0ueSAtIHBvaW50LnkgKyB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5W2pdLnggLSBwb2ludC54KS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXlbal0pLnRvKCB7eDpwb2ludC54LCB5OnBvaW50Lnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3ZlT3JkbmFuY2UoZGF0YSkge1xuICAgIHZhciB0d2VlbiA9IG51bGw7XG4gICAgdmFyIGRpc3RhbmNlID0gbnVsbDtcbiAgICB2YXIgcG9pbnQgPSBudWxsO1xuICAgIGZvciAodmFyIGRhdGFJbmRleCA9IDA7IGRhdGFJbmRleCA8IGRhdGEubGVuZ3RoOyBkYXRhSW5kZXgrKykge1xuICAgICAgICBwb2ludCA9IHRoaXMudGlsZVRvUGl4ZWxzKGRhdGFbZGF0YUluZGV4XS54LCBkYXRhW2RhdGFJbmRleF0ueSk7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLm9yZG5hbmNlQXJyYXlbaV0udXVpZCA9PSBkYXRhW2RhdGFJbmRleF0udXVpZCkge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy5wbGF5ZXIub3JkbmFuY2VBcnJheVtpXS55IC0gcG9pbnQueSArIHRoaXMucGxheWVyLm9yZG5hbmNlQXJyYXlbaV0ueCAtIHBvaW50LngpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgdHdlZW4gPSB0aGlzLmdhbWUuYWRkLnR3ZWVuKHRoaXMucGxheWVyLm9yZG5hbmNlQXJyYXlbaV0pLnRvKCB7eDpwb2ludC54LCB5OnBvaW50Lnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaiBpbiB0aGlzLm9wcG9uZW50Lm9yZG5hbmNlQXJyYXkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wcG9uZW50Lm9yZG5hbmNlQXJyYXlbal0udXVpZCA9PSBkYXRhW2RhdGFJbmRleF0udXVpZCkge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5hYnModGhpcy5vcHBvbmVudC5vcmRuYW5jZUFycmF5W2pdLnkgLSBwb2ludC55ICsgdGhpcy5vcHBvbmVudC5vcmRuYW5jZUFycmF5W2pdLnggLSBwb2ludC54KS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgICAgIHR3ZWVuID0gdGhpcy5nYW1lLmFkZC50d2Vlbih0aGlzLm9wcG9uZW50Lm9yZG5hbmNlQXJyYXlbal0pLnRvKCB7eDpwb2ludC54LCB5OnBvaW50Lnl9LCAoZGlzdGFuY2UqMTEpLCBQaGFzZXIuRWFzaW5nLkN1YmljLk91dCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVQZXJzb25uZWwoZGF0YSkge1xuICAgICAgdmFyIGN1cnJlbnRQZXJzb25uZWwgPSBudWxsO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5kZXRhaWxzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBkYXRhLmRldGFpbHMgPSBbZGF0YS5kZXRhaWxzXTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub3Bwb25lbnQucGVyc29ubmVsQXJyYXkubGVuZ3RoID09PSAwICYmIGRhdGEuZGV0YWlscy5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBkYXRhLmRldGFpbHMpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xvbmUoZGF0YS5kZXRhaWxzW2ldKTtcbiAgICAgICAgfSAgICAgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiB0aGlzLm9wcG9uZW50LnBlcnNvbm5lbEFycmF5KSB7XG4gICAgICAgICAgICBjdXJyZW50UGVyc29ubmVsID0gdGhpcy5vcHBvbmVudC5wZXJzb25uZWxBcnJheVtwXTtcbiAgICAgICAgICAgIGZvciAodmFyIGQgaW4gZGF0YS5kZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQZXJzb25uZWwudXVpZCA9PSBkYXRhLmRldGFpbHNbZF0udXVpZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVQZXJzb25uZWwoZGF0YS5kZXRhaWxzW2RdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIHJlbW92ZVBlcnNvbm5lbChkYXRhKSB7XG4gICAgICB2YXIgcGVyc29ubmVsVG9EZXN0cm95O1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtpXS51dWlkID09IGRhdGEudXVpZCkge1xuICAgICAgICAgICAgICBwZXJzb25uZWxUb0Rlc3Ryb3kgPSB0aGlzLnBsYXllci5wZXJzb25uZWxBcnJheVtpXTtcbiAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucGVyc29ubmVsQXJyYXkuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICAgIHBlcnNvbm5lbFRvRGVzdHJveS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlbW92ZUFsbFBlcnNvbm5lbCgpe1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYodGhpcy5nYW1lLmJvYXJkR3JvdXAuY2hpbGRyZW5baV0uY29uc3RydWN0b3IgPT0gQ2xvbmUpe1xuICAgICAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIFxuICB1cGRhdGVQbGF5ZXIoZGV0YWlscykge1xuICAgIGZvciAodmFyIGkgaW4gZGV0YWlscykge1xuICAgICAgICB0aGlzLnBsYXllcltpXSA9IGRldGFpbHNbaV07XG4gICAgfVxuXG4gICAgLy8gREVCVUcgQkxPQ0tcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICd0aWxlQ2xpY2tlZCcsIHg6NywgeTowfSk7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAndGlsZUNsaWNrZWQnLCB4OjcsIHk6MTl9KTtcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICd0aWxlQ2xpY2tlZCcsIHg6NiwgeToxMH0pO1xuICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ3RpbGVDbGlja2VkJywgeDo0LCB5OjEwfSk7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAndGlsZUNsaWNrZWQnLCB4OjAsIHk6MTB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAndGlsZUNsaWNrZWQnLCB4OjIzLCB5OjIwfSk7XG4gICAgdGhpcy5nYW1lLmNsaWVudC5zZW5kSW5wdXQoe2V2ZW50OiAndGlsZUNsaWNrZWQnLCB4OjIzLCB5OjF9KTtcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICd0aWxlQ2xpY2tlZCcsIHg6MjQsIHk6MTB9KTtcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICd0aWxlQ2xpY2tlZCcsIHg6MjYsIHk6MTB9KTtcbiAgICB0aGlzLmdhbWUuY2xpZW50LnNlbmRJbnB1dCh7ZXZlbnQ6ICd0aWxlQ2xpY2tlZCcsIHg6MzAsIHk6MTB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgXG4gIH1cblxuICBpbml0UmVzb3VyY2VzKCkge1xuICAgIHZhciBjdXJyZW50UmVjID0gbnVsbDtcbiAgICB2YXIgZ3JhcGhpY3MgPSB0aGlzLmdhbWUuYWRkLmdyYXBoaWNzKDAsIDApO1xuICAgIC8vZ3JhcGhpY3MubGluZVN0eWxlKDQsIDB4ZmZkOTAwLCAxKTtcbiAgICBncmFwaGljcy5iZWdpbkZpbGwoMHhmZmZmZmYsIDEpO1xuICAgIGdyYXBoaWNzLmRyYXdSb3VuZGVkUmVjdCgxMDAsIDEwMCwgdGhpcy50aWxlV2lkdGgtNCwgdGhpcy50aWxlSGVpZ2h0LTQsIDE0KTtcblxuICAgIGZvciAodmFyIGMgaW4gdGhpcy50aWxlQXJyYXkpIHtcbiAgICAgICAgZm9yICh2YXIgciBpbiB0aGlzLnRpbGVBcnJheVtjXSkge1xuICAgICAgICAgICAgaWYodGhpcy50aWxlQXJyYXlbY11bcl0udGlsZU93bmVyID09IHRoaXMucGxheWVyLmlkICYmIHRoaXMudGlsZUFycmF5W2NdW3JdLnRpbGVUeXBlID09IFwid2FyZWhvdXNlXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAociA8IDUgfHwgciA+IDE1KSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSh0aGlzLnRpbGVBcnJheVtjXVtyXS54Kyh0aGlzLnRpbGVBcnJheVtjXVtyXS53aWR0aC8yKSwgdGhpcy50aWxlQXJyYXlbY11bcl0ueSsodGhpcy50aWxlQXJyYXlbY11bcl0ud2lkdGgvMiksIGdyYXBoaWNzLmdlbmVyYXRlVGV4dHVyZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlYy5hbmdsZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo0MCktMjA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMuYW5jaG9yLnNldFRvKDAuNSk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy50aWxlQXJyYXlbY11bcl0udGlsZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlbmVyZ3lcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweGZjZTMxNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJveHlnZW5cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweDAwYjFmMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyb2NrZXRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweGU4MmEyYztcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtZXRhbFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4ZmZmZmZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJpb21hc3NcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweDhhYzM0MjtcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJiaW9kcm9uZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWMudGludCA9IDB4OWYzYTliO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInVyYW5pdW1cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjLnRpbnQgPSAweGYzNjUyMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQoY3VycmVudFJlYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdyYXBoaWNzLmRlc3Ryb3koKTtcbiAgfVxuICBcbiAgY3JlYXRlVGlsZUFycmF5KGNvbHVtbnMsIHJvd3MsIHBvaW50KSB7XG4gICAgdGhpcy50aWxlRGV0YWlsID0gdGhpcy5nYW1lLmNhY2hlLmdldEpTT04oJ3RpbGVEZXRhaWwnKTtcblxuICAgIHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMgPSB7eDowLCB5OjB9O1xuXG4gICAgdmFyIHgsIHk7XG4gICAgXG4gICAgdGhpcy5tYXJnaW5Cb3R0b20gPSB0aGlzLm1hcmdpblRvcCA9IHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmhlaWdodC8xNy40NzU7XG4gICAgdGhpcy5tYXJnaW5MZWZ0ID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGgvMjQ7XG4gICAgdGhpcy5tYXJnaW5SaWdodCA9ICB0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aC8yNi4zMTU4O1xuICAgIHRoaXMudGlsZVdpZHRoID0gdGhpcy50aWxlSGVpZ2h0ID0gdGhpcy5nYW1lLmJvYXJkR3JvdXAud2lkdGgvMzk7XG4gICAgdGhpcy5wYWRkaW5nID0gKHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoIC0gKHRoaXMubWFyZ2luTGVmdCArIHRoaXMubWFyZ2luUmlnaHQpIC0gKHRoaXMudGlsZVdpZHRoICogMzEpKS8zMDtcbiAgICAgICAgXG4gICAgLy90aGlzLnRpbGVXaWR0aCA9IDI1Oy8vKHRoaXMuYmFja2dyb3VuZFdpZHRoIC0gKCh0aGlzLm1hcmdpbkxlZnQgKyB0aGlzLm1hcmdpblJpZ2h0KSArICh0aGlzLnBhZGRpbmcgKiAoY29sdW1ucyAtIDEpKSkpIC8gY29sdW1ucztcbiAgICAvL3RoaXMudGlsZUhlaWdodCA9IDI1Oy8vKHRoaXMuYmFja2dyb3VuZEhlaWdodCAtICgodGhpcy5tYXJnaW5Ub3AgKyB0aGlzLm1hcmdpbkJvdHRvbSkgKyAodGhpcy5wYWRkaW5nICogKHJvd3MgLSAxKSkpKSAvIHJvd3M7XG4gICAgICAgIFxuICAgIHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMueCA9IHBvaW50LnggKyB0aGlzLm1hcmdpbkxlZnQ7XG4gICAgdGhpcy50aWxlU3RhcnRDb29yZGluYXRlcy55ID0gcG9pbnQueSArIHRoaXMubWFyZ2luVG9wO1xuICAgIFxuICAgIHZhciBncmFwaGljcyA9IHRoaXMuZ2FtZS5hZGQuZ3JhcGhpY3MoMCwgMCk7XG4gICAgLy9ncmFwaGljcy5saW5lU3R5bGUoNCwgMHhmZmQ5MDAsIDEpO1xuICAgIGdyYXBoaWNzLmJlZ2luRmlsbCgweGZmZmZmZiwgMSk7XG4gICAgZ3JhcGhpY3MuZHJhd1JlY3QoMTAwLCAxMDAsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQpO1xuICAgIFxuICAgIGZvciAodmFyIGNvbHVtbiA9IDA7IGNvbHVtbiA8IGNvbHVtbnM7IGNvbHVtbisrKSB7XG4gICAgICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHJvd3M7IHJvdysrKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHggPSB0aGlzLnRpbGVTdGFydENvb3JkaW5hdGVzLnggKyAodGhpcy50aWxlV2lkdGggKiBjb2x1bW4pICsgKHRoaXMucGFkZGluZyAqIGNvbHVtbiAtIDEpO1xuICAgICAgICAgICAgeSA9IHRoaXMudGlsZVN0YXJ0Q29vcmRpbmF0ZXMueSArICh0aGlzLnRpbGVIZWlnaHQgKiByb3cpICsgKHRoaXMucGFkZGluZyAqIHJvdyAtIDEpO1xuICAgICAgICAgICAgLy9ncmFwaGljcy5nZW5lcmF0ZVRleHR1cmUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaWxlID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoeCwgeSwgZ3JhcGhpY3MuZ2VuZXJhdGVUZXh0dXJlKCkpO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYWRkKGN1cnJlbnRUaWxlKTtcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlLmFscGhhID0gMDsgLy8gMC4yNTtcbiAgICAgICAgICAgIGN1cnJlbnRUaWxlLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBjdXJyZW50VGlsZS5ldmVudHMub25JbnB1dERvd24uYWRkKHRoaXMudGlsZUNsaWNrZWQsIHRoaXMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMudGlsZUFycmF5W2NvbHVtbl0gPT0gJ3VuZGVmaW5lZCcpIFxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W2NvbHVtbl0gPSBbXTtcbiAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjb2x1bW5dW3Jvd10gPSBjdXJyZW50VGlsZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBncmFwaGljcy5kZXN0cm95KCk7XG4gICAgXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMudGlsZURldGFpbCkge1xuICAgICAgICBpZiAoIXRoaXMudGlsZURldGFpbC5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcbiAgICAgICAgXG4gICAgICAgIHZhciBvYmogPSB0aGlzLnRpbGVEZXRhaWxba2V5XTtcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgIC8vIHNraXAgbG9vcCBpZiB0aGUgcHJvcGVydHkgaXMgZnJvbSBwcm90b3R5cGVcbiAgICAgICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgbG9jYXRpb25Db3VudCA9IG9ialtwcm9wXS5sb2NhdGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yKCB2YXIgaSA9IDA7IGkgPCBsb2NhdGlvbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgY29vcmRzID0gb2JqW3Byb3BdLmxvY2F0aW9uc1tpXS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgeCA9IGNvb3Jkc1swXTtcbiAgICAgICAgICAgICAgICB5ID0gY29vcmRzWzFdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVEYW1hZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZU9jY3VwaWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZVggPSB4O1xuICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVZID0geTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlVHlwZSA9IG9ialtwcm9wXS50eXBlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRpbGVBcnJheVt4XVt5XSAhPSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZU5hbWUgPSBvYmpbcHJvcF0ubmFtZTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHggKyBcIjpcIiArIHkgKyBcIiBub3QgZm91bmQhXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYoeCA8IDkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZUFycmF5W3hdW3ldLnRpbGVPd25lciA9IDE7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeD4yMClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0udGlsZU93bmVyID0gMjtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcF0ucHJvcGVydGllcyAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50aWxlUHJvcGVydGllcyA9IG9ialtwcm9wXS5wcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBpeGVsc1RvVGlsZSh4LCB5KSB7XG4gICAgdmFyIHhUaWxlID0gMDtcbiAgICB2YXIgeVRpbGUgPSAwO1xuICAgIFxuICAgIGZvciAodmFyIGNvbCBpbiB0aGlzLnRpbGVBcnJheSkge1xuICAgICAgICBmb3IgKHZhciByb3cgaW4gdGhpcy50aWxlQXJyYXlbY29sXSkge1xuICAgICAgICAgICAgdmFyIG9iaiA9IHRoaXMudGlsZUFycmF5W2NvbF1bcm93XTtcbiAgICAgICAgICAgIGlmKHggPiBvYmoueCAmJiB4IDwgb2JqLnggKyBvYmoud2lkdGgpXG4gICAgICAgICAgICAgICAgeFRpbGUgPSBwYXJzZUludChjb2wpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoeSA+IG9iai55ICYmIHkgPCBvYmoueSArIG9iai5oZWlnaHQpXG4gICAgICAgICAgICAgICAgeVRpbGUgPSBwYXJzZUludChyb3cpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7eDp4VGlsZSwgeTp5VGlsZX07XG4gIH1cbiAgXG4gIHRpbGVUb1BpeGVscyh4LCB5KSB7XG4gICAgdmFyIHRpbGVPYmogPSB0aGlzLnRpbGVBcnJheVt4XVt5XTtcbiAgICByZXR1cm4ge3g6dGlsZU9iai54ICsgdGlsZU9iai53aWR0aC8yLCB5OnRpbGVPYmoueSArIHRpbGVPYmouaGVpZ2h0LzJ9O1xuICB9XG4gIFxuICB0aWxlQ2xpY2tlZChvYmopIHtcbiAgICB0aGlzLmhpZGVUaWxlcygpO1xuICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ3RpbGVDbGlja2VkJywgeDpwYXJzZUludChvYmoudGlsZVgpLCB5OnBhcnNlSW50KG9iai50aWxlWSl9KTtcblxuICAgIC8vIERFQlVHIEJMT0NLXG4gICAgY29uc29sZS5sb2coXCItLS0tVElMRSBERVRBSUwtLS0tXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiTmFtZTogXCIgKyBvYmoudGlsZU5hbWUpO1xuICAgIGNvbnNvbGUubG9nKFwiVHlwZTogXCIgKyBvYmoudGlsZVR5cGUpO1xuICAgIGNvbnNvbGUubG9nKFwiT2NjdXBpZWQ6IFwiICsgb2JqLnRpbGVPY2N1cGllZCk7XG4gICAgY29uc29sZS5sb2coXCJEYW1hZ2VkOiBcIiArIG9iai50aWxlRGFtYWdlZCk7XG4gICAgY29uc29sZS5sb2coXCJYOiBcIiArIG9iai50aWxlWCArIFwiIFk6XCIgKyBvYmoudGlsZVkpO1xuICAgIC8vICAgdGhpcy5hZGRPcmRuYW5jZSh7cG9pbnQ6e3g6b2JqLnRpbGVYLCB5Om9iai50aWxlWX0sIHR5cGU6J2Jpb2Ryb25lJywgdXVpZDpNYXRoLnJhbmRvbSgpfSk7XG5cbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIHNob3dUaWxlcyhjb29yZHNBcnJheSwgY29sb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU0hPVyBUSUxFUyEhXCIpO1xuICAgICAgY29uc29sZS5sb2coY29vcmRzQXJyYXkpO1xuICAgIC8vIGlmKHR5cGVvZihjb29yZHNBcnJheS5wb2ludEFycmF5KSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyAgICAgY29vcmRzQXJyYXkgPSBjb29yZHNBcnJheS5wb2ludEFycmF5O1xuICAgIC8vIH1cbiAgICBmb3IgKHZhciBpIGluIGNvb3Jkc0FycmF5KSB7XG4gICAgICAgIHRoaXMudGlsZUFycmF5W2Nvb3Jkc0FycmF5W2ldLnhdW2Nvb3Jkc0FycmF5W2ldLnldLmFscGhhID0gMC41O1xuICAgICAgICBpZihjb2xvcikge1xuICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbY29vcmRzQXJyYXlbaV0ueF1bY29vcmRzQXJyYXlbaV0ueV0udGludCA9IGNvbG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbY29vcmRzQXJyYXlbaV0ueF1bY29vcmRzQXJyYXlbaV0ueV0udGludCA9IDB4ZmZkOTAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hvd25UaWxlcy5wdXNoKHt4OmNvb3Jkc0FycmF5W2ldLngseTpjb29yZHNBcnJheVtpXS55fSk7XG4gICAgfVxuICB9XG4gIFxuICBoaWRlVGlsZXModGlsZUFycmF5KSB7XG4gICAgaWYoIXRpbGVBcnJheSkge1xuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuc2hvd25UaWxlcykge1xuICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbdGhpcy5zaG93blRpbGVzW2ldLnhdW3RoaXMuc2hvd25UaWxlc1tpXS55XS5hbHBoYSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93blRpbGVzID0gW107XG4gICAgfVxuICB9XG5cbiAgZGFtYWdlVGlsZShkYXRhKSB7XG4gIFxuICAgIHZhciBjdXJyZW50VGlsZSA9IHRoaXMudGlsZUFycmF5W2RhdGEueF1bZGF0YS55XTtcbiAgICBcbiAgICBjdXJyZW50VGlsZS50aW50ID0gMFgzMzMzMzM7XG4gICAgY3VycmVudFRpbGUuYWxwaGEgPSAwLjg7XG4gICAgY3VycmVudFRpbGUudGlsZURhbWFnZWQgPSB0cnVlO1xuICAgIFxuICAgIHZhciB0ZXN0ID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoY3VycmVudFRpbGUueCwgY3VycmVudFRpbGUueSArKGN1cnJlbnRUaWxlLmhlaWdodC8yKSwgJ2Jvb20nKTtcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQodGVzdCk7XG4gICAgdGVzdC5hbmdsZSA9IDI3MDtcbiAgICB0ZXN0LmFuY2hvci5zZXQoMC41LDAuNyk7XG4gICAgdGVzdC5hbmltYXRpb25zLmFkZCgnYm9vbScpO1xuICAgIHRlc3QuYW5pbWF0aW9ucy5wbGF5KCdib29tJywgMjAsIGZhbHNlLCB0cnVlKTtcbiAgICBcbiAgfVxuICBcbiAgc3RhcnRHYW1lKCkge1xuICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xuICB9XG5cbiAgXG4gIHNlcnZlckZ1bGwoKSB7XG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdzZXJ2ZXJGdWxsJyk7XG4gIH0gICBcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VwdGlrb247XG4iLCJpbXBvcnQgUmVzb3VyY2VzIGZyb20gJy4uL3ByZWZhYnMvcmVzb3VyY2VzJztcbmltcG9ydCBQZXJzb25uZWwgZnJvbSAnLi4vcHJlZmFicy9wZXJzb25uZWwnO1xuaW1wb3J0IE9yZG5hbmNlIGZyb20gJy4uL3ByZWZhYnMvb3JkbmFuY2UnO1xuaW1wb3J0IENsb25lIGZyb20gJy4uL3ByZWZhYnMvY2xvbmUnOyAvLyBUaGlzIHdpbGwgYmUgaW5jb3Jwb3JhdGVkIGluIHBlcnNvbm5lbFxuXG5jbGFzcyBUZWFtIHtcblxuICAvL2luaXRpYWxpemF0aW9uIGNvZGUgaW4gdGhlIGNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKGdhbWUpIHsgXG4gICAgdGhpcy5yZWMgPSBuZXcgUmVzb3VyY2VzKCk7XG4gICAgdGhpcy5yZWNFbnVtID0gdGhpcy5yZWMucmVzb3VyY2VFbnVtO1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgXG4gICAgdGhpcy5wZXJzb25uZWwgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkR3VubmVycyA9IFtdO1xuICB9XG4gIFxuICByZWZyZXNoKCkge1xuICAgIGZvciAodmFyIGkgaW4gdGhpcy5wZXJzb25uZWwpIHtcbiAgICAgICAgdGhpcy5nYW1lLnNlcHRpa29uLnRpbGVBcnJheVt0aGlzLnBlcnNvbm5lbFtpXS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnhdW3RoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueV0udGlsZU9jY3VwaWVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgXG4gIC8vUmVzb3VyY2UgSW50ZXJmYWNlXG4gIGdldFJlY0NvdW50KHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZWMuZ2V0Q291bnQodHlwZSk7XG4gIH1cbiAgXG4gIGNoZWNrUmVjKHR5cGUsIGNvdW50KSB7XG4gICAgaWYgKHRoaXMuZ2V0UmVjQ291bnQodHlwZSkgPj0gY291bnQpIFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICBleGNoYW5nZVJlYyhjb3N0VHlwZSwgY29zdENvdW50LCB5aWVsZFR5cGUsIHlpZWxkQ291bnQpIHtcbiAgfVxuICBcbiAgYWRkUmVjKHR5cGUsIGNvdW50KSB7XG4gICAgcmV0dXJuIHRoaXMucmVjLmFkZCh0eXBlLCBjb3VudCk7XG4gIH1cbiAgXG4gIHJlbW92ZVJlYyh0eXBlLCBjb3VudCkge1xuICAgIHJldHVybiB0aGlzLnJlYy5yZW1vdmUodHlwZSwgY291bnQpO1xuICB9XG4gIFxuICBhZGRDbG9uZSh4LCB5LCBwcm9wcykge1xuICAgIHZhciBwb2ludCA9IHRoaXMuZ2FtZS5zZXB0aWtvbi50aWxlVG9QaXhlbHMoeCx5KTtcbiAgICB2YXIgY2xvbmUgPSBuZXcgQ2xvbmUodGhpcy5nYW1lLHBvaW50LngscG9pbnQueSk7XG4gICAgY2xvbmUuY3VycmVudFRpbGVDb29yZGluYXRlcy54ID0geDtcbiAgICBjbG9uZS5jdXJyZW50VGlsZUNvb3JkaW5hdGVzLnkgPSB5O1xuICAgIFxuICAgIGZvciAodmFyIGkgaW4gcHJvcHMpIHtcbiAgICAgICAgY2xvbmVbaV0gPSBwcm9wc1tpXTtcbiAgICB9XG4gICAgdGhpcy5wZXJzb25uZWwucHVzaChjbG9uZSk7XG4gICAgdGhpcy5nYW1lLnN0YWdlLmFkZENoaWxkKGNsb25lKTtcbiAgfVxuICBcbiAgZ2V0Q2xvbmUoY29vcmQpIHtcbiAgICBmb3IgKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XG4gICAgICAgIGlmKHRoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueCA9PSBjb29yZC54ICYmIHRoaXMucGVyc29ubmVsW2ldLmN1cnJlbnRUaWxlQ29vcmRpbmF0ZXMueSA9PSBjb29yZC55KXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBlcnNvbm5lbFtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAga2lsbENsb25lKGNvb3JkKSB7XG4gICAgdmFyIGNsb25lID0gdGhpcy5nZXRDbG9uZShjb29yZCk7XG4gICAgdGhpcy5nYW1lLnN0YWdlLnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICBcbiAgICB2YXIgaW5kZXggPSB0aGlzLnBlcnNvbm5lbC5pbmRleE9mKGNsb25lKTtcbiAgICB0aGlzLnBlcnNvbm5lbC5zcGxpY2UoaW5kZXgsMSk7XG4gICAgXG4gICAgY2xvbmUucmVtb3ZlKCk7XG4gIH1cbiAgICBcbiAgb2ZmZXJMZWdhbENsb25lcygpIHtcbiAgICAvLyBPZmZlciBjbG9uZXMgdGhhdCBoYXZlIGxlZ2FsIG1vdmVzXG4gICAgZm9yKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XG4gICAgICAgIHZhciBtb3ZlcyA9IHRoaXMucGVyc29ubmVsW2ldLmdldExlZ2FsTW92ZXMoKTtcblxuICAgICAgICBpZihtb3ZlcyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMucGVyc29ubmVsW2ldLmhpZ2hsaWdodE9uKCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIG9mZmVyR3VubmVycygpIHtcbiAgICAvLyBPZmZlciBndW5uZXIgXG4gICAgdmFyIGd1bm5lckZvdW5kID0gZmFsc2U7XG4gICAgZm9yKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XG4gICAgICAgIGlmKHRoaXMucGVyc29ubmVsW2ldLmlzR3VubmVyKSB7XG4gICAgICAgICAgICBndW5uZXJGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAvL3RoaXMucGVyc29ubmVsW2ldLmhpZ2hsaWdodE9uKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGd1bm5lckZvdW5kO1xuICB9XG4gIFxuICBzZWxlY3RHdW5uZXIoY29vcmRzKSB7XG4gICAgdmFyIGNsb25lID0gdGhpcy5nZXRDbG9uZShjb29yZHMpO1xuICAgIGlmKCFjbG9uZSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmKCFjbG9uZS5pc0d1bm5lcilcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBcbiAgICB2YXIgZXhpc3RpbmdHdW5uZXIgPSB0aGlzLnNlbGVjdGVkR3VubmVycy5pbmRleE9mKGNsb25lKTtcbiAgICBpZihleGlzdGluZ0d1bm5lciA+PSAwKXtcbiAgICAgICAgY2xvbmUuaGlnaGxpZ2h0T2ZmKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzLnNwbGljZShleGlzdGluZ0d1bm5lciwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2xvbmUuaGlnaGxpZ2h0T24oKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMucHVzaChjbG9uZSk7XG4gICAgfVxuICB9XG4gIFxuICBjbGVhckd1bm5lcnMoKSB7XG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLnNlbGVjdGVkR3VubmVycykge1xuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVyc1tpXS5oaWdobGlnaHRPZmYoKTtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMgPSBbXTtcbiAgfVxuICBcbiAgc2VsZWN0Q2xvbmVGb3JNb3ZlKGNvb3JkcykgeyAgICBcbiAgXG4gICAgdmFyIGNsb25lID0gdGhpcy5nZXRDbG9uZShjb29yZHMpO1xuICAgIGlmKCFjbG9uZSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yKHZhciBpIGluIHRoaXMucGVyc29ubmVsKSB7XG4gICAgICAgIHRoaXMucGVyc29ubmVsW2ldLmhpZ2hsaWdodE9mZigpO1xuICAgIH1cbiAgICB0aGlzLmxlZ2FsVGlsZXMgPSBjbG9uZS5nZXRMZWdhbE1vdmVzKCk7XG4gICAgdGhpcy5zZWxlY3RlZENsb25lID0gY2xvbmU7XG4gICAgdGhpcy5nYW1lLnNlcHRpa29uLnNob3dUaWxlcyh0aGlzLmxlZ2FsVGlsZXMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIFxuICBtb3ZlU2VsZWN0ZWRDbG9uZShjb29yZHMpIHtcbiAgICBmb3IodmFyIGkgaW4gdGhpcy5sZWdhbFRpbGVzKSB7XG4gICAgICAgIGlmKHRoaXMubGVnYWxUaWxlc1tpXS50aWxlWCA9PSBjb29yZHMueCAmJiB0aGlzLmxlZ2FsVGlsZXNbaV0udGlsZVkgPT0gY29vcmRzLnkpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDbG9uZS5tb3ZlKGNvb3Jkcyk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZWxlY3RlZENsb25lO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMubGVnYWxUaWxlcztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZWFtOyIsImNsYXNzIE9yZG5hbmNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIHgsIHksIHV1aWQpIHtcbiAgICAgICAgdGhpcy50eXBlRW51bSA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICAgICAgU0hJRUxEOiAwLFxuICAgICAgICAgICAgQklPRFJPTkU6IDEsXG4gICAgICAgICAgICBTQVRFTExJVEU6IDIsXG4gICAgICAgICAgICBST0NLRVQ6IDNcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVFbnVtW3R5cGUudG9VcHBlckNhc2UoKV07XG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5tb2R1bGUuZXhwb3J0cy5PcmRuYW5jZSA9IE9yZG5hbmNlO1xuIiwiY2xhc3MgUGVyc29ubmVsIHtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIHgsIHksIHV1aWQpIHtcbiAgICAgICAgdGhpcy50eXBlRW51bSA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICAgICAgQ0xPTkU6IDAsXG4gICAgICAgICAgICBCSU9EUk9ORTogMVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgICAgIHRoaXMudW5kZXJFc3Bpb25hZ2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0d1bm5lciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGVFbnVtW3R5cGUudG9VcHBlckNhc2UoKV07XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Jpb2Ryb25lJzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Nsb25lJzpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlRW51bVt0eXBlXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBtb3ZlKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzLlBlcnNvbm5lbCA9IFBlcnNvbm5lbDtcbiIsInZhciBQZXJzb25uZWwgPSByZXF1aXJlKCcuL3BlcnNvbm5lbCcpLlBlcnNvbm5lbDtcbnZhciBSZXNvdXJjZSA9IHJlcXVpcmUoJy4vcmVzb3VyY2UnKS5SZXNvdXJjZTtcbnZhciBPcmRuYW5jZSA9IHJlcXVpcmUoJy4vb3JkbmFuY2UnKS5PcmRuYW5jZTtcblxuXG5jbGFzcyBQbGF5ZXIge1xuXG4gICAgY29uc3RydWN0b3Ioc29ja2V0SUQsIGlkLCB1dWlkKSB7IFxuICAgICAgICB0aGlzLnNvY2tldElEID0gc29ja2V0SUQ7XG4gICAgICAgIHRoaXMuaWQgPSBpZDsgLy9wbGF5ZXIgMSBvciBwbGF5ZXIgMjsgdGhpcyB3aWxsIGRldGVybWluZSB0aGUgc2lkZSBvZiB0aGUgYm9hcmQgYXQgY2xpZW50IHN0YXJ0LlxuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgICAgICB0aGlzLnBlcnNvbm5lbEFycmF5ID0gW107XG4gICAgICAgIHRoaXMucmVzb3VyY2VBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLm9yZG5hbmNlQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5yZWFkeVRvU3RhcnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGFydGluZ0Nsb25lQ291bnQgPSA1O1xuICAgICAgICB0aGlzLmFybXNBcnJheSA9IFtdO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGVkR3VubmVycyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRMZWdhbFBpZWNlcyA9IFtdO1xuXG4gICAgICAgIHRoaXMuaW5pdFJlc291cmNlcygpO1xuICAgIH1cblxuICAgIGNsZWFyUXVldWVzKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50TGVnYWxQaWVjZXMgPSBbXTtcbiAgICB9XG4gICAgICAgIFxuICAgIGFkZFBlcnNvbm5lbCh0eXBlLCB4LCB5LCB1dWlkKSB7XG4gICAgICAgIGlmKHR5cGUgPT0gXCJjbG9uZVwiICYmIHRoaXMuZ2V0UGVyc29ubmVsKHR5cGUpLmxlbmd0aCA8IDEwKSB7XG4gICAgICAgICAgICB2YXIgcGVyc29ubmVsID0gbmV3IFBlcnNvbm5lbCgnY2xvbmUnLCB4LCB5LCB1dWlkKTtcbiAgICAgICAgICAgIHRoaXMucGVyc29ubmVsQXJyYXkucHVzaChwZXJzb25uZWwpO1xuICAgICAgICAgICAgcmV0dXJuIHBlcnNvbm5lbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVtb3ZlUGVyc29ubmVsKHBlcnNvbm5lbCwgcHVyZ2VBbGwpIHtcbiAgICAgICAgaWYgKHB1cmdlQWxsID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnBlcnNvbm5lbEFycmF5ID0gW107XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQZXJzb25uZWwodHlwZSkge1xuICAgICAgICB2YXIgcmV0dXJuQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnBlcnNvbm5lbEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMucGVyc29ubmVsQXJyYXlbaV0udHlwZSA9PT0gdGhpcy5wZXJzb25uZWxBcnJheVtpXS50eXBlRW51bVt0eXBlLnRvVXBwZXJDYXNlKCldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLnBlcnNvbm5lbEFycmF5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XG4gICAgfVxuXG4gICAgZ2V0UGVyc29ubmVsQnlVVUlEKHV1aWQpIHtcbiAgICAgICAgdmFyIHBlcnNvbm5lbCA9IHRoaXMuZ2V0UGVyc29ubmVsKCk7XG4gICAgICAgIGZvciAodmFyIGkgaW4gcGVyc29ubmVsKSB7XG4gICAgICAgICAgICBpZiAocGVyc29ubmVsW2ldLnV1aWQgPT0gdXVpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwZXJzb25uZWxbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldFBlcnNvbm5lbEJ5UG9pbnQocG9pbnQpIHtcbiAgICAgICAgdmFyIHBlcnNvbm5lbHMgPSB0aGlzLmdldFBlcnNvbm5lbCgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBlcnNvbm5lbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwZXJzb25uZWxzW2ldLnggPT0gcG9pbnQueCAmJiBwZXJzb25uZWxzW2ldLnkgPT0gcG9pbnQueSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwZXJzb25uZWxzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjaGVja1BlcnNvbm5lbE1vdmUocGVyc29ubmVsLCBwb2ludCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY3VycmVudExlZ2FsUGllY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocGVyc29ubmVsLnggPT0gdGhpcy5jdXJyZW50TGVnYWxQaWVjZXNbaV0ub3JpZ2luLnggJiYgcGVyc29ubmVsLnkgPT0gdGhpcy5jdXJyZW50TGVnYWxQaWVjZXNbaV0ub3JpZ2luLnkpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBvaW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuY3VycmVudExlZ2FsUGllY2VzW2ldLm1vdmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TGVnYWxQaWVjZXNbaV0ubW92ZXNbal0ueCA9PSBwb2ludC54ICYmIHRoaXMuY3VycmVudExlZ2FsUGllY2VzW2ldLm1vdmVzW2pdLnkgPT0gcG9pbnQueSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYWRkT3JkbmFuY2UodHlwZSwgcG9pbnQsIHV1aWQpIHtcbiAgICAgICAgdmFyIG9yZCA9IG5ldyBPcmRuYW5jZSh0eXBlLCBwb2ludC54LCBwb2ludC55LCB1dWlkKTtcbiAgICAgICAgdGhpcy5vcmRuYW5jZUFycmF5LnB1c2gob3JkKTtcbiAgICAgICAgcmV0dXJuIG9yZDtcbiAgICB9XG5cbiAgICBwdXJnZUxlZ2FsUGllY2VzKHBlcnNvbm5lbCwgcHVyZ2VBbGxNYXRjaGluZ1R5cGVzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcGVyc29ubmVsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TGVnYWxQaWVjZXMgPSBbXTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaSA9IHRoaXMuY3VycmVudExlZ2FsUGllY2VzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICAgaS0tKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TGVnYWxQaWVjZXNbaV0udHlwZSA9PT0gcGVyc29ubmVsLnR5cGUgJiYgcHVyZ2VBbGxNYXRjaGluZ1R5cGVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGVnYWxQaWVjZXMuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRHdW5uZXJzKCkge1xuICAgICAgICB2YXIgcmV0dXJuQXJyYXkgPSBbXTtcbiAgICAgICAgdmFyIGNsb25lcyA9IHRoaXMuZ2V0UGVyc29ubmVsKCdjbG9uZScpO1xuICAgICAgICBmb3IgKHZhciBpIGluIGNsb25lcykge1xuICAgICAgICAgICAgaWYgKGNsb25lc1tpXS5pc0d1bm5lcikge1xuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2goY2xvbmVzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XG4gICAgfVxuXG4gICAgZ2V0U2VsZWN0ZWRHdW5uZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEd1bm5lcnM7XG4gICAgfVxuXG4gICAgY2xlYXJTZWxlY3RlZEd1bm5lcnMoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzID0gW107XG4gICAgfVxuXG4gICAgdG9nZ2xlR3VubmVyU2VsZWN0aW9uKGd1bm5lcikge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEd1bm5lcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzLnB1c2goZ3VubmVyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0ZWRHdW5uZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoZ3VubmVyKSA9PT0gSlNPTi5zdHJpbmdpZnkodGhpcy5zZWxlY3RlZEd1bm5lcnNbaV0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEd1bm5lcnMuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRHdW5uZXJzLnB1c2goZ3VubmVyKTtcbiAgICB9XG5cbiAgICBnZXRPcmRuYW5jZSh0eXBlKSB7XG4gICAgICAgIHZhciByZXR1cm5BcnJheSA9IFtdO1xuICAgICAgICBmb3IodmFyIGkgaW4gdGhpcy5vcmRuYW5jZUFycmF5KSB7XG4gICAgICAgICAgICBpZih0eXBlID09PSBudWxsIHx8IHRoaXMub3JkbmFuY2VBcnJheVtpXS50eXBlID09PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybkFycmF5LnB1c2godGhpcy5vcmRuYW5jZUFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKHRhcmdldCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xuICAgIH1cblxuICAgIGdldE9yZG5hbmNlQnlQb2ludChwb2ludCkge1xuICAgICAgICB2YXIgb3JkbmFuY2VzID0gdGhpcy5nZXRPcmRuYW5jZSgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9yZG5hbmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG9yZG5hbmNlc1tpXS54ID09IHBvaW50LnggJiYgb3JkbmFuY2VzW2ldLnkgPT0gcG9pbnQueSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcmRuYW5jZXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG1vdmVPcmRuYW5jZShjb3VudCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub3JkbmFuY2VBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3JkbmFuY2VBcnJheVtpXS50eXBlID09IFwiYmlvZHJvbmVcIiB8fCB0aGlzLm9yZG5hbmNlQXJyYXlbaV0udHlwZSA9PSBcInJvY2tldFwiIHx8IHRoaXMub3JkbmFuY2VBcnJheVtpXS50eXBlID09IFwibnVrZVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaWQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZG5hbmNlQXJyYXlbaV0ueCArPSBjb3VudDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9yZG5hbmNlQXJyYXlbaV0ueCAtPSBjb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMub3JkbmFuY2VBcnJheTtcbiAgICB9XG5cbiAgICBpbml0UmVzb3VyY2VzKCkge1xuICAgICAgICB2YXIgcmVjQXJyYXkgPSBbXG4gICAgICAgICAgICAnZW5lcmd5MScsIFxuICAgICAgICAgICAgJ2VuZXJneTInLFxuICAgICAgICAgICAgJ294eWdlbicsXG4gICAgICAgICAgICAnbWV0YWwnLFxuICAgICAgICAgICAgJ2Jpb2Ryb25lJyxcbiAgICAgICAgICAgICdyb2NrZXQnLFxuICAgICAgICAgICAgJ3VyYW5pdW0nLFxuICAgICAgICAgICAgJ2Jpb21hc3MnLFxuICAgICAgICAgICAgJ251a2UnXG4gICAgICAgICAgICBdO1xuICAgICAgICB2YXIgcmVjID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSBpbiByZWNBcnJheSkge1xuICAgICAgICAgICAgcmVjID0gbmV3IFJlc291cmNlKHJlY0FycmF5W2ldKTtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VBcnJheVtyZWNBcnJheVtpXV0gPSBbXTtcbiAgICAgICAgICAgIGlmIChyZWNBcnJheVtpXSAhPSBcIm51a2VcIikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGNvdW50ID0gMDsgY291bnQgPCAxMDsgY291bnQrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPCA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlQXJyYXlbcmVjQXJyYXlbaV1dLnB1c2gocmVjKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2VBcnJheVtyZWNBcnJheVtpXV0ucHVzaChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFJlc291cmNlQ291bnQodHlwZSkge1xuICAgICAgICB2YXIgZm91bmRSZXNvdXJjZXMgPSAwO1xuICAgICAgICB2YXIgY3VycmVudFJlc291cmNlU2xvdCA9IDk7XG5cbiAgICAgICAgaWYgKHR5cGUgPT0gXCJlbmVyZ3lcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVzb3VyY2VDb3VudCgnZW5lcmd5MScpICsgdGhpcy5nZXRSZXNvdXJjZUNvdW50KCdlbmVyZ3kyJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PSBcIm51a2VcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXS5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoY3VycmVudFJlc291cmNlU2xvdCA+PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0uZGFtYWdlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZFJlc291cmNlcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm91bmRSZXNvdXJjZXMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRSZXNvdXJjZVNsb3QtLTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm91bmRSZXNvdXJjZXM7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2tSZXNvdXJjZSBkZWZhdWx0cyB0byBhc3N1bWUgeW91IGFyZSBjaGVja2luZyB0byBzcGVuZCBhIHJlc291cmNlLiBTZXQgXCJhY2NlcHRcIiB0byB0cnVlIGlmIHlvdSBhcmUgY2hlY2tpbmcgdG8gcmVjZWl2ZSBhIHJlc291cmNlXG4gICAgY2hlY2tSZXNvdXJjZSh0eXBlLCBjb3VudCwgYWNjZXB0KSB7XG4gICAgICAgIHZhciBjdXJyZW50UmVzb3VyY2VTbG90ID0gOTtcbiAgICAgICAgdmFyIGZvdW5kUmVzb3VyY2VzID0gMDtcbiAgICAgICAgdmFyIHJlc291cmNlU2xvdHMgPSAwO1xuXG4gICAgICAgIGlmICh0eXBlID09IFwibnVrZVwiKSB7XG4gICAgICAgICAgICBpZiAoYWNjZXB0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlc291cmNlQXJyYXlbdHlwZV0ubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodHlwZSA9PSBcImVuZXJneVwiKSB7XG4gICAgICAgICAgICB2YXIgZTEgPSB0aGlzLmNoZWNrUmVzb3VyY2UoXCJlbmVyZ3kxXCIsIGNvdW50LCBhY2NlcHQpO1xuICAgICAgICAgICAgdmFyIGUyID0gdGhpcy5jaGVja1Jlc291cmNlKFwiZW5lcmd5MlwiLCBjb3VudCwgYWNjZXB0KTtcblxuICAgICAgICAgICAgaWYoZTEgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZTE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUyID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoY3VycmVudFJlc291cmNlU2xvdCA+PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjY2VwdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZVNsb3RzKys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNvdXJjZVNsb3RzID09IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VTbG90LS07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXVtjdXJyZW50UmVzb3VyY2VTbG90XS5kYW1hZ2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYoYWNjZXB0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3VuZFJlc291cmNlcysrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihhY2NlcHQgIT09IGZhbHNlICYmIGZvdW5kUmVzb3VyY2VzID09PSBjb3VudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzcGVuZFJlc291cmNlKHR5cGUsIGNvdW50KSB7XG4gICAgICAgIHZhciBjdXJyZW50UmVzb3VyY2VTbG90ID0gOTtcbiAgICAgICAgdmFyIG9yaWdpbmFsQ291bnQgPSBjb3VudDtcblxuICAgICAgICBpZiAodHlwZSA9PSBcImVuZXJneVwiKSB7XG4gICAgICAgICAgICB2YXIgc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICAgICAgd2hpbGUgKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLnNwZW5kUmVzb3VyY2UoXCJlbmVyZ3kxXCIsIDEpO1xuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLnNwZW5kUmVzb3VyY2UoXCJlbmVyZ3kyXCIsIDEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3VjY2VzcyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxDb3VudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChjdXJyZW50UmVzb3VyY2VTbG90ID49IDAgJiYgY291bnQgPiAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0uZGFtYWdlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5lcnJvcihcIlRyaWVkIHRvIHNwZW5kIHJlc291cmNlcyB5b3UgZG9uJ3QgaGF2ZSFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdF0gPSBudWxsO1xuICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3JpZ2luYWxDb3VudDtcbiAgICB9XG5cbiAgICBhY2NlcHRSZXNvdXJjZSh0eXBlLCBjb3VudCkge1xuICAgICAgICB2YXIgcmVzb3VyY2UgPSBudWxsO1xuICAgICAgICB2YXIgY3VycmVudFJlc291cmNlU2xvdCA9IDk7XG4gICAgICAgIHZhciBzZWFyY2hpbmcgPSB0cnVlO1xuICAgICAgICB2YXIgb3JpZ2luYWxDb3VudCA9IGNvdW50O1xuXG4gICAgICAgIGlmICh0eXBlID09IFwibnVrZVwiKSB7XG4gICAgICAgICAgICB0aGlzLnJlc291cmNlQXJyYXlbdHlwZV0ucHVzaChuZXcgUmVzb3VyY2UodHlwZSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXS5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PSBcImVuZXJneVwiKSB7XG4gICAgICAgICAgICB2YXIgc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICAgICAgd2hpbGUgKGNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLmFjY2VwdFJlc291cmNlKFwiZW5lcmd5MVwiLCAxKTtcbiAgICAgICAgICAgICAgICBpZiAoc3VjY2VzcyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gdGhpcy5hY2NlcHRSZXNvdXJjZShcImVuZXJneTJcIiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbENvdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIGlmIChzZWFyY2hpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAvLyBwZWVrIGF0IG5leHQgcmVzb3VyY2VcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJubyByb29tIGZvciB0aGlzIHJlc291cmNlIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlc291cmNlU2xvdCA9PT0gMCB8fCB0aGlzLnJlc291cmNlQXJyYXlbdHlwZV1bY3VycmVudFJlc291cmNlU2xvdCAtIDFdICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdC0tO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50UmVzb3VyY2VTbG90ICsgMSA+IHRoaXMucmVzb3VyY2VBcnJheVt0eXBlXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsQ291bnQgLSBjb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UgPSBuZXcgUmVzb3VyY2UodHlwZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZUFycmF5W3R5cGVdW2N1cnJlbnRSZXNvdXJjZVNsb3RdID0gcmVzb3VyY2U7XG4gICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICBpZihjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxDb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudFJlc291cmNlU2xvdCsrO1xuICAgICAgICAgfVxuICAgICAgICAgICAgaWYoY3VycmVudFJlc291cmNlU2xvdCA8IDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiT3V0IG9mIGJvdW5kcy4gTm8gZW1wdHkgcmVzb3VydWNlIHNsb3RzIGZvdW5kLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzLlBsYXllciA9IFBsYXllcjtcbiIsImNsYXNzIFJlc291cmNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cy5SZXNvdXJjZSA9IFJlc291cmNlO1xuIiwiLy8gIFRoaXMgaXMgdGhlIHNlcnZlci1zaWRlIHJ1bGUgZW5naW5lLiBJdCBwcm9jZXNzZXMgdGhlIHJ1bGVzIGFuZCBzdGF0ZXMgYW5kIHRoZW4gZW1pdHMgZGlyZWN0aW9ucyBiYWNrIHRvIHRoZSBjbGllbnQuXG5cbnZhciBQbGF5ZXIgPSByZXF1aXJlKCcuL3BsYXllcicpLlBsYXllcjtcbnZhciB1dWlkID0gcmVxdWlyZSgndXVpZC92NCcpO1xuXG5jbGFzcyBTZXB0aWtvbiB7XG4gICAgXG5cdGNvbnN0cnVjdG9yKGlvKSB7XG4gICAgICAgIHRoaXMuaW8gPSBpbztcbiAgICAgICAgdGhpcy5sYXN0UGxheWVySUQgPSAwO1xuICAgICAgICB0aGlzLnBsYXllcnNBcnJheSA9IFtdO1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IDA7XG4gICAgICAgIHRoaXMudHVyblN0YXRlID0gMDtcbiAgICAgICAgdGhpcy51dWlkID0gcmVxdWlyZSgndXVpZC92NCcpKCk7XG5cbiAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmN1cnJlbnREaWNlVmFsdWUgPSAwO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5nYW1lU3RhdGVFbnVtID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgICAgICBTRVRVUDogMCxcbiAgICAgICAgICAgIEdBTUU6IDEsIFxuICAgICAgICAgICAgUEFVU0U6IDIsXG4gICAgICAgICAgICBHQU1FT1ZFUjogMyxcbiAgICAgICAgICAgIFNFUlZFUkZVTEw6IDRcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnR1cm5TdGF0ZUVudW0gPSBPYmplY3QuZnJlZXplKHtcbiAgICAgICAgICAgIFJPTEw6IDAsICAgIC8vIExpdGVyYWxseSB0aGUgYWN0IG9mIHJvbGxpbmcgdGhlIGRpZVxuICAgICAgICAgICAgTU9WRTogMSwgICAgLy8gU2VsZWN0aW5nIHRoZSBjbG9uZSBhbmQgdGhlaXIgdGFyZ2V0IHNwYWNlXG4gICAgICAgICAgICBBQ1RJT046IDIsICAvLyBUcmlnZ2VyIHRpbGUgIFxuICAgICAgICAgICAgVEFSR0VUUzogMywgLy8gQXNzaWduIHRhcmdldChzKSAoaWUuIC0gZ3VubmVyLCB0aWxlLCBlc3Bpb25hZ2VkIGNsb25lKSBcbiAgICAgICAgICAgIEJJT0RST05FOiA0LC8vIE1vdmUgYmlvZHJvbmUocylcbiAgICAgICAgICAgIE9SRE5BTkNFOiA1LC8vIG1vdmUgb3JkbmFuY2UgYWNjb3JkaW5nIHRvIGRpY2Ugcm9sbCAodGhpcyBtYXkgbm90IHJlcXVpcmUgYSBzdGF0ZS4uLilcbiAgICAgICAgICAgIEVORDogNiAgICAgIC8vIGFzc2VzcyBvcmRuYW5jZSBkYW1hZ2UgYW5kIGNsb25lL2Jpb2Ryb25lIGtpbGxzLiBBc3Nlc3MgdmljdG9yeSBjb25kaXRpb25zICh0aGlzIG1heSBub3QgcmVxdWlyZSBhIHN0YXRlLi4uKVxuICAgICAgICB9KTsgIFxuXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uRW51bSA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICAgICAgTk9SVEg6MSxcbiAgICAgICAgICAgIEVBU1Q6MixcbiAgICAgICAgICAgIFNPVVRIOjQsXG4gICAgICAgICAgICBXRVNUOjhcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50aWxlQ29sdW1ucyA9IDMxO1xuICAgICAgICB0aGlzLnRpbGVSb3dzID0gMjE7XG5cbiAgICAgICAgdGhpcy50aWxlQXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5jcmVhdGVUaWxlQXJyYXkoKTsgXG5cbiAgICAgICAgdGhpcy5xdWV1ZWRUaWxlID0gbnVsbDtcbiAgICAgICAgdGhpcy50aWxlc1JlcGFpcmVkVGhpc1R1cm4gPSAwO1xuICAgICAgICB0aGlzLmF2YWlsYWJsZUNsb25lc1RvQWRkID0gMDtcblx0fVxuXG4gICAgY2xpY2tlZChkYXRhKSB7XG4gICAgICAgIFxuICAgICAgICAvLyBQcm9jZXNzIHRoZSBjbGljayBmcm9tIHRoZSBjbGllbnQuIFxuICAgICAgICAvLyBDbGllbnQgc2hvdWxkIGRvIE5PIHJ1bGUgcHJvY2Vzc2luZy4gUGFzcyB0aGUgY2xpY2sgZnJvbSBjbGllbnQgdG8gc2VydmVyOyBwcm9jZXNzIHRoZSBkYXRhOyB0ZWxsIHRoZSBjbGllbnQgd2hhdCB0byBkby5cbiAgICAgICAgLy8gQmFzaWNhbGx5LCBjaGVjayBnYW1lIHN0YXRlIGFuZCB0dXJuIHN0YXRlLlxuICAgICAgICBcbiAgICAgICAgc3dpdGNoICh0aGlzLmdhbWVTdGF0ZSkge1xuICAgICAgICBcbiAgICAgICAgICAgIGNhc2UgdGhpcy5nYW1lU3RhdGVFbnVtLlNFVFVQOlxuXG4gICAgICAgICAgICAgICAgLy8gUGxheWVyIGlzIHBsYWNpbmcgbmV3IGNsb25lcyBpbiB0aGUgZmllbGQuXG4gICAgICAgICAgICAgICAgdmFyIHBsYXllciA9IHRoaXMuZ2V0UGxheWVyQnlTb2NrZXRJRChkYXRhLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICB2YXIgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYocGxheWVyLmdldFBlcnNvbm5lbCgnY2xvbmUnKS5sZW5ndGggPCBwbGF5ZXIuc3RhcnRpbmdDbG9uZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0aGlzLnBsYWNlQ2xvbmUocGxheWVyLCBkYXRhLngsIGRhdGEueSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgb24gcGVyc29ubmVsIGNvdW50LiBJZiBwZXJzb25uZWwgaXMgYXQgdGhlIHN0YXJ0IGNvdW50LCBzZW5kIG1vZGFsIHRvIHN0YXJ0IGdhbWUuXG4gICAgICAgICAgICAgICAgICAgIGlmKHBsYXllci5nZXRQZXJzb25uZWwoJ2Nsb25lJykubGVuZ3RoID09IHBsYXllci5zdGFydGluZ0Nsb25lQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgncmVxdWVzdCcsIHtjYWxsYmFjazpcIm1vZGFsXCIsIGRldGFpbHM6IHt0eXBlOlwiYXNrU3RhcnRcIn19LCBwbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FzZSB0aGlzLmdhbWVTdGF0ZUVudW0uR0FNRTpcblxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZFBlcnNvbm5lbCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLnR1cm5TdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIHRoaXMudHVyblN0YXRlRW51bS5NT1ZFOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgY2FuIG1vdmUgb25lIGNsb25lIHBlciB0dXJuLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm90ZTogVGhlIGFycmF5IG9mIGxlZ2FsIHBlcnNvbm5lbCAoaW4gdGhpcy5hY3RpdmVQbGF5ZXIpIHdhcyBzZW50IGJ5IHJvbGxEaWNlKCkuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAnaGlkZVRpbGVzJywgZGV0YWlsczogbnVsbH0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQZXJzb25uZWwgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRQZXJzb25uZWxCeVBvaW50KHt4OmRhdGEueCwgeTpkYXRhLnl9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkUGVyc29ubmVsICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsb25lIHdhcyBjbGlja2VkLCBzbzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNMZWdhbFBlcnNvbm5lbCA9IHRoaXMuYWN0aXZlUGxheWVyLmNoZWNrUGVyc29ubmVsTW92ZShzZWxlY3RlZFBlcnNvbm5lbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogSWYgcGVyc29ubmVsIGlzIGEgXCJiaW9kcm9uZVwiIHR5cGUgQU5EIGNsb25lcyByZW1haW4gaW4gdGhlIFBsYXllci5jdXJyZW50bGVnYWxwaWVjZXMgYXJyYXksIGVtaXQgbW9kYWwgd2FybmluZyB0byBwbGF5ZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xvbmUgbXVzdCBtb3ZlIGFuZCB0aWxlIG11c3QgYmUgdHJpZ2dlcmVkIHByaW9yIHRvIGJpb2Ryb25lIG1vdmVtZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0xlZ2FsUGVyc29ubmVsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlID0gc2VsZWN0ZWRQZXJzb25uZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAtIFNob3cgaGlnaGxpZ2h0IHNlbGVjdGVkIHBlcnNvbm5lbCBpbiBjbGllbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIC0gU2hvdyBsZWdhbCBtb3ZlcyBvZiB0aGUgc2VsZWN0ZWQgcGVyc29ubmVsIGluIGEgZGlmZmVyZW50IGNvbG9yXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBvaW50QXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRBcnJheSA9IHRoaXMuZ2V0TGVnYWxNb3ZlcyhzZWxlY3RlZFBlcnNvbm5lbCwgdGhpcy5jdXJyZW50RGljZVZhbHVlLCB7eDpzZWxlY3RlZFBlcnNvbm5lbC54LCB5OnNlbGVjdGVkUGVyc29ubmVsLnl9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdzaG93VGlsZXMnLCBkZXRhaWxzOiB7eDpkYXRhLngsIHk6ZGF0YS55fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogU2hvdyBpbiBkaWZmZXJlbnQgY29sb3IuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdzaG93VGlsZXMnLCBkZXRhaWxzOiBwb2ludEFycmF5fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNMZWdhbE1vdmUgPSB0aGlzLmFjdGl2ZVBsYXllci5jaGVja1BlcnNvbm5lbE1vdmUodGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUse3g6ZGF0YS54LCB5OmRhdGEueX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0xlZ2FsTW92ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVG9nZ2xlIGJhY2sgdG8gaGlnaGxpZ2h0aW5nIHRoZSBwZXJzb25uZWwgd2l0aCBsZWdhbCBtb3Zlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBlbWl0IHNvbWV0aGluZyB0byBzaG93IGNsb25lcyB0byBjbGllbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdzaG93VGlsZXMnLCBkZXRhaWxzOiB7fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3ZlIHRoZSBwZXJzb25uZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUubW92ZShkYXRhLngsIGRhdGEueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAnbW92ZVBlcnNvbm5lbCcsIGRldGFpbHM6IHt1dWlkOnRoaXMuYWN0aXZlUGxheWVyLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlLnV1aWQsIHg6ZGF0YS54LCB5OmRhdGEueX19LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgndXBkYXRlJywge3R5cGU6XCJwZXJzb25uZWxcIiwgZGV0YWlsczoge3V1aWQ6dGhpcy5hY3RpdmVQbGF5ZXIuc2VsZWN0ZWRQZXJzb25uZWxUb01vdmUudXVpZCwgeDpkYXRhLngsIHk6ZGF0YS55fX0sIHRoaXMuZ2V0UGxheWVyT3Bwb25lbnQodGhpcy5hY3RpdmVQbGF5ZXIpLnNvY2tldElEKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xlYXIgbW92ZWQgcGVyc29ubmVsIGZyb20gdGhlIHBsYXllciBhcnJheS4gSWYgbW92ZWQgcGVyc29ubmVsIHdhcyBhIGNsb25lLCByZW1vdmUgQUxMIGNsb25lcyBmcm9tIGFycmF5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllci5wdXJnZUxlZ2FsUGllY2VzKHRoaXMuYWN0aXZlUGxheWVyLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlLCB0cnVlKTsgLy8gMm5kIGFyZzogdHJ1ZSBpcyBwYXNzZWQgZm9yIGNsb25lczsgbnVsbCBmb3IgYmlvZHJvbmVzLlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHVyblN0YXRlKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHRyaWdnZXIgdGlsZSBhbmQgZW1pdCBiYXR0bGUgdGFyZ2V0cyAoZ3VubmVycywgZXRjKSB0byBQbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVRpbGUoe3g6ZGF0YS54LCB5OmRhdGEueX0pOyAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBpZiB0aWxlIGlzIHByb2R1Y3Rpb24sIHN1cmZhY2UsIG9yIGFybW9yeTsgY2hlY2sgZm9yIGJpb2Ryb25lcyBhbmQgbW92ZSBvcmRuYW5jZSwgdGhlbiAoaWYgbm9uZSBhcmUgZm91bmQpIGNoYW5nZSBwbGF5ZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGlsZSA9IHRoaXMuZ2V0VGlsZShkYXRhLngsIGRhdGEueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdGlsZS50eXBlID09IFwicHJvZHVjdGlvblwiICB8fCB0aWxlLnR5cGUgPT0gXCJzdXJmYWNlXCIgfHwgdGlsZS50eXBlID09IFwiYXJtb3J5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aWxlLm5hbWUgPT0gXCJwcm9kUmVwYWlyXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVldWVkVGlsZSA9IHRpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbGUubmFtZSA9PSBcImNoZW1pY2FsUmVhY3RvclwiIHx8IHRpbGUubmFtZSA9PSBcImNoZW1pY2FsUmVhY3RvclR3b1wiIHx8IHRpbGUubmFtZSA9PSBcImFpckZpbHRlclwiICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVldWVkVGlsZSA9IHRpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbCgnYmlvZHJvbmUnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogc2VuZCBiaW9kcm9uZSBhcnJheSB0byBjbGllbnQgZm9yIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5nZXRPcmRuYW5jZSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBtb3ZlIG9yZG5hbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3RpdmVQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLnNlbGVjdGVkUGVyc29ubmVsVG9Nb3ZlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uQUNUSU9OOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgd2lsbCBkZXNpZ25hdGUgZ3VubmVyKHMpIGZvciBmaXJpbmcgYW5kL29yIGFkZGl0aW9uYWwgdGFyZ2V0cywgZGVwZW5kaW5nIG9uIHRoZSBiYXR0bGUgdGlsZSB0eXBlLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGxheWVyIHdpbGwgY29uZmlybSBtb3ZlbWVudCBzZWxlY3Rpb25zIHdpdGggR08hICh1bmxlc3MgcmVwYWlyIG9yIGNvdW50ZXIgZXNwaW9uYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXJyYXkgb2YgZWxpZ2libGUgZ3VubmVycyBzZW50IHZpYSBhY3RpdmF0ZVRpbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVtaXQgYXJyYXkgb2YgZWxpZ2libGUgZ3VubmVycyBhbmQgbnVtYmVyIG9mIHNlbGVjdGFibGUgZ3VubmVycyB0byBQbGF5ZXIuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3Rpb25UaWxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5xdWV1ZWRUaWxlLm5hbWUgPT0gXCJjaGVtaWNhbFJlYWN0b3JcIiB8fCB0aGlzLnF1ZXVlZFRpbGUubmFtZSA9PSBcImNoZW1pY2FsUmVhY3RvclR3b1wiIHx8IHRoaXMucXVldWVkVGlsZS5uYW1lID09IFwiYWlyRmlsdGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25UaWxlID0gdGhpcy5nZXRUaWxlKGRhdGEueCwgZGF0YS55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uVGlsZS5uYW1lID09IFwibG9ja1wiICYmIGFjdGlvblRpbGUuZGFtYWdlZCA9PT0gZmFsc2UgJiYgYWN0aW9uVGlsZS5vY2N1cGllZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFjZUNsb25lKHRoaXMuYWN0aXZlUGxheWVyLCBkYXRhLngsIGRhdGEueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlQ2xvbmVzVG9BZGQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXZhaWxhYmxlQ2xvbmVzVG9BZGQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmdldFBlcnNvbm5lbCgnYmlvZHJvbmVzJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogc2VuZCBiaW9kcm9uZSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuZ2V0T3JkbmFuY2UoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBNb3ZlIG9yZG5hbmNlIGFuZCBjaGVjayBmb3IgZGFtYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3RpdmVQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5xdWV1ZWRUaWxlLm5hbWUgPT0gXCJjb3VudGVyRXNwaW9uYWdlXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogc3BlY2lhbCBjYXNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnF1ZXVlZFRpbGUubmFtZSA9PSBcInJlcGFpclwiIHx8IHRoaXMucXVldWVkVGlsZS5uYW1lID09IFwicmVwYWlyVHdvXCIgfHwgdGhpcy5xdWV1ZWRUaWxlLm5hbWUgPT0gXCJwcm9kUmVwYWlyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBTcGVjaWFsIGNhc2VzLiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25UaWxlID0gdGhpcy5nZXRUaWxlKGRhdGEueCwgZGF0YS55KS5kYW1hZ2VkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb25UaWxlLmRhbWFnZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uVGlsZS5kYW1hZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlc1JlcGFpcmVkVGhpc1R1cm4rKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazogJ3JlcGFpclRpbGUnLCBkZXRhaWxzOiB7eDpkYXRhLngsIHk6ZGF0YS55fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlc1JlcGFpcmVkVGhpc1R1cm4gPT0gMSkgeyAgLy8gVE9ETzogY2hlY2sgZm9yIHJlcGFpclR3b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVzUmVwYWlyZWRUaGlzVHVybiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5nZXRQZXJzb25uZWwoJ2Jpb2Ryb25lcycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHNlbmQgYmlvZHJvbmUgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmdldE9yZG5hbmNlKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogTW92ZSBvcmRuYW5jZSBhbmQgY2hlY2sgZm9yIGRhbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQWN0aXZlUGxheWVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUGVyc29ubmVsID0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UGVyc29ubmVsQnlQb2ludCh7eDpkYXRhLngsIHk6ZGF0YS55fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkUGVyc29ubmVsICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIudG9nZ2xlR3VubmVyU2VsZWN0aW9uKHNlbGVjdGVkUGVyc29ubmVsKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdzaG93VGlsZXMnLCBkZXRhaWxzOiB7eDpkYXRhLngsIHk6ZGF0YS55fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAnaGlkZVRpbGVzJywgZGV0YWlsczoge3g6ZGF0YS54LCB5OmRhdGEueX19LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLlRBUkdFVFM6XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBsYXllciB3aWxsIGNob29zZSBhZGRpdGlvbmFsIHRhcmdldHMgaWYgcmVxdWlyZWQgYnkgdGhlIHRpbGUuIEVzcG9pbmFnZSwgZm9yIGluc3RhbmNlLCByZXF1aXJlcyBhIGd1bm5lciBhbmQgYW4gZW5lbXkgY2xvbmUgaW4gdGhlIHNlbGVjdGVkIGd1bm5lcidzIGxpbmUgb2YgZmlyZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBsYXllciB3aWxsIGNvbmZpcm0gdGFyZ2V0cyB3aXRoIEdPIVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRhcmdldCBxdWV1ZWQhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uT1JETkFOQ0U6XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLkVORDpcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQW55IHBvc3QtdHVybiBwcm9jZXNzaW5nIGNhbiBoYXBwZW4gaGVyZS4gT3RoZXJ3aXNlLCB0aGUgdHVybiBtYXkgYWxyZWFkeSBiZSBvdmVyLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR1cm5TdGF0ZSA9IHRoaXMudHVyblN0YXRlRW51bS5ST0xMO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAgICBcbiAgICB9XG5cbiAgICBnbyhkYXRhKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy50dXJuU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLkFDVElPTjpcbiAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgaGFzIGNvbmZpcm1lZCBndW5uZXIgc2VsZWN0aW9uLlxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLmdldFNlbGVjdGVkR3VubmVycygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJlV2VhcG9uKHRoaXMucXVldWVkVGlsZSwgdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0U2VsZWN0ZWRHdW5uZXJzKCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBJZiB0YXJnZXRzIGFyZSByZXF1aXJlZCAoaWUgZXNwaW9uYWdlKSBzZW5kIHRoYXQgYXJyYXkgbm93IGFuZCBhZHZhbmNlIHRvIFRBUkdFVFMgYW5kIFJFVFVSTlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IElmIGJpb2Ryb25lcyBleGlzdCwgc2VuZCB0aGF0IGFycmF5IG5vdyBhbmQgYWR2YW5jZSB0byBCSU9EUk9ORVMgYW5kIFJFVFVSTlxuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogSWYgcGxheWVyIGhhcyBvcmRuYW5jZSwgbW92ZSBvcmRuYW5jZS9jaGVjayBkYW1hZ2UgXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlUGxheWVyLm9yZG5hbmNlQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXBkYXRlZE9yZG5hbmNlID0gdGhpcy5hY3RpdmVQbGF5ZXIubW92ZU9yZG5hbmNlKHRoaXMuY3VycmVudERpY2VWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IENoZWNrIC8gYXBwbHkgZGFtYWdlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOidtb3ZlT3JkbmFuY2UnLCBkZXRhaWxzOnVwZGF0ZWRPcmRuYW5jZX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUFjdGl2ZVBsYXllcigpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLnR1cm5TdGF0ZUVudW0uVEFSR0VUUzpcbiAgICAgICAgICAgICAgICAvLyBQbGF5ZXIgaGFzIGNvbmZpcm1lZCBhbGwgdGFyZ2V0cyAodGhpcyB3aWxsIGFwcGx5IHRvIGxpbWl0ZWQgYmF0dGxlIHRpbGVzIGxpa2UgZXNwaW9uYWdlKVxuICAgICAgICAgICAgICAgIC8vIEkgbWF5IGNvbWUgYmFjayB0byB0aGlzIGEgYml0IGxhdGVyLlxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFVwZGF0ZSBjbGllbnQgd2l0aCByZXN1bHRcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLkJJT0RST05FOlxuICAgICAgICAgICAgICAgIC8vIFBsYXllciBoYXMgY29uZmlybWVkIHRoYXQgYmlvZHJvbmUgc2VsZWN0aW9uIChpZiBhbnkpIGlzIGZpbmFsLiBcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBNb3ZlIGJpb2Ryb25lKHMpIGFuZCB3cmVhayBoYXZvay4gXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogYWR2YW5jZSB0dXJuc3RhdGVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy50dXJuU3RhdGVFbnVtLkVORDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9XG5cblx0YWRkTmV3UGxheWVyKHNvY2tldElELCB1dWlkKSB7XG4gICAgICAgIHRoaXMubGFzdFBsYXllcklEKys7XG4gICAgICAgIHZhciBwbGF5ZXIgPSBuZXcgUGxheWVyKHNvY2tldElELCB0aGlzLmxhc3RQbGF5ZXJJRCwgdXVpZCk7XG4gICAgICAgIHRoaXMucGxheWVyc0FycmF5LnB1c2gocGxheWVyKTtcbiAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICd1cGRhdGVQbGF5ZXInLCBkZXRhaWxzOiB7aWQ6IHRoaXMubGFzdFBsYXllcklEfX0sIHNvY2tldElEKTtcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcblx0fVxuXG4gICAgYWRkUGxheWVyKHBsYXllcikge1xuICAgICAgICB0aGlzLnBsYXllcnNBcnJheS5wdXNoKHBsYXllcik7XG4gICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOiAndXBkYXRlUGxheWVyJywgZGV0YWlsczoge2lkOiBwbGF5ZXIuaWR9fSwgcGxheWVyLnNvY2tldElEKTtcbiAgICB9XG5cbiAgICBzZXRQbGF5ZXJTdGF0ZShzdGF0ZSkge1xuICAgICAgICB2YXIgcGxheWVyID0gbnVsbDtcbiAgICAgICAgc3dpdGNoIChzdGF0ZS52YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAncmVzZXQnOiBcbiAgICAgICAgICAgICAgICBwbGF5ZXIgPSB0aGlzLmdldFBsYXllckJ5U29ja2V0SUQoc3RhdGUuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgIHBsYXllci5yZW1vdmVQZXJzb25uZWwobnVsbCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJyZW1vdmVBbGxQZXJzb25uZWxcIiwgZGV0YWlsczoge319LCBwbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOiBcbiAgICAgICAgICAgICAgICBwbGF5ZXIgPSB0aGlzLmdldFBsYXllckJ5U29ja2V0SUQoc3RhdGUuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgIHBsYXllci5yZWFkeVRvU3RhcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhciBvcHBvbmVudCA9IHRoaXMuZ2V0UGxheWVyT3Bwb25lbnQocGxheWVyKTtcbiAgICAgICAgICAgICAgICBpZighb3Bwb25lbnQgfHwgIW9wcG9uZW50LnJlYWR5VG9TdGFydCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wcENsb25lcyA9IG9wcG9uZW50LmdldFBlcnNvbm5lbCgnY2xvbmUnKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRQbGF5ZXJDbG9uZXMgPSBwbGF5ZXIuZ2V0UGVyc29ubmVsKCdjbG9uZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGlmeSBjdXJyZW50IHBsYXllciBvZiBvcHBvbmVudCBwb3NpdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBsYXllclBheWxvYWQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBvcHBDbG9uZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllclBheWxvYWQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDpvcHBDbG9uZXNbaV0ueCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Om9wcENsb25lc1tpXS55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV1aWQ6b3BwQ2xvbmVzW2ldLnV1aWQsICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCd1cGRhdGUnLCB7dHlwZTpcInBlcnNvbm5lbFwiLCBkZXRhaWxzOnBsYXllclBheWxvYWR9LCBwbGF5ZXIuc29ja2V0SUQpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGlmeSBvcHBvbmVudCBvZiBjdXJyZW50IHBsYXllcidzIHBvc2l0aW9uc1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3BwUGF5bG9hZCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjIGluIGN1cnJlbnRQbGF5ZXJDbG9uZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wcFBheWxvYWQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDpjdXJyZW50UGxheWVyQ2xvbmVzW2NdLngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTpjdXJyZW50UGxheWVyQ2xvbmVzW2NdLnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXVpZDpjdXJyZW50UGxheWVyQ2xvbmVzW2NdLnV1aWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3VwZGF0ZScsIHt0eXBlOlwicGVyc29ubmVsXCIsIGRldGFpbHM6b3BwUGF5bG9hZH0sIG9wcG9uZW50LnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9hZGNhc3QoJ3VwZGF0ZScsIHt0eXBlOlwicmVzb3VyY2VzXCIsIGFjdGlvbjonaW5pdCd9KTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllciA9IHRoaXMuZ2V0UmFuZG9tUGxheWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwib2ZmZXJEaWNlXCIsIGRldGFpbHM6IHt9fSwgdGhpcy5hY3RpdmVQbGF5ZXIuc29ja2V0SUQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSsrO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihzdGF0ZS52YWx1ZSArIFwiIGlzIG5vdCBhIHZhbGlkIHBsYXllciBzdGF0ZSFcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQbGF5ZXJPcHBvbmVudChwbGF5ZXIpIHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyc0FycmF5Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGxheWVyc0FycmF5WzBdID09PSBwbGF5ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheVsxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllcnNBcnJheVswXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZUFjdGl2ZVBsYXllcigpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIuY2xlYXJRdWV1ZXMoKTtcbiAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJ0YWtlRGljZVwiLCBkZXRhaWxzOiB7fX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgdGhpcy5hY3RpdmVQbGF5ZXIgPSB0aGlzLmdldFBsYXllck9wcG9uZW50KHRoaXMuYWN0aXZlUGxheWVyKTtcbiAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJvZmZlckRpY2VcIiwgZGV0YWlsczoge319LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgIHRoaXMudHVyblN0YXRlID0gMDtcbiAgICB9XG5cbiAgICBnZXRSYW5kb21QbGF5ZXIoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyc0FycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKV07XG4gICAgfVxuICAgIFxuICAgIGdldFBsYXllckJ5VVVJRCh1dWlkKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyc0FycmF5W2ldLnV1aWQgPT0gdXVpZClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXlbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFxuICAgIGdldFBsYXllckJ5U29ja2V0SUQoaWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLnBsYXllcnNBcnJheSkge1xuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXJzQXJyYXlbaV0uc29ja2V0SUQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXlbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldFBsYXllckNvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJzQXJyYXkubGVuZ3RoO1xuICAgIH1cblxuICAgIGNoZWNrQXJtcyhwbGF5ZXIpIHtcbiAgICAgICAgcGxheWVyLmFybXNBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpIGluIHBsYXllci5wZXJzb25uZWxBcnJheSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGlsZUFycmF5W3BsYXllci5wZXJzb25uZWxBcnJheVtpXS54XVtwbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueV0udHlwZSA9PSBcImFybW9yeVwiKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyLmFybXNBcnJheS5wdXNoKHRoaXMudGlsZUFycmF5W3BsYXllci5wZXJzb25uZWxBcnJheVtpXS54XVtwbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueV0ubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY2hlY2tHdW5uZXJzKHBsYXllcikge1xuICAgICAgICBmb3IgKHZhciBpIGluIHBsYXllci5wZXJzb25uZWxBcnJheSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGlsZUFycmF5W3BsYXllci5wZXJzb25uZWxBcnJheVtpXS54XVtwbGF5ZXIucGVyc29ubmVsQXJyYXlbaV0ueV0udHlwZSA9PSBcInN1cmZhY2VcIikge1xuICAgICAgICAgICAgICAgIHBsYXllci5wZXJzb25uZWxBcnJheVtpXS5pc0d1bm5lciA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBsYXllci5wZXJzb25uZWxBcnJheVtpXS5pc0d1bm5lciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhpc3RzUGxheWVyVVVJRCh1dWlkKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5wbGF5ZXJzQXJyYXkpIHtcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyc0FycmF5W2ldLnV1aWQgPT0gdXVpZClcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAgICBcblxuICAgIGFjdGl2YXRlVGlsZShkYXRhKSB7XG4gICAgICAgIHZhciB0aWxlID0gdGhpcy5nZXRUaWxlKGRhdGEueCwgZGF0YS55KTtcbiAgICAgICAgdmFyIHJlbWFpbmluZ0NvdW50ID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaCAodGlsZS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwic3VyZmFjZVwiOiBcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllci5nZXRQZXJzb25uZWxCeVBvaW50KHt4OmRhdGEueCwgeTpkYXRhLnl9KS5pc0d1bm5lciA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicHJvZHVjdGlvblwiOlxuXG4gICAgICAgICAgICAgICAgLy8gVGhyZWUgc3BlY2lhbCBjYXNlczogXG4gICAgICAgICAgICAgICAgLy8gIC0gU2Vuc29yIENhYmluIGRvZXMgbm90IGNvc3Qgb3IgeWllbGQgYW55dGhpbmcuIFdlIGNhbiBoYW5kbGUgdGhpcyBpbW1lZGlhdGVseSlcbiAgICAgICAgICAgICAgICAvLyAgLSBQcm9kdWN0aW9uIFJlcGFpciBjb3N0cywgYnV0IHRyaWdnZXJzIGEgcmVwYWlyIGp1c3QgbGlrZSB0aGUgUmVwYWlyIGJhdHRsZSB0aWxlIChXZSBuZWVkIHRvIGNoZWNrIGlmIHdlIGNhbiBhZmZvcmQpXG4gICAgICAgICAgICAgICAgLy8gIC0gTnVjbGVhciBBcm1vcnkgcHJvZHVjZXMgYSBudWtlIHdoaWNoIHJlbGllcyBvbiBvcmRuYW5jZSB3aGljaCBoYXMgbm90IGJlZW4gYnVpbHQgeWV0XG5cbiAgICAgICAgICAgICAgICBpZih0aWxlLm5hbWUgPT0gXCJzZW5zb3JDYWJpblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBzZW5zb3IgY2FiaW4gc28ganVzdCB0cmlnZ2VyIHRoZSBhY3Rpb24gYW5kIG1vdmUgb24uXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2Vuc29yIGNhYmlucyBhcmUgZnJlZSFcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5jaGVja1Jlc291cmNlKHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlW2ldLCB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0Q291bnRbaV0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FuJ3QgYWZmb3JkIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbid0IGFmZm9yZCBpdCFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuY2hlY2tSZXNvdXJjZSh0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZFR5cGVbal0sIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkQ291bnRbal0sIHRydWUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm8gcm9vbSB0byBzdG9yZSBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYW4ndCBhY2NlcHQgdGhlIHlpZWxkIGN1eiB3ZSBnb3Qgbm8gcm9vbSFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGlsZS5uYW1lID09IFwiY2hlbWljYWxSZWFjdG9yXCIgfHwgdGlsZS5uYW1lID09IFwiY2hlbWljYWxSZWFjdG9yVHdvXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlQ2xvbmVzVG9BZGQgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRSZXNvdXJjZUNvdW50KCdveHlnZW4nKSArIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkQ291bnRbMF0gLSB0aGlzLmFjdGl2ZVBsYXllci5nZXRQZXJzb25uZWwoJ2Nsb25lJykubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIHRpbGUubmFtZSA9PSBcImFpckZpbHRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlQ2xvbmVzVG9BZGQgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRSZXNvdXJjZUNvdW50KCdveHlnZW4nKSArIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZVlpZWxkQ291bnRbMF0gLSB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0Q291bnRbMF0gLSB0aGlzLmFjdGl2ZVBsYXllci5nZXRQZXJzb25uZWwoJ2Nsb25lJykubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGsgaW4gdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nQ291bnQgPSB0aGlzLmFjdGl2ZVBsYXllci5zcGVuZFJlc291cmNlKHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RUeXBlW2tdLCB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0Q291bnRba10pO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllciBcIiArIHRoaXMuYWN0aXZlUGxheWVyLmlkICsgXCIgc3BlbnQgXCIgKyByZW1haW5pbmdDb3VudCArIFwiIFwiICsgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGVba10gKyBcIi4gVGhpcyBsZWF2ZXMgdGhlbSB3aXRoIFwiICsgdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UmVzb3VyY2VDb3VudCh0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZVtrXSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGwgaW4gdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ0NvdW50ID0gdGhpcy5hY3RpdmVQbGF5ZXIuYWNjZXB0UmVzb3VyY2UodGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlWWllbGRUeXBlW2xdLCB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZENvdW50W2xdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbWFpbmluZ0NvdW50KSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyIFwiICsgdGhpcy5hY3RpdmVQbGF5ZXIuaWQgKyBcIiBhZGRlZCBcIiArIHJlbWFpbmluZ0NvdW50ICsgXCIgXCIgKyB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZFR5cGVbbF0gKyBcIi4gVGhpcyBsZWF2ZXMgdGhlbSB3aXRoIFwiICsgdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UmVzb3VyY2VDb3VudCh0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VZaWVsZFR5cGVbbF0pKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGlsZS5uYW1lID09IFwib3h5Z2VuXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogQ2hlY2sgaWYgb3h5Z2VuIGlzIGdyZWF0ZXIgdGhhbiB0aGUgbnVtYmVyIG9mIGNsb25lcy4gSWYgc28sIGFkZCBhIGNsb25lLlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UmVzb3VyY2VDb3VudCgnb3h5Z2VuJykgPiB0aGlzLmFjdGl2ZVBsYXllci5nZXRQZXJzb25uZWwoJ2Nsb25lJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVldWVkVGlsZSA9IHRpbGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGlsZS5uYW1lID09IFwicHJvZFJlcGFpclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIHJlcGFpciBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWV1ZWRUaWxlID0gdGlsZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyAoXCIrKysrKysrXCIpO1xuXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHBsYXllciB0byB0aGVpciBuZXcgd2FyZWhvdXNlIHZhbHVlc1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIFwiYXJtb3J5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0FybXModGhpcy5hY3RpdmVQbGF5ZXIpO1xuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBwbGF5ZXIncyBwZXJzb25uZWwgdG8gYmUgYXJtZWRcbiAgICAgICAgICAgICAgICAvLyBNYXliZSBoYXZlIHRocmVlIG92ZXJsYXBwaW5nIHNwcml0ZXMuIERyaWxsLCBDYW5ub24sIEV4cGxvc2l2ZXM/XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJiYXR0bGVcIjpcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRpbGUubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2hpZWxkXCI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJiaW9kcm9uZVwiOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibGFzZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInRoZXJtaXRlXCI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzYXRlbGxpdGVcIjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJvY2tldFwiOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZXNwaW9uYWdlXCI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ0YWtlb3ZlclwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy50dXJuU3RhdGUrKzsgLy8gU2V0IHN0YXRlIHRvIEFDVElPTi5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50UmVzb3VyY2VDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFJlc291cmNlQWZmb3JkYWJpbGl0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWZmb3JkYWJsZVJvdW5kcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVHdW5uZXJzID0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0R3VubmVycygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aXZlR3VubmVycy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBObyBndW5uZXJzISBHZXQgb3V0IG9mIGhlcmUuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG0gaW4gdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVzb3VyY2VDb3VudCA9IHRoaXMuYWN0aXZlUGxheWVyLmdldFJlc291cmNlQ291bnQodGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdFR5cGVbbV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZXNvdXJjZUFmZm9yZGFiaWxpdHkgPSBjdXJyZW50UmVzb3VyY2VDb3VudCAvIHRpbGUucHJvcGVydGllcy5yZXNvdXJjZUNvc3RDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlc291cmNlQWZmb3JkYWJpbGl0eSA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBOb3QgZW5vdWdoIG9mIGEgcmVzb3VyY2UhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWZmb3JkYWJsZVJvdW5kcyA9PT0gbnVsbCB8fCBjdXJyZW50UmVzb3VyY2VBZmZvcmRhYmlsaXR5IDwgYWZmb3JkYWJsZVJvdW5kcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZmZvcmRhYmxlUm91bmRzID0gY3VycmVudFJlc291cmNlQWZmb3JkYWJpbGl0eTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlbGwgcGxheWVyIHRoZXkgY2FuIGFmZm9yZCBcIiArIGFmZm9yZGFibGVSb3VuZHMgKyBcIiBndW5uZXIocylcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlZFRpbGUgPSB0aWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogZW1pdCBzaG93VGlsZXMoKSB3aXRoIGFycmF5IG9mIGxlZ2FsIGd1bm5lcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwib2ZmZXJHdW5uZXJzXCIsIGRldGFpbHM6e2d1bm5lcnM6YWN0aXZlR3VubmVyc319LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWFkeSB0byBzZWxlY3QgZ3VubmVycyEgVGhpcyB3aWxsIHRha2UgcGxhY2Ugb24gdGhlIG5leHQgbGVnYWwgY2xpY2sgZXZlbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb3VudGVyRXNwaW9uYWdlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb29rIGZvciBjbG9uZXMgdGhhdCBhcmUgb3Bwb25lbnQncyBzcGllZFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJlcGFpclwiOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmVwYWlyVHdvXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlZFRpbGUgPSB0aWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3VycmVudFJlc291cmNlQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFyIGFjdGl2ZURhbWFnZWRUaWxlcyA9IHRoaXMuZ2V0RGFtYWdlZFRpbGVzKHRoaXMuYWN0aXZlUGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChhY3RpdmVEYW1hZ2VkVGlsZXMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC8vIGNhbGN1bGF0ZSBjb3N0IG9mIHJlcGFpclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yICh2YXIgbiBpbiB0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGN1cnJlbnRSZXNvdXJjZUNvdW50ID0gdGhpcy5hY3RpdmVQbGF5ZXIuZ2V0UmVzb3VyY2VDb3VudCh0aWxlLnByb3BlcnRpZXMucmVzb3VyY2VDb3N0VHlwZVtuXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGN1cnJlbnRSZXNvdXJjZUNvdW50IDwgdGlsZS5wcm9wZXJ0aWVzLnJlc291cmNlQ29zdENvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybjsgLy8gTm90IGVub3VnaCBvZiBhIHJlc291cmNlIVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRlbGwgcGxheWVyIHRoYXQgdGhleSBjYW4gYWZmb3JkIHRvIGZpeCB1cCB0aGUgc3RhdGlvbiFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUaWxlT2NjdXBhbnQocG9pbnQpIHtcbiAgICAgICAgdmFyIG9yZG5hbmNlLCBwZXJzb25uZWw7XG4gICAgICAgIGZvciAodmFyIHBpID0gMDsgcGkgPCB0aGlzLnBsYXllcnNBcnJheS5sZW5ndGg7IHBpKyspIHtcbiAgICAgICAgICAgIG9yZG5hbmNlID0gdGhpcy5wbGF5ZXJzQXJyYXlbcGldLmdldE9yZG5hbmNlQnlQb2ludChwb2ludCk7XG4gICAgICAgICAgICBwZXJzb25uZWwgPSB0aGlzLnBsYXllcnNBcnJheVtwaV0uZ2V0UGVyc29ubmVsQnlQb2ludChwb2ludCk7XG4gICAgICAgICAgICBpZiAob3JkbmFuY2UgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yZG5hbmNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwZXJzb25uZWwgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlcnNvbm5lbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZVdlYXBvbih3ZWFwb25UaWxlLCBndW5uZXJBcnJheSkge1xuICAgICAgICBpZiAoZ3VubmVyQXJyYXkubGVuZ3RoIDw9IDAgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGd1bm5lckFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgb3JkbmFuY2VQb2ludCA9IHt4Omd1bm5lckFycmF5W2ldLngsIHk6Z3VubmVyQXJyYXlbaV0ueX07XG4gICAgICAgICAgICB2YXIgaW1wYWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBvcmRVVUlEO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHdlYXBvblRpbGUubmFtZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJsYXNlclwiOlxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudFRpbGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50T2NjdXBhbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpbXBhY3RlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5pZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkbmFuY2VQb2ludC54Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZG5hbmNlUG9pbnQueC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbGUgPSB0aGlzLmdldFRpbGUob3JkbmFuY2VQb2ludC54LCBvcmRuYW5jZVBvaW50LnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjdXJyZW50VGlsZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNwYWNlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN1cmZhY2VcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUaWxlLm9jY3VwaWVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50T2NjdXBhbnQgPSB0aGlzLmdldFRpbGVPY2N1cGFudChvcmRuYW5jZVBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLnJlbW92ZShjdXJyZW50T2NjdXBhbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbGUub2NjdXBpZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcGFjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFlvdSBhcmUgaW4gdGhlIG9wcG9uZW50IG1pbmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VGlsZS5vY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9jY3VwYW50ID0gdGhpcy5nZXRUaWxlT2NjdXBhbnQob3JkbmFuY2VQb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBsYXllci5yZW1vdmVQZXJzb25uZWwoY3VycmVudE9jY3VwYW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGVtaXQgZGVhdGggYW5pbWF0aW9uIHRvIGNsaWVudHMuIChtYXliZSBqdXN0IGFkZCB0aGF0IHRvIHRoZSByZW1vdmVQZXJzb25uZWwoKT8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcInJlbW92ZVBlcnNvbm5lbFwiLCBkZXRhaWxzOmN1cnJlbnRPY2N1cGFudH0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaWxlLm9jY3VwaWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBhY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFRpbGUuZGFtYWdlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGlsZS5kYW1hZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwiZGFtYWdlVGlsZVwiICxkZXRhaWxzOm9yZG5hbmNlUG9pbnR9LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBhY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzaGllbGRcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmlvZHJvbmVcIjpcbiAgICAgICAgICAgICAgICBjYXNlIFwic2F0ZWxsaXRlXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcInJvY2tldFwiOlxuICAgICAgICAgICAgICAgICAgICBpZiAod2VhcG9uVGlsZS5uYW1lID09IFwic2hpZWxkXCIgfHwgd2VhcG9uVGlsZS5uYW1lID09IFwic2F0ZWxsaXRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5pZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkbmFuY2VQb2ludC54ICs9IHRoaXMuY3VycmVudERpY2VWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkbmFuY2VQb2ludC54IC09IHRoaXMuY3VycmVudERpY2VWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGlsZSA9IHRoaXMuZ2V0VGlsZShvcmRuYW5jZVBvaW50LngsIG9yZG5hbmNlUG9pbnQueSk7XG4gICAgICAgICAgICAgICAgICAgIG9yZFVVSUQgPSB1dWlkKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLmFkZE9yZG5hbmNlKHdlYXBvblRpbGUubmFtZSwgb3JkbmFuY2VQb2ludCwgb3JkVVVJRCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwiYWRkT3JkbmFuY2VcIiwgZGV0YWlsczp7dHlwZTp3ZWFwb25UaWxlLm5hbWUsIHBsYXllcklEOiB0aGlzLmFjdGl2ZVBsYXllci5pZCwgcG9pbnQ6b3JkbmFuY2VQb2ludCwgdXVpZDpvcmRVVUlEfX0sIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInRoZXJtaXRlXCI6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVBsYXllci5pZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRuYW5jZVBvaW50LnggPSAzMSAtIHRoaXMuY3VycmVudERpY2VWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZG5hbmNlUG9pbnQueCA9IHRoaXMuY3VycmVudERpY2VWYWx1ZSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbGUgPSB0aGlzLmdldFRpbGUob3JkbmFuY2VQb2ludC54LCBvcmRuYW5jZVBvaW50LnkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFRpbGUuZGFtYWdlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGlsZS5kYW1hZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnYWN0aW9uJywge2NhbGxiYWNrOlwiZGFtYWdlVGlsZVwiICxkZXRhaWxzOm9yZG5hbmNlUG9pbnR9LCB0aGlzLmFjdGl2ZVBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgaXMgYSBwcm9ibGVtIHdpdGggdGhhdCB3ZWFwb25UaWxlIGFyZ3VtZW50XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybjsgXG4gICAgICAgIC8vIHN3aXRjaCAod2VhcG9uVGlsZS5uYW1lKSB7XG4gICAgICAgIC8vICAgICBjYXNlIFwiZXNwaW9uYWdlXCI6XG4gICAgICAgIC8vICAgICBjYXNlIFwidGFrZW92ZXJcIjpcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIGlzIGEgcHJvYmxlbSB3aXRoIHRoYXQgd2VhcG9uVGlsZSBhcmd1bWVudFwiKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGdldExvY2tzKHBsYXllcikge1xuICAgICAgICB2YXIgcmV0dXJuQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgYyBpbiB0aGlzLnRpbGVBcnJheSkge1xuICAgICAgICAgICAgZm9yICh2YXIgciBpbiB0aGlzLnRpbGVBcnJheVtjXSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVBcnJheVtjXVtyXS5uYW1lID09IFwibG9ja1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuaWQgPT0gMSAmJiBjIDwgMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMudGlsZUFycmF5W2NdW3JdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGxheWVyLmlkID09IDIgJiYgYyA+IDE4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLnRpbGVBcnJheVtjXVtyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMudGlsZUFycmF5W2NdW3JdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuQXJyYXk7XG4gICAgfVxuXG4gICAgZ2V0RGFtYWdlZFRpbGVzKHBsYXllcikge1xuICAgICAgICB2YXIgcmV0dXJuQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgYyBpbiB0aGlzLnRpbGVBcnJheSkge1xuICAgICAgICAgICAgZm9yICh2YXIgciBpbiB0aGlzLnRpbGVBcnJheVtjXSkge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5pZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYyA8IDEyICYmIHRoaXMudGlsZUFycmF5W2NdW3JdLmRhbWFnZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMudGlsZUFycmF5W2NdW3JdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYyA+IDE4ICYmIHRoaXMudGlsZUFycmF5W2NdW3JdLmRhbWFnZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHRoaXMudGlsZUFycmF5W2NdW3JdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlQXJyYXlbY11bcl0uZGFtYWdlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkucHVzaCh0aGlzLnRpbGVBcnJheVtjXVtyXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5BcnJheTtcbiAgICB9XG4gICAgXG4gICAgcGxhY2VDbG9uZShwbGF5ZXIsIHgsIHkpIHtcblxuICAgICAgICAvLyBBdHRlbXB0IHRvIHBsYWNlIGNsb25lc1xuICAgICAgICAvLyBJZiB0aGUgZ2FtZXN0YXRlIGlzIFNFVFVQLCBjbG9uZXMgY2FuIGdvIGludG8gYW55IHVub2NjdXBpZWQsIHBsYXllci1vd25lZCwgYmF0dGxlLCBwcm9kdWN0aW9uLCBsb2NrLCBvciBhcm1vcnkgdGlsZS5cbiAgICAgICAgLy8gSWYgdGhlIGdhbWVzdGF0ZSBpcyBHQU1FLCBjbG9uZXMgY2FuIG9ubHkgZ28gaW50byB1bm9jY3VwaWVkLCBwbGF5ZXItb3duZWQsIGxvY2tzLlxuICAgICAgICAvLyBSRVRVUk4gdHJ1ZSBvciBmYWxzZSBmb3Igc3VjY2VzcyBvciBmYWlsdXJlLlxuICAgICAgICAvLyBJIHNob3VsZCByZWZhY3RvciB0aGlzLCBidXQgSSdtIHRpcmVkLlxuXG4gICAgICAgIGlmICh0eXBlb2YgcGxheWVyID09PSAndW5kZWZpbmVkJyB8fCBwbGF5ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxlY3RlZFRpbGUgPSB0aGlzLmdldFRpbGUoeCwgeSk7XG4gICAgICAgIHZhciBjbG9uZSwgY2xvbmVVVUlEO1xuXG4gICAgICAgIGlmIChwbGF5ZXIuaWQgIT0gc2VsZWN0ZWRUaWxlLm93bmVyIHx8IHNlbGVjdGVkVGlsZS5vY2N1cGllZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgZ2FtZXN0YXRlIGlzIFNFVFVQXG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PT0gdGhpcy5nYW1lU3RhdGVFbnVtLlNFVFVQKSB7XG4gICAgICAgICAgICBpZihzZWxlY3RlZFRpbGUudHlwZSA9PSBcImxvY2tcIiB8fCBzZWxlY3RlZFRpbGUudHlwZSA9PSBcImJhdHRsZVwiIHx8IHNlbGVjdGVkVGlsZS50eXBlID09IFwiYXJtb3J5XCIgfHwgc2VsZWN0ZWRUaWxlLnR5cGUgPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBjbG9uZVVVSUQgPSB1dWlkKCk7XG4gICAgICAgICAgICAgICAgLy92YXIgdXVpZCA9IHJlcXVpcmUoJ3V1aWQvdjQnKSgpO1xuICAgICAgICAgICAgICAgIGNsb25lID0gcGxheWVyLmFkZFBlcnNvbm5lbCgnY2xvbmUnLCB4LCB5LCBjbG9uZVVVSUQpO1xuICAgICAgICAgICAgICAgIGlmIChjbG9uZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0FybXMocGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUaWxlLm9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJhZGRDbG9uZVwiLCBkZXRhaWxzOiB7eDp4LCB5OnksIHBsYXllcklEOiBwbGF5ZXIuaWQsIHV1aWQ6Y2xvbmVVVUlEfX0sIHBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBnYW1lc3RhdGUgaXMgR0FNRVxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT09IHRoaXMuZ2FtZVN0YXRlRW51bS5HQU1FKSB7XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRUaWxlLnR5cGUgPT0gXCJsb2NrXCIpIHtcbiAgICAgICAgICAgICAgICBjbG9uZVVVSUQgPSB1dWlkKCk7XG4gICAgICAgICAgICAgICAgLy92YXIgdXVpZCA9IHJlcXVpcmUoJ3V1aWQvdjQnKSgpO1xuICAgICAgICAgICAgICAgIGNsb25lID0gcGxheWVyLmFkZFBlcnNvbm5lbCgnY2xvbmUnLCB4LCB5LCBjbG9uZVVVSUQpO1xuICAgICAgICAgICAgICAgIGlmIChjbG9uZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0FybXMocGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUaWxlLm9jY3VwaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6XCJhZGRDbG9uZVwiLCBkZXRhaWxzOiB7eDp4LCB5OnksIHBsYXllcklEOiBwbGF5ZXIuaWQsIHV1aWQ6Y2xvbmVVVUlEfX0sIHBsYXllci5zb2NrZXRJRCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgY3JlYXRlVGlsZUFycmF5KCkge1xuICAgICAgICB2YXIgdGlsZUpTT04gPSByZXF1aXJlKCcuLi8uLi9hc3NldHMvdGlsZURldGFpbC5qc29uJyk7XG5cbiAgICAgICAgZm9yKHZhciBjID0gMDsgYyA8IHRoaXMudGlsZUNvbHVtbnM7IGMrKykge1xuICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbY10gPSBbXTtcbiAgICAgICAgICAgIGZvcih2YXIgciA9IDA7IHIgPCB0aGlzLnRpbGVSb3dzOyByKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVtjXVtyXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDpjLFxuICAgICAgICAgICAgICAgICAgICB5OnJcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRpbGVKU09OKSB7XG4gICAgICAgICAgICBpZiAoIXRpbGVKU09OLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgb2JqID0gdGlsZUpTT05ba2V5XTtcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgLy8gc2tpcCBsb29wIGlmIHRoZSBwcm9wZXJ0eSBpcyBmcm9tIHByb3RvdHlwZVxuICAgICAgICAgICAgICAgIGlmKCFvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBsb2NhdGlvbkNvdW50ID0gb2JqW3Byb3BdLmxvY2F0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2NhdGlvbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb29yZHMgPSBvYmpbcHJvcF0ubG9jYXRpb25zW2ldLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBjb29yZHNbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gY29vcmRzWzFdO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0uZGFtYWdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5vY2N1cGllZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS50eXBlID0gb2JqW3Byb3BdLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4IDwgOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0ub3duZXIgPSAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHggPiAyMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0ub3duZXIgPSAyO1xuICAgICAgICAgICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy50aWxlQXJyYXlbeF1beV0gIT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVBcnJheVt4XVt5XS5uYW1lID0gb2JqW3Byb3BdLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHggKyBcIjpcIiArIHkgKyBcIiBub3QgZm91bmQhXCIpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpbcHJvcF0ucHJvcGVydGllcyAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlQXJyYXlbeF1beV0ucHJvcGVydGllcyA9IG9ialtwcm9wXS5wcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRUaWxlKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGlsZUFycmF5W3hdW3ldO1xuICAgIH1cblxuICAgIGdldExlZ2FsUGllY2VzKCkge1xuICAgICAgICB2YXIgcGVyc29ubmVsQXJyYXkgPSB0aGlzLmFjdGl2ZVBsYXllci5nZXRQZXJzb25uZWwoKTtcbiAgICAgICAgdmFyIHJldHVybkFycmF5ID0gW107XG4gICAgICAgIHZhciBtb3Zlc0FycmF5ID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSBpbiBwZXJzb25uZWxBcnJheSkge1xuICAgICAgICAgICAgbW92ZXNBcnJheSA9IHRoaXMuZ2V0TGVnYWxNb3ZlcyhwZXJzb25uZWxBcnJheVtpXSwgdGhpcy5jdXJyZW50RGljZVZhbHVlLCB7eDpwZXJzb25uZWxBcnJheVtpXS54LCB5OnBlcnNvbm5lbEFycmF5W2ldLnl9KTtcbiAgICAgICAgICAgIGlmIChtb3Zlc0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKHt0eXBlOnBlcnNvbm5lbEFycmF5W2ldLnR5cGUsb3JpZ2luOnt4OnBlcnNvbm5lbEFycmF5W2ldLngseTpwZXJzb25uZWxBcnJheVtpXS55fSwgdXVpZDpwZXJzb25uZWxBcnJheVtpXS51dWlkLCBtb3Zlczptb3Zlc0FycmF5fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVybkFycmF5O1xuICAgIH1cblxuICAgIGdldENvb3JkRnJvbURpcmVjdGlvbihvcmlnaW5Db29yZCxkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIGRpcj17Tk9SVEg6e3g6MCx5Oi0xfSxFQVNUOnt4OjEseTowfSxTT1VUSDp7eDowLHk6MX0sV0VTVDp7eDotMSx5OjB9fTtcbiAgICAgICAgXG4gICAgICAgIHZhciBvYmogPSB7eDoocGFyc2VJbnQob3JpZ2luQ29vcmQueCkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS54KSksIHk6KHBhcnNlSW50KG9yaWdpbkNvb3JkLnkpICsgcGFyc2VJbnQoZGlyW2RpcmVjdGlvbl0ueSkpfTtcbiAgICAgICAgaWYob2JqLnggPCAwIHx8IG9iai54ID4gMzB8fCBvYmoueSA8IDAgfHwgb2JqLnkgPiAyMCkgXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB7eDoocGFyc2VJbnQob3JpZ2luQ29vcmQueCkgKyBwYXJzZUludChkaXJbZGlyZWN0aW9uXS54KSksIHk6KHBhcnNlSW50KG9yaWdpbkNvb3JkLnkpICsgcGFyc2VJbnQoZGlyW2RpcmVjdGlvbl0ueSkpfTsgICAgICAgICAgICBcbiAgICB9XG5cbiAgICBnZXRMZWdhbE1vdmVzKGdhbWVQaWVjZVR5cGUsIG1vdmVzLCBjdXJyZW50Q29vcmQsIHByZXZpb3VzQ29vcmQpe1xuICAgICAgICBpZiAobW92ZXMgPCAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSWxsZWdhbCBtb3ZlIG51bWJlciEgVGhpcyBjb3VsZCByZXN1bHQgaW4gaW5maW5pdGUgbG9vcC5cIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxlZ2FsTW92ZXMgPSBbXTtcbiAgICAgICAgdmFyIHJldHVybkFycmF5ID0gW107XG4gICAgICAgIHZhciBuZXh0TW92ZVRvQ2hlY2sgPSBudWxsO1xuICAgICAgICB2YXIgbmV4dFRpbGVUb0NoZWNrID0gbnVsbDtcbiAgICAgICAgbW92ZXMtLTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvY2Vzcy5tZW1vcnlVc2FnZSgpLmhlYXBVc2VkKTtcblxuICAgICAgICBpZiAodHlwZW9mIHByZXZpb3VzQ29vcmQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2YXIgbG9ja3MgPSB0aGlzLmdldExvY2tzKHRoaXMuYWN0aXZlUGxheWVyKTtcbiAgICAgICAgICAgIHZhciBpc0xvY2sgPSBmYWxzZTtcblxuICAgICAgICAgICAgZm9yICh2YXIgbCBpbiBsb2Nrcykge1xuICAgICAgICAgICAgICAgIGlmIChsb2Nrc1tsXS54ID09IGN1cnJlbnRDb29yZC54ICYmIGxvY2tzW2xdLnkgPT0gY3VycmVudENvb3JkLnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNMb2NrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc0xvY2sgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIGxvY2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q29vcmQueCA9PSBsb2Nrc1tpXS54ICYmIGN1cnJlbnRDb29yZC55ID09IGxvY2tzW2ldLnkpIHsgY29udGludWU7IH0gLy8gZG9uJ3QgaW5jbHVkZSB0aGUgbG9jayB5b3UncmUgc2l0dGluZyBvblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlQXJyYXlbbG9ja3NbaV0ueF1bbG9ja3NbaV0ueV0ub2NjdXBpZWQgPT09IHRydWUpIHsgY29udGludWU7IH0gLy8gZG9uJ3QgaW5jbHVkZSBsb2NrIHRoYXQgb3RoZXJzIGFyZSBzaXR0aW5nIG9uXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlcyA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkFycmF5ID0gcmV0dXJuQXJyYXkuY29uY2F0KHRoaXMuZ2V0TGVnYWxNb3ZlcyhnYW1lUGllY2VUeXBlLCBtb3Zlcywge3g6bG9ja3NbaV0ueCwgeTpsb2Nrc1tpXS55fSwgY3VycmVudENvb3JkKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5BcnJheS5wdXNoKGxvY2tzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjIGluIHJldHVybkFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXR1cm5BcnJheVtjXS54ICE9PSBjdXJyZW50Q29vcmQueCB8fCByZXR1cm5BcnJheVtjXS55ICE9PSBjdXJyZW50Q29vcmQueSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWdhbE1vdmVzLnB1c2gocmV0dXJuQXJyYXlbY10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciBkaXJlY3Rpb24gaW4gdGhpcy5kaXJlY3Rpb25FbnVtKSB7XG4gICAgICAgICAgICBuZXh0TW92ZVRvQ2hlY2sgPSB0aGlzLmdldENvb3JkRnJvbURpcmVjdGlvbihjdXJyZW50Q29vcmQsIGRpcmVjdGlvbik7XG4gICAgICAgICAgICBpZihuZXh0TW92ZVRvQ2hlY2sgPT09IGZhbHNlKSB7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG5leHRUaWxlVG9DaGVjayA9IHRoaXMudGlsZUFycmF5W25leHRNb3ZlVG9DaGVjay54XVtuZXh0TW92ZVRvQ2hlY2sueV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChuZXh0VGlsZVRvQ2hlY2suZGFtYWdlZCA9PT0gdHJ1ZSkgeyBjb250aW51ZTsgfVxuICAgICAgICAgICAgaWYgKG5leHRUaWxlVG9DaGVjay50eXBlID09PSBcInNwYWNlXCIpIHsgY29udGludWU7IH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrV2FsbCh0aGlzLmRpcmVjdGlvbkVudW1bZGlyZWN0aW9uXSwgY3VycmVudENvb3JkKSA9PT0gZmFsc2UpIHsgY29udGludWU7IH1cblxuICAgICAgICAgICAgaWYoKHR5cGVvZiBwcmV2aW91c0Nvb3JkID09PSAndW5kZWZpbmVkJykgfHwgKCh0eXBlb2YgcHJldmlvdXNDb29yZCAhPT0gJ3VuZGVmaW5lZCcpICYmIChKU09OLnN0cmluZ2lmeShuZXh0TW92ZVRvQ2hlY2spICE9PSBKU09OLnN0cmluZ2lmeShwcmV2aW91c0Nvb3JkKSkgKSkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRpbGUgaXMgb2NjdXBpZWRcbiAgICAgICAgICAgICAgICBpZiAobW92ZXMgPT09IDApe1xuICAgICAgICAgICAgICAgICAgICBpZihuZXh0VGlsZVRvQ2hlY2sub2NjdXBpZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWdhbE1vdmVzLnB1c2gobmV4dE1vdmVUb0NoZWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuQXJyYXkgPSByZXR1cm5BcnJheS5jb25jYXQodGhpcy5nZXRMZWdhbE1vdmVzKGdhbWVQaWVjZVR5cGUsIG1vdmVzLCBuZXh0TW92ZVRvQ2hlY2ssIGN1cnJlbnRDb29yZCkpO1xuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGluZGV4IGluIHJldHVybkFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXR1cm5BcnJheVtpbmRleF0ueCAhPT0gY3VycmVudENvb3JkLnggfHwgcmV0dXJuQXJyYXlbaW5kZXhdLnkgIT09IGN1cnJlbnRDb29yZC55KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZ2FsTW92ZXMucHVzaChyZXR1cm5BcnJheVtpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWdhbE1vdmVzO1xuICAgIH1cblxuICAgIGNoZWNrV2FsbChkaXJlY3Rpb24sIGN1cnJlbnRDb29yZGluYXRlKSB7XG4gICAgICAgIHRoaXMud2FsbEdyaWQgPSByZXF1aXJlKCcuLi8uLi9hc3NldHMvd2FsbEdyaWQuanNvbicpO1xuXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKXtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5kaXJlY3Rpb25FbnVtLk5PUlRIOiAvLyBVUFxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCh0aGlzLndhbGxHcmlkLmdyaWRbY3VycmVudENvb3JkaW5hdGUueF1bY3VycmVudENvb3JkaW5hdGUueV0mdGhpcy5kaXJlY3Rpb25FbnVtLk5PUlRIKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgY2FzZSB0aGlzLmRpcmVjdGlvbkVudW0uU09VVEg6IC8vIERPV05cbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy53YWxsR3JpZC5ncmlkW2N1cnJlbnRDb29yZGluYXRlLnhdW2N1cnJlbnRDb29yZGluYXRlLnldJnRoaXMuZGlyZWN0aW9uRW51bS5TT1VUSCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5kaXJlY3Rpb25FbnVtLkVBU1Q6IC8vIFJJR0hUXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMud2FsbEdyaWQuZ3JpZFtjdXJyZW50Q29vcmRpbmF0ZS54XVtjdXJyZW50Q29vcmRpbmF0ZS55XSZ0aGlzLmRpcmVjdGlvbkVudW0uRUFTVCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5kaXJlY3Rpb25FbnVtLldFU1Q6IC8vIExFRlRcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQodGhpcy53YWxsR3JpZC5ncmlkW2N1cnJlbnRDb29yZGluYXRlLnhdW2N1cnJlbnRDb29yZGluYXRlLnldJnRoaXMuZGlyZWN0aW9uRW51bS5XRVNUKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBcbiAgICByb2xsRGljZShkYXRhKSB7XG4gICAgICAgIGlmKHRoaXMudHVyblN0YXRlID09IHRoaXMudHVyblN0YXRlRW51bS5ST0xMICYmIHRoaXMuZ2FtZVN0YXRlID09IHRoaXMuZ2FtZVN0YXRlRW51bS5HQU1FICYmIHRoaXMuYWN0aXZlUGxheWVyLnNvY2tldElEID09IGRhdGEuc29ja2V0SUQpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudERpY2VWYWx1ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDYpICsgMTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUGxheWVyLmN1cnJlbnRMZWdhbFBpZWNlcyA9IHRoaXMuZ2V0TGVnYWxQaWVjZXMoKTtcblxuICAgICAgICAgICAgLy8gUGxheWVyIHJlY2VpdmVzIGFycmF5IG9mIGxlZ2FsIHBlcnNvbm5lbCAoY2xvbmVzKSBhbmQgdHVybiBzdGF0ZSBhZHZhbmNlcyB0byBNT1ZFXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2FjdGlvbicsIHtjYWxsYmFjazpcImRpY2VSb2xsZWRcIiwgZGV0YWlsczoge3ZhbHVlOnRoaXMuY3VycmVudERpY2VWYWx1ZSwgZ2FtZVBpZWNlczp0aGlzLmFjdGl2ZVBsYXllci5jdXJyZW50TGVnYWxQaWVjZXN9fSwgZGF0YS5zb2NrZXRJRCk7XG4gICAgICAgICAgICB0aGlzLnR1cm5TdGF0ZSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldChkYXRhKSB7XG4gICAgICAgIGlmKHR5cGVvZihkYXRhLnByb3BlcnR5KSA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZXNwb25zZScsIHtkZXRhaWxzOnRoaXNbZGF0YS5wcm9wZXJ0eV19LCBkYXRhLnNvY2tldElEKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBlbWl0KG1zZywgZGF0YSwgc29ja2V0SUQpIHtcbiAgICAgICAgaWYobXNnID09IFwicmVzcG9uc2VcIiB8fCBtc2cgPT0gXCJyZXF1ZXN0XCIgfHwgbXNnID09IFwidXBkYXRlXCIpIHtcbiAgICAgICAgICAgIGlmKHR5cGVvZihzb2NrZXRJRCkgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBTb2NrZXRJRCBmb3VuZCFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pby5zb2NrZXRzLmNvbm5lY3RlZFtzb2NrZXRJRF0uZW1pdChtc2csIGRhdGEpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmKG1zZyA9PSBcImFjdGlvblwiKSB7XG4gICAgICAgICAgICBpZih0eXBlb2Yoc29ja2V0SUQpID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTm8gU29ja2V0SUQgZm91bmQhXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW8uc29ja2V0cy5jb25uZWN0ZWRbc29ja2V0SURdLmVtaXQobXNnLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYobXNnID09IFwibG9nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuaW8uc29ja2V0cy5lbWl0KG1zZywgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYnJvYWRjYXN0KG1zZywgZGF0YSkge1xuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMucGxheWVyc0FycmF5KSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQobXNnLCBkYXRhLCB0aGlzLnBsYXllcnNBcnJheVtpXS5zb2NrZXRJRCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc2VydmVyRnVsbChwbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdhY3Rpb24nLCB7Y2FsbGJhY2s6ICdzZXJ2ZXJGdWxsJywgZGV0YWlsczoge2lkOiBwbGF5ZXIuaWR9fSwgcGxheWVyLnNvY2tldElEKTtcbiAgICB9XG4gICAgXG59XG5cbm1vZHVsZS5leHBvcnRzLlNlcHRpa29uID0gU2VwdGlrb247XG4iLCJpbXBvcnQgU2VwdGlrb24gZnJvbSAnLi4vcHJlZmFicy9zZXB0aWtvbic7XG5cbmNsYXNzIEJvb3QgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwcmVsb2FkKCkge1xuICAgIHRoaXMubG9hZC5pbWFnZSgncHJlbG9hZGVyJywgJ2Fzc2V0cy9wcmVsb2FkZXIuZ2lmJyk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5nYW1lLmlucHV0Lm1heFBvaW50ZXJzID0gMTtcbiAgICB0aGlzLmdhbWUudGltZS5hZHZhbmNlZFRpbWluZyA9IHRydWU7XG4gICAgdGhpcy5nYW1lLnNjYWxlLnBhZ2VBbGlnbkhvcml6b250YWxseSA9IHRydWU7XG4gICAgICB0aGlzLmdhbWUuc2NhbGUuc2NhbGVNb2RlID0gUGhhc2VyLlNjYWxlTWFuYWdlci5SRVNJWkU7XG4gICAgLy9zZXR1cCBkZXZpY2Ugc2NhbGluZ1xuICAgIGlmICghdGhpcy5nYW1lLmRldmljZS5kZXNrdG9wKSB7XG4gICAgICB0aGlzLmdhbWUuc2NhbGUucGFyZW50SXNXaW5kb3cgPSB0cnVlO1xuICAgICAgdGhpcy5nYW1lLnNjYWxlLnNjYWxlTW9kZSA9IFBoYXNlci5TY2FsZU1hbmFnZXIuUkVTSVpFO1xuICAgICAgdGhpcy5nYW1lLnNjYWxlLm1pbldpZHRoID0gIDQ4MDtcbiAgICAgIHRoaXMuZ2FtZS5zY2FsZS5taW5IZWlnaHQgPSAyNjA7XG4gICAgICB0aGlzLmdhbWUuc2NhbGUuZm9yY2VPcmllbnRhdGlvbih0cnVlKTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRHbG9iYWxWYXJpYWJsZXMoKTtcbiAgICBcbiAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ3ByZWxvYWRlcicpO1xuICB9XG5cbiAgaW5pdEdsb2JhbFZhcmlhYmxlcygpe1xuICAgIHRoaXMuZ2FtZS5nbG9iYWwgPSB7XG4gICAgICBzY29yZTogMCxcbiAgICAgIGxhc3REaWNlUm9sbDogMCxcbiAgICB9O1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vdDtcbiIsImltcG9ydCBEaWNlIGZyb20gJy4uL3ByZWZhYnMvZGljZSc7XG5cbmNsYXNzIEdhbWUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgXG4gIGNyZWF0ZSgpIHtcbiAgXG4gICAgLy90aGlzLmdhbWUuaW5wdXQub25Eb3duLmFkZCh0aGlzLnRvZ2dsZUZ1bGxzY3JlZW4sIHRoaXMpO1xuICAgIHRoaXMuZ2FtZS5zdGFnZS5kaXNhYmxlVmlzaWJpbGl0eUNoYW5nZSA9IHRydWU7XG4gICAgXG4gICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAgPSB0aGlzLmdhbWUuYWRkLmdyb3VwKCk7XG4gICAgdGhpcy5nYW1lLmh1ZEdyb3VwID0gdGhpcy5nYW1lLmFkZC5ncm91cCgpO1xuXG4gICAgdGhpcy5nYW1lLm1vZGFsID0gbmV3IGdhbWVNb2RhbCh0aGlzLmdhbWUpO1xuICAgIHRoaXMuY3JlYXRlTW9kYWxzKCk7XG5cbiAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLDAsJ2JhY2tncm91bmQnKTtcbiAgICB0aGlzLmJhY2tncm91bmQuYW5jaG9yLnNldFRvKDAuNSwwLjUpO1xuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLmNlbnRlclggPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWDtcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5jZW50ZXJZID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclk7XG5cbiAgICB0aGlzLmdhbWUuaHVkQmcgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLDAsJ2h1ZC1iZycpO1xuXG4gICAgdGhpcy5nYW1lLmdvID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoNDAsODAsJ3RleHRfZ28nKTtcbiAgICB0aGlzLmdhbWUuZ28uc2NhbGUuc2V0VG8oMC4yNSk7XG4gICAgdGhpcy5nYW1lLmdvLmlucHV0RW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2FtZS5nby5maWx0ZXJzID0gW3RoaXMuZ2FtZS5hZGQuZmlsdGVyKCdHcmF5JyldO1xuXG4gICAgdGhpcy5nYW1lLmdvLmNsaWNrZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5zZXB0aWtvbi5jaG9vc2luZ1RhcmdldHMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDogJ2dvJ30pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuZ2FtZS5nby5ldmVudHMub25JbnB1dERvd24uYWRkKHRoaXMuZ2FtZS5nby5jbGlja2VkLCB0aGlzKTtcblxuICAgIHRoaXMuZ2FtZS5nby5lbmFibGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbnB1dEVuYWJsZWQgPSB0cnVlO1xuICAgIH07XG5cbiAgICB0aGlzLmdhbWUuZ28uZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmZpbHRlcnMgPSBbdGhpcy5nYW1lLmFkZC5maWx0ZXIoJ0dyYXknKV07XG4gICAgICAgIHRoaXMuaW5wdXRFbmFibGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHRoaXMuZ2FtZS5kaWNlID0gbmV3IERpY2UodGhpcy5nYW1lLCA1MCwgNDApO1xuICAgIHRoaXMuZ2FtZS5kaWNlLnNjYWxlLnNldFRvKDAuMjUpO1xuXG4gICAgdGhpcy5nYW1lLmFkZC5leGlzdGluZyh0aGlzLmdhbWUuZGljZSk7XG4gICAgXG4gICAgdGhpcy5nYW1lLmh1ZEdyb3VwLmFkZCh0aGlzLmdhbWUuaHVkQmcpO1xuICAgIHRoaXMuZ2FtZS5odWRHcm91cC5hZGQodGhpcy5nYW1lLmRpY2UpO1xuICAgIHRoaXMuZ2FtZS5odWRHcm91cC5hZGQodGhpcy5nYW1lLmdvKTtcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hZGQodGhpcy5iYWNrZ3JvdW5kKTtcblxuICAgIHRoaXMuZ2FtZS5zZXB0aWtvbi5jcmVhdGVUaWxlQXJyYXkoMzEsIDIxLCB7eDowLXRoaXMuYmFja2dyb3VuZC53aWR0aC8yLCB5OjAtdGhpcy5iYWNrZ3JvdW5kLmhlaWdodC8yfSk7XG5cblxuICAgIHRoaXMucmVmcmVzaEJvYXJkKCk7XG5cbiAgfVxuXG5cbiAgY3JlYXRlTW9kYWxzKCkge1xuICAgICAgdGhpcy5nYW1lLm1vZGFsLmNyZWF0ZU1vZGFsKFxuICAgICAgICB7XG4gICAgICAgIHR5cGU6IFwiYXNrU3RhcnRcIixcbiAgICAgICAgaW5jbHVkZUJhY2tncm91bmQ6IGZhbHNlLFxuICAgICAgICBtb2RhbENsb3NlT25JbnB1dDogZmFsc2UsXG4gICAgICAgIGl0ZW1zQXJyOiBbe1xuICAgICAgICAgICAgdHlwZTogXCJncmFwaGljc1wiLFxuICAgICAgICAgICAgZ3JhcGhpY0NvbG9yOiBcIjB4ZmZmZmZmXCIsXG4gICAgICAgICAgICBncmFwaGljV2lkdGg6IDMwMCxcbiAgICAgICAgICAgIGdyYXBoaWNIZWlnaHQ6IDMwMCxcbiAgICAgICAgICAgIGdyYXBoaWNSYWRpdXM6IDQwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgY29udGVudDogXCJBcmUgeW91IGhhcHB5IHdpdGhcXG4gdGhhdCBjbG9uZSBsYXlvdXQ/XCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkx1Y2tpZXN0IEd1eVwiLFxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxuICAgICAgICAgICAgY29sb3I6IFwiMHgxZTFlMWVcIixcbiAgICAgICAgICAgIG9mZnNldFk6IC01MFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiBcImltYWdlXCIsXG4gICAgICAgICAgICBjb250ZW50OiBcInRleHRfeWVzXCIsXG4gICAgICAgICAgICBvZmZzZXRZOiAxMDAsXG4gICAgICAgICAgICBvZmZzZXRYOiAtODAsXG4gICAgICAgICAgICBjb250ZW50U2NhbGU6IDAuNixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLm1vZGFsLmhpZGVNb2RhbChcImFza1N0YXJ0XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDonc2V0UGxheWVyU3RhdGUnLCB2YWx1ZTonc3RhcnQnfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwidGV4dF9ub1wiLFxuICAgICAgICAgICAgb2Zmc2V0WTogMTAwLFxuICAgICAgICAgICAgb2Zmc2V0WDogODAsXG4gICAgICAgICAgICBjb250ZW50U2NhbGU6IDAuNixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLm1vZGFsLmhpZGVNb2RhbChcImFza1N0YXJ0XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5jbGllbnQuc2VuZElucHV0KHtldmVudDonc2V0UGxheWVyU3RhdGUnLCB2YWx1ZToncmVzZXQnfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIF1cbiAgICB9KTtcbiAgfVxuXG4gIHJlZnJlc2hCb2FyZCgpIHtcblxuICAgIHZhciBzY2FsZSA9IHdpbmRvdy5pbm5lcldpZHRoL3RoaXMuYmFja2dyb3VuZC5oZWlnaHQ7XG4gICAgaWYoc2NhbGUgPiAxLjkpIHtcbiAgICAgICAgc2NhbGUgPSAxLjk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnNjYWxlLnNldFRvKHNjYWxlKTtcbiAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC54ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclg7XG5cbiAgICBpZih0aGlzLmdhbWUuc2VwdGlrb24ucGxheWVyLmlkID09IDEpIHtcbiAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAuYW5nbGUgPSAtOTA7IFxuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWTsgLy8gQ2VudGVyZWQgb24gU2VwdGlrb24gTG9nb1xuICAgICAgICAvL3RoaXMuZ2FtZS5ib2FyZEdyb3VwLnkgPSB0aGlzLmdhbWUud29ybGQuY2VudGVyWSArICgodGhpcy5iYWNrZ3JvdW5kLndpZHRoKnNjYWxlKS13aW5kb3cuaW5uZXJIZWlnaHQpLzI7IC8vIENlbnRlcmVkIG9uIG9wcG9uZW50J3Mgc2lkZVxuICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgLSAoKHRoaXMuYmFja2dyb3VuZC53aWR0aCpzY2FsZSktd2luZG93LmlubmVySGVpZ2h0KS8yOyAvLyBDZW50ZXJlZCBvbiB0aGlzIHBsYXllcidzIHNpZGVcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdhbWUuYm9hcmRHcm91cC5hbmdsZSA9IDkwOyBcbiAgICAgICAgLy90aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclk7IC8vIENlbnRlcmVkIG9uIFNlcHRpa29uIExvZ29cbiAgICAgICAgLy90aGlzLmdhbWUuYm9hcmRHcm91cC55ID0gdGhpcy5nYW1lLndvcmxkLmNlbnRlclkgKyAoKHRoaXMuYmFja2dyb3VuZC53aWR0aCpzY2FsZSktd2luZG93LmlubmVySGVpZ2h0KS8yOyAvLyBDZW50ZXJlZCBvbiBvcHBvbmVudCdzIHNpZGVcbiAgICAgICAgdGhpcy5nYW1lLmJvYXJkR3JvdXAueSA9IHRoaXMuZ2FtZS53b3JsZC5jZW50ZXJZIC0gKCh0aGlzLmJhY2tncm91bmQud2lkdGgqc2NhbGUpLXdpbmRvdy5pbm5lckhlaWdodCkvMjsgLy8gQ2VudGVyZWQgb24gdGhpcyBwbGF5ZXIncyBzaWRlXG4gICAgfVxuXG4gIH1cblxuICBcbiAgdXBkYXRlKCkge1xuICAgIC8vICAgdGhpcy5kaWNlLmZyYW1lID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNikgKyAxO1xuICAgIC8vIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdNb3VzZScsIDcwMCwgMzIpO1xuICAgIFxuICAgIC8vIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdNb3VzZSBYOiAnICsgdGhpcy5nYW1lLmlucHV0LngsIDcwMCwgNjQpO1xuICAgIC8vIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdNb3VzZSBZOiAnICsgdGhpcy5nYW1lLmlucHV0LnksIDcwMCwgOTIpO1xuICB9XG4gIFxuICByZW5kZXIgKCkge1xuICAgICAgdGhpcy5yZWZyZXNoQm9hcmQoKTtcbiAgICAgIC8qXG5cbiAgICB2YXIgeCA9IDMyO1xuICAgIHZhciB5ID0gMDtcbiAgICB2YXIgeWkgPSAzMjtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnVmlld3BvcnQnLCB4LCB5ICs9IHlpKTtcblxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdWaWV3cG9ydCBXaWR0aDogJyArIHRoaXMuZ2FtZS5zY2FsZS52aWV3cG9ydFdpZHRoLCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgnd2luZG93LmlubmVyV2lkdGg6ICcgKyB3aW5kb3cuaW5uZXJXaWR0aCwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3dpbmRvdy5vdXRlcldpZHRoOiAnICsgd2luZG93Lm91dGVyV2lkdGgsIHgsIHkgKz0geWkpO1xuXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ1ZpZXdwb3J0IEhlaWdodDogJyArIHRoaXMuZ2FtZS5zY2FsZS52aWV3cG9ydEhlaWdodCwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3dpbmRvdy5pbm5lckhlaWdodDogJyArIHdpbmRvdy5pbm5lckhlaWdodCwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3dpbmRvdy5vdXRlckhlaWdodDogJyArIHdpbmRvdy5vdXRlckhlaWdodCwgeCwgeSArPSB5aSk7XG5cbiAgICAvLyAgRGV2aWNlOiBIb3cgdG8gZ2V0IGRldmljZSBzaXplLlxuXG4gICAgLy8gIFVzZSB3aW5kb3cuc2NyZWVuLndpZHRoIGZvciBkZXZpY2Ugd2lkdGggYW5kIHdpbmRvdy5zY3JlZW4uaGVpZ2h0IGZvciBkZXZpY2UgaGVpZ2h0LiBcbiAgICAvLyAgLmF2YWlsV2lkdGggYW5kIC5hdmFpbEhlaWdodCBnaXZlIHlvdSB0aGUgZGV2aWNlIHNpemUgbWludXMgVUkgdGFza2JhcnMuIChUcnkgb24gYW4gaVBob25lLikgXG4gICAgLy8gIERldmljZSBzaXplIGlzIHN0YXRpYyBhbmQgZG9lcyBub3QgY2hhbmdlIHdoZW4gdGhlIHBhZ2UgaXMgcmVzaXplZCBvciByb3RhdGVkLlxuXG4gICAgeCA9IDM1MDtcbiAgICB5ID0gMDtcblxuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCdCb2FyZCBHcm91cCcsIHgsIHkgKz0geWkpO1xuXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuZ2FtZS5ib2FyZEdyb3VwLng6ICcgKyB0aGlzLmdhbWUuYm9hcmRHcm91cC54LCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5nYW1lLmJvYXJkR3JvdXAueTogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnksIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmdhbWUuYm9hcmRHcm91cC53aWR0aDogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLndpZHRoLCB4LCB5ICs9IHlpKTtcbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5nYW1lLmJvYXJkR3JvdXAuaGVpZ2h0OiAnICsgdGhpcy5nYW1lLmJvYXJkR3JvdXAuaGVpZ2h0LCB4LCB5ICs9IHlpKTtcblxuICAgIHggPSAzMjtcbiAgICB5ID0gMzAwO1xuXG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ0JhY2tncm91bmQgRGV0YWlsJywgeCwgeSArPSB5aSk7XG5cbiAgICB0aGlzLmdhbWUuZGVidWcudGV4dCgndGhpcy5iYWNrZ3JvdW5kLng6ICcgKyB0aGlzLmJhY2tncm91bmQueCwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC55OiAnICsgdGhpcy5iYWNrZ3JvdW5kLnksIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQud2lkdGg6ICcgKyB0aGlzLmJhY2tncm91bmQud2lkdGgsIHgsIHkgKz0geWkpO1xuICAgIHRoaXMuZ2FtZS5kZWJ1Zy50ZXh0KCd0aGlzLmJhY2tncm91bmQuaGVpZ2h0OiAnICsgdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCwgeCwgeSArPSB5aSk7XG4gICAgdGhpcy5nYW1lLmRlYnVnLnRleHQoJ3RoaXMuYmFja2dyb3VuZC5zY2FsZTogJyArIHRoaXMuZ2FtZS5ib2FyZEdyb3VwLnNjYWxlLngsIHgsIHkgKz0geWkpO1xuICAgICovXG4gICAgfVxuICAgIFxuICB0b2dnbGVGdWxsc2NyZWVuKCkge1xuICAgIGlmKHRoaXMuZ2FtZS5zY2FsZS5pc0Z1bGxTY3JlZW4pIHtcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnN0b3BGdWxsU2NyZWVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nYW1lLnNjYWxlLnN0YXJ0RnVsbFNjcmVlbihmYWxzZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG4iLCJjbGFzcyBNZW51IGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIC8vYWRkIGJhY2tncm91bmQgaW1hZ2VcbiAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLDAsJ2JhY2tncm91bmQnKTtcbiAgICB0aGlzLmJnUmF0aW8gPSB0aGlzLmJhY2tncm91bmQudGV4dHVyZS53aWR0aCAvIHRoaXMuYmFja2dyb3VuZC50ZXh0dXJlLmhlaWdodDtcbiAgICB0aGlzLndvcmxkUmF0aW8gPSB0aGlzLmdhbWUud29ybGQud2lkdGggLyB0aGlzLmdhbWUud29ybGQuaGVpZ2h0O1xuICAgIGlmICgoKHRoaXMud29ybGRSYXRpbyAtIHRoaXMuYmdSYXRpbykgLyAyICogdGhpcy5nYW1lLndvcmxkLndpZHRoKSA+IDApIHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLndpZHRoID0gdGhpcy5nYW1lLndvcmxkLmhlaWdodC90aGlzLmJhY2tncm91bmQudGV4dHVyZS5oZWlnaHQqdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUud2lkdGg7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQgPSB0aGlzLmdhbWUud29ybGQuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJhY2tncm91bmQueCA9ICh0aGlzLmdhbWUud29ybGQud2lkdGggLSB0aGlzLmJhY2tncm91bmQud2lkdGgpIC8gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJhY2tncm91bmQud2lkdGggPSB0aGlzLmdhbWUud29ybGQud2lkdGg7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQgPSB0aGlzLmdhbWUud29ybGQud2lkdGgvdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUud2lkdGgqdGhpcy5iYWNrZ3JvdW5kLnRleHR1cmUuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJhY2tncm91bmQueSA9ICh0aGlzLmdhbWUud29ybGQuaGVpZ2h0IC0gdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCkgLyAyO1xuICAgIH1cblxuICAgIC8vYWRkIGludHJvIHRleHRcbiAgICB0aGlzLmdhbWVvdmVyVGV4dCA9IHRoaXMuYWRkLnRleHQodGhpcy5nYW1lLndvcmxkLmNlbnRlclgsdGhpcy5nYW1lLndvcmxkLmNlbnRlclksIFwiU2NvcmUgPSBcIit0aGlzLmdhbWUuZ2xvYmFsLnNjb3JlLCB7XG4gICAgICBmb250OiAnNDJweCBBcmlhbCcsIGZpbGw6ICcjZmZmZmZmJywgYWxpZ246ICdjZW50ZXInXG4gICAgfSk7XG4gICAgdGhpcy5nYW1lb3ZlclRleHQuYW5jaG9yLnNldCgwLjUpO1xuXG4gICAgdGhpcy5pbnB1dC5vbkRvd24uYWRkKHRoaXMub25JbnB1dERvd24sIHRoaXMpO1xuXG4gICAgLy9wcmV2ZW50IGFjY2lkZW50YWwgY2xpY2stdGhydSBieSBub3QgYWxsb3dpbmcgc3RhdGUgdHJhbnNpdGlvbiBmb3IgYSBzaG9ydCB0aW1lXG4gICAgdGhpcy5jYW5Db250aW51ZVRvTmV4dFN0YXRlID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lLnRpbWUuZXZlbnRzLmFkZChQaGFzZXIuVGltZXIuU0VDT05EICogMC41LCBmdW5jdGlvbigpeyB0aGlzLmNhbkNvbnRpbnVlVG9OZXh0U3RhdGUgPSB0cnVlOyB9LCB0aGlzKTtcblxuICAgIHRoaXMuc2F2ZVZhcnNUb0xvY2FsU3RvcmFnZSgpO1xuICAgIHRoaXMucmVzZXRHbG9iYWxWYXJpYWJsZXMoKTtcbiAgfVxuXG4gIHNhdmVWYXJzVG9Mb2NhbFN0b3JhZ2UoKXtcbiAgICB2YXIgbWF4ID0gbG9jYWxTdG9yYWdlLm1heFNjb3JlIHx8IDA7IC8vZGVmYXVsdCB2YWx1ZSBvZiAwIGlzIGl0IGRvZXMgbm90IGV4aXN0XG4gICAgaWYgKHRoaXMuZ2FtZS5nbG9iYWwuc2NvcmUgPiBtYXgpeyBsb2NhbFN0b3JhZ2UubWF4U2NvcmUgPSB0aGlzLmdhbWUuZ2xvYmFsLnNjb3JlOyB9XG4gIH1cblxuICByZXNldEdsb2JhbFZhcmlhYmxlcygpe1xuICAgIHRoaXMuZ2FtZS5nbG9iYWwuc2NvcmUgPSAwO1xuICB9XG4gIHVwZGF0ZSgpIHt9XG5cbiAgb25JbnB1dERvd24gKCkge1xuICAgIGlmKHRoaXMuY2FuQ29udGludWVUb05leHRTdGF0ZSl7XG4gICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoJ21lbnUnKTtcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIiwiY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYXNzZXQgPSBudWxsO1xuICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcbiAgfVxuXG4gIHByZWxvYWQoKSB7XG4gICAgLy9zZXR1cCBsb2FkaW5nIGJhclxuICAgIHRoaXMuYXNzZXQgPSB0aGlzLmFkZC5zcHJpdGUodGhpcy5nYW1lLndpZHRoICogMC41IC0gMTEwLCB0aGlzLmdhbWUuaGVpZ2h0ICogMC41IC0gMTAsICdwcmVsb2FkZXInKTtcbiAgICB0aGlzLmxvYWQuc2V0UHJlbG9hZFNwcml0ZSh0aGlzLmFzc2V0KTtcbiAgICBcbiAgICAvL1NldHVwIGxvYWRpbmcgYW5kIGl0cyBldmVudHNcbiAgICB0aGlzLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkT25jZSh0aGlzLm9uTG9hZENvbXBsZXRlLCB0aGlzKTtcbiAgICB0aGlzLmxvYWRSZXNvdXJjZXMoKTtcbiAgfVxuXG4gIGxvYWRSZXNvdXJjZXMoKSB7XG4gICAgICBcbiAgICAvL01FTlUgUkVTT1VSQ0VTXG4gICAgLy9tZW51IGJhY2tncm91bmRcbiAgICAvL3RleHQgaW1hZ2VzXG4gICAgLy9tdXNpYyBmaWxlcyA/XG4gICAgLy8gIExvYWQgZmlsdGVyIHNjcmlwdHNcbiAgICAvLyB0aGlzLmdhbWUubG9hZC5zY3JpcHQoJ2dyYXknLCAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9waG90b25zdG9ybS9waGFzZXIvbWFzdGVyL3YyL2ZpbHRlcnMvR3JheS5qcycpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLnNjcmlwdCgnZ3JheScsICdodHRwczovL2Nkbi5yYXdnaXQuY29tL3Bob3RvbnN0b3JtL3BoYXNlci1jZS9tYXN0ZXIvZmlsdGVycy9HcmF5LmpzJyk7XG5cbiAgICBcbiAgICAvL2xvYWQgZ2FtZSBkYXRhXG4gICAgdGhpcy5nYW1lLmxvYWQuanNvbigndGlsZURldGFpbCcsICdhc3NldHMvdGlsZURldGFpbC5qc29uJyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuanNvbignd2FsbEdyaWQnLCAnYXNzZXRzL3dhbGxHcmlkLmpzb24nKTtcbiAgXG4gICAgLy9HQU1FIFJFU09VUkNFU1xuICAgIC8vZ2FtZSBib2FyZCBiYWNrZ3JvdW5kXG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ2JhY2tncm91bmQnLCdhc3NldHMvbWVkaXVtX2JvYXJkLnBuZycpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdkaWNlJywnYXNzZXRzL2RpY2UucG5nJywgMTI4LCAxOTQsIDEwKTtcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgnaHVkLWJnJywnYXNzZXRzL2h1ZC1iZy5wbmcnKTtcbiAgICBcbiAgICAvLyBtb2RhbCBpbWFnZXNcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF95ZXMnLCdhc3NldHMvdGV4dF95ZXMucG5nJyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoJ3RleHRfbm8nLCdhc3NldHMvdGV4dF9uby5wbmcnKTtcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9nbycsJ2Fzc2V0cy90ZXh0X2dvLnBuZycpO1xuXG4gICAgLy9wbGF5ZXIgdG9rZW5zIHNwcml0ZXNoZWV0c1xuICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdjbG9uZScsICdhc3NldHMvY2xvbmUucG5nJywgMTEwLCAxNjgpO1xuICAgIHRoaXMuZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdvcmRuYW5jZScsICdhc3NldHMvb3JkbmFuY2UucG5nJywyNjQsIDI2NCwgNyk7XG4gICAgdGhpcy5nYW1lLmxvYWQuYXRsYXMoJ2Jvb20nLCAnYXNzZXRzL2Jvb20ucG5nJywgJ2Fzc2V0cy9ib29tLmpzb24nLCBQaGFzZXIuTG9hZGVyLlRFWFRVUkVfQVRMQVNfSlNPTl9IQVNIKTtcblxuICAgIC8vYXVkaW8gZmlsZXMgXG4gICAgXG4gICAgLy90aGlzLmdhbWUubG9hZC5pbWFnZSgnY3Jvc3NoYWlycycsICdhc3NldHMvY3Jvc3NoYWlyX3JlZF9zbWFsbC5wbmcnKTtcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9nbycsICdhc3NldHMvdGV4dF9nby5wbmcnKTtcbiAgICB0aGlzLmdhbWUubG9hZC5pbWFnZSgndGV4dF9yZWFkeScsICdhc3NldHMvdGV4dF9yZWFkeS5wbmcnKTtcblxuICAgIC8vdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoJ3RhcmdldCcsICdhc3NldHMvdGFyZ2V0LnBuZycsMTI4LjY2LDEyOCk7XG5cbiAgICAvL3RoaXMuZ2FtZS5sb2FkLmF1ZGlvKCdndW5zaG90JywnYXNzZXRzL2d1bnNob3Qud2F2Jyk7XG4gICAgLy90aGlzLmdhbWUubG9hZC5hdWRpbygnZGluZycsJ2Fzc2V0cy9kaW5nLndhdicpO1xuICB9XG5cbiAgb25Mb2FkQ29tcGxldGUoKSB7XG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdzZXR1cCcpO1xuICAgIC8vdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJlbG9hZGVyO1xuIiwiaW1wb3J0IFNlcHRpa29uIGZyb20gJy4uL3ByZWZhYnMvc2VwdGlrb24nO1xuXG5jbGFzcyBTZXJ2ZXJGdWxsIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIGNvbnNvbGUubG9nKFwiU2VydmVyIGlzIGZ1bGwuIFRyeSBhZ2FpbiBsYXRlci5cIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VydmVyRnVsbDtcbiIsImNsYXNzIFNldHVwIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuIH1cbiAgXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmdhbWUubmFtZSA9IFwidXNlclwiO1xuXG4gICAgdGhpcy5nYW1lLnN0YWdlLmRpc2FibGVWaXNpYmlsaXR5Q2hhbmdlID0gdHJ1ZTtcbiAgICBcbiAgICAvLyB0aGlzLmdhbWUubW9kYWwgPSBuZXcgZ2FtZU1vZGFsKHRoaXMuZ2FtZSk7XG4gICAgLy8gdGhpcy5jcmVhdGVNb2RhbHMoKTtcbiAgICAvLyB0aGlzLmdhbWUubW9kYWwuc2hvd01vZGFsKCd1c2VybmFtZScpO1xuXG4gICAgLy8gdGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmFkZENhbGxiYWNrcyh0aGlzLCBudWxsLCBudWxsLCB0aGlzLmtleVByZXNzKTtcbiAgICAvLyB0aGlzLmJrc3AgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5LZXlib2FyZC5CQUNLU1BBQ0UpO1xuICAgIC8vIHRoaXMuYmtzcC5vbkRvd24uYWRkKHRoaXMua2V5UHJlc3MsIHRoaXMpO1xuICAgIC8vIHRoaXMuZW50ZXIgPSB0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5LZXlib2FyZC5FTlRFUik7XG4gICAgLy8gdGhpcy5lbnRlci5vbkRvd24uYWRkKHRoaXMua2V5UHJlc3MsIHRoaXMpO1xuICAgIHRoaXMuZ2FtZS5jbGllbnQuYXNrTmV3UGxheWVyKCk7XG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KCdnYW1lJyk7XG4gICAgcmV0dXJuO1xuICAgIC8vdGhpcy5nYW1lLnNlcHRpa29uLnNldHVwKCk7XG4gICAgXG59XG5cbmtleVByZXNzKGNoYXIpIHtcblxuICAgIGlmKHR5cGVvZihjaGFyKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBpZiAoY2hhci5ldmVudC5jb2RlID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydCgnZ2FtZScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXIuZXZlbnQuY29kZSA9PT0gXCJCYWNrc3BhY2VcIikge1xuICAgICAgICAgICAgdGhpcy5nYW1lLm5hbWUgPSB0aGlzLmdhbWUubmFtZS5zdWJzdHJpbmcoMCwgdGhpcy5nYW1lLm5hbWUubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY2hhciA9PSBcIiBcIikge1xuICAgICAgICAgICAgY2hhciA9IFwiX1wiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2FtZS5uYW1lICs9IGNoYXI7XG4gICAgfVxuICAgIHRoaXMuZ2FtZS5tb2RhbC51cGRhdGVNb2RhbFZhbHVlKHRoaXMuZ2FtZS5uYW1lLCAndXNlcm5hbWUnLCA0KTtcbn1cbiAgXG4gIGNyZWF0ZU1vZGFscygpIHtcbiAgXG4gICAgLy8gU3RhcnQgR2FtZVxuICAgIHRoaXMuZ2FtZS5tb2RhbC5jcmVhdGVNb2RhbChcbiAgICAgICAge1xuICAgICAgICB0eXBlOiBcInVzZXJuYW1lXCIsXG4gICAgICAgIGluY2x1ZGVCYWNrZ3JvdW5kOiB0cnVlLFxuICAgICAgICBtb2RhbENsb3NlT25JbnB1dDogdHJ1ZSxcbiAgICAgICAgaXRlbXNBcnI6IFt7XG4gICAgICAgICAgICB0eXBlOiBcImdyYXBoaWNzXCIsXG4gICAgICAgICAgICBncmFwaGljQ29sb3I6IFwiMHhmZmZmZmZcIixcbiAgICAgICAgICAgIGdyYXBoaWNXaWR0aDogMzAwLFxuICAgICAgICAgICAgZ3JhcGhpY0hlaWdodDogMzAwLFxuICAgICAgICAgICAgZ3JhcGhpY1JhZGl1czogNDBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBjb250ZW50OiBcIlR5cGUgYSB1c2VybmFtZSxcXG50aGVuIGhpdCA8RU5URVI+XFxuXFxuKG1heCBvZiAyNSBjaGFyYWN0ZXJzKVwiLFxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJMdWNraWVzdCBHdXlcIixcbiAgICAgICAgICAgIGZvbnRTaXplOiAyMixcbiAgICAgICAgICAgIGNvbG9yOiBcIjB4MWUxZTFlXCIsXG4gICAgICAgICAgICBvZmZzZXRZOiAtNTBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmdhbWUubmFtZSxcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiTHVja2llc3QgR3V5XCIsXG4gICAgICAgICAgICBmb250U2l6ZTogMjIsXG4gICAgICAgICAgICBjb2xvcjogXCIweDFlMWUxZVwiLFxuICAgICAgICAgICAgb2Zmc2V0WTogNTBcbiAgICAgICAgfSwgXVxuICAgIH0pO1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2V0dXA7XG4iXX0=
