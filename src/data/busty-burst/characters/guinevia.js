// Character data: guinevia
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "guinevia",
  "name": "Guinevia",
  "displayName": "Guinevia",
  "baseName": "Guinevia",
  "title": null,
  "rarity": "SR",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 240,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Guinevia",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "170cm",
    "bust": "105cm (K Cup)",
    "waist": "63cm",
    "hips": "98cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "南十字いっせい",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2039
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Anger",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy",
      "descriptionLv1": "Deals physical damage to the nearest enemy",
      "descriptionLv90": "Deals physical damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "240% ATK",
      "baseDamage": "+125",
      "levelGrowth": "+25",
      "lvl1": "240% + 125",
      "lvl90": "240% + 2350",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Silence",
      "icon": "skill001/skill0013",
      "description": "Applies Physical Attack +35 UP to self for 10 seconds and Action Speed UP for 10 seconds",
      "descriptionLv1": "Applies Physical Attack +35 UP to self for 10 seconds and Action Speed UP for 10 seconds",
      "descriptionLv90": "Applies Physical Attack +665 UP to self for 10 seconds and Action Speed UP for 10 seconds",
      "target": "Self",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv4",
        "Action Speed + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 7.0
        },
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Raise a Gale of Madness",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Action Speed DOWN(LV 1) for 10 seconds",
      "effect": "800% + 857",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Anger",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy",
      "effect": "240% + 125",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "Silence",
      "icon": "skill001/skill0013",
      "description": "Applies Physical Attack +35 UP to self for 10 seconds and Action Speed UP for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Raise a Gale of Madness",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Action Speed DOWN(LV 1) for 10 seconds",
      "effect": "800% + 857",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Raise a Gale of Madness",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Action Speed DOWN(LV 2) for 10 seconds",
      "effect": "960% + 842",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
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
      "name": "Action Speed +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+10), Physical Critical Damage+ (+59%)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 59,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Guinevia",
  "id": 2039,
  "rarity": "SR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1566,
    "ATK": 314,
    "MATK": 188,
    "DEF": 126,
    "MDEF": 50
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "guinevia"
};

export const stats = {
  "id": "guinevia",
  "characterId": 2039,
  "name": "Guinevia",
  "rarity": "SR",
  "element": "魔",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1566,
      "lv90": 7830
    },
    "atk": {
      "base": 314,
      "lv90": 1570
    },
    "matk": {
      "base": 188,
      "lv90": 941
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
      "base": 55,
      "lv90": 165
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
      "base": 78,
      "lv90": 273
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
      "base": 58,
      "lv90": 58
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
      "HP": 470,
      "ATK": 94,
      "Block": 17,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 540,
      "ATK": 108,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 634,
      "ATK": 127,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 705,
      "ATK": 141,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1148,
      "MATK": 247,
      "DEF": 31,
      "MDEF": 9,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3497,
      "ATK": 470,
      "Block": 83,
      "MP Charge": 12,
      "Accuracy": 30,
      "MATK": 247,
      "DEF": 31,
      "MDEF": 9,
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
      "ATK": 130,
      "Phys Crit": 50
    },
    "gp7": {
      "ATK": 130,
      "Phys Crit": 70
    },
    "gp8": {
      "ATK": 170,
      "Phys Crit": 70
    },
    "gp9": {
      "ATK": 170,
      "Phys Crit": 90
    },
    "gp10": {
      "ATK": 210,
      "Phys Crit": 90
    },
    "total": {
      "ATK": 210,
      "Phys Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 165,
      "ATK": 33,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 198,
      "ATK": 40,
      "Phys Crit": 1,
      "Block": 17
    },
    "g3": {
      "HP": 231,
      "ATK": 46,
      "Phys Crit": 1,
      "Accuracy": 12
    },
    "g4": {
      "HP": 264,
      "ATK": 53,
      "Phys Crit": 1,
      "Block": 23
    },
    "g5": {
      "HP": 297,
      "ATK": 59,
      "Phys Crit": 1,
      "MP Charge": 5
    },
    "g6": {
      "HP": 330,
      "ATK": 66,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 363,
      "ATK": 73,
      "Phys Crit": 2,
      "Block": 32
    },
    "g8": {
      "HP": 396,
      "ATK": 79,
      "Phys Crit": 2,
      "Accuracy": 21
    },
    "g9": {
      "HP": 429,
      "ATK": 86,
      "Phys Crit": 2,
      "Block": 38
    },
    "g10": {
      "HP": 462,
      "ATK": 93,
      "Phys Crit": 2,
      "MP Charge": 8
    },
    "total": {
      "HP": 462,
      "ATK": 93,
      "Phys Crit": 2,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Phys Crit": 1
    },
    {
      "grade": 2,
      "ATK": 28
    },
    {
      "grade": 3,
      "Phys Crit": 2
    },
    {
      "grade": 4,
      "ATK": 38
    },
    {
      "grade": 5,
      "Phys Crit": 2
    },
    {
      "grade": 6,
      "ATK": 47
    },
    {
      "grade": 7,
      "Phys Crit": 3
    },
    {
      "grade": 8,
      "ATK": 57
    },
    {
      "grade": 9,
      "Phys Crit": 3
    },
    {
      "grade": 10,
      "ATK": 66
    },
    {
      "grade": 11,
      "Phys Crit": 4
    }
  ]
};;;;;;;;
