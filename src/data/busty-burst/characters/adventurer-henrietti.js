// Character data: adventurer-henrietti
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "adventurer-henrietti",
  "name": "Adventurer: Henrietti",
  "displayName": "Adventurer: Henrietti",
  "baseName": "Henrietti",
  "title": "Adventurer",
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slow",
  "range": 380,
  "weaponType": "Pierce",
  "skillTypes": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "image": "Henrietti",
  "introduction": "Middle Row、Physical、Attacker",
  "profile": {
    "height": "153cm",
    "bust": "97cm (J Cup)",
    "waist": "57cm",
    "hips": "82cm"
  },
  "credits": {
    "illustration": {
      "japanese": "只野あきら",
      "romanized": ""
    },
    "voice": {
      "japanese": "梅宮ここ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2197
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Ah~ Ahh~!",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the farthest enemy and inflicts Stun for 3 seconds , 5s Blind for, 8 Physical Defense -23%-50 DOWN",
      "descriptionLv1": "Deals physical damage to the farthest enemy and inflicts Stun for 3 seconds , 5s Blind for, 8 Physical Defense -23%-50 DOWN",
      "descriptionLv90": "Deals physical damage to the farthest enemy and inflicts Stun for 3 seconds , 5s Blind for, 8 Physical Defense -23%-320 DOWN",
      "target": "Back Enemy",
      "castTime": 1.4,
      "damageScaling": "350% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "350% + 500",
      "lvl90": "350% + 233",
      "effects": [
        "Stun",
        "Blind",
        "Physical Defense - Lv5"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Physical Defense - Lv5",
          "value": -50,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -3.0
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "You'll get burned!",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy, inflict 2s and Burn(HP --150 per second) for 20 seconds , 8 Fire Type Damage Taken 16%UP",
      "descriptionLv1": "Deals physical damage to the nearest enemy, inflict 2s and Burn(HP --150 per second) for 20 seconds , 8 Fire Type Damage Taken 16%UP",
      "descriptionLv90": "Deals physical damage to the nearest enemy, inflict 2s and Burn(HP --1500 per second) for 20 seconds , 8 Fire Type Damage Taken 16%UP",
      "target": "Nearest Enemy",
      "castTime": 1.3,
      "damageScaling": "280% ATK",
      "baseDamage": "+250",
      "levelGrowth": "+20",
      "lvl1": "280% + 250",
      "lvl90": null,
      "effects": [
        "Confusion",
        "Burn Lv5",
        "Fire Type Damage Taken + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Burn Lv5",
          "value": -150,
          "type": "flat",
          "duration": 20,
          "levelGrowth": -15.0
        },
        {
          "name": "Fire Type Damage Taken + Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        }
      ],
      "duration": 20
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "I'll leave the rest to you!!",
      "icon": "skill001/skill0012_1",
      "description": "to all enemiesphysical damage and inflicts Stun for 2 seconds , 3s Curse for, 10 Action Speed DOWN(LV 1)",
      "effect": "600% + 800",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 3
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
      "name": "I'll leave the rest to you!!",
      "icon": "skill001/skill0012_2",
      "description": "to all enemiesphysical damage and inflicts Stun for 3 seconds , 4s Curse for, 10 Action Speed DOWN(LV 2)",
      "effect": "840% + 1100",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "I'll leave the rest to you!!",
      "icon": "skill001/skill0012_3",
      "description": "to all enemiesphysical damage and inflicts Stun for 3 seconds , 4s Curse for, 10 Action Speed DOWN(LV 3)",
      "effect": "1019% + 1350",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "I'll leave the rest to you!!",
      "icon": "skill001/skill0012_4",
      "description": "to all enemiesphysical damage and inflicts Stun for 4 seconds , 5s Curse for, 10 Action Speed DOWN(LV 4)",
      "effect": "1140% + 1600",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "I'll leave the rest to you!!",
      "icon": "skill001/skill0012_5",
      "description": "to all enemiesphysical damage and inflicts Stun for 4 seconds , 5s Curse for, 10 Action Speed DOWN(LV 5)",
      "effect": "1200% + 1800",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -20,
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
      "effect": "Action Speed + (+15), Debuff Resistance+ (+30%)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "flat"
        },
        {
          "name": "Debuff Resistance+",
          "value": 30,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
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
  "name": "Adventurer: Henrietti",
  "id": 2197,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 299,
    "MATK": 179,
    "DEF": 57,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.12"
  },
  "slug": "adventurer-henrietti"
};

export const stats = {
  "id": "adventurer-henrietti",
  "characterId": 2197,
  "name": "【Adventurer】Henrietti",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "hp": {
      "base": 2092,
      "lv90": 10460
    },
    "atk": {
      "base": 299,
      "lv90": 1495
    },
    "matk": {
      "base": 179,
      "lv90": 896
    },
    "def": {
      "base": 57,
      "lv90": 114
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
      "base": 207,
      "lv90": 331
    },
    "magicCrit": {
      "base": 124,
      "lv90": 198
    },
    "hpRegen": {
      "base": 104,
      "lv90": 365
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
      "base": 67,
      "lv90": 67
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
      "HP": 628,
      "ATK": 90,
      "Block": 15,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 722,
      "ATK": 103,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 847,
      "ATK": 121,
      "Block": 20,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 941,
      "ATK": 135,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1779,
      "ATK": 277,
      "DEF": 19,
      "MDEF": 12,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4917,
      "ATK": 726,
      "Block": 75,
      "MP Charge": 16,
      "Accuracy": 30,
      "DEF": 19,
      "MDEF": 12,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Charge": 2
    },
    "gp2": {
      "Phys Crit": 10,
      "MP Charge": 2
    },
    "gp3": {
      "Phys Crit": 10,
      "MP Charge": 4
    },
    "gp4": {
      "Phys Crit": 30,
      "MP Charge": 4
    },
    "gp5": {
      "Phys Crit": 30,
      "MP Charge": 6
    },
    "gp6": {
      "Phys Crit": 50,
      "MP Charge": 6
    },
    "gp7": {
      "Phys Crit": 50,
      "MP Charge": 8
    },
    "gp8": {
      "Phys Crit": 70,
      "MP Charge": 8
    },
    "gp9": {
      "Phys Crit": 70,
      "MP Charge": 10
    },
    "gp10": {
      "Phys Crit": 90,
      "MP Charge": 10
    },
    "total": {
      "Phys Crit": 90,
      "MP Charge": 10
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 220,
      "ATK": 31,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 264,
      "ATK": 38,
      "Phys Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 308,
      "ATK": 44,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 352,
      "ATK": 50,
      "Phys Crit": 7,
      "Block": 21
    },
    "g5": {
      "HP": 396,
      "ATK": 57,
      "Phys Crit": 8,
      "MP Charge": 5
    },
    "g6": {
      "HP": 440,
      "ATK": 63,
      "Phys Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 484,
      "ATK": 69,
      "Phys Crit": 10,
      "Block": 29
    },
    "g8": {
      "HP": 529,
      "ATK": 76,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 573,
      "ATK": 82,
      "Phys Crit": 11,
      "Block": 34
    },
    "g10": {
      "HP": 617,
      "ATK": 88,
      "Phys Crit": 12,
      "MP Charge": 8
    },
    "total": {
      "HP": 617,
      "ATK": 88,
      "Phys Crit": 12,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 25
    },
    {
      "grade": 2,
      "Phys Crit": 7
    },
    {
      "grade": 3,
      "ATK": 35
    },
    {
      "grade": 4,
      "Phys Crit": 10
    },
    {
      "grade": 5,
      "ATK": 45
    },
    {
      "grade": 6,
      "Phys Crit": 12
    },
    {
      "grade": 7,
      "ATK": 55
    },
    {
      "grade": 8,
      "Phys Crit": 15
    },
    {
      "grade": 9,
      "ATK": 65
    },
    {
      "grade": 10,
      "Phys Crit": 17
    },
    {
      "grade": 11,
      "ATK": 72
    }
  ]
};;;;;;;
