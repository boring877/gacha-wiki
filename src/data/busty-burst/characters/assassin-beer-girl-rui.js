// Character data: assassin-beer-girl-rui
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "assassin-beer-girl-rui",
  "name": "Assassin Beer Girl: Rui",
  "displayName": "Assassin Beer Girl: Rui",
  "baseName": "Rui",
  "title": "Assassin Beer Girl",
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Fast",
  "range": 230,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Rui",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "167cm",
    "bust": "99cm (I Cup)",
    "waist": "60cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "brick",
      "romanized": ""
    },
    "voice": {
      "japanese": "森乃なんな",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2178
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Wind Fire Wheel",
      "icon": "skill001/skill0002",
      "description": "MP 1 to enemiesphysical damage and inflicts Physical Defense -40 DOWN for 6 seconds and Bleed (HP −-500 after acting) for 15 seconds",
      "descriptionLv1": "MP 1 to enemiesphysical damage and inflicts Physical Defense -40 DOWN for 6 seconds and Bleed (HP −-500 after acting) for 15 seconds",
      "descriptionLv90": "MP 1 to enemiesphysical damage and inflicts Physical Defense -220 DOWN for 6 seconds and Bleed (HP −-5000 after acting) for 15 seconds",
      "target": "Highest MP Enemy",
      "castTime": 0.75,
      "damageScaling": "350% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "350% + 500",
      "lvl90": "350% + -3950",
      "effects": [
        "Physical Defense - Lv4",
        "Bleed"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        },
        {
          "name": "Bleed",
          "value": -500,
          "type": "flat",
          "duration": 15,
          "levelGrowth": -50.0
        }
      ],
      "duration": 15
    },
    {
      "slot": 3,
      "name": "You can eat it all!",
      "icon": "skill001/skill0019",
      "description": "Applies Block 11 UP to self for 10 seconds and Physical Critical Damage 50 UP for 10 seconds , 4 MP Regeneration 50",
      "descriptionLv1": "Applies Block 11 UP to self for 10 seconds and Physical Critical Damage 50 UP for 10 seconds , 4 MP Regeneration 50",
      "descriptionLv90": "Applies Block 23 UP to self for 10 seconds and Physical Critical Damage 50 UP for 10 seconds , 4 MP Regeneration 50",
      "target": "Self",
      "castTime": 0.85,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Block+ Lv4",
        "Physical Critical Damage+ Lv4",
        "MP Regeneration + LvMax"
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
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 7.0
        },
        {
          "name": "MP Regeneration + LvMax",
          "value": 50,
          "type": "percent",
          "duration": 4
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Nato Fire Wheel",
      "icon": "skill001/skill0003_1",
      "description": "MP 1 to enemiesphysical damage, guaranteed hit and inflicts Dispel for 4 seconds , Ultimate activation beforeself10 Physical Attack UP(LV 1)",
      "effect": "1200% + 1200",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Wind Fire Wheel",
      "icon": "skill001/skill0002",
      "description": "MP 1 to enemiesphysical damage and inflicts Physical Defense -40 DOWN for 6 seconds and Bleed (HP −-500 after acting) for 15 seconds",
      "effect": "350% + 500",
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 6
        },
        {
          "name": "Bleed",
          "value": -500,
          "type": "flat",
          "duration": 15
        }
      ]
    },
    {
      "rank": 3,
      "name": "You can eat it all!",
      "icon": "skill001/skill0019",
      "description": "Applies Block 11 UP to self for 10 seconds and Physical Critical Damage 50 UP for 10 seconds , 4 MP Regeneration 50",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Block+ Lv4",
          "value": 11,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "MP Regeneration + LvMax",
          "value": 50,
          "type": "percent",
          "duration": 4
        }
      ]
    },
    {
      "rank": 4,
      "name": "Nato Fire Wheel",
      "icon": "skill001/skill0003_1",
      "description": "MP 1 to enemiesphysical damage, guaranteed hit and inflicts Dispel for 4 seconds , Ultimate activation beforeself10 Physical Attack UP(LV 1)",
      "effect": "1200% + 1200",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Nato Fire Wheel",
      "icon": "skill001/skill0003_2",
      "description": "MP 1 to enemiesphysical damage, guaranteed hit and inflicts Dispel for 5 seconds , Ultimate activation beforeself10 Physical Attack UP(LV 2)",
      "effect": "1440% + 1400",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Physical Attack + Ultimate Lv2",
          "value": 25,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Debuff Resistance+",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+15)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Assassin Beer Girl: Rui",
  "id": 2178,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1972,
    "ATK": 261,
    "MATK": 157,
    "DEF": 54,
    "MDEF": 54
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.42"
  },
  "slug": "assassin-beer-girl-rui"
};

