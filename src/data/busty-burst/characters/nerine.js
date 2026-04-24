// Character data: nerine
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "nerine",
  "name": "Nerine",
  "displayName": "Nerine",
  "baseName": "Nerine",
  "title": null,
  "rarity": "SR",
  "element": "Light",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slow",
  "range": 300,
  "weaponType": "Ranged",
  "skillTypes": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "image": "Nerine",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "148cm",
    "bust": "102cm (L Cup)",
    "waist": "57cm",
    "hips": "79cm"
  },
  "credits": {
    "illustration": {
      "japanese": "あびすぐる",
      "romanized": ""
    },
    "voice": {
      "japanese": "相模恋",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2195
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Thunder Bloom",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-14%-20 DOWN for 6 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-14%-20 DOWN for 6 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Magic Defense-14%-110 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.15,
      "damageScaling": "110% ATK",
      "baseDamage": "+110",
      "levelGrowth": "+6",
      "lvl1": "110% + 110",
      "lvl90": "110% + 21",
      "effects": [
        "Magic Defense- Lv2"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense- Lv2",
          "value": -20,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -1.0
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Paralysis Wave",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies, inflict 3s",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies, inflict 3s",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies, inflict 3s",
      "target": "Nearest Enemy",
      "castTime": 1.2,
      "damageScaling": "90% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+6",
      "lvl1": "90% + 80",
      "lvl90": null,
      "effects": [
        "Paralysis"
      ],
      "buffEffects": [
        {
          "name": "Paralysis",
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
      "name": "Lightning Parade",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Holy Type Damage Taken UP(LV 1) for 8 seconds",
      "effect": "330% + 500",
      "buffEffects": [
        {
          "name": "Holy Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Lightning Parade",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Holy Type Damage Taken UP(LV 2) for 8 seconds",
      "effect": "390% + 550",
      "buffEffects": [
        {
          "name": "Holy Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Lightning Parade",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Holy Type Damage Taken UP(LV 3) for 8 seconds",
      "effect": "434% + 600",
      "buffEffects": [
        {
          "name": "Holy Type Damage Taken+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Lightning Parade",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Holy Type Damage Taken UP(LV 4) for 8 seconds",
      "effect": "470% + 650",
      "buffEffects": [
        {
          "name": "Holy Type Damage Taken+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Lightning Parade",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Holy Type Damage Taken UP(LV 5) for 8 seconds",
      "effect": "484% + 700",
      "buffEffects": [
        {
          "name": "Holy Type Damage Taken+ Ultimate Lv5",
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
      "name": "Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (0%)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 0,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+10%), Magic Attack + (+130)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Magic Attack +",
          "value": 130,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Nerine",
  "id": 2195,
  "rarity": "SR",
  "element": "Light",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 2332,
    "ATK": 212,
    "MATK": 353,
    "DEF": 7,
    "MDEF": 18
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Skill3 → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.1"
  },
  "slug": "nerine"
};

export const stats = {
  "id": "nerine",
  "characterId": 2195,
  "name": "Nerine",
  "rarity": "SR",
  "element": "聖",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "hp": {
      "base": 2332,
      "lv90": 11660
    },
    "atk": {
      "base": 212,
      "lv90": 1060
    },
    "matk": {
      "base": 353,
      "lv90": 1765
    },
    "def": {
      "base": 7,
      "lv90": 14
    },
    "mdef": {
      "base": 18,
      "lv90": 36
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
      "base": 22,
      "lv90": 35
    },
    "magicCrit": {
      "base": 37,
      "lv90": 59
    },
    "hpRegen": {
      "base": 116,
      "lv90": 407
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
      "base": 63,
      "lv90": 63
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
      "HP": 700,
      "MATK": 106,
      "Block": 14,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 805,
      "MATK": 122,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 944,
      "MATK": 143,
      "Block": 18,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 1049,
      "MATK": 159,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1710,
      "MATK": 278,
      "DEF": 2,
      "MDEF": 5,
      "Heal Pwr": 16
    },
    "total": {
      "HP": 5208,
      "MATK": 808,
      "Block": 68,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 2,
      "MDEF": 5,
      "Heal Pwr": 16
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 30
    },
    "gp2": {
      "MATK": 30,
      "Accuracy": 2
    },
    "gp3": {
      "MATK": 90,
      "Accuracy": 2
    },
    "gp4": {
      "MATK": 90,
      "Accuracy": 5
    },
    "gp5": {
      "MATK": 130,
      "Accuracy": 5
    },
    "gp6": {
      "MATK": 130,
      "Accuracy": 7
    },
    "gp7": {
      "MATK": 170,
      "Accuracy": 7
    },
    "gp8": {
      "MATK": 170,
      "Accuracy": 9
    },
    "gp9": {
      "MATK": 210,
      "Accuracy": 9
    },
    "gp10": {
      "MATK": 210,
      "Accuracy": 11
    },
    "total": {
      "MATK": 210,
      "Accuracy": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 245,
      "MATK": 37,
      "MDEF": 1,
      "Magic Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 295,
      "MATK": 45,
      "MDEF": 1,
      "Magic Crit": 1,
      "Block": 14
    },
    "g3": {
      "HP": 344,
      "MATK": 52,
      "MDEF": 1,
      "Magic Crit": 1,
      "Accuracy": 12
    },
    "g4": {
      "HP": 393,
      "MATK": 59,
      "MDEF": 1,
      "Magic Crit": 1,
      "Block": 19
    },
    "g5": {
      "HP": 442,
      "MATK": 67,
      "MDEF": 1,
      "Magic Crit": 1,
      "MP Charge": 5
    },
    "g6": {
      "HP": 491,
      "MATK": 74,
      "MDEF": 2,
      "Magic Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 540,
      "MATK": 82,
      "MDEF": 2,
      "Magic Crit": 2,
      "Block": 26
    },
    "g8": {
      "HP": 589,
      "MATK": 89,
      "MDEF": 2,
      "Magic Crit": 2,
      "Accuracy": 21
    },
    "g9": {
      "HP": 638,
      "MATK": 97,
      "MDEF": 2,
      "Magic Crit": 2,
      "Block": 31
    },
    "g10": {
      "HP": 687,
      "MATK": 104,
      "MDEF": 2,
      "Magic Crit": 2,
      "MP Charge": 8
    },
    "total": {
      "HP": 687,
      "MATK": 104,
      "MDEF": 2,
      "Magic Crit": 2,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 29
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "MATK": 41
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "MATK": 53
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "MATK": 65
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "MATK": 77
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "MATK": 85
    }
  ]
};;;;;;;
