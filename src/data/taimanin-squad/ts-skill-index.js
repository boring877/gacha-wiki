// Taimanin Squad Skill Mechanic Index
// Auto-generated from game data on 2026-04-30
// Maps skill mechanics to characters who provide/use them
// 48 mechanics across undefined characters

export const TS_SKILL_INDEX_VERSION = "1.0";
export const TS_SKILL_INDEX_GENERATED = "2026-04-30";

export const TS_SKILL_INDEX_GROUPS = [
  {
    "name": "Stat Buffs",
    "mechanics": [
      {
        "id": "acc-up",
        "name": "Accuracy Up",
        "group": "Stat Buffs",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Aina",
            "char_icon": "46_Aina",
            "skill_name": "Full Burst",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Fires a powerful laser beam towards ALL enemies with the drone.\nGains a (25%) ACC UP before the attack.\nDuration: 2 turn(s)\nWhen attacking the only remaining enemy, CRIT Rate increases by (37.5%).",
            "scope": "AoE",
            "source": "S (Game Changer)",
            "skill_id": 4613
          }
        ]
      },
      {
        "id": "atk-up",
        "name": "ATK Up",
        "group": "Stat Buffs",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Arectra",
            "char_icon": "124_Arectra",
            "skill_name": "Wrath of the Vengeful",
            "skill_type": "[Passive Skill]",
            "skill_desc": "When defeated after being attacked by an enemy, she resurrects at 1% of Max. HP and enters an Immortal state.\nDuration: 1 turn(s)\nAdditionally gains (60%) ATK UP.\nDuration: 2 turn(s)\nIf Wrath of the Vengeful is on Cooldown, performs an Additional Attack on every attack.",
            "scope": "Self",
            "source": "S (Tisiphone)",
            "skill_id": 12413
          },
          {
            "char_name": "Eleonor",
            "char_icon": "48_Eleonor",
            "skill_name": "Defensive Nectar",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Grants Debuff Block to ALL allies using the power of nature.\nDuration: 2 turn(s)\nIf an ally doesn't have any Debuff, grants (45%) ATK UP to them.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Tear of Rusalka)",
            "skill_id": 4813
          },
          {
            "char_name": "Hikage",
            "char_icon": "120_Hikage",
            "skill_name": "Wind Art: Spring Wind",
            "skill_type": "[Support Skill]",
            "skill_desc": "Grants (45%) ATK UP to 1 ally.\nDuration: 2 turn(s)\nRemoves all Debuffs.",
            "scope": "AoE",
            "source": "S (Amayo)",
            "skill_id": 12012
          },
          {
            "char_name": "Jubei",
            "char_icon": "10_Jubei",
            "skill_name": "Gold Aegis",
            "skill_type": "[Support Skill]",
            "skill_desc": "Spins the gun in a flashy manner, then shoots it into the sky and gains (40%) ATK UP.\nDuration: 2 turn(s)\nGains Extra Turn.",
            "scope": "Self",
            "source": "S (Golden Eater)",
            "skill_id": 1012
          },
          {
            "char_name": "Saya",
            "char_icon": "122_Saya",
            "skill_name": "Heaven Flipping",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Tosses the enemy up in the air with a greatsword and attacks 5 times.\nGains (35%) ATK UP before the attack.\nDuration: 2 turn(s)\nGrants the same Buff to ALL allies with the same type as the character.",
            "scope": "AoE",
            "source": "S (Yuugure)",
            "skill_id": 12213
          },
          {
            "char_name": "Tokiko",
            "char_icon": "28_Tokiko",
            "skill_name": "Evil Eye: Clairvoyance",
            "skill_type": "[Support Skill]",
            "skill_desc": "Uses Clairvoyance to grant a (45%) ATK UP to 1 ally.\nDuration: 2 turn(s)\nReduces the Cooldown of all affected allies' skills by -1 turn(s) and additionally grants Debuff Block.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Sagiri)",
            "skill_id": 2822
          },
          {
            "char_name": "Yuphiesophie",
            "char_icon": "58_Yuphiesophie",
            "skill_name": "The Playful Oni Sisters♪",
            "skill_type": "[Passive Skill]",
            "skill_desc": "On Turn Start, grants a (45%) ATK UP to an ally with the highest ATK.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Amanohara)",
            "skill_id": 5814
          }
        ]
      },
      {
        "id": "crit-dmg-up",
        "name": "Critical Damage Up",
        "group": "Stat Buffs",
        "scope": "buff",
        "characters": []
      },
      {
        "id": "crit-rate-up",
        "name": "Critical Rate Up",
        "group": "Stat Buffs",
        "scope": "buff",
        "characters": []
      },
      {
        "id": "crit-res-up",
        "name": "Critical Resistance Up",
        "group": "Stat Buffs",
        "scope": "buff",
        "characters": []
      },
      {
        "id": "def-up",
        "name": "DEF Up",
        "group": "Stat Buffs",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Akina",
            "char_icon": "121_Akina",
            "skill_name": "Stone Art: Heavyweight",
            "skill_type": "[Support Skill]",
            "skill_desc": "Charges up energy and gains (40%) DEF UP.\nDuration: 2 turn(s)\nRestores 15% of Max. HP.\nTaunts 1 Random enemy.",
            "scope": "Self",
            "source": "S (Utopia)",
            "skill_id": 12112
          },
          {
            "char_name": "Mai",
            "char_icon": "36_Mai",
            "skill_name": "Paper Spirit: Defense",
            "skill_type": "[Support Skill]",
            "skill_desc": "Protects the character and 1 ally with paper, granting (45%) DEF UP.\nDuration: 2 turn(s)\nRestores 25.5% of the ally’s Max. HP.\nIf the character has DEF UP on Turn Start, reduces the Cooldown of The Paper Spirit Taimanin by -1 turn(s).",
            "scope": "Self",
            "source": "S (Origami Shuriken)",
            "skill_id": 3612
          },
          {
            "char_name": "Tatsumi",
            "char_icon": "107_Tatsumi",
            "skill_name": "Blooming Butterfly",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Quickly slashes the enemy 4 times.\nGrants (40%) DEF UP to ALL allies after the attack.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Narukami)",
            "skill_id": 10712
          },
          {
            "char_name": "Yuphiesophie",
            "char_icon": "58_Yuphiesophie",
            "skill_name": "The Invincible Twins!!",
            "skill_type": "[Support Skill]",
            "skill_desc": "Yuphie grants Sophie a (55%) DEF UP.\nDuration: 2 turn(s)\nAdditionally grants a Shield equal to 27% of Max. HP.\nDuration: 2 turn(s)\nGrants the same Buff to an ally with the highest ATK.",
            "scope": "Self",
            "source": "S (Aozora)",
            "skill_id": 5812
          }
        ]
      },
      {
        "id": "evd-up",
        "name": "Evasion Up",
        "group": "Stat Buffs",
        "scope": "buff",
        "characters": []
      },
      {
        "id": "spd-up",
        "name": "SPD Up",
        "group": "Stat Buffs",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Mitsuki",
            "char_icon": "37_Mitsuki",
            "skill_name": "Wind Art: Rampaging Gust",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Makes a large tornado and sends it toward ALL enemies.\nPerforms a Shield Penetrate attack.\nWhen defeating an enemy with this skill, fills (20%) of the Turn Gauge at a 95% chance for ALL allies.\nSteals the SPD UP Buff of ALL enemies before the attack.\nDamage increases in proportion to SPD.",
            "scope": "AoE",
            "source": "S (Nikko)",
            "skill_id": 3713
          },
          {
            "char_name": "Nagi",
            "char_icon": "52_Nagi",
            "skill_name": "Hurricane Taimanin",
            "skill_type": "[Passive Skill]",
            "skill_desc": "On Turn Start, grants a (19.5%) SPD UP.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Yamidachi Murasame & Kamikirimaru)",
            "skill_id": 5214
          },
          {
            "char_name": "Rinko",
            "char_icon": "11_Rinko",
            "skill_name": "Meteor Shower",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Summons a meteorite to attack ALL enemies.\nIf the target has SPD DOWN, increases the efficacy of SPD DOWN by -10%.\nGains (19.5%) SPD UP before the attack.\nDuration: 2 turn(s)\nIf the target is the only one remaining, DMG increases by (55%).",
            "scope": "AoE",
            "source": "S (Suijingiri)",
            "skill_id": 1113
          },
          {
            "char_name": "Tokiko",
            "char_icon": "28_Tokiko",
            "skill_name": "Evil Eye: Clairvoyance",
            "skill_type": "[Support Skill]",
            "skill_desc": "Uses Clairvoyance to grant a (27%) SPD UP to 1 ally and herself.\nDuration: 2 turn(s)\nReduces the Cooldown of all affected allies' skills by -1 turn(s).\nIf the affected ally is an Agility type, additionally grants Debuff Block.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Myoren)",
            "skill_id": 2812
          }
        ]
      }
    ]
  },
  {
    "name": "Protection",
    "mechanics": [
      {
        "id": "damage-block",
        "name": "Damage Block",
        "group": "Protection",
        "scope": "buff",
        "characters": []
      },
      {
        "id": "damage-reflect",
        "name": "Damage Reflect",
        "group": "Protection",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Emily",
            "char_icon": "15_Emily",
            "skill_name": "Vital Check",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Checks the physical information of the specified target and grants a (45%) Damage Reflect and Immortal.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Nebula Type 2)",
            "skill_id": 1513
          },
          {
            "char_name": "Major",
            "char_icon": "63_Major",
            "skill_name": "Chance Maker",
            "skill_type": "[Support Skill]",
            "skill_desc": "Taunts ALL enemies.\nDuration: 2 turn(s)\nThe character gains (10%) Damage Reflect.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Moon Shot)",
            "skill_id": 6312
          }
        ]
      },
      {
        "id": "debuff-block",
        "name": "Debuff Block",
        "group": "Protection",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Eleonor",
            "char_icon": "48_Eleonor",
            "skill_name": "Defensive Nectar",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Grants Debuff Block to ALL allies using the power of nature.\nDuration: 2 turn(s)\nIf an ally doesn't have any Debuff, grants (45%) ATK UP to them.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Tear of Rusalka)",
            "skill_id": 4813
          },
          {
            "char_name": "Tokiko",
            "char_icon": "28_Tokiko",
            "skill_name": "Evil Eye: Clairvoyance",
            "skill_type": "[Support Skill]",
            "skill_desc": "Uses Clairvoyance to grant a (27%) SPD UP to 1 ally and herself.\nDuration: 2 turn(s)\nReduces the Cooldown of all affected allies' skills by -1 turn(s).\nIf the affected ally is an Agility type, additionally grants Debuff Block.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Myoren)",
            "skill_id": 2812
          }
        ]
      },
      {
        "id": "immortal",
        "name": "Immortal",
        "group": "Protection",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Arectra",
            "char_icon": "124_Arectra",
            "skill_name": "Wrath of the Vengeful",
            "skill_type": "[Passive Skill]",
            "skill_desc": "When defeated after being attacked by an enemy, she resurrects at 1% of Max. HP and enters an Immortal state.\nDuration: 1 turn(s)\nAdditionally gains (60%) ATK UP.\nDuration: 2 turn(s)\nIf Wrath of the Vengeful is on Cooldown, performs an Additional Attack on every attack.",
            "scope": "Self",
            "source": "S (Tisiphone)",
            "skill_id": 12413
          },
          {
            "char_name": "Emily",
            "char_icon": "15_Emily",
            "skill_name": "Vital Check",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Checks the physical information of the specified target and grants a (45%) Damage Reflect and Immortal.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Nebula Type 2)",
            "skill_id": 1513
          },
          {
            "char_name": "Felicia",
            "char_icon": "30_Felicia",
            "skill_name": "Immortal Hunting",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "When the target has 3 or more Debuffs, and the character's HP is less than 30%, attacking an enemy deals Instant Death at a fixed chance of 75%.\nIncreases the duration of all Buffs by 1 turn after the attack.\nSteals Immortal from the enemy before the attack.\nAttacks 1 enemy 1 time.",
            "scope": "AoE",
            "source": "S (Soul Eraser)",
            "skill_id": 3013
          },
          {
            "char_name": "Kuro",
            "char_icon": "4_Kuro",
            "skill_name": "CQC-Double Attack",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Runs toward the enemy with a dagger and attacks 2 times.\nReduces Cooldown of Awakened Immortal by -1 turn(s) after the attack.",
            "scope": "Self",
            "source": "S (Sword Breaker)",
            "skill_id": 411
          },
          {
            "char_name": "Murasaki",
            "char_icon": "19_Murasaki",
            "skill_name": "Awakened Immortal",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Murasaki doesn't go down easily.\nWhen defeated after being attacked by an enemy, she resurrects at 30% of Max. HP and enters an Immortal state.\nDuration: 1 turn(s)",
            "scope": "Self",
            "source": "S (Killing Spree)",
            "skill_id": 1914
          }
        ]
      },
      {
        "id": "strengthen",
        "name": "Power-up",
        "group": "Protection",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Azusa",
            "char_icon": "14_Azusa",
            "skill_name": "Shikigami: Bodyguard",
            "skill_type": "[Support Skill]",
            "skill_desc": "Brings the hand to the mouth and recites a spell, gains (5%) Healing Over Time and (19.5%) Power-up.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Rasetsumaru)",
            "skill_id": 1412
          },
          {
            "char_name": "Sokushitsuki",
            "char_icon": "125_Sokushitsuki",
            "skill_name": "Raging Wind, Clear Moon",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Slashes the enemy with Iaido after while laughing.\nTaunts ALL enemies at a 35% chance before the attack.\nDuration: 2 turn(s)\nGains (19.5%) Power-up after the attack.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Minagoroshi)",
            "skill_id": 12513
          }
        ]
      },
      {
        "id": "ally-protection",
        "name": "Protect Ally",
        "group": "Protection",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Jinglei",
            "char_icon": "18_Jinglei",
            "skill_name": "Taimanin Art: Fist",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Delivers 3 powerful punches at the enemy. DMG increases as DEF increases.\nGrants 45% Protect Ally to the ally with the lowest HP on Last Attack.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Demolisher Fist)",
            "skill_id": 1811
          },
          {
            "char_name": "Robel",
            "char_icon": "86_Robel",
            "skill_name": "Type: Hero",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Lovell's skill gets enhanced every 4 turns.\nParticle Weapon: Shini: Steals enemy Shield. Shield effect increases by 50% after stealing.\nParticle Weapon: Kamui\nShield amount increases by 24%.\nGrants (40%) Protect Ally to ALL allies.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Tomurai & Requiem)",
            "skill_id": 8613
          }
        ]
      },
      {
        "id": "protective-shield",
        "name": "Protective Shield",
        "group": "Protection",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Minasaki",
            "char_icon": "85_Minasaki",
            "skill_name": "GAN★BA★RE!!",
            "skill_type": "[Support Skill]",
            "skill_desc": "Grants ALL allies 2 Protective Shield.\nDuration: 2 turn(s)\nGrants ALL allies (5.5%) Healing Over Time.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Nightsky Ribbon)",
            "skill_id": 8513
          },
          {
            "char_name": "Miriam",
            "char_icon": "104_Miriam",
            "skill_name": "Cure Spell",
            "skill_type": "[Support Skill]",
            "skill_desc": "Restores HP of a targeted ally by 18.5% of their Max. HP.\nGrants (2) Protective Shield.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Familiars Carrot & Eggplant)",
            "skill_id": 10413
          },
          {
            "char_name": "Shikanosuke",
            "char_icon": "80_Shikanosuke",
            "skill_name": "Elec Art: Lightning Tackle",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Charges at the enemy with electricity coursing through the character.\nTarget hit is guaranteed to be inflicted with Electrocute.\nDuration: 2 turn(s)\nGains (2) Protective Shield after the attack.\nDuration: 2 turn(s)\nIf Uehara Rin is deployed, applies the same effect to Uehara Rin.",
            "scope": "Self",
            "source": "S (Snowflake)",
            "skill_id": 8013
          },
          {
            "char_name": "Shisui",
            "char_icon": "42_Shisui",
            "skill_name": "Guardian's Touchdown",
            "skill_type": "[Passive Skill]",
            "skill_desc": "If HP is less than 50%, grants (3) Protective Shield when hit.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Pussycat Headphones)",
            "skill_id": 4214
          }
        ]
      },
      {
        "id": "shield",
        "name": "Shield",
        "group": "Protection",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Amane",
            "char_icon": "6_Amane",
            "skill_name": "Dotenrin: Heavenly Reverse",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Smites the ground, attacking ALL enemies 1 time(s).\nGrants Shield equal to 15% of ally Max. HP to ALL allies.\nDuration: 2 turn(s)\nIf the target HP is less than 75%, the effect increases to 18%.",
            "scope": "AoE",
            "source": "S (Android Arm Type Zero)",
            "skill_id": 613
          },
          {
            "char_name": "Black",
            "char_icon": "66_Black",
            "skill_name": "End of Darkness",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Attacks the enemy using his ability.\nReduces the target's Turn Gauge by (15%) at a 75% chance on Last Attack.\nSteals the Shield the target has before the attack.\nIf the target's HP is less than 50%, increases Shield by 100% after the attack.",
            "scope": "Self",
            "source": "S (Crimson Requiem)",
            "skill_id": 6613
          },
          {
            "char_name": "Eleonor",
            "char_icon": "48_Eleonor",
            "skill_name": "Dark Elf of the Dark Woods",
            "skill_type": "[Passive Skill]",
            "skill_desc": "On Turn Start, if an ally holds Shield, increases all of their Buff turns by 1 turn(s).",
            "scope": "AoE",
            "source": "S (Dark Green Embryo)",
            "skill_id": 4814
          },
          {
            "char_name": "Houensai",
            "char_icon": "111_Houensai",
            "skill_name": "Oil Art: Flame Disaster",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Breathes out fire, attacking ALL enemies 3 times.\nRemoves Shield from the targets.\nTargets hit are Taunted at a 30% chance.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Daruma)",
            "skill_id": 11113
          },
          {
            "char_name": "Kurenai",
            "char_icon": "21_Kurenai",
            "skill_name": "Crimson Princess of Bloodshed",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Attacking an enemy with Shield increases their CRIT DMG by (10%).\nApplies to all skills.",
            "scope": "AoE",
            "source": "S (Warrior's Dual Sword)",
            "skill_id": 2114
          },
          {
            "char_name": "Minasaki",
            "char_icon": "85_Minasaki",
            "skill_name": "GAN★BA★RE!!",
            "skill_type": "[Support Skill]",
            "skill_desc": "Grants ALL allies 2 Protective Shield.\nDuration: 2 turn(s)\nGrants ALL allies (5.5%) Healing Over Time.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Nightsky Ribbon)",
            "skill_id": 8513
          },
          {
            "char_name": "Miriam",
            "char_icon": "104_Miriam",
            "skill_name": "Cure Spell",
            "skill_type": "[Support Skill]",
            "skill_desc": "Restores HP of a targeted ally by 18.5% of their Max. HP.\nGrants (2) Protective Shield.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Familiars Carrot & Eggplant)",
            "skill_id": 10413
          },
          {
            "char_name": "Murasaki",
            "char_icon": "19_Murasaki",
            "skill_name": "Fortification",
            "skill_type": "[Support Skill]",
            "skill_desc": "Gains a Shield equal to 19.5% of the character's Max. HP.\nDuration: 2 turn(s)\nTaunts ALL enemies at a fixed chance of 30%\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Combat Axe)",
            "skill_id": 1912
          },
          {
            "char_name": "Robel",
            "char_icon": "86_Robel",
            "skill_name": "Type: Hero",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Lovell's skill gets enhanced every 4 turns.\nParticle Weapon: Shini: Steals enemy Shield. Shield effect increases by 50% after stealing.\nParticle Weapon: Kamui\nShield amount increases by 24%.\nGrants (40%) Protect Ally to ALL allies.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Tomurai & Requiem)",
            "skill_id": 8613
          },
          {
            "char_name": "Shikanosuke",
            "char_icon": "80_Shikanosuke",
            "skill_name": "Elec Art: Lightning Tackle",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Charges at the enemy with electricity coursing through the character.\nTarget hit is guaranteed to be inflicted with Electrocute.\nDuration: 2 turn(s)\nGains (2) Protective Shield after the attack.\nDuration: 2 turn(s)\nIf Uehara Rin is deployed, applies the same effect to Uehara Rin.",
            "scope": "Self",
            "source": "S (Snowflake)",
            "skill_id": 8013
          },
          {
            "char_name": "Shiranui",
            "char_icon": "13_Shiranui",
            "skill_name": "Phantom Taimanin",
            "skill_type": "[Passive Skill]",
            "skill_desc": "If the character has a Shield, on Turn Start, decreases the duration of 1 Random Debuffs held by ALL allies by -1 turn(s).",
            "scope": "AoE",
            "source": "S (Kagero)",
            "skill_id": 1314
          },
          {
            "char_name": "Shisui",
            "char_icon": "42_Shisui",
            "skill_name": "Guardian's Touchdown",
            "skill_type": "[Passive Skill]",
            "skill_desc": "If HP is less than 50%, grants (3) Protective Shield when hit.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Pussycat Headphones)",
            "skill_id": 4214
          },
          {
            "char_name": "Yuphiesophie",
            "char_icon": "58_Yuphiesophie",
            "skill_name": "The Invincible Twins!!",
            "skill_type": "[Support Skill]",
            "skill_desc": "Yuphie grants Sophie a (55%) DEF UP.\nDuration: 2 turn(s)\nAdditionally grants a Shield equal to 27% of Max. HP.\nDuration: 2 turn(s)\nGrants the same Buff to an ally with the highest ATK.",
            "scope": "Self",
            "source": "S (Aozora)",
            "skill_id": 5812
          }
        ]
      }
    ]
  },
  {
    "name": "Healing & Sustain",
    "mechanics": [
      {
        "id": "healing",
        "name": "Healing",
        "group": "Healing & Sustain",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Akina",
            "char_icon": "121_Akina",
            "skill_name": "Stone Art: Heavyweight",
            "skill_type": "[Support Skill]",
            "skill_desc": "Charges up energy and gains (40%) DEF UP.\nDuration: 2 turn(s)\nRestores 15% of Max. HP.\nTaunts 1 Random enemy.",
            "scope": "Self",
            "source": "S (Utopia)",
            "skill_id": 12112
          },
          {
            "char_name": "Aoi",
            "char_icon": "117_Aoi",
            "skill_name": "Sound Art: Dolce",
            "skill_type": "[Support Skill]",
            "skill_desc": "Heals allies with beautiful melodies.\nRestores HP of ALL allies by 21% of the target's Max. HP.\nEverytime the character gains a Buff, reduces Cooldown by -1 turn(s).",
            "scope": "AoE",
            "source": "S (Terpsichore)",
            "skill_id": 11713
          },
          {
            "char_name": "Azusa",
            "char_icon": "14_Azusa",
            "skill_name": "Shikigami: Bodyguard",
            "skill_type": "[Support Skill]",
            "skill_desc": "Brings the hand to the mouth and recites a spell, gains (5%) Healing Over Time and (19.5%) Power-up.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Rasetsumaru)",
            "skill_id": 1412
          },
          {
            "char_name": "Cello",
            "char_icon": "79_Cello",
            "skill_name": "Playful Child",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Healing Effect granted by the character increases by  35%.",
            "scope": "Self",
            "source": "S (DSO-LuV.DX)",
            "skill_id": 7912
          },
          {
            "char_name": "Hasegawafuki",
            "char_icon": "127_Hasegawafuki",
            "skill_name": "Wind Demon Style: Prosper Wind",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Grants (5.5%) Healing Over Time to ALL allies.\nDuration: 3 turn(s)\nEach Debuff on the target restores 31.5% of the target's Max. HP\nStacks up to 3.",
            "scope": "AoE",
            "source": "S (Stormwind Form)",
            "skill_id": 12713
          },
          {
            "char_name": "Hisui",
            "char_icon": "41_Hisui",
            "skill_name": "Monk Staff Art",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Stabs the enemy with a stone scepter, attacking 4 times.\nRestores ALL allies' HP on Last Attack by 3.5% of Max. HP.",
            "scope": "AoE",
            "source": "S (Tara's Steel Staff)",
            "skill_id": 4111
          },
          {
            "char_name": "Kagero",
            "char_icon": "123_Kagero",
            "skill_name": "Vain Haze",
            "skill_type": "[Passive Skill]",
            "skill_desc": "On Turn Start, restores 4.5% of the character's Max. HP.",
            "scope": "Self",
            "source": "S (Melancholy)",
            "skill_id": 12313
          },
          {
            "char_name": "Mai",
            "char_icon": "36_Mai",
            "skill_name": "Paper Spirit: Defense",
            "skill_type": "[Support Skill]",
            "skill_desc": "Protects the character and 1 ally with paper, granting (45%) DEF UP.\nDuration: 2 turn(s)\nRestores 25.5% of the ally’s Max. HP.\nIf the character has DEF UP on Turn Start, reduces the Cooldown of The Paper Spirit Taimanin by -1 turn(s).",
            "scope": "Self",
            "source": "S (Origami Shuriken)",
            "skill_id": 3612
          },
          {
            "char_name": "Mikoto",
            "char_icon": "22_Mikoto",
            "skill_name": "Ghost Arm",
            "skill_type": "[Passive Skill]",
            "skill_desc": "On every attack, CRIT Rate increases by (15%)\nWhen defeating the enemy, restores HP of 1 ally with the lowest HP by 5% of the target.",
            "scope": "Self",
            "source": "S (Kijingiri)",
            "skill_id": 2212
          },
          {
            "char_name": "Minasaki",
            "char_icon": "85_Minasaki",
            "skill_name": "GAN★BA★RE!!",
            "skill_type": "[Support Skill]",
            "skill_desc": "Grants ALL allies 2 Protective Shield.\nDuration: 2 turn(s)\nGrants ALL allies (5.5%) Healing Over Time.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Nightsky Ribbon)",
            "skill_id": 8513
          },
          {
            "char_name": "Miriam",
            "char_icon": "104_Miriam",
            "skill_name": "Cure Spell",
            "skill_type": "[Support Skill]",
            "skill_desc": "Restores HP of a targeted ally by 18.5% of their Max. HP.\nGrants (2) Protective Shield.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Familiars Carrot & Eggplant)",
            "skill_id": 10413
          },
          {
            "char_name": "Shizuru",
            "char_icon": "29_Shizuru",
            "skill_name": "Shizuru of Flowers",
            "skill_type": "[Passive Skill]",
            "skill_desc": "When hit by an all-target attack, grants the ally with the lowest HP a (7%) Healing Over Time.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Queen's Rose)",
            "skill_id": 2914
          }
        ]
      },
      {
        "id": "heal-over-time",
        "name": "Healing Over Time",
        "group": "Healing & Sustain",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Azusa",
            "char_icon": "14_Azusa",
            "skill_name": "Shikigami: Bodyguard",
            "skill_type": "[Support Skill]",
            "skill_desc": "Brings the hand to the mouth and recites a spell, gains (5%) Healing Over Time and (19.5%) Power-up.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Rasetsumaru)",
            "skill_id": 1412
          },
          {
            "char_name": "Hasegawafuki",
            "char_icon": "127_Hasegawafuki",
            "skill_name": "Wind Demon Style: Prosper Wind",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Grants (5.5%) Healing Over Time to ALL allies.\nDuration: 3 turn(s)\nEach Debuff on the target restores 31.5% of the target's Max. HP\nStacks up to 3.",
            "scope": "AoE",
            "source": "S (Stormwind Form)",
            "skill_id": 12713
          },
          {
            "char_name": "Hisui",
            "char_icon": "41_Hisui",
            "skill_name": "Eclipse Meld: Resonate",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Using a skill on every 4th turn grants an additional effect.\nWhen using Monk Staff Art, Healing Effect increases by (100%).\nWhen using Eclipse Meld: Syphoning Strike, inflicts Immobilize on the enemy.\nDuration: 2 turn(s)\nWhen using Eclipse Meld: Sound, grants a (7%) Healing Over Time to all allies for 2 turn(s).",
            "scope": "AoE",
            "source": "S (Jizo's Steel Staff)",
            "skill_id": 4114
          },
          {
            "char_name": "Mai",
            "char_icon": "36_Mai",
            "skill_name": "Paper Spirit: Absolute Barrier",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Builds a giant paper wall and grants (2) Protective Shields to ALL allies.\nDuration: 2 turn(s)\nGrants (7%)  Healing Over Time to allies whose HP is less than 50%.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Origami Dagger)",
            "skill_id": 3613
          },
          {
            "char_name": "Minasaki",
            "char_icon": "85_Minasaki",
            "skill_name": "GAN★BA★RE!!",
            "skill_type": "[Support Skill]",
            "skill_desc": "Grants ALL allies 2 Protective Shield.\nDuration: 2 turn(s)\nGrants ALL allies (5.5%) Healing Over Time.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Nightsky Ribbon)",
            "skill_id": 8513
          },
          {
            "char_name": "Shizuru",
            "char_icon": "29_Shizuru",
            "skill_name": "Shizuru of Flowers",
            "skill_type": "[Passive Skill]",
            "skill_desc": "When hit by an all-target attack, grants the ally with the lowest HP a (7%) Healing Over Time.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Queen's Rose)",
            "skill_id": 2914
          }
        ]
      },
      {
        "id": "lifesteal",
        "name": "Lifesteal",
        "group": "Healing & Sustain",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Lilim",
            "char_icon": "72_Lilim",
            "skill_name": "Charming Arrow",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Shoots a heart-shaped arrow to attack the enemy.\nIf the target is hit, deals a (15%) Life Steal.\nIncreases all Debuff turn(s) the target has by 1 at a 70% chance after the attack.",
            "scope": "AoE",
            "source": "S (Pink Band)",
            "skill_id": 7213
          },
          {
            "char_name": "Oboro",
            "char_icon": "23_Oboro",
            "skill_name": "Traitor Taimanin",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Deals a (15%) Life Steal when attacking.\nFor each Bleed inflicted on the enemy, increases DMG by 10%.",
            "scope": "Self",
            "source": "S (Taima Claw: Misty Moon)",
            "skill_id": 2314
          },
          {
            "char_name": "Sayaneo",
            "char_icon": "59_Sayaneo",
            "skill_name": "Saya NEO Special",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Stabs mercilessly with tentacles to attack the enemy.\nThis skill performs a (15%) Life Steal attack.\nPerforms a (75%) Debuff Explode Bleed attack.",
            "scope": "Self",
            "source": "S (Abyss Crawler)",
            "skill_id": 5913
          }
        ]
      }
    ]
  },
  {
    "name": "Turn & Action",
    "mechanics": [
      {
        "id": "cooldown-reduction",
        "name": "Cooldown Reduction",
        "group": "Turn & Action",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Aoi",
            "char_icon": "117_Aoi",
            "skill_name": "Sound Art: Dolce",
            "skill_type": "[Support Skill]",
            "skill_desc": "Heals allies with beautiful melodies.\nRestores HP of ALL allies by 21% of the target's Max. HP.\nEverytime the character gains a Buff, reduces Cooldown by -1 turn(s).",
            "scope": "AoE",
            "source": "S (Terpsichore)",
            "skill_id": 11713
          },
          {
            "char_name": "Hebiko",
            "char_icon": "49_Hebiko",
            "skill_name": "Octopus Sever",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Draws the sword from the back and slashes the enemy 3 times.\nReduces the Cooldown of the 3rd skill of the ally with the highest ATK by -1 turn(s) on the Last Attack, excluding the character.",
            "scope": "Self",
            "source": "S (Jakou)",
            "skill_id": 4911
          },
          {
            "char_name": "Isuka",
            "char_icon": "154_Isuka",
            "skill_name": "Paper Spirit: White Flash",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Transforms the spear into a giant sword using ninja art, and slashes ALL enemies.\nDefeating an enemy with this skill reduces Cooldown of Nomad's Cyborg Ninja by -1 turn(s). \nIf only 1 enemy remains, increases DMG by (45%).",
            "scope": "AoE",
            "source": "S (Yumegiri)",
            "skill_id": 15412
          },
          {
            "char_name": "Koharu",
            "char_icon": "73_Koharu",
            "skill_name": "Elec Art: Display",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Summons a flock of electronic animals and charges them toward the enemy.\nInflicts Active Skill Disable to the target at a 10% chance.\nDuration: 2 turn(s)\nWhen defeating an enemy with this skill, reduces Cooldown of 2nd skill of ALL allies by -1 turn(s).",
            "scope": "AoE",
            "source": "S (TMP-73 Pro)",
            "skill_id": 7313
          },
          {
            "char_name": "Kuro",
            "char_icon": "4_Kuro",
            "skill_name": "CQC-Double Attack",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Runs toward the enemy with a dagger and attacks 2 times.\nReduces Cooldown of Awakened Immortal by -1 turn(s) after the attack.",
            "scope": "Self",
            "source": "S (Sword Breaker)",
            "skill_id": 411
          },
          {
            "char_name": "Mai",
            "char_icon": "36_Mai",
            "skill_name": "Paper Spirit: Defense",
            "skill_type": "[Support Skill]",
            "skill_desc": "Protects the character and 1 ally with paper, granting (45%) DEF UP.\nDuration: 2 turn(s)\nRestores 25.5% of the ally’s Max. HP.\nIf the character has DEF UP on Turn Start, reduces the Cooldown of The Paper Spirit Taimanin by -1 turn(s).",
            "scope": "Self",
            "source": "S (Origami Shuriken)",
            "skill_id": 3612
          },
          {
            "char_name": "Nodoka",
            "char_icon": "115_Nodoka",
            "skill_name": "Taimanin Art: Water Mirror",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Swings the blade gracefully, attacking the enemy 2 time(s).\nReduces Cooldown of Mirror Art: Clear Mirror, Still Water by -1 turn(s).",
            "scope": "Self",
            "source": "S (Sabimaru)",
            "skill_id": 11511
          },
          {
            "char_name": "Ongyouki",
            "char_icon": "126_Ongyouki",
            "skill_name": "Demon of \"Shade\"",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Defeating an enemy reduces all of the character's Cooldown by -1 turn(s).\nIf the character is in Stealth, increases CRIT DMG by (10%).",
            "scope": "AoE",
            "source": "S (Tachyon Blade)",
            "skill_id": 12614
          },
          {
            "char_name": "Tokiko",
            "char_icon": "28_Tokiko",
            "skill_name": "Evil Eye: Clairvoyance",
            "skill_type": "[Support Skill]",
            "skill_desc": "Uses Clairvoyance to grant a (27%) SPD UP to 1 ally and herself.\nDuration: 2 turn(s)\nReduces the Cooldown of all affected allies' skills by -1 turn(s).\nIf the affected ally is an Agility type, additionally grants Debuff Block.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Myoren)",
            "skill_id": 2812
          }
        ]
      },
      {
        "id": "counter-attack",
        "name": "Counter-attack",
        "group": "Turn & Action",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Tougekinki",
            "char_icon": "60_Tougekinki",
            "skill_name": "Iron Demon Style: Metal Counter",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Scatters sword aura to attack the designated enemy and 2 Random others.\nGains Counterattack after the attack.\nWhen defeating an enemy with this skill, gains Extra Turn.",
            "scope": "Self",
            "source": "S (Shishikirimaru)",
            "skill_id": 6012
          }
        ]
      },
      {
        "id": "extra-turn",
        "name": "Extra Turn",
        "group": "Turn & Action",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Asuka",
            "char_icon": "16_Asuka",
            "skill_name": "Taimanin Art: Heavenly Dance",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Uses blades on her arms and legs to attack consecutively 5 times.\nIf the target is a Technique type, DMG increases (37.5%).\nWhen defeating the enemy with this skill, gains Extra Turn.",
            "scope": "Self",
            "source": "S (Magnet Edge)",
            "skill_id": 1622
          },
          {
            "char_name": "Bell",
            "char_icon": "103_Bell",
            "skill_name": "Full Metal Jacket",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Fires the rifle in short bursts at the enemy.\nWhen defeating an enemy with this skill, gains Extra Turn.",
            "scope": "Self",
            "source": "S (Peacemaker)",
            "skill_id": 10311
          },
          {
            "char_name": "Fuyumi",
            "char_icon": "39_Fuyumi",
            "skill_name": "Reorganize",
            "skill_type": "[Support Skill]",
            "skill_desc": "Assumes a battle ready stance and gains an Extra Turn, restoring 15% of Max. HP.",
            "scope": "Self",
            "source": "S (Haruhara)",
            "skill_id": 3912
          },
          {
            "char_name": "Jubei",
            "char_icon": "10_Jubei",
            "skill_name": "Gold Aegis",
            "skill_type": "[Support Skill]",
            "skill_desc": "Spins the gun in a flashy manner, then shoots it into the sky and gains (40%) ATK UP.\nDuration: 2 turn(s)\nGains Extra Turn.",
            "scope": "Self",
            "source": "S (Golden Eater)",
            "skill_id": 1012
          },
          {
            "char_name": "Ongyouki",
            "char_icon": "126_Ongyouki",
            "skill_name": "Shade Demon Style: Assassinate",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Attacks the enemy at a speed untrackable to the naked eye.\nIf the target's HP is less than 50%, increases DMG by 45%.\nWhen defeating an enemy with this skill, gains Extra Turn.\nGains Stealth before the attack.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Aurora Katana)",
            "skill_id": 12613
          },
          {
            "char_name": "Tougekinki",
            "char_icon": "60_Tougekinki",
            "skill_name": "Iron Demon Style: Metal Counter",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Scatters sword aura to attack the designated enemy and 2 Random others.\nGains Counterattack after the attack.\nWhen defeating an enemy with this skill, gains Extra Turn.",
            "scope": "Self",
            "source": "S (Shishikirimaru)",
            "skill_id": 6012
          }
        ]
      },
      {
        "id": "stealth",
        "name": "Stealth",
        "group": "Turn & Action",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Ongyouki",
            "char_icon": "126_Ongyouki",
            "skill_name": "Shade Demon Style: Assassinate",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Attacks the enemy at a speed untrackable to the naked eye.\nIf the target's HP is less than 50%, increases DMG by 45%.\nWhen defeating an enemy with this skill, gains Extra Turn.\nGains Stealth before the attack.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Aurora Katana)",
            "skill_id": 12613
          },
          {
            "char_name": "Reiko",
            "char_icon": "176_Reiko",
            "skill_name": "Taima Whip Style: Round Up",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Whips ALL enemies while spinning around.\nRemoves Stealth from ALL enemies after the attack.",
            "scope": "AoE",
            "source": "S (Gengetsu)",
            "skill_id": 17613
          },
          {
            "char_name": "Sakura",
            "char_icon": "5_Sakura",
            "skill_name": "Shadow Arts: Beast Call",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Summons a shadow creature and sends it toward the enemy.\nInflicts (-40%) DEF DOWN to the target at a 95% chance before the attack \nDuration: 2 turn(s)\nGoes into Stealth mode when killing an enemy with this skill.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Assasin's Dagger)",
            "skill_id": 512
          },
          {
            "char_name": "Sakuya",
            "char_icon": "2_Sakuya",
            "skill_name": "Moon Shadow",
            "skill_type": "[Passive Skill]",
            "skill_desc": "When hit by an attack other than an all-target attack, uses Moon Shadow.\nGoes into Stealth mode.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Liberator & Sonic Blade)",
            "skill_id": 212
          },
          {
            "char_name": "Shizuku",
            "char_icon": "95_Shizuku",
            "skill_name": "Black Droplet",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Steals the attacker's Stealth when hit.",
            "scope": "Self",
            "source": "S (Tsukikage)",
            "skill_id": 9513
          }
        ]
      },
      {
        "id": "turn-gauge",
        "name": "Turn Gauge+",
        "group": "Turn & Action",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Amane",
            "char_icon": "6_Amane",
            "skill_name": "Fuuma Martial Art: Skyfall",
            "skill_type": "[Passive Skill]",
            "skill_desc": "On Turn Start absorbs (12.5%) Turn Gauge of the enemy with the strongest ATK at a 50% chance.\nOn Turn Start, removes 1 Debuff on the character.",
            "scope": "Self",
            "source": "S (Android Arm Secrecy)",
            "skill_id": 612
          },
          {
            "char_name": "Anemone",
            "char_icon": "77_Anemone",
            "skill_name": "Call of Anubis",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Spreads a wide web to attack ALL enemies.\nTargets hit by the web are inflicted with (2.5%) Poison at a 15% chance.\nDuration : 3 turn(s)\nIf the target has 4 or more Debuffs, absorbs (12.5%) Turn Gauge at a 35% chance on the Last Attack. \nIf the target's Turn Gauge is less than 30%, increases the efficacy of Poison by 3% at a 60% chance after the attack.\nDuration : 3 turn(s)",
            "scope": "AoE",
            "source": "S (In Memorial)",
            "skill_id": 7712
          },
          {
            "char_name": "Black",
            "char_icon": "66_Black",
            "skill_name": "End of Darkness",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Attacks the enemy using his ability.\nReduces the target's Turn Gauge by (15%) at a 75% chance on Last Attack.\nSteals the Shield the target has before the attack.\nIf the target's HP is less than 50%, increases Shield by 100% after the attack.",
            "scope": "Self",
            "source": "S (Crimson Requiem)",
            "skill_id": 6613
          },
          {
            "char_name": "Ingrid",
            "char_icon": "25_Ingrid",
            "skill_name": "Evil Flame Slash",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Performs a consecutive sword dance to attack the enemy 4 times.\nTarget hit has their Turn Gauge decreased by (15%) at a 10% chance.\nPerforms 2 additional Additional Attacks and deals (75%) Burn Debuff Explode.",
            "scope": "Self",
            "source": "S (Sol Brave)",
            "skill_id": 2512
          },
          {
            "char_name": "Jinglei",
            "char_icon": "18_Jinglei",
            "skill_name": "Kokuryuha",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Unleashes the power of the dragon and attacks ALL enemies.\nPerforms a (60%) DEF Penetrate attack to the target hit.\nOn Last Attack, reduces the Turn Gauge of the enemy with the highest ATK by (15%) at a 65% chance.",
            "scope": "AoE",
            "source": "S (Companion Hand)",
            "skill_id": 1813
          },
          {
            "char_name": "Koro",
            "char_icon": "44_Koro",
            "skill_name": "Soul Art: Soul Resurrection",
            "skill_type": "[Passive Skill]",
            "skill_desc": "When the enemy dies, fills (20%) of the Turn Gauge of ALL allies at a 50% chance.",
            "scope": "AoE",
            "source": "S (Zetsuen)",
            "skill_id": 4413
          },
          {
            "char_name": "Kurenai",
            "char_icon": "21_Kurenai",
            "skill_name": "Wind Art: Wind Cloak",
            "skill_type": "[Support Skill]",
            "skill_desc": "Uses Wind Art to to sharpen the sword further.\nGains (32.5%) CRIT Rate UP.\nDuration: 2 turn(s)\nDecreases (15%) of the target's Turn Gauge at a 20% chance on every CRIT ATK.",
            "scope": "Self",
            "source": "S (Jet Black & Pitch Black)",
            "skill_id": 2112
          },
          {
            "char_name": "Maskedtaimanin",
            "char_icon": "78_Maskedtaimanin",
            "skill_name": "Taimanin Art: Uprising Storm",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Randomly swings the knife and attacks the enemy 8 times.\nPerforms a (75%) Bleed Debuff Explode attack.\nWhen defeating an enemy with this skill, reduces the Turn Gauge of ALL enemies by (15%) at a 50% chance.",
            "scope": "AoE",
            "source": "S (Kokuten)",
            "skill_id": 7812
          },
          {
            "char_name": "Mitsuki",
            "char_icon": "37_Mitsuki",
            "skill_name": "Wind Art: Rampaging Gust",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Makes a large tornado and sends it toward ALL enemies.\nPerforms a Shield Penetrate attack.\nWhen defeating an enemy with this skill, fills (20%) of the Turn Gauge at a 95% chance for ALL allies.\nSteals the SPD UP Buff of ALL enemies before the attack.\nDamage increases in proportion to SPD.",
            "scope": "AoE",
            "source": "S (Nikko)",
            "skill_id": 3713
          },
          {
            "char_name": "Nao",
            "char_icon": "113_Nao",
            "skill_name": "Light Art: Aurora Burst",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Fires a single laser beam at an enemy, dealing DMG.\nTarget hit has their Turn Gauge reduced by (15%) at a 75% chance.\nIf the target's Turn Gauge is less than 10%, increases all Debuffs' duration the target has by 1 turn(s).",
            "scope": "AoE",
            "source": "S (Tyr)",
            "skill_id": 11313
          },
          {
            "char_name": "Natsume",
            "char_icon": "20_Natsume",
            "skill_name": "Alluring Touch",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Attacks ALL enemies with alluring gestures.\nTarget hit is Taunted at a 45% chance.\nDuration: 2 turn(s)\nIf the target already is Taunted, puts them in Confusion state at a fixed chance of 30%.\nDuration: 1 turn(s)\nIf the target is an Agility type, decreases (15%) of their Turn Gauge at a 95% chance.",
            "scope": "AoE",
            "source": "S (Witch Sleeve)",
            "skill_id": 2012
          },
          {
            "char_name": "Noah",
            "char_icon": "26_Noah",
            "skill_name": "Manmade Demon",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Recovers 3.5% of Max. HP whenever an enemy dies, and fills Turn Gauge by (20%) at a 20% chance.\nThe DMG of all of Noah's skills increase the lower the HP.",
            "scope": "AoE",
            "source": "S (Love of Restraints)",
            "skill_id": 2614
          },
          {
            "char_name": "Rene",
            "char_icon": "101_Rene",
            "skill_name": "Justice Execution!",
            "skill_type": "[Passive Skill]",
            "skill_desc": "When an enemy is killed by an ally attack, fills the Turn Gauge of the ally with the highest ATK excluding herself by (20%) at a 20% chance.",
            "scope": "Self",
            "source": "S (Pandora's Box)",
            "skill_id": 10113
          },
          {
            "char_name": "Rin",
            "char_icon": "32_Rin",
            "skill_name": "Lightning Art: Chain Volt",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Overcharges both swords with electricity and slashes at the enemy.\nRemoves 1 Random enemy Buffs and inflicts Faint at 20% rate on Last Attack.\nDuration: 1 turn(s)\nOn every CRIT ATK, absorbs (12.5%) Turn Gauge at a 60% chance.",
            "scope": "Self",
            "source": "S (Lightning Saber II Raizin)",
            "skill_id": 3213
          },
          {
            "char_name": "Sakura",
            "char_icon": "5_Sakura",
            "skill_name": "Mischief Taimanin",
            "skill_type": "[Passive Skill]",
            "skill_desc": "When CRIT ATK lands, fills the character's Turn Gauge by (20%) at a fixed chance of 25%",
            "scope": "Self",
            "source": "S (Kagedachi)",
            "skill_id": 514
          },
          {
            "char_name": "Shizuru",
            "char_icon": "29_Shizuru",
            "skill_name": "Sprout Garden",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "With an elegant dance, petals flutter, restoring HP for ALL allies by 21% of the target's Max. HP. \nAfter recovery, if the target's HP is 65% or more, additionally fills (20%) of the Turn Gauge at a 100% chance.",
            "scope": "AoE",
            "source": "S (Thorn Knight)",
            "skill_id": 2913
          },
          {
            "char_name": "Silkys",
            "char_icon": "90_Silkys",
            "skill_name": "Hero Vibes",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Whenever an ally gets a Debuff, removes 1 Random Debuff of ALL allies.\nFills the Turn Gauge of ALL allies by (20%) at a 65% chance.",
            "scope": "AoE",
            "source": "S (Neon Saucer)",
            "skill_id": 9012
          },
          {
            "char_name": "Spica",
            "char_icon": "70_Spica",
            "skill_name": "Samurai Shooter",
            "skill_type": "[Passive Skill]",
            "skill_desc": "On Turn Start, fills the Turn Gauge of the ally with the highest ATK by (20%) at a 20% chance.",
            "scope": "Self",
            "source": "S (Bushido Striker)",
            "skill_id": 7012
          },
          {
            "char_name": "Tatsuro",
            "char_icon": "12_Tatsuro",
            "skill_name": "Itto Style: Moon Fall",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Leaps high and slashes enemies with a sword gripped in reverse.\nTarget hit is inflicted with (-19.5%) SPD DOWN at a 95% chance.\nDuration: 2 turn(s)\nAbsorbs (12.5%) Turn Gauge at a 35% chance.",
            "scope": "AoE",
            "source": "S (Amakudari)",
            "skill_id": 1212
          },
          {
            "char_name": "Tsumugi",
            "char_icon": "116_Tsumugi",
            "skill_name": "Heavy Smash",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Swings a hammer from above the head, attacking the enemy.\nIf the target has 2 or more Debuffs, absorbs Turn Gauge by (12.5%) at a 10% chance.",
            "scope": "Self",
            "source": "S (Kepler)",
            "skill_id": 11611
          },
          {
            "char_name": "Worrell",
            "char_icon": "226_Worrell",
            "skill_name": "Plasma Rifle: Burst",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Charges the plasma rifle, and fires it 4 time(s) at the enemy.\nPerforms a (60%) DEF Penetrate attack.\nIf only 1 enemy is left, the last attack reduces the Turn Gauge of the target by (15%) at a 85% chance.",
            "scope": "Single Target",
            "source": "S (Crimson Tempest)",
            "skill_id": 22613
          },
          {
            "char_name": "Yuno",
            "char_icon": "69_Yuno",
            "skill_name": "Ravaging Whip",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Lashes the enemy with a whip while in midair, attacking 7 times.\nReduces the target's Turn Gauge by (15%) at a 5% chance, each time the target is hit.\nIf the target's Turn Gauge is less than 30% after the attack, increases the target's Debuffs by 1 turn(s).",
            "scope": "Self",
            "source": "S (Plasma Whip)",
            "skill_id": 6912
          },
          {
            "char_name": "Yuzuriha",
            "char_icon": "17_Yuzuriha",
            "skill_name": "Silk Barrier",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Deploys wires to suspend ALL enemies in midair, then instantly slices and attacks them.\nInflicts (-19.5%) EVD DOWN to the target hit at a 90% chance on the Last Attack.\nDuration: 2 turn(s)\nIf the target already has EVD DOWN, reduces the Turn Gauge by (15%) at a 70% chance.",
            "scope": "AoE",
            "source": "S (Atropos Glove)",
            "skill_id": 1713
          }
        ]
      }
    ]
  },
  {
    "name": "Damage Enhancement",
    "mechanics": [
      {
        "id": "defense-penetration",
        "name": "Defense Penetration",
        "group": "Damage Enhancement",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Astaroth",
            "char_icon": "27_Astaroth",
            "skill_name": "Queen of the Inferno",
            "skill_type": "[Passive Skill]",
            "skill_desc": "When attacking an enemy with Burn, performs a (15%) DEF Penetrate attack.",
            "scope": "Self",
            "source": "S (Ruby Eye)",
            "skill_id": 2714
          },
          {
            "char_name": "Homura",
            "char_icon": "35_Homura",
            "skill_name": "Flaming Spear Battler",
            "skill_type": "[Passive Skill]",
            "skill_desc": "When attacking an enemy with HP at 70% or more, reduces 1 turn(s) of 1 Random Buff they possess.\nWhen attacking an enemy with HP less than 40%, performs a (15%) DEF Penetrate attack.",
            "scope": "Self",
            "source": "S (Tsukiyo)",
            "skill_id": 3514
          },
          {
            "char_name": "Jinglei",
            "char_icon": "18_Jinglei",
            "skill_name": "Kokuryuha",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Unleashes the power of the dragon and attacks ALL enemies.\nPerforms a (60%) DEF Penetrate attack to the target hit.\nOn Last Attack, reduces the Turn Gauge of the enemy with the highest ATK by (15%) at a 65% chance.",
            "scope": "AoE",
            "source": "S (Companion Hand)",
            "skill_id": 1813
          },
          {
            "char_name": "Mizuki",
            "char_icon": "57_Mizuki",
            "skill_name": "Burning Grit",
            "skill_type": "[Passive Skill]",
            "skill_desc": "If character's HP is 40% or more, DMG increases by (7.5%).\nIf character's HP is 80% or more, performs a (15%) DEF Penetrate attack.",
            "scope": "Self",
            "source": "S (Taotei)",
            "skill_id": 5713
          },
          {
            "char_name": "Tougekinki",
            "char_icon": "60_Tougekinki",
            "skill_name": "Demon of \"Iron\"",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Performs a (15%) DEF Penetrate attack per Debuff the target has.\nStacks up to 5.",
            "scope": "Self",
            "source": "S (Rengoku)",
            "skill_id": 6014
          },
          {
            "char_name": "Worrell",
            "char_icon": "226_Worrell",
            "skill_name": "Plasma Rifle: Burst",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Charges the plasma rifle, and fires it 4 time(s) at the enemy.\nPerforms a (60%) DEF Penetrate attack.\nIf only 1 enemy is left, the last attack reduces the Turn Gauge of the target by (15%) at a 85% chance.",
            "scope": "Single Target",
            "source": "S (Crimson Tempest)",
            "skill_id": 22613
          }
        ]
      },
      {
        "id": "shield-penetration",
        "name": "Shield Penetration",
        "group": "Damage Enhancement",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Mari",
            "char_icon": "51_Mari",
            "skill_name": "Tales of the Class Rep.",
            "skill_type": "[Passive Skill]",
            "skill_desc": "When attacking an Incapacitated enemy, performs a Shield Penetrate attack.",
            "scope": "Self",
            "source": "S (Cartridge Buster)",
            "skill_id": 5114
          },
          {
            "char_name": "Mitsuki",
            "char_icon": "37_Mitsuki",
            "skill_name": "Wind Art: Rampaging Gust",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Makes a large tornado and sends it toward ALL enemies.\nPerforms a Shield Penetrate attack.\nWhen defeating an enemy with this skill, fills (20%) of the Turn Gauge at a 95% chance for ALL allies.\nSteals the SPD UP Buff of ALL enemies before the attack.\nDamage increases in proportion to SPD.",
            "scope": "AoE",
            "source": "S (Nikko)",
            "skill_id": 3713
          },
          {
            "char_name": "Orochi",
            "char_icon": "61_Orochi",
            "skill_name": "Holy Oni Warrior",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Performs a Shield Penetrate attack on enemies with HP at 75% or more.",
            "scope": "AoE",
            "source": "S (Ryuuga)",
            "skill_id": 6112
          },
          {
            "char_name": "Rinko",
            "char_icon": "11_Rinko",
            "skill_name": "Itto Style: Kogarasi-no-Kata",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Uses Void Art to mercilessly slash the enemy, attacking 4 times.\nEach hit performs a Shield Penetrate attack.\nIf the character has 2 or more Buff, performs 1 Additional Attack.\nWhen an Additional Attack is triggered, inflicts (-24%) SPD DOWN on the target at a 99% chance.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Zetsuei)",
            "skill_id": 1112
          },
          {
            "char_name": "Snakelady",
            "char_icon": "71_Snakelady",
            "skill_name": "Venom Smash",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Attacks the enemy with a powerful dropkick.\nIf the target's HP is less than 30%, performs a Shield Penetrate attack.\nInflicts 2 (2.5%) Poison to the target on Last Attack at a 80% chance.",
            "scope": "Self",
            "source": "S (Blue Viper)",
            "skill_id": 7113
          }
        ]
      }
    ]
  },
  {
    "name": "Buff Manipulation",
    "mechanics": [
      {
        "id": "buff-extension",
        "name": "Buff Extension",
        "group": "Buff Manipulation",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Felicia",
            "char_icon": "30_Felicia",
            "skill_name": "Immortal Hunting",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "When the target has 3 or more Debuffs, and the character's HP is less than 30%, attacking an enemy deals Instant Death at a fixed chance of 75%.\nIncreases the duration of all Buffs by 1 turn after the attack.\nSteals Immortal from the enemy before the attack.\nAttacks 1 enemy 1 time.",
            "scope": "AoE",
            "source": "S (Soul Eraser)",
            "skill_id": 3013
          },
          {
            "char_name": "Shiranui",
            "char_icon": "13_Shiranui",
            "skill_name": "Water Art: Crushing Wave",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Creates a huge wave and sends it to the enemy, target is inflicted with Immobilize\nDuration: 2 turn(s)\nIf the character has 2 or more Buffs, increases the duration of 1 Random Buff held by ALL allies by 1 turn after the attack.",
            "scope": "AoE",
            "source": "S (Hannyagiri)",
            "skill_id": 1312
          },
          {
            "char_name": "Uzuki",
            "char_icon": "119_Uzuki",
            "skill_name": "Light Art: Flash Cannon",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Fires a ray of light at the enemy, attacking 4 times.\nIf the target has 2 or more Debuffs, on every attack, increases the duration of 1 Random Buff of ALL allies by 1 turn(s) at a fixed chance of 25%.",
            "scope": "AoE",
            "source": "S (Dawnbreaker)",
            "skill_id": 11912
          }
        ]
      },
      {
        "id": "buff-share",
        "name": "Buff Share",
        "group": "Buff Manipulation",
        "scope": "buff",
        "characters": []
      },
      {
        "id": "buff-steal",
        "name": "Buff Steal",
        "group": "Buff Manipulation",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Black",
            "char_icon": "66_Black",
            "skill_name": "End of Darkness",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Attacks the enemy using his ability.\nReduces the target's Turn Gauge by (15%) at a 75% chance on Last Attack.\nSteals the Shield the target has before the attack.\nIf the target's HP is less than 50%, increases Shield by 100% after the attack.",
            "scope": "Self",
            "source": "S (Crimson Requiem)",
            "skill_id": 6613
          },
          {
            "char_name": "Crackle",
            "char_icon": "129_Crackle",
            "skill_name": "NyaNya Attack",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Curls up into a ball and attacks the enemy 6 times while spinning.\nEvery time a CRIT ATK lands, steals 1 Random Buff from the target at a 15% chance.",
            "scope": "AoE",
            "source": "S (Hellcat Glove)",
            "skill_id": 12913
          },
          {
            "char_name": "Felicia",
            "char_icon": "30_Felicia",
            "skill_name": "Immortal Hunting",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "When the target has 3 or more Debuffs, and the character's HP is less than 30%, attacking an enemy deals Instant Death at a fixed chance of 75%.\nIncreases the duration of all Buffs by 1 turn after the attack.\nSteals Immortal from the enemy before the attack.\nAttacks 1 enemy 1 time.",
            "scope": "AoE",
            "source": "S (Soul Eraser)",
            "skill_id": 3013
          },
          {
            "char_name": "Kaede",
            "char_icon": "114_Kaede",
            "skill_name": "Wind Bow: Soaring Wolf",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Jumps up into the air and fires a powerful shot at the enemy.\nIf the target's HP is 80% or more,  steals 1 Random Buff(s) the target has.",
            "scope": "Self",
            "source": "S (Rouga)",
            "skill_id": 11411
          },
          {
            "char_name": "Kotaro",
            "char_icon": "54_Kotaro",
            "skill_name": "Taimanin Art: Fuuma",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Approaches the enemy, stabs and then slashes them to attack.\nSteals 1 Random Buffs from the target hit at a 20% chance.",
            "scope": "Self",
            "source": "S (Fuuma)",
            "skill_id": 5411
          },
          {
            "char_name": "Mitsuki",
            "char_icon": "37_Mitsuki",
            "skill_name": "Wind Art: Rampaging Gust",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Makes a large tornado and sends it toward ALL enemies.\nPerforms a Shield Penetrate attack.\nWhen defeating an enemy with this skill, fills (20%) of the Turn Gauge at a 95% chance for ALL allies.\nSteals the SPD UP Buff of ALL enemies before the attack.\nDamage increases in proportion to SPD.",
            "scope": "AoE",
            "source": "S (Nikko)",
            "skill_id": 3713
          },
          {
            "char_name": "Robel",
            "char_icon": "86_Robel",
            "skill_name": "Type: Hero",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Lovell's skill gets enhanced every 4 turns.\nParticle Weapon: Shini: Steals enemy Shield. Shield effect increases by 50% after stealing.\nParticle Weapon: Kamui\nShield amount increases by 24%.\nGrants (40%) Protect Ally to ALL allies.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Tomurai & Requiem)",
            "skill_id": 8613
          }
        ]
      },
      {
        "id": "debuff-remove",
        "name": "Debuff Remove",
        "group": "Buff Manipulation",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Amane",
            "char_icon": "6_Amane",
            "skill_name": "Fuuma Martial Art: Skyfall",
            "skill_type": "[Passive Skill]",
            "skill_desc": "On Turn Start absorbs (12.5%) Turn Gauge of the enemy with the strongest ATK at a 50% chance.\nOn Turn Start, removes 1 Debuff on the character.",
            "scope": "Self",
            "source": "S (Android Arm Secrecy)",
            "skill_id": 612
          },
          {
            "char_name": "Hikage",
            "char_icon": "120_Hikage",
            "skill_name": "Wind Art: Spring Wind",
            "skill_type": "[Support Skill]",
            "skill_desc": "Grants (45%) ATK UP to 1 ally.\nDuration: 2 turn(s)\nRemoves all Debuffs.",
            "scope": "AoE",
            "source": "S (Amayo)",
            "skill_id": 12012
          },
          {
            "char_name": "Sensyu",
            "char_icon": "91_Sensyu",
            "skill_name": "Poisonous Raksha",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Removes all Poison Debuff from the character when hit.\nIf this skill is on Cooldown, increases Poison DMG by 3% at a 50% chance on every attack's Last Attack.",
            "scope": "AoE",
            "source": "S (Poison Dragon Claw)",
            "skill_id": 9112
          },
          {
            "char_name": "Silkys",
            "char_icon": "90_Silkys",
            "skill_name": "Hero Vibes",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Whenever an ally gets a Debuff, removes 1 Random Debuff of ALL allies.\nFills the Turn Gauge of ALL allies by (20%) at a 65% chance.",
            "scope": "AoE",
            "source": "S (Neon Saucer)",
            "skill_id": 9012
          }
        ]
      }
    ]
  },
  {
    "name": "Damage Over Time",
    "mechanics": [
      {
        "id": "absorb",
        "name": "Absorb",
        "group": "Damage Over Time",
        "scope": "debuff",
        "characters": []
      },
      {
        "id": "bleed",
        "name": "Bleed",
        "group": "Damage Over Time",
        "scope": "debuff",
        "characters": [
          {
            "char_name": "Aki",
            "char_icon": "45_Aki",
            "skill_name": "Chasing Slash",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Swings a sword left and right to attack the enemy 4 times.\nIf the target has Bleed on last Last Attack, inflicts (22.5%) Weaken.\nDuration: 2 turn(s)\nGains (32.5%) CRIT Rate UP before the attack. \nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Giren)",
            "skill_id": 4512
          },
          {
            "char_name": "Felicia",
            "char_icon": "30_Felicia",
            "skill_name": "Seven Hells",
            "skill_type": "[Attack Skill]",
            "skill_desc": "After launching the enemy into the air, jumps up and attacks 4 times in total.\nTarget hit is inflicted (10%) Bleed at a 10% chance.\nDuration: 3 turn(s)\nWhen Vampire Princess is on Cooldown, performs an Additional Attack 1 time.\nOn Last Attack, increases Bleed effect by 1 turn(s).\nDuration: 1 turn(s)",
            "scope": "Self",
            "source": "S (Crow's Beak)",
            "skill_id": 3012
          },
          {
            "char_name": "Maskedtaimanin",
            "char_icon": "78_Maskedtaimanin",
            "skill_name": "Taimanin Art: Uprising Storm",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Randomly swings the knife and attacks the enemy 8 times.\nPerforms a (75%) Bleed Debuff Explode attack.\nWhen defeating an enemy with this skill, reduces the Turn Gauge of ALL enemies by (15%) at a 50% chance.",
            "scope": "AoE",
            "source": "S (Kokuten)",
            "skill_id": 7812
          },
          {
            "char_name": "Oboro",
            "char_icon": "23_Oboro",
            "skill_name": "Wicked Slasher",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Lightly jumps and stabs the enemy with their claws.\nPerforms a (75%) Bleed Debuff Explode attack.",
            "scope": "Self",
            "source": "S (Black Iron Claw)",
            "skill_id": 2313
          },
          {
            "char_name": "Sayaneo",
            "char_icon": "59_Sayaneo",
            "skill_name": "Saya NEO Special",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Stabs mercilessly with tentacles to attack the enemy.\nThis skill performs a (15%) Life Steal attack.\nPerforms a (75%) Debuff Explode Bleed attack.",
            "scope": "Self",
            "source": "S (Abyss Crawler)",
            "skill_id": 5913
          },
          {
            "char_name": "Toyo",
            "char_icon": "53_Toyo",
            "skill_name": "Momochi Style Ultimate: Kodoku",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "After launching a series of attacks with the weapons covering the body, finishes the enemy with the blade on the back.\nTarget hit is inflicted with Bleed, Poison, and Burn by 10%, 3%, and 5% respectively.\nFor each Debuff the target has, DMG increases by (55%).\nStacks up to 4.",
            "scope": "Self",
            "source": "S (Magatsuki)",
            "skill_id": 5313
          },
          {
            "char_name": "Yeager",
            "char_icon": "102_Yeager",
            "skill_name": "Jäger Cross",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Quickly launches at the enemy and slashes them in a cross-shape and explodes, attacking 3 time(s).\nIf the enemy isn't the only one remaining, performs a (75%) Bleed, Burn, Poison Debuff Explode attack.\nIf the enemy is the only one remaining, performs a (100%) Bleed, Burn, Poison Debuff Explode attack.",
            "scope": "Self",
            "source": "S (Crimson Reaper)",
            "skill_id": 10213
          }
        ]
      },
      {
        "id": "burn",
        "name": "Burn",
        "group": "Damage Over Time",
        "scope": "debuff",
        "characters": [
          {
            "char_name": "Astaroth",
            "char_icon": "27_Astaroth",
            "skill_name": "Heat Wave",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Attacks ALL enemies by lighting the ground beneath them on fire.\nInflicts (3.5%) Burn at a 60% chance on Last Attack.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Throne Bracelet)",
            "skill_id": 2712
          },
          {
            "char_name": "Bell",
            "char_icon": "103_Bell",
            "skill_name": "Satellite Beam",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Throws a signal beacon to mark the bomb drop location, to attack ALL enemies.\nTargets hit are inflicted with (3.5%) Burn.\nDuration: 3 turn(s)\nIf the target's HP is less than 30% after the attack, additionally inflicts Burn.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (BS Assault Shooter Custom)",
            "skill_id": 10313
          },
          {
            "char_name": "Burroughs",
            "char_icon": "76_Burroughs",
            "skill_name": "Charge Slash",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Focuses energy on the sword and attacks ALL enemies.\nTarget hit is inflicted with (3.5%) Burn at a 50% chance.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Berserker Blade)",
            "skill_id": 7612
          },
          {
            "char_name": "Denji",
            "char_icon": "110_Denji",
            "skill_name": "Explosive Art: Dust Cloud",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Throws a sugar cube at a targeted enemy and 1 Random enemy.\nTargets hit are inflicted with (3.5%) Burn at a 15% chance.\nDuration: 3 turn(s)",
            "scope": "Self",
            "source": "S (Hibana)",
            "skill_id": 11011
          },
          {
            "char_name": "Homura",
            "char_icon": "35_Homura",
            "skill_name": "Flaming Spear",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Charges while mounted on a spear and attacks 2 times.\nIf the target is inflicted with Burn, CRIT Rate increases 7.5%.",
            "scope": "Self",
            "source": "S (Hyakuren)",
            "skill_id": 3511
          },
          {
            "char_name": "Ingrid",
            "char_icon": "25_Ingrid",
            "skill_name": "Evil Flame Slash",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Performs a consecutive sword dance to attack the enemy 4 times.\nTarget hit has their Turn Gauge decreased by (15%) at a 10% chance.\nPerforms 2 additional Additional Attacks and deals (75%) Burn Debuff Explode.",
            "scope": "Self",
            "source": "S (Sol Brave)",
            "skill_id": 2512
          },
          {
            "char_name": "Maika",
            "char_icon": "31_Maika",
            "skill_name": "Meido Bazooka <Grenade>",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "After jumping into the air, fires a super-heated flame bullet toward the ground, attacking ALL enemies.\nWhen an enemy is defeated by this skill, resets Cooldown of Blazing Barrage.\nInflicts (3.5%) Burn to ALL enemies at a 75% chance before the attack.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Nuclear Option)",
            "skill_id": 3113
          },
          {
            "char_name": "Rika",
            "char_icon": "40_Rika",
            "skill_name": "Cross Slash",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Launches a cross-shaped sword aura at the enemy.\nTarget hit is inflicted with (3.5%) Burn at a 15% chance.\nDuration: 3 turn(s)",
            "scope": "Self",
            "source": "S (Suitenko)",
            "skill_id": 4011
          },
          {
            "char_name": "Sora",
            "char_icon": "43_Sora",
            "skill_name": "Apprentice Taimanin",
            "skill_type": "[Passive Skill]",
            "skill_desc": "If the character has a Buff, inflicts (3.5%) Burn to the target at a 15% chance.\nDuration: 3 turn(s)",
            "scope": "Self",
            "source": "S (Higure)",
            "skill_id": 4313
          },
          {
            "char_name": "Toyo",
            "char_icon": "53_Toyo",
            "skill_name": "Momochi Assassin Arts: Serpent",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Draws two swords from the back and stabs the enemy 7 times.\nTarget hit is inflicted with Immobilize.\nDuration: 2 turn(s)\nWhen defeating the enemy, inflicts ALL enemies with (3.5%) Burn.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Utzuro)",
            "skill_id": 5312
          },
          {
            "char_name": "Tsuru",
            "char_icon": "82_Tsuru",
            "skill_name": "Bullet Party",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Sprays bullets, attacking the enemy 7 times.\nTarget hit is inflicted with (3.5%) Burn at a 5% chance.\nDuration: 3 turn(s)",
            "scope": "Self",
            "source": "S (Order-maid)",
            "skill_id": 8211
          },
          {
            "char_name": "Yeager",
            "char_icon": "102_Yeager",
            "skill_name": "Jäger Cross",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Quickly launches at the enemy and slashes them in a cross-shape and explodes, attacking 3 time(s).\nIf the enemy isn't the only one remaining, performs a (75%) Bleed, Burn, Poison Debuff Explode attack.\nIf the enemy is the only one remaining, performs a (100%) Bleed, Burn, Poison Debuff Explode attack.",
            "scope": "Self",
            "source": "S (Crimson Reaper)",
            "skill_id": 10213
          }
        ]
      },
      {
        "id": "poison",
        "name": "Poison",
        "group": "Damage Over Time",
        "scope": "debuff",
        "characters": [
          {
            "char_name": "Anemone",
            "char_icon": "77_Anemone",
            "skill_name": "Call of Anubis",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Spreads a wide web to attack ALL enemies.\nTargets hit by the web are inflicted with (2.5%) Poison at a 15% chance.\nDuration : 3 turn(s)\nIf the target has 4 or more Debuffs, absorbs (12.5%) Turn Gauge at a 35% chance on the Last Attack. \nIf the target's Turn Gauge is less than 30%, increases the efficacy of Poison by 3% at a 60% chance after the attack.\nDuration : 3 turn(s)",
            "scope": "AoE",
            "source": "S (In Memorial)",
            "skill_id": 7712
          },
          {
            "char_name": "Furfur",
            "char_icon": "65_Furfur",
            "skill_name": "Demon Bug: Firefly",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Small demon insects trigger a chain of explosions, attacking ALL enemies 3 times.\nInflicts (2.5%) Poison at a 75% chance on the Last Attack for 2 times.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Hræsvelgr)",
            "skill_id": 6512
          },
          {
            "char_name": "Kaworu",
            "char_icon": "74_Kaworu",
            "skill_name": "Chain Art: Chain Frenzy",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Swings the chain randomly, attacking ALL enemies 6 times.\nTargets hit is inflicted with (2.5%) Poison at a 10% chance.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Murakumo Iron Chains)",
            "skill_id": 7413
          },
          {
            "char_name": "Saburo",
            "char_icon": "94_Saburo",
            "skill_name": "The 18th Saburo",
            "skill_type": "[Passive Skill]",
            "skill_desc": "If the character is inflicted with a Debuff, inflicts ALL enemies with (2.5%) Poison at a 60% chance.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Kogoro Plush)",
            "skill_id": 9412
          },
          {
            "char_name": "Sensyu",
            "char_icon": "91_Sensyu",
            "skill_name": "Poisonous Raksha",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Removes all Poison Debuff from the character when hit.\nIf this skill is on Cooldown, increases Poison DMG by 3% at a 50% chance on every attack's Last Attack.",
            "scope": "AoE",
            "source": "S (Poison Dragon Claw)",
            "skill_id": 9112
          },
          {
            "char_name": "Snakelady",
            "char_icon": "71_Snakelady",
            "skill_name": "Venom Smash",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Attacks the enemy with a powerful dropkick.\nIf the target's HP is less than 30%, performs a Shield Penetrate attack.\nInflicts 2 (2.5%) Poison to the target on Last Attack at a 80% chance.",
            "scope": "Self",
            "source": "S (Blue Viper)",
            "skill_id": 7113
          },
          {
            "char_name": "Toyo",
            "char_icon": "53_Toyo",
            "skill_name": "Momochi Style Ultimate: Kodoku",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "After launching a series of attacks with the weapons covering the body, finishes the enemy with the blade on the back.\nTarget hit is inflicted with Bleed, Poison, and Burn by 10%, 3%, and 5% respectively.\nFor each Debuff the target has, DMG increases by (55%).\nStacks up to 4.",
            "scope": "Self",
            "source": "S (Magatsuki)",
            "skill_id": 5313
          },
          {
            "char_name": "Yeager",
            "char_icon": "102_Yeager",
            "skill_name": "Jäger Cross",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Quickly launches at the enemy and slashes them in a cross-shape and explodes, attacking 3 time(s).\nIf the enemy isn't the only one remaining, performs a (75%) Bleed, Burn, Poison Debuff Explode attack.\nIf the enemy is the only one remaining, performs a (100%) Bleed, Burn, Poison Debuff Explode attack.",
            "scope": "Self",
            "source": "S (Crimson Reaper)",
            "skill_id": 10213
          }
        ]
      }
    ]
  },
  {
    "name": "Crowd Control",
    "mechanics": [
      {
        "id": "confuse",
        "name": "Confusion",
        "group": "Crowd Control",
        "scope": "debuff",
        "characters": [
          {
            "char_name": "Natsume",
            "char_icon": "20_Natsume",
            "skill_name": "Alluring Touch",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Attacks ALL enemies with alluring gestures.\nTarget hit is Taunted at a 45% chance.\nDuration: 2 turn(s)\nIf the target already is Taunted, puts them in Confusion state at a fixed chance of 30%.\nDuration: 1 turn(s)\nIf the target is an Agility type, decreases (15%) of their Turn Gauge at a 95% chance.",
            "scope": "AoE",
            "source": "S (Witch Sleeve)",
            "skill_id": 2012
          },
          {
            "char_name": "Suzuka",
            "char_icon": "118_Suzuka",
            "skill_name": "Scarlet Art: Scarlet Miasma",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Spreads Scarlet Art forward to attack ALL enemies.\nWhen attacking a target with 3 or more Debuffs, inflicts Confusion at a 55% chance.\nDuration: 1 turn(s)",
            "scope": "AoE",
            "source": "S (Shiranami)",
            "skill_id": 11813
          },
          {
            "char_name": "Yukiha",
            "char_icon": "8_Yukiha",
            "skill_name": "Snow Assassin",
            "skill_type": "[Passive Skill]",
            "skill_desc": "If the enemy dies after the attack, puts 1 Random enemy into Confusion mode at a 70% chance.\nDuration: 1 turn(s)",
            "scope": "Self",
            "source": "S (Yamidachi)",
            "skill_id": 813
          }
        ]
      },
      {
        "id": "freeze",
        "name": "Freeze",
        "group": "Crowd Control",
        "scope": "debuff",
        "characters": [
          {
            "char_name": "Shirayuki",
            "char_icon": "3_Shirayuki",
            "skill_name": "Ice Fall",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Creates a large ice crystal and drops it on top of ALL enemies.\nTargets hit are inflicted with (25%) Freeze at a 35% chance.\nIf the character has 2 or more Buffs inflicting Freeze is guaranteed.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Crystal Staff)",
            "skill_id": 313
          }
        ]
      },
      {
        "id": "immobilize",
        "name": "Immobilize",
        "group": "Crowd Control",
        "scope": "debuff",
        "characters": [
          {
            "char_name": "Hisui",
            "char_icon": "41_Hisui",
            "skill_name": "Eclipse Meld: Resonate",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Using a skill on every 4th turn grants an additional effect.\nWhen using Monk Staff Art, Healing Effect increases by (100%).\nWhen using Eclipse Meld: Syphoning Strike, inflicts Immobilize on the enemy.\nDuration: 2 turn(s)\nWhen using Eclipse Meld: Sound, grants a (7%) Healing Over Time to all allies for 2 turn(s).",
            "scope": "AoE",
            "source": "S (Jizo's Steel Staff)",
            "skill_id": 4114
          },
          {
            "char_name": "Shiranui",
            "char_icon": "13_Shiranui",
            "skill_name": "Water Art: Crushing Wave",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Creates a huge wave and sends it to the enemy, target is inflicted with Immobilize\nDuration: 2 turn(s)\nIf the character has 2 or more Buffs, increases the duration of 1 Random Buff held by ALL allies by 1 turn after the attack.",
            "scope": "AoE",
            "source": "S (Hannyagiri)",
            "skill_id": 1312
          },
          {
            "char_name": "Toyo",
            "char_icon": "53_Toyo",
            "skill_name": "Momochi Assassin Arts: Serpent",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Draws two swords from the back and stabs the enemy 7 times.\nTarget hit is inflicted with Immobilize.\nDuration: 2 turn(s)\nWhen defeating the enemy, inflicts ALL enemies with (3.5%) Burn.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Utzuro)",
            "skill_id": 5312
          },
          {
            "char_name": "Yaobikuni",
            "char_icon": "97_Yaobikuni",
            "skill_name": "Soul Wave",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Fires a powerful laser at the enemy.\nTarget hit is inflicted with Immobilize at a 30% chance.\nDuration: 2 turn(s)\nIncreases all skill Cooldown of the target by 1 turn(s).",
            "scope": "AoE",
            "source": "S (Dawnbreaker Staff)",
            "skill_id": 9712
          }
        ]
      },
      {
        "id": "sleep",
        "name": "Sleep",
        "group": "Crowd Control",
        "scope": "debuff",
        "characters": []
      },
      {
        "id": "stun",
        "name": "Stun",
        "group": "Crowd Control",
        "scope": "debuff",
        "characters": [
          {
            "char_name": "Anje",
            "char_icon": "84_Anje",
            "skill_name": "Tentacle Ambush",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Drives tentacles into the ground, attacking 1 Random enemy.\nTarget hit is inflicted with Faint at a 5% chance.\nDuration: 1 turn(s)",
            "scope": "Self",
            "source": "S (Kraken Anchor)",
            "skill_id": 8411
          },
          {
            "char_name": "Gaiza",
            "char_icon": "55_Gaiza",
            "skill_name": "Grudgeful Strike",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Ruthlessly slashes the sword at the enemy 9 times.\nTarget hit is inflicted with Faint at a 5% chance.\nDuration: 1 turn(s)\nIncreases target's DMG by (45%) per Buff they have.\nStacks up to 3.",
            "scope": "Self",
            "source": "S (Nakigara)",
            "skill_id": 5513
          },
          {
            "char_name": "Mari",
            "char_icon": "51_Mari",
            "skill_name": "Earth Art: Stone Spear",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Performs a Power Hit on the ground and attacks ALL enemies.\nIf the target has 2 or more Debuffs, inflicts them with Faint.\nDuration: 1 turn(s)",
            "scope": "AoE",
            "source": "S (Gear Bracelet)",
            "skill_id": 5113
          },
          {
            "char_name": "Mawari",
            "char_icon": "108_Mawari",
            "skill_name": "Dumbo Attack!?",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Runs toward the enemy and trips to do a headbutt attack.\nTarget is inflicted with Faint at a 20% chance.\nDuration: 1 turn(s)",
            "scope": "Self",
            "source": "S (Ushio)",
            "skill_id": 10812
          },
          {
            "char_name": "Rin",
            "char_icon": "32_Rin",
            "skill_name": "Lightning Art: Chain Volt",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Overcharges both swords with electricity and slashes at the enemy.\nRemoves 1 Random enemy Buffs and inflicts Faint at 20% rate on Last Attack.\nDuration: 1 turn(s)\nOn every CRIT ATK, absorbs (12.5%) Turn Gauge at a 60% chance.",
            "scope": "Self",
            "source": "S (Lightning Saber II Raizin)",
            "skill_id": 3213
          }
        ]
      },
      {
        "id": "taunt",
        "name": "Taunt",
        "group": "Crowd Control",
        "scope": "debuff",
        "characters": [
          {
            "char_name": "Akina",
            "char_icon": "121_Akina",
            "skill_name": "Stone Art: Heavyweight",
            "skill_type": "[Support Skill]",
            "skill_desc": "Charges up energy and gains (40%) DEF UP.\nDuration: 2 turn(s)\nRestores 15% of Max. HP.\nTaunts 1 Random enemy.",
            "scope": "Self",
            "source": "S (Utopia)",
            "skill_id": 12112
          },
          {
            "char_name": "Fuyumi",
            "char_icon": "39_Fuyumi",
            "skill_name": "Taimanin Art: Spear",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Using the character's abilities and spear, attacks the enemy a total of 3 times.\nTaunts the target hit at a 5% chance.\nDuration: 2 turn(s)\nDamage increases in proportion to HP lost.",
            "scope": "Self",
            "source": "S (Spring Breeze)",
            "skill_id": 3911
          },
          {
            "char_name": "Houensai",
            "char_icon": "111_Houensai",
            "skill_name": "Oil Art: Flame Disaster",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Breathes out fire, attacking ALL enemies 3 times.\nRemoves Shield from the targets.\nTargets hit are Taunted at a 30% chance.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Daruma)",
            "skill_id": 11113
          },
          {
            "char_name": "Major",
            "char_icon": "63_Major",
            "skill_name": "Chance Maker",
            "skill_type": "[Support Skill]",
            "skill_desc": "Taunts ALL enemies.\nDuration: 2 turn(s)\nThe character gains (10%) Damage Reflect.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Moon Shot)",
            "skill_id": 6312
          },
          {
            "char_name": "Murasaki",
            "char_icon": "19_Murasaki",
            "skill_name": "Fortification",
            "skill_type": "[Support Skill]",
            "skill_desc": "Gains a Shield equal to 19.5% of the character's Max. HP.\nDuration: 2 turn(s)\nTaunts ALL enemies at a fixed chance of 30%\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Combat Axe)",
            "skill_id": 1912
          },
          {
            "char_name": "Natsume",
            "char_icon": "20_Natsume",
            "skill_name": "Alluring Touch",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Attacks ALL enemies with alluring gestures.\nTarget hit is Taunted at a 45% chance.\nDuration: 2 turn(s)\nIf the target already is Taunted, puts them in Confusion state at a fixed chance of 30%.\nDuration: 1 turn(s)\nIf the target is an Agility type, decreases (15%) of their Turn Gauge at a 95% chance.",
            "scope": "AoE",
            "source": "S (Witch Sleeve)",
            "skill_id": 2012
          },
          {
            "char_name": "Sokushitsuki",
            "char_icon": "125_Sokushitsuki",
            "skill_name": "Raging Wind, Clear Moon",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Slashes the enemy with Iaido after while laughing.\nTaunts ALL enemies at a 35% chance before the attack.\nDuration: 2 turn(s)\nGains (19.5%) Power-up after the attack.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Minagoroshi)",
            "skill_id": 12513
          }
        ]
      }
    ]
  },
  {
    "name": "Skill Suppression",
    "mechanics": [
      {
        "id": "electrocute",
        "name": "Electrocute",
        "group": "Skill Suppression",
        "scope": "debuff",
        "characters": [
          {
            "char_name": "Rin",
            "char_icon": "32_Rin",
            "skill_name": "Volt Taimanin",
            "skill_type": "[Passive Skill]",
            "skill_desc": "If the target is inflicted with Electrocute, DMG increases (7.5%).\nIf the target is inflicted with Faint, CRIT Rate increases (7.5%).",
            "scope": "Self",
            "source": "S (Mist Grave)",
            "skill_id": 3214
          },
          {
            "char_name": "Shikanosuke",
            "char_icon": "80_Shikanosuke",
            "skill_name": "Elec Art: Lightning Tackle",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Charges at the enemy with electricity coursing through the character.\nTarget hit is guaranteed to be inflicted with Electrocute.\nDuration: 2 turn(s)\nGains (2) Protective Shield after the attack.\nDuration: 2 turn(s)\nIf Uehara Rin is deployed, applies the same effect to Uehara Rin.",
            "scope": "Self",
            "source": "S (Snowflake)",
            "skill_id": 8013
          },
          {
            "char_name": "Yukikaze",
            "char_icon": "238_Yukikaze",
            "skill_name": "Linear Thunder",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Jumps into the air and sprays bullets at ALL enemies.\nIncreases the CRIT Rate by (15%) when attacking.\nTarget hit by a CRIT ATK is inflicted with Electrocute at a fixed chance of 35%.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Flame Tiger Custom)",
            "skill_id": 713
          }
        ]
      }
    ]
  },
  {
    "name": "Stat Debuffs",
    "mechanics": [
      {
        "id": "atk-down",
        "name": "ATK Down",
        "group": "Stat Debuffs",
        "scope": "debuff",
        "characters": []
      },
      {
        "id": "def-down",
        "name": "DEF Down",
        "group": "Stat Debuffs",
        "scope": "debuff",
        "characters": [
          {
            "char_name": "Sakura",
            "char_icon": "5_Sakura",
            "skill_name": "Shadow Arts: Beast Call",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Summons a shadow creature and sends it toward the enemy.\nInflicts (-40%) DEF DOWN to the target at a 95% chance before the attack \nDuration: 2 turn(s)\nGoes into Stealth mode when killing an enemy with this skill.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Assasin's Dagger)",
            "skill_id": 512
          }
        ]
      },
      {
        "id": "heal-reduction",
        "name": "Heal Reduction",
        "group": "Stat Debuffs",
        "scope": "debuff",
        "characters": [
          {
            "char_name": "Anemone",
            "char_icon": "77_Anemone",
            "skill_name": "Reaper-Summoning Thread",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Attacks ALL enemies 1 time.\nDMG increases by 22.5% of the target's current HP.\nTargets are inflicted with (50%)Heal Reduction at a 99% chance.\nDuration : 2 turn(s)\nIf the target is left alone, they are inflicted with (2.5%) Poison at a 90% chance.\nDuration : 3 turn(s)",
            "scope": "AoE",
            "source": "S (Rosebud)",
            "skill_id": 7713
          },
          {
            "char_name": "Asagi",
            "char_icon": "1_Asagi",
            "skill_name": "Hirenka",
            "skill_type": "[Attack Skill]",
            "skill_desc": "After kicking the enemy upward, slashes them 4 times in midair for a total of 5 attacks.\nTarget hit is inflicted with (65%) Heal Reduction at a 99% chance.\nDuration: 2 turn(s)\nKilling an enmey with this skill resets the Cooldown of Koujin Zanka",
            "scope": "Self",
            "source": "S (Gurren)",
            "skill_id": 112
          },
          {
            "char_name": "Maskedtaimanin",
            "char_icon": "78_Maskedtaimanin",
            "skill_name": "Mask of Concealment",
            "skill_type": "[Passive Skill]",
            "skill_desc": "If the target has 3 or more Buffs upon attack, inflicts (60%) Heal Reduction at a 20% chance.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Blade Crusher)",
            "skill_id": 7814
          }
        ]
      },
      {
        "id": "spd-down",
        "name": "SPD Down",
        "group": "Stat Debuffs",
        "scope": "debuff",
        "characters": [
          {
            "char_name": "Asagi",
            "char_icon": "1_Asagi",
            "skill_name": "Koujin Zanka",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Moves as fast as light and instantly attacks the enemy 6 time(s)\nTarget hit is inflicted with (-19.5%) SPD DOWN at a 99% chance and has their Turn Gauge reduced by (15%) at a 65% chance on Last Attack",
            "scope": "Self",
            "source": "S (Tokizaki)",
            "skill_id": 113
          },
          {
            "char_name": "Rinko",
            "char_icon": "11_Rinko",
            "skill_name": "Itto Style: Kogarasi-no-Kata",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Uses Void Art to mercilessly slash the enemy, attacking 4 times.\nEach hit performs a Shield Penetrate attack.\nIf the character has 2 or more Buff, performs 1 Additional Attack.\nWhen an Additional Attack is triggered, inflicts (-24%) SPD DOWN on the target at a 99% chance.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Zetsuei)",
            "skill_id": 1112
          },
          {
            "char_name": "Tatsuro",
            "char_icon": "12_Tatsuro",
            "skill_name": "Itto Style: Moon Fall",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Leaps high and slashes enemies with a sword gripped in reverse.\nTarget hit is inflicted with (-19.5%) SPD DOWN at a 95% chance.\nDuration: 2 turn(s)\nAbsorbs (12.5%) Turn Gauge at a 35% chance.",
            "scope": "AoE",
            "source": "S (Amakudari)",
            "skill_id": 1212
          }
        ]
      },
      {
        "id": "weaken",
        "name": "Weaken",
        "group": "Stat Debuffs",
        "scope": "debuff",
        "characters": [
          {
            "char_name": "Aina",
            "char_icon": "46_Aina",
            "skill_name": "Wild Fire",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Rapidly fires both pistols to attack the enemy 5 times.\nTarget hit is inflicted with (19.5%) Weaken at a 5% chance.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Phaser Blaster)",
            "skill_id": 4611
          },
          {
            "char_name": "Aki",
            "char_icon": "45_Aki",
            "skill_name": "Chasing Slash",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Swings a sword left and right to attack the enemy 4 times.\nIf the target has Bleed on last Last Attack, inflicts (22.5%) Weaken.\nDuration: 2 turn(s)\nGains (32.5%) CRIT Rate UP before the attack. \nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Giren)",
            "skill_id": 4512
          },
          {
            "char_name": "Annerose",
            "char_icon": "33_Annerose",
            "skill_name": "[&Tbl_UnitSkill_Name_3301]",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Stabs the enemy 4 times with her signature technique.\nOn Last Attack, inflicts the enemy with Weaken at a 10% chance.\nDuration: 2 turn(s)\nDMG increases in proportion to current HP.",
            "scope": "Self",
            "source": "S ()",
            "skill_id": 3311
          }
        ]
      }
    ]
  },
  {
    "name": "Special",
    "mechanics": [
      {
        "id": "immune",
        "name": "Immune",
        "group": "Special",
        "scope": "buff",
        "characters": []
      },
      {
        "id": "instant-death",
        "name": "Instant Death",
        "group": "Special",
        "scope": "debuff",
        "characters": [
          {
            "char_name": "Felicia",
            "char_icon": "30_Felicia",
            "skill_name": "Immortal Hunting",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "When the target has 3 or more Debuffs, and the character's HP is less than 30%, attacking an enemy deals Instant Death at a fixed chance of 75%.\nIncreases the duration of all Buffs by 1 turn after the attack.\nSteals Immortal from the enemy before the attack.\nAttacks 1 enemy 1 time.",
            "scope": "AoE",
            "source": "S (Soul Eraser)",
            "skill_id": 3013
          },
          {
            "char_name": "Torajiro",
            "char_icon": "87_Torajiro",
            "skill_name": "Rip and Tear",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Randomly slashes the enemy 6 times.\nPerforms an Additional Attack without any conditions. \nWhen the target's HP is less than 20% on every Additional Attack, deals Instant Death at a fixed chance of 15%.",
            "scope": "Self",
            "source": "S (White Tiger Fists)",
            "skill_id": 8713
          }
        ]
      }
    ]
  }
];

