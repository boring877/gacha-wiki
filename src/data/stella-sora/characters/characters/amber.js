export const Amber = {
  "id": 103,
  "name": "Amber",
  "icon": "/stella/assets/Amber.png",
  "portrait": "/stella/assets/Amber_portrait.png",
  "background": "/stella/assets/Amber_background.png",
  "variants": {
    "base": "/stella/assets/Amber_base.png",
    "q": "/stella/assets/Amber_q.png",
    "gd": "/stella/assets/Amber_gd.png",
    "goods": "/stella/assets/Amber_goods.png",
    "qs": "/stella/assets/Amber_qs.png",
    "xl": "/stella/assets/Amber_xl.png",
    "gc": "/stella/assets/Amber_gc.png",
    "sk": "/stella/assets/Amber_portrait.png",
    "xxl": "/stella/assets/Amber.png",
    "qm": "/stella/assets/Amber_qm.png",
    "l": "/stella/assets/Amber_l.png",
    "s": "/stella/assets/Amber_s.png"
  },
  "description": "The agile dual pistols allow Amber to sashay across the battlefield. Enemies who try to get close to her will turn into ashes long before they can reach her perimeter.",
  "voiceActor": {
    "cn": "Si Bai",
    "cnLocalized": "四白",
    "jp": "Yuuki Takada",
    "jpLocalized": "高田憂希"
  },
  "birthday": "8.8",
  "grade": 4,
  "element": "Ignis",
  "position": "Vanguard",
  "attackType": "Ranged",
  "style": "Collector",
  "faction": "New Star Guild",
  "tags": [
    "Vanguard",
    "Collector",
    "New Star Guild"
  ],
  "dateEvents": [
    {
      "name": "The Kitten Encounter",
      "icon": "DatingSPCG_103301",
      "clue": "Visit the Port to unlock",
      "secondChoice": "How about doing some night fishing?"
    },
    {
      "name": "Cafeteria Trick",
      "icon": "DatingSPCG_103303",
      "clue": "Visit the Academy to unlock",
      "secondChoice": "Getting hungry. Gonna go to the cafeteria."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Card Photo Capturer",
      "Reflective Photo Capturer",
      "Ultra-Precision Photo Capturer",
      "Rising Star",
      "Emerging Talent",
      "Shining Star"
    ],
    "hates": []
  },
  "normalAttack": {
    "name": "Duet",
    "icon": "Icon/Skill/10301_Normal",
    "description": "Fires both pistols. Each shot deals <color=#fb8037>&Param1& of ATK</color> as Ignis DMG. Magazine holds 12 ammo.",
    "shortDescription": "Fires both pistols at the target rapidly.",
    "params": [
      "9.9%/10.9%/11.8%/14.8%/15.8%/16.8%/18.8%/19.7%/20.7%/22.7%/23.7%/24.7%/25.7%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Fireworks Jam",
    "icon": "Icon/Skill/10301_Skill_Main_1",
    "description": "Fires both pistols in a sweeping motion, dealing <color=#fb8037>&Param1& of ATK x2</color> and <color=#fb8037>&Param2& of ATK x4</color> as AoE Ignis DMG, and increasing Auto Attack DMG by &Param4& for &Param5&s.\u000bFireworks Jam (Main Skill) can trigger ##Ignis Mark: Sacred Flame#2013#, dealing &Param3& of ATK as AoE Ignis Mark DMG.",
    "shortDescription": "Fires both pistols in a sweeping motion three times.\u000bThe Main Skill can trigger ##Ignis Mark: Sacred Flame#2013#.",
    "params": [
      "46%/51%/55%/69%/73%/78%/87%/92%/96%/106%/110%/115%/119%",
      "3.3%/3.6%/3.9%/4.9%/5.3%/5.6%/6.2%/6.6%/6.9%/7.6%/7.9%/8.2%/8.6%",
      "54%/65%/76%/87%/98%/109%/120%/131%/142%",
      "25%",
      "10"
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
    "cooldown": "8s"
  },
  "supportSkill": {
    "name": "Bullet Waltz",
    "icon": "Icon/Skill/10301_Skill_Support",
    "description": "Charges forward swiftly, dealing <color=#fb8037>&Param1&</color> of ATK as AoE Ignis DMG.\u000bBullet Waltz (Support Skill) can trigger ##Ignis Mark: Sacred Flame#2013#, dealing &Param2& of ATK as AoE Ignis Mark DMG.",
    "shortDescription": "Charges at the target and deals DMG.\u000bThe Support Skill can trigger ##Ignis Mark: Sacred Flame#2013#.",
    "params": [
      "30%/33%/36%/44%/47%/50%/56%/59%/62%/68%/71%/74%/77%",
      "54%/65%/76%/87%/98%/109%/120%/131%/142%"
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
    "cooldown": "14s"
  },
  "ultimate": {
    "name": "Spark of Finality",
    "icon": "Icon/Skill/10301_Ultra",
    "description": "Shoots a beam at the target, dealing <color=#fb8037>&Param1& of ATK</color> as AoE Ignis DMG.\u000bSpark of Finality (Ultimate) can trigger ##Ignis Mark: Sacred Flame#2013#, dealing &Param2& of ATK as AoE Ignis Mark DMG.",
    "shortDescription": "Shoots a beam at the target.\u000bThe Ultimate can trigger ##Ignis Mark: Sacred Flame#2013#.",
    "params": [
      "479%/527%/574%/718%/766%/814%/910%/957%/1005%/1101%/1149%/1197%/1245%",
      "54%/65%/76%/87%/98%/109%/120%/131%/142%"
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
    "cooldown": "20s",
    "energy": 190
  },
  "talents": [
    {
      "name": "A Dance with Bullets",
      "talents": [
        {
          "name": "A Dance with Bullets",
          "description": "When Amber deals DMG to a target, her Skill DMG is increased by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "1.6%",
            "10",
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
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
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
      "name": "Barrel is Still Hot",
      "talents": [
        {
          "name": "Barrel is Still Hot",
          "description": "When Amber triggers ##Ignis Mark: Sacred Flame#2013#, her Crit Rate is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "10%",
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
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
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
      "name": "Ethereal Memory",
      "talents": [
        {
          "name": "Ethereal Memory",
          "description": "After Amber casts a skill, her Ultimate DMG is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "60%",
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
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
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
      "name": "A Silent Long Road",
      "talents": [
        {
          "name": "A Silent Long Road",
          "description": "After Amber deals DMG to a target with her Ultimate, her Skill DMG is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "30%",
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
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
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
      "name": "Farsight Vision",
      "talents": [
        {
          "name": "Farsight Vision",
          "description": "Increases Amber's Ultimate DMG dealt to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
          "params": [
            "60%"
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
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
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
      "hp": 700,
      "atk": 100
    },
    {
      "hp": 910,
      "atk": 130
    },
    {
      "hp": 1120,
      "atk": 160
    },
    {
      "hp": 1330,
      "atk": 190
    },
    {
      "hp": 1540,
      "atk": 220
    },
    {
      "hp": 1750,
      "atk": 248
    },
    {
      "hp": 1960,
      "atk": 278
    },
    {
      "hp": 2170,
      "atk": 308
    },
    {
      "hp": 2380,
      "atk": 337
    },
    {
      "hp": 2590,
      "atk": 367
    },
    {
      "hp": 3108,
      "atk": 440
    },
    {
      "hp": 3318,
      "atk": 470
    },
    {
      "hp": 3528,
      "atk": 500
    },
    {
      "hp": 3738,
      "atk": 530
    },
    {
      "hp": 3948,
      "atk": 559
    },
    {
      "hp": 4158,
      "atk": 589
    },
    {
      "hp": 4368,
      "atk": 619
    },
    {
      "hp": 4578,
      "atk": 649
    },
    {
      "hp": 4788,
      "atk": 679
    },
    {
      "hp": 4998,
      "atk": 708
    },
    {
      "hp": 5208,
      "atk": 738
    },
    {
      "hp": 6251,
      "atk": 886
    },
    {
      "hp": 6461,
      "atk": 916
    },
    {
      "hp": 6671,
      "atk": 945
    },
    {
      "hp": 6881,
      "atk": 975
    },
    {
      "hp": 7091,
      "atk": 1005
    },
    {
      "hp": 7301,
      "atk": 1035
    },
    {
      "hp": 7511,
      "atk": 1064
    },
    {
      "hp": 7721,
      "atk": 1094
    },
    {
      "hp": 7931,
      "atk": 1124
    },
    {
      "hp": 8141,
      "atk": 1154
    },
    {
      "hp": 8351,
      "atk": 1183
    },
    {
      "hp": 10024,
      "atk": 1421
    },
    {
      "hp": 10234,
      "atk": 1450
    },
    {
      "hp": 10444,
      "atk": 1480
    },
    {
      "hp": 10654,
      "atk": 1510
    },
    {
      "hp": 10864,
      "atk": 1540
    },
    {
      "hp": 11074,
      "atk": 1569
    },
    {
      "hp": 11284,
      "atk": 1599
    },
    {
      "hp": 11494,
      "atk": 1629
    },
    {
      "hp": 11704,
      "atk": 1659
    },
    {
      "hp": 11914,
      "atk": 1688
    },
    {
      "hp": 12124,
      "atk": 1718
    },
    {
      "hp": 14546,
      "atk": 2061
    },
    {
      "hp": 14756,
      "atk": 2091
    },
    {
      "hp": 14966,
      "atk": 2121
    },
    {
      "hp": 15176,
      "atk": 2151
    },
    {
      "hp": 15386,
      "atk": 2180
    },
    {
      "hp": 15596,
      "atk": 2210
    },
    {
      "hp": 15806,
      "atk": 2240
    },
    {
      "hp": 16016,
      "atk": 2270
    },
    {
      "hp": 16226,
      "atk": 2299
    },
    {
      "hp": 16436,
      "atk": 2329
    },
    {
      "hp": 16646,
      "atk": 2359
    },
    {
      "hp": 19978,
      "atk": 2831
    },
    {
      "hp": 20188,
      "atk": 2861
    },
    {
      "hp": 20398,
      "atk": 2891
    },
    {
      "hp": 20608,
      "atk": 2920
    },
    {
      "hp": 20818,
      "atk": 2950
    },
    {
      "hp": 21028,
      "atk": 2980
    },
    {
      "hp": 21238,
      "atk": 3010
    },
    {
      "hp": 21448,
      "atk": 3039
    },
    {
      "hp": 21658,
      "atk": 3069
    },
    {
      "hp": 21868,
      "atk": 3099
    },
    {
      "hp": 22078,
      "atk": 3129
    },
    {
      "hp": 26495,
      "atk": 3755
    },
    {
      "hp": 26705,
      "atk": 3784
    },
    {
      "hp": 26915,
      "atk": 3814
    },
    {
      "hp": 27125,
      "atk": 3844
    },
    {
      "hp": 27335,
      "atk": 3874
    },
    {
      "hp": 27545,
      "atk": 3904
    },
    {
      "hp": 27755,
      "atk": 3933
    },
    {
      "hp": 27965,
      "atk": 3963
    },
    {
      "hp": 28175,
      "atk": 3993
    },
    {
      "hp": 28385,
      "atk": 4023
    },
    {
      "hp": 28595,
      "atk": 4052
    },
    {
      "hp": 34314,
      "atk": 4863
    },
    {
      "hp": 34524,
      "atk": 4893
    },
    {
      "hp": 34734,
      "atk": 4922
    },
    {
      "hp": 34944,
      "atk": 4952
    },
    {
      "hp": 35154,
      "atk": 4982
    },
    {
      "hp": 35364,
      "atk": 5012
    },
    {
      "hp": 35574,
      "atk": 5041
    },
    {
      "hp": 35784,
      "atk": 5071
    },
    {
      "hp": 35994,
      "atk": 5101
    },
    {
      "hp": 36204,
      "atk": 5131
    },
    {
      "hp": 36414,
      "atk": 5160
    },
    {
      "hp": 43694,
      "atk": 6192
    },
    {
      "hp": 43904,
      "atk": 6222
    },
    {
      "hp": 44114,
      "atk": 6252
    },
    {
      "hp": 44324,
      "atk": 6281
    },
    {
      "hp": 44534,
      "atk": 6311
    },
    {
      "hp": 44744,
      "atk": 6341
    },
    {
      "hp": 44954,
      "atk": 6371
    },
    {
      "hp": 45164,
      "atk": 6400
    },
    {
      "hp": 45374,
      "atk": 6430
    },
    {
      "hp": 45584,
      "atk": 6460
    },
    {
      "hp": 45794,
      "atk": 6490
    },
    {
      "hp": 45794,
      "atk": 6490
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