// Character data: ishtovia
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "ishtovia",
  "name": "Ishtovia",
  "displayName": "Ishtovia",
  "baseName": "Ishtovia",
  "title": null,
  "rarity": "SR",
  "element": "Light",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 480,
  "weaponType": "Throw",
  "skillTypes": [
    "Heal",
    "Debuff",
    "Disrupt"
  ],
  "image": "Ishtovia",
  "introduction": "Back Row、Magical、Attacker",
  "profile": {
    "height": "165cm",
    "bust": "99cm (I Cup)",
    "waist": "63cm",
    "hips": "96cm"
  },
  "credits": {
    "illustration": {
      "japanese": "深泥正",
      "romanized": ""
    },
    "voice": {
      "japanese": "風花ましろ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2036
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Receive the punishment of the gods ",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the enemy with the lowest HP, guaranteed to hit and guaranteed to crit",
      "descriptionLv1": "Deals magic damage to the enemy with the lowest HP, guaranteed to hit and guaranteed to crit",
      "descriptionLv90": "Deals magic damage to the enemy with the lowest HP, guaranteed to hit and guaranteed to crit",
      "target": "Lowest HP Enemy",
      "castTime": 1.38,
      "damageScaling": "170% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+13",
      "lvl1": "170% + 100",
      "lvl90": "170% + 1257",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Divine Love",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to the ally with the lowest HP",
      "descriptionLv1": "Restores HP by to the ally with the lowest HP",
      "descriptionLv90": "Restores HP by to the ally with the lowest HP",
      "target": "Lowest HP Ally",
      "castTime": 1.38,
      "damageScaling": "2000% ATK",
      "baseDamage": "+600",
      "levelGrowth": "+35",
      "lvl1": "2000% + 600",
      "lvl90": "2000% + 3715",
      "effects": [],
      "buffEffects": []
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Radiance of the Gods",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the enemy with the lowest HP and inflicts Magic Defense DOWN(LV 1) for 10 seconds and inflicts Silence for 6 seconds",
      "effect": "810% + 783",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 2,
      "name": "Radiance of the Gods",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the enemy with the lowest HP and inflicts Magic Defense DOWN(LV 2) for 10 seconds and inflicts Silence for 6 seconds",
      "effect": "972% + 920",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv2",
          "value": -20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Radiance of the Gods",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to the enemy with the lowest HP and inflicts Magic Defense DOWN(LV 3) for 10 seconds and inflicts Silence for 6 seconds",
      "effect": "1090% + 1022",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv3",
          "value": -24,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 4,
      "name": "Radiance of the Gods",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to the enemy with the lowest HP and inflicts Magic Defense DOWN(LV 4) for 10 seconds and inflicts Silence for 6 seconds",
      "effect": "1175% + 1115",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv4",
          "value": -27,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 5,
      "name": "Radiance of the Gods",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to the enemy with the lowest HP and inflicts Magic Defense DOWN(LV 5) for 10 seconds and inflicts Silence for 6 seconds",
      "effect": "1255% + 1209",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv5",
          "value": -30,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "MP Recovery+",
      "icon": "skill001/skill1001",
      "effect": "MP Recovery+ (+21%)",
      "effectValues": [
        {
          "name": "MP Recovery+",
          "value": 21,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Magic Attack +, Magic Defense+",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+259), Magic Defense+ (+70)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 259,
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
  "name": "Ishtovia",
  "id": 2036,
  "rarity": "SR",
  "element": "Light",
  "role": "Attacker",
  "tags": [
    "Heal",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2062,
    "ATK": 188,
    "MATK": 314,
    "DEF": 25,
    "MDEF": 65
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Basic → Skill3",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "ishtovia"
};

export const stats = {
  "id": "ishtovia",
  "characterId": 2036,
  "name": "Ishtovia",
  "rarity": "SR",
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
      "base": 2062,
      "lv90": 10313
    },
    "atk": {
      "base": 188,
      "lv90": 941
    },
    "matk": {
      "base": 314,
      "lv90": 1570
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
      "base": 22,
      "lv90": 35
    },
    "magicCrit": {
      "base": 37,
      "lv90": 59
    },
    "hpRegen": {
      "base": 103,
      "lv90": 360
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
      "HP": 619,
      "MATK": 94,
      "Block": 14,
      "MP Charge": 8
    },
    "lb2": {
      "HP": 712,
      "MATK": 108,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 835,
      "MATK": 127,
      "Block": 18,
      "MP Charge": 11
    },
    "lb4": {
      "HP": 928,
      "MATK": 141,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1630,
      "MATK": 248,
      "DEF": 5,
      "MDEF": 18,
      "Heal Pwr": 27
    },
    "total": {
      "HP": 4724,
      "MATK": 718,
      "Block": 68,
      "MP Charge": 19,
      "Accuracy": 30,
      "DEF": 5,
      "MDEF": 18,
      "Heal Pwr": 27
    }
  },
  "gpAbility": {
    "gp1": {
      "Heal Pwr": 10
    },
    "gp2": {
      "MATK": 30,
      "Heal Pwr": 10
    },
    "gp3": {
      "MATK": 30,
      "Heal Pwr": 25
    },
    "gp4": {
      "MATK": 90,
      "Heal Pwr": 25
    },
    "gp5": {
      "MATK": 90,
      "Heal Pwr": 40
    },
    "gp6": {
      "MATK": 130,
      "Heal Pwr": 40
    },
    "gp7": {
      "MATK": 130,
      "Heal Pwr": 55
    },
    "gp8": {
      "MATK": 170,
      "Heal Pwr": 55
    },
    "gp9": {
      "MATK": 170,
      "Heal Pwr": 70
    },
    "gp10": {
      "MATK": 210,
      "Heal Pwr": 70
    },
    "total": {
      "MATK": 210,
      "Heal Pwr": 70
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 217,
      "MATK": 33,
      "MDEF": 3,
      "Magic Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 261,
      "MATK": 40,
      "MDEF": 4,
      "Magic Crit": 1,
      "Block": 14
    },
    "g3": {
      "HP": 304,
      "MATK": 46,
      "MDEF": 4,
      "Magic Crit": 1,
      "Accuracy": 12
    },
    "g4": {
      "HP": 347,
      "MATK": 53,
      "MDEF": 5,
      "Magic Crit": 1,
      "Block": 19
    },
    "g5": {
      "HP": 391,
      "MATK": 59,
      "MDEF": 5,
      "Magic Crit": 1,
      "MP Charge": 7
    },
    "g6": {
      "HP": 434,
      "MATK": 66,
      "MDEF": 6,
      "Magic Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 478,
      "MATK": 73,
      "MDEF": 6,
      "Magic Crit": 2,
      "Block": 26
    },
    "g8": {
      "HP": 521,
      "MATK": 79,
      "MDEF": 7,
      "Magic Crit": 2,
      "Accuracy": 21
    },
    "g9": {
      "HP": 565,
      "MATK": 86,
      "MDEF": 8,
      "Magic Crit": 2,
      "Block": 31
    },
    "g10": {
      "HP": 608,
      "MATK": 93,
      "MDEF": 8,
      "Magic Crit": 2,
      "MP Charge": 11
    },
    "total": {
      "HP": 608,
      "MATK": 93,
      "MDEF": 8,
      "Magic Crit": 2,
      "MP Charge": 11
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "HP Regen": 9
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "HP Regen": 12
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "HP Regen": 15
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "HP Regen": 19
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "HP Regen": 22
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;;;;;;
