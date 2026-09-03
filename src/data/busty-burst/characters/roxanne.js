// Character data: roxanne
// Auto-generated from game data

export const info = {
  "slug": "roxanne",
  "name": "Roxanne",
  "displayName": "Roxanne",
  "baseName": "Roxanne",
  "title": null,
  "rarity": "R",
  "element": "Mind",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 400,
  "weaponType": "Strike",
  "skillTypes": [
    "Heal",
    "Buff",
    "Disrupt"
  ],
  "image": "Roxanne",
  "introduction": "Middle RowPhysicalSupport",
  "profile": {
    "height": "163cm",
    "bust": "105cm (K Cup)",
    "waist": "66cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "和葉",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2003
};














































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Skillet Smash",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "233% ATK",
      "baseDamage": "+70",
      "levelGrowth": "+16",
      "lvl1": "233% + 70",
      "lvl90": null,
      "effects": [
        "Stun"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ],
      "duration": 2
    },
    {
      "slot": 3,
      "name": "Come Drink Some Milk",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to the ally with the lowest HP",
      "descriptionLv1": "Restores HP by to the ally with the lowest HP",
      "descriptionLv90": "Restores HP by to the ally with the lowest HP",
      "target": "Lowest HP Ally",
      "castTime": 1.38,
      "damageScaling": "3100% ATK",
      "baseDamage": "+652",
      "levelGrowth": "+50",
      "lvl1": "3100% + 652",
      "lvl90": "3100% + 5102",
      "effects": [],
      "buffEffects": []
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Roxanne’s Special Thick Soup",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to the 3 nearest allies and inflicts Physical Attack UP(LV 1) for 10 seconds",
      "effect": "1800% + 1712",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 15,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Roxanne’s Special Thick Soup",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by to the 3 nearest allies and inflicts Physical Attack UP(LV 2) for 10 seconds",
      "effect": "2150% + 1833",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv2",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Roxanne’s Special Thick Soup",
      "icon": "skill001/skill0022_3",
      "description": "Restores HP by to the 3 nearest allies and inflicts Physical Attack UP(LV 3) for 10 seconds",
      "effect": "2400% + 1945",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv3",
          "value": 24,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Roxanne’s Special Thick Soup",
      "icon": "skill001/skill0022_4",
      "description": "Restores HP by to the 3 nearest allies and inflicts Physical Attack UP(LV 4) for 10 seconds",
      "effect": "2600% + 2056",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv4",
          "value": 27,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Roxanne’s Special Thick Soup",
      "icon": "skill001/skill0022_5",
      "description": "Restores HP by to the 3 nearest allies and inflicts Physical Attack UP(LV 5) for 10 seconds",
      "effect": "2750% + 2134",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv5",
          "value": 30,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "description": "Gain Physical Critical Damage UP (Small)",
      "effect": "Physical Critical Damage+ (+59%)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 59,
          "type": "percent",
          "gameText": "Physical Critical Damage UP (Small)"
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
  "name": "Roxanne",
  "id": 2003,
  "rarity": "R",
  "element": "Mind",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2578,
    "ATK": 203,
    "MATK": 122,
    "DEF": 56,
    "MDEF": 22
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Basic → Skill3",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "roxanne"
};

export const stats = {
  "id": "roxanne",
  "characterId": 2003,
  "name": "Roxanne",
  "rarity": "R",
  "element": "想",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2578,
      "lv90": 12892
    },
    "atk": {
      "base": 203,
      "lv90": 1017
    },
    "matk": {
      "base": 122,
      "lv90": 610
    },
    "def": {
      "base": 56,
      "lv90": 112
    },
    "mdef": {
      "base": 22,
      "lv90": 44
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
      "base": 278,
      "lv90": 445
    },
    "magicCrit": {
      "base": 167,
      "lv90": 267
    },
    "hpRegen": {
      "base": 128,
      "lv90": 450
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
      "base": 73,
      "lv90": 73
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
      "HP": 774,
      "ATK": 61,
      "Block": 14,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 890,
      "ATK": 70,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 1044,
      "ATK": 82,
      "Block": 18,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 1160,
      "ATK": 92,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1882,
      "ATK": 164,
      "DEF": 17,
      "MDEF": 4,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 5750,
      "ATK": 469,
      "Block": 68,
      "MP Charge": 16,
      "Accuracy": 30,
      "DEF": 17,
      "MDEF": 4,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 150
    },
    "gp2": {
      "HP": 150,
      "Heal Pwr": 5
    },
    "gp3": {
      "HP": 350,
      "Heal Pwr": 5
    },
    "gp4": {
      "HP": 350,
      "Heal Pwr": 15
    },
    "gp5": {
      "HP": 550,
      "Heal Pwr": 15
    },
    "gp6": {
      "HP": 550,
      "Heal Pwr": 25
    },
    "gp7": {
      "HP": 750,
      "Heal Pwr": 25
    },
    "gp8": {
      "HP": 750,
      "Heal Pwr": 35
    },
    "gp9": {
      "HP": 950,
      "Heal Pwr": 35
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
      "HP": 271,
      "ATK": 21,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 326,
      "ATK": 26,
      "Phys Crit": 7,
      "Block": 14
    },
    "g3": {
      "HP": 380,
      "ATK": 30,
      "Phys Crit": 8,
      "Accuracy": 12
    },
    "g4": {
      "HP": 434,
      "ATK": 34,
      "Phys Crit": 9,
      "Block": 19
    },
    "g5": {
      "HP": 489,
      "ATK": 39,
      "Phys Crit": 11,
      "MP Charge": 6
    },
    "g6": {
      "HP": 543,
      "ATK": 43,
      "Phys Crit": 12,
      "Accuracy": 18
    },
    "g7": {
      "HP": 597,
      "ATK": 47,
      "Phys Crit": 13,
      "Block": 26
    },
    "g8": {
      "HP": 651,
      "ATK": 51,
      "Phys Crit": 14,
      "Accuracy": 21
    },
    "g9": {
      "HP": 706,
      "ATK": 56,
      "Phys Crit": 15,
      "Block": 31
    },
    "g10": {
      "HP": 760,
      "ATK": 60,
      "Phys Crit": 16,
      "MP Charge": 10
    },
    "total": {
      "HP": 760,
      "ATK": 60,
      "Phys Crit": 16,
      "MP Charge": 10
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Heal Pwr": 4
    },
    {
      "grade": 2,
      "Block": 4
    },
    {
      "grade": 3,
      "Heal Pwr": 6
    },
    {
      "grade": 4,
      "Block": 5
    },
    {
      "grade": 5,
      "Heal Pwr": 8
    },
    {
      "grade": 6,
      "Block": 7
    },
    {
      "grade": 7,
      "Heal Pwr": 9
    },
    {
      "grade": 8,
      "Block": 8
    },
    {
      "grade": 9,
      "Heal Pwr": 11
    },
    {
      "grade": 10,
      "Block": 9
    },
    {
      "grade": 11,
      "Heal Pwr": 13
    }
  ]
};;;
