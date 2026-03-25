// Character data: gemini
// Merged from info/skills/stats files

export const info = {
  "slug": "gemini",
  "name": "Gemini",
  "displayName": "Gemini",
  "baseName": "Gemini",
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
  "weaponType": "Pierce",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Gemini",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "166cm",
    "bust": "114cm (M Cup)",
    "waist": "66cm",
    "hips": "100cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u308c\u3080",
      "romanized": "Remu"
    },
    "voice": {
      "japanese": "\u68ee\u4e43\u306a\u3093\u306a",
      "romanized": "Morino Nanna"
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
      "name": "Don’t underestimate a treasure hunter!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy",
      "descriptionLv1": "Deals physical damage to the nearest enemy",
      "descriptionLv90": "Deals physical damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 0.66,
      "damageScaling": "400% ATK",
      "baseDamage": "+160",
      "levelGrowth": "+30",
      "lvl1": "400% + 160",
      "lvl90": "400% + 2830",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "This isn’t something an idiot could pull off, you know?",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -18%-30 DOWN for 10 seconds and Accuracy -11 DOWN for 10 seconds",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -18%-30 DOWN for 10 seconds and Accuracy -11 DOWN for 10 seconds",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -18%-210 DOWN for 10 seconds and Accuracy -23 DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.66,
      "damageScaling": "120% ATK",
      "baseDamage": "+50",
      "levelGrowth": "+6",
      "lvl1": "120% + 50",
      "lvl90": "120% + 38",
      "effects": [
        "Physical Defense - Lv3",
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -2.0
        },
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.13
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Cruel Destroyer",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 3 nearest enemies",
      "effect": "500% + 500",
      "buffEffects": []
    },
    {
      "rank": 2,
      "name": "Cruel Destroyer",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 3 nearest enemies",
      "effect": "600% + 650",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "Cruel Destroyer",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the 3 nearest enemies",
      "effect": "750% + 750",
      "buffEffects": []
    },
    {
      "rank": 4,
      "name": "Cruel Destroyer",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the 3 nearest enemies",
      "effect": "800% + 800",
      "buffEffects": []
    },
    {
      "rank": 5,
      "name": "Cruel Destroyer",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the 3 nearest enemies",
      "effect": "850% + 850",
      "buffEffects": []
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+159), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 159,
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
      "name": "Physical Critical Damage+, Skill Damage +",
      "icon": "skill001/skill1001",
      "effect": "Physical Critical Damage+ (+90%), Skill Damage + (+30%)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "percent"
        },
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Gemini",
  "id": 2052,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 190,
    "MATK": 114,
    "DEF": 143,
    "MDEF": 57
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.36"
  },
  "slug": "gemini"
};

export const stats = {
  "id": "gemini",
  "characterId": 2052,
  "name": "Gemini",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1819,
      "lv90": 9095
    },
    "atk": {
      "base": 190,
      "lv90": 952
    },
    "matk": {
      "base": 114,
      "lv90": 571
    },
    "def": {
      "base": 143,
      "lv90": 286
    },
    "mdef": {
      "base": 57,
      "lv90": 114
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
      "base": 416,
      "lv90": 665
    },
    "magicCrit": {
      "base": 249,
      "lv90": 398
    },
    "hpRegen": {
      "base": 90,
      "lv90": 317
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
      "HP": 546,
      "ATK": 57,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 628,
      "ATK": 66,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 737,
      "ATK": 77,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 819,
      "ATK": 86,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1546,
      "ATK": 196,
      "DEF": 50,
      "MDEF": 11,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4276,
      "ATK": 482,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 50,
      "MDEF": 11,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "Accuracy": 3
    },
    "gp2": {
      "ATK": 40,
      "Accuracy": 3
    },
    "gp3": {
      "ATK": 40,
      "Accuracy": 7
    },
    "gp4": {
      "ATK": 120,
      "Accuracy": 7
    },
    "gp5": {
      "ATK": 120,
      "Accuracy": 10
    },
    "gp6": {
      "ATK": 200,
      "Accuracy": 10
    },
    "gp7": {
      "ATK": 200,
      "Accuracy": 13
    },
    "gp8": {
      "ATK": 280,
      "Accuracy": 13
    },
    "gp9": {
      "ATK": 280,
      "Accuracy": 16
    },
    "gp10": {
      "ATK": 360,
      "Accuracy": 16
    },
    "total": {
      "ATK": 360,
      "Accuracy": 16
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 191,
      "ATK": 20,
      "Phys Crit": 9,
      "Accuracy": 9
    },
    "g2": {
      "HP": 230,
      "ATK": 24,
      "Phys Crit": 11,
      "Block": 16
    },
    "g3": {
      "HP": 268,
      "ATK": 28,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 306,
      "ATK": 32,
      "Phys Crit": 14,
      "Block": 21
    },
    "g5": {
      "HP": 345,
      "ATK": 36,
      "Phys Crit": 16,
      "MP Charge": 5
    },
    "g6": {
      "HP": 383,
      "ATK": 40,
      "Phys Crit": 18,
      "Accuracy": 18
    },
    "g7": {
      "HP": 421,
      "ATK": 44,
      "Phys Crit": 19,
      "Block": 29
    },
    "g8": {
      "HP": 460,
      "ATK": 48,
      "Phys Crit": 21,
      "Accuracy": 21
    },
    "g9": {
      "HP": 498,
      "ATK": 52,
      "Phys Crit": 23,
      "Block": 34
    },
    "g10": {
      "HP": 536,
      "ATK": 56,
      "Phys Crit": 25,
      "MP Charge": 8
    },
    "total": {
      "HP": 536,
      "ATK": 56,
      "Phys Crit": 25,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 16
    },
    {
      "grade": 2,
      "Phys Crit": 15
    },
    {
      "grade": 3,
      "ATK": 22
    },
    {
      "grade": 4,
      "Phys Crit": 20
    },
    {
      "grade": 5,
      "ATK": 29
    },
    {
      "grade": 6,
      "Phys Crit": 25
    },
    {
      "grade": 7,
      "ATK": 35
    },
    {
      "grade": 8,
      "Phys Crit": 30
    },
    {
      "grade": 9,
      "ATK": 41
    },
    {
      "grade": 10,
      "Phys Crit": 35
    },
    {
      "grade": 11,
      "ATK": 43
    }
  ]
};;;;;;;;
