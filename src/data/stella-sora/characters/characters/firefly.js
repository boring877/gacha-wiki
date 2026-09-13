// Firefly Character Data - Stella Sora
// Generated from live game tables (Sep 8 2026 patch, v1.15.0)

export const Firefly = {
  "id": 115,
  "name": "Firefly",
  "icon": "/stella/assets/Firefly.png",
  "portrait": "/stella/assets/Firefly_portrait.png",
  "background": "/stella/assets/Firefly_background.png",
  "description": "Firefly, who controls transformable armament, is said to be a super weapon secretly developed by Grace Imperium. The firefly-like glow, when gathered in multitude, can become a cannon capable of extreme destruction.",
  "voiceActor": {
    "cn": "Liu Wen",
    "cnLocalized": "刘雯",
    "jp": "Maria Naganawa",
    "jpLocalized": "長縄まりあ"
  },
  "birthday": "5.5",
  "grade": 5,
  "element": "Lux",
  "position": "Versatile",
  "attackType": "Ranged",
  "style": "Collector",
  "faction": "Grace Imperium",
  "tags": [
    "Versatile",
    "Collector",
    "Grace Imperium"
  ],
  "dateEvents": [
    {
      "name": "The Hideaway",
      "icon": "DatingSPCG_115301",
      "clue": "Visit the Academy to unlock",
      "secondChoice": "Suddenly, she vanishes. You search everywhere and eventually spot her hair sticking up from behind a stack of books, beckoning you closer."
    },
    {
      "name": "Vantage Point",
      "icon": "DatingSPCG_115302",
      "clue": "Visit the Market to unlock",
      "secondChoice": "You and Firefly watch the magic show in the crowd, but she's too short and her view is blocked.\nShe jumps anxiously, her stray hair sticking straight up. If only that counted toward her height, maybe she'd be tall enough... Alas, she can't see through her hair."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Card Photo Capturer",
      "Cosmic Form",
      "Fragrant Ice Delight",
      "Moonlit Companion",
      "Reflective Photo Capturer",
      "Stellanite Enchantment",
      "Summer Chill Crushed Ice",
      "Sweet IceFurry",
      "Ultra-Precision Photo Capturer"
    ],
    "hates": [
      "Deluxe Blower",
      "Exquisite Blower",
      "Portable Blower"
    ]
  },
  "normalAttack": {
    "name": "Meteor Arrow",
    "icon": "Icon/Skill/11501_Normal",
    "description": "Throws electromagnetic darts to attack the target.\u000bStrike 1: <color=#fb8037>&Param1&</color> of ATK as Lux Auto ATK DMG.\u000bStrike 2: <color=#fb8037>&Param2&</color> of ATK as Lux Auto ATK DMG.\u000bStrike 3: <color=#fb8037>&Param3& x4</color> of ATK as Lux Auto ATK DMG.",
    "shortDescription": "Throws electromagnetic darts at the target, dealing DMG.",
    "params": [
      "62%/71%/81%/108%/117%/126%/143%/151%/158%/173%/185%/198%/210%",
      "53%/60%/68%/92%/99%/107%/121%/128%/134%/147%/157%/168%/178%",
      "28%/32%/37%/49%/53%/57%/65%/68%/72%/79%/84%/90%/95%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Star Barrage",
    "icon": "Icon/Skill/11501_Skill_Main",
    "description": "Firefly enters ##Artillery Form#4030# for 14s,\u000bduring which, transforms all 4 ##Avalanches#4032# into Avalanche: Floating Cannons, which take turns firing at the target, dealing <color=#fb8037>&Param1&</color> of ATK as Lux Skill DMG.\u000bAvalanche: Floating Cannons can trigger ##Lux Mark#1015# and generate ##Lucent#4028#: deals &Param2& of ATK as AoE Lux Mark DMG and inflicts 1 stack of ##Glimmer#4029#.",
    "shortDescription": "Firefly enters ##Artillery Form#4030#, transforming ##Avalanches#4032# into Avalanche: Floating Cannons to attack the target for a period of time.\u000bAvalanche: Floating Cannons can trigger ##Lux Mark#1015# and generate ##Glimmer#4028#.",
    "params": [
      "12%/14%/16%/22%/24%/26%/29%/31%/32%/35%/38%/41%/43%",
      "17%/22%/27%/32%/37%/42%/47%/52%/57%"
    ],
    "hints": {
      "4030": {
        "id": 4030,
        "name": "Artillery Form",
        "description": "The ranged attack form Firefly enters after casting the Main Skill. Uses floating cannons to strike targets for a period of time."
      },
      "4032": {
        "id": 4032,
        "name": "Avalanche",
        "description": "Firefly's personal combat unit, which remains in standby mode while following Firefly. When required, it transforms into various combat forms to attack Firefly's targets."
      },
      "1015": {
        "id": 1015,
        "name": "Lux Mark",
        "description": "The generic name for all Lux Marks.\u000bWhen triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated."
      },
      "4028": {
        "id": 4028,
        "name": "Lucent",
        "description": "When certain Lux Trekkers trigger a Mark, they deal AoE DMG and inflict Glimmer."
      },
      "4029": {
        "id": 4029,
        "name": "Glimmer"
      }
    },
    "cooldown": "20s"
  },
  "supportSkill": {
    "name": "Starflare Pursuit",
    "icon": "Icon/Skill/11501_Skill_Support",
    "description": "Firefly enters ##Sword Form#4031# for 16s\u000b, during which, transforms 2 ##Avalanches#4032# into Avalanche: Giant Sword and 2 ##Avalanches#4032# into Avalanche: Flying Blades.\u000bFirefly wields Avalanche: Giant Sword to attack the target.\u000bStrike 1: <color=#fb8037>&Param1&</color> of ATK as Lux Auto ATK DMG.\u000bStrike 2: <color=#fb8037>&Param2&</color> of ATK as Lux Auto ATK DMG.\u000bStrike 3: <color=#fb8037>&Param3&</color> of ATK as Lux Auto ATK DMG.\u000bStrike 4: <color=#fb8037>&Param4& x5</color> of ATK as Lux Auto ATK DMG.\u000bWhile ##Sword Form#4031# is active, automatically fires all Avalanche: Flying Blades every 3s to attack the target, dealing <color=#fb8037>&Param5&</color> of ATK as Lux Skill DMG to targets along their path.\u000bAvalanche: Giant Sword and Avalanche: Flying Blades inflict ##Lux Mark: Radiance#2016# when dealing DMG.",
    "shortDescription": "Firefly enters ##Sword Form#4031#, transforming ##Avalanches#4032# into Avalanche: Giant Sword and Avalanche: Flying Blades to attack the target for a period of time.\u000bAvalanche: Giant Sword and Avalanche: Flying Blades can inflict ##Lux Mark: Radiance#2016#.",
    "params": [
      "90%/104%/117%/158%/171%/183%/209%/219%/230%/252%/270%/288%/306%",
      "90%/104%/117%/158%/171%/183%/209%/219%/230%/252%/270%/288%/306%",
      "90%/104%/117%/158%/171%/183%/209%/219%/230%/252%/270%/288%/306%",
      "66%/76%/86%/116%/125%/134%/153%/161%/169%/185%/198%/211%/224%",
      "48%/55%/62%/84%/91%/97%/111%/116%/122%/134%/143%/153%/162%"
    ],
    "hints": {
      "4031": {
        "id": 4031,
        "name": "Sword Form",
        "description": "The melee attack form Firefly enters after casting the Support Skill. Wields a giant sword and launches flying blades to strike targets for a period of time."
      },
      "4032": {
        "id": 4032,
        "name": "Avalanche",
        "description": "Firefly's personal combat unit, which remains in standby mode while following Firefly. When required, it transforms into various combat forms to attack Firefly's targets."
      },
      "2016": {
        "id": 2016,
        "name": "Lux Mark: Radiance",
        "description": "Some Lux Trekkers apply a special status to the target for 10 sec.\u000bWhen triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "24s"
  },
  "ultimate": {
    "name": "Stellar Torrent",
    "icon": "Icon/Skill/11501_Ultra",
    "description": "Combines ##Avalanches#4032# into 2 gigantic cannons and fires forward 2 times. Each shot deals <color=#fb8037>&Param1& x2</color> of ATK as Lux Ultimate DMG and then transforms into a giant sword to perform a forward slash, dealing <color=#fb8037>&Param2&</color> and <color=#fb8037>&Param3&</color> of ATK as Lux Ultimate DMG.\u000bAll of Firefly's skill Cooldowns are reset when Stellar Torrent ends.",
    "shortDescription": "Combines ##Avalanches#4032# into gigantic cannons and continuously fires at the target, then combines them into a giant sword to strike the target, dealing multiple instances of DMG.",
    "params": [
      "272%/313%/353%/476%/514%/552%/628%/661%/693%/758%/813%/867%/922%",
      "717%/825%/932%/1255%/1355%/1455%/1656%/1742%/1828%/2000%/2144%/2287%/2431%",
      "586%/673%/761%/1025%/1107%/1189%/1353%/1423%/1493%/1634%/1751%/1868%/1985%"
    ],
    "hints": {
      "4032": {
        "id": 4032,
        "name": "Avalanche",
        "description": "Firefly's personal combat unit, which remains in standby mode while following Firefly. When required, it transforms into various combat forms to attack Firefly's targets."
      }
    },
    "cooldown": "40s",
    "energy": 300
  },
  "talents": [
    {
      "name": "Photon Diffusion",
      "talents": [
        {
          "name": "Photon Diffusion",
          "description": "When the squad triggers a ##Lux Mark#1015# on a target, increases the Lux DMG Taken by this target by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "14%",
            "6"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "Improved Potential: Main",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "Improved Potential: Main",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Improved Skill: Auto Attack",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "Improved Potential: Generic",
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
          "name": "Improved Skill: Support",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    },
    {
      "name": "Shining Blades",
      "talents": [
        {
          "name": "Shining Blades",
          "description": "After Firefly casts a skill, her ATK is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "20%",
            "30"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "Improved Potential: Main",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "Improved Potential: Main",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Improved Skill: Main",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "Improved Potential: Generic",
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
          "name": "Improved Skill: Support",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    },
    {
      "name": "Plushie and Safehouse",
      "talents": [
        {
          "name": "Plushie and Safehouse",
          "description": "After Firefly deals DMG to a target, increases the Lux DMG Taken by the target by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "2%",
            "8",
            "7"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "Improved Potential: Main",
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
          "name": "Improved Potential: Main",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Improved Potential: Generic",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "Improved Skill: Auto Attack",
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
          "name": "Improved Potential: Generic",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    },
    {
      "name": "Wings and Secret Friends",
      "talents": [
        {
          "name": "Wings and Secret Friends",
          "description": "When any Trekker inflicts ##Lux Mark#1015# on a target, increases Firefly's ATK by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "20%",
            "10"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "Improved Potential: Main",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "Improved Potential: Main",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "DEF Enhancement",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Improved Skill: Main",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "Improved Potential: Generic",
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
          "name": "Improved Skill: Support",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    },
    {
      "name": "Armaments and Angel Heart",
      "talents": [
        {
          "name": "Armaments and Angel Heart",
          "description": "Increases Firefly's Lux DMG to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
          "params": [
            "0.21%"
          ]
        },
        {
          "name": "Improved Potential: Main",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "Improved Potential: Main",
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
          "name": "Improved Potential: Main",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Improved Potential: Main",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Improved Skill: Auto Attack",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "Improved Potential: Generic",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "HP Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Improved Skill: Main",
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
      "hp": 782,
      "atk": 114
    },
    {
      "hp": 1017,
      "atk": 149
    },
    {
      "hp": 1252,
      "atk": 183
    },
    {
      "hp": 1486,
      "atk": 217
    },
    {
      "hp": 1721,
      "atk": 252
    },
    {
      "hp": 1956,
      "atk": 286
    },
    {
      "hp": 2190,
      "atk": 320
    },
    {
      "hp": 2425,
      "atk": 355
    },
    {
      "hp": 2660,
      "atk": 389
    },
    {
      "hp": 2895,
      "atk": 423
    },
    {
      "hp": 3474,
      "atk": 508
    },
    {
      "hp": 3708,
      "atk": 542
    },
    {
      "hp": 3943,
      "atk": 577
    },
    {
      "hp": 4178,
      "atk": 611
    },
    {
      "hp": 4412,
      "atk": 645
    },
    {
      "hp": 4647,
      "atk": 680
    },
    {
      "hp": 4882,
      "atk": 714
    },
    {
      "hp": 5116,
      "atk": 748
    },
    {
      "hp": 5351,
      "atk": 782
    },
    {
      "hp": 5586,
      "atk": 817
    },
    {
      "hp": 5820,
      "atk": 851
    },
    {
      "hp": 6986,
      "atk": 1022
    },
    {
      "hp": 7221,
      "atk": 1056
    },
    {
      "hp": 7456,
      "atk": 1090
    },
    {
      "hp": 7690,
      "atk": 1125
    },
    {
      "hp": 7925,
      "atk": 1159
    },
    {
      "hp": 8160,
      "atk": 1193
    },
    {
      "hp": 8394,
      "atk": 1228
    },
    {
      "hp": 8629,
      "atk": 1262
    },
    {
      "hp": 8864,
      "atk": 1296
    },
    {
      "hp": 9098,
      "atk": 1330
    },
    {
      "hp": 9333,
      "atk": 1365
    },
    {
      "hp": 11203,
      "atk": 1638
    },
    {
      "hp": 11438,
      "atk": 1673
    },
    {
      "hp": 11672,
      "atk": 1707
    },
    {
      "hp": 11907,
      "atk": 1741
    },
    {
      "hp": 12142,
      "atk": 1775
    },
    {
      "hp": 12376,
      "atk": 1810
    },
    {
      "hp": 12611,
      "atk": 1844
    },
    {
      "hp": 12846,
      "atk": 1878
    },
    {
      "hp": 13080,
      "atk": 1913
    },
    {
      "hp": 13315,
      "atk": 1947
    },
    {
      "hp": 13550,
      "atk": 1981
    },
    {
      "hp": 16257,
      "atk": 2377
    },
    {
      "hp": 16491,
      "atk": 2412
    },
    {
      "hp": 16726,
      "atk": 2446
    },
    {
      "hp": 16961,
      "atk": 2480
    },
    {
      "hp": 17195,
      "atk": 2515
    },
    {
      "hp": 17430,
      "atk": 2549
    },
    {
      "hp": 17665,
      "atk": 2583
    },
    {
      "hp": 17899,
      "atk": 2617
    },
    {
      "hp": 18134,
      "atk": 2652
    },
    {
      "hp": 18369,
      "atk": 2686
    },
    {
      "hp": 18604,
      "atk": 2720
    },
    {
      "hp": 22327,
      "atk": 3265
    },
    {
      "hp": 22562,
      "atk": 3299
    },
    {
      "hp": 22797,
      "atk": 3334
    },
    {
      "hp": 23032,
      "atk": 3368
    },
    {
      "hp": 23266,
      "atk": 3402
    },
    {
      "hp": 23501,
      "atk": 3437
    },
    {
      "hp": 23736,
      "atk": 3471
    },
    {
      "hp": 23970,
      "atk": 3505
    },
    {
      "hp": 24205,
      "atk": 3540
    },
    {
      "hp": 24440,
      "atk": 3574
    },
    {
      "hp": 24674,
      "atk": 3608
    },
    {
      "hp": 29611,
      "atk": 4330
    },
    {
      "hp": 29846,
      "atk": 4364
    },
    {
      "hp": 30080,
      "atk": 4399
    },
    {
      "hp": 30315,
      "atk": 4433
    },
    {
      "hp": 30550,
      "atk": 4467
    },
    {
      "hp": 30784,
      "atk": 4502
    },
    {
      "hp": 31019,
      "atk": 4536
    },
    {
      "hp": 31254,
      "atk": 4570
    },
    {
      "hp": 31488,
      "atk": 4605
    },
    {
      "hp": 31723,
      "atk": 4639
    },
    {
      "hp": 31958,
      "atk": 4673
    },
    {
      "hp": 38349,
      "atk": 5608
    },
    {
      "hp": 38584,
      "atk": 5642
    },
    {
      "hp": 38819,
      "atk": 5677
    },
    {
      "hp": 39053,
      "atk": 5711
    },
    {
      "hp": 39288,
      "atk": 5745
    },
    {
      "hp": 39523,
      "atk": 5779
    },
    {
      "hp": 39758,
      "atk": 5814
    },
    {
      "hp": 39992,
      "atk": 5848
    },
    {
      "hp": 40227,
      "atk": 5882
    },
    {
      "hp": 40462,
      "atk": 5917
    },
    {
      "hp": 40696,
      "atk": 5951
    },
    {
      "hp": 48832,
      "atk": 7141
    },
    {
      "hp": 49067,
      "atk": 7175
    },
    {
      "hp": 49302,
      "atk": 7209
    },
    {
      "hp": 49537,
      "atk": 7244
    },
    {
      "hp": 49771,
      "atk": 7278
    },
    {
      "hp": 50006,
      "atk": 7312
    },
    {
      "hp": 50241,
      "atk": 7347
    },
    {
      "hp": 50475,
      "atk": 7381
    },
    {
      "hp": 50710,
      "atk": 7415
    },
    {
      "hp": 50945,
      "atk": 7450
    },
    {
      "hp": 51179,
      "atk": 7484
    },
    {
      "hp": 51179,
      "atk": 7484
    }
  ],
  "upgrades": [],
  "skillUpgrades": []
};
