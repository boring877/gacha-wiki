// Character data: underboob-cheerleader-henrietti
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "underboob-cheerleader-henrietti",
  "name": "Underboob Cheerleader: Henrietti",
  "displayName": "Underboob Cheerleader: Henrietti",
  "baseName": "Henrietti",
  "title": "Underboob Cheerleader",
  "rarity": "SR",
  "element": "Mind",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 350,
  "weaponType": "Throw",
  "skillTypes": [
    "Heal",
    "Buff"
  ],
  "image": "Henrietti",
  "introduction": "Middle Row、Physical、Support",
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
  "characterId": 2129
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Let’s go STARS!",
      "icon": "skill001/skill0021",
      "description": "lowest HP allyrestore HP and inflicts Action Speed UP for 10 seconds",
      "descriptionLv1": "lowest HP allyrestore HP and inflicts Action Speed UP for 10 seconds",
      "descriptionLv90": "lowest HP allyrestore HP and inflicts Action Speed UP for 10 seconds",
      "target": "Lowest HP Ally",
      "castTime": 1.3,
      "damageScaling": "2500% ATK",
      "baseDamage": "+700",
      "levelGrowth": "+60",
      "lvl1": "2500% + 700",
      "lvl90": null,
      "effects": [
        "Action Speed + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Everyone, do your best~!",
      "icon": "skill001/skill0021",
      "description": "restore HP to frontmost allyHP and inflicts Healing Shield (300) for 20 seconds",
      "descriptionLv1": "restore HP to frontmost allyHP and inflicts Healing Shield (300) for 20 seconds",
      "descriptionLv90": "restore HP to frontmost allyHP and inflicts Healing Shield (300) for 20 seconds",
      "target": "Frontmost Ally",
      "castTime": 1.3,
      "damageScaling": "3000% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+60",
      "lvl1": "3000% + 500",
      "lvl90": null,
      "effects": [
        "Healing Shield Lv5"
      ],
      "buffEffects": [
        {
          "name": "Healing Shield Lv5",
          "value": 300,
          "type": "percent",
          "duration": 20
        }
      ],
      "duration": 20
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "You’ve got this!",
      "icon": "skill001/skill0022_1",
      "description": "Applies HP RegenerationUP(LV 1) to all allies for 10 seconds and Hit-Based Damage UP(LV 1) for 20 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv1",
          "value": 5,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Hit-Based Damage + Ultimate Lv1",
          "value": 30,
          "type": "percent",
          "duration": 20
        }
      ]
    },
    {
      "rank": 2,
      "name": "Let’s go STARS!",
      "icon": "skill001/skill0021",
      "description": "lowest HP allyrestore HP and inflicts Action Speed UP for 10 seconds",
      "effect": "2500% + 700",
      "buffEffects": [
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Everyone, do your best~!",
      "icon": "skill001/skill0021",
      "description": "restore HP to frontmost allyHP and inflicts Healing Shield (300) for 20 seconds",
      "effect": "3000% + 500",
      "buffEffects": [
        {
          "name": "Healing Shield Lv5",
          "value": 300,
          "type": "percent",
          "duration": 20
        }
      ]
    },
    {
      "rank": 4,
      "name": "You’ve got this!",
      "icon": "skill001/skill0022_1",
      "description": "Applies HP RegenerationUP(LV 1) to all allies for 10 seconds and Hit-Based Damage UP(LV 1) for 20 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv1",
          "value": 5,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Hit-Based Damage + Ultimate Lv1",
          "value": 30,
          "type": "percent",
          "duration": 20
        }
      ]
    },
    {
      "rank": 5,
      "name": "You’ve got this!",
      "icon": "skill001/skill0022_2",
      "description": "Applies HP RegenerationUP(LV 2) to all allies for 10 seconds and Hit-Based Damage UP(LV 2) for 20 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Ultimate Lv2",
          "value": 6,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Hit-Based Damage + Ultimate Lv2",
          "value": 35,
          "type": "percent",
          "duration": 20
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Healing Amount +",
      "icon": "skill001/skill1004",
      "effect": "Healing Amount + (+15%)",
      "effectValues": [
        {
          "name": "Healing Amount +",
          "value": 15,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Healing Received +, Block+",
      "icon": "skill001/skill1008",
      "effect": "Healing Received + (+20%), Block+ (+5)",
      "effectValues": [
        {
          "name": "Healing Received +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Block+",
          "value": 5,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Underboob Cheerleader: Henrietti",
  "id": 2129,
  "rarity": "SR",
  "element": "Mind",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff"
  ],
  "baseStats": {
    "HP": 2672,
    "ATK": 196,
    "MATK": 117,
    "DEF": 18,
    "MDEF": 7
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.85"
  },
  "slug": "underboob-cheerleader-henrietti"
};

export const stats = {
  "id": "underboob-cheerleader-henrietti",
  "characterId": 2129,
  "name": "【Underboob Cheerleader】Henrietti",
  "rarity": "SR",
  "element": "想",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff"
  ],
  "baseStats": {
    "hp": {
      "base": 2672,
      "lv90": 13360
    },
    "atk": {
      "base": 196,
      "lv90": 981
    },
    "matk": {
      "base": 117,
      "lv90": 588
    },
    "def": {
      "base": 18,
      "lv90": 36
    },
    "mdef": {
      "base": 7,
      "lv90": 14
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
      "base": 399,
      "lv90": 638
    },
    "magicCrit": {
      "base": 239,
      "lv90": 382
    },
    "hpRegen": {
      "base": 133,
      "lv90": 467
    },
    "mpRegen": {
      "base": 56,
      "lv90": 225
    },
    "healPwr": {
      "base": 100,
      "lv90": 250
    },
    "mpCharge": {
      "base": 58,
      "lv90": 58
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
      "HP": 802,
      "ATK": 59,
      "Block": 17,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 922,
      "ATK": 68,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 1082,
      "ATK": 80,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1202,
      "ATK": 88,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1959,
      "ATK": 144,
      "DEF": 4,
      "MDEF": 1,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 5967,
      "ATK": 439,
      "Block": 83,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 4,
      "MDEF": 1,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "Heal Pwr": 10
    },
    "gp2": {
      "Heal Pwr": 10,
      "MP Charge": 2
    },
    "gp3": {
      "Heal Pwr": 25,
      "MP Charge": 2
    },
    "gp4": {
      "Heal Pwr": 25,
      "MP Charge": 4
    },
    "gp5": {
      "Heal Pwr": 40,
      "MP Charge": 4
    },
    "gp6": {
      "Heal Pwr": 40,
      "MP Charge": 6
    },
    "gp7": {
      "Heal Pwr": 55,
      "MP Charge": 6
    },
    "gp8": {
      "Heal Pwr": 55,
      "MP Charge": 8
    },
    "gp9": {
      "Heal Pwr": 70,
      "MP Charge": 8
    },
    "gp10": {
      "Heal Pwr": 70,
      "MP Charge": 10
    },
    "total": {
      "Heal Pwr": 70,
      "MP Charge": 10
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 281,
      "ATK": 21,
      "Phys Crit": 8,
      "Accuracy": 9
    },
    "g2": {
      "HP": 338,
      "ATK": 25,
      "Phys Crit": 10,
      "Block": 17
    },
    "g3": {
      "HP": 394,
      "ATK": 29,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 450,
      "ATK": 33,
      "Phys Crit": 13,
      "Block": 23
    },
    "g5": {
      "HP": 506,
      "ATK": 37,
      "Phys Crit": 15,
      "MP Charge": 5
    },
    "g6": {
      "HP": 563,
      "ATK": 41,
      "Phys Crit": 17,
      "Accuracy": 18
    },
    "g7": {
      "HP": 619,
      "ATK": 45,
      "Phys Crit": 19,
      "Block": 32
    },
    "g8": {
      "HP": 675,
      "ATK": 50,
      "Phys Crit": 20,
      "Accuracy": 21
    },
    "g9": {
      "HP": 731,
      "ATK": 54,
      "Phys Crit": 22,
      "Block": 38
    },
    "g10": {
      "HP": 788,
      "ATK": 58,
      "Phys Crit": 24,
      "MP Charge": 8
    },
    "total": {
      "HP": 788,
      "ATK": 58,
      "Phys Crit": 24,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Heal Pwr": 4
    },
    {
      "grade": 2,
      "MP Charge": 1
    },
    {
      "grade": 3,
      "Heal Pwr": 6
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "Heal Pwr": 8
    },
    {
      "grade": 6,
      "MP Charge": 2
    },
    {
      "grade": 7,
      "Heal Pwr": 9
    },
    {
      "grade": 8,
      "MP Charge": 3
    },
    {
      "grade": 9,
      "Heal Pwr": 11
    },
    {
      "grade": 10,
      "MP Charge": 3
    },
    {
      "grade": 11,
      "Heal Pwr": 12
    }
  ]
};;;;;;;;
