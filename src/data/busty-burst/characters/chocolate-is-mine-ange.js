// Character data: chocolate-is-mine-ange
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "chocolate-is-mine-ange",
  "name": "Chocolate Is Mine♪: Ange",
  "displayName": "Chocolate Is Mine♪: Ange",
  "baseName": "Ange",
  "title": "Chocolate Is Mine♪",
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 530,
  "weaponType": "Ranged",
  "skillTypes": [
    "Heal",
    "Buff",
    "Disrupt"
  ],
  "image": "Ange",
  "introduction": "Back Row、Magical、Attacker",
  "profile": {
    "height": "170cm",
    "bust": "112cm (L Cup)",
    "waist": "63cm",
    "hips": "98cm"
  },
  "credits": {
    "illustration": {
      "japanese": "翠野タヌキ",
      "romanized": ""
    },
    "voice": {
      "japanese": "伊ヶ崎綾香",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2199
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Bitter Grossular",
      "icon": "skill001/skill0010",
      "description": "Deals magic damage to the nearest enemy and inflicts Burn(HP --150 per second) for 15 seconds and Block-11 DOWN for 6 seconds , 6 Magic Defense-21%-40 DOWN",
      "descriptionLv1": "Deals magic damage to the nearest enemy and inflicts Burn(HP --150 per second) for 15 seconds and Block-11 DOWN for 6 seconds , 6 Magic Defense-21%-40 DOWN",
      "descriptionLv90": "Deals magic damage to the nearest enemy and inflicts Burn(HP --1500 per second) for 15 seconds and Block-23 DOWN for 6 seconds , 6 Magic Defense-21%-220 DOWN",
      "target": "Nearest Enemy",
      "castTime": 1.25,
      "damageScaling": "370% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "370% + 500",
      "lvl90": "370% + 322",
      "effects": [
        "Burn Lv5",
        "Block- Lv4",
        "Magic Defense- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Burn Lv5",
          "value": -150,
          "type": "flat",
          "duration": 15,
          "levelGrowth": -15.0
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.13
        },
        {
          "name": "Magic Defense- Lv4",
          "value": -40,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        }
      ],
      "duration": 15
    },
    {
      "slot": 3,
      "name": "Sweet Ring",
      "icon": "skill001/skill0019",
      "description": "Applies Fire Type ATK 15%UP to all allies for 10 seconds and Magic Critical Damage 50 UP for 10 seconds",
      "descriptionLv1": "Applies Fire Type ATK 15%UP to all allies for 10 seconds and Magic Critical Damage 50 UP for 10 seconds",
      "descriptionLv90": "Applies Fire Type ATK 15%UP to all allies for 10 seconds and Magic Critical Damage 680 UP for 10 seconds",
      "target": "All Allies",
      "castTime": 1.3,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Fire Type ATK + Lv4",
        "Magic Critical Damage+ Lv4"
      ],
      "buffEffects": [
        {
          "name": "Fire Type ATK + Lv4",
          "value": 15,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage+ Lv4",
          "value": 50,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 7.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "I offer the supreme light. Ignite myself, unto eternity",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Burn(LV 1) for 15 seconds, 3s Stun for, 10 Magic Defense DOWN(LV 1)",
      "effect": "390% + 400",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv1",
          "value": -1000,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
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
      "name": "I offer the supreme light. Ignite myself, unto eternity",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Burn(LV 2) for 15 seconds, 4s Stun for, 10 Magic Defense DOWN(LV 2)",
      "effect": "459% + 600",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv2",
          "value": -1500,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 4
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
      "name": "I offer the supreme light. Ignite myself, unto eternity",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Burn(LV 3) for 15 seconds, 4s Stun for, 10 Magic Defense DOWN(LV 3)",
      "effect": "509% + 750",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv3",
          "value": -1900,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 4
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
      "name": "I offer the supreme light. Ignite myself, unto eternity",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Burn(LV 4) for 15 seconds, 5s Stun for, 10 Magic Defense DOWN(LV 4)",
      "effect": "550% + 900",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv4",
          "value": -2200,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 5
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
      "name": "I offer the supreme light. Ignite myself, unto eternity",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Burn(LV 5) for 15 seconds, 5s Stun for, 10 Magic Defense DOWN(LV 5)",
      "effect": "570% + 1000",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv5",
          "value": -2500,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 5
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
      "name": "Action Speed +, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+15)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Magic Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Magic Critical Damage+ (+90)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Magic Critical Damage+",
          "value": 90,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Chocolate Is Mine♪: Ange",
  "id": 2199,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Heal",
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 179,
    "MATK": 299,
    "DEF": 52,
    "MDEF": 63
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.8"
  },
  "slug": "chocolate-is-mine-ange"
};

