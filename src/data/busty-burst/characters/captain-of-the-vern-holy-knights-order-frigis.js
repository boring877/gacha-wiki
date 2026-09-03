// Character data: captain-of-the-vern-holy-knights-order-frigis
// Auto-generated from game data

export const info = {
  "slug": "captain-of-the-vern-holy-knights-order-frigis",
  "name": "Captain of the Vern Holy Knights Order】Frigis",
  "displayName": "Captain of the Vern Holy Knights Order】Frigis",
  "baseName": "Captain of the Vern Holy Knights Order】Frigis",
  "title": null,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slow",
  "range": 250,
  "weaponType": "Pierce",
  "skillTypes": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "image": "Captain of the Vern Holy Knights Order】Frigis",
  "introduction": "Front RowPhysicalAttacker",
  "profile": {
    "height": "167cm",
    "bust": "106cm (K Cup)",
    "waist": "63cm",
    "hips": "92cm"
  },
  "credits": {
    "illustration": {
      "japanese": "失笑宣告",
      "romanized": ""
    },
    "voice": {
      "japanese": "千歳百合花",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2164
};














































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Should I be gentler?",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit, guaranteed crit",
      "descriptionLv1": "Deals physical damage to the nearest enemy, guaranteed hit, guaranteed crit",
      "descriptionLv90": "Deals physical damage to the nearest enemy, guaranteed hit, guaranteed crit",
      "target": "Nearest Enemy",
      "castTime": 1.35,
      "damageScaling": "300% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+25",
      "lvl1": "300% + 300",
      "lvl90": "300% + 2525",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Are we continuing?",
      "icon": "skill001/skill0011",
      "description": "1 enemies 15s [Intimidation](treated asBlind, Block-20%, -20%), 15s Physical Critical Damage-15%-40 DOWN, 15s Magic Critical Damage-15%-40 DOWN",
      "descriptionLv1": "1 enemies 15s [Intimidation](treated asBlind, Block-20%, -20%), 15s Physical Critical Damage-15%-40 DOWN, 15s Magic Critical Damage-15%-40 DOWN",
      "descriptionLv90": "1 enemies 15s [Intimidation](treated asBlind, Block-20%, -20%), 15s Physical Critical Damage-15%-310 DOWN, 15s Magic Critical Damage-15%-40 DOWN",
      "target": "Nearest Enemy",
      "castTime": 1.5,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Intimidation",
        "Physical Critical Damage- Lv5",
        "Magic Critical Damage- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Intimidation",
          "value": 0,
          "type": "unknown",
          "duration": 15
        },
        {
          "name": "Physical Critical Damage- Lv5",
          "value": -15,
          "type": "percent",
          "duration": 15,
          "levelGrowth": -3.0
        },
        {
          "name": "Magic Critical Damage- Lv5",
          "value": -40,
          "type": "flat",
          "duration": 15,
          "levelGrowth": -3.0
        }
      ],
      "duration": 15
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Bern Sacred Spear Art - Phantom Godspeed",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit, applies 5s, applies to self 10s [Haste](action speed 10%UP), enemies haveIntimidation status,, before Ultimate activation applies to self 10sdamageUP(LV 1)",
      "effect": "1000% + 1000",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Haste Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Bern Sacred Spear Art - Phantom Godspeed",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit, applies 6s, applies to self 10s [Haste](action speed 13%UP), enemies haveIntimidation status, before Ultimate activation applies to self 10sdamageUP(LV 2)",
      "effect": "1200% + 1200",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Haste Lv2",
          "value": 13,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Bern Sacred Spear Art - Phantom Godspeed",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit, applies 6s, applies to self 10s [Haste](action speed 16%UP), enemies haveIntimidation status, before Ultimate activation applies to self 10sdamageUP(LV 3)",
      "effect": "1350% + 1380",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Haste Lv3",
          "value": 16,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Bern Sacred Spear Art - Phantom Godspeed",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit, applies 7s, applies to self 10s [Haste](action speed 18%UP), enemies haveIntimidation status, before Ultimate activation applies to self 10sdamageUP(LV 4)",
      "effect": "1450% + 1500",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 7
        },
        {
          "name": "Haste Lv4",
          "value": 18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Bern Sacred Spear Art - Phantom Godspeed",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit, applies 7s, applies to self 10s [Haste](action speed 20%UP), enemies haveIntimidation status, before Ultimate activation applies to self 10sdamageUP(LV 5)",
      "effect": "1500% + 1600",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 7
        },
        {
          "name": "Haste Lv5",
          "value": 20,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Skill Damage +, Skill Enhancement",
      "icon": "skill001/skill1001",
      "description": "Gain Skill Damage UP (Medium), Specific Skill Enhancement",
      "effect": "Skill Damage + (+20%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent",
          "gameText": "Skill Damage UP (Medium)"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, MP Recovery",
      "icon": "skill001/skill1001",
      "description": "Gain Ultimate Damage UP (Medium), MP Recovery",
      "effect": "Ultimate Damage + (+10%), MP Recovery (+200%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 10,
          "type": "percent",
          "gameText": "Ultimate Damage UP (Medium)"
        },
        {
          "name": "MP Recovery",
          "value": 200,
          "type": "percent",
          "gameText": "MP Recovery"
        }
      ]
    }
  ],
  "name": "Captain of the Vern Holy Knights Order】Frigis",
  "id": 2164,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 1573,
    "ATK": 437,
    "MATK": 262,
    "DEF": 176,
    "MDEF": 176
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.1"
  },
  "slug": "captain-of-the-vern-holy-knights-order-frigis"
};

