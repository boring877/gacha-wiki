// Character data: lone-biker-inleen
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "lone-biker-inleen",
  "name": "Lone Biker: Inleen",
  "displayName": "Lone Biker: Inleen",
  "baseName": "Inleen",
  "title": "Lone Biker",
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Slow",
  "range": 230,
  "weaponType": "Strike",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Inleen",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "165cm",
    "bust": "98cm (H Cup)",
    "waist": "59cm",
    "hips": "92cm"
  },
  "credits": {
    "illustration": {
      "japanese": "わむらかい",
      "romanized": ""
    },
    "voice": {
      "japanese": "葵時緒",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2181
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Bunny Hop",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Block-13 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Block-13 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Block-26 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.45,
      "damageScaling": "350% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+25",
      "lvl1": "350% + 500",
      "lvl90": "350% + 486",
      "effects": [
        "Block- Lv5"
      ],
      "buffEffects": [
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
      "name": "Breaking Dust",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed DOWN for 12 seconds, 4s Blind for",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed DOWN for 12 seconds, 4s Blind for",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed DOWN for 12 seconds, 4s Blind for",
      "target": "Nearest Enemy",
      "castTime": 1.5,
      "damageScaling": "110.00000000000001% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+6",
      "lvl1": "110% + 150",
      "lvl90": null,
      "effects": [
        "Action Speed - Lv4",
        "Blind"
      ],
      "buffEffects": [
        {
          "name": "Action Speed - Lv4",
          "value": -17,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Full Exhaust - Sonic Assault",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, Ultimate activation beforeApplies Action Speed UP(LV 1) to self for 10 seconds and Physical Attack UP(LV 1) for 10 seconds",
      "effect": "1200% + 1000",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Bunny Hop",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Block-13 DOWN for 6 seconds",
      "effect": "350% + 500",
      "buffEffects": [
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Breaking Dust",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed DOWN for 12 seconds, 4s Blind for",
      "effect": "110% + 150",
      "buffEffects": [
        {
          "name": "Action Speed - Lv4",
          "value": -17,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ]
    },
    {
      "rank": 4,
      "name": "Full Exhaust - Sonic Assault",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, Ultimate activation beforeApplies Action Speed UP(LV 1) to self for 10 seconds and Physical Attack UP(LV 1) for 10 seconds",
      "effect": "1200% + 1000",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Full Exhaust - Sonic Assault",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy, Ultimate activation beforeApplies Action Speed UP(LV 2) to self for 10 seconds and Physical Attack UP(LV 2) for 10 seconds",
      "effect": "1440% + 1200",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Attack + Ultimate Lv2",
          "value": 25,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Action Speed +",
      "icon": "skill001/skill1003",
      "effect": "Action Speed + (+15)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Physical Critical Damage+ (+90%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Lone Biker: Inleen",
  "id": 2181,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1546,
    "ATK": 429,
    "MATK": 257,
    "DEF": 143,
    "MDEF": 174
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Skill2 → Basic → Skill3 → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.35"
  },
  "slug": "lone-biker-inleen"
};

export const stats = {
  "id": "lone-biker-inleen",
  "characterId": 2181,
  "name": "【Lone Biker】Inleen",
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
      "base": 1546,
      "lv90": 7730
    },
    "atk": {
      "base": 429,
      "lv90": 2148
    },
    "matk": {
      "base": 257,
      "lv90": 1288
    },
    "def": {
      "base": 143,
      "lv90": 286
    },
    "mdef": {
      "base": 174,
      "lv90": 348
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
      "base": 53,
      "lv90": 85
    },
    "magicCrit": {
      "base": 32,
      "lv90": 51
    },
    "hpRegen": {
      "base": 77,
      "lv90": 270
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
      "base": 91,
      "lv90": 91
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
      "HP": 464,
      "ATK": 129,
      "Block": 15,
      "MP Charge": 8
    },
    "lb2": {
      "HP": 533,
      "ATK": 148,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 626,
      "ATK": 174,
      "Block": 20,
      "MP Charge": 11
    },
    "lb4": {
      "HP": 696,
      "ATK": 193,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1315,
      "ATK": 398,
      "DEF": 48,
      "MDEF": 35,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3634,
      "ATK": 1042,
      "Block": 75,
      "MP Charge": 19,
      "Accuracy": 30,
      "DEF": 48,
      "MDEF": 35,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Charge": 2
    },
    "gp2": {
      "MP Charge": 2,
      "MP Cost Down": 3
    },
    "gp3": {
      "MP Charge": 4,
      "MP Cost Down": 3
    },
    "gp4": {
      "MP Charge": 4,
      "MP Cost Down": 5
    },
    "gp5": {
      "MP Charge": 6,
      "MP Cost Down": 5
    },
    "gp6": {
      "MP Charge": 6,
      "MP Cost Down": 6
    },
    "gp7": {
      "MP Charge": 8,
      "MP Cost Down": 6
    },
    "gp8": {
      "MP Charge": 8,
      "MP Cost Down": 7
    },
    "gp9": {
      "MP Charge": 10,
      "MP Cost Down": 7
    },
    "gp10": {
      "MP Charge": 10,
      "MP Cost Down": 8
    },
    "total": {
      "MP Charge": 10,
      "MP Cost Down": 8
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 163,
      "ATK": 45,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 195,
      "ATK": 54,
      "Phys Crit": 1,
      "Block": 16
    },
    "g3": {
      "HP": 228,
      "ATK": 63,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 260,
      "ATK": 72,
      "Phys Crit": 2,
      "Block": 21
    },
    "g5": {
      "HP": 293,
      "ATK": 81,
      "Phys Crit": 2,
      "MP Charge": 6
    },
    "g6": {
      "HP": 326,
      "ATK": 90,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 358,
      "ATK": 100,
      "Phys Crit": 2,
      "Block": 29
    },
    "g8": {
      "HP": 391,
      "ATK": 109,
      "Phys Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 423,
      "ATK": 118,
      "Phys Crit": 3,
      "Block": 34
    },
    "g10": {
      "HP": 456,
      "ATK": 127,
      "Phys Crit": 3,
      "MP Charge": 10
    },
    "total": {
      "HP": 456,
      "ATK": 127,
      "Phys Crit": 3,
      "MP Charge": 10
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "ATK": 39
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "ATK": 52
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "ATK": 64
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "ATK": 77
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "ATK": 90
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;;;;;;
