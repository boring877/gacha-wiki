// Character data: raffine
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "raffine",
  "name": "Raffine",
  "displayName": "Raffine",
  "baseName": "Raffine",
  "title": null,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Support",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slow",
  "range": 400,
  "weaponType": "Ranged",
  "skillTypes": [
    "Heal",
    "Buff",
    "Disrupt"
  ],
  "image": "Raffine",
  "introduction": "Middle Row、Magical、Support",
  "profile": {
    "height": "147cm",
    "bust": "90cm (I Cup)",
    "waist": "55cm",
    "hips": "76cm"
  },
  "credits": {
    "illustration": {
      "japanese": "ねぶそく",
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
  "characterId": 2147
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Merciful Rain",
      "icon": "skill001/skill0021",
      "description": "restore HP to all alliesHP and inflicts Block 13 UP for 15 seconds and Debuff Resistance UP for 15 seconds , DEBUFF",
      "descriptionLv1": "restore HP to all alliesHP and inflicts Block 13 UP for 15 seconds and Debuff Resistance UP for 15 seconds , DEBUFF",
      "descriptionLv90": "restore HP to all alliesHP and inflicts Block 26 UP for 15 seconds and Debuff Resistance UP for 15 seconds , DEBUFF",
      "target": "All Allies",
      "castTime": 1.4,
      "damageScaling": "2500% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+40",
      "lvl1": "2500% + 500",
      "lvl90": null,
      "effects": [
        "Block+ Lv5",
        "Debuff Resistance Lv2",
        "Debuff Resistance LvMax"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv5",
          "value": 13,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 0.15
        },
        {
          "name": "Debuff Resistance Lv2",
          "value": 0,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Debuff Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ],
      "duration": 15
    },
    {
      "slot": 3,
      "name": "Arrow of Blessing",
      "icon": "skill001/skill0019",
      "description": "Applies Hit-Based Physical Damage UP(+450, 3 hit(s)) to all allies for 15 seconds and Hit-Based Magic Damage UP(+450, 3 hit(s)) for 15 seconds",
      "descriptionLv1": "Applies Hit-Based Physical Damage UP(+450, 3 hit(s)) to all allies for 15 seconds and Hit-Based Magic Damage UP(+450, 3 hit(s)) for 15 seconds",
      "descriptionLv90": "Applies Hit-Based Physical Damage UP(+450, 405040503 hit(s)) to all allies for 15 seconds and Hit-Based Magic Damage UP(+450, 3 hit(s)) for 15 seconds",
      "target": "All Allies",
      "castTime": 1.4,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Hit-Based Physical Damage + Lv3",
        "Hit-Based Magic Damage + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Physical Damage + Lv3",
          "value": 3,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 450.0
        },
        {
          "name": "Hit-Based Magic Damage + Lv3",
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
      "name": "Offer holy salvation to the sinful",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the nearest enemy, inflict 4s , 4",
      "effect": "900% + 800",
      "buffEffects": []
    },
    {
      "rank": 2,
      "name": "Merciful Rain",
      "icon": "skill001/skill0021",
      "description": "restore HP to all alliesHP and inflicts Block 13 UP for 15 seconds and Debuff Resistance UP for 15 seconds , DEBUFF",
      "effect": "2500% + 500",
      "buffEffects": [
        {
          "name": "Block+ Lv5",
          "value": 13,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Debuff Resistance Lv2",
          "value": 0,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Debuff Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ]
    },
    {
      "rank": 3,
      "name": "Arrow of Blessing",
      "icon": "skill001/skill0019",
      "description": "Applies Hit-Based Physical Damage UP(+450, 3 hit(s)) to all allies for 15 seconds and Hit-Based Magic Damage UP(+450, 3 hit(s)) for 15 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Hit-Based Physical Damage + Lv3",
          "value": 3,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Hit-Based Magic Damage + Lv3",
          "value": 3,
          "type": "flat",
          "duration": 15
        }
      ]
    },
    {
      "rank": 4,
      "name": "Offer holy salvation to the sinful",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the nearest enemy, inflict 4s , 4",
      "effect": "900% + 800",
      "buffEffects": []
    },
    {
      "rank": 5,
      "name": "Offer holy salvation to the sinful",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the nearest enemy, inflict 5s , 5",
      "effect": "1080% + 1000",
      "buffEffects": []
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, MP Recovery",
      "icon": "skill001/skill1007",
      "effect": "Max HP + (+1447), MP Recovery (+100%)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 1447,
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
      "name": "Ultimate Damage +, Damage UP",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Damage UP (+10%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Damage UP",
          "value": 10,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Raffine",
  "id": 2147,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2229,
    "ATK": 232,
    "MATK": 386,
    "DEF": 14,
    "MDEF": 35
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.1"
  },
  "slug": "raffine"
};

