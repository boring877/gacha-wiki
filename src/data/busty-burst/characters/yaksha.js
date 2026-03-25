// Character data: yaksha
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "yaksha",
  "name": "Yaksha",
  "displayName": "Yaksha",
  "baseName": "Yaksha",
  "title": null,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Slow",
  "range": 230,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Yaksha",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "176cm",
    "bust": "110cm (I Cup)",
    "waist": "68cm",
    "hips": "101cm"
  },
  "credits": {
    "illustration": {
      "japanese": "かわはぎさかな",
      "romanized": ""
    },
    "voice": {
      "japanese": "綾音まこ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2124
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Fly Buzz",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Hit-Based Shield(200) for 10 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Hit-Based Shield(200) for 10 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Hit-Based Shield(200) for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.45,
      "damageScaling": "320% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+25",
      "lvl1": "320% + 500",
      "lvl90": null,
      "effects": [
        "Hit-Based Shield"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Shield",
          "value": 200,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Oni Heart Drain",
      "icon": "skill001/skill0019",
      "description": "apply to self20 HP --5% per second (Cannot be Cleansed) and inflicts Physical Attack 25%+50 UP for 20 seconds and Action Speed 20%UP for 20 seconds",
      "descriptionLv1": "apply to self20 HP --5% per second (Cannot be Cleansed) and inflicts Physical Attack 25%+50 UP for 20 seconds and Action Speed 20%UP for 20 seconds",
      "descriptionLv90": "apply to self20 HP --5% per second (Cannot be Cleansed) and inflicts Physical Attack 25%+950 UP for 20 seconds and Action Speed 20%UP for 20 seconds",
      "target": "Self",
      "castTime": 1.45,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + LvMax",
        "Action Speed + Lv5",
        "HP Degeneration"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + LvMax",
          "value": 50,
          "type": "flat",
          "duration": 20,
          "levelGrowth": 10.0
        },
        {
          "name": "Action Speed + Lv5",
          "value": 20,
          "type": "flat",
          "duration": 20
        },
        {
          "name": "HP Degeneration",
          "value": -5,
          "type": "percent",
          "duration": 20
        }
      ],
      "duration": 20
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Night after Night Falling Cherry Blossoms",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical DefenseDOWN(LV 1) for 10 seconds and BlockDOWN(LV 1) for 10 seconds , deal 6%damagerestore own HPHP",
      "effect": "900% + 800",
      "buffEffects": [
        {
          "name": "Physical Defense- Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
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
      "name": "Night after Night Falling Cherry Blossoms",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical DefenseDOWN(LV 2) for 10 seconds and BlockDOWN(LV 2) for 10 seconds , deal 6%damagerestore own HPHP",
      "effect": "1080% + 1000",
      "buffEffects": [
        {
          "name": "Physical Defense- Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
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
      "name": "Night after Night Falling Cherry Blossoms",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical DefenseDOWN(LV 3) for 10 seconds and BlockDOWN(LV 3) for 10 seconds , deal 6%damagerestore own HPHP",
      "effect": "1215% + 1150",
      "buffEffects": [
        {
          "name": "Physical Defense- Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
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
      "name": "Night after Night Falling Cherry Blossoms",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical DefenseDOWN(LV 4) for 10 seconds and BlockDOWN(LV 4) for 10 seconds , deal 6%damagerestore own HPHP",
      "effect": "1310% + 1300",
      "buffEffects": [
        {
          "name": "Physical Defense- Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
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
      "name": "Night after Night Falling Cherry Blossoms",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical DefenseDOWN(LV 5) for 10 seconds and BlockDOWN(LV 5) for 10 seconds , deal 6%damagerestore own HPHP",
      "effect": "1400% + 1400",
      "buffEffects": [
        {
          "name": "Physical Defense- Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
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
      "name": "Action Speed +, Hit-Based Shield",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+15), Hit-Based Shield (+30%)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "flat"
        },
        {
          "name": "Hit-Based Shield",
          "value": 30,
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
  "name": "Yaksha",
  "id": 2124,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1546,
    "ATK": 336,
    "MATK": 201,
    "DEF": 158,
    "MDEF": 158
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Basic → Skill2",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.25"
  },
  "slug": "yaksha"
};

export const stats = {
  "id": "yaksha",
  "characterId": 2124,
  "name": "Yaksha",
  "rarity": "SSR",
  "element": "魔",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1546,
      "lv90": 11005
    },
    "atk": {
      "base": 336,
      "lv90": 1681
    },
    "matk": {
      "base": 201,
      "lv90": 1008
    },
    "def": {
      "base": 158,
      "lv90": 316
    },
    "mdef": {
      "base": 158,
      "lv90": 316
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
      "base": 207,
      "lv90": 331
    },
    "magicCrit": {
      "base": 124,
      "lv90": 198
    },
    "hpRegen": {
      "base": 77,
      "lv90": 372
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
      "base": 65,
      "lv90": 65
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
      "ATK": 101,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 533,
      "ATK": 116,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 626,
      "ATK": 136,
      "Block": 20,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 696,
      "ATK": 151,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1430,
      "ATK": 311,
      "DEF": 5,
      "MDEF": 32,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 3749,
      "ATK": 815,
      "Block": 75,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 5,
      "MDEF": 32,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "Phys Crit": 20
    },
    "gp3": {
      "ATK": 120,
      "Phys Crit": 20
    },
    "gp4": {
      "ATK": 120,
      "Phys Crit": 50
    },
    "gp5": {
      "ATK": 200,
      "Phys Crit": 50
    },
    "gp6": {
      "ATK": 200,
      "Phys Crit": 80
    },
    "gp7": {
      "ATK": 280,
      "Phys Crit": 80
    },
    "gp8": {
      "ATK": 360,
      "Phys Crit": 110
    },
    "gp9": {
      "ATK": 360,
      "Phys Crit": 110
    },
    "gp10": {
      "ATK": 360,
      "Phys Crit": 140
    },
    "total": {
      "ATK": 360,
      "Phys Crit": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 163,
      "ATK": 35,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 195,
      "ATK": 42,
      "Phys Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 228,
      "ATK": 50,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 260,
      "ATK": 57,
      "Phys Crit": 7,
      "Block": 21
    },
    "g5": {
      "HP": 293,
      "ATK": 64,
      "Phys Crit": 8,
      "MP Charge": 6
    },
    "g6": {
      "HP": 326,
      "ATK": 71,
      "Phys Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 358,
      "ATK": 78,
      "Phys Crit": 10,
      "Block": 29
    },
    "g8": {
      "HP": 391,
      "ATK": 85,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 423,
      "ATK": 92,
      "Phys Crit": 11,
      "Block": 34
    },
    "g10": {
      "HP": 456,
      "ATK": 99,
      "Phys Crit": 12,
      "MP Charge": 9
    },
    "total": {
      "HP": 456,
      "ATK": 99,
      "Phys Crit": 12,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 129
    },
    {
      "grade": 2,
      "ATK": 30
    },
    {
      "grade": 3,
      "HP": 180
    },
    {
      "grade": 4,
      "ATK": 40
    },
    {
      "grade": 5,
      "HP": 232
    },
    {
      "grade": 6,
      "ATK": 50
    },
    {
      "grade": 7,
      "HP": 283
    },
    {
      "grade": 8,
      "ATK": 61
    },
    {
      "grade": 9,
      "HP": 335
    },
    {
      "grade": 10,
      "ATK": 71
    },
    {
      "grade": 11,
      "HP": 352
    }
  ]
};;;;;;;;
