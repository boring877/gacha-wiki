export const Nazuna = {
  "id": 156,
  "name": "Nazuna",
  "icon": "/stella/assets/Nazuna.png",
  "portrait": "/stella/assets/Nazuna_portrait.png",
  "background": "/stella/assets/Nazuna_background.png",
  "variants": {
    "base": "/stella/assets/Nazuna_base.png",
    "q": "/stella/assets/Nazuna_q.png",
    "gd": "/stella/assets/Nazuna_gd.png",
    "goods": "/stella/assets/Nazuna_goods.png",
    "qs": "/stella/assets/Nazuna_qs.png",
    "xl": "/stella/assets/Nazuna_xl.png",
    "gc": "/stella/assets/Nazuna_gc.png",
    "sk": "/stella/assets/Nazuna_portrait.png",
    "xxl": "/stella/assets/Nazuna.png",
    "qm": "/stella/assets/Nazuna_qm.png",
    "l": "/stella/assets/Nazuna_l.png",
    "s": "/stella/assets/Nazuna_s.png"
  },
  "description": "Nazuna fights with her trusty hand crossbow and her puppet companions at her side. Her out-of-the-box ideas and uncanny luck always bring pleasant surprises to the squad.",
  "voiceActor": {
    "cn": "Xie Ying",
    "cnLocalized": "谢莹",
    "jp": "Moe Ehara",
    "jpLocalized": "江原萌依"
  },
  "birthday": "3.3",
  "grade": 5,
  "element": "Terra",
  "position": "Support",
  "attackType": "Ranged",
  "style": "Collector",
  "faction": "Petal Bloom",
  "tags": [
    "Support",
    "Collector",
    "Petal Bloom"
  ],
  "dateEvents": [
    {
      "name": "\"Lord of the Prize Claw\"",
      "icon": "DatingSPCG_156301",
      "clue": "Visit the Market to unlock",
      "secondChoice": "There's an event you can join in the game area."
    },
    {
      "name": "Seaside Fishing",
      "icon": "DatingSPCG_156302",
      "clue": "Visit the Port to unlock",
      "secondChoice": "How about doing some night fishing?"
    }
  ],
  "giftPreferences": {
    "loves": [
      "Love Candle",
      "Blazing Wings",
      "Fiery Honeypot",
      "Card Photo Capturer",
      "Reflective Photo Capturer",
      "Ultra-Precision Photo Capturer",
      "Gilded Ceramic Bowl",
      "Blossom Porcelain Cup",
      "Mystic Potion Kettle"
    ],
    "hates": [
      "Whisper Wind Spinner",
      "Chilling Wind Spinner",
      "Blazing Wind Spinner"
    ]
  },
  "normalAttack": {
    "name": "Laid-back Shots",
    "icon": "Icon/Skill/15601_Normal",
    "description": "Shoots consecutively with the crossbow, each shot dealing <color=#fb8037>&Param1& of ATK</color> as Terra DMG. Stores up to 6 arrows.",
    "shortDescription": "Shoots consecutively with the crossbow.",
    "params": [
      "17%/19.6%/22.1%/29.8%/32.2%/34.6%/39.3%/41.4%/43.4%/47.5%/50.9%/54.3%/57.7%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Plushie Dance",
    "icon": "Icon/Skill/15601_Skill_Main",
    "description": "Generates a penguin plushie that keeps moving toward the target and explodes in 3s, dealing <color=#fb8037>&Param1& of ATK</color> as AoE Terra DMG and inflicting ##Terra Mark: Earth Vein#2029#. When the penguin plushie deals DMG, the target's &Param2& increases by <color=#fb8037>&Param3&</color> for &Param4&s.",
    "shortDescription": "Generates a penguin plushie that will explode.",
    "params": [
      "152%/174%/197%/265%/286%/308%/350%/368%/386%/423%/453%/483%/514%",
      "Terra DMG Taken",
      "28%/37%/45%/70%/78%/86%/102%/109%/116%/129%/140%/152%/163%",
      "5"
    ],
    "hints": {
      "2029": {
        "id": 2029,
        "name": "Terra Mark: Earth Vein",
        "description": "A special status applied to the target by some Terra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Terra Trekkers. When triggered, removes the status and activates special effects.",
        "params": []
      }
    },
    "cooldown": "8s"
  },
  "supportSkill": {
    "name": "Bingo Crush",
    "icon": "Icon/Skill/15601_Skill_Support",
    "description": "Raffles 5 times and follows the main Trekker.\u000bFull penguins: Throws the plushie and generates a penguin statue, dealing <color=#fb8037>&Param1& of ATK x7</color> as AoE Terra DMG. Full hearts: Shoots a heart arrow that restores the main Trekker's HP by <color=#fb8037>&Param2&</color> and explodes, dealing <color=#fb8037>&Param3& of ATK</color> as AoE Terra DMG. Hearts and penguins: Shoots in a sweeping motion, dealing <color=#fb8037>&Param4& of ATK x6</color> as Terra DMG. All these attacks inflict ##Terra Mark: Earth Vein#2029#.\u000bMore penguins than hearts: The squad receive Kiss of Penguin, which increases &Param5& by <color=#fb8037>&Param6&</color> for &Param7&s. More hearts than penguins: The squad receive Kiss of Love, which increases &Param8& by <color=#fb8037>&Param9&</color> for &Param10&s.",
    "shortDescription": "Raffles several times and follows the main Trekker, attacking in different ways based on the raffle results and gaining bonuses.",
    "params": [
      "12%/13.3%/15.1%/20.3%/21.9%/23.5%/26.8%/28.2%/29.6%/32.3%/34.7%/37%/39.3%",
      "5.9%",
      "41%/47%/53%/71%/77%/82%/94%/99%/103%/113%/121%/129%/137%",
      "19%/22%/24.8%/33.4%/36.1%/38.7%/44.1%/46.4%/48.7%/53.3%/57.1%/60.9%/64.7%",
      "ATK",
      "22%/29%/36%/56%/62%/68%/81%/86%/92%/103%/111%/120%/129%",
      "3.5",
      "Terra DMG",
      "11%/15%/18%/29%/32%/35%/41%/44%/47%/52%/57%/62%/66%",
      "3.5"
    ],
    "hints": {
      "2029": {
        "id": 2029,
        "name": "Terra Mark: Earth Vein",
        "description": "A special status applied to the target by some Terra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Terra Trekkers. When triggered, removes the status and activates special effects.",
        "params": []
      }
    },
    "cooldown": "20s"
  },
  "ultimate": {
    "name": "Dream Spiral",
    "icon": "Icon/Skill/15601_Ultra",
    "description": "Rides a shopping cart and spins rapidly. Moves to any direction while the skill is active, dealing <color=#fb8037>&Param1& of ATK x11</color> as AoE Terra DMG and inflicting ##Terra Mark: Earth Vein#2029#. When the shopping cart explodes, increases the squad's &Param2& by <color=#fb8037>&Param3&</color> for &Param4&s.",
    "shortDescription": "Rides a shopping cart and spins rapidly, dealing multiple phases of DMG.",
    "params": [
      "54%/62%/70%/94%/101%/109%/124%/130%/136%/149%/160%/171%/181%",
      "ATK",
      "35%/46%/57%/89%/99%/109%/129%/137%/146%/163%/177%/191%/205%",
      "15"
    ],
    "hints": {
      "2029": {
        "id": 2029,
        "name": "Terra Mark: Earth Vein",
        "description": "A special status applied to the target by some Terra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Terra Trekkers. When triggered, removes the status and activates special effects.",
        "params": []
      }
    },
    "cooldown": "30s",
    "energy": 285
  },
  "talents": [
    {
      "name": "Blanket Home",
      "talents": [
        {
          "name": "Blanket Home",
          "description": "When ##Terra Mark#1020# is triggered, increases the squad's Terra DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "14%",
            "8"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Snack Summoning Circle",
      "talents": [
        {
          "name": "Snack Summoning Circle",
          "description": "After Nazuna deals Ultimate DMG to a target, increases the main Trekker's Terra DMG to the same target by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "40%",
            "20"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Fluffy Guardian",
      "talents": [
        {
          "name": "Fluffy Guardian",
          "description": "After Nazuna inflicts ##Terra Mark#1020# to a target, increases the Terra DMG taken by the target by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "14%",
            "8"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Expert Homebody",
      "talents": [
        {
          "name": "Expert Homebody",
          "description": "When Nazuna deals Skill DMG to a target, increases the main Trekker's ATK by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "20%",
            "5"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Lullaby of Sweet Dreams",
      "talents": [
        {
          "name": "Lullaby of Sweet Dreams",
          "description": "When there are 3 Terra Trekkers in the squad, increases the squad's Terra DMG by <color=#0abec5>&Param1&</color>.",
          "params": [
            "14%"
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
      "hp": 807,
      "atk": 92
    },
    {
      "hp": 1049,
      "atk": 120
    },
    {
      "hp": 1291,
      "atk": 148
    },
    {
      "hp": 1533,
      "atk": 176
    },
    {
      "hp": 1775,
      "atk": 203
    },
    {
      "hp": 2017,
      "atk": 231
    },
    {
      "hp": 2259,
      "atk": 259
    },
    {
      "hp": 2502,
      "atk": 286
    },
    {
      "hp": 2744,
      "atk": 314
    },
    {
      "hp": 2986,
      "atk": 342
    },
    {
      "hp": 3583,
      "atk": 410
    },
    {
      "hp": 3825,
      "atk": 438
    },
    {
      "hp": 4067,
      "atk": 466
    },
    {
      "hp": 4309,
      "atk": 493
    },
    {
      "hp": 4551,
      "atk": 521
    },
    {
      "hp": 4793,
      "atk": 549
    },
    {
      "hp": 5035,
      "atk": 577
    },
    {
      "hp": 5278,
      "atk": 604
    },
    {
      "hp": 5520,
      "atk": 632
    },
    {
      "hp": 5762,
      "atk": 660
    },
    {
      "hp": 6004,
      "atk": 687
    },
    {
      "hp": 7206,
      "atk": 825
    },
    {
      "hp": 7448,
      "atk": 853
    },
    {
      "hp": 7690,
      "atk": 881
    },
    {
      "hp": 7932,
      "atk": 908
    },
    {
      "hp": 8175,
      "atk": 936
    },
    {
      "hp": 8417,
      "atk": 964
    },
    {
      "hp": 8659,
      "atk": 991
    },
    {
      "hp": 8901,
      "atk": 1019
    },
    {
      "hp": 9143,
      "atk": 1047
    },
    {
      "hp": 9385,
      "atk": 1075
    },
    {
      "hp": 9627,
      "atk": 1102
    },
    {
      "hp": 11556,
      "atk": 1323
    },
    {
      "hp": 11798,
      "atk": 1351
    },
    {
      "hp": 12040,
      "atk": 1379
    },
    {
      "hp": 12282,
      "atk": 1406
    },
    {
      "hp": 12524,
      "atk": 1434
    },
    {
      "hp": 12766,
      "atk": 1462
    },
    {
      "hp": 13008,
      "atk": 1489
    },
    {
      "hp": 13250,
      "atk": 1517
    },
    {
      "hp": 13492,
      "atk": 1545
    },
    {
      "hp": 13734,
      "atk": 1573
    },
    {
      "hp": 13977,
      "atk": 1600
    },
    {
      "hp": 16769,
      "atk": 1920
    },
    {
      "hp": 17011,
      "atk": 1948
    },
    {
      "hp": 17253,
      "atk": 1976
    },
    {
      "hp": 17495,
      "atk": 2003
    },
    {
      "hp": 17737,
      "atk": 2031
    },
    {
      "hp": 17979,
      "atk": 2059
    },
    {
      "hp": 18221,
      "atk": 2086
    },
    {
      "hp": 18463,
      "atk": 2114
    },
    {
      "hp": 18705,
      "atk": 2142
    },
    {
      "hp": 18947,
      "atk": 2170
    },
    {
      "hp": 19190,
      "atk": 2197
    },
    {
      "hp": 23031,
      "atk": 2637
    },
    {
      "hp": 23273,
      "atk": 2665
    },
    {
      "hp": 23515,
      "atk": 2693
    },
    {
      "hp": 23757,
      "atk": 2720
    },
    {
      "hp": 23999,
      "atk": 2748
    },
    {
      "hp": 24241,
      "atk": 2776
    },
    {
      "hp": 24483,
      "atk": 2803
    },
    {
      "hp": 24725,
      "atk": 2831
    },
    {
      "hp": 24967,
      "atk": 2859
    },
    {
      "hp": 25209,
      "atk": 2887
    },
    {
      "hp": 25452,
      "atk": 2914
    },
    {
      "hp": 30543,
      "atk": 3497
    },
    {
      "hp": 30786,
      "atk": 3525
    },
    {
      "hp": 31028,
      "atk": 3553
    },
    {
      "hp": 31270,
      "atk": 3581
    },
    {
      "hp": 31512,
      "atk": 3608
    },
    {
      "hp": 31754,
      "atk": 3636
    },
    {
      "hp": 31996,
      "atk": 3664
    },
    {
      "hp": 32238,
      "atk": 3691
    },
    {
      "hp": 32480,
      "atk": 3719
    },
    {
      "hp": 32722,
      "atk": 3747
    },
    {
      "hp": 32964,
      "atk": 3775
    },
    {
      "hp": 39557,
      "atk": 4529
    },
    {
      "hp": 39799,
      "atk": 4557
    },
    {
      "hp": 40041,
      "atk": 4585
    },
    {
      "hp": 40283,
      "atk": 4613
    },
    {
      "hp": 40526,
      "atk": 4640
    },
    {
      "hp": 40768,
      "atk": 4668
    },
    {
      "hp": 41010,
      "atk": 4696
    },
    {
      "hp": 41252,
      "atk": 4723
    },
    {
      "hp": 41494,
      "atk": 4751
    },
    {
      "hp": 41736,
      "atk": 4779
    },
    {
      "hp": 41978,
      "atk": 4807
    },
    {
      "hp": 50370,
      "atk": 5768
    },
    {
      "hp": 50613,
      "atk": 5795
    },
    {
      "hp": 50855,
      "atk": 5823
    },
    {
      "hp": 51097,
      "atk": 5851
    },
    {
      "hp": 51339,
      "atk": 5878
    },
    {
      "hp": 51581,
      "atk": 5906
    },
    {
      "hp": 51823,
      "atk": 5934
    },
    {
      "hp": 52065,
      "atk": 5962
    },
    {
      "hp": 52307,
      "atk": 5989
    },
    {
      "hp": 52549,
      "atk": 6017
    },
    {
      "hp": 52791,
      "atk": 6045
    },
    {
      "hp": 52791,
      "atk": 6045
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
          "id": 32011,
          "name": "Shooter Game Cartridge",
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
          "id": 32011,
          "name": "Shooter Game Cartridge",
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
          "id": 32011,
          "name": "Shooter Game Cartridge",
          "quantity": 24
        },
        {
          "id": 32012,
          "name": "Barrage Game Cartridge",
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
          "id": 32011,
          "name": "Shooter Game Cartridge",
          "quantity": 38
        },
        {
          "id": 32012,
          "name": "Barrage Game Cartridge",
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
          "id": 32011,
          "name": "Shooter Game Cartridge",
          "quantity": 70
        },
        {
          "id": 32012,
          "name": "Barrage Game Cartridge",
          "quantity": 14
        },
        {
          "id": 32013,
          "name": "Demon Bee Game Cartridge",
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
          "id": 32012,
          "name": "Barrage Game Cartridge",
          "quantity": 50
        },
        {
          "id": 32013,
          "name": "Demon Bee Game Cartridge",
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
          "id": 32012,
          "name": "Barrage Game Cartridge",
          "quantity": 90
        },
        {
          "id": 32013,
          "name": "Demon Bee Game Cartridge",
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
          "id": 32012,
          "name": "Barrage Game Cartridge",
          "quantity": 140
        },
        {
          "id": 32013,
          "name": "Demon Bee Game Cartridge",
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
          "id": 32012,
          "name": "Barrage Game Cartridge",
          "quantity": 200
        },
        {
          "id": 32013,
          "name": "Demon Bee Game Cartridge",
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