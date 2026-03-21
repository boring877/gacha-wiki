// Character data: abigail
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "abigail",
  "name": "Abigail",
  "displayName": "Abigail",
  "baseName": "Abigail",
  "title": null,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 365,
  "weaponType": "Throw",
  "skillTypes": [
    "Heal",
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "image": "Abigail",
  "introduction": "Middle Row、Physical、Support",
  "profile": {
    "height": "182cm",
    "bust": "113cm (K Cup)",
    "waist": "66cm",
    "hips": "103cm"
  },
  "credits": {
    "illustration": {
      "japanese": "オギノ",
      "romanized": ""
    },
    "voice": {
      "japanese": "あかしゆき",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2126
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Ether 125mg",
      "icon": "skill001/skill0011",
      "description": "MP dealphysical damageand inflicts Dispel for 2 seconds , 6s Paralysis for, 8 Accuracy -15 DOWN",
      "descriptionLv1": "MP dealphysical damageand inflicts Dispel for 2 seconds , 6s Paralysis for, 8 Accuracy -15 DOWN",
      "descriptionLv90": "MP dealphysical damageand inflicts Dispel for 2 seconds , 6s Paralysis for, 8 Accuracy -33 DOWN",
      "target": "Highest MP Enemy",
      "castTime": 0.5,
      "damageScaling": "300% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+20",
      "lvl1": "300% + 200",
      "lvl90": "300% + 182",
      "effects": [
        "Cleanse",
        "Paralysis",
        "Accuracy - LvMax"
      ],
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Accuracy - LvMax",
          "value": -15,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -0.2
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Adrenaline 1mg",
      "icon": "skill001/skill0021",
      "description": "restore HP to frontmost allyHP and inflicts HP Regeneration+150 for 8 seconds and Debuff Resistance UP for 8 seconds , 8 Damage Reduction",
      "descriptionLv1": "restore HP to frontmost allyHP and inflicts HP Regeneration+150 for 8 seconds and Debuff Resistance UP for 8 seconds , 8 Damage Reduction",
      "descriptionLv90": "restore HP to frontmost allyHP and inflicts HP Regeneration+150 for 8 seconds and Debuff Resistance UP for 8 seconds , 8 Damage Reduction",
      "target": "Frontmost Ally",
      "castTime": 1.58,
      "damageScaling": "3500% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+70",
      "lvl1": "3500% + 500",
      "lvl90": null,
      "effects": [
        "HP Regeneration+ Lv3",
        "Debuff Resistance Lv3",
        "Shield"
      ],
      "buffEffects": [
        {
          "name": "HP Regeneration+ Lv3",
          "value": 5,
          "type": "percent",
          "duration": 8,
          "levelGrowth": 7.0
        },
        {
          "name": "Debuff Resistance Lv3",
          "value": 0,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Shield",
          "value": 25,
          "type": "percent",
          "duration": 8
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Lethal Drug",
      "icon": "skill001/skill0012_1",
      "description": "MP dealphysical damage, inflict 5s , 5s Blind for",
      "effect": "800% + 400",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        }
      ]
    },
    {
      "rank": 2,
      "name": "Ether 125mg",
      "icon": "skill001/skill0011",
      "description": "MP dealphysical damageand inflicts Dispel for 2 seconds , 6s Paralysis for, 8 Accuracy -15 DOWN",
      "effect": "300% + 200",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Accuracy - LvMax",
          "value": -15,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Adrenaline 1mg",
      "icon": "skill001/skill0021",
      "description": "restore HP to frontmost allyHP and inflicts HP Regeneration+150 for 8 seconds and Debuff Resistance UP for 8 seconds , 8 Damage Reduction",
      "effect": "3500% + 500",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Lv3",
          "value": 5,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Debuff Resistance Lv3",
          "value": 0,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Shield",
          "value": 25,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Lethal Drug",
      "icon": "skill001/skill0012_1",
      "description": "MP dealphysical damage, inflict 5s , 5s Blind for",
      "effect": "800% + 400",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        }
      ]
    },
    {
      "rank": 5,
      "name": "Lethal Drug",
      "icon": "skill001/skill0012_2",
      "description": "MP dealphysical damage, inflict 5s , 6s Blind for",
      "effect": "960% + 500",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Taunt Resistance LvMax",
      "icon": "skill001/skill1003",
      "effect": "Physical Attack + (+259), Taunt Resistance LvMax (+1%)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Taunt Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Attack +, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+584), Magic Attack + (+584)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 584,
          "type": "flat"
        },
        {
          "name": "Magic Attack +",
          "value": 584,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Abigail",
  "id": 2126,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2056,
    "ATK": 329,
    "MATK": 197,
    "DEF": 169,
    "MDEF": 67
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Skill3 → Basic → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.88"
  },
  "slug": "abigail"
};

