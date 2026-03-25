// Character data: alluring-naked-apron-zilka
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "alluring-naked-apron-zilka",
  "name": "Alluring Naked Apron: Zilka",
  "displayName": "Alluring Naked Apron: Zilka",
  "baseName": "Zilka",
  "title": "Alluring Naked Apron",
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 385,
  "weaponType": "Strike",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "image": "Zilka",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "158cm",
    "bust": "100cm (J Cup)",
    "waist": "61cm",
    "hips": "85cm"
  },
  "credits": {
    "illustration": {
      "japanese": "ねぶそく",
      "romanized": ""
    },
    "voice": {
      "japanese": "すずな",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2143
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Delicious Magic♪",
      "icon": "skill001/skill0019",
      "description": "Applies Action Speed 20%UP to self for 12 seconds, MP Recovery 200, all alliesinflict8 Magic Attack 18%+35 UP",
      "descriptionLv1": "Applies Action Speed 20%UP to self for 12 seconds, MP Recovery 200, all alliesinflict8 Magic Attack 18%+35 UP",
      "descriptionLv90": "Applies Action Speed 20%UP to self for 12 seconds, MP Recovery 200, all alliesinflict8 Magic Attack 18%+665 UP",
      "target": "Self",
      "castTime": 1.1,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Action Speed + Lv5",
        "MP Recovery",
        "Magic Attack + Lv4"
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
          "name": "Magic Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 7.0
        }
      ],
      "duration": 12
    },
    {
      "slot": 3,
      "name": "How is it...? Does it suit me...?",
      "icon": "skill001/skill0011",
      "description": "2 enemies8s Blind for and Physical Attack -15%-40 DOWN for 10 seconds , 10 Magic Attack -15%-40 DOWN",
      "descriptionLv1": "2 enemies8s Blind for and Physical Attack -15%-40 DOWN for 10 seconds , 10 Magic Attack -15%-40 DOWN",
      "descriptionLv90": "2 enemies8s Blind for and Physical Attack -15%-4000 DOWN for 10 seconds , 10 Magic Attack -15%-40 DOWN",
      "target": "Farthest Enemy",
      "castTime": 1.1,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Blind",
        "Physical Attack - LvMax",
        "Magic Attack - LvMax"
      ],
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 8
        },
        {
          "name": "Physical Attack - LvMax",
          "value": -40,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -4.0
        },
        {
          "name": "Magic Attack - LvMax",
          "value": -40,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -4.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Cute Heart Shot!",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the farthest enemy, Ultimate activation beforeApplies Magic Attack UP(LV 1) to self for 8 seconds, enemy has,Ultimate activation beforeapply to self8 Mind Type ATK UP(LV 1)",
      "effect": "1000% + 1200",
      "buffEffects": [
        {
          "name": "Magic Attack + Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Mind Type ATK + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Cute Heart Shot!",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the farthest enemy, Ultimate activation beforeApplies Magic Attack UP(LV 2) to self for 8 seconds, enemy has,Ultimate activation beforeapply to self8 Mind Type ATK UP(LV 2)",
      "effect": "1200% + 1400",
      "buffEffects": [
        {
          "name": "Magic Attack + Ultimate Lv2",
          "value": 25,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Mind Type ATK + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Cute Heart Shot!",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to the farthest enemy, Ultimate activation beforeApplies Magic Attack UP(LV 3) to self for 8 seconds, enemy has,Ultimate activation beforeapply to self8 Mind Type ATK UP(LV 3)",
      "effect": "1350% + 1550",
      "buffEffects": [
        {
          "name": "Magic Attack + Ultimate Lv3",
          "value": 29,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Mind Type ATK + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Cute Heart Shot!",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to the farthest enemy, Ultimate activation beforeApplies Magic Attack UP(LV 4) to self for 8 seconds, enemy has,Ultimate activation beforeapply to self8 Mind Type ATK UP(LV 4)",
      "effect": "1450% + 1700",
      "buffEffects": [
        {
          "name": "Magic Attack + Ultimate Lv4",
          "value": 32,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Mind Type ATK + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Cute Heart Shot!",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to the farthest enemy, Ultimate activation beforeApplies Magic Attack UP(LV 5) to self for 8 seconds, enemy has,Ultimate activation beforeapply to self8 Mind Type ATK UP(LV 5)",
      "effect": "1500% + 1800",
      "buffEffects": [
        {
          "name": "Magic Attack + Ultimate Lv5",
          "value": 35,
          "type": "percent",
          "duration": 8
        },
        {
          "name": "Mind Type ATK + Ultimate Lv5",
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
      "name": "Ultimate Damage +, Shield",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Shield (+25%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Shield",
          "value": 25,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Alluring Naked Apron: Zilka",
  "id": 2143,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt",
    "MP Recovery"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 192,
    "MATK": 321,
    "DEF": 32,
    "MDEF": 82
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
    "speedValue": "0.8"
  },
  "slug": "alluring-naked-apron-zilka"
};

export const stats = {
  "id": "alluring-naked-apron-zilka",
  "characterId": 2143,
  "name": "【Alluring Naked Apron】Zilka",
  "rarity": "SSR",
  "element": "想",
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
      "base": 2092,
      "lv90": 10460
    },
    "atk": {
      "base": 192,
      "lv90": 963
    },
    "matk": {
      "base": 321,
      "lv90": 1606
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
      "base": 75,
      "lv90": 120
    },
    "magicCrit": {
      "base": 125,
      "lv90": 200
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
      "HP": 628,
      "MATK": 96,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 722,
      "MATK": 111,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 847,
      "MATK": 130,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 941,
      "MATK": 145,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1778,
      "MATK": 297,
      "DEF": 6,
      "MDEF": 23,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 4916,
      "MATK": 779,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 6,
      "MDEF": 23,
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
      "HP": 220,
      "MATK": 34,
      "MDEF": 4,
      "Magic Crit": 3,
      "Accuracy": 9
    },
    "g2": {
      "HP": 264,
      "MATK": 41,
      "MDEF": 4,
      "Magic Crit": 3,
      "Block": 16
    },
    "g3": {
      "HP": 308,
      "MATK": 47,
      "MDEF": 5,
      "Magic Crit": 4,
      "Accuracy": 12
    },
    "g4": {
      "HP": 352,
      "MATK": 54,
      "MDEF": 6,
      "Magic Crit": 4,
      "Block": 21
    },
    "g5": {
      "HP": 396,
      "MATK": 61,
      "MDEF": 7,
      "Magic Crit": 5,
      "MP Charge": 5
    },
    "g6": {
      "HP": 440,
      "MATK": 68,
      "MDEF": 7,
      "Magic Crit": 5,
      "Accuracy": 18
    },
    "g7": {
      "HP": 484,
      "MATK": 74,
      "MDEF": 8,
      "Magic Crit": 6,
      "Block": 29
    },
    "g8": {
      "HP": 529,
      "MATK": 81,
      "MDEF": 9,
      "Magic Crit": 6,
      "Accuracy": 21
    },
    "g9": {
      "HP": 573,
      "MATK": 88,
      "MDEF": 10,
      "Magic Crit": 7,
      "Block": 34
    },
    "g10": {
      "HP": 617,
      "MATK": 95,
      "MDEF": 10,
      "Magic Crit": 7,
      "MP Charge": 7
    },
    "total": {
      "HP": 617,
      "MATK": 95,
      "MDEF": 10,
      "Magic Crit": 7,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 27
    },
    {
      "grade": 2,
      "MP Charge": 1
    },
    {
      "grade": 3,
      "MATK": 37
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "MATK": 48
    },
    {
      "grade": 6,
      "MP Charge": 2
    },
    {
      "grade": 7,
      "MATK": 59
    },
    {
      "grade": 8,
      "MP Charge": 3
    },
    {
      "grade": 9,
      "MATK": 70
    },
    {
      "grade": 10,
      "MP Charge": 3
    },
    {
      "grade": 11,
      "MATK": 74
    }
  ]
};;;;;;;;
