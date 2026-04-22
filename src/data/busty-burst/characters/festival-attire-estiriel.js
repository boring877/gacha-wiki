// Character data: festival-attire-estiriel
// Merged from info/skills/stats files

export const info = {
  "slug": "festival-attire-estiriel",
  "name": "[Festival Attire] Estiriel",
  "displayName": "Festival Attire Estiriel",
  "baseName": "Estiriel",
  "title": "Festival Attire",
  "rarity": "SSR",
  "element": "Light",
  "role": "Support",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 520,
  "weaponType": "Throw",
  "skillTypes": [
    "Heal",
    "Buff"
  ],
  "image": "Festive_Attire_Estiriel",
  "introduction": "Back Row、Magical、Support",
  "profile": {
    "height": "165cm",
    "bust": "95cm (G Cup)",
    "waist": "61cm",
    "hips": "89cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u30b5\u30d6\u30ed\u30fc",
      "romanized": "Saburo"
    },
    "voice": {
      "japanese": "\u7f8e\u7a7a\u306a\u3064\u3072",
      "romanized": "Misora Natsuhi"
    }
  },
  "obtain": {
    "type": "limited",
    "source": "Vern Founding Festival (Dec 4 - Dec 18)"
  }
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Ripples of the Abyss",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to all allies and inflicts Physical Defense 15%+100 UP for 8 seconds and Magic Defense 15%+100 UP for 8 seconds",
      "descriptionLv1": "Restores HP by to all allies and inflicts Physical Defense 15%+100 UP for 8 seconds and Magic Defense 15%+100 UP for 8 seconds",
      "descriptionLv90": "Restores HP by to all allies and inflicts Physical Defense 15%+190 UP for 8 seconds and Magic Defense 15%+190 UP for 8 seconds",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": "2000% ATK",
      "baseDamage": "+370",
      "levelGrowth": "+40",
      "lvl1": "2000% + 370",
      "lvl90": "2000% + 459",
      "effects": [
        "Physical Defense + Lv2",
        "Magic Defense+ Lv2"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + Lv2",
          "value": 100,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 1.0
        },
        {
          "name": "Magic Defense+ Lv2",
          "value": 100,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 1.0
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Slumber of the Seashell",
      "icon": "skill001/skill0019",
      "description": "Applies Action Speed 14%UP to all allies for 6 seconds and Accuracy 9 UP for 6 seconds",
      "descriptionLv1": "Applies Action Speed 14%UP to all allies for 6 seconds and Accuracy 9 UP for 6 seconds",
      "descriptionLv90": "Applies Action Speed 14%UP to all allies for 6 seconds and Accuracy 18 UP for 6 seconds",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Action Speed + Lv3",
        "Accuracy + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 6
        },
        {
          "name": "Accuracy + Lv3",
          "value": 9,
          "type": "flat",
          "duration": 6,
          "levelGrowth": 0.1
        }
      ],
      "duration": 6
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Spirits, sing—offer blessings for this new birth",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to all allies and inflicts Debuff Resistance UP(LV 1) for 7 seconds and BlockUP(LV 1) for 7 seconds",
      "effect": "2700% + 1200",
      "buffEffects": [
        {
          "name": "Debuff Resistance + Ultimate Lv1",
          "value": 0,
          "type": "percent",
          "duration": 7
        },
        {
          "name": "Block+ Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 7
        }
      ]
    },
    {
      "rank": 2,
      "name": "Spirits, sing—offer blessings for this new birth",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by to all allies and inflicts Debuff Resistance UP(LV 2) for 7 seconds and BlockUP(LV 2) for 7 seconds",
      "effect": "3100% + 1400",
      "buffEffects": [
        {
          "name": "Debuff Resistance + Ultimate Lv2",
          "value": 0,
          "type": "percent",
          "duration": 7
        },
        {
          "name": "Block+ Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 7
        }
      ]
    },
    {
      "rank": 3,
      "name": "Spirits, sing—offer blessings for this new birth",
      "icon": "skill001/skill0022_3",
      "description": "Restores HP by to all allies and inflicts Debuff Resistance UP(LV 3) for 7 seconds and BlockUP(LV 3) for 7 seconds",
      "effect": "3250% + 1600",
      "buffEffects": [
        {
          "name": "Debuff Resistance + Ultimate Lv3",
          "value": 0,
          "type": "percent",
          "duration": 7
        },
        {
          "name": "Block+ Ultimate Lv3",
          "value": 16,
          "type": "flat",
          "duration": 7
        }
      ]
    },
    {
      "rank": 4,
      "name": "Spirits, sing—offer blessings for this new birth",
      "icon": "skill001/skill0022_4",
      "description": "Restores HP by to all allies and inflicts Debuff Resistance UP(LV 4) for 7 seconds and BlockUP(LV 4) for 7 seconds",
      "effect": "3500% + 1750",
      "buffEffects": [
        {
          "name": "Debuff Resistance + Ultimate Lv4",
          "value": 0,
          "type": "percent",
          "duration": 7
        },
        {
          "name": "Block+ Ultimate Lv4",
          "value": 18,
          "type": "flat",
          "duration": 7
        }
      ]
    },
    {
      "rank": 5,
      "name": "Spirits, sing—offer blessings for this new birth",
      "icon": "skill001/skill0022_5",
      "description": "Restores HP by to all allies and inflicts Debuff Resistance UP(LV 5) for 7 seconds and BlockUP(LV 5) for 7 seconds",
      "effect": "3650% + 1900",
      "buffEffects": [
        {
          "name": "Debuff Resistance + Ultimate Lv5",
          "value": 0,
          "type": "percent",
          "duration": 7
        },
        {
          "name": "Block+ Ultimate Lv5",
          "value": 20,
          "type": "flat",
          "duration": 7
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Debuff Resistance +",
      "icon": "skill001/skill1004",
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
      "name": "Max HP +, Block+",
      "icon": "skill001/skill1006",
      "effect": "Max HP + (+1447), Block+ (+15)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 1447,
          "type": "flat"
        },
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Festival Attire: Estiriel",
  "id": 2069,
  "rarity": "SSR",
  "element": "Light",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff"
  ],
  "baseStats": {
    "HP": 3352,
    "ATK": 151,
    "MATK": 253,
    "DEF": 14,
    "MDEF": 35
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Skill2 → Basic → Basic",
    "loop": "Basic → Skill3 → Basic → Basic → Basic → Basic → Skill2 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "festival-attire-estiriel"
};

export const stats = {
  "id": "festival-attire-estiriel",
  "characterId": 2069,
  "name": "【Festival Attire】Estiriel",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff"
  ],
  "baseStats": {
    "hp": {
      "base": 3352,
      "lv90": 16760
    },
    "atk": {
      "base": 151,
      "lv90": 758
    },
    "matk": {
      "base": 253,
      "lv90": 1265
    },
    "def": {
      "base": 14,
      "lv90": 28
    },
    "mdef": {
      "base": 35,
      "lv90": 70
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 45,
      "lv90": 135
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
      "base": 167,
      "lv90": 586
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
      "base": 77,
      "lv90": 77
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
      "MATK": 76,
      "Block": 17,
      "MP Charge": 8
    },
    "lb2": {
      "HP": 893,
      "MATK": 87,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 1048,
      "MATK": 102,
      "Block": 22,
      "MP Charge": 10
    },
    "lb4": {
      "HP": 1165,
      "MATK": 114,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 2812,
      "MATK": 226,
      "DEF": 6,
      "MDEF": 11,
      "Heal Pwr": 33
    },
    "total": {
      "HP": 6695,
      "MATK": 605,
      "Block": 83,
      "MP Charge": 18,
      "Accuracy": 30,
      "DEF": 6,
      "MDEF": 11,
      "Heal Pwr": 33
    }
  },
  "gpAbility": {
    "gp1": {
      "Heal Pwr": 20
    },
    "gp2": {
      "Heal Pwr": 20,
      "MP Charge": 3
    },
    "gp3": {
      "Heal Pwr": 45,
      "MP Charge": 3
    },
    "gp4": {
      "Heal Pwr": 45,
      "MP Charge": 7
    },
    "gp5": {
      "Heal Pwr": 70,
      "MP Charge": 7
    },
    "gp6": {
      "Heal Pwr": 70,
      "MP Charge": 9
    },
    "gp7": {
      "Heal Pwr": 95,
      "MP Charge": 9
    },
    "gp8": {
      "Heal Pwr": 95,
      "MP Charge": 11
    },
    "gp9": {
      "Heal Pwr": 120,
      "MP Charge": 11
    },
    "gp10": {
      "Heal Pwr": 120,
      "MP Charge": 13
    },
    "total": {
      "Heal Pwr": 120,
      "MP Charge": 13
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 353,
      "MATK": 27,
      "MDEF": 2,
      "Magic Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 423,
      "MATK": 32,
      "MDEF": 2,
      "Magic Crit": 5,
      "Block": 14
    },
    "g3": {
      "HP": 494,
      "MATK": 37,
      "MDEF": 2,
      "Magic Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 565,
      "MATK": 43,
      "MDEF": 3,
      "Magic Crit": 7,
      "Block": 19
    },
    "g5": {
      "HP": 635,
      "MATK": 48,
      "MDEF": 3,
      "Magic Crit": 8,
      "MP Charge": 7
    },
    "g6": {
      "HP": 706,
      "MATK": 53,
      "MDEF": 3,
      "Magic Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 776,
      "MATK": 59,
      "MDEF": 4,
      "Magic Crit": 10,
      "Block": 26
    },
    "g8": {
      "HP": 847,
      "MATK": 64,
      "MDEF": 4,
      "Magic Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 917,
      "MATK": 69,
      "MDEF": 4,
      "Magic Crit": 11,
      "Block": 31
    },
    "g10": {
      "HP": 988,
      "MATK": 75,
      "MDEF": 5,
      "Magic Crit": 12,
      "MP Charge": 10
    },
    "total": {
      "HP": 988,
      "MATK": 75,
      "MDEF": 5,
      "Magic Crit": 12,
      "MP Charge": 10
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Heal Pwr": 4
    },
    {
      "grade": 2,
      "MP Charge": 2
    },
    {
      "grade": 3,
      "Heal Pwr": 6
    },
    {
      "grade": 4,
      "MP Charge": 3
    },
    {
      "grade": 5,
      "Heal Pwr": 8
    },
    {
      "grade": 6,
      "MP Charge": 3
    },
    {
      "grade": 7,
      "Heal Pwr": 9
    },
    {
      "grade": 8,
      "MP Charge": 4
    },
    {
      "grade": 9,
      "Heal Pwr": 11
    },
    {
      "grade": 10,
      "MP Charge": 5
    },
    {
      "grade": 11,
      "Heal Pwr": 12
    }
  ]
};;;;;;;;
