// Character data: vanessa
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "vanessa",
  "name": "Vanessa",
  "displayName": "Vanessa",
  "baseName": "Vanessa",
  "title": null,
  "rarity": "SR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Fast",
  "range": 240,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Vanessa",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "164cm",
    "bust": "100cm (I Cup)",
    "waist": "61cm",
    "hips": "94cm"
  },
  "credits": {
    "illustration": {
      "japanese": "brick",
      "romanized": ""
    },
    "voice": {
      "japanese": "美月",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2103
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Be quiet",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy",
      "descriptionLv1": "Deals physical damage to the nearest enemy",
      "descriptionLv90": "Deals physical damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 0.55,
      "damageScaling": "380% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+25",
      "lvl1": "380% + 500",
      "lvl90": "380% + 2725",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Don't run...",
      "icon": "skill001/skill0017",
      "description": "Applies Accuracy 11 UP to self for 11 seconds and Physical Critical Damage 40 UP for 11 seconds",
      "descriptionLv1": "Applies Accuracy 11 UP to self for 11 seconds and Physical Critical Damage 40 UP for 11 seconds",
      "descriptionLv90": "Applies Accuracy 23 UP to self for 11 seconds and Physical Critical Damage 40 UP for 11 seconds",
      "target": "Self",
      "castTime": 0.55,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Accuracy + Lv4",
        "Physical Critical Damage+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Accuracy + Lv4",
          "value": 11,
          "type": "flat",
          "duration": 11,
          "levelGrowth": 0.13
        },
        {
          "name": "Physical Critical Damage+ Lv3",
          "value": 40,
          "type": "percent",
          "duration": 11,
          "levelGrowth": 5.0
        }
      ],
      "duration": 11
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Are you going to behave now?",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts BlockDOWN(LV 1) for 12 seconds",
      "effect": "1500% + 600",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 2,
      "name": "Be quiet",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy",
      "effect": "380% + 500",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "Don't run...",
      "icon": "skill001/skill0017",
      "description": "Applies Accuracy 11 UP to self for 11 seconds and Physical Critical Damage 40 UP for 11 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Accuracy + Lv4",
          "value": 11,
          "type": "flat",
          "duration": 11
        },
        {
          "name": "Physical Critical Damage+ Lv3",
          "value": 40,
          "type": "percent",
          "duration": 11
        }
      ]
    },
    {
      "rank": 4,
      "name": "Are you going to behave now?",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts BlockDOWN(LV 1) for 12 seconds",
      "effect": "1500% + 600",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 5,
      "name": "Are you going to behave now?",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts BlockDOWN(LV 2) for 12 seconds",
      "effect": "1710% + 800",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv2",
          "value": -15,
          "type": "flat",
          "duration": 12
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+259)",
      "effectValues": [
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
      "effect": "Skill Damage + (+20%), Accuracy + (+15)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Accuracy +",
          "value": 15,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Vanessa",
  "id": 2103,
  "rarity": "SR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1494,
    "ATK": 174,
    "MATK": 104,
    "DEF": 126,
    "MDEF": 50
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.36"
  },
  "slug": "vanessa"
};

export const stats = {
  "id": "vanessa",
  "characterId": 2103,
  "name": "Vanessa",
  "rarity": "SR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1494,
      "lv90": 7473
    },
    "atk": {
      "base": 174,
      "lv90": 870
    },
    "matk": {
      "base": 104,
      "lv90": 521
    },
    "def": {
      "base": 126,
      "lv90": 252
    },
    "mdef": {
      "base": 50,
      "lv90": 100
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 60,
      "lv90": 180
    },
    "physCrit": {
      "base": 399,
      "lv90": 638
    },
    "magicCrit": {
      "base": 239,
      "lv90": 382
    },
    "hpRegen": {
      "base": 74,
      "lv90": 260
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
      "base": 40,
      "lv90": 40
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
      "HP": 448,
      "ATK": 52,
      "Block": 18,
      "MP Charge": 4
    },
    "lb2": {
      "HP": 516,
      "ATK": 60,
      "Accuracy": 13,
      "Block": 21
    },
    "lb3": {
      "HP": 605,
      "ATK": 70,
      "Block": 24,
      "MP Charge": 5
    },
    "lb4": {
      "HP": 673,
      "ATK": 78,
      "Accuracy": 17,
      "Block": 27
    },
    "lb5": {
      "HP": 1096,
      "ATK": 137,
      "DEF": 31,
      "MDEF": 10,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3338,
      "ATK": 397,
      "Block": 90,
      "MP Charge": 9,
      "Accuracy": 30,
      "DEF": 31,
      "MDEF": 10,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "Phys Crit": 10
    },
    "gp2": {
      "ATK": 30,
      "Phys Crit": 10
    },
    "gp3": {
      "ATK": 30,
      "Phys Crit": 30
    },
    "gp4": {
      "ATK": 90,
      "Phys Crit": 30
    },
    "gp5": {
      "ATK": 90,
      "Phys Crit": 50
    },
    "gp6": {
      "ATK": 150,
      "Phys Crit": 50
    },
    "gp7": {
      "ATK": 150,
      "Phys Crit": 70
    },
    "gp8": {
      "ATK": 210,
      "Phys Crit": 70
    },
    "gp9": {
      "ATK": 210,
      "Phys Crit": 90
    },
    "gp10": {
      "ATK": 270,
      "Phys Crit": 90
    },
    "total": {
      "ATK": 270,
      "Phys Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 157,
      "ATK": 18,
      "Phys Crit": 8,
      "Accuracy": 9
    },
    "g2": {
      "HP": 189,
      "ATK": 22,
      "Phys Crit": 10,
      "Block": 19
    },
    "g3": {
      "HP": 220,
      "ATK": 26,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 252,
      "ATK": 29,
      "Phys Crit": 13,
      "Block": 25
    },
    "g5": {
      "HP": 283,
      "ATK": 33,
      "Phys Crit": 15,
      "MP Charge": 3
    },
    "g6": {
      "HP": 315,
      "ATK": 37,
      "Phys Crit": 17,
      "Accuracy": 18
    },
    "g7": {
      "HP": 346,
      "ATK": 40,
      "Phys Crit": 19,
      "Block": 35
    },
    "g8": {
      "HP": 378,
      "ATK": 44,
      "Phys Crit": 20,
      "Accuracy": 21
    },
    "g9": {
      "HP": 409,
      "ATK": 48,
      "Phys Crit": 22,
      "Block": 41
    },
    "g10": {
      "HP": 441,
      "ATK": 51,
      "Phys Crit": 24,
      "MP Charge": 5
    },
    "total": {
      "HP": 441,
      "ATK": 51,
      "Phys Crit": 24,
      "MP Charge": 5
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 15
    },
    {
      "grade": 2,
      "Block": 5
    },
    {
      "grade": 3,
      "ATK": 20
    },
    {
      "grade": 4,
      "Block": 7
    },
    {
      "grade": 5,
      "ATK": 26
    },
    {
      "grade": 6,
      "Block": 9
    },
    {
      "grade": 7,
      "ATK": 32
    },
    {
      "grade": 8,
      "Block": 11
    },
    {
      "grade": 9,
      "ATK": 38
    },
    {
      "grade": 10,
      "Block": 13
    },
    {
      "grade": 11,
      "ATK": 40
    }
  ]
};;;;;;;;
