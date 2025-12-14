export const Freesia = {
  "id": 125,
  "name": "Freesia",
  "icon": "/stella/assets/Freesia.png",
  "portrait": "/stella/assets/Freesia_portrait.png",
  "background": "/stella/assets/Freesia_background.png",
  "variants": {
    "base": "/stella/assets/Freesia_base.png",
    "q": "/stella/assets/Freesia_q.png",
    "gd": "/stella/assets/Freesia_gd.png",
    "goods": "/stella/assets/Freesia_goods.png",
    "qs": "/stella/assets/Freesia_qs.png",
    "xl": "/stella/assets/Freesia_xl.png",
    "gc": "/stella/assets/Freesia_gc.png",
    "sk": "/stella/assets/Freesia_portrait.png",
    "xxl": "/stella/assets/Freesia.png",
    "qm": "/stella/assets/Freesia_qm.png",
    "l": "/stella/assets/Freesia_l.png",
    "s": "/stella/assets/Freesia_s.png"
  },
  "description": "The ancient \"Frenzy\" magic fuels Freesia to keep fighting until utter exhaustion. This is the dark side of the usually graceful girl—one that should be kept from others.",
  "voiceActor": {
    "cn": "Zhang Ye",
    "cnLocalized": "张晔",
    "jp": "Lynn",
    "jpLocalized": "Lynn"
  },
  "birthday": "9.9",
  "grade": 5,
  "element": "Aqua",
  "position": "Versatile",
  "attackType": "Melee",
  "style": "Adventurous",
  "faction": "Post Haste",
  "tags": [
    "Versatile",
    "Adventurous",
    "Post Haste"
  ],
  "dateEvents": [
    {
      "name": "The Mysterious Mushroom",
      "icon": "DatingSPCG_125301",
      "clue": "Visit the Cave to unlock",
      "secondChoice": "Don't go any deeper. Stop here and take a rest."
    },
    {
      "name": "True Heart",
      "icon": "DatingSPCG_125302",
      "clue": "Visit the Dessert Shop to unlock",
      "secondChoice": "It's still early. Chat a bit longer."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Portable Blower",
      "Exquisite Blower",
      "Deluxe Blower",
      "Stellanite Enchantment",
      "Moonlit Companion",
      "Cosmic Form",
      "Gilded Ceramic Bowl",
      "Blossom Porcelain Cup",
      "Mystic Potion Kettle"
    ],
    "hates": [
      "Love Candle",
      "Blazing Wings",
      "Fiery Honeypot"
    ]
  },
  "normalAttack": {
    "name": "Power of Reason",
    "icon": "Icon/Skill/12501_Normal",
    "description": "Swings the great axe to attack the target.\u000bStrike 1: <color=#fb8037>&Param1& of ATK</color> as Aqua DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Aqua DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK</color> as Aqua DMG.\u000bStrike 4: <color=#fb8037>&Param4& of ATK</color> as Aqua DMG.\u000bStrike 5: <color=#fb8037>&Param5& of ATK</color> as Aqua DMG.\u000bIn ##Berserk#2014# state, rapidly hacks at enemies instead.\u000bStrike 1: <color=#fb8037>&Param6& of ATK x2</color> as Aqua DMG.\u000bStrike 2: <color=#fb8037>&Param7& of ATK x2</color> as Aqua DMG.\u000bStrike 3: <color=#fb8037>&Param8& of ATK</color>, <color=#fb8037>&Param9& of ATK x4</color>, and <color=#fb8037>&Param10& of ATK</color> as Aqua DMG.",
    "shortDescription": "Swings the greataxe to attack enemies. If Freesia is in ##Berserk#2014#, she rapidly hacks at enemies instead.",
    "params": [
      "49%/56%/63%/85%/92%/99%/113%/118%/124%/136%/146%/155%/165%",
      "68%/78%/88%/119%/128%/138%/157%/165%/173%/189%/203%/216%/230%",
      "26.5%/30.5%/34.4%/46.3%/50.1%/53.8%/61.2%/64.4%/67.5%/73.9%/79.2%/84.5%/89.8%",
      "42%/49%/55%/74%/80%/86%/98%/103%/108%/118%/127%/135%/144%",
      "127%/146%/165%/222%/240%/258%/293%/309%/324%/354%/380%/405%/431%",
      "48%/55%/63%/84%/91%/98%/111%/117%/123%/134%/144%/153%/163%",
      "36%/41%/47%/63%/68%/73%/83%/87%/92%/100%/107%/114%/122%",
      "32%/36%/41%/55%/60%/64%/73%/77%/80%/88%/94%/101%/107%",
      "21%/24.2%/27.3%/36.8%/39.7%/42.6%/48.5%/51%/53.6%/58.6%/62.8%/67%/71.2%",
      "63%/72%/82%/110%/119%/128%/146%/153%/161%/176%/188%/201%/214%"
    ],
    "hints": {
      "2014": {
        "id": 2014,
        "name": "Berserk",
        "description": "Freesia enters a frenzied state, increase ATK by <color=#fb8037>&Param1&</color>. Auto Attack changes.",
        "params": [
          "46%",
          "Character,NoLevel,125,Name,Text"
        ]
      }
    }
  },
  "skill": {
    "name": "Freezing Swirl",
    "icon": "Icon/Skill/12501_Skill_Support",
    "description": "Charges up to unleash a Whirlwind Slash, dealing <color=#fb8037>&Param1& of ATK</color> as Aqua DMG to nearby targets every 0.3s. Charging increases the skill's duration.\u000bFreezing Swirl (Main Skill) can trigger ##Aqua Mark#1018#, dealing &Param2& of ATK as AoE Aqua Mark DMG and inflicting ##Chill#1027#.",
    "shortDescription": "Charges up and continuously deals DMG to nearby targets.\u000bThe Main Skill can trigger ##Aqua Mark#1018#.",
    "params": [
      "25.2%/28.9%/32.7%/44%/47.5%/51.1%/58.1%/61.1%/64.1%/70.2%/75.2%/80.2%/85.3%",
      "52%/67%/82%/98%/113%/129%/144%/159%/175%"
    ],
    "hints": {
      "1018": {
        "id": 1018,
        "name": "Aqua Mark",
        "description": "The generic name for all Aqua Marks.\u000bWhen triggered by specific Aqua Trekkers' attacks, the status is removed, and a special effect is activated.",
        "params": []
      },
      "1027": {
        "id": 1027,
        "name": "Chill",
        "description": "Reduces Movement SPD by <color=#fb8037>25%</color> for <color=#fb8037>&Param2&</color>s, up to <color=#fb8037>&Param3&</color> stacks.\u000bAt <color=#fb8037>&Param3&</color> stacks, it converts into Freeze for <color=#fb8037>&Param4&</color>s.",
        "params": [
          "-25%",
          "10",
          "3",
          "3"
        ]
      }
    },
    "cooldown": "8s"
  },
  "supportSkill": {
    "name": "Frost Bloom",
    "icon": "Icon/Skill/12501_Skill_Main",
    "description": "Creates a field of Ice Flowers ahead, dealing <color=#fb8037>&Param1&</color> of ATK as AoE Aqua DMG.\u000bAfter 1s, the Ice Flowers burst, dealing <color=#fb8037>&Param2&</color> of ATK as AoE Aqua DMG.\u000bFrost Bloom (Support Skill) can inflict ##Aqua Mark: Torrent#2008#.",
    "shortDescription": "Generates Ice Flowers to deal DMG.\u000bThe Support Skill can inflict ##Aqua Mark: Torrent#2008#.",
    "params": [
      "69%/79%/90%/121%/131%/140%/160%/168%/176%/193%/207%/220%/234%",
      "62%/72%/81%/109%/118%/126%/144%/151%/159%/173%/186%/198%/211%"
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
    "cooldown": "12s"
  },
  "ultimate": {
    "name": "Elegy of Frost",
    "icon": "Icon/Skill/12501_Ultra",
    "description": "Freesia growls furiously, dealing <color=#fb8037>&Param1& of ATK</color> and <color=#fb8037>&Param2&of ATK</color> as Aqua DMG in a large area. She then deals <color=#fb8037>&Param3& of ATK</color> as AoE Aqua DMG and enters the ##Berserk#2014# status for 20s.\u000bWhen Freesia is in ##Berserk#2014# status as a support Trekker, she will automatically attack nearby enemies.",
    "shortDescription": "Deals damage to nearby targets and enters ##Berserk#2014#.",
    "params": [
      "40%/46%/52%/70%/75%/81%/92%/97%/102%/111%/119%/127%/135%",
      "56%/64%/73%/98%/106%/113%/129%/136%/142%/156%/167%/178%/189%",
      "91%/105%/119%/160%/172%/185%/211%/222%/233%/254%/273%/291%/309%"
    ],
    "hints": {
      "2014": {
        "id": 2014,
        "name": "Berserk",
        "description": "Freesia enters a frenzied state, increase ATK by <color=#fb8037>&Param1&</color>. Auto Attack changes.",
        "params": [
          "46%",
          "Character,NoLevel,125,Name,Text"
        ]
      }
    },
    "cooldown": "30s",
    "energy": 285
  },
  "talents": [
    {
      "name": "The Runaway: Rebirth",
      "talents": [
        {
          "name": "The Runaway: Rebirth",
          "description": "When Freesia casts her Ultimate, targets who take DMG from her roar take <color=#0abec5>&Param1&</color> more Aqua DMG for 20s.",
          "params": [
            "21%"
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
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
      "name": "The Fugitive: Judgment",
      "talents": [
        {
          "name": "The Fugitive: Judgment",
          "description": "When Freesia deals DMG to targets inflicted with ##Chill#1027# and ##Freeze#1002#, her Crit DMG is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "40%",
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
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
      "name": "Correction of Opinions",
      "talents": [
        {
          "name": "Correction of Opinions",
          "description": "Each time Freesia deals Skill DMG to a target, increases the Aqua DMG taken by the target by <color=#0abec5>&Param2&</color> for &Param1&s, stacking up to &Param3& times.",
          "params": [
            "14",
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
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
      "name": "Debate of Truth",
      "talents": [
        {
          "name": "Debate of Truth",
          "description": "When Freesia is om the ##Berserk#2014# state, her Crit Rate is increased by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10%"
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
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
      "name": "Justice, Reason and Kindness",
      "talents": [
        {
          "name": "Justice, Reason and Kindness",
          "description": "Increases Freesia's Crit DMG dealt to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
          "params": [
            "48%"
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
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
      "hp": 1284,
      "atk": 113
    },
    {
      "hp": 1673,
      "atk": 146
    },
    {
      "hp": 2059,
      "atk": 180
    },
    {
      "hp": 2445,
      "atk": 214
    },
    {
      "hp": 2831,
      "atk": 248
    },
    {
      "hp": 3218,
      "atk": 282
    },
    {
      "hp": 3604,
      "atk": 315
    },
    {
      "hp": 3990,
      "atk": 349
    },
    {
      "hp": 4376,
      "atk": 383
    },
    {
      "hp": 4762,
      "atk": 417
    },
    {
      "hp": 5715,
      "atk": 500
    },
    {
      "hp": 6101,
      "atk": 534
    },
    {
      "hp": 6487,
      "atk": 568
    },
    {
      "hp": 6873,
      "atk": 601
    },
    {
      "hp": 7259,
      "atk": 635
    },
    {
      "hp": 7645,
      "atk": 669
    },
    {
      "hp": 8031,
      "atk": 703
    },
    {
      "hp": 8417,
      "atk": 737
    },
    {
      "hp": 8803,
      "atk": 770
    },
    {
      "hp": 9189,
      "atk": 804
    },
    {
      "hp": 9576,
      "atk": 838
    },
    {
      "hp": 11493,
      "atk": 1006
    },
    {
      "hp": 11879,
      "atk": 1040
    },
    {
      "hp": 12265,
      "atk": 1073
    },
    {
      "hp": 12651,
      "atk": 1107
    },
    {
      "hp": 13037,
      "atk": 1141
    },
    {
      "hp": 13423,
      "atk": 1175
    },
    {
      "hp": 13809,
      "atk": 1209
    },
    {
      "hp": 14196,
      "atk": 1242
    },
    {
      "hp": 14582,
      "atk": 1276
    },
    {
      "hp": 14968,
      "atk": 1310
    },
    {
      "hp": 15354,
      "atk": 1344
    },
    {
      "hp": 18429,
      "atk": 1613
    },
    {
      "hp": 18816,
      "atk": 1647
    },
    {
      "hp": 19202,
      "atk": 1681
    },
    {
      "hp": 19588,
      "atk": 1714
    },
    {
      "hp": 19974,
      "atk": 1748
    },
    {
      "hp": 20360,
      "atk": 1782
    },
    {
      "hp": 20746,
      "atk": 1816
    },
    {
      "hp": 21132,
      "atk": 1850
    },
    {
      "hp": 21518,
      "atk": 1883
    },
    {
      "hp": 21904,
      "atk": 1917
    },
    {
      "hp": 22290,
      "atk": 1951
    },
    {
      "hp": 26744,
      "atk": 2341
    },
    {
      "hp": 27130,
      "atk": 2374
    },
    {
      "hp": 27517,
      "atk": 2408
    },
    {
      "hp": 27903,
      "atk": 2442
    },
    {
      "hp": 28289,
      "atk": 2476
    },
    {
      "hp": 28675,
      "atk": 2510
    },
    {
      "hp": 29061,
      "atk": 2543
    },
    {
      "hp": 29447,
      "atk": 2577
    },
    {
      "hp": 29833,
      "atk": 2611
    },
    {
      "hp": 30219,
      "atk": 2645
    },
    {
      "hp": 30605,
      "atk": 2679
    },
    {
      "hp": 36731,
      "atk": 3215
    },
    {
      "hp": 37117,
      "atk": 3249
    },
    {
      "hp": 37503,
      "atk": 3282
    },
    {
      "hp": 37890,
      "atk": 3316
    },
    {
      "hp": 38276,
      "atk": 3350
    },
    {
      "hp": 38662,
      "atk": 3384
    },
    {
      "hp": 39048,
      "atk": 3417
    },
    {
      "hp": 39434,
      "atk": 3451
    },
    {
      "hp": 39820,
      "atk": 3485
    },
    {
      "hp": 40206,
      "atk": 3519
    },
    {
      "hp": 40592,
      "atk": 3553
    },
    {
      "hp": 48714,
      "atk": 4263
    },
    {
      "hp": 49100,
      "atk": 4297
    },
    {
      "hp": 49486,
      "atk": 4331
    },
    {
      "hp": 49872,
      "atk": 4365
    },
    {
      "hp": 50258,
      "atk": 4399
    },
    {
      "hp": 50644,
      "atk": 4432
    },
    {
      "hp": 51030,
      "atk": 4466
    },
    {
      "hp": 51416,
      "atk": 4500
    },
    {
      "hp": 51802,
      "atk": 4534
    },
    {
      "hp": 52188,
      "atk": 4568
    },
    {
      "hp": 52575,
      "atk": 4601
    },
    {
      "hp": 63088,
      "atk": 5522
    },
    {
      "hp": 63474,
      "atk": 5555
    },
    {
      "hp": 63861,
      "atk": 5589
    },
    {
      "hp": 64247,
      "atk": 5623
    },
    {
      "hp": 64633,
      "atk": 5657
    },
    {
      "hp": 65019,
      "atk": 5691
    },
    {
      "hp": 65405,
      "atk": 5724
    },
    {
      "hp": 65791,
      "atk": 5758
    },
    {
      "hp": 66177,
      "atk": 5792
    },
    {
      "hp": 66563,
      "atk": 5826
    },
    {
      "hp": 66949,
      "atk": 5860
    },
    {
      "hp": 80334,
      "atk": 7031
    },
    {
      "hp": 80720,
      "atk": 7065
    },
    {
      "hp": 81106,
      "atk": 7099
    },
    {
      "hp": 81492,
      "atk": 7132
    },
    {
      "hp": 81879,
      "atk": 7166
    },
    {
      "hp": 82265,
      "atk": 7200
    },
    {
      "hp": 82651,
      "atk": 7234
    },
    {
      "hp": 83037,
      "atk": 7268
    },
    {
      "hp": 83423,
      "atk": 7301
    },
    {
      "hp": 83809,
      "atk": 7335
    },
    {
      "hp": 84195,
      "atk": 7369
    },
    {
      "hp": 84195,
      "atk": 7369
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
          "id": 20063,
          "name": "Nightlit Haven",
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
          "id": 20063,
          "name": "Nightlit Haven",
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
          "id": 20063,
          "name": "Nightlit Haven",
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
          "id": 20063,
          "name": "Nightlit Haven",
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