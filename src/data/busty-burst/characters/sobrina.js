// Character data: sobrina
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "sobrina",
  "name": "Sobrina",
  "displayName": "Sobrina",
  "baseName": "Sobrina",
  "title": null,
  "rarity": "SR",
  "element": "Mind",
  "role": "Support",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Slow",
  "range": 520,
  "weaponType": "Ranged",
  "skillTypes": [
    "Heal",
    "Buff",
    "Cleanse"
  ],
  "image": "Sobrina",
  "introduction": "Back Row、Magical、Support",
  "profile": {
    "height": "170cm",
    "bust": "101cm (J Cup)",
    "waist": "63cm",
    "hips": "101cm"
  },
  "credits": {
    "illustration": {
      "japanese": "只野あきら",
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
  "characterId": 2020
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "This is an order from your superior ",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to the ally with the lowest HP and inflicts Block 9 UP for 8 seconds",
      "descriptionLv1": "Restores HP by to the ally with the lowest HP and inflicts Block 9 UP for 8 seconds",
      "descriptionLv90": "Restores HP by to the ally with the lowest HP and inflicts Block 18 UP for 8 seconds",
      "target": "Lowest HP Ally",
      "castTime": 1.58,
      "damageScaling": "3300% ATK",
      "baseDamage": "+834",
      "levelGrowth": "+60",
      "lvl1": "3300% + 834",
      "lvl90": "3300% + 842",
      "effects": [
        "Block+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 0.1
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Lacking self-awareness ",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Defense 20%+140 UP to the ally with the lowest HP for 8 seconds and Magic Defense 20%+140 UP for 8 seconds",
      "descriptionLv1": "Applies Physical Defense 20%+140 UP to the ally with the lowest HP for 8 seconds and Magic Defense 20%+140 UP for 8 seconds",
      "descriptionLv90": "Applies Physical Defense 20%+320 UP to the ally with the lowest HP for 8 seconds and Magic Defense 20%+320 UP for 8 seconds",
      "target": "Lowest HP Ally",
      "castTime": 1.58,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Defense + Lv3",
        "Magic Defense+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + Lv3",
          "value": 140,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 2.0
        },
        {
          "name": "Magic Defense+ Lv3",
          "value": 140,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 2.0
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "It’s break time now ",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to all allies and inflicts Debuff Resistance 30%UP for 6 seconds",
      "effect": "2300% + 698",
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 0,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 2,
      "name": "It’s break time now ",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by to all allies and inflicts Debuff Resistance 30%UP for 6 seconds",
      "effect": "2645% + 752",
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 0,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "It’s break time now ",
      "icon": "skill001/skill0022_3",
      "description": "Restores HP by to all allies and inflicts Debuff Resistance 30%UP for 6 seconds",
      "effect": "2875% + 810",
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 0,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 4,
      "name": "It’s break time now ",
      "icon": "skill001/skill0022_4",
      "description": "Restores HP by to all allies and inflicts Debuff Resistance 30%UP for 6 seconds",
      "effect": "3105% + 862",
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 0,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 5,
      "name": "It’s break time now ",
      "icon": "skill001/skill0022_5",
      "description": "Restores HP by to all allies and inflicts Debuff Resistance 30%UP for 6 seconds",
      "effect": "3220% + 908",
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 0,
          "type": "percent",
          "duration": 6
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Healing Amount +",
      "icon": "skill001/skill1004",
      "effect": "Healing Amount + (+15%)",
      "effectValues": [
        {
          "name": "Healing Amount +",
          "value": 15,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1006",
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
    }
  ],
  "name": "Sobrina",
  "id": 2020,
  "rarity": "SR",
  "element": "Mind",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Cleanse"
  ],
  "baseStats": {
    "HP": 2707,
    "ATK": 167,
    "MATK": 279,
    "DEF": 25,
    "MDEF": 65
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Skill2",
    "loop": "Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "sobrina"
};

export const stats = {
  "id": "sobrina",
  "characterId": 2020,
  "name": "Sobrina",
  "rarity": "SR",
  "element": "想",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Cleanse"
  ],
  "baseStats": {
    "hp": {
      "base": 2707,
      "lv90": 13537
    },
    "atk": {
      "base": 167,
      "lv90": 837
    },
    "matk": {
      "base": 279,
      "lv90": 1396
    },
    "def": {
      "base": 25,
      "lv90": 50
    },
    "mdef": {
      "base": 65,
      "lv90": 130
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
      "base": 65,
      "lv90": 104
    },
    "magicCrit": {
      "base": 108,
      "lv90": 173
    },
    "hpRegen": {
      "base": 135,
      "lv90": 473
    },
    "mpRegen": {
      "base": 56,
      "lv90": 225
    },
    "healPwr": {
      "base": 117,
      "lv90": 293
    },
    "mpCharge": {
      "base": 82,
      "lv90": 82
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
      "HP": 812,
      "MATK": 84,
      "Block": 14,
      "MP Charge": 8
    },
    "lb2": {
      "HP": 934,
      "MATK": 96,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 1097,
      "MATK": 113,
      "Block": 18,
      "MP Charge": 10
    },
    "lb4": {
      "HP": 1218,
      "MATK": 126,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 2139,
      "MATK": 221,
      "DEF": 5,
      "MDEF": 18,
      "Heal Pwr": 31
    },
    "total": {
      "HP": 6200,
      "MATK": 640,
      "Block": 68,
      "MP Charge": 18,
      "Accuracy": 30,
      "DEF": 5,
      "MDEF": 18,
      "Heal Pwr": 31
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Charge": 2
    },
    "gp2": {
      "Heal Pwr": 10,
      "MP Charge": 2
    },
    "gp3": {
      "Heal Pwr": 10,
      "MP Charge": 5
    },
    "gp4": {
      "Heal Pwr": 25,
      "MP Charge": 5
    },
    "gp5": {
      "Heal Pwr": 25,
      "MP Charge": 7
    },
    "gp6": {
      "Heal Pwr": 40,
      "MP Charge": 7
    },
    "gp7": {
      "Heal Pwr": 40,
      "MP Charge": 9
    },
    "gp8": {
      "Heal Pwr": 55,
      "MP Charge": 9
    },
    "gp9": {
      "Heal Pwr": 55,
      "MP Charge": 11
    },
    "gp10": {
      "Heal Pwr": 70,
      "MP Charge": 11
    },
    "total": {
      "Heal Pwr": 70,
      "MP Charge": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 285,
      "MATK": 29,
      "MDEF": 3,
      "Magic Crit": 2,
      "Accuracy": 9
    },
    "g2": {
      "HP": 342,
      "MATK": 35,
      "MDEF": 4,
      "Magic Crit": 3,
      "Block": 14
    },
    "g3": {
      "HP": 399,
      "MATK": 41,
      "MDEF": 4,
      "Magic Crit": 3,
      "Accuracy": 12
    },
    "g4": {
      "HP": 456,
      "MATK": 47,
      "MDEF": 5,
      "Magic Crit": 4,
      "Block": 19
    },
    "g5": {
      "HP": 513,
      "MATK": 53,
      "MDEF": 5,
      "Magic Crit": 4,
      "MP Charge": 7
    },
    "g6": {
      "HP": 570,
      "MATK": 59,
      "MDEF": 6,
      "Magic Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 627,
      "MATK": 65,
      "MDEF": 6,
      "Magic Crit": 5,
      "Block": 26
    },
    "g8": {
      "HP": 684,
      "MATK": 71,
      "MDEF": 7,
      "Magic Crit": 5,
      "Accuracy": 21
    },
    "g9": {
      "HP": 741,
      "MATK": 76,
      "MDEF": 8,
      "Magic Crit": 6,
      "Block": 31
    },
    "g10": {
      "HP": 798,
      "MATK": 82,
      "MDEF": 8,
      "Magic Crit": 6,
      "MP Charge": 11
    },
    "total": {
      "HP": 798,
      "MATK": 82,
      "MDEF": 8,
      "Magic Crit": 6,
      "MP Charge": 11
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Charge": 2
    },
    {
      "grade": 2,
      "Heal Pwr": 5
    },
    {
      "grade": 3,
      "MP Charge": 3
    },
    {
      "grade": 4,
      "Heal Pwr": 7
    },
    {
      "grade": 5,
      "MP Charge": 4
    },
    {
      "grade": 6,
      "Heal Pwr": 9
    },
    {
      "grade": 7,
      "MP Charge": 4
    },
    {
      "grade": 8,
      "Heal Pwr": 11
    },
    {
      "grade": 9,
      "MP Charge": 5
    },
    {
      "grade": 10,
      "Heal Pwr": 12
    },
    {
      "grade": 11,
      "MP Charge": 6
    }
  ]
};;;;;;;;
