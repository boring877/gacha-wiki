// Character data: veronica
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "veronica",
  "name": "Veronica",
  "displayName": "Veronica",
  "baseName": "Veronica",
  "title": null,
  "rarity": "SR",
  "element": "Water",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Slow",
  "range": 240,
  "weaponType": "Strike",
  "skillTypes": [
    "Debuff",
    "Buff"
  ],
  "image": "Veronica",
  "introduction": "Front Row、Physical、Support",
  "profile": {
    "height": "166cm",
    "bust": "102cm (J Cup)",
    "waist": "63cm",
    "hips": "96cm"
  },
  "credits": {
    "illustration": {
      "japanese": "只野あきら",
      "romanized": ""
    },
    "voice": {
      "japanese": "琴吹司",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2037
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "This costs quite a bit, you know ",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense -18%-30 DOWN for 12 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Physical Defense -18%-30 DOWN for 12 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Physical Defense -18%-210 DOWN for 12 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.58,
      "damageScaling": "240% ATK",
      "baseDamage": "+110",
      "levelGrowth": "+20",
      "lvl1": "240% + 110",
      "lvl90": "240% + -68",
      "effects": [
        "Physical Defense - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -2.0
        }
      ],
      "duration": 12
    },
    {
      "slot": 3,
      "name": "I’m very fond of you ",
      "icon": "skill001/skill0017",
      "description": "Applies Physical Critical Damage 50 UP to the 3 nearest allies for 12 seconds",
      "descriptionLv1": "Applies Physical Critical Damage 50 UP to the 3 nearest allies for 12 seconds",
      "descriptionLv90": "Applies Physical Critical Damage 50 UP to the 3 nearest allies for 12 seconds",
      "target": "Nearest Ally",
      "castTime": 1.58,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Critical Damage+ Lv4"
      ],
      "buffEffects": [
        {
          "name": "Physical Critical Damage+ Lv4",
          "value": 50,
          "type": "percent",
          "duration": 12,
          "levelGrowth": 7.0
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Financial Support!",
      "icon": "skill001/skill0020_1",
      "description": "Applies Magic Attack UP(LV 1) to all allies for 12 seconds and Physical Defense UP(LV 1) for 12 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 15,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Physical Defense + Ultimate Lv1",
          "value": 50,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 2,
      "name": "Financial Support!",
      "icon": "skill001/skill0020_2",
      "description": "Applies Magic Attack UP(LV 2) to all allies for 12 seconds and Physical Defense UP(LV 2) for 12 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv2",
          "value": 20,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Physical Defense + Ultimate Lv2",
          "value": 150,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 3,
      "name": "Financial Support!",
      "icon": "skill001/skill0020_3",
      "description": "Applies Magic Attack UP(LV 3) to all allies for 12 seconds and Physical Defense UP(LV 3) for 12 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv3",
          "value": 24,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Physical Defense + Ultimate Lv3",
          "value": 200,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "Financial Support!",
      "icon": "skill001/skill0020_4",
      "description": "Applies Magic Attack UP(LV 4) to all allies for 12 seconds and Physical Defense UP(LV 4) for 12 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv4",
          "value": 27,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Physical Defense + Ultimate Lv4",
          "value": 250,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 5,
      "name": "Financial Support!",
      "icon": "skill001/skill0020_5",
      "description": "Applies Magic Attack UP(LV 5) to all allies for 12 seconds and Physical Defense UP(LV 5) for 12 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Physical Attack + Ultimate Lv5",
          "value": 30,
          "type": "percent",
          "duration": 12
        },
        {
          "name": "Physical Defense + Ultimate Lv5",
          "value": 300,
          "type": "flat",
          "duration": 12
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Defense +, Magic Defense+",
      "icon": "skill001/skill1002",
      "effect": "Physical Defense + (+141), Magic Defense+ (+141)",
      "effectValues": [
        {
          "name": "Physical Defense +",
          "value": 141,
          "type": "flat"
        },
        {
          "name": "Magic Defense+",
          "value": 141,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Physical Attack +, Block+",
      "icon": "skill001/skill1007",
      "effect": "Physical Attack + (+130), Block+ (+10)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 130,
          "type": "flat"
        },
        {
          "name": "Block+",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Veronica",
  "id": 2037,
  "rarity": "SR",
  "element": "Water",
  "role": "Support",
  "tags": [
    "Debuff",
    "Buff"
  ],
  "baseStats": {
    "HP": 2055,
    "ATK": 240,
    "MATK": 144,
    "DEF": 126,
    "MDEF": 50
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.11"
  },
  "slug": "veronica"
};

export const stats = {
  "id": "veronica",
  "characterId": 2037,
  "name": "Veronica",
  "rarity": "SR",
  "element": "水",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Debuff",
    "Buff"
  ],
  "baseStats": {
    "hp": {
      "base": 2055,
      "lv90": 10276
    },
    "atk": {
      "base": 240,
      "lv90": 1201
    },
    "matk": {
      "base": 144,
      "lv90": 720
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
      "base": 287,
      "lv90": 459
    },
    "magicCrit": {
      "base": 172,
      "lv90": 275
    },
    "hpRegen": {
      "base": 102,
      "lv90": 358
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
      "base": 87,
      "lv90": 87
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
      "HP": 617,
      "ATK": 72,
      "Block": 17,
      "MP Charge": 8
    },
    "lb2": {
      "HP": 709,
      "ATK": 83,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 832,
      "ATK": 97,
      "Block": 22,
      "MP Charge": 11
    },
    "lb4": {
      "HP": 925,
      "ATK": 108,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1624,
      "ATK": 209,
      "DEF": 43,
      "MDEF": 9,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 4707,
      "ATK": 569,
      "Block": 83,
      "MP Charge": 19,
      "Accuracy": 30,
      "DEF": 43,
      "MDEF": 9,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 200
    },
    "gp2": {
      "HP": 200,
      "MP Charge": 2
    },
    "gp3": {
      "HP": 500,
      "MP Charge": 2
    },
    "gp4": {
      "HP": 500,
      "MP Charge": 5
    },
    "gp5": {
      "HP": 800
    },
    "gp6": {
      "HP": 800
    },
    "gp7": {
      "HP": 1100
    },
    "gp8": {
      "HP": 1100
    },
    "gp9": {
      "HP": 1400
    },
    "total": {}
  },
  "abilityGrade": {
    "g1": {
      "HP": 216,
      "ATK": 25,
      "Phys Crit": 6,
      "Accuracy": 9
    },
    "g2": {
      "HP": 260,
      "ATK": 30,
      "Phys Crit": 7,
      "Block": 17
    },
    "g3": {
      "HP": 303,
      "ATK": 35,
      "Phys Crit": 8,
      "Accuracy": 12
    },
    "g4": {
      "HP": 346,
      "ATK": 40,
      "Phys Crit": 10,
      "Block": 23
    },
    "g5": {
      "HP": 389,
      "ATK": 46,
      "Phys Crit": 11,
      "MP Charge": 7
    },
    "g6": {
      "HP": 433,
      "ATK": 51,
      "Phys Crit": 12,
      "Accuracy": 18
    },
    "g7": {
      "HP": 476,
      "ATK": 56,
      "Phys Crit": 13,
      "Block": 32
    },
    "g8": {
      "HP": 519,
      "ATK": 61,
      "Phys Crit": 15,
      "Accuracy": 21
    },
    "g9": {
      "HP": 563,
      "ATK": 66,
      "Phys Crit": 16,
      "Block": 38
    },
    "g10": {
      "HP": 606,
      "ATK": 71,
      "Phys Crit": 17,
      "MP Charge": 11
    },
    "total": {
      "HP": 606,
      "ATK": 71,
      "Phys Crit": 17,
      "MP Charge": 11
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP Regen": 9
    },
    {
      "grade": 2,
      "MP Charge": 2
    },
    {
      "grade": 3,
      "HP Regen": 12
    },
    {
      "grade": 4,
      "MP Charge": 3
    },
    {
      "grade": 5,
      "HP Regen": 15
    },
    {
      "grade": 6,
      "MP Charge": 4
    },
    {
      "grade": 7,
      "HP Regen": 19
    },
    {
      "grade": 8,
      "MP Charge": 5
    },
    {
      "grade": 9,
      "HP Regen": 22
    },
    {
      "grade": 10,
      "MP Charge": 5
    },
    {
      "grade": 11,
      "HP Regen": 24
    }
  ]
};;;;;;;;
