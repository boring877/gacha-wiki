// Character data: purehearted-pâtissière-frey
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "purehearted-pâtissière-frey",
  "name": "Purehearted Pâtissière: Frey",
  "displayName": "Purehearted Pâtissière: Frey",
  "baseName": "Frey",
  "title": "Purehearted Pâtissière",
  "rarity": "SSR",
  "element": "Fire",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 390,
  "weaponType": "Strike",
  "skillTypes": [
    "Heal",
    "Buff",
    "Debuff"
  ],
  "image": "Frey",
  "introduction": "Middle Row、Physical、Support",
  "profile": {
    "height": "156cm",
    "bust": "95cm (H Cup)",
    "waist": "56cm",
    "hips": "84cm"
  },
  "credits": {
    "illustration": {
      "japanese": "ウニトシキ",
      "romanized": ""
    },
    "voice": {
      "japanese": "こはる凪",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2109
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Please accept this!",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Action Speed DOWN for 7 seconds and Accuracy -11 DOWN for 7 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Action Speed DOWN for 7 seconds and Accuracy -11 DOWN for 7 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Action Speed DOWN for 7 seconds and Accuracy -23 DOWN for 7 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.22,
      "damageScaling": "300% ATK",
      "baseDamage": "+120",
      "levelGrowth": "+20",
      "lvl1": "300% + 120",
      "lvl90": "300% + 108",
      "effects": [
        "Action Speed - Lv4",
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Action Speed - Lv4",
          "value": -17,
          "type": "flat",
          "duration": 7,
          "levelGrowth": 0
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 7,
          "levelGrowth": -0.13
        }
      ],
      "duration": 7
    },
    {
      "slot": 3,
      "name": "Mm~ feels great!",
      "icon": "skill001/skill0018",
      "description": "Applies Magic Critical Damage 40 UP to all allies for 9 seconds and Accuracy 9 UP for 9 seconds",
      "descriptionLv1": "Applies Magic Critical Damage 40 UP to all allies for 9 seconds and Accuracy 9 UP for 9 seconds",
      "descriptionLv90": "Applies Magic Critical Damage 4180 UP to all allies for 9 seconds and Accuracy 9 UP for 9 seconds",
      "target": "All Allies",
      "castTime": 1.22,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Magic Critical Damage+ Lv3",
        "Accuracy + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Magic Critical Damage+ Lv3",
          "value": 40,
          "type": "flat",
          "duration": 9,
          "levelGrowth": 5.0
        },
        {
          "name": "Accuracy + Lv3",
          "value": 9,
          "type": "flat",
          "duration": 9,
          "levelGrowth": 0.1
        }
      ],
      "duration": 9
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Hope everyone's feelings reach ",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to all allies and inflicts Count-Based Recovery Shield(LV 1) for 20 secondsand BlockUP(LV 1) for 10 seconds",
      "effect": "3000% + 1000",
      "buffEffects": [
        {
          "name": "Count-Based Recovery Shield Lv1",
          "value": 40,
          "type": "percent",
          "duration": 20
        },
        {
          "name": "Block+ Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Please accept this!",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Action Speed DOWN for 7 seconds and Accuracy -11 DOWN for 7 seconds",
      "effect": "300% + 120",
      "buffEffects": [
        {
          "name": "Action Speed - Lv4",
          "value": -17,
          "type": "flat",
          "duration": 7
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 7
        }
      ]
    },
    {
      "rank": 3,
      "name": "Mm~ feels great!",
      "icon": "skill001/skill0018",
      "description": "Applies Magic Critical Damage 40 UP to all allies for 9 seconds and Accuracy 9 UP for 9 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Magic Critical Damage+ Lv3",
          "value": 40,
          "type": "flat",
          "duration": 9
        },
        {
          "name": "Accuracy + Lv3",
          "value": 9,
          "type": "flat",
          "duration": 9
        }
      ]
    },
    {
      "rank": 4,
      "name": "Hope everyone's feelings reach ",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to all allies and inflicts Count-Based Recovery Shield(LV 1) for 20 secondsand BlockUP(LV 1) for 10 seconds",
      "effect": "3000% + 1000",
      "buffEffects": [
        {
          "name": "Count-Based Recovery Shield Lv1",
          "value": 40,
          "type": "percent",
          "duration": 20
        },
        {
          "name": "Block+ Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Hope everyone's feelings reach ",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by to all allies and inflicts Count-Based Recovery Shield(LV 2) for 20 secondsand BlockUP(LV 2) for 10 seconds",
      "effect": "3400% + 1300",
      "buffEffects": [
        {
          "name": "Count-Based Recovery Shield Lv2",
          "value": 45,
          "type": "percent",
          "duration": 20
        },
        {
          "name": "Block+ Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Accuracy +",
      "icon": "skill001/skill1007",
      "effect": "Max HP + (+1447), Accuracy + (+15)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 1447,
          "type": "flat"
        },
        {
          "name": "Accuracy +",
          "value": 15,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Action Speed +",
      "icon": "skill001/skill1005",
      "effect": "Skill Damage + (+20%), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Purehearted Pâtissière: Frey",
  "id": 2109,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 2926,
    "ATK": 291,
    "MATK": 174,
    "DEF": 35,
    "MDEF": 14
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.82"
  },
  "slug": "purehearted-pâtissière-frey"
};

export const stats = {
  "id": "purehearted-pâtissière-frey",
  "characterId": 2109,
  "name": "【Purehearted Pâtissière】Frey",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 2926,
      "lv90": 14632
    },
    "atk": {
      "base": 291,
      "lv90": 1455
    },
    "matk": {
      "base": 174,
      "lv90": 872
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
      "base": 55,
      "lv90": 165
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
      "base": 146,
      "lv90": 511
    },
    "mpRegen": {
      "base": 62,
      "lv90": 249
    },
    "healPwr": {
      "base": 117,
      "lv90": 293
    },
    "mpCharge": {
      "base": 80,
      "lv90": 80
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
      "HP": 878,
      "ATK": 87,
      "Block": 17,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 1010,
      "ATK": 100,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 1185,
      "ATK": 118,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1317,
      "ATK": 131,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 2488,
      "ATK": 247,
      "DEF": 10,
      "MDEF": 3,
      "Heal Pwr": 34
    },
    "total": {
      "HP": 6878,
      "ATK": 683,
      "Block": 83,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 10,
      "MDEF": 3,
      "Heal Pwr": 34
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 300
    },
    "gp2": {
      "HP": 300,
      "MP Cost Down": 3
    },
    "gp3": {
      "HP": 750,
      "MP Cost Down": 3
    },
    "gp4": {
      "HP": 750,
      "MP Cost Down": 5
    },
    "gp5": {
      "HP": 1200,
      "MP Cost Down": 5
    },
    "gp6": {
      "HP": 1200,
      "MP Cost Down": 6
    },
    "gp7": {
      "HP": 1650,
      "MP Cost Down": 6
    },
    "gp8": {
      "HP": 1650,
      "MP Cost Down": 7
    },
    "gp9": {
      "HP": 2100,
      "MP Cost Down": 7
    },
    "gp10": {
      "HP": 2100,
      "MP Cost Down": 8
    },
    "total": {
      "HP": 2100,
      "MP Cost Down": 8
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 308,
      "ATK": 31,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 370,
      "ATK": 37,
      "Phys Crit": 1,
      "Block": 17
    },
    "g3": {
      "HP": 431,
      "ATK": 43,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 493,
      "ATK": 49,
      "Phys Crit": 2,
      "Block": 23
    },
    "g5": {
      "HP": 555,
      "ATK": 55,
      "Phys Crit": 2,
      "MP Charge": 5
    },
    "g6": {
      "HP": 616,
      "ATK": 61,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 678,
      "ATK": 67,
      "Phys Crit": 2,
      "Block": 32
    },
    "g8": {
      "HP": 739,
      "ATK": 74,
      "Phys Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 801,
      "ATK": 80,
      "Phys Crit": 3,
      "Block": 38
    },
    "g10": {
      "HP": 863,
      "ATK": 86,
      "Phys Crit": 3,
      "MP Charge": 7
    },
    "total": {
      "HP": 863,
      "ATK": 86,
      "Phys Crit": 3,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Charge": 1
    },
    {
      "grade": 2,
      "Heal Pwr": 6
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "Heal Pwr": 8
    },
    {
      "grade": 5,
      "MP Charge": 2
    },
    {
      "grade": 6,
      "Heal Pwr": 10
    },
    {
      "grade": 7,
      "MP Charge": 3
    },
    {
      "grade": 8,
      "Heal Pwr": 12
    },
    {
      "grade": 9,
      "MP Charge": 3
    },
    {
      "grade": 10,
      "Heal Pwr": 14
    },
    {
      "grade": 11,
      "MP Charge": 3
    }
  ]
};;;;;;;;
