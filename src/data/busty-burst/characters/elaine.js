// Character data: elaine
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "elaine",
  "name": "Elaine",
  "displayName": "Elaine",
  "baseName": "Elaine",
  "title": null,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 235,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff",
    "MP Recovery"
  ],
  "image": "Elaine",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "171cm",
    "bust": "121cm (Q Cup)",
    "waist": "62cm",
    "hips": "99cm"
  },
  "credits": {
    "illustration": {
      "japanese": "ぴず",
      "romanized": ""
    },
    "voice": {
      "japanese": "柏木逢花",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2148
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Blade Storm",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit",
      "descriptionLv1": "Deals physical damage to the nearest enemy, guaranteed hit",
      "descriptionLv90": "Deals physical damage to the nearest enemy, guaranteed hit",
      "target": "Nearest Enemy",
      "castTime": 0.95,
      "damageScaling": "350% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+30",
      "lvl1": "350% + 300",
      "lvl90": "350% + 2970",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Damn, this power...",
      "icon": "skill001/skill0019",
      "description": "self dealHP 50% damage and inflicts Physical Attack 20%+40 UP for 15 seconds and Physical Critical Damage 50 UP for 15 seconds , 4 MP Regeneration 50",
      "descriptionLv1": "self dealHP 50% damage and inflicts Physical Attack 20%+40 UP for 15 seconds and Physical Critical Damage 50 UP for 15 seconds , 4 MP Regeneration 50",
      "descriptionLv90": "self dealHP 50% damage and inflicts Physical Attack 20%+850 UP for 15 seconds and Physical Critical Damage 50 UP for 15 seconds , 4 MP Regeneration 50",
      "target": "Self",
      "castTime": 0.95,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv5",
        "Physical Critical Damage+ Lv4",
        "MP Regeneration + LvMax"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 9.0
        },
        {
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "percent",
          "duration": 15,
          "levelGrowth": 7.0
        },
        {
          "name": "MP Regeneration + LvMax",
          "value": 50,
          "type": "percent",
          "duration": 4
        }
      ],
      "duration": 15
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Stay away from me!!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 1) for 10 seconds and Action Speed DOWN(LV 1) for 10 seconds , Ultimate activation beforeapply to self10 Magic Type ATK UP(LV 1)",
      "effect": "1200% + 1000",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Type ATK + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Stay away from me!!",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 2) for 10 seconds and Action Speed DOWN(LV 2) for 10 seconds , Ultimate activation beforeapply to self10 Magic Type ATK UP(LV 2)",
      "effect": "1440% + 1300",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Type ATK + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Stay away from me!!",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 3) for 10 seconds and Action Speed DOWN(LV 3) for 10 seconds , Ultimate activation beforeapply to self10 Magic Type ATK UP(LV 3)",
      "effect": "1620% + 1500",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -24,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Type ATK + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Stay away from me!!",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 4) for 10 seconds and Action Speed DOWN(LV 4) for 10 seconds , Ultimate activation beforeapply to self10 Magic Type ATK UP(LV 4)",
      "effect": "1739% + 1600",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -27,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Type ATK + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Stay away from me!!",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 5) for 10 seconds and Action Speed DOWN(LV 5) for 10 seconds , Ultimate activation beforeapply to self10 Magic Type ATK UP(LV 5)",
      "effect": "1800% + 1700",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -30,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Magic Type ATK + Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Skill Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+20%), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Physical Damage UP",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+10%), Physical Damage UP (+9999)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Physical Damage UP",
          "value": 9999,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Elaine",
  "id": 2148,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 2887,
    "ATK": 295,
    "MATK": 177,
    "DEF": 61,
    "MDEF": 24
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.58"
  },
  "slug": "elaine"
};

export const stats = {
  "id": "elaine",
  "characterId": 2148,
  "name": "Elaine",
  "rarity": "SSR",
  "element": "魔",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "MP Recovery"
  ],
  "baseStats": {
    "hp": {
      "base": 2887,
      "lv90": 14435
    },
    "atk": {
      "base": 295,
      "lv90": 1478
    },
    "matk": {
      "base": 177,
      "lv90": 886
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
      "lv90": 120
    },
    "block": {
      "base": 45,
      "lv90": 135
    },
    "physCrit": {
      "base": 232,
      "lv90": 371
    },
    "magicCrit": {
      "base": 139,
      "lv90": 222
    },
    "hpRegen": {
      "base": 144,
      "lv90": 504
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
      "base": 55,
      "lv90": 55
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
      "HP": 866,
      "ATK": 89,
      "Block": 14,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 996,
      "ATK": 102,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 1169,
      "ATK": 120,
      "Block": 18,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1299,
      "ATK": 133,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 2454,
      "ATK": 274,
      "DEF": 18,
      "MDEF": 5,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 6784,
      "ATK": 718,
      "Block": 68,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 18,
      "MDEF": 5,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "MP Charge": 2
    },
    "gp3": {
      "ATK": 120,
      "MP Charge": 2
    },
    "gp4": {
      "ATK": 120,
      "MP Charge": 4
    },
    "gp5": {
      "ATK": 200,
      "MP Charge": 4
    },
    "gp6": {
      "ATK": 200,
      "MP Charge": 6
    },
    "gp7": {
      "ATK": 280,
      "MP Charge": 6
    },
    "gp8": {
      "ATK": 280,
      "MP Charge": 8
    },
    "gp9": {
      "ATK": 360,
      "MP Charge": 8
    },
    "gp10": {
      "ATK": 360,
      "MP Charge": 10
    },
    "total": {
      "ATK": 360,
      "MP Charge": 10
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 304,
      "ATK": 31,
      "Phys Crit": 5,
      "Accuracy": 9
    },
    "g2": {
      "HP": 365,
      "ATK": 37,
      "Phys Crit": 6,
      "Block": 14
    },
    "g3": {
      "HP": 425,
      "ATK": 44,
      "Phys Crit": 7,
      "Accuracy": 12
    },
    "g4": {
      "HP": 486,
      "ATK": 50,
      "Phys Crit": 8,
      "Block": 19
    },
    "g5": {
      "HP": 547,
      "ATK": 56,
      "Phys Crit": 9,
      "MP Charge": 4
    },
    "g6": {
      "HP": 608,
      "ATK": 62,
      "Phys Crit": 10,
      "Accuracy": 18
    },
    "g7": {
      "HP": 669,
      "ATK": 69,
      "Phys Crit": 11,
      "Block": 26
    },
    "g8": {
      "HP": 729,
      "ATK": 75,
      "Phys Crit": 12,
      "Accuracy": 21
    },
    "g9": {
      "HP": 790,
      "ATK": 81,
      "Phys Crit": 13,
      "Block": 31
    },
    "g10": {
      "HP": 851,
      "ATK": 87,
      "Phys Crit": 14,
      "MP Charge": 7
    },
    "total": {
      "HP": 851,
      "ATK": 87,
      "Phys Crit": 14,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 25
    },
    {
      "grade": 2,
      "MP Cost Down": 1
    },
    {
      "grade": 3,
      "ATK": 35
    },
    {
      "grade": 4,
      "MP Cost Down": 1
    },
    {
      "grade": 5,
      "ATK": 44
    },
    {
      "grade": 6,
      "MP Cost Down": 1
    },
    {
      "grade": 7,
      "ATK": 54
    },
    {
      "grade": 8,
      "MP Cost Down": 1
    },
    {
      "grade": 9,
      "ATK": 64
    },
    {
      "grade": 10,
      "MP Cost Down": 1
    },
    {
      "grade": 11,
      "ATK": 75
    }
  ]
};;;;;;;;
