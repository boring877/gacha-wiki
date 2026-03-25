// Character data: liesel
// Merged from info/skills/stats files

export const info = {
  "slug": "liesel",
  "name": "Liesel",
  "displayName": "Liesel",
  "baseName": "Liesel",
  "title": null,
  "rarity": "SR",
  "element": "Mind",
  "role": "Support",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 520,
  "weaponType": "Strike/Blunt",
  "skillTypes": [
    "Buff",
    "MP Recovery"
  ],
  "image": "Liesel",
  "introduction": "Back Row、Physical、Support",
  "profile": {
    "height": "160cm",
    "bust": "97cm (H Cup)",
    "waist": "60cm",
    "hips": "92cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": "Q-Gaku"
    },
    "voice": {
      "japanese": "\u307e\u306e\u3081\u308b\u304b",
      "romanized": "Manomeruka"
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
      "name": "We must make lots of delicious food!",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack 10%+20 UP to all allies for 9 seconds and Magic Attack 10%+20 UP for 9 seconds",
      "descriptionLv1": "Applies Physical Attack 10%+20 UP to all allies for 9 seconds and Magic Attack 10%+20 UP for 9 seconds",
      "descriptionLv90": "Applies Physical Attack 10%+110 UP to all allies for 9 seconds and Magic Attack 10%+110 UP for 9 seconds",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv1",
        "Magic Attack + Lv1"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv1",
          "value": 20,
          "type": "flat",
          "duration": 9,
          "levelGrowth": 1.0
        },
        {
          "name": "Magic Attack + Lv1",
          "value": 20,
          "type": "flat",
          "duration": 9,
          "levelGrowth": 1.0
        }
      ],
      "duration": 9
    },
    {
      "slot": 3,
      "name": "You must be thirsty, right?",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Defense 15%+100 UP to all allies for 9 seconds and Magic Defense 15%+100 UP for 9 seconds",
      "descriptionLv1": "Applies Physical Defense 15%+100 UP to all allies for 9 seconds and Magic Defense 15%+100 UP for 9 seconds",
      "descriptionLv90": "Applies Physical Defense 15%+190 UP to all allies for 9 seconds and Magic Defense 15%+190 UP for 9 seconds",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Defense + Lv2",
        "Magic Defense+ Lv2"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + Lv2",
          "value": 100,
          "type": "flat",
          "duration": 9,
          "levelGrowth": 1.0
        },
        {
          "name": "Magic Defense+ Lv2",
          "value": 100,
          "type": "flat",
          "duration": 9,
          "levelGrowth": 1.0
        }
      ],
      "duration": 9
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Delicious Praise Punch",
      "icon": "skill001/skill0020_1",
      "description": "Applies MP Regeneration UP(LV 1) to all allies for 5 seconds and Action Speed UP(LV 1) for 8 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "MP Regeneration + Ultimate Lv1",
          "value": 25,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 8,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Delicious Praise Punch",
      "icon": "skill001/skill0020_2",
      "description": "Applies MP Regeneration UP(LV 2) to all allies for 5 seconds and Action Speed UP(LV 2) for 8 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "MP Regeneration + Ultimate Lv2",
          "value": 35,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Action Speed + Ultimate Lv2",
          "value": 10,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Delicious Praise Punch",
      "icon": "skill001/skill0020_3",
      "description": "Applies MP Regeneration UP(LV 3) to all allies for 5 seconds and Action Speed UP(LV 3) for 8 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "MP Regeneration + Ultimate Lv3",
          "value": 40,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Action Speed + Ultimate Lv3",
          "value": 12,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Delicious Praise Punch",
      "icon": "skill001/skill0020_4",
      "description": "Applies MP Regeneration UP(LV 4) to all allies for 5 seconds and Action Speed UP(LV 4) for 8 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "MP Regeneration + Ultimate Lv4",
          "value": 45,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Action Speed + Ultimate Lv4",
          "value": 14,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Delicious Praise Punch",
      "icon": "skill001/skill0020_5",
      "description": "Applies MP Regeneration UP(LV 5) to all allies for 5 seconds and Action Speed UP(LV 5) for 8 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "MP Regeneration + Ultimate Lv5",
          "value": 50,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Action Speed + Ultimate Lv5",
          "value": 15,
          "type": "flat",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Block+",
      "icon": "skill001/skill1002",
      "effect": "Block+ (+15)",
      "effectValues": [
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1007",
      "effect": "Physical Defense + (+70), Magic Defense+ (+70)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 70,
          "type": "flat"
        },
        {
          "name": "Magic Defense+",
          "value": 70,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Liesel",
  "id": 2035,
  "rarity": "SR",
  "element": "Mind",
  "role": "Support",
  "tags": [
    "Buff",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 2707,
    "ATK": 265,
    "MATK": 159,
    "DEF": 65,
    "MDEF": 25
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "liesel"
};

export const stats = {
  "id": "liesel",
  "characterId": 2035,
  "name": "Liesel",
  "rarity": "SR",
  "element": "想",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Buff",
    "MP Recovery"
  ],
  "baseStats": {
    "hp": {
      "base": 2707,
      "lv90": 13537
    },
    "atk": {
      "base": 265,
      "lv90": 1327
    },
    "matk": {
      "base": 159,
      "lv90": 796
    },
    "def": {
      "base": 65,
      "lv90": 130
    },
    "mdef": {
      "base": 25,
      "lv90": 50
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
      "base": 37,
      "lv90": 59
    },
    "magicCrit": {
      "base": 22,
      "lv90": 35
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
      "base": 82,
      "lv90": 206
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
      "HP": 812,
      "ATK": 80,
      "Block": 14,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 934,
      "ATK": 92,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 1097,
      "ATK": 108,
      "Block": 18,
      "MP Charge": 10
    },
    "lb4": {
      "HP": 1218,
      "ATK": 120,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 2139,
      "ATK": 210,
      "DEF": 20,
      "MDEF": 5,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 6200,
      "ATK": 610,
      "Block": 68,
      "MP Charge": 17,
      "Accuracy": 30,
      "DEF": 20,
      "MDEF": 5,
      "Heal Pwr": 19
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
      "ATK": 28,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 342,
      "ATK": 34,
      "Phys Crit": 1,
      "Block": 14
    },
    "g3": {
      "HP": 399,
      "ATK": 39,
      "Phys Crit": 1,
      "Accuracy": 12
    },
    "g4": {
      "HP": 456,
      "ATK": 45,
      "Phys Crit": 1,
      "Block": 19
    },
    "g5": {
      "HP": 513,
      "ATK": 50,
      "Phys Crit": 1,
      "MP Charge": 7
    },
    "g6": {
      "HP": 570,
      "ATK": 56,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 627,
      "ATK": 62,
      "Phys Crit": 2,
      "Block": 26
    },
    "g8": {
      "HP": 684,
      "ATK": 67,
      "Phys Crit": 2,
      "Accuracy": 21
    },
    "g9": {
      "HP": 741,
      "ATK": 73,
      "Phys Crit": 2,
      "Block": 31
    },
    "g10": {
      "HP": 798,
      "ATK": 78,
      "Phys Crit": 2,
      "MP Charge": 10
    },
    "total": {
      "HP": 798,
      "ATK": 78,
      "Phys Crit": 2,
      "MP Charge": 10
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "DEF": 3
    },
    {
      "grade": 2,
      "MP Charge": 2
    },
    {
      "grade": 3,
      "DEF": 4
    },
    {
      "grade": 4,
      "MP Charge": 3
    },
    {
      "grade": 5,
      "DEF": 6
    },
    {
      "grade": 6,
      "MP Charge": 3
    },
    {
      "grade": 7,
      "DEF": 7
    },
    {
      "grade": 8,
      "MP Charge": 4
    },
    {
      "grade": 9,
      "DEF": 8
    },
    {
      "grade": 10,
      "MP Charge": 5
    },
    {
      "grade": 11,
      "DEF": 9
    }
  ]
};;;;;;;;
