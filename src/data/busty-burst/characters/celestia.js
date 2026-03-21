// Character data: celestia
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "celestia",
  "name": "Celestia",
  "displayName": "Celestia",
  "baseName": "Celestia",
  "title": null,
  "rarity": "SR",
  "element": "Wind",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slow",
  "range": 400,
  "weaponType": "Pierce",
  "skillTypes": [
    "Heal",
    "Debuff",
    "Disrupt"
  ],
  "image": "Celestia",
  "introduction": "Middle Row、Physical、Support",
  "profile": {
    "height": "164cm",
    "bust": "109cm (M Cup)",
    "waist": "62cm",
    "hips": "96cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "御苑生メイ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2038
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Protected by “Thorns”",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -30 DOWN for 5 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -30 DOWN for 5 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -210 DOWN for 5 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "240% ATK",
      "baseDamage": "+110",
      "levelGrowth": "+20",
      "lvl1": "240% + 110",
      "lvl90": "240% + -68",
      "effects": [
        "Physical Defense - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 5,
          "levelGrowth": -2.0
        }
      ],
      "duration": 5
    },
    {
      "slot": 3,
      "name": "Blessing to the brave",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to the 2 nearest allies",
      "descriptionLv1": "Restores HP by to the 2 nearest allies",
      "descriptionLv90": "Restores HP by to the 2 nearest allies",
      "target": "Nearest Ally",
      "castTime": 1.58,
      "damageScaling": "1500% ATK",
      "baseDamage": "+310",
      "levelGrowth": "+25",
      "lvl1": "1500% + 310",
      "lvl90": "1500% + 2535",
      "effects": [],
      "buffEffects": []
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "For the prosperity of the Sun and Moon",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Paralysis for 8 seconds",
      "effect": "800% + 590",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Protected by “Thorns”",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -30 DOWN for 5 seconds",
      "effect": "240% + 110",
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 5
        }
      ]
    },
    {
      "rank": 3,
      "name": "Blessing to the brave",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to the 2 nearest allies",
      "effect": "1500% + 310",
      "buffEffects": []
    },
    {
      "rank": 4,
      "name": "For the prosperity of the Sun and Moon",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Paralysis for 8 seconds",
      "effect": "800% + 590",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "For the prosperity of the Sun and Moon",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Paralysis for 8 seconds",
      "effect": "960% + 754",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Paralysis Resistance LvMax",
      "icon": "skill001/skill1003",
      "effect": "Paralysis Resistance LvMax (+1%)",
      "effectValues": [
        {
          "name": "Paralysis Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Attack +, Max HP +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+259), Max HP + (+1447)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Max HP +",
          "value": 1447,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Celestia",
  "id": 2038,
  "rarity": "SR",
  "element": "Wind",
  "role": "Support",
  "tags": [
    "Heal",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2707,
    "ATK": 279,
    "MATK": 167,
    "DEF": 65,
    "MDEF": 25
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Basic → Skill3 → Basic → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "celestia"
};

export const stats = {
  "id": "celestia",
  "characterId": 2038,
  "name": "Celestia",
  "rarity": "SR",
  "element": "風",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Heal",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2707,
      "lv90": 13537
    },
    "atk": {
      "base": 279,
      "lv90": 1396
    },
    "matk": {
      "base": 167,
      "lv90": 837
    },
    "def": {
      "base": 65,
      "lv90": 130
    },
    "mdef": {
      "base": 25,
      "lv90": 50
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
      "base": 108,
      "lv90": 173
    },
    "magicCrit": {
      "base": 65,
      "lv90": 104
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
      "HP": 812,
      "ATK": 84,
      "Block": 14,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 934,
      "ATK": 96,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 1097,
      "ATK": 113,
      "Block": 18,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 1218,
      "ATK": 126,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 2139,
      "ATK": 221,
      "DEF": 18,
      "MDEF": 5,
      "Heal Pwr": 31
    },
    "total": {
      "HP": 6200,
      "ATK": 640,
      "Block": 68,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 18,
      "MDEF": 5,
      "Heal Pwr": 31
    }
  },
  "gpAbility": {
    "gp1": {
      "Heal Pwr": 10
    },
    "gp2": {
      "ATK": 30,
      "Heal Pwr": 10
    },
    "gp3": {
      "ATK": 30,
      "Heal Pwr": 25
    },
    "gp4": {
      "ATK": 90,
      "Heal Pwr": 25
    },
    "gp5": {
      "ATK": 90,
      "Heal Pwr": 40
    },
    "gp6": {
      "ATK": 130,
      "Heal Pwr": 40
    },
    "gp7": {
      "ATK": 130,
      "Heal Pwr": 55
    },
    "gp8": {
      "ATK": 170,
      "Heal Pwr": 55
    },
    "gp9": {
      "ATK": 170,
      "Heal Pwr": 70
    },
    "gp10": {
      "ATK": 210,
      "Heal Pwr": 70
    },
    "total": {
      "ATK": 210,
      "Heal Pwr": 70
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 285,
      "ATK": 29,
      "Phys Crit": 2,
      "Accuracy": 9
    },
    "g2": {
      "HP": 342,
      "ATK": 35,
      "Phys Crit": 3,
      "Block": 14
    },
    "g3": {
      "HP": 399,
      "ATK": 41,
      "Phys Crit": 3,
      "Accuracy": 12
    },
    "g4": {
      "HP": 456,
      "ATK": 47,
      "Phys Crit": 4,
      "Block": 19
    },
    "g5": {
      "HP": 513,
      "ATK": 53,
      "Phys Crit": 4,
      "MP Charge": 5
    },
    "g6": {
      "HP": 570,
      "ATK": 59,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 627,
      "ATK": 65,
      "Phys Crit": 5,
      "Block": 26
    },
    "g8": {
      "HP": 684,
      "ATK": 71,
      "Phys Crit": 5,
      "Accuracy": 21
    },
    "g9": {
      "HP": 741,
      "ATK": 76,
      "Phys Crit": 6,
      "Block": 31
    },
    "g10": {
      "HP": 798,
      "ATK": 82,
      "Phys Crit": 6,
      "MP Charge": 8
    },
    "total": {
      "HP": 798,
      "ATK": 82,
      "Phys Crit": 6,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Heal Pwr": 5
    },
    {
      "grade": 2,
      "HP Regen": 12
    },
    {
      "grade": 3,
      "Heal Pwr": 7
    },
    {
      "grade": 4,
      "HP Regen": 16
    },
    {
      "grade": 5,
      "Heal Pwr": 9
    },
    {
      "grade": 6,
      "HP Regen": 20
    },
    {
      "grade": 7,
      "Heal Pwr": 11
    },
    {
      "grade": 8,
      "HP Regen": 24
    },
    {
      "grade": 9,
      "Heal Pwr": 13
    },
    {
      "grade": 10,
      "HP Regen": 28
    },
    {
      "grade": 11,
      "Heal Pwr": 14
    }
  ]
};;;;;;;;
