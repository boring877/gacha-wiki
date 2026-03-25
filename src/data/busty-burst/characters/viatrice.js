// Character data: viatrice
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "viatrice",
  "name": "Viatrice",
  "displayName": "Viatrice",
  "baseName": "Viatrice",
  "title": null,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 550,
  "weaponType": "Throw",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Viatrice",
  "introduction": "Back Row、Magical、Attacker",
  "profile": {
    "height": "156cm",
    "bust": "108cm (N Cup)",
    "waist": "59cm",
    "hips": "90cm"
  },
  "credits": {
    "illustration": {
      "japanese": "黒川おとぎ",
      "romanized": ""
    },
    "voice": {
      "japanese": "高梨はなみ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2104
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Want to try a grown-up fire game?",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Burn(HP --200 per second) for 15 seconds and Block-11 DOWN for 8 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Burn(HP --200 per second) for 15 seconds and Block-11 DOWN for 8 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Burn(HP --2000 per second) for 15 seconds and Block-23 DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.28,
      "damageScaling": "105% ATK",
      "baseDamage": "+70",
      "levelGrowth": "+6",
      "lvl1": "105% + 70",
      "lvl90": "105% + 58",
      "effects": [
        "Burn LvMax",
        "Block- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Burn LvMax",
          "value": -200,
          "type": "flat",
          "duration": 15,
          "levelGrowth": -20.0
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -0.13
        }
      ],
      "duration": 15
    },
    {
      "slot": 3,
      "name": "Swoosh~ Boom boom~",
      "icon": "skill001/skill0019",
      "description": "Applies Hit-Based Shield(100%1 hit(s)) to self for 25 seconds and Magic Attack 20%+40 UP for 12 seconds",
      "descriptionLv1": "Applies Hit-Based Shield(100%1 hit(s)) to self for 25 seconds and Magic Attack 20%+40 UP for 12 seconds",
      "descriptionLv90": "Applies Hit-Based Shield(100%1 hit(s)) to self for 25 seconds and Magic Attack 20%+850 UP for 12 seconds",
      "target": "Self",
      "castTime": 1.28,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Hit-Based Shield",
        "Magic Attack + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Shield",
          "value": 100,
          "type": "percent",
          "duration": 25
        },
        {
          "name": "Magic Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 9.0
        }
      ],
      "duration": 25
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "It doesn't count unless it burns",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the nearest enemy and inflicts Burn(LV 1) for 15 seconds and Fire Type Damage Taken UP(LV 1) for 8 seconds",
      "effect": "900% + 900",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv1",
          "value": -2000,
          "type": "flat",
          "duration": 15
        },
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
      "name": "It doesn't count unless it burns",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to the nearest enemy and inflicts Burn(LV 2) for 15 seconds and Fire Type Damage Taken UP(LV 2) for 8 seconds",
      "effect": "1080% + 1100",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv2",
          "value": -2500,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "It doesn't count unless it burns",
      "icon": "skill001/skill0012_3",
      "description": "Deals magic damage to the nearest enemy and inflicts Burn(LV 3) for 15 seconds and Fire Type Damage Taken UP(LV 3) for 8 seconds",
      "effect": "1210% + 1250",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv3",
          "value": -3000,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "It doesn't count unless it burns",
      "icon": "skill001/skill0012_4",
      "description": "Deals magic damage to the nearest enemy and inflicts Burn(LV 4) for 15 seconds and Fire Type Damage Taken UP(LV 4) for 8 seconds",
      "effect": "1300% + 1350",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv4",
          "value": -3500,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "It doesn't count unless it burns",
      "icon": "skill001/skill0012_5",
      "description": "Deals magic damage to the nearest enemy and inflicts Burn(LV 5) for 15 seconds and Fire Type Damage Taken UP(LV 5) for 8 seconds",
      "effect": "1350% + 1400",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv5",
          "value": -4000,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv5",
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
      "name": "Magic Attack +, Block+",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+389), Block+ (+15)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Max HP +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Viatrice",
  "id": 2104,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1391,
    "ATK": 206,
    "MATK": 343,
    "DEF": 90,
    "MDEF": 226
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.8"
  },
  "slug": "viatrice"
};

