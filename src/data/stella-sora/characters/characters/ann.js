export const Ann = {
  "id": 123,
  "name": "Ann",
  "icon": "/stella/assets/Ann.png",
  "portrait": "/stella/assets/Ann_portrait.png",
  "background": "/stella/assets/Ann_background.png",
  "variants": {
    "base": "/stella/assets/Ann_base.png",
    "q": "/stella/assets/Ann_q.png",
    "gd": "/stella/assets/Ann_gd.png",
    "goods": "/stella/assets/Ann_goods.png",
    "qs": "/stella/assets/Ann_qs.png",
    "xl": "/stella/assets/Ann_xl.png",
    "gc": "/stella/assets/Ann_gc.png",
    "sk": "/stella/assets/Ann_portrait.png",
    "xxl": "/stella/assets/Ann.png",
    "qm": "/stella/assets/Ann_qm.png",
    "l": "/stella/assets/Ann_l.png",
    "s": "/stella/assets/Ann_s.png"
  },
  "description": "Coco the Firefang is Ann's best friend. Wind is also Ann's friend. With help from these friends, Ann is the fastest Trekker around.",
  "voiceActor": {
    "cn": "Jing Chen",
    "cnLocalized": "静宸",
    "jp": "Rina Hidaka",
    "jpLocalized": "日高里菜"
  },
  "birthday": "6.1",
  "grade": 4,
  "element": "Ventus",
  "position": "Support",
  "attackType": "Melee",
  "style": "Adventurous",
  "faction": "Freelance Trekker",
  "tags": [
    "Support",
    "Adventurous",
    "Freelance Trekker"
  ],
  "dateEvents": [
    {
      "name": "Gift from the Mountain God",
      "icon": "DatingSPCG_123301",
      "clue": "Visit the Cave to unlock",
      "secondChoice": "Keep exploring deeper."
    },
    {
      "name": "View From High",
      "icon": "DatingSPCG_123302",
      "clue": "Visit the Market to unlock",
      "secondChoice": "There's an event you can join in the game area."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Stellanite Enchantment",
      "Moonlit Companion",
      "Cosmic Form",
      "Summer Chill Crushed Ice",
      "Fragrant Ice Delight",
      "Sweet IceFurry"
    ],
    "hates": []
  },
  "normalAttack": {
    "name": "Fierce Bite",
    "icon": "Icon/Skill/12301_Normal",
    "description": "Coco the Firefang pounces and bites multiple times.\u000bStrike 1: <color=#ec6d21>&Param1& of ATK</color> as Ventus DMG.\u000bStrike 2: <color=#ec6d21>&Param2& of ATK</color> as Ventus DMG.\u000bStrike 3: <color=#ec6d21>&Param3& of ATK ×2</color> as Ventus DMG.\u000bStrike 4: <color=#ec6d21>&Param4& of ATK</color> as Ventus DMG.",
    "shortDescription": "Coco the Firefang pounces on the target repeatedly.",
    "params": [
      "10.9%/12%/13.1%/16.3%/17.4%/18.5%/20.7%/21.8%/22.9%/25%/26.1%/27.2%/28.3%",
      "16.3%/18%/19.6%/24.5%/26.1%/27.7%/31%/32.6%/34.3%/37.5%/39.2%/40.8%/42.4%",
      "16.3%/18%/19.6%/24.5%/26.1%/27.7%/31%/32.6%/34.3%/37.5%/39.2%/40.8%/42.4%",
      "21.8%/24%/26.1%/32.7%/34.8%/37%/41.4%/43.6%/45.7%/50.1%/52.3%/54.4%/56.6%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Puffloon Spits",
    "icon": "Icon/Skill/12301_Skill_Main",
    "description": "Summons Bubble the Puffloon who spits wind bullets, dealing <color=#ec6d21>&Param1& of ATK</color> as Ventus Minion DMG. \u000bBubble has 100% Ann's ATK and lasts for 15s. \u000bWhen Bubble deals DMG, there is a 25% chance to create a Wind Burst, dealing <color=#ec6d21>&Param2& of ATK</color> as Ventus Minion DMG, and inflicting ##Ventus Mark: Breeze#2017#. This effect can only be triggered once per second. \u000bWhen Bubble is on the field, increases the squad's &Param3& by <color=#fb8037>&Param4&</color>.",
    "shortDescription": "Summons Bubble the Puffloon to attack the target, with a chance to create a Wind Burst. Inflicts ##Ventus Mark: Breeze#2017#.\u000bWhen Bubble is on the battlefield, increases the squad's &Param3&.",
    "params": [
      "7.6%/8.4%/9.1%/11.4%/12.2%/12.9%/14.5%/15.2%/16%/17.5%/18.3%/19%/19.8%",
      "13.7%/15.1%/16.4%/20.5%/21.9%/23.3%/26%/27.4%/28.8%/31.5%/32.9%/34.2%/35.6%",
      "ATK",
      "12%/15%/18%/28%/31%/34%/41%/44%/47%/53%/56%/60%/63%",
      "-1"
    ],
    "hints": {
      "2017": {
        "id": 2017,
        "name": "Ventus Mark: Breeze",
        "description": "A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.",
        "params": []
      }
    },
    "cooldown": "15s"
  },
  "supportSkill": {
    "name": "Wind Barrier",
    "icon": "Icon/Skill/12301_Skill_Support",
    "description": "Raises a wall of wind, dealing <color=#ec6d21>&Param1& of ATK</color> as Ventus Skill DMG.\u000bThe wind wall lasts for 8s, constantly inflicts ##Ventus Mark: Breeze#2017# to nearby targets, and can block hostile projectiles 8 times.\u000bWhen casting the Support Skill Wind Barrier, increases the squad's &Param2& by <color=#fb8037>&Param3&</color> for &Param4&s.",
    "shortDescription": "Raises a wall of wind to deal DMG and block hostile projectiles. Constantly inflicts ##Ventus Mark: Breeze#2017#. When casting the Support Skill, increases the squad's &Param2&.",
    "params": [
      "107%/118%/129%/161%/172%/183%/204%/215%/225%/247%/258%/268%/279%",
      "ATK",
      "15%/19%/23%/35%/39%/43%/51%/55%/59%/66%/70%/74%/78%",
      "15"
    ],
    "hints": {
      "2017": {
        "id": 2017,
        "name": "Ventus Mark: Breeze",
        "description": "A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.",
        "params": []
      }
    },
    "cooldown": "16s"
  },
  "ultimate": {
    "name": "Call of the Wild",
    "icon": "Icon/Skill/12301_Ultra",
    "description": "Coco the Firefang lets forth a wild howl, repels hostile projectiles, and then fires wind bullets, dealing <color=#ec6d21>&Param1& of ATK</color> as AoE Ventus DMG and inflicting ##Ventus Mark: Breeze#2017#.",
    "shortDescription": "Coco the Firefang repels hostile projectiles, fires wind bullets, dealing AoE DMG and inflicting ##Ventus Mark: Breeze#2017#.",
    "params": [
      "509%/560%/610%/763%/814%/865%/966%/1017%/1068%/1170%/1221%/1272%/1322%"
    ],
    "hints": {
      "2017": {
        "id": 2017,
        "name": "Ventus Mark: Breeze",
        "description": "A special status applied to the target by some Ventus Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Ventus Trekkers. When triggered, removes the status and activates special effects.",
        "params": []
      }
    },
    "cooldown": "25s",
    "energy": 237.5
  },
  "talents": [
    {
      "name": "Sigh of Storm",
      "talents": [
        {
          "name": "Sigh of Storm",
          "description": "After Ann deals Ultimate DMG to a target, increases the squad's ATK by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "14%",
            "15"
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
      "name": "Rumbling Wind",
      "talents": [
        {
          "name": "Rumbling Wind",
          "description": "When Ann inflicts ##Ventus Mark: Breeze#2017#, increases the squad's ATK by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "10.3%",
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
      "name": "The Watcher in the Rye",
      "talents": [
        {
          "name": "The Watcher in the Rye",
          "description": "If Ann's Ultimate destroys a hostile projectile, increases main Trekker's Skill DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "32%",
            "15"
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
      "name": "Rippling Crops",
      "talents": [
        {
          "name": "Rippling Crops",
          "description": "When ##Ventus Mark#1017# is triggered, increases the main Trekker's Ventus DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
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
      "name": "Ode to Earth",
      "talents": [
        {
          "name": "Ode to Earth",
          "description": "When there are 3 Ventus Trekkers in the squad, the squad's Skill DMG is increased by <color=#0abec5>&Param1&</color>.",
          "params": [
            "13%"
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
      "hp": 1124,
      "atk": 82
    },
    {
      "hp": 1460,
      "atk": 107
    },
    {
      "hp": 1797,
      "atk": 132
    },
    {
      "hp": 2134,
      "atk": 157
    },
    {
      "hp": 2471,
      "atk": 181
    },
    {
      "hp": 2808,
      "atk": 206
    },
    {
      "hp": 3144,
      "atk": 231
    },
    {
      "hp": 3481,
      "atk": 255
    },
    {
      "hp": 3818,
      "atk": 280
    },
    {
      "hp": 4155,
      "atk": 305
    },
    {
      "hp": 4987,
      "atk": 366
    },
    {
      "hp": 5324,
      "atk": 391
    },
    {
      "hp": 5661,
      "atk": 415
    },
    {
      "hp": 5998,
      "atk": 440
    },
    {
      "hp": 6335,
      "atk": 465
    },
    {
      "hp": 6672,
      "atk": 489
    },
    {
      "hp": 7008,
      "atk": 514
    },
    {
      "hp": 7345,
      "atk": 539
    },
    {
      "hp": 7682,
      "atk": 564
    },
    {
      "hp": 8019,
      "atk": 588
    },
    {
      "hp": 8356,
      "atk": 613
    },
    {
      "hp": 10030,
      "atk": 736
    },
    {
      "hp": 10367,
      "atk": 761
    },
    {
      "hp": 10704,
      "atk": 785
    },
    {
      "hp": 11040,
      "atk": 810
    },
    {
      "hp": 11377,
      "atk": 835
    },
    {
      "hp": 11714,
      "atk": 859
    },
    {
      "hp": 12051,
      "atk": 884
    },
    {
      "hp": 12388,
      "atk": 909
    },
    {
      "hp": 12725,
      "atk": 934
    },
    {
      "hp": 13062,
      "atk": 958
    },
    {
      "hp": 13399,
      "atk": 983
    },
    {
      "hp": 16083,
      "atk": 1180
    },
    {
      "hp": 16420,
      "atk": 1205
    },
    {
      "hp": 16757,
      "atk": 1229
    },
    {
      "hp": 17094,
      "atk": 1254
    },
    {
      "hp": 17431,
      "atk": 1279
    },
    {
      "hp": 17768,
      "atk": 1304
    },
    {
      "hp": 18105,
      "atk": 1328
    },
    {
      "hp": 18442,
      "atk": 1353
    },
    {
      "hp": 18779,
      "atk": 1378
    },
    {
      "hp": 19116,
      "atk": 1402
    },
    {
      "hp": 19453,
      "atk": 1427
    },
    {
      "hp": 23340,
      "atk": 1712
    },
    {
      "hp": 23677,
      "atk": 1737
    },
    {
      "hp": 24014,
      "atk": 1762
    },
    {
      "hp": 24351,
      "atk": 1786
    },
    {
      "hp": 24688,
      "atk": 1811
    },
    {
      "hp": 25025,
      "atk": 1836
    },
    {
      "hp": 25362,
      "atk": 1861
    },
    {
      "hp": 25699,
      "atk": 1885
    },
    {
      "hp": 26036,
      "atk": 1910
    },
    {
      "hp": 26373,
      "atk": 1935
    },
    {
      "hp": 26710,
      "atk": 1959
    },
    {
      "hp": 32056,
      "atk": 2352
    },
    {
      "hp": 32393,
      "atk": 2376
    },
    {
      "hp": 32730,
      "atk": 2401
    },
    {
      "hp": 33067,
      "atk": 2426
    },
    {
      "hp": 33404,
      "atk": 2451
    },
    {
      "hp": 33741,
      "atk": 2475
    },
    {
      "hp": 34078,
      "atk": 2500
    },
    {
      "hp": 34415,
      "atk": 2525
    },
    {
      "hp": 34752,
      "atk": 2549
    },
    {
      "hp": 35088,
      "atk": 2574
    },
    {
      "hp": 35425,
      "atk": 2599
    },
    {
      "hp": 42513,
      "atk": 3119
    },
    {
      "hp": 42850,
      "atk": 3144
    },
    {
      "hp": 43187,
      "atk": 3168
    },
    {
      "hp": 43524,
      "atk": 3193
    },
    {
      "hp": 43861,
      "atk": 3218
    },
    {
      "hp": 44198,
      "atk": 3242
    },
    {
      "hp": 44535,
      "atk": 3267
    },
    {
      "hp": 44872,
      "atk": 3292
    },
    {
      "hp": 45209,
      "atk": 3317
    },
    {
      "hp": 45546,
      "atk": 3341
    },
    {
      "hp": 45883,
      "atk": 3366
    },
    {
      "hp": 55058,
      "atk": 4039
    },
    {
      "hp": 55395,
      "atk": 4064
    },
    {
      "hp": 55732,
      "atk": 4089
    },
    {
      "hp": 56069,
      "atk": 4113
    },
    {
      "hp": 56406,
      "atk": 4138
    },
    {
      "hp": 56743,
      "atk": 4163
    },
    {
      "hp": 57080,
      "atk": 4188
    },
    {
      "hp": 57417,
      "atk": 4212
    },
    {
      "hp": 57754,
      "atk": 4237
    },
    {
      "hp": 58091,
      "atk": 4262
    },
    {
      "hp": 58428,
      "atk": 4286
    },
    {
      "hp": 70109,
      "atk": 5143
    },
    {
      "hp": 70446,
      "atk": 5168
    },
    {
      "hp": 70783,
      "atk": 5193
    },
    {
      "hp": 71120,
      "atk": 5218
    },
    {
      "hp": 71457,
      "atk": 5242
    },
    {
      "hp": 71794,
      "atk": 5267
    },
    {
      "hp": 72131,
      "atk": 5292
    },
    {
      "hp": 72468,
      "atk": 5316
    },
    {
      "hp": 72805,
      "atk": 5341
    },
    {
      "hp": 73142,
      "atk": 5366
    },
    {
      "hp": 73479,
      "atk": 5391
    },
    {
      "hp": 73479,
      "atk": 5391
    }
  ],
  "upgrades": [
    {
      "items": [
        {
          "id": 20071,
          "name": "Backstage Ragged Hat",
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
          "id": 20071,
          "name": "Backstage Ragged Hat",
          "quantity": 5
        },
        {
          "id": 20072,
          "name": "Spotlight Bowler",
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
          "id": 20071,
          "name": "Backstage Ragged Hat",
          "quantity": 10
        },
        {
          "id": 20072,
          "name": "Spotlight Bowler",
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
          "id": 20071,
          "name": "Backstage Ragged Hat",
          "quantity": 15
        },
        {
          "id": 20072,
          "name": "Spotlight Bowler",
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
          "id": 20071,
          "name": "Backstage Ragged Hat",
          "quantity": 20
        },
        {
          "id": 20072,
          "name": "Spotlight Bowler",
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
          "id": 20071,
          "name": "Backstage Ragged Hat",
          "quantity": 30
        },
        {
          "id": 20072,
          "name": "Spotlight Bowler",
          "quantity": 55
        },
        {
          "id": 20073,
          "name": "Exeunt Bowler",
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
          "id": 20072,
          "name": "Spotlight Bowler",
          "quantity": 75
        },
        {
          "id": 20073,
          "name": "Exeunt Bowler",
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
          "id": 20072,
          "name": "Spotlight Bowler",
          "quantity": 95
        },
        {
          "id": 20073,
          "name": "Exeunt Bowler",
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
          "id": 20043,
          "name": "Wrath Beauty",
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
          "id": 20043,
          "name": "Wrath Beauty",
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
          "id": 20043,
          "name": "Wrath Beauty",
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
          "id": 20043,
          "name": "Wrath Beauty",
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