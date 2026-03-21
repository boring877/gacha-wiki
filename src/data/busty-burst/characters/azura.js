// Character data: azura
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "azura",
  "name": "Azura",
  "displayName": "Azura",
  "baseName": "Azura",
  "title": null,
  "rarity": "SR",
  "element": "Fire",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 200,
  "weaponType": "Slash",
  "skillTypes": [
    "Attacker",
    "Debuff"
  ],
  "image": "Azura",
  "introduction": "Front Row、Physical、Tank",
  "profile": {
    "height": "170cm",
    "bust": "101cm (J Cup)",
    "waist": "63cm",
    "hips": "101cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "琴吹司",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2023
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Great Cleave",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack -20 DOWN for 8 seconds and Physical Defense -30 DOWN for 8 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Attack -20 DOWN for 8 seconds and Physical Defense -30 DOWN for 8 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Attack -200 DOWN for 8 seconds and Physical Defense -210 DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "270% ATK",
      "baseDamage": "+120",
      "levelGrowth": "+15",
      "lvl1": "270% + 120",
      "lvl90": "270% + -58",
      "effects": [
        "Physical Attack - Lv3",
        "Physical Defense - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv3",
          "value": -20,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -2.0
        },
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -2.0
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "You can at least do something, right?",
      "icon": "skill001/skill0019",
      "description": "Applies HP Regeneration+50 to self for 10 seconds and Taunt for 10 seconds",
      "descriptionLv1": "Applies HP Regeneration+50 to self for 10 seconds and Taunt for 10 seconds",
      "descriptionLv90": "Applies HP Regeneration+50 to self for 10 seconds and Taunt for 10 seconds",
      "target": "Self",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "HP Regeneration+ Lv1",
        "Taunt"
      ],
      "buffEffects": [
        {
          "name": "HP Regeneration+ Lv1",
          "value": 3,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 5.0
        },
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Steelbreaker Twin Blades",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and applies Physical Critical DamageUP(LV 1) to self for 12 seconds",
      "effect": "1050% + 1010",
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Ultimate Lv1",
          "value": 300,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 2,
      "name": "Great Cleave",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack -20 DOWN for 8 seconds and Physical Defense -30 DOWN for 8 seconds",
      "effect": "270% + 120",
      "buffEffects": [
        {
          "name": "Physical Attack - Lv3",
          "value": -20,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "You can at least do something, right?",
      "icon": "skill001/skill0019",
      "description": "Applies HP Regeneration+50 to self for 10 seconds and Taunt for 10 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Lv1",
          "value": 3,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Taunt",
          "value": 0,
          "type": "unknown",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Steelbreaker Twin Blades",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and applies Physical Critical DamageUP(LV 1) to self for 12 seconds",
      "effect": "1050% + 1010",
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Ultimate Lv1",
          "value": 300,
          "type": "percent",
          "duration": 12
        }
      ]
    },
    {
      "rank": 5,
      "name": "Steelbreaker Twin Blades",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and applies Physical Critical DamageUP(LV 2) to self for 12 seconds",
      "effect": "1260% + 1166",
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Ultimate Lv2",
          "value": 400,
          "type": "percent",
          "duration": 12
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +",
      "icon": "skill001/skill1002",
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
      "name": "Physical Attack +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+259), Physical Critical Damage+ (+90%)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Azura",
  "id": 2023,
  "rarity": "SR",
  "element": "Fire",
  "role": "Tank",
  "tags": [
    "Attacker",
    "Debuff"
  ],
  "baseStats": {
    "HP": 2429,
    "ATK": 174,
    "MATK": 104,
    "DEF": 126,
    "MDEF": 50
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Skill3 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "azura"
};

export const stats = {
  "id": "azura",
  "characterId": 2023,
  "name": "Azura",
  "rarity": "SR",
  "element": "火",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Attacker",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 2429,
      "lv90": 12145
    },
    "atk": {
      "base": 174,
      "lv90": 873
    },
    "matk": {
      "base": 104,
      "lv90": 523
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
      "lv90": 99
    },
    "block": {
      "base": 60,
      "lv90": 180
    },
    "physCrit": {
      "base": 287,
      "lv90": 459
    },
    "magicCrit": {
      "base": 172,
      "lv90": 275
    },
    "hpRegen": {
      "base": 121,
      "lv90": 424
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
      "base": 82,
      "lv90": 82
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
      "HP": 729,
      "ATK": 52,
      "Block": 18,
      "MP Charge": 8
    },
    "lb2": {
      "HP": 838,
      "ATK": 60,
      "Accuracy": 13,
      "Block": 21
    },
    "lb3": {
      "HP": 984,
      "ATK": 71,
      "Block": 24,
      "MP Charge": 10
    },
    "lb4": {
      "HP": 1093,
      "ATK": 79,
      "Accuracy": 17,
      "Block": 27
    },
    "lb5": {
      "HP": 1919,
      "ATK": 138,
      "DEF": 40,
      "MDEF": 9,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 5563,
      "ATK": 400,
      "Block": 90,
      "MP Charge": 18,
      "Accuracy": 30,
      "DEF": 40,
      "MDEF": 9,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 30
    },
    "gp2": {
      "HP": 200,
      "ATK": 30
    },
    "gp3": {
      "HP": 200,
      "ATK": 90
    },
    "gp4": {
      "HP": 500,
      "ATK": 90
    },
    "gp5": {
      "HP": 500,
      "ATK": 130
    },
    "gp6": {
      "HP": 800,
      "ATK": 130
    },
    "gp7": {
      "HP": 800,
      "ATK": 170
    },
    "gp8": {
      "HP": 1100,
      "ATK": 170
    },
    "gp9": {
      "HP": 1100,
      "ATK": 210
    },
    "gp10": {
      "HP": 1400,
      "ATK": 210
    },
    "total": {
      "HP": 1400,
      "ATK": 210
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 256,
      "ATK": 18,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 307,
      "ATK": 22,
      "Phys Crit": 7,
      "Block": 19
    },
    "g3": {
      "HP": 358,
      "ATK": 26,
      "Phys Crit": 8,
      "Accuracy": 12
    },
    "g4": {
      "HP": 409,
      "ATK": 29,
      "Phys Crit": 10,
      "Block": 25
    },
    "g5": {
      "HP": 460,
      "ATK": 33,
      "Phys Crit": 11,
      "MP Charge": 7
    },
    "g6": {
      "HP": 511,
      "ATK": 37,
      "Phys Crit": 12,
      "Accuracy": 18
    },
    "g7": {
      "HP": 563,
      "ATK": 40,
      "Phys Crit": 13,
      "Block": 35
    },
    "g8": {
      "HP": 614,
      "ATK": 44,
      "Phys Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 665,
      "ATK": 48,
      "Phys Crit": 16,
      "Block": 41
    },
    "g10": {
      "HP": 716,
      "ATK": 52,
      "Phys Crit": 17,
      "MP Charge": 11
    },
    "total": {
      "HP": 716,
      "ATK": 52,
      "Phys Crit": 17,
      "MP Charge": 11
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Block": 5
    },
    {
      "grade": 2,
      "DEF": 6
    },
    {
      "grade": 3,
      "Block": 7
    },
    {
      "grade": 4,
      "DEF": 9
    },
    {
      "grade": 5,
      "Block": 9
    },
    {
      "grade": 6,
      "DEF": 11
    },
    {
      "grade": 7,
      "Block": 11
    },
    {
      "grade": 8,
      "DEF": 13
    },
    {
      "grade": 9,
      "Block": 13
    },
    {
      "grade": 10,
      "DEF": 15
    },
    {
      "grade": 11,
      "Block": 15
    }
  ]
};;;;;;;;