export const stats = {
  "id": "chocolate-is-mine-ange",
  "characterId": 2199,
  "name": "【Chocolate Is Mine♪】Ange",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Heal",
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2092,
      "lv90": 10460
    },
    "atk": {
      "base": 179,
      "lv90": 896
    },
    "matk": {
      "base": 299,
      "lv90": 1495
    },
    "def": {
      "base": 52,
      "lv90": 104
    },
    "mdef": {
      "base": 63,
      "lv90": 126
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
      "base": 124,
      "lv90": 198
    },
    "magicCrit": {
      "base": 207,
      "lv90": 331
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
      "HP": 628,
      "MATK": 90,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 722,
      "MATK": 103,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 847,
      "MATK": 121,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 941,
      "MATK": 135,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1779,
      "MATK": 277,
      "DEF": 11,
      "MDEF": 20,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4917,
      "MATK": 726,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 11,
      "MDEF": 20,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 40
    },
    "gp2": {
      "MATK": 40,
      "Magic Crit": 10
    },
    "gp3": {
      "MATK": 120,
      "Magic Crit": 10
    },
    "gp4": {
      "MATK": 120,
      "Magic Crit": 30
    },
    "gp5": {
      "MATK": 200,
      "Magic Crit": 30
    },
    "gp6": {
      "MATK": 200,
      "Magic Crit": 50
    },
    "gp7": {
      "MATK": 280,
      "Magic Crit": 50
    },
    "gp8": {
      "MATK": 280,
      "Magic Crit": 70
    },
    "gp9": {
      "MATK": 360,
      "Magic Crit": 70
    },
    "gp10": {
      "MATK": 360,
      "Magic Crit": 90
    },
    "total": {
      "MATK": 360,
      "Magic Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 220,
      "MATK": 31,
      "MDEF": 4,
      "Magic Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 264,
      "MATK": 38,
      "MDEF": 4,
      "Magic Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 308,
      "MATK": 44,
      "MDEF": 5,
      "Magic Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 352,
      "MATK": 50,
      "MDEF": 6,
      "Magic Crit": 7,
      "Block": 21
    },
    "g5": {
      "HP": 396,
      "MATK": 57,
      "MDEF": 7,
      "Magic Crit": 8,
      "MP Charge": 5
    },
    "g6": {
      "HP": 440,
      "MATK": 63,
      "MDEF": 7,
      "Magic Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 484,
      "MATK": 69,
      "MDEF": 8,
      "Magic Crit": 10,
      "Block": 29
    },
    "g8": {
      "HP": 529,
      "MATK": 76,
      "MDEF": 9,
      "Magic Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 573,
      "MATK": 82,
      "MDEF": 10,
      "Magic Crit": 11,
      "Block": 34
    },
    "g10": {
      "HP": 617,
      "MATK": 88,
      "MDEF": 10,
      "Magic Crit": 12,
      "MP Charge": 7
    },
    "total": {
      "HP": 617,
      "MATK": 88,
      "MDEF": 10,
      "Magic Crit": 12,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Magic Crit": 7
    },
    {
      "grade": 2,
      "MATK": 27
    },
    {
      "grade": 3,
      "Magic Crit": 10
    },
    {
      "grade": 4,
      "MATK": 36
    },
    {
      "grade": 5,
      "Magic Crit": 12
    },
    {
      "grade": 6,
      "MATK": 45
    },
    {
      "grade": 7,
      "Magic Crit": 15
    },
    {
      "grade": 8,
      "MATK": 54
    },
    {
      "grade": 9,
      "Magic Crit": 18
    },
    {
      "grade": 10,
      "MATK": 63
    },
    {
      "grade": 11,
      "Magic Crit": 20
    }
  ]
};;;;;;;;
