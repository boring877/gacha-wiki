// Character data: aiming-for-your-heart-shati
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "aiming-for-your-heart-shati",
  "name": "Aiming for Your Heart♪: Shati",
  "displayName": "Aiming for Your Heart♪: Shati",
  "baseName": "Shati",
  "title": "Aiming for Your Heart♪",
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Slow",
  "range": 490,
  "weaponType": "Ranged",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Shati",
  "introduction": "Back Row、Physical、Attacker",
  "profile": {
    "height": "167cm",
    "bust": "102cm (J Cup)",
    "waist": "61cm",
    "hips": "92cm"
  },
  "credits": {
    "illustration": {
      "japanese": "みるちょ",
      "romanized": ""
    },
    "voice": {
      "japanese": "南十字いっせい",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2149
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Double Bullet - Splash",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Block-11 DOWN for 6 seconds, [Water Pressure] Lv whendamage+20%",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Block-11 DOWN for 6 seconds, [Water Pressure] Lv whendamage+20%",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Block-23 DOWN for 6 seconds, [Water Pressure] Lv whendamage+20%",
      "target": "Nearest Enemy",
      "castTime": 1.5,
      "damageScaling": "350% ATK",
      "baseDamage": "+600",
      "levelGrowth": "+25",
      "lvl1": "350% + 600",
      "lvl90": "350% + 588",
      "effects": [
        "Block- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.13
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Temptation Halo",
      "icon": "skill001/skill0017",
      "description": "Applies Physical Critical Damage 60 UP to self for 12 seconds and Accuracy 11 UP for 12 seconds",
      "descriptionLv1": "Applies Physical Critical Damage 60 UP to self for 12 seconds and Accuracy 11 UP for 12 seconds",
      "descriptionLv90": "Applies Physical Critical Damage 60 UP to self for 12 seconds and Accuracy 23 UP for 12 seconds",
      "target": "Self",
      "castTime": 1.5,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv5",
        "Accuracy + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv5",
          "value": 60,
          "type": "percent",
          "duration": 12,
          "levelGrowth": 9.0
        },
        {
          "name": "Accuracy + Lv4",
          "value": 11,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 0.13
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Summer Sparkle - Water Stream Cannon",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Water Type Damage Taken UP(LV 1) for 8 seconds, Ultimate activation beforeapply to self15 Hit-Based Damage UP(LV 1), 10 [Water Pressure](Water Type ATK10%UP)",
      "effect": "600% + 1000",
      "buffEffects": [
        {
          "name": "Water Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Hit-Based Damage + Ultimate Lv1",
          "value": 50,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Water Pressure",
          "value": 10,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Double Bullet - Splash",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Block-11 DOWN for 6 seconds, [Water Pressure] Lv whendamage+20%",
      "effect": "350% + 600",
      "buffEffects": [
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Temptation Halo",
      "icon": "skill001/skill0017",
      "description": "Applies Physical Critical Damage 60 UP to self for 12 seconds and Accuracy 11 UP for 12 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv5",
          "value": 60,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Accuracy + Lv4",
          "value": 11,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "Summer Sparkle - Water Stream Cannon",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Water Type Damage Taken UP(LV 1) for 8 seconds, Ultimate activation beforeapply to self15 Hit-Based Damage UP(LV 1), 10 [Water Pressure](Water Type ATK10%UP)",
      "effect": "600% + 1000",
      "buffEffects": [
        {
          "name": "Water Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Hit-Based Damage + Ultimate Lv1",
          "value": 50,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Water Pressure",
          "value": 10,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Summer Sparkle - Water Stream Cannon",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Water Type Damage Taken UP(LV 2) for 8 seconds, Ultimate activation beforeapply to self15 Hit-Based Damage UP(LV 2), 10 [Water Pressure](Water Type ATK10%UP)",
      "effect": "650% + 1300",
      "buffEffects": [
        {
          "name": "Water Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Hit-Based Damage + Ultimate Lv2",
          "value": 60,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Water Pressure",
          "value": 10,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Critical Damage+, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Physical Critical Damage+ (+176%), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 176,
          "type": "percent"
        },
        {
          "name": "Accuracy +",
          "value": 20,
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
  "name": "Aiming for Your Heart♪: Shati",
  "id": 2149,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1457,
    "ATK": 361,
    "MATK": 217,
    "DEF": 226,
    "MDEF": 90
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "aiming-for-your-heart-shati"
};

export const stats = {
  "id": "aiming-for-your-heart-shati",
  "characterId": 2149,
  "name": "【Aiming for Your Heart♪】Shati",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1457,
      "lv90": 7288
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
      "base": 226,
      "lv90": 384
    },
    "mdef": {
      "base": 90,
      "lv90": 248
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
      "base": 125,
      "lv90": 200
    },
    "magicCrit": {
      "base": 75,
      "lv90": 120
    },
    "hpRegen": {
      "base": 72,
      "lv90": 254
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
      "base": 70,
      "lv90": 70
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
      "HP": 437,
      "ATK": 108,
      "Block": 17,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 503,
      "ATK": 125,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 590,
      "ATK": 146,
      "Block": 22,
      "MP Charge": 10
    },
    "lb4": {
      "HP": 656,
      "ATK": 163,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1239,
      "ATK": 335,
      "DEF": 58,
      "MDEF": 25,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 3425,
      "ATK": 877,
      "Block": 83,
      "MP Charge": 17,
      "Accuracy": 30,
      "DEF": 58,
      "MDEF": 25,
      "Heal Pwr": 25
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
      "HP": 153,
      "ATK": 38,
      "Phys Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 184,
      "ATK": 46,
      "Phys Crit": 3,
      "Block": 17
    },
    "g3": {
      "HP": 215,
      "ATK": 53,
      "Phys Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 246,
      "ATK": 61,
      "Phys Crit": 4,
      "Block": 23
    },
    "g5": {
      "HP": 276,
      "ATK": 69,
      "Phys Crit": 5,
      "MP Charge": 5
    },
    "g6": {
      "HP": 307,
      "ATK": 76,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 338,
      "ATK": 84,
      "Phys Crit": 6,
      "Block": 32
    },
    "g8": {
      "HP": 368,
      "ATK": 91,
      "Phys Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 399,
      "ATK": 99,
      "Phys Crit": 7,
      "Block": 38
    },
    "g10": {
      "HP": 430,
      "ATK": 107,
      "Phys Crit": 7,
      "MP Charge": 8
    },
    "total": {
      "HP": 430,
      "ATK": 107,
      "Phys Crit": 7,
      "MP Charge": 8
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
      "ATK": 85
    }
  ]
};;;;;;;;
