// Character data: 疾風のくノ一-リン
// Auto-generated from game data

export const info = {
  "slug": "swift-wind-kunoichi-lin",
  "name": "[Swift-Wind Kunoichi] Lin",
  "displayName": "Swift-Wind Kunoichi Lin",
  "baseName": "Lin",
  "title": "Swift-Wind Kunoichi",
  "rarity": "SSR",
  "element": "Mind",
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
    "弱體化"
  ],
  "image": "リン",
  "introduction": "Front RowPhysicalAttacker",
  "profile": {
    "height": "166cm",
    "bust": "113cm (L Cup)",
    "waist": "63cm",
    "hips": "95cm"
  },
  "credits": {
    "illustration": {
      "japanese": "山田ゴゴゴ",
      "romanized": ""
    },
    "voice": {
      "japanese": "星鹿りえ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2228
};








































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Shuriken Wild Dance",
      "icon": "skill001/skill0009",
      "description": "3 nearest enemiesphysical damage and inflicts Mind Type Damage Taken 16%UP for 6 seconds and Block-13 DOWN for 6 seconds while [Clone] is active+50%",
      "descriptionLv1": "3 nearest enemiesphysical damage and inflicts Mind Type Damage Taken 16%UP for 6 seconds and Block-13 DOWN for 6 seconds while [Clone] is active+50%",
      "descriptionLv90": "3 nearest enemiesphysical damage and inflicts Mind Type Damage Taken 16%UP for 6 seconds and Block-26 DOWN for 6 seconds while [Clone] is active+50%",
      "target": "Nearest Enemy",
      "castTime": 0.7,
      "damageScaling": "125% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+6",
      "lvl1": "125% + 300",
      "lvl90": "125% + 286",
      "effects": [
        "Mind Type Damage Taken + Lv3",
        "Block- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Mind Type Damage Taken + Lv3",
          "value": 16,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.15
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Clone Jutsu",
      "icon": "skill001/skill0019",
      "description": "Self 10s Physical Critical Damage 50 UP and Action Speed 20%UP for 10 seconds, 10s [Clone] status (by 50%, 3)",
      "descriptionLv1": "Self 10s Physical Critical Damage 50 UP and Action Speed 20%UP for 10 seconds, 10s [Clone] status (by 50%, 3)",
      "descriptionLv90": "Self 10s Physical Critical Damage 50 UP and Action Speed 20%UP for 10 seconds, 10s [Clone] status (by 50%, 3)",
      "target": "Self",
      "castTime": 0.8,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv4",
        "Action Speed + Lv5",
        "Clone"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 7.0
        },
        {
          "name": "Action Speed + Lv5",
          "value": 20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Clone",
          "value": 50,
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
      "name": "Ninjutsu - Ambush Kiri Kiri Dance",
      "icon": "skill001/skill0003_1",
      "description": "3 nearest enemiesphysical damage, guaranteed hit, on Ultimate activation, self 10s Physical Attack UP(LV 1), [Clone], self 10s [Clone] while [Clone] is active+50%, on Ultimate activation, self 10sphysical damageUP(LV 1)",
      "effect": "400% + 600",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Clone",
          "value": 50,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Ninjutsu - Ambush Kiri Kiri Dance",
      "icon": "skill001/skill0003_2",
      "description": "3 nearest enemiesphysical damage, guaranteed hit, on Ultimate activation, self 10s Physical Attack UP(LV 2), [Clone], self 10s [Clone] while [Clone] is active+50%, on Ultimate activation, self 10sphysical damageUP(LV 2)",
      "effect": "470% + 750",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv2",
          "value": 25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Clone",
          "value": 50,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Ninjutsu - Ambush Kiri Kiri Dance",
      "icon": "skill001/skill0003_3",
      "description": "3 nearest enemiesphysical damage, guaranteed hit, on Ultimate activation, self 10s Physical Attack UP(LV 3), [Clone], self 10s [Clone] while [Clone] is active+50%, on Ultimate activation, self 10sphysical damageUP(LV 3)",
      "effect": "520% + 900",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv3",
          "value": 29,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Clone",
          "value": 50,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Ninjutsu - Ambush Kiri Kiri Dance",
      "icon": "skill001/skill0003_4",
      "description": "3 nearest enemiesphysical damage, guaranteed hit, on Ultimate activation, self 10s Physical Attack UP(LV 4), [Clone], self 10s [Clone] while [Clone] is active+50%, on Ultimate activation, self 10sphysical damageUP(LV 4)",
      "effect": "560% + 1000",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv4",
          "value": 32,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Clone",
          "value": 50,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Ninjutsu - Ambush Kiri Kiri Dance",
      "icon": "skill001/skill0003_5",
      "description": "3 nearest enemiesphysical damage, guaranteed hit, on Ultimate activation, self 10s Physical Attack UP(LV 5), [Clone], self 10s [Clone] while [Clone] is active+50%, on Ultimate activation, self 10sphysical damageUP(LV 5)",
      "effect": "580% + 1100",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv5",
          "value": 35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Clone",
          "value": 50,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Action Speed +",
      "icon": "skill001/skill1001",
      "description": "Gain Physical Attack UP (Large), Action Speed UP (Cannot be Cleansed)",
      "effect": "Physical Attack + (+389)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat",
          "gameText": "Physical Attack UP (Large)"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Action Speed +",
      "icon": "skill001/skill1001",
      "description": "Gain Ultimate Damage UP (Large), Action Speed UP (Medium)",
      "effect": "Ultimate Damage + (+15%), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent",
          "gameText": "Ultimate Damage UP (Large)"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat",
          "gameText": "Action Speed UP (Medium)"
        }
      ]
    }
  ],
  "name": "疾風のくノ一: リン",
  "id": 2228,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "弱體化"
  ],
  "baseStats": {
    "HP": 1273,
    "ATK": 281,
    "MATK": 168,
    "DEF": 192,
    "MDEF": 288
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.4"
  },
  "slug": "疾風のくノ一-リン"
};

