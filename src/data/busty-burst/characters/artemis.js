// Character data: artemis
// Merged from info/skills/stats files

export const info = {
  "slug": "artemis",
  "name": "Artemis",
  "displayName": "Artemis",
  "baseName": "Artemis",
  "title": null,
  "rarity": "SR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 480,
  "weaponType": "Shoot/Ranged",
  "skillTypes": [
    "Debuff",
    "Sure-hit",
    "Guaranteed Crit"
  ],
  "image": "Artemis",
  "introduction": "Back Row、Physical、Attacker",
  "profile": {
    "height": "160cm",
    "bust": "103cm (J Cup)",
    "waist": "59cm",
    "hips": "95cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": "Q-Gaku"
    },
    "voice": {
      "japanese": "\u7be0\u539f\u3086\u307f",
      "romanized": "Shinohara Yumi"
    }
  },
  "obtain": {
    "type": "permanent",
    "source": "Standard Banner"
  }
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Iokaela",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and guaranteed to hit and guaranteed to crit",
      "descriptionLv1": "Deals physical damage to the nearest enemy and guaranteed to hit and guaranteed to crit",
      "descriptionLv90": "Deals physical damage to the nearest enemy and guaranteed to hit and guaranteed to crit",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "170% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+15",
      "lvl1": "170% + 100",
      "lvl90": "170% + 1435",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Aporosa",
      "icon": "skill001/skill0017",
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
      "name": "The Maiden Goddess’s Arrow that Purges Impurity",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy with guaranteed hit and guaranteed crit, and when activating the Ultimate, applies Wind Type Defense DOWN(LV 1) for 8 seconds",
      "effect": "600% + 785",
      "buffEffects": [
        {
          "name": "Wind Type Defense - Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Iokaela",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and guaranteed to hit and guaranteed to crit",
      "effect": "170% + 100",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "Aporosa",
      "icon": "skill001/skill0017",
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
      "name": "The Maiden Goddess’s Arrow that Purges Impurity",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy with guaranteed hit and guaranteed crit, and when activating the Ultimate, applies Wind Type Defense DOWN(LV 1) for 8 seconds",
      "effect": "600% + 785",
      "buffEffects": [
        {
          "name": "Wind Type Defense - Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "The Maiden Goddess’s Arrow that Purges Impurity",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy with guaranteed hit and guaranteed crit, and when activating the Ultimate, applies Wind Type Defense DOWN(LV 2) for 8 seconds",
      "effect": "660% + 912",
      "buffEffects": [
        {
          "name": "Wind Type Defense - Ultimate Lv2",
          "value": -20,
          "type": "percent",
          "duration": 8
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
      "name": "Action Speed +, Skill Damage +",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+10), Skill Damage + (+10%)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        },
        {
          "name": "Skill Damage +",
          "value": 10,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Artemis",
  "id": 2029,
  "rarity": "SR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Sure-hit",
    "Guaranteed Crit"
  ],
  "baseStats": {
    "HP": 1566,
    "ATK": 293,
    "MATK": 176,
    "DEF": 126,
    "MDEF": 50
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "artemis"
};

export const stats = {
  "id": "artemis",
  "characterId": 2029,
  "name": "Artemis",
  "rarity": "SR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Sure-hit",
    "Guaranteed Crit"
  ],
  "baseStats": {
    "hp": {
      "base": 1566,
      "lv90": 7830
    },
    "atk": {
      "base": 293,
      "lv90": 1466
    },
    "matk": {
      "base": 176,
      "lv90": 880
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
      "base": 108,
      "lv90": 173
    },
    "magicCrit": {
      "base": 65,
      "lv90": 104
    },
    "hpRegen": {
      "base": 78,
      "lv90": 273
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
      "ATK": 70,
      "Block": 17,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 540,
      "ATK": 80,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 634,
      "ATK": 94,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 705,
      "ATK": 104,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1237,
      "ATK": 234,
      "DEF": 34,
      "MDEF": 9,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3586,
      "ATK": 582,
      "Block": 83,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 34,
      "MDEF": 9,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 200
    },
    "gp2": {
      "HP": 200,
      "ATK": 30
    },
    "gp3": {
      "HP": 500,
      "ATK": 30
    },
    "gp4": {
      "HP": 500,
      "ATK": 90
    },
    "gp5": {
      "HP": 800,
      "ATK": 90
    },
    "gp6": {
      "HP": 800,
      "ATK": 130
    },
    "gp7": {
      "HP": 1100,
      "ATK": 130
    },
    "gp8": {
      "HP": 1100,
      "ATK": 170
    },
    "gp9": {
      "HP": 1400,
      "ATK": 170
    },
    "gp10": {
      "HP": 1400,
      "ATK": 210
    },
    "total": {
      "HP": 1400,
      "ATK": 210
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 165,
      "ATK": 24,
      "Phys Crit": 8,
      "Accuracy": 9
    },
    "g2": {
      "HP": 198,
      "ATK": 29,
      "Phys Crit": 10,
      "Block": 17
    },
    "g3": {
      "HP": 231,
      "ATK": 34,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 264,
      "ATK": 39,
      "Phys Crit": 13,
      "Block": 23
    },
    "g5": {
      "HP": 297,
      "ATK": 44,
      "Phys Crit": 15,
      "MP Charge": 5
    },
    "g6": {
      "HP": 330,
      "ATK": 49,
      "Phys Crit": 17,
      "Accuracy": 18
    },
    "g7": {
      "HP": 363,
      "ATK": 54,
      "Phys Crit": 19,
      "Block": 32
    },
    "g8": {
      "HP": 396,
      "ATK": 59,
      "Phys Crit": 20,
      "Accuracy": 21
    },
    "g9": {
      "HP": 429,
      "ATK": 63,
      "Phys Crit": 22,
      "Block": 38
    },
    "g10": {
      "HP": 462,
      "ATK": 68,
      "Phys Crit": 24,
      "MP Charge": 8
    },
    "total": {
      "HP": 462,
      "ATK": 68,
      "Phys Crit": 24,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Accuracy": 5
    },
    {
      "grade": 2,
      "ATK": 28
    },
    {
      "grade": 3,
      "Accuracy": 6
    },
    {
      "grade": 4,
      "ATK": 38
    },
    {
      "grade": 5,
      "Accuracy": 8
    },
    {
      "grade": 6,
      "ATK": 47
    },
    {
      "grade": 7,
      "Accuracy": 10
    },
    {
      "grade": 8,
      "ATK": 57
    },
    {
      "grade": 9,
      "Accuracy": 12
    },
    {
      "grade": 10,
      "ATK": 66
    },
    {
      "grade": 11,
      "Accuracy": 13
    }
  ]
};;;;;;;;
