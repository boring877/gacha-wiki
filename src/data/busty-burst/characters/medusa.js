// Character data: medusa
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "medusa",
  "name": "Medusa",
  "displayName": "Medusa",
  "baseName": "Medusa",
  "title": null,
  "rarity": "SR",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 480,
  "weaponType": "Pierce",
  "skillTypes": [
    "Disrupt"
  ],
  "image": "Medusa",
  "introduction": "Back Row、Magical、Attacker",
  "profile": {
    "height": "150cm",
    "bust": "95cm (I Cup)",
    "waist": "55cm",
    "hips": "76cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "姫川あいり",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2031
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "I’m going to curse you～!",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Paralysis for 6 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Paralysis for 6 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Paralysis for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "90% ATK",
      "baseDamage": "+50",
      "levelGrowth": "+7",
      "lvl1": "90% + 50",
      "lvl90": null,
      "effects": [
        "Paralysis"
      ],
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Aauyaaahhh!",
      "icon": "skill001/skill0018",
      "description": "Applies Magic Attack +35 UP to self for 10 seconds and Action Speed UP for 10 seconds",
      "descriptionLv1": "Applies Magic Attack +35 UP to self for 10 seconds and Action Speed UP for 10 seconds",
      "descriptionLv90": "Applies Magic Attack +665 UP to self for 10 seconds and Action Speed UP for 10 seconds",
      "target": "Self",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Magic Attack + Lv4",
        "Action Speed + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Magic Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 7.0
        },
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "All of you, turn to stone～～～!",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to all enemies and inflicts Petrify for 3 seconds",
      "effect": "450% + 398",
      "buffEffects": [
        {
          "name": "Petrify",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 2,
      "name": "I’m going to curse you～!",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Paralysis for 6 seconds",
      "effect": "90% + 50",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Aauyaaahhh!",
      "icon": "skill001/skill0018",
      "description": "Applies Magic Attack +35 UP to self for 10 seconds and Action Speed UP for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Magic Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "All of you, turn to stone～～～!",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to all enemies and inflicts Petrify for 3 seconds",
      "effect": "450% + 398",
      "buffEffects": [
        {
          "name": "Petrify",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 5,
      "name": "All of you, turn to stone～～～!",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to all enemies and inflicts Petrify for 3 seconds",
      "effect": "630% + 499",
      "buffEffects": [
        {
          "name": "Petrify",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Petrify Resistance LvMax",
      "icon": "skill001/skill1003",
      "effect": "Petrify Resistance LvMax (+1%)",
      "effectValues": [
        {
          "name": "Petrify Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Magic Critical Damage+, Magic Defense+",
      "icon": "skill001/skill1001",
      "effect": "Magic Critical Damage+ (+118), Magic Defense+ (+141)",
      "effectValues": [
        {
          "name": "Magic Critical Damage+",
          "value": 118,
          "type": "flat"
        },
        {
          "name": "Magic Defense+",
          "value": 141,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Medusa",
  "id": 2031,
  "rarity": "SR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1566,
    "ATK": 151,
    "MATK": 252,
    "DEF": 50,
    "MDEF": 126
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic",
    "loop": "Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "medusa"
};

export const stats = {
  "id": "medusa",
  "characterId": 2031,
  "name": "Medusa",
  "rarity": "SR",
  "element": "魔",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1566,
      "lv90": 7830
    },
    "atk": {
      "base": 151,
      "lv90": 757
    },
    "matk": {
      "base": 252,
      "lv90": 1262
    },
    "def": {
      "base": 50,
      "lv90": 100
    },
    "mdef": {
      "base": 126,
      "lv90": 252
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
      "base": 172,
      "lv90": 275
    },
    "magicCrit": {
      "base": 287,
      "lv90": 459
    },
    "hpRegen": {
      "base": 78,
      "lv90": 273
    },
    "mpRegen": {
      "base": 56,
      "lv90": 225
    },
    "healPwr": {
      "base": 82,
      "lv90": 206
    },
    "mpCharge": {
      "base": 66,
      "lv90": 66
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
      "HP": 470,
      "MATK": 76,
      "Block": 17,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 540,
      "MATK": 87,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 634,
      "MATK": 102,
      "Block": 22,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 705,
      "MATK": 114,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1355,
      "MATK": 199,
      "DEF": 9,
      "MDEF": 34,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3704,
      "MATK": 578,
      "Block": 83,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 9,
      "MDEF": 34,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Charge": 2
    },
    "gp2": {
      "MATK": 30,
      "MP Charge": 2
    },
    "gp3": {
      "MATK": 30,
      "MP Charge": 5
    },
    "gp4": {
      "MATK": 90,
      "MP Charge": 5
    },
    "gp5": {
      "MATK": 90,
      "MP Charge": 7
    },
    "gp6": {
      "MATK": 130,
      "MP Charge": 7
    },
    "gp7": {
      "MATK": 130,
      "MP Charge": 9
    },
    "gp8": {
      "MATK": 170,
      "MP Charge": 9
    },
    "gp9": {
      "MATK": 170,
      "MP Charge": 11
    },
    "gp10": {
      "MATK": 210,
      "MP Charge": 11
    },
    "total": {
      "MATK": 210,
      "MP Charge": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 165,
      "MATK": 27,
      "MDEF": 6,
      "Magic Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 198,
      "MATK": 32,
      "MDEF": 7,
      "Magic Crit": 7,
      "Block": 17
    },
    "g3": {
      "HP": 231,
      "MATK": 37,
      "MDEF": 8,
      "Magic Crit": 8,
      "Accuracy": 12
    },
    "g4": {
      "HP": 264,
      "MATK": 43,
      "MDEF": 9,
      "Magic Crit": 10,
      "Block": 23
    },
    "g5": {
      "HP": 297,
      "MATK": 48,
      "MDEF": 10,
      "Magic Crit": 11,
      "MP Charge": 6
    },
    "g6": {
      "HP": 330,
      "MATK": 53,
      "MDEF": 11,
      "Magic Crit": 12,
      "Accuracy": 18
    },
    "g7": {
      "HP": 363,
      "MATK": 58,
      "MDEF": 13,
      "Magic Crit": 13,
      "Block": 32
    },
    "g8": {
      "HP": 396,
      "MATK": 64,
      "MDEF": 14,
      "Magic Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 429,
      "MATK": 69,
      "MDEF": 15,
      "Magic Crit": 16,
      "Block": 38
    },
    "g10": {
      "HP": 462,
      "MATK": 74,
      "MDEF": 16,
      "Magic Crit": 17,
      "MP Charge": 9
    },
    "total": {
      "HP": 462,
      "MATK": 74,
      "MDEF": 16,
      "Magic Crit": 17,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 131
    },
    {
      "grade": 2,
      "MP Cost Down": 1
    },
    {
      "grade": 3,
      "HP": 183
    },
    {
      "grade": 4,
      "MP Cost Down": 1
    },
    {
      "grade": 5,
      "HP": 235
    },
    {
      "grade": 6,
      "MP Cost Down": 1
    },
    {
      "grade": 7,
      "HP": 287
    },
    {
      "grade": 8,
      "MP Cost Down": 1
    },
    {
      "grade": 9,
      "HP": 339
    },
    {
      "grade": 10,
      "MP Cost Down": 1
    },
    {
      "grade": 11,
      "HP": 374
    }
  ]
};;;;;;;;
