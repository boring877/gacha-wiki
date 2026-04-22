// Character data: top-dancer-messeria
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "top-dancer-messeria",
  "name": "Top Dancer: Messeria",
  "displayName": "Top Dancer: Messeria",
  "baseName": "Messeria",
  "title": "Top Dancer",
  "rarity": "SSR",
  "element": "Light",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 400,
  "weaponType": "Strike",
  "skillTypes": [
    "Buff",
    "Debuff"
  ],
  "image": "Messeria",
  "introduction": "Middle Row、Physical、Support",
  "profile": {
    "height": "164cm",
    "bust": "100cm (K Cup)",
    "waist": "57cm",
    "hips": "91cm"
  },
  "credits": {
    "illustration": {
      "japanese": "只野あきら",
      "romanized": ""
    },
    "voice": {
      "japanese": "蕪木徹子",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2089
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Petal Blooming Spin",
      "icon": "skill001/skill0007",
      "description": "HP 1 to enemiesphysical damage and inflicts Block-13 DOWN for 10 seconds and Accuracy -11 DOWN for 10 seconds",
      "descriptionLv1": "HP 1 to enemiesphysical damage and inflicts Block-13 DOWN for 10 seconds and Accuracy -11 DOWN for 10 seconds",
      "descriptionLv90": "HP 1 to enemiesphysical damage and inflicts Block-26 DOWN for 10 seconds and Accuracy -23 DOWN for 10 seconds",
      "target": "Highest HP Enemy",
      "castTime": 1.38,
      "damageScaling": "300% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+20",
      "lvl1": "300% + 150",
      "lvl90": "300% + 138",
      "effects": [
        "Block- Lv5",
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.15
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.13
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Tropical Almena",
      "icon": "skill001/skill0018",
      "description": "Applies Magic Attack 18%+35 UP to all allies for 10 seconds and Block 9 UP for 10 seconds",
      "descriptionLv1": "Applies Magic Attack 18%+35 UP to all allies for 10 seconds and Block 9 UP for 10 seconds",
      "descriptionLv90": "Applies Magic Attack 18%+665 UP to all allies for 10 seconds and Block 18 UP for 10 seconds",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Magic Attack + Lv4",
        "Block+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Magic Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 7.0
        },
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.1
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Charming Dance",
      "icon": "skill001/skill0020_1",
      "description": "Applies Magic Critical DamageUP(LV 1) to all allies for 12 seconds and Accuracy UP(LV 1) for 12 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Magic Critical Damage+ Ultimate Lv1",
          "value": 400,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Accuracy + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 2,
      "name": "Charming Dance",
      "icon": "skill001/skill0020_2",
      "description": "Applies Magic Critical DamageUP(LV 2) to all allies for 12 seconds and Accuracy UP(LV 2) for 12 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Magic Critical Damage+ Ultimate Lv2",
          "value": 500,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Accuracy + Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 3,
      "name": "Charming Dance",
      "icon": "skill001/skill0020_3",
      "description": "Applies Magic Critical DamageUP(LV 3) to all allies for 12 seconds and Accuracy UP(LV 3) for 12 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Magic Critical Damage+ Ultimate Lv3",
          "value": 580,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Accuracy + Ultimate Lv3",
          "value": 16,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "Charming Dance",
      "icon": "skill001/skill0020_4",
      "description": "Applies Magic Critical DamageUP(LV 4) to all allies for 12 seconds and Accuracy UP(LV 4) for 12 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Magic Critical Damage+ Ultimate Lv4",
          "value": 640,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Accuracy + Ultimate Lv4",
          "value": 18,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 5,
      "name": "Charming Dance",
      "icon": "skill001/skill0020_5",
      "description": "Applies Magic Critical DamageUP(LV 5) to all allies for 12 seconds and Accuracy UP(LV 5) for 12 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Magic Critical Damage+ Ultimate Lv5",
          "value": 700,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Accuracy + Ultimate Lv5",
          "value": 20,
          "type": "flat",
          "duration": 12
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, Magic Critical Damage+",
      "icon": "skill001/skill1003",
      "effect": "Magic Attack + (+130), Magic Critical Damage+ (+90)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 130,
          "type": "flat"
        },
        {
          "name": "Magic Critical Damage+",
          "value": 90,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Block+",
      "icon": "skill001/skill1005",
      "effect": "Ultimate Damage + (+5%), Block+ (+10)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 5,
          "type": "percent"
        },
        {
          "name": "Block+",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Top Dancer: Messeria",
  "id": 2089,
  "rarity": "SSR",
  "element": "Light",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 2745,
    "ATK": 234,
    "MATK": 140,
    "DEF": 82,
    "MDEF": 32
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic → Basic",
    "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.88"
  },
  "slug": "top-dancer-messeria"
};

