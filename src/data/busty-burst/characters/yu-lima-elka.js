// Character data: yu-lima-elka
// Merged from info/skills/stats files

export const info = {
  "slug": "yu-lima-elka",
  "name": "Yu Lima Elka",
  "displayName": "Yu Lima Elka",
  "baseName": "Yu Lima Elka",
  "title": null,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slightly Slow",
  "range": 200,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Yu_Lima_Elka",
  "introduction": "Front Row、Physical、Tank",
  "profile": {
    "height": "163cm",
    "bust": "106cm (K Cup)",
    "waist": "63cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "3104",
      "romanized": "3104"
    },
    "voice": {
      "japanese": "\u3042\u304b\u3057\u3086\u304d",
      "romanized": "Akashi Yuki"
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
      "name": "Let Me Play With You♪",
      "icon": "skill001/skill0008",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Attack -9%-20 DOWN for 7 seconds and Magic Attack -9%-20 DOWN for 7 seconds",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Physical Attack -9%-20 DOWN for 7 seconds and Magic Attack -9%-20 DOWN for 7 seconds",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Physical Attack -9%-2000 DOWN for 7 seconds and Magic Attack -9%-20 DOWN for 7 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "110.00000000000001% ATK",
      "baseDamage": "+60",
      "levelGrowth": "+6",
      "lvl1": "110% + 60",
      "lvl90": "110% + -118",
      "effects": [
        "Physical Attack - Lv3",
        "Magic Attack - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv3",
          "value": -20,
          "type": "flat",
          "duration": 7,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Attack - Lv3",
          "value": -20,
          "type": "flat",
          "duration": 7,
          "levelGrowth": -2.0
        }
      ],
      "duration": 7
    },
    {
      "slot": 3,
      "name": "Become My Captive♪",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Charm for 3 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Charm for 3 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Charm for 3 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "300% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+25",
      "lvl1": "300% + 150",
      "lvl90": null,
      "effects": [
        "Charm"
      ],
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ],
      "duration": 3
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Phantom Nail",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Paralysis for 6 seconds , 6s Curse for state",
      "effect": "900% + 850",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 2,
      "name": "Phantom Nail",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Paralysis for 6 seconds , 6s Curse for state",
      "effect": "1080% + 920",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Phantom Nail",
      "icon": "skill001/skill0012_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Paralysis for 7 seconds , 7s Curse for state",
      "effect": "1170% + 1010",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 7
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 7
        }
      ]
    },
    {
      "rank": 4,
      "name": "Phantom Nail",
      "icon": "skill001/skill0012_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Paralysis for 7 seconds , 7s Curse for state",
      "effect": "1260% + 1150",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 7
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 7
        }
      ]
    },
    {
      "rank": 5,
      "name": "Phantom Nail",
      "icon": "skill001/skill0012_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Paralysis for 8 seconds , 8s Curse for state",
      "effect": "1350% + 1300",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 8
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Block+",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+3444), Block+ (+15)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        },
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Action Speed +",
      "icon": "skill001/skill1003",
      "effect": "Skill Damage + (+20%), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
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
  "name": "Yu Lima Elka",
  "id": 2060,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 4150,
    "ATK": 267,
    "MATK": 160,
    "DEF": 35,
    "MDEF": 14
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Basic → Basic → Skill3",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "yu-lima-elka"
};

export const stats = {
  "id": "yu-lima-elka",
  "characterId": 2060,
  "name": "Yu Lima Elka",
  "rarity": "SSR",
  "element": "魔",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 4150,
      "lv90": 20751
    },
    "atk": {
      "base": 267,
      "lv90": 1338
    },
    "matk": {
      "base": 160,
      "lv90": 802
    },
    "def": {
      "base": 35,
      "lv90": 70
    },
    "mdef": {
      "base": 14,
      "lv90": 28
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
      "base": 53,
      "lv90": 85
    },
    "magicCrit": {
      "base": 32,
      "lv90": 51
    },
    "hpRegen": {
      "base": 207,
      "lv90": 725
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
      "base": 79,
      "lv90": 79
    },
    "hpDrain": {
      "base": 12,
      "lv90": 30
    },
    "mpCostDown": {
      "base": 0,
      "lv90": 0
    }
  },
  "limitBreak": {
    "lb1": {
      "HP": 1245,
      "ATK": 80,
      "Block": 14,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 1432,
      "ATK": 92,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 1681,
      "ATK": 108,
      "Block": 18,
      "MP Charge": 10
    },
    "lb4": {
      "HP": 1868,
      "ATK": 121,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 3899,
      "ATK": 237,
      "DEF": 10,
      "MDEF": 3,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 10125,
      "ATK": 638,
      "Block": 68,
      "MP Charge": 17,
      "Accuracy": 30,
      "DEF": 10,
      "MDEF": 3,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "HP Drain": 2
    },
    "gp2": {
      "HP": 300,
      "HP Drain": 2
    },
    "gp3": {
      "HP": 300,
      "HP Drain": 5
    },
    "gp4": {
      "HP": 750,
      "HP Drain": 5
    },
    "gp5": {
      "HP": 750,
      "HP Drain": 7
    },
    "gp6": {
      "HP": 1200,
      "HP Drain": 7
    },
    "gp7": {
      "HP": 1200,
      "HP Drain": 9
    },
    "gp8": {
      "HP": 1650,
      "HP Drain": 9
    },
    "gp9": {
      "HP": 1650,
      "HP Drain": 11
    },
    "gp10": {
      "HP": 2100,
      "HP Drain": 11
    },
    "total": {
      "HP": 2100,
      "HP Drain": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 437,
      "ATK": 28,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 524,
      "ATK": 34,
      "Phys Crit": 1,
      "Block": 14
    },
    "g3": {
      "HP": 612,
      "ATK": 39,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 699,
      "ATK": 45,
      "Phys Crit": 2,
      "Block": 19
    },
    "g5": {
      "HP": 786,
      "ATK": 51,
      "Phys Crit": 2,
      "MP Charge": 7
    },
    "g6": {
      "HP": 874,
      "ATK": 56,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 961,
      "ATK": 62,
      "Phys Crit": 2,
      "Block": 26
    },
    "g8": {
      "HP": 1049,
      "ATK": 68,
      "Phys Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 1136,
      "ATK": 73,
      "Phys Crit": 3,
      "Block": 31
    },
    "g10": {
      "HP": 1223,
      "ATK": 79,
      "Phys Crit": 3,
      "MP Charge": 10
    },
    "total": {
      "HP": 1223,
      "ATK": 79,
      "Phys Crit": 3,
      "MP Charge": 10
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 346
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "HP": 484
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "HP": 623
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "HP": 761
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "HP": 899
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "HP": 944
    }
  ]
};;;;;;;;
