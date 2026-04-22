// Character data: fionore
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "fionore",
  "name": "Fionore",
  "displayName": "Fionore",
  "baseName": "Fionore",
  "title": null,
  "rarity": "SSR",
  "element": "Light",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 215,
  "weaponType": "Pierce",
  "skillTypes": [
    "Debuff",
    "Taunt"
  ],
  "image": "Fionore",
  "introduction": "Front Row、Physical、Tank",
  "profile": {
    "height": "163cm",
    "bust": "106cm (K Cup)",
    "waist": "62cm",
    "hips": "98cm"
  },
  "credits": {
    "illustration": {
      "japanese": "逢魔刻壱",
      "romanized": ""
    },
    "voice": {
      "japanese": "潮谷篭愛",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2123
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Slender Moon",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Critical Damage-13%-35 DOWN for 6 seconds and Magic Critical Damage-13%-35 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Critical Damage-13%-35 DOWN for 6 seconds and Magic Critical Damage-13%-35 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Critical Damage-13%-215 DOWN for 6 seconds and Magic Critical Damage-13%-35 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.25,
      "damageScaling": "270% ATK",
      "baseDamage": "+250",
      "levelGrowth": "+20",
      "lvl1": "270% + 250",
      "lvl90": "270% + 72",
      "effects": [
        "Physical Critical Damage- Lv4",
        "Magic Critical Damage- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage- Lv4",
          "value": -13,
          "type": "percent",
          "duration": 6,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Critical Damage- Lv4",
          "value": -35,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Ah, my armor...",
      "icon": "skill001/skill0019",
      "description": "Applies Taunt to self for 12 seconds and inflicts Accuracy -11 DOWN on all enemies for 12 seconds, 12 Action Speed -17%DOWN",
      "descriptionLv1": "Applies Taunt to self for 12 seconds and inflicts Accuracy -11 DOWN on all enemies for 12 seconds, 12 Action Speed -17%DOWN",
      "descriptionLv90": "Applies Taunt to self for 12 seconds and inflicts Accuracy -23 DOWN on all enemies for 12 seconds, 12 Action Speed -17%DOWN",
      "target": "All Enemies",
      "castTime": 1.25,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Taunt",
        "Accuracy - Lv4",
        "Action Speed - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 12
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -0.13
        },
        {
          "name": "Action Speed - Lv4",
          "value": -17,
          "type": "flat",
          "duration": 12
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Tiger Roar Heaven Returning Strike",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Holy Type Damage Taken UP(LV 1) for 8 seconds, Ultimate activation beforeself6 Holy Type ATK UP(LV 1)",
      "effect": "1000% + 600",
      "buffEffects": [
        {
          "name": "Holy Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Holy Type ATK + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 2,
      "name": "Tiger Roar Heaven Returning Strike",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Holy Type Damage Taken UP(LV 2) for 8 seconds, Ultimate activation beforeself6 Holy Type ATK UP(LV 2)",
      "effect": "1200% + 800",
      "buffEffects": [
        {
          "name": "Holy Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Holy Type ATK + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Tiger Roar Heaven Returning Strike",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Holy Type Damage Taken UP(LV 3) for 8 seconds, Ultimate activation beforeself6 Holy Type ATK UP(LV 3)",
      "effect": "1350% + 950",
      "buffEffects": [
        {
          "name": "Holy Type Damage Taken+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Holy Type ATK + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 4,
      "name": "Tiger Roar Heaven Returning Strike",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Holy Type Damage Taken UP(LV 4) for 8 seconds, Ultimate activation beforeself6 Holy Type ATK UP(LV 4)",
      "effect": "1450% + 1050",
      "buffEffects": [
        {
          "name": "Holy Type Damage Taken+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Holy Type ATK + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 5,
      "name": "Tiger Roar Heaven Returning Strike",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Holy Type Damage Taken UP(LV 5) for 8 seconds, Ultimate activation beforeself6 Holy Type ATK UP(LV 5)",
      "effect": "1500% + 1100",
      "buffEffects": [
        {
          "name": "Holy Type Damage Taken+ Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Holy Type ATK + Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 6
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Physical Attack +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+3444), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        },
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Block+",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Block+ (+15)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Fionore",
  "id": 2123,
  "rarity": "SSR",
  "element": "Light",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Taunt"
  ],
  "baseStats": {
    "HP": 3950,
    "ATK": 238,
    "MATK": 142,
    "DEF": 35,
    "MDEF": 14
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.85"
  },
  "slug": "fionore"
};

export const stats = {
  "id": "fionore",
  "characterId": 2123,
  "name": "Fionore",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Taunt"
  ],
  "baseStats": {
    "hp": {
      "base": 3950,
      "lv90": 19322
    },
    "atk": {
      "base": 238,
      "lv90": 1190
    },
    "matk": {
      "base": 142,
      "lv90": 713
    },
    "def": {
      "base": 35,
      "lv90": 60
    },
    "mdef": {
      "base": 14,
      "lv90": 39
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
      "base": 53,
      "lv90": 85
    },
    "magicCrit": {
      "base": 32,
      "lv90": 51
    },
    "hpRegen": {
      "base": 192,
      "lv90": 672
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
      "base": 76,
      "lv90": 76
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
      "HP": 1245,
      "ATK": 71,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 1432,
      "ATK": 82,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 1681,
      "ATK": 96,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1868,
      "ATK": 107,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 3673,
      "ATK": 202,
      "DEF": 9,
      "MDEF": 4,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 9899,
      "ATK": 558,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 9,
      "MDEF": 4,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 300
    },
    "gp2": {
      "HP": 300,
      "ATK": 40
    },
    "gp3": {
      "HP": 750,
      "ATK": 40
    },
    "gp4": {
      "HP": 750,
      "ATK": 120
    },
    "gp5": {
      "HP": 1200,
      "ATK": 120
    },
    "gp6": {
      "HP": 1200,
      "ATK": 200
    },
    "gp7": {
      "HP": 1650,
      "ATK": 200
    },
    "gp8": {
      "HP": 1650,
      "ATK": 280
    },
    "gp9": {
      "HP": 2100,
      "ATK": 280
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
      "HP": 437,
      "ATK": 25,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 524,
      "ATK": 30,
      "Phys Crit": 1,
      "Block": 16
    },
    "g3": {
      "HP": 612,
      "ATK": 35,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 699,
      "ATK": 40,
      "Phys Crit": 2,
      "Block": 21
    },
    "g5": {
      "HP": 786,
      "ATK": 45,
      "Phys Crit": 2,
      "MP Charge": 5
    },
    "g6": {
      "HP": 874,
      "ATK": 50,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 961,
      "ATK": 55,
      "Phys Crit": 2,
      "Block": 29
    },
    "g8": {
      "HP": 1049,
      "ATK": 60,
      "Phys Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 1136,
      "ATK": 65,
      "Phys Crit": 3,
      "Block": 34
    },
    "g10": {
      "HP": 1223,
      "ATK": 70,
      "Phys Crit": 3,
      "MP Charge": 7
    },
    "total": {
      "HP": 1223,
      "ATK": 70,
      "Phys Crit": 3,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 320
    },
    {
      "grade": 2,
      "Block": 5
    },
    {
      "grade": 3,
      "HP": 448
    },
    {
      "grade": 4,
      "Block": 6
    },
    {
      "grade": 5,
      "HP": 576
    },
    {
      "grade": 6,
      "Block": 8
    },
    {
      "grade": 7,
      "HP": 705
    },
    {
      "grade": 8,
      "Block": 9
    },
    {
      "grade": 9,
      "HP": 833
    },
    {
      "grade": 10,
      "Block": 11
    },
    {
      "grade": 11,
      "HP": 875
    }
  ]
};;;;;;;;
