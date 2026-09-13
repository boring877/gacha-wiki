// Karin Character Data - Stella Sora
// Generated from live game tables (Sep 8 2026 patch, v1.15.0)

export const Karin = {
  "id": 157,
  "name": "Karin",
  "icon": "/stella/assets/Karin.png",
  "portrait": "/stella/assets/Karin_portrait.png",
  "background": "/stella/assets/Karin_background.png",
  "description": "Karin carries her fishing harpoon and charges in alongside the fierce Boss Shark. Together, they'll raise havoc on the battlefield!",
  "voiceActor": {
    "cn": "Karin",
    "cnLocalized": "花玲",
    "jp": "Yui Ogura",
    "jpLocalized": "小仓唯"
  },
  "birthday": "9.1",
  "grade": 5,
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
      "name": "A Sailor's Foresight",
      "icon": "DatingSPCG_157301",
      "clue": "Visit the Port to unlock",
      "secondChoice": "According to Karin, she prepared a special kind of bait that can catch a very special big fish.\nSure enough, after you wait for a while, the fishing line suddenly jerks. Karin springs to her feet and pours all her strength into battling the enormous fish.\nJust as it looks like she's about to run out of stamina, you quickly step in behind her and grab the fishing rod with her."
    },
    {
      "name": "Cute Instinct",
      "icon": "DatingSPCG_157302",
      "clue": "Visit Hot Spring Resort to unlock",
      "secondChoice": "\"Whew... It really is different.\"\nOnce you've each settled into your own private bath, you hear Karin voicing her approval of this new experience.\n\"It feels nice, but don't stay in too long, okay? You might get dizzy.\"\n\"And it's cold outside right now, so remember to dry yourself off properly afterward. Otherwise you'll catch a cold.\"\n\"Yeah, yeah, I know, I know~\""
    }
  ],
  "giftPreferences": {
    "loves": [
      "Blazing Wind Spinner",
      "Card Photo Capturer",
      "Chilling Wind Spinner",
      "Deluxe Blower",
      "Exquisite Blower",
      "Portable Blower",
      "Reflective Photo Capturer",
      "Ultra-Precision Photo Capturer",
      "Whisper Wind Spinner"
    ],
    "hates": [
      "Blazing Wings",
      "Fiery Honeypot",
      "Love Candle"
    ]
  },
  "normalAttack": {
    "name": "Fisher's Hunt",
    "icon": "Icon/Skill/15701_Normal",
    "description": "Fires cuttlefish shells, each dealing <color=#ec6d21>&Param1&</color> of ATK as AoE Umbra Auto Attack DMG.\nKarin has ##Hunting Energy#4045# and can automatically consume 100 ##Hunting Energy#4045# to throw a chain, inflicting ##Hunter's Mark#4046# on the target and forming a link. While the chain is active, increases Karin's &Param2& by <color=#ec6d21>&Param3&</color>.",
    "shortDescription": "Fires cuttlefish shells to deal DMG in a large area.\nKarin can consume Hunting Energy to fire a chain that links with a target, increasing Karin's &Param2& while the chain is active.",
    "params": [
      "49%/56%/64%/86%/92%/99%/113%/119%/125%/136%/146%/156%/166%",
      "Normal DMG",
      "5.8%/6.7%/7.6%/10.2%/11.1%/11.9%/13.5%/14.2%/15%"
    ],
    "hints": {
      "4045": {
        "id": 4045,
        "name": "Hunting Energy",
        "description": "Karin has Hunting Energy, which is capped at 100 and regenerates 10 per second."
      },
      "4046": {
        "id": 4046,
        "name": "Hunter's Mark"
      }
    }
  },
  "skill": {
    "name": "Bait and Catch",
    "icon": "Icon/Skill/15701_Skill_Main",
    "description": "Leaps into the air and launches a fishcake, dealing <color=#ec6d21>&Param1&</color> of ATK as AoE Umbra Auto ATK DMG, then summons Boss Shark to devour the target, dealing <color=#ec6d21>&Param2&</color> of ATK as Umbra Ultimate DMG in a large area. Bait and Catch (Main Skill) can trigger ##Umbra Mark#1019#, dealing &Param3& of ATK as Umbra Mark DMG and inflicting ##Dark Burn#4051#.",
    "shortDescription": "Leaps into the air and launches a fishcake that explodes, then summons Boss Shark to devour the target to deal additional DMG.",
    "params": [
      "190%/218%/246%/332%/358%/385%/438%/461%/483%/529%/567%/605%/643%",
      "300%/345%/390%/525%/566%/608%/692%/728%/764%/836%/896%/956%/1016%",
      "38%/49%/61%/72%/83%/95%/106%/117%/129%/0%/0%/0%/0%"
    ],
    "hints": {
      "1019": {
        "id": 1019,
        "name": "Umbra Mark",
        "description": "The generic name for all Umbra Marks.\u000bWhen triggered by specific Umbra Trekkers' attacks, the status is removed, and a special effect is activated."
      },
      "4051": {
        "id": 4051,
        "name": "Dark Burn"
      }
    },
    "cooldown": "10s"
  },
  "supportSkill": {
    "name": "Raging Sea",
    "icon": "Icon/Skill/15701_Skill_Support",
    "description": "Swings the harpoon chain repeatedly, dealing <color=#ec6d21>&Param1& x4</color> of ATK as AoE Umbra Skill DMG. During the skill, summons Boss Shark multiple times to pursue and devour targets, dealing <color=#ec6d21>&Param2& x4</color> of ATK as AoE Umbra Ultimate DMG. Finally, rides Boss Shark and performs a diving slam, dealing <color=#ec6d21>&Param3&</color> of ATK as Umbra Ultimate DMG in a large area. Raging Sea (Support Skill) can trigger ##Umbra Mark#1019#, dealing &Param4& of ATK as Umbra Mark DMG and inflicting ##Dark Burn#4051#.",
    "shortDescription": "Swings the harpoon chain repeatedly to deal multiple instances of DMG while summoning Boss Shark multiple times to pursue and devour targets.",
    "params": [
      "49%/56%/64%/86%/93%/100%/113%/119%/125%/137%/147%/156%/166%",
      "38%/43%/49%/66%/71%/76%/87%/91%/96%/105%/113%/120%/128%",
      "240%/276%/313%/421%/454%/488%/555%/584%/613%/671%/719%/767%/815%",
      "38%/49%/61%/72%/83%/95%/106%/117%/129%/0%/0%/0%/0%"
    ],
    "hints": {
      "1019": {
        "id": 1019,
        "name": "Umbra Mark",
        "description": "The generic name for all Umbra Marks.\u000bWhen triggered by specific Umbra Trekkers' attacks, the status is removed, and a special effect is activated."
      },
      "4051": {
        "id": 4051,
        "name": "Dark Burn"
      }
    },
    "cooldown": "12s"
  },
  "ultimate": {
    "name": "Shark Assault",
    "icon": "Icon/Skill/15701_Ultra",
    "description": "Karin and Boss Shark clash in a ferocious fight, dealing <color=#ec6d21>&Param1& x14</color> of ATK as Umbra Ultimate DMG in a large area. Shark Assault (Ultimate) can trigger ##Umbra Mark#1019#, dealing &Param2& of ATK as Umbra Mark DMG and inflicting ##Dark Burn#4051#.",
    "shortDescription": "Karin and Boss Shark clash in a ferocious fight, dealing multiple instances of DMG in a large area.",
    "params": [
      "109%/125%/142%/191%/206%/221%/252%/265%/278%/304%/326%/348%/370%",
      "38%/49%/61%/72%/83%/95%/106%/117%/129%/0%/0%/0%/0%"
    ],
    "hints": {
      "1019": {
        "id": 1019,
        "name": "Umbra Mark",
        "description": "The generic name for all Umbra Marks.\u000bWhen triggered by specific Umbra Trekkers' attacks, the status is removed, and a special effect is activated."
      },
      "4051": {
        "id": 4051,
        "name": "Dark Burn"
      }
    },
    "cooldown": "30s",
    "energy": 300
  },
  "talents": [
    {
      "name": "Ripples of Grace",
      "talents": [
        {
          "name": "Ripples of Grace",
          "description": "When any Trekker applies an ##Umbra Mark#1019# on a target, increases Karin's Ultimate DMG by <color=#0abec5>&Param1&</color> for &Param2&s, up to &Param3& stacks.",
          "params": [
            "5%",
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
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Ocean's Echo",
      "talents": [
        {
          "name": "Ocean's Echo",
          "description": "When Karin deals Auto Attack DMG or Ultimate DMG, increases her Crit DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
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
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Twilight's End",
      "talents": [
        {
          "name": "Twilight's End",
          "description": "When Karin triggers an Umbra Mark, increases her Auto Attack DMG by <color=#0abec5>&Param1&</color> and Ultimate DMG by <color=#0abec5>&Param2&</color> for &Param3&s.",
          "params": [
            "40%",
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
          "name": "ATK Enhancement",
          "description": "Increases ATK by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
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
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Calm Summer Night",
      "talents": [
        {
          "name": "Calm Summer Night",
          "description": "When Karin casts her Ultimate, increases her ATK by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "27%",
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
          "name": "Umbra DMG Boost",
          "description": "Increases Umbra DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "1.5%"
          ]
        }
      ]
    },
    {
      "name": "Heart as Waves",
      "talents": [
        {
          "name": "Heart as Waves",
          "description": "Increases Karin's Umbra DMG dealt to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
          "params": [
            "0.22%"
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
      "hp": 795,
      "atk": 115
    },
    {
      "hp": 1033,
      "atk": 150
    },
    {
      "hp": 1271,
      "atk": 184
    },
    {
      "hp": 1510,
      "atk": 219
    },
    {
      "hp": 1748,
      "atk": 254
    },
    {
      "hp": 1987,
      "atk": 288
    },
    {
      "hp": 2225,
      "atk": 323
    },
    {
      "hp": 2463,
      "atk": 357
    },
    {
      "hp": 2702,
      "atk": 392
    },
    {
      "hp": 2940,
      "atk": 427
    },
    {
      "hp": 3528,
      "atk": 512
    },
    {
      "hp": 3767,
      "atk": 546
    },
    {
      "hp": 4005,
      "atk": 581
    },
    {
      "hp": 4243,
      "atk": 616
    },
    {
      "hp": 4482,
      "atk": 650
    },
    {
      "hp": 4720,
      "atk": 685
    },
    {
      "hp": 4959,
      "atk": 719
    },
    {
      "hp": 5197,
      "atk": 754
    },
    {
      "hp": 5435,
      "atk": 789
    },
    {
      "hp": 5674,
      "atk": 823
    },
    {
      "hp": 5912,
      "atk": 858
    },
    {
      "hp": 7096,
      "atk": 1029
    },
    {
      "hp": 7335,
      "atk": 1064
    },
    {
      "hp": 7573,
      "atk": 1099
    },
    {
      "hp": 7811,
      "atk": 1133
    },
    {
      "hp": 8050,
      "atk": 1168
    },
    {
      "hp": 8288,
      "atk": 1202
    },
    {
      "hp": 8526,
      "atk": 1237
    },
    {
      "hp": 8765,
      "atk": 1272
    },
    {
      "hp": 9003,
      "atk": 1306
    },
    {
      "hp": 9242,
      "atk": 1341
    },
    {
      "hp": 9480,
      "atk": 1375
    },
    {
      "hp": 11379,
      "atk": 1651
    },
    {
      "hp": 11618,
      "atk": 1685
    },
    {
      "hp": 11856,
      "atk": 1720
    },
    {
      "hp": 12094,
      "atk": 1755
    },
    {
      "hp": 12333,
      "atk": 1789
    },
    {
      "hp": 12571,
      "atk": 1824
    },
    {
      "hp": 12810,
      "atk": 1858
    },
    {
      "hp": 13048,
      "atk": 1893
    },
    {
      "hp": 13286,
      "atk": 1927
    },
    {
      "hp": 13525,
      "atk": 1962
    },
    {
      "hp": 13763,
      "atk": 1997
    },
    {
      "hp": 16513,
      "atk": 2396
    },
    {
      "hp": 16751,
      "atk": 2430
    },
    {
      "hp": 16989,
      "atk": 2465
    },
    {
      "hp": 17228,
      "atk": 2499
    },
    {
      "hp": 17466,
      "atk": 2534
    },
    {
      "hp": 17705,
      "atk": 2568
    },
    {
      "hp": 17943,
      "atk": 2603
    },
    {
      "hp": 18181,
      "atk": 2638
    },
    {
      "hp": 18420,
      "atk": 2672
    },
    {
      "hp": 18658,
      "atk": 2707
    },
    {
      "hp": 18897,
      "atk": 2741
    },
    {
      "hp": 22679,
      "atk": 3290
    },
    {
      "hp": 22917,
      "atk": 3325
    },
    {
      "hp": 23156,
      "atk": 3359
    },
    {
      "hp": 23394,
      "atk": 3394
    },
    {
      "hp": 23633,
      "atk": 3428
    },
    {
      "hp": 23871,
      "atk": 3463
    },
    {
      "hp": 24109,
      "atk": 3498
    },
    {
      "hp": 24348,
      "atk": 3532
    },
    {
      "hp": 24586,
      "atk": 3567
    },
    {
      "hp": 24825,
      "atk": 3601
    },
    {
      "hp": 25063,
      "atk": 3636
    },
    {
      "hp": 30077,
      "atk": 4363
    },
    {
      "hp": 30316,
      "atk": 4398
    },
    {
      "hp": 30554,
      "atk": 4433
    },
    {
      "hp": 30792,
      "atk": 4467
    },
    {
      "hp": 31031,
      "atk": 4502
    },
    {
      "hp": 31269,
      "atk": 4536
    },
    {
      "hp": 31507,
      "atk": 4571
    },
    {
      "hp": 31746,
      "atk": 4605
    },
    {
      "hp": 31984,
      "atk": 4640
    },
    {
      "hp": 32223,
      "atk": 4675
    },
    {
      "hp": 32461,
      "atk": 4709
    },
    {
      "hp": 38953,
      "atk": 5651
    },
    {
      "hp": 39192,
      "atk": 5686
    },
    {
      "hp": 39430,
      "atk": 5720
    },
    {
      "hp": 39668,
      "atk": 5755
    },
    {
      "hp": 39907,
      "atk": 5789
    },
    {
      "hp": 40145,
      "atk": 5824
    },
    {
      "hp": 40384,
      "atk": 5859
    },
    {
      "hp": 40622,
      "atk": 5893
    },
    {
      "hp": 40860,
      "atk": 5928
    },
    {
      "hp": 41099,
      "atk": 5962
    },
    {
      "hp": 41337,
      "atk": 5997
    },
    {
      "hp": 49601,
      "atk": 7196
    },
    {
      "hp": 49840,
      "atk": 7230
    },
    {
      "hp": 50078,
      "atk": 7265
    },
    {
      "hp": 50317,
      "atk": 7300
    },
    {
      "hp": 50555,
      "atk": 7334
    },
    {
      "hp": 50793,
      "atk": 7369
    },
    {
      "hp": 51032,
      "atk": 7403
    },
    {
      "hp": 51270,
      "atk": 7438
    },
    {
      "hp": 51509,
      "atk": 7472
    },
    {
      "hp": 51747,
      "atk": 7507
    },
    {
      "hp": 51985,
      "atk": 7542
    },
    {
      "hp": 51985,
      "atk": 7542
    }
  ],
  "upgrades": [],
  "skillUpgrades": []
};
