// Character data: red-umbrella-zodiac-girl-lilirara
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "red-umbrella-zodiac-girl-lilirara",
  "name": "Red Umbrella Zodiac Girl: Lilirara",
  "displayName": "Red Umbrella Zodiac Girl: Lilirara",
  "baseName": "Lilirara",
  "title": "Red Umbrella Zodiac Girl",
  "rarity": "SR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 230,
  "weaponType": "Strike",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Lilirara",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "156cm",
    "bust": "93cm (I Cup)",
    "waist": "59cm",
    "hips": "97cm"
  },
  "credits": {
    "illustration": {
      "japanese": "青永HERI",
      "romanized": ""
    },
    "voice": {
      "japanese": "花宮楓",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2190
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "I give up meow~!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -30 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -30 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -210 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.95,
      "damageScaling": "330% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+20",
      "lvl1": "330% + 150",
      "lvl90": "330% + -28",
      "effects": [
        "Physical Defense - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Spin meow~!",
      "icon": "skill001/skill0019",
      "description": "Applies Accuracy 9 UP to self for 10 seconds and MP Regeneration 40 for 4 seconds",
      "descriptionLv1": "Applies Accuracy 9 UP to self for 10 seconds and MP Regeneration 40 for 4 seconds",
      "descriptionLv90": "Applies Accuracy 18 UP to self for 10 seconds and MP Regeneration 40 for 4 seconds",
      "target": "Self",
      "castTime": 1.05,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Accuracy + Lv3",
        "MP Regeneration + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Accuracy + Lv3",
          "value": 9,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.1
        },
        {
          "name": "MP Regeneration + Lv5",
          "value": 40,
          "type": "percent",
          "duration": 4
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Lilirara Super Ultimate Grand Slam!!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Water Type Damage Taken UP(LV 1) for 8 seconds",
      "effect": "1300% + 500",
      "buffEffects": [
        {
          "name": "Water Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "I give up meow~!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -30 DOWN for 6 seconds",
      "effect": "330% + 150",
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Spin meow~!",
      "icon": "skill001/skill0019",
      "description": "Applies Accuracy 9 UP to self for 10 seconds and MP Regeneration 40 for 4 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Accuracy + Lv3",
          "value": 9,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "MP Regeneration + Lv5",
          "value": 40,
          "type": "percent",
          "duration": 4
        }
      ]
    },
    {
      "rank": 4,
      "name": "Lilirara Super Ultimate Grand Slam!!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Water Type Damage Taken UP(LV 1) for 8 seconds",
      "effect": "1300% + 500",
      "buffEffects": [
        {
          "name": "Water Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Lilirara Super Ultimate Grand Slam!!",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Water Type Damage Taken UP(LV 2) for 8 seconds",
      "effect": "1450% + 600",
      "buffEffects": [
        {
          "name": "Water Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+10%), Physical Attack + (+130)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 130,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Red Umbrella Zodiac Girl: Lilirara",
  "id": 2190,
  "rarity": "SR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1661,
    "ATK": 238,
    "MATK": 143,
    "DEF": 88,
    "MDEF": 88
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.58"
  },
  "slug": "red-umbrella-zodiac-girl-lilirara"
};

export const stats = {
  "id": "red-umbrella-zodiac-girl-lilirara",
  "characterId": 2190,
  "name": "【Red Umbrella Zodiac Girl】Lilirara",
  "rarity": "SR",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1661,
      "lv90": 8305
    },
    "atk": {
      "base": 238,
      "lv90": 1193
    },
    "matk": {
      "base": 143,
      "lv90": 716
    },
    "def": {
      "base": 88,
      "lv90": 176
    },
    "mdef": {
      "base": 88,
      "lv90": 176
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
      "base": 191,
      "lv90": 305
    },
    "magicCrit": {
      "base": 114,
      "lv90": 182
    },
    "hpRegen": {
      "base": 83,
      "lv90": 290
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
      "base": 55,
      "lv90": 55
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
      "HP": 498,
      "ATK": 72,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 573,
      "ATK": 82,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 673,
      "ATK": 97,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 747,
      "ATK": 107,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1218,
      "ATK": 175,
      "DEF": 25,
      "MDEF": 17,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3709,
      "ATK": 533,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 25,
      "MDEF": 17,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 30
    },
    "gp2": {
      "ATK": 30,
      "MP Cost Down": 3
    },
    "gp3": {
      "ATK": 90,
      "MP Cost Down": 3
    },
    "gp4": {
      "ATK": 90,
      "MP Cost Down": 5
    },
    "gp5": {
      "ATK": 130,
      "MP Cost Down": 5
    },
    "gp6": {
      "ATK": 130,
      "MP Cost Down": 6
    },
    "gp7": {
      "ATK": 170,
      "MP Cost Down": 6
    },
    "gp8": {
      "ATK": 170,
      "MP Cost Down": 7
    },
    "gp9": {
      "ATK": 210,
      "MP Cost Down": 7
    },
    "gp10": {
      "ATK": 210,
      "MP Cost Down": 8
    },
    "total": {
      "ATK": 210,
      "MP Cost Down": 8
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 175,
      "ATK": 25,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 210,
      "ATK": 30,
      "Phys Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 245,
      "ATK": 35,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 280,
      "ATK": 40,
      "Phys Crit": 6,
      "Block": 21
    },
    "g5": {
      "HP": 315,
      "ATK": 45,
      "Phys Crit": 7,
      "MP Charge": 4
    },
    "g6": {
      "HP": 350,
      "ATK": 50,
      "Phys Crit": 8,
      "Accuracy": 18
    },
    "g7": {
      "HP": 385,
      "ATK": 55,
      "Phys Crit": 9,
      "Block": 29
    },
    "g8": {
      "HP": 420,
      "ATK": 60,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 455,
      "ATK": 65,
      "Phys Crit": 10,
      "Block": 34
    },
    "g10": {
      "HP": 490,
      "ATK": 70,
      "Phys Crit": 11,
      "MP Charge": 7
    },
    "total": {
      "HP": 490,
      "ATK": 70,
      "Phys Crit": 11,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "Phys Crit": 7
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "Phys Crit": 9
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "Phys Crit": 11
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "Phys Crit": 14
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "Phys Crit": 16
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;;;;;;
