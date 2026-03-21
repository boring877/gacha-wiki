// Character data: hypnotic-dancer-messeria
// Merged from info/skills/stats files

export const info = {
  "slug": "hypnotic-dancer-messeria",
  "name": "[Hypnotic Dancer] Messeria",
  "displayName": "Hypnotic Dancer Messeria",
  "baseName": "Messeria",
  "title": "Hypnotic Dancer",
  "rarity": "SSR",
  "element": "Wind",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slightly Fast",
  "range": 400,
  "weaponType": "Throw",
  "skillTypes": [
    "Heal",
    "Buff",
    "Debuff"
  ],
  "image": "Trance_Dancer_Messeria",
  "introduction": "Middle Row、Physical、Support",
  "profile": {
    "height": "164cm",
    "bust": "100cm (K Cup)",
    "waist": "57cm",
    "hips": "91cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u53ea\u91ce\u3042\u304d\u3089",
      "romanized": "Tadano Akira"
    },
    "voice": {
      "japanese": "\u7121\u6728\u5fb9\u5b50",
      "romanized": "Muki Tetsuko"
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
      "name": "Londo of Light",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -40 DOWN for 10 seconds and Accuracy -11 DOWN for 10 seconds",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -40 DOWN for 10 seconds and Accuracy -11 DOWN for 10 seconds",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -220 DOWN for 10 seconds and Accuracy -23 DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "90% ATK",
      "baseDamage": "+50",
      "levelGrowth": "+6",
      "lvl1": "90% + 50",
      "lvl90": "90% + 38",
      "effects": [
        "Physical Defense - Lv4",
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -2.0
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.13
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Dancing Performance",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack +30 UP to all allies for 10 seconds and Physical Critical Damage 40 UP for 10 seconds",
      "descriptionLv1": "Applies Physical Attack +30 UP to all allies for 10 seconds and Physical Critical Damage 40 UP for 10 seconds",
      "descriptionLv90": "Applies Physical Attack +480 UP to all allies for 10 seconds and Physical Critical Damage 40 UP for 10 seconds",
      "target": "All Allies",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv3",
        "Physical Critical Damage+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv3",
          "value": 30,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 5.0
        },
        {
          "name": "Physical Critical Damage+ Lv3",
          "value": 40,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 5.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Prayer in the Sea of Stars",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to all allies and inflicts Action Speed UP(LV 1) for 12 seconds and BlockUP(LV 1) for 12 seconds",
      "effect": "2000% + 1097",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Block+ Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 2,
      "name": "Londo of Light",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -40 DOWN for 10 seconds and Accuracy -11 DOWN for 10 seconds",
      "effect": "90% + 50",
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Dancing Performance",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack +30 UP to all allies for 10 seconds and Physical Critical Damage 40 UP for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Lv3",
          "value": 30,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Critical Damage+ Lv3",
          "value": 40,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Prayer in the Sea of Stars",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to all allies and inflicts Action Speed UP(LV 1) for 12 seconds and BlockUP(LV 1) for 12 seconds",
      "effect": "2000% + 1097",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Block+ Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 5,
      "name": "Prayer in the Sea of Stars",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by to all allies and inflicts Action Speed UP(LV 2) for 12 seconds and BlockUP(LV 2) for 12 seconds",
      "effect": "2300% + 1250",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Block+ Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 12
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Skill Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+10%), Physical Attack + (+130)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 130,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Block+, Action Speed +",
      "icon": "skill001/skill1007",
      "effect": "Block+ (+10), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Block+",
          "value": 10,
          "type": "flat"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Hypnotic Dancer: Messeria",
  "id": 2044,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 1913,
    "ATK": 221,
    "MATK": 132,
    "DEF": 226,
    "MDEF": 90
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "hypnotic-dancer-messeria"
};

export const stats = {
  "id": "hypnotic-dancer-messeria",
  "characterId": 2044,
  "name": "【Hypnotic Dancer】Messeria",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1913,
      "lv90": 9566
    },
    "atk": {
      "base": 221,
      "lv90": 1106
    },
    "matk": {
      "base": 132,
      "lv90": 663
    },
    "def": {
      "base": 226,
      "lv90": 452
    },
    "mdef": {
      "base": 90,
      "lv90": 180
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
      "base": 95,
      "lv90": 334
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
      "base": 64,
      "lv90": 64
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
      "HP": 574,
      "ATK": 66,
      "Block": 17,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 660,
      "ATK": 76,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 775,
      "ATK": 90,
      "Block": 22,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 861,
      "ATK": 100,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1626,
      "ATK": 188,
      "DEF": 34,
      "MDEF": 18,
      "Heal Pwr": 29
    },
    "total": {
      "HP": 4496,
      "ATK": 520,
      "Block": 83,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 34,
      "MDEF": 18,
      "Heal Pwr": 29
    }
  },
  "gpAbility": {
    "gp1": {
      "Block": 3
    },
    "gp2": {
      "Block": 3,
      "MP Charge": 2
    },
    "gp3": {
      "Block": 7,
      "MP Charge": 2
    },
    "gp4": {
      "Block": 7,
      "MP Charge": 5
    },
    "gp5": {
      "Block": 10,
      "MP Charge": 5
    },
    "gp6": {
      "Block": 10,
      "MP Charge": 7
    },
    "gp7": {
      "Block": 13,
      "MP Charge": 7
    },
    "gp8": {
      "Block": 13,
      "MP Charge": 9
    },
    "gp9": {
      "Block": 16,
      "MP Charge": 9
    },
    "gp10": {
      "Block": 16,
      "MP Charge": 11
    },
    "total": {
      "Block": 16,
      "MP Charge": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 201,
      "ATK": 23,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 242,
      "ATK": 28,
      "Phys Crit": 5,
      "Block": 17
    },
    "g3": {
      "HP": 282,
      "ATK": 33,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 322,
      "ATK": 37,
      "Phys Crit": 7,
      "Block": 23
    },
    "g5": {
      "HP": 363,
      "ATK": 42,
      "Phys Crit": 8,
      "MP Charge": 5
    },
    "g6": {
      "HP": 403,
      "ATK": 47,
      "Phys Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 443,
      "ATK": 51,
      "Phys Crit": 10,
      "Block": 32
    },
    "g8": {
      "HP": 483,
      "ATK": 56,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 524,
      "ATK": 61,
      "Phys Crit": 11,
      "Block": 38
    },
    "g10": {
      "HP": 564,
      "ATK": 65,
      "Phys Crit": 12,
      "MP Charge": 8
    },
    "total": {
      "HP": 564,
      "ATK": 65,
      "Phys Crit": 12,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Charge": 2
    },
    {
      "grade": 2,
      "Heal Pwr": 5
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "Heal Pwr": 6
    },
    {
      "grade": 5,
      "MP Charge": 3
    },
    {
      "grade": 6,
      "Heal Pwr": 8
    },
    {
      "grade": 7,
      "MP Charge": 3
    },
    {
      "grade": 8,
      "Heal Pwr": 9
    },
    {
      "grade": 9,
      "MP Charge": 4
    },
    {
      "grade": 10,
      "Heal Pwr": 11
    },
    {
      "grade": 11,
      "MP Charge": 4
    }
  ]
};;;;;;;;
