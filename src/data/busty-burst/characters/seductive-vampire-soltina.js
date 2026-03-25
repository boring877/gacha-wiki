// Character data: seductive-vampire-soltina
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "seductive-vampire-soltina",
  "name": "Seductive Vampire: Soltina",
  "displayName": "Seductive Vampire: Soltina",
  "baseName": "Soltina",
  "title": "Seductive Vampire",
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Fast",
  "range": 480,
  "weaponType": "Throw",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Soltina",
  "introduction": "Back Row, Physical, Attacker",
  "profile": {
    "height": "162cm",
    "bust": "100cm (J Cup)",
    "waist": "60cm",
    "hips": "85cm"
  },
  "credits": {
    "illustration": {
      "japanese": "サブロー",
      "romanized": ""
    },
    "voice": {
      "japanese": "柏木逢花",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "event",
    "source": "Villain Halloween"
  },
  "characterId": 2082
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "I'll come give you a kiss!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the 3 nearest enemies activation whenApplies HP Absorb 19%+UP to self for 5 seconds and absorbs 3% of the damage dealt to restore own HP",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies activation whenApplies HP Absorb 19%+UP to self for 5 seconds and absorbs 3% of the damage dealt to restore own HP",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies activation whenApplies HP Absorb 19%+UP to self for 5 seconds and absorbs 3% of the damage dealt to restore own HP",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "130% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+8",
      "lvl1": "130% + 100",
      "lvl90": "130% + 545",
      "effects": [
        "HP Absorb+ Lv5"
      ],
      "buffEffects": [
        {
          "name": "HP Absorb+ Lv5",
          "value": 19,
          "type": "percent",
          "duration": 5,
          "levelGrowth": 5.0
        }
      ],
      "duration": 5
    },
    {
      "slot": 3,
      "name": "Pet me, pet me",
      "icon": "skill001/skill0013",
      "description": "Applies Accuracy 11 UP to self for 10 seconds and Physical Attack 20%+40 UP for 10 seconds",
      "descriptionLv1": "Applies Accuracy 11 UP to self for 10 seconds and Physical Attack 20%+40 UP for 10 seconds",
      "descriptionLv90": "Applies Accuracy 23 UP to self for 10 seconds and Physical Attack 20%+850 UP for 10 seconds",
      "target": "Self",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Accuracy + Lv4",
        "Physical Attack + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Accuracy + Lv4",
          "value": 11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.13
        },
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 9.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Love-struck vampire maid racing through the night",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the enemy with the lowest HP and inflicts Cleanse for 3 seconds and Action Speed DOWN(LV 4) for 10 seconds and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1150% + 1000",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -28,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Love-struck vampire maid racing through the night",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the enemy with the lowest HP and inflicts Cleanse for 4 seconds and Action Speed DOWN(LV 5) for 10 seconds and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1380% + 1200",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -30,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Love-struck vampire maid racing through the night",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the enemy with the lowest HP and inflicts Cleanse for 4 seconds and Action Speed DOWN(LV 5) for 10 seconds and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1540% + 1300",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -30,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Love-struck vampire maid racing through the night",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the enemy with the lowest HP and inflicts Cleanse for 5 seconds and Action Speed DOWN(LV 5) for 10 seconds and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1650% + 1350",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -30,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Love-struck vampire maid racing through the night",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the enemy with the lowest HP and inflicts Cleanse for 5 seconds and Action Speed DOWN(LV 5) for 10 seconds and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1700% + 1400",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -30,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Physical Attack +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+3444), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        },
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Accuracy +",
          "value": 20,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Seductive Vampire: Soltina",
  "id": 2082,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1457,
    "ATK": 281,
    "MATK": 168,
    "DEF": 226,
    "MDEF": 90
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "seductive-vampire-soltina"
};

