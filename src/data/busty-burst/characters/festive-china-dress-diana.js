// Character data: festive-china-dress-diana
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "festive-china-dress-diana",
  "name": "Festive China Dress: Diana",
  "displayName": "Festive China Dress: Diana",
  "baseName": "Diana",
  "title": "Festive China Dress",
  "rarity": "SR",
  "element": "Holy",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Fast",
  "range": 230,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Diana",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "175cm",
    "bust": "105cm (M Cup)",
    "waist": "57cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "旭",
      "romanized": ""
    },
    "voice": {
      "japanese": "香澄りょう",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2165
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Rathbrink Style - Circle",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, activation beforeApplies Physical Attack +30 UP to self for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy, activation beforeApplies Physical Attack +30 UP to self for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy, activation beforeApplies Physical Attack +480 UP to self for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.66,
      "damageScaling": "350% ATK",
      "baseDamage": "+250",
      "levelGrowth": "+25",
      "lvl1": "350% + 250",
      "lvl90": "350% + 695",
      "effects": [
        "Physical Attack + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv3",
          "value": 30,
          "type": "flat",
          "duration": 6,
          "levelGrowth": 5.0
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Rathbrink Style Body Art - Inverted Scale",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -30 DOWN for 12 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -30 DOWN for 12 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -210 DOWN for 12 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.66,
      "damageScaling": "300% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+20",
      "lvl1": "300% + 150",
      "lvl90": "300% + -28",
      "effects": [
        "Physical Defense - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -2.0
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Rathbrink Style Ultimate - Flying Hawk Cyclone Blade",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts BlockDOWN(LV 1) for 10 seconds",
      "effect": "1200% + 700",
      "buffEffects": [
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
      "name": "Rathbrink Style - Circle",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, activation beforeApplies Physical Attack +30 UP to self for 6 seconds",
      "effect": "350% + 250",
      "buffEffects": [
        {
          "name": "Physical Attack + Lv3",
          "value": 30,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Rathbrink Style Body Art - Inverted Scale",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -30 DOWN for 12 seconds",
      "effect": "300% + 150",
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "Rathbrink Style Ultimate - Flying Hawk Cyclone Blade",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts BlockDOWN(LV 1) for 10 seconds",
      "effect": "1200% + 700",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Rathbrink Style Ultimate - Flying Hawk Cyclone Blade",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts BlockDOWN(LV 2) for 10 seconds",
      "effect": "1440% + 900",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
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
  "name": "Festive China Dress: Diana",
  "id": 2165,
  "rarity": "SR",
  "element": "Holy",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1661,
    "ATK": 204,
    "MATK": 122,
    "DEF": 90,
    "MDEF": 86
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.36"
  },
  "slug": "festive-china-dress-diana"
};

export const stats = {
  "id": "festive-china-dress-diana",
  "characterId": 2165,
  "name": "【Festive China Dress】Diana",
  "rarity": "SR",
  "element": "聖",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1661,
      "lv90": 8305
    },
    "atk": {
      "base": 204,
      "lv90": 1023
    },
    "matk": {
      "base": 122,
      "lv90": 613
    },
    "def": {
      "base": 90,
      "lv90": 187
    },
    "mdef": {
      "base": 86,
      "lv90": 166
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
      "base": 191,
      "lv90": 305
    },
    "magicCrit": {
      "base": 114,
      "lv90": 182
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
      "base": 42,
      "lv90": 42
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
      "ATK": 61,
      "Block": 15,
      "MP Charge": 4
    },
    "lb2": {
      "HP": 573,
      "ATK": 71,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 673,
      "ATK": 83,
      "Block": 20,
      "MP Charge": 5
    },
    "lb4": {
      "HP": 747,
      "ATK": 92,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1272,
      "ATK": 150,
      "DEF": 25,
      "MDEF": 16,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 3763,
      "ATK": 457,
      "Block": 75,
      "MP Charge": 9,
      "Accuracy": 30,
      "DEF": 25,
      "MDEF": 16,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "Phys Crit": 10
    },
    "gp2": {
      "ATK": 30,
      "Phys Crit": 10
    },
    "gp3": {
      "ATK": 30,
      "Phys Crit": 30
    },
    "gp4": {
      "ATK": 90,
      "Phys Crit": 30
    },
    "gp5": {
      "ATK": 90,
      "Phys Crit": 50
    },
    "gp6": {
      "ATK": 130,
      "Phys Crit": 50
    },
    "gp7": {
      "ATK": 130,
      "Phys Crit": 70
    },
    "gp8": {
      "ATK": 170,
      "Phys Crit": 70
    },
    "gp9": {
      "ATK": 170,
      "Phys Crit": 90
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
      "ATK": 22,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 210,
      "ATK": 26,
      "Phys Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 245,
      "ATK": 30,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 280,
      "ATK": 34,
      "Phys Crit": 6,
      "Block": 21
    },
    "g5": {
      "HP": 315,
      "ATK": 39,
      "Phys Crit": 7,
      "MP Charge": 4
    },
    "g6": {
      "HP": 350,
      "ATK": 43,
      "Phys Crit": 8,
      "Accuracy": 18
    },
    "g7": {
      "HP": 385,
      "ATK": 47,
      "Phys Crit": 9,
      "Block": 29
    },
    "g8": {
      "HP": 420,
      "ATK": 52,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 455,
      "ATK": 56,
      "Phys Crit": 10,
      "Block": 34
    },
    "g10": {
      "HP": 490,
      "ATK": 60,
      "Phys Crit": 11,
      "MP Charge": 5
    },
    "total": {
      "HP": 490,
      "ATK": 60,
      "Phys Crit": 11,
      "MP Charge": 5
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Phys Crit": 6
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "Phys Crit": 9
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "Phys Crit": 11
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "Phys Crit": 14
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "Phys Crit": 17
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
