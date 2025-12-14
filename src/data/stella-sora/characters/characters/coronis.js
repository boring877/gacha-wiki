export const Coronis = {
  "id": 118,
  "name": "Coronis",
  "icon": "/stella/assets/Coronis.png",
  "portrait": "/stella/assets/Coronis_portrait.png",
  "background": "/stella/assets/Coronis_background.png",
  "variants": {
    "base": "/stella/assets/Coronis_base.png",
    "q": "/stella/assets/Coronis_q.png",
    "gd": "/stella/assets/Coronis_gd.png",
    "goods": "/stella/assets/Coronis_goods.png",
    "qs": "/stella/assets/Coronis_qs.png",
    "xl": "/stella/assets/Coronis_xl.png",
    "gc": "/stella/assets/Coronis_gc.png",
    "sk": "/stella/assets/Coronis_portrait.png",
    "xxl": "/stella/assets/Coronis.png",
    "qm": "/stella/assets/Coronis_qm.png",
    "l": "/stella/assets/Coronis_l.png",
    "s": "/stella/assets/Coronis_s.png"
  },
  "description": "A doctor obsessed with researching strange malady. She wields a scythe, dispenses deadly poisons, and moves through the battlefield with grace.",
  "voiceActor": {
    "cn": "Zhou Yuhan",
    "cnLocalized": "周语晗",
    "jp": "Yuka Saito",
    "jpLocalized": "斉藤佑圭"
  },
  "birthday": "10.15",
  "grade": 4,
  "element": "Umbra",
  "position": "Versatile",
  "attackType": "Melee",
  "style": "Adventurous",
  "faction": "Freelance Trekker",
  "tags": [
    "Versatile",
    "Adventurous",
    "Freelance Trekker"
  ],
  "dateEvents": [
    {
      "name": "Freshly Unearthed",
      "icon": "DatingSPCG_118301",
      "clue": "Visit the Cave to unlock",
      "secondChoice": "Keep exploring deeper."
    },
    {
      "name": "Burning Gaze",
      "icon": "DatingSPCG_118303",
      "clue": "Visit the Academy to unlock",
      "secondChoice": "Gonna look around inside the library."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Card Photo Capturer",
      "Reflective Photo Capturer",
      "Ultra-Precision Photo Capturer",
      "Whisper Wind Spinner",
      "Chilling Wind Spinner",
      "Blazing Wind Spinner"
    ],
    "hates": []
  },
  "normalAttack": {
    "name": "Midnight Cleave",
    "icon": "Icon/Skill/11801_Normal",
    "description": "Wields the scythe to attack targets.\u000bStrike 1: <color=#ec6d21>&Param1& of ATK</color> as Umbra DMG.\u000bStrike 2: <color=#ec6d21>&Param2& of ATK</color> as Umbra DMG.\u000bStrike 3: <color=#ec6d21>&Param3& of ATK</color> as Umbra DMG.\u000bStrike 4: <color=#ec6d21>&Param4& of ATK</color> as Umbra DMG.",
    "shortDescription": "Wields the scythe to attack targets.",
    "params": [
      "12.8%/14.1%/15.4%/19.2%/20.5%/21.8%/24.4%/25.6%/26.9%/29.5%/30.8%/32%/33.3%",
      "12.8%/14.1%/15.4%/19.2%/20.5%/21.8%/24.4%/25.6%/26.9%/29.5%/30.8%/32%/33.3%",
      "12.8%/14.1%/15.4%/19.2%/20.5%/21.8%/24.4%/25.6%/26.9%/29.5%/30.8%/32%/33.3%",
      "38%/42%/46%/58%/61%/65%/73%/77%/81%/88%/92%/96%/100%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Sleight of Scythe",
    "icon": "Icon/Skill/11801_Skill_Main",
    "description": "After multiple slices, delivers a powerful smash to the target, dealing <color=#ec6d21>&Param1& of ATK x5</color>/<color=#ec6d21>&Param2& of ATK</color> as AoE Umbra DMG.\u000bSleight of Scythe (Main Skill) can trigger ##Umbra Mark: Gloom#2018#, dealing &Param3& of ATK as Umbra Mark DMG and inflicting ##Dark Shackles#2020#, lasting for &Param4&s.",
    "shortDescription": "After multiple slices, delivers a powerful smash to the target. The Main Skill can trigger ##Umbra Mark: Gloom#2018#.",
    "params": [
      "19.3%/21.3%/23.2%/29%/30.9%/32.9%/36.7%/38.7%/40.6%/44.5%/46.4%/48.3%/50.3%",
      "41%/46%/50%/62%/66%/70%/79%/83%/87%/95%/99%/104%/108%",
      "39%/47%/55%/62%/70%/78%/86%/94%/101%",
      "5"
    ],
    "hints": {
      "2018": {
        "id": 2018,
        "name": "Umbra Mark: Gloom",
        "description": "A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.",
        "params": []
      },
      "2020": {
        "id": 2020,
        "name": "Dark Shackles",
        "description": "After some Umbra Trekkers trigger Umbra Mark, deal damage and trigger Dark Shackles, binding weaker enemies in place.",
        "params": []
      }
    },
    "cooldown": "12s"
  },
  "supportSkill": {
    "name": "Bone Chain",
    "icon": "Icon/Skill/11801_Skill_Support",
    "description": "Delivers a horizontal slash, dealing <color=#ec6d21>&Param1& of ATK</color> as AoE Umbra DMG. Then breaks the chains to pull all connected targets, dealing <color=#ec6d21>&Param2& of ATK</color> as Umbra DMG.\u000bBone Chain (Support Skill) can inflict ##Umbra Mark: Gloom#2018#.",
    "shortDescription": "Delivers a horizontal slash, and breaks the chains to pull all connected targets. The Support Skill can inflict ##Umbra Mark: Gloom#2018#.",
    "params": [
      "300%/331%/361%/451%/481%/511%/571%/601%/631%/691%/721%/751%/781%",
      "128%/141%/154%/193%/205%/218%/244%/257%/269%/295%/308%/321%/334%"
    ],
    "hints": {
      "2018": {
        "id": 2018,
        "name": "Umbra Mark: Gloom",
        "description": "A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.",
        "params": []
      }
    },
    "cooldown": "12s"
  },
  "ultimate": {
    "name": "Void Reaper",
    "icon": "Icon/Skill/11801_Ultra",
    "description": "Creates a dark storm of despair that constantly pulls enemies in, dealing <color=#ec6d21>&Param1& of ATK x8</color> as Umbra DMG in a large area. Ends with a powerful horizontal slash, dealing <color=#ec6d21>&Param2& of ATK</color> as Umbra DMG in a large area.",
    "shortDescription": "Pulls enemies in constantly, dealing multiple instances of damage in a large area.",
    "params": [
      "114%/125%/136%/171%/182%/193%/216%/227%/239%/262%/273%/284%/296%",
      "366%/403%/439%/549%/586%/623%/696%/732%/769%/842%/879%/916%/952%"
    ],
    "hints": {},
    "cooldown": "30s",
    "energy": 285
  },
  "talents": [
    {
      "name": "Severing Edge",
      "talents": [
        {
          "name": "Severing Edge",
          "description": "When ##Umbra Mark#1019# is triggered, increases the squad's ATK by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "8.4%",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    },
    {
      "name": "Hostile Amplification",
      "talents": [
        {
          "name": "Hostile Amplification",
          "description": "Increases Coronis's Skill DMG by <color=#0abec5>&Param1&</color>. If only 1 target is hit, increases the DMG bonus by <color=#0abec5>&Param2&</color> instead.",
          "params": [
            "12%",
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
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    },
    {
      "name": "Stitch and Fix",
      "talents": [
        {
          "name": "Stitch and Fix",
          "description": "When Coronis casts an Ultimate, the squad's ATK is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "10%",
            "25"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    },
    {
      "name": "Beautification and Fix",
      "talents": [
        {
          "name": "Beautification and Fix",
          "description": "When ##Umbra Mark#1019# is triggered, increases Coronis's Skill DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "16.8%",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    },
    {
      "name": "Specimen Exhibition",
      "talents": [
        {
          "name": "Specimen Exhibition",
          "description": "Increases Coronis's Ultimate DMG dealt to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
          "params": [
            "34%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "hp": 1120,
      "atk": 98
    },
    {
      "hp": 1460,
      "atk": 128
    },
    {
      "hp": 1797,
      "atk": 157
    },
    {
      "hp": 2134,
      "atk": 187
    },
    {
      "hp": 2471,
      "atk": 216
    },
    {
      "hp": 2808,
      "atk": 246
    },
    {
      "hp": 3145,
      "atk": 276
    },
    {
      "hp": 3482,
      "atk": 305
    },
    {
      "hp": 3819,
      "atk": 335
    },
    {
      "hp": 4156,
      "atk": 364
    },
    {
      "hp": 4987,
      "atk": 437
    },
    {
      "hp": 5324,
      "atk": 466
    },
    {
      "hp": 5661,
      "atk": 496
    },
    {
      "hp": 5998,
      "atk": 525
    },
    {
      "hp": 6335,
      "atk": 555
    },
    {
      "hp": 6672,
      "atk": 584
    },
    {
      "hp": 7009,
      "atk": 614
    },
    {
      "hp": 7346,
      "atk": 644
    },
    {
      "hp": 7683,
      "atk": 673
    },
    {
      "hp": 8020,
      "atk": 703
    },
    {
      "hp": 8357,
      "atk": 732
    },
    {
      "hp": 10030,
      "atk": 879
    },
    {
      "hp": 10367,
      "atk": 908
    },
    {
      "hp": 10704,
      "atk": 938
    },
    {
      "hp": 11041,
      "atk": 967
    },
    {
      "hp": 11378,
      "atk": 997
    },
    {
      "hp": 11715,
      "atk": 1026
    },
    {
      "hp": 12052,
      "atk": 1056
    },
    {
      "hp": 12389,
      "atk": 1085
    },
    {
      "hp": 12726,
      "atk": 1115
    },
    {
      "hp": 13063,
      "atk": 1144
    },
    {
      "hp": 13400,
      "atk": 1174
    },
    {
      "hp": 16084,
      "atk": 1409
    },
    {
      "hp": 16421,
      "atk": 1439
    },
    {
      "hp": 16758,
      "atk": 1468
    },
    {
      "hp": 17095,
      "atk": 1498
    },
    {
      "hp": 17432,
      "atk": 1527
    },
    {
      "hp": 17769,
      "atk": 1557
    },
    {
      "hp": 18106,
      "atk": 1586
    },
    {
      "hp": 18443,
      "atk": 1616
    },
    {
      "hp": 18780,
      "atk": 1645
    },
    {
      "hp": 19116,
      "atk": 1675
    },
    {
      "hp": 19453,
      "atk": 1704
    },
    {
      "hp": 23340,
      "atk": 2045
    },
    {
      "hp": 23677,
      "atk": 2074
    },
    {
      "hp": 24014,
      "atk": 2104
    },
    {
      "hp": 24351,
      "atk": 2133
    },
    {
      "hp": 24688,
      "atk": 2163
    },
    {
      "hp": 25025,
      "atk": 2192
    },
    {
      "hp": 25362,
      "atk": 2222
    },
    {
      "hp": 25699,
      "atk": 2251
    },
    {
      "hp": 26036,
      "atk": 2281
    },
    {
      "hp": 26373,
      "atk": 2310
    },
    {
      "hp": 26710,
      "atk": 2340
    },
    {
      "hp": 32056,
      "atk": 2808
    },
    {
      "hp": 32393,
      "atk": 2838
    },
    {
      "hp": 32730,
      "atk": 2867
    },
    {
      "hp": 33067,
      "atk": 2897
    },
    {
      "hp": 33404,
      "atk": 2926
    },
    {
      "hp": 33741,
      "atk": 2956
    },
    {
      "hp": 34078,
      "atk": 2985
    },
    {
      "hp": 34415,
      "atk": 3015
    },
    {
      "hp": 34752,
      "atk": 3044
    },
    {
      "hp": 35089,
      "atk": 3074
    },
    {
      "hp": 35426,
      "atk": 3104
    },
    {
      "hp": 42514,
      "atk": 3724
    },
    {
      "hp": 42851,
      "atk": 3754
    },
    {
      "hp": 43188,
      "atk": 3783
    },
    {
      "hp": 43524,
      "atk": 3813
    },
    {
      "hp": 43861,
      "atk": 3843
    },
    {
      "hp": 44198,
      "atk": 3872
    },
    {
      "hp": 44535,
      "atk": 3902
    },
    {
      "hp": 44872,
      "atk": 3931
    },
    {
      "hp": 45209,
      "atk": 3961
    },
    {
      "hp": 45546,
      "atk": 3990
    },
    {
      "hp": 45883,
      "atk": 4020
    },
    {
      "hp": 55059,
      "atk": 4824
    },
    {
      "hp": 55396,
      "atk": 4853
    },
    {
      "hp": 55733,
      "atk": 4883
    },
    {
      "hp": 56070,
      "atk": 4912
    },
    {
      "hp": 56407,
      "atk": 4942
    },
    {
      "hp": 56744,
      "atk": 4971
    },
    {
      "hp": 57081,
      "atk": 5001
    },
    {
      "hp": 57418,
      "atk": 5030
    },
    {
      "hp": 57755,
      "atk": 5060
    },
    {
      "hp": 58092,
      "atk": 5089
    },
    {
      "hp": 58428,
      "atk": 5119
    },
    {
      "hp": 70110,
      "atk": 6142
    },
    {
      "hp": 70447,
      "atk": 6172
    },
    {
      "hp": 70784,
      "atk": 6201
    },
    {
      "hp": 71121,
      "atk": 6231
    },
    {
      "hp": 71458,
      "atk": 6260
    },
    {
      "hp": 71795,
      "atk": 6290
    },
    {
      "hp": 72132,
      "atk": 6319
    },
    {
      "hp": 72468,
      "atk": 6349
    },
    {
      "hp": 72805,
      "atk": 6378
    },
    {
      "hp": 73142,
      "atk": 6408
    },
    {
      "hp": 73479,
      "atk": 6437
    },
    {
      "hp": 73479,
      "atk": 6437
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
          "id": 21013,
          "name": "Evil Bloom Essence",
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
          "id": 21013,
          "name": "Evil Bloom Essence",
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
          "id": 21013,
          "name": "Evil Bloom Essence",
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
          "id": 21013,
          "name": "Evil Bloom Essence",
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