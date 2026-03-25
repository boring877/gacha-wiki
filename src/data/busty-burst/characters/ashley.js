// Character data: ashley
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "ashley",
  "name": "Ashley",
  "displayName": "Ashley",
  "baseName": "Ashley",
  "title": null,
  "rarity": "SR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Fast",
  "range": 330,
  "weaponType": "Ranged",
  "skillTypes": [
    "Buff",
    "Disrupt"
  ],
  "image": "Ashley",
  "introduction": "Middle Row、Physical、Attacker",
  "profile": {
    "height": "153cm",
    "bust": "98cm (H Cup)",
    "waist": "62cm",
    "hips": "89cm"
  },
  "credits": {
    "illustration": {
      "japanese": "たかしな浅妃",
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
  "characterId": 2137
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Butterfly Cut",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy",
      "descriptionLv1": "Deals physical damage to the nearest enemy",
      "descriptionLv90": "Deals physical damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 1.0,
      "damageScaling": "320% ATK",
      "baseDamage": "+600",
      "levelGrowth": "+0",
      "lvl1": "320% + 600",
      "lvl90": null,
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Please don't use violence",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.0,
      "damageScaling": "210% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+0",
      "lvl1": "210% + 300",
      "lvl90": null,
      "effects": [
        "Stun"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ],
      "duration": 2
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Hot Streak",
      "icon": "skill001/skill0020_1",
      "description": "Applies Physical Critical DamageUP(LV 1) to all allies for 10 seconds and Action Speed UP(LV 1) for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Ultimate Lv1",
          "value": 300,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 8,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Hot Streak",
      "icon": "skill001/skill0020_2",
      "description": "Applies Physical Critical DamageUP(LV 2) to all allies for 11 seconds and Action Speed UP(LV 2) for 11 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Ultimate Lv2",
          "value": 400,
          "type": "percent",
          "duration": 11
        },
        {
          "name": "Action Speed + Ultimate Lv2",
          "value": 10,
          "type": "flat",
          "duration": 11
        }
      ]
    },
    {
      "rank": 3,
      "name": "Hot Streak",
      "icon": "skill001/skill0020_3",
      "description": "Applies Physical Critical DamageUP(LV 3) to all allies for 13 seconds and Action Speed UP(LV 3) for 13 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Ultimate Lv3",
          "value": 450,
          "type": "percent",
          "duration": 13
        },
        {
          "name": "Action Speed + Ultimate Lv3",
          "value": 12,
          "type": "flat",
          "duration": 13
        }
      ]
    },
    {
      "rank": 4,
      "name": "Hot Streak",
      "icon": "skill001/skill0020_4",
      "description": "Applies Physical Critical DamageUP(LV 4) to all allies for 14 seconds and Action Speed UP(LV 4) for 14 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Ultimate Lv4",
          "value": 500,
          "type": "percent",
          "duration": 14
        },
        {
          "name": "Action Speed + Ultimate Lv4",
          "value": 14,
          "type": "flat",
          "duration": 14
        }
      ]
    },
    {
      "rank": 5,
      "name": "Hot Streak",
      "icon": "skill001/skill0020_5",
      "description": "Applies Physical Critical DamageUP(LV 5) to all allies for 15 seconds and Action Speed UP(LV 5) for 15 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Ultimate Lv5",
          "value": 550,
          "type": "percent",
          "duration": 15
        },
        {
          "name": "Action Speed + Ultimate Lv5",
          "value": 15,
          "type": "flat",
          "duration": 15
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Hit-Based Physical Damage + Lv2",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+20%), Hit-Based Physical Damage + Lv2 (+2)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Hit-Based Physical Damage + Lv2",
          "value": 2,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Ashley",
  "id": 2137,
  "rarity": "SR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1661,
    "ATK": 273,
    "MATK": 163,
    "DEF": 126,
    "MDEF": 50
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.55"
  },
  "slug": "ashley"
};

