// Character data: the-bride-of-luck-theresia
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "the-bride-of-luck-theresia",
  "name": "The Bride of Luck: Theresia",
  "displayName": "The Bride of Luck: Theresia",
  "baseName": "Theresia",
  "title": "The Bride of Luck",
  "rarity": "SSR",
  "element": "Light",
  "role": "Support",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 505,
  "weaponType": "Throw",
  "skillTypes": [
    "Heal",
    "Buff"
  ],
  "image": "Theresia",
  "introduction": "Back Row、Magical、Support",
  "profile": {
    "height": "166cm",
    "bust": "101cm (J Cup)",
    "waist": "60cm",
    "hips": "89cm"
  },
  "credits": {
    "illustration": {
      "japanese": "西條サトル",
      "romanized": ""
    },
    "voice": {
      "japanese": "蒼乃むすび",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2140
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Look, the bride is here!",
      "icon": "skill001/skill0014",
      "description": "Applies Magic Attack 15%+30 UP to all allies for 10 seconds and Magic Critical Damage 40 UP for 10 seconds",
      "descriptionLv1": "Applies Magic Attack 15%+30 UP to all allies for 10 seconds and Magic Critical Damage 40 UP for 10 seconds",
      "descriptionLv90": "Applies Magic Attack 15%+480 UP to all allies for 10 seconds and Magic Critical Damage 490 UP for 10 seconds",
      "target": "All Allies",
      "castTime": 1.45,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Magic Attack + Lv3",
        "Magic Critical Damage+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Magic Attack + Lv3",
          "value": 30,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 5.0
        },
        {
          "name": "Magic Critical Damage+ Lv3",
          "value": 40,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 5.0
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Please make me happy",
      "icon": "skill001/skill0019",
      "description": "Applies Debuff Resistance 30%UP to all allies for 10 seconds and Healing Shield (400, restores 30%) for 10 seconds",
      "descriptionLv1": "Applies Debuff Resistance 30%UP to all allies for 10 seconds and Healing Shield (400, restores 30%) for 10 seconds",
      "descriptionLv90": "Applies Debuff Resistance 30%UP to all allies for 10 seconds and Healing Shield (400, restores 30%) for 10 seconds",
      "target": "All Allies",
      "castTime": 1.45,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Debuff Resistance Lv2",
        "Healing Shield LvMax"
      ],
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 0,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Healing Shield LvMax",
          "value": 400,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 30.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Beloved Kiss - Happy Bouquet",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to all allies and inflicts Accuracy UP(LV 1) for 10 seconds and Action Speed UP(LV 1) for 10 seconds",
      "effect": "2000% + 1200",
      "buffEffects": [
        {
          "name": "Accuracy + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Beloved Kiss - Happy Bouquet",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by to all allies and inflicts Accuracy UP(LV 2) for 10 seconds and Action Speed UP(LV 2) for 10 seconds",
      "effect": "2300% + 1400",
      "buffEffects": [
        {
          "name": "Accuracy + Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed + Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Beloved Kiss - Happy Bouquet",
      "icon": "skill001/skill0022_3",
      "description": "Restores HP by to all allies and inflicts Accuracy UP(LV 3) for 10 seconds and Action Speed UP(LV 3) for 10 seconds",
      "effect": "2500% + 1550",
      "buffEffects": [
        {
          "name": "Accuracy + Ultimate Lv3",
          "value": 16,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed + Ultimate Lv3",
          "value": 16,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Beloved Kiss - Happy Bouquet",
      "icon": "skill001/skill0022_4",
      "description": "Restores HP by to all allies and inflicts Accuracy UP(LV 4) for 10 seconds and Action Speed UP(LV 4) for 10 seconds",
      "effect": "2700% + 1700",
      "buffEffects": [
        {
          "name": "Accuracy + Ultimate Lv4",
          "value": 18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed + Ultimate Lv4",
          "value": 18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Beloved Kiss - Happy Bouquet",
      "icon": "skill001/skill0022_5",
      "description": "Restores HP by to all allies and inflicts Accuracy UP(LV 5) for 10 seconds and Action Speed UP(LV 5) for 10 seconds",
      "effect": "2800% + 1800",
      "buffEffects": [
        {
          "name": "Accuracy + Ultimate Lv5",
          "value": 20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed + Ultimate Lv5",
          "value": 20,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Action Speed +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+3444), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Magic Attack +",
      "icon": "skill001/skill1005",
      "effect": "Skill Damage + (+10%), Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "The Bride of Luck: Theresia",
  "id": 2140,
  "rarity": "SSR",
  "element": "Light",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff"
  ],
  "baseStats": {
    "HP": 1805,
    "ATK": 129,
    "MATK": 215,
    "DEF": 137,
    "MDEF": 343
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic",
    "loop": "Basic → Basic → Basic → Basic → Skill2 → Skill3 → Basic → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.95"
  },
  "slug": "the-bride-of-luck-theresia"
};

export const stats = {
  "id": "the-bride-of-luck-theresia",
  "characterId": 2140,
  "name": "【The Bride of Luck】Theresia",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff"
  ],
  "baseStats": {
    "hp": {
      "base": 1805,
      "lv90": 9025
    },
    "atk": {
      "base": 129,
      "lv90": 645
    },
    "matk": {
      "base": 215,
      "lv90": 1075
    },
    "def": {
      "base": 137,
      "lv90": 377
    },
    "mdef": {
      "base": 343,
      "lv90": 583
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 45,
      "lv90": 135
    },
    "physCrit": {
      "base": 249,
      "lv90": 398
    },
    "magicCrit": {
      "base": 416,
      "lv90": 665
    },
    "hpRegen": {
      "base": 90,
      "lv90": 315
    },
    "mpRegen": {
      "base": 62,
      "lv90": 249
    },
    "healPwr": {
      "base": 100,
      "lv90": 250
    },
    "mpCharge": {
      "base": 65,
      "lv90": 65
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
      "HP": 542,
      "MATK": 65,
      "Block": 14,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 623,
      "MATK": 74,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 731,
      "MATK": 87,
      "Block": 18,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 812,
      "MATK": 97,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1543,
      "MATK": 183,
      "DEF": 38,
      "MDEF": 88,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 4251,
      "MATK": 506,
      "Block": 68,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 38,
      "MDEF": 88,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 300
    },
    "gp2": {
      "HP": 300,
      "MP Charge": 2
    },
    "gp3": {
      "HP": 750,
      "MP Charge": 2
    },
    "gp4": {
      "HP": 750,
      "MP Charge": 4
    },
    "gp5": {
      "HP": 1200,
      "MP Charge": 4
    },
    "gp6": {
      "HP": 1200,
      "MP Charge": 6
    },
    "gp7": {
      "HP": 1650,
      "MP Charge": 6
    },
    "gp8": {
      "HP": 1650,
      "MP Charge": 8
    },
    "gp9": {
      "HP": 2100,
      "MP Charge": 8
    },
    "gp10": {
      "HP": 2100,
      "MP Charge": 10
    },
    "total": {
      "HP": 2100,
      "MP Charge": 10
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 190,
      "MATK": 23,
      "MDEF": 16,
      "Magic Crit": 9,
      "Accuracy": 9
    },
    "g2": {
      "HP": 228,
      "MATK": 27,
      "MDEF": 19,
      "Magic Crit": 11,
      "Block": 14
    },
    "g3": {
      "HP": 266,
      "MATK": 32,
      "MDEF": 22,
      "Magic Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 304,
      "MATK": 36,
      "MDEF": 25,
      "Magic Crit": 14,
      "Block": 19
    },
    "g5": {
      "HP": 342,
      "MATK": 41,
      "MDEF": 28,
      "Magic Crit": 16,
      "MP Charge": 5
    },
    "g6": {
      "HP": 380,
      "MATK": 45,
      "MDEF": 31,
      "Magic Crit": 18,
      "Accuracy": 18
    },
    "g7": {
      "HP": 418,
      "MATK": 50,
      "MDEF": 34,
      "Magic Crit": 19,
      "Block": 26
    },
    "g8": {
      "HP": 456,
      "MATK": 54,
      "MDEF": 37,
      "Magic Crit": 21,
      "Accuracy": 21
    },
    "g9": {
      "HP": 494,
      "MATK": 59,
      "MDEF": 40,
      "Magic Crit": 23,
      "Block": 31
    },
    "g10": {
      "HP": 532,
      "MATK": 63,
      "MDEF": 43,
      "Magic Crit": 25,
      "MP Charge": 8
    },
    "total": {
      "HP": 532,
      "MATK": 63,
      "MDEF": 43,
      "Magic Crit": 25,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Block": 4
    },
    {
      "grade": 2,
      "MP Charge": 2
    },
    {
      "grade": 3,
      "Block": 5
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "Block": 7
    },
    {
      "grade": 6,
      "MP Charge": 3
    },
    {
      "grade": 7,
      "Block": 8
    },
    {
      "grade": 8,
      "MP Charge": 3
    },
    {
      "grade": 9,
      "Block": 10
    },
    {
      "grade": 10,
      "MP Charge": 4
    },
    {
      "grade": 11,
      "Block": 11
    }
  ]
};;;;;;;;