export const stats = {
  "id": "swift-wind-kunoichi-lin",
  "characterId": 2228,
  "name": "[Swift-Wind Kunoichi] Lin",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "弱體化"
  ],
  "baseStats": {
    "hp": {
      "base": 1273,
      "lv90": 6366
    },
    "atk": {
      "base": 281,
      "lv90": 1405
    },
    "matk": {
      "base": 168,
      "lv90": 843
    },
    "def": {
      "base": 192,
      "lv90": 384
    },
    "mdef": {
      "base": 288,
      "lv90": 576
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
      "base": 125,
      "lv90": 200
    },
    "magicCrit": {
      "base": 75,
      "lv90": 120
    },
    "hpRegen": {
      "base": 63,
      "lv90": 222
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
      "base": 60,
      "lv90": 60
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
      "HP": 382,
      "ATK": 84,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 439,
      "ATK": 97,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 516,
      "ATK": 114,
      "Block": 20,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 573,
      "ATK": 127,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1083,
      "ATK": 260,
      "DEF": 68,
      "MDEF": 58,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 2993,
      "ATK": 682,
      "Block": 75,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 68,
      "MDEF": 58,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "Phys Crit": 10
    },
    "gp2": {
      "Phys Crit": 10,
      "MP Charge": 2
    },
    "gp3": {
      "Phys Crit": 30,
      "MP Charge": 2
    },
    "gp4": {
      "Phys Crit": 30,
      "MP Charge": 4
    },
    "gp5": {
      "Phys Crit": 50,
      "MP Charge": 4
    },
    "gp6": {
      "Phys Crit": 50,
      "MP Charge": 6
    },
    "gp7": {
      "Phys Crit": 70,
      "MP Charge": 6
    },
    "gp8": {
      "Phys Crit": 70,
      "MP Charge": 8
    },
    "gp9": {
      "Phys Crit": 90,
      "MP Charge": 8
    },
    "gp10": {
      "Phys Crit": 90,
      "MP Charge": 10
    },
    "total": {
      "Phys Crit": 90,
      "MP Charge": 10
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 134,
      "ATK": 30,
      "Phys Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 161,
      "ATK": 36,
      "Phys Crit": 3,
      "Block": 16
    },
    "g3": {
      "HP": 188,
      "ATK": 41,
      "Phys Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 214,
      "ATK": 47,
      "Phys Crit": 4,
      "Block": 21
    },
    "g5": {
      "HP": 241,
      "ATK": 53,
      "Phys Crit": 5,
      "MP Charge": 5
    },
    "g6": {
      "HP": 268,
      "ATK": 59,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 295,
      "ATK": 65,
      "Phys Crit": 6,
      "Block": 29
    },
    "g8": {
      "HP": 322,
      "ATK": 71,
      "Phys Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 349,
      "ATK": 77,
      "Phys Crit": 7,
      "Block": 34
    },
    "g10": {
      "HP": 375,
      "ATK": 83,
      "Phys Crit": 7,
      "MP Charge": 7
    },
    "total": {
      "HP": 375,
      "ATK": 83,
      "Phys Crit": 7,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 23
    },
    {
      "grade": 2,
      "Phys Crit": 5
    },
    {
      "grade": 3,
      "ATK": 33
    },
    {
      "grade": 4,
      "Phys Crit": 6
    },
    {
      "grade": 5,
      "ATK": 42
    },
    {
      "grade": 6,
      "Phys Crit": 8
    },
    {
      "grade": 7,
      "ATK": 52
    },
    {
      "grade": 8,
      "Phys Crit": 9
    },
    {
      "grade": 9,
      "ATK": 61
    },
    {
      "grade": 10,
      "Phys Crit": 11
    },
    {
      "grade": 11,
      "ATK": 72
    }
  ]
};;;
