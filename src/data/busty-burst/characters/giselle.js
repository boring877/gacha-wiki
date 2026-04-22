// Character data: giselle
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "giselle",
  "name": "Giselle",
  "displayName": "Giselle",
  "baseName": "Giselle",
  "title": null,
  "rarity": "SSR",
  "element": "Light",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Very Slow",
  "range": 375,
  "weaponType": "Pierce",
  "skillTypes": [
    "Buff",
    "Debuff"
  ],
  "image": "Giselle",
  "introduction": "Middle Row、Physical、Attacker",
  "profile": {
    "height": "167cm",
    "bust": "96cm (I Cup)",
    "waist": "58cm",
    "hips": "87cm"
  },
  "credits": {
    "illustration": {
      "japanese": "失笑宣告",
      "romanized": ""
    },
    "voice": {
      "japanese": "手塚りょうこ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "banner",
    "source": "Swift Wind Unicorn Event Summon"
  },
  "characterId": 2088
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Piercing Strike",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -21%-40 DOWN for 8 seconds",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -21%-40 DOWN for 8 seconds",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -21%-220 DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "100% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+8",
      "lvl1": "100% + 80",
      "lvl90": "100% + 792",
      "effects": [
        "Physical Defense - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense -% Lv4",
          "value": -21,
          "type": "percent",
          "duration": 8,
          "levelGrowth": 0
        },
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -2.0
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Knight’s Pride",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage UP to self for 10 seconds and inflicts Accuracy DOWN on all enemies for 10 seconds",
      "descriptionLv1": "Applies Physical Critical Damage 50 UP to self for 10 seconds and inflicts Accuracy -9 DOWN on all enemies for 10 seconds",
      "descriptionLv90": "Applies Physical Critical Damage 680 UP to self for 10 seconds and inflicts Accuracy -18 DOWN on all enemies for 10 seconds",
      "target": "Self",
      "castTime": 1.1,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv4",
        "Accuracy - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 7.0
        },
        {
          "name": "Accuracy - Lv3",
          "value": -9,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.1
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Hurricane Charge",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Block -10 DOWN for 8 seconds and applies Physical Attack 15% UP to self for 8 seconds",
      "effect": "280% + 300",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 15,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Hurricane Charge",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Block -15 DOWN for 8 seconds and applies Physical Attack 20% UP to self for 8 seconds",
      "effect": "320% + 400",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv2",
          "value": -15,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Physical Attack + Ultimate Lv2",
          "value": 20,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Hurricane Charge",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Block -19 DOWN for 8 seconds and applies Physical Attack 24% UP to self for 8 seconds",
      "effect": "350% + 450",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv3",
          "value": -19,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Physical Attack + Ultimate Lv3",
          "value": 24,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Hurricane Charge",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Block -22 DOWN for 8 seconds and applies Physical Attack 27% UP to self for 8 seconds",
      "effect": "380% + 500",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv4",
          "value": -22,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Physical Attack + Ultimate Lv4",
          "value": 27,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Hurricane Charge",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Block -25 DOWN for 8 seconds and applies Physical Attack 30% UP to self for 8 seconds",
      "effect": "400% + 550",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv5",
          "value": -25,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Physical Attack + Ultimate Lv5",
          "value": 30,
          "type": "percent",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Max HP +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
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
  "name": "Giselle",
  "id": 2088,
  "rarity": "SSR",
  "element": "Light",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 1200,
    "ATK": 429,
    "MATK": 257,
    "DEF": 343,
    "MDEF": 137
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "giselle"
};

export const stats = {
  "id": "giselle",
  "characterId": 2088,
  "name": "Giselle",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1200,
      "lv90": 6002
    },
    "atk": {
      "base": 429,
      "lv90": 2148
    },
    "matk": {
      "base": 257,
      "lv90": 1288
    },
    "def": {
      "base": 343,
      "lv90": 583
    },
    "mdef": {
      "base": 137,
      "lv90": 377
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
      "base": 53,
      "lv90": 85
    },
    "magicCrit": {
      "base": 32,
      "lv90": 51
    },
    "hpRegen": {
      "base": 60,
      "lv90": 210
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
      "base": 67,
      "lv90": 67
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
      "HP": 360,
      "ATK": 129,
      "Block": 17,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 414,
      "ATK": 148,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 486,
      "ATK": 174,
      "Block": 22,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 540,
      "ATK": 193,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1110,
      "ATK": 397,
      "DEF": 38,
      "MDEF": 88,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 2910,
      "ATK": 1041,
      "Block": 83,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 38,
      "MDEF": 88,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "HP": 300,
      "ATK": 40
    },
    "gp3": {
      "HP": 300,
      "ATK": 120
    },
    "gp4": {
      "HP": 750,
      "ATK": 120
    },
    "gp5": {
      "HP": 750,
      "ATK": 200
    },
    "gp6": {
      "HP": 1200,
      "ATK": 200
    },
    "gp7": {
      "HP": 1200,
      "ATK": 280
    },
    "gp8": {
      "HP": 1650,
      "ATK": 280
    },
    "gp9": {
      "HP": 1650,
      "ATK": 360
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
      "HP": 126,
      "ATK": 45,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 152,
      "ATK": 54,
      "Phys Crit": 1,
      "Block": 17
    },
    "g3": {
      "HP": 177,
      "ATK": 63,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 202,
      "ATK": 72,
      "Phys Crit": 2,
      "Block": 23
    },
    "g5": {
      "HP": 227,
      "ATK": 81,
      "Phys Crit": 2,
      "MP Charge": 6
    },
    "g6": {
      "HP": 253,
      "ATK": 90,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 278,
      "ATK": 100,
      "Phys Crit": 2,
      "Block": 32
    },
    "g8": {
      "HP": 303,
      "ATK": 109,
      "Phys Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 329,
      "ATK": 118,
      "Phys Crit": 3,
      "Block": 38
    },
    "g10": {
      "HP": 354,
      "ATK": 127,
      "Phys Crit": 3,
      "MP Charge": 9
    },
    "total": {
      "HP": 354,
      "ATK": 127,
      "Phys Crit": 3,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 100
    },
    {
      "grade": 2,
      "ATK": 39
    },
    {
      "grade": 3,
      "HP": 140
    },
    {
      "grade": 4,
      "ATK": 52
    },
    {
      "grade": 5,
      "HP": 180
    },
    {
      "grade": 6,
      "ATK": 64
    },
    {
      "grade": 7,
      "HP": 220
    },
    {
      "grade": 8,
      "ATK": 77
    },
    {
      "grade": 9,
      "HP": 260
    },
    {
      "grade": 10,
      "ATK": 90
    },
    {
      "grade": 11,
      "HP": 273
    }
  ]
};;;;;;;;
