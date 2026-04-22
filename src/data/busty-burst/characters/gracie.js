// Character data: gracie
// Merged from info/skills/stats files

export const info = {
  "slug": "gracie",
  "name": "Gracie",
  "displayName": "Gracie",
  "baseName": "Gracie",
  "title": null,
  "rarity": "SR",
  "element": "Light",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 200,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff",
    "Taunt"
  ],
  "image": "Gracie",
  "introduction": "Front Row、Physical、Tank",
  "profile": {
    "height": "167cm",
    "bust": "97cm (I Cup)",
    "waist": "60cm",
    "hips": "85cm"
  },
  "credits": {
    "illustration": {
      "japanese": "HMSM",
      "romanized": "HMSM"
    },
    "voice": {
      "japanese": "すずな",
      "romanized": "Suzuna"
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
      "name": "There's a chance!",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -18%-30 DOWN for 5 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -18%-30 DOWN for 5 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -18%-210 DOWN for 5 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "220.00000000000003% ATK",
      "baseDamage": "+110",
      "levelGrowth": "+20",
      "lvl1": "220% + 110",
      "lvl90": "220% + -68",
      "effects": [
        "Physical Defense - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 5,
          "levelGrowth": -2.0
        }
      ],
      "duration": 5
    },
    {
      "slot": 3,
      "name": "Defense is absolute!",
      "icon": "skill001/skill0019",
      "description": "Applies Healing Shield (270, restores 20%) to self for 12 seconds and Taunt for 12 seconds",
      "descriptionLv1": "Applies Healing Shield (270, restores 20%) to self for 12 seconds and Taunt for 12 seconds",
      "descriptionLv90": "Applies Healing Shield (270, restores 20%) to self for 12 seconds and Taunt for 12 seconds",
      "target": "Self",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Healing Shield Lv4",
        "Taunt"
      ],
      "buffEffects": [
        {
          "name": "Healing Shield Lv4",
          "value": 270,
          "type": "percent",
          "duration": 12,
          "levelGrowth": 22.0
        },
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 12
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "A full-power strike!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 1) for 10 seconds",
      "effect": "950% + 800",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "A full-power strike!",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 2) for 10 seconds",
      "effect": "1160% + 950",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -18,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "A full-power strike!",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 3) for 10 seconds",
      "effect": "1300% + 1050",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -21,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "A full-power strike!",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 4) for 10 seconds",
      "effect": "1400% + 1150",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -23,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "A full-power strike!",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 5) for 10 seconds",
      "effect": "1450% + 1200",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -25,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +",
      "icon": "skill001/skill1003",
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
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1003",
      "effect": "Physical Defense + (+141), Magic Defense+ (+141)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 141,
          "type": "flat"
        },
        {
          "name": "Magic Defense+",
          "value": 141,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Gracie",
  "id": 2086,
  "rarity": "SR",
  "element": "Light",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Taunt"
  ],
  "baseStats": {
    "HP": 1781,
    "ATK": 189,
    "MATK": 113,
    "DEF": 326,
    "MDEF": 130
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic",
    "loop": "Skill2 → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.88"
  },
  "slug": "gracie"
};

export const stats = {
  "id": "gracie",
  "characterId": 2086,
  "name": "Gracie",
  "rarity": "SR",
  "element": "聖",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Taunt"
  ],
  "baseStats": {
    "hp": {
      "base": 1781,
      "lv90": 8906
    },
    "atk": {
      "base": 189,
      "lv90": 945
    },
    "matk": {
      "base": 113,
      "lv90": 566
    },
    "def": {
      "base": 326,
      "lv90": 652
    },
    "mdef": {
      "base": 130,
      "lv90": 260
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
      "base": 191,
      "lv90": 305
    },
    "magicCrit": {
      "base": 114,
      "lv90": 182
    },
    "hpRegen": {
      "base": 89,
      "lv90": 311
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
      "base": 53,
      "lv90": 53
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
      "HP": 534,
      "ATK": 57,
      "Block": 17,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 615,
      "ATK": 65,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 721,
      "ATK": 77,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 802,
      "ATK": 85,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1401,
      "ATK": 139,
      "DEF": 80,
      "MDEF": 24,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4073,
      "ATK": 423,
      "Block": 83,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 80,
      "MDEF": 24,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "DEF": 20
    },
    "gp2": {
      "DEF": 20,
      "MDEF": 20
    },
    "gp3": {
      "DEF": 50,
      "MDEF": 20
    },
    "gp4": {
      "DEF": 50,
      "MDEF": 50
    },
    "gp5": {
      "DEF": 80,
      "MDEF": 50
    },
    "gp6": {
      "DEF": 80,
      "MDEF": 80
    },
    "gp7": {
      "DEF": 110,
      "MDEF": 80
    },
    "gp8": {
      "DEF": 110,
      "MDEF": 110
    },
    "gp9": {
      "DEF": 140,
      "MDEF": 110
    },
    "gp10": {
      "DEF": 140,
      "MDEF": 140
    },
    "total": {
      "DEF": 140,
      "MDEF": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 188,
      "ATK": 20,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 225,
      "ATK": 24,
      "Phys Crit": 5,
      "Block": 17
    },
    "g3": {
      "HP": 263,
      "ATK": 28,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 300,
      "ATK": 32,
      "Phys Crit": 6,
      "Block": 23
    },
    "g5": {
      "HP": 338,
      "ATK": 36,
      "Phys Crit": 7,
      "MP Charge": 5
    },
    "g6": {
      "HP": 375,
      "ATK": 40,
      "Phys Crit": 8,
      "Accuracy": 18
    },
    "g7": {
      "HP": 413,
      "ATK": 44,
      "Phys Crit": 9,
      "Block": 32
    },
    "g8": {
      "HP": 450,
      "ATK": 48,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 488,
      "ATK": 52,
      "Phys Crit": 10,
      "Block": 38
    },
    "g10": {
      "HP": 525,
      "ATK": 56,
      "Phys Crit": 11,
      "MP Charge": 7
    },
    "total": {
      "HP": 525,
      "ATK": 56,
      "Phys Crit": 11,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 148
    },
    {
      "grade": 2,
      "Block": 5
    },
    {
      "grade": 3,
      "HP": 208
    },
    {
      "grade": 4,
      "Block": 7
    },
    {
      "grade": 5,
      "HP": 267
    },
    {
      "grade": 6,
      "Block": 8
    },
    {
      "grade": 7,
      "HP": 327
    },
    {
      "grade": 8,
      "Block": 10
    },
    {
      "grade": 9,
      "HP": 386
    },
    {
      "grade": 10,
      "Block": 12
    },
    {
      "grade": 11,
      "HP": 405
    }
  ]
};;;;;;;;
