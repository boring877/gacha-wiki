// Character data: maid-erotic-enchanter-ilugio
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "maid-erotic-enchanter-ilugio",
  "name": "Maid Erotic Enchanter: Ilugio",
  "displayName": "Maid Erotic Enchanter: Ilugio",
  "baseName": "Ilugio",
  "title": "Maid Erotic Enchanter",
  "rarity": "SSR",
  "element": "Light",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 250,
  "weaponType": "Pierce",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Ilugio",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "171cm",
    "bust": "108cm (J Cup)",
    "waist": "64cm",
    "hips": "93cm"
  },
  "credits": {
    "illustration": {
      "japanese": "カゲシオ",
      "romanized": ""
    },
    "voice": {
      "japanese": "あかしゆき",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2161
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Cleaning Machine",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -18%-30 DOWN for 6 seconds, 1.5",
      "descriptionLv1": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -18%-30 DOWN for 6 seconds, 1.5",
      "descriptionLv90": "Deals physical damage to the 3 nearest enemies and inflicts Physical Defense -18%-210 DOWN for 6 seconds, 1.5",
      "target": "Nearest Enemy",
      "castTime": 0.8,
      "damageScaling": "105% ATK",
      "baseDamage": "+200",
      "levelGrowth": "+6",
      "lvl1": "105% + 200",
      "lvl90": null,
      "effects": [
        "Physical Defense - Lv3",
        "Cleanse"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense - Lv3",
          "value": -30,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -2.0
        },
        {
          "name": "Cleanse",
          "value": 0,
          "type": "unknown",
          "duration": 1
        }
      ],
      "duration": 6
    },
    {
      "slot": 3,
      "name": "Freisetzung,Bumerang",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Block-13 DOWN for 10 seconds, 2s Stun for",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Block-13 DOWN for 10 seconds, 2s Stun for",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Block-26 DOWN for 10 seconds, 2s Stun for",
      "target": "Nearest Enemy",
      "castTime": 0.8,
      "damageScaling": "340% ATK",
      "baseDamage": "+600",
      "levelGrowth": "+20",
      "lvl1": "340% + 600",
      "lvl90": null,
      "effects": [
        "Block- Lv5",
        "Stun"
      ],
      "buffEffects": [
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.15
        },
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "I, the sweeping that devours all",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the 5 nearest enemies and inflicts Action Speed DOWN(LV 1) for 10 seconds, Ultimate activation beforeapply to self10 Physical Attack UP(LV 1)",
      "effect": "240% + 200",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -10,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Attack + Ultimate Lv1",
          "value": 20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "I, the sweeping that devours all",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the 5 nearest enemies and inflicts Action Speed DOWN(LV 2) for 10 seconds, Ultimate activation beforeapply to self10 Physical Attack UP(LV 2)",
      "effect": "290% + 250",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -13,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Attack + Ultimate Lv2",
          "value": 25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "I, the sweeping that devours all",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the 5 nearest enemies and inflicts Action Speed DOWN(LV 3) for 10 seconds, Ultimate activation beforeapply to self10 Physical Attack UP(LV 3)",
      "effect": "325% + 300",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -16,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Attack + Ultimate Lv3",
          "value": 29,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "I, the sweeping that devours all",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the 5 nearest enemies and inflicts Action Speed DOWN(LV 4) for 10 seconds, Ultimate activation beforeapply to self10 Physical Attack UP(LV 4)",
      "effect": "350% + 350",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -18,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Attack + Ultimate Lv4",
          "value": 32,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "I, the sweeping that devours all",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the 5 nearest enemies and inflicts Action Speed DOWN(LV 5) for 10 seconds, Ultimate activation beforeapply to self10 Physical Attack UP(LV 5)",
      "effect": "365% + 400",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv5",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Attack + Ultimate Lv5",
          "value": 35,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Critical Damage+, Holy Type ATK +",
      "icon": "skill001/skill1001",
      "effect": "Physical Critical Damage+ (+90%), Holy Type ATK + (+5%)",
      "effectValues": [
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "percent"
        },
        {
          "name": "Holy Type ATK +",
          "value": 5,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Skill Enhancement Regol Cost DOWNHoly",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Skill Enhancement Regol Cost DOWNHoly (+5%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Skill Enhancement Regol Cost DOWNHoly",
          "value": 5,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Maid Erotic Enchanter: Ilugio",
  "id": 2161,
  "rarity": "SSR",
  "element": "Light",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1546,
    "ATK": 261,
    "MATK": 157,
    "DEF": 140,
    "MDEF": 176
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.55"
  },
  "slug": "maid-erotic-enchanter-ilugio"
};

