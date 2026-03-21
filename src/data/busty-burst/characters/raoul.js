// Character data: raoul
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "raoul",
  "name": "Raoul",
  "displayName": "Raoul",
  "baseName": "Raoul",
  "title": null,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slow",
  "range": 270,
  "weaponType": "Strike",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Raoul",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "140cm",
    "bust": "112cm (O Cup)",
    "waist": "62cm",
    "hips": "82cm"
  },
  "credits": {
    "illustration": {
      "japanese": "カゲシオ",
      "romanized": ""
    },
    "voice": {
      "japanese": "羽生羽見",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2120
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Happiness Shatter",
      "icon": "skill001/skill0010",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense-40 DOWN for 6 seconds, self[Happiness]1([Happiness]1Mind Type ATK4%UP, max4), [Happiness]4,self6 Mind Type ATK15%UP",
      "descriptionLv1": "Deals magic damage to the nearest enemy and inflicts Magic Defense-40 DOWN for 6 seconds, self[Happiness]1([Happiness]1Mind Type ATK4%UP, max4), [Happiness]4,self6 Mind Type ATK15%UP",
      "descriptionLv90": "Deals magic damage to the nearest enemy and inflicts Magic Defense-220 DOWN for 6 seconds, self[Happiness]1([Happiness]1Mind Type ATK4%UP, max4), [Happiness]4,self6 Mind Type ATK15%UP",
      "target": "Nearest Enemy",
      "castTime": 1.4,
      "damageScaling": "330% ATK",
      "baseDamage": "+400",
      "levelGrowth": "+20",
      "lvl1": "330% + 400",
      "lvl90": null,
      "effects": [
        "Magic Defense- Lv4",
        "Happiness"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense- Lv4",
          "value": -40,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        },
        {
          "name": "Happiness",
          "value": 4,
          "type": "percent",
          "duration": 999
        }
      ],
      "duration": 999
    },
    {
      "slot": 3,
      "name": "Happiness Shine",
      "icon": "skill001/skill0014",
      "description": "Applies Magic Attack +35 UP to self for 12 seconds and Accuracy 13 UP for 12 seconds",
      "descriptionLv1": "Applies Magic Attack +35 UP to self for 12 seconds and Accuracy 13 UP for 12 seconds",
      "descriptionLv90": "Applies Magic Attack +665 UP to self for 12 seconds and Accuracy 26 UP for 12 seconds",
      "target": "Self",
      "castTime": 1.4,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Magic Attack + Lv4",
        "Accuracy + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Magic Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 7.0
        },
        {
          "name": "Accuracy + Lv5",
          "value": 13,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 0.15
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Happy Comet☆",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the nearest enemyApplies Action Speed UP(LV 1) to self for 10 seconds",
      "effect": "1100% + 800",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Happiness Shatter",
      "icon": "skill001/skill0010",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense-40 DOWN for 6 seconds, self[Happiness]1([Happiness]1Mind Type ATK4%UP, max4), [Happiness]4,self6 Mind Type ATK15%UP",
      "effect": "330% + 400",
      "buffEffects": [
        {
          "name": "Magic Defense- Lv4",
          "value": -40,
          "type": "flat",
          "duration": 6
        },
        {
          "name": "Happiness",
          "value": 4,
          "type": "percent",
          "duration": 999
        }
      ]
    },
    {
      "rank": 3,
      "name": "Happiness Shine",
      "icon": "skill001/skill0014",
      "description": "Applies Magic Attack +35 UP to self for 12 seconds and Accuracy 13 UP for 12 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Magic Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Accuracy + Lv5",
          "value": 13,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "Happy Comet☆",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the nearest enemyApplies Action Speed UP(LV 1) to self for 10 seconds",
      "effect": "1100% + 800",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv1",
          "value": 15,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Happy Comet☆",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the nearest enemyApplies Action Speed UP(LV 2) to self for 10 seconds",
      "effect": "1320% + 1000",
      "buffEffects": [
        {
          "name": "Action Speed + Ultimate Lv2",
          "value": 18,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+389), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
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
      "name": "Skill Damage +, Magic Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Magic Critical Damage+ (+90)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Magic Critical Damage+",
          "value": 90,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Raoul",
  "id": 2120,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 186,
    "MATK": 311,
    "DEF": 32,
    "MDEF": 82
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.1"
  },
  "slug": "raoul"
};