export const stats = {
  "id": "top-dancer-messeria",
  "characterId": 2089,
  "name": "【Top Dancer】Messeria",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 2745,
      "lv90": 13728
    },
    "atk": {
      "base": 234,
      "lv90": 1170
    },
    "matk": {
      "base": 140,
      "lv90": 701
    },
    "def": {
      "base": 82,
      "lv90": 164
    },
    "mdef": {
      "base": 32,
      "lv90": 64
    },
    "accuracy": {
      "base": 60,
      "lv90": 120
    },
    "block": {
      "base": 50,
      "lv90": 150
    },
    "physCrit": {
      "base": 303,
      "lv90": 485
    },
    "magicCrit": {
      "base": 182,
      "lv90": 291
    },
    "hpRegen": {
      "base": 137,
      "lv90": 480
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
      "HP": 824,
      "ATK": 70,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 947,
      "ATK": 81,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 1112,
      "ATK": 95,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1236,
      "ATK": 105,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 2539,
      "ATK": 199,
      "DEF": 23,
      "MDEF": 6,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 6658,
      "ATK": 550,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 23,
      "MDEF": 6,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 300
    },
    "gp2": {
      "HP": 300,
      "Block": 3
    },
    "gp3": {
      "HP": 750,
      "Block": 3
    },
    "gp4": {
      "HP": 750,
      "Block": 7
    },
    "gp5": {
      "HP": 1200,
      "Block": 7
    },
    "gp6": {
      "HP": 1200,
      "Block": 10
    },
    "gp7": {
      "HP": 1650,
      "Block": 10
    },
    "gp8": {
      "HP": 1650,
      "Block": 13
    },
    "gp9": {
      "HP": 2100,
      "Block": 13
    },
    "gp10": {
      "HP": 2100,
      "Block": 16
    },
    "total": {
      "HP": 2100,
      "Block": 16
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 289,
      "ATK": 25,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 347,
      "ATK": 30,
      "Phys Crit": 8,
      "Block": 16
    },
    "g3": {
      "HP": 405,
      "ATK": 34,
      "Phys Crit": 9,
      "Accuracy": 12
    },
    "g4": {
      "HP": 462,
      "ATK": 39,
      "Phys Crit": 10,
      "Block": 21
    },
    "g5": {
      "HP": 520,
      "ATK": 44,
      "Phys Crit": 12,
      "MP Charge": 5
    },
    "g6": {
      "HP": 578,
      "ATK": 49,
      "Phys Crit": 13,
      "Accuracy": 18
    },
    "g7": {
      "HP": 636,
      "ATK": 54,
      "Phys Crit": 14,
      "Block": 29
    },
    "g8": {
      "HP": 694,
      "ATK": 59,
      "Phys Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 751,
      "ATK": 64,
      "Phys Crit": 17,
      "Block": 34
    },
    "g10": {
      "HP": 809,
      "ATK": 69,
      "Phys Crit": 18,
      "MP Charge": 7
    },
    "total": {
      "HP": 809,
      "ATK": 69,
      "Phys Crit": 18,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 229
    },
    {
      "grade": 2,
      "MP Cost Down": 1
    },
    {
      "grade": 3,
      "HP": 320
    },
    {
      "grade": 4,
      "MP Cost Down": 1
    },
    {
      "grade": 5,
      "HP": 412
    },
    {
      "grade": 6,
      "MP Cost Down": 1
    },
    {
      "grade": 7,
      "HP": 503
    },
    {
      "grade": 8,
      "MP Cost Down": 1
    },
    {
      "grade": 9,
      "HP": 595
    },
    {
      "grade": 10,
      "MP Cost Down": 1
    },
    {
      "grade": 11,
      "HP": 625
    }
  ]
};;;;;;;;
