// Character data: emelaria
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "emelaria",
  "name": "Emelaria",
  "displayName": "Emelaria",
  "baseName": "Emelaria",
  "title": null,
  "rarity": "SR",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slow",
  "range": 360,
  "weaponType": "Ranged",
  "skillTypes": [
    "Disrupt"
  ],
  "image": "Emelaria",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "160cm",
    "bust": "96cm (H Cup)",
    "waist": "61cm",
    "hips": "85cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "ももぞの薫",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2006
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Looks like your luck isn’t so good ",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the farthest enemy and inflicts Confusion for 6 seconds",
      "descriptionLv1": "Deals magic damage to the farthest enemy and inflicts Confusion for 6 seconds",
      "descriptionLv90": "Deals magic damage to the farthest enemy and inflicts Confusion for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "180% ATK",
      "baseDamage": "+110",
      "levelGrowth": "+20",
      "lvl1": "180% + 110",
      "lvl90": null,
      "effects": [
        "Confusion"
      ],
      "buffEffects": [
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Seems you need a little punishment ",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the farthest enemy and inflicts Sleep for 5 seconds",
      "descriptionLv1": "Deals magic damage to the farthest enemy and inflicts Sleep for 5 seconds",
      "descriptionLv90": "Deals magic damage to the farthest enemy and inflicts Sleep for 5 seconds",
      "target": "Back Enemy",
      "castTime": 1.58,
      "damageScaling": "150% ATK",
      "baseDamage": "+120",
      "levelGrowth": "+20",
      "lvl1": "150% + 120",
      "lvl90": null,
      "effects": [
        "Sleep"
      ],
      "buffEffects": [
        {
          "name": "Sleep",
          "value": 0,
          "type": "unknown",
          "duration": 5
        }
      ],
      "duration": 5
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Magic of Light and Shadow",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to all enemies and inflicts Fear Lv 1 for 4 seconds",
      "effect": "409% + 297",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv1",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ]
    },
    {
      "rank": 2,
      "name": "Looks like your luck isn’t so good ",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the farthest enemy and inflicts Confusion for 6 seconds",
      "effect": "180% + 110",
      "buffEffects": [
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Seems you need a little punishment ",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the farthest enemy and inflicts Sleep for 5 seconds",
      "effect": "150% + 120",
      "buffEffects": [
        {
          "name": "Sleep",
          "value": 0,
          "type": "unknown",
          "duration": 5
        }
      ]
    },
    {
      "rank": 4,
      "name": "Magic of Light and Shadow",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to all enemies and inflicts Fear Lv 1 for 4 seconds",
      "effect": "409% + 297",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv1",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ]
    },
    {
      "rank": 5,
      "name": "Magic of Light and Shadow",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to all enemies and inflicts Fear Lv 2 for 4 seconds",
      "effect": "574% + 365",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv2",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1002",
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
    },
    {
      "slot": 2,
      "name": "Max HP +, Magic Attack +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+1447), Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 1447,
          "type": "flat"
        },
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Emelaria",
  "id": 2006,
  "rarity": "SR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2707,
    "ATK": 156,
    "MATK": 259,
    "DEF": 25,
    "MDEF": 65
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "emelaria"
};

export const stats = {
  "id": "emelaria",
  "characterId": 2006,
  "name": "Emelaria",
  "rarity": "SR",
  "element": "魔",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2707,
      "lv90": 13537
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
      "base": 25,
      "lv90": 50
    },
    "mdef": {
      "base": 65,
      "lv90": 130
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
      "base": 135,
      "lv90": 473
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
      "base": 98,
      "lv90": 98
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
      "HP": 812,
      "MATK": 78,
      "Block": 14,
      "MP Charge": 9
    },
    "lb2": {
      "HP": 934,
      "MATK": 90,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 1097,
      "MATK": 105,
      "Block": 18,
      "MP Charge": 12
    },
    "lb4": {
      "HP": 1218,
      "MATK": 117,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 2392,
      "MATK": 209,
      "DEF": 5,
      "MDEF": 18,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 6453,
      "MATK": 599,
      "Block": 68,
      "MP Charge": 21,
      "Accuracy": 30,
      "DEF": 5,
      "MDEF": 18,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Charge": 2
    },
    "gp2": {
      "MATK": 30,
      "MP Charge": 2
    },
    "gp3": {
      "MATK": 30,
      "MP Charge": 5
    },
    "gp4": {
      "MATK": 90,
      "MP Charge": 5
    },
    "gp5": {
      "MATK": 90,
      "MP Charge": 7
    },
    "gp6": {
      "MATK": 130,
      "MP Charge": 7
    },
    "gp7": {
      "MATK": 130,
      "MP Charge": 9
    },
    "gp8": {
      "MATK": 170,
      "MP Charge": 9
    },
    "gp9": {
      "MATK": 170,
      "MP Charge": 11
    },
    "gp10": {
      "MATK": 210,
      "MP Charge": 11
    },
    "total": {
      "MATK": 210,
      "MP Charge": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 285,
      "MATK": 27,
      "MDEF": 3,
      "Magic Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 342,
      "MATK": 33,
      "MDEF": 4,
      "Magic Crit": 5,
      "Block": 14
    },
    "g3": {
      "HP": 399,
      "MATK": 38,
      "MDEF": 4,
      "Magic Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 456,
      "MATK": 44,
      "MDEF": 5,
      "Magic Crit": 6,
      "Block": 19
    },
    "g5": {
      "HP": 513,
      "MATK": 49,
      "MDEF": 5,
      "Magic Crit": 7,
      "MP Charge": 8
    },
    "g6": {
      "HP": 570,
      "MATK": 55,
      "MDEF": 6,
      "Magic Crit": 8,
      "Accuracy": 18
    },
    "g7": {
      "HP": 627,
      "MATK": 60,
      "MDEF": 6,
      "Magic Crit": 9,
      "Block": 26
    },
    "g8": {
      "HP": 684,
      "MATK": 66,
      "MDEF": 7,
      "Magic Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 741,
      "MATK": 71,
      "MDEF": 8,
      "Magic Crit": 10,
      "Block": 31
    },
    "g10": {
      "HP": 798,
      "MATK": 77,
      "MDEF": 8,
      "Magic Crit": 11,
      "MP Charge": 13
    },
    "total": {
      "HP": 798,
      "MATK": 77,
      "MDEF": 8,
      "Magic Crit": 11,
      "MP Charge": 13
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Charge": 2
    },
    {
      "grade": 2,
      "HP": 244
    },
    {
      "grade": 3,
      "MP Charge": 3
    },
    {
      "grade": 4,
      "HP": 325
    },
    {
      "grade": 5,
      "MP Charge": 4
    },
    {
      "grade": 6,
      "HP": 406
    },
    {
      "grade": 7,
      "MP Charge": 5
    },
    {
      "grade": 8,
      "HP": 487
    },
    {
      "grade": 9,
      "MP Charge": 6
    },
    {
      "grade": 10,
      "HP": 569
    },
    {
      "grade": 11,
      "MP Charge": 6
    }
  ]
};;;;;;;;