export const stats = {
  "id": "ashley",
  "characterId": 2137,
  "name": "Ashley",
  "rarity": "SR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1661,
      "lv90": 8305
    },
    "atk": {
      "base": 273,
      "lv90": 1365
    },
    "matk": {
      "base": 163,
      "lv90": 818
    },
    "def": {
      "base": 126,
      "lv90": 252
    },
    "mdef": {
      "base": 50,
      "lv90": 100
    },
    "accuracy": {
      "base": 60,
      "lv90": 120
    },
    "block": {
      "base": 50,
      "lv90": 150
    },
    "physCrit": {
      "base": 191,
      "lv90": 305
    },
    "magicCrit": {
      "base": 114,
      "lv90": 182
    },
    "hpRegen": {
      "base": 83,
      "lv90": 290
    },
    "mpRegen": {
      "base": 56,
      "lv90": 225
    },
    "healPwr": {
      "base": 100,
      "lv90": 250
    },
    "mpCharge": {
      "base": 53,
      "lv90": 53
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
      "HP": 498,
      "ATK": 82,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 573,
      "ATK": 94,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 673,
      "ATK": 111,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 747,
      "ATK": 123,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1308,
      "ATK": 215,
      "DEF": 31,
      "MDEF": 9,
      "Heal Pwr": 23
    },
    "total": {
      "HP": 3799,
      "ATK": 625,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 31,
      "MDEF": 9,
      "Heal Pwr": 23
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Charge": 2
    },
    "gp2": {
      "ATK": 30,
      "MP Charge": 2
    },
    "gp3": {
      "ATK": 30,
      "MP Charge": 4
    },
    "gp4": {
      "ATK": 90,
      "MP Charge": 4
    },
    "gp5": {
      "ATK": 90,
      "MP Charge": 6
    },
    "gp6": {
      "ATK": 150,
      "MP Charge": 6
    },
    "gp7": {
      "ATK": 150,
      "MP Charge": 8
    },
    "gp8": {
      "ATK": 210,
      "MP Charge": 8
    },
    "gp9": {
      "ATK": 210,
      "MP Charge": 10
    },
    "gp10": {
      "ATK": 270,
      "MP Charge": 10
    },
    "total": {
      "ATK": 270,
      "MP Charge": 10
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 175,
      "ATK": 29,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 210,
      "ATK": 34,
      "Phys Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 245,
      "ATK": 40,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 280,
      "ATK": 46,
      "Phys Crit": 6,
      "Block": 21
    },
    "g5": {
      "HP": 315,
      "ATK": 52,
      "Phys Crit": 7,
      "MP Charge": 5
    },
    "g6": {
      "HP": 350,
      "ATK": 57,
      "Phys Crit": 8,
      "Accuracy": 18
    },
    "g7": {
      "HP": 385,
      "ATK": 63,
      "Phys Crit": 9,
      "Block": 29
    },
    "g8": {
      "HP": 420,
      "ATK": 69,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 455,
      "ATK": 75,
      "Phys Crit": 10,
      "Block": 34
    },
    "g10": {
      "HP": 490,
      "ATK": 80,
      "Phys Crit": 11,
      "MP Charge": 7
    },
    "total": {
      "HP": 490,
      "ATK": 80,
      "Phys Crit": 11,
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
      "HP": 149
    },
    {
      "grade": 3,
      "ATK": 32
    },
    {
      "grade": 4,
      "HP": 199
    },
    {
      "grade": 5,
      "ATK": 41
    },
    {
      "grade": 6,
      "HP": 249
    },
    {
      "grade": 7,
      "ATK": 50
    },
    {
      "grade": 8,
      "HP": 299
    },
    {
      "grade": 9,
      "ATK": 59
    },
    {
      "grade": 10,
      "HP": 349
    },
    {
      "grade": 11,
      "ATK": 62
    }
  ]
};;;;;;;;
