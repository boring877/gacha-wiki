// Character data: bonita
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "bonita",
  "name": "Bonita",
  "displayName": "Bonita",
  "baseName": "Bonita",
  "title": null,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slow",
  "range": 350,
  "weaponType": "Throw",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Heal",
    "MP Recovery"
  ],
  "image": "Bonita",
  "introduction": "Middle Row、Physical、Support",
  "profile": {
    "height": "143cm",
    "bust": "90cm (H Cup)",
    "waist": "55cm",
    "hips": "75cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Aotonbo",
      "romanized": ""
    },
    "voice": {
      "japanese": "榎津まお",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2136
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Lucky Roulette!",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the nearest enemy50%% chance to10 Accuracy -9 DOWN, 50%% chance to10 Block-9 DOWN, 50%% chance to10 Physical Critical Damage-30 DOWN",
      "descriptionLv1": "Deals physical damage to the nearest enemy50%% chance to10 Accuracy -9 DOWN, 50%% chance to10 Block-9 DOWN, 50%% chance to10 Physical Critical Damage-30 DOWN",
      "descriptionLv90": "Deals physical damage to the nearest enemy50%% chance to10 Accuracy -18 DOWN, 50%% chance to10 Block-18 DOWN, 50%% chance to10 Physical Critical Damage-30 DOWN",
      "target": "Nearest Enemy",
      "castTime": 1.5,
      "damageScaling": "170% ATK",
      "baseDamage": "+700",
      "levelGrowth": "+0",
      "lvl1": "170% + 700",
      "lvl90": "170% + 522",
      "effects": [
        "Accuracy - Lv3",
        "Block- Lv3",
        "Physical Critical Damage- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Accuracy - Lv3",
          "value": -9,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.1
        },
        {
          "name": "Block- Lv3",
          "value": -9,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.1
        },
        {
          "name": "Physical Critical Damage- Lv3",
          "value": -11,
          "type": "percent",
          "duration": 10,
          "levelGrowth": -2.0
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "My luck is here~~~!",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Defense +170 UP to all allies for 15 seconds and HP Regeneration+200 for 10 seconds",
      "descriptionLv1": "Applies Physical Defense +170 UP to all allies for 15 seconds and HP Regeneration+200 for 10 seconds",
      "descriptionLv90": "Applies Physical Defense +350 UP to all allies for 15 seconds and HP Regeneration+200 for 10 seconds",
      "target": "All Allies",
      "castTime": 1.5,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Defense + Lv4",
        "HP Regeneration+ Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + Lv4",
          "value": 170,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 2.0
        },
        {
          "name": "HP Regeneration+ Lv4",
          "value": 6,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 8.0
        }
      ],
      "duration": 15
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Ace In The Hole !",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy 1:10 Accuracy UP(LV 1) 2: 3: 4: 5: 6",
      "effect": "390% + 300",
      "buffEffects": [
        {
          "name": "Accuracy + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Lucky Roulette!",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the nearest enemy50%% chance to10 Accuracy -9 DOWN, 50%% chance to10 Block-9 DOWN, 50%% chance to10 Physical Critical Damage-30 DOWN",
      "effect": "170% + 700",
      "buffEffects": [
        {
          "name": "Accuracy - Lv3",
          "value": -9,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Lv3",
          "value": -9,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Critical Damage- Lv3",
          "value": -11,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "My luck is here~~~!",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Defense +170 UP to all allies for 15 seconds and HP Regeneration+200 for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Defense + Lv4",
          "value": 170,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "HP Regeneration+ Lv4",
          "value": 6,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Ace In The Hole !",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy 1:10 Accuracy UP(LV 1) 2: 3: 4: 5: 6",
      "effect": "390% + 300",
      "buffEffects": [
        {
          "name": "Accuracy + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Ace In The Hole !",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy 1:10 Accuracy UP(LV 2) 2: 3: 4: 5: 6",
      "effect": "459% + 400",
      "buffEffects": [
        {
          "name": "Accuracy + Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Debuff Resistance+, Max HP +",
      "icon": "skill001/skill1002",
      "effect": "Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "MP Recovery, Physical Defense +",
      "icon": "skill001/skill1007",
      "effect": "MP Recovery (+100%), Physical Defense + (+211)",
      "effectValues": [
        {
          "name": "MP Recovery",
          "value": 100,
          "type": "percent"
        },
        {
          "name": "Physical Defense +",
          "value": 211,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Bonita",
  "id": 2136,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff",
    "Heal",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 2745,
    "ATK": 221,
    "MATK": 132,
    "DEF": 82,
    "MDEF": 32
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.2"
  },
  "slug": "bonita"
};

export const stats = {
  "id": "bonita",
  "characterId": 2136,
  "name": "Bonita",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff",
    "Heal",
    "MP Recovery"
  ],
  "baseStats": {
    "hp": {
      "base": 2745,
      "lv90": 13728
    },
    "atk": {
      "base": 221,
      "lv90": 1106
    },
    "matk": {
      "base": 132,
      "lv90": 663
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
      "base": 207,
      "lv90": 331
    },
    "magicCrit": {
      "base": 124,
      "lv90": 198
    },
    "hpRegen": {
      "base": 137,
      "lv90": 480
    },
    "mpRegen": {
      "base": 56,
      "lv90": 225
    },
    "healPwr": {
      "base": 100,
      "lv90": 250
    },
    "mpCharge": {
      "base": 46,
      "lv90": 46
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
      "ATK": 66,
      "Block": 15,
      "MP Charge": 4
    },
    "lb2": {
      "HP": 947,
      "ATK": 76,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 1112,
      "ATK": 90,
      "Block": 20,
      "MP Charge": 6
    },
    "lb4": {
      "HP": 1236,
      "ATK": 100,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 2540,
      "ATK": 188,
      "DEF": 23,
      "MDEF": 6,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 6659,
      "ATK": 520,
      "Block": 75,
      "MP Charge": 10,
      "Accuracy": 30,
      "DEF": 23,
      "MDEF": 6,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 300
    },
    "gp2": {
      "HP": 300,
      "MP Charge": 2
    },
    "gp3": {
      "HP": 750,
      "MP Charge": 2
    },
    "gp4": {
      "HP": 750,
      "MP Charge": 4
    },
    "gp5": {
      "HP": 1200,
      "MP Charge": 4
    },
    "gp6": {
      "HP": 1200,
      "MP Charge": 6
    },
    "gp7": {
      "HP": 1650,
      "MP Charge": 6
    },
    "gp8": {
      "HP": 1650,
      "MP Charge": 8
    },
    "gp9": {
      "HP": 2100,
      "MP Charge": 8
    },
    "gp10": {
      "HP": 2100,
      "MP Charge": 10
    },
    "total": {
      "HP": 2100,
      "MP Charge": 10
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 289,
      "ATK": 23,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 347,
      "ATK": 28,
      "Phys Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 405,
      "ATK": 33,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 462,
      "ATK": 37,
      "Phys Crit": 7,
      "Block": 21
    },
    "g5": {
      "HP": 520,
      "ATK": 42,
      "Phys Crit": 8,
      "MP Charge": 4
    },
    "g6": {
      "HP": 578,
      "ATK": 47,
      "Phys Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 636,
      "ATK": 51,
      "Phys Crit": 10,
      "Block": 29
    },
    "g8": {
      "HP": 694,
      "ATK": 56,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 751,
      "ATK": 61,
      "Phys Crit": 11,
      "Block": 34
    },
    "g10": {
      "HP": 809,
      "ATK": 65,
      "Phys Crit": 12,
      "MP Charge": 6
    },
    "total": {
      "HP": 809,
      "ATK": 65,
      "Phys Crit": 12,
      "MP Charge": 6
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 229
    },
    {
      "grade": 2,
      "MP Charge": 1
    },
    {
      "grade": 3,
      "HP": 320
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "HP": 412
    },
    {
      "grade": 6,
      "MP Charge": 2
    },
    {
      "grade": 7,
      "HP": 503
    },
    {
      "grade": 8,
      "MP Charge": 2
    },
    {
      "grade": 9,
      "HP": 595
    },
    {
      "grade": 10,
      "MP Charge": 3
    },
    {
      "grade": 11,
      "HP": 625
    }
  ]
};;;;;;;;
