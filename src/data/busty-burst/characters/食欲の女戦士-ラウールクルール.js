// Character data: 食欲の女戦士-ラウールクルール
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "食欲の女戦士-ラウールクルール",
  "name": "食欲の女戦士: ラウール＆クルール",
  "displayName": "食欲の女戦士: ラウール＆クルール",
  "baseName": "ラウール＆クルール",
  "title": "食欲の女戦士",
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Very Fast",
  "range": 220,
  "weaponType": "Slash",
  "skillTypes": [
    "弱體化、妨害"
  ],
  "image": "ラウール＆クルール",
  "introduction": null,
  "profile": {
    "height": "140cm、140cm",
    "bust": "112cm (O Cup)",
    "waist": "62cm",
    "hips": "82cm"
  },
  "credits": {
    "illustration": {
      "japanese": "カゲシオ",
      "romanized": ""
    },
    "voice": {
      "japanese": "羽生羽見、藤宮きせき",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2223
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "ミラクルツインアタック",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Bleed (HP −-800 after acting, cannot be removed) for 20 seconds and Block-13 DOWN for 6 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Bleed (HP −-800 after acting, cannot be removed) for 20 seconds and Block-13 DOWN for 6 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Bleed (HP −-8000 after acting, cannot be removed) for 20 seconds and Block-26 DOWN for 6 seconds",
      "target": "Nearest Enemy",
      "castTime": 0.6,
      "damageScaling": "400% ATK",
      "baseDamage": "+300",
      "levelGrowth": "+20",
      "lvl1": "400% + 300",
      "lvl90": "400% + 286",
      "effects": [
        "Bleed",
        "Block- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Bleed",
          "value": -800,
          "type": "flat",
          "duration": 20,
          "levelGrowth": -80.0
        },
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.15
        }
      ],
      "duration": 20
    },
    {
      "slot": 3,
      "name": "Full Tummy Pose!",
      "icon": "skill001/skill0019",
      "description": "Applies Action Speed UP to self for 12 seconds and Physical Attack +35 UP for 12 seconds , 20000damageUP(max100000 (max stacking: )",
      "descriptionLv1": "Applies Action Speed UP to self for 12 seconds and Physical Attack +35 UP for 12 seconds , 20000damageUP(max100000 (max stacking: )",
      "descriptionLv90": "Applies Action Speed UP to self for 12 seconds and Physical Attack +665 UP for 12 seconds , 20000damageUP(max100000 (max stacking: )",
      "target": "Self",
      "castTime": 0.7,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Action Speed + Lv4",
        "Physical Attack + Lv4",
        "Damage UP"
      ],
      "buffEffects": [
        {
          "name": "Action Speed + Lv4",
          "value": 17,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Physical Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 12,
          "levelGrowth": 7.0
        },
        {
          "name": "Damage UP",
          "value": 9999,
          "type": "percent",
          "duration": 9999
        }
      ],
      "duration": 9999
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "ミラクルドリーム・シューティングスター☆ミ",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 3 seconds and Physical Defense DOWN(LV 1) for 10 seconds",
      "effect": "1300% + 700",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "ミラクルツインアタック",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Bleed (HP −-800 after acting, cannot be removed) for 20 seconds and Block-13 DOWN for 6 seconds",
      "effect": "400% + 300",
      "buffEffects": [
        {
          "name": "Bleed",
          "value": -800,
          "type": "flat",
          "duration": 20
        },
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 6
        }
      ]
    },
    {
      "rank": 3,
      "name": "Full Tummy Pose!",
      "icon": "skill001/skill0019",
      "description": "Applies Action Speed UP to self for 12 seconds and Physical Attack +35 UP for 12 seconds , 20000damageUP(max100000 (max stacking: )",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Action Speed + Lv4",
          "value": 17,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Physical Attack + Lv4",
          "value": 35,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Damage UP",
          "value": 9999,
          "type": "percent",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 4,
      "name": "ミラクルドリーム・シューティングスター☆ミ",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 3 seconds and Physical Defense DOWN(LV 1) for 10 seconds",
      "effect": "1300% + 700",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "flat",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "ミラクルドリーム・シューティングスター☆ミ",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 4 seconds and Physical Defense DOWN(LV 2) for 10 seconds",
      "effect": "1560% + 900",
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -25,
          "type": "flat",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Action Speed +, Fire Type ATK +",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+15), Fire Type ATK + (+1%)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "flat"
        },
        {
          "name": "Fire Type ATK +",
          "value": 1,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Skill Enhancement Regol Cost DOWNFire",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Skill Enhancement Regol Cost DOWNFire (+5%)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Skill Enhancement Regol Cost DOWNFire",
          "value": 5,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "食欲の女戦士: ラウール＆クルール",
  "id": 2223,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "弱體化、妨害"
  ],
  "baseStats": {
    "HP": 2364,
    "ATK": 257,
    "MATK": 154,
    "DEF": 35,
    "MDEF": 14
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Very Fast",
    "speedValue": "0.3"
  },
  "slug": "食欲の女戦士-ラウールクルール"
};

