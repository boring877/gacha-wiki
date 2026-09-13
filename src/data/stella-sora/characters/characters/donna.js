// Donna Character Data - Stella Sora
// Generated from live game tables (Sep 8 2026 patch, v1.15.0)

export const Donna = {
  "id": 130,
  "name": "Donna",
  "icon": "/stella/assets/Donna.png",
  "portrait": "/stella/assets/Donna_portrait.png",
  "background": "/stella/assets/Donna_background.png",
  "description": "Donna, brimming with energy and optimism, is the heart and leader of Post Haste. Her arrows make short work of anything standing in the mail's way.",
  "voiceActor": {
    "cn": "Su Wan",
    "jp": "Kana Asumi"
  },
  "birthday": "10.9",
  "grade": 5,
  "element": "Aqua",
  "position": "Versatile",
  "attackType": "Ranged",
  "style": "Creative",
  "faction": "Post Haste",
  "tags": [
    "Versatile",
    "Creative",
    "Post Haste"
  ],
  "dateEvents": [
    {
      "name": "The Teddy Bear",
      "icon": "DatingSPCG_130301",
      "clue": "Visit the Market to unlock",
      "secondChoice": "Something strange happened. No matter how many times Donna's arrows hit the teddy bear, it remained firmly seated on the wooden board. You began to suspect something was wrong.\n\n\"Is that bear ... fixed to the board?\"\n\n\"So this is just a scam?!\"\n\nThe stall owner's eyes darted away, but he still insisted that Donna had only failed because her archery wasn't good enough."
    },
    {
      "name": "Old Letters",
      "icon": "DatingSPCG_130302",
      "clue": "Visit the Academy to unlock",
      "secondChoice": "\"This one, and this one.\" She picks up two letters from the top. \"I delivered these.\"\n\nShe flips further down—the postmarks show they're years old. \"Their recipients must have graduated by now.\""
    }
  ],
  "giftPreferences": {
    "loves": [
      "Blazing Wind Spinner",
      "Chilling Wind Spinner",
      "Deluxe Blower",
      "Exquisite Blower",
      "Fragrant Ice Delight",
      "Portable Blower",
      "Summer Chill Crushed Ice",
      "Sweet IceFurry",
      "Whisper Wind Spinner"
    ],
    "hates": [
      "Emerging Talent",
      "Rising Star",
      "Shining Star"
    ]
  },
  "normalAttack": {
    "name": "Piercing Shot",
    "icon": "Icon/Skill/13001_Normal",
    "description": "Fires an ice arrow in a stationary stance, piercing through the target, dealing <color=#fb8037>&Param1&</color> of ATK as Aqua Auto Attack DMG. Moving will immediately interrupt shooting.\u000bWhen Donna is in ##Agile#2015# State, her Auto Attack deals <color=#fb8037>&Param2&</color> of ATK as Aqua Auto Attack DMG.",
    "shortDescription": "Fires an ice arrow in a stationary stance, piercing through the target and dealing DMG. Moving will immediately interrupt shooting.",
    "params": [
      "15%/18%/20%/27%/29%/31%/36%/38%/39%/43%/46%/49%/53%",
      "18%/21%/23%/32%/34%/37%/42%/44%/46%/51%/54%/58%/62%"
    ],
    "hints": {
      "2015": {
        "id": 2015,
        "name": "Agile"
      }
    }
  },
  "skill": {
    "name": "Rain Call: Volley Chase",
    "icon": "Icon/Skill/13001_Skill_Main",
    "description": "Summons a ##Advertising Doll#4017# near the target. When the Doll is on the battlefield, Donna enters ##Agile#2015# state.\u000bThe doll deals <color=#fb8037>&Param1&</color> of ATK as AoE Aqua Minion DMG every 4s and taunts the target.\u000bThe ##Advertising Doll#4017# and Donna's Auto Attack in ##Agile#2015# state can trigger ##Aqua Mark#1018#, dealing &Param4& of ATK as AoE Aqua Mark DMG and inflicting ##Chill#1027#.",
    "shortDescription": "Summons a ##Advertising Doll#4017# that deals DMG over time and taunts the target.\u000bWhen the doll is on the battlefield, Donna enters ##Agile#2015# state, with her Auto Attacks enhanced and can trigger ##Aqua Mark: Torrent#1018# and inflict ##Chill#1027#.",
    "params": [
      "125%/143%/162%/218%/235%/253%/288%/303%/318%/348%/372%/397%/422%",
      "18%/21%/23%/32%/34%/37%/42%/44%/46%/51%/54%/58%/62%",
      "18%/21%/23%/32%/34%/37%/42%/44%/46%/51%/54%/58%/62%",
      "22%/29%/35%/42%/49%/56%/62%/69%/76%"
    ],
    "hints": {
      "4017": {
        "id": 4017,
        "name": "Advertising Doll",
        "description": "Advertising Doll inherits 100% of Donna's Base Max HP and 100% of her ATK for 12s."
      },
      "2015": {
        "id": 2015,
        "name": "Agile"
      },
      "1018": {
        "id": 1018,
        "name": "Aqua Mark",
        "description": "The generic name for all Aqua Marks.\u000bWhen triggered by specific Aqua Trekkers' attacks, the status is removed, and a special effect is activated."
      },
      "1027": {
        "id": 1027,
        "name": "Chill"
      }
    },
    "cooldown": "24s"
  },
  "supportSkill": {
    "name": "Tide Threader",
    "icon": "Icon/Skill/13001_Skill_Support",
    "description": "Fires 9 Snow-Piercing Arrows, dealing <color=#fb8037>&Param1&</color> of ATK, <color=#fb8037>&Param2& x2</color> of ATK, <color=#fb8037>&Param3& x3</color> of ATK, <color=#fb8037>&Param4& x2</color> of ATK, and <color=#fb8037>&Param5&</color> of ATK as Aqua Skill DMG respectively.\u000bThe path of the final arrow generates Frost Wave, dealing <color=#fb8037>&Param6&</color> of ATK as Aqua Skill DMG.\u000bWhen Tide Threader deals DMG, inflicts ##Aqua Mark: Torrent#2008#.",
    "shortDescription": "Keeps shooting Snow-Piercing Arrows and generates Frost Wave to deal DMG to enemies along the path.\u000bThe Support Skill can inflict ##Aqua Mark: Torrent#2008#.",
    "params": [
      "220%/253%/287%/386%/417%/447%/509%/536%/562%/615%/659%/703%/747%",
      "110%/127%/143%/193%/208%/224%/255%/268%/281%/307%/330%/352%/374%",
      "147%/169%/191%/257%/278%/298%/339%/357%/375%/410%/439%/469%/498%",
      "165%/190%/215%/289%/312%/336%/382%/402%/422%/461%/494%/527%/560%",
      "331%/380%/430%/579%/625%/671%/764%/803%/843%/923%/989%/1055%/1121%",
      "437%/502%/567%/764%/825%/886%/1008%/1061%/1113%/1218%/1305%/1393%/1480%"
    ],
    "hints": {
      "2008": {
        "id": 2008,
        "name": "Aqua Mark: Torrent",
        "description": "A special status applied by some Aqua characters to the target for 10 sec.\u000bWhen triggered by specific Aqua characters' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "14s"
  },
  "ultimate": {
    "name": "Argent Cascade",
    "icon": "Icon/Skill/13001_Ultra",
    "description": "Fires a cluster of arrows that rains down at the target's location, dealing <color=#fb8037>&Param1&</color> of ATK as AoE Aqua Ultimate DMG every 0.5s for 6s.",
    "shortDescription": "Rains arrows at the target location, dealing AoE DMG over time.",
    "params": [
      "160%/184%/207%/279%/302%/324%/369%/388%/407%/445%/477%/509%/541%"
    ],
    "hints": {},
    "cooldown": "30s",
    "energy": 260
  },
  "talents": [
    {
      "name": "Courier's Aspiration",
      "talents": [
        {
          "name": "Courier's Aspiration",
          "description": "When the squad triggers an ##Aqua Mark#1018# on a target, increases the Aqua DMG Taken by this target by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "4.7%",
            "6",
            "3"
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
          "name": "Aqua DMG Boost",
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Aqua DMG Boost",
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Memories of the Journey",
      "talents": [
        {
          "name": "Memories of the Journey",
          "description": "When Donna casts a skill, increases Skill DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "28.5%",
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
          "name": "Aqua DMG Boost",
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Aqua DMG Boost",
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Dreams We Share",
      "talents": [
        {
          "name": "Dreams We Share",
          "description": "When Donna deals Skill DMG, increases the Aqua DMG Taken by the target by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "1.4%",
            "10",
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
          "name": "Aqua DMG Boost",
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Aqua DMG Boost",
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Drifter's Destination",
      "talents": [
        {
          "name": "Drifter's Destination",
          "description": "When the squad triggers an ##Aqua Mark#1018#, increases Donna's Aqua DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "20%",
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
          "name": "Aqua DMG Boost",
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Aqua DMG Boost",
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Our Post Haste",
      "talents": [
        {
          "name": "Our Post Haste",
          "description": "Increases Donna's Skill DMG dealt to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
          "params": [
            "0.57%"
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
          "name": "Aqua DMG Boost",
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Aqua DMG Boost",
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "hp": 795,
      "atk": 114
    },
    {
      "hp": 1033,
      "atk": 148
    },
    {
      "hp": 1271,
      "atk": 182
    },
    {
      "hp": 1510,
      "atk": 216
    },
    {
      "hp": 1748,
      "atk": 250
    },
    {
      "hp": 1987,
      "atk": 284
    },
    {
      "hp": 2225,
      "atk": 318
    },
    {
      "hp": 2463,
      "atk": 352
    },
    {
      "hp": 2702,
      "atk": 386
    },
    {
      "hp": 2940,
      "atk": 420
    },
    {
      "hp": 3528,
      "atk": 504
    },
    {
      "hp": 3767,
      "atk": 538
    },
    {
      "hp": 4005,
      "atk": 572
    },
    {
      "hp": 4243,
      "atk": 606
    },
    {
      "hp": 4482,
      "atk": 640
    },
    {
      "hp": 4720,
      "atk": 674
    },
    {
      "hp": 4959,
      "atk": 708
    },
    {
      "hp": 5197,
      "atk": 742
    },
    {
      "hp": 5435,
      "atk": 776
    },
    {
      "hp": 5674,
      "atk": 811
    },
    {
      "hp": 5912,
      "atk": 845
    },
    {
      "hp": 7096,
      "atk": 1014
    },
    {
      "hp": 7335,
      "atk": 1048
    },
    {
      "hp": 7573,
      "atk": 1082
    },
    {
      "hp": 7811,
      "atk": 1116
    },
    {
      "hp": 8050,
      "atk": 1150
    },
    {
      "hp": 8288,
      "atk": 1184
    },
    {
      "hp": 8526,
      "atk": 1218
    },
    {
      "hp": 8765,
      "atk": 1252
    },
    {
      "hp": 9003,
      "atk": 1286
    },
    {
      "hp": 9242,
      "atk": 1320
    },
    {
      "hp": 9480,
      "atk": 1354
    },
    {
      "hp": 11379,
      "atk": 1626
    },
    {
      "hp": 11618,
      "atk": 1660
    },
    {
      "hp": 11856,
      "atk": 1694
    },
    {
      "hp": 12094,
      "atk": 1728
    },
    {
      "hp": 12333,
      "atk": 1762
    },
    {
      "hp": 12571,
      "atk": 1796
    },
    {
      "hp": 12810,
      "atk": 1830
    },
    {
      "hp": 13048,
      "atk": 1864
    },
    {
      "hp": 13286,
      "atk": 1898
    },
    {
      "hp": 13525,
      "atk": 1932
    },
    {
      "hp": 13763,
      "atk": 1966
    },
    {
      "hp": 16513,
      "atk": 2359
    },
    {
      "hp": 16751,
      "atk": 2393
    },
    {
      "hp": 16989,
      "atk": 2427
    },
    {
      "hp": 17228,
      "atk": 2461
    },
    {
      "hp": 17466,
      "atk": 2495
    },
    {
      "hp": 17705,
      "atk": 2529
    },
    {
      "hp": 17943,
      "atk": 2563
    },
    {
      "hp": 18181,
      "atk": 2597
    },
    {
      "hp": 18420,
      "atk": 2631
    },
    {
      "hp": 18658,
      "atk": 2665
    },
    {
      "hp": 18897,
      "atk": 2700
    },
    {
      "hp": 22679,
      "atk": 3240
    },
    {
      "hp": 22917,
      "atk": 3274
    },
    {
      "hp": 23156,
      "atk": 3308
    },
    {
      "hp": 23394,
      "atk": 3342
    },
    {
      "hp": 23633,
      "atk": 3376
    },
    {
      "hp": 23871,
      "atk": 3410
    },
    {
      "hp": 24109,
      "atk": 3444
    },
    {
      "hp": 24348,
      "atk": 3478
    },
    {
      "hp": 24586,
      "atk": 3512
    },
    {
      "hp": 24825,
      "atk": 3546
    },
    {
      "hp": 25063,
      "atk": 3580
    },
    {
      "hp": 30077,
      "atk": 4297
    },
    {
      "hp": 30316,
      "atk": 4331
    },
    {
      "hp": 30554,
      "atk": 4365
    },
    {
      "hp": 30792,
      "atk": 4399
    },
    {
      "hp": 31031,
      "atk": 4433
    },
    {
      "hp": 31269,
      "atk": 4467
    },
    {
      "hp": 31507,
      "atk": 4501
    },
    {
      "hp": 31746,
      "atk": 4535
    },
    {
      "hp": 31984,
      "atk": 4569
    },
    {
      "hp": 32223,
      "atk": 4603
    },
    {
      "hp": 32461,
      "atk": 4637
    },
    {
      "hp": 38953,
      "atk": 5565
    },
    {
      "hp": 39192,
      "atk": 5599
    },
    {
      "hp": 39430,
      "atk": 5633
    },
    {
      "hp": 39668,
      "atk": 5667
    },
    {
      "hp": 39907,
      "atk": 5701
    },
    {
      "hp": 40145,
      "atk": 5735
    },
    {
      "hp": 40384,
      "atk": 5769
    },
    {
      "hp": 40622,
      "atk": 5803
    },
    {
      "hp": 40860,
      "atk": 5837
    },
    {
      "hp": 41099,
      "atk": 5871
    },
    {
      "hp": 41337,
      "atk": 5905
    },
    {
      "hp": 49601,
      "atk": 7086
    },
    {
      "hp": 49840,
      "atk": 7120
    },
    {
      "hp": 50078,
      "atk": 7154
    },
    {
      "hp": 50317,
      "atk": 7188
    },
    {
      "hp": 50555,
      "atk": 7222
    },
    {
      "hp": 50793,
      "atk": 7256
    },
    {
      "hp": 51032,
      "atk": 7290
    },
    {
      "hp": 51270,
      "atk": 7324
    },
    {
      "hp": 51509,
      "atk": 7358
    },
    {
      "hp": 51747,
      "atk": 7392
    },
    {
      "hp": 51985,
      "atk": 7426
    },
    {
      "hp": 51985,
      "atk": 7426
    }
  ],
  "upgrades": [],
  "skillUpgrades": []
};
