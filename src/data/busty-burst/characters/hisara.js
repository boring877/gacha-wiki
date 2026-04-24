// Character data: hisara
// Merged from info/skills/stats files

export const info = {
  "slug": "hisara",
  "name": "Hisara",
  "displayName": "Hisara",
  "baseName": "Hisara",
  "title": null,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slightly Fast",
  "range": 240,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Hisara",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "160cm",
    "bust": "115cm (O Cup)",
    "waist": "63cm",
    "hips": "90cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u30b4\u30f3\u30c7\u30ed\u30ac",
      "romanized": "Gonderoga"
    },
    "voice": {
      "japanese": "\u6749\u539f\u8309\u8389",
      "romanized": "Sugihara Mari"
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
      "name": "Spinning Blade",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 8 seconds",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 8 seconds",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 8 seconds",
      "target": "Lowest HP Enemy",
      "castTime": 0.88,
      "damageScaling": "110% ATK",
      "baseDamage": "+50",
      "levelGrowth": "+8",
      "lvl1": "110% + 50",
      "lvl90": null,
      "effects": [
        "Action Speed - Lv5"
      ],
      "buffEffects": [
        {
          "name": "Action Speed - Lv5",
          "value": -20,
          "type": "flat",
          "duration": 8
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Ring Blade",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the 3 nearest enemies",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies",
      "target": "Lowest HP Enemy",
      "castTime": 0.88,
      "damageScaling": "130% ATK",
      "baseDamage": "+60",
      "levelGrowth": "+10",
      "lvl1": "130% + 60",
      "lvl90": "130% + 950",
      "effects": [],
      "buffEffects": []
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Eradicator",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and applies Action Speed UP(LV 1) to self for 12 seconds",
      "effect": "450% + 400",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 20,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 2,
      "name": "Eradicator",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies and applies Action Speed UP(LV 2) to self for 12 seconds",
      "effect": "550% + 480",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 23,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 3,
      "name": "Eradicator",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the 3 nearest enemies and applies Action Speed UP(LV 3) to self for 12 seconds",
      "effect": "600% + 560",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 26,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "Eradicator",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the 3 nearest enemies and applies Action Speed UP(LV 4) to self for 12 seconds",
      "effect": "650% + 600",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 28,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 5,
      "name": "Eradicator",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the 3 nearest enemies Applies Action Speed UP(LV 5) to self for 12 seconds",
      "effect": "680% + 640",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 30,
          "type": "flat",
          "duration": 12
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "MP Recovery+, Physical Attack +",
      "icon": "skill001/skill1004",
      "effect": "MP Recovery+ (+42%), Physical Attack + (+420)",
      "effectValues": [
        {
          "name": "MP Recovery+",
          "value": 42,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 420,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Attack +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+259), Physical Critical Damage+ (+176%)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 176,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Hisara",
  "id": 2062,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1972,
    "ATK": 300,
    "MATK": 180,
    "DEF": 82,
    "MDEF": 32
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Basic → Basic → Skill3",
    "loop": "Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.58"
  },
  "slug": "hisara"
};

export const stats = {
  "id": "hisara",
  "characterId": 2062,
  "name": "Hisara",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1972,
      "lv90": 9861
    },
    "atk": {
      "base": 300,
      "lv90": 1503
    },
    "matk": {
      "base": 180,
      "lv90": 902
    },
    "def": {
      "base": 82,
      "lv90": 164
    },
    "mdef": {
      "base": 32,
      "lv90": 64
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
      "base": 53,
      "lv90": 85
    },
    "magicCrit": {
      "base": 32,
      "lv90": 51
    },
    "hpRegen": {
      "base": 98,
      "lv90": 344
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
      "base": 46,
      "lv90": 46
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
      "HP": 592,
      "ATK": 90,
      "Block": 17,
      "MP Charge": 4
    },
    "lb2": {
      "HP": 680,
      "ATK": 104,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 799,
      "ATK": 122,
      "Block": 22,
      "MP Charge": 6
    },
    "lb4": {
      "HP": 888,
      "ATK": 135,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1677,
      "ATK": 256,
      "DEF": 23,
      "MDEF": 3,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4636,
      "ATK": 707,
      "Block": 83,
      "MP Charge": 10,
      "Accuracy": 30,
      "DEF": 23,
      "MDEF": 3,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Charge": 2
    },
    "gp2": {
      "ATK": 40,
      "MP Charge": 2
    },
    "gp3": {
      "ATK": 40,
      "MP Charge": 4
    },
    "gp4": {
      "ATK": 120,
      "MP Charge": 4
    },
    "gp5": {
      "ATK": 120,
      "MP Charge": 6
    },
    "gp6": {
      "ATK": 200,
      "MP Charge": 6
    },
    "gp7": {
      "ATK": 200,
      "MP Charge": 8
    },
    "gp8": {
      "ATK": 280,
      "MP Charge": 8
    },
    "gp9": {
      "ATK": 280,
      "MP Charge": 10
    },
    "gp10": {
      "ATK": 360,
      "MP Charge": 10
    },
    "total": {
      "ATK": 360,
      "MP Charge": 10
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 208,
      "ATK": 32,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 249,
      "ATK": 38,
      "Phys Crit": 1,
      "Block": 17
    },
    "g3": {
      "HP": 291,
      "ATK": 44,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 332,
      "ATK": 51,
      "Phys Crit": 2,
      "Block": 23
    },
    "g5": {
      "HP": 374,
      "ATK": 57,
      "Phys Crit": 2,
      "MP Charge": 4
    },
    "g6": {
      "HP": 415,
      "ATK": 63,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 457,
      "ATK": 70,
      "Phys Crit": 2,
      "Block": 32
    },
    "g8": {
      "HP": 498,
      "ATK": 76,
      "Phys Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 540,
      "ATK": 82,
      "Phys Crit": 3,
      "Block": 38
    },
    "g10": {
      "HP": 581,
      "ATK": 89,
      "Phys Crit": 3,
      "MP Charge": 6
    },
    "total": {
      "HP": 581,
      "ATK": 89,
      "Phys Crit": 3,
      "MP Charge": 6
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Charge": 1
    },
    {
      "grade": 2,
      "MP Regen": 6
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "MP Regen": 8
    },
    {
      "grade": 5,
      "MP Charge": 2
    },
    {
      "grade": 6,
      "MP Regen": 9
    },
    {
      "grade": 7,
      "MP Charge": 2
    },
    {
      "grade": 8,
      "MP Regen": 11
    },
    {
      "grade": 9,
      "MP Charge": 3
    },
    {
      "grade": 10,
      "MP Regen": 13
    },
    {
      "grade": 11,
      "MP Charge": 3
    }
  ]
};;;;;;;;