export const stats = {
  "id": "食欲の女戦士-ラウールクルール",
  "characterId": 2223,
  "name": "【食欲の女戦士】ラウール＆クルール",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "弱體化、妨害"
  ],
  "baseStats": {
    "hp": {
      "base": 2364,
      "lv90": 11823
    },
    "atk": {
      "base": 257,
      "lv90": 1288
    },
    "matk": {
      "base": 154,
      "lv90": 773
    },
    "def": {
      "base": 35,
      "lv90": 70
    },
    "mdef": {
      "base": 14,
      "lv90": 28
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
      "base": 53,
      "lv90": 85
    },
    "magicCrit": {
      "base": 32,
      "lv90": 51
    },
    "hpRegen": {
      "base": 118,
      "lv90": 413
    },
    "mpRegen": {
      "base": 61,
      "lv90": 239
    },
    "healPwr": {
      "base": 100,
      "lv90": 250
    },
    "mpCharge": {
      "base": 45,
      "lv90": 45
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
      "HP": 709,
      "ATK": 77,
      "Block": 15,
      "MP Charge": 4
    },
    "lb2": {
      "HP": 816,
      "ATK": 89,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 958,
      "ATK": 104,
      "Block": 20,
      "MP Charge": 6
    },
    "lb4": {
      "HP": 1064,
      "ATK": 116,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 2010,
      "ATK": 239,
      "DEF": 11,
      "MDEF": 3,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 5557,
      "ATK": 625,
      "Block": 75,
      "MP Charge": 10,
      "Accuracy": 30,
      "DEF": 11,
      "MDEF": 3,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "MP Charge": 2
    },
    "gp3": {
      "ATK": 120,
      "MP Charge": 2
    },
    "gp4": {
      "ATK": 120,
      "MP Charge": 4
    },
    "gp5": {
      "ATK": 200,
      "MP Charge": 4
    },
    "gp6": {
      "ATK": 200,
      "MP Charge": 6
    },
    "gp7": {
      "ATK": 280,
      "MP Charge": 6
    },
    "gp8": {
      "ATK": 280,
      "MP Charge": 8
    },
    "gp9": {
      "ATK": 360,
      "MP Charge": 8
    },
    "gp10": {
      "ATK": 360,
      "MP Charge": 10
    },
    "total": {
      "ATK": 360,
      "MP Charge": 10
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 249,
      "ATK": 27,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 299,
      "ATK": 33,
      "Phys Crit": 1,
      "Block": 16
    },
    "g3": {
      "HP": 348,
      "ATK": 38,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 398,
      "ATK": 43,
      "Phys Crit": 2,
      "Block": 21
    },
    "g5": {
      "HP": 448,
      "ATK": 49,
      "Phys Crit": 2,
      "MP Charge": 4
    },
    "g6": {
      "HP": 498,
      "ATK": 54,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 548,
      "ATK": 60,
      "Phys Crit": 2,
      "Block": 29
    },
    "g8": {
      "HP": 597,
      "ATK": 65,
      "Phys Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 647,
      "ATK": 71,
      "Phys Crit": 3,
      "Block": 34
    },
    "g10": {
      "HP": 697,
      "ATK": 76,
      "Phys Crit": 3,
      "MP Charge": 6
    },
    "total": {
      "HP": 697,
      "ATK": 76,
      "Phys Crit": 3,
      "MP Charge": 6
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "ATK": 21
    },
    {
      "grade": 2,
      "MP Charge": 1
    },
    {
      "grade": 3,
      "ATK": 30
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "ATK": 39
    },
    {
      "grade": 6,
      "MP Charge": 2
    },
    {
      "grade": 7,
      "ATK": 47
    },
    {
      "grade": 8,
      "MP Charge": 2
    },
    {
      "grade": 9,
      "ATK": 56
    },
    {
      "grade": 10,
      "MP Charge": 3
    },
    {
      "grade": 11,
      "ATK": 62
    }
  ]
};;;;;;;;
