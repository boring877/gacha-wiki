// Character data: fruit-basket-bianca
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "fruit-basket-bianca",
  "name": "Fruit Basket: Bianca",
  "displayName": "Fruit Basket: Bianca",
  "baseName": "Bianca",
  "title": "Fruit Basket",
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 250,
  "weaponType": "Slash",
  "skillTypes": [
    "Heal",
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "image": "Bianca",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "158cm",
    "bust": "93cm (H Cup)",
    "waist": "58cm",
    "hips": "84cm"
  },
  "credits": {
    "illustration": {
      "japanese": "HIMA",
      "romanized": ""
    },
    "voice": {
      "japanese": "まのめるか",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2090
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "I'll harvest properly",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -23%-50 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -23%-50 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -23%-320 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "340% ATK",
      "baseDamage": "+120",
      "levelGrowth": "+25",
      "lvl1": "340% + 120",
      "lvl90": "340% + -147",
      "effects": [
        "Physical Defense - Lv5"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv5",
          "value": -50,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -3.0
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Wanna give it a try?",
      "icon": "skill001/skill0021",
      "description": "nearest ally3restore HP and inflicts Debuff Resistance 50%UP for 10 seconds",
      "descriptionLv1": "nearest ally3restore HP and inflicts Debuff Resistance 50%UP for 10 seconds",
      "descriptionLv90": "nearest ally3restore HP and inflicts Debuff Resistance 50%UP for 10 seconds",
      "target": "Nearest Ally",
      "castTime": 1.08,
      "damageScaling": "850% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+20",
      "lvl1": "850% + 150",
      "lvl90": null,
      "effects": [
        "Debuff Resistance Lv3"
      ],
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv3",
          "value": 0,
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
      "name": "Now is the time to harvest!!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Blind for 4 seconds and Action Speed DOWN(LV 1) for 10 seconds",
      "effect": "1150% + 900",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Now is the time to harvest!!",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Blind for 5 seconds and Action Speed DOWN(LV 2) for 10 seconds",
      "effect": "1380% + 1100",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Now is the time to harvest!!",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Blind for 5 seconds and Action Speed DOWN(LV 3) for 10 seconds",
      "effect": "1540% + 1200",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -24,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Now is the time to harvest!!",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Blind for 6 seconds and Action Speed DOWN(LV 4) for 10 seconds",
      "effect": "1650% + 1350",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -27,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Now is the time to harvest!!",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Blind for 6 seconds and Action Speed DOWN(LV 5) for 10 seconds",
      "effect": "1700% + 1400",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -30,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Healing Amount +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), Healing Amount + (+15%)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Healing Amount +",
          "value": 15,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Accuracy +",
          "value": 20,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Fruit Basket: Bianca",
  "id": 2090,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Heal",
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1715,
    "ATK": 300,
    "MATK": 180,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Basic → Skill3 → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "fruit-basket-bianca"
};

export const stats = {
  "id": "fruit-basket-bianca",
  "characterId": 2090,
  "name": "【Fruit Basket】Bianca",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Heal",
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1715,
      "lv90": 8575
    },
    "atk": {
      "base": 300,
      "lv90": 1503
    },
    "matk": {
      "base": 180,
      "lv90": 902
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
      "lv90": 120
    },
    "block": {
      "base": 55,
      "lv90": 165
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
      "base": 85,
      "lv90": 299
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
      "base": 46,
      "lv90": 46
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
      "HP": 515,
      "ATK": 90,
      "Block": 17,
      "MP Charge": 4
    },
    "lb2": {
      "HP": 592,
      "ATK": 104,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 695,
      "ATK": 122,
      "Block": 22,
      "MP Charge": 6
    },
    "lb4": {
      "HP": 772,
      "ATK": 135,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1458,
      "ATK": 278,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4032,
      "ATK": 729,
      "Block": 83,
      "MP Charge": 10,
      "Accuracy": 30,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
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
      "HP": 181,
      "ATK": 32,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 217,
      "ATK": 38,
      "Phys Crit": 1,
      "Block": 17
    },
    "g3": {
      "HP": 253,
      "ATK": 44,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 289,
      "ATK": 51,
      "Phys Crit": 2,
      "Block": 23
    },
    "g5": {
      "HP": 325,
      "ATK": 57,
      "Phys Crit": 2,
      "MP Charge": 4
    },
    "g6": {
      "HP": 361,
      "ATK": 63,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 397,
      "ATK": 70,
      "Phys Crit": 2,
      "Block": 32
    },
    "g8": {
      "HP": 433,
      "ATK": 76,
      "Phys Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 469,
      "ATK": 82,
      "Phys Crit": 3,
      "Block": 38
    },
    "g10": {
      "HP": 506,
      "ATK": 89,
      "Phys Crit": 3,
      "MP Charge": 6
    },
    "total": {
      "HP": 506,
      "ATK": 89,
      "Phys Crit": 3,
      "MP Charge": 6
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 25
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "ATK": 35
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "ATK": 45
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "ATK": 55
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "ATK": 65
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "ATK": 68
    }
  ]
};;;;;;;;
