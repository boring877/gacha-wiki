// Character data: magical-princess--luceria
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "magical-princess--luceria",
  "name": "Magical Princess:  Luceria",
  "displayName": "Magical Princess:  Luceria",
  "baseName": "Luceria",
  "title": "Magical Princess",
  "rarity": "SSR",
  "element": "Holy",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 360,
  "weaponType": "Throw",
  "skillTypes": [
    "Heal",
    "Debuff",
    "Disrupt"
  ],
  "image": "Luceria",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "158cm",
    "bust": "112cm (N Cup)",
    "waist": "58cm",
    "hips": "82cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "結城ほのか",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2041
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Magic: Explosion",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Burn(HP --200 per second) for 10 seconds and Block-11 DOWN for 5 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Burn(HP --200 per second) for 10 seconds and Block-11 DOWN for 5 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Burn(HP --2000 per second) for 10 seconds and Block-23 DOWN for 5 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "110.00000000000001% ATK",
      "baseDamage": "+50",
      "levelGrowth": "+6",
      "lvl1": "110% + 50",
      "lvl90": "110% + 38",
      "effects": [
        "Burn LvMax",
        "Block- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Burn LvMax",
          "value": -200,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -20.0
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 5,
          "levelGrowth": -0.13
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Magic: Healing",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to all allies",
      "descriptionLv1": "Restores HP by to all allies",
      "descriptionLv90": "Restores HP by to all allies",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": "1550% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+30",
      "lvl1": "1550% + 300",
      "lvl90": "1550% + 2970",
      "effects": [],
      "buffEffects": []
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Magic: Shining Starlight",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Stun for 2 seconds and Burn(LV 1) for 15 seconds",
      "effect": "370% + 410",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Burn Ultimate Lv1",
          "value": -1500,
          "type": "flat",
          "duration": 15
        }
      ]
    },
    {
      "rank": 2,
      "name": "Magic: Shining Starlight",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds and Burn(LV 2) for 15 seconds",
      "effect": "459% + 460",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Burn Ultimate Lv2",
          "value": -2500,
          "type": "flat",
          "duration": 15
        }
      ]
    },
    {
      "rank": 3,
      "name": "Magic: Shining Starlight",
      "icon": "skill001/skill0012_3",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds and Burn(LV 3) for 15 seconds",
      "effect": "530% + 510",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Burn Ultimate Lv3",
          "value": -3000,
          "type": "flat",
          "duration": 15
        }
      ]
    },
    {
      "rank": 4,
      "name": "Magic: Shining Starlight",
      "icon": "skill001/skill0012_4",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Burn(LV 4) for 15 seconds",
      "effect": "590% + 550",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Burn Ultimate Lv4",
          "value": -3500,
          "type": "flat",
          "duration": 15
        }
      ]
    },
    {
      "rank": 5,
      "name": "Magic: Shining Starlight",
      "icon": "skill001/skill0012_5",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Burn(LV 5) for 15 seconds",
      "effect": "620% + 590",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Burn Ultimate Lv5",
          "value": -4000,
          "type": "flat",
          "duration": 15
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Magic Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+10), Magic Critical Damage+ (+176)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        },
        {
          "name": "Magic Critical Damage+",
          "value": 176,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Max HP +, Block+",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+2896), Block+ (+15)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        },
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Magical Princess:  Luceria",
  "id": 2041,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Attacker",
  "tags": [
    "Heal",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1715,
    "ATK": 192,
    "MATK": 321,
    "DEF": 57,
    "MDEF": 143
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Skill3 → Basic → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.88"
  },
  "slug": "magical-princess--luceria"
};

