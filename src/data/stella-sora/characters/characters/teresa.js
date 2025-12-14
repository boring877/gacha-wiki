export const Teresa = {
  "id": 127,
  "name": "Teresa",
  "icon": "/stella/assets/Teresa.png",
  "portrait": "/stella/assets/Teresa_portrait.png",
  "background": "/stella/assets/Teresa_background.png",
  "variants": {
    "base": "/stella/assets/Teresa_base.png",
    "q": "/stella/assets/Teresa_q.png",
    "gd": "/stella/assets/Teresa_gd.png",
    "goods": "/stella/assets/Teresa_goods.png",
    "qs": "/stella/assets/Teresa_qs.png",
    "xl": "/stella/assets/Teresa_xl.png",
    "gc": "/stella/assets/Teresa_gc.png",
    "sk": "/stella/assets/Teresa_portrait.png",
    "xxl": "/stella/assets/Teresa.png",
    "qm": "/stella/assets/Teresa_qm.png",
    "l": "/stella/assets/Teresa_l.png",
    "s": "/stella/assets/Teresa_s.png"
  },
  "description": "Teresa has extensive experience in wilderness exploration and understands the importance of conserving stamina.",
  "voiceActor": {
    "cn": "Jing Liu",
    "cnLocalized": "井琉",
    "jp": "Manaka Iwami",
    "jpLocalized": "石見舞菜香"
  },
  "birthday": "2.21",
  "grade": 4,
  "element": "Aqua",
  "position": "Support",
  "attackType": "Melee",
  "style": "Steady",
  "faction": "Post Haste",
  "tags": [
    "Support",
    "Steady",
    "Post Haste"
  ],
  "dateEvents": [
    {
      "name": "Practice Makes Perfect",
      "icon": "DatingSPCG_127301",
      "clue": "Visit the Cave to unlock",
      "secondChoice": "Keep exploring deeper."
    },
    {
      "name": "Bond-Aid",
      "icon": "DatingSPCG_127302",
      "clue": "Visit the Market to unlock",
      "secondChoice": "Haven't been to that area yet."
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
    "name": "Sweep Slash",
    "icon": "Icon/Skill/12701_Normal",
    "description": "Swings the magic sword, dealing DMG multiple times.\u000bStrike 1: <color=#fb8037>&Param1& of ATK</color> as Aqua DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Aqua DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK</color> as Aqua DMG.\u000bStrike 4: <color=#fb8037>&Param4& of ATK</color> as Aqua DMG.",
    "shortDescription": "Swings the magic sword, dealing DMG multiple times.",
    "params": [
      "10.1%/11.2%/12.2%/15.2%/16.2%/17.2%/19.3%/20.3%/21.3%/22.3%/23.3%/24.3%/25.3%",
      "6.2%/6.9%/7.5%/9.4%/10%/10.6%/11.8%/12.5%/13.1%/13.7%/14.3%/14.9%/15.6%",
      "21.8%/24%/26.2%/32.8%/34.9%/37.1%/41.5%/43.7%/45.8%/48%/50.2%/52.4%/54.6%",
      "40%/44%/48%/60%/64%/68%/76%/80%/84%/88%/92%/96%/99%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Limpid Stream",
    "icon": "Icon/Skill/12701_Skill_Main",
    "description": "Launches an assault with the magic sword, dealing <color=#fb8037>&Param1&</color> and <color=#fb8037>&Param2& of ATK</color> as Aqua DMG and inflicting ##Aqua Mark: Torrent#2008#. Teresa also gains a Surging Shield. \u000bSurging Shield can absorb DMG equal to <color=#fb8037>&Param3& of Teresa's Base ATK</color> for &Param4&s.",
    "shortDescription": "Teresa gains a Surging Shield and launches an assault with the magic sword, dealing DMG multiple times and inflicting ##Aqua Mark: Torrent#2008#.",
    "params": [
      "101%/111%/121%/152%/162%/172%/192%/202%/212%/222%/232%/242%/253%",
      "151%/167%/182%/227%/242%/258%/288%/303%/318%/333%/348%/364%/379%",
      "45%/48.7%/52.5%/56.2%/60%/63.7%/67.5%/71.2%/75%/78.7%/82.5%/86.2%/90%",
      "5"
    ],
    "hints": {
      "2008": {
        "id": 2008,
        "name": "Aqua Mark: Torrent",
        "description": "A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.",
        "params": [
          "10"
        ]
      }
    },
    "cooldown": "8s"
  },
  "supportSkill": {
    "name": "Billowing Tide",
    "icon": "Icon/Skill/12701_Skill_Support",
    "description": "Plants the magic sword in the ground, dealing <color=#fb8037>&Param1& of ATK</color> as Aqua DMG. Also creates a Tidal Domain and applies a Surging Shield to the main Trekker. \u000bTidal Domain deals <color=#fb8037>&Param2& of ATK</color> as Aqua DMG once per second for 6s, and inflicts ##Aqua Mark: Torrent#2008#. \u000bSurging Shield can absorb damage equal to <color=#fb8037>&Param3& of Teresa's Base ATK</color> for &Param4&s.",
    "shortDescription": "Plants the magic sword in the ground to create a Tidal Domain and apply a Surging Shield to the main Trekker.\u000bThe Surging Shield deals DMG over time and inflicts ##Aqua Mark: Torrent#2008#.",
    "params": [
      "50%/55%/60%/75%/80%/85%/94%/99%/104%/109%/114%/119%/124%",
      "25.6%/28.2%/30.7%/38.4%/41%/43.6%/48.7%/51.2%/53.8%/56.4%/58.9%/61.5%/64%",
      "72%/78%/84%/90%/96%/102%/108%/114%/120%/126%/132%/138%/144%",
      "4"
    ],
    "hints": {
      "2008": {
        "id": 2008,
        "name": "Aqua Mark: Torrent",
        "description": "A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.",
        "params": [
          "10"
        ]
      }
    },
    "cooldown": "14s"
  },
  "ultimate": {
    "name": "Slicing Riptide",
    "icon": "Icon/Skill/12701_Ultra",
    "description": "Unleashes a dissecting slash which splits into two waves, dealing <color=#fb8037>&Param1&</color>/<color=#fb8037>&Param2& of ATK</color> as AoE Aqua DMG and inflicting ##Aqua Mark: Torrent#2008#.",
    "shortDescription": "Unleashes a dissecting slash which splits into waves to deal DMG. Inflicts ##Aqua Mark: Torrent#2008#.",
    "params": [
      "427%/470%/513%/641%/684%/726%/812%/855%/897%/940%/983%/1025%/1068%",
      "92%/101%/110%/137%/147%/156%/174%/183%/192%/201%/211%/220%/229%"
    ],
    "hints": {
      "2008": {
        "id": 2008,
        "name": "Aqua Mark: Torrent",
        "description": "A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.",
        "params": [
          "10"
        ]
      }
    },
    "cooldown": "30s",
    "energy": 285
  },
  "talents": [
    {
      "name": "Sturdy Edge",
      "talents": [
        {
          "name": "Sturdy Edge",
          "description": "Increases the squad's Aqua DMG dealt to targets inflicted with ##Aqua Mark: Torrent#2008#/##Chill#1027#/##Frozen#1002# by <color=#0abec5>&Param1&</color>.",
          "params": [
            "8.4%"
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
      "name": "Midsummer Rain",
      "talents": [
        {
          "name": "Midsummer Rain",
          "description": "When the main Trekker is inflicted with Surging Shield, her Skill DMG is increased by <color=#0abec5>&Param1&</color>.",
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
    },
    {
      "name": "Battle-proven Ranger",
      "talents": [
        {
          "name": "Battle-proven Ranger",
          "description": "When Teresa inflicts ##Aqua Mark: Torrent#2008# on a target, increases the squad's ATK by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "11%",
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
      "name": "Dispersing Cloud",
      "talents": [
        {
          "name": "Dispersing Cloud",
          "description": "When ##Aqua Mark#1018# is triggered, increases the main Trekker's Aqua DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
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
      "name": "Legendary Adventurer",
      "talents": [
        {
          "name": "Legendary Adventurer",
          "description": "When there are 3 Aqua Trekkers in the squad, the squad's Skill DMG is increased by <color=#0abec5>&Param1&</color>.",
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
      "hp": 1133,
      "atk": 84
    },
    {
      "hp": 1472,
      "atk": 109
    },
    {
      "hp": 1812,
      "atk": 134
    },
    {
      "hp": 2151,
      "atk": 160
    },
    {
      "hp": 2491,
      "atk": 185
    },
    {
      "hp": 2831,
      "atk": 210
    },
    {
      "hp": 3171,
      "atk": 235
    },
    {
      "hp": 3510,
      "atk": 260
    },
    {
      "hp": 3850,
      "atk": 286
    },
    {
      "hp": 4190,
      "atk": 311
    },
    {
      "hp": 5028,
      "atk": 373
    },
    {
      "hp": 5368,
      "atk": 398
    },
    {
      "hp": 5708,
      "atk": 423
    },
    {
      "hp": 6048,
      "atk": 449
    },
    {
      "hp": 6387,
      "atk": 474
    },
    {
      "hp": 6727,
      "atk": 499
    },
    {
      "hp": 7067,
      "atk": 524
    },
    {
      "hp": 7407,
      "atk": 549
    },
    {
      "hp": 7746,
      "atk": 575
    },
    {
      "hp": 8086,
      "atk": 600
    },
    {
      "hp": 8426,
      "atk": 625
    },
    {
      "hp": 10113,
      "atk": 750
    },
    {
      "hp": 10453,
      "atk": 775
    },
    {
      "hp": 10793,
      "atk": 801
    },
    {
      "hp": 11132,
      "atk": 826
    },
    {
      "hp": 11472,
      "atk": 851
    },
    {
      "hp": 11812,
      "atk": 876
    },
    {
      "hp": 12152,
      "atk": 901
    },
    {
      "hp": 12492,
      "atk": 927
    },
    {
      "hp": 12831,
      "atk": 952
    },
    {
      "hp": 13171,
      "atk": 977
    },
    {
      "hp": 13511,
      "atk": 1002
    },
    {
      "hp": 16217,
      "atk": 1203
    },
    {
      "hp": 16557,
      "atk": 1228
    },
    {
      "hp": 16897,
      "atk": 1253
    },
    {
      "hp": 17237,
      "atk": 1278
    },
    {
      "hp": 17576,
      "atk": 1304
    },
    {
      "hp": 17916,
      "atk": 1329
    },
    {
      "hp": 18256,
      "atk": 1354
    },
    {
      "hp": 18596,
      "atk": 1379
    },
    {
      "hp": 18936,
      "atk": 1404
    },
    {
      "hp": 19275,
      "atk": 1430
    },
    {
      "hp": 19615,
      "atk": 1455
    },
    {
      "hp": 23534,
      "atk": 1746
    },
    {
      "hp": 23874,
      "atk": 1771
    },
    {
      "hp": 24214,
      "atk": 1796
    },
    {
      "hp": 24554,
      "atk": 1821
    },
    {
      "hp": 24894,
      "atk": 1846
    },
    {
      "hp": 25233,
      "atk": 1872
    },
    {
      "hp": 25573,
      "atk": 1897
    },
    {
      "hp": 25913,
      "atk": 1922
    },
    {
      "hp": 26253,
      "atk": 1947
    },
    {
      "hp": 26592,
      "atk": 1972
    },
    {
      "hp": 26932,
      "atk": 1998
    },
    {
      "hp": 32323,
      "atk": 2397
    },
    {
      "hp": 32663,
      "atk": 2423
    },
    {
      "hp": 33002,
      "atk": 2448
    },
    {
      "hp": 33342,
      "atk": 2473
    },
    {
      "hp": 33682,
      "atk": 2498
    },
    {
      "hp": 34022,
      "atk": 2523
    },
    {
      "hp": 34362,
      "atk": 2549
    },
    {
      "hp": 34701,
      "atk": 2574
    },
    {
      "hp": 35041,
      "atk": 2599
    },
    {
      "hp": 35381,
      "atk": 2624
    },
    {
      "hp": 35721,
      "atk": 2649
    },
    {
      "hp": 42867,
      "atk": 3179
    },
    {
      "hp": 43207,
      "atk": 3205
    },
    {
      "hp": 43547,
      "atk": 3230
    },
    {
      "hp": 43887,
      "atk": 3255
    },
    {
      "hp": 44226,
      "atk": 3280
    },
    {
      "hp": 44566,
      "atk": 3305
    },
    {
      "hp": 44906,
      "atk": 3331
    },
    {
      "hp": 45246,
      "atk": 3356
    },
    {
      "hp": 45586,
      "atk": 3381
    },
    {
      "hp": 45925,
      "atk": 3406
    },
    {
      "hp": 46265,
      "atk": 3431
    },
    {
      "hp": 55517,
      "atk": 4118
    },
    {
      "hp": 55857,
      "atk": 4143
    },
    {
      "hp": 56197,
      "atk": 4168
    },
    {
      "hp": 56537,
      "atk": 4193
    },
    {
      "hp": 56876,
      "atk": 4218
    },
    {
      "hp": 57216,
      "atk": 4244
    },
    {
      "hp": 57556,
      "atk": 4269
    },
    {
      "hp": 57896,
      "atk": 4294
    },
    {
      "hp": 58235,
      "atk": 4319
    },
    {
      "hp": 58575,
      "atk": 4344
    },
    {
      "hp": 58915,
      "atk": 4370
    },
    {
      "hp": 70694,
      "atk": 5243
    },
    {
      "hp": 71033,
      "atk": 5268
    },
    {
      "hp": 71373,
      "atk": 5294
    },
    {
      "hp": 71713,
      "atk": 5319
    },
    {
      "hp": 72053,
      "atk": 5344
    },
    {
      "hp": 72392,
      "atk": 5369
    },
    {
      "hp": 72732,
      "atk": 5394
    },
    {
      "hp": 73072,
      "atk": 5420
    },
    {
      "hp": 73412,
      "atk": 5445
    },
    {
      "hp": 73751,
      "atk": 5470
    },
    {
      "hp": 74091,
      "atk": 5495
    },
    {
      "hp": 74091,
      "atk": 5495
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
          "id": 20063,
          "name": "Nightlit Haven",
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
          "id": 20063,
          "name": "Nightlit Haven",
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
          "id": 20063,
          "name": "Nightlit Haven",
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
          "id": 20063,
          "name": "Nightlit Haven",
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