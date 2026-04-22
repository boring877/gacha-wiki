// Character data: valkyrie-of-the-pegasus-giselle
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "valkyrie-of-the-pegasus-giselle",
  "name": "Valkyrie of the Pegasus: Giselle",
  "displayName": "Valkyrie of the Pegasus: Giselle",
  "baseName": "Giselle",
  "title": "Valkyrie of the Pegasus",
  "rarity": "SSR",
  "element": "Light",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slow",
  "range": 250,
  "weaponType": "Pierce",
  "skillTypes": [
    "Heal",
    "Buff",
    "Debuff",
    "Disrupt",
    "Cleanse"
  ],
  "image": "Giselle",
  "introduction": "Middle Row、Physical、Attacker",
  "profile": {
    "height": "167cm",
    "bust": "96cm (I Cup)",
    "waist": "58cm",
    "hips": "87cm"
  },
  "credits": {
    "illustration": {
      "japanese": "失笑宣告",
      "romanized": ""
    },
    "voice": {
      "japanese": "手塚りょうこ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2212
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Glahoz",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Block-11 DOWN for 6 seconds and applies Block-11 DOWN to self for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Block-11 DOWN for 6 seconds and applies Block-11 DOWN to self for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Block-23 DOWN for 6 seconds and applies Block-11 DOWN to self for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.25,
      "damageScaling": "350% ATK",
      "baseDamage": "+400",
      "levelGrowth": "+20",
      "lvl1": "350% + 400",
      "lvl90": null,
      "effects": [
        "Block- Lv4",
        "Action Speed + Lv5"
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
          "name": "Action Speed + Lv5",
          "value": 20,
          "type": "flat",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Heruwal",
      "icon": "skill001/skill0019",
      "description": "Restores HP by to all allies and inflicts Action Speed 14%UP for 10 seconds , Debuff",
      "descriptionLv1": "Restores HP by to all allies and inflicts Action Speed 14%UP for 10 seconds , Debuff",
      "descriptionLv90": "Restores HP by to all allies and inflicts Action Speed 14%UP for 10 seconds , Debuff",
      "target": "All Allies",
      "castTime": 1.3,
      "damageScaling": "1500% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "1500% + 500",
      "lvl90": null,
      "effects": [
        "Action Speed + Lv3",
        "Debuff Resistance LvMax"
      ],
      "buffEffects": [
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Debuff Resistance LvMax",
          "value": 1,
          "type": "percent",
          "duration": 0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Gerolondur Gelvig",
      "icon": "skill001/skill0003_1",
      "description": "to all enemiesphysical damage, inflict 3s , ,selfMP Recovery 40",
      "effect": "550% + 900",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "MP Recovery Ultimate Lv1",
          "value": 40,
          "type": "percent",
          "duration": 0
        }
      ]
    },
    {
      "rank": 2,
      "name": "Gerolondur Gelvig",
      "icon": "skill001/skill0003_2",
      "description": "to all enemiesphysical damage, inflict 4s , ,selfMP Recovery 50",
      "effect": "777% + 1250",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "MP Recovery Ultimate Lv2",
          "value": 50,
          "type": "percent",
          "duration": 0
        }
      ]
    },
    {
      "rank": 3,
      "name": "Gerolondur Gelvig",
      "icon": "skill001/skill0003_3",
      "description": "to all enemiesphysical damage, inflict 4s , ,selfMP Recovery 60",
      "effect": "935% + 1550",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "MP Recovery Ultimate Lv3",
          "value": 60,
          "type": "percent",
          "duration": 0
        }
      ]
    },
    {
      "rank": 4,
      "name": "Gerolondur Gelvig",
      "icon": "skill001/skill0003_4",
      "description": "to all enemiesphysical damage, inflict 5s , ,selfMP Recovery 70",
      "effect": "1050% + 1800",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "MP Recovery Ultimate Lv4",
          "value": 70,
          "type": "percent",
          "duration": 0
        }
      ]
    },
    {
      "rank": 5,
      "name": "Gerolondur Gelvig",
      "icon": "skill001/skill0003_5",
      "description": "to all enemiesphysical damage, inflict 5s , ,selfMP Recovery 80",
      "effect": "1100% + 2000",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "MP Recovery Ultimate Lv5",
          "value": 80,
          "type": "percent",
          "duration": 0
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Debuff Resistance+, MP Recovery",
      "icon": "skill001/skill1003",
      "effect": "MP Recovery (+100%)",
      "effectValues": [
        {
          "name": "MP Recovery",
          "value": 100,
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
  "name": "Valkyrie of the Pegasus: Giselle",
  "id": 2212,
  "rarity": "SSR",
  "element": "Light",
  "role": "Attacker",
  "tags": [
    "Heal",
    "Buff",
    "Debuff",
    "Disrupt",
    "Cleanse"
  ],
  "baseStats": {
    "HP": 1546,
    "ATK": 336,
    "MATK": 201,
    "DEF": 158,
    "MDEF": 158
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.1"
  },
  "slug": "valkyrie-of-the-pegasus-giselle"
};

export const stats = {
  "id": "valkyrie-of-the-pegasus-giselle",
  "characterId": 2212,
  "name": "【Valkyrie of the Pegasus】Giselle",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Heal",
    "Buff",
    "Debuff",
    "Disrupt",
    "Cleanse"
  ],
  "baseStats": {
    "hp": {
      "base": 1546,
      "lv90": 7730
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
      "HP": 1315,
      "ATK": 286,
      "DEF": 51,
      "MDEF": 32,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3634,
      "ATK": 790,
      "Block": 75,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 51,
      "MDEF": 32,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Cost Down": 3
    },
    "gp2": {
      "ATK": 40,
      "MP Cost Down": 3
    },
    "gp3": {
      "ATK": 40,
      "MP Cost Down": 5
    },
    "gp4": {
      "ATK": 120,
      "MP Cost Down": 5
    },
    "gp5": {
      "ATK": 120,
      "MP Cost Down": 6
    },
    "gp6": {
      "ATK": 200,
      "MP Cost Down": 6
    },
    "gp7": {
      "ATK": 200,
      "MP Cost Down": 7
    },
    "gp8": {
      "ATK": 280,
      "MP Cost Down": 7
    },
    "gp9": {
      "ATK": 280,
      "MP Cost Down": 8
    },
    "gp10": {
      "ATK": 360,
      "MP Cost Down": 8
    },
    "total": {
      "ATK": 360,
      "MP Cost Down": 8
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
      "Phys Crit": 7
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "Phys Crit": 10
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "Phys Crit": 12
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "Phys Crit": 15
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "Phys Crit": 18
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "Phys Crit": 20
    }
  ]
};;;;;;;;
