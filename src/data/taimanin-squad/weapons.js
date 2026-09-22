// Taimanin Squad Weapon Data
// Generated from game data (build 119, 2026-09-21) - 245 weapons

export const TAIMANIN_SQUAD_WEAPONS =
[
  {
    "id": 101,
    "unit_id": 1,
    "name": "Tokizaki",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 113,
    "skill_name": "<Tokizaki> Koujin Zanka",
    "skill_desc": "Moves as fast as light and instantly attacks the enemy 6 time(s).\nTarget hit is inflicted with (-19.5%) SPD DOWN at a 99% chance and has their Turn Gauge reduced by (15%) at a 65% chance on Last Attack.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 104.9
        },
        {
          "stat": "SPD",
          "pct": 594
        }
      ],
      "hits": [
        {
          "pct": 104.9,
          "count": 6
        }
      ],
      "total": null
    },
    "skill_icon": "113",
    "char_name": "Asagi",
    "char_icon": "1_Asagi",
    "icon": "Weapon_101.png",
    "large_icon": "Weapon_101_m.png"
  },
  {
    "id": 102,
    "unit_id": 1,
    "name": "Gurren",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 112,
    "skill_name": "<Gurren> Hirenka",
    "skill_desc": "After kicking the enemy upward, slashes them 4 times in midair for a total of 5 attacks.\nTarget hit is inflicted with (65%) Heal Reduction at a 99% chance.\nDuration: 2 turn(s)\nDefeating an enemy with this skill resets the Cooldown of Koujin Zanka.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 153.1
        }
      ],
      "hits": [
        {
          "pct": 153.1,
          "count": 5
        }
      ],
      "total": 765.5
    },
    "skill_icon": "112",
    "char_name": "Asagi",
    "char_icon": "1_Asagi",
    "icon": "Weapon_102.png",
    "large_icon": "Weapon_102_m.png"
  },
  {
    "id": 201,
    "unit_id": 2,
    "name": "Liberator & Sonic Blade",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 212,
    "skill_name": "<Liberator & Sonic Blade> Moon Shadow",
    "skill_desc": "When hit by an attack other than an all-target attack, uses Moon Shadow.\nGoes into Stealth mode.\nDuration: 2 turn(s)",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "212",
    "char_name": "Sakuya",
    "char_icon": "2_Sakuya",
    "icon": "Weapon_201.png",
    "large_icon": "Weapon_201_m.png"
  },
  {
    "id": 301,
    "unit_id": 3,
    "name": "Crystal Staff",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 13,
    "opt_type_name": "Speed",
    "opt_value": 24,
    "bonus_value": 2.4,
    "skill_id": 313,
    "skill_name": "<Crystal Staff> Ice Fall",
    "skill_desc": "Creates a large ice crystal and drops it on top of ALL enemies.\nTargets hit are inflicted with (25%) Freeze at a 35% chance.\nIf the character has 2 or more Buffs, inflicts Freeze at a 45% chance.\nDuration: 2 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 429.8
        }
      ],
      "hits": [
        {
          "pct": 429.8,
          "count": 1
        }
      ],
      "total": 429.8
    },
    "skill_icon": "313",
    "char_name": "Shirayuki",
    "char_icon": "3_Shirayuki",
    "icon": "Weapon_301.png",
    "large_icon": "Weapon_301_m.png"
  },
  {
    "id": 401,
    "unit_id": 4,
    "name": "Sword Breaker",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 411,
    "skill_name": "<Sword Breaker> CQC-Double Attack",
    "skill_desc": "Runs toward the enemy with a dagger and attacks 2 times.\nReduces Cooldown of Awakened Immortal by -1 turn(s) after the attack.",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 252.0
        }
      ],
      "hits": [
        {
          "pct": 252.0,
          "count": 2
        }
      ],
      "total": 504.0
    },
    "skill_icon": "411",
    "char_name": "Kuro",
    "char_icon": "4_Kuro",
    "icon": "Weapon_401.png",
    "large_icon": "Weapon_401_m.png"
  },
  {
    "id": 501,
    "unit_id": 5,
    "name": "Assasin's Dagger",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 512,
    "skill_name": "<Assasin's Dagger> Shadow Arts: Beast Call",
    "skill_desc": "Summons a shadow creature and sends it toward the enemy.\nInflicts (-40%) DEF DOWN to the target at a 95% chance before the attack.\nDuration: 2 turn(s)\nGoes into Stealth mode when defeating an enemy with this skill.\nDuration: 2 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 692.2
        }
      ],
      "hits": [
        {
          "pct": 692.2,
          "count": 1
        }
      ],
      "total": 692.2
    },
    "skill_icon": "512",
    "char_name": "Sakura",
    "char_icon": "5_Sakura",
    "icon": "Weapon_501.png",
    "large_icon": "Weapon_501_m.png"
  },
  {
    "id": 502,
    "unit_id": 5,
    "name": "Kagedachi",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 514,
    "skill_name": "<Kagedachi> Mischief Taimanin",
    "skill_desc": "When CRIT ATK lands, fills the character's Turn Gauge by (20%) at a fixed chance of 25%.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "514",
    "char_name": "Sakura",
    "char_icon": "5_Sakura",
    "icon": "Weapon_502.png",
    "large_icon": "Weapon_502_m.png"
  },
  {
    "id": 601,
    "unit_id": 6,
    "name": "Android Arm Secrecy",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 612,
    "skill_name": "<Android Arm Secrecy> Fuuma Martial Art: Skyfall",
    "skill_desc": "On Turn Start absorbs (12.5%) Turn Gauge of the enemy with the strongest ATK at a 50% chance.\nOn Turn Start, removes 1 Debuff on the character.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "612",
    "char_name": "Amane",
    "char_icon": "6_Amane",
    "icon": "Weapon_601.png",
    "large_icon": "Weapon_601_m.png"
  },
  {
    "id": 602,
    "unit_id": 6,
    "name": "Android Arm Type Zero",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 9,
    "opt_type_name": "Evasion",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 613,
    "skill_name": "<Android Arm Type Zero> Dotenrin: Heavenly Reverse",
    "skill_desc": "Smites the ground, attacking ALL enemies 1 time(s).\nGrants Shield equal to 15% of ally Max. HP to ALL allies.\nDuration: 2 turn(s)\nIf the target HP is less than 75%, the effect increases to 18%.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 504.9
        }
      ],
      "hits": [
        {
          "pct": 504.9,
          "count": 1
        }
      ],
      "total": 504.9
    },
    "skill_icon": "613",
    "char_name": "Amane",
    "char_icon": "6_Amane",
    "icon": "Weapon_602.png",
    "large_icon": "Weapon_602_m.png"
  },
  {
    "id": 701,
    "unit_id": 7,
    "name": "Silver Revolver",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 712,
    "skill_name": "<Silver Revolver> Lightning Art: Heavy Lightning",
    "skill_desc": "After swiftly attacking a designated target, fires a bullet to 1 enemy with the lowest HP.\nJumps into the air and strikes powerful lightning at ALL enemies.\nWhen defeating an enemy with this skill,  Lightning Art: Heavy Lightning's Cooldown is reset.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 238.1
        }
      ],
      "hits": [
        {
          "pct": 238.1,
          "count": 1
        },
        {
          "pct": 238.1,
          "count": 1
        },
        {
          "pct": 122.0,
          "count": 1
        }
      ],
      "total": 598.2
    },
    "skill_icon": "712",
    "char_name": "Yukikaze",
    "char_icon": "7_Yukikaze",
    "icon": "Weapon_701.png",
    "large_icon": "Weapon_701_m.png"
  },
  {
    "id": 702,
    "unit_id": 7,
    "name": "Flame Tiger Custom",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 713,
    "skill_name": "<Flame Tiger Custom> Linear Thunder",
    "skill_desc": "Jumps into the air and sprays bullets at ALL enemies.\nIncreases the CRIT Rate by (15%) when attacking.\nTarget hit by a CRIT ATK is inflicted with Electrocute at a fixed chance of 35%.\nDuration: 2 turn(s)",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 467.4
        }
      ],
      "hits": [
        {
          "pct": 467.4,
          "count": 1
        }
      ],
      "total": 467.4
    },
    "skill_icon": "713",
    "char_name": "Yukikaze",
    "char_icon": "7_Yukikaze",
    "icon": "Weapon_702.png",
    "large_icon": "Weapon_702_m.png"
  },
  {
    "id": 801,
    "unit_id": 8,
    "name": "Yamidachi",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 813,
    "skill_name": "<Yamidachi> Snow Assassin",
    "skill_desc": "If the enemy dies after the attack, puts 1 Random enemy into Confusion mode at a 70% chance.\nDuration: 1 turn(s)",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "813",
    "char_name": "Yukiha",
    "char_icon": "8_Yukiha",
    "icon": "Weapon_801.png",
    "large_icon": "Weapon_801_m.png"
  },
  {
    "id": 901,
    "unit_id": 9,
    "name": "Knuckle Saw",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 13,
    "opt_type_name": "Speed",
    "opt_value": 24,
    "bonus_value": 2.4,
    "skill_id": 913,
    "skill_name": "<Knuckle Saw> Smoke Art: Flowing Smoke",
    "skill_desc": "Jumps up high into the air and drops to attack ALL enemies.\nTarget hit is inflicted with (-15%) EVD DOWN at a 90% chance.\nDuration: 2 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 458.5
        }
      ],
      "hits": [
        {
          "pct": 458.5,
          "count": 1
        }
      ],
      "total": 458.5
    },
    "skill_icon": "913",
    "char_name": "Rinka",
    "char_icon": "9_Rinka",
    "icon": "Weapon_901.png",
    "large_icon": "Weapon_901_m.png"
  },
  {
    "id": 1001,
    "unit_id": 10,
    "name": "Golden Eater",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 1012,
    "skill_name": "<Golden Eater> Gold Aegis",
    "skill_desc": "Spins the gun in a flashy manner, then shoots it into the sky and gains (40%) ATK UP.\nDuration: 2 turn(s)\nGains Extra Turn.",
    "skill_type": "[Support Skill]",
    "skill_damage": null,
    "skill_icon": "1012",
    "char_name": "Jubei",
    "char_icon": "10_Jubei",
    "icon": "Weapon_1001.png",
    "large_icon": "Weapon_1001_m.png"
  },
  {
    "id": 1101,
    "unit_id": 11,
    "name": "Zetsuei",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 1112,
    "skill_name": "<Zetsuei> Itto Style: Kogarasi-no-Kata",
    "skill_desc": "Uses Void Art to mercilessly slash the enemy, attacking 4 times.\nEach hit performs a Shield Penetrate attack.\nIf the character has 2 or more Buff, performs 1 Additional Attack.\nWhen an Additional Attack is triggered, inflicts (-24%) SPD DOWN on the target at a 99% chance.\nDuration: 2 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 128.6
        }
      ],
      "hits": [
        {
          "pct": 128.6,
          "count": 4
        }
      ],
      "add": [
        {
          "pct": 178.6,
          "count": 1
        }
      ],
      "total": 693.0
    },
    "skill_icon": "1112",
    "char_name": "Rinko",
    "char_icon": "11_Rinko",
    "icon": "Weapon_1101.png",
    "large_icon": "Weapon_1101_m.png"
  },
  {
    "id": 1102,
    "unit_id": 11,
    "name": "Suijingiri",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 1113,
    "skill_name": "<Suijingiri> Meteor Shower",
    "skill_desc": "Summons a meteorite to attack ALL enemies.\nIf the target has SPD DOWN, increases the efficacy of SPD DOWN by a fixed -10%.\nGains (19.5%) SPD UP before the attack.\nDuration: 2 turn(s)\nIf the target is the only one remaining, DMG of all attacks increases by (55%). [Always-active passive effect regardless of cooldown]",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 436.2
        }
      ],
      "hits": [
        {
          "pct": 436.2,
          "count": 1
        }
      ],
      "total": 436.2
    },
    "skill_icon": "1113",
    "char_name": "Rinko",
    "char_icon": "11_Rinko",
    "icon": "Weapon_1102.png",
    "large_icon": "Weapon_1102_m.png"
  },
  {
    "id": 1201,
    "unit_id": 12,
    "name": "Amakudari",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 1212,
    "skill_name": "<Amakudari> Itto Style: Moon Fall",
    "skill_desc": "Leaps high and slashes enemies with a sword gripped in reverse.\nTarget hit is inflicted with (-19.5%) SPD DOWN at a 95% chance.\nDuration: 2 turn(s)\nAbsorbs (12.5%) Turn Gauge at a 35% chance.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 692.2
        }
      ],
      "hits": [
        {
          "pct": 692.2,
          "count": 1
        }
      ],
      "total": 692.2
    },
    "skill_icon": "1212",
    "char_name": "Tatsuro",
    "char_icon": "12_Tatsuro",
    "icon": "Weapon_1201.png",
    "large_icon": "Weapon_1201_m.png"
  },
  {
    "id": 1301,
    "unit_id": 13,
    "name": "Hannyagiri",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 9,
    "opt_type_name": "Evasion",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 1312,
    "skill_name": "<Hannyagiri> Water Art: Crushing Wave",
    "skill_desc": "Creates a huge wave and sends it to the enemy, target hit is inflicted with Immobilize at a 60% chance.\nDuration: 2 turn(s)\nIf the character has 2 or more Buffs, increases the duration of 1 Random Buff held by ALL allies for 1 turn(s) after the attack.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 765.5
        }
      ],
      "hits": [
        {
          "pct": 765.5,
          "count": 1
        }
      ],
      "total": 765.5
    },
    "skill_icon": "1312",
    "char_name": "Shiranui",
    "char_icon": "13_Shiranui",
    "icon": "Weapon_1301.png",
    "large_icon": "Weapon_1301_m.png"
  },
  {
    "id": 1302,
    "unit_id": 13,
    "name": "Kagero",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 1314,
    "skill_name": "<Kagero> Phantom Taimanin",
    "skill_desc": "If the character has a Shield, on Turn Start, decreases the duration of 1 Random Debuffs held by ALL allies by -1 turn(s).",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "1314",
    "char_name": "Shiranui",
    "char_icon": "13_Shiranui",
    "icon": "Weapon_1302.png",
    "large_icon": "Weapon_1302_m.png"
  },
  {
    "id": 1401,
    "unit_id": 14,
    "name": "Rasetsumaru",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 1412,
    "skill_name": "<Rasetsumaru> Shikigami: Bodyguard",
    "skill_desc": "Brings the hand to the mouth and recites a spell, gains (5%) Healing Over Time and (19.5%) Power-up.\nDuration: 2 turn(s)",
    "skill_type": "[Support Skill]",
    "skill_damage": null,
    "skill_icon": "1412",
    "char_name": "Azusa",
    "char_icon": "14_Azusa",
    "icon": "Weapon_1401.png",
    "large_icon": "Weapon_1401_m.png"
  },
  {
    "id": 1402,
    "unit_id": 14,
    "name": "Kubikiri",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 1414,
    "skill_name": "<Kubikiri> Onmyo Nenryu Swordswoman",
    "skill_desc": "If the character's HP is 80% or more, CRIT Rate increases by (7.5%).",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "1414",
    "char_name": "Azusa",
    "char_icon": "14_Azusa",
    "icon": "Weapon_1402.png",
    "large_icon": "Weapon_1402_m.png"
  },
  {
    "id": 1501,
    "unit_id": 15,
    "name": "Nebula Type 2",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 13,
    "opt_type_name": "Speed",
    "opt_value": 24,
    "bonus_value": 2.4,
    "skill_id": 1513,
    "skill_name": "<Nebula Type 2> Vital Check",
    "skill_desc": "Checks the physical information of the specified target and grants a (13%) Damage Reflect\nDuration: 2 turn(s)\nAdditionally grants Immortal.\nDuration: 1 turn(s)",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": null,
    "skill_icon": "1513",
    "char_name": "Emily",
    "char_icon": "15_Emily",
    "icon": "Weapon_1501.png",
    "large_icon": "Weapon_1501_m.png"
  },
  {
    "id": 1502,
    "unit_id": 15,
    "name": "Photon Gear",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 1514,
    "skill_name": "<Photon Gear> Emergency Medical Support Unit",
    "skill_desc": "When Emily grants a Buff to allies using her skill, Target Manipulate Debuff is removed from the allies if they have Target Manipulate Debuff.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "1514",
    "char_name": "Emily",
    "char_icon": "15_Emily",
    "icon": "Weapon_1502.png",
    "large_icon": "Weapon_1502_m.png"
  },
  {
    "id": 1601,
    "unit_id": 16,
    "name": "Chrome Edge",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 1612,
    "skill_name": "<Chrome Edge> Taimanin Art: Heavenly Dance",
    "skill_desc": "Uses blades on her arms and legs to attack consecutively 5 times.\nIf the target is a Power type, DMG increases (37.5%).\nWhen defeating the enemy with this skill, resets Cooldown of Asuka Special.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 96.0
        }
      ],
      "hits": [
        {
          "pct": 96.0,
          "count": 2
        },
        {
          "pct": 120.0,
          "count": 2
        },
        {
          "pct": 144.0,
          "count": 1
        }
      ],
      "total": 576.0
    },
    "skill_icon": "1612",
    "char_name": "Asuka",
    "char_icon": "16_Asuka",
    "icon": "Weapon_1601.png",
    "large_icon": "Weapon_1601_m.png"
  },
  {
    "id": 1602,
    "unit_id": 16,
    "name": "Magnet Edge",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 1622,
    "skill_name": "<Magnet Edge> Taimanin Art: Heavenly Dance",
    "skill_desc": "Uses blades on her arms and legs to attack consecutively 5 times.\nIf the target is a Technique type, DMG increases (37.5%).\nWhen defeating the enemy with this skill, gains Extra Turn.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 96.0
        }
      ],
      "hits": [
        {
          "pct": 96.0,
          "count": 2
        },
        {
          "pct": 120.0,
          "count": 2
        },
        {
          "pct": 144.0,
          "count": 1
        }
      ],
      "total": 576.0
    },
    "skill_icon": "1622",
    "char_name": "Asuka",
    "char_icon": "16_Asuka",
    "icon": "Weapon_1602.png",
    "large_icon": "Weapon_1602_m.png"
  },
  {
    "id": 1701,
    "unit_id": 17,
    "name": "Atropos Glove",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 1713,
    "skill_name": "<Atropos Glove> Silk Barrier",
    "skill_desc": "Deploys wires to suspend ALL enemies in midair, then instantly slices and attacks them.\nInflicts (-19.5%) EVD DOWN to the target hit at a 90% chance on the Last Attack.\nDuration: 2 turn(s)\nIf the target already has EVD DOWN, reduces the Turn Gauge by (15%) at a 70% chance.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 354.8
        }
      ],
      "hits": [
        {
          "pct": 354.8,
          "count": 1
        }
      ],
      "total": 354.8
    },
    "skill_icon": "1713",
    "char_name": "Yuzuriha",
    "char_icon": "17_Yuzuriha",
    "icon": "Weapon_1701.png",
    "large_icon": "Weapon_1701_m.png"
  },
  {
    "id": 1801,
    "unit_id": 18,
    "name": "Demolisher Fist",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 9,
    "opt_type_name": "Evasion",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 1811,
    "skill_name": "<Demolisher Fist> Taimanin Art: Fist",
    "skill_desc": "Delivers 3 powerful punches at the enemy. DMG increases as DEF increases.\nGrants 45% Protect Ally to the ally with the lowest HP on Last Attack.\nDuration: 2 turn(s)",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 126.0
        },
        {
          "stat": "DEF",
          "pct": 84
        }
      ],
      "hits": [
        {
          "pct": 126.0,
          "count": 3
        }
      ],
      "total": null
    },
    "skill_icon": "1811",
    "char_name": "Jinglei",
    "char_icon": "18_Jinglei",
    "icon": "Weapon_1801.png",
    "large_icon": "Weapon_1801_m.png"
  },
  {
    "id": 1802,
    "unit_id": 18,
    "name": "Companion Hand",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 1813,
    "skill_name": "<Companion Hand> Kokuryuha",
    "skill_desc": "Unleashes the power of the dragon and attacks ALL enemies.\nPerforms a (60%) DEF Penetrate attack to the target hit.\nOn Last Attack, reduces the Turn Gauge of the enemy with the highest ATK by (15%) at a 65% chance.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 214.9
        }
      ],
      "hits": [
        {
          "pct": 214.9,
          "count": 2
        }
      ],
      "total": 429.8
    },
    "skill_icon": "1813",
    "char_name": "Jinglei",
    "char_icon": "18_Jinglei",
    "icon": "Weapon_1802.png",
    "large_icon": "Weapon_1802_m.png"
  },
  {
    "id": 1901,
    "unit_id": 19,
    "name": "Combat Axe",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 1912,
    "skill_name": "<Combat Axe> Fortification",
    "skill_desc": "Gains a Shield equal to 19.5% of the character's Max. HP.\nDuration: 2 turn(s)\nTaunts ALL enemies at a fixed chance of 35%\nDuration: 2 turn(s)",
    "skill_type": "[Support Skill]",
    "skill_damage": null,
    "skill_icon": "1912",
    "char_name": "Murasaki",
    "char_icon": "19_Murasaki",
    "icon": "Weapon_1901.png",
    "large_icon": "Weapon_1901_m.png"
  },
  {
    "id": 1902,
    "unit_id": 19,
    "name": "Killing Spree",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 1914,
    "skill_name": "<Killing Spree> Awakened Immortal",
    "skill_desc": "Murasaki doesn't go down easily.\nWhen defeated after being attacked by an enemy, she resurrects at 30% of Max. HP and enters an Immortal state.\nDuration: 1 turn(s)\nWhen an enemy uses a skill that grants ATK UP Buff, Taunts 2 enemies with the highest ATK.\n[Always-active passive effect regardless of cooldown]\nDuration: 1 turn(s)",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "1914",
    "char_name": "Murasaki",
    "char_icon": "19_Murasaki",
    "icon": "Weapon_1902.png",
    "large_icon": "Weapon_1902_m.png"
  },
  {
    "id": 2001,
    "unit_id": 20,
    "name": "Witch Sleeve",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 13,
    "opt_type_name": "Speed",
    "opt_value": 24,
    "bonus_value": 2.4,
    "skill_id": 2012,
    "skill_name": "<Witch Sleeve> Alluring Touch",
    "skill_desc": "Attacks ALL enemies with alluring gestures.\nTarget hit is Taunted at a 45% chance.\nDuration: 2 turn(s)\nIf the target already is Taunted, puts them in Confusion state at a fixed chance of 30%.\nDuration: 1 turn(s)\nIf the target is an Agility type, decreases (15%) of their Turn Gauge at a 95% chance.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 366.1
        }
      ],
      "hits": [
        {
          "pct": 366.1,
          "count": 1
        }
      ],
      "total": 366.1
    },
    "skill_icon": "2012",
    "char_name": "Natsume",
    "char_icon": "20_Natsume",
    "icon": "Weapon_2001.png",
    "large_icon": "Weapon_2001_m.png"
  },
  {
    "id": 2101,
    "unit_id": 21,
    "name": "Jet Black & Pitch Black",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 2112,
    "skill_name": "<Jet Black & Pitch Black> Wind Art: Wind Cloak",
    "skill_desc": "Uses Wind Art to to sharpen the swords further.\nGains (32.5%) CRIT Rate UP.\nDuration: 2 turn(s)\nOn every CRIT ATK, decreases (15%) of the target's Turn Gauge at a 20% chance.\n[Always-active passive effect regardless of cooldown]",
    "skill_type": "[Support Skill]",
    "skill_damage": null,
    "skill_icon": "2112",
    "char_name": "Kurenai",
    "char_icon": "21_Kurenai",
    "icon": "Weapon_2101.png",
    "large_icon": "Weapon_2101_m.png"
  },
  {
    "id": 2102,
    "unit_id": 21,
    "name": "Warrior's Dual Sword",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 2114,
    "skill_name": "<Warrior's Dual Sword> Crimson Princess of Bloodshed",
    "skill_desc": "Attacking an enemy with Shield, CRIT DMG increases by (10%).\nApplies to all skills.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "2114",
    "char_name": "Kurenai",
    "char_icon": "21_Kurenai",
    "icon": "Weapon_2102.png",
    "large_icon": "Weapon_2102_m.png"
  },
  {
    "id": 2201,
    "unit_id": 22,
    "name": "Kijingiri",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 2212,
    "skill_name": "<Kijingiri> Ghost Arm",
    "skill_desc": "On every attack, CRIT Rate increases by (15%)\nWhen defeating the enemy, restores HP of 1 ally with the lowest HP by 6% of the target.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "2212",
    "char_name": "Mikoto",
    "char_icon": "22_Mikoto",
    "icon": "Weapon_2201.png",
    "large_icon": "Weapon_2201_m.png"
  },
  {
    "id": 2301,
    "unit_id": 23,
    "name": "Black Iron Claw",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 2313,
    "skill_name": "<Black Iron Claw> Wicked Slasher",
    "skill_desc": "Lightly jumps and stabs the enemy with their claws.\nPerforms a (30%) Bleed Debuff Resonance attack.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 894.6
        }
      ],
      "hits": [
        {
          "pct": 894.6,
          "count": 1
        }
      ],
      "total": 894.6
    },
    "skill_icon": "2313",
    "char_name": "Oboro",
    "char_icon": "23_Oboro",
    "icon": "Weapon_2301.png",
    "large_icon": "Weapon_2301_m.png"
  },
  {
    "id": 2302,
    "unit_id": 23,
    "name": "Taima Claw: Misty Moon",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 9,
    "opt_type_name": "Evasion",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 2314,
    "skill_name": "<Taima Claw: Misty Moon> Traitor Taimanin",
    "skill_desc": "Performs a (15%) Life Steal when attacking.\nFor each Bleed inflicted on the enemy, increases DMG by 10%.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "2314",
    "char_name": "Oboro",
    "char_icon": "23_Oboro",
    "icon": "Weapon_2302.png",
    "large_icon": "Weapon_2302_m.png"
  },
  {
    "id": 2401,
    "unit_id": 24,
    "name": "Yukibana",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 2413,
    "skill_name": "<Yukibana> Frost Shield",
    "skill_desc": "Gathers cold air into a single point, grants ALL allies (2) Protective Shields.\nDuration: 2 turn(s)",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": null,
    "skill_icon": "2413",
    "char_name": "Kirara",
    "char_icon": "24_Kirara",
    "icon": "Weapon_2401.png",
    "large_icon": "Weapon_2401_m.png"
  },
  {
    "id": 2402,
    "unit_id": 24,
    "name": "Kohakucho",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 2414,
    "skill_name": "<Kohakucho> Hybrid Taimanin",
    "skill_desc": "If the target has Debuff, each hit inflicts Buff Disabled at a 15%.\nDuration: 2 turn(s)",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "2414",
    "char_name": "Kirara",
    "char_icon": "24_Kirara",
    "icon": "Weapon_2402.png",
    "large_icon": "Weapon_2402_m.png"
  },
  {
    "id": 2501,
    "unit_id": 25,
    "name": "Sol Brave",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 2512,
    "skill_name": "<Sol Brave> Evil Flame Slash",
    "skill_desc": "Performs a consecutive sword dance to attack the enemy 4 times.\nTarget hit has their Turn Gauge decreased by (15%) at a 10% chance.\nPerforms 2 Additional Attacks and deals (30%) Burn Debuff Resonance.\nIf the target's SPD is higher than the character's, damage dealt increases based on the difference.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 99.5
        }
      ],
      "hits": [
        {
          "pct": 99.5,
          "count": 4
        }
      ],
      "add": [
        {
          "pct": 138.2,
          "count": 1
        }
      ],
      "total": 536.2
    },
    "skill_icon": "2512",
    "char_name": "Ingrid",
    "char_icon": "25_Ingrid",
    "icon": "Weapon_2501.png",
    "large_icon": "Weapon_2501_m.png"
  },
  {
    "id": 2502,
    "unit_id": 25,
    "name": "Kurayami",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 2513,
    "skill_name": "<Kurayami> Gniel's Evil Flames",
    "skill_desc": "Wraps black flames around the sword to swiftly pierce the enemy.\nTarget hit is inflicted with (3.5%) Burn at a 95% chance.\nDuration: 3 turn(s)\nWhen defeating an enemy with this skill, ALL enemies are inflicted with (3.5%) Burn at a 90% chance.\nDuration: 3 turn(s)\nIf the target's SPD is higher than the character's, damage dealt increases based on the difference.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 851.1
        }
      ],
      "hits": [
        {
          "pct": 851.1,
          "count": 1
        }
      ],
      "total": 851.1
    },
    "skill_icon": "2513",
    "char_name": "Ingrid",
    "char_icon": "25_Ingrid",
    "icon": "Weapon_2502.png",
    "large_icon": "Weapon_2502_m.png"
  },
  {
    "id": 2601,
    "unit_id": 26,
    "name": "Ruby Heart",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 2613,
    "skill_name": "<Ruby Heart> Howard's Astound",
    "skill_desc": "Transforms into a demon and rips the enemy to shreds.\nDamage increases in proportion to HP lost.\nConsumes -15% of the character's HP to increase DMG by (37.5%) before the attack.\nIf HP is less than 60% when attacking, CRIT Rate increases by (55%).\nIf HP is less than 30% when attacking, CRIT DMG increases by (80%).",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 609.8
        },
        {
          "stat": "Lost HP",
          "pct": 29
        }
      ],
      "hits": [
        {
          "pct": 609.8,
          "count": 1
        }
      ],
      "total": null
    },
    "skill_icon": "2613",
    "char_name": "Noah",
    "char_icon": "26_Noah",
    "icon": "Weapon_2601.png",
    "large_icon": "Weapon_2601_m.png"
  },
  {
    "id": 2602,
    "unit_id": 26,
    "name": "Love of Restraints",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 2614,
    "skill_name": "<Love of Restraints> Manmade Demon",
    "skill_desc": "Recovers 4.5% of Max. HP whenever an enemy dies, and fills Turn Gauge by (20%) at a 20% chance.\nThe DMG of all of Noah's skills increase the lower the HP.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "2614",
    "char_name": "Noah",
    "char_icon": "26_Noah",
    "icon": "Weapon_2602.png",
    "large_icon": "Weapon_2602_m.png"
  },
  {
    "id": 2701,
    "unit_id": 27,
    "name": "Throne Bracelet",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 2712,
    "skill_name": "<Throne Bracelet> Heat Wave",
    "skill_desc": "Attacks ALL enemies by lighting the ground beneath them on fire.\nInflicts (3.5%) Burn at a 60% chance on Last Attack.\nDuration: 3 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 418.4
        }
      ],
      "hits": [
        {
          "pct": 418.4,
          "count": 1
        }
      ],
      "total": 418.4
    },
    "skill_icon": "2712",
    "char_name": "Astaroth",
    "char_icon": "27_Astaroth",
    "icon": "Weapon_2701.png",
    "large_icon": "Weapon_2701_m.png"
  },
  {
    "id": 2702,
    "unit_id": 27,
    "name": "Ruby Eye",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 2714,
    "skill_name": "<Ruby Eye> Queen of the Inferno",
    "skill_desc": "When attacking an enemy with Burn, performs a (15%) DEF Penetrate attack.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "2714",
    "char_name": "Astaroth",
    "char_icon": "27_Astaroth",
    "icon": "Weapon_2702.png",
    "large_icon": "Weapon_2702_m.png"
  },
  {
    "id": 2801,
    "unit_id": 28,
    "name": "Myoren",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 9,
    "opt_type_name": "Evasion",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 2812,
    "skill_name": "<Myoren> Evil Eye: Clairvoyance",
    "skill_desc": "Uses Clairvoyance to grant a (27%) SPD UP to 1 ally and herself.\nDuration: 2 turn(s)\nReduces the Cooldown of all affected allies' skills by -1 turn(s).\nIf the affected ally is an Agility type, additionally grants Debuff Block.\nDuration: 2 turn(s)",
    "skill_type": "[Support Skill]",
    "skill_damage": null,
    "skill_icon": "2812",
    "char_name": "Tokiko",
    "char_icon": "28_Tokiko",
    "icon": "Weapon_2801.png",
    "large_icon": "Weapon_2801_m.png"
  },
  {
    "id": 2802,
    "unit_id": 28,
    "name": "Sagiri",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 2822,
    "skill_name": "<Sagiri> Evil Eye: Clairvoyance",
    "skill_desc": "Uses Clairvoyance to grant a (45%) ATK UP to 1 ally.\nDuration: 2 turn(s)\nReduces the Cooldown of all affected allies' skills by -1 turn(s) and additionally grants Debuff Block.\nDuration: 2 turn(s)",
    "skill_type": "[Support Skill]",
    "skill_damage": null,
    "skill_icon": "2822",
    "char_name": "Tokiko",
    "char_icon": "28_Tokiko",
    "icon": "Weapon_2802.png",
    "large_icon": "Weapon_2802_m.png"
  },
  {
    "id": 2901,
    "unit_id": 29,
    "name": "Thorn Knight",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 2913,
    "skill_name": "<Thorn Knight> Sprout Garden",
    "skill_desc": "With an elegant dance, petals flutter, restoring the HP of ALL allies by 22.5% of the character's own Max. HP.\nIf the target's HP is more than 65% after healing, fills their Turn Gauge by (20%) at a 100% chance.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": null,
    "skill_icon": "2913",
    "char_name": "Shizuru",
    "char_icon": "29_Shizuru",
    "icon": "Weapon_2901.png",
    "large_icon": "Weapon_2901_m.png"
  },
  {
    "id": 2902,
    "unit_id": 29,
    "name": "Queen's Rose",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 2914,
    "skill_name": "<Queen's Rose> Shizuru of Flowers",
    "skill_desc": "When hit by an all-target attack, grants the ally with the lowest HP a (7%) Healing Over Time.\nDuration: 3 turn(s)",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "2914",
    "char_name": "Shizuru",
    "char_icon": "29_Shizuru",
    "icon": "Weapon_2902.png",
    "large_icon": "Weapon_2902_m.png"
  },
  {
    "id": 3001,
    "unit_id": 30,
    "name": "Crow's Beak",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 13,
    "opt_type_name": "Speed",
    "opt_value": 24,
    "bonus_value": 2.4,
    "skill_id": 3012,
    "skill_name": "<Crow's Beak> Seven Hells",
    "skill_desc": "After launching the enemy into the air, jumps up and attacks 4 times in total.\nTarget hit is inflicted (10%) Bleed at a 10% chance.\nDuration: 3 turn(s)\nWhen Vampire Princess is on Cooldown, performs an Additional Attack 1 time.\nOn Last Attack, increases Bleed effect by 1 turn(s).\nDuration: 1 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 116.3
        }
      ],
      "hits": [
        {
          "pct": 116.3,
          "count": 4
        }
      ],
      "add": [
        {
          "pct": 161.5,
          "count": 1
        }
      ],
      "total": 626.7
    },
    "skill_icon": "3012",
    "char_name": "Felicia",
    "char_icon": "30_Felicia",
    "icon": "Weapon_3001.png",
    "large_icon": "Weapon_3001_m.png"
  },
  {
    "id": 3002,
    "unit_id": 30,
    "name": "Soul Eraser",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 3013,
    "skill_name": "<Soul Eraser> Immortal Hunting",
    "skill_desc": "Strikes an enemy with a scythe.\nWhen the target has 3 or more Debuffs, and the character's HP is less than 30%, attacking an enemy deals Instant Death at a fixed chance of 75%.\nIncreases the duration of all Buffs by 1 turn after the attack.\nSteals Immortal from the enemy before the attack.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 782.8
        }
      ],
      "hits": [
        {
          "pct": 782.8,
          "count": 1
        }
      ],
      "total": 782.8
    },
    "skill_icon": "3013",
    "char_name": "Felicia",
    "char_icon": "30_Felicia",
    "icon": "Weapon_3002.png",
    "large_icon": "Weapon_3002_m.png"
  },
  {
    "id": 3101,
    "unit_id": 31,
    "name": "Firestarter",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 3112,
    "skill_name": "<Firestarter> Blazing Barrage",
    "skill_desc": "Jumps into the air and fires the bazooka toward the ground, attacking ALL enemies.\nDMG increases in proportion to their current HP\nIf the target's HP is less than 50%, increases DMG by (37.5%).",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 288.9
        },
        {
          "stat": "Current HP",
          "pct": 14
        }
      ],
      "hits": [
        {
          "pct": 288.9,
          "count": 1
        }
      ],
      "total": null
    },
    "skill_icon": "3112",
    "char_name": "Maika",
    "char_icon": "31_Maika",
    "icon": "Weapon_3101.png",
    "large_icon": "Weapon_3101_m.png"
  },
  {
    "id": 3102,
    "unit_id": 31,
    "name": "Nuclear Option",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 3113,
    "skill_name": "<Nuclear Option> Meido Bazooka <Grenade>",
    "skill_desc": "After jumping into the air, fires a super-heated flame bullet toward the ground, attacking ALL enemies.\nWhen an enemy is defeated by this skill, resets Cooldown of Blazing Barrage.\nInflicts (3.5%) Burn to ALL enemies at a 75% chance before the attack.\nDuration: 3 turn(s)",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 467.4
        }
      ],
      "hits": [
        {
          "pct": 467.4,
          "count": 1
        }
      ],
      "total": 467.4
    },
    "skill_icon": "3113",
    "char_name": "Maika",
    "char_icon": "31_Maika",
    "icon": "Weapon_3102.png",
    "large_icon": "Weapon_3102_m.png"
  },
  {
    "id": 3201,
    "unit_id": 32,
    "name": "Lightning Saber II Raizin",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 3213,
    "skill_name": "<Lightning Saber II Raizin> Lightning Art: Chain Volt",
    "skill_desc": "Overcharges both swords with electricity and slashes at the enemy.\nRemoves the target's 1 Random Buffs and inflicts Faint at a 20% chance on the Last Attack.\nDuration: 1 turn(s)\nIf the character performs CRIT ATK, absorbs (12.5%) of the Turn Gauge at a 60% chance.\nIf the character has Overclock, increases CRIT Rate by (37.5%).",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 835.9
        }
      ],
      "hits": [
        {
          "pct": 835.9,
          "count": 1
        }
      ],
      "total": 835.9
    },
    "skill_icon": "3213",
    "char_name": "Rin",
    "char_icon": "32_Rin",
    "icon": "Weapon_3201.png",
    "large_icon": "Weapon_3201_m.png"
  },
  {
    "id": 3202,
    "unit_id": 32,
    "name": "Mist Grave",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 9,
    "opt_type_name": "Evasion",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 3214,
    "skill_name": "<Mist Grave> Volt Taimanin",
    "skill_desc": "If the target is inflicted with Electrocute, DMG increases by (7.5%).\nIf the target is inflicted with Faint, CRIT Rate increases by (7.5%).\nOn Turn Start, gains (30%) Overclock if the character has ATK UP.\nDuration: 2 turn(s)\nInflicts Electrocute on 2 Random enemies upon death. This effect ignores Debuff Block.\nDuration: 2 turn(s)",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "3214",
    "char_name": "Rin",
    "char_icon": "32_Rin",
    "icon": "Weapon_3202.png",
    "large_icon": "Weapon_3202_m.png"
  },
  {
    "id": 3301,
    "unit_id": 33,
    "name": "Abyssal Rakshasa",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 13,
    "opt_type_name": "Speed",
    "opt_value": 24,
    "bonus_value": 2.4,
    "skill_id": 3312,
    "skill_name": "<Abyssal Rakshasa> Phantom Flash: Crimson",
    "skill_desc": "Rapidly slashes the enemy 4 time(s) from various angles.\nTarget hit is inflicted with Faint at a 15% chance on the Last Attack, and if the target is a boss, the chance becomes 45%.\nDuration: 1 turn(s)\nTarget hit is inflicted with (18%) Weaken at a 40% chance on the Last Attack, and if the target is a boss, inflicts (27%) Weaken at a 60% chance.\nDuration: 2 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 165.0
        }
      ],
      "hits": [
        {
          "pct": 165.0,
          "count": 4
        }
      ],
      "total": 660.0
    },
    "skill_icon": "3312",
    "char_name": "Annerose",
    "char_icon": "33_Annerose",
    "icon": "Weapon_3301.png",
    "large_icon": "Weapon_3301_m.png"
  },
  {
    "id": 3302,
    "unit_id": 33,
    "name": "Vajra Blue Lightning",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 3311,
    "skill_name": "<Vajra Blue Lightning> Myriad Flash Slashes",
    "skill_desc": "Annerose stabs the enemy 4 time(s) with her unique swordsmanship.\nDMG increases equal to 1.5% of the target's lost HP when attacking.",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 126.0
        }
      ],
      "hits": [
        {
          "pct": 126.0,
          "count": 4
        }
      ],
      "total": 504.0
    },
    "skill_icon": "3311",
    "char_name": "Annerose",
    "char_icon": "33_Annerose",
    "icon": "Weapon_3302.png",
    "large_icon": "Weapon_3302_m.png"
  },
  {
    "id": 3401,
    "unit_id": 34,
    "name": "Assault Tactical Dagger",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 3414,
    "skill_name": "<Assault Tactical Dagger> Fuuma's Combat Machine",
    "skill_desc": "When the character is hit, gains (20%) CRIT Rate UP at a 45% chance.\nDuration: 2 turn(s)\nIf the character already has CRIT Rate UP, increases the CRIT Rate UP effect by a fixed 10% each time the character is hit at a 25% chance.\nIf the character has a Shield, increases CRIT Rate by (7.5%).",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "3414",
    "char_name": "Amane",
    "char_icon": "34_Amane",
    "icon": "Weapon_3401.png",
    "large_icon": "Weapon_3401_m.png"
  },
  {
    "id": 3402,
    "unit_id": 34,
    "name": "Grid Edge Blade",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 3412,
    "skill_name": "<Grid Edge Blade> Fuuma Martial Art: Shatter",
    "skill_desc": "Attacks the enemy 4 times with a dagger and then a laser from the left hand.\nInflicts (-40%) DEF DOWN before the attack.\nDuration: 2 turn(s)\nGains (10%) Damage Reflect after the attack. \nDuration: 2 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 173.1
        }
      ],
      "hits": [
        {
          "pct": 173.1,
          "count": 4
        }
      ],
      "total": 692.4
    },
    "skill_icon": "3412",
    "char_name": "Amane",
    "char_icon": "34_Amane",
    "icon": "Weapon_3402.png",
    "large_icon": "Weapon_3402_m.png"
  },
  {
    "id": 3501,
    "unit_id": 35,
    "name": "Hyakuren",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 3511,
    "skill_name": "<Hyakuren> Flaming Spear",
    "skill_desc": "Charges while mounted on a spear and attacks 2 times.\nIf the target is inflicted with Burn, CRIT Rate increases 7.5%.",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 252.0
        }
      ],
      "hits": [
        {
          "pct": 252.0,
          "count": 2
        }
      ],
      "total": 504.0
    },
    "skill_icon": "3511",
    "char_name": "Homura",
    "char_icon": "35_Homura",
    "icon": "Weapon_3501.png",
    "large_icon": "Weapon_3501_m.png"
  },
  {
    "id": 3502,
    "unit_id": 35,
    "name": "Tsukiyo",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 13,
    "opt_type_name": "Speed",
    "opt_value": 24,
    "bonus_value": 2.4,
    "skill_id": 3514,
    "skill_name": "<Tsukiyo> Flaming Spear Battler",
    "skill_desc": "When attacking an enemy with HP at 70% or more, reduces 1 turn(s) of 1 Random Buff they possess.\nWhen attacking an enemy with HP less than 40%, performs a (15%) DEF Penetrate attack.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "3514",
    "char_name": "Homura",
    "char_icon": "35_Homura",
    "icon": "Weapon_3502.png",
    "large_icon": "Weapon_3502_m.png"
  },
  {
    "id": 3601,
    "unit_id": 36,
    "name": "Origami Shuriken",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 3612,
    "skill_name": "<Origami Shuriken> Paper Spirit: Defense",
    "skill_desc": "Protects the character and 1 ally with paper, granting (45%) DEF UP.\nDuration: 2 turn(s)\nRestores 31.5% of the ally’s Max. HP.\nIf the character has DEF UP on Turn Start, reduces the Cooldown of The Paper Spirit Taimanin by -1 turn(s). [Always-active passive effect regardless of cooldown]",
    "skill_type": "[Support Skill]",
    "skill_damage": null,
    "skill_icon": "3612",
    "char_name": "Mai",
    "char_icon": "36_Mai",
    "icon": "Weapon_3601.png",
    "large_icon": "Weapon_3601_m.png"
  },
  {
    "id": 3602,
    "unit_id": 36,
    "name": "Origami Dagger",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 3613,
    "skill_name": "<Origami Dagger> Paper Spirit: Absolute Barrier",
    "skill_desc": "Builds a giant paper wall and grants (2) Protective Shields to ALL allies.\nDuration: 2 turn(s)\nGrants (7%)  Healing Over Time to allies whose HP is less than 50%.\nDuration: 3 turn(s)",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": null,
    "skill_icon": "3613",
    "char_name": "Mai",
    "char_icon": "36_Mai",
    "icon": "Weapon_3602.png",
    "large_icon": "Weapon_3602_m.png"
  },
  {
    "id": 3701,
    "unit_id": 37,
    "name": "Nikko",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 3713,
    "skill_name": "<Nikko> Wind Art: Rampaging Gust",
    "skill_desc": "Makes a large tornado and sends it toward ALL enemies.\nPerforms a Shield Penetrate attack.\nWhen defeating an enemy with this skill, fills (20%) of the Turn Gauge at a 95% chance for ALL allies.\nSteals the SPD UP Buff of ALL enemies before the attack.\nDamage increases in proportion to SPD.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 301.1
        },
        {
          "stat": "SPD",
          "pct": 1704
        }
      ],
      "hits": [
        {
          "pct": 301.1,
          "count": 1
        }
      ],
      "total": null
    },
    "skill_icon": "3713",
    "char_name": "Mitsuki",
    "char_icon": "37_Mitsuki",
    "icon": "Weapon_3701.png",
    "large_icon": "Weapon_3701_m.png"
  },
  {
    "id": 3702,
    "unit_id": 37,
    "name": "Uzumaki",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 3714,
    "skill_name": "<Uzumaki> Fan of the Storm",
    "skill_desc": "On every CRIT ATK, absorbs (12.5%) of the Turn Gauge at a 5% chance.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "3714",
    "char_name": "Mitsuki",
    "char_icon": "37_Mitsuki",
    "icon": "Weapon_3702.png",
    "large_icon": "Weapon_3702_m.png"
  },
  {
    "id": 3901,
    "unit_id": 39,
    "name": "Spring Breeze",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 9,
    "opt_type_name": "Evasion",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 3911,
    "skill_name": "<Spring Breeze> Taimanin Art: Spear",
    "skill_desc": "Using the character's abilities and spear, attacks the enemy a total of 3 times.\nTaunts the target hit at a 5% chance.\nDuration: 2 turn(s)\nDamage increases in proportion to HP lost.",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 134.0
        },
        {
          "stat": "Lost HP",
          "pct": 6
        }
      ],
      "hits": [
        {
          "pct": 134.0,
          "count": 3
        }
      ],
      "total": null
    },
    "skill_icon": "3911",
    "char_name": "Fuyumi",
    "char_icon": "39_Fuyumi",
    "icon": "Weapon_3901.png",
    "large_icon": "Weapon_3901_m.png"
  },
  {
    "id": 3902,
    "unit_id": 39,
    "name": "Haruhara",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 3912,
    "skill_name": "<Haruhara> Reorganize",
    "skill_desc": "Assumes a battle ready stance and gains an Extra Turn, restoring 18% of Max. HP.",
    "skill_type": "[Support Skill]",
    "skill_damage": null,
    "skill_icon": "3912",
    "char_name": "Fuyumi",
    "char_icon": "39_Fuyumi",
    "icon": "Weapon_3902.png",
    "large_icon": "Weapon_3902_m.png"
  },
  {
    "id": 4001,
    "unit_id": 40,
    "name": "Suitenko",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 4011,
    "skill_name": "<Suitenko> Cross Slash",
    "skill_desc": "Launches a cross-shaped sword aura at the enemy.\nTarget hit is inflicted with (3.5%) Burn at a 15% chance.\nDuration: 3 turn(s)",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 504.0
        }
      ],
      "hits": [
        {
          "pct": 504.0,
          "count": 1
        }
      ],
      "total": 504.0
    },
    "skill_icon": "4011",
    "char_name": "Rika",
    "char_icon": "40_Rika",
    "icon": "Weapon_4001.png",
    "large_icon": "Weapon_4001_m.png"
  },
  {
    "id": 4101,
    "unit_id": 41,
    "name": "Tara's Steel Staff",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 4111,
    "skill_name": "<Tara's Steel Staff> Monk Staff Art",
    "skill_desc": "Stabs the enemy with a stone scepter, attacking 4 times.\nRestores ALL allies' HP on Last Attack by 4% of Max. HP.",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 118.1
        }
      ],
      "hits": [
        {
          "pct": 118.1,
          "count": 4
        }
      ],
      "total": 472.4
    },
    "skill_icon": "4111",
    "char_name": "Hisui",
    "char_icon": "41_Hisui",
    "icon": "Weapon_4101.png",
    "large_icon": "Weapon_4101_m.png"
  },
  {
    "id": 4102,
    "unit_id": 41,
    "name": "Jizo's Steel Staff",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 13,
    "opt_type_name": "Speed",
    "opt_value": 24,
    "bonus_value": 2.4,
    "skill_id": 4114,
    "skill_name": "<Jizo's Steel Staff> Eclipse Meld: Resonate",
    "skill_desc": "Using a skill on every 4th turn grants an additional effect.\nWhen using Monk Staff Art, Healing Effect increases by (100%).\nWhen using Eclipse Meld: Syphoning Strike, inflicts Immobilize on an enemy at a 50% chance.\nDuration: 2 turn(s)\nWhen using Eclipse Meld: Sound, grants a (7%) Healing Over Time to all allies for 2 turn(s).",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "4114",
    "char_name": "Hisui",
    "char_icon": "41_Hisui",
    "icon": "Weapon_4102.png",
    "large_icon": "Weapon_4102_m.png"
  },
  {
    "id": 4201,
    "unit_id": 42,
    "name": "TMN-Red",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 4213,
    "skill_name": "<TMN-Red> Wave Art: Arrowing Light",
    "skill_desc": "Summons a Guardian that unleashes a powerful wave at the enemy, attacking 4 times.\nRemoves all of the target's Buffs before the attack.\nGrants Shield equal to 205% of the character's DEF to an ally with the highest ATK except self after the attack.\nDuration: 2 turn(s)\nDamage increases in proportion to DEF.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 173.0
        },
        {
          "stat": "DEF",
          "pct": 113
        }
      ],
      "hits": [
        {
          "pct": 173.0,
          "count": 4
        }
      ],
      "total": null
    },
    "skill_icon": "4213",
    "char_name": "Shisui",
    "char_icon": "42_Shisui",
    "icon": "Weapon_4201.png",
    "large_icon": "Weapon_4201_m.png"
  },
  {
    "id": 4202,
    "unit_id": 42,
    "name": "Pussycat Headphones",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 4214,
    "skill_name": "<Pussycat Headphones> Guardian's Touchdown",
    "skill_desc": "If HP is less than 50%, grants (3) Protective Shield to the character when hit.\nDuration: 2 turn(s)\nIf the enemy uses a Debuff Block skill, decreases the duration of ALL enemies' Debuff Block Buff by -1 turn(s).\n[Always-active passive effect regardless of cooldown]",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "4214",
    "char_name": "Shisui",
    "char_icon": "42_Shisui",
    "icon": "Weapon_4202.png",
    "large_icon": "Weapon_4202_m.png"
  },
  {
    "id": 4301,
    "unit_id": 43,
    "name": "Higure",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 4313,
    "skill_name": "<Higure> Apprentice Taimanin",
    "skill_desc": "If the character has a Buff, inflicts (3.5%) Burn to the target at a 15% chance.\nDuration: 3 turn(s)",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "4313",
    "char_name": "Sora",
    "char_icon": "43_Sora",
    "icon": "Weapon_4301.png",
    "large_icon": "Weapon_4301_m.png"
  },
  {
    "id": 4401,
    "unit_id": 44,
    "name": "Zetsuen",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 4413,
    "skill_name": "<Zetsuen> Soul Art: Soul Resurrection",
    "skill_desc": "When the enemy dies, fills (20%) of the Turn Gauge of ALL allies at a 50% chance.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "4413",
    "char_name": "Koro",
    "char_icon": "44_Koro",
    "icon": "Weapon_4401.png",
    "large_icon": "Weapon_4401_m.png"
  },
  {
    "id": 4501,
    "unit_id": 45,
    "name": "Giren",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 9,
    "opt_type_name": "Evasion",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 4512,
    "skill_name": "<Giren> Chasing Slash",
    "skill_desc": "Swings a sword left and right to attack the enemy 4 times.\nIf the target has Bleed, inflicts (22.5%) Weaken at a 50% chance on the Last Attack.\nDuration: 2 turn(s)\nGains (32.5%) CRIT Rate UP before the attack. \nDuration: 2 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 173.1
        }
      ],
      "hits": [
        {
          "pct": 173.1,
          "count": 4
        }
      ],
      "total": 692.4
    },
    "skill_icon": "4512",
    "char_name": "Aki",
    "char_icon": "45_Aki",
    "icon": "Weapon_4501.png",
    "large_icon": "Weapon_4501_m.png"
  },
  {
    "id": 4502,
    "unit_id": 45,
    "name": "Nasara",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 4513,
    "skill_name": "<Nasara> Death Splinter: Afterlife",
    "skill_desc": "Uses quick-draw technique to slash ALL enemies horizontally.\nWhen using the skill, increases CRIT Rate by (30%).\nIf the character has 1 or more Buffs, increases CRIT DMG by (65%).\nOn the Last Attack, performs a (30%)Bleed Debuff Resonance attack.\nAfter the Debuff Resonance attack, inflicts the target with a (10%) Bleed.\nDuration: 3 turn(s)",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 405.0
        }
      ],
      "hits": [
        {
          "pct": 405.0,
          "count": 1
        }
      ],
      "total": 405.0
    },
    "skill_icon": "4513",
    "char_name": "Aki",
    "char_icon": "45_Aki",
    "icon": "Weapon_4502.png",
    "large_icon": "Weapon_4502_m.png"
  },
  {
    "id": 4601,
    "unit_id": 46,
    "name": "Phaser Blaster",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 4611,
    "skill_name": "<Phaser Blaster> Wild Fire",
    "skill_desc": "Rapidly fires both pistols to attack the enemy 5 times.\nTarget hit is inflicted with (19.5%) Weaken at a 5% chance.\nDuration: 2 turn(s)",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 100.8
        }
      ],
      "hits": [
        {
          "pct": 100.8,
          "count": 5
        }
      ],
      "total": 504.0
    },
    "skill_icon": "4611",
    "char_name": "Aina",
    "char_icon": "46_Aina",
    "icon": "Weapon_4601.png",
    "large_icon": "Weapon_4601_m.png"
  },
  {
    "id": 4602,
    "unit_id": 46,
    "name": "Game Changer",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 4613,
    "skill_name": "<Game Changer> Full Burst",
    "skill_desc": "Fires a powerful laser beam towards an enemy with the drone.\nGains a (25%) ACC UP before the attack.\nDuration: 2 turn(s)\nWhen attacking the only remaining enemy, CRIT Rate increases by (37.5%).",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 279.6
        }
      ],
      "hits": [
        {
          "pct": 279.6,
          "count": 3
        }
      ],
      "total": 838.8
    },
    "skill_icon": "4613",
    "char_name": "Aina",
    "char_icon": "46_Aina",
    "icon": "Weapon_4602.png",
    "large_icon": "Weapon_4602_m.png"
  },
  {
    "id": 4701,
    "unit_id": 47,
    "name": "Dreadnought Leg",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 13,
    "opt_type_name": "Speed",
    "opt_value": 24,
    "bonus_value": 2.4,
    "skill_id": 4713,
    "skill_name": "<Dreadnought Leg> Shadowless Kick",
    "skill_desc": "Runs toward the enemy and attacks with an axe kick.\nIncreases CRIT DMG by (55%) per Buff they have.\nStacks up to 5.\nDefeating an enemy with this skill grants an extra turn.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 668.7
        }
      ],
      "hits": [
        {
          "pct": 668.7,
          "count": 1
        }
      ],
      "total": 668.7
    },
    "skill_icon": "4713",
    "char_name": "Saika",
    "char_icon": "47_Saika",
    "icon": "Weapon_4701.png",
    "large_icon": "Weapon_4701_m.png"
  },
  {
    "id": 4702,
    "unit_id": 47,
    "name": "Cyborg Kick",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 4714,
    "skill_name": "<Cyborg Kick> Takedown",
    "skill_desc": "If the target has 2 or more Debuffs, CRIT DMG increases by (10%).",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "4714",
    "char_name": "Saika",
    "char_icon": "47_Saika",
    "icon": "Weapon_4702.png",
    "large_icon": "Weapon_4702_m.png"
  },
  {
    "id": 4801,
    "unit_id": 48,
    "name": "Tear of Rusalka",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 4813,
    "skill_name": "<Tear of Rusalka> Defensive Nectar",
    "skill_desc": "Grants Debuff Block to ALL allies using the power of nature.\nDuration: 2 turn(s)\nAdditionally grants (45%) ATK UP if the allies other than the character with granted Debuff Block doesn't have any Debuff.\nDuration: 2 turn(s)",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": null,
    "skill_icon": "4813",
    "char_name": "Eleonor",
    "char_icon": "48_Eleonor",
    "icon": "Weapon_4801.png",
    "large_icon": "Weapon_4801_m.png"
  },
  {
    "id": 4802,
    "unit_id": 48,
    "name": "Dark Green Embryo",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 4814,
    "skill_name": "<Dark Green Embryo> Dark Elf of the Dark Woods",
    "skill_desc": "On Turn Start, if an ally other than the character holds Shield, increases the duration of 1 random Buff(s) by 1 turn(s).",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "4814",
    "char_name": "Eleonor",
    "char_icon": "48_Eleonor",
    "icon": "Weapon_4802.png",
    "large_icon": "Weapon_4802_m.png"
  },
  {
    "id": 4901,
    "unit_id": 49,
    "name": "Jakou",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 4911,
    "skill_name": "<Jakou> Octopus Sever",
    "skill_desc": "Draws the sword from the back and slashes the enemy 3 times.\nReduces the Cooldown of the 3rd skill of the ally with the highest ATK by -1 turn(s) on the Last Attack, excluding the character.",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 168.0
        }
      ],
      "hits": [
        {
          "pct": 168.0,
          "count": 3
        }
      ],
      "total": 504.0
    },
    "skill_icon": "4911",
    "char_name": "Hebiko",
    "char_icon": "49_Hebiko",
    "icon": "Weapon_4901.png",
    "large_icon": "Weapon_4901_m.png"
  },
  {
    "id": 5001,
    "unit_id": 50,
    "name": "Scarlet Camellia",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 5013,
    "skill_name": "<Scarlet Camellia> Cherry Blossom Flash",
    "skill_desc": "Swings the sword broadly to make a massive tornado to cut down the enemy 6 times.\nTarget is inflicted with (-32.5%) CRIT RES DOWN at a 99% chance before the attack. \nDuration: 2 turn(s)\nWhen a CRIT ATK is performed 4 or more times, gains an Extra Turn.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 139.8
        }
      ],
      "hits": [
        {
          "pct": 139.8,
          "count": 6
        }
      ],
      "total": 838.8
    },
    "skill_icon": "5013",
    "char_name": "Lina",
    "char_icon": "50_Lina",
    "icon": "Weapon_5001.png",
    "large_icon": "Weapon_5001_m.png"
  },
  {
    "id": 5002,
    "unit_id": 50,
    "name": "Jade Iris",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 5014,
    "skill_name": "<Jade Iris> Nomad's Hell Knight",
    "skill_desc": "If the target's SPD is higher than the character's or if the target is a boss, increases the duration of Bleed by 1 turn.\n[Always-active passive effect regardless of cooldown]\nWhen a CRIT ATK is performed on an enemy afflicted with Bleed, the enemy is inflicted with additional (10%) Bleed.\nDuration: 3 turn(s)",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "5014",
    "char_name": "Lina",
    "char_icon": "50_Lina",
    "icon": "Weapon_5002.png",
    "large_icon": "Weapon_5002_m.png"
  },
  {
    "id": 5101,
    "unit_id": 51,
    "name": "Gear Bracelet",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 5113,
    "skill_name": "<Gear Bracelet> Earth Art: Stone Spear",
    "skill_desc": "Performs a Power Hit on the ground and attacks ALL enemies.\nIf the target has 2 or more Debuffs, inflicts them with Faint.\nDuration: 1 turn(s)",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 538.6
        }
      ],
      "hits": [
        {
          "pct": 538.6,
          "count": 1
        }
      ],
      "total": 538.6
    },
    "skill_icon": "5113",
    "char_name": "Mari",
    "char_icon": "51_Mari",
    "icon": "Weapon_5101.png",
    "large_icon": "Weapon_5101_m.png"
  },
  {
    "id": 5102,
    "unit_id": 51,
    "name": "Cartridge Buster",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 5114,
    "skill_name": "<Cartridge Buster> Tales of the Class Rep.",
    "skill_desc": "When attacking an Incapacitated enemy, performs a Shield Penetrate attack.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "5114",
    "char_name": "Mari",
    "char_icon": "51_Mari",
    "icon": "Weapon_5102.png",
    "large_icon": "Weapon_5102_m.png"
  },
  {
    "id": 5201,
    "unit_id": 52,
    "name": "Hikage & Tsukiakari",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 5211,
    "skill_name": "<Hikage & Tsukiakari> Moonshade",
    "skill_desc": "Slashes the enemy using dual blades.\nDMG increases in proportion to current HP.",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 412.1
        },
        {
          "stat": "Current HP",
          "pct": 19
        }
      ],
      "hits": [
        {
          "pct": 412.1,
          "count": 1
        }
      ],
      "total": null
    },
    "skill_icon": "5211",
    "char_name": "Nagi",
    "char_icon": "52_Nagi",
    "icon": "Weapon_5201.png",
    "large_icon": "Weapon_5201_m.png"
  },
  {
    "id": 5202,
    "unit_id": 52,
    "name": "Yamidachi Murasame & Kamikirimaru",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 13,
    "opt_type_name": "Speed",
    "opt_value": 24,
    "bonus_value": 2.4,
    "skill_id": 5214,
    "skill_name": "<Yamidachi Murasame & Kamikirimaru> Hurricane Taimanin",
    "skill_desc": "On Turn Start, grants a (19.5%) SPD UP.\nDuration: 2 turn(s)",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "5214",
    "char_name": "Nagi",
    "char_icon": "52_Nagi",
    "icon": "Weapon_5202.png",
    "large_icon": "Weapon_5202_m.png"
  },
  {
    "id": 5301,
    "unit_id": 53,
    "name": "Utzuro",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 5312,
    "skill_name": "<Utzuro> Momochi Assassin Arts: Serpent",
    "skill_desc": "Draws two swords from the back and stabs the enemy 7 times.\nTarget hit is inflicted with Immobilize at a 5% chance.\nDuration: 2 turn(s)\nWhen enemy is defeated, inflicts ALL enemies with (3.5%) Burn at a 60% chance.\nDuration: 3 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 98.9
        }
      ],
      "hits": [
        {
          "pct": 98.9,
          "count": 7
        }
      ],
      "total": 692.3
    },
    "skill_icon": "5312",
    "char_name": "Toyo",
    "char_icon": "53_Toyo",
    "icon": "Weapon_5301.png",
    "large_icon": "Weapon_5301_m.png"
  },
  {
    "id": 5302,
    "unit_id": 53,
    "name": "Magatsuki",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 5313,
    "skill_name": "<Magatsuki> Momochi Style Ultimate: Kodoku",
    "skill_desc": "After launching a series of attacks with the weapons covering the body, finishes the enemy with the blade on the back.\nIncreases the effect of Bleed, Poison, and Burn on the target hit by 10%, a fixed 3%, and a fixed 5% respectively.\nDMG increases by (55%) for each Debuff the target has.\nThe effect applies up to 4 stacks.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 608.0
        }
      ],
      "hits": [
        {
          "pct": 608.0,
          "count": 1
        }
      ],
      "total": 608.0
    },
    "skill_icon": "5313",
    "char_name": "Toyo",
    "char_icon": "53_Toyo",
    "icon": "Weapon_5302.png",
    "large_icon": "Weapon_5302_m.png"
  },
  {
    "id": 5401,
    "unit_id": 54,
    "name": "Fuuma",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 5411,
    "skill_name": "<Fuuma> Taimanin Art: Fuuma",
    "skill_desc": "Approaches the enemy, stabs and then slashes them to attack.\nSteals 1 Random Buffs from the target hit at a 20% chance.",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 252.0
        }
      ],
      "hits": [
        {
          "pct": 252.0,
          "count": 2
        }
      ],
      "total": 504.0
    },
    "skill_icon": "5411",
    "char_name": "Kotaro",
    "char_icon": "54_Kotaro",
    "icon": "Weapon_5401.png",
    "large_icon": "Weapon_5401_m.png"
  },
  {
    "id": 5501,
    "unit_id": 55,
    "name": "Nakigara",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 5513,
    "skill_name": "<Nakigara> Grudgeful Strike",
    "skill_desc": "Ruthlessly slashes the sword at the enemy 9 times.\nTarget hit is inflicted with Faint at a 20% chance.\nDuration: 1 turn(s)\nIncreases target's DMG by (45%) per Buff they have.\nStacks up to 3.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 80.8
        }
      ],
      "hits": [
        {
          "pct": 80.8,
          "count": 9
        }
      ],
      "total": 727.2
    },
    "skill_icon": "5513",
    "char_name": "Gaiza",
    "char_icon": "55_Gaiza",
    "icon": "Weapon_5501.png",
    "large_icon": "Weapon_5501_m.png"
  },
  {
    "id": 5601,
    "unit_id": 56,
    "name": "",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 5612,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 738.4
        }
      ],
      "hits": [
        {
          "pct": 738.4,
          "count": 1
        }
      ],
      "total": 738.4
    },
    "skill_icon": "5612",
    "char_name": "Gennosuke",
    "char_icon": "56_Gennosuke",
    "icon": "Weapon_5601.png",
    "large_icon": "Weapon_5601_m.png"
  },
  {
    "id": 5701,
    "unit_id": 57,
    "name": "Taotei",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 9,
    "opt_type_name": "Evasion",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 5713,
    "skill_name": "<Taotei> Burning Grit",
    "skill_desc": "If character's HP is 40% or more, DMG increases by (7.5%).\nIf character's HP is 80% or more, performs a (15%) DEF Penetrate attack.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "5713",
    "char_name": "Mizuki",
    "char_icon": "57_Mizuki",
    "icon": "Weapon_5701.png",
    "large_icon": "Weapon_5701_m.png"
  },
  {
    "id": 5801,
    "unit_id": 58,
    "name": "Aozora",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 5812,
    "skill_name": "<Aozora> The Invincible Twins!!",
    "skill_desc": "Yuphie grants Sophie a (55%) DEF UP.\nDuration: 2 turn(s)\nAdditionally grants a Shield equal to 27% of Max. HP.\nDuration: 2 turn(s)\nGrants the same Buff to an ally with the highest ATK.",
    "skill_type": "[Support Skill]",
    "skill_damage": null,
    "skill_icon": "5812",
    "char_name": "Yuphiesophie",
    "char_icon": "58_Yuphiesophie",
    "icon": "Weapon_5801.png",
    "large_icon": "Weapon_5801_m.png"
  },
  {
    "id": 5802,
    "unit_id": 58,
    "name": "Amanohara",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 5814,
    "skill_name": "<Amanohara> The Playful Oni Sisters♪",
    "skill_desc": "On Turn Start, grants a (45%) ATK UP to an ally with the highest ATK.\nDuration: 2 turn(s)",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "5814",
    "char_name": "Yuphiesophie",
    "char_icon": "58_Yuphiesophie",
    "icon": "Weapon_5802.png",
    "large_icon": "Weapon_5802_m.png"
  },
  {
    "id": 5901,
    "unit_id": 59,
    "name": "Eliminator",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 5911,
    "skill_name": "<Eliminator> Spider of Omen",
    "skill_desc": "Slashes all enemies with tentacles.\nCRIT Rate increases by (5%).",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 258.3
        }
      ],
      "hits": [
        {
          "pct": 258.3,
          "count": 1
        }
      ],
      "total": 258.3
    },
    "skill_icon": "5911",
    "char_name": "Sayaneo",
    "char_icon": "59_Sayaneo",
    "icon": "Weapon_5901.png",
    "large_icon": "Weapon_5901_m.png"
  },
  {
    "id": 5902,
    "unit_id": 59,
    "name": "Abyss Crawler",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 13,
    "opt_type_name": "Speed",
    "opt_value": 24,
    "bonus_value": 2.4,
    "skill_id": 5913,
    "skill_name": "<Abyss Crawler> Saya NEO Special",
    "skill_desc": "Stabs mercilessly with tentacles to attack the enemy.\nThis skill performs a (15%) Life Steal attack.\nPerforms a (30%) Bleed Debuff Resonance attack.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 911.9
        }
      ],
      "hits": [
        {
          "pct": 911.9,
          "count": 1
        }
      ],
      "total": 911.9
    },
    "skill_icon": "5913",
    "char_name": "Sayaneo",
    "char_icon": "59_Sayaneo",
    "icon": "Weapon_5902.png",
    "large_icon": "Weapon_5902_m.png"
  },
  {
    "id": 6001,
    "unit_id": 60,
    "name": "Shishikirimaru",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 6012,
    "skill_name": "<Shishikirimaru> Iron Demon Style: Metal Counter",
    "skill_desc": "Scatters sword aura to attack the designated enemy, then performs 2 additional attacks. Each additional attack targets Random enemies.\nGains Counterattack after the attack.\nWhen defeating an enemy with this skill, gains an Extra Turn.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 200.0
        }
      ],
      "hits": [
        {
          "pct": 200.0,
          "count": 1
        },
        {
          "pct": 200.0,
          "count": 1
        },
        {
          "pct": 200.0,
          "count": 1
        }
      ],
      "total": 600.0
    },
    "skill_icon": "6012",
    "char_name": "Tougekinki",
    "char_icon": "60_Tougekinki",
    "icon": "Weapon_6001.png",
    "large_icon": "Weapon_6001_m.png"
  },
  {
    "id": 6002,
    "unit_id": 60,
    "name": "Rengoku",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 6014,
    "skill_name": "<Rengoku> Demon of \"Iron\"",
    "skill_desc": "Performs a (15%) DEF Penetrate attack per Debuff the target has.\nStacks up to 5.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "6014",
    "char_name": "Tougekinki",
    "char_icon": "60_Tougekinki",
    "icon": "Weapon_6002.png",
    "large_icon": "Weapon_6002_m.png"
  },
  {
    "id": 6101,
    "unit_id": 61,
    "name": "Ryuuga",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 6112,
    "skill_name": "<Ryuuga> Holy Oni Warrior",
    "skill_desc": "Performs a Shield Penetrate attack on enemies with HP at 75% or more.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "6112",
    "char_name": "Orochi",
    "char_icon": "61_Orochi",
    "icon": "Weapon_6101.png",
    "large_icon": "Weapon_6101_m.png"
  },
  {
    "id": 6201,
    "unit_id": 62,
    "name": "Urashima",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 6213,
    "skill_name": "<Urashima> Soul Art: Soul-piercing Hand",
    "skill_desc": "Gathers energy at fingertips to launch a powerful piercing attack on the enemy.\nWhen defeating an enemy with this skill, gains an Extra Turn.\nWhen defeating an enemy with this skill, resets Hole Puncher's Cooldown.\nDamage increases in proportion to current HP.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 689.2
        },
        {
          "stat": "Current HP",
          "pct": 34
        }
      ],
      "hits": [
        {
          "pct": 689.2,
          "count": 1
        }
      ],
      "total": null
    },
    "skill_icon": "6213",
    "char_name": "Natsu",
    "char_icon": "62_Natsu",
    "icon": "Weapon_6201.png",
    "large_icon": "Weapon_6201_m.png"
  },
  {
    "id": 6202,
    "unit_id": 62,
    "name": "Enra",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 6214,
    "skill_name": "<Enra> Soul Art Hermit",
    "skill_desc": "When the character's HP is 80% or higher, increases DMG by (10%).\nWhen the character's HP is less than 80%, Hole Puncher's Life Steal attack activates 2 times.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "6214",
    "char_name": "Natsu",
    "char_icon": "62_Natsu",
    "icon": "Weapon_6202.png",
    "large_icon": "Weapon_6202_m.png"
  },
  {
    "id": 6301,
    "unit_id": 63,
    "name": "Moon Shot",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 6312,
    "skill_name": "<Moon Shot> Chance Maker",
    "skill_desc": "Taunts ALL enemies.\nDuration: 2 turn(s)\nThe character gains (10%) Damage Reflect.\nDuration: 2 turn(s)",
    "skill_type": "[Support Skill]",
    "skill_damage": null,
    "skill_icon": "6312",
    "char_name": "Major",
    "char_icon": "63_Major",
    "icon": "Weapon_6301.png",
    "large_icon": "Weapon_6301_m.png"
  },
  {
    "id": 6401,
    "unit_id": 64,
    "name": "Crom Dubh",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 6411,
    "skill_name": "<Crom Dubh> Kirin Slash",
    "skill_desc": "Strikes an enemy hard with a greatsword.\nInflicts (-32.5%) CRIT RES DOWN at 20% rate to the target before the attack.\nDuration: 2 turn(s)",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 504.0
        }
      ],
      "hits": [
        {
          "pct": 504.0,
          "count": 1
        }
      ],
      "total": 504.0
    },
    "skill_icon": "6411",
    "char_name": "Kirin",
    "char_icon": "64_Kirin",
    "icon": "Weapon_6401.png",
    "large_icon": "Weapon_6401_m.png"
  },
  {
    "id": 6501,
    "unit_id": 65,
    "name": "Hræsvelgr",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 6512,
    "skill_name": "<Hræsvelgr> Demon Bug: Firefly",
    "skill_desc": "Small demon insects trigger a chain of explosions, attacking ALL enemies 3 times.\nInflicts (2.5%) Poison at a 75% chance on the Last Attack for 2 times.\nDuration: 3 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 118.3
        }
      ],
      "hits": [
        {
          "pct": 118.3,
          "count": 3
        }
      ],
      "total": 354.9
    },
    "skill_icon": "6512",
    "char_name": "Furfur",
    "char_icon": "65_Furfur",
    "icon": "Weapon_6501.png",
    "large_icon": "Weapon_6501_m.png"
  },
  {
    "id": 6502,
    "unit_id": 65,
    "name": "Harpy",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 13,
    "opt_type_name": "Speed",
    "opt_value": 24,
    "bonus_value": 2.4,
    "skill_id": 6513,
    "skill_name": "<Harpy> Demon Bug: Swarm",
    "skill_desc": "Summons a swarm of demonic insects to attack ALL enemies 3 times.\nEvery attack inflicts (3%) Poison at a 35% chance.\nDuration: 3 turn(s)\nDecreases the skill's Cooldown by 1 turn.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 152.8
        }
      ],
      "hits": [
        {
          "pct": 152.8,
          "count": 3
        }
      ],
      "total": 458.4
    },
    "skill_icon": "6513",
    "char_name": "Furfur",
    "char_icon": "65_Furfur",
    "icon": "Weapon_6502.png",
    "large_icon": "Weapon_6502_m.png"
  },
  {
    "id": 6601,
    "unit_id": 66,
    "name": "Chaotic Peridot",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 6612,
    "skill_name": "<Chaotic Peridot> Black Drain",
    "skill_desc": "Attacks ALL enemies a total of 3 times to absorb energy.\nIf the enemy is not alone when attacking, DMG increases by (45%).\nDefeating an enemy with this skill resets the cooldown time of Black Drain.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 130.8
        }
      ],
      "hits": [
        {
          "pct": 130.8,
          "count": 3
        }
      ],
      "total": 392.4
    },
    "skill_icon": "6612",
    "char_name": "Black",
    "char_icon": "66_Black",
    "icon": "Weapon_6601.png",
    "large_icon": "Weapon_6601_m.png"
  },
  {
    "id": 6602,
    "unit_id": 66,
    "name": "Crimson Requiem",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 6613,
    "skill_name": "<Crimson Requiem> End of Darkness",
    "skill_desc": "Attacks the enemy using his ability.\nReduces the target's Turn Gauge by (15%) at a 75% chance on Last Attack.\nSteals the Shield the target has before the attack.\nIf the target's HP is less than 50%, increases Shield by 100% after the attack.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 662.8
        },
        {
          "stat": "Current HP",
          "pct": 31
        }
      ],
      "hits": [
        {
          "pct": 662.8,
          "count": 1
        }
      ],
      "total": null
    },
    "skill_icon": "6613",
    "char_name": "Black",
    "char_icon": "66_Black",
    "icon": "Weapon_6602.png",
    "large_icon": "Weapon_6602_m.png"
  },
  {
    "id": 6701,
    "unit_id": 67,
    "name": "Magnet Blade-NEO",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 6713,
    "skill_name": "<Magnet Blade-NEO> Magnet Art: Magnetic Wave",
    "skill_desc": "On Turn Start, reduces the turn of Skill Disable on allies by 1 turn.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "6713",
    "char_name": "Lydia",
    "char_icon": "67_Lydia",
    "icon": "Weapon_6701.png",
    "large_icon": "Weapon_6701_m.png"
  },
  {
    "id": 6801,
    "unit_id": 68,
    "name": "Pop Star",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 6814,
    "skill_name": "<Pop Star> Oni Gyaru Onslaught",
    "skill_desc": "On Round Start, inflicts (-40%) DEF DOWN on 1 enemy with the highest DEF.\nDuration: 2 turn(s)\nEach attack has a 15% chance to increase the target's DEF DOWN effect by 7.5%.\nWhen attacked by an enemy, reduces the Cooldown of Victory☆Grenade by -1 turn(s) at a fixed 20% chance.\nWhen attacked, if the attacker is afflicted with DEF DOWN, increases the attacker's DEF DOWN effect by 10% at a fixed 10% chance.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "6814",
    "char_name": "Francis",
    "char_icon": "68_Francis",
    "icon": "Weapon_6801.png",
    "large_icon": "Weapon_6801_m.png"
  },
  {
    "id": 6802,
    "unit_id": 68,
    "name": "Blackberry",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 6813,
    "skill_name": "<Blackberry> Victory☆Grenade",
    "skill_desc": "Flings a gigantic grenade to attack ALL enemies.\nWhen attacking a target with DEF DOWN, increases CRIT Rate by (37.5%).\nTargets hit are inflicted with Confusion at a 15% chance.\nDuration: 1 turn(s)\nDMG increases in proportion to the value of the target's DEF DOWN.\nRemoves DEF DOWN from targets hit after the attack.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 401.2
        }
      ],
      "hits": [
        {
          "pct": 401.2,
          "count": 1
        }
      ],
      "total": 401.2
    },
    "skill_icon": "6813",
    "char_name": "Francis",
    "char_icon": "68_Francis",
    "icon": "Weapon_6802.png",
    "large_icon": "Weapon_6802_m.png"
  },
  {
    "id": 6901,
    "unit_id": 69,
    "name": "Plasma Whip",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 6912,
    "skill_name": "<Plasma Whip> Ravaging Whip",
    "skill_desc": "Lashes the enemy with a whip while in midair, attacking 7 times.\nReduces the target's Turn Gauge by (15%) at a 5% chance, each time the target is hit.\nIf the target's Turn Gauge is less than 30% after the attack, increases the target's Debuffs by 1 turn(s).",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 109.4
        }
      ],
      "hits": [
        {
          "pct": 109.4,
          "count": 7
        }
      ],
      "total": 765.8
    },
    "skill_icon": "6912",
    "char_name": "Yuno",
    "char_icon": "69_Yuno",
    "icon": "Weapon_6901.png",
    "large_icon": "Weapon_6901_m.png"
  },
  {
    "id": 7001,
    "unit_id": 70,
    "name": "Bushido Striker",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 7012,
    "skill_name": "<Bushido Striker> Samurai Shooter",
    "skill_desc": "On Turn Start, fills the Turn Gauge of 1 ally with the highest ATK by (20%) at a fixed 30% chance.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "7012",
    "char_name": "Spica",
    "char_icon": "70_Spica",
    "icon": "Weapon_7001.png",
    "large_icon": "Weapon_7001_m.png"
  },
  {
    "id": 7101,
    "unit_id": 71,
    "name": "Blue Viper",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 7113,
    "skill_name": "<Blue Viper> Venom Smash",
    "skill_desc": "Attacks the enemy with a powerful dropkick.\nGains (50%) CRIT DMG UP before the attack.\nDuration : 2 turn(s)\nDamage increases in proportion to target's current HP if the target has 2 or more Debuffs, including Poison.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 838.7
        }
      ],
      "hits": [
        {
          "pct": 838.7,
          "count": 1
        }
      ],
      "total": 838.7
    },
    "skill_icon": "7113",
    "char_name": "Snakelady",
    "char_icon": "71_Snakelady",
    "icon": "Weapon_7101.png",
    "large_icon": "Weapon_7101_m.png"
  },
  {
    "id": 7102,
    "unit_id": 71,
    "name": "Chaos Serpent",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 13,
    "opt_type_name": "Speed",
    "opt_value": 24,
    "bonus_value": 2.4,
    "skill_id": 7114,
    "skill_name": "<Chaos Serpent> The Champion",
    "skill_desc": "DMG increases by (7.5%) when attacking a target with Poison.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "7114",
    "char_name": "Snakelady",
    "char_icon": "71_Snakelady",
    "icon": "Weapon_7102.png",
    "large_icon": "Weapon_7102_m.png"
  },
  {
    "id": 7201,
    "unit_id": 72,
    "name": "Pink Band",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 7213,
    "skill_name": "<Pink Band> Charming Arrow",
    "skill_desc": "Shoots a heart-shaped arrow to attack the enemy.\nIf the target is hit, performs a (15%) Life Steal attack.\nIncreases all Debuff turn(s) the target has by 1 at a 70% chance after the attack.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 911.9
        }
      ],
      "hits": [
        {
          "pct": 911.9,
          "count": 1
        }
      ],
      "total": 911.9
    },
    "skill_icon": "7213",
    "char_name": "Lilim",
    "char_icon": "72_Lilim",
    "icon": "Weapon_7201.png",
    "large_icon": "Weapon_7201_m.png"
  },
  {
    "id": 7301,
    "unit_id": 73,
    "name": "TMP-73 Pro",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 7313,
    "skill_name": "<TMP-73 Pro> Elec Art: Display",
    "skill_desc": "Summons a flock of electronic animals and charges them toward the enemy.\nInflicts Active Skill Disabled to the target at a 10% chance.\nDuration: 2 turn(s)\nWhen defeating an enemy with this skill, reduces Cooldown of 2nd skill of ALL allies by -1 turn(s).",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 279.6
        }
      ],
      "hits": [
        {
          "pct": 279.6,
          "count": 3
        }
      ],
      "total": 838.8
    },
    "skill_icon": "7313",
    "char_name": "Koharu",
    "char_icon": "73_Koharu",
    "icon": "Weapon_7301.png",
    "large_icon": "Weapon_7301_m.png"
  },
  {
    "id": 7401,
    "unit_id": 74,
    "name": "Murakumo Iron Chains",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 7413,
    "skill_name": "<Murakumo Iron Chains> Chain Art: Chain Frenzy",
    "skill_desc": "Swings the chain randomly, attacking ALL enemies 6 times.\nTargets hit is inflicted with (2.5%) Poison at a 10% chance.\nDuration: 3 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 76.4
        }
      ],
      "hits": [
        {
          "pct": 76.4,
          "count": 6
        }
      ],
      "total": 458.4
    },
    "skill_icon": "7413",
    "char_name": "Kaworu",
    "char_icon": "74_Kaworu",
    "icon": "Weapon_7401.png",
    "large_icon": "Weapon_7401_m.png"
  },
  {
    "id": 7501,
    "unit_id": 75,
    "name": "Aqua Innocent",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 7513,
    "skill_name": "<Aqua Innocent> Aqua Vortex",
    "skill_desc": "Spins the water stream and attacks the enemy 4 times.\nRemoves 1 Random Buff(s) On Last Attack.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 223.7
        }
      ],
      "hits": [
        {
          "pct": 223.7,
          "count": 4
        }
      ],
      "total": 894.8
    },
    "skill_icon": "7513",
    "char_name": "Laetitia",
    "char_icon": "75_Laetitia",
    "icon": "Weapon_7501.png",
    "large_icon": "Weapon_7501_m.png"
  },
  {
    "id": 7601,
    "unit_id": 76,
    "name": "Berserker Blade",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 9,
    "opt_type_name": "Evasion",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 7612,
    "skill_name": "<Berserker Blade> Charge Slash",
    "skill_desc": "Focuses energy on the sword and attacks ALL enemies.\nTarget hit is inflicted with (3.5%) Burn at a 50% chance.\nDuration: 3 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 378.4
        }
      ],
      "hits": [
        {
          "pct": 378.4,
          "count": 1
        }
      ],
      "total": 378.4
    },
    "skill_icon": "7612",
    "char_name": "Burroughs",
    "char_icon": "76_Burroughs",
    "icon": "Weapon_7601.png",
    "large_icon": "Weapon_7601_m.png"
  },
  {
    "id": 7701,
    "unit_id": 77,
    "name": "In Memorial",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 7712,
    "skill_name": "<In Memorial> Call of Anubis",
    "skill_desc": "Spreads a wide spider web to attack ALL enemies.\nDMG increases by (10%) for every Poison the target has.\nTarget hit is inflicted with Sleep if the target has 3 or more Debuffs, including Poison on the Last Attack.\nDuration: 2 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 118.3
        }
      ],
      "hits": [
        {
          "pct": 118.3,
          "count": 3
        }
      ],
      "total": 354.9
    },
    "skill_icon": "7712",
    "char_name": "Anemone",
    "char_icon": "77_Anemone",
    "icon": "Weapon_7701.png",
    "large_icon": "Weapon_7701_m.png"
  },
  {
    "id": 7702,
    "unit_id": 77,
    "name": "Rosebud",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 7713,
    "skill_name": "<Rosebud> Reaper-Summoning Thread",
    "skill_desc": "Sends 15 spiders charging toward random enemies.\nTarget hit is inflicted with (50%) Vulnerable to Poison on the Last Attack.\nDuration: 2 turn(s)\nTarget is inflicted with (50%) Vulnerable to Poison if the target has SPD DOWN Debuff.\nDuration: 2 turn(s)\nTarget is inflicted with (50%) Vulnerable to Poison if the target has Immobilize Debuff.\nDuration: 2 turn(s)",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 40.5
        }
      ],
      "hits": [
        {
          "pct": 40.5,
          "count": 1
        },
        {
          "pct": 40.5,
          "count": 1
        },
        {
          "pct": 40.5,
          "count": 1
        },
        {
          "pct": 40.5,
          "count": 1
        },
        {
          "pct": 40.5,
          "count": 1
        },
        {
          "pct": 40.5,
          "count": 1
        },
        {
          "pct": 40.5,
          "count": 1
        },
        {
          "pct": 40.5,
          "count": 1
        },
        {
          "pct": 40.5,
          "count": 1
        },
        {
          "pct": 40.5,
          "count": 1
        },
        {
          "pct": 40.5,
          "count": 1
        },
        {
          "pct": 40.5,
          "count": 1
        },
        {
          "pct": 40.5,
          "count": 1
        },
        {
          "pct": 40.5,
          "count": 1
        },
        {
          "pct": 40.5,
          "count": 1
        }
      ],
      "total": 607.5
    },
    "skill_icon": "7713",
    "char_name": "Anemone",
    "char_icon": "77_Anemone",
    "icon": "Weapon_7702.png",
    "large_icon": "Weapon_7702_m.png"
  },
  {
    "id": 7801,
    "unit_id": 78,
    "name": "Kokuten",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 7812,
    "skill_name": "<Kokuten> Taimanin Art: Uprising Storm",
    "skill_desc": "Randomly swings the knife and attacks the enemy 8 times.\nPerforms a (30%) Bleed Debuff Resonance attack.\nWhen defeating an enemy with this skill, reduces the Turn Gauge of ALL enemies by (15%) at a 50% chance.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 86.5
        }
      ],
      "hits": [
        {
          "pct": 86.5,
          "count": 8
        }
      ],
      "total": 692.0
    },
    "skill_icon": "7812",
    "char_name": "Maskedtaimanin",
    "char_icon": "78_Maskedtaimanin",
    "icon": "Weapon_7801.png",
    "large_icon": "Weapon_7801_m.png"
  },
  {
    "id": 7802,
    "unit_id": 78,
    "name": "Blade Crusher",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 9,
    "opt_type_name": "Evasion",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 7814,
    "skill_name": "<Blade Crusher> Mask of Concealment",
    "skill_desc": "If the target has 3 or more Buffs upon attack, inflicts (60%) Heal Reduction at a 20% chance.\nDuration: 2 turn(s)",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "7814",
    "char_name": "Maskedtaimanin",
    "char_icon": "78_Maskedtaimanin",
    "icon": "Weapon_7802.png",
    "large_icon": "Weapon_7802_m.png"
  },
  {
    "id": 7901,
    "unit_id": 79,
    "name": "DSO-LuV.DX",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 7912,
    "skill_name": "<DSO-LuV.DX> Playful Child",
    "skill_desc": "Healing Effect granted by the character increases by  35%.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "7912",
    "char_name": "Cello",
    "char_icon": "79_Cello",
    "icon": "Weapon_7901.png",
    "large_icon": "Weapon_7901_m.png"
  },
  {
    "id": 8001,
    "unit_id": 80,
    "name": "Snowflake",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 8013,
    "skill_name": "<Snowflake> Elec Art: Lightning Tackle",
    "skill_desc": "Charges at the enemy with electricity coursing through the character.\nInflicts that target with Electrocute at a 30% chance.\nDuration: 2 turn(s)\nGains (2) Protective Shield after the attack.\nDuration: 2 turn(s)\nIf Uehara Rin is deployed, applies the same effect to ALL allies.\nDuration: 2 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 782.8
        }
      ],
      "hits": [
        {
          "pct": 782.8,
          "count": 1
        }
      ],
      "total": 782.8
    },
    "skill_icon": "8013",
    "char_name": "Shikanosuke",
    "char_icon": "80_Shikanosuke",
    "icon": "Weapon_8001.png",
    "large_icon": "Weapon_8001_m.png"
  },
  {
    "id": 8101,
    "unit_id": 81,
    "name": "Photon Plasma Blade",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 8112,
    "skill_name": "<Photon Plasma Blade> ",
    "skill_desc": "[In preparation]",
    "skill_type": "[Support Skill]",
    "skill_damage": null,
    "skill_icon": "8112",
    "char_name": "Library",
    "char_icon": "81_Library",
    "icon": "Weapon_8101.png",
    "large_icon": "Weapon_8101_m.png"
  },
  {
    "id": 8102,
    "unit_id": 81,
    "name": "Optical Stealth Blade",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 8114,
    "skill_name": "<Optical Stealth Blade> ",
    "skill_desc": "[In preparation]",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "8114",
    "char_name": "Library",
    "char_icon": "81_Library",
    "icon": "Weapon_8102.png",
    "large_icon": "Weapon_8102_m.png"
  },
  {
    "id": 8201,
    "unit_id": 82,
    "name": "Order-maid",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 9,
    "opt_type_name": "Evasion",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 8211,
    "skill_name": "<Order-maid> Bullet Party",
    "skill_desc": "Sprays bullets, attacking the enemy 7 times.\nTarget hit is inflicted with (3.5%) Burn at a 5% chance.\nDuration: 3 turn(s)",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 72.0
        }
      ],
      "hits": [
        {
          "pct": 72.0,
          "count": 7
        }
      ],
      "total": 504.0
    },
    "skill_icon": "8211",
    "char_name": "Tsuru",
    "char_icon": "82_Tsuru",
    "icon": "Weapon_8201.png",
    "large_icon": "Weapon_8201_m.png"
  },
  {
    "id": 8301,
    "unit_id": 83,
    "name": "Sylphid",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 8313,
    "skill_name": "<Sylphid> Sniper Shot",
    "skill_desc": "Takes a powerful shot at the enemy.\nIncreases CRIT Rate by (25%).\nIf the enemy is the only one remaining, increases CRIT DMG by (55%).",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 838.7
        }
      ],
      "hits": [
        {
          "pct": 838.7,
          "count": 1
        }
      ],
      "total": 838.7
    },
    "skill_icon": "8313",
    "char_name": "Ayame",
    "char_icon": "83_Ayame",
    "icon": "Weapon_8301.png",
    "large_icon": "Weapon_8301_m.png"
  },
  {
    "id": 8401,
    "unit_id": 84,
    "name": "Kraken Anchor",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 8411,
    "skill_name": "<Kraken Anchor> Tentacle Ambush",
    "skill_desc": "Drives tentacles into the ground, attacking 1 Random enemy.\nTarget hit is inflicted with Faint at a 8% chance.\nDuration: 1 turn(s)",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 236.3
        }
      ],
      "hits": [
        {
          "pct": 236.3,
          "count": 1
        },
        {
          "pct": 236.3,
          "count": 1
        }
      ],
      "total": 472.6
    },
    "skill_icon": "8411",
    "char_name": "Anje",
    "char_icon": "84_Anje",
    "icon": "Weapon_8401.png",
    "large_icon": "Weapon_8401_m.png"
  },
  {
    "id": 8501,
    "unit_id": 85,
    "name": "Nightsky Ribbon",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 8513,
    "skill_name": "<Nightsky Ribbon> GAN★BA★RE!!",
    "skill_desc": "Grants ALL allies (2) Protective Shield(s).\nDuration: 2 turn(s)\nGrants ALL allies (5.5%) Healing Over Time.\nDuration: 3 turn(s)",
    "skill_type": "[Support Skill]",
    "skill_damage": null,
    "skill_icon": "8513",
    "char_name": "Minasaki",
    "char_icon": "85_Minasaki",
    "icon": "Weapon_8501.png",
    "large_icon": "Weapon_8501_m.png"
  },
  {
    "id": 8601,
    "unit_id": 86,
    "name": "Tomurai & Requiem",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 13,
    "opt_type_name": "Speed",
    "opt_value": 24,
    "bonus_value": 2.4,
    "skill_id": 8613,
    "skill_name": "<Tomurai & Requiem> Type: Hero",
    "skill_desc": "Lovell's skill gets enhanced every 4 turns.\nParticle Weapon: Shini: Steals enemy Shield. Shield effect increases by 50% after stealing.\nParticle Weapon: Kamui\nShield amount increases by 24%.\nGrants (40%) Protect Ally to ALL allies.\nDuration: 2 turn(s)",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "8613",
    "char_name": "Robel",
    "char_icon": "86_Robel",
    "icon": "Weapon_8601.png",
    "large_icon": "Weapon_8601_m.png"
  },
  {
    "id": 8701,
    "unit_id": 87,
    "name": "White Tiger Fists",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 8713,
    "skill_name": "<White Tiger Fists> Rip and Tear",
    "skill_desc": "Wildly slashes the enemy 6 times.\nPerforms 1 Additional Attack without any conditions.\nWhen the target's HP is less than 20% during Additional Attack, deals Instant Death at a fixed 15% chance.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 126.7
        }
      ],
      "hits": [
        {
          "pct": 126.7,
          "count": 6
        }
      ],
      "add": [
        {
          "pct": 175.9,
          "count": 1
        }
      ],
      "total": 936.1
    },
    "skill_icon": "8713",
    "char_name": "Torajiro",
    "char_icon": "87_Torajiro",
    "icon": "Weapon_8701.png",
    "large_icon": "Weapon_8701_m.png"
  },
  {
    "id": 8801,
    "unit_id": 88,
    "name": "Savage Scale",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 8812,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Support Skill]",
    "skill_damage": null,
    "skill_icon": "8812",
    "char_name": "Werewolf",
    "char_icon": "88_Werewolf",
    "icon": "Weapon_8801.png",
    "large_icon": "Weapon_8801_m.png"
  },
  {
    "id": 8901,
    "unit_id": 89,
    "name": "Polaris Majesty",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 8912,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 94.6
        }
      ],
      "hits": [
        {
          "pct": 94.6,
          "count": 4
        }
      ],
      "total": 378.4
    },
    "skill_icon": "8912",
    "char_name": "Taro",
    "char_icon": "89_Taro",
    "icon": "Weapon_8901.png",
    "large_icon": "Weapon_8901_m.png"
  },
  {
    "id": 9001,
    "unit_id": 90,
    "name": "Neon Saucer",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 9012,
    "skill_name": "<Neon Saucer> Hero Vibes",
    "skill_desc": "Whenever an ally gets a Debuff, removes 1 Random Debuff of ALL allies.\nFills the Turn Gauge of ALL allies by (20%) at a 65% chance.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "9012",
    "char_name": "Silkys",
    "char_icon": "90_Silkys",
    "icon": "Weapon_9001.png",
    "large_icon": "Weapon_9001_m.png"
  },
  {
    "id": 9101,
    "unit_id": 91,
    "name": "Poison Dragon Claw",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 9112,
    "skill_name": "<Poison Dragon Claw> Poisonous Raksha",
    "skill_desc": "Removes all Poison Debuffs from the character when hit.\nIf this skill is on Cooldown, increases Poison DMG by a fixed 3% at a 50% chance on every attack's Last Attack.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "9112",
    "char_name": "Sensyu",
    "char_icon": "91_Sensyu",
    "icon": "Weapon_9101.png",
    "large_icon": "Weapon_9101_m.png"
  },
  {
    "id": 9201,
    "unit_id": 92,
    "name": "",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 9212,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 692.2
        }
      ],
      "hits": [
        {
          "pct": 692.2,
          "count": 1
        }
      ],
      "total": 692.2
    },
    "skill_icon": "9212",
    "char_name": "Gonza",
    "char_icon": "92_Gonza",
    "icon": "Weapon_9201.png",
    "large_icon": "Weapon_9201_m.png"
  },
  {
    "id": 9301,
    "unit_id": 93,
    "name": "",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 9312,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 272.2
        }
      ],
      "hits": [
        {
          "pct": 272.2,
          "count": 3
        }
      ],
      "total": 816.6
    },
    "skill_icon": "9312",
    "char_name": "Shonosuke",
    "char_icon": "93_Shonosuke",
    "icon": "Weapon_9301.png",
    "large_icon": "Weapon_9301_m.png"
  },
  {
    "id": 9401,
    "unit_id": 94,
    "name": "Kogoro Plush",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 9412,
    "skill_name": "<Kogoro Plush> The 18th Saburo",
    "skill_desc": "If the character is inflicted with a Debuff, inflicts ALL enemies with (2.5%) Poison at a 60% chance.\nDuration: 3 turn(s)",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "9412",
    "char_name": "Saburo",
    "char_icon": "94_Saburo",
    "icon": "Weapon_9401.png",
    "large_icon": "Weapon_9401_m.png"
  },
  {
    "id": 9501,
    "unit_id": 95,
    "name": "Tsukikage",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 9,
    "opt_type_name": "Evasion",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 9513,
    "skill_name": "<Tsukikage> Black Droplet",
    "skill_desc": "Steals the attacker's Stealth when hit.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "9513",
    "char_name": "Shizuku",
    "char_icon": "95_Shizuku",
    "icon": "Weapon_9501.png",
    "large_icon": "Weapon_9501_m.png"
  },
  {
    "id": 9601,
    "unit_id": 96,
    "name": "Kongou no Tekkou",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 9613,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 243.2
        },
        {
          "stat": "SPD",
          "pct": 1378
        }
      ],
      "hits": [
        {
          "pct": 243.2,
          "count": 3
        }
      ],
      "total": null
    },
    "skill_icon": "9613",
    "char_name": "Yaemon",
    "char_icon": "96_Yaemon",
    "icon": "Weapon_9601.png",
    "large_icon": "Weapon_9601_m.png"
  },
  {
    "id": 9701,
    "unit_id": 97,
    "name": "Dawnbreaker Staff",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 9712,
    "skill_name": "<Dawnbreaker Staff> Soul Wave",
    "skill_desc": "Fires a powerful laser at the enemy.\nTarget hit is inflicted with Immobilize at a 30% chance.\nDuration: 2 turn(s)\nIncreases all skill Cooldown of the target by 1 turn(s).",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 692.2
        }
      ],
      "hits": [
        {
          "pct": 692.2,
          "count": 1
        }
      ],
      "total": 692.2
    },
    "skill_icon": "9712",
    "char_name": "Yaobikuni",
    "char_icon": "97_Yaobikuni",
    "icon": "Weapon_9701.png",
    "large_icon": "Weapon_9701_m.png"
  },
  {
    "id": 10101,
    "unit_id": 101,
    "name": "Pandora's Box",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 10113,
    "skill_name": "<Pandora's Box> Justice Execution!",
    "skill_desc": "When an enemy is killed by an ally attack, fills the Turn Gauge of the ally with the highest ATK excluding herself by (20%) at a 20% chance.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "10113",
    "char_name": "Rene",
    "char_icon": "101_Rene",
    "icon": "Weapon_10101.png",
    "large_icon": "Weapon_10101_m.png"
  },
  {
    "id": 10201,
    "unit_id": 102,
    "name": "Crimson Reaper",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 10213,
    "skill_name": "<Crimson Reaper> Jäger Cross",
    "skill_desc": "Quickly launches at the enemy and slashes them in a cross-shape and explodes, attacking 3 time(s).\nIf the enemy isn't the only one remaining, performs a (30%) Bleed, Burn, Poison Debuff Resonance attack.\nIf the enemy is the only one remaining, performs a (45%) Bleed, Burn, Poison Debuff Resonance attack.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 205.0
        }
      ],
      "hits": [
        {
          "pct": 205.0,
          "count": 3
        }
      ],
      "total": 615.0
    },
    "skill_icon": "10213",
    "char_name": "Yeager",
    "char_icon": "102_Yeager",
    "icon": "Weapon_10201.png",
    "large_icon": "Weapon_10201_m.png"
  },
  {
    "id": 10301,
    "unit_id": 103,
    "name": "Peacemaker",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 13,
    "opt_type_name": "Speed",
    "opt_value": 24,
    "bonus_value": 2.4,
    "skill_id": 10311,
    "skill_name": "<Peacemaker> Full Metal Jacket",
    "skill_desc": "Fires the rifle in short bursts at the enemy.\nWhen defeating an enemy with this skill, gains Extra Turn.",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 168.0
        }
      ],
      "hits": [
        {
          "pct": 168.0,
          "count": 3
        }
      ],
      "total": 504.0
    },
    "skill_icon": "10311",
    "char_name": "Bell",
    "char_icon": "103_Bell",
    "icon": "Weapon_10301.png",
    "large_icon": "Weapon_10301_m.png"
  },
  {
    "id": 10302,
    "unit_id": 103,
    "name": "BS Assault Shooter Custom",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 10313,
    "skill_name": "<BS Assault Shooter Custom> Satellite Beam",
    "skill_desc": "Throws a signal beacon to mark the bomb drop location to attack ALL enemies.\nTargets hit are inflicted with (3.5%) Burn at a 75% chance.\nDuration: 3 turn(s)\nIf the target's HP is less than 30%, additionally inflicts Burn at a 90% chance after the attack.\nDuration: 3 turn(s)",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 467.4
        }
      ],
      "hits": [
        {
          "pct": 467.4,
          "count": 1
        }
      ],
      "total": 467.4
    },
    "skill_icon": "10313",
    "char_name": "Bell",
    "char_icon": "103_Bell",
    "icon": "Weapon_10302.png",
    "large_icon": "Weapon_10302_m.png"
  },
  {
    "id": 10401,
    "unit_id": 104,
    "name": "Familiars Carrot & Eggplant",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 10413,
    "skill_name": "<Familiars Carrot & Eggplant> Cure Spell",
    "skill_desc": "Restores HP of a targeted ally by 22.5% of their Max. HP.\nGrants (2) Protective Shield.\nDuration: 2 turn(s)",
    "skill_type": "[Support Skill]",
    "skill_damage": null,
    "skill_icon": "10413",
    "char_name": "Miriam",
    "char_icon": "104_Miriam",
    "icon": "Weapon_10401.png",
    "large_icon": "Weapon_10401_m.png"
  },
  {
    "id": 10501,
    "unit_id": 105,
    "name": "Unidentified Purple Ribbon",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 10513,
    "skill_name": "<Unidentified Purple Ribbon> Sloth's Flurry",
    "skill_desc": "Drives the ribbon into the ground to attack ALL enemies 2 times.\nOn the Last Attack, the following effects apply depending on the total number of Buffs among ALL enemies.\n3 or more Buffs: Removes 1 Random Buff(s) from ALL enemies.\n4 or more Buffs: Reduces ALL enemies' Turn Gauge by (15%).\n5 or more Buffs: Heals ALL allies' HP equal to 37.5% of the character's Max. HP excluding the character.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 218.1
        }
      ],
      "hits": [
        {
          "pct": 218.1,
          "count": 2
        }
      ],
      "total": 436.2
    },
    "skill_icon": "10513",
    "char_name": "Nasara",
    "char_icon": "105_Nasara",
    "icon": "Weapon_10501.png",
    "large_icon": "Weapon_10501_m.png"
  },
  {
    "id": 10502,
    "unit_id": 105,
    "name": "Pseudo-Rainbow Ribbon",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 10514,
    "skill_name": "<Pseudo-Rainbow Ribbon> Mysterious Extradimensional Creature",
    "skill_desc": "If a Buff is granted to the character before their turn ends, copies 2 of their Buffs and grants them to an ally with the highest ATK at the end of their turn.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "10514",
    "char_name": "Nasara",
    "char_icon": "105_Nasara",
    "icon": "Weapon_10502.png",
    "large_icon": "Weapon_10502_m.png"
  },
  {
    "id": 10601,
    "unit_id": 106,
    "name": "Hokubou",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 9,
    "opt_type_name": "Evasion",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 10612,
    "skill_name": "<Hokubou> Evil Eye: Avici",
    "skill_desc": "Uses Evil Eye: Avici to attack ALL enemies.\nTargets hit are inflicted with Passive Skill Disabled at a 90% chance.\nDuration: 2 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 418.4
        }
      ],
      "hits": [
        {
          "pct": 418.4,
          "count": 1
        }
      ],
      "total": 418.4
    },
    "skill_icon": "10612",
    "char_name": "Yukina",
    "char_icon": "106_Yukina",
    "icon": "Weapon_10601.png",
    "large_icon": "Weapon_10601_m.png"
  },
  {
    "id": 10701,
    "unit_id": 107,
    "name": "Narukami",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 10712,
    "skill_name": "<Narukami> Blooming Butterfly",
    "skill_desc": "Quickly slashes the enemy 4 times.\nGrants (40%) DEF UP to ALL allies after the attack.\nDuration: 2 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 184.6
        }
      ],
      "hits": [
        {
          "pct": 184.6,
          "count": 4
        }
      ],
      "total": 738.4
    },
    "skill_icon": "10712",
    "char_name": "Tatsumi",
    "char_icon": "107_Tatsumi",
    "icon": "Weapon_10701.png",
    "large_icon": "Weapon_10701_m.png"
  },
  {
    "id": 10801,
    "unit_id": 108,
    "name": "Ushio",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 10812,
    "skill_name": "<Ushio> Dumbo Attack!?",
    "skill_desc": "Runs toward the enemy and trips to do a headbutt attack.\nTarget is inflicted with Faint at a 20% chance.\nDuration: 1 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 738.4
        }
      ],
      "hits": [
        {
          "pct": 738.4,
          "count": 1
        }
      ],
      "total": 738.4
    },
    "skill_icon": "10812",
    "char_name": "Mawari",
    "char_icon": "108_Mawari",
    "icon": "Weapon_10801.png",
    "large_icon": "Weapon_10801_m.png"
  },
  {
    "id": 10901,
    "unit_id": 109,
    "name": "",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 10913,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 911.9
        }
      ],
      "hits": [
        {
          "pct": 911.9,
          "count": 1
        }
      ],
      "total": 911.9
    },
    "skill_icon": "10913",
    "char_name": "Tetsuji",
    "char_icon": "109_Tetsuji",
    "icon": "Weapon_10901.png",
    "large_icon": "Weapon_10901_m.png"
  },
  {
    "id": 11001,
    "unit_id": 110,
    "name": "Hibana",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 11011,
    "skill_name": "<Hibana> Explosive Art: Dust Cloud",
    "skill_desc": "Throws a sugar cube at a targeted enemy and 1 Random enemy.\nTargets hit are inflicted with (3.5%) Burn at a 15% chance.\nDuration: 3 turn(s)",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 236.3
        }
      ],
      "hits": [
        {
          "pct": 236.3,
          "count": 1
        },
        {
          "pct": 236.3,
          "count": 1
        }
      ],
      "total": 472.6
    },
    "skill_icon": "11011",
    "char_name": "Denji",
    "char_icon": "110_Denji",
    "icon": "Weapon_11001.png",
    "large_icon": "Weapon_11001_m.png"
  },
  {
    "id": 11101,
    "unit_id": 111,
    "name": "Daruma",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 13,
    "opt_type_name": "Speed",
    "opt_value": 24,
    "bonus_value": 2.4,
    "skill_id": 11113,
    "skill_name": "<Daruma> Oil Art: Flame Disaster",
    "skill_desc": "Breathes out fire, attacking ALL enemies 3 times.\nRemoves Shield from the targets.\nTargets hit are Taunted at a 45% chance.\nDuration: 2 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 143.3
        }
      ],
      "hits": [
        {
          "pct": 143.3,
          "count": 3
        }
      ],
      "total": 429.9
    },
    "skill_icon": "11113",
    "char_name": "Houensai",
    "char_icon": "111_Houensai",
    "icon": "Weapon_11101.png",
    "large_icon": "Weapon_11101_m.png"
  },
  {
    "id": 11201,
    "unit_id": 112,
    "name": "Guren no Gankou",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 11213,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "11213",
    "char_name": "Joutaro",
    "char_icon": "112_Joutaro",
    "icon": "Weapon_11201.png",
    "large_icon": "Weapon_11201_m.png"
  },
  {
    "id": 11301,
    "unit_id": 113,
    "name": "Tyr",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 11313,
    "skill_name": "<Tyr> Light Art: Aurora Burst",
    "skill_desc": "Fires a single laser beam at an enemy, dealing DMG.\nTarget hit has their Turn Gauge reduced by (15%) at a 75% chance.\nIf the target's Turn Gauge is less than 10%, increases all Debuffs' duration the target has by 1 turn(s).",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 911.9
        }
      ],
      "hits": [
        {
          "pct": 911.9,
          "count": 1
        }
      ],
      "total": 911.9
    },
    "skill_icon": "11313",
    "char_name": "Nao",
    "char_icon": "113_Nao",
    "icon": "Weapon_11301.png",
    "large_icon": "Weapon_11301_m.png"
  },
  {
    "id": 11302,
    "unit_id": 113,
    "name": "Hermóðr",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 11314,
    "skill_name": "<Hermóðr> Leader of Gosha's Public Security Team",
    "skill_desc": "Target hit is inflicted with (-27.5%) ACC DOWN at a 99% chance.\nDuration: 2 turn(s)",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "11314",
    "char_name": "Nao",
    "char_icon": "113_Nao",
    "icon": "Weapon_11302.png",
    "large_icon": "Weapon_11302_m.png"
  },
  {
    "id": 11401,
    "unit_id": 114,
    "name": "Rouga",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 11411,
    "skill_name": "<Rouga> Wind Bow: Soaring Wolf",
    "skill_desc": "Jumps up into the air and fires a powerful shot at the enemy.\nIf the target's HP is 80% or more,  steals 1 Random Buff(s) the target has.",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 504.0
        }
      ],
      "hits": [
        {
          "pct": 504.0,
          "count": 1
        }
      ],
      "total": 504.0
    },
    "skill_icon": "11411",
    "char_name": "Kaede",
    "char_icon": "114_Kaede",
    "icon": "Weapon_11401.png",
    "large_icon": "Weapon_11401_m.png"
  },
  {
    "id": 11501,
    "unit_id": 115,
    "name": "Sabimaru",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 11511,
    "skill_name": "<Sabimaru> Taimanin Art: Water Mirror",
    "skill_desc": "Swings the blade gracefully, attacking the enemy 2 time(s).\nReduces Cooldown of Mirror Art: Clear Mirror, Still Water by -1 turn(s).",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 252.0
        }
      ],
      "hits": [
        {
          "pct": 252.0,
          "count": 2
        }
      ],
      "total": 504.0
    },
    "skill_icon": "11511",
    "char_name": "Nodoka",
    "char_icon": "115_Nodoka",
    "icon": "Weapon_11501.png",
    "large_icon": "Weapon_11501_m.png"
  },
  {
    "id": 11601,
    "unit_id": 116,
    "name": "Kepler",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 9,
    "opt_type_name": "Evasion",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 11611,
    "skill_name": "<Kepler> Heavy Smash",
    "skill_desc": "Swings a hammer from above the head, attacking the enemy.\nIf the target has 2 or more Debuffs, absorbs Turn Gauge by (12.5%) at a 10% chance.",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 504.0
        }
      ],
      "hits": [
        {
          "pct": 504.0,
          "count": 1
        }
      ],
      "total": 504.0
    },
    "skill_icon": "11611",
    "char_name": "Tsumugi",
    "char_icon": "116_Tsumugi",
    "icon": "Weapon_11601.png",
    "large_icon": "Weapon_11601_m.png"
  },
  {
    "id": 11701,
    "unit_id": 117,
    "name": "Terpsichore",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 11713,
    "skill_name": "<Terpsichore> Sound Art: Dolce",
    "skill_desc": "Heals allies with beautiful melodies.\nRestores HP of ALL allies by 25% of the target's Max. HP.\nEverytime the character gains a Buff, reduces the Cooldown of all skills by -1 turn(s). [Always-active passive effect regardless of cooldown]",
    "skill_type": "[Support Skill]",
    "skill_damage": null,
    "skill_icon": "11713",
    "char_name": "Aoi",
    "char_icon": "117_Aoi",
    "icon": "Weapon_11701.png",
    "large_icon": "Weapon_11701_m.png"
  },
  {
    "id": 11801,
    "unit_id": 118,
    "name": "Shiranami",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 11813,
    "skill_name": "<Shiranami> Scarlet Art: Scarlet Miasma",
    "skill_desc": "Spreads Scarlet Art forward to attack ALL enemies.\nWhen attacking a target with 3 or more Debuffs, inflicts Confusion at a 55% chance.\nDuration: 1 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 498.5
        }
      ],
      "hits": [
        {
          "pct": 498.5,
          "count": 1
        }
      ],
      "total": 498.5
    },
    "skill_icon": "11813",
    "char_name": "Suzuka",
    "char_icon": "118_Suzuka",
    "icon": "Weapon_11801.png",
    "large_icon": "Weapon_11801_m.png"
  },
  {
    "id": 11901,
    "unit_id": 119,
    "name": "Dawnbreaker",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 11912,
    "skill_name": "<Dawnbreaker> Light Art: Flash Cannon",
    "skill_desc": "Fires a ray of light at the enemy, attacking 4 times.\nIf the target has 2 or more Debuffs, on every attack, increases the duration of 1 Random Buff of ALL allies by 1 turn(s) at a fixed chance of 25%.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 204.1
        }
      ],
      "hits": [
        {
          "pct": 204.1,
          "count": 4
        }
      ],
      "total": 816.4
    },
    "skill_icon": "11912",
    "char_name": "Uzuki",
    "char_icon": "119_Uzuki",
    "icon": "Weapon_11901.png",
    "large_icon": "Weapon_11901_m.png"
  },
  {
    "id": 12001,
    "unit_id": 120,
    "name": "Amayo",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 13,
    "opt_type_name": "Speed",
    "opt_value": 24,
    "bonus_value": 2.4,
    "skill_id": 12012,
    "skill_name": "<Amayo> Wind Art: Spring Wind",
    "skill_desc": "Grants (45%) ATK UP to 1 ally.\nDuration: 2 turn(s)\nRemoves all Debuffs.",
    "skill_type": "[Support Skill]",
    "skill_damage": null,
    "skill_icon": "12012",
    "char_name": "Hikage",
    "char_icon": "120_Hikage",
    "icon": "Weapon_12001.png",
    "large_icon": "Weapon_12001_m.png"
  },
  {
    "id": 12101,
    "unit_id": 121,
    "name": "Utopia",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 12112,
    "skill_name": "<Utopia> Stone Art: Heavyweight",
    "skill_desc": "Musters up strength and gains (40%) DEF UP.\nDuration: 2 turn(s)\nRestores 18% of Max. HP.\nTaunts 1 Random enemy at a 45% chance.",
    "skill_type": "[Support Skill]",
    "skill_damage": null,
    "skill_icon": "12112",
    "char_name": "Akina",
    "char_icon": "121_Akina",
    "icon": "Weapon_12101.png",
    "large_icon": "Weapon_12101_m.png"
  },
  {
    "id": 12201,
    "unit_id": 122,
    "name": "Yuugure",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 12213,
    "skill_name": "<Yuugure> Heaven Flipping",
    "skill_desc": "Tosses the enemy up in the air with a greatsword and attacks 5 times.\nGains (35%) ATK UP before the attack.\nDuration: 2 turn(s)\nGrants the same Buff to ALL allies with the same type as the character.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 178.9
        }
      ],
      "hits": [
        {
          "pct": 178.9,
          "count": 5
        }
      ],
      "total": 894.5
    },
    "skill_icon": "12213",
    "char_name": "Saya",
    "char_icon": "122_Saya",
    "icon": "Weapon_12201.png",
    "large_icon": "Weapon_12201_m.png"
  },
  {
    "id": 12301,
    "unit_id": 123,
    "name": "Melancholy",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 12313,
    "skill_name": "<Melancholy> Vain Haze",
    "skill_desc": "On Turn Start, restores 6% of the character's Max. HP.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "12313",
    "char_name": "Kagero",
    "char_icon": "123_Kagero",
    "icon": "Weapon_12301.png",
    "large_icon": "Weapon_12301_m.png"
  },
  {
    "id": 12401,
    "unit_id": 124,
    "name": "Tisiphone",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 12413,
    "skill_name": "<Tisiphone> Wrath of the Vengeful",
    "skill_desc": "When defeated after being attacked by an enemy, she resurrects at 1% of Max. HP and enters an Immortal state.\nDuration: 1 turn(s)\nAdditionally gains (60%) ATK UP.\nDuration: 2 turn(s)\nIf Wrath of the Vengeful is on Cooldown, performs an Additional Attack on every attack.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "12413",
    "char_name": "Arectra",
    "char_icon": "124_Arectra",
    "icon": "Weapon_12401.png",
    "large_icon": "Weapon_12401_m.png"
  },
  {
    "id": 12501,
    "unit_id": 125,
    "name": "Minagoroshi",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 9,
    "opt_type_name": "Evasion",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 12513,
    "skill_name": "<Minagoroshi> Raging Wind, Clear Moon",
    "skill_desc": "Slashes the enemy with Iaido after while laughing.\nTaunts ALL enemies at a 35% chance before the attack.\nDuration: 2 turn(s)\nGains (19.5%) Power-up after the attack.\nDuration: 2 turn(s)",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 851.1
        }
      ],
      "hits": [
        {
          "pct": 851.1,
          "count": 1
        }
      ],
      "total": 851.1
    },
    "skill_icon": "12513",
    "char_name": "Sokushitsuki",
    "char_icon": "125_Sokushitsuki",
    "icon": "Weapon_12501.png",
    "large_icon": "Weapon_12501_m.png"
  },
  {
    "id": 12502,
    "unit_id": 125,
    "name": "Naraka",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 12514,
    "skill_name": "<Naraka> Like the Gust",
    "skill_desc": "Cooldown for Like the Gust becomes 0.\nCRIT Rate increases by 3% of the character's SPD.\nCRIT DMG increases by (5%).",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "12514",
    "char_name": "Sokushitsuki",
    "char_icon": "125_Sokushitsuki",
    "icon": "Weapon_12502.png",
    "large_icon": "Weapon_12502_m.png"
  },
  {
    "id": 12601,
    "unit_id": 126,
    "name": "Aurora Katana",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 12613,
    "skill_name": "<Aurora Katana> Shade Demon Style: Assassinate",
    "skill_desc": "Attacks the enemy at a speed untrackable to the naked eye.\nIf the target's HP is less than 50%, increases DMG by 45%.\nWhen defeating an enemy with this skill, gains Extra Turn.\nGains Stealth before the attack.\nDuration: 2 turn(s)",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 782.8
        }
      ],
      "hits": [
        {
          "pct": 782.8,
          "count": 1
        }
      ],
      "total": 782.8
    },
    "skill_icon": "12613",
    "char_name": "Ongyouki",
    "char_icon": "126_Ongyouki",
    "icon": "Weapon_12601.png",
    "large_icon": "Weapon_12601_m.png"
  },
  {
    "id": 12602,
    "unit_id": 126,
    "name": "Tachyon Blade",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 12614,
    "skill_name": "<Tachyon Blade> Demon of \"Shade\"",
    "skill_desc": "Defeating an enemy reduces all of the character's Cooldown by -1 turn(s).\nIf the character is in Stealth, increases CRIT DMG by (10%).",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "12614",
    "char_name": "Ongyouki",
    "char_icon": "126_Ongyouki",
    "icon": "Weapon_12602.png",
    "large_icon": "Weapon_12602_m.png"
  },
  {
    "id": 12701,
    "unit_id": 127,
    "name": "Bloody Gale Form",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 13,
    "opt_type_name": "Speed",
    "opt_value": 24,
    "bonus_value": 2.4,
    "skill_id": 12712,
    "skill_name": "<Bloody Gale Form> Wind Demon Style: Wind of Life",
    "skill_desc": "Summons a warm breeze, restoring HP of ALL allies by 16.5% of the target's Max. HP",
    "skill_type": "[Support Skill]",
    "skill_damage": null,
    "skill_icon": "12712",
    "char_name": "Hasegawafuki",
    "char_icon": "127_Hasegawafuki",
    "icon": "Weapon_12701.png",
    "large_icon": "Weapon_12701_m.png"
  },
  {
    "id": 12702,
    "unit_id": 127,
    "name": "Stormwind Form",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 12713,
    "skill_name": "<Stormwind Form> Wind Demon Style: Prosper Wind",
    "skill_desc": "Grants (5.5%) Healing Over Time to ALL allies.\nDuration: 3 turn(s)\nEach Debuff on the target restores 37.5% of the target's Max. HP\nStacks up to 3.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": null,
    "skill_icon": "12713",
    "char_name": "Hasegawafuki",
    "char_icon": "127_Hasegawafuki",
    "icon": "Weapon_12702.png",
    "large_icon": "Weapon_12702_m.png"
  },
  {
    "id": 12801,
    "unit_id": 128,
    "name": "",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 12812,
    "skill_name": "<> Daydream",
    "skill_desc": "",
    "skill_type": "[Support Skill]",
    "skill_damage": null,
    "skill_icon": "12812",
    "char_name": "Suiki",
    "char_icon": "128_Suiki",
    "icon": "Weapon_12801.png",
    "large_icon": "Weapon_12801_m.png"
  },
  {
    "id": 12802,
    "unit_id": 128,
    "name": "",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 12813,
    "skill_name": "<> Awakened Water Strike",
    "skill_desc": "",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 467.4
        }
      ],
      "hits": [
        {
          "pct": 467.4,
          "count": 1
        }
      ],
      "total": 467.4
    },
    "skill_icon": "12813",
    "char_name": "Suiki",
    "char_icon": "128_Suiki",
    "icon": "Weapon_12802.png",
    "large_icon": "Weapon_12802_m.png"
  },
  {
    "id": 12901,
    "unit_id": 129,
    "name": "Hellcat Glove",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 12913,
    "skill_name": "<Hellcat Glove> NyaNya Attack",
    "skill_desc": "Curls up into a ball and attacks the enemy 6 times while spinning.\nEvery time a CRIT ATK lands, steals 1 Random Buff from the target at a 15% chance.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 149.1
        }
      ],
      "hits": [
        {
          "pct": 149.1,
          "count": 6
        }
      ],
      "total": 894.6
    },
    "skill_icon": "12913",
    "char_name": "Crackle",
    "char_icon": "129_Crackle",
    "icon": "Weapon_12901.png",
    "large_icon": "Weapon_12901_m.png"
  },
  {
    "id": 15401,
    "unit_id": 154,
    "name": "Yumegiri",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 9,
    "opt_type_name": "Evasion",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 15412,
    "skill_name": "<Yumegiri> Paper Spirit: White Flash",
    "skill_desc": "Transforms the spear into a giant sword using ninja art, and slashes ALL enemies.\nDefeating an enemy with this skill reduces Cooldown of Nomad's Cyborg Ninja by -1 turn(s). \nIf only 1 enemy remains, increases DMG by (45%).",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 401.2
        }
      ],
      "hits": [
        {
          "pct": 401.2,
          "count": 1
        }
      ],
      "total": 401.2
    },
    "skill_icon": "15412",
    "char_name": "Isuka",
    "char_icon": "154_Isuka",
    "icon": "Weapon_15401.png",
    "large_icon": "Weapon_15401_m.png"
  },
  {
    "id": 17601,
    "unit_id": 176,
    "name": "Gengetsu",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 17613,
    "skill_name": "<Gengetsu> Taima Whip Style: Round Up",
    "skill_desc": "Whips ALL enemies while spinning around.\nRemoves Stealth from ALL enemies after the attack.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 392.4
        },
        {
          "stat": "Current HP",
          "pct": 18
        }
      ],
      "hits": [
        {
          "pct": 392.4,
          "count": 1
        }
      ],
      "total": null
    },
    "skill_icon": "17613",
    "char_name": "Reiko",
    "char_icon": "176_Reiko",
    "icon": "Weapon_17601.png",
    "large_icon": "Weapon_17601_m.png"
  },
  {
    "id": 19401,
    "unit_id": 194,
    "name": "Charming Flower-Eye",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 19414,
    "skill_name": "<Charming Flower-Eye> Mystic Tongue Succubus",
    "skill_desc": "On Turn Start, inflicts (-60%) DEF DOWN on the enemy with the highest HP at a 99% chance.\nThis effect ignores Debuff Block.\nDuration: 2 turn(s)\nOn Turn Start, inflicts (-47.5%) CRIT Rate DOWN on the enemy with the highest ATK at a 99% chance.\nThis effect ignores Debuff Block.\nDuration: 2 turn(s)\nOn Turn Start, if Edwin Black is deployed, inflicts (30%) Weaken on ALL enemies at a 70% chance.\nDuration: 2 turn(s)",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "19414",
    "char_name": "Phantasma",
    "char_icon": "194_Phantasma",
    "icon": "Weapon_19401.png",
    "large_icon": "Weapon_19401_m.png"
  },
  {
    "id": 19402,
    "unit_id": 194,
    "name": "Dazzling Dream-Eye",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 19413,
    "skill_name": "<Dazzling Dream-Eye> Succubus Whispers",
    "skill_desc": "Seduces with alluring movements, then explodes a giant heart to deal damage to ALL enemies.\nInflicts (-35%) CRIT RES DOWN on ALL enemies at a 99% chance before the attack.\nDuration: 2 turn(s)\nInflicts Sleep at a 60% on the Last Attack.\nDuration: 2 turn(s)\nIf the targets are not inflicted with Sleep on the Last Attack, inflicts Passive Skill Disabled effect at a 99% chance.\nDuration: 2 turn(s)",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 436.2
        }
      ],
      "hits": [
        {
          "pct": 436.2,
          "count": 1
        }
      ],
      "total": 436.2
    },
    "skill_icon": "19413",
    "char_name": "Phantasma",
    "char_icon": "194_Phantasma",
    "icon": "Weapon_19402.png",
    "large_icon": "Weapon_19402_m.png"
  },
  {
    "id": 21201,
    "unit_id": 212,
    "name": "Wraith's Black Armor",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 21212,
    "skill_name": "<Wraith's Black Armor> Dark Lightning",
    "skill_desc": "Strikes the enemy with a powerful lightning bolt to attack.\nInflicts Faint on the target hit at a 20% chance.\nDuration: 1 turn(s)\nInflicts (-80%) CRIT DMG DOWN on the target hit at a 99% chance.\nDuration: 2 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 692.2
        }
      ],
      "hits": [
        {
          "pct": 692.2,
          "count": 1
        }
      ],
      "total": 692.2
    },
    "skill_icon": "21212",
    "char_name": "Dullahan",
    "char_icon": "212_Dullahan",
    "icon": "Weapon_21201.png",
    "large_icon": "Weapon_21201_m.png"
  },
  {
    "id": 22601,
    "unit_id": 226,
    "name": "Crimson Tempest",
    "slot": "Weapon 1",
    "rarity_stars": 3,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 22613,
    "skill_name": "<Crimson Tempest> Plasma Rifle: Burst",
    "skill_desc": "Charges the plasma rifle, and fires it 4 time(s) at the enemy.\nPerforms a (60%) DEF Penetrate attack.\nIf only 1 enemy is left, the last attack reduces the Turn Gauge of the target by (15%) at a 85% chance.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 191.4
        }
      ],
      "hits": [
        {
          "pct": 191.4,
          "count": 4
        }
      ],
      "total": 765.6
    },
    "skill_icon": "22613",
    "char_name": "Worrell",
    "char_icon": "226_Worrell",
    "icon": "Weapon_22601.png",
    "large_icon": "Weapon_22601_m.png"
  },
  {
    "id": 23701,
    "unit_id": 237,
    "name": "Geometric Naginata",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 23713,
    "skill_name": "<Geometric Naginata> Ryusuijin",
    "skill_desc": "Erects a wall of water to grant (40%) DEF UP to the character.\nDuration: 2 turn(s)\nGrants (5%) Healing Over Time.\nDuration: 3 turn(s)\nGrants (45%) Protect Ally to ALL allies.\nDuration: 2 turn(s)",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": null,
    "skill_icon": "23713",
    "char_name": "Shiranui",
    "char_icon": "237_Shiranui",
    "icon": "Weapon_23701.png",
    "large_icon": "Weapon_23701_m.png"
  },
  {
    "id": 23702,
    "unit_id": 237,
    "name": "Perfect Timekeeper",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 23714,
    "skill_name": "<Perfect Timekeeper> Gosha's Interim Principal",
    "skill_desc": "When attacked, inflicts (-32.5%) CRIT RES DOWN to the attacker at a fixed 45% chance.\n[Always-active passive effect regardless of cooldown]\nDuration: 2 turn(s)\nAt the end of the turn, if the character has Shield, removes 1 Random Debuff from 2 Random allies at a fixed 30% chance.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "23714",
    "char_name": "Shiranui",
    "char_icon": "237_Shiranui",
    "icon": "Weapon_23702.png",
    "large_icon": "Weapon_23702_m.png"
  },
  {
    "id": 23801,
    "unit_id": 238,
    "name": "Neon Blitz",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 23811,
    "skill_name": "<Neon Blitz> Lightning",
    "skill_desc": "Unleashes a hail of bullets at the enemy, attacking 3 times.\nIf character is inflicted with Electrocute, CRIT DMG increases by (10%).",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 168.0
        }
      ],
      "hits": [
        {
          "pct": 168.0,
          "count": 3
        }
      ],
      "total": 504.0
    },
    "skill_icon": "23811",
    "char_name": "Yukikaze",
    "char_icon": "238_Yukikaze",
    "icon": "Weapon_23801.png",
    "large_icon": "Weapon_23801_m.png"
  },
  {
    "id": 23802,
    "unit_id": 238,
    "name": "Heartbeat Shooter",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 23812,
    "skill_name": "<Heartbeat Shooter> Charming Shot",
    "skill_desc": "Charmingly approaches the enemy and fires dual pistols at point-blank range, attacking 4 times.\nInflicts (19.5%) Weaken at a 45% chance before the attack. \nDuration: 2 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 184.6
        }
      ],
      "hits": [
        {
          "pct": 184.6,
          "count": 4
        }
      ],
      "total": 738.4
    },
    "skill_icon": "23812",
    "char_name": "Yukikaze",
    "char_icon": "238_Yukikaze",
    "icon": "Weapon_23802.png",
    "large_icon": "Weapon_23802_m.png"
  },
  {
    "id": 23901,
    "unit_id": 239,
    "name": "",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 23913,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 894.6
        }
      ],
      "hits": [
        {
          "pct": 894.6,
          "count": 1
        }
      ],
      "total": 894.6
    },
    "skill_icon": "23913",
    "char_name": "Rinko",
    "char_icon": "239_Rinko",
    "icon": "Weapon_23901.png",
    "large_icon": "Weapon_23901_m.png"
  },
  {
    "id": 23902,
    "unit_id": 239,
    "name": "",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 23914,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "23914",
    "char_name": "Rinko",
    "char_icon": "239_Rinko",
    "icon": "Weapon_23902.png",
    "large_icon": "Weapon_23902_m.png"
  },
  {
    "id": 24001,
    "unit_id": 240,
    "name": "Sweet Punisher",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 24011,
    "skill_name": "<Sweet Punisher> Rose Whip",
    "skill_desc": "Swings the whip to attack 2 time(s).\nWhen attacking, Taunts the target at a 5% chance.\nDuration: 2 turn(s)",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 252.0
        }
      ],
      "hits": [
        {
          "pct": 252.0,
          "count": 2
        }
      ],
      "total": 504.0
    },
    "skill_icon": "24011",
    "char_name": "Shizuru",
    "char_icon": "240_Shizuru",
    "icon": "Weapon_24001.png",
    "large_icon": "Weapon_24001_m.png"
  },
  {
    "id": 24002,
    "unit_id": 240,
    "name": "Tiger Thorn",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 24014,
    "skill_name": "<Tiger Thorn> Gosha's Sensual Blossom",
    "skill_desc": "Reduces the damage taken by (-15%) when hit by a Taunted enemy.\nWhen hit by a CRIT ATK, Taunts 1 Random enemy at a 10% chance.\nDuration: 2 turn(s)",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "24014",
    "char_name": "Shizuru",
    "char_icon": "240_Shizuru",
    "icon": "Weapon_24002.png",
    "large_icon": "Weapon_24002_m.png"
  },
  {
    "id": 24101,
    "unit_id": 241,
    "name": "",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 24112,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 128.2
        }
      ],
      "hits": [
        {
          "pct": 128.2,
          "count": 6
        }
      ],
      "total": 769.2
    },
    "skill_icon": "24112",
    "char_name": "Kurenai",
    "char_icon": "241_Kurenai",
    "icon": "Weapon_24101.png",
    "large_icon": "Weapon_24101_m.png"
  },
  {
    "id": 24102,
    "unit_id": 241,
    "name": "",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 24113,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 931.9
        }
      ],
      "hits": [
        {
          "pct": 931.9,
          "count": 1
        }
      ],
      "total": 931.9
    },
    "skill_icon": "24113",
    "char_name": "Kurenai",
    "char_icon": "241_Kurenai",
    "icon": "Weapon_24102.png",
    "large_icon": "Weapon_24102_m.png"
  },
  {
    "id": 24301,
    "unit_id": 243,
    "name": "Ninja Art Manual: Book of Gosha",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 24312,
    "skill_name": "<Ninja Art Manual: Book of Gosha> Here's Your Flower Stamp",
    "skill_desc": "Tokiko encourages the allies and grants (21%) Power-up to ALL allies.\nDuration: 2 turn(s)\nAdditionally grants (70%) CRIT DMG UP to Power-type allies.\nDuration: 2 turn(s)",
    "skill_type": "[Support Skill]",
    "skill_damage": null,
    "skill_icon": "24312",
    "char_name": "Tokiko",
    "char_icon": "243_Tokiko",
    "icon": "Weapon_24301.png",
    "large_icon": "Weapon_24301_m.png"
  },
  {
    "id": 24302,
    "unit_id": 243,
    "name": "Tactical Archive",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 9,
    "opt_type_name": "Evasion",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 24314,
    "skill_name": "<Tactical Archive> Tokiko's Prediction",
    "skill_desc": "At the end of the character's turn, if 2 or more Power-type allies are deployed, fills the Turn Gauge by (20%) and grants (55%) CRIT DMG UP to 2 Random allies except for the character.\nDuration: 2 turn(s)",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "24314",
    "char_name": "Tokiko",
    "char_icon": "243_Tokiko",
    "icon": "Weapon_24302.png",
    "large_icon": "Weapon_24302_m.png"
  },
  {
    "id": 24501,
    "unit_id": 245,
    "name": "Nameless Wooden Dagger",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 24512,
    "skill_name": "<Nameless Wooden Dagger> Octopus Vortex Slash",
    "skill_desc": "Spins to attack the target 4 times.\nPerforms a Joint Attack with the ally that has the highest ATK.\nIncreases the duration of 2 Random Buffs on Power type allies by 1 turn(s) on the Last Attack.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 173.1
        }
      ],
      "hits": [
        {
          "pct": 173.1,
          "count": 4
        }
      ],
      "total": 692.4
    },
    "skill_icon": "24512",
    "char_name": "Hebiko",
    "char_icon": "245_Hebiko",
    "icon": "Weapon_24501.png",
    "large_icon": "Weapon_24501_m.png"
  },
  {
    "id": 24502,
    "unit_id": 245,
    "name": "Neon Viper",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 24513,
    "skill_name": "<Neon Viper> Hebiko's Octopus Ink",
    "skill_desc": "Shoots ink to attack the target.\nIf there are 2 or more Power-type allies on the squad, inflicts (-28.5%) EVD DOWN on ALL enemies after the attack.\nDuration: 2 turn(s)\nIf there are 3 or more Power-type allies on the squad, inflicts Buff Disabled on ALL enemies after the attack.\nDuration: 2 turn(s)",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 838.7
        }
      ],
      "hits": [
        {
          "pct": 838.7,
          "count": 1
        }
      ],
      "total": 838.7
    },
    "skill_icon": "24513",
    "char_name": "Hebiko",
    "char_icon": "245_Hebiko",
    "icon": "Weapon_24502.png",
    "large_icon": "Weapon_24502_m.png"
  },
  {
    "id": 24701,
    "unit_id": 247,
    "name": "",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 24712,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 192.3
        }
      ],
      "hits": [
        {
          "pct": 192.3,
          "count": 4
        }
      ],
      "total": 769.2
    },
    "skill_icon": "24712",
    "char_name": "Sora",
    "char_icon": "247_Sora",
    "icon": "Weapon_24701.png",
    "large_icon": "Weapon_24701_m.png"
  },
  {
    "id": 24702,
    "unit_id": 247,
    "name": "",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 24713,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 931.9
        }
      ],
      "hits": [
        {
          "pct": 931.9,
          "count": 1
        }
      ],
      "total": 931.9
    },
    "skill_icon": "24713",
    "char_name": "Sora",
    "char_icon": "247_Sora",
    "icon": "Weapon_24702.png",
    "large_icon": "Weapon_24702_m.png"
  },
  {
    "id": 24801,
    "unit_id": 248,
    "name": "Support Schoolbag",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 24813,
    "skill_name": "<Support Schoolbag> Class Rep's First Aid Kit",
    "skill_desc": "Takes out a first aid kit from the bag to restore the HP of ALL allies by 21% of their Max. HP.\nIncreases the duration of all allies' Buff by 1 turn(s) after the restoration.\nIf the targets are not Technique type, grants Shield equal to 24% of their Max. HP.\nDuration: 2 turn(s)",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": null,
    "skill_icon": "24813",
    "char_name": "Mari",
    "char_icon": "248_Mari",
    "icon": "Weapon_24801.png",
    "large_icon": "Weapon_24801_m.png"
  },
  {
    "id": 24802,
    "unit_id": 248,
    "name": "Cure Randoseru",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 24814,
    "skill_name": "<Cure Randoseru> Everyone's Rep",
    "skill_desc": "Inflicts Faint on ALL enemies if one of the allies is defeated.\nDuration: 1 turn(s)",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "24814",
    "char_name": "Mari",
    "char_icon": "248_Mari",
    "icon": "Weapon_24802.png",
    "large_icon": "Weapon_24802_m.png"
  },
  {
    "id": 25301,
    "unit_id": 253,
    "name": "Lily Cascade",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 25312,
    "skill_name": "<Lily Cascade> Petal's Miracle",
    "skill_desc": "Throws a bouquet into the air to grant (40%) DEF UP to ALL allies except self.\nDuration: 2 turn(s)\nThen grants Counterattack to 1 ally with the highest ATK.\nDuration: 2 turn(s)",
    "skill_type": "[Support Skill]",
    "skill_damage": null,
    "skill_icon": "25312",
    "char_name": "Asagi",
    "char_icon": "253_Asagi",
    "icon": "Weapon_25301.png",
    "large_icon": "Weapon_25301_m.png"
  },
  {
    "id": 25302,
    "unit_id": 253,
    "name": "Violet Pomander",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 13,
    "opt_type_name": "Speed",
    "opt_value": 24,
    "bonus_value": 2.4,
    "skill_id": 25313,
    "skill_name": "<Violet Pomander> May Bride",
    "skill_desc": "Asagi offers the bouquet with a radiant smile to inflict Confusion to 1 Random target at a 70% chance.\nDuration: 1 turn(s)\nRevives fallen allies at 30% of their Max. HP.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": null,
    "skill_icon": "25313",
    "char_name": "Asagi",
    "char_icon": "253_Asagi",
    "icon": "Weapon_25302.png",
    "large_icon": "Weapon_25302_m.png"
  },
  {
    "id": 25401,
    "unit_id": 254,
    "name": "Fatal Vow",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 25412,
    "skill_name": "<Fatal Vow> Pure White Flash",
    "skill_desc": "Spins to kick ALL enemies with sharp heels.\nIf the target is Power type, inflicts (-32.5%) CRIT RES DOWN at a 90% chance.\nDuration: 2 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 378.4
        }
      ],
      "hits": [
        {
          "pct": 378.4,
          "count": 1
        }
      ],
      "total": 378.4
    },
    "skill_icon": "25412",
    "char_name": "Murasaki",
    "char_icon": "254_Murasaki",
    "icon": "Weapon_25401.png",
    "large_icon": "Weapon_25401_m.png"
  },
  {
    "id": 25402,
    "unit_id": 254,
    "name": "White Camellia",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 25413,
    "skill_name": "<White Camellia> Virgin Flight",
    "skill_desc": "Rushes toward the enemy and attacks with a powerful flying kick.\nOn CRIT ATK, inflicts Passive Skill Disabled to the target at a 95% chance.\nDuration: 2 turn(s)\nAdditionally, if the target is Power type, DMG increases by 18.5% of target's Max. HP.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 765.5
        }
      ],
      "hits": [
        {
          "pct": 765.5,
          "count": 1
        }
      ],
      "total": 765.5
    },
    "skill_icon": "25413",
    "char_name": "Murasaki",
    "char_icon": "254_Murasaki",
    "icon": "Weapon_25402.png",
    "large_icon": "Weapon_25402_m.png"
  },
  {
    "id": 25501,
    "unit_id": 255,
    "name": "Origami Rosette",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 25512,
    "skill_name": "<Origami Rosette> Lotus's Oath",
    "skill_desc": "Throws a giant paper lotus to attack ALL enemies.\nOn the Last Attack, inflicts (-25%) CRIT Rate DOWN on the hit target at a 75% chance.\nDuration: 2 turn(s)\nIf the target is Support Type type, additionally inflicts (-25%) ACC DOWN at a 90% chance.\nDuration: 2 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 354.8
        }
      ],
      "hits": [
        {
          "pct": 354.8,
          "count": 1
        }
      ],
      "total": 354.8
    },
    "skill_icon": "25512",
    "char_name": "Mai",
    "char_icon": "255_Mai",
    "icon": "Weapon_25501.png",
    "large_icon": "Weapon_25501_m.png"
  },
  {
    "id": 25502,
    "unit_id": 255,
    "name": "Sunflower Seal",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 25514,
    "skill_name": "<Sunflower Seal> Paper Taimanin",
    "skill_desc": "On Round Start, applies Active Skill Disabled to the 2 fastest targets, regardless of whether they're allies or enemies.\nDuration: 1 turn(s)\nWhen hit by CRIT ATK, damage taken decreases by -7.5%.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "25514",
    "char_name": "Mai",
    "char_icon": "255_Mai",
    "icon": "Weapon_25502.png",
    "large_icon": "Weapon_25502_m.png"
  },
  {
    "id": 25601,
    "unit_id": 256,
    "name": "Tidal Wave",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 25611,
    "skill_name": "<Tidal Wave> Parasol Thrust",
    "skill_desc": "Stabs an enemy with the tip of the parasol.\nTaunts ALL enemies at a 5% chance after the attack.\nDuration: 2 turn(s)",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 504.0
        }
      ],
      "hits": [
        {
          "pct": 504.0,
          "count": 1
        }
      ],
      "total": 504.0
    },
    "skill_icon": "25611",
    "char_name": "Hisui",
    "char_icon": "256_Hisui",
    "icon": "Weapon_25601.png",
    "large_icon": "Weapon_25601_m.png"
  },
  {
    "id": 25602,
    "unit_id": 256,
    "name": "Evergreen Pilgrim",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 25613,
    "skill_name": "<Evergreen Pilgrim> Blazing Repose",
    "skill_desc": "Swings the parasol in a wide arc to attack the enemy.\nDamage increases in proportion to HP lost.\nRemoves Shield from the target before the attack.\nIf the character's HP is lower than 50%, increases CRIT Rate and CRIT DMG by (37.5%) and (55%) respectively.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 596.5
        },
        {
          "stat": "Lost HP",
          "pct": 29
        }
      ],
      "hits": [
        {
          "pct": 596.5,
          "count": 1
        }
      ],
      "total": null
    },
    "skill_icon": "25613",
    "char_name": "Hisui",
    "char_icon": "256_Hisui",
    "icon": "Weapon_25602.png",
    "large_icon": "Weapon_25602_m.png"
  },
  {
    "id": 25701,
    "unit_id": 257,
    "name": "Coral Spine",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 25713,
    "skill_name": "<Coral Spine> Voluptuous Blossom Waltz",
    "skill_desc": "Whips the enemy hard to attack.\nRemoves 1 Random Buff from ALL enemies after the attack.\nIf the enemy doesn't have any Buffs, inflicts (24%) Weaken instead. \nDuration: 2 turn(s)",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 838.7
        }
      ],
      "hits": [
        {
          "pct": 838.7,
          "count": 1
        }
      ],
      "total": 838.7
    },
    "skill_icon": "25713",
    "char_name": "Shizuru",
    "char_icon": "257_Shizuru",
    "icon": "Weapon_25701.png",
    "large_icon": "Weapon_25701_m.png"
  },
  {
    "id": 25702,
    "unit_id": 257,
    "name": "Treasure Vine",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 25714,
    "skill_name": "<Treasure Vine> Tropical Dream Blossom",
    "skill_desc": "If there's an enemy afflicted with Confusion at the end of each side's turn, grants Shield equal to 12% of the character's Max. HP to an ally with the highest ATK.\nDuration: 2 turn(s)",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "25714",
    "char_name": "Shizuru",
    "char_icon": "257_Shizuru",
    "icon": "Weapon_25702.png",
    "large_icon": "Weapon_25702_m.png"
  },
  {
    "id": 25801,
    "unit_id": 258,
    "name": "Ryugu",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 25811,
    "skill_name": "<Ryugu> Flowing Water Frenzy",
    "skill_desc": "Performs a sword dance and splashes water to attack the enemy 4 times.\nIf the target hit's HP is below 60%, performs a Shield Penetrate attack.",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 126.0
        }
      ],
      "hits": [
        {
          "pct": 126.0,
          "count": 4
        }
      ],
      "total": 504.0
    },
    "skill_icon": "25811",
    "char_name": "Rinko",
    "char_icon": "258_Rinko",
    "icon": "Weapon_25801.png",
    "large_icon": "Weapon_25801_m.png"
  },
  {
    "id": 25802,
    "unit_id": 258,
    "name": "Shiranami",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 25812,
    "skill_name": "<Shiranami> Void Style: Ocean Downpour",
    "skill_desc": "Fires X-shaped sword aura, then unleashes a massive water stream using Void Art over the enemy's head to attack 5 times.\nDMG increases by 2% of the target's lost HP when attacking.\nIf the target's HP is below 40%, removes the target's Protective Shield.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 138.4
        }
      ],
      "hits": [
        {
          "pct": 138.4,
          "count": 5
        }
      ],
      "total": 692.0
    },
    "skill_icon": "25812",
    "char_name": "Rinko",
    "char_icon": "258_Rinko",
    "icon": "Weapon_25802.png",
    "large_icon": "Weapon_25802_m.png"
  },
  {
    "id": 26701,
    "unit_id": 267,
    "name": "",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 26713,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 985.2
        }
      ],
      "hits": [
        {
          "pct": 985.2,
          "count": 1
        }
      ],
      "total": 985.2
    },
    "skill_icon": "26713",
    "char_name": "Sakura",
    "char_icon": "267_Sakura",
    "icon": "Weapon_26701.png",
    "large_icon": "Weapon_26701_m.png"
  },
  {
    "id": 26702,
    "unit_id": 267,
    "name": "",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 26714,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "26714",
    "char_name": "Sakura",
    "char_icon": "267_Sakura",
    "icon": "Weapon_26702.png",
    "large_icon": "Weapon_26702_m.png"
  },
  {
    "id": 26801,
    "unit_id": 268,
    "name": "",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 26813,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 911.9
        }
      ],
      "hits": [
        {
          "pct": 911.9,
          "count": 1
        }
      ],
      "total": 911.9
    },
    "skill_icon": "26813",
    "char_name": "Maika",
    "char_icon": "268_Maika",
    "icon": "Weapon_26801.png",
    "large_icon": "Weapon_26801_m.png"
  },
  {
    "id": 26802,
    "unit_id": 268,
    "name": "",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 26814,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "26814",
    "char_name": "Maika",
    "char_icon": "268_Maika",
    "icon": "Weapon_26802.png",
    "large_icon": "Weapon_26802_m.png"
  },
  {
    "id": 26901,
    "unit_id": 269,
    "name": "Plasma Rage Axe",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 26912,
    "skill_name": "<Plasma Rage Axe>Kaitengeki",
    "skill_desc": "Kicks the enemy high into the air, then spins to attack 6 times.\nDamage increases in proportion to current HP.\nReduces the target's Turn Gauge by (15%) at a 50% chance on the Last Attack.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 108.7
        },
        {
          "stat": "Current HP",
          "pct": 4
        }
      ],
      "hits": [
        {
          "pct": 108.7,
          "count": 6
        }
      ],
      "total": null
    },
    "skill_icon": "26912",
    "char_name": "Murasaki",
    "char_icon": "269_Murasaki",
    "icon": "Weapon_26901.png",
    "large_icon": "Weapon_26901_m.png"
  },
  {
    "id": 26902,
    "unit_id": 269,
    "name": "Neon Pulse Tomahawk",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 26913,
    "skill_name": "<Neon Pulse Tomahawk>Shirengeki",
    "skill_desc": "Slashes the enemy using an axe in each hand.\nDamage increases in proportion to current HP.\nSteals the target's Immortal, Shield, Protective Shield, and Damage Block before the attack.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 552.0
        },
        {
          "stat": "Current HP",
          "pct": 27
        }
      ],
      "hits": [
        {
          "pct": 552.0,
          "count": 1
        }
      ],
      "total": null
    },
    "skill_icon": "26913",
    "char_name": "Murasaki",
    "char_icon": "269_Murasaki",
    "icon": "Weapon_26902.png",
    "large_icon": "Weapon_26902_m.png"
  },
  {
    "id": 27101,
    "unit_id": 271,
    "name": "Apex Blade",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 27112,
    "skill_name": "<Apex Blade>Senjinka",
    "skill_desc": "Moves at high speed to slash ALL enemies 12 times.\nIf the character has SPD UP, performs [AD:27112] Additional Attacks.\nWhen attacking, fills the character's Turn Gauge by 20% at a fixed 10% chance.",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 26.6
        }
      ],
      "hits": [
        {
          "pct": 26.6,
          "count": 6
        }
      ],
      "add": [
        {
          "pct": 37.0,
          "count": 1
        }
      ],
      "total": 196.6
    },
    "skill_icon": "27112",
    "char_name": "Asagi",
    "char_icon": "271_Asagi",
    "icon": "Weapon_27101.png",
    "large_icon": "Weapon_27101_m.png"
  },
  {
    "id": 27102,
    "unit_id": 271,
    "name": "Carbon Shadow",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 27113,
    "skill_name": "<Carbon Shadow>Gekkasenka",
    "skill_desc": "Slashes the enemy with lightning-fast movements.\nDamage increases in proportion to SPD.\nWhen defeating an enemy with this skill, the Cooldown of <Carbon Shadow>Gekkasenka is reset.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 729.6
        },
        {
          "stat": "SPD",
          "pct": 4134
        }
      ],
      "hits": [
        {
          "pct": 729.6,
          "count": 1
        }
      ],
      "total": null
    },
    "skill_icon": "27113",
    "char_name": "Asagi",
    "char_icon": "271_Asagi",
    "icon": "Weapon_27102.png",
    "large_icon": "Weapon_27102_m.png"
  },
  {
    "id": 27201,
    "unit_id": 272,
    "name": "Hydro Frame Glaive",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 27212,
    "skill_name": "<Hydro Frame Glaive>Sougetsuin",
    "skill_desc": "Unleashes a water sword aura toward a designated enemy, then performs 2 additional attacks. Each additional attack targets Random enemies.\nWhen the character is in Stealth, increases DMG by (37.5%).\nWhen attacking, inflicts (-27.5%) ACC DOWN at a 50% chance.\nDuration: 2 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 200.0
        }
      ],
      "hits": [
        {
          "pct": 200.0,
          "count": 1
        },
        {
          "pct": 200.0,
          "count": 1
        },
        {
          "pct": 200.0,
          "count": 1
        }
      ],
      "total": 600.0
    },
    "skill_icon": "27212",
    "char_name": "Shiranui",
    "char_icon": "272_Shiranui",
    "icon": "Weapon_27201.png",
    "large_icon": "Weapon_27201_m.png"
  },
  {
    "id": 27202,
    "unit_id": 272,
    "name": "Aqua Prism Naginata",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 27214,
    "skill_name": "<Aqua Prism Naginata>Phantom Shiranui",
    "skill_desc": "On Round Start, gains Stealth. [Always-active passive effect regardless of cooldown]\nDuration: 2 turn(s)\nOn Turn Start, grants Stealth to an ally except for the character.\nDuration: 2 turn(s)",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "27214",
    "char_name": "Shiranui",
    "char_icon": "272_Shiranui",
    "icon": "Weapon_27202.png",
    "large_icon": "Weapon_27202_m.png"
  },
  {
    "id": 27301,
    "unit_id": 273,
    "name": "",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 27313,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 344.3
        },
        {
          "stat": "DEF",
          "pct": 229
        }
      ],
      "hits": [
        {
          "pct": 344.3,
          "count": 1
        }
      ],
      "total": null
    },
    "skill_icon": "27313",
    "char_name": "Mari",
    "char_icon": "273_Mari",
    "icon": "Weapon_27301.png",
    "large_icon": "Weapon_27301_m.png"
  },
  {
    "id": 27302,
    "unit_id": 273,
    "name": "",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 13,
    "opt_type_name": "Speed",
    "opt_value": 24,
    "bonus_value": 2.4,
    "skill_id": 27314,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "27314",
    "char_name": "Mari",
    "char_icon": "273_Mari",
    "icon": "Weapon_27302.png",
    "large_icon": "Weapon_27302_m.png"
  },
  {
    "id": 27501,
    "unit_id": 275,
    "name": "Neon Dimension",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 7,
    "opt_type_name": "Critical Resistance",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 27514,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "27514",
    "char_name": "Rinko",
    "char_icon": "275_Rinko",
    "icon": "Weapon_27501.png",
    "large_icon": "Weapon_27501_m.png"
  },
  {
    "id": 27502,
    "unit_id": 275,
    "name": "Oni-Gear Blade",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 27512,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "DEF",
          "pct": 331.1
        }
      ],
      "hits": [
        {
          "pct": 331.1,
          "count": 1
        }
      ],
      "total": 331.1
    },
    "skill_icon": "27512",
    "char_name": "Rinko",
    "char_icon": "275_Rinko",
    "icon": "Weapon_27502.png",
    "large_icon": "Weapon_27502_m.png"
  },
  {
    "id": 27901,
    "unit_id": 279,
    "name": "Hex Pulse CQC",
    "slot": "Weapon 1",
    "rarity_stars": 4,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 27913,
    "skill_name": "<Hex Pulse CQC>Lightning Tempest",
    "skill_desc": "",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 80.2
        }
      ],
      "hits": [
        {
          "pct": 80.2,
          "count": 5
        }
      ],
      "total": 401.0
    },
    "skill_icon": "27913",
    "char_name": "Yukikaze",
    "char_icon": "279_Yukikaze",
    "icon": "Weapon_27901.png",
    "large_icon": "Weapon_27901_m.png"
  },
  {
    "id": 27902,
    "unit_id": 279,
    "name": "Black Volt Assault",
    "slot": "Weapon 2",
    "rarity_stars": 4,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 27914,
    "skill_name": "<Black Volt Assault>Lightning Onyx",
    "skill_desc": "",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "27914",
    "char_name": "Yukikaze",
    "char_icon": "279_Yukikaze",
    "icon": "Weapon_27902.png",
    "large_icon": "Weapon_27902_m.png"
  },
  {
    "id": 28101,
    "unit_id": 281,
    "name": "",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 12,
    "opt_type_name": "DEF",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 28113,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 838.7
        }
      ],
      "hits": [
        {
          "pct": 838.7,
          "count": 1
        }
      ],
      "total": 838.7
    },
    "skill_icon": "28113",
    "char_name": "Kurenai",
    "char_icon": "281_Kurenai",
    "icon": "Weapon_28101.png",
    "large_icon": "Weapon_28101_m.png"
  },
  {
    "id": 28102,
    "unit_id": 281,
    "name": "",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 13,
    "opt_type_name": "Speed",
    "opt_value": 24,
    "bonus_value": 2.4,
    "skill_id": 28114,
    "skill_name": "",
    "skill_desc": "",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "28114",
    "char_name": "Kurenai",
    "char_icon": "281_Kurenai",
    "icon": "Weapon_28102.png",
    "large_icon": "Weapon_28102_m.png"
  },
  {
    "id": 28201,
    "unit_id": 282,
    "name": "Mirage Tactical Leg",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 9,
    "opt_type_name": "Evasion",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 28211,
    "skill_name": "",
    "skill_desc": "Strikes down the enemy with the heel.\nWhen the character is in Stealth mode, inflicts (-40%) CRIT RES DOWN at a 25% chance.\nDuration: 2 turn(s)",
    "skill_type": "[Normal Attack]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 504.0
        }
      ],
      "hits": [
        {
          "pct": 504.0,
          "count": 1
        }
      ],
      "total": 504.0
    },
    "skill_icon": "28211",
    "char_name": "Saika",
    "char_icon": "282_Saika",
    "icon": "Weapon_28201.png",
    "large_icon": "Weapon_28201_m.png"
  },
  {
    "id": 28202,
    "unit_id": 282,
    "name": "Active Cloaking Leg",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 28212,
    "skill_name": "",
    "skill_desc": "Moves at blinding speed to attack 4 time(s).\nConsumes -10% of the character's HP to go into Stealth mode and gain (19.5%) SPD UP after the attack.\nDuration: 2 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 161.5
        }
      ],
      "hits": [
        {
          "pct": 161.5,
          "count": 4
        }
      ],
      "total": 646.0
    },
    "skill_icon": "28212",
    "char_name": "Saika",
    "char_icon": "282_Saika",
    "icon": "Weapon_28202.png",
    "large_icon": "Weapon_28202_m.png"
  },
  {
    "id": 28301,
    "unit_id": 283,
    "name": "Plasma Circuit Blade",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 28313,
    "skill_name": "",
    "skill_desc": "Leaps high into the air and rapidly plummets down to attack the enemy.\nDamage increases in proportion to Max. HP.\nInflicts (10%) Overload on 2 Random enemies at a 90% chance before the attack.\nIf the targer has Overload, inflicts (-57.5%) CRIT Rate DOWN at a 99% chance.\nDuration: 2 turn(s)\nIf the target has 3 or more Debuffs, increases the target's Cooldown time of all skills by 1 turn.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 609.9
        },
        {
          "stat": "Max HP",
          "pct": 19
        }
      ],
      "hits": [
        {
          "pct": 609.9,
          "count": 1
        }
      ],
      "total": null
    },
    "skill_icon": "28313",
    "char_name": "Rin",
    "char_icon": "283_Rin",
    "icon": "Weapon_28301.png",
    "large_icon": "Weapon_28301_m.png"
  },
  {
    "id": 28302,
    "unit_id": 283,
    "name": "Quantum Spark Blade",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 28314,
    "skill_name": "",
    "skill_desc": "At the end of the turn, removes all Overload from allies, inflicts Overload to the character, and grants Overclock to the ally with the highest ATK.\nIf the enemy has 3 or more Debuffs at the start of your turn, inflicts ACC DOWN to all enemies.[Always-active passive effect regardless of cooldown]\nBased on the number of Debuffs the enemy has (3/4/5), the effect of ACC DOWN increases by -22.5%/-30%/-35%, respectively.\nDuration: 1 turn(s)",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "28314",
    "char_name": "Rin",
    "char_icon": "283_Rin",
    "icon": "Weapon_28302.png",
    "large_icon": "Weapon_28302_m.png"
  },
  {
    "id": 30001,
    "unit_id": 300,
    "name": "Spike Collar",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 8,
    "opt_type_name": "Accuracy",
    "opt_value": 20,
    "bonus_value": 2.0,
    "skill_id": 30012,
    "skill_name": "<Spike Collar> Poisonous Tail",
    "skill_desc": "Swings the tail to attack ALL enemies.\nIf the target hit is afflicted with Poison, grants (2) Protective Shield to ALL allies.\nDuration: 2 turn(s)\nIf ALL enemies have 4 or more Poison when attacking, grants (3) Protective Shield to ALL allies.\nDuration: 2 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 354.8
        }
      ],
      "hits": [
        {
          "pct": 354.8,
          "count": 1
        }
      ],
      "total": 354.8
    },
    "skill_icon": "30012",
    "char_name": "Kaliya",
    "char_icon": "300_Kaliya",
    "icon": "Weapon_30001.png",
    "large_icon": "Weapon_30001_m.png"
  },
  {
    "id": 30002,
    "unit_id": 300,
    "name": "Serpent Ring Choker",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 30014,
    "skill_name": "<Serpent Ring Choker> Heir of the Snake Goddess",
    "skill_desc": "If an enemy has 4 or more Poison, grants (-45%) ATK DOWN, (-60%) CRIT DMG DOWN, (-45%) DEF DOWN to ALL enemies at a fixed 50% chance.\nDuration: 2 turn(s) \nAll Debuffs can be applied simultaneously.",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "30014",
    "char_name": "Kaliya",
    "char_icon": "300_Kaliya",
    "icon": "Weapon_30002.png",
    "large_icon": "Weapon_30002_m.png"
  },
  {
    "id": 30101,
    "unit_id": 301,
    "name": "Glacial Crystal",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 6,
    "opt_type_name": "Critical Damage",
    "opt_value": 57,
    "bonus_value": 5.7,
    "skill_id": 30114,
    "skill_name": "<Glacial Crystal> Chieftess of the Frost Phantoms",
    "skill_desc": "On Round Start, inflicts (25%) Frostbite on the enemies with the highest ATK and HP.\nDuration: 2 turn(s)\nIf the character is afflicted with Freeze, removes Freeze on Turn Start.\nWhen attacking an enemy with Frostbite, DMG increases by (10%).",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "30114",
    "char_name": "Ragnarok",
    "char_icon": "301_Ragnarok",
    "icon": "Weapon_30101.png",
    "large_icon": "Weapon_30101_m.png"
  },
  {
    "id": 30102,
    "unit_id": 301,
    "name": "Scarlet Blizzard",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 11,
    "opt_type_name": "ATK",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 30113,
    "skill_name": "<Scarlet Blizzard> Icicle Zone",
    "skill_desc": "Widely swings the sword horizontally to shoot up ice thorns from the ground to attack ALL enemies.\nWhen attacking a taget with Freeze, CRIT Rate increases by (52.5%).\nIf the target is not the only one remaining, DMG increases by (55%).\nReduces the Cooldown of Icicle Zone by -3 turn(s) upon defeating an enemy.",
    "skill_type": "[Ultimate Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 436.2
        }
      ],
      "hits": [
        {
          "pct": 436.2,
          "count": 1
        }
      ],
      "total": 436.2
    },
    "skill_icon": "30113",
    "char_name": "Ragnarok",
    "char_icon": "301_Ragnarok",
    "icon": "Weapon_30102.png",
    "large_icon": "Weapon_30102_m.png"
  },
  {
    "id": 30201,
    "unit_id": 302,
    "name": "Scarlet Diadem",
    "slot": "Weapon 1",
    "rarity_stars": 5,
    "opt_type": 5,
    "opt_type_name": "Critical Rate",
    "opt_value": 35,
    "bonus_value": 3.5,
    "skill_id": 30212,
    "skill_name": "<Scarlet Diadem> Crimson Punishment",
    "skill_desc": "Manifests 3 swords made of blood and throws them at the target.\nDamage increases in proportion to HP lost.\nConsumes -10% of the character's current HP to perform a (50%) DEF Penetrate before the attack.\nOn Turn Start, reduces the Cooldown of Crimson Punishment by 1 turn if HP is below 50%.\n[Always-active passive effect regardless of cooldown]\nInflicts (20%) Blood Mark at a 65% chance on the Last Attack.\nDuration: 2 turn(s)",
    "skill_type": "[Attack Skill]",
    "skill_damage": {
      "scaling": [
        {
          "stat": "ATK",
          "pct": 179.6
        },
        {
          "stat": "Lost HP",
          "pct": 8
        }
      ],
      "hits": [
        {
          "pct": 179.6,
          "count": 3
        }
      ],
      "total": null
    },
    "skill_icon": "30212",
    "char_name": "Cromwell",
    "char_icon": "302_Cromwell",
    "icon": "Weapon_30201.png",
    "large_icon": "Weapon_30201_m.png"
  },
  {
    "id": 30202,
    "unit_id": 302,
    "name": "Lunatic Crown",
    "slot": "Weapon 2",
    "rarity_stars": 5,
    "opt_type": 10,
    "opt_type_name": "HP",
    "opt_value": 47,
    "bonus_value": 4.7,
    "skill_id": 30214,
    "skill_name": "<Lunatic Crown> The Crimson Lord",
    "skill_desc": "When attacking a target with Bleed, performs (15%) Life Steal attack.\nIncreases DMG by (10%) for each Bleed the target has.\n[Always-active passive effect regardless of cooldown]\nGrants Blood Bond to 1 random ally upon death. This effect ignores Buff Disabled.\nDuration: 2 turn(s)",
    "skill_type": "[Passive Skill]",
    "skill_damage": null,
    "skill_icon": "30214",
    "char_name": "Cromwell",
    "char_icon": "302_Cromwell",
    "icon": "Weapon_30202.png",
    "large_icon": "Weapon_30202_m.png"
  }
]
;
