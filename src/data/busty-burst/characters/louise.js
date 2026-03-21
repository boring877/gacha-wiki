// Character data: louise
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "louise",
  "name": "Louise",
  "displayName": "Louise",
  "baseName": "Louise",
  "title": null,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 240,
  "weaponType": "Slash",
  "skillTypes": [
    "Heal",
    "Buff",
    "Cleanse"
  ],
  "image": "Louise",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "167cm",
    "bust": "121cm (O Cup)",
    "waist": "69cm",
    "hips": "93cm"
  },
  "credits": {
    "illustration": {
      "japanese": "青永HERI",
      "romanized": ""
    },
    "voice": {
      "japanese": "羽生羽見",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2194
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Raging Assault",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -40 DOWN for 6 seconds and applies Action Speed UP to self for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -40 DOWN for 6 seconds and applies Action Speed UP to self for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -220 DOWN for 6 seconds and applies Action Speed UP to self for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.9,
      "damageScaling": "380% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "380% + 500",
      "lvl90": null,
      "effects": [
        "Physical Defense - Lv4",
        "Action Speed + Lv3"
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
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Full power release!",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage 60 UP to self for 10 seconds and Water Type ATK UP for 10 seconds , 4 MP Regeneration 50",
      "descriptionLv1": "Applies Physical Critical Damage 60 UP to self for 10 seconds and Water Type ATK UP for 10 seconds , 4 MP Regeneration 50",
      "descriptionLv90": "Applies Physical Critical Damage 60 UP to self for 10 seconds and Water Type ATK UP for 10 seconds , 4 MP Regeneration 50",
      "target": "Self",
      "castTime": 1.0,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv5",
        "Water Type ATK + Lv5",
        "MP Regeneration + LvMax"
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
          "name": "Water Type ATK + Lv5",
          "value": 20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "MP Regeneration + LvMax",
          "value": 50,
          "type": "percent",
          "duration": 4
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Fierce Star Heaven Pierce",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, inflict 4s and Physical Defense DOWN(LV 1) for 10 seconds",
      "effect": "1200% + 1100",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Raging Assault",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -40 DOWN for 6 seconds and applies Action Speed UP to self for 6 seconds",
      "effect": "380% + 500",
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 6
        },
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Full power release!",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Critical Damage 60 UP to self for 10 seconds and Water Type ATK UP for 10 seconds , 4 MP Regeneration 50",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv5",
          "value": 60,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Water Type ATK + Lv5",
          "value": 20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "MP Regeneration + LvMax",
          "value": 50,
          "type": "percent",
          "duration": 4
        }
      ]
    },
    {
      "rank": 4,
      "name": "Fierce Star Heaven Pierce",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, inflict 4s and Physical Defense DOWN(LV 1) for 10 seconds",
      "effect": "1200% + 1100",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Fierce Star Heaven Pierce",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy, inflict 5s and Physical Defense DOWN(LV 2) for 10 seconds",
      "effect": "1440% + 1300",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Physical Defense - Ultimate Lv2",
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
      "name": "Physical Critical Damage+, MP Recovery",
      "icon": "skill001/skill1001",
      "effect": "Physical Critical Damage+ (+176%), MP Recovery (+30%)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 176,
          "type": "percent"
        },
        {
          "name": "MP Recovery",
          "value": 30,
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
  "name": "Louise",
  "id": 2194,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Heal",
    "Buff",
    "Cleanse"
  ],
  "baseStats": {
    "HP": 1546,
    "ATK": 281,
    "MATK": 168,
    "DEF": 158,
    "MDEF": 158
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
    "speedValue": "0.55"
  },
  "slug": "louise"
};

export const stats = {
  "id": "louise",
  "characterId": 2194,
  "name": "Louise",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Heal",
    "Buff",
    "Cleanse"
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
      "MP Charge": 7
    },
    "lb4": {
      "HP": 696,
      "ATK": 127,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1315,
      "ATK": 239,
      "DEF": 51,
      "MDEF": 32,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3634,
      "ATK": 661,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 51,
      "MDEF": 32,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "Phys Crit": 10
    },
    "gp2": {
      "Phys Crit": 10,
      "MP Charge": 2
    },
    "gp3": {
      "Phys Crit": 30,
      "MP Charge": 2
    },
    "gp4": {
      "Phys Crit": 30,
      "MP Charge": 4
    },
    "gp5": {
      "Phys Crit": 50,
      "MP Charge": 4
    },
    "gp6": {
      "Phys Crit": 50,
      "MP Charge": 6
    },
    "gp7": {
      "Phys Crit": 70,
      "MP Charge": 6
    },
    "gp8": {
      "Phys Crit": 70,
      "MP Charge": 8
    },
    "gp9": {
      "Phys Crit": 90,
      "MP Charge": 8
    },
    "gp10": {
      "Phys Crit": 90,
      "MP Charge": 10
    },
    "total": {
      "Phys Crit": 90,
      "MP Charge": 10
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
      "MP Charge": 5
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
      "MP Charge": 1
    },
    {
      "grade": 2,
      "Phys Crit": 5
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "Phys Crit": 6
    },
    {
      "grade": 5,
      "MP Charge": 2
    },
    {
      "grade": 6,
      "Phys Crit": 8
    },
    {
      "grade": 7,
      "MP Charge": 3
    },
    {
      "grade": 8,
      "Phys Crit": 9
    },
    {
      "grade": 9,
      "MP Charge": 3
    },
    {
      "grade": 10,
      "Phys Crit": 11
    },
    {
      "grade": 11,
      "MP Charge": 4
    }
  ]
};;;;;;;;
