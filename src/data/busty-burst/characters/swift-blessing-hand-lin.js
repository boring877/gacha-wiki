// Character data: swift-blessing-hand-lin
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "swift-blessing-hand-lin",
  "name": "Swift Blessing Hand: Lin",
  "displayName": "Swift Blessing Hand: Lin",
  "baseName": "Lin",
  "title": "Swift Blessing Hand",
  "rarity": "SR",
  "element": "Wind",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slow",
  "range": 225,
  "weaponType": "Strike",
  "skillTypes": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "image": "Lin",
  "introduction": "Front Row、Physical、Support",
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
  "characterId": 2186
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Wind Snow Vehicle",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the nearest enemy and inflicts Block-9 DOWN for 6 seconds and Action Speed -14%DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Block-9 DOWN for 6 seconds and Action Speed -14%DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Block-18 DOWN for 6 seconds and Action Speed -14%DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.4,
      "damageScaling": "250% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+15",
      "lvl1": "250% + 200",
      "lvl90": null,
      "effects": [
        "Block- Lv3",
        "Action Speed - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Block- Lv3",
          "value": -9,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.1
        },
        {
          "name": "Action Speed - Lv3",
          "value": -14,
          "type": "flat",
          "duration": 6
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Look, a present.",
      "icon": "skill001/skill0019",
      "description": "all allies10 Physical Critical Damage 30 UP and Magic Critical Damage 30 UP for 10 seconds",
      "descriptionLv1": "all allies10 Physical Critical Damage 30 UP and Magic Critical Damage 30 UP for 10 seconds",
      "descriptionLv90": "all allies10 Physical Critical Damage 300 UP and Magic Critical Damage 30 UP for 10 seconds",
      "target": "All Allies",
      "castTime": 1.45,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv2",
        "Magic Critical Damage+ Lv2"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv2",
          "value": 30,
          "type": "percent",
          "duration": 10,
          "levelGrowth": 3.0
        },
        {
          "name": "Magic Critical Damage+ Lv2",
          "value": 30,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 3.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Wind, bring good fortune!!",
      "icon": "skill001/skill0020_1",
      "description": "all enemies3s Blind for orRestores HP by to all allies/",
      "effect": "2000% + 800",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 2,
      "name": "Wind, bring good fortune!!",
      "icon": "skill001/skill0020_2",
      "description": "all enemies4s Blind for orRestores HP by to all allies/",
      "effect": "2300% + 1000",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ]
    },
    {
      "rank": 3,
      "name": "Wind, bring good fortune!!",
      "icon": "skill001/skill0020_3",
      "description": "all enemies4s Blind for orRestores HP by to all allies/",
      "effect": "2500% + 1150",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ]
    },
    {
      "rank": 4,
      "name": "Wind, bring good fortune!!",
      "icon": "skill001/skill0020_4",
      "description": "all enemies5s Blind for orRestores HP by to all allies/",
      "effect": "2700% + 1300",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        }
      ]
    },
    {
      "rank": 5,
      "name": "Wind, bring good fortune!!",
      "icon": "skill001/skill0020_5",
      "description": "all enemies5s Blind for orRestores HP by to all allies/",
      "effect": "2800% + 1500",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "MP Recovery+",
      "icon": "skill001/skill1003",
      "effect": "MP Recovery+ (+50%)",
      "effectValues": [
        {
          "name": "MP Recovery+",
          "value": 50,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Max HP +, Accuracy +",
      "icon": "skill001/skill1007",
      "effect": "Max HP + (+1447), Accuracy + (+10)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 1447,
          "type": "flat"
        },
        {
          "name": "Accuracy +",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Swift Blessing Hand: Lin",
  "id": 2186,
  "rarity": "SR",
  "element": "Wind",
  "role": "Support",
  "tags": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 1747,
    "ATK": 220,
    "MATK": 132,
    "DEF": 146,
    "MDEF": 146
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.2"
  },
  "slug": "swift-blessing-hand-lin"
};

export const stats = {
  "id": "swift-blessing-hand-lin",
  "characterId": 2186,
  "name": "【Swift Blessing Hand】Lin",
  "rarity": "SR",
  "element": "風",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "hp": {
      "base": 1747,
      "lv90": 8735
    },
    "atk": {
      "base": 220,
      "lv90": 1103
    },
    "matk": {
      "base": 132,
      "lv90": 662
    },
    "def": {
      "base": 146,
      "lv90": 292
    },
    "mdef": {
      "base": 146,
      "lv90": 292
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
      "base": 399,
      "lv90": 638
    },
    "magicCrit": {
      "base": 239,
      "lv90": 382
    },
    "hpRegen": {
      "base": 87,
      "lv90": 305
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
      "base": 65,
      "lv90": 65
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
      "HP": 574,
      "ATK": 73,
      "Block": 17,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 660,
      "ATK": 83,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 775,
      "ATK": 98,
      "Block": 22,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 861,
      "ATK": 109,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1399,
      "ATK": 165,
      "DEF": 40,
      "MDEF": 27,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4269,
      "ATK": 528,
      "Block": 83,
      "MP Charge": 14,
      "Accuracy": 30,
      "DEF": 40,
      "MDEF": 27,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 200
    },
    "gp2": {
      "HP": 200,
      "MP Cost Down": 3
    },
    "gp3": {
      "HP": 500,
      "MP Cost Down": 3
    },
    "gp4": {
      "HP": 500,
      "MP Cost Down": 5
    },
    "gp5": {
      "HP": 800,
      "MP Cost Down": 5
    },
    "gp6": {
      "HP": 800,
      "MP Cost Down": 6
    },
    "gp7": {
      "HP": 1100,
      "MP Cost Down": 6
    },
    "gp8": {
      "HP": 1100,
      "MP Cost Down": 7
    },
    "gp9": {
      "HP": 1400,
      "MP Cost Down": 7
    },
    "gp10": {
      "HP": 1400,
      "MP Cost Down": 8
    },
    "total": {
      "HP": 1400,
      "MP Cost Down": 8
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 184,
      "ATK": 23,
      "Phys Crit": 8,
      "Accuracy": 9
    },
    "g2": {
      "HP": 221,
      "ATK": 28,
      "Phys Crit": 10,
      "Block": 17
    },
    "g3": {
      "HP": 257,
      "ATK": 33,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 294,
      "ATK": 37,
      "Phys Crit": 13,
      "Block": 23
    },
    "g5": {
      "HP": 331,
      "ATK": 42,
      "Phys Crit": 15,
      "MP Charge": 6
    },
    "g6": {
      "HP": 368,
      "ATK": 46,
      "Phys Crit": 17,
      "Accuracy": 18
    },
    "g7": {
      "HP": 405,
      "ATK": 51,
      "Phys Crit": 19,
      "Block": 32
    },
    "g8": {
      "HP": 441,
      "ATK": 56,
      "Phys Crit": 20,
      "Accuracy": 21
    },
    "g9": {
      "HP": 478,
      "ATK": 60,
      "Phys Crit": 22,
      "Block": 38
    },
    "g10": {
      "HP": 515,
      "ATK": 65,
      "Phys Crit": 24,
      "MP Charge": 9
    },
    "total": {
      "HP": 515,
      "ATK": 65,
      "Phys Crit": 24,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 146
    },
    {
      "grade": 2,
      "MP Cost Down": 1
    },
    {
      "grade": 3,
      "HP": 204
    },
    {
      "grade": 4,
      "MP Cost Down": 1
    },
    {
      "grade": 5,
      "HP": 262
    },
    {
      "grade": 6,
      "MP Cost Down": 1
    },
    {
      "grade": 7,
      "HP": 320
    },
    {
      "grade": 8,
      "MP Cost Down": 1
    },
    {
      "grade": 9,
      "HP": 379
    },
    {
      "grade": 10,
      "MP Cost Down": 1
    },
    {
      "grade": 11,
      "HP": 417
    }
  ]
};;;;;;;;
