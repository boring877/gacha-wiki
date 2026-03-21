// Character data: gorgeous-noble-summer-gracie
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "gorgeous-noble-summer-gracie",
  "name": "Gorgeous & Noble Summer: Gracie",
  "displayName": "Gorgeous & Noble Summer: Gracie",
  "baseName": "Gracie",
  "title": "Gorgeous & Noble Summer",
  "rarity": "SR",
  "element": "Mind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slow",
  "range": 360,
  "weaponType": "Throw",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Gracie",
  "introduction": "Middle Row、Physical、Attacker",
  "profile": {
    "height": "167cm",
    "bust": "97cm (I Cup)",
    "waist": "60cm",
    "hips": "85cm"
  },
  "credits": {
    "illustration": {
      "japanese": "HMSM",
      "romanized": ""
    },
    "voice": {
      "japanese": "すずな",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2151
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Oh! One point!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy",
      "descriptionLv1": "Deals physical damage to the nearest enemy",
      "descriptionLv90": "Deals physical damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 1.5,
      "damageScaling": "400% ATK",
      "baseDamage": "+600",
      "levelGrowth": "+25",
      "lvl1": "400% + 600",
      "lvl90": "400% + 2825",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Here I come!",
      "icon": "skill001/skill0019",
      "description": "Applies Debuff Resistance UP to self for 4 seconds and Hit-Based Physical Damage UP(+300, 1 hit(s)) for 4 seconds",
      "descriptionLv1": "Applies Debuff Resistance UP to self for 4 seconds and Hit-Based Physical Damage UP(+300, 1 hit(s)) for 4 seconds",
      "descriptionLv90": "Applies Debuff Resistance UP to self for 4 seconds and Hit-Based Physical Damage UP(+300, 27001 hit(s)) for 4 seconds",
      "target": "Self",
      "castTime": 1.5,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Debuff Resistance LvMax",
        "Hit-Based Physical Damage +"
      ],
      "buffEffects": [
        {
          "name": "Debuff Resistance LvMax",
          "value": 1,
          "type": "percent",
          "duration": 4
        },
        {
          "name": "Hit-Based Physical Damage +",
          "value": 1,
          "type": "flat",
          "duration": 4,
          "levelGrowth": 300.0
        }
      ],
      "duration": 4
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Super Ultimate Gorgeous Noble Kill Shot!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 1) for 10 seconds",
      "effect": "1100% + 500",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Oh! One point!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy",
      "effect": "400% + 600",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "Here I come!",
      "icon": "skill001/skill0019",
      "description": "Applies Debuff Resistance UP to self for 4 seconds and Hit-Based Physical Damage UP(+300, 1 hit(s)) for 4 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Debuff Resistance LvMax",
          "value": 1,
          "type": "percent",
          "duration": 4
        },
        {
          "name": "Hit-Based Physical Damage +",
          "value": 1,
          "type": "flat",
          "duration": 4
        }
      ]
    },
    {
      "rank": 4,
      "name": "Super Ultimate Gorgeous Noble Kill Shot!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 1) for 10 seconds",
      "effect": "1100% + 500",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Super Ultimate Gorgeous Noble Kill Shot!",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 2) for 10 seconds",
      "effect": "1320% + 650",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 10
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
      "name": "Skill Damage +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+20%), Physical Critical Damage+ (+59%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 59,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Gorgeous & Noble Summer: Gracie",
  "id": 2151,
  "rarity": "SR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 2332,
    "ATK": 232,
    "MATK": 139,
    "DEF": 18,
    "MDEF": 7
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "gorgeous-noble-summer-gracie"
};

export const stats = {
  "id": "gorgeous-noble-summer-gracie",
  "characterId": 2151,
  "name": "【Gorgeous & Noble Summer】Gracie",
  "rarity": "SR",
  "element": "想",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 2332,
      "lv90": 11660
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
      "base": 18,
      "lv90": 36
    },
    "mdef": {
      "base": 7,
      "lv90": 14
    },
    "accuracy": {
      "base": 60,
      "lv90": 120
    },
    "block": {
      "base": 45,
      "lv90": 135
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
      "base": 116,
      "lv90": 407
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
      "base": 55,
      "lv90": 55
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
      "HP": 700,
      "ATK": 70,
      "Block": 14,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 805,
      "ATK": 80,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 944,
      "ATK": 94,
      "Block": 18,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1049,
      "ATK": 104,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1710,
      "ATK": 183,
      "DEF": 5,
      "MDEF": 2,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 5208,
      "ATK": 531,
      "Block": 68,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 5,
      "MDEF": 2,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 200
    },
    "gp2": {
      "HP": 200,
      "Phys Crit": 10
    },
    "gp3": {
      "HP": 500,
      "Phys Crit": 10
    },
    "gp4": {
      "HP": 500,
      "Phys Crit": 30
    },
    "gp5": {
      "HP": 800,
      "Phys Crit": 30
    },
    "gp6": {
      "HP": 800,
      "Phys Crit": 50
    },
    "gp7": {
      "HP": 1100,
      "Phys Crit": 50
    },
    "gp8": {
      "HP": 1100,
      "Phys Crit": 70
    },
    "gp9": {
      "HP": 1400,
      "Phys Crit": 70
    },
    "gp10": {
      "HP": 1400,
      "Phys Crit": 90
    },
    "total": {
      "HP": 1400,
      "Phys Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 245,
      "ATK": 24,
      "Phys Crit": 8,
      "Accuracy": 9
    },
    "g2": {
      "HP": 295,
      "ATK": 29,
      "Phys Crit": 10,
      "Block": 14
    },
    "g3": {
      "HP": 344,
      "ATK": 34,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 393,
      "ATK": 39,
      "Phys Crit": 13,
      "Block": 19
    },
    "g5": {
      "HP": 442,
      "ATK": 44,
      "Phys Crit": 15,
      "MP Charge": 5
    },
    "g6": {
      "HP": 491,
      "ATK": 49,
      "Phys Crit": 17,
      "Accuracy": 18
    },
    "g7": {
      "HP": 540,
      "ATK": 54,
      "Phys Crit": 19,
      "Block": 26
    },
    "g8": {
      "HP": 589,
      "ATK": 59,
      "Phys Crit": 20,
      "Accuracy": 21
    },
    "g9": {
      "HP": 638,
      "ATK": 63,
      "Phys Crit": 22,
      "Block": 31
    },
    "g10": {
      "HP": 687,
      "ATK": 68,
      "Phys Crit": 24,
      "MP Charge": 7
    },
    "total": {
      "HP": 687,
      "ATK": 68,
      "Phys Crit": 24,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 19
    },
    {
      "grade": 2,
      "Phys Crit": 14
    },
    {
      "grade": 3,
      "ATK": 27
    },
    {
      "grade": 4,
      "Phys Crit": 19
    },
    {
      "grade": 5,
      "ATK": 35
    },
    {
      "grade": 6,
      "Phys Crit": 24
    },
    {
      "grade": 7,
      "ATK": 43
    },
    {
      "grade": 8,
      "Phys Crit": 29
    },
    {
      "grade": 9,
      "ATK": 50
    },
    {
      "grade": 10,
      "Phys Crit": 34
    },
    {
      "grade": 11,
      "ATK": 55
    }
  ]
};;;;;;;;
