// Character data: elegant-bunny-girl-bernadette
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "elegant-bunny-girl-bernadette",
  "name": "Elegant Bunny Girl: Bernadette",
  "displayName": "Elegant Bunny Girl: Bernadette",
  "baseName": "Bernadette",
  "title": "Elegant Bunny Girl",
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 250,
  "weaponType": "Strike",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "image": "Bernadette",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "177cm",
    "bust": "113cm (M Cup)",
    "waist": "64cm",
    "hips": "90cm"
  },
  "credits": {
    "illustration": {
      "japanese": "brick",
      "romanized": ""
    },
    "voice": {
      "japanese": "三十三七",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2206
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Graceful Bunny, Showdown!!",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -25%-60 DOWN for 6 seconds and Block-11 DOWN for 6 seconds , self[Bunny]1([Bunny]1Speed2%UP, max10), [Bunny]10 when damage +50%6 Water Type damage taken by damage20%UP",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -25%-60 DOWN for 6 seconds and Block-11 DOWN for 6 seconds , self[Bunny]1([Bunny]1Speed2%UP, max10), [Bunny]10 when damage +50%6 Water Type damage taken by damage20%UP",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -25%-420 DOWN for 6 seconds and Block-23 DOWN for 6 seconds , self[Bunny]1([Bunny]1Speed2%UP, max10), [Bunny]10 when damage +50%6 Water Type damage taken by damage20%UP",
      "target": "Back Enemy",
      "castTime": 1.05,
      "damageScaling": "360% ATK",
      "baseDamage": "+600",
      "levelGrowth": "+20",
      "lvl1": "360% + 600",
      "lvl90": null,
      "effects": [
        "Physical Defense - LvMax",
        "Block- Lv4",
        "Rabbit"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - LvMax",
          "value": -60,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -4.0
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.13
        },
        {
          "name": "Rabbit",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ],
      "duration": 9999
    },
    {
      "slot": 3,
      "name": "GoGo,Bunny's！",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy, inflict 3s and Action Speed -20%DOWN for 10 seconds , self[Bunny]1([Bunny]1Speed2%UP, max10), [Bunny]10 when damage +50%3",
      "descriptionLv1": "Deals physical damage to the nearest enemy, inflict 3s and Action Speed -20%DOWN for 10 seconds , self[Bunny]1([Bunny]1Speed2%UP, max10), [Bunny]10 when damage +50%3",
      "descriptionLv90": "Deals physical damage to the nearest enemy, inflict 3s and Action Speed -20%DOWN for 10 seconds , self[Bunny]1([Bunny]1Speed2%UP, max10), [Bunny]10 when damage +50%3",
      "target": "Nearest Enemy",
      "castTime": 1.1,
      "damageScaling": "300% ATK",
      "baseDamage": "+400",
      "levelGrowth": "+20",
      "lvl1": "300% + 400",
      "lvl90": null,
      "effects": [
        "Blind",
        "Action Speed - Lv5",
        "Rabbit"
      ],
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Action Speed - Lv5",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Rabbit",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ],
      "duration": 9999
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Rabit Rave Recital",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV 1) for 10 seconds , all allies15 Hit-Based Damage UP(LV 1), self[Bunny]1([Bunny]1Speed2%UP, max10), [Bunny]10 when damage +30%all allies10 Water Type ATKUP(LV 1)",
      "effect": "400% + 500",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Hit-Based Damage + Ultimate Lv1",
          "value": 40,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Rabbit",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 2,
      "name": "Rabit Rave Recital",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV 2) for 10 seconds , all allies15 Hit-Based Damage UP(LV 2), self[Bunny]1([Bunny]1Speed2%UP, max10), [Bunny]10 when damage +30%all allies10 Water Type ATKUP(LV 2)",
      "effect": "520% + 600",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Hit-Based Damage + Ultimate Lv2",
          "value": 45,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Rabbit",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 3,
      "name": "Rabit Rave Recital",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV 3) for 10 seconds , all allies15 Hit-Based Damage UP(LV 3), self[Bunny]1([Bunny]1Speed2%UP, max10), [Bunny]10 when damage +30%all allies10 Water Type ATKUP(LV 3)",
      "effect": "600% + 700",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Hit-Based Damage + Ultimate Lv3",
          "value": 50,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Rabbit",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 4,
      "name": "Rabit Rave Recital",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV 4) for 10 seconds , all allies15 Hit-Based Damage UP(LV 4), self[Bunny]1([Bunny]1Speed2%UP, max10), [Bunny]10 when damage +30%all allies10 Water Type ATKUP(LV 4)",
      "effect": "660% + 800",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Hit-Based Damage + Ultimate Lv4",
          "value": 55,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Rabbit",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 5,
      "name": "Rabit Rave Recital",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV 5) for 10 seconds , all allies15 Hit-Based Damage UP(LV 5), self[Bunny]1([Bunny]1Speed2%UP, max10), [Bunny]10 when damage +30%all allies10 Water Type ATKUP(LV 5)",
      "effect": "700% + 900",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Hit-Based Damage + Ultimate Lv5",
          "value": 60,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Rabbit",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Skill Damage +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+20%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+10%), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 10,
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
  "name": "Elegant Bunny Girl: Bernadette",
  "id": 2206,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2673,
    "ATK": 363,
    "MATK": 218,
    "DEF": 61,
    "MDEF": 24
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.82"
  },
  "slug": "elegant-bunny-girl-bernadette"
};

