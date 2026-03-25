// Character data: steaming-dim-sum-lilirara
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "steaming-dim-sum-lilirara",
  "name": "Steaming Dim Sum: Lilirara",
  "displayName": "Steaming Dim Sum: Lilirara",
  "baseName": "Lilirara",
  "title": "Steaming Dim Sum",
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 245,
  "weaponType": "Strike",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Heal"
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
      "japanese": "明里芽依",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2160
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Lucky Kick",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -21%-40 DOWN for 6 seconds and Block-9 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -21%-40 DOWN for 6 seconds and Block-9 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -21%-220 DOWN for 6 seconds and Block-18 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.95,
      "damageScaling": "330% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "330% + 500",
      "lvl90": "330% + 491",
      "effects": [
        "Physical Defense - Lv4",
        "Block- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        },
        {
          "name": "Block- Lv3",
          "value": -9,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.1
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Eat lots, meow~♪",
      "icon": "skill001/skill0019",
      "description": "Applies HP Regeneration 4%+100 to all allies for 10 seconds and Hit-Based Physical Damage UP(40%+450, 3 hit(s)) for 15 seconds",
      "descriptionLv1": "Applies HP Regeneration 4%+100 to all allies for 10 seconds and Hit-Based Physical Damage UP(40%+450, 3 hit(s)) for 15 seconds",
      "descriptionLv90": "Applies HP Regeneration 4%+100 to all allies for 10 seconds and Hit-Based Physical Damage UP(40%+450, 40503 hit(s)) for 15 seconds",
      "target": "All Allies",
      "castTime": 0.95,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "HP Regeneration+ Lv2",
        "Hit-Based Physical Damage +"
      ],
      "buffEffects": [
        {
          "name": "HP Regeneration+ Lv2",
          "value": 4,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 6.0
        },
        {
          "name": "Hit-Based Physical Damage +",
          "value": 3,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 450.0
        }
      ],
      "duration": 15
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Lucky Fortune Feast Kick",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Burn(LV 1) for 15 seconds and Fire Type Damage Taken UP(LV 1) for 8 seconds",
      "effect": "1100% + 900",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv1",
          "value": -1500,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Lucky Fortune Feast Kick",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Burn(LV 2) for 15 seconds and Fire Type Damage Taken UP(LV 2) for 8 seconds",
      "effect": "1320% + 1050",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv2",
          "value": -2000,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Lucky Fortune Feast Kick",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Burn(LV 3) for 15 seconds and Fire Type Damage Taken UP(LV 3) for 8 seconds",
      "effect": "1470% + 1200",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv3",
          "value": -2400,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Lucky Fortune Feast Kick",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Burn(LV 4) for 15 seconds and Fire Type Damage Taken UP(LV 4) for 8 seconds",
      "effect": "1590% + 1300",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv4",
          "value": -2700,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Lucky Fortune Feast Kick",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Burn(LV 5) for 15 seconds and Fire Type Damage Taken UP(LV 5) for 8 seconds",
      "effect": "1700% + 1400",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv5",
          "value": -3000,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Fire Type Damage Taken+ Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Healing Received +, Skill Enhancement",
      "icon": "skill001/skill1008",
      "effect": "Healing Received + (+10%)",
      "effectValues": [
        {
          "name": "Healing Received +",
          "value": 10,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Physical Critical Damage+ (+90%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
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
  "name": "Steaming Dim Sum: Lilirara",
  "id": 2160,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Heal"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 281,
    "MATK": 168,
    "DEF": 60,
    "MDEF": 54
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.55"
  },
  "slug": "steaming-dim-sum-lilirara"
};

export const stats = {
  "id": "steaming-dim-sum-lilirara",
  "characterId": 2160,
  "name": "【Steaming Dim Sum】Lilirara",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Heal"
  ],
  "baseStats": {
    "hp": {
      "base": 2092,
      "lv90": 10460
    },
    "atk": {
      "base": 281,
      "lv90": 1405
    },
    "matk": {
      "base": 168,
      "lv90": 843
    },
    "def": {
      "base": 60,
      "lv90": 129
    },
    "mdef": {
      "base": 54,
      "lv90": 100
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
      "base": 125,
      "lv90": 200
    },
    "magicCrit": {
      "base": 75,
      "lv90": 120
    },
    "hpRegen": {
      "base": 104,
      "lv90": 365
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
      "HP": 628,
      "ATK": 84,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 722,
      "ATK": 97,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 847,
      "ATK": 114,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 941,
      "ATK": 127,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1779,
      "ATK": 260,
      "DEF": 20,
      "MDEF": 10
    },
    "total": {
      "HP": 4917,
      "ATK": 682,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 20,
      "MDEF": 10
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "Phys Crit": 10
    },
    "gp3": {
      "ATK": 120,
      "Phys Crit": 10
    },
    "gp4": {
      "ATK": 120,
      "Phys Crit": 30
    },
    "gp5": {
      "ATK": 200,
      "Phys Crit": 30
    },
    "gp6": {
      "ATK": 200,
      "Phys Crit": 50
    },
    "gp7": {
      "ATK": 280,
      "Phys Crit": 50
    },
    "gp8": {
      "ATK": 280,
      "Phys Crit": 70
    },
    "gp9": {
      "ATK": 360,
      "Phys Crit": 70
    },
    "gp10": {
      "ATK": 360,
      "Phys Crit": 90
    },
    "total": {
      "ATK": 360,
      "Phys Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 220,
      "ATK": 30,
      "Phys Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 264,
      "ATK": 36,
      "Phys Crit": 3,
      "Block": 16
    },
    "g3": {
      "HP": 308,
      "ATK": 41,
      "Phys Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 352,
      "ATK": 47,
      "Phys Crit": 4,
      "Block": 21
    },
    "g5": {
      "HP": 396,
      "ATK": 53,
      "Phys Crit": 5,
      "MP Charge": 4
    },
    "g6": {
      "HP": 440,
      "ATK": 59,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 484,
      "ATK": 65,
      "Phys Crit": 6,
      "Block": 29
    },
    "g8": {
      "HP": 529,
      "ATK": 71,
      "Phys Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 573,
      "ATK": 77,
      "Phys Crit": 7,
      "Block": 34
    },
    "g10": {
      "HP": 617,
      "ATK": 83,
      "Phys Crit": 7,
      "MP Charge": 6
    },
    "total": {
      "HP": 617,
      "ATK": 83,
      "Phys Crit": 7,
      "MP Charge": 6
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 23
    },
    {
      "grade": 2,
      "Phys Crit": 5
    },
    {
      "grade": 3,
      "ATK": 33
    },
    {
      "grade": 4,
      "Phys Crit": 6
    },
    {
      "grade": 5,
      "ATK": 42
    },
    {
      "grade": 6,
      "Phys Crit": 8
    },
    {
      "grade": 7,
      "ATK": 52
    },
    {
      "grade": 8,
      "Phys Crit": 9
    },
    {
      "grade": 9,
      "ATK": 61
    },
    {
      "grade": 10,
      "Phys Crit": 11
    },
    {
      "grade": 11,
      "ATK": 68
    }
  ]
};;;;;;;;
