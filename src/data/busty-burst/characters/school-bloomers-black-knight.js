// Character data: school-bloomers-black-knight
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "school-bloomers-black-knight",
  "name": "School bloomers: Black Knight",
  "displayName": "School bloomers: Black Knight",
  "baseName": "Black Knight",
  "title": "School bloomers",
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 230,
  "weaponType": "Strike",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Black Knight",
  "introduction": "Front Row、Magical、Attacker",
  "profile": {
    "height": "172cm",
    "bust": "120cm (N Cup)",
    "waist": "68cm",
    "hips": "97cm"
  },
  "credits": {
    "illustration": {
      "japanese": "ぴず",
      "romanized": ""
    },
    "voice": {
      "japanese": "渦井ゆきの",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2138
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Twin Demon Fist",
      "icon": "skill001/skill0008",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense-50 DOWN for 5 seconds and Block-11 DOWN for 5 seconds , enemy has, deal damage +30%",
      "descriptionLv1": "Deals magic damage to the nearest enemy and inflicts Magic Defense-50 DOWN for 5 seconds and Block-11 DOWN for 5 seconds , enemy has, deal damage +30%",
      "descriptionLv90": "Deals magic damage to the nearest enemy and inflicts Magic Defense-320 DOWN for 5 seconds and Block-23 DOWN for 5 seconds , enemy has, deal damage +30%",
      "target": "Nearest Enemy",
      "castTime": 0.75,
      "damageScaling": "350% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "350% + 500",
      "lvl90": "350% + 488",
      "effects": [
        "Magic Defense- Lv5",
        "Block- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense- Lv5",
          "value": -50,
          "type": "flat",
          "duration": 5,
          "levelGrowth": -3.0
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 5,
          "levelGrowth": -0.13
        }
      ],
      "duration": 5
    },
    {
      "slot": 3,
      "name": "Nightmare Fist",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies, inflict 5s , 8s Blind for",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies, inflict 5s , 8s Blind for",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies, inflict 5s , 8s Blind for",
      "target": "Nearest Enemy",
      "castTime": 0.75,
      "damageScaling": "110.00000000000001% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+6",
      "lvl1": "110% + 150",
      "lvl90": null,
      "effects": [
        "Curse",
        "Blind"
      ],
      "buffEffects": [
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Heavenly Descent God's Broadcast",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the nearest enemy, inflict 5s (LV 1)and applies Fear(MP --50 per secondBlock 0) to self for 5 seconds",
      "effect": "1200% + 1000",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv1",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Magic Attack + Ultimate Lv1",
          "value": 20,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 2,
      "name": "Twin Demon Fist",
      "icon": "skill001/skill0008",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense-50 DOWN for 5 seconds and Block-11 DOWN for 5 seconds , enemy has, deal damage +30%",
      "effect": "350% + 500",
      "buffEffects": [
        {
          "name": "Magic Defense- Lv5",
          "value": -50,
          "type": "flat",
          "duration": 5
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "type": "flat",
          "duration": 5
        }
      ]
    },
    {
      "rank": 3,
      "name": "Nightmare Fist",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies, inflict 5s , 8s Blind for",
      "effect": "110% + 150",
      "buffEffects": [
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Heavenly Descent God's Broadcast",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the nearest enemy, inflict 5s (LV 1)and applies Fear(MP --50 per secondBlock 0) to self for 5 seconds",
      "effect": "1200% + 1000",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv1",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Magic Attack + Ultimate Lv1",
          "value": 20,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 5,
      "name": "Heavenly Descent God's Broadcast",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to the nearest enemy, inflict 5s (LV 2)and applies Fear(MP --70 per secondBlock 0) to self for 5 seconds",
      "effect": "1440% + 1250",
      "buffEffects": [
        {
          "name": "Fear Ultimate Lv2",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Magic Attack + Ultimate Lv2",
          "value": 25,
          "type": "flat",
          "duration": 12
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, Magic Type ATK +",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+389), Magic Type ATK + (+5%)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Magic Type ATK +",
          "value": 5,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Skill Enhancement Regol Cost DOWNMagic",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Skill Enhancement Regol Cost DOWNMagic (+5%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Skill Enhancement Regol Cost DOWNMagic",
          "value": 5,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "School bloomers: Black Knight",
  "id": 2138,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2364,
    "ATK": 133,
    "MATK": 222,
    "DEF": 14,
    "MDEF": 35
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.55"
  },
  "slug": "school-bloomers-black-knight"
};

export const stats = {
  "id": "school-bloomers-black-knight",
  "characterId": 2138,
  "name": "【School bloomers】Black Knight",
  "rarity": "SSR",
  "element": "魔",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2364,
      "lv90": 11823
    },
    "atk": {
      "base": 133,
      "lv90": 666
    },
    "matk": {
      "base": 222,
      "lv90": 1111
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
      "lv90": 99
    },
    "block": {
      "base": 50,
      "lv90": 150
    },
    "physCrit": {
      "base": 249,
      "lv90": 398
    },
    "magicCrit": {
      "base": 416,
      "lv90": 665
    },
    "hpRegen": {
      "base": 118,
      "lv90": 413
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
      "base": 49,
      "lv90": 49
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
      "HP": 709,
      "MATK": 67,
      "Block": 15,
      "MP Charge": 4
    },
    "lb2": {
      "HP": 816,
      "MATK": 77,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 958,
      "MATK": 90,
      "Block": 20,
      "MP Charge": 6
    },
    "lb4": {
      "HP": 1064,
      "MATK": 100,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 2010,
      "MATK": 206,
      "DEF": 3,
      "MDEF": 10,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 5557,
      "MATK": 540,
      "Block": 75,
      "MP Charge": 10,
      "Accuracy": 30,
      "DEF": 3,
      "MDEF": 10,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 40
    },
    "gp2": {
      "MATK": 40,
      "Accuracy": 3
    },
    "gp3": {
      "MATK": 120,
      "Accuracy": 3
    },
    "gp4": {
      "MATK": 120,
      "Accuracy": 7
    },
    "gp5": {
      "MATK": 200,
      "Accuracy": 7
    },
    "gp6": {
      "MATK": 200,
      "Accuracy": 10
    },
    "gp7": {
      "MATK": 280,
      "Accuracy": 10
    },
    "gp8": {
      "MATK": 280,
      "Accuracy": 13
    },
    "gp9": {
      "MATK": 360,
      "Accuracy": 13
    },
    "gp10": {
      "MATK": 360,
      "Accuracy": 16
    },
    "total": {
      "MATK": 360,
      "Accuracy": 16
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 249,
      "MATK": 23,
      "MDEF": 2,
      "Magic Crit": 9,
      "Accuracy": 9
    },
    "g2": {
      "HP": 299,
      "MATK": 28,
      "MDEF": 2,
      "Magic Crit": 11,
      "Block": 16
    },
    "g3": {
      "HP": 348,
      "MATK": 33,
      "MDEF": 2,
      "Magic Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 398,
      "MATK": 37,
      "MDEF": 3,
      "Magic Crit": 14,
      "Block": 21
    },
    "g5": {
      "HP": 448,
      "MATK": 42,
      "MDEF": 3,
      "Magic Crit": 16,
      "MP Charge": 4
    },
    "g6": {
      "HP": 498,
      "MATK": 47,
      "MDEF": 3,
      "Magic Crit": 18,
      "Accuracy": 18
    },
    "g7": {
      "HP": 548,
      "MATK": 52,
      "MDEF": 4,
      "Magic Crit": 19,
      "Block": 29
    },
    "g8": {
      "HP": 597,
      "MATK": 56,
      "MDEF": 4,
      "Magic Crit": 21,
      "Accuracy": 21
    },
    "g9": {
      "HP": 647,
      "MATK": 61,
      "MDEF": 4,
      "Magic Crit": 23,
      "Block": 34
    },
    "g10": {
      "HP": 697,
      "MATK": 66,
      "MDEF": 5,
      "Magic Crit": 25,
      "MP Charge": 6
    },
    "total": {
      "HP": 697,
      "MATK": 66,
      "MDEF": 5,
      "Magic Crit": 25,
      "MP Charge": 6
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 19
    },
    {
      "grade": 2,
      "Magic Crit": 15
    },
    {
      "grade": 3,
      "MATK": 26
    },
    {
      "grade": 4,
      "Magic Crit": 20
    },
    {
      "grade": 5,
      "MATK": 33
    },
    {
      "grade": 6,
      "Magic Crit": 25
    },
    {
      "grade": 7,
      "MATK": 41
    },
    {
      "grade": 8,
      "Magic Crit": 30
    },
    {
      "grade": 9,
      "MATK": 48
    },
    {
      "grade": 10,
      "Magic Crit": 35
    },
    {
      "grade": 11,
      "MATK": 50
    }
  ]
};;;;;;;;
