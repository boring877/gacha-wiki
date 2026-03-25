// Character data: lapis
// Merged from info/skills/stats files

export const info = {
  "slug": "lapis",
  "name": "Lapis",
  "displayName": "Lapis",
  "baseName": "Lapis",
  "title": null,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 240,
  "weaponType": "Slash",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "image": "Lapis",
  "introduction": "Front Row、Magical、Attacker",
  "profile": {
    "height": "163cm",
    "bust": "92cm (F Cup)",
    "waist": "59cm",
    "hips": "90cm"
  },
  "credits": {
    "illustration": {
      "japanese": "\u99ac\u8089\u592a\u90ce",
      "romanized": "Baniku Tarou"
    },
    "voice": {
      "japanese": "\u6625\u5c71\u8272\u8449",
      "romanized": "Haruyama Shikiha"
    }
  },
  "obtain": {
    "type": "permanent",
    "source": "Standard Banner"
  }
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Sapphire",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the nearest enemy and inflicts Burn(HP --150 per second) for 10 seconds and Freeze(Unable to act;HP --650 per second) for 1.5 seconds",
      "descriptionLv1": "Deals magic damage to the nearest enemy and inflicts Burn(HP --150 per second) for 10 seconds and Freeze(Unable to act;HP --650 per second) for 1.5 seconds",
      "descriptionLv90": "Deals magic damage to the nearest enemy and inflicts Burn(HP --1500 per second) for 10 seconds and Freeze(Unable to act;HP --4250 per second) for 1.5 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "320% ATK",
      "baseDamage": "+180",
      "levelGrowth": "+20",
      "lvl1": "320% + 180",
      "lvl90": "320% + -3380",
      "effects": [
        "Burn Lv5",
        "Freeze Lv5"
      ],
      "buffEffects": [
        {
          "name": "Burn Lv5",
          "value": -150,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -15.0
        },
        {
          "name": "Freeze Lv5",
          "value": -650,
          "type": "flat",
          "duration": 1,
          "levelGrowth": -40.0
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Dignity",
      "icon": "skill001/skill0019",
      "description": "Applies Magic Attack 20%+40 UP to self for 12 seconds and Action Speed 17%UP for 12 seconds",
      "descriptionLv1": "Applies Magic Attack 20%+40 UP to self for 12 seconds and Action Speed 17%UP for 12 seconds",
      "descriptionLv90": "Applies Magic Attack 20%+850 UP to self for 12 seconds and Action Speed 17%UP for 12 seconds",
      "target": "Self",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Magic Attack + Lv5",
        "Action Speed + Lv4"
      ],
      "buffEffects": [
        {
          "name": "Magic Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 9.0
        },
        {
          "name": "Action Speed + Lv4",
          "value": 17,
          "type": "flat",
          "duration": 12
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Arabian Night Sky",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the nearest enemy and inflicts Water Type Defense DOWN(LV 1) for 10 seconds and Fire Type Defense DOWN(LV 1) for 10 seconds",
      "effect": "1100% + 800",
      "buffEffects": [
        {
          "name": "Water Type Defense - Ultimate Lv1",
          "value": -25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Fire Type Defense- Ultimate Lv1",
          "value": -25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Arabian Night Sky",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the nearest enemy and inflicts Water Type Defense DOWN(LV 2) for 10 seconds and Fire Type Defense DOWN(LV 2) for 10 seconds",
      "effect": "1320% + 1000",
      "buffEffects": [
        {
          "name": "Water Type Defense - Ultimate Lv2",
          "value": -30,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Fire Type Defense- Ultimate Lv2",
          "value": -30,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Arabian Night Sky",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to the nearest enemy and inflicts Water Type Defense DOWN(LV 3) for 10 seconds and Fire Type Defense DOWN(LV 3) for 10 seconds",
      "effect": "1500% + 1150",
      "buffEffects": [
        {
          "name": "Water Type Defense - Ultimate Lv3",
          "value": -34,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Fire Type Defense- Ultimate Lv3",
          "value": -34,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Arabian Night Sky",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to the nearest enemy and inflicts Water Type Defense DOWN(LV 4) for 10 seconds and Fire Type Defense DOWN(LV 4) for 10 seconds",
      "effect": "1610% + 1250",
      "buffEffects": [
        {
          "name": "Water Type Defense - Ultimate Lv4",
          "value": -37,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Fire Type Defense- Ultimate Lv4",
          "value": -37,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Arabian Night Sky",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to the nearest enemy and inflicts Water Type Defense DOWN(LV 5) for 10 seconds and Fire Type Defense DOWN(LV 5) for 10 seconds",
      "effect": "1670% + 1300",
      "buffEffects": [
        {
          "name": "Water Type Defense - Ultimate Lv5",
          "value": -40,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Fire Type Defense- Ultimate Lv5",
          "value": -40,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+389), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "Accuracy +",
          "value": 20,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Magic Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Magic Critical Damage+ (+90)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Magic Critical Damage+",
          "value": 90,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Lapis",
  "id": 2084,
  "rarity": "SSR",
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 157,
    "MATK": 261,
    "DEF": 32,
    "MDEF": 82
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "lapis"
};

export const stats = {
  "id": "lapis",
  "characterId": 2084,
  "name": "Lapis",
  "rarity": "SSR",
  "element": "水",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2092,
      "lv90": 10460
    },
    "atk": {
      "base": 157,
      "lv90": 785
    },
    "matk": {
      "base": 261,
      "lv90": 1307
    },
    "def": {
      "base": 32,
      "lv90": 64
    },
    "mdef": {
      "base": 82,
      "lv90": 164
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
      "base": 124,
      "lv90": 198
    },
    "magicCrit": {
      "base": 207,
      "lv90": 331
    },
    "hpRegen": {
      "base": 104,
      "lv90": 365
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
      "base": 46,
      "lv90": 46
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
      "HP": 628,
      "MATK": 78,
      "Block": 15,
      "MP Charge": 4
    },
    "lb2": {
      "HP": 722,
      "MATK": 90,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 847,
      "MATK": 106,
      "Block": 20,
      "MP Charge": 6
    },
    "lb4": {
      "HP": 941,
      "MATK": 118,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1778,
      "MATK": 242,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4916,
      "MATK": 634,
      "Block": 75,
      "MP Charge": 10,
      "Accuracy": 30,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "Magic Crit": 20
    },
    "gp2": {
      "MATK": 40,
      "Magic Crit": 20
    },
    "gp3": {
      "MATK": 40,
      "Magic Crit": 50
    },
    "gp4": {
      "MATK": 120,
      "Magic Crit": 50
    },
    "gp5": {
      "MATK": 120,
      "Magic Crit": 80
    },
    "gp6": {
      "MATK": 200,
      "Magic Crit": 80
    },
    "gp7": {
      "MATK": 200,
      "Magic Crit": 110
    },
    "gp8": {
      "MATK": 280,
      "Magic Crit": 110
    },
    "gp9": {
      "MATK": 280,
      "Magic Crit": 140
    },
    "gp10": {
      "MATK": 360,
      "Magic Crit": 140
    },
    "total": {
      "MATK": 360,
      "Magic Crit": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 220,
      "MATK": 28,
      "MDEF": 4,
      "Magic Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 264,
      "MATK": 33,
      "MDEF": 4,
      "Magic Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 308,
      "MATK": 39,
      "MDEF": 5,
      "Magic Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 352,
      "MATK": 44,
      "MDEF": 6,
      "Magic Crit": 7,
      "Block": 21
    },
    "g5": {
      "HP": 396,
      "MATK": 50,
      "MDEF": 7,
      "Magic Crit": 8,
      "MP Charge": 4
    },
    "g6": {
      "HP": 440,
      "MATK": 55,
      "MDEF": 7,
      "Magic Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 484,
      "MATK": 61,
      "MDEF": 8,
      "Magic Crit": 10,
      "Block": 29
    },
    "g8": {
      "HP": 529,
      "MATK": 66,
      "MDEF": 9,
      "Magic Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 573,
      "MATK": 72,
      "MDEF": 10,
      "Magic Crit": 11,
      "Block": 34
    },
    "g10": {
      "HP": 617,
      "MATK": 77,
      "MDEF": 10,
      "Magic Crit": 12,
      "MP Charge": 6
    },
    "total": {
      "HP": 617,
      "MATK": 77,
      "MDEF": 10,
      "Magic Crit": 12,
      "MP Charge": 6
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 22
    },
    {
      "grade": 2,
      "Accuracy": 3
    },
    {
      "grade": 3,
      "MATK": 31
    },
    {
      "grade": 4,
      "Accuracy": 4
    },
    {
      "grade": 5,
      "MATK": 39
    },
    {
      "grade": 6,
      "Accuracy": 5
    },
    {
      "grade": 7,
      "MATK": 48
    },
    {
      "grade": 8,
      "Accuracy": 5
    },
    {
      "grade": 9,
      "MATK": 57
    },
    {
      "grade": 10,
      "Accuracy": 6
    },
    {
      "grade": 11,
      "MATK": 60
    }
  ]
};;;;;;;;