export const stats = {
  "id": "viatrice",
  "characterId": 2104,
  "name": "Viatrice",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1391,
      "lv90": 6957
    },
    "atk": {
      "base": 206,
      "lv90": 1031
    },
    "matk": {
      "base": 343,
      "lv90": 1718
    },
    "def": {
      "base": 90,
      "lv90": 248
    },
    "mdef": {
      "base": 226,
      "lv90": 384
    },
    "accuracy": {
      "base": 60,
      "lv90": 120
    },
    "block": {
      "base": 70,
      "lv90": 190
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
      "base": 57,
      "lv90": 230
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
      "HP": 344,
      "MATK": 103,
      "Block": 18,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 395,
      "MATK": 119,
      "Accuracy": 13,
      "Block": 21
    },
    "lb3": {
      "HP": 464,
      "MATK": 139,
      "Block": 24,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 516,
      "MATK": 155,
      "Accuracy": 17,
      "Block": 27
    },
    "lb5": {
      "HP": 1097,
      "MATK": 318,
      "DEF": 25,
      "MDEF": 68,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 2816,
      "MATK": 834,
      "Block": 90,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 25,
      "MDEF": 68,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 40
    },
    "gp2": {
      "MATK": 40,
      "Block": 3
    },
    "gp3": {
      "MATK": 120,
      "Block": 3
    },
    "gp4": {
      "MATK": 120,
      "Block": 7
    },
    "gp5": {
      "MATK": 200,
      "Block": 7
    },
    "gp6": {
      "MATK": 200,
      "Block": 10
    },
    "gp7": {
      "MATK": 280,
      "Block": 10
    },
    "gp8": {
      "MATK": 280,
      "Block": 13
    },
    "gp9": {
      "MATK": 360,
      "Block": 13
    },
    "gp10": {
      "MATK": 360,
      "Block": 16
    },
    "total": {
      "MATK": 360,
      "Block": 16
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 121,
      "MATK": 36,
      "MDEF": 16,
      "Magic Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 145,
      "MATK": 43,
      "MDEF": 19,
      "Magic Crit": 1,
      "Block": 19
    },
    "g3": {
      "HP": 169,
      "MATK": 51,
      "MDEF": 22,
      "Magic Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 193,
      "MATK": 58,
      "MDEF": 25,
      "Magic Crit": 2,
      "Block": 25
    },
    "g5": {
      "HP": 217,
      "MATK": 65,
      "MDEF": 28,
      "Magic Crit": 2,
      "MP Charge": 5
    },
    "g6": {
      "HP": 241,
      "MATK": 72,
      "MDEF": 31,
      "Magic Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 265,
      "MATK": 80,
      "MDEF": 34,
      "Magic Crit": 2,
      "Block": 35
    },
    "g8": {
      "HP": 290,
      "MATK": 87,
      "MDEF": 37,
      "Magic Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 314,
      "MATK": 94,
      "MDEF": 40,
      "Magic Crit": 3,
      "Block": 41
    },
    "g10": {
      "HP": 338,
      "MATK": 101,
      "MDEF": 43,
      "Magic Crit": 3,
      "MP Charge": 7
    },
    "total": {
      "HP": 338,
      "MATK": 101,
      "MDEF": 43,
      "Magic Crit": 3,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 29
    },
    {
      "grade": 2,
      "Block": 5
    },
    {
      "grade": 3,
      "MATK": 40
    },
    {
      "grade": 4,
      "Block": 7
    },
    {
      "grade": 5,
      "MATK": 52
    },
    {
      "grade": 6,
      "Block": 9
    },
    {
      "grade": 7,
      "MATK": 63
    },
    {
      "grade": 8,
      "Block": 11
    },
    {
      "grade": 9,
      "MATK": 74
    },
    {
      "grade": 10,
      "Block": 13
    },
    {
      "grade": 11,
      "MATK": 78
    }
  ]
};;;;;;;;
