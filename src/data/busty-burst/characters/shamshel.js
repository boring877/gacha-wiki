// Character data: shamshel
// Auto-generated from game data

export const info = {
  "slug": "shamshel",
  "name": "Shamshel",
  "displayName": "Shamshel",
  "baseName": "Shamshel",
  "title": null,
  "rarity": "R",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Fast",
  "range": 360,
  "weaponType": "Ranged",
  "skillTypes": [
    "Disrupt"
  ],
  "image": "Shamshel",
  "introduction": "Middle RowMagicalAttacker",
  "profile": {
    "height": "154cm",
    "bust": "100cm (K Cup)",
    "waist": "55cm",
    "hips": "80cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "金松由華",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2001
};














































































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Annoying!",
      "icon": "skill001/skill0005",
      "description": "Deals magic damage to the nearest enemy",
      "descriptionLv1": "Deals magic damage to the nearest enemy",
      "descriptionLv90": "Deals magic damage to the nearest enemy",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "235% ATK",
      "baseDamage": "+70",
      "levelGrowth": "+20",
      "lvl1": "235% + 70",
      "lvl90": "235% + 1850",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Mm-hmm, I’m the First Queen♪",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the nearest enemy and inflicts Charm for 2 seconds",
      "descriptionLv1": "Deals magic damage to the nearest enemy and inflicts Charm for 2 seconds",
      "descriptionLv90": "Deals magic damage to the nearest enemy and inflicts Charm for 2 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "188% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+16",
      "lvl1": "188% + 100",
      "lvl90": null,
      "effects": [
        "Charm"
      ],
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ],
      "duration": 2
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "I’ll eat you up!",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
      "effect": "300% + 221",
      "buffEffects": []
    },
    {
      "rank": 2,
      "name": "I’ll eat you up!",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
      "effect": "360% + 266",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "I’ll eat you up!",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
      "effect": "405% + 301",
      "buffEffects": []
    },
    {
      "rank": 4,
      "name": "I’ll eat you up!",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
      "effect": "434% + 349",
      "buffEffects": []
    },
    {
      "rank": 5,
      "name": "I’ll eat you up!",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to the 3 nearest enemies and absorbs 6% of the damage dealt to restore own HP",
      "effect": "465% + 367",
      "buffEffects": []
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Charm Resistance LvMax",
      "icon": "skill001/skill1003",
      "description": "Gain Charm Resistance UP",
      "effect": "Charm Resistance LvMax (+1%)",
      "effectValues": [
        {
          "name": "Charm Resistance LvMax",
          "value": 1,
          "type": "percent",
          "gameText": "Charm Resistance UP"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Magic Attack +",
      "icon": "skill001/skill1001",
      "description": "Gain Magic Attack UP (Small)",
      "effect": "Magic Attack + (+130)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 130,
          "type": "flat",
          "gameText": "Magic Attack UP (Small)"
        }
      ]
    }
  ],
  "name": "Shamshel",
  "id": 2001,
  "rarity": "R",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1491,
    "ATK": 156,
    "MATK": 260,
    "DEF": 46,
    "MDEF": 117
  },
  "skillRotation": {
    "opening": "Skill3 → Basic → Basic → Basic → Skill2",
    "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "100% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.69"
  },
  "slug": "shamshel"
};

export const stats = {
  "id": "shamshel",
  "characterId": 2001,
  "name": "Shamshel",
  "rarity": "R",
  "element": "魔",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1491,
      "lv90": 7456
    },
    "atk": {
      "base": 156,
      "lv90": 780
    },
    "matk": {
      "base": 260,
      "lv90": 1300
    },
    "def": {
      "base": 46,
      "lv90": 92
    },
    "mdef": {
      "base": 117,
      "lv90": 234
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
      "base": 109,
      "lv90": 174
    },
    "magicCrit": {
      "base": 182,
      "lv90": 291
    },
    "hpRegen": {
      "base": 74,
      "lv90": 260
    },
    "mpRegen": {
      "base": 50,
      "lv90": 200
    },
    "healPwr": {
      "base": 65,
      "lv90": 162
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
      "HP": 447,
      "MATK": 78,
      "Block": 17,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 515,
      "MATK": 90,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 604,
      "MATK": 105,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 671,
      "MATK": 117,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1089,
      "MATK": 215,
      "DEF": 8,
      "MDEF": 30,
      "Heal Pwr": 13
    },
    "total": {
      "HP": 3326,
      "MATK": 605,
      "Block": 83,
      "MP Charge": 13,
      "Accuracy": 30,
      "DEF": 8,
      "MDEF": 30,
      "Heal Pwr": 13
    }
  },
  "gpAbility": {
    "gp1": {
      "HP Drain": 1
    },
    "gp2": {
      "MATK": 20,
      "HP Drain": 1
    },
    "gp3": {
      "MATK": 20,
      "HP Drain": 3
    },
    "gp4": {
      "MATK": 60,
      "HP Drain": 3
    },
    "gp5": {
      "MATK": 60,
      "HP Drain": 5
    },
    "gp6": {
      "MATK": 100,
      "HP Drain": 5
    },
    "gp7": {
      "MATK": 100,
      "HP Drain": 7
    },
    "gp8": {
      "MATK": 140,
      "HP Drain": 7
    },
    "gp9": {
      "MATK": 140,
      "HP Drain": 9
    },
    "gp10": {
      "MATK": 180,
      "HP Drain": 9
    },
    "total": {
      "MATK": 180,
      "HP Drain": 9
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 157,
      "MATK": 27,
      "MDEF": 5,
      "Magic Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 188,
      "MATK": 33,
      "MDEF": 6,
      "Magic Crit": 5,
      "Block": 17
    },
    "g3": {
      "HP": 220,
      "MATK": 38,
      "MDEF": 7,
      "Magic Crit": 5,
      "Accuracy": 12
    },
    "g4": {
      "HP": 251,
      "MATK": 44,
      "MDEF": 8,
      "Magic Crit": 6,
      "Block": 23
    },
    "g5": {
      "HP": 283,
      "MATK": 49,
      "MDEF": 10,
      "Magic Crit": 7,
      "MP Charge": 5
    },
    "g6": {
      "HP": 314,
      "MATK": 55,
      "MDEF": 11,
      "Magic Crit": 8,
      "Accuracy": 18
    },
    "g7": {
      "HP": 345,
      "MATK": 60,
      "MDEF": 12,
      "Magic Crit": 8,
      "Block": 32
    },
    "g8": {
      "HP": 377,
      "MATK": 66,
      "MDEF": 13,
      "Magic Crit": 9,
      "Accuracy": 21
    },
    "g9": {
      "HP": 408,
      "MATK": 71,
      "MDEF": 14,
      "Magic Crit": 10,
      "Block": 38
    },
    "g10": {
      "HP": 440,
      "MATK": 77,
      "MDEF": 15,
      "Magic Crit": 11,
      "MP Charge": 8
    },
    "total": {
      "HP": 440,
      "MATK": 77,
      "MDEF": 15,
      "Magic Crit": 11,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "MATK": 23
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "MATK": 31
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "MATK": 39
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "MATK": 47
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "MATK": 55
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;
