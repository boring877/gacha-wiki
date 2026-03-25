// Character data: henrietti
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "henrietti",
  "name": "Henrietti",
  "displayName": "Henrietti",
  "baseName": "Henrietti",
  "title": null,
  "rarity": "SR",
  "element": "Fire",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Normal",
  "range": 245,
  "weaponType": "Slash",
  "skillTypes": [
    "Heal",
    "Buff",
    "Disrupt"
  ],
  "image": "Henrietti",
  "introduction": "Front Row、Physical、Support",
  "profile": {
    "height": "153cm",
    "bust": "97cm (J Cup)",
    "waist": "57cm",
    "hips": "82cm"
  },
  "credits": {
    "illustration": {
      "japanese": "只野あきら",
      "romanized": ""
    },
    "voice": {
      "japanese": "梅宮ここ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2102
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Goddess, please help everyone!",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Healing Shield (300, restores 20%) to all allies for 15 seconds and Physical Healing Shield (300, restores 20%) for 15 seconds",
      "descriptionLv1": "Applies Physical Healing Shield (300, restores 20%) to all allies for 15 seconds and Physical Healing Shield (300, restores 20%) for 15 seconds",
      "descriptionLv90": "Applies Physical Healing Shield (300, restores 20%) to all allies for 15 seconds and Physical Healing Shield (300, restores 20%) for 15 seconds",
      "target": "All Allies",
      "castTime": 1.22,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Healing Shield Lv3",
        "Magic Healing Shield Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Healing Shield Lv3",
          "value": 300,
          "type": "percent",
          "duration": 15,
          "levelGrowth": 30.0
        },
        {
          "name": "Magic Healing Shield Lv3",
          "value": 300,
          "type": "percent",
          "duration": 15,
          "levelGrowth": 30.0
        }
      ],
      "duration": 15
    },
    {
      "slot": 3,
      "name": "I can't do this!",
      "icon": "skill001/skill0021",
      "description": "nearest ally3restore HP and inflicts HP Regeneration 5%+150 for 5 seconds",
      "descriptionLv1": "nearest ally3restore HP and inflicts HP Regeneration 5%+150 for 5 seconds",
      "descriptionLv90": "nearest ally3restore HP and inflicts HP Regeneration 5%+150 for 5 seconds",
      "target": "Nearest Ally",
      "castTime": 1.22,
      "damageScaling": "800% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+20",
      "lvl1": "800% + 200",
      "lvl90": "800% + 823",
      "effects": [
        "HP Regeneration+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "HP Regeneration+ Lv3",
          "value": 5,
          "type": "percent",
          "duration": 5,
          "levelGrowth": 7.0
        }
      ],
      "duration": 5
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Galc Special - Explosive Potion Shell!",
      "icon": "skill001/skill0012_1",
      "description": "Deals physical damage to all enemies and inflicts Stun for 1 seconds , 4s Blind for",
      "effect": "300% + 300",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ]
    },
    {
      "rank": 2,
      "name": "Galc Special - Explosive Potion Shell!",
      "icon": "skill001/skill0012_2",
      "description": "Deals physical damage to all enemies and inflicts Stun for 1.5 seconds , 4.5s Blind for",
      "effect": "360% + 450",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        }
      ]
    },
    {
      "rank": 3,
      "name": "Galc Special - Explosive Potion Shell!",
      "icon": "skill001/skill0012_3",
      "description": "Deals physical damage to all enemies and inflicts Stun for 1.5 seconds , 5s Blind for",
      "effect": "409% + 550",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 1
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        }
      ]
    },
    {
      "rank": 4,
      "name": "Galc Special - Explosive Potion Shell!",
      "icon": "skill001/skill0012_4",
      "description": "Deals physical damage to all enemies and inflicts Stun for 2 seconds , 5.5s Blind for",
      "effect": "440% + 650",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        }
      ]
    },
    {
      "rank": 5,
      "name": "Galc Special - Explosive Potion Shell!",
      "icon": "skill001/skill0012_5",
      "description": "Deals physical damage to all enemies and inflicts Stun for 2 seconds , 6s Blind for",
      "effect": "470% + 700",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Blind",
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
      "name": "Action Speed +, Debuff Resistance+",
      "icon": "skill001/skill1003",
      "effect": "Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Henrietti",
  "id": 2102,
  "rarity": "SR",
  "element": "Fire",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2507,
    "ATK": 248,
    "MATK": 149,
    "DEF": 65,
    "MDEF": 25
  },
  "skillRotation": {
    "opening": "Skill2 → Basic → Skill3 → Basic",
    "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.82"
  },
  "slug": "henrietti"
};

