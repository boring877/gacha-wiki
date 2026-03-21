// Character data: the-bride-of-seduction-ophelio
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "the-bride-of-seduction-ophelio",
  "name": "The Bride of Seduction: Ophelio",
  "displayName": "The Bride of Seduction: Ophelio",
  "baseName": "Ophelio",
  "title": "The Bride of Seduction",
  "rarity": "SR",
  "element": "Holy",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Normal",
  "range": 525,
  "weaponType": "Ranged",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Ophelio",
  "introduction": "Back Row、Magical、Attacker",
  "profile": {
    "height": "159cm",
    "bust": "106cm (M Cup)",
    "waist": "58cm",
    "hips": "87cm"
  },
  "credits": {
    "illustration": {
      "japanese": "こみちぽた",
      "romanized": ""
    },
    "voice": {
      "japanese": "花宮楓",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2142
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Bouquet Throw",
      "icon": "skill001/skill0010",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense-40 DOWN for 6 seconds",
      "descriptionLv1": "Deals magic damage to the nearest enemy and inflicts Magic Defense-40 DOWN for 6 seconds",
      "descriptionLv90": "Deals magic damage to the nearest enemy and inflicts Magic Defense-220 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.35,
      "damageScaling": "300% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+25",
      "lvl1": "300% + 300",
      "lvl90": "300% + 122",
      "effects": [
        "Magic Defense- Lv4"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense- Lv4",
          "value": -40,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Drop the Veil",
      "icon": "skill001/skill0011",
      "description": "to 3 nearest enemies1s Charm for and Action Speed DOWN for 8 seconds , 8 Accuracy -9 DOWN",
      "descriptionLv1": "to 3 nearest enemies1s Charm for and Action Speed DOWN for 8 seconds , 8 Accuracy -9 DOWN",
      "descriptionLv90": "to 3 nearest enemies1s Charm for and Action Speed DOWN for 8 seconds , 8 Accuracy -18 DOWN",
      "target": "Nearest Enemy",
      "castTime": 1.35,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Charm",
        "Action Speed - Lv3",
        "Accuracy - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
        {
          "name": "Action Speed - Lv3",
          "value": -14,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Accuracy - Lv3",
          "value": -9,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -0.1
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Liberal - Lily Marriage",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Burn(LV 1) for 15 seconds and Freeze(LV 1) for 2 seconds",
      "effect": "350% + 400",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv1",
          "value": -1000,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Freeze Ultimate Lv1",
          "value": -2500,
          "type": "flat",
          "duration": 2
        }
      ]
    },
    {
      "rank": 2,
      "name": "Bouquet Throw",
      "icon": "skill001/skill0010",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense-40 DOWN for 6 seconds",
      "effect": "300% + 300",
      "buffEffects": [
        {
          "name": "Magic Defense- Lv4",
          "value": -40,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Drop the Veil",
      "icon": "skill001/skill0011",
      "description": "to 3 nearest enemies1s Charm for and Action Speed DOWN for 8 seconds , 8 Accuracy -9 DOWN",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
        {
          "name": "Action Speed - Lv3",
          "value": -14,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Accuracy - Lv3",
          "value": -9,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Liberal - Lily Marriage",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Burn(LV 1) for 15 seconds and Freeze(LV 1) for 2 seconds",
      "effect": "350% + 400",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv1",
          "value": -1000,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Freeze Ultimate Lv1",
          "value": -2500,
          "type": "flat",
          "duration": 2
        }
      ]
    },
    {
      "rank": 5,
      "name": "Liberal - Lily Marriage",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Burn(LV 2) for 15 seconds and Freeze(LV 2) for 2 seconds",
      "effect": "450% + 450",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv2",
          "value": -1300,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Freeze Ultimate Lv2",
          "value": -3500,
          "type": "flat",
          "duration": 2
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +",
      "icon": "skill001/skill1003",
      "effect": "Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
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
  "name": "The Bride of Seduction: Ophelio",
  "id": 2142,
  "rarity": "SR",
  "element": "Holy",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2035,
    "ATK": 151,
    "MATK": 252,
    "DEF": 7,
    "MDEF": 18
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.85"
  },
  "slug": "the-bride-of-seduction-ophelio"
};

export const stats = {
  "id": "the-bride-of-seduction-ophelio",
  "characterId": 2142,
  "name": "【The Bride of Seduction】Ophelio",
  "rarity": "SR",
  "element": "聖",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2035,
      "lv90": 10178
    },
    "atk": {
      "base": 151,
      "lv90": 757
    },
    "matk": {
      "base": 252,
      "lv90": 1262
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
      "base": 55,
      "lv90": 165
    },
    "physCrit": {
      "base": 172,
      "lv90": 275
    },
    "magicCrit": {
      "base": 287,
      "lv90": 459
    },
    "hpRegen": {
      "base": 101,
      "lv90": 355
    },
    "mpRegen": {
      "base": 56,
      "lv90": 225
    },
    "healPwr": {
      "base": 100,
      "lv90": 250
    },
    "mpCharge": {
      "base": 60,
      "lv90": 60
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
      "HP": 611,
      "MATK": 76,
      "Block": 17,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 702,
      "MATK": 87,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 824,
      "MATK": 102,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 916,
      "MATK": 114,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1492,
      "MATK": 199,
      "DEF": 1,
      "MDEF": 4,
      "Heal Pwr": 23
    },
    "total": {
      "HP": 4545,
      "MATK": 578,
      "Block": 83,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 1,
      "MDEF": 4,
      "Heal Pwr": 23
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
      "MATK": 150,
      "Accuracy": 5
    },
    "gp6": {
      "MATK": 150,
      "Accuracy": 7
    },
    "gp7": {
      "MATK": 210,
      "Accuracy": 7
    },
    "gp8": {
      "MATK": 210,
      "Accuracy": 9
    },
    "gp9": {
      "MATK": 270,
      "Accuracy": 9
    },
    "gp10": {
      "MATK": 270,
      "Accuracy": 11
    },
    "total": {
      "MATK": 270,
      "Accuracy": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 214,
      "MATK": 27,
      "MDEF": 1,
      "Magic Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 257,
      "MATK": 32,
      "MDEF": 1,
      "Magic Crit": 7,
      "Block": 17
    },
    "g3": {
      "HP": 300,
      "MATK": 37,
      "MDEF": 1,
      "Magic Crit": 8,
      "Accuracy": 12
    },
    "g4": {
      "HP": 343,
      "MATK": 43,
      "MDEF": 1,
      "Magic Crit": 10,
      "Block": 23
    },
    "g5": {
      "HP": 386,
      "MATK": 48,
      "MDEF": 1,
      "Magic Crit": 11,
      "MP Charge": 5
    },
    "g6": {
      "HP": 429,
      "MATK": 53,
      "MDEF": 2,
      "Magic Crit": 12,
      "Accuracy": 18
    },
    "g7": {
      "HP": 471,
      "MATK": 58,
      "MDEF": 2,
      "Magic Crit": 13,
      "Block": 32
    },
    "g8": {
      "HP": 514,
      "MATK": 64,
      "MDEF": 2,
      "Magic Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 557,
      "MATK": 69,
      "MDEF": 2,
      "Magic Crit": 16,
      "Block": 38
    },
    "g10": {
      "HP": 600,
      "MATK": 74,
      "MDEF": 2,
      "Magic Crit": 17,
      "MP Charge": 8
    },
    "total": {
      "HP": 600,
      "MATK": 74,
      "MDEF": 2,
      "Magic Crit": 17,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 21
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "MATK": 29
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "MATK": 38
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "MATK": 46
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "MATK": 55
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "MATK": 58
    }
  ]
};;;;;;;;
