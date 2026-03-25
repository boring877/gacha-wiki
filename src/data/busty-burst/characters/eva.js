// Character data: eva
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "eva",
  "name": "Eva",
  "displayName": "Eva",
  "baseName": "Eva",
  "title": null,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slightly Slow",
  "range": 185,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff",
    "Taunt"
  ],
  "image": "Eva",
  "introduction": "Front Row、Physical、Tank",
  "profile": {
    "height": "146cm",
    "bust": "103cm (O Cup)",
    "waist": "53cm",
    "hips": "80cm"
  },
  "credits": {
    "illustration": {
      "japanese": "西條サトル",
      "romanized": ""
    },
    "voice": {
      "japanese": "花宮楓",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2131
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Dragon Halberd Flash",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy -15 DOWN for 7 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Accuracy -15 DOWN for 7 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Accuracy -33 DOWN for 7 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.4,
      "damageScaling": "320% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+25",
      "lvl1": "320% + 200",
      "lvl90": "320% + 182",
      "effects": [
        "Accuracy - LvMax"
      ],
      "buffEffects": [
        {
          "name": "Accuracy - LvMax",
          "value": -15,
          "type": "flat",
          "duration": 7,
          "levelGrowth": -0.2
        }
      ],
      "duration": 7
    },
    {
      "slot": 3,
      "name": "I'll kill you!",
      "icon": "skill001/skill0019",
      "description": "Applies Taunt to self for 12 seconds and Physical Attack 20%+40 UP for 12 seconds , 12 HP Regeneration 5%+150",
      "descriptionLv1": "Applies Taunt to self for 12 seconds and Physical Attack 20%+40 UP for 12 seconds , 12 HP Regeneration 5%+150",
      "descriptionLv90": "Applies Taunt to self for 12 seconds and Physical Attack 20%+850 UP for 12 seconds , 12 HP Regeneration 5%+150",
      "target": "Self",
      "castTime": 1.44,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Taunt",
        "Physical Attack + Lv5",
        "HP Regeneration+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 12
        },
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 9.0
        },
        {
          "name": "HP Regeneration+ Lv3",
          "value": 5,
          "type": "percent",
          "duration": 12,
          "levelGrowth": 7.0
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Dragon Tyrant Slash Charge Blade",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 1) for 10 seconds, 4s Blind for",
      "effect": "1200% + 1000",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ]
    },
    {
      "rank": 2,
      "name": "Dragon Tyrant Slash Charge Blade",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 2) for 10 seconds, 5s Blind for",
      "effect": "1440% + 1200",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        }
      ]
    },
    {
      "rank": 3,
      "name": "Dragon Tyrant Slash Charge Blade",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 3) for 10 seconds, 5s Blind for",
      "effect": "1620% + 1380",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        }
      ]
    },
    {
      "rank": 4,
      "name": "Dragon Tyrant Slash Charge Blade",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 4) for 10 seconds, 6s Blind for",
      "effect": "1739% + 1500",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 5,
      "name": "Dragon Tyrant Slash Charge Blade",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 5) for 10 seconds, 6s Blind for",
      "effect": "1800% + 1600",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Shield",
      "icon": "skill001/skill1001",
      "effect": "Max HP + (+3444), Shield (+9999%), Shield (+9999%)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        },
        {
          "name": "Shield",
          "value": 9999,
          "type": "percent"
        },
        {
          "name": "Shield",
          "value": 9999,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Block+",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Block+ (+10)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Block+",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Eva",
  "id": 2131,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Taunt"
  ],
  "baseStats": {
    "HP": 3458,
    "ATK": 198,
    "MATK": 118,
    "DEF": 35,
    "MDEF": 14
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slightly Slow",
    "speedValue": "1.05"
  },
  "slug": "eva"
};

export const stats = {
  "id": "eva",
  "characterId": 2131,
  "name": "Eva",
  "rarity": "SSR",
  "element": "魔",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Taunt"
  ],
  "baseStats": {
    "hp": {
      "base": 3458,
      "lv90": 17292
    },
    "atk": {
      "base": 198,
      "lv90": 990
    },
    "matk": {
      "base": 118,
      "lv90": 593
    },
    "def": {
      "base": 35,
      "lv90": 70
    },
    "mdef": {
      "base": 14,
      "lv90": 28
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 60,
      "lv90": 180
    },
    "physCrit": {
      "base": 416,
      "lv90": 665
    },
    "magicCrit": {
      "base": 249,
      "lv90": 398
    },
    "hpRegen": {
      "base": 172,
      "lv90": 604
    },
    "mpRegen": {
      "base": 60,
      "lv90": 238
    },
    "healPwr": {
      "base": 100,
      "lv90": 250
    },
    "mpCharge": {
      "base": 65,
      "lv90": 65
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
      "HP": 1038,
      "ATK": 59,
      "Block": 18,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 1193,
      "ATK": 68,
      "Accuracy": 13,
      "Block": 21
    },
    "lb3": {
      "HP": 1401,
      "ATK": 80,
      "Block": 24,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1556,
      "ATK": 89,
      "Accuracy": 17,
      "Block": 27
    },
    "lb5": {
      "HP": 3199,
      "ATK": 168,
      "DEF": 10,
      "MDEF": 3,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 8387,
      "ATK": 464,
      "Block": 90,
      "MP Charge": 13,
      "Accuracy": 30,
      "DEF": 10,
      "MDEF": 3,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
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
      "HP": 364,
      "ATK": 21,
      "Phys Crit": 9,
      "Accuracy": 9
    },
    "g2": {
      "HP": 437,
      "ATK": 25,
      "Phys Crit": 11,
      "Block": 19
    },
    "g3": {
      "HP": 510,
      "ATK": 29,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 583,
      "ATK": 33,
      "Phys Crit": 14,
      "Block": 25
    },
    "g5": {
      "HP": 655,
      "ATK": 38,
      "Phys Crit": 16,
      "MP Charge": 5
    },
    "g6": {
      "HP": 728,
      "ATK": 42,
      "Phys Crit": 18,
      "Accuracy": 18
    },
    "g7": {
      "HP": 801,
      "ATK": 46,
      "Phys Crit": 19,
      "Block": 35
    },
    "g8": {
      "HP": 874,
      "ATK": 50,
      "Phys Crit": 21,
      "Accuracy": 21
    },
    "g9": {
      "HP": 947,
      "ATK": 54,
      "Phys Crit": 23,
      "Block": 41
    },
    "g10": {
      "HP": 1019,
      "ATK": 58,
      "Phys Crit": 25,
      "MP Charge": 8
    },
    "total": {
      "HP": 1019,
      "ATK": 58,
      "Phys Crit": 25,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 288
    },
    {
      "grade": 2,
      "Phys Crit": 15
    },
    {
      "grade": 3,
      "HP": 404
    },
    {
      "grade": 4,
      "Phys Crit": 20
    },
    {
      "grade": 5,
      "HP": 519
    },
    {
      "grade": 6,
      "Phys Crit": 25
    },
    {
      "grade": 7,
      "HP": 634
    },
    {
      "grade": 8,
      "Phys Crit": 30
    },
    {
      "grade": 9,
      "HP": 749
    },
    {
      "grade": 10,
      "Phys Crit": 35
    },
    {
      "grade": 11,
      "HP": 786
    }
  ]
};;;;;;;;
