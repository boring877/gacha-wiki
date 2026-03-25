// Character data: elegant-portrait-aysis
// Merged from info/skills/stats files

export const info = {
  "slug": "elegant-portrait-aysis",
  "name": "[Elegant Portrait] Aysis",
  "displayName": "Elegant Portrait Aysis",
  "baseName": "Aysis",
  "title": "Elegant Portrait",
  "rarity": "SSR",
  "element": "Mind",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 190,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Elegant_Portrait_Aysis",
  "introduction": "Front Row、Physical、Tank",
  "profile": {
    "height": "169cm",
    "bust": "99cm (J Cup)",
    "waist": "61cm",
    "hips": "95cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": "Q-Gaku"
    },
    "voice": {
      "japanese": "\u6afb\u4e95\u3042\u308a\u3059",
      "romanized": "Sakurai Arisu"
    }
  },
  "obtain": {
    "type": "limited",
    "source": "30-Day Beginner Login Event"
  }
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Edelrant-Style Swordsmanship: Earthstride",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the 2 nearest enemies",
      "descriptionLv1": "Deals physical damage to the 2 nearest enemies",
      "descriptionLv90": "Deals physical damage to the 2 nearest enemies",
      "target": "Nearest Enemy",
      "castTime": 0.88,
      "damageScaling": "170% ATK",
      "baseDamage": "+120",
      "levelGrowth": "+15",
      "lvl1": "170% + 120",
      "lvl90": "170% + 1455",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Pride of the Royal Guards",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Defense 20%+140 UP to self for 7 seconds and Magic Defense 20%+140 UP for 7 seconds",
      "descriptionLv1": "Applies Physical Defense 20%+140 UP to self for 7 seconds and Magic Defense 20%+140 UP for 7 seconds",
      "descriptionLv90": "Applies Physical Defense 20%+320 UP to self for 7 seconds and Magic Defense 20%+320 UP for 7 seconds",
      "target": "Self",
      "castTime": 0.88,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Defense + Lv3",
        "Magic Defense+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + Lv3",
          "value": 140,
          "type": "flat",
          "duration": 7,
          "levelGrowth": 2.0
        },
        {
          "name": "Magic Defense+ Lv3",
          "value": 140,
          "type": "flat",
          "duration": 7,
          "levelGrowth": 2.0
        }
      ],
      "duration": 7
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 1) for 10 seconds",
      "effect": "1300% + 500",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 2) for 10 seconds",
      "effect": "1500% + 600",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv2",
          "value": -20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 3) for 10 seconds",
      "effect": "1700% + 680",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv3",
          "value": -24,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 4) for 10 seconds",
      "effect": "1800% + 750",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv4",
          "value": -27,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 5) for 10 seconds",
      "effect": "1900% + 800",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv5",
          "value": -30,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +",
      "icon": "skill001/skill1002",
      "effect": "Physical Defense + (+211)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 211,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Physical Critical Damage+ (+90%)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Elegant Portrait: Aysis",
  "id": 2066,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Tank",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 2660,
    "ATK": 132,
    "MATK": 79,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Basic → Basic → Skill2",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.36"
  },
  "slug": "elegant-portrait-aysis"
};

export const stats = {
  "id": "elegant-portrait-aysis",
  "characterId": 2066,
  "name": "【Elegant Portrait】Aysis",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 2660,
      "lv90": 13301
    },
    "atk": {
      "base": 132,
      "lv90": 660
    },
    "matk": {
      "base": 79,
      "lv90": 395
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
      "base": 60,
      "lv90": 180
    },
    "physCrit": {
      "base": 416,
      "lv90": 665
    },
    "magicCrit": {
      "base": 249,
      "lv90": 398
    },
    "hpRegen": {
      "base": 133,
      "lv90": 465
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
      "base": 65,
      "lv90": 65
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
      "HP": 798,
      "ATK": 40,
      "Block": 18,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 918,
      "ATK": 46,
      "Accuracy": 13,
      "Block": 21
    },
    "lb3": {
      "HP": 1077,
      "ATK": 53,
      "Block": 24,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 1197,
      "ATK": 59,
      "Accuracy": 17,
      "Block": 27
    },
    "lb5": {
      "HP": 2261,
      "ATK": 112,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 6251,
      "ATK": 310,
      "Block": 90,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
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
      "Block": 9
    },
    "gp6": {
      "HP": 1200,
      "Block": 9
    },
    "gp7": {
      "HP": 1200,
      "Block": 11
    },
    "gp8": {
      "HP": 1650,
      "Block": 11
    },
    "gp9": {
      "HP": 1650,
      "Block": 13
    },
    "gp10": {
      "HP": 2100,
      "Block": 13
    },
    "total": {
      "HP": 2100,
      "Block": 13
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 280,
      "ATK": 14,
      "Phys Crit": 9,
      "Accuracy": 9
    },
    "g2": {
      "HP": 336,
      "ATK": 17,
      "Phys Crit": 11,
      "Block": 19
    },
    "g3": {
      "HP": 392,
      "ATK": 19,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 448,
      "ATK": 22,
      "Phys Crit": 14,
      "Block": 25
    },
    "g5": {
      "HP": 504,
      "ATK": 25,
      "Phys Crit": 16,
      "MP Charge": 6
    },
    "g6": {
      "HP": 560,
      "ATK": 28,
      "Phys Crit": 18,
      "Accuracy": 18
    },
    "g7": {
      "HP": 616,
      "ATK": 31,
      "Phys Crit": 19,
      "Block": 35
    },
    "g8": {
      "HP": 672,
      "ATK": 33,
      "Phys Crit": 21,
      "Accuracy": 21
    },
    "g9": {
      "HP": 728,
      "ATK": 36,
      "Phys Crit": 23,
      "Block": 41
    },
    "g10": {
      "HP": 784,
      "ATK": 39,
      "Phys Crit": 25,
      "MP Charge": 9
    },
    "total": {
      "HP": 784,
      "ATK": 39,
      "Phys Crit": 25,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Block": 5
    },
    {
      "grade": 2,
      "Phys Crit": 15
    },
    {
      "grade": 3,
      "Block": 7
    },
    {
      "grade": 4,
      "Phys Crit": 20
    },
    {
      "grade": 5,
      "Block": 9
    },
    {
      "grade": 6,
      "Phys Crit": 25
    },
    {
      "grade": 7,
      "Block": 11
    },
    {
      "grade": 8,
      "Phys Crit": 30
    },
    {
      "grade": 9,
      "Block": 13
    },
    {
      "grade": 10,
      "Phys Crit": 35
    },
    {
      "grade": 11,
      "Block": 14
    }
  ]
};;;;;;;;
