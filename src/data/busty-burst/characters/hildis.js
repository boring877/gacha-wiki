// Character data: hildis
// Merged from info/skills/stats files

export const info = {
  "slug": "hildis",
  "name": "Hildis",
  "displayName": "Hildis",
  "baseName": "Hildis",
  "title": null,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 240,
  "weaponType": "Strike/Blunt",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "image": "Hildis",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "169cm",
    "bust": "98cm (H Cup)",
    "waist": "64cm",
    "hips": "89cm"
  },
  "credits": {
    "illustration": {
      "japanese": "London\u72ac",
      "romanized": "London Inu"
    },
    "voice": {
      "japanese": "\u91ce\u3005\u6751\u7d17\u591c",
      "romanized": "Nonomura Sayo"
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
      "name": "Thunderfire",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -50 DOWN for 5 seconds and Burn(HP --150 per second) for 12 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -50 DOWN for 5 seconds and Burn(HP --150 per second) for 12 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -320 DOWN for 5 seconds and Burn(HP --1500 per second) for 12 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.66,
      "damageScaling": "350% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+20",
      "lvl1": "350% + 150",
      "lvl90": "350% + -1185",
      "effects": [
        "Physical Defense - Lv5",
        "Burn Lv5"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv5",
          "value": -50,
          "type": "flat",
          "duration": 5,
          "levelGrowth": -3.0
        },
        {
          "name": "Burn Lv5",
          "value": -150,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -15.0
        }
      ],
      "duration": 12
    },
    {
      "slot": 3,
      "name": "Armor-Sleeve Touch",
      "icon": "skill001/skill0013",
      "description": "Applies Physical Attack +30 UP to self for 10 seconds and Action Speed UP for 10 seconds",
      "descriptionLv1": "Applies Physical Attack +30 UP to self for 10 seconds and Action Speed UP for 10 seconds",
      "descriptionLv90": "Applies Physical Attack +480 UP to self for 10 seconds and Action Speed UP for 10 seconds",
      "target": "Self",
      "castTime": 0.66,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv3",
        "Action Speed + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv3",
          "value": 30,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 5.0
        },
        {
          "name": "Action Speed + Lv4",
          "value": 17,
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
      "name": "Heaven Sever",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 1) for 8 seconds and BlockDOWN(LV 1) for 8 seconds",
      "effect": "420% + 390",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Thunderfire",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -50 DOWN for 5 seconds and Burn(HP --150 per second) for 12 seconds",
      "effect": "350% + 150",
      "buffEffects": [
        {
          "name": "Physical Defense - Lv5",
          "value": -50,
          "type": "flat",
          "duration": 5
        },
        {
          "name": "Burn Lv5",
          "value": -150,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 3,
      "name": "Armor-Sleeve Touch",
      "icon": "skill001/skill0013",
      "description": "Applies Physical Attack +30 UP to self for 10 seconds and Action Speed UP for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Lv3",
          "value": 30,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed + Lv4",
          "value": 17,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Heaven Sever",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 1) for 8 seconds and BlockDOWN(LV 1) for 8 seconds",
      "effect": "420% + 390",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Heaven Sever",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 2) for 8 seconds and BlockDOWN(LV 2) for 8 seconds",
      "effect": "505% + 450",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -19,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv2",
          "value": -18,
          "type": "flat",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Physical Attack +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+3444), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        },
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Critical Damage+, Physical Attack +",
      "icon": "skill001/skill1005",
      "effect": "Physical Critical Damage+ (+90%), Physical Attack + (+130)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 130,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Hildis",
  "id": 2054,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2259,
    "ATK": 190,
    "MATK": 114,
    "DEF": 82,
    "MDEF": 32
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.36"
  },
  "slug": "hildis"
};

export const stats = {
  "id": "hildis",
  "characterId": 2054,
  "name": "Hildis",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2259,
      "lv90": 11296
    },
    "atk": {
      "base": 190,
      "lv90": 952
    },
    "matk": {
      "base": 114,
      "lv90": 571
    },
    "def": {
      "base": 82,
      "lv90": 164
    },
    "mdef": {
      "base": 32,
      "lv90": 64
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
      "base": 416,
      "lv90": 665
    },
    "magicCrit": {
      "base": 249,
      "lv90": 398
    },
    "hpRegen": {
      "base": 112,
      "lv90": 394
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
      "base": 45,
      "lv90": 45
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
      "HP": 678,
      "ATK": 57,
      "Block": 14,
      "MP Charge": 4
    },
    "lb2": {
      "HP": 779,
      "ATK": 66,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 915,
      "ATK": 77,
      "Block": 18,
      "MP Charge": 6
    },
    "lb4": {
      "HP": 1017,
      "ATK": 86,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 2090,
      "ATK": 176,
      "DEF": 23,
      "MDEF": 6,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 5479,
      "ATK": 462,
      "Block": 68,
      "MP Charge": 10,
      "Accuracy": 30,
      "DEF": 23,
      "MDEF": 6,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 300
    },
    "gp2": {
      "HP": 300,
      "ATK": 40
    },
    "gp3": {
      "HP": 750,
      "ATK": 40
    },
    "gp4": {
      "HP": 750,
      "ATK": 120
    },
    "gp5": {
      "HP": 1200,
      "ATK": 120
    },
    "gp6": {
      "HP": 1200,
      "ATK": 200
    },
    "gp7": {
      "HP": 1650,
      "ATK": 200
    },
    "gp8": {
      "HP": 1650,
      "ATK": 280
    },
    "gp9": {
      "HP": 2100,
      "ATK": 280
    },
    "gp10": {
      "HP": 2100,
      "ATK": 360
    },
    "total": {
      "HP": 2100,
      "ATK": 360
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 238,
      "ATK": 20,
      "Phys Crit": 9,
      "Accuracy": 9
    },
    "g2": {
      "HP": 285,
      "ATK": 24,
      "Phys Crit": 11,
      "Block": 14
    },
    "g3": {
      "HP": 333,
      "ATK": 28,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 381,
      "ATK": 32,
      "Phys Crit": 14,
      "Block": 19
    },
    "g5": {
      "HP": 428,
      "ATK": 36,
      "Phys Crit": 16,
      "MP Charge": 4
    },
    "g6": {
      "HP": 476,
      "ATK": 40,
      "Phys Crit": 18,
      "Accuracy": 18
    },
    "g7": {
      "HP": 523,
      "ATK": 44,
      "Phys Crit": 19,
      "Block": 26
    },
    "g8": {
      "HP": 571,
      "ATK": 48,
      "Phys Crit": 21,
      "Accuracy": 21
    },
    "g9": {
      "HP": 618,
      "ATK": 52,
      "Phys Crit": 23,
      "Block": 31
    },
    "g10": {
      "HP": 666,
      "ATK": 56,
      "Phys Crit": 25,
      "MP Charge": 6
    },
    "total": {
      "HP": 666,
      "ATK": 56,
      "Phys Crit": 25,
      "MP Charge": 6
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 16
    },
    {
      "grade": 2,
      "HP": 203
    },
    {
      "grade": 3,
      "ATK": 22
    },
    {
      "grade": 4,
      "HP": 271
    },
    {
      "grade": 5,
      "ATK": 29
    },
    {
      "grade": 6,
      "HP": 339
    },
    {
      "grade": 7,
      "ATK": 35
    },
    {
      "grade": 8,
      "HP": 407
    },
    {
      "grade": 9,
      "ATK": 41
    },
    {
      "grade": 10,
      "HP": 474
    },
    {
      "grade": 11,
      "ATK": 43
    }
  ]
};;;;;;;;
