// Character data: luca
// Merged from info/skills/stats files

export const info = {
  "slug": "luca",
  "name": "Luca",
  "displayName": "Luca",
  "baseName": "Luca",
  "title": null,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slightly Fast",
  "range": 240,
  "weaponType": "Slash",
  "skillTypes": [
    "Buff",
    "Debuff"
  ],
  "image": "Luca",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "156cm",
    "bust": "94cm (H Cup)",
    "waist": "66cm",
    "hips": "84cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u306d\u3076\u305d\u304f",
      "romanized": "Nebusoku"
    },
    "voice": {
      "japanese": "\u5929\u77e5\u9065",
      "romanized": "Amachi Haruka"
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
      "name": "Goddess, grant me strength!",
      "icon": "skill001/skill0017",
      "description": "Applies Physical Attack +35 UP to self for 10 seconds and Physical Critical Damage 50 UP for 10 seconds",
      "descriptionLv1": "Applies Physical Attack +35 UP to self for 10 seconds and Physical Critical Damage 50 UP for 10 seconds",
      "descriptionLv90": "Applies Physical Attack +665 UP to self for 10 seconds and Physical Critical Damage 50 UP for 10 seconds",
      "target": "Self",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv4",
        "Physical Critical Damage+ Lv4"
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
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 7.0
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Do as you please, roa!",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Critical Damage-50 DOWN for 7 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Critical Damage-50 DOWN for 7 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Critical Damage-50 DOWN for 7 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "360% ATK",
      "baseDamage": "+160",
      "levelGrowth": "+25",
      "lvl1": "360% + 160",
      "lvl90": "360% + -196",
      "effects": [
        "Physical Critical Damage- LvMax"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage- LvMax",
          "value": -20,
          "type": "percent",
          "duration": 7,
          "levelGrowth": -4.0
        }
      ],
      "duration": 7
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Full-Power Strike!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Attack DOWN(LV 1) for 10 seconds and Accuracy DOWN(LV 1) for 10 seconds",
      "effect": "450% + 400",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Goddess, grant me strength!",
      "icon": "skill001/skill0017",
      "description": "Applies Physical Attack +35 UP to self for 10 seconds and Physical Critical Damage 50 UP for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Do as you please, roa!",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Critical Damage-50 DOWN for 7 seconds",
      "effect": "360% + 160",
      "buffEffects": [
        {
          "name": "Physical Critical Damage- LvMax",
          "value": -20,
          "type": "percent",
          "duration": 7
        }
      ]
    },
    {
      "rank": 4,
      "name": "Full-Power Strike!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Attack DOWN(LV 1) for 10 seconds and Accuracy DOWN(LV 1) for 10 seconds",
      "effect": "450% + 400",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Full-Power Strike!",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Attack DOWN(LV 2) for 10 seconds and Accuracy DOWN(LV 2) for 10 seconds",
      "effect": "540% + 470",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Accuracy - Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+259), Physical Critical Damage+ (+179%)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 179,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Action Speed +",
      "icon": "skill001/skill1005",
      "effect": "Skill Damage + (+20%), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Luca",
  "id": 2055,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 222,
    "MATK": 133,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic → Basic",
    "loop": "Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "luca"
};

export const stats = {
  "id": "luca",
  "characterId": 2055,
  "name": "Luca",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1819,
      "lv90": 9095
    },
    "atk": {
      "base": 222,
      "lv90": 1111
    },
    "matk": {
      "base": 133,
      "lv90": 666
    },
    "def": {
      "base": 143,
      "lv90": 286
    },
    "mdef": {
      "base": 57,
      "lv90": 114
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 50,
      "lv90": 150
    },
    "physCrit": {
      "base": 416,
      "lv90": 665
    },
    "magicCrit": {
      "base": 249,
      "lv90": 398
    },
    "hpRegen": {
      "base": 90,
      "lv90": 317
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
      "HP": 546,
      "ATK": 67,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 628,
      "ATK": 77,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 737,
      "ATK": 90,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 819,
      "ATK": 100,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1546,
      "ATK": 189,
      "DEF": 47,
      "MDEF": 11,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4276,
      "ATK": 523,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 47,
      "MDEF": 11,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "Accuracy": 3
    },
    "gp2": {
      "ATK": 40,
      "Accuracy": 3
    },
    "gp3": {
      "ATK": 40,
      "Accuracy": 7
    },
    "gp4": {
      "ATK": 120,
      "Accuracy": 7
    },
    "gp5": {
      "ATK": 120,
      "Accuracy": 10
    },
    "gp6": {
      "ATK": 200,
      "Accuracy": 10
    },
    "gp7": {
      "ATK": 200,
      "Accuracy": 13
    },
    "gp8": {
      "ATK": 280,
      "Accuracy": 13
    },
    "gp9": {
      "ATK": 280,
      "Accuracy": 16
    },
    "gp10": {
      "ATK": 360,
      "Accuracy": 16
    },
    "total": {
      "ATK": 360,
      "Accuracy": 16
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 191,
      "ATK": 23,
      "Phys Crit": 9,
      "Accuracy": 9
    },
    "g2": {
      "HP": 230,
      "ATK": 28,
      "Phys Crit": 11,
      "Block": 16
    },
    "g3": {
      "HP": 268,
      "ATK": 33,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 306,
      "ATK": 37,
      "Phys Crit": 14,
      "Block": 21
    },
    "g5": {
      "HP": 345,
      "ATK": 42,
      "Phys Crit": 16,
      "MP Charge": 5
    },
    "g6": {
      "HP": 383,
      "ATK": 47,
      "Phys Crit": 18,
      "Accuracy": 18
    },
    "g7": {
      "HP": 421,
      "ATK": 52,
      "Phys Crit": 19,
      "Block": 29
    },
    "g8": {
      "HP": 460,
      "ATK": 56,
      "Phys Crit": 21,
      "Accuracy": 21
    },
    "g9": {
      "HP": 498,
      "ATK": 61,
      "Phys Crit": 23,
      "Block": 34
    },
    "g10": {
      "HP": 536,
      "ATK": 66,
      "Phys Crit": 25,
      "MP Charge": 8
    },
    "total": {
      "HP": 536,
      "ATK": 66,
      "Phys Crit": 25,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Charge": 1
    },
    {
      "grade": 2,
      "DEF": 7
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "DEF": 10
    },
    {
      "grade": 5,
      "MP Charge": 2
    },
    {
      "grade": 6,
      "DEF": 12
    },
    {
      "grade": 7,
      "MP Charge": 3
    },
    {
      "grade": 8,
      "DEF": 15
    },
    {
      "grade": 9,
      "MP Charge": 4
    },
    {
      "grade": 10,
      "DEF": 17
    },
    {
      "grade": 11,
      "MP Charge": 4
    }
  ]
};;;;;;;;
