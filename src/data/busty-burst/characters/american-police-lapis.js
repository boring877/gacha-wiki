// Character data: american-police-lapis
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "american-police-lapis",
  "name": "American Police: Lapis",
  "displayName": "American Police: Lapis",
  "baseName": "Lapis",
  "title": "American Police",
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Fast",
  "range": 385,
  "weaponType": "Ranged",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Lapis",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "163cm",
    "bust": "92cm (F Cup)",
    "waist": "59cm",
    "hips": "90cm"
  },
  "credits": {
    "illustration": {
      "japanese": "馬肉太郎",
      "romanized": ""
    },
    "voice": {
      "japanese": "春山色葉",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2117
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Nal",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the nearest enemy and inflicts Burn(HP --200 per second) for 12 seconds and Action Speed DOWN for 7 seconds",
      "descriptionLv1": "Deals magic damage to the nearest enemy and inflicts Burn(HP --200 per second) for 12 seconds and Action Speed DOWN for 7 seconds",
      "descriptionLv90": "Deals magic damage to the nearest enemy and inflicts Burn(HP --2000 per second) for 12 seconds and Action Speed DOWN for 7 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.8,
      "damageScaling": "330% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+20",
      "lvl1": "330% + 300",
      "lvl90": null,
      "effects": [
        "Burn LvMax",
        "Action Speed - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Burn LvMax",
          "value": -200,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -20.0
        },
        {
          "name": "Action Speed - Lv3",
          "value": -14,
          "type": "flat",
          "duration": 7
        }
      ],
      "duration": 12
    },
    {
      "slot": 3,
      "name": "Krislid",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the nearest enemy and inflicts Freeze(Unable to act;HP --700 per second) for 2 seconds and Block-11 DOWN for 10 seconds",
      "descriptionLv1": "Deals magic damage to the nearest enemy and inflicts Freeze(Unable to act;HP --700 per second) for 2 seconds and Block-11 DOWN for 10 seconds",
      "descriptionLv90": "Deals magic damage to the nearest enemy and inflicts Freeze(Unable to act;HP --5200 per second) for 2 seconds and Block-23 DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.8,
      "damageScaling": "285% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+20",
      "lvl1": "285% + 150",
      "lvl90": "285% + 138",
      "effects": [
        "Freeze LvMax",
        "Block- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Freeze LvMax",
          "value": -700,
          "type": "flat",
          "duration": 2,
          "levelGrowth": -50.0
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.13
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Maradalmatar",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV 1) for 10 seconds, Ultimate activation beforeself12 Magic Attack UP(LV 1)",
      "effect": "370% + 350",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Attack + Ultimate Lv1",
          "value": 20,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 2,
      "name": "Nal",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the nearest enemy and inflicts Burn(HP --200 per second) for 12 seconds and Action Speed DOWN for 7 seconds",
      "effect": "330% + 300",
      "buffEffects": [
        {
          "name": "Burn LvMax",
          "value": -200,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Action Speed - Lv3",
          "value": -14,
          "type": "flat",
          "duration": 7
        }
      ]
    },
    {
      "rank": 3,
      "name": "Krislid",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the nearest enemy and inflicts Freeze(Unable to act;HP --700 per second) for 2 seconds and Block-11 DOWN for 10 seconds",
      "effect": "285% + 150",
      "buffEffects": [
        {
          "name": "Freeze LvMax",
          "value": -700,
          "type": "flat",
          "duration": 2
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Maradalmatar",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV 1) for 10 seconds, Ultimate activation beforeself12 Magic Attack UP(LV 1)",
      "effect": "370% + 350",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Attack + Ultimate Lv1",
          "value": 20,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 5,
      "name": "Maradalmatar",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV 2) for 10 seconds, Ultimate activation beforeself12 Magic Attack UP(LV 2)",
      "effect": "440% + 450",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv2",
          "value": -25,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Attack + Ultimate Lv2",
          "value": 25,
          "type": "flat",
          "duration": 12
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+389), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Magic Attack +",
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
      "name": "Skill Damage +, Skill Enhancement Regol Cost DOWNWater",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Skill Enhancement Regol Cost DOWNWater (+5%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Skill Enhancement Regol Cost DOWNWater",
          "value": 5,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "American Police: Lapis",
  "id": 2117,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 180,
    "MATK": 300,
    "DEF": 57,
    "MDEF": 143
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Skill3 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.60"
  },
  "slug": "american-police-lapis"
};

export const stats = {
  "id": "american-police-lapis",
  "characterId": 2117,
  "name": "【American Police】Lapis",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1819,
      "lv90": 9095
    },
    "atk": {
      "base": 180,
      "lv90": 902
    },
    "matk": {
      "base": 300,
      "lv90": 1503
    },
    "def": {
      "base": 57,
      "lv90": 114
    },
    "mdef": {
      "base": 143,
      "lv90": 286
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
      "base": 32,
      "lv90": 51
    },
    "magicCrit": {
      "base": 53,
      "lv90": 85
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
      "HP": 546,
      "MATK": 90,
      "Block": 15,
      "MP Charge": 4
    },
    "lb2": {
      "HP": 628,
      "MATK": 104,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 737,
      "MATK": 122,
      "Block": 20,
      "MP Charge": 6
    },
    "lb4": {
      "HP": 819,
      "MATK": 135,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1546,
      "MATK": 290,
      "DEF": 11,
      "MDEF": 41,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4276,
      "MATK": 741,
      "Block": 75,
      "MP Charge": 10,
      "Accuracy": 30,
      "DEF": 11,
      "MDEF": 41,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 40
    },
    "gp2": {
      "MATK": 40,
      "Accuracy": 3
    },
    "gp3": {
      "MATK": 120,
      "Accuracy": 3
    },
    "gp4": {
      "MATK": 120,
      "Accuracy": 7
    },
    "gp5": {
      "MATK": 200,
      "Accuracy": 7
    },
    "gp6": {
      "MATK": 200,
      "Accuracy": 10
    },
    "gp7": {
      "MATK": 280,
      "Accuracy": 10
    },
    "gp8": {
      "MATK": 280,
      "Accuracy": 13
    },
    "gp9": {
      "MATK": 360,
      "Accuracy": 13
    },
    "gp10": {
      "MATK": 360,
      "Accuracy": 16
    },
    "total": {
      "MATK": 360,
      "Accuracy": 16
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 191,
      "MATK": 32,
      "MDEF": 6,
      "Magic Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 230,
      "MATK": 38,
      "MDEF": 8,
      "Magic Crit": 1,
      "Block": 16
    },
    "g3": {
      "HP": 268,
      "MATK": 44,
      "MDEF": 9,
      "Magic Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 306,
      "MATK": 51,
      "MDEF": 10,
      "Magic Crit": 2,
      "Block": 21
    },
    "g5": {
      "HP": 345,
      "MATK": 57,
      "MDEF": 12,
      "Magic Crit": 2,
      "MP Charge": 4
    },
    "g6": {
      "HP": 383,
      "MATK": 63,
      "MDEF": 13,
      "Magic Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 421,
      "MATK": 70,
      "MDEF": 14,
      "Magic Crit": 2,
      "Block": 29
    },
    "g8": {
      "HP": 460,
      "MATK": 76,
      "MDEF": 16,
      "Magic Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 498,
      "MATK": 82,
      "MDEF": 17,
      "Magic Crit": 3,
      "Block": 34
    },
    "g10": {
      "HP": 536,
      "MATK": 89,
      "MDEF": 18,
      "Magic Crit": 3,
      "MP Charge": 6
    },
    "total": {
      "HP": 536,
      "MATK": 89,
      "MDEF": 18,
      "Magic Crit": 3,
      "MP Charge": 6
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 25
    },
    {
      "grade": 2,
      "MP Charge": 1
    },
    {
      "grade": 3,
      "MATK": 35
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "MATK": 45
    },
    {
      "grade": 6,
      "MP Charge": 2
    },
    {
      "grade": 7,
      "MATK": 55
    },
    {
      "grade": 8,
      "MP Charge": 2
    },
    {
      "grade": 9,
      "MATK": 65
    },
    {
      "grade": 10,
      "MP Charge": 3
    },
    {
      "grade": 11,
      "MATK": 68
    }
  ]
};;;;;;;;
