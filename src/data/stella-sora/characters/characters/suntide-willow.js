// Suntide Willow Character Data - Stella Sora
// Generated from live game tables (Sep 8 2026 patch, v1.15.0)

export const SuntideWillow = {
  "id": 160,
  "name": "Suntide Willow",
  "icon": "/stella/assets/Suntide_Willow.png",
  "portrait": "/stella/assets/Suntide_Willow_portrait.png",
  "background": "/stella/assets/Suntide_Willow_background.png",
  "description": "Rocking a swimsuit chosen by everyone, Willow is finally learning how to kick back and enjoy a work-free vacation.",
  "voiceActor": {
    "cn": "mace",
    "cnLocalized": "mace",
    "jp": "Hitomi Nabatame",
    "jpLocalized": "生天目仁美"
  },
  "birthday": "12.14",
  "grade": 5,
  "element": "Aqua",
  "position": "Support",
  "attackType": "Ranged",
  "style": "Steady",
  "faction": "Trekker Association",
  "tags": [
    "Support",
    "Steady",
    "Trekker Association"
  ],
  "dateEvents": [
    {
      "name": "Deep Inside the Cave",
      "icon": "DatingSPCG_160301",
      "clue": "Visit the Cave to unlock",
      "secondChoice": "You and Willow made a circuit of the cave and discovered that it was a dead end, nothing special.\n\"Looks like there isn't anything dangerous...\"\nBefore you could finish, Willow shook her head.\n\"No, there is still danger here.\"\nYou looked in the direction Willow was pointing, but couldn't make out anything dangerous in the darkness.\nWillow walked over, crouched down, and began prying at the stones on the ground. A moment later, you saw her pry up one of the \"stones\"—upon closer inspection, it turned out to be an enormous black-and-gold abalone."
    },
    {
      "name": "By Your Side",
      "icon": "DatingSPCG_160302",
      "clue": "Visit Hot Spring Resort to unlock",
      "secondChoice": "Inside the inn room, you found Willow still wearing the clothes she had worn earlier. She was sitting at the desk, completely absorbed in the documents spread out before her. Only then did she notice you. \"Ah... What brings you here?\"\n\"I waited for ages and started to think something had happened to you,\" you said and sighed. \"Weren't you supposed to be changing clothes so we could go watch the fireworks?\"\n\"Ah... Sorry, sorry. I ran into a Trekker I know on the way back, and he asked me to deliver some documents to the Association. Before I knew it, I slipped right back into work mode...\""
    }
  ],
  "giftPreferences": {
    "loves": [
      "Blazing Wind Spinner",
      "Blossom Porcelain Cup",
      "Chilling Wind Spinner",
      "Deluxe Blower",
      "Exquisite Blower",
      "Gilded Ceramic Bowl",
      "Mystic Potion Kettle",
      "Portable Blower",
      "Whisper Wind Spinner"
    ],
    "hates": []
  },
  "normalAttack": {
    "name": "Sonic Bubble",
    "icon": "Icon/Skill/16001_Normal",
    "description": "Tap the Main Skill button to switch between weapon modes.\u000b<color=#0abec5>Bubble Machine mode</color>\u000bStrike 1 to 3: Deals <color=#fb8037>&Param1&</color> of ATK as Aqua Auto Attack DMG multiple times.\u000bStrike 4: Deals <color=#fb8037>&Param2&</color> of ATK as Aqua Auto Attack DMG\u000bIn this mode, Auto Attacks inflict ##Bubble Mark#4041# when dealing DMG.\u000b<color=#0abec5>Megaphone mode</color>\u000bStrike 1 to 3: Deals <color=#fb8037>&Param6&</color> of ATK as Aqua Auto Attack DMG multiple times.\u000bStrike 4: Deals <color=#fb8037>&Param7&</color> of ATK as Aqua Auto Attack DMG.",
    "shortDescription": "Tap the Main Skill button to switch between weapon modes: Bubble Machine and Megaphone. Both modes continuously fire bubbles to deal DMG. In Bubble Machine mode, inflicts ##Bubble Mark#4041#.",
    "params": [
      "29%/34%/38%/51%/55%/60%/68%/71%/75%/82%/88%/94%/100%",
      "59%/68%/76%/103%/111%/120%/136%/143%/150%/165%/177%/189%/200%",
      "",
      "0.17%",
      "4",
      "22%/25%/29%/39%/42%/45%/52%/54%/57%/63%/67%/72%/76%",
      "60%/69%/78%/105%/113%/121%/138%/145%/152%/167%/179%/191%/203%"
    ],
    "hints": {
      "4041": {
        "id": 4041,
        "name": "Bubble Mark"
      }
    }
  },
  "skill": {
    "name": "Luminous Leaper",
    "icon": "Icon/Skill/16001_Skill_Main",
    "description": "When tapping the Main Skill button, different effects occur based on the current ##Decibels#4038#.\u000b<color=#0abec5>Current Decibels below 100:</color>\u000bSwitches back and forth between Bubble Machine and Megaphone modes.\u000b<color=#0abec5>Current Decibels at 100:</color>\u000bConsumes all Decibels at once and launches a Bubble Frog: every bounce creates an impact dealing <color=#fb8037>&Param1&</color> of ATK as AoE Aqua Skill DMG and inflicting ##Aqua Mark: Torrent#2008#, bouncing once every 3s. When Bubble Frog deals DMG, increases the squad's &Param2& by <color=#fb8037>&Param3&</color> for &Param4&s, stacking up to &Param5& times.",
    "shortDescription": "When tapping the Main Skill button, different effects occur based on the current ##Decibels#4038#.\u000b<color=#0abec5>Current Decibels below 100:</color>\u000bSwitches back and forth between Bubble Machine and Megaphone modes.\u000b<color=#0abec5>Current Decibels at 100:</color>\u000bConsumes all Decibels at once and launches a Bubble Frog: every bounce creates an impact dealing AoE Aqua Skill DMG and inflicting ##Aqua Mark: Torrent#2008#. When Bubble Frog deals DMG, increases the squad's &Param2&.",
    "params": [
      "122%/141%/159%/214%/231%/248%/283%/297%/312%/342%/367%/391%/416%",
      "ATK",
      "4.8%/5.5%/6.2%/8.4%/9%/9.7%/11%/11.6%/12.2%",
      "6",
      "5"
    ],
    "hints": {
      "4038": {
        "id": 4038,
        "name": "Decibels",
        "description": "When Willow is the Main Trekker, she can accumulate up to 100 Decibels through Auto Attacks.\u000bAuto Attack Strike 1 to 3: Increases 3 Decibels.\u000bAuto Attack Strike 4: Increases 4 Decibels."
      },
      "2008": {
        "id": 2008,
        "name": "Aqua Mark: Torrent",
        "description": "A special status applied by some Aqua characters to the target for 10 sec.\u000bWhen triggered by specific Aqua characters' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "1s"
  },
  "supportSkill": {
    "name": "Frolic in the Sea",
    "icon": "Icon/Skill/16001_Skill_Support",
    "description": "Willow dives into the water, dealing <color=#fb8037>&Param1&</color> of ATK as Aqua Skill DMG in a large area and generating a 7m-radius Bubble Bath that deals <color=#fb8037>&Param2&</color> of ATK as AoE Aqua Skill DMG every 2s.\u000bWillow then follows the Main Trekker, slowly firing bubbles, continuously dealing <color=#fb8037>&Param3& of ATK</color> as Aqua Skill DMG for 17s. All of the above DMG can inflict ##Aqua Mark: Torrent#2008#.\u000bWhile Willow is on the field, she provides different statuses to the squad based on the current ##Decibels#4039#:\u000bGentle Warning: Decibels ≤40, increases &Param4& by <color=#fb8037>&Param5&</color>\u000bSafety Alert: 40< Decibels ≤100, additionally increases &Param6& by <color=#fb8037>&Param7&</color>.",
    "shortDescription": "Willow dives into the water, dealing Aqua Skill DMG in a large area and generating a 7m-radius Bubble Bath that continuously deals AoE Aqua Skill DMG.\u000bWillow then follows the Main Trekker, slowly firing bubbles that continuously deal Aqua Skill DMG for 17s. All of the above DMG can inflict ##Aqua Mark: Torrent#2008#.\u000bWhile Willow is on the field, she provides different statuses to the squad based on the current ##Decibels#4039#:\u000bGentle Warning: Decibels ≤40, increases &Param4&\u000bSafety Alert: 40< Decibels ≤100, additionally increases &Param6&",
    "params": [
      "144%/166%/188%/253%/273%/293%/333%/351%/368%/403%/431%/460%/489%",
      "36%/41%/46%/62%/67%/72%/82%/87%/91%/99%/107%/114%/121%",
      "22%/26%/29%/39%/42%/45%/51%/54%/57%/62%/66%/71%/75%",
      "Wee",
      "5%/7%/8%/13%/14%/15%/18%/19%/21%",
      "ATK",
      "10%/13%/16%/25%/28%/31%/36%/39%/41%"
    ],
    "hints": {
      "2008": {
        "id": 2008,
        "name": "Aqua Mark: Torrent",
        "description": "A special status applied by some Aqua characters to the target for 10 sec.\u000bWhen triggered by specific Aqua characters' attacks, the status is removed, and a special effect is activated."
      },
      "4039": {
        "id": 4039,
        "name": "Decibels",
        "description": "When Willow is the Support Trekker, each bubble fired increases 2 Decibels, up to 100."
      }
    },
    "cooldown": "20s"
  },
  "ultimate": {
    "name": "Beach Warning",
    "icon": "Icon/Skill/16001_Ultra",
    "description": "Blows multiple bubbles and fiercely hits them consecutively, dealing <color=#fb8037>&Param1&x7</color> and <color=#fb8037>&Param2&</color> of ATK as AoE Aqua Ultimate DMG, inflicting ##Aqua Mark: Torrent#2008#, while increasing the squad's &Param3& by <color=#fb8037>&Param4&</color> for &Param5&s, stacking up to &Param6& times.",
    "shortDescription": "Blows multiple bubbles and fiercely hits them consecutively, dealing AoE Aqua Ultimate DMG and inflicting ##Aqua Mark: Torrent#2008#, while increasing the squad's &Param3&.",
    "params": [
      "172%/198%/223%/301%/325%/349%/397%/417%/438%/479%/514%/548%/582%",
      "301%/346%/391%/526%/568%/610%/694%/730%/766%/839%/899%/959%/1019%",
      "ATK",
      "2.5%/3.3%/4%/6.3%/7%/7.7%/9.1%/9.7%/10.3%",
      "20",
      "5"
    ],
    "hints": {
      "2008": {
        "id": 2008,
        "name": "Aqua Mark: Torrent",
        "description": "A special status applied by some Aqua characters to the target for 10 sec.\u000bWhen triggered by specific Aqua characters' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "30s",
    "energy": 285
  },
  "talents": [
    {
      "name": "Holiday Time",
      "talents": [
        {
          "name": "Holiday Time",
          "description": "When Willow inflicts ##Aqua Mark#1018# on a target, increases the squad's Aqua DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "30%",
            "6"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Heart Unsettled",
      "talents": [
        {
          "name": "Heart Unsettled",
          "description": "Reduces Bubble Bath's DMG dealing Interval by 50%. When the squad triggers an ##Aqua Mark#1018# on a target, increases the Aqua DMG Taken by this target by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "27%",
            "8"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Wisdom in Restraint",
      "talents": [
        {
          "name": "Wisdom in Restraint",
          "description": "When the squad deals DMG to a target afflicted with ##Aqua Mark#1018#, Crit DMG dealt by the squad is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "32%",
            "6"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Going with the Flow",
      "talents": [
        {
          "name": "Going with the Flow",
          "description": "For every &Param1&s when Willow is on the field, increases the Main Trekker's Skill DMG by <color=#0abec5>&Param2&</color> and Auto Attack DMG by <color=#0abec5>&Param3&</color>, up to a maximum of <color=#0abec5>18%</color>.",
          "params": [
            "4",
            "6%",
            "6%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    },
    {
      "name": "Reset and Restart",
      "talents": [
        {
          "name": "Reset and Restart",
          "description": "When Willow deals Skill DMG to a target, increases the Aqua DMG Taken by this target by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "24%",
            "5"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        },
        {
          "name": "ATK Enhancement",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "40"
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
            "460"
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
          "name": "Increases Ultimate DMG by",
          "description": "Increases Ultimate DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "4.3%"
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "hp": 801,
      "atk": 94
    },
    {
      "hp": 1041,
      "atk": 122
    },
    {
      "hp": 1281,
      "atk": 151
    },
    {
      "hp": 1522,
      "atk": 179
    },
    {
      "hp": 1762,
      "atk": 207
    },
    {
      "hp": 2002,
      "atk": 235
    },
    {
      "hp": 2242,
      "atk": 264
    },
    {
      "hp": 2482,
      "atk": 292
    },
    {
      "hp": 2723,
      "atk": 320
    },
    {
      "hp": 2963,
      "atk": 348
    },
    {
      "hp": 3556,
      "atk": 418
    },
    {
      "hp": 3796,
      "atk": 446
    },
    {
      "hp": 4036,
      "atk": 475
    },
    {
      "hp": 4276,
      "atk": 503
    },
    {
      "hp": 4517,
      "atk": 531
    },
    {
      "hp": 4757,
      "atk": 559
    },
    {
      "hp": 4997,
      "atk": 588
    },
    {
      "hp": 5237,
      "atk": 616
    },
    {
      "hp": 5477,
      "atk": 644
    },
    {
      "hp": 5718,
      "atk": 672
    },
    {
      "hp": 5958,
      "atk": 701
    },
    {
      "hp": 7151,
      "atk": 841
    },
    {
      "hp": 7391,
      "atk": 869
    },
    {
      "hp": 7632,
      "atk": 897
    },
    {
      "hp": 7872,
      "atk": 926
    },
    {
      "hp": 8112,
      "atk": 954
    },
    {
      "hp": 8352,
      "atk": 982
    },
    {
      "hp": 8593,
      "atk": 1010
    },
    {
      "hp": 8833,
      "atk": 1039
    },
    {
      "hp": 9073,
      "atk": 1067
    },
    {
      "hp": 9313,
      "atk": 1095
    },
    {
      "hp": 9554,
      "atk": 1123
    },
    {
      "hp": 11467,
      "atk": 1348
    },
    {
      "hp": 11708,
      "atk": 1377
    },
    {
      "hp": 11948,
      "atk": 1405
    },
    {
      "hp": 12188,
      "atk": 1433
    },
    {
      "hp": 12428,
      "atk": 1461
    },
    {
      "hp": 12669,
      "atk": 1490
    },
    {
      "hp": 12909,
      "atk": 1518
    },
    {
      "hp": 13149,
      "atk": 1546
    },
    {
      "hp": 13389,
      "atk": 1574
    },
    {
      "hp": 13630,
      "atk": 1603
    },
    {
      "hp": 13870,
      "atk": 1631
    },
    {
      "hp": 16641,
      "atk": 1957
    },
    {
      "hp": 16881,
      "atk": 1985
    },
    {
      "hp": 17121,
      "atk": 2013
    },
    {
      "hp": 17361,
      "atk": 2041
    },
    {
      "hp": 17602,
      "atk": 2070
    },
    {
      "hp": 17842,
      "atk": 2098
    },
    {
      "hp": 18082,
      "atk": 2126
    },
    {
      "hp": 18322,
      "atk": 2154
    },
    {
      "hp": 18563,
      "atk": 2183
    },
    {
      "hp": 18803,
      "atk": 2211
    },
    {
      "hp": 19043,
      "atk": 2239
    },
    {
      "hp": 22855,
      "atk": 2687
    },
    {
      "hp": 23095,
      "atk": 2716
    },
    {
      "hp": 23335,
      "atk": 2744
    },
    {
      "hp": 23576,
      "atk": 2772
    },
    {
      "hp": 23816,
      "atk": 2800
    },
    {
      "hp": 24056,
      "atk": 2829
    },
    {
      "hp": 24296,
      "atk": 2857
    },
    {
      "hp": 24537,
      "atk": 2885
    },
    {
      "hp": 24777,
      "atk": 2913
    },
    {
      "hp": 25017,
      "atk": 2942
    },
    {
      "hp": 25257,
      "atk": 2970
    },
    {
      "hp": 30310,
      "atk": 3564
    },
    {
      "hp": 30551,
      "atk": 3592
    },
    {
      "hp": 30791,
      "atk": 3620
    },
    {
      "hp": 31031,
      "atk": 3649
    },
    {
      "hp": 31271,
      "atk": 3677
    },
    {
      "hp": 31511,
      "atk": 3705
    },
    {
      "hp": 31752,
      "atk": 3733
    },
    {
      "hp": 31992,
      "atk": 3762
    },
    {
      "hp": 32232,
      "atk": 3790
    },
    {
      "hp": 32472,
      "atk": 3818
    },
    {
      "hp": 32713,
      "atk": 3846
    },
    {
      "hp": 39255,
      "atk": 4616
    },
    {
      "hp": 39495,
      "atk": 4644
    },
    {
      "hp": 39736,
      "atk": 4672
    },
    {
      "hp": 39976,
      "atk": 4700
    },
    {
      "hp": 40216,
      "atk": 4729
    },
    {
      "hp": 40456,
      "atk": 4757
    },
    {
      "hp": 40697,
      "atk": 4785
    },
    {
      "hp": 40937,
      "atk": 4813
    },
    {
      "hp": 41177,
      "atk": 4842
    },
    {
      "hp": 41417,
      "atk": 4870
    },
    {
      "hp": 41658,
      "atk": 4898
    },
    {
      "hp": 49986,
      "atk": 5877
    },
    {
      "hp": 50226,
      "atk": 5906
    },
    {
      "hp": 50466,
      "atk": 5934
    },
    {
      "hp": 50707,
      "atk": 5962
    },
    {
      "hp": 50947,
      "atk": 5990
    },
    {
      "hp": 51187,
      "atk": 6019
    },
    {
      "hp": 51427,
      "atk": 6047
    },
    {
      "hp": 51668,
      "atk": 6075
    },
    {
      "hp": 51908,
      "atk": 6103
    },
    {
      "hp": 52148,
      "atk": 6132
    },
    {
      "hp": 52388,
      "atk": 6160
    },
    {
      "hp": 52388,
      "atk": 6160
    }
  ],
  "upgrades": [],
  "skillUpgrades": []
};