export const stats = {
  "id": "maid-erotic-enchanter-ilugio",
  "characterId": 2161,
  "name": "【Maid Erotic Enchanter】Ilugio",
  "rarity": "SSR",
  "element": "聖",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1546,
      "lv90": 7730
    },
    "atk": {
      "base": 261,
      "lv90": 1307
    },
    "matk": {
      "base": 157,
      "lv90": 785
    },
    "def": {
      "base": 140,
      "lv90": 267
    },
    "mdef": {
      "base": 176,
      "lv90": 366
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
      "base": 207,
      "lv90": 331
    },
    "magicCrit": {
      "base": 124,
      "lv90": 198
    },
    "hpRegen": {
      "base": 77,
      "lv90": 270
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
      "HP": 464,
      "ATK": 78,
      "Block": 15,
      "MP Charge": 5
    },
    "lb2": {
      "HP": 533,
      "ATK": 90,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 626,
      "ATK": 106,
      "Block": 20,
      "MP Charge": 7
    },
    "lb4": {
      "HP": 696,
      "ATK": 118,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1315,
      "ATK": 243,
      "DEF": 46,
      "MDEF": 37
    },
    "total": {
      "HP": 3634,
      "ATK": 635,
      "Block": 75,
      "MP Charge": 12,
      "Accuracy": 30,
      "DEF": 46,
      "MDEF": 37
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "Phys Crit": 10
    },
    "gp3": {
      "ATK": 120,
      "Phys Crit": 10
    },
    "gp4": {
      "ATK": 120,
      "Phys Crit": 30
    },
    "gp5": {
      "ATK": 200,
      "Phys Crit": 30
    },
    "gp6": {
      "ATK": 200,
      "Phys Crit": 50
    },
    "gp7": {
      "ATK": 280,
      "Phys Crit": 50
    },
    "gp8": {
      "ATK": 280,
      "Phys Crit": 70
    },
    "gp9": {
      "ATK": 360,
      "Phys Crit": 70
    },
    "gp10": {
      "ATK": 360,
      "Phys Crit": 90
    },
    "total": {
      "ATK": 360,
      "Phys Crit": 90
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 163,
      "ATK": 28,
      "Phys Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 195,
      "ATK": 33,
      "Phys Crit": 5,
      "Block": 16
    },
    "g3": {
      "HP": 228,
      "ATK": 39,
      "Phys Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 260,
      "ATK": 44,
      "Phys Crit": 7,
      "Block": 21
    },
    "g5": {
      "HP": 293,
      "ATK": 50,
      "Phys Crit": 8,
      "MP Charge": 4
    },
    "g6": {
      "HP": 326,
      "ATK": 55,
      "Phys Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 358,
      "ATK": 61,
      "Phys Crit": 10,
      "Block": 29
    },
    "g8": {
      "HP": 391,
      "ATK": 66,
      "Phys Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 423,
      "ATK": 72,
      "Phys Crit": 11,
      "Block": 34
    },
    "g10": {
      "HP": 456,
      "ATK": 77,
      "Phys Crit": 12,
      "MP Charge": 7
    },
    "total": {
      "HP": 456,
      "ATK": 77,
      "Phys Crit": 12,
      "MP Charge": 7
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 22
    },
    {
      "grade": 2,
      "Phys Crit": 7
    },
    {
      "grade": 3,
      "ATK": 31
    },
    {
      "grade": 4,
      "Phys Crit": 10
    },
    {
      "grade": 5,
      "ATK": 39
    },
    {
      "grade": 6,
      "Phys Crit": 12
    },
    {
      "grade": 7,
      "ATK": 48
    },
    {
      "grade": 8,
      "Phys Crit": 15
    },
    {
      "grade": 9,
      "ATK": 57
    },
    {
      "grade": 10,
      "Phys Crit": 17
    },
    {
      "grade": 11,
      "ATK": 63
    }
  ]
};;;;;;;;
