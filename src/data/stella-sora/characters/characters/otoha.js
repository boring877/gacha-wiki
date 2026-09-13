// Otoha Character Data - Stella Sora
// Generated from live game tables (Sep 8 2026 patch, v1.15.0)

export const Otoha = {
  "id": 145,
  "name": "Otoha",
  "icon": "/stella/assets/Otoha.png",
  "portrait": "/stella/assets/Otoha_portrait.png",
  "background": "/stella/assets/Otoha_background.png",
  "description": "A mysterious ninja who walks the night, wielding a long umbrella—its ribs as blades, its sleeves concealing deadly edges.",
  "voiceActor": {
    "cn": "Zhang Anqi",
    "cnLocalized": "张安琪",
    "jp": "Ai Kakuma",
    "jpLocalized": "加隈亜衣"
  },
  "birthday": "1.14",
  "grade": 5,
  "element": "Umbra",
  "position": "Versatile",
  "attackType": "Ranged",
  "style": "Inquisitive",
  "faction": "Freelance Trekker",
  "tags": [
    "Versatile",
    "Inquisitive",
    "Freelance Trekker"
  ],
  "dateEvents": [
    {
      "name": "Dietary Discipline",
      "icon": "DatingSPCG_145301",
      "clue": "Visit the Dessert Shop to unlock",
      "secondChoice": "For once, you caught a hint of nostalgia on Otoha's face.\n\n\"Back when it first started, this place was just a little roadside stall. Their strawberry cake was the go-to item. I used to buy a slice every time I came home.\"\n\n\"Until... She figured it out.\""
    },
    {
      "name": "Beyond the Horizon",
      "icon": "DatingSPCG_145302",
      "clue": "Visit the Port to unlock",
      "secondChoice": "\"What did it feel like the first time you saw the sea, Boss?\"\nAfter a long while, Otoha asked softly.\n\n\"Honestly... Nothing special. I just remember how vast it was. It made me wonder ... what might lie on the other side of the ocean.\"\n\n\"I used to think the same way,\" Otoha said, her voice drifting into a distant memory. \"Until I actually crossed the sea and saw a world I had never imagined.\""
    }
  ],
  "giftPreferences": {
    "loves": [
      "Blossom Porcelain Cup",
      "Deluxe Blower",
      "Emerging Talent",
      "Exquisite Blower",
      "Gilded Ceramic Bowl",
      "Mystic Potion Kettle",
      "Portable Blower",
      "Rising Star",
      "Shining Star"
    ],
    "hates": [
      "Blazing Wind Spinner",
      "Chilling Wind Spinner",
      "Whisper Wind Spinner"
    ]
  },
  "normalAttack": {
    "name": "Thorn Path",
    "icon": "Icon/Skill/14501_Normal",
    "description": "Rapidly fires multiple kunai.\u000bStrike 1: <color=#ec6d21>&Param1& x3</color> of ATK as Umbra Auto ATK DMG.\u000bStrike 2: <color=#ec6d21>&Param2& x3</color> of ATK as Umbra Auto ATK DMG.\u000bStrike 3: <color=#ec6d21>&Param3& x9</color> of ATK as Umbra Auto ATK DMG.",
    "shortDescription": "Rapidly fires multiple kunai to deal DMG.",
    "params": [
      "30%/35%/39%/53%/57%/62%/70%/74%/77%/85%/91%/97%/103%",
      "30%/35%/39%/53%/57%/62%/70%/74%/77%/85%/91%/97%/103%",
      "10%/11%/13%/17%/19%/20%/23%/24%/25%/28%/30%/32%/34%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Nightbloom",
    "icon": "Icon/Skill/14501_Skill_Main",
    "description": "Moves rapidly and shoots, dealing <color=#ec6d21>&Param1&</color> of ATK as Umbra Skill DMG in a large area.\u000bNightbloom (Main Skill) can trigger ##Umbra Mark#1019#, dealing &Param2& of ATK as Umbra Mark DMG and inflicting ##Dark Shackles#2020#.",
    "shortDescription": "Moves rapidly and shoots, dealing AoE DMG in a large area and triggering ##Umbra Mark#1019#.",
    "params": [
      "117%/134%/152%/204%/221%/237%/270%/284%/298%/326%/349%/372%/395%",
      "17%/22%/28%/33%/38%/44%/49%/54%/59%"
    ],
    "hints": {
      "1019": {
        "id": 1019,
        "name": "Umbra Mark",
        "description": "The generic name for all Umbra Marks.\u000bWhen triggered by specific Umbra Trekkers' attacks, the status is removed, and a special effect is activated."
      },
      "2020": {
        "id": 2020,
        "name": "Dark Shackles"
      }
    },
    "cooldown": "4s"
  },
  "supportSkill": {
    "name": "Shattered Edge",
    "icon": "Icon/Skill/14501_Skill_Support",
    "description": "Summons a forward-moving Weeping Sky, dealing <color=#ec6d21>&Param1&</color> of ATK as AoE Umbra Skill DMG every 0.5s for 4s.\u000bWeeping Sky inflicts Soul Rend, dealing <color=#ec6d21>&Param2&</color> of ATK as single-target Umbra Skill DMG every 0.5s for &Param3&s (does not stack).\u000bInflicts ##Umbra Mark: Gloom#2018# upon dealing DMG with Weeping Sky or Soul Rend.",
    "shortDescription": "Summons a forward-moving Weeping Sky that deals multi-hit AoE DMG. Weeping Sky can inflict Soul Rend to deal multi-hit single-target DMG. Both Weeping Sky and Soul Rend can inflict ##Umbra Mark: Gloom#2018#.",
    "params": [
      "227%/261%/295%/398%/430%/461%/525%/552%/580%/634%/680%/725%/770%",
      "19%/21%/24%/33%/35%/38%/43%/46%/48%/52%/56%/60%/64%",
      ""
    ],
    "hints": {
      "2018": {
        "id": 2018,
        "name": "Umbra Mark: Gloom",
        "description": "A special status applied to the target by some Umbra Trekkers, lasting for 10s.\u000bCan be triggered by the attacks of specific Umbra Trekkers. When triggered, removes the status and activates special effects."
      }
    },
    "cooldown": "12s"
  },
  "ultimate": {
    "name": "Void Blossom",
    "icon": "Icon/Skill/14501_Ultra",
    "description": "Throws a parasol that spins, which deals <color=#ec6d21>&Param1&</color> of ATK as Umbra Ultimate DMG. Then, detonates the parasol, dealing <color=#ec6d21>&Param2&</color> of ATK, <color=#ec6d21>&Param3&</color> of ATK, and <color=#ec6d21>&Param4&</color> of ATK as Umbra Ultimate DMG in a large area.",
    "shortDescription": "Throws and detonates a parasol, dealing multi-hit DMG in a large area.",
    "params": [
      "1%/1%/2%/2%/3%/3%/3%/3%/4%/4%/4%/5%/5%",
      "86%/99%/112%/150%/163%/175%/199%/209%/219%/240%/257%/274%/292%",
      "202%/232%/263%/354%/382%/410%/467%/491%/515%/564%/604%/645%/685%",
      "76%/87%/99%/133%/143%/154%/175%/184%/193%/212%/227%/242%/257%"
    ],
    "hints": {},
    "cooldown": "40s",
    "energy": 358
  },
  "talents": [
    {
      "name": "Lightless Night",
      "talents": [
        {
          "name": "Lightless Night",
          "description": "When Otoha deals Skill DMG, increases the Umbra DMG Taken by the target by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": [
            "4.7%",
            "6",
            "3"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Gloomy Reality",
      "talents": [
        {
          "name": "Gloomy Reality",
          "description": "When Otoha casts Ultimate, her Crit DMG is increased by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "20%",
            "25"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Exotic Flora",
      "talents": [
        {
          "name": "Exotic Flora",
          "description": "When Otoha's Ultimate deals DMG, increases the Crit DMG of all Umbra friendly units in the squad by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "15%",
            "6"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Eye for an Eye",
      "talents": [
        {
          "name": "Eye for an Eye",
          "description": "When the squad triggers an ##Umbra Mark#1019#, increases Otoha's Umbra DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "20%",
            "6"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Heart to Heart",
      "talents": [
        {
          "name": "Heart to Heart",
          "description": "Increases Otoha's Umbra DMG to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
          "params": [
            "0.22%"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
          "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.",
          "params": [
            "50"
          ]
        },
        {
          "name": "",
          "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.",
          "params": [
            "10"
          ]
        },
        {
          "name": "",
          "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.",
          "params": [
            "575"
          ]
        },
        {
          "name": "",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        },
        {
          "name": "",
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
      "hp": 788,
      "atk": 115
    },
    {
      "hp": 1025,
      "atk": 150
    },
    {
      "hp": 1262,
      "atk": 184
    },
    {
      "hp": 1498,
      "atk": 219
    },
    {
      "hp": 1735,
      "atk": 254
    },
    {
      "hp": 1971,
      "atk": 288
    },
    {
      "hp": 2208,
      "atk": 323
    },
    {
      "hp": 2444,
      "atk": 357
    },
    {
      "hp": 2681,
      "atk": 392
    },
    {
      "hp": 2917,
      "atk": 427
    },
    {
      "hp": 3501,
      "atk": 512
    },
    {
      "hp": 3737,
      "atk": 546
    },
    {
      "hp": 3974,
      "atk": 581
    },
    {
      "hp": 4210,
      "atk": 616
    },
    {
      "hp": 4447,
      "atk": 650
    },
    {
      "hp": 4684,
      "atk": 685
    },
    {
      "hp": 4920,
      "atk": 719
    },
    {
      "hp": 5157,
      "atk": 754
    },
    {
      "hp": 5393,
      "atk": 789
    },
    {
      "hp": 5630,
      "atk": 823
    },
    {
      "hp": 5866,
      "atk": 858
    },
    {
      "hp": 7041,
      "atk": 1029
    },
    {
      "hp": 7278,
      "atk": 1064
    },
    {
      "hp": 7514,
      "atk": 1099
    },
    {
      "hp": 7751,
      "atk": 1133
    },
    {
      "hp": 7987,
      "atk": 1168
    },
    {
      "hp": 8224,
      "atk": 1202
    },
    {
      "hp": 8460,
      "atk": 1237
    },
    {
      "hp": 8697,
      "atk": 1272
    },
    {
      "hp": 8933,
      "atk": 1306
    },
    {
      "hp": 9170,
      "atk": 1341
    },
    {
      "hp": 9407,
      "atk": 1375
    },
    {
      "hp": 11291,
      "atk": 1651
    },
    {
      "hp": 11528,
      "atk": 1685
    },
    {
      "hp": 11764,
      "atk": 1720
    },
    {
      "hp": 12001,
      "atk": 1755
    },
    {
      "hp": 12237,
      "atk": 1789
    },
    {
      "hp": 12474,
      "atk": 1824
    },
    {
      "hp": 12710,
      "atk": 1858
    },
    {
      "hp": 12947,
      "atk": 1893
    },
    {
      "hp": 13183,
      "atk": 1927
    },
    {
      "hp": 13420,
      "atk": 1962
    },
    {
      "hp": 13656,
      "atk": 1997
    },
    {
      "hp": 16385,
      "atk": 2396
    },
    {
      "hp": 16621,
      "atk": 2430
    },
    {
      "hp": 16858,
      "atk": 2465
    },
    {
      "hp": 17094,
      "atk": 2499
    },
    {
      "hp": 17331,
      "atk": 2534
    },
    {
      "hp": 17567,
      "atk": 2568
    },
    {
      "hp": 17804,
      "atk": 2603
    },
    {
      "hp": 18040,
      "atk": 2638
    },
    {
      "hp": 18277,
      "atk": 2672
    },
    {
      "hp": 18514,
      "atk": 2707
    },
    {
      "hp": 18750,
      "atk": 2741
    },
    {
      "hp": 22503,
      "atk": 3290
    },
    {
      "hp": 22740,
      "atk": 3325
    },
    {
      "hp": 22976,
      "atk": 3359
    },
    {
      "hp": 23213,
      "atk": 3394
    },
    {
      "hp": 23449,
      "atk": 3428
    },
    {
      "hp": 23686,
      "atk": 3463
    },
    {
      "hp": 23922,
      "atk": 3498
    },
    {
      "hp": 24159,
      "atk": 3532
    },
    {
      "hp": 24396,
      "atk": 3567
    },
    {
      "hp": 24632,
      "atk": 3601
    },
    {
      "hp": 24869,
      "atk": 3636
    },
    {
      "hp": 29844,
      "atk": 4363
    },
    {
      "hp": 30081,
      "atk": 4398
    },
    {
      "hp": 30317,
      "atk": 4433
    },
    {
      "hp": 30554,
      "atk": 4467
    },
    {
      "hp": 30790,
      "atk": 4502
    },
    {
      "hp": 31027,
      "atk": 4536
    },
    {
      "hp": 31263,
      "atk": 4571
    },
    {
      "hp": 31500,
      "atk": 4605
    },
    {
      "hp": 31736,
      "atk": 4640
    },
    {
      "hp": 31973,
      "atk": 4675
    },
    {
      "hp": 32209,
      "atk": 4709
    },
    {
      "hp": 38651,
      "atk": 5651
    },
    {
      "hp": 38888,
      "atk": 5686
    },
    {
      "hp": 39124,
      "atk": 5720
    },
    {
      "hp": 39361,
      "atk": 5755
    },
    {
      "hp": 39597,
      "atk": 5789
    },
    {
      "hp": 39834,
      "atk": 5824
    },
    {
      "hp": 40071,
      "atk": 5859
    },
    {
      "hp": 40307,
      "atk": 5893
    },
    {
      "hp": 40544,
      "atk": 5928
    },
    {
      "hp": 40780,
      "atk": 5962
    },
    {
      "hp": 41017,
      "atk": 5997
    },
    {
      "hp": 49217,
      "atk": 7196
    },
    {
      "hp": 49453,
      "atk": 7230
    },
    {
      "hp": 49690,
      "atk": 7265
    },
    {
      "hp": 49927,
      "atk": 7300
    },
    {
      "hp": 50163,
      "atk": 7334
    },
    {
      "hp": 50400,
      "atk": 7369
    },
    {
      "hp": 50636,
      "atk": 7403
    },
    {
      "hp": 50873,
      "atk": 7438
    },
    {
      "hp": 51109,
      "atk": 7472
    },
    {
      "hp": 51346,
      "atk": 7507
    },
    {
      "hp": 51582,
      "atk": 7542
    },
    {
      "hp": 51582,
      "atk": 7542
    }
  ],
  "upgrades": [],
  "skillUpgrades": []
};