export const stats = {
  "id": "assassin-beer-girl-rui",
  "characterId": 2178,
  "name": "【Assassin Beer Girl】Rui",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1972,
      "lv90": 9861
    },
    "atk": {
      "base": 261,
      "lv90": 1307
    },
    "matk": {
      "base": 157,
      "lv90": 785
    },
    "def": {
      "base": 54,
      "lv90": 117
    },
    "mdef": {
      "base": 54,
      "lv90": 106
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
      "base": 98,
      "lv90": 344
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
      "base": 60,
      "lv90": 60
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
      "ATK": 78,
      "Block": 17,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 680,
      "ATK": 90,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 799,
      "ATK": 106,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 888,
      "ATK": 118,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 2222,
      "ATK": 223,
      "DEF": 19,
      "MDEF": 11,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 5181,
      "ATK": 615,
      "Block": 83,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 19,
      "MDEF": 11,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "Phys Crit": 10
    },
    "gp2": {
      "Phys Crit": 10,
      "MP Cost Down": 3
    },
    "gp3": {
      "Phys Crit": 30,
      "MP Cost Down": 3
    },
    "gp4": {
      "Phys Crit": 30,
      "MP Cost Down": 5
    },
    "gp5": {
      "Phys Crit": 50,
      "MP Cost Down": 5
    },
    "gp6": {
      "Phys Crit": 50,
      "MP Cost Down": 6
    },
    "gp7": {
      "Phys Crit": 70,
      "MP Cost Down": 6
    },
    "gp8": {
      "Phys Crit": 70,
      "MP Cost Down": 7
    },
    "gp9": {
      "Phys Crit": 90,
      "MP Cost Down": 7
    },
    "gp10": {
      "Phys Crit": 90,
      "MP Cost Down": 8
    },
    "total": {
      "Phys Crit": 90,
      "MP Cost Down": 8
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 208,
      "ATK": 28,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 249,
      "ATK": 33,
      "Phys Crit": 5,
      "Block": 17
    },
    "g3": {
      "HP": 291,
      "ATK": 39,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 332,
      "ATK": 44,
      "Phys Crit": 7,
      "Block": 23
    },
    "g5": {
      "HP": 374,
      "ATK": 50,
      "Phys Crit": 8,
      "MP Charge": 4
    },
    "g6": {
      "HP": 415,
      "ATK": 55,
      "Phys Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 457,
      "ATK": 61,
      "Phys Crit": 10,
      "Block": 32
    },
    "g8": {
      "HP": 498,
      "ATK": 66,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 540,
      "ATK": 72,
      "Phys Crit": 11,
      "Block": 38
    },
    "g10": {
      "HP": 581,
      "ATK": 77,
      "Phys Crit": 12,
      "MP Charge": 7
    },
    "total": {
      "HP": 581,
      "ATK": 77,
      "Phys Crit": 12,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Phys Crit": 7
    },
    {
      "grade": 2,
      "MP Charge": 1
    },
    {
      "grade": 3,
      "Phys Crit": 10
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "Phys Crit": 12
    },
    {
      "grade": 6,
      "MP Charge": 2
    },
    {
      "grade": 7,
      "Phys Crit": 15
    },
    {
      "grade": 8,
      "MP Charge": 3
    },
    {
      "grade": 9,
      "Phys Crit": 18
    },
    {
      "grade": 10,
      "MP Charge": 3
    },
    {
      "grade": 11,
      "Phys Crit": 20
    }
  ]
};;;;;;;;
