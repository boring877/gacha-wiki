// Character data: エルロンの堅牢なる盾-ナターシャ
// Auto-generated from game data

export const info = {
  "slug": "elrons-sturdy-shield-natasha",
  "name": "[Elron's Sturdy Shield] Natasha",
  "displayName": "Elron's Sturdy Shield Natasha",
  "baseName": "Natasha",
  "title": "Elron's Sturdy Shield",
  "rarity": "SSR",
  "element": "Water",
  "role": "Tank",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 180,
  "weaponType": "Strike",
  "skillTypes": [
    "強化、弱體化"
  ],
  "image": "ナターシャ",
  "introduction": "Front RowPhysicalTank",
  "profile": {
    "height": "153cm",
    "bust": "96cm (I Cup)",
    "waist": "57cm",
    "hips": "83cm"
  },
  "credits": {
    "illustration": {
      "japanese": "ねぶそく",
      "romanized": ""
    },
    "voice": {
      "japanese": "姫川あいり",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2232
};








































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "ダブルバンプ",
      "icon": "skill001/skill0008",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Attack -11%-25 DOWN for 6 seconds and Magic Attack -11%-25 DOWN for 6 seconds, 6s Action Speed -20%DOWN, +30%, DOWN effect +30%",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Attack -11%-25 DOWN for 6 seconds and Magic Attack -11%-25 DOWN for 6 seconds, 6s Action Speed -20%DOWN, +30%, DOWN effect +30%",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Attack -11%-205 DOWN for 6 seconds and Magic Attack -11%-205 DOWN for 6 seconds, 6s Action Speed -20%DOWN, +30%, DOWN effect +30%",
      "target": "Nearest Enemy",
      "castTime": 1.05,
      "damageScaling": "330% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+20",
      "lvl1": "330% + 200",
      "lvl90": null,
      "effects": [
        "Physical Attack - Lv4",
        "Magic Attack - Lv4",
        "Action Speed - Lv5"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv4",
          "value": -25,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Attack - Lv4",
          "value": -25,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        },
        {
          "name": "Action Speed - Lv5",
          "value": -20,
          "type": "flat",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "フルガーディアンズ",
      "icon": "skill001/skill0019",
      "description": "All allies 10s Defense Shield(800) and Defense Reflection Shield(400) for 10 seconds, 10s Block 11 UP, ×2000%",
      "descriptionLv1": "All allies 10s Defense Shield(800) and Defense Reflection Shield(400) for 10 seconds, 10s Block 11 UP, ×2000%",
      "descriptionLv90": "All allies 10s Defense Shield(800) and Defense Reflection Shield(400) for 10 seconds, 10s Block 23 UP, ×2000%",
      "target": "All Allies",
      "castTime": 1.05,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Defense Shield",
        "Defense Reflection Shield",
        "Block+ Lv4"
      ],
      "buffEffects": [
        {
          "name": "Defense Shield",
          "value": 1000,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 30.0
        },
        {
          "name": "Defense Reflection Shield",
          "value": 500,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 10.0
        },
        {
          "name": "Block+ Lv4",
          "value": 11,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.13
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "ガーディアンズアーテラリィ",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy DOWN(LV 1) for 8 seconds, all allies 8s Shield (LV 1), 8s Defense Reflection Shield(LV 1), +50%, ×2000%",
      "effect": "1000% + 1000",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Shield Ultimate Lv1",
          "value": 15,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Defense Reflection Shield Ultimate Lv1",
          "value": 600,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "ガーディアンズアーテラリィ",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy DOWN(LV 2) for 8 seconds, all allies 8s Shield (LV 2), 8s Defense Reflection Shield(LV 2), +50%, ×2000%",
      "effect": "1200% + 1300",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Shield Ultimate Lv2",
          "value": 20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Defense Reflection Shield Ultimate Lv2",
          "value": 700,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "ガーディアンズアーテラリィ",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy DOWN(LV 3) for 8 seconds, all allies 8s Shield (LV 3), 8s Defense Reflection Shield(LV 3), +50%, ×2000%",
      "effect": "1350% + 1500",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv3",
          "value": -24,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Shield Ultimate Lv3",
          "value": 25,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Defense Reflection Shield Ultimate Lv3",
          "value": 800,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "ガーディアンズアーテラリィ",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy DOWN(LV 4) for 8 seconds, all allies 8s Shield (LV 4), 8s Defense Reflection Shield(LV 4), +50%, ×2000%",
      "effect": "1450% + 1650",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv4",
          "value": -27,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Shield Ultimate Lv4",
          "value": 30,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Defense Reflection Shield Ultimate Lv4",
          "value": 900,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "ガーディアンズアーテラリィ",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy DOWN(LV 5) for 8 seconds, all allies 8s Shield (LV 5), 8s Defense Reflection Shield(LV 5), +50%, ×2000%",
      "effect": "1500% + 1800",
      "buffEffects": [
        {
          "name": "Accuracy - Ultimate Lv5",
          "value": -30,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Shield Ultimate Lv5",
          "value": 35,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Defense Reflection Shield Ultimate Lv5",
          "value": 1000,
          "type": "percent",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Defense Shield",
      "icon": "skill001/skill1006",
      "description": "Gain Max HP UP (Large), Defense Shield ()",
      "effect": "Max HP + (+3444), Defense Shield (+1200%)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat",
          "gameText": "Max HP UP (Large)"
        },
        {
          "name": "Defense Shield",
          "value": 1200,
          "type": "percent",
          "gameText": "Defense Shield ()"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Debuff Resistance+, Shield, Defense Shield",
      "icon": "skill001/skill1006",
      "description": "Gain Debuff Resistance UP (Medium), Damage Taken -, Defense Shield ()",
      "effect": "Shield (+20%), Defense Shield (+1000%)",
      "effectValues": [
        {
          "name": "Shield",
          "value": 20,
          "type": "percent",
          "gameText": "Damage Taken -"
        },
        {
          "name": "Defense Shield",
          "value": 1000,
          "type": "percent",
          "gameText": "Defense Shield ()"
        }
      ]
    }
  ],
  "name": "エルロンの堅牢なる盾: ナターシャ",
  "id": 2232,
  "rarity": "SSR",
  "element": "Water",
  "role": "Tank",
  "tags": [
    "強化、弱體化"
  ],
  "baseStats": {
    "HP": 1951,
    "ATK": 167,
    "MATK": 100,
    "DEF": 117,
    "MDEF": 175
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.55"
  },
  "slug": "エルロンの堅牢なる盾-ナターシャ"
};

export const stats = {
  "id": "elrons-sturdy-shield-natasha",
  "characterId": 2232,
  "name": "[Elron's Sturdy Shield] Natasha",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Tank",
  "tags": [
    "強化、弱體化"
  ],
  "baseStats": {
    "hp": {
      "base": 1951,
      "lv90": 9755
    },
    "atk": {
      "base": 167,
      "lv90": 833
    },
    "matk": {
      "base": 100,
      "lv90": 500
    },
    "def": {
      "base": 117,
      "lv90": 348
    },
    "mdef": {
      "base": 175,
      "lv90": 521
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
      "base": 53,
      "lv90": 85
    },
    "magicCrit": {
      "base": 32,
      "lv90": 51
    },
    "hpRegen": {
      "base": 97,
      "lv90": 340
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
      "HP": 585,
      "ATK": 50,
      "Block": 17,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 673,
      "ATK": 58,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 790,
      "ATK": 68,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 878,
      "ATK": 76,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1659,
      "ATK": 145,
      "DEF": 97,
      "MDEF": 70,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4585,
      "ATK": 397,
      "Block": 83,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 97,
      "MDEF": 70,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "DEF": 20
    },
    "gp2": {
      "DEF": 20,
      "MDEF": 20
    },
    "gp3": {
      "DEF": 50,
      "MDEF": 20
    },
    "gp4": {
      "DEF": 50,
      "MDEF": 50
    },
    "gp5": {
      "DEF": 80,
      "MDEF": 50
    },
    "gp6": {
      "DEF": 80,
      "MDEF": 80
    },
    "gp7": {
      "DEF": 110,
      "MDEF": 80
    },
    "gp8": {
      "DEF": 110,
      "MDEF": 110
    },
    "gp9": {
      "DEF": 140,
      "MDEF": 110
    },
    "gp10": {
      "DEF": 140,
      "MDEF": 140
    },
    "total": {
      "DEF": 140,
      "MDEF": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 205,
      "ATK": 18,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 246,
      "ATK": 21,
      "Phys Crit": 1,
      "Block": 17
    },
    "g3": {
      "HP": 288,
      "ATK": 25,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 329,
      "ATK": 28,
      "Phys Crit": 2,
      "Block": 23
    },
    "g5": {
      "HP": 370,
      "ATK": 32,
      "Phys Crit": 2,
      "MP Charge": 4
    },
    "g6": {
      "HP": 411,
      "ATK": 36,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 452,
      "ATK": 39,
      "Phys Crit": 2,
      "Block": 32
    },
    "g8": {
      "HP": 493,
      "ATK": 43,
      "Phys Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 534,
      "ATK": 46,
      "Phys Crit": 3,
      "Block": 38
    },
    "g10": {
      "HP": 575,
      "ATK": 49,
      "Phys Crit": 3,
      "MP Charge": 7
    },
    "total": {
      "HP": 575,
      "ATK": 49,
      "Phys Crit": 3,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "DEF": 16
    },
    {
      "grade": 2,
      "Block": 5
    },
    {
      "grade": 3,
      "DEF": 23
    },
    {
      "grade": 4,
      "Block": 7
    },
    {
      "grade": 5,
      "DEF": 29
    },
    {
      "grade": 6,
      "Block": 8
    },
    {
      "grade": 7,
      "DEF": 36
    },
    {
      "grade": 8,
      "Block": 10
    },
    {
      "grade": 9,
      "DEF": 43
    },
    {
      "grade": 10,
      "Block": 12
    },
    {
      "grade": 11,
      "DEF": 54
    }
  ]
};;;
