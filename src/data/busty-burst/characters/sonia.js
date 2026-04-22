// Character data: sonia
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "sonia",
  "name": "Sonia",
  "displayName": "Sonia",
  "baseName": "Sonia",
  "title": null,
  "rarity": "SSR",
  "element": "Light",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 220,
  "weaponType": "Slash",
  "skillTypes": [
    "Buff",
    "Debuff"
  ],
  "image": "Sonia",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "166cm",
    "bust": "100cm (I Cup)",
    "waist": "62cm",
    "hips": "95cm"
  },
  "credits": {
    "illustration": {
      "japanese": "西條サトル",
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
  "characterId": 2215
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Pride - Rainbow Light",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, activation beforeApplies Physical Attack 20%+40 UP to self for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy, activation beforeApplies Physical Attack 20%+40 UP to self for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy, activation beforeApplies Physical Attack 20%+850 UP to self for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.85,
      "damageScaling": "330% ATK",
      "baseDamage": "+600",
      "levelGrowth": "+25",
      "lvl1": "330% + 600",
      "lvl90": "330% + 1401",
      "effects": [
        "Physical Attack + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 6,
          "levelGrowth": 9.0
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Oath to Lord Ded",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage 60 UP to self for 10 seconds and Action Speed 17%UP for 10 seconds , all allies10 Hit-Based Physical Damage UP(40%+450, 3 hit(s))",
      "descriptionLv1": "Applies Physical Critical Damage 60 UP to self for 10 seconds and Action Speed 17%UP for 10 seconds , all allies10 Hit-Based Physical Damage UP(40%+450, 3 hit(s))",
      "descriptionLv90": "Applies Physical Critical Damage 60 UP to self for 10 seconds and Action Speed 17%UP for 10 seconds , all allies10 Hit-Based Physical Damage UP(40%+450, 40503 hit(s))",
      "target": "Self",
      "castTime": 0.95,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv5",
        "Action Speed + Lv4",
        "Hit-Based Physical Damage + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv5",
          "value": 60,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 9.0
        },
        {
          "name": "Action Speed + Lv4",
          "value": 17,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Hit-Based Physical Damage + Lv3",
          "value": 3,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 450.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Regis Regalia",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Holy Type Damage Taken UP(LV 1) for 10 seconds, and before activating the Ultimate,apply to self10 Physical Attack UP(LV 1)",
      "effect": "1000% + 1200",
      "buffEffects": [
        {
          "name": "Holy Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Regis Regalia",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Holy Type Damage Taken UP(LV 2) for 10 seconds, and before activating the Ultimate,apply to self10 Physical Attack UP(LV 2)",
      "effect": "1200% + 1500",
      "buffEffects": [
        {
          "name": "Holy Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Physical Attack + Ultimate Lv2",
          "value": 25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Regis Regalia",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Holy Type Damage Taken UP(LV 3) for 10 seconds, and before activating the Ultimate,apply to self10 Physical Attack UP(LV 3)",
      "effect": "1250% + 1750",
      "buffEffects": [
        {
          "name": "Holy Type Damage Taken+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Physical Attack + Ultimate Lv3",
          "value": 29,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Regis Regalia",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Holy Type Damage Taken UP(LV 4) for 10 seconds, and before activating the Ultimate,apply to self10 Physical Attack UP(LV 4)",
      "effect": "1350% + 2000",
      "buffEffects": [
        {
          "name": "Holy Type Damage Taken+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Physical Attack + Ultimate Lv4",
          "value": 32,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Regis Regalia",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Holy Type Damage Taken UP(LV 5) for 10 seconds, and before activating the Ultimate,apply to self10 Physical Attack UP(LV 5)",
      "effect": "1450% + 2200",
      "buffEffects": [
        {
          "name": "Holy Type Damage Taken+ Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Physical Attack + Ultimate Lv5",
          "value": 35,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Holy Type ATK +, Damage UP",
      "icon": "skill001/skill1001",
      "effect": "Holy Type ATK + (+3%), Damage UP (+9999%)",
      "effectValues": [
        {
          "name": "Holy Type ATK +",
          "value": 3,
          "type": "percent"
        },
        {
          "name": "Damage UP",
          "value": 9999,
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
  "name": "Sonia",
  "id": 2215,
  "rarity": "SSR",
  "element": "Light",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 1546,
    "ATK": 281,
    "MATK": 168,
    "DEF": 127,
    "MDEF": 190
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.6"
  },
  "slug": "sonia"
};

export const stats = {
  "id": "sonia",
  "characterId": 2215,
  "name": "Sonia",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1546,
      "lv90": 7730
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
      "base": 127,
      "lv90": 254
    },
    "mdef": {
      "base": 190,
      "lv90": 380
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
      "base": 77,
      "lv90": 270
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
      "base": 51,
      "lv90": 51
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
      "HP": 464,
      "ATK": 84,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 533,
      "ATK": 97,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 626,
      "ATK": 114,
      "Block": 20,
      "MP Charge": 6
    },
    "lb4": {
      "HP": 696,
      "ATK": 127,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1315,
      "ATK": 260,
      "DEF": 45,
      "MDEF": 38,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3634,
      "ATK": 682,
      "Block": 75,
      "MP Charge": 11,
      "Accuracy": 30,
      "DEF": 45,
      "MDEF": 38,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "Phys Crit": 10
    },
    "gp2": {
      "ATK": 30,
      "Phys Crit": 10
    },
    "gp3": {
      "ATK": 30,
      "Phys Crit": 30
    },
    "gp4": {
      "ATK": 90,
      "Phys Crit": 30
    },
    "gp5": {
      "ATK": 90,
      "Phys Crit": 50
    },
    "gp6": {
      "ATK": 130,
      "Phys Crit": 50
    },
    "gp7": {
      "ATK": 130,
      "Phys Crit": 70
    },
    "gp8": {
      "ATK": 170,
      "Phys Crit": 70
    },
    "gp9": {
      "ATK": 170,
      "Phys Crit": 90
    },
    "gp10": {
      "ATK": 210,
      "Phys Crit": 90
    },
    "total": {
      "ATK": 210,
      "Phys Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 163,
      "ATK": 30,
      "Phys Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 195,
      "ATK": 36,
      "Phys Crit": 3,
      "Block": 16
    },
    "g3": {
      "HP": 228,
      "ATK": 41,
      "Phys Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 260,
      "ATK": 47,
      "Phys Crit": 4,
      "Block": 21
    },
    "g5": {
      "HP": 293,
      "ATK": 53,
      "Phys Crit": 5,
      "MP Charge": 4
    },
    "g6": {
      "HP": 326,
      "ATK": 59,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 358,
      "ATK": 65,
      "Phys Crit": 6,
      "Block": 29
    },
    "g8": {
      "HP": 391,
      "ATK": 71,
      "Phys Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 423,
      "ATK": 77,
      "Phys Crit": 7,
      "Block": 34
    },
    "g10": {
      "HP": 456,
      "ATK": 83,
      "Phys Crit": 7,
      "MP Charge": 7
    },
    "total": {
      "HP": 456,
      "ATK": 83,
      "Phys Crit": 7,
      "MP Charge": 7
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
