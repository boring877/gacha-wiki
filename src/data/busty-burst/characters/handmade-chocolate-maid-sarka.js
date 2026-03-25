// Character data: handmade-chocolate-maid-sarka
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "handmade-chocolate-maid-sarka",
  "name": "Handmade Chocolate Maid: Sarka",
  "displayName": "Handmade Chocolate Maid: Sarka",
  "baseName": "Sarka",
  "title": "Handmade Chocolate Maid",
  "rarity": "SR",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 240,
  "weaponType": "Slash",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "image": "Sarka",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "169cm",
    "bust": "104cm (K Cup)",
    "waist": "63cm",
    "hips": "94cm"
  },
  "credits": {
    "illustration": {
      "japanese": "藤村久",
      "romanized": ""
    },
    "voice": {
      "japanese": "ありかわ真奈",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2200
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Snacking is strictly forbidden!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Block-9 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Block-9 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Block-18 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.25,
      "damageScaling": "370% ATK",
      "baseDamage": "+600",
      "levelGrowth": "+20",
      "lvl1": "370% + 600",
      "lvl90": "370% + 591",
      "effects": [
        "Block- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Block- Lv3",
          "value": -9,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.1
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Mmm~! So sweet!!",
      "icon": "skill001/skill0013",
      "description": "Applies Physical Attack 15%+30 UP to self for 10 seconds and Action Speed 14%UP for 10 seconds",
      "descriptionLv1": "Applies Physical Attack 15%+30 UP to self for 10 seconds and Action Speed 14%UP for 10 seconds",
      "descriptionLv90": "Applies Physical Attack 15%+480 UP to self for 10 seconds and Action Speed 14%UP for 10 seconds",
      "target": "Self",
      "castTime": 1.3,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv3",
        "Action Speed + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv3",
          "value": 30,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 5.0
        },
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Thousand Piercings",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Magic Type Damage Taken UP(LV 1) for 8 seconds",
      "effect": "1100% + 500",
      "buffEffects": [
        {
          "name": "Magic Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Thousand Piercings",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Magic Type Damage Taken UP(LV 2) for 8 seconds",
      "effect": "1320% + 650",
      "buffEffects": [
        {
          "name": "Magic Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Thousand Piercings",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Magic Type Damage Taken UP(LV 3) for 8 seconds",
      "effect": "1470% + 800",
      "buffEffects": [
        {
          "name": "Magic Type Damage Taken+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Thousand Piercings",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Magic Type Damage Taken UP(LV 4) for 8 seconds",
      "effect": "1590% + 900",
      "buffEffects": [
        {
          "name": "Magic Type Damage Taken+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Thousand Piercings",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Magic Type Damage Taken UP(LV 5) for 8 seconds",
      "effect": "1700% + 1000",
      "buffEffects": [
        {
          "name": "Magic Type Damage Taken+ Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+20%), Physical Attack + (+130)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 130,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Handmade Chocolate Maid: Sarka",
  "id": 2200,
  "rarity": "SR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1661,
    "ATK": 232,
    "MATK": 139,
    "DEF": 71,
    "MDEF": 106
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.81"
  },
  "slug": "handmade-chocolate-maid-sarka"
};

export const stats = {
  "id": "handmade-chocolate-maid-sarka",
  "characterId": 2200,
  "name": "【Handmade Chocolate Maid】Sarka",
  "rarity": "SR",
  "element": "魔",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1661,
      "lv90": 8305
    },
    "atk": {
      "base": 232,
      "lv90": 1160
    },
    "matk": {
      "base": 139,
      "lv90": 695
    },
    "def": {
      "base": 71,
      "lv90": 142
    },
    "mdef": {
      "base": 106,
      "lv90": 212
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
      "base": 399,
      "lv90": 638
    },
    "magicCrit": {
      "base": 239,
      "lv90": 382
    },
    "hpRegen": {
      "base": 83,
      "lv90": 290
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
      "base": 56,
      "lv90": 56
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
      "HP": 498,
      "ATK": 70,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 573,
      "ATK": 80,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 673,
      "ATK": 94,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 747,
      "ATK": 104,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1218,
      "ATK": 183,
      "DEF": 21,
      "MDEF": 20,
      "Heal Pwr": 16
    },
    "total": {
      "HP": 3709,
      "ATK": 531,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 21,
      "MDEF": 20,
      "Heal Pwr": 16
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 30
    },
    "gp2": {
      "ATK": 30,
      "Phys Crit": 10
    },
    "gp3": {
      "ATK": 90,
      "Phys Crit": 10
    },
    "gp4": {
      "ATK": 90,
      "Phys Crit": 30
    },
    "gp5": {
      "ATK": 130,
      "Phys Crit": 30
    },
    "gp6": {
      "ATK": 130,
      "Phys Crit": 50
    },
    "gp7": {
      "ATK": 170,
      "Phys Crit": 50
    },
    "gp8": {
      "ATK": 170,
      "Phys Crit": 70
    },
    "gp9": {
      "ATK": 210,
      "Phys Crit": 70
    },
    "gp10": {
      "ATK": 210,
      "Phys Crit": 90
    },
    "total": {
      "ATK": 210,
      "Phys Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 175,
      "ATK": 24,
      "Phys Crit": 8,
      "Accuracy": 9
    },
    "g2": {
      "HP": 210,
      "ATK": 29,
      "Phys Crit": 10,
      "Block": 16
    },
    "g3": {
      "HP": 245,
      "ATK": 34,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 280,
      "ATK": 39,
      "Phys Crit": 13,
      "Block": 21
    },
    "g5": {
      "HP": 315,
      "ATK": 44,
      "Phys Crit": 15,
      "MP Charge": 5
    },
    "g6": {
      "HP": 350,
      "ATK": 49,
      "Phys Crit": 17,
      "Accuracy": 18
    },
    "g7": {
      "HP": 385,
      "ATK": 54,
      "Phys Crit": 19,
      "Block": 29
    },
    "g8": {
      "HP": 420,
      "ATK": 59,
      "Phys Crit": 20,
      "Accuracy": 21
    },
    "g9": {
      "HP": 455,
      "ATK": 63,
      "Phys Crit": 22,
      "Block": 34
    },
    "g10": {
      "HP": 490,
      "ATK": 68,
      "Phys Crit": 24,
      "MP Charge": 7
    },
    "total": {
      "HP": 490,
      "ATK": 68,
      "Phys Crit": 24,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Phys Crit": 13
    },
    {
      "grade": 2,
      "ATK": 21
    },
    {
      "grade": 3,
      "Phys Crit": 19
    },
    {
      "grade": 4,
      "ATK": 28
    },
    {
      "grade": 5,
      "Phys Crit": 24
    },
    {
      "grade": 6,
      "ATK": 35
    },
    {
      "grade": 7,
      "Phys Crit": 29
    },
    {
      "grade": 8,
      "ATK": 42
    },
    {
      "grade": 9,
      "Phys Crit": 35
    },
    {
      "grade": 10,
      "ATK": 49
    },
    {
      "grade": 11,
      "Phys Crit": 39
    }
  ]
};;;;;;;;
