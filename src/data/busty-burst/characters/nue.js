// Character data: nue
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "nue",
  "name": "Nue",
  "displayName": "Nue",
  "baseName": "Nue",
  "title": null,
  "rarity": "SR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slow",
  "range": 360,
  "weaponType": "Strike",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Nue",
  "introduction": "Middle Row、Physical、Attacker",
  "profile": {
    "height": "182cm",
    "bust": "111cm (L Cup)",
    "waist": "65cm",
    "hips": "96cm"
  },
  "credits": {
    "illustration": {
      "japanese": "山田ゴゴゴ",
      "romanized": ""
    },
    "voice": {
      "japanese": "有賀桃",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2075
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Binding Art: Serpent Coil",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Paralysis for 4 seconds and Physical Defense -30 DOWN for 8 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Paralysis for 4 seconds and Physical Defense -30 DOWN for 8 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Paralysis for 4 seconds and Physical Defense -210 DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "270% ATK",
      "baseDamage": "+140",
      "levelGrowth": "+15",
      "lvl1": "270% + 140",
      "lvl90": "270% + -38",
      "effects": [
        "Paralysis",
        "Physical Defense - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -2.0
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Circular Slash",
      "icon": "skill001/skill0019",
      "description": "Applies Block 9 UP to self for 8 seconds and MP Regeneration 40 for 4 seconds",
      "descriptionLv1": "Applies Block 9 UP to self for 8 seconds and MP Regeneration 40 for 4 seconds",
      "descriptionLv90": "Applies Block 18 UP to self for 8 seconds and MP Regeneration 40 for 4 seconds",
      "target": "Self",
      "castTime": 1.58,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Block+ Lv3",
        "MP Regeneration + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 0.1
        },
        {
          "name": "MP Regeneration + Lv5",
          "value": 40,
          "type": "percent",
          "duration": 4
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Esoteric Art: Death Makeup",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies",
      "effect": "340% + 200",
      "buffEffects": []
    },
    {
      "rank": 2,
      "name": "Binding Art: Serpent Coil",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Paralysis for 4 seconds and Physical Defense -30 DOWN for 8 seconds",
      "effect": "270% + 140",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Circular Slash",
      "icon": "skill001/skill0019",
      "description": "Applies Block 9 UP to self for 8 seconds and MP Regeneration 40 for 4 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "MP Regeneration + Lv5",
          "value": 40,
          "type": "percent",
          "duration": 4
        }
      ]
    },
    {
      "rank": 4,
      "name": "Esoteric Art: Death Makeup",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies",
      "effect": "340% + 200",
      "buffEffects": []
    },
    {
      "rank": 5,
      "name": "Esoteric Art: Death Makeup",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies",
      "effect": "380% + 240",
      "buffEffects": []
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+10), Physical Attack + (+130)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        },
        {
          "name": "Physical Attack +",
          "value": 130,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+10%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 10,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Nue",
  "id": 2075,
  "rarity": "SR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1524,
    "ATK": 284,
    "MATK": 170,
    "DEF": 208,
    "MDEF": 83
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic → Basic",
    "loop": "Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "nue"
};

export const stats = {
  "id": "nue",
  "characterId": 2075,
  "name": "Nue",
  "rarity": "SR",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1524,
      "lv90": 7623
    },
    "atk": {
      "base": 284,
      "lv90": 1420
    },
    "matk": {
      "base": 170,
      "lv90": 851
    },
    "def": {
      "base": 208,
      "lv90": 416
    },
    "mdef": {
      "base": 83,
      "lv90": 166
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
      "base": 287,
      "lv90": 459
    },
    "magicCrit": {
      "base": 172,
      "lv90": 275
    },
    "hpRegen": {
      "base": 76,
      "lv90": 266
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
      "base": 71,
      "lv90": 71
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
      "HP": 457,
      "ATK": 85,
      "Block": 14,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 526,
      "ATK": 98,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 618,
      "ATK": 115,
      "Block": 18,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 686,
      "ATK": 128,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1118,
      "ATK": 224,
      "DEF": 51,
      "MDEF": 15,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3405,
      "ATK": 650,
      "Block": 68,
      "MP Charge": 16,
      "Accuracy": 30,
      "DEF": 51,
      "MDEF": 15,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Cost Down": 2
    },
    "gp2": {
      "ATK": 30,
      "MP Cost Down": 2
    },
    "gp3": {
      "ATK": 30,
      "MP Cost Down": 3
    },
    "gp4": {
      "ATK": 90,
      "MP Cost Down": 3
    },
    "gp5": {
      "ATK": 90,
      "MP Cost Down": 4
    },
    "gp6": {
      "ATK": 150,
      "MP Cost Down": 4
    },
    "gp7": {
      "ATK": 150,
      "MP Cost Down": 5
    },
    "gp8": {
      "ATK": 210,
      "MP Cost Down": 5
    },
    "gp9": {
      "ATK": 210,
      "MP Cost Down": 6
    },
    "gp10": {
      "ATK": 270,
      "MP Cost Down": 6
    },
    "total": {
      "ATK": 270,
      "MP Cost Down": 6
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 161,
      "ATK": 30,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 193,
      "ATK": 36,
      "Phys Crit": 7,
      "Block": 14
    },
    "g3": {
      "HP": 225,
      "ATK": 42,
      "Phys Crit": 8,
      "Accuracy": 12
    },
    "g4": {
      "HP": 257,
      "ATK": 48,
      "Phys Crit": 10,
      "Block": 19
    },
    "g5": {
      "HP": 289,
      "ATK": 54,
      "Phys Crit": 11,
      "MP Charge": 6
    },
    "g6": {
      "HP": 321,
      "ATK": 60,
      "Phys Crit": 12,
      "Accuracy": 18
    },
    "g7": {
      "HP": 353,
      "ATK": 66,
      "Phys Crit": 13,
      "Block": 26
    },
    "g8": {
      "HP": 385,
      "ATK": 72,
      "Phys Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 417,
      "ATK": 78,
      "Phys Crit": 16,
      "Block": 31
    },
    "g10": {
      "HP": 449,
      "ATK": 84,
      "Phys Crit": 17,
      "MP Charge": 9
    },
    "total": {
      "HP": 449,
      "ATK": 84,
      "Phys Crit": 17,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 24
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "ATK": 33
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "ATK": 43
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "ATK": 52
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "ATK": 62
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "ATK": 65
    }
  ]
};;;;;;;;
