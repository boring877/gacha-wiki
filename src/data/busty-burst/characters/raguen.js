// Character data: raguen
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "raguen",
  "name": "Raguen",
  "displayName": "Raguen",
  "baseName": "Raguen",
  "title": null,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 200,
  "weaponType": "Slash",
  "skillTypes": [
    "Disrupt",
    "Debuff",
    "Taunt"
  ],
  "image": "Raguen",
  "introduction": "Front Row、Physical、Tank",
  "profile": {
    "height": "168cm",
    "bust": "102cm (J Cup)",
    "waist": "62cm",
    "hips": "95cm"
  },
  "credits": {
    "illustration": {
      "japanese": "誉",
      "romanized": ""
    },
    "voice": {
      "japanese": "榊木春乃",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2093
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Bern Sacred Sword Art - Lightning Slash",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Cleanse for 3 seconds and Block-13 DOWN for 12 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Cleanse for 3 seconds and Block-13 DOWN for 12 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Cleanse for 3 seconds and Block-26 DOWN for 12 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.22,
      "damageScaling": "350% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+20",
      "lvl1": "350% + 200",
      "lvl90": "350% + 186",
      "effects": [
        "Cleanse",
        "Block- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -0.15
        }
      ],
      "duration": 12
    },
    {
      "slot": 3,
      "name": "Mirror Array",
      "icon": "skill001/skill0019",
      "description": "Applies HP Regeneration+150 to self for 5 seconds and Hit-Based Shield(+10 hit(s)) for 10 seconds , 10 Debuff Resistance UP",
      "descriptionLv1": "Applies HP Regeneration+150 to self for 5 seconds and Hit-Based Shield(+10 hit(s)) for 10 seconds , 10 Debuff Resistance UP",
      "descriptionLv90": "Applies HP Regeneration+150 to self for 5 seconds and Hit-Based Shield(+10 hit(s)) for 10 seconds , 10 Debuff Resistance UP",
      "target": "Self",
      "castTime": 1.22,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "HP Regeneration+ Lv3",
        "Hit-Based Shield LvMax",
        "Debuff Resistance Lv4"
      ],
      "buffEffects": [
        {
          "name": "HP Regeneration+ Lv3",
          "value": 5,
          "type": "percent",
          "duration": 5,
          "levelGrowth": 7.0
        },
        {
          "name": "Hit-Based Shield LvMax",
          "value": 35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Debuff Resistance Lv4",
          "value": 0,
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
      "name": "Star Bell - Curse Pitcher",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 1) for 8 seconds and Magic Attack DOWN(LV 1) for 8 seconds , apply to self8",
      "effect": "1000% + 600",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Magic Attack - Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Bern Sacred Sword Art - Lightning Slash",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Cleanse for 3 seconds and Block-13 DOWN for 12 seconds",
      "effect": "350% + 200",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 3,
      "name": "Mirror Array",
      "icon": "skill001/skill0019",
      "description": "Applies HP Regeneration+150 to self for 5 seconds and Hit-Based Shield(+10 hit(s)) for 10 seconds , 10 Debuff Resistance UP",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Lv3",
          "value": 5,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Hit-Based Shield LvMax",
          "value": 35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Debuff Resistance Lv4",
          "value": 0,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Star Bell - Curse Pitcher",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 1) for 8 seconds and Magic Attack DOWN(LV 1) for 8 seconds , apply to self8",
      "effect": "1000% + 600",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Magic Attack - Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Star Bell - Curse Pitcher",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 2) for 9 seconds and Magic Attack DOWN(LV 2) for 9 seconds , apply to self9",
      "effect": "1200% + 800",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv2",
          "value": -25,
          "type": "flat",
          "duration": 9
        },
        {
          "name": "Magic Attack - Ultimate Lv2",
          "value": -25,
          "type": "flat",
          "duration": 9
        },
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 9
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Debuff Resistance +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+3444)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Block+, Max HP +",
      "icon": "skill001/skill1003",
      "effect": "Block+ (+10), Max HP + (+3444)",
      "effectValues": [
        {
          "name": "Block+",
          "value": 10,
          "type": "flat"
        },
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Raguen",
  "id": 2093,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Tank",
  "tags": [
    "Disrupt",
    "Debuff",
    "Taunt"
  ],
  "baseStats": {
    "HP": 2105,
    "ATK": 269,
    "MATK": 161,
    "DEF": 258,
    "MDEF": 258
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Skill3 → Basic → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Skill3 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.82"
  },
  "slug": "raguen"
};