export const stats = {
  "id": "raffine",
  "characterId": 2147,
  "name": "Raffine",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2229,
      "lv90": 11148
    },
    "atk": {
      "base": 232,
      "lv90": 1160
    },
    "matk": {
      "base": 386,
      "lv90": 1933
    },
    "def": {
      "base": 14,
      "lv90": 28
    },
    "mdef": {
      "base": 35,
      "lv90": 70
    },
    "accuracy": {
      "base": 60,
      "lv90": 120
    },
    "block": {
      "base": 55,
      "lv90": 165
    },
    "physCrit": {
      "base": 32,
      "lv90": 51
    },
    "magicCrit": {
      "base": 53,
      "lv90": 85
    },
    "hpRegen": {
      "base": 111,
      "lv90": 389
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
      "HP": 669,
      "MATK": 116,
      "Block": 17,
      "MP Charge": 8
    },
    "lb2": {
      "HP": 769,
      "MATK": 133,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 903,
      "MATK": 157,
      "Block": 22,
      "MP Charge": 10
    },
    "lb4": {
      "HP": 1003,
      "MATK": 174,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1896,
      "MATK": 329,
      "DEF": 3,
      "MDEF": 11,
      "Heal Pwr": 34
    },
    "total": {
      "HP": 5240,
      "MATK": 909,
      "Block": 83,
      "MP Charge": 18,
      "Accuracy": 30,
      "DEF": 3,
      "MDEF": 11,
      "Heal Pwr": 34
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 40
    },
    "gp2": {
      "MATK": 40,
      "MP Charge": 2
    },
    "gp3": {
      "MATK": 120,
      "MP Charge": 2
    },
    "gp4": {
      "MATK": 120,
      "MP Charge": 4
    },
    "gp5": {
      "MATK": 200,
      "MP Charge": 4
    },
    "gp6": {
      "MATK": 200,
      "MP Charge": 6
    },
    "gp7": {
      "MATK": 280,
      "MP Charge": 6
    },
    "gp8": {
      "MATK": 280,
      "MP Charge": 8
    },
    "gp9": {
      "MATK": 360,
      "MP Charge": 8
    },
    "gp10": {
      "MATK": 360,
      "MP Charge": 10
    },
    "total": {
      "MATK": 360,
      "MP Charge": 10
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 235,
      "MATK": 41,
      "MDEF": 2,
      "Magic Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 282,
      "MATK": 49,
      "MDEF": 2,
      "Magic Crit": 1,
      "Block": 17
    },
    "g3": {
      "HP": 329,
      "MATK": 57,
      "MDEF": 2,
      "Magic Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 376,
      "MATK": 65,
      "MDEF": 3,
      "Magic Crit": 2,
      "Block": 23
    },
    "g5": {
      "HP": 422,
      "MATK": 73,
      "MDEF": 3,
      "Magic Crit": 2,
      "MP Charge": 6
    },
    "g6": {
      "HP": 469,
      "MATK": 81,
      "MDEF": 3,
      "Magic Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 516,
      "MATK": 90,
      "MDEF": 4,
      "Magic Crit": 2,
      "Block": 32
    },
    "g8": {
      "HP": 563,
      "MATK": 98,
      "MDEF": 4,
      "Magic Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 610,
      "MATK": 106,
      "MDEF": 4,
      "Magic Crit": 3,
      "Block": 38
    },
    "g10": {
      "HP": 657,
      "MATK": 114,
      "MDEF": 5,
      "Magic Crit": 3,
      "MP Charge": 9
    },
    "total": {
      "HP": 657,
      "MATK": 114,
      "MDEF": 5,
      "Magic Crit": 3,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Heal Pwr": 5
    },
    {
      "grade": 2,
      "MP Charge": 2
    },
    {
      "grade": 3,
      "Heal Pwr": 7
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "Heal Pwr": 9
    },
    {
      "grade": 6,
      "MP Charge": 3
    },
    {
      "grade": 7,
      "Heal Pwr": 11
    },
    {
      "grade": 8,
      "MP Charge": 4
    },
    {
      "grade": 9,
      "Heal Pwr": 13
    },
    {
      "grade": 10,
      "MP Charge": 4
    },
    {
      "grade": 11,
      "Heal Pwr": 15
    }
  ]
};;;;;;;;
