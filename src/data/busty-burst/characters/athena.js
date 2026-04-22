// Character data: athena
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "athena",
  "name": "Athena",
  "displayName": "Athena",
  "baseName": "Athena",
  "title": null,
  "rarity": "SR",
  "element": "Light",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Fast",
  "range": 200,
  "weaponType": "Slash",
  "skillTypes": [
    "Heal",
    "Debuff",
    "Disrupt"
  ],
  "image": "Athena",
  "introduction": "Front Row、Physical、Tank",
  "profile": {
    "height": "170cm",
    "bust": "110cm (M Cup)",
    "waist": "62cm",
    "hips": "101cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "ももぞの薫",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2030
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Poliucos",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack -9%-20 DOWN for 5 seconds and Magic Attack -9%-20 DOWN for 5 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Attack -9%-20 DOWN for 5 seconds and Magic Attack -9%-20 DOWN for 5 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Attack -9%-2000 DOWN for 5 seconds and Magic Attack -9%-20 DOWN for 5 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.88,
      "damageScaling": "280% ATK",
      "baseDamage": "+90",
      "levelGrowth": "+15",
      "lvl1": "280% + 90",
      "lvl90": "280% + -88",
      "effects": [
        "Physical Attack - Lv3",
        "Magic Attack - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv3",
          "value": -20,
          "type": "flat",
          "duration": 5,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Attack - Lv3",
          "value": -20,
          "type": "flat",
          "duration": 5,
          "levelGrowth": -2.0
        }
      ],
      "duration": 5
    },
    {
      "slot": 3,
      "name": "Palladion",
      "icon": "skill001/skill0021",
      "description": "Restores own HP by and inflicts Block 13 UP for 10 seconds",
      "descriptionLv1": "Restores own HP by and inflicts Block 13 UP for 10 seconds",
      "descriptionLv90": "Restores own HP by and inflicts Block 26 UP for 10 seconds",
      "target": "Self",
      "castTime": 0.88,
      "damageScaling": "2000% ATK",
      "baseDamage": "+416",
      "levelGrowth": "+60",
      "lvl1": "2000% + 416",
      "lvl90": "2000% + 429",
      "effects": [
        "Block+ Lv5"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv5",
          "value": 13,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.15
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Knowledge That Brings Regret to Fools",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Silence for 5 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
      "effect": "1200% + 1000",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 2,
      "name": "Knowledge That Brings Regret to Fools",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Silence for 5 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
      "effect": "1440% + 1146",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 3,
      "name": "Knowledge That Brings Regret to Fools",
      "icon": "skill001/skill0012_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Silence for 5 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
      "effect": "1520% + 1296",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 4,
      "name": "Knowledge That Brings Regret to Fools",
      "icon": "skill001/skill0012_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Silence for 5 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
      "effect": "1639% + 1385",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 5,
      "name": "Knowledge That Brings Regret to Fools",
      "icon": "skill001/skill0012_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Silence for 5 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
      "effect": "1760% + 1515",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1002",
      "effect": "Physical Defense + (+70), Magic Defense+ (+70)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 70,
          "type": "flat"
        },
        {
          "name": "Magic Defense+",
          "value": 70,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Max HP +, Block+",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+1447), Block+ (+15)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 1447,
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
  "name": "Athena",
  "id": 2030,
  "rarity": "SR",
  "element": "Light",
  "role": "Tank",
  "tags": [
    "Heal",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2267,
    "ATK": 163,
    "MATK": 97,
    "DEF": 326,
    "MDEF": 130
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Basic → Skill3",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.36"
  },
  "slug": "athena"
};

export const stats = {
  "id": "athena",
  "characterId": 2030,
  "name": "Athena",
  "rarity": "SR",
  "element": "聖",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Heal",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2267,
      "lv90": 11335
    },
    "atk": {
      "base": 163,
      "lv90": 815
    },
    "matk": {
      "base": 97,
      "lv90": 488
    },
    "def": {
      "base": 326,
      "lv90": 652
    },
    "mdef": {
      "base": 130,
      "lv90": 260
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 40,
      "lv90": 120
    },
    "physCrit": {
      "base": 37,
      "lv90": 59
    },
    "magicCrit": {
      "base": 22,
      "lv90": 35
    },
    "hpRegen": {
      "base": 113,
      "lv90": 396
    },
    "mpRegen": {
      "base": 62,
      "lv90": 249
    },
    "healPwr": {
      "base": 117,
      "lv90": 293
    },
    "mpCharge": {
      "base": 55,
      "lv90": 55
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
      "HP": 680,
      "ATK": 49,
      "Block": 12,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 782,
      "ATK": 56,
      "Accuracy": 13,
      "Block": 14
    },
    "lb3": {
      "HP": 918,
      "ATK": 66,
      "Block": 16,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1020,
      "ATK": 73,
      "Accuracy": 17,
      "Block": 18
    },
    "lb5": {
      "HP": 1991,
      "ATK": 129,
      "DEF": 88,
      "MDEF": 24,
      "Heal Pwr": 27
    },
    "total": {
      "HP": 5391,
      "ATK": 373,
      "Block": 60,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 88,
      "MDEF": 24,
      "Heal Pwr": 27
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 200
    },
    "gp2": {
      "HP": 200,
      "MDEF": 20
    },
    "gp3": {
      "HP": 500,
      "MDEF": 20
    },
    "gp4": {
      "HP": 500,
      "MDEF": 50
    },
    "gp5": {
      "HP": 800,
      "MDEF": 50
    },
    "gp6": {
      "HP": 800,
      "MDEF": 80
    },
    "gp7": {
      "HP": 1100,
      "MDEF": 80
    },
    "gp8": {
      "HP": 1100,
      "MDEF": 110
    },
    "gp9": {
      "HP": 1400,
      "MDEF": 110
    },
    "gp10": {
      "HP": 1400,
      "MDEF": 140
    },
    "total": {
      "HP": 1400,
      "MDEF": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 239,
      "ATK": 17,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 286,
      "ATK": 21,
      "Phys Crit": 1,
      "Block": 13
    },
    "g3": {
      "HP": 334,
      "ATK": 24,
      "Phys Crit": 1,
      "Accuracy": 12
    },
    "g4": {
      "HP": 382,
      "ATK": 27,
      "Phys Crit": 1,
      "Block": 17
    },
    "g5": {
      "HP": 430,
      "ATK": 31,
      "Phys Crit": 1,
      "MP Charge": 5
    },
    "g6": {
      "HP": 477,
      "ATK": 34,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 525,
      "ATK": 38,
      "Phys Crit": 2,
      "Block": 23
    },
    "g8": {
      "HP": 573,
      "ATK": 41,
      "Phys Crit": 2,
      "Accuracy": 21
    },
    "g9": {
      "HP": 620,
      "ATK": 45,
      "Phys Crit": 2,
      "Block": 27
    },
    "g10": {
      "HP": 668,
      "ATK": 48,
      "Phys Crit": 2,
      "MP Charge": 7
    },
    "total": {
      "HP": 668,
      "ATK": 48,
      "Phys Crit": 2,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "HP": 204
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "HP": 272
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "HP": 340
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "HP": 408
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "HP": 476
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;;;;;;
