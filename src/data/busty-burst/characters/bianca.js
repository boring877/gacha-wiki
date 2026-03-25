// Character data: bianca
// Merged from info/skills/stats files

export const info = {
  "slug": "bianca",
  "name": "Bianca",
  "displayName": "Bianca",
  "baseName": "Bianca",
  "title": null,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Fast",
  "range": 360,
  "weaponType": "Slash",
  "skillTypes": [
    "Disrupt"
  ],
  "image": "Bianca",
  "introduction": "Middle Row、Physical、Attacker",
  "profile": {
    "height": "158cm",
    "bust": "93cm (H Cup)",
    "waist": "58cm",
    "hips": "84cm"
  },
  "credits": {
    "illustration": {
      "japanese": "HIMA",
      "romanized": "HIMA"
    },
    "voice": {
      "japanese": "\u307e\u306e\u3081\u308b\u304b",
      "romanized": "Manomeruka"
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
      "name": "Cross Slash",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the 3 nearest enemies",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies",
      "target": "Nearest Enemy",
      "castTime": 0.66,
      "damageScaling": "145% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+10",
      "lvl1": "145% + 100",
      "lvl90": "145% + 990",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Paladin’s Awakening",
      "icon": "skill001/skill0017",
      "description": "Applies Physical Attack 20%+40 UP to self for 10 seconds and Mind Type ATK 10%UP for 10 seconds",
      "descriptionLv1": "Applies Physical Attack 20%+40 UP to self for 10 seconds and Mind Type ATK 10%UP for 10 seconds",
      "descriptionLv90": "Applies Physical Attack 20%+850 UP to self for 10 seconds and Mind Type ATK 10%UP for 10 seconds",
      "target": "Self",
      "castTime": 0.66,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv5",
        "Mind Type ATK + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 9.0
        },
        {
          "name": "Mind Type ATK + Lv3",
          "value": 10,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Oracle of the Demon-Slaying Goddess",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to all enemies and inflicts Silence for 6 seconds and inflicts Curse for 3 seconds",
      "effect": "560% + 700",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 2,
      "name": "Oracle of the Demon-Slaying Goddess",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to all enemies and inflicts Silence for 6 seconds and inflicts Curse for 3 seconds",
      "effect": "760% + 500",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 3,
      "name": "Oracle of the Demon-Slaying Goddess",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to all enemies and inflicts Silence for 6 seconds and inflicts Curse for 3 seconds",
      "effect": "930% + 550",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 4,
      "name": "Oracle of the Demon-Slaying Goddess",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to all enemies and inflicts Silence for 6 seconds and inflicts Curse for 3 seconds",
      "effect": "1019% + 600",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 5,
      "name": "Oracle of the Demon-Slaying Goddess",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to all enemies and inflicts Silence for 6 seconds and inflicts Curse for 3 seconds",
      "effect": "1110% + 680",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+159), Action Speed + (+15)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 159,
          "type": "flat"
        },
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Mind Type ATK +, Block+",
      "icon": "skill001/skill1003",
      "effect": "Mind Type ATK + (+10%), Block+ (+20)",
      "effectValues": [
        {
          "name": "Mind Type ATK +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Block+",
          "value": 20,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Bianca",
  "id": 2063,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 257,
    "MATK": 154,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.36"
  },
  "slug": "bianca"
};

export const stats = {
  "id": "bianca",
  "characterId": 2063,
  "name": "Bianca",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1819,
      "lv90": 9095
    },
    "atk": {
      "base": 257,
      "lv90": 1288
    },
    "matk": {
      "base": 154,
      "lv90": 773
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
      "base": 50,
      "lv90": 150
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
      "base": 90,
      "lv90": 317
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
      "base": 44,
      "lv90": 44
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
      "HP": 546,
      "ATK": 77,
      "Block": 15,
      "MP Charge": 4
    },
    "lb2": {
      "HP": 628,
      "ATK": 89,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 737,
      "ATK": 104,
      "Block": 20,
      "MP Charge": 5
    },
    "lb4": {
      "HP": 819,
      "ATK": 116,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1546,
      "ATK": 258,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4276,
      "ATK": 644,
      "Block": 75,
      "MP Charge": 9,
      "Accuracy": 30,
      "DEF": 41,
      "MDEF": 11,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "Phys Crit": 20
    },
    "gp2": {
      "ATK": 40,
      "Phys Crit": 20
    },
    "gp3": {
      "ATK": 40,
      "Phys Crit": 50
    },
    "gp4": {
      "ATK": 120,
      "Phys Crit": 50
    },
    "gp5": {
      "ATK": 120,
      "Phys Crit": 80
    },
    "gp6": {
      "ATK": 200,
      "Phys Crit": 80
    },
    "gp7": {
      "ATK": 200,
      "Phys Crit": 110
    },
    "gp8": {
      "ATK": 280,
      "Phys Crit": 110
    },
    "gp9": {
      "ATK": 280,
      "Phys Crit": 140
    },
    "gp10": {
      "ATK": 360,
      "Phys Crit": 140
    },
    "total": {
      "ATK": 360,
      "Phys Crit": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 191,
      "ATK": 27,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 230,
      "ATK": 33,
      "Phys Crit": 1,
      "Block": 16
    },
    "g3": {
      "HP": 268,
      "ATK": 38,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 306,
      "ATK": 43,
      "Phys Crit": 2,
      "Block": 21
    },
    "g5": {
      "HP": 345,
      "ATK": 49,
      "Phys Crit": 2,
      "MP Charge": 4
    },
    "g6": {
      "HP": 383,
      "ATK": 54,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 421,
      "ATK": 60,
      "Phys Crit": 2,
      "Block": 29
    },
    "g8": {
      "HP": 460,
      "ATK": 65,
      "Phys Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 498,
      "ATK": 71,
      "Phys Crit": 3,
      "Block": 34
    },
    "g10": {
      "HP": 536,
      "ATK": 76,
      "Phys Crit": 3,
      "MP Charge": 6
    },
    "total": {
      "HP": 536,
      "ATK": 76,
      "Phys Crit": 3,
      "MP Charge": 6
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 21
    },
    {
      "grade": 2,
      "ATK": 23
    },
    {
      "grade": 3,
      "ATK": 30
    },
    {
      "grade": 4,
      "ATK": 31
    },
    {
      "grade": 5,
      "ATK": 39
    },
    {
      "grade": 6,
      "ATK": 39
    },
    {
      "grade": 7,
      "ATK": 47
    },
    {
      "grade": 8,
      "ATK": 46
    },
    {
      "grade": 9,
      "ATK": 56
    },
    {
      "grade": 10,
      "ATK": 54
    },
    {
      "grade": 11,
      "ATK": 59
    }
  ]
};;;;;;;;
