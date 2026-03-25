// Character data: natasha
// Merged from info/skills/stats files

export const info = {
  "slug": "natasha",
  "name": "Natasha",
  "displayName": "Natasha",
  "baseName": "Natasha",
  "title": null,
  "rarity": "SSR",
  "element": "Water",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slightly Fast",
  "range": 180,
  "weaponType": "Pierce",
  "skillTypes": [
    "Debuff",
    "Disrupt",
    "Taunt"
  ],
  "image": "Natasha",
  "introduction": "Front Row、Physical、Tank",
  "profile": {
    "height": "153cm",
    "bust": "96cm (I Cup)",
    "waist": "57cm",
    "hips": "83cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u306d\u3076\u305d\u304f",
      "romanized": "Nebusoku"
    },
    "voice": {
      "japanese": "\u59eb\u5ddd\u3042\u3044\u308a",
      "romanized": "Himekawa Airi"
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
      "name": "Shield Bash",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 2.5 seconds and Action Speed -17%DOWN for 10 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Stun for 2.5 seconds and Action Speed -17%DOWN for 10 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Stun for 2.5 seconds and Action Speed -17%DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "350% ATK",
      "baseDamage": "+130",
      "levelGrowth": "+20",
      "lvl1": "350% + 130",
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
          "duration": 10
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Solid Defense",
      "icon": "skill001/skill0015",
      "description": "Applies Physical Defense 40%+200 UP to self for 12 seconds and Taunt for 12 seconds",
      "descriptionLv1": "Applies Physical Defense 40%+200 UP to self for 12 seconds and Taunt for 12 seconds",
      "descriptionLv90": "Applies Physical Defense 40%+560 UP to self for 12 seconds and Taunt for 12 seconds",
      "target": "Self",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Defense + LvMax",
        "Taunt"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + LvMax",
          "value": 200,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 4.0
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
      "name": "Reflective Impact",
      "icon": "skill001/skill0020_1",
      "description": "Applies Physical Reflect Shield(LV 1) to self for 15 secondsPhysical Shield(LV 1)",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Reflect Shield Ultimate Lv1",
          "value": 999,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Physical Shield Lv1",
          "value": 50,
          "type": "percent",
          "duration": 15
        }
      ]
    },
    {
      "rank": 2,
      "name": "Reflective Impact",
      "icon": "skill001/skill0020_1",
      "description": "Applies Physical Reflect Shield(LV 2) to self for 15 secondsPhysical Shield(LV 2)",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Reflect Shield Ultimate Lv2",
          "value": 999,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Physical Shield Lv1",
          "value": 60,
          "type": "percent",
          "duration": 15
        }
      ]
    },
    {
      "rank": 3,
      "name": "Reflective Impact",
      "icon": "skill001/skill0020_1",
      "description": "Applies Physical Reflect Shield(LV 3) to self for 15 secondsPhysical Shield(LV 3)",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Reflect Shield Ultimate Lv3",
          "value": 999,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Physical Shield Lv1",
          "value": 70,
          "type": "percent",
          "duration": 15
        }
      ]
    },
    {
      "rank": 4,
      "name": "Reflective Impact",
      "icon": "skill001/skill0020_1",
      "description": "Applies Physical Reflect Shield(LV 4) to self for 15 secondsPhysical Shield(LV 4)",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Reflect Shield Ultimate Lv4",
          "value": 999,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Physical Shield Lv1",
          "value": 75,
          "type": "percent",
          "duration": 15
        }
      ]
    },
    {
      "rank": 5,
      "name": "Reflective Impact",
      "icon": "skill001/skill0020_1",
      "description": "Applies Physical Reflect Shield(LV 5) to self for 15 secondsPhysical Shield(LV 5)",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Reflect Shield Ultimate Lv5",
          "value": 999,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Physical Shield Lv1",
          "value": 80,
          "type": "percent",
          "duration": 15
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +, Max HP +",
      "icon": "skill001/skill1002",
      "effect": "Physical Defense + (+141), Max HP + (+3444)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 141,
          "type": "flat"
        },
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Defense +, Healing Received +",
      "icon": "skill001/skill1002",
      "effect": "Physical Defense + (+211), Healing Received + (+30%)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 211,
          "type": "flat"
        },
        {
          "name": "Healing Received +",
          "value": 30,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Natasha",
  "id": 2064,
  "rarity": "SSR",
  "element": "Water",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Disrupt",
    "Taunt"
  ],
  "baseStats": {
    "HP": 1951,
    "ATK": 181,
    "MATK": 108,
    "DEF": 343,
    "MDEF": 137
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Skill2 → Basic → Basic",
    "loop": "Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.58"
  },
  "slug": "natasha"
};

