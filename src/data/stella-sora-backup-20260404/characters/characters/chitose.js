export const Chitose = {
  "id": 144,
  "name": "Chitose",
  "icon": "/stella/assets/Chitose.png",
  "portrait": "/stella/assets/Chitose_portrait.png",
  "background": "/stella/assets/Chitose_background.png",
  "variants": {
    "base": "/stella/assets/Chitose_base.png",
    "q": "/stella/assets/Chitose_q.png",
    "gd": "/stella/assets/Chitose_gd.png",
    "goods": "/stella/assets/Chitose_goods.png",
    "qs": "/stella/assets/Chitose_qs.png",
    "xl": "/stella/assets/Chitose_xl.png",
    "gc": "/stella/assets/Chitose_gc.png",
    "sk": "/stella/assets/Chitose_portrait.png",
    "xxl": "/stella/assets/Chitose.png",
    "qm": "/stella/assets/Chitose_qm.png",
    "l": "/stella/assets/Chitose_l.png",
    "s": "/stella/assets/Chitose_s.png"
  },
  "description": "Chitose is a formidable warrior who sees herself as the blade, with a presence as sharp as steel. Her blade can summon flowing currents, shaping them into water serpents that crash through enemy lines.",
  "voiceActor": {
    "cn": "Zhang Mengjiao",
    "cnLocalized": "张梦娇",
    "jp": "Hika Tsukishiro",
    "jpLocalized": "月城日花"
  },
  "birthday": "11.3",
  "grade": 5,
  "element": "Aqua",
  "position": "Vanguard",
  "attackType": "Melee",
  "style": "Inquisitive",
  "faction": "Freelance Trekker",
  "tags": [
    "Vanguard",
    "Inquisitive",
    "Freelance Trekker"
  ],
  "dateEvents": [
    {
      "name": "Port Talk",
      "icon": "DatingSPCG_144301",
      "clue": "Visit the Port to unlock",
      "secondChoice": "Take a small boat out for some coastal sightseeing."
    },
    {
      "name": "A Sugar-Tempered Blade",
      "icon": "DatingSPCG_144302",
      "clue": "Visit the Dessert Shop to unlock",
      "secondChoice": "Haven't had enough. Let's order some more."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Love Candle",
      "Blazing Wings",
      "Fiery Honeypot",
      "Whisper Wind Spinner",
      "Chilling Wind Spinner",
      "Blazing Wind Spinner",
      "Gilded Ceramic Bowl",
      "Blossom Porcelain Cup",
      "Mystic Potion Kettle"
    ],
    "hates": [
      "Rising Star",
      "Emerging Talent",
      "Shining Star"
    ]
  },
  "normalAttack": {
    "name": "Aeroflow",
    "icon": "Icon/Skill/14401_Normal",
    "description": "Wields the odachi to deal DMG multiple times.\u000bStrike 1: <color=#fb8037>&Param1& of ATK x2</color> as Aqua DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Aqua DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK</color> and <color=#fb8037>&Param8& of ATK</color> as Aqua DMG.\u000bStrike 4: <color=#fb8037>&Param4& of ATK x2</color> as Aqua DMG.\u000bStrike 5: <color=#fb8037>&Param5& of ATK x2</color> and <color=#fb8037>&Param9& of ATK</color> as Aqua DMG.\u000bStrike 6: <color=#fb8037>&Param6& of ATK</color> and <color=#fb8037>&Param7& of ATK</color> as Aqua DMG.",
    "shortDescription": "Wields the odachi to deal DMG multiple times.",
    "params": [
      "9.2%/10.6%/11.9%/16.1%/17.3%/18.6%/21.2%/22.3%/23.4%/25.6%/27.4%/29.3%/31.1%",
      "13.3%/15.3%/17.3%/23.3%/25.2%/27%/30.8%/32.4%/34%/37.2%/39.8%/42.5%/45.1%",
      "11.3%/12.9%/14.6%/19.7%/21.3%/22.9%/26%/27.4%/28.7%/31.4%/33.7%/35.9%/38.2%",
      "9.4%/10.8%/12.2%/16.4%/17.7%/19%/21.7%/22.8%/23.9%/26.1%/28%/29.9%/31.8%",
      "10.1%/11.6%/13.2%/17.7%/19.1%/20.5%/23.4%/24.6%/25.8%/28.2%/30.2%/32.3%/34.3%",
      "57%/66%/75%/100%/108%/117%/133%/139%/146%/160%/172%/183%/195%",
      "31%/35%/40%/54%/58%/62%/71%/75%/78%/86%/92%/98%/104%",
      "26.2%/30%/34%/46%/50%/53%/61%/64%/67%/73%/78%/84%/89%",
      "20.2%/23.3%/26.3%/35.4%/38.2%/41%/46.7%/49.1%/51.6%/56.4%/60.5%/64.5%/68.5%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Torrent Flash",
    "icon": "Icon/Skill/14401_Skill_Main",
    "description": "Dashes forward, dealing <color=#fb8037>&Param1& of ATK x2</color> as AoE Aqua DMG. It can be cast 2 times initially.\u000bAfter every 2 casts of Torrent Flash, the next Torrent Flash becomes Torrent Flash: Scale: Summons a Coiling Serpent, dealing <color=#fb8037>&Param2& of ATK x3</color> as AoE Aqua DMG.\u000bTorrent Flash (Main Skill) and Torrent Flash: Scale can trigger ##Aqua Mark#1018#, dealing &Param3& of ATK as AoE Aqua Mark DMG and inflicting ##Chill#1027#.",
    "shortDescription": "Dashes forward, dealing AoE Aqua DMG. After every 2 casts, the next cast of the skill is enhanced.\u000bThe Main Skill can trigger ##Aqua Mark#1018#.",
    "params": [
      "109%/126%/142%/191%/206%/222%/252%/265%/279%/305%/327%/349%/370%",
      "128%/147%/166%/223%/241%/259%/295%/310%/326%/356%/382%/407%/433%",
      "31%/40%/49%/58%/67%/76%/85%/95%/104%"
    ],
    "hints": {
      "1018": {
        "id": 1018,
        "name": "Aqua Mark",
        "description": "The generic name for all Aqua Marks.\u000bWhen triggered by specific Aqua Trekkers' attacks, the status is removed, and a special effect is activated.",
        "params": []
      },
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
      }
    },
    "cooldown": "8s"
  },
  "supportSkill": {
    "name": "Water Surge",
    "icon": "Icon/Skill/14401_Skill_Support",
    "description": "Deliver 3 rounds of rapid slashes, each round dealing <color=#fb8037>&Param1& of ATK x4</color> as AoE Aqua DMG.\u000bWhen casting the Support Skill, generates multiple Mirror Images nearby, dealing <color=#fb8037>&Param2& of ATK</color> as Aqua DMG. This effect can only be triggered up to 3 times.\u000bWater Surge (Support Skill) can trigger ##Aqua Mark#1018#, dealing &Param3& of ATK as AoE Aqua Mark DMG and inflicting ##Chill#1027#.",
    "shortDescription": "Deliver several rounds of rapid slashes, dealing AoE Aqua DMG.\u000bWhen casting the Support Skill, generates multiple Mirror Images nearby, dealing Aqua DMG.\u000bThe Support Skill can trigger ##Aqua Mark#1018#.",
    "params": [
      "9.8%/11.3%/12.7%/17.1%/18.5%/19.9%/22.6%/23.8%/24.9%/27.3%/29.3%/31.2%/33.2%",
      "18.4%/21.2%/24%/32.3%/34.9%/37.4%/42.6%/44.8%/47%/51.5%/55.1%/58.8%/62.5%",
      "31%/40%/49%/58%/67%/76%/85%/95%/104%"
    ],
    "hints": {
      "1018": {
        "id": 1018,
        "name": "Aqua Mark",
        "description": "The generic name for all Aqua Marks.\u000bWhen triggered by specific Aqua Trekkers' attacks, the status is removed, and a special effect is activated.",
        "params": []
      },
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
      }
    },
    "cooldown": "12s"
  },
  "ultimate": {
    "name": "Waves of Naraka",
    "icon": "Icon/Skill/14401_Ultra",
    "description": "Dual-wields katanas, dealing <color=#fb8037>&Param1& of ATK x11</color> as Aqua DMG in a large area. Then pulls in Coiling Serpent, dealing <color=#fb8037>&Param2& of ATK</color> as Aqua DMG in a large area.\u000bNaraka Waves (Ultimate) can trigger ##Aqua Mark#1018#, dealing &Param3& of ATK as AoE Aqua Mark DMG and inflicting ##Chill#1027#.",
    "shortDescription": "Dual-wields katanas and then pulls in Coiling Serpent, dealing Aqua DMG in a large area.\u000bThe Ultimate can trigger ##Aqua Mark#1018#.",
    "params": [
      "69%/79%/90%/121%/131%/140%/160%/168%/176%/193%/206%/220%/234%",
      "326%/374%/423%/570%/615%/661%/752%/791%/830%/908%/973%/1038%/1103%",
      "31%/40%/49%/58%/67%/76%/85%/95%/104%"
    ],
    "hints": {
      "1018": {
        "id": 1018,
        "name": "Aqua Mark",
        "description": "The generic name for all Aqua Marks.\u000bWhen triggered by specific Aqua Trekkers' attacks, the status is removed, and a special effect is activated.",
        "params": []
      },
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
      }
    },
    "cooldown": "30s",
    "energy": 285
  },
  "talents": [
    {
      "name": "Tideweaver",
      "talents": [
        {
          "name": "Tideweaver",
          "description": "When Chitose casts her Ultimate, increases her ATK by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "30%",
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
          "name": "Aqua DMG Boost",
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Aqua DMG Boost",
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Blade in Sleeves",
      "talents": [
        {
          "name": "Blade in Sleeves",
          "description": "Aqua DMG +<color=#0abec5>&Param1&</color> for &Param2&s when Chitose triggers ##Aqua Mark#1018#.",
          "params": [
            "20%",
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
          "name": "Aqua DMG Boost",
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "0.015"
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
          "name": "Aqua DMG Boost",
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "0.015"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Tideborn Shadow",
      "talents": [
        {
          "name": "Tideborn Shadow",
          "description": "When Chitose deals DMG to a target with Mirror Images, increases her ATK by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "1%",
            "8",
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
          "name": "Aqua DMG Boost",
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "0.015"
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
          "name": "Aqua DMG Boost",
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "0.015"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Afterrain Clarity",
      "talents": [
        {
          "name": "Afterrain Clarity",
          "description": "When Chitose triggers ##Aqua Mark#1018#, increases her Ultimate DMG by <color=#0abec5>&Param1&</color>, stacking up to &Param2& times.\u000bThis effect is removed after she casts her Ultimate.",
          "params": [
            "2.2%",
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
          "name": "Aqua DMG Boost",
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "0.015"
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
          "name": "Aqua DMG Boost",
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "0.015"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Cloudstrider's Melody",
      "talents": [
        {
          "name": "Cloudstrider's Melody",
          "description": "Increases Chitose's Aqua DMG dealt to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
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
          "name": "Aqua DMG Boost",
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "0.015"
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
          "name": "Aqua DMG Boost",
          "description": "Increases Aqua DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "0.015"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "hp": 1335,
      "atk": 115
    },
    {
      "hp": 1740,
      "atk": 150
    },
    {
      "hp": 2142,
      "atk": 184
    },
    {
      "hp": 2543,
      "atk": 219
    },
    {
      "hp": 2945,
      "atk": 254
    },
    {
      "hp": 3346,
      "atk": 288
    },
    {
      "hp": 3748,
      "atk": 323
    },
    {
      "hp": 4149,
      "atk": 357
    },
    {
      "hp": 4551,
      "atk": 392
    },
    {
      "hp": 4952,
      "atk": 427
    },
    {
      "hp": 5943,
      "atk": 512
    },
    {
      "hp": 6345,
      "atk": 546
    },
    {
      "hp": 6746,
      "atk": 581
    },
    {
      "hp": 7148,
      "atk": 616
    },
    {
      "hp": 7549,
      "atk": 650
    },
    {
      "hp": 7951,
      "atk": 685
    },
    {
      "hp": 8352,
      "atk": 719
    },
    {
      "hp": 8754,
      "atk": 754
    },
    {
      "hp": 9155,
      "atk": 789
    },
    {
      "hp": 9557,
      "atk": 823
    },
    {
      "hp": 9959,
      "atk": 858
    },
    {
      "hp": 11953,
      "atk": 1029
    },
    {
      "hp": 12354,
      "atk": 1064
    },
    {
      "hp": 12756,
      "atk": 1099
    },
    {
      "hp": 13157,
      "atk": 1133
    },
    {
      "hp": 13559,
      "atk": 1168
    },
    {
      "hp": 13960,
      "atk": 1202
    },
    {
      "hp": 14362,
      "atk": 1237
    },
    {
      "hp": 14763,
      "atk": 1272
    },
    {
      "hp": 15165,
      "atk": 1306
    },
    {
      "hp": 15566,
      "atk": 1341
    },
    {
      "hp": 15968,
      "atk": 1375
    },
    {
      "hp": 19167,
      "atk": 1651
    },
    {
      "hp": 19568,
      "atk": 1685
    },
    {
      "hp": 19970,
      "atk": 1720
    },
    {
      "hp": 20371,
      "atk": 1755
    },
    {
      "hp": 20773,
      "atk": 1789
    },
    {
      "hp": 21174,
      "atk": 1824
    },
    {
      "hp": 21576,
      "atk": 1858
    },
    {
      "hp": 21977,
      "atk": 1893
    },
    {
      "hp": 22379,
      "atk": 1927
    },
    {
      "hp": 22780,
      "atk": 1962
    },
    {
      "hp": 23182,
      "atk": 1997
    },
    {
      "hp": 27814,
      "atk": 2396
    },
    {
      "hp": 28216,
      "atk": 2430
    },
    {
      "hp": 28617,
      "atk": 2465
    },
    {
      "hp": 29019,
      "atk": 2499
    },
    {
      "hp": 29420,
      "atk": 2534
    },
    {
      "hp": 29822,
      "atk": 2568
    },
    {
      "hp": 30223,
      "atk": 2603
    },
    {
      "hp": 30625,
      "atk": 2638
    },
    {
      "hp": 31026,
      "atk": 2672
    },
    {
      "hp": 31428,
      "atk": 2707
    },
    {
      "hp": 31830,
      "atk": 2741
    },
    {
      "hp": 38200,
      "atk": 3290
    },
    {
      "hp": 38602,
      "atk": 3325
    },
    {
      "hp": 39004,
      "atk": 3359
    },
    {
      "hp": 39405,
      "atk": 3394
    },
    {
      "hp": 39807,
      "atk": 3428
    },
    {
      "hp": 40208,
      "atk": 3463
    },
    {
      "hp": 40610,
      "atk": 3498
    },
    {
      "hp": 41011,
      "atk": 3532
    },
    {
      "hp": 41413,
      "atk": 3567
    },
    {
      "hp": 41814,
      "atk": 3601
    },
    {
      "hp": 42216,
      "atk": 3636
    },
    {
      "hp": 50662,
      "atk": 4363
    },
    {
      "hp": 51064,
      "atk": 4398
    },
    {
      "hp": 51465,
      "atk": 4433
    },
    {
      "hp": 51867,
      "atk": 4467
    },
    {
      "hp": 52268,
      "atk": 4502
    },
    {
      "hp": 52670,
      "atk": 4536
    },
    {
      "hp": 53071,
      "atk": 4571
    },
    {
      "hp": 53473,
      "atk": 4605
    },
    {
      "hp": 53874,
      "atk": 4640
    },
    {
      "hp": 54276,
      "atk": 4675
    },
    {
      "hp": 54677,
      "atk": 4709
    },
    {
      "hp": 65612,
      "atk": 5651
    },
    {
      "hp": 66013,
      "atk": 5686
    },
    {
      "hp": 66415,
      "atk": 5720
    },
    {
      "hp": 66816,
      "atk": 5755
    },
    {
      "hp": 67218,
      "atk": 5789
    },
    {
      "hp": 67620,
      "atk": 5824
    },
    {
      "hp": 68021,
      "atk": 5859
    },
    {
      "hp": 68423,
      "atk": 5893
    },
    {
      "hp": 68824,
      "atk": 5928
    },
    {
      "hp": 69226,
      "atk": 5962
    },
    {
      "hp": 69627,
      "atk": 5997
    },
    {
      "hp": 83547,
      "atk": 7196
    },
    {
      "hp": 83949,
      "atk": 7230
    },
    {
      "hp": 84351,
      "atk": 7265
    },
    {
      "hp": 84752,
      "atk": 7300
    },
    {
      "hp": 85154,
      "atk": 7334
    },
    {
      "hp": 85555,
      "atk": 7369
    },
    {
      "hp": 85957,
      "atk": 7403
    },
    {
      "hp": 86358,
      "atk": 7438
    },
    {
      "hp": 86760,
      "atk": 7472
    },
    {
      "hp": 87161,
      "atk": 7507
    },
    {
      "hp": 87563,
      "atk": 7542
    },
    {
      "hp": 87563,
      "atk": 7542
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