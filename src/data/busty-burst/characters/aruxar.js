// Character data: aruxar
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "aruxar",
  "name": "Aruxar",
  "displayName": "Aruxar",
  "baseName": "Aruxar",
  "title": null,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 300,
  "weaponType": "Slash",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "image": "Aruxar",
  "introduction": "Middle Row、Physical、Attacker",
  "profile": {
    "height": "170cm",
    "bust": "98cm (H Cup)",
    "waist": "63cm",
    "hips": "99cm"
  },
  "credits": {
    "illustration": {
      "japanese": "只野あきら",
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
  "characterId": 2216
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Surrender!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Stun for 2 seconds and Action Speed -17%DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Stun for 2 seconds and Action Speed -17%DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Stun for 2 seconds and Action Speed -17%DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.05,
      "damageScaling": "120% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+6",
      "lvl1": "120% + 100",
      "lvl90": null,
      "effects": [
        "Stun",
        "Action Speed - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
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
      "name": "Female Pirate Command",
      "icon": "skill001/skill0019",
      "description": "all allies10 Physical Critical Damage 50 UP and Action Speed 14%UP for 10 seconds [Command Boost] Lv+50%, MP+200",
      "descriptionLv1": "all allies10 Physical Critical Damage 50 UP and Action Speed 14%UP for 10 seconds [Command Boost] Lv+50%, MP+200",
      "descriptionLv90": "all allies10 Physical Critical Damage 50 UP and Action Speed 14%UP for 10 seconds [Command Boost] Lv+50%, MP+200",
      "target": "All Allies",
      "castTime": 1.2,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv4",
        "Action Speed + Lv3"
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
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Minions, time to raise hell!!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 1) for 10 seconds and BlockDOWN(LV 1) for 10 seconds , self[Command Boost]\"\" Lv when[Command Boost]",
      "effect": "400% + 550",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Command Boost",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 2,
      "name": "Minions, time to raise hell!!",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 2) for 10 seconds and BlockDOWN(LV 2) for 10 seconds , self[Command Boost]\"\" Lv when[Command Boost]",
      "effect": "470% + 700",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Command Boost",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 3,
      "name": "Minions, time to raise hell!!",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 3) for 10 seconds and BlockDOWN(LV 3) for 10 seconds , self[Command Boost]\"\" Lv when[Command Boost]",
      "effect": "520% + 850",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Command Boost",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 4,
      "name": "Minions, time to raise hell!!",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 4) for 10 seconds and BlockDOWN(LV 4) for 10 seconds , self[Command Boost]\"\" Lv when[Command Boost]",
      "effect": "560% + 950",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Command Boost",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 5,
      "name": "Minions, time to raise hell!!",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 5) for 10 seconds and BlockDOWN(LV 5) for 10 seconds , self[Command Boost]\"\" Lv when[Command Boost]",
      "effect": "580% + 1050",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv5",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Command Boost",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+500)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 500,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Accuracy +",
          "value": 20,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Aruxar",
  "id": 2216,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 299,
    "MATK": 179,
    "DEF": 90,
    "MDEF": 110
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
  "slug": "aruxar"
};

export const stats = {
  "id": "aruxar",
  "characterId": 2216,
  "name": "Aruxar",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1819,
      "lv90": 9095
    },
    "atk": {
      "base": 299,
      "lv90": 1495
    },
    "matk": {
      "base": 179,
      "lv90": 896
    },
    "def": {
      "base": 90,
      "lv90": 180
    },
    "mdef": {
      "base": 110,
      "lv90": 220
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
      "base": 207,
      "lv90": 331
    },
    "magicCrit": {
      "base": 124,
      "lv90": 198
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
      "HP": 546,
      "ATK": 90,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 628,
      "ATK": 103,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 737,
      "ATK": 121,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 819,
      "ATK": 135,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1683,
      "ATK": 255,
      "DEF": 31,
      "MDEF": 22,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4413,
      "ATK": 704,
      "Block": 75,
      "MP Charge": 13,
      "Accuracy": 30,
      "DEF": 31,
      "MDEF": 22,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Cost Down": 3
    },
    "gp2": {
      "ATK": 30,
      "MP Cost Down": 3
    },
    "gp3": {
      "ATK": 30,
      "MP Cost Down": 5
    },
    "gp4": {
      "ATK": 90,
      "MP Cost Down": 5
    },
    "gp5": {
      "ATK": 90,
      "MP Cost Down": 6
    },
    "gp6": {
      "ATK": 130,
      "MP Cost Down": 6
    },
    "gp7": {
      "ATK": 130,
      "MP Cost Down": 7
    },
    "gp8": {
      "ATK": 170,
      "MP Cost Down": 7
    },
    "gp9": {
      "ATK": 170,
      "MP Cost Down": 8
    },
    "gp10": {
      "ATK": 210,
      "MP Cost Down": 8
    },
    "total": {
      "ATK": 210,
      "MP Cost Down": 8
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 191,
      "ATK": 31,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 230,
      "ATK": 38,
      "Phys Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 268,
      "ATK": 44,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 306,
      "ATK": 50,
      "Phys Crit": 7,
      "Block": 21
    },
    "g5": {
      "HP": 345,
      "ATK": 57,
      "Phys Crit": 8,
      "MP Charge": 5
    },
    "g6": {
      "HP": 383,
      "ATK": 63,
      "Phys Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 421,
      "ATK": 69,
      "Phys Crit": 10,
      "Block": 29
    },
    "g8": {
      "HP": 460,
      "ATK": 76,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 498,
      "ATK": 82,
      "Phys Crit": 11,
      "Block": 34
    },
    "g10": {
      "HP": 536,
      "ATK": 88,
      "Phys Crit": 12,
      "MP Charge": 8
    },
    "total": {
      "HP": 536,
      "ATK": 88,
      "Phys Crit": 12,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "HP": 164
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "HP": 218
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "HP": 273
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "HP": 327
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "HP": 382
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;;;;;
