// Character data: twin-shrine-maiden-cluul
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "twin-shrine-maiden-cluul",
  "name": "Twin Shrine Maiden: Cluul",
  "displayName": "Twin Shrine Maiden: Cluul",
  "baseName": "Cluul",
  "title": "Twin Shrine Maiden",
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 230,
  "weaponType": "Slash",
  "skillTypes": [
    "Heal",
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "image": "Cluul",
  "introduction": "Front Row、Magical、Attacker",
  "profile": {
    "height": "140cm",
    "bust": "112cm (O Cup)",
    "waist": "62cm",
    "hips": "82cm"
  },
  "credits": {
    "illustration": {
      "japanese": "カゲシオ",
      "romanized": ""
    },
    "voice": {
      "japanese": "藤宮きせき",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2192
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Spinning Slash Destroyer",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the nearest enemyApplies Action Speed 20%UP to self for 6 seconds",
      "descriptionLv1": "Deals magic damage to the nearest enemyApplies Action Speed 20%UP to self for 6 seconds",
      "descriptionLv90": "Deals magic damage to the nearest enemyApplies Action Speed 20%UP to self for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.65,
      "damageScaling": "330% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+25",
      "lvl1": "330% + 500",
      "lvl90": null,
      "effects": [
        "Action Speed + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Action Speed + Lv5",
          "value": 20,
          "type": "flat",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Falling Flower Spiral",
      "icon": "skill001/skill0010",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense-23%-50 DOWN for 10 seconds and Fire Type Damage Taken 16%UP for 10 seconds",
      "descriptionLv1": "Deals magic damage to the nearest enemy and inflicts Magic Defense-23%-50 DOWN for 10 seconds and Fire Type Damage Taken 16%UP for 10 seconds",
      "descriptionLv90": "Deals magic damage to the nearest enemy and inflicts Magic Defense-23%-320 DOWN for 10 seconds and Fire Type Damage Taken 16%UP for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.75,
      "damageScaling": "300% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+20",
      "lvl1": "300% + 300",
      "lvl90": null,
      "effects": [
        "Magic Defense- Lv5",
        "Fire Type Damage Taken + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense- Lv5",
          "value": -50,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -3.0
        },
        {
          "name": "Fire Type Damage Taken + Lv3",
          "value": 16,
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
      "name": "Ten Thousand Demon Annihilation Greatsword",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the nearest enemy, guaranteed hit, and before activating the Ultimate,4 and Magic Defense DOWN(LV 1) for 10 seconds",
      "effect": "1200% + 1200",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Ten Thousand Demon Annihilation Greatsword",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the nearest enemy, guaranteed hit, and before activating the Ultimate,5 and Magic Defense DOWN(LV 2) for 10 seconds",
      "effect": "1440% + 1400",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Magic Defense- Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Ten Thousand Demon Annihilation Greatsword",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to the nearest enemy, guaranteed hit, and before activating the Ultimate,5 and Magic Defense DOWN(LV 3) for 10 seconds",
      "effect": "1620% + 1600",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Magic Defense- Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Ten Thousand Demon Annihilation Greatsword",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to the nearest enemy, guaranteed hit, and before activating the Ultimate,6 and Magic Defense DOWN(LV 4) for 10 seconds",
      "effect": "1739% + 1800",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Magic Defense- Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Ten Thousand Demon Annihilation Greatsword",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to the nearest enemy, guaranteed hit, and before activating the Ultimate,6 and Magic Defense DOWN(LV 5) for 10 seconds",
      "effect": "1800% + 2000",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Magic Defense- Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Normal Attack Magic Defense DOWN",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+15), Normal Attack Magic Defense DOWN (0)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "flat"
        },
        {
          "name": "Normal Attack Magic Defense DOWN",
          "value": 0,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Twin Shrine Maiden: Cluul",
  "id": 2192,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Heal",
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2837,
    "ATK": 168,
    "MATK": 281,
    "DEF": 25,
    "MDEF": 25
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.5"
  },
  "slug": "twin-shrine-maiden-cluul"
};

export const stats = {
  "id": "twin-shrine-maiden-cluul",
  "characterId": 2192,
  "name": "【Twin Shrine Maiden】Cluul",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Heal",
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2837,
      "lv90": 14188
    },
    "atk": {
      "base": 168,
      "lv90": 843
    },
    "matk": {
      "base": 281,
      "lv90": 1405
    },
    "def": {
      "base": 25,
      "lv90": 50
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
      "base": 40,
      "lv90": 120
    },
    "physCrit": {
      "base": 75,
      "lv90": 120
    },
    "magicCrit": {
      "base": 125,
      "lv90": 200
    },
    "hpRegen": {
      "base": 141,
      "lv90": 495
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
      "base": 56,
      "lv90": 56
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
      "HP": 851,
      "MATK": 84,
      "Block": 12,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 979,
      "MATK": 97,
      "Accuracy": 13,
      "Block": 14
    },
    "lb3": {
      "HP": 1149,
      "MATK": 114,
      "Block": 16,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1277,
      "MATK": 127,
      "Accuracy": 17,
      "Block": 18
    },
    "lb5": {
      "HP": 2412,
      "MATK": 260,
      "DEF": 5,
      "MDEF": 9,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 6668,
      "MATK": 682,
      "Block": 60,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 5,
      "MDEF": 9,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 40
    },
    "gp2": {
      "MATK": 40,
      "MP Cost Down": 3
    },
    "gp3": {
      "MATK": 120,
      "MP Cost Down": 3
    },
    "gp4": {
      "MATK": 120,
      "MP Cost Down": 5
    },
    "gp5": {
      "MATK": 200,
      "MP Cost Down": 5
    },
    "gp6": {
      "MATK": 200,
      "MP Cost Down": 6
    },
    "gp7": {
      "MATK": 280,
      "MP Cost Down": 6
    },
    "gp8": {
      "MATK": 280,
      "MP Cost Down": 7
    },
    "gp9": {
      "MATK": 360,
      "MP Cost Down": 7
    },
    "gp10": {
      "MATK": 360,
      "MP Cost Down": 8
    },
    "total": {
      "MATK": 360,
      "MP Cost Down": 8
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 299,
      "MATK": 30,
      "MDEF": 2,
      "Magic Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 358,
      "MATK": 36,
      "MDEF": 2,
      "Magic Crit": 3,
      "Block": 13
    },
    "g3": {
      "HP": 418,
      "MATK": 41,
      "MDEF": 2,
      "Magic Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 478,
      "MATK": 47,
      "MDEF": 3,
      "Magic Crit": 4,
      "Block": 17
    },
    "g5": {
      "HP": 538,
      "MATK": 53,
      "MDEF": 3,
      "Magic Crit": 5,
      "MP Charge": 5
    },
    "g6": {
      "HP": 597,
      "MATK": 59,
      "MDEF": 3,
      "Magic Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 657,
      "MATK": 65,
      "MDEF": 4,
      "Magic Crit": 6,
      "Block": 23
    },
    "g8": {
      "HP": 717,
      "MATK": 71,
      "MDEF": 4,
      "Magic Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 777,
      "MATK": 77,
      "MDEF": 4,
      "Magic Crit": 7,
      "Block": 27
    },
    "g10": {
      "HP": 836,
      "MATK": 83,
      "MDEF": 5,
      "Magic Crit": 7,
      "MP Charge": 7
    },
    "total": {
      "HP": 836,
      "MATK": 83,
      "MDEF": 5,
      "Magic Crit": 7,
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
      "MATK": 25
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "MATK": 34
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "MATK": 42
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "MATK": 51
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "MATK": 59
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;;;;;
