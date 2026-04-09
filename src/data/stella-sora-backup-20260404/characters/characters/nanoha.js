export const Nanoha = {
  "id": 119,
  "name": "Nanoha",
  "icon": "/stella/assets/Nanoha.png",
  "portrait": "/stella/assets/Nanoha_portrait.png",
  "background": "/stella/assets/Nanoha_background.png",
  "variants": {
    "base": "/stella/assets/Nanoha_base.png",
    "q": "/stella/assets/Nanoha_q.png",
    "gd": "/stella/assets/Nanoha_gd.png",
    "goods": "/stella/assets/Nanoha_goods.png",
    "qs": "/stella/assets/Nanoha_qs.png",
    "xl": "/stella/assets/Nanoha_xl.png",
    "gc": "/stella/assets/Nanoha_gc.png",
    "sk": "/stella/assets/Nanoha_portrait.png",
    "xxl": "/stella/assets/Nanoha.png",
    "qm": "/stella/assets/Nanoha_qm.png",
    "l": "/stella/assets/Nanoha_l.png",
    "s": "/stella/assets/Nanoha_s.png"
  },
  "description": "Nanoha is a maid working at Goodwind who is also skilled in \"Flower\" Ninjutsu. She takes pride in her Sunflower Shuriken, which can hit its target while moving at high speed.",
  "voiceActor": {
    "cn": "Dou Nai",
    "cnLocalized": "豆奶",
    "jp": "Satomi Sato",
    "jpLocalized": "佐藤聡美"
  },
  "birthday": "4.2",
  "grade": 5,
  "element": "Ventus",
  "position": "Vanguard",
  "attackType": "Ranged",
  "style": "Inquisitive",
  "faction": "Goodwind Homecare",
  "tags": [
    "Vanguard",
    "Inquisitive",
    "Goodwind Homecare"
  ],
  "dateEvents": [
    {
      "name": "Customized Sweetness",
      "icon": "DatingSPCG_119301",
      "clue": "Visit the Dessert Shop to unlock",
      "secondChoice": "Haven't had enough. Let's order some more."
    },
    {
      "name": "The Best Maid",
      "icon": "DatingSPCG_119302",
      "clue": "Visit the Market to unlock",
      "secondChoice": "There's an event you can join in the game area."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Whisper Wind Spinner",
      "Chilling Wind Spinner",
      "Blazing Wind Spinner",
      "Summer Chill Crushed Ice",
      "Fragrant Ice Delight",
      "Sweet IceFurry",
      "Gilded Ceramic Bowl",
      "Blossom Porcelain Cup",
      "Mystic Potion Kettle"
    ],
    "hates": [
      "Rising Star",
      "Emerging Talent",
      "Shining Star"
    ]
  },
  "normalAttack": {
    "name": "Flowers Scatter",
    "icon": "Icon/Skill/11901_Normal",
    "description": "Throws multiple darts.\u000bStrike 1: <color=#ec6d21>&Param1& of ATK ×2</color> as Ventus DMG.\u000bStrike 2: <color=#ec6d21>&Param2& of ATK ×2</color> as Ventus DMG.\u000bStrike 3: <color=#ec6d21>&Param3& of ATK ×3</color> as Ventus DMG.",
    "shortDescription": "Throws a number of darts.",
    "params": [
      "11%/12.6%/14.3%/19.2%/20.8%/22.3%/25.4%/26.7%/28%/30.7%/32.9%/35.1%/37.3%",
      "11%/12.6%/14.3%/19.2%/20.8%/22.3%/25.4%/26.7%/28%/30.7%/32.9%/35.1%/37.3%",
      "16.1%/18.5%/20.9%/28.2%/30.4%/32.7%/37.2%/39.1%/41.1%/44.9%/48.1%/51.4%/54.6%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Flowers Dance",
    "icon": "Icon/Skill/11901_Skill_Main",
    "description": "Throws two sunflower shurikens that strike the target and return for 4 times. Each hit deals <color=#ec6d21>&Param1& of ATK</color> as Ventus DMG.\u000bFlowers Dance (Main Skill) can trigger ##Ventus Mark#1017#, dealing &Param2& of ATK as AoE Ventus Mark DMG.",
    "shortDescription": "Throws sunflower shurikens that strike the target and return. The Main Skill can trigger ##Ventus Mark#1017#.",
    "params": [
      "4.9%/5.6%/6.3%/8.5%/9.2%/9.9%/11.2%/11.8%/12.4%/13.5%/14.5%/15.5%/16.4%",
      "31%/40%/49%/58%/67%/77%/86%/95%/104%"
    ],
    "hints": {
      "1017": {
        "id": 1017,
        "name": "Ventus Mark",
        "description": "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated.",
        "params": []
      }
    },
    "cooldown": "10s"
  },
  "supportSkill": {
    "name": "Flowers Bloom",
    "icon": "Icon/Skill/11901_Skill_Support",
    "description": "Conjures an exploding sunflower that fires 12 darts, each dealing <color=#ec6d21>&Param1& of ATK</color> as Ventus DMG.\u000bFlowers Bloom (Support Skill) can trigger ##Ventus Mark#1017#, dealing &Param2& of ATK as AoE Ventus Mark DMG.",
    "shortDescription": "Conjures an exploding sunflower that fires multiple darts. The Support Skill can trigger ##Ventus Mark#1017#.",
    "params": [
      "25.9%/29.8%/33.7%/45.3%/49%/52.6%/59.9%/63%/66.1%/72.3%/77.5%/82.7%/87.8%",
      "31%/40%/49%/58%/67%/77%/86%/95%/104%"
    ],
    "hints": {
      "1017": {
        "id": 1017,
        "name": "Ventus Mark",
        "description": "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated.",
        "params": []
      }
    },
    "cooldown": "12s"
  },
  "ultimate": {
    "name": "Flowers Thrice",
    "icon": "Icon/Skill/11901_Ultra",
    "description": "Generates 2 stationary clones that attack enemies with darts, dealing <color=#ec6d21>&Param1& of Nanoha's ATK x2</color>, <color=#ec6d21>&Param2& of Nanoha's ATK x2</color>, and <color=#ec6d21>&Param3& of Nanoha's ATK x3</color> as Ventus Ultimate DMG.\u000bEach clone lasts for 10s. Up to 2 clones can be present simultaneously.\u000bWhen a clone deals DMG, it can trigger ##Ventus Mark#1017#, dealing &Param4& of ATK as AoE Ventus Mark DMG.",
    "shortDescription": "Generates clones that attack enemies. The clones can trigger ##Ventus Mark#1017#.",
    "params": [
      "19.4%/22.3%/25.2%/33.9%/36.7%/39.4%/44.8%/47.1%/49.5%/54.1%/58%/61.9%/65.7%",
      "19.4%/22.3%/25.2%/33.9%/36.7%/39.4%/44.8%/47.1%/49.5%/54.1%/58%/61.9%/65.7%",
      "28.4%/32.7%/37%/49.8%/53.8%/57.7%/65.7%/69.1%/72.5%/79.4%/85%/90.7%/96.4%",
      "31%/40%/49%/58%/67%/77%/86%/95%/104%"
    ],
    "hints": {
      "1017": {
        "id": 1017,
        "name": "Ventus Mark",
        "description": "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated.",
        "params": []
      }
    },
    "cooldown": "30s",
    "energy": 285
  },
  "talents": [
    {
      "name": "Like a Dream",
      "talents": [
        {
          "name": "Like a Dream",
          "description": "When Nanoha's clone is on the battlefield, her ATK is increased by <color=#0abec5>&Param1&</color>.",
          "params": [
            "47%"
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Rejuvenating Spring",
      "talents": [
        {
          "name": "Rejuvenating Spring",
          "description": "When Nanoha triggers ##Ventus Mark#1017#, her ATK is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "20%",
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Esoteric Arts",
      "talents": [
        {
          "name": "Esoteric Arts",
          "description": "When Nanoha casts a skill, her Ventus DMG is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "40%",
            "5"
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Circulation of Wind",
      "talents": [
        {
          "name": "Circulation of Wind",
          "description": "When Nanoha deals Auto Attack DMG to a target, increases her Auto Attack DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "22%",
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Ninja Creed",
      "talents": [
        {
          "name": "Ninja Creed",
          "description": "Increases Nanoha's Ventus DMG dealt to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
          "params": [
            "24%"
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "hp": 782,
      "atk": 114
    },
    {
      "hp": 1017,
      "atk": 148
    },
    {
      "hp": 1252,
      "atk": 182
    },
    {
      "hp": 1486,
      "atk": 216
    },
    {
      "hp": 1721,
      "atk": 250
    },
    {
      "hp": 1956,
      "atk": 284
    },
    {
      "hp": 2190,
      "atk": 318
    },
    {
      "hp": 2425,
      "atk": 352
    },
    {
      "hp": 2660,
      "atk": 386
    },
    {
      "hp": 2895,
      "atk": 420
    },
    {
      "hp": 3474,
      "atk": 504
    },
    {
      "hp": 3708,
      "atk": 538
    },
    {
      "hp": 3943,
      "atk": 572
    },
    {
      "hp": 4178,
      "atk": 606
    },
    {
      "hp": 4412,
      "atk": 640
    },
    {
      "hp": 4647,
      "atk": 674
    },
    {
      "hp": 4882,
      "atk": 708
    },
    {
      "hp": 5116,
      "atk": 742
    },
    {
      "hp": 5351,
      "atk": 776
    },
    {
      "hp": 5586,
      "atk": 811
    },
    {
      "hp": 5820,
      "atk": 845
    },
    {
      "hp": 6986,
      "atk": 1014
    },
    {
      "hp": 7221,
      "atk": 1048
    },
    {
      "hp": 7456,
      "atk": 1082
    },
    {
      "hp": 7690,
      "atk": 1116
    },
    {
      "hp": 7925,
      "atk": 1150
    },
    {
      "hp": 8160,
      "atk": 1184
    },
    {
      "hp": 8394,
      "atk": 1218
    },
    {
      "hp": 8629,
      "atk": 1252
    },
    {
      "hp": 8864,
      "atk": 1286
    },
    {
      "hp": 9098,
      "atk": 1320
    },
    {
      "hp": 9333,
      "atk": 1354
    },
    {
      "hp": 11203,
      "atk": 1626
    },
    {
      "hp": 11438,
      "atk": 1660
    },
    {
      "hp": 11672,
      "atk": 1694
    },
    {
      "hp": 11907,
      "atk": 1728
    },
    {
      "hp": 12142,
      "atk": 1762
    },
    {
      "hp": 12376,
      "atk": 1796
    },
    {
      "hp": 12611,
      "atk": 1830
    },
    {
      "hp": 12846,
      "atk": 1864
    },
    {
      "hp": 13080,
      "atk": 1898
    },
    {
      "hp": 13315,
      "atk": 1932
    },
    {
      "hp": 13550,
      "atk": 1966
    },
    {
      "hp": 16257,
      "atk": 2359
    },
    {
      "hp": 16491,
      "atk": 2393
    },
    {
      "hp": 16726,
      "atk": 2427
    },
    {
      "hp": 16961,
      "atk": 2461
    },
    {
      "hp": 17195,
      "atk": 2495
    },
    {
      "hp": 17430,
      "atk": 2529
    },
    {
      "hp": 17665,
      "atk": 2563
    },
    {
      "hp": 17899,
      "atk": 2597
    },
    {
      "hp": 18134,
      "atk": 2631
    },
    {
      "hp": 18369,
      "atk": 2665
    },
    {
      "hp": 18604,
      "atk": 2700
    },
    {
      "hp": 22327,
      "atk": 3240
    },
    {
      "hp": 22562,
      "atk": 3274
    },
    {
      "hp": 22797,
      "atk": 3308
    },
    {
      "hp": 23032,
      "atk": 3342
    },
    {
      "hp": 23266,
      "atk": 3376
    },
    {
      "hp": 23501,
      "atk": 3410
    },
    {
      "hp": 23736,
      "atk": 3444
    },
    {
      "hp": 23970,
      "atk": 3478
    },
    {
      "hp": 24205,
      "atk": 3512
    },
    {
      "hp": 24440,
      "atk": 3546
    },
    {
      "hp": 24674,
      "atk": 3580
    },
    {
      "hp": 29611,
      "atk": 4297
    },
    {
      "hp": 29846,
      "atk": 4331
    },
    {
      "hp": 30080,
      "atk": 4365
    },
    {
      "hp": 30315,
      "atk": 4399
    },
    {
      "hp": 30550,
      "atk": 4433
    },
    {
      "hp": 30784,
      "atk": 4467
    },
    {
      "hp": 31019,
      "atk": 4501
    },
    {
      "hp": 31254,
      "atk": 4535
    },
    {
      "hp": 31488,
      "atk": 4569
    },
    {
      "hp": 31723,
      "atk": 4603
    },
    {
      "hp": 31958,
      "atk": 4637
    },
    {
      "hp": 38349,
      "atk": 5565
    },
    {
      "hp": 38584,
      "atk": 5599
    },
    {
      "hp": 38819,
      "atk": 5633
    },
    {
      "hp": 39053,
      "atk": 5667
    },
    {
      "hp": 39288,
      "atk": 5701
    },
    {
      "hp": 39523,
      "atk": 5735
    },
    {
      "hp": 39758,
      "atk": 5769
    },
    {
      "hp": 39992,
      "atk": 5803
    },
    {
      "hp": 40227,
      "atk": 5837
    },
    {
      "hp": 40462,
      "atk": 5871
    },
    {
      "hp": 40696,
      "atk": 5905
    },
    {
      "hp": 48832,
      "atk": 7086
    },
    {
      "hp": 49067,
      "atk": 7120
    },
    {
      "hp": 49302,
      "atk": 7154
    },
    {
      "hp": 49537,
      "atk": 7188
    },
    {
      "hp": 49771,
      "atk": 7222
    },
    {
      "hp": 50006,
      "atk": 7256
    },
    {
      "hp": 50241,
      "atk": 7290
    },
    {
      "hp": 50475,
      "atk": 7324
    },
    {
      "hp": 50710,
      "atk": 7358
    },
    {
      "hp": 50945,
      "atk": 7392
    },
    {
      "hp": 51179,
      "atk": 7426
    },
    {
      "hp": 51179,
      "atk": 7426
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