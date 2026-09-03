// Character data: celebria
// Auto-generated from game data

export const info = {
  "slug": "celebria",
  "name": "Celebria",
  "displayName": "Celebria",
  "baseName": "Celebria",
  "title": null,
  "rarity": "R",
  "element": "Water",
  "role": "Tank",
  "attackType": "Magic",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Slow",
  "range": 200,
  "weaponType": "Throw",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Celebria",
  "introduction": "Front RowMagicalTank",
  "profile": {
    "height": "170cm",
    "bust": "120cm (N Cup)",
    "waist": "63cm",
    "hips": "95cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
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
  "characterId": 2013
};














































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Curient Kon Lemolinos",
      "icon": "skill001/skill0008",
      "description": "Deals magic damage to the enemy with the highest Magical ATK and inflicts Magic Attack -9%-20 DOWN for 8 seconds",
      "descriptionLv1": "Deals magic damage to the enemy with the highest Magical ATK and inflicts Magic Attack -9%-20 DOWN for 8 seconds",
      "descriptionLv90": "Deals magic damage to the enemy with the highest Magical ATK and inflicts Magic Attack -9%-200 DOWN for 8 seconds",
      "target": "Highest Mag ATK Enemy",
      "castTime": 1.78,
      "damageScaling": "220.00000000000003% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+16",
      "lvl1": "220% + 100",
      "lvl90": "220% + -78",
      "effects": [
        "Magic Attack - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Magic Attack - Lv3",
          "value": -20,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -2.0
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Abresa El Agua",
      "icon": "skill001/skill0021",
      "description": "Restores own HP by and inflicts Block 9 UP for 8 seconds",
      "descriptionLv1": "Restores own HP by and inflicts Block 9 UP for 8 seconds",
      "descriptionLv90": "Restores own HP by and inflicts Block 18 UP for 8 seconds",
      "target": "Self",
      "castTime": 1.78,
      "damageScaling": "2203% ATK",
      "baseDamage": "+1010",
      "levelGrowth": "+50",
      "lvl1": "2203% + 1010",
      "lvl90": "2203% + 1018",
      "effects": [
        "Block+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 0.1
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Sea’s Love that Leads to Calamity",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV 1) for 8 seconds",
      "effect": "240% + 329",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -8,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Sea’s Love that Leads to Calamity",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV 2) for 8 seconds",
      "effect": "300% + 381",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -10,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Sea’s Love that Leads to Calamity",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV 3) for 8 seconds",
      "effect": "350% + 428",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -12,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Sea’s Love that Leads to Calamity",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV 4) for 8 seconds",
      "effect": "385% + 465",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -14,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Sea’s Love that Leads to Calamity",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV 5) for 8 seconds",
      "effect": "470% + 501",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -15,
          "type": "flat",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +",
      "icon": "skill001/skill1001",
      "description": "Gain Magic Attack UP (Small)",
      "effect": "Magic Attack + (+130)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 130,
          "type": "flat",
          "gameText": "Magic Attack UP (Small)"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Healing Received +",
      "icon": "skill001/skill1004",
      "description": "Gain Healing Received UP (Small)",
      "effect": "Healing Received + (+20%)",
      "effectValues": [
        {
          "name": "Healing Received +",
          "value": 20,
          "type": "percent",
          "gameText": "Healing Received UP (Small)"
        }
      ]
    }
  ],
  "name": "Celebria",
  "id": 2013,
  "rarity": "R",
  "element": "Water",
  "role": "Tank",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 4010,
    "ATK": 135,
    "MATK": 225,
    "DEF": 3,
    "MDEF": 9
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Basic → Basic → Skill3 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "100% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "celebria"
};

