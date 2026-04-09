export const Minova = {
  "id": 132,
  "name": "Minova",
  "icon": "/stella/assets/Minova.png",
  "portrait": "/stella/assets/Minova_portrait.png",
  "background": "/stella/assets/Minova_background.png",
  "variants": {
    "base": "/stella/assets/Minova_base.png",
    "q": "/stella/assets/Minova_q.png",
    "gd": "/stella/assets/Minova_gd.png",
    "goods": "/stella/assets/Minova_goods.png",
    "qs": "/stella/assets/Minova_qs.png",
    "xl": "/stella/assets/Minova_xl.png",
    "gc": "/stella/assets/Minova_gc.png",
    "sk": "/stella/assets/Minova_portrait.png",
    "xxl": "/stella/assets/Minova.png",
    "qm": "/stella/assets/Minova_qm.png",
    "l": "/stella/assets/Minova_l.png",
    "s": "/stella/assets/Minova_s.png"
  },
  "description": "As the leader of the Ashwind Clan, Minova rarely operates alone. Her greatest asset in battle is not her skateboard or baseball bat, but her companions.",
  "voiceActor": {
    "cn": "Yang Qingjiang",
    "cnLocalized": "杨清江",
    "jp": "Ai Fairouz",
    "jpLocalized": "ファイルーズあい"
  },
  "birthday": "1.1",
  "grade": 5,
  "element": "Lux",
  "position": "Versatile",
  "attackType": "Melee",
  "style": "Steady",
  "faction": "Ashwind Clan",
  "tags": [
    "Versatile",
    "Steady",
    "Ashwind Clan"
  ],
  "dateEvents": [
    {
      "name": "Bioluminescence",
      "icon": "DatingSPCG_132301",
      "clue": "Visit the Cave to unlock",
      "secondChoice": "Keep exploring deeper."
    },
    {
      "name": "Borrowing Books",
      "icon": "DatingSPCG_132303",
      "clue": "Visit the Academy to unlock",
      "secondChoice": "Gonna look around inside the library."
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
      "Stellanite Enchantment",
      "Moonlit Companion",
      "Cosmic Form"
    ],
    "hates": [
      "Portable Blower",
      "Exquisite Blower",
      "Deluxe Blower"
    ]
  },
  "normalAttack": {
    "name": "Bat and Skate",
    "icon": "Icon/Skill/13201_Normal",
    "description": "Swings the baseball bat and kickflips the skateboard to attack the target.\u000bStrike 1: <color=#fb8037>&Param1& of ATK</color> as Lux DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Lux DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK</color> as Lux DMG.\u000bStrike 4: <color=#fb8037>&Param4& of ATK</color> and <color=#fb8037>&Param6& of ATK x6</color> as Lux DMG.\u000bStrike 5: <color=#fb8037>&Param5& of ATK</color> as Lux DMG.",
    "shortDescription": "Swings the baseball bat and kickflips the skateboard to attack the target.",
    "params": [
      "15.5%/17.8%/20.1%/27%/29.2%/31.4%/35.7%/37.5%/39.4%/43.1%/46.2%/49.3%/52.4%",
      "15.5%/17.8%/20.1%/27%/29.2%/31.4%/35.7%/37.5%/39.4%/43.1%/46.2%/49.3%/52.4%",
      "26%/30%/34%/45%/49%/53%/60%/63%/66%/72%/77%/82%/88%",
      "16.9%/19.5%/22%/29.6%/32%/34.4%/39.1%/41.1%/43.2%/47.2%/50.6%/54%/57.4%",
      "40%/46%/52%/71%/76%/82%/93%/98%/103%/112%/121%/129%/137%",
      "7.7%/8.9%/10%/13.5%/14.6%/15.7%/17.8%/18.8%/19.7%/21.5%/23.1%/24.6%/26.2%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Syou: Pulsar Streak",
    "icon": "Icon/Skill/13201_Skill_Main",
    "description": "Swings the baseball bat, dealing <color=#fb8037>&Param1& of ATK</color> as Lux DMG. Then, activates the second phase, Two Base Hit: Charges at the target, delivering rapid strikes. Hold to deal <color=#fb8037>&Param2& of ATK</color> as Lux DMG every 0.3s for a total of 3s. Finishes with a powerful smash, dealing <color=#fb8037>&Param3& of ATK</color> as Lux DMG.\u000bBoth Syou: Pulsar Streak (Main Skill) and Two Base Hit can trigger ##Lux Mark#1015#, dealing &Param4& of ATK as Lux Mark DMG.",
    "shortDescription": "Swings the baseball bat to attack the target, then activates Two Base Hit: Charges at the target for a rapid series of strikes.\u000bThe Main Skill can trigger ##Lux Mark#1015#.",
    "params": [
      "58%/66%/75%/101%/109%/117%/133%/140%/147%/161%/172%/184%/195%",
      "13.7%/15.8%/17.9%/24%/26%/27.9%/31.7%/33.4%/35%/38.3%/41.1%/43.8%/46.6%",
      "62%/72%/81%/109%/118%/126%/144%/151%/159%/174%/186%/199%/211%",
      "89%/115%/142%/168%/195%/221%/248%/275%/301%"
    ],
    "hints": {
      "1015": {
        "id": 1015,
        "name": "Lux Mark",
        "description": "The generic name for all Lux Marks.\u000bWhen triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated.",
        "params": []
      }
    },
    "cooldown": "14s"
  },
  "supportSkill": {
    "name": "Gi: Supernova Burst",
    "icon": "Icon/Skill/13201_Skill_Support",
    "description": "Radiates hyper concentrated starlight, dealing <color=#fb8037>&Param1& of ATK</color> as Lux DMG and inflicting 2 stacks of Astral Hex.\u000bEvery 3s, Astral Hex deals <color=#fb8037>&Param2& of ATK</color> as AoE Lux DMG and inflicts ##Lux Mark: Radiance#2016#.",
    "shortDescription": "Sprinkles Astral Hex on the targets and then deals DMG.\u000bThe Support Skill can inflict ##Lux Mark: Radiance#2016#.",
    "params": [
      "304%/349%/395%/532%/574%/617%/702%/738%/775%/847%/884%/920%/957%",
      "170%/195%/220%/297%/320%/344%/392%/412%/432%/473%/493%/514%/534%"
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
    "cooldown": "16s"
  },
  "ultimate": {
    "name": "Ketsu: Entropic Convergence",
    "icon": "Icon/Skill/13201_Ultra",
    "description": "Commands the Ashwind Clan members to attack the target, dealing <color=#fb8037>&Param1& of ATK</color> as AoE Lux DMG every 0.3s for a total of 5s.",
    "shortDescription": "Commands the Ashwind Clan members to attack the target.",
    "params": [
      "70%/80%/91%/122%/132%/142%/161%/170%/178%/195%/209%/223%/237%"
    ],
    "hints": {},
    "cooldown": "25s",
    "energy": 237
  },
  "talents": [
    {
      "name": "Starry Night",
      "talents": [
        {
          "name": "Starry Night",
          "description": "Whenever a target's ##Lux Mark#1015# is triggered, the target takes <color=#0abec5>&Param1&</color> more Lux DMG for &Param2&s.",
          "params": [
            "14%",
            "10"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Lux DMG Boost",
          "description": "Increases Lux DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Lux DMG Boost",
          "description": "Increases Lux DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Where Wind Starts",
      "talents": [
        {
          "name": "Where Wind Starts",
          "description": "When Minova casts her Ultimate, her ATK is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "25%",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Lux DMG Boost",
          "description": "Increases Lux DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Lux DMG Boost",
          "description": "Increases Lux DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Forsaken Memories",
      "talents": [
        {
          "name": "Forsaken Memories",
          "description": "Each time Minova deals Ultimate DMG to a target, increases the Aqua Lux DMG taken by the target by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "1.75%",
            "20",
            "10"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Lux DMG Boost",
          "description": "Increases Lux DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Lux DMG Boost",
          "description": "Increases Lux DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Imperishable Belief",
      "talents": [
        {
          "name": "Imperishable Belief",
          "description": "After any Trekker in the squad casts a skill, Minova's ATK is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "20%",
            "10"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Lux DMG Boost",
          "description": "Increases Lux DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Lux DMG Boost",
          "description": "Increases Lux DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Books, Skateboard and the Clan",
      "talents": [
        {
          "name": "Books, Skateboard and the Clan",
          "description": "Increases Minova's SKill DMG dealt to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
          "params": [
            "30%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Lux DMG Boost",
          "description": "Increases Lux DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Lux DMG Boost",
          "description": "Increases Lux DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "hp": 1273,
      "atk": 112
    },
    {
      "hp": 1660,
      "atk": 145
    },
    {
      "hp": 2043,
      "atk": 179
    },
    {
      "hp": 2426,
      "atk": 212
    },
    {
      "hp": 2809,
      "atk": 246
    },
    {
      "hp": 3192,
      "atk": 279
    },
    {
      "hp": 3575,
      "atk": 313
    },
    {
      "hp": 3958,
      "atk": 346
    },
    {
      "hp": 4341,
      "atk": 380
    },
    {
      "hp": 4724,
      "atk": 414
    },
    {
      "hp": 5669,
      "atk": 496
    },
    {
      "hp": 6052,
      "atk": 530
    },
    {
      "hp": 6435,
      "atk": 563
    },
    {
      "hp": 6818,
      "atk": 597
    },
    {
      "hp": 7201,
      "atk": 630
    },
    {
      "hp": 7584,
      "atk": 664
    },
    {
      "hp": 7967,
      "atk": 697
    },
    {
      "hp": 8350,
      "atk": 731
    },
    {
      "hp": 8733,
      "atk": 764
    },
    {
      "hp": 9116,
      "atk": 798
    },
    {
      "hp": 9499,
      "atk": 831
    },
    {
      "hp": 11401,
      "atk": 998
    },
    {
      "hp": 11784,
      "atk": 1032
    },
    {
      "hp": 12167,
      "atk": 1065
    },
    {
      "hp": 12550,
      "atk": 1099
    },
    {
      "hp": 12933,
      "atk": 1132
    },
    {
      "hp": 13316,
      "atk": 1166
    },
    {
      "hp": 13699,
      "atk": 1199
    },
    {
      "hp": 14082,
      "atk": 1233
    },
    {
      "hp": 14465,
      "atk": 1266
    },
    {
      "hp": 14848,
      "atk": 1300
    },
    {
      "hp": 15231,
      "atk": 1333
    },
    {
      "hp": 18282,
      "atk": 1600
    },
    {
      "hp": 18665,
      "atk": 1634
    },
    {
      "hp": 19048,
      "atk": 1667
    },
    {
      "hp": 19431,
      "atk": 1701
    },
    {
      "hp": 19814,
      "atk": 1735
    },
    {
      "hp": 20197,
      "atk": 1768
    },
    {
      "hp": 20580,
      "atk": 1802
    },
    {
      "hp": 20963,
      "atk": 1835
    },
    {
      "hp": 21346,
      "atk": 1869
    },
    {
      "hp": 21729,
      "atk": 1902
    },
    {
      "hp": 22112,
      "atk": 1936
    },
    {
      "hp": 26530,
      "atk": 2322
    },
    {
      "hp": 26913,
      "atk": 2356
    },
    {
      "hp": 27296,
      "atk": 2389
    },
    {
      "hp": 27679,
      "atk": 2423
    },
    {
      "hp": 28062,
      "atk": 2456
    },
    {
      "hp": 28445,
      "atk": 2490
    },
    {
      "hp": 28828,
      "atk": 2524
    },
    {
      "hp": 29211,
      "atk": 2557
    },
    {
      "hp": 29594,
      "atk": 2591
    },
    {
      "hp": 29977,
      "atk": 2624
    },
    {
      "hp": 30360,
      "atk": 2658
    },
    {
      "hp": 36437,
      "atk": 3190
    },
    {
      "hp": 36820,
      "atk": 3223
    },
    {
      "hp": 37203,
      "atk": 3257
    },
    {
      "hp": 37586,
      "atk": 3290
    },
    {
      "hp": 37969,
      "atk": 3324
    },
    {
      "hp": 38352,
      "atk": 3357
    },
    {
      "hp": 38735,
      "atk": 3391
    },
    {
      "hp": 39118,
      "atk": 3424
    },
    {
      "hp": 39501,
      "atk": 3458
    },
    {
      "hp": 39884,
      "atk": 3491
    },
    {
      "hp": 40267,
      "atk": 3525
    },
    {
      "hp": 48324,
      "atk": 4230
    },
    {
      "hp": 48707,
      "atk": 4264
    },
    {
      "hp": 49090,
      "atk": 4297
    },
    {
      "hp": 49473,
      "atk": 4331
    },
    {
      "hp": 49856,
      "atk": 4364
    },
    {
      "hp": 50239,
      "atk": 4398
    },
    {
      "hp": 50622,
      "atk": 4431
    },
    {
      "hp": 51005,
      "atk": 4465
    },
    {
      "hp": 51388,
      "atk": 4498
    },
    {
      "hp": 51771,
      "atk": 4532
    },
    {
      "hp": 52154,
      "atk": 4565
    },
    {
      "hp": 62584,
      "atk": 5478
    },
    {
      "hp": 62967,
      "atk": 5512
    },
    {
      "hp": 63350,
      "atk": 5546
    },
    {
      "hp": 63733,
      "atk": 5579
    },
    {
      "hp": 64116,
      "atk": 5613
    },
    {
      "hp": 64499,
      "atk": 5646
    },
    {
      "hp": 64882,
      "atk": 5680
    },
    {
      "hp": 65265,
      "atk": 5713
    },
    {
      "hp": 65648,
      "atk": 5747
    },
    {
      "hp": 66031,
      "atk": 5780
    },
    {
      "hp": 66414,
      "atk": 5814
    },
    {
      "hp": 79691,
      "atk": 6976
    },
    {
      "hp": 80074,
      "atk": 7010
    },
    {
      "hp": 80457,
      "atk": 7043
    },
    {
      "hp": 80840,
      "atk": 7077
    },
    {
      "hp": 81223,
      "atk": 7110
    },
    {
      "hp": 81606,
      "atk": 7144
    },
    {
      "hp": 81989,
      "atk": 7177
    },
    {
      "hp": 82373,
      "atk": 7211
    },
    {
      "hp": 82756,
      "atk": 7244
    },
    {
      "hp": 83139,
      "atk": 7278
    },
    {
      "hp": 83522,
      "atk": 7311
    },
    {
      "hp": 83522,
      "atk": 7311
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
          "id": 32021,
          "name": "Kung Fu Game Cartridge",
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
          "id": 32021,
          "name": "Kung Fu Game Cartridge",
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
          "id": 32021,
          "name": "Kung Fu Game Cartridge",
          "quantity": 24
        },
        {
          "id": 32022,
          "name": "Fighting Game Cartridge",
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
          "id": 32021,
          "name": "Kung Fu Game Cartridge",
          "quantity": 38
        },
        {
          "id": 32022,
          "name": "Fighting Game Cartridge",
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
          "id": 32021,
          "name": "Kung Fu Game Cartridge",
          "quantity": 70
        },
        {
          "id": 32022,
          "name": "Fighting Game Cartridge",
          "quantity": 14
        },
        {
          "id": 32023,
          "name": "Phantom Game Cartridge",
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
          "id": 32022,
          "name": "Fighting Game Cartridge",
          "quantity": 50
        },
        {
          "id": 32023,
          "name": "Phantom Game Cartridge",
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
          "id": 32022,
          "name": "Fighting Game Cartridge",
          "quantity": 90
        },
        {
          "id": 32023,
          "name": "Phantom Game Cartridge",
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
          "id": 32022,
          "name": "Fighting Game Cartridge",
          "quantity": 140
        },
        {
          "id": 32023,
          "name": "Phantom Game Cartridge",
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
          "id": 32022,
          "name": "Fighting Game Cartridge",
          "quantity": 200
        },
        {
          "id": 32023,
          "name": "Phantom Game Cartridge",
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