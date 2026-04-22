// Character data: irina
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "irina",
  "name": "Irina",
  "displayName": "Irina",
  "baseName": "Irina",
  "title": null,
  "rarity": "SR",
  "element": "Light",
  "role": "Support",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Slow",
  "range": 520,
  "weaponType": "Ranged",
  "skillTypes": [
    "Debuff",
    "Heal",
    "Cleanse"
  ],
  "image": "Irina",
  "introduction": "Back Row、Magical、Support",
  "profile": {
    "height": "168cm",
    "bust": "103cm (K Cup)",
    "waist": "63cm",
    "hips": "94cm"
  },
  "credits": {
    "illustration": {
      "japanese": "春夏冬エ",
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
  "characterId": 2014
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Punishment for the servants of the demon",
      "icon": "skill001/skill0008",
      "description": "Deals magic damage to the enemy with the highest Physical ATK and inflicts Physical Attack -11%-25 DOWN for 10 seconds",
      "descriptionLv1": "Deals magic damage to the enemy with the highest Physical ATK and inflicts Physical Attack -11%-25 DOWN for 10 seconds",
      "descriptionLv90": "Deals magic damage to the enemy with the highest Physical ATK and inflicts Physical Attack -11%-205 DOWN for 10 seconds",
      "target": "Highest Phys ATK Enemy",
      "castTime": 1.58,
      "damageScaling": "210% ATK",
      "baseDamage": "+110",
      "levelGrowth": "+20",
      "lvl1": "210% + 110",
      "lvl90": "210% + -68",
      "effects": [
        "Physical Attack - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv4",
          "value": -25,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -2.0
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Blessing to the brave",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to the ally with the lowest HP and inflicts HP Regeneration 5%+150 for 3 seconds",
      "descriptionLv1": "Restores HP by to the ally with the lowest HP and inflicts HP Regeneration 5%+150 for 3 seconds",
      "descriptionLv90": "Restores HP by to the ally with the lowest HP and inflicts HP Regeneration 5%+150 for 3 seconds",
      "target": "Lowest HP Ally",
      "castTime": 1.58,
      "damageScaling": "3000% ATK",
      "baseDamage": "+852",
      "levelGrowth": "+60",
      "lvl1": "3000% + 852",
      "lvl90": "3000% + 1475",
      "effects": [
        "HP Regeneration+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "HP Regeneration+ Lv3",
          "value": 5,
          "type": "percent",
          "duration": 3,
          "levelGrowth": 7.0
        }
      ],
      "duration": 3
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "A helping hand to the devout",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to all allies and inflicts Debuff Resistance 30%UP for 6 seconds",
      "effect": "2600% + 788",
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 0,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 2,
      "name": "A helping hand to the devout",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by to all allies and inflicts Debuff Resistance 30%UP for 6 seconds",
      "effect": "3000% + 842",
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 0,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "A helping hand to the devout",
      "icon": "skill001/skill0022_3",
      "description": "Restores HP by to all allies and inflicts Debuff Resistance 30%UP for 6 seconds",
      "effect": "3250% + 910",
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 0,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 4,
      "name": "A helping hand to the devout",
      "icon": "skill001/skill0022_4",
      "description": "Restores HP by to all allies and inflicts Debuff Resistance 30%UP for 6 seconds",
      "effect": "3500% + 962",
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 0,
          "type": "percent",
          "duration": 6
        }
      ]
    },
    {
      "rank": 5,
      "name": "A helping hand to the devout",
      "icon": "skill001/skill0022_5",
      "description": "Restores HP by to all allies and inflicts Debuff Resistance 30%UP for 6 seconds",
      "effect": "3640% + 1008",
      "buffEffects": [
        {
          "name": "Debuff Resistance Lv2",
          "value": 0,
          "type": "percent",
          "duration": 6
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
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1006",
      "effect": "Physical Defense + (+70), Magic Defense+ (+70)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 70,
          "type": "flat"
        },
        {
          "name": "Magic Defense+",
          "value": 70,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Irina",
  "id": 2014,
  "rarity": "SR",
  "element": "Light",
  "role": "Support",
  "tags": [
    "Debuff",
    "Heal",
    "Cleanse"
  ],
  "baseStats": {
    "HP": 2001,
    "ATK": 156,
    "MATK": 259,
    "DEF": 83,
    "MDEF": 208
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Basic → Skill3",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "irina"
};

export const stats = {
  "id": "irina",
  "characterId": 2014,
  "name": "Irina",
  "rarity": "SR",
  "element": "聖",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Debuff",
    "Heal",
    "Cleanse"
  ],
  "baseStats": {
    "hp": {
      "base": 2001,
      "lv90": 10005
    },
    "atk": {
      "base": 156,
      "lv90": 780
    },
    "matk": {
      "base": 259,
      "lv90": 1298
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
      "base": 114,
      "lv90": 182
    },
    "magicCrit": {
      "base": 191,
      "lv90": 305
    },
    "hpRegen": {
      "base": 100,
      "lv90": 350
    },
    "mpRegen": {
      "base": 56,
      "lv90": 225
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
      "HP": 600,
      "MATK": 78,
      "Block": 14,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 690,
      "MATK": 90,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 810,
      "MATK": 105,
      "Block": 18,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 901,
      "MATK": 117,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1581,
      "MATK": 225,
      "DEF": 15,
      "MDEF": 56,
      "Heal Pwr": 27
    },
    "total": {
      "HP": 4582,
      "MATK": 615,
      "Block": 68,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 15,
      "MDEF": 56,
      "Heal Pwr": 27
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Charge": 2
    },
    "gp2": {
      "Heal Pwr": 10,
      "MP Charge": 2
    },
    "gp3": {
      "Heal Pwr": 10,
      "MP Charge": 5
    },
    "gp4": {
      "Heal Pwr": 25,
      "MP Charge": 5
    },
    "gp5": {
      "Heal Pwr": 25,
      "MP Charge": 7
    },
    "gp6": {
      "Heal Pwr": 40,
      "MP Charge": 7
    },
    "gp7": {
      "Heal Pwr": 40,
      "MP Charge": 9
    },
    "gp8": {
      "Heal Pwr": 55,
      "MP Charge": 9
    },
    "gp9": {
      "Heal Pwr": 55,
      "MP Charge": 11
    },
    "gp10": {
      "Heal Pwr": 70,
      "MP Charge": 11
    },
    "total": {
      "Heal Pwr": 70,
      "MP Charge": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 211,
      "MATK": 27,
      "MDEF": 9,
      "Magic Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 253,
      "MATK": 33,
      "MDEF": 11,
      "Magic Crit": 5,
      "Block": 14
    },
    "g3": {
      "HP": 295,
      "MATK": 38,
      "MDEF": 13,
      "Magic Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 337,
      "MATK": 44,
      "MDEF": 15,
      "Magic Crit": 6,
      "Block": 19
    },
    "g5": {
      "HP": 379,
      "MATK": 49,
      "MDEF": 17,
      "Magic Crit": 7,
      "MP Charge": 5
    },
    "g6": {
      "HP": 421,
      "MATK": 55,
      "MDEF": 19,
      "Magic Crit": 8,
      "Accuracy": 18
    },
    "g7": {
      "HP": 463,
      "MATK": 60,
      "MDEF": 21,
      "Magic Crit": 9,
      "Block": 26
    },
    "g8": {
      "HP": 506,
      "MATK": 66,
      "MDEF": 23,
      "Magic Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 548,
      "MATK": 71,
      "MDEF": 24,
      "Magic Crit": 10,
      "Block": 31
    },
    "g10": {
      "HP": 590,
      "MATK": 77,
      "MDEF": 26,
      "Magic Crit": 11,
      "MP Charge": 8
    },
    "total": {
      "HP": 590,
      "MATK": 77,
      "MDEF": 26,
      "Magic Crit": 11,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 22
    },
    {
      "grade": 2,
      "MP Regen": 5
    },
    {
      "grade": 3,
      "MATK": 30
    },
    {
      "grade": 4,
      "MP Regen": 7
    },
    {
      "grade": 5,
      "MATK": 39
    },
    {
      "grade": 6,
      "MP Regen": 8
    },
    {
      "grade": 7,
      "MATK": 48
    },
    {
      "grade": 8,
      "MP Regen": 10
    },
    {
      "grade": 9,
      "MATK": 56
    },
    {
      "grade": 10,
      "MP Regen": 12
    },
    {
      "grade": 11,
      "MATK": 62
    }
  ]
};;;;;;;;
