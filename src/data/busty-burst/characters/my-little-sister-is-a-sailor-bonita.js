// Character data: my-little-sister-is-a-sailor-bonita
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "my-little-sister-is-a-sailor-bonita",
  "name": "My Little Sister Is a Sailor: Bonita",
  "displayName": "My Little Sister Is a Sailor: Bonita",
  "baseName": "Bonita",
  "title": "My Little Sister Is a Sailor",
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 235,
  "weaponType": "Strike",
  "skillTypes": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "image": "Bonita",
  "introduction": "Front Row、Magical、Attacker",
  "profile": {
    "height": "143cm",
    "bust": "90cm (H Cup)",
    "waist": "55cm",
    "hips": "75cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Aotonbo",
      "romanized": ""
    },
    "voice": {
      "japanese": "榎津まお",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2175
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Spin around!",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Block-11 DOWN for 6 seconds , 1.5s Stun for",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Block-11 DOWN for 6 seconds , 1.5s Stun for",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Block-23 DOWN for 6 seconds , 1.5s Stun for",
      "target": "Nearest Enemy",
      "castTime": 1.3,
      "damageScaling": "110% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+6",
      "lvl1": "110% + 200",
      "lvl90": null,
      "effects": [
        "Block- Lv4",
        "Stun"
      ],
      "buffEffects": [
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.13
        },
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Rocket Jump!",
      "icon": "skill001/skill0019",
      "description": "Gain MP Recovery 100 and Magic Attack 18%+35 UP for 10 seconds , 10 Action Speed 20%UP",
      "descriptionLv1": "Gain MP Recovery 100 and Magic Attack 18%+35 UP for 10 seconds , 10 Action Speed 20%UP",
      "descriptionLv90": "Gain MP Recovery 100 and Magic Attack 18%+665 UP for 10 seconds , 10 Action Speed 20%UP",
      "target": "Self",
      "castTime": 1.35,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "MP Recovery",
        "Magic Attack + Lv4",
        "Action Speed + Lv5"
      ],
      "buffEffects": [
        {
          "name": "MP Recovery",
          "value": 100,
          "type": "percent",
          "duration": 0
        },
        {
          "name": "Magic Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 7.0
        },
        {
          "name": "Action Speed + Lv5",
          "value": 20,
          "type": "flat",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Dolphin - Formation Attack!",
      "icon": "skill001/skill0006_1",
      "description": "6 nearest enemies dealmagic damage and inflicts BlockDOWN(LV 1) for 10 seconds and Magic Defense DOWN(LV 1) for 10 seconds",
      "effect": "250% + 450",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Dolphin - Formation Attack!",
      "icon": "skill001/skill0006_2",
      "description": "6 nearest enemies dealmagic damage and inflicts BlockDOWN(LV 2) for 10 seconds and Magic Defense DOWN(LV 2) for 10 seconds",
      "effect": "295% + 600",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Defense- Ultimate Lv2",
          "value": -20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Dolphin - Formation Attack!",
      "icon": "skill001/skill0006_3",
      "description": "6 nearest enemies dealmagic damage and inflicts BlockDOWN(LV 3) for 10 seconds and Magic Defense DOWN(LV 3) for 10 seconds",
      "effect": "340% + 700",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Defense- Ultimate Lv3",
          "value": -25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Dolphin - Formation Attack!",
      "icon": "skill001/skill0006_4",
      "description": "6 nearest enemies dealmagic damage and inflicts BlockDOWN(LV 4) for 10 seconds and Magic Defense DOWN(LV 4) for 10 seconds",
      "effect": "375% + 800",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Defense- Ultimate Lv4",
          "value": -28,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Dolphin - Formation Attack!",
      "icon": "skill001/skill0006_5",
      "description": "6 nearest enemies dealmagic damage and inflicts BlockDOWN(LV 5) for 10 seconds and Magic Defense DOWN(LV 5) for 10 seconds",
      "effect": "400% + 900",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv5",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Defense- Ultimate Lv5",
          "value": -30,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, MP Recovery+",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+389), MP Recovery+ (+200%)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "MP Recovery+",
          "value": 200,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
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
  "name": "My Little Sister Is a Sailor: Bonita",
  "id": 2175,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 1457,
    "ATK": 166,
    "MATK": 276,
    "DEF": 158,
    "MDEF": 158
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
    "speedValue": "0.85"
  },
  "slug": "my-little-sister-is-a-sailor-bonita"
};

export const stats = {
  "id": "my-little-sister-is-a-sailor-bonita",
  "characterId": 2175,
  "name": "【My Little Sister Is a Sailor】Bonita",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "hp": {
      "base": 1457,
      "lv90": 7288
    },
    "atk": {
      "base": 166,
      "lv90": 830
    },
    "matk": {
      "base": 276,
      "lv90": 1382
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
      "base": 55,
      "lv90": 165
    },
    "physCrit": {
      "base": 182,
      "lv90": 291
    },
    "magicCrit": {
      "base": 303,
      "lv90": 485
    },
    "hpRegen": {
      "base": 75,
      "lv90": 257
    },
    "mpRegen": {
      "base": 100,
      "lv90": 278
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
      "HP": 437,
      "MATK": 83,
      "Block": 17,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 503,
      "MATK": 95,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 590,
      "MATK": 112,
      "Block": 22,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 656,
      "MATK": 124,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1239,
      "MATK": 256,
      "DEF": 32,
      "MDEF": 51,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3425,
      "MATK": 670,
      "Block": 83,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 32,
      "MDEF": 51,
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
      "HP": 153,
      "MATK": 29,
      "MDEF": 10,
      "Magic Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 184,
      "MATK": 35,
      "MDEF": 12,
      "Magic Crit": 8,
      "Block": 17
    },
    "g3": {
      "HP": 215,
      "MATK": 41,
      "MDEF": 14,
      "Magic Crit": 9,
      "Accuracy": 12
    },
    "g4": {
      "HP": 246,
      "MATK": 47,
      "MDEF": 16,
      "Magic Crit": 10,
      "Block": 23
    },
    "g5": {
      "HP": 276,
      "MATK": 52,
      "MDEF": 18,
      "Magic Crit": 12,
      "MP Charge": 5
    },
    "g6": {
      "HP": 307,
      "MATK": 58,
      "MDEF": 20,
      "Magic Crit": 13,
      "Accuracy": 18
    },
    "g7": {
      "HP": 338,
      "MATK": 64,
      "MDEF": 22,
      "Magic Crit": 14,
      "Block": 32
    },
    "g8": {
      "HP": 368,
      "MATK": 70,
      "MDEF": 24,
      "Magic Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 399,
      "MATK": 76,
      "MDEF": 27,
      "Magic Crit": 17,
      "Block": 38
    },
    "g10": {
      "HP": 430,
      "MATK": 82,
      "MDEF": 29,
      "Magic Crit": 18,
      "MP Charge": 8
    },
    "total": {
      "HP": 430,
      "MATK": 82,
      "MDEF": 29,
      "Magic Crit": 18,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Charge": 2
    },
    {
      "grade": 2,
      "MATK": 25
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "MATK": 33
    },
    {
      "grade": 5,
      "MP Charge": 3
    },
    {
      "grade": 6,
      "MATK": 41
    },
    {
      "grade": 7,
      "MP Charge": 3
    },
    {
      "grade": 8,
      "MATK": 50
    },
    {
      "grade": 9,
      "MP Charge": 4
    },
    {
      "grade": 10,
      "MATK": 58
    },
    {
      "grade": 11,
      "MP Charge": 4
    }
  ]
};;;;;;;;
