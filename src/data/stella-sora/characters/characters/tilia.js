export const Tilia = {
  "id": 107,
  "name": "Tilia",
  "icon": "/stella/assets/Tilia.png",
  "portrait": "/stella/assets/Tilia_portrait.png",
  "background": "/stella/assets/Tilia_background.png",
  "variants": {
    "base": "/stella/assets/Tilia_base.png",
    "q": "/stella/assets/Tilia_q.png",
    "gd": "/stella/assets/Tilia_gd.png",
    "goods": "/stella/assets/Tilia_goods.png",
    "qs": "/stella/assets/Tilia_qs.png",
    "xl": "/stella/assets/Tilia_xl.png",
    "gc": "/stella/assets/Tilia_gc.png",
    "sk": "/stella/assets/Tilia_portrait.png",
    "xxl": "/stella/assets/Tilia.png",
    "qm": "/stella/assets/Tilia_qm.png",
    "l": "/stella/assets/Tilia_l.png",
    "s": "/stella/assets/Tilia_s.png"
  },
  "description": "Tilia will always be charging at the forefront, using her shield to protect everyone. Guess only another Imperial Knight might break through her defense.",
  "voiceActor": {
    "cn": "Chen Yu",
    "cnLocalized": "陈雨",
    "jp": "Rumi Okubo",
    "jpLocalized": "大久保瑠美"
  },
  "birthday": "11.18",
  "grade": 4,
  "element": "Lux",
  "position": "Support",
  "attackType": "Melee",
  "style": "Steady",
  "faction": "Imperial Guard",
  "tags": [
    "Support",
    "Steady",
    "Imperial Guard"
  ],
  "dateEvents": [
    {
      "name": "Out of Habit",
      "icon": "DatingSPCG_107301",
      "clue": "Visit the Dessert Shop to unlock",
      "secondChoice": "Take part in the raffle inside the store."
    },
    {
      "name": "Solved On the Spot",
      "icon": "DatingSPCG_107302",
      "clue": "Visit the Market to unlock",
      "secondChoice": "What's that? Looks suspicious."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Whisper Wind Spinner",
      "Chilling Wind Spinner",
      "Blazing Wind Spinner",
      "Rising Star",
      "Emerging Talent",
      "Shining Star"
    ],
    "hates": []
  },
  "normalAttack": {
    "name": "Guard Style: Melee",
    "icon": "Icon/Skill/10701_Normal",
    "description": "Wields the shield and lance to launch consecutive attacks.\u000bStrike 1: <color=#fb8037>&Param1& of ATK</color> as Lux DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Lux DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK</color> as Lux DMG.\u000bStrike 4: <color=#fb8037>&Param4& of ATK</color> as Lux DMG.",
    "shortDescription": "Strikes the target multiple times with her shield and lance to deal damage.",
    "params": [
      "14.5%/16%/17.4%/21.8%/23.2%/24.7%/27.6%/29%/30.5%/33.4%/34.8%/36.3%/37.7%",
      "12.6%/13.8%/15.1%/18.9%/20.1%/21.4%/23.9%/25.2%/26.4%/29%/30.2%/31.5%/32.7%",
      "20.5%/22.6%/24.6%/30.8%/32.8%/34.9%/39%/41%/43.1%/47.2%/49.2%/51.3%/53.3%",
      "20.5%/22.6%/24.6%/30.8%/32.8%/34.9%/39%/41%/43.1%/47.2%/49.2%/51.3%/53.3%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Aegis Protection",
    "icon": "Icon/Skill/10701_Skill_Main",
    "description": "Hold the button to enter Fortify Stance for up to 8s, during which DEF is increased by &Param1&.\u000bUpon entering Fortify Stance, becomes immune to all DMG.\u000bWhen Fortify Stance ends, casts a counterattack that deals <color=#fb8037>&Param2& of ATK</color> as AoE Lux DMG and inflicts a ##Lux Mark: Radiance#2016# while boosting the squad's &Param3& by <color=#ec6d21>&Param4&</color> for &Param5&s.",
    "shortDescription": "Hold the Skill button to enter Fortify Stance with increased DEF. When Fortify Stance ends, deals DMG to nearby enemies.\u000bThe Main Skill can inflict ##Lux Mark: Radiance#2016#.",
    "params": [
      "500",
      "168%/185%/202%/252%/269%/286%/319%/336%/353%/386%/403%/420%/437%",
      "ATK",
      "12%/14%/17%/24%/26%/29%/33%/36%/38%/43%/45%/47%/50%",
      "10",
      "Effect,LevelUp,10793006,EffectTypeParam4,Fixed",
      "Effect,LevelUp,10793006,EffectTypeParam1,HdPct",
      "Effect,LevelUp,10793006,EffectTypeFirstSubtype,Enum,EAT",
      "Effect,LevelUp,10793006,EffectTypeParam6,HdPct"
    ],
    "hints": {
      "2016": {
        "id": 2016,
        "name": "Lux Mark: Radiance",
        "description": "A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.",
        "params": [
          "15"
        ]
      }
    },
    "cooldown": "8s"
  },
  "supportSkill": {
    "name": "Aegis Intervention",
    "icon": "Icon/Skill/10701_Skill_Support",
    "description": "Tilia throws the Aegis of Light, dealing <color=#fb8037>&Param1& of ATK</color> as Lux DMG and stunning the target for &Param2&s, while inflicting ##Lux Mark: Radiance#2016#.\u000bWhen this skill deals DMG, increases the squad's &Param3& by <color=#ec6d21>&Param4&</color> for &Param5&s.",
    "shortDescription": "Throws the Aegis of Light, which bounces multiple times and deals DMG.\u000bThe Support Skill can inflict ##Lux Mark: Radiance#2016#.",
    "params": [
      "41%/45%/49%/61%/65%/69%/77%/81%/85%/94%/98%/102%/106%",
      "2",
      "ATK",
      "15%/18%/21%/30%/33%/36%/42%/45%/48%/53%/56%/59%/62%",
      "10",
      "Effect,LevelUp,10795003,EffectTypeParam4,Fixed",
      "Effect,LevelUp,10795003,EffectTypeParam1,HdPct",
      "ATK",
      "Effect,LevelUp,10795003,EffectTypeParam6,HdPct"
    ],
    "hints": {
      "2016": {
        "id": 2016,
        "name": "Lux Mark: Radiance",
        "description": "A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.",
        "params": [
          "15"
        ]
      }
    },
    "cooldown": "12s"
  },
  "ultimate": {
    "name": "Glorious Smite",
    "icon": "Icon/Skill/10701_Ultra",
    "description": "Leaps and slams down onto the ground, dealing <color=#fb8037>&Param1& of ATK</color> as Lux DMG in a large area. Meanwhile, creates a sphere that deals <color=#fb8037>&Param2& of ATK</color> as AoE Lux DMG and inflicts ##Lux Mark: Radiance#2016# for 8s.",
    "shortDescription": "Leaps and slams down onto the ground, dealing DMG in a large area.\u000bThe Ultimate can inflict ##Lux Mark: Radiance#2016#.",
    "params": [
      "335%/369%/402%/503%/536%/570%/637%/670%/704%/771%/804%/838%/871%",
      "18%/19.8%/21.6%/26.9%/28.7%/30.5%/34.1%/35.9%/37.7%/41.3%/43.1%/44.9%/46.7%"
    ],
    "hints": {
      "2016": {
        "id": 2016,
        "name": "Lux Mark: Radiance",
        "description": "A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.",
        "params": [
          "15"
        ]
      }
    },
    "cooldown": "20s",
    "energy": 190
  },
  "talents": [
    {
      "name": "Divine Punishment",
      "talents": [
        {
          "name": "Divine Punishment",
          "description": "When any Trekker in the squad deals DMG to a target with ##Lux Mark#1015#, increases ATK by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "8.4%",
            "6"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
          ]
        },
        {
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
          ]
        },
        {
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Ward of Honor",
      "talents": [
        {
          "name": "Ward of Honor",
          "description": "After a main Trekker casts an Ultimate, her ATK is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "24%",
            "15"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
          ]
        },
        {
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
          ]
        },
        {
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Knight's Yearning",
      "talents": [
        {
          "name": "Knight's Yearning",
          "description": "When Tilia inflicts ##Lux Mark: Radiance#2016# on a target, increases the squad's Ultimate DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "28%",
            "6"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
          ]
        },
        {
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
          ]
        },
        {
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Legend Silhouette",
      "talents": [
        {
          "name": "Legend Silhouette",
          "description": "When ##Lux Mark#1015# is triggered, increases the main Trekker's Ultimate DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "12%",
            "6"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
          ]
        },
        {
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
          ]
        },
        {
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Justice in You",
      "talents": [
        {
          "name": "Justice in You",
          "description": "When there are 3 Lux Trekkers in the squad, increases the squad's Skill DMG by <color=#0abec5>&Param1&</color>.",
          "params": [
            "13%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
          ]
        },
        {
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
          ]
        },
        {
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ultimate DMG",
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
      "hp": 1217,
      "atk": 81
    },
    {
      "hp": 1581,
      "atk": 105
    },
    {
      "hp": 1946,
      "atk": 129
    },
    {
      "hp": 2311,
      "atk": 154
    },
    {
      "hp": 2676,
      "atk": 178
    },
    {
      "hp": 3042,
      "atk": 202
    },
    {
      "hp": 3407,
      "atk": 226
    },
    {
      "hp": 3772,
      "atk": 250
    },
    {
      "hp": 4137,
      "atk": 275
    },
    {
      "hp": 4502,
      "atk": 299
    },
    {
      "hp": 5402,
      "atk": 359
    },
    {
      "hp": 5767,
      "atk": 383
    },
    {
      "hp": 6132,
      "atk": 407
    },
    {
      "hp": 6497,
      "atk": 431
    },
    {
      "hp": 6862,
      "atk": 456
    },
    {
      "hp": 7228,
      "atk": 480
    },
    {
      "hp": 7593,
      "atk": 504
    },
    {
      "hp": 7958,
      "atk": 528
    },
    {
      "hp": 8323,
      "atk": 553
    },
    {
      "hp": 8688,
      "atk": 577
    },
    {
      "hp": 9053,
      "atk": 601
    },
    {
      "hp": 10865,
      "atk": 722
    },
    {
      "hp": 11230,
      "atk": 746
    },
    {
      "hp": 11596,
      "atk": 770
    },
    {
      "hp": 11961,
      "atk": 794
    },
    {
      "hp": 12326,
      "atk": 819
    },
    {
      "hp": 12691,
      "atk": 843
    },
    {
      "hp": 13056,
      "atk": 867
    },
    {
      "hp": 13421,
      "atk": 891
    },
    {
      "hp": 13786,
      "atk": 915
    },
    {
      "hp": 14151,
      "atk": 940
    },
    {
      "hp": 14516,
      "atk": 964
    },
    {
      "hp": 17424,
      "atk": 1157
    },
    {
      "hp": 17789,
      "atk": 1181
    },
    {
      "hp": 18154,
      "atk": 1206
    },
    {
      "hp": 18519,
      "atk": 1230
    },
    {
      "hp": 18884,
      "atk": 1254
    },
    {
      "hp": 19249,
      "atk": 1278
    },
    {
      "hp": 19614,
      "atk": 1302
    },
    {
      "hp": 19979,
      "atk": 1327
    },
    {
      "hp": 20344,
      "atk": 1351
    },
    {
      "hp": 20709,
      "atk": 1375
    },
    {
      "hp": 21074,
      "atk": 1399
    },
    {
      "hp": 25285,
      "atk": 1679
    },
    {
      "hp": 25650,
      "atk": 1703
    },
    {
      "hp": 26015,
      "atk": 1728
    },
    {
      "hp": 26380,
      "atk": 1752
    },
    {
      "hp": 26745,
      "atk": 1776
    },
    {
      "hp": 27110,
      "atk": 1800
    },
    {
      "hp": 27475,
      "atk": 1824
    },
    {
      "hp": 27840,
      "atk": 1849
    },
    {
      "hp": 28205,
      "atk": 1873
    },
    {
      "hp": 28570,
      "atk": 1897
    },
    {
      "hp": 28935,
      "atk": 1921
    },
    {
      "hp": 34727,
      "atk": 2306
    },
    {
      "hp": 35092,
      "atk": 2330
    },
    {
      "hp": 35457,
      "atk": 2355
    },
    {
      "hp": 35822,
      "atk": 2379
    },
    {
      "hp": 36187,
      "atk": 2403
    },
    {
      "hp": 36552,
      "atk": 2427
    },
    {
      "hp": 36917,
      "atk": 2451
    },
    {
      "hp": 37282,
      "atk": 2476
    },
    {
      "hp": 37648,
      "atk": 2500
    },
    {
      "hp": 38013,
      "atk": 2524
    },
    {
      "hp": 38378,
      "atk": 2548
    },
    {
      "hp": 46056,
      "atk": 3058
    },
    {
      "hp": 46421,
      "atk": 3083
    },
    {
      "hp": 46786,
      "atk": 3107
    },
    {
      "hp": 47151,
      "atk": 3131
    },
    {
      "hp": 47516,
      "atk": 3155
    },
    {
      "hp": 47881,
      "atk": 3179
    },
    {
      "hp": 48246,
      "atk": 3204
    },
    {
      "hp": 48611,
      "atk": 3228
    },
    {
      "hp": 48976,
      "atk": 3252
    },
    {
      "hp": 49341,
      "atk": 3276
    },
    {
      "hp": 49706,
      "atk": 3301
    },
    {
      "hp": 59647,
      "atk": 3961
    },
    {
      "hp": 60012,
      "atk": 3985
    },
    {
      "hp": 60377,
      "atk": 4009
    },
    {
      "hp": 60742,
      "atk": 4034
    },
    {
      "hp": 61107,
      "atk": 4058
    },
    {
      "hp": 61472,
      "atk": 4082
    },
    {
      "hp": 61837,
      "atk": 4106
    },
    {
      "hp": 62202,
      "atk": 4130
    },
    {
      "hp": 62567,
      "atk": 4155
    },
    {
      "hp": 62932,
      "atk": 4179
    },
    {
      "hp": 63297,
      "atk": 4203
    },
    {
      "hp": 75952,
      "atk": 5044
    },
    {
      "hp": 76317,
      "atk": 5068
    },
    {
      "hp": 76682,
      "atk": 5092
    },
    {
      "hp": 77047,
      "atk": 5116
    },
    {
      "hp": 77412,
      "atk": 5140
    },
    {
      "hp": 77777,
      "atk": 5165
    },
    {
      "hp": 78142,
      "atk": 5189
    },
    {
      "hp": 78507,
      "atk": 5213
    },
    {
      "hp": 78872,
      "atk": 5237
    },
    {
      "hp": 79237,
      "atk": 5262
    },
    {
      "hp": 79602,
      "atk": 5286
    },
    {
      "hp": 79602,
      "atk": 5286
    }
  ],
  "upgrades": [
    {
      "items": [
        {
          "id": 20081,
          "name": "Count's Rewards",
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
          "id": 20081,
          "name": "Count's Rewards",
          "quantity": 5
        },
        {
          "id": 20082,
          "name": "Count's Cellaring",
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
          "id": 20081,
          "name": "Count's Rewards",
          "quantity": 10
        },
        {
          "id": 20082,
          "name": "Count's Cellaring",
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
          "id": 20081,
          "name": "Count's Rewards",
          "quantity": 15
        },
        {
          "id": 20082,
          "name": "Count's Cellaring",
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
          "id": 20081,
          "name": "Count's Rewards",
          "quantity": 20
        },
        {
          "id": 20082,
          "name": "Count's Cellaring",
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
          "id": 20081,
          "name": "Count's Rewards",
          "quantity": 30
        },
        {
          "id": 20082,
          "name": "Count's Cellaring",
          "quantity": 55
        },
        {
          "id": 20083,
          "name": "Count's Gift",
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
          "id": 20082,
          "name": "Count's Cellaring",
          "quantity": 75
        },
        {
          "id": 20083,
          "name": "Count's Gift",
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
          "id": 20082,
          "name": "Count's Cellaring",
          "quantity": 95
        },
        {
          "id": 20083,
          "name": "Count's Gift",
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
          "id": 21053,
          "name": "Radiant Crown Essence",
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
          "id": 21053,
          "name": "Radiant Crown Essence",
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
          "id": 21053,
          "name": "Radiant Crown Essence",
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
          "id": 21053,
          "name": "Radiant Crown Essence",
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