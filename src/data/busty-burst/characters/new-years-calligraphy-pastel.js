// Character data: new-years-calligraphy-pastel
// Merged from info/skills/stats files

export const info = {
  "slug": "new-years-calligraphy-pastel",
  "name": "[New Year's Calligraphy] Pastel",
  "displayName": "New Year's Calligraphy Pastel",
  "baseName": "Pastel",
  "title": "New Year's Calligraphy",
  "rarity": "SSR",
  "element": "Water",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slightly Slow",
  "range": 395,
  "weaponType": "Strike/Blunt",
  "skillTypes": [
    "Heal",
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "image": "New_Years_Calligraphy_Pastel",
  "introduction": "Middle Row、Physical、Support",
  "profile": {
    "height": "160cm",
    "bust": "99cm (J Cup)",
    "waist": "59cm",
    "hips": "86cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Aotonbo",
      "romanized": "Aotonbo"
    },
    "voice": {
      "japanese": "\u5c0f\u5009\u7d50\u8863",
      "romanized": "Ogura Yui"
    }
  },
  "obtain": {
    "type": "limited",
    "source": "2024 New Year Banner"
  }
};

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Longevity",
      "icon": "skill001/skill0019",
      "description": "Restores HP by 2000% ATK + 4160 to all allies and inflicts Debuff Resistance Lv2 (+30%) for 10 seconds and Accuracy+ Lv3 (+9) for 10 seconds",
      "descriptionLv1": "Restores HP by 2000% ATK + 600 to all allies and inflicts Debuff Resistance Lv2 (+30%) for 10 seconds and Accuracy+ Lv3 (+9) for 10 seconds",
      "descriptionLv90": "Restores HP by 2000% ATK + 4160 to all allies and inflicts Debuff Resistance Lv2 (+30%) for 10 seconds and Accuracy+ Lv3 (+9) for 10 seconds",
      "target": "All Allies",
      "castTime": 1.58,
      "damageScaling": "2000% ATK",
      "baseDamage": "+600",
      "levelGrowth": "+40",
      "lvl1": "2000% + 600",
      "lvl90": "2000% + 4160",
      "effects": [
        "Debuff Resistance Lv2",
        "Accuracy+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 30,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Accuracy+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Crane and Turtle",
      "icon": "skill001/skill0007",
      "description": "Deals 110% ATK + 654 physical damage to the 3 nearest enemies and inflicts Physical Attack- Lv4 (-11%) for 7 seconds and Magic Attack- Lv4 (-11%) for 7 seconds",
      "descriptionLv1": "Deals 110% ATK + 120 physical damage to the 3 nearest enemies and inflicts Physical Attack- Lv4 (-11%) for 7 seconds and Magic Attack- Lv4 (-11%) for 7 seconds",
      "descriptionLv90": "Deals 110% ATK + 654 physical damage to the 3 nearest enemies and inflicts Physical Attack- Lv4 (-11%) for 7 seconds and Magic Attack- Lv4 (-11%) for 7 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "110% ATK",
      "baseDamage": "+120",
      "levelGrowth": "+6",
      "lvl1": "110% + 120",
      "lvl90": "110% + 654",
      "effects": [
        "Physical Attack- Lv4",
        "Magic Attack- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack- Lv4",
          "value": -11,
          "type": "percent",
          "duration": 7
        },
        {
          "name": "Magic Attack- Lv4",
          "value": -11,
          "type": "percent",
          "duration": 7
        }
      ],
      "duration": 7
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Bird-and-Beast Caricatures",
      "icon": "skill001/skill0012_1",
      "description": "Deals 380% ATK + 600 physical damage to all enemies and inflicts Dispel for 3 seconds and Action Speed- Ultimate Lv1 (-8%) for 8 seconds",
      "effect": "380% + 600",
      "buffEffects": [
        {
          "name": "Dispel",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Action Speed- Ultimate Lv1",
          "value": -8,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Bird-and-Beast Caricatures",
      "icon": "skill001/skill0012_2",
      "description": "Deals 450% ATK + 800 physical damage to all enemies and inflicts Dispel for 4 seconds and Action Speed- Ultimate Lv2 (-10%) for 8 seconds",
      "effect": "450% + 800",
      "buffEffects": [
        {
          "name": "Dispel",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Action Speed- Ultimate Lv2",
          "value": -10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Bird-and-Beast Caricatures",
      "icon": "skill001/skill0012_3",
      "description": "Deals 509% ATK + 950 physical damage to all enemies and inflicts Dispel for 4 seconds and Action Speed- Ultimate Lv3 (-12%) for 8 seconds",
      "effect": "509% + 950",
      "buffEffects": [
        {
          "name": "Dispel",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Action Speed- Ultimate Lv3",
          "value": -12,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Bird-and-Beast Caricatures",
      "icon": "skill001/skill0012_4",
      "description": "Deals 550% ATK + 1100 physical damage to all enemies and inflicts Dispel for 5 seconds and Action Speed- Ultimate Lv4 (-14%) for 8 seconds",
      "effect": "550% + 1100",
      "buffEffects": [
        {
          "name": "Dispel",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Action Speed- Ultimate Lv4",
          "value": -14,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Bird-and-Beast Caricatures",
      "icon": "skill001/skill0012_5",
      "description": "Deals 580% ATK + 1200 physical damage to all enemies and inflicts Dispel for 5 seconds and Action Speed- Ultimate Lv5 (-15%) for 8 seconds",
      "effect": "580% + 1200",
      "buffEffects": [
        {
          "name": "Dispel",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Action Speed- Ultimate Lv5",
          "value": -15,
          "type": "percent",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Self Action Speed UP, Max HP UP",
      "icon": "skill001/skill1003",
      "effects": [
        {
          "name": "Action Speed+",
          "value": 10,
          "type": "flat"
        },
        {
          "name": "Max HP+",
          "value": 3444,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "All Allies Block UP, Max HP UP",
      "icon": "skill001/skill1007",
      "effects": [
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        },
        {
          "name": "Max HP+",
          "value": 2896,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "\u3010New Year's Calligraphy\u3011Pastel",
  "id": 2100,
  "rarity": "SSR",
  "element": "Water",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2745,
    "ATK": 306,
    "MATK": 183,
    "DEF": 82,
    "MDEF": 32
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slightly Slow",
    "speedValue": "1.00"
  },
  "slug": "new-years-calligraphy-pastel"
};

export const stats = {
  "id": "new-years-calligraphy-pastel",
  "characterId": 2100,
  "name": "【New Year's First Sketch】Pastel",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2745,
      "lv90": 13728
    },
    "atk": {
      "base": 306,
      "lv90": 1530
    },
    "matk": {
      "base": 183,
      "lv90": 917
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
      "base": 137,
      "lv90": 480
    },
    "mpRegen": {
      "base": 62,
      "lv90": 249
    },
    "healPwr": {
      "base": 117,
      "lv90": 267
    },
    "mpCharge": {
      "base": 60,
      "lv90": 60
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
      "HP": 824,
      "ATK": 92,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 947,
      "ATK": 106,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 1112,
      "ATK": 124,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1236,
      "ATK": 138,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 2540,
      "ATK": 260,
      "DEF": 23,
      "MDEF": 6,
      "Heal Pwr": 27
    },
    "total": {
      "HP": 6659,
      "ATK": 720,
      "Block": 75,
      "MP Charge": 13,
      "Accuracy": 30,
      "DEF": 23,
      "MDEF": 6,
      "Heal Pwr": 27
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 300
    },
    "gp2": {
      "HP": 300,
      "Block": 3
    },
    "gp3": {
      "HP": 750,
      "Block": 3
    },
    "gp4": {
      "HP": 750,
      "Block": 7
    },
    "gp5": {
      "HP": 1200,
      "Block": 7
    },
    "gp6": {
      "HP": 1200,
      "Block": 10
    },
    "gp7": {
      "HP": 1650,
      "Block": 10
    },
    "gp8": {
      "HP": 1650,
      "Block": 13
    },
    "gp9": {
      "HP": 2100,
      "Block": 13
    },
    "gp10": {
      "HP": 2100,
      "Block": 16
    },
    "total": {
      "HP": 2100,
      "Block": 16
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 289,
      "ATK": 32,
      "Phys Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 347,
      "ATK": 39,
      "Phys Crit": 3,
      "Block": 16
    },
    "g3": {
      "HP": 405,
      "ATK": 45,
      "Phys Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 462,
      "ATK": 52,
      "Phys Crit": 4,
      "Block": 21
    },
    "g5": {
      "HP": 520,
      "ATK": 58,
      "Phys Crit": 5,
      "MP Charge": 5
    },
    "g6": {
      "HP": 578,
      "ATK": 64,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 636,
      "ATK": 71,
      "Phys Crit": 6,
      "Block": 29
    },
    "g8": {
      "HP": 694,
      "ATK": 77,
      "Phys Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 751,
      "ATK": 84,
      "Phys Crit": 7,
      "Block": 34
    },
    "g10": {
      "HP": 809,
      "ATK": 90,
      "Phys Crit": 7,
      "MP Charge": 8
    },
    "total": {
      "HP": 809,
      "ATK": 90,
      "Phys Crit": 7,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 229
    },
    {
      "grade": 2,
      "MP Cost Down": 1
    },
    {
      "grade": 3,
      "HP": 320
    },
    {
      "grade": 4,
      "MP Cost Down": 1
    },
    {
      "grade": 5,
      "HP": 412
    },
    {
      "grade": 6,
      "MP Cost Down": 1
    },
    {
      "grade": 7,
      "HP": 503
    },
    {
      "grade": 8,
      "MP Cost Down": 1
    },
    {
      "grade": 9,
      "HP": 595
    },
    {
      "grade": 10,
      "MP Cost Down": 1
    },
    {
      "grade": 11,
      "HP": 625
    }
  ]
};;;;;;;;
