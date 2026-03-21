// Character data: mischievous-mermaid-princess-lorelia
// Merged from info/skills/stats files

export const info = {
  "slug": "mischievous-mermaid-princess-lorelia",
  "name": "[Mischievous Mermaid Princess] Lorelia",
  "displayName": "Mischievous Mermaid Princess Lorelia",
  "baseName": "Lorelia",
  "title": "Mischievous Mermaid Princess",
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 240,
  "weaponType": "Strike/Blunt",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Mischievous_Mermaid_Princess_Lorelia",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "155cm",
    "bust": "99cm (H Cup)",
    "waist": "56cm",
    "hips": "89cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u6df1\u6ce5\u6b63",
      "romanized": "Fukadoro Tadashi"
    },
    "voice": {
      "japanese": "\u82b1\u5357",
      "romanized": "Hanami"
    }
  },
  "obtain": {
    "type": "seasonal",
    "source": "Season 1 (Dec 4 - Mar 3)"
  }
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Turn and—bam!",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 2.5 seconds and Block-13 DOWN for 10 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Stun for 2.5 seconds and Block-13 DOWN for 10 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Stun for 2.5 seconds and Block-26 DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "280% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+20",
      "lvl1": "280% + 150",
      "lvl90": "280% + 136",
      "effects": [
        "Stun",
        "Block- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.15
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Bam-bam!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the 3 nearest enemies",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "110.00000000000001% ATK",
      "baseDamage": "+70",
      "levelGrowth": "+10",
      "lvl1": "110% + 70",
      "lvl90": "110% + 960",
      "effects": [],
      "buffEffects": []
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Lorelia Attack!",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Action Speed DOWN(LV 1) for 10 seconds",
      "effect": "400% + 390",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Turn and—bam!",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 2.5 seconds and Block-13 DOWN for 10 seconds",
      "effect": "280% + 150",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Bam-bam!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the 3 nearest enemies",
      "effect": "110% + 70",
      "buffEffects": []
    },
    {
      "rank": 4,
      "name": "Lorelia Attack!",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Action Speed DOWN(LV 1) for 10 seconds",
      "effect": "400% + 390",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Lorelia Attack!",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Action Speed DOWN(LV 1) for 10 seconds",
      "effect": "500% + 450",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Action Speed - Ultimate Lv2",
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
      "name": "Max HP +, Debuff Resistance +",
      "icon": "skill001/skill1003",
      "effect": "Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Attack +, Accuracy +",
      "icon": "skill001/skill1005",
      "effect": "Physical Attack + (+389), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Accuracy +",
          "value": 20,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Mischievous Mermaid Princess: Lorelia",
  "id": 2067,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 299,
    "MATK": 179,
    "DEF": 82,
    "MDEF": 32
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic → Basic",
    "loop": "Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "mischievous-mermaid-princess-lorelia"
};

export const stats = {
  "id": "mischievous-mermaid-princess-lorelia",
  "characterId": 2067,
  "name": "【Mischievous Mermaid Princess】Lorelia",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2092,
      "lv90": 10460
    },
    "atk": {
      "base": 299,
      "lv90": 1495
    },
    "matk": {
      "base": 179,
      "lv90": 896
    },
    "def": {
      "base": 82,
      "lv90": 164
    },
    "mdef": {
      "base": 32,
      "lv90": 64
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
      "base": 56,
      "lv90": 225
    },
    "healPwr": {
      "base": 82,
      "lv90": 206
    },
    "mpCharge": {
      "base": 77,
      "lv90": 77
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
      "ATK": 90,
      "Block": 15,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 722,
      "ATK": 103,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 847,
      "ATK": 121,
      "Block": 20,
      "MP Charge": 10
    },
    "lb4": {
      "HP": 941,
      "ATK": 135,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1778,
      "ATK": 254,
      "DEF": 23,
      "MDEF": 6,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4916,
      "ATK": 703,
      "Block": 75,
      "MP Charge": 17,
      "Accuracy": 30,
      "DEF": 23,
      "MDEF": 6,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 300
    },
    "gp2": {
      "HP": 300,
      "Phys Crit": 20
    },
    "gp3": {
      "HP": 750,
      "Phys Crit": 20
    },
    "gp4": {
      "HP": 750,
      "Phys Crit": 50
    },
    "gp5": {
      "HP": 1200,
      "Phys Crit": 50
    },
    "gp6": {
      "HP": 1200,
      "Phys Crit": 80
    },
    "gp7": {
      "HP": 1650,
      "Phys Crit": 80
    },
    "gp8": {
      "HP": 1650,
      "Phys Crit": 110
    },
    "gp9": {
      "HP": 2100,
      "Phys Crit": 110
    },
    "gp10": {
      "HP": 2100,
      "Phys Crit": 140
    },
    "total": {
      "HP": 2100,
      "Phys Crit": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 220,
      "ATK": 31,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 264,
      "ATK": 38,
      "Phys Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 308,
      "ATK": 44,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 352,
      "ATK": 50,
      "Phys Crit": 7,
      "Block": 21
    },
    "g5": {
      "HP": 396,
      "ATK": 57,
      "Phys Crit": 8,
      "MP Charge": 7
    },
    "g6": {
      "HP": 440,
      "ATK": 63,
      "Phys Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 484,
      "ATK": 69,
      "Phys Crit": 10,
      "Block": 29
    },
    "g8": {
      "HP": 529,
      "ATK": 76,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 573,
      "ATK": 82,
      "Phys Crit": 11,
      "Block": 34
    },
    "g10": {
      "HP": 617,
      "ATK": 88,
      "Phys Crit": 12,
      "MP Charge": 10
    },
    "total": {
      "HP": 617,
      "ATK": 88,
      "Phys Crit": 12,
      "MP Charge": 10
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Phys Crit": 7
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "Phys Crit": 10
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "Phys Crit": 12
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "Phys Crit": 15
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "Phys Crit": 18
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "Phys Crit": 19
    }
  ]
};;;;;;;;
