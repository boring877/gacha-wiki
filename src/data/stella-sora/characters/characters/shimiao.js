export const Shimiao = {
  "id": 113,
  "name": "Shimiao",
  "icon": "/stella/assets/Shimiao.png",
  "portrait": "/stella/assets/Shimiao_portrait.png",
  "background": "/stella/assets/Shimiao_background.png",
  "variants": {
    "base": "/stella/assets/Shimiao_base.png",
    "q": "/stella/assets/Shimiao_q.png",
    "gd": "/stella/assets/Shimiao_gd.png",
    "goods": "/stella/assets/Shimiao_goods.png",
    "qs": "/stella/assets/Shimiao_qs.png",
    "xl": "/stella/assets/Shimiao_xl.png",
    "gc": "/stella/assets/Shimiao_gc.png",
    "sk": "/stella/assets/Shimiao_portrait.png",
    "xxl": "/stella/assets/Shimiao.png",
    "qm": "/stella/assets/Shimiao_qm.png",
    "l": "/stella/assets/Shimiao_l.png",
    "s": "/stella/assets/Shimiao_s.png"
  },
  "description": "In addition to offering long-term on-site support to her companions, Shimiao is also skilled at handling problems herself. Perhaps this is why she embodies the perfect secretary.",
  "voiceActor": {
    "cn": "Chen Yang",
    "cnLocalized": "陈阳",
    "jp": "Ari Ozawa",
    "jpLocalized": "小澤亜李"
  },
  "birthday": "7.6",
  "grade": 4,
  "element": "Aqua",
  "position": "Vanguard",
  "attackType": "Melee",
  "style": "Inquisitive",
  "faction": "Baize Bureau",
  "tags": [
    "Vanguard",
    "Inquisitive",
    "Baize Bureau"
  ],
  "dateEvents": [
    {
      "name": "Alliance Sealed by Cake",
      "icon": "DatingSPCG_113301",
      "clue": "Visit the Dessert Shop to unlock",
      "secondChoice": "Haven't had enough. Let's order some more."
    },
    {
      "name": "Pressure Relief",
      "icon": "DatingSPCG_113302",
      "clue": "Visit the Market to unlock",
      "secondChoice": "There's an event you can join in the game area."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Stellanite Enchantment",
      "Moonlit Companion",
      "Cosmic Form",
      "Gilded Ceramic Bowl",
      "Blossom Porcelain Cup",
      "Mystic Potion Kettle"
    ],
    "hates": []
  },
  "normalAttack": {
    "name": "Chilling Drizzle",
    "icon": "Icon/Skill/11301_Normal",
    "description": "Use surging waves to attack 6 times, dealing DMG multiple times.\u000bStrike 1: <color=#fb8037>&Param1& of ATK</color> as Aqua DMG.\u000bStrike 2: <color=#fb8037>&Param1& of ATK</color> as Aqua DMG.\u000bStrike 3: <color=#fb8037>&Param2& of ATK</color> as Aqua DMG.\u000bStrike 4: <color=#fb8037>&Param3& of ATK</color> as Aqua DMG.\u000bStrike 5: <color=#fb8037>&Param3& of ATK</color> as Aqua DMG.\u000bStrike 6: <color=#fb8037>&Param4& of ATK</color> as Aqua DMG.",
    "shortDescription": "Creates surging waves, dealing damage multiple times.",
    "params": [
      "20.5%/22.5%/24.6%/30.7%/32.8%/34.8%/38.9%/41%/43%/47.1%/49.2%/51.2%/53.3%",
      "60%/65%/71%/89%/95%/101%/113%/119%/125%/137%/143%/149%/155%",
      "23.6%/26%/28.3%/35.4%/37.8%/40.1%/44.8%/47.2%/49.6%/54.3%/56.6%/59%/61.4%",
      "75%/83%/90%/113%/120%/128%/143%/151%/158%/173%/181%/188%/196%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Rising Tides",
    "icon": "Icon/Skill/11301_Skill_Main",
    "description": "Rising Tides is cast in two phases.\u000bPhase 1: Creates water waves, dealing <color=#fb8037>&Param1& of ATK x6</color> as Aqua DMG.\u000bPhase 2: Spins swiftly, dealing <color=#fb8037>&Param2& of ATK x6</color> as Aqua DMG.\u000bRising Tides (Main Skill) can trigger ##Aqua Mark: Torrent#2008#, dealing &Param3& of ATK as Aqua Mark DMG and inflicting ##Chill#1027#.",
    "shortDescription": "This skill is cast in two phases, dealing multiple instances of DMG during each phase. The Main Skill can trigger ##Aqua Mark: Torrent#2008#.",
    "params": [
      "51%/57%/62%/77%/82%/87%/98%/103%/108%/118%/123%/129%/134%",
      "25.7%/28.3%/30.9%/38.6%/41.1%/43.7%/48.8%/51.4%/54%/59.1%/61.7%/64.3%/66.8%",
      "48%/58%/68%/77%/87%/97%/106%/116%/126%"
    ],
    "hints": {
      "1027": {
        "id": 1027,
        "name": "Chill",
        "description": "Reduces Movement SPD by <color=#fb8037>25%</color> for <color=#fb8037>&Param2&</color>s, up to <color=#fb8037>&Param3&</color> stacks.\u000bAt <color=#fb8037>&Param3&</color> stacks, it converts into Freeze for <color=#fb8037>&Param4&</color>s.",
        "params": [
          "-25%",
          "10",
          "3",
          "3"
        ]
      },
      "2008": {
        "id": 2008,
        "name": "Aqua Mark: Torrent",
        "description": "A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.",
        "params": [
          "10"
        ]
      }
    },
    "cooldown": "16s"
  },
  "supportSkill": {
    "name": "Aqua Aide",
    "icon": "Icon/Skill/11301_Skill_Support",
    "description": "Splashes water to deal <color=#fb8037>&Param1& of ATK</color> as Aqua DMG. Then, launches 7 rounds of water blades at enemies, each round dealing <color=#fb8037>&Param2& of ATK x5</color> as Aqua DMG.\u000bAqua Aide (Support Skill) can trigger ##Aqua Mark: Torrent#2008#, dealing &Param3& of ATK as Aqua Mark DMG and inflicting ##Chill#1027#.",
    "shortDescription": "Splashes water and launches water blades constantly to deal DMG. The Support Skill can trigger ##Aqua Mark: Torrent#2008#.",
    "params": [
      "12.8%/14.1%/15.3%/19.2%/20.4%/21.7%/24.3%/25.6%/26.8%/29.4%/30.7%/31.9%/33.2%",
      "8.3%/9.2%/10%/12.5%/13.3%/14.1%/15.8%/16.6%/17.5%/19.1%/20%/20.8%/21.6%",
      "48%/58%/68%/77%/87%/97%/106%/116%/126%"
    ],
    "hints": {
      "1027": {
        "id": 1027,
        "name": "Chill",
        "description": "Reduces Movement SPD by <color=#fb8037>25%</color> for <color=#fb8037>&Param2&</color>s, up to <color=#fb8037>&Param3&</color> stacks.\u000bAt <color=#fb8037>&Param3&</color> stacks, it converts into Freeze for <color=#fb8037>&Param4&</color>s.",
        "params": [
          "-25%",
          "10",
          "3",
          "3"
        ]
      },
      "2008": {
        "id": 2008,
        "name": "Aqua Mark: Torrent",
        "description": "A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.",
        "params": [
          "10"
        ]
      }
    },
    "cooldown": "20s"
  },
  "ultimate": {
    "name": "Flood Mantra",
    "icon": "Icon/Skill/11301_Ultra",
    "description": "Roars and unleashes horizontal sweeps, dealing <color=#fb8037>&Param3&</color> and <color=#fb8037>&Param1& x4</color> as Aqua DMG in a large area.\u000bFlood Mantra (Ultimate) can trigger ##Aqua Mark: Torrent#2008#, dealing &Param2& of ATK as Aqua Mark DMG and inflicting ##Chill#1027#.",
    "shortDescription": "Roars and unleashes horizontal sweeps to deal multiple instances of DMG. The Ultimate can trigger ##Aqua Mark: Torrent#2008#.",
    "params": [
      "145%/160%/174%/218%/232%/247%/276%/290%/305%/334%/348%/363%/377%",
      "48%/58%/68%/77%/87%/97%/106%/116%/126%",
      "12.8%/14.1%/15.3%/19.2%/20.4%/21.7%/24.3%/25.6%/26.8%/29.4%/30.7%/31.9%/33.2%"
    ],
    "hints": {
      "1027": {
        "id": 1027,
        "name": "Chill",
        "description": "Reduces Movement SPD by <color=#fb8037>25%</color> for <color=#fb8037>&Param2&</color>s, up to <color=#fb8037>&Param3&</color> stacks.\u000bAt <color=#fb8037>&Param3&</color> stacks, it converts into Freeze for <color=#fb8037>&Param4&</color>s.",
        "params": [
          "-25%",
          "10",
          "3",
          "3"
        ]
      },
      "2008": {
        "id": 2008,
        "name": "Aqua Mark: Torrent",
        "description": "A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.",
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
      "name": "Ceaseless Drizzle",
      "talents": [
        {
          "name": "Ceaseless Drizzle",
          "description": "After Shimiao casts the Ultimate, her Aqua DMG is increased by an additional <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "24%",
            "15"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "7.5%"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "7.5%"
          ]
        }
      ]
    },
    {
      "name": "Splashing Raindrops",
      "talents": [
        {
          "name": "Splashing Raindrops",
          "description": "When Shimiao triggers ##Aqua Mark: Torrent#2008#, her ATK is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "12%",
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "7.5%"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "7.5%"
          ]
        }
      ]
    },
    {
      "name": "Clear Water: Traceless",
      "talents": [
        {
          "name": "Clear Water: Traceless",
          "description": "When Shimiao deals Skill DMG to a target, her next Ultimate DMG is increased by <color=#0abec5>&Param1&</color>, stacking up to &Param2& times.\u000bThis effect is removed after Shimiao casts her Ultimate.",
          "params": [
            "33%",
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "7.5%"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "7.5%"
          ]
        }
      ]
    },
    {
      "name": "Clear Water: Melody",
      "talents": [
        {
          "name": "Clear Water: Melody",
          "description": "When Shimiao deals Auto Attack DMG, her ATK is increased by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "1%",
            "6",
            "12"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "7.5%"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "7.5%"
          ]
        }
      ]
    },
    {
      "name": "Clear Water: Meditation",
      "talents": [
        {
          "name": "Clear Water: Meditation",
          "description": "When Shimiao kills a target, her Aqua DMG is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "12%",
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "7.5%"
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
          "name": "Auto Attack DMG Boost",
          "description": "Increases Auto Attack DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "7.5%"
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "hp": 1204,
      "atk": 100
    },
    {
      "hp": 1570,
      "atk": 130
    },
    {
      "hp": 1932,
      "atk": 160
    },
    {
      "hp": 2294,
      "atk": 190
    },
    {
      "hp": 2656,
      "atk": 220
    },
    {
      "hp": 3019,
      "atk": 250
    },
    {
      "hp": 3381,
      "atk": 280
    },
    {
      "hp": 3743,
      "atk": 310
    },
    {
      "hp": 4105,
      "atk": 340
    },
    {
      "hp": 4468,
      "atk": 370
    },
    {
      "hp": 5361,
      "atk": 444
    },
    {
      "hp": 5723,
      "atk": 474
    },
    {
      "hp": 6086,
      "atk": 504
    },
    {
      "hp": 6448,
      "atk": 534
    },
    {
      "hp": 6810,
      "atk": 564
    },
    {
      "hp": 7172,
      "atk": 594
    },
    {
      "hp": 7535,
      "atk": 624
    },
    {
      "hp": 7897,
      "atk": 654
    },
    {
      "hp": 8259,
      "atk": 684
    },
    {
      "hp": 8621,
      "atk": 714
    },
    {
      "hp": 8984,
      "atk": 744
    },
    {
      "hp": 10782,
      "atk": 893
    },
    {
      "hp": 11145,
      "atk": 923
    },
    {
      "hp": 11507,
      "atk": 953
    },
    {
      "hp": 11869,
      "atk": 983
    },
    {
      "hp": 12231,
      "atk": 1013
    },
    {
      "hp": 12593,
      "atk": 1043
    },
    {
      "hp": 12956,
      "atk": 1073
    },
    {
      "hp": 13318,
      "atk": 1103
    },
    {
      "hp": 13680,
      "atk": 1133
    },
    {
      "hp": 14042,
      "atk": 1163
    },
    {
      "hp": 14405,
      "atk": 1193
    },
    {
      "hp": 17290,
      "atk": 1432
    },
    {
      "hp": 17652,
      "atk": 1462
    },
    {
      "hp": 18015,
      "atk": 1492
    },
    {
      "hp": 18377,
      "atk": 1522
    },
    {
      "hp": 18739,
      "atk": 1552
    },
    {
      "hp": 19101,
      "atk": 1582
    },
    {
      "hp": 19464,
      "atk": 1612
    },
    {
      "hp": 19826,
      "atk": 1642
    },
    {
      "hp": 20188,
      "atk": 1672
    },
    {
      "hp": 20550,
      "atk": 1702
    },
    {
      "hp": 20912,
      "atk": 1732
    },
    {
      "hp": 25091,
      "atk": 2078
    },
    {
      "hp": 25453,
      "atk": 2108
    },
    {
      "hp": 25815,
      "atk": 2138
    },
    {
      "hp": 26178,
      "atk": 2168
    },
    {
      "hp": 26540,
      "atk": 2198
    },
    {
      "hp": 26902,
      "atk": 2228
    },
    {
      "hp": 27264,
      "atk": 2258
    },
    {
      "hp": 27627,
      "atk": 2288
    },
    {
      "hp": 27989,
      "atk": 2318
    },
    {
      "hp": 28351,
      "atk": 2348
    },
    {
      "hp": 28713,
      "atk": 2378
    },
    {
      "hp": 34461,
      "atk": 2854
    },
    {
      "hp": 34823,
      "atk": 2884
    },
    {
      "hp": 35185,
      "atk": 2914
    },
    {
      "hp": 35547,
      "atk": 2944
    },
    {
      "hp": 35909,
      "atk": 2974
    },
    {
      "hp": 36272,
      "atk": 3004
    },
    {
      "hp": 36634,
      "atk": 3034
    },
    {
      "hp": 36996,
      "atk": 3064
    },
    {
      "hp": 37358,
      "atk": 3094
    },
    {
      "hp": 37721,
      "atk": 3124
    },
    {
      "hp": 38083,
      "atk": 3154
    },
    {
      "hp": 45702,
      "atk": 3785
    },
    {
      "hp": 46064,
      "atk": 3815
    },
    {
      "hp": 46427,
      "atk": 3845
    },
    {
      "hp": 46789,
      "atk": 3875
    },
    {
      "hp": 47151,
      "atk": 3905
    },
    {
      "hp": 47513,
      "atk": 3935
    },
    {
      "hp": 47876,
      "atk": 3965
    },
    {
      "hp": 48238,
      "atk": 3995
    },
    {
      "hp": 48600,
      "atk": 4025
    },
    {
      "hp": 48962,
      "atk": 4055
    },
    {
      "hp": 49324,
      "atk": 4085
    },
    {
      "hp": 59188,
      "atk": 4902
    },
    {
      "hp": 59551,
      "atk": 4932
    },
    {
      "hp": 59913,
      "atk": 4962
    },
    {
      "hp": 60275,
      "atk": 4992
    },
    {
      "hp": 60637,
      "atk": 5022
    },
    {
      "hp": 60999,
      "atk": 5052
    },
    {
      "hp": 61362,
      "atk": 5082
    },
    {
      "hp": 61724,
      "atk": 5112
    },
    {
      "hp": 62086,
      "atk": 5142
    },
    {
      "hp": 62448,
      "atk": 5172
    },
    {
      "hp": 62811,
      "atk": 5202
    },
    {
      "hp": 75368,
      "atk": 6242
    },
    {
      "hp": 75730,
      "atk": 6272
    },
    {
      "hp": 76092,
      "atk": 6302
    },
    {
      "hp": 76455,
      "atk": 6332
    },
    {
      "hp": 76817,
      "atk": 6362
    },
    {
      "hp": 77179,
      "atk": 6392
    },
    {
      "hp": 77541,
      "atk": 6422
    },
    {
      "hp": 77904,
      "atk": 6452
    },
    {
      "hp": 78266,
      "atk": 6482
    },
    {
      "hp": 78628,
      "atk": 6512
    },
    {
      "hp": 78990,
      "atk": 6542
    },
    {
      "hp": 78990,
      "atk": 6542
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
          "id": 21063,
          "name": "Tidal Essence",
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
          "id": 21063,
          "name": "Tidal Essence",
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
          "id": 21063,
          "name": "Tidal Essence",
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
          "id": 21063,
          "name": "Tidal Essence",
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