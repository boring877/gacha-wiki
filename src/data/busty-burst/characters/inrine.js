// Character data: inrine
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "inrine",
  "name": "Inrine",
  "displayName": "Inrine",
  "baseName": "Inrine",
  "title": null,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Slow",
  "range": 230,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Inrine",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "165cm",
    "bust": "98cm (H Cup)",
    "waist": "59cm",
    "hips": "92cm"
  },
  "credits": {
    "illustration": {
      "japanese": "わむらかい",
      "romanized": ""
    },
    "voice": {
      "japanese": "葵時緒",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2050
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Steel Sever",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy",
      "descriptionLv1": "Deals physical damage to the nearest enemy",
      "descriptionLv90": "Deals physical damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 1.2,
      "damageScaling": "350% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+30",
      "lvl1": "350% + 500",
      "lvl90": "350% + 3170",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Single-Minded Strike",
      "icon": "skill001/skill0019",
      "description": "Applies Hit-Based Physical Damage UP(150%+500, 1 hit(s)) to self for 4 secondsand Debuff Resistance 1%UP for 4 seconds",
      "descriptionLv1": "Applies Hit-Based Physical Damage UP(150%+500, 1 hit(s)) to self for 4 secondsand Debuff Resistance 1%UP for 4 seconds",
      "descriptionLv90": "Applies Hit-Based Physical Damage UP(4500150%+500, 1 hit(s)) to self for 4 secondsand Debuff Resistance 1%UP for 4 seconds",
      "target": "Self",
      "castTime": 1.6,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Hit-Based Physical Damage +",
        "Debuff Resistance LvMax"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Physical Damage +",
          "value": 1,
          "type": "flat",
          "duration": 4,
          "levelGrowth": 500.0
        },
        {
          "name": "Debuff Resistance LvMax",
          "value": 1,
          "type": "percent",
          "duration": 4
        }
      ],
      "duration": 4
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Ten-Thousand Blade Flash",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 1) for 10 secondsand BlockDOWN(LV 1) for 10 seconds",
      "effect": "280% + 300",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -10,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Ten-Thousand Blade Flash",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 2) for 10 secondsand BlockDOWN(LV 2) for 10 seconds",
      "effect": "330% + 400",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -15,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv2",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Ten-Thousand Blade Flash",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 3) for 10 secondsand BlockDOWN(LV 3) for 10 seconds",
      "effect": "370% + 500",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -19,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv3",
          "value": -19,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Ten-Thousand Blade Flash",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 4) for 10 secondsand BlockDOWN(LV 4) for 10 seconds",
      "effect": "400% + 550",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -22,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv4",
          "value": -22,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Ten-Thousand Blade Flash",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 5) for 10 secondsand BlockDOWN(LV 5) for 10 seconds",
      "effect": "420% + 600",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv5",
          "value": -25,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
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
  "name": "Inrine",
  "id": 2050,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 373,
    "MATK": 224,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.4"
  },
  "slug": "inrine"
};

export const stats = {
  "id": "inrine",
  "characterId": 2050,
  "name": "Inrine",
  "rarity": "SSR",
  "element": "水",
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
      "base": 373,
      "lv90": 1868
    },
    "matk": {
      "base": 224,
      "lv90": 1120
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
      "lv90": 99
    },
    "block": {
      "base": 50,
      "lv90": 150
    },
    "physCrit": {
      "base": 207,
      "lv90": 331
    },
    "magicCrit": {
      "base": 124,
      "lv90": 198
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
      "base": 82,
      "lv90": 206
    },
    "mpCharge": {
      "base": 109,
      "lv90": 109
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
      "ATK": 112,
      "Block": 15,
      "MP Charge": 10
    },
    "lb2": {
      "HP": 628,
      "ATK": 129,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 737,
      "ATK": 151,
      "Block": 20,
      "MP Charge": 13
    },
    "lb4": {
      "HP": 819,
      "ATK": 168,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1546,
      "ATK": 318,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4276,
      "ATK": 878,
      "Block": 75,
      "MP Charge": 23,
      "Accuracy": 30,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "Phys Crit": 20
    },
    "gp2": {
      "Accuracy": 3,
      "Phys Crit": 20
    },
    "gp3": {
      "Accuracy": 3,
      "Phys Crit": 50
    },
    "gp4": {
      "Accuracy": 7,
      "Phys Crit": 50
    },
    "gp5": {
      "Accuracy": 7,
      "Phys Crit": 80
    },
    "gp6": {
      "Accuracy": 10,
      "Phys Crit": 80
    },
    "gp7": {
      "Accuracy": 10,
      "Phys Crit": 110
    },
    "gp8": {
      "Accuracy": 13,
      "Phys Crit": 110
    },
    "gp9": {
      "Accuracy": 13,
      "Phys Crit": 140
    },
    "gp10": {
      "Accuracy": 16,
      "Phys Crit": 140
    },
    "total": {
      "Accuracy": 16,
      "Phys Crit": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 191,
      "ATK": 39,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 230,
      "ATK": 47,
      "Phys Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 268,
      "ATK": 55,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 306,
      "ATK": 63,
      "Phys Crit": 7,
      "Block": 21
    },
    "g5": {
      "HP": 345,
      "ATK": 71,
      "Phys Crit": 8,
      "MP Charge": 9
    },
    "g6": {
      "HP": 383,
      "ATK": 79,
      "Phys Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 421,
      "ATK": 87,
      "Phys Crit": 10,
      "Block": 29
    },
    "g8": {
      "HP": 460,
      "ATK": 94,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 498,
      "ATK": 102,
      "Phys Crit": 11,
      "Block": 34
    },
    "g10": {
      "HP": 536,
      "ATK": 110,
      "Phys Crit": 12,
      "MP Charge": 14
    },
    "total": {
      "HP": 536,
      "ATK": 110,
      "Phys Crit": 12,
      "MP Charge": 14
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Phys Crit": 7
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "Phys Crit": 10
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "Phys Crit": 12
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "Phys Crit": 15
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "Phys Crit": 18
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "Phys Crit": 19
    }
  ]
};;;;;;;;