export const stats = {
  "id": "magical-princess--luceria",
  "characterId": 2041,
  "name": "【Magical Princess】 Luceria",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Heal",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1715,
      "lv90": 8575
    },
    "atk": {
      "base": 192,
      "lv90": 963
    },
    "matk": {
      "base": 321,
      "lv90": 1606
    },
    "def": {
      "base": 57,
      "lv90": 114
    },
    "mdef": {
      "base": 143,
      "lv90": 286
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 55,
      "lv90": 165
    },
    "physCrit": {
      "base": 75,
      "lv90": 120
    },
    "magicCrit": {
      "base": 125,
      "lv90": 200
    },
    "hpRegen": {
      "base": 85,
      "lv90": 299
    },
    "mpRegen": {
      "base": 56,
      "lv90": 225
    },
    "healPwr": {
      "base": 100,
      "lv90": 250
    },
    "mpCharge": {
      "base": 56,
      "lv90": 56
    },
    "hpDrain": {
      "base": 0,
      "lv90": 0
    },
    "mpCostDown": {
      "base": 0,
      "lv90": 0
    }
  },
  "limitBreak": {
    "lb1": {
      "HP": 515,
      "MATK": 96,
      "Block": 17,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 592,
      "MATK": 111,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 695,
      "MATK": 130,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 772,
      "MATK": 145,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1587,
      "MATK": 277,
      "DEF": 11,
      "MDEF": 41,
      "Heal Pwr": 31
    },
    "total": {
      "HP": 4161,
      "MATK": 759,
      "Block": 83,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 11,
      "MDEF": 41,
      "Heal Pwr": 31
    }
  },
  "gpAbility": {
    "gp1": {
      "Heal Pwr": 20
    },
    "gp2": {
      "MATK": 40,
      "Heal Pwr": 20
    },
    "gp3": {
      "MATK": 40,
      "Heal Pwr": 45
    },
    "gp4": {
      "MATK": 120,
      "Heal Pwr": 45
    },
    "gp5": {
      "MATK": 120,
      "Heal Pwr": 70
    },
    "gp6": {
      "MATK": 200,
      "Heal Pwr": 70
    },
    "gp7": {
      "MATK": 200,
      "Heal Pwr": 95
    },
    "gp8": {
      "MATK": 280,
      "Heal Pwr": 95
    },
    "gp9": {
      "MATK": 280,
      "Heal Pwr": 120
    },
    "gp10": {
      "MATK": 360,
      "Heal Pwr": 120
    },
    "total": {
      "MATK": 360,
      "Heal Pwr": 120
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 181,
      "MATK": 34,
      "MDEF": 6,
      "Magic Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 217,
      "MATK": 41,
      "MDEF": 8,
      "Magic Crit": 3,
      "Block": 17
    },
    "g3": {
      "HP": 253,
      "MATK": 47,
      "MDEF": 9,
      "Magic Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 289,
      "MATK": 54,
      "MDEF": 10,
      "Magic Crit": 4,
      "Block": 23
    },
    "g5": {
      "HP": 325,
      "MATK": 61,
      "MDEF": 12,
      "Magic Crit": 5,
      "MP Charge": 5
    },
    "g6": {
      "HP": 361,
      "MATK": 68,
      "MDEF": 13,
      "Magic Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 397,
      "MATK": 74,
      "MDEF": 14,
      "Magic Crit": 6,
      "Block": 32
    },
    "g8": {
      "HP": 433,
      "MATK": 81,
      "MDEF": 16,
      "Magic Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 469,
      "MATK": 88,
      "MDEF": 17,
      "Magic Crit": 7,
      "Block": 38
    },
    "g10": {
      "HP": 506,
      "MATK": 95,
      "MDEF": 18,
      "Magic Crit": 7,
      "MP Charge": 7
    },
    "total": {
      "HP": 506,
      "MATK": 95,
      "MDEF": 18,
      "Magic Crit": 7,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 143
    },
    {
      "grade": 2,
      "Heal Pwr": 5
    },
    {
      "grade": 3,
      "HP": 200
    },
    {
      "grade": 4,
      "Heal Pwr": 6
    },
    {
      "grade": 5,
      "HP": 257
    },
    {
      "grade": 6,
      "Heal Pwr": 8
    },
    {
      "grade": 7,
      "HP": 314
    },
    {
      "grade": 8,
      "Heal Pwr": 9
    },
    {
      "grade": 9,
      "HP": 372
    },
    {
      "grade": 10,
      "Heal Pwr": 11
    },
    {
      "grade": 11,
      "HP": 391
    }
  ]
};;;;;;;;
