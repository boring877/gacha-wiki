// Character data: meinias
// Merged from info/skills/stats files

export const info = {
  "slug": "meinias",
  "name": "Meinias",
  "displayName": "Meinias",
  "baseName": "Meinias",
  "title": null,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 480,
  "weaponType": "Shoot/Ranged",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Meinias",
  "introduction": "Back Row、Physical、Attacker",
  "profile": {
    "height": "160cm",
    "bust": "102cm (K Cup)",
    "waist": "66cm",
    "hips": "82cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u604b\u6cb3\u30df\u30ce\u30eb",
      "romanized": "Koikawa Minoru"
    },
    "voice": {
      "japanese": "\u76f8\u6a21\u604b",
      "romanized": "Sagami Koi"
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
      "name": "Oboro Night",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Accuracy -11 DOWN for 8 seconds and Block-11 DOWN for 8 seconds",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Accuracy -11 DOWN for 8 seconds and Block-11 DOWN for 8 seconds",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Accuracy -23 DOWN for 8 seconds and Block-23 DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "100% ATK",
      "baseDamage": "+40",
      "levelGrowth": "+6",
      "lvl1": "100% + 40",
      "lvl90": "100% + 28",
      "effects": [
        "Accuracy - Lv4",
        "Block- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -0.13
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -0.13
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Shadow Dance",
      "icon": "skill001/skill0017",
      "description": "Applies Physical Attack 18%+35 UP to self for 12 seconds and Block 11 UP for 12 seconds",
      "descriptionLv1": "Applies Physical Attack 18%+35 UP to self for 12 seconds and Block 11 UP for 12 seconds",
      "descriptionLv90": "Applies Physical Attack 18%+665 UP to self for 12 seconds and Block 23 UP for 12 seconds",
      "target": "Self",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv4",
        "Block+ Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 7.0
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
      "name": "Limit Arrow",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and when activating the Ultimate, applies Hit-Based Damage UP(LV 1) to self for 10 seconds",
      "effect": "500% + 1400",
      "buffEffects": [
        {
          "name": "Damage + Ultimate Lv1",
          "value": 100,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Limit Arrow",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and when activating the Ultimate, applies Hit-Based Damage UP(LV 2) to self for 10 seconds",
      "effect": "540% + 2000",
      "buffEffects": [
        {
          "name": "Damage + Ultimate Lv2",
          "value": 130,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Limit Arrow",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and when activating the Ultimate, applies Hit-Based Damage UP(LV 3) to self for 10 seconds",
      "effect": "570% + 2400",
      "buffEffects": [
        {
          "name": "Damage + Ultimate Lv3",
          "value": 160,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Limit Arrow",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and when activating the Ultimate, applies Hit-Based Damage UP(LV 4) to self for 10 seconds",
      "effect": "600% + 2700",
      "buffEffects": [
        {
          "name": "Damage + Ultimate Lv4",
          "value": 180,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Limit Arrow",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and when activating the Ultimate, applies Hit-Based Damage UP(LV 5) to self for 10 seconds",
      "effect": "630% + 3000",
      "buffEffects": [
        {
          "name": "Damage + Ultimate Lv5",
          "value": 200,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Accuracy +, Action Speed +",
      "icon": "skill001/skill1004",
      "effect": "Accuracy + (+25), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Accuracy +",
          "value": 25,
          "type": "flat"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Attack +, Ultimate Damage +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+259), Ultimate Damage + (+15%)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Meinias",
  "id": 2058,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 2183,
    "ATK": 343,
    "MATK": 206,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.88"
  },
  "slug": "meinias"
};

export const stats = {
  "id": "meinias",
  "characterId": 2058,
  "name": "Meinias",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 2183,
      "lv90": 10915
    },
    "atk": {
      "base": 343,
      "lv90": 1718
    },
    "matk": {
      "base": 206,
      "lv90": 1031
    },
    "def": {
      "base": 143,
      "lv90": 286
    },
    "mdef": {
      "base": 57,
      "lv90": 114
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 40,
      "lv90": 120
    },
    "physCrit": {
      "base": 53,
      "lv90": 85
    },
    "magicCrit": {
      "base": 32,
      "lv90": 51
    },
    "hpRegen": {
      "base": 109,
      "lv90": 381
    },
    "mpRegen": {
      "base": 62,
      "lv90": 249
    },
    "healPwr": {
      "base": 82,
      "lv90": 206
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
      "HP": 655,
      "ATK": 103,
      "Block": 12,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 753,
      "ATK": 119,
      "Accuracy": 13,
      "Block": 14
    },
    "lb3": {
      "HP": 884,
      "ATK": 139,
      "Block": 16,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 982,
      "ATK": 155,
      "Accuracy": 17,
      "Block": 18
    },
    "lb5": {
      "HP": 1856,
      "ATK": 292,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 5130,
      "ATK": 808,
      "Block": 60,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Cost Down": 3
    },
    "gp2": {
      "MP Charge": 3,
      "MP Cost Down": 3
    },
    "gp3": {
      "MP Charge": 3,
      "MP Cost Down": 4
    },
    "gp4": {
      "MP Charge": 7,
      "MP Cost Down": 4
    },
    "gp5": {
      "MP Charge": 7,
      "MP Cost Down": 5
    },
    "gp6": {
      "MP Charge": 9,
      "MP Cost Down": 5
    },
    "gp7": {
      "MP Charge": 9,
      "MP Cost Down": 6
    },
    "gp8": {
      "MP Charge": 11,
      "MP Cost Down": 6
    },
    "gp9": {
      "MP Charge": 11,
      "MP Cost Down": 7
    },
    "gp10": {
      "MP Charge": 13,
      "MP Cost Down": 7
    },
    "total": {
      "MP Charge": 13,
      "MP Cost Down": 7
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 230,
      "ATK": 36,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 276,
      "ATK": 43,
      "Phys Crit": 1,
      "Block": 13
    },
    "g3": {
      "HP": 322,
      "ATK": 51,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 368,
      "ATK": 58,
      "Phys Crit": 2,
      "Block": 17
    },
    "g5": {
      "HP": 414,
      "ATK": 65,
      "Phys Crit": 2,
      "MP Charge": 5
    },
    "g6": {
      "HP": 460,
      "ATK": 72,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 506,
      "ATK": 80,
      "Phys Crit": 2,
      "Block": 23
    },
    "g8": {
      "HP": 551,
      "ATK": 87,
      "Phys Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 597,
      "ATK": 94,
      "Phys Crit": 3,
      "Block": 27
    },
    "g10": {
      "HP": 643,
      "ATK": 101,
      "Phys Crit": 3,
      "MP Charge": 8
    },
    "total": {
      "HP": 643,
      "ATK": 101,
      "Phys Crit": 3,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Charge": 1
    },
    {
      "grade": 2,
      "MP Charge": 1
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "MP Charge": 2
    },
    {
      "grade": 6,
      "MP Charge": 2
    },
    {
      "grade": 7,
      "MP Charge": 3
    },
    {
      "grade": 8,
      "MP Charge": 3
    },
    {
      "grade": 9,
      "MP Charge": 4
    },
    {
      "grade": 10,
      "MP Charge": 3
    },
    {
      "grade": 11,
      "MP Charge": 4
    }
  ]
};;;;;;;;
