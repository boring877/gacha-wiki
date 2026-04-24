// Character data: american-exchange-student-artia
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "american-exchange-student-artia",
  "name": "American Exchange Student: Artia",
  "displayName": "American Exchange Student: Artia",
  "baseName": "Artia",
  "title": "American Exchange Student",
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slow",
  "range": 400,
  "weaponType": "Ranged",
  "skillTypes": [
    "Buff",
    "Debuff"
  ],
  "image": "Artia",
  "introduction": "Middle Row、Physical、Attacker",
  "profile": {
    "height": "165cm",
    "bust": "95cm (G Cup)",
    "waist": "61cm",
    "hips": "89cm"
  },
  "credits": {
    "illustration": {
      "japanese": "カゲシオ",
      "romanized": ""
    },
    "voice": {
      "japanese": "風花ましろ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2204
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Even better with makeup on♪",
      "icon": "skill001/skill0019",
      "description": "Gain MP Recovery 100 and Physical Attack 20%+40 UP for 15 seconds , 15 Action Speed 17%UP",
      "descriptionLv1": "Gain MP Recovery 100 and Physical Attack 20%+40 UP for 15 seconds , 15 Action Speed 17%UP",
      "descriptionLv90": "Gain MP Recovery 100 and Physical Attack 20%+850 UP for 15 seconds , 15 Action Speed 17%UP",
      "target": "Self",
      "castTime": 1.15,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "MP Recovery",
        "Physical Attack + Lv5",
        "Action Speed + Lv4"
      ],
      "buffEffects": [
        {
          "name": "MP Recovery",
          "value": 100,
          "type": "percent",
          "duration": 0
        },
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 9.0
        },
        {
          "name": "Action Speed + Lv4",
          "value": 17,
          "type": "flat",
          "duration": 15
        }
      ],
      "duration": 15
    },
    {
      "slot": 3,
      "name": "Am I cute enough?",
      "icon": "skill001/skill0019",
      "description": "Gain MP Recovery 100 and Physical Critical Damage 50 UP for 15 seconds , 15 Hit-Based Physical Damage UP(50%+550, 4 hit(s))",
      "descriptionLv1": "Gain MP Recovery 100 and Physical Critical Damage 50 UP for 15 seconds , 15 Hit-Based Physical Damage UP(50%+550, 4 hit(s))",
      "descriptionLv90": "Gain MP Recovery 100 and Physical Critical Damage 50 UP for 15 seconds , 15 Hit-Based Physical Damage UP(50%+550, 49504 hit(s))",
      "target": "Self",
      "castTime": 1.15,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "MP Recovery",
        "Physical Critical Damage+ Lv4",
        "Hit-Based Physical Damage + Lv5"
      ],
      "buffEffects": [
        {
          "name": "MP Recovery",
          "value": 100,
          "type": "percent",
          "duration": 0
        },
        {
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "percent",
          "duration": 15,
          "levelGrowth": 7.0
        },
        {
          "name": "Hit-Based Physical Damage + Lv5",
          "value": 4,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 550.0
        }
      ],
      "duration": 15
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Excited Vivid Beam",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Wind Type Damage Taken UP(LV 1) for 8 seconds, and before activating the Ultimate,self10 Wind Type ATK UP(LV 1)",
      "effect": "450% + 600",
      "buffEffects": [
        {
          "name": "Wind Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Wind Type ATK + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Excited Vivid Beam",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Wind Type Damage Taken UP(LV 2) for 8 seconds, and before activating the Ultimate,self10 Wind Type ATK UP(LV 2)",
      "effect": "530% + 750",
      "buffEffects": [
        {
          "name": "Wind Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Wind Type ATK + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Excited Vivid Beam",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Wind Type Damage Taken UP(LV 3) for 8 seconds, and before activating the Ultimate,self10 Wind Type ATK UP(LV 3)",
      "effect": "585% + 900",
      "buffEffects": [
        {
          "name": "Wind Type Damage Taken+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Wind Type ATK + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Excited Vivid Beam",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Wind Type Damage Taken UP(LV 4) for 8 seconds, and before activating the Ultimate,self10 Wind Type ATK UP(LV 4)",
      "effect": "630% + 1000",
      "buffEffects": [
        {
          "name": "Wind Type Damage Taken+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Wind Type ATK + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Excited Vivid Beam",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Wind Type Damage Taken UP(LV 5) for 8 seconds, and before activating the Ultimate,self10 Wind Type ATK UP(LV 5)",
      "effect": "660% + 1100",
      "buffEffects": [
        {
          "name": "Wind Type Damage Taken+ Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Wind Type ATK + Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Critical Damage+, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Physical Critical Damage+ (+60), Physical Critical Damage+",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 60,
          "type": "flat"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 0,
          "type": "unknown"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Skill Enhancement Regol Cost DOWNWind",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Skill Enhancement Regol Cost DOWNWind (+5%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Skill Enhancement Regol Cost DOWNWind",
          "value": 5,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "American Exchange Student: Artia",
  "id": 2204,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 2364,
    "ATK": 321,
    "MATK": 192,
    "DEF": 35,
    "MDEF": 14
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.1"
  },
  "slug": "american-exchange-student-artia"
};

export const stats = {
  "id": "american-exchange-student-artia",
  "characterId": 2204,
  "name": "【American Exchange Student】Artia",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 2364,
      "lv90": 11823
    },
    "atk": {
      "base": 321,
      "lv90": 1606
    },
    "matk": {
      "base": 192,
      "lv90": 963
    },
    "def": {
      "base": 35,
      "lv90": 70
    },
    "mdef": {
      "base": 14,
      "lv90": 28
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
      "base": 125,
      "lv90": 200
    },
    "magicCrit": {
      "base": 75,
      "lv90": 120
    },
    "hpRegen": {
      "base": 118,
      "lv90": 413
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
      "base": 71,
      "lv90": 71
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
      "HP": 709,
      "ATK": 96,
      "Block": 15,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 816,
      "ATK": 111,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 958,
      "ATK": 130,
      "Block": 20,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 1064,
      "ATK": 145,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 2010,
      "ATK": 274,
      "DEF": 11,
      "MDEF": 3,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 5557,
      "ATK": 756,
      "Block": 75,
      "MP Charge": 16,
      "Accuracy": 30,
      "DEF": 11,
      "MDEF": 3,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "MP Cost Down": 3
    },
    "gp3": {
      "ATK": 120,
      "MP Cost Down": 3
    },
    "gp4": {
      "ATK": 120,
      "MP Cost Down": 5
    },
    "gp5": {
      "ATK": 200,
      "MP Cost Down": 5
    },
    "gp6": {
      "ATK": 200,
      "MP Cost Down": 6
    },
    "gp7": {
      "ATK": 280,
      "MP Cost Down": 6
    },
    "gp8": {
      "ATK": 280,
      "MP Cost Down": 7
    },
    "gp9": {
      "ATK": 360,
      "MP Cost Down": 7
    },
    "gp10": {
      "ATK": 360,
      "MP Cost Down": 8
    },
    "total": {
      "ATK": 360,
      "MP Cost Down": 8
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 249,
      "ATK": 34,
      "Phys Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 299,
      "ATK": 41,
      "Phys Crit": 3,
      "Block": 16
    },
    "g3": {
      "HP": 348,
      "ATK": 47,
      "Phys Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 398,
      "ATK": 54,
      "Phys Crit": 4,
      "Block": 21
    },
    "g5": {
      "HP": 448,
      "ATK": 61,
      "Phys Crit": 5,
      "MP Charge": 6
    },
    "g6": {
      "HP": 498,
      "ATK": 68,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 548,
      "ATK": 74,
      "Phys Crit": 6,
      "Block": 29
    },
    "g8": {
      "HP": 597,
      "ATK": 81,
      "Phys Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 647,
      "ATK": 88,
      "Phys Crit": 7,
      "Block": 34
    },
    "g10": {
      "HP": 697,
      "ATK": 95,
      "Phys Crit": 7,
      "MP Charge": 9
    },
    "total": {
      "HP": 697,
      "ATK": 95,
      "Phys Crit": 7,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;;;;;
