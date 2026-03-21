// Character data: venus
// Merged from info/skills/stats files

export const info = {
  "slug": "venus",
  "name": "Venus",
  "displayName": "Venus",
  "baseName": "Venus",
  "title": null,
  "rarity": "SR",
  "element": "Light",
  "role": "Support",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Slightly Slow",
  "range": 520,
  "weaponType": "Throw",
  "skillTypes": [
    "Buff"
  ],
  "image": "Venus",
  "introduction": "Back Row、Magical、Support",
  "profile": {
    "height": "166cm",
    "bust": "107cm (L Cup)",
    "waist": "61cm",
    "hips": "99cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": "Q-Gaku"
    },
    "voice": {
      "japanese": "\u5fa1\u82d1\u751f\u30e1\u30a4",
      "romanized": "Misonoo Mei"
    }
  },
  "obtain": {
    "type": "permanent",
    "source": "Standard Banner"
  }
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Charming Smile",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage 40 UP to Front Row allies for 8 seconds and Magic Critical Damage 40 UP for 8 seconds",
      "descriptionLv1": "Applies Physical Critical Damage 40 UP to Front Row allies for 8 seconds and Magic Critical Damage 40 UP for 8 seconds",
      "descriptionLv90": "Applies Physical Critical Damage 490 UP to Front Row allies for 8 seconds and Magic Critical Damage 40 UP for 8 seconds",
      "target": "Frontmost Ally",
      "castTime": 1.58,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv3",
        "Magic Critical Damage+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv3",
          "value": 40,
          "type": "percent",
          "duration": 8,
          "levelGrowth": 5.0
        },
        {
          "name": "Magic Critical Damage+ Lv3",
          "value": 40,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 5.0
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Blessing of the Love Goddess",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Defense +140 UP to Front Row allies for 8 seconds and Magic Defense+140 UP for 8 seconds",
      "descriptionLv1": "Applies Physical Defense +140 UP to Front Row allies for 8 seconds and Magic Defense+140 UP for 8 seconds",
      "descriptionLv90": "Applies Physical Defense +320 UP to Front Row allies for 8 seconds and Magic Defense+320 UP for 8 seconds",
      "target": "Frontmost Ally",
      "castTime": 1.58,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Defense + Lv3",
        "Magic Defense+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + Lv3",
          "value": 140,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 2.0
        },
        {
          "name": "Magic Defense+ Lv3",
          "value": 140,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 2.0
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Grace Granted by the Love Goddess",
      "icon": "skill001/skill0020_1",
      "description": "Applies Physical Attack UP(LV 1) to Front Row allies for 10 seconds and Magic Attack UP(LV 1) for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Attack + Ultimate Lv1",
          "value": 20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Charming Smile",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage 40 UP to Front Row allies for 8 seconds and Magic Critical Damage 40 UP for 8 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv3",
          "value": 40,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Magic Critical Damage+ Lv3",
          "value": 40,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Blessing of the Love Goddess",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Defense +140 UP to Front Row allies for 8 seconds and Magic Defense+140 UP for 8 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Defense + Lv3",
          "value": 140,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Magic Defense+ Lv3",
          "value": 140,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Grace Granted by the Love Goddess",
      "icon": "skill001/skill0020_1",
      "description": "Applies Physical Attack UP(LV 1) to Front Row allies for 10 seconds and Magic Attack UP(LV 1) for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Attack + Ultimate Lv1",
          "value": 20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Grace Granted by the Love Goddess",
      "icon": "skill001/skill0020_2",
      "description": "Applies Physical Attack UP(LV 2) to Front Row allies for 10 seconds and Magic Attack UP(LV 2) for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv2",
          "value": 25,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Attack + Ultimate Lv2",
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
      "name": "Physical Attack +, Magic Attack +",
      "icon": "skill001/skill1005",
      "effect": "Physical Attack + (+300), Magic Attack + (+300)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 300,
          "type": "flat"
        },
        {
          "name": "Magic Attack +",
          "value": 300,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Critical Damage+, Magic Critical Damage+",
      "icon": "skill001/skill1005",
      "effect": "Physical Critical Damage+ (+120%), Magic Critical Damage+ (+120)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 120,
          "type": "percent"
        },
        {
          "name": "Magic Critical Damage+",
          "value": 120,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Venus",
  "id": 2033,
  "rarity": "SR",
  "element": "Holy",
  "role": "Support",
  "tags": [
    "Buff"
  ],
  "baseStats": {
    "HP": 2707,
    "ATK": 156,
    "MATK": 259,
    "DEF": 25,
    "MDEF": 65
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "venus"
};

export const stats = {
  "id": "venus",
  "characterId": 2033,
  "name": "Venus",
  "rarity": "SR",
  "element": "聖",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Buff"
  ],
  "baseStats": {
    "hp": {
      "base": 2707,
      "lv90": 13537
    },
    "atk": {
      "base": 156,
      "lv90": 780
    },
    "matk": {
      "base": 259,
      "lv90": 1298
    },
    "def": {
      "base": 25,
      "lv90": 50
    },
    "mdef": {
      "base": 65,
      "lv90": 130
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
      "base": 114,
      "lv90": 182
    },
    "magicCrit": {
      "base": 191,
      "lv90": 305
    },
    "hpRegen": {
      "base": 135,
      "lv90": 473
    },
    "mpRegen": {
      "base": 56,
      "lv90": 225
    },
    "healPwr": {
      "base": 117,
      "lv90": 293
    },
    "mpCharge": {
      "base": 74,
      "lv90": 74
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
      "HP": 812,
      "MATK": 78,
      "Block": 14,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 934,
      "MATK": 90,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 1097,
      "MATK": 105,
      "Block": 18,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 1218,
      "MATK": 117,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 2139,
      "ATK": 205,
      "DEF": 5,
      "MDEF": 18,
      "Heal Pwr": 27
    },
    "total": {
      "HP": 6200,
      "MATK": 390,
      "Block": 68,
      "MP Charge": 16,
      "Accuracy": 30,
      "ATK": 205,
      "DEF": 5,
      "MDEF": 18,
      "Heal Pwr": 27
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Cost Down": 2
    },
    "gp2": {
      "MP Charge": 2,
      "MP Cost Down": 2
    },
    "gp3": {
      "MP Charge": 2,
      "MP Cost Down": 3
    },
    "gp4": {
      "MP Charge": 5,
      "MP Cost Down": 3
    },
    "gp5": {
      "MP Charge": 5,
      "MP Cost Down": 4
    },
    "gp6": {
      "MP Charge": 7,
      "MP Cost Down": 4
    },
    "gp7": {
      "MP Charge": 7,
      "MP Cost Down": 5
    },
    "gp8": {
      "MP Charge": 9,
      "MP Cost Down": 5
    },
    "gp9": {
      "MP Charge": 9,
      "MP Cost Down": 6
    },
    "gp10": {
      "MP Charge": 11,
      "MP Cost Down": 6
    },
    "total": {
      "MP Charge": 11,
      "MP Cost Down": 6
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 285,
      "MATK": 27,
      "MDEF": 3,
      "Magic Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 342,
      "MATK": 33,
      "MDEF": 4,
      "Magic Crit": 5,
      "Block": 14
    },
    "g3": {
      "HP": 399,
      "MATK": 38,
      "MDEF": 4,
      "Magic Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 456,
      "MATK": 44,
      "MDEF": 5,
      "Magic Crit": 6,
      "Block": 19
    },
    "g5": {
      "HP": 513,
      "MATK": 49,
      "MDEF": 5,
      "Magic Crit": 7,
      "MP Charge": 6
    },
    "g6": {
      "HP": 570,
      "MATK": 55,
      "MDEF": 6,
      "Magic Crit": 8,
      "Accuracy": 18
    },
    "g7": {
      "HP": 627,
      "MATK": 60,
      "MDEF": 6,
      "Magic Crit": 9,
      "Block": 26
    },
    "g8": {
      "HP": 684,
      "MATK": 66,
      "MDEF": 7,
      "Magic Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 741,
      "MATK": 71,
      "MDEF": 8,
      "Magic Crit": 10,
      "Block": 31
    },
    "g10": {
      "HP": 798,
      "MATK": 77,
      "MDEF": 8,
      "Magic Crit": 11,
      "MP Charge": 10
    },
    "total": {
      "HP": 798,
      "MATK": 77,
      "MDEF": 8,
      "Magic Crit": 11,
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
      "MP Charge": 2
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "MP Charge": 3
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "MP Charge": 3
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "MP Charge": 4
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "MP Charge": 4
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;;;;;;
