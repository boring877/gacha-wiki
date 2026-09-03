// Character data: destra
// Auto-generated from game data

export const info = {
  "slug": "destra",
  "name": "Destra",
  "displayName": "Destra",
  "baseName": "Destra",
  "title": null,
  "rarity": "R",
  "element": "Dark",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Slow",
  "range": 240,
  "weaponType": "Throw",
  "skillTypes": [
    "Debuff",
    "Taunt"
  ],
  "image": "Destra",
  "introduction": "Front RowPhysicalTank",
  "profile": {
    "height": "163cm",
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
      "japanese": "榛名れん",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2027
};














































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Just a little…",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, and applies Taunt to self for 8 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy, and applies Taunt to self for 8 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy, and applies Taunt to self for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.78,
      "damageScaling": "240% ATK",
      "baseDamage": "+90",
      "levelGrowth": "+16",
      "lvl1": "240% + 90",
      "lvl90": null,
      "effects": [
        "Taunt"
      ],
      "buffEffects": [
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Please come with me～♪",
      "icon": "skill001/skill0021",
      "description": "Restores own HP by",
      "descriptionLv1": "Restores own HP by",
      "descriptionLv90": "Restores own HP by",
      "target": "Self",
      "castTime": 1.78,
      "damageScaling": "2500% ATK",
      "baseDamage": "+950",
      "levelGrowth": "+50",
      "lvl1": "2500% + 950",
      "lvl90": "2500% + 5400",
      "effects": [],
      "buffEffects": []
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Now, let us head to Hades’s realm♪",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV 1) for 10 seconds",
      "effect": "220% + 304",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -10,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Now, let us head to Hades’s realm♪",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV 2) for 10 seconds",
      "effect": "275% + 409",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -13,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Now, let us head to Hades’s realm♪",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV 3) for 10 seconds",
      "effect": "320% + 453",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -16,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Now, let us head to Hades’s realm♪",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV 4) for 10 seconds",
      "effect": "352% + 488",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -18,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Now, let us head to Hades’s realm♪",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV 5) for 10 seconds",
      "effect": "374% + 512",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -20,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +",
      "icon": "skill001/skill1001",
      "description": "Gain Physical Attack UP (Small)",
      "effect": "Physical Attack + (+130)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 130,
          "type": "flat",
          "gameText": "Physical Attack UP (Small)"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Max HP +",
      "icon": "skill001/skill1003",
      "description": "Gain Max HP UP (Small)",
      "effect": "Max HP + (+1447)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 1447,
          "type": "flat",
          "gameText": "Max HP UP (Small)"
        }
      ]
    }
  ],
  "name": "Destra",
  "id": 2027,
  "rarity": "R",
  "element": "Dark",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Taunt"
  ],
  "baseStats": {
    "HP": 4010,
    "ATK": 241,
    "MATK": 145,
    "DEF": 9,
    "MDEF": 3
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Basic → Skill3",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "destra"
};

export const stats = {
  "id": "destra",
  "characterId": 2027,
  "name": "Destra",
  "rarity": "R",
  "element": "魔",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Taunt"
  ],
  "baseStats": {
    "hp": {
      "base": 4010,
      "lv90": 20050
    },
    "atk": {
      "base": 241,
      "lv90": 1208
    },
    "matk": {
      "base": 145,
      "lv90": 725
    },
    "def": {
      "base": 9,
      "lv90": 18
    },
    "mdef": {
      "base": 3,
      "lv90": 6
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 40,
      "lv90": 120
    },
    "physCrit": {
      "base": 100,
      "lv90": 160
    },
    "magicCrit": {
      "base": 60,
      "lv90": 96
    },
    "hpRegen": {
      "base": 200,
      "lv90": 701
    },
    "mpRegen": {
      "base": 50,
      "lv90": 200
    },
    "healPwr": {
      "base": 100,
      "lv90": 250
    },
    "mpCharge": {
      "base": 70,
      "lv90": 70
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
      "HP": 1203,
      "ATK": 73,
      "Block": 12,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 1383,
      "ATK": 83,
      "Accuracy": 13,
      "Block": 14
    },
    "lb3": {
      "HP": 1624,
      "ATK": 98,
      "Block": 16,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 1805,
      "ATK": 109,
      "Accuracy": 17,
      "Block": 18
    },
    "lb5": {
      "HP": 2927,
      "ATK": 177,
      "DEF": 2,
      "MDEF": 1,
      "Heal Pwr": 24
    },
    "total": {
      "HP": 8942,
      "ATK": 540,
      "Block": 60,
      "MP Charge": 15,
      "Accuracy": 30,
      "DEF": 2,
      "MDEF": 1,
      "Heal Pwr": 24
    }
  },
  "gpAbility": {
    "gp1": {
      "Block": 1
    },
    "gp2": {
      "HP": 150,
      "Block": 1
    },
    "gp3": {
      "HP": 150,
      "Block": 3
    },
    "gp4": {
      "HP": 350,
      "Block": 3
    },
    "gp5": {
      "HP": 350,
      "Block": 5
    },
    "gp6": {
      "HP": 550,
      "Block": 5
    },
    "gp7": {
      "HP": 550,
      "Block": 7
    },
    "gp8": {
      "HP": 750,
      "Block": 7
    },
    "gp9": {
      "HP": 750,
      "Block": 9
    },
    "gp10": {
      "HP": 950,
      "Block": 9
    },
    "total": {
      "HP": 950,
      "Block": 9
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 422,
      "ATK": 25,
      "Phys Crit": 2,
      "Accuracy": 9
    },
    "g2": {
      "HP": 507,
      "ATK": 31,
      "Phys Crit": 3,
      "Block": 13
    },
    "g3": {
      "HP": 591,
      "ATK": 36,
      "Phys Crit": 3,
      "Accuracy": 12
    },
    "g4": {
      "HP": 675,
      "ATK": 41,
      "Phys Crit": 3,
      "Block": 17
    },
    "g5": {
      "HP": 760,
      "ATK": 46,
      "Phys Crit": 4,
      "MP Charge": 6
    },
    "g6": {
      "HP": 844,
      "ATK": 51,
      "Phys Crit": 4,
      "Accuracy": 18
    },
    "g7": {
      "HP": 929,
      "ATK": 56,
      "Phys Crit": 5,
      "Block": 23
    },
    "g8": {
      "HP": 1013,
      "ATK": 61,
      "Phys Crit": 5,
      "Accuracy": 21
    },
    "g9": {
      "HP": 1097,
      "ATK": 66,
      "Phys Crit": 5,
      "Block": 27
    },
    "g10": {
      "HP": 1182,
      "ATK": 71,
      "Phys Crit": 6,
      "MP Charge": 9
    },
    "total": {
      "HP": 1182,
      "ATK": 71,
      "Phys Crit": 6,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Charge": 2
    },
    {
      "grade": 2,
      "Heal Pwr": 5
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "Heal Pwr": 6
    },
    {
      "grade": 5,
      "MP Charge": 3
    },
    {
      "grade": 6,
      "Heal Pwr": 8
    },
    {
      "grade": 7,
      "MP Charge": 4
    },
    {
      "grade": 8,
      "Heal Pwr": 9
    },
    {
      "grade": 9,
      "MP Charge": 4
    },
    {
      "grade": 10,
      "Heal Pwr": 11
    },
    {
      "grade": 11,
      "MP Charge": 5
    }
  ]
};;;
