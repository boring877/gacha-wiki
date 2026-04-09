export const Chixia = {
  "id": 141,
  "name": "Chixia",
  "icon": "/stella/assets/Chixia.png",
  "portrait": "/stella/assets/Chixia_portrait.png",
  "background": "/stella/assets/Chixia_background.png",
  "variants": {
    "base": "/stella/assets/Chixia_base.png",
    "q": "/stella/assets/Chixia_q.png",
    "gd": "/stella/assets/Chixia_gd.png",
    "goods": "/stella/assets/Chixia_goods.png",
    "qs": "/stella/assets/Chixia_qs.png",
    "xl": "/stella/assets/Chixia_xl.png",
    "gc": "/stella/assets/Chixia_gc.png",
    "sk": "/stella/assets/Chixia_portrait.png",
    "xxl": "/stella/assets/Chixia.png",
    "qm": "/stella/assets/Chixia_qm.png",
    "l": "/stella/assets/Chixia_l.png",
    "s": "/stella/assets/Chixia_s.png"
  },
  "description": "Nobody would expect a Xuan Shi to be so timid. Her giant writing brush is a modified flamethrower and also her instrument in drawing powerful talismans.",
  "voiceActor": {
    "cn": "Tang Xiafang",
    "cnLocalized": "唐夏芳",
    "jp": "Sora Tokui",
    "jpLocalized": "徳井青空"
  },
  "birthday": "4.1",
  "grade": 5,
  "element": "Ignis",
  "position": "Versatile",
  "attackType": "Melee",
  "style": "Collector",
  "faction": "Yunji Studio",
  "tags": [
    "Versatile",
    "Collector",
    "Yunji Studio"
  ],
  "dateEvents": [
    {
      "name": "The Mural Master",
      "icon": "DatingSPCG_141301",
      "clue": "Visit the Cave to unlock",
      "secondChoice": "Keep exploring deeper."
    },
    {
      "name": "Cake Artistry",
      "icon": "DatingSPCG_141302",
      "clue": "Visit the Dessert Shop to unlock",
      "secondChoice": "Haven't had enough. Let's order some more."
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
    "name": "Mystic Brushstrokes",
    "icon": "Icon/Skill/14101_Normal",
    "description": "Waves the writing brush and inflicts Ink.\u000bStrike 1: <color=#fb8037>&Param1& of ATK</color> as Ignis DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Ignis DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK x4</color> as Ignis DMG.\u000bStrike 4: <color=#fb8037>&Param4& of ATK x3</color> as Ignis DMG.\u000bStrike 5: <color=#fb8037>&Param5& of ATK</color> as Ignis DMG.",
    "shortDescription": "Hurls the writing brush to perform multiple attacks.",
    "params": [
      "12.2%/14%/15.8%/21.3%/23%/24.7%/28.1%/29.6%/31%/34%/36.4%/38.8%/41.3%",
      "14.7%/16.9%/19.2%/25.8%/27.8%/29.9%/34%/35.8%/37.6%/41.1%/44.1%/47%/50%",
      "7.2%/8.3%/9.4%/12.6%/13.6%/14.6%/16.6%/17.5%/18.4%/20.1%/21.5%/23%/24.4%",
      "6.7%/7.7%/8.7%/11.8%/12.7%/13.6%/15.5%/16.3%/17.1%/18.8%/20.1%/21.4%/22.8%",
      "22.4%/25.8%/29.1%/39.2%/42.4%/45.5%/51.8%/54.5%/57.1%/62.5%/67%/71.5%/76%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Purifying Flames",
    "icon": "Icon/Skill/14101_Skill_Main",
    "description": "Spreads out a torrent of flames, dealing <color=#fb8037>&Param1& of ATK</color> as AoE Ignis DMG every 0.2s for a total of 3s. When dealing DMG to targets with Ink, inflicts ##Ignite#2027#.\u000bPurifying Flames (Main Skill) can trigger ##Ignis Mark#1016#, dealing &Param3& of ATK as AoE Ignis Mark DMG.",
    "shortDescription": "Spreads out a torrent of flames ahead, dealing DMG over time.\u000bThe Main Skill can trigger ##Ignis Mark#1016#.",
    "params": [
      "12.2%/14%/15.8%/21.3%/23%/24.7%/28.1%/29.6%/31%/34%/36.4%/38.8%/41.3%",
      "Purifying Flames",
      "28%/36%/45%/53%/61%/70%/78%/86%/95%"
    ],
    "hints": {
      "1016": {
        "id": 1016,
        "name": "Ignis Mark",
        "description": "The generic name for all Ignis Marks.\u000bWhen triggered by specific Ignis Trekkers' attacks, the status is removed, and a special effect is activated.",
        "params": []
      },
      "2027": {
        "id": 2027,
        "name": "Ignite",
        "description": "Chixia's flames ignite the Ink applied on the target, dealing DMG pers for &Param2&s. Her flames deal Ignis DMG equal to &Param1& of ATK in total.",
        "params": [
          "28%/36%/45%/53%/61%/70%/78%/86%/95%",
          "8"
        ]
      }
    },
    "cooldown": "7s"
  },
  "supportSkill": {
    "name": "Awakening: Crimson Dragon",
    "icon": "Icon/Skill/14101_Skill_Support",
    "description": "Summons a Crimson Dragon every 2s, up to 3 times.\u000bEach Crimson Dragon lasts for 8s and spits Ink at the target, dealing <color=#fb8037>&Param1& of ATK</color> as Ignis Minion's DMG. Upon vanishing, it charges toward the target, dealing <color=#fb8037>&Param2& of ATK</color> as Ignis Minion's AoE DMG.\u000bWhen Crimson Dragon deals DMG, inflicts ##Ignis Mark: Sacred Flame#2013#.\u000bMinions summoned by &Param3& will be removed when the Support Skill is cast again.",
    "shortDescription": "Summons a Crimson Dragon to attack the target.\u000bThe Support Skill can inflict ##Ignis Mark: Sacred Flame#2013#.",
    "params": [
      "39%/45%/51%/69%/74%/80%/91%/95%/100%/109%/117%/125%/133%",
      "57%/65%/73%/99%/107%/115%/131%/137%/144%/158%/169%/180%/192%",
      "Awakening: Crimson Dragon"
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
    "cooldown": "18s"
  },
  "ultimate": {
    "name": "Dragon's Ascension",
    "icon": "Icon/Skill/14101_Ultra",
    "description": "Conjures a Fire Dragon to circle around the target, dealing <color=#fb8037>&Param1& of ATK</color> as Ignis DMG in a large area every 0.3s for a total of 5s.",
    "shortDescription": "Conjures a Fire Dragon to attack the target's location.",
    "params": [
      "87%/101%/114%/153%/165%/177%/202%/212%/223%/244%/261%/279%/296%",
      "HitDamage,DamageNum,141400002",
      "HitDamage,DamageNum,141400003",
      "Dragon's Ascension",
      "28%/36%/45%/53%/61%/70%/78%/86%/95%"
    ],
    "hints": {},
    "cooldown": "30s",
    "energy": 285
  },
  "talents": [
    {
      "name": "Blaze Tome",
      "talents": [
        {
          "name": "Blaze Tome",
          "description": "Increases all friendly units' Ignis DMG dealt to targets inflicted with ##Ignis Mark#1016# by <color=#0abec5>&Param1&</color>.",
          "params": [
            "14%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Blaze Unbound",
      "talents": [
        {
          "name": "Blaze Unbound",
          "description": "Increases Crit Rate by <color=#0abec5>&Param1&</color> and Crit DMG by <color=#0abec5>&Param2&</color> for Chixia's Ultimate.",
          "params": [
            "10%",
            "10%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Prime Advantage",
      "talents": [
        {
          "name": "Prime Advantage",
          "description": "When Chixia casts her Ultimate, increases all friendly units' ATK by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "28%",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Trial of Growth",
      "talents": [
        {
          "name": "Trial of Growth",
          "description": "When ##Ignis Mark#1016# is triggered, increases the ATK of Chixia and her minions by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "20%",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Qualified Xuan Shi",
      "talents": [
        {
          "name": "Qualified Xuan Shi",
          "description": "Increases the Ignis DMG dealt by Chixia and her minions to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
          "params": [
            "24%"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        },
        {
          "name": "Ignis DMG Boost",
          "description": "Increases Ignis DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "hp": 752,
      "atk": 111
    },
    {
      "hp": 977,
      "atk": 144
    },
    {
      "hp": 1202,
      "atk": 177
    },
    {
      "hp": 1428,
      "atk": 211
    },
    {
      "hp": 1653,
      "atk": 244
    },
    {
      "hp": 1879,
      "atk": 277
    },
    {
      "hp": 2104,
      "atk": 310
    },
    {
      "hp": 2330,
      "atk": 344
    },
    {
      "hp": 2555,
      "atk": 377
    },
    {
      "hp": 2781,
      "atk": 410
    },
    {
      "hp": 3337,
      "atk": 492
    },
    {
      "hp": 3562,
      "atk": 526
    },
    {
      "hp": 3788,
      "atk": 559
    },
    {
      "hp": 4013,
      "atk": 592
    },
    {
      "hp": 4239,
      "atk": 625
    },
    {
      "hp": 4464,
      "atk": 659
    },
    {
      "hp": 4689,
      "atk": 692
    },
    {
      "hp": 4915,
      "atk": 725
    },
    {
      "hp": 5140,
      "atk": 758
    },
    {
      "hp": 5366,
      "atk": 792
    },
    {
      "hp": 5591,
      "atk": 825
    },
    {
      "hp": 6711,
      "atk": 990
    },
    {
      "hp": 6937,
      "atk": 1023
    },
    {
      "hp": 7162,
      "atk": 1057
    },
    {
      "hp": 7387,
      "atk": 1090
    },
    {
      "hp": 7613,
      "atk": 1123
    },
    {
      "hp": 7838,
      "atk": 1156
    },
    {
      "hp": 8064,
      "atk": 1190
    },
    {
      "hp": 8289,
      "atk": 1223
    },
    {
      "hp": 8515,
      "atk": 1256
    },
    {
      "hp": 8740,
      "atk": 1290
    },
    {
      "hp": 8966,
      "atk": 1323
    },
    {
      "hp": 10762,
      "atk": 1588
    },
    {
      "hp": 10987,
      "atk": 1621
    },
    {
      "hp": 11213,
      "atk": 1654
    },
    {
      "hp": 11438,
      "atk": 1688
    },
    {
      "hp": 11664,
      "atk": 1721
    },
    {
      "hp": 11889,
      "atk": 1754
    },
    {
      "hp": 12115,
      "atk": 1787
    },
    {
      "hp": 12340,
      "atk": 1821
    },
    {
      "hp": 12565,
      "atk": 1854
    },
    {
      "hp": 12791,
      "atk": 1887
    },
    {
      "hp": 13016,
      "atk": 1920
    },
    {
      "hp": 15617,
      "atk": 2304
    },
    {
      "hp": 15842,
      "atk": 2337
    },
    {
      "hp": 16067,
      "atk": 2371
    },
    {
      "hp": 16293,
      "atk": 2404
    },
    {
      "hp": 16518,
      "atk": 2437
    },
    {
      "hp": 16744,
      "atk": 2470
    },
    {
      "hp": 16969,
      "atk": 2504
    },
    {
      "hp": 17195,
      "atk": 2537
    },
    {
      "hp": 17420,
      "atk": 2570
    },
    {
      "hp": 17646,
      "atk": 2603
    },
    {
      "hp": 17871,
      "atk": 2637
    },
    {
      "hp": 21448,
      "atk": 3165
    },
    {
      "hp": 21674,
      "atk": 3198
    },
    {
      "hp": 21899,
      "atk": 3231
    },
    {
      "hp": 22125,
      "atk": 3264
    },
    {
      "hp": 22350,
      "atk": 3298
    },
    {
      "hp": 22576,
      "atk": 3331
    },
    {
      "hp": 22801,
      "atk": 3364
    },
    {
      "hp": 23027,
      "atk": 3397
    },
    {
      "hp": 23252,
      "atk": 3431
    },
    {
      "hp": 23477,
      "atk": 3464
    },
    {
      "hp": 23703,
      "atk": 3497
    },
    {
      "hp": 28445,
      "atk": 4197
    },
    {
      "hp": 28670,
      "atk": 4230
    },
    {
      "hp": 28896,
      "atk": 4263
    },
    {
      "hp": 29121,
      "atk": 4297
    },
    {
      "hp": 29347,
      "atk": 4330
    },
    {
      "hp": 29572,
      "atk": 4363
    },
    {
      "hp": 29798,
      "atk": 4396
    },
    {
      "hp": 30023,
      "atk": 4430
    },
    {
      "hp": 30249,
      "atk": 4463
    },
    {
      "hp": 30474,
      "atk": 4496
    },
    {
      "hp": 30700,
      "atk": 4529
    },
    {
      "hp": 36840,
      "atk": 5435
    },
    {
      "hp": 37065,
      "atk": 5469
    },
    {
      "hp": 37290,
      "atk": 5502
    },
    {
      "hp": 37516,
      "atk": 5535
    },
    {
      "hp": 37741,
      "atk": 5568
    },
    {
      "hp": 37967,
      "atk": 5602
    },
    {
      "hp": 38192,
      "atk": 5635
    },
    {
      "hp": 38418,
      "atk": 5668
    },
    {
      "hp": 38643,
      "atk": 5701
    },
    {
      "hp": 38869,
      "atk": 5735
    },
    {
      "hp": 39094,
      "atk": 5768
    },
    {
      "hp": 46910,
      "atk": 6921
    },
    {
      "hp": 47135,
      "atk": 6954
    },
    {
      "hp": 47361,
      "atk": 6988
    },
    {
      "hp": 47586,
      "atk": 7021
    },
    {
      "hp": 47812,
      "atk": 7054
    },
    {
      "hp": 48037,
      "atk": 7087
    },
    {
      "hp": 48263,
      "atk": 7121
    },
    {
      "hp": 48488,
      "atk": 7154
    },
    {
      "hp": 48714,
      "atk": 7187
    },
    {
      "hp": 48939,
      "atk": 7221
    },
    {
      "hp": 49164,
      "atk": 7254
    },
    {
      "hp": 49164,
      "atk": 7254
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