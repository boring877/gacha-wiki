// Character data: luceria
// Auto-generated from game data

export const info = {
  "slug": "luceria",
  "name": "Luceria",
  "displayName": "Luceria",
  "baseName": "Luceria",
  "title": null,
  "rarity": "R",
  "element": "Mind",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 240,
  "weaponType": "Strike",
  "skillTypes": [
    "Heal",
    "Buff",
    "Cleanse"
  ],
  "image": "Luceria",
  "introduction": "Front RowPhysicalTank",
  "profile": {
    "height": "158cm",
    "bust": "110cm (M Cup)",
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
  "characterId": 2004
};














































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Heart Racing",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack 12%+25 UP to the 3 nearest allies for 8 seconds and Physical Defense 15%+100 UP for 8 seconds",
      "descriptionLv1": "Applies Physical Attack 12%+25 UP to the 3 nearest allies for 8 seconds and Physical Defense 15%+100 UP for 8 seconds",
      "descriptionLv90": "Applies Physical Attack 12%+295 UP to the 3 nearest allies for 8 seconds and Physical Defense 15%+190 UP for 8 seconds",
      "target": "Nearest Ally",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv2",
        "Physical Defense + Lv2"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv2",
          "value": 25,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 3.0
        },
        {
          "name": "Physical Defense + Lv2",
          "value": 100,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 1.0
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Mm, good idea!",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to the 3 nearest allies and removes debuffs",
      "descriptionLv1": "Restores HP by to the 3 nearest allies and removes debuffs",
      "descriptionLv90": "Restores HP by to the 3 nearest allies and removes debuffs",
      "target": "Nearest Ally",
      "castTime": 1.38,
      "damageScaling": "800% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+12",
      "lvl1": "800% + 500",
      "lvl90": null,
      "effects": [
        "Debuff Resistance LvMax"
      ],
      "buffEffects": [
        {
          "name": "Debuff Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ]
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Super Breast Smothering",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to the 3 nearest allies and inflicts BlockUP(LV 1) for 10 seconds",
      "effect": "1300% + 1123",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Super Breast Smothering",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by to the 3 nearest allies and inflicts BlockUP(LV 2) for 10 seconds",
      "effect": "1600% + 1239",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Super Breast Smothering",
      "icon": "skill001/skill0022_3",
      "description": "Restores HP by to the 3 nearest allies and inflicts BlockUP(LV 3) for 10 seconds",
      "effect": "1800% + 1376",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv3",
          "value": 16,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Super Breast Smothering",
      "icon": "skill001/skill0022_4",
      "description": "Restores HP by to the 3 nearest allies and inflicts BlockUP(LV 4) for 10 seconds",
      "effect": "2000% + 1555",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv4",
          "value": 18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Super Breast Smothering",
      "icon": "skill001/skill0022_5",
      "description": "Restores HP by to the 3 nearest allies and inflicts BlockUP(LV 5) for 10 seconds",
      "effect": "2100% + 1734",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv5",
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
      "name": "Max HP +",
      "icon": "skill001/skill1003",
      "description": "Gain Max HP UP (Small)",
      "effect": "Max HP + (+1447)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 1447,
          "type": "flat",
          "gameText": "Max HP UP (Small)"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Healing Amount +",
      "icon": "skill001/skill1004",
      "description": "Gain Healing Amount UP (Small)",
      "effect": "Healing Amount + (+10%)",
      "effectValues": [
        {
          "name": "Healing Amount +",
          "value": 10,
          "type": "percent",
          "gameText": "Healing Amount UP (Small)"
        }
      ]
    }
  ],
  "name": "Luceria",
  "id": 2004,
  "rarity": "R",
  "element": "Mind",
  "role": "Tank",
  "tags": [
    "Heal",
    "Buff",
    "Cleanse"
  ],
  "baseStats": {
    "HP": 2423,
    "ATK": 193,
    "MATK": 116,
    "DEF": 117,
    "MDEF": 46
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Skill3",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "luceria"
};

export const stats = {
  "id": "luceria",
  "characterId": 2004,
  "name": "Luceria",
  "rarity": "R",
  "element": "想",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Heal",
    "Buff",
    "Cleanse"
  ],
  "baseStats": {
    "hp": {
      "base": 2423,
      "lv90": 12117
    },
    "atk": {
      "base": 193,
      "lv90": 967
    },
    "matk": {
      "base": 116,
      "lv90": 580
    },
    "def": {
      "base": 117,
      "lv90": 234
    },
    "mdef": {
      "base": 46,
      "lv90": 92
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
      "base": 100,
      "lv90": 160
    },
    "magicCrit": {
      "base": 60,
      "lv90": 96
    },
    "hpRegen": {
      "base": 121,
      "lv90": 423
    },
    "mpRegen": {
      "base": 50,
      "lv90": 200
    },
    "healPwr": {
      "base": 100,
      "lv90": 250
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
      "HP": 727,
      "ATK": 58,
      "Block": 17,
      "MP Charge": 8
    },
    "lb2": {
      "HP": 836,
      "ATK": 67,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 982,
      "ATK": 78,
      "Block": 22,
      "MP Charge": 11
    },
    "lb4": {
      "HP": 1091,
      "ATK": 87,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1769,
      "ATK": 141,
      "DEF": 30,
      "MDEF": 9,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 5405,
      "ATK": 431,
      "Block": 83,
      "MP Charge": 19,
      "Accuracy": 30,
      "DEF": 30,
      "MDEF": 9,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "Heal Pwr": 5
    },
    "gp2": {
      "HP": 150,
      "Heal Pwr": 5
    },
    "gp3": {
      "HP": 150,
      "Heal Pwr": 15
    },
    "gp4": {
      "HP": 350,
      "Heal Pwr": 15
    },
    "gp5": {
      "HP": 350,
      "Heal Pwr": 25
    },
    "gp6": {
      "HP": 550,
      "Heal Pwr": 25
    },
    "gp7": {
      "HP": 550,
      "Heal Pwr": 35
    },
    "gp8": {
      "HP": 750,
      "Heal Pwr": 35
    },
    "gp9": {
      "HP": 750,
      "Heal Pwr": 45
    },
    "gp10": {
      "HP": 950,
      "Heal Pwr": 45
    },
    "total": {
      "HP": 950,
      "Heal Pwr": 45
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 255,
      "ATK": 20,
      "Phys Crit": 2,
      "Accuracy": 9
    },
    "g2": {
      "HP": 306,
      "ATK": 24,
      "Phys Crit": 3,
      "Block": 17
    },
    "g3": {
      "HP": 357,
      "ATK": 29,
      "Phys Crit": 3,
      "Accuracy": 12
    },
    "g4": {
      "HP": 408,
      "ATK": 33,
      "Phys Crit": 3,
      "Block": 23
    },
    "g5": {
      "HP": 459,
      "ATK": 37,
      "Phys Crit": 4,
      "MP Charge": 7
    },
    "g6": {
      "HP": 510,
      "ATK": 41,
      "Phys Crit": 4,
      "Accuracy": 18
    },
    "g7": {
      "HP": 561,
      "ATK": 45,
      "Phys Crit": 5,
      "Block": 32
    },
    "g8": {
      "HP": 612,
      "ATK": 49,
      "Phys Crit": 5,
      "Accuracy": 21
    },
    "g9": {
      "HP": 663,
      "ATK": 53,
      "Phys Crit": 5,
      "Block": 38
    },
    "g10": {
      "HP": 714,
      "ATK": 57,
      "Phys Crit": 6,
      "MP Charge": 11
    },
    "total": {
      "HP": 714,
      "ATK": 57,
      "Phys Crit": 6,
      "MP Charge": 11
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Heal Pwr": 3
    },
    {
      "grade": 2,
      "HP": 218
    },
    {
      "grade": 3,
      "Heal Pwr": 5
    },
    {
      "grade": 4,
      "HP": 291
    },
    {
      "grade": 5,
      "Heal Pwr": 6
    },
    {
      "grade": 6,
      "HP": 364
    },
    {
      "grade": 7,
      "Heal Pwr": 8
    },
    {
      "grade": 8,
      "HP": 436
    },
    {
      "grade": 9,
      "Heal Pwr": 9
    },
    {
      "grade": 10,
      "HP": 509,
      "Heal Pwr": 11
    },
    {
      "grade": 11,
      "Heal Pwr": 9
    }
  ]
};;;
