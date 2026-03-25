// Character data: lucie
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "lucie",
  "name": "Lucie",
  "displayName": "Lucie",
  "baseName": "Lucie",
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
  "weaponType": "Slash",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "image": "Lucie",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "161cm",
    "bust": "98cm (J Cup)",
    "waist": "58cm",
    "hips": "85cm"
  },
  "credits": {
    "illustration": {
      "japanese": "オギノ",
      "romanized": ""
    },
    "voice": {
      "japanese": "ひむろゆり",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2073
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Great Whirling Slash",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -23%-50 DOWN for 7 seconds and absorbs 3% of the damage dealt to restore own HP",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -23%-50 DOWN for 7 seconds and absorbs 3% of the damage dealt to restore own HP",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -23%-320 DOWN for 7 seconds and absorbs 3% of the damage dealt to restore own HP",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "90% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+8",
      "lvl1": "90% + 80",
      "lvl90": "90% + -187",
      "effects": [
        "Physical Defense - Lv5"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv5",
          "value": -50,
          "type": "flat",
          "duration": 7,
          "levelGrowth": -3.0
        }
      ],
      "duration": 7
    },
    {
      "slot": 3,
      "name": "O Spirit of Wind, Grant Me Protection",
      "icon": "skill001/skill0019",
      "description": "Applies Action Speed 17%UP to self for 10 seconds and Block 11 UP for 10 seconds",
      "descriptionLv1": "Applies Action Speed 17%UP to self for 10 seconds and Block 11 UP for 10 seconds",
      "descriptionLv90": "Applies Action Speed 17%UP to self for 10 seconds and Block 23 UP for 10 seconds",
      "target": "Self",
      "castTime": 1.58,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Action Speed + Lv4",
        "Block+ Lv4"
      ],
      "buffEffects": [
        {
          "name": "Action Speed + Lv4",
          "value": 17,
          "type": "flat",
          "duration": 10
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
      "name": "Tremble, Sinner. Hear the Final Tune in Your Flesh",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 5 nearest enemies and inflicts Action Speed DOWN(LV 1) for 8 seconds and inflicts Dispel for 3 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
      "effect": "180% + 600",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 2,
      "name": "Tremble, Sinner. Hear the Final Tune in Your Flesh",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 5 nearest enemies and inflicts Action Speed DOWN(LV 2) for 8 seconds and inflicts Dispel for 4 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
      "effect": "200% + 700",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -18,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ]
    },
    {
      "rank": 3,
      "name": "Tremble, Sinner. Hear the Final Tune in Your Flesh",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the 5 nearest enemies and inflicts Action Speed DOWN(LV 3) for 8 seconds and inflicts Dispel for 4 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
      "effect": "220% + 800",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -21,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ]
    },
    {
      "rank": 4,
      "name": "Tremble, Sinner. Hear the Final Tune in Your Flesh",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the 5 nearest enemies and inflicts Action Speed DOWN(LV 4) for 8 seconds and inflicts Dispel for 5 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
      "effect": "240% + 850",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -23,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        }
      ]
    },
    {
      "rank": 5,
      "name": "Tremble, Sinner. Hear the Final Tune in Your Flesh",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the 5 nearest enemies and inflicts Action Speed DOWN(LV 5) for 8 seconds and inflicts Dispel for 5 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
      "effect": "250% + 900",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -25,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Cleanse",
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
      "name": "Max HP +, Debuff Resistance +",
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
      "name": "Action Speed +, Ultimate Damage +",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+10), Ultimate Damage + (+15%)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        },
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Lucie",
  "id": 2073,
  "rarity": "SSR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2554,
    "ATK": 386,
    "MATK": 232,
    "DEF": 35,
    "MDEF": 14
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic → Basic → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "lucie"
};

export const stats = {
  "id": "lucie",
  "characterId": 2073,
  "name": "Lucie",
  "rarity": "SSR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2554,
      "lv90": 13905
    },
    "atk": {
      "base": 386,
      "lv90": 1933
    },
    "matk": {
      "base": 232,
      "lv90": 1160
    },
    "def": {
      "base": 35,
      "lv90": 70
    },
    "mdef": {
      "base": 14,
      "lv90": 28
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 45,
      "lv90": 125
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
      "base": 127,
      "lv90": 481
    },
    "mpRegen": {
      "base": 59,
      "lv90": 228
    },
    "healPwr": {
      "base": 82,
      "lv90": 206
    },
    "mpCharge": {
      "base": 62,
      "lv90": 62
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
      "HP": 851,
      "ATK": 116,
      "Block": 12,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 979,
      "ATK": 133,
      "Accuracy": 13,
      "Block": 14
    },
    "lb3": {
      "HP": 1149,
      "ATK": 157,
      "Block": 16,
      "MP Charge": 8
    },
    "lb4": {
      "HP": 1277,
      "ATK": 174,
      "Accuracy": 17,
      "Block": 18
    },
    "lb5": {
      "HP": 2596,
      "ATK": 329,
      "DEF": 10,
      "MDEF": 3,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 6852,
      "ATK": 909,
      "Block": 60,
      "MP Charge": 15,
      "Accuracy": 30,
      "DEF": 10,
      "MDEF": 3,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 300
    },
    "gp2": {
      "HP": 300,
      "ATK": 40
    },
    "gp3": {
      "HP": 750,
      "ATK": 40
    },
    "gp4": {
      "HP": 750,
      "ATK": 120
    },
    "gp5": {
      "HP": 1200,
      "ATK": 200
    },
    "gp6": {
      "HP": 1200,
      "ATK": 200
    },
    "gp7": {
      "HP": 1650,
      "ATK": 280
    },
    "gp8": {
      "HP": 1650,
      "ATK": 280
    },
    "gp9": {
      "HP": 2100,
      "ATK": 360
    },
    "gp10": {
      "HP": 2100,
      "ATK": 360
    },
    "total": {
      "HP": 2100,
      "ATK": 360
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 299,
      "ATK": 41,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 358,
      "ATK": 49,
      "Phys Crit": 1,
      "Block": 13
    },
    "g3": {
      "HP": 418,
      "ATK": 57,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 478,
      "ATK": 65,
      "Phys Crit": 2,
      "Block": 17
    },
    "g5": {
      "HP": 538,
      "ATK": 73,
      "Phys Crit": 2,
      "MP Charge": 5
    },
    "g6": {
      "HP": 597,
      "ATK": 81,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 657,
      "ATK": 90,
      "Phys Crit": 2,
      "Block": 23
    },
    "g8": {
      "HP": 717,
      "ATK": 98,
      "Phys Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 777,
      "ATK": 106,
      "Phys Crit": 3,
      "Block": 27
    },
    "g10": {
      "HP": 836,
      "ATK": 114,
      "Phys Crit": 3,
      "MP Charge": 8
    },
    "total": {
      "HP": 836,
      "ATK": 114,
      "Phys Crit": 3,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 236
    },
    {
      "grade": 2,
      "Phys Crit": 15
    },
    {
      "grade": 3,
      "HP": 331
    },
    {
      "grade": 4,
      "Phys Crit": 20
    },
    {
      "grade": 5,
      "HP": 426
    },
    {
      "grade": 6,
      "Phys Crit": 25
    },
    {
      "grade": 7,
      "HP": 520
    },
    {
      "grade": 8,
      "Phys Crit": 30
    },
    {
      "grade": 9,
      "HP": 615
    },
    {
      "grade": 10,
      "Phys Crit": 35
    },
    {
      "grade": 11,
      "HP": 646
    }
  ]
};;;;;;;;
