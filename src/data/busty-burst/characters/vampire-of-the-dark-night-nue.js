// Character data: vampire-of-the-dark-night-nue
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "vampire-of-the-dark-night-nue",
  "name": "Vampire of the Dark Night: Nue",
  "displayName": "Vampire of the Dark Night: Nue",
  "baseName": "Nue",
  "title": "Vampire of the Dark Night",
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Fast",
  "range": 270,
  "weaponType": "Ranged",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Nue",
  "introduction": "Middle Row、Physical、Attacker",
  "profile": {
    "height": "182cm",
    "bust": "111cm (L Cup)",
    "waist": "65cm",
    "hips": "96cm"
  },
  "credits": {
    "illustration": {
      "japanese": "山田ゴゴゴ",
      "romanized": ""
    },
    "voice": {
      "japanese": "有賀桃",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2173
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Jaw Gate - Bloodstained Fang",
      "icon": "skill001/skill0002",
      "description": "Deals physical damage to the nearest enemy and inflicts Bleed (HP −-500 after acting) for 15 seconds , activation beforeself6 Physical Attack 15%+30 UP, restore 6% of damage dealt as own HP5%HP",
      "descriptionLv1": "Deals physical damage to the nearest enemy and inflicts Bleed (HP −-500 after acting) for 15 seconds , activation beforeself6 Physical Attack 15%+30 UP, restore 6% of damage dealt as own HP5%HP",
      "descriptionLv90": "Deals physical damage to the nearest enemy and inflicts Bleed (HP −-5000 after acting) for 15 seconds , activation beforeself6 Physical Attack 15%+480 UP, restore 6% of damage dealt as own HP5%HP",
      "target": "Nearest Enemy",
      "castTime": 0.8,
      "damageScaling": "400% ATK",
      "baseDamage": "+500",
      "levelGrowth": "+20",
      "lvl1": "400% + 500",
      "lvl90": "400% + 945",
      "effects": [
        "Bleed",
        "Physical Attack + Lv3"
      ],
      "buffEffects": [
        {
          "name": "Bleed",
          "value": -500,
          "type": "flat",
          "duration": 15,
          "levelGrowth": -50.0
        },
        {
          "name": "Physical Attack + Lv3",
          "value": 30,
          "type": "flat",
          "duration": 6,
          "levelGrowth": 5.0
        }
      ],
      "duration": 15
    },
    {
      "slot": 3,
      "name": "Demon Eye Release",
      "icon": "skill001/skill0011",
      "description": "1 enemies5s Confusion for, 5s Curse for, 10 Physical Defense -23%-50 DOWN",
      "descriptionLv1": "1 enemies5s Confusion for, 5s Curse for, 10 Physical Defense -23%-50 DOWN",
      "descriptionLv90": "1 enemies5s Confusion for, 5s Curse for, 10 Physical Defense -23%-320 DOWN",
      "target": "Nearest Enemy",
      "castTime": 0.95,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Confusion",
        "Curse",
        "Physical Defense - Lv5"
      ],
      "buffEffects": [
        {
          "name": "Confusion",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Curse",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "Physical Defense - Lv5",
          "value": -50,
          "type": "flat",
          "duration": 10,
          "levelGrowth": -3.0
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Strange Tale - Mountain of Corpses River of Blood",
      "icon": "skill001/skill0003_1",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 1) for 10 seconds and Mind Type Damage Taken UP(LV 1) for 8 seconds",
      "effect": "1100% + 800",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -20,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Mind Type Damage Taken+ Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Strange Tale - Mountain of Corpses River of Blood",
      "icon": "skill001/skill0003_2",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 2) for 10 seconds and Mind Type Damage Taken UP(LV 2) for 8 seconds",
      "effect": "1320% + 1000",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -25,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Mind Type Damage Taken+ Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Strange Tale - Mountain of Corpses River of Blood",
      "icon": "skill001/skill0003_3",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 3) for 10 seconds and Mind Type Damage Taken UP(LV 3) for 8 seconds",
      "effect": "1470% + 1200",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv3",
          "value": -29,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Mind Type Damage Taken+ Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Strange Tale - Mountain of Corpses River of Blood",
      "icon": "skill001/skill0003_4",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 4) for 10 seconds and Mind Type Damage Taken UP(LV 4) for 8 seconds",
      "effect": "1590% + 1300",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv4",
          "value": -32,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Mind Type Damage Taken+ Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Strange Tale - Mountain of Corpses River of Blood",
      "icon": "skill001/skill0003_5",
      "description": "Deals physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV 5) for 10 seconds and Mind Type Damage Taken UP(LV 5) for 8 seconds",
      "effect": "1700% + 1400",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv5",
          "value": -35,
          "type": "percent",
          "duration": 10
        },
        {
          "name": "Mind Type Damage Taken+ Ultimate Lv5",
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
      "name": "Action Speed +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Action Speed + (+15)",
      "effectValues": [
        {
          "name": "Action Speed +",
          "value": 15,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Skill Damage +, Physical Critical Damage+",
      "icon": "skill001/skill1001",
      "effect": "Skill Damage + (+30%), Physical Critical Damage+ (+90%)",
      "effectValues": [
        {
          "name": "Skill Damage +",
          "value": 30,
          "type": "percent"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 90,
          "type": "percent"
        }
      ]
    }
  ],
  "name": "Vampire of the Dark Night: Nue",
  "id": 2173,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1273,
    "ATK": 222,
    "MATK": 133,
    "DEF": 288,
    "MDEF": 192
  },
  "skillRotation": {
    "opening": "Skill3 → Skill2 → Basic",
    "loop": "Basic → Basic → Skill2 → Basic → Skill3 → Basic → Skill2 → Basic → Basic → Basic → Skill2 → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.59"
  },
  "slug": "vampire-of-the-dark-night-nue"
};

