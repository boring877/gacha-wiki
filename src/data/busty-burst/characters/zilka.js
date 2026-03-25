// Character data: zilka
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "zilka",
  "name": "Zilka",
  "displayName": "Zilka",
  "baseName": "Zilka",
  "title": null,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Fast",
  "range": 230,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Zilka",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "158cm",
    "bust": "100cm (J Cup)",
    "waist": "61cm",
    "hips": "85cm"
  },
  "credits": {
    "illustration": {
      "japanese": "ねぶそく",
      "romanized": ""
    },
    "voice": {
      "japanese": "すずな",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2115
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Rathbrink Style - Flourishing Moon",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy",
      "descriptionLv1": "Deals physical damage to the nearest enemy",
      "descriptionLv90": "Deals physical damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 0.66,
      "damageScaling": "405% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+30",
      "lvl1": "405% + 300",
      "lvl90": "405% + 2970",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Sword Aura Release",
      "icon": "skill001/skill0013",
      "description": "Applies Physical Attack 20%+40 UP to self for 12 seconds and Accuracy 11 UP for 12 seconds",
      "descriptionLv1": "Applies Physical Attack 20%+40 UP to self for 12 seconds and Accuracy 11 UP for 12 seconds",
      "descriptionLv90": "Applies Physical Attack 20%+850 UP to self for 12 seconds and Accuracy 23 UP for 12 seconds",
      "target": "Self",
      "castTime": 0.66,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv5",
        "Accuracy + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 9.0
        },
        {
          "name": "Accuracy + Lv4",
          "value": 11,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 0.13
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Rathbrink Style Ultimate - Eagle Storm Cross Flash",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Dispel for 3 seconds and BlockDOWN(LV 1) for 10 seconds",
      "effect": "1400% + 500",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Rathbrink Style Ultimate - Eagle Storm Cross Flash",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Dispel for 4 seconds and BlockDOWN(LV 2) for 10 seconds",
      "effect": "1680% + 650",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Block- Ultimate Lv2",
          "value": -18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Rathbrink Style Ultimate - Eagle Storm Cross Flash",
      "icon": "skill001/skill0012_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Dispel for 4 seconds and BlockDOWN(LV 3) for 10 seconds",
      "effect": "1889% + 800",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Block- Ultimate Lv3",
          "value": -21,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Rathbrink Style Ultimate - Eagle Storm Cross Flash",
      "icon": "skill001/skill0012_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Dispel for 5 seconds and BlockDOWN(LV 4) for 10 seconds",
      "effect": "2030% + 900",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Block- Ultimate Lv4",
          "value": -23,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Rathbrink Style Ultimate - Eagle Storm Cross Flash",
      "icon": "skill001/skill0012_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Dispel for 5 seconds and BlockDOWN(LV 5) for 10 seconds",
      "effect": "2170% + 1000",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Block- Ultimate Lv5",
          "value": -25,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Critical Damage+, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Physical Critical Damage+ (+176%), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 176,
          "type": "percent"
        },
        {
          "name": "Accuracy +",
          "value": 20,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Zilka",
  "id": 2115,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 207,
    "MATK": 124,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.36"
  },
  "slug": "zilka"
};

export const stats = {
  "id": "zilka",
  "characterId": 2115,
  "name": "Zilka",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1819,
      "lv90": 9095
    },
    "atk": {
      "base": 207,
      "lv90": 1036
    },
    "matk": {
      "base": 124,
      "lv90": 621
    },
    "def": {
      "base": 143,
      "lv90": 286
    },
    "mdef": {
      "base": 57,
      "lv90": 114
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 50,
      "lv90": 150
    },
    "physCrit": {
      "base": 303,
      "lv90": 485
    },
    "magicCrit": {
      "base": 182,
      "lv90": 291
    },
    "hpRegen": {
      "base": 90,
      "lv90": 317
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
      "base": 42,
      "lv90": 42
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
      "HP": 546,
      "ATK": 62,
      "Block": 15,
      "MP Charge": 4
    },
    "lb2": {
      "HP": 628,
      "ATK": 72,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 737,
      "ATK": 84,
      "Block": 20,
      "MP Charge": 5
    },
    "lb4": {
      "HP": 819,
      "ATK": 93,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1546,
      "ATK": 192,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4276,
      "ATK": 503,
      "Block": 75,
      "MP Charge": 9,
      "Accuracy": 30,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "Accuracy": 3
    },
    "gp3": {
      "ATK": 120,
      "Accuracy": 3
    },
    "gp4": {
      "ATK": 120,
      "Accuracy": 7
    },
    "gp5": {
      "ATK": 200,
      "Accuracy": 7
    },
    "gp6": {
      "ATK": 200,
      "Accuracy": 10
    },
    "gp7": {
      "ATK": 280,
      "Accuracy": 10
    },
    "gp8": {
      "ATK": 280,
      "Accuracy": 13
    },
    "gp9": {
      "ATK": 360,
      "Accuracy": 13
    },
    "gp10": {
      "ATK": 360,
      "Accuracy": 16
    },
    "total": {
      "ATK": 360,
      "Accuracy": 16
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 191,
      "ATK": 22,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 230,
      "ATK": 26,
      "Phys Crit": 8,
      "Block": 16
    },
    "g3": {
      "HP": 268,
      "ATK": 31,
      "Phys Crit": 9,
      "Accuracy": 12
    },
    "g4": {
      "HP": 306,
      "ATK": 35,
      "Phys Crit": 10,
      "Block": 21
    },
    "g5": {
      "HP": 345,
      "ATK": 39,
      "Phys Crit": 12,
      "MP Charge": 3
    },
    "g6": {
      "HP": 383,
      "ATK": 44,
      "Phys Crit": 13,
      "Accuracy": 18
    },
    "g7": {
      "HP": 421,
      "ATK": 48,
      "Phys Crit": 14,
      "Block": 29
    },
    "g8": {
      "HP": 460,
      "ATK": 52,
      "Phys Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 498,
      "ATK": 57,
      "Phys Crit": 17,
      "Block": 34
    },
    "g10": {
      "HP": 536,
      "ATK": 61,
      "Phys Crit": 18,
      "MP Charge": 5
    },
    "total": {
      "HP": 536,
      "ATK": 61,
      "Phys Crit": 18,
      "MP Charge": 5
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 17
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "ATK": 24
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "ATK": 31
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "ATK": 38
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "ATK": 45
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "ATK": 47
    }
  ]
};;;;;;;;
