// Character data: lucrezia
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "lucrezia",
  "name": "Lucrezia",
  "displayName": "Lucrezia",
  "baseName": "Lucrezia",
  "title": null,
  "rarity": "R",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 240,
  "weaponType": "Strike",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Lucrezia",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "160cm",
    "bust": "93cm (J Cup)",
    "waist": "55cm",
    "hips": "93cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": ""
    },
    "voice": {
      "japanese": "烏丸そら",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2032
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Hypnotic Embrace",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -40 DOWN for 15 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -40 DOWN for 15 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -220 DOWN for 15 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "210% ATK",
      "baseDamage": "+80",
      "levelGrowth": "+16",
      "lvl1": "210% + 80",
      "lvl90": "210% + -98",
      "effects": [
        "Physical Defense - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 15,
          "levelGrowth": -2.0
        }
      ],
      "duration": 15
    },
    {
      "slot": 3,
      "name": "Trance Embrace",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and absorbs 6% of the damage dealt to restore own HP and inflicts Charm for 3 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and absorbs 6% of the damage dealt to restore own HP and inflicts Charm for 3 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and absorbs 6% of the damage dealt to restore own HP and inflicts Charm for 3 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "170% ATK",
      "baseDamage": "+60",
      "levelGrowth": "+12",
      "lvl1": "170% + 60",
      "lvl90": null,
      "effects": [
        "Charm"
      ],
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ],
      "duration": 3
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Divine Enchanting Embrace",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Paralysis for 6 seconds",
      "effect": "800% + 685",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 2,
      "name": "Hypnotic Embrace",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -40 DOWN for 15 seconds",
      "effect": "210% + 80",
      "buffEffects": [
        {
          "name": "Physical Defense - Lv4",
          "value": -40,
          "type": "flat",
          "duration": 15
        }
      ]
    },
    {
      "rank": 3,
      "name": "Trance Embrace",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and absorbs 6% of the damage dealt to restore own HP and inflicts Charm for 3 seconds",
      "effect": "170% + 60",
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 4,
      "name": "Divine Enchanting Embrace",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Paralysis for 6 seconds",
      "effect": "800% + 685",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    },
    {
      "rank": 5,
      "name": "Divine Enchanting Embrace",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Paralysis for 6 seconds",
      "effect": "960% + 922",
      "buffEffects": [
        {
          "name": "Paralysis",
          "value": 0,
          "type": "unknown",
          "duration": 6
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +",
      "icon": "skill001/skill1002",
      "effect": "Physical Defense + (+70)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 70,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Block+",
      "icon": "skill001/skill1002",
      "effect": "Block+ (+10)",
      "effectValues": [
        {
          "name": "Block+",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Lucrezia",
  "id": 2032,
  "rarity": "R",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1964,
    "ATK": 279,
    "MATK": 167,
    "DEF": 56,
    "MDEF": 22
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Basic → Skill3 → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "100% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "lucrezia"
};

export const stats = {
  "id": "lucrezia",
  "characterId": 2032,
  "name": "Lucrezia",
  "rarity": "R",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1964,
      "lv90": 9822
    },
    "atk": {
      "base": 279,
      "lv90": 1397
    },
    "matk": {
      "base": 167,
      "lv90": 838
    },
    "def": {
      "base": 56,
      "lv90": 112
    },
    "mdef": {
      "base": 22,
      "lv90": 44
    },
    "accuracy": {
      "base": 60,
      "lv90": 99
    },
    "block": {
      "base": 45,
      "lv90": 135
    },
    "physCrit": {
      "base": 100,
      "lv90": 160
    },
    "magicCrit": {
      "base": 60,
      "lv90": 96
    },
    "hpRegen": {
      "base": 98,
      "lv90": 343
    },
    "mpRegen": {
      "base": 50,
      "lv90": 200
    },
    "healPwr": {
      "base": 100,
      "lv90": 250
    },
    "mpCharge": {
      "base": 56,
      "lv90": 56
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
      "HP": 589,
      "ATK": 84,
      "Block": 14,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 678,
      "ATK": 96,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 796,
      "ATK": 113,
      "Block": 18,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 884,
      "ATK": 126,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1434,
      "ATK": 204,
      "DEF": 15,
      "MDEF": 4,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4381,
      "ATK": 623,
      "Block": 68,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 15,
      "MDEF": 4,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "MP Charge": 1
    },
    "gp2": {
      "ATK": 20,
      "MP Charge": 1
    },
    "gp3": {
      "ATK": 20,
      "MP Charge": 3
    },
    "gp4": {
      "ATK": 60,
      "MP Charge": 3
    },
    "gp5": {
      "ATK": 60,
      "MP Charge": 5
    },
    "gp6": {
      "ATK": 100,
      "MP Charge": 5
    },
    "gp7": {
      "ATK": 100,
      "MP Charge": 7
    },
    "gp8": {
      "ATK": 140,
      "MP Charge": 7
    },
    "gp9": {
      "ATK": 140,
      "MP Charge": 9
    },
    "gp10": {
      "ATK": 180,
      "MP Charge": 9
    },
    "total": {
      "ATK": 180,
      "MP Charge": 9
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 207,
      "ATK": 29,
      "Phys Crit": 2,
      "Accuracy": 9
    },
    "g2": {
      "HP": 248,
      "ATK": 35,
      "Phys Crit": 3,
      "Block": 14
    },
    "g3": {
      "HP": 290,
      "ATK": 41,
      "Phys Crit": 3,
      "Accuracy": 12
    },
    "g4": {
      "HP": 331,
      "ATK": 47,
      "Phys Crit": 3,
      "Block": 19
    },
    "g5": {
      "HP": 372,
      "ATK": 53,
      "Phys Crit": 4,
      "MP Charge": 5
    },
    "g6": {
      "HP": 414,
      "ATK": 59,
      "Phys Crit": 4,
      "Accuracy": 18
    },
    "g7": {
      "HP": 455,
      "ATK": 65,
      "Phys Crit": 5,
      "Block": 26
    },
    "g8": {
      "HP": 496,
      "ATK": 71,
      "Phys Crit": 5,
      "Accuracy": 21
    },
    "g9": {
      "HP": 538,
      "ATK": 77,
      "Phys Crit": 5,
      "Block": 31
    },
    "g10": {
      "HP": 579,
      "ATK": 82,
      "Phys Crit": 6,
      "MP Charge": 7
    },
    "total": {
      "HP": 579,
      "ATK": 82,
      "Phys Crit": 6,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP Drain": 1
    },
    {
      "grade": 2,
      "Phys Crit": 4
    },
    {
      "grade": 3,
      "HP Drain": 1
    },
    {
      "grade": 4,
      "Phys Crit": 5
    },
    {
      "grade": 5,
      "HP Drain": 1
    },
    {
      "grade": 6,
      "Phys Crit": 6
    },
    {
      "grade": 7,
      "HP Drain": 1
    },
    {
      "grade": 8,
      "Phys Crit": 7
    },
    {
      "grade": 9,
      "HP Drain": 1
    },
    {
      "grade": 10,
      "Phys Crit": 8
    },
    {
      "grade": 11,
      "HP Drain": 1
    }
  ]
};;;;;;;;
