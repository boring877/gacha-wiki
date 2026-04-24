// Character data: want-some-beer-stenrina
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "want-some-beer-stenrina",
  "name": "Want some beer?: Stenrina",
  "displayName": "Want some beer?: Stenrina",
  "baseName": "Stenrina",
  "title": "Want some beer?",
  "rarity": "SR",
  "element": "Mind",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slow",
  "range": 270,
  "weaponType": "Throw",
  "skillTypes": [
    "Buff",
    "Disrupt"
  ],
  "image": "Stenrina",
  "introduction": "Middle Row、Physical、Support",
  "profile": {
    "height": "161cm",
    "bust": "102cm (J Cup)",
    "waist": "63cm",
    "hips": "86cm"
  },
  "credits": {
    "illustration": {
      "japanese": "ごばん",
      "romanized": ""
    },
    "voice": {
      "japanese": "三十三七",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2091
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "A bit drunk ",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 1 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Stun for 1 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Stun for 1 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "220% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+20",
      "lvl1": "220% + 150",
      "lvl90": null,
      "effects": [
        "Stun"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1
        }
      ],
      "duration": 1
    },
    {
      "slot": 3,
      "name": "Come, let's drink together!",
      "icon": "skill001/skill0019",
      "description": "Applies Block 9 UP to the 3 nearest allies for 10 seconds and Accuracy 9 UP for 10 seconds",
      "descriptionLv1": "Applies Block 9 UP to the 3 nearest allies for 10 seconds and Accuracy 9 UP for 10 seconds",
      "descriptionLv90": "Applies Block 18 UP to the 3 nearest allies for 10 seconds and Accuracy 18 UP for 10 seconds",
      "target": "Nearest Ally",
      "castTime": 1.58,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Block+ Lv3",
        "Accuracy + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.1
        },
        {
          "name": "Accuracy + Lv3",
          "value": 9,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.1
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Cheers!",
      "icon": "skill001/skill0020_1",
      "description": "Applies Physical Attack UP(LV 1) to all allies for 12 seconds and Magic Attack UP(LV 1) for 12 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Magic Attack + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 2,
      "name": "Cheers!",
      "icon": "skill001/skill0020_2",
      "description": "Applies Physical Attack UP(LV 2) to all allies for 12 seconds and Magic Attack UP(LV 2) for 12 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Magic Attack + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 3,
      "name": "Cheers!",
      "icon": "skill001/skill0020_3",
      "description": "Applies Physical Attack UP(LV 3) to all allies for 12 seconds and Magic Attack UP(LV 3) for 12 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Magic Attack + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "Cheers!",
      "icon": "skill001/skill0020_4",
      "description": "Applies Physical Attack UP(LV 4) to all allies for 12 seconds and Magic Attack UP(LV 4) for 12 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Magic Attack + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 5,
      "name": "Cheers!",
      "icon": "skill001/skill0020_5",
      "description": "Applies Physical Attack UP(LV 5) to all allies for 12 seconds and Magic Attack UP(LV 5) for 12 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Magic Attack + Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 12
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1005",
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
  "name": "Want some beer?: Stenrina",
  "id": 2091,
  "rarity": "SR",
  "element": "Mind",
  "role": "Support",
  "tags": [
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2507,
    "ATK": 279,
    "MATK": 167,
    "DEF": 65,
    "MDEF": 25
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Skill2 → Basic → Basic",
    "loop": "Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "want-some-beer-stenrina"
};

export const stats = {
  "id": "want-some-beer-stenrina",
  "characterId": 2091,
  "name": "【Want some beer?】Stenrina",
  "rarity": "SR",
  "element": "想",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2507,
      "lv90": 12535
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
      "lv90": 120
    },
    "block": {
      "base": 50,
      "lv90": 150
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
      "base": 125,
      "lv90": 438
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
      "base": 60,
      "lv90": 60
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
      "HP": 752,
      "ATK": 84,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 865,
      "ATK": 96,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 1015,
      "ATK": 113,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1128,
      "ATK": 126,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1838,
      "ATK": 205,
      "DEF": 16,
      "MDEF": 5,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 5598,
      "ATK": 624,
      "Block": 75,
      "MP Charge": 13,
      "Accuracy": 30,
      "DEF": 16,
      "MDEF": 5,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 200
    },
    "gp2": {
      "HP": 200,
      "MP Charge": 2
    },
    "gp3": {
      "HP": 500,
      "MP Charge": 2
    },
    "gp4": {
      "HP": 500,
      "MP Charge": 5
    },
    "gp5": {
      "HP": 800,
      "MP Charge": 5
    },
    "gp6": {
      "HP": 800,
      "MP Charge": 7
    },
    "gp7": {
      "HP": 1100,
      "MP Charge": 7
    },
    "gp8": {
      "HP": 1100,
      "MP Charge": 9
    },
    "gp9": {
      "HP": 1400,
      "MP Charge": 9
    },
    "gp10": {
      "HP": 1400,
      "MP Charge": 11
    },
    "total": {
      "HP": 1400,
      "MP Charge": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 264,
      "ATK": 29,
      "Phys Crit": 2,
      "Accuracy": 9
    },
    "g2": {
      "HP": 317,
      "ATK": 35,
      "Phys Crit": 3,
      "Block": 16
    },
    "g3": {
      "HP": 369,
      "ATK": 41,
      "Phys Crit": 3,
      "Accuracy": 12
    },
    "g4": {
      "HP": 422,
      "ATK": 47,
      "Phys Crit": 4,
      "Block": 21
    },
    "g5": {
      "HP": 475,
      "ATK": 53,
      "Phys Crit": 4,
      "MP Charge": 5
    },
    "g6": {
      "HP": 528,
      "ATK": 59,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 581,
      "ATK": 65,
      "Phys Crit": 5,
      "Block": 29
    },
    "g8": {
      "HP": 633,
      "ATK": 71,
      "Phys Crit": 5,
      "Accuracy": 21
    },
    "g9": {
      "HP": 686,
      "ATK": 76,
      "Phys Crit": 6,
      "Block": 34
    },
    "g10": {
      "HP": 739,
      "ATK": 82,
      "Phys Crit": 6,
      "MP Charge": 8
    },
    "total": {
      "HP": 739,
      "ATK": 82,
      "Phys Crit": 6,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Regen": 5
    },
    {
      "grade": 2,
      "MP Cost Down": 1
    },
    {
      "grade": 3,
      "MP Regen": 7
    },
    {
      "grade": 4,
      "MP Cost Down": 1
    },
    {
      "grade": 5,
      "MP Regen": 8
    },
    {
      "grade": 6,
      "MP Cost Down": 1
    },
    {
      "grade": 7,
      "MP Regen": 10
    },
    {
      "grade": 8,
      "MP Cost Down": 1
    },
    {
      "grade": 9,
      "MP Regen": 12
    },
    {
      "grade": 10,
      "MP Cost Down": 1
    },
    {
      "grade": 11,
      "MP Regen": 13
    }
  ]
};;;;;;;;
