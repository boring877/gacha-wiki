// Character data: tempting-naked-apron-diana
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "tempting-naked-apron-diana",
  "name": "Tempting Naked Apron: Diana",
  "displayName": "Tempting Naked Apron: Diana",
  "baseName": "Diana",
  "title": "Tempting Naked Apron",
  "rarity": "SSR",
  "element": "Holy",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 380,
  "weaponType": "Strike",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "image": "Diana",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "175cm",
    "bust": "105cm (M Cup)",
    "waist": "57cm",
    "hips": "88cm"
  },
  "credits": {
    "illustration": {
      "japanese": "旭",
      "romanized": ""
    },
    "voice": {
      "japanese": "香澄りょう",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2134
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Cooking is Love",
      "icon": "skill001/skill0019",
      "description": "Applies Action Speed 20%UP to self for 12 seconds, MP Recovery 200, all allies20 Hit-Based Magic Damage UP(40%+450, 3 hit(s))",
      "descriptionLv1": "Applies Action Speed 20%UP to self for 12 seconds, MP Recovery 200, all allies20 Hit-Based Magic Damage UP(40%+450, 3 hit(s))",
      "descriptionLv90": "Applies Action Speed 20%UP to self for 12 seconds, MP Recovery 200, all allies20 Hit-Based Magic Damage UP(40%+450, 40503 hit(s))",
      "target": "Self",
      "castTime": 1.25,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Action Speed + Lv5",
        "MP Recovery",
        "Hit-Based Magic Damage + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Action Speed + Lv5",
          "value": 20,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "MP Recovery",
          "value": 200,
          "type": "percent"
        },
        {
          "name": "Hit-Based Magic Damage + Lv3",
          "value": 3,
          "type": "flat",
          "duration": 20,
          "levelGrowth": 450.0
        }
      ],
      "duration": 20
    },
    {
      "slot": 3,
      "name": "Dinner first? A bath? Or... do you want me?",
      "icon": "skill001/skill0011",
      "description": "2 enemies5s Charm for and Action Speed -20%DOWN for 12 seconds , 12 Block-9 DOWN",
      "descriptionLv1": "2 enemies5s Charm for and Action Speed -20%DOWN for 12 seconds , 12 Block-9 DOWN",
      "descriptionLv90": "2 enemies5s Charm for and Action Speed -20%DOWN for 12 seconds , 12 Block-18 DOWN",
      "target": "Nearest Enemy",
      "castTime": 1.25,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Charm",
        "Action Speed - Lv5",
        "Block- Lv3"
      ],
      "buffEffects": [
        {
          "name": "Charm",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Action Speed - Lv5",
          "value": -20,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Block- Lv3",
          "value": -9,
          "type": "flat",
          "duration": 12,
          "levelGrowth": -0.1
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Lovely Piercing Shot",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the nearest enemy, Ultimate activation beforeApplies Magic Attack UP(LV 1) to self for 8 seconds, , Ultimate activation beforeapply to self8 Holy Type ATK UP(LV 1)",
      "effect": "1000% + 1200",
      "buffEffects": [
        {
          "name": "Magic Attack + Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Holy Type ATK + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Lovely Piercing Shot",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the nearest enemy, Ultimate activation beforeApplies Magic Attack UP(LV 2) to self for 8 seconds, , Ultimate activation beforeapply to self8 Holy Type ATK UP(LV 2)",
      "effect": "1200% + 1400",
      "buffEffects": [
        {
          "name": "Magic Attack + Ultimate Lv2",
          "value": 25,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Holy Type ATK + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Lovely Piercing Shot",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to the nearest enemy, Ultimate activation beforeApplies Magic Attack UP(LV 3) to self for 8 seconds, , Ultimate activation beforeapply to self8 Holy Type ATK UP(LV 3)",
      "effect": "1350% + 1550",
      "buffEffects": [
        {
          "name": "Magic Attack + Ultimate Lv3",
          "value": 29,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Holy Type ATK + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Lovely Piercing Shot",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to the nearest enemy, Ultimate activation beforeApplies Magic Attack UP(LV 4) to self for 8 seconds, , Ultimate activation beforeapply to self8 Holy Type ATK UP(LV 4)",
      "effect": "1450% + 1700",
      "buffEffects": [
        {
          "name": "Magic Attack + Ultimate Lv4",
          "value": 32,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Holy Type ATK + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Lovely Piercing Shot",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to the nearest enemy, Ultimate activation beforeApplies Magic Attack UP(LV 5) to self for 8 seconds, , Ultimate activation beforeapply to self8 Holy Type ATK UP(LV 5)",
      "effect": "1500% + 1800",
      "buffEffects": [
        {
          "name": "Magic Attack + Ultimate Lv5",
          "value": 35,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Holy Type ATK + Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 8
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, MP Recovery",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+259), MP Recovery (+100%)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 259,
          "type": "flat"
        },
        {
          "name": "MP Recovery",
          "value": 100,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Action Speed +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Tempting Naked Apron: Diana",
  "id": 2134,
  "rarity": "SSR",
  "element": "Holy",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 1819,
    "ATK": 232,
    "MATK": 386,
    "DEF": 57,
    "MDEF": 143
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.83"
  },
  "slug": "tempting-naked-apron-diana"
};

export const stats = {
  "id": "tempting-naked-apron-diana",
  "characterId": 2134,
  "name": "【Tempting Naked Apron】Diana",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "hp": {
      "base": 1819,
      "lv90": 9095
    },
    "atk": {
      "base": 232,
      "lv90": 1160
    },
    "matk": {
      "base": 386,
      "lv90": 1933
    },
    "def": {
      "base": 57,
      "lv90": 114
    },
    "mdef": {
      "base": 143,
      "lv90": 286
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
      "base": 32,
      "lv90": 51
    },
    "magicCrit": {
      "base": 53,
      "lv90": 85
    },
    "hpRegen": {
      "base": 90,
      "lv90": 317
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
      "base": 60,
      "lv90": 60
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
      "HP": 546,
      "MATK": 116,
      "Block": 15,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 628,
      "MATK": 133,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 737,
      "MATK": 157,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 819,
      "MATK": 174,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1546,
      "MATK": 329,
      "DEF": 11,
      "MDEF": 41,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 4276,
      "MATK": 909,
      "Block": 75,
      "MP Charge": 13,
      "Accuracy": 30,
      "DEF": 11,
      "MDEF": 41,
      "Heal Pwr": 25
    }
  },
  "gpAbility": {
    "gp1": {
      "MATK": 40
    },
    "gp2": {
      "MATK": 40,
      "Magic Crit": 20
    },
    "gp3": {
      "MATK": 120,
      "Magic Crit": 20
    },
    "gp4": {
      "MATK": 120,
      "Magic Crit": 50
    },
    "gp5": {
      "MATK": 200,
      "Magic Crit": 50
    },
    "gp6": {
      "MATK": 200,
      "Magic Crit": 80
    },
    "gp7": {
      "MATK": 280,
      "Magic Crit": 80
    },
    "gp8": {
      "MATK": 280,
      "Magic Crit": 110
    },
    "gp9": {
      "MATK": 360,
      "Magic Crit": 110
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
      "HP": 191,
      "MATK": 41,
      "MDEF": 6,
      "Magic Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 230,
      "MATK": 49,
      "MDEF": 8,
      "Magic Crit": 1,
      "Block": 16
    },
    "g3": {
      "HP": 268,
      "MATK": 57,
      "MDEF": 9,
      "Magic Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 306,
      "MATK": 65,
      "MDEF": 10,
      "Magic Crit": 2,
      "Block": 21
    },
    "g5": {
      "HP": 345,
      "MATK": 73,
      "MDEF": 12,
      "Magic Crit": 2,
      "MP Charge": 5
    },
    "g6": {
      "HP": 383,
      "MATK": 81,
      "MDEF": 13,
      "Magic Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 421,
      "MATK": 90,
      "MDEF": 14,
      "Magic Crit": 2,
      "Block": 29
    },
    "g8": {
      "HP": 460,
      "MATK": 98,
      "MDEF": 16,
      "Magic Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 498,
      "MATK": 106,
      "MDEF": 17,
      "Magic Crit": 3,
      "Block": 34
    },
    "g10": {
      "HP": 536,
      "MATK": 114,
      "MDEF": 18,
      "Magic Crit": 3,
      "MP Charge": 8
    },
    "total": {
      "HP": 536,
      "MATK": 114,
      "MDEF": 18,
      "Magic Crit": 3,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Magic Crit": 2
    },
    {
      "grade": 2,
      "MP Charge": 2
    },
    {
      "grade": 3,
      "Magic Crit": 2
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "Magic Crit": 3
    },
    {
      "grade": 6,
      "MP Charge": 3
    },
    {
      "grade": 7,
      "Magic Crit": 4
    },
    {
      "grade": 8,
      "MP Charge": 3
    },
    {
      "grade": 9,
      "Magic Crit": 5
    },
    {
      "grade": 10,
      "MP Charge": 4
    },
    {
      "grade": 11,
      "Magic Crit": 5
    }
  ]
};;;;;;;;
