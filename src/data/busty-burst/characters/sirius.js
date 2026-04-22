// Character data: sirius
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "sirius",
  "name": "Sirius",
  "displayName": "Sirius",
  "baseName": "Sirius",
  "title": null,
  "rarity": "SSR",
  "element": "Light",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 245,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Sirius",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "167cm",
    "bust": "90cm (H Cup)",
    "waist": "52cm",
    "hips": "89cm"
  },
  "credits": {
    "illustration": {
      "japanese": "みやま零",
      "romanized": ""
    },
    "voice": {
      "japanese": "相模恋",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2139
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Thunder Rush",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, when team has when 3+ allies are presentdamage+25",
      "descriptionLv1": "Deals physical damage to the nearest enemy, when team has when 3+ allies are presentdamage+25",
      "descriptionLv90": "Deals physical damage to the nearest enemy, when team has when 3+ allies are presentdamage+25",
      "target": "Nearest Enemy",
      "castTime": 1.37,
      "damageScaling": "300% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+30",
      "lvl1": "300% + 300",
      "lvl90": null,
      "effects": [
        "Hit-Based Physical Damage +"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Physical Damage +",
          "value": 4,
          "type": "flat",
          "duration": 3
        }
      ],
      "duration": 3
    },
    {
      "slot": 3,
      "name": "Man-Sword Resonance",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack 18%+35 UP to self for 10 seconds and Physical Critical Damage 50 UP for 10 seconds , when team has when 3+ allies are present10 Holy Type ATK 15%UP",
      "descriptionLv1": "Applies Physical Attack 18%+35 UP to self for 10 seconds and Physical Critical Damage 50 UP for 10 seconds , when team has when 3+ allies are present10 Holy Type ATK 15%UP",
      "descriptionLv90": "Applies Physical Attack 18%+665 UP to self for 10 seconds and Physical Critical Damage 50 UP for 10 seconds , when team has when 3+ allies are present10 Holy Type ATK 15%UP",
      "target": "Self",
      "castTime": 1.37,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv4",
        "Physical Critical Damage+ Lv4",
        "Holy Type ATK + Lv4"
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
        },
        {
          "name": "Holy Type ATK + Lv4",
          "value": 15,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Heroic Storm",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 5 nearest enemies and inflicts BlockDOWN(LV 1) for 10 seconds, when team has when 3+ allies are present10 Physical Defense DOWN(LV 1)",
      "effect": "240% + 300",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Heroic Storm",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 5 nearest enemies and inflicts BlockDOWN(LV 2) for 10 seconds, when team has when 3+ allies are present10 Physical Defense DOWN(LV 2)",
      "effect": "290% + 350",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Heroic Storm",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the 5 nearest enemies and inflicts BlockDOWN(LV 3) for 10 seconds, when team has when 3+ allies are present10 Physical Defense DOWN(LV 3)",
      "effect": "320% + 390",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Heroic Storm",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the 5 nearest enemies and inflicts BlockDOWN(LV 4) for 10 seconds, when team has when 3+ allies are present10 Physical Defense DOWN(LV 4)",
      "effect": "350% + 420",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Heroic Storm",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the 5 nearest enemies and inflicts BlockDOWN(LV 5) for 10 seconds, when team has when 3+ allies are present10 Physical Defense DOWN(LV 5)",
      "effect": "370% + 450",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv5",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Critical Damage+, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Physical Critical Damage+ (+176%), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 176,
          "type": "percent"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Sirius",
  "id": 2139,
  "rarity": "SSR",
  "element": "Light",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 321,
    "MATK": 192,
    "DEF": 110,
    "MDEF": 110
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.87"
  },
  "slug": "sirius"
};

export const stats = {
  "id": "sirius",
  "characterId": 2139,
  "name": "Sirius",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1819,
      "lv90": 9095
    },
    "atk": {
      "base": 321,
      "lv90": 1606
    },
    "matk": {
      "base": 192,
      "lv90": 963
    },
    "def": {
      "base": 110,
      "lv90": 220
    },
    "mdef": {
      "base": 110,
      "lv90": 220
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
      "base": 90,
      "lv90": 317
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
      "base": 56,
      "lv90": 56
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
      "ATK": 96,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 628,
      "ATK": 111,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 737,
      "ATK": 130,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 819,
      "ATK": 145,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1546,
      "ATK": 297,
      "DEF": 34,
      "MDEF": 22,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 4276,
      "ATK": 779,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 34,
      "MDEF": 22,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "Phys Crit": 20
    },
    "gp3": {
      "ATK": 120,
      "Phys Crit": 20
    },
    "gp4": {
      "ATK": 120,
      "Phys Crit": 50
    },
    "gp5": {
      "ATK": 200,
      "Phys Crit": 50
    },
    "gp6": {
      "ATK": 200,
      "Phys Crit": 80
    },
    "gp7": {
      "ATK": 280,
      "Phys Crit": 80
    },
    "gp8": {
      "ATK": 280,
      "Phys Crit": 110
    },
    "gp9": {
      "ATK": 360,
      "Phys Crit": 110
    },
    "gp10": {
      "ATK": 360,
      "Phys Crit": 140
    },
    "total": {
      "ATK": 360,
      "Phys Crit": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 191,
      "ATK": 34,
      "Phys Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 230,
      "ATK": 41,
      "Phys Crit": 3,
      "Block": 16
    },
    "g3": {
      "HP": 268,
      "ATK": 47,
      "Phys Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 306,
      "ATK": 54,
      "Phys Crit": 4,
      "Block": 21
    },
    "g5": {
      "HP": 345,
      "ATK": 61,
      "Phys Crit": 5,
      "MP Charge": 5
    },
    "g6": {
      "HP": 383,
      "ATK": 68,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 421,
      "ATK": 74,
      "Phys Crit": 6,
      "Block": 29
    },
    "g8": {
      "HP": 460,
      "ATK": 81,
      "Phys Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 498,
      "ATK": 88,
      "Phys Crit": 7,
      "Block": 34
    },
    "g10": {
      "HP": 536,
      "ATK": 95,
      "Phys Crit": 7,
      "MP Charge": 7
    },
    "total": {
      "HP": 536,
      "ATK": 95,
      "Phys Crit": 7,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 27
    },
    {
      "grade": 2,
      "Phys Crit": 5
    },
    {
      "grade": 3,
      "ATK": 37
    },
    {
      "grade": 4,
      "Phys Crit": 6
    },
    {
      "grade": 5,
      "ATK": 48
    },
    {
      "grade": 6,
      "Phys Crit": 8
    },
    {
      "grade": 7,
      "ATK": 59
    },
    {
      "grade": 8,
      "Phys Crit": 9
    },
    {
      "grade": 9,
      "ATK": 70
    },
    {
      "grade": 10,
      "Phys Crit": 11
    },
    {
      "grade": 11,
      "ATK": 74
    }
  ]
};;;;;;;;
