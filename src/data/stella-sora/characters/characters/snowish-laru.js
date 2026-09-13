// Snowish Laru Character Data - Stella Sora
// Generated from live game tables (Sep 8 2026 patch, v1.15.0)

export const SnowishLaru = {
  "id": 158,
  "name": "Snowish Laru",
  "icon": "/stella/assets/Snowish_Laru.png",
  "portrait": "/stella/assets/Snowish_Laru_portrait.png",
  "background": "/stella/assets/Snowish_Laru_background.png",
  "description": "Laru, dressed as the Holy Night Messenger, is on a special mission for the Snow Wish Festival. In the chiming bells at midnight, tin soldiers and saluting cannons will bear witness to a shimmering miracle.",
  "voiceActor": {
    "cn": "Song Yuanyuan",
    "cnLocalized": "宋媛媛",
    "jp": "Aimi Tanaka",
    "jpLocalized": "田中あいみ"
  },
  "birthday": "8.20",
  "grade": 5,
  "element": "Ignis",
  "position": "Versatile",
  "attackType": "Melee",
  "style": "Creative",
  "faction": "Grace Imperium",
  "tags": [
    "Versatile",
    "Creative",
    "Grace Imperium"
  ],
  "dateEvents": [
    {
      "name": "The Photo",
      "icon": "DatingSPCG_158301",
      "clue": "Visit the Market to unlock",
      "secondChoice": "The market is bustling as always, still brimming with the festive atmosphere of Snowish Festival as decorations hang everywhere.\n\nOut of nowhere, Laru finds a reindeer headband identical to hers.\n\nShe looks at you expectantly, until you finally give in and put it on."
    },
    {
      "name": "Where Are the Fish?",
      "icon": "DatingSPCG_158302",
      "clue": "Visit the Port to unlock",
      "secondChoice": "Laru takes you to a platform where ships dock. Under the dim lights, she proudly and confidently tells you something.\n\n\"I had someone in the Trekker Association work it out for me that luminous fish will be riding the current and passing by here tonight. This time, I'll make sure you see fish that actually glow!\"\n\nAs she speaks, she takes out her timekeeping artifact, counting down."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Deluxe Blower",
      "Emerging Talent",
      "Exquisite Blower",
      "Fragrant Ice Delight",
      "Portable Blower",
      "Rising Star",
      "Shining Star",
      "Summer Chill Crushed Ice",
      "Sweet IceFurry"
    ],
    "hates": [
      "Cosmic Form",
      "Moonlit Companion",
      "Stellanite Enchantment"
    ]
  },
  "normalAttack": {
    "name": "Snowish Warrior",
    "icon": "Icon/Skill/15801_Normal",
    "description": "Wields the whip to perform multiple attacks.\u000bStrike 1: <color=#fb8037>&Param1&</color> of ATK as Ignis Auto Attack DMG.\u000bStrike 2: <color=#fb8037>&Param2&</color> of ATK as Ignis Auto Attack DMG.\u000bStrike 3: <color=#fb8037>&Param3&</color> of ATK as Ignis Auto Attack DMG.\u000bStrike 4: <color=#fb8037>&Param4& x5</color> of ATK as Ignis Auto Attack DMG.\u000bStrike 5: <color=#fb8037>&Param5& x3</color> of ATK as Ignis Auto Attack DMG.\u000bUses toy ##Colonel Walnut#4020# to attack the target. Its Auto Attack deals <color=#fb8037>&Param6&</color> of ATK as Ignis Minion DMG and grants 1 stack of Morale.\u000bWhen ##Colonel Walnut#4020#'s Morale reaches &Param7& stacks, it evolves into ##General Curly#4021#. Its Auto Attack deals <color=#fb8037>&Param8& x2</color> of ATK as Ignis Minion DMG and consumes 4 stacks of Morale.\u000bWhen ##General Curly#4021#'s Morale reaches zero, it devolves into ##Colonel Walnut#4020#.",
    "shortDescription": "Wields the whip to perform multiple attacks.\u000bCarries toy: ##Colonel Walnut#4020# to attack targets.\u000bWhen ##Colonel Walnut#4020#'s Morale is fully stacked, it evolves into toy: ##General Curly#4021#.",
    "params": [
      "8%/9%/11%/14%/16%/17%/19%/20%/21%/23%/25%/27%/28%",
      "11%/13%/15%/20%/22%/23%/26%/28%/29%/32%/34%/37%/39%",
      "11%/13%/15%/20%/22%/23%/26%/28%/29%/32%/34%/37%/39%",
      "3%/3%/4%/5%/5%/6%/7%/7%/7%/8%/9%/9%/10%",
      "4%/5%/5%/7%/8%/8%/10%/10%/11%/12%/12%/13%/14%",
      "41%/47%/54%/72%/78%/84%/96%/101%/106%/116%/124%/132%/141%",
      "20",
      "155%/178%/201%/271%/292%/314%/357%/376%/394%/431%/462%/493%/524%"
    ],
    "hints": {
      "4020": {
        "id": 4020,
        "name": "Colonel Walnut",
        "description": "Colonel Walnut, summoned by Snowish Laru as the Main Trekker, inherits 100% of Snowish Laru's ATK and is immune to DMG permanently."
      },
      "4021": {
        "id": 4021,
        "name": "General Curly",
        "description": "General Curly, summoned by Snowish Laru as the Main Trekker, inherits 100% of Snowish Laru's ATK and is immune to DMG permanently."
      }
    }
  },
  "skill": {
    "name": "Whip Assault",
    "icon": "Icon/Skill/15801_Skill_Main",
    "description": "Whips forward to attack the target, dealing <color=#fb8037>&Param1&</color> of ATK as AoE Ignis Skill DMG and granting 1 stack of Morale to the toys. If the toys are within the Main Skill's Attack Range, they gain 1 additional stack of Morale.\u000bWhen casting the Main Skill, toys will cast the Synergy Skill to attack the target.\u000b##Colonel Walnut#4020# smashes the ground, dealing <color=#fb8037>&Param3&</color> of ATK as AoE Ignis Minion DMG, and gains 1 stack of Morale.\u000b##General Curly#4021# swings dual blades, dealing <color=#fb8037>&Param4& x2</color> of ATK as AoE Ignis Minion DMG.\u000b&Param2& (Main Skill) can trigger ##Ignis Mark#1016# and inflict Conflagration, dealing &Param5& of ATK as Ignis Mark DMG.",
    "shortDescription": "Whips forward to attack the target, boosting the toys' Morale and triggering the Synergy Skill of the toys.\u000bThe Main Skill can trigger ##Ignis Mark#1016# and inflict Conflagration.",
    "params": [
      "85%/98%/111%/150%/162%/174%/197%/208%/218%/239%/256%/273%/290%",
      "Whip Assault",
      "115%/132%/149%/201%/217%/233%/265%/279%/293%/321%/344%/367%/390%",
      "241%/278%/314%/422%/456%/490%/558%/587%/615%/673%/722%/770%/818%",
      "40%/52%/64%/76%/88%/100%/112%/124%/136%"
    ],
    "hints": {
      "4020": {
        "id": 4020,
        "name": "Colonel Walnut",
        "description": "Colonel Walnut, summoned by Snowish Laru as the Main Trekker, inherits 100% of Snowish Laru's ATK and is immune to DMG permanently."
      },
      "4021": {
        "id": 4021,
        "name": "General Curly",
        "description": "General Curly, summoned by Snowish Laru as the Main Trekker, inherits 100% of Snowish Laru's ATK and is immune to DMG permanently."
      },
      "1016": {
        "id": 1016,
        "name": "Ignis Mark",
        "description": "The generic name for all Ignis Marks.\u000bWhen triggered by specific Ignis Trekkers' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "8s"
  },
  "supportSkill": {
    "name": "Courtesy Before Aggression",
    "icon": "Icon/Skill/15801_Skill_Support",
    "description": "Snowish Laru commands the turret to fire 4 Gift Box Shells at the target. Upon hitting the target, each shell deals <color=#fb8037>&Param1&</color> of ATK as Ignis Skill DMG and then explodes to deal <color=#fb8037>&Param2&</color> of ATK as AoE Ignis Skill DMG.\u000bThe Gift Box Shell summons ##Colonel Walnut#4023# near the target.\u000b##Colonel Walnut#4023# attacks the target, dealing <color=#fb8037>&Param3&</color> of ATK as Ignis Minion DMG.\u000bGift Box Shells inflict ##Ignis Mark: Sacred Flame#2013# upon dealing DMG.",
    "shortDescription": "Commands the turret to fire Gift Box Shells at the target, dealing DMG and inflicting ##Ignis Mark: Sacred Flame#2013#.\u000bThe Gift Box Shell summons ##Colonel Walnut#4023# upon explosion to continuously attack the target.",
    "params": [
      "168%/193%/218%/293%/317%/340%/387%/408%/428%/468%/485%/501%/518%",
      "119%/137%/154%/208%/225%/241%/274%/289%/303%/331%/343%/355%/367%",
      "17%/19%/22%/30%/32%/34%/39%/41%/43%/47%/49%/51%/52%"
    ],
    "hints": {
      "4023": {
        "id": 4023,
        "name": "Colonel Walnut",
        "description": "Colonel Walnut, summoned by Snowish Laru as the Support Trekker, inherits 100% of Snowish Laru's ATK for 10s, during which it is immune to DMG. Up to 4 can exist at the same time."
      },
      "2013": {
        "id": 2013,
        "name": "Ignis Mark: Sacred Flame",
        "description": "Some Ignis characters apply a special status to the target for 10 sec.\u000bWhen triggered by specific Ignis characters' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "18s"
  },
  "ultimate": {
    "name": "Sweet Dream Waltz",
    "icon": "Icon/Skill/15801_Ultra",
    "description": "Transforms into toy: Dame Laru, gaining a shield equal to &Param7& of Base Max HP for &Param6&s.\u000bDame Laru cannot dodge or dash. Her Auto Attacks become shots that pierce targets, dealing <color=#fb8037>&Param2&</color> of ATK as Ignis Ultimate DMG. The Main and Support skills are replaced by Candy Barrage.\u000bCandy Barrage deals <color=#fb8037>&Param3& x5</color> of ATK as AoE Ignis Ultimate DMG to targets in the front with a 4s cooldown.",
    "shortDescription": "Transforms into toy: Dame Laru.\u000bAfter the transformation, her Auto Attacks become ranged shots, and her Main and Support Skills become Candy Barrage.",
    "params": [
      "",
      "45%/52%/59%/80%/86%/92%/105%/111%/116%/127%/131%/136%/141%",
      "18%/21%/23%/31%/34%/36%/41%/44%/46%/50%/52%/54%/55%",
      "Sweet Dream Waltz",
      "40%/52%/64%/76%/88%/100%/112%/124%/136%",
      "12",
      "35%"
    ],
    "hints": {},
    "cooldown": "40s",
    "energy": 240
  },
  "talents": [
    {
      "name": "Nutcracker",
      "talents": [
        {
          "name": "Nutcracker",
          "description": "When Snowish Laru's summoned toys are present on the battlefield, increases the Crit Rate of all Ignis Trekkers' Skills by <color=#0abec5>&Param1&</color>.",
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
          "name": "Ultimate DMG Boost",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Ultimate DMG Boost",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Holy Night Gift",
      "talents": [
        {
          "name": "Holy Night Gift",
          "description": "When any Trekker in the squad triggers ##Ignis Mark#1016#, increases Snowish Laru's Skill DMG by <color=#0abec5>&Param1&</color> and her summoned toys' Minion DMG on the battlefield by <color=#0abec5>&Param2&</color>, lasting &Param3&s.",
          "params": [
            "30%",
            "30%",
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
          "name": "Ultimate DMG Boost",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Ultimate DMG Boost",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Block Paradise",
      "talents": [
        {
          "name": "Block Paradise",
          "description": "Increases Snowish Laru and her minions' Ignis DMG dealt to an elite or higher-tier target by <color=#0abec5>&Param1&</color>.",
          "params": [
            "0.18%"
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
          "name": "Ultimate DMG Boost",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Ultimate DMG Boost",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Queen's Party",
      "talents": [
        {
          "name": "Queen's Party",
          "description": "When Snowish Laru has a shield, increases her Ultimate DMG by <color=#0abec5>&Param1&</color>.",
          "params": [
            "80%"
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
          "name": "Ultimate DMG Boost",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Ultimate DMG Boost",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Dreams Replayed",
      "talents": [
        {
          "name": "Dreams Replayed",
          "description": "When Snowish Laru casts the Ultimate, increases the Crit Rate of all Ignis Trekkers in the squad by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "10%",
            "12"
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
          "name": "Ultimate DMG Boost",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Ultimate DMG Boost",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
