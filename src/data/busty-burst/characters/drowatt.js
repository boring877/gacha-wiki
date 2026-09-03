// Character data: drowatt
// Auto-generated from game data

export const info = {
  "slug": "drowatt",
  "name": "Drowatt",
  "displayName": "Drowatt",
  "baseName": "Drowatt",
  "title": null,
  "rarity": "R",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slow",
  "range": 240,
  "weaponType": "Strike",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Drowatt",
  "introduction": "Front RowPhysicalAttacker",
  "profile": {
    "height": "170cm",
    "bust": "97cm (H Cup)",
    "waist": "62cm",
    "hips": "91cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
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
  "characterId": 2009
};














































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Even though you want to get so close…",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the enemy with the highest Physical ATK",
      "descriptionLv1": "Deals physical damage to the enemy with the highest Physical ATK",
      "descriptionLv90": "Deals physical damage to the enemy with the highest Physical ATK",
      "target": "Highest Phys ATK Enemy",
      "castTime": 1.38,
      "damageScaling": "225% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+20",
      "lvl1": "225% + 100",
      "lvl90": "225% + 1880",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Drowatt just doesn’t knooow♪",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the enemy with the highest Physical ATK and inflicts Charm for 3 seconds",
      "descriptionLv1": "Deals physical damage to the enemy with the highest Physical ATK and inflicts Charm for 3 seconds",
      "descriptionLv90": "Deals physical damage to the enemy with the highest Physical ATK and inflicts Charm for 3 seconds",
      "target": "Highest Phys ATK Enemy",
      "castTime": 1.38,
      "damageScaling": "178% ATK",
      "baseDamage": "+90",
      "levelGrowth": "+16",
      "lvl1": "178% + 90",
      "lvl90": null,
      "effects": [
        "Charm"
      ],
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ],
      "duration": 3
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Alluring Bounce♪",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the enemy with the highest Physical ATK and inflicts Physical Attack DOWN(LV 1) for 10 seconds",
      "effect": "750% + 650",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv1",
          "value": -5,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Alluring Bounce♪",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the enemy with the highest Physical ATK and inflicts Physical Attack DOWN(LV 2) for 10 seconds",
      "effect": "900% + 730",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv2",
          "value": -8,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Alluring Bounce♪",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the enemy with the highest Physical ATK and inflicts Physical Attack DOWN(LV 3) for 10 seconds",
      "effect": "1050% + 790",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv3",
          "value": -11,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Alluring Bounce♪",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the enemy with the highest Physical ATK and inflicts Physical Attack DOWN(LV 4) for 10 seconds",
      "effect": "1150% + 850",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv4",
          "value": -14,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Alluring Bounce♪",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the enemy with the highest Physical ATK and inflicts Physical Attack DOWN(LV 5) for 10 seconds",
      "effect": "1200% + 900",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv5",
          "value": -15,
          "type": "percent",
          "duration": 10
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
      "name": "Physical Attack +",
      "icon": "skill001/skill1001",
      "description": "Gain Physical Attack UP (Small)",
      "effect": "Physical Attack + (+130)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 130,
          "type": "flat",
          "gameText": "Physical Attack UP (Small)"
        }
      ]
    }
  ],
  "name": "Drowatt",
  "id": 2009,
  "rarity": "R",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1491,
    "ATK": 314,
    "MATK": 188,
    "DEF": 117,
    "MDEF": 46
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Basic → Basic → Skill2",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "drowatt"
};

export const stats = {
  "id": "drowatt",
  "characterId": 2009,
  "name": "Drowatt",
  "rarity": "R",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1491,
      "lv90": 7456
    },
    "atk": {
      "base": 314,
      "lv90": 1571
    },
    "matk": {
      "base": 188,
      "lv90": 942
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
      "base": 82,
      "lv90": 82
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
      "ATK": 94,
      "Block": 17,
      "MP Charge": 8
    },
    "lb2": {
      "HP": 515,
      "ATK": 108,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 604,
      "ATK": 127,
      "Block": 22,
      "MP Charge": 10
    },
    "lb4": {
      "HP": 671,
      "ATK": 141,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1089,
      "ATK": 229,
      "DEF": 30,
      "MDEF": 8,
      "Heal Pwr": 13
    },
    "total": {
      "HP": 3326,
      "ATK": 699,
      "Block": 83,
      "MP Charge": 18,
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
      "ATK": 33,
      "Phys Crit": 2,
      "Accuracy": 9
    },
    "g2": {
      "HP": 188,
      "ATK": 40,
      "Phys Crit": 3,
      "Block": 17
    },
    "g3": {
      "HP": 220,
      "ATK": 46,
      "Phys Crit": 3,
      "Accuracy": 12
    },
    "g4": {
      "HP": 251,
      "ATK": 53,
      "Phys Crit": 3,
      "Block": 23
    },
    "g5": {
      "HP": 283,
      "ATK": 60,
      "Phys Crit": 4,
      "MP Charge": 7
    },
    "g6": {
      "HP": 314,
      "ATK": 66,
      "Phys Crit": 4,
      "Accuracy": 18
    },
    "g7": {
      "HP": 345,
      "ATK": 73,
      "Phys Crit": 5,
      "Block": 32
    },
    "g8": {
      "HP": 377,
      "ATK": 79,
      "Phys Crit": 5,
      "Accuracy": 21
    },
    "g9": {
      "HP": 408,
      "ATK": 86,
      "Phys Crit": 5,
      "Block": 38
    },
    "g10": {
      "HP": 440,
      "ATK": 93,
      "Phys Crit": 6,
      "MP Charge": 11
    },
    "total": {
      "HP": 440,
      "ATK": 93,
      "Phys Crit": 6,
      "MP Charge": 11
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Regen": 4
    },
    {
      "grade": 2,
      "Phys Crit": 4
    },
    {
      "grade": 3,
      "MP Regen": 6
    },
    {
      "grade": 4,
      "Phys Crit": 5
    },
    {
      "grade": 5,
      "MP Regen": 8
    },
    {
      "grade": 6,
      "Phys Crit": 6
    },
    {
      "grade": 7,
      "MP Regen": 9
    },
    {
      "grade": 8,
      "Phys Crit": 7
    },
    {
      "grade": 9,
      "MP Regen": 11
    },
    {
      "grade": 10,
      "Phys Crit": 8
    },
    {
      "grade": 11,
      "MP Regen": 13
    }
  ]
};;;
