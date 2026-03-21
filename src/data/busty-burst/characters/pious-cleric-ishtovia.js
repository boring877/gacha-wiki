// Character data: pious-cleric-ishtovia
// Merged from info/skills/stats files

export const info = {
  "slug": "pious-cleric-ishtovia",
  "name": "[Pious Cleric] Ishtovia",
  "displayName": "Pious Cleric Ishtovia",
  "baseName": "Ishtovia",
  "title": "Pious Cleric",
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
    "Buff",
    "Debuff",
    "Cleanse"
  ],
  "image": "Pious_Healer_Ishtovia",
  "introduction": "Back Row、Magical、Support",
  "profile": {
    "height": "165cm",
    "bust": "99cm (I Cup)",
    "waist": "63cm",
    "hips": "96cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u6df1\u6ce5\u6b63",
      "romanized": "Fukadoro Tadashi"
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
      "name": "O God, drive away evil with Your pure light ",
      "icon": "skill001/skill0010",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Attack -20 DOWN for 12 seconds and Magic Defense-30 DOWN for 12 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Magic Attack -20 DOWN for 12 seconds and Magic Defense-30 DOWN for 12 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Magic Attack -200 DOWN for 12 seconds and Magic Defense-210 DOWN for 12 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "100% ATK",
      "baseDamage": "+40",
      "levelGrowth": "+6",
      "lvl1": "100% + 40",
      "lvl90": "100% + -138",
      "effects": [
        "Magic Attack - Lv3",
        "Magic Defense- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Magic Attack - Lv3",
          "value": -20,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Defense- Lv3",
          "value": -30,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -2.0
        }
      ],
      "duration": 12
    },
    {
      "slot": 3,
      "name": "O God, save those possessed by darkness ",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to all alliesand removes debuffs and inflicts Block 11 UP for 10 seconds",
      "descriptionLv1": "Restores HP by to all alliesand removes debuffs and inflicts Block 11 UP for 10 seconds",
      "descriptionLv90": "Restores HP by to all alliesand removes debuffs and inflicts Block 23 UP for 10 seconds",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": "1700% ATK",
      "baseDamage": "+370",
      "levelGrowth": "+40",
      "lvl1": "1700% + 370",
      "lvl90": null,
      "effects": [
        "Block+ Lv4",
        "Debuff Resistance LvMax"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv4",
          "value": 11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.13
        },
        {
          "name": "Debuff Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "O God, please guide us with Your light ",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to all allies and inflicts HP RegenerationUP(LV 1) for 6 seconds and Hit-Based Magic Healing Shield (LV 1) for 20 seconds",
      "effect": "2700% + 1239",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv1",
          "value": 6,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Hit-Based Magic Healing Shield Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 20
        }
      ]
    },
    {
      "rank": 2,
      "name": "O God, drive away evil with Your pure light ",
      "icon": "skill001/skill0010",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Attack -20 DOWN for 12 seconds and Magic Defense-30 DOWN for 12 seconds",
      "effect": "100% + 40",
      "buffEffects": [
        {
          "name": "Magic Attack - Lv3",
          "value": -20,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Magic Defense- Lv3",
          "value": -30,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 3,
      "name": "O God, save those possessed by darkness ",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to all alliesand removes debuffs and inflicts Block 11 UP for 10 seconds",
      "effect": "1700% + 370",
      "buffEffects": [
        {
          "name": "Block+ Lv4",
          "value": 11,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Debuff Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ]
    },
    {
      "rank": 4,
      "name": "O God, please guide us with Your light ",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to all allies and inflicts HP RegenerationUP(LV 1) for 6 seconds and Hit-Based Magic Healing Shield (LV 1) for 20 seconds",
      "effect": "2700% + 1239",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv1",
          "value": 6,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Hit-Based Magic Healing Shield Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 20
        }
      ]
    },
    {
      "rank": 5,
      "name": "O God, please guide us with Your light ",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by to all allies and inflicts HP RegenerationUP(LV 2) for 6 seconds and Hit-Based Magic Healing Shield (LV 2) for 20 seconds",
      "effect": "3105% + 1476",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv2",
          "value": 7,
          "type": "percent",
          "duration": 6
        },
        {
          "name": "Hit-Based Magic Healing Shield Ultimate Lv2",
          "value": 26,
          "type": "percent",
          "duration": 20
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, Magic Defense+",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+259), Magic Defense+ (+141)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Magic Defense+",
          "value": 141,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Magic Defense+, Max HP +",
      "icon": "skill001/skill1007",
      "effect": "Magic Defense+ (+141), Max HP + (+1447)",
      "effectValues": [
        {
          "name": "Magic Defense+",
          "value": 141,
          "type": "flat"
        },
        {
          "name": "Max HP +",
          "value": 1447,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Pious Cleric: Ishtovia",
  "id": 2045,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Debuff",
    "Cleanse"
  ],
  "baseStats": {
    "HP": 2745,
    "ATK": 151,
    "MATK": 253,
    "DEF": 32,
    "MDEF": 82
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Skill3 → Basic",
    "loop": "Basic → Basic → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "pious-cleric-ishtovia"
};

export const stats = {
  "id": "pious-cleric-ishtovia",
  "characterId": 2045,
  "name": "【Pious Cleric】Ishtovia",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Debuff",
    "Cleanse"
  ],
  "baseStats": {
    "hp": {
      "base": 2745,
      "lv90": 13728
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
      "base": 32,
      "lv90": 64
    },
    "mdef": {
      "base": 82,
      "lv90": 164
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
      "base": 124,
      "lv90": 198
    },
    "magicCrit": {
      "base": 207,
      "lv90": 331
    },
    "hpRegen": {
      "base": 137,
      "lv90": 480
    },
    "mpRegen": {
      "base": 59,
      "lv90": 237
    },
    "healPwr": {
      "base": 117,
      "lv90": 293
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
      "HP": 824,
      "MATK": 76,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 947,
      "MATK": 87,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 1112,
      "MATK": 102,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1236,
      "MATK": 114,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 2334,
      "MATK": 215,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 34
    },
    "total": {
      "HP": 6453,
      "MATK": 594,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 34
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Charge": 2
    },
    "gp2": {
      "Heal Pwr": 20,
      "MP Charge": 2
    },
    "gp3": {
      "Heal Pwr": 20,
      "MP Charge": 5
    },
    "gp4": {
      "Heal Pwr": 45,
      "MP Charge": 5
    },
    "gp5": {
      "Heal Pwr": 45,
      "MP Charge": 7
    },
    "gp6": {
      "Heal Pwr": 70,
      "MP Charge": 7
    },
    "gp7": {
      "Heal Pwr": 70,
      "MP Charge": 9
    },
    "gp8": {
      "Heal Pwr": 95,
      "MP Charge": 9
    },
    "gp9": {
      "Heal Pwr": 95,
      "MP Charge": 11
    },
    "gp10": {
      "Heal Pwr": 120,
      "MP Charge": 11
    },
    "total": {
      "Heal Pwr": 120,
      "MP Charge": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 289,
      "MATK": 27,
      "MDEF": 4,
      "Magic Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 347,
      "MATK": 32,
      "MDEF": 4,
      "Magic Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 405,
      "MATK": 37,
      "MDEF": 5,
      "Magic Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 462,
      "MATK": 43,
      "MDEF": 6,
      "Magic Crit": 7,
      "Block": 21
    },
    "g5": {
      "HP": 520,
      "MATK": 48,
      "MDEF": 7,
      "Magic Crit": 8,
      "MP Charge": 5
    },
    "g6": {
      "HP": 578,
      "MATK": 53,
      "MDEF": 7,
      "Magic Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 636,
      "MATK": 59,
      "MDEF": 8,
      "Magic Crit": 10,
      "Block": 29
    },
    "g8": {
      "HP": 694,
      "MATK": 64,
      "MDEF": 9,
      "Magic Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 751,
      "MATK": 69,
      "MDEF": 10,
      "Magic Crit": 11,
      "Block": 34
    },
    "g10": {
      "HP": 809,
      "MATK": 75,
      "MDEF": 10,
      "Magic Crit": 12,
      "MP Charge": 8
    },
    "total": {
      "HP": 809,
      "MATK": 75,
      "MDEF": 10,
      "Magic Crit": 12,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "Heal Pwr": 5
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "Heal Pwr": 7
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "Heal Pwr": 9
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "Heal Pwr": 11
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "Heal Pwr": 12
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;;;;;;
