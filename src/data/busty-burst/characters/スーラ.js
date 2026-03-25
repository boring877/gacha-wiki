// Character data: スーラ
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "スーラ",
  "name": "スーラ",
  "displayName": "スーラ",
  "baseName": "スーラ",
  "title": null,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Very Fast",
  "range": 350,
  "weaponType": "Throw",
  "skillTypes": [
    "強化、弱體化、MP回復"
  ],
  "image": "スーラ",
  "introduction": null,
  "profile": {
    "height": "157cm",
    "bust": "118cm (P Cup)",
    "waist": "65cm",
    "hips": "91cm"
  },
  "credits": {
    "illustration": {
      "japanese": "にゃこたろう",
      "romanized": ""
    },
    "voice": {
      "japanese": "犀川ささめ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2221
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "アントゥ・カブ",
      "icon": "skill001/skill0005",
      "description": "1 nearest enemymagic damage and inflicts Magic Defense-23%-50 DOWN for 6 seconds and Action Speed -17%DOWN for 6 seconds",
      "descriptionLv1": "1 nearest enemymagic damage and inflicts Magic Defense-23%-50 DOWN for 6 seconds and Action Speed -17%DOWN for 6 seconds",
      "descriptionLv90": "1 nearest enemymagic damage and inflicts Magic Defense-23%-320 DOWN for 6 seconds and Action Speed -17%DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.65,
      "damageScaling": "380% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "380% + 500",
      "lvl90": null,
      "effects": [
        "Magic Defense- Lv5",
        "Action Speed - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense- Lv5",
          "value": -50,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -3.0
        },
        {
          "name": "Action Speed - Lv4",
          "value": -17,
          "type": "flat",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "キ・エ",
      "icon": "skill001/skill0019",
      "description": "Applies Wind Type ATK 20%UP to self for 12 seconds, all allies12 Magic Attack 18%+35 UP, 20 Hit-Based Magic Damage UP(40%+450, 3 hit(s))",
      "descriptionLv1": "Applies Wind Type ATK 20%UP to self for 12 seconds, all allies12 Magic Attack 18%+35 UP, 20 Hit-Based Magic Damage UP(40%+450, 3 hit(s))",
      "descriptionLv90": "Applies Wind Type ATK 20%UP to self for 12 seconds, all allies12 Magic Attack 18%+665 UP, 20 Hit-Based Magic Damage UP(40%+450, 40503 hit(s))",
      "target": "All Allies",
      "castTime": 0.75,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Wind Type ATK + Lv5",
        "Magic Attack + Lv4",
        "Hit-Based Magic Damage + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Wind Type ATK + Lv5",
          "value": 20,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Magic Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 7.0
        },
        {
          "name": "Hit-Based Magic Damage + Lv3",
          "value": 3,
          "type": "flat",
          "duration": 20,
          "levelGrowth": 450.0
        }
      ],
      "duration": 20
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Ea Frusag Gibe Karl",
      "icon": "skill001/skill0006_1",
      "description": "1 nearest enemymagic damage, guaranteed hit and inflicts Magic Defense DOWN(LV 1) for 10 seconds , on Ultimate activation,apply to self10 Magic Attack UP(LV 1)",
      "effect": "1200% + 1200",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack + Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Ea Frusag Gibe Karl",
      "icon": "skill001/skill0006_2",
      "description": "1 nearest enemymagic damage, guaranteed hit and inflicts Magic Defense DOWN(LV 2) for 10 seconds , on Ultimate activation,apply to self10 Magic Attack UP(LV 2)",
      "effect": "1440% + 1500",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack + Ultimate Lv2",
          "value": 25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Ea Frusag Gibe Karl",
      "icon": "skill001/skill0006_3",
      "description": "1 nearest enemymagic damage, guaranteed hit and inflicts Magic Defense DOWN(LV 3) for 10 seconds , on Ultimate activation,apply to self10 Magic Attack UP(LV 3)",
      "effect": "1620% + 1750",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack + Ultimate Lv3",
          "value": 29,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Ea Frusag Gibe Karl",
      "icon": "skill001/skill0006_4",
      "description": "1 nearest enemymagic damage, guaranteed hit and inflicts Magic Defense DOWN(LV 4) for 10 seconds , on Ultimate activation,apply to self10 Magic Attack UP(LV 4)",
      "effect": "1739% + 1900",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack + Ultimate Lv4",
          "value": 32,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Ea Frusag Gibe Karl",
      "icon": "skill001/skill0006_5",
      "description": "1 nearest enemymagic damage, guaranteed hit and inflicts Magic Defense DOWN(LV 5) for 10 seconds , on Ultimate activation,apply to self10 Magic Attack UP(LV 5)",
      "effect": "1800% + 2000",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack + Ultimate Lv5",
          "value": 35,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, MP Recovery",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+15), MP Recovery (+200%)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "flat"
        },
        {
          "name": "MP Recovery",
          "value": 200,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "スーラ",
  "id": 2221,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "強化、弱體化、MP回復"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 157,
    "MATK": 261,
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
    "speedLabel": "Very Fast",
    "speedValue": "0.45"
  },
  "slug": "スーラ"
};

