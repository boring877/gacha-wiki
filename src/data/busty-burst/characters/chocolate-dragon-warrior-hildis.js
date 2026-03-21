// Character data: chocolate-dragon-warrior-hildis
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "chocolate-dragon-warrior-hildis",
  "name": "Chocolate Dragon Warrior: Hildis",
  "displayName": "Chocolate Dragon Warrior: Hildis",
  "baseName": "Hildis",
  "title": "Chocolate Dragon Warrior",
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Fast",
  "range": 240,
  "weaponType": "Strike",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Hildis",
  "introduction": "Front Row、Magical、Attacker",
  "profile": {
    "height": "169cm",
    "bust": "98cm (H Cup)",
    "waist": "64cm",
    "hips": "89cm"
  },
  "credits": {
    "illustration": {
      "japanese": "London犬",
      "romanized": ""
    },
    "voice": {
      "japanese": "野々村紗夜",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2110
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Take it, you want it too right!",
      "icon": "skill001/skill0010",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense-50 DOWN for 6 seconds",
      "descriptionLv1": "Deals magic damage to the nearest enemy and inflicts Magic Defense-50 DOWN for 6 seconds",
      "descriptionLv90": "Deals magic damage to the nearest enemy and inflicts Magic Defense-320 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.55,
      "damageScaling": "330% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+25",
      "lvl1": "330% + 150",
      "lvl90": "330% + -117",
      "effects": [
        "Magic Defense- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense- Lv5",
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
      "name": "Ugh... is this the way of the strong...?",
      "icon": "skill001/skill0019",
      "description": "Applies Magic Critical Damage 50 UP to self for 10 seconds and MP Regeneration 40 for 4 seconds",
      "descriptionLv1": "Applies Magic Critical Damage 50 UP to self for 10 seconds and MP Regeneration 40 for 4 seconds",
      "descriptionLv90": "Applies Magic Critical Damage 680 UP to self for 10 seconds and MP Regeneration 40 for 4 seconds",
      "target": "Self",
      "castTime": 0.55,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Magic Critical Damage+ Lv4",
        "MP Regeneration + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Magic Critical Damage+ Lv4",
          "value": 50,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 7.0
        },
        {
          "name": "MP Regeneration + Lv5",
          "value": 40,
          "type": "percent",
          "duration": 4
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Shameful Burst Sweet Cannon",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the nearest enemy and inflicts BlockDOWN(LV 1) for 10 seconds and Magic Defense DOWN(LV 1) for 10 seconds , 2s Charm for",
      "effect": "1400% + 700",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 2,
      "name": "Take it, you want it too right!",
      "icon": "skill001/skill0010",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense-50 DOWN for 6 seconds",
      "effect": "330% + 150",
      "buffEffects": [
        {
          "name": "Magic Defense- Lv5",
          "value": -50,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Ugh... is this the way of the strong...?",
      "icon": "skill001/skill0019",
      "description": "Applies Magic Critical Damage 50 UP to self for 10 seconds and MP Regeneration 40 for 4 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Magic Critical Damage+ Lv4",
          "value": 50,
          "type": "flat",
          "duration": 10
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
      "name": "Shameful Burst Sweet Cannon",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the nearest enemy and inflicts BlockDOWN(LV 1) for 10 seconds and Magic Defense DOWN(LV 1) for 10 seconds , 2s Charm for",
      "effect": "1400% + 700",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 5,
      "name": "Shameful Burst Sweet Cannon",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to the nearest enemy and inflicts BlockDOWN(LV 2) for 10 seconds and Magic Defense DOWN(LV 2) for 10 seconds , 3s Charm for",
      "effect": "1650% + 900",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv2",
          "value": -18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Defense- Ultimate Lv2",
          "value": -25,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Charm",
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
      "name": "Magic Attack +, Magic Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+389), Magic Critical Damage+ (+90)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Magic Critical Damage+",
          "value": 90,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Max HP +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Chocolate Dragon Warrior: Hildis",
  "id": 2110,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2259,
    "ATK": 134,
    "MATK": 224,
    "DEF": 32,
    "MDEF": 82
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.36"
  },
  "slug": "chocolate-dragon-warrior-hildis"
};

export const stats = {
  "id": "chocolate-dragon-warrior-hildis",
  "characterId": 2110,
  "name": "【Chocolate Dragon Warrior】Hildis",
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
      "base": 2259,
      "lv90": 11296
    },
    "atk": {
      "base": 134,
      "lv90": 672
    },
    "matk": {
      "base": 224,
      "lv90": 1120
    },
    "def": {
      "base": 32,
      "lv90": 64
    },
    "mdef": {
      "base": 82,
      "lv90": 164
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
      "base": 124,
      "lv90": 198
    },
    "magicCrit": {
      "base": 207,
      "lv90": 331
    },
    "hpRegen": {
      "base": 112,
      "lv90": 394
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
      "base": 45,
      "lv90": 45
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
      "HP": 678,
      "MATK": 67,
      "Block": 14,
      "MP Charge": 4
    },
    "lb2": {
      "HP": 779,
      "MATK": 77,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 915,
      "MATK": 91,
      "Block": 18,
      "MP Charge": 5
    },
    "lb4": {
      "HP": 1017,
      "MATK": 101,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1920,
      "MATK": 207,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 5309,
      "MATK": 543,
      "Block": 68,
      "MP Charge": 9,
      "Accuracy": 30,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 40
    },
    "gp2": {
      "MATK": 40,
      "MP Charge": 2
    },
    "gp3": {
      "MATK": 120,
      "MP Charge": 2
    },
    "gp4": {
      "MATK": 120,
      "MP Charge": 4
    },
    "gp5": {
      "MATK": 200,
      "MP Charge": 4
    },
    "gp6": {
      "MATK": 200,
      "MP Charge": 6
    },
    "gp7": {
      "MATK": 280,
      "MP Charge": 6
    },
    "gp8": {
      "MATK": 280,
      "MP Charge": 8
    },
    "gp9": {
      "MATK": 360,
      "MP Charge": 8
    },
    "gp10": {
      "MATK": 360,
      "MP Charge": 10
    },
    "total": {
      "MATK": 360,
      "MP Charge": 10
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 238,
      "MATK": 24,
      "MDEF": 4,
      "Magic Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 285,
      "MATK": 28,
      "MDEF": 4,
      "Magic Crit": 5,
      "Block": 14
    },
    "g3": {
      "HP": 333,
      "MATK": 33,
      "MDEF": 5,
      "Magic Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 381,
      "MATK": 38,
      "MDEF": 6,
      "Magic Crit": 7,
      "Block": 19
    },
    "g5": {
      "HP": 428,
      "MATK": 42,
      "MDEF": 7,
      "Magic Crit": 8,
      "MP Charge": 3
    },
    "g6": {
      "HP": 476,
      "MATK": 47,
      "MDEF": 7,
      "Magic Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 523,
      "MATK": 52,
      "MDEF": 8,
      "Magic Crit": 10,
      "Block": 26
    },
    "g8": {
      "HP": 571,
      "MATK": 57,
      "MDEF": 9,
      "Magic Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 618,
      "MATK": 61,
      "MDEF": 10,
      "Magic Crit": 11,
      "Block": 31
    },
    "g10": {
      "HP": 666,
      "MATK": 66,
      "MDEF": 10,
      "Magic Crit": 12,
      "MP Charge": 5
    },
    "total": {
      "HP": 666,
      "MATK": 66,
      "MDEF": 10,
      "Magic Crit": 12,
      "MP Charge": 5
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 19
    },
    {
      "grade": 2,
      "Magic Crit": 7
    },
    {
      "grade": 3,
      "MATK": 26
    },
    {
      "grade": 4,
      "Magic Crit": 10
    },
    {
      "grade": 5,
      "MATK": 34
    },
    {
      "grade": 6,
      "Magic Crit": 12
    },
    {
      "grade": 7,
      "MATK": 41
    },
    {
      "grade": 8,
      "Magic Crit": 15
    },
    {
      "grade": 9,
      "MATK": 49
    },
    {
      "grade": 10,
      "Magic Crit": 17
    },
    {
      "grade": 11,
      "MATK": 51
    }
  ]
};;;;;;;;
