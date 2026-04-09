export const Nazuka = {
  "id": 133,
  "name": "Nazuka",
  "icon": "/stella/assets/Nazuka.png",
  "portrait": "/stella/assets/Nazuka_portrait.png",
  "background": "/stella/assets/Nazuka_background.png",
  "variants": {
    "base": "/stella/assets/Nazuka_base.png",
    "q": "/stella/assets/Nazuka_q.png",
    "gd": "/stella/assets/Nazuka_gd.png",
    "goods": "/stella/assets/Nazuka_goods.png",
    "qs": "/stella/assets/Nazuka_qs.png",
    "xl": "/stella/assets/Nazuka_xl.png",
    "gc": "/stella/assets/Nazuka_gc.png",
    "sk": "/stella/assets/Nazuka_portrait.png",
    "xxl": "/stella/assets/Nazuka.png",
    "qm": "/stella/assets/Nazuka_qm.png",
    "l": "/stella/assets/Nazuka_l.png",
    "s": "/stella/assets/Nazuka_s.png"
  },
  "description": "A powerful trekker who wields Ventus magic, her exceptional judgment is an innate gift that makes her a natural leader.",
  "voiceActor": {
    "cn": "Liu Fourteen",
    "cnLocalized": "刘十四",
    "jp": "Shizuka Ito",
    "jpLocalized": "伊藤静"
  },
  "birthday": "1.1",
  "grade": 5,
  "element": "Ventus",
  "position": "Versatile",
  "attackType": "Ranged",
  "style": "Steady",
  "faction": "Petal Bloom",
  "tags": [
    "Versatile",
    "Steady",
    "Petal Bloom"
  ],
  "dateEvents": [
    {
      "name": "False Alarm",
      "icon": "DatingSPCG_133301",
      "clue": "Visit the Market to unlock",
      "secondChoice": "What's that? Looks suspicious."
    },
    {
      "name": "Ever-Turning Waterwheel",
      "icon": "DatingSPCG_133302",
      "clue": "Visit the Port to unlock",
      "secondChoice": "Take a small boat out for some coastal sightseeing."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Whisper Wind Spinner",
      "Chilling Wind Spinner",
      "Blazing Wind Spinner",
      "Gilded Ceramic Bowl",
      "Blossom Porcelain Cup",
      "Mystic Potion Kettle",
      "Summer Chill Crushed Ice",
      "Fragrant Ice Delight",
      "Sweet IceFurry"
    ],
    "hates": [
      "Card Photo Capturer",
      "Reflective Photo Capturer",
      "Ultra-Precision Photo Capturer"
    ]
  },
  "normalAttack": {
    "name": "Wind Pellets",
    "icon": "Icon/Skill/13301_Normal",
    "description": "Fires consecutive wind bullets.\u000bStrike 1: <color=#ec6d21>&Param1& of ATK</color> as Ventus DMG.\u000bStrike 2: <color=#ec6d21>&Param2& of ATK</color> as Ventus DMG.\u000bStrike 3: <color=#ec6d21>&Param3& of ATK x3</color> as Ventus DMG.",
    "shortDescription": "Fires consecutive wind bullets to deal DMG.",
    "params": [
      "28%/32%/36%/49%/53%/57%/65%/68%/72%/78%/84%/90%/95%",
      "31%/36%/41%/55%/59%/64%/73%/76%/80%/88%/94%/100%/107%",
      "18.7%/21.5%/24.3%/32.8%/35.4%/38%/43.2%/45.5%/47.7%/52.2%/56%/59.7%/63.4%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Blooming Draught",
    "icon": "Icon/Skill/13301_Skill_Main",
    "description": "The windmill blows ahead, dealing <color=#ec6d21>&Param1& of ATK x7</color> as Ventus Skill DMG.\u000bBlooming Draught (Main Skill) can trigger ##Ventus Mark#1017#, dealing &Param2& of ATK as AoE Ventus Mark DMG.",
    "shortDescription": "The windmill blows ahead to deal DMG.\u000bThe Main Skill can trigger ##Ventus Mark#1017#.",
    "params": [
      "11.8%/13.5%/15.3%/20.6%/22.2%/23.9%/27.2%/28.6%/30%/32.8%/35.2%/37.5%/39.9%",
      "20.5%/26.6%/32.7%/38.8%/44.9%/51%/57.1%/63.2%/69.3%"
    ],
    "hints": {
      "1017": {
        "id": 1017,
        "name": "Ventus Mark",
        "description": "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated.",
        "params": []
      }
    },
    "cooldown": "8s"
  },
  "supportSkill": {
    "name": "Bouquet Blast",
    "icon": "Icon/Skill/13301_Skill_Support",
    "description": "Fires a flower bouquet, dealing <color=#ec6d21>&Param1& of ATK</color> as Ventus Skill DMG. The flower bouquet then blasts, generating a Flower Formation and shoots 6 Flower Petals.\u000bFlower Formation: Reduces the Movement SPD of targets within its range by 25%. Deals <color=#ec6d21>&Param3& of ATK</color> as Ventus Skill DMG per second for 6s.\u000bFlower Petals: Deals <color=#ec6d21>&Param2& of ATK</color> as Ventus Skill DMG.\u000bBouquet Blast (Support Skill) can inflict ##Ventus Mark: Breeze#2017#.",
    "shortDescription": "Fires a flower bouquet that deals DMG. The flower bouquet then blasts, generating a Flower Formation and shoots several Flower Petals.\u000bThe Support Skill can inflict ##Ventus Mark: Breeze#2017#.",
    "params": [
      "196%/225%/255%/343%/370%/398%/453%/476%/500%/547%/586%/625%/664%",
      "108%/124%/140%/189%/204%/219%/249%/262%/275%/301%/322%/344%/365%",
      "196%/225%/254%/342%/370%/397%/452%/475%/499%/545%/585%/624%/663%"
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
    "name": "Aromatic Tempest",
    "icon": "Icon/Skill/13301_Ultra",
    "description": "Holds up the staff and chants for a while, creating 3 tornados every 3s, each time dealing <color=#ec6d21>&Param1& of ATK</color> as Ventus Ultimate DMG.",
    "shortDescription": "Holds up the staff and chants for a while, creating several tornadoes consecutively to deal DMG.",
    "params": [
      "138%/159%/180%/242%/261%/281%/320%/336%/353%/386%/414%/441%/469%"
    ],
    "hints": {},
    "cooldown": "30s",
    "energy": 275
  },
  "talents": [
    {
      "name": "In the Name of Trekkers",
      "talents": [
        {
          "name": "In the Name of Trekkers",
          "description": "When tornadoes generated by Nazuka's Ultimate are on the field, all squadmates' Skill DMG is increased by <color=#0abec5>&Param1&</color>.",
          "params": [
            "45%"
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "In the Name of Wisdom",
      "talents": [
        {
          "name": "In the Name of Wisdom",
          "description": "Nazuka gains ##Wind Chant#4003# every time she deals Skill DMG. Upon meeting certain conditions, Wind Chant turns into Wind Roar: Increases her Ventus DMG by <color=#0abec5>&Param1&</color> for &Param2&s. This effect can only be triggered once every &Param3&s.",
          "params": [
            "20%",
            "12",
            "12",
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "In the Name of Responsibility",
      "talents": [
        {
          "name": "In the Name of Responsibility",
          "description": "Every time Nazuka deals Skill DMG to a target, the Ventus DMG dealt to that target is increased by <color=#0abec5>&Param1&</color> for 6s, stacking up to &Param2& times.",
          "params": [
            "1.4%",
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "The Burden of a Role Model",
      "talents": [
        {
          "name": "The Burden of a Role Model",
          "description": "When any Trekker in the squad triggers a ##Ventus Mark#1017#, increases Nazuka's Skill DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "28%",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
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
          "name": "Ventus DMG Boost",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "The Resolve of Companions",
      "talents": [
        {
          "name": "The Resolve of Companions",
          "description": "Increases Nazuka's Ventus DMG dealt to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
          "params": [
            "24%"
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
      "atk": 149
    },
    {
      "hp": 1252,
      "atk": 183
    },
    {
      "hp": 1486,
      "atk": 217
    },
    {
      "hp": 1721,
      "atk": 252
    },
    {
      "hp": 1956,
      "atk": 286
    },
    {
      "hp": 2190,
      "atk": 320
    },
    {
      "hp": 2425,
      "atk": 355
    },
    {
      "hp": 2660,
      "atk": 389
    },
    {
      "hp": 2895,
      "atk": 423
    },
    {
      "hp": 3474,
      "atk": 508
    },
    {
      "hp": 3708,
      "atk": 542
    },
    {
      "hp": 3943,
      "atk": 577
    },
    {
      "hp": 4178,
      "atk": 611
    },
    {
      "hp": 4412,
      "atk": 645
    },
    {
      "hp": 4647,
      "atk": 680
    },
    {
      "hp": 4882,
      "atk": 714
    },
    {
      "hp": 5116,
      "atk": 748
    },
    {
      "hp": 5351,
      "atk": 782
    },
    {
      "hp": 5586,
      "atk": 817
    },
    {
      "hp": 5820,
      "atk": 851
    },
    {
      "hp": 6986,
      "atk": 1022
    },
    {
      "hp": 7221,
      "atk": 1056
    },
    {
      "hp": 7456,
      "atk": 1090
    },
    {
      "hp": 7690,
      "atk": 1125
    },
    {
      "hp": 7925,
      "atk": 1159
    },
    {
      "hp": 8160,
      "atk": 1193
    },
    {
      "hp": 8394,
      "atk": 1228
    },
    {
      "hp": 8629,
      "atk": 1262
    },
    {
      "hp": 8864,
      "atk": 1296
    },
    {
      "hp": 9098,
      "atk": 1330
    },
    {
      "hp": 9333,
      "atk": 1365
    },
    {
      "hp": 11203,
      "atk": 1638
    },
    {
      "hp": 11438,
      "atk": 1673
    },
    {
      "hp": 11672,
      "atk": 1707
    },
    {
      "hp": 11907,
      "atk": 1741
    },
    {
      "hp": 12142,
      "atk": 1775
    },
    {
      "hp": 12376,
      "atk": 1810
    },
    {
      "hp": 12611,
      "atk": 1844
    },
    {
      "hp": 12846,
      "atk": 1878
    },
    {
      "hp": 13080,
      "atk": 1913
    },
    {
      "hp": 13315,
      "atk": 1947
    },
    {
      "hp": 13550,
      "atk": 1981
    },
    {
      "hp": 16257,
      "atk": 2377
    },
    {
      "hp": 16491,
      "atk": 2412
    },
    {
      "hp": 16726,
      "atk": 2446
    },
    {
      "hp": 16961,
      "atk": 2480
    },
    {
      "hp": 17195,
      "atk": 2515
    },
    {
      "hp": 17430,
      "atk": 2549
    },
    {
      "hp": 17665,
      "atk": 2583
    },
    {
      "hp": 17899,
      "atk": 2617
    },
    {
      "hp": 18134,
      "atk": 2652
    },
    {
      "hp": 18369,
      "atk": 2686
    },
    {
      "hp": 18604,
      "atk": 2720
    },
    {
      "hp": 22327,
      "atk": 3265
    },
    {
      "hp": 22562,
      "atk": 3299
    },
    {
      "hp": 22797,
      "atk": 3334
    },
    {
      "hp": 23032,
      "atk": 3368
    },
    {
      "hp": 23266,
      "atk": 3402
    },
    {
      "hp": 23501,
      "atk": 3437
    },
    {
      "hp": 23736,
      "atk": 3471
    },
    {
      "hp": 23970,
      "atk": 3505
    },
    {
      "hp": 24205,
      "atk": 3540
    },
    {
      "hp": 24440,
      "atk": 3574
    },
    {
      "hp": 24674,
      "atk": 3608
    },
    {
      "hp": 29611,
      "atk": 4330
    },
    {
      "hp": 29846,
      "atk": 4364
    },
    {
      "hp": 30080,
      "atk": 4399
    },
    {
      "hp": 30315,
      "atk": 4433
    },
    {
      "hp": 30550,
      "atk": 4467
    },
    {
      "hp": 30784,
      "atk": 4502
    },
    {
      "hp": 31019,
      "atk": 4536
    },
    {
      "hp": 31254,
      "atk": 4570
    },
    {
      "hp": 31488,
      "atk": 4605
    },
    {
      "hp": 31723,
      "atk": 4639
    },
    {
      "hp": 31958,
      "atk": 4673
    },
    {
      "hp": 38349,
      "atk": 5608
    },
    {
      "hp": 38584,
      "atk": 5642
    },
    {
      "hp": 38819,
      "atk": 5677
    },
    {
      "hp": 39053,
      "atk": 5711
    },
    {
      "hp": 39288,
      "atk": 5745
    },
    {
      "hp": 39523,
      "atk": 5779
    },
    {
      "hp": 39758,
      "atk": 5814
    },
    {
      "hp": 39992,
      "atk": 5848
    },
    {
      "hp": 40227,
      "atk": 5882
    },
    {
      "hp": 40462,
      "atk": 5917
    },
    {
      "hp": 40696,
      "atk": 5951
    },
    {
      "hp": 48832,
      "atk": 7141
    },
    {
      "hp": 49067,
      "atk": 7175
    },
    {
      "hp": 49302,
      "atk": 7209
    },
    {
      "hp": 49537,
      "atk": 7244
    },
    {
      "hp": 49771,
      "atk": 7278
    },
    {
      "hp": 50006,
      "atk": 7312
    },
    {
      "hp": 50241,
      "atk": 7347
    },
    {
      "hp": 50475,
      "atk": 7381
    },
    {
      "hp": 50710,
      "atk": 7415
    },
    {
      "hp": 50945,
      "atk": 7450
    },
    {
      "hp": 51179,
      "atk": 7484
    },
    {
      "hp": 51179,
      "atk": 7484
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