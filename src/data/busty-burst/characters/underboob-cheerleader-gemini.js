// Character data: underboob-cheerleader-gemini
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "underboob-cheerleader-gemini",
  "name": "Underboob Cheerleader: Gemini",
  "displayName": "Underboob Cheerleader: Gemini",
  "baseName": "Gemini",
  "title": "Underboob Cheerleader",
  "rarity": "SSR",
  "element": "Wind",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 390,
  "weaponType": "Throw",
  "skillTypes": [
    "Buff"
  ],
  "image": "Gemini",
  "introduction": "Front Row、Physical、Support",
  "profile": {
    "height": "166cm",
    "bust": "114cm (M Cup)",
    "waist": "66cm",
    "hips": "100cm"
  },
  "credits": {
    "illustration": {
      "japanese": "れむ",
      "romanized": ""
    },
    "voice": {
      "japanese": "森乃なんな",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2127
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Get on your feet Yell",
      "icon": "skill001/skill0013",
      "description": "without[Cheer Up(Speed10%UP)],, self inflict20 [Cheer Up], highest Phys ATK ally 1 15 Physical Attack 25%+50 UP, 15 Physical Critical Damage 80 UP[Cheer Up] Lv when, inflict15 Hit-Based physical damageUP(30%, 5)",
      "descriptionLv1": "without[Cheer Up(Speed10%UP)],, self inflict20 [Cheer Up], highest Phys ATK ally 1 15 Physical Attack 25%+50 UP, 15 Physical Critical Damage 80 UP[Cheer Up] Lv when, inflict15 Hit-Based physical damageUP(30%, 5)",
      "descriptionLv90": "without[Cheer Up(Speed10%UP)],, self inflict20 [Cheer Up], highest Phys ATK ally 1 15 Physical Attack 25%+950 UP, 15 Physical Critical Damage 80 UP[Cheer Up] Lv when, inflict15 Hit-Based physical damageUP(30%, 5)",
      "target": "Highest Phys ATK Ally",
      "castTime": 1.3,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Cheer Up",
        "Physical Attack + LvMax",
        "Physical Critical Damage+ LvMax"
      ],
      "buffEffects": [
        {
          "name": "Cheer Up",
          "value": 10,
          "type": "flat",
          "duration": 20
        },
        {
          "name": "Physical Attack + LvMax",
          "value": 50,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 10.0
        },
        {
          "name": "Physical Critical Damage+ LvMax",
          "value": 80,
          "type": "percent",
          "duration": 15,
          "levelGrowth": 10.0
        }
      ],
      "duration": 20
    },
    {
      "slot": 3,
      "name": "A gorgeous opening!",
      "icon": "skill001/skill0019",
      "description": "highest Phys ATK ally 1inflict15 Physical Defense 30%+190 UP and Magic Defense 30%+190 UP for 15 seconds",
      "descriptionLv1": "highest Phys ATK ally 1inflict15 Physical Defense 30%+190 UP and Magic Defense 30%+190 UP for 15 seconds",
      "descriptionLv90": "highest Phys ATK ally 1inflict15 Physical Defense 30%+460 UP and Magic Defense 30%+460 UP for 15 seconds",
      "target": "Highest Phys ATK Ally",
      "castTime": 1.3,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Defense + Lv5",
        "Magic Defense+ Lv5"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + Lv5",
          "value": 190,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 3.0
        },
        {
          "name": "Magic Defense+ Lv5",
          "value": 190,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 3.0
        }
      ],
      "duration": 15
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "GO　FIGHT　WIN！！",
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
      "name": "GO　FIGHT　WIN！！",
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
    },
    {
      "rank": 3,
      "name": "GO　FIGHT　WIN！！",
      "icon": "skill001/skill0020_3",
      "description": "Applies Action Speed UP(LV 3) to all allies for 10 seconds and Accuracy UP(LV 3) for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv3",
          "value": 16,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Accuracy + Ultimate Lv3",
          "value": 16,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "GO　FIGHT　WIN！！",
      "icon": "skill001/skill0020_4",
      "description": "Applies Action Speed UP(LV 4) to all allies for 10 seconds and Accuracy UP(LV 4) for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv4",
          "value": 18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Accuracy + Ultimate Lv4",
          "value": 18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "GO　FIGHT　WIN！！",
      "icon": "skill001/skill0020_5",
      "description": "Applies Action Speed UP(LV 5) to all allies for 10 seconds and Accuracy UP(LV 5) for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv5",
          "value": 20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Accuracy + Ultimate Lv5",
          "value": 20,
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
      "name": "MP Recovery+, Physical Attack +",
      "icon": "skill001/skill1007",
      "effect": "MP Recovery+ (+100%), Physical Attack + (+389)",
      "effectValues": [
        {
          "name": "MP Recovery+",
          "value": 100,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Underboob Cheerleader: Gemini",
  "id": 2127,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Support",
  "tags": [
    "Buff"
  ],
  "baseStats": {
    "HP": 2588,
    "ATK": 215,
    "MATK": 129,
    "DEF": 82,
    "MDEF": 32
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.85"
  },
  "slug": "underboob-cheerleader-gemini"
};

export const stats = {
  "id": "underboob-cheerleader-gemini",
  "characterId": 2127,
  "name": "【Underboob Cheerleader】Gemini",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Buff"
  ],
  "baseStats": {
    "hp": {
      "base": 2588,
      "lv90": 12943
    },
    "atk": {
      "base": 215,
      "lv90": 1075
    },
    "matk": {
      "base": 129,
      "lv90": 645
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
      "lv90": 99
    },
    "block": {
      "base": 55,
      "lv90": 165
    },
    "physCrit": {
      "base": 416,
      "lv90": 665
    },
    "magicCrit": {
      "base": 249,
      "lv90": 398
    },
    "hpRegen": {
      "base": 129,
      "lv90": 452
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
      "HP": 777,
      "ATK": 65,
      "Block": 17,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 893,
      "ATK": 74,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 1048,
      "ATK": 87,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1165,
      "ATK": 97,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 2739,
      "ATK": 183,
      "DEF": 23,
      "MDEF": 6,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 6622,
      "ATK": 506,
      "Block": 83,
      "MP Charge": 12,
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
      "HP": 273,
      "ATK": 23,
      "Phys Crit": 9,
      "Accuracy": 9
    },
    "g2": {
      "HP": 327,
      "ATK": 27,
      "Phys Crit": 11,
      "Block": 17
    },
    "g3": {
      "HP": 382,
      "ATK": 32,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 436,
      "ATK": 36,
      "Phys Crit": 14,
      "Block": 23
    },
    "g5": {
      "HP": 491,
      "ATK": 41,
      "Phys Crit": 16,
      "MP Charge": 5
    },
    "g6": {
      "HP": 545,
      "ATK": 45,
      "Phys Crit": 18,
      "Accuracy": 18
    },
    "g7": {
      "HP": 600,
      "ATK": 50,
      "Phys Crit": 19,
      "Block": 32
    },
    "g8": {
      "HP": 654,
      "ATK": 54,
      "Phys Crit": 21,
      "Accuracy": 21
    },
    "g9": {
      "HP": 709,
      "ATK": 59,
      "Phys Crit": 23,
      "Block": 38
    },
    "g10": {
      "HP": 763,
      "ATK": 63,
      "Phys Crit": 25,
      "MP Charge": 8
    },
    "total": {
      "HP": 763,
      "ATK": 63,
      "Phys Crit": 25,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 216
    },
    {
      "grade": 2,
      "MP Charge": 1
    },
    {
      "grade": 3,
      "HP": 302
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "HP": 388
    },
    {
      "grade": 6,
      "MP Charge": 2
    },
    {
      "grade": 7,
      "HP": 475
    },
    {
      "grade": 8,
      "MP Charge": 3
    },
    {
      "grade": 9,
      "HP": 561
    },
    {
      "grade": 10,
      "MP Charge": 3
    },
    {
      "grade": 11,
      "HP": 589
    }
  ]
};;;;;;;;
