const AFFINITY_DATA = {
  "description": "Silver and Blood - Affinity System Data",
  "camps": {
    "0": "Universal",
    "1": "Ancestral",
    "2": "Tempus Church",
    "3": "Bloodborn",
    "4": "Kingdom",
    "5": "Otherworldly"
  },
  "gifts": [
    {
      "id": 800001,
      "name": "Tranquility Tea",
      "description": "A bland pot of green tea served to Vassals. Simple meal, slightly heightens Affinity.",
      "icon": "items/800001.png",
      "rarity": 2,
      "camp": 0,
      "campName": "Universal",
      "normalExp": 50,
      "matchingCampExp": 50
    },
    {
      "id": 800002,
      "name": "Fragrant Scarlet Charm",
      "description": "A fragrant pot of Earl Grey tea served to Vassals. Fancy meal, moderately heightens Affinity.",
      "icon": "items/800002.png",
      "rarity": 3,
      "camp": 0,
      "campName": "Universal",
      "normalExp": 100,
      "matchingCampExp": 100
    },
    {
      "id": 800003,
      "name": "Afternoon of Leisure",
      "description": "A pot of exotic fruit-infused tea paired with delicious snacks served to Vassals. Luxury meal, greatly heightens Affinity.",
      "icon": "items/800003.png",
      "rarity": 4,
      "camp": 0,
      "campName": "Universal",
      "normalExp": 200,
      "matchingCampExp": 200
    },
    {
      "id": 800011,
      "name": "Rising Star",
      "description": "A small flask filled with starry liquid, served to Ancestral Vassals. Simple meal, slightly heightens Affinity.",
      "icon": "items/800011.png",
      "rarity": 2,
      "camp": 1,
      "campName": "Ancestral",
      "normalExp": 25,
      "matchingCampExp": 125
    },
    {
      "id": 800012,
      "name": "Starshard Embers",
      "description": "A fancy chalice filled with starry liquid, served to Ancestral Vassals. Fancy meal, moderately heightens Affinity.",
      "icon": "items/800012.png",
      "rarity": 3,
      "camp": 1,
      "campName": "Ancestral",
      "normalExp": 50,
      "matchingCampExp": 250
    },
    {
      "id": 800013,
      "name": "Celestial Flame",
      "description": "An exquisite chalice filled with starry liquid, served to Ancestral Vassals. Luxury meal, greatly heightens Affinity.",
      "icon": "items/800013.png",
      "rarity": 4,
      "camp": 1,
      "campName": "Ancestral",
      "normalExp": 100,
      "matchingCampExp": 500
    },
    {
      "id": 800021,
      "name": "Simple Meal",
      "description": "Classic meal for the Tempus Church served to Church Vassals. Simple meal, slightly heightens Affinity.",
      "icon": "items/800021.png",
      "rarity": 2,
      "camp": 2,
      "campName": "Tempus Church",
      "normalExp": 25,
      "matchingCampExp": 125
    },
    {
      "id": 800022,
      "name": "Holy Delicacy",
      "description": "Classic meal for the Tempus Church served to Church Vassals. Fancy meal, moderately heightens Affinity.",
      "icon": "items/800022.png",
      "rarity": 3,
      "camp": 2,
      "campName": "Tempus Church",
      "normalExp": 50,
      "matchingCampExp": 250
    },
    {
      "id": 800023,
      "name": "Regal Treat",
      "description": "Classic meal for the Tempus Church served to Church Vassals. Luxury meal, greatly heightens Affinity.",
      "icon": "items/800023.png",
      "rarity": 4,
      "camp": 2,
      "campName": "Tempus Church",
      "normalExp": 100,
      "matchingCampExp": 500
    },
    {
      "id": 800031,
      "name": "Taste of Captivity",
      "description": "Slightly roasted tender steak, served to Bloodborn Vassals. Simple meal, slightly heightens Affinity.",
      "icon": "items/800031.png",
      "rarity": 2,
      "camp": 3,
      "campName": "Bloodborn",
      "normalExp": 25,
      "matchingCampExp": 125
    },
    {
      "id": 800032,
      "name": "Banquet of Captivity",
      "description": "Slightly roasted tender steak with aromatic blood essence. Served to Bloodborn Vassals. Fancy meal, moderately heightens Affinity.",
      "icon": "items/800032.png",
      "rarity": 3,
      "camp": 3,
      "campName": "Bloodborn",
      "normalExp": 50,
      "matchingCampExp": 250
    },
    {
      "id": 800033,
      "name": "Doomed Banquet",
      "description": "Slightly roasted tender steak with aromatic blood essence. Served to Bloodborn Vassals. Luxury meal, greatly heightens Affinity.",
      "icon": "items/800033.png",
      "rarity": 4,
      "camp": 3,
      "campName": "Bloodborn",
      "normalExp": 100,
      "matchingCampExp": 500
    },
    {
      "id": 800041,
      "name": "Farmyard Crops",
      "description": "Exquisitely cooked fresh seafood, served to Kingdom Vassals. Simple meal, slightly heightens Affinity.",
      "icon": "items/800041.png",
      "rarity": 2,
      "camp": 4,
      "campName": "Kingdom",
      "normalExp": 25,
      "matchingCampExp": 125
    },
    {
      "id": 800042,
      "name": "Compromised Sovereignty",
      "description": "Exquisitely cooked fresh seafood with colorful vegetables, served to Kingdom Vassals. Fancy meal, moderately heightens Affinity.",
      "icon": "items/800042.png",
      "rarity": 3,
      "camp": 4,
      "campName": "Kingdom",
      "normalExp": 50,
      "matchingCampExp": 250
    },
    {
      "id": 800043,
      "name": "Winged Nobility",
      "description": "Exquisitely cooked fresh seafood with colorful vegetables, served to Kingdom Vassals. Luxury meal, greatly heightens Affinity.",
      "icon": "items/800043.png",
      "rarity": 4,
      "camp": 4,
      "campName": "Kingdom",
      "normalExp": 100,
      "matchingCampExp": 500
    },
    {
      "id": 800051,
      "name": "Otherworldly Aroma",
      "description": "Strange food from an unknown realm, served to Otherworldly Vassals. Simple meal, slightly heightens Affinity.",
      "icon": "items/800051.png",
      "rarity": 2,
      "camp": 5,
      "campName": "Otherworldly",
      "normalExp": 25,
      "matchingCampExp": 125
    },
    {
      "id": 800052,
      "name": "Otherworldly Delicacy",
      "description": "Strange food from an unknown realm, served to Otherworldly Vassals. Fancy meal, moderately heightens Affinity.",
      "icon": "items/800052.png",
      "rarity": 3,
      "camp": 5,
      "campName": "Otherworldly",
      "normalExp": 50,
      "matchingCampExp": 250
    },
    {
      "id": 800053,
      "name": "Otherworldly Feast",
      "description": "Strange food from an unknown realm, served to Otherworldly Vassals. Luxury meal, greatly heightens Affinity.",
      "icon": "items/800053.png",
      "rarity": 4,
      "camp": 5,
      "campName": "Otherworldly",
      "normalExp": 100,
      "matchingCampExp": 500
    }
  ],
  "templates": {
    "template1": {
      "maxRank": 40,
      "characters": [
        {
          "name": "Ethereal Joan",
          "camp": 1,
          "campName": "Ancestral"
        },
        {
          "name": "Fleeting Bella",
          "camp": 4,
          "campName": "Kingdom"
        },
        {
          "name": "Incendiary Agares",
          "camp": 1,
          "campName": "Ancestral"
        },
        {
          "name": "Jinxed Selena",
          "camp": 4,
          "campName": "Kingdom"
        },
        {
          "name": "Julius",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Limine",
          "camp": 1,
          "campName": "Ancestral"
        },
        {
          "name": "Lorelei",
          "camp": 4,
          "campName": "Kingdom"
        },
        {
          "name": "Noah",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Seth",
          "camp": 1,
          "campName": "Ancestral"
        },
        {
          "name": "Sirene",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Timeless Aiona",
          "camp": 1,
          "campName": "Ancestral"
        },
        {
          "name": "Transcendent Ami",
          "camp": 1,
          "campName": "Ancestral"
        },
        {
          "name": "Transcendent Hati",
          "camp": 1,
          "campName": "Ancestral"
        },
        {
          "name": "Transcendent Noah",
          "camp": 1,
          "campName": "Ancestral"
        },
        {
          "name": "Valora",
          "camp": 1,
          "campName": "Ancestral"
        }
      ],
      "ranks": [
        {
          "rank": 1,
          "expRequired": 0,
          "breakCondition": null,
          "HP": 0,
          "ATK": 0,
          "PDEF": 0,
          "MDEF": 0
        },
        {
          "rank": 2,
          "expRequired": 150,
          "breakCondition": null,
          "HP": 160,
          "ATK": 12,
          "PDEF": 4,
          "MDEF": 4
        },
        {
          "rank": 3,
          "expRequired": 460,
          "breakCondition": null,
          "HP": 352,
          "ATK": 26,
          "PDEF": 8,
          "MDEF": 8
        },
        {
          "rank": 4,
          "expRequired": 780,
          "breakCondition": null,
          "HP": 576,
          "ATK": 43,
          "PDEF": 14,
          "MDEF": 14
        },
        {
          "rank": 5,
          "expRequired": 1110,
          "breakCondition": null,
          "HP": 800,
          "ATK": 60,
          "PDEF": 19,
          "MDEF": 19
        },
        {
          "rank": 6,
          "expRequired": 1450,
          "breakCondition": null,
          "HP": 1056,
          "ATK": 79,
          "PDEF": 25,
          "MDEF": 25
        },
        {
          "rank": 7,
          "expRequired": 1800,
          "breakCondition": null,
          "HP": 1312,
          "ATK": 98,
          "PDEF": 31,
          "MDEF": 31
        },
        {
          "rank": 8,
          "expRequired": 2160,
          "breakCondition": null,
          "HP": 1600,
          "ATK": 120,
          "PDEF": 38,
          "MDEF": 38
        },
        {
          "rank": 9,
          "expRequired": 2530,
          "breakCondition": null,
          "HP": 1856,
          "ATK": 139,
          "PDEF": 44,
          "MDEF": 44
        },
        {
          "rank": 10,
          "expRequired": 2910,
          "breakCondition": 1,
          "HP": 2144,
          "ATK": 161,
          "PDEF": 50,
          "MDEF": 50
        },
        {
          "rank": 11,
          "expRequired": 3300,
          "breakCondition": null,
          "HP": 2432,
          "ATK": 182,
          "PDEF": 57,
          "MDEF": 57
        },
        {
          "rank": 12,
          "expRequired": 3700,
          "breakCondition": null,
          "HP": 2720,
          "ATK": 204,
          "PDEF": 64,
          "MDEF": 64
        },
        {
          "rank": 13,
          "expRequired": 4120,
          "breakCondition": null,
          "HP": 3040,
          "ATK": 228,
          "PDEF": 71,
          "MDEF": 71
        },
        {
          "rank": 14,
          "expRequired": 4550,
          "breakCondition": null,
          "HP": 3328,
          "ATK": 250,
          "PDEF": 78,
          "MDEF": 78
        },
        {
          "rank": 15,
          "expRequired": 4990,
          "breakCondition": null,
          "HP": 3648,
          "ATK": 274,
          "PDEF": 86,
          "MDEF": 86
        },
        {
          "rank": 16,
          "expRequired": 5440,
          "breakCondition": null,
          "HP": 3968,
          "ATK": 298,
          "PDEF": 93,
          "MDEF": 93
        },
        {
          "rank": 17,
          "expRequired": 5910,
          "breakCondition": null,
          "HP": 4288,
          "ATK": 322,
          "PDEF": 101,
          "MDEF": 101
        },
        {
          "rank": 18,
          "expRequired": 6390,
          "breakCondition": null,
          "HP": 4608,
          "ATK": 346,
          "PDEF": 108,
          "MDEF": 108
        },
        {
          "rank": 19,
          "expRequired": 6890,
          "breakCondition": null,
          "HP": 4928,
          "ATK": 370,
          "PDEF": 116,
          "MDEF": 116
        },
        {
          "rank": 20,
          "expRequired": 7400,
          "breakCondition": 2,
          "HP": 5280,
          "ATK": 396,
          "PDEF": 124,
          "MDEF": 124
        },
        {
          "rank": 21,
          "expRequired": 7930,
          "breakCondition": null,
          "HP": 5600,
          "ATK": 420,
          "PDEF": 131,
          "MDEF": 131
        },
        {
          "rank": 22,
          "expRequired": 8470,
          "breakCondition": null,
          "HP": 5952,
          "ATK": 446,
          "PDEF": 140,
          "MDEF": 140
        },
        {
          "rank": 23,
          "expRequired": 9030,
          "breakCondition": null,
          "HP": 6272,
          "ATK": 470,
          "PDEF": 147,
          "MDEF": 147
        },
        {
          "rank": 24,
          "expRequired": 9610,
          "breakCondition": null,
          "HP": 6624,
          "ATK": 497,
          "PDEF": 155,
          "MDEF": 155
        },
        {
          "rank": 25,
          "expRequired": 10200,
          "breakCondition": null,
          "HP": 6976,
          "ATK": 523,
          "PDEF": 164,
          "MDEF": 164
        },
        {
          "rank": 26,
          "expRequired": 10810,
          "breakCondition": null,
          "HP": 7328,
          "ATK": 550,
          "PDEF": 172,
          "MDEF": 172
        },
        {
          "rank": 27,
          "expRequired": 11440,
          "breakCondition": null,
          "HP": 7680,
          "ATK": 576,
          "PDEF": 180,
          "MDEF": 180
        },
        {
          "rank": 28,
          "expRequired": 12090,
          "breakCondition": null,
          "HP": 8032,
          "ATK": 602,
          "PDEF": 188,
          "MDEF": 188
        },
        {
          "rank": 29,
          "expRequired": 12760,
          "breakCondition": null,
          "HP": 8384,
          "ATK": 629,
          "PDEF": 197,
          "MDEF": 197
        },
        {
          "rank": 30,
          "expRequired": 13450,
          "breakCondition": 3,
          "HP": 8736,
          "ATK": 655,
          "PDEF": 205,
          "MDEF": 205
        },
        {
          "rank": 31,
          "expRequired": 14160,
          "breakCondition": null,
          "HP": 9120,
          "ATK": 684,
          "PDEF": 214,
          "MDEF": 214
        },
        {
          "rank": 32,
          "expRequired": 14890,
          "breakCondition": null,
          "HP": 9472,
          "ATK": 710,
          "PDEF": 222,
          "MDEF": 222
        },
        {
          "rank": 33,
          "expRequired": 15640,
          "breakCondition": null,
          "HP": 9856,
          "ATK": 739,
          "PDEF": 231,
          "MDEF": 231
        },
        {
          "rank": 34,
          "expRequired": 16410,
          "breakCondition": null,
          "HP": 10208,
          "ATK": 766,
          "PDEF": 239,
          "MDEF": 239
        },
        {
          "rank": 35,
          "expRequired": 17210,
          "breakCondition": null,
          "HP": 10592,
          "ATK": 794,
          "PDEF": 248,
          "MDEF": 248
        },
        {
          "rank": 36,
          "expRequired": 18030,
          "breakCondition": null,
          "HP": 10976,
          "ATK": 823,
          "PDEF": 257,
          "MDEF": 257
        },
        {
          "rank": 37,
          "expRequired": 18870,
          "breakCondition": null,
          "HP": 11328,
          "ATK": 850,
          "PDEF": 266,
          "MDEF": 266
        },
        {
          "rank": 38,
          "expRequired": 19740,
          "breakCondition": null,
          "HP": 11712,
          "ATK": 878,
          "PDEF": 275,
          "MDEF": 275
        },
        {
          "rank": 39,
          "expRequired": 20640,
          "breakCondition": null,
          "HP": 12096,
          "ATK": 907,
          "PDEF": 284,
          "MDEF": 284
        },
        {
          "rank": 40,
          "expRequired": 21560,
          "breakCondition": null,
          "HP": 12480,
          "ATK": 936,
          "PDEF": 293,
          "MDEF": 293
        }
      ]
    },
    "template2": {
      "maxRank": 30,
      "characters": [
        {
          "name": "Acappella",
          "camp": 2,
          "campName": "Tempus Church"
        },
        {
          "name": "Agares",
          "camp": 2,
          "campName": "Tempus Church"
        },
        {
          "name": "Agnes",
          "camp": 4,
          "campName": "Kingdom"
        },
        {
          "name": "Aiona",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Albrecht",
          "camp": 2,
          "campName": "Tempus Church"
        },
        {
          "name": "Alene",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Alexi",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Ami",
          "camp": 4,
          "campName": "Kingdom"
        },
        {
          "name": "Augustine",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Baphomet",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Bella",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Cain",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Cecia",
          "camp": 4,
          "campName": "Kingdom"
        },
        {
          "name": "Clive",
          "camp": 4,
          "campName": "Kingdom"
        },
        {
          "name": "Clive Jr.",
          "camp": 4,
          "campName": "Kingdom"
        },
        {
          "name": "Dalcarlo",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Darcias",
          "camp": 2,
          "campName": "Tempus Church"
        },
        {
          "name": "Edina",
          "camp": 2,
          "campName": "Tempus Church"
        },
        {
          "name": "Empousa",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Fanny",
          "camp": 2,
          "campName": "Tempus Church"
        },
        {
          "name": "Friedrich",
          "camp": 4,
          "campName": "Kingdom"
        },
        {
          "name": "Gadric",
          "camp": 2,
          "campName": "Tempus Church"
        },
        {
          "name": "Genevieve",
          "camp": 4,
          "campName": "Kingdom"
        },
        {
          "name": "Gilrain",
          "camp": 4,
          "campName": "Kingdom"
        },
        {
          "name": "Goldland",
          "camp": 4,
          "campName": "Kingdom"
        },
        {
          "name": "Hati",
          "camp": 4,
          "campName": "Kingdom"
        },
        {
          "name": "Jestel",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Joan",
          "camp": 2,
          "campName": "Tempus Church"
        },
        {
          "name": "Lamia",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Letitia",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Limine",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Livian",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Mass",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Nicole",
          "camp": 2,
          "campName": "Tempus Church"
        },
        {
          "name": "Noah",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Ottavia",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Pavana",
          "camp": 2,
          "campName": "Tempus Church"
        },
        {
          "name": "Piera",
          "camp": 2,
          "campName": "Tempus Church"
        },
        {
          "name": "Quinn",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Regina",
          "camp": 4,
          "campName": "Kingdom"
        },
        {
          "name": "Ressa",
          "camp": 4,
          "campName": "Kingdom"
        },
        {
          "name": "Selena",
          "camp": 4,
          "campName": "Kingdom"
        },
        {
          "name": "Seraphina",
          "camp": 2,
          "campName": "Tempus Church"
        },
        {
          "name": "Setti",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Setti",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Spectral Gilrain",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Starry-Eyed Aiona",
          "camp": 4,
          "campName": "Kingdom"
        },
        {
          "name": "Stella",
          "camp": 3,
          "campName": "Bloodborn"
        },
        {
          "name": "Theophane",
          "camp": 2,
          "campName": "Tempus Church"
        },
        {
          "name": "Thibault",
          "camp": 2,
          "campName": "Tempus Church"
        },
        {
          "name": "Tris",
          "camp": 2,
          "campName": "Tempus Church"
        },
        {
          "name": "Van Helsing",
          "camp": 2,
          "campName": "Tempus Church"
        },
        {
          "name": "Yggdrasill",
          "camp": 2,
          "campName": "Tempus Church"
        }
      ],
      "ranks": [
        {
          "rank": 1,
          "expRequired": 0,
          "breakCondition": null,
          "HP": 0,
          "ATK": 0,
          "PDEF": 0,
          "MDEF": 0
        },
        {
          "rank": 2,
          "expRequired": 150,
          "breakCondition": null,
          "HP": 200,
          "ATK": 10,
          "PDEF": 5,
          "MDEF": 5
        },
        {
          "rank": 3,
          "expRequired": 460,
          "breakCondition": null,
          "HP": 440,
          "ATK": 22,
          "PDEF": 11,
          "MDEF": 11
        },
        {
          "rank": 4,
          "expRequired": 780,
          "breakCondition": null,
          "HP": 720,
          "ATK": 36,
          "PDEF": 18,
          "MDEF": 18
        },
        {
          "rank": 5,
          "expRequired": 1110,
          "breakCondition": null,
          "HP": 1000,
          "ATK": 50,
          "PDEF": 25,
          "MDEF": 25
        },
        {
          "rank": 6,
          "expRequired": 1450,
          "breakCondition": null,
          "HP": 1320,
          "ATK": 66,
          "PDEF": 33,
          "MDEF": 33
        },
        {
          "rank": 7,
          "expRequired": 1800,
          "breakCondition": null,
          "HP": 1640,
          "ATK": 82,
          "PDEF": 41,
          "MDEF": 41
        },
        {
          "rank": 8,
          "expRequired": 2160,
          "breakCondition": null,
          "HP": 2000,
          "ATK": 100,
          "PDEF": 50,
          "MDEF": 50
        },
        {
          "rank": 9,
          "expRequired": 2530,
          "breakCondition": null,
          "HP": 2320,
          "ATK": 116,
          "PDEF": 58,
          "MDEF": 58
        },
        {
          "rank": 10,
          "expRequired": 2910,
          "breakCondition": 1,
          "HP": 2680,
          "ATK": 134,
          "PDEF": 67,
          "MDEF": 67
        },
        {
          "rank": 11,
          "expRequired": 3300,
          "breakCondition": null,
          "HP": 3040,
          "ATK": 152,
          "PDEF": 76,
          "MDEF": 76
        },
        {
          "rank": 12,
          "expRequired": 3700,
          "breakCondition": null,
          "HP": 3400,
          "ATK": 170,
          "PDEF": 85,
          "MDEF": 85
        },
        {
          "rank": 13,
          "expRequired": 4120,
          "breakCondition": null,
          "HP": 3800,
          "ATK": 190,
          "PDEF": 95,
          "MDEF": 95
        },
        {
          "rank": 14,
          "expRequired": 4550,
          "breakCondition": null,
          "HP": 4160,
          "ATK": 208,
          "PDEF": 104,
          "MDEF": 104
        },
        {
          "rank": 15,
          "expRequired": 4990,
          "breakCondition": null,
          "HP": 4560,
          "ATK": 228,
          "PDEF": 114,
          "MDEF": 114
        },
        {
          "rank": 16,
          "expRequired": 5440,
          "breakCondition": null,
          "HP": 4960,
          "ATK": 248,
          "PDEF": 124,
          "MDEF": 124
        },
        {
          "rank": 17,
          "expRequired": 5910,
          "breakCondition": null,
          "HP": 5360,
          "ATK": 268,
          "PDEF": 134,
          "MDEF": 134
        },
        {
          "rank": 18,
          "expRequired": 6390,
          "breakCondition": null,
          "HP": 5760,
          "ATK": 288,
          "PDEF": 144,
          "MDEF": 144
        },
        {
          "rank": 19,
          "expRequired": 6890,
          "breakCondition": null,
          "HP": 6160,
          "ATK": 308,
          "PDEF": 154,
          "MDEF": 154
        },
        {
          "rank": 20,
          "expRequired": 7400,
          "breakCondition": 2,
          "HP": 6600,
          "ATK": 330,
          "PDEF": 165,
          "MDEF": 165
        },
        {
          "rank": 21,
          "expRequired": 7930,
          "breakCondition": null,
          "HP": 7000,
          "ATK": 350,
          "PDEF": 175,
          "MDEF": 175
        },
        {
          "rank": 22,
          "expRequired": 8470,
          "breakCondition": null,
          "HP": 7440,
          "ATK": 372,
          "PDEF": 186,
          "MDEF": 186
        },
        {
          "rank": 23,
          "expRequired": 9030,
          "breakCondition": null,
          "HP": 7840,
          "ATK": 392,
          "PDEF": 196,
          "MDEF": 196
        },
        {
          "rank": 24,
          "expRequired": 9610,
          "breakCondition": null,
          "HP": 8280,
          "ATK": 414,
          "PDEF": 207,
          "MDEF": 207
        },
        {
          "rank": 25,
          "expRequired": 10200,
          "breakCondition": null,
          "HP": 8720,
          "ATK": 436,
          "PDEF": 218,
          "MDEF": 218
        },
        {
          "rank": 26,
          "expRequired": 10810,
          "breakCondition": null,
          "HP": 9160,
          "ATK": 458,
          "PDEF": 229,
          "MDEF": 229
        },
        {
          "rank": 27,
          "expRequired": 11440,
          "breakCondition": null,
          "HP": 9600,
          "ATK": 480,
          "PDEF": 240,
          "MDEF": 240
        },
        {
          "rank": 28,
          "expRequired": 12090,
          "breakCondition": null,
          "HP": 10040,
          "ATK": 502,
          "PDEF": 251,
          "MDEF": 251
        },
        {
          "rank": 29,
          "expRequired": 12760,
          "breakCondition": null,
          "HP": 10480,
          "ATK": 524,
          "PDEF": 262,
          "MDEF": 262
        },
        {
          "rank": 30,
          "expRequired": 13450,
          "breakCondition": null,
          "HP": 10920,
          "ATK": 546,
          "PDEF": 273,
          "MDEF": 273
        }
      ]
    }
  }
};

export default AFFINITY_DATA;