export const TS_SKILL_INDEX = {
  "atk-up": {
    "id": "atk-up",
    "name": "ATK Up",
    "group": "Stat Buffs",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Arectra",
        "char_icon": "124_Arectra",
        "skill_name": "Wrath of the Vengeful",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When defeated after being attacked by an enemy, she resurrects at 1% of Max. HP and enters an Immortal state.\nDuration: 1 turn(s)\nAdditionally gains (60%) ATK UP.\nDuration: 2 turn(s)\nIf Wrath of the Vengeful is on Cooldown, performs an Additional Attack on every attack.",
        "scope": "Self",
        "source": "S (Tisiphone)",
        "skill_id": 12413
      },
      {
        "char_name": "Eleonor",
        "char_icon": "48_Eleonor",
        "skill_name": "Defensive Nectar",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Grants Debuff Block to ALL allies using the power of nature.\nDuration: 2 turn(s)\nIf an ally doesn't have any Debuff, grants (45%) ATK UP to them.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Tear of Rusalka)",
        "skill_id": 4813
      },
      {
        "char_name": "Hikage",
        "char_icon": "120_Hikage",
        "skill_name": "Wind Art: Spring Wind",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants (45%) ATK UP to 1 ally.\nDuration: 2 turn(s)\nRemoves all Debuffs.",
        "scope": "AoE",
        "source": "S (Amayo)",
        "skill_id": 12012
      },
      {
        "char_name": "Jubei",
        "char_icon": "10_Jubei",
        "skill_name": "Gold Aegis",
        "skill_type": "[Support Skill]",
        "skill_desc": "Spins the gun in a flashy manner, then shoots it into the sky and gains (40%) ATK UP.\nDuration: 2 turn(s)\nGains Extra Turn.",
        "scope": "Self",
        "source": "S (Golden Eater)",
        "skill_id": 1012
      },
      {
        "char_name": "Saya",
        "char_icon": "122_Saya",
        "skill_name": "Heaven Flipping",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Tosses the enemy up in the air with a greatsword and attacks 5 times.\nGains (35%) ATK UP before the attack.\nDuration: 2 turn(s)\nGrants the same Buff to ALL allies with the same type as the character.",
        "scope": "AoE",
        "source": "S (Yuugure)",
        "skill_id": 12213
      },
      {
        "char_name": "Tokiko",
        "char_icon": "28_Tokiko",
        "skill_name": "Evil Eye: Clairvoyance",
        "skill_type": "[Support Skill]",
        "skill_desc": "Uses Clairvoyance to grant a (45%) ATK UP to 1 ally.\nDuration: 2 turn(s)\nReduces the Cooldown of all affected allies' skills by -1 turn(s) and additionally grants Debuff Block.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Sagiri)",
        "skill_id": 2822
      },
      {
        "char_name": "Yuphiesophie",
        "char_icon": "58_Yuphiesophie",
        "skill_name": "The Playful Oni Sisters♪",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start, grants a (45%) ATK UP to an ally with the highest ATK.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Amanohara)",
        "skill_id": 5814
      }
    ]
  },
  "def-up": {
    "id": "def-up",
    "name": "DEF Up",
    "group": "Stat Buffs",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Akina",
        "char_icon": "121_Akina",
        "skill_name": "Stone Art: Heavyweight",
        "skill_type": "[Support Skill]",
        "skill_desc": "Charges up energy and gains (40%) DEF UP.\nDuration: 2 turn(s)\nRestores 15% of Max. HP.\nTaunts 1 Random enemy.",
        "scope": "Self",
        "source": "S (Utopia)",
        "skill_id": 12112
      },
      {
        "char_name": "Mai",
        "char_icon": "36_Mai",
        "skill_name": "Paper Spirit: Defense",
        "skill_type": "[Support Skill]",
        "skill_desc": "Protects the character and 1 ally with paper, granting (45%) DEF UP.\nDuration: 2 turn(s)\nRestores 25.5% of the ally’s Max. HP.\nIf the character has DEF UP on Turn Start, reduces the Cooldown of The Paper Spirit Taimanin by -1 turn(s).",
        "scope": "Self",
        "source": "S (Origami Shuriken)",
        "skill_id": 3612
      },
      {
        "char_name": "Tatsumi",
        "char_icon": "107_Tatsumi",
        "skill_name": "Blooming Butterfly",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Quickly slashes the enemy 4 times.\nGrants (40%) DEF UP to ALL allies after the attack.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Narukami)",
        "skill_id": 10712
      },
      {
        "char_name": "Yuphiesophie",
        "char_icon": "58_Yuphiesophie",
        "skill_name": "The Invincible Twins!!",
        "skill_type": "[Support Skill]",
        "skill_desc": "Yuphie grants Sophie a (55%) DEF UP.\nDuration: 2 turn(s)\nAdditionally grants a Shield equal to 27% of Max. HP.\nDuration: 2 turn(s)\nGrants the same Buff to an ally with the highest ATK.",
        "scope": "Self",
        "source": "S (Aozora)",
        "skill_id": 5812
      }
    ]
  },
  "spd-up": {
    "id": "spd-up",
    "name": "SPD Up",
    "group": "Stat Buffs",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Mitsuki",
        "char_icon": "37_Mitsuki",
        "skill_name": "Wind Art: Rampaging Gust",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Makes a large tornado and sends it toward ALL enemies.\nPerforms a Shield Penetrate attack.\nWhen defeating an enemy with this skill, fills (20%) of the Turn Gauge at a 95% chance for ALL allies.\nSteals the SPD UP Buff of ALL enemies before the attack.\nDamage increases in proportion to SPD.",
        "scope": "AoE",
        "source": "S (Nikko)",
        "skill_id": 3713
      },
      {
        "char_name": "Nagi",
        "char_icon": "52_Nagi",
        "skill_name": "Hurricane Taimanin",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start, grants a (19.5%) SPD UP.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Yamidachi Murasame & Kamikirimaru)",
        "skill_id": 5214
      },
      {
        "char_name": "Rinko",
        "char_icon": "11_Rinko",
        "skill_name": "Meteor Shower",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Summons a meteorite to attack ALL enemies.\nIf the target has SPD DOWN, increases the efficacy of SPD DOWN by -10%.\nGains (19.5%) SPD UP before the attack.\nDuration: 2 turn(s)\nIf the target is the only one remaining, DMG increases by (55%).",
        "scope": "AoE",
        "source": "S (Suijingiri)",
        "skill_id": 1113
      },
      {
        "char_name": "Tokiko",
        "char_icon": "28_Tokiko",
        "skill_name": "Evil Eye: Clairvoyance",
        "skill_type": "[Support Skill]",
        "skill_desc": "Uses Clairvoyance to grant a (27%) SPD UP to 1 ally and herself.\nDuration: 2 turn(s)\nReduces the Cooldown of all affected allies' skills by -1 turn(s).\nIf the affected ally is an Agility type, additionally grants Debuff Block.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Myoren)",
        "skill_id": 2812
      }
    ]
  },
  "acc-up": {
    "id": "acc-up",
    "name": "Accuracy Up",
    "group": "Stat Buffs",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Aina",
        "char_icon": "46_Aina",
        "skill_name": "Full Burst",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Fires a powerful laser beam towards ALL enemies with the drone.\nGains a (25%) ACC UP before the attack.\nDuration: 2 turn(s)\nWhen attacking the only remaining enemy, CRIT Rate increases by (37.5%).",
        "scope": "AoE",
        "source": "S (Game Changer)",
        "skill_id": 4613
      }
    ]
  },
  "evd-up": {
    "id": "evd-up",
    "name": "Evasion Up",
    "group": "Stat Buffs",
    "scope": "buff",
    "characters": []
  },
  "crit-rate-up": {
    "id": "crit-rate-up",
    "name": "Critical Rate Up",
    "group": "Stat Buffs",
    "scope": "buff",
    "characters": []
  },
  "crit-dmg-up": {
    "id": "crit-dmg-up",
    "name": "Critical Damage Up",
    "group": "Stat Buffs",
    "scope": "buff",
    "characters": []
  },
  "crit-res-up": {
    "id": "crit-res-up",
    "name": "Critical Resistance Up",
    "group": "Stat Buffs",
    "scope": "buff",
    "characters": []
  },
  "shield": {
    "id": "shield",
    "name": "Shield",
    "group": "Protection",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Amane",
        "char_icon": "6_Amane",
        "skill_name": "Dotenrin: Heavenly Reverse",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Smites the ground, attacking ALL enemies 1 time(s).\nGrants Shield equal to 15% of ally Max. HP to ALL allies.\nDuration: 2 turn(s)\nIf the target HP is less than 75%, the effect increases to 18%.",
        "scope": "AoE",
        "source": "S (Android Arm Type Zero)",
        "skill_id": 613
      },
      {
        "char_name": "Black",
        "char_icon": "66_Black",
        "skill_name": "End of Darkness",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Attacks the enemy using his ability.\nReduces the target's Turn Gauge by (15%) at a 75% chance on Last Attack.\nSteals the Shield the target has before the attack.\nIf the target's HP is less than 50%, increases Shield by 100% after the attack.",
        "scope": "Self",
        "source": "S (Crimson Requiem)",
        "skill_id": 6613
      },
      {
        "char_name": "Eleonor",
        "char_icon": "48_Eleonor",
        "skill_name": "Dark Elf of the Dark Woods",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start, if an ally holds Shield, increases all of their Buff turns by 1 turn(s).",
        "scope": "AoE",
        "source": "S (Dark Green Embryo)",
        "skill_id": 4814
      },
      {
        "char_name": "Houensai",
        "char_icon": "111_Houensai",
        "skill_name": "Oil Art: Flame Disaster",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Breathes out fire, attacking ALL enemies 3 times.\nRemoves Shield from the targets.\nTargets hit are Taunted at a 30% chance.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Daruma)",
        "skill_id": 11113
      },
      {
        "char_name": "Kurenai",
        "char_icon": "21_Kurenai",
        "skill_name": "Crimson Princess of Bloodshed",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Attacking an enemy with Shield increases their CRIT DMG by (10%).\nApplies to all skills.",
        "scope": "AoE",
        "source": "S (Warrior's Dual Sword)",
        "skill_id": 2114
      },
      {
        "char_name": "Minasaki",
        "char_icon": "85_Minasaki",
        "skill_name": "GAN★BA★RE!!",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants ALL allies 2 Protective Shield.\nDuration: 2 turn(s)\nGrants ALL allies (5.5%) Healing Over Time.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Nightsky Ribbon)",
        "skill_id": 8513
      },
      {
        "char_name": "Miriam",
        "char_icon": "104_Miriam",
        "skill_name": "Cure Spell",
        "skill_type": "[Support Skill]",
        "skill_desc": "Restores HP of a targeted ally by 18.5% of their Max. HP.\nGrants (2) Protective Shield.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Familiars Carrot & Eggplant)",
        "skill_id": 10413
      },
      {
        "char_name": "Murasaki",
        "char_icon": "19_Murasaki",
        "skill_name": "Fortification",
        "skill_type": "[Support Skill]",
        "skill_desc": "Gains a Shield equal to 19.5% of the character's Max. HP.\nDuration: 2 turn(s)\nTaunts ALL enemies at a fixed chance of 30%\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Combat Axe)",
        "skill_id": 1912
      },
      {
        "char_name": "Robel",
        "char_icon": "86_Robel",
        "skill_name": "Type: Hero",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Lovell's skill gets enhanced every 4 turns.\nParticle Weapon: Shini: Steals enemy Shield. Shield effect increases by 50% after stealing.\nParticle Weapon: Kamui\nShield amount increases by 24%.\nGrants (40%) Protect Ally to ALL allies.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Tomurai & Requiem)",
        "skill_id": 8613
      },
      {
        "char_name": "Shikanosuke",
        "char_icon": "80_Shikanosuke",
        "skill_name": "Elec Art: Lightning Tackle",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Charges at the enemy with electricity coursing through the character.\nTarget hit is guaranteed to be inflicted with Electrocute.\nDuration: 2 turn(s)\nGains (2) Protective Shield after the attack.\nDuration: 2 turn(s)\nIf Uehara Rin is deployed, applies the same effect to Uehara Rin.",
        "scope": "Self",
        "source": "S (Snowflake)",
        "skill_id": 8013
      },
      {
        "char_name": "Shiranui",
        "char_icon": "13_Shiranui",
        "skill_name": "Phantom Taimanin",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If the character has a Shield, on Turn Start, decreases the duration of 1 Random Debuffs held by ALL allies by -1 turn(s).",
        "scope": "AoE",
        "source": "S (Kagero)",
        "skill_id": 1314
      },
      {
        "char_name": "Shisui",
        "char_icon": "42_Shisui",
        "skill_name": "Guardian's Touchdown",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If HP is less than 50%, grants (3) Protective Shield when hit.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Pussycat Headphones)",
        "skill_id": 4214
      },
      {
        "char_name": "Yuphiesophie",
        "char_icon": "58_Yuphiesophie",
        "skill_name": "The Invincible Twins!!",
        "skill_type": "[Support Skill]",
        "skill_desc": "Yuphie grants Sophie a (55%) DEF UP.\nDuration: 2 turn(s)\nAdditionally grants a Shield equal to 27% of Max. HP.\nDuration: 2 turn(s)\nGrants the same Buff to an ally with the highest ATK.",
        "scope": "Self",
        "source": "S (Aozora)",
        "skill_id": 5812
      }
    ]
  },
  "protective-shield": {
    "id": "protective-shield",
    "name": "Protective Shield",
    "group": "Protection",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Minasaki",
        "char_icon": "85_Minasaki",
        "skill_name": "GAN★BA★RE!!",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants ALL allies 2 Protective Shield.\nDuration: 2 turn(s)\nGrants ALL allies (5.5%) Healing Over Time.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Nightsky Ribbon)",
        "skill_id": 8513
      },
      {
        "char_name": "Miriam",
        "char_icon": "104_Miriam",
        "skill_name": "Cure Spell",
        "skill_type": "[Support Skill]",
        "skill_desc": "Restores HP of a targeted ally by 18.5% of their Max. HP.\nGrants (2) Protective Shield.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Familiars Carrot & Eggplant)",
        "skill_id": 10413
      },
      {
        "char_name": "Shikanosuke",
        "char_icon": "80_Shikanosuke",
        "skill_name": "Elec Art: Lightning Tackle",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Charges at the enemy with electricity coursing through the character.\nTarget hit is guaranteed to be inflicted with Electrocute.\nDuration: 2 turn(s)\nGains (2) Protective Shield after the attack.\nDuration: 2 turn(s)\nIf Uehara Rin is deployed, applies the same effect to Uehara Rin.",
        "scope": "Self",
        "source": "S (Snowflake)",
        "skill_id": 8013
      },
      {
        "char_name": "Shisui",
        "char_icon": "42_Shisui",
        "skill_name": "Guardian's Touchdown",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If HP is less than 50%, grants (3) Protective Shield when hit.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Pussycat Headphones)",
        "skill_id": 4214
      }
    ]
  },
  "damage-block": {
    "id": "damage-block",
    "name": "Damage Block",
    "group": "Protection",
    "scope": "buff",
    "characters": []
  },
  "damage-reflect": {
    "id": "damage-reflect",
    "name": "Damage Reflect",
    "group": "Protection",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Emily",
        "char_icon": "15_Emily",
        "skill_name": "Vital Check",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Checks the physical information of the specified target and grants a (45%) Damage Reflect and Immortal.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Nebula Type 2)",
        "skill_id": 1513
      },
      {
        "char_name": "Major",
        "char_icon": "63_Major",
        "skill_name": "Chance Maker",
        "skill_type": "[Support Skill]",
        "skill_desc": "Taunts ALL enemies.\nDuration: 2 turn(s)\nThe character gains (10%) Damage Reflect.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Moon Shot)",
        "skill_id": 6312
      }
    ]
  },
  "immortal": {
    "id": "immortal",
    "name": "Immortal",
    "group": "Protection",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Arectra",
        "char_icon": "124_Arectra",
        "skill_name": "Wrath of the Vengeful",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When defeated after being attacked by an enemy, she resurrects at 1% of Max. HP and enters an Immortal state.\nDuration: 1 turn(s)\nAdditionally gains (60%) ATK UP.\nDuration: 2 turn(s)\nIf Wrath of the Vengeful is on Cooldown, performs an Additional Attack on every attack.",
        "scope": "Self",
        "source": "S (Tisiphone)",
        "skill_id": 12413
      },
      {
        "char_name": "Emily",
        "char_icon": "15_Emily",
        "skill_name": "Vital Check",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Checks the physical information of the specified target and grants a (45%) Damage Reflect and Immortal.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Nebula Type 2)",
        "skill_id": 1513
      },
      {
        "char_name": "Felicia",
        "char_icon": "30_Felicia",
        "skill_name": "Immortal Hunting",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "When the target has 3 or more Debuffs, and the character's HP is less than 30%, attacking an enemy deals Instant Death at a fixed chance of 75%.\nIncreases the duration of all Buffs by 1 turn after the attack.\nSteals Immortal from the enemy before the attack.\nAttacks 1 enemy 1 time.",
        "scope": "AoE",
        "source": "S (Soul Eraser)",
        "skill_id": 3013
      },
      {
        "char_name": "Kuro",
        "char_icon": "4_Kuro",
        "skill_name": "CQC-Double Attack",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Runs toward the enemy with a dagger and attacks 2 times.\nReduces Cooldown of Awakened Immortal by -1 turn(s) after the attack.",
        "scope": "Self",
        "source": "S (Sword Breaker)",
        "skill_id": 411
      },
      {
        "char_name": "Murasaki",
        "char_icon": "19_Murasaki",
        "skill_name": "Awakened Immortal",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Murasaki doesn't go down easily.\nWhen defeated after being attacked by an enemy, she resurrects at 30% of Max. HP and enters an Immortal state.\nDuration: 1 turn(s)",
        "scope": "Self",
        "source": "S (Killing Spree)",
        "skill_id": 1914
      }
    ]
  },
  "strengthen": {
    "id": "strengthen",
    "name": "Power-up",
    "group": "Protection",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Azusa",
        "char_icon": "14_Azusa",
        "skill_name": "Shikigami: Bodyguard",
        "skill_type": "[Support Skill]",
        "skill_desc": "Brings the hand to the mouth and recites a spell, gains (5%) Healing Over Time and (19.5%) Power-up.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Rasetsumaru)",
        "skill_id": 1412
      },
      {
        "char_name": "Sokushitsuki",
        "char_icon": "125_Sokushitsuki",
        "skill_name": "Raging Wind, Clear Moon",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Slashes the enemy with Iaido after while laughing.\nTaunts ALL enemies at a 35% chance before the attack.\nDuration: 2 turn(s)\nGains (19.5%) Power-up after the attack.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Minagoroshi)",
        "skill_id": 12513
      }
    ]
  },
  "ally-protection": {
    "id": "ally-protection",
    "name": "Protect Ally",
    "group": "Protection",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Jinglei",
        "char_icon": "18_Jinglei",
        "skill_name": "Taimanin Art: Fist",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Delivers 3 powerful punches at the enemy. DMG increases as DEF increases.\nGrants 45% Protect Ally to the ally with the lowest HP on Last Attack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Demolisher Fist)",
        "skill_id": 1811
      },
      {
        "char_name": "Robel",
        "char_icon": "86_Robel",
        "skill_name": "Type: Hero",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Lovell's skill gets enhanced every 4 turns.\nParticle Weapon: Shini: Steals enemy Shield. Shield effect increases by 50% after stealing.\nParticle Weapon: Kamui\nShield amount increases by 24%.\nGrants (40%) Protect Ally to ALL allies.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Tomurai & Requiem)",
        "skill_id": 8613
      }
    ]
  },
  "debuff-block": {
    "id": "debuff-block",
    "name": "Debuff Block",
    "group": "Protection",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Eleonor",
        "char_icon": "48_Eleonor",
        "skill_name": "Defensive Nectar",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Grants Debuff Block to ALL allies using the power of nature.\nDuration: 2 turn(s)\nIf an ally doesn't have any Debuff, grants (45%) ATK UP to them.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Tear of Rusalka)",
        "skill_id": 4813
      },
      {
        "char_name": "Tokiko",
        "char_icon": "28_Tokiko",
        "skill_name": "Evil Eye: Clairvoyance",
        "skill_type": "[Support Skill]",
        "skill_desc": "Uses Clairvoyance to grant a (27%) SPD UP to 1 ally and herself.\nDuration: 2 turn(s)\nReduces the Cooldown of all affected allies' skills by -1 turn(s).\nIf the affected ally is an Agility type, additionally grants Debuff Block.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Myoren)",
        "skill_id": 2812
      }
    ]
  },
  "healing": {
    "id": "healing",
    "name": "Healing",
    "group": "Healing & Sustain",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Akina",
        "char_icon": "121_Akina",
        "skill_name": "Stone Art: Heavyweight",
        "skill_type": "[Support Skill]",
        "skill_desc": "Charges up energy and gains (40%) DEF UP.\nDuration: 2 turn(s)\nRestores 15% of Max. HP.\nTaunts 1 Random enemy.",
        "scope": "Self",
        "source": "S (Utopia)",
        "skill_id": 12112
      },
      {
        "char_name": "Aoi",
        "char_icon": "117_Aoi",
        "skill_name": "Sound Art: Dolce",
        "skill_type": "[Support Skill]",
        "skill_desc": "Heals allies with beautiful melodies.\nRestores HP of ALL allies by 21% of the target's Max. HP.\nEverytime the character gains a Buff, reduces Cooldown by -1 turn(s).",
        "scope": "AoE",
        "source": "S (Terpsichore)",
        "skill_id": 11713
      },
      {
        "char_name": "Azusa",
        "char_icon": "14_Azusa",
        "skill_name": "Shikigami: Bodyguard",
        "skill_type": "[Support Skill]",
        "skill_desc": "Brings the hand to the mouth and recites a spell, gains (5%) Healing Over Time and (19.5%) Power-up.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Rasetsumaru)",
        "skill_id": 1412
      },
      {
        "char_name": "Cello",
        "char_icon": "79_Cello",
        "skill_name": "Playful Child",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Healing Effect granted by the character increases by  35%.",
        "scope": "Self",
        "source": "S (DSO-LuV.DX)",
        "skill_id": 7912
      },
      {
        "char_name": "Hasegawafuki",
        "char_icon": "127_Hasegawafuki",
        "skill_name": "Wind Demon Style: Prosper Wind",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Grants (5.5%) Healing Over Time to ALL allies.\nDuration: 3 turn(s)\nEach Debuff on the target restores 31.5% of the target's Max. HP\nStacks up to 3.",
        "scope": "AoE",
        "source": "S (Stormwind Form)",
        "skill_id": 12713
      },
      {
        "char_name": "Hisui",
        "char_icon": "41_Hisui",
        "skill_name": "Monk Staff Art",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Stabs the enemy with a stone scepter, attacking 4 times.\nRestores ALL allies' HP on Last Attack by 3.5% of Max. HP.",
        "scope": "AoE",
        "source": "S (Tara's Steel Staff)",
        "skill_id": 4111
      },
      {
        "char_name": "Kagero",
        "char_icon": "123_Kagero",
        "skill_name": "Vain Haze",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start, restores 4.5% of the character's Max. HP.",
        "scope": "Self",
        "source": "S (Melancholy)",
        "skill_id": 12313
      },
      {
        "char_name": "Mai",
        "char_icon": "36_Mai",
        "skill_name": "Paper Spirit: Defense",
        "skill_type": "[Support Skill]",
        "skill_desc": "Protects the character and 1 ally with paper, granting (45%) DEF UP.\nDuration: 2 turn(s)\nRestores 25.5% of the ally’s Max. HP.\nIf the character has DEF UP on Turn Start, reduces the Cooldown of The Paper Spirit Taimanin by -1 turn(s).",
        "scope": "Self",
        "source": "S (Origami Shuriken)",
        "skill_id": 3612
      },
      {
        "char_name": "Mikoto",
        "char_icon": "22_Mikoto",
        "skill_name": "Ghost Arm",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On every attack, CRIT Rate increases by (15%)\nWhen defeating the enemy, restores HP of 1 ally with the lowest HP by 5% of the target.",
        "scope": "Self",
        "source": "S (Kijingiri)",
        "skill_id": 2212
      },
      {
        "char_name": "Minasaki",
        "char_icon": "85_Minasaki",
        "skill_name": "GAN★BA★RE!!",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants ALL allies 2 Protective Shield.\nDuration: 2 turn(s)\nGrants ALL allies (5.5%) Healing Over Time.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Nightsky Ribbon)",
        "skill_id": 8513
      },
      {
        "char_name": "Miriam",
        "char_icon": "104_Miriam",
        "skill_name": "Cure Spell",
        "skill_type": "[Support Skill]",
        "skill_desc": "Restores HP of a targeted ally by 18.5% of their Max. HP.\nGrants (2) Protective Shield.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Familiars Carrot & Eggplant)",
        "skill_id": 10413
      },
      {
        "char_name": "Shizuru",
        "char_icon": "29_Shizuru",
        "skill_name": "Shizuru of Flowers",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When hit by an all-target attack, grants the ally with the lowest HP a (7%) Healing Over Time.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Queen's Rose)",
        "skill_id": 2914
      }
    ]
  },
  "heal-over-time": {
    "id": "heal-over-time",
    "name": "Healing Over Time",
    "group": "Healing & Sustain",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Azusa",
        "char_icon": "14_Azusa",
        "skill_name": "Shikigami: Bodyguard",
        "skill_type": "[Support Skill]",
        "skill_desc": "Brings the hand to the mouth and recites a spell, gains (5%) Healing Over Time and (19.5%) Power-up.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Rasetsumaru)",
        "skill_id": 1412
      },
      {
        "char_name": "Hasegawafuki",
        "char_icon": "127_Hasegawafuki",
        "skill_name": "Wind Demon Style: Prosper Wind",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Grants (5.5%) Healing Over Time to ALL allies.\nDuration: 3 turn(s)\nEach Debuff on the target restores 31.5% of the target's Max. HP\nStacks up to 3.",
        "scope": "AoE",
        "source": "S (Stormwind Form)",
        "skill_id": 12713
      },
      {
        "char_name": "Hisui",
        "char_icon": "41_Hisui",
        "skill_name": "Eclipse Meld: Resonate",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Using a skill on every 4th turn grants an additional effect.\nWhen using Monk Staff Art, Healing Effect increases by (100%).\nWhen using Eclipse Meld: Syphoning Strike, inflicts Immobilize on the enemy.\nDuration: 2 turn(s)\nWhen using Eclipse Meld: Sound, grants a (7%) Healing Over Time to all allies for 2 turn(s).",
        "scope": "AoE",
        "source": "S (Jizo's Steel Staff)",
        "skill_id": 4114
      },
      {
        "char_name": "Mai",
        "char_icon": "36_Mai",
        "skill_name": "Paper Spirit: Absolute Barrier",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Builds a giant paper wall and grants (2) Protective Shields to ALL allies.\nDuration: 2 turn(s)\nGrants (7%)  Healing Over Time to allies whose HP is less than 50%.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Origami Dagger)",
        "skill_id": 3613
      },
      {
        "char_name": "Minasaki",
        "char_icon": "85_Minasaki",
        "skill_name": "GAN★BA★RE!!",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants ALL allies 2 Protective Shield.\nDuration: 2 turn(s)\nGrants ALL allies (5.5%) Healing Over Time.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Nightsky Ribbon)",
        "skill_id": 8513
      },
      {
        "char_name": "Shizuru",
        "char_icon": "29_Shizuru",
        "skill_name": "Shizuru of Flowers",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When hit by an all-target attack, grants the ally with the lowest HP a (7%) Healing Over Time.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Queen's Rose)",
        "skill_id": 2914
      }
    ]
  },
  "lifesteal": {
    "id": "lifesteal",
    "name": "Lifesteal",
    "group": "Healing & Sustain",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Lilim",
        "char_icon": "72_Lilim",
        "skill_name": "Charming Arrow",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Shoots a heart-shaped arrow to attack the enemy.\nIf the target is hit, deals a (15%) Life Steal.\nIncreases all Debuff turn(s) the target has by 1 at a 70% chance after the attack.",
        "scope": "AoE",
        "source": "S (Pink Band)",
        "skill_id": 7213
      },
      {
        "char_name": "Oboro",
        "char_icon": "23_Oboro",
        "skill_name": "Traitor Taimanin",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Deals a (15%) Life Steal when attacking.\nFor each Bleed inflicted on the enemy, increases DMG by 10%.",
        "scope": "Self",
        "source": "S (Taima Claw: Misty Moon)",
        "skill_id": 2314
      },
      {
        "char_name": "Sayaneo",
        "char_icon": "59_Sayaneo",
        "skill_name": "Saya NEO Special",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Stabs mercilessly with tentacles to attack the enemy.\nThis skill performs a (15%) Life Steal attack.\nPerforms a (75%) Debuff Explode Bleed attack.",
        "scope": "Self",
        "source": "S (Abyss Crawler)",
        "skill_id": 5913
      }
    ]
  },
  "extra-turn": {
    "id": "extra-turn",
    "name": "Extra Turn",
    "group": "Turn & Action",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Asuka",
        "char_icon": "16_Asuka",
        "skill_name": "Taimanin Art: Heavenly Dance",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Uses blades on her arms and legs to attack consecutively 5 times.\nIf the target is a Technique type, DMG increases (37.5%).\nWhen defeating the enemy with this skill, gains Extra Turn.",
        "scope": "Self",
        "source": "S (Magnet Edge)",
        "skill_id": 1622
      },
      {
        "char_name": "Bell",
        "char_icon": "103_Bell",
        "skill_name": "Full Metal Jacket",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Fires the rifle in short bursts at the enemy.\nWhen defeating an enemy with this skill, gains Extra Turn.",
        "scope": "Self",
        "source": "S (Peacemaker)",
        "skill_id": 10311
      },
      {
        "char_name": "Fuyumi",
        "char_icon": "39_Fuyumi",
        "skill_name": "Reorganize",
        "skill_type": "[Support Skill]",
        "skill_desc": "Assumes a battle ready stance and gains an Extra Turn, restoring 15% of Max. HP.",
        "scope": "Self",
        "source": "S (Haruhara)",
        "skill_id": 3912
      },
      {
        "char_name": "Jubei",
        "char_icon": "10_Jubei",
        "skill_name": "Gold Aegis",
        "skill_type": "[Support Skill]",
        "skill_desc": "Spins the gun in a flashy manner, then shoots it into the sky and gains (40%) ATK UP.\nDuration: 2 turn(s)\nGains Extra Turn.",
        "scope": "Self",
        "source": "S (Golden Eater)",
        "skill_id": 1012
      },
      {
        "char_name": "Ongyouki",
        "char_icon": "126_Ongyouki",
        "skill_name": "Shade Demon Style: Assassinate",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Attacks the enemy at a speed untrackable to the naked eye.\nIf the target's HP is less than 50%, increases DMG by 45%.\nWhen defeating an enemy with this skill, gains Extra Turn.\nGains Stealth before the attack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Aurora Katana)",
        "skill_id": 12613
      },
      {
        "char_name": "Tougekinki",
        "char_icon": "60_Tougekinki",
        "skill_name": "Iron Demon Style: Metal Counter",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Scatters sword aura to attack the designated enemy and 2 Random others.\nGains Counterattack after the attack.\nWhen defeating an enemy with this skill, gains Extra Turn.",
        "scope": "Self",
        "source": "S (Shishikirimaru)",
        "skill_id": 6012
      }
    ]
  },
  "turn-gauge": {
    "id": "turn-gauge",
    "name": "Turn Gauge+",
    "group": "Turn & Action",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Amane",
        "char_icon": "6_Amane",
        "skill_name": "Fuuma Martial Art: Skyfall",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start absorbs (12.5%) Turn Gauge of the enemy with the strongest ATK at a 50% chance.\nOn Turn Start, removes 1 Debuff on the character.",
        "scope": "Self",
        "source": "S (Android Arm Secrecy)",
        "skill_id": 612
      },
      {
        "char_name": "Anemone",
        "char_icon": "77_Anemone",
        "skill_name": "Call of Anubis",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Spreads a wide web to attack ALL enemies.\nTargets hit by the web are inflicted with (2.5%) Poison at a 15% chance.\nDuration : 3 turn(s)\nIf the target has 4 or more Debuffs, absorbs (12.5%) Turn Gauge at a 35% chance on the Last Attack. \nIf the target's Turn Gauge is less than 30%, increases the efficacy of Poison by 3% at a 60% chance after the attack.\nDuration : 3 turn(s)",
        "scope": "AoE",
        "source": "S (In Memorial)",
        "skill_id": 7712
      },
      {
        "char_name": "Black",
        "char_icon": "66_Black",
        "skill_name": "End of Darkness",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Attacks the enemy using his ability.\nReduces the target's Turn Gauge by (15%) at a 75% chance on Last Attack.\nSteals the Shield the target has before the attack.\nIf the target's HP is less than 50%, increases Shield by 100% after the attack.",
        "scope": "Self",
        "source": "S (Crimson Requiem)",
        "skill_id": 6613
      },
      {
        "char_name": "Ingrid",
        "char_icon": "25_Ingrid",
        "skill_name": "Evil Flame Slash",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Performs a consecutive sword dance to attack the enemy 4 times.\nTarget hit has their Turn Gauge decreased by (15%) at a 10% chance.\nPerforms 2 additional Additional Attacks and deals (75%) Burn Debuff Explode.",
        "scope": "Self",
        "source": "S (Sol Brave)",
        "skill_id": 2512
      },
      {
        "char_name": "Jinglei",
        "char_icon": "18_Jinglei",
        "skill_name": "Kokuryuha",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Unleashes the power of the dragon and attacks ALL enemies.\nPerforms a (60%) DEF Penetrate attack to the target hit.\nOn Last Attack, reduces the Turn Gauge of the enemy with the highest ATK by (15%) at a 65% chance.",
        "scope": "AoE",
        "source": "S (Companion Hand)",
        "skill_id": 1813
      },
      {
        "char_name": "Koro",
        "char_icon": "44_Koro",
        "skill_name": "Soul Art: Soul Resurrection",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When the enemy dies, fills (20%) of the Turn Gauge of ALL allies at a 50% chance.",
        "scope": "AoE",
        "source": "S (Zetsuen)",
        "skill_id": 4413
      },
      {
        "char_name": "Kurenai",
        "char_icon": "21_Kurenai",
        "skill_name": "Wind Art: Wind Cloak",
        "skill_type": "[Support Skill]",
        "skill_desc": "Uses Wind Art to to sharpen the sword further.\nGains (32.5%) CRIT Rate UP.\nDuration: 2 turn(s)\nDecreases (15%) of the target's Turn Gauge at a 20% chance on every CRIT ATK.",
        "scope": "Self",
        "source": "S (Jet Black & Pitch Black)",
        "skill_id": 2112
      },
      {
        "char_name": "Maskedtaimanin",
        "char_icon": "78_Maskedtaimanin",
        "skill_name": "Taimanin Art: Uprising Storm",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Randomly swings the knife and attacks the enemy 8 times.\nPerforms a (75%) Bleed Debuff Explode attack.\nWhen defeating an enemy with this skill, reduces the Turn Gauge of ALL enemies by (15%) at a 50% chance.",
        "scope": "AoE",
        "source": "S (Kokuten)",
        "skill_id": 7812
      },
      {
        "char_name": "Mitsuki",
        "char_icon": "37_Mitsuki",
        "skill_name": "Wind Art: Rampaging Gust",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Makes a large tornado and sends it toward ALL enemies.\nPerforms a Shield Penetrate attack.\nWhen defeating an enemy with this skill, fills (20%) of the Turn Gauge at a 95% chance for ALL allies.\nSteals the SPD UP Buff of ALL enemies before the attack.\nDamage increases in proportion to SPD.",
        "scope": "AoE",
        "source": "S (Nikko)",
        "skill_id": 3713
      },
      {
        "char_name": "Nao",
        "char_icon": "113_Nao",
        "skill_name": "Light Art: Aurora Burst",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Fires a single laser beam at an enemy, dealing DMG.\nTarget hit has their Turn Gauge reduced by (15%) at a 75% chance.\nIf the target's Turn Gauge is less than 10%, increases all Debuffs' duration the target has by 1 turn(s).",
        "scope": "AoE",
        "source": "S (Tyr)",
        "skill_id": 11313
      },
      {
        "char_name": "Natsume",
        "char_icon": "20_Natsume",
        "skill_name": "Alluring Touch",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks ALL enemies with alluring gestures.\nTarget hit is Taunted at a 45% chance.\nDuration: 2 turn(s)\nIf the target already is Taunted, puts them in Confusion state at a fixed chance of 30%.\nDuration: 1 turn(s)\nIf the target is an Agility type, decreases (15%) of their Turn Gauge at a 95% chance.",
        "scope": "AoE",
        "source": "S (Witch Sleeve)",
        "skill_id": 2012
      },
      {
        "char_name": "Noah",
        "char_icon": "26_Noah",
        "skill_name": "Manmade Demon",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Recovers 3.5% of Max. HP whenever an enemy dies, and fills Turn Gauge by (20%) at a 20% chance.\nThe DMG of all of Noah's skills increase the lower the HP.",
        "scope": "AoE",
        "source": "S (Love of Restraints)",
        "skill_id": 2614
      },
      {
        "char_name": "Rene",
        "char_icon": "101_Rene",
        "skill_name": "Justice Execution!",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When an enemy is killed by an ally attack, fills the Turn Gauge of the ally with the highest ATK excluding herself by (20%) at a 20% chance.",
        "scope": "Self",
        "source": "S (Pandora's Box)",
        "skill_id": 10113
      },
      {
        "char_name": "Rin",
        "char_icon": "32_Rin",
        "skill_name": "Lightning Art: Chain Volt",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Overcharges both swords with electricity and slashes at the enemy.\nRemoves 1 Random enemy Buffs and inflicts Faint at 20% rate on Last Attack.\nDuration: 1 turn(s)\nOn every CRIT ATK, absorbs (12.5%) Turn Gauge at a 60% chance.",
        "scope": "Self",
        "source": "S (Lightning Saber II Raizin)",
        "skill_id": 3213
      },
      {
        "char_name": "Sakura",
        "char_icon": "5_Sakura",
        "skill_name": "Mischief Taimanin",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When CRIT ATK lands, fills the character's Turn Gauge by (20%) at a fixed chance of 25%",
        "scope": "Self",
        "source": "S (Kagedachi)",
        "skill_id": 514
      },
      {
        "char_name": "Shizuru",
        "char_icon": "29_Shizuru",
        "skill_name": "Sprout Garden",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "With an elegant dance, petals flutter, restoring HP for ALL allies by 21% of the target's Max. HP. \nAfter recovery, if the target's HP is 65% or more, additionally fills (20%) of the Turn Gauge at a 100% chance.",
        "scope": "AoE",
        "source": "S (Thorn Knight)",
        "skill_id": 2913
      },
      {
        "char_name": "Silkys",
        "char_icon": "90_Silkys",
        "skill_name": "Hero Vibes",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Whenever an ally gets a Debuff, removes 1 Random Debuff of ALL allies.\nFills the Turn Gauge of ALL allies by (20%) at a 65% chance.",
        "scope": "AoE",
        "source": "S (Neon Saucer)",
        "skill_id": 9012
      },
      {
        "char_name": "Spica",
        "char_icon": "70_Spica",
        "skill_name": "Samurai Shooter",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start, fills the Turn Gauge of the ally with the highest ATK by (20%) at a 20% chance.",
        "scope": "Self",
        "source": "S (Bushido Striker)",
        "skill_id": 7012
      },
      {
        "char_name": "Tatsuro",
        "char_icon": "12_Tatsuro",
        "skill_name": "Itto Style: Moon Fall",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Leaps high and slashes enemies with a sword gripped in reverse.\nTarget hit is inflicted with (-19.5%) SPD DOWN at a 95% chance.\nDuration: 2 turn(s)\nAbsorbs (12.5%) Turn Gauge at a 35% chance.",
        "scope": "AoE",
        "source": "S (Amakudari)",
        "skill_id": 1212
      },
      {
        "char_name": "Tsumugi",
        "char_icon": "116_Tsumugi",
        "skill_name": "Heavy Smash",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Swings a hammer from above the head, attacking the enemy.\nIf the target has 2 or more Debuffs, absorbs Turn Gauge by (12.5%) at a 10% chance.",
        "scope": "Self",
        "source": "S (Kepler)",
        "skill_id": 11611
      },
      {
        "char_name": "Worrell",
        "char_icon": "226_Worrell",
        "skill_name": "Plasma Rifle: Burst",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Charges the plasma rifle, and fires it 4 time(s) at the enemy.\nPerforms a (60%) DEF Penetrate attack.\nIf only 1 enemy is left, the last attack reduces the Turn Gauge of the target by (15%) at a 85% chance.",
        "scope": "Single Target",
        "source": "S (Crimson Tempest)",
        "skill_id": 22613
      },
      {
        "char_name": "Yuno",
        "char_icon": "69_Yuno",
        "skill_name": "Ravaging Whip",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Lashes the enemy with a whip while in midair, attacking 7 times.\nReduces the target's Turn Gauge by (15%) at a 5% chance, each time the target is hit.\nIf the target's Turn Gauge is less than 30% after the attack, increases the target's Debuffs by 1 turn(s).",
        "scope": "Self",
        "source": "S (Plasma Whip)",
        "skill_id": 6912
      },
      {
        "char_name": "Yuzuriha",
        "char_icon": "17_Yuzuriha",
        "skill_name": "Silk Barrier",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Deploys wires to suspend ALL enemies in midair, then instantly slices and attacks them.\nInflicts (-19.5%) EVD DOWN to the target hit at a 90% chance on the Last Attack.\nDuration: 2 turn(s)\nIf the target already has EVD DOWN, reduces the Turn Gauge by (15%) at a 70% chance.",
        "scope": "AoE",
        "source": "S (Atropos Glove)",
        "skill_id": 1713
      }
    ]
  },
  "cooldown-reduction": {
    "id": "cooldown-reduction",
    "name": "Cooldown Reduction",
    "group": "Turn & Action",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Aoi",
        "char_icon": "117_Aoi",
        "skill_name": "Sound Art: Dolce",
        "skill_type": "[Support Skill]",
        "skill_desc": "Heals allies with beautiful melodies.\nRestores HP of ALL allies by 21% of the target's Max. HP.\nEverytime the character gains a Buff, reduces Cooldown by -1 turn(s).",
        "scope": "AoE",
        "source": "S (Terpsichore)",
        "skill_id": 11713
      },
      {
        "char_name": "Hebiko",
        "char_icon": "49_Hebiko",
        "skill_name": "Octopus Sever",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Draws the sword from the back and slashes the enemy 3 times.\nReduces the Cooldown of the 3rd skill of the ally with the highest ATK by -1 turn(s) on the Last Attack, excluding the character.",
        "scope": "Self",
        "source": "S (Jakou)",
        "skill_id": 4911
      },
      {
        "char_name": "Isuka",
        "char_icon": "154_Isuka",
        "skill_name": "Paper Spirit: White Flash",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Transforms the spear into a giant sword using ninja art, and slashes ALL enemies.\nDefeating an enemy with this skill reduces Cooldown of Nomad's Cyborg Ninja by -1 turn(s). \nIf only 1 enemy remains, increases DMG by (45%).",
        "scope": "AoE",
        "source": "S (Yumegiri)",
        "skill_id": 15412
      },
      {
        "char_name": "Koharu",
        "char_icon": "73_Koharu",
        "skill_name": "Elec Art: Display",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Summons a flock of electronic animals and charges them toward the enemy.\nInflicts Active Skill Disable to the target at a 10% chance.\nDuration: 2 turn(s)\nWhen defeating an enemy with this skill, reduces Cooldown of 2nd skill of ALL allies by -1 turn(s).",
        "scope": "AoE",
        "source": "S (TMP-73 Pro)",
        "skill_id": 7313
      },
      {
        "char_name": "Kuro",
        "char_icon": "4_Kuro",
        "skill_name": "CQC-Double Attack",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Runs toward the enemy with a dagger and attacks 2 times.\nReduces Cooldown of Awakened Immortal by -1 turn(s) after the attack.",
        "scope": "Self",
        "source": "S (Sword Breaker)",
        "skill_id": 411
      },
      {
        "char_name": "Mai",
        "char_icon": "36_Mai",
        "skill_name": "Paper Spirit: Defense",
        "skill_type": "[Support Skill]",
        "skill_desc": "Protects the character and 1 ally with paper, granting (45%) DEF UP.\nDuration: 2 turn(s)\nRestores 25.5% of the ally’s Max. HP.\nIf the character has DEF UP on Turn Start, reduces the Cooldown of The Paper Spirit Taimanin by -1 turn(s).",
        "scope": "Self",
        "source": "S (Origami Shuriken)",
        "skill_id": 3612
      },
      {
        "char_name": "Nodoka",
        "char_icon": "115_Nodoka",
        "skill_name": "Taimanin Art: Water Mirror",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Swings the blade gracefully, attacking the enemy 2 time(s).\nReduces Cooldown of Mirror Art: Clear Mirror, Still Water by -1 turn(s).",
        "scope": "Self",
        "source": "S (Sabimaru)",
        "skill_id": 11511
      },
      {
        "char_name": "Ongyouki",
        "char_icon": "126_Ongyouki",
        "skill_name": "Demon of \"Shade\"",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Defeating an enemy reduces all of the character's Cooldown by -1 turn(s).\nIf the character is in Stealth, increases CRIT DMG by (10%).",
        "scope": "AoE",
        "source": "S (Tachyon Blade)",
        "skill_id": 12614
      },
      {
        "char_name": "Tokiko",
        "char_icon": "28_Tokiko",
        "skill_name": "Evil Eye: Clairvoyance",
        "skill_type": "[Support Skill]",
        "skill_desc": "Uses Clairvoyance to grant a (27%) SPD UP to 1 ally and herself.\nDuration: 2 turn(s)\nReduces the Cooldown of all affected allies' skills by -1 turn(s).\nIf the affected ally is an Agility type, additionally grants Debuff Block.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Myoren)",
        "skill_id": 2812
      }
    ]
  },
  "counter-attack": {
    "id": "counter-attack",
    "name": "Counter-attack",
    "group": "Turn & Action",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Tougekinki",
        "char_icon": "60_Tougekinki",
        "skill_name": "Iron Demon Style: Metal Counter",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Scatters sword aura to attack the designated enemy and 2 Random others.\nGains Counterattack after the attack.\nWhen defeating an enemy with this skill, gains Extra Turn.",
        "scope": "Self",
        "source": "S (Shishikirimaru)",
        "skill_id": 6012
      }
    ]
  },
  "stealth": {
    "id": "stealth",
    "name": "Stealth",
    "group": "Turn & Action",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Ongyouki",
        "char_icon": "126_Ongyouki",
        "skill_name": "Shade Demon Style: Assassinate",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Attacks the enemy at a speed untrackable to the naked eye.\nIf the target's HP is less than 50%, increases DMG by 45%.\nWhen defeating an enemy with this skill, gains Extra Turn.\nGains Stealth before the attack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Aurora Katana)",
        "skill_id": 12613
      },
      {
        "char_name": "Reiko",
        "char_icon": "176_Reiko",
        "skill_name": "Taima Whip Style: Round Up",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Whips ALL enemies while spinning around.\nRemoves Stealth from ALL enemies after the attack.",
        "scope": "AoE",
        "source": "S (Gengetsu)",
        "skill_id": 17613
      },
      {
        "char_name": "Sakura",
        "char_icon": "5_Sakura",
        "skill_name": "Shadow Arts: Beast Call",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Summons a shadow creature and sends it toward the enemy.\nInflicts (-40%) DEF DOWN to the target at a 95% chance before the attack \nDuration: 2 turn(s)\nGoes into Stealth mode when killing an enemy with this skill.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Assasin's Dagger)",
        "skill_id": 512
      },
      {
        "char_name": "Sakuya",
        "char_icon": "2_Sakuya",
        "skill_name": "Moon Shadow",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When hit by an attack other than an all-target attack, uses Moon Shadow.\nGoes into Stealth mode.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Liberator & Sonic Blade)",
        "skill_id": 212
      },
      {
        "char_name": "Shizuku",
        "char_icon": "95_Shizuku",
        "skill_name": "Black Droplet",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Steals the attacker's Stealth when hit.",
        "scope": "Self",
        "source": "S (Tsukikage)",
        "skill_id": 9513
      }
    ]
  },
  "defense-penetration": {
    "id": "defense-penetration",
    "name": "Defense Penetration",
    "group": "Damage Enhancement",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Astaroth",
        "char_icon": "27_Astaroth",
        "skill_name": "Queen of the Inferno",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When attacking an enemy with Burn, performs a (15%) DEF Penetrate attack.",
        "scope": "Self",
        "source": "S (Ruby Eye)",
        "skill_id": 2714
      },
      {
        "char_name": "Homura",
        "char_icon": "35_Homura",
        "skill_name": "Flaming Spear Battler",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When attacking an enemy with HP at 70% or more, reduces 1 turn(s) of 1 Random Buff they possess.\nWhen attacking an enemy with HP less than 40%, performs a (15%) DEF Penetrate attack.",
        "scope": "Self",
        "source": "S (Tsukiyo)",
        "skill_id": 3514
      },
      {
        "char_name": "Jinglei",
        "char_icon": "18_Jinglei",
        "skill_name": "Kokuryuha",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Unleashes the power of the dragon and attacks ALL enemies.\nPerforms a (60%) DEF Penetrate attack to the target hit.\nOn Last Attack, reduces the Turn Gauge of the enemy with the highest ATK by (15%) at a 65% chance.",
        "scope": "AoE",
        "source": "S (Companion Hand)",
        "skill_id": 1813
      },
      {
        "char_name": "Mizuki",
        "char_icon": "57_Mizuki",
        "skill_name": "Burning Grit",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If character's HP is 40% or more, DMG increases by (7.5%).\nIf character's HP is 80% or more, performs a (15%) DEF Penetrate attack.",
        "scope": "Self",
        "source": "S (Taotei)",
        "skill_id": 5713
      },
      {
        "char_name": "Tougekinki",
        "char_icon": "60_Tougekinki",
        "skill_name": "Demon of \"Iron\"",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Performs a (15%) DEF Penetrate attack per Debuff the target has.\nStacks up to 5.",
        "scope": "Self",
        "source": "S (Rengoku)",
        "skill_id": 6014
      },
      {
        "char_name": "Worrell",
        "char_icon": "226_Worrell",
        "skill_name": "Plasma Rifle: Burst",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Charges the plasma rifle, and fires it 4 time(s) at the enemy.\nPerforms a (60%) DEF Penetrate attack.\nIf only 1 enemy is left, the last attack reduces the Turn Gauge of the target by (15%) at a 85% chance.",
        "scope": "Single Target",
        "source": "S (Crimson Tempest)",
        "skill_id": 22613
      }
    ]
  },
  "shield-penetration": {
    "id": "shield-penetration",
    "name": "Shield Penetration",
    "group": "Damage Enhancement",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Mari",
        "char_icon": "51_Mari",
        "skill_name": "Tales of the Class Rep.",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When attacking an Incapacitated enemy, performs a Shield Penetrate attack.",
        "scope": "Self",
        "source": "S (Cartridge Buster)",
        "skill_id": 5114
      },
      {
        "char_name": "Mitsuki",
        "char_icon": "37_Mitsuki",
        "skill_name": "Wind Art: Rampaging Gust",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Makes a large tornado and sends it toward ALL enemies.\nPerforms a Shield Penetrate attack.\nWhen defeating an enemy with this skill, fills (20%) of the Turn Gauge at a 95% chance for ALL allies.\nSteals the SPD UP Buff of ALL enemies before the attack.\nDamage increases in proportion to SPD.",
        "scope": "AoE",
        "source": "S (Nikko)",
        "skill_id": 3713
      },
      {
        "char_name": "Orochi",
        "char_icon": "61_Orochi",
        "skill_name": "Holy Oni Warrior",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Performs a Shield Penetrate attack on enemies with HP at 75% or more.",
        "scope": "AoE",
        "source": "S (Ryuuga)",
        "skill_id": 6112
      },
      {
        "char_name": "Rinko",
        "char_icon": "11_Rinko",
        "skill_name": "Itto Style: Kogarasi-no-Kata",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Uses Void Art to mercilessly slash the enemy, attacking 4 times.\nEach hit performs a Shield Penetrate attack.\nIf the character has 2 or more Buff, performs 1 Additional Attack.\nWhen an Additional Attack is triggered, inflicts (-24%) SPD DOWN on the target at a 99% chance.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Zetsuei)",
        "skill_id": 1112
      },
      {
        "char_name": "Snakelady",
        "char_icon": "71_Snakelady",
        "skill_name": "Venom Smash",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Attacks the enemy with a powerful dropkick.\nIf the target's HP is less than 30%, performs a Shield Penetrate attack.\nInflicts 2 (2.5%) Poison to the target on Last Attack at a 80% chance.",
        "scope": "Self",
        "source": "S (Blue Viper)",
        "skill_id": 7113
      }
    ]
  },
  "buff-extension": {
    "id": "buff-extension",
    "name": "Buff Extension",
    "group": "Buff Manipulation",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Felicia",
        "char_icon": "30_Felicia",
        "skill_name": "Immortal Hunting",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "When the target has 3 or more Debuffs, and the character's HP is less than 30%, attacking an enemy deals Instant Death at a fixed chance of 75%.\nIncreases the duration of all Buffs by 1 turn after the attack.\nSteals Immortal from the enemy before the attack.\nAttacks 1 enemy 1 time.",
        "scope": "AoE",
        "source": "S (Soul Eraser)",
        "skill_id": 3013
      },
      {
        "char_name": "Shiranui",
        "char_icon": "13_Shiranui",
        "skill_name": "Water Art: Crushing Wave",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Creates a huge wave and sends it to the enemy, target is inflicted with Immobilize\nDuration: 2 turn(s)\nIf the character has 2 or more Buffs, increases the duration of 1 Random Buff held by ALL allies by 1 turn after the attack.",
        "scope": "AoE",
        "source": "S (Hannyagiri)",
        "skill_id": 1312
      },
      {
        "char_name": "Uzuki",
        "char_icon": "119_Uzuki",
        "skill_name": "Light Art: Flash Cannon",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Fires a ray of light at the enemy, attacking 4 times.\nIf the target has 2 or more Debuffs, on every attack, increases the duration of 1 Random Buff of ALL allies by 1 turn(s) at a fixed chance of 25%.",
        "scope": "AoE",
        "source": "S (Dawnbreaker)",
        "skill_id": 11912
      }
    ]
  },
  "buff-share": {
    "id": "buff-share",
    "name": "Buff Share",
    "group": "Buff Manipulation",
    "scope": "buff",
    "characters": []
  },
  "buff-steal": {
    "id": "buff-steal",
    "name": "Buff Steal",
    "group": "Buff Manipulation",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Black",
        "char_icon": "66_Black",
        "skill_name": "End of Darkness",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Attacks the enemy using his ability.\nReduces the target's Turn Gauge by (15%) at a 75% chance on Last Attack.\nSteals the Shield the target has before the attack.\nIf the target's HP is less than 50%, increases Shield by 100% after the attack.",
        "scope": "Self",
        "source": "S (Crimson Requiem)",
        "skill_id": 6613
      },
      {
        "char_name": "Crackle",
        "char_icon": "129_Crackle",
        "skill_name": "NyaNya Attack",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Curls up into a ball and attacks the enemy 6 times while spinning.\nEvery time a CRIT ATK lands, steals 1 Random Buff from the target at a 15% chance.",
        "scope": "AoE",
        "source": "S (Hellcat Glove)",
        "skill_id": 12913
      },
      {
        "char_name": "Felicia",
        "char_icon": "30_Felicia",
        "skill_name": "Immortal Hunting",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "When the target has 3 or more Debuffs, and the character's HP is less than 30%, attacking an enemy deals Instant Death at a fixed chance of 75%.\nIncreases the duration of all Buffs by 1 turn after the attack.\nSteals Immortal from the enemy before the attack.\nAttacks 1 enemy 1 time.",
        "scope": "AoE",
        "source": "S (Soul Eraser)",
        "skill_id": 3013
      },
      {
        "char_name": "Kaede",
        "char_icon": "114_Kaede",
        "skill_name": "Wind Bow: Soaring Wolf",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Jumps up into the air and fires a powerful shot at the enemy.\nIf the target's HP is 80% or more,  steals 1 Random Buff(s) the target has.",
        "scope": "Self",
        "source": "S (Rouga)",
        "skill_id": 11411
      },
      {
        "char_name": "Kotaro",
        "char_icon": "54_Kotaro",
        "skill_name": "Taimanin Art: Fuuma",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Approaches the enemy, stabs and then slashes them to attack.\nSteals 1 Random Buffs from the target hit at a 20% chance.",
        "scope": "Self",
        "source": "S (Fuuma)",
        "skill_id": 5411
      },
      {
        "char_name": "Mitsuki",
        "char_icon": "37_Mitsuki",
        "skill_name": "Wind Art: Rampaging Gust",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Makes a large tornado and sends it toward ALL enemies.\nPerforms a Shield Penetrate attack.\nWhen defeating an enemy with this skill, fills (20%) of the Turn Gauge at a 95% chance for ALL allies.\nSteals the SPD UP Buff of ALL enemies before the attack.\nDamage increases in proportion to SPD.",
        "scope": "AoE",
        "source": "S (Nikko)",
        "skill_id": 3713
      },
      {
        "char_name": "Robel",
        "char_icon": "86_Robel",
        "skill_name": "Type: Hero",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Lovell's skill gets enhanced every 4 turns.\nParticle Weapon: Shini: Steals enemy Shield. Shield effect increases by 50% after stealing.\nParticle Weapon: Kamui\nShield amount increases by 24%.\nGrants (40%) Protect Ally to ALL allies.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Tomurai & Requiem)",
        "skill_id": 8613
      }
    ]
  },
  "debuff-remove": {
    "id": "debuff-remove",
    "name": "Debuff Remove",
    "group": "Buff Manipulation",
    "scope": "buff",
    "characters": [
      {
        "char_name": "Amane",
        "char_icon": "6_Amane",
        "skill_name": "Fuuma Martial Art: Skyfall",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start absorbs (12.5%) Turn Gauge of the enemy with the strongest ATK at a 50% chance.\nOn Turn Start, removes 1 Debuff on the character.",
        "scope": "Self",
        "source": "S (Android Arm Secrecy)",
        "skill_id": 612
      },
      {
        "char_name": "Hikage",
        "char_icon": "120_Hikage",
        "skill_name": "Wind Art: Spring Wind",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants (45%) ATK UP to 1 ally.\nDuration: 2 turn(s)\nRemoves all Debuffs.",
        "scope": "AoE",
        "source": "S (Amayo)",
        "skill_id": 12012
      },
      {
        "char_name": "Sensyu",
        "char_icon": "91_Sensyu",
        "skill_name": "Poisonous Raksha",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Removes all Poison Debuff from the character when hit.\nIf this skill is on Cooldown, increases Poison DMG by 3% at a 50% chance on every attack's Last Attack.",
        "scope": "AoE",
        "source": "S (Poison Dragon Claw)",
        "skill_id": 9112
      },
      {
        "char_name": "Silkys",
        "char_icon": "90_Silkys",
        "skill_name": "Hero Vibes",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Whenever an ally gets a Debuff, removes 1 Random Debuff of ALL allies.\nFills the Turn Gauge of ALL allies by (20%) at a 65% chance.",
        "scope": "AoE",
        "source": "S (Neon Saucer)",
        "skill_id": 9012
      }
    ]
  },
  "bleed": {
    "id": "bleed",
    "name": "Bleed",
    "group": "Damage Over Time",
    "scope": "debuff",
    "characters": [
      {
        "char_name": "Aki",
        "char_icon": "45_Aki",
        "skill_name": "Chasing Slash",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Swings a sword left and right to attack the enemy 4 times.\nIf the target has Bleed on last Last Attack, inflicts (22.5%) Weaken.\nDuration: 2 turn(s)\nGains (32.5%) CRIT Rate UP before the attack. \nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Giren)",
        "skill_id": 4512
      },
      {
        "char_name": "Felicia",
        "char_icon": "30_Felicia",
        "skill_name": "Seven Hells",
        "skill_type": "[Attack Skill]",
        "skill_desc": "After launching the enemy into the air, jumps up and attacks 4 times in total.\nTarget hit is inflicted (10%) Bleed at a 10% chance.\nDuration: 3 turn(s)\nWhen Vampire Princess is on Cooldown, performs an Additional Attack 1 time.\nOn Last Attack, increases Bleed effect by 1 turn(s).\nDuration: 1 turn(s)",
        "scope": "Self",
        "source": "S (Crow's Beak)",
        "skill_id": 3012
      },
      {
        "char_name": "Maskedtaimanin",
        "char_icon": "78_Maskedtaimanin",
        "skill_name": "Taimanin Art: Uprising Storm",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Randomly swings the knife and attacks the enemy 8 times.\nPerforms a (75%) Bleed Debuff Explode attack.\nWhen defeating an enemy with this skill, reduces the Turn Gauge of ALL enemies by (15%) at a 50% chance.",
        "scope": "AoE",
        "source": "S (Kokuten)",
        "skill_id": 7812
      },
      {
        "char_name": "Oboro",
        "char_icon": "23_Oboro",
        "skill_name": "Wicked Slasher",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Lightly jumps and stabs the enemy with their claws.\nPerforms a (75%) Bleed Debuff Explode attack.",
        "scope": "Self",
        "source": "S (Black Iron Claw)",
        "skill_id": 2313
      },
      {
        "char_name": "Sayaneo",
        "char_icon": "59_Sayaneo",
        "skill_name": "Saya NEO Special",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Stabs mercilessly with tentacles to attack the enemy.\nThis skill performs a (15%) Life Steal attack.\nPerforms a (75%) Debuff Explode Bleed attack.",
        "scope": "Self",
        "source": "S (Abyss Crawler)",
        "skill_id": 5913
      },
      {
        "char_name": "Toyo",
        "char_icon": "53_Toyo",
        "skill_name": "Momochi Style Ultimate: Kodoku",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "After launching a series of attacks with the weapons covering the body, finishes the enemy with the blade on the back.\nTarget hit is inflicted with Bleed, Poison, and Burn by 10%, 3%, and 5% respectively.\nFor each Debuff the target has, DMG increases by (55%).\nStacks up to 4.",
        "scope": "Self",
        "source": "S (Magatsuki)",
        "skill_id": 5313
      },
      {
        "char_name": "Yeager",
        "char_icon": "102_Yeager",
        "skill_name": "Jäger Cross",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Quickly launches at the enemy and slashes them in a cross-shape and explodes, attacking 3 time(s).\nIf the enemy isn't the only one remaining, performs a (75%) Bleed, Burn, Poison Debuff Explode attack.\nIf the enemy is the only one remaining, performs a (100%) Bleed, Burn, Poison Debuff Explode attack.",
        "scope": "Self",
        "source": "S (Crimson Reaper)",
        "skill_id": 10213
      }
    ]
  },
  "burn": {
    "id": "burn",
    "name": "Burn",
    "group": "Damage Over Time",
    "scope": "debuff",
    "characters": [
      {
        "char_name": "Astaroth",
        "char_icon": "27_Astaroth",
        "skill_name": "Heat Wave",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks ALL enemies by lighting the ground beneath them on fire.\nInflicts (3.5%) Burn at a 60% chance on Last Attack.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Throne Bracelet)",
        "skill_id": 2712
      },
      {
        "char_name": "Bell",
        "char_icon": "103_Bell",
        "skill_name": "Satellite Beam",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Throws a signal beacon to mark the bomb drop location, to attack ALL enemies.\nTargets hit are inflicted with (3.5%) Burn.\nDuration: 3 turn(s)\nIf the target's HP is less than 30% after the attack, additionally inflicts Burn.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (BS Assault Shooter Custom)",
        "skill_id": 10313
      },
      {
        "char_name": "Burroughs",
        "char_icon": "76_Burroughs",
        "skill_name": "Charge Slash",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Focuses energy on the sword and attacks ALL enemies.\nTarget hit is inflicted with (3.5%) Burn at a 50% chance.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Berserker Blade)",
        "skill_id": 7612
      },
      {
        "char_name": "Denji",
        "char_icon": "110_Denji",
        "skill_name": "Explosive Art: Dust Cloud",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Throws a sugar cube at a targeted enemy and 1 Random enemy.\nTargets hit are inflicted with (3.5%) Burn at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Self",
        "source": "S (Hibana)",
        "skill_id": 11011
      },
      {
        "char_name": "Homura",
        "char_icon": "35_Homura",
        "skill_name": "Flaming Spear",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Charges while mounted on a spear and attacks 2 times.\nIf the target is inflicted with Burn, CRIT Rate increases 7.5%.",
        "scope": "Self",
        "source": "S (Hyakuren)",
        "skill_id": 3511
      },
      {
        "char_name": "Ingrid",
        "char_icon": "25_Ingrid",
        "skill_name": "Evil Flame Slash",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Performs a consecutive sword dance to attack the enemy 4 times.\nTarget hit has their Turn Gauge decreased by (15%) at a 10% chance.\nPerforms 2 additional Additional Attacks and deals (75%) Burn Debuff Explode.",
        "scope": "Self",
        "source": "S (Sol Brave)",
        "skill_id": 2512
      },
      {
        "char_name": "Maika",
        "char_icon": "31_Maika",
        "skill_name": "Meido Bazooka <Grenade>",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "After jumping into the air, fires a super-heated flame bullet toward the ground, attacking ALL enemies.\nWhen an enemy is defeated by this skill, resets Cooldown of Blazing Barrage.\nInflicts (3.5%) Burn to ALL enemies at a 75% chance before the attack.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Nuclear Option)",
        "skill_id": 3113
      },
      {
        "char_name": "Rika",
        "char_icon": "40_Rika",
        "skill_name": "Cross Slash",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Launches a cross-shaped sword aura at the enemy.\nTarget hit is inflicted with (3.5%) Burn at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Self",
        "source": "S (Suitenko)",
        "skill_id": 4011
      },
      {
        "char_name": "Sora",
        "char_icon": "43_Sora",
        "skill_name": "Apprentice Taimanin",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If the character has a Buff, inflicts (3.5%) Burn to the target at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Self",
        "source": "S (Higure)",
        "skill_id": 4313
      },
      {
        "char_name": "Toyo",
        "char_icon": "53_Toyo",
        "skill_name": "Momochi Assassin Arts: Serpent",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Draws two swords from the back and stabs the enemy 7 times.\nTarget hit is inflicted with Immobilize.\nDuration: 2 turn(s)\nWhen defeating the enemy, inflicts ALL enemies with (3.5%) Burn.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Utzuro)",
        "skill_id": 5312
      },
      {
        "char_name": "Tsuru",
        "char_icon": "82_Tsuru",
        "skill_name": "Bullet Party",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Sprays bullets, attacking the enemy 7 times.\nTarget hit is inflicted with (3.5%) Burn at a 5% chance.\nDuration: 3 turn(s)",
        "scope": "Self",
        "source": "S (Order-maid)",
        "skill_id": 8211
      },
      {
        "char_name": "Yeager",
        "char_icon": "102_Yeager",
        "skill_name": "Jäger Cross",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Quickly launches at the enemy and slashes them in a cross-shape and explodes, attacking 3 time(s).\nIf the enemy isn't the only one remaining, performs a (75%) Bleed, Burn, Poison Debuff Explode attack.\nIf the enemy is the only one remaining, performs a (100%) Bleed, Burn, Poison Debuff Explode attack.",
        "scope": "Self",
        "source": "S (Crimson Reaper)",
        "skill_id": 10213
      }
    ]
  },
  "poison": {
    "id": "poison",
    "name": "Poison",
    "group": "Damage Over Time",
    "scope": "debuff",
    "characters": [
      {
        "char_name": "Anemone",
        "char_icon": "77_Anemone",
        "skill_name": "Call of Anubis",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Spreads a wide web to attack ALL enemies.\nTargets hit by the web are inflicted with (2.5%) Poison at a 15% chance.\nDuration : 3 turn(s)\nIf the target has 4 or more Debuffs, absorbs (12.5%) Turn Gauge at a 35% chance on the Last Attack. \nIf the target's Turn Gauge is less than 30%, increases the efficacy of Poison by 3% at a 60% chance after the attack.\nDuration : 3 turn(s)",
        "scope": "AoE",
        "source": "S (In Memorial)",
        "skill_id": 7712
      },
      {
        "char_name": "Furfur",
        "char_icon": "65_Furfur",
        "skill_name": "Demon Bug: Firefly",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Small demon insects trigger a chain of explosions, attacking ALL enemies 3 times.\nInflicts (2.5%) Poison at a 75% chance on the Last Attack for 2 times.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Hræsvelgr)",
        "skill_id": 6512
      },
      {
        "char_name": "Kaworu",
        "char_icon": "74_Kaworu",
        "skill_name": "Chain Art: Chain Frenzy",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Swings the chain randomly, attacking ALL enemies 6 times.\nTargets hit is inflicted with (2.5%) Poison at a 10% chance.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Murakumo Iron Chains)",
        "skill_id": 7413
      },
      {
        "char_name": "Saburo",
        "char_icon": "94_Saburo",
        "skill_name": "The 18th Saburo",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If the character is inflicted with a Debuff, inflicts ALL enemies with (2.5%) Poison at a 60% chance.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Kogoro Plush)",
        "skill_id": 9412
      },
      {
        "char_name": "Sensyu",
        "char_icon": "91_Sensyu",
        "skill_name": "Poisonous Raksha",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Removes all Poison Debuff from the character when hit.\nIf this skill is on Cooldown, increases Poison DMG by 3% at a 50% chance on every attack's Last Attack.",
        "scope": "AoE",
        "source": "S (Poison Dragon Claw)",
        "skill_id": 9112
      },
      {
        "char_name": "Snakelady",
        "char_icon": "71_Snakelady",
        "skill_name": "Venom Smash",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Attacks the enemy with a powerful dropkick.\nIf the target's HP is less than 30%, performs a Shield Penetrate attack.\nInflicts 2 (2.5%) Poison to the target on Last Attack at a 80% chance.",
        "scope": "Self",
        "source": "S (Blue Viper)",
        "skill_id": 7113
      },
      {
        "char_name": "Toyo",
        "char_icon": "53_Toyo",
        "skill_name": "Momochi Style Ultimate: Kodoku",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "After launching a series of attacks with the weapons covering the body, finishes the enemy with the blade on the back.\nTarget hit is inflicted with Bleed, Poison, and Burn by 10%, 3%, and 5% respectively.\nFor each Debuff the target has, DMG increases by (55%).\nStacks up to 4.",
        "scope": "Self",
        "source": "S (Magatsuki)",
        "skill_id": 5313
      },
      {
        "char_name": "Yeager",
        "char_icon": "102_Yeager",
        "skill_name": "Jäger Cross",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Quickly launches at the enemy and slashes them in a cross-shape and explodes, attacking 3 time(s).\nIf the enemy isn't the only one remaining, performs a (75%) Bleed, Burn, Poison Debuff Explode attack.\nIf the enemy is the only one remaining, performs a (100%) Bleed, Burn, Poison Debuff Explode attack.",
        "scope": "Self",
        "source": "S (Crimson Reaper)",
        "skill_id": 10213
      }
    ]
  },
  "absorb": {
    "id": "absorb",
    "name": "Absorb",
    "group": "Damage Over Time",
    "scope": "debuff",
    "characters": []
  },
  "stun": {
    "id": "stun",
    "name": "Stun",
    "group": "Crowd Control",
    "scope": "debuff",
    "characters": [
      {
        "char_name": "Anje",
        "char_icon": "84_Anje",
        "skill_name": "Tentacle Ambush",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Drives tentacles into the ground, attacking 1 Random enemy.\nTarget hit is inflicted with Faint at a 5% chance.\nDuration: 1 turn(s)",
        "scope": "Self",
        "source": "S (Kraken Anchor)",
        "skill_id": 8411
      },
      {
        "char_name": "Gaiza",
        "char_icon": "55_Gaiza",
        "skill_name": "Grudgeful Strike",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Ruthlessly slashes the sword at the enemy 9 times.\nTarget hit is inflicted with Faint at a 5% chance.\nDuration: 1 turn(s)\nIncreases target's DMG by (45%) per Buff they have.\nStacks up to 3.",
        "scope": "Self",
        "source": "S (Nakigara)",
        "skill_id": 5513
      },
      {
        "char_name": "Mari",
        "char_icon": "51_Mari",
        "skill_name": "Earth Art: Stone Spear",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Performs a Power Hit on the ground and attacks ALL enemies.\nIf the target has 2 or more Debuffs, inflicts them with Faint.\nDuration: 1 turn(s)",
        "scope": "AoE",
        "source": "S (Gear Bracelet)",
        "skill_id": 5113
      },
      {
        "char_name": "Mawari",
        "char_icon": "108_Mawari",
        "skill_name": "Dumbo Attack!?",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Runs toward the enemy and trips to do a headbutt attack.\nTarget is inflicted with Faint at a 20% chance.\nDuration: 1 turn(s)",
        "scope": "Self",
        "source": "S (Ushio)",
        "skill_id": 10812
      },
      {
        "char_name": "Rin",
        "char_icon": "32_Rin",
        "skill_name": "Lightning Art: Chain Volt",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Overcharges both swords with electricity and slashes at the enemy.\nRemoves 1 Random enemy Buffs and inflicts Faint at 20% rate on Last Attack.\nDuration: 1 turn(s)\nOn every CRIT ATK, absorbs (12.5%) Turn Gauge at a 60% chance.",
        "scope": "Self",
        "source": "S (Lightning Saber II Raizin)",
        "skill_id": 3213
      }
    ]
  },
  "freeze": {
    "id": "freeze",
    "name": "Freeze",
    "group": "Crowd Control",
    "scope": "debuff",
    "characters": [
      {
        "char_name": "Shirayuki",
        "char_icon": "3_Shirayuki",
        "skill_name": "Ice Fall",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Creates a large ice crystal and drops it on top of ALL enemies.\nTargets hit are inflicted with (25%) Freeze at a 35% chance.\nIf the character has 2 or more Buffs inflicting Freeze is guaranteed.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Crystal Staff)",
        "skill_id": 313
      }
    ]
  },
  "sleep": {
    "id": "sleep",
    "name": "Sleep",
    "group": "Crowd Control",
    "scope": "debuff",
    "characters": []
  },
  "confuse": {
    "id": "confuse",
    "name": "Confusion",
    "group": "Crowd Control",
    "scope": "debuff",
    "characters": [
      {
        "char_name": "Natsume",
        "char_icon": "20_Natsume",
        "skill_name": "Alluring Touch",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks ALL enemies with alluring gestures.\nTarget hit is Taunted at a 45% chance.\nDuration: 2 turn(s)\nIf the target already is Taunted, puts them in Confusion state at a fixed chance of 30%.\nDuration: 1 turn(s)\nIf the target is an Agility type, decreases (15%) of their Turn Gauge at a 95% chance.",
        "scope": "AoE",
        "source": "S (Witch Sleeve)",
        "skill_id": 2012
      },
      {
        "char_name": "Suzuka",
        "char_icon": "118_Suzuka",
        "skill_name": "Scarlet Art: Scarlet Miasma",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Spreads Scarlet Art forward to attack ALL enemies.\nWhen attacking a target with 3 or more Debuffs, inflicts Confusion at a 55% chance.\nDuration: 1 turn(s)",
        "scope": "AoE",
        "source": "S (Shiranami)",
        "skill_id": 11813
      },
      {
        "char_name": "Yukiha",
        "char_icon": "8_Yukiha",
        "skill_name": "Snow Assassin",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If the enemy dies after the attack, puts 1 Random enemy into Confusion mode at a 70% chance.\nDuration: 1 turn(s)",
        "scope": "Self",
        "source": "S (Yamidachi)",
        "skill_id": 813
      }
    ]
  },
  "taunt": {
    "id": "taunt",
    "name": "Taunt",
    "group": "Crowd Control",
    "scope": "debuff",
    "characters": [
      {
        "char_name": "Akina",
        "char_icon": "121_Akina",
        "skill_name": "Stone Art: Heavyweight",
        "skill_type": "[Support Skill]",
        "skill_desc": "Charges up energy and gains (40%) DEF UP.\nDuration: 2 turn(s)\nRestores 15% of Max. HP.\nTaunts 1 Random enemy.",
        "scope": "Self",
        "source": "S (Utopia)",
        "skill_id": 12112
      },
      {
        "char_name": "Fuyumi",
        "char_icon": "39_Fuyumi",
        "skill_name": "Taimanin Art: Spear",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Using the character's abilities and spear, attacks the enemy a total of 3 times.\nTaunts the target hit at a 5% chance.\nDuration: 2 turn(s)\nDamage increases in proportion to HP lost.",
        "scope": "Self",
        "source": "S (Spring Breeze)",
        "skill_id": 3911
      },
      {
        "char_name": "Houensai",
        "char_icon": "111_Houensai",
        "skill_name": "Oil Art: Flame Disaster",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Breathes out fire, attacking ALL enemies 3 times.\nRemoves Shield from the targets.\nTargets hit are Taunted at a 30% chance.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Daruma)",
        "skill_id": 11113
      },
      {
        "char_name": "Major",
        "char_icon": "63_Major",
        "skill_name": "Chance Maker",
        "skill_type": "[Support Skill]",
        "skill_desc": "Taunts ALL enemies.\nDuration: 2 turn(s)\nThe character gains (10%) Damage Reflect.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Moon Shot)",
        "skill_id": 6312
      },
      {
        "char_name": "Murasaki",
        "char_icon": "19_Murasaki",
        "skill_name": "Fortification",
        "skill_type": "[Support Skill]",
        "skill_desc": "Gains a Shield equal to 19.5% of the character's Max. HP.\nDuration: 2 turn(s)\nTaunts ALL enemies at a fixed chance of 30%\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Combat Axe)",
        "skill_id": 1912
      },
      {
        "char_name": "Natsume",
        "char_icon": "20_Natsume",
        "skill_name": "Alluring Touch",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks ALL enemies with alluring gestures.\nTarget hit is Taunted at a 45% chance.\nDuration: 2 turn(s)\nIf the target already is Taunted, puts them in Confusion state at a fixed chance of 30%.\nDuration: 1 turn(s)\nIf the target is an Agility type, decreases (15%) of their Turn Gauge at a 95% chance.",
        "scope": "AoE",
        "source": "S (Witch Sleeve)",
        "skill_id": 2012
      },
      {
        "char_name": "Sokushitsuki",
        "char_icon": "125_Sokushitsuki",
        "skill_name": "Raging Wind, Clear Moon",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Slashes the enemy with Iaido after while laughing.\nTaunts ALL enemies at a 35% chance before the attack.\nDuration: 2 turn(s)\nGains (19.5%) Power-up after the attack.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Minagoroshi)",
        "skill_id": 12513
      }
    ]
  },
  "immobilize": {
    "id": "immobilize",
    "name": "Immobilize",
    "group": "Crowd Control",
    "scope": "debuff",
    "characters": [
      {
        "char_name": "Hisui",
        "char_icon": "41_Hisui",
        "skill_name": "Eclipse Meld: Resonate",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Using a skill on every 4th turn grants an additional effect.\nWhen using Monk Staff Art, Healing Effect increases by (100%).\nWhen using Eclipse Meld: Syphoning Strike, inflicts Immobilize on the enemy.\nDuration: 2 turn(s)\nWhen using Eclipse Meld: Sound, grants a (7%) Healing Over Time to all allies for 2 turn(s).",
        "scope": "AoE",
        "source": "S (Jizo's Steel Staff)",
        "skill_id": 4114
      },
      {
        "char_name": "Shiranui",
        "char_icon": "13_Shiranui",
        "skill_name": "Water Art: Crushing Wave",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Creates a huge wave and sends it to the enemy, target is inflicted with Immobilize\nDuration: 2 turn(s)\nIf the character has 2 or more Buffs, increases the duration of 1 Random Buff held by ALL allies by 1 turn after the attack.",
        "scope": "AoE",
        "source": "S (Hannyagiri)",
        "skill_id": 1312
      },
      {
        "char_name": "Toyo",
        "char_icon": "53_Toyo",
        "skill_name": "Momochi Assassin Arts: Serpent",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Draws two swords from the back and stabs the enemy 7 times.\nTarget hit is inflicted with Immobilize.\nDuration: 2 turn(s)\nWhen defeating the enemy, inflicts ALL enemies with (3.5%) Burn.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Utzuro)",
        "skill_id": 5312
      },
      {
        "char_name": "Yaobikuni",
        "char_icon": "97_Yaobikuni",
        "skill_name": "Soul Wave",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Fires a powerful laser at the enemy.\nTarget hit is inflicted with Immobilize at a 30% chance.\nDuration: 2 turn(s)\nIncreases all skill Cooldown of the target by 1 turn(s).",
        "scope": "AoE",
        "source": "S (Dawnbreaker Staff)",
        "skill_id": 9712
      }
    ]
  },
  "electrocute": {
    "id": "electrocute",
    "name": "Electrocute",
    "group": "Skill Suppression",
    "scope": "debuff",
    "characters": [
      {
        "char_name": "Rin",
        "char_icon": "32_Rin",
        "skill_name": "Volt Taimanin",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If the target is inflicted with Electrocute, DMG increases (7.5%).\nIf the target is inflicted with Faint, CRIT Rate increases (7.5%).",
        "scope": "Self",
        "source": "S (Mist Grave)",
        "skill_id": 3214
      },
      {
        "char_name": "Shikanosuke",
        "char_icon": "80_Shikanosuke",
        "skill_name": "Elec Art: Lightning Tackle",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Charges at the enemy with electricity coursing through the character.\nTarget hit is guaranteed to be inflicted with Electrocute.\nDuration: 2 turn(s)\nGains (2) Protective Shield after the attack.\nDuration: 2 turn(s)\nIf Uehara Rin is deployed, applies the same effect to Uehara Rin.",
        "scope": "Self",
        "source": "S (Snowflake)",
        "skill_id": 8013
      },
      {
        "char_name": "Yukikaze",
        "char_icon": "238_Yukikaze",
        "skill_name": "Linear Thunder",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Jumps into the air and sprays bullets at ALL enemies.\nIncreases the CRIT Rate by (15%) when attacking.\nTarget hit by a CRIT ATK is inflicted with Electrocute at a fixed chance of 35%.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Flame Tiger Custom)",
        "skill_id": 713
      }
    ]
  },
  "atk-down": {
    "id": "atk-down",
    "name": "ATK Down",
    "group": "Stat Debuffs",
    "scope": "debuff",
    "characters": []
  },
  "def-down": {
    "id": "def-down",
    "name": "DEF Down",
    "group": "Stat Debuffs",
    "scope": "debuff",
    "characters": [
      {
        "char_name": "Sakura",
        "char_icon": "5_Sakura",
        "skill_name": "Shadow Arts: Beast Call",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Summons a shadow creature and sends it toward the enemy.\nInflicts (-40%) DEF DOWN to the target at a 95% chance before the attack \nDuration: 2 turn(s)\nGoes into Stealth mode when killing an enemy with this skill.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Assasin's Dagger)",
        "skill_id": 512
      }
    ]
  },
  "spd-down": {
    "id": "spd-down",
    "name": "SPD Down",
    "group": "Stat Debuffs",
    "scope": "debuff",
    "characters": [
      {
        "char_name": "Asagi",
        "char_icon": "1_Asagi",
        "skill_name": "Koujin Zanka",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Moves as fast as light and instantly attacks the enemy 6 time(s)\nTarget hit is inflicted with (-19.5%) SPD DOWN at a 99% chance and has their Turn Gauge reduced by (15%) at a 65% chance on Last Attack",
        "scope": "Self",
        "source": "S (Tokizaki)",
        "skill_id": 113
      },
      {
        "char_name": "Rinko",
        "char_icon": "11_Rinko",
        "skill_name": "Itto Style: Kogarasi-no-Kata",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Uses Void Art to mercilessly slash the enemy, attacking 4 times.\nEach hit performs a Shield Penetrate attack.\nIf the character has 2 or more Buff, performs 1 Additional Attack.\nWhen an Additional Attack is triggered, inflicts (-24%) SPD DOWN on the target at a 99% chance.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Zetsuei)",
        "skill_id": 1112
      },
      {
        "char_name": "Tatsuro",
        "char_icon": "12_Tatsuro",
        "skill_name": "Itto Style: Moon Fall",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Leaps high and slashes enemies with a sword gripped in reverse.\nTarget hit is inflicted with (-19.5%) SPD DOWN at a 95% chance.\nDuration: 2 turn(s)\nAbsorbs (12.5%) Turn Gauge at a 35% chance.",
        "scope": "AoE",
        "source": "S (Amakudari)",
        "skill_id": 1212
      }
    ]
  },
  "heal-reduction": {
    "id": "heal-reduction",
    "name": "Heal Reduction",
    "group": "Stat Debuffs",
    "scope": "debuff",
    "characters": [
      {
        "char_name": "Anemone",
        "char_icon": "77_Anemone",
        "skill_name": "Reaper-Summoning Thread",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Attacks ALL enemies 1 time.\nDMG increases by 22.5% of the target's current HP.\nTargets are inflicted with (50%)Heal Reduction at a 99% chance.\nDuration : 2 turn(s)\nIf the target is left alone, they are inflicted with (2.5%) Poison at a 90% chance.\nDuration : 3 turn(s)",
        "scope": "AoE",
        "source": "S (Rosebud)",
        "skill_id": 7713
      },
      {
        "char_name": "Asagi",
        "char_icon": "1_Asagi",
        "skill_name": "Hirenka",
        "skill_type": "[Attack Skill]",
        "skill_desc": "After kicking the enemy upward, slashes them 4 times in midair for a total of 5 attacks.\nTarget hit is inflicted with (65%) Heal Reduction at a 99% chance.\nDuration: 2 turn(s)\nKilling an enmey with this skill resets the Cooldown of Koujin Zanka",
        "scope": "Self",
        "source": "S (Gurren)",
        "skill_id": 112
      },
      {
        "char_name": "Maskedtaimanin",
        "char_icon": "78_Maskedtaimanin",
        "skill_name": "Mask of Concealment",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If the target has 3 or more Buffs upon attack, inflicts (60%) Heal Reduction at a 20% chance.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Blade Crusher)",
        "skill_id": 7814
      }
    ]
  },
  "weaken": {
    "id": "weaken",
    "name": "Weaken",
    "group": "Stat Debuffs",
    "scope": "debuff",
    "characters": [
      {
        "char_name": "Aina",
        "char_icon": "46_Aina",
        "skill_name": "Wild Fire",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Rapidly fires both pistols to attack the enemy 5 times.\nTarget hit is inflicted with (19.5%) Weaken at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Phaser Blaster)",
        "skill_id": 4611
      },
      {
        "char_name": "Aki",
        "char_icon": "45_Aki",
        "skill_name": "Chasing Slash",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Swings a sword left and right to attack the enemy 4 times.\nIf the target has Bleed on last Last Attack, inflicts (22.5%) Weaken.\nDuration: 2 turn(s)\nGains (32.5%) CRIT Rate UP before the attack. \nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Giren)",
        "skill_id": 4512
      },
      {
        "char_name": "Annerose",
        "char_icon": "33_Annerose",
        "skill_name": "[&Tbl_UnitSkill_Name_3301]",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Stabs the enemy 4 times with her signature technique.\nOn Last Attack, inflicts the enemy with Weaken at a 10% chance.\nDuration: 2 turn(s)\nDMG increases in proportion to current HP.",
        "scope": "Self",
        "source": "S ()",
        "skill_id": 3311
      }
    ]
  },
  "instant-death": {
    "id": "instant-death",
    "name": "Instant Death",
    "group": "Special",
    "scope": "debuff",
    "characters": [
      {
        "char_name": "Felicia",
        "char_icon": "30_Felicia",
        "skill_name": "Immortal Hunting",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "When the target has 3 or more Debuffs, and the character's HP is less than 30%, attacking an enemy deals Instant Death at a fixed chance of 75%.\nIncreases the duration of all Buffs by 1 turn after the attack.\nSteals Immortal from the enemy before the attack.\nAttacks 1 enemy 1 time.",
        "scope": "AoE",
        "source": "S (Soul Eraser)",
        "skill_id": 3013
      },
      {
        "char_name": "Torajiro",
        "char_icon": "87_Torajiro",
        "skill_name": "Rip and Tear",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Randomly slashes the enemy 6 times.\nPerforms an Additional Attack without any conditions. \nWhen the target's HP is less than 20% on every Additional Attack, deals Instant Death at a fixed chance of 15%.",
        "scope": "Self",
        "source": "S (White Tiger Fists)",
        "skill_id": 8713
      }
    ]
  },
  "immune": {
    "id": "immune",
    "name": "Immune",
    "group": "Special",
    "scope": "buff",
    "characters": []
  }
};
