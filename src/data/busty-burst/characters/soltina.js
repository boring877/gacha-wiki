// Character data: soltina
// Merged from info/skills/stats files

export const info = {
  "slug": "soltina",
  "name": "Soltina",
  "displayName": "Soltina",
  "baseName": "Soltina",
  "title": null,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slightly Fast",
  "range": 400,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Soltina",
  "introduction": "Middle Row、Physical、Attacker",
  "profile": {
    "height": "162cm",
    "bust": "100cm (J Cup)",
    "waist": "60cm",
    "hips": "85cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u30b5\u30d6\u30ed\u30fc",
      "romanized": "Saburo"
    },
    "voice": {
      "japanese": "\u67cf\u6728\u9022\u82b1",
      "romanized": "Kashiwagi Ouka"
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
      "name": "Shikomaru",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Paralysis for 6 seconds and inflicts Silence for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Paralysis for 6 seconds and inflicts Silence for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Paralysis for 6 seconds and inflicts Silence for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "350% ATK",
      "baseDamage": "+140",
      "levelGrowth": "+20",
      "lvl1": "350% + 140",
      "lvl90": null,
      "effects": [
        "Paralysis",
        "Silence"
      ],
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Millionfold",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Defense 30%+190 UP to self for 10 seconds and Block 13 UP for 10 seconds",
      "descriptionLv1": "Applies Physical Defense 30%+190 UP to self for 10 seconds and Block 13 UP for 10 seconds",
      "descriptionLv90": "Applies Physical Defense 30%+460 UP to self for 10 seconds and Block 26 UP for 10 seconds",
      "target": "Self",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Defense + Lv5",
        "Block+ Lv5"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + Lv5",
          "value": 190,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 3.0
        },
        {
          "name": "Block+ Lv5",
          "value": 13,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.15
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Iron Immortal Blossom",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 1) for 10 seconds and Action Speed DOWN(LV 1) for 10 seconds",
      "effect": "360% + 338",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -250,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Iron Immortal Blossom",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 2) for 10 seconds and Action Speed DOWN(LV 2) for 10 seconds",
      "effect": "420% + 379",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -300,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Iron Immortal Blossom",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 3) for 10 seconds and Action Speed DOWN(LV 3) for 10 seconds",
      "effect": "470% + 421",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -340,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -24,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Iron Immortal Blossom",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 4) for 10 seconds and Action Speed DOWN(LV 4) for 10 seconds",
      "effect": "509% + 465",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -370,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -27,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Iron Immortal Blossom",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV 5) for 10 seconds and Action Speed DOWN(LV 5) for 10 seconds",
      "effect": "550% + 501",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -400,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -30,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Physical Defense +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+159), Physical Defense + (+211)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 159,
          "type": "flat"
        },
        {
          "name": "Physical Defense +",
          "value": 211,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Critical Damage+, Block+",
      "icon": "skill001/skill1001",
      "effect": "Physical Critical Damage+ (+176%), Block+ (+15)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 176,
          "type": "percent"
        },
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Soltina",
  "id": 2047,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1200,
    "ATK": 281,
    "MATK": 168,
    "DEF": 343,
    "MDEF": 137
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic → Basic → Basic",
    "loop": "Basic → Basic → Skill3 → Basic → Basic → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "soltina"
};

export const stats = {
  "id": "soltina",
  "characterId": 2047,
  "name": "Soltina",
  "rarity": "SSR",
  "element": "魔",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1200,
      "lv90": 6002
    },
    "atk": {
      "base": 281,
      "lv90": 1405
    },
    "matk": {
      "base": 168,
      "lv90": 843
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
      "base": 125,
      "lv90": 200
    },
    "magicCrit": {
      "base": 75,
      "lv90": 120
    },
    "hpRegen": {
      "base": 60,
      "lv90": 210
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
      "HP": 360,
      "ATK": 84,
      "Block": 17,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 414,
      "ATK": 97,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 486,
      "ATK": 114,
      "Block": 22,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 540,
      "ATK": 127,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1020,
      "ATK": 260,
      "DEF": 38,
      "MDEF": 27,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 2820,
      "ATK": 682,
      "Block": 83,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 38,
      "MDEF": 27,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "Phys Crit": 20
    },
    "gp2": {
      "Block": 3,
      "Phys Crit": 20
    },
    "gp3": {
      "Block": 3,
      "Phys Crit": 50
    },
    "gp4": {
      "Block": 7,
      "Phys Crit": 50
    },
    "gp5": {
      "Block": 7,
      "Phys Crit": 80
    },
    "gp6": {
      "Block": 10,
      "Phys Crit": 80
    },
    "gp7": {
      "Block": 10,
      "Phys Crit": 110
    },
    "gp8": {
      "Block": 13,
      "Phys Crit": 110
    },
    "gp9": {
      "Block": 13,
      "Phys Crit": 140
    },
    "gp10": {
      "Block": 16,
      "Phys Crit": 140
    },
    "total": {
      "Block": 16,
      "Phys Crit": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 126,
      "ATK": 30,
      "Phys Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 152,
      "ATK": 36,
      "Phys Crit": 3,
      "Block": 17
    },
    "g3": {
      "HP": 177,
      "ATK": 41,
      "Phys Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 202,
      "ATK": 47,
      "Phys Crit": 4,
      "Block": 23
    },
    "g5": {
      "HP": 227,
      "ATK": 53,
      "Phys Crit": 5,
      "MP Charge": 5
    },
    "g6": {
      "HP": 253,
      "ATK": 59,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 278,
      "ATK": 65,
      "Phys Crit": 6,
      "Block": 32
    },
    "g8": {
      "HP": 303,
      "ATK": 71,
      "Phys Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 329,
      "ATK": 77,
      "Phys Crit": 7,
      "Block": 38
    },
    "g10": {
      "HP": 354,
      "ATK": 83,
      "Phys Crit": 7,
      "MP Charge": 8
    },
    "total": {
      "HP": 354,
      "ATK": 83,
      "Phys Crit": 7,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 23
    },
    {
      "grade": 2,
      "Phys Crit": 5
    },
    {
      "grade": 3,
      "ATK": 33
    },
    {
      "grade": 4,
      "Phys Crit": 6
    },
    {
      "grade": 5,
      "ATK": 42
    },
    {
      "grade": 6,
      "Phys Crit": 8
    },
    {
      "grade": 7,
      "ATK": 52
    },
    {
      "grade": 8,
      "Phys Crit": 9
    },
    {
      "grade": 9,
      "ATK": 61
    },
    {
      "grade": 10,
      "Phys Crit": 11
    },
    {
      "grade": 11,
      "ATK": 64
    }
  ]
};;;;;;;;
