// Character data: golem-summoner-nerys
// Merged from info/skills/stats files

export const info = {
  "slug": "golem-summoner-nerys",
  "name": "[Golem Summoner] Nerys",
  "displayName": "Golem Summoner Nerys",
  "baseName": "Nerys",
  "title": "Golem Summoner",
  "rarity": "SSR",
  "element": "Mind",
  "role": "Support",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slightly Slow",
  "range": 400,
  "weaponType": "Throw",
  "skillTypes": [
    "Buff",
    "Debuff"
  ],
  "image": "Messenge_of_Stone_soldiers_Nerys",
  "introduction": "Middle Row、Physical、Support",
  "profile": {
    "height": "160cm",
    "bust": "98cm (H Cup)",
    "waist": "58cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u6df1\u6ce5\u6b63",
      "romanized": "Fukadoro Tadashi"
    },
    "voice": {
      "japanese": "\u5fa1\u82d1\u751f\u30e1\u30a4",
      "romanized": "Misonoo Mei"
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
      "name": "Rage of the Giant Rock Soldier",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 8 seconds",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 8 seconds",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "110.00000000000001% ATK",
      "baseDamage": "+40",
      "levelGrowth": "+8",
      "lvl1": "110% + 40",
      "lvl90": null,
      "effects": [
        "Action Speed - Lv5"
      ],
      "buffEffects": [
        {
          "name": "Action Speed - Lv5",
          "value": -20,
          "type": "flat",
          "duration": 8
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Guardian of the Giant Rock Soldier",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Healing Shield (350, restores 25%) to all allies for 12 seconds and Physical Healing Shield (350, restores 25%) for 12 seconds",
      "descriptionLv1": "Applies Physical Healing Shield (350, restores 25%) to all allies for 12 seconds and Physical Healing Shield (350, restores 25%) for 12 seconds",
      "descriptionLv90": "Applies Physical Healing Shield (350, restores 25%) to all allies for 12 seconds and Physical Healing Shield (350, restores 25%) for 12 seconds",
      "target": "All Allies",
      "castTime": 1.58,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Healing Shield Lv4",
        "Magic Healing Shield Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Healing Shield Lv4",
          "value": 350,
          "type": "percent",
          "duration": 12,
          "levelGrowth": 35.0
        },
        {
          "name": "Magic Healing Shield Lv4",
          "value": 350,
          "type": "percent",
          "duration": 12,
          "levelGrowth": 35.0
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Rampage of the Giant Rock Soldier",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 1) for 10 seconds and Magic Attack DOWN(LV 1) for 10 seconds",
      "effect": "900% + 920",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack - Ultimate Lv1",
          "value": -15,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Rampage of the Giant Rock Soldier",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 2) for 10 seconds and Magic Attack DOWN(LV 2) for 10 seconds",
      "effect": "1080% + 950",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv2",
          "value": -20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack - Ultimate Lv2",
          "value": -20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Rampage of the Giant Rock Soldier",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 3) for 10 seconds and Magic Attack DOWN(LV 3) for 10 seconds",
      "effect": "1210% + 1200",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv3",
          "value": -24,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack - Ultimate Lv3",
          "value": -24,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Rampage of the Giant Rock Soldier",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 4) for 10 seconds and Magic Attack DOWN(LV 4) for 10 seconds",
      "effect": "1300% + 1300",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv4",
          "value": -27,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack - Ultimate Lv4",
          "value": -27,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Rampage of the Giant Rock Soldier",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV 5) for 10 seconds and Magic Attack DOWN(LV 5) for 10 seconds",
      "effect": "1390% + 1400",
      "buffEffects": [
        {
          "name": "Physical Attack - Ultimate Lv5",
          "value": -30,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Attack - Ultimate Lv5",
          "value": -30,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Defense+, Max HP +",
      "icon": "skill001/skill1002",
      "effect": "Magic Defense+ (+141), Max HP + (+3444)",
      "effectValues": [
        {
          "name": "Magic Defense+",
          "value": 141,
          "type": "flat"
        },
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Attack +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+159), Physical Critical Damage+ (+90%)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 159,
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
  "name": "Golem Summoner: Nerys",
  "id": 2042,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 2965,
    "ATK": 263,
    "MATK": 158,
    "DEF": 82,
    "MDEF": 32
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Skill2 → Basic → Basic",
    "loop": "Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.18"
  },
  "slug": "golem-summoner-nerys"
};

export const stats = {
  "id": "golem-summoner-nerys",
  "characterId": 2042,
  "name": "【Golem Summoner】Nerys",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 2965,
      "lv90": 14826
    },
    "atk": {
      "base": 263,
      "lv90": 1315
    },
    "matk": {
      "base": 158,
      "lv90": 790
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
      "base": 45,
      "lv90": 135
    },
    "physCrit": {
      "base": 303,
      "lv90": 485
    },
    "magicCrit": {
      "base": 182,
      "lv90": 291
    },
    "hpRegen": {
      "base": 148,
      "lv90": 518
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
      "HP": 890,
      "ATK": 79,
      "Block": 14,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 1023,
      "ATK": 91,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 1201,
      "ATK": 107,
      "Block": 18,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1334,
      "ATK": 118,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 2521,
      "ATK": 224,
      "DEF": 23,
      "MDEF": 6,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 6969,
      "ATK": 619,
      "Block": 68,
      "MP Charge": 13,
      "Accuracy": 30,
      "DEF": 23,
      "MDEF": 6,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Charge": 3
    },
    "gp2": {
      "ATK": 40,
      "MP Charge": 3
    },
    "gp3": {
      "ATK": 40,
      "MP Charge": 7
    },
    "gp4": {
      "ATK": 120,
      "MP Charge": 7
    },
    "gp5": {
      "ATK": 120,
      "MP Charge": 9
    },
    "gp6": {
      "ATK": 200,
      "MP Charge": 9
    },
    "gp7": {
      "ATK": 200,
      "MP Charge": 11
    },
    "gp8": {
      "ATK": 280,
      "MP Charge": 11
    },
    "gp9": {
      "ATK": 280,
      "MP Charge": 13
    },
    "gp10": {
      "ATK": 360,
      "MP Charge": 13
    },
    "total": {
      "ATK": 360,
      "MP Charge": 13
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 312,
      "ATK": 28,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 375,
      "ATK": 33,
      "Phys Crit": 8,
      "Block": 14
    },
    "g3": {
      "HP": 437,
      "ATK": 39,
      "Phys Crit": 9,
      "Accuracy": 12
    },
    "g4": {
      "HP": 499,
      "ATK": 44,
      "Phys Crit": 10,
      "Block": 19
    },
    "g5": {
      "HP": 562,
      "ATK": 50,
      "Phys Crit": 12,
      "MP Charge": 5
    },
    "g6": {
      "HP": 624,
      "ATK": 55,
      "Phys Crit": 13,
      "Accuracy": 18
    },
    "g7": {
      "HP": 687,
      "ATK": 61,
      "Phys Crit": 14,
      "Block": 26
    },
    "g8": {
      "HP": 749,
      "ATK": 66,
      "Phys Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 812,
      "ATK": 72,
      "Phys Crit": 17,
      "Block": 31
    },
    "g10": {
      "HP": 874,
      "ATK": 78,
      "Phys Crit": 18,
      "MP Charge": 8
    },
    "total": {
      "HP": 874,
      "ATK": 78,
      "Phys Crit": 18,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Phys Crit": 10
    },
    {
      "grade": 2,
      "MP Charge": 2
    },
    {
      "grade": 3,
      "Phys Crit": 14
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "Phys Crit": 18
    },
    {
      "grade": 6,
      "MP Charge": 3
    },
    {
      "grade": 7,
      "Phys Crit": 22
    },
    {
      "grade": 8,
      "MP Charge": 3
    },
    {
      "grade": 9,
      "Phys Crit": 26
    },
    {
      "grade": 10,
      "MP Charge": 4
    },
    {
      "grade": 11,
      "Phys Crit": 27
    }
  ]
};;;;;;;;
