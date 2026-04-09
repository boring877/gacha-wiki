export const Canace = {
  "id": 120,
  "name": "Canace",
  "icon": "/stella/assets/Canace.png",
  "portrait": "/stella/assets/Canace_portrait.png",
  "background": "/stella/assets/Canace_background.png",
  "variants": {
    "base": "/stella/assets/Canace_base.png",
    "q": "/stella/assets/Canace_q.png",
    "gd": "/stella/assets/Canace_gd.png",
    "goods": "/stella/assets/Canace_goods.png",
    "qs": "/stella/assets/Canace_qs.png",
    "xl": "/stella/assets/Canace_xl.png",
    "gc": "/stella/assets/Canace_gc.png",
    "sk": "/stella/assets/Canace_portrait.png",
    "xxl": "/stella/assets/Canace.png",
    "qm": "/stella/assets/Canace_qm.png",
    "l": "/stella/assets/Canace_l.png",
    "s": "/stella/assets/Canace_s.png"
  },
  "description": "The legendary \"Devil Teacher\" as the students called. Her mysterious laurel bracelet can unleashes unexpected effects in battle.",
  "voiceActor": {
    "cn": "Liang Shuang",
    "cnLocalized": "梁爽",
    "jp": "Megumi Toyoguchi",
    "jpLocalized": "豊口めぐみ"
  },
  "birthday": "1.22",
  "grade": 4,
  "element": "Ventus",
  "position": "Versatile",
  "attackType": "Ranged",
  "style": "Adventurous",
  "faction": "Grace Imperium",
  "tags": [
    "Versatile",
    "Adventurous",
    "Grace Imperium"
  ],
  "dateEvents": [
    {
      "name": "When It Rains, It Pours",
      "icon": "DatingSPCG_120301",
      "clue": "Visit the Cave to unlock",
      "secondChoice": "Keep exploring deeper."
    },
    {
      "name": "Faculty Cafeteria",
      "icon": "DatingSPCG_120303",
      "clue": "Visit the Academy to unlock",
      "secondChoice": "Getting hungry. Gonna go to the cafeteria."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Love Candle",
      "Blazing Wings",
      "Fiery Honeypot",
      "Portable Blower",
      "Exquisite Blower",
      "Deluxe Blower"
    ],
    "hates": []
  },
  "normalAttack": {
    "name": "Gush Shots",
    "icon": "Icon/Skill/12001_Normal",
    "description": "Fires consecutive Ventus-imbued bullets to deal DMG.\u000bStrike 1-4: <color=#ec6d21>&Param1& of ATK</color> as Ventus DMG.\u000bStrike 5: <color=#ec6d21>&Param2& of ATK x2</color> as Ventus DMG.",
    "shortDescription": "Fires consecutive Ventus-imbued bullets to deal DMG.",
    "params": [
      "11.1%/12.2%/13.3%/16.7%/17.8%/18.9%/21.1%/22.2%/23.3%/25.6%/26.7%/27.8%/28.9%",
      "16.9%/18.6%/20.3%/25.3%/27%/28.7%/32.1%/33.8%/35.4%/38.8%/40.5%/42.2%/43.9%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Verdant Shroud",
    "icon": "Icon/Skill/12001_Skill_Main",
    "description": "Deals <color=#ec6d21>&Param1& of ATK</color> as Ventus DMG to nearby targets, and then summons 2 Flying Leaves.\u000bA Flying Leaf can pierce through the target and deal <color=#ec6d21>&Param2&</color> of ATK as Ventus DMG for 7.2s.\u000bVerdant Shroud (Main Skill) can trigger ##Ventus Mark: Breeze#2017#, dealing &Param3& of ATK as AoE Ventus Mark DMG.",
    "shortDescription": "Deals DMG to nearby targets and summons Flying Leaves that orbit around herself.\u000bThe Main Skill can trigger ##Breeze#2025#.",
    "params": [
      "6.6%/7.3%/8%/9.9%/10.6%/11.3%/12.6%/13.3%/13.9%/15.2%/15.9%/16.6%/17.2%",
      "16.3%/18%/19.6%/24.5%/26.1%/27.7%/31%/32.6%/34.3%/37.5%/39.2%/40.8%/42.4%",
      "25.3%/30.3%/35.4%/40.4%/45.5%/50.5%/55.6%/60.6%/65.7%"
    ],
    "hints": {
      "2017": {
        "id": 2017,
        "name": "Ventus Mark: Breeze",
        "description": "A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.",
        "params": []
      },
      "2025": {
        "id": 2025,
        "name": "Breeze",
        "description": "A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.",
        "params": []
      }
    },
    "cooldown": "12s"
  },
  "supportSkill": {
    "name": "Laurel Halo",
    "icon": "Icon/Skill/12001_Skill_Support",
    "description": "Tosses a Laurel Wreath at the main Trekker. \u000bThe Laurel Wreath deals <color=#ec6d21>&Param1& of ATK</color> as Ventus DMG every 0.4s for a total of 6s, and inflicts ##Ventus Mark: Breeze#2017#.",
    "shortDescription": "Tosses a Laurel Wreath that circles around the main Trekker and inflicts ##Ventus Mark: Breeze#2017#.",
    "params": [
      "27%/30%/32%/40%/43%/46%/51%/54%/57%/62%/65%/67%/70%"
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
    "name": "Double Tempest",
    "icon": "Icon/Skill/12001_Ultra",
    "description": "Creates 2 cyclones, each dealing <color=#ec6d21>&Param1& of ATK x9</color> as AoE Ventus DMG, lasting for 4s.",
    "shortDescription": "Creates cyclones to deal damage.",
    "params": [
      "80%/88%/96%/120%/128%/136%/152%/160%/168%/184%/192%/199%/207%"
    ],
    "hints": {},
    "cooldown": "30s",
    "energy": 285
  },
  "talents": [
    {
      "name": "Lost Youth",
      "talents": [
        {
          "name": "Lost Youth",
          "description": "When Canace's Flying Leave or Laurel Wreath is on the battlefield, the squad's ATK is increased by <color=#0abec5>&Param1&</color>.",
          "params": [
            "16.8%"
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
      "name": "Imminent Dawn",
      "talents": [
        {
          "name": "Imminent Dawn",
          "description": "When Canace kills a target, her Skill DMG is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "12%",
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
      "name": "Hidden Past",
      "talents": [
        {
          "name": "Hidden Past",
          "description": "For each target hit by Canace's Ultimate, increases the squad's ATK by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "3.4%",
            "15",
            "5"
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
      "name": "Mentor's Duty",
      "talents": [
        {
          "name": "Mentor's Duty",
          "description": "When ##Ventus Mark#1017# is triggered, increases Canace's Skill DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "12%",
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
      "name": "Yearning for Truth",
      "talents": [
        {
          "name": "Yearning for Truth",
          "description": "Increases Canace's Ventus DMG dealt to normal and elite targets by <color=#0abec5>&Param1&</color>.",
          "params": [
            "14.4%"
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
      "hp": 672,
      "atk": 98
    },
    {
      "hp": 874,
      "atk": 127
    },
    {
      "hp": 1075,
      "atk": 156
    },
    {
      "hp": 1277,
      "atk": 185
    },
    {
      "hp": 1478,
      "atk": 215
    },
    {
      "hp": 1680,
      "atk": 244
    },
    {
      "hp": 1882,
      "atk": 273
    },
    {
      "hp": 2083,
      "atk": 303
    },
    {
      "hp": 2285,
      "atk": 332
    },
    {
      "hp": 2486,
      "atk": 361
    },
    {
      "hp": 2984,
      "atk": 433
    },
    {
      "hp": 3185,
      "atk": 463
    },
    {
      "hp": 3387,
      "atk": 492
    },
    {
      "hp": 3588,
      "atk": 521
    },
    {
      "hp": 3790,
      "atk": 550
    },
    {
      "hp": 3992,
      "atk": 580
    },
    {
      "hp": 4193,
      "atk": 609
    },
    {
      "hp": 4395,
      "atk": 638
    },
    {
      "hp": 4596,
      "atk": 668
    },
    {
      "hp": 4798,
      "atk": 697
    },
    {
      "hp": 5000,
      "atk": 726
    },
    {
      "hp": 6001,
      "atk": 872
    },
    {
      "hp": 6203,
      "atk": 901
    },
    {
      "hp": 6404,
      "atk": 930
    },
    {
      "hp": 6606,
      "atk": 959
    },
    {
      "hp": 6807,
      "atk": 989
    },
    {
      "hp": 7009,
      "atk": 1018
    },
    {
      "hp": 7211,
      "atk": 1047
    },
    {
      "hp": 7412,
      "atk": 1077
    },
    {
      "hp": 7614,
      "atk": 1106
    },
    {
      "hp": 7815,
      "atk": 1135
    },
    {
      "hp": 8017,
      "atk": 1164
    },
    {
      "hp": 9623,
      "atk": 1398
    },
    {
      "hp": 9825,
      "atk": 1427
    },
    {
      "hp": 10026,
      "atk": 1456
    },
    {
      "hp": 10228,
      "atk": 1485
    },
    {
      "hp": 10429,
      "atk": 1515
    },
    {
      "hp": 10631,
      "atk": 1544
    },
    {
      "hp": 10833,
      "atk": 1573
    },
    {
      "hp": 11034,
      "atk": 1603
    },
    {
      "hp": 11236,
      "atk": 1632
    },
    {
      "hp": 11437,
      "atk": 1661
    },
    {
      "hp": 11639,
      "atk": 1690
    },
    {
      "hp": 13964,
      "atk": 2028
    },
    {
      "hp": 14166,
      "atk": 2057
    },
    {
      "hp": 14367,
      "atk": 2087
    },
    {
      "hp": 14569,
      "atk": 2116
    },
    {
      "hp": 14771,
      "atk": 2145
    },
    {
      "hp": 14972,
      "atk": 2175
    },
    {
      "hp": 15174,
      "atk": 2204
    },
    {
      "hp": 15375,
      "atk": 2233
    },
    {
      "hp": 15577,
      "atk": 2262
    },
    {
      "hp": 15779,
      "atk": 2292
    },
    {
      "hp": 15980,
      "atk": 2321
    },
    {
      "hp": 19179,
      "atk": 2786
    },
    {
      "hp": 19380,
      "atk": 2815
    },
    {
      "hp": 19582,
      "atk": 2844
    },
    {
      "hp": 19784,
      "atk": 2873
    },
    {
      "hp": 19985,
      "atk": 2903
    },
    {
      "hp": 20187,
      "atk": 2932
    },
    {
      "hp": 20388,
      "atk": 2961
    },
    {
      "hp": 20590,
      "atk": 2990
    },
    {
      "hp": 20792,
      "atk": 3020
    },
    {
      "hp": 20993,
      "atk": 3049
    },
    {
      "hp": 21195,
      "atk": 3078
    },
    {
      "hp": 25435,
      "atk": 3694
    },
    {
      "hp": 25637,
      "atk": 3723
    },
    {
      "hp": 25838,
      "atk": 3753
    },
    {
      "hp": 26040,
      "atk": 3782
    },
    {
      "hp": 26242,
      "atk": 3811
    },
    {
      "hp": 26443,
      "atk": 3841
    },
    {
      "hp": 26645,
      "atk": 3870
    },
    {
      "hp": 26846,
      "atk": 3899
    },
    {
      "hp": 27048,
      "atk": 3928
    },
    {
      "hp": 27250,
      "atk": 3958
    },
    {
      "hp": 27451,
      "atk": 3987
    },
    {
      "hp": 32941,
      "atk": 4784
    },
    {
      "hp": 33143,
      "atk": 4814
    },
    {
      "hp": 33345,
      "atk": 4843
    },
    {
      "hp": 33546,
      "atk": 4872
    },
    {
      "hp": 33748,
      "atk": 4901
    },
    {
      "hp": 33949,
      "atk": 4931
    },
    {
      "hp": 34151,
      "atk": 4960
    },
    {
      "hp": 34353,
      "atk": 4989
    },
    {
      "hp": 34554,
      "atk": 5019
    },
    {
      "hp": 34756,
      "atk": 5048
    },
    {
      "hp": 34957,
      "atk": 5077
    },
    {
      "hp": 41946,
      "atk": 6092
    },
    {
      "hp": 42148,
      "atk": 6121
    },
    {
      "hp": 42349,
      "atk": 6151
    },
    {
      "hp": 42551,
      "atk": 6180
    },
    {
      "hp": 42753,
      "atk": 6209
    },
    {
      "hp": 42954,
      "atk": 6239
    },
    {
      "hp": 43156,
      "atk": 6268
    },
    {
      "hp": 43357,
      "atk": 6297
    },
    {
      "hp": 43559,
      "atk": 6326
    },
    {
      "hp": 43761,
      "atk": 6356
    },
    {
      "hp": 43962,
      "atk": 6385
    },
    {
      "hp": 43962,
      "atk": 6385
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
          "id": 20043,
          "name": "Wrath Beauty",
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
          "id": 20043,
          "name": "Wrath Beauty",
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
          "id": 20043,
          "name": "Wrath Beauty",
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
          "id": 20043,
          "name": "Wrath Beauty",
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