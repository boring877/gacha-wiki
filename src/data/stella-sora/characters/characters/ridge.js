export const Ridge = {
  "id": 116,
  "name": "Ridge",
  "icon": "/stella/assets/Ridge.png",
  "portrait": "/stella/assets/Ridge_portrait.png",
  "background": "/stella/assets/Ridge_background.png",
  "variants": {
    "base": "/stella/assets/Ridge_base.png",
    "q": "/stella/assets/Ridge_q.png",
    "gd": "/stella/assets/Ridge_gd.png",
    "goods": "/stella/assets/Ridge_goods.png",
    "qs": "/stella/assets/Ridge_qs.png",
    "xl": "/stella/assets/Ridge_xl.png",
    "gc": "/stella/assets/Ridge_gc.png",
    "sk": "/stella/assets/Ridge_portrait.png",
    "xxl": "/stella/assets/Ridge.png",
    "qm": "/stella/assets/Ridge_qm.png",
    "l": "/stella/assets/Ridge_l.png",
    "s": "/stella/assets/Ridge_s.png"
  },
  "description": "Ridge is a United Harvest Forester with a habit of stockpiling food. She has a shovel that can fire energy blasts, and she fights alongside the seed plants she scatters on the field.",
  "voiceActor": {
    "cn": "Zhang Kaixuan",
    "cnLocalized": "张楷轩",
    "jp": "Kero Nanase",
    "jpLocalized": "七瀬けろ"
  },
  "birthday": "9.22",
  "grade": 4,
  "element": "Terra",
  "position": "Versatile",
  "attackType": "Ranged",
  "style": "Collector",
  "faction": "United Harvest",
  "tags": [
    "Versatile",
    "Collector",
    "United Harvest"
  ],
  "dateEvents": [
    {
      "name": "Mushroom Scent",
      "icon": "DatingSPCG_116301",
      "clue": "Visit the Cave to unlock",
      "secondChoice": "Don't go any deeper. Stop here and take a rest."
    },
    {
      "name": "Cakes To-Go",
      "icon": "DatingSPCG_116302",
      "clue": "Visit the Dessert Shop to unlock",
      "secondChoice": "Haven't had enough. Let's order some more."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Portable Blower",
      "Exquisite Blower",
      "Deluxe Blower",
      "Summer Chill Crushed Ice",
      "Fragrant Ice Delight",
      "Sweet IceFurry"
    ],
    "hates": []
  },
  "normalAttack": {
    "name": "Sprout Bomb",
    "icon": "Icon/Skill/11601_Normal",
    "description": "Fires energy rounds, each dealing <color=#fb8037>&Param1& of ATK</color> as Terra DMG. Magazine capacity: 24.\u000bWhen close, swings the shovel cannon to attack, dealing <color=#fb8037>&Param3& of ATK</color> as AoE Terra DMG.",
    "shortDescription": "Fires consecutive energy rounds to deal DMG.",
    "params": [
      "5.2%/5.7%/6.2%/7.7%/8.3%/8.8%/9.8%/10.3%/10.9%/11.9%/12.4%/12.9%/13.4%",
      "Character.Main,Ammo,116,10K",
      "8.9%/9.8%/10.7%/13.3%/14.2%/15.1%/16.9%/17.8%/18.6%/20.4%/21.3%/22.2%/23.1%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Bean Cyclone",
    "icon": "Icon/Skill/11601_Skill_Main",
    "description": "Swings the shovel cannon, dealing <color=#fb8037>&Param1& of ATK</color> as Terra DMG. Fires seeds, dealing <color=#fb8037>&Param2& of ATK</color> as AoE Terra DMG and reducing the target's Movement SPD by &Param3& for &Param4&s.\u000bAfter casting a skill, reloads the magazine and enhances Auto Attacks: Increases Fire Rate without consuming ammo for &Param5&s.\u000bBean Cyclone (Main Skill) can trigger ##Terra Mark: Earth Vein#2029#, dealing &Param6& of ATK as AoE Terra Mark DMG.",
    "shortDescription": "Swings the shovel cannon to fire seeds, dealing DMG.\u000bAfter casting a Skill, reloads the magazine and enhances Auto Attacks.\u000bThe Main Skill can trigger ##Terra Mark: Earth Vein#1020#.",
    "params": [
      "28.3%/31.1%/34%/42.5%/45.3%/48.1%/53.8%/56.6%/59.4%/65.1%/67.9%/70.8%/73.6%",
      "150%/165%/180%/225%/240%/255%/285%/300%/315%/345%/360%/375%/390%",
      "-10%",
      "3",
      "6",
      "20.5%/24.5%/28.6%/32.7%/36.8%/40.9%/45%/49.1%/53.2%"
    ],
    "hints": {
      "1020": {
        "id": 1020,
        "name": "Terra Mark",
        "description": "The generic name for all Terra Marks.\u000bWhen triggered by specific Terra Trekkers' attacks, the status is removed, and a special effect is activated.",
        "params": []
      },
      "2029": {
        "id": 2029,
        "name": "Terra Mark: Earth Vein",
        "description": "A special status applied to the target by some Terra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Terra Trekkers. When triggered, removes the status and activates special effects.",
        "params": []
      }
    },
    "cooldown": "10s"
  },
  "supportSkill": {
    "name": "Floral Storm",
    "icon": "Icon/Skill/11601_Skill_Support",
    "description": "Showers seeds over time, dealing <color=#fb8037>&Param1& of ATK x6</color> as AoE Terra DMG and inflicting ##Terra Mark: Earth Vein#2029# and Seed Orb.\u000bSeed Orb: lasts &Param2&s; when friendly units trigger ##Terra Mark#1020# on targets with Seed Orbs, deals <color=#fb8037>&Param3&</color> of Ridge's ATK as AoE Terra DMG.",
    "shortDescription": "Showers seeds over time, dealing continuous DMG. Inflicts ##Terra Mark: Earth Vein#2029# and Seed Orb.\u000bSeed Orb: when friendly units trigger ##Terra Mark#1020# on targets with Seed Orbs, they can deal DMG.",
    "params": [
      "44%/48%/52%/66%/70%/74%/83%/87%/92%/101%/105%/109%/114%",
      "3",
      "50%/55%/60%/75%/80%/85%/95%/100%/105%/115%/120%/125%/130%"
    ],
    "hints": {
      "1020": {
        "id": 1020,
        "name": "Terra Mark",
        "description": "The generic name for all Terra Marks.\u000bWhen triggered by specific Terra Trekkers' attacks, the status is removed, and a special effect is activated.",
        "params": []
      },
      "2029": {
        "id": 2029,
        "name": "Terra Mark: Earth Vein",
        "description": "A special status applied to the target by some Terra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Terra Trekkers. When triggered, removes the status and activates special effects.",
        "params": []
      }
    },
    "cooldown": "12s"
  },
  "ultimate": {
    "name": "Harvest Rhapsody",
    "icon": "Icon/Skill/11601_Ultra",
    "description": "Attacks Shrubshrews Warriors consecutively, dealing <color=#fb8037>&Param1& of ATK x5</color> and <color=#fb8037>&Param2& of ATK</color> as AoE Terra DMG.",
    "shortDescription": "Attacks Shrubshrews Warriors consecutively to deal DMG.",
    "params": [
      "85%/94%/102%/128%/136%/145%/162%/170%/179%/196%/204%/213%/221%",
      "251%/276%/302%/377%/402%/427%/478%/503%/528%/578%/603%/628%/653%"
    ],
    "hints": {},
    "cooldown": "30s",
    "energy": 285
  },
  "talents": [
    {
      "name": "Pastoral Ode",
      "talents": [
        {
          "name": "Pastoral Ode",
          "description": "Whenever Ridge deals Ultimate DMG to a target, increases the squad's ATK by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "2.8%",
            "15",
            "6"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Cycle of Growth",
      "talents": [
        {
          "name": "Cycle of Growth",
          "description": "When ##Terra Mark#1020# is triggered, increases Ridge's Skill DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "12%",
            "6"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Bountiful Harvest",
      "talents": [
        {
          "name": "Bountiful Harvest",
          "description": "After squadmates deal Ultimate DMG 20 times in total, increases the squad's ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "11%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Labor Under the Sun",
      "talents": [
        {
          "name": "Labor Under the Sun",
          "description": "Increases Ridge's Terra DMG dealt to targets inflicted with ##Terra Mark: Earth Vein#2029# by <color=#0abec5>&Param1&</color>.",
          "params": [
            "12%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Soil and Toil",
      "talents": [
        {
          "name": "Soil and Toil",
          "description": "When Ridge deals Ultimate DMG to a target, increases her Terra DMG by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "1.2%",
            "15",
            "20"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "hp": 1114,
      "atk": 102
    },
    {
      "hp": 1447,
      "atk": 133
    },
    {
      "hp": 1782,
      "atk": 164
    },
    {
      "hp": 2116,
      "atk": 195
    },
    {
      "hp": 2450,
      "atk": 225
    },
    {
      "hp": 2784,
      "atk": 256
    },
    {
      "hp": 3118,
      "atk": 287
    },
    {
      "hp": 3452,
      "atk": 317
    },
    {
      "hp": 3787,
      "atk": 348
    },
    {
      "hp": 4121,
      "atk": 379
    },
    {
      "hp": 4945,
      "atk": 455
    },
    {
      "hp": 5279,
      "atk": 485
    },
    {
      "hp": 5613,
      "atk": 516
    },
    {
      "hp": 5948,
      "atk": 547
    },
    {
      "hp": 6282,
      "atk": 578
    },
    {
      "hp": 6616,
      "atk": 608
    },
    {
      "hp": 6950,
      "atk": 639
    },
    {
      "hp": 7284,
      "atk": 670
    },
    {
      "hp": 7618,
      "atk": 700
    },
    {
      "hp": 7953,
      "atk": 731
    },
    {
      "hp": 8287,
      "atk": 762
    },
    {
      "hp": 9946,
      "atk": 914
    },
    {
      "hp": 10280,
      "atk": 945
    },
    {
      "hp": 10614,
      "atk": 976
    },
    {
      "hp": 10948,
      "atk": 1007
    },
    {
      "hp": 11283,
      "atk": 1037
    },
    {
      "hp": 11617,
      "atk": 1068
    },
    {
      "hp": 11951,
      "atk": 1099
    },
    {
      "hp": 12285,
      "atk": 1129
    },
    {
      "hp": 12619,
      "atk": 1160
    },
    {
      "hp": 12953,
      "atk": 1191
    },
    {
      "hp": 13288,
      "atk": 1222
    },
    {
      "hp": 15949,
      "atk": 1466
    },
    {
      "hp": 16283,
      "atk": 1497
    },
    {
      "hp": 16618,
      "atk": 1528
    },
    {
      "hp": 16952,
      "atk": 1559
    },
    {
      "hp": 17286,
      "atk": 1589
    },
    {
      "hp": 17620,
      "atk": 1620
    },
    {
      "hp": 17954,
      "atk": 1651
    },
    {
      "hp": 18288,
      "atk": 1681
    },
    {
      "hp": 18623,
      "atk": 1712
    },
    {
      "hp": 18957,
      "atk": 1743
    },
    {
      "hp": 19291,
      "atk": 1774
    },
    {
      "hp": 23145,
      "atk": 2128
    },
    {
      "hp": 23480,
      "atk": 2159
    },
    {
      "hp": 23814,
      "atk": 2189
    },
    {
      "hp": 24148,
      "atk": 2220
    },
    {
      "hp": 24482,
      "atk": 2251
    },
    {
      "hp": 24816,
      "atk": 2281
    },
    {
      "hp": 25150,
      "atk": 2312
    },
    {
      "hp": 25485,
      "atk": 2343
    },
    {
      "hp": 25819,
      "atk": 2374
    },
    {
      "hp": 26153,
      "atk": 2404
    },
    {
      "hp": 26487,
      "atk": 2435
    },
    {
      "hp": 31789,
      "atk": 2922
    },
    {
      "hp": 32123,
      "atk": 2953
    },
    {
      "hp": 32457,
      "atk": 2984
    },
    {
      "hp": 32791,
      "atk": 3015
    },
    {
      "hp": 33125,
      "atk": 3045
    },
    {
      "hp": 33459,
      "atk": 3076
    },
    {
      "hp": 33794,
      "atk": 3107
    },
    {
      "hp": 34128,
      "atk": 3138
    },
    {
      "hp": 34462,
      "atk": 3168
    },
    {
      "hp": 34796,
      "atk": 3199
    },
    {
      "hp": 35130,
      "atk": 3230
    },
    {
      "hp": 42159,
      "atk": 3876
    },
    {
      "hp": 42493,
      "atk": 3907
    },
    {
      "hp": 42827,
      "atk": 3937
    },
    {
      "hp": 43161,
      "atk": 3968
    },
    {
      "hp": 43495,
      "atk": 3999
    },
    {
      "hp": 43830,
      "atk": 4029
    },
    {
      "hp": 44164,
      "atk": 4060
    },
    {
      "hp": 44498,
      "atk": 4091
    },
    {
      "hp": 44832,
      "atk": 4122
    },
    {
      "hp": 45166,
      "atk": 4152
    },
    {
      "hp": 45500,
      "atk": 4183
    },
    {
      "hp": 54600,
      "atk": 5020
    },
    {
      "hp": 54934,
      "atk": 5050
    },
    {
      "hp": 55268,
      "atk": 5081
    },
    {
      "hp": 55602,
      "atk": 5112
    },
    {
      "hp": 55936,
      "atk": 5143
    },
    {
      "hp": 56270,
      "atk": 5173
    },
    {
      "hp": 56604,
      "atk": 5204
    },
    {
      "hp": 56939,
      "atk": 5235
    },
    {
      "hp": 57273,
      "atk": 5265
    },
    {
      "hp": 57607,
      "atk": 5296
    },
    {
      "hp": 57941,
      "atk": 5327
    },
    {
      "hp": 69525,
      "atk": 6392
    },
    {
      "hp": 69859,
      "atk": 6423
    },
    {
      "hp": 70193,
      "atk": 6453
    },
    {
      "hp": 70527,
      "atk": 6484
    },
    {
      "hp": 70862,
      "atk": 6515
    },
    {
      "hp": 71196,
      "atk": 6545
    },
    {
      "hp": 71530,
      "atk": 6576
    },
    {
      "hp": 71864,
      "atk": 6607
    },
    {
      "hp": 72198,
      "atk": 6638
    },
    {
      "hp": 72532,
      "atk": 6668
    },
    {
      "hp": 72867,
      "atk": 6699
    },
    {
      "hp": 72867,
      "atk": 6699
    }
  ],
  "upgrades": [
    {
      "items": [
        {
          "id": 20091,
          "name": "Faint Wick",
          "quantity": 5
        }
      ],
      "currency": {
        "dorra": 7900
      }
    },
    {
      "items": [
        {
          "id": 20091,
          "name": "Faint Wick",
          "quantity": 5
        },
        {
          "id": 20092,
          "name": "Lumen Essence",
          "quantity": 10
        }
      ],
      "currency": {
        "dorra": 19800
      }
    },
    {
      "items": [
        {
          "id": 20091,
          "name": "Faint Wick",
          "quantity": 10
        },
        {
          "id": 20092,
          "name": "Lumen Essence",
          "quantity": 15
        }
      ],
      "currency": {
        "dorra": 44400
      }
    },
    {
      "items": [
        {
          "id": 20091,
          "name": "Faint Wick",
          "quantity": 15
        },
        {
          "id": 20092,
          "name": "Lumen Essence",
          "quantity": 25
        }
      ],
      "currency": {
        "dorra": 66600
      }
    },
    {
      "items": [
        {
          "id": 20091,
          "name": "Faint Wick",
          "quantity": 20
        },
        {
          "id": 20092,
          "name": "Lumen Essence",
          "quantity": 40
        }
      ],
      "currency": {
        "dorra": 146100
      }
    },
    {
      "items": [
        {
          "id": 20091,
          "name": "Faint Wick",
          "quantity": 30
        },
        {
          "id": 20092,
          "name": "Lumen Essence",
          "quantity": 55
        },
        {
          "id": 20093,
          "name": "Eternal Gloom Core",
          "quantity": 20
        }
      ],
      "currency": {
        "dorra": 291600
      }
    },
    {
      "items": [
        {
          "id": 20092,
          "name": "Lumen Essence",
          "quantity": 75
        },
        {
          "id": 20093,
          "name": "Eternal Gloom Core",
          "quantity": 30
        }
      ],
      "currency": {
        "dorra": 560200
      }
    },
    {
      "items": [
        {
          "id": 20092,
          "name": "Lumen Essence",
          "quantity": 95
        },
        {
          "id": 20093,
          "name": "Eternal Gloom Core",
          "quantity": 50
        }
      ],
      "currency": {
        "dorra": 1121300
      }
    },
    {
      "items": [],
      "currency": {
        "dorra": 1121300
      }
    }
  ],
  "skillUpgrades": [
    {
      "items": [
        {
          "id": 32001,
          "name": "Tapping Game Cartridge",
          "quantity": 6
        },
        {
          "id": 32000,
          "name": "Chess Piece of Skill",
          "quantity": 2
        }
      ],
      "currency": {
        "dorra": 13300
      }
    },
    {
      "items": [
        {
          "id": 32001,
          "name": "Tapping Game Cartridge",
          "quantity": 12
        },
        {
          "id": 32000,
          "name": "Chess Piece of Skill",
          "quantity": 6
        }
      ],
      "currency": {
        "dorra": 17600
      }
    },
    {
      "items": [
        {
          "id": 32001,
          "name": "Tapping Game Cartridge",
          "quantity": 24
        },
        {
          "id": 32002,
          "name": "Rhythm Game Cartridge",
          "quantity": 3
        },
        {
          "id": 32000,
          "name": "Chess Piece of Skill",
          "quantity": 10
        }
      ],
      "currency": {
        "dorra": 49800
      }
    },
    {
      "items": [
        {
          "id": 32001,
          "name": "Tapping Game Cartridge",
          "quantity": 38
        },
        {
          "id": 32002,
          "name": "Rhythm Game Cartridge",
          "quantity": 8
        },
        {
          "id": 32000,
          "name": "Chess Piece of Skill",
          "quantity": 24
        }
      ],
      "currency": {
        "dorra": 100000
      }
    },
    {
      "items": [
        {
          "id": 32001,
          "name": "Tapping Game Cartridge",
          "quantity": 70
        },
        {
          "id": 32002,
          "name": "Rhythm Game Cartridge",
          "quantity": 14
        },
        {
          "id": 32003,
          "name": "Magic Sound Game Cartridge",
          "quantity": 6
        },
        {
          "id": 32000,
          "name": "Chess Piece of Skill",
          "quantity": 55
        }
      ],
      "currency": {
        "dorra": 400000
      }
    },
    {
      "items": [
        {
          "id": 20003,
          "name": "Forest Elf Fang",
          "quantity": 1
        },
        {
          "id": 32002,
          "name": "Rhythm Game Cartridge",
          "quantity": 50
        },
        {
          "id": 32003,
          "name": "Magic Sound Game Cartridge",
          "quantity": 18
        },
        {
          "id": 32000,
          "name": "Chess Piece of Skill",
          "quantity": 232
        }
      ],
      "currency": {
        "dorra": 900000
      }
    },
    {
      "items": [
        {
          "id": 20003,
          "name": "Forest Elf Fang",
          "quantity": 2
        },
        {
          "id": 32002,
          "name": "Rhythm Game Cartridge",
          "quantity": 90
        },
        {
          "id": 32003,
          "name": "Magic Sound Game Cartridge",
          "quantity": 34
        },
        {
          "id": 32000,
          "name": "Chess Piece of Skill",
          "quantity": 323
        }
      ],
      "currency": {
        "dorra": 1600000
      }
    },
    {
      "items": [
        {
          "id": 20003,
          "name": "Forest Elf Fang",
          "quantity": 3
        },
        {
          "id": 32002,
          "name": "Rhythm Game Cartridge",
          "quantity": 140
        },
        {
          "id": 32003,
          "name": "Magic Sound Game Cartridge",
          "quantity": 50
        },
        {
          "id": 32000,
          "name": "Chess Piece of Skill",
          "quantity": 478
        }
      ],
      "currency": {
        "dorra": 2300000
      }
    },
    {
      "items": [
        {
          "id": 20003,
          "name": "Forest Elf Fang",
          "quantity": 6
        },
        {
          "id": 32002,
          "name": "Rhythm Game Cartridge",
          "quantity": 200
        },
        {
          "id": 32003,
          "name": "Magic Sound Game Cartridge",
          "quantity": 70
        },
        {
          "id": 32000,
          "name": "Chess Piece of Skill",
          "quantity": 927
        }
      ],
      "currency": {
        "dorra": 3400000
      }
    }
  ]
};