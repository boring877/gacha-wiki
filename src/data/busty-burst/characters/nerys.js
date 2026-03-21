// Character data: nerys
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "nerys",
  "name": "Nerys",
  "displayName": "Nerys",
  "baseName": "Nerys",
  "title": null,
  "rarity": "SR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Fast",
  "range": 360,
  "weaponType": "Throw",
  "skillTypes": [
    "Disrupt",
    "Debuff"
  ],
  "image": "Nerys",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "160cm",
    "bust": "98cm (H Cup)",
    "waist": "58cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "深泥正",
      "romanized": ""
    },
    "voice": {
      "japanese": "御苑生メイ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2008
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Shockwave",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the nearest enemy",
      "descriptionLv1": "Deals magic damage to the nearest enemy",
      "descriptionLv90": "Deals magic damage to the nearest enemy",
      "target": "Back Enemy",
      "castTime": 1.08,
      "damageScaling": "320% ATK",
      "baseDamage": "+120",
      "levelGrowth": "+25",
      "lvl1": "320% + 120",
      "lvl90": "320% + 2345",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Light Orb",
      "icon": "skill001/skill0010",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense-40 DOWN for 10 seconds",
      "descriptionLv1": "Deals magic damage to the nearest enemy and inflicts Magic Defense-40 DOWN for 10 seconds",
      "descriptionLv90": "Deals magic damage to the nearest enemy and inflicts Magic Defense-220 DOWN for 10 seconds",
      "target": "Back Enemy",
      "castTime": 1.08,
      "damageScaling": "280% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+20",
      "lvl1": "280% + 100",
      "lvl90": "280% + -78",
      "effects": [
        "Magic Defense- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense- Lv4",
          "value": -40,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -2.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Shining Spear",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the 2 nearest enemies and inflicts Stun for 3 seconds",
      "effect": "600% + 500",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 2,
      "name": "Shockwave",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the nearest enemy",
      "effect": "320% + 120",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "Light Orb",
      "icon": "skill001/skill0010",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense-40 DOWN for 10 seconds",
      "effect": "280% + 100",
      "buffEffects": [
        {
          "name": "Magic Defense- Lv4",
          "value": -40,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Shining Spear",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the 2 nearest enemies and inflicts Stun for 3 seconds",
      "effect": "600% + 500",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 5,
      "name": "Shining Spear",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to the 2 nearest enemies and inflicts Stun for 3 seconds",
      "effect": "720% + 524",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "MP Recovery+",
      "icon": "skill001/skill1003",
      "effect": "MP Recovery+ (+21%)",
      "effectValues": [
        {
          "name": "MP Recovery+",
          "value": 21,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Nerys",
  "id": 2008,
  "rarity": "SR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Disrupt",
    "Debuff"
  ],
  "baseStats": {
    "HP": 2062,
    "ATK": 132,
    "MATK": 221,
    "DEF": 25,
    "MDEF": 65
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "nerys"
};

export const stats = {
  "id": "nerys",
  "characterId": 2008,
  "name": "Nerys",
  "rarity": "SR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Disrupt",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 2062,
      "lv90": 10313
    },
    "atk": {
      "base": 132,
      "lv90": 662
    },
    "matk": {
      "base": 221,
      "lv90": 1105
    },
    "def": {
      "base": 25,
      "lv90": 50
    },
    "mdef": {
      "base": 65,
      "lv90": 130
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
      "base": 172,
      "lv90": 275
    },
    "magicCrit": {
      "base": 287,
      "lv90": 459
    },
    "hpRegen": {
      "base": 103,
      "lv90": 360
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
      "base": 51,
      "lv90": 51
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
      "HP": 619,
      "MATK": 66,
      "Block": 14,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 712,
      "MATK": 76,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 835,
      "MATK": 90,
      "Block": 18,
      "MP Charge": 6
    },
    "lb4": {
      "HP": 928,
      "MATK": 99,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1784,
      "MATK": 175,
      "DEF": 5,
      "MDEF": 18,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4878,
      "MATK": 506,
      "Block": 68,
      "MP Charge": 11,
      "Accuracy": 30,
      "DEF": 5,
      "MDEF": 18,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "Magic Crit": 10
    },
    "gp2": {
      "MATK": 30,
      "Magic Crit": 10
    },
    "gp3": {
      "MATK": 30,
      "Magic Crit": 30
    },
    "gp4": {
      "MATK": 90,
      "Magic Crit": 30
    },
    "gp5": {
      "MATK": 90,
      "Magic Crit": 50
    },
    "gp6": {
      "MATK": 130,
      "Magic Crit": 50
    },
    "gp7": {
      "MATK": 130,
      "Magic Crit": 70
    },
    "gp8": {
      "MATK": 170,
      "Magic Crit": 70
    },
    "gp9": {
      "MATK": 170,
      "Magic Crit": 90
    },
    "gp10": {
      "MATK": 210,
      "Magic Crit": 90
    },
    "total": {
      "MATK": 210,
      "Magic Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 217,
      "MATK": 23,
      "MDEF": 3,
      "Magic Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 261,
      "MATK": 28,
      "MDEF": 4,
      "Magic Crit": 7,
      "Block": 14
    },
    "g3": {
      "HP": 304,
      "MATK": 33,
      "MDEF": 4,
      "Magic Crit": 8,
      "Accuracy": 12
    },
    "g4": {
      "HP": 347,
      "MATK": 37,
      "MDEF": 5,
      "Magic Crit": 10,
      "Block": 19
    },
    "g5": {
      "HP": 391,
      "MATK": 42,
      "MDEF": 5,
      "Magic Crit": 11,
      "MP Charge": 4
    },
    "g6": {
      "HP": 434,
      "MATK": 47,
      "MDEF": 6,
      "Magic Crit": 12,
      "Accuracy": 18
    },
    "g7": {
      "HP": 478,
      "MATK": 51,
      "MDEF": 6,
      "Magic Crit": 13,
      "Block": 26
    },
    "g8": {
      "HP": 521,
      "MATK": 56,
      "MDEF": 7,
      "Magic Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 565,
      "MATK": 60,
      "MDEF": 8,
      "Magic Crit": 16,
      "Block": 31
    },
    "g10": {
      "HP": 608,
      "MATK": 65,
      "MDEF": 8,
      "Magic Crit": 17,
      "MP Charge": 7
    },
    "total": {
      "HP": 608,
      "MATK": 65,
      "MDEF": 8,
      "Magic Crit": 17,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 172
    },
    {
      "grade": 2,
      "MP Cost Down": 1
    },
    {
      "grade": 3,
      "HP": 241
    },
    {
      "grade": 4,
      "MP Cost Down": 1
    },
    {
      "grade": 5,
      "HP": 309
    },
    {
      "grade": 6,
      "MP Cost Down": 1
    },
    {
      "grade": 7,
      "HP": 378
    },
    {
      "grade": 8,
      "MP Cost Down": 1
    },
    {
      "grade": 9,
      "HP": 447
    },
    {
      "grade": 10,
      "MP Cost Down": 1
    },
    {
      "grade": 11,
      "HP": 493
    }
  ]
};;;;;;;;
