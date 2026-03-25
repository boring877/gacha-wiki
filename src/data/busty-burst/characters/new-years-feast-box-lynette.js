// Character data: new-years-feast-box-lynette
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "new-years-feast-box-lynette",
  "name": "New Year’s Feast Box: Lynette",
  "displayName": "New Year’s Feast Box: Lynette",
  "baseName": "Lynette",
  "title": "New Year’s Feast Box",
  "rarity": "SR",
  "element": "Mind",
  "role": "Support",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 390,
  "weaponType": "Strike",
  "skillTypes": [
    "Heal",
    "Buff",
    "Debuff"
  ],
  "image": "Lynette",
  "introduction": "Middle Row、Physical、Support",
  "profile": {
    "height": "155cm",
    "bust": "97cm (K Cup)",
    "waist": "56cm",
    "hips": "79cm"
  },
  "credits": {
    "illustration": {
      "japanese": "瑠璃ららこ",
      "romanized": ""
    },
    "voice": {
      "japanese": "朝井こもも",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2101
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "New outfit for the new year",
      "icon": "skill001/skill0007",
      "description": "Inflicts Physical Attack -9%-20 DOWN on the 3 nearest enemies for 8 seconds and Magic Attack -9%-20 DOWN for 8 seconds",
      "descriptionLv1": "Inflicts Physical Attack -9%-20 DOWN on the 3 nearest enemies for 8 seconds and Magic Attack -9%-20 DOWN for 8 seconds",
      "descriptionLv90": "Inflicts Physical Attack -9%-2000 DOWN on the 3 nearest enemies for 8 seconds and Magic Attack -9%-20 DOWN for 8 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Attack - Lv3",
        "Magic Attack - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Physical Attack - Lv3",
          "value": -20,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -2.0
        },
        {
          "name": "Magic Attack - Lv3",
          "value": -20,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -2.0
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Beauty is a deadly weapon",
      "icon": "skill001/skill0007",
      "description": "Deals physical damage to the nearest enemy and inflicts Accuracy -11 DOWN for 7 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Accuracy -11 DOWN for 7 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Accuracy -23 DOWN for 7 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.38,
      "damageScaling": "250% ATK",
      "baseDamage": "+120",
      "levelGrowth": "+15",
      "lvl1": "250% + 120",
      "lvl90": "250% + 108",
      "effects": [
        "Accuracy - Lv4"
      ],
      "buffEffects": [
        {
          "name": "Accuracy - Lv4",
          "value": -11,
          "type": "flat",
          "duration": 7,
          "levelGrowth": -0.13
        }
      ],
      "duration": 7
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Come, everyone — enjoy this New Year’s feast!",
      "icon": "skill001/skill0022_1",
      "description": "Restores HP by to all allies and inflicts BlockUP(LV 1) for 8 seconds",
      "effect": "2200% + 1400",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv1",
          "value": 10,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Come, everyone — enjoy this New Year’s feast!",
      "icon": "skill001/skill0022_2",
      "description": "Restores HP by to all allies and inflicts BlockUP(LV 2) for 8 seconds",
      "effect": "2700% + 1600",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Come, everyone — enjoy this New Year’s feast!",
      "icon": "skill001/skill0022_3",
      "description": "Restores HP by to all allies and inflicts BlockUP(LV 3) for 8 seconds",
      "effect": "3000% + 1800",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv3",
          "value": 16,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Come, everyone — enjoy this New Year’s feast!",
      "icon": "skill001/skill0022_4",
      "description": "Restores HP by to all allies and inflicts BlockUP(LV 4) for 8 seconds",
      "effect": "3200% + 1900",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv4",
          "value": 18,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Come, everyone — enjoy this New Year’s feast!",
      "icon": "skill001/skill0022_5",
      "description": "Restores HP by to all allies and inflicts BlockUP(LV 5) for 8 seconds",
      "effect": "3400% + 2000",
      "buffEffects": [
        {
          "name": "Block+ Ultimate Lv5",
          "value": 20,
          "type": "flat",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Healing Amount +",
      "icon": "skill001/skill1004",
      "effect": "Healing Amount + (+15%)",
      "effectValues": [
        {
          "name": "Healing Amount +",
          "value": 15,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Healing Received +, Block+",
      "icon": "skill001/skill1008",
      "effect": "Healing Received + (+20%), Block+ (+10)",
      "effectValues": [
        {
          "name": "Healing Received +",
          "value": 20,
          "type": "percent"
        },
        {
          "name": "Block+",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "New Year’s Feast Box: Lynette",
  "id": 2101,
  "rarity": "SR",
  "element": "Mind",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 3060,
    "ATK": 231,
    "MATK": 138,
    "DEF": 18,
    "MDEF": 7
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic → Basic",
    "loop": "Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Skill3 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.88"
  },
  "slug": "new-years-feast-box-lynette"
};

export const stats = {
  "id": "new-years-feast-box-lynette",
  "characterId": 2101,
  "name": "【New Year’s Feast Box】Lynette",
  "rarity": "SR",
  "element": "想",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Heal",
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 3060,
      "lv90": 15303
    },
    "atk": {
      "base": 231,
      "lv90": 1155
    },
    "matk": {
      "base": 138,
      "lv90": 692
    },
    "def": {
      "base": 18,
      "lv90": 36
    },
    "mdef": {
      "base": 7,
      "lv90": 14
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
      "base": 191,
      "lv90": 305
    },
    "magicCrit": {
      "base": 114,
      "lv90": 182
    },
    "hpRegen": {
      "base": 153,
      "lv90": 535
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
      "HP": 918,
      "ATK": 69,
      "Block": 14,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 1056,
      "ATK": 80,
      "Accuracy": 13,
      "Block": 16
    },
    "lb3": {
      "HP": 1240,
      "ATK": 94,
      "Block": 18,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 1377,
      "ATK": 104,
      "Accuracy": 17,
      "Block": 20
    },
    "lb5": {
      "HP": 2244,
      "ATK": 169,
      "DEF": 4,
      "MDEF": 1,
      "Heal Pwr": 23
    },
    "total": {
      "HP": 6835,
      "ATK": 516,
      "Block": 68,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 4,
      "MDEF": 1,
      "Heal Pwr": 23
    }
  },
  "gpAbility": {
    "gp1": {
      "DEF": 20
    },
    "gp2": {
      "DEF": 20,
      "MDEF": 20
    },
    "gp3": {
      "DEF": 50,
      "MDEF": 20
    },
    "gp4": {
      "DEF": 50,
      "MDEF": 50
    },
    "gp5": {
      "DEF": 80,
      "MDEF": 50
    },
    "gp6": {
      "DEF": 80,
      "MDEF": 80
    },
    "gp7": {
      "DEF": 110,
      "MDEF": 80
    },
    "gp8": {
      "DEF": 110,
      "MDEF": 110
    },
    "gp9": {
      "DEF": 140,
      "MDEF": 110
    },
    "gp10": {
      "DEF": 140,
      "MDEF": 140
    },
    "total": {
      "DEF": 140,
      "MDEF": 140
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 322,
      "ATK": 24,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 387,
      "ATK": 29,
      "Phys Crit": 5,
      "Block": 14
    },
    "g3": {
      "HP": 451,
      "ATK": 34,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 516,
      "ATK": 39,
      "Phys Crit": 6,
      "Block": 19
    },
    "g5": {
      "HP": 580,
      "ATK": 44,
      "Phys Crit": 7,
      "MP Charge": 5
    },
    "g6": {
      "HP": 644,
      "ATK": 49,
      "Phys Crit": 8,
      "Accuracy": 18
    },
    "g7": {
      "HP": 709,
      "ATK": 53,
      "Phys Crit": 9,
      "Block": 26
    },
    "g8": {
      "HP": 773,
      "ATK": 58,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 838,
      "ATK": 63,
      "Phys Crit": 10,
      "Block": 31
    },
    "g10": {
      "HP": 902,
      "ATK": 68,
      "Phys Crit": 11,
      "MP Charge": 7
    },
    "total": {
      "HP": 902,
      "ATK": 68,
      "Phys Crit": 11,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Block": 4
    },
    {
      "grade": 2,
      "Heal Pwr": 4
    },
    {
      "grade": 3,
      "Block": 5
    },
    {
      "grade": 4,
      "Heal Pwr": 5
    },
    {
      "grade": 5,
      "Block": 7
    },
    {
      "grade": 6,
      "Heal Pwr": 6
    },
    {
      "grade": 7,
      "Block": 8
    },
    {
      "grade": 8,
      "Heal Pwr": 7
    },
    {
      "grade": 9,
      "Block": 10
    },
    {
      "grade": 10,
      "Heal Pwr": 9
    },
    {
      "grade": 11,
      "Block": 11
    }
  ]
};;;;;;;;
