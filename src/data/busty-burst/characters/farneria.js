// Character data: farneria
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "farneria",
  "name": "Farneria",
  "displayName": "Farneria",
  "baseName": "Farneria",
  "title": null,
  "rarity": "SR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 360,
  "weaponType": "Throw",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Farneria",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "165cm",
    "bust": "111cm (M Cup)",
    "waist": "63cm",
    "hips": "102cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "渦井ゆきの",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2026
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Blizzard",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the enemy with the highest Physical ATK and inflicts Freeze(Unable to act;HP --650 per second) for 2 seconds",
      "descriptionLv1": "Deals magic damage to the enemy with the highest Physical ATK and inflicts Freeze(Unable to act;HP --650 per second) for 2 seconds",
      "descriptionLv90": "Deals magic damage to the enemy with the highest Physical ATK and inflicts Freeze(Unable to act;HP --4250 per second) for 2 seconds",
      "target": "Highest Phys ATK Enemy",
      "castTime": 1.38,
      "damageScaling": "270% ATK",
      "baseDamage": "+120",
      "levelGrowth": "+20",
      "lvl1": "270% + 120",
      "lvl90": "270% + -3440",
      "effects": [
        "Freeze Lv5"
      ],
      "buffEffects": [
        {
          "name": "Freeze Lv5",
          "value": -650,
          "type": "flat",
          "duration": 2,
          "levelGrowth": -40.0
        }
      ],
      "duration": 2
    },
    {
      "slot": 3,
      "name": "Avalanche",
      "icon": "skill001/skill0019",
      "description": "Applies Magic Attack +35 UP to self for 10 seconds and Physical Defense +170 UP for 10 seconds",
      "descriptionLv1": "Applies Magic Attack +35 UP to self for 10 seconds and Physical Defense +170 UP for 10 seconds",
      "descriptionLv90": "Applies Magic Attack +665 UP to self for 10 seconds and Physical Defense +350 UP for 10 seconds",
      "target": "Self",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Magic Attack + Lv4",
        "Physical Defense + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Magic Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 7.0
        },
        {
          "name": "Physical Defense + Lv4",
          "value": 170,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 2.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "A Prison of Lament for the Loveless",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the enemy with the highest Physical ATK and inflicts Freeze(LV 1) for 3 seconds and Magic Defense DOWN(LV 1) for 12 seconds",
      "effect": "1000% + 943",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv1",
          "value": -2500,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 2,
      "name": "Blizzard",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the enemy with the highest Physical ATK and inflicts Freeze(Unable to act;HP --650 per second) for 2 seconds",
      "effect": "270% + 120",
      "buffEffects": [
        {
          "name": "Freeze Lv5",
          "value": -650,
          "type": "flat",
          "duration": 2
        }
      ]
    },
    {
      "rank": 3,
      "name": "Avalanche",
      "icon": "skill001/skill0019",
      "description": "Applies Magic Attack +35 UP to self for 10 seconds and Physical Defense +170 UP for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Magic Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Defense + Lv4",
          "value": 170,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "A Prison of Lament for the Loveless",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the enemy with the highest Physical ATK and inflicts Freeze(LV 1) for 3 seconds and Magic Defense DOWN(LV 1) for 12 seconds",
      "effect": "1000% + 943",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv1",
          "value": -2500,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 5,
      "name": "A Prison of Lament for the Loveless",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to the enemy with the highest Physical ATK and inflicts Freeze(LV 2) for 3 seconds and Magic Defense DOWN(LV 2) for 9 seconds",
      "effect": "1200% + 1020",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv2",
          "value": -3500,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 9
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Freeze Resistance LvMax",
      "icon": "skill001/skill1003",
      "effect": "Freeze Resistance LvMax (+1%)",
      "effectValues": [
        {
          "name": "Freeze Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Magic Critical Damage+, Block+",
      "icon": "skill001/skill1001",
      "effect": "Magic Critical Damage+ (+118), Block+ (+15)",
      "effectValues": [
        {
          "name": "Magic Critical Damage+",
          "value": 118,
          "type": "flat"
        },
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Farneria",
  "id": 2026,
  "rarity": "SR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1524,
    "ATK": 188,
    "MATK": 314,
    "DEF": 83,
    "MDEF": 208
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "farneria"
};

export const stats = {
  "id": "farneria",
  "characterId": 2026,
  "name": "Farneria",
  "rarity": "SR",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1524,
      "lv90": 7623
    },
    "atk": {
      "base": 188,
      "lv90": 941
    },
    "matk": {
      "base": 314,
      "lv90": 1570
    },
    "def": {
      "base": 83,
      "lv90": 166
    },
    "mdef": {
      "base": 208,
      "lv90": 416
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 45,
      "lv90": 135
    },
    "physCrit": {
      "base": 22,
      "lv90": 35
    },
    "magicCrit": {
      "base": 37,
      "lv90": 59
    },
    "hpRegen": {
      "base": 76,
      "lv90": 266
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
      "base": 77,
      "lv90": 77
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
      "HP": 457,
      "MATK": 94,
      "Block": 14,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 526,
      "MATK": 108,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 618,
      "MATK": 127,
      "Block": 18,
      "MP Charge": 10
    },
    "lb4": {
      "HP": 686,
      "MATK": 141,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1205,
      "MATK": 248,
      "DEF": 15,
      "MDEF": 65,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3492,
      "MATK": 718,
      "Block": 68,
      "MP Charge": 17,
      "Accuracy": 30,
      "DEF": 15,
      "MDEF": 65,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "Magic Crit": 10
    },
    "gp2": {
      "MATK": 30,
      "Magic Crit": 10
    },
    "gp3": {
      "MATK": 30,
      "Magic Crit": 30
    },
    "gp4": {
      "MATK": 90,
      "Magic Crit": 30
    },
    "gp5": {
      "MATK": 90,
      "Magic Crit": 50
    },
    "gp6": {
      "MATK": 130,
      "Magic Crit": 50
    },
    "gp7": {
      "MATK": 130,
      "Magic Crit": 70
    },
    "gp8": {
      "MATK": 170,
      "Magic Crit": 70
    },
    "gp9": {
      "MATK": 170,
      "Magic Crit": 90
    },
    "gp10": {
      "MATK": 210,
      "Magic Crit": 90
    },
    "total": {
      "MATK": 210,
      "Magic Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 161,
      "MATK": 33,
      "MDEF": 9,
      "Magic Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 193,
      "MATK": 40,
      "MDEF": 11,
      "Magic Crit": 1,
      "Block": 14
    },
    "g3": {
      "HP": 225,
      "MATK": 46,
      "MDEF": 13,
      "Magic Crit": 1,
      "Accuracy": 12
    },
    "g4": {
      "HP": 257,
      "MATK": 53,
      "MDEF": 15,
      "Magic Crit": 1,
      "Block": 19
    },
    "g5": {
      "HP": 289,
      "MATK": 59,
      "MDEF": 17,
      "Magic Crit": 1,
      "MP Charge": 7
    },
    "g6": {
      "HP": 321,
      "MATK": 66,
      "MDEF": 19,
      "Magic Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 353,
      "MATK": 73,
      "MDEF": 21,
      "Magic Crit": 2,
      "Block": 26
    },
    "g8": {
      "HP": 385,
      "MATK": 79,
      "MDEF": 23,
      "Magic Crit": 2,
      "Accuracy": 21
    },
    "g9": {
      "HP": 417,
      "MATK": 86,
      "MDEF": 24,
      "Magic Crit": 2,
      "Block": 31
    },
    "g10": {
      "HP": 449,
      "MATK": 93,
      "MDEF": 26,
      "Magic Crit": 2,
      "MP Charge": 10
    },
    "total": {
      "HP": 449,
      "MATK": 93,
      "MDEF": 26,
      "Magic Crit": 2,
      "MP Charge": 10
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Magic Crit": 1
    },
    {
      "grade": 2,
      "MDEF": 11
    },
    {
      "grade": 3,
      "Magic Crit": 2
    },
    {
      "grade": 4,
      "MDEF": 14
    },
    {
      "grade": 5,
      "Magic Crit": 2
    },
    {
      "grade": 6,
      "MDEF": 18
    },
    {
      "grade": 7,
      "Magic Crit": 3
    },
    {
      "grade": 8,
      "MDEF": 21
    },
    {
      "grade": 9,
      "Magic Crit": 3
    },
    {
      "grade": 10,
      "MDEF": 25
    },
    {
      "grade": 11,
      "Magic Crit": 4
    }
  ]
};;;;;;;;
