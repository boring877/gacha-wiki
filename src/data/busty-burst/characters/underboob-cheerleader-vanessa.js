// Character data: underboob-cheerleader-vanessa
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "underboob-cheerleader-vanessa",
  "name": "Underboob Cheerleader: Vanessa",
  "displayName": "Underboob Cheerleader: Vanessa",
  "baseName": "Vanessa",
  "title": "Underboob Cheerleader",
  "rarity": "SSR",
  "element": "Water",
  "role": "Support",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 390,
  "weaponType": "Throw",
  "skillTypes": [
    "Buff"
  ],
  "image": "Vanessa",
  "introduction": "Middle Row、Magical、Support",
  "profile": {
    "height": "164cm",
    "bust": "100cm (I Cup)",
    "waist": "61cm",
    "hips": "94cm"
  },
  "credits": {
    "illustration": {
      "japanese": "brick",
      "romanized": ""
    },
    "voice": {
      "japanese": "美月",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2128
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "To the G, to the O",
      "icon": "skill001/skill0014",
      "description": "without[Cheer Up(Speed10%UP)],, self inflict20 [Cheer Up], highest Mag ATK ally 1 15 Magic Attack +50 UP, 15 Magic Critical Damage 80 UP[Cheer Up] Lv when, inflict15 Hit-Based magic damageUP(30%, 5)",
      "descriptionLv1": "without[Cheer Up(Speed10%UP)],, self inflict20 [Cheer Up], highest Mag ATK ally 1 15 Magic Attack +50 UP, 15 Magic Critical Damage 80 UP[Cheer Up] Lv when, inflict15 Hit-Based magic damageUP(30%, 5)",
      "descriptionLv90": "without[Cheer Up(Speed10%UP)],, self inflict20 [Cheer Up], highest Mag ATK ally 1 15 Magic Attack +950 UP, 15 Magic Critical Damage 980 UP[Cheer Up] Lv when, inflict15 Hit-Based magic damageUP(30%, 5)",
      "target": "Highest Mag ATK Ally",
      "castTime": 1.25,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Cheer Up",
        "Magic Attack + LvMax",
        "Magic Critical Damage+ LvMax"
      ],
      "buffEffects": [
        {
          "name": "Cheer Up",
          "value": 10,
          "type": "flat",
          "duration": 20
        },
        {
          "name": "Magic Attack + LvMax",
          "value": 50,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 10.0
        },
        {
          "name": "Magic Critical Damage+ LvMax",
          "value": 80,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 10.0
        }
      ],
      "duration": 20
    },
    {
      "slot": 3,
      "name": "My finest performance!",
      "icon": "skill001/skill0019",
      "description": "highest Mag ATK ally 1inflict15 Hit-Based Shield(+9 hit(s)) and Block 13 UP for 15 seconds",
      "descriptionLv1": "highest Mag ATK ally 1inflict15 Hit-Based Shield(+9 hit(s)) and Block 13 UP for 15 seconds",
      "descriptionLv90": "highest Mag ATK ally 1inflict15 Hit-Based Shield(+9 hit(s)) and Block 26 UP for 15 seconds",
      "target": "Highest Mag ATK Ally",
      "castTime": 1.25,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Hit-Based Shield Lv5",
        "Block+ Lv5"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Shield Lv5",
          "value": 30,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Block+ Lv5",
          "value": 13,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 0.15
        }
      ],
      "duration": 15
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Let's GO！　Let's FIGHT",
      "icon": "skill001/skill0020_1",
      "description": "Applies Action Speed UP(LV 1) to all allies for 10 seconds and Accuracy UP(LV 1) for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        },
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
      "name": "To the G, to the O",
      "icon": "skill001/skill0014",
      "description": "without[Cheer Up(Speed10%UP)],, self inflict20 [Cheer Up], highest Mag ATK ally 1 15 Magic Attack +50 UP, 15 Magic Critical Damage 80 UP[Cheer Up] Lv when, inflict15 Hit-Based magic damageUP(30%, 5)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Cheer Up",
          "value": 10,
          "type": "flat",
          "duration": 20
        },
        {
          "name": "Magic Attack + LvMax",
          "value": 50,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Magic Critical Damage+ LvMax",
          "value": 80,
          "type": "flat",
          "duration": 15
        }
      ]
    },
    {
      "rank": 3,
      "name": "My finest performance!",
      "icon": "skill001/skill0019",
      "description": "highest Mag ATK ally 1inflict15 Hit-Based Shield(+9 hit(s)) and Block 13 UP for 15 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Hit-Based Shield Lv5",
          "value": 30,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Block+ Lv5",
          "value": 13,
          "type": "flat",
          "duration": 15
        }
      ]
    },
    {
      "rank": 4,
      "name": "Let's GO！　Let's FIGHT",
      "icon": "skill001/skill0020_1",
      "description": "Applies Action Speed UP(LV 1) to all allies for 10 seconds and Accuracy UP(LV 1) for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        },
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
      "name": "Let's GO！　Let's FIGHT",
      "icon": "skill001/skill0020_2",
      "description": "Applies Action Speed UP(LV 2) to all allies for 10 seconds and Accuracy UP(LV 2) for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 10
        },
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
      "name": "Max HP +, Debuff Resistance+",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+3444)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "MP Recovery+, Magic Attack +",
      "icon": "skill001/skill1007",
      "effect": "MP Recovery+ (+100%), Magic Attack + (+389)",
      "effectValues": [
        {
          "name": "MP Recovery+",
          "value": 100,
          "type": "percent"
        },
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Underboob Cheerleader: Vanessa",
  "id": 2128,
  "rarity": "SSR",
  "element": "Water",
  "role": "Support",
  "tags": [
    "Buff"
  ],
  "baseStats": {
    "HP": 1913,
    "ATK": 129,
    "MATK": 215,
    "DEF": 90,
    "MDEF": 226
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.82"
  },
  "slug": "underboob-cheerleader-vanessa"
};

