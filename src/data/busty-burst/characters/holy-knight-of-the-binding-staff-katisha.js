// Character data: 捕縛杖の聖騎士-カティーシャ
// Auto-generated from game data

export const info = {
  "slug": "holy-knight-of-the-binding-staff-katisha",
  "name": "[Holy Knight of the Binding Staff] Katisha",
  "displayName": "Holy Knight of the Binding Staff Katisha",
  "baseName": "Katisha",
  "title": "Holy Knight of the Binding Staff",
  "rarity": "SSR",
  "element": "Holy",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slow",
  "range": 230,
  "weaponType": "Strike",
  "skillTypes": [
    "弱體化、妨害"
  ],
  "image": "カティーシャ",
  "introduction": "Front RowPhysicalAttacker",
  "profile": {
    "height": "169cm",
    "bust": "120cm (Q Cup)",
    "waist": "63cm",
    "hips": "97cm"
  },
  "credits": {
    "illustration": {
      "japanese": "れむ",
      "romanized": ""
    },
    "voice": {
      "japanese": "柚木サチ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2237
};








































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Stop your futile resistance!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, on activation,self 6s Holy Type ATK 30%UP, state, +30%",
      "descriptionLv1": "Deals physical damage to the nearest enemy, on activation,self 6s Holy Type ATK 30%UP, state, +30%",
      "descriptionLv90": "Deals physical damage to the nearest enemy, on activation,self 6s Holy Type ATK 30%UP, state, +30%",
      "target": "Nearest Enemy",
      "castTime": 1.2,
      "damageScaling": "300% ATK",
      "baseDamage": "+400",
      "levelGrowth": "+20",
      "lvl1": "300% + 400",
      "lvl90": null,
      "effects": [
        "Holy Type ATK + LvMax"
      ],
      "buffEffects": [
        {
          "name": "Holy Type ATK + LvMax",
          "value": 30,
          "type": "percent",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "I am not sweet",
      "icon": "skill001/skill0019",
      "description": "3 nearest enemies 10s Block-11 DOWN and Accuracy -11 DOWN for 10 seconds, self 10s Physical Attack 20%+40 UP",
      "descriptionLv1": "3 nearest enemies 10s Block-11 DOWN and Accuracy -11 DOWN for 10 seconds, self 10s Physical Attack 20%+40 UP",
      "descriptionLv90": "3 nearest enemies 10s Block-23 DOWN and Accuracy -23 DOWN for 10 seconds, self 10s Physical Attack 20%+850 UP",
      "target": "Nearest Enemy",
      "castTime": 1.25,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Block- Lv4",
        "Accuracy - Lv4",
        "Physical Attack + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.13
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.13
        },
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 9.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Vern Sacred Binding - Immobilize Chain",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, applies 3s and Physical Defense DOWN(LV 1) for 10 seconds, 10s status (action speed 15%DOWN, (cannot be removed))",
      "effect": "1100% + 600",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Restraint",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Vern Sacred Binding - Immobilize Chain",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy, applies 4s and Physical Defense DOWN(LV 2) for 10 seconds, 10s status (action speed 15%DOWN, (cannot be removed))",
      "effect": "1320% + 800",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Restraint",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Vern Sacred Binding - Immobilize Chain",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy, applies 4s and Physical Defense DOWN(LV 3) for 10 seconds, 10s status (action speed 15%DOWN, (cannot be removed))",
      "effect": "1470% + 1000",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Restraint",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Vern Sacred Binding - Immobilize Chain",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy, applies 5s and Physical Defense DOWN(LV 4) for 10 seconds, 10s status (action speed 15%DOWN, (cannot be removed))",
      "effect": "1590% + 1100",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Restraint",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Vern Sacred Binding - Immobilize Chain",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy, applies 5s and Physical Defense DOWN(LV 5) for 10 seconds, 10s status (action speed 15%DOWN, (cannot be removed))",
      "effect": "1700% + 1200",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Restraint",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "description": "Gain Action Speed UP (Large), Physical Critical Damage UP",
      "effect": "Action Speed + (+15), Physical Critical Damage+ (+200%)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "flat",
          "gameText": "Action Speed UP (Large)"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 200,
          "type": "percent",
          "gameText": "Physical Critical Damage UP"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "description": "Gain Skill Damage UP (Large), Physical Critical Damage UP (Medium)",
      "effect": "Skill Damage + (+30%), Physical Critical Damage+ (+90%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent",
          "gameText": "Skill Damage UP (Large)"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "percent",
          "gameText": "Physical Critical Damage UP (Medium)"
        }
      ]
    }
  ],
  "name": "捕縛杖の聖騎士: カティーシャ",
  "id": 2237,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Attacker",
  "tags": [
    "弱體化、妨害"
  ],
  "baseStats": {
    "HP": 1546,
    "ATK": 361,
    "MATK": 217,
    "DEF": 143,
    "MDEF": 174
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.1"
  },
  "slug": "捕縛杖の聖騎士-カティーシャ"
};

