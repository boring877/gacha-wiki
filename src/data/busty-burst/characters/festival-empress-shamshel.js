// Character data: festival-empress-shamshel
// Merged from info/skills/stats files

export const info = {
  "slug": "festival-empress-shamshel",
  "name": "[Festival Empress] Shamshel",
  "displayName": "Festival Empress Shamshel",
  "baseName": "Shamshel",
  "title": "Festival Empress",
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slightly Fast",
  "range": 360,
  "weaponType": "Shoot/Ranged",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Festival_Empress_Shamshel",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "154cm",
    "bust": "100cm (K Cup)",
    "waist": "55cm",
    "hips": "80cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": "Q-Gaku"
    },
    "voice": {
      "japanese": "\u91d1\u677e\u7531\u83ef",
      "romanized": "Kanematsu Yuka"
    }
  },
  "obtain": {
    "type": "limited",
    "source": "Vern Founding Festival (Dec 4 - Dec 18)"
  }
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Higher than usual♪",
      "icon": "skill001/skill0014",
      "description": "Applies Magic Attack 18%+35 UP to self for 8 seconds and Accuracy 11 UP for 8 seconds",
      "descriptionLv1": "Applies Magic Attack 18%+35 UP to self for 8 seconds and Accuracy 11 UP for 8 seconds",
      "descriptionLv90": "Applies Magic Attack 18%+665 UP to self for 8 seconds and Accuracy 23 UP for 8 seconds",
      "target": "Self",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Magic Attack + Lv4",
        "Accuracy + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Magic Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 7.0
        },
        {
          "name": "Accuracy + Lv4",
          "value": 11,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 0.13
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Faster than usual♪",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Action Speed 20%UP for 6 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Action Speed 20%UP for 6 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Action Speed 20%UP for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "90% ATK",
      "baseDamage": "+50",
      "levelGrowth": "+8",
      "lvl1": "90% + 50",
      "lvl90": null,
      "effects": [
        "Action Speed + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Action Speed + Lv5",
          "value": 20,
          "type": "flat",
          "duration": 6
        }
      ],
      "duration": 6
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Dance with the princess in her gown♪",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Magic Defense DOWN(LV 1) for 10 seconds",
      "effect": "360% + 394",
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Dance with the princess in her gown♪",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Magic Defense DOWN(LV 2) for 10 seconds",
      "effect": "450% + 445",
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv2",
          "value": -19,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Dance with the princess in her gown♪",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Magic Defense DOWN(LV 3) for 10 seconds",
      "effect": "522% + 496",
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv3",
          "value": -22,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Dance with the princess in her gown♪",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Magic Defense DOWN(LV 4) for 10 seconds",
      "effect": "579% + 532",
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv4",
          "value": -24,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Dance with the princess in her gown♪",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Magic Defense DOWN(LV 5) for 10 seconds",
      "effect": "612% + 565",
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Defense- Ultimate Lv5",
          "value": -25,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Charm Resistance LvMax, Magic Attack +",
      "icon": "skill001/skill1003",
      "effect": "Charm Resistance LvMax (+1%), Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Charm Resistance LvMax",
          "value": 1,
          "type": "percent"
        },
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Accuracy +",
      "icon": "skill001/skill1005",
      "effect": "Skill Damage + (+30%), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Accuracy +",
          "value": 20,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Festival Empress: Shamshel",
  "id": 2068,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1715,
    "ATK": 133,
    "MATK": 222,
    "DEF": 57,
    "MDEF": 143
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic → Basic",
    "loop": "Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "festival-empress-shamshel"
};

export const stats = {
  "id": "festival-empress-shamshel",
  "characterId": 2068,
  "name": "【Festival Empress】Shamshel",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1715,
      "lv90": 8575
    },
    "atk": {
      "base": 133,
      "lv90": 666
    },
    "matk": {
      "base": 222,
      "lv90": 1111
    },
    "def": {
      "base": 57,
      "lv90": 114
    },
    "mdef": {
      "base": 143,
      "lv90": 286
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
      "base": 249,
      "lv90": 398
    },
    "magicCrit": {
      "base": 416,
      "lv90": 665
    },
    "hpRegen": {
      "base": 85,
      "lv90": 299
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
      "base": 56,
      "lv90": 56
    },
    "hpDrain": {
      "base": 0,
      "lv90": 18
    },
    "mpCostDown": {
      "base": 0,
      "lv90": 0
    }
  },
  "limitBreak": {
    "lb1": {
      "HP": 515,
      "MATK": 90,
      "Block": 17,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 592,
      "MATK": 103,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 695,
      "MATK": 121,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 772,
      "MATK": 135,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1458,
      "MATK": 222,
      "DEF": 11,
      "MDEF": 41,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4032,
      "MATK": 671,
      "Block": 83,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 11,
      "MDEF": 41,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "HP Drain": 2
    },
    "gp2": {
      "Magic Crit": 20,
      "HP Drain": 2
    },
    "gp3": {
      "Magic Crit": 20,
      "HP Drain": 5
    },
    "gp4": {
      "Magic Crit": 50,
      "HP Drain": 5
    },
    "gp5": {
      "Magic Crit": 50,
      "HP Drain": 7
    },
    "gp6": {
      "Magic Crit": 80,
      "HP Drain": 7
    },
    "gp7": {
      "Magic Crit": 80,
      "HP Drain": 9
    },
    "gp8": {
      "Magic Crit": 110,
      "HP Drain": 9
    },
    "gp9": {
      "Magic Crit": 110,
      "HP Drain": 11
    },
    "gp10": {
      "Magic Crit": 140,
      "HP Drain": 11
    },
    "total": {
      "Magic Crit": 140,
      "HP Drain": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 181,
      "MATK": 23,
      "MDEF": 6,
      "Magic Crit": 9,
      "Accuracy": 9
    },
    "g2": {
      "HP": 217,
      "MATK": 28,
      "MDEF": 8,
      "Magic Crit": 11,
      "Block": 17
    },
    "g3": {
      "HP": 253,
      "MATK": 33,
      "MDEF": 9,
      "Magic Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 289,
      "MATK": 37,
      "MDEF": 10,
      "Magic Crit": 14,
      "Block": 23
    },
    "g5": {
      "HP": 325,
      "MATK": 42,
      "MDEF": 12,
      "Magic Crit": 16,
      "MP Charge": 5
    },
    "g6": {
      "HP": 361,
      "MATK": 47,
      "MDEF": 13,
      "Magic Crit": 18,
      "Accuracy": 18
    },
    "g7": {
      "HP": 397,
      "MATK": 52,
      "MDEF": 14,
      "Magic Crit": 19,
      "Block": 32
    },
    "g8": {
      "HP": 433,
      "MATK": 56,
      "MDEF": 16,
      "Magic Crit": 21,
      "Accuracy": 21
    },
    "g9": {
      "HP": 469,
      "MATK": 61,
      "MDEF": 17,
      "Magic Crit": 23,
      "Block": 38
    },
    "g10": {
      "HP": 506,
      "MATK": 66,
      "MDEF": 18,
      "Magic Crit": 25,
      "MP Charge": 7
    },
    "total": {
      "HP": 506,
      "MATK": 66,
      "MDEF": 18,
      "Magic Crit": 25,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 19
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "MATK": 26
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "MATK": 33
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "MATK": 41
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "MATK": 48
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "MATK": 50
    }
  ]
};;;;;;;;
