// Character data: setsuka
// Merged from info/skills/stats files

export const info = {
  "slug": "setsuka",
  "name": "Setsuka",
  "displayName": "Setsuka",
  "baseName": "Setsuka",
  "title": null,
  "rarity": "SSR",
  "element": "Fire",
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
    "Buff",
    "Sure-hit"
  ],
  "image": "Setsuka",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "???cm",
    "bust": "???cm",
    "waist": "???cm",
    "hips": "???cm"
  },
  "credits": {
    "illustration": {
      "japanese": "???",
      "romanized": "???"
    },
    "voice": {
      "japanese": "???",
      "romanized": "???"
    }
  },
  "obtain": {
    "type": "permanent",
    "source": "Standard Banner"
  }
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Swift as the Wind",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemyguaranteed hit",
      "descriptionLv1": "Deals physical damage to the nearest enemyguaranteed hit",
      "descriptionLv90": "Deals physical damage to the nearest enemyguaranteed hit",
      "target": "Nearest Enemy",
      "castTime": 0.98,
      "damageScaling": "320% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+30",
      "lvl1": "320% + 100",
      "lvl90": "320% + 2770",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Oni Stance",
      "icon": "skill001/skill0013",
      "description": "Applies Physical Attack +40 UP to self for 8 seconds and Physical Critical Damage 50 UP for 8 seconds",
      "descriptionLv1": "Applies Physical Attack +40 UP to self for 8 seconds and Physical Critical Damage 50 UP for 8 seconds",
      "descriptionLv90": "Applies Physical Attack +850 UP to self for 8 seconds and Physical Critical Damage 50 UP for 8 seconds",
      "target": "Self",
      "castTime": 0.98,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv5",
        "Physical Critical Damage+ Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 9.0
        },
        {
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "percent",
          "duration": 8,
          "levelGrowth": 7.0
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Blade Dance: Plum Blossom Banquet",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemyguaranteed hit and applies Fire Type ATK UP(LV 1) to self for 8 seconds",
      "effect": "1100% + 1200",
      "buffEffects": [
        {
          "name": "Fire Type ATK + Ultimate Lv1",
          "value": 15,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Swift as the Wind",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemyguaranteed hit",
      "effect": "320% + 100",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "Oni Stance",
      "icon": "skill001/skill0013",
      "description": "Applies Physical Attack +40 UP to self for 8 seconds and Physical Critical Damage 50 UP for 8 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Blade Dance: Plum Blossom Banquet",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemyguaranteed hit and applies Fire Type ATK UP(LV 1) to self for 8 seconds",
      "effect": "1100% + 1200",
      "buffEffects": [
        {
          "name": "Fire Type ATK + Ultimate Lv1",
          "value": 15,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Blade Dance: Plum Blossom Banquet",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemyguaranteed hit and applies Fire Type ATK UP(LV 2) to self for 8 seconds",
      "effect": "1320% + 1400",
      "buffEffects": [
        {
          "name": "Fire Type ATK + Ultimate Lv2",
          "value": 20,
          "type": "percent",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+259), Physical Critical Damage+ (+176%)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 176,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Setsuka",
  "id": 2059,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Sure-hit"
  ],
  "baseStats": {
    "HP": 1457,
    "ATK": 222,
    "MATK": 133,
    "DEF": 226,
    "MDEF": 90
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "setsuka"
};

export const stats = {
  "id": "setsuka",
  "characterId": 2059,
  "name": "Setsuka",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Sure-hit"
  ],
  "baseStats": {
    "hp": {
      "base": 1457,
      "lv90": 7288
    },
    "atk": {
      "base": 222,
      "lv90": 1111
    },
    "matk": {
      "base": 133,
      "lv90": 666
    },
    "def": {
      "base": 226,
      "lv90": 452
    },
    "mdef": {
      "base": 90,
      "lv90": 180
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 55,
      "lv90": 165
    },
    "physCrit": {
      "base": 416,
      "lv90": 665
    },
    "magicCrit": {
      "base": 249,
      "lv90": 398
    },
    "hpRegen": {
      "base": 72,
      "lv90": 254
    },
    "mpRegen": {
      "base": 59,
      "lv90": 237
    },
    "healPwr": {
      "base": 82,
      "lv90": 206
    },
    "mpCharge": {
      "base": 46,
      "lv90": 46
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
      "HP": 675,
      "ATK": 87,
      "Block": 17,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 777,
      "ATK": 100,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 912,
      "ATK": 118,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1013,
      "ATK": 131,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1358,
      "ATK": 216,
      "DEF": 64,
      "MDEF": 18,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4735,
      "ATK": 652,
      "Block": 83,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 64,
      "MDEF": 18,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "Phys Crit": 20
    },
    "gp3": {
      "ATK": 120,
      "Phys Crit": 20
    },
    "gp4": {
      "ATK": 120,
      "Phys Crit": 50
    },
    "gp5": {
      "ATK": 200,
      "Phys Crit": 50
    },
    "gp6": {
      "ATK": 200,
      "Phys Crit": 80
    },
    "gp7": {
      "ATK": 280,
      "Phys Crit": 80
    },
    "gp8": {
      "ATK": 280,
      "Phys Crit": 110
    },
    "gp9": {
      "ATK": 360,
      "Phys Crit": 110
    },
    "gp10": {
      "ATK": 360,
      "Phys Crit": 140
    },
    "total": {
      "ATK": 360,
      "Phys Crit": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 153,
      "ATK": 23,
      "Phys Crit": 9,
      "Accuracy": 9
    },
    "g2": {
      "HP": 184,
      "ATK": 28,
      "Phys Crit": 11,
      "Block": 17
    },
    "g3": {
      "HP": 215,
      "ATK": 33,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 246,
      "ATK": 37,
      "Phys Crit": 14,
      "Block": 23
    },
    "g5": {
      "HP": 276,
      "ATK": 42,
      "Phys Crit": 16,
      "MP Charge": 4
    },
    "g6": {
      "HP": 307,
      "ATK": 47,
      "Phys Crit": 18,
      "Accuracy": 18
    },
    "g7": {
      "HP": 338,
      "ATK": 52,
      "Phys Crit": 19,
      "Block": 32
    },
    "g8": {
      "HP": 368,
      "ATK": 56,
      "Phys Crit": 21,
      "Accuracy": 21
    },
    "g9": {
      "HP": 399,
      "ATK": 61,
      "Phys Crit": 23,
      "Block": 38
    },
    "g10": {
      "HP": 430,
      "ATK": 66,
      "Phys Crit": 25,
      "MP Charge": 6
    },
    "total": {
      "HP": 430,
      "ATK": 66,
      "Phys Crit": 25,
      "MP Charge": 6
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 19
    },
    {
      "grade": 2,
      "Phys Crit": 15
    },
    {
      "grade": 3,
      "ATK": 26
    },
    {
      "grade": 4,
      "Phys Crit": 20
    },
    {
      "grade": 5,
      "ATK": 33
    },
    {
      "grade": 6,
      "Phys Crit": 25
    },
    {
      "grade": 7,
      "ATK": 41
    },
    {
      "grade": 8,
      "Phys Crit": 30
    },
    {
      "grade": 9,
      "ATK": 48
    },
    {
      "grade": 10,
      "Phys Crit": 35
    },
    {
      "grade": 11,
      "ATK": 50
    }
  ]
};;;;;;;;
