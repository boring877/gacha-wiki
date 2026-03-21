// Character data: artist-on-ice-ilugio
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "artist-on-ice-ilugio",
  "name": "Artist on Ice: Ilugio",
  "displayName": "Artist on Ice: Ilugio",
  "baseName": "Ilugio",
  "title": "Artist on Ice",
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Fast",
  "range": 240,
  "weaponType": "Slash",
  "skillTypes": [
    "Buff",
    "Debuff"
  ],
  "image": "Ilugio",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "171cm",
    "bust": "108cm (J Cup)",
    "waist": "64cm",
    "hips": "93cm"
  },
  "credits": {
    "illustration": {
      "japanese": "カゲシオ",
      "romanized": ""
    },
    "voice": {
      "japanese": "あかしゆき",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2203
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Crimson Tide",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Action Speed DOWN for 6 seconds and Accuracy -11 DOWN for 6 seconds , [] damage +50%, inflict6 Wind Type damage taken by damage20%UP",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Action Speed DOWN for 6 seconds and Accuracy -11 DOWN for 6 seconds , [] damage +50%, inflict6 Wind Type damage taken by damage20%UP",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Action Speed DOWN for 6 seconds and Accuracy -23 DOWN for 6 seconds , [] damage +50%, inflict6 Wind Type damage taken by damage20%UP",
      "target": "Nearest Enemy",
      "castTime": 0.8,
      "damageScaling": "380% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "380% + 500",
      "lvl90": "380% + 488",
      "effects": [
        "Action Speed - Lv5",
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Action Speed - Lv5",
          "value": -20,
          "type": "flat",
          "duration": 6
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.13
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Hope that is born and vanishes every night",
      "icon": "skill001/skill0019",
      "description": "Applies Action Speed UP to self for 12 seconds and Physical Attack +35 UP for 12 seconds , 20000 damageUP(max100000 (max stacking: ), [], Physical AttackUP Lv+50, damageUPall allies",
      "descriptionLv1": "Applies Action Speed UP to self for 12 seconds and Physical Attack +35 UP for 12 seconds , 20000 damageUP(max100000 (max stacking: ), [], Physical AttackUP Lv+50, damageUPall allies",
      "descriptionLv90": "Applies Action Speed UP to self for 12 seconds and Physical Attack +665 UP for 12 seconds , 20000 damageUP(max100000 (max stacking: ), [], Physical AttackUP Lv+50, damageUPall allies",
      "target": "Self",
      "castTime": 0.9,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Action Speed + Lv5",
        "Physical Attack + Lv4",
        "Damage UP"
      ],
      "buffEffects": [
        {
          "name": "Action Speed + Lv5",
          "value": 20,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Physical Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 7.0
        },
        {
          "name": "Damage UP",
          "value": 9999,
          "type": "percent",
          "duration": 9999
        }
      ],
      "duration": 9999
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Even sealed in ice, you shall melt in the flames of love",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies , inflict 2s (LV 1) and Physical Defense DOWN(LV 1) for 10 seconds , self10 Action Speed UP(LV 1), [], damage +50%, SpeedUPall allies",
      "effect": "450% + 450",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv1",
          "value": -3000,
          "type": "flat",
          "duration": 2
        },
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Crimson Tide",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Action Speed DOWN for 6 seconds and Accuracy -11 DOWN for 6 seconds , [] damage +50%, inflict6 Wind Type damage taken by damage20%UP",
      "effect": "380% + 500",
      "buffEffects": [
        {
          "name": "Action Speed - Lv5",
          "value": -20,
          "type": "flat",
          "duration": 6
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Hope that is born and vanishes every night",
      "icon": "skill001/skill0019",
      "description": "Applies Action Speed UP to self for 12 seconds and Physical Attack +35 UP for 12 seconds , 20000 damageUP(max100000 (max stacking: ), [], Physical AttackUP Lv+50, damageUPall allies",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Action Speed + Lv5",
          "value": 20,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Physical Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Damage UP",
          "value": 9999,
          "type": "percent",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 4,
      "name": "Even sealed in ice, you shall melt in the flames of love",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies , inflict 2s (LV 1) and Physical Defense DOWN(LV 1) for 10 seconds , self10 Action Speed UP(LV 1), [], damage +50%, SpeedUPall allies",
      "effect": "450% + 450",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv1",
          "value": -3000,
          "type": "flat",
          "duration": 2
        },
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Even sealed in ice, you shall melt in the flames of love",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies , inflict 3s (LV 2) and Physical Defense DOWN(LV 2) for 10 seconds , self10 Action Speed UP(LV 2), [], damage +50%, SpeedUPall allies",
      "effect": "530% + 550",
      "buffEffects": [
        {
          "name": "Freeze Ultimate Lv2",
          "value": -4000,
          "type": "flat",
          "duration": 3
        },
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -25,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Action Speed + Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Wind Type ATK +",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+15), Wind Type ATK + (+1%)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "flat"
        },
        {
          "name": "Wind Type ATK +",
          "value": 1,
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
  "name": "Artist on Ice: Ilugio",
  "id": 2203,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 261,
    "MATK": 157,
    "DEF": 63,
    "MDEF": 52
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.45"
  },
  "slug": "artist-on-ice-ilugio"
};

export const stats = {
  "id": "artist-on-ice-ilugio",
  "characterId": 2203,
  "name": "【Artist on Ice】Ilugio",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 2092,
      "lv90": 10460
    },
    "atk": {
      "base": 261,
      "lv90": 1307
    },
    "matk": {
      "base": 157,
      "lv90": 785
    },
    "def": {
      "base": 63,
      "lv90": 126
    },
    "mdef": {
      "base": 52,
      "lv90": 104
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
      "base": 104,
      "lv90": 365
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
      "base": 58,
      "lv90": 58
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
      "HP": 628,
      "ATK": 78,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 722,
      "ATK": 90,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 847,
      "ATK": 106,
      "Block": 20,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 941,
      "ATK": 118,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1779,
      "ATK": 223,
      "DEF": 20,
      "MDEF": 11,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4917,
      "ATK": 615,
      "Block": 75,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 20,
      "MDEF": 11,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Charge": 2
    },
    "gp2": {
      "Phys Crit": 10,
      "MP Charge": 2
    },
    "gp3": {
      "Phys Crit": 10,
      "MP Charge": 4
    },
    "gp4": {
      "Phys Crit": 30,
      "MP Charge": 4
    },
    "gp5": {
      "Phys Crit": 30,
      "MP Charge": 6
    },
    "gp6": {
      "Phys Crit": 50,
      "MP Charge": 6
    },
    "gp7": {
      "Phys Crit": 50,
      "MP Charge": 8
    },
    "gp8": {
      "Phys Crit": 70,
      "MP Charge": 8
    },
    "gp9": {
      "Phys Crit": 70,
      "MP Charge": 10
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
      "HP": 220,
      "ATK": 28,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 264,
      "ATK": 33,
      "Phys Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 308,
      "ATK": 39,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 352,
      "ATK": 44,
      "Phys Crit": 7,
      "Block": 21
    },
    "g5": {
      "HP": 396,
      "ATK": 50,
      "Phys Crit": 8,
      "MP Charge": 4
    },
    "g6": {
      "HP": 440,
      "ATK": 55,
      "Phys Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 484,
      "ATK": 61,
      "Phys Crit": 10,
      "Block": 29
    },
    "g8": {
      "HP": 529,
      "ATK": 66,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 573,
      "ATK": 72,
      "Phys Crit": 11,
      "Block": 34
    },
    "g10": {
      "HP": 617,
      "ATK": 77,
      "Phys Crit": 12,
      "MP Charge": 7
    },
    "total": {
      "HP": 617,
      "ATK": 77,
      "Phys Crit": 12,
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
      "Phys Crit": 7
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "Phys Crit": 10
    },
    {
      "grade": 5,
      "MP Charge": 2
    },
    {
      "grade": 6,
      "Phys Crit": 12
    },
    {
      "grade": 7,
      "MP Charge": 3
    },
    {
      "grade": 8,
      "Phys Crit": 15
    },
    {
      "grade": 9,
      "MP Charge": 3
    },
    {
      "grade": 10,
      "Phys Crit": 17
    },
    {
      "grade": 11,
      "MP Charge": 4
    }
  ]
};;;;;;;;