export const stats = {
  "id": "raoul",
  "characterId": 2120,
  "name": "Raoul",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 2092,
      "lv90": 10460
    },
    "atk": {
      "base": 186,
      "lv90": 932
    },
    "matk": {
      "base": 311,
      "lv90": 1555
    },
    "def": {
      "base": 32,
      "lv90": 64
    },
    "mdef": {
      "base": 82,
      "lv90": 164
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
      "base": 182,
      "lv90": 291
    },
    "magicCrit": {
      "base": 303,
      "lv90": 485
    },
    "hpRegen": {
      "base": 104,
      "lv90": 365
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
      "HP": 628,
      "MATK": 93,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 722,
      "MATK": 107,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 847,
      "MATK": 126,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 941,
      "MATK": 140,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1778,
      "MATK": 264,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 4916,
      "MATK": 730,
      "Block": 75,
      "MP Charge": 13,
      "Accuracy": 30,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 40
    },
    "gp2": {
      "MATK": 40,
      "Magic Crit": 20
    },
    "gp3": {
      "MATK": 120,
      "Magic Crit": 20
    },
    "gp4": {
      "MATK": 120,
      "Magic Crit": 50
    },
    "gp5": {
      "MATK": 200,
      "Magic Crit": 50
    },
    "gp6": {
      "MATK": 200,
      "Magic Crit": 80
    },
    "gp7": {
      "MATK": 280,
      "Magic Crit": 80
    },
    "gp8": {
      "MATK": 280,
      "Magic Crit": 110
    },
    "gp9": {
      "MATK": 360,
      "Magic Crit": 110
    },
    "gp10": {
      "MATK": 360,
      "Magic Crit": 140
    },
    "total": {
      "MATK": 360,
      "Magic Crit": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 220,
      "MATK": 33,
      "MDEF": 4,
      "Magic Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 264,
      "MATK": 39,
      "MDEF": 4,
      "Magic Crit": 8,
      "Block": 16
    },
    "g3": {
      "HP": 308,
      "MATK": 46,
      "MDEF": 5,
      "Magic Crit": 9,
      "Accuracy": 12
    },
    "g4": {
      "HP": 352,
      "MATK": 52,
      "MDEF": 6,
      "Magic Crit": 10,
      "Block": 21
    },
    "g5": {
      "HP": 396,
      "MATK": 59,
      "MDEF": 7,
      "Magic Crit": 12,
      "MP Charge": 5
    },
    "g6": {
      "HP": 440,
      "MATK": 66,
      "MDEF": 7,
      "Magic Crit": 13,
      "Accuracy": 18
    },
    "g7": {
      "HP": 484,
      "MATK": 72,
      "MDEF": 8,
      "Magic Crit": 14,
      "Block": 29
    },
    "g8": {
      "HP": 529,
      "MATK": 79,
      "MDEF": 9,
      "Magic Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 573,
      "MATK": 85,
      "MDEF": 10,
      "Magic Crit": 17,
      "Block": 34
    },
    "g10": {
      "HP": 617,
      "MATK": 92,
      "MDEF": 10,
      "Magic Crit": 18,
      "MP Charge": 8
    },
    "total": {
      "HP": 617,
      "MATK": 92,
      "MDEF": 10,
      "Magic Crit": 18,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Magic Crit": 10
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "Magic Crit": 14
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "Magic Crit": 18
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "Magic Crit": 22
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "Magic Crit": 26
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "Magic Crit": 27
    }
  ]
};;;;;;;;
