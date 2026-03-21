// Character data: super-bust-dirndl-adrienne
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "super-bust-dirndl-adrienne",
  "name": "Super-Bust Dirndl: Adrienne",
  "displayName": "Super-Bust Dirndl: Adrienne",
  "baseName": "Adrienne",
  "title": "Super-Bust Dirndl",
  "rarity": "SR",
  "element": "Wind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 380,
  "weaponType": "Throw",
  "skillTypes": [
    "Debuff",
    "MP Recovery"
  ],
  "image": "Adrienne",
  "introduction": "Middle Row、Physical、Attacker",
  "profile": {
    "height": "157cm",
    "bust": "108cm (M Cup)",
    "waist": "57cm",
    "hips": "84cm"
  },
  "credits": {
    "illustration": {
      "japanese": "HIMA",
      "romanized": ""
    },
    "voice": {
      "japanese": "藤宮きせき",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2179
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "I got hit...!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -40 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -40 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -220 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.3,
      "damageScaling": "320% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+20",
      "lvl1": "320% + 200",
      "lvl90": "320% + 22",
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
      "name": "Smells nice ",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack +30 UP to self for 10 seconds and MP Regeneration 30 for 4 seconds",
      "descriptionLv1": "Applies Physical Attack +30 UP to self for 10 seconds and MP Regeneration 30 for 4 seconds",
      "descriptionLv90": "Applies Physical Attack +480 UP to self for 10 seconds and MP Regeneration 30 for 4 seconds",
      "target": "Self",
      "castTime": 1.35,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack + Lv3",
        "MP Regeneration + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv3",
          "value": 30,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 5.0
        },
        {
          "name": "MP Regeneration + Lv4",
          "value": 30,
          "type": "percent",
          "duration": 4
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Autunno・Allegro",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy",
      "effect": "1100% + 500",
      "buffEffects": []
    },
    {
      "rank": 2,
      "name": "I got hit...!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -40 DOWN for 6 seconds",
      "effect": "320% + 200",
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
      "name": "Smells nice ",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Attack +30 UP to self for 10 seconds and MP Regeneration 30 for 4 seconds",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Lv3",
          "value": 30,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "MP Regeneration + Lv4",
          "value": 30,
          "type": "percent",
          "duration": 4
        }
      ]
    },
    {
      "rank": 4,
      "name": "Autunno・Allegro",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy",
      "effect": "1100% + 500",
      "buffEffects": []
    },
    {
      "rank": 5,
      "name": "Autunno・Allegro",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy",
      "effect": "1320% + 600",
      "buffEffects": []
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+10%), Physical Attack + (+130)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 10,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 130,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Super-Bust Dirndl: Adrienne",
  "id": 2179,
  "rarity": "SR",
  "element": "Wind",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 1661,
    "ATK": 273,
    "MATK": 163,
    "DEF": 97,
    "MDEF": 80
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.85"
  },
  "slug": "super-bust-dirndl-adrienne"
};

export const stats = {
  "id": "super-bust-dirndl-adrienne",
  "characterId": 2179,
  "name": "【Super-Bust Dirndl】Adrienne",
  "rarity": "SR",
  "element": "風",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "MP Recovery"
  ],
  "baseStats": {
    "hp": {
      "base": 1661,
      "lv90": 8305
    },
    "atk": {
      "base": 273,
      "lv90": 1365
    },
    "matk": {
      "base": 163,
      "lv90": 818
    },
    "def": {
      "base": 97,
      "lv90": 194
    },
    "mdef": {
      "base": 80,
      "lv90": 160
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
      "base": 83,
      "lv90": 290
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
      "base": 58,
      "lv90": 58
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
      "HP": 498,
      "ATK": 82,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 573,
      "ATK": 94,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 673,
      "ATK": 111,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 747,
      "ATK": 123,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1218,
      "ATK": 215,
      "DEF": 26,
      "MDEF": 15,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3709,
      "ATK": 625,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 26,
      "MDEF": 15,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 30
    },
    "gp2": {
      "ATK": 30,
      "Accuracy": 2
    },
    "gp3": {
      "ATK": 90,
      "Accuracy": 2
    },
    "gp4": {
      "ATK": 90,
      "Accuracy": 5
    },
    "gp5": {
      "ATK": 130,
      "Accuracy": 5
    },
    "gp6": {
      "ATK": 130,
      "Accuracy": 7
    },
    "gp7": {
      "ATK": 170,
      "Accuracy": 7
    },
    "gp8": {
      "ATK": 170,
      "Accuracy": 9
    },
    "gp9": {
      "ATK": 210,
      "Accuracy": 9
    },
    "gp10": {
      "ATK": 210,
      "Accuracy": 11
    },
    "total": {
      "ATK": 210,
      "Accuracy": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 175,
      "ATK": 29,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 210,
      "ATK": 34,
      "Phys Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 245,
      "ATK": 40,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 280,
      "ATK": 46,
      "Phys Crit": 6,
      "Block": 21
    },
    "g5": {
      "HP": 315,
      "ATK": 52,
      "Phys Crit": 7,
      "MP Charge": 5
    },
    "g6": {
      "HP": 350,
      "ATK": 57,
      "Phys Crit": 8,
      "Accuracy": 18
    },
    "g7": {
      "HP": 385,
      "ATK": 63,
      "Phys Crit": 9,
      "Block": 29
    },
    "g8": {
      "HP": 420,
      "ATK": 69,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 455,
      "ATK": 75,
      "Phys Crit": 10,
      "Block": 34
    },
    "g10": {
      "HP": 490,
      "ATK": 80,
      "Phys Crit": 11,
      "MP Charge": 8
    },
    "total": {
      "HP": 490,
      "ATK": 80,
      "Phys Crit": 11,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 23
    },
    {
      "grade": 2,
      "MP Cost Down": 1
    },
    {
      "grade": 3,
      "ATK": 32
    },
    {
      "grade": 4,
      "MP Cost Down": 1
    },
    {
      "grade": 5,
      "ATK": 41
    },
    {
      "grade": 6,
      "MP Cost Down": 1
    },
    {
      "grade": 7,
      "ATK": 50
    },
    {
      "grade": 8,
      "MP Cost Down": 1
    },
    {
      "grade": 9,
      "ATK": 59
    },
    {
      "grade": 10,
      "MP Cost Down": 1
    },
    {
      "grade": 11,
      "ATK": 65
    }
  ]
};;;;;;;;
