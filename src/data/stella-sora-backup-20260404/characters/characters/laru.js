export const Laru = {
  "id": 150,
  "name": "Laru",
  "icon": "/stella/assets/Laru.png",
  "portrait": "/stella/assets/Laru_portrait.png",
  "background": "/stella/assets/Laru_background.png",
  "variants": {
    "base": "/stella/assets/Laru_base.png",
    "q": "/stella/assets/Laru_q.png",
    "gd": "/stella/assets/Laru_gd.png",
    "goods": "/stella/assets/Laru_goods.png",
    "qs": "/stella/assets/Laru_qs.png",
    "xl": "/stella/assets/Laru_xl.png",
    "gc": "/stella/assets/Laru_gc.png",
    "sk": "/stella/assets/Laru_portrait.png",
    "xxl": "/stella/assets/Laru.png",
    "qm": "/stella/assets/Laru_qm.png",
    "l": "/stella/assets/Laru_l.png",
    "s": "/stella/assets/Laru_s.png"
  },
  "description": "Cutting through her enemies with her spear of thunder, Laru is a flash darting across the battlefield. Here, her free spirit is out in full force.",
  "voiceActor": {
    "cn": "Song Yuanyuan",
    "cnLocalized": "宋媛媛",
    "jp": "Aimi Tanaka",
    "jpLocalized": "田中あいみ"
  },
  "birthday": "8.2",
  "grade": 4,
  "element": "Lux",
  "position": "Vanguard",
  "attackType": "Melee",
  "style": "Adventurous",
  "faction": "Grace Imperium",
  "tags": [
    "Vanguard",
    "Adventurous",
    "Grace Imperium"
  ],
  "dateEvents": [
    {
      "name": "Fry-Flavored Cake",
      "icon": "DatingSPCG_150301",
      "clue": "Visit the Dessert Shop to unlock",
      "secondChoice": "Haven't had enough. Let's order some more."
    },
    {
      "name": "Port Fishing Guide",
      "icon": "DatingSPCG_150303",
      "clue": "Visit the Port to unlock",
      "secondChoice": "How about doing some night fishing?"
    }
  ],
  "giftPreferences": {
    "loves": [
      "Whisper Wind Spinner",
      "Chilling Wind Spinner",
      "Blazing Wind Spinner",
      "Gilded Ceramic Bowl",
      "Blossom Porcelain Cup",
      "Mystic Potion Kettle"
    ],
    "hates": []
  },
  "normalAttack": {
    "name": "Stormpiercer Dance",
    "icon": "Icon/Skill/15001_Normal",
    "description": "Wields the lance to launch consecutive attacks.\u000bStrike 1: <color=#fb8037>&Param1& of ATK x2</color> as Lux DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Lux DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK</color> as Lux DMG.\u000bStrike 4: <color=#fb8037>&Param4& of ATK x2</color> as Lux DMG.\u000bStrike 5: <color=#fb8037>&Param5& of ATK x2</color> and <color=#fb8037>&Param6& of ATK x6</color> as Lux DMG.",
    "shortDescription": "Swings the lance to attack the target repeatedly.",
    "params": [
      "9.8%/10.8%/11.8%/14.7%/15.7%/16.7%/18.6%/19.6%/20.6%/22.5%/23.5%/24.5%/25.5%",
      "22.6%/24.8%/27.1%/33.9%/36.1%/38.4%/42.9%/45.2%/47.4%/51.9%/54.2%/56.4%/58.7%",
      "10.7%/11.8%/12.8%/16%/17.1%/18.2%/20.3%/21.4%/22.5%/24.6%/25.7%/26.7%/27.8%",
      "14.9%/16.3%/17.8%/22.3%/23.8%/25.3%/28.2%/29.7%/31.2%/34.2%/35.7%/37.2%/38.7%",
      "9.3%/10.2%/11.1%/13.9%/14.9%/15.8%/17.6%/18.6%/19.5%/21.4%/22.3%/23.2%/24.2%",
      "3.9%/4.3%/4.7%/5.8%/6.2%/6.6%/7.4%/7.8%/8.1%/8.9%/9.3%/9.7%/10.1%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Thunderflare Strike",
    "icon": "Icon/Skill/15001_Skill_Main",
    "description": "Sweeps the target, dealing <color=#fb8037>&Param1& of ATK</color> as AoE Lux DMG, then fires a ray of laser, dealing <color=#fb8037>&Param2& of ATK</color> as AoE Lux DMG.\u000bThunderflare Strike (Main Skill) can trigger ##Lux Mark: Radiance#2016#, dealing &Param3& of ATK as Lux DMG.",
    "shortDescription": "Sweeps the target and then fires a ray of laser, dealing DMG multiple times.\u000bThe Main Skill can trigger ##Lux Mark: Radiance#2016#.",
    "params": [
      "125%/137%/150%/187%/200%/212%/237%/250%/262%/287%/299%/312%/324%",
      "250%/274%/299%/374%/399%/424%/474%/499%/524%/574%/599%/624%/649%",
      "31%/37%/43%/49%/56%/62%/68%/74%/80%"
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
    "cooldown": "12s"
  },
  "supportSkill": {
    "name": "Divine Thunderquake",
    "icon": "Icon/Skill/15001_Skill_Support",
    "description": "Infuses Lux energy into the ground, dealing <color=#fb8037>&Param4& of ATK</color>/<color=#fb8037>&Param1& of ATK x12</color> as AoE Lux DMG. Then, generates a Thunder Domain in 4 random locations, each dealing <color=#fb8037>&Param2& of ATK</color> as AoE Lux DMG.\u000bDivine Thunderquake (Support Skill) can trigger ##Lux Mark: Radiance#2016#, dealing &Param3& of ATK as Lux DMG.",
    "shortDescription": "Infuses Lux energy into the ground and generates Thunder Domains to deal DMG to random targets.\u000bThe Support Skill can trigger ##Lux Mark: Radiance#2016#.",
    "params": [
      "3.3%/3.6%/3.9%/4.9%/5.3%/5.6%/6.2%/6.6%/6.9%/7.6%/7.9%/8.2%/8.6%",
      "57%/63%/68%/85%/91%/97%/108%/114%/119%/131%/136%/142%/148%",
      "31%/37%/43%/49%/56%/62%/68%/74%/80%",
      "52.5%/57.7%/63%/78.7%/84%/89.2%/99.7%/105%/110.2%/120.7%/126%/131.2%/136.5%"
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
    "cooldown": "12s"
  },
  "ultimate": {
    "name": "Thunderfall Thrust",
    "icon": "Icon/Skill/15001_Ultra",
    "description": "Throws the lance, dealing <color=#fb8037>&Param1& of ATK</color> as AoE Lux DMG.\u000bThunderfall Thrust (Ultimate) can trigger ##Lux Mark: Radiance#2016#, dealing &Param2& of ATK as Lux Mark DMG.",
    "shortDescription": "Throws a weapon, dealing massive DMG.\u000bThe Ultimate can trigger ##Lux Mark: Radiance#2016#.",
    "params": [
      "610%/671%/732%/916%/977%/1038%/1160%/1221%/1282%/1404%/1465%/1526%/1587%",
      "31%/37%/43%/49%/56%/62%/68%/74%/80%"
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
    "cooldown": "20s",
    "energy": 190
  },
  "talents": [
    {
      "name": "Lancefall: Benediction",
      "talents": [
        {
          "name": "Lancefall: Benediction",
          "description": "After Laru deals DMG to a target, her ATK is increased by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "1.5%",
            "10",
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
      "name": "Lancefall: Retribution",
      "talents": [
        {
          "name": "Lancefall: Retribution",
          "description": "When Laru triggers ##Lux Mark: Radiance#2016#, increases her ATK by <color=#0abec5>&Param1&</color> for &Param2&s.",
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
      "name": "Seagull's Fries",
      "talents": [
        {
          "name": "Seagull's Fries",
          "description": "After Laru casts her Ultimate, her Skill DMG is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "24%",
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
      "name": "Secret of Survival",
      "talents": [
        {
          "name": "Secret of Survival",
          "description": "When any Trekker inflicts ##Lux Mark#1015#, increases Laru's Lux DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "12%",
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
      "name": "Special Conviction",
      "talents": [
        {
          "name": "Special Conviction",
          "description": "Increases Laru's SKill DMG dealt to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
          "params": [
            "15%"
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
      "hp": 1204,
      "atk": 99
    },
    {
      "hp": 1570,
      "atk": 129
    },
    {
      "hp": 1932,
      "atk": 159
    },
    {
      "hp": 2294,
      "atk": 188
    },
    {
      "hp": 2656,
      "atk": 218
    },
    {
      "hp": 3019,
      "atk": 248
    },
    {
      "hp": 3381,
      "atk": 278
    },
    {
      "hp": 3743,
      "atk": 308
    },
    {
      "hp": 4105,
      "atk": 337
    },
    {
      "hp": 4468,
      "atk": 367
    },
    {
      "hp": 5361,
      "atk": 440
    },
    {
      "hp": 5723,
      "atk": 470
    },
    {
      "hp": 6086,
      "atk": 500
    },
    {
      "hp": 6448,
      "atk": 530
    },
    {
      "hp": 6810,
      "atk": 559
    },
    {
      "hp": 7172,
      "atk": 589
    },
    {
      "hp": 7535,
      "atk": 619
    },
    {
      "hp": 7897,
      "atk": 649
    },
    {
      "hp": 8259,
      "atk": 679
    },
    {
      "hp": 8621,
      "atk": 708
    },
    {
      "hp": 8984,
      "atk": 738
    },
    {
      "hp": 10782,
      "atk": 886
    },
    {
      "hp": 11145,
      "atk": 916
    },
    {
      "hp": 11507,
      "atk": 945
    },
    {
      "hp": 11869,
      "atk": 975
    },
    {
      "hp": 12231,
      "atk": 1005
    },
    {
      "hp": 12593,
      "atk": 1035
    },
    {
      "hp": 12956,
      "atk": 1064
    },
    {
      "hp": 13318,
      "atk": 1094
    },
    {
      "hp": 13680,
      "atk": 1124
    },
    {
      "hp": 14042,
      "atk": 1154
    },
    {
      "hp": 14405,
      "atk": 1183
    },
    {
      "hp": 17290,
      "atk": 1421
    },
    {
      "hp": 17652,
      "atk": 1450
    },
    {
      "hp": 18015,
      "atk": 1480
    },
    {
      "hp": 18377,
      "atk": 1510
    },
    {
      "hp": 18739,
      "atk": 1540
    },
    {
      "hp": 19101,
      "atk": 1569
    },
    {
      "hp": 19464,
      "atk": 1599
    },
    {
      "hp": 19826,
      "atk": 1629
    },
    {
      "hp": 20188,
      "atk": 1659
    },
    {
      "hp": 20550,
      "atk": 1688
    },
    {
      "hp": 20912,
      "atk": 1718
    },
    {
      "hp": 25091,
      "atk": 2061
    },
    {
      "hp": 25453,
      "atk": 2091
    },
    {
      "hp": 25815,
      "atk": 2121
    },
    {
      "hp": 26178,
      "atk": 2151
    },
    {
      "hp": 26540,
      "atk": 2180
    },
    {
      "hp": 26902,
      "atk": 2210
    },
    {
      "hp": 27264,
      "atk": 2240
    },
    {
      "hp": 27627,
      "atk": 2270
    },
    {
      "hp": 27989,
      "atk": 2299
    },
    {
      "hp": 28351,
      "atk": 2329
    },
    {
      "hp": 28713,
      "atk": 2359
    },
    {
      "hp": 34461,
      "atk": 2831
    },
    {
      "hp": 34823,
      "atk": 2861
    },
    {
      "hp": 35185,
      "atk": 2891
    },
    {
      "hp": 35547,
      "atk": 2920
    },
    {
      "hp": 35909,
      "atk": 2950
    },
    {
      "hp": 36272,
      "atk": 2980
    },
    {
      "hp": 36634,
      "atk": 3010
    },
    {
      "hp": 36996,
      "atk": 3039
    },
    {
      "hp": 37358,
      "atk": 3069
    },
    {
      "hp": 37721,
      "atk": 3099
    },
    {
      "hp": 38083,
      "atk": 3129
    },
    {
      "hp": 45702,
      "atk": 3755
    },
    {
      "hp": 46064,
      "atk": 3784
    },
    {
      "hp": 46427,
      "atk": 3814
    },
    {
      "hp": 46789,
      "atk": 3844
    },
    {
      "hp": 47151,
      "atk": 3874
    },
    {
      "hp": 47513,
      "atk": 3904
    },
    {
      "hp": 47876,
      "atk": 3933
    },
    {
      "hp": 48238,
      "atk": 3963
    },
    {
      "hp": 48600,
      "atk": 3993
    },
    {
      "hp": 48962,
      "atk": 4023
    },
    {
      "hp": 49324,
      "atk": 4052
    },
    {
      "hp": 59188,
      "atk": 4863
    },
    {
      "hp": 59551,
      "atk": 4893
    },
    {
      "hp": 59913,
      "atk": 4922
    },
    {
      "hp": 60275,
      "atk": 4952
    },
    {
      "hp": 60637,
      "atk": 4982
    },
    {
      "hp": 60999,
      "atk": 5012
    },
    {
      "hp": 61362,
      "atk": 5041
    },
    {
      "hp": 61724,
      "atk": 5071
    },
    {
      "hp": 62086,
      "atk": 5101
    },
    {
      "hp": 62448,
      "atk": 5131
    },
    {
      "hp": 62811,
      "atk": 5160
    },
    {
      "hp": 75368,
      "atk": 6192
    },
    {
      "hp": 75730,
      "atk": 6222
    },
    {
      "hp": 76092,
      "atk": 6252
    },
    {
      "hp": 76455,
      "atk": 6281
    },
    {
      "hp": 76817,
      "atk": 6311
    },
    {
      "hp": 77179,
      "atk": 6341
    },
    {
      "hp": 77541,
      "atk": 6371
    },
    {
      "hp": 77904,
      "atk": 6400
    },
    {
      "hp": 78266,
      "atk": 6430
    },
    {
      "hp": 78628,
      "atk": 6460
    },
    {
      "hp": 78990,
      "atk": 6490
    },
    {
      "hp": 78990,
      "atk": 6490
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
          "id": 20053,
          "name": "Radiant Feather Crown",
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
          "id": 20053,
          "name": "Radiant Feather Crown",
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
          "id": 20053,
          "name": "Radiant Feather Crown",
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
          "id": 20053,
          "name": "Radiant Feather Crown",
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