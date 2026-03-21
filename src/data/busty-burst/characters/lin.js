// Character data: lin
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "lin",
  "name": "Lin",
  "displayName": "Lin",
  "baseName": "Lin",
  "title": null,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slow",
  "range": 240,
  "weaponType": "Pierce",
  "skillTypes": [
    "Buff",
    "Debuff"
  ],
  "image": "Lin",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "166cm",
    "bust": "113cm (L Cup)",
    "waist": "63cm",
    "hips": "95cm"
  },
  "credits": {
    "illustration": {
      "japanese": "山田ゴゴゴ",
      "romanized": ""
    },
    "voice": {
      "japanese": "星鹿りえ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2156
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Swift Wind Assault",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -40 DOWN for 6 seconds, [Swift Wind] Lv when activation beforeapply to self6 Wind Type ATK30%UP",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -40 DOWN for 6 seconds, [Swift Wind] Lv when activation beforeapply to self6 Wind Type ATK30%UP",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -220 DOWN for 6 seconds, [Swift Wind] Lv when activation beforeapply to self6 Wind Type ATK30%UP",
      "target": "Nearest Enemy",
      "castTime": 1.2,
      "damageScaling": "300% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+25",
      "lvl1": "300% + 300",
      "lvl90": "300% + 122",
      "effects": [
        "Physical Defense - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
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
      "name": "Wind Wrap",
      "icon": "skill001/skill0019",
      "description": "Applies Action Speed UP to all allies for 10 seconds and Accuracy 9 UP for 10 seconds , when team hasWind Type when 3+ allies are presentWind Type allies10 Wind Type ATK UP",
      "descriptionLv1": "Applies Action Speed UP to all allies for 10 seconds and Accuracy 9 UP for 10 seconds , when team hasWind Type when 3+ allies are presentWind Type allies10 Wind Type ATK UP",
      "descriptionLv90": "Applies Action Speed UP to all allies for 10 seconds and Accuracy 18 UP for 10 seconds , when team hasWind Type when 3+ allies are presentWind Type allies10 Wind Type ATK UP",
      "target": "All Allies",
      "castTime": 1.4,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Action Speed + Lv3",
        "Accuracy + Lv3",
        "Wind Type ATK + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Accuracy + Lv3",
          "value": 9,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 0.1
        },
        {
          "name": "Wind Type ATK + Lv4",
          "value": 15,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Crouching Dragon Flying Spiral",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts BlockDOWN(LV 1) for 10 seconds, apply to self10 [Swift Wind](Speed10%UP)",
      "effect": "1000% + 800",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Swift Wind",
          "value": 10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Swift Wind Assault",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -40 DOWN for 6 seconds, [Swift Wind] Lv when activation beforeapply to self6 Wind Type ATK30%UP",
      "effect": "300% + 300",
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Wind Wrap",
      "icon": "skill001/skill0019",
      "description": "Applies Action Speed UP to all allies for 10 seconds and Accuracy 9 UP for 10 seconds , when team hasWind Type when 3+ allies are presentWind Type allies10 Wind Type ATK UP",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Accuracy + Lv3",
          "value": 9,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Wind Type ATK + Lv4",
          "value": 15,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Crouching Dragon Flying Spiral",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts BlockDOWN(LV 1) for 10 seconds, apply to self10 [Swift Wind](Speed10%UP)",
      "effect": "1000% + 800",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Swift Wind",
          "value": 10,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Crouching Dragon Flying Spiral",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts BlockDOWN(LV 2) for 10 seconds, apply to self11 [Swift Wind](Speed10%UP)",
      "effect": "1200% + 950",
      "buffEffects": [
        {
          "name": "Block- Ultimate Lv2",
          "value": -23,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Swift Wind",
          "value": 10,
          "type": "flat",
          "duration": 11
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Damage UP(Cannot be Cleansed)",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+15), Damage UP(Cannot be Cleansed) (+10%)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "flat"
        },
        {
          "name": "Damage UP(Cannot be Cleansed)",
          "value": 10,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Lin",
  "id": 2156,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 1546,
    "ATK": 311,
    "MATK": 186,
    "DEF": 186,
    "MDEF": 130
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.1"
  },
  "slug": "lin"
};

export const stats = {
  "id": "lin",
  "characterId": 2156,
  "name": "Lin",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1546,
      "lv90": 7730
    },
    "atk": {
      "base": 311,
      "lv90": 1555
    },
    "matk": {
      "base": 186,
      "lv90": 932
    },
    "def": {
      "base": 186,
      "lv90": 344
    },
    "mdef": {
      "base": 130,
      "lv90": 288
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
      "base": 303,
      "lv90": 485
    },
    "magicCrit": {
      "base": 182,
      "lv90": 291
    },
    "hpRegen": {
      "base": 77,
      "lv90": 270
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
      "HP": 464,
      "ATK": 93,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 533,
      "ATK": 107,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 626,
      "ATK": 126,
      "Block": 20,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 696,
      "ATK": 140,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1315,
      "ATK": 288,
      "DEF": 54,
      "MDEF": 29
    },
    "total": {
      "HP": 3634,
      "ATK": 754,
      "Block": 75,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 54,
      "MDEF": 29
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "Accuracy": 3
    },
    "gp3": {
      "ATK": 120,
      "Accuracy": 3
    },
    "gp4": {
      "ATK": 120,
      "Accuracy": 7
    },
    "gp5": {
      "ATK": 200,
      "Accuracy": 7
    },
    "gp6": {
      "ATK": 200,
      "Accuracy": 10
    },
    "gp7": {
      "ATK": 280,
      "Accuracy": 10
    },
    "gp8": {
      "ATK": 280,
      "Accuracy": 13
    },
    "gp9": {
      "ATK": 360,
      "Accuracy": 13
    },
    "gp10": {
      "ATK": 360,
      "Accuracy": 16
    },
    "total": {
      "ATK": 360,
      "Accuracy": 16
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 163,
      "ATK": 33,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 195,
      "ATK": 39,
      "Phys Crit": 8,
      "Block": 16
    },
    "g3": {
      "HP": 228,
      "ATK": 46,
      "Phys Crit": 9,
      "Accuracy": 12
    },
    "g4": {
      "HP": 260,
      "ATK": 52,
      "Phys Crit": 10,
      "Block": 21
    },
    "g5": {
      "HP": 293,
      "ATK": 59,
      "Phys Crit": 12,
      "MP Charge": 6
    },
    "g6": {
      "HP": 326,
      "ATK": 66,
      "Phys Crit": 13,
      "Accuracy": 18
    },
    "g7": {
      "HP": 358,
      "ATK": 72,
      "Phys Crit": 14,
      "Block": 29
    },
    "g8": {
      "HP": 391,
      "ATK": 79,
      "Phys Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 423,
      "ATK": 85,
      "Phys Crit": 17,
      "Block": 34
    },
    "g10": {
      "HP": 456,
      "ATK": 92,
      "Phys Crit": 18,
      "MP Charge": 9
    },
    "total": {
      "HP": 456,
      "ATK": 92,
      "Phys Crit": 18,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 26
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "ATK": 36
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "ATK": 47
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "ATK": 57
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "ATK": 67
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "ATK": 74
    }
  ]
};;;;;;;;
