// Character data: ゲルディン
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "ゲルディン",
  "name": "ゲルディン",
  "displayName": "ゲルディン",
  "baseName": "ゲルディン",
  "title": null,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 220,
  "weaponType": "Slash",
  "skillTypes": [
    "強化、弱體化、MP回復"
  ],
  "image": "ゲルディン",
  "introduction": null,
  "profile": {
    "height": "173cm",
    "bust": "118cm (L Cup)",
    "waist": "67cm",
    "hips": "110cm"
  },
  "credits": {
    "illustration": {
      "japanese": "２３",
      "romanized": ""
    },
    "voice": {
      "japanese": "春山色葉",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2220
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "シャルル・イタシュ",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Wind Type Damage Taken 20%UP for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Wind Type Damage Taken 20%UP for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Wind Type Damage Taken 20%UP for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.05,
      "damageScaling": "350% ATK",
      "baseDamage": "+400",
      "levelGrowth": "+25",
      "lvl1": "350% + 400",
      "lvl90": null,
      "effects": [
        "Wind Type Damage Taken + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Wind Type Damage Taken + Lv5",
          "value": 20,
          "type": "percent",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "イル・エ",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage 50 UP to self for 10 seconds and Action Speed 20%UP for 10 seconds , all allies10 Physical Attack 15%+30 UP",
      "descriptionLv1": "Applies Physical Critical Damage 50 UP to self for 10 seconds and Action Speed 20%UP for 10 seconds , all allies10 Physical Attack 15%+30 UP",
      "descriptionLv90": "Applies Physical Critical Damage 50 UP to self for 10 seconds and Action Speed 20%UP for 10 seconds , all allies10 Physical Attack 15%+480 UP",
      "target": "Self",
      "castTime": 1.1,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv4",
        "Action Speed + Lv5",
        "Physical Attack + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 7.0
        },
        {
          "name": "Action Speed + Lv5",
          "value": 20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Attack + Lv3",
          "value": 30,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 5.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "An Hadad Ki Ada",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, inflict 4s and Physical Defense DOWN(LV 1) for 10 seconds , on Ultimate activation,self10 Wind Type ATK UP(LV 1)",
      "effect": "1100% + 800",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Wind Type ATK + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "An Hadad Ki Ada",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy, inflict 5s and Physical Defense DOWN(LV 2) for 10 seconds , on Ultimate activation,self10 Wind Type ATK UP(LV 2)",
      "effect": "1320% + 1000",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Wind Type ATK + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "An Hadad Ki Ada",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy, inflict 5s and Physical Defense DOWN(LV 3) for 10 seconds , on Ultimate activation,self10 Wind Type ATK UP(LV 3)",
      "effect": "1470% + 1150",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Wind Type ATK + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "An Hadad Ki Ada",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy, inflict6s Blind for and Physical Defense DOWN(LV 4) for 10 seconds , on Ultimate activation,self10 Wind Type ATK UP(LV 4)",
      "effect": "1590% + 1300",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Wind Type ATK + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "An Hadad Ki Ada",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy, inflict6s Blind for and Physical Defense DOWN(LV 5) for 10 seconds , on Ultimate activation,self10 Wind Type ATK UP(LV 5)",
      "effect": "1700% + 1400",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Wind Type ATK + Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, MP Recovery",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), MP Recovery (+100%)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "MP Recovery",
          "value": 100,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Accuracy +",
          "value": 20,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "ゲルディン",
  "id": 2220,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "強化、弱體化、MP回復"
  ],
  "baseStats": {
    "HP": 2364,
    "ATK": 343,
    "MATK": 206,
    "DEF": 35,
    "MDEF": 14
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.8"
  },
  "slug": "ゲルディン"
};

export const stats = {
  "id": "ゲルディン",
  "characterId": 2220,
  "name": "ゲルディン",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "強化、弱體化、MP回復"
  ],
  "baseStats": {
    "hp": {
      "base": 2364,
      "lv90": 11823
    },
    "atk": {
      "base": 343,
      "lv90": 1718
    },
    "matk": {
      "base": 206,
      "lv90": 1031
    },
    "def": {
      "base": 35,
      "lv90": 70
    },
    "mdef": {
      "base": 14,
      "lv90": 28
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
      "base": 53,
      "lv90": 85
    },
    "magicCrit": {
      "base": 32,
      "lv90": 51
    },
    "hpRegen": {
      "base": 118,
      "lv90": 413
    },
    "mpRegen": {
      "base": 65,
      "lv90": 243
    },
    "healPwr": {
      "base": 100,
      "lv90": 250
    },
    "mpCharge": {
      "base": 58,
      "lv90": 58
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
      "HP": 709,
      "ATK": 103,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 816,
      "ATK": 119,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 958,
      "ATK": 139,
      "Block": 20,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 1064,
      "ATK": 155,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 2010,
      "ATK": 293,
      "DEF": 11,
      "MDEF": 3,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 5557,
      "ATK": 809,
      "Block": 75,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 11,
      "MDEF": 3,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "Accuracy": 2
    },
    "gp3": {
      "ATK": 120,
      "Accuracy": 2
    },
    "gp4": {
      "ATK": 120,
      "Accuracy": 5
    },
    "gp5": {
      "ATK": 200,
      "Accuracy": 5
    },
    "gp6": {
      "ATK": 200,
      "Accuracy": 7
    },
    "gp7": {
      "ATK": 280,
      "Accuracy": 7
    },
    "gp8": {
      "ATK": 280,
      "Accuracy": 9
    },
    "gp9": {
      "ATK": 360,
      "Accuracy": 9
    },
    "gp10": {
      "ATK": 360,
      "Accuracy": 11
    },
    "total": {
      "ATK": 360,
      "Accuracy": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 249,
      "ATK": 36,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 299,
      "ATK": 43,
      "Phys Crit": 1,
      "Block": 16
    },
    "g3": {
      "HP": 348,
      "ATK": 51,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 398,
      "ATK": 58,
      "Phys Crit": 2,
      "Block": 21
    },
    "g5": {
      "HP": 448,
      "ATK": 65,
      "Phys Crit": 2,
      "MP Charge": 5
    },
    "g6": {
      "HP": 498,
      "ATK": 72,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 548,
      "ATK": 80,
      "Phys Crit": 2,
      "Block": 29
    },
    "g8": {
      "HP": 597,
      "ATK": 87,
      "Phys Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 647,
      "ATK": 94,
      "Phys Crit": 3,
      "Block": 34
    },
    "g10": {
      "HP": 697,
      "ATK": 101,
      "Phys Crit": 3,
      "MP Charge": 8
    },
    "total": {
      "HP": 697,
      "ATK": 101,
      "Phys Crit": 3,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Charge": 1
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "MP Charge": 2
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "MP Charge": 3
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "MP Charge": 4
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "MP Charge": 4
    }
  ]
};;;;;;;;
