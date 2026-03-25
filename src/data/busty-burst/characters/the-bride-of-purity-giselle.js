// Character data: the-bride-of-purity-giselle
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "the-bride-of-purity-giselle",
  "name": "The Bride of Purity: Giselle",
  "displayName": "The Bride of Purity: Giselle",
  "baseName": "Giselle",
  "title": "The Bride of Purity",
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Normal",
  "range": 330,
  "weaponType": "Pierce",
  "skillTypes": [
    "Buff",
    "Debuff"
  ],
  "image": "Giselle",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "167cm",
    "bust": "96cm (I Cup)",
    "waist": "58cm",
    "hips": "87cm"
  },
  "credits": {
    "illustration": {
      "japanese": "失笑宣告",
      "romanized": ""
    },
    "voice": {
      "japanese": "手塚りょうこ",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2141
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Clair Storia",
      "icon": "skill001/skill0010",
      "description": "Deals magic damage to the nearest enemy and inflicts Magic Defense-23%-50 DOWN for 6 seconds and Burn(HP --150 per second) for 15 seconds",
      "descriptionLv1": "Deals magic damage to the nearest enemy and inflicts Magic Defense-23%-50 DOWN for 6 seconds and Burn(HP --150 per second) for 15 seconds",
      "descriptionLv90": "Deals magic damage to the nearest enemy and inflicts Magic Defense-23%-320 DOWN for 6 seconds and Burn(HP --1500 per second) for 15 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.3,
      "damageScaling": "370% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "370% + 500",
      "lvl90": "370% + -835",
      "effects": [
        "Magic Defense- Lv5",
        "Burn Lv5"
      ],
      "buffEffects": [
        {
          "name": "Magic Defense- Lv5",
          "value": -50,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -3.0
        },
        {
          "name": "Burn Lv5",
          "value": -150,
          "type": "flat",
          "duration": 15,
          "levelGrowth": -15.0
        }
      ],
      "duration": 15
    },
    {
      "slot": 3,
      "name": "Does it suit me?",
      "icon": "skill001/skill0019",
      "description": "Applies Action Speed 14%UP to all allies for 15 seconds and Hit-Based Magic Damage UP(40%+450, 3 hit(s)) for 15 seconds",
      "descriptionLv1": "Applies Action Speed 14%UP to all allies for 15 seconds and Hit-Based Magic Damage UP(40%+450, 3 hit(s)) for 15 seconds",
      "descriptionLv90": "Applies Action Speed 14%UP to all allies for 15 seconds and Hit-Based Magic Damage UP(40%+450, 40503 hit(s)) for 15 seconds",
      "target": "All Allies",
      "castTime": 1.3,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Action Speed + Lv3",
        "Hit-Based Magic Damage +"
      ],
      "buffEffects": [
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Hit-Based Magic Damage +",
          "value": 3,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 450.0
        }
      ],
      "duration": 15
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Tobt Love Song",
      "icon": "skill001/skill0006_1",
      "description": "Deals magic damage to the nearest enemy and inflicts Burn(LV 1) for 15 secondsand applies Burn(LV 1) to self for 15 seconds",
      "effect": "1100% + 800",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv1",
          "value": -2000,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Fire Type ATK + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Tobt Love Song",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the nearest enemy and inflicts Burn(LV 2) for 15 secondsand applies Burn(LV 2) to self for 15 seconds",
      "effect": "1320% + 1000",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv2",
          "value": -2500,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Fire Type ATK + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 9
        }
      ]
    },
    {
      "rank": 3,
      "name": "Tobt Love Song",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to the nearest enemy and inflicts Burn(LV 3) for 15 secondsand applies Burn(LV 3) to self for 15 seconds",
      "effect": "1470% + 1150",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv3",
          "value": -3000,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Fire Type ATK + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 9
        }
      ]
    },
    {
      "rank": 4,
      "name": "Tobt Love Song",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to the nearest enemy and inflicts Burn(LV 4) for 15 secondsand applies Burn(LV 4) to self for 15 seconds",
      "effect": "1590% + 1300",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv4",
          "value": -3500,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Fire Type ATK + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Tobt Love Song",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to the nearest enemy and inflicts Burn(LV 5) for 15 secondsand applies Burn(LV 5) to self for 15 seconds",
      "effect": "1700% + 1400",
      "buffEffects": [
        {
          "name": "Burn Ultimate Lv5",
          "value": -4000,
          "type": "flat",
          "duration": 15
        },
        {
          "name": "Fire Type ATK + Ultimate Lv5",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Magic Attack +, Normal ATK Inflicts Burn",
      "icon": "skill001/skill1001",
      "effect": "Magic Attack + (+389)",
      "effectValues": [
        {
          "name": "Magic Attack +",
          "value": 389,
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
  "name": "The Bride of Purity: Giselle",
  "id": 2141,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "HP": 1972,
    "ATK": 179,
    "MATK": 299,
    "DEF": 32,
    "MDEF": 82
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Skill2 → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.8"
  },
  "slug": "the-bride-of-purity-giselle"
};

export const stats = {
  "id": "the-bride-of-purity-giselle",
  "characterId": 2141,
  "name": "【The Bride of Purity】Giselle",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1972,
      "lv90": 9861
    },
    "atk": {
      "base": 179,
      "lv90": 896
    },
    "matk": {
      "base": 299,
      "lv90": 1495
    },
    "def": {
      "base": 32,
      "lv90": 89
    },
    "mdef": {
      "base": 82,
      "lv90": 139
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
      "base": 124,
      "lv90": 198
    },
    "magicCrit": {
      "base": 207,
      "lv90": 331
    },
    "hpRegen": {
      "base": 98,
      "lv90": 344
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
      "base": 70,
      "lv90": 70
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
      "HP": 592,
      "MATK": 90,
      "Block": 17,
      "MP Charge": 6
    },
    "lb2": {
      "HP": 680,
      "MATK": 103,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 799,
      "MATK": 121,
      "Block": 22,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 888,
      "MATK": 135,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1677,
      "MATK": 277,
      "DEF": 9,
      "MDEF": 21,
      "Heal Pwr": 25
    },
    "total": {
      "HP": 4636,
      "MATK": 726,
      "Block": 83,
      "MP Charge": 13,
      "Accuracy": 30,
      "DEF": 9,
      "MDEF": 21,
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
      "HP": 208,
      "MATK": 31,
      "MDEF": 4,
      "Magic Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 249,
      "MATK": 38,
      "MDEF": 4,
      "Magic Crit": 5,
      "Block": 17
    },
    "g3": {
      "HP": 291,
      "MATK": 44,
      "MDEF": 5,
      "Magic Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 332,
      "MATK": 50,
      "MDEF": 6,
      "Magic Crit": 7,
      "Block": 23
    },
    "g5": {
      "HP": 374,
      "MATK": 57,
      "MDEF": 7,
      "Magic Crit": 8,
      "MP Charge": 5
    },
    "g6": {
      "HP": 415,
      "MATK": 63,
      "MDEF": 7,
      "Magic Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 457,
      "MATK": 69,
      "MDEF": 8,
      "Magic Crit": 10,
      "Block": 32
    },
    "g8": {
      "HP": 498,
      "MATK": 76,
      "MDEF": 9,
      "Magic Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 540,
      "MATK": 82,
      "MDEF": 10,
      "Magic Crit": 11,
      "Block": 38
    },
    "g10": {
      "HP": 581,
      "MATK": 88,
      "MDEF": 10,
      "Magic Crit": 12,
      "MP Charge": 8
    },
    "total": {
      "HP": 581,
      "MATK": 88,
      "MDEF": 10,
      "Magic Crit": 12,
      "MP Charge": 8
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MATK": 25
    },
    {
      "grade": 2,
      "Magic Crit": 7
    },
    {
      "grade": 3,
      "MATK": 35
    },
    {
      "grade": 4,
      "Magic Crit": 10
    },
    {
      "grade": 5,
      "MATK": 45
    },
    {
      "grade": 6,
      "Magic Crit": 12
    },
    {
      "grade": 7,
      "MATK": 55
    },
    {
      "grade": 8,
      "Magic Crit": 15
    },
    {
      "grade": 9,
      "MATK": 65
    },
    {
      "grade": 10,
      "Magic Crit": 17
    },
    {
      "grade": 11,
      "MATK": 68
    }
  ]
};;;;;;;;
