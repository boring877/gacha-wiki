// Character data: ボクっ娘の花嫁-メイニアス
// Auto-generated from game data

export const info = {
  "slug": "tomboy-bride-meinias",
  "name": "[Tomboy Bride] Meinias",
  "displayName": "Tomboy Bride Meinias",
  "baseName": "Meinias",
  "title": "Tomboy Bride",
  "rarity": "SR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Fast",
  "range": 220,
  "weaponType": "Slash",
  "skillTypes": [
    "弱體化、妨害、MP回復"
  ],
  "image": "メイニアス",
  "introduction": "Front RowPhysicalAttacker",
  "profile": {
    "height": "160cm",
    "bust": "102cm (K Cup)",
    "waist": "66cm",
    "hips": "82cm"
  },
  "credits": {
    "illustration": {
      "japanese": "恋河ミノル",
      "romanized": ""
    },
    "voice": {
      "japanese": "相模恋",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2227
};








































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "ぐるぐる～！",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -18%-30 DOWN for 6 seconds and applies Physical Defense -18%-30 DOWN to self for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -18%-30 DOWN for 6 seconds and applies Physical Defense -18%-30 DOWN to self for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -18%-210 DOWN for 6 seconds and applies Physical Defense -18%-30 DOWN to self for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.7,
      "damageScaling": "330% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+15",
      "lvl1": "330% + 200",
      "lvl90": null,
      "effects": [
        "Physical Defense - Lv3",
        "Action Speed + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        },
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Hey hey, does it suit me?",
      "icon": "skill001/skill0019",
      "description": "Applies MP Regeneration 40 to self for 4 seconds, 3 nearest enemies 10s Physical Defense -14%-20 DOWN",
      "descriptionLv1": "Applies MP Regeneration 40 to self for 4 seconds, 3 nearest enemies 10s Physical Defense -14%-20 DOWN",
      "descriptionLv90": "Applies MP Regeneration 40 to self for 4 seconds, 3 nearest enemies 10s Physical Defense -14%-110 DOWN",
      "target": "Nearest Enemy",
      "castTime": 0.8,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "MP Regeneration + Lv5",
        "Physical Defense - Lv2"
      ],
      "buffEffects": [
        {
          "name": "MP Regeneration + Lv5",
          "value": 40,
          "type": "percent",
          "duration": 4
        },
        {
          "name": "Physical Defense - Lv2",
          "value": -20,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -1.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "すかーとぐるんぐるん!!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Bleed(LV 1) for 20 seconds and BlockDOWN(LV 1) for 10 seconds",
      "effect": "1200% + 500",
      "buffEffects": [
        {
          "name": "Bleed Ultimate Lv1",
          "value": -1500,
          "type": "flat",
          "duration": 20
        },
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
      "name": "すかーとぐるんぐるん!!",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Bleed(LV 2) for 20 seconds and BlockDOWN(LV 2) for 10 seconds",
      "effect": "1440% + 600",
      "buffEffects": [
        {
          "name": "Bleed Ultimate Lv2",
          "value": -2000,
          "type": "flat",
          "duration": 20
        },
        {
          "name": "Block- Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "すかーとぐるんぐるん!!",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Bleed(LV 3) for 20 seconds and BlockDOWN(LV 3) for 10 seconds",
      "effect": "1620% + 700",
      "buffEffects": [
        {
          "name": "Bleed Ultimate Lv3",
          "value": -2400,
          "type": "flat",
          "duration": 20
        },
        {
          "name": "Block- Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "すかーとぐるんぐるん!!",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Bleed(LV 4) for 20 seconds and BlockDOWN(LV 4) for 10 seconds",
      "effect": "1739% + 750",
      "buffEffects": [
        {
          "name": "Bleed Ultimate Lv4",
          "value": -2700,
          "type": "flat",
          "duration": 20
        },
        {
          "name": "Block- Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "すかーとぐるんぐるん!!",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Bleed(LV 5) for 20 seconds and BlockDOWN(LV 5) for 10 seconds",
      "effect": "1800% + 800",
      "buffEffects": [
        {
          "name": "Bleed Ultimate Lv5",
          "value": -3000,
          "type": "flat",
          "duration": 20
        },
        {
          "name": "Block- Ultimate Lv5",
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
      "name": "Physical Attack +",
      "icon": "skill001/skill1001",
      "description": "Gain Physical Attack UP (Medium)",
      "effect": "Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat",
          "gameText": "Physical Attack UP (Medium)"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Action Speed +",
      "icon": "skill001/skill1001",
      "description": "Gain Ultimate Damage UP (Medium), Action Speed UP (Small)",
      "effect": "Ultimate Damage + (+10%), Action Speed + (+5)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 10,
          "type": "percent",
          "gameText": "Ultimate Damage UP (Medium)"
        },
        {
          "name": "Action Speed +",
          "value": 5,
          "type": "flat",
          "gameText": "Action Speed UP (Small)"
        }
      ]
    }
  ],
  "name": "ボクっ娘の花嫁: メイニアス",
  "id": 2227,
  "rarity": "SR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "弱體化、妨害、MP回復"
  ],
  "baseStats": {
    "HP": 2159,
    "ATK": 203,
    "MATK": 121,
    "DEF": 18,
    "MDEF": 7
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.4"
  },
  "slug": "ボクっ娘の花嫁-メイニアス"
};

export const stats = {
  "id": "tomboy-bride-meinias",
  "characterId": 2227,
  "name": "[Tomboy Bride] Meinias",
  "rarity": "SR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "弱體化、妨害、MP回復"
  ],
  "baseStats": {
    "hp": {
      "base": 2159,
      "lv90": 10795
    },
    "atk": {
      "base": 203,
      "lv90": 1015
    },
    "matk": {
      "base": 121,
      "lv90": 608
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
      "base": 107,
      "lv90": 376
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
      "HP": 648,
      "ATK": 61,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 745,
      "ATK": 70,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 874,
      "ATK": 82,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 972,
      "ATK": 91,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1583,
      "ATK": 149,
      "DEF": 5,
      "MDEF": 2,
      "Heal Pwr": 16
    },
    "total": {
      "HP": 4822,
      "ATK": 453,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 5,
      "MDEF": 2,
      "Heal Pwr": 16
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 30
    },
    "gp2": {
      "ATK": 30,
      "Accuracy": 2
    },
    "gp3": {
      "ATK": 90,
      "Accuracy": 2
    },
    "gp4": {
      "ATK": 90,
      "Accuracy": 5
    },
    "gp5": {
      "ATK": 130,
      "Accuracy": 5
    },
    "gp6": {
      "ATK": 130,
      "Accuracy": 7
    },
    "gp7": {
      "ATK": 170,
      "Accuracy": 7
    },
    "gp8": {
      "ATK": 170,
      "Accuracy": 9
    },
    "gp9": {
      "ATK": 210,
      "Accuracy": 9
    },
    "gp10": {
      "ATK": 210,
      "Accuracy": 11
    },
    "total": {
      "ATK": 210,
      "Accuracy": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 227,
      "ATK": 21,
      "Phys Crit": 8,
      "Accuracy": 9
    },
    "g2": {
      "HP": 273,
      "ATK": 26,
      "Phys Crit": 10,
      "Block": 16
    },
    "g3": {
      "HP": 318,
      "ATK": 30,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 364,
      "ATK": 34,
      "Phys Crit": 13,
      "Block": 21
    },
    "g5": {
      "HP": 409,
      "ATK": 38,
      "Phys Crit": 15,
      "MP Charge": 5
    },
    "g6": {
      "HP": 455,
      "ATK": 43,
      "Phys Crit": 17,
      "Accuracy": 18
    },
    "g7": {
      "HP": 500,
      "ATK": 47,
      "Phys Crit": 19,
      "Block": 29
    },
    "g8": {
      "HP": 545,
      "ATK": 51,
      "Phys Crit": 20,
      "Accuracy": 21
    },
    "g9": {
      "HP": 591,
      "ATK": 56,
      "Phys Crit": 22,
      "Block": 34
    },
    "g10": {
      "HP": 636,
      "ATK": 60,
      "Phys Crit": 24,
      "MP Charge": 7
    },
    "total": {
      "HP": 636,
      "ATK": 60,
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
      "Accuracy": 3
    },
    {
      "grade": 3,
      "Phys Crit": 19
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "Phys Crit": 24
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "Phys Crit": 29
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "Phys Crit": 35
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "Phys Crit": 42
    }
  ]
};;;