export const stats = {
  "id": "holy-knight-of-the-binding-staff-katisha",
  "characterId": 2237,
  "name": "[Holy Knight of the Binding Staff] Katisha",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "弱體化、妨害"
  ],
  "baseStats": {
    "hp": {
      "base": 1546,
      "lv90": 7730
    },
    "atk": {
      "base": 361,
      "lv90": 1807
    },
    "matk": {
      "base": 217,
      "lv90": 1085
    },
    "def": {
      "base": 143,
      "lv90": 286
    },
    "mdef": {
      "base": 174,
      "lv90": 348
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
      "base": 125,
      "lv90": 200
    },
    "magicCrit": {
      "base": 75,
      "lv90": 120
    },
    "hpRegen": {
      "base": 77,
      "lv90": 270
    },
    "mpRegen": {
      "base": 59,
      "lv90": 237
    },
    "healPwr": {
      "base": 100,
      "lv90": 250
    },
    "mpCharge": {
      "base": 65,
      "lv90": 65
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
      "HP": 464,
      "ATK": 108,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 533,
      "ATK": 125,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 626,
      "ATK": 146,
      "Block": 20,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 696,
      "ATK": 163,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1315,
      "ATK": 335,
      "DEF": 48,
      "MDEF": 35,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3634,
      "ATK": 877,
      "Block": 75,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 48,
      "MDEF": 35,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "Accuracy": 3
    },
    "gp3": {
      "ATK": 120,
      "Accuracy": 3
    },
    "gp4": {
      "ATK": 120,
      "Accuracy": 7
    },
    "gp5": {
      "ATK": 200,
      "Accuracy": 7
    },
    "gp6": {
      "ATK": 200,
      "Accuracy": 10
    },
    "gp7": {
      "ATK": 280,
      "Accuracy": 10
    },
    "gp8": {
      "ATK": 280,
      "Accuracy": 13
    },
    "gp9": {
      "ATK": 360,
      "Accuracy": 13
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
      "HP": 163,
      "ATK": 38,
      "Phys Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 195,
      "ATK": 46,
      "Phys Crit": 3,
      "Block": 16
    },
    "g3": {
      "HP": 228,
      "ATK": 53,
      "Phys Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 260,
      "ATK": 61,
      "Phys Crit": 4,
      "Block": 21
    },
    "g5": {
      "HP": 293,
      "ATK": 69,
      "Phys Crit": 5,
      "MP Charge": 6
    },
    "g6": {
      "HP": 326,
      "ATK": 76,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 358,
      "ATK": 84,
      "Phys Crit": 6,
      "Block": 29
    },
    "g8": {
      "HP": 391,
      "ATK": 91,
      "Phys Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 423,
      "ATK": 99,
      "Phys Crit": 7,
      "Block": 34
    },
    "g10": {
      "HP": 456,
      "ATK": 107,
      "Phys Crit": 7,
      "MP Charge": 9
    },
    "total": {
      "HP": 456,
      "ATK": 107,
      "Phys Crit": 7,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 30
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "ATK": 42
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "ATK": 54
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "ATK": 66
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "ATK": 78
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "ATK": 90
    }
  ]
};;;
