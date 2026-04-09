export const Iris = {
  "id": 111,
  "name": "Iris",
  "icon": "/stella/assets/Iris.png",
  "portrait": "/stella/assets/Iris_portrait.png",
  "background": "/stella/assets/Iris_background.png",
  "variants": {
    "base": "/stella/assets/Iris_base.png",
    "q": "/stella/assets/Iris_q.png",
    "gd": "/stella/assets/Iris_gd.png",
    "goods": "/stella/assets/Iris_goods.png",
    "qs": "/stella/assets/Iris_qs.png",
    "xl": "/stella/assets/Iris_xl.png",
    "gc": "/stella/assets/Iris_gc.png",
    "sk": "/stella/assets/Iris_portrait.png",
    "xxl": "/stella/assets/Iris.png",
    "qm": "/stella/assets/Iris_qm.png",
    "l": "/stella/assets/Iris_l.png",
    "s": "/stella/assets/Iris_s.png"
  },
  "description": "Iris' notebook is filled with magical formulas. Little-trained in close combat, she prefers to use ice to wear down the enemy from a safe distance.",
  "voiceActor": {
    "cn": "Chen Zhang",
    "cnLocalized": "陈章",
    "jp": "Yuko Natsuyoshi",
    "jpLocalized": "夏吉ゆうこ"
  },
  "birthday": "5.1",
  "grade": 4,
  "element": "Aqua",
  "position": "Versatile",
  "attackType": "Ranged",
  "style": "Creative",
  "faction": "New Star Guild",
  "tags": [
    "Versatile",
    "Creative",
    "New Star Guild"
  ],
  "dateEvents": [
    {
      "name": "The Bitter and the Sweet",
      "icon": "DatingSPCG_111301",
      "clue": "Visit the Dessert Shop to unlock",
      "secondChoice": "It's still early. Chat a bit longer."
    },
    {
      "name": "Library Talk",
      "icon": "DatingSPCG_111303",
      "clue": "Visit the Academy to unlock",
      "secondChoice": "Gonna look around inside the library."
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
    "name": "Method of Fluxions",
    "icon": "Icon/Skill/11101_Normal",
    "description": "Shoots 3 Frost Arrows at the target.\u000bStrike 1: <color=#fb8037>&Param1& of ATK</color> as Aqua DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Aqua DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK ×3</color> as Aqua DMG.\u000bWhen close, swings her school bag to attack, dealing <color=#fb8037>&Param4& of ATK</color> as Aqua DMG.",
    "shortDescription": "Fires Frost Arrows at the target. When close, swings her school bag to attack.",
    "params": [
      "12.4%/13.7%/14.9%/18.7%/19.9%/21.1%/23.6%/24.9%/26.1%/27.3%/28.6%/29.8%/31.1%",
      "8.3%/9.1%/10%/12.5%/13.3%/14.1%/15.8%/16.6%/17.4%/18.3%/19.1%/19.9%/20.8%",
      "6.9%/7.6%/8.3%/10.4%/11.1%/11.7%/13.1%/13.8%/14.5%/15.2%/15.9%/16.6%/17.3%",
      "27%/29.7%/32.4%/40.5%/43.2%/45.9%/51.2%/53.9%/56.6%/59.3%/62%/64.7%/67.4%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Frozen Path",
    "icon": "Icon/Skill/11101_Skill_Main",
    "description": "Fires a Glacier Greatarrow at the target, dealing <color=#fb8037>&Param1& of ATK</color> as Aqua DMG.\u000bFrozen Path (Main Skill) can trigger ##Aqua Mark: Torrent#2008#, dealing &Param2& of ATK as AoE Aqua Mark DMG and inflicting ##Chill#1027#.",
    "shortDescription": "Fires a Glacier Greatarrow at the target.\u000bThe Main Skill can trigger ##Aqua Mark: Torrent#2008#.",
    "params": [
      "108%/119%/130%/162%/173%/184%/206%/216%/227%/238%/249%/260%/271%",
      "21.9%/26.3%/30.7%/35.1%/39.4%/43.8%/48.2%/52.6%/57%"
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
    "cooldown": "6s"
  },
  "supportSkill": {
    "name": "Iceberg Surge",
    "icon": "Icon/Skill/11101_Skill_Support",
    "description": "Generates a Glacier Array, dealing <color=#fb8037>&Param1& of ATK</color> as AoE Aqua DMG every 0.5s for a total of 4s. Also inflicts ##Aqua Mark: Torrent#2008#.",
    "shortDescription": "Generates a Glacier Array, dealing DMG over time.\u000bThe Support Skill can inflict ##Aqua Mark: Torrent#2008#.",
    "params": [
      "54%/59%/64%/70%/75%/80%/86%/91%/96%/102%/107%/113%/118%"
    ],
    "hints": {
      "2008": {
        "id": 2008,
        "name": "Aqua Mark: Torrent",
        "description": "A special status applied to the target by some Aqua Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Aqua Trekkers. When triggered, deals AoE DMG and applies Chill.",
        "params": [
          "10"
        ]
      }
    },
    "cooldown": "12s"
  },
  "ultimate": {
    "name": "Arctic Vortex",
    "icon": "Icon/Skill/11101_Ultra",
    "description": "Creates a Snowbound Domain that deals <color=#fb8037>&Param1& of ATK</color> as Aqua DMG in a large area every 0.5s for a total of 5s.",
    "shortDescription": "Creates a Snowbound Domain, continuously attacking nearby targets.",
    "params": [
      "84%/92%/101%/126%/134%/142%/159%/168%/176%/184%/193%/201%/209%"
    ],
    "hints": {},
    "cooldown": "30s",
    "energy": 285
  },
  "talents": [
    {
      "name": "Ultimate Optimization Plan",
      "talents": [
        {
          "name": "Ultimate Optimization Plan",
          "description": "While Iris is casting her Ultimate, increases the squad's ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "35%"
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
      "name": "Premium Service",
      "talents": [
        {
          "name": "Premium Service",
          "description": "Increases Iris' Skill DMG to targets inflicted with ##Aqua Mark: Torrent#2008# by <color=#0abec5>&Param1&</color>.",
          "params": [
            "12%"
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
      "name": "Power of Knowledge",
      "talents": [
        {
          "name": "Power of Knowledge",
          "description": "When Iris deals Skill DMG, there is a 20% chance to increase the squad's ATK by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "8.4%",
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
      "name": "Veteran's Tips",
      "talents": [
        {
          "name": "Veteran's Tips",
          "description": "When ##Aqua Mark#1018# is triggered, increases Iris' Aqua DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
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
      "name": "Enlightened Advice",
      "talents": [
        {
          "name": "Enlightened Advice",
          "description": "Increases Iris' Skill DMG dealt to normal and elite targets by <color=#0abec5>&Param1&</color>.",
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
      "hp": 666,
      "atk": 97
    },
    {
      "hp": 866,
      "atk": 126
    },
    {
      "hp": 1066,
      "atk": 155
    },
    {
      "hp": 1266,
      "atk": 184
    },
    {
      "hp": 1466,
      "atk": 213
    },
    {
      "hp": 1666,
      "atk": 242
    },
    {
      "hp": 1865,
      "atk": 271
    },
    {
      "hp": 2065,
      "atk": 300
    },
    {
      "hp": 2265,
      "atk": 329
    },
    {
      "hp": 2465,
      "atk": 358
    },
    {
      "hp": 2958,
      "atk": 430
    },
    {
      "hp": 3158,
      "atk": 459
    },
    {
      "hp": 3358,
      "atk": 488
    },
    {
      "hp": 3558,
      "atk": 517
    },
    {
      "hp": 3758,
      "atk": 546
    },
    {
      "hp": 3958,
      "atk": 575
    },
    {
      "hp": 4158,
      "atk": 604
    },
    {
      "hp": 4358,
      "atk": 633
    },
    {
      "hp": 4558,
      "atk": 662
    },
    {
      "hp": 4758,
      "atk": 691
    },
    {
      "hp": 4958,
      "atk": 720
    },
    {
      "hp": 5950,
      "atk": 864
    },
    {
      "hp": 6150,
      "atk": 893
    },
    {
      "hp": 6350,
      "atk": 923
    },
    {
      "hp": 6550,
      "atk": 952
    },
    {
      "hp": 6750,
      "atk": 981
    },
    {
      "hp": 6950,
      "atk": 1010
    },
    {
      "hp": 7150,
      "atk": 1039
    },
    {
      "hp": 7350,
      "atk": 1068
    },
    {
      "hp": 7550,
      "atk": 1097
    },
    {
      "hp": 7750,
      "atk": 1126
    },
    {
      "hp": 7950,
      "atk": 1155
    },
    {
      "hp": 9542,
      "atk": 1386
    },
    {
      "hp": 9742,
      "atk": 1415
    },
    {
      "hp": 9942,
      "atk": 1444
    },
    {
      "hp": 10142,
      "atk": 1473
    },
    {
      "hp": 10342,
      "atk": 1502
    },
    {
      "hp": 10542,
      "atk": 1531
    },
    {
      "hp": 10742,
      "atk": 1560
    },
    {
      "hp": 10942,
      "atk": 1589
    },
    {
      "hp": 11142,
      "atk": 1618
    },
    {
      "hp": 11342,
      "atk": 1648
    },
    {
      "hp": 11542,
      "atk": 1677
    },
    {
      "hp": 13847,
      "atk": 2012
    },
    {
      "hp": 14047,
      "atk": 2041
    },
    {
      "hp": 14247,
      "atk": 2070
    },
    {
      "hp": 14447,
      "atk": 2099
    },
    {
      "hp": 14647,
      "atk": 2128
    },
    {
      "hp": 14847,
      "atk": 2157
    },
    {
      "hp": 15047,
      "atk": 2186
    },
    {
      "hp": 15247,
      "atk": 2215
    },
    {
      "hp": 15447,
      "atk": 2244
    },
    {
      "hp": 15647,
      "atk": 2273
    },
    {
      "hp": 15846,
      "atk": 2302
    },
    {
      "hp": 19019,
      "atk": 2763
    },
    {
      "hp": 19218,
      "atk": 2792
    },
    {
      "hp": 19418,
      "atk": 2821
    },
    {
      "hp": 19618,
      "atk": 2850
    },
    {
      "hp": 19818,
      "atk": 2879
    },
    {
      "hp": 20018,
      "atk": 2908
    },
    {
      "hp": 20218,
      "atk": 2937
    },
    {
      "hp": 20418,
      "atk": 2966
    },
    {
      "hp": 20618,
      "atk": 2995
    },
    {
      "hp": 20818,
      "atk": 3024
    },
    {
      "hp": 21018,
      "atk": 3053
    },
    {
      "hp": 25223,
      "atk": 3664
    },
    {
      "hp": 25423,
      "atk": 3693
    },
    {
      "hp": 25623,
      "atk": 3722
    },
    {
      "hp": 25823,
      "atk": 3751
    },
    {
      "hp": 26022,
      "atk": 3780
    },
    {
      "hp": 26222,
      "atk": 3809
    },
    {
      "hp": 26422,
      "atk": 3838
    },
    {
      "hp": 26622,
      "atk": 3867
    },
    {
      "hp": 26822,
      "atk": 3896
    },
    {
      "hp": 27022,
      "atk": 3925
    },
    {
      "hp": 27222,
      "atk": 3954
    },
    {
      "hp": 32666,
      "atk": 4745
    },
    {
      "hp": 32866,
      "atk": 4774
    },
    {
      "hp": 33066,
      "atk": 4803
    },
    {
      "hp": 33266,
      "atk": 4832
    },
    {
      "hp": 33466,
      "atk": 4861
    },
    {
      "hp": 33666,
      "atk": 4890
    },
    {
      "hp": 33866,
      "atk": 4919
    },
    {
      "hp": 34066,
      "atk": 4948
    },
    {
      "hp": 34266,
      "atk": 4977
    },
    {
      "hp": 34466,
      "atk": 5006
    },
    {
      "hp": 34666,
      "atk": 5036
    },
    {
      "hp": 41596,
      "atk": 6042
    },
    {
      "hp": 41796,
      "atk": 6071
    },
    {
      "hp": 41996,
      "atk": 6100
    },
    {
      "hp": 42196,
      "atk": 6129
    },
    {
      "hp": 42396,
      "atk": 6158
    },
    {
      "hp": 42596,
      "atk": 6187
    },
    {
      "hp": 42796,
      "atk": 6216
    },
    {
      "hp": 42996,
      "atk": 6246
    },
    {
      "hp": 43196,
      "atk": 6275
    },
    {
      "hp": 43395,
      "atk": 6304
    },
    {
      "hp": 43595,
      "atk": 6333
    },
    {
      "hp": 43595,
      "atk": 6333
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
          "id": 20063,
          "name": "Nightlit Haven",
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
          "id": 20063,
          "name": "Nightlit Haven",
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
          "id": 20063,
          "name": "Nightlit Haven",
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
          "id": 20063,
          "name": "Nightlit Haven",
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