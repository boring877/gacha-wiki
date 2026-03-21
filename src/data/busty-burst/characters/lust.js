// Character data: lust
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "lust",
  "name": "Lust",
  "displayName": "Lust",
  "baseName": "Lust",
  "title": null,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 380,
  "weaponType": "Pierce",
  "skillTypes": [
    "Disrupt",
    "Debuff"
  ],
  "image": "Lust",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "175cm",
    "bust": "116cm (Q Cup)",
    "waist": "59cm",
    "hips": "89cm"
  },
  "credits": {
    "illustration": {
      "japanese": "かわはぎさかな",
      "romanized": ""
    },
    "voice": {
      "japanese": "ももぞの薫",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2092
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Thorns. All who touch shall suffer devastating pain",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the enemy with the highest MP , inflict 3s , 3s Curse for, 10 Magic Defense-60 DOWN",
      "descriptionLv1": "Deals magic damage to the enemy with the highest MP , inflict 3s , 3s Curse for, 10 Magic Defense-60 DOWN",
      "descriptionLv90": "Deals magic damage to the enemy with the highest MP , inflict 3s , 3s Curse for, 10 Magic Defense-420 DOWN",
      "target": "Highest MP Enemy",
      "castTime": 1.22,
      "damageScaling": "330% ATK",
      "baseDamage": "+250",
      "levelGrowth": "+20",
      "lvl1": "330% + 250",
      "lvl90": "330% + -106",
      "effects": [
        "Silence",
        "Curse",
        "Magic Defense- LvMax"
      ],
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Defense- LvMax",
          "value": -60,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -4.0
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Mist. The one who never returns, lured into the abyss",
      "icon": "skill001/skill0011",
      "description": "8 Action Speed DOWNapply to self8 Block-9 DOWN",
      "descriptionLv1": "8 Action Speed DOWNapply to self8 Block-9 DOWN",
      "descriptionLv90": "8 Action Speed DOWNapply to self8 Block-18 DOWN",
      "target": "All Enemies",
      "castTime": 1.22,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Action Speed - Lv3",
        "Block- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Action Speed - Lv3",
          "value": -14,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Block- Lv3",
          "value": -9,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -0.1
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Night. Glorious radiance that devours all and nurtures all",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the enemy with the highest MP and inflicts Confusion for 2 seconds and Fear Lv 1 for 4 seconds",
      "effect": "1100% + 1000",
      "buffEffects": [
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Fear Ultimate Lv1",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ]
    },
    {
      "rank": 2,
      "name": "Thorns. All who touch shall suffer devastating pain",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the enemy with the highest MP , inflict 3s , 3s Curse for, 10 Magic Defense-60 DOWN",
      "effect": "330% + 250",
      "buffEffects": [
        {
          "name": "Silence",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Magic Defense- LvMax",
          "value": -60,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Mist. The one who never returns, lured into the abyss",
      "icon": "skill001/skill0011",
      "description": "8 Action Speed DOWNapply to self8 Block-9 DOWN",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Action Speed - Lv3",
          "value": -14,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Block- Lv3",
          "value": -9,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Night. Glorious radiance that devours all and nurtures all",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the enemy with the highest MP and inflicts Confusion for 2 seconds and Fear Lv 1 for 4 seconds",
      "effect": "1100% + 1000",
      "buffEffects": [
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Fear Ultimate Lv1",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ]
    },
    {
      "rank": 5,
      "name": "Night. Glorious radiance that devours all and nurtures all",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to the enemy with the highest MP and inflicts Confusion for 3 seconds and Fear Lv 2 for 4 seconds",
      "effect": "1320% + 1300",
      "buffEffects": [
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Fear Ultimate Lv2",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Max HP +, Debuff Resistance +",
      "icon": "skill001/skill1001",
      "effect": "Max HP + (+3444)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Lust",
  "id": 2092,
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Disrupt",
    "Debuff"
  ],
  "baseStats": {
    "HP": 2673,
    "ATK": 233,
    "MATK": 388,
    "DEF": 24,
    "MDEF": 61
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic",
    "loop": "Basic → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.82"
  },
  "slug": "lust"
};

export const stats = {
  "id": "lust",
  "characterId": 2092,
  "name": "Lust",
  "rarity": "SSR",
  "element": "魔",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Disrupt",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 2673,
      "lv90": 13366
    },
    "atk": {
      "base": 233,
      "lv90": 1165
    },
    "matk": {
      "base": 388,
      "lv90": 1943
    },
    "def": {
      "base": 24,
      "lv90": 48
    },
    "mdef": {
      "base": 61,
      "lv90": 122
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
      "base": 47,
      "lv90": 75
    },
    "magicCrit": {
      "base": 78,
      "lv90": 125
    },
    "hpRegen": {
      "base": 133,
      "lv90": 467
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
      "HP": 802,
      "MATK": 117,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 922,
      "MATK": 134,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 1083,
      "MATK": 157,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1203,
      "MATK": 175,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 2272,
      "MATK": 360,
      "DEF": 5,
      "MDEF": 18,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 6282,
      "MATK": 943,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 5,
      "MDEF": 18,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 40
    },
    "gp2": {
      "HP": 300,
      "MATK": 40
    },
    "gp3": {
      "HP": 300,
      "MATK": 120
    },
    "gp4": {
      "HP": 750,
      "MATK": 120
    },
    "gp5": {
      "HP": 750,
      "MATK": 200
    },
    "gp6": {
      "HP": 1200,
      "MATK": 200
    },
    "gp7": {
      "HP": 1200,
      "MATK": 280
    },
    "gp8": {
      "HP": 1650,
      "MATK": 280
    },
    "gp9": {
      "HP": 1650,
      "MATK": 360
    },
    "gp10": {
      "HP": 2100,
      "MATK": 360
    },
    "total": {
      "HP": 2100,
      "MATK": 360
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 281,
      "MATK": 41,
      "MDEF": 3,
      "Magic Crit": 2,
      "Accuracy": 9
    },
    "g2": {
      "HP": 338,
      "MATK": 49,
      "MDEF": 3,
      "Magic Crit": 2,
      "Block": 16
    },
    "g3": {
      "HP": 394,
      "MATK": 57,
      "MDEF": 4,
      "Magic Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 450,
      "MATK": 65,
      "MDEF": 4,
      "Magic Crit": 3,
      "Block": 21
    },
    "g5": {
      "HP": 507,
      "MATK": 74,
      "MDEF": 5,
      "Magic Crit": 3,
      "MP Charge": 5
    },
    "g6": {
      "HP": 563,
      "MATK": 82,
      "MDEF": 6,
      "Magic Crit": 3,
      "Accuracy": 18
    },
    "g7": {
      "HP": 619,
      "MATK": 90,
      "MDEF": 6,
      "Magic Crit": 4,
      "Block": 29
    },
    "g8": {
      "HP": 675,
      "MATK": 98,
      "MDEF": 7,
      "Magic Crit": 4,
      "Accuracy": 21
    },
    "g9": {
      "HP": 732,
      "MATK": 106,
      "MDEF": 7,
      "Magic Crit": 4,
      "Block": 34
    },
    "g10": {
      "HP": 788,
      "MATK": 115,
      "MDEF": 8,
      "Magic Crit": 5,
      "MP Charge": 7
    },
    "total": {
      "HP": 788,
      "MATK": 115,
      "MDEF": 8,
      "Magic Crit": 5,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Charge": 1
    },
    {
      "grade": 2,
      "MATK": 35
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "MATK": 47
    },
    {
      "grade": 5,
      "MP Charge": 2
    },
    {
      "grade": 6,
      "MATK": 58
    },
    {
      "grade": 7,
      "MP Charge": 3
    },
    {
      "grade": 8,
      "MATK": 70
    },
    {
      "grade": 9,
      "MP Charge": 3
    },
    {
      "grade": 10,
      "MATK": 82
    },
    {
      "grade": 11,
      "MP Charge": 3
    }
  ]
};;;;;;;;
