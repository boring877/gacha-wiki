// Character data: gladys
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "gladys",
  "name": "Gladys",
  "displayName": "Gladys",
  "baseName": "Gladys",
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
  "image": "Gladys",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "166cm",
    "bust": "95cm (I Cup)",
    "waist": "60cm",
    "hips": "90cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "咲ゆたか",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2005
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Armor-Breaker Slash",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the enemy with the lowest HP and applies Physical Attack 18%+35 UP to self for 6 seconds",
      "descriptionLv1": "Deals physical damage to the enemy with the lowest HP and applies Physical Attack 18%+35 UP to self for 6 seconds",
      "descriptionLv90": "Deals physical damage to the enemy with the lowest HP and applies Physical Attack 18%+665 UP to self for 6 seconds",
      "target": "Lowest HP Enemy",
      "castTime": 1.08,
      "damageScaling": "276% ATK",
      "baseDamage": "+105",
      "levelGrowth": "+20",
      "lvl1": "276% + 105",
      "lvl90": "276% + 728",
      "effects": [
        "Physical Attack + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 6,
          "levelGrowth": 7.0
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Charging Slash",
      "icon": "skill001/skill0009",
      "description": "Deals physical damage to the enemy with the lowest HP and inflicts Physical Defense -21%-40 DOWN for 10 seconds",
      "descriptionLv1": "Deals physical damage to the enemy with the lowest HP and inflicts Physical Defense -21%-40 DOWN for 10 seconds",
      "descriptionLv90": "Deals physical damage to the enemy with the lowest HP and inflicts Physical Defense -21%-220 DOWN for 10 seconds",
      "target": "Lowest HP Enemy",
      "castTime": 1.08,
      "damageScaling": "220% ATK",
      "baseDamage": "+83",
      "levelGrowth": "+20",
      "lvl1": "220% + 83",
      "lvl90": "220% + -95",
      "effects": [
        "Physical Defense - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -2.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Valkenheim-Style Ultimate: Samidare Thrust",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the enemy with the lowest HP and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1060% + 820",
      "buffEffects": []
    },
    {
      "rank": 2,
      "name": "Valkenheim-Style Ultimate: Samidare Thrust",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the enemy with the lowest HP and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1270% + 934",
      "buffEffects": []
    },
    {
      "rank": 3,
      "name": "Valkenheim-Style Ultimate: Samidare Thrust",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the enemy with the lowest HP and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1430% + 1026",
      "buffEffects": []
    },
    {
      "rank": 4,
      "name": "Valkenheim-Style Ultimate: Samidare Thrust",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the enemy with the lowest HP and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1537% + 1187",
      "buffEffects": []
    },
    {
      "rank": 5,
      "name": "Valkenheim-Style Ultimate: Samidare Thrust",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the enemy with the lowest HP and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1643% + 1267",
      "buffEffects": []
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +",
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
      "name": "Physical Attack +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), Physical Critical Damage+ (+176%)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 176,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Gladys",
  "id": 2005,
  "rarity": "SR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "HP": 1566,
    "ATK": 274,
    "MATK": 164,
    "DEF": 126,
    "MDEF": 50
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "gladys"
};

export const stats = {
  "id": "gladys",
  "characterId": 2005,
  "name": "Gladys",
  "rarity": "SR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1566,
      "lv90": 7830
    },
    "atk": {
      "base": 274,
      "lv90": 1373
    },
    "matk": {
      "base": 164,
      "lv90": 823
    },
    "def": {
      "base": 126,
      "lv90": 252
    },
    "mdef": {
      "base": 50,
      "lv90": 100
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
      "base": 37,
      "lv90": 59
    },
    "magicCrit": {
      "base": 22,
      "lv90": 35
    },
    "hpRegen": {
      "base": 78,
      "lv90": 273
    },
    "mpRegen": {
      "base": 59,
      "lv90": 237
    },
    "healPwr": {
      "base": 82,
      "lv90": 206
    },
    "mpCharge": {
      "base": 72,
      "lv90": 72
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
      "HP": 470,
      "ATK": 82,
      "Block": 17,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 540,
      "ATK": 95,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 634,
      "ATK": 111,
      "Block": 22,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 705,
      "ATK": 124,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1237,
      "ATK": 217,
      "DEF": 34,
      "MDEF": 9,
      "Heal Pwr": 22
    },
    "total": {
      "HP": 3586,
      "ATK": 629,
      "Block": 83,
      "MP Charge": 16,
      "Accuracy": 30,
      "DEF": 34,
      "MDEF": 9,
      "Heal Pwr": 22
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 200
    },
    "gp2": {
      "HP": 200,
      "ATK": 30
    },
    "gp3": {
      "HP": 500,
      "ATK": 30
    },
    "gp4": {
      "HP": 500,
      "ATK": 90
    },
    "gp5": {
      "HP": 800,
      "ATK": 90
    },
    "gp6": {
      "HP": 800,
      "ATK": 130
    },
    "gp7": {
      "HP": 1100,
      "ATK": 130
    },
    "gp8": {
      "HP": 1100,
      "ATK": 170
    },
    "gp9": {
      "HP": 1400,
      "ATK": 170
    },
    "gp10": {
      "HP": 1400,
      "ATK": 210
    },
    "total": {
      "HP": 1400,
      "ATK": 210
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 165,
      "ATK": 29,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 198,
      "ATK": 35,
      "Phys Crit": 1,
      "Block": 17
    },
    "g3": {
      "HP": 231,
      "ATK": 40,
      "Phys Crit": 1,
      "Accuracy": 12
    },
    "g4": {
      "HP": 264,
      "ATK": 46,
      "Phys Crit": 1,
      "Block": 23
    },
    "g5": {
      "HP": 297,
      "ATK": 52,
      "Phys Crit": 1,
      "MP Charge": 6
    },
    "g6": {
      "HP": 330,
      "ATK": 58,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 363,
      "ATK": 64,
      "Phys Crit": 2,
      "Block": 32
    },
    "g8": {
      "HP": 396,
      "ATK": 69,
      "Phys Crit": 2,
      "Accuracy": 21
    },
    "g9": {
      "HP": 429,
      "ATK": 75,
      "Phys Crit": 2,
      "Block": 38
    },
    "g10": {
      "HP": 462,
      "ATK": 81,
      "Phys Crit": 2,
      "MP Charge": 9
    },
    "total": {
      "HP": 462,
      "ATK": 81,
      "Phys Crit": 2,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 23
    },
    {
      "grade": 2,
      "Phys Crit": 1
    },
    {
      "grade": 3,
      "ATK": 32
    },
    {
      "grade": 4,
      "Phys Crit": 2
    },
    {
      "grade": 5,
      "ATK": 41
    },
    {
      "grade": 6,
      "Phys Crit": 2
    },
    {
      "grade": 7,
      "ATK": 50
    },
    {
      "grade": 8,
      "Phys Crit": 3
    },
    {
      "grade": 9,
      "ATK": 60
    },
    {
      "grade": 10,
      "Phys Crit": 3
    },
    {
      "grade": 11,
      "ATK": 70
    }
  ]
};;;;;;;;