export const stats = {
  "id": "celebria",
  "characterId": 2013,
  "name": "Celebria",
  "rarity": "R",
  "element": "水",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 4010,
      "lv90": 20050
    },
    "atk": {
      "base": 135,
      "lv90": 675
    },
    "matk": {
      "base": 225,
      "lv90": 1125
    },
    "def": {
      "base": 3,
      "lv90": 6
    },
    "mdef": {
      "base": 9,
      "lv90": 18
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
      "base": 109,
      "lv90": 174
    },
    "magicCrit": {
      "base": 182,
      "lv90": 291
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
      "base": 76,
      "lv90": 76
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
      "MATK": 68,
      "Block": 12,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 1383,
      "MATK": 78,
      "Accuracy": 13,
      "Block": 14
    },
    "lb3": {
      "HP": 1624,
      "MATK": 91,
      "Block": 16,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 1805,
      "MATK": 101,
      "Accuracy": 17,
      "Block": 18
    },
    "lb5": {
      "HP": 2927,
      "MATK": 164,
      "DEF": 1,
      "MDEF": 2,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 8942,
      "MATK": 502,
      "Block": 60,
      "MP Charge": 16,
      "Accuracy": 30,
      "DEF": 1,
      "MDEF": 2,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "Heal Pwr": 5
    },
    "gp2": {
      "HP": 150,
      "Heal Pwr": 5
    },
    "gp3": {
      "HP": 150,
      "Heal Pwr": 15
    },
    "gp4": {
      "HP": 350,
      "Heal Pwr": 15
    },
    "gp5": {
      "HP": 350,
      "Heal Pwr": 25
    },
    "gp6": {
      "HP": 550,
      "Heal Pwr": 25
    },
    "gp7": {
      "HP": 550,
      "Heal Pwr": 35
    },
    "gp8": {
      "HP": 750,
      "Heal Pwr": 35
    },
    "gp9": {
      "HP": 750,
      "Heal Pwr": 45
    },
    "gp10": {
      "HP": 950,
      "Heal Pwr": 45
    },
    "total": {
      "HP": 950,
      "Heal Pwr": 45
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 422,
      "MATK": 24,
      "Magic Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 507,
      "MATK": 28,
      "MDEF": 1,
      "Magic Crit": 5,
      "Block": 13
    },
    "g3": {
      "HP": 591,
      "MATK": 33,
      "MDEF": 1,
      "Magic Crit": 5,
      "Accuracy": 12
    },
    "g4": {
      "HP": 675,
      "MATK": 38,
      "MDEF": 1,
      "Magic Crit": 6,
      "Block": 17
    },
    "g5": {
      "HP": 760,
      "MATK": 43,
      "MDEF": 1,
      "Magic Crit": 7,
      "MP Charge": 6
    },
    "g6": {
      "HP": 844,
      "MATK": 47,
      "MDEF": 1,
      "Magic Crit": 8,
      "Accuracy": 18
    },
    "g7": {
      "HP": 929,
      "MATK": 52,
      "MDEF": 1,
      "Magic Crit": 8,
      "Block": 23
    },
    "g8": {
      "HP": 1013,
      "MATK": 57,
      "MDEF": 1,
      "Magic Crit": 9,
      "Accuracy": 21
    },
    "g9": {
      "HP": 1097,
      "MATK": 62,
      "MDEF": 1,
      "Magic Crit": 10,
      "Block": 27
    },
    "g10": {
      "HP": 1182,
      "MATK": 66,
      "MDEF": 1,
      "Magic Crit": 11,
      "MP Charge": 10
    },
    "total": {
      "HP": 1182,
      "MATK": 66,
      "MDEF": 1,
      "Magic Crit": 11,
      "MP Charge": 10
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP Drain": 1
    },
    {
      "grade": 2,
      "MP Charge": 2
    },
    {
      "grade": 3,
      "HP Drain": 1
    },
    {
      "grade": 4,
      "MP Charge": 3
    },
    {
      "grade": 5,
      "HP Drain": 1
    },
    {
      "grade": 6,
      "MP Charge": 3
    },
    {
      "grade": 7,
      "HP Drain": 1
    },
    {
      "grade": 8,
      "MP Charge": 4
    },
    {
      "grade": 9,
      "HP Drain": 1
    },
    {
      "grade": 10,
      "MP Charge": 5
    },
    {
      "grade": 11,
      "HP Drain": 1
    }
  ]
};;;