export const stats = {
  "id": "abigail",
  "characterId": 2126,
  "name": "Abigail",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2056,
      "lv90": 10281
    },
    "atk": {
      "base": 329,
      "lv90": 1645
    },
    "matk": {
      "base": 197,
      "lv90": 986
    },
    "def": {
      "base": 169,
      "lv90": 287
    },
    "mdef": {
      "base": 67,
      "lv90": 185
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
      "base": 78,
      "lv90": 125
    },
    "magicCrit": {
      "base": 47,
      "lv90": 75
    },
    "hpRegen": {
      "base": 102,
      "lv90": 359
    },
    "mpRegen": {
      "base": 62,
      "lv90": 249
    },
    "healPwr": {
      "base": 135,
      "lv90": 337
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
      "HP": 810,
      "ATK": 99,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 931,
      "ATK": 114,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 1093,
      "ATK": 133,
      "Block": 20,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 1215,
      "ATK": 148,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1973,
      "ATK": 304,
      "DEF": 43,
      "MDEF": 19,
      "Heal Pwr": 34
    },
    "total": {
      "HP": 6022,
      "ATK": 798,
      "Block": 75,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 43,
      "MDEF": 19,
      "Heal Pwr": 34
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "MP Charge": 2
    },
    "gp3": {
      "ATK": 120,
      "MP Charge": 2
    },
    "gp4": {
      "ATK": 120,
      "MP Charge": 4
    },
    "gp5": {
      "ATK": 200,
      "MP Charge": 4
    },
    "gp6": {
      "ATK": 200,
      "MP Charge": 6
    },
    "gp7": {
      "ATK": 280,
      "MP Charge": 6
    },
    "gp8": {
      "ATK": 360,
      "MP Charge": 8
    },
    "gp9": {
      "ATK": 360,
      "MP Charge": 8
    },
    "gp10": {
      "ATK": 360,
      "MP Charge": 10
    },
    "total": {
      "ATK": 360,
      "MP Charge": 10
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 284,
      "ATK": 35,
      "Phys Crit": 2,
      "Accuracy": 9
    },
    "g2": {
      "HP": 341,
      "ATK": 42,
      "Phys Crit": 2,
      "Block": 16
    },
    "g3": {
      "HP": 398,
      "ATK": 48,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 455,
      "ATK": 55,
      "Phys Crit": 3,
      "Block": 21
    },
    "g5": {
      "HP": 511,
      "ATK": 62,
      "Phys Crit": 3,
      "MP Charge": 5
    },
    "g6": {
      "HP": 568,
      "ATK": 69,
      "Phys Crit": 3,
      "Accuracy": 18
    },
    "g7": {
      "HP": 625,
      "ATK": 76,
      "Phys Crit": 4,
      "Block": 29
    },
    "g8": {
      "HP": 682,
      "ATK": 83,
      "Phys Crit": 4,
      "Accuracy": 21
    },
    "g9": {
      "HP": 739,
      "ATK": 90,
      "Phys Crit": 4,
      "Block": 34
    },
    "g10": {
      "HP": 795,
      "ATK": 97,
      "Phys Crit": 5,
      "MP Charge": 8
    },
    "total": {
      "HP": 795,
      "ATK": 97,
      "Phys Crit": 5,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 27
    },
    {
      "grade": 2,
      "MP Charge": 2
    },
    {
      "grade": 3,
      "ATK": 38
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "ATK": 49
    },
    {
      "grade": 6,
      "MP Charge": 3
    },
    {
      "grade": 7,
      "ATK": 60
    },
    {
      "grade": 8,
      "MP Charge": 3
    },
    {
      "grade": 9,
      "ATK": 71
    },
    {
      "grade": 10,
      "MP Charge": 4
    },
    {
      "grade": 11,
      "ATK": 75
    }
  ]
};;;;;;;;
