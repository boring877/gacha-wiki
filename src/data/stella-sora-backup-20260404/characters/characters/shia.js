export const Shia = {
  "id": 155,
  "name": "Shia",
  "icon": "/stella/assets/Shia.png",
  "portrait": "/stella/assets/Shia_portrait.png",
  "background": "/stella/assets/Shia_background.png",
  "variants": {
    "base": "/stella/assets/Shia_base.png",
    "q": "/stella/assets/Shia_q.png",
    "gd": "/stella/assets/Shia_gd.png",
    "goods": "/stella/assets/Shia_goods.png",
    "qs": "/stella/assets/Shia_qs.png",
    "xl": "/stella/assets/Shia_xl.png",
    "gc": "/stella/assets/Shia_gc.png",
    "sk": "/stella/assets/Shia_portrait.png",
    "xxl": "/stella/assets/Shia.png",
    "qm": "/stella/assets/Shia_qm.png",
    "l": "/stella/assets/Shia_l.png",
    "s": "/stella/assets/Shia_s.png"
  },
  "description": "Shia is the definition of agility. Riding her surfboard alongside Snow Rabbit and Night Rabbit, she unleashes a tidal onslaught that crashes through everything in its path.",
  "voiceActor": {
    "cn": "Vila",
    "cnLocalized": "Vila",
    "jp": "Yui Horie",
    "jpLocalized": "堀江由衣"
  },
  "birthday": "1.1",
  "grade": 5,
  "element": "Lux",
  "position": "Vanguard",
  "attackType": "Ranged",
  "style": "Adventurous",
  "faction": "Freelance Trekker",
  "tags": [
    "Vanguard",
    "Adventurous",
    "Freelance Trekker"
  ],
  "dateEvents": [
    {
      "name": "Cruise of Ripples",
      "icon": "DatingSPCG_155301",
      "clue": "Visit the Port to unlock",
      "secondChoice": "Take a small boat out for some coastal sightseeing."
    },
    {
      "name": "Underground Drift",
      "icon": "DatingSPCG_155302",
      "clue": "Visit the Cave to unlock",
      "secondChoice": "Keep exploring deeper."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Portable Blower",
      "Exquisite Blower",
      "Deluxe Blower",
      "Stellanite Enchantment",
      "Moonlit Companion",
      "Cosmic Form",
      "Whisper Wind Spinner",
      "Chilling Wind Spinner",
      "Blazing Wind Spinner"
    ],
    "hates": [
      "Summer Chill Crushed Ice",
      "Fragrant Ice Delight",
      "Sweet IceFurry"
    ]
  },
  "normalAttack": {
    "name": "Sail of Twin Moons",
    "icon": "Icon/Skill/15501_Normal",
    "description": "Commands drones to attack the target in turn.\u000bStrike 1: Snow Rabbit fires bullets in a sweeping motion, dealing <color=#fb8037>&Param1&</color> of ATK as Lux DMG.\u000bStrike 2: Night Rabbit fires missiles, dealing <color=#fb8037>&Param2&</color> of ATK as Lux DMG.\u000bStrike 3: Snow Rabbit fires bullets in a sweeping motion, dealing <color=#fb8037>&Param3&</color> of ATK as Lux DMG.\u000bStrike 4: Night Rabbit fires missiles, dealing <color=#fb8037>&Param4&</color> of ATK as Lux DMG.",
    "shortDescription": "Commands Snow Rabbit and Night Rabbit to attack the target in turn to deal DMG.",
    "params": [
      "8%/9.2%/10.4%/14%/15.1%/16.2%/18.4%/19.4%/20.4%/22.3%/23.9%/25.4%/27%",
      "15.9%/18.3%/20.7%/27.9%/30.1%/32.4%/36.8%/38.7%/40.6%/44.5%/47.7%/50.8%/54%",
      "7.8%/8.9%/10.1%/13.6%/14.7%/15.8%/18%/18.9%/19.8%/21.7%/23.2%/24.8%/26.3%",
      "10.4%/11.9%/13.5%/18.1%/19.6%/21%/23.9%/25.2%/26.4%/28.9%/31%/33%/35.1%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Whirling Waves",
    "icon": "Icon/Skill/15501_Skill_Main",
    "description": "Calls for support. Commands 2 Snow Rabbits and 1 Night Rabbit to circle and attack the target for 10s.\u000bSnow Rabbits fire bullets in a sweeping motion, dealing <color=#fb8037>&Param1& of ATK</color> as Lux DMG.\u000bNight Rabbit fires missiles, dealing <color=#fb8037>&Param2& of ATK</color> as Lux DMG, and then explodes, dealing <color=#fb8037>&Param3& of ATK</color> as AoE Lux DMG.\u000bWhirling Waves (Main Skill) can trigger ##Lux Mark#1015#, dealing &Param4& of ATK as Lux DMG.",
    "shortDescription": "Summons several drones to attack the target repeatedly, dealing DMG.\u000bThe Main Skill can trigger ##Lux Mark#1015#.",
    "params": [
      "8.3%/9.6%/10.8%/14.6%/15.7%/16.9%/19.2%/20.2%/21.2%/23.2%/24.9%/26.5%/28.2%",
      "11.7%/13.5%/15.2%/20.5%/22.1%/23.8%/27.1%/28.5%/29.9%/32.7%/35%/37.4%/39.7%",
      "12.2%/14%/15.9%/21.4%/23.1%/24.8%/28.2%/29.7%/31.1%/34%/36.5%/38.9%/41.4%",
      "71%/92%/113%/135%/156%/177%/198%/219%/241%"
    ],
    "hints": {
      "1015": {
        "id": 1015,
        "name": "Lux Mark",
        "description": "The generic name for all Lux Marks.\u000bWhen triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated.",
        "params": []
      }
    },
    "cooldown": "14s"
  },
  "supportSkill": {
    "name": "Surfing Rondo",
    "icon": "Icon/Skill/15501_Skill_Support",
    "description": "Surfs 2 times, each dealing <color=#fb8037>&Param1& of ATK x2</color> as AoE Lux DMG.\u000bRide 1: Snow Rabbit fires bullets in a sweeping motion, dealing <color=#fb8037>&Param2& of ATK</color> as Lux DMG every 0.3s.\u000bRide 2: Night Rabbit fires missiles, each dealing <color=#fb8037>&Param3& of ATK</color> as Lux DMG.\u000bSurfing Rondo (Support Skill) can trigger ##Lux Mark#1015#, dealing &Param4& of ATK as Lux DMG.",
    "shortDescription": "Surfs with the drones, dealing DMG to targets along the way.\u000bThe Support Skill can trigger ##Lux Mark#1015#.",
    "params": [
      "77%/89%/100%/135%/146%/156%/178%/187%/197%/215%/230%/246%/261%",
      "36%/41%/47%/63%/68%/73%/83%/87%/91%/100%/107%/114%/121%",
      "48%/55%/62%/84%/90%/97%/110%/116%/122%/133%/143%/152%/162%",
      "71%/92%/113%/135%/156%/177%/198%/219%/241%"
    ],
    "hints": {
      "1015": {
        "id": 1015,
        "name": "Lux Mark",
        "description": "The generic name for all Lux Marks.\u000bWhen triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated.",
        "params": []
      }
    },
    "cooldown": "16s"
  },
  "ultimate": {
    "name": "Divine Deluge",
    "icon": "Icon/Skill/15501_Ultra",
    "description": "Fires the laser cannon at the target, dealing <color=#fb8037>&Param1& of ATK</color> as Lux DMG multiple times for 5s.\u000bThe Ultimate Divine Deluge can trigger ##Lux Mark#1015#, dealing &Param2& of ATK as Lux DMG.",
    "shortDescription": "Fires the laser cannon repeatedly at the target, dealing DMG.\u000bThe Ultimate can trigger ##Lux Mark#1015#.",
    "params": [
      "78%/90%/101%/136%/147%/158%/180%/189%/199%/217%/233%/249%/264%",
      "71%/92%/113%/135%/156%/177%/198%/219%/241%"
    ],
    "hints": {
      "1015": {
        "id": 1015,
        "name": "Lux Mark",
        "description": "The generic name for all Lux Marks.\u000bWhen triggered by specific Lux Trekkers' attacks, the status is removed, and a special effect is activated.",
        "params": []
      }
    },
    "cooldown": "40s",
    "energy": 340
  },
  "talents": [
    {
      "name": "Sparkling Dawn",
      "talents": [
        {
          "name": "Sparkling Dawn",
          "description": "Whenever Shia deals Ultimate DMG to a target, increases her ATK by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "1.4%",
            "25",
            "30"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Tidecaller's Resonance",
      "talents": [
        {
          "name": "Tidecaller's Resonance",
          "description": "Increases Shia's Ultimate DMG dealt to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Meteor's Guidance",
      "talents": [
        {
          "name": "Meteor's Guidance",
          "description": "When Shia triggers ##Lux Mark#1015#, increases her Lux DMG by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "4%",
            "6",
            "5"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Beyond the Horizon",
      "talents": [
        {
          "name": "Beyond the Horizon",
          "description": "After Shia deals Skill DMG to a target, her Ultimate DMG is increased by <color=#0abec5>&Param1&</color>, stacking up to &Param2& times.\u000bThis effect is removed after Shia casts her Ultimate.",
          "params": [
            "1%",
            "50"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Last Tear",
      "talents": [
        {
          "name": "Last Tear",
          "description": "When any Trekker inflicts ##Lux Mark#1015#, increases Shia's Lux DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "20%",
            "6"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "hp": 672,
      "atk": 97
    },
    {
      "hp": 874,
      "atk": 126
    },
    {
      "hp": 1075,
      "atk": 155
    },
    {
      "hp": 1277,
      "atk": 184
    },
    {
      "hp": 1478,
      "atk": 213
    },
    {
      "hp": 1680,
      "atk": 242
    },
    {
      "hp": 1882,
      "atk": 271
    },
    {
      "hp": 2083,
      "atk": 300
    },
    {
      "hp": 2285,
      "atk": 329
    },
    {
      "hp": 2486,
      "atk": 358
    },
    {
      "hp": 2984,
      "atk": 430
    },
    {
      "hp": 3185,
      "atk": 459
    },
    {
      "hp": 3387,
      "atk": 488
    },
    {
      "hp": 3588,
      "atk": 517
    },
    {
      "hp": 3790,
      "atk": 546
    },
    {
      "hp": 3992,
      "atk": 575
    },
    {
      "hp": 4193,
      "atk": 604
    },
    {
      "hp": 4395,
      "atk": 633
    },
    {
      "hp": 4596,
      "atk": 662
    },
    {
      "hp": 4798,
      "atk": 691
    },
    {
      "hp": 5000,
      "atk": 720
    },
    {
      "hp": 6001,
      "atk": 864
    },
    {
      "hp": 6203,
      "atk": 893
    },
    {
      "hp": 6404,
      "atk": 923
    },
    {
      "hp": 6606,
      "atk": 952
    },
    {
      "hp": 6807,
      "atk": 981
    },
    {
      "hp": 7009,
      "atk": 1010
    },
    {
      "hp": 7211,
      "atk": 1039
    },
    {
      "hp": 7412,
      "atk": 1068
    },
    {
      "hp": 7614,
      "atk": 1097
    },
    {
      "hp": 7815,
      "atk": 1126
    },
    {
      "hp": 8017,
      "atk": 1155
    },
    {
      "hp": 9623,
      "atk": 1556
    },
    {
      "hp": 9825,
      "atk": 1568
    },
    {
      "hp": 10026,
      "atk": 1580
    },
    {
      "hp": 10228,
      "atk": 1592
    },
    {
      "hp": 10429,
      "atk": 1604
    },
    {
      "hp": 10631,
      "atk": 1616
    },
    {
      "hp": 10833,
      "atk": 1628
    },
    {
      "hp": 11034,
      "atk": 1640
    },
    {
      "hp": 11236,
      "atk": 1652
    },
    {
      "hp": 11437,
      "atk": 1664
    },
    {
      "hp": 11639,
      "atk": 1677
    },
    {
      "hp": 13964,
      "atk": 2012
    },
    {
      "hp": 14166,
      "atk": 2041
    },
    {
      "hp": 14367,
      "atk": 2070
    },
    {
      "hp": 14569,
      "atk": 2099
    },
    {
      "hp": 14771,
      "atk": 2128
    },
    {
      "hp": 14972,
      "atk": 2157
    },
    {
      "hp": 15174,
      "atk": 2186
    },
    {
      "hp": 15375,
      "atk": 2215
    },
    {
      "hp": 15577,
      "atk": 2244
    },
    {
      "hp": 15779,
      "atk": 2273
    },
    {
      "hp": 15980,
      "atk": 2302
    },
    {
      "hp": 19179,
      "atk": 2763
    },
    {
      "hp": 19380,
      "atk": 2792
    },
    {
      "hp": 19582,
      "atk": 2821
    },
    {
      "hp": 19784,
      "atk": 2850
    },
    {
      "hp": 19985,
      "atk": 2879
    },
    {
      "hp": 20187,
      "atk": 2908
    },
    {
      "hp": 20388,
      "atk": 2937
    },
    {
      "hp": 20590,
      "atk": 2966
    },
    {
      "hp": 20792,
      "atk": 2995
    },
    {
      "hp": 20993,
      "atk": 3024
    },
    {
      "hp": 21195,
      "atk": 3053
    },
    {
      "hp": 25435,
      "atk": 3664
    },
    {
      "hp": 25637,
      "atk": 3693
    },
    {
      "hp": 25838,
      "atk": 3722
    },
    {
      "hp": 26040,
      "atk": 3751
    },
    {
      "hp": 26242,
      "atk": 3780
    },
    {
      "hp": 26443,
      "atk": 3809
    },
    {
      "hp": 26645,
      "atk": 3838
    },
    {
      "hp": 26846,
      "atk": 3867
    },
    {
      "hp": 27048,
      "atk": 3896
    },
    {
      "hp": 27250,
      "atk": 3925
    },
    {
      "hp": 27451,
      "atk": 3954
    },
    {
      "hp": 32941,
      "atk": 4745
    },
    {
      "hp": 33143,
      "atk": 4774
    },
    {
      "hp": 33345,
      "atk": 4803
    },
    {
      "hp": 33546,
      "atk": 4832
    },
    {
      "hp": 33748,
      "atk": 4861
    },
    {
      "hp": 33949,
      "atk": 4890
    },
    {
      "hp": 34151,
      "atk": 4919
    },
    {
      "hp": 34353,
      "atk": 4948
    },
    {
      "hp": 34554,
      "atk": 4977
    },
    {
      "hp": 34756,
      "atk": 5006
    },
    {
      "hp": 34957,
      "atk": 5036
    },
    {
      "hp": 41946,
      "atk": 6042
    },
    {
      "hp": 42148,
      "atk": 6071
    },
    {
      "hp": 42349,
      "atk": 6100
    },
    {
      "hp": 42551,
      "atk": 6129
    },
    {
      "hp": 42753,
      "atk": 6158
    },
    {
      "hp": 42954,
      "atk": 6187
    },
    {
      "hp": 43155,
      "atk": 6216
    },
    {
      "hp": 43357,
      "atk": 6246
    },
    {
      "hp": 43559,
      "atk": 6275
    },
    {
      "hp": 43761,
      "atk": 6304
    },
    {
      "hp": 43962,
      "atk": 6333
    },
    {
      "hp": 43962,
      "atk": 6333
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
          "id": 20053,
          "name": "Radiant Feather Crown",
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
          "id": 20053,
          "name": "Radiant Feather Crown",
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
          "id": 20053,
          "name": "Radiant Feather Crown",
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
          "id": 20053,
          "name": "Radiant Feather Crown",
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