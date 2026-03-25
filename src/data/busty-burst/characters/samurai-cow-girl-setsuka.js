// Character data: samurai-cow-girl-setsuka
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "samurai-cow-girl-setsuka",
  "name": "Samurai Cow Girl: Setsuka",
  "displayName": "Samurai Cow Girl: Setsuka",
  "baseName": "Setsuka",
  "title": "Samurai Cow Girl",
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "I",
    "number": 1
  },
  "actionSpeed": "Fast",
  "range": 240,
  "weaponType": "Slash",
  "skillTypes": [
    "Disrupt",
    "Debuff"
  ],
  "image": "Setsuka",
  "introduction": "Front Row、Physical、Attacker",
  "profile": {
    "height": "166cm",
    "bust": "112cm (L Cup)",
    "waist": "60cm",
    "hips": "87cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Lioreo",
      "romanized": ""
    },
    "voice": {
      "japanese": "水野七海",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2094
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Fragrance drifting in the air!",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and applies Hit-Based Physical Damage UP(50%+550, 4 hit(s)) to self for 15 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and applies Hit-Based Physical Damage UP(50%+550, 4 hit(s)) to self for 15 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and applies Hit-Based Physical Damage UP(50%+550, 49504 hit(s)) to self for 15 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "310% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+25",
      "lvl1": "310% + 150",
      "lvl90": "310% + 49100",
      "effects": [
        "Hit-Based Physical Damage + Lv5"
      ],
      "buffEffects": [
        {
          "name": "Hit-Based Physical Damage + Lv5",
          "value": 4,
          "type": "flat",
          "duration": 15,
          "levelGrowth": 550.0
        }
      ],
      "duration": 15
    },
    {
      "slot": 3,
      "name": "Ah, bound and swinging!",
      "icon": "skill001/skill0011",
      "description": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds and Block-13 DOWN for 10 seconds",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds and Block-13 DOWN for 10 seconds",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Stun for 2 seconds and Block-26 DOWN for 10 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "270% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+20",
      "lvl1": "270% + 100",
      "lvl90": "270% + 86",
      "effects": [
        "Stun",
        "Block- Lv5"
      ],
      "buffEffects": [
        {
          "name": "Stun",
          "value": 0,
          "type": "unknown",
          "duration": 2
        },
        {
          "name": "Block- Lv5",
          "value": -13,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -0.15
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Swift Storm Cowgirl Style",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemyguaranteed hit and inflicts Physical Defense DOWN(LV 1) for 10 seconds",
      "effect": "1120% + 500",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Swift Storm Cowgirl Style",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemyguaranteed hit and inflicts Physical Defense DOWN(LV 2) for 10 seconds",
      "effect": "1350% + 600",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Swift Storm Cowgirl Style",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemyguaranteed hit and inflicts Physical Defense DOWN(LV 3) for 10 seconds",
      "effect": "1500% + 700",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Swift Storm Cowgirl Style",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemyguaranteed hit and inflicts Physical Defense DOWN(LV 4) for 10 seconds",
      "effect": "1600% + 800",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Swift Storm Cowgirl Style",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemyguaranteed hit and inflicts Physical Defense DOWN(LV 5) for 10 seconds",
      "effect": "1650% + 900",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, Accuracy +",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), Accuracy + (+20)",
      "effectValues": [
        {
          "name": "Physical Attack +",
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
      "name": "Skill Damage +, Skill Enhancement Regol Cost DOWNFire",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Skill Enhancement Regol Cost DOWNFire (+5%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
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
  "name": "Samurai Cow Girl: Setsuka",
  "id": 2094,
  "rarity": "SSR",
  "element": "Fire",
  "role": "Attacker",
  "tags": [
    "Disrupt",
    "Debuff"
  ],
  "baseStats": {
    "HP": 1972,
    "ATK": 300,
    "MATK": 180,
    "DEF": 82,
    "MDEF": 32
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "samurai-cow-girl-setsuka"
};

export const stats = {
  "id": "samurai-cow-girl-setsuka",
  "characterId": 2094,
  "name": "【Samurai Cow Girl】Setsuka",
  "rarity": "SSR",
  "element": "火",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Disrupt",
    "Debuff"
  ],
  "baseStats": {
    "hp": {
      "base": 1972,
      "lv90": 9861
    },
    "atk": {
      "base": 300,
      "lv90": 1503
    },
    "matk": {
      "base": 180,
      "lv90": 902
    },
    "def": {
      "base": 82,
      "lv90": 164
    },
    "mdef": {
      "base": 32,
      "lv90": 64
    },
    "accuracy": {
      "base": 60,
      "lv90": 120
    },
    "block": {
      "base": 55,
      "lv90": 165
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
      "base": 98,
      "lv90": 344
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
      "HP": 592,
      "ATK": 90,
      "Block": 17,
      "MP Charge": 4
    },
    "lb2": {
      "HP": 680,
      "ATK": 104,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 799,
      "ATK": 122,
      "Block": 22,
      "MP Charge": 6
    },
    "lb4": {
      "HP": 888,
      "ATK": 135,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1677,
      "ATK": 278,
      "DEF": 23,
      "MDEF": 6,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4636,
      "ATK": 729,
      "Block": 83,
      "MP Charge": 10,
      "Accuracy": 30,
      "DEF": 23,
      "MDEF": 6,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "ATK": 40
    },
    "gp2": {
      "ATK": 40,
      "Accuracy": 3
    },
    "gp3": {
      "ATK": 120,
      "Accuracy": 3
    },
    "gp4": {
      "ATK": 120,
      "Accuracy": 7
    },
    "gp5": {
      "ATK": 200,
      "Accuracy": 7
    },
    "gp6": {
      "ATK": 200,
      "Accuracy": 10
    },
    "gp7": {
      "ATK": 280,
      "Accuracy": 10
    },
    "gp8": {
      "ATK": 280,
      "Accuracy": 13
    },
    "gp9": {
      "ATK": 360,
      "Accuracy": 13
    },
    "gp10": {
      "ATK": 360,
      "Accuracy": 16
    },
    "total": {
      "ATK": 360,
      "Accuracy": 16
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 208,
      "ATK": 32,
      "Phys Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 249,
      "ATK": 38,
      "Phys Crit": 1,
      "Block": 17
    },
    "g3": {
      "HP": 291,
      "ATK": 44,
      "Phys Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 332,
      "ATK": 51,
      "Phys Crit": 2,
      "Block": 23
    },
    "g5": {
      "HP": 374,
      "ATK": 57,
      "Phys Crit": 2,
      "MP Charge": 4
    },
    "g6": {
      "HP": 415,
      "ATK": 63,
      "Phys Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 457,
      "ATK": 70,
      "Phys Crit": 2,
      "Block": 32
    },
    "g8": {
      "HP": 498,
      "ATK": 76,
      "Phys Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 540,
      "ATK": 82,
      "Phys Crit": 3,
      "Block": 38
    },
    "g10": {
      "HP": 581,
      "ATK": 89,
      "Phys Crit": 3,
      "MP Charge": 6
    },
    "total": {
      "HP": 581,
      "ATK": 89,
      "Phys Crit": 3,
      "MP Charge": 6
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Block": 5
    },
    {
      "grade": 2,
      "ATK": 27
    },
    {
      "grade": 3,
      "Block": 6
    },
    {
      "grade": 4,
      "ATK": 36
    },
    {
      "grade": 5,
      "Block": 8
    },
    {
      "grade": 6,
      "ATK": 45
    },
    {
      "grade": 7,
      "Block": 10
    },
    {
      "grade": 8,
      "ATK": 54
    },
    {
      "grade": 9,
      "Block": 12
    },
    {
      "grade": 10,
      "ATK": 63
    },
    {
      "grade": 11,
      "Block": 13
    }
  ]
};;;;;;;;
