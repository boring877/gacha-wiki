export const Jinglin = {
  "id": 117,
  "name": "Jinglin",
  "icon": "/stella/assets/Jinglin.png",
  "portrait": "/stella/assets/Jinglin_portrait.png",
  "background": "/stella/assets/Jinglin_background.png",
  "variants": {
    "base": "/stella/assets/Jinglin_base.png",
    "q": "/stella/assets/Jinglin_q.png",
    "gd": "/stella/assets/Jinglin_gd.png",
    "goods": "/stella/assets/Jinglin_goods.png",
    "qs": "/stella/assets/Jinglin_qs.png",
    "xl": "/stella/assets/Jinglin_xl.png",
    "gc": "/stella/assets/Jinglin_gc.png",
    "sk": "/stella/assets/Jinglin_portrait.png",
    "xxl": "/stella/assets/Jinglin.png",
    "qm": "/stella/assets/Jinglin_qm.png",
    "l": "/stella/assets/Jinglin_l.png",
    "s": "/stella/assets/Jinglin_s.png"
  },
  "description": "Jinglin can summon lightning and fill the area around her with golden strikes. Though there is no consensus on the origin of this power, Jinglin herself believes that it was granted to her by the Divine Tree in Cang Wu city.",
  "voiceActor": {
    "cn": "Han Jiaojiao",
    "cnLocalized": "韩娇娇",
    "jp": "Saran Tajima",
    "jpLocalized": "田嶌紗蘭"
  },
  "birthday": "5.1",
  "grade": 4,
  "element": "Lux",
  "position": "Versatile",
  "attackType": "Ranged",
  "style": "Inquisitive",
  "faction": "Fenghuang Diner",
  "tags": [
    "Versatile",
    "Inquisitive",
    "Fenghuang Diner"
  ],
  "dateEvents": [
    {
      "name": "A Study in Dessert",
      "icon": "DatingSPCG_117301",
      "clue": "Visit the Dessert Shop to unlock",
      "secondChoice": "Haven't had enough. Let's order some more."
    },
    {
      "name": "Freshly Picked",
      "icon": "DatingSPCG_117302",
      "clue": "Visit the Cave to unlock",
      "secondChoice": "Don't go any deeper. Stop here and take a rest."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Summer Chill Crushed Ice",
      "Fragrant Ice Delight",
      "Sweet IceFurry",
      "Gilded Ceramic Bowl",
      "Blossom Porcelain Cup",
      "Mystic Potion Kettle"
    ],
    "hates": []
  },
  "normalAttack": {
    "name": "Thunder Palm",
    "icon": "Icon/Skill/11701_Normal",
    "description": "Unleashes lightning from the palm to strike the target.\u000bStrike 1: <color=#fb8037>&Param1& of ATK</color> as Lux DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Lux DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK</color> as Lux DMG.",
    "shortDescription": "Unleashes lightning from the palm, striking the target repeatedly and dealing damage.",
    "params": [
      "8.3%/9.1%/10%/12.5%/13.3%/14.1%/15.8%/16.6%/17.4%/19.1%/19.9%/20.8%/21.6%",
      "8.3%/9.1%/10%/12.5%/13.3%/14.1%/15.8%/16.6%/17.4%/19.1%/19.9%/20.8%/21.6%",
      "20.8%/22.9%/24.9%/31.2%/33.2%/35.3%/39.5%/41.6%/43.6%/47.8%/49.9%/51.9%/54%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Thunder Strike",
    "icon": "Icon/Skill/11701_Skill_Main",
    "description": "Summons a thunderbolt, dealing <color=#fb8037>&Param1& of ATK</color> as Lux DMG. Store up to 4 thunderbolts.\u000bThunder Strike (Main Skill) can trigger ##Lux Mark: Radiance#2016#, dealing &Param2& of ATK as Lux DMG.",
    "shortDescription": "Summons a thunderbolt to deal DMG.\u000bThe Main Skill can trigger ##Lux Mark: Radiance#2016#.",
    "params": [
      "92%/101%/110%/137%/146%/156%/174%/183%/192%/210%/220%/229%/238%",
      "74%/88%/103%/118%/132%/147%/162%/177%/191%"
    ],
    "hints": {
      "2016": {
        "id": 2016,
        "name": "Lux Mark: Radiance",
        "description": "A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.",
        "params": [
          "15"
        ]
      }
    },
    "cooldown": "6s"
  },
  "supportSkill": {
    "name": "Static Discharge",
    "icon": "Icon/Skill/11701_Skill_Support",
    "description": "Creates a Lightning Domain that deals <color=#fb8037>&Param1& of ATK</color> as Lux DMG and inflicts ##Lux Mark: Radiance#2016# every 0.5s for a total of 8s.",
    "shortDescription": "Generates a Lightning Domain, dealing DMG over time.\u000bThe Support Skill can inflict ##Lux Mark: Radiance#2016#.",
    "params": [
      "18.1%/19.9%/21.7%/27.1%/29%/30.8%/34.4%/36.2%/38%/41.6%/43.4%/45.2%/47.1%"
    ],
    "hints": {
      "2016": {
        "id": 2016,
        "name": "Lux Mark: Radiance",
        "description": "A special status applied to the target by some Lux Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Lux Trekkers. When triggered, deals DMG.",
        "params": [
          "15"
        ]
      }
    },
    "cooldown": "16s"
  },
  "ultimate": {
    "name": "Roar of the Qilin",
    "icon": "Icon/Skill/11701_Ultra",
    "description": "Summons a massive Lightning Qilin that lasts for 10s and attacks 3 random enemies every 0.5s. Each hit deals <color=#fb8037>&Param1& of ATK</color> as Lux DMG.",
    "shortDescription": "Summons a Lightning Qilin to strike targets.",
    "params": [
      "61%/67%/73%/91%/97%/103%/115%/121%/127%/139%/146%/152%/158%"
    ],
    "hints": {},
    "cooldown": "25s",
    "energy": 237
  },
  "talents": [
    {
      "name": "Thunder Wrath",
      "talents": [
        {
          "name": "Thunder Wrath",
          "description": "When the Lightning Qilin summoned by Jinglin's Ultimate is on the battlefield, the squad's ATK is increased by <color=#0abec5>&Param1&</color>.",
          "params": [
            "26%"
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
      "name": "Qilin Roar",
      "talents": [
        {
          "name": "Qilin Roar",
          "description": "Increases Jinglin's Ultimate DMG dealt to targets with ##Lux Mark: Radiance#2016# by <color=#0abec5>&Param1&</color>.",
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
    },
    {
      "name": "Good Business",
      "talents": [
        {
          "name": "Good Business",
          "description": "When Jinglin's Ultimate hits a target, the Lux DMG it takes is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "9%",
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
      "name": "Meeting Ends",
      "talents": [
        {
          "name": "Meeting Ends",
          "description": "When ##Lux Mark#1015# is triggered, increases Jinglin's ATK by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "8.4%",
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
      "name": "Triple Revenue",
      "talents": [
        {
          "name": "Triple Revenue",
          "description": "When Jinglin kills a target, her Ultimate DMG is increased by <color=#0abec5>&Param1&</color>, stacking up to &Param2& times.\u000bThis effect is removed after Jinglin casts her Ultimate.",
          "params": [
            "5%",
            "4"
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
      "hp": 683,
      "atk": 98
    },
    {
      "hp": 888,
      "atk": 128
    },
    {
      "hp": 1093,
      "atk": 157
    },
    {
      "hp": 1298,
      "atk": 187
    },
    {
      "hp": 1503,
      "atk": 216
    },
    {
      "hp": 1708,
      "atk": 246
    },
    {
      "hp": 1913,
      "atk": 276
    },
    {
      "hp": 2118,
      "atk": 305
    },
    {
      "hp": 2323,
      "atk": 335
    },
    {
      "hp": 2528,
      "atk": 364
    },
    {
      "hp": 3033,
      "atk": 437
    },
    {
      "hp": 3238,
      "atk": 466
    },
    {
      "hp": 3443,
      "atk": 496
    },
    {
      "hp": 3648,
      "atk": 525
    },
    {
      "hp": 3853,
      "atk": 555
    },
    {
      "hp": 4058,
      "atk": 584
    },
    {
      "hp": 4263,
      "atk": 614
    },
    {
      "hp": 4468,
      "atk": 644
    },
    {
      "hp": 4673,
      "atk": 673
    },
    {
      "hp": 4878,
      "atk": 703
    },
    {
      "hp": 5083,
      "atk": 732
    },
    {
      "hp": 6101,
      "atk": 879
    },
    {
      "hp": 6306,
      "atk": 908
    },
    {
      "hp": 6511,
      "atk": 938
    },
    {
      "hp": 6716,
      "atk": 967
    },
    {
      "hp": 6921,
      "atk": 997
    },
    {
      "hp": 7126,
      "atk": 1026
    },
    {
      "hp": 7331,
      "atk": 1056
    },
    {
      "hp": 7536,
      "atk": 1085
    },
    {
      "hp": 7741,
      "atk": 1115
    },
    {
      "hp": 7946,
      "atk": 1144
    },
    {
      "hp": 8151,
      "atk": 1174
    },
    {
      "hp": 9783,
      "atk": 1409
    },
    {
      "hp": 9988,
      "atk": 1439
    },
    {
      "hp": 10193,
      "atk": 1468
    },
    {
      "hp": 10398,
      "atk": 1498
    },
    {
      "hp": 10603,
      "atk": 1527
    },
    {
      "hp": 10808,
      "atk": 1557
    },
    {
      "hp": 11013,
      "atk": 1586
    },
    {
      "hp": 11218,
      "atk": 1616
    },
    {
      "hp": 11423,
      "atk": 1645
    },
    {
      "hp": 11628,
      "atk": 1675
    },
    {
      "hp": 11833,
      "atk": 1704
    },
    {
      "hp": 14197,
      "atk": 2045
    },
    {
      "hp": 14402,
      "atk": 2074
    },
    {
      "hp": 14607,
      "atk": 2104
    },
    {
      "hp": 14812,
      "atk": 2133
    },
    {
      "hp": 15017,
      "atk": 2163
    },
    {
      "hp": 15222,
      "atk": 2192
    },
    {
      "hp": 15427,
      "atk": 2222
    },
    {
      "hp": 15632,
      "atk": 2251
    },
    {
      "hp": 15837,
      "atk": 2281
    },
    {
      "hp": 16042,
      "atk": 2310
    },
    {
      "hp": 16246,
      "atk": 2340
    },
    {
      "hp": 19499,
      "atk": 2808
    },
    {
      "hp": 19703,
      "atk": 2838
    },
    {
      "hp": 19908,
      "atk": 2867
    },
    {
      "hp": 20113,
      "atk": 2897
    },
    {
      "hp": 20318,
      "atk": 2926
    },
    {
      "hp": 20523,
      "atk": 2956
    },
    {
      "hp": 20728,
      "atk": 2985
    },
    {
      "hp": 20933,
      "atk": 3015
    },
    {
      "hp": 21138,
      "atk": 3044
    },
    {
      "hp": 21343,
      "atk": 3074
    },
    {
      "hp": 21548,
      "atk": 3104
    },
    {
      "hp": 25859,
      "atk": 3724
    },
    {
      "hp": 26064,
      "atk": 3754
    },
    {
      "hp": 26269,
      "atk": 3783
    },
    {
      "hp": 26474,
      "atk": 3813
    },
    {
      "hp": 26679,
      "atk": 3843
    },
    {
      "hp": 26884,
      "atk": 3872
    },
    {
      "hp": 27089,
      "atk": 3902
    },
    {
      "hp": 27294,
      "atk": 3931
    },
    {
      "hp": 27499,
      "atk": 3961
    },
    {
      "hp": 27704,
      "atk": 3990
    },
    {
      "hp": 27909,
      "atk": 4020
    },
    {
      "hp": 33490,
      "atk": 4824
    },
    {
      "hp": 33695,
      "atk": 4853
    },
    {
      "hp": 33900,
      "atk": 4883
    },
    {
      "hp": 34105,
      "atk": 4912
    },
    {
      "hp": 34310,
      "atk": 4942
    },
    {
      "hp": 34515,
      "atk": 4971
    },
    {
      "hp": 34720,
      "atk": 5001
    },
    {
      "hp": 34925,
      "atk": 5030
    },
    {
      "hp": 35130,
      "atk": 5060
    },
    {
      "hp": 35335,
      "atk": 5089
    },
    {
      "hp": 35540,
      "atk": 5119
    },
    {
      "hp": 42645,
      "atk": 6142
    },
    {
      "hp": 42850,
      "atk": 6172
    },
    {
      "hp": 43055,
      "atk": 6201
    },
    {
      "hp": 43260,
      "atk": 6231
    },
    {
      "hp": 43465,
      "atk": 6260
    },
    {
      "hp": 43670,
      "atk": 6290
    },
    {
      "hp": 43875,
      "atk": 6319
    },
    {
      "hp": 44080,
      "atk": 6349
    },
    {
      "hp": 44285,
      "atk": 6378
    },
    {
      "hp": 44490,
      "atk": 6408
    },
    {
      "hp": 44695,
      "atk": 6437
    },
    {
      "hp": 44695,
      "atk": 6437
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
          "id": 21053,
          "name": "Radiant Crown Essence",
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
          "id": 21053,
          "name": "Radiant Crown Essence",
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
          "id": 21053,
          "name": "Radiant Crown Essence",
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
          "id": 21053,
          "name": "Radiant Crown Essence",
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