// Character data: songstress-of-the-sky-festival-bernadette
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "songstress-of-the-sky-festival-bernadette",
  "name": "Songstress of the Sky Festival: Bernadette",
  "displayName": "Songstress of the Sky Festival: Bernadette",
  "baseName": "Bernadette",
  "title": "Songstress of the Sky Festival",
  "rarity": "SR",
  "element": "Wind",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 235,
  "weaponType": "Throw",
  "skillTypes": [
    "Buff",
    "Debuff",
    "MP Recovery"
  ],
  "image": "Bernadette",
  "introduction": "Back Row、Physical、Support",
  "profile": {
    "height": "177cm",
    "bust": "113cm (M Cup)",
    "waist": "64cm",
    "hips": "90cm"
  },
  "credits": {
    "illustration": {
      "japanese": "brick",
      "romanized": ""
    },
    "voice": {
      "japanese": "三十三七",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2159
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Can you stay away from me?",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Block-11 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Block-11 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Block-23 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.35,
      "damageScaling": "280% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+20",
      "lvl1": "280% + 150",
      "lvl90": "280% + 138",
      "effects": [
        "Block- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.13
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "I look elegant in anything!",
      "icon": "skill001/skill0019",
      "description": "Applies MP Regeneration 30 to self for 10 seconds and Block 11 UP for 12 seconds",
      "descriptionLv1": "Applies MP Regeneration 30 to self for 10 seconds and Block 11 UP for 12 seconds",
      "descriptionLv90": "Applies MP Regeneration 30 to self for 10 seconds and Block 23 UP for 12 seconds",
      "target": "Self",
      "castTime": 1.35,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "MP Regeneration + Lv4",
        "Block+ Lv4"
      ],
      "buffEffects": [
        {
          "name": "MP Regeneration + Lv4",
          "value": 30,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block+ Lv4",
          "value": 11,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 0.13
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "My Radiant Flower Shining in the Night Sky",
      "icon": "skill001/skill0020_1",
      "description": "Applies Accuracy UP(LV 1) to all allies for 10 seconds and Physical Critical DamageUP(LV 1) for 10 seconds , 10 Magic Critical DamageUP(LV 1)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Accuracy + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Critical Damage+ Ultimate Lv1",
          "value": 200,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage+ Ultimate Lv1",
          "value": 200,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Can you stay away from me?",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Block-11 DOWN for 6 seconds",
      "effect": "280% + 150",
      "buffEffects": [
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "I look elegant in anything!",
      "icon": "skill001/skill0019",
      "description": "Applies MP Regeneration 30 to self for 10 seconds and Block 11 UP for 12 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "MP Regeneration + Lv4",
          "value": 30,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block+ Lv4",
          "value": 11,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "My Radiant Flower Shining in the Night Sky",
      "icon": "skill001/skill0020_1",
      "description": "Applies Accuracy UP(LV 1) to all allies for 10 seconds and Physical Critical DamageUP(LV 1) for 10 seconds , 10 Magic Critical DamageUP(LV 1)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Accuracy + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Critical Damage+ Ultimate Lv1",
          "value": 200,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage+ Ultimate Lv1",
          "value": 200,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "My Radiant Flower Shining in the Night Sky",
      "icon": "skill001/skill0020_2",
      "description": "Applies Accuracy UP(LV 2) to all allies for 10 seconds and Physical Critical DamageUP(LV 2) for 10 seconds , 10 Magic Critical DamageUP(LV 2)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Accuracy + Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Critical Damage+ Ultimate Lv2",
          "value": 250,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage+ Ultimate Lv2",
          "value": 250,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "MP Recovery",
      "icon": "skill001/skill1003",
      "effect": "MP Recovery (+50%)",
      "effectValues": [
        {
          "name": "MP Recovery",
          "value": 50,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Action Speed +, Max HP +",
      "icon": "skill001/skill1005",
      "effect": "Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Songstress of the Sky Festival: Bernadette",
  "id": 2159,
  "rarity": "SR",
  "element": "Wind",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 1747,
    "ATK": 213,
    "MATK": 128,
    "DEF": 170,
    "MDEF": 122
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.85"
  },
  "slug": "songstress-of-the-sky-festival-bernadette"
};

export const stats = {
  "id": "songstress-of-the-sky-festival-bernadette",
  "characterId": 2159,
  "name": "【Songstress of the Sky Festival】Bernadette",
  "rarity": "SR",
  "element": "風",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff",
    "MP Recovery"
  ],
  "baseStats": {
    "hp": {
      "base": 1747,
      "lv90": 8735
    },
    "atk": {
      "base": 213,
      "lv90": 1067
    },
    "matk": {
      "base": 128,
      "lv90": 640
    },
    "def": {
      "base": 170,
      "lv90": 345
    },
    "mdef": {
      "base": 122,
      "lv90": 239
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 55,
      "lv90": 165
    },
    "physCrit": {
      "base": 287,
      "lv90": 459
    },
    "magicCrit": {
      "base": 172,
      "lv90": 275
    },
    "hpRegen": {
      "base": 87,
      "lv90": 305
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
      "base": 65,
      "lv90": 65
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
      "HP": 524,
      "ATK": 64,
      "Block": 17,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 603,
      "ATK": 74,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 708,
      "ATK": 87,
      "Block": 22,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 786,
      "ATK": 96,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1374,
      "ATK": 157,
      "DEF": 45,
      "MDEF": 22
    },
    "total": {
      "HP": 3995,
      "ATK": 478,
      "Block": 83,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 45,
      "MDEF": 22
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 200
    },
    "gp2": {
      "HP": 200,
      "Block": 2
    },
    "gp3": {
      "HP": 500,
      "Block": 2
    },
    "gp4": {
      "HP": 500,
      "Block": 5
    },
    "gp5": {
      "HP": 800,
      "Block": 5
    },
    "gp6": {
      "HP": 800,
      "Block": 7
    },
    "gp7": {
      "HP": 1100,
      "Block": 7
    },
    "gp8": {
      "HP": 1100,
      "Block": 9
    },
    "gp9": {
      "HP": 1400,
      "Block": 9
    },
    "gp10": {
      "HP": 1400,
      "Block": 11
    },
    "total": {
      "HP": 1400,
      "Block": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 184,
      "ATK": 22,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 221,
      "ATK": 27,
      "Phys Crit": 7,
      "Block": 17
    },
    "g3": {
      "HP": 257,
      "ATK": 31,
      "Phys Crit": 8,
      "Accuracy": 12
    },
    "g4": {
      "HP": 294,
      "ATK": 36,
      "Phys Crit": 10,
      "Block": 23
    },
    "g5": {
      "HP": 331,
      "ATK": 40,
      "Phys Crit": 11,
      "MP Charge": 5
    },
    "g6": {
      "HP": 368,
      "ATK": 45,
      "Phys Crit": 12,
      "Accuracy": 18
    },
    "g7": {
      "HP": 405,
      "ATK": 49,
      "Phys Crit": 13,
      "Block": 32
    },
    "g8": {
      "HP": 441,
      "ATK": 54,
      "Phys Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 478,
      "ATK": 58,
      "Phys Crit": 16,
      "Block": 38
    },
    "g10": {
      "HP": 515,
      "ATK": 63,
      "Phys Crit": 17,
      "MP Charge": 8
    },
    "total": {
      "HP": 515,
      "ATK": 63,
      "Phys Crit": 17,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 146
    },
    {
      "grade": 2,
      "MP Charge": 2
    },
    {
      "grade": 3,
      "HP": 204
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "HP": 262
    },
    {
      "grade": 6,
      "MP Charge": 3
    },
    {
      "grade": 7,
      "HP": 320
    },
    {
      "grade": 8,
      "MP Charge": 3
    },
    {
      "grade": 9,
      "HP": 379
    },
    {
      "grade": 10,
      "MP Charge": 4
    },
    {
      "grade": 11,
      "HP": 417
    }
  ]
};;;;;;;;