export const stats = {
  "id": "vampire-of-the-dark-night-nue",
  "characterId": 2173,
  "name": "【Vampire of the Dark Night】Nue",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1273,
      "lv90": 6366
    },
    "atk": {
      "base": 222,
      "lv90": 1111
    },
    "matk": {
      "base": 133,
      "lv90": 666
    },
    "def": {
      "base": 288,
      "lv90": 576
    },
    "mdef": {
      "base": 192,
      "lv90": 384
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
      "base": 416,
      "lv90": 665
    },
    "magicCrit": {
      "base": 249,
      "lv90": 398
    },
    "hpRegen": {
      "base": 63,
      "lv90": 222
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
      "HP": 382,
      "ATK": 67,
      "Block": 15,
      "MP Charge": 4
    },
    "lb2": {
      "HP": 439,
      "ATK": 77,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 516,
      "ATK": 90,
      "Block": 20,
      "MP Charge": 6
    },
    "lb4": {
      "HP": 573,
      "ATK": 100,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1083,
      "ATK": 201,
      "DEF": 88,
      "MDEF": 39,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 2993,
      "ATK": 535,
      "Block": 75,
      "MP Charge": 10,
      "Accuracy": 30,
      "DEF": 88,
      "MDEF": 39,
      "Heal Pwr": 19
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
      "HP": 134,
      "ATK": 23,
      "Phys Crit": 9,
      "Accuracy": 9
    },
    "g2": {
      "HP": 161,
      "ATK": 28,
      "Phys Crit": 11,
      "Block": 16
    },
    "g3": {
      "HP": 188,
      "ATK": 33,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 214,
      "ATK": 37,
      "Phys Crit": 14,
      "Block": 21
    },
    "g5": {
      "HP": 241,
      "ATK": 42,
      "Phys Crit": 16,
      "MP Charge": 4
    },
    "g6": {
      "HP": 268,
      "ATK": 47,
      "Phys Crit": 18,
      "Accuracy": 18
    },
    "g7": {
      "HP": 295,
      "ATK": 52,
      "Phys Crit": 19,
      "Block": 29
    },
    "g8": {
      "HP": 322,
      "ATK": 56,
      "Phys Crit": 21,
      "Accuracy": 21
    },
    "g9": {
      "HP": 349,
      "ATK": 61,
      "Phys Crit": 23,
      "Block": 34
    },
    "g10": {
      "HP": 375,
      "ATK": 66,
      "Phys Crit": 25,
      "MP Charge": 6
    },
    "total": {
      "HP": 375,
      "ATK": 66,
      "Phys Crit": 25,
      "MP Charge": 6
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "Phys Crit": 14
    },
    {
      "grade": 2,
      "ATK": 20
    },
    {
      "grade": 3,
      "Phys Crit": 19
    },
    {
      "grade": 4,
      "ATK": 27
    },
    {
      "grade": 5,
      "Phys Crit": 25
    },
    {
      "grade": 6,
      "ATK": 33
    },
    {
      "grade": 7,
      "Phys Crit": 31
    },
    {
      "grade": 8,
      "ATK": 40
    },
    {
      "grade": 9,
      "Phys Crit": 36
    },
    {
      "grade": 10,
      "ATK": 47
    },
    {
      "grade": 11,
      "Phys Crit": 40
    }
  ]
};;;;;;;;
