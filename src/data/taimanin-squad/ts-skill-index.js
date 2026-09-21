// Taimanin Squad Skill Mechanic Index
// Auto-generated from game data on 2026-05-14
// Maps skill mechanics to characters who provide/use them
// 48 mechanics across 133 characters

export const TS_SKILL_INDEX_VERSION = "1.0";
export const TS_SKILL_INDEX_GENERATED = "2026-09-21";

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
            "char_name": "Aina Winchester",
            "char_icon": "46_Aina",
            "skill_name": "<Game Changer> Full Burst",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Fires a powerful laser beam towards an enemy with the drone.\nGains a (25%) ACC UP before the attack.\nDuration: 2 turn(s)\nWhen attacking the only remaining enemy, CRIT Rate increases by (37.5%).",
            "scope": "AoE",
            "source": "S (Game Changer)",
            "skill_id": 4613
          },
      {
        "char_name": "Hayami Uzuki",
        "char_icon": "119_Uzuki",
        "skill_name": "Light Art: Rending Radiance",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Gathers particles of light at the tip of the spear and radiates them towards ALL enemies.\nThe emitted light deals damage 3 times, and reduces the Cooldown of the 3rd skill of ALL allies except the character by 1 turn on Last Attack.\nGains (25%) ACC UP Buff before the attack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 11903
      },
      {
        "char_name": "Rakshasa",
        "char_icon": "125_Sokushitsuki",
        "skill_name": "Demon Blade: Raging Wind",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Fires a powerful sword aura at the enemy consecutively 3 time(s).\nIf the character's HP is 70% or more before the attack, grants (30%) ACC UP to the character.\nDuration: 2 turn(s)\nIf the character's HP is less than 70% before the attack, grants (60%) CRIT DMG UP to the character.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 12502
      },
      {
        "char_name": "[Gosha] Akiyama Rinko",
        "char_icon": "239_Rinko",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 23903
      },
      {
        "char_name": "[Sky Edge] Akiyama Rinko",
        "char_icon": "280_Rinko",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 28001
      },
      {
        "char_name": "[Divine Armor] Shinganji Kurenai",
        "char_icon": "281_Kurenai",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 28101
      },
      {
        "char_name": "[School] Clone Asagi",
        "char_icon": "298_Asagi",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "AoE",
        "source": "",
        "skill_id": 29803
      },
      ]
      },
      {
        "id": "atk-up",
        "name": "ATK Up",
        "group": "Stat Buffs",
        "scope": "buff",
        "characters": [

          {
            "char_name": "Alectra",
            "char_icon": "124_Arectra",
            "skill_name": "<Tisiphone> Wrath of the Vengeful",
            "skill_type": "[Passive Skill]",
            "skill_desc": "When defeated after being attacked by an enemy, she resurrects at 1% of Max. HP and enters an Immortal state.\nDuration: 1 turn(s)\nAdditionally gains (60%) ATK UP.\nDuration: 2 turn(s)\nIf Wrath of the Vengeful is on Cooldown, performs an Additional Attack on every attack.",
            "scope": "Self",
            "source": "S (Tisiphone)",
            "skill_id": 12413
          },
          {
            "char_name": "Eleonor",
            "char_icon": "48_Eleonor",
            "skill_name": "<Tear of Rusalka> Defensive Nectar",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Grants Debuff Block to ALL allies using the power of nature.\nDuration: 2 turn(s)\nAdditionally grants (45%) ATK UP if the allies other than the character with granted Debuff Block doesn't have any Debuff.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Tear of Rusalka)",
            "skill_id": 4813
          },
          {
            "char_name": "Kugasa Hikage",
            "char_icon": "120_Hikage",
            "skill_name": "<Amayo> Wind Art: Spring Wind",
            "skill_type": "[Support Skill]",
            "skill_desc": "Grants (45%) ATK UP to 1 ally.\nDuration: 2 turn(s)\nRemoves all Debuffs.",
            "scope": "AoE",
            "source": "S (Amayo)",
            "skill_id": 12012
          },
          {
            "char_name": "Kanezaki Jubei",
            "char_icon": "10_Jubei",
            "skill_name": "<Golden Eater> Gold Aegis",
            "skill_type": "[Support Skill]",
            "skill_desc": "Spins the gun in a flashy manner, then shoots it into the sky and gains (40%) ATK UP.\nDuration: 2 turn(s)\nGains Extra Turn.",
            "scope": "Self",
            "source": "S (Golden Eater)",
            "skill_id": 1012
          },
          {
            "char_name": "Echizen Saya",
            "char_icon": "122_Saya",
            "skill_name": "<Yuugure> Heaven Flipping",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Tosses the enemy up in the air with a greatsword and attacks 5 times.\nGains (35%) ATK UP before the attack.\nDuration: 2 turn(s)\nGrants the same Buff to ALL allies with the same type as the character.",
            "scope": "AoE",
            "source": "S (Yuugure)",
            "skill_id": 12213
          },
          {
            "char_name": "Fuuma Tokiko",
            "char_icon": "28_Tokiko",
            "skill_name": "<Sagiri> Evil Eye: Clairvoyance",
            "skill_type": "[Support Skill]",
            "skill_desc": "Uses Clairvoyance to grant a (45%) ATK UP to 1 ally.\nDuration: 2 turn(s)\nReduces the Cooldown of all affected allies' skills by -1 turn(s) and additionally grants Debuff Block.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Sagiri)",
            "skill_id": 2822
          },
          {
            "char_name": "Yuphie & Sophie",
            "char_icon": "58_Yuphiesophie",
            "skill_name": "<Amanohara> The Playful Oni Sisters♪",
            "skill_type": "[Passive Skill]",
            "skill_desc": "On Turn Start, grants a (45%) ATK UP to an ally with the highest ATK.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Amanohara)",
            "skill_id": 5814
          },
      {
        "char_name": "Igawa Asagi",
        "char_icon": "1_Asagi",
        "skill_name": "Koujin Zanka",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Moves as fast as light and instantly attacks the enemy 6 times.\nDamage increases in proportion to SPD.\nGains a (40%) ATK UP and (19.5%) before the attack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 103
      },
      {
        "char_name": "Kanezaki Jubei",
        "char_icon": "10_Jubei",
        "skill_name": "Gold Aegis",
        "skill_type": "[Support Skill]",
        "skill_desc": "Spins the gun in a flashy manner, then shoots it into the sky and gains (45%) ATK UP.\nDuration: 2 turn(s)\nIf the character already has ATK UP, grants (35%) ATK UP to ALL allies excluding self.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 1002
      },
      {
        "char_name": "Kichi Azusa",
        "char_icon": "14_Azusa",
        "skill_name": "Shikigami: Bodyguard",
        "skill_type": "[Support Skill]",
        "skill_desc": "Brings the hand to the mouth and recites a spell. \nGains  (19.5%) SPD UP and (40%) ATK UP.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 1402
      },
      {
        "char_name": "Emily Simmons",
        "char_icon": "15_Emily",
        "skill_name": "Vital Check",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Checks the physical information of the specified target and grants a (45%) ATK UP and (27%) SPD UP.\nDuration: 2 turn(s)\nIf the target's HP is less than 40%, additionally grants Immortal. \nDuration: 1 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 1503
      },
      {
        "char_name": "Fuuma Tokiko",
        "char_icon": "28_Tokiko",
        "skill_name": "Evil Eye: Clairvoyance",
        "skill_type": "[Support Skill]",
        "skill_desc": "Uses Clairvoyance to grant a (45%) ATK UP to 1 ally.\nDuration: 2 turn(s)\nReduces the Cooldown of all affected allies' skills by -1 turn(s).\nIf the affected ally is an Agility type, additionally grants Debuff Block.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 2802
      },
      {
        "char_name": "[Combat Suit] Fuuma Amane",
        "char_icon": "34_Amane",
        "skill_name": "Fuuma's Combat Machine",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When the character is hit, gains (20%) ATK UP at a 45% chance.\nDuration: 2 turn(s)\nIf the character already has ATK UP, increases the ATK UP effect by a fixed 10% each time the character is hit at a 25% chance.",
        "scope": "Self",
        "source": "",
        "skill_id": 3404
      },
      {
        "char_name": "Kannazuki Sora",
        "char_icon": "43_Sora",
        "skill_name": "Short Burst Fire",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Uses a crossbow on wrist and attacks the enemy 3 times..\nGrants a (40%) ATK UP to the character before attack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 4301
      },
      {
        "char_name": "Fuuma Kotaro",
        "char_icon": "54_Kotaro",
        "skill_name": "Morale Motivation",
        "skill_type": "[Support Skill]",
        "skill_desc": "Demonstrates the power of the Fuuma Clan Master to raise ally spirits.\nGrants a (40%) ATK UP to ALL allies.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 5402
      },
      {
        "char_name": "Nisha Gaiza",
        "char_icon": "55_Gaiza",
        "skill_name": "Yasha Brutality: Cull the Weak",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants (40%) ATK UP to the character.\nDuration: 2 turn(s)\nWhen defeating an enemy, gains (3) Protective Shield. [Always-active passive effect regardless of cooldown]\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 5502
      },
      {
        "char_name": "Saya NEO",
        "char_icon": "59_Sayaneo",
        "skill_name": "Playful Artificial Demon",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Gains an Extra Turn when defeating an enemy.\nGains (40%) ATK UP when defeating an enemy.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 5904
      },
      {
        "char_name": "Touge Kinki",
        "char_icon": "60_Tougekinki",
        "skill_name": "Iron Demon Style: Metal Counter",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Scatters sword aura to attack the designated enemy, then performs 2 additional attacks. Each additional attack targets Random enemies.\nGains Counterattack after the attack.\nWhen defeating an enemy with this skill, gains (45%) ATK UP.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 6002
      },
      {
        "char_name": "Izumo Tsuru",
        "char_icon": "82_Tsuru",
        "skill_name": "The Grateful Tsuru",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start, if the character's HP is less than 70%, restores HP by 24% of Max. HP.\nOn Turn Start, if the character's HP is 70% or more, gains (45%) ATK UP.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 8203
      },
      {
        "char_name": "Makishima Ayame",
        "char_icon": "83_Ayame",
        "skill_name": "Ninja Art: Wind Reading",
        "skill_type": "[Support Skill]",
        "skill_desc": "Evaluates the situation for sniping.\nGains a (32.5%) CRIT Rate UP.\nDuration: 2 turn(s)\nIf the character does not have any Debuff, additionally gains (45%) ATK UP.\nDuration: 2 turn(s)\nIf Shinganji Kurenai is deployed, applies the same effect to Shinganji Kurenai.\nGains an Extra Turn.",
        "scope": "Self",
        "source": "",
        "skill_id": 8302
      },
      {
        "char_name": "Minasaki",
        "char_icon": "85_Minasaki",
        "skill_name": "GAN★BA★RE!!",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants (40%) ATK UP to ALL allies.\nDuration: 2 turn(s)\nGrants (35%) CRIT Rate UP to ALL allies. \nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 8503
      },
      {
        "char_name": "Torajiro",
        "char_icon": "87_Torajiro",
        "skill_name": "Beast Roar",
        "skill_type": "[Support Skill]",
        "skill_desc": "Roars out loud and grants (30%) ATK UP to ALL allies.\nDuration: 2 turn(s)\nReduces Debuff turn(s) on ALL allies by -1 turn(s).",
        "scope": "AoE",
        "source": "",
        "skill_id": 8702
      },
      {
        "char_name": "Wight",
        "char_icon": "98_Wight",
        "skill_name": "",
        "skill_type": "[Passive Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 9804
      },
      {
        "char_name": "Kugasa Hikage",
        "char_icon": "120_Hikage",
        "skill_name": "Wind Art: Spring Wind",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants (40%) ATK UP to ALL allies.\nDuration: 2 turn(s)\nRemoves 1 Random Debuff.",
        "scope": "AoE",
        "source": "",
        "skill_id": 12002
      },
      {
        "char_name": "Echizen Saya",
        "char_icon": "122_Saya",
        "skill_name": "Heaven Flipping",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Tosses the enemy up in the air with a greatsword and attacks 5 times.\nGains (40%) ATK UP before the attack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 12203
      },
      {
        "char_name": "Alectra",
        "char_icon": "124_Arectra",
        "skill_name": "Wrath of the Vengeful",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When defeated after being attacked by an enemy, she resurrects at 1% of Max. HP and enters an Immortal state.\nDuration: 1 turn(s)\nAdditionally gains (40%) ATK UP.\nDuration: 2 turn(s)\nIf Wrath of the Vengeful is on Cooldown, performs an Additional Attack on every attack.",
        "scope": "Self",
        "source": "",
        "skill_id": 12403
      },
      {
        "char_name": "Orc Marauder",
        "char_icon": "132_Orc3",
        "skill_name": "Claw Slash",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Gains (40%) ATK UP before the attack.\nSwings claws on both hands widely to attack the enemy.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 13201
      },
      {
        "char_name": "Orc Brawler",
        "char_icon": "134_Rakorcr2",
        "skill_name": "Loud Roar",
        "skill_type": "[Support Skill]",
        "skill_desc": "Roars and grants (45%) ATK UP and (45%) DEF UP to 1 ally.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 13402
      },
      {
        "char_name": "Horseman Warrior",
        "char_icon": "152_Horseman2",
        "skill_name": "Warrior's Cry",
        "skill_type": "[Support Skill]",
        "skill_desc": "Shouts a battle cry, granting a (30%) ATK UP to all allies.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 15202
      },
      {
        "char_name": "Cult Mage",
        "char_icon": "159_Paladin2",
        "skill_name": "Fanatical Elation",
        "skill_type": "[Support Skill]",
        "skill_desc": "Increases the morale of ALL allies and grants a (40%) ATK UP. \nDuration: 2 turn(s)\nAdditionally fills the Turn Gauge by (20%) for allies with 75% HP or more at a 100% chance.",
        "scope": "AoE",
        "source": "",
        "skill_id": 15902
      },
      {
        "char_name": "Drone Dog Type-R",
        "char_icon": "178_Drone2",
        "skill_name": "Side Bust",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Fires 2 missiles to the set target.\nGrants (40%) ATK UP to the character before the attack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 17801
      },
      {
        "char_name": "Turret Crawler",
        "char_icon": "187_Weabo2",
        "skill_name": "Dual Cannon",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Fires cannons from both gun ports.\nGains (40%) ATK UP before the attack. \nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 18701
      },
      {
        "char_name": "E-Soldier F-01",
        "char_icon": "189_Gsoldier1",
        "skill_name": "Photon Charged Shot",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Fires a powerful laser blast.\nWhen defeating an enemy with this skill, gains Extra Turn.\nGains (40%) ATK UP before the attack. \nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 18902
      },
      {
        "char_name": "E-Soldier M-01",
        "char_icon": "190_Gsoldier2",
        "skill_name": "Pulse Wall",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants Shield equal to 19.5% of the character's Max. HP and (40%) ATK UP.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 19002
      },
      {
        "char_name": "Zombie Butcher",
        "char_icon": "206_Zombie5",
        "skill_name": "Fury Rake",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Swings the extended tongue to attack 2 times, then delivers a thrusting combo to attack for a total of 3 time(s).\nGains (20%) ATK UP before the attack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 20601
      },
      {
        "char_name": "Necroid Conjurer",
        "char_icon": "210_Skeletonmage2",
        "skill_name": "Surging Malice",
        "skill_type": "[Support Skill]",
        "skill_desc": "Concentrates and grants ALL allies a (40%) ATK UP.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 21002
      },
      {
        "char_name": "Wraith",
        "char_icon": "213_Wraith",
        "skill_name": "Playful Dead",
        "skill_type": "[Support Skill]",
        "skill_desc": "Concentrates and grants ALL allies a (40%) ATK UP.\nIf the character is the only one remaining, resurrects 1 Random defeated ally at 30% HP.",
        "scope": "AoE",
        "source": "",
        "skill_id": 21303
      },
      {
        "char_name": "Ferocious Underworld Beast",
        "char_icon": "220_Hadesmon2",
        "skill_name": "",
        "skill_type": "[Support Skill]",
        "skill_desc": "",
        "scope": "AoE",
        "source": "",
        "skill_id": 22002
      },
      {
        "char_name": "Wendigo",
        "char_icon": "225_Wendigo",
        "skill_name": "",
        "skill_type": "[Support Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 22502
      },
      {
        "char_name": "Infested Soldier F-01",
        "char_icon": "231_Gsoldiermod2",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 23102
      },
      {
        "char_name": "[Gosha] Igawa Asagi",
        "char_icon": "234_Asagi",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "AoE",
        "source": "",
        "skill_id": 23403
      },
      {
        "char_name": "[Wedding] Igawa Asagi",
        "char_icon": "253_Asagi",
        "skill_name": "Almighty Bride",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If May Bride is on Cooldown, gains additional effects.\nWhen using Bouquet Toss, reduces the target's Turn Gauge an additional (15%) at a 15% chance.\nWhen using Petal's Miracle, additionally grants (60%) ATK UP to an ally with the highest ATK.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 25304
      },
      {
        "char_name": "[Dark Wave] Yatsu Murasaki",
        "char_icon": "288_Murasaki",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 28803
      },
      {
        "char_name": "Kaliya",
        "char_icon": "300_Kaliya",
        "skill_name": "Heir of the Snake Goddess",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If an ally is inflicted with 3 or more Poison, removes Poison from ALL allies. Additionally grants (40%) ATK UP, (55%) CRIT DMG UP, (40%) DEF UP to ALL allies at a fixed 50% chance.\nDuration: 2 turn(s) \nAll Buffs can be applied simultaneously.",
        "scope": "AoE",
        "source": "",
        "skill_id": 30004
      },
      ]
      },
      {
        "id": "crit-dmg-up",
        "name": "Critical Damage Up",
        "group": "Stat Buffs",
        "scope": "buff",
        "characters": [
      {
        "char_name": "Lina",
        "char_icon": "50_Lina",
        "skill_name": "Cherry Blossom Flash",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Swings the sword broadly to make a massive tornado to cut down the enemy 6 times.\nGains (50%) CRIT DMG UP before the attack.\nDuration: 2 turn(s)\nWhen a CRIT ATK is performed 3 or more times with this skill, decreases the target's Turn Gauge by (15%).",
        "scope": "Self",
        "source": "",
        "skill_id": 5003
      },
      {
        "char_name": "Snake Lady",
        "char_icon": "71_Snakelady",
        "skill_name": "<Blue Viper> Venom Smash",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Attacks the enemy with a powerful dropkick.\nGains (50%) CRIT DMG UP before the attack.\nDuration : 2 turn(s)\nDamage increases in proportion to target's current HP if the target has 2 or more Debuffs, including Poison.",
        "scope": "Self",
        "source": "S (Blue Viper)",
        "skill_id": 7113
      },
      {
        "char_name": "Taimanin Library",
        "char_icon": "81_Library",
        "skill_name": "<Photon Plasma Blade> ",
        "skill_type": "[Support Skill]",
        "skill_desc": "[In preparation]",
        "scope": "Self",
        "source": "S (Photon Plasma Blade)",
        "skill_id": 8112
      },
      {
        "char_name": "Rakshasa",
        "char_icon": "125_Sokushitsuki",
        "skill_name": "Demon Blade: Raging Wind",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Fires a powerful sword aura at the enemy consecutively 3 time(s).\nIf the character's HP is 70% or more before the attack, grants (30%) ACC UP to the character.\nDuration: 2 turn(s)\nIf the character's HP is less than 70% before the attack, grants (60%) CRIT DMG UP to the character.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 12502
      },
      {
        "char_name": "Oni Hunter",
        "char_icon": "143_Onielite2",
        "skill_name": "Bird Strike",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Fires a powerful arrow towards the enemy.\nGains (50%) CRIT DMG UP before the attack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 14301
      },
      {
        "char_name": "Phantasma",
        "char_icon": "194_Phantasma",
        "skill_name": "Succubus Spell",
        "skill_type": "[Support Skill]",
        "skill_desc": "With an alluring pose, infuses demonic power into 1 ally to grant (70%) CRIT DMG UP.\nDuration: 2 turn(s)\nIf the target has ATK UP, additionally grants (52.5%) CRIT Rate UP.\nDuration: 2 turn(s)\nIf Fuuma Kotaro is deployed, increases the duration of ALL allies' Buffs by 1 turn(s).",
        "scope": "AoE",
        "source": "",
        "skill_id": 19402
      },
      {
        "char_name": "[Gosha] Fuuma Tokiko",
        "char_icon": "243_Tokiko",
        "skill_name": "<Ninja Art Manual: Book of Gosha> Here's Your Flower Stamp",
        "skill_type": "[Support Skill]",
        "skill_desc": "Tokiko encourages the allies and grants (21%) Power-up to ALL allies.\nDuration: 2 turn(s)\nAdditionally grants (70%) CRIT DMG UP to Power-type allies.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Ninja Art Manual: Book of Gosha)",
        "skill_id": 24312
      },
      {
        "char_name": "[Gosha] Fuuma Tokiko",
        "char_icon": "243_Tokiko",
        "skill_name": "<Tactical Archive> Tokiko's Prediction",
        "skill_type": "[Passive Skill]",
        "skill_desc": "At the end of the character's turn, if 2 or more Power-type allies are deployed, fills the Turn Gauge by (20%) and grants (55%) CRIT DMG UP to 2 Random allies except for the character.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "S (Tactical Archive)",
        "skill_id": 24314
      },
      {
        "char_name": "[Holy Night] Igawa Asagi",
        "char_icon": "262_Asagi",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 26203
      },
      {
        "char_name": "[Frost God] Onisaki Kirara",
        "char_icon": "276_Kirara",
        "skill_name": "",
        "skill_type": "[Support Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 27602
      },
      {
        "char_name": "Kaliya",
        "char_icon": "300_Kaliya",
        "skill_name": "Heir of the Snake Goddess",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If an ally is inflicted with 3 or more Poison, removes Poison from ALL allies. Additionally grants (40%) ATK UP, (55%) CRIT DMG UP, (40%) DEF UP to ALL allies at a fixed 50% chance.\nDuration: 2 turn(s) \nAll Buffs can be applied simultaneously.",
        "scope": "AoE",
        "source": "",
        "skill_id": 30004
      },
      ]
      },
      {
        "id": "crit-rate-up",
        "name": "Critical Rate Up",
        "group": "Stat Buffs",
        "scope": "buff",
        "characters": [
      {
        "char_name": "Shinganji Kurenai",
        "char_icon": "21_Kurenai",
        "skill_name": "Wind Art: Wind Cloak",
        "skill_type": "[Support Skill]",
        "skill_desc": "Sharpens the swords using Wind Art.\nGains (32.5%) CRIT Rate UP. \nDuration: 2 turn(s)\nOn every CRIT ATK, the Turn Gauge fills by (20%) at a 25% chance.\n[Always-active passive effect regardless of cooldown]",
        "scope": "Self",
        "source": "",
        "skill_id": 2102
      },
      {
        "char_name": "Shinganji Kurenai",
        "char_icon": "21_Kurenai",
        "skill_name": "<Jet Black & Pitch Black> Wind Art: Wind Cloak",
        "skill_type": "[Support Skill]",
        "skill_desc": "Uses Wind Art to to sharpen the swords further.\nGains (32.5%) CRIT Rate UP.\nDuration: 2 turn(s)\nOn every CRIT ATK, decreases (15%) of the target's Turn Gauge at a 20% chance.\n[Always-active passive effect regardless of cooldown]",
        "scope": "Self",
        "source": "S (Jet Black & Pitch Black)",
        "skill_id": 2112
      },
      {
        "char_name": "[Combat Suit] Fuuma Amane",
        "char_icon": "34_Amane",
        "skill_name": "<Assault Tactical Dagger> Fuuma's Combat Machine",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When the character is hit, gains (20%) CRIT Rate UP at a 45% chance.\nDuration: 2 turn(s)\nIf the character already has CRIT Rate UP, increases the CRIT Rate UP effect by a fixed 10% each time the character is hit at a 25% chance.\nIf the character has a Shield, increases CRIT Rate by (7.5%).",
        "scope": "Self",
        "source": "S (Assault Tactical Dagger)",
        "skill_id": 3414
      },
      {
        "char_name": "Fuuma Aki",
        "char_icon": "45_Aki",
        "skill_name": "Chasing Slash",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Swings a sword left and right to attack the enemy 4 times.\nIf the target has Bleed, inflicts (22.5%) Weaken at a 50% chance on the Last Attack.\nDuration: 2 turn(s)\nGains (32.5%) CRIT Rate UP after the attack. \nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 4502
      },
      {
        "char_name": "Fuuma Aki",
        "char_icon": "45_Aki",
        "skill_name": "<Giren> Chasing Slash",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Swings a sword left and right to attack the enemy 4 times.\nIf the target has Bleed, inflicts (22.5%) Weaken at a 50% chance on the Last Attack.\nDuration: 2 turn(s)\nGains (32.5%) CRIT Rate UP before the attack. \nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Giren)",
        "skill_id": 4512
      },
      {
        "char_name": "Hiyama Kirin",
        "char_icon": "64_Kirin",
        "skill_name": "Kirin Slash",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Strikes down the enemy with a greatsword.\nGains (32.5%) CRIT Rate UP before the attack. \nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 6401
      },
      {
        "char_name": "Taimanin Library",
        "char_icon": "81_Library",
        "skill_name": "",
        "skill_type": "[Support Skill]",
        "skill_desc": "[In preparation]",
        "scope": "Self",
        "source": "",
        "skill_id": 8102
      },
      {
        "char_name": "Makishima Ayame",
        "char_icon": "83_Ayame",
        "skill_name": "Ninja Art: Wind Reading",
        "skill_type": "[Support Skill]",
        "skill_desc": "Evaluates the situation for sniping.\nGains a (32.5%) CRIT Rate UP.\nDuration: 2 turn(s)\nIf the character does not have any Debuff, additionally gains (45%) ATK UP.\nDuration: 2 turn(s)\nIf Shinganji Kurenai is deployed, applies the same effect to Shinganji Kurenai.\nGains an Extra Turn.",
        "scope": "Self",
        "source": "",
        "skill_id": 8302
      },
      {
        "char_name": "Minasaki",
        "char_icon": "85_Minasaki",
        "skill_name": "GAN★BA★RE!!",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants (40%) ATK UP to ALL allies.\nDuration: 2 turn(s)\nGrants (35%) CRIT Rate UP to ALL allies. \nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 8503
      },
      {
        "char_name": "Mirabell Bell",
        "char_icon": "103_Bell",
        "skill_name": "Captain of the \"Storm Cats\"",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start, gains (32.5%) CRIT Rate UP. \nDuration: 2 turn(s)\nWhen defeating an enemy after the attack, resets Cooldown for Captain of the \"Storm Cats\". [Always-active passive effect regardless of cooldown]",
        "scope": "Self",
        "source": "",
        "skill_id": 10304
      },
      {
        "char_name": "Crackle",
        "char_icon": "129_Crackle",
        "skill_name": "Stretchnya",
        "skill_type": "[Support Skill]",
        "skill_desc": "Stretches and warms up.\nGains (32.5%) CRIT Rate UP. \nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 12902
      },
      {
        "char_name": "Phantasma",
        "char_icon": "194_Phantasma",
        "skill_name": "Succubus Spell",
        "skill_type": "[Support Skill]",
        "skill_desc": "With an alluring pose, infuses demonic power into 1 ally to grant (70%) CRIT DMG UP.\nDuration: 2 turn(s)\nIf the target has ATK UP, additionally grants (52.5%) CRIT Rate UP.\nDuration: 2 turn(s)\nIf Fuuma Kotaro is deployed, increases the duration of ALL allies' Buffs by 1 turn(s).",
        "scope": "Target",
        "source": "",
        "skill_id": 19402
      },
      {
        "char_name": "[Gosha] Fuuma Tokiko",
        "char_icon": "243_Tokiko",
        "skill_name": "Here's Your Flower Stamp",
        "skill_type": "[Support Skill]",
        "skill_desc": "Tokiko raises morale and grants (21%) Power-up to ALL allies.\nDuration: 2 turn(s)\nAdditionally grants (40%) CRIT Rate UP to Power-type allies.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 24302
      },
      {
        "char_name": "[Wedding] Igawa Asagi",
        "char_icon": "253_Asagi",
        "skill_name": "May Bride",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Asagi offers the bouquet with a radiant smile to grant (35%) CRIT Rate UP to ALL allies.\nDuration: 2 turn(s)\nRevives fallen allies at 30% of their Max. HP.",
        "scope": "AoE",
        "source": "",
        "skill_id": 25303
      },
      {
        "char_name": "[Swimsuit] Kousaka Shizuru",
        "char_icon": "257_Shizuru",
        "skill_name": "Floral Allure",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Seduces ALL enemies with an alluring gesture.\nTargets hit are inflicted with Confusion at a 20% chance, and if the target is a Technique-Type, the chance becomes 35%.\nDuration: 1 turn(s)\nGrants (35%) CRIT Rate UP to ALL allies after the attack.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 25702
      },
      {
        "char_name": "[Frost God] Onisaki Kirara",
        "char_icon": "276_Kirara",
        "skill_name": "",
        "skill_type": "[Support Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 27602
      },
      {
        "char_name": "[Wandering Cyborg] Igawa Asagi",
        "char_icon": "277_Asagi",
        "skill_name": "",
        "skill_type": "[Passive Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 27704
      },
      {
        "char_name": "[School] Clone Asagi",
        "char_icon": "298_Asagi",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 29803
      },
      ]
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
            "char_name": "Narita Akina",
            "char_icon": "121_Akina",
            "skill_name": "<Utopia> Stone Art: Heavyweight",
            "skill_type": "[Support Skill]",
            "skill_desc": "Musters up strength and gains (40%) DEF UP.\nDuration: 2 turn(s)\nRestores 18% of Max. HP.\nTaunts 1 Random enemy at a 45% chance.",
            "scope": "Self",
            "source": "S (Utopia)",
            "skill_id": 12112
          },
          {
            "char_name": "Nanase Mai",
            "char_icon": "36_Mai",
            "skill_name": "<Origami Shuriken> Paper Spirit: Defense",
            "skill_type": "[Support Skill]",
            "skill_desc": "Protects the character and 1 ally with paper, granting (45%) DEF UP.\nDuration: 2 turn(s)\nRestores 31.5% of the ally’s Max. HP.\nIf the character has DEF UP on Turn Start, reduces the Cooldown of The Paper Spirit Taimanin by -1 turn(s). [Always-active passive effect regardless of cooldown]",
            "scope": "Self",
            "source": "S (Origami Shuriken)",
            "skill_id": 3612
          },
          {
            "char_name": "Kasahara Tatsumi",
            "char_icon": "107_Tatsumi",
            "skill_name": "<Narukami> Blooming Butterfly",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Quickly slashes the enemy 4 times.\nGrants (40%) DEF UP to ALL allies after the attack.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Narukami)",
            "skill_id": 10712
          },
          {
            "char_name": "Yuphie & Sophie",
            "char_icon": "58_Yuphiesophie",
            "skill_name": "<Aozora> The Invincible Twins!!",
            "skill_type": "[Support Skill]",
            "skill_desc": "Yuphie grants Sophie a (55%) DEF UP.\nDuration: 2 turn(s)\nAdditionally grants a Shield equal to 27% of Max. HP.\nDuration: 2 turn(s)\nGrants the same Buff to an ally with the highest ATK.",
            "scope": "Self",
            "source": "S (Aozora)",
            "skill_id": 5812
          },
      {
        "char_name": "Su Jinglei",
        "char_icon": "18_Jinglei",
        "skill_name": "Ryuurinkou",
        "skill_type": "[Support Skill]",
        "skill_desc": "Draws out the power of the dragon and gains (40%) DEF UP.\nDuration: 2 turn(s)\nTaunts 1 Random target among those who faced the dragon at a 45% chance.\nDuration: 2 turn(s)\nWhen Ryuurinkou is on Cooldown, gains Shield equal to 24% of Max. HP on the character's Turn Start. \nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 1802
      },
      {
        "char_name": "Nanase Mai",
        "char_icon": "36_Mai",
        "skill_name": "Paper Spirit: Defense",
        "skill_type": "[Support Skill]",
        "skill_desc": "Protects 1 ally with paper and grants a (45%) DEF UP.\nDuration: 2 turn(s)\nRestores 31.5% of the ally's Max. HP.\nIf the character has DEF UP on Turn Start, reduces Cooldown of The Paper Spirit Taimanin by -1 turn(s). [Always-active passive effect regardless of cooldown]",
        "scope": "AoE",
        "source": "",
        "skill_id": 3602
      },
      {
        "char_name": "Eleonor",
        "char_icon": "48_Eleonor",
        "skill_name": "Defensive Nectar",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Grants Debuff Block to ALL allies using the power of nature.\nDuration: 2 turn(s)\nAdditionally grants (45%) DEF UP if the allies other than the character with granted Debuff Block doesn't have any Debuff.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 4803
      },
      {
        "char_name": "Yuphie & Sophie",
        "char_icon": "58_Yuphiesophie",
        "skill_name": "The Invincible Twins!!",
        "skill_type": "[Support Skill]",
        "skill_desc": "Yuphie grants Sophie a (55%) DEF UP.\nDuration: 2 turn(s)\nAdditionally grants a Shield equal to 27% of Max. HP.\nDuration: 2 turn(s)\nWhen Yuphie's HP is 90% or more, grants the same Buff to an ally with the highest ATK.",
        "scope": "Self",
        "source": "",
        "skill_id": 5802
      },
      {
        "char_name": "Major",
        "char_icon": "63_Major",
        "skill_name": "Chance Maker",
        "skill_type": "[Support Skill]",
        "skill_desc": "Taunts ALL enemies at a  35% chance.\nDuration: 2 turn(s)\nThe character gains (40%) DEF UP.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 6302
      },
      {
        "char_name": "Elvira",
        "char_icon": "100_Elvira",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "[In preparation]",
        "scope": "Self",
        "source": "",
        "skill_id": 10002
      },
      {
        "char_name": "Kasahara Tatsumi",
        "char_icon": "107_Tatsumi",
        "skill_name": "Blooming Butterfly",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Draws quickly and slashes the enemy 4 times.\nIf Ameno-Ma-Hitotsu: Illusionary Butterfly is on Cooldown, grants (45%) DEF UP to ALL allies after the attack.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 10702
      },
      {
        "char_name": "Narita Akina",
        "char_icon": "121_Akina",
        "skill_name": "Stone Art: Heavyweight",
        "skill_type": "[Support Skill]",
        "skill_desc": "Musters up strength and gains (40%) DEF UP.\nDuration: 2 turn(s)\nIf the skill is on Cooldown, increases DMG by 3.5% of the target's Max. HP.",
        "scope": "Self",
        "source": "",
        "skill_id": 12102
      },
      {
        "char_name": "Orc Brawler",
        "char_icon": "134_Rakorcr2",
        "skill_name": "Loud Roar",
        "skill_type": "[Support Skill]",
        "skill_desc": "Roars and grants (45%) ATK UP and (45%) DEF UP to 1 ally.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 13402
      },
      {
        "char_name": "Oni Fighter",
        "char_icon": "140_Oni2",
        "skill_name": "Twin Arm Attack",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Clenches fists and strikes the enemy.\nGains a (40%) DEF UP before the attack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 14001
      },
      {
        "char_name": "Horseman Fighter",
        "char_icon": "151_Horseman1",
        "skill_name": "Fighter's Cry",
        "skill_type": "[Support Skill]",
        "skill_desc": "Shouts a battle cry, granting a (30%) DEF UP to all allies.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 15102
      },
      {
        "char_name": "Cold Sur",
        "char_icon": "173_Schill1",
        "skill_name": "Sur Armor",
        "skill_type": "[Support Skill]",
        "skill_desc": "Gains a (40%) DEF UP.\nDuration: 2 turn(s)\nGains Shield equal to 19.5% of the character's Max. HP.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 17302
      },
      {
        "char_name": "[Gosha] Mizuki Shiranui",
        "char_icon": "237_Shiranui",
        "skill_name": "Ryusuijin",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Erects a wall of water to grant (40%) DEF UP to the character.\nDuration: 2 turn(s)\nGrants (2) Protective Shields and (35%) Protect Ally to allies except for the character.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 23703
      },
      {
        "char_name": "[Gosha] Mizuki Shiranui",
        "char_icon": "237_Shiranui",
        "skill_name": "<Geometric Naginata> Ryusuijin",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Erects a wall of water to grant (40%) DEF UP to the character.\nDuration: 2 turn(s)\nGrants (5%) Healing Over Time.\nDuration: 3 turn(s)\nGrants (45%) Protect Ally to ALL allies.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Geometric Naginata)",
        "skill_id": 23713
      },
      {
        "char_name": "[Gosha] Kousaka Shizuru",
        "char_icon": "240_Shizuru",
        "skill_name": "Whip of Love",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Swings the whip widely to attack the enemy.\nGains (40%) DEF UP before the attack.\nDuration: 2 turn(s)\nDMG increases in proportion to the character's DEF.\nInflicts (-40%) DEF DOWN to the target at a 99% chance on the Last Attack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 24003
      },
      {
        "char_name": "[Wedding] Igawa Asagi",
        "char_icon": "253_Asagi",
        "skill_name": "<Lily Cascade> Petal's Miracle",
        "skill_type": "[Support Skill]",
        "skill_desc": "Throws a bouquet into the air to grant (40%) DEF UP to ALL allies except self.\nDuration: 2 turn(s)\nThen grants Counterattack to 1 ally with the highest ATK.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Lily Cascade)",
        "skill_id": 25312
      },
      {
        "char_name": "[Wedding] Nanase Mai",
        "char_icon": "255_Mai",
        "skill_name": "Lotus Mai",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Wraps herself in a giant paper flower for protection.\nGains (40%) DEF UP.\nDuration: 2 turn(s)\nGrants (45%) Protect Ally and (19.5%) Power-up to 1 selected ally.\nDuration: 2 turn(s)\nIf the target is an Agility or a Technique type, the efficacy of Protect Ally increases by a fixed 15%.",
        "scope": "Self",
        "source": "",
        "skill_id": 25503
      },
      {
        "char_name": "Kaliya",
        "char_icon": "300_Kaliya",
        "skill_name": "Heir of the Snake Goddess",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If an ally is inflicted with 3 or more Poison, removes Poison from ALL allies. Additionally grants (40%) ATK UP, (55%) CRIT DMG UP, (40%) DEF UP to ALL allies at a fixed 50% chance.\nDuration: 2 turn(s) \nAll Buffs can be applied simultaneously.",
        "scope": "AoE",
        "source": "",
        "skill_id": 30004
      },
      ]
      },
      {
        "id": "evd-up",
        "name": "Evasion Up",
        "group": "Stat Buffs",
        "scope": "buff",
        "characters": [
      {
        "char_name": "Shido Rinka",
        "char_icon": "9_Rinka",
        "skill_name": "Cliff Flower",
        "skill_type": "[Support Skill]",
        "skill_desc": "Poses to seduce the enemy and grants (19.5%) EVD UP to the character.\nDuration: 2 turn(s)\nWhen Cliff Flower is on Cooldown, evading an enemy attack grants a fixed chance of 55% to reduce the duration of 1 Random Buff the attacker has by 1 turn.",
        "scope": "Self",
        "source": "",
        "skill_id": 902
      },
      {
        "char_name": "Fuuma Hoensai",
        "char_icon": "111_Houensai",
        "skill_name": "Oil Art: Oil Bath",
        "skill_type": "[Support Skill]",
        "skill_desc": "Wears oil around the body and gains (19.5%) EVD UP.\nDuration: 2 turn(s)\nIf Oil Art: Oil Bath is on Cooldown, inflicts (-24%) SPD DOWN to the attacker when hit at a 25% chance.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 11102
      },
      {
        "char_name": "Ise Nodoka",
        "char_icon": "115_Nodoka",
        "skill_name": "Mirror Art: Clear Mirror, Still Water",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On the character's Turn Start, gains (27%) EVD UP.\nDuration: 2 turn(s)\nOn the character's Turn Start, gains (2) Protective Shield.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 11503
      },
      {
        "char_name": "[Gosha] Aishu Hebiko",
        "char_icon": "245_Hebiko",
        "skill_name": "Hebiko's Octopus Ink",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Shoots ink to attack the target.\nIf there are 2 or more Power type allies on the squad, grants (24%) EVD UP to ALL allies after the attack.\nDuration: 2 turn(s)\nIf there are 3 or more Power type allies on the squad, grants Debuff Block to ALL allies after the attack.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 24503
      },
      ]
      },
      {
        "id": "spd-up",
        "name": "SPD Up",
        "group": "Stat Buffs",
        "scope": "buff",
        "characters": [

          {
            "char_name": "Hoshino Mitsuki",
            "char_icon": "37_Mitsuki",
            "skill_name": "<Nikko> Wind Art: Rampaging Gust",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Makes a large tornado and sends it toward ALL enemies.\nPerforms a Shield Penetrate attack.\nWhen defeating an enemy with this skill, fills (20%) of the Turn Gauge at a 95% chance for ALL allies.\nSteals the SPD UP Buff of ALL enemies before the attack.\nDamage increases in proportion to SPD.",
            "scope": "AoE",
            "source": "S (Nikko)",
            "skill_id": 3713
          },
          {
            "char_name": "Momochi Nagi",
            "char_icon": "52_Nagi",
            "skill_name": "<Yamidachi Murasame & Kamikirimaru> Hurricane Taimanin",
            "skill_type": "[Passive Skill]",
            "skill_desc": "On Turn Start, grants a (19.5%) SPD UP.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Yamidachi Murasame & Kamikirimaru)",
            "skill_id": 5214
          },
          {
            "char_name": "Akiyama Rinko",
            "char_icon": "11_Rinko",
            "skill_name": "<Suijingiri> Meteor Shower",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Summons a meteorite to attack ALL enemies.\nIf the target has SPD DOWN, increases the efficacy of SPD DOWN by a fixed -10%.\nGains (19.5%) SPD UP before the attack.\nDuration: 2 turn(s)\nIf the target is the only one remaining, DMG of all attacks increases by (55%). [Always-active passive effect regardless of cooldown]",
            "scope": "AoE",
            "source": "S (Suijingiri)",
            "skill_id": 1113
          },
          {
            "char_name": "Fuuma Tokiko",
            "char_icon": "28_Tokiko",
            "skill_name": "<Myoren> Evil Eye: Clairvoyance",
            "skill_type": "[Support Skill]",
            "skill_desc": "Uses Clairvoyance to grant a (27%) SPD UP to 1 ally and herself.\nDuration: 2 turn(s)\nReduces the Cooldown of all affected allies' skills by -1 turn(s).\nIf the affected ally is an Agility type, additionally grants Debuff Block.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Myoren)",
            "skill_id": 2812
          },
      {
        "char_name": "Igawa Asagi",
        "char_icon": "1_Asagi",
        "skill_name": "Koujin Zanka",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Moves as fast as light and instantly attacks the enemy 6 times.\nDamage increases in proportion to SPD.\nGains a (40%) ATK UP and (19.5%) before the attack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 103
      },
      {
        "char_name": "Akiyama Rinko",
        "char_icon": "11_Rinko",
        "skill_name": "Meteor Shower",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Summons a meteorite to attack ALL enemies.\nIf the target has SPD DOWN, increases the efficacy of SPD DOWN by 50%.\nWhen defeating an enemy, gains Extra Turn and additionally gains (24%) SPD UP.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 1103
      },
      {
        "char_name": "Kichi Azusa",
        "char_icon": "14_Azusa",
        "skill_name": "Shikigami: Bodyguard",
        "skill_type": "[Support Skill]",
        "skill_desc": "Brings the hand to the mouth and recites a spell. \nGains  (19.5%) SPD UP and (40%) ATK UP.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 1402
      },
      {
        "char_name": "Emily Simmons",
        "char_icon": "15_Emily",
        "skill_name": "Vital Check",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Checks the physical information of the specified target and grants a (45%) ATK UP and (27%) SPD UP.\nDuration: 2 turn(s)\nIf the target's HP is less than 40%, additionally grants Immortal. \nDuration: 1 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 1503
      },
      {
        "char_name": "Kuonji R. Spica",
        "char_icon": "70_Spica",
        "skill_name": "Water Art: Bubble",
        "skill_type": "[Support Skill]",
        "skill_desc": "By using Water Art, grants (21%) SPD UP to ALL allies. Duration: 2 turn(s) If the target is a Power type, additionally grants Shield equal to 24% of the target's Max. HP. Duration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 7003
      },
      {
        "char_name": "Taimanin Library",
        "char_icon": "81_Library",
        "skill_name": "<Photon Plasma Blade> ",
        "skill_type": "[Support Skill]",
        "skill_desc": "[In preparation]",
        "scope": "Self",
        "source": "S (Photon Plasma Blade)",
        "skill_id": 8112
      },
      {
        "char_name": "Watarase Tsumugi",
        "char_icon": "116_Tsumugi",
        "skill_name": "Warming Up",
        "skill_type": "[Support Skill]",
        "skill_desc": "Warms up and gains (19.5%) SPD UP.\nDuration: 2 turn(s)\nIf Warming Up is on Cooldown, increases CRIT Rate by 4.5% of SPD.",
        "scope": "Self",
        "source": "",
        "skill_id": 11602
      },
      {
        "char_name": "Wizard (Black)",
        "char_icon": "145_Magician2",
        "skill_name": "Eldritch Magic",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Summons the Eye of the Otherworld and attacks ALL enemies.\nGains (27%) SPD UP after the attack.\nDuration: 2 turn(s)\nIf the character has SPD UP, DMG increases by 30%.",
        "scope": "Self",
        "source": "",
        "skill_id": 14501
      },
      {
        "char_name": "Deep Sur",
        "char_icon": "174_Schill2",
        "skill_name": "Sur Splash",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Bounces out of the ground, attacking the enemy.\nGains a (19.5%) SPD UP.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 17402
      },
      {
        "char_name": "[Gosha] Igawa Asagi",
        "char_icon": "234_Asagi",
        "skill_name": "",
        "skill_type": "[Support Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 23402
      },
      {
        "char_name": "[Gosha] Igawa Sakura",
        "char_icon": "235_Sakura",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 23503
      },
      {
        "char_name": "[Gosha] Fuuma Tokiko",
        "char_icon": "243_Tokiko",
        "skill_name": "This is the Formula of Victory!",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Declare victory on a blackboard.\nInflicts Buff Disabled to ALL enemies at a 99% chance.\nDuration: 2 turn(s)\nGrants (27%) SPD UP to an ally with the highest ATK.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 24303
      },
      {
        "char_name": "[Youthful Almighty] Igawa Asagi",
        "char_icon": "271_Asagi",
        "skill_name": "Young Almighty",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When a CRIT ATK lands on the Last Attack, fills the character's Turn Gauge by 20% at a fixed 50% chance.\nWhen hit by a target with higher SPD than the character, gains (24%) SPD UP.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 27104
      },
      {
        "char_name": "[Lightning Onyx] Mizuki Yukikaze",
        "char_icon": "279_Yukikaze",
        "skill_name": "Volt Spin",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 27902
      },
      {
        "char_name": "[Stealth Armor] Fuuma Saika",
        "char_icon": "282_Saika",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Moves at blinding speed to attack 4 time(s).\nConsumes -10% of the character's HP to go into Stealth mode and gain (19.5%) SPD UP after the attack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Active Cloaking Leg)",
        "skill_id": 28212
      },
      {
        "char_name": "[Heavenly Moon Flower] Akiyama Rinko",
        "char_icon": "292_Rinko",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 29203
      },
      {
        "char_name": "[Tempest Legionnaire] Koukawa Asuka",
        "char_icon": "293_Asuka",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 29301
      },
      {
        "char_name": "[Lightning God] Mizuki Yukikaze",
        "char_icon": "299_Yukikaze",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 29903
      },
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
        "characters": [
      {
        "char_name": "Onisaki Kirara",
        "char_icon": "24_Kirara",
        "skill_name": "<Yukibana> Frost Shield",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Gathers cold air into a single point, grants ALL allies (2) Protective Shields.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Yukibana)",
        "skill_id": 2413
      },
      {
        "char_name": "Ingrid",
        "char_icon": "25_Ingrid",
        "skill_name": "Black Flame Hell Knight",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When attacking an enemy with Weaken, performs a (15%) DEF Penetrate attack.\nWhen attacking an enemy with Burn, inflicts a (75%) Heal Reduction at a 25% chance.\nDuration: 2 turn(s)\nIf not attacked during the enemy's turn or is hit by an all-target attack during the enemy's turn, grants (1) Protective Shield to 1 ally with the highest ATK, excluding self.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 2504
      },
      {
        "char_name": "Nanase Mai",
        "char_icon": "36_Mai",
        "skill_name": "Paper Spirit: Absolute Barrier",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Builds a giant paper wall and grants (2) Protective Shield to ALL allies.\nDuration: 2 turn(s)\nGrants 3 to allies whose HP is less than 50%.",
        "scope": "AoE",
        "source": "",
        "skill_id": 3603
      },
      {
        "char_name": "Nanase Mai",
        "char_icon": "36_Mai",
        "skill_name": "<Origami Dagger> Paper Spirit: Absolute Barrier",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Builds a giant paper wall and grants (2) Protective Shields to ALL allies.\nDuration: 2 turn(s)\nGrants (7%)  Healing Over Time to allies whose HP is less than 50%.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Origami Dagger)",
        "skill_id": 3613
      },
      {
        "char_name": "Amamiya Shisui",
        "char_icon": "42_Shisui",
        "skill_name": "Guardian's Touchdown",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If HP is less than 50%, grants (2) Protective Shield to the character when hit.\nDuration: 2 turn(s)\nIf the enemy uses a Debuff Block skill, decreases the duration of ALL enemies' Debuff Block Buff by -1 turn(s).\n[Always-active passive effect regardless of cooldown]",
        "scope": "Self",
        "source": "",
        "skill_id": 4204
      },
      {
        "char_name": "Amamiya Shisui",
        "char_icon": "42_Shisui",
        "skill_name": "<Pussycat Headphones> Guardian's Touchdown",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If HP is less than 50%, grants (3) Protective Shield to the character when hit.\nDuration: 2 turn(s)\nIf the enemy uses a Debuff Block skill, decreases the duration of ALL enemies' Debuff Block Buff by -1 turn(s).\n[Always-active passive effect regardless of cooldown]",
        "scope": "Self",
        "source": "S (Pussycat Headphones)",
        "skill_id": 4214
      },
      {
        "char_name": "Nisha Gaiza",
        "char_icon": "55_Gaiza",
        "skill_name": "Yasha Brutality: Cull the Weak",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants (40%) ATK UP to the character.\nDuration: 2 turn(s)\nWhen defeating an enemy, gains (3) Protective Shield. [Always-active passive effect regardless of cooldown]\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 5502
      },
      {
        "char_name": "Edwin Black",
        "char_icon": "66_Black",
        "skill_name": "Day Walker",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start, gains (2) Protective Shield.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 6604
      },
      {
        "char_name": "Uehara Shikanosuke",
        "char_icon": "80_Shikanosuke",
        "skill_name": "Elec Art: Lightning Tackle",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Charges at the enemy with electricity coursing through the character.\nReduces the Turn Gauge of the target hit by (15%) at a 65% chance.\nGains (2) Protective Shield after the attack.\nDuration: 2 turn(s)\nIf Uehara Rin is deployed, applies the same effect to ALL allies.\nDuration : 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 8003
      },
      {
        "char_name": "Uehara Shikanosuke",
        "char_icon": "80_Shikanosuke",
        "skill_name": "<Snowflake> Elec Art: Lightning Tackle",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Charges at the enemy with electricity coursing through the character.\nInflicts that target with Electrocute at a 30% chance.\nDuration: 2 turn(s)\nGains (2) Protective Shield after the attack.\nDuration: 2 turn(s)\nIf Uehara Rin is deployed, applies the same effect to ALL allies.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Snowflake)",
        "skill_id": 8013
      },
      {
        "char_name": "Minasaki",
        "char_icon": "85_Minasaki",
        "skill_name": "<Nightsky Ribbon> GAN★BA★RE!!",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants ALL allies (2) Protective Shield(s).\nDuration: 2 turn(s)\nGrants ALL allies (5.5%) Healing Over Time.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Nightsky Ribbon)",
        "skill_id": 8513
      },
      {
        "char_name": "Merriam",
        "char_icon": "104_Miriam",
        "skill_name": "<Familiars Carrot & Eggplant> Cure Spell",
        "skill_type": "[Support Skill]",
        "skill_desc": "Restores HP of a targeted ally by 22.5% of their Max. HP.\nGrants (2) Protective Shield.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "S (Familiars Carrot & Eggplant)",
        "skill_id": 10413
      },
      {
        "char_name": "Ise Nodoka",
        "char_icon": "115_Nodoka",
        "skill_name": "Mirror Art: Clear Mirror, Still Water",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On the character's Turn Start, gains (27%) EVD UP.\nDuration: 2 turn(s)\nOn the character's Turn Start, gains (2) Protective Shield.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 11503
      },
      {
        "char_name": "Orc Warlord",
        "char_icon": "138_Orcboss",
        "skill_name": "Warlord's Holler",
        "skill_type": "[Support Skill]",
        "skill_desc": "Roars and grants (2) Protective Shield to ALL allies.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 13803
      },
      {
        "char_name": "[Gosha] Mizuki Shiranui",
        "char_icon": "237_Shiranui",
        "skill_name": "Ryusuijin",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Erects a wall of water to grant (40%) DEF UP to the character.\nDuration: 2 turn(s)\nGrants (2) Protective Shields and (35%) Protect Ally to allies except for the character.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 23703
      },
      {
        "char_name": "[Gosha] Shinohara Mari",
        "char_icon": "248_Mari",
        "skill_name": "Everyone's Rep",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Grants (1) Unremovable Damage Block to ALL allies if one of the allies is defeated.",
        "scope": "AoE",
        "source": "",
        "skill_id": 24804
      },
      {
        "char_name": "[Youthful Immortal] Yatsu Murasaki",
        "char_icon": "269_Murasaki",
        "skill_name": "Young Immortal",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When defeated after being attacked by an enemy, resurrects at 35% of Max. HP.\nWhen resurrected, gains (1) Protective Shield.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 26904
      },
      {
        "char_name": "[Oni] Akiyama Rinko",
        "char_icon": "275_Rinko",
        "skill_name": "",
        "skill_type": "[Passive Skill]",
        "skill_desc": "",
        "scope": "AoE",
        "source": "",
        "skill_id": 27504
      },
      {
        "char_name": "[Oni] Akiyama Rinko",
        "char_icon": "275_Rinko",
        "skill_name": "",
        "skill_type": "[Passive Skill]",
        "skill_desc": "",
        "scope": "AoE",
        "source": "S (Neon Dimension)",
        "skill_id": 27514
      },
      {
        "char_name": "[Dark Wave] Yatsu Murasaki",
        "char_icon": "288_Murasaki",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 28802
      },
      {
        "char_name": "[Phantom Witch] Mizuki Shiranui",
        "char_icon": "290_Shiranui",
        "skill_name": "",
        "skill_type": "[Support Skill]",
        "skill_desc": "",
        "scope": "AoE",
        "source": "",
        "skill_id": 29002
      },
      {
        "char_name": "[Task Force G] Clone Asagi",
        "char_icon": "297_Asagi",
        "skill_name": "",
        "skill_type": "[Passive Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 29704
      },
      {
        "char_name": "Kaliya",
        "char_icon": "300_Kaliya",
        "skill_name": "<Spike Collar> Poisonous Tail",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Swings the tail to attack ALL enemies.\nIf the target hit is afflicted with Poison, grants (2) Protective Shield to ALL allies.\nDuration: 2 turn(s)\nIf ALL enemies have 4 or more Poison when attacking, grants (3) Protective Shield to ALL allies.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Spike Collar)",
        "skill_id": 30012
      },
      ]
      },
      {
        "id": "damage-reflect",
        "name": "Damage Reflect",
        "group": "Protection",
        "scope": "buff",
        "characters": [

          {
            "char_name": "Emily Simmons",
            "char_icon": "15_Emily",
            "skill_name": "<Nebula Type 2> Vital Check",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Checks the physical information of the specified target and grants a (13%) Damage Reflect\nDuration: 2 turn(s)\nAdditionally grants Immortal.\nDuration: 1 turn(s)",
            "scope": "Self",
            "source": "S (Nebula Type 2)",
            "skill_id": 1513
          },
          {
            "char_name": "Major",
            "char_icon": "63_Major",
            "skill_name": "<Moon Shot> Chance Maker",
            "skill_type": "[Support Skill]",
            "skill_desc": "Taunts ALL enemies.\nDuration: 2 turn(s)\nThe character gains (10%) Damage Reflect.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Moon Shot)",
            "skill_id": 6312
          },
      {
        "char_name": "Fuuma Amane",
        "char_icon": "6_Amane",
        "skill_name": "Dotenrin: Heavenly Reverse",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Smites the ground, attacking ALL enemies 1 times.\nGrants (7.5%) Damage Reflect to ALL allies.\nDuration: 2 turn(s)\nIf the character's HP is less than 75%, the effect increases to 9%.",
        "scope": "AoE",
        "source": "",
        "skill_id": 603
      },
      {
        "char_name": "Kousaka Shizuru",
        "char_icon": "29_Shizuru",
        "skill_name": "Healing Petals",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants (13%) Damage Reflect and (7%) Healing Over Time to 1 ally.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 2902
      },
      {
        "char_name": "[Combat Suit] Fuuma Amane",
        "char_icon": "34_Amane",
        "skill_name": "<Grid Edge Blade> Fuuma Martial Art: Shatter",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks the enemy 4 times with a dagger and then a laser from the left hand.\nInflicts (-40%) DEF DOWN before the attack.\nDuration: 2 turn(s)\nGains (10%) Damage Reflect after the attack. \nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Grid Edge Blade)",
        "skill_id": 3412
      },
      {
        "char_name": "Hiiragi Fuyumi",
        "char_icon": "39_Fuyumi",
        "skill_name": "Reorganize",
        "skill_type": "[Support Skill]",
        "skill_desc": "Assumes a battle ready stance and gains (5%) Healing Over Time and (10%) Damage Reflect.\nDuration: 3 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 3902
      },
      {
        "char_name": "Anje",
        "char_icon": "84_Anje",
        "skill_name": "An Innocent Girl",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start, if the character's HP is 70% or more, gains (12%) Damage Reflect.\nDuration: 2 turn(s)\nOn Turn Start, gains Counterattack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 8402
      },
      {
        "char_name": "Kaji Tetsuji",
        "char_icon": "109_Tetsuji",
        "skill_name": "",
        "skill_type": "[Support Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 10902
      },
      {
        "char_name": "Savage Gargoyle",
        "char_icon": "148_Gargoyle3",
        "skill_name": "Gargoyle Missile",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Attacks the enemy by firing a magical bullet from the mouth.\nGrants (10%) Damage Reflect to the character if the target is hit.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 14801
      },
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
            "skill_name": "<Tear of Rusalka> Defensive Nectar",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Grants Debuff Block to ALL allies using the power of nature.\nDuration: 2 turn(s)\nAdditionally grants (45%) ATK UP if the allies other than the character with granted Debuff Block doesn't have any Debuff.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Tear of Rusalka)",
            "skill_id": 4813
          },
          {
            "char_name": "Fuuma Tokiko",
            "char_icon": "28_Tokiko",
            "skill_name": "<Myoren> Evil Eye: Clairvoyance",
            "skill_type": "[Support Skill]",
            "skill_desc": "Uses Clairvoyance to grant a (27%) SPD UP to 1 ally and herself.\nDuration: 2 turn(s)\nReduces the Cooldown of all affected allies' skills by -1 turn(s).\nIf the affected ally is an Agility type, additionally grants Debuff Block.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Myoren)",
            "skill_id": 2812
          },
      {
        "char_name": "Mizuki Shiranui",
        "char_icon": "13_Shiranui",
        "skill_name": "Water Art: Genejin",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Summons a water clone and grants ALL allies a Shield equal to (21%) of allies' Max. HP.\nDuration: 2 turn(s)\nGrants Debuff Block to ALL allies.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 1303
      },
      {
        "char_name": "Fuuma Tokiko",
        "char_icon": "28_Tokiko",
        "skill_name": "Evil Eye: Clairvoyance",
        "skill_type": "[Support Skill]",
        "skill_desc": "Uses Clairvoyance to grant a (45%) ATK UP to 1 ally.\nDuration: 2 turn(s)\nReduces the Cooldown of all affected allies' skills by -1 turn(s).\nIf the affected ally is an Agility type, additionally grants Debuff Block.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 2802
      },
      {
        "char_name": "Fuuma Tokiko",
        "char_icon": "28_Tokiko",
        "skill_name": "<Sagiri> Evil Eye: Clairvoyance",
        "skill_type": "[Support Skill]",
        "skill_desc": "Uses Clairvoyance to grant a (45%) ATK UP to 1 ally.\nDuration: 2 turn(s)\nReduces the Cooldown of all affected allies' skills by -1 turn(s) and additionally grants Debuff Block.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "S (Sagiri)",
        "skill_id": 2822
      },
      {
        "char_name": "Eleonor",
        "char_icon": "48_Eleonor",
        "skill_name": "Defensive Nectar",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Grants Debuff Block to ALL allies using the power of nature.\nDuration: 2 turn(s)\nAdditionally grants (45%) DEF UP if the allies other than the character with granted Debuff Block doesn't have any Debuff.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 4803
      },
      {
        "char_name": "[Gosha] Igawa Asagi",
        "char_icon": "234_Asagi",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 23403
      },
      {
        "char_name": "[Gosha] Aishu Hebiko",
        "char_icon": "245_Hebiko",
        "skill_name": "Hebiko's Octopus Ink",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Shoots ink to attack the target.\nIf there are 2 or more Power type allies on the squad, grants (24%) EVD UP to ALL allies after the attack.\nDuration: 2 turn(s)\nIf there are 3 or more Power type allies on the squad, grants Debuff Block to ALL allies after the attack.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 24503
      },
      {
        "char_name": "[Youthful Rabid Dog] Fuuma Amane",
        "char_icon": "270_Amane",
        "skill_name": "",
        "skill_type": "[Support Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 27002
      },
      {
        "char_name": "[School] Clone Asagi",
        "char_icon": "298_Asagi",
        "skill_name": "",
        "skill_type": "[Support Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 29802
      },
      {
        "char_name": "[Psycho Kaiser] Renee",
        "char_icon": "303_Rene",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "AoE",
        "source": "",
        "skill_id": 30303
      },
      ]
      },
      {
        "id": "immortal",
        "name": "Immortal",
        "group": "Protection",
        "scope": "buff",
        "characters": [

          {
            "char_name": "Alectra",
            "char_icon": "124_Arectra",
            "skill_name": "<Tisiphone> Wrath of the Vengeful",
            "skill_type": "[Passive Skill]",
            "skill_desc": "When defeated after being attacked by an enemy, she resurrects at 1% of Max. HP and enters an Immortal state.\nDuration: 1 turn(s)\nAdditionally gains (60%) ATK UP.\nDuration: 2 turn(s)\nIf Wrath of the Vengeful is on Cooldown, performs an Additional Attack on every attack.",
            "scope": "Self",
            "source": "S (Tisiphone)",
            "skill_id": 12413
          },
          {
            "char_name": "Emily Simmons",
            "char_icon": "15_Emily",
            "skill_name": "<Nebula Type 2> Vital Check",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Checks the physical information of the specified target and grants a (13%) Damage Reflect\nDuration: 2 turn(s)\nAdditionally grants Immortal.\nDuration: 1 turn(s)",
            "scope": "Self",
            "source": "S (Nebula Type 2)",
            "skill_id": 1513
          },
          {
            "char_name": "Felicia",
            "char_icon": "30_Felicia",
            "skill_name": "<Soul Eraser> Immortal Hunting",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Strikes an enemy with a scythe.\nWhen the target has 3 or more Debuffs, and the character's HP is less than 30%, attacking an enemy deals Instant Death at a fixed chance of 75%.\nIncreases the duration of all Buffs by 1 turn after the attack.\nSteals Immortal from the enemy before the attack.",
            "scope": "AoE",
            "source": "S (Soul Eraser)",
            "skill_id": 3013
          },
          {
            "char_name": "Yatsu Kuro",
            "char_icon": "4_Kuro",
            "skill_name": "<Sword Breaker> CQC-Double Attack",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Runs toward the enemy with a dagger and attacks 2 times.\nReduces Cooldown of Awakened Immortal by -1 turn(s) after the attack.",
            "scope": "Self",
            "source": "S (Sword Breaker)",
            "skill_id": 411
          },
          {
            "char_name": "Yatsu Murasaki",
            "char_icon": "19_Murasaki",
            "skill_name": "<Killing Spree> Awakened Immortal",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Murasaki doesn't go down easily.\nWhen defeated after being attacked by an enemy, she resurrects at 30% of Max. HP and enters an Immortal state.\nDuration: 1 turn(s)\nWhen an enemy uses a skill that grants ATK UP Buff, Taunts 2 enemies with the highest ATK.\n[Always-active passive effect regardless of cooldown]\nDuration: 1 turn(s)",
            "scope": "Self",
            "source": "S (Killing Spree)",
            "skill_id": 1914
          },
      {
        "char_name": "Yatsu Kuro",
        "char_icon": "4_Kuro",
        "skill_name": "Awakened Immortal",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When the character's HP is less than 30%, gains Immortal when hit.\nDuration: 1 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 403
      },
      {
        "char_name": "Emily Simmons",
        "char_icon": "15_Emily",
        "skill_name": "Vital Check",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Checks the physical information of the specified target and grants a (45%) ATK UP and (27%) SPD UP.\nDuration: 2 turn(s)\nIf the target's HP is less than 40%, additionally grants Immortal. \nDuration: 1 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 1503
      },
      {
        "char_name": "Yatsu Murasaki",
        "char_icon": "19_Murasaki",
        "skill_name": "Awakened Immortal",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Murasaki doesn't go down easily.\nWhen defeated after being attacked by an enemy, she resurrects at 5% of Max. HP and enters an Immortal state.\nDuration: 1 turn(s)\nWhen an enemy uses a skill that grants ATK UP Buff, Taunts 2 enemies with the highest ATK.\n[Always-active passive effect regardless of cooldown]\nDuration: 1 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 1904
      },
      {
        "char_name": "Alectra",
        "char_icon": "124_Arectra",
        "skill_name": "Wrath of the Vengeful",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When defeated after being attacked by an enemy, she resurrects at 1% of Max. HP and enters an Immortal state.\nDuration: 1 turn(s)\nAdditionally gains (40%) ATK UP.\nDuration: 2 turn(s)\nIf Wrath of the Vengeful is on Cooldown, performs an Additional Attack on every attack.",
        "scope": "Self",
        "source": "",
        "skill_id": 12403
      },
      {
        "char_name": "Dullahan",
        "char_icon": "212_Dullahan",
        "skill_name": "Revenant Knight",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When an ally is defeated, resurrects 1 Random defeated ally with 1% of HP and grants Immortal.\nDuration: 1 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 21203
      },
      {
        "char_name": "[Gosha] Fuuma Kotaro",
        "char_icon": "242_Kotaro",
        "skill_name": "",
        "skill_type": "[Support Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 24202
      },
      {
        "char_name": "[Swimsuit] Yuri Hisui",
        "char_icon": "256_Hisui",
        "skill_name": "Eclipse Meld: Dharma",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If the character has the Counterattack Buff, increases DMG by (10%). [Always-active passive effect regardless of cooldown]\nIf the character is defeated by a direct attack from an enemy, revives with 5% of the Max. HP, then becomes Immortal.\nDuration: 1 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 25604
      },
      {
        "char_name": "[Demon Slayer] Igawa Asagi",
        "char_icon": "265_Asagi",
        "skill_name": "",
        "skill_type": "[Support Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 26502
      },
      {
        "char_name": "[Youthful Rabid Dog] Fuuma Amane",
        "char_icon": "270_Amane",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 27003
      },
      {
        "char_name": "[Wraith Spirit] Yatsu Murasaki",
        "char_icon": "289_Murasaki",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 28903
      },
      ]
      },
      {
        "id": "strengthen",
        "name": "Power-up",
        "group": "Protection",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Kichi Azusa",
            "char_icon": "14_Azusa",
            "skill_name": "<Rasetsumaru> Shikigami: Bodyguard",
            "skill_type": "[Support Skill]",
            "skill_desc": "Brings the hand to the mouth and recites a spell, gains (5%) Healing Over Time and (19.5%) Power-up.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Rasetsumaru)",
            "skill_id": 1412
          },
          {
            "char_name": "Rakshasa",
            "char_icon": "125_Sokushitsuki",
            "skill_name": "<Minagoroshi> Raging Wind, Clear Moon",
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
            "char_name": "Su Jinglei",
            "char_icon": "18_Jinglei",
            "skill_name": "<Demolisher Fist> Taimanin Art: Fist",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Delivers 3 powerful punches at the enemy. DMG increases as DEF increases.\nGrants 45% Protect Ally to the ally with the lowest HP on Last Attack.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Demolisher Fist)",
            "skill_id": 1811
          },
          {
            "char_name": "Clear Lovell",
            "char_icon": "86_Robel",
            "skill_name": "<Tomurai & Requiem> Type: Hero",
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
            "skill_name": "<Nightsky Ribbon> GAN★BA★RE!!",
            "skill_type": "[Support Skill]",
            "skill_desc": "Grants ALL allies (2) Protective Shield(s).\nDuration: 2 turn(s)\nGrants ALL allies (5.5%) Healing Over Time.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Nightsky Ribbon)",
            "skill_id": 8513
          },
          {
            "char_name": "Merriam",
            "char_icon": "104_Miriam",
            "skill_name": "<Familiars Carrot & Eggplant> Cure Spell",
            "skill_type": "[Support Skill]",
            "skill_desc": "Restores HP of a targeted ally by 22.5% of their Max. HP.\nGrants (2) Protective Shield.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Familiars Carrot & Eggplant)",
            "skill_id": 10413
          },
          {
            "char_name": "Uehara Shikanosuke",
            "char_icon": "80_Shikanosuke",
            "skill_name": "<Snowflake> Elec Art: Lightning Tackle",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Charges at the enemy with electricity coursing through the character.\nInflicts that target with Electrocute at a 30% chance.\nDuration: 2 turn(s)\nGains (2) Protective Shield after the attack.\nDuration: 2 turn(s)\nIf Uehara Rin is deployed, applies the same effect to ALL allies.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Snowflake)",
            "skill_id": 8013
          },
          {
            "char_name": "Amamiya Shisui",
            "char_icon": "42_Shisui",
            "skill_name": "<Pussycat Headphones> Guardian's Touchdown",
            "skill_type": "[Passive Skill]",
            "skill_desc": "If HP is less than 50%, grants (3) Protective Shield to the character when hit.\nDuration: 2 turn(s)\nIf the enemy uses a Debuff Block skill, decreases the duration of ALL enemies' Debuff Block Buff by -1 turn(s).\n[Always-active passive effect regardless of cooldown]",
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
            "char_name": "Fuuma Amane",
            "char_icon": "6_Amane",
            "skill_name": "<Android Arm Type Zero> Dotenrin: Heavenly Reverse",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Smites the ground, attacking ALL enemies 1 time(s).\nGrants Shield equal to 15% of ally Max. HP to ALL allies.\nDuration: 2 turn(s)\nIf the target HP is less than 75%, the effect increases to 18%.",
            "scope": "AoE",
            "source": "S (Android Arm Type Zero)",
            "skill_id": 613
          },
          {
            "char_name": "Edwin Black",
            "char_icon": "66_Black",
            "skill_name": "<Crimson Requiem> End of Darkness",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Attacks the enemy using his ability.\nReduces the target's Turn Gauge by (15%) at a 75% chance on Last Attack.\nSteals the Shield the target has before the attack.\nIf the target's HP is less than 50%, increases Shield by 100% after the attack.",
            "scope": "Self",
            "source": "S (Crimson Requiem)",
            "skill_id": 6613
          },
          {
            "char_name": "Eleonor",
            "char_icon": "48_Eleonor",
            "skill_name": "<Dark Green Embryo> Dark Elf of the Dark Woods",
            "skill_type": "[Passive Skill]",
            "skill_desc": "On Turn Start, if an ally other than the character holds Shield, increases the duration of 1 random Buff(s) by 1 turn(s).",
            "scope": "AoE",
            "source": "S (Dark Green Embryo)",
            "skill_id": 4814
          },
          {
            "char_name": "Fuuma Hoensai",
            "char_icon": "111_Houensai",
            "skill_name": "<Daruma> Oil Art: Flame Disaster",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Breathes out fire, attacking ALL enemies 3 times.\nRemoves Shield from the targets.\nTargets hit are Taunted at a 45% chance.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Daruma)",
            "skill_id": 11113
          },
          {
            "char_name": "Shinganji Kurenai",
            "char_icon": "21_Kurenai",
            "skill_name": "<Warrior's Dual Sword> Crimson Princess of Bloodshed",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Attacking an enemy with Shield, CRIT DMG increases by (10%).\nApplies to all skills.",
            "scope": "AoE",
            "source": "S (Warrior's Dual Sword)",
            "skill_id": 2114
          },
          {
            "char_name": "Minasaki",
            "char_icon": "85_Minasaki",
            "skill_name": "<Nightsky Ribbon> GAN★BA★RE!!",
            "skill_type": "[Support Skill]",
            "skill_desc": "Grants ALL allies (2) Protective Shield(s).\nDuration: 2 turn(s)\nGrants ALL allies (5.5%) Healing Over Time.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Nightsky Ribbon)",
            "skill_id": 8513
          },
          {
            "char_name": "Merriam",
            "char_icon": "104_Miriam",
            "skill_name": "<Familiars Carrot & Eggplant> Cure Spell",
            "skill_type": "[Support Skill]",
            "skill_desc": "Restores HP of a targeted ally by 22.5% of their Max. HP.\nGrants (2) Protective Shield.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Familiars Carrot & Eggplant)",
            "skill_id": 10413
          },
          {
            "char_name": "Yatsu Murasaki",
            "char_icon": "19_Murasaki",
            "skill_name": "<Combat Axe> Fortification",
            "skill_type": "[Support Skill]",
            "skill_desc": "Gains a Shield equal to 19.5% of the character's Max. HP.\nDuration: 2 turn(s)\nTaunts ALL enemies at a fixed chance of 35%\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Combat Axe)",
            "skill_id": 1912
          },
          {
            "char_name": "Clear Lovell",
            "char_icon": "86_Robel",
            "skill_name": "<Tomurai & Requiem> Type: Hero",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Lovell's skill gets enhanced every 4 turns.\nParticle Weapon: Shini: Steals enemy Shield. Shield effect increases by 50% after stealing.\nParticle Weapon: Kamui\nShield amount increases by 24%.\nGrants (40%) Protect Ally to ALL allies.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Tomurai & Requiem)",
            "skill_id": 8613
          },
          {
            "char_name": "Uehara Shikanosuke",
            "char_icon": "80_Shikanosuke",
            "skill_name": "<Snowflake> Elec Art: Lightning Tackle",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Charges at the enemy with electricity coursing through the character.\nInflicts that target with Electrocute at a 30% chance.\nDuration: 2 turn(s)\nGains (2) Protective Shield after the attack.\nDuration: 2 turn(s)\nIf Uehara Rin is deployed, applies the same effect to ALL allies.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Snowflake)",
            "skill_id": 8013
          },
          {
            "char_name": "Mizuki Shiranui",
            "char_icon": "13_Shiranui",
            "skill_name": "<Kagero> Phantom Taimanin",
            "skill_type": "[Passive Skill]",
            "skill_desc": "If the character has a Shield, on Turn Start, decreases the duration of 1 Random Debuffs held by ALL allies by -1 turn(s).",
            "scope": "AoE",
            "source": "S (Kagero)",
            "skill_id": 1314
          },
          {
            "char_name": "Amamiya Shisui",
            "char_icon": "42_Shisui",
            "skill_name": "<Pussycat Headphones> Guardian's Touchdown",
            "skill_type": "[Passive Skill]",
            "skill_desc": "If HP is less than 50%, grants (3) Protective Shield to the character when hit.\nDuration: 2 turn(s)\nIf the enemy uses a Debuff Block skill, decreases the duration of ALL enemies' Debuff Block Buff by -1 turn(s).\n[Always-active passive effect regardless of cooldown]",
            "scope": "Self",
            "source": "S (Pussycat Headphones)",
            "skill_id": 4214
          },
          {
            "char_name": "Yuphie & Sophie",
            "char_icon": "58_Yuphiesophie",
            "skill_name": "<Aozora> The Invincible Twins!!",
            "skill_type": "[Support Skill]",
            "skill_desc": "Yuphie grants Sophie a (55%) DEF UP.\nDuration: 2 turn(s)\nAdditionally grants a Shield equal to 27% of Max. HP.\nDuration: 2 turn(s)\nGrants the same Buff to an ally with the highest ATK.",
            "scope": "Self",
            "source": "S (Aozora)",
            "skill_id": 5812
          },
      {
        "char_name": "Mizuki Shiranui",
        "char_icon": "13_Shiranui",
        "skill_name": "Water Art: Genejin",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Summons a water clone and grants ALL allies a Shield equal to (21%) of allies' Max. HP.\nDuration: 2 turn(s)\nGrants Debuff Block to ALL allies.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 1303
      },
      {
        "char_name": "Su Jinglei",
        "char_icon": "18_Jinglei",
        "skill_name": "Ryuurinkou",
        "skill_type": "[Support Skill]",
        "skill_desc": "Draws out the power of the dragon and gains (40%) DEF UP.\nDuration: 2 turn(s)\nTaunts 1 Random target among those who faced the dragon at a 45% chance.\nDuration: 2 turn(s)\nWhen Ryuurinkou is on Cooldown, gains Shield equal to 24% of Max. HP on the character's Turn Start. \nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 1802
      },
      {
        "char_name": "Onisaki Kirara",
        "char_icon": "24_Kirara",
        "skill_name": "Frost Shield",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Gathers cold air into a single point, grants ALL allies a Shield equal to 190% DEF, and (15%) Power-up\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 2403
      },
      {
        "char_name": "Amamiya Shisui",
        "char_icon": "42_Shisui",
        "skill_name": "Wave Art: Arrowing Light",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Summons a Guardian that unleashes a powerful wave at the enemy, attacking 4 times.\nIf the target has 2 or more Buffs, removes all Buffs before the attack.\nGrants Shield equal to 190% of the character's DEF to 2 allies with the lowest HP except self after the attack.\nDuration: 2 turn(s)\nDamage increases in proportion to DEF.",
        "scope": "AoE",
        "source": "",
        "skill_id": 4203
      },
      {
        "char_name": "Amamiya Shisui",
        "char_icon": "42_Shisui",
        "skill_name": "<TMN-Red> Wave Art: Arrowing Light",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Summons a Guardian that unleashes a powerful wave at the enemy, attacking 4 times.\nRemoves all of the target's Buffs before the attack.\nGrants Shield equal to 205% of the character's DEF to an ally with the highest ATK except self after the attack.\nDuration: 2 turn(s)\nDamage increases in proportion to DEF.",
        "scope": "AoE",
        "source": "S (TMN-Red)",
        "skill_id": 4213
      },
      {
        "char_name": "Eleonor",
        "char_icon": "48_Eleonor",
        "skill_name": "Droplet of Protection",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants Shield equal to 21% of the target's Max. HP to ALL allies.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 4802
      },
      {
        "char_name": "Yuphie & Sophie",
        "char_icon": "58_Yuphiesophie",
        "skill_name": "The Invincible Twins!!",
        "skill_type": "[Support Skill]",
        "skill_desc": "Yuphie grants Sophie a (55%) DEF UP.\nDuration: 2 turn(s)\nAdditionally grants a Shield equal to 27% of Max. HP.\nDuration: 2 turn(s)\nWhen Yuphie's HP is 90% or more, grants the same Buff to an ally with the highest ATK.",
        "scope": "Self",
        "source": "",
        "skill_id": 5802
      },
      {
        "char_name": "Kuonji R. Spica",
        "char_icon": "70_Spica",
        "skill_name": "Water Art: Bubble",
        "skill_type": "[Support Skill]",
        "skill_desc": "By using Water Art, grants (21%) SPD UP to ALL allies. Duration: 2 turn(s) If the target is a Power type, additionally grants Shield equal to 24% of the target's Max. HP. Duration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 7003
      },
      {
        "char_name": "Clear Lovell",
        "char_icon": "86_Robel",
        "skill_name": "Particle Weapon: Kamui",
        "skill_type": "[Support Skill]",
        "skill_desc": "Raises the shield and gains (19.5%) Shield.\nDuration: 2 turn(s)\nGrants (45%) Protect Ally to an ally with the lowest HP.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 8602
      },
      {
        "char_name": "Clear Lovell",
        "char_icon": "86_Robel",
        "skill_name": "Type: Hero",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Lovell's skill gets enhanced every 4 turns.\nParticle Weapon: Shini: Steals enemy Shield.\nParticle Weapon: Kamui\nAmount of Shield increases by 24%.\nGrants (40%) Protect Ally to ALL allies.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 8603
      },
      {
        "char_name": "Nasara",
        "char_icon": "105_Nasara",
        "skill_name": "Greed Parade",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Drives the ribbon into the ground to attack ALL enemies 2 times.\nOn the Last Attack, the following effects apply depending on the total number of Buffs among ALL enemies.\n3 or more Buffs: Reduces the duration of ALL enemies' Buffs by -1 turn(s).\n4 or more Buffs: Decreases the duration of ALL enemies' Turn Gauge by (15%).\n5 or more Buffs: Grant Shield equal to 26% of the character's Max. HP to ALL allies excluding the character.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 10503
      },
      {
        "char_name": "Kugasa Hikage",
        "char_icon": "120_Hikage",
        "skill_name": "Umbrella Strike",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Attacks the enemy by spreading an umbrella.\nGrants (27%) Shield to 1 Random ally except the character after the attack.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 12001
      },
      {
        "char_name": "Orc Warlock",
        "char_icon": "135_Orcchief1",
        "skill_name": "Soothe Pain",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants Shield equal to (21)% of the target's Max. HP to all allies.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 13502
      },
      {
        "char_name": "Wizard (Black)",
        "char_icon": "145_Magician2",
        "skill_name": "Eldritch Shield",
        "skill_type": "[Support Skill]",
        "skill_desc": "Casts a spell to grant 1 ally a Shield equal to 27% of the target's Max. HP.\nDuration: 2 turn(s)\nRestores HP of ALL allies by 16.5% of the target's Max. HP",
        "scope": "AoE",
        "source": "",
        "skill_id": 14502
      },
      {
        "char_name": "Gargoyle",
        "char_icon": "146_Gargoyle1",
        "skill_name": "Gargoyle Slash",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Strikes an enemy with wings.\nGains Shield equal to 19.5% of the character's Max. HP after the attack\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 14601
      },
      {
        "char_name": "Cult Knight",
        "char_icon": "161_Darkknight2",
        "skill_name": "Shield Smash",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Swings the shield to strike the enemy.\nIf the character's HP is less than 50%, gains Shield equal to 24% of the character's Max. HP before the attack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 16102
      },
      {
        "char_name": "Cold Sur",
        "char_icon": "173_Schill1",
        "skill_name": "Sur Armor",
        "skill_type": "[Support Skill]",
        "skill_desc": "Gains a (40%) DEF UP.\nDuration: 2 turn(s)\nGains Shield equal to 19.5% of the character's Max. HP.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 17302
      },
      {
        "char_name": "XPS-12C Marrow",
        "char_icon": "184_Xps11a",
        "skill_name": "Impact Drive",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Stabs the enemy to attack.\nGains Shield equal to 19.5% of Max. HP after the attack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 18401
      },
      {
        "char_name": "Turret Walker",
        "char_icon": "186_Weabo",
        "skill_name": "6-Round Machine Gun",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Fires the machine gun 6 times.\nGrants Random ally Shield equal to 19.5% of the target's Max. HP excluding self.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 18601
      },
      {
        "char_name": "E-Soldier M-01",
        "char_icon": "190_Gsoldier2",
        "skill_name": "Pulse Wall",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants Shield equal to 19.5% of the character's Max. HP and (40%) ATK UP.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 19002
      },
      {
        "char_name": "Mutant Hound",
        "char_icon": "197_Devilsdog3",
        "skill_name": "Maul",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Bites the enemy hard to attack.\nGrants Shield to an ally, except for the character, equal to 19.5% of their Max. HP after the attack.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 19701
      },
      {
        "char_name": "Death Knight",
        "char_icon": "202_Deathknight",
        "skill_name": "Ruinous Strike",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Slams the sword down and lifts it back up to attack 2 times.\nWhen a CRIT ATK lands during the attack, grants a Shield equal to 300% of DEF to the character. \nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 20202
      },
      {
        "char_name": "[Gosha] Mizuki Shiranui",
        "char_icon": "237_Shiranui",
        "skill_name": "Seisuisho",
        "skill_type": "[Support Skill]",
        "skill_desc": "Envelops ALL allies with water and grants a Shield equal to 15% of the character's Max. HP.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 23702
      },
      {
        "char_name": "[Gosha] Shinohara Mari",
        "char_icon": "248_Mari",
        "skill_name": "Class Rep's First Aid Kit",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Takes out a first aid kit from the bag to restore the HP of ALL allies by 21% of the character's Max. HP.\nReduces the duration of all allies' Debuff by -1 turn(s) after the restoration.\nIf the targets are Technique type, grants Shield equal to 24% of their Max. HP.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 24803
      },
      {
        "char_name": "[Gosha] Shinohara Mari",
        "char_icon": "248_Mari",
        "skill_name": "<Support Schoolbag> Class Rep's First Aid Kit",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Takes out a first aid kit from the bag to restore the HP of ALL allies by 21% of their Max. HP.\nIncreases the duration of all allies' Buff by 1 turn(s) after the restoration.\nIf the targets are not Technique type, grants Shield equal to 24% of their Max. HP.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "S (Support Schoolbag)",
        "skill_id": 24813
      },
      {
        "char_name": "[Wedding] Yatsu Murasaki",
        "char_icon": "254_Murasaki",
        "skill_name": "Eternal Vow",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When the character lands CRIT ATK on an enemy, gains a Shield equal to 100% of DEF.\nAdditionally grants Shield to ALL allies if [Wedding] Igawa Asagi is deployed.\nDuration: 2 turn(s)\nIncreases CRIT Rate by 50% of the character's CRIT RES.",
        "scope": "Self",
        "source": "",
        "skill_id": 25404
      },
      {
        "char_name": "[Swimsuit] Kousaka Shizuru",
        "char_icon": "257_Shizuru",
        "skill_name": "Tropical Dream Blossom",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If there's an enemy afflicted with Confusion at the end of each side's turn, grants Shield equal to 12% of the character's Max. HP to an ally with the lowest HP.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 25704
      },
      {
        "char_name": "[Swimsuit] Kousaka Shizuru",
        "char_icon": "257_Shizuru",
        "skill_name": "<Treasure Vine> Tropical Dream Blossom",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If there's an enemy afflicted with Confusion at the end of each side's turn, grants Shield equal to 12% of the character's Max. HP to an ally with the highest ATK.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Treasure Vine)",
        "skill_id": 25714
      },
      {
        "char_name": "[Oni] Akiyama Rinko",
        "char_icon": "275_Rinko",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "AoE",
        "source": "",
        "skill_id": 27502
      },
      {
        "char_name": "[Oni] Akiyama Rinko",
        "char_icon": "275_Rinko",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "S (Oni-Gear Blade)",
        "skill_id": 27512
      },
      {
        "char_name": "[Dark Wave] Yatsu Murasaki",
        "char_icon": "288_Murasaki",
        "skill_name": "",
        "skill_type": "[Passive Skill]",
        "skill_desc": "",
        "scope": "AoE",
        "source": "",
        "skill_id": 28804
      },
      {
        "char_name": "Kaliya",
        "char_icon": "300_Kaliya",
        "skill_name": "Poisonous Tail",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Swings the tail to attack ALL enemies.\nIf the target hit is afflicted with Poison, grants Shield equal to 21.5% of the character's Max. HP to ALL allies.\nDuration: 2 turn(s)\nIf ALL enemies have 3 or more Poison when attacking, grants Shield equal to 28% of the character's Max. HP to ALL allies.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 30002
      },
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
            "char_name": "Narita Akina",
            "char_icon": "121_Akina",
            "skill_name": "<Utopia> Stone Art: Heavyweight",
            "skill_type": "[Support Skill]",
            "skill_desc": "Musters up strength and gains (40%) DEF UP.\nDuration: 2 turn(s)\nRestores 18% of Max. HP.\nTaunts 1 Random enemy at a 45% chance.",
            "scope": "Self",
            "source": "S (Utopia)",
            "skill_id": 12112
          },
          {
            "char_name": "Kikuchi Aoi",
            "char_icon": "117_Aoi",
            "skill_name": "<Terpsichore> Sound Art: Dolce",
            "skill_type": "[Support Skill]",
            "skill_desc": "Heals allies with beautiful melodies.\nRestores HP of ALL allies by 25% of the target's Max. HP.\nEverytime the character gains a Buff, reduces the Cooldown of all skills by -1 turn(s). [Always-active passive effect regardless of cooldown]",
            "scope": "AoE",
            "source": "S (Terpsichore)",
            "skill_id": 11713
          },
          {
            "char_name": "Kichi Azusa",
            "char_icon": "14_Azusa",
            "skill_name": "<Rasetsumaru> Shikigami: Bodyguard",
            "skill_type": "[Support Skill]",
            "skill_desc": "Brings the hand to the mouth and recites a spell, gains (5%) Healing Over Time and (19.5%) Power-up.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Rasetsumaru)",
            "skill_id": 1412
          },
          {
            "char_name": "Cecilia Cello",
            "char_icon": "79_Cello",
            "skill_name": "<DSO-LuV.DX> Playful Child",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Healing Effect granted by the character increases by  35%.",
            "scope": "Self",
            "source": "S (DSO-LuV.DX)",
            "skill_id": 7912
          },
          {
            "char_name": "Hasegawa Fuuki",
            "char_icon": "127_Hasegawafuki",
            "skill_name": "<Stormwind Form> Wind Demon Style: Prosper Wind",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Grants (5.5%) Healing Over Time to ALL allies.\nDuration: 3 turn(s)\nEach Debuff on the target restores 37.5% of the target's Max. HP\nStacks up to 3.",
            "scope": "AoE",
            "source": "S (Stormwind Form)",
            "skill_id": 12713
          },
          {
            "char_name": "Yuri Hisui",
            "char_icon": "41_Hisui",
            "skill_name": "<Tara's Steel Staff> Monk Staff Art",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Stabs the enemy with a stone scepter, attacking 4 times.\nRestores ALL allies' HP on Last Attack by 4% of Max. HP.",
            "scope": "AoE",
            "source": "S (Tara's Steel Staff)",
            "skill_id": 4111
          },
          {
            "char_name": "Kagero",
            "char_icon": "123_Kagero",
            "skill_name": "<Melancholy> Vain Haze",
            "skill_type": "[Passive Skill]",
            "skill_desc": "On Turn Start, restores 6% of the character's Max. HP.",
            "scope": "Self",
            "source": "S (Melancholy)",
            "skill_id": 12313
          },
          {
            "char_name": "Nanase Mai",
            "char_icon": "36_Mai",
            "skill_name": "<Origami Shuriken> Paper Spirit: Defense",
            "skill_type": "[Support Skill]",
            "skill_desc": "Protects the character and 1 ally with paper, granting (45%) DEF UP.\nDuration: 2 turn(s)\nRestores 31.5% of the ally’s Max. HP.\nIf the character has DEF UP on Turn Start, reduces the Cooldown of The Paper Spirit Taimanin by -1 turn(s). [Always-active passive effect regardless of cooldown]",
            "scope": "Self",
            "source": "S (Origami Shuriken)",
            "skill_id": 3612
          },
          {
            "char_name": "Kiryu Mikoto",
            "char_icon": "22_Mikoto",
            "skill_name": "<Kijingiri> Ghost Arm",
            "skill_type": "[Passive Skill]",
            "skill_desc": "On every attack, CRIT Rate increases by (15%)\nWhen defeating the enemy, restores HP of 1 ally with the lowest HP by 6% of the target.",
            "scope": "Self",
            "source": "S (Kijingiri)",
            "skill_id": 2212
          },
          {
            "char_name": "Minasaki",
            "char_icon": "85_Minasaki",
            "skill_name": "<Nightsky Ribbon> GAN★BA★RE!!",
            "skill_type": "[Support Skill]",
            "skill_desc": "Grants ALL allies (2) Protective Shield(s).\nDuration: 2 turn(s)\nGrants ALL allies (5.5%) Healing Over Time.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Nightsky Ribbon)",
            "skill_id": 8513
          },
          {
            "char_name": "Merriam",
            "char_icon": "104_Miriam",
            "skill_name": "<Familiars Carrot & Eggplant> Cure Spell",
            "skill_type": "[Support Skill]",
            "skill_desc": "Restores HP of a targeted ally by 22.5% of their Max. HP.\nGrants (2) Protective Shield.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Familiars Carrot & Eggplant)",
            "skill_id": 10413
          },
          {
            "char_name": "Kousaka Shizuru",
            "char_icon": "29_Shizuru",
            "skill_name": "<Queen's Rose> Shizuru of Flowers",
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
            "char_name": "Kichi Azusa",
            "char_icon": "14_Azusa",
            "skill_name": "<Rasetsumaru> Shikigami: Bodyguard",
            "skill_type": "[Support Skill]",
            "skill_desc": "Brings the hand to the mouth and recites a spell, gains (5%) Healing Over Time and (19.5%) Power-up.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Rasetsumaru)",
            "skill_id": 1412
          },
          {
            "char_name": "Hasegawa Fuuki",
            "char_icon": "127_Hasegawafuki",
            "skill_name": "<Stormwind Form> Wind Demon Style: Prosper Wind",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Grants (5.5%) Healing Over Time to ALL allies.\nDuration: 3 turn(s)\nEach Debuff on the target restores 37.5% of the target's Max. HP\nStacks up to 3.",
            "scope": "AoE",
            "source": "S (Stormwind Form)",
            "skill_id": 12713
          },
          {
            "char_name": "Yuri Hisui",
            "char_icon": "41_Hisui",
            "skill_name": "<Jizo's Steel Staff> Eclipse Meld: Resonate",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Using a skill on every 4th turn grants an additional effect.\nWhen using Monk Staff Art, Healing Effect increases by (100%).\nWhen using Eclipse Meld: Syphoning Strike, inflicts Immobilize on an enemy at a 50% chance.\nDuration: 2 turn(s)\nWhen using Eclipse Meld: Sound, grants a (7%) Healing Over Time to all allies for 2 turn(s).",
            "scope": "AoE",
            "source": "S (Jizo's Steel Staff)",
            "skill_id": 4114
          },
          {
            "char_name": "Nanase Mai",
            "char_icon": "36_Mai",
            "skill_name": "<Origami Dagger> Paper Spirit: Absolute Barrier",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Builds a giant paper wall and grants (2) Protective Shields to ALL allies.\nDuration: 2 turn(s)\nGrants (7%)  Healing Over Time to allies whose HP is less than 50%.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Origami Dagger)",
            "skill_id": 3613
          },
          {
            "char_name": "Minasaki",
            "char_icon": "85_Minasaki",
            "skill_name": "<Nightsky Ribbon> GAN★BA★RE!!",
            "skill_type": "[Support Skill]",
            "skill_desc": "Grants ALL allies (2) Protective Shield(s).\nDuration: 2 turn(s)\nGrants ALL allies (5.5%) Healing Over Time.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Nightsky Ribbon)",
            "skill_id": 8513
          },
          {
            "char_name": "Kousaka Shizuru",
            "char_icon": "29_Shizuru",
            "skill_name": "<Queen's Rose> Shizuru of Flowers",
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
            "skill_name": "<Pink Band> Charming Arrow",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Shoots a heart-shaped arrow to attack the enemy.\nIf the target is hit, performs a (15%) Life Steal attack.\nIncreases all Debuff turn(s) the target has by 1 at a 70% chance after the attack.",
            "scope": "AoE",
            "source": "S (Pink Band)",
            "skill_id": 7213
          },
          {
            "char_name": "Oboro",
            "char_icon": "23_Oboro",
            "skill_name": "<Taima Claw: Misty Moon> Traitor Taimanin",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Performs a (15%) Life Steal when attacking.\nFor each Bleed inflicted on the enemy, increases DMG by 10%.",
            "scope": "Self",
            "source": "S (Taima Claw: Misty Moon)",
            "skill_id": 2314
          },
          {
            "char_name": "Saya NEO",
            "char_icon": "59_Sayaneo",
            "skill_name": "<Abyss Crawler> Saya NEO Special",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Stabs mercilessly with tentacles to attack the enemy.\nThis skill performs a (15%) Life Steal attack.\nPerforms a (30%) Bleed Debuff Resonance attack.",
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
            "char_name": "Kikuchi Aoi",
            "char_icon": "117_Aoi",
            "skill_name": "<Terpsichore> Sound Art: Dolce",
            "skill_type": "[Support Skill]",
            "skill_desc": "Heals allies with beautiful melodies.\nRestores HP of ALL allies by 25% of the target's Max. HP.\nEverytime the character gains a Buff, reduces the Cooldown of all skills by -1 turn(s). [Always-active passive effect regardless of cooldown]",
            "scope": "AoE",
            "source": "S (Terpsichore)",
            "skill_id": 11713
          },
          {
            "char_name": "Aishu Hebiko",
            "char_icon": "49_Hebiko",
            "skill_name": "<Jakou> Octopus Sever",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Draws the sword from the back and slashes the enemy 3 times.\nReduces the Cooldown of the 3rd skill of the ally with the highest ATK by -1 turn(s) on the Last Attack, excluding the character.",
            "scope": "Self",
            "source": "S (Jakou)",
            "skill_id": 4911
          },
          {
            "char_name": "Iska",
            "char_icon": "154_Isuka",
            "skill_name": "<Yumegiri> Paper Spirit: White Flash",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Transforms the spear into a giant sword using ninja art, and slashes ALL enemies.\nDefeating an enemy with this skill reduces Cooldown of Nomad's Cyborg Ninja by -1 turn(s). \nIf only 1 enemy remains, increases DMG by (45%).",
            "scope": "AoE",
            "source": "S (Yumegiri)",
            "skill_id": 15412
          },
          {
            "char_name": "Tekkain Koharu",
            "char_icon": "73_Koharu",
            "skill_name": "<TMP-73 Pro> Elec Art: Display",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Summons a flock of electronic animals and charges them toward the enemy.\nInflicts Active Skill Disabled to the target at a 10% chance.\nDuration: 2 turn(s)\nWhen defeating an enemy with this skill, reduces Cooldown of 2nd skill of ALL allies by -1 turn(s).",
            "scope": "AoE",
            "source": "S (TMP-73 Pro)",
            "skill_id": 7313
          },
          {
            "char_name": "Yatsu Kuro",
            "char_icon": "4_Kuro",
            "skill_name": "<Sword Breaker> CQC-Double Attack",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Runs toward the enemy with a dagger and attacks 2 times.\nReduces Cooldown of Awakened Immortal by -1 turn(s) after the attack.",
            "scope": "Self",
            "source": "S (Sword Breaker)",
            "skill_id": 411
          },
          {
            "char_name": "Nanase Mai",
            "char_icon": "36_Mai",
            "skill_name": "<Origami Shuriken> Paper Spirit: Defense",
            "skill_type": "[Support Skill]",
            "skill_desc": "Protects the character and 1 ally with paper, granting (45%) DEF UP.\nDuration: 2 turn(s)\nRestores 31.5% of the ally’s Max. HP.\nIf the character has DEF UP on Turn Start, reduces the Cooldown of The Paper Spirit Taimanin by -1 turn(s). [Always-active passive effect regardless of cooldown]",
            "scope": "Self",
            "source": "S (Origami Shuriken)",
            "skill_id": 3612
          },
          {
            "char_name": "Ise Nodoka",
            "char_icon": "115_Nodoka",
            "skill_name": "<Sabimaru> Taimanin Art: Water Mirror",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Swings the blade gracefully, attacking the enemy 2 time(s).\nReduces Cooldown of Mirror Art: Clear Mirror, Still Water by -1 turn(s).",
            "scope": "Self",
            "source": "S (Sabimaru)",
            "skill_id": 11511
          },
          {
            "char_name": "Tsubaki Onkyouki",
            "char_icon": "126_Ongyouki",
            "skill_name": "<Tachyon Blade> Demon of \"Shade\"",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Defeating an enemy reduces all of the character's Cooldown by -1 turn(s).\nIf the character is in Stealth, increases CRIT DMG by (10%).",
            "scope": "AoE",
            "source": "S (Tachyon Blade)",
            "skill_id": 12614
          },
          {
            "char_name": "Fuuma Tokiko",
            "char_icon": "28_Tokiko",
            "skill_name": "<Myoren> Evil Eye: Clairvoyance",
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
            "char_name": "Touge Kinki",
            "char_icon": "60_Tougekinki",
            "skill_name": "<Shishikirimaru> Iron Demon Style: Metal Counter",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Scatters sword aura to attack the designated enemy, then performs 2 additional attacks. Each additional attack targets Random enemies.\nGains Counterattack after the attack.\nWhen defeating an enemy with this skill, gains an Extra Turn.",
            "scope": "Self",
            "source": "S (Shishikirimaru)",
            "skill_id": 6012
          },
      {
        "char_name": "Touge Kinki",
        "char_icon": "60_Tougekinki",
        "skill_name": "Iron Demon Style: Metal Counter",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Scatters sword aura to attack the designated enemy, then performs 2 additional attacks. Each additional attack targets Random enemies.\nGains Counterattack after the attack.\nWhen defeating an enemy with this skill, gains (45%) ATK UP.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 6002
      },
      {
        "char_name": "Hiyama Kirin",
        "char_icon": "64_Kirin",
        "skill_name": "Power Overwhelming",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Removes all Debuff from the character and gains Counterattack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 6402
      },
      {
        "char_name": "Anje",
        "char_icon": "84_Anje",
        "skill_name": "An Innocent Girl",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start, if the character's HP is 70% or more, gains (12%) Damage Reflect.\nDuration: 2 turn(s)\nOn Turn Start, gains Counterattack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 8402
      },
      {
        "char_name": "Dobashi Gonza",
        "char_icon": "92_Gonza",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 9203
      },
      {
        "char_name": "Gaku Shonosuke",
        "char_icon": "93_Shonosuke",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 9302
      },
      {
        "char_name": "Gaku Shonosuke",
        "char_icon": "93_Shonosuke",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 9312
      },
      {
        "char_name": "Kugasa Hikage",
        "char_icon": "120_Hikage",
        "skill_name": "Wind Art: Wind God's Rage",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Uses Wind Art to create a tornado, attacking the enemy 9 time(s).\nIncreases DMG by 1.5% of the target's Max. HP.\nIf Wind Art: Spring Wind is on Cooldown, performs an Additional Attack 4 times.\nWhen performing an Additional Attack, gains Counterattack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 12003
      },
      {
        "char_name": "Cult Armed Priest",
        "char_icon": "162_Knightguard",
        "skill_name": "Cultist Guardian",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When hit, inflicts (19.5%) Weaken to the attacker at a 45% chance.\nDuration: 2 turn(s)\nIf the character's HP is less than 75% when hit, grants Counterattack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 16202
      },
      {
        "char_name": "Tina Worrell",
        "char_icon": "226_Worrell",
        "skill_name": "Frontline Artillery Support",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Gains Counterattack when hit by an all-target attack.\nDuration: 2 turn(s)\nReduces damage taken from all-target attacks by (-7.5%).",
        "scope": "Self",
        "source": "",
        "skill_id": 22602
      },
      {
        "char_name": "[Kimono] Igawa Asagi",
        "char_icon": "252_Asagi",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 25202
      },
      {
        "char_name": "[Wedding] Igawa Asagi",
        "char_icon": "253_Asagi",
        "skill_name": "Petal's Miracle",
        "skill_type": "[Support Skill]",
        "skill_desc": "Throws a bouquet into the air to grant (5.5%) Healing Over Time to ALL allies except self.\nDuration: 3 turn(s)\nThen grants Counterattack to 1 ally with the highest ATK.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 25302
      },
      {
        "char_name": "[Wedding] Igawa Asagi",
        "char_icon": "253_Asagi",
        "skill_name": "<Lily Cascade> Petal's Miracle",
        "skill_type": "[Support Skill]",
        "skill_desc": "Throws a bouquet into the air to grant (40%) DEF UP to ALL allies except self.\nDuration: 2 turn(s)\nThen grants Counterattack to 1 ally with the highest ATK.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Lily Cascade)",
        "skill_id": 25312
      },
      {
        "char_name": "[Swimsuit] Yuri Hisui",
        "char_icon": "256_Hisui",
        "skill_name": "Eclipse Meld: Companion",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Using the parasol as the axis, rotates her body to attack an enemy 3 time(s).\nGains Counterattack after the attack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 25602
      },
      {
        "char_name": "[Holy Night] Yatsu Murasaki",
        "char_icon": "264_Murasaki",
        "skill_name": "",
        "skill_type": "[Passive Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 26404
      },
      {
        "char_name": "[Demon Slayer] Igawa Asagi",
        "char_icon": "265_Asagi",
        "skill_name": "",
        "skill_type": "[Support Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 26502
      },
      {
        "char_name": "[Fire God] Kamimura Maika",
        "char_icon": "268_Maika",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 26803
      },
      {
        "char_name": "[Fire God] Kamimura Maika",
        "char_icon": "268_Maika",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 26813
      },
      {
        "char_name": "[Awakening] Igawa Asagi",
        "char_icon": "286_Asagi",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 28603
      },
      {
        "char_name": "[Task Force G] Clone Asagi",
        "char_icon": "297_Asagi",
        "skill_name": "",
        "skill_type": "[Support Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 29702
      },
      ]
      },
      {
        "id": "extra-turn",
        "name": "Extra Turn",
        "group": "Turn & Action",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Koukawa Asuka",
            "char_icon": "16_Asuka",
            "skill_name": "<Magnet Edge> Taimanin Art: Heavenly Dance",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Uses blades on her arms and legs to attack consecutively 5 times.\nIf the target is a Technique type, DMG increases (37.5%).\nWhen defeating the enemy with this skill, gains Extra Turn.",
            "scope": "Self",
            "source": "S (Magnet Edge)",
            "skill_id": 1622
          },
          {
            "char_name": "Mirabell Bell",
            "char_icon": "103_Bell",
            "skill_name": "<Peacemaker> Full Metal Jacket",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Fires the rifle in short bursts at the enemy.\nWhen defeating an enemy with this skill, gains Extra Turn.",
            "scope": "Self",
            "source": "S (Peacemaker)",
            "skill_id": 10311
          },
          {
            "char_name": "Hiiragi Fuyumi",
            "char_icon": "39_Fuyumi",
            "skill_name": "<Haruhara> Reorganize",
            "skill_type": "[Support Skill]",
            "skill_desc": "Assumes a battle ready stance and gains an Extra Turn, restoring 18% of Max. HP.",
            "scope": "Self",
            "source": "S (Haruhara)",
            "skill_id": 3912
          },
          {
            "char_name": "Kanezaki Jubei",
            "char_icon": "10_Jubei",
            "skill_name": "<Golden Eater> Gold Aegis",
            "skill_type": "[Support Skill]",
            "skill_desc": "Spins the gun in a flashy manner, then shoots it into the sky and gains (40%) ATK UP.\nDuration: 2 turn(s)\nGains Extra Turn.",
            "scope": "Self",
            "source": "S (Golden Eater)",
            "skill_id": 1012
          },
          {
            "char_name": "Tsubaki Onkyouki",
            "char_icon": "126_Ongyouki",
            "skill_name": "<Aurora Katana> Shade Demon Style: Assassinate",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Attacks the enemy at a speed untrackable to the naked eye.\nIf the target's HP is less than 50%, increases DMG by 45%.\nWhen defeating an enemy with this skill, gains Extra Turn.\nGains Stealth before the attack.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Aurora Katana)",
            "skill_id": 12613
          },
          {
            "char_name": "Touge Kinki",
            "char_icon": "60_Tougekinki",
            "skill_name": "<Shishikirimaru> Iron Demon Style: Metal Counter",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Scatters sword aura to attack the designated enemy, then performs 2 additional attacks. Each additional attack targets Random enemies.\nGains Counterattack after the attack.\nWhen defeating an enemy with this skill, gains an Extra Turn.",
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
            "char_name": "Tsubaki Onkyouki",
            "char_icon": "126_Ongyouki",
            "skill_name": "<Aurora Katana> Shade Demon Style: Assassinate",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Attacks the enemy at a speed untrackable to the naked eye.\nIf the target's HP is less than 50%, increases DMG by 45%.\nWhen defeating an enemy with this skill, gains Extra Turn.\nGains Stealth before the attack.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Aurora Katana)",
            "skill_id": 12613
          },
          {
            "char_name": "Hasuma Reiko",
            "char_icon": "176_Reiko",
            "skill_name": "<Gengetsu> Taima Whip Style: Round Up",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Whips ALL enemies while spinning around.\nRemoves Stealth from ALL enemies after the attack.",
            "scope": "AoE",
            "source": "S (Gengetsu)",
            "skill_id": 17613
          },
          {
            "char_name": "Igawa Sakura",
            "char_icon": "5_Sakura",
            "skill_name": "<Assasin's Dagger> Shadow Arts: Beast Call",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Summons a shadow creature and sends it toward the enemy.\nInflicts (-40%) DEF DOWN to the target at a 95% chance before the attack.\nDuration: 2 turn(s)\nGoes into Stealth mode when defeating an enemy with this skill.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Assasin's Dagger)",
            "skill_id": 512
          },
          {
            "char_name": "Igawa Sakuya",
            "char_icon": "2_Sakuya",
            "skill_name": "<Liberator & Sonic Blade> Moon Shadow",
            "skill_type": "[Passive Skill]",
            "skill_desc": "When hit by an attack other than an all-target attack, uses Moon Shadow.\nGoes into Stealth mode.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Liberator & Sonic Blade)",
            "skill_id": 212
          },
          {
            "char_name": "Kuroki Shizuku",
            "char_icon": "95_Shizuku",
            "skill_name": "<Tsukikage> Black Droplet",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Steals the attacker's Stealth when hit.",
            "scope": "Self",
            "source": "S (Tsukikage)",
            "skill_id": 9513
          },
      {
        "char_name": "Igawa Sakuya",
        "char_icon": "2_Sakuya",
        "skill_name": "Moon Shadow",
        "skill_type": "[Support Skill]",
        "skill_desc": "Goes into Stealth mode.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 202
      },
      {
        "char_name": "Igawa Sakura",
        "char_icon": "5_Sakura",
        "skill_name": "Shadow Arts: Beast Call",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Summons a shadow creature and sends it toward the enemy.\nInflicts (-50%) DEF DOWN before the attack at a 99% chance if the target is a Defense Type.\nDuration: 2 turn(s)\nGoes into Stealth mode when defeating an enemy with this skill.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 502
      },
      {
        "char_name": "Taimanin Library",
        "char_icon": "81_Library",
        "skill_name": "",
        "skill_type": "[Support Skill]",
        "skill_desc": "[In preparation]",
        "scope": "Self",
        "source": "",
        "skill_id": 8102
      },
      {
        "char_name": "Taimanin Library",
        "char_icon": "81_Library",
        "skill_name": "<Photon Plasma Blade> ",
        "skill_type": "[Support Skill]",
        "skill_desc": "[In preparation]",
        "scope": "Self",
        "source": "S (Photon Plasma Blade)",
        "skill_id": 8112
      },
      {
        "char_name": "Kuroki Shizuku",
        "char_icon": "95_Shizuku",
        "skill_name": "Swift Shadow",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Gains Stealth before the attack.\nSlashes the enemy indiscriminately 6 times.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 9501
      },
      {
        "char_name": "Tsubaki Onkyouki",
        "char_icon": "126_Ongyouki",
        "skill_name": "Shade Demon Style: Assassinate",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Attacks the enemy at a speed untrackable to the naked eye.\nIf the target's HP is less than 50%, increases DMG by (45%).\nIf the target's HP is less than 15%, deals Instant Death at a fixed chance of 60%.\nWhen defeating an enemy with this skill, gains Extra Turn.\nWhen defeating an enemy with this skill, gains a Stealth Buff.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 12603
      },
      {
        "char_name": "[Youthful Phantom] Mizuki Shiranui",
        "char_icon": "272_Shiranui",
        "skill_name": "Phantom Shiranui",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Round Start, gains Stealth.\nDuration: 2 turn(s)\nWhen hit by a CRIT ATK, gains Stealth at a 50% chance.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 27204
      },
      {
        "char_name": "[Youthful Phantom] Mizuki Shiranui",
        "char_icon": "272_Shiranui",
        "skill_name": "<Aqua Prism Naginata>Phantom Shiranui",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Round Start, gains Stealth. [Always-active passive effect regardless of cooldown]\nDuration: 2 turn(s)\nOn Turn Start, grants Stealth to an ally except for the character.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Aqua Prism Naginata)",
        "skill_id": 27214
      },
      {
        "char_name": "[Stealth Armor] Fuuma Saika",
        "char_icon": "282_Saika",
        "skill_name": "Shadow Dance Kick",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Moves at blinding speed to attack the enemy 4 time(s).\nGoes into Stealth mode after the attack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 28202
      },
      {
        "char_name": "[Stealth Armor] Fuuma Saika",
        "char_icon": "282_Saika",
        "skill_name": "Special Optical Camouflage",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If not attacked during the enemy's turn or is hit by an all-target attack during the enemy's turn, gains the effect listed below.\nWhen the character is in Stealth mode, Turn Gauge fills by 20%.\nWhen the character is not in Stealth mode, goes into Stealth mode.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "",
        "skill_id": 28204
      },
      {
        "char_name": "[Stealth Armor] Fuuma Saika",
        "char_icon": "282_Saika",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Moves at blinding speed to attack 4 time(s).\nConsumes -10% of the character's HP to go into Stealth mode and gain (19.5%) SPD UP after the attack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Active Cloaking Leg)",
        "skill_id": 28212
      },
      ]
      },
      {
        "id": "turn-gauge",
        "name": "Turn Gauge+",
        "group": "Turn & Action",
        "scope": "buff",
        "characters": [
          {
            "char_name": "Fuuma Amane",
            "char_icon": "6_Amane",
            "skill_name": "<Android Arm Secrecy> Fuuma Martial Art: Skyfall",
            "skill_type": "[Passive Skill]",
            "skill_desc": "On Turn Start absorbs (12.5%) Turn Gauge of the enemy with the strongest ATK at a 50% chance.\nOn Turn Start, removes 1 Debuff on the character.",
            "scope": "Self",
            "source": "S (Android Arm Secrecy)",
            "skill_id": 612
          },
          {
            "char_name": "Anemone",
            "char_icon": "77_Anemone",
            "skill_name": "<In Memorial> Call of Anubis",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Spreads a wide spider web to attack ALL enemies.\nDMG increases by (10%) for every Poison the target has.\nTarget hit is inflicted with Sleep if the target has 3 or more Debuffs, including Poison on the Last Attack.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (In Memorial)",
            "skill_id": 7712
          },
          {
            "char_name": "Edwin Black",
            "char_icon": "66_Black",
            "skill_name": "<Crimson Requiem> End of Darkness",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Attacks the enemy using his ability.\nReduces the target's Turn Gauge by (15%) at a 75% chance on Last Attack.\nSteals the Shield the target has before the attack.\nIf the target's HP is less than 50%, increases Shield by 100% after the attack.",
            "scope": "Self",
            "source": "S (Crimson Requiem)",
            "skill_id": 6613
          },
          {
            "char_name": "Ingrid",
            "char_icon": "25_Ingrid",
            "skill_name": "<Sol Brave> Evil Flame Slash",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Performs a consecutive sword dance to attack the enemy 4 times.\nTarget hit has their Turn Gauge decreased by (15%) at a 10% chance.\nPerforms 2 Additional Attacks and deals (30%) Burn Debuff Resonance.\nIf the target's SPD is higher than the character's, damage dealt increases based on the difference.",
            "scope": "Self",
            "source": "S (Sol Brave)",
            "skill_id": 2512
          },
          {
            "char_name": "Su Jinglei",
            "char_icon": "18_Jinglei",
            "skill_name": "<Companion Hand> Kokuryuha",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Unleashes the power of the dragon and attacks ALL enemies.\nPerforms a (60%) DEF Penetrate attack to the target hit.\nOn Last Attack, reduces the Turn Gauge of the enemy with the highest ATK by (15%) at a 65% chance.",
            "scope": "AoE",
            "source": "S (Companion Hand)",
            "skill_id": 1813
          },
          {
            "char_name": "Shishimura Koro",
            "char_icon": "44_Koro",
            "skill_name": "<Zetsuen> Soul Art: Soul Resurrection",
            "skill_type": "[Passive Skill]",
            "skill_desc": "When the enemy dies, fills (20%) of the Turn Gauge of ALL allies at a 50% chance.",
            "scope": "AoE",
            "source": "S (Zetsuen)",
            "skill_id": 4413
          },
          {
            "char_name": "Shinganji Kurenai",
            "char_icon": "21_Kurenai",
            "skill_name": "<Jet Black & Pitch Black> Wind Art: Wind Cloak",
            "skill_type": "[Support Skill]",
            "skill_desc": "Uses Wind Art to to sharpen the swords further.\nGains (32.5%) CRIT Rate UP.\nDuration: 2 turn(s)\nOn every CRIT ATK, decreases (15%) of the target's Turn Gauge at a 20% chance.\n[Always-active passive effect regardless of cooldown]",
            "scope": "Self",
            "source": "S (Jet Black & Pitch Black)",
            "skill_id": 2112
          },
          {
            "char_name": "Masked Taimanin",
            "char_icon": "78_Maskedtaimanin",
            "skill_name": "<Kokuten> Taimanin Art: Uprising Storm",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Randomly swings the knife and attacks the enemy 8 times.\nPerforms a (30%) Bleed Debuff Resonance attack.\nWhen defeating an enemy with this skill, reduces the Turn Gauge of ALL enemies by (15%) at a 50% chance.",
            "scope": "AoE",
            "source": "S (Kokuten)",
            "skill_id": 7812
          },
          {
            "char_name": "Hoshino Mitsuki",
            "char_icon": "37_Mitsuki",
            "skill_name": "<Nikko> Wind Art: Rampaging Gust",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Makes a large tornado and sends it toward ALL enemies.\nPerforms a Shield Penetrate attack.\nWhen defeating an enemy with this skill, fills (20%) of the Turn Gauge at a 95% chance for ALL allies.\nSteals the SPD UP Buff of ALL enemies before the attack.\nDamage increases in proportion to SPD.",
            "scope": "AoE",
            "source": "S (Nikko)",
            "skill_id": 3713
          },
          {
            "char_name": "Homare Nao",
            "char_icon": "113_Nao",
            "skill_name": "<Tyr> Light Art: Aurora Burst",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Fires a single laser beam at an enemy, dealing DMG.\nTarget hit has their Turn Gauge reduced by (15%) at a 75% chance.\nIf the target's Turn Gauge is less than 10%, increases all Debuffs' duration the target has by 1 turn(s).",
            "scope": "AoE",
            "source": "S (Tyr)",
            "skill_id": 11313
          },
          {
            "char_name": "Amadare Natsume",
            "char_icon": "20_Natsume",
            "skill_name": "<Witch Sleeve> Alluring Touch",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Attacks ALL enemies with alluring gestures.\nTarget hit is Taunted at a 45% chance.\nDuration: 2 turn(s)\nIf the target already is Taunted, puts them in Confusion state at a fixed chance of 30%.\nDuration: 1 turn(s)\nIf the target is an Agility type, decreases (15%) of their Turn Gauge at a 95% chance.",
            "scope": "AoE",
            "source": "S (Witch Sleeve)",
            "skill_id": 2012
          },
          {
            "char_name": "Noah Brown",
            "char_icon": "26_Noah",
            "skill_name": "<Love of Restraints> Manmade Demon",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Recovers 4.5% of Max. HP whenever an enemy dies, and fills Turn Gauge by (20%) at a 20% chance.\nThe DMG of all of Noah's skills increase the lower the HP.",
            "scope": "AoE",
            "source": "S (Love of Restraints)",
            "skill_id": 2614
          },
          {
            "char_name": "Renee",
            "char_icon": "101_Rene",
            "skill_name": "<Pandora's Box> Justice Execution!",
            "skill_type": "[Passive Skill]",
            "skill_desc": "When an enemy is killed by an ally attack, fills the Turn Gauge of the ally with the highest ATK excluding herself by (20%) at a 20% chance.",
            "scope": "Self",
            "source": "S (Pandora's Box)",
            "skill_id": 10113
          },
          {
            "char_name": "Uehara Rin",
            "char_icon": "32_Rin",
            "skill_name": "<Lightning Saber II Raizin> Lightning Art: Chain Volt",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Overcharges both swords with electricity and slashes at the enemy.\nRemoves the target's 1 Random Buffs and inflicts Faint at a 20% chance on the Last Attack.\nDuration: 1 turn(s)\nIf the character performs CRIT ATK, absorbs (12.5%) of the Turn Gauge at a 60% chance.\nIf the character has Overclock, increases CRIT Rate by (37.5%).",
            "scope": "Self",
            "source": "S (Lightning Saber II Raizin)",
            "skill_id": 3213
          },
          {
            "char_name": "Igawa Sakura",
            "char_icon": "5_Sakura",
            "skill_name": "<Kagedachi> Mischief Taimanin",
            "skill_type": "[Passive Skill]",
            "skill_desc": "When CRIT ATK lands, fills the character's Turn Gauge by (20%) at a fixed chance of 25%.",
            "scope": "Self",
            "source": "S (Kagedachi)",
            "skill_id": 514
          },
          {
            "char_name": "Kousaka Shizuru",
            "char_icon": "29_Shizuru",
            "skill_name": "<Thorn Knight> Sprout Garden",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "With an elegant dance, petals flutter, restoring the HP of ALL allies by 22.5% of the character's own Max. HP.\nIf the target's HP is more than 65% after healing, fills their Turn Gauge by (20%) at a 100% chance.",
            "scope": "AoE",
            "source": "S (Thorn Knight)",
            "skill_id": 2913
          },
          {
            "char_name": "Michea Silkys",
            "char_icon": "90_Silkys",
            "skill_name": "<Neon Saucer> Hero Vibes",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Whenever an ally gets a Debuff, removes 1 Random Debuff of ALL allies.\nFills the Turn Gauge of ALL allies by (20%) at a 65% chance.",
            "scope": "AoE",
            "source": "S (Neon Saucer)",
            "skill_id": 9012
          },
          {
            "char_name": "Kuonji R. Spica",
            "char_icon": "70_Spica",
            "skill_name": "<Bushido Striker> Samurai Shooter",
            "skill_type": "[Passive Skill]",
            "skill_desc": "On Turn Start, fills the Turn Gauge of 1 ally with the highest ATK by (20%) at a fixed 30% chance.",
            "scope": "Self",
            "source": "S (Bushido Striker)",
            "skill_id": 7012
          },
          {
            "char_name": "Akiyama Tatsuro",
            "char_icon": "12_Tatsuro",
            "skill_name": "<Amakudari> Itto Style: Moon Fall",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Leaps high and slashes enemies with a sword gripped in reverse.\nTarget hit is inflicted with (-19.5%) SPD DOWN at a 95% chance.\nDuration: 2 turn(s)\nAbsorbs (12.5%) Turn Gauge at a 35% chance.",
            "scope": "AoE",
            "source": "S (Amakudari)",
            "skill_id": 1212
          },
          {
            "char_name": "Watarase Tsumugi",
            "char_icon": "116_Tsumugi",
            "skill_name": "<Kepler> Heavy Smash",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Swings a hammer from above the head, attacking the enemy.\nIf the target has 2 or more Debuffs, absorbs Turn Gauge by (12.5%) at a 10% chance.",
            "scope": "Self",
            "source": "S (Kepler)",
            "skill_id": 11611
          },
          {
            "char_name": "Tina Worrell",
            "char_icon": "226_Worrell",
            "skill_name": "<Crimson Tempest> Plasma Rifle: Burst",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Charges the plasma rifle, and fires it 4 time(s) at the enemy.\nPerforms a (60%) DEF Penetrate attack.\nIf only 1 enemy is left, the last attack reduces the Turn Gauge of the target by (15%) at a 85% chance.",
            "scope": "Single Target",
            "source": "S (Crimson Tempest)",
            "skill_id": 22613
          },
          {
            "char_name": "Fujibayashi Yuno",
            "char_icon": "69_Yuno",
            "skill_name": "<Plasma Whip> Ravaging Whip",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Lashes the enemy with a whip while in midair, attacking 7 times.\nReduces the target's Turn Gauge by (15%) at a 5% chance, each time the target is hit.\nIf the target's Turn Gauge is less than 30% after the attack, increases the target's Debuffs by 1 turn(s).",
            "scope": "Self",
            "source": "S (Plasma Whip)",
            "skill_id": 6912
          },
          {
            "char_name": "Shirase Yuzuriha",
            "char_icon": "17_Yuzuriha",
            "skill_name": "<Atropos Glove> Silk Barrier",
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
            "skill_name": "<Ruby Eye> Queen of the Inferno",
            "skill_type": "[Passive Skill]",
            "skill_desc": "When attacking an enemy with Burn, performs a (15%) DEF Penetrate attack.",
            "scope": "Self",
            "source": "S (Ruby Eye)",
            "skill_id": 2714
          },
          {
            "char_name": "Sanada Homura",
            "char_icon": "35_Homura",
            "skill_name": "<Tsukiyo> Flaming Spear Battler",
            "skill_type": "[Passive Skill]",
            "skill_desc": "When attacking an enemy with HP at 70% or more, reduces 1 turn(s) of 1 Random Buff they possess.\nWhen attacking an enemy with HP less than 40%, performs a (15%) DEF Penetrate attack.",
            "scope": "Self",
            "source": "S (Tsukiyo)",
            "skill_id": 3514
          },
          {
            "char_name": "Su Jinglei",
            "char_icon": "18_Jinglei",
            "skill_name": "<Companion Hand> Kokuryuha",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Unleashes the power of the dragon and attacks ALL enemies.\nPerforms a (60%) DEF Penetrate attack to the target hit.\nOn Last Attack, reduces the Turn Gauge of the enemy with the highest ATK by (15%) at a 65% chance.",
            "scope": "AoE",
            "source": "S (Companion Hand)",
            "skill_id": 1813
          },
          {
            "char_name": "Oomiya Mizuki",
            "char_icon": "57_Mizuki",
            "skill_name": "<Taotei> Burning Grit",
            "skill_type": "[Passive Skill]",
            "skill_desc": "If character's HP is 40% or more, DMG increases by (7.5%).\nIf character's HP is 80% or more, performs a (15%) DEF Penetrate attack.",
            "scope": "Self",
            "source": "S (Taotei)",
            "skill_id": 5713
          },
          {
            "char_name": "Touge Kinki",
            "char_icon": "60_Tougekinki",
            "skill_name": "<Rengoku> Demon of \"Iron\"",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Performs a (15%) DEF Penetrate attack per Debuff the target has.\nStacks up to 5.",
            "scope": "Self",
            "source": "S (Rengoku)",
            "skill_id": 6014
          },
          {
            "char_name": "Tina Worrell",
            "char_icon": "226_Worrell",
            "skill_name": "<Crimson Tempest> Plasma Rifle: Burst",
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
            "char_name": "Shinohara Mari",
            "char_icon": "51_Mari",
            "skill_name": "<Cartridge Buster> Tales of the Class Rep.",
            "skill_type": "[Passive Skill]",
            "skill_desc": "When attacking an Incapacitated enemy, performs a Shield Penetrate attack.",
            "scope": "Self",
            "source": "S (Cartridge Buster)",
            "skill_id": 5114
          },
          {
            "char_name": "Hoshino Mitsuki",
            "char_icon": "37_Mitsuki",
            "skill_name": "<Nikko> Wind Art: Rampaging Gust",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Makes a large tornado and sends it toward ALL enemies.\nPerforms a Shield Penetrate attack.\nWhen defeating an enemy with this skill, fills (20%) of the Turn Gauge at a 95% chance for ALL allies.\nSteals the SPD UP Buff of ALL enemies before the attack.\nDamage increases in proportion to SPD.",
            "scope": "AoE",
            "source": "S (Nikko)",
            "skill_id": 3713
          },
          {
            "char_name": "Yamata-no-Orochi",
            "char_icon": "61_Orochi",
            "skill_name": "<Ryuuga> Holy Oni Warrior",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Performs a Shield Penetrate attack on enemies with HP at 75% or more.",
            "scope": "AoE",
            "source": "S (Ryuuga)",
            "skill_id": 6112
          },
          {
            "char_name": "Akiyama Rinko",
            "char_icon": "11_Rinko",
            "skill_name": "<Zetsuei> Itto Style: Kogarasi-no-Kata",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Uses Void Art to mercilessly slash the enemy, attacking 4 times.\nEach hit performs a Shield Penetrate attack.\nIf the character has 2 or more Buff, performs 1 Additional Attack.\nWhen an Additional Attack is triggered, inflicts (-24%) SPD DOWN on the target at a 99% chance.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Zetsuei)",
            "skill_id": 1112
          },
          {
            "char_name": "Snake Lady",
            "char_icon": "71_Snakelady",
            "skill_name": "<Blue Viper> Venom Smash",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Attacks the enemy with a powerful dropkick.\nGains (50%) CRIT DMG UP before the attack.\nDuration : 2 turn(s)\nDamage increases in proportion to target's current HP if the target has 2 or more Debuffs, including Poison.",
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
            "skill_name": "<Soul Eraser> Immortal Hunting",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Strikes an enemy with a scythe.\nWhen the target has 3 or more Debuffs, and the character's HP is less than 30%, attacking an enemy deals Instant Death at a fixed chance of 75%.\nIncreases the duration of all Buffs by 1 turn after the attack.\nSteals Immortal from the enemy before the attack.",
            "scope": "AoE",
            "source": "S (Soul Eraser)",
            "skill_id": 3013
          },
          {
            "char_name": "Mizuki Shiranui",
            "char_icon": "13_Shiranui",
            "skill_name": "<Hannyagiri> Water Art: Crushing Wave",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Creates a huge wave and sends it to the enemy, target hit is inflicted with Immobilize at a 60% chance.\nDuration: 2 turn(s)\nIf the character has 2 or more Buffs, increases the duration of 1 Random Buff held by ALL allies for 1 turn(s) after the attack.",
            "scope": "AoE",
            "source": "S (Hannyagiri)",
            "skill_id": 1312
          },
          {
            "char_name": "Hayami Uzuki",
            "char_icon": "119_Uzuki",
            "skill_name": "<Dawnbreaker> Light Art: Flash Cannon",
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
            "char_name": "Edwin Black",
            "char_icon": "66_Black",
            "skill_name": "<Crimson Requiem> End of Darkness",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Attacks the enemy using his ability.\nReduces the target's Turn Gauge by (15%) at a 75% chance on Last Attack.\nSteals the Shield the target has before the attack.\nIf the target's HP is less than 50%, increases Shield by 100% after the attack.",
            "scope": "Self",
            "source": "S (Crimson Requiem)",
            "skill_id": 6613
          },
          {
            "char_name": "Crackle",
            "char_icon": "129_Crackle",
            "skill_name": "<Hellcat Glove> NyaNya Attack",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Curls up into a ball and attacks the enemy 6 times while spinning.\nEvery time a CRIT ATK lands, steals 1 Random Buff from the target at a 15% chance.",
            "scope": "AoE",
            "source": "S (Hellcat Glove)",
            "skill_id": 12913
          },
          {
            "char_name": "Felicia",
            "char_icon": "30_Felicia",
            "skill_name": "<Soul Eraser> Immortal Hunting",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Strikes an enemy with a scythe.\nWhen the target has 3 or more Debuffs, and the character's HP is less than 30%, attacking an enemy deals Instant Death at a fixed chance of 75%.\nIncreases the duration of all Buffs by 1 turn after the attack.\nSteals Immortal from the enemy before the attack.",
            "scope": "AoE",
            "source": "S (Soul Eraser)",
            "skill_id": 3013
          },
          {
            "char_name": "Kannagi Kaede",
            "char_icon": "114_Kaede",
            "skill_name": "<Rouga> Wind Bow: Soaring Wolf",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Jumps up into the air and fires a powerful shot at the enemy.\nIf the target's HP is 80% or more,  steals 1 Random Buff(s) the target has.",
            "scope": "Self",
            "source": "S (Rouga)",
            "skill_id": 11411
          },
          {
            "char_name": "Fuuma Kotaro",
            "char_icon": "54_Kotaro",
            "skill_name": "<Fuuma> Taimanin Art: Fuuma",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Approaches the enemy, stabs and then slashes them to attack.\nSteals 1 Random Buffs from the target hit at a 20% chance.",
            "scope": "Self",
            "source": "S (Fuuma)",
            "skill_id": 5411
          },
          {
            "char_name": "Hoshino Mitsuki",
            "char_icon": "37_Mitsuki",
            "skill_name": "<Nikko> Wind Art: Rampaging Gust",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Makes a large tornado and sends it toward ALL enemies.\nPerforms a Shield Penetrate attack.\nWhen defeating an enemy with this skill, fills (20%) of the Turn Gauge at a 95% chance for ALL allies.\nSteals the SPD UP Buff of ALL enemies before the attack.\nDamage increases in proportion to SPD.",
            "scope": "AoE",
            "source": "S (Nikko)",
            "skill_id": 3713
          },
          {
            "char_name": "Clear Lovell",
            "char_icon": "86_Robel",
            "skill_name": "<Tomurai & Requiem> Type: Hero",
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
            "char_name": "Fuuma Amane",
            "char_icon": "6_Amane",
            "skill_name": "<Android Arm Secrecy> Fuuma Martial Art: Skyfall",
            "skill_type": "[Passive Skill]",
            "skill_desc": "On Turn Start absorbs (12.5%) Turn Gauge of the enemy with the strongest ATK at a 50% chance.\nOn Turn Start, removes 1 Debuff on the character.",
            "scope": "Self",
            "source": "S (Android Arm Secrecy)",
            "skill_id": 612
          },
          {
            "char_name": "Kugasa Hikage",
            "char_icon": "120_Hikage",
            "skill_name": "<Amayo> Wind Art: Spring Wind",
            "skill_type": "[Support Skill]",
            "skill_desc": "Grants (45%) ATK UP to 1 ally.\nDuration: 2 turn(s)\nRemoves all Debuffs.",
            "scope": "AoE",
            "source": "S (Amayo)",
            "skill_id": 12012
          },
          {
            "char_name": "Igawa Senshu",
            "char_icon": "91_Sensyu",
            "skill_name": "<Poison Dragon Claw> Poisonous Raksha",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Removes all Poison Debuffs from the character when hit.\nIf this skill is on Cooldown, increases Poison DMG by a fixed 3% at a 50% chance on every attack's Last Attack.",
            "scope": "AoE",
            "source": "S (Poison Dragon Claw)",
            "skill_id": 9112
          },
          {
            "char_name": "Michea Silkys",
            "char_icon": "90_Silkys",
            "skill_name": "<Neon Saucer> Hero Vibes",
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
            "char_name": "Fuuma Aki",
            "char_icon": "45_Aki",
            "skill_name": "<Giren> Chasing Slash",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Swings a sword left and right to attack the enemy 4 times.\nIf the target has Bleed, inflicts (22.5%) Weaken at a 50% chance on the Last Attack.\nDuration: 2 turn(s)\nGains (32.5%) CRIT Rate UP before the attack. \nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Giren)",
            "skill_id": 4512
          },
          {
            "char_name": "Felicia",
            "char_icon": "30_Felicia",
            "skill_name": "<Crow's Beak> Seven Hells",
            "skill_type": "[Attack Skill]",
            "skill_desc": "After launching the enemy into the air, jumps up and attacks 4 times in total.\nTarget hit is inflicted (10%) Bleed at a 10% chance.\nDuration: 3 turn(s)\nWhen Vampire Princess is on Cooldown, performs an Additional Attack 1 time.\nOn Last Attack, increases Bleed effect by 1 turn(s).\nDuration: 1 turn(s)",
            "scope": "Self",
            "source": "S (Crow's Beak)",
            "skill_id": 3012
          },
          {
            "char_name": "Masked Taimanin",
            "char_icon": "78_Maskedtaimanin",
            "skill_name": "<Kokuten> Taimanin Art: Uprising Storm",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Randomly swings the knife and attacks the enemy 8 times.\nPerforms a (30%) Bleed Debuff Resonance attack.\nWhen defeating an enemy with this skill, reduces the Turn Gauge of ALL enemies by (15%) at a 50% chance.",
            "scope": "AoE",
            "source": "S (Kokuten)",
            "skill_id": 7812
          },
          {
            "char_name": "Oboro",
            "char_icon": "23_Oboro",
            "skill_name": "<Black Iron Claw> Wicked Slasher",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Lightly jumps and stabs the enemy with their claws.\nPerforms a (30%) Bleed Debuff Resonance attack.",
            "scope": "Self",
            "source": "S (Black Iron Claw)",
            "skill_id": 2313
          },
          {
            "char_name": "Saya NEO",
            "char_icon": "59_Sayaneo",
            "skill_name": "<Abyss Crawler> Saya NEO Special",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Stabs mercilessly with tentacles to attack the enemy.\nThis skill performs a (15%) Life Steal attack.\nPerforms a (30%) Bleed Debuff Resonance attack.",
            "scope": "Self",
            "source": "S (Abyss Crawler)",
            "skill_id": 5913
          },
          {
            "char_name": "Momochi Toyo",
            "char_icon": "53_Toyo",
            "skill_name": "<Magatsuki> Momochi Style Ultimate: Kodoku",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "After launching a series of attacks with the weapons covering the body, finishes the enemy with the blade on the back.\nIncreases the effect of Bleed, Poison, and Burn on the target hit by 10%, a fixed 3%, and a fixed 5% respectively.\nDMG increases by (55%) for each Debuff the target has.\nThe effect applies up to 4 stacks.",
            "scope": "Self",
            "source": "S (Magatsuki)",
            "skill_id": 5313
          },
          {
            "char_name": "Pamela Jäger",
            "char_icon": "102_Yeager",
            "skill_name": "<Crimson Reaper> Jäger Cross",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Quickly launches at the enemy and slashes them in a cross-shape and explodes, attacking 3 time(s).\nIf the enemy isn't the only one remaining, performs a (30%) Bleed, Burn, Poison Debuff Resonance attack.\nIf the enemy is the only one remaining, performs a (45%) Bleed, Burn, Poison Debuff Resonance attack.",
            "scope": "Self",
            "source": "S (Crimson Reaper)",
            "skill_id": 10213
          },
      {
        "char_name": "Oboro",
        "char_icon": "23_Oboro",
        "skill_name": "Taimanin Art: Claws",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Stabs the enemy with claws in both hands to attack 3 times\nTarget hit is inflicted with (10%) Bleed at a 5% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 2301
      },
      {
        "char_name": "Oboro",
        "char_icon": "23_Oboro",
        "skill_name": "Blooming Carnage",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks ALL enemies with a strong raking attack\nWhen attacking a target that has Bleed, CRIT Rate increases by (30%).\nTarget hit is inflicted with (10%) Bleed at a 50% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 2302
      },
      {
        "char_name": "Noah Brown",
        "char_icon": "26_Noah",
        "skill_name": "Viktor's Wrath",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Lunges at the enemy with altered arms and slashes them.\nDamage increases in proportion to HP lost.\nTarget hit is inflicted with (10%) Bleed at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 2601
      },
      {
        "char_name": "Noah Brown",
        "char_icon": "26_Noah",
        "skill_name": "Randolf's Nightmare",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Scratches the ground violently with claws to unleash a claw-shaped sword aura toward the enemy.\nTarget hit is inflicted with (10%) Bleed at a 95% chance.\nIf Cara Cromwell is deployed, target is inflicted with (10%) Bleed.\nDuration: 3 turn(s)\nIf Cara Cromwell is deployed, performs Joint Attack together.\nIf the target's HP is less than 10%, inflicts Instant Death at a fixed chance of 60%.\nConsumes -10% of current HP to increase DMG by (30%) before the attack.\nDamage increases in proportion to HP lost.",
        "scope": "Target",
        "source": "",
        "skill_id": 2602
      },
      {
        "char_name": "Felicia",
        "char_icon": "30_Felicia",
        "skill_name": "Seven Hells",
        "skill_type": "[Attack Skill]",
        "skill_desc": "After launching the enemy into the air, jumps up and attacks 4 times in total.\nTarget hit is inflicted with (10%) Bleed at a 10% chance.\nDuration: 3 turn(s)\nWhen Vampire Princess is on Cooldown, performs an Additional Attack 1 time.\nWhen performing an Additional Attack, increases Bleed effect by 5%.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 3002
      },
      {
        "char_name": "Hoshino Mitsuki",
        "char_icon": "37_Mitsuki",
        "skill_name": "Wind Art: Blazing Wind",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Swings a fan continuously to send 5 gusts of wind that attacks ALL enemies.\nTargets hit are inflicted with (50%) Heal Reduction at a 90% chance.\nDuration: 2 turn(s)\nIf the target is already inflicted with Heal Reduction, every attack inflicts (10%) Bleed at a fixed chance of 15%.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 3702
      },
      {
        "char_name": "Fuuma Aki",
        "char_icon": "45_Aki",
        "skill_name": "Double Slash",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Swings a sword in an X shape and slashes the enemy 2 times.\nTarget hit is inflicted with (10%) Bleed at a 5% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 4501
      },
      {
        "char_name": "Fuuma Aki",
        "char_icon": "45_Aki",
        "skill_name": "Death Splinter: Afterlife",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Uses quick-draw technique to slash ALL enemies horizontally.\nWhen using the skill, increases CRIT Rate by (30%).\nIf the target has 3 or more Debuffs, increases CRIT DMG by (65%).\nOn the Last Attack, performs a (30%)Bleed Debuff Resonance attack.\nAfter the Debuff Resonance attack, inflicts the target with a (10%) Bleed at a 75% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 4503
      },
      {
        "char_name": "Fuuma Aki",
        "char_icon": "45_Aki",
        "skill_name": "<Nasara> Death Splinter: Afterlife",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Uses quick-draw technique to slash ALL enemies horizontally.\nWhen using the skill, increases CRIT Rate by (30%).\nIf the character has 1 or more Buffs, increases CRIT DMG by (65%).\nOn the Last Attack, performs a (30%)Bleed Debuff Resonance attack.\nAfter the Debuff Resonance attack, inflicts the target with a (10%) Bleed.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "S (Nasara)",
        "skill_id": 4513
      },
      {
        "char_name": "Lina",
        "char_icon": "50_Lina",
        "skill_name": "Cherry Blossom Illusion",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Jumps into the air and scatters sword aura, attacking ALL enemies 5 times.\nIf the target's SPD is higher than the character's or if the target is a boss, the target is inflicted with (10%) Bleed at a 30% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 5002
      },
      {
        "char_name": "Lina",
        "char_icon": "50_Lina",
        "skill_name": "Nomad's Hell Knight",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If the target's SPD is higher than the character's or if the target is a boss, performs a Shield Penetrate attack.\n[Always-active passive effect regardless of cooldown]\nWhen a CRIT ATK is performed on an enemy afflicted with Bleed, the target is inflicted with additional (10%) Bleed.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 5004
      },
      {
        "char_name": "Lina",
        "char_icon": "50_Lina",
        "skill_name": "<Jade Iris> Nomad's Hell Knight",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If the target's SPD is higher than the character's or if the target is a boss, increases the duration of Bleed by 1 turn.\n[Always-active passive effect regardless of cooldown]\nWhen a CRIT ATK is performed on an enemy afflicted with Bleed, the enemy is inflicted with additional (10%) Bleed.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "S (Jade Iris)",
        "skill_id": 5014
      },
      {
        "char_name": "Momochi Toyo",
        "char_icon": "53_Toyo",
        "skill_name": "Momochi Sword Style: Mantis",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Hold the sword with both hands and swing it strongly to cut down the enemy.\nTarget hit is inflicted with (10%) Bleed at a 15% chance.\nDuration: 3 turn(s)\nInflict (2.5%) Poison at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 5301
      },
      {
        "char_name": "Nisha Gaiza",
        "char_icon": "55_Gaiza",
        "skill_name": "Roaming Soul: Inosuke",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Thrusts the sword into the enemy to attack 2 times.\nTarget hit is inflicted with (10%) Bleed at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 5501
      },
      {
        "char_name": "Tekkain Kaworu",
        "char_icon": "74_Kaworu",
        "skill_name": "Chain Art: Chain Frenzy",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Swings the chain to attack ALL enemies 6 times.\nTarget hit is inflicted with (10%) Bleed at a 10% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 7403
      },
      {
        "char_name": "Donna Burroughs",
        "char_icon": "76_Burroughs",
        "skill_name": "Charge Slash",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Focuses energy on the sword to attack ALL enemies.\nTargets hit are inflicted with (10%) Bleed at a 50% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 7602
      },
      {
        "char_name": "Masked Taimanin",
        "char_icon": "78_Maskedtaimanin",
        "skill_name": "Taimanin Art: Oni Slash",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Slashes the enemy upwards with a dagger, and then stabs downwards, attacking the enemy 2 times in total.\nTarget hit is inflicted with (10%) Bleed at a 5% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 7801
      },
      {
        "char_name": "Izumo Tsuru",
        "char_icon": "82_Tsuru",
        "skill_name": "Bullet Party",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Goes on a shooting spree and attacks the enemy 7 times.\nTarget hit is inflicted with (10%) Bleed at a 5% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 8201
      },
      {
        "char_name": "Anje",
        "char_icon": "84_Anje",
        "skill_name": "Hellrising Tentacles",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Plants a bundle of tentacles into the ground, attacking ALL enemies 2 time(s).\nPerforms a Shield Penetrate attack.\nTarget hit is inflicted with (10%) Bleed at a 30% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 8403
      },
      {
        "char_name": "Torajiro",
        "char_icon": "87_Torajiro",
        "skill_name": "Tiger Claw Fist",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Attacks the enemy 2 times by slashing them with powerful claws.\nTarget hit is inflicted with (10%) Bleed at a 5% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 8701
      },
      {
        "char_name": "Werewolf",
        "char_icon": "88_Werewolf",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 8801
      },
      {
        "char_name": "Werewolf",
        "char_icon": "88_Werewolf",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 8803
      },
      {
        "char_name": "Oni Berserker",
        "char_icon": "139_Oni1",
        "skill_name": "Twin Blade Slash",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Swings the weapon with both hands to attack the enemy.\nTarget hit is inflicted with (10%) Bleed at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 13901
      },
      {
        "char_name": "Oni Warrior",
        "char_icon": "142_Onielite1",
        "skill_name": "Cut Wind",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Swings sword consecutively to attack the enemy 2 times.\nTarget hit is inflicted with (10%) Bleed at a 5% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 14201
      },
      {
        "char_name": "Oni Warrior",
        "char_icon": "142_Onielite1",
        "skill_name": "Split Ground",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Swings the sword greatly to attack ALL enemies 3 times.\nTargets hit are inflicted with (10%) Bleed at a 15% chance.\nDuration: 3 turn(s)\nPerforms a (15%) Life Steal attack.",
        "scope": "Target",
        "source": "",
        "skill_id": 14202
      },
      {
        "char_name": "Howl Dog",
        "char_icon": "150_Blackdog2",
        "skill_name": "Sinister Bite",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Attacks by biting the enemy hard.\nTarget hit is inflicted with (10%) Bleed at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 15001
      },
      {
        "char_name": "Hasuma Reiko",
        "char_icon": "176_Reiko",
        "skill_name": "Taima Whip Style: Bleedout",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Cracks the whip, to attack the enemy.\nTarget hit is inflicted with (10%) Bleed at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 17601
      },
      {
        "char_name": "XPS-12C Marrow",
        "char_icon": "184_Xps11a",
        "skill_name": "Merciless Rupture",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When attacking, inflicts the enemy with (10%) Bleed at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 18402
      },
      {
        "char_name": "XPS-12C Marrow",
        "char_icon": "184_Xps11a",
        "skill_name": "Round Slash",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Spins and attacks ALL enemies 3 times.\nOn every attack, inflicts the enemy with (10%) Bleed at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 18403
      },
      {
        "char_name": "Mutated Zombie Creature Type-B",
        "char_icon": "199_Zombie2",
        "skill_name": "Grinding Slash",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Spins the whole body toward ALL enemies to attack 5 times.\nTargets hit are inflicted with (10%) Bleed at a 50% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 19902
      },
      {
        "char_name": "Necroid Harvester",
        "char_icon": "209_Skeletonmage1",
        "skill_name": "Death Tempest",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Spins the body and strikes with the scythe to attack 3 time(s).\nInflicts (5%) Bleed at a 10% chance with each attack.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 20902
      },
      {
        "char_name": "Red Hell Beast",
        "char_icon": "219_Hadesmon1",
        "skill_name": "Claw of the Underworld",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Slashes the enemy 2 times.\nTarget hit is inflicted with (10%) Bleed at a 5% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 21901
      },
      {
        "char_name": "[Divine Armor] Shinganji Kurenai",
        "char_icon": "281_Kurenai",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 28102
      },
      {
        "char_name": "[Shadow Ruler] Igawa Sakura",
        "char_icon": "287_Sakura",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 28701
      },
      {
        "char_name": "Cara Cromwell",
        "char_icon": "302_Cromwell",
        "skill_name": "Blood Mark",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Manifests a sword of blood under the enemy to attack.\nIf the character's HP is more than 50% when using the skill, inflicts (10%) Bleed at a 15% chance.\nDuration: 3 turn(s)\nIf the character's HP is less than 50% when using the skill, inflicts (10%) Bleed.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 30201
      },
      {
        "char_name": "Cara Cromwell",
        "char_icon": "302_Cromwell",
        "skill_name": "Crimson Smite",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Converts the blood the character handles into red lightning, striking ALL enemies 3 times.\nRecovers her HP by 7.5% for each ally inflicted with Bleed before the attack.\nInflicts (50%) Vulnerable to Bleeding on struck targets at a 75% chance.\nDuration: 2 turn(s)\nIf the target is already inflicted with Vulnerable to Bleeding, inflicts (10%) Bleed at a 80% chance.\nDuration: 3 turn(s)\nRemoves Bleed Debuff from ALL allies on the Last Attack.",
        "scope": "Target",
        "source": "",
        "skill_id": 30203
      },
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
            "skill_name": "<Throne Bracelet> Heat Wave",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Attacks ALL enemies by lighting the ground beneath them on fire.\nInflicts (3.5%) Burn at a 60% chance on Last Attack.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Throne Bracelet)",
            "skill_id": 2712
          },
          {
            "char_name": "Mirabell Bell",
            "char_icon": "103_Bell",
            "skill_name": "<BS Assault Shooter Custom> Satellite Beam",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Throws a signal beacon to mark the bomb drop location to attack ALL enemies.\nTargets hit are inflicted with (3.5%) Burn at a 75% chance.\nDuration: 3 turn(s)\nIf the target's HP is less than 30%, additionally inflicts Burn at a 90% chance after the attack.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (BS Assault Shooter Custom)",
            "skill_id": 10313
          },
          {
            "char_name": "Donna Burroughs",
            "char_icon": "76_Burroughs",
            "skill_name": "<Berserker Blade> Charge Slash",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Focuses energy on the sword and attacks ALL enemies.\nTarget hit is inflicted with (3.5%) Burn at a 50% chance.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Berserker Blade)",
            "skill_id": 7612
          },
          {
            "char_name": "Shishimura Denji",
            "char_icon": "110_Denji",
            "skill_name": "<Hibana> Explosive Art: Dust Cloud",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Throws a sugar cube at a targeted enemy and 1 Random enemy.\nTargets hit are inflicted with (3.5%) Burn at a 15% chance.\nDuration: 3 turn(s)",
            "scope": "Self",
            "source": "S (Hibana)",
            "skill_id": 11011
          },
          {
            "char_name": "Sanada Homura",
            "char_icon": "35_Homura",
            "skill_name": "<Hyakuren> Flaming Spear",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Charges while mounted on a spear and attacks 2 times.\nIf the target is inflicted with Burn, CRIT Rate increases 7.5%.",
            "scope": "Self",
            "source": "S (Hyakuren)",
            "skill_id": 3511
          },
          {
            "char_name": "Ingrid",
            "char_icon": "25_Ingrid",
            "skill_name": "<Sol Brave> Evil Flame Slash",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Performs a consecutive sword dance to attack the enemy 4 times.\nTarget hit has their Turn Gauge decreased by (15%) at a 10% chance.\nPerforms 2 Additional Attacks and deals (30%) Burn Debuff Resonance.\nIf the target's SPD is higher than the character's, damage dealt increases based on the difference.",
            "scope": "Self",
            "source": "S (Sol Brave)",
            "skill_id": 2512
          },
          {
            "char_name": "Kamimura Maika",
            "char_icon": "31_Maika",
            "skill_name": "<Nuclear Option> Meido Bazooka <Grenade>",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "After jumping into the air, fires a super-heated flame bullet toward the ground, attacking ALL enemies.\nWhen an enemy is defeated by this skill, resets Cooldown of Blazing Barrage.\nInflicts (3.5%) Burn to ALL enemies at a 75% chance before the attack.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Nuclear Option)",
            "skill_id": 3113
          },
          {
            "char_name": "Kasumigaoka Rika",
            "char_icon": "40_Rika",
            "skill_name": "<Suitenko> Cross Slash",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Launches a cross-shaped sword aura at the enemy.\nTarget hit is inflicted with (3.5%) Burn at a 15% chance.\nDuration: 3 turn(s)",
            "scope": "Self",
            "source": "S (Suitenko)",
            "skill_id": 4011
          },
          {
            "char_name": "Kannazuki Sora",
            "char_icon": "43_Sora",
            "skill_name": "<Higure> Apprentice Taimanin",
            "skill_type": "[Passive Skill]",
            "skill_desc": "If the character has a Buff, inflicts (3.5%) Burn to the target at a 15% chance.\nDuration: 3 turn(s)",
            "scope": "Self",
            "source": "S (Higure)",
            "skill_id": 4313
          },
          {
            "char_name": "Momochi Toyo",
            "char_icon": "53_Toyo",
            "skill_name": "<Utzuro> Momochi Assassin Arts: Serpent",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Draws two swords from the back and stabs the enemy 7 times.\nTarget hit is inflicted with Immobilize at a 5% chance.\nDuration: 2 turn(s)\nWhen enemy is defeated, inflicts ALL enemies with (3.5%) Burn at a 60% chance.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Utzuro)",
            "skill_id": 5312
          },
          {
            "char_name": "Izumo Tsuru",
            "char_icon": "82_Tsuru",
            "skill_name": "<Order-maid> Bullet Party",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Sprays bullets, attacking the enemy 7 times.\nTarget hit is inflicted with (3.5%) Burn at a 5% chance.\nDuration: 3 turn(s)",
            "scope": "Self",
            "source": "S (Order-maid)",
            "skill_id": 8211
          },
          {
            "char_name": "Pamela Jäger",
            "char_icon": "102_Yeager",
            "skill_name": "<Crimson Reaper> Jäger Cross",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Quickly launches at the enemy and slashes them in a cross-shape and explodes, attacking 3 time(s).\nIf the enemy isn't the only one remaining, performs a (30%) Bleed, Burn, Poison Debuff Resonance attack.\nIf the enemy is the only one remaining, performs a (45%) Bleed, Burn, Poison Debuff Resonance attack.",
            "scope": "Self",
            "source": "S (Crimson Reaper)",
            "skill_id": 10213
          },
      {
        "char_name": "Ingrid",
        "char_icon": "25_Ingrid",
        "skill_name": "Gniel's Evil Flames",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Wraps black flames around the sword to quickly pierce through the enemy.\nTarget hit is inflicted with (3.5%) Burn at a 95% chance.\nDuration: 3 turn(s)\nIf the target's HP is less than 50%, inflicts (22.5%) Weaken at a 80% chance.\nDuration: 2 turn(s)\nIf the target's SPD is higher than the character's, damage dealt increases based on the difference.",
        "scope": "Target",
        "source": "",
        "skill_id": 2503
      },
      {
        "char_name": "Ingrid",
        "char_icon": "25_Ingrid",
        "skill_name": "<Kurayami> Gniel's Evil Flames",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Wraps black flames around the sword to swiftly pierce the enemy.\nTarget hit is inflicted with (3.5%) Burn at a 95% chance.\nDuration: 3 turn(s)\nWhen defeating an enemy with this skill, ALL enemies are inflicted with (3.5%) Burn at a 90% chance.\nDuration: 3 turn(s)\nIf the target's SPD is higher than the character's, damage dealt increases based on the difference.",
        "scope": "Target",
        "source": "S (Kurayami)",
        "skill_id": 2513
      },
      {
        "char_name": "Astaroth",
        "char_icon": "27_Astaroth",
        "skill_name": "Flame Shot",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Forms a fireball at the fingertips and launches it at the enemy.\nTarget hit is inflicted with (3.5%) Burn at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 2701
      },
      {
        "char_name": "Astaroth",
        "char_icon": "27_Astaroth",
        "skill_name": "Heat Wave",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks ALL enemies by burning the ground beneath them with flames.\nTargets hit are inflicted with (3.5%) Burn at a 60% chance.\nDuration: 3 turn(s)\nIf the target is in Burn state, inflict additional Burn.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 2702
      },
      {
        "char_name": "Astaroth",
        "char_icon": "27_Astaroth",
        "skill_name": "Super Nova",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Fires a wave of fire, to attack ALL enemies.\nOn Last Attack, inflicts (3.5%) Burn at a 75% chance.\nDuration: 3 turn(s)\nFor each Burn on the target, increases DMG by 12.5%.",
        "scope": "Target",
        "source": "",
        "skill_id": 2703
      },
      {
        "char_name": "Kamimura Maika",
        "char_icon": "31_Maika",
        "skill_name": "Meido Bazooka <Grenade>",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "After jumping into the air, fires a super-heated flame bullet toward the ground, attacking ALL enemies.\nWhen an enemy is defeated by this skill, inflicts (3.5%) Burn to ALL enemies at a 90% chance.\nDuration: 3 turn(s)\nInflicts (3.5%) Burn before the attack to ALL enemies at a 75% chance.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 3103
      },
      {
        "char_name": "Hiiragi Fuyumi",
        "char_icon": "39_Fuyumi",
        "skill_name": "Taimanin Art: Spear",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Using the character's abilities and spear, attacks the enemy a total of 3 times.\nTarget hit is inflicted with (3.5%) Burn at a 5% chance.\nDuration: 3 turn(s)\nDamage increases in proportion to HP lost.",
        "scope": "Target",
        "source": "",
        "skill_id": 3901
      },
      {
        "char_name": "Hiiragi Fuyumi",
        "char_icon": "39_Fuyumi",
        "skill_name": "Surprise Dust",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Throws a spear imbued with the character's abilities, attacking the enemy 1 time.\nInflicts (3.5%) Burn to the target at a 80% chance.\nDuration: 3 turn(s)\nIf the target's HP is 70% or more, performs a (90%) DEF Penetrate attack.\nIf the target's HP is less than 70%, reduces Turn Gauge by (15%) at a 85% chance.",
        "scope": "Target",
        "source": "",
        "skill_id": 3903
      },
      {
        "char_name": "Shinohara Mari",
        "char_icon": "51_Mari",
        "skill_name": "Scroll Bullet: Cold Heat Blast",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Loads the gauntlet with Ninja Art bullets and fires 4 shots at the enemy.\nTarget hit is inflicted with (3.5%) Burn at a 20% chance.\nDuration: 3 turn(s)\nOn the Last Attack, inflicts (25%) Freeze at a 30% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 5102
      },
      {
        "char_name": "Oomiya Mizuki",
        "char_icon": "57_Mizuki",
        "skill_name": "Fire Art: Demon Machine Gun",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Fires both Gatling Guns at the enemy, attacking a total of 14 times.\nEach time target is engulfed in flames, they are inflicted with (3.5%) Burn at a 5% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 5701
      },
      {
        "char_name": "Taimanin Library",
        "char_icon": "81_Library",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "[In preparation]",
        "scope": "Target",
        "source": "",
        "skill_id": 8101
      },
      {
        "char_name": "Taimanin Library",
        "char_icon": "81_Library",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "[In preparation]",
        "scope": "Target",
        "source": "",
        "skill_id": 8103
      },
      {
        "char_name": "Taimanin Library",
        "char_icon": "81_Library",
        "skill_name": "<Optical Stealth Blade> ",
        "skill_type": "[Passive Skill]",
        "skill_desc": "[In preparation]",
        "scope": "Target",
        "source": "S (Optical Stealth Blade)",
        "skill_id": 8114
      },
      {
        "char_name": "Renee",
        "char_icon": "101_Rene",
        "skill_name": "Boom and Justice!",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Places a bomb that explodes under the enemy.\nTarget hit is inflicted with (3.5%) Burn at a 80% chance. Stacks up to 3.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 10102
      },
      {
        "char_name": "Mirabell Bell",
        "char_icon": "103_Bell",
        "skill_name": "Satellite Beam",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Throws a signal beacon to mark the location where a bomb will fall, attacking ALL enemies.\nTargets hit are inflicted with (3.5%) Burn at a 75% chance.\nDuration: 3 turn(s)\nIf the target's HP is less than 30% after the attack, inflicts Faint at a 25% chance.\nDuration: 1 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 10303
      },
      {
        "char_name": "Kaji Tetsuji",
        "char_icon": "109_Tetsuji",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 10901
      },
      {
        "char_name": "Kaji Tetsuji",
        "char_icon": "109_Tetsuji",
        "skill_name": "",
        "skill_type": "[Support Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 10902
      },
      {
        "char_name": "Kaji Tetsuji",
        "char_icon": "109_Tetsuji",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 10903
      },
      {
        "char_name": "Kaji Tetsuji",
        "char_icon": "109_Tetsuji",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 10913
      },
      {
        "char_name": "Shishimura Denji",
        "char_icon": "110_Denji",
        "skill_name": "Explosive Art: Dust Cloud",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Throws a sugar cube at the enemy.\nTarget hit is inflicted with (3.5%) Burn at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 11001
      },
      {
        "char_name": "Shishimura Denji",
        "char_icon": "110_Denji",
        "skill_name": "Explosive Art: Particle Blast",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Crushes and scatters sugar cubes, dealing damage to ALL enemies 3 times.\nTarget hit is inflicted with (3.5%) Burn at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 11002
      },
      {
        "char_name": "Shishimura Denji",
        "char_icon": "110_Denji",
        "skill_name": "Explosive Expert",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Target hit is inflicted with (3.5%) Burn at a 10% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 11003
      },
      {
        "char_name": "Fuuma Hoensai",
        "char_icon": "111_Houensai",
        "skill_name": "Oil Art: Flame Disaster",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Breathes out fire, attacking ALL enemies 3 times.\nRemoves Shield from the targets.\nTargets hit are inflicted with (3.5%) Burn at a 20% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 11103
      },
      {
        "char_name": "Iwao Jotaro",
        "char_icon": "112_Joutaro",
        "skill_name": "",
        "skill_type": "[Passive Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 11203
      },
      {
        "char_name": "Iwao Jotaro",
        "char_icon": "112_Joutaro",
        "skill_name": "",
        "skill_type": "[Passive Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "S (Guren no Gankou)",
        "skill_id": 11213
      },
      {
        "char_name": "Fire Gargoyle",
        "char_icon": "147_Gargoyle2",
        "skill_name": "Gargoyle Breath",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Attacks the enemy by spitting flames from the mouth.\nTarget hit is inflicted with (3.5%) Burn at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 14701
      },
      {
        "char_name": "Blaze Dog",
        "char_icon": "149_Blackdog1",
        "skill_name": "Twin Breath",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks the enemy 3 times by emitting a powerful flame from the mouth.\nTarget hit is inflicted with (-19.5%) SPD DOWN at a 40% chance.\nDuration: 2 turn(s)\nIf the target has Heal Reduction, additionally inflicted with (3.5%) Burn by each attack.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 14902
      },
      {
        "char_name": "Volcano Worm",
        "char_icon": "172_Devilwim3",
        "skill_name": "Worm Blaze",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Fires a flame bullet into the air, attacking the enemy.\nTarget hit is inflicted with (3.5%) Burn at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 17201
      },
      {
        "char_name": "Drone Dog",
        "char_icon": "177_Drone1",
        "skill_name": "Tail Shot",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Shoots the target 6 times with the machine gun on its tail.\nTarget hit is inflicted with (3.5%) Burn at a 5% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 17701
      },
      {
        "char_name": "Cyborg Agent C-Type",
        "char_icon": "182_Cyborg1",
        "skill_name": "Heat Ray",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Fires laser beam from the eyes to attack the enemy 3 times.\nTarget hit is inflicted with (3.5%) Burn at a 20% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 18202
      },
      {
        "char_name": "Commodus",
        "char_icon": "185_Commodus",
        "skill_name": "Neutralization Protocol",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Flies up using a booster and fires a Gatling Gun at ALL enemies, attacking 5 times.\nEach time an attack lands, inflicts (3.5%) Burn at a 10% chance.\nDuration: 3 turn(s)\nWhen defeating an enemy with this skill, resets the Cooldown for Neutralization Protocol.",
        "scope": "Target",
        "source": "",
        "skill_id": 18502
      },
      {
        "char_name": "Tremor",
        "char_icon": "193_Earthquake",
        "skill_name": "Quad Fire Launcher",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks ALL enemies 5 times by firing grenades into the air.\nTargets hit are inflicted with (3.5%) Burn at a 10% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 19303
      },
      {
        "char_name": "Fire Geist",
        "char_icon": "201_Poltergeist2",
        "skill_name": "Hell Bullet",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Fires a ghostfire at the enemy, attacking 3 times.\nTarget hit is inflicted with (3.5%) Burn at a 5% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 20101
      },
      {
        "char_name": "Necroid Conjurer",
        "char_icon": "210_Skeletonmage2",
        "skill_name": "Vile Miasma",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Launches a fireball to attack the enemy.\nInflicts (4%) Burn on the target hit at a 25% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 21001
      },
      {
        "char_name": "Hell Demon",
        "char_icon": "223_Demonbeast",
        "skill_name": "Headbutt of the Underworld",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Charges at the enemy, attacking them with horns.\nTarget hit is inflicted with (3.5%) Burn at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 22301
      },
      {
        "char_name": "Hell Demon",
        "char_icon": "223_Demonbeast",
        "skill_name": "Flames of the Underworld",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When hit, inflicts (3.5%) Burn to the attacker at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 22303
      },
      {
        "char_name": "[Fire God] Kamimura Maika",
        "char_icon": "268_Maika",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 26801
      },
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
            "skill_name": "<In Memorial> Call of Anubis",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Spreads a wide spider web to attack ALL enemies.\nDMG increases by (10%) for every Poison the target has.\nTarget hit is inflicted with Sleep if the target has 3 or more Debuffs, including Poison on the Last Attack.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (In Memorial)",
            "skill_id": 7712
          },
          {
            "char_name": "Furfur",
            "char_icon": "65_Furfur",
            "skill_name": "<Hræsvelgr> Demon Bug: Firefly",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Small demon insects trigger a chain of explosions, attacking ALL enemies 3 times.\nInflicts (2.5%) Poison at a 75% chance on the Last Attack for 2 times.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Hræsvelgr)",
            "skill_id": 6512
          },
          {
            "char_name": "Tekkain Kaworu",
            "char_icon": "74_Kaworu",
            "skill_name": "<Murakumo Iron Chains> Chain Art: Chain Frenzy",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Swings the chain randomly, attacking ALL enemies 6 times.\nTargets hit is inflicted with (2.5%) Poison at a 10% chance.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Murakumo Iron Chains)",
            "skill_id": 7413
          },
          {
            "char_name": "Onigumo Saburo",
            "char_icon": "94_Saburo",
            "skill_name": "<Kogoro Plush> The 18th Saburo",
            "skill_type": "[Passive Skill]",
            "skill_desc": "If the character is inflicted with a Debuff, inflicts ALL enemies with (2.5%) Poison at a 60% chance.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Kogoro Plush)",
            "skill_id": 9412
          },
          {
            "char_name": "Igawa Senshu",
            "char_icon": "91_Sensyu",
            "skill_name": "<Poison Dragon Claw> Poisonous Raksha",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Removes all Poison Debuffs from the character when hit.\nIf this skill is on Cooldown, increases Poison DMG by a fixed 3% at a 50% chance on every attack's Last Attack.",
            "scope": "AoE",
            "source": "S (Poison Dragon Claw)",
            "skill_id": 9112
          },
          {
            "char_name": "Snake Lady",
            "char_icon": "71_Snakelady",
            "skill_name": "<Blue Viper> Venom Smash",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Attacks the enemy with a powerful dropkick.\nGains (50%) CRIT DMG UP before the attack.\nDuration : 2 turn(s)\nDamage increases in proportion to target's current HP if the target has 2 or more Debuffs, including Poison.",
            "scope": "Self",
            "source": "S (Blue Viper)",
            "skill_id": 7113
          },
          {
            "char_name": "Momochi Toyo",
            "char_icon": "53_Toyo",
            "skill_name": "<Magatsuki> Momochi Style Ultimate: Kodoku",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "After launching a series of attacks with the weapons covering the body, finishes the enemy with the blade on the back.\nIncreases the effect of Bleed, Poison, and Burn on the target hit by 10%, a fixed 3%, and a fixed 5% respectively.\nDMG increases by (55%) for each Debuff the target has.\nThe effect applies up to 4 stacks.",
            "scope": "Self",
            "source": "S (Magatsuki)",
            "skill_id": 5313
          },
          {
            "char_name": "Pamela Jäger",
            "char_icon": "102_Yeager",
            "skill_name": "<Crimson Reaper> Jäger Cross",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Quickly launches at the enemy and slashes them in a cross-shape and explodes, attacking 3 time(s).\nIf the enemy isn't the only one remaining, performs a (30%) Bleed, Burn, Poison Debuff Resonance attack.\nIf the enemy is the only one remaining, performs a (45%) Bleed, Burn, Poison Debuff Resonance attack.",
            "scope": "Self",
            "source": "S (Crimson Reaper)",
            "skill_id": 10213
          },
      {
        "char_name": "Momochi Toyo",
        "char_icon": "53_Toyo",
        "skill_name": "Momochi Sword Style: Mantis",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Hold the sword with both hands and swing it strongly to cut down the enemy.\nTarget hit is inflicted with (10%) Bleed at a 15% chance.\nDuration: 3 turn(s)\nInflict (2.5%) Poison at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 5301
      },
      {
        "char_name": "Momochi Toyo",
        "char_icon": "53_Toyo",
        "skill_name": "Momochi Assassin Arts: Serpent",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Draws two swords from the back and quickly stabs the enemy 7 times.\nTarget hit is inflicted with Immobilize at a 5% chance.\nDuration: 2 turn(s)\nWhen defeating an enemy, inflicts ALL enemies with (2.5%) Poison at a 60% chance.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 5302
      },
      {
        "char_name": "Furfur",
        "char_icon": "65_Furfur",
        "skill_name": "Demon Bug: Firefly",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Small demon insects trigger a chain of explosions, attacking ALL enemies 3 times.\nInflicts (2.5%) Poison at a 75% chance on the Last Attack.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 6502
      },
      {
        "char_name": "Furfur",
        "char_icon": "65_Furfur",
        "skill_name": "Demon Bug: Swarm",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Summons a swarm of demonic insects to attack ALL enemies 3 times.\nEvery attack inflicts (2.5%) Poison at a 35% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 6503
      },
      {
        "char_name": "Furfur",
        "char_icon": "65_Furfur",
        "skill_name": "<Harpy> Demon Bug: Swarm",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Summons a swarm of demonic insects to attack ALL enemies 3 times.\nEvery attack inflicts (3%) Poison at a 35% chance.\nDuration: 3 turn(s)\nDecreases the skill's Cooldown by 1 turn.",
        "scope": "Target",
        "source": "S (Harpy)",
        "skill_id": 6513
      },
      {
        "char_name": "Snake Lady",
        "char_icon": "71_Snakelady",
        "skill_name": "Snake Kick",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks the enemy 2 times with a powerful kick.\nInflicts (2.5%) Poison for each Buff the target has before the attack.\nApplies up to a Max. 3 stacks.\nPerforms a (30%) Poison Debuff Resonance attack.\nRemoves Random Buffs equal to the number of Poison application attempts made by this attack after the attack.",
        "scope": "Target",
        "source": "",
        "skill_id": 7102
      },
      {
        "char_name": "Anemone",
        "char_icon": "77_Anemone",
        "skill_name": "Princess of Arachne Clan",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If no damage is taken during the enemy's turn, inflicts (2.5%) Poison on 1 Random enemy.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 7704
      },
      {
        "char_name": "Igawa Senshu",
        "char_icon": "91_Sensyu",
        "skill_name": "Taimanin Art: Poison Claws",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Jumps up into the air, slashing the enemy.\nTarget hit is inflicted with (2.5%) Poison at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 9101
      },
      {
        "char_name": "Igawa Senshu",
        "char_icon": "91_Sensyu",
        "skill_name": "Poison Claw Slash",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Concentrates and attacks ALL enemies with a giant slash.\nRemoves 1 Random Buff from the target hit.\nTarget hit is inflicted with (2.5%) Poison at a 60% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 9103
      },
      {
        "char_name": "Onigumo Saburo",
        "char_icon": "94_Saburo",
        "skill_name": "Daigoro Airstrike",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Summons Demon Beast Daigoro and attacks the enemy.\nTarget hit is inflicted with (2.5%) Poison at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 9401
      },
      {
        "char_name": "Merriam",
        "char_icon": "104_Miriam",
        "skill_name": "Poison Spell",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Creates a magic sigil under the enemy, to attack.\nTarget hit is inflicted with (2.5%) Poison at a 65% chance.\nDuration: 3 turn(s)\nWhen defeating an enemy with this skill, inflicts (2.5%) Poison to ALL enemies at a 60% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 10402
      },
      {
        "char_name": "Acid Worm",
        "char_icon": "171_Devilwim2",
        "skill_name": "Worm Acid",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Fires an acid bullet into the air, attacking the enemy.\nTarget hit is inflicted with (2.5%) Poison at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 17101
      },
      {
        "char_name": "Poison Hound",
        "char_icon": "196_Devilsdog2",
        "skill_name": "Maul",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Bites the enemy hard to attack.\nTarget hit is inflicted with (2.5%) Poison at a 20% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 19601
      },
      {
        "char_name": "Mutated Zombie Creature Type-A",
        "char_icon": "198_Zombie1",
        "skill_name": "Venom Spray",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Spits acidic fluid from the mouth at ALL enemies to attack 3 times.\nInflicts (2.5%) Poison at a 50% chance on the Last Attack.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 19802
      },
      {
        "char_name": "[Demon God] Aishu Hebiko",
        "char_icon": "274_Hebiko",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 27402
      },
      {
        "char_name": "[Demon God] Aishu Hebiko",
        "char_icon": "274_Hebiko",
        "skill_name": "",
        "skill_type": "[Passive Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 27404
      },
      {
        "char_name": "[True Awakening] Igawa Asagi",
        "char_icon": "285_Asagi",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 28501
      },
      {
        "char_name": "[True Awakening] Igawa Asagi",
        "char_icon": "285_Asagi",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 28502
      },
      {
        "char_name": "[True Awakening] Igawa Asagi",
        "char_icon": "285_Asagi",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 28503
      },
      {
        "char_name": "Kaliya",
        "char_icon": "300_Kaliya",
        "skill_name": "Deadly Claws",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Scratches the target with claws, attacking 2 times.\nEvery claw attack inflicts (2.5%) Poison at a 10% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 30001
      },
      {
        "char_name": "Kaliya",
        "char_icon": "300_Kaliya",
        "skill_name": "Snake Goddess' Hunt",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Swings claws in a wide arc to slash the target.\nIf the target hit is afflicted with Poison, recovers the HP of the ally with the lowest HP by 60% of the target's lost HP.\nIf the target hit is not afflicted with Poison, inflicts (2.5%) Poison.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 30003
      },
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
            "char_name": "Amadare Natsume",
            "char_icon": "20_Natsume",
            "skill_name": "<Witch Sleeve> Alluring Touch",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Attacks ALL enemies with alluring gestures.\nTarget hit is Taunted at a 45% chance.\nDuration: 2 turn(s)\nIf the target already is Taunted, puts them in Confusion state at a fixed chance of 30%.\nDuration: 1 turn(s)\nIf the target is an Agility type, decreases (15%) of their Turn Gauge at a 95% chance.",
            "scope": "AoE",
            "source": "S (Witch Sleeve)",
            "skill_id": 2012
          },
          {
            "char_name": "Inokura Suzuka",
            "char_icon": "118_Suzuka",
            "skill_name": "<Shiranami> Scarlet Art: Scarlet Miasma",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Spreads Scarlet Art forward to attack ALL enemies.\nWhen attacking a target with 3 or more Debuffs, inflicts Confusion at a 55% chance.\nDuration: 1 turn(s)",
            "scope": "AoE",
            "source": "S (Shiranami)",
            "skill_id": 11813
          },
          {
            "char_name": "Yuri",
            "char_icon": "8_Yukiha",
            "skill_name": "<Yamidachi> Snow Assassin",
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
            "skill_name": "<Crystal Staff> Ice Fall",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Creates a large ice crystal and drops it on top of ALL enemies.\nTargets hit are inflicted with (25%) Freeze at a 35% chance.\nIf the character has 2 or more Buffs, inflicts Freeze at a 45% chance.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Crystal Staff)",
            "skill_id": 313
          },
      {
        "char_name": "Shirayuki",
        "char_icon": "3_Shirayuki",
        "skill_name": "Cluster Ice Blaster",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Forms ice crystals from the staff and fires them at the enemy.\nTargets hit are inflicted with (25%) Freeze at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 301
      },
      {
        "char_name": "Shirayuki",
        "char_icon": "3_Shirayuki",
        "skill_name": "Ice Laser",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Fires a powerful ice beam that pierces the enemy.\nWhen attacking a Technique type target, inflicts (25%) Freeze at a 45% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 302
      },
      {
        "char_name": "Shirayuki",
        "char_icon": "3_Shirayuki",
        "skill_name": "Ice Fall",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Creates a large ice crystal and drops it on top of ALL enemies.\nTargets hit are inflicted with (25%) Freeze at a 35% chance.\nIf there are 3 or more Debuffs, inflicts Freeze at a 45% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 303
      },
      {
        "char_name": "Onisaki Kirara",
        "char_icon": "24_Kirara",
        "skill_name": "Frozen Leopard Fist",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Throws 4 consecutive punches at the enemy.\nOn Last Attack, target hit is inflicted with (25%) Freeze at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 2401
      },
      {
        "char_name": "Onisaki Kirara",
        "char_icon": "24_Kirara",
        "skill_name": "Frost Edge",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Jumps into the air and slams the ground, attacking ALL enemies.\nDMG increases in proportion to their DEF\nIf the target has SPD DOWN applied when attacking, inflicts (25%) Freeze at a 25% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 2402
      },
      {
        "char_name": "Shinohara Mari",
        "char_icon": "51_Mari",
        "skill_name": "Scroll Bullet: Cold Heat Blast",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Loads the gauntlet with Ninja Art bullets and fires 4 shots at the enemy.\nTarget hit is inflicted with (3.5%) Burn at a 20% chance.\nDuration: 3 turn(s)\nOn the Last Attack, inflicts (25%) Freeze at a 30% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 5102
      },
      {
        "char_name": "Laetitia Bellmer",
        "char_icon": "75_Laetitia",
        "skill_name": "Aqua Lance",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Throws a spear at the enemy.\nTarget hit is inflicted with (25%) Freeze at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 7501
      },
      {
        "char_name": "Cold Sur",
        "char_icon": "173_Schill1",
        "skill_name": "Sur Drop",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Spits water droplets, attacking the enemy.\nTarget hit is inflicted with (25%) Freeze at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 17301
      },
      {
        "char_name": "Fire Geist",
        "char_icon": "201_Poltergeist2",
        "skill_name": "Hell Curse",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Curses the enemy, attacking 3 times.\nTarget hit is inflicted with (25%) Freeze at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 20102
      },
      {
        "char_name": "[Gosha] Onisaki Kirara",
        "char_icon": "246_Kirara",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 24603
      },
      {
        "char_name": "[Halloween] Onisaki Kirara",
        "char_icon": "261_Kirara",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 26102
      },
      {
        "char_name": "[Halloween] Onisaki Kirara",
        "char_icon": "261_Kirara",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 26103
      },
      {
        "char_name": "[Frost God] Onisaki Kirara",
        "char_icon": "276_Kirara",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 27603
      },
      {
        "char_name": "Ragnarok",
        "char_icon": "301_Ragnarok",
        "skill_name": "Frosty Gale",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Gracefully spins and throws an ice pillar toward the enemy to attack them 3 time(s).\nThe target hit is inflicted with (25%) Freeze at a 25% chance on the Last Attack.\nDuration: 2 turn(s)\nIf Onisaki Kirara is deployed, the Freeze effect increases by 100% after the attack.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 30102
      },
      ]
      },
      {
        "id": "immobilize",
        "name": "Immobilize",
        "group": "Crowd Control",
        "scope": "debuff",
        "characters": [

          {
            "char_name": "Yuri Hisui",
            "char_icon": "41_Hisui",
            "skill_name": "<Jizo's Steel Staff> Eclipse Meld: Resonate",
            "skill_type": "[Passive Skill]",
            "skill_desc": "Using a skill on every 4th turn grants an additional effect.\nWhen using Monk Staff Art, Healing Effect increases by (100%).\nWhen using Eclipse Meld: Syphoning Strike, inflicts Immobilize on an enemy at a 50% chance.\nDuration: 2 turn(s)\nWhen using Eclipse Meld: Sound, grants a (7%) Healing Over Time to all allies for 2 turn(s).",
            "scope": "AoE",
            "source": "S (Jizo's Steel Staff)",
            "skill_id": 4114
          },
          {
            "char_name": "Mizuki Shiranui",
            "char_icon": "13_Shiranui",
            "skill_name": "<Hannyagiri> Water Art: Crushing Wave",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Creates a huge wave and sends it to the enemy, target hit is inflicted with Immobilize at a 60% chance.\nDuration: 2 turn(s)\nIf the character has 2 or more Buffs, increases the duration of 1 Random Buff held by ALL allies for 1 turn(s) after the attack.",
            "scope": "AoE",
            "source": "S (Hannyagiri)",
            "skill_id": 1312
          },
          {
            "char_name": "Momochi Toyo",
            "char_icon": "53_Toyo",
            "skill_name": "<Utzuro> Momochi Assassin Arts: Serpent",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Draws two swords from the back and stabs the enemy 7 times.\nTarget hit is inflicted with Immobilize at a 5% chance.\nDuration: 2 turn(s)\nWhen enemy is defeated, inflicts ALL enemies with (3.5%) Burn at a 60% chance.\nDuration: 3 turn(s)",
            "scope": "AoE",
            "source": "S (Utzuro)",
            "skill_id": 5312
          },
          {
            "char_name": "Yao Bikuni",
            "char_icon": "97_Yaobikuni",
            "skill_name": "<Dawnbreaker Staff> Soul Wave",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Fires a powerful laser at the enemy.\nTarget hit is inflicted with Immobilize at a 30% chance.\nDuration: 2 turn(s)\nIncreases all skill Cooldown of the target by 1 turn(s).",
            "scope": "AoE",
            "source": "S (Dawnbreaker Staff)",
            "skill_id": 9712
          },
      {
        "char_name": "Mizuki Shiranui",
        "char_icon": "13_Shiranui",
        "skill_name": "Water Art: Crushing Wave",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Creates a huge wave and sends it to the enemy,\ntarget is inflicted with Immobilize at a 60% chance.\nIf the target has 3 or more Debuffs, 2 Random Debuff turns are increased by 1 turn(s).\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 1302
      },
      {
        "char_name": "Shirase Yuzuriha",
        "char_icon": "17_Yuzuriha",
        "skill_name": "Silk Barrier",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Deploys wires to suspend ALL enemies in midair, then instantly slices and attacks them.\nTarget hit is inflicted with (-19.5%) SPD DOWN at a 90% chance on the Last Attack.\nDuration: 2 turn(s)\nIf the target already has SPD DOWN, additionally inflicts Immobilize at a 35% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 1703
      },
      {
        "char_name": "Fuuma Tokiko",
        "char_icon": "28_Tokiko",
        "skill_name": "Fuuma Martial Art: Soaring Swallow",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Throws a kunai 3 times at the enemy.\nTarget hit is inflicted with Immobilize at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 2801
      },
      {
        "char_name": "Kousaka Shizuru",
        "char_icon": "29_Shizuru",
        "skill_name": "Taimanin Art: Thorn Rose",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Cracks the whip to attack the enemy 3 times.\nTarget hit is inflicted with Immobilize at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 2901
      },
      {
        "char_name": "Yuri Hisui",
        "char_icon": "41_Hisui",
        "skill_name": "Eclipse Meld: Resonate",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Every 5 turns, using a skill grants an additional effect.\nWhen using Monk Staff Art, Healing Effect increases by (100%).\nWhen using Eclipse Meld: Syphoning Strike, inflicts Immobilize on an enemy at a 50% chance.\nDuration: 2 turn(s)\nWhen using Eclipse Meld: Sound, grants a (7%) Healing Over Time to all allies for 2 turn(s).",
        "scope": "Target",
        "source": "",
        "skill_id": 4104
      },
      {
        "char_name": "Momochi Toyo",
        "char_icon": "53_Toyo",
        "skill_name": "Momochi Assassin Arts: Serpent",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Draws two swords from the back and quickly stabs the enemy 7 times.\nTarget hit is inflicted with Immobilize at a 5% chance.\nDuration: 2 turn(s)\nWhen defeating an enemy, inflicts ALL enemies with (2.5%) Poison at a 60% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 5302
      },
      {
        "char_name": "Tekkain Kaworu",
        "char_icon": "74_Kaworu",
        "skill_name": "Chain Art: Sinister Snare",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Target hit is inflicted with Immobilize at a 30% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 7402
      },
      {
        "char_name": "Anemone",
        "char_icon": "77_Anemone",
        "skill_name": "Tsuchigumo's Net",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Attacks the enemy by hurling a bundle of webs.\nTarget hit is inflicted with (-19.5%) SPD DOWN at a 20% chance.\nDuration: 2 turn(s)\nIf the target already has SPD DOWN, they're inflicted with Immobilize at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 7701
      },
      {
        "char_name": "Yao Bikuni",
        "char_icon": "97_Yaobikuni",
        "skill_name": "Soul Wave",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Fires a powerful laser at the enemy.\nTarget hit is inflicted with Immobilize at a 30% chance.\nDuration: 2 turn(s)\nReduces the target's Turn Gauge by (15%) at a 50% chance.",
        "scope": "Target",
        "source": "",
        "skill_id": 9702
      },
      {
        "char_name": "Renee",
        "char_icon": "101_Rene",
        "skill_name": "Handgun of Justice!",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Takes out the gun hidden in the chest and fires at the enemy.\nTarget hit is Immobilized at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 10101
      },
      {
        "char_name": "Fuuma Yukina",
        "char_icon": "106_Yukina",
        "skill_name": "Evil Eye: Avici",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Uses Evil Eye: Avici to attack ALL enemies.\nTarget hit is inflicted with Immobilize at a 45% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 10602
      },
      {
        "char_name": "Incubus (Binding)",
        "char_icon": "167_Incubus2",
        "skill_name": "Binding Flames",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Attacks by creating flames under the target's feet.\nTarget hit is inflicted with Immobilize at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 16701
      },
      {
        "char_name": "Kanaloa",
        "char_icon": "175_Kanaroa",
        "skill_name": "Abyss Tentacle",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Stabs a tentacle into the ground, attacking the enemy.\nTarget hit is inflicted with Immobilize at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 17501
      },
      ]
      },
      {
        "id": "sleep",
        "name": "Sleep",
        "group": "Crowd Control",
        "scope": "debuff",
        "characters": [
      {
        "char_name": "Annerose Vajra",
        "char_icon": "33_Annerose",
        "skill_name": "Phantom Flash: Crimson",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Rapidly slashes the enemy 4 time(s) from various angles.\nTarget hit is inflicted with Sleep at a 20% chance on the Last Attack, and if the target is a boss, the chance becomes 70%.\nDuration: 2 turn(s)\nTarget hit is inflicted with (-40%) DEF DOWN at a 90% chance on the Last Attack, and if the target is a boss, inflicts (-60%) DEF DOWN at a 99% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 3302
      },
      {
        "char_name": "Anemone",
        "char_icon": "77_Anemone",
        "skill_name": "Call of Anubis",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks ALL enemies by unleashing a wide web.\nDMG increases by (10%) for every Poison the target has.\nTarget hit is inflicted with Sleep at a 50% chance if the target has 2 or more Debuffs, including Poison on the Last Attack.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 7702
      },
      {
        "char_name": "Anemone",
        "char_icon": "77_Anemone",
        "skill_name": "<In Memorial> Call of Anubis",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Spreads a wide spider web to attack ALL enemies.\nDMG increases by (10%) for every Poison the target has.\nTarget hit is inflicted with Sleep if the target has 3 or more Debuffs, including Poison on the Last Attack.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "S (In Memorial)",
        "skill_id": 7712
      },
      {
        "char_name": "Nemuri Suiki",
        "char_icon": "128_Suiki",
        "skill_name": "Daydream",
        "skill_type": "[Support Skill]",
        "skill_desc": "[In preparation]",
        "scope": "Self",
        "source": "",
        "skill_id": 12802
      },
      {
        "char_name": "Nemuri Suiki",
        "char_icon": "128_Suiki",
        "skill_name": "<> Daydream",
        "skill_type": "[Support Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 12812
      },
      {
        "char_name": "Aello",
        "char_icon": "153_Harpy",
        "skill_name": "Sleeping Wind",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Flaps wings and send a blast of wind toward the enemy.\nTarget hit is inflicted with Sleep at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 15301
      },
      {
        "char_name": "Succubus (Whisper)",
        "char_icon": "168_Succubus1",
        "skill_name": "Dream Claw",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Slashes the enemy with sharp claws.\nTarget hit is inflicted with Sleep at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 16801
      },
      {
        "char_name": "Phantasma",
        "char_icon": "194_Phantasma",
        "skill_name": "Succubus Whispers",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Seduces with alluring movements, then explodes a giant heart to deal damage to ALL enemies.\nIf Lilim is deployed in the squad, inflicts (-28.5%) EVD DOWN on ALL enemies at a 99% chance before the attack.\nDuration: 2 turn(s)\nInflicts Sleep at a 55% chance on the Last Attack.\nDuration: 2 turn(s)\nIf the targets are not inflicted with Sleep, extends the duration of all targets' Debuffs by 1 turn(s) on the Last Attack.",
        "scope": "Target",
        "source": "",
        "skill_id": 19403
      },
      {
        "char_name": "Phantasma",
        "char_icon": "194_Phantasma",
        "skill_name": "<Dazzling Dream-Eye> Succubus Whispers",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Seduces with alluring movements, then explodes a giant heart to deal damage to ALL enemies.\nInflicts (-35%) CRIT RES DOWN on ALL enemies at a 99% chance before the attack.\nDuration: 2 turn(s)\nInflicts Sleep at a 60% on the Last Attack.\nDuration: 2 turn(s)\nIf the targets are not inflicted with Sleep on the Last Attack, inflicts Passive Skill Disabled effect at a 99% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "S (Dazzling Dream-Eye)",
        "skill_id": 19413
      },
      ]
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
            "skill_name": "<Kraken Anchor> Tentacle Ambush",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Drives tentacles into the ground, attacking 1 Random enemy.\nTarget hit is inflicted with Faint at a 8% chance.\nDuration: 1 turn(s)",
            "scope": "Self",
            "source": "S (Kraken Anchor)",
            "skill_id": 8411
          },
          {
            "char_name": "Nisha Gaiza",
            "char_icon": "55_Gaiza",
            "skill_name": "<Nakigara> Grudgeful Strike",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Ruthlessly slashes the sword at the enemy 9 times.\nTarget hit is inflicted with Faint at a 20% chance.\nDuration: 1 turn(s)\nIncreases target's DMG by (45%) per Buff they have.\nStacks up to 3.",
            "scope": "Self",
            "source": "S (Nakigara)",
            "skill_id": 5513
          },
          {
            "char_name": "Shinohara Mari",
            "char_icon": "51_Mari",
            "skill_name": "<Gear Bracelet> Earth Art: Stone Spear",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Performs a Power Hit on the ground and attacks ALL enemies.\nIf the target has 2 or more Debuffs, inflicts them with Faint.\nDuration: 1 turn(s)",
            "scope": "AoE",
            "source": "S (Gear Bracelet)",
            "skill_id": 5113
          },
          {
            "char_name": "Fuuma Mawari",
            "char_icon": "108_Mawari",
            "skill_name": "<Ushio> Dumbo Attack!?",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Runs toward the enemy and trips to do a headbutt attack.\nTarget is inflicted with Faint at a 20% chance.\nDuration: 1 turn(s)",
            "scope": "Self",
            "source": "S (Ushio)",
            "skill_id": 10812
          },
          {
            "char_name": "Uehara Rin",
            "char_icon": "32_Rin",
            "skill_name": "<Lightning Saber II Raizin> Lightning Art: Chain Volt",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Overcharges both swords with electricity and slashes at the enemy.\nRemoves the target's 1 Random Buffs and inflicts Faint at a 20% chance on the Last Attack.\nDuration: 1 turn(s)\nIf the character performs CRIT ATK, absorbs (12.5%) of the Turn Gauge at a 60% chance.\nIf the character has Overclock, increases CRIT Rate by (37.5%).",
            "scope": "Self",
            "source": "S (Lightning Saber II Raizin)",
            "skill_id": 3213
          },
      {
        "char_name": "Uehara Rin",
        "char_icon": "32_Rin",
        "skill_name": "Volt Rush",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Spins around and slashes ALL enemies with blades attached to the back 5 times.\nIf the target is inflicted with Electrocute, additionally inflicts them with Faint at a 5% chance.\nDuration: 1 turn(s)\nOn Last Attack, if the target is inflicted with Faint, reduces the Turn Gauge by (15%) at a 50% chance.",
        "scope": "Target",
        "source": "",
        "skill_id": 3202
      },
      {
        "char_name": "Annerose Vajra",
        "char_icon": "33_Annerose",
        "skill_name": "<Abyssal Rakshasa> Phantom Flash: Crimson",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Rapidly slashes the enemy 4 time(s) from various angles.\nTarget hit is inflicted with Faint at a 15% chance on the Last Attack, and if the target is a boss, the chance becomes 45%.\nDuration: 1 turn(s)\nTarget hit is inflicted with (18%) Weaken at a 40% chance on the Last Attack, and if the target is a boss, inflicts (27%) Weaken at a 60% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "S (Abyssal Rakshasa)",
        "skill_id": 3312
      },
      {
        "char_name": "Shinohara Mari",
        "char_icon": "51_Mari",
        "skill_name": "Power Fist: Chain Explosion",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Strikes an enemy 2 times with a powerful punch, then shoots flame bullets for the finishing move.\nTarget hit is inflicted with Faint at a 5% chance.\nDuration: 1 turn(s)\nDamage increases in proportion to DEF.",
        "scope": "Target",
        "source": "",
        "skill_id": 5101
      },
      {
        "char_name": "Nisha Gaiza",
        "char_icon": "55_Gaiza",
        "skill_name": "Grudgeful Strike",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Ruthlessly slashes the sword at the enemy 9 times.\nTarget hit is inflicted with Faint at a 20% chance.\nDuration: 1 turn(s)\nDMG increases (45%) when attacking a target with no Buff",
        "scope": "Target",
        "source": "",
        "skill_id": 5503
      },
      {
        "char_name": "Touge Kinki",
        "char_icon": "60_Tougekinki",
        "skill_name": "Iron Demon Style: Metal Chop",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Attacks the enemy with sword techniques faster than the eye.\nPerforms a (60%) DEF Penetrate attack.\nInflicts Faint to the target upon attack at a 20% chance.\nDuration: 1 turn(s)\nRemoves 1 Random Buffs the target has on before the attack.",
        "scope": "Target",
        "source": "",
        "skill_id": 6003
      },
      {
        "char_name": "Francis",
        "char_icon": "68_Francis",
        "skill_name": "Victory☆Grenade",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Flings a gigantic grenade to attack ALL enemies.\nWhen attacking a target with DEF DOWN, increases CRIT DMG by (55%).\nTargets hit are inflicted with Faint at a 15% chance.\nDuration: 1 turn(s)\nDMG increases in proportion to the value of the target's DEF DOWN.\nRemoves DEF DOWN from targets hit after the attack.",
        "scope": "Target",
        "source": "",
        "skill_id": 6803
      },
      {
        "char_name": "Snake Lady",
        "char_icon": "71_Snakelady",
        "skill_name": "Venom Smash",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Attacks the enemy with a powerful dropkick.\nIf the target is Offense Type, inflicts (-40%) CRIT RES DOWN at a 99% chance. \nDuration : 2 turn(s)\nIf the target is Defense Type, inflicts (22.5%) Weaken at a 65% chance.\nDuration : 2 turn(s)\nIf the target is Support Type, inflicts Faint at a 25% chance.\nDuration : 1 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 7103
      },
      {
        "char_name": "Uehara Shikanosuke",
        "char_icon": "80_Shikanosuke",
        "skill_name": "Elec Art: Spark",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks the enemy 4 times by releasing electricity from the palm.\nPerforms a (50%) DEF Penetrate attack.\nTarget hit is inflicted with Electrocute at a 5% chance.\nDuration: 2 turn(s)\nIf the target is already inflicted with Electrocute, additionally inflicts Faint at a 5% chance.\nDuration: 1 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 8002
      },
      {
        "char_name": "Anje",
        "char_icon": "84_Anje",
        "skill_name": "Tentacle Ambush",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Drives tentacles into the ground to attack the enemy.\nTarget hit is inflicted with Faint at a 8% chance.\nDuration: 1 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 8401
      },
      {
        "char_name": "Dobashi Gonza",
        "char_icon": "92_Gonza",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 9202
      },
      {
        "char_name": "Dobashi Gonza",
        "char_icon": "92_Gonza",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 9212
      },
      {
        "char_name": "Yaguruma Yaemon",
        "char_icon": "96_Yaemon",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 9601
      },
      {
        "char_name": "Elvira",
        "char_icon": "100_Elvira",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "[In preparation]",
        "scope": "Target",
        "source": "",
        "skill_id": 10003
      },
      {
        "char_name": "Mirabell Bell",
        "char_icon": "103_Bell",
        "skill_name": "Satellite Beam",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Throws a signal beacon to mark the location where a bomb will fall, attacking ALL enemies.\nTargets hit are inflicted with (3.5%) Burn at a 75% chance.\nDuration: 3 turn(s)\nIf the target's HP is less than 30% after the attack, inflicts Faint at a 25% chance.\nDuration: 1 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 10303
      },
      {
        "char_name": "Fuuma Mawari",
        "char_icon": "108_Mawari",
        "skill_name": "Dumbo Attack!?",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Runs towards the enemy and do a headbutt attack while falling.\nInflicts Faint to the character and the target at a 30% chance.\nDuration: 1 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 10802
      },
      {
        "char_name": "Watarase Tsumugi",
        "char_icon": "116_Tsumugi",
        "skill_name": "Heavy Smash",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Attacks the enemy by swinging the hammer in a large arc from above the head.\nIf the target hit has 2 or more Debuffs, inflicts Faint at a 5% chance.\nDuration: 1 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 11601
      },
      {
        "char_name": "Orc Executor",
        "char_icon": "133_Rakorc1",
        "skill_name": "Machete Slash",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Swings a machete with one hand to attack the enemy.\nTarget hit is inflicted with Faint at a 5% chance.\nDuration: 1 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 13301
      },
      {
        "char_name": "Orc Bodyguard",
        "char_icon": "137_Rakorcchief",
        "skill_name": "Hurricane Strike",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Spins and attacks ALL enemies 5 times.\nEvery time a CRIT ATK occurs, inflicts Faint at a 8% chance.\nDuration: 1 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 13702
      },
      {
        "char_name": "Horseman Warrior",
        "char_icon": "152_Horseman2",
        "skill_name": "Horse Spear",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Throws a spear to attack the enemy.\nTarget hit is inflicted with Faint at a 8% chance.\nDuration: 1 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 15201
      },
      {
        "char_name": "Cult Knight",
        "char_icon": "161_Darkknight2",
        "skill_name": "Cultist Mace",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Attacks the enemy by swinging a cudgel.\nTarget hit is inflicted with Faint at a 8% chance.\nDuration: 1 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 16101
      },
      {
        "char_name": "Succubus (Whisper)",
        "char_icon": "168_Succubus1",
        "skill_name": "Nightmare Tail",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Appears behind the target and attacks the enemy 2 time(s) with the tail.\nWhen attacking a target in a Sleep state, inflicts Faint to the target at a 15% chance.\nDuration: 1 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 16802
      },
      {
        "char_name": "Bone Suit Fighter",
        "char_icon": "192_Fighter2",
        "skill_name": "Iron Rush",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Swings both fists aggressively in turns to strike the target 4 times.\nTarget hit is inflicited with Faint at a 20% chance on the Last Attack.\nDuration: 1 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 19202
      },
      {
        "char_name": "Grave Geist",
        "char_icon": "200_Poltergeist1",
        "skill_name": "Grave Fall",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Drops a tombstone on the enemy.\nTarget hit is inflicted with Faint at a 8% chance.\nDuration: 1 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 20001
      },
      {
        "char_name": "Dullahan",
        "char_icon": "212_Dullahan",
        "skill_name": "Dark Lightning",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Strikes the enemy with a powerful lightning bolt to attack.\nInflicts Faint on the target hit at a 20% chance.\nDuration: 1 turn(s)\nInflicts (-47.5%) CRIT RES DOWN on the target hit at a 99% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 21202
      },
      {
        "char_name": "Dullahan",
        "char_icon": "212_Dullahan",
        "skill_name": "<Wraith's Black Armor> Dark Lightning",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Strikes the enemy with a powerful lightning bolt to attack.\nInflicts Faint on the target hit at a 20% chance.\nDuration: 1 turn(s)\nInflicts (-80%) CRIT DMG DOWN on the target hit at a 99% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "S (Wraith's Black Armor)",
        "skill_id": 21212
      },
      {
        "char_name": "[Gosha] Shinohara Mari",
        "char_icon": "248_Mari",
        "skill_name": "<Cure Randoseru> Everyone's Rep",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Inflicts Faint on ALL enemies if one of the allies is defeated.\nDuration: 1 turn(s)",
        "scope": "AoE",
        "source": "S (Cure Randoseru)",
        "skill_id": 24814
      },
      {
        "char_name": "[Kimono] Mizuki Shiranui",
        "char_icon": "250_Shiranui",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 25001
      },
      {
        "char_name": "[Halloween] Shinganji Kurenai",
        "char_icon": "260_Kurenai",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 26003
      },
      {
        "char_name": "[Holy Night] Yatsu Murasaki",
        "char_icon": "264_Murasaki",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 26402
      },
      {
        "char_name": "[Fire God] Kamimura Maika",
        "char_icon": "268_Maika",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 26802
      },
      {
        "char_name": "[Divine Armor] Shinganji Kurenai",
        "char_icon": "281_Kurenai",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 28102
      },
      {
        "char_name": "[Sinful Bolt] Mizuki Yukikaze",
        "char_icon": "291_Yukikaze",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 29101
      },
      {
        "char_name": "[Psycho Kaiser] Renee",
        "char_icon": "303_Rene",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 30302
      },
      {
        "char_name": "Training Fighter (Blue)",
        "char_icon": "998_Prologuemob",
        "skill_name": "Iron Rush",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Swings both fists aggressively in turns to strike the target 4 times.\nTarget hit is inflicited with Faint at a 20% chance on the Last Attack.\nDuration: 1 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 19202
      },
      ]
      },
      {
        "id": "taunt",
        "name": "Taunt",
        "group": "Crowd Control",
        "scope": "debuff",
        "characters": [

          {
            "char_name": "Narita Akina",
            "char_icon": "121_Akina",
            "skill_name": "<Utopia> Stone Art: Heavyweight",
            "skill_type": "[Support Skill]",
            "skill_desc": "Musters up strength and gains (40%) DEF UP.\nDuration: 2 turn(s)\nRestores 18% of Max. HP.\nTaunts 1 Random enemy at a 45% chance.",
            "scope": "Self",
            "source": "S (Utopia)",
            "skill_id": 12112
          },
          {
            "char_name": "Hiiragi Fuyumi",
            "char_icon": "39_Fuyumi",
            "skill_name": "<Spring Breeze> Taimanin Art: Spear",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Using the character's abilities and spear, attacks the enemy a total of 3 times.\nTaunts the target hit at a 5% chance.\nDuration: 2 turn(s)\nDamage increases in proportion to HP lost.",
            "scope": "Self",
            "source": "S (Spring Breeze)",
            "skill_id": 3911
          },
          {
            "char_name": "Fuuma Hoensai",
            "char_icon": "111_Houensai",
            "skill_name": "<Daruma> Oil Art: Flame Disaster",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Breathes out fire, attacking ALL enemies 3 times.\nRemoves Shield from the targets.\nTargets hit are Taunted at a 45% chance.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Daruma)",
            "skill_id": 11113
          },
          {
            "char_name": "Major",
            "char_icon": "63_Major",
            "skill_name": "<Moon Shot> Chance Maker",
            "skill_type": "[Support Skill]",
            "skill_desc": "Taunts ALL enemies.\nDuration: 2 turn(s)\nThe character gains (10%) Damage Reflect.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Moon Shot)",
            "skill_id": 6312
          },
          {
            "char_name": "Yatsu Murasaki",
            "char_icon": "19_Murasaki",
            "skill_name": "<Combat Axe> Fortification",
            "skill_type": "[Support Skill]",
            "skill_desc": "Gains a Shield equal to 19.5% of the character's Max. HP.\nDuration: 2 turn(s)\nTaunts ALL enemies at a fixed chance of 35%\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Combat Axe)",
            "skill_id": 1912
          },
          {
            "char_name": "Amadare Natsume",
            "char_icon": "20_Natsume",
            "skill_name": "<Witch Sleeve> Alluring Touch",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Attacks ALL enemies with alluring gestures.\nTarget hit is Taunted at a 45% chance.\nDuration: 2 turn(s)\nIf the target already is Taunted, puts them in Confusion state at a fixed chance of 30%.\nDuration: 1 turn(s)\nIf the target is an Agility type, decreases (15%) of their Turn Gauge at a 95% chance.",
            "scope": "AoE",
            "source": "S (Witch Sleeve)",
            "skill_id": 2012
          },
          {
            "char_name": "Rakshasa",
            "char_icon": "125_Sokushitsuki",
            "skill_name": "<Minagoroshi> Raging Wind, Clear Moon",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Slashes the enemy with Iaido after while laughing.\nTaunts ALL enemies at a 35% chance before the attack.\nDuration: 2 turn(s)\nGains (19.5%) Power-up after the attack.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Minagoroshi)",
            "skill_id": 12513
          },
      {
        "char_name": "Yatsu Kuro",
        "char_icon": "4_Kuro",
        "skill_name": "CQC-Commando Attack",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Runs toward the enemy and consecutively slashes 5 times.\nIf the target isn't a boss, fills Turn Gauge by (20%) at a fixed chance of 100% and Taunts the target on Last Attack.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 402
      },
      {
        "char_name": "Su Jinglei",
        "char_icon": "18_Jinglei",
        "skill_name": "Ryuurinkou",
        "skill_type": "[Support Skill]",
        "skill_desc": "Draws out the power of the dragon and gains (40%) DEF UP.\nDuration: 2 turn(s)\nTaunts 1 Random target among those who faced the dragon at a 45% chance.\nDuration: 2 turn(s)\nWhen Ryuurinkou is on Cooldown, gains Shield equal to 24% of Max. HP on the character's Turn Start. \nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 1802
      },
      {
        "char_name": "Yatsu Murasaki",
        "char_icon": "19_Murasaki",
        "skill_name": "Awakened Immortal",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Murasaki doesn't go down easily.\nWhen defeated after being attacked by an enemy, she resurrects at 5% of Max. HP and enters an Immortal state.\nDuration: 1 turn(s)\nWhen an enemy uses a skill that grants ATK UP Buff, Taunts 2 enemies with the highest ATK.\n[Always-active passive effect regardless of cooldown]\nDuration: 1 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 1904
      },
      {
        "char_name": "Yatsu Murasaki",
        "char_icon": "19_Murasaki",
        "skill_name": "<Killing Spree> Awakened Immortal",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Murasaki doesn't go down easily.\nWhen defeated after being attacked by an enemy, she resurrects at 30% of Max. HP and enters an Immortal state.\nDuration: 1 turn(s)\nWhen an enemy uses a skill that grants ATK UP Buff, Taunts 2 enemies with the highest ATK.\n[Always-active passive effect regardless of cooldown]\nDuration: 1 turn(s)",
        "scope": "Target",
        "source": "S (Killing Spree)",
        "skill_id": 1914
      },
      {
        "char_name": "Amadare Natsume",
        "char_icon": "20_Natsume",
        "skill_name": "Alluring Touch",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks ALL enemies with seductive gestures.\nTarget hit is Taunted at a 45% chance.\nDuration: 2 turn(s)\nIf the seduced target is an Agility type, Taunts the target at a 50% chance, additionally reducing the Turn Gauge by (15%) at a 95% chance.",
        "scope": "AoE",
        "source": "",
        "skill_id": 2002
      },
      {
        "char_name": "Ingrid",
        "char_icon": "25_Ingrid",
        "skill_name": "Demon Swordsmanship",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Slashes the enemy 3 times using demon swordsmanship.\nTaunts the target hit at a 8% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 2501
      },
      {
        "char_name": "Major",
        "char_icon": "63_Major",
        "skill_name": "Chance Maker",
        "skill_type": "[Support Skill]",
        "skill_desc": "Taunts ALL enemies at a  35% chance.\nDuration: 2 turn(s)\nThe character gains (40%) DEF UP.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 6302
      },
      {
        "char_name": "Lilim",
        "char_icon": "72_Lilim",
        "skill_name": "Happy Dream",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Uses seductive gestures to deceive the enemy and then attack.\nTarget hit is Taunted at a 45% chance.\nDuration: 2 turn(s)\nWhen hit by the taunted target, restores HP of ALL allies by 6% of their Max. HP. [Always-active passive effect regardless of cooldown]",
        "scope": "Target",
        "source": "",
        "skill_id": 7202
      },
      {
        "char_name": "Elvira",
        "char_icon": "100_Elvira",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "[In preparation]",
        "scope": "Target",
        "source": "",
        "skill_id": 10002
      },
      {
        "char_name": "Fuuma Hoensai",
        "char_icon": "111_Houensai",
        "skill_name": "Oil Art: Oil Shot",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Shoots oil from their fingertips, to attack the enemy.\nTarget hit is Taunted at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 11101
      },
      {
        "char_name": "Kagero",
        "char_icon": "123_Kagero",
        "skill_name": "Itto Style: Fading Slash",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Rushes toward the enemy and slashes them once.\nTaunts the target hit at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 12301
      },
      {
        "char_name": "Rakshasa",
        "char_icon": "125_Sokushitsuki",
        "skill_name": "Raging Wind, Clear Moon",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Slashes the enemy with Iaido while laughing.\nTaunts the target at a 45% chance before the attack.\nDuration: 2 turn(s)\nWhen defeating an enemy with this skill, gains an Extra Turn.",
        "scope": "Target",
        "source": "",
        "skill_id": 12503
      },
      {
        "char_name": "Cult Berserker",
        "char_icon": "160_Darkknight",
        "skill_name": "Cultist Blade",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Swings a sword to attack an enemy.\nTarget hit is Taunted at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 16001
      },
      {
        "char_name": "Incubus (Joker)",
        "char_icon": "166_Incubus1",
        "skill_name": "Taunting Flames",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Creates a fireball from the hand and throws it towards the enemy. \nTarget hit is Taunted at a 45% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 16602
      },
      {
        "char_name": "Succubus (Passion)",
        "char_icon": "169_Succubus2",
        "skill_name": "Explode Tail",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Appears behind the target and attacks the enemy 2 time(s) with the tail.\nTaunts the target hit at a 20% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 16902
      },
      {
        "char_name": "Death Knight",
        "char_icon": "202_Deathknight",
        "skill_name": "Death Slash",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Swings a massive sword upward from below to attack the enemy.\nTaunts the target hit at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 20201
      },
      {
        "char_name": "[Gosha] Kousaka Shizuru",
        "char_icon": "240_Shizuru",
        "skill_name": "Piercing Thorn",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Thrusts and swings the whip widely to attack 2 time(s).\nDMG increases in proportion to the character's DEF.\nTaunts the target on the Last Attack.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 24002
      },
      {
        "char_name": "[Gosha] Kousaka Shizuru",
        "char_icon": "240_Shizuru",
        "skill_name": "<Sweet Punisher> Rose Whip",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Swings the whip to attack 2 time(s).\nWhen attacking, Taunts the target at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "S (Sweet Punisher)",
        "skill_id": 24011
      },
      {
        "char_name": "[Gosha] Kousaka Shizuru",
        "char_icon": "240_Shizuru",
        "skill_name": "<Tiger Thorn> Gosha's Sensual Blossom",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Reduces the damage taken by (-15%) when hit by a Taunted enemy.\nWhen hit by a CRIT ATK, Taunts 1 Random enemy at a 10% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "S (Tiger Thorn)",
        "skill_id": 24014
      },
      {
        "char_name": "[Kimono] Igawa Asagi",
        "char_icon": "252_Asagi",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 25202
      },
      {
        "char_name": "[Swimsuit] Yuri Hisui",
        "char_icon": "256_Hisui",
        "skill_name": "Parasol Thrust",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Stabs an enemy with the tip of the parasol.\nTaunts the target hit at a fixed 10% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 25601
      },
      {
        "char_name": "[Swimsuit] Yuri Hisui",
        "char_icon": "256_Hisui",
        "skill_name": "<Tidal Wave> Parasol Thrust",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Stabs an enemy with the tip of the parasol.\nTaunts ALL enemies at a 5% chance after the attack.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Tidal Wave)",
        "skill_id": 25611
      },
      {
        "char_name": "[Demon Slayer] Igawa Asagi",
        "char_icon": "265_Asagi",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 26501
      },
      {
        "char_name": "[Reincarnation] Igawa Asagi",
        "char_icon": "284_Asagi",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 28402
      },
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
            "char_name": "Uehara Rin",
            "char_icon": "32_Rin",
            "skill_name": "<Mist Grave> Volt Taimanin",
            "skill_type": "[Passive Skill]",
            "skill_desc": "If the target is inflicted with Electrocute, DMG increases by (7.5%).\nIf the target is inflicted with Faint, CRIT Rate increases by (7.5%).\nOn Turn Start, gains (30%) Overclock if the character has ATK UP.\nDuration: 2 turn(s)\nInflicts Electrocute on 2 Random enemies upon death. This effect ignores Debuff Block.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Mist Grave)",
            "skill_id": 3214
          },
          {
            "char_name": "Uehara Shikanosuke",
            "char_icon": "80_Shikanosuke",
            "skill_name": "<Snowflake> Elec Art: Lightning Tackle",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Charges at the enemy with electricity coursing through the character.\nInflicts that target with Electrocute at a 30% chance.\nDuration: 2 turn(s)\nGains (2) Protective Shield after the attack.\nDuration: 2 turn(s)\nIf Uehara Rin is deployed, applies the same effect to ALL allies.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Snowflake)",
            "skill_id": 8013
          },
          {
            "char_name": "Mizuki Yukikaze",
            "char_icon": "7_Yukikaze",
            "skill_name": "<Flame Tiger Custom> Linear Thunder",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Jumps into the air and sprays bullets at ALL enemies.\nIncreases the CRIT Rate by (15%) when attacking.\nTarget hit by a CRIT ATK is inflicted with Electrocute at a fixed chance of 35%.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Flame Tiger Custom)",
            "skill_id": 713
          },
      {
        "char_name": "Mizuki Yukikaze",
        "char_icon": "7_Yukikaze",
        "skill_name": "Linear Thunder",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Jumps into the air and sprays bullets at ALL enemies.\nReduces the Turn Gauge of the target hit by (15%) at a 50% chance.\nIf the target's Turn Gauge is at 0% after the attack, inflicts Electrocute at a 35% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 703
      },
      {
        "char_name": "Uehara Rin",
        "char_icon": "32_Rin",
        "skill_name": "Taimanin Art: Volt Sword",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Uses both swords to attack the enemy 2 times.\nEvery CRIT ATK inflicts Electrocute at a 5% chance.\nDuration: 2 turn(s)\nWhile in the Electrocute state, attacks 1 additional Random enemy.",
        "scope": "Target",
        "source": "",
        "skill_id": 3201
      },
      {
        "char_name": "Uehara Rin",
        "char_icon": "32_Rin",
        "skill_name": "Lightning Art: Chain Volt",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Overcharges both swords with electricity and slashes at the enemy.\nRemoves 1 Random Buffs from the target and inflicts Electrocute at a 30% chance on the Last Attack.\nDuration: 2 turn(s)\nIf the character performs CRIT ATK, absorbs (12.5%) of the Turn Gauge at a 60% chance.\nIf the character has Overclock, increases CRIT Rate by (37.5%).",
        "scope": "Target",
        "source": "",
        "skill_id": 3203
      },
      {
        "char_name": "Uehara Rin",
        "char_icon": "32_Rin",
        "skill_name": "Volt Taimanin",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When using a basic attack on a target with Electrocute, fills the character's Turn Gauge by (20%).\nWhen using a basic attack on a target with Faint, absorbs (12.5%) of the Turn Gauge.\nAt the Turn Start, gains (30%) Overclock if the character has ATK UP.\nIf the character already has Overclock, this does not refresh its duration.\nDuration: 2 turn(s)\nInflicts Electrocute on 2 Random enemies upon death. This effect ignores Debuff Block.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 3204
      },
      {
        "char_name": "Uehara Shikanosuke",
        "char_icon": "80_Shikanosuke",
        "skill_name": "Elec Art: Spark",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks the enemy 4 times by releasing electricity from the palm.\nPerforms a (50%) DEF Penetrate attack.\nTarget hit is inflicted with Electrocute at a 5% chance.\nDuration: 2 turn(s)\nIf the target is already inflicted with Electrocute, additionally inflicts Faint at a 5% chance.\nDuration: 1 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 8002
      },
      {
        "char_name": "Wizard (Red)",
        "char_icon": "144_Magician1",
        "skill_name": "Lightning of Annihilation",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Casts a spell to summon lightning over the head of an affected enemy.\nTarget hit is inflicted with Electrocute at a 25% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 14402
      },
      {
        "char_name": "Drone Spider Type-E",
        "char_icon": "181_Drone5",
        "skill_name": "Electric Shock",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Emits an electronic shockwave from the body to attack ALL enemies.\nTargets hit are inflicted with Electrocute at a 20% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 18102
      },
      {
        "char_name": "[Lightning Onyx] Mizuki Yukikaze",
        "char_icon": "279_Yukikaze",
        "skill_name": "<Hex Pulse CQC>Lightning Tempest",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "S (Hex Pulse CQC)",
        "skill_id": 27913
      },
      {
        "char_name": "[Thunder Volt] Uehara Rin",
        "char_icon": "283_Rin",
        "skill_name": "Thunder Spark",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Leaps high into the air and strikes the enemy with dual swords. \nInflicts (-60%) DEF DOWN at a 30% chance Last Attack.\nDuration: 2 turn(s)\nIf the target has Overload, inflicts Electrocute at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 28301
      },
      {
        "char_name": "[Sinful Bolt] Mizuki Yukikaze",
        "char_icon": "291_Yukikaze",
        "skill_name": "",
        "skill_type": "[Passive Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 29104
      },
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
        "characters": [
      {
        "char_name": "Murakumo Genosuke",
        "char_icon": "56_Gennosuke",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 5603
      },
      {
        "char_name": "Fujibayashi Yuno",
        "char_icon": "69_Yuno",
        "skill_name": "Taimanin Art: Whip",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Whips an enemy 4 times.\nTarget hit is inflicted with (-40%) ATK DOWN at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 6901
      },
      {
        "char_name": "Masked Taimanin",
        "char_icon": "78_Maskedtaimanin",
        "skill_name": "Taimanin Art: Uprising Storm",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Swings the blade wildly to attack the enemy 8 times.\nPerforms a (30%) Bleed Debuff Resonance attack.\nDefeating an enemy with this skill inflicts (-40%) ATK DOWN to ALL enemies at a 90% chance.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 7802
      },
      {
        "char_name": "Pamela Jäger",
        "char_icon": "102_Yeager",
        "skill_name": "Assault Claw",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Pulls out long nails, slashing the enemy and flies into the sky.\nTarget hit is inflicted with (-40%) ATK DOWN at a 20% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 10201
      },
      {
        "char_name": "Fuuma Yukina",
        "char_icon": "106_Yukina",
        "skill_name": "Red Eyed Reaper",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start, inflicts (-60%) ATK DOWN to the enemy with the highest ATK at a 99% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 10603
      },
      {
        "char_name": "Homare Nao",
        "char_icon": "113_Nao",
        "skill_name": "Light Art: Shine Burst",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Jumps up into the air and attacks ALL enemies by radiating light.\nTargets hit are inflicted with (-30%) ATK DOWN at a 20% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 11302
      },
      {
        "char_name": "Orc Executor",
        "char_icon": "133_Rakorc1",
        "skill_name": "Ground Break",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Slams a machete hard on the ground, attacking ALL enemies.\nTargets hit are inflicted with (-30%) ATK DOWN at a 90% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 13302
      },
      {
        "char_name": "Orc Witch Doctor",
        "char_icon": "136_Orcchief2",
        "skill_name": "Demonic Bullet",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Fires a demonic bullet at the enemy.\nTarget hit is inflicted with (-60%) ATK DOWN at a 30% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 13601
      },
      {
        "char_name": "Aello",
        "char_icon": "153_Harpy",
        "skill_name": "Alluring Song",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Inflicts a (-70%) ATK DOWN when an enemy with a Debuff is hit at a 35% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 15302
      },
      {
        "char_name": "Deadmind",
        "char_icon": "211_Deadmind",
        "skill_name": "Impure Miasma",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Launches a fireball to attack the enemy.\nInflicts (-60%) ATK DOWN on the target hit at a 30% chance.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 21101
      },
      {
        "char_name": "[Gosha] Mizuki Shiranui",
        "char_icon": "237_Shiranui",
        "skill_name": "Yusui",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Launches a splash of water at the enemy to attack.\nTarget hit is inflicted with (-40%) ATK DOWN at a 30% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 23701
      },
      {
        "char_name": "[Gosha] Amamiya Shisui",
        "char_icon": "244_Shisui",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 24402
      },
      {
        "char_name": "[Gosha] Kannazuki Sora",
        "char_icon": "247_Sora",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 24702
      },
      {
        "char_name": "[Wedding] Nanase Mai",
        "char_icon": "255_Mai",
        "skill_name": "Lotus's Oath",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Throws a giant paper lotus to attack ALL enemies.\nOn the Last Attack, inflicts (-30%) ATK DOWN on targets hit by the lotus at a 99% chance.\nDuration: 2 turn(s)\nIf the target is Technique type, additionally inflicts (-32.5%) CRIT Rate DOWN at a 90% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 25502
      },
      {
        "char_name": "[Halloween] Shinganji Kurenai",
        "char_icon": "260_Kurenai",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 26002
      },
      {
        "char_name": "[Oni] Akiyama Rinko",
        "char_icon": "275_Rinko",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 27502
      },
      {
        "char_name": "Kaliya",
        "char_icon": "300_Kaliya",
        "skill_name": "<Serpent Ring Choker> Heir of the Snake Goddess",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If an enemy has 4 or more Poison, grants (-45%) ATK DOWN, (-60%) CRIT DMG DOWN, (-45%) DEF DOWN to ALL enemies at a fixed 50% chance.\nDuration: 2 turn(s) \nAll Debuffs can be applied simultaneously.",
        "scope": "AoE",
        "source": "S (Serpent Ring Choker)",
        "skill_id": 30014
      },
      ]
      },
      {
        "id": "def-down",
        "name": "DEF Down",
        "group": "Stat Debuffs",
        "scope": "debuff",
        "characters": [

          {
            "char_name": "Igawa Sakura",
            "char_icon": "5_Sakura",
            "skill_name": "<Assasin's Dagger> Shadow Arts: Beast Call",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Summons a shadow creature and sends it toward the enemy.\nInflicts (-40%) DEF DOWN to the target at a 95% chance before the attack.\nDuration: 2 turn(s)\nGoes into Stealth mode when defeating an enemy with this skill.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Assasin's Dagger)",
            "skill_id": 512
          },
      {
        "char_name": "Igawa Sakura",
        "char_icon": "5_Sakura",
        "skill_name": "Shadow Arts: Beast Call",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Summons a shadow creature and sends it toward the enemy.\nInflicts (-50%) DEF DOWN before the attack at a 99% chance if the target is a Defense Type.\nDuration: 2 turn(s)\nGoes into Stealth mode when defeating an enemy with this skill.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 502
      },
      {
        "char_name": "Fuuma Tokiko",
        "char_icon": "28_Tokiko",
        "skill_name": "Butler's Qualification",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start, inflicts (-60%) DEF DOWN to a Random enemy at a 30% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 2804
      },
      {
        "char_name": "Annerose Vajra",
        "char_icon": "33_Annerose",
        "skill_name": "Phantom Flash: Crimson",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Rapidly slashes the enemy 4 time(s) from various angles.\nTarget hit is inflicted with Sleep at a 20% chance on the Last Attack, and if the target is a boss, the chance becomes 70%.\nDuration: 2 turn(s)\nTarget hit is inflicted with (-40%) DEF DOWN at a 90% chance on the Last Attack, and if the target is a boss, inflicts (-60%) DEF DOWN at a 99% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 3302
      },
      {
        "char_name": "[Combat Suit] Fuuma Amane",
        "char_icon": "34_Amane",
        "skill_name": "<Grid Edge Blade> Fuuma Martial Art: Shatter",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks the enemy 4 times with a dagger and then a laser from the left hand.\nInflicts (-40%) DEF DOWN before the attack.\nDuration: 2 turn(s)\nGains (10%) Damage Reflect after the attack. \nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "S (Grid Edge Blade)",
        "skill_id": 3412
      },
      {
        "char_name": "Yamata-no-Orochi",
        "char_icon": "61_Orochi",
        "skill_name": "Earth-Shaking Strike",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Strikes the enemy with a giant iron sword.\nTarget hit is inflicted with (-40%) DEF DOWN at a 20% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 6101
      },
      {
        "char_name": "Inage Natsu",
        "char_icon": "62_Natsu",
        "skill_name": "Acupuncture Point Thrust",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Attacks the enemy by piercing them with fingertips.\nTarget hit is inflicted with (65%) Heal Reduction at a 20% chance.\nDuration: 2 turn(s)\nInflicts (-50%) DEF DOWN at a 40% chance on CRIT ATK.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 6201
      },
      {
        "char_name": "Major",
        "char_icon": "63_Major",
        "skill_name": "Swing Out",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Attacks by whacking the enemy with a bat.\nTarget hit is inflicted with (-40%) DEF DOWN at a 20% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 6301
      },
      {
        "char_name": "Francis",
        "char_icon": "68_Francis",
        "skill_name": "Rampaging Shuten",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Wildly swings the bat, striking the enemy 7 time(s).\nEach time the target is hit by the bat, inflicts (-40%) DEF DOWN at a 10% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 6802
      },
      {
        "char_name": "Francis",
        "char_icon": "68_Francis",
        "skill_name": "Oni Gyaru Onslaught",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Round Start, inflicts (-30%) DEF DOWN to 2 Random enemies at a fixed 60% chance.\nDuration: 2 turn(s)\nEach attack has a 15% chance to increase the target's DEF DOWN effect by 7.5%.\nWhen attacked by an enemy, reduces the Cooldown of Victory☆Grenade by -1 turn at a fixed 20% chance.",
        "scope": "Target",
        "source": "",
        "skill_id": 6804
      },
      {
        "char_name": "Francis",
        "char_icon": "68_Francis",
        "skill_name": "<Pop Star> Oni Gyaru Onslaught",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Round Start, inflicts (-40%) DEF DOWN on 1 enemy with the highest DEF.\nDuration: 2 turn(s)\nEach attack has a 15% chance to increase the target's DEF DOWN effect by 7.5%.\nWhen attacked by an enemy, reduces the Cooldown of Victory☆Grenade by -1 turn(s) at a fixed 20% chance.\nWhen attacked, if the attacker is afflicted with DEF DOWN, increases the attacker's DEF DOWN effect by 10% at a fixed 10% chance.",
        "scope": "Target",
        "source": "S (Pop Star)",
        "skill_id": 6814
      },
      {
        "char_name": "Laetitia Bellmer",
        "char_icon": "75_Laetitia",
        "skill_name": "Aqua Impact",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Jumps up in front of the enemy and stabs the spear from above.\nTarget hit is inflicted with (-40%) DEF DOWN at a 95% chance.\nDuration: 2 turn(s)\nIf the target hit is Faint, inflicts (-50%) DEF DOWN at a 99% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 7502
      },
      {
        "char_name": "Minasaki",
        "char_icon": "85_Minasaki",
        "skill_name": "Yatagaraslash!",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Strikes the enemy with a knife hand.\nTarget hit is inflicted with (-60%) DEF DOWN at a 30% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 8501
      },
      {
        "char_name": "Shirokuma Taro",
        "char_icon": "89_Taro",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "[In preparation]",
        "scope": "Target",
        "source": "",
        "skill_id": 8901
      },
      {
        "char_name": "Dobashi Gonza",
        "char_icon": "92_Gonza",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 9202
      },
      {
        "char_name": "Dobashi Gonza",
        "char_icon": "92_Gonza",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 9212
      },
      {
        "char_name": "Narita Akina",
        "char_icon": "121_Akina",
        "skill_name": "Stone Art: Boulder Crush",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Smashes the enemy with a hammer 3 times. \nTarget hit is inflicted with (19.5%) Weaken, (19.5%) DEF DOWN, and Active Skill Disabled at a 15% chance.\nDuration: 2 turn(s)\nAll of the Debuffs can be applied at the same time.",
        "scope": "Target",
        "source": "",
        "skill_id": 12103
      },
      {
        "char_name": "Orc Thug",
        "char_icon": "131_Orc2",
        "skill_name": "Nail Bat Strike",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Swings a spiked bat with both hands to attack the enemy.\nTarget hit is inflicted with (-40%) DEF DOWN at a 20% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 13101
      },
      {
        "char_name": "Orc Brawler",
        "char_icon": "134_Rakorcr2",
        "skill_name": "Axe Slash",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Swings at the enemy with an axe.\nTarget hit is inflicted with (-60%) DEF DOWN at a 30% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 13401
      },
      {
        "char_name": "Orc Bodyguard",
        "char_icon": "137_Rakorcchief",
        "skill_name": "Oni Club Strike",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Smashes the enemy with an oni club.\nTarget hit is inflicted with (-40%) DEF DOWN at a 20% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 13701
      },
      {
        "char_name": "Howl Dog",
        "char_icon": "150_Blackdog2",
        "skill_name": "Sinister Howl",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Roars toward ALL enemies to attack them 4 times.\nTargets hit are inflicted with (-30%) DEF DOWN at a 20% chance.\nDuration: 2 turn(s)\nIf the target is in a Bleed state, performs a (30%) Bleed Debuff Resonance attack.",
        "scope": "Target",
        "source": "",
        "skill_id": 15002
      },
      {
        "char_name": "Cult Apostle",
        "char_icon": "157_Assassin3",
        "skill_name": "Fanatical Spear",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Attacks the enemy by stabbing with a long spear.\nTarget hit is inflicted with (-40%) DEF DOWN at a 20% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 15701
      },
      {
        "char_name": "Cyborg Agent B-Type",
        "char_icon": "183_Cyborg2",
        "skill_name": "Attaché Case Attack",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Swings a bag to attack the enemy.\nTarget hit is inflicted with (-40%) DEF DOWN at a 20% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 18301
      },
      {
        "char_name": "E-Soldier F-01",
        "char_icon": "189_Gsoldier1",
        "skill_name": "Rapid Shot",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Fires the gun 6 times.\nTarget hit is inflicted with (-40%) DEF DOWN at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 18901
      },
      {
        "char_name": "Tremor",
        "char_icon": "193_Earthquake",
        "skill_name": "Pierce Beam",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Fires a powerful beam of light to attack the target.\nInflicts (-40%) DEF DOWN at a 20% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 19301
      },
      {
        "char_name": "Phantasma",
        "char_icon": "194_Phantasma",
        "skill_name": "<Charming Flower-Eye> Mystic Tongue Succubus",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start, inflicts (-60%) DEF DOWN on the enemy with the highest HP at a 99% chance.\nThis effect ignores Debuff Block.\nDuration: 2 turn(s)\nOn Turn Start, inflicts (-47.5%) CRIT Rate DOWN on the enemy with the highest ATK at a 99% chance.\nThis effect ignores Debuff Block.\nDuration: 2 turn(s)\nOn Turn Start, if Edwin Black is deployed, inflicts (30%) Weaken on ALL enemies at a 70% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "S (Charming Flower-Eye)",
        "skill_id": 19414
      },
      {
        "char_name": "Reaper",
        "char_icon": "203_Reaper",
        "skill_name": "Soul Obliterator",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Slashes ALL enemies in an X-shape to attack 2 times.\nTarget hit is inflicted with (-30%) DEF DOWN at a 35% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 20302
      },
      {
        "char_name": "Zombie Infector",
        "char_icon": "205_Zombie4",
        "skill_name": "Double Rake",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Extends the long tongue to attack 2 time(s).\nInflicts (-30%) DEF DOWN at a 15% chance on the Last Attack.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 20501
      },
      {
        "char_name": "Dullahan",
        "char_icon": "212_Dullahan",
        "skill_name": "Dark Spark",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Fires a lightning bolt at the enemy to attack.\nInflicts (-60%) DEF DOWN on the target hit at a 30% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 21201
      },
      {
        "char_name": "[Gosha] Yatsu Murasaki",
        "char_icon": "236_Murasaki",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 23603
      },
      {
        "char_name": "[Gosha] Kousaka Shizuru",
        "char_icon": "240_Shizuru",
        "skill_name": "Whip of Love",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Swings the whip widely to attack the enemy.\nGains (40%) DEF UP before the attack.\nDuration: 2 turn(s)\nDMG increases in proportion to the character's DEF.\nInflicts (-40%) DEF DOWN to the target at a 99% chance on the Last Attack.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 24003
      },
      {
        "char_name": "[Gosha] Amamiya Shisui",
        "char_icon": "244_Shisui",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 24402
      },
      {
        "char_name": "[Gosha] Kamimura Maika",
        "char_icon": "249_Maika",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 24901
      },
      {
        "char_name": "[White Almighty] Igawa Asagi",
        "char_icon": "266_Asagi",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 26602
      },
      {
        "char_name": "[Innocent Shadow] Igawa Sakura",
        "char_icon": "267_Sakura",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 26701
      },
      {
        "char_name": "[Youthful Phantom] Mizuki Shiranui",
        "char_icon": "272_Shiranui",
        "skill_name": "Rondo",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Swings the spear in a wide arc to attack ALL enemies 2 times.\nDamage increases in proportion to Max. HP.\nInflicts (-30%) DEF DOWN at a 15% chance on the Last Attack.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 27201
      },
      {
        "char_name": "[M-01A] Yatsu Murasaki",
        "char_icon": "278_Murasaki",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 27801
      },
      {
        "char_name": "[Thunder Volt] Uehara Rin",
        "char_icon": "283_Rin",
        "skill_name": "Thunder Spark",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Leaps high into the air and strikes the enemy with dual swords. \nInflicts (-60%) DEF DOWN at a 30% chance Last Attack.\nDuration: 2 turn(s)\nIf the target has Overload, inflicts Electrocute at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 28301
      },
      {
        "char_name": "[Task Force G] Clone Asagi",
        "char_icon": "297_Asagi",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 29701
      },
      {
        "char_name": "Kaliya",
        "char_icon": "300_Kaliya",
        "skill_name": "<Serpent Ring Choker> Heir of the Snake Goddess",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If an enemy has 4 or more Poison, grants (-45%) ATK DOWN, (-60%) CRIT DMG DOWN, (-45%) DEF DOWN to ALL enemies at a fixed 50% chance.\nDuration: 2 turn(s) \nAll Debuffs can be applied simultaneously.",
        "scope": "AoE",
        "source": "S (Serpent Ring Choker)",
        "skill_id": 30014
      },
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
            "skill_name": "<Rosebud> Reaper-Summoning Thread",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Sends 15 spiders charging toward random enemies.\nTarget hit is inflicted with (50%) Vulnerable to Poison on the Last Attack.\nDuration: 2 turn(s)\nTarget is inflicted with (50%) Vulnerable to Poison if the target has SPD DOWN Debuff.\nDuration: 2 turn(s)\nTarget is inflicted with (50%) Vulnerable to Poison if the target has Immobilize Debuff.\nDuration: 2 turn(s)",
            "scope": "AoE",
            "source": "S (Rosebud)",
            "skill_id": 7713
          },
          {
            "char_name": "Igawa Asagi",
            "char_icon": "1_Asagi",
            "skill_name": "<Gurren> Hirenka",
            "skill_type": "[Attack Skill]",
            "skill_desc": "After kicking the enemy upward, slashes them 4 times in midair for a total of 5 attacks.\nTarget hit is inflicted with (65%) Heal Reduction at a 99% chance.\nDuration: 2 turn(s)\nDefeating an enemy with this skill resets the Cooldown of Koujin Zanka.",
            "scope": "Self",
            "source": "S (Gurren)",
            "skill_id": 112
          },
          {
            "char_name": "Masked Taimanin",
            "char_icon": "78_Maskedtaimanin",
            "skill_name": "<Blade Crusher> Mask of Concealment",
            "skill_type": "[Passive Skill]",
            "skill_desc": "If the target has 3 or more Buffs upon attack, inflicts (60%) Heal Reduction at a 20% chance.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Blade Crusher)",
            "skill_id": 7814
          },
      {
        "char_name": "Igawa Asagi",
        "char_icon": "1_Asagi",
        "skill_name": "Hirenka",
        "skill_type": "[Attack Skill]",
        "skill_desc": "After kicking the enemy upward, slashes them 4 times in midair for a total of 5 attacks.\nIf the target slashed has below 50% HP, inflicts (75%) Heal Reduction at a 99% chance.\nDuration: 2 turn(s)\nCRIT Rate increases in proportion to SPD.",
        "scope": "Target",
        "source": "",
        "skill_id": 102
      },
      {
        "char_name": "Ingrid",
        "char_icon": "25_Ingrid",
        "skill_name": "Black Flame Hell Knight",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When attacking an enemy with Weaken, performs a (15%) DEF Penetrate attack.\nWhen attacking an enemy with Burn, inflicts a (75%) Heal Reduction at a 25% chance.\nDuration: 2 turn(s)\nIf not attacked during the enemy's turn or is hit by an all-target attack during the enemy's turn, grants (1) Protective Shield to 1 ally with the highest ATK, excluding self.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 2504
      },
      {
        "char_name": "Hoshino Mitsuki",
        "char_icon": "37_Mitsuki",
        "skill_name": "Wind Art: Blazing Wind",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Swings a fan continuously to send 5 gusts of wind that attacks ALL enemies.\nTargets hit are inflicted with (50%) Heal Reduction at a 90% chance.\nDuration: 2 turn(s)\nIf the target is already inflicted with Heal Reduction, every attack inflicts (10%) Bleed at a fixed chance of 15%.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 3702
      },
      {
        "char_name": "Kasumigaoka Rika",
        "char_icon": "40_Rika",
        "skill_name": "Cross Slash",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Launches a cross-shaped sword aura at the enemy.\nTarget hit is inflicted with (65%) Heal Reduction at a 20% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 4001
      },
      {
        "char_name": "Aina Winchester",
        "char_icon": "46_Aina",
        "skill_name": "Wild Fire",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Fires dual pistols and attacks the enemy 5 times.\nTarget hit is inflicted with (65%) Heal Reduction at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 4601
      },
      {
        "char_name": "Murakumo Genosuke",
        "char_icon": "56_Gennosuke",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 5601
      },
      {
        "char_name": "Inage Natsu",
        "char_icon": "62_Natsu",
        "skill_name": "Acupuncture Point Thrust",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Attacks the enemy by piercing them with fingertips.\nTarget hit is inflicted with (65%) Heal Reduction at a 20% chance.\nDuration: 2 turn(s)\nInflicts (-50%) DEF DOWN at a 40% chance on CRIT ATK.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 6201
      },
      {
        "char_name": "Lilim",
        "char_icon": "72_Lilim",
        "skill_name": "Tail Whip",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Attacks the enemy using the tail like a whip.\nTarget hit is inflicted with (90%) Heal Reduction at a 30% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 7201
      },
      {
        "char_name": "Masked Taimanin",
        "char_icon": "78_Maskedtaimanin",
        "skill_name": "Mask of Concealment",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If the target has 3 or more Debuffs upon attack, inflicts (75%) Heal Reduction at a 25% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 7804
      },
      {
        "char_name": "Rakshasa",
        "char_icon": "125_Sokushitsuki",
        "skill_name": "Demon Blade: Fleeting Wind",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Fires a sword aura at the enemy.\nTarget hit is inflicted with (65%) Heal Reduction at a 20% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 12501
      },
      {
        "char_name": "Blaze Dog",
        "char_icon": "149_Blackdog1",
        "skill_name": "Twin Bite",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Attacks by biting the enemy hard.\nTarget hit is inflicted with (65%) Heal Reduction at a 20% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 14901
      },
      {
        "char_name": "Aello",
        "char_icon": "153_Harpy",
        "skill_name": "Feather Storm",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks ALL enemies by scattering feathers.\nTarget hit is inflicted with (70%) Heal Reduction at a 99% chance. \nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 15303
      },
      {
        "char_name": "Cult Inquisitor",
        "char_icon": "158_Paladin",
        "skill_name": "Rain of Judgement",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Fires a hail of arrows into the air to attack ALL enemies.\nTargets hit are inflicted with (50%) Heal Reduction at a 75% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 15802
      },
      {
        "char_name": "E-Soldier M-01",
        "char_icon": "190_Gsoldier2",
        "skill_name": "Vibro-Slash",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Slashes the enemy after switching to a reverse grip.\nWhen performing a CRIT ATK, inflicts (75%) Heal Reduction at a 99% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 19001
      },
      {
        "char_name": "Reaper",
        "char_icon": "203_Reaper",
        "skill_name": "Soul Carver",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Reaper jumps out from the ground and attacks the enemy with a scythe.\nTarget hit is inflicted with (65%) Heal Reduction at a 20% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 20301
      },
      {
        "char_name": "[Gosha] Onisaki Kirara",
        "char_icon": "246_Kirara",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 24602
      },
      {
        "char_name": "[White Almighty] Igawa Asagi",
        "char_icon": "266_Asagi",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 26601
      },
      ]
      },
      {
        "id": "spd-down",
        "name": "SPD Down",
        "group": "Stat Debuffs",
        "scope": "debuff",
        "characters": [

          {
            "char_name": "Igawa Asagi",
            "char_icon": "1_Asagi",
            "skill_name": "<Tokizaki> Koujin Zanka",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Moves as fast as light and instantly attacks the enemy 6 time(s).\nTarget hit is inflicted with (-19.5%) SPD DOWN at a 99% chance and has their Turn Gauge reduced by (15%) at a 65% chance on Last Attack.",
            "scope": "Self",
            "source": "S (Tokizaki)",
            "skill_id": 113
          },
          {
            "char_name": "Akiyama Rinko",
            "char_icon": "11_Rinko",
            "skill_name": "<Zetsuei> Itto Style: Kogarasi-no-Kata",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Uses Void Art to mercilessly slash the enemy, attacking 4 times.\nEach hit performs a Shield Penetrate attack.\nIf the character has 2 or more Buff, performs 1 Additional Attack.\nWhen an Additional Attack is triggered, inflicts (-24%) SPD DOWN on the target at a 99% chance.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Zetsuei)",
            "skill_id": 1112
          },
          {
            "char_name": "Akiyama Tatsuro",
            "char_icon": "12_Tatsuro",
            "skill_name": "<Amakudari> Itto Style: Moon Fall",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Leaps high and slashes enemies with a sword gripped in reverse.\nTarget hit is inflicted with (-19.5%) SPD DOWN at a 95% chance.\nDuration: 2 turn(s)\nAbsorbs (12.5%) Turn Gauge at a 35% chance.",
            "scope": "AoE",
            "source": "S (Amakudari)",
            "skill_id": 1212
          },
      {
        "char_name": "Akiyama Tatsuro",
        "char_icon": "12_Tatsuro",
        "skill_name": "Itto Style: Moon Fall",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Leaps high and slashes enemies with the sword gripped in reverse.\nTarget hit is inflicted with (-19.5%) SPD DOWN Debuff at a 95% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 1202
      },
      {
        "char_name": "Mizuki Shiranui",
        "char_icon": "13_Shiranui",
        "skill_name": "Taimanin Spear Art: Crescent Moon",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Jumps in front of the enemy and attacks by striking down with a spear.\nTarget hit is inflicted with (-28.5%) SPD DOWN at a 30% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 1301
      },
      {
        "char_name": "Koukawa Asuka",
        "char_icon": "16_Asuka",
        "skill_name": "Steel Reaper",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If the target does not have a Buff, inflicts (-27%) SPD DOWN at a 30% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 1604
      },
      {
        "char_name": "Shirase Yuzuriha",
        "char_icon": "17_Yuzuriha",
        "skill_name": "Silk Barrier",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Deploys wires to suspend ALL enemies in midair, then instantly slices and attacks them.\nTarget hit is inflicted with (-19.5%) SPD DOWN at a 90% chance on the Last Attack.\nDuration: 2 turn(s)\nIf the target already has SPD DOWN, additionally inflicts Immobilize at a 35% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 1703
      },
      {
        "char_name": "[Butler] Fuuma Saika",
        "char_icon": "38_Saika",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 3802
      },
      {
        "char_name": "Donna Burroughs",
        "char_icon": "76_Burroughs",
        "skill_name": "Gravity Fall",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Sends a gravity sphere to the center of the enemy, attacking ALL enemies 5 times.\nInflicts (-15%) SPD DOWN at a 90% chance on Last Attack.\nDuration: 2 turn(s)\nOn Last Attack, if the target is a Technique type, reduces the target's Turn Gauge by (15%) at a 65% chance.",
        "scope": "Target",
        "source": "",
        "skill_id": 7603
      },
      {
        "char_name": "Anemone",
        "char_icon": "77_Anemone",
        "skill_name": "Tsuchigumo's Net",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Attacks the enemy by hurling a bundle of webs.\nTarget hit is inflicted with (-19.5%) SPD DOWN at a 20% chance.\nDuration: 2 turn(s)\nIf the target already has SPD DOWN, they're inflicted with Immobilize at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 7701
      },
      {
        "char_name": "Merriam",
        "char_icon": "104_Miriam",
        "skill_name": "Familiar Attack",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Sends familiars Shiro and Kuro toward the enemy to attack 2 times.\nTarget hit is inflicted with (-19.5%) SPD DOWN at a 10% chance. \nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 10401
      },
      {
        "char_name": "Fuuma Mawari",
        "char_icon": "108_Mawari",
        "skill_name": "Evil Eye: White Radiance",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Uses Evil Eye: White Radiance, and inflicts (-21%) SPD DOWN to ALL enemies at a 99% chance.\nThe character also gains (-21%) SPD DOWN at a  99% chance.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 10803
      },
      {
        "char_name": "Fuuma Hoensai",
        "char_icon": "111_Houensai",
        "skill_name": "Oil Art: Oil Bath",
        "skill_type": "[Support Skill]",
        "skill_desc": "Wears oil around the body and gains (19.5%) EVD UP.\nDuration: 2 turn(s)\nIf Oil Art: Oil Bath is on Cooldown, inflicts (-24%) SPD DOWN to the attacker when hit at a 25% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 11102
      },
      {
        "char_name": "Watarase Tsumugi",
        "char_icon": "116_Tsumugi",
        "skill_name": "Weight Art: Heavy Strike",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Jumps high and powerfully slams the ground to attack ALL enemies.\nEvery CRIT ATK inflicts (-19.5%) SPD DOWN to ALL enemies at a 99% chance.\nDuration: 2 turn(s)\nIf the character has SPD UP, increases the duration of SPD UP by 1 turn and its efficacy by a fixed 10%.",
        "scope": "AoE",
        "source": "",
        "skill_id": 11603
      },
      {
        "char_name": "Hasegawa Fuuki",
        "char_icon": "127_Hasegawafuki",
        "skill_name": "Wind Demon Style: Howling Gale",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Creates wind to attack the enemy.\nTarget hit is inflicted with (-28.5%) SPD DOWN at a 30% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 12701
      },
      {
        "char_name": "Blaze Dog",
        "char_icon": "149_Blackdog1",
        "skill_name": "Twin Breath",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks the enemy 3 times by emitting a powerful flame from the mouth.\nTarget hit is inflicted with (-19.5%) SPD DOWN at a 40% chance.\nDuration: 2 turn(s)\nIf the target has Heal Reduction, additionally inflicted with (3.5%) Burn by each attack.\nDuration: 3 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 14902
      },
      {
        "char_name": "Bone Suit Brawler",
        "char_icon": "191_Fighter1",
        "skill_name": "Iron Impact",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Hits the target with a Superman punch.\nTarget hit is inflicted with (-28.5%) SPD DOWN at a 99% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 19102
      },
      {
        "char_name": "Dead Hound",
        "char_icon": "195_Devilsdog1",
        "skill_name": "Maul",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Bites the enemy hard to attack.\nTarget hit is inflicted with (-19.5%) SPD DOWN at a 20% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 19501
      },
      {
        "char_name": "[Gosha] Fuuma Tokiko",
        "char_icon": "243_Tokiko",
        "skill_name": "Tokiko's Prediction",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Round Start, inflicts (-28.5%) SPD DOWN to an enemy with the fastest SPD.\nDuration: 1 turn(s)\nAt the end of the character's turn, if 2 or more Power-type allies are deployed, fills the Turn Gauge of 2 Random allies except for the character by (20%).",
        "scope": "Target",
        "source": "",
        "skill_id": 24304
      },
      {
        "char_name": "[Gosha] Onisaki Kirara",
        "char_icon": "246_Kirara",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 24601
      },
      {
        "char_name": "[Lightning Onyx] Mizuki Yukikaze",
        "char_icon": "279_Yukikaze",
        "skill_name": "Lightning Tempest",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 27903
      },
      {
        "char_name": "[Lightning Onyx] Mizuki Yukikaze",
        "char_icon": "279_Yukikaze",
        "skill_name": "<Hex Pulse CQC>Lightning Tempest",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "S (Hex Pulse CQC)",
        "skill_id": 27913
      },
      {
        "char_name": "[Sky Edge] Akiyama Rinko",
        "char_icon": "280_Rinko",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 28002
      },
      {
        "char_name": "[Phantom Witch] Mizuki Shiranui",
        "char_icon": "290_Shiranui",
        "skill_name": "",
        "skill_type": "[Passive Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 29004
      },
      ]
      },
      {
        "id": "weaken",
        "name": "Weaken",
        "group": "Stat Debuffs",
        "scope": "debuff",
        "characters": [

          {
            "char_name": "Aina Winchester",
            "char_icon": "46_Aina",
            "skill_name": "<Phaser Blaster> Wild Fire",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Rapidly fires both pistols to attack the enemy 5 times.\nTarget hit is inflicted with (19.5%) Weaken at a 5% chance.\nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Phaser Blaster)",
            "skill_id": 4611
          },
          {
            "char_name": "Fuuma Aki",
            "char_icon": "45_Aki",
            "skill_name": "<Giren> Chasing Slash",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Swings a sword left and right to attack the enemy 4 times.\nIf the target has Bleed, inflicts (22.5%) Weaken at a 50% chance on the Last Attack.\nDuration: 2 turn(s)\nGains (32.5%) CRIT Rate UP before the attack. \nDuration: 2 turn(s)",
            "scope": "Self",
            "source": "S (Giren)",
            "skill_id": 4512
          },
          {
            "char_name": "Annerose Vajra",
            "char_icon": "33_Annerose",
            "skill_name": "<Vajra Blue Lightning> Myriad Flash Slashes",
            "skill_type": "[Normal Attack]",
            "skill_desc": "Annerose stabs the enemy 4 time(s) with her unique swordsmanship.\nDMG increases equal to 1.5% of the target's lost HP when attacking.",
            "scope": "Self",
            "source": "S ()",
            "skill_id": 3311
          },
      {
        "char_name": "Fuuma Amane",
        "char_icon": "6_Amane",
        "skill_name": "Taimanin Art: Magpie",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Throws 6 shurikens consecutively at the enemy.\nTarget hit is inflicted with (19.5%) Weaken at a 5% chance.\nDuration: 2 turn(s)\nWhen the character's HP is 50% or less, performs 1 Additional Attack.\nDamage increases in proportion to HP lost.",
        "scope": "Target",
        "source": "",
        "skill_id": 601
      },
      {
        "char_name": "Akiyama Rinko",
        "char_icon": "11_Rinko",
        "skill_name": "Itto Style: Kogarasi-no-Kata",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Uses Void Art to mercilessly slash the enemy, attacking 4 times.\nEach hit inflicts (60%) DEF Penetrate.\nIf the character has SPD UP, performs 1 Additional Attack.\nWhen an Additional Attack is triggered, inflicts (22.5%) Weaken to the target at a 65% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 1102
      },
      {
        "char_name": "Kiryu Mikoto",
        "char_icon": "22_Mikoto",
        "skill_name": "Ghostly Slash",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Unleashes a sword aura at the enemy.\nTarget hit is inflicted with (19.5%) Weaken at a 10% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 2201
      },
      {
        "char_name": "Ingrid",
        "char_icon": "25_Ingrid",
        "skill_name": "Gniel's Evil Flames",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Wraps black flames around the sword to quickly pierce through the enemy.\nTarget hit is inflicted with (3.5%) Burn at a 95% chance.\nDuration: 3 turn(s)\nIf the target's HP is less than 50%, inflicts (22.5%) Weaken at a 80% chance.\nDuration: 2 turn(s)\nIf the target's SPD is higher than the character's, damage dealt increases based on the difference.",
        "scope": "Target",
        "source": "",
        "skill_id": 2503
      },
      {
        "char_name": "Fuuma Tokiko",
        "char_icon": "28_Tokiko",
        "skill_name": "Clairvoyance: Hyakki Yakou",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Tokiko summons numerous kunai, dealing damage to all enemies 4 times.\nTarget hit is inflicted with (21%) Weaken  at a 15% chance.\nDuration: 2 turn(s)\nAdditionally, grants Buff Disabled at a 30% chance.\nDuration: 2 turn(s)\nAfter casting, additionally reduces Turn Gauge by (15%) for targets with 3 or more Debuffs at a 95% chance.",
        "scope": "Target",
        "source": "",
        "skill_id": 2803
      },
      {
        "char_name": "Annerose Vajra",
        "char_icon": "33_Annerose",
        "skill_name": "<Abyssal Rakshasa> Phantom Flash: Crimson",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Rapidly slashes the enemy 4 time(s) from various angles.\nTarget hit is inflicted with Faint at a 15% chance on the Last Attack, and if the target is a boss, the chance becomes 45%.\nDuration: 1 turn(s)\nTarget hit is inflicted with (18%) Weaken at a 40% chance on the Last Attack, and if the target is a boss, inflicts (27%) Weaken at a 60% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "S (Abyssal Rakshasa)",
        "skill_id": 3312
      },
      {
        "char_name": "Shishimura Koro",
        "char_icon": "44_Koro",
        "skill_name": "Itto Style: Flash Strike",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Spins a sword behind their back to attack the enemy.\nInflicts (19.5%) Weaken to the target at a 10% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 4401
      },
      {
        "char_name": "Fuuma Aki",
        "char_icon": "45_Aki",
        "skill_name": "Chasing Slash",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Swings a sword left and right to attack the enemy 4 times.\nIf the target has Bleed, inflicts (22.5%) Weaken at a 50% chance on the Last Attack.\nDuration: 2 turn(s)\nGains (32.5%) CRIT Rate UP after the attack. \nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 4502
      },
      {
        "char_name": "Saya NEO",
        "char_icon": "59_Sayaneo",
        "skill_name": "Charge the Crisis",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks 6 times by stabbing the enemy with tentacles.\nIf the target has Bleed, inflicts (22.5%) Weaken at a 5% chance.\nDuration: 2 turn(s)\nIf the target has 3 or more Debuffs, increases duration of Bleed by 1 turn on Last Attack.",
        "scope": "Target",
        "source": "",
        "skill_id": 5902
      },
      {
        "char_name": "Snake Lady",
        "char_icon": "71_Snakelady",
        "skill_name": "Venom Smash",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Attacks the enemy with a powerful dropkick.\nIf the target is Offense Type, inflicts (-40%) CRIT RES DOWN at a 99% chance. \nDuration : 2 turn(s)\nIf the target is Defense Type, inflicts (22.5%) Weaken at a 65% chance.\nDuration : 2 turn(s)\nIf the target is Support Type, inflicts Faint at a 25% chance.\nDuration : 1 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 7103
      },
      {
        "char_name": "Donna Burroughs",
        "char_icon": "76_Burroughs",
        "skill_name": "Blade Smash",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Jumps high and swings a greatsword down at the enemy.\nTarget hit is inflicted with (19.5%) Weaken at a 10% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 7601
      },
      {
        "char_name": "Izumo Tsuru",
        "char_icon": "82_Tsuru",
        "skill_name": "Mech Art: Psycho Gun",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Focuses energy into the gun and fires a powerful shot at the enemy.\nTarget hit is inflicted with Weaken(19.5%) at a 45% chance.\nDuration: 2 turn(s)\nPerforms a Shield Penetrate attack.",
        "scope": "Target",
        "source": "",
        "skill_id": 8202
      },
      {
        "char_name": "Shirokuma Taro",
        "char_icon": "89_Taro",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "[In preparation]",
        "scope": "Target",
        "source": "",
        "skill_id": 8902
      },
      {
        "char_name": "Shirokuma Taro",
        "char_icon": "89_Taro",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "S (Polaris Majesty)",
        "skill_id": 8912
      },
      {
        "char_name": "Kuroki Shizuku",
        "char_icon": "95_Shizuku",
        "skill_name": "Shadow in Stealth",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Hides in the shadows and attacks the enemy 4 times.\nTarget is inflicted with (19.5%) Weaken at a 10% chance. \nDuration: 2 turn(s)\nIf the target's Turn Gauge is 70% or more, reduces Turn Gauge by (15%) at a 15% chance.",
        "scope": "Target",
        "source": "",
        "skill_id": 9502
      },
      {
        "char_name": "Pamela Jäger",
        "char_icon": "102_Yeager",
        "skill_name": "Rolling Tackle",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Curls up into a ball and and charges at the enemy, attacking 5 times.\nRemoves the target's Debuff Block.\nInflicts (19.5%) Weaken at a 45% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 10202
      },
      {
        "char_name": "Narita Akina",
        "char_icon": "121_Akina",
        "skill_name": "Stone Art: Boulder Crush",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Smashes the enemy with a hammer 3 times. \nTarget hit is inflicted with (19.5%) Weaken, (19.5%) DEF DOWN, and Active Skill Disabled at a 15% chance.\nDuration: 2 turn(s)\nAll of the Debuffs can be applied at the same time.",
        "scope": "Target",
        "source": "",
        "skill_id": 12103
      },
      {
        "char_name": "Kagero",
        "char_icon": "123_Kagero",
        "skill_name": "Itto Style: Sunshower",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Slashes the enemy 3 times using the sword held in a reverse grip.\nInflicts (27%) Weaken at a 65% chance on Last Attack.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 12302
      },
      {
        "char_name": "Tsubaki Onkyouki",
        "char_icon": "126_Ongyouki",
        "skill_name": "Shade Demon Style: Shadow Slash",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks the enemy 3 times, leaving an afterimage.\nWhen the character is in Stealth, increases DMG by (37.5%).\nTarget hit is inflicted with (19.5%) Weaken at a 45% chance before the attack.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 12602
      },
      {
        "char_name": "Nemuri Suiki",
        "char_icon": "128_Suiki",
        "skill_name": "Demon of \"Water\"",
        "skill_type": "[Passive Skill]",
        "skill_desc": "[In preparation]",
        "scope": "Target",
        "source": "",
        "skill_id": 12804
      },
      {
        "char_name": "Orc Warlock",
        "char_icon": "135_Orcchief1",
        "skill_name": "Staff Pound",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Swings a staff to attack the enemy.\nDMG increases in proportion when the character's HP gets lower.\nTarget hit is inflicted with (27%) Weaken at a 15% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 13501
      },
      {
        "char_name": "Orc Warlord",
        "char_icon": "138_Orcboss",
        "skill_name": "Staff Strike",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Swings a staff to attack the enemy.\nTarget hit is inflicted with (19.5%) Weaken at a 10% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 13801
      },
      {
        "char_name": "Cult Acolyte",
        "char_icon": "155_Assassin",
        "skill_name": "Fanatical Twin Blade",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Quickly swings the twin swords held in both hands to attack the enemy 2 times.\nTarget hit is inflicted with (19.5%) Weaken at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 15501
      },
      {
        "char_name": "Cult Armed Priest",
        "char_icon": "162_Knightguard",
        "skill_name": "Cultist Guardian",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When hit, inflicts (19.5%) Weaken to the attacker at a 45% chance.\nDuration: 2 turn(s)\nIf the character's HP is less than 75% when hit, grants Counterattack.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 16202
      },
      {
        "char_name": "Hasuma Reiko",
        "char_icon": "176_Reiko",
        "skill_name": "Taima Whip Style: Stinger",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Cracks the whip and then stabs the enemy with it 3 times.\nTarget hit is inflicted with (19.5%) Weaken at a 15% chance.\nDuration: 2 turn(s)\nIf the target's HP is less than 50%, steals 1 Random Buff from the target at a 50% chance.",
        "scope": "Target",
        "source": "",
        "skill_id": 17602
      },
      {
        "char_name": "Cyborg Agent B-Type",
        "char_icon": "183_Cyborg2",
        "skill_name": "Secret Weapon",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Fires a hidden gun from the bag to attack the enemy.\nTarget hit is inflicted with (19.5%) Weaken at a 45% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 18302
      },
      {
        "char_name": "Phantasma",
        "char_icon": "194_Phantasma",
        "skill_name": "Mystic Tongue Succubus",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start, reduces the Turn Gauge of 1 Random enemy by 15% at a fixed 45% chance.\nAt the end of their turn, inflicts (24%) Weaken on enemies that are in Sleep state.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "",
        "skill_id": 19404
      },
      {
        "char_name": "Phantasma",
        "char_icon": "194_Phantasma",
        "skill_name": "<Charming Flower-Eye> Mystic Tongue Succubus",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start, inflicts (-60%) DEF DOWN on the enemy with the highest HP at a 99% chance.\nThis effect ignores Debuff Block.\nDuration: 2 turn(s)\nOn Turn Start, inflicts (-47.5%) CRIT Rate DOWN on the enemy with the highest ATK at a 99% chance.\nThis effect ignores Debuff Block.\nDuration: 2 turn(s)\nOn Turn Start, if Edwin Black is deployed, inflicts (30%) Weaken on ALL enemies at a 70% chance.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Charming Flower-Eye)",
        "skill_id": 19414
      },
      {
        "char_name": "[Gosha] Yatsu Murasaki",
        "char_icon": "236_Murasaki",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 23601
      },
      {
        "char_name": "[Gosha] Yatsu Murasaki",
        "char_icon": "236_Murasaki",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 23603
      },
      {
        "char_name": "[Gosha] Mizuki Yukikaze",
        "char_icon": "238_Yukikaze",
        "skill_name": "<Heartbeat Shooter> Charming Shot",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Charmingly approaches the enemy and fires dual pistols at point-blank range, attacking 4 times.\nInflicts (19.5%) Weaken at a 45% chance before the attack. \nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "S (Heartbeat Shooter)",
        "skill_id": 23812
      },
      {
        "char_name": "[Gosha] Shinganji Kurenai",
        "char_icon": "241_Kurenai",
        "skill_name": "",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 24103
      },
      {
        "char_name": "[Gosha] Fuuma Tokiko",
        "char_icon": "243_Tokiko",
        "skill_name": "No Slacking Off",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Throws chalk at the enemy.\nInflicts (27%) Weaken at a 15% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 24301
      },
      {
        "char_name": "[Gosha] Shinohara Mari",
        "char_icon": "248_Mari",
        "skill_name": "Schoolbag Smash",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Whirls the schoolbag around to attack the enemy.\nTarget hit is inflicted with (27%) Weaken at a 15% chance.\nDuration: 2 turn(s)",
        "scope": "Target",
        "source": "",
        "skill_id": 24801
      },
      {
        "char_name": "[Swimsuit] Kousaka Shizuru",
        "char_icon": "257_Shizuru",
        "skill_name": "<Coral Spine> Voluptuous Blossom Waltz",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Whips the enemy hard to attack.\nRemoves 1 Random Buff from ALL enemies after the attack.\nIf the enemy doesn't have any Buffs, inflicts (24%) Weaken instead. \nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Coral Spine)",
        "skill_id": 25713
      },
      {
        "char_name": "[Strong Fist] Shinohara Mari",
        "char_icon": "273_Mari",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 27301
      },
      {
        "char_name": "[Wandering Cyborg] Igawa Asagi",
        "char_icon": "277_Asagi",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 27701
      },
      {
        "char_name": "[Shadow Ruler] Igawa Sakura",
        "char_icon": "287_Sakura",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 28702
      },
      {
        "char_name": "[Heavenly Moon Flower] Akiyama Rinko",
        "char_icon": "292_Rinko",
        "skill_name": "",
        "skill_type": "[Normal Attack]",
        "skill_desc": "",
        "scope": "Target",
        "source": "",
        "skill_id": 29201
      },
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
        "characters": [
      {
        "char_name": "[Dark Wave] Yatsu Murasaki",
        "char_icon": "288_Murasaki",
        "skill_name": "",
        "skill_type": "[Attack Skill]",
        "skill_desc": "",
        "scope": "Self",
        "source": "",
        "skill_id": 28802
      },
      {
        "char_name": "[Phantom Witch] Mizuki Shiranui",
        "char_icon": "290_Shiranui",
        "skill_name": "",
        "skill_type": "[Support Skill]",
        "skill_desc": "",
        "scope": "AoE",
        "source": "",
        "skill_id": 29002
      },
      ]
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
            "skill_name": "<Soul Eraser> Immortal Hunting",
            "skill_type": "[Ultimate Skill]",
            "skill_desc": "Strikes an enemy with a scythe.\nWhen the target has 3 or more Debuffs, and the character's HP is less than 30%, attacking an enemy deals Instant Death at a fixed chance of 75%.\nIncreases the duration of all Buffs by 1 turn after the attack.\nSteals Immortal from the enemy before the attack.",
            "scope": "AoE",
            "source": "S (Soul Eraser)",
            "skill_id": 3013
          },
          {
            "char_name": "Torajiro",
            "char_icon": "87_Torajiro",
            "skill_name": "<White Tiger Fists> Rip and Tear",
            "skill_type": "[Attack Skill]",
            "skill_desc": "Wildly slashes the enemy 6 times.\nPerforms 1 Additional Attack without any conditions.\nWhen the target's HP is less than 20% during Additional Attack, deals Instant Death at a fixed 15% chance.",
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
        "char_name": "Alectra",
        "char_icon": "124_Arectra",
        "skill_name": "<Tisiphone> Wrath of the Vengeful",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When defeated after being attacked by an enemy, she resurrects at 1% of Max. HP and enters an Immortal state.\nDuration: 1 turn(s)\nAdditionally gains (60%) ATK UP.\nDuration: 2 turn(s)\nIf Wrath of the Vengeful is on Cooldown, performs an Additional Attack on every attack.",
        "scope": "Self",
        "source": "S (Tisiphone)",
        "skill_id": 12413
      },
      {
        "char_name": "Eleonor",
        "char_icon": "48_Eleonor",
        "skill_name": "<Tear of Rusalka> Defensive Nectar",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Grants Debuff Block to ALL allies using the power of nature.\nDuration: 2 turn(s)\nAdditionally grants (45%) ATK UP if the allies other than the character with granted Debuff Block doesn't have any Debuff.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Tear of Rusalka)",
        "skill_id": 4813
      },
      {
        "char_name": "Kugasa Hikage",
        "char_icon": "120_Hikage",
        "skill_name": "<Amayo> Wind Art: Spring Wind",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants (45%) ATK UP to 1 ally.\nDuration: 2 turn(s)\nRemoves all Debuffs.",
        "scope": "AoE",
        "source": "S (Amayo)",
        "skill_id": 12012
      },
      {
        "char_name": "Kanezaki Jubei",
        "char_icon": "10_Jubei",
        "skill_name": "<Golden Eater> Gold Aegis",
        "skill_type": "[Support Skill]",
        "skill_desc": "Spins the gun in a flashy manner, then shoots it into the sky and gains (40%) ATK UP.\nDuration: 2 turn(s)\nGains Extra Turn.",
        "scope": "Self",
        "source": "S (Golden Eater)",
        "skill_id": 1012
      },
      {
        "char_name": "Echizen Saya",
        "char_icon": "122_Saya",
        "skill_name": "<Yuugure> Heaven Flipping",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Tosses the enemy up in the air with a greatsword and attacks 5 times.\nGains (35%) ATK UP before the attack.\nDuration: 2 turn(s)\nGrants the same Buff to ALL allies with the same type as the character.",
        "scope": "AoE",
        "source": "S (Yuugure)",
        "skill_id": 12213
      },
      {
        "char_name": "Fuuma Tokiko",
        "char_icon": "28_Tokiko",
        "skill_name": "<Sagiri> Evil Eye: Clairvoyance",
        "skill_type": "[Support Skill]",
        "skill_desc": "Uses Clairvoyance to grant a (45%) ATK UP to 1 ally.\nDuration: 2 turn(s)\nReduces the Cooldown of all affected allies' skills by -1 turn(s) and additionally grants Debuff Block.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Sagiri)",
        "skill_id": 2822
      },
      {
        "char_name": "Yuphie & Sophie",
        "char_icon": "58_Yuphiesophie",
        "skill_name": "<Amanohara> The Playful Oni Sisters♪",
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
        "char_name": "Narita Akina",
        "char_icon": "121_Akina",
        "skill_name": "<Utopia> Stone Art: Heavyweight",
        "skill_type": "[Support Skill]",
        "skill_desc": "Musters up strength and gains (40%) DEF UP.\nDuration: 2 turn(s)\nRestores 18% of Max. HP.\nTaunts 1 Random enemy at a 45% chance.",
        "scope": "Self",
        "source": "S (Utopia)",
        "skill_id": 12112
      },
      {
        "char_name": "Nanase Mai",
        "char_icon": "36_Mai",
        "skill_name": "<Origami Shuriken> Paper Spirit: Defense",
        "skill_type": "[Support Skill]",
        "skill_desc": "Protects the character and 1 ally with paper, granting (45%) DEF UP.\nDuration: 2 turn(s)\nRestores 31.5% of the ally’s Max. HP.\nIf the character has DEF UP on Turn Start, reduces the Cooldown of The Paper Spirit Taimanin by -1 turn(s). [Always-active passive effect regardless of cooldown]",
        "scope": "Self",
        "source": "S (Origami Shuriken)",
        "skill_id": 3612
      },
      {
        "char_name": "Kasahara Tatsumi",
        "char_icon": "107_Tatsumi",
        "skill_name": "<Narukami> Blooming Butterfly",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Quickly slashes the enemy 4 times.\nGrants (40%) DEF UP to ALL allies after the attack.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Narukami)",
        "skill_id": 10712
      },
      {
        "char_name": "Yuphie & Sophie",
        "char_icon": "58_Yuphiesophie",
        "skill_name": "<Aozora> The Invincible Twins!!",
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
        "char_name": "Hoshino Mitsuki",
        "char_icon": "37_Mitsuki",
        "skill_name": "<Nikko> Wind Art: Rampaging Gust",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Makes a large tornado and sends it toward ALL enemies.\nPerforms a Shield Penetrate attack.\nWhen defeating an enemy with this skill, fills (20%) of the Turn Gauge at a 95% chance for ALL allies.\nSteals the SPD UP Buff of ALL enemies before the attack.\nDamage increases in proportion to SPD.",
        "scope": "AoE",
        "source": "S (Nikko)",
        "skill_id": 3713
      },
      {
        "char_name": "Momochi Nagi",
        "char_icon": "52_Nagi",
        "skill_name": "<Yamidachi Murasame & Kamikirimaru> Hurricane Taimanin",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start, grants a (19.5%) SPD UP.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Yamidachi Murasame & Kamikirimaru)",
        "skill_id": 5214
      },
      {
        "char_name": "Akiyama Rinko",
        "char_icon": "11_Rinko",
        "skill_name": "<Suijingiri> Meteor Shower",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Summons a meteorite to attack ALL enemies.\nIf the target has SPD DOWN, increases the efficacy of SPD DOWN by a fixed -10%.\nGains (19.5%) SPD UP before the attack.\nDuration: 2 turn(s)\nIf the target is the only one remaining, DMG of all attacks increases by (55%). [Always-active passive effect regardless of cooldown]",
        "scope": "AoE",
        "source": "S (Suijingiri)",
        "skill_id": 1113
      },
      {
        "char_name": "Fuuma Tokiko",
        "char_icon": "28_Tokiko",
        "skill_name": "<Myoren> Evil Eye: Clairvoyance",
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
        "char_name": "Aina Winchester",
        "char_icon": "46_Aina",
        "skill_name": "<Game Changer> Full Burst",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Fires a powerful laser beam towards an enemy with the drone.\nGains a (25%) ACC UP before the attack.\nDuration: 2 turn(s)\nWhen attacking the only remaining enemy, CRIT Rate increases by (37.5%).",
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
        "char_name": "Fuuma Amane",
        "char_icon": "6_Amane",
        "skill_name": "<Android Arm Type Zero> Dotenrin: Heavenly Reverse",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Smites the ground, attacking ALL enemies 1 time(s).\nGrants Shield equal to 15% of ally Max. HP to ALL allies.\nDuration: 2 turn(s)\nIf the target HP is less than 75%, the effect increases to 18%.",
        "scope": "AoE",
        "source": "S (Android Arm Type Zero)",
        "skill_id": 613
      },
      {
        "char_name": "Edwin Black",
        "char_icon": "66_Black",
        "skill_name": "<Crimson Requiem> End of Darkness",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Attacks the enemy using his ability.\nReduces the target's Turn Gauge by (15%) at a 75% chance on Last Attack.\nSteals the Shield the target has before the attack.\nIf the target's HP is less than 50%, increases Shield by 100% after the attack.",
        "scope": "Self",
        "source": "S (Crimson Requiem)",
        "skill_id": 6613
      },
      {
        "char_name": "Eleonor",
        "char_icon": "48_Eleonor",
        "skill_name": "<Dark Green Embryo> Dark Elf of the Dark Woods",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start, if an ally other than the character holds Shield, increases the duration of 1 random Buff(s) by 1 turn(s).",
        "scope": "AoE",
        "source": "S (Dark Green Embryo)",
        "skill_id": 4814
      },
      {
        "char_name": "Fuuma Hoensai",
        "char_icon": "111_Houensai",
        "skill_name": "<Daruma> Oil Art: Flame Disaster",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Breathes out fire, attacking ALL enemies 3 times.\nRemoves Shield from the targets.\nTargets hit are Taunted at a 45% chance.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Daruma)",
        "skill_id": 11113
      },
      {
        "char_name": "Shinganji Kurenai",
        "char_icon": "21_Kurenai",
        "skill_name": "<Warrior's Dual Sword> Crimson Princess of Bloodshed",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Attacking an enemy with Shield, CRIT DMG increases by (10%).\nApplies to all skills.",
        "scope": "AoE",
        "source": "S (Warrior's Dual Sword)",
        "skill_id": 2114
      },
      {
        "char_name": "Minasaki",
        "char_icon": "85_Minasaki",
        "skill_name": "<Nightsky Ribbon> GAN★BA★RE!!",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants ALL allies (2) Protective Shield(s).\nDuration: 2 turn(s)\nGrants ALL allies (5.5%) Healing Over Time.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Nightsky Ribbon)",
        "skill_id": 8513
      },
      {
        "char_name": "Merriam",
        "char_icon": "104_Miriam",
        "skill_name": "<Familiars Carrot & Eggplant> Cure Spell",
        "skill_type": "[Support Skill]",
        "skill_desc": "Restores HP of a targeted ally by 22.5% of their Max. HP.\nGrants (2) Protective Shield.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Familiars Carrot & Eggplant)",
        "skill_id": 10413
      },
      {
        "char_name": "Yatsu Murasaki",
        "char_icon": "19_Murasaki",
        "skill_name": "<Combat Axe> Fortification",
        "skill_type": "[Support Skill]",
        "skill_desc": "Gains a Shield equal to 19.5% of the character's Max. HP.\nDuration: 2 turn(s)\nTaunts ALL enemies at a fixed chance of 35%\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Combat Axe)",
        "skill_id": 1912
      },
      {
        "char_name": "Clear Lovell",
        "char_icon": "86_Robel",
        "skill_name": "<Tomurai & Requiem> Type: Hero",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Lovell's skill gets enhanced every 4 turns.\nParticle Weapon: Shini: Steals enemy Shield. Shield effect increases by 50% after stealing.\nParticle Weapon: Kamui\nShield amount increases by 24%.\nGrants (40%) Protect Ally to ALL allies.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Tomurai & Requiem)",
        "skill_id": 8613
      },
      {
        "char_name": "Uehara Shikanosuke",
        "char_icon": "80_Shikanosuke",
        "skill_name": "<Snowflake> Elec Art: Lightning Tackle",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Charges at the enemy with electricity coursing through the character.\nInflicts that target with Electrocute at a 30% chance.\nDuration: 2 turn(s)\nGains (2) Protective Shield after the attack.\nDuration: 2 turn(s)\nIf Uehara Rin is deployed, applies the same effect to ALL allies.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Snowflake)",
        "skill_id": 8013
      },
      {
        "char_name": "Mizuki Shiranui",
        "char_icon": "13_Shiranui",
        "skill_name": "<Kagero> Phantom Taimanin",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If the character has a Shield, on Turn Start, decreases the duration of 1 Random Debuffs held by ALL allies by -1 turn(s).",
        "scope": "AoE",
        "source": "S (Kagero)",
        "skill_id": 1314
      },
      {
        "char_name": "Amamiya Shisui",
        "char_icon": "42_Shisui",
        "skill_name": "<Pussycat Headphones> Guardian's Touchdown",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If HP is less than 50%, grants (3) Protective Shield to the character when hit.\nDuration: 2 turn(s)\nIf the enemy uses a Debuff Block skill, decreases the duration of ALL enemies' Debuff Block Buff by -1 turn(s).\n[Always-active passive effect regardless of cooldown]",
        "scope": "Self",
        "source": "S (Pussycat Headphones)",
        "skill_id": 4214
      },
      {
        "char_name": "Yuphie & Sophie",
        "char_icon": "58_Yuphiesophie",
        "skill_name": "<Aozora> The Invincible Twins!!",
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
        "skill_name": "<Nightsky Ribbon> GAN★BA★RE!!",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants ALL allies (2) Protective Shield(s).\nDuration: 2 turn(s)\nGrants ALL allies (5.5%) Healing Over Time.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Nightsky Ribbon)",
        "skill_id": 8513
      },
      {
        "char_name": "Merriam",
        "char_icon": "104_Miriam",
        "skill_name": "<Familiars Carrot & Eggplant> Cure Spell",
        "skill_type": "[Support Skill]",
        "skill_desc": "Restores HP of a targeted ally by 22.5% of their Max. HP.\nGrants (2) Protective Shield.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Familiars Carrot & Eggplant)",
        "skill_id": 10413
      },
      {
        "char_name": "Uehara Shikanosuke",
        "char_icon": "80_Shikanosuke",
        "skill_name": "<Snowflake> Elec Art: Lightning Tackle",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Charges at the enemy with electricity coursing through the character.\nInflicts that target with Electrocute at a 30% chance.\nDuration: 2 turn(s)\nGains (2) Protective Shield after the attack.\nDuration: 2 turn(s)\nIf Uehara Rin is deployed, applies the same effect to ALL allies.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Snowflake)",
        "skill_id": 8013
      },
      {
        "char_name": "Amamiya Shisui",
        "char_icon": "42_Shisui",
        "skill_name": "<Pussycat Headphones> Guardian's Touchdown",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If HP is less than 50%, grants (3) Protective Shield to the character when hit.\nDuration: 2 turn(s)\nIf the enemy uses a Debuff Block skill, decreases the duration of ALL enemies' Debuff Block Buff by -1 turn(s).\n[Always-active passive effect regardless of cooldown]",
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
        "char_name": "Emily Simmons",
        "char_icon": "15_Emily",
        "skill_name": "<Nebula Type 2> Vital Check",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Checks the physical information of the specified target and grants a (13%) Damage Reflect\nDuration: 2 turn(s)\nAdditionally grants Immortal.\nDuration: 1 turn(s)",
        "scope": "Self",
        "source": "S (Nebula Type 2)",
        "skill_id": 1513
      },
      {
        "char_name": "Major",
        "char_icon": "63_Major",
        "skill_name": "<Moon Shot> Chance Maker",
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
        "char_name": "Alectra",
        "char_icon": "124_Arectra",
        "skill_name": "<Tisiphone> Wrath of the Vengeful",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When defeated after being attacked by an enemy, she resurrects at 1% of Max. HP and enters an Immortal state.\nDuration: 1 turn(s)\nAdditionally gains (60%) ATK UP.\nDuration: 2 turn(s)\nIf Wrath of the Vengeful is on Cooldown, performs an Additional Attack on every attack.",
        "scope": "Self",
        "source": "S (Tisiphone)",
        "skill_id": 12413
      },
      {
        "char_name": "Emily Simmons",
        "char_icon": "15_Emily",
        "skill_name": "<Nebula Type 2> Vital Check",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Checks the physical information of the specified target and grants a (13%) Damage Reflect\nDuration: 2 turn(s)\nAdditionally grants Immortal.\nDuration: 1 turn(s)",
        "scope": "Self",
        "source": "S (Nebula Type 2)",
        "skill_id": 1513
      },
      {
        "char_name": "Felicia",
        "char_icon": "30_Felicia",
        "skill_name": "<Soul Eraser> Immortal Hunting",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Strikes an enemy with a scythe.\nWhen the target has 3 or more Debuffs, and the character's HP is less than 30%, attacking an enemy deals Instant Death at a fixed chance of 75%.\nIncreases the duration of all Buffs by 1 turn after the attack.\nSteals Immortal from the enemy before the attack.",
        "scope": "AoE",
        "source": "S (Soul Eraser)",
        "skill_id": 3013
      },
      {
        "char_name": "Yatsu Kuro",
        "char_icon": "4_Kuro",
        "skill_name": "<Sword Breaker> CQC-Double Attack",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Runs toward the enemy with a dagger and attacks 2 times.\nReduces Cooldown of Awakened Immortal by -1 turn(s) after the attack.",
        "scope": "Self",
        "source": "S (Sword Breaker)",
        "skill_id": 411
      },
      {
        "char_name": "Yatsu Murasaki",
        "char_icon": "19_Murasaki",
        "skill_name": "<Killing Spree> Awakened Immortal",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Murasaki doesn't go down easily.\nWhen defeated after being attacked by an enemy, she resurrects at 30% of Max. HP and enters an Immortal state.\nDuration: 1 turn(s)\nWhen an enemy uses a skill that grants ATK UP Buff, Taunts 2 enemies with the highest ATK.\n[Always-active passive effect regardless of cooldown]\nDuration: 1 turn(s)",
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
        "char_name": "Kichi Azusa",
        "char_icon": "14_Azusa",
        "skill_name": "<Rasetsumaru> Shikigami: Bodyguard",
        "skill_type": "[Support Skill]",
        "skill_desc": "Brings the hand to the mouth and recites a spell, gains (5%) Healing Over Time and (19.5%) Power-up.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Rasetsumaru)",
        "skill_id": 1412
      },
      {
        "char_name": "Rakshasa",
        "char_icon": "125_Sokushitsuki",
        "skill_name": "<Minagoroshi> Raging Wind, Clear Moon",
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
        "char_name": "Su Jinglei",
        "char_icon": "18_Jinglei",
        "skill_name": "<Demolisher Fist> Taimanin Art: Fist",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Delivers 3 powerful punches at the enemy. DMG increases as DEF increases.\nGrants 45% Protect Ally to the ally with the lowest HP on Last Attack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Demolisher Fist)",
        "skill_id": 1811
      },
      {
        "char_name": "Clear Lovell",
        "char_icon": "86_Robel",
        "skill_name": "<Tomurai & Requiem> Type: Hero",
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
        "skill_name": "<Tear of Rusalka> Defensive Nectar",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Grants Debuff Block to ALL allies using the power of nature.\nDuration: 2 turn(s)\nAdditionally grants (45%) ATK UP if the allies other than the character with granted Debuff Block doesn't have any Debuff.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Tear of Rusalka)",
        "skill_id": 4813
      },
      {
        "char_name": "Fuuma Tokiko",
        "char_icon": "28_Tokiko",
        "skill_name": "<Myoren> Evil Eye: Clairvoyance",
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
        "char_name": "Narita Akina",
        "char_icon": "121_Akina",
        "skill_name": "<Utopia> Stone Art: Heavyweight",
        "skill_type": "[Support Skill]",
        "skill_desc": "Musters up strength and gains (40%) DEF UP.\nDuration: 2 turn(s)\nRestores 18% of Max. HP.\nTaunts 1 Random enemy at a 45% chance.",
        "scope": "Self",
        "source": "S (Utopia)",
        "skill_id": 12112
      },
      {
        "char_name": "Kikuchi Aoi",
        "char_icon": "117_Aoi",
        "skill_name": "<Terpsichore> Sound Art: Dolce",
        "skill_type": "[Support Skill]",
        "skill_desc": "Heals allies with beautiful melodies.\nRestores HP of ALL allies by 25% of the target's Max. HP.\nEverytime the character gains a Buff, reduces the Cooldown of all skills by -1 turn(s). [Always-active passive effect regardless of cooldown]",
        "scope": "AoE",
        "source": "S (Terpsichore)",
        "skill_id": 11713
      },
      {
        "char_name": "Kichi Azusa",
        "char_icon": "14_Azusa",
        "skill_name": "<Rasetsumaru> Shikigami: Bodyguard",
        "skill_type": "[Support Skill]",
        "skill_desc": "Brings the hand to the mouth and recites a spell, gains (5%) Healing Over Time and (19.5%) Power-up.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Rasetsumaru)",
        "skill_id": 1412
      },
      {
        "char_name": "Cecilia Cello",
        "char_icon": "79_Cello",
        "skill_name": "<DSO-LuV.DX> Playful Child",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Healing Effect granted by the character increases by  35%.",
        "scope": "Self",
        "source": "S (DSO-LuV.DX)",
        "skill_id": 7912
      },
      {
        "char_name": "Hasegawa Fuuki",
        "char_icon": "127_Hasegawafuki",
        "skill_name": "<Stormwind Form> Wind Demon Style: Prosper Wind",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Grants (5.5%) Healing Over Time to ALL allies.\nDuration: 3 turn(s)\nEach Debuff on the target restores 37.5% of the target's Max. HP\nStacks up to 3.",
        "scope": "AoE",
        "source": "S (Stormwind Form)",
        "skill_id": 12713
      },
      {
        "char_name": "Yuri Hisui",
        "char_icon": "41_Hisui",
        "skill_name": "<Tara's Steel Staff> Monk Staff Art",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Stabs the enemy with a stone scepter, attacking 4 times.\nRestores ALL allies' HP on Last Attack by 4% of Max. HP.",
        "scope": "AoE",
        "source": "S (Tara's Steel Staff)",
        "skill_id": 4111
      },
      {
        "char_name": "Kagero",
        "char_icon": "123_Kagero",
        "skill_name": "<Melancholy> Vain Haze",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start, restores 6% of the character's Max. HP.",
        "scope": "Self",
        "source": "S (Melancholy)",
        "skill_id": 12313
      },
      {
        "char_name": "Nanase Mai",
        "char_icon": "36_Mai",
        "skill_name": "<Origami Shuriken> Paper Spirit: Defense",
        "skill_type": "[Support Skill]",
        "skill_desc": "Protects the character and 1 ally with paper, granting (45%) DEF UP.\nDuration: 2 turn(s)\nRestores 31.5% of the ally’s Max. HP.\nIf the character has DEF UP on Turn Start, reduces the Cooldown of The Paper Spirit Taimanin by -1 turn(s). [Always-active passive effect regardless of cooldown]",
        "scope": "Self",
        "source": "S (Origami Shuriken)",
        "skill_id": 3612
      },
      {
        "char_name": "Kiryu Mikoto",
        "char_icon": "22_Mikoto",
        "skill_name": "<Kijingiri> Ghost Arm",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On every attack, CRIT Rate increases by (15%)\nWhen defeating the enemy, restores HP of 1 ally with the lowest HP by 6% of the target.",
        "scope": "Self",
        "source": "S (Kijingiri)",
        "skill_id": 2212
      },
      {
        "char_name": "Minasaki",
        "char_icon": "85_Minasaki",
        "skill_name": "<Nightsky Ribbon> GAN★BA★RE!!",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants ALL allies (2) Protective Shield(s).\nDuration: 2 turn(s)\nGrants ALL allies (5.5%) Healing Over Time.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Nightsky Ribbon)",
        "skill_id": 8513
      },
      {
        "char_name": "Merriam",
        "char_icon": "104_Miriam",
        "skill_name": "<Familiars Carrot & Eggplant> Cure Spell",
        "skill_type": "[Support Skill]",
        "skill_desc": "Restores HP of a targeted ally by 22.5% of their Max. HP.\nGrants (2) Protective Shield.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Familiars Carrot & Eggplant)",
        "skill_id": 10413
      },
      {
        "char_name": "Kousaka Shizuru",
        "char_icon": "29_Shizuru",
        "skill_name": "<Queen's Rose> Shizuru of Flowers",
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
        "char_name": "Kichi Azusa",
        "char_icon": "14_Azusa",
        "skill_name": "<Rasetsumaru> Shikigami: Bodyguard",
        "skill_type": "[Support Skill]",
        "skill_desc": "Brings the hand to the mouth and recites a spell, gains (5%) Healing Over Time and (19.5%) Power-up.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Rasetsumaru)",
        "skill_id": 1412
      },
      {
        "char_name": "Hasegawa Fuuki",
        "char_icon": "127_Hasegawafuki",
        "skill_name": "<Stormwind Form> Wind Demon Style: Prosper Wind",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Grants (5.5%) Healing Over Time to ALL allies.\nDuration: 3 turn(s)\nEach Debuff on the target restores 37.5% of the target's Max. HP\nStacks up to 3.",
        "scope": "AoE",
        "source": "S (Stormwind Form)",
        "skill_id": 12713
      },
      {
        "char_name": "Yuri Hisui",
        "char_icon": "41_Hisui",
        "skill_name": "<Jizo's Steel Staff> Eclipse Meld: Resonate",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Using a skill on every 4th turn grants an additional effect.\nWhen using Monk Staff Art, Healing Effect increases by (100%).\nWhen using Eclipse Meld: Syphoning Strike, inflicts Immobilize on an enemy at a 50% chance.\nDuration: 2 turn(s)\nWhen using Eclipse Meld: Sound, grants a (7%) Healing Over Time to all allies for 2 turn(s).",
        "scope": "AoE",
        "source": "S (Jizo's Steel Staff)",
        "skill_id": 4114
      },
      {
        "char_name": "Nanase Mai",
        "char_icon": "36_Mai",
        "skill_name": "<Origami Dagger> Paper Spirit: Absolute Barrier",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Builds a giant paper wall and grants (2) Protective Shields to ALL allies.\nDuration: 2 turn(s)\nGrants (7%)  Healing Over Time to allies whose HP is less than 50%.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Origami Dagger)",
        "skill_id": 3613
      },
      {
        "char_name": "Minasaki",
        "char_icon": "85_Minasaki",
        "skill_name": "<Nightsky Ribbon> GAN★BA★RE!!",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants ALL allies (2) Protective Shield(s).\nDuration: 2 turn(s)\nGrants ALL allies (5.5%) Healing Over Time.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Nightsky Ribbon)",
        "skill_id": 8513
      },
      {
        "char_name": "Kousaka Shizuru",
        "char_icon": "29_Shizuru",
        "skill_name": "<Queen's Rose> Shizuru of Flowers",
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
        "skill_name": "<Pink Band> Charming Arrow",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Shoots a heart-shaped arrow to attack the enemy.\nIf the target is hit, performs a (15%) Life Steal attack.\nIncreases all Debuff turn(s) the target has by 1 at a 70% chance after the attack.",
        "scope": "AoE",
        "source": "S (Pink Band)",
        "skill_id": 7213
      },
      {
        "char_name": "Oboro",
        "char_icon": "23_Oboro",
        "skill_name": "<Taima Claw: Misty Moon> Traitor Taimanin",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Performs a (15%) Life Steal when attacking.\nFor each Bleed inflicted on the enemy, increases DMG by 10%.",
        "scope": "Self",
        "source": "S (Taima Claw: Misty Moon)",
        "skill_id": 2314
      },
      {
        "char_name": "Saya NEO",
        "char_icon": "59_Sayaneo",
        "skill_name": "<Abyss Crawler> Saya NEO Special",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Stabs mercilessly with tentacles to attack the enemy.\nThis skill performs a (15%) Life Steal attack.\nPerforms a (30%) Bleed Debuff Resonance attack.",
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
        "char_name": "Koukawa Asuka",
        "char_icon": "16_Asuka",
        "skill_name": "<Magnet Edge> Taimanin Art: Heavenly Dance",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Uses blades on her arms and legs to attack consecutively 5 times.\nIf the target is a Technique type, DMG increases (37.5%).\nWhen defeating the enemy with this skill, gains Extra Turn.",
        "scope": "Self",
        "source": "S (Magnet Edge)",
        "skill_id": 1622
      },
      {
        "char_name": "Mirabell Bell",
        "char_icon": "103_Bell",
        "skill_name": "<Peacemaker> Full Metal Jacket",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Fires the rifle in short bursts at the enemy.\nWhen defeating an enemy with this skill, gains Extra Turn.",
        "scope": "Self",
        "source": "S (Peacemaker)",
        "skill_id": 10311
      },
      {
        "char_name": "Hiiragi Fuyumi",
        "char_icon": "39_Fuyumi",
        "skill_name": "<Haruhara> Reorganize",
        "skill_type": "[Support Skill]",
        "skill_desc": "Assumes a battle ready stance and gains an Extra Turn, restoring 18% of Max. HP.",
        "scope": "Self",
        "source": "S (Haruhara)",
        "skill_id": 3912
      },
      {
        "char_name": "Kanezaki Jubei",
        "char_icon": "10_Jubei",
        "skill_name": "<Golden Eater> Gold Aegis",
        "skill_type": "[Support Skill]",
        "skill_desc": "Spins the gun in a flashy manner, then shoots it into the sky and gains (40%) ATK UP.\nDuration: 2 turn(s)\nGains Extra Turn.",
        "scope": "Self",
        "source": "S (Golden Eater)",
        "skill_id": 1012
      },
      {
        "char_name": "Tsubaki Onkyouki",
        "char_icon": "126_Ongyouki",
        "skill_name": "<Aurora Katana> Shade Demon Style: Assassinate",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Attacks the enemy at a speed untrackable to the naked eye.\nIf the target's HP is less than 50%, increases DMG by 45%.\nWhen defeating an enemy with this skill, gains Extra Turn.\nGains Stealth before the attack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Aurora Katana)",
        "skill_id": 12613
      },
      {
        "char_name": "Touge Kinki",
        "char_icon": "60_Tougekinki",
        "skill_name": "<Shishikirimaru> Iron Demon Style: Metal Counter",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Scatters sword aura to attack the designated enemy, then performs 2 additional attacks. Each additional attack targets Random enemies.\nGains Counterattack after the attack.\nWhen defeating an enemy with this skill, gains an Extra Turn.",
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
        "char_name": "Fuuma Amane",
        "char_icon": "6_Amane",
        "skill_name": "<Android Arm Secrecy> Fuuma Martial Art: Skyfall",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start absorbs (12.5%) Turn Gauge of the enemy with the strongest ATK at a 50% chance.\nOn Turn Start, removes 1 Debuff on the character.",
        "scope": "Self",
        "source": "S (Android Arm Secrecy)",
        "skill_id": 612
      },
      {
        "char_name": "Anemone",
        "char_icon": "77_Anemone",
        "skill_name": "<In Memorial> Call of Anubis",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Spreads a wide spider web to attack ALL enemies.\nDMG increases by (10%) for every Poison the target has.\nTarget hit is inflicted with Sleep if the target has 3 or more Debuffs, including Poison on the Last Attack.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (In Memorial)",
        "skill_id": 7712
      },
      {
        "char_name": "Edwin Black",
        "char_icon": "66_Black",
        "skill_name": "<Crimson Requiem> End of Darkness",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Attacks the enemy using his ability.\nReduces the target's Turn Gauge by (15%) at a 75% chance on Last Attack.\nSteals the Shield the target has before the attack.\nIf the target's HP is less than 50%, increases Shield by 100% after the attack.",
        "scope": "Self",
        "source": "S (Crimson Requiem)",
        "skill_id": 6613
      },
      {
        "char_name": "Ingrid",
        "char_icon": "25_Ingrid",
        "skill_name": "<Sol Brave> Evil Flame Slash",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Performs a consecutive sword dance to attack the enemy 4 times.\nTarget hit has their Turn Gauge decreased by (15%) at a 10% chance.\nPerforms 2 Additional Attacks and deals (30%) Burn Debuff Resonance.\nIf the target's SPD is higher than the character's, damage dealt increases based on the difference.",
        "scope": "Self",
        "source": "S (Sol Brave)",
        "skill_id": 2512
      },
      {
        "char_name": "Su Jinglei",
        "char_icon": "18_Jinglei",
        "skill_name": "<Companion Hand> Kokuryuha",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Unleashes the power of the dragon and attacks ALL enemies.\nPerforms a (60%) DEF Penetrate attack to the target hit.\nOn Last Attack, reduces the Turn Gauge of the enemy with the highest ATK by (15%) at a 65% chance.",
        "scope": "AoE",
        "source": "S (Companion Hand)",
        "skill_id": 1813
      },
      {
        "char_name": "Shishimura Koro",
        "char_icon": "44_Koro",
        "skill_name": "<Zetsuen> Soul Art: Soul Resurrection",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When the enemy dies, fills (20%) of the Turn Gauge of ALL allies at a 50% chance.",
        "scope": "AoE",
        "source": "S (Zetsuen)",
        "skill_id": 4413
      },
      {
        "char_name": "Shinganji Kurenai",
        "char_icon": "21_Kurenai",
        "skill_name": "<Jet Black & Pitch Black> Wind Art: Wind Cloak",
        "skill_type": "[Support Skill]",
        "skill_desc": "Uses Wind Art to to sharpen the swords further.\nGains (32.5%) CRIT Rate UP.\nDuration: 2 turn(s)\nOn every CRIT ATK, decreases (15%) of the target's Turn Gauge at a 20% chance.\n[Always-active passive effect regardless of cooldown]",
        "scope": "Self",
        "source": "S (Jet Black & Pitch Black)",
        "skill_id": 2112
      },
      {
        "char_name": "Masked Taimanin",
        "char_icon": "78_Maskedtaimanin",
        "skill_name": "<Kokuten> Taimanin Art: Uprising Storm",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Randomly swings the knife and attacks the enemy 8 times.\nPerforms a (30%) Bleed Debuff Resonance attack.\nWhen defeating an enemy with this skill, reduces the Turn Gauge of ALL enemies by (15%) at a 50% chance.",
        "scope": "AoE",
        "source": "S (Kokuten)",
        "skill_id": 7812
      },
      {
        "char_name": "Hoshino Mitsuki",
        "char_icon": "37_Mitsuki",
        "skill_name": "<Nikko> Wind Art: Rampaging Gust",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Makes a large tornado and sends it toward ALL enemies.\nPerforms a Shield Penetrate attack.\nWhen defeating an enemy with this skill, fills (20%) of the Turn Gauge at a 95% chance for ALL allies.\nSteals the SPD UP Buff of ALL enemies before the attack.\nDamage increases in proportion to SPD.",
        "scope": "AoE",
        "source": "S (Nikko)",
        "skill_id": 3713
      },
      {
        "char_name": "Homare Nao",
        "char_icon": "113_Nao",
        "skill_name": "<Tyr> Light Art: Aurora Burst",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Fires a single laser beam at an enemy, dealing DMG.\nTarget hit has their Turn Gauge reduced by (15%) at a 75% chance.\nIf the target's Turn Gauge is less than 10%, increases all Debuffs' duration the target has by 1 turn(s).",
        "scope": "AoE",
        "source": "S (Tyr)",
        "skill_id": 11313
      },
      {
        "char_name": "Amadare Natsume",
        "char_icon": "20_Natsume",
        "skill_name": "<Witch Sleeve> Alluring Touch",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks ALL enemies with alluring gestures.\nTarget hit is Taunted at a 45% chance.\nDuration: 2 turn(s)\nIf the target already is Taunted, puts them in Confusion state at a fixed chance of 30%.\nDuration: 1 turn(s)\nIf the target is an Agility type, decreases (15%) of their Turn Gauge at a 95% chance.",
        "scope": "AoE",
        "source": "S (Witch Sleeve)",
        "skill_id": 2012
      },
      {
        "char_name": "Noah Brown",
        "char_icon": "26_Noah",
        "skill_name": "<Love of Restraints> Manmade Demon",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Recovers 4.5% of Max. HP whenever an enemy dies, and fills Turn Gauge by (20%) at a 20% chance.\nThe DMG of all of Noah's skills increase the lower the HP.",
        "scope": "AoE",
        "source": "S (Love of Restraints)",
        "skill_id": 2614
      },
      {
        "char_name": "Renee",
        "char_icon": "101_Rene",
        "skill_name": "<Pandora's Box> Justice Execution!",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When an enemy is killed by an ally attack, fills the Turn Gauge of the ally with the highest ATK excluding herself by (20%) at a 20% chance.",
        "scope": "Self",
        "source": "S (Pandora's Box)",
        "skill_id": 10113
      },
      {
        "char_name": "Uehara Rin",
        "char_icon": "32_Rin",
        "skill_name": "<Lightning Saber II Raizin> Lightning Art: Chain Volt",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Overcharges both swords with electricity and slashes at the enemy.\nRemoves the target's 1 Random Buffs and inflicts Faint at a 20% chance on the Last Attack.\nDuration: 1 turn(s)\nIf the character performs CRIT ATK, absorbs (12.5%) of the Turn Gauge at a 60% chance.\nIf the character has Overclock, increases CRIT Rate by (37.5%).",
        "scope": "Self",
        "source": "S (Lightning Saber II Raizin)",
        "skill_id": 3213
      },
      {
        "char_name": "Igawa Sakura",
        "char_icon": "5_Sakura",
        "skill_name": "<Kagedachi> Mischief Taimanin",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When CRIT ATK lands, fills the character's Turn Gauge by (20%) at a fixed chance of 25%.",
        "scope": "Self",
        "source": "S (Kagedachi)",
        "skill_id": 514
      },
      {
        "char_name": "Kousaka Shizuru",
        "char_icon": "29_Shizuru",
        "skill_name": "<Thorn Knight> Sprout Garden",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "With an elegant dance, petals flutter, restoring the HP of ALL allies by 22.5% of the character's own Max. HP.\nIf the target's HP is more than 65% after healing, fills their Turn Gauge by (20%) at a 100% chance.",
        "scope": "AoE",
        "source": "S (Thorn Knight)",
        "skill_id": 2913
      },
      {
        "char_name": "Michea Silkys",
        "char_icon": "90_Silkys",
        "skill_name": "<Neon Saucer> Hero Vibes",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Whenever an ally gets a Debuff, removes 1 Random Debuff of ALL allies.\nFills the Turn Gauge of ALL allies by (20%) at a 65% chance.",
        "scope": "AoE",
        "source": "S (Neon Saucer)",
        "skill_id": 9012
      },
      {
        "char_name": "Kuonji R. Spica",
        "char_icon": "70_Spica",
        "skill_name": "<Bushido Striker> Samurai Shooter",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start, fills the Turn Gauge of 1 ally with the highest ATK by (20%) at a fixed 30% chance.",
        "scope": "Self",
        "source": "S (Bushido Striker)",
        "skill_id": 7012
      },
      {
        "char_name": "Akiyama Tatsuro",
        "char_icon": "12_Tatsuro",
        "skill_name": "<Amakudari> Itto Style: Moon Fall",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Leaps high and slashes enemies with a sword gripped in reverse.\nTarget hit is inflicted with (-19.5%) SPD DOWN at a 95% chance.\nDuration: 2 turn(s)\nAbsorbs (12.5%) Turn Gauge at a 35% chance.",
        "scope": "AoE",
        "source": "S (Amakudari)",
        "skill_id": 1212
      },
      {
        "char_name": "Watarase Tsumugi",
        "char_icon": "116_Tsumugi",
        "skill_name": "<Kepler> Heavy Smash",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Swings a hammer from above the head, attacking the enemy.\nIf the target has 2 or more Debuffs, absorbs Turn Gauge by (12.5%) at a 10% chance.",
        "scope": "Self",
        "source": "S (Kepler)",
        "skill_id": 11611
      },
      {
        "char_name": "Tina Worrell",
        "char_icon": "226_Worrell",
        "skill_name": "<Crimson Tempest> Plasma Rifle: Burst",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Charges the plasma rifle, and fires it 4 time(s) at the enemy.\nPerforms a (60%) DEF Penetrate attack.\nIf only 1 enemy is left, the last attack reduces the Turn Gauge of the target by (15%) at a 85% chance.",
        "scope": "Single Target",
        "source": "S (Crimson Tempest)",
        "skill_id": 22613
      },
      {
        "char_name": "Fujibayashi Yuno",
        "char_icon": "69_Yuno",
        "skill_name": "<Plasma Whip> Ravaging Whip",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Lashes the enemy with a whip while in midair, attacking 7 times.\nReduces the target's Turn Gauge by (15%) at a 5% chance, each time the target is hit.\nIf the target's Turn Gauge is less than 30% after the attack, increases the target's Debuffs by 1 turn(s).",
        "scope": "Self",
        "source": "S (Plasma Whip)",
        "skill_id": 6912
      },
      {
        "char_name": "Shirase Yuzuriha",
        "char_icon": "17_Yuzuriha",
        "skill_name": "<Atropos Glove> Silk Barrier",
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
        "char_name": "Kikuchi Aoi",
        "char_icon": "117_Aoi",
        "skill_name": "<Terpsichore> Sound Art: Dolce",
        "skill_type": "[Support Skill]",
        "skill_desc": "Heals allies with beautiful melodies.\nRestores HP of ALL allies by 25% of the target's Max. HP.\nEverytime the character gains a Buff, reduces the Cooldown of all skills by -1 turn(s). [Always-active passive effect regardless of cooldown]",
        "scope": "AoE",
        "source": "S (Terpsichore)",
        "skill_id": 11713
      },
      {
        "char_name": "Aishu Hebiko",
        "char_icon": "49_Hebiko",
        "skill_name": "<Jakou> Octopus Sever",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Draws the sword from the back and slashes the enemy 3 times.\nReduces the Cooldown of the 3rd skill of the ally with the highest ATK by -1 turn(s) on the Last Attack, excluding the character.",
        "scope": "Self",
        "source": "S (Jakou)",
        "skill_id": 4911
      },
      {
        "char_name": "Iska",
        "char_icon": "154_Isuka",
        "skill_name": "<Yumegiri> Paper Spirit: White Flash",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Transforms the spear into a giant sword using ninja art, and slashes ALL enemies.\nDefeating an enemy with this skill reduces Cooldown of Nomad's Cyborg Ninja by -1 turn(s). \nIf only 1 enemy remains, increases DMG by (45%).",
        "scope": "AoE",
        "source": "S (Yumegiri)",
        "skill_id": 15412
      },
      {
        "char_name": "Tekkain Koharu",
        "char_icon": "73_Koharu",
        "skill_name": "<TMP-73 Pro> Elec Art: Display",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Summons a flock of electronic animals and charges them toward the enemy.\nInflicts Active Skill Disabled to the target at a 10% chance.\nDuration: 2 turn(s)\nWhen defeating an enemy with this skill, reduces Cooldown of 2nd skill of ALL allies by -1 turn(s).",
        "scope": "AoE",
        "source": "S (TMP-73 Pro)",
        "skill_id": 7313
      },
      {
        "char_name": "Yatsu Kuro",
        "char_icon": "4_Kuro",
        "skill_name": "<Sword Breaker> CQC-Double Attack",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Runs toward the enemy with a dagger and attacks 2 times.\nReduces Cooldown of Awakened Immortal by -1 turn(s) after the attack.",
        "scope": "Self",
        "source": "S (Sword Breaker)",
        "skill_id": 411
      },
      {
        "char_name": "Nanase Mai",
        "char_icon": "36_Mai",
        "skill_name": "<Origami Shuriken> Paper Spirit: Defense",
        "skill_type": "[Support Skill]",
        "skill_desc": "Protects the character and 1 ally with paper, granting (45%) DEF UP.\nDuration: 2 turn(s)\nRestores 31.5% of the ally’s Max. HP.\nIf the character has DEF UP on Turn Start, reduces the Cooldown of The Paper Spirit Taimanin by -1 turn(s). [Always-active passive effect regardless of cooldown]",
        "scope": "Self",
        "source": "S (Origami Shuriken)",
        "skill_id": 3612
      },
      {
        "char_name": "Ise Nodoka",
        "char_icon": "115_Nodoka",
        "skill_name": "<Sabimaru> Taimanin Art: Water Mirror",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Swings the blade gracefully, attacking the enemy 2 time(s).\nReduces Cooldown of Mirror Art: Clear Mirror, Still Water by -1 turn(s).",
        "scope": "Self",
        "source": "S (Sabimaru)",
        "skill_id": 11511
      },
      {
        "char_name": "Tsubaki Onkyouki",
        "char_icon": "126_Ongyouki",
        "skill_name": "<Tachyon Blade> Demon of \"Shade\"",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Defeating an enemy reduces all of the character's Cooldown by -1 turn(s).\nIf the character is in Stealth, increases CRIT DMG by (10%).",
        "scope": "AoE",
        "source": "S (Tachyon Blade)",
        "skill_id": 12614
      },
      {
        "char_name": "Fuuma Tokiko",
        "char_icon": "28_Tokiko",
        "skill_name": "<Myoren> Evil Eye: Clairvoyance",
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
        "char_name": "Touge Kinki",
        "char_icon": "60_Tougekinki",
        "skill_name": "<Shishikirimaru> Iron Demon Style: Metal Counter",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Scatters sword aura to attack the designated enemy, then performs 2 additional attacks. Each additional attack targets Random enemies.\nGains Counterattack after the attack.\nWhen defeating an enemy with this skill, gains an Extra Turn.",
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
        "char_name": "Tsubaki Onkyouki",
        "char_icon": "126_Ongyouki",
        "skill_name": "<Aurora Katana> Shade Demon Style: Assassinate",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Attacks the enemy at a speed untrackable to the naked eye.\nIf the target's HP is less than 50%, increases DMG by 45%.\nWhen defeating an enemy with this skill, gains Extra Turn.\nGains Stealth before the attack.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Aurora Katana)",
        "skill_id": 12613
      },
      {
        "char_name": "Hasuma Reiko",
        "char_icon": "176_Reiko",
        "skill_name": "<Gengetsu> Taima Whip Style: Round Up",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Whips ALL enemies while spinning around.\nRemoves Stealth from ALL enemies after the attack.",
        "scope": "AoE",
        "source": "S (Gengetsu)",
        "skill_id": 17613
      },
      {
        "char_name": "Igawa Sakura",
        "char_icon": "5_Sakura",
        "skill_name": "<Assasin's Dagger> Shadow Arts: Beast Call",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Summons a shadow creature and sends it toward the enemy.\nInflicts (-40%) DEF DOWN to the target at a 95% chance before the attack.\nDuration: 2 turn(s)\nGoes into Stealth mode when defeating an enemy with this skill.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Assasin's Dagger)",
        "skill_id": 512
      },
      {
        "char_name": "Igawa Sakuya",
        "char_icon": "2_Sakuya",
        "skill_name": "<Liberator & Sonic Blade> Moon Shadow",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When hit by an attack other than an all-target attack, uses Moon Shadow.\nGoes into Stealth mode.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Liberator & Sonic Blade)",
        "skill_id": 212
      },
      {
        "char_name": "Kuroki Shizuku",
        "char_icon": "95_Shizuku",
        "skill_name": "<Tsukikage> Black Droplet",
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
        "skill_name": "<Ruby Eye> Queen of the Inferno",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When attacking an enemy with Burn, performs a (15%) DEF Penetrate attack.",
        "scope": "Self",
        "source": "S (Ruby Eye)",
        "skill_id": 2714
      },
      {
        "char_name": "Sanada Homura",
        "char_icon": "35_Homura",
        "skill_name": "<Tsukiyo> Flaming Spear Battler",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When attacking an enemy with HP at 70% or more, reduces 1 turn(s) of 1 Random Buff they possess.\nWhen attacking an enemy with HP less than 40%, performs a (15%) DEF Penetrate attack.",
        "scope": "Self",
        "source": "S (Tsukiyo)",
        "skill_id": 3514
      },
      {
        "char_name": "Su Jinglei",
        "char_icon": "18_Jinglei",
        "skill_name": "<Companion Hand> Kokuryuha",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Unleashes the power of the dragon and attacks ALL enemies.\nPerforms a (60%) DEF Penetrate attack to the target hit.\nOn Last Attack, reduces the Turn Gauge of the enemy with the highest ATK by (15%) at a 65% chance.",
        "scope": "AoE",
        "source": "S (Companion Hand)",
        "skill_id": 1813
      },
      {
        "char_name": "Oomiya Mizuki",
        "char_icon": "57_Mizuki",
        "skill_name": "<Taotei> Burning Grit",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If character's HP is 40% or more, DMG increases by (7.5%).\nIf character's HP is 80% or more, performs a (15%) DEF Penetrate attack.",
        "scope": "Self",
        "source": "S (Taotei)",
        "skill_id": 5713
      },
      {
        "char_name": "Touge Kinki",
        "char_icon": "60_Tougekinki",
        "skill_name": "<Rengoku> Demon of \"Iron\"",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Performs a (15%) DEF Penetrate attack per Debuff the target has.\nStacks up to 5.",
        "scope": "Self",
        "source": "S (Rengoku)",
        "skill_id": 6014
      },
      {
        "char_name": "Tina Worrell",
        "char_icon": "226_Worrell",
        "skill_name": "<Crimson Tempest> Plasma Rifle: Burst",
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
        "char_name": "Shinohara Mari",
        "char_icon": "51_Mari",
        "skill_name": "<Cartridge Buster> Tales of the Class Rep.",
        "skill_type": "[Passive Skill]",
        "skill_desc": "When attacking an Incapacitated enemy, performs a Shield Penetrate attack.",
        "scope": "Self",
        "source": "S (Cartridge Buster)",
        "skill_id": 5114
      },
      {
        "char_name": "Hoshino Mitsuki",
        "char_icon": "37_Mitsuki",
        "skill_name": "<Nikko> Wind Art: Rampaging Gust",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Makes a large tornado and sends it toward ALL enemies.\nPerforms a Shield Penetrate attack.\nWhen defeating an enemy with this skill, fills (20%) of the Turn Gauge at a 95% chance for ALL allies.\nSteals the SPD UP Buff of ALL enemies before the attack.\nDamage increases in proportion to SPD.",
        "scope": "AoE",
        "source": "S (Nikko)",
        "skill_id": 3713
      },
      {
        "char_name": "Yamata-no-Orochi",
        "char_icon": "61_Orochi",
        "skill_name": "<Ryuuga> Holy Oni Warrior",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Performs a Shield Penetrate attack on enemies with HP at 75% or more.",
        "scope": "AoE",
        "source": "S (Ryuuga)",
        "skill_id": 6112
      },
      {
        "char_name": "Akiyama Rinko",
        "char_icon": "11_Rinko",
        "skill_name": "<Zetsuei> Itto Style: Kogarasi-no-Kata",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Uses Void Art to mercilessly slash the enemy, attacking 4 times.\nEach hit performs a Shield Penetrate attack.\nIf the character has 2 or more Buff, performs 1 Additional Attack.\nWhen an Additional Attack is triggered, inflicts (-24%) SPD DOWN on the target at a 99% chance.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Zetsuei)",
        "skill_id": 1112
      },
      {
        "char_name": "Snake Lady",
        "char_icon": "71_Snakelady",
        "skill_name": "<Blue Viper> Venom Smash",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Attacks the enemy with a powerful dropkick.\nGains (50%) CRIT DMG UP before the attack.\nDuration : 2 turn(s)\nDamage increases in proportion to target's current HP if the target has 2 or more Debuffs, including Poison.",
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
        "skill_name": "<Soul Eraser> Immortal Hunting",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Strikes an enemy with a scythe.\nWhen the target has 3 or more Debuffs, and the character's HP is less than 30%, attacking an enemy deals Instant Death at a fixed chance of 75%.\nIncreases the duration of all Buffs by 1 turn after the attack.\nSteals Immortal from the enemy before the attack.",
        "scope": "AoE",
        "source": "S (Soul Eraser)",
        "skill_id": 3013
      },
      {
        "char_name": "Mizuki Shiranui",
        "char_icon": "13_Shiranui",
        "skill_name": "<Hannyagiri> Water Art: Crushing Wave",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Creates a huge wave and sends it to the enemy, target hit is inflicted with Immobilize at a 60% chance.\nDuration: 2 turn(s)\nIf the character has 2 or more Buffs, increases the duration of 1 Random Buff held by ALL allies for 1 turn(s) after the attack.",
        "scope": "AoE",
        "source": "S (Hannyagiri)",
        "skill_id": 1312
      },
      {
        "char_name": "Hayami Uzuki",
        "char_icon": "119_Uzuki",
        "skill_name": "<Dawnbreaker> Light Art: Flash Cannon",
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
        "char_name": "Edwin Black",
        "char_icon": "66_Black",
        "skill_name": "<Crimson Requiem> End of Darkness",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Attacks the enemy using his ability.\nReduces the target's Turn Gauge by (15%) at a 75% chance on Last Attack.\nSteals the Shield the target has before the attack.\nIf the target's HP is less than 50%, increases Shield by 100% after the attack.",
        "scope": "Self",
        "source": "S (Crimson Requiem)",
        "skill_id": 6613
      },
      {
        "char_name": "Crackle",
        "char_icon": "129_Crackle",
        "skill_name": "<Hellcat Glove> NyaNya Attack",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Curls up into a ball and attacks the enemy 6 times while spinning.\nEvery time a CRIT ATK lands, steals 1 Random Buff from the target at a 15% chance.",
        "scope": "AoE",
        "source": "S (Hellcat Glove)",
        "skill_id": 12913
      },
      {
        "char_name": "Felicia",
        "char_icon": "30_Felicia",
        "skill_name": "<Soul Eraser> Immortal Hunting",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Strikes an enemy with a scythe.\nWhen the target has 3 or more Debuffs, and the character's HP is less than 30%, attacking an enemy deals Instant Death at a fixed chance of 75%.\nIncreases the duration of all Buffs by 1 turn after the attack.\nSteals Immortal from the enemy before the attack.",
        "scope": "AoE",
        "source": "S (Soul Eraser)",
        "skill_id": 3013
      },
      {
        "char_name": "Kannagi Kaede",
        "char_icon": "114_Kaede",
        "skill_name": "<Rouga> Wind Bow: Soaring Wolf",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Jumps up into the air and fires a powerful shot at the enemy.\nIf the target's HP is 80% or more,  steals 1 Random Buff(s) the target has.",
        "scope": "Self",
        "source": "S (Rouga)",
        "skill_id": 11411
      },
      {
        "char_name": "Fuuma Kotaro",
        "char_icon": "54_Kotaro",
        "skill_name": "<Fuuma> Taimanin Art: Fuuma",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Approaches the enemy, stabs and then slashes them to attack.\nSteals 1 Random Buffs from the target hit at a 20% chance.",
        "scope": "Self",
        "source": "S (Fuuma)",
        "skill_id": 5411
      },
      {
        "char_name": "Hoshino Mitsuki",
        "char_icon": "37_Mitsuki",
        "skill_name": "<Nikko> Wind Art: Rampaging Gust",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Makes a large tornado and sends it toward ALL enemies.\nPerforms a Shield Penetrate attack.\nWhen defeating an enemy with this skill, fills (20%) of the Turn Gauge at a 95% chance for ALL allies.\nSteals the SPD UP Buff of ALL enemies before the attack.\nDamage increases in proportion to SPD.",
        "scope": "AoE",
        "source": "S (Nikko)",
        "skill_id": 3713
      },
      {
        "char_name": "Clear Lovell",
        "char_icon": "86_Robel",
        "skill_name": "<Tomurai & Requiem> Type: Hero",
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
        "char_name": "Fuuma Amane",
        "char_icon": "6_Amane",
        "skill_name": "<Android Arm Secrecy> Fuuma Martial Art: Skyfall",
        "skill_type": "[Passive Skill]",
        "skill_desc": "On Turn Start absorbs (12.5%) Turn Gauge of the enemy with the strongest ATK at a 50% chance.\nOn Turn Start, removes 1 Debuff on the character.",
        "scope": "Self",
        "source": "S (Android Arm Secrecy)",
        "skill_id": 612
      },
      {
        "char_name": "Kugasa Hikage",
        "char_icon": "120_Hikage",
        "skill_name": "<Amayo> Wind Art: Spring Wind",
        "skill_type": "[Support Skill]",
        "skill_desc": "Grants (45%) ATK UP to 1 ally.\nDuration: 2 turn(s)\nRemoves all Debuffs.",
        "scope": "AoE",
        "source": "S (Amayo)",
        "skill_id": 12012
      },
      {
        "char_name": "Igawa Senshu",
        "char_icon": "91_Sensyu",
        "skill_name": "<Poison Dragon Claw> Poisonous Raksha",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Removes all Poison Debuffs from the character when hit.\nIf this skill is on Cooldown, increases Poison DMG by a fixed 3% at a 50% chance on every attack's Last Attack.",
        "scope": "AoE",
        "source": "S (Poison Dragon Claw)",
        "skill_id": 9112
      },
      {
        "char_name": "Michea Silkys",
        "char_icon": "90_Silkys",
        "skill_name": "<Neon Saucer> Hero Vibes",
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
        "char_name": "Fuuma Aki",
        "char_icon": "45_Aki",
        "skill_name": "<Giren> Chasing Slash",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Swings a sword left and right to attack the enemy 4 times.\nIf the target has Bleed, inflicts (22.5%) Weaken at a 50% chance on the Last Attack.\nDuration: 2 turn(s)\nGains (32.5%) CRIT Rate UP before the attack. \nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Giren)",
        "skill_id": 4512
      },
      {
        "char_name": "Felicia",
        "char_icon": "30_Felicia",
        "skill_name": "<Crow's Beak> Seven Hells",
        "skill_type": "[Attack Skill]",
        "skill_desc": "After launching the enemy into the air, jumps up and attacks 4 times in total.\nTarget hit is inflicted (10%) Bleed at a 10% chance.\nDuration: 3 turn(s)\nWhen Vampire Princess is on Cooldown, performs an Additional Attack 1 time.\nOn Last Attack, increases Bleed effect by 1 turn(s).\nDuration: 1 turn(s)",
        "scope": "Self",
        "source": "S (Crow's Beak)",
        "skill_id": 3012
      },
      {
        "char_name": "Masked Taimanin",
        "char_icon": "78_Maskedtaimanin",
        "skill_name": "<Kokuten> Taimanin Art: Uprising Storm",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Randomly swings the knife and attacks the enemy 8 times.\nPerforms a (30%) Bleed Debuff Resonance attack.\nWhen defeating an enemy with this skill, reduces the Turn Gauge of ALL enemies by (15%) at a 50% chance.",
        "scope": "AoE",
        "source": "S (Kokuten)",
        "skill_id": 7812
      },
      {
        "char_name": "Oboro",
        "char_icon": "23_Oboro",
        "skill_name": "<Black Iron Claw> Wicked Slasher",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Lightly jumps and stabs the enemy with their claws.\nPerforms a (30%) Bleed Debuff Resonance attack.",
        "scope": "Self",
        "source": "S (Black Iron Claw)",
        "skill_id": 2313
      },
      {
        "char_name": "Saya NEO",
        "char_icon": "59_Sayaneo",
        "skill_name": "<Abyss Crawler> Saya NEO Special",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Stabs mercilessly with tentacles to attack the enemy.\nThis skill performs a (15%) Life Steal attack.\nPerforms a (30%) Bleed Debuff Resonance attack.",
        "scope": "Self",
        "source": "S (Abyss Crawler)",
        "skill_id": 5913
      },
      {
        "char_name": "Momochi Toyo",
        "char_icon": "53_Toyo",
        "skill_name": "<Magatsuki> Momochi Style Ultimate: Kodoku",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "After launching a series of attacks with the weapons covering the body, finishes the enemy with the blade on the back.\nIncreases the effect of Bleed, Poison, and Burn on the target hit by 10%, a fixed 3%, and a fixed 5% respectively.\nDMG increases by (55%) for each Debuff the target has.\nThe effect applies up to 4 stacks.",
        "scope": "Self",
        "source": "S (Magatsuki)",
        "skill_id": 5313
      },
      {
        "char_name": "Pamela Jäger",
        "char_icon": "102_Yeager",
        "skill_name": "<Crimson Reaper> Jäger Cross",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Quickly launches at the enemy and slashes them in a cross-shape and explodes, attacking 3 time(s).\nIf the enemy isn't the only one remaining, performs a (30%) Bleed, Burn, Poison Debuff Resonance attack.\nIf the enemy is the only one remaining, performs a (45%) Bleed, Burn, Poison Debuff Resonance attack.",
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
        "skill_name": "<Throne Bracelet> Heat Wave",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks ALL enemies by lighting the ground beneath them on fire.\nInflicts (3.5%) Burn at a 60% chance on Last Attack.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Throne Bracelet)",
        "skill_id": 2712
      },
      {
        "char_name": "Mirabell Bell",
        "char_icon": "103_Bell",
        "skill_name": "<BS Assault Shooter Custom> Satellite Beam",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Throws a signal beacon to mark the bomb drop location to attack ALL enemies.\nTargets hit are inflicted with (3.5%) Burn at a 75% chance.\nDuration: 3 turn(s)\nIf the target's HP is less than 30%, additionally inflicts Burn at a 90% chance after the attack.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (BS Assault Shooter Custom)",
        "skill_id": 10313
      },
      {
        "char_name": "Donna Burroughs",
        "char_icon": "76_Burroughs",
        "skill_name": "<Berserker Blade> Charge Slash",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Focuses energy on the sword and attacks ALL enemies.\nTarget hit is inflicted with (3.5%) Burn at a 50% chance.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Berserker Blade)",
        "skill_id": 7612
      },
      {
        "char_name": "Shishimura Denji",
        "char_icon": "110_Denji",
        "skill_name": "<Hibana> Explosive Art: Dust Cloud",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Throws a sugar cube at a targeted enemy and 1 Random enemy.\nTargets hit are inflicted with (3.5%) Burn at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Self",
        "source": "S (Hibana)",
        "skill_id": 11011
      },
      {
        "char_name": "Sanada Homura",
        "char_icon": "35_Homura",
        "skill_name": "<Hyakuren> Flaming Spear",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Charges while mounted on a spear and attacks 2 times.\nIf the target is inflicted with Burn, CRIT Rate increases 7.5%.",
        "scope": "Self",
        "source": "S (Hyakuren)",
        "skill_id": 3511
      },
      {
        "char_name": "Ingrid",
        "char_icon": "25_Ingrid",
        "skill_name": "<Sol Brave> Evil Flame Slash",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Performs a consecutive sword dance to attack the enemy 4 times.\nTarget hit has their Turn Gauge decreased by (15%) at a 10% chance.\nPerforms 2 Additional Attacks and deals (30%) Burn Debuff Resonance.\nIf the target's SPD is higher than the character's, damage dealt increases based on the difference.",
        "scope": "Self",
        "source": "S (Sol Brave)",
        "skill_id": 2512
      },
      {
        "char_name": "Kamimura Maika",
        "char_icon": "31_Maika",
        "skill_name": "<Nuclear Option> Meido Bazooka <Grenade>",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "After jumping into the air, fires a super-heated flame bullet toward the ground, attacking ALL enemies.\nWhen an enemy is defeated by this skill, resets Cooldown of Blazing Barrage.\nInflicts (3.5%) Burn to ALL enemies at a 75% chance before the attack.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Nuclear Option)",
        "skill_id": 3113
      },
      {
        "char_name": "Kasumigaoka Rika",
        "char_icon": "40_Rika",
        "skill_name": "<Suitenko> Cross Slash",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Launches a cross-shaped sword aura at the enemy.\nTarget hit is inflicted with (3.5%) Burn at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Self",
        "source": "S (Suitenko)",
        "skill_id": 4011
      },
      {
        "char_name": "Kannazuki Sora",
        "char_icon": "43_Sora",
        "skill_name": "<Higure> Apprentice Taimanin",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If the character has a Buff, inflicts (3.5%) Burn to the target at a 15% chance.\nDuration: 3 turn(s)",
        "scope": "Self",
        "source": "S (Higure)",
        "skill_id": 4313
      },
      {
        "char_name": "Momochi Toyo",
        "char_icon": "53_Toyo",
        "skill_name": "<Utzuro> Momochi Assassin Arts: Serpent",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Draws two swords from the back and stabs the enemy 7 times.\nTarget hit is inflicted with Immobilize at a 5% chance.\nDuration: 2 turn(s)\nWhen enemy is defeated, inflicts ALL enemies with (3.5%) Burn at a 60% chance.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Utzuro)",
        "skill_id": 5312
      },
      {
        "char_name": "Izumo Tsuru",
        "char_icon": "82_Tsuru",
        "skill_name": "<Order-maid> Bullet Party",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Sprays bullets, attacking the enemy 7 times.\nTarget hit is inflicted with (3.5%) Burn at a 5% chance.\nDuration: 3 turn(s)",
        "scope": "Self",
        "source": "S (Order-maid)",
        "skill_id": 8211
      },
      {
        "char_name": "Pamela Jäger",
        "char_icon": "102_Yeager",
        "skill_name": "<Crimson Reaper> Jäger Cross",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Quickly launches at the enemy and slashes them in a cross-shape and explodes, attacking 3 time(s).\nIf the enemy isn't the only one remaining, performs a (30%) Bleed, Burn, Poison Debuff Resonance attack.\nIf the enemy is the only one remaining, performs a (45%) Bleed, Burn, Poison Debuff Resonance attack.",
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
        "skill_name": "<In Memorial> Call of Anubis",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Spreads a wide spider web to attack ALL enemies.\nDMG increases by (10%) for every Poison the target has.\nTarget hit is inflicted with Sleep if the target has 3 or more Debuffs, including Poison on the Last Attack.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (In Memorial)",
        "skill_id": 7712
      },
      {
        "char_name": "Furfur",
        "char_icon": "65_Furfur",
        "skill_name": "<Hræsvelgr> Demon Bug: Firefly",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Small demon insects trigger a chain of explosions, attacking ALL enemies 3 times.\nInflicts (2.5%) Poison at a 75% chance on the Last Attack for 2 times.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Hræsvelgr)",
        "skill_id": 6512
      },
      {
        "char_name": "Tekkain Kaworu",
        "char_icon": "74_Kaworu",
        "skill_name": "<Murakumo Iron Chains> Chain Art: Chain Frenzy",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Swings the chain randomly, attacking ALL enemies 6 times.\nTargets hit is inflicted with (2.5%) Poison at a 10% chance.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Murakumo Iron Chains)",
        "skill_id": 7413
      },
      {
        "char_name": "Onigumo Saburo",
        "char_icon": "94_Saburo",
        "skill_name": "<Kogoro Plush> The 18th Saburo",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If the character is inflicted with a Debuff, inflicts ALL enemies with (2.5%) Poison at a 60% chance.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Kogoro Plush)",
        "skill_id": 9412
      },
      {
        "char_name": "Igawa Senshu",
        "char_icon": "91_Sensyu",
        "skill_name": "<Poison Dragon Claw> Poisonous Raksha",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Removes all Poison Debuffs from the character when hit.\nIf this skill is on Cooldown, increases Poison DMG by a fixed 3% at a 50% chance on every attack's Last Attack.",
        "scope": "AoE",
        "source": "S (Poison Dragon Claw)",
        "skill_id": 9112
      },
      {
        "char_name": "Snake Lady",
        "char_icon": "71_Snakelady",
        "skill_name": "<Blue Viper> Venom Smash",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Attacks the enemy with a powerful dropkick.\nGains (50%) CRIT DMG UP before the attack.\nDuration : 2 turn(s)\nDamage increases in proportion to target's current HP if the target has 2 or more Debuffs, including Poison.",
        "scope": "Self",
        "source": "S (Blue Viper)",
        "skill_id": 7113
      },
      {
        "char_name": "Momochi Toyo",
        "char_icon": "53_Toyo",
        "skill_name": "<Magatsuki> Momochi Style Ultimate: Kodoku",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "After launching a series of attacks with the weapons covering the body, finishes the enemy with the blade on the back.\nIncreases the effect of Bleed, Poison, and Burn on the target hit by 10%, a fixed 3%, and a fixed 5% respectively.\nDMG increases by (55%) for each Debuff the target has.\nThe effect applies up to 4 stacks.",
        "scope": "Self",
        "source": "S (Magatsuki)",
        "skill_id": 5313
      },
      {
        "char_name": "Pamela Jäger",
        "char_icon": "102_Yeager",
        "skill_name": "<Crimson Reaper> Jäger Cross",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Quickly launches at the enemy and slashes them in a cross-shape and explodes, attacking 3 time(s).\nIf the enemy isn't the only one remaining, performs a (30%) Bleed, Burn, Poison Debuff Resonance attack.\nIf the enemy is the only one remaining, performs a (45%) Bleed, Burn, Poison Debuff Resonance attack.",
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
        "skill_name": "<Kraken Anchor> Tentacle Ambush",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Drives tentacles into the ground, attacking 1 Random enemy.\nTarget hit is inflicted with Faint at a 8% chance.\nDuration: 1 turn(s)",
        "scope": "Self",
        "source": "S (Kraken Anchor)",
        "skill_id": 8411
      },
      {
        "char_name": "Nisha Gaiza",
        "char_icon": "55_Gaiza",
        "skill_name": "<Nakigara> Grudgeful Strike",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Ruthlessly slashes the sword at the enemy 9 times.\nTarget hit is inflicted with Faint at a 20% chance.\nDuration: 1 turn(s)\nIncreases target's DMG by (45%) per Buff they have.\nStacks up to 3.",
        "scope": "Self",
        "source": "S (Nakigara)",
        "skill_id": 5513
      },
      {
        "char_name": "Shinohara Mari",
        "char_icon": "51_Mari",
        "skill_name": "<Gear Bracelet> Earth Art: Stone Spear",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Performs a Power Hit on the ground and attacks ALL enemies.\nIf the target has 2 or more Debuffs, inflicts them with Faint.\nDuration: 1 turn(s)",
        "scope": "AoE",
        "source": "S (Gear Bracelet)",
        "skill_id": 5113
      },
      {
        "char_name": "Fuuma Mawari",
        "char_icon": "108_Mawari",
        "skill_name": "<Ushio> Dumbo Attack!?",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Runs toward the enemy and trips to do a headbutt attack.\nTarget is inflicted with Faint at a 20% chance.\nDuration: 1 turn(s)",
        "scope": "Self",
        "source": "S (Ushio)",
        "skill_id": 10812
      },
      {
        "char_name": "Uehara Rin",
        "char_icon": "32_Rin",
        "skill_name": "<Lightning Saber II Raizin> Lightning Art: Chain Volt",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Overcharges both swords with electricity and slashes at the enemy.\nRemoves the target's 1 Random Buffs and inflicts Faint at a 20% chance on the Last Attack.\nDuration: 1 turn(s)\nIf the character performs CRIT ATK, absorbs (12.5%) of the Turn Gauge at a 60% chance.\nIf the character has Overclock, increases CRIT Rate by (37.5%).",
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
        "skill_name": "<Crystal Staff> Ice Fall",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Creates a large ice crystal and drops it on top of ALL enemies.\nTargets hit are inflicted with (25%) Freeze at a 35% chance.\nIf the character has 2 or more Buffs, inflicts Freeze at a 45% chance.\nDuration: 2 turn(s)",
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
        "char_name": "Amadare Natsume",
        "char_icon": "20_Natsume",
        "skill_name": "<Witch Sleeve> Alluring Touch",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks ALL enemies with alluring gestures.\nTarget hit is Taunted at a 45% chance.\nDuration: 2 turn(s)\nIf the target already is Taunted, puts them in Confusion state at a fixed chance of 30%.\nDuration: 1 turn(s)\nIf the target is an Agility type, decreases (15%) of their Turn Gauge at a 95% chance.",
        "scope": "AoE",
        "source": "S (Witch Sleeve)",
        "skill_id": 2012
      },
      {
        "char_name": "Inokura Suzuka",
        "char_icon": "118_Suzuka",
        "skill_name": "<Shiranami> Scarlet Art: Scarlet Miasma",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Spreads Scarlet Art forward to attack ALL enemies.\nWhen attacking a target with 3 or more Debuffs, inflicts Confusion at a 55% chance.\nDuration: 1 turn(s)",
        "scope": "AoE",
        "source": "S (Shiranami)",
        "skill_id": 11813
      },
      {
        "char_name": "Yuri",
        "char_icon": "8_Yukiha",
        "skill_name": "<Yamidachi> Snow Assassin",
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
        "char_name": "Narita Akina",
        "char_icon": "121_Akina",
        "skill_name": "<Utopia> Stone Art: Heavyweight",
        "skill_type": "[Support Skill]",
        "skill_desc": "Musters up strength and gains (40%) DEF UP.\nDuration: 2 turn(s)\nRestores 18% of Max. HP.\nTaunts 1 Random enemy at a 45% chance.",
        "scope": "Self",
        "source": "S (Utopia)",
        "skill_id": 12112
      },
      {
        "char_name": "Hiiragi Fuyumi",
        "char_icon": "39_Fuyumi",
        "skill_name": "<Spring Breeze> Taimanin Art: Spear",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Using the character's abilities and spear, attacks the enemy a total of 3 times.\nTaunts the target hit at a 5% chance.\nDuration: 2 turn(s)\nDamage increases in proportion to HP lost.",
        "scope": "Self",
        "source": "S (Spring Breeze)",
        "skill_id": 3911
      },
      {
        "char_name": "Fuuma Hoensai",
        "char_icon": "111_Houensai",
        "skill_name": "<Daruma> Oil Art: Flame Disaster",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Breathes out fire, attacking ALL enemies 3 times.\nRemoves Shield from the targets.\nTargets hit are Taunted at a 45% chance.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Daruma)",
        "skill_id": 11113
      },
      {
        "char_name": "Major",
        "char_icon": "63_Major",
        "skill_name": "<Moon Shot> Chance Maker",
        "skill_type": "[Support Skill]",
        "skill_desc": "Taunts ALL enemies.\nDuration: 2 turn(s)\nThe character gains (10%) Damage Reflect.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Moon Shot)",
        "skill_id": 6312
      },
      {
        "char_name": "Yatsu Murasaki",
        "char_icon": "19_Murasaki",
        "skill_name": "<Combat Axe> Fortification",
        "skill_type": "[Support Skill]",
        "skill_desc": "Gains a Shield equal to 19.5% of the character's Max. HP.\nDuration: 2 turn(s)\nTaunts ALL enemies at a fixed chance of 35%\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Combat Axe)",
        "skill_id": 1912
      },
      {
        "char_name": "Amadare Natsume",
        "char_icon": "20_Natsume",
        "skill_name": "<Witch Sleeve> Alluring Touch",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Attacks ALL enemies with alluring gestures.\nTarget hit is Taunted at a 45% chance.\nDuration: 2 turn(s)\nIf the target already is Taunted, puts them in Confusion state at a fixed chance of 30%.\nDuration: 1 turn(s)\nIf the target is an Agility type, decreases (15%) of their Turn Gauge at a 95% chance.",
        "scope": "AoE",
        "source": "S (Witch Sleeve)",
        "skill_id": 2012
      },
      {
        "char_name": "Rakshasa",
        "char_icon": "125_Sokushitsuki",
        "skill_name": "<Minagoroshi> Raging Wind, Clear Moon",
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
        "char_name": "Yuri Hisui",
        "char_icon": "41_Hisui",
        "skill_name": "<Jizo's Steel Staff> Eclipse Meld: Resonate",
        "skill_type": "[Passive Skill]",
        "skill_desc": "Using a skill on every 4th turn grants an additional effect.\nWhen using Monk Staff Art, Healing Effect increases by (100%).\nWhen using Eclipse Meld: Syphoning Strike, inflicts Immobilize on an enemy at a 50% chance.\nDuration: 2 turn(s)\nWhen using Eclipse Meld: Sound, grants a (7%) Healing Over Time to all allies for 2 turn(s).",
        "scope": "AoE",
        "source": "S (Jizo's Steel Staff)",
        "skill_id": 4114
      },
      {
        "char_name": "Mizuki Shiranui",
        "char_icon": "13_Shiranui",
        "skill_name": "<Hannyagiri> Water Art: Crushing Wave",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Creates a huge wave and sends it to the enemy, target hit is inflicted with Immobilize at a 60% chance.\nDuration: 2 turn(s)\nIf the character has 2 or more Buffs, increases the duration of 1 Random Buff held by ALL allies for 1 turn(s) after the attack.",
        "scope": "AoE",
        "source": "S (Hannyagiri)",
        "skill_id": 1312
      },
      {
        "char_name": "Momochi Toyo",
        "char_icon": "53_Toyo",
        "skill_name": "<Utzuro> Momochi Assassin Arts: Serpent",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Draws two swords from the back and stabs the enemy 7 times.\nTarget hit is inflicted with Immobilize at a 5% chance.\nDuration: 2 turn(s)\nWhen enemy is defeated, inflicts ALL enemies with (3.5%) Burn at a 60% chance.\nDuration: 3 turn(s)",
        "scope": "AoE",
        "source": "S (Utzuro)",
        "skill_id": 5312
      },
      {
        "char_name": "Yao Bikuni",
        "char_icon": "97_Yaobikuni",
        "skill_name": "<Dawnbreaker Staff> Soul Wave",
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
        "char_name": "Uehara Rin",
        "char_icon": "32_Rin",
        "skill_name": "<Mist Grave> Volt Taimanin",
        "skill_type": "[Passive Skill]",
        "skill_desc": "If the target is inflicted with Electrocute, DMG increases by (7.5%).\nIf the target is inflicted with Faint, CRIT Rate increases by (7.5%).\nOn Turn Start, gains (30%) Overclock if the character has ATK UP.\nDuration: 2 turn(s)\nInflicts Electrocute on 2 Random enemies upon death. This effect ignores Debuff Block.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Mist Grave)",
        "skill_id": 3214
      },
      {
        "char_name": "Uehara Shikanosuke",
        "char_icon": "80_Shikanosuke",
        "skill_name": "<Snowflake> Elec Art: Lightning Tackle",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Charges at the enemy with electricity coursing through the character.\nInflicts that target with Electrocute at a 30% chance.\nDuration: 2 turn(s)\nGains (2) Protective Shield after the attack.\nDuration: 2 turn(s)\nIf Uehara Rin is deployed, applies the same effect to ALL allies.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Snowflake)",
        "skill_id": 8013
      },
      {
        "char_name": "Mizuki Yukikaze",
        "char_icon": "7_Yukikaze",
        "skill_name": "<Flame Tiger Custom> Linear Thunder",
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
        "char_name": "Igawa Sakura",
        "char_icon": "5_Sakura",
        "skill_name": "<Assasin's Dagger> Shadow Arts: Beast Call",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Summons a shadow creature and sends it toward the enemy.\nInflicts (-40%) DEF DOWN to the target at a 95% chance before the attack.\nDuration: 2 turn(s)\nGoes into Stealth mode when defeating an enemy with this skill.\nDuration: 2 turn(s)",
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
        "char_name": "Igawa Asagi",
        "char_icon": "1_Asagi",
        "skill_name": "<Tokizaki> Koujin Zanka",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Moves as fast as light and instantly attacks the enemy 6 time(s).\nTarget hit is inflicted with (-19.5%) SPD DOWN at a 99% chance and has their Turn Gauge reduced by (15%) at a 65% chance on Last Attack.",
        "scope": "Self",
        "source": "S (Tokizaki)",
        "skill_id": 113
      },
      {
        "char_name": "Akiyama Rinko",
        "char_icon": "11_Rinko",
        "skill_name": "<Zetsuei> Itto Style: Kogarasi-no-Kata",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Uses Void Art to mercilessly slash the enemy, attacking 4 times.\nEach hit performs a Shield Penetrate attack.\nIf the character has 2 or more Buff, performs 1 Additional Attack.\nWhen an Additional Attack is triggered, inflicts (-24%) SPD DOWN on the target at a 99% chance.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Zetsuei)",
        "skill_id": 1112
      },
      {
        "char_name": "Akiyama Tatsuro",
        "char_icon": "12_Tatsuro",
        "skill_name": "<Amakudari> Itto Style: Moon Fall",
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
        "skill_name": "<Rosebud> Reaper-Summoning Thread",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Sends 15 spiders charging toward random enemies.\nTarget hit is inflicted with (50%) Vulnerable to Poison on the Last Attack.\nDuration: 2 turn(s)\nTarget is inflicted with (50%) Vulnerable to Poison if the target has SPD DOWN Debuff.\nDuration: 2 turn(s)\nTarget is inflicted with (50%) Vulnerable to Poison if the target has Immobilize Debuff.\nDuration: 2 turn(s)",
        "scope": "AoE",
        "source": "S (Rosebud)",
        "skill_id": 7713
      },
      {
        "char_name": "Igawa Asagi",
        "char_icon": "1_Asagi",
        "skill_name": "<Gurren> Hirenka",
        "skill_type": "[Attack Skill]",
        "skill_desc": "After kicking the enemy upward, slashes them 4 times in midair for a total of 5 attacks.\nTarget hit is inflicted with (65%) Heal Reduction at a 99% chance.\nDuration: 2 turn(s)\nDefeating an enemy with this skill resets the Cooldown of Koujin Zanka.",
        "scope": "Self",
        "source": "S (Gurren)",
        "skill_id": 112
      },
      {
        "char_name": "Masked Taimanin",
        "char_icon": "78_Maskedtaimanin",
        "skill_name": "<Blade Crusher> Mask of Concealment",
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
        "char_name": "Aina Winchester",
        "char_icon": "46_Aina",
        "skill_name": "<Phaser Blaster> Wild Fire",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Rapidly fires both pistols to attack the enemy 5 times.\nTarget hit is inflicted with (19.5%) Weaken at a 5% chance.\nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Phaser Blaster)",
        "skill_id": 4611
      },
      {
        "char_name": "Fuuma Aki",
        "char_icon": "45_Aki",
        "skill_name": "<Giren> Chasing Slash",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Swings a sword left and right to attack the enemy 4 times.\nIf the target has Bleed, inflicts (22.5%) Weaken at a 50% chance on the Last Attack.\nDuration: 2 turn(s)\nGains (32.5%) CRIT Rate UP before the attack. \nDuration: 2 turn(s)",
        "scope": "Self",
        "source": "S (Giren)",
        "skill_id": 4512
      },
      {
        "char_name": "Annerose Vajra",
        "char_icon": "33_Annerose",
        "skill_name": "<Vajra Blue Lightning> Myriad Flash Slashes",
        "skill_type": "[Normal Attack]",
        "skill_desc": "Annerose stabs the enemy 4 time(s) with her unique swordsmanship.\nDMG increases equal to 1.5% of the target's lost HP when attacking.",
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
        "skill_name": "<Soul Eraser> Immortal Hunting",
        "skill_type": "[Ultimate Skill]",
        "skill_desc": "Strikes an enemy with a scythe.\nWhen the target has 3 or more Debuffs, and the character's HP is less than 30%, attacking an enemy deals Instant Death at a fixed chance of 75%.\nIncreases the duration of all Buffs by 1 turn after the attack.\nSteals Immortal from the enemy before the attack.",
        "scope": "AoE",
        "source": "S (Soul Eraser)",
        "skill_id": 3013
      },
      {
        "char_name": "Torajiro",
        "char_icon": "87_Torajiro",
        "skill_name": "<White Tiger Fists> Rip and Tear",
        "skill_type": "[Attack Skill]",
        "skill_desc": "Wildly slashes the enemy 6 times.\nPerforms 1 Additional Attack without any conditions.\nWhen the target's HP is less than 20% during Additional Attack, deals Instant Death at a fixed 15% chance.",
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