export const stats = {
  "id": "seductive-vampire-soltina",
  "characterId": 2082,
  "name": "[Seductive Vampire] Soltina",
  "rarity": "SSR",
  "element": "Dark",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1457,
      "lv90": 7288
    },
    "atk": {
      "base": 281,
      "lv90": 1405
    },
    "matk": {
      "base": 168,
      "lv90": 843
    },
    "def": {
      "base": 226,
      "lv90": 452
    },
    "mdef": {
      "base": 90,
      "lv90": 180
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
      "base": 125,
      "lv90": 200
    },
    "magicCrit": {
      "base": 75,
      "lv90": 120
    },
    "hpRegen": {
      "base": 72,
      "lv90": 254
    },
    "mpRegen": {
      "base": 59,
      "lv90": 237
    },
    "healPwr": {
      "base": 82,
      "lv90": 206
    },
    "mpCharge": {
      "base": 49,
      "lv90": 49
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
      "HP": 437,
      "ATK": 84,
      "Block": 17,
      "MP Charge": 4
    },
    "lb2": {
      "HP": 503,
      "ATK": 97,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 590,
      "ATK": 114,
      "Block": 22,
      "MP Charge": 6
    },
    "lb4": {
      "HP": 656,
      "ATK": 127,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1348,
      "ATK": 260,
      "DEF": 64,
      "MDEF": 18,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 3534,
      "ATK": 682,
      "Block": 83,
      "MP Charge": 10,
      "Accuracy": 30,
      "DEF": 64,
      "MDEF": 18,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "Block": 3
    },
    "gp2": {
      "HP": 300,
      "Block": 3
    },
    "gp3": {
      "HP": 300,
      "Block": 7
    },
    "gp4": {
      "HP": 750,
      "Block": 7
    },
    "gp5": {
      "HP": 750,
      "Block": 10
    },
    "gp6": {
      "HP": 1200,
      "Block": 10
    },
    "gp7": {
      "HP": 1200,
      "Block": 13
    },
    "gp8": {
      "HP": 1650,
      "Block": 13
    },
    "gp9": {
      "HP": 1650,
      "Block": 16
    },
    "gp10": {
      "HP": 2100,
      "Block": 16
    },
    "total": {
      "HP": 2100,
      "Block": 16
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 153,
      "ATK": 30,
      "Phys Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 184,
      "ATK": 36,
      "Phys Crit": 3,
      "Block": 17
    },
    "g3": {
      "HP": 215,
      "ATK": 41,
      "Phys Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 246,
      "ATK": 47,
      "Phys Crit": 4,
      "Block": 23
    },
    "g5": {
      "HP": 276,
      "ATK": 53,
      "Phys Crit": 5,
      "MP Charge": 4
    },
    "g6": {
      "HP": 307,
      "ATK": 59,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 338,
      "ATK": 65,
      "Phys Crit": 6,
      "Block": 32
    },
    "g8": {
      "HP": 368,
      "ATK": 71,
      "Phys Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 399,
      "ATK": 77,
      "Phys Crit": 7,
      "Block": 38
    },
    "g10": {
      "HP": 430,
      "ATK": 83,
      "Phys Crit": 7,
      "MP Charge": 6
    },
    "total": {
      "HP": 430,
      "ATK": 83,
      "Phys Crit": 7,
      "MP Charge": 6
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 121
    },
    {
      "grade": 2,
      "ATK": 25
    },
    {
      "grade": 3,
      "HP": 170
    },
    {
      "grade": 4,
      "ATK": 34
    },
    {
      "grade": 5,
      "HP": 219
    },
    {
      "grade": 6,
      "ATK": 42
    },
    {
      "grade": 7,
      "HP": 267
    },
    {
      "grade": 8,
      "ATK": 51
    },
    {
      "grade": 9,
      "HP": 316
    },
    {
      "grade": 10,
      "ATK": 59
    },
    {
      "grade": 11,
      "HP": 332
    }
  ]
};;;;;;;;