export const stats = {
  "id": "underboob-cheerleader-vanessa",
  "characterId": 2128,
  "name": "【Underboob Cheerleader】Vanessa",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Buff"
  ],
  "baseStats": {
    "hp": {
      "base": 1913,
      "lv90": 9566
    },
    "atk": {
      "base": 129,
      "lv90": 645
    },
    "matk": {
      "base": 215,
      "lv90": 1075
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
      "lv90": 99
    },
    "block": {
      "base": 55,
      "lv90": 165
    },
    "physCrit": {
      "base": 249,
      "lv90": 398
    },
    "magicCrit": {
      "base": 416,
      "lv90": 665
    },
    "hpRegen": {
      "base": 95,
      "lv90": 334
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
      "base": 58,
      "lv90": 58
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
      "HP": 574,
      "MATK": 65,
      "Block": 17,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 660,
      "MATK": 74,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 775,
      "MATK": 87,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 861,
      "MATK": 97,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 2114,
      "MATK": 183,
      "DEF": 25,
      "MDEF": 58,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 4984,
      "MATK": 506,
      "Block": 83,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 25,
      "MDEF": 58,
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
      "HP": 201,
      "MATK": 23,
      "MDEF": 10,
      "Magic Crit": 9,
      "Accuracy": 9
    },
    "g2": {
      "HP": 242,
      "MATK": 27,
      "MDEF": 12,
      "Magic Crit": 11,
      "Block": 17
    },
    "g3": {
      "HP": 282,
      "MATK": 32,
      "MDEF": 14,
      "Magic Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 322,
      "MATK": 36,
      "MDEF": 16,
      "Magic Crit": 14,
      "Block": 23
    },
    "g5": {
      "HP": 363,
      "MATK": 41,
      "MDEF": 18,
      "Magic Crit": 16,
      "MP Charge": 5
    },
    "g6": {
      "HP": 403,
      "MATK": 45,
      "MDEF": 20,
      "Magic Crit": 18,
      "Accuracy": 18
    },
    "g7": {
      "HP": 443,
      "MATK": 50,
      "MDEF": 22,
      "Magic Crit": 19,
      "Block": 32
    },
    "g8": {
      "HP": 483,
      "MATK": 54,
      "MDEF": 24,
      "Magic Crit": 21,
      "Accuracy": 21
    },
    "g9": {
      "HP": 524,
      "MATK": 59,
      "MDEF": 27,
      "Magic Crit": 23,
      "Block": 38
    },
    "g10": {
      "HP": 564,
      "MATK": 63,
      "MDEF": 29,
      "Magic Crit": 25,
      "MP Charge": 8
    },
    "total": {
      "HP": 564,
      "MATK": 63,
      "MDEF": 29,
      "Magic Crit": 25,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 159
    },
    {
      "grade": 2,
      "MP Charge": 1
    },
    {
      "grade": 3,
      "HP": 223
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "HP": 287
    },
    {
      "grade": 6,
      "MP Charge": 2
    },
    {
      "grade": 7,
      "HP": 351
    },
    {
      "grade": 8,
      "MP Charge": 3
    },
    {
      "grade": 9,
      "HP": 415
    },
    {
      "grade": 10,
      "MP Charge": 3
    },
    {
      "grade": 11,
      "HP": 436
    }
  ]
};;;;;;;;
