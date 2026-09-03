// Character data: 稀代の発明家-パステル
// Auto-generated from game data

export const info = {
  "slug": "peerless-inventor-pastel",
  "name": "[Peerless Inventor] Pastel",
  "displayName": "Peerless Inventor Pastel",
  "baseName": "Pastel",
  "title": "Peerless Inventor",
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slow",
  "range": 350,
  "weaponType": "Pierce",
  "skillTypes": [
    "弱體化、MP回復"
  ],
  "image": "パステル",
  "introduction": "Middle RowPhysicalAttacker",
  "profile": {
    "height": "160cm",
    "bust": "",
    "waist": "",
    "hips": ""
  },
  "credits": {
    "illustration": {
      "japanese": "Aotonbo",
      "romanized": ""
    },
    "voice": {
      "japanese": "小倉結衣",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2238
};








































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "ギガドリルアトミックパンチ",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to 1 nearest enemy, 6s Block-15 DOWN",
      "descriptionLv1": "Deals physical damage to 1 nearest enemy, 6s Block-15 DOWN",
      "descriptionLv90": "Deals physical damage to 1 nearest enemy, 6s Block-33 DOWN",
      "target": "Nearest Enemy",
      "castTime": 1.2,
      "damageScaling": "330% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "330% + 500",
      "lvl90": "330% + 482",
      "effects": [
        "Block- LvMax"
      ],
      "buffEffects": [
        {
          "name": "Block- LvMax",
          "value": -15,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.2
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Limiter Release",
      "icon": "skill001/skill0019",
      "description": "To self 12s'sPhysical Attack 20%+40 UP, 12s'sAction Speed 25%UP, 12s MP Regeneration 40, 12s after 3s's",
      "descriptionLv1": "To self 12s'sPhysical Attack 20%+40 UP, 12s'sAction Speed 25%UP, 12s MP Regeneration 40, 12s after 3s's",
      "descriptionLv90": "To self 12s'sPhysical Attack 20%+850 UP, 12s'sAction Speed 25%UP, 12s MP Regeneration 40, 12s after 3s's",
      "target": "Self",
      "castTime": 1.25,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv5",
        "Action Speed + LvMax",
        "MP Regeneration + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 9.0
        },
        {
          "name": "Action Speed + LvMax",
          "value": 25,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "MP Regeneration + Lv5",
          "value": 40,
          "type": "percent",
          "duration": 12
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "ハイパーギガマギノランチャー",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to 6 nearest enemies, 10s'sPhysical Defense DOWN(LV 1), on Ultimate activation, self 10s'sPhysical Critical DamageUP(LV 1)",
      "effect": "229% + 500",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "percent",
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
      "name": "ハイパーギガマギノランチャー",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to 6 nearest enemies, 10s'sPhysical Defense DOWN(LV 2), on Ultimate activation, self 10s'sPhysical Critical DamageUP(LV 2)",
      "effect": "270% + 650",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Physical Critical Damage+ Ultimate Lv2",
          "value": 350,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "ハイパーギガマギノランチャー",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to 6 nearest enemies, 10s'sPhysical Defense DOWN(LV 3), on Ultimate activation, self 10s'sPhysical Critical DamageUP(LV 3)",
      "effect": "310% + 800",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Physical Critical Damage+ Ultimate Lv3",
          "value": 400,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "ハイパーギガマギノランチャー",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to 6 nearest enemies, 10s'sPhysical Defense DOWN(LV 4), on Ultimate activation, self 10s'sPhysical Critical DamageUP(LV 4)",
      "effect": "345% + 900",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Physical Critical Damage+ Ultimate Lv4",
          "value": 450,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "ハイパーギガマギノランチャー",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to 6 nearest enemies, 10s'sPhysical Defense DOWN(LV 5), on Ultimate activation, self 10s'sPhysical Critical DamageUP(LV 5)",
      "effect": "370% + 1000",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Physical Critical Damage+ Ultimate Lv5",
          "value": 500,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Wind Type ATK +, Action Speed +",
      "icon": "skill001/skill1001",
      "description": "Gain Wind Type ATK UP (Cannot be Cleansed), Action Speed UP (Cannot be Cleansed)",
      "effect": "Wind Type ATK + (+4%)",
      "effectValues": [
        {
          "name": "Wind Type ATK +",
          "value": 4,
          "type": "percent",
          "gameText": "Wind Type ATK UP (Cannot be Cleansed)"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Action Speed +",
      "icon": "skill001/skill1001",
      "description": "Gain Ultimate Damage UP (Large), Action Speed UP (Medium)",
      "effect": "Ultimate Damage + (+15%), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent",
          "gameText": "Ultimate Damage UP (Large)"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat",
          "gameText": "Action Speed UP (Medium)"
        }
      ]
    }
  ],
  "name": "稀代の発明家: パステル",
  "id": 2238,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "弱體化、MP回復"
  ],
  "baseStats": {
    "HP": 1200,
    "ATK": 401,
    "MATK": 241,
    "DEF": 192,
    "MDEF": 288
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Skill2 → Basic → Skill2 → Basic → Basic → Skill3 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.15"
  },
  "slug": "稀代の発明家-パステル"
};

