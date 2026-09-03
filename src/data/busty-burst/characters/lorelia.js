// Character data: lorelia
// Auto-generated from game data

export const info = {
  "slug": "lorelia",
  "name": "Lorelia",
  "displayName": "Lorelia",
  "baseName": "Lorelia",
  "title": null,
  "rarity": "R",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 240,
  "weaponType": "Strike",
  "skillTypes": [
    "Buff",
    "Disrupt"
  ],
  "image": "Lorelia",
  "introduction": "Front RowPhysicalAttacker",
  "profile": {
    "height": "155cm",
    "bust": "99cm (H Cup)",
    "waist": "56cm",
    "hips": "89cm"
  },
  "credits": {
    "illustration": {
      "japanese": "深泥正",
      "romanized": ""
    },
    "voice": {
      "japanese": "花南",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2019
};














































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Gentle Slap",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy",
      "descriptionLv1": "Deals physical damage to the nearest enemy",
      "descriptionLv90": "Deals physical damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "240% ATK",
      "baseDamage": "+120",
      "levelGrowth": "+20",
      "lvl1": "240% + 120",
      "lvl90": "240% + 1900",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "It is my honor to be of assistance to you ",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage 30 UP to the 3 nearest allies for 12 seconds and Physical Defense 15%+100 UP for 12 seconds",
      "descriptionLv1": "Applies Physical Critical Damage 30 UP to the 3 nearest allies for 12 seconds and Physical Defense 15%+100 UP for 12 seconds",
      "descriptionLv90": "Applies Physical Critical Damage 30 UP to the 3 nearest allies for 12 seconds and Physical Defense 15%+190 UP for 12 seconds",
      "target": "Nearest Ally",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv2",
        "Physical Defense + Lv2"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv2",
          "value": 30,
          "type": "percent",
          "duration": 12,
          "levelGrowth": 3.0
        },
        {
          "name": "Physical Defense + Lv2",
          "value": 100,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 1.0
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Angering a merfolk is a frightening thing, you know!",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
      "effect": "320% + 286",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 2,
      "name": "Angering a merfolk is a frightening thing, you know!",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
      "effect": "380% + 327",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 3,
      "name": "Angering a merfolk is a frightening thing, you know!",
      "icon": "skill001/skill0012_3",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
      "effect": "426% + 366",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 4,
      "name": "Angering a merfolk is a frightening thing, you know!",
      "icon": "skill001/skill0012_4",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
      "effect": "458% + 399",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 5,
      "name": "Angering a merfolk is a frightening thing, you know!",
      "icon": "skill001/skill0012_5",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
      "effect": "488% + 422",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +",
      "icon": "skill001/skill1002",
      "description": "Gain Physical Defense UP (Small)",
      "effect": "Physical Defense + (+70)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 70,
          "type": "flat",
          "gameText": "Physical Defense UP (Small)"
        }
      ]
    },
    {
      "slot": 2,
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
    }
  ],
  "name": "Lorelia",
  "id": 2019,
  "rarity": "R",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1491,
    "ATK": 279,
    "MATK": 167,
    "DEF": 117,
    "MDEF": 46
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "lorelia"
};

export const stats = {
  "id": "lorelia",
  "characterId": 2019,
  "name": "Lorelia",
  "rarity": "R",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1491,
      "lv90": 7456
    },
    "atk": {
      "base": 279,
      "lv90": 1397
    },
    "matk": {
      "base": 167,
      "lv90": 838
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
      "base": 74,
      "lv90": 260
    },
    "mpRegen": {
      "base": 50,
      "lv90": 200
    },
    "healPwr": {
      "base": 65,
      "lv90": 162
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
      "HP": 447,
      "ATK": 84,
      "Block": 17,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 515,
      "ATK": 96,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 604,
      "ATK": 113,
      "Block": 22,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 671,
      "ATK": 126,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1089,
      "ATK": 204,
      "DEF": 30,
      "MDEF": 8,
      "Heal Pwr": 13
    },
    "total": {
      "HP": 3326,
      "ATK": 623,
      "Block": 83,
      "MP Charge": 16,
      "Accuracy": 30,
      "DEF": 30,
      "MDEF": 8,
      "Heal Pwr": 13
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Charge": 1
    },
    "gp2": {
      "ATK": 20,
      "MP Charge": 1
    },
    "gp3": {
      "ATK": 20,
      "MP Charge": 3
    },
    "gp4": {
      "ATK": 60,
      "MP Charge": 3
    },
    "gp5": {
      "ATK": 60,
      "MP Charge": 5
    },
    "gp6": {
      "ATK": 100,
      "MP Charge": 5
    },
    "gp7": {
      "ATK": 100,
      "MP Charge": 7
    },
    "gp8": {
      "ATK": 140,
      "MP Charge": 7
    },
    "gp9": {
      "ATK": 140,
      "MP Charge": 9
    },
    "gp10": {
      "ATK": 180,
      "MP Charge": 9
    },
    "total": {
      "ATK": 180,
      "MP Charge": 9
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 157,
      "ATK": 29,
      "Phys Crit": 2,
      "Accuracy": 9
    },
    "g2": {
      "HP": 188,
      "ATK": 35,
      "Phys Crit": 3,
      "Block": 17
    },
    "g3": {
      "HP": 220,
      "ATK": 41,
      "Phys Crit": 3,
      "Accuracy": 12
    },
    "g4": {
      "HP": 251,
      "ATK": 47,
      "Phys Crit": 3,
      "Block": 23
    },
    "g5": {
      "HP": 283,
      "ATK": 53,
      "Phys Crit": 4,
      "MP Charge": 6
    },
    "g6": {
      "HP": 314,
      "ATK": 59,
      "Phys Crit": 4,
      "Accuracy": 18
    },
    "g7": {
      "HP": 345,
      "ATK": 65,
      "Phys Crit": 5,
      "Block": 32
    },
    "g8": {
      "HP": 377,
      "ATK": 71,
      "Phys Crit": 5,
      "Accuracy": 21
    },
    "g9": {
      "HP": 408,
      "ATK": 77,
      "Phys Crit": 5,
      "Block": 38
    },
    "g10": {
      "HP": 440,
      "ATK": 82,
      "Phys Crit": 6,
      "MP Charge": 10
    },
    "total": {
      "HP": 440,
      "ATK": 82,
      "Phys Crit": 6,
      "MP Charge": 10
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "MP Regen": 5
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "MP Regen": 6
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "MP Regen": 8
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "MP Regen": 9
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "MP Regen": 11
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;
