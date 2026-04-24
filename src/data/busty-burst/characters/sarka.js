// Character data: sarka
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "sarka",
  "name": "Sarka",
  "displayName": "Sarka",
  "baseName": "Sarka",
  "title": null,
  "rarity": "SR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 245,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Sarka",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "169cm",
    "bust": "104cm (K Cup)",
    "waist": "63cm",
    "hips": "94cm"
  },
  "credits": {
    "illustration": {
      "japanese": "藤村久",
      "romanized": ""
    },
    "voice": {
      "japanese": "ありかわ真奈",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2116
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Slash!",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -18%-30 DOWN for 12 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -18%-30 DOWN for 12 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -18%-210 DOWN for 12 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.2,
      "damageScaling": "270% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+20",
      "lvl1": "270% + 150",
      "lvl90": "270% + -28",
      "effects": [
        "Physical Defense - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -2.0
        }
      ],
      "duration": 12
    },
    {
      "slot": 3,
      "name": "Pierce through!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit",
      "descriptionLv1": "Deals physical damage to the nearest enemy, guaranteed hit",
      "descriptionLv90": "Deals physical damage to the nearest enemy, guaranteed hit",
      "target": "Nearest Enemy",
      "castTime": 1.2,
      "damageScaling": "220% ATK",
      "baseDamage": "+70",
      "levelGrowth": "+25",
      "lvl1": "220% + 70",
      "lvl90": "220% + 2295",
      "effects": [],
      "buffEffects": []
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Sky Fall",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy",
      "effect": "1000% + 600",
      "buffEffects": []
    },
    {
      "rank": 2,
      "name": "Sky Fall",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy",
      "effect": "1200% + 800",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "Sky Fall",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy",
      "effect": "1350% + 950",
      "buffEffects": []
    },
    {
      "rank": 4,
      "name": "Sky Fall",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy",
      "effect": "1450% + 1100",
      "buffEffects": []
    },
    {
      "rank": 5,
      "name": "Sky Fall",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy",
      "effect": "1550% + 1200",
      "buffEffects": []
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
      "name": "Skill Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+20%), Physical Attack + (+130)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
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
  "name": "Sarka",
  "id": 2116,
  "rarity": "SR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1331,
    "ATK": 293,
    "MATK": 176,
    "DEF": 208,
    "MDEF": 83
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic",
    "loop": "Basic → Skill3 → Basic → Basic → Basic → Skill2 → Skill3 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.85"
  },
  "slug": "sarka"
};

export const stats = {
  "id": "sarka",
  "characterId": 2116,
  "name": "Sarka",
  "rarity": "SR",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1331,
      "lv90": 6655
    },
    "atk": {
      "base": 293,
      "lv90": 1466
    },
    "matk": {
      "base": 176,
      "lv90": 880
    },
    "def": {
      "base": 208,
      "lv90": 354
    },
    "mdef": {
      "base": 83,
      "lv90": 229
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
      "base": 108,
      "lv90": 173
    },
    "magicCrit": {
      "base": 65,
      "lv90": 104
    },
    "hpRegen": {
      "base": 66,
      "lv90": 232
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
      "HP": 399,
      "ATK": 88,
      "Block": 17,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 459,
      "ATK": 101,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 539,
      "ATK": 119,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 599,
      "ATK": 132,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 976,
      "ATK": 231,
      "DEF": 46,
      "MDEF": 21,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 2972,
      "ATK": 671,
      "Block": 83,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 46,
      "MDEF": 21,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 30
    },
    "gp2": {
      "ATK": 30,
      "Accuracy": 2
    },
    "gp3": {
      "ATK": 90,
      "Accuracy": 2
    },
    "gp4": {
      "ATK": 90,
      "Accuracy": 5
    },
    "gp5": {
      "ATK": 150,
      "Accuracy": 5
    },
    "gp6": {
      "ATK": 150,
      "Accuracy": 7
    },
    "gp7": {
      "ATK": 210,
      "Accuracy": 7
    },
    "gp8": {
      "ATK": 210,
      "Accuracy": 9
    },
    "gp9": {
      "ATK": 270,
      "Accuracy": 9
    },
    "gp10": {
      "ATK": 270,
      "Accuracy": 11
    },
    "total": {
      "ATK": 270,
      "Accuracy": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 140,
      "ATK": 31,
      "Phys Crit": 2,
      "Accuracy": 9
    },
    "g2": {
      "HP": 168,
      "ATK": 37,
      "Phys Crit": 3,
      "Block": 17
    },
    "g3": {
      "HP": 196,
      "ATK": 43,
      "Phys Crit": 3,
      "Accuracy": 12
    },
    "g4": {
      "HP": 224,
      "ATK": 49,
      "Phys Crit": 4,
      "Block": 23
    },
    "g5": {
      "HP": 252,
      "ATK": 56,
      "Phys Crit": 4,
      "MP Charge": 5
    },
    "g6": {
      "HP": 280,
      "ATK": 62,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 308,
      "ATK": 68,
      "Phys Crit": 5,
      "Block": 32
    },
    "g8": {
      "HP": 336,
      "ATK": 74,
      "Phys Crit": 5,
      "Accuracy": 21
    },
    "g9": {
      "HP": 364,
      "ATK": 80,
      "Phys Crit": 6,
      "Block": 38
    },
    "g10": {
      "HP": 392,
      "ATK": 86,
      "Phys Crit": 6,
      "MP Charge": 8
    },
    "total": {
      "HP": 392,
      "ATK": 86,
      "Phys Crit": 6,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 24
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "ATK": 34
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "ATK": 44
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "ATK": 54
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "ATK": 64
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "ATK": 67
    }
  ]
};;;;;;;;
