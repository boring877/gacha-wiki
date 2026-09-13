// Chaton Character Data - Stella Sora
// Generated from live game tables (Sep 8 2026 patch, v1.15.0)

export const Chaton = {
  "id": 114,
  "name": "Chaton",
  "icon": "/stella/assets/Chaton.png",
  "portrait": "/stella/assets/Chaton_portrait.png",
  "background": "/stella/assets/Chaton_background.png",
  "description": "Chaton is the sniper of White Cat Troupe. Though fond of close combat, in the end she chose a customized weapon as tall as herself, one that can only be used from a distance.",
  "voiceActor": {
    "cn": "Raby",
    "cnLocalized": "瑞比",
    "jp": "Ayane Sakura",
    "jpLocalized": "佐倉綾音"
  },
  "birthday": "8.5",
  "grade": 5,
  "element": "Ignis",
  "position": "Vanguard",
  "attackType": "Ranged",
  "style": "Creative",
  "faction": "White Cat Troupe",
  "tags": [
    "Vanguard",
    "Creative",
    "White Cat Troupe"
  ],
  "dateEvents": [
    {
      "name": "Gimme Sugar",
      "icon": "DatingSPCG_114301",
      "clue": "Visit the Dessert Shop to unlock",
      "secondChoice": "You try to keep up, not wanting to let her wolf them down alone, but your throat protests."
    },
    {
      "name": "Not Her Day",
      "icon": "DatingSPCG_114302",
      "clue": "Visit the Market to unlock",
      "secondChoice": "First shot—miss. \"This trigger's too light.\"\nSecond shot—miss. \"This gun's off balance.\"\nThird shot—miss. \"The sights must be off.\""
    }
  ],
  "giftPreferences": {
    "loves": [
      "Blazing Wings",
      "Emerging Talent",
      "Fiery Honeypot",
      "Fragrant Ice Delight",
      "Love Candle",
      "Rising Star",
      "Shining Star",
      "Summer Chill Crushed Ice",
      "Sweet IceFurry"
    ],
    "hates": [
      "Blossom Porcelain Cup",
      "Gilded Ceramic Bowl",
      "Mystic Potion Kettle"
    ]
  },
  "normalAttack": {
    "name": "Full-Auto Trigger",
    "icon": "Icon/Skill/11401_Normal",
    "description": "Fires rapidly at the target. Each shot deals <color=#fb8037>&Param1&</color> of ATK as Ignis Auto Attack DMG.\u000bMagazine contains 30 ammo.\u000bWhen Chaton is in the ##Evil Eye Unleashed#4035# state, upgrades &Param3& (Auto Attack) to Dark Burst, each shot dealing <color=#fb8037>&Param2&</color> of ATK as Ignis Ultimate DMG and consuming no ammo.",
    "shortDescription": "Fires rapidly at the target, dealing DMG.",
    "params": [
      "20%/23%/26%/36%/39%/42%/47%/50%/52%/57%/61%/66%/70%",
      "8%/9%/11%/15%/16%/17%/19%/20%/21%/24%/25%/27%/29%",
      "Full-Auto Trigger"
    ],
    "hints": {
      "4035": {
        "id": 4035,
        "name": "Evil Eye Unleashed",
        "description": "Chaton breaks the seal of Evil Eye, gaining Super Armor, increased stats, and enhanced Auto Attacks."
      }
    }
  },
  "skill": {
    "name": "Sniper Operation",
    "icon": "Icon/Skill/11401_Skill_Main",
    "description": "Chaton uses different attack methods depending on whether the skill button is tapped or held.\u000b<color=#0abec5>Tap:</color> activates ##Dark Ray#4036#.\u000bChaton fires a laser at the target, dealing <color=#fb8037>&Param1&</color> of ATK as Ignis Skill DMG and inflicting Dark Mark for &Param6&s. Chaton deals <color=#fb8037>&Param2&</color> of ATK as Ignis Skill DMG to targets inflicted with Dark Mark every 2s.\u000b<color=#0abec5>Hold:</color> activates ##Bouncing Kitty Bomb#4037#.\u000bChaton throws 2 Bouncing Bombs at the target, each dealing <color=#fb8037>&Param3&</color> of ATK as AoE Ignis Skill DMG. Bouncing Bombs then bounce to nearby targets, up to 5 times.\u000b&Param4& (Main Skill) can trigger ##Ignis Mark#1016# and generate Conflagration: deals &Param5& of ATK as Ignis Mark DMG.",
    "shortDescription": "Tap: Chaton fires a laser at the target, inflicting Lock Mark and dealing DMG over time.\u000bHold: Chaton throws Bouncing Bombs at the target, dealing AoE DMG.\u000bThe Main Skill can trigger ##Ignis Mark#1016# and generate Conflagration.",
    "params": [
      "224%/257%/291%/391%/423%/454%/516%/543%/570%/624%/668%/713%/758%",
      "64%/74%/83%/112%/121%/130%/148%/156%/163%/179%/191%/204%/217%",
      "62%/72%/81%/109%/118%/127%/144%/152%/159%/174%/187%/199%/212%",
      "Sniper Operation",
      "28%/37%/45%/54%/63%/71%/80%/88%/97%",
      "14"
    ],
    "hints": {
      "4036": {
        "id": 4036,
        "name": "Dark Ray"
      },
      "4037": {
        "id": 4037,
        "name": "Bouncing Kitty Bomb"
      },
      "1016": {
        "id": 1016,
        "name": "Ignis Mark",
        "description": "The generic name for all Ignis Marks.\u000bWhen triggered by specific Ignis Trekkers' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "6s"
  },
  "supportSkill": {
    "name": "Blitz Assault",
    "icon": "Icon/Skill/11401_Skill_Support",
    "description": "Rolls toward the target and fires Penetrating Bullets, penetrating the target and dealing <color=#fb8037>&Param1&</color> of ATK as Ignis Skill DMG. This action is performed 3 times in succession.\u000b&Param2& (Support Skill) can trigger ##Ignis Mark#1016# and generate Conflagration: deals &Param3& of ATK as Ignis Mark DMG.",
    "shortDescription": "Rolls toward the target while firing, dealing DMG.\u000bThe Support Skill can trigger ##Ignis Mark#1016# and generate Conflagration.",
    "params": [
      "205%/236%/266%/359%/387%/416%/474%/498%/523%/572%/613%/654%/695%",
      "Blitz Assault",
      "28%/37%/45%/54%/63%/71%/80%/88%/97%"
    ],
    "hints": {
      "1016": {
        "id": 1016,
        "name": "Ignis Mark",
        "description": "The generic name for all Ignis Marks.\u000bWhen triggered by specific Ignis Trekkers' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "16s"
  },
  "ultimate": {
    "name": "Dark Evil Eye",
    "icon": "Icon/Skill/11401_Ultra",
    "description": "Unseals Evil Eye to inflict Cat Eye Mark on all nearby targets for &Param3&s, then sweep fires, dealing <color=#fb8037>&Param1& x8</color> of ATK as AoE Ignis Ultimate DMG and detonating Cat Eye Marks to deal <color=#fb8037>&Param2&</color> of ATK as Ignis Ultimate DMG.\u000b&Param4& (Ultimate) can trigger ##Ignis Mark#1016#, generating Conflagration: deals &Param5& of ATK as Ignis Mark DMG.\u000bAfter casting the Ultimate, Chaton enters the ##Evil Eye Unleashed#4035# state for &Param6&s while gaining Super Armor, enhancing her Auto Attacks to Dark Burst, increasing her &Param7& by &Param8& and her &Param9& by &Param10&.",
    "shortDescription": "Unseals Evil Eye to deal AoE DMG, triggering ##Ignis Mark#1016# and generating Conflagration.\u000bAfter casting the Ultimate, Chaton enters the ##Evil Eye Unleashed#4035# state, gaining enhanced Auto Attacks, Super Armor, and increased &Param7& and &Param9&.",
    "params": [
      "153%/176%/199%/268%/290%/311%/354%/372%/391%/428%/458%/489%/520%",
      "180%/207%/234%/316%/341%/366%/417%/438%/460%/503%/539%/575%/611%",
      "15",
      "Dark Evil Eye",
      "28%/37%/45%/54%/63%/71%/80%/88%/97%",
      "15",
      "Ultimate DMG",
      "20%",
      "Movespeed",
      "30%"
    ],
    "hints": {
      "1016": {
        "id": 1016,
        "name": "Ignis Mark",
        "description": "The generic name for all Ignis Marks.\u000bWhen triggered by specific Ignis Trekkers' attacks, the status is removed, and a special effect is activated."
      },
      "4035": {
        "id": 4035,
        "name": "Evil Eye Unleashed",
        "description": "Chaton breaks the seal of Evil Eye, gaining Super Armor, increased stats, and enhanced Auto Attacks."
      }
    },
    "cooldown": "30s",
    "energy": 228
  },
  "talents": [
    {
      "name": "Dark Power Slayer",
      "talents": [
        {
          "name": "Dark Power Slayer",
          "description": "When any Trekker applies an ##Ignis Mark#1016# to a target, increases Chaton's Crit DMG by <color=#0abec5>&Param1&</color> for &Param2&s, up to &Param3& stacks",
          "params": [
            "8%",
            "5",
            "4"
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
          "name": "Crit DMG Boost",
          "description": "Increases Crit DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "3%"
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
          "name": "Crit DMG Boost",
          "description": "Increases Crit DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "3%"
          ]
        }
      ]
    },
    {
      "name": "Meowth's Emissary",
      "talents": [
        {
          "name": "Meowth's Emissary",
          "description": "After Chaton deals Crit DMG to a target, her Skill DMG is increased by <color=#0abec5>&Param1&</color> for &Param2&s",
          "params": [
            "28%",
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
          "name": "Crit DMG Boost",
          "description": "Increases Crit DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "3%"
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
          "name": "Crit DMG Boost",
          "description": "Increases Crit DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "3%"
          ]
        }
      ]
    },
    {
      "name": "Enhanced  Barrel",
      "talents": [
        {
          "name": "Enhanced  Barrel",
          "description": "When Chaton casts a skill, the skill's ATK is increased by <color=#0abec5>&Param1&</color> for &Param2&s",
          "params": [
            "20%",
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
          "name": "Crit DMG Boost",
          "description": "Increases Crit DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "3%"
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
          "name": "Crit DMG Boost",
          "description": "Increases Crit DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "3%"
          ]
        }
      ]
    },
    {
      "name": "Target Indicator",
      "talents": [
        {
          "name": "Target Indicator",
          "description": "While ##Evil Eye Unleashed#4035# is active, increases Chaton's Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "0.58%"
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
          "name": "Crit DMG Boost",
          "description": "Increases Crit DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "3%"
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
          "name": "Crit DMG Boost",
          "description": "Increases Crit DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "3%"
          ]
        }
      ]
    },
    {
      "name": "Shooting Metronome",
      "talents": [
        {
          "name": "Shooting Metronome",
          "description": "Increases Chaton's Ignis DMG dealt to elite or higher-tier targets by <color=#0abec5>&Param1&</color>",
          "params": [
            "0.18%"
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
          "name": "Crit DMG Boost",
          "description": "Increases Crit DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "3%"
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
          "name": "Crit DMG Boost",
          "description": "Increases Crit DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "3%"
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "hp": 788,
      "atk": 115
    },
    {
      "hp": 1025,
      "atk": 150
    },
    {
      "hp": 1262,
      "atk": 184
    },
    {
      "hp": 1498,
      "atk": 219
    },
    {
      "hp": 1735,
      "atk": 254
    },
    {
      "hp": 1971,
      "atk": 288
    },
    {
      "hp": 2208,
      "atk": 323
    },
    {
      "hp": 2444,
      "atk": 357
    },
    {
      "hp": 2681,
      "atk": 392
    },
    {
      "hp": 2917,
      "atk": 427
    },
    {
      "hp": 3501,
      "atk": 512
    },
    {
      "hp": 3737,
      "atk": 546
    },
    {
      "hp": 3974,
      "atk": 581
    },
    {
      "hp": 4210,
      "atk": 616
    },
    {
      "hp": 4447,
      "atk": 650
    },
    {
      "hp": 4684,
      "atk": 685
    },
    {
      "hp": 4920,
      "atk": 719
    },
    {
      "hp": 5157,
      "atk": 754
    },
    {
      "hp": 5393,
      "atk": 789
    },
    {
      "hp": 5630,
      "atk": 823
    },
    {
      "hp": 5866,
      "atk": 858
    },
    {
      "hp": 7041,
      "atk": 1029
    },
    {
      "hp": 7278,
      "atk": 1064
    },
    {
      "hp": 7514,
      "atk": 1099
    },
    {
      "hp": 7751,
      "atk": 1133
    },
    {
      "hp": 7987,
      "atk": 1168
    },
    {
      "hp": 8224,
      "atk": 1202
    },
    {
      "hp": 8460,
      "atk": 1237
    },
    {
      "hp": 8697,
      "atk": 1272
    },
    {
      "hp": 8933,
      "atk": 1306
    },
    {
      "hp": 9170,
      "atk": 1341
    },
    {
      "hp": 9407,
      "atk": 1375
    },
    {
      "hp": 11291,
      "atk": 1651
    },
    {
      "hp": 11528,
      "atk": 1685
    },
    {
      "hp": 11764,
      "atk": 1720
    },
    {
      "hp": 12001,
      "atk": 1755
    },
    {
      "hp": 12237,
      "atk": 1789
    },
    {
      "hp": 12474,
      "atk": 1824
    },
    {
      "hp": 12710,
      "atk": 1858
    },
    {
      "hp": 12947,
      "atk": 1893
    },
    {
      "hp": 13183,
      "atk": 1927
    },
    {
      "hp": 13420,
      "atk": 1962
    },
    {
      "hp": 13656,
      "atk": 1997
    },
    {
      "hp": 16385,
      "atk": 2396
    },
    {
      "hp": 16621,
      "atk": 2430
    },
    {
      "hp": 16858,
      "atk": 2465
    },
    {
      "hp": 17094,
      "atk": 2499
    },
    {
      "hp": 17331,
      "atk": 2534
    },
    {
      "hp": 17567,
      "atk": 2568
    },
    {
      "hp": 17804,
      "atk": 2603
    },
    {
      "hp": 18040,
      "atk": 2638
    },
    {
      "hp": 18277,
      "atk": 2672
    },
    {
      "hp": 18514,
      "atk": 2707
    },
    {
      "hp": 18750,
      "atk": 2741
    },
    {
      "hp": 22503,
      "atk": 3290
    },
    {
      "hp": 22740,
      "atk": 3325
    },
    {
      "hp": 22976,
      "atk": 3359
    },
    {
      "hp": 23213,
      "atk": 3394
    },
    {
      "hp": 23449,
      "atk": 3428
    },
    {
      "hp": 23686,
      "atk": 3463
    },
    {
      "hp": 23922,
      "atk": 3498
    },
    {
      "hp": 24159,
      "atk": 3532
    },
    {
      "hp": 24396,
      "atk": 3567
    },
    {
      "hp": 24632,
      "atk": 3601
    },
    {
      "hp": 24869,
      "atk": 3636
    },
    {
      "hp": 29844,
      "atk": 4363
    },
    {
      "hp": 30081,
      "atk": 4398
    },
    {
      "hp": 30317,
      "atk": 4433
    },
    {
      "hp": 30554,
      "atk": 4467
    },
    {
      "hp": 30790,
      "atk": 4502
    },
    {
      "hp": 31027,
      "atk": 4536
    },
    {
      "hp": 31263,
      "atk": 4571
    },
    {
      "hp": 31500,
      "atk": 4605
    },
    {
      "hp": 31736,
      "atk": 4640
    },
    {
      "hp": 31973,
      "atk": 4675
    },
    {
      "hp": 32209,
      "atk": 4709
    },
    {
      "hp": 38651,
      "atk": 5651
    },
    {
      "hp": 38888,
      "atk": 5686
    },
    {
      "hp": 39124,
      "atk": 5720
    },
    {
      "hp": 39361,
      "atk": 5755
    },
    {
      "hp": 39597,
      "atk": 5789
    },
    {
      "hp": 39834,
      "atk": 5824
    },
    {
      "hp": 40071,
      "atk": 5859
    },
    {
      "hp": 40307,
      "atk": 5893
    },
    {
      "hp": 40544,
      "atk": 5928
    },
    {
      "hp": 40780,
      "atk": 5962
    },
    {
      "hp": 41017,
      "atk": 5997
    },
    {
      "hp": 49217,
      "atk": 7196
    },
    {
      "hp": 49453,
      "atk": 7230
    },
    {
      "hp": 49690,
      "atk": 7265
    },
    {
      "hp": 49927,
      "atk": 7300
    },
    {
      "hp": 50163,
      "atk": 7334
    },
    {
      "hp": 50400,
      "atk": 7369
    },
    {
      "hp": 50636,
      "atk": 7403
    },
    {
      "hp": 50873,
      "atk": 7438
    },
    {
      "hp": 51109,
      "atk": 7472
    },
    {
      "hp": 51346,
      "atk": 7507
    },
    {
      "hp": 51582,
      "atk": 7542
    },
    {
      "hp": 51582,
      "atk": 7542
    }
  ],
  "upgrades": [],
  "skillUpgrades": []
};
