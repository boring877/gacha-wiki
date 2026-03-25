// Character data: slightly-mischievous-devil-luca
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "slightly-mischievous-devil-luca",
  "name": "Slightly Mischievous Devil: Luca",
  "displayName": "Slightly Mischievous Devil: Luca",
  "baseName": "Luca",
  "title": "Slightly Mischievous Devil",
  "rarity": "SR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 240,
  "weaponType": "Pierce",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Luca",
  "introduction": "Front Row, Physical, Attacker",
  "profile": {
    "height": "156cm",
    "bust": "94cm (H Cup)",
    "waist": "66cm",
    "hips": "84cm"
  },
  "credits": {
    "illustration": {
      "japanese": "ねぶそく",
      "romanized": ""
    },
    "voice": {
      "japanese": "天知遥",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "event",
    "source": "Villain Halloween"
  },
  "characterId": 2083
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "I'll just prick a little, okay?",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the farthest enemy",
      "descriptionLv1": "Deals physical damage to the farthest enemy",
      "descriptionLv90": "Deals physical damage to the farthest enemy",
      "target": "Back Enemy",
      "castTime": 1.38,
      "damageScaling": "280% ATK",
      "baseDamage": "+180",
      "levelGrowth": "+25",
      "lvl1": "280% + 180",
      "lvl90": "280% + 2405",
      "effects": [],
      "buffEffects": []
    },
    {
      "slot": 3,
      "name": "Smack!",
      "icon": "skill001/skill0011",
      "description": "to 3 nearest enemies1s Charm for state and Physical Critical Damage-11%-30 DOWN for 10 seconds",
      "descriptionLv1": "to 3 nearest enemies1s Charm for state and Physical Critical Damage-11%-30 DOWN for 10 seconds",
      "descriptionLv90": "to 3 nearest enemies1s Charm for state and Physical Critical Damage-11%-30 DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Charm",
        "Physical Critical Damage- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
        {
          "name": "Physical Critical Damage- Lv3",
          "value": -11,
          "type": "percent",
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
      "name": "It'll suddenly get ugly!",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Cleanse for 2 seconds and for seconds and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1100% + 900",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 2,
      "name": "It'll suddenly get ugly!",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Cleanse for 2.5 seconds and for seconds and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1320% + 1000",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 3,
      "name": "It'll suddenly get ugly!",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Cleanse for 2.5 seconds and for seconds and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1490% + 1100",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ]
    },
    {
      "rank": 4,
      "name": "It'll suddenly get ugly!",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Cleanse for 3 seconds and for seconds and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1600% + 1200",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    },
    {
      "rank": 5,
      "name": "It'll suddenly get ugly!",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Cleanse for 3 seconds and for seconds and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1650% + 1250",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 3
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +",
      "icon": "skill001/skill1003",
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
      "name": "Skill Damage +, Max HP +",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+20%), Max HP + (+2896)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Max HP +",
          "value": 2896,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Slightly Mischievous Devil: Luca",
  "id": 2083,
  "rarity": "SR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1661,
    "ATK": 314,
    "MATK": 188,
    "DEF": 126,
    "MDEF": 50
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.88"
  },
  "slug": "slightly-mischievous-devil-luca"
};

export const stats = {
  "id": "slightly-mischievous-devil-luca",
  "characterId": 2083,
  "name": "[Slightly Mischievous Devil] Luca",
  "rarity": "SR",
  "element": "Fire",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1661,
      "lv90": 8305
    },
    "atk": {
      "base": 314,
      "lv90": 1570
    },
    "matk": {
      "base": 188,
      "lv90": 941
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
      "base": 50,
      "lv90": 150
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
      "HP": 498,
      "ATK": 94,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 573,
      "ATK": 108,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 673,
      "ATK": 127,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 747,
      "ATK": 141,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1307,
      "ATK": 230,
      "DEF": 31,
      "MDEF": 9,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3798,
      "ATK": 700,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 31,
      "MDEF": 9,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 30
    },
    "gp2": {
      "HP": 200,
      "ATK": 30
    },
    "gp3": {
      "HP": 200,
      "ATK": 90
    },
    "gp4": {
      "HP": 500,
      "ATK": 90
    },
    "gp5": {
      "HP": 500,
      "ATK": 150
    },
    "gp6": {
      "HP": 800,
      "ATK": 150
    },
    "gp7": {
      "HP": 800,
      "ATK": 210
    },
    "gp8": {
      "HP": 1100,
      "ATK": 210
    },
    "gp9": {
      "HP": 1100,
      "ATK": 270
    },
    "gp10": {
      "HP": 1400,
      "ATK": 270
    },
    "total": {
      "HP": 1400,
      "ATK": 270
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 175,
      "ATK": 33,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 210,
      "ATK": 40,
      "Phys Crit": 1,
      "Block": 16
    },
    "g3": {
      "HP": 245,
      "ATK": 46,
      "Phys Crit": 1,
      "Accuracy": 12
    },
    "g4": {
      "HP": 280,
      "ATK": 53,
      "Phys Crit": 1,
      "Block": 21
    },
    "g5": {
      "HP": 315,
      "ATK": 59,
      "Phys Crit": 1,
      "MP Charge": 5
    },
    "g6": {
      "HP": 350,
      "ATK": 66,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 385,
      "ATK": 73,
      "Phys Crit": 2,
      "Block": 29
    },
    "g8": {
      "HP": 420,
      "ATK": 79,
      "Phys Crit": 2,
      "Accuracy": 21
    },
    "g9": {
      "HP": 455,
      "ATK": 86,
      "Phys Crit": 2,
      "Block": 34
    },
    "g10": {
      "HP": 490,
      "ATK": 93,
      "Phys Crit": 2,
      "MP Charge": 7
    },
    "total": {
      "HP": 490,
      "ATK": 93,
      "Phys Crit": 2,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 138
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "HP": 194
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "HP": 249
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "HP": 305
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "HP": 360
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "HP": 378
    }
  ]
};;;;;;;;
