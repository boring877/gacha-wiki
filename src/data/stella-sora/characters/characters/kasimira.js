export const Kasimira = {
  "id": 108,
  "name": "Kasimira",
  "icon": "/stella/assets/Kasimira.png",
  "portrait": "/stella/assets/Kasimira_portrait.png",
  "background": "/stella/assets/Kasimira_background.png",
  "variants": {
    "base": "/stella/assets/Kasimira_base.png",
    "q": "/stella/assets/Kasimira_q.png",
    "gd": "/stella/assets/Kasimira_gd.png",
    "goods": "/stella/assets/Kasimira_goods.png",
    "qs": "/stella/assets/Kasimira_qs.png",
    "xl": "/stella/assets/Kasimira_xl.png",
    "gc": "/stella/assets/Kasimira_gc.png",
    "sk": "/stella/assets/Kasimira_portrait.png",
    "xxl": "/stella/assets/Kasimira.png",
    "qm": "/stella/assets/Kasimira_qm.png",
    "l": "/stella/assets/Kasimira_l.png",
    "s": "/stella/assets/Kasimira_s.png"
  },
  "description": "Kasimira wields a brutal shotgun. She often puts herself in the line of fire in order to get a hit on her enemies. No matter what, her enemy will fall first.",
  "voiceActor": {
    "cn": "Li Chanfei",
    "cnLocalized": "李蝉妃",
    "jp": "Yasuno Kiyono",
    "jpLocalized": "安野希世乃"
  },
  "birthday": "10.8",
  "grade": 4,
  "element": "Ignis",
  "position": "Versatile",
  "attackType": "Ranged",
  "style": "Adventurous",
  "faction": "White Cat Troupe",
  "tags": [
    "Versatile",
    "Adventurous",
    "White Cat Troupe"
  ],
  "dateEvents": [
    {
      "name": "Impressive Skills",
      "icon": "DatingSPCG_108301",
      "clue": "Visit the Cave to unlock",
      "secondChoice": "Keep exploring deeper."
    },
    {
      "name": "Flawless Accuracy",
      "icon": "DatingSPCG_108302",
      "clue": "Visit the Market to unlock",
      "secondChoice": "There's an event you can join in the game area."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Love Candle",
      "Blazing Wings",
      "Fiery Honeypot",
      "Gilded Ceramic Bowl",
      "Blossom Porcelain Cup",
      "Mystic Potion Kettle"
    ],
    "hates": []
  },
  "normalAttack": {
    "name": "Purging Flames",
    "icon": "Icon/Skill/10801_Normal",
    "description": "Fires a volley of pellets, each dealing <color=#fb8037>&Param1& of ATK</color> as Ignis DMG. Magazine capacity: 1.",
    "shortDescription": "Fires the shotgun at the target.",
    "params": [
      "3.7%/4.1%/4.4%/5.5%/5.9%/6.3%/7%/7.4%/7.7%/8.5%/8.9%/9.2%/9.6%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Banishing Barrage",
    "icon": "Icon/Skill/10801_Skill_Main",
    "description": "Each use of this skill loads 1 Incendiary Shell. Each shell deals <color=#fb8037>&Param2& of ATK</color> as Ignis DMG.\u000bWhen Incendiary Shells (Main Skill) triggers ##Ignis Mark: Sacred Flame#2013#, deals &Param3& of ATK as AoE Ignis Mark DMG.\u000bUp to 10 shells can be loaded.",
    "shortDescription": "Loads Incendiary Shells and shoots the target.\u000bThe Main Skill can trigger ##Ignis Mark: Sacred Flame#2013#.",
    "params": [
      "OnceAdditionalAttribute,LevelUp,10893001,Value1,10KHdPct",
      "5.3%/5.8%/6.4%/8%/8.5%/9%/10.1%/10.6%/11.1%/12.2%/12.7%/13.3%/13.8%",
      "30%/36%/42%/48%/53%/59%/65%/71%/77%"
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
    "cooldown": "5s"
  },
  "supportSkill": {
    "name": "Precision Strike",
    "icon": "Icon/Skill/10801_Skill_Support",
    "description": "Drops 3 bombs, each dealing <color=#fb8037>&Param1& of ATK</color> as AoE Ignis DMG and inflicting ##Ignis Mark: Sacred Flame#2013#.",
    "shortDescription": "Drops bombs onto the target.\u000bThe Support Skill can inflict ##Ignis Mark: Sacred Flame#2013#.",
    "params": [
      "118%/130%/142%/177%/189%/201%/224%/236%/248%/272%/283%/295%/307%"
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
    "cooldown": "15s"
  },
  "ultimate": {
    "name": "Sweeping Blast",
    "icon": "Icon/Skill/10801_Ultra",
    "description": "Continuously fires 6 rounds of pellets, each dealing <color=#fb8037>&Param1& of ATK</color> as Ignis DMG. Concludes with a final full-blast salvo, with each pellet dealing <color=#fb8037>&Param2& of ATK</color> as Ignis DMG.",
    "shortDescription": "Fires a barrage of shots at the target.",
    "params": [
      "7.9%/8.6%/9.4%/11.8%/12.6%/13.4%/14.9%/15.7%/16.5%/18.1%/18.9%/19.7%/20.5%",
      "31%/35%/38%/47%/50%/53%/60%/63%/66%/72%/75%/79%/82%"
    ],
    "hints": {},
    "cooldown": "25s",
    "energy": 285
  },
  "talents": [
    {
      "name": "Joint Attack Command",
      "talents": [
        {
          "name": "Joint Attack Command",
          "description": "When Kasimira deals Ultimate DMG, there is a 10% chance to increase the squad's ATK by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "3.2%",
            "15",
            "15"
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
      "name": "Scarlet Gunfire",
      "talents": [
        {
          "name": "Scarlet Gunfire",
          "description": "Increases Kasimira' s Skill DMG against targets inflicted with ##Ignis Mark: Sacred Flame#2013# by <color=#0abec5>&Param1&</color>.",
          "params": [
            "17.5%"
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
      "name": "Blazing Ambition",
      "talents": [
        {
          "name": "Blazing Ambition",
          "description": "After Kasimira deals DMG, there is a 20% chance to increase the squad's ATK by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "1.7%",
            "5",
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
      "name": "Charred Lethality",
      "talents": [
        {
          "name": "Charred Lethality",
          "description": "When Kasimira deals Skill DMG to a target, increases Skill DMG by <color=#0abec5>&Param1&</color> for &Param2&s. This effect can be triggered once every 15s.",
          "params": [
            "23%",
            "3"
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
      "name": "Rising Aspiration",
      "talents": [
        {
          "name": "Rising Aspiration",
          "description": "When a squadmate casts an Ultimate, Kasimira's Ultimate DMG is increased by <color=#0abec5>&Param1&</color>.\u000bThe effects is removed after Kasimira casts the Ultimate.",
          "params": [
            "20%"
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
      "hp": 1186,
      "atk": 97
    },
    {
      "hp": 1545,
      "atk": 126
    },
    {
      "hp": 1902,
      "atk": 155
    },
    {
      "hp": 2259,
      "atk": 184
    },
    {
      "hp": 2615,
      "atk": 213
    },
    {
      "hp": 2972,
      "atk": 242
    },
    {
      "hp": 3328,
      "atk": 271
    },
    {
      "hp": 3685,
      "atk": 300
    },
    {
      "hp": 4042,
      "atk": 329
    },
    {
      "hp": 4398,
      "atk": 358
    },
    {
      "hp": 5278,
      "atk": 430
    },
    {
      "hp": 5635,
      "atk": 459
    },
    {
      "hp": 5991,
      "atk": 488
    },
    {
      "hp": 6348,
      "atk": 517
    },
    {
      "hp": 6705,
      "atk": 546
    },
    {
      "hp": 7061,
      "atk": 575
    },
    {
      "hp": 7418,
      "atk": 604
    },
    {
      "hp": 7774,
      "atk": 633
    },
    {
      "hp": 8131,
      "atk": 662
    },
    {
      "hp": 8488,
      "atk": 691
    },
    {
      "hp": 8844,
      "atk": 720
    },
    {
      "hp": 10615,
      "atk": 864
    },
    {
      "hp": 10972,
      "atk": 893
    },
    {
      "hp": 11328,
      "atk": 923
    },
    {
      "hp": 11685,
      "atk": 952
    },
    {
      "hp": 12042,
      "atk": 981
    },
    {
      "hp": 12398,
      "atk": 1010
    },
    {
      "hp": 12755,
      "atk": 1039
    },
    {
      "hp": 13111,
      "atk": 1068
    },
    {
      "hp": 13468,
      "atk": 1097
    },
    {
      "hp": 13825,
      "atk": 1126
    },
    {
      "hp": 14181,
      "atk": 1155
    },
    {
      "hp": 17022,
      "atk": 1386
    },
    {
      "hp": 17379,
      "atk": 1415
    },
    {
      "hp": 17735,
      "atk": 1444
    },
    {
      "hp": 18092,
      "atk": 1473
    },
    {
      "hp": 18449,
      "atk": 1502
    },
    {
      "hp": 18805,
      "atk": 1531
    },
    {
      "hp": 19162,
      "atk": 1560
    },
    {
      "hp": 19518,
      "atk": 1589
    },
    {
      "hp": 19875,
      "atk": 1618
    },
    {
      "hp": 20232,
      "atk": 1648
    },
    {
      "hp": 20588,
      "atk": 1677
    },
    {
      "hp": 24702,
      "atk": 2012
    },
    {
      "hp": 25059,
      "atk": 2041
    },
    {
      "hp": 25415,
      "atk": 2070
    },
    {
      "hp": 25772,
      "atk": 2099
    },
    {
      "hp": 26128,
      "atk": 2128
    },
    {
      "hp": 26485,
      "atk": 2157
    },
    {
      "hp": 26842,
      "atk": 2186
    },
    {
      "hp": 27198,
      "atk": 2215
    },
    {
      "hp": 27555,
      "atk": 2244
    },
    {
      "hp": 27912,
      "atk": 2273
    },
    {
      "hp": 28268,
      "atk": 2302
    },
    {
      "hp": 33926,
      "atk": 2763
    },
    {
      "hp": 34283,
      "atk": 2792
    },
    {
      "hp": 34640,
      "atk": 2821
    },
    {
      "hp": 34996,
      "atk": 2850
    },
    {
      "hp": 35353,
      "atk": 2879
    },
    {
      "hp": 35709,
      "atk": 2908
    },
    {
      "hp": 36066,
      "atk": 2937
    },
    {
      "hp": 36423,
      "atk": 2966
    },
    {
      "hp": 36779,
      "atk": 2995
    },
    {
      "hp": 37136,
      "atk": 3024
    },
    {
      "hp": 37492,
      "atk": 3053
    },
    {
      "hp": 44994,
      "atk": 3664
    },
    {
      "hp": 45350,
      "atk": 3693
    },
    {
      "hp": 45707,
      "atk": 3722
    },
    {
      "hp": 46063,
      "atk": 3751
    },
    {
      "hp": 46420,
      "atk": 3780
    },
    {
      "hp": 46777,
      "atk": 3809
    },
    {
      "hp": 47133,
      "atk": 3838
    },
    {
      "hp": 47490,
      "atk": 3867
    },
    {
      "hp": 47846,
      "atk": 3896
    },
    {
      "hp": 48203,
      "atk": 3925
    },
    {
      "hp": 48560,
      "atk": 3954
    },
    {
      "hp": 58271,
      "atk": 4745
    },
    {
      "hp": 58627,
      "atk": 4774
    },
    {
      "hp": 58984,
      "atk": 4803
    },
    {
      "hp": 59340,
      "atk": 4832
    },
    {
      "hp": 59697,
      "atk": 4861
    },
    {
      "hp": 60054,
      "atk": 4890
    },
    {
      "hp": 60410,
      "atk": 4919
    },
    {
      "hp": 60767,
      "atk": 4948
    },
    {
      "hp": 61124,
      "atk": 4977
    },
    {
      "hp": 61480,
      "atk": 5006
    },
    {
      "hp": 61837,
      "atk": 5036
    },
    {
      "hp": 74199,
      "atk": 6042
    },
    {
      "hp": 74556,
      "atk": 6071
    },
    {
      "hp": 74913,
      "atk": 6100
    },
    {
      "hp": 75269,
      "atk": 6129
    },
    {
      "hp": 75626,
      "atk": 6158
    },
    {
      "hp": 75983,
      "atk": 6187
    },
    {
      "hp": 76339,
      "atk": 6216
    },
    {
      "hp": 76696,
      "atk": 6246
    },
    {
      "hp": 77052,
      "atk": 6275
    },
    {
      "hp": 77409,
      "atk": 6304
    },
    {
      "hp": 77766,
      "atk": 6333
    },
    {
      "hp": 77766,
      "atk": 6333
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
          "id": 21023,
          "name": "Colossus Essence",
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
          "id": 21023,
          "name": "Colossus Essence",
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
          "id": 21023,
          "name": "Colossus Essence",
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
          "id": 21023,
          "name": "Colossus Essence",
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