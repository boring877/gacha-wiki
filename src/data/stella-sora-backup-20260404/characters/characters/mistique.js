export const Mistique = {
  "id": 135,
  "name": "Mistique",
  "icon": "/stella/assets/Mistique.png",
  "portrait": "/stella/assets/Mistique_portrait.png",
  "background": "/stella/assets/Mistique_background.png",
  "variants": {
    "base": "/stella/assets/Mistique_base.png",
    "q": "/stella/assets/Mistique_q.png",
    "gd": "/stella/assets/Mistique_gd.png",
    "goods": "/stella/assets/Mistique_goods.png",
    "qs": "/stella/assets/Mistique_qs.png",
    "xl": "/stella/assets/Mistique_xl.png",
    "gc": "/stella/assets/Mistique_gc.png",
    "sk": "/stella/assets/Mistique_portrait.png",
    "xxl": "/stella/assets/Mistique.png",
    "qm": "/stella/assets/Mistique_qm.png",
    "l": "/stella/assets/Mistique_l.png",
    "s": "/stella/assets/Mistique_s.png"
  },
  "description": "Mistique is the witch of Scarlet Sights Media. She has two summons that help her strike down her enemies in exchange for their \"sustenance\": Real news and truth.",
  "voiceActor": {
    "cn": "Wu Zheru",
    "cnLocalized": "吴哲茹",
    "jp": "Aoi Koga",
    "jpLocalized": "古賀葵"
  },
  "birthday": "11.8",
  "grade": 5,
  "element": "Umbra",
  "position": "Versatile",
  "attackType": "Ranged",
  "style": "Creative",
  "faction": "Scarlet Sights Media",
  "tags": [
    "Versatile",
    "Creative",
    "Scarlet Sights Media"
  ],
  "dateEvents": [
    {
      "name": "Archaeological Discovery",
      "icon": "DatingSPCG_135301",
      "clue": "Visit the Cave to unlock",
      "secondChoice": "Keep exploring deeper."
    },
    {
      "name": "Material Gathering",
      "icon": "DatingSPCG_135302",
      "clue": "Visit the Academy to unlock",
      "secondChoice": "Gonna look around inside the library."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Card Photo Capturer",
      "Reflective Photo Capturer",
      "Ultra-Precision Photo Capturer",
      "Portable Blower",
      "Exquisite Blower",
      "Deluxe Blower",
      "Rising Star",
      "Emerging Talent",
      "Shining Star"
    ],
    "hates": [
      "Stellanite Enchantment",
      "Moonlit Companion",
      "Cosmic Form"
    ]
  },
  "normalAttack": {
    "name": "Comet Sweep",
    "icon": "Icon/Skill/13501_Normal",
    "description": "Sweeps her broom to attack repeatedly.\u000bStrike 1: <color=#ec6d21>&Param1& of ATK</color> as Umbra DMG.\u000bStrike 2: <color=#ec6d21>&Param2& of ATK</color> as Umbra DMG.\u000bStrike 3: <color=#ec6d21>&Param3& of ATK</color> as Umbra DMG.\u000bStrike 4: <color=#ec6d21>&Param4& of ATK</color> as Umbra DMG.",
    "shortDescription": "Sweeps her broom to attack repeatedly.",
    "params": [
      "6.5%/7.3%/8.2%/9%/9.9%/10.7%/11.9%/13%/14.2%/15.3%/16.5%/17.7%/18.8%",
      "4.6%/5.2%/5.8%/6.4%/7%/7.6%/8.5%/9.3%/10.1%/10.9%/11.7%/12.6%/13.4%",
      "5.1%/5.7%/6.4%/7%/7.7%/8.4%/9.3%/10.2%/11.1%/12%/12.9%/13.8%/14.7%",
      "7.2%/8.1%/9%/10%/10.9%/11.8%/13.1%/14.4%/15.6%/16.9%/18.2%/19.4%/20.7%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Pumpka Pummel",
    "icon": "Icon/Skill/13501_Skill_Main",
    "description": "Mistique takes a photo to deal <color=#ec6d21>&Param6&</color> of ATK as AoE Umbra Skill DMG, then enters Exposure status: Summons one Pumpka Phantom every 3s for 15s.\u000bPumpka Phantoms automatically attack the target, dealing <color=#ec6d21>&Param1& of ATK</color> and <color=#ec6d21>&Param2& of ATK</color> as Umbra Minion DMG.\u000bEach Pumpka Phantom has 25% of Mistique's Base Max HP, 100% of her ATK, and lasts for 15s. Up to 4 Pumpka Phantoms can be present at the same time.\u000bPumpka Pummel (Main Skill) and Pumpka Phantoms can trigger ##Umbra Mark#1019#, dealing &Param3& of ATK as Umbra Mark DMG and inflicting Umbra Burn, which deals DMG to the target every 0.5s for &Param5&s, totaling to &Param4& of ATK as Umbra Mark DMG.\u000bWhen Pumpka Pummel (Main Skill) is interrupted, its cooldown is partially reduced.",
    "shortDescription": "Takes a photo to deal DMG and enters Exposure status. While in Exposure, summons multiple Pumpka Phantoms. The Main Skill and Pumpka Phantoms can trigger ##Umbra Mark#1019#.",
    "params": [
      "3.9%/4.4%/4.9%/5.4%/5.9%/6.4%/7%/7.7%/8.4%/9.1%/9.8%/10.5%/11.2%",
      "3.3%/3.7%/4.2%/4.6%/5%/5.5%/6.1%/6.6%/7.2%/7.8%/8.4%/9%/9.6%",
      "8.3%/10.3%/12.2%/14.2%/16.1%/18.1%/20.1%/22%/24%",
      "1.4%/1.7%/2.1%/2.4%/2.7%/3.1%/3.4%/3.7%/4.1%",
      "5",
      "38.8%/43.8%/48.9%/53.9%/59%/64%/70.9%/77.8%/84.7%/91.6%/98.6%/105.5%/112.4%"
    ],
    "hints": {
      "1019": {
        "id": 1019,
        "name": "Umbra Mark",
        "description": "The generic name for all Umbra Marks.\u000bWhen triggered by specific Umbra Trekkers' attacks, the status is removed, and a special effect is activated.",
        "params": []
      }
    },
    "cooldown": "11s"
  },
  "supportSkill": {
    "name": "Summoning Circle",
    "icon": "Icon/Skill/13501_Skill_Support",
    "description": "Draws a magic circle on the ground, summoning a Lanterna Phantom every 0.5s for 6s.\u000bLanterna Phantom will explode, dealing <color=#ec6d21>&Param1& of ATK</color> as Umbra Minion DMG and inflicting ##Umbra Mark: Gloom#2018#.\u000bEach Lanterna Phantom has 3% of Mistique's Base Max HP and 100% of her ATK, lasting for 8s.",
    "shortDescription": "Draws a magic circle on the ground, summoning self-exploding Lanterna Phantoms. Their explosion can inflict ##Umbra Mark: Gloom#2018#.",
    "params": [
      "93%/105%/117%/129%/141%/153%/170%/187%/203%/220%/236%/253%/269%"
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
    "name": "Midnight ★ Terror",
    "icon": "Icon/Skill/13501_Ultra",
    "description": "Summons a massive phantom, dealing <color=#ec6d21>&Param1& of ATK x8</color>/<color=#ec6d21>&Param2& of ATK</color> as Umbra DMG in a large area.",
    "shortDescription": "Summons a massive phantom, dealing damage in a large area.",
    "params": [
      "172%/195%/217%/240%/262%/284%/315%/346%/376%/407%/438%/468%/499%",
      "345%/389%/434%/479%/524%/569%/630%/691%/753%/814%/875%/937%/998%"
    ],
    "hints": {},
    "cooldown": "30s",
    "energy": 275
  },
  "talents": [
    {
      "name": "Harmful Rumors",
      "talents": [
        {
          "name": "Harmful Rumors",
          "description": "When Mistique summons a phantom, increases all friendly units' Umbra DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "14%",
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
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Secondary Slander",
      "talents": [
        {
          "name": "Secondary Slander",
          "description": "Increases the Minion DMG of phantoms summoned by Mistique by <color=#0abec5>&Param1&</color>.",
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
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Communication Psychology",
      "talents": [
        {
          "name": "Communication Psychology",
          "description": "When a phantom summoned by Mistique disappears, all friendly units's ATK is increased by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "3.5%",
            "15",
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
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Social Engineering",
      "talents": [
        {
          "name": "Social Engineering",
          "description": "When a phantom summoned by Mistique's skill hits a target, increases the ATK of Mistique and summoned phantoms by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "20%",
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
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Truth As You Wish",
      "talents": [
        {
          "name": "Truth As You Wish",
          "description": "After Mistique summons 5 phantoms, increases the Minion DMG of subsequent phantoms summoned by Mistique by <color=#0abec5>&Param1&</color> for &Param2&s. This effect can only be triggered once per &Param3&s.",
          "params": [
            "26%",
            "12",
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
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Ultimate DMG",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "hp": 745,
      "atk": 112
    },
    {
      "hp": 969,
      "atk": 145
    },
    {
      "hp": 1193,
      "atk": 179
    },
    {
      "hp": 1416,
      "atk": 212
    },
    {
      "hp": 1640,
      "atk": 246
    },
    {
      "hp": 1863,
      "atk": 279
    },
    {
      "hp": 2087,
      "atk": 313
    },
    {
      "hp": 2311,
      "atk": 346
    },
    {
      "hp": 2534,
      "atk": 380
    },
    {
      "hp": 2758,
      "atk": 414
    },
    {
      "hp": 3309,
      "atk": 496
    },
    {
      "hp": 3533,
      "atk": 530
    },
    {
      "hp": 3757,
      "atk": 563
    },
    {
      "hp": 3980,
      "atk": 597
    },
    {
      "hp": 4204,
      "atk": 630
    },
    {
      "hp": 4427,
      "atk": 664
    },
    {
      "hp": 4651,
      "atk": 697
    },
    {
      "hp": 4875,
      "atk": 731
    },
    {
      "hp": 5098,
      "atk": 764
    },
    {
      "hp": 5322,
      "atk": 798
    },
    {
      "hp": 5545,
      "atk": 831
    },
    {
      "hp": 6656,
      "atk": 998
    },
    {
      "hp": 6880,
      "atk": 1032
    },
    {
      "hp": 7103,
      "atk": 1065
    },
    {
      "hp": 7327,
      "atk": 1099
    },
    {
      "hp": 7550,
      "atk": 1132
    },
    {
      "hp": 7774,
      "atk": 1166
    },
    {
      "hp": 7998,
      "atk": 1199
    },
    {
      "hp": 8221,
      "atk": 1233
    },
    {
      "hp": 8445,
      "atk": 1266
    },
    {
      "hp": 8669,
      "atk": 1300
    },
    {
      "hp": 8892,
      "atk": 1333
    },
    {
      "hp": 10674,
      "atk": 1600
    },
    {
      "hp": 10897,
      "atk": 1634
    },
    {
      "hp": 11121,
      "atk": 1667
    },
    {
      "hp": 11344,
      "atk": 1701
    },
    {
      "hp": 11568,
      "atk": 1735
    },
    {
      "hp": 11792,
      "atk": 1768
    },
    {
      "hp": 12015,
      "atk": 1802
    },
    {
      "hp": 12239,
      "atk": 1835
    },
    {
      "hp": 12462,
      "atk": 1869
    },
    {
      "hp": 12686,
      "atk": 1902
    },
    {
      "hp": 12910,
      "atk": 1936
    },
    {
      "hp": 15489,
      "atk": 2322
    },
    {
      "hp": 15712,
      "atk": 2356
    },
    {
      "hp": 15936,
      "atk": 2389
    },
    {
      "hp": 16159,
      "atk": 2423
    },
    {
      "hp": 16383,
      "atk": 2456
    },
    {
      "hp": 16607,
      "atk": 2490
    },
    {
      "hp": 16830,
      "atk": 2524
    },
    {
      "hp": 17054,
      "atk": 2557
    },
    {
      "hp": 17277,
      "atk": 2591
    },
    {
      "hp": 17501,
      "atk": 2624
    },
    {
      "hp": 17725,
      "atk": 2658
    },
    {
      "hp": 21273,
      "atk": 3190
    },
    {
      "hp": 21496,
      "atk": 3223
    },
    {
      "hp": 21720,
      "atk": 3257
    },
    {
      "hp": 21943,
      "atk": 3290
    },
    {
      "hp": 22167,
      "atk": 3324
    },
    {
      "hp": 22391,
      "atk": 3357
    },
    {
      "hp": 22614,
      "atk": 3391
    },
    {
      "hp": 22838,
      "atk": 3424
    },
    {
      "hp": 23061,
      "atk": 3458
    },
    {
      "hp": 23285,
      "atk": 3491
    },
    {
      "hp": 23509,
      "atk": 3525
    },
    {
      "hp": 28212,
      "atk": 4230
    },
    {
      "hp": 28435,
      "atk": 4264
    },
    {
      "hp": 28659,
      "atk": 4297
    },
    {
      "hp": 28883,
      "atk": 4331
    },
    {
      "hp": 29106,
      "atk": 4364
    },
    {
      "hp": 29330,
      "atk": 4398
    },
    {
      "hp": 29554,
      "atk": 4431
    },
    {
      "hp": 29777,
      "atk": 4465
    },
    {
      "hp": 30001,
      "atk": 4498
    },
    {
      "hp": 30224,
      "atk": 4532
    },
    {
      "hp": 30448,
      "atk": 4565
    },
    {
      "hp": 36538,
      "atk": 5478
    },
    {
      "hp": 36761,
      "atk": 5512
    },
    {
      "hp": 36985,
      "atk": 5546
    },
    {
      "hp": 37208,
      "atk": 5579
    },
    {
      "hp": 37432,
      "atk": 5613
    },
    {
      "hp": 37656,
      "atk": 5646
    },
    {
      "hp": 37879,
      "atk": 5680
    },
    {
      "hp": 38103,
      "atk": 5713
    },
    {
      "hp": 38326,
      "atk": 5747
    },
    {
      "hp": 38550,
      "atk": 5780
    },
    {
      "hp": 38774,
      "atk": 5814
    },
    {
      "hp": 46525,
      "atk": 6976
    },
    {
      "hp": 46749,
      "atk": 7010
    },
    {
      "hp": 46973,
      "atk": 7043
    },
    {
      "hp": 47196,
      "atk": 7077
    },
    {
      "hp": 47420,
      "atk": 7110
    },
    {
      "hp": 47643,
      "atk": 7144
    },
    {
      "hp": 47867,
      "atk": 7177
    },
    {
      "hp": 48091,
      "atk": 7211
    },
    {
      "hp": 48314,
      "atk": 7244
    },
    {
      "hp": 48538,
      "atk": 7278
    },
    {
      "hp": 48761,
      "atk": 7311
    },
    {
      "hp": 48761,
      "atk": 7311
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
          "id": 21013,
          "name": "Evil Bloom Essence",
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
          "id": 21013,
          "name": "Evil Bloom Essence",
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
          "id": 21013,
          "name": "Evil Bloom Essence",
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
          "id": 21013,
          "name": "Evil Bloom Essence",
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