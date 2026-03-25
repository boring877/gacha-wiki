// Character data: rui
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "rui",
  "name": "Rui",
  "displayName": "Rui",
  "baseName": "Rui",
  "title": null,
  "rarity": "SR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 240,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff"
  ],
  "image": "Rui",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "167cm",
    "bust": "99cm (I Cup)",
    "waist": "60cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "brick",
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
  "characterId": 2074
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Circular Slash",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -21%-40 DOWN for 4 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -21%-40 DOWN for 4 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -21%-220 DOWN for 4 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "350% ATK",
      "baseDamage": "+160",
      "levelGrowth": "+20",
      "lvl1": "350% + 160",
      "lvl90": "350% + -18",
      "effects": [
        "Physical Defense - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 4,
          "levelGrowth": -2.0
        }
      ],
      "duration": 4
    },
    {
      "slot": 3,
      "name": "Inner Qi Technique",
      "icon": "skill001/skill0019",
      "description": "Applies Block 9 UP to self for 8 seconds and MP Regeneration 40 for 4 seconds",
      "descriptionLv1": "Applies Block 9 UP to self for 8 seconds and MP Regeneration 40 for 4 seconds",
      "descriptionLv90": "Applies Block 18 UP to self for 8 seconds and MP Regeneration 40 for 4 seconds",
      "target": "Self",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Block+ Lv3",
        "MP Regeneration + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 0.1
        },
        {
          "name": "MP Regeneration + Lv5",
          "value": 40,
          "type": "percent",
          "duration": 4
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Rayo Killing Array",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy",
      "effect": "1310% + 600",
      "buffEffects": []
    },
    {
      "rank": 2,
      "name": "Rayo Killing Array",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy",
      "effect": "1460% + 700",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "Rayo Killing Array",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy",
      "effect": "1540% + 800",
      "buffEffects": []
    },
    {
      "rank": 4,
      "name": "Rayo Killing Array",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy",
      "effect": "1610% + 850",
      "buffEffects": []
    },
    {
      "rank": 5,
      "name": "Rayo Killing Array",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy",
      "effect": "1660% + 900",
      "buffEffects": []
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+10), Physical Attack + (+130)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        },
        {
          "name": "Physical Attack +",
          "value": 130,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+10%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 10,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Rui",
  "id": 2074,
  "rarity": "SR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1411,
    "ATK": 238,
    "MATK": 143,
    "DEF": 208,
    "MDEF": 83
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic → Basic → Basic",
    "loop": "Skill2 → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "rui"
};

export const stats = {
  "id": "rui",
  "characterId": 2074,
  "name": "Rui",
  "rarity": "SR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1411,
      "lv90": 7058
    },
    "atk": {
      "base": 238,
      "lv90": 1193
    },
    "matk": {
      "base": 143,
      "lv90": 716
    },
    "def": {
      "base": 208,
      "lv90": 416
    },
    "mdef": {
      "base": 83,
      "lv90": 166
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
      "base": 191,
      "lv90": 305
    },
    "magicCrit": {
      "base": 114,
      "lv90": 182
    },
    "hpRegen": {
      "base": 70,
      "lv90": 246
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
      "base": 76,
      "lv90": 76
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
      "HP": 424,
      "ATK": 72,
      "Block": 15,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 487,
      "ATK": 82,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 572,
      "ATK": 97,
      "Block": 20,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 635,
      "ATK": 107,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1118,
      "ATK": 181,
      "DEF": 54,
      "MDEF": 15,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3236,
      "ATK": 539,
      "Block": 75,
      "MP Charge": 16,
      "Accuracy": 30,
      "DEF": 54,
      "MDEF": 15,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Cost Down": 2
    },
    "gp2": {
      "ATK": 30,
      "MP Cost Down": 2
    },
    "gp3": {
      "ATK": 30,
      "MP Cost Down": 3
    },
    "gp4": {
      "ATK": 90,
      "MP Cost Down": 3
    },
    "gp5": {
      "ATK": 90,
      "MP Cost Down": 4
    },
    "gp6": {
      "ATK": 150,
      "MP Cost Down": 4
    },
    "gp7": {
      "ATK": 150,
      "MP Cost Down": 5
    },
    "gp8": {
      "ATK": 210,
      "MP Cost Down": 5
    },
    "gp9": {
      "ATK": 210,
      "MP Cost Down": 6
    },
    "gp10": {
      "ATK": 270,
      "MP Cost Down": 6
    },
    "total": {
      "ATK": 270,
      "MP Cost Down": 6
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 149,
      "ATK": 25,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 178,
      "ATK": 30,
      "Phys Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 208,
      "ATK": 35,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 238,
      "ATK": 40,
      "Phys Crit": 6,
      "Block": 21
    },
    "g5": {
      "HP": 267,
      "ATK": 45,
      "Phys Crit": 7,
      "MP Charge": 6
    },
    "g6": {
      "HP": 297,
      "ATK": 50,
      "Phys Crit": 8,
      "Accuracy": 18
    },
    "g7": {
      "HP": 327,
      "ATK": 55,
      "Phys Crit": 9,
      "Block": 29
    },
    "g8": {
      "HP": 357,
      "ATK": 60,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 386,
      "ATK": 65,
      "Phys Crit": 10,
      "Block": 34
    },
    "g10": {
      "HP": 416,
      "ATK": 70,
      "Phys Crit": 11,
      "MP Charge": 10
    },
    "total": {
      "HP": 416,
      "ATK": 70,
      "Phys Crit": 11,
      "MP Charge": 10
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 118
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "HP": 165
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "HP": 212
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "HP": 259
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "HP": 306
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "HP": 321
    }
  ]
};;;;;;;;
