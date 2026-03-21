// Character data: gothic-loli-breast-fiend-juju
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "gothic-loli-breast-fiend-juju",
  "name": "Gothic Loli Breast Fiend: Juju",
  "displayName": "Gothic Loli Breast Fiend: Juju",
  "baseName": "Juju",
  "title": "Gothic Loli Breast Fiend",
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slightly Slow",
  "range": 300,
  "weaponType": "Pierce",
  "skillTypes": [
    "Buff",
    "Debuff"
  ],
  "image": "Juju",
  "introduction": "Middle Row、Physical、Attacker",
  "profile": {
    "height": "159cm",
    "bust": "95cm (H Cup)",
    "waist": "58cm",
    "hips": "76cm"
  },
  "credits": {
    "illustration": {
      "japanese": "カゲシオ",
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
  "characterId": 2208
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Excuse me♪",
      "icon": "skill001/skill0013",
      "description": "Deals physical damage to the nearest enemy, activation beforeApplies Physical Critical Damage 60 UP to self for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy, activation beforeApplies Physical Critical Damage 60 UP to self for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy, activation beforeApplies Physical Critical Damage 60 UP to self for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.15,
      "damageScaling": "320% ATK",
      "baseDamage": "+350",
      "levelGrowth": "+25",
      "lvl1": "320% + 350",
      "lvl90": "320% + 1151",
      "effects": [
        "Physical Critical Damage+ Lv5"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv5",
          "value": 60,
          "type": "percent",
          "duration": 6,
          "levelGrowth": 9.0
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Oh no, not like this...!",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -40 DOWN for 12 seconds and Block-11 DOWN for 12 seconds",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -40 DOWN for 12 seconds and Block-11 DOWN for 12 seconds",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -220 DOWN for 12 seconds and Block-23 DOWN for 12 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.2,
      "damageScaling": "125% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+6",
      "lvl1": "125% + 200",
      "lvl90": "125% + 188",
      "effects": [
        "Physical Defense - Lv4",
        "Block- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -2.0
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -0.13
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "A world shining with love",
      "icon": "skill001/skill0020_1",
      "description": "to all enemiesphysical damage and inflicts Water Type Damage Taken UP(LV 1) for 5 seconds , all allies10 Accuracy UP(LV 1), 10 Damage UP(LV 1)",
      "effect": "500% + 800",
      "buffEffects": [
        {
          "name": "Water Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Accuracy + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Damage + Ultimate Lv1",
          "value": 5,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Excuse me♪",
      "icon": "skill001/skill0013",
      "description": "Deals physical damage to the nearest enemy, activation beforeApplies Physical Critical Damage 60 UP to self for 6 seconds",
      "effect": "320% + 350",
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv5",
          "value": 60,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Oh no, not like this...!",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -40 DOWN for 12 seconds and Block-11 DOWN for 12 seconds",
      "effect": "125% + 200",
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "A world shining with love",
      "icon": "skill001/skill0020_1",
      "description": "to all enemiesphysical damage and inflicts Water Type Damage Taken UP(LV 1) for 5 seconds , all allies10 Accuracy UP(LV 1), 10 Damage UP(LV 1)",
      "effect": "500% + 800",
      "buffEffects": [
        {
          "name": "Water Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Accuracy + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Damage + Ultimate Lv1",
          "value": 5,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "A world shining with love",
      "icon": "skill001/skill0020_2",
      "description": "to all enemiesphysical damage and inflicts Water Type Damage Taken UP(LV 2) for 5 seconds , all allies10 Accuracy UP(LV 2), 10 Damage UP(LV 2)",
      "effect": "700% + 1100",
      "buffEffects": [
        {
          "name": "Water Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Accuracy + Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Damage + Ultimate Lv2",
          "value": 8,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Damage UP",
      "icon": "skill001/skill1005",
      "effect": "Damage UP (+9999%)",
      "effectValues": [
        {
          "name": "Damage UP",
          "value": 9999,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Physical Critical Damage+ (+90%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Gothic Loli Breast Fiend: Juju",
  "id": 2208,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 343,
    "MATK": 206,
    "DEF": 57,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slightly Slow",
    "speedValue": "1.05"
  },
  "slug": "gothic-loli-breast-fiend-juju"
};

export const stats = {
  "id": "gothic-loli-breast-fiend-juju",
  "characterId": 2208,
  "name": "【Gothic Loli Breast Fiend】Juju",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 2092,
      "lv90": 10460
    },
    "atk": {
      "base": 343,
      "lv90": 1718
    },
    "matk": {
      "base": 206,
      "lv90": 1031
    },
    "def": {
      "base": 57,
      "lv90": 114
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
      "base": 53,
      "lv90": 85
    },
    "magicCrit": {
      "base": 32,
      "lv90": 51
    },
    "hpRegen": {
      "base": 104,
      "lv90": 365
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
      "base": 62,
      "lv90": 62
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
      "HP": 628,
      "ATK": 103,
      "Block": 15,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 722,
      "ATK": 119,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 847,
      "ATK": 139,
      "Block": 20,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 941,
      "ATK": 155,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1779,
      "ATK": 293,
      "DEF": 19,
      "MDEF": 12,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4917,
      "ATK": 809,
      "Block": 75,
      "MP Charge": 16,
      "Accuracy": 30,
      "DEF": 19,
      "MDEF": 12,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "Phys Crit": 10
    },
    "gp2": {
      "ATK": 40,
      "Phys Crit": 10
    },
    "gp3": {
      "ATK": 40,
      "Phys Crit": 30
    },
    "gp4": {
      "ATK": 120,
      "Phys Crit": 30
    },
    "gp5": {
      "ATK": 120,
      "Phys Crit": 50
    },
    "gp6": {
      "ATK": 200,
      "Phys Crit": 50
    },
    "gp7": {
      "ATK": 200,
      "Phys Crit": 70
    },
    "gp8": {
      "ATK": 280,
      "Phys Crit": 70
    },
    "gp9": {
      "ATK": 280,
      "Phys Crit": 90
    },
    "gp10": {
      "ATK": 360,
      "Phys Crit": 90
    },
    "total": {
      "ATK": 360,
      "Phys Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 220,
      "ATK": 36,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 264,
      "ATK": 43,
      "Phys Crit": 1,
      "Block": 16
    },
    "g3": {
      "HP": 308,
      "ATK": 51,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 352,
      "ATK": 58,
      "Phys Crit": 2,
      "Block": 21
    },
    "g5": {
      "HP": 396,
      "ATK": 65,
      "Phys Crit": 2,
      "MP Charge": 5
    },
    "g6": {
      "HP": 440,
      "ATK": 72,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 484,
      "ATK": 80,
      "Phys Crit": 2,
      "Block": 29
    },
    "g8": {
      "HP": 529,
      "ATK": 87,
      "Phys Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 573,
      "ATK": 94,
      "Phys Crit": 3,
      "Block": 34
    },
    "g10": {
      "HP": 617,
      "ATK": 101,
      "Phys Crit": 3,
      "MP Charge": 8
    },
    "total": {
      "HP": 617,
      "ATK": 101,
      "Phys Crit": 3,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;;;;;;