export const stats = {
  "id": "peerless-inventor-pastel",
  "characterId": 2238,
  "name": "[Peerless Inventor] Pastel",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "弱體化、MP回復"
  ],
  "baseStats": {
    "hp": {
      "base": 1200,
      "lv90": 6002
    },
    "atk": {
      "base": 401,
      "lv90": 2008
    },
    "matk": {
      "base": 241,
      "lv90": 1205
    },
    "def": {
      "base": 192,
      "lv90": 384
    },
    "mdef": {
      "base": 288,
      "lv90": 576
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
      "base": 60,
      "lv90": 210
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
      "base": 75,
      "lv90": 75
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
      "HP": 360,
      "ATK": 121,
      "Block": 17,
      "MP Charge": 8
    },
    "lb2": {
      "HP": 414,
      "ATK": 139,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 486,
      "ATK": 163,
      "Block": 22,
      "MP Charge": 10
    },
    "lb4": {
      "HP": 540,
      "ATK": 181,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1021,
      "ATK": 342,
      "DEF": 68,
      "MDEF": 58,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 2821,
      "ATK": 946,
      "Block": 83,
      "MP Charge": 18,
      "Accuracy": 30,
      "DEF": 68,
      "MDEF": 58,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Cost Down": 3
    },
    "gp2": {
      "Accuracy": 3,
      "MP Cost Down": 3
    },
    "gp3": {
      "Accuracy": 3,
      "MP Cost Down": 5
    },
    "gp4": {
      "Accuracy": 7,
      "MP Cost Down": 5
    },
    "gp5": {
      "Accuracy": 7,
      "MP Cost Down": 6
    },
    "gp6": {
      "Accuracy": 10,
      "MP Cost Down": 6
    },
    "gp7": {
      "Accuracy": 10,
      "MP Cost Down": 7
    },
    "gp8": {
      "Accuracy": 13,
      "MP Cost Down": 7
    },
    "gp9": {
      "Accuracy": 13,
      "MP Cost Down": 8
    },
    "gp10": {
      "Accuracy": 16,
      "MP Cost Down": 8
    },
    "total": {
      "Accuracy": 16,
      "MP Cost Down": 8
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 126,
      "ATK": 42,
      "Phys Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 152,
      "ATK": 51,
      "Phys Crit": 3,
      "Block": 17
    },
    "g3": {
      "HP": 177,
      "ATK": 59,
      "Phys Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 202,
      "ATK": 68,
      "Phys Crit": 4,
      "Block": 23
    },
    "g5": {
      "HP": 227,
      "ATK": 76,
      "Phys Crit": 5,
      "MP Charge": 6
    },
    "g6": {
      "HP": 253,
      "ATK": 85,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 278,
      "ATK": 93,
      "Phys Crit": 6,
      "Block": 32
    },
    "g8": {
      "HP": 303,
      "ATK": 102,
      "Phys Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 329,
      "ATK": 110,
      "Phys Crit": 7,
      "Block": 38
    },
    "g10": {
      "HP": 354,
      "ATK": 118,
      "Phys Crit": 7,
      "MP Charge": 9
    },
    "total": {
      "HP": 354,
      "ATK": 118,
      "Phys Crit": 7,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;
