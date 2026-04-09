export const Fuyuka = {
  "id": 134,
  "name": "Fuyuka",
  "icon": "/stella/assets/Fuyuka.png",
  "portrait": "/stella/assets/Fuyuka_portrait.png",
  "background": "/stella/assets/Fuyuka_background.png",
  "variants": {
    "base": "/stella/assets/Fuyuka_base.png",
    "q": "/stella/assets/Fuyuka_q.png",
    "gd": "/stella/assets/Fuyuka_gd.png",
    "goods": "/stella/assets/Fuyuka_goods.png",
    "qs": "/stella/assets/Fuyuka_qs.png",
    "xl": "/stella/assets/Fuyuka_xl.png",
    "gc": "/stella/assets/Fuyuka_gc.png",
    "sk": "/stella/assets/Fuyuka_portrait.png",
    "xxl": "/stella/assets/Fuyuka.png",
    "qm": "/stella/assets/Fuyuka_qm.png",
    "l": "/stella/assets/Fuyuka_l.png",
    "s": "/stella/assets/Fuyuka_s.png"
  },
  "description": "Though somewhat shy, she has formidable strength. It's hard to imagine that her heavy gauntlets are in fact \"restraints\" for her natural immense power.",
  "voiceActor": {
    "cn": "Liu Yilei",
    "cnLocalized": "刘一蕾",
    "jp": "Chika Anzai",
    "jpLocalized": "安済知佳"
  },
  "birthday": "1.31",
  "grade": 5,
  "element": "Ignis",
  "position": "Vanguard",
  "attackType": "Melee",
  "style": "Inquisitive",
  "faction": "Petal Bloom",
  "tags": [
    "Vanguard",
    "Inquisitive",
    "Petal Bloom"
  ],
  "dateEvents": [
    {
      "name": "Manager for a Day",
      "icon": "DatingSPCG_134301",
      "clue": "Visit the Dessert Shop to unlock",
      "secondChoice": "Haven't had enough. Let's order some more."
    },
    {
      "name": "The Brave One's Proposition",
      "icon": "DatingSPCG_134302",
      "clue": "Visit the Cave to unlock",
      "secondChoice": "Don't go any deeper. Stop here and take a rest."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Card Photo Capturer",
      "Reflective Photo Capturer",
      "Ultra-Precision Photo Capturer",
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
    "name": "Blitz Combo",
    "icon": "Icon/Skill/13401_Normal",
    "description": "Punches and kicks the target.\u000bStrike 1: <color=#fb8037>&Param1& of ATK x2</color> as Ignis DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Ignis DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK x2</color> as Ignis DMG.\u000bStrike 4: <color=#fb8037>&Param4& of ATK x5</color> as Ignis DMG.\u000bStrike 5: <color=#fb8037>&Param5& of ATK x2</color> as Ignis DMG.\u000bCasts Fiery Punches when ammo is available.\u000bStrike 1: <color=#fb8037>&Param6& of ATK</color> as Ignis DMG.\u000bStrike 2: <color=#fb8037>&Param7& of ATK</color> as Ignis DMG.\u000bStrike 3: <color=#fb8037>&Param8& of ATK</color> as Ignis DMG.\u000bBlitz Combo and Fiery Punches deal <color=#fb8037>&Param9& of ATK</color> as AoE Ignis DMG to other targets behind the target hit by them.",
    "shortDescription": "Punches rapidly, dealing multiple phases of DMG.\u000bCasts Fiery Punches when ammo is available.",
    "params": [
      "10.2%/11.8%/13.3%/17.9%/19.3%/20.8%/23.6%/24.8%/26.1%/28.5%/30.6%/32.6%/34.7%",
      "25%/29%/33%/44%/48%/51%/58%/61%/64%/70%/75%/80%/85%",
      "19.8%/22.7%/25.7%/34.6%/37.3%/40.1%/45.6%/48%/50.4%/55.1%/59.1%/63%/67%",
      "8.9%/10.2%/11.5%/15.5%/16.7%/18%/20.5%/21.5%/22.6%/24.7%/26.5%/28.2%/30%",
      "40%/45%/51%/69%/75%/80%/91%/96%/101%/110%/118%/126%/134%",
      "79%/91%/102%/138%/149%/160%/182%/191%/201%/220%/235%/251%/267%",
      "79%/91%/102%/138%/149%/160%/182%/191%/201%/220%/235%/251%/267%",
      "115%/133%/150%/202%/218%/234%/267%/281%/294%/322%/345%/368%/391%",
      "46%/53%/60%/81%/88%/94%/107%/113%/118%/129%/138%/148%/157%",
      "51%/66%/81%/96%/112%/127%/142%/157%/172%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Ignis Infusion",
    "icon": "Icon/Skill/13401_Skill_Main",
    "description": "Strikes a Soaring Dragon Punch, dealing <color=#fb8037>&Param1& of ATK</color> as Ignis DMG, then slams the ground for an additional <color=#fb8037>&Param3& of ATK</color> as Ignis DMG and fully reloads ammo. Magazine capacity: 3 rounds.\u000b\"&Param2&\" (Main Skill) can trigger ##Ignis Mark#1016#, dealing &Param4& of ATK as Ignis Mark DMG to nearby targets.",
    "shortDescription": "Strikes a Soaring Dragon Punch that deals two instances of DMG and receives ammo.\u000bThe Main Skill can trigger ##Ignis Mark#1016#.",
    "params": [
      "153%/176%/199%/267%/289%/310%/353%/371%/389%/426%/457%/487%/518%",
      "Ignis Infusion",
      "229%/263%/298%/401%/433%/465%/529%/557%/584%/639%/685%/731%/776%",
      "51%/66%/81%/96%/112%/127%/142%/157%/172%"
    ],
    "hints": {
      "1016": {
        "id": 1016,
        "name": "Ignis Mark",
        "description": "The generic name for all Ignis Marks.\u000bWhen triggered by specific Ignis Trekkers' attacks, the status is removed, and a special effect is activated.",
        "params": []
      }
    },
    "cooldown": "11s"
  },
  "supportSkill": {
    "name": "Eruption Punch",
    "icon": "Icon/Skill/13401_Skill_Support",
    "description": "Charges at the target and strikes a gale-like punch, dealing <color=#fb8037>&Param1& of ATK x11</color> as AoE Ignis DMG.\u000b&Param2& (Support Skill) can trigger ##Ignis Mark#1016#, dealing &Param3& of ATK as Ignis Mark DMG to nearby targets.",
    "shortDescription": "Charges at the target and strikes a gale-like punch, dealing DMG over time.\u000bThe Support Skill can trigger ##Ignis Mark#1016#.",
    "params": [
      "54%/62%/70%/94%/101%/109%/124%/130%/137%/149%/160%/171%/182%",
      "Eruption Punch",
      "51%/66%/81%/96%/112%/127%/142%/157%/172%"
    ],
    "hints": {
      "1016": {
        "id": 1016,
        "name": "Ignis Mark",
        "description": "The generic name for all Ignis Marks.\u000bWhen triggered by specific Ignis Trekkers' attacks, the status is removed, and a special effect is activated.",
        "params": []
      }
    },
    "cooldown": "14s"
  },
  "ultimate": {
    "name": "Blaze Unsealed",
    "icon": "Icon/Skill/13401_Ultra",
    "description": "Fuyuka lifts the seal and fires her gauntlet, dealing <color=#fb8037>&Param1& of ATK</color> as Ignis DMG.\u000bThen, Fuyuka keeps attacking nearby targets, dealing <color=#fb8037>&Param2& of ATK x5</color> and <color=#fb8037>&Param3& of ATK</color> as Ignis DMG.\u000b\"&Param4&\" (Ultimate) can trigger ##Ignis Mark#1016#, dealing &Param5& of ATK as Ignis Mark DMG to nearby targets.",
    "shortDescription": "Fires a gauntlet, lifts the seal and keeps striking the target.\u000bThe Ultimate can trigger ##Ignis Mark#1016#.",
    "params": [
      "413%/475%/537%/723%/781%/839%/954%/1004%/1053%/1153%/1235%/1318%/1400%",
      "280%/322%/364%/489%/529%/568%/646%/680%/713%/780%/836%/892%/948%",
      "884%/1016%/1149%/1546%/1670%/1794%/2041%/2147%/2253%/2465%/2642%/2819%/2996%",
      "Blaze Unsealed",
      "51%/66%/81%/96%/112%/127%/142%/157%/172%"
    ],
    "hints": {
      "1016": {
        "id": 1016,
        "name": "Ignis Mark",
        "description": "The generic name for all Ignis Marks.\u000bWhen triggered by specific Ignis Trekkers' attacks, the status is removed, and a special effect is activated.",
        "params": []
      }
    },
    "cooldown": "40s",
    "energy": 325
  },
  "talents": [
    {
      "name": "Natural Strength",
      "talents": [
        {
          "name": "Natural Strength",
          "description": "When Fuyuka triggers an ##Ignis Mark#1016#, increases Crit DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "40%",
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
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
      "name": "Fist of Awakening",
      "talents": [
        {
          "name": "Fist of Awakening",
          "description": "When Fuyuka casts a skill, her Ultimate DMG is increased by <color=#0abec5>&Param1&</color>, stacking up to &Param2& times.\u000bThis effect is removed after Fuyuka casts her Ultimate.",
          "params": [
            "33%",
            "2"
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
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
      "name": "Peerless Might",
      "talents": [
        {
          "name": "Peerless Might",
          "description": "When Fuyuka casts the Ultimate, her Ignis DMG is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "25%",
            "20"
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
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
      "name": "Two Punch Hero",
      "talents": [
        {
          "name": "Two Punch Hero",
          "description": "When any Trekker applies an ##Ignis Mark#1016# to a target, Fuyuka's Ultimate DMG is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "66%",
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
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
      "name": "Learned from the Best",
      "talents": [
        {
          "name": "Learned from the Best",
          "description": "Increases Fuyuka's Ignis DMG dealt to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
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
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
      "hp": 1315,
      "atk": 114
    },
    {
      "hp": 1713,
      "atk": 149
    },
    {
      "hp": 2109,
      "atk": 183
    },
    {
      "hp": 2504,
      "atk": 217
    },
    {
      "hp": 2899,
      "atk": 252
    },
    {
      "hp": 3295,
      "atk": 286
    },
    {
      "hp": 3690,
      "atk": 320
    },
    {
      "hp": 4085,
      "atk": 355
    },
    {
      "hp": 4481,
      "atk": 389
    },
    {
      "hp": 4876,
      "atk": 423
    },
    {
      "hp": 5852,
      "atk": 508
    },
    {
      "hp": 6247,
      "atk": 542
    },
    {
      "hp": 6642,
      "atk": 577
    },
    {
      "hp": 7038,
      "atk": 611
    },
    {
      "hp": 7433,
      "atk": 645
    },
    {
      "hp": 7828,
      "atk": 680
    },
    {
      "hp": 8224,
      "atk": 714
    },
    {
      "hp": 8619,
      "atk": 748
    },
    {
      "hp": 9015,
      "atk": 782
    },
    {
      "hp": 9410,
      "atk": 817
    },
    {
      "hp": 9805,
      "atk": 851
    },
    {
      "hp": 11769,
      "atk": 1022
    },
    {
      "hp": 12164,
      "atk": 1056
    },
    {
      "hp": 12559,
      "atk": 1090
    },
    {
      "hp": 12955,
      "atk": 1125
    },
    {
      "hp": 13350,
      "atk": 1159
    },
    {
      "hp": 13745,
      "atk": 1193
    },
    {
      "hp": 14141,
      "atk": 1228
    },
    {
      "hp": 14536,
      "atk": 1262
    },
    {
      "hp": 14932,
      "atk": 1296
    },
    {
      "hp": 15327,
      "atk": 1330
    },
    {
      "hp": 15722,
      "atk": 1365
    },
    {
      "hp": 18872,
      "atk": 1638
    },
    {
      "hp": 19267,
      "atk": 1673
    },
    {
      "hp": 19662,
      "atk": 1707
    },
    {
      "hp": 20058,
      "atk": 1741
    },
    {
      "hp": 20453,
      "atk": 1775
    },
    {
      "hp": 20849,
      "atk": 1810
    },
    {
      "hp": 21244,
      "atk": 1844
    },
    {
      "hp": 21639,
      "atk": 1878
    },
    {
      "hp": 22035,
      "atk": 1913
    },
    {
      "hp": 22430,
      "atk": 1947
    },
    {
      "hp": 22825,
      "atk": 1981
    },
    {
      "hp": 27386,
      "atk": 2377
    },
    {
      "hp": 27782,
      "atk": 2412
    },
    {
      "hp": 28177,
      "atk": 2446
    },
    {
      "hp": 28572,
      "atk": 2480
    },
    {
      "hp": 28968,
      "atk": 2515
    },
    {
      "hp": 29363,
      "atk": 2549
    },
    {
      "hp": 29758,
      "atk": 2583
    },
    {
      "hp": 30154,
      "atk": 2617
    },
    {
      "hp": 30549,
      "atk": 2652
    },
    {
      "hp": 30944,
      "atk": 2686
    },
    {
      "hp": 31340,
      "atk": 2720
    },
    {
      "hp": 37613,
      "atk": 3265
    },
    {
      "hp": 38008,
      "atk": 3299
    },
    {
      "hp": 38403,
      "atk": 3334
    },
    {
      "hp": 38799,
      "atk": 3368
    },
    {
      "hp": 39194,
      "atk": 3402
    },
    {
      "hp": 39590,
      "atk": 3437
    },
    {
      "hp": 39985,
      "atk": 3471
    },
    {
      "hp": 40380,
      "atk": 3505
    },
    {
      "hp": 40776,
      "atk": 3540
    },
    {
      "hp": 41171,
      "atk": 3574
    },
    {
      "hp": 41566,
      "atk": 3608
    },
    {
      "hp": 49883,
      "atk": 4330
    },
    {
      "hp": 50278,
      "atk": 4364
    },
    {
      "hp": 50673,
      "atk": 4399
    },
    {
      "hp": 51069,
      "atk": 4433
    },
    {
      "hp": 51464,
      "atk": 4467
    },
    {
      "hp": 51859,
      "atk": 4502
    },
    {
      "hp": 52255,
      "atk": 4536
    },
    {
      "hp": 52650,
      "atk": 4570
    },
    {
      "hp": 53046,
      "atk": 4605
    },
    {
      "hp": 53441,
      "atk": 4639
    },
    {
      "hp": 53836,
      "atk": 4673
    },
    {
      "hp": 64602,
      "atk": 5608
    },
    {
      "hp": 64998,
      "atk": 5642
    },
    {
      "hp": 65393,
      "atk": 5677
    },
    {
      "hp": 65789,
      "atk": 5711
    },
    {
      "hp": 66184,
      "atk": 5745
    },
    {
      "hp": 66579,
      "atk": 5779
    },
    {
      "hp": 66975,
      "atk": 5814
    },
    {
      "hp": 67370,
      "atk": 5848
    },
    {
      "hp": 67765,
      "atk": 5882
    },
    {
      "hp": 68161,
      "atk": 5917
    },
    {
      "hp": 68556,
      "atk": 5951
    },
    {
      "hp": 82262,
      "atk": 7141
    },
    {
      "hp": 82657,
      "atk": 7175
    },
    {
      "hp": 83053,
      "atk": 7209
    },
    {
      "hp": 83448,
      "atk": 7244
    },
    {
      "hp": 83844,
      "atk": 7278
    },
    {
      "hp": 84239,
      "atk": 7312
    },
    {
      "hp": 84634,
      "atk": 7347
    },
    {
      "hp": 85030,
      "atk": 7381
    },
    {
      "hp": 85425,
      "atk": 7415
    },
    {
      "hp": 85820,
      "atk": 7450
    },
    {
      "hp": 86216,
      "atk": 7484
    },
    {
      "hp": 86216,
      "atk": 7484
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
          "id": 20023,
          "name": "Colossus Core",
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
          "id": 20023,
          "name": "Colossus Core",
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
          "id": 20023,
          "name": "Colossus Core",
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
          "id": 20023,
          "name": "Colossus Core",
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