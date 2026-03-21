// Character data: messeria
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "messeria",
  "name": "Messeria",
  "displayName": "Messeria",
  "baseName": "Messeria",
  "title": null,
  "rarity": "SR",
  "element": "Wind",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Fast",
  "range": 400,
  "weaponType": "Throw",
  "skillTypes": [
    "Heal",
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "image": "Messeria",
  "introduction": "Middle Row、Physical、Support",
  "profile": {
    "height": "164cm",
    "bust": "100cm (K Cup)",
    "waist": "57cm",
    "hips": "91cm"
  },
  "credits": {
    "illustration": {
      "japanese": "只野あきら",
      "romanized": ""
    },
    "voice": {
      "japanese": "蕪木徹子",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2021
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Rhythm and Beat",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the enemy with the lowest HP and inflicts Action Speed DOWN for 5 seconds",
      "descriptionLv1": "Deals physical damage to the enemy with the lowest HP and inflicts Action Speed DOWN for 5 seconds",
      "descriptionLv90": "Deals physical damage to the enemy with the lowest HP and inflicts Action Speed DOWN for 5 seconds",
      "target": "Lowest HP Enemy",
      "castTime": 1.08,
      "damageScaling": "280% ATK",
      "baseDamage": "+110",
      "levelGrowth": "+6",
      "lvl1": "280% + 110",
      "lvl90": null,
      "effects": [
        "Action Speed - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Action Speed - Lv3",
          "value": -14,
          "type": "flat",
          "duration": 5
        }
      ],
      "duration": 5
    },
    {
      "slot": 3,
      "name": "Dance of Resistance",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to all allies and inflicts Action Speed UP for 8 seconds",
      "descriptionLv1": "Restores HP by to all allies and inflicts Action Speed UP for 8 seconds",
      "descriptionLv90": "Restores HP by to all allies and inflicts Action Speed UP for 8 seconds",
      "target": "All Allies",
      "castTime": 1.08,
      "damageScaling": "1350% ATK",
      "baseDamage": "+301",
      "levelGrowth": "+5",
      "lvl1": "1350% + 301",
      "lvl90": "1350% + 746",
      "effects": [
        "Action Speed + Lv1"
      ],
      "buffEffects": [
        {
          "name": "Action Speed + Lv1",
          "value": 7,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 5.0
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Wish Upon the Soaring Stars",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to all enemies and inflicts Burn(LV 1) for 15 seconds",
      "effect": "450% + 352",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv1",
          "value": -1000,
          "type": "flat",
          "duration": 15
        }
      ]
    },
    {
      "rank": 2,
      "name": "Rhythm and Beat",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the enemy with the lowest HP and inflicts Action Speed DOWN for 5 seconds",
      "effect": "280% + 110",
      "buffEffects": [
        {
          "name": "Action Speed - Lv3",
          "value": -14,
          "type": "flat",
          "duration": 5
        }
      ]
    },
    {
      "rank": 3,
      "name": "Dance of Resistance",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to all allies and inflicts Action Speed UP for 8 seconds",
      "effect": "1350% + 301",
      "buffEffects": [
        {
          "name": "Action Speed + Lv1",
          "value": 7,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Wish Upon the Soaring Stars",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to all enemies and inflicts Burn(LV 1) for 15 seconds",
      "effect": "450% + 352",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv1",
          "value": -1000,
          "type": "flat",
          "duration": 15
        }
      ]
    },
    {
      "rank": 5,
      "name": "Wish Upon the Soaring Stars",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to all enemies and inflicts Burn(LV 2) for 15 seconds",
      "effect": "540% + 472",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv2",
          "value": -1300,
          "type": "flat",
          "duration": 15
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Block+",
      "icon": "skill001/skill1002",
      "effect": "Block+ (+15)",
      "effectValues": [
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Block+",
      "icon": "skill001/skill1006",
      "effect": "Block+ (+8)",
      "effectValues": [
        {
          "name": "Block+",
          "value": 8,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Messeria",
  "id": 2021,
  "rarity": "SR",
  "element": "Wind",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2055,
    "ATK": 187,
    "MATK": 112,
    "DEF": 126,
    "MDEF": 50
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Skill3 → Basic → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "messeria"
};

export const stats = {
  "id": "messeria",
  "characterId": 2021,
  "name": "Messeria",
  "rarity": "SR",
  "element": "風",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2055,
      "lv90": 10276
    },
    "atk": {
      "base": 187,
      "lv90": 935
    },
    "matk": {
      "base": 112,
      "lv90": 560
    },
    "def": {
      "base": 126,
      "lv90": 252
    },
    "mdef": {
      "base": 50,
      "lv90": 100
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
      "base": 287,
      "lv90": 459
    },
    "magicCrit": {
      "base": 172,
      "lv90": 275
    },
    "hpRegen": {
      "base": 102,
      "lv90": 358
    },
    "mpRegen": {
      "base": 59,
      "lv90": 237
    },
    "healPwr": {
      "base": 117,
      "lv90": 293
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
      "HP": 617,
      "ATK": 56,
      "Block": 17,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 709,
      "ATK": 65,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 832,
      "ATK": 76,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 925,
      "ATK": 84,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1624,
      "ATK": 153,
      "DEF": 34,
      "MDEF": 9,
      "Heal Pwr": 27
    },
    "total": {
      "HP": 4707,
      "ATK": 434,
      "Block": 83,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 34,
      "MDEF": 9,
      "Heal Pwr": 27
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Charge": 2
    },
    "gp2": {
      "Block": 2,
      "MP Charge": 2
    },
    "gp3": {
      "Block": 2,
      "MP Charge": 5
    },
    "gp4": {
      "Block": 4,
      "MP Charge": 5
    },
    "gp5": {
      "Block": 4,
      "MP Charge": 7
    },
    "gp6": {
      "Block": 6,
      "MP Charge": 7
    },
    "gp7": {
      "Block": 6,
      "MP Charge": 9
    },
    "gp8": {
      "Block": 8,
      "MP Charge": 9
    },
    "gp9": {
      "Block": 8,
      "MP Charge": 11
    },
    "gp10": {
      "Block": 10,
      "MP Charge": 11
    },
    "total": {
      "Block": 10,
      "MP Charge": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 216,
      "ATK": 20,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 260,
      "ATK": 24,
      "Phys Crit": 7,
      "Block": 17
    },
    "g3": {
      "HP": 303,
      "ATK": 28,
      "Phys Crit": 8,
      "Accuracy": 12
    },
    "g4": {
      "HP": 346,
      "ATK": 31,
      "Phys Crit": 10,
      "Block": 23
    },
    "g5": {
      "HP": 389,
      "ATK": 35,
      "Phys Crit": 11,
      "MP Charge": 5
    },
    "g6": {
      "HP": 433,
      "ATK": 39,
      "Phys Crit": 12,
      "Accuracy": 18
    },
    "g7": {
      "HP": 476,
      "ATK": 43,
      "Phys Crit": 13,
      "Block": 32
    },
    "g8": {
      "HP": 519,
      "ATK": 47,
      "Phys Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 563,
      "ATK": 51,
      "Phys Crit": 16,
      "Block": 38
    },
    "g10": {
      "HP": 606,
      "ATK": 55,
      "Phys Crit": 17,
      "MP Charge": 7
    },
    "total": {
      "HP": 606,
      "ATK": 55,
      "Phys Crit": 17,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Block": 5
    },
    {
      "grade": 2,
      "MP Charge": 1
    },
    {
      "grade": 3,
      "Block": 6
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "Block": 8
    },
    {
      "grade": 6,
      "MP Charge": 2
    },
    {
      "grade": 7,
      "Block": 10
    },
    {
      "grade": 8,
      "MP Charge": 3
    },
    {
      "grade": 9,
      "Block": 12
    },
    {
      "grade": 10,
      "MP Charge": 3
    },
    {
      "grade": 11,
      "Block": 13
    }
  ]
};;;;;;;;
