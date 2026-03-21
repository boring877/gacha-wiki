// Character data: pumpkin-witch-zilka
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "pumpkin-witch-zilka",
  "name": "Pumpkin Witch: Zilka",
  "displayName": "Pumpkin Witch: Zilka",
  "baseName": "Zilka",
  "title": "Pumpkin Witch",
  "rarity": "SR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 385,
  "weaponType": "Throw",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Zilka",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "158cm",
    "bust": "100cm (J Cup)",
    "waist": "61cm",
    "hips": "85cm"
  },
  "credits": {
    "illustration": {
      "japanese": "ねぶそく",
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
  "characterId": 2174
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Burn!",
      "icon": "skill001/skill0010",
      "description": "Deals magic damage to the nearest enemy and inflicts Burn(HP --80 per second) for 15 seconds and Magic Defense-30 DOWN for 6 seconds",
      "descriptionLv1": "Deals magic damage to the nearest enemy and inflicts Burn(HP --80 per second) for 15 seconds and Magic Defense-30 DOWN for 6 seconds",
      "descriptionLv90": "Deals magic damage to the nearest enemy and inflicts Burn(HP --1070 per second) for 15 seconds and Magic Defense-210 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.4,
      "damageScaling": "350% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+15",
      "lvl1": "350% + 300",
      "lvl90": "350% + 122",
      "effects": [
        "Burn Lv3",
        "Magic Defense- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Burn Lv3",
          "value": -80,
          "type": "flat",
          "duration": 15,
          "levelGrowth": -11.0
        },
        {
          "name": "Magic Defense- Lv3",
          "value": -30,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        }
      ],
      "duration": 15
    },
    {
      "slot": 3,
      "name": "Gao~... is that okay?",
      "icon": "skill001/skill0019",
      "description": "Applies Fire Type ATK UP to self for 10 seconds and Magic Attack +30 UP for 10 seconds",
      "descriptionLv1": "Applies Fire Type ATK UP to self for 10 seconds and Magic Attack +30 UP for 10 seconds",
      "descriptionLv90": "Applies Fire Type ATK UP to self for 10 seconds and Magic Attack +480 UP for 10 seconds",
      "target": "Self",
      "castTime": 1.45,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Fire Type ATK + Lv5",
        "Magic Attack + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Fire Type ATK + Lv5",
          "value": 20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack + Lv3",
          "value": 30,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 5.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "The big one is coming!!",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the nearest enemy and inflicts Fire Type Damage Taken UP(LV 1) for 8 seconds",
      "effect": "1200% + 700",
      "buffEffects": [
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Burn!",
      "icon": "skill001/skill0010",
      "description": "Deals magic damage to the nearest enemy and inflicts Burn(HP --80 per second) for 15 seconds and Magic Defense-30 DOWN for 6 seconds",
      "effect": "350% + 300",
      "buffEffects": [
        {
          "name": "Burn Lv3",
          "value": -80,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Magic Defense- Lv3",
          "value": -30,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Gao~... is that okay?",
      "icon": "skill001/skill0019",
      "description": "Applies Fire Type ATK UP to self for 10 seconds and Magic Attack +30 UP for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Fire Type ATK + Lv5",
          "value": 20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack + Lv3",
          "value": 30,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "The big one is coming!!",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the nearest enemy and inflicts Fire Type Damage Taken UP(LV 1) for 8 seconds",
      "effect": "1200% + 700",
      "buffEffects": [
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "The big one is coming!!",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to the nearest enemy and inflicts Fire Type Damage Taken UP(LV 2) for 8 seconds",
      "effect": "1440% + 800",
      "buffEffects": [
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv2",
          "value": 13,
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
      "name": "Ultimate Damage +, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+10%), Magic Attack + (+130)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Magic Attack +",
          "value": 130,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Pumpkin Witch: Zilka",
  "id": 2174,
  "rarity": "SR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1661,
    "ATK": 151,
    "MATK": 252,
    "DEF": 88,
    "MDEF": 88
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.9"
  },
  "slug": "pumpkin-witch-zilka"
};

export const stats = {
  "id": "pumpkin-witch-zilka",
  "characterId": 2174,
  "name": "【Pumpkin Witch】Zilka",
  "rarity": "SR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1661,
      "lv90": 8305
    },
    "atk": {
      "base": 151,
      "lv90": 757
    },
    "matk": {
      "base": 252,
      "lv90": 1262
    },
    "def": {
      "base": 88,
      "lv90": 176
    },
    "mdef": {
      "base": 88,
      "lv90": 176
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
      "base": 172,
      "lv90": 275
    },
    "magicCrit": {
      "base": 287,
      "lv90": 459
    },
    "hpRegen": {
      "base": 83,
      "lv90": 290
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
      "base": 59,
      "lv90": 59
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
      "MATK": 76,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 573,
      "MATK": 87,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 673,
      "MATK": 102,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 747,
      "MATK": 114,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1218,
      "MATK": 199,
      "DEF": 17,
      "MDEF": 25,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3709,
      "MATK": 578,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 17,
      "MDEF": 25,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 30
    },
    "gp2": {
      "MATK": 30,
      "MP Charge": 2
    },
    "gp3": {
      "MATK": 90,
      "MP Charge": 2
    },
    "gp4": {
      "MATK": 90,
      "MP Charge": 4
    },
    "gp5": {
      "MATK": 130,
      "MP Charge": 4
    },
    "gp6": {
      "MATK": 130,
      "MP Charge": 6
    },
    "gp7": {
      "MATK": 170,
      "MP Charge": 6
    },
    "gp8": {
      "MATK": 170,
      "MP Charge": 8
    },
    "gp9": {
      "MATK": 210,
      "MP Charge": 8
    },
    "gp10": {
      "MATK": 210,
      "MP Charge": 10
    },
    "total": {
      "MATK": 210,
      "MP Charge": 10
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 175,
      "MATK": 27,
      "MDEF": 6,
      "Magic Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 210,
      "MATK": 32,
      "MDEF": 7,
      "Magic Crit": 7,
      "Block": 16
    },
    "g3": {
      "HP": 245,
      "MATK": 37,
      "MDEF": 8,
      "Magic Crit": 8,
      "Accuracy": 12
    },
    "g4": {
      "HP": 280,
      "MATK": 43,
      "MDEF": 9,
      "Magic Crit": 10,
      "Block": 21
    },
    "g5": {
      "HP": 315,
      "MATK": 48,
      "MDEF": 10,
      "Magic Crit": 11,
      "MP Charge": 5
    },
    "g6": {
      "HP": 350,
      "MATK": 53,
      "MDEF": 11,
      "Magic Crit": 12,
      "Accuracy": 18
    },
    "g7": {
      "HP": 385,
      "MATK": 58,
      "MDEF": 13,
      "Magic Crit": 13,
      "Block": 29
    },
    "g8": {
      "HP": 420,
      "MATK": 64,
      "MDEF": 14,
      "Magic Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 455,
      "MATK": 69,
      "MDEF": 15,
      "Magic Crit": 16,
      "Block": 34
    },
    "g10": {
      "HP": 490,
      "MATK": 74,
      "MDEF": 16,
      "Magic Crit": 17,
      "MP Charge": 8
    },
    "total": {
      "HP": 490,
      "MATK": 74,
      "MDEF": 16,
      "Magic Crit": 17,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 21
    },
    {
      "grade": 2,
      "MP Charge": 1
    },
    {
      "grade": 3,
      "MATK": 29
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "MATK": 38
    },
    {
      "grade": 6,
      "MP Charge": 2
    },
    {
      "grade": 7,
      "MATK": 46
    },
    {
      "grade": 8,
      "MP Charge": 3
    },
    {
      "grade": 9,
      "MATK": 55
    },
    {
      "grade": 10,
      "MP Charge": 3
    },
    {
      "grade": 11,
      "MATK": 61
    }
  ]
};;;;;;;;
