// Character data: the-noble-succubus-empress-shamshel
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "the-noble-succubus-empress-shamshel",
  "name": "The Noble Succubus Empress: Shamshel",
  "displayName": "The Noble Succubus Empress: Shamshel",
  "baseName": "Shamshel",
  "title": "The Noble Succubus Empress",
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Fast",
  "range": 360,
  "weaponType": "Ranged",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Shamshel",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "154cm",
    "bust": "100cm (K Cup)",
    "waist": "55cm",
    "hips": "80cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "金松由華",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2040
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Juuump—up we go～♪",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the 3 nearest enemies",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "110% ATK",
      "baseDamage": "+50",
      "levelGrowth": "+10",
      "lvl1": "110% + 50",
      "lvl90": "110% + 940",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "The noble princess makes her entrance～♪",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Accuracy -9 DOWN for 10 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Accuracy -9 DOWN for 10 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Accuracy -18 DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "90% ATK",
      "baseDamage": "+35",
      "levelGrowth": "+6",
      "lvl1": "90% + 35",
      "lvl90": "90% + 26",
      "effects": [
        "Charm",
        "Accuracy - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Accuracy - Lv3",
          "value": -9,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.1
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "I’ll eat you up and bring peace to the world♪",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the 3 nearest enemies and applies Magic Attack UP(LV 1) to self for 10 seconds",
      "effect": "360% + 394",
      "buffEffects": [
        {
          "name": "Magic Attack + Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "I’ll eat you up and bring peace to the world♪",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the 3 nearest enemies and applies Magic Attack UP(LV 2) to self for 10 seconds",
      "effect": "450% + 445",
      "buffEffects": [
        {
          "name": "Magic Attack + Ultimate Lv2",
          "value": 25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "I’ll eat you up and bring peace to the world♪",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to the 3 nearest enemies and applies Magic Attack UP(LV 3) to self for 10 seconds",
      "effect": "522% + 496",
      "buffEffects": [
        {
          "name": "Magic Attack + Ultimate Lv3",
          "value": 29,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "I’ll eat you up and bring peace to the world♪",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to the 3 nearest enemies and applies Magic Attack UP(LV 4) to self for 10 seconds",
      "effect": "579% + 532",
      "buffEffects": [
        {
          "name": "Magic Attack + Ultimate Lv4",
          "value": 32,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "I’ll eat you up and bring peace to the world♪",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to the 3 nearest enemies and applies Magic Attack UP(LV 5) to self for 10 seconds",
      "effect": "612% + 565",
      "buffEffects": [
        {
          "name": "Magic Attack + Ultimate Lv5",
          "value": 35,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Charm Resistance LvMax, Confusion Resistance LvMax",
      "icon": "skill001/skill1003",
      "effect": "Charm Resistance LvMax (+1%), Confusion Resistance LvMax (+1%)",
      "effectValues": [
        {
          "name": "Charm Resistance LvMax",
          "value": 1,
          "type": "percent"
        },
        {
          "name": "Confusion Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Magic Attack +, Skill Damage +",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+389), Skill Damage + (+30%)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "The Noble Succubus Empress: Shamshel",
  "id": 2040,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1715,
    "ATK": 179,
    "MATK": 299,
    "DEF": 57,
    "MDEF": 143
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Basic → Skill2",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.69"
  },
  "slug": "the-noble-succubus-empress-shamshel"
};

export const stats = {
  "id": "the-noble-succubus-empress-shamshel",
  "characterId": 2040,
  "name": "【The Noble Succubus Empress】Shamshel",
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
      "base": 1715,
      "lv90": 8575
    },
    "atk": {
      "base": 179,
      "lv90": 896
    },
    "matk": {
      "base": 299,
      "lv90": 1495
    },
    "def": {
      "base": 57,
      "lv90": 114
    },
    "mdef": {
      "base": 143,
      "lv90": 286
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
      "base": 124,
      "lv90": 198
    },
    "magicCrit": {
      "base": 207,
      "lv90": 331
    },
    "hpRegen": {
      "base": 85,
      "lv90": 299
    },
    "mpRegen": {
      "base": 56,
      "lv90": 225
    },
    "healPwr": {
      "base": 82,
      "lv90": 206
    },
    "mpCharge": {
      "base": 53,
      "lv90": 53
    },
    "hpDrain": {
      "base": 10,
      "lv90": 28
    },
    "mpCostDown": {
      "base": 0,
      "lv90": 0
    }
  },
  "limitBreak": {
    "lb1": {
      "HP": 515,
      "MATK": 90,
      "Block": 17,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 592,
      "MATK": 103,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 695,
      "MATK": 121,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 772,
      "MATK": 135,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1458,
      "MATK": 277,
      "DEF": 11,
      "MDEF": 41,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4032,
      "MATK": 726,
      "Block": 83,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 11,
      "MDEF": 41,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "HP Drain": 2
    },
    "gp2": {
      "MATK": 40,
      "HP Drain": 2
    },
    "gp3": {
      "MATK": 40,
      "HP Drain": 5
    },
    "gp4": {
      "MATK": 120,
      "HP Drain": 5
    },
    "gp5": {
      "MATK": 120,
      "HP Drain": 7
    },
    "gp6": {
      "MATK": 200,
      "HP Drain": 7
    },
    "gp7": {
      "MATK": 200,
      "HP Drain": 9
    },
    "gp8": {
      "MATK": 280,
      "HP Drain": 9
    },
    "gp9": {
      "MATK": 280,
      "HP Drain": 11
    },
    "gp10": {
      "MATK": 360,
      "HP Drain": 11
    },
    "total": {
      "MATK": 360,
      "HP Drain": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 181,
      "MATK": 31,
      "MDEF": 6,
      "Magic Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 217,
      "MATK": 38,
      "MDEF": 8,
      "Magic Crit": 5,
      "Block": 17
    },
    "g3": {
      "HP": 253,
      "MATK": 44,
      "MDEF": 9,
      "Magic Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 289,
      "MATK": 50,
      "MDEF": 10,
      "Magic Crit": 7,
      "Block": 23
    },
    "g5": {
      "HP": 325,
      "MATK": 57,
      "MDEF": 12,
      "Magic Crit": 8,
      "MP Charge": 5
    },
    "g6": {
      "HP": 361,
      "MATK": 63,
      "MDEF": 13,
      "Magic Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 397,
      "MATK": 69,
      "MDEF": 14,
      "Magic Crit": 10,
      "Block": 32
    },
    "g8": {
      "HP": 433,
      "MATK": 76,
      "MDEF": 16,
      "Magic Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 469,
      "MATK": 82,
      "MDEF": 17,
      "Magic Crit": 11,
      "Block": 38
    },
    "g10": {
      "HP": 506,
      "MATK": 88,
      "MDEF": 18,
      "Magic Crit": 12,
      "MP Charge": 7
    },
    "total": {
      "HP": 506,
      "MATK": 88,
      "MDEF": 18,
      "Magic Crit": 12,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 25
    },
    {
      "grade": 2,
      "HP Drain": 1
    },
    {
      "grade": 3,
      "MATK": 35
    },
    {
      "grade": 4,
      "HP Drain": 1
    },
    {
      "grade": 5,
      "MATK": 45
    },
    {
      "grade": 6,
      "HP Drain": 1
    },
    {
      "grade": 7,
      "MATK": 55
    },
    {
      "grade": 8,
      "HP Drain": 1
    },
    {
      "grade": 9,
      "MATK": 65
    },
    {
      "grade": 10,
      "HP Drain": 1
    },
    {
      "grade": 11,
      "MATK": 68
    }
  ]
};;;;;;;;
