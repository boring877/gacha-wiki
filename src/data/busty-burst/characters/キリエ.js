// Character data: キリエ
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "キリエ",
  "name": "キリエ",
  "displayName": "キリエ",
  "baseName": "キリエ",
  "title": null,
  "rarity": "SR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Slow",
  "range": 500,
  "weaponType": "Ranged",
  "skillTypes": [
    "弱體化、妨害"
  ],
  "image": "キリエ",
  "introduction": null,
  "profile": {
    "height": "161cm",
    "bust": "103cm (K Cup)",
    "waist": "67cm",
    "hips": "81cm"
  },
  "credits": {
    "illustration": {
      "japanese": "やまのかみ",
      "romanized": ""
    },
    "voice": {
      "japanese": "椿なつめ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2222
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Won't let you escape",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit",
      "descriptionLv1": "Deals physical damage to the nearest enemy, guaranteed hit",
      "descriptionLv90": "Deals physical damage to the nearest enemy, guaranteed hit",
      "target": "Nearest Enemy",
      "castTime": 1.2,
      "damageScaling": "330% ATK",
      "baseDamage": "+350",
      "levelGrowth": "+25",
      "lvl1": "330% + 350",
      "lvl90": "330% + 2575",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Burn!",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Burn(HP --150 per second) for 20 seconds and Fire Type Damage Taken UP for 10 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Burn(HP --150 per second) for 20 seconds and Fire Type Damage Taken UP for 10 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Burn(HP --1500 per second) for 20 seconds and Fire Type Damage Taken UP for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.25,
      "damageScaling": "280% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+15",
      "lvl1": "280% + 200",
      "lvl90": null,
      "effects": [
        "Burn Lv5",
        "Fire Type Damage Taken + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Burn Lv5",
          "value": -150,
          "type": "flat",
          "duration": 20,
          "levelGrowth": -15.0
        },
        {
          "name": "Fire Type Damage Taken + Lv3",
          "value": 16,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 20
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Ir Kabab",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Burn(LV 1) for 20 seconds , on Ultimate activation,apply to self10 Fire Type ATK UP(LV 1)",
      "effect": "1000% + 700",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv1",
          "value": -1500,
          "type": "flat",
          "duration": 20
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
      "name": "Won't let you escape",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit",
      "effect": "330% + 350",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "Burn!",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Burn(HP --150 per second) for 20 seconds and Fire Type Damage Taken UP for 10 seconds",
      "effect": "280% + 200",
      "buffEffects": [
        {
          "name": "Burn Lv5",
          "value": -150,
          "type": "flat",
          "duration": 20
        },
        {
          "name": "Fire Type Damage Taken + Lv3",
          "value": 16,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Ir Kabab",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Burn(LV 1) for 20 seconds , on Ultimate activation,apply to self10 Fire Type ATK UP(LV 1)",
      "effect": "1000% + 700",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv1",
          "value": -1500,
          "type": "flat",
          "duration": 20
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
      "rank": 5,
      "name": "Ir Kabab",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Burn(LV 2) for 20 seconds , on Ultimate activation,apply to self10 Fire Type ATK UP(LV 2)",
      "effect": "1200% + 900",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv2",
          "value": -2000,
          "type": "flat",
          "duration": 20
        },
        {
          "name": "Fire Type ATK + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 10
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
      "name": "Skill Damage +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+20%), Action Speed + (+5)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Action Speed +",
          "value": 5,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "キリエ",
  "id": 2222,
  "rarity": "SR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "弱體化、妨害"
  ],
  "baseStats": {
    "HP": 1411,
    "ATK": 330,
    "MATK": 198,
    "DEF": 131,
    "MDEF": 161
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.1"
  },
  "slug": "キリエ"
};

export const stats = {
  "id": "キリエ",
  "characterId": 2222,
  "name": "キリエ",
  "rarity": "SR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "弱體化、妨害"
  ],
  "baseStats": {
    "hp": {
      "base": 1411,
      "lv90": 7058
    },
    "atk": {
      "base": 330,
      "lv90": 1650
    },
    "matk": {
      "base": 198,
      "lv90": 990
    },
    "def": {
      "base": 131,
      "lv90": 262
    },
    "mdef": {
      "base": 161,
      "lv90": 322
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
      "base": 108,
      "lv90": 173
    },
    "magicCrit": {
      "base": 65,
      "lv90": 104
    },
    "hpRegen": {
      "base": 70,
      "lv90": 246
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
      "base": 63,
      "lv90": 63
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
      "HP": 424,
      "ATK": 99,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 487,
      "ATK": 114,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 572,
      "ATK": 134,
      "Block": 20,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 635,
      "ATK": 149,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1035,
      "ATK": 243,
      "DEF": 38,
      "MDEF": 30,
      "Heal Pwr": 16
    },
    "total": {
      "HP": 3153,
      "ATK": 739,
      "Block": 75,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 38,
      "MDEF": 30,
      "Heal Pwr": 16
    }
  },
  "gpAbility": {
    "gp1": {
      "Phys Crit": 10
    },
    "gp2": {
      "ATK": 30,
      "Phys Crit": 10
    },
    "gp3": {
      "ATK": 30,
      "Phys Crit": 30
    },
    "gp4": {
      "ATK": 90,
      "Phys Crit": 30
    },
    "gp5": {
      "ATK": 90,
      "Phys Crit": 50
    },
    "gp6": {
      "ATK": 130,
      "Phys Crit": 50
    },
    "gp7": {
      "ATK": 130,
      "Phys Crit": 70
    },
    "gp8": {
      "ATK": 170,
      "Phys Crit": 70
    },
    "gp9": {
      "ATK": 170,
      "Phys Crit": 90
    },
    "gp10": {
      "ATK": 210,
      "Phys Crit": 90
    },
    "total": {
      "ATK": 210,
      "Phys Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 149,
      "ATK": 35,
      "Phys Crit": 2,
      "Accuracy": 9
    },
    "g2": {
      "HP": 178,
      "ATK": 42,
      "Phys Crit": 3,
      "Block": 16
    },
    "g3": {
      "HP": 208,
      "ATK": 49,
      "Phys Crit": 3,
      "Accuracy": 12
    },
    "g4": {
      "HP": 238,
      "ATK": 56,
      "Phys Crit": 4,
      "Block": 21
    },
    "g5": {
      "HP": 267,
      "ATK": 63,
      "Phys Crit": 4,
      "MP Charge": 5
    },
    "g6": {
      "HP": 297,
      "ATK": 70,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 327,
      "ATK": 76,
      "Phys Crit": 5,
      "Block": 29
    },
    "g8": {
      "HP": 357,
      "ATK": 83,
      "Phys Crit": 5,
      "Accuracy": 21
    },
    "g9": {
      "HP": 386,
      "ATK": 90,
      "Phys Crit": 6,
      "Block": 34
    },
    "g10": {
      "HP": 416,
      "ATK": 97,
      "Phys Crit": 6,
      "MP Charge": 8
    },
    "total": {
      "HP": 416,
      "ATK": 97,
      "Phys Crit": 6,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Phys Crit": 4
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "Phys Crit": 5
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "Phys Crit": 7
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "Phys Crit": 8
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "Phys Crit": 9
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "Phys Crit": 10
    }
  ]
};;;;;;;;