export const stats = {
  "id": "henrietti",
  "characterId": 2102,
  "name": "Henrietti",
  "rarity": "SR",
  "element": "火",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 2507,
      "lv90": 12535
    },
    "atk": {
      "base": 248,
      "lv90": 1241
    },
    "matk": {
      "base": 149,
      "lv90": 745
    },
    "def": {
      "base": 65,
      "lv90": 130
    },
    "mdef": {
      "base": 25,
      "lv90": 50
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
      "base": 108,
      "lv90": 173
    },
    "magicCrit": {
      "base": 65,
      "lv90": 104
    },
    "hpRegen": {
      "base": 125,
      "lv90": 438
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
      "HP": 752,
      "ATK": 75,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 865,
      "ATK": 86,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 1015,
      "ATK": 101,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1128,
      "ATK": 112,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1838,
      "ATK": 196,
      "DEF": 16,
      "MDEF": 5,
      "Heal Pwr": 26
    },
    "total": {
      "HP": 5598,
      "ATK": 570,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 16,
      "MDEF": 5,
      "Heal Pwr": 26
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 30
    },
    "gp2": {
      "ATK": 30,
      "Heal Pwr": 10
    },
    "gp3": {
      "ATK": 90,
      "Heal Pwr": 10
    },
    "gp4": {
      "ATK": 90,
      "Heal Pwr": 25
    },
    "gp5": {
      "ATK": 150,
      "Heal Pwr": 25
    },
    "gp6": {
      "ATK": 150,
      "Heal Pwr": 40
    },
    "gp7": {
      "ATK": 210,
      "Heal Pwr": 40
    },
    "gp8": {
      "ATK": 210,
      "Heal Pwr": 55
    },
    "gp9": {
      "ATK": 270,
      "Heal Pwr": 55
    },
    "gp10": {
      "ATK": 270,
      "Heal Pwr": 70
    },
    "total": {
      "ATK": 270,
      "Heal Pwr": 70
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 264,
      "ATK": 26,
      "Phys Crit": 2,
      "Accuracy": 9
    },
    "g2": {
      "HP": 317,
      "ATK": 31,
      "Phys Crit": 3,
      "Block": 16
    },
    "g3": {
      "HP": 369,
      "ATK": 37,
      "Phys Crit": 3,
      "Accuracy": 12
    },
    "g4": {
      "HP": 422,
      "ATK": 42,
      "Phys Crit": 4,
      "Block": 21
    },
    "g5": {
      "HP": 475,
      "ATK": 47,
      "Phys Crit": 4,
      "MP Charge": 5
    },
    "g6": {
      "HP": 528,
      "ATK": 52,
      "Phys Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 581,
      "ATK": 58,
      "Phys Crit": 5,
      "Block": 29
    },
    "g8": {
      "HP": 633,
      "ATK": 63,
      "Phys Crit": 5,
      "Accuracy": 21
    },
    "g9": {
      "HP": 686,
      "ATK": 68,
      "Phys Crit": 6,
      "Block": 34
    },
    "g10": {
      "HP": 739,
      "ATK": 73,
      "Phys Crit": 6,
      "MP Charge": 7
    },
    "total": {
      "HP": 739,
      "ATK": 73,
      "Phys Crit": 6,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 21
    },
    {
      "grade": 2,
      "Heal Pwr": 5
    },
    {
      "grade": 3,
      "ATK": 29
    },
    {
      "grade": 4,
      "Heal Pwr": 6
    },
    {
      "grade": 5,
      "ATK": 37
    },
    {
      "grade": 6,
      "Heal Pwr": 8
    },
    {
      "grade": 7,
      "ATK": 46
    },
    {
      "grade": 8,
      "Heal Pwr": 9
    },
    {
      "grade": 9,
      "ATK": 54
    },
    {
      "grade": 10,
      "Heal Pwr": 11
    },
    {
      "grade": 11,
      "ATK": 57
    }
  ]
};;;;;;;;
