// Character data: artia
// Merged from info/skills/stats files

export const info = {
  "slug": "artia",
  "name": "Artia",
  "displayName": "Artia",
  "baseName": "Artia",
  "title": null,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slightly Slow",
  "range": 200,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff",
    "Disrupt",
    "Taunt"
  ],
  "image": "Artia",
  "introduction": "Front Row、Physical、Tank",
  "profile": {
    "height": "165cm",
    "bust": "95cm (G Cup)",
    "waist": "61cm",
    "hips": "89cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u30ab\u30b2\u30b7\u30aa",
      "romanized": "Kageshio"
    },
    "voice": {
      "japanese": "\u98a8\u82b1\u307e\u3057\u308d",
      "romanized": "Kazahana Mashiro"
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
      "name": "Royal Knight’s Teachings",
      "icon": "skill001/skill0019",
      "description": "Restores own HP by and inflicts Block 15 UP for 10 seconds and Healing Shield (300, restores 100%) for 10 seconds",
      "descriptionLv1": "Restores own HP by and inflicts Block 15 UP for 10 seconds and Healing Shield (300, restores 100%) for 10 seconds",
      "descriptionLv90": "Restores own HP by and inflicts Block 33 UP for 10 seconds and Healing Shield (300, restores 100%) for 10 seconds",
      "target": "Self",
      "castTime": 1.58,
      "damageScaling": "2500% ATK",
      "baseDamage": "+416",
      "levelGrowth": "+50",
      "lvl1": "2500% + 416",
      "lvl90": "2500% + 2641",
      "effects": [
        "Block+ LvMax",
        "Healing Shield Lv5"
      ],
      "buffEffects": [
        {
          "name": "Block+ LvMax",
          "value": 15,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.2
        },
        {
          "name": "Healing Shield Lv5",
          "value": 300,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 25.0
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Beorn Holy Sword Arts: Heroic Strike",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy -15 DOWN for 10 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Accuracy -15 DOWN for 10 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Accuracy -33 DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "300% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+25",
      "lvl1": "300% + 100",
      "lvl90": "300% + 82",
      "effects": [
        "Accuracy - LvMax"
      ],
      "buffEffects": [
        {
          "name": "Accuracy - LvMax",
          "value": -15,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.2
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Meteor Trestias",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and applies Hit-Based Shield(LV 1) to self for 8 seconds and Taunt for 8 seconds",
      "effect": "300% + 338",
      "buffEffects": [
        {
          "name": "Hit-Based Shield Ultimate Lv1",
          "value": 35,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Royal Knight’s Teachings",
      "icon": "skill001/skill0019",
      "description": "Restores own HP by and inflicts Block 15 UP for 10 seconds and Healing Shield (300, restores 100%) for 10 seconds",
      "effect": "2500% + 416",
      "buffEffects": [
        {
          "name": "Block+ LvMax",
          "value": 15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Healing Shield Lv5",
          "value": 300,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Beorn Holy Sword Arts: Heroic Strike",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy -15 DOWN for 10 seconds",
      "effect": "300% + 100",
      "buffEffects": [
        {
          "name": "Accuracy - LvMax",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Meteor Trestias",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and applies Hit-Based Shield(LV 1) to self for 8 seconds and Taunt for 8 seconds",
      "effect": "300% + 338",
      "buffEffects": [
        {
          "name": "Hit-Based Shield Ultimate Lv1",
          "value": 35,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Meteor Trestias",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies and applies Hit-Based Shield(LV 2) to self for 10 seconds and Taunt for 10 seconds",
      "effect": "360% + 380",
      "buffEffects": [
        {
          "name": "Hit-Based Shield Ultimate Lv2",
          "value": 45,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Max HP +",
      "icon": "skill001/skill1003",
      "effect": "Physical Attack + (+159), Max HP + (+3444)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 159,
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
      "name": "Physical Defense +, Block+",
      "icon": "skill001/skill1006",
      "effect": "Physical Defense + (+141), Block+ (+20)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 141,
          "type": "flat"
        },
        {
          "name": "Block+",
          "value": 20,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 3,
      "name": "Passive EX",
      "icon": "skill001/skill1006",
      "effect": "Ultimate Damage + (+15%), Damage UP (+9999%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Damage UP",
          "value": 9999,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Artia",
  "id": 2048,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Disrupt",
    "Taunt"
  ],
  "baseStats": {
    "HP": 2369,
    "ATK": 232,
    "MATK": 139,
    "DEF": 226,
    "MDEF": 90
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "artia"
};

export const stats = {
  "id": "artia",
  "characterId": 2048,
  "name": "Artia",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Disrupt",
    "Taunt"
  ],
  "baseStats": {
    "hp": {
      "base": 2369,
      "lv90": 11845
    },
    "atk": {
      "base": 232,
      "lv90": 1163
    },
    "matk": {
      "base": 139,
      "lv90": 698
    },
    "def": {
      "base": 226,
      "lv90": 452
    },
    "mdef": {
      "base": 90,
      "lv90": 180
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
      "base": 118,
      "lv90": 414
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
      "base": 79,
      "lv90": 79
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
      "HP": 711,
      "ATK": 70,
      "Block": 17,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 817,
      "ATK": 80,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 960,
      "ATK": 94,
      "Block": 22,
      "MP Charge": 10
    },
    "lb4": {
      "HP": 1066,
      "ATK": 105,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 2221,
      "ATK": 198,
      "DEF": 64,
      "MDEF": 18,
      "Heal Pwr": 26
    },
    "total": {
      "HP": 5775,
      "ATK": 547,
      "Block": 83,
      "MP Charge": 17,
      "Accuracy": 30,
      "DEF": 64,
      "MDEF": 18,
      "Heal Pwr": 26
    }
  },
  "gpAbility": {
    "gp1": {
      "Block": 3
    },
    "gp2": {
      "HP": 300,
      "Block": 3
    },
    "gp3": {
      "HP": 300,
      "Block": 7
    },
    "gp4": {
      "HP": 750,
      "Block": 7
    },
    "gp5": {
      "HP": 750,
      "Block": 10
    },
    "gp6": {
      "HP": 1200,
      "Block": 10
    },
    "gp7": {
      "HP": 1200,
      "Block": 13
    },
    "gp8": {
      "HP": 1650,
      "Block": 13
    },
    "gp9": {
      "HP": 1650,
      "Block": 16
    },
    "gp10": {
      "HP": 2100,
      "Block": 16
    },
    "total": {
      "HP": 2100,
      "Block": 16
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 249,
      "ATK": 25,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 299,
      "ATK": 29,
      "Phys Crit": 5,
      "Block": 17
    },
    "g3": {
      "HP": 349,
      "ATK": 34,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 399,
      "ATK": 39,
      "Phys Crit": 7,
      "Block": 23
    },
    "g5": {
      "HP": 449,
      "ATK": 44,
      "Phys Crit": 8,
      "MP Charge": 7
    },
    "g6": {
      "HP": 499,
      "ATK": 49,
      "Phys Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 549,
      "ATK": 54,
      "Phys Crit": 10,
      "Block": 32
    },
    "g8": {
      "HP": 599,
      "ATK": 59,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 648,
      "ATK": 64,
      "Phys Crit": 11,
      "Block": 38
    },
    "g10": {
      "HP": 698,
      "ATK": 69,
      "Phys Crit": 12,
      "MP Charge": 10
    },
    "total": {
      "HP": 698,
      "ATK": 69,
      "Phys Crit": 12,
      "MP Charge": 10
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 197
    },
    {
      "grade": 2,
      "Block": 5
    },
    {
      "grade": 3,
      "HP": 276
    },
    {
      "grade": 4,
      "Block": 7
    },
    {
      "grade": 5,
      "HP": 355
    },
    {
      "grade": 6,
      "Block": 8
    },
    {
      "grade": 7,
      "HP": 434
    },
    {
      "grade": 8,
      "Block": 10
    },
    {
      "grade": 9,
      "HP": 513
    },
    {
      "grade": 10,
      "Block": 12
    },
    {
      "grade": 11,
      "HP": 539
    }
  ]
};;;;;;;;
