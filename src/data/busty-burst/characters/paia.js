// Character data: paia
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "paia",
  "name": "Paia",
  "displayName": "Paia",
  "baseName": "Paia",
  "title": null,
  "rarity": "SR",
  "element": "Fire",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Slow",
  "range": 520,
  "weaponType": "Throw",
  "skillTypes": [
    "Heal",
    "Buff",
    "Disrupt"
  ],
  "image": "Paia",
  "introduction": "Back Row、Physical、Support",
  "profile": {
    "height": "156cm",
    "bust": "90cm (I Cup)",
    "waist": "53cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "綾音まこ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2022
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Poison Mushroom!",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Poison (HP --200 per second) for 10 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Poison (HP --200 per second) for 10 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Poison (HP --2450 per second) for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "267% ATK",
      "baseDamage": "+110",
      "levelGrowth": "+20",
      "lvl1": "267% + 110",
      "lvl90": "267% + -2115",
      "effects": [
        "Poison Lv5"
      ],
      "buffEffects": [
        {
          "name": "Poison Lv5",
          "value": -200,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -25.0
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Lady Medusa’s Mushroom!",
      "icon": "skill001/skill0019",
      "description": "Applies Debuff Resistance UP to all allies for 8 seconds and Accuracy 7 UP for 8 seconds",
      "descriptionLv1": "Applies Debuff Resistance UP to all allies for 8 seconds and Accuracy 7 UP for 8 seconds",
      "descriptionLv90": "Applies Debuff Resistance UP to all allies for 8 seconds and Accuracy 14 UP for 8 seconds",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Debuff Resistance Lv1",
        "Accuracy + Lv2"
      ],
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv1",
          "value": 0,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Accuracy + Lv2",
          "value": 7,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 0.08
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Battle Mushroom!",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to all allies and inflicts BlockUP(LV 1) for 11 seconds",
      "effect": "2450% + 785",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 11
        }
      ]
    },
    {
      "rank": 2,
      "name": "Poison Mushroom!",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Poison (HP --200 per second) for 10 seconds",
      "effect": "267% + 110",
      "buffEffects": [
        {
          "name": "Poison Lv5",
          "value": -200,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Lady Medusa’s Mushroom!",
      "icon": "skill001/skill0019",
      "description": "Applies Debuff Resistance UP to all allies for 8 seconds and Accuracy 7 UP for 8 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv1",
          "value": 0,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Accuracy + Lv2",
          "value": 7,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Battle Mushroom!",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to all allies and inflicts BlockUP(LV 1) for 11 seconds",
      "effect": "2450% + 785",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 11
        }
      ]
    },
    {
      "rank": 5,
      "name": "Battle Mushroom!",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by to all allies and inflicts BlockUP(LV 2) for 11 seconds",
      "effect": "2817% + 822",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 11
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Block+",
      "icon": "skill001/skill1002",
      "effect": "Block+ (+15)",
      "effectValues": [
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Poison Resistance LvMax, Magic Defense+",
      "icon": "skill001/skill1002",
      "effect": "Poison Resistance LvMax (+1%), Magic Defense+ (+70)",
      "effectValues": [
        {
          "name": "Poison Resistance LvMax",
          "value": 1,
          "type": "percent"
        },
        {
          "name": "Magic Defense+",
          "value": 70,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Paia",
  "id": 2022,
  "rarity": "SR",
  "element": "Fire",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2707,
    "ATK": 279,
    "MATK": 167,
    "DEF": 65,
    "MDEF": 25
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "paia"
};

export const stats = {
  "id": "paia",
  "characterId": 2022,
  "name": "Paia",
  "rarity": "SR",
  "element": "火",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2707,
      "lv90": 13537
    },
    "atk": {
      "base": 279,
      "lv90": 1396
    },
    "matk": {
      "base": 167,
      "lv90": 837
    },
    "def": {
      "base": 65,
      "lv90": 130
    },
    "mdef": {
      "base": 25,
      "lv90": 50
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
      "base": 108,
      "lv90": 173
    },
    "magicCrit": {
      "base": 65,
      "lv90": 104
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
      "base": 87,
      "lv90": 87
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
      "ATK": 84,
      "Block": 14,
      "MP Charge": 8
    },
    "lb2": {
      "HP": 934,
      "ATK": 96,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 1097,
      "ATK": 113,
      "Block": 18,
      "MP Charge": 11
    },
    "lb4": {
      "HP": 1218,
      "ATK": 126,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 2139,
      "ATK": 221,
      "DEF": 20,
      "MDEF": 4,
      "Heal Pwr": 27
    },
    "total": {
      "HP": 6200,
      "ATK": 640,
      "Block": 68,
      "MP Charge": 19,
      "Accuracy": 30,
      "DEF": 20,
      "MDEF": 4,
      "Heal Pwr": 27
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Cost Down": 2
    },
    "gp2": {
      "HP": 200,
      "MP Cost Down": 2
    },
    "gp3": {
      "HP": 200,
      "MP Cost Down": 3
    },
    "gp4": {
      "HP": 500,
      "MP Cost Down": 3
    },
    "gp5": {
      "HP": 500,
      "MP Cost Down": 4
    },
    "gp6": {
      "HP": 800,
      "MP Cost Down": 4
    },
    "gp7": {
      "HP": 800,
      "MP Cost Down": 5
    },
    "gp8": {
      "HP": 1100,
      "MP Cost Down": 5
    },
    "gp9": {
      "HP": 1100,
      "MP Cost Down": 6
    },
    "gp10": {
      "HP": 1400,
      "MP Cost Down": 6
    },
    "total": {
      "HP": 1400,
      "MP Cost Down": 6
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 285,
      "ATK": 29,
      "Phys Crit": 2,
      "Accuracy": 9
    },
    "g2": {
      "HP": 342,
      "ATK": 35,
      "Phys Crit": 3,
      "Block": 14
    },
    "g3": {
      "HP": 399,
      "ATK": 41,
      "Phys Crit": 3,
      "Accuracy": 12
    },
    "g4": {
      "HP": 456,
      "ATK": 47,
      "Phys Crit": 4,
      "Block": 19
    },
    "g5": {
      "HP": 513,
      "ATK": 53,
      "Phys Crit": 4,
      "MP Charge": 7
    },
    "g6": {
      "HP": 570,
      "ATK": 59,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 627,
      "ATK": 65,
      "Phys Crit": 5,
      "Block": 26
    },
    "g8": {
      "HP": 684,
      "ATK": 71,
      "Phys Crit": 5,
      "Accuracy": 21
    },
    "g9": {
      "HP": 741,
      "ATK": 76,
      "Phys Crit": 6,
      "Block": 31
    },
    "g10": {
      "HP": 798,
      "ATK": 82,
      "Phys Crit": 6,
      "MP Charge": 11
    },
    "total": {
      "HP": 798,
      "ATK": 82,
      "Phys Crit": 6,
      "MP Charge": 11
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "DEF": 3
    },
    {
      "grade": 2,
      "MP Cost Down": 1
    },
    {
      "grade": 3,
      "DEF": 4
    },
    {
      "grade": 4,
      "MP Cost Down": 1
    },
    {
      "grade": 5,
      "DEF": 6
    },
    {
      "grade": 6,
      "MP Cost Down": 1
    },
    {
      "grade": 7,
      "DEF": 7
    },
    {
      "grade": 8,
      "MP Cost Down": 1
    },
    {
      "grade": 9,
      "DEF": 8
    },
    {
      "grade": 10,
      "MP Cost Down": 1
    },
    {
      "grade": 11,
      "DEF": 9
    }
  ]
};;;;;;;;
