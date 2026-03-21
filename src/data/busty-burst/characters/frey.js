// Character data: frey
// Merged from info/skills/stats files

export const info = {
  "slug": "frey",
  "name": "Frey",
  "displayName": "Frey",
  "baseName": "Frey",
  "title": null,
  "rarity": "SSR",
  "element": "Light",
  "role": "Support",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 520,
  "weaponType": "Strike/Blunt",
  "skillTypes": [
    "Heal",
    "Buff",
    "Cleanse"
  ],
  "image": "Frey",
  "introduction": "Back Row、Physical、Support",
  "profile": {
    "height": "156cm",
    "bust": "95cm (H Cup)",
    "waist": "56cm",
    "hips": "84cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u30a6\u30cb\u30c8\u30b7\u30ad",
      "romanized": "Unitoshiki"
    },
    "voice": {
      "japanese": "\u3053\u306f\u308b\u51ea",
      "romanized": "Koharu Nagi"
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
      "name": "Area Heal",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to all allies and inflicts HP Regeneration+150 for 3 seconds",
      "descriptionLv1": "Restores HP by to all allies and inflicts HP Regeneration+150 for 3 seconds",
      "descriptionLv90": "Restores HP by to all allies and inflicts HP Regeneration+150 for 3 seconds",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": "2500% ATK",
      "baseDamage": "+1000",
      "levelGrowth": "+40",
      "lvl1": "2500% + 1000",
      "lvl90": "2500% + 1623",
      "effects": [
        "HP Regeneration+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "HP Regeneration+ Lv3",
          "value": 5,
          "type": "percent",
          "duration": 3,
          "levelGrowth": 7.0
        }
      ],
      "duration": 3
    },
    {
      "slot": 3,
      "name": "Cam",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to all alliesand removes debuffs",
      "descriptionLv1": "Restores HP by to all alliesand removes debuffs",
      "descriptionLv90": "Restores HP by to all alliesand removes debuffs",
      "target": "All Allies",
      "castTime": 1.38,
      "damageScaling": "1500% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+40",
      "lvl1": "1500% + 500",
      "lvl90": null,
      "effects": [
        "Debuff Resistance LvMax"
      ],
      "buffEffects": [
        {
          "name": "Debuff Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ]
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Gentle White Lily’s Embrace",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to all allies and inflicts Hit-Based Physical Healing Shield (LV 1) for 20 seconds and Hit-Based Magic Healing Shield (LV 1) for 20 seconds",
      "effect": "4000% + 1000",
      "buffEffects": [
        {
          "name": "Hit-Based Physical Healing Shield Ultimate Lv1",
          "value": 30,
          "type": "percent",
          "duration": 20
        },
        {
          "name": "Hit-Based Magic Healing Shield Ultimate Lv1",
          "value": 30,
          "type": "percent",
          "duration": 20
        }
      ]
    },
    {
      "rank": 2,
      "name": "Area Heal",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to all allies and inflicts HP Regeneration+150 for 3 seconds",
      "effect": "2500% + 1000",
      "buffEffects": [
        {
          "name": "HP Regeneration+ Lv3",
          "value": 5,
          "type": "percent",
          "duration": 3
        }
      ]
    },
    {
      "rank": 3,
      "name": "Cam",
      "icon": "skill001/skill0021",
      "description": "Restores HP by to all alliesand removes debuffs",
      "effect": "1500% + 500",
      "buffEffects": [
        {
          "name": "Debuff Resistance LvMax",
          "value": 1,
          "type": "percent"
        }
      ]
    },
    {
      "rank": 4,
      "name": "Gentle White Lily’s Embrace",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to all allies and inflicts Hit-Based Physical Healing Shield (LV 1) for 20 seconds and Hit-Based Magic Healing Shield (LV 1) for 20 seconds",
      "effect": "4000% + 1000",
      "buffEffects": [
        {
          "name": "Hit-Based Physical Healing Shield Ultimate Lv1",
          "value": 30,
          "type": "percent",
          "duration": 20
        },
        {
          "name": "Hit-Based Magic Healing Shield Ultimate Lv1",
          "value": 30,
          "type": "percent",
          "duration": 20
        }
      ]
    },
    {
      "rank": 5,
      "name": "Gentle White Lily’s Embrace",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by to all allies and inflicts Hit-Based Physical Healing Shield (LV 2) for 20 seconds and Hit-Based Magic Healing Shield (LV 2) for 20 seconds",
      "effect": "4800% + 1500",
      "buffEffects": [
        {
          "name": "Hit-Based Physical Healing Shield Ultimate Lv2",
          "value": 36,
          "type": "percent",
          "duration": 20
        },
        {
          "name": "Hit-Based Magic Healing Shield Ultimate Lv2",
          "value": 36,
          "type": "percent",
          "duration": 20
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1006",
      "effect": "Physical Defense + (+141), Magic Defense+ (+141)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 141,
          "type": "flat"
        },
        {
          "name": "Magic Defense+",
          "value": 141,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Action Speed +",
      "icon": "skill001/skill1005",
      "effect": "Skill Damage + (+10%), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 3,
      "name": "Passive EX",
      "icon": "skill001/skill1005",
      "effect": "Ultimate Damage + (+5%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 5,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Frey",
  "id": 2051,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Cleanse"
  ],
  "baseStats": {
    "HP": 2588,
    "ATK": 253,
    "MATK": 151,
    "DEF": 82,
    "MDEF": 32
  },
  "skillRotation": {
    "opening": "Basic → Skill3 → Basic → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "frey"
};

export const stats = {
  "id": "frey",
  "characterId": 2051,
  "name": "Frey",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Cleanse"
  ],
  "baseStats": {
    "hp": {
      "base": 2588,
      "lv90": 12943
    },
    "atk": {
      "base": 253,
      "lv90": 1265
    },
    "matk": {
      "base": 151,
      "lv90": 758
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
      "base": 55,
      "lv90": 165
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
      "base": 129,
      "lv90": 452
    },
    "mpRegen": {
      "base": 62,
      "lv90": 249
    },
    "healPwr": {
      "base": 135,
      "lv90": 337
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
      "HP": 777,
      "ATK": 76,
      "Block": 17,
      "MP Charge": 8
    },
    "lb2": {
      "HP": 893,
      "ATK": 87,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 1048,
      "ATK": 102,
      "Block": 22,
      "MP Charge": 10
    },
    "lb4": {
      "HP": 1165,
      "ATK": 114,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 2395,
      "ATK": 215,
      "DEF": 23,
      "MDEF": 6,
      "Heal Pwr": 41
    },
    "total": {
      "HP": 6278,
      "ATK": 594,
      "Block": 83,
      "MP Charge": 18,
      "Accuracy": 30,
      "DEF": 23,
      "MDEF": 6,
      "Heal Pwr": 41
    }
  },
  "gpAbility": {
    "gp1": {
      "Heal Pwr": 20
    },
    "gp2": {
      "Heal Pwr": 20,
      "MP Charge": 3
    },
    "gp3": {
      "Heal Pwr": 45,
      "MP Charge": 3
    },
    "gp4": {
      "Heal Pwr": 45,
      "MP Charge": 7
    },
    "gp5": {
      "Heal Pwr": 70,
      "MP Charge": 7
    },
    "gp6": {
      "Heal Pwr": 70,
      "MP Charge": 9
    },
    "gp7": {
      "Heal Pwr": 95,
      "MP Charge": 9
    },
    "gp8": {
      "Heal Pwr": 95,
      "MP Charge": 11
    },
    "gp9": {
      "Heal Pwr": 120,
      "MP Charge": 11
    },
    "gp10": {
      "Heal Pwr": 120,
      "MP Charge": 13
    },
    "total": {
      "Heal Pwr": 120,
      "MP Charge": 13
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 273,
      "ATK": 27,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 327,
      "ATK": 32,
      "Phys Crit": 5,
      "Block": 17
    },
    "g3": {
      "HP": 382,
      "ATK": 37,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 436,
      "ATK": 43,
      "Phys Crit": 7,
      "Block": 23
    },
    "g5": {
      "HP": 491,
      "ATK": 48,
      "Phys Crit": 8,
      "MP Charge": 7
    },
    "g6": {
      "HP": 545,
      "ATK": 53,
      "Phys Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 600,
      "ATK": 59,
      "Phys Crit": 10,
      "Block": 32
    },
    "g8": {
      "HP": 654,
      "ATK": 64,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 709,
      "ATK": 69,
      "Phys Crit": 11,
      "Block": 38
    },
    "g10": {
      "HP": 763,
      "ATK": 75,
      "Phys Crit": 12,
      "MP Charge": 11
    },
    "total": {
      "HP": 763,
      "ATK": 75,
      "Phys Crit": 12,
      "MP Charge": 11
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 216
    },
    {
      "grade": 2,
      "Heal Pwr": 6
    },
    {
      "grade": 3,
      "HP": 302
    },
    {
      "grade": 4,
      "Heal Pwr": 8
    },
    {
      "grade": 5,
      "HP": 388
    },
    {
      "grade": 6,
      "Heal Pwr": 10
    },
    {
      "grade": 7,
      "HP": 475
    },
    {
      "grade": 8,
      "Heal Pwr": 12
    },
    {
      "grade": 9,
      "HP": 561
    },
    {
      "grade": 10,
      "Heal Pwr": 14
    },
    {
      "grade": 11,
      "HP": 589
    }
  ]
};;;;;;;;
