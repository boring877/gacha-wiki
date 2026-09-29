// Allie Character Data - Stella Sora
// Generated from live game tables (v1.16.0 update (Sep 28 2026))

export const Allie = {
  "id": 139,
  "name": "Allie",
  "icon": "/stella/assets/Allie.png",
  "portrait": "/stella/assets/Allie_portrait.png",
  "background": "/stella/assets/Allie_background.png",
  "description": "As the mother of the orphanage, Allie wields her long blade to protect her children at all costs.",
  "voiceActor": {
    "cn": "Zeng Tong",
    "cnLocalized": "曾彤",
    "jp": "Erika Ishitobi",
    "jpLocalized": "石飛恵里花"
  },
  "birthday": "3.21",
  "grade": 5,
  "element": "Aqua",
  "position": "Vanguard",
  "attackType": "Melee",
  "style": "Steady",
  "faction": "Freelance Trekker",
  "tags": [
    "Vanguard",
    "Steady",
    "Freelance Trekker"
  ],
  "dateEvents": [
    {
      "name": "Call Your Parents",
      "icon": "DatingSPCG_139301",
      "clue": "Visit the Academy to unlock",
      "secondChoice": "The professor's glare is so intense you don't dare correct him. You grit your teeth and follow him into the classroom.\nThe second you step through the door, he puts you in charge of handing out the exams and announces that the pop quiz is starting.\nYou fully intend to ditch through the back door the moment the last paper leaves your hand, but he catches you in the act. He marches you straight back to a seat, then casually hands you an exam paper and a pen."
    },
    {
      "name": "The Charcoal Cake",
      "icon": "DatingSPCG_139302",
      "clue": "Visit the Dessert Shop to unlock",
      "secondChoice": "With a few professional pastry chefs walking you through it, the two of you get straight to work.\nSurprisingly, the prep phase actually goes off without a hitch. Whipping the cream, folding the dough, mixing in the eggs and milk, no disasters whatsoever.\nSo you both slide your cake batter into the oven."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Blossom Porcelain Cup",
      "Deluxe Blower",
      "Exquisite Blower",
      "Fragrant Ice Delight",
      "Gilded Ceramic Bowl",
      "Mystic Potion Kettle",
      "Portable Blower",
      "Summer Chill Crushed Ice",
      "Sweet IceFurry"
    ],
    "hates": [
      "Emerging Talent",
      "Rising Star",
      "Shining Star"
    ]
  },
  "normalAttack": {
    "name": "Housework Slash",
    "icon": "Icon/Skill/13901_Normal",
    "description": "Wields the long blade to deal DMG multiple times.\u000bStrike 1: <color=#fb8037>&Param1&</color> and <color=#fb8037>&Param2&</color> of ATK as Aqua Auto Attack DMG.\u000bStrike 2: <color=#fb8037>&Param3&</color> of ATK as Aqua Auto Attack DMG.\u000bStrike 3: <color=#fb8037>&Param4& x2</color> of ATK as Aqua Auto Attack DMG.\u000bStrike 4: <color=#fb8037>&Param5&</color>, <color=#fb8037>&Param6&</color>, and <color=#fb8037>&Param7&</color> of ATK as Aqua Auto Attack DMG.\u000bStrike 5: <color=#fb8037>&Param8&</color> of ATK as Aqua Auto Attack DMG.",
    "shortDescription": "Wields the long blade to deal DMG multiple times.",
    "params": [
      "17%/19%/22%/30%/32%/34%/39%/41%/43%/47%/51%/54%/58%",
      "19%/21%/24%/33%/35%/38%/43%/46%/48%/52%/56%/60%/64%",
      "29%/33%/37%/51%/55%/59%/67%/70%/74%/81%/87%/93%/98%",
      "6%/7%/8%/11%/12%/13%/15%/16%/17%/19%/20%/21%/23%",
      "17%/20%/22%/30%/33%/35%/40%/42%/45%/49%/52%/56%/59%",
      "19%/22%/25%/33%/36%/39%/44%/46%/49%/53%/57%/61%/65%",
      "20%/24%/27%/36%/39%/42%/48%/50%/53%/58%/62%/66%/70%",
      "28%/33%/37%/50%/54%/58%/66%/70%/73%/80%/86%/92%/97%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Sweeping Rush",
    "icon": "Icon/Skill/13901_Skill_Main",
    "description": "Dashes to the target's location, dealing <color=#fb8037>&Param1& x3</color> and <color=#fb8037>&Param6& x3</color> of ATK as AoE Aqua Skill DMG, which can trigger ##Aqua Mark#1018# and generate ##Tidal Wave#4053#.\u000bWhen Sweeping Rush (Main Skill) deals DMG, obtains 1 Sweep Mark: increases own &Param2& by <color=#fb8037>&Param3&</color> for &Param4&s. Up to 3 Sweep Marks can exist, and this effect grants at most 1 Sweep Mark each time.",
    "shortDescription": "Dashes to the target's location, dealing AoE Aqua Skill DMG, which can trigger ##Aqua Mark#1018#.\u000bWhen Sweeping Rush (Main Skill) deals DMG, obtains 1 Sweep Mark: increases own &Param2&.",
    "params": [
      "248%/285%/322%/434%/469%/503%/573%/603%/632%/692%/741%/791%/841%",
      "",
      "",
      "12",
      "3",
      "217%/250%/282%/380%/410%/440%/501%/527%/553%/605%/649%/692%/736%",
      "",
      "",
      "63%/82%/101%/120%/139%/157%/176%/195%/214%"
    ],
    "hints": {
      "1018": {
        "id": 1018,
        "name": "Aqua Mark",
        "description": "The generic name for all Aqua Marks.\u000bWhen triggered by specific Aqua Trekkers' attacks, the status is removed, and a special effect is activated."
      },
      "4053": {
        "id": 4053,
        "name": "Tide"
      }
    },
    "cooldown": "7s"
  },
  "supportSkill": {
    "name": "Sweeping Slashes",
    "icon": "Icon/Skill/13901_Skill_Support",
    "description": "Wields the long blade to perform Cycling Slashes, dealing <color=#fb8037>&Param1& x4</color> of ATK as AoE Aqua Skill DMG. Then unleashes a powerful Finishing Slash and forms ice crystals, dealing <color=#fb8037>&Param2&</color> and <color=#fb8037>&Param3&</color> of ATK as AoE Aqua Skill DMG. When the Support Skill deals DMG, it can trigger ##Aqua Mark#1018# and generate ##Tide#4053#.",
    "shortDescription": "Wields the long blade to perform Cycling Slashes, dealing AoE Aqua Skill DMG. Then unleashes a powerful Finishing Slash and forms ice crystals, dealing AoE Aqua Skill DMG. When the Support Skill deals DMG, it can trigger ##Aqua Mark#1018#.",
    "params": [
      "88%/101%/114%/154%/166%/178%/203%/214%/224%/245%/263%/280%/298%",
      "158%/182%/206%/277%/299%/321%/365%/384%/403%/441%/473%/505%/536%",
      "193%/222%/251%/338%/365%/392%/446%/470%/493%/539%/578%/617%/655%",
      "",
      "",
      "",
      "",
      "",
      "63%/82%/101%/120%/139%/157%/176%/195%/214%"
    ],
    "hints": {
      "1018": {
        "id": 1018,
        "name": "Aqua Mark",
        "description": "The generic name for all Aqua Marks.\u000bWhen triggered by specific Aqua Trekkers' attacks, the status is removed, and a special effect is activated."
      },
      "4053": {
        "id": 4053,
        "name": "Tide"
      }
    },
    "cooldown": "12s"
  },
  "ultimate": {
    "name": "Deep Sweep",
    "icon": "Icon/Skill/13901_Ultra_A",
    "description": "Deep Sweep: Dust Off (Ultimate Phase 1): Deals <color=#fb8037>&Param1&</color> of ATK as AoE Aqua Ultimate DMG, and enters Sweeping Stance, increasing own &Param2& by <color=#fb8037>&Param3&</color> for &Param4&s. After casting Deep Sweep: Dust Off, unlocks Deep Sweep: Restore Order (Ultimate Phase 2) within a short time.\u000bDeep Sweep: Restore Order (Ultimate Phase 2): Pursues the target, dealing <color=#fb8037>&Param5&</color> of ATK as AoE Aqua Ultimate DMG.\u000bWhen the Ultimate deals DMG, it can trigger ##Aqua Mark#1018# and generate ##Tide#4053#.",
    "shortDescription": "Deep Sweep: Dust Off (Ultimate Phase 1): Deals AoE Aqua Ultimate DMG and enters Sweeping Stance, increasing own &Param2&. After casting Deep Sweep: Dust Off, unlocks Deep Sweep: Restore Order (Ultimate Phase 2) within a short time.\u000bDeep Sweep: Restore Order (Ultimate Phase 2): Pursues the target, dealing AoE Aqua Ultimate DMG.\u000bWhen the Ultimate deals DMG, it can trigger ##Aqua Mark#1018#.",
    "params": [
      "423%/486%/550%/740%/799%/859%/977%/1028%/1078%/1180%/1265%/1349%/1434%",
      "ATK",
      "11%/14%/18%/27%/30%/33%/40%/42%/45%",
      "15",
      "358%/412%/466%/627%/677%/728%/828%/871%/914%/1000%/1072%/1143%/1215%",
      "",
      "",
      "",
      "63%/82%/101%/120%/139%/157%/176%/195%/214%"
    ],
    "hints": {
      "1018": {
        "id": 1018,
        "name": "Aqua Mark",
        "description": "The generic name for all Aqua Marks.\u000bWhen triggered by specific Aqua Trekkers' attacks, the status is removed, and a special effect is activated."
      },
      "4053": {
        "id": 4053,
        "name": "Tide"
      }
    },
    "cooldown": "40s",
    "energy": 275
  },
  "talents": [
    {
      "name": "Special Cleaning Tools",
      "talents": [
        {
          "name": "Special Cleaning Tools",
          "description": "Increases Allie's Skill Crit Rate by <color=#0abec5>&Param1&</color>. While Sweeping Stance of Deep Sweep: Dust Off (Ultimate Phase 1) is active, increases Aqua DMG dealt by Allie by <color=#0abec5>&Param2&</color>.",
          "params": [
            "15%",
            "40%"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
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
            "690"
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
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
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
            "690"
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
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Sewing Kit",
      "talents": [
        {
          "name": "Sewing Kit",
          "description": "When Allie casts Deep Sweep: Restore Order (Ultimate Phase 2), increases Skill DMG by <color=#0abec5>&Param1&</color> for &Param2&s. When she casts Deep Sweep: Dust Off (Ultimate Phase 1), increases Mark DMG by <color=#0abec5>&Param3&</color> for &Param4&s.",
          "params": [
            "36%",
            "15",
            "66%",
            "15"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
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
            "690"
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
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
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
            "690"
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
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Morning Kiss",
      "talents": [
        {
          "name": "Morning Kiss",
          "description": "When any Trekker applies ##Aqua Mark#1018# on a target, increases Allie's ATK by <color=#0abec5>&Param1&</color> for &Param2&s, up to &Param3& stacks.",
          "params": [
            "6%",
            "6",
            "4"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
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
            "690"
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
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
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
            "690"
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
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Afternoon Sweep",
      "talents": [
        {
          "name": "Afternoon Sweep",
          "description": "When Allie triggers ##Aqua Mark#1018# or casts Deep Sweep (Ultimate), increases her Skill DMG by <color=#0abec5>&Param1&</color> and Mark DMG by <color=#0abec5>&Param2&</color> for &Param3&s, up to &Param4& stacks.",
          "params": [
            "3%",
            "6%",
            "8",
            "5"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
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
            "690"
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
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
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
            "690"
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
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "All-Night Watch",
      "talents": [
        {
          "name": "All-Night Watch",
          "description": "Increases Allie's Aqua DMG dealt to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
          "params": [
            "30%"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
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
            "690"
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
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60"
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
            "690"
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
