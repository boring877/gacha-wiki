// Character data: magical-holy-night-festival-kaguya
// Merged from info/skills/stats files

export const info = {
  "slug": "magical-holy-night-festival-kaguya",
  "name": "[Magical Holy Night Festival] Kaguya",
  "displayName": "Magical Holy Night Festival Kaguya",
  "baseName": "Kaguya",
  "title": "Magical Holy Night Festival",
  "rarity": "SSR",
  "element": "Mind",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 200,
  "weaponType": "Pierce",
  "skillTypes": [
    "Heal",
    "Buff",
    "Debuff"
  ],
  "image": "Magical_Holy_Night_Festival_Kaguya",
  "introduction": "Front Row、Physical、Tank",
  "profile": {
    "height": "165cm",
    "bust": "106cm (K Cup)",
    "waist": "60cm",
    "hips": "87cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u3074\u305a",
      "romanized": "Pizu"
    },
    "voice": {
      "japanese": "\u6708\u591c\u898b\u3057\u3057\u307e",
      "romanized": "Tsukiyomi Shishima"
    }
  },
  "obtain": {
    "type": "limited",
    "source": "Offering Cookies for the Holy Night (Dec 16 - Dec 30)"
  }
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Someone is waiting for me.",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed DOWN for 7 seconds and Accuracy -11 DOWN for 7 seconds",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed DOWN for 7 seconds and Accuracy -11 DOWN for 7 seconds",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed DOWN for 7 seconds and Accuracy -23 DOWN for 7 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "130% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+7",
      "lvl1": "130% + 100",
      "lvl90": "130% + 88",
      "effects": [
        "Action Speed - Lv3",
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Action Speed - Lv3",
          "value": -14,
          "type": "flat",
          "duration": 7
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 7,
          "levelGrowth": -0.13
        }
      ],
      "duration": 7
    },
    {
      "slot": 3,
      "name": "Please… just for tonight.",
      "icon": "skill001/skill0019",
      "description": "Applies Hit-Based Healing Shield (+40, restores 200%, 9 hit(s)) to self for 15 seconds and Block 13 UP for 15 seconds",
      "descriptionLv1": "Applies Hit-Based Healing Shield (+40, restores 200%, 9 hit(s)) to self for 15 seconds and Block 13 UP for 15 seconds",
      "descriptionLv90": "Applies Hit-Based Healing Shield (+40, restores 200%, 9 hit(s)) to self for 15 seconds and Block 26 UP for 15 seconds",
      "target": "Self",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Hit-Based Healing Shield Lv5",
        "Block+ Lv5"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Healing Shield Lv5",
          "value": 30,
          "type": "percent",
          "duration": 15,
          "levelGrowth": 40.0
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
      "name": "I, too, can make someone happy.",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to all allies and inflicts Physical Defense UP(LV 1) for 10 seconds and Magic DefenseUP(LV 1) for 10 seconds",
      "effect": "2600% + 1500",
      "buffEffects": [
        {
          "name": "Physical Defense + Ultimate Lv1",
          "value": 250,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Defense+ Ultimate Lv1",
          "value": 250,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Someone is waiting for me.",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed DOWN for 7 seconds and Accuracy -11 DOWN for 7 seconds",
      "effect": "130% + 100",
      "buffEffects": [
        {
          "name": "Action Speed - Lv3",
          "value": -14,
          "type": "flat",
          "duration": 7
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 7
        }
      ]
    },
    {
      "rank": 3,
      "name": "Please… just for tonight.",
      "icon": "skill001/skill0019",
      "description": "Applies Hit-Based Healing Shield (+40, restores 200%, 9 hit(s)) to self for 15 seconds and Block 13 UP for 15 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Hit-Based Healing Shield Lv5",
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
      "name": "I, too, can make someone happy.",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to all allies and inflicts Physical Defense UP(LV 1) for 10 seconds and Magic DefenseUP(LV 1) for 10 seconds",
      "effect": "2600% + 1500",
      "buffEffects": [
        {
          "name": "Physical Defense + Ultimate Lv1",
          "value": 250,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Defense+ Ultimate Lv1",
          "value": 250,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "I, too, can make someone happy.",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by to all allies and inflicts Physical Defense UP(LV 2) for 10 seconds and Magic DefenseUP(LV 2) for 10 seconds",
      "effect": "3000% + 1800",
      "buffEffects": [
        {
          "name": "Physical Defense + Ultimate Lv2",
          "value": 350,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Defense+ Ultimate Lv2",
          "value": 350,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Healing Amount +, Max HP +",
      "icon": "skill001/skill1003",
      "effect": "Healing Amount + (+15%), Max HP + (+3444)",
      "effectValues": [
        {
          "name": "Healing Amount +",
          "value": 15,
          "type": "percent"
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
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1006",
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
  "name": "Magical Holy Night Festival: Kaguya",
  "id": 2096,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Tank",
  "tags": [
    "Heal",
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 2369,
    "ATK": 207,
    "MATK": 124,
    "DEF": 226,
    "MDEF": 90
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.88"
  },
  "slug": "magical-holy-night-festival-kaguya"
};

export const stats = {
  "id": "magical-holy-night-festival-kaguya",
  "characterId": 2096,
  "name": "【Magical Holy Night Festival】Kaguya",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Heal",
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 2369,
      "lv90": 11845
    },
    "atk": {
      "base": 207,
      "lv90": 1035
    },
    "matk": {
      "base": 124,
      "lv90": 620
    },
    "def": {
      "base": 226,
      "lv90": 384
    },
    "mdef": {
      "base": 90,
      "lv90": 248
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
      "HP": 711,
      "ATK": 62,
      "Block": 17,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 817,
      "ATK": 71,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 960,
      "ATK": 84,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1066,
      "ATK": 93,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 2191,
      "ATK": 176,
      "DEF": 58,
      "MDEF": 25,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 5745,
      "ATK": 486,
      "Block": 83,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 58,
      "MDEF": 25,
      "Heal Pwr": 25
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
      "HP": 249,
      "ATK": 22,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 299,
      "ATK": 26,
      "Phys Crit": 5,
      "Block": 17
    },
    "g3": {
      "HP": 349,
      "ATK": 31,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 399,
      "ATK": 35,
      "Phys Crit": 7,
      "Block": 23
    },
    "g5": {
      "HP": 449,
      "ATK": 39,
      "Phys Crit": 8,
      "MP Charge": 5
    },
    "g6": {
      "HP": 499,
      "ATK": 44,
      "Phys Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 549,
      "ATK": 48,
      "Phys Crit": 10,
      "Block": 32
    },
    "g8": {
      "HP": 599,
      "ATK": 52,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 648,
      "ATK": 57,
      "Phys Crit": 11,
      "Block": 38
    },
    "g10": {
      "HP": 698,
      "ATK": 61,
      "Phys Crit": 12,
      "MP Charge": 7
    },
    "total": {
      "HP": 698,
      "ATK": 61,
      "Phys Crit": 12,
      "MP Charge": 7
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
