// Wraith Character Data - Stella Sora
// Generated from live game tables (Sep 8 2026 patch, v1.15.0)

export const Wraith = {
  "id": 143,
  "name": "Wraith",
  "icon": "/stella/assets/Wraith.png",
  "portrait": "/stella/assets/Wraith_portrait.png",
  "background": "/stella/assets/Wraith_background.png",
  "description": "Hailing from the frozen land of Norstheim, she is an elite warrior of the Sentinel of Dawn. A master of all weapons, she pays extra attention to cases involving Nocturn Eterna.",
  "voiceActor": {
    "cn": "Wang Meixin",
    "jp": "Minami Takahashi"
  },
  "birthday": "12.24",
  "grade": 5,
  "element": "Ventus",
  "position": "Vanguard",
  "attackType": "Ranged",
  "style": "Adventurous",
  "faction": "Grace Imperium",
  "tags": [
    "Vanguard",
    "Adventurous",
    "Grace Imperium"
  ],
  "dateEvents": [
    {
      "name": "A Rare Find",
      "icon": "DatingSPCG_143301",
      "clue": "Visit the Market to unlock",
      "secondChoice": "After winding through a maze of alleys, you finally reach the shop.\n\nIt's a trove of oddities. Just as you're about to dive into the clutter, a rare, sharp gasp comes from behind you.\n\n\"No way... It's real!\"\n\nWraith is holding up a seemingly ordinary pair of nippers, but the blades catch the light with a blinding, razor-sharp glint."
    },
    {
      "name": "\"Hot\" Springs?",
      "icon": "DatingSPCG_143302",
      "clue": "Visit the Cave to unlock",
      "secondChoice": "You thought you hit a dead end at a stone wall, but Wraith flips a hidden switch, and the rock grinds open.\n\nBefore you can react, a natural bathhouse is revealed.\n\n\"I put a lot of work into fixing this place up.\"\n\n\"But seeing that look on your face? Totally worth it.\"\n\n\"Hop in. Don't worry, the water's pristine.\"\n\nShe disappears behind a screen to wash up. Not wanting to be rude, you decide to give this outdoor bath a try. However..."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Blazing Wind Spinner",
      "Blazing Wings",
      "Chilling Wind Spinner",
      "Fiery Honeypot",
      "Fragrant Ice Delight",
      "Love Candle",
      "Summer Chill Crushed Ice",
      "Sweet IceFurry",
      "Whisper Wind Spinner"
    ],
    "hates": [
      "Card Photo Capturer",
      "Reflective Photo Capturer",
      "Ultra-Precision Photo Capturer"
    ]
  },
  "normalAttack": {
    "name": "Swish and Fire",
    "icon": "Icon/Skill/14301_Normal",
    "description": "Wields the bayonet to attack targets of different distances in different ways.\u000bSlashes nearby targets with combo strikes:\u000bStrike 1: <color=#ec6d21>&Param1&</color> of ATK as Ventus Auto ATK DMG.\u000bStrike 2: <color=#ec6d21>&Param2&</color> of ATK as Ventus Auto ATK DMG.\u000bStrike 3: <color=#ec6d21>&Param3& x3</color> of ATK as Ventus Auto ATK DMG.\u000bStrike 4: <color=#ec6d21>&Param4& x4</color> of ATK as Ventus Auto ATK DMG.\u000bStrike 5: <color=#ec6d21>&Param5& x3</color> of ATK as Ventus Auto ATK DMG.\u000bStrike 6: <color=#ec6d21>&Param6&</color> of ATK as Ventus Auto ATK DMG.\u000bShoots distant targets:\u000bStrike 1: <color=#ec6d21>&Param7& x2</color> of ATK as Ventus Auto ATK DMG.\u000bStrike 2: <color=#ec6d21>&Param7& x3</color> of ATK as Ventus Auto ATK DMG.\u000bStrike 3: Fires lasers, dealing <color=#ec6d21>&Param8&</color> of ATK as Ventus Auto ATK DMG.",
    "shortDescription": "Wields the bayonet to attack targets of different distances in different ways.",
    "params": [
      "26%/30%/33%/45%/49%/52%/60%/63%/66%/72%/77%/83%/88%",
      "30%/35%/40%/53%/57%/62%/70%/74%/77%/85%/91%/97%/103%",
      "22%/26%/29%/39%/42%/45%/52%/54%/57%/63%/67%/72%/76%",
      "21%/25%/28%/38%/41%/44%/50%/52%/55%/60%/64%/69%/73%",
      "22%/26%/29%/39%/42%/45%/52%/54%/57%/63%/67%/72%/76%",
      "99%/113%/128%/173%/186%/200%/228%/240%/252%/275%/295%/315%/334%",
      "54%/62%/70%/94%/102%/109%/124%/131%/137%/150%/161%/172%/183%",
      "22%/25%/28%/38%/41%/44%/51%/53%/56%/61%/66%/70%/75%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Whirling Onslaught",
    "icon": "Icon/Skill/14301_Skill_Main",
    "description": "Spins rapidly to slash, deal <color=#ec6d21>&Param1& x4</color> of ATK as AoE Ventus Skill DMG. Also fires bullets in all directions, dealing <color=#ec6d21>&Param2& x4</color> of ATK as Ventus Skill DMG.\u000bWhirling Onslaught (Main Skill) can be used 3 times initially. Hold to cast continuously.\u000bWhirling Onslaught (Main Skill) can trigger ##Ventus Mark#1017# and generate a Cyclone, dealing &Param3& x3 of ATK as AoE Ventus Mark DMG.",
    "shortDescription": "Spins rapidly to slash, dealing AoE DMG and firing bullets in all directions. The Main Skill can trigger ##Ventus Mark#1017# and generate a Cyclone.",
    "params": [
      "49%/57%/64%/86%/93%/100%/114%/120%/126%/137%/147%/157%/167%",
      "69%/80%/90%/121%/131%/141%/160%/168%/177%/193%/207%/221%/235%",
      "8%/11%/13%/16%/18%/21%/23%/26%/28%"
    ],
    "hints": {
      "1017": {
        "id": 1017,
        "name": "Ventus Mark",
        "description": "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "3s"
  },
  "supportSkill": {
    "name": "Rolling Bungee",
    "icon": "Icon/Skill/14301_Skill_Support",
    "description": "Rolls, slashes, and shoots.\u000bPhase 1: Slashes, deals <color=#ec6d21>&Param1& x3</color> of ATK as Ventus Skill DMG.\u000bPhase 2: Fires laser beams, dealing <color=#ec6d21>&Param2&</color> of ATK as AoE Ventus Skill DMG.\u000bRolling Bungee (Support Skill) can trigger ##Venus Mark#1017# and generate a Cyclone, dealing &Param3& x3 of ATK as AoE Ventus Mark DMG.",
    "shortDescription": "Rolls, slashes, and shoots, dealing multiple instances of DMG. The Support Skill can trigger ##Ventus Mark#1017# and generate a Cyclone.",
    "params": [
      "130%/149%/169%/227%/246%/264%/300%/316%/331%/363%/388%/414%/440%",
      "152%/174%/197%/265%/287%/308%/350%/368%/387%/423%/453%/484%/514%",
      "8%/11%/13%/16%/18%/21%/23%/26%/28%"
    ],
    "hints": {
      "1017": {
        "id": 1017,
        "name": "Ventus Mark",
        "description": "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "12s"
  },
  "ultimate": {
    "name": "Thousand Shade Dance",
    "icon": "Icon/Skill/14301_Ultra",
    "description": "Deploys a field, zips across it 27 times, each time dealing <color=#ec6d21>&Param1&</color> of ATK as Ventus Ultimate DMG in a small area, then detonates the field, dealing <color=#ec6d21>&Param2&</color> of ATK as Ventus Ultimate DMG in a large area.\u000bThousand Shade Dance (Ultimate) can trigger ##Venus Mark#1017# and generate a Cyclone, dealing &Param3& x3 of ATK as AoE Ventus Mark DMG.",
    "shortDescription": "Deploys a field, zips across it to attack the target, then detonates the field, dealing DMG in a large area. The Ultimate can trigger ##Ventus Mark#1017# and generate a Cyclone.",
    "params": [
      "31%/35%/40%/54%/58%/62%/71%/75%/78%/86%/92%/98%/104%",
      "633%/728%/823%/1107%/1196%/1284%/1462%/1538%/1613%/1765%/1892%/2018%/2145%",
      "8%/11%/13%/16%/18%/21%/23%/26%/28%"
    ],
    "hints": {
      "1017": {
        "id": 1017,
        "name": "Ventus Mark",
        "description": "The generic name for all Ventus Marks.\u000bWhen triggered by specific Ventus Trekkers' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "30s",
    "energy": 275
  },
  "talents": [
    {
      "name": "Daybreak Trigger",
      "talents": [
        {
          "name": "Daybreak Trigger",
          "description": "When Wraith triggers a ##Ventus Mark#1017#, increases her Skill DMG by <color=#0abec5>&Param1&</color> and Auto Attack DMG by <color=#0abec5>&Param2&</color> for &Param3&s.",
          "params": [
            "18%",
            "18%",
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
          "name": "ATK Boost",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Ventus DMG",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "ATK Boost",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Ventus DMG",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Righteous Judgment",
      "talents": [
        {
          "name": "Righteous Judgment",
          "description": "When Wraith deals Skill DMG to a target, her ATK is increased by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "2%",
            "5",
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
          "name": "ATK Boost",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Ventus DMG",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "ATK Boost",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Ventus DMG",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Silver Phantom",
      "talents": [
        {
          "name": "Silver Phantom",
          "description": "When any Trekker inflicts ##Ventus Mark#1017# on a target, increases Wraith's Skill DMG by <color=#0abec5>&Param1&</color> and Auto Attack DMG by <color=#0abec5>&Param2&</color> for &Param3&s.",
          "params": [
            "18%",
            "18%",
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
          "name": "ATK Boost",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Ventus DMG",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "ATK Boost",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Ventus DMG",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Curtain Call",
      "talents": [
        {
          "name": "Curtain Call",
          "description": "When Wraith deals Auto ATK DMG to a target, her ATK is increased by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "2%",
            "5",
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
          "name": "ATK Boost",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Ventus DMG",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "ATK Boost",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Ventus DMG",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Glorious Return to Norstheim",
      "talents": [
        {
          "name": "Glorious Return to Norstheim",
          "description": "Increases Wraith's Ventus DMG dealt to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
          "params": [
            "0.2%"
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
          "name": "ATK Boost",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Ventus DMG",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
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
          "name": "ATK Boost",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "Ventus DMG",
          "description": "Increases Ventus DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    }
  ],
  "stats": [
    {
      "hp": 782,
      "atk": 114
    },
    {
      "hp": 1017,
      "atk": 149
    },
    {
      "hp": 1252,
      "atk": 183
    },
    {
      "hp": 1486,
      "atk": 217
    },
    {
      "hp": 1721,
      "atk": 252
    },
    {
      "hp": 1956,
      "atk": 286
    },
    {
      "hp": 2190,
      "atk": 320
    },
    {
      "hp": 2425,
      "atk": 355
    },
    {
      "hp": 2660,
      "atk": 389
    },
    {
      "hp": 2895,
      "atk": 423
    },
    {
      "hp": 3474,
      "atk": 508
    },
    {
      "hp": 3708,
      "atk": 542
    },
    {
      "hp": 3943,
      "atk": 577
    },
    {
      "hp": 4178,
      "atk": 611
    },
    {
      "hp": 4412,
      "atk": 645
    },
    {
      "hp": 4647,
      "atk": 680
    },
    {
      "hp": 4882,
      "atk": 714
    },
    {
      "hp": 5116,
      "atk": 748
    },
    {
      "hp": 5351,
      "atk": 782
    },
    {
      "hp": 5586,
      "atk": 817
    },
    {
      "hp": 5820,
      "atk": 851
    },
    {
      "hp": 6986,
      "atk": 1022
    },
    {
      "hp": 7221,
      "atk": 1056
    },
    {
      "hp": 7456,
      "atk": 1090
    },
    {
      "hp": 7690,
      "atk": 1125
    },
    {
      "hp": 7925,
      "atk": 1159
    },
    {
      "hp": 8160,
      "atk": 1193
    },
    {
      "hp": 8394,
      "atk": 1228
    },
    {
      "hp": 8629,
      "atk": 1262
    },
    {
      "hp": 8864,
      "atk": 1296
    },
    {
      "hp": 9098,
      "atk": 1330
    },
    {
      "hp": 9333,
      "atk": 1365
    },
    {
      "hp": 11203,
      "atk": 1638
    },
    {
      "hp": 11438,
      "atk": 1673
    },
    {
      "hp": 11672,
      "atk": 1707
    },
    {
      "hp": 11907,
      "atk": 1741
    },
    {
      "hp": 12142,
      "atk": 1775
    },
    {
      "hp": 12376,
      "atk": 1810
    },
    {
      "hp": 12611,
      "atk": 1844
    },
    {
      "hp": 12846,
      "atk": 1878
    },
    {
      "hp": 13080,
      "atk": 1913
    },
    {
      "hp": 13315,
      "atk": 1947
    },
    {
      "hp": 13550,
      "atk": 1981
    },
    {
      "hp": 16257,
      "atk": 2377
    },
    {
      "hp": 16491,
      "atk": 2412
    },
    {
      "hp": 16726,
      "atk": 2446
    },
    {
      "hp": 16961,
      "atk": 2480
    },
    {
      "hp": 17195,
      "atk": 2515
    },
    {
      "hp": 17430,
      "atk": 2549
    },
    {
      "hp": 17665,
      "atk": 2583
    },
    {
      "hp": 17899,
      "atk": 2617
    },
    {
      "hp": 18134,
      "atk": 2652
    },
    {
      "hp": 18369,
      "atk": 2686
    },
    {
      "hp": 18604,
      "atk": 2720
    },
    {
      "hp": 22327,
      "atk": 3265
    },
    {
      "hp": 22562,
      "atk": 3299
    },
    {
      "hp": 22797,
      "atk": 3334
    },
    {
      "hp": 23032,
      "atk": 3368
    },
    {
      "hp": 23266,
      "atk": 3402
    },
    {
      "hp": 23501,
      "atk": 3437
    },
    {
      "hp": 23736,
      "atk": 3471
    },
    {
      "hp": 23970,
      "atk": 3505
    },
    {
      "hp": 24205,
      "atk": 3540
    },
    {
      "hp": 24440,
      "atk": 3574
    },
    {
      "hp": 24674,
      "atk": 3608
    },
    {
      "hp": 29611,
      "atk": 4330
    },
    {
      "hp": 29846,
      "atk": 4364
    },
    {
      "hp": 30080,
      "atk": 4399
    },
    {
      "hp": 30315,
      "atk": 4433
    },
    {
      "hp": 30550,
      "atk": 4467
    },
    {
      "hp": 30784,
      "atk": 4502
    },
    {
      "hp": 31019,
      "atk": 4536
    },
    {
      "hp": 31254,
      "atk": 4570
    },
    {
      "hp": 31488,
      "atk": 4605
    },
    {
      "hp": 31723,
      "atk": 4639
    },
    {
      "hp": 31958,
      "atk": 4673
    },
    {
      "hp": 38349,
      "atk": 5608
    },
    {
      "hp": 38584,
      "atk": 5642
    },
    {
      "hp": 38819,
      "atk": 5677
    },
    {
      "hp": 39053,
      "atk": 5711
    },
    {
      "hp": 39288,
      "atk": 5745
    },
    {
      "hp": 39523,
      "atk": 5779
    },
    {
      "hp": 39758,
      "atk": 5814
    },
    {
      "hp": 39992,
      "atk": 5848
    },
    {
      "hp": 40227,
      "atk": 5882
    },
    {
      "hp": 40462,
      "atk": 5917
    },
    {
      "hp": 40696,
      "atk": 5951
    },
    {
      "hp": 48832,
      "atk": 7141
    },
    {
      "hp": 49067,
      "atk": 7175
    },
    {
      "hp": 49302,
      "atk": 7209
    },
    {
      "hp": 49537,
      "atk": 7244
    },
    {
      "hp": 49771,
      "atk": 7278
    },
    {
      "hp": 50006,
      "atk": 7312
    },
    {
      "hp": 50241,
      "atk": 7347
    },
    {
      "hp": 50475,
      "atk": 7381
    },
    {
      "hp": 50710,
      "atk": 7415
    },
    {
      "hp": 50945,
      "atk": 7450
    },
    {
      "hp": 51179,
      "atk": 7484
    },
    {
      "hp": 51179,
      "atk": 7484
    }
  ],
  "upgrades": [],
  "skillUpgrades": []
};
