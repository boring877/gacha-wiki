// Character data: 日傘の花嫁-麗鬼
// Auto-generated from game data

export const info = {
  "slug": "parasol-bride-reiki",
  "name": "[Parasol Bride] Reiki",
  "displayName": "Parasol Bride Reiki",
  "baseName": "Reiki",
  "title": "Parasol Bride",
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Fast",
  "range": 500,
  "weaponType": "Ranged",
  "skillTypes": [
    "弱體化、妨害、MP回復"
  ],
  "image": "麗鬼",
  "introduction": "Back RowMagicalAttacker",
  "profile": {
    "height": "158cm",
    "bust": "113cm (N Cup)",
    "waist": "63cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "London犬",
      "romanized": ""
    },
    "voice": {
      "japanese": "榛名れん",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2226
};








































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Flame Flower",
      "icon": "skill001/skill0010",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-21%-40 DOWN for 6 seconds and Accuracy -11 DOWN for 6 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-21%-40 DOWN for 6 seconds and Accuracy -11 DOWN for 6 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-21%-220 DOWN for 6 seconds and Accuracy -23 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.8,
      "damageScaling": "120% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+6",
      "lvl1": "120% + 200",
      "lvl90": "120% + 188",
      "effects": [
        "Magic Defense- Lv4",
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense- Lv4",
          "value": -40,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.13
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Calm Wind",
      "icon": "skill001/skill0019",
      "description": "Applies Action Speed 20%UP to self for 10 seconds and Magic Attack 18%+35 UP for 10 seconds, 10s Debuff Resistance 50%UP",
      "descriptionLv1": "Applies Action Speed 20%UP to self for 10 seconds and Magic Attack 18%+35 UP for 10 seconds, 10s Debuff Resistance 50%UP",
      "descriptionLv90": "Applies Action Speed 20%UP to self for 10 seconds and Magic Attack 18%+665 UP for 10 seconds, 10s Debuff Resistance 50%UP",
      "target": "Self",
      "castTime": 0.9,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Action Speed + Lv5",
        "Magic Attack + Lv4",
        "Debuff Resistance Lv3"
      ],
      "buffEffects": [
        {
          "name": "Action Speed + Lv5",
          "value": 20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 7.0
        },
        {
          "name": "Debuff Resistance Lv3",
          "value": 0,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Great Sun Hand Daiso Great Wheel",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the 3 nearest enemies, applies 3s and Fire Type Damage Taken UP(LV 1) for 8 seconds, 10s BlockDOWN(LV 1)",
      "effect": "400% + 500",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Great Sun Hand Daiso Great Wheel",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the 3 nearest enemies, applies 4s and Fire Type Damage Taken UP(LV 2) for 8 seconds, 10s BlockDOWN(LV 2)",
      "effect": "470% + 650",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Great Sun Hand Daiso Great Wheel",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to the 3 nearest enemies, applies 4s and Fire Type Damage Taken UP(LV 3) for 8 seconds, 10s BlockDOWN(LV 3)",
      "effect": "520% + 800",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv3",
          "value": -24,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Great Sun Hand Daiso Great Wheel",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to the 3 nearest enemies, applies 5s and Fire Type Damage Taken UP(LV 4) for 8 seconds, 10s BlockDOWN(LV 4)",
      "effect": "560% + 900",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv4",
          "value": -27,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Great Sun Hand Daiso Great Wheel",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to the 3 nearest enemies, applies 5s and Fire Type Damage Taken UP(LV 5) for 8 seconds, 10s BlockDOWN(LV 5)",
      "effect": "580% + 1000",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv5",
          "value": -30,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, MP Recovery",
      "icon": "skill001/skill1001",
      "description": "Gain Magic Attack UP (Large), MP Recovery",
      "effect": "Magic Attack + (+389), MP Recovery (+200%)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat",
          "gameText": "Magic Attack UP (Large)"
        },
        {
          "name": "MP Recovery",
          "value": 200,
          "type": "percent",
          "gameText": "MP Recovery"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Magic Attack +",
      "icon": "skill001/skill1001",
      "description": "Gain Ultimate Damage UP (Large), Magic Attack UP (Medium)",
      "effect": "Ultimate Damage + (+15%), Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent",
          "gameText": "Ultimate Damage UP (Large)"
        },
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat",
          "gameText": "Magic Attack UP (Medium)"
        }
      ]
    }
  ],
  "name": "日傘の花嫁: 麗鬼",
  "id": 2226,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "弱體化、妨害、MP回復"
  ],
  "baseStats": {
    "HP": 1964,
    "ATK": 180,
    "MATK": 300,
    "DEF": 100,
    "MDEF": 100
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.5"
  },
  "slug": "日傘の花嫁-麗鬼"
};

