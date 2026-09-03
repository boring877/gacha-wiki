// Character data: ビキニでお祝い-ヴィアトリーチェ
// Auto-generated from game data

export const info = {
  "slug": "bikini-celebration-viatrice",
  "name": "[Bikini Celebration] Viatrice",
  "displayName": "Bikini Celebration Viatrice",
  "baseName": "Viatrice",
  "title": "Bikini Celebration",
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Fast",
  "range": 350,
  "weaponType": "Ranged",
  "skillTypes": [
    "強化、弱體化、妨害"
  ],
  "image": "ヴィアトリーチェ",
  "introduction": "Middle RowMagicalAttacker",
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
  "characterId": 2235
};








































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "おしゃれしてみたら？",
      "icon": "skill001/skill0005",
      "description": "3 nearest enemiesmagic damage, on activation,self 6s Magic Critical Damage 50 UP and Action Speed 17%UP for 6 seconds",
      "descriptionLv1": "3 nearest enemiesmagic damage, on activation,self 6s Magic Critical Damage 50 UP and Action Speed 17%UP for 6 seconds",
      "descriptionLv90": "3 nearest enemiesmagic damage, on activation,self 6s Magic Critical Damage 680 UP and Action Speed 17%UP for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.6,
      "damageScaling": "130% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+6",
      "lvl1": "130% + 150",
      "lvl90": null,
      "effects": [
        "Magic Critical Damage+ Lv4",
        "Action Speed + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Magic Critical Damage+ Lv4",
          "value": 50,
          "type": "flat",
          "duration": 6,
          "levelGrowth": 7.0
        },
        {
          "name": "Action Speed + Lv4",
          "value": 17,
          "type": "flat",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Don't stare at me~!",
      "icon": "skill001/skill0010",
      "description": "3 nearest enemiesmagic damage and inflicts Magic Defense-21%-40 DOWN for 10 seconds and Block-11 DOWN for 10 seconds",
      "descriptionLv1": "3 nearest enemiesmagic damage and inflicts Magic Defense-21%-40 DOWN for 10 seconds and Block-11 DOWN for 10 seconds",
      "descriptionLv90": "3 nearest enemiesmagic damage and inflicts Magic Defense-21%-220 DOWN for 10 seconds and Block-23 DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.65,
      "damageScaling": "120% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+6",
      "lvl1": "120% + 200",
      "lvl90": "120% + 188",
      "effects": [
        "Magic Defense- Lv4",
        "Block- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense- Lv4",
          "value": -40,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -2.0
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.13
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Summer sun, feels so nice~~!!",
      "icon": "skill001/skill0006_1",
      "description": "3 nearest enemiesmagic damage and inflicts Fire Type Damage Taken UP(LV 1) for 8 seconds and Action Speed DOWN(LV 1) for 10 seconds, self 10s Fire Type ATK UP(LV 1)",
      "effect": "400% + 500",
      "buffEffects": [
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Fire Type ATK + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Summer sun, feels so nice~~!!",
      "icon": "skill001/skill0006_2",
      "description": "3 nearest enemiesmagic damage and inflicts Fire Type Damage Taken UP(LV 2) for 8 seconds and Action Speed DOWN(LV 2) for 10 seconds, self 10s Fire Type ATK UP(LV 2)",
      "effect": "470% + 700",
      "buffEffects": [
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Fire Type ATK + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Summer sun, feels so nice~~!!",
      "icon": "skill001/skill0006_3",
      "description": "3 nearest enemiesmagic damage and inflicts Fire Type Damage Taken UP(LV 3) for 8 seconds and Action Speed DOWN(LV 3) for 10 seconds, self 10s Fire Type ATK UP(LV 3)",
      "effect": "520% + 900",
      "buffEffects": [
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Fire Type ATK + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Summer sun, feels so nice~~!!",
      "icon": "skill001/skill0006_4",
      "description": "3 nearest enemiesmagic damage and inflicts Fire Type Damage Taken UP(LV 4) for 8 seconds and Action Speed DOWN(LV 4) for 10 seconds, self 10s Fire Type ATK UP(LV 4)",
      "effect": "560% + 1050",
      "buffEffects": [
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Fire Type ATK + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Summer sun, feels so nice~~!!",
      "icon": "skill001/skill0006_5",
      "description": "3 nearest enemiesmagic damage and inflicts Fire Type Damage Taken UP(LV 5) for 8 seconds and Action Speed DOWN(LV 5) for 10 seconds, self 10s Fire Type ATK UP(LV 5)",
      "effect": "580% + 1200",
      "buffEffects": [
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Fire Type ATK + Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, Fire Type ATK +",
      "icon": "skill001/skill1007",
      "description": "Gain Magic Attack UP (Large), Fire Type ATK UP",
      "effect": "Magic Attack + (+389), Fire Type ATK + (+20%)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat",
          "gameText": "Magic Attack UP (Large)"
        },
        {
          "name": "Fire Type ATK +",
          "value": 20,
          "type": "percent",
          "gameText": "Fire Type ATK UP"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Accuracy +",
      "icon": "skill001/skill1001",
      "description": "Gain Skill Damage UP (Large), Accuracy UP (Medium)",
      "effect": "Skill Damage + (+30%), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent",
          "gameText": "Skill Damage UP (Large)"
        },
        {
          "name": "Accuracy +",
          "value": 20,
          "type": "flat",
          "gameText": "Accuracy UP (Medium)"
        }
      ]
    }
  ],
  "name": "ビキニでお祝い: ヴィアトリーチェ",
  "id": 2235,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "強化、弱體化、妨害"
  ],
  "baseStats": {
    "HP": 1670,
    "ATK": 180,
    "MATK": 300,
    "DEF": 190,
    "MDEF": 127
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.5"
  },
  "slug": "ビキニでお祝い-ヴィアトリーチェ"
};

export const stats = {
  "id": "bikini-celebration-viatrice",
  "characterId": 2235,
  "name": "[Bikini Celebration] Viatrice",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "強化、弱體化、妨害"
  ],
  "baseStats": {
    "hp": {
      "base": 1670,
      "lv90": 8350
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
      "base": 190,
      "lv90": 380
    },
    "mdef": {
      "base": 127,
      "lv90": 254
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
      "base": 83,
      "lv90": 291
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
      "HP": 501,
      "MATK": 90,
      "Block": 14,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 576,
      "MATK": 104,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 676,
      "MATK": 122,
      "Block": 18,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 752,
      "MATK": 135,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1420,
      "MATK": 279,
      "DEF": 28,
      "MDEF": 45,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3925,
      "MATK": 730,
      "Block": 68,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 28,
      "MDEF": 45,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "Magic Crit": 10
    },
    "gp2": {
      "Accuracy": 3,
      "Magic Crit": 10
    },
    "gp3": {
      "Accuracy": 3,
      "Magic Crit": 30
    },
    "gp4": {
      "Accuracy": 7,
      "Magic Crit": 30
    },
    "gp5": {
      "Accuracy": 7,
      "Magic Crit": 50
    },
    "gp6": {
      "Accuracy": 10,
      "Magic Crit": 50
    },
    "gp7": {
      "Accuracy": 10,
      "Magic Crit": 70
    },
    "gp8": {
      "Accuracy": 13,
      "Magic Crit": 70
    },
    "gp9": {
      "Accuracy": 13,
      "Magic Crit": 90
    },
    "gp10": {
      "Accuracy": 16,
      "Magic Crit": 90
    },
    "total": {
      "Accuracy": 16,
      "Magic Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 176,
      "MATK": 32,
      "MDEF": 10,
      "Magic Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 211,
      "MATK": 38,
      "MDEF": 12,
      "Magic Crit": 1,
      "Block": 14
    },
    "g3": {
      "HP": 246,
      "MATK": 44,
      "MDEF": 14,
      "Magic Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 281,
      "MATK": 51,
      "MDEF": 16,
      "Magic Crit": 2,
      "Block": 19
    },
    "g5": {
      "HP": 316,
      "MATK": 57,
      "MDEF": 18,
      "Magic Crit": 2,
      "MP Charge": 4
    },
    "g6": {
      "HP": 352,
      "MATK": 63,
      "MDEF": 20,
      "Magic Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 387,
      "MATK": 70,
      "MDEF": 22,
      "Magic Crit": 2,
      "Block": 26
    },
    "g8": {
      "HP": 422,
      "MATK": 76,
      "MDEF": 24,
      "Magic Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 457,
      "MATK": 82,
      "MDEF": 27,
      "Magic Crit": 3,
      "Block": 31
    },
    "g10": {
      "HP": 492,
      "MATK": 89,
      "MDEF": 29,
      "Magic Crit": 3,
      "MP Charge": 7
    },
    "total": {
      "HP": 492,
      "MATK": 89,
      "MDEF": 29,
      "Magic Crit": 3,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 25
    },
    {
      "grade": 2,
      "MP Charge": 1
    },
    {
      "grade": 3,
      "MATK": 35
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "MATK": 45
    },
    {
      "grade": 6,
      "MP Charge": 2
    },
    {
      "grade": 7,
      "MATK": 55
    },
    {
      "grade": 8,
      "MP Charge": 3
    },
    {
      "grade": 9,
      "MATK": 65
    },
    {
      "grade": 10,
      "MP Charge": 3
    },
    {
      "grade": 11,
      "MATK": 75
    }
  ]
};;;
