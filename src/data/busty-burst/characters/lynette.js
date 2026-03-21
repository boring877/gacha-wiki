// Character data: lynette
// Merged from info/skills/stats files

export const info = {
  "slug": "lynette",
  "name": "Lynette",
  "displayName": "Lynette",
  "baseName": "Lynette",
  "title": null,
  "rarity": "SR",
  "element": "Mind",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 200,
  "weaponType": "Strike/Blunt",
  "skillTypes": [
    "Disrupt",
    "Taunt"
  ],
  "image": "Lynette",
  "introduction": "Front Row、Physical、Tank",
  "profile": {
    "height": "155cm",
    "bust": "97cm (K Cup)",
    "waist": "56cm",
    "hips": "79cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u7460\u7483\u3089\u3089\u3053",
      "romanized": "Ruri Rarako"
    },
    "voice": {
      "japanese": "\u671d\u4e95\u3053\u3082\u3082",
      "romanized": "Asai Komomo"
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
      "name": "Troublesome!",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 1.5 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Stun for 1.5 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Stun for 1.5 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "300% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+20",
      "lvl1": "300% + 150",
      "lvl90": null,
      "effects": [
        "Stun"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1
        }
      ],
      "duration": 1
    },
    {
      "slot": 3,
      "name": "Super troublesome!",
      "icon": "skill001/skill0019",
      "description": "all enemies10 Accuracy -7 DOWNapply to self10",
      "descriptionLv1": "all enemies10 Accuracy -7 DOWNapply to self10",
      "descriptionLv90": "all enemies10 Accuracy -14 DOWNapply to self10",
      "target": "All Enemies",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Accuracy - Lv2",
        "Taunt"
      ],
      "buffEffects": [
        {
          "name": "Accuracy - Lv2",
          "value": -7,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.08
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
      "name": "Don't come back~!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Burn(LV 1) for 15 seconds",
      "effect": "1050% + 900",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv1",
          "value": -1500,
          "type": "flat",
          "duration": 15
        }
      ]
    },
    {
      "rank": 2,
      "name": "Troublesome!",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 1.5 seconds",
      "effect": "300% + 150",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1
        }
      ]
    },
    {
      "rank": 3,
      "name": "Super troublesome!",
      "icon": "skill001/skill0019",
      "description": "all enemies10 Accuracy -7 DOWNapply to self10",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Accuracy - Lv2",
          "value": -7,
          "type": "flat",
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
      "name": "Don't come back~!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Burn(LV 1) for 15 seconds",
      "effect": "1050% + 900",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv1",
          "value": -1500,
          "type": "flat",
          "duration": 15
        }
      ]
    },
    {
      "rank": 5,
      "name": "Don't come back~!",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Burn(LV 2) for 15 seconds",
      "effect": "1260% + 1050",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv2",
          "value": -2000,
          "type": "flat",
          "duration": 15
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +",
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
      "name": "Healing Received +, Block+",
      "icon": "skill001/skill1003",
      "effect": "Healing Received + (+40%), Block+ (+15)",
      "effectValues": [
        {
          "name": "Healing Received +",
          "value": 40,
          "type": "percent"
        },
        {
          "name": "Block+",
          "value": 15,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Lynette",
  "id": 2087,
  "rarity": "SR",
  "element": "Mind",
  "role": "Tank",
  "tags": [
    "Disrupt",
    "Taunt"
  ],
  "baseStats": {
    "HP": 3789,
    "ATK": 189,
    "MATK": 113,
    "DEF": 18,
    "MDEF": 7
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.88"
  },
  "slug": "lynette"
};

export const stats = {
  "id": "lynette",
  "characterId": 2087,
  "name": "Lynette",
  "rarity": "SR",
  "element": "想",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "Disrupt",
    "Taunt"
  ],
  "baseStats": {
    "hp": {
      "base": 3789,
      "lv90": 18946
    },
    "atk": {
      "base": 189,
      "lv90": 945
    },
    "matk": {
      "base": 113,
      "lv90": 566
    },
    "def": {
      "base": 18,
      "lv90": 36
    },
    "mdef": {
      "base": 7,
      "lv90": 14
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
      "base": 191,
      "lv90": 305
    },
    "magicCrit": {
      "base": 114,
      "lv90": 182
    },
    "hpRegen": {
      "base": 189,
      "lv90": 662
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
      "HP": 1137,
      "ATK": 57,
      "Block": 14,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 1307,
      "ATK": 65,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 1535,
      "ATK": 77,
      "Block": 18,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1705,
      "ATK": 85,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 2682,
      "ATK": 139,
      "DEF": 11,
      "MDEF": 1,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 8366,
      "ATK": 423,
      "Block": 68,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 11,
      "MDEF": 1,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 200
    },
    "gp2": {
      "HP": 200,
      "Block": 2
    },
    "gp3": {
      "HP": 500,
      "Block": 2
    },
    "gp4": {
      "HP": 500,
      "Block": 5
    },
    "gp5": {
      "HP": 800,
      "Block": 5
    },
    "gp6": {
      "HP": 800,
      "Block": 8
    },
    "gp7": {
      "HP": 1100,
      "Block": 8
    },
    "gp8": {
      "HP": 1100,
      "Block": 11
    },
    "gp9": {
      "HP": 1400,
      "Block": 11
    },
    "gp10": {
      "HP": 1400,
      "Block": 14
    },
    "total": {
      "HP": 1400,
      "Block": 14
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 399,
      "ATK": 20,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 479,
      "ATK": 24,
      "Phys Crit": 5,
      "Block": 14
    },
    "g3": {
      "HP": 558,
      "ATK": 28,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 638,
      "ATK": 32,
      "Phys Crit": 6,
      "Block": 19
    },
    "g5": {
      "HP": 718,
      "ATK": 36,
      "Phys Crit": 7,
      "MP Charge": 5
    },
    "g6": {
      "HP": 798,
      "ATK": 40,
      "Phys Crit": 8,
      "Accuracy": 18
    },
    "g7": {
      "HP": 878,
      "ATK": 44,
      "Phys Crit": 9,
      "Block": 26
    },
    "g8": {
      "HP": 957,
      "ATK": 48,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 1037,
      "ATK": 52,
      "Phys Crit": 10,
      "Block": 31
    },
    "g10": {
      "HP": 1117,
      "ATK": 56,
      "Phys Crit": 11,
      "MP Charge": 7
    },
    "total": {
      "HP": 1117,
      "ATK": 56,
      "Phys Crit": 11,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "DEF": 11
    },
    {
      "grade": 2,
      "Block": 4
    },
    {
      "grade": 3,
      "DEF": 14
    },
    {
      "grade": 4,
      "Block": 5
    },
    {
      "grade": 5,
      "DEF": 18
    },
    {
      "grade": 6,
      "Block": 7
    },
    {
      "grade": 7,
      "DEF": 21
    },
    {
      "grade": 8,
      "Block": 8
    },
    {
      "grade": 9,
      "DEF": 25
    },
    {
      "grade": 10,
      "Block": 9
    },
    {
      "grade": 11,
      "DEF": 26
    }
  ]
};;;;;;;;
