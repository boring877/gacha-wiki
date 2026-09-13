// Sparkla Character Data - Stella Sora
// Generated from live game tables (Sep 8 2026 patch, v1.15.0)

export const Sparkla = {
  "id": 140,
  "name": "Sparkla",
  "icon": "/stella/assets/Sparkla.png",
  "portrait": "/stella/assets/Sparkla_portrait.png",
  "background": "/stella/assets/Sparkla_background.png",
  "description": "Sparkla's Super Action Pie and Rabbit Pie builds can shift into different modes to counter enemies depending on battlefield conditions.",
  "voiceActor": {
    "cn": "Song Zhengnan",
    "cnLocalized": "宋政楠",
    "jp": "Ayane Kudo",
    "jpLocalized": "工藤文音"
  },
  "birthday": "7.26",
  "grade": 5,
  "element": "Terra",
  "position": "Vanguard",
  "attackType": "Ranged",
  "style": "Creative",
  "faction": "Neo Grace Organization",
  "tags": [
    "Vanguard",
    "Creative",
    "Neo Grace Organization"
  ],
  "dateEvents": [
    {
      "name": "Arcade Amateurs",
      "icon": "DatingSPCG_140301",
      "clue": "Visit the Market to unlock",
      "secondChoice": "\"I just don't own many records, so mine mostly gather dust. But Trekkers like you travel everywhere, so you must have plenty, right? Let's win this thing and set it up on Lucky Oasis.\"\nYou two are on the exact same wavelength. Teaming up, you step up to win the grand prize.\""
    },
    {
      "name": "Fairy Tale Fanatic",
      "icon": "DatingSPCG_140302",
      "clue": "Visit the Academy to unlock",
      "secondChoice": "Once in the stacks, Sparkla is right at home. She hauls a massive pile of books to a reading desk. You peek over her shoulder, fully expecting dense formulas and abstract theories—only to find pages packed with cute illustrations.\n\"They have such a great collection of fairy tales here. I approve.\" Sparkla turns the page, looking as intensely focused as if she were in the middle of a high-stakes experiment."
    }
  ],
  "giftPreferences": {
    "loves": [
      "Blossom Porcelain Cup",
      "Cosmic Form",
      "Emerging Talent",
      "Gilded Ceramic Bowl",
      "Moonlit Companion",
      "Mystic Potion Kettle",
      "Rising Star",
      "Shining Star",
      "Stellanite Enchantment"
    ],
    "hates": [
      "Blazing Wind Spinner",
      "Chilling Wind Spinner",
      "Whisper Wind Spinner"
    ]
  },
  "normalAttack": {
    "name": "Neo Bunny Blast",
    "icon": "Icon/Skill/14001_Normal",
    "description": "Sparkla fires three volleys from her wheelchair-mounted energy guns at the target.\u000bStrike 1: <color=#fb8037>&Param1& of ATK</color> as Terra Auto Attack DMG.\u000bStrike 2: <color=#fb8037>&Param2& of ATK</color> as Terra Auto Attack DMG.\u000bStrike 3: <color=#fb8037>&Param3& of ATK x2</color> as Terra Auto Attack DMG.",
    "shortDescription": "Fires energy bullets from her wheelchair-mounted guns, dealing DMG.",
    "params": [
      "254%/292%/330%/444%/480%/515%/586%/617%/647%/708%/759%/810%/861%",
      "254%/292%/330%/444%/480%/515%/586%/617%/647%/708%/759%/810%/861%",
      "381%/438%/495%/666%/720%/773%/880%/925%/971%/1062%/1139%/1215%/1291%"
    ],
    "hints": {}
  },
  "skill": {
    "name": "Rabbit Pie Tempo Switch",
    "icon": "Icon/Skill/14001_Skill_Main",
    "description": "Tap or hold to have Sparkla transform her wheelchair into one of two modes for 10s.\u000b<color=#0abec5>Tap</color>\u000bEnters ###4033#, lobbing bombs at the target and dealing <color=#fb8037>&Param1& of ATK</color> as Terra Skill DMG.\u000b<color=#0abec5>Hold</color>\u000bEnters ##Bunny Rapid Fire Mode#4034#, unleashing a rapid stream of shots at the target and dealing <color=#fb8037>&Param2& of ATK x3</color> as Terra Skill DMG.\u000bBoth ##Bunny Jaws Mode#4033# and ##Bunny Rapid Fire Mode#4034# can trigger ##Terra Mark#1020#, dealing &Param3& of ATK as AoE Terra Mark DMG.\u000bEnters cooldown when the transformation ends.",
    "shortDescription": "Tap to enter ##Bunny Jaws Mode#4033#, firing slow, heavy shots to deal AoE DMG. \u000bHold to enter ##Bunny Rapid Fire Mode#4034#, firing rapid shots that deal multiple instances of damage.\u000bBoth modes can trigger ##Terra Mark#1020#.",
    "params": [
      "213%/245%/277%/373%/403%/433%/493%/518%/544%/595%/638%/681%/723%",
      "57%/66%/74%/100%/108%/116%/132%/139%/146%/159%/171%/182%/193%",
      "37%/48%/59%/70%/81%/92%/103%/114%/125%"
    ],
    "hints": {
      "4034": {
        "id": 4034,
        "name": "Bunny Rapid Fire Mode",
        "description": "Hold the Main Skill Button to enter a rapid attack mode that deals multiple instances of DMG over a period of time."
      },
      "4033": {
        "id": 4033,
        "name": "Bunny Jaws Mode",
        "description": "Select the Main Skill Button to enter a slow attack mode that deals AoE DMG for a period of time."
      },
      "1020": {
        "id": 1020,
        "name": "Terra Mark",
        "description": "The generic name for all Terra Marks.\u000bWhen triggered by specific Terra Trekkers' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "5s"
  },
  "supportSkill": {
    "name": "Homing Bunny Volley",
    "icon": "Icon/Skill/14001_Skill_Support",
    "description": "Sparkla's wheelchair-mounted mechanical arms fire Bunny Fireworks at the target location, with 2 Bunny Fireworks per volley, 13 volleys in total.\u000bThe Bunny Fireworks land near the target in random patterns, each dealing <color=#fb8037>&Param1& of ATK</color> as Terra Skill DMG.\u000bBunny Fireworks can trigger ##Terra Mark#1020#, dealing &Param2& of ATK as AoE Terra Mark DMG.",
    "shortDescription": "Sparkla's wheelchair-mounted mechanical arms fire multiple Bunny Fireworks at the target location, dealing damage.\u000bBunny Fireworks can trigger##Terra Mark#1020#.",
    "params": [
      "10%/11%/13%/17%/19%/20%/23%/24%/25%/28%/30%/32%/34%",
      "37%/48%/59%/70%/81%/92%/103%/114%/125%"
    ],
    "hints": {
      "1020": {
        "id": 1020,
        "name": "Terra Mark",
        "description": "The generic name for all Terra Marks.\u000bWhen triggered by specific Terra Trekkers' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "12s"
  },
  "ultimate": {
    "name": "All-Out Bunny Barrage",
    "icon": "Icon/Skill/14001_Ultra",
    "description": "Sparkla takes a nap in her wheelchair and orders her doll to attack nearby targets, dealing <color=#fb8037>&Param1& of ATK x10</color> as AoE Terra Ultimate DMG.\u000bWhen she wakes up, she fires a Bunny Firework Cannon at the target location, dealing <color=#fb8037>&Param2& of ATK</color> as AoE Terra Ultimate DMG.\u000bThis Ultimate can trigger ##Terra Mark#1020#, dealing &Param3& of ATK as AoE Terra Mark DMG.",
    "shortDescription": "Sparkla takes a nap in her wheelchair and orders her doll to attack nearby targets, dealing AoE DMG.\u000bWhen she wakes up, she deals another wave of AoE DMG at the target's location.\u000bThis Ultimate can trigger ##Terra Mark#1020#.",
    "params": [
      "194%/223%/252%/339%/367%/394%/448%/471%/495%/541%/580%/619%/658%",
      "978%/1125%/1271%/1711%/1848%/1985%/2259%/2376%/2494%/2729%/2924%/3120%/3315%",
      "37%/48%/59%/70%/81%/92%/103%/114%/125%"
    ],
    "hints": {
      "1020": {
        "id": 1020,
        "name": "Terra Mark",
        "description": "The generic name for all Terra Marks.\u000bWhen triggered by specific Terra Trekkers' attacks, the status is removed, and a special effect is activated."
      }
    },
    "cooldown": "40s",
    "energy": 357
  },
  "talents": [
    {
      "name": "Genius Artisan",
      "talents": [
        {
          "name": "Genius Artisan",
          "description": "When Sparkla triggers a ##Terra Mark#1020#, increases her ATK by <color=#0abec5>&Param1&</color> for &Param2&s, up to &Param3& stacks.",
          "params": [
            "5%",
            "8",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    },
    {
      "name": "Blacklist",
      "talents": [
        {
          "name": "Blacklist",
          "description": "When Sparkla deals DMG, increases her Skill DMG by <color=#0abec5>&Param1&</color> for &Param2&s, up to &Param3& stacks.",
          "params": [
            "3.8%",
            "4",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    },
    {
      "name": "Invention Blueprint",
      "talents": [
        {
          "name": "Invention Blueprint",
          "description": "When Sparkla casts a skill, increases her ATK by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": [
            "20%",
            "18"
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    },
    {
      "name": "Fairy Tale Friends",
      "talents": [
        {
          "name": "Fairy Tale Friends",
          "description": "When any Trekker applies a ##Terra Mark#1020# to a target, increases Sparkla's Terra DMG by <color=#0abec5>&Param1&</color> for &Param2&s, up to &Param3& stacks.",
          "params": [
            "4%",
            "5",
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
          "name": "Skill DMG Boost",
          "description": "Increases Skill DMG by <color=#0abec5>&Param1&</color>",
          "params": [
            "2.1%"
          ]
        }
      ]
    },
    {
      "name": "Rhymes of the Wonderbox",
      "talents": [
        {
          "name": "Rhymes of the Wonderbox",
          "description": "Increases the Terra DMG dealt by Sparkla to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
          "params": [
            "0.19%"
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
      "hp": 807,
      "atk": 114
    },
    {
      "hp": 1049,
      "atk": 148
    },
    {
      "hp": 1291,
      "atk": 182
    },
    {
      "hp": 1533,
      "atk": 216
    },
    {
      "hp": 1775,
      "atk": 250
    },
    {
      "hp": 2017,
      "atk": 284
    },
    {
      "hp": 2259,
      "atk": 318
    },
    {
      "hp": 2502,
      "atk": 352
    },
    {
      "hp": 2744,
      "atk": 386
    },
    {
      "hp": 2986,
      "atk": 420
    },
    {
      "hp": 3583,
      "atk": 504
    },
    {
      "hp": 3825,
      "atk": 538
    },
    {
      "hp": 4067,
      "atk": 572
    },
    {
      "hp": 4309,
      "atk": 606
    },
    {
      "hp": 4551,
      "atk": 640
    },
    {
      "hp": 4793,
      "atk": 674
    },
    {
      "hp": 5035,
      "atk": 708
    },
    {
      "hp": 5278,
      "atk": 742
    },
    {
      "hp": 5520,
      "atk": 776
    },
    {
      "hp": 5762,
      "atk": 811
    },
    {
      "hp": 6004,
      "atk": 845
    },
    {
      "hp": 7206,
      "atk": 1014
    },
    {
      "hp": 7448,
      "atk": 1048
    },
    {
      "hp": 7690,
      "atk": 1082
    },
    {
      "hp": 7932,
      "atk": 1116
    },
    {
      "hp": 8175,
      "atk": 1150
    },
    {
      "hp": 8417,
      "atk": 1184
    },
    {
      "hp": 8659,
      "atk": 1218
    },
    {
      "hp": 8901,
      "atk": 1252
    },
    {
      "hp": 9143,
      "atk": 1286
    },
    {
      "hp": 9385,
      "atk": 1320
    },
    {
      "hp": 9627,
      "atk": 1354
    },
    {
      "hp": 11556,
      "atk": 1626
    },
    {
      "hp": 11798,
      "atk": 1660
    },
    {
      "hp": 12040,
      "atk": 1694
    },
    {
      "hp": 12282,
      "atk": 1728
    },
    {
      "hp": 12524,
      "atk": 1762
    },
    {
      "hp": 12766,
      "atk": 1796
    },
    {
      "hp": 13008,
      "atk": 1830
    },
    {
      "hp": 13250,
      "atk": 1864
    },
    {
      "hp": 13492,
      "atk": 1898
    },
    {
      "hp": 13734,
      "atk": 1932
    },
    {
      "hp": 13977,
      "atk": 1966
    },
    {
      "hp": 16769,
      "atk": 2359
    },
    {
      "hp": 17011,
      "atk": 2393
    },
    {
      "hp": 17253,
      "atk": 2427
    },
    {
      "hp": 17495,
      "atk": 2461
    },
    {
      "hp": 17737,
      "atk": 2495
    },
    {
      "hp": 17979,
      "atk": 2529
    },
    {
      "hp": 18221,
      "atk": 2563
    },
    {
      "hp": 18463,
      "atk": 2597
    },
    {
      "hp": 18705,
      "atk": 2631
    },
    {
      "hp": 18947,
      "atk": 2665
    },
    {
      "hp": 19190,
      "atk": 2700
    },
    {
      "hp": 23031,
      "atk": 3240
    },
    {
      "hp": 23273,
      "atk": 3274
    },
    {
      "hp": 23515,
      "atk": 3308
    },
    {
      "hp": 23757,
      "atk": 3342
    },
    {
      "hp": 23999,
      "atk": 3376
    },
    {
      "hp": 24241,
      "atk": 3410
    },
    {
      "hp": 24483,
      "atk": 3444
    },
    {
      "hp": 24725,
      "atk": 3478
    },
    {
      "hp": 24967,
      "atk": 3512
    },
    {
      "hp": 25209,
      "atk": 3546
    },
    {
      "hp": 25452,
      "atk": 3580
    },
    {
      "hp": 30543,
      "atk": 4297
    },
    {
      "hp": 30786,
      "atk": 4331
    },
    {
      "hp": 31028,
      "atk": 4365
    },
    {
      "hp": 31270,
      "atk": 4399
    },
    {
      "hp": 31512,
      "atk": 4433
    },
    {
      "hp": 31754,
      "atk": 4467
    },
    {
      "hp": 31996,
      "atk": 4501
    },
    {
      "hp": 32238,
      "atk": 4535
    },
    {
      "hp": 32480,
      "atk": 4569
    },
    {
      "hp": 32722,
      "atk": 4603
    },
    {
      "hp": 32964,
      "atk": 4637
    },
    {
      "hp": 39557,
      "atk": 5565
    },
    {
      "hp": 39799,
      "atk": 5599
    },
    {
      "hp": 40041,
      "atk": 5633
    },
    {
      "hp": 40283,
      "atk": 5667
    },
    {
      "hp": 40526,
      "atk": 5701
    },
    {
      "hp": 40768,
      "atk": 5735
    },
    {
      "hp": 41010,
      "atk": 5769
    },
    {
      "hp": 41252,
      "atk": 5803
    },
    {
      "hp": 41494,
      "atk": 5837
    },
    {
      "hp": 41736,
      "atk": 5871
    },
    {
      "hp": 41978,
      "atk": 5905
    },
    {
      "hp": 50370,
      "atk": 7086
    },
    {
      "hp": 50613,
      "atk": 7120
    },
    {
      "hp": 50855,
      "atk": 7154
    },
    {
      "hp": 51097,
      "atk": 7188
    },
    {
      "hp": 51339,
      "atk": 7222
    },
    {
      "hp": 51581,
      "atk": 7256
    },
    {
      "hp": 51823,
      "atk": 7290
    },
    {
      "hp": 52065,
      "atk": 7324
    },
    {
      "hp": 52307,
      "atk": 7358
    },
    {
      "hp": 52549,
      "atk": 7392
    },
    {
      "hp": 52791,
      "atk": 7426
    },
    {
      "hp": 52791,
      "atk": 7426
    }
  ],
  "upgrades": [],
  "skillUpgrades": []
};
