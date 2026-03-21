// Character data: ハニス
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "ハニス",
  "name": "ハニス",
  "displayName": "ハニス",
  "baseName": "ハニス",
  "title": null,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slow",
  "range": 240,
  "weaponType": "Pierce",
  "skillTypes": [
    "弱體化、妨害、MP回復"
  ],
  "image": "ハニス",
  "introduction": null,
  "profile": {
    "height": "167cm",
    "bust": "108cm (L Cup)",
    "waist": "63cm",
    "hips": "93cm"
  },
  "credits": {
    "illustration": {
      "japanese": "London犬",
      "romanized": ""
    },
    "voice": {
      "japanese": "高梨はなみ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2229
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Annihilation Lance",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Dispel for 1 seconds , on activation,self6 Physical Attack +40 UP",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Dispel for 1 seconds , on activation,self6 Physical Attack +40 UP",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Dispel for 1 seconds , on activation,self6 Physical Attack +850 UP",
      "target": "Nearest Enemy",
      "castTime": 1.2,
      "damageScaling": "350% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+20",
      "lvl1": "350% + 300",
      "lvl90": "350% + 1101",
      "effects": [
        "Cleanse",
        "Physical Attack + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
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
      "name": "Interception Stance",
      "icon": "skill001/skill0019",
      "description": "all allies10 Hit-Based Magic Hit-Based Shield(+5 hit(s)) and Magic Defense+170 UP for 10 seconds , 10 Magic Reflect Shield(+300, 999 hit(s))",
      "descriptionLv1": "all allies10 Hit-Based Magic Hit-Based Shield(+5 hit(s)) and Magic Defense+170 UP for 10 seconds , 10 Magic Reflect Shield(+300, 999 hit(s))",
      "descriptionLv90": "all allies10 Hit-Based Magic Hit-Based Shield(+5 hit(s)) and Magic Defense+350 UP for 10 seconds , 10 Magic Reflect Shield(+300, 27999 hit(s))",
      "target": "All Allies",
      "castTime": 1.3,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Hit-Based Magic Hit-Based Shield Lv5",
        "Magic Defense+ Lv4",
        "Magic Reflect Shield Lv4"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Magic Hit-Based Shield Lv5",
          "value": 35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Defense+ Lv4",
          "value": 170,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 2.0
        },
        {
          "name": "Magic Reflect Shield Lv4",
          "value": 999,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 300.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "<ruby=></ruby>",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit and inflicts Physical Defense DOWN(LV 1) for 10 seconds, on Ultimate activation,self10 Physical Critical DamageUP(LV 1)",
      "effect": "1100% + 1000",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Critical Damage+ Ultimate Lv1",
          "value": 300,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Annihilation Lance",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Dispel for 1 seconds , on activation,self6 Physical Attack +40 UP",
      "effect": "350% + 300",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Interception Stance",
      "icon": "skill001/skill0019",
      "description": "all allies10 Hit-Based Magic Hit-Based Shield(+5 hit(s)) and Magic Defense+170 UP for 10 seconds , 10 Magic Reflect Shield(+300, 999 hit(s))",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Hit-Based Magic Hit-Based Shield Lv5",
          "value": 35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Defense+ Lv4",
          "value": 170,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Reflect Shield Lv4",
          "value": 999,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "<ruby=></ruby>",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit and inflicts Physical Defense DOWN(LV 1) for 10 seconds, on Ultimate activation,self10 Physical Critical DamageUP(LV 1)",
      "effect": "1100% + 1000",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Critical Damage+ Ultimate Lv1",
          "value": 300,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "<ruby=></ruby>",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit and inflicts Physical Defense DOWN(LV 2) for 10 seconds, on Ultimate activation,self10 Physical Critical DamageUP(LV 2)",
      "effect": "1320% + 1300",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -25,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Critical Damage+ Ultimate Lv2",
          "value": 350,
          "type": "percent",
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
      "effect": "Action Speed + (+15), MP Recovery (+200%)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 15,
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
  "name": "ハニス",
  "id": 2229,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "弱體化、妨害、MP回復"
  ],
  "baseStats": {
    "HP": 1546,
    "ATK": 361,
    "MATK": 217,
    "DEF": 222,
    "MDEF": 222
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Skill3 → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.1"
  },
  "slug": "ハニス"
};

export const stats = {
  "id": "ハニス",
  "characterId": 2229,
  "name": "ハニス",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "弱體化、妨害、MP回復"
  ],
  "baseStats": {
    "hp": {
      "base": 1546,
      "lv90": 7730
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
      "base": 222,
      "lv90": 333
    },
    "mdef": {
      "base": 222,
      "lv90": 428
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
      "base": 80,
      "lv90": 273
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
      "base": 71,
      "lv90": 71
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
      "ATK": 108,
      "Block": 15,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 533,
      "ATK": 125,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 626,
      "ATK": 146,
      "Block": 20,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 696,
      "ATK": 163,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1315,
      "ATK": 335,
      "DEF": 53,
      "MDEF": 43,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3634,
      "ATK": 877,
      "Block": 75,
      "MP Charge": 16,
      "Accuracy": 30,
      "DEF": 53,
      "MDEF": 43,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 30
    },
    "gp2": {
      "ATK": 30,
      "MP Cost Down": 3
    },
    "gp3": {
      "ATK": 90,
      "MP Cost Down": 3
    },
    "gp4": {
      "ATK": 90,
      "MP Cost Down": 5
    },
    "gp5": {
      "ATK": 130,
      "MP Cost Down": 5
    },
    "gp6": {
      "ATK": 130,
      "MP Cost Down": 6
    },
    "gp7": {
      "ATK": 170,
      "MP Cost Down": 6
    },
    "gp8": {
      "ATK": 170,
      "MP Cost Down": 7
    },
    "gp9": {
      "ATK": 210,
      "MP Cost Down": 7
    },
    "gp10": {
      "ATK": 210,
      "MP Cost Down": 8
    },
    "total": {
      "ATK": 210,
      "MP Cost Down": 8
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 163,
      "ATK": 38,
      "Phys Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 195,
      "ATK": 46,
      "Phys Crit": 3,
      "Block": 16
    },
    "g3": {
      "HP": 228,
      "ATK": 53,
      "Phys Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 260,
      "ATK": 61,
      "Phys Crit": 4,
      "Block": 21
    },
    "g5": {
      "HP": 293,
      "ATK": 69,
      "Phys Crit": 5,
      "MP Charge": 6
    },
    "g6": {
      "HP": 326,
      "ATK": 76,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 358,
      "ATK": 84,
      "Phys Crit": 6,
      "Block": 29
    },
    "g8": {
      "HP": 391,
      "ATK": 91,
      "Phys Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 423,
      "ATK": 99,
      "Phys Crit": 7,
      "Block": 34
    },
    "g10": {
      "HP": 456,
      "ATK": 107,
      "Phys Crit": 7,
      "MP Charge": 9
    },
    "total": {
      "HP": 456,
      "ATK": 107,
      "Phys Crit": 7,
      "MP Charge": 9
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
      "MP Charge": 2
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
      "ATK": 90
    }
  ]
};;;;;;;;
