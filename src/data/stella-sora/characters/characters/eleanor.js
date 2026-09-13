// Eleanor Character Data - Stella Sora
// Generated from live game tables (Sep 8 2026 patch, v1.15.0)

export const Eleanor = {
  "id": 137,
  "name": "Eleanor",
  "icon": "/stella/assets/Eleanor.png",
  "portrait": "/stella/assets/Eleanor_portrait.png",
  "background": "/stella/assets/Eleanor_background.png",
  "description": "Eleanor, both a noble lady and a traveler, excels at switching weapons fluidly to unleash varied attacks and confuse her enemies with versatile tactics.",
  "voiceActor": {
    "cn": "Shi Conghao",
    "cnLocalized": "施丛昊",
    "jp": "Hanaiwa Kana",
    "jpLocalized": "花岩香奈"
  },
  "birthday": "3.24",
  "grade": 5,
  "element": "Ventus",
  "position": "Versatile",
  "attackType": "Melee",
  "style": "Steady",
  "faction": "Freelance Trekker",
  "tags": [
    "Versatile",
    "Steady",
    "Freelance Trekker"
  ],
  "dateEvents": [
    {
      "name": "Feeding Time",
      "icon": "DatingSPCG_137301",
      "clue": "Visit the Dessert Shop to unlock",
      "secondChoice": "\"Looks like you have pretty high standards when it comes to cake.\"\n\"Well, since I'm out with you, I made sure to pick a place with good reviews. I'd hate for the food to disappoint you.\"\n\"I'm not that picky as you d... Mmph.\"\nBefore you can finish, a bite of cake is slipped into your mouth."
    },
    {
      "name": "Diving in the Hot Spring",
      "icon": "DatingSPCG_137302",
      "clue": "Visit Hot Spring Resort to unlock",
      "secondChoice": "Fortunately, you soon notice something.\nBubbles begin rising to the surface, and a figure suddenly bursts out of the water.\nIt is Eleanor—wearing a diving mask.\n\"You're diving?! In here?\"\nYou are stunned by the bizarre idea."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Blossom Porcelain Cup",
      "Card Photo Capturer",
      "Deluxe Blower",
      "Exquisite Blower",
      "Gilded Ceramic Bowl",
      "Mystic Potion Kettle",
      "Portable Blower",
      "Reflective Photo Capturer",
      "Ultra-Precision Photo Capturer"
    ],
    "hates": [
      "Blazing Wings",
      "Fiery Honeypot",
      "Love Candle"
    ]
  },
  "normalAttack": {
    "name": "Tactical Combo",
    "icon": "Icon/Skill/13701_Normal",
    "description": "Quickly switches among multiple weapons to attack.\u000bStrike 1: <color=#ec6d21>&Param1&</color> of ATK as Ventus Auto Attack DMG.\u000bStrike 2: <color=#ec6d21>&Param2& x5</color> of ATK as Ventus Auto Attack DMG.\u000bStrike 3: <color=#ec6d21>&Param3& x5</color> of ATK as Ventus Auto Attack DMG.\u000bStrike 4: <color=#ec6d21>&Param4& x6</color> of ATK as Ventus Auto Attack DMG.\u000bStrike 5: <color=#ec6d21>&Param5& x7</color> of ATK as Ventus Auto Attack DMG.\u000bEleanor has ##Tactical Energy#4048#. She can automatically spend 10 ##Tactical Energy#4048# to activate Cross Slash, dealing <color=#ec6d21>&Param6&</color> of ATK as AoE Ventus Auto Attack DMG. Cross Slash can trigger ##Ventus Mark#1017# and create a Blossom, dealing &Param7& of ATK as AoE Ventus Mark DMG.",
    "shortDescription": "Quickly switches weapons to unleash ruthless strikes, dealing multiple rapid instances of DMG. Eleanor can automatically spend ##Tactical Energy#4048# to activate Cross Slash, dealing AoE DMG.",
    "params": [
      "31%/36%/41%/55%/59%/64%/73%/76%/80%/88%/94%/101%/107%",
      "20%/23%/26%/35%/38%/40%/46%/48%/51%/56%/60%/64%/68%",
      "32%/37%/41%/56%/60%/65%/74%/78%/82%/89%/96%/102%/109%",
      "25%/28%/32%/44%/47%/51%/58%/61%/64%/70%/75%/80%/85%",
      "11%/13%/14%/20%/21%/23%/26%/27%/29%/32%/34%/36%/38%",
      "57%/65%/74%/100%/108%/116%/132%/139%/146%/160%/171%/182%/194%",
      "24%/28%/32%/43%/46%/50%/57%/60%/63%"
    ],
    "hints": {
      "4048": {
        "id": 4048,
        "name": "Tactical Energy",
        "description": "Each time Eleanor deals Auto Attack DMG, she has an 80% chance to gain 2 Tactical Energy. This can only be triggered once every 2s."
      },
      "1017": {
        "id": 1017,
        "name": "Ventus Mark",
        "description": "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated."
      }
    }
  },
  "skill": {
    "name": "Sentry Deployment",
    "icon": "Icon/Skill/13701_Skill_Main",
    "description": "Spins rapidly to deal <color=#ec6d21>&Param1&x2</color> of ATK as AoE Ventus Skill DMG and gains the Vigil effect: multiple ##Sentries#4050# move around Eleanor for &Param2&s, dealing <color=#ec6d21>&Param3&</color> of ATK as AoE Ventus Skill DMG at intervals. Sentry Deployment (Main Skill) can trigger ##Ventus Mark#1017# and create Blossom, dealing &Param4& of ATK as AoE Ventus Mark DMG.",
    "shortDescription": "Spins rapidly to deal AoE DMG and gains Vigil: multiple ##Sentries#4050# move around Eleanor to deal DMG over time.",
    "params": [
      "94%/108%/122%/164%/178%/191%/217%/228%/240%/262%/281%/300%/319%",
      "10",
      "116%/133%/150%/202%/219%/235%/267%/281%/295%/323%/346%/369%/392%",
      "24%/28%/32%/43%/46%/50%/57%/60%/63%"
    ],
    "hints": {
      "4050": {
        "id": 4050,
        "name": "Sentry",
        "description": "Eleanor's unique drone, which can either protect her or be deployed for targeted attacks."
      },
      "1017": {
        "id": 1017,
        "name": "Ventus Mark",
        "description": "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "10s"
  },
  "supportSkill": {
    "name": "Armed Assault",
    "icon": "Icon/Skill/13701_Skill_Support",
    "description": "Performs multiple jump slams, triggering explosions that deal <color=#ec6d21>&Param1& x9</color> of ATK as AoE Ventus Skill DMG. Every third slam generates 1 ##Sentry#4050# for 3s. Up to 3 Sentries can exist at the same time. ##Sentries#4050# can fire bullets that deal <color=#ec6d21>&Param2&</color> of Eleanor's ATK as Ventus Auto Attack DMG. Armed Assault (Support Skill) can inflict ##Ventus Mark: Breeze#2017#.",
    "shortDescription": "Performs multiple jump slams, dealing AoE DMG. Slams generate ##Sentries#4050# that attack targets and deal DMG.",
    "params": [
      "78%/90%/101%/137%/148%/159%/181%/190%/199%/218%/234%/250%/265%",
      "47%/54%/61%/82%/89%/95%/108%/114%/120%/131%/141%/150%/159%"
    ],
    "hints": {
      "4050": {
        "id": 4050,
        "name": "Sentry",
        "description": "Eleanor's unique drone, which can either protect her or be deployed for targeted attacks."
      },
      "2017": {
        "id": 2017,
        "name": "Ventus Mark: Breeze",
        "description": "A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects."
      }
    },
    "cooldown": "12s"
  },
  "ultimate": {
    "name": "Firestorm",
    "icon": "Icon/Skill/13701_Ultra",
    "description": "Eleanor fires a barrage of rockets, dealing AoE Ventus Ultimate DMG equal to <color=#ec6d21>&Param1& x14</color> of ATK.",
    "shortDescription": "Eleanor fires a barrage of rockets, dealing multiple instances of AoE DMG.",
    "params": [
      "118%/135%/153%/206%/222%/239%/272%/286%/300%/328%/352%/375%/399%"
    ],
    "hints": {},
    "cooldown": "35s",
    "energy": 275
  },
  "talents": [
    {
      "name": "Small Treat",
      "talents": [
        {
          "name": "Small Treat",
          "description": "When Eleanor deals Auto Attack DMG to a target, the target takes <color=#0abec5>&Param1&</color> more Ventus DMG for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "3.5%",
            "8",
            "6"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    },
    {
      "name": "Spree Mode",
      "talents": [
        {
          "name": "Spree Mode",
          "description": "Increases Eleanors's ATK by <color=#0abec5>&Param1&</color>. When any Trekker in the squad triggers ##Ventus Mark#1017#, increases Eleanor's ATK by <color=#0abec5>&Param2&</color> for &Param3&s, stacking up to &Param4& times.",
          "params": [
            "33%",
            "5.5%",
            "10",
            "6"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    },
    {
      "name": "On the House",
      "talents": [
        {
          "name": "On the House",
          "description": "When any Trekker inflicts ##Ventus Mark#1017# on a target, increases the Auto Attack DMG dealt by Ventus Trekkers in the squad by <color=#0abec5>&Param1&</color> and Skill DMG by <color=#0abec5>&Param2&</color> for &Param3&s.",
          "params": [
            "25%",
            "25%",
            "10"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    },
    {
      "name": "My Treat Today",
      "talents": [
        {
          "name": "My Treat Today",
          "description": "After Eleanor casts a skill, increases her Auto Attack DMG by <color=#0abec5>&Param1&</color> and her Skill DMG by <color=#0abec5>&Param2&</color> for &Param3&s.",
          "params": [
            "32%",
            "32%",
            "12"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    },
    {
      "name": "Party Time",
      "talents": [
        {
          "name": "Party Time",
          "description": "Increases Eleanor's Ventus DMG dealt to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
          "params": [
            "0.2%"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "hp": 1345,
      "atk": 115
    },
    {
      "hp": 1753,
      "atk": 150
    },
    {
      "hp": 2158,
      "atk": 184
    },
    {
      "hp": 2563,
      "atk": 219
    },
    {
      "hp": 2967,
      "atk": 254
    },
    {
      "hp": 3372,
      "atk": 288
    },
    {
      "hp": 3777,
      "atk": 323
    },
    {
      "hp": 4181,
      "atk": 357
    },
    {
      "hp": 4586,
      "atk": 392
    },
    {
      "hp": 4990,
      "atk": 427
    },
    {
      "hp": 5989,
      "atk": 512
    },
    {
      "hp": 6393,
      "atk": 546
    },
    {
      "hp": 6798,
      "atk": 581
    },
    {
      "hp": 7203,
      "atk": 616
    },
    {
      "hp": 7607,
      "atk": 650
    },
    {
      "hp": 8012,
      "atk": 685
    },
    {
      "hp": 8417,
      "atk": 719
    },
    {
      "hp": 8821,
      "atk": 754
    },
    {
      "hp": 9226,
      "atk": 789
    },
    {
      "hp": 9630,
      "atk": 823
    },
    {
      "hp": 10035,
      "atk": 858
    },
    {
      "hp": 12044,
      "atk": 1029
    },
    {
      "hp": 12449,
      "atk": 1064
    },
    {
      "hp": 12854,
      "atk": 1099
    },
    {
      "hp": 13258,
      "atk": 1133
    },
    {
      "hp": 13663,
      "atk": 1168
    },
    {
      "hp": 14068,
      "atk": 1202
    },
    {
      "hp": 14472,
      "atk": 1237
    },
    {
      "hp": 14877,
      "atk": 1272
    },
    {
      "hp": 15282,
      "atk": 1306
    },
    {
      "hp": 15686,
      "atk": 1341
    },
    {
      "hp": 16091,
      "atk": 1375
    },
    {
      "hp": 19314,
      "atk": 1651
    },
    {
      "hp": 19719,
      "atk": 1685
    },
    {
      "hp": 20123,
      "atk": 1720
    },
    {
      "hp": 20528,
      "atk": 1755
    },
    {
      "hp": 20933,
      "atk": 1789
    },
    {
      "hp": 21337,
      "atk": 1824
    },
    {
      "hp": 21742,
      "atk": 1858
    },
    {
      "hp": 22146,
      "atk": 1893
    },
    {
      "hp": 22551,
      "atk": 1927
    },
    {
      "hp": 22956,
      "atk": 1962
    },
    {
      "hp": 23360,
      "atk": 1997
    },
    {
      "hp": 28028,
      "atk": 2396
    },
    {
      "hp": 28433,
      "atk": 2430
    },
    {
      "hp": 28837,
      "atk": 2465
    },
    {
      "hp": 29242,
      "atk": 2499
    },
    {
      "hp": 29647,
      "atk": 2534
    },
    {
      "hp": 30051,
      "atk": 2568
    },
    {
      "hp": 30456,
      "atk": 2603
    },
    {
      "hp": 30860,
      "atk": 2638
    },
    {
      "hp": 31265,
      "atk": 2672
    },
    {
      "hp": 31670,
      "atk": 2707
    },
    {
      "hp": 32074,
      "atk": 2741
    },
    {
      "hp": 38494,
      "atk": 3290
    },
    {
      "hp": 38899,
      "atk": 3325
    },
    {
      "hp": 39304,
      "atk": 3359
    },
    {
      "hp": 39708,
      "atk": 3394
    },
    {
      "hp": 40113,
      "atk": 3428
    },
    {
      "hp": 40517,
      "atk": 3463
    },
    {
      "hp": 40922,
      "atk": 3498
    },
    {
      "hp": 41327,
      "atk": 3532
    },
    {
      "hp": 41731,
      "atk": 3567
    },
    {
      "hp": 42136,
      "atk": 3601
    },
    {
      "hp": 42541,
      "atk": 3636
    },
    {
      "hp": 51052,
      "atk": 4363
    },
    {
      "hp": 51456,
      "atk": 4398
    },
    {
      "hp": 51861,
      "atk": 4433
    },
    {
      "hp": 52266,
      "atk": 4467
    },
    {
      "hp": 52670,
      "atk": 4502
    },
    {
      "hp": 53075,
      "atk": 4536
    },
    {
      "hp": 53480,
      "atk": 4571
    },
    {
      "hp": 53884,
      "atk": 4605
    },
    {
      "hp": 54289,
      "atk": 4640
    },
    {
      "hp": 54693,
      "atk": 4675
    },
    {
      "hp": 55098,
      "atk": 4709
    },
    {
      "hp": 66117,
      "atk": 5651
    },
    {
      "hp": 66521,
      "atk": 5686
    },
    {
      "hp": 66926,
      "atk": 5720
    },
    {
      "hp": 67330,
      "atk": 5755
    },
    {
      "hp": 67735,
      "atk": 5789
    },
    {
      "hp": 68140,
      "atk": 5824
    },
    {
      "hp": 68544,
      "atk": 5859
    },
    {
      "hp": 68949,
      "atk": 5893
    },
    {
      "hp": 69354,
      "atk": 5928
    },
    {
      "hp": 69758,
      "atk": 5962
    },
    {
      "hp": 70163,
      "atk": 5997
    },
    {
      "hp": 84190,
      "atk": 7196
    },
    {
      "hp": 84595,
      "atk": 7230
    },
    {
      "hp": 84999,
      "atk": 7265
    },
    {
      "hp": 85404,
      "atk": 7300
    },
    {
      "hp": 85809,
      "atk": 7334
    },
    {
      "hp": 86213,
      "atk": 7369
    },
    {
      "hp": 86618,
      "atk": 7403
    },
    {
      "hp": 87023,
      "atk": 7438
    },
    {
      "hp": 87427,
      "atk": 7472
    },
    {
      "hp": 87832,
      "atk": 7507
    },
    {
      "hp": 88236,
      "atk": 7542
    },
    {
      "hp": 88236,
      "atk": 7542
    }
  ],
  "upgrades": [],
  "skillUpgrades": []
};
