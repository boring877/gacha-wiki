// Character data: little-devil-idol-nina
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "little-devil-idol-nina",
  "name": "Little Devil Idol: Nina",
  "displayName": "Little Devil Idol: Nina",
  "baseName": "Nina",
  "title": "Little Devil Idol",
  "rarity": "SSR",
  "element": "Mind",
  "role": "Support",
  "attackType": "Magic",
  "position": {
    "roman": "III",
    "number": 3
  },
  "actionSpeed": "Slow",
  "range": 550,
  "weaponType": "Throw",
  "skillTypes": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "image": "Nina",
  "introduction": "Back Row、Magical、Support",
  "profile": {
    "height": "158cm",
    "bust": "100cm (H Cup)",
    "waist": "63cm",
    "hips": "93cm"
  },
  "credits": {
    "illustration": {
      "japanese": "七瀬瑞穂",
      "romanized": ""
    },
    "voice": {
      "japanese": "麦芽ぷりん",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2201
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "SweetSweetSmile",
      "icon": "skill001/skill0019",
      "description": "Applies Physical Defense 20%+140 UP to all allies for 10 seconds and Magic Defense 20%+140 UP for 10 seconds , 10 Healing Shield (300)",
      "descriptionLv1": "Applies Physical Defense 20%+140 UP to all allies for 10 seconds and Magic Defense 20%+140 UP for 10 seconds , 10 Healing Shield (300)",
      "descriptionLv90": "Applies Physical Defense 20%+320 UP to all allies for 10 seconds and Magic Defense 20%+320 UP for 10 seconds , 10 Healing Shield (300)",
      "target": "All Allies",
      "castTime": 1.25,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Physical Defense + Lv3",
        "Magic Defense+ Lv3",
        "Healing Shield Lv5"
      ],
      "buffEffects": [
        {
          "name": "Physical Defense + Lv3",
          "value": 140,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 2.0
        },
        {
          "name": "Magic Defense+ Lv3",
          "value": 140,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 2.0
        },
        {
          "name": "Healing Shield Lv5",
          "value": 300,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Advance Notice",
      "icon": "skill001/skill0019",
      "description": "Applies Action Speed 14%UP to all allies for 8 seconds and Physical Attack 12%+25 UP for 8 seconds , 8 Magic Attack 12%+25 UP",
      "descriptionLv1": "Applies Action Speed 14%UP to all allies for 8 seconds and Physical Attack 12%+25 UP for 8 seconds , 8 Magic Attack 12%+25 UP",
      "descriptionLv90": "Applies Action Speed 14%UP to all allies for 8 seconds and Physical Attack 12%+295 UP for 8 seconds , 8 Magic Attack 12%+295 UP",
      "target": "All Allies",
      "castTime": 1.25,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Action Speed + Lv3",
        "Physical Attack + Lv2",
        "Magic Attack + Lv2"
      ],
      "buffEffects": [
        {
          "name": "Action Speed + Lv3",
          "value": 14,
          "type": "flat",
          "duration": 8
        },
        {
          "name": "Physical Attack + Lv2",
          "value": 25,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 3.0
        },
        {
          "name": "Magic Attack + Lv2",
          "value": 25,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 3.0
        }
      ],
      "duration": 8
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Kiss in the Galaxy",
      "icon": "skill001/skill0020_1",
      "description": "to all enemiesmagic damage, inflict 3s , all allies5 MP Regeneration UP(LV 1), 10 Damage UP(LV 1)",
      "effect": "400% + 500",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 3
        },
        {
          "name": "MP Regeneration + Ultimate Lv1",
          "value": 30,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Damage + Ultimate Lv1",
          "value": 10,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Kiss in the Galaxy",
      "icon": "skill001/skill0020_2",
      "description": "to all enemiesmagic damage, inflict 4s , all allies5 MP Regeneration UP(LV 2), 10 Damage UP(LV 2)",
      "effect": "520% + 600",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "MP Regeneration + Ultimate Lv2",
          "value": 40,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Damage + Ultimate Lv2",
          "value": 13,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Kiss in the Galaxy",
      "icon": "skill001/skill0020_3",
      "description": "to all enemiesmagic damage, inflict 4s , all allies5 MP Regeneration UP(LV 3), 10 Damage UP(LV 3)",
      "effect": "600% + 700",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 4
        },
        {
          "name": "MP Regeneration + Ultimate Lv3",
          "value": 45,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Damage + Ultimate Lv3",
          "value": 16,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Kiss in the Galaxy",
      "icon": "skill001/skill0020_4",
      "description": "to all enemiesmagic damage, inflict 5s , all allies5 MP Regeneration UP(LV 4), 10 Damage UP(LV 4)",
      "effect": "660% + 750",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "MP Regeneration + Ultimate Lv4",
          "value": 50,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Damage + Ultimate Lv4",
          "value": 18,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Kiss in the Galaxy",
      "icon": "skill001/skill0020_5",
      "description": "to all enemiesmagic damage, inflict 5s , all allies5 MP Regeneration UP(LV 5), 10 Damage UP(LV 5)",
      "effect": "700% + 800",
      "buffEffects": [
        {
          "name": "Blind",
          "value": 0,
          "type": "unknown",
          "duration": 5
        },
        {
          "name": "MP Regeneration + Ultimate Lv5",
          "value": 55,
          "type": "percent",
          "duration": 5
        },
        {
          "name": "Damage + Ultimate Lv5",
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
      "name": "Max HP +, Action Speed +",
      "icon": "skill001/skill1005",
      "effect": "Max HP + (+3444), Action Speed + (+10)",
      "effectValues": [
        {
          "name": "Max HP +",
          "value": 3444,
          "type": "flat"
        },
        {
          "name": "Action Speed +",
          "value": 10,
          "type": "flat"
        }
      ]
    },
    {
      "slot": 2,
      "name": "MP Regeneration, Physical Critical Damage+, Magic Critical Damage+",
      "icon": "skill001/skill1005",
      "effect": "MP Regeneration (+200%), Physical Critical Damage+ (+20), Magic Critical Damage+ (0)",
      "effectValues": [
        {
          "name": "MP Regeneration",
          "value": 200,
          "type": "percent"
        },
        {
          "name": "Physical Critical Damage+",
          "value": 20,
          "type": "flat"
        },
        {
          "name": "Magic Critical Damage+",
          "value": 0,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Little Devil Idol: Nina",
  "id": 2201,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1546,
    "ATK": 232,
    "MATK": 386,
    "DEF": 158,
    "MDEF": 158
  },
  "skillRotation": {
    "opening": "Skill2 → Skill3 → Basic",
    "loop": "Basic → Basic → Basic → Basic → Skill2 → Skill3 → Basic → Basic → Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Slow",
    "speedValue": "1.1"
  },
  "slug": "little-devil-idol-nina"
};

export const stats = {
  "id": "little-devil-idol-nina",
  "characterId": 2201,
  "name": "【Little Devil Idol】Nina",
  "rarity": "SSR",
  "element": "想",
  "weapon": "",
  "role": "Support",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1546,
      "lv90": 7730
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
      "base": 158,
      "lv90": 316
    },
    "mdef": {
      "base": 158,
      "lv90": 316
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
      "base": 77,
      "lv90": 270
    },
    "mpRegen": {
      "base": 62,
      "lv90": 249
    },
    "healPwr": {
      "base": 100,
      "lv90": 250
    },
    "mpCharge": {
      "base": 71,
      "lv90": 71
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
      "MATK": 116,
      "Block": 15,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 533,
      "MATK": 133,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 626,
      "MATK": 157,
      "Block": 20,
      "MP Charge": 9
    },
    "lb4": {
      "HP": 696,
      "MATK": 174,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1385,
      "MATK": 318,
      "DEF": 32,
      "MDEF": 48,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3704,
      "MATK": 898,
      "Block": 75,
      "MP Charge": 16,
      "Accuracy": 30,
      "DEF": 32,
      "MDEF": 48,
      "Heal Pwr": 19
    }
  },
  "gpAbility": {
    "gp1": {
      "HP": 300
    },
    "gp2": {
      "HP": 300,
      "MP Cost Down": 3
    },
    "gp3": {
      "HP": 750,
      "MP Cost Down": 3
    },
    "gp4": {
      "HP": 750,
      "MP Cost Down": 5
    },
    "gp5": {
      "HP": 1200,
      "MP Cost Down": 5
    },
    "gp6": {
      "HP": 1200,
      "MP Cost Down": 6
    },
    "gp7": {
      "HP": 1650,
      "MP Cost Down": 6
    },
    "gp8": {
      "HP": 1650,
      "MP Cost Down": 7
    },
    "gp9": {
      "HP": 2100,
      "MP Cost Down": 7
    },
    "gp10": {
      "HP": 2100,
      "MP Cost Down": 8
    },
    "total": {
      "HP": 2100,
      "MP Cost Down": 8
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 163,
      "MATK": 41,
      "MDEF": 10,
      "Magic Crit": 1,
      "Accuracy": 9
    },
    "g2": {
      "HP": 195,
      "MATK": 49,
      "MDEF": 12,
      "Magic Crit": 1,
      "Block": 16
    },
    "g3": {
      "HP": 228,
      "MATK": 57,
      "MDEF": 14,
      "Magic Crit": 2,
      "Accuracy": 12
    },
    "g4": {
      "HP": 260,
      "MATK": 65,
      "MDEF": 16,
      "Magic Crit": 2,
      "Block": 21
    },
    "g5": {
      "HP": 293,
      "MATK": 73,
      "MDEF": 18,
      "Magic Crit": 2,
      "MP Charge": 6
    },
    "g6": {
      "HP": 326,
      "MATK": 81,
      "MDEF": 20,
      "Magic Crit": 2,
      "Accuracy": 18
    },
    "g7": {
      "HP": 358,
      "MATK": 90,
      "MDEF": 22,
      "Magic Crit": 2,
      "Block": 29
    },
    "g8": {
      "HP": 391,
      "MATK": 98,
      "MDEF": 24,
      "Magic Crit": 3,
      "Accuracy": 21
    },
    "g9": {
      "HP": 423,
      "MATK": 106,
      "MDEF": 27,
      "Magic Crit": 3,
      "Block": 34
    },
    "g10": {
      "HP": 456,
      "MATK": 114,
      "MDEF": 29,
      "Magic Crit": 3,
      "MP Charge": 9
    },
    "total": {
      "HP": 456,
      "MATK": 114,
      "MDEF": 29,
      "Magic Crit": 3,
      "MP Charge": 9
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "HP": 129
    },
    {
      "grade": 2,
      "MP Charge": 2
    },
    {
      "grade": 3,
      "HP": 180
    },
    {
      "grade": 4,
      "MP Charge": 2
    },
    {
      "grade": 5,
      "HP": 232
    },
    {
      "grade": 6,
      "MP Charge": 3
    },
    {
      "grade": 7,
      "HP": 283
    },
    {
      "grade": 8,
      "MP Charge": 4
    },
    {
      "grade": 9,
      "HP": 335
    },
    {
      "grade": 10,
      "MP Charge": 4
    },
    {
      "grade": 11,
      "HP": 370
    }
  ]
};;;;;;;
