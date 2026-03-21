// Character data: blessed-beer-girl-destra-esquelda
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "blessed-beer-girl-destra-esquelda",
  "name": "Blessed Beer Girl: Destra & Esquelda",
  "displayName": "Blessed Beer Girl: Destra & Esquelda",
  "baseName": "Destra & Esquelda",
  "title": "Blessed Beer Girl",
  "rarity": "SSR",
  "element": "Mind",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 620,
  "weaponType": "Throw",
  "skillTypes": [
    "Debuff",
    "Disrupt",
    "Heal",
    "MP Recovery"
  ],
  "image": "Destra & Esquelda",
  "introduction": "Back Row、Physical、Support",
  "profile": {
    "height": "163cm、165cm",
    "bust": "95cm (I Cup)",
    "waist": "57cm",
    "hips": "92cm"
  },
  "credits": {
    "illustration": {
      "japanese": "深泥正",
      "romanized": ""
    },
    "voice": {
      "japanese": "榛名れん、杉原茉莉",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2177
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Wake up!",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Stun for 1.5 seconds and Action Speed DOWN for 6 seconds or",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Stun for 1.5 seconds and Action Speed DOWN for 6 seconds or",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Stun for 1.5 seconds and Action Speed DOWN for 6 seconds or",
      "target": "Nearest Enemy",
      "castTime": 1.1,
      "damageScaling": "100% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+6",
      "lvl1": "100% + 150",
      "lvl90": null,
      "effects": [
        "Stun",
        "Action Speed - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
        {
          "name": "Action Speed - Lv4",
          "value": -17,
          "type": "flat",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Hey, blessing of Uranus!",
      "icon": "skill001/skill0011",
      "description": "Inflicts Accuracy -13 DOWN on the 3 nearest enemies for 10 seconds , 3s Charm for or",
      "descriptionLv1": "Inflicts Accuracy -13 DOWN on the 3 nearest enemies for 10 seconds , 3s Charm for or",
      "descriptionLv90": "Inflicts Accuracy -26 DOWN on the 3 nearest enemies for 10 seconds , 3s Charm for or",
      "target": "Nearest Enemy",
      "castTime": 1.3,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Accuracy - Lv5",
        "Charm"
      ],
      "buffEffects": [
        {
          "name": "Accuracy - Lv5",
          "value": -13,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.15
        },
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Everyone, drink up!",
      "icon": "skill001/skill0011",
      "description": "all enemies2s Blind for and Action Speed DOWN(LV 1) for 10 seconds , Restores HP by to all allies or",
      "effect": "1500% + 600",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Wake up!",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Stun for 1.5 seconds and Action Speed DOWN for 6 seconds or",
      "effect": "100% + 150",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
        {
          "name": "Action Speed - Lv4",
          "value": -17,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Hey, blessing of Uranus!",
      "icon": "skill001/skill0011",
      "description": "Inflicts Accuracy -13 DOWN on the 3 nearest enemies for 10 seconds , 3s Charm for or",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Accuracy - Lv5",
          "value": -13,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 4,
      "name": "Everyone, drink up!",
      "icon": "skill001/skill0011",
      "description": "all enemies2s Blind for and Action Speed DOWN(LV 1) for 10 seconds , Restores HP by to all allies or",
      "effect": "1500% + 600",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Everyone, drink up!",
      "icon": "skill001/skill0011",
      "description": "all enemies3s Blind for and Action Speed DOWN(LV 2) for 10 seconds , Restores HP by to all allies or",
      "effect": "1800% + 850",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1006",
      "effect": "()",
      "effectValues": []
    },
    {
      "slot": 2,
      "name": "Max HP +, Banquet, Banquet",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+3444)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Blessed Beer Girl: Destra & Esquelda",
  "id": 2177,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Support",
  "tags": [
    "Debuff",
    "Disrupt",
    "Heal",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 2029,
    "ATK": 215,
    "MATK": 129,
    "DEF": 174,
    "MDEF": 143
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.9"
  },
  "slug": "blessed-beer-girl-destra-esquelda"
};

export const stats = {
  "id": "blessed-beer-girl-destra-esquelda",
  "characterId": 2177,
  "name": "【Blessed Beer Girl】Destra & Esquelda",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Debuff",
    "Disrupt",
    "Heal",
    "MP Recovery"
  ],
  "baseStats": {
    "hp": {
      "base": 2029,
      "lv90": 10146
    },
    "atk": {
      "base": 215,
      "lv90": 1075
    },
    "matk": {
      "base": 129,
      "lv90": 645
    },
    "def": {
      "base": 174,
      "lv90": 348
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
      "base": 50,
      "lv90": 150
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
      "base": 101,
      "lv90": 354
    },
    "mpRegen": {
      "base": 65,
      "lv90": 243
    },
    "healPwr": {
      "base": 117,
      "lv90": 293
    },
    "mpCharge": {
      "base": 63,
      "lv90": 63
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
      "HP": 609,
      "ATK": 65,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 700,
      "ATK": 74,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 822,
      "ATK": 87,
      "Block": 20,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 913,
      "ATK": 97,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1878,
      "ATK": 183,
      "DEF": 54,
      "MDEF": 29,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4922,
      "ATK": 506,
      "Block": 75,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 54,
      "MDEF": 29,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "Heal Pwr": 20
    },
    "gp2": {
      "Heal Pwr": 20,
      "MP Charge": 2
    },
    "gp3": {
      "Heal Pwr": 45,
      "MP Charge": 2
    },
    "gp4": {
      "Heal Pwr": 45,
      "MP Charge": 4
    },
    "gp5": {
      "Heal Pwr": 70,
      "MP Charge": 4
    },
    "gp6": {
      "Heal Pwr": 70,
      "MP Charge": 6
    },
    "gp7": {
      "Heal Pwr": 95,
      "MP Charge": 6
    },
    "gp8": {
      "Heal Pwr": 95,
      "MP Charge": 8
    },
    "gp9": {
      "Heal Pwr": 120,
      "MP Charge": 8
    },
    "gp10": {
      "Heal Pwr": 120,
      "MP Charge": 10
    },
    "total": {
      "Heal Pwr": 120,
      "MP Charge": 10
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 214,
      "ATK": 23,
      "Phys Crit": 9,
      "Accuracy": 9
    },
    "g2": {
      "HP": 256,
      "ATK": 27,
      "Phys Crit": 11,
      "Block": 16
    },
    "g3": {
      "HP": 299,
      "ATK": 32,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 342,
      "ATK": 36,
      "Phys Crit": 14,
      "Block": 21
    },
    "g5": {
      "HP": 385,
      "ATK": 41,
      "Phys Crit": 16,
      "MP Charge": 5
    },
    "g6": {
      "HP": 427,
      "ATK": 45,
      "Phys Crit": 18,
      "Accuracy": 18
    },
    "g7": {
      "HP": 470,
      "ATK": 50,
      "Phys Crit": 19,
      "Block": 29
    },
    "g8": {
      "HP": 513,
      "ATK": 54,
      "Phys Crit": 21,
      "Accuracy": 21
    },
    "g9": {
      "HP": 555,
      "ATK": 59,
      "Phys Crit": 23,
      "Block": 34
    },
    "g10": {
      "HP": 598,
      "ATK": 63,
      "Phys Crit": 25,
      "MP Charge": 8
    },
    "total": {
      "HP": 598,
      "ATK": 63,
      "Phys Crit": 25,
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
      "HP": 183
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "HP": 244
    },
    {
      "grade": 5,
      "MP Charge": 3
    },
    {
      "grade": 6,
      "HP": 304
    },
    {
      "grade": 7,
      "MP Charge": 3
    },
    {
      "grade": 8,
      "HP": 365
    },
    {
      "grade": 9,
      "MP Charge": 4
    },
    {
      "grade": 10,
      "HP": 426
    },
    {
      "grade": 11,
      "MP Charge": 4
    }
  ]
};;;;;;;;
