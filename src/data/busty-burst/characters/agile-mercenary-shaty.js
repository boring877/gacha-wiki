// Character data: agile-mercenary-shaty
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "agile-mercenary-shaty",
  "name": "Agile Mercenary: Shaty",
  "displayName": "Agile Mercenary: Shaty",
  "baseName": "Shaty",
  "title": "Agile Mercenary",
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Very Slow",
  "range": 550,
  "weaponType": "Ranged",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Shaty",
  "introduction": "Back Row、Physical、Attacker",
  "profile": {
    "height": "167cm",
    "bust": "102cm (J Cup)",
    "waist": "61cm",
    "hips": "92cm"
  },
  "credits": {
    "illustration": {
      "japanese": "みるちょ",
      "romanized": ""
    },
    "voice": {
      "japanese": "南十字いっせい",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2213
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Onehole Rapidfire",
      "icon": "skill001/skill0009",
      "description": "3 to enemiesphysical damage and inflicts Physical Defense -21%-40 DOWN for 6 seconds and Block-9 DOWN for 6 seconds",
      "descriptionLv1": "3 to enemiesphysical damage and inflicts Physical Defense -21%-40 DOWN for 6 seconds and Block-9 DOWN for 6 seconds",
      "descriptionLv90": "3 to enemiesphysical damage and inflicts Physical Defense -21%-220 DOWN for 6 seconds and Block-18 DOWN for 6 seconds",
      "target": "Back Enemy",
      "castTime": 1.7,
      "damageScaling": "100% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+6",
      "lvl1": "100% + 100",
      "lvl90": "100% + 91",
      "effects": [
        "Physical Defense - Lv4",
        "Block- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        },
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
      "name": "Strongbullet 12 7×99",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the farthest enemy, guaranteed hit, guaranteed crit, activation beforeApplies Hit-Based Physical Damage UP(50%+500, 3 hit(s)) to self for 10 seconds",
      "descriptionLv1": "Deals physical damage to the farthest enemy, guaranteed hit, guaranteed crit, activation beforeApplies Hit-Based Physical Damage UP(50%+500, 3 hit(s)) to self for 10 seconds",
      "descriptionLv90": "Deals physical damage to the farthest enemy, guaranteed hit, guaranteed crit, activation beforeApplies Hit-Based Physical Damage UP(50%+500, 45003 hit(s)) to self for 10 seconds",
      "target": "Back Enemy",
      "castTime": 2.0,
      "damageScaling": "310% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+20",
      "lvl1": "310% + 300",
      "lvl90": "310% + 44800",
      "effects": [
        "Hit-Based Physical Damage +"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Physical Damage +",
          "value": 3,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 500.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Invisible of Death",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the farthest enemy, inflict 4s and Magic Type Damage Taken UP(LV 1) for 8 seconds",
      "effect": "1000% + 800",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
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
      "name": "Invisible of Death",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the farthest enemy, inflict 5s and Magic Type Damage Taken UP(LV 2) for 8 seconds",
      "effect": "1200% + 1000",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
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
      "name": "Invisible of Death",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the farthest enemy, inflict 5s and Magic Type Damage Taken UP(LV 3) for 8 seconds",
      "effect": "1250% + 1150",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
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
      "name": "Invisible of Death",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the farthest enemy, inflict6s Blind for and Magic Type Damage Taken UP(LV 4) for 8 seconds",
      "effect": "1350% + 1300",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
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
      "name": "Invisible of Death",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the farthest enemy, inflict6s Blind for and Magic Type Damage Taken UP(LV 5) for 8 seconds",
      "effect": "1450% + 1400",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
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
      "name": "Taunt Resistance LvMax, Magic Type ATK +",
      "icon": "skill001/skill1001",
      "effect": "Taunt Resistance LvMax (+1%), Magic Type ATK + (+3%)",
      "effectValues": [
        {
          "name": "Taunt Resistance LvMax",
          "value": 1,
          "type": "percent"
        },
        {
          "name": "Magic Type ATK +",
          "value": 3,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Agile Mercenary: Shaty",
  "id": 2213,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1375,
    "ATK": 429,
    "MATK": 257,
    "DEF": 240,
    "MDEF": 240
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic",
    "loop": "Basic → Skill2 → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.6"
  },
  "slug": "agile-mercenary-shaty"
};

export const stats = {
  "id": "agile-mercenary-shaty",
  "characterId": 2213,
  "name": "【Agile Mercenary】Shaty",
  "rarity": "SSR",
  "element": "魔",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1375,
      "lv90": 6875
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
      "base": 240,
      "lv90": 480
    },
    "mdef": {
      "base": 240,
      "lv90": 480
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
      "base": 68,
      "lv90": 239
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
      "base": 72,
      "lv90": 72
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
      "HP": 413,
      "ATK": 129,
      "Block": 14,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 474,
      "ATK": 148,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 557,
      "ATK": 174,
      "Block": 18,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 619,
      "ATK": 193,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1169,
      "ATK": 398,
      "DEF": 78,
      "MDEF": 48,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3232,
      "ATK": 1042,
      "Block": 68,
      "MP Charge": 16,
      "Accuracy": 30,
      "DEF": 78,
      "MDEF": 48,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "Accuracy": 2
    },
    "gp3": {
      "ATK": 120,
      "Accuracy": 2
    },
    "gp4": {
      "ATK": 120,
      "Accuracy": 5
    },
    "gp5": {
      "ATK": 200,
      "Accuracy": 5
    },
    "gp6": {
      "ATK": 200,
      "Accuracy": 7
    },
    "gp7": {
      "ATK": 280,
      "Accuracy": 7
    },
    "gp8": {
      "ATK": 280,
      "Accuracy": 9
    },
    "gp9": {
      "ATK": 360,
      "Accuracy": 9
    },
    "gp10": {
      "ATK": 360,
      "Accuracy": 11
    },
    "total": {
      "ATK": 360,
      "Accuracy": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 145,
      "ATK": 45,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 174,
      "ATK": 54,
      "Phys Crit": 1,
      "Block": 14
    },
    "g3": {
      "HP": 203,
      "ATK": 63,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 232,
      "ATK": 72,
      "Phys Crit": 2,
      "Block": 19
    },
    "g5": {
      "HP": 261,
      "ATK": 81,
      "Phys Crit": 2,
      "MP Charge": 6
    },
    "g6": {
      "HP": 290,
      "ATK": 90,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 318,
      "ATK": 100,
      "Phys Crit": 2,
      "Block": 26
    },
    "g8": {
      "HP": 347,
      "ATK": 109,
      "Phys Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 376,
      "ATK": 118,
      "Phys Crit": 3,
      "Block": 31
    },
    "g10": {
      "HP": 405,
      "ATK": 127,
      "Phys Crit": 3,
      "MP Charge": 9
    },
    "total": {
      "HP": 405,
      "ATK": 127,
      "Phys Crit": 3,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 36
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "ATK": 50
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "ATK": 64
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "ATK": 79
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "ATK": 93
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "ATK": 103
    }
  ]
};;;;;;;;
