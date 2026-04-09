export const Noya = {
  "id": 112,
  "name": "Noya",
  "icon": "/stella/assets/Noya.png",
  "portrait": "/stella/assets/Noya_portrait.png",
  "background": "/stella/assets/Noya_background.png",
  "variants": {
    "base": "/stella/assets/Noya_base.png",
    "q": "/stella/assets/Noya_q.png",
    "gd": "/stella/assets/Noya_gd.png",
    "goods": "/stella/assets/Noya_goods.png",
    "qs": "/stella/assets/Noya_qs.png",
    "xl": "/stella/assets/Noya_xl.png",
    "gc": "/stella/assets/Noya_gc.png",
    "sk": "/stella/assets/Noya_portrait.png",
    "xxl": "/stella/assets/Noya.png",
    "qm": "/stella/assets/Noya_qm.png",
    "l": "/stella/assets/Noya_l.png",
    "s": "/stella/assets/Noya_s.png"
  },
  "description": "Noya uses techniques no one has ever seen, learned from an unknown source. Even skill-casting does not interrupt her long sword's movements.",
  "voiceActor": {
    "cn": "Kiyo",
    "cnLocalized": "Kiyo",
    "jp": "Riona Imaizumi",
    "jpLocalized": "今泉りおな"
  },
  "birthday": "6.21",
  "grade": 4,
  "element": "Ventus",
  "position": "Vanguard",
  "attackType": "Melee",
  "style": "Creative",
  "faction": "New Star Guild",
  "tags": [
    "Vanguard",
    "Creative",
    "New Star Guild"
  ],
  "dateEvents": [
    {
      "name": "Foraging Cuisine",
      "icon": "DatingSPCG_112301",
      "clue": "Visit the Cave to unlock",
      "secondChoice": "Don't go any deeper. Stop here and take a rest."
    },
    {
      "name": "The Professional",
      "icon": "DatingSPCG_112302",
      "clue": "Visit the Market to unlock",
      "secondChoice": "There's a show over there."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Love Candle",
      "Blazing Wings",
      "Fiery Honeypot",
      "Whisper Wind Spinner",
      "Chilling Wind Spinner",
      "Blazing Wind Spinner"
    ],
    "hates": []
  },
  "normalAttack": {
    "name": "Nameless Style",
    "icon": "Icon/Skill/11201_Normal",
    "description": "Swings the sword to attack.\u000bStrike 1: <color=#ec6d21>&Param1& of ATK</color> as Ventus DMG.\u000bStrike 2: <color=#ec6d21>&Param2& of ATK ×2</color> as Ventus DMG.\u000bStrike 3: <color=#ec6d21>&Param3& of ATK ×8</color> as Ventus DMG.\u000bStrike 4: <color=#ec6d21>&Param4& of ATK ×3</color> as Ventus DMG.",
    "shortDescription": "Swings the sword to perform multiple attacks.",
    "params": [
      "7%/7.7%/8.4%/10.4%/11.1%/11.8%/13.2%/13.9%/14.6%/16%/16.7%/17.4%/18.1%",
      "9.2%/10.1%/11%/13.8%/14.7%/15.6%/17.5%/18.4%/19.3%/21.1%/22.1%/23%/23.9%",
      "4.6%/5.1%/5.5%/6.9%/7.4%/7.9%/8.8%/9.2%/9.7%/10.6%/11.1%/11.5%/12%",
      "8.7%/9.6%/10.5%/13.1%/13.9%/14.8%/16.5%/17.4%/18.3%/20%/20.9%/21.8%/22.6%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Sonic Slash",
    "icon": "Icon/Skill/11201_Skill_Main",
    "description": "Unleashes a flurry of sword strikes, dealing <color=#ec6d21>&Param1& of ATK x6</color> as Ventus Skill DMG.\u000bSonic Slash (Main Skill) can trigger ##Ventus Mark: Breeze#2017#, generating a Cyclone that deals &Param2& of ATK x3 as AoE Ventus Mark DMG.",
    "shortDescription": "Unleashes a flurry of sword strikes. The Main Skill can trigger ##Ventus Mark: Breeze#2017#.",
    "params": [
      "27.8%/30.6%/33.4%/41.7%/44.5%/47.3%/52.8%/55.6%/58.4%/64%/66.7%/69.5%/72.3%",
      "9.2%/11.1%/12.9%/14.7%/16.6%/18.4%/20.3%/22.1%/23.9%"
    ],
    "hints": {
      "2017": {
        "id": 2017,
        "name": "Ventus Mark: Breeze",
        "description": "A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.",
        "params": []
      }
    },
    "cooldown": "5s"
  },
  "supportSkill": {
    "name": "Gale Storm",
    "icon": "Icon/Skill/11201_Skill_Support",
    "description": "Unleashes 4 minor sword auras and 1 major sword aura.\u000bMinor sword auras deal <color=#ec6d21>&Param1& of ATK</color> as Ventus DMG.\u000bMajor sword auras deal <color=#ec6d21>&Param2& of ATK</color> as Ventus DMG.\u000bMajor sword auras of the Support Skill Gale Storm can pierce through targets and trigger ##Ventus Mark: Breeze#2017#, generating a Cyclone that deals &Param3& of ATK x3 as AoE Ventus Mark DMG.",
    "shortDescription": "Unleashes multiple sword auras. The Support Skill's major sword auras can pierce through targets and trigger ##Ventus Mark: Breeze#2017#.",
    "params": [
      "36.5%/40.2%/43.8%/54.8%/58.4%/62.1%/69.4%/73%/76.7%/84%/87.6%/91.3%/94.9%",
      "119%/131%/143%/179%/191%/203%/227%/239%/251%/275%/287%/299%/311%",
      "9.2%/11.1%/12.9%/14.7%/16.6%/18.4%/20.3%/22.1%/23.9%"
    ],
    "hints": {
      "2017": {
        "id": 2017,
        "name": "Ventus Mark: Breeze",
        "description": "A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.",
        "params": []
      }
    },
    "cooldown": "12s"
  },
  "ultimate": {
    "name": "Skyshatter Rend",
    "icon": "Icon/Skill/11201_Ultra",
    "description": "Performs a sweeping slash, dealing <color=#ec6d21>&Param1& of ATK x2</color> as Ventus DMG.\u000bSkyshatter Rend (Ultimate) can trigger ##Ventus Mark: Breeze#2017# to generate a Cyclone that deals &Param2& of ATK x3 as AoE Ventus Mark DMG.",
    "shortDescription": "Performs a sweeping slash to deal DMG. The Ultimate can trigger ##Ventus Mark: Breeze#2017#.",
    "params": [
      "458%/504%/549%/687%/732%/778%/870%/916%/961%/1053%/1099%/1144%/1190%",
      "9.2%/11.1%/12.9%/14.7%/16.6%/18.4%/20.3%/22.1%/23.9%"
    ],
    "hints": {
      "2017": {
        "id": 2017,
        "name": "Ventus Mark: Breeze",
        "description": "A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.",
        "params": []
      }
    },
    "cooldown": "30s",
    "energy": 285
  },
  "talents": [
    {
      "name": "Wind Rider",
      "talents": [
        {
          "name": "Wind Rider",
          "description": "After Noya deals Ultimate DMG to a target, her ATK is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "18%",
            "20"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
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
            "690"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "7.5%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
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
            "690"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "7.5%"
          ]
        }
      ]
    },
    {
      "name": "Air Vibration",
      "talents": [
        {
          "name": "Air Vibration",
          "description": "When Noya triggers a ##Ventus Mark: Breeze#2017#, her Skill DMG is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "14%",
            "8"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
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
            "690"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "7.5%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
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
            "690"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "7.5%"
          ]
        }
      ]
    },
    {
      "name": "Shadows from the Past",
      "talents": [
        {
          "name": "Shadows from the Past",
          "description": "When Noya deals DMG to a target, her ATK is increased by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "1.2%",
            "5",
            "10"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
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
            "690"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "7.5%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
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
            "690"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "7.5%"
          ]
        }
      ]
    },
    {
      "name": "Today's Bond",
      "talents": [
        {
          "name": "Today's Bond",
          "description": "When Noya kills a target, her Skill DMG is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "14%",
            "12"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
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
            "690"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "7.5%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
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
            "690"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "7.5%"
          ]
        }
      ]
    },
    {
      "name": "Unsolved Chapter",
      "talents": [
        {
          "name": "Unsolved Chapter",
          "description": "When Noya deals Auto Attack DMG, her Ultimate DMG is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "40%",
            "6"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
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
            "690"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "7.5%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
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
            "690"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "7.5%"
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "hp": 1217,
      "atk": 99
    },
    {
      "hp": 1581,
      "atk": 129
    },
    {
      "hp": 1946,
      "atk": 159
    },
    {
      "hp": 2311,
      "atk": 188
    },
    {
      "hp": 2676,
      "atk": 218
    },
    {
      "hp": 3042,
      "atk": 250
    },
    {
      "hp": 3407,
      "atk": 280
    },
    {
      "hp": 3772,
      "atk": 310
    },
    {
      "hp": 4137,
      "atk": 340
    },
    {
      "hp": 4502,
      "atk": 370
    },
    {
      "hp": 5402,
      "atk": 444
    },
    {
      "hp": 5767,
      "atk": 474
    },
    {
      "hp": 6132,
      "atk": 504
    },
    {
      "hp": 6497,
      "atk": 534
    },
    {
      "hp": 6862,
      "atk": 564
    },
    {
      "hp": 7228,
      "atk": 594
    },
    {
      "hp": 7593,
      "atk": 624
    },
    {
      "hp": 7958,
      "atk": 654
    },
    {
      "hp": 8323,
      "atk": 684
    },
    {
      "hp": 8688,
      "atk": 714
    },
    {
      "hp": 9053,
      "atk": 744
    },
    {
      "hp": 10865,
      "atk": 893
    },
    {
      "hp": 11230,
      "atk": 923
    },
    {
      "hp": 11596,
      "atk": 953
    },
    {
      "hp": 11961,
      "atk": 983
    },
    {
      "hp": 12326,
      "atk": 1013
    },
    {
      "hp": 12691,
      "atk": 1043
    },
    {
      "hp": 13056,
      "atk": 1073
    },
    {
      "hp": 13421,
      "atk": 1103
    },
    {
      "hp": 13786,
      "atk": 1133
    },
    {
      "hp": 14151,
      "atk": 1163
    },
    {
      "hp": 14516,
      "atk": 1193
    },
    {
      "hp": 17424,
      "atk": 1432
    },
    {
      "hp": 17789,
      "atk": 1462
    },
    {
      "hp": 18154,
      "atk": 1492
    },
    {
      "hp": 18519,
      "atk": 1522
    },
    {
      "hp": 18884,
      "atk": 1552
    },
    {
      "hp": 19249,
      "atk": 1582
    },
    {
      "hp": 19614,
      "atk": 1612
    },
    {
      "hp": 19979,
      "atk": 1642
    },
    {
      "hp": 20344,
      "atk": 1672
    },
    {
      "hp": 20709,
      "atk": 1702
    },
    {
      "hp": 21074,
      "atk": 1732
    },
    {
      "hp": 25285,
      "atk": 2078
    },
    {
      "hp": 25650,
      "atk": 2108
    },
    {
      "hp": 26015,
      "atk": 2138
    },
    {
      "hp": 26380,
      "atk": 2168
    },
    {
      "hp": 26745,
      "atk": 2198
    },
    {
      "hp": 27110,
      "atk": 2228
    },
    {
      "hp": 27475,
      "atk": 2258
    },
    {
      "hp": 27840,
      "atk": 2288
    },
    {
      "hp": 28205,
      "atk": 2318
    },
    {
      "hp": 28570,
      "atk": 2348
    },
    {
      "hp": 28935,
      "atk": 2378
    },
    {
      "hp": 34727,
      "atk": 2854
    },
    {
      "hp": 35092,
      "atk": 2884
    },
    {
      "hp": 35457,
      "atk": 2914
    },
    {
      "hp": 35822,
      "atk": 2944
    },
    {
      "hp": 36187,
      "atk": 2974
    },
    {
      "hp": 36552,
      "atk": 3004
    },
    {
      "hp": 36917,
      "atk": 3034
    },
    {
      "hp": 37282,
      "atk": 3064
    },
    {
      "hp": 37648,
      "atk": 3094
    },
    {
      "hp": 38013,
      "atk": 3124
    },
    {
      "hp": 38378,
      "atk": 3154
    },
    {
      "hp": 46056,
      "atk": 3785
    },
    {
      "hp": 46421,
      "atk": 3815
    },
    {
      "hp": 46786,
      "atk": 3845
    },
    {
      "hp": 47151,
      "atk": 3875
    },
    {
      "hp": 47516,
      "atk": 3905
    },
    {
      "hp": 47881,
      "atk": 3935
    },
    {
      "hp": 48246,
      "atk": 3965
    },
    {
      "hp": 48611,
      "atk": 3995
    },
    {
      "hp": 48976,
      "atk": 4025
    },
    {
      "hp": 49341,
      "atk": 4055
    },
    {
      "hp": 49706,
      "atk": 4085
    },
    {
      "hp": 59647,
      "atk": 4902
    },
    {
      "hp": 60012,
      "atk": 4932
    },
    {
      "hp": 60377,
      "atk": 4962
    },
    {
      "hp": 60742,
      "atk": 4992
    },
    {
      "hp": 61107,
      "atk": 5022
    },
    {
      "hp": 61472,
      "atk": 5052
    },
    {
      "hp": 61837,
      "atk": 5082
    },
    {
      "hp": 62202,
      "atk": 5112
    },
    {
      "hp": 62567,
      "atk": 5142
    },
    {
      "hp": 62932,
      "atk": 5172
    },
    {
      "hp": 63297,
      "atk": 5202
    },
    {
      "hp": 75952,
      "atk": 6242
    },
    {
      "hp": 76317,
      "atk": 6272
    },
    {
      "hp": 76682,
      "atk": 6302
    },
    {
      "hp": 77047,
      "atk": 6332
    },
    {
      "hp": 77412,
      "atk": 6362
    },
    {
      "hp": 77777,
      "atk": 6392
    },
    {
      "hp": 78142,
      "atk": 6422
    },
    {
      "hp": 78507,
      "atk": 6452
    },
    {
      "hp": 78872,
      "atk": 6482
    },
    {
      "hp": 79237,
      "atk": 6512
    },
    {
      "hp": 79602,
      "atk": 6542
    },
    {
      "hp": 79602,
      "atk": 6542
    }
  ],
  "upgrades": [
    {
      "items": [
        {
          "id": 20071,
          "name": "Backstage Ragged Hat",
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
          "id": 20071,
          "name": "Backstage Ragged Hat",
          "quantity": 5
        },
        {
          "id": 20072,
          "name": "Spotlight Bowler",
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
          "id": 20071,
          "name": "Backstage Ragged Hat",
          "quantity": 10
        },
        {
          "id": 20072,
          "name": "Spotlight Bowler",
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
          "id": 20071,
          "name": "Backstage Ragged Hat",
          "quantity": 15
        },
        {
          "id": 20072,
          "name": "Spotlight Bowler",
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
          "id": 20071,
          "name": "Backstage Ragged Hat",
          "quantity": 20
        },
        {
          "id": 20072,
          "name": "Spotlight Bowler",
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
          "id": 20071,
          "name": "Backstage Ragged Hat",
          "quantity": 30
        },
        {
          "id": 20072,
          "name": "Spotlight Bowler",
          "quantity": 55
        },
        {
          "id": 20073,
          "name": "Exeunt Bowler",
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
          "id": 20072,
          "name": "Spotlight Bowler",
          "quantity": 75
        },
        {
          "id": 20073,
          "name": "Exeunt Bowler",
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
          "id": 20072,
          "name": "Spotlight Bowler",
          "quantity": 95
        },
        {
          "id": 20073,
          "name": "Exeunt Bowler",
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
          "id": 21043,
          "name": "Wind Essence",
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
          "id": 21043,
          "name": "Wind Essence",
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
          "id": 21043,
          "name": "Wind Essence",
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
          "id": 21043,
          "name": "Wind Essence",
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