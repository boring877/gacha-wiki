// Character data: 伝説の勇者-ジェミニ
// Auto-generated from game data

export const info = {
  "slug": "legendary-hero-gemini",
  "name": "[Legendary Hero] Gemini",
  "displayName": "Legendary Hero Gemini",
  "baseName": "Gemini",
  "title": "Legendary Hero",
  "rarity": "SSR",
  "element": "Holy",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slow",
  "range": 210,
  "weaponType": "Slash",
  "skillTypes": [
    "回復、弱體化、妨害、デバフ解除"
  ],
  "image": "ジェミニ",
  "introduction": "Front RowMagicalAttacker",
  "profile": {
    "height": "166cm",
    "bust": "114cm (M Cup)",
    "waist": "66cm",
    "hips": "100cm"
  },
  "credits": {
    "illustration": {
      "japanese": "れむ",
      "romanized": ""
    },
    "voice": {
      "japanese": "森乃なんな",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2233
};








































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "アチィスギィ",
      "icon": "skill001/skill0005",
      "description": "3 nearest enemiesmagic damage and inflicts Magic Defense-23%-50 DOWN for 6 seconds and Burn(HP --150 per second) for 20 seconds",
      "descriptionLv1": "3 nearest enemiesmagic damage and inflicts Magic Defense-23%-50 DOWN for 6 seconds and Burn(HP --150 per second) for 20 seconds",
      "descriptionLv90": "3 nearest enemiesmagic damage and inflicts Magic Defense-23%-320 DOWN for 6 seconds and Burn(HP --1500 per second) for 20 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.2,
      "damageScaling": "105% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+6",
      "lvl1": "105% + 150",
      "lvl90": "105% + -1185",
      "effects": [
        "Magic Defense- Lv5",
        "Burn Lv5"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense- Lv5",
          "value": -50,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -3.0
        },
        {
          "name": "Burn Lv5",
          "value": -150,
          "type": "flat",
          "duration": 20,
          "levelGrowth": -15.0
        }
      ],
      "duration": 20
    },
    {
      "slot": 3,
      "name": "イェスル",
      "icon": "skill001/skill0021",
      "description": "Restores HP to 3 nearest allies and inflicts HP Regeneration 4%+100 for 4 seconds, debuff cleanse",
      "descriptionLv1": "Restores HP to 3 nearest allies and inflicts HP Regeneration 4%+100 for 4 seconds, debuff cleanse",
      "descriptionLv90": "Restores HP to 3 nearest allies and inflicts HP Regeneration 4%+100 for 4 seconds, debuff cleanse",
      "target": "Nearest Ally",
      "castTime": 1.3,
      "damageScaling": "800% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+20",
      "lvl1": "800% + 200",
      "lvl90": null,
      "effects": [
        "HP Regeneration+ Lv2",
        "Debuff Resistance LvMax"
      ],
      "buffEffects": [
        {
          "name": "HP Regeneration+ Lv2",
          "value": 4,
          "type": "percent",
          "duration": 4,
          "levelGrowth": 6.0
        },
        {
          "name": "Debuff Resistance LvMax",
          "value": 1,
          "type": "percent",
          "duration": 0
        }
      ],
      "duration": 4
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "カンデェイン・スラッシュ!!",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to 5 nearest enemies, applies 3s, on Ultimate activation, self 10s Magic Attack UP(LV 1), 10s Magic Critical DamageUP(LV 1)",
      "effect": "200% + 300",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Attack + Ultimate Lv1",
          "value": 15,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage+ Ultimate Lv1",
          "value": 250,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "カンデェイン・スラッシュ!!",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to 5 nearest enemies, applies 4s, on Ultimate activation, self 10s Magic Attack UP(LV 2), 10s Magic Critical DamageUP(LV 2)",
      "effect": "240% + 350",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Magic Attack + Ultimate Lv2",
          "value": 20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage+ Ultimate Lv2",
          "value": 325,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "カンデェイン・スラッシュ!!",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to 5 nearest enemies, applies 4s, on Ultimate activation, self 10s Magic Attack UP(LV 3), 10s Magic Critical DamageUP(LV 3)",
      "effect": "265% + 390",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Magic Attack + Ultimate Lv3",
          "value": 24,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage+ Ultimate Lv3",
          "value": 400,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "カンデェイン・スラッシュ!!",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to 5 nearest enemies, applies 5s, on Ultimate activation, self 10s Magic Attack UP(LV 4), 10s Magic Critical DamageUP(LV 4)",
      "effect": "290% + 420",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Magic Attack + Ultimate Lv4",
          "value": 27,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage+ Ultimate Lv4",
          "value": 450,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "カンデェイン・スラッシュ!!",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to 5 nearest enemies, applies 5s, on Ultimate activation, self 10s Magic Attack UP(LV 5), 10s Magic Critical DamageUP(LV 5)",
      "effect": "310% + 450",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Magic Attack + Ultimate Lv5",
          "value": 30,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Magic Critical Damage+ Ultimate Lv5",
          "value": 500,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Holy Type ATK +, Healing Received +",
      "icon": "skill001/skill1007",
      "description": "Gain Holy Type ATK UP (Medium), Healing Received UP (Small)",
      "effect": "Holy Type ATK + (+10%), Healing Received + (+20%)",
      "effectValues": [
        {
          "name": "Holy Type ATK +",
          "value": 10,
          "type": "percent",
          "gameText": "Holy Type ATK UP (Medium)"
        },
        {
          "name": "Healing Received +",
          "value": 20,
          "type": "percent",
          "gameText": "Healing Received UP (Small)"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Accuracy +",
      "icon": "skill001/skill1001",
      "description": "Gain Ultimate Damage UP (Large), Accuracy UP (Medium)",
      "effect": "Ultimate Damage + (+15%), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent",
          "gameText": "Ultimate Damage UP (Large)"
        },
        {
          "name": "Accuracy +",
          "value": 20,
          "type": "flat",
          "gameText": "Accuracy UP (Medium)"
        }
      ]
    }
  ],
  "name": "伝説の勇者: ジェミニ",
  "id": 2233,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Attacker",
  "tags": [
    "回復、弱體化、妨害、デバフ解除"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 232,
    "MATK": 386,
    "DEF": 100,
    "MDEF": 100
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Skill3 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.1"
  },
  "slug": "伝説の勇者-ジェミニ"
};

export const stats = {
  "id": "legendary-hero-gemini",
  "characterId": 2233,
  "name": "[Legendary Hero] Gemini",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "回復、弱體化、妨害、デバフ解除"
  ],
  "baseStats": {
    "hp": {
      "base": 1819,
      "lv90": 9095
    },
    "atk": {
      "base": 232,
      "lv90": 1160
    },
    "matk": {
      "base": 386,
      "lv90": 1933
    },
    "def": {
      "base": 100,
      "lv90": 200
    },
    "mdef": {
      "base": 100,
      "lv90": 200
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
      "base": 32,
      "lv90": 51
    },
    "magicCrit": {
      "base": 53,
      "lv90": 85
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
      "base": 100,
      "lv90": 250
    },
    "mpCharge": {
      "base": 68,
      "lv90": 68
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
      "MATK": 116,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 628,
      "MATK": 133,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 737,
      "MATK": 157,
      "Block": 20,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 819,
      "MATK": 174,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1547,
      "MATK": 358,
      "DEF": 20,
      "MDEF": 33,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4277,
      "MATK": 938,
      "Block": 75,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 20,
      "MDEF": 33,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "Magic Crit": 10
    },
    "gp2": {
      "MATK": 40,
      "Magic Crit": 10
    },
    "gp3": {
      "MATK": 40,
      "Magic Crit": 30
    },
    "gp4": {
      "MATK": 120,
      "Magic Crit": 30
    },
    "gp5": {
      "MATK": 120,
      "Magic Crit": 50
    },
    "gp6": {
      "MATK": 200,
      "Magic Crit": 50
    },
    "gp7": {
      "MATK": 200,
      "Magic Crit": 70
    },
    "gp8": {
      "MATK": 280,
      "Magic Crit": 70
    },
    "gp9": {
      "MATK": 280,
      "Magic Crit": 90
    },
    "gp10": {
      "MATK": 360,
      "Magic Crit": 90
    },
    "total": {
      "MATK": 360,
      "Magic Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 191,
      "MATK": 41,
      "MDEF": 6,
      "Magic Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 230,
      "MATK": 49,
      "MDEF": 8,
      "Magic Crit": 1,
      "Block": 16
    },
    "g3": {
      "HP": 268,
      "MATK": 57,
      "MDEF": 9,
      "Magic Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 306,
      "MATK": 65,
      "MDEF": 10,
      "Magic Crit": 2,
      "Block": 21
    },
    "g5": {
      "HP": 345,
      "MATK": 73,
      "MDEF": 12,
      "Magic Crit": 2,
      "MP Charge": 6
    },
    "g6": {
      "HP": 383,
      "MATK": 81,
      "MDEF": 13,
      "Magic Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 421,
      "MATK": 90,
      "MDEF": 14,
      "Magic Crit": 2,
      "Block": 29
    },
    "g8": {
      "HP": 460,
      "MATK": 98,
      "MDEF": 16,
      "Magic Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 498,
      "MATK": 106,
      "MDEF": 17,
      "Magic Crit": 3,
      "Block": 34
    },
    "g10": {
      "HP": 536,
      "MATK": 114,
      "MDEF": 18,
      "Magic Crit": 3,
      "MP Charge": 9
    },
    "total": {
      "HP": 536,
      "MATK": 114,
      "MDEF": 18,
      "Magic Crit": 3,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 32
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "MATK": 45
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "MATK": 58
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "MATK": 71
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "MATK": 84
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "MATK": 100
    }
  ]
};;;