export const stats = {
  "id": "raguen",
  "characterId": 2093,
  "name": "Raguen",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Disrupt",
    "Debuff",
    "Taunt"
  ],
  "baseStats": {
    "hp": {
      "base": 2105,
      "lv90": 10525
    },
    "atk": {
      "base": 269,
      "lv90": 1345
    },
    "matk": {
      "base": 161,
      "lv90": 806
    },
    "def": {
      "base": 258,
      "lv90": 516
    },
    "mdef": {
      "base": 258,
      "lv90": 516
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 60,
      "lv90": 180
    },
    "physCrit": {
      "base": 78,
      "lv90": 125
    },
    "magicCrit": {
      "base": 47,
      "lv90": 75
    },
    "hpRegen": {
      "base": 105,
      "lv90": 368
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
      "base": 53,
      "lv90": 53
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
      "HP": 632,
      "ATK": 81,
      "Block": 18,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 726,
      "ATK": 93,
      "Accuracy": 13,
      "Block": 21
    },
    "lb3": {
      "HP": 853,
      "ATK": 109,
      "Block": 24,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 947,
      "ATK": 121,
      "Accuracy": 17,
      "Block": 27
    },
    "lb5": {
      "HP": 2049,
      "ATK": 229,
      "DEF": 83,
      "MDEF": 52,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 5207,
      "ATK": 633,
      "Block": 90,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 83,
      "MDEF": 52,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 300
    },
    "gp2": {
      "HP": 300,
      "Block": 3
    },
    "gp3": {
      "HP": 750,
      "Block": 3
    },
    "gp4": {
      "HP": 750,
      "Block": 7
    },
    "gp5": {
      "HP": 1200,
      "Block": 7
    },
    "gp6": {
      "HP": 1200,
      "Block": 10
    },
    "gp7": {
      "HP": 1650,
      "Block": 10
    },
    "gp8": {
      "HP": 1650,
      "Block": 13
    },
    "gp9": {
      "HP": 2100,
      "Block": 13
    },
    "gp10": {
      "HP": 2100,
      "Block": 16
    },
    "total": {
      "HP": 2100,
      "Block": 16
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 222,
      "ATK": 28,
      "Phys Crit": 2,
      "Accuracy": 9
    },
    "g2": {
      "HP": 266,
      "ATK": 34,
      "Phys Crit": 2,
      "Block": 19
    },
    "g3": {
      "HP": 310,
      "ATK": 40,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 355,
      "ATK": 45,
      "Phys Crit": 3,
      "Block": 25
    },
    "g5": {
      "HP": 399,
      "ATK": 51,
      "Phys Crit": 3,
      "MP Charge": 5
    },
    "g6": {
      "HP": 443,
      "ATK": 57,
      "Phys Crit": 3,
      "Accuracy": 18
    },
    "g7": {
      "HP": 488,
      "ATK": 62,
      "Phys Crit": 4,
      "Block": 35
    },
    "g8": {
      "HP": 532,
      "ATK": 68,
      "Phys Crit": 4,
      "Accuracy": 21
    },
    "g9": {
      "HP": 576,
      "ATK": 74,
      "Phys Crit": 4,
      "Block": 41
    },
    "g10": {
      "HP": 620,
      "ATK": 79,
      "Phys Crit": 5,
      "MP Charge": 7
    },
    "total": {
      "HP": 620,
      "ATK": 79,
      "Phys Crit": 5,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 288
    },
    {
      "grade": 2,
      "Block": 5
    },
    {
      "grade": 3,
      "HP": 404
    },
    {
      "grade": 4,
      "Block": 7
    },
    {
      "grade": 5,
      "HP": 519
    },
    {
      "grade": 6,
      "Block": 9
    },
    {
      "grade": 7,
      "HP": 634
    },
    {
      "grade": 8,
      "Block": 11
    },
    {
      "grade": 9,
      "HP": 749
    },
    {
      "grade": 10,
      "Block": 13
    },
    {
      "grade": 11,
      "HP": 786
    }
  ]
};;;;;;;;
