// Character data: mage-of-bastinton-sobrina
// Merged from info/skills/stats files

export const info = {
  "slug": "mage-of-bastinton-sobrina",
  "name": "[Mage of Bastinton] Sobrina",
  "displayName": "Mage of Bastinton Sobrina",
  "baseName": "Sobrina",
  "title": "Mage of Bastinton",
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Slightly Fast",
  "range": 480,
  "weaponType": "Throw",
  "skillTypes": [
    "Disrupt",
    "Debuff"
  ],
  "image": "Swift-Chant_Sorceress_Sobrina",
  "introduction": "Back Row、Magical、Attacker",
  "profile": {
    "height": "170cm",
    "bust": "101cm (J Cup)",
    "waist": "63cm",
    "hips": "101cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u53ea\u91ce\u3042\u304d\u3089",
      "romanized": "Tadano Akira"
    },
    "voice": {
      "japanese": "\u3082\u3082\u305e\u306e\u85ab",
      "romanized": "Momozono Kaoru"
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
      "name": "Light Beam by Instinct!",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Freeze(Unable to act;HP --650 per second) for 3 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Freeze(Unable to act;HP --650 per second) for 3 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Freeze(Unable to act;HP --4250 per second) for 3 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "85% ATK",
      "baseDamage": "+60",
      "levelGrowth": "+8",
      "lvl1": "85% + 60",
      "lvl90": "85% + -3500",
      "effects": [
        "Freeze Lv5"
      ],
      "buffEffects": [
        {
          "name": "Freeze Lv5",
          "value": -650,
          "type": "flat",
          "duration": 3,
          "levelGrowth": -40.0
        }
      ],
      "duration": 3
    },
    {
      "slot": 3,
      "name": "Book Attack!",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Paralysis for 5 seconds and Accuracy -11 DOWN for 8 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Paralysis for 5 seconds and Accuracy -11 DOWN for 8 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Paralysis for 5 seconds and Accuracy -23 DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "100% ATK",
      "baseDamage": "+90",
      "levelGrowth": "+8",
      "lvl1": "100% + 90",
      "lvl90": "100% + 78",
      "effects": [
        "Paralysis",
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -0.13
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Eliminate you all ",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to all enemies and inflicts Freeze(LV 1) for 3 seconds and inflicts Paralysis for 7 seconds",
      "effect": "500% + 350",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv1",
          "value": -2500,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 7
        }
      ]
    },
    {
      "rank": 2,
      "name": "Light Beam by Instinct!",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Freeze(Unable to act;HP --650 per second) for 3 seconds",
      "effect": "85% + 60",
      "buffEffects": [
        {
          "name": "Freeze Lv5",
          "value": -650,
          "type": "flat",
          "duration": 3
        }
      ]
    },
    {
      "rank": 3,
      "name": "Book Attack!",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Paralysis for 5 seconds and Accuracy -11 DOWN for 8 seconds",
      "effect": "100% + 90",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Eliminate you all ",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to all enemies and inflicts Freeze(LV 1) for 3 seconds and inflicts Paralysis for 7 seconds",
      "effect": "500% + 350",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv1",
          "value": -2500,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 7
        }
      ]
    },
    {
      "rank": 5,
      "name": "Eliminate you all ",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to all enemies and inflicts Freeze(LV 2) for 3 seconds and inflicts Paralysis for 8 seconds",
      "effect": "700% + 470",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv2",
          "value": -3500,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Freeze Resistance LvMax, Paralysis Resistance LvMax",
      "icon": "skill001/skill1003",
      "effect": "Freeze Resistance LvMax (+1%), Paralysis Resistance LvMax (+1%)",
      "effectValues": [
        {
          "name": "Freeze Resistance LvMax",
          "value": 1,
          "type": "percent"
        },
        {
          "name": "Paralysis Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Magic Attack +, Skill Damage +",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+389), Skill Damage + (+30%)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Mage of Bastinton: Sobrina",
  "id": 2043,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Disrupt",
    "Debuff"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 168,
    "MATK": 281,
    "DEF": 32,
    "MDEF": 82
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Basic → Skill3 → Basic",
    "loop": "Basic → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "mage-of-bastinton-sobrina"
};

export const stats = {
  "id": "mage-of-bastinton-sobrina",
  "characterId": 2043,
  "name": "【Mage of Bastinton】Sobrina",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Disrupt",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 2092,
      "lv90": 10460
    },
    "atk": {
      "base": 168,
      "lv90": 843
    },
    "matk": {
      "base": 281,
      "lv90": 1405
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
      "base": 75,
      "lv90": 120
    },
    "magicCrit": {
      "base": 125,
      "lv90": 200
    },
    "hpRegen": {
      "base": 104,
      "lv90": 365
    },
    "mpRegen": {
      "base": 59,
      "lv90": 237
    },
    "healPwr": {
      "base": 82,
      "lv90": 206
    },
    "mpCharge": {
      "base": 56,
      "lv90": 56
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
      "HP": 628,
      "MATK": 84,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 722,
      "MATK": 97,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 847,
      "MATK": 114,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 941,
      "MATK": 127,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1778,
      "MATK": 239,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4916,
      "MATK": 661,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Charge": 3
    },
    "gp2": {
      "MATK": 40,
      "MP Charge": 3
    },
    "gp3": {
      "MATK": 40,
      "MP Charge": 7
    },
    "gp4": {
      "MATK": 120,
      "MP Charge": 7
    },
    "gp5": {
      "MATK": 120,
      "MP Charge": 9
    },
    "gp6": {
      "MATK": 200,
      "MP Charge": 9
    },
    "gp7": {
      "MATK": 200,
      "MP Charge": 11
    },
    "gp8": {
      "MATK": 280,
      "MP Charge": 11
    },
    "gp9": {
      "MATK": 280,
      "MP Charge": 13
    },
    "gp10": {
      "MATK": 360,
      "MP Charge": 13
    },
    "total": {
      "MATK": 360,
      "MP Charge": 13
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 220,
      "MATK": 30,
      "MDEF": 4,
      "Magic Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 264,
      "MATK": 36,
      "MDEF": 4,
      "Magic Crit": 3,
      "Block": 16
    },
    "g3": {
      "HP": 308,
      "MATK": 41,
      "MDEF": 5,
      "Magic Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 352,
      "MATK": 47,
      "MDEF": 6,
      "Magic Crit": 4,
      "Block": 21
    },
    "g5": {
      "HP": 396,
      "MATK": 53,
      "MDEF": 7,
      "Magic Crit": 5,
      "MP Charge": 5
    },
    "g6": {
      "HP": 440,
      "MATK": 59,
      "MDEF": 7,
      "Magic Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 484,
      "MATK": 65,
      "MDEF": 8,
      "Magic Crit": 6,
      "Block": 29
    },
    "g8": {
      "HP": 529,
      "MATK": 71,
      "MDEF": 9,
      "Magic Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 573,
      "MATK": 77,
      "MDEF": 10,
      "Magic Crit": 7,
      "Block": 34
    },
    "g10": {
      "HP": 617,
      "MATK": 83,
      "MDEF": 10,
      "Magic Crit": 7,
      "MP Charge": 7
    },
    "total": {
      "HP": 617,
      "MATK": 83,
      "MDEF": 10,
      "Magic Crit": 7,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Magic Crit": 4
    },
    {
      "grade": 2,
      "MP Cost Down": 1
    },
    {
      "grade": 3,
      "Magic Crit": 6
    },
    {
      "grade": 4,
      "MP Cost Down": 1
    },
    {
      "grade": 5,
      "Magic Crit": 8
    },
    {
      "grade": 6,
      "MP Cost Down": 1
    },
    {
      "grade": 7,
      "Magic Crit": 9
    },
    {
      "grade": 8,
      "MP Cost Down": 1
    },
    {
      "grade": 9,
      "Magic Crit": 11
    },
    {
      "grade": 10,
      "MP Cost Down": 1
    },
    {
      "grade": 11,
      "Magic Crit": 12
    }
  ]
};;;;;;;;