export const stats = {
  "id": "スーラ",
  "characterId": 2221,
  "name": "スーラ",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "強化、弱體化、MP回復"
  ],
  "baseStats": {
    "hp": {
      "base": 1819,
      "lv90": 9095
    },
    "atk": {
      "base": 157,
      "lv90": 785
    },
    "matk": {
      "base": 261,
      "lv90": 1307
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
      "base": 50,
      "lv90": 150
    },
    "physCrit": {
      "base": 124,
      "lv90": 198
    },
    "magicCrit": {
      "base": 207,
      "lv90": 331
    },
    "hpRegen": {
      "base": 90,
      "lv90": 317
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
      "HP": 546,
      "MATK": 78,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 628,
      "MATK": 90,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 737,
      "MATK": 106,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 819,
      "MATK": 118,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1547,
      "MATK": 223,
      "DEF": 20,
      "MDEF": 33,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4277,
      "MATK": 615,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 20,
      "MDEF": 33,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 40
    },
    "gp2": {
      "MATK": 40,
      "MP Cost Down": 3
    },
    "gp3": {
      "MATK": 120,
      "MP Cost Down": 3
    },
    "gp4": {
      "MATK": 120,
      "MP Cost Down": 5
    },
    "gp5": {
      "MATK": 200,
      "MP Cost Down": 5
    },
    "gp6": {
      "MATK": 200,
      "MP Cost Down": 6
    },
    "gp7": {
      "MATK": 280,
      "MP Cost Down": 6
    },
    "gp8": {
      "MATK": 280,
      "MP Cost Down": 7
    },
    "gp9": {
      "MATK": 360,
      "MP Cost Down": 7
    },
    "gp10": {
      "MATK": 360,
      "MP Cost Down": 8
    },
    "total": {
      "MATK": 360,
      "MP Cost Down": 8
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 191,
      "MATK": 28,
      "MDEF": 6,
      "Magic Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 230,
      "MATK": 33,
      "MDEF": 8,
      "Magic Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 268,
      "MATK": 39,
      "MDEF": 9,
      "Magic Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 306,
      "MATK": 44,
      "MDEF": 10,
      "Magic Crit": 7,
      "Block": 21
    },
    "g5": {
      "HP": 345,
      "MATK": 50,
      "MDEF": 12,
      "Magic Crit": 8,
      "MP Charge": 5
    },
    "g6": {
      "HP": 383,
      "MATK": 55,
      "MDEF": 13,
      "Magic Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 421,
      "MATK": 61,
      "MDEF": 14,
      "Magic Crit": 10,
      "Block": 29
    },
    "g8": {
      "HP": 460,
      "MATK": 66,
      "MDEF": 16,
      "Magic Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 498,
      "MATK": 72,
      "MDEF": 17,
      "Magic Crit": 11,
      "Block": 34
    },
    "g10": {
      "HP": 536,
      "MATK": 77,
      "MDEF": 18,
      "Magic Crit": 12,
      "MP Charge": 7
    },
    "total": {
      "HP": 536,
      "MATK": 77,
      "MDEF": 18,
      "Magic Crit": 12,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "Magic Crit": 7
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "Magic Crit": 10
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "Magic Crit": 12
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "Magic Crit": 15
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "Magic Crit": 17
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;;;;;;