export const stats = {
  "id": "natasha",
  "characterId": 2064,
  "name": "Natasha",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Disrupt",
    "Taunt"
  ],
  "baseStats": {
    "hp": {
      "base": 1951,
      "lv90": 9755
    },
    "atk": {
      "base": 181,
      "lv90": 905
    },
    "matk": {
      "base": 108,
      "lv90": 542
    },
    "def": {
      "base": 343,
      "lv90": 686
    },
    "mdef": {
      "base": 137,
      "lv90": 274
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
      "base": 207,
      "lv90": 331
    },
    "magicCrit": {
      "base": 124,
      "lv90": 198
    },
    "hpRegen": {
      "base": 97,
      "lv90": 340
    },
    "mpRegen": {
      "base": 59,
      "lv90": 237
    },
    "healPwr": {
      "base": 135,
      "lv90": 337
    },
    "mpCharge": {
      "base": 61,
      "lv90": 61
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
      "HP": 585,
      "ATK": 54,
      "Block": 17,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 673,
      "ATK": 63,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 790,
      "ATK": 73,
      "Block": 22,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 878,
      "ATK": 82,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1658,
      "ATK": 154,
      "DEF": 128,
      "MDEF": 27,
      "Heal Pwr": 34
    },
    "total": {
      "HP": 4584,
      "ATK": 426,
      "Block": 83,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 128,
      "MDEF": 27,
      "Heal Pwr": 34
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 300
    },
    "gp2": {
      "HP": 300,
      "DEF": 20
    },
    "gp3": {
      "HP": 750,
      "DEF": 20
    },
    "gp4": {
      "HP": 750,
      "DEF": 50
    },
    "gp5": {
      "HP": 1200,
      "DEF": 50
    },
    "gp6": {
      "HP": 1200,
      "DEF": 80
    },
    "gp7": {
      "HP": 1650,
      "DEF": 80
    },
    "gp8": {
      "HP": 1650,
      "DEF": 110
    },
    "gp9": {
      "HP": 2100,
      "DEF": 110
    },
    "gp10": {
      "HP": 2100,
      "DEF": 140
    },
    "total": {
      "HP": 2100,
      "DEF": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 205,
      "ATK": 19,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 246,
      "ATK": 23,
      "Phys Crit": 5,
      "Block": 17
    },
    "g3": {
      "HP": 288,
      "ATK": 27,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 329,
      "ATK": 31,
      "Phys Crit": 7,
      "Block": 23
    },
    "g5": {
      "HP": 370,
      "ATK": 34,
      "Phys Crit": 8,
      "MP Charge": 5
    },
    "g6": {
      "HP": 411,
      "ATK": 38,
      "Phys Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 452,
      "ATK": 42,
      "Phys Crit": 10,
      "Block": 32
    },
    "g8": {
      "HP": 493,
      "ATK": 46,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 534,
      "ATK": 50,
      "Phys Crit": 11,
      "Block": 38
    },
    "g10": {
      "HP": 575,
      "ATK": 53,
      "Phys Crit": 12,
      "MP Charge": 8
    },
    "total": {
      "HP": 575,
      "ATK": 53,
      "Phys Crit": 12,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "DEF": 16
    },
    {
      "grade": 2,
      "DEF": 18
    },
    {
      "grade": 3,
      "DEF": 23
    },
    {
      "grade": 4,
      "DEF": 24
    },
    {
      "grade": 5,
      "DEF": 29
    },
    {
      "grade": 6,
      "DEF": 29
    },
    {
      "grade": 7,
      "DEF": 36
    },
    {
      "grade": 8,
      "DEF": 35
    },
    {
      "grade": 9,
      "DEF": 43
    },
    {
      "grade": 10,
      "DEF": 41
    },
    {
      "grade": 11,
      "DEF": 45
    }
  ]
};;;;;;;;
