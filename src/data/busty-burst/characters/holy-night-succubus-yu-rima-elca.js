// Character data: holy-night-succubus-yu-rima-elca
// Merged from info/skills/stats files

export const info = {
  "slug": "holy-night-succubus-yu-rima-elca",
  "name": "[Holy Night Succubus] Yu Rima Elca",
  "displayName": "Holy Night Succubus Yu Rima Elca",
  "baseName": "Yu Rima Elca",
  "title": "Holy Night Succubus",
  "rarity": "SR",
  "element": "Mind",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 380,
  "weaponType": "Throw",
  "skillTypes": [
    "Disrupt",
    "Debuff"
  ],
  "image": "Holy_Night_Succubus_Yu_Rima_Elca",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "163cm",
    "bust": "106cm (K Cup)",
    "waist": "63cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "3104",
      "romanized": "3104"
    },
    "voice": {
      "japanese": "\u3042\u304b\u3057\u3086\u304d",
      "romanized": "Akashi Yuki"
    }
  },
  "obtain": {
    "type": "limited",
    "source": "Offering Cookies for the Holy Night (Dec 16 - Dec 30)"
  }
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Alright, this is for you.",
      "icon": "skill001/skill0011",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Burn(HP --80 per second) for 12 seconds",
      "descriptionLv1": "Deals magic damage to the 3 nearest enemies and inflicts Burn(HP --80 per second) for 12 seconds",
      "descriptionLv90": "Deals magic damage to the 3 nearest enemies and inflicts Burn(HP --1070 per second) for 12 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "100% ATK",
      "baseDamage": "+50",
      "levelGrowth": "+6",
      "lvl1": "100% + 50",
      "lvl90": "100% + -929",
      "effects": [
        "Burn Lv3"
      ],
      "buffEffects": [
        {
          "name": "Burn Lv3",
          "value": -80,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -11.0
        }
      ],
      "duration": 12
    },
    {
      "slot": 3,
      "name": "Even if Santa gets it, it’s fine, right?",
      "icon": "skill001/skill0011",
      "description": "Inflicts Charm on the 3 nearest enemies for 1 seconds and Magic Defense-18%-30 DOWN for 8 seconds",
      "descriptionLv1": "Inflicts Charm on the 3 nearest enemies for 1 seconds and Magic Defense-18%-30 DOWN for 8 seconds",
      "descriptionLv90": "Inflicts Charm on the 3 nearest enemies for 1 seconds and Magic Defense-18%-210 DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Charm",
        "Magic Defense- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
        {
          "name": "Magic Defense- Lv3",
          "value": -30,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -2.0
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "The gift… is… me.",
      "icon": "skill001/skill0012_1",
      "description": "Deals magic damage to the nearest enemy and inflicts Dispel for 1 seconds (Dispel effect: removes all active buffs and prevents gaining buffs for the duration) and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1100% + 500",
      "buffEffects": [
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 1
        }
      ]
    },
    {
      "rank": 2,
      "name": "The gift… is… me.",
      "icon": "skill001/skill0012_2",
      "description": "Deals magic damage to the nearest enemy and inflicts Dispel for 2 seconds (Dispel effect: removes all active buffs and prevents gaining buffs for the duration) and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1300% + 600",
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
      "name": "The gift… is… me.",
      "icon": "skill001/skill0012_3",
      "description": "Deals magic damage to the nearest enemy and inflicts Dispel for 2 seconds (Dispel effect: removes all active buffs and prevents gaining buffs for the duration) and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1430% + 700",
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
      "name": "The gift… is… me.",
      "icon": "skill001/skill0012_4",
      "description": "Deals magic damage to the nearest enemy and inflicts Dispel for 3 seconds (Dispel effect: removes all active buffs and prevents gaining buffs for the duration) and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1500% + 750",
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
      "name": "The gift… is… me.",
      "icon": "skill001/skill0012_5",
      "description": "Deals magic damage to the nearest enemy and inflicts Dispel for 3 seconds (Dispel effect: removes all active buffs and prevents gaining buffs for the duration) and absorbs 6% of the damage dealt to restore own HP",
      "effect": "1550% + 800",
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
      "name": "Magic Attack +",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+259)",
      "effectValues": [
        {
          "name": "Magic Attack +",
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
  "name": "Holy Night Succubus: Yu Rima Elca",
  "id": 2097,
  "rarity": "SR",
  "element": "Dark",
  "role": "Attacker",
  "tags": [
    "Disrupt",
    "Debuff"
  ],
  "baseStats": {
    "HP": 2332,
    "ATK": 188,
    "MATK": 314,
    "DEF": 7,
    "MDEF": 18
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.88"
  },
  "slug": "holy-night-succubus-yu-rima-elca"
};

export const stats = {
  "id": "holy-night-succubus-yu-rima-elca",
  "characterId": 2097,
  "name": "【Holy Night Succubus】Yu Rima Elca",
  "rarity": "SR",
  "element": "魔",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Disrupt",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 2332,
      "lv90": 11660
    },
    "atk": {
      "base": 188,
      "lv90": 941
    },
    "matk": {
      "base": 314,
      "lv90": 1570
    },
    "def": {
      "base": 7,
      "lv90": 14
    },
    "mdef": {
      "base": 18,
      "lv90": 36
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
      "base": 22,
      "lv90": 35
    },
    "magicCrit": {
      "base": 37,
      "lv90": 59
    },
    "hpRegen": {
      "base": 116,
      "lv90": 407
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
      "HP": 700,
      "MATK": 94,
      "Block": 14,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 805,
      "MATK": 108,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 944,
      "MATK": 127,
      "Block": 18,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1049,
      "MATK": 141,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 1836,
      "MATK": 247,
      "DEF": 1,
      "MDEF": 4,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 5334,
      "MATK": 717,
      "Block": 68,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 1,
      "MDEF": 4,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 200
    },
    "gp2": {
      "HP": 200,
      "MATK": 30
    },
    "gp3": {
      "HP": 500,
      "MATK": 30
    },
    "gp4": {
      "HP": 500,
      "MATK": 90
    },
    "gp5": {
      "HP": 800,
      "MATK": 90
    },
    "gp6": {
      "HP": 800,
      "MATK": 150
    },
    "gp7": {
      "HP": 1100,
      "MATK": 150
    },
    "gp8": {
      "HP": 1100,
      "MATK": 210
    },
    "gp9": {
      "HP": 1400,
      "MATK": 210
    },
    "gp10": {
      "HP": 1400,
      "MATK": 270
    },
    "total": {
      "HP": 1400,
      "MATK": 270
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 245,
      "MATK": 33,
      "MDEF": 1,
      "Magic Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 295,
      "MATK": 40,
      "MDEF": 1,
      "Magic Crit": 1,
      "Block": 14
    },
    "g3": {
      "HP": 344,
      "MATK": 46,
      "MDEF": 1,
      "Magic Crit": 1,
      "Accuracy": 12
    },
    "g4": {
      "HP": 393,
      "MATK": 53,
      "MDEF": 1,
      "Magic Crit": 1,
      "Block": 19
    },
    "g5": {
      "HP": 442,
      "MATK": 59,
      "MDEF": 1,
      "Magic Crit": 1,
      "MP Charge": 5
    },
    "g6": {
      "HP": 491,
      "MATK": 66,
      "MDEF": 2,
      "Magic Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 540,
      "MATK": 73,
      "MDEF": 2,
      "Magic Crit": 2,
      "Block": 26
    },
    "g8": {
      "HP": 589,
      "MATK": 79,
      "MDEF": 2,
      "Magic Crit": 2,
      "Accuracy": 21
    },
    "g9": {
      "HP": 638,
      "MATK": 86,
      "MDEF": 2,
      "Magic Crit": 2,
      "Block": 31
    },
    "g10": {
      "HP": 687,
      "MATK": 93,
      "MDEF": 2,
      "Magic Crit": 2,
      "MP Charge": 7
    },
    "total": {
      "HP": 687,
      "MATK": 93,
      "MDEF": 2,
      "Magic Crit": 2,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 26
    },
    {
      "grade": 2,
      "HP": 210
    },
    {
      "grade": 3,
      "MATK": 37
    },
    {
      "grade": 4,
      "HP": 280
    },
    {
      "grade": 5,
      "MATK": 47
    },
    {
      "grade": 6,
      "HP": 350
    },
    {
      "grade": 7,
      "MATK": 58
    },
    {
      "grade": 8,
      "HP": 420
    },
    {
      "grade": 9,
      "MATK": 68
    },
    {
      "grade": 10,
      "HP": 490
    },
    {
      "grade": 11,
      "MATK": 71
    }
  ]
};;;;;;;;
