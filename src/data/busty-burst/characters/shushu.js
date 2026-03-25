// Character data: shushu
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "shushu",
  "name": "Shushu",
  "displayName": "Shushu",
  "baseName": "Shushu",
  "title": null,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slightly Slow",
  "range": 210,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "image": "Shushu",
  "introduction": "Front Row、Magical、Attacker",
  "profile": {
    "height": "159cm",
    "bust": "95cm (H Cup)",
    "waist": "58cm",
    "hips": "76cm"
  },
  "credits": {
    "illustration": {
      "japanese": "カゲシオ",
      "romanized": ""
    },
    "voice": {
      "japanese": "結城ほのか",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2166
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Y-You're in the way!",
      "icon": "skill001/skill0002",
      "description": "Deals magic damage to the nearest enemyApplies Action Speed 25%UP to self for 6 seconds",
      "descriptionLv1": "Deals magic damage to the nearest enemyApplies Action Speed 25%UP to self for 6 seconds",
      "descriptionLv90": "Deals magic damage to the nearest enemyApplies Action Speed 25%UP to self for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.3,
      "damageScaling": "340% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+25",
      "lvl1": "340% + 500",
      "lvl90": null,
      "effects": [
        "Action Speed + LvMax"
      ],
      "buffEffects": [
        {
          "name": "Action Speed + LvMax",
          "value": 25,
          "type": "flat",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Your life is mine to take",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies, inflict 4s , self[Spirit](MP Regen15, max3), restore 6% of damage dealt as own HP5%HP",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies, inflict 4s , self[Spirit](MP Regen15, max3), restore 6% of damage dealt as own HP5%HP",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies, inflict 4s , self[Spirit](MP Regen15, max3), restore 6% of damage dealt as own HP5%HP",
      "target": "Nearest Enemy",
      "castTime": 1.35,
      "damageScaling": "105% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+6",
      "lvl1": "105% + 100",
      "lvl90": null,
      "effects": [
        "Curse",
        "Spirit Energy"
      ],
      "buffEffects": [
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Spirit Energy",
          "value": 15,
          "type": "flat",
          "duration": 9999
        }
      ],
      "duration": 9999
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Foolish one, offer your head to your beloved",
      "icon": "skill001/skill0003_1",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense DOWN(LV 1) for 10 seconds and Action Speed DOWN(LV 1) for 10 seconds , [Spirit]3 when[Spirit]Ultimate activation afterrecover own MP100",
      "effect": "1200% + 1200",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Foolish one, offer your head to your beloved",
      "icon": "skill001/skill0003_2",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense DOWN(LV 2) for 10 seconds and Action Speed DOWN(LV 2) for 10 seconds , [Spirit]3 when[Spirit]Ultimate activation afterrecover own MP100",
      "effect": "1440% + 1400",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Foolish one, offer your head to your beloved",
      "icon": "skill001/skill0003_3",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense DOWN(LV 3) for 10 seconds and Action Speed DOWN(LV 3) for 10 seconds , [Spirit]3 when[Spirit]Ultimate activation afterrecover own MP100",
      "effect": "1620% + 1600",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Foolish one, offer your head to your beloved",
      "icon": "skill001/skill0003_4",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense DOWN(LV 4) for 10 seconds and Action Speed DOWN(LV 4) for 10 seconds , [Spirit]3 when[Spirit]Ultimate activation afterrecover own MP100",
      "effect": "1739% + 1800",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Foolish one, offer your head to your beloved",
      "icon": "skill001/skill0003_5",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense DOWN(LV 5) for 10 seconds and Action Speed DOWN(LV 5) for 10 seconds , [Spirit]3 when[Spirit]Ultimate activation afterrecover own MP100",
      "effect": "1800% + 2000",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Skill Damage +, MP Recovery",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+10%), MP Recovery (+30%), MP Recovery (+30%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "MP Recovery",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "MP Recovery",
          "value": 30,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Shushu",
  "id": 2166,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 2056,
    "ATK": 187,
    "MATK": 312,
    "DEF": 107,
    "MDEF": 130
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Slightly Slow",
    "speedValue": "1.05"
  },
  "slug": "shushu"
};

export const stats = {
  "id": "shushu",
  "characterId": 2166,
  "name": "Shushu",
  "rarity": "SSR",
  "element": "魔",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "hp": {
      "base": 2056,
      "lv90": 10281
    },
    "atk": {
      "base": 187,
      "lv90": 937
    },
    "matk": {
      "base": 312,
      "lv90": 1562
    },
    "def": {
      "base": 107,
      "lv90": 214
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
      "base": 50,
      "lv90": 150
    },
    "physCrit": {
      "base": 197,
      "lv90": 315
    },
    "magicCrit": {
      "base": 328,
      "lv90": 525
    },
    "hpRegen": {
      "base": 102,
      "lv90": 359
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
      "base": 66,
      "lv90": 66
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
      "HP": 617,
      "MATK": 94,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 709,
      "MATK": 108,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 833,
      "MATK": 127,
      "Block": 20,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 925,
      "MATK": 141,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1748,
      "MATK": 266,
      "DEF": 22,
      "MDEF": 41,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4832,
      "MATK": 736,
      "Block": 75,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 22,
      "MDEF": 41,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 40
    },
    "gp2": {
      "MATK": 40,
      "MP Cost Down": 3
    },
    "gp3": {
      "MATK": 120,
      "MP Cost Down": 3
    },
    "gp4": {
      "MATK": 120,
      "MP Cost Down": 5
    },
    "gp5": {
      "MATK": 200,
      "MP Cost Down": 5
    },
    "gp6": {
      "MATK": 200,
      "MP Cost Down": 6
    },
    "gp7": {
      "MATK": 280,
      "MP Cost Down": 6
    },
    "gp8": {
      "MATK": 280,
      "MP Cost Down": 7
    },
    "gp9": {
      "MATK": 360,
      "MP Cost Down": 7
    },
    "gp10": {
      "MATK": 360,
      "MP Cost Down": 8
    },
    "total": {
      "MATK": 360,
      "MP Cost Down": 8
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 216,
      "MATK": 33,
      "MDEF": 8,
      "Magic Crit": 7,
      "Accuracy": 9
    },
    "g2": {
      "HP": 260,
      "MATK": 39,
      "MDEF": 9,
      "Magic Crit": 8,
      "Block": 16
    },
    "g3": {
      "HP": 303,
      "MATK": 46,
      "MDEF": 11,
      "Magic Crit": 10,
      "Accuracy": 12
    },
    "g4": {
      "HP": 346,
      "MATK": 53,
      "MDEF": 12,
      "Magic Crit": 11,
      "Block": 21
    },
    "g5": {
      "HP": 390,
      "MATK": 59,
      "MDEF": 14,
      "Magic Crit": 12,
      "MP Charge": 6
    },
    "g6": {
      "HP": 433,
      "MATK": 66,
      "MDEF": 15,
      "Magic Crit": 14,
      "Accuracy": 18
    },
    "g7": {
      "HP": 476,
      "MATK": 72,
      "MDEF": 17,
      "Magic Crit": 15,
      "Block": 29
    },
    "g8": {
      "HP": 520,
      "MATK": 79,
      "MDEF": 18,
      "Magic Crit": 17,
      "Accuracy": 21
    },
    "g9": {
      "HP": 563,
      "MATK": 86,
      "MDEF": 20,
      "Magic Crit": 18,
      "Block": 34
    },
    "g10": {
      "HP": 606,
      "MATK": 92,
      "MDEF": 21,
      "Magic Crit": 19,
      "MP Charge": 9
    },
    "total": {
      "HP": 606,
      "MATK": 92,
      "MDEF": 21,
      "Magic Crit": 19,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Charge": 2
    },
    {
      "grade": 2,
      "Magic Crit": 12
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "Magic Crit": 16
    },
    {
      "grade": 5,
      "MP Charge": 3
    },
    {
      "grade": 6,
      "Magic Crit": 20
    },
    {
      "grade": 7,
      "MP Charge": 3
    },
    {
      "grade": 8,
      "Magic Crit": 24
    },
    {
      "grade": 9,
      "MP Charge": 4
    },
    {
      "grade": 10,
      "Magic Crit": 28
    },
    {
      "grade": 11,
      "MP Charge": 4
    }
  ]
};;;;;;;;
