// Character data: ines
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "ines",
  "name": "Ines",
  "displayName": "Ines",
  "baseName": "Ines",
  "title": null,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 500,
  "weaponType": "Ranged",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Ines",
  "introduction": "Back Row、Physical、Attacker",
  "profile": {
    "height": "178cm",
    "bust": "116cm (O Cup)",
    "waist": "63cm",
    "hips": "98cm"
  },
  "credits": {
    "illustration": {
      "japanese": "オギノ",
      "romanized": ""
    },
    "voice": {
      "japanese": "結城ほのか",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2132
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Swift Arrow",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy, inflict1[Erosion]([Erosion]1Block 4 Down, max5) and Physical Defense -21%-40 DOWN for 6 seconds , [Erosion]5 when damage +50%",
      "descriptionLv1": "Deals physical damage to the nearest enemy, inflict1[Erosion]([Erosion]1Block 4 Down, max5) and Physical Defense -21%-40 DOWN for 6 seconds , [Erosion]5 when damage +50%",
      "descriptionLv90": "Deals physical damage to the nearest enemy, inflict1[Erosion]([Erosion]1Block 4 Down, max5) and Physical Defense -21%-220 DOWN for 6 seconds , [Erosion]5 when damage +50%",
      "target": "Nearest Enemy",
      "castTime": 1.3,
      "damageScaling": "300% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "300% + 500",
      "lvl90": "300% + 322",
      "effects": [
        "Erosion",
        "Physical Defense - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Erosion",
          "value": 0,
          "type": "flat",
          "duration": 999
        },
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        }
      ],
      "duration": 999
    },
    {
      "slot": 3,
      "name": "Firing Preparation",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack 20%+40 UP to self for 12 seconds and Accuracy 13 UP for 12 seconds",
      "descriptionLv1": "Applies Physical Attack 20%+40 UP to self for 12 seconds and Accuracy 13 UP for 12 seconds",
      "descriptionLv90": "Applies Physical Attack 20%+850 UP to self for 12 seconds and Accuracy 26 UP for 12 seconds",
      "target": "Self",
      "castTime": 1.3,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv5",
        "Accuracy + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 9.0
        },
        {
          "name": "Accuracy + Lv5",
          "value": 13,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 0.15
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Soul Strike",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, inflict1[Erosion]([Erosion]1Block 4 Down, max5) and Action Speed DOWN(LV 1) for 12 seconds dealdamage 6%restoreHP, [Erosion]5 whenUltimate damage +30%, inflict12 Mind Type damage taken by damage(LV 1)",
      "effect": "1000% + 800",
      "buffEffects": [
        {
          "name": "Erosion",
          "value": 0,
          "type": "flat",
          "duration": 999
        },
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 2,
      "name": "Soul Strike",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy, inflict1[Erosion]([Erosion]1Block 4 Down, max5) and Action Speed DOWN(LV 2) for 12 seconds dealdamage 7%restoreHP, [Erosion]5 whenUltimate damage +30%, inflict12 Mind Type damage taken by damage(LV 2)",
      "effect": "1200% + 1000",
      "buffEffects": [
        {
          "name": "Erosion",
          "value": 0,
          "type": "flat",
          "duration": 999
        },
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 3,
      "name": "Soul Strike",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy, inflict1[Erosion]([Erosion]1Block 4 Down, max5) and Action Speed DOWN(LV 3) for 12 seconds dealdamage 8%restoreHP, [Erosion]5 whenUltimate damage +30%, inflict12 Mind Type damage taken by damage(LV 3)",
      "effect": "1350% + 1200",
      "buffEffects": [
        {
          "name": "Erosion",
          "value": 0,
          "type": "flat",
          "duration": 999
        },
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -24,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "Soul Strike",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy, inflict1[Erosion]([Erosion]1Block 4 Down, max5) and Action Speed DOWN(LV 4) for 12 seconds dealdamage 9%restoreHP, [Erosion]5 whenUltimate damage +30%, inflict12 Mind Type damage taken by damage(LV 4)",
      "effect": "1450% + 1300",
      "buffEffects": [
        {
          "name": "Erosion",
          "value": 0,
          "type": "flat",
          "duration": 999
        },
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -27,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 5,
      "name": "Soul Strike",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy, inflict1[Erosion]([Erosion]1Block 4 Down, max5) and Action Speed DOWN(LV 5) for 12 seconds dealdamage 10%restoreHP, [Erosion]5 whenUltimate damage +30%, inflict12 Mind Type damage taken by damage(LV 5)",
      "effect": "1550% + 1400",
      "buffEffects": [
        {
          "name": "Erosion",
          "value": 0,
          "type": "flat",
          "duration": 999
        },
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -30,
          "type": "flat",
          "duration": 12
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
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
  "name": "Ines",
  "id": 2132,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2183,
    "ATK": 321,
    "MATK": 192,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.85"
  },
  "slug": "ines"
};

export const stats = {
  "id": "ines",
  "characterId": 2132,
  "name": "Ines",
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
      "base": 2183,
      "lv90": 10915
    },
    "atk": {
      "base": 321,
      "lv90": 1606
    },
    "matk": {
      "base": 192,
      "lv90": 963
    },
    "def": {
      "base": 143,
      "lv90": 263
    },
    "mdef": {
      "base": 57,
      "lv90": 137
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 40,
      "lv90": 120
    },
    "physCrit": {
      "base": 125,
      "lv90": 200
    },
    "magicCrit": {
      "base": 75,
      "lv90": 120
    },
    "hpRegen": {
      "base": 109,
      "lv90": 381
    },
    "mpRegen": {
      "base": 63,
      "lv90": 241
    },
    "healPwr": {
      "base": 100,
      "lv90": 250
    },
    "mpCharge": {
      "base": 58,
      "lv90": 58
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
      "HP": 655,
      "ATK": 96,
      "Block": 12,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 753,
      "ATK": 111,
      "Accuracy": 13,
      "Block": 14
    },
    "lb3": {
      "HP": 884,
      "ATK": 130,
      "Block": 16,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 982,
      "ATK": 145,
      "Accuracy": 17,
      "Block": 18
    },
    "lb5": {
      "HP": 1856,
      "ATK": 297,
      "DEF": 39,
      "MDEF": 14,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 5130,
      "ATK": 779,
      "Block": 60,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 39,
      "MDEF": 14,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp5": {
      "ATK": 200,
      "Accuracy": 7
    },
    "gp6": {
      "ATK": 200,
      "Accuracy": 10
    },
    "gp7": {
      "ATK": 280,
      "Accuracy": 10
    },
    "gp8": {
      "ATK": 280,
      "Accuracy": 13
    },
    "gp9": {
      "ATK": 360,
      "Accuracy": 13
    },
    "gp10": {
      "ATK": 360,
      "Accuracy": 16
    },
    "total": {
      "ATK": 360,
      "Accuracy": 16
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 230,
      "ATK": 34,
      "Phys Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 276,
      "ATK": 41,
      "Phys Crit": 3,
      "Block": 13
    },
    "g3": {
      "HP": 322,
      "ATK": 47,
      "Phys Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 368,
      "ATK": 54,
      "Phys Crit": 4,
      "Block": 17
    },
    "g5": {
      "HP": 414,
      "ATK": 61,
      "Phys Crit": 5,
      "MP Charge": 5
    },
    "g6": {
      "HP": 460,
      "ATK": 68,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 506,
      "ATK": 74,
      "Phys Crit": 6,
      "Block": 23
    },
    "g8": {
      "HP": 551,
      "ATK": 81,
      "Phys Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 597,
      "ATK": 88,
      "Phys Crit": 7,
      "Block": 27
    },
    "g10": {
      "HP": 643,
      "ATK": 95,
      "Phys Crit": 7,
      "MP Charge": 7
    },
    "total": {
      "HP": 643,
      "ATK": 95,
      "Phys Crit": 7,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 27
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "ATK": 37
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "ATK": 48
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "ATK": 59
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "ATK": 70
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "ATK": 74
    }
  ]
};;;;;;;;
