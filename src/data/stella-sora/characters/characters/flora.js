export const Flora = {
  "id": 126,
  "name": "Flora",
  "icon": "/stella/assets/Flora.png",
  "portrait": "/stella/assets/Flora_portrait.png",
  "background": "/stella/assets/Flora_background.png",
  "variants": {
    "base": "/stella/assets/Flora_base.png",
    "q": "/stella/assets/Flora_q.png",
    "gd": "/stella/assets/Flora_gd.png",
    "goods": "/stella/assets/Flora_goods.png",
    "qs": "/stella/assets/Flora_qs.png",
    "xl": "/stella/assets/Flora_xl.png",
    "gc": "/stella/assets/Flora_gc.png",
    "sk": "/stella/assets/Flora_portrait.png",
    "xxl": "/stella/assets/Flora.png",
    "qm": "/stella/assets/Flora_qm.png",
    "l": "/stella/assets/Flora_l.png",
    "s": "/stella/assets/Flora_s.png"
  },
  "description": "Flora goes on tour in Nova to perform her original magic performance. Her fiery butterflies may seem fragile, but they are perfect fire starters that can burn her enemies into ashes.",
  "voiceActor": {
    "cn": "Mu Fei",
    "cnLocalized": "沐菲",
    "jp": "Ikumi Hasegawa",
    "jpLocalized": "長谷川育美"
  },
  "birthday": "9.5",
  "grade": 4,
  "element": "Ignis",
  "position": "Support",
  "attackType": "Ranged",
  "style": "Collector",
  "faction": "Freelance Trekker",
  "tags": [
    "Support",
    "Collector",
    "Freelance Trekker"
  ],
  "dateEvents": [
    {
      "name": "The Celebrity",
      "icon": "DatingSPCG_126301",
      "clue": "Visit the Dessert Shop to unlock",
      "secondChoice": "Haven't had enough. Let's order some more."
    },
    {
      "name": "Outside Help",
      "icon": "DatingSPCG_126302",
      "clue": "Visit the Market to unlock",
      "secondChoice": "There's a show over there."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Love Candle",
      "Blazing Wings",
      "Fiery Honeypot",
      "Stellanite Enchantment",
      "Moonlit Companion",
      "Cosmic Form"
    ],
    "hates": []
  },
  "normalAttack": {
    "name": "Three-Act Show",
    "icon": "Icon/Skill/12601_Normal",
    "description": "Consecutively spawns fiery birds to deal DMG.\u000bStrike 1: <color=#fb8037>&Param1& of ATK</color> as Ignis DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Ignis DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK</color> as Ignis DMG.",
    "shortDescription": "Consecutively spawns fiery birds to deal DMG.",
    "params": [
      "12.5%/13.7%/15%/18.7%/20%/21.2%/23.7%/25%/26.2%/28.7%/30%/31.2%/32.5%",
      "14.2%/15.7%/17.1%/21.4%/22.8%/24.2%/27%/28.5%/29.9%/32.7%/34.2%/35.6%/37%",
      "24.9%/27.4%/29.9%/37.4%/39.9%/42.4%/47.4%/49.9%/52.3%/57.3%/59.8%/62.3%/64.8%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Hat Toss",
    "icon": "Icon/Skill/12601_Skill_Main",
    "description": "Throws the top hat, dealing <color=#fb8037>&Param1& of ATK</color> as Ignis DMG every 0.5s for a total of 5s, and inflicting ##Ignis Mark: Sacred Flame#2013#. \u000bWhen casting this skill, increases the squad's &Param9& by <color=#fb8037>&Param7&</color> for &Param4&s.",
    "shortDescription": "Throws the top hat, dealing DMG multiple times and inflicting ##Ignis Mark: Sacred Flame#2013#.",
    "params": [
      "31%/34%/37%/46%/49%/52%/58%/61%/64%/70%/73%/77%/80%",
      "12%/14.4%/16.7%/23.8%/26.1%/28.5%/33.2%/35.6%/37.9%/42.6%/45%/47.3%/49.7%",
      "8",
      "Effect,LevelUp,12693002,EffectTypeParam5,Fixed",
      "Effect,LevelUp,12693002,EffectTypeParam4,Fixed",
      "12%/14.4%/16.7%/23.8%/26.1%/28.5%/33.2%/35.6%/37.9%/42.6%/45%/47.3%/49.7%",
      "Effect,LevelUp,12693002,EffectTypeParam6,HdPct",
      "ATK"
    ],
    "hints": {
      "2013": {
        "id": 2013,
        "name": "Ignis Mark: Sacred Flame",
        "description": "A special status applied to the target by some Ignis Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ignis Trekkers. When triggered, deals large AoE DMG.",
        "params": [
          "10"
        ]
      }
    },
    "cooldown": "12s"
  },
  "supportSkill": {
    "name": "Flutter Flare",
    "icon": "Icon/Skill/12601_Skill_Support",
    "description": "Spawns 3 Mindflare Butterflies and 3 Soulflare Butterflies with different effects.\u000bMindflare Butterfly: Increases the main Trekker's &Param9& by <color=#fb8037>&Param7&</color>. Each Mindflare Butterfly also boosts the main Trekker's &Param4& by &Param1& for &Param5&s.\u000bSoulflare Butterfly: Deals <color=#fb8037>&Param2& of ATK</color> as Ignis DMG and inflicts 1 stack of ##Butterfly Mark#2021# and ##Ignis Mark: Sacred Flame#2013#.",
    "shortDescription": "Spawns 3 Mindflare Butterflies and 3 Soulflare Butterflies that work on the main Trekker and the target respectively.\u000bMindflare Butterfly: Increases the main Trekker's &Param4& and &Param9&.\u000bSoulflare Butterfly: Deals Ignis DMG and inflicts ##Ignis Mark: Sacred Flame#2013#.",
    "params": [
      "3%",
      "91%/100%/109%/136%/145%/155%/173%/182%/191%/209%/218%/227%/236%",
      "3.5%",
      "Crit Rate",
      "10",
      "6.9%/8.3%/9.6%/13.7%/15%/16.4%/19.1%/20.4%/21.8%/24.5%/25.9%/27.2%/28.6%",
      "Crit DMG"
    ],
    "hints": {
      "2013": {
        "id": 2013,
        "name": "Ignis Mark: Sacred Flame",
        "description": "A special status applied to the target by some Ignis Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ignis Trekkers. When triggered, deals large AoE DMG.",
        "params": [
          "10"
        ]
      },
      "2021": {
        "id": 2021,
        "name": "Butterfly Mark",
        "description": "Each stack of Butterfly Mark increases the target's &Param1&, up to 3 stacks, for 6s.",
        "params": [
          "Ignis DMG Taken"
        ]
      }
    },
    "cooldown": "14s"
  },
  "ultimate": {
    "name": "Undying Phoenix",
    "icon": "Icon/Skill/12601_Ultra",
    "description": "Spawns a Celestial Phoenix, dealing <color=#fb8037>&Param1& of ATK</color> as AoE Ignis DMG before turning into an Phoenix Egg, lasting for 8s. \u000bThe Phoenix Egg draws in nearby targets, dealing <color=#fb8037>&Param2& of ATK</color> as Ignis DMG per second and inflicting ##Ignis Mark: Sacred Flame#2013#.",
    "shortDescription": "Spawns a Celestial Phoenix, dealing AoE DMG before turning into a Phoenix Egg. Inflicts ##Ignis Mark: Sacred Flame#2013#.",
    "params": [
      "287%/316%/345%/431%/460%/488%/546%/574%/603%/661%/689%/718%/747%",
      "62%/68%/74%/92%/99%/105%/117%/123%/129%/142%/148%/154%/160%"
    ],
    "hints": {
      "2013": {
        "id": 2013,
        "name": "Ignis Mark: Sacred Flame",
        "description": "A special status applied to the target by some Ignis Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ignis Trekkers. When triggered, deals large AoE DMG.",
        "params": [
          "10"
        ]
      }
    },
    "cooldown": "30s",
    "energy": 285
  },
  "talents": [
    {
      "name": "Withered Flower Show",
      "talents": [
        {
          "name": "Withered Flower Show",
          "description": "When any Trekker in the squad deals DMG to a target with ##Ignis Mark#1016#, increases ATK by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "8.4%",
            "6"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
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
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
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
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Fate of Nirvana",
      "talents": [
        {
          "name": "Fate of Nirvana",
          "description": "When the HP of the main Trekker is above 50%, increases Skill Crit Rate by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
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
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
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
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "A Lonely Stage",
      "talents": [
        {
          "name": "A Lonely Stage",
          "description": "When Flora inflicts ##Ignis Mark: Sacred Flame#2013# on a target, increases the squad's ATK by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "8.4%",
            "6"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
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
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
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
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Flickering Candle",
      "talents": [
        {
          "name": "Flickering Candle",
          "description": "When ##Ignis Mark#1016# is triggered, increases the main Trekker's Ignis DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "12%",
            "6"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
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
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
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
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Lived as Play",
      "talents": [
        {
          "name": "Lived as Play",
          "description": "When there are 3 Ignis Trekkers in the squad, the squad's Crit DMG is increased by <color=#0abec5>&Param1&</color>.",
          "params": [
            "12%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
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
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
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
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "hp": 672,
      "atk": 86
    },
    {
      "hp": 873,
      "atk": 111
    },
    {
      "hp": 1075,
      "atk": 137
    },
    {
      "hp": 1276,
      "atk": 163
    },
    {
      "hp": 1478,
      "atk": 188
    },
    {
      "hp": 1680,
      "atk": 214
    },
    {
      "hp": 1881,
      "atk": 240
    },
    {
      "hp": 2083,
      "atk": 265
    },
    {
      "hp": 2284,
      "atk": 291
    },
    {
      "hp": 2486,
      "atk": 317
    },
    {
      "hp": 2983,
      "atk": 380
    },
    {
      "hp": 3185,
      "atk": 406
    },
    {
      "hp": 3386,
      "atk": 431
    },
    {
      "hp": 3588,
      "atk": 457
    },
    {
      "hp": 3790,
      "atk": 483
    },
    {
      "hp": 3991,
      "atk": 508
    },
    {
      "hp": 4193,
      "atk": 534
    },
    {
      "hp": 4394,
      "atk": 560
    },
    {
      "hp": 4596,
      "atk": 586
    },
    {
      "hp": 4798,
      "atk": 611
    },
    {
      "hp": 4999,
      "atk": 637
    },
    {
      "hp": 6000,
      "atk": 764
    },
    {
      "hp": 6202,
      "atk": 790
    },
    {
      "hp": 6404,
      "atk": 816
    },
    {
      "hp": 6605,
      "atk": 841
    },
    {
      "hp": 6807,
      "atk": 867
    },
    {
      "hp": 7008,
      "atk": 893
    },
    {
      "hp": 7210,
      "atk": 918
    },
    {
      "hp": 7412,
      "atk": 944
    },
    {
      "hp": 7613,
      "atk": 970
    },
    {
      "hp": 7815,
      "atk": 996
    },
    {
      "hp": 8016,
      "atk": 1021
    },
    {
      "hp": 9623,
      "atk": 1226
    },
    {
      "hp": 9824,
      "atk": 1251
    },
    {
      "hp": 10026,
      "atk": 1277
    },
    {
      "hp": 10227,
      "atk": 1303
    },
    {
      "hp": 10429,
      "atk": 1329
    },
    {
      "hp": 10631,
      "atk": 1354
    },
    {
      "hp": 10832,
      "atk": 1380
    },
    {
      "hp": 11034,
      "atk": 1406
    },
    {
      "hp": 11235,
      "atk": 1431
    },
    {
      "hp": 11437,
      "atk": 1457
    },
    {
      "hp": 11639,
      "atk": 1483
    },
    {
      "hp": 13964,
      "atk": 1779
    },
    {
      "hp": 14165,
      "atk": 1804
    },
    {
      "hp": 14367,
      "atk": 1830
    },
    {
      "hp": 14568,
      "atk": 1856
    },
    {
      "hp": 14770,
      "atk": 1881
    },
    {
      "hp": 14972,
      "atk": 1907
    },
    {
      "hp": 15173,
      "atk": 1933
    },
    {
      "hp": 15375,
      "atk": 1959
    },
    {
      "hp": 15576,
      "atk": 1984
    },
    {
      "hp": 15778,
      "atk": 2010
    },
    {
      "hp": 15980,
      "atk": 2036
    },
    {
      "hp": 19178,
      "atk": 2443
    },
    {
      "hp": 19380,
      "atk": 2469
    },
    {
      "hp": 19582,
      "atk": 2494
    },
    {
      "hp": 19783,
      "atk": 2520
    },
    {
      "hp": 19985,
      "atk": 2546
    },
    {
      "hp": 20186,
      "atk": 2571
    },
    {
      "hp": 20388,
      "atk": 2597
    },
    {
      "hp": 20590,
      "atk": 2623
    },
    {
      "hp": 20791,
      "atk": 2648
    },
    {
      "hp": 20993,
      "atk": 2674
    },
    {
      "hp": 21194,
      "atk": 2700
    },
    {
      "hp": 25435,
      "atk": 3240
    },
    {
      "hp": 25636,
      "atk": 3266
    },
    {
      "hp": 25838,
      "atk": 3291
    },
    {
      "hp": 26040,
      "atk": 3317
    },
    {
      "hp": 26241,
      "atk": 3343
    },
    {
      "hp": 26443,
      "atk": 3368
    },
    {
      "hp": 26644,
      "atk": 3394
    },
    {
      "hp": 26846,
      "atk": 3420
    },
    {
      "hp": 27048,
      "atk": 3445
    },
    {
      "hp": 27249,
      "atk": 3471
    },
    {
      "hp": 27451,
      "atk": 3497
    },
    {
      "hp": 32941,
      "atk": 4196
    },
    {
      "hp": 33143,
      "atk": 4222
    },
    {
      "hp": 33344,
      "atk": 4247
    },
    {
      "hp": 33546,
      "atk": 4273
    },
    {
      "hp": 33747,
      "atk": 4299
    },
    {
      "hp": 33949,
      "atk": 4325
    },
    {
      "hp": 34151,
      "atk": 4350
    },
    {
      "hp": 34352,
      "atk": 4376
    },
    {
      "hp": 34554,
      "atk": 4402
    },
    {
      "hp": 34755,
      "atk": 4427
    },
    {
      "hp": 34957,
      "atk": 4453
    },
    {
      "hp": 41946,
      "atk": 5343
    },
    {
      "hp": 42147,
      "atk": 5369
    },
    {
      "hp": 42349,
      "atk": 5395
    },
    {
      "hp": 42551,
      "atk": 5420
    },
    {
      "hp": 42752,
      "atk": 5446
    },
    {
      "hp": 42954,
      "atk": 5472
    },
    {
      "hp": 43155,
      "atk": 5497
    },
    {
      "hp": 43357,
      "atk": 5523
    },
    {
      "hp": 43559,
      "atk": 5549
    },
    {
      "hp": 43760,
      "atk": 5574
    },
    {
      "hp": 43962,
      "atk": 5600
    },
    {
      "hp": 43962,
      "atk": 5600
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
          "id": 20023,
          "name": "Colossus Core",
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
          "id": 20023,
          "name": "Colossus Core",
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
          "id": 20023,
          "name": "Colossus Core",
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
          "id": 20023,
          "name": "Colossus Core",
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