// Character data: collie
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "collie",
  "name": "Collie",
  "displayName": "Collie",
  "baseName": "Collie",
  "title": null,
  "rarity": "SR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 235,
  "weaponType": "Slash",
  "skillTypes": [
    "Buff"
  ],
  "image": "Collie",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "157cm",
    "bust": "111cm (M Cup)",
    "waist": "63cm",
    "hips": "93cm"
  },
  "credits": {
    "illustration": {
      "japanese": "ごばん",
      "romanized": ""
    },
    "voice": {
      "japanese": "双葉鈴",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2133
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Hold still. I'll make a clean cut.",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit",
      "descriptionLv1": "Deals physical damage to the nearest enemy, guaranteed hit",
      "descriptionLv90": "Deals physical damage to the nearest enemy, guaranteed hit",
      "target": "Nearest Enemy",
      "castTime": 1.3,
      "damageScaling": "210% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+25",
      "lvl1": "210% + 150",
      "lvl90": "210% + 2375",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "I'll peel it clean.~",
      "icon": "skill001/skill0013",
      "description": "Applies Physical Critical Damage 30 UP to self for 12 seconds, [Sharpness]([Sharpness]1Physical Attack10%UP, max2), [Sharpness]2 whenapply to self20 Hit-Based physical damageUP(20%, 6)",
      "descriptionLv1": "Applies Physical Critical Damage 30 UP to self for 12 seconds, [Sharpness]([Sharpness]1Physical Attack10%UP, max2), [Sharpness]2 whenapply to self20 Hit-Based physical damageUP(20%, 6)",
      "descriptionLv90": "Applies Physical Critical Damage 30 UP to self for 12 seconds, [Sharpness]([Sharpness]1Physical Attack10%UP, max2), [Sharpness]2 whenapply to self20 Hit-Based physical damageUP(20%, 6)",
      "target": "Self",
      "castTime": 1.3,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv2",
        "Sharpness"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv2",
          "value": 30,
          "type": "percent",
          "duration": 12,
          "levelGrowth": 3.0
        },
        {
          "name": "Sharpness",
          "value": 0,
          "type": "flat",
          "duration": 999
        }
      ],
      "duration": 999
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "I know how to deal with you now!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit",
      "effect": "900% + 400",
      "buffEffects": []
    },
    {
      "rank": 2,
      "name": "Hold still. I'll make a clean cut.",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit",
      "effect": "210% + 150",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "I'll peel it clean.~",
      "icon": "skill001/skill0013",
      "description": "Applies Physical Critical Damage 30 UP to self for 12 seconds, [Sharpness]([Sharpness]1Physical Attack10%UP, max2), [Sharpness]2 whenapply to self20 Hit-Based physical damageUP(20%, 6)",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv2",
          "value": 30,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Sharpness",
          "value": 0,
          "type": "flat",
          "duration": 999
        }
      ]
    },
    {
      "rank": 4,
      "name": "I know how to deal with you now!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit",
      "effect": "900% + 400",
      "buffEffects": []
    },
    {
      "rank": 5,
      "name": "I know how to deal with you now!",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy, guaranteed hit",
      "effect": "1080% + 600",
      "buffEffects": []
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+20%), Physical Attack + (+130)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 130,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Collie",
  "id": 2133,
  "rarity": "SR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Buff"
  ],
  "baseStats": {
    "HP": 1411,
    "ATK": 232,
    "MATK": 139,
    "DEF": 208,
    "MDEF": 83
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "collie"
};

export const stats = {
  "id": "collie",
  "characterId": 2133,
  "name": "Collie",
  "rarity": "SR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff"
  ],
  "baseStats": {
    "hp": {
      "base": 1411,
      "lv90": 7058
    },
    "atk": {
      "base": 232,
      "lv90": 1160
    },
    "matk": {
      "base": 139,
      "lv90": 695
    },
    "def": {
      "base": 208,
      "lv90": 393
    },
    "mdef": {
      "base": 83,
      "lv90": 200
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
      "base": 399,
      "lv90": 638
    },
    "magicCrit": {
      "base": 239,
      "lv90": 382
    },
    "hpRegen": {
      "base": 70,
      "lv90": 246
    },
    "mpRegen": {
      "base": 56,
      "lv90": 225
    },
    "healPwr": {
      "base": 82,
      "lv90": 232
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
      "HP": 424,
      "ATK": 70,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 487,
      "ATK": 80,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 572,
      "ATK": 94,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 635,
      "ATK": 104,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1035,
      "ATK": 182,
      "DEF": 49,
      "MDEF": 18,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 3153,
      "ATK": 530,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 49,
      "MDEF": 18,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp5": {
      "ATK": 150,
      "Phys Crit": 30
    },
    "gp6": {
      "ATK": 150,
      "Phys Crit": 50
    },
    "gp7": {
      "ATK": 210,
      "Phys Crit": 50
    },
    "gp8": {
      "ATK": 210,
      "Phys Crit": 70
    },
    "gp9": {
      "ATK": 270,
      "Phys Crit": 70
    },
    "gp10": {
      "ATK": 270,
      "Phys Crit": 90
    },
    "total": {
      "ATK": 270,
      "Phys Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 149,
      "ATK": 24,
      "Phys Crit": 8,
      "Accuracy": 9
    },
    "g2": {
      "HP": 178,
      "ATK": 29,
      "Phys Crit": 10,
      "Block": 16
    },
    "g3": {
      "HP": 208,
      "ATK": 34,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 238,
      "ATK": 39,
      "Phys Crit": 13,
      "Block": 21
    },
    "g5": {
      "HP": 267,
      "ATK": 44,
      "Phys Crit": 15,
      "MP Charge": 5
    },
    "g6": {
      "HP": 297,
      "ATK": 49,
      "Phys Crit": 17,
      "Accuracy": 18
    },
    "g7": {
      "HP": 327,
      "ATK": 54,
      "Phys Crit": 19,
      "Block": 29
    },
    "g8": {
      "HP": 357,
      "ATK": 59,
      "Phys Crit": 20,
      "Accuracy": 21
    },
    "g9": {
      "HP": 386,
      "ATK": 63,
      "Phys Crit": 22,
      "Block": 34
    },
    "g10": {
      "HP": 416,
      "ATK": 68,
      "Phys Crit": 24,
      "MP Charge": 7
    },
    "total": {
      "HP": 416,
      "ATK": 68,
      "Phys Crit": 24,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 19
    },
    {
      "grade": 2,
      "Phys Crit": 14
    },
    {
      "grade": 3,
      "ATK": 27
    },
    {
      "grade": 4,
      "Phys Crit": 19
    },
    {
      "grade": 5,
      "ATK": 35
    },
    {
      "grade": 6,
      "Phys Crit": 24
    },
    {
      "grade": 7,
      "ATK": 43
    },
    {
      "grade": 8,
      "Phys Crit": 29
    },
    {
      "grade": 9,
      "ATK": 50
    },
    {
      "grade": 10,
      "Phys Crit": 34
    },
    {
      "grade": 11,
      "ATK": 53
    }
  ]
};;;;;;;;
