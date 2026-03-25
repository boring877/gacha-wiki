// Character data: ツキナ
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "ツキナ",
  "name": "ツキナ",
  "displayName": "ツキナ",
  "baseName": "ツキナ",
  "title": null,
  "rarity": "SR",
  "element": "Holy",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slow",
  "range": 360,
  "weaponType": "Strike",
  "skillTypes": [
    "回復、強化"
  ],
  "image": "ツキナ",
  "introduction": null,
  "profile": {
    "height": "159cm",
    "bust": "105cm (M Cup)",
    "waist": "61cm",
    "hips": "87cm"
  },
  "credits": {
    "illustration": {
      "japanese": "恋河ミノル",
      "romanized": ""
    },
    "voice": {
      "japanese": "しんかいゆらり",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2231
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Do your best!",
      "icon": "skill001/skill0019",
      "description": "frontmost allies310 Action Speed 14%UP and Hit-Based Damage UP(30%+350, 3 hit(s)) for 10 seconds",
      "descriptionLv1": "frontmost allies310 Action Speed 14%UP and Hit-Based Damage UP(30%+350, 3 hit(s)) for 10 seconds",
      "descriptionLv90": "frontmost allies310 Action Speed 14%UP and Hit-Based Damage UP(30%+350, 3 hit(s)) for 10 seconds",
      "target": "Frontmost Ally",
      "castTime": 1.25,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Action Speed + Lv3",
        "Hit-Based Damage + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Hit-Based Damage + Lv3",
          "value": 30,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 350.0
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "I'll heal you!",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to the ally with the lowest HP and inflicts Debuff Resistance 30%UP for 5 seconds",
      "descriptionLv1": "Restores HP by to the ally with the lowest HP and inflicts Debuff Resistance 30%UP for 5 seconds",
      "descriptionLv90": "Restores HP by to the ally with the lowest HP and inflicts Debuff Resistance 30%UP for 5 seconds",
      "target": "Lowest HP Ally",
      "castTime": 1.3,
      "damageScaling": "3000% ATK",
      "baseDamage": "+1000",
      "levelGrowth": "+60",
      "lvl1": "3000% + 1000",
      "lvl90": null,
      "effects": [
        "Debuff Resistance Lv2"
      ],
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 0,
          "type": "percent",
          "duration": 5
        }
      ],
      "duration": 5
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "<ruby=></ruby>",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to all allies and inflicts Hit-Based Magic Healing Shield (LV 1) for 10 seconds and Hit-Based Physical Healing Shield (LV 1) for 10 seconds",
      "effect": "2000% + 1000",
      "buffEffects": [
        {
          "name": "Hit-Based Magic Healing Shield Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Hit-Based Physical Healing Shield Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "<ruby=></ruby>",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by to all allies and inflicts Hit-Based Magic Healing Shield (LV 2) for 10 seconds and Hit-Based Physical Healing Shield (LV 2) for 10 seconds",
      "effect": "2300% + 1150",
      "buffEffects": [
        {
          "name": "Hit-Based Magic Healing Shield Ultimate Lv2",
          "value": 25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Hit-Based Physical Healing Shield Ultimate Lv2",
          "value": 25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "<ruby=></ruby>",
      "icon": "skill001/skill0022_3",
      "description": "Restores HP by to all allies and inflicts Hit-Based Magic Healing Shield (LV 3) for 10 seconds and Hit-Based Physical Healing Shield (LV 3) for 10 seconds",
      "effect": "2500% + 1300",
      "buffEffects": [
        {
          "name": "Hit-Based Magic Healing Shield Ultimate Lv3",
          "value": 30,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Hit-Based Physical Healing Shield Ultimate Lv3",
          "value": 30,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "<ruby=></ruby>",
      "icon": "skill001/skill0022_4",
      "description": "Restores HP by to all allies and inflicts Hit-Based Magic Healing Shield (LV 4) for 10 seconds and Hit-Based Physical Healing Shield (LV 4) for 10 seconds",
      "effect": "2700% + 1400",
      "buffEffects": [
        {
          "name": "Hit-Based Magic Healing Shield Ultimate Lv4",
          "value": 35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Hit-Based Physical Healing Shield Ultimate Lv4",
          "value": 35,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "<ruby=></ruby>",
      "icon": "skill001/skill0022_5",
      "description": "Restores HP by to all allies and inflicts Hit-Based Magic Healing Shield (LV 5) for 10 seconds and Hit-Based Physical Healing Shield (LV 5) for 10 seconds",
      "effect": "2800% + 1500",
      "buffEffects": [
        {
          "name": "Hit-Based Magic Healing Shield Ultimate Lv5",
          "value": 40,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Hit-Based Physical Healing Shield Ultimate Lv5",
          "value": 40,
          "type": "percent",
          "duration": 10
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
  "name": "ツキナ",
  "id": 2231,
  "rarity": "SR",
  "element": "Holy",
  "role": "Support",
  "tags": [
    "回復、強化"
  ],
  "baseStats": {
    "HP": 2001,
    "ATK": 220,
    "MATK": 132,
    "DEF": 312,
    "MDEF": 168
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Skill3 → Basic",
    "loop": "Basic → Basic → Basic → Basic → Skill2 → Basic → Skill3 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.2"
  },
  "slug": "ツキナ"
};

export const stats = {
  "id": "ツキナ",
  "characterId": 2231,
  "name": "ツキナ",
  "rarity": "SR",
  "element": "聖",
  "weapon": "",
  "role": "Support",
  "tags": [
    "回復、強化"
  ],
  "baseStats": {
    "hp": {
      "base": 2001,
      "lv90": 10005
    },
    "atk": {
      "base": 220,
      "lv90": 1103
    },
    "matk": {
      "base": 132,
      "lv90": 662
    },
    "def": {
      "base": 312,
      "lv90": 429
    },
    "mdef": {
      "base": 168,
      "lv90": 343
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
      "base": 399,
      "lv90": 638
    },
    "magicCrit": {
      "base": 239,
      "lv90": 382
    },
    "hpRegen": {
      "base": 100,
      "lv90": 350
    },
    "mpRegen": {
      "base": 56,
      "lv90": 225
    },
    "healPwr": {
      "base": 100,
      "lv90": 250
    },
    "mpCharge": {
      "base": 80,
      "lv90": 80
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
      "HP": 600,
      "ATK": 66,
      "Block": 14,
      "MP Charge": 8
    },
    "lb2": {
      "HP": 690,
      "ATK": 76,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 810,
      "ATK": 89,
      "Block": 18,
      "MP Charge": 10
    },
    "lb4": {
      "HP": 901,
      "ATK": 99,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1468,
      "ATK": 162,
      "DEF": 54,
      "MDEF": 32,
      "Heal Pwr": 16
    },
    "total": {
      "HP": 4469,
      "ATK": 492,
      "Block": 68,
      "MP Charge": 18,
      "Accuracy": 30,
      "DEF": 54,
      "MDEF": 32,
      "Heal Pwr": 16
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Cost Down": 2
    },
    "gp2": {
      "Heal Pwr": 10,
      "MP Cost Down": 2
    },
    "gp3": {
      "Heal Pwr": 10,
      "MP Cost Down": 3
    },
    "gp4": {
      "Heal Pwr": 25,
      "MP Cost Down": 3
    },
    "gp5": {
      "Heal Pwr": 25,
      "MP Cost Down": 4
    },
    "gp6": {
      "Heal Pwr": 40,
      "MP Cost Down": 4
    },
    "gp7": {
      "Heal Pwr": 40,
      "MP Cost Down": 5
    },
    "gp8": {
      "Heal Pwr": 55,
      "MP Cost Down": 5
    },
    "gp9": {
      "Heal Pwr": 55,
      "MP Cost Down": 6
    },
    "gp10": {
      "Heal Pwr": 70,
      "MP Cost Down": 6
    },
    "total": {
      "Heal Pwr": 70,
      "MP Cost Down": 6
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 211,
      "ATK": 23,
      "Phys Crit": 8,
      "Accuracy": 9
    },
    "g2": {
      "HP": 253,
      "ATK": 28,
      "Phys Crit": 10,
      "Block": 14
    },
    "g3": {
      "HP": 295,
      "ATK": 33,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 337,
      "ATK": 37,
      "Phys Crit": 13,
      "Block": 19
    },
    "g5": {
      "HP": 379,
      "ATK": 42,
      "Phys Crit": 15,
      "MP Charge": 6
    },
    "g6": {
      "HP": 421,
      "ATK": 46,
      "Phys Crit": 17,
      "Accuracy": 18
    },
    "g7": {
      "HP": 463,
      "ATK": 51,
      "Phys Crit": 19,
      "Block": 26
    },
    "g8": {
      "HP": 506,
      "ATK": 56,
      "Phys Crit": 20,
      "Accuracy": 21
    },
    "g9": {
      "HP": 548,
      "ATK": 60,
      "Phys Crit": 22,
      "Block": 31
    },
    "g10": {
      "HP": 590,
      "ATK": 65,
      "Phys Crit": 24,
      "MP Charge": 9
    },
    "total": {
      "HP": 590,
      "ATK": 65,
      "Phys Crit": 24,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Heal Pwr": 4
    },
    {
      "grade": 2,
      "MP Cost Down": 1
    },
    {
      "grade": 3,
      "Heal Pwr": 6
    },
    {
      "grade": 4,
      "MP Cost Down": 1
    },
    {
      "grade": 5,
      "Heal Pwr": 8
    },
    {
      "grade": 6,
      "MP Cost Down": 1
    },
    {
      "grade": 7,
      "Heal Pwr": 9
    },
    {
      "grade": 8,
      "MP Cost Down": 1
    },
    {
      "grade": 9,
      "Heal Pwr": 11
    },
    {
      "grade": 10,
      "MP Cost Down": 1
    },
    {
      "grade": 11,
      "Heal Pwr": 13
    }
  ]
};;;;;;;;