export const stats = {
  "id": "parasol-bride-reiki",
  "characterId": 2226,
  "name": "[Parasol Bride] Reiki",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "弱體化、妨害、MP回復"
  ],
  "baseStats": {
    "hp": {
      "base": 1964,
      "lv90": 9822
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
      "base": 100,
      "lv90": 200
    },
    "mdef": {
      "base": 100,
      "lv90": 200
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
      "base": 32,
      "lv90": 51
    },
    "magicCrit": {
      "base": 53,
      "lv90": 85
    },
    "hpRegen": {
      "base": 98,
      "lv90": 343
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
      "base": 53,
      "lv90": 53
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
      "HP": 589,
      "MATK": 90,
      "Block": 14,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 678,
      "MATK": 104,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 796,
      "MATK": 122,
      "Block": 18,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 884,
      "MATK": 135,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1670,
      "MATK": 279,
      "DEF": 20,
      "MDEF": 33,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4617,
      "MATK": 730,
      "Block": 68,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 20,
      "MDEF": 33,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "Magic Crit": 10
    },
    "gp2": {
      "MATK": 40,
      "Magic Crit": 10
    },
    "gp3": {
      "MATK": 40,
      "Magic Crit": 30
    },
    "gp4": {
      "MATK": 120,
      "Magic Crit": 30
    },
    "gp5": {
      "MATK": 120,
      "Magic Crit": 50
    },
    "gp6": {
      "MATK": 200,
      "Magic Crit": 50
    },
    "gp7": {
      "MATK": 200,
      "Magic Crit": 70
    },
    "gp8": {
      "MATK": 280,
      "Magic Crit": 70
    },
    "gp9": {
      "MATK": 280,
      "Magic Crit": 90
    },
    "gp10": {
      "MATK": 360,
      "Magic Crit": 90
    },
    "total": {
      "MATK": 360,
      "Magic Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 207,
      "MATK": 32,
      "MDEF": 6,
      "Magic Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 248,
      "MATK": 38,
      "MDEF": 8,
      "Magic Crit": 1,
      "Block": 14
    },
    "g3": {
      "HP": 290,
      "MATK": 44,
      "MDEF": 9,
      "Magic Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 331,
      "MATK": 51,
      "MDEF": 10,
      "Magic Crit": 2,
      "Block": 19
    },
    "g5": {
      "HP": 372,
      "MATK": 57,
      "MDEF": 12,
      "Magic Crit": 2,
      "MP Charge": 4
    },
    "g6": {
      "HP": 414,
      "MATK": 63,
      "MDEF": 13,
      "Magic Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 455,
      "MATK": 70,
      "MDEF": 14,
      "Magic Crit": 2,
      "Block": 26
    },
    "g8": {
      "HP": 496,
      "MATK": 76,
      "MDEF": 16,
      "Magic Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 538,
      "MATK": 82,
      "MDEF": 17,
      "Magic Crit": 3,
      "Block": 31
    },
    "g10": {
      "HP": 579,
      "MATK": 89,
      "MDEF": 18,
      "Magic Crit": 3,
      "MP Charge": 7
    },
    "total": {
      "HP": 579,
      "MATK": 89,
      "MDEF": 18,
      "Magic Crit": 3,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Charge": 1
    },
    {
      "grade": 2,
      "MATK": 27
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "MATK": 36
    },
    {
      "grade": 5,
      "MP Charge": 2
    },
    {
      "grade": 6,
      "MATK": 45
    },
    {
      "grade": 7,
      "MP Charge": 3
    },
    {
      "grade": 8,
      "MATK": 54
    },
    {
      "grade": 9,
      "MP Charge": 3
    },
    {
      "grade": 10,
      "MATK": 63
    },
    {
      "grade": 11,
      "MP Charge": 4
    }
  ]
};;;
