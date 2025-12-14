export const Caramel = {
  "id": 147,
  "name": "Caramel",
  "icon": "/stella/assets/Caramel.png",
  "portrait": "/stella/assets/Caramel_portrait.png",
  "background": "/stella/assets/Caramel_background.png",
  "variants": {
    "base": "/stella/assets/Caramel_base.png",
    "q": "/stella/assets/Caramel_q.png",
    "gd": "/stella/assets/Caramel_gd.png",
    "goods": "/stella/assets/Caramel_goods.png",
    "qs": "/stella/assets/Caramel_qs.png",
    "xl": "/stella/assets/Caramel_xl.png",
    "gc": "/stella/assets/Caramel_gc.png",
    "sk": "/stella/assets/Caramel_portrait.png",
    "xxl": "/stella/assets/Caramel.png",
    "qm": "/stella/assets/Caramel_qm.png",
    "l": "/stella/assets/Caramel_l.png",
    "s": "/stella/assets/Caramel_s.png"
  },
  "description": "Enchanted by the music in the Monolith, the virtuoso bassist dazzles her audience with ease. Not even Stellaroids or monsters can withstand the shockwaves she creates.",
  "voiceActor": {
    "cn": "Cai Shujin",
    "cnLocalized": "蔡书瑾",
    "jp": "Sayumi Suzushiro",
    "jpLocalized": "鈴代紗弓"
  },
  "birthday": "11.11",
  "grade": 4,
  "element": "Umbra",
  "position": "Vanguard",
  "attackType": "Ranged",
  "style": "Creative",
  "faction": "Freelance Trekker",
  "tags": [
    "Vanguard",
    "Creative",
    "Freelance Trekker"
  ],
  "dateEvents": [
    {
      "name": "Secret Stage",
      "icon": "DatingSPCG_147301",
      "clue": "Visit the Port to unlock",
      "secondChoice": "Take a small boat out for some coastal sightseeing."
    },
    {
      "name": "Artistic Integrity",
      "icon": "DatingSPCG_147302",
      "clue": "Visit the Market to unlock",
      "secondChoice": "Haven't been to that area yet."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Rising Star",
      "Emerging Talent",
      "Shining Star",
      "Summer Chill Crushed Ice",
      "Fragrant Ice Delight",
      "Sweet IceFurry"
    ],
    "hates": []
  },
  "normalAttack": {
    "name": "Solo Flash",
    "icon": "Icon/Skill/14701_Normal",
    "description": "Fires consecutive musical notes.\u000bStrike 1: <color=#ec6d21>&Param1& of ATK</color> as Umbra DMG.\u000bStrike 2: <color=#ec6d21>&Param2& of ATK x2</color> as Umbra DMG.\u000bStrike 3: <color=#ec6d21>&Param3& of ATK x5</color> as Umbra DMG.",
    "shortDescription": "Unleashes a barrage of musical notes at the target.",
    "params": [
      "6.7%/7.4%/8.1%/10.1%/10.8%/11.4%/12.8%/13.5%/14.1%/15.5%/16.2%/16.8%/17.5%",
      "8.1%/8.9%/9.7%/12.1%/13%/13.8%/15.4%/16.2%/17%/18.6%/19.4%/20.2%/21.1%",
      "10.8%/11.9%/13%/16.2%/17.3%/18.4%/20.5%/21.6%/22.7%/24.8%/25.9%/27%/28.1%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Co-Performance",
    "icon": "Icon/Skill/14701_Skill_Main",
    "description": "Throws Demonic Boombox, dealing <color=#ec6d21>&Param1&</color> and <color=#ec6d21>&Param2& of ATK</color> as Umbra Minion DMG in a large area as it falls and pulsates.\u000bWhen Caramel is near the Demonic Boombox, a connection is established, increasing her &Param3& by <color=#ec6d21>&Param4&</color>.\u000bDemonic Boombox has 100% of Caramel's ATK and lasts for 15s.\u000bDemonic Boombox can trigger ##Umbra Mark: Gloom#2018#, dealing &Param5& of ATK as Umbra Mark DMG to the target, and inflict Umbra Burn, which deals DMG to the target every 0.5s for &Param7&s, totaling to &Param6& of ATK as Umbra Mark DMG.",
    "shortDescription": "Summons Demonic Boombox to attack the target repeatedly. When near the Demonic Boombox, increases Caramel's &Param3&. Demonic Boombox can trigger ##Umbra Mark: Gloom#2018#.",
    "params": [
      "35%/38%/42%/52%/56%/59%/66%/70%/73%/80%/84%/87%/90%",
      "18.2%/20%/21.8%/27.3%/29.1%/30.9%/34.6%/36.4%/38.2%/41.9%/43.7%/45.5%/47.3%",
      "ATK",
      "20%",
      "11.5%/13.9%/16.2%/18.5%/20.8%/23.1%/25.4%/27.7%/30%",
      "1.4%/1.7%/2.1%/2.4%/2.7%/3.1%/3.4%/3.7%/4.1%",
      "5"
    ],
    "hints": {
      "2018": {
        "id": 2018,
        "name": "Umbra Mark: Gloom",
        "description": "A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.",
        "params": []
      }
    },
    "cooldown": "10.5s"
  },
  "supportSkill": {
    "name": "Melodic Sweep",
    "icon": "Icon/Skill/14701_Skill_Support",
    "description": "Sweeps with the bass, dealing <color=#ec6d21>&Param1& of ATK x2</color> as Umbra DMG. Then, unleashes 5 musical notes to attack nearby targets, each dealing <color=#ec6d21>&Param2& of ATK</color> as Umbra DMG.\u000bMelodic Sweep (Support Skill) can trigger ##Umbra Mark: Gloom#2018#, dealing &Param3& of ATK as Umbra Mark DMG to the target and inflicting Umbra Burn, which deals DMG to the target every 0.5s for &Param5&s, totaling to &Param4& of ATK as Umbra Mark DMG.",
    "shortDescription": "Sweeps with the bass and unleashes musical notes, dealing multiple instances of DMG. Melodic Sweep (Support Skill) can trigger ##Umbra Mark: Gloom#2018#.",
    "params": [
      "33.4%/36.7%/40.1%/50.1%/53.4%/56.8%/63.5%/66.8%/70.1%/76.8%/80.2%/83.5%/86.8%",
      "41%/45%/49%/61%/65%/69%/77%/81%/85%/94%/98%/102%/106%",
      "11.5%/13.9%/16.2%/18.5%/20.8%/23.1%/25.4%/27.7%/30%",
      "1.4%/1.7%/2.1%/2.4%/2.7%/3.1%/3.4%/3.7%/4.1%",
      "5"
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
    "name": "Melodic Seraphim",
    "icon": "Icon/Skill/14701_Ultra",
    "description": "Plays the bass with intense passion, dealing <color=#ec6d21>&Param1& of ATK x6</color> as AoE Umbra DMG.\u000bMelodic Seraphim (Ultimate) can trigger ##Umbra Mark: Gloom#2018#, dealing &Param2& of ATK as Umbra Mark DMG and inflicting Umbra Burn, which deals DMG to the target every 0.5s for &Param4&s, totaling to &Param3& of ATK as Umbra Mark DMG.",
    "shortDescription": "Plays the bass to deal multiple instances of DMG in a large area. The Ultimate can trigger ##Umbra Mark: Gloom#2018#.",
    "params": [
      "140%/154%/168%/210%/224%/238%/266%/280%/294%/321%/335%/349%/363%",
      "11.5%/13.9%/16.2%/18.5%/20.8%/23.1%/25.4%/27.7%/30%",
      "1.4%/1.7%/2.1%/2.4%/2.7%/3.1%/3.4%/3.7%/4.1%",
      "5"
    ],
    "hints": {
      "2018": {
        "id": 2018,
        "name": "Umbra Mark: Gloom",
        "description": "A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects.",
        "params": []
      }
    },
    "cooldown": "30s",
    "energy": 285
  },
  "talents": [
    {
      "name": "Fundamental Theory",
      "talents": [
        {
          "name": "Fundamental Theory",
          "description": "When Caramel triggers ##Umbra Mark: Gloom#2018#, her ATK is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
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
      "name": "Chord Crescendo",
      "talents": [
        {
          "name": "Chord Crescendo",
          "description": "When Caramel casts an Ultimate, her Umbra DMG is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "14.4%",
            "25"
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
      "name": "Silken Performance",
      "talents": [
        {
          "name": "Silken Performance",
          "description": "After Caramel kills a target, her Ultimate DMG is increased by <color=#0abec5>&Param1&</color>, stacking up to &Param2& times.\u000bThis effect is removed after Caramel casts her Ultimate.",
          "params": [
            "10%",
            "4"
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
      "name": "Cadenza Pluck",
      "talents": [
        {
          "name": "Cadenza Pluck",
          "description": "After Caramel deals Auto Attack DMG to a target, her ATK is increased by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "2%",
            "10",
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
      "name": "Superb Debut",
      "talents": [
        {
          "name": "Superb Debut",
          "description": "After Caramel casts a skill, her Ultimate DMG is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "40%",
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
    }
  ],
  "stats": [
    {
      "hp": 734,
      "atk": 100
    },
    {
      "hp": 954,
      "atk": 130
    },
    {
      "hp": 1174,
      "atk": 160
    },
    {
      "hp": 1394,
      "atk": 190
    },
    {
      "hp": 1614,
      "atk": 220
    },
    {
      "hp": 1834,
      "atk": 250
    },
    {
      "hp": 2054,
      "atk": 280
    },
    {
      "hp": 2274,
      "atk": 310
    },
    {
      "hp": 2494,
      "atk": 340
    },
    {
      "hp": 2714,
      "atk": 370
    },
    {
      "hp": 3257,
      "atk": 444
    },
    {
      "hp": 3477,
      "atk": 474
    },
    {
      "hp": 3697,
      "atk": 504
    },
    {
      "hp": 3917,
      "atk": 534
    },
    {
      "hp": 4138,
      "atk": 564
    },
    {
      "hp": 4358,
      "atk": 594
    },
    {
      "hp": 4578,
      "atk": 624
    },
    {
      "hp": 4798,
      "atk": 654
    },
    {
      "hp": 5018,
      "atk": 684
    },
    {
      "hp": 5238,
      "atk": 714
    },
    {
      "hp": 5458,
      "atk": 744
    },
    {
      "hp": 6551,
      "atk": 893
    },
    {
      "hp": 6771,
      "atk": 923
    },
    {
      "hp": 6991,
      "atk": 953
    },
    {
      "hp": 7211,
      "atk": 983
    },
    {
      "hp": 7431,
      "atk": 1013
    },
    {
      "hp": 7651,
      "atk": 1043
    },
    {
      "hp": 7872,
      "atk": 1073
    },
    {
      "hp": 8092,
      "atk": 1103
    },
    {
      "hp": 8312,
      "atk": 1133
    },
    {
      "hp": 8532,
      "atk": 1163
    },
    {
      "hp": 8752,
      "atk": 1193
    },
    {
      "hp": 10505,
      "atk": 1432
    },
    {
      "hp": 10725,
      "atk": 1462
    },
    {
      "hp": 10945,
      "atk": 1492
    },
    {
      "hp": 11165,
      "atk": 1522
    },
    {
      "hp": 11385,
      "atk": 1552
    },
    {
      "hp": 11606,
      "atk": 1582
    },
    {
      "hp": 11826,
      "atk": 1612
    },
    {
      "hp": 12046,
      "atk": 1642
    },
    {
      "hp": 12266,
      "atk": 1672
    },
    {
      "hp": 12486,
      "atk": 1702
    },
    {
      "hp": 12706,
      "atk": 1732
    },
    {
      "hp": 15244,
      "atk": 2078
    },
    {
      "hp": 15464,
      "atk": 2108
    },
    {
      "hp": 15684,
      "atk": 2138
    },
    {
      "hp": 15904,
      "atk": 2168
    },
    {
      "hp": 16125,
      "atk": 2198
    },
    {
      "hp": 16345,
      "atk": 2228
    },
    {
      "hp": 16565,
      "atk": 2258
    },
    {
      "hp": 16785,
      "atk": 2288
    },
    {
      "hp": 17005,
      "atk": 2318
    },
    {
      "hp": 17225,
      "atk": 2348
    },
    {
      "hp": 17445,
      "atk": 2378
    },
    {
      "hp": 20937,
      "atk": 2854
    },
    {
      "hp": 21157,
      "atk": 2884
    },
    {
      "hp": 21377,
      "atk": 2914
    },
    {
      "hp": 21597,
      "atk": 2944
    },
    {
      "hp": 21817,
      "atk": 2974
    },
    {
      "hp": 22037,
      "atk": 3004
    },
    {
      "hp": 22257,
      "atk": 3034
    },
    {
      "hp": 22478,
      "atk": 3064
    },
    {
      "hp": 22698,
      "atk": 3094
    },
    {
      "hp": 22918,
      "atk": 3124
    },
    {
      "hp": 23138,
      "atk": 3154
    },
    {
      "hp": 27767,
      "atk": 3785
    },
    {
      "hp": 27987,
      "atk": 3815
    },
    {
      "hp": 28207,
      "atk": 3845
    },
    {
      "hp": 28427,
      "atk": 3875
    },
    {
      "hp": 28647,
      "atk": 3905
    },
    {
      "hp": 28867,
      "atk": 3935
    },
    {
      "hp": 29087,
      "atk": 3965
    },
    {
      "hp": 29307,
      "atk": 3995
    },
    {
      "hp": 29527,
      "atk": 4025
    },
    {
      "hp": 29747,
      "atk": 4055
    },
    {
      "hp": 29968,
      "atk": 4085
    },
    {
      "hp": 35961,
      "atk": 4902
    },
    {
      "hp": 36181,
      "atk": 4932
    },
    {
      "hp": 36401,
      "atk": 4962
    },
    {
      "hp": 36621,
      "atk": 4992
    },
    {
      "hp": 36841,
      "atk": 5022
    },
    {
      "hp": 37061,
      "atk": 5052
    },
    {
      "hp": 37282,
      "atk": 5082
    },
    {
      "hp": 37502,
      "atk": 5112
    },
    {
      "hp": 37722,
      "atk": 5142
    },
    {
      "hp": 37942,
      "atk": 5172
    },
    {
      "hp": 38162,
      "atk": 5202
    },
    {
      "hp": 45791,
      "atk": 6242
    },
    {
      "hp": 46011,
      "atk": 6272
    },
    {
      "hp": 46231,
      "atk": 6302
    },
    {
      "hp": 46452,
      "atk": 6332
    },
    {
      "hp": 46672,
      "atk": 6362
    },
    {
      "hp": 46892,
      "atk": 6392
    },
    {
      "hp": 47112,
      "atk": 6422
    },
    {
      "hp": 47332,
      "atk": 6452
    },
    {
      "hp": 47552,
      "atk": 6482
    },
    {
      "hp": 47772,
      "atk": 6512
    },
    {
      "hp": 47992,
      "atk": 6542
    },
    {
      "hp": 47992,
      "atk": 6542
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
          "id": 32001,
          "name": "Tapping Game Cartridge",
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
          "id": 32001,
          "name": "Tapping Game Cartridge",
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
          "id": 32001,
          "name": "Tapping Game Cartridge",
          "quantity": 24
        },
        {
          "id": 32002,
          "name": "Rhythm Game Cartridge",
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
          "id": 32001,
          "name": "Tapping Game Cartridge",
          "quantity": 38
        },
        {
          "id": 32002,
          "name": "Rhythm Game Cartridge",
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
          "id": 32001,
          "name": "Tapping Game Cartridge",
          "quantity": 70
        },
        {
          "id": 32002,
          "name": "Rhythm Game Cartridge",
          "quantity": 14
        },
        {
          "id": 32003,
          "name": "Magic Sound Game Cartridge",
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
          "id": 20013,
          "name": "Crimson Tempter",
          "quantity": 1
        },
        {
          "id": 32002,
          "name": "Rhythm Game Cartridge",
          "quantity": 50
        },
        {
          "id": 32003,
          "name": "Magic Sound Game Cartridge",
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
          "id": 20013,
          "name": "Crimson Tempter",
          "quantity": 2
        },
        {
          "id": 32002,
          "name": "Rhythm Game Cartridge",
          "quantity": 90
        },
        {
          "id": 32003,
          "name": "Magic Sound Game Cartridge",
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
          "id": 20013,
          "name": "Crimson Tempter",
          "quantity": 3
        },
        {
          "id": 32002,
          "name": "Rhythm Game Cartridge",
          "quantity": 140
        },
        {
          "id": 32003,
          "name": "Magic Sound Game Cartridge",
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
          "id": 20013,
          "name": "Crimson Tempter",
          "quantity": 6
        },
        {
          "id": 32002,
          "name": "Rhythm Game Cartridge",
          "quantity": 200
        },
        {
          "id": 32003,
          "name": "Magic Sound Game Cartridge",
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