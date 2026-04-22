// Character data: swordsman-of-the-sky-festival-raguen
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "swordsman-of-the-sky-festival-raguen",
  "name": "Swordsman of the Sky Festival: Raguen",
  "displayName": "Swordsman of the Sky Festival: Raguen",
  "baseName": "Raguen",
  "title": "Swordsman of the Sky Festival",
  "rarity": "SSR",
  "element": "Light",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slow",
  "range": 235,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Raguen",
  "introduction": "Front Row、Physical、Attacker",
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
  "characterId": 2158
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Bern Sacred Sword Art - Courage Slash Vestment ver ",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -23%-50 DOWN for 6 seconds, 3s Silence for",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -23%-50 DOWN for 6 seconds, 3s Silence for",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -23%-320 DOWN for 6 seconds, 3s Silence for",
      "target": "Nearest Enemy",
      "castTime": 1.45,
      "damageScaling": "350% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+20",
      "lvl1": "350% + 300",
      "lvl90": null,
      "effects": [
        "Physical Defense - Lv5",
        "Silence"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv5",
          "value": -50,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -3.0
        },
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "So hot...",
      "icon": "skill001/skill0011",
      "description": "Applies Physical Critical Damage 50 UP to self for 12 seconds and Accuracy 11 UP for 12 seconds , 1 enemies4s Charm for",
      "descriptionLv1": "Applies Physical Critical Damage 50 UP to self for 12 seconds and Accuracy 11 UP for 12 seconds , 1 enemies4s Charm for",
      "descriptionLv90": "Applies Physical Critical Damage 50 UP to self for 12 seconds and Accuracy 23 UP for 12 seconds , 1 enemies4s Charm for",
      "target": "Nearest Enemy",
      "castTime": 1.45,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv4",
        "Accuracy + Lv4",
        "Charm"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "percent",
          "duration": 12,
          "levelGrowth": 7.0
        },
        {
          "name": "Accuracy + Lv4",
          "value": 11,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 0.13
        },
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Caeroclal Fladius!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Holy Type Damage Taken UP(LV 1) for 8 seconds and BlockDOWN(LV 1) for 10 seconds",
      "effect": "1100% + 800",
      "buffEffects": [
        {
          "name": "Holy Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Caeroclal Fladius!",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Holy Type Damage Taken UP(LV 2) for 8 seconds and BlockDOWN(LV 2) for 10 seconds",
      "effect": "1320% + 1000",
      "buffEffects": [
        {
          "name": "Holy Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv2",
          "value": -18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Caeroclal Fladius!",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Holy Type Damage Taken UP(LV 3) for 8 seconds and BlockDOWN(LV 3) for 10 seconds",
      "effect": "1470% + 1150",
      "buffEffects": [
        {
          "name": "Holy Type Damage Taken+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv3",
          "value": -21,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Caeroclal Fladius!",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Holy Type Damage Taken UP(LV 4) for 8 seconds and BlockDOWN(LV 4) for 10 seconds",
      "effect": "1590% + 1300",
      "buffEffects": [
        {
          "name": "Holy Type Damage Taken+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv4",
          "value": -23,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Caeroclal Fladius!",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Holy Type Damage Taken UP(LV 5) for 8 seconds and BlockDOWN(LV 5) for 10 seconds",
      "effect": "1700% + 1400",
      "buffEffects": [
        {
          "name": "Holy Type Damage Taken+ Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Block- Ultimate Lv5",
          "value": -25,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, MP Recovery",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+10), MP Recovery (+200%)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        },
        {
          "name": "MP Recovery",
          "value": 200,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Physical Critical Damage+ (+90%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Swordsman of the Sky Festival: Raguen",
  "id": 2158,
  "rarity": "SSR",
  "element": "Light",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2229,
    "ATK": 361,
    "MATK": 217,
    "DEF": 30,
    "MDEF": 20
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.1"
  },
  "slug": "swordsman-of-the-sky-festival-raguen"
};

export const stats = {
  "id": "swordsman-of-the-sky-festival-raguen",
  "characterId": 2158,
  "name": "【Swordsman of the Sky Festival】Raguen",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2229,
      "lv90": 11148
    },
    "atk": {
      "base": 361,
      "lv90": 1807
    },
    "matk": {
      "base": 217,
      "lv90": 1085
    },
    "def": {
      "base": 30,
      "lv90": 65
    },
    "mdef": {
      "base": 20,
      "lv90": 34
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
      "base": 125,
      "lv90": 200
    },
    "magicCrit": {
      "base": 75,
      "lv90": 120
    },
    "hpRegen": {
      "base": 111,
      "lv90": 389
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
      "base": 74,
      "lv90": 74
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
      "HP": 669,
      "ATK": 108,
      "Block": 17,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 769,
      "ATK": 125,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 903,
      "ATK": 146,
      "Block": 22,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 1003,
      "ATK": 163,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1896,
      "ATK": 335,
      "DEF": 10,
      "MDEF": 4
    },
    "total": {
      "HP": 5240,
      "ATK": 877,
      "Block": 83,
      "MP Charge": 16,
      "Accuracy": 30,
      "DEF": 10,
      "MDEF": 4
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "Block": 3
    },
    "gp3": {
      "ATK": 120,
      "Block": 3
    },
    "gp4": {
      "ATK": 120,
      "Block": 7
    },
    "gp5": {
      "ATK": 200,
      "Block": 7
    },
    "gp6": {
      "ATK": 200,
      "Block": 10
    },
    "gp7": {
      "ATK": 280,
      "Block": 10
    },
    "gp8": {
      "ATK": 280,
      "Block": 13
    },
    "gp9": {
      "ATK": 360,
      "Block": 13
    },
    "gp10": {
      "ATK": 360,
      "Block": 16
    },
    "total": {
      "ATK": 360,
      "Block": 16
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 235,
      "ATK": 38,
      "Phys Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 282,
      "ATK": 46,
      "Phys Crit": 3,
      "Block": 17
    },
    "g3": {
      "HP": 329,
      "ATK": 53,
      "Phys Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 376,
      "ATK": 61,
      "Phys Crit": 4,
      "Block": 23
    },
    "g5": {
      "HP": 422,
      "ATK": 69,
      "Phys Crit": 5,
      "MP Charge": 6
    },
    "g6": {
      "HP": 469,
      "ATK": 76,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 516,
      "ATK": 84,
      "Phys Crit": 6,
      "Block": 32
    },
    "g8": {
      "HP": 563,
      "ATK": 91,
      "Phys Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 610,
      "ATK": 99,
      "Phys Crit": 7,
      "Block": 38
    },
    "g10": {
      "HP": 657,
      "ATK": 107,
      "Phys Crit": 7,
      "MP Charge": 10
    },
    "total": {
      "HP": 657,
      "ATK": 107,
      "Phys Crit": 7,
      "MP Charge": 10
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 30
    },
    {
      "grade": 2,
      "MP Charge": 2
    },
    {
      "grade": 3,
      "ATK": 42
    },
    {
      "grade": 4,
      "MP Charge": 3
    },
    {
      "grade": 5,
      "ATK": 54
    },
    {
      "grade": 6,
      "MP Charge": 3
    },
    {
      "grade": 7,
      "ATK": 66
    },
    {
      "grade": 8,
      "MP Charge": 4
    },
    {
      "grade": 9,
      "ATK": 78
    },
    {
      "grade": 10,
      "MP Charge": 4
    },
    {
      "grade": 11,
      "ATK": 86
    }
  ]
};;;;;;;;
