export const Cosette = {
  "id": 142,
  "name": "Cosette",
  "icon": "/stella/assets/Cosette.png",
  "portrait": "/stella/assets/Cosette_portrait.png",
  "background": "/stella/assets/Cosette_background.png",
  "variants": {
    "base": "/stella/assets/Cosette_base.png",
    "q": "/stella/assets/Cosette_q.png",
    "gd": "/stella/assets/Cosette_gd.png",
    "goods": "/stella/assets/Cosette_goods.png",
    "qs": "/stella/assets/Cosette_qs.png",
    "xl": "/stella/assets/Cosette_xl.png",
    "gc": "/stella/assets/Cosette_gc.png",
    "sk": "/stella/assets/Cosette_portrait.png",
    "xxl": "/stella/assets/Cosette.png",
    "qm": "/stella/assets/Cosette_qm.png",
    "l": "/stella/assets/Cosette_l.png",
    "s": "/stella/assets/Cosette_s.png"
  },
  "description": "Whether the steel claws she'd scavenged or the left hand imbued with special magic, Cosette uses her weapons to break the chains of fate.",
  "voiceActor": {
    "cn": "Tang Meng",
    "cnLocalized": "唐梦",
    "jp": "Moe Kahara",
    "jpLocalized": "佳原萌枝"
  },
  "birthday": "5.2",
  "grade": 4,
  "element": "Umbra",
  "position": "Support",
  "attackType": "Melee",
  "style": "Inquisitive",
  "faction": "Freelance Trekker",
  "tags": [
    "Support",
    "Inquisitive",
    "Freelance Trekker"
  ],
  "dateEvents": [
    {
      "name": "New Food Discovery",
      "icon": "DatingSPCG_142301",
      "clue": "Visit the Dessert Shop to unlock",
      "secondChoice": "Haven't had enough. Let's order some more."
    },
    {
      "name": "The Lure of the Bling-Bling",
      "icon": "DatingSPCG_142302",
      "clue": "Visit the Market to unlock",
      "secondChoice": "Haven't been to that area yet."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Card Photo Capturer",
      "Reflective Photo Capturer",
      "Ultra-Precision Photo Capturer",
      "Rising Star",
      "Emerging Talent",
      "Shining Star",
      "Summer Chill Crushed Ice",
      "Fragrant Ice Delight",
      "Sweet IceFurry"
    ],
    "hates": [
      "Gilded Ceramic Bowl",
      "Blossom Porcelain Cup",
      "Mystic Potion Kettle"
    ]
  },
  "normalAttack": {
    "name": "Abyssal Swipe",
    "icon": "Icon/Skill/14201_Normal",
    "description": "Lashes out with both claws.\u000bStrike 1: <color=#ec6d21>&Param1& of ATK</color> as Umbra DMG.\u000bStrike 2: <color=#ec6d21>&Param2& of ATK</color> as Umbra DMG.\u000bStrike 3: <color=#ec6d21>&Param3& of ATK x2</color> as Umbra DMG.\u000bStrike 4: <color=#ec6d21>&Param4& of ATK x2</color> as Umbra DMG.\u000bStrike 5: <color=#ec6d21>&Param5& of ATK</color> as Umbra DMG.",
    "shortDescription": "Lashes out with both claws, dealing multiple instances of damage.",
    "params": [
      "12%/13.2%/14.4%/18%/19.2%/20.4%/22.8%/24%/25.2%/27.6%/28.8%/30%/31.2%",
      "14.3%/15.7%/17.1%/21.4%/22.9%/24.3%/27.1%/28.6%/30%/32.9%/34.3%/35.7%/37.2%",
      "28.6%/31.4%/34.3%/42.8%/45.7%/48.6%/54.3%/57.1%/60%/65.7%/68.6%/71.4%/74.3%",
      "4.1%/4.5%/4.9%/6.1%/6.5%/6.9%/7.7%/8.2%/8.6%/9.4%/9.8%/10.2%/10.6%",
      "24.4%/26.9%/29.3%/36.6%/39.1%/41.5%/46.4%/48.8%/51.3%/56.1%/58.6%/61%/63.5%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Nocturn Hooks",
    "icon": "Icon/Skill/14201_Skill_Main",
    "description": "Attacks with double hook punches, each dealing <color=#ec6d21>&Param1& of ATK x2</color>/<color=#ec6d21>&Param2& of ATK x4</color> as Umbra DMG. Inflicts ##Umbra Mark: Gloom#2018#.\u000bWhen Nocturn Hooks (Main Skill) deals DMG, increases the target's &Param3& by <color=#ec6d21>&Param4&</color> for &Param5&s.",
    "shortDescription": "Attacks with hook punches that deal multiple instances of DMG and inflicts ##Umbra Mark: Gloom#2018#. When the Main Skill deals DMG, increases the target's &Param3&.",
    "params": [
      "32%/35%/39%/48%/52%/55%/61%/64%/68%/74%/77%/80%/84%",
      "32%/35%/39%/48%/52%/55%/61%/64%/68%/74%/77%/80%/84%",
      "Umbra DMG Taken",
      "14%/17%/20%/28%/31%/33%/39%/42%/44%/50%/53%/55%/58%",
      "6"
    ],
    "hints": {
      "2018": {
        "id": 2018,
        "name": "Umbra Mark: Gloom",
        "description": "A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.",
        "params": []
      }
    },
    "cooldown": "12s"
  },
  "supportSkill": {
    "name": "Abyssal Hunter",
    "icon": "Icon/Skill/14201_Skill_Support",
    "description": "Strikes quickly with the steel claws, dealing <color=#ec6d21>&Param1& of ATK x8</color> as AoE Umbra DMG, and inflicting ##Umbra Mark: Gloom#2018#.\u000bWhen the Support Skill Abyssal Hunter deals DMG, increases the target's &Param2& by <color=#ec6d21>&Param3&</color> for &Param4&s.",
    "shortDescription": "Deals multiple instances of AoE DMG and inflicts ##Umbra Mark: Gloom#2018#. When the Support Skill deals DMG, increases the target's &Param2&.",
    "params": [
      "23.2%/25.5%/27.8%/34.8%/37.1%/39.4%/44.1%/46.4%/48.7%/53.4%/55.7%/58%/60.3%",
      "Umbra DMG Taken",
      "17%/21%/24%/34%/37%/41%/47%/51%/54%/61%/64%/68%/71%",
      "6"
    ],
    "hints": {
      "2018": {
        "id": 2018,
        "name": "Umbra Mark: Gloom",
        "description": "A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.",
        "params": []
      }
    },
    "cooldown": "12s"
  },
  "ultimate": {
    "name": "Dark Apocalypse",
    "icon": "Icon/Skill/14201_Ultra",
    "description": "Channels energy and keeps pulling nearby enemies close, dealing <color=#ec6d21>&Param1& of ATK</color> as AoE Umbra DMG and inflicting ##Umbra Mark: Gloom#2018#.",
    "shortDescription": "Pulls enemies in constantly, dealing AoE DMG and inflicting ##Umbra Mark: Gloom#2018#.",
    "params": [
      "718%/790%/862%/1077%/1149%/1221%/1364%/1436%/1508%/1652%/1723%/1795%/1867%"
    ],
    "hints": {
      "2018": {
        "id": 2018,
        "name": "Umbra Mark: Gloom",
        "description": "A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.",
        "params": []
      }
    },
    "cooldown": "30s",
    "energy": 285
  },
  "talents": [
    {
      "name": "Blasphemous Moon",
      "talents": [
        {
          "name": "Blasphemous Moon",
          "description": "When Cosette casts a skill, the squad's ATK is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "8.4%",
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
      "name": "Extinctive Downpour",
      "talents": [
        {
          "name": "Extinctive Downpour",
          "description": "When Cosette casts an Ultimate, the main Trekker's Umbra DMG is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "13.8%",
            "40"
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
      "name": "Cloud of Embers",
      "talents": [
        {
          "name": "Cloud of Embers",
          "description": "When any squadmate inflicts ##Umbra Mark#1019# on a target, increases the squad's Skill DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "13%",
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
      "name": "Determined to Leave",
      "talents": [
        {
          "name": "Determined to Leave",
          "description": "When Cosette deals DMG to a target, there is a 25% chance to increase the main Trekker's ATK by <color=#0abec5>&Param1&</color> for &Param2&s.",
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
      "name": "The New Me",
      "talents": [
        {
          "name": "The New Me",
          "description": "When there are 3 Umbra Trekkers in the squad, the squad's Skill DMG is increased by <color=#0abec5>&Param1&</color>.",
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
      "hp": 1142,
      "atk": 84
    },
    {
      "hp": 1484,
      "atk": 109
    },
    {
      "hp": 1827,
      "atk": 134
    },
    {
      "hp": 2169,
      "atk": 160
    },
    {
      "hp": 2512,
      "atk": 185
    },
    {
      "hp": 2854,
      "atk": 210
    },
    {
      "hp": 3197,
      "atk": 235
    },
    {
      "hp": 3539,
      "atk": 260
    },
    {
      "hp": 3882,
      "atk": 286
    },
    {
      "hp": 4225,
      "atk": 311
    },
    {
      "hp": 5070,
      "atk": 373
    },
    {
      "hp": 5412,
      "atk": 398
    },
    {
      "hp": 5755,
      "atk": 423
    },
    {
      "hp": 6098,
      "atk": 449
    },
    {
      "hp": 6440,
      "atk": 474
    },
    {
      "hp": 6783,
      "atk": 499
    },
    {
      "hp": 7125,
      "atk": 524
    },
    {
      "hp": 7468,
      "atk": 549
    },
    {
      "hp": 7810,
      "atk": 575
    },
    {
      "hp": 8153,
      "atk": 600
    },
    {
      "hp": 8496,
      "atk": 625
    },
    {
      "hp": 10197,
      "atk": 750
    },
    {
      "hp": 10539,
      "atk": 775
    },
    {
      "hp": 10882,
      "atk": 801
    },
    {
      "hp": 11224,
      "atk": 826
    },
    {
      "hp": 11567,
      "atk": 851
    },
    {
      "hp": 11910,
      "atk": 876
    },
    {
      "hp": 12252,
      "atk": 901
    },
    {
      "hp": 12595,
      "atk": 927
    },
    {
      "hp": 12937,
      "atk": 952
    },
    {
      "hp": 13280,
      "atk": 977
    },
    {
      "hp": 13623,
      "atk": 1002
    },
    {
      "hp": 16351,
      "atk": 1203
    },
    {
      "hp": 16694,
      "atk": 1228
    },
    {
      "hp": 17037,
      "atk": 1253
    },
    {
      "hp": 17379,
      "atk": 1278
    },
    {
      "hp": 17722,
      "atk": 1304
    },
    {
      "hp": 18064,
      "atk": 1329
    },
    {
      "hp": 18407,
      "atk": 1354
    },
    {
      "hp": 18749,
      "atk": 1379
    },
    {
      "hp": 19092,
      "atk": 1404
    },
    {
      "hp": 19435,
      "atk": 1430
    },
    {
      "hp": 19777,
      "atk": 1455
    },
    {
      "hp": 23729,
      "atk": 1746
    },
    {
      "hp": 24072,
      "atk": 1771
    },
    {
      "hp": 24414,
      "atk": 1796
    },
    {
      "hp": 24757,
      "atk": 1821
    },
    {
      "hp": 25099,
      "atk": 1846
    },
    {
      "hp": 25442,
      "atk": 1872
    },
    {
      "hp": 25784,
      "atk": 1897
    },
    {
      "hp": 26127,
      "atk": 1922
    },
    {
      "hp": 26470,
      "atk": 1947
    },
    {
      "hp": 26812,
      "atk": 1972
    },
    {
      "hp": 27155,
      "atk": 1998
    },
    {
      "hp": 32590,
      "atk": 2397
    },
    {
      "hp": 32933,
      "atk": 2423
    },
    {
      "hp": 33275,
      "atk": 2448
    },
    {
      "hp": 33618,
      "atk": 2473
    },
    {
      "hp": 33960,
      "atk": 2498
    },
    {
      "hp": 34303,
      "atk": 2523
    },
    {
      "hp": 34646,
      "atk": 2549
    },
    {
      "hp": 34988,
      "atk": 2574
    },
    {
      "hp": 35331,
      "atk": 2599
    },
    {
      "hp": 35673,
      "atk": 2624
    },
    {
      "hp": 36016,
      "atk": 2649
    },
    {
      "hp": 43222,
      "atk": 3179
    },
    {
      "hp": 43564,
      "atk": 3205
    },
    {
      "hp": 43907,
      "atk": 3230
    },
    {
      "hp": 44249,
      "atk": 3255
    },
    {
      "hp": 44592,
      "atk": 3280
    },
    {
      "hp": 44935,
      "atk": 3305
    },
    {
      "hp": 45277,
      "atk": 3331
    },
    {
      "hp": 45620,
      "atk": 3356
    },
    {
      "hp": 45962,
      "atk": 3381
    },
    {
      "hp": 46305,
      "atk": 3406
    },
    {
      "hp": 46647,
      "atk": 3431
    },
    {
      "hp": 55976,
      "atk": 4118
    },
    {
      "hp": 56319,
      "atk": 4143
    },
    {
      "hp": 56661,
      "atk": 4168
    },
    {
      "hp": 57004,
      "atk": 4193
    },
    {
      "hp": 57346,
      "atk": 4218
    },
    {
      "hp": 57689,
      "atk": 4244
    },
    {
      "hp": 58031,
      "atk": 4269
    },
    {
      "hp": 58374,
      "atk": 4294
    },
    {
      "hp": 58717,
      "atk": 4319
    },
    {
      "hp": 59059,
      "atk": 4344
    },
    {
      "hp": 59402,
      "atk": 4370
    },
    {
      "hp": 71278,
      "atk": 5243
    },
    {
      "hp": 71620,
      "atk": 5268
    },
    {
      "hp": 71963,
      "atk": 5294
    },
    {
      "hp": 72305,
      "atk": 5319
    },
    {
      "hp": 72648,
      "atk": 5344
    },
    {
      "hp": 72991,
      "atk": 5369
    },
    {
      "hp": 73333,
      "atk": 5394
    },
    {
      "hp": 73676,
      "atk": 5420
    },
    {
      "hp": 74018,
      "atk": 5445
    },
    {
      "hp": 74361,
      "atk": 5470
    },
    {
      "hp": 74704,
      "atk": 5495
    },
    {
      "hp": 74704,
      "atk": 5495
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
          "id": 20013,
          "name": "Crimson Tempter",
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
          "id": 20013,
          "name": "Crimson Tempter",
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
          "id": 20013,
          "name": "Crimson Tempter",
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
          "id": 20013,
          "name": "Crimson Tempter",
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