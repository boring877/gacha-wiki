// Character data: ange
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "ange",
  "name": "Ange",
  "displayName": "Ange",
  "baseName": "Ange",
  "title": null,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Fast",
  "range": 530,
  "weaponType": "Ranged",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Ange",
  "introduction": "Back Row、Magical、Attacker",
  "profile": {
    "height": "170cm",
    "bust": "112cm (L Cup)",
    "waist": "63cm",
    "hips": "98cm"
  },
  "credits": {
    "illustration": {
      "japanese": "翠野タヌキ",
      "romanized": ""
    },
    "voice": {
      "japanese": "伊ヶ崎綾香",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2145
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Radiant Pyrope",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Accuracy -13 DOWN for 6 seconds, having3[Fire Mark] when1[Burn Mark](treated as1HP-2000)",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Accuracy -13 DOWN for 6 seconds, having3[Fire Mark] when1[Burn Mark](treated as1HP-2000)",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Accuracy -26 DOWN for 6 seconds, having3[Fire Mark] when1[Burn Mark](treated as1HP-2000)",
      "target": "Nearest Enemy",
      "castTime": 1.1,
      "damageScaling": "105% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+6",
      "lvl1": "105% + 200",
      "lvl90": "105% + 186",
      "effects": [
        "Accuracy - Lv5"
      ],
      "buffEffects": [
        {
          "name": "Accuracy - Lv5",
          "value": -13,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.15
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Almandine of Refining Fire",
      "icon": "skill001/skill0014",
      "description": "Applies Magic Attack 18%+35 UP to self for 10 seconds, self1[Fire Mark]([Fire Mark]1Fire Type ATK3%UP, max3)",
      "descriptionLv1": "Applies Magic Attack 18%+35 UP to self for 10 seconds, self1[Fire Mark]([Fire Mark]1Fire Type ATK3%UP, max3)",
      "descriptionLv90": "Applies Magic Attack 18%+665 UP to self for 10 seconds, self1[Fire Mark]([Fire Mark]1Fire Type ATK3%UP, max3)",
      "target": "Self",
      "castTime": 1.1,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Magic Attack + Lv4",
        "Mark of Fire"
      ],
      "buffEffects": [
        {
          "name": "Magic Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 7.0
        },
        {
          "name": "Mark of Fire",
          "value": 3,
          "type": "percent",
          "duration": 999
        }
      ],
      "duration": 999
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Eternal Light. Touch it and let it burn to ashes!",
      "icon": "skill001/skill0006_1",
      "description": "5 nearest enemies dealmagic damage and inflicts Magic Defense DOWN(LV 1) for 10 seconds and BlockDOWN(LV 1) for 10 seconds , having3[Fire Mark] when1[Burn Mark](treated as1HP-2000)",
      "effect": "229% + 300",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Eternal Light. Touch it and let it burn to ashes!",
      "icon": "skill001/skill0006_2",
      "description": "5 nearest enemies dealmagic damage and inflicts Magic Defense DOWN(LV 2) for 10 seconds and BlockDOWN(LV 2) for 10 seconds , having3[Fire Mark] when1[Burn Mark](treated as1HP-2000)",
      "effect": "270% + 400",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Eternal Light. Touch it and let it burn to ashes!",
      "icon": "skill001/skill0006_3",
      "description": "5 nearest enemies dealmagic damage and inflicts Magic Defense DOWN(LV 3) for 10 seconds and BlockDOWN(LV 3) for 10 seconds , having3[Fire Mark] when1[Burn Mark](treated as1HP-2000)",
      "effect": "300% + 500",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Eternal Light. Touch it and let it burn to ashes!",
      "icon": "skill001/skill0006_4",
      "description": "5 nearest enemies dealmagic damage and inflicts Magic Defense DOWN(LV 4) for 10 seconds and BlockDOWN(LV 4) for 10 seconds , having3[Fire Mark] when1[Burn Mark](treated as1HP-2000)",
      "effect": "320% + 550",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Eternal Light. Touch it and let it burn to ashes!",
      "icon": "skill001/skill0006_5",
      "description": "5 nearest enemies dealmagic damage and inflicts Magic Defense DOWN(LV 5) for 10 seconds and BlockDOWN(LV 5) for 10 seconds , having3[Fire Mark] when1[Burn Mark](treated as1HP-2000)",
      "effect": "340% + 600",
      "buffEffects": [
        {
          "name": "Magic Defense- Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Block- Ultimate Lv5",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+389), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Ange",
  "id": 2145,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 2259,
    "ATK": 145,
    "MATK": 242,
    "DEF": 32,
    "MDEF": 82
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.68"
  },
  "slug": "ange"
};

export const stats = {
  "id": "ange",
  "characterId": 2145,
  "name": "Ange",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 2259,
      "lv90": 11296
    },
    "atk": {
      "base": 145,
      "lv90": 725
    },
    "matk": {
      "base": 242,
      "lv90": 1210
    },
    "def": {
      "base": 32,
      "lv90": 89
    },
    "mdef": {
      "base": 82,
      "lv90": 139
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 45,
      "lv90": 135
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
      "base": 112,
      "lv90": 394
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
      "base": 54,
      "lv90": 54
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
      "HP": 678,
      "MATK": 73,
      "Block": 14,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 779,
      "MATK": 83,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 915,
      "MATK": 98,
      "Block": 18,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1017,
      "MATK": 109,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1920,
      "MATK": 224,
      "DEF": 3,
      "MDEF": 21,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 5309,
      "MATK": 587,
      "Block": 68,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 3,
      "MDEF": 21,
      "Heal Pwr": 25
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
      "HP": 238,
      "MATK": 25,
      "MDEF": 4,
      "Magic Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 285,
      "MATK": 31,
      "MDEF": 4,
      "Magic Crit": 8,
      "Block": 14
    },
    "g3": {
      "HP": 333,
      "MATK": 36,
      "MDEF": 5,
      "Magic Crit": 9,
      "Accuracy": 12
    },
    "g4": {
      "HP": 381,
      "MATK": 41,
      "MDEF": 6,
      "Magic Crit": 10,
      "Block": 19
    },
    "g5": {
      "HP": 428,
      "MATK": 46,
      "MDEF": 7,
      "Magic Crit": 12,
      "MP Charge": 5
    },
    "g6": {
      "HP": 476,
      "MATK": 51,
      "MDEF": 7,
      "Magic Crit": 13,
      "Accuracy": 18
    },
    "g7": {
      "HP": 523,
      "MATK": 56,
      "MDEF": 8,
      "Magic Crit": 14,
      "Block": 26
    },
    "g8": {
      "HP": 571,
      "MATK": 61,
      "MDEF": 9,
      "Magic Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 618,
      "MATK": 66,
      "MDEF": 10,
      "Magic Crit": 17,
      "Block": 31
    },
    "g10": {
      "HP": 666,
      "MATK": 71,
      "MDEF": 10,
      "Magic Crit": 18,
      "MP Charge": 7
    },
    "total": {
      "HP": 666,
      "MATK": 71,
      "MDEF": 10,
      "Magic Crit": 18,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 20
    },
    {
      "grade": 2,
      "Magic Crit": 11
    },
    {
      "grade": 3,
      "MATK": 28
    },
    {
      "grade": 4,
      "Magic Crit": 15
    },
    {
      "grade": 5,
      "MATK": 36
    },
    {
      "grade": 6,
      "Magic Crit": 18
    },
    {
      "grade": 7,
      "MATK": 44
    },
    {
      "grade": 8,
      "Magic Crit": 22
    },
    {
      "grade": 9,
      "MATK": 52
    },
    {
      "grade": 10,
      "Magic Crit": 25
    },
    {
      "grade": 11,
      "MATK": 55
    }
  ]
};;;;;;;;