export const stats = {
  "id": "captain-of-the-vern-holy-knights-order-frigis",
  "characterId": 2164,
  "name": "Captain of the Vern Holy Knights Order】Frigis",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "hp": {
      "base": 1573,
      "lv90": 7865
    },
    "atk": {
      "base": 437,
      "lv90": 2185
    },
    "matk": {
      "base": 262,
      "lv90": 1311
    },
    "def": {
      "base": 176,
      "lv90": 352
    },
    "mdef": {
      "base": 176,
      "lv90": 352
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
      "base": 78,
      "lv90": 125
    },
    "magicCrit": {
      "base": 47,
      "lv90": 75
    },
    "hpRegen": {
      "base": 78,
      "lv90": 274
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
      "base": 71,
      "lv90": 71
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
      "HP": 472,
      "ATK": 131,
      "Block": 18,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 543,
      "ATK": 151,
      "Accuracy": 13,
      "Block": 21
    },
    "lb3": {
      "HP": 637,
      "ATK": 177,
      "Block": 24,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 708,
      "ATK": 197,
      "Accuracy": 17,
      "Block": 27
    },
    "lb5": {
      "HP": 1456,
      "ATK": 405,
      "DEF": 57,
      "MDEF": 36,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3816,
      "ATK": 1061,
      "Block": 90,
      "MP Charge": 16,
      "Accuracy": 30,
      "DEF": 57,
      "MDEF": 36,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "HP": 300,
      "ATK": 40
    },
    "gp3": {
      "HP": 300,
      "ATK": 120
    },
    "gp4": {
      "HP": 750,
      "ATK": 120
    },
    "gp5": {
      "HP": 750,
      "ATK": 200
    },
    "gp6": {
      "HP": 1200,
      "ATK": 200
    },
    "gp7": {
      "HP": 1200,
      "ATK": 280
    },
    "gp8": {
      "HP": 1650,
      "ATK": 280
    },
    "gp9": {
      "HP": 1650,
      "ATK": 360
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
      "HP": 166,
      "ATK": 46,
      "Phys Crit": 2,
      "Accuracy": 9
    },
    "g2": {
      "HP": 199,
      "ATK": 55,
      "Phys Crit": 2,
      "Block": 19
    },
    "g3": {
      "HP": 232,
      "ATK": 64,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 265,
      "ATK": 74,
      "Phys Crit": 3,
      "Block": 25
    },
    "g5": {
      "HP": 298,
      "ATK": 83,
      "Phys Crit": 3,
      "MP Charge": 6
    },
    "g6": {
      "HP": 331,
      "ATK": 92,
      "Phys Crit": 3,
      "Accuracy": 18
    },
    "g7": {
      "HP": 364,
      "ATK": 101,
      "Phys Crit": 4,
      "Block": 35
    },
    "g8": {
      "HP": 397,
      "ATK": 110,
      "Phys Crit": 4,
      "Accuracy": 21
    },
    "g9": {
      "HP": 431,
      "ATK": 120,
      "Phys Crit": 4,
      "Block": 41
    },
    "g10": {
      "HP": 464,
      "ATK": 129,
      "Phys Crit": 5,
      "MP Charge": 9
    },
    "total": {
      "HP": 464,
      "ATK": 129,
      "Phys Crit": 5,
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
      "HP": 142
    },
    {
      "grade": 3,
      "ATK": 51
    },
    {
      "grade": 4,
      "HP": 189
    },
    {
      "grade": 5,
      "ATK": 66
    },
    {
      "grade": 6,
      "HP": 236
    },
    {
      "grade": 7,
      "ATK": 80
    },
    {
      "grade": 8,
      "HP": 283
    },
    {
      "grade": 9,
      "ATK": 95
    },
    {
      "grade": 10,
      "HP": 330
    },
    {
      "grade": 11,
      "ATK": 105
    }
  ]
};;;