export const stats = {
  "id": "elegant-bunny-girl-bernadette",
  "characterId": 2206,
  "name": "【Elegant Bunny Girl】Bernadette",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2673,
      "lv90": 13366
    },
    "atk": {
      "base": 363,
      "lv90": 1816
    },
    "matk": {
      "base": 218,
      "lv90": 1090
    },
    "def": {
      "base": 61,
      "lv90": 122
    },
    "mdef": {
      "base": 24,
      "lv90": 48
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
      "base": 150,
      "lv90": 240
    },
    "magicCrit": {
      "base": 90,
      "lv90": 144
    },
    "hpRegen": {
      "base": 133,
      "lv90": 467
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
      "base": 60,
      "lv90": 60
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
      "HP": 802,
      "ATK": 109,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 922,
      "ATK": 125,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 1083,
      "ATK": 147,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1203,
      "ATK": 164,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 2273,
      "ATK": 337,
      "DEF": 18,
      "MDEF": 5,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 6283,
      "ATK": 882,
      "Block": 75,
      "MP Charge": 13,
      "Accuracy": 30,
      "DEF": 18,
      "MDEF": 5,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "Accuracy": 2
    },
    "gp2": {
      "Accuracy": 2,
      "Phys Crit": 10
    },
    "gp3": {
      "Accuracy": 5,
      "Phys Crit": 10
    },
    "gp4": {
      "Accuracy": 5,
      "Phys Crit": 30
    },
    "gp5": {
      "Accuracy": 7,
      "Phys Crit": 30
    },
    "gp6": {
      "Accuracy": 7,
      "Phys Crit": 50
    },
    "gp7": {
      "Accuracy": 9,
      "Phys Crit": 50
    },
    "gp8": {
      "Accuracy": 9,
      "Phys Crit": 70
    },
    "gp9": {
      "Accuracy": 11,
      "Phys Crit": 70
    },
    "gp10": {
      "Accuracy": 11,
      "Phys Crit": 90
    },
    "total": {
      "Accuracy": 11,
      "Phys Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 281,
      "ATK": 38,
      "Phys Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 338,
      "ATK": 46,
      "Phys Crit": 4,
      "Block": 16
    },
    "g3": {
      "HP": 394,
      "ATK": 54,
      "Phys Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 450,
      "ATK": 61,
      "Phys Crit": 5,
      "Block": 21
    },
    "g5": {
      "HP": 507,
      "ATK": 69,
      "Phys Crit": 6,
      "MP Charge": 5
    },
    "g6": {
      "HP": 563,
      "ATK": 77,
      "Phys Crit": 6,
      "Accuracy": 18
    },
    "g7": {
      "HP": 619,
      "ATK": 84,
      "Phys Crit": 7,
      "Block": 29
    },
    "g8": {
      "HP": 675,
      "ATK": 92,
      "Phys Crit": 8,
      "Accuracy": 21
    },
    "g9": {
      "HP": 732,
      "ATK": 99,
      "Phys Crit": 8,
      "Block": 34
    },
    "g10": {
      "HP": 788,
      "ATK": 107,
      "Phys Crit": 9,
      "MP Charge": 8
    },
    "total": {
      "HP": 788,
      "ATK": 107,
      "Phys Crit": 9,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 30
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "ATK": 42
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "ATK": 55
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "ATK": 67
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "ATK": 79
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "ATK": 87
    }
  ]
};;;;;;;;
