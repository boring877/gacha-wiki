// Character data: erotic-nun-soltina
// Auto-generated from game data (hero_1.xml + hero_group.xml)

export const info = {
  "slug": "erotic-nun-soltina",
  "name": "Erotic Nun: Soltina",
  "displayName": "Erotic Nun: Soltina",
  "baseName": "Soltina",
  "title": "Erotic Nun",
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "attackType": "Physical",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Very Fast",
  "range": 400,
  "weaponType": "Slash",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Soltina",
  "introduction": "Middle Row、Physical、Attacker",
  "profile": {
    "height": "162cm",
    "bust": "100cm (J Cup)",
    "waist": "60cm",
    "hips": "85cm"
  },
  "credits": {
    "illustration": {
      "japanese": "サブロー",
      "romanized": ""
    },
    "voice": {
      "japanese": "柏木逢花",
      "romanized": ""
    }
  },
  "obtain": {
    "type": "unknown",
    "source": ""
  },
  "characterId": 2196
};


































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Clematis",
      "icon": "skill001/skill0002",
      "description": "6 nearest enemies dealphysical damage and inflicts Accuracy -9 DOWN for 6 seconds, [Binding]4(treated as, [Binding]1 afterHP-300, Block-0 5, max20), 20[Binding] when damage +50%, inflict 3s [], damage +50%, [Binding]+1",
      "descriptionLv1": "6 nearest enemies dealphysical damage and inflicts Accuracy -9 DOWN for 6 seconds, [Binding]4(treated as, [Binding]1 afterHP-300, Block-0 5, max20), 20[Binding] when damage +50%, inflict 3s [], damage +50%, [Binding]+1",
      "descriptionLv90": "6 nearest enemies dealphysical damage and inflicts Accuracy -18 DOWN for 6 seconds, [Binding]4(treated as, [Binding]1 afterHP-300, Block-0 5, max20), 20[Binding] when damage +50%, inflict 3s [], damage +50%, [Binding]+1",
      "target": "Nearest Enemy",
      "castTime": 0.8,
      "damageScaling": "70% ATK",
      "baseDamage": "+150",
      "levelGrowth": "+3",
      "lvl1": "70% + 150",
      "lvl90": null,
      "effects": [
        "Accuracy - Lv3",
        "Bind",
        "Bind"
      ],
      "buffEffects": [
        {
          "name": "Accuracy - Lv3",
          "value": -9,
          "type": "flat",
          "duration": 6,
          "levelGrowth": -0.1
        },
        {
          "name": "Bind",
          "value": 0,
          "type": "flat",
          "duration": 9999
        },
        {
          "name": "Bind",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ],
      "duration": 9999
    },
    {
      "slot": 3,
      "name": "My beloved you...",
      "icon": "skill001/skill0019",
      "description": "Applies Action Speed UP to self for 10 seconds and Physical Attack +40 UP for 10 seconds , 10 Debuff Resistance UP, [], SpeedUPselfall allies",
      "descriptionLv1": "Applies Action Speed UP to self for 10 seconds and Physical Attack +40 UP for 10 seconds , 10 Debuff Resistance UP, [], SpeedUPselfall allies",
      "descriptionLv90": "Applies Action Speed UP to self for 10 seconds and Physical Attack +850 UP for 10 seconds , 10 Debuff Resistance UP, [], SpeedUPselfall allies",
      "target": "Self",
      "castTime": 0.95,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "effects": [
        "Action Speed + Lv4",
        "Physical Attack + Lv5",
        "Debuff Resistance Lv2"
      ],
      "buffEffects": [
        {
          "name": "Action Speed + Lv4",
          "value": 17,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 10,
          "levelGrowth": 9.0
        },
        {
          "name": "Debuff Resistance Lv2",
          "value": 0,
          "type": "percent",
          "duration": 10
        }
      ],
      "duration": 10
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Mashari Shoo Shoo",
      "icon": "skill001/skill0003_1",
      "description": "6 nearest enemies dealphysical damage and inflicts Physical Defense DOWN(LV 1) for 10 seconds, [Binding]4(treated as, [Binding]1 afterHP-300, Block-0 5, max20), 20[Binding] when damage +30%, inflict 5s (LV 1), (1 afterHP-6000, (cannot be removed))[], damage +50%, [Binding]+1",
      "effect": "280% + 400",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Bind",
          "value": 0,
          "type": "flat",
          "duration": 9999
        },
        {
          "name": "Bind",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 2,
      "name": "Clematis",
      "icon": "skill001/skill0002",
      "description": "6 nearest enemies dealphysical damage and inflicts Accuracy -9 DOWN for 6 seconds, [Binding]4(treated as, [Binding]1 afterHP-300, Block-0 5, max20), 20[Binding] when damage +50%, inflict 3s [], damage +50%, [Binding]+1",
      "effect": "70% + 150",
      "buffEffects": [
        {
          "name": "Accuracy - Lv3",
          "value": -9,
          "type": "flat",
          "duration": 6
        },
        {
          "name": "Bind",
          "value": 0,
          "type": "flat",
          "duration": 9999
        },
        {
          "name": "Bind",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 3,
      "name": "My beloved you...",
      "icon": "skill001/skill0019",
      "description": "Applies Action Speed UP to self for 10 seconds and Physical Attack +40 UP for 10 seconds , 10 Debuff Resistance UP, [], SpeedUPselfall allies",
      "effect": "300% + 0",
      "buffEffects": [
        {
          "name": "Action Speed + Lv4",
          "value": 17,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Physical Attack + Lv5",
          "value": 40,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Debuff Resistance Lv2",
          "value": 0,
          "type": "percent",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Mashari Shoo Shoo",
      "icon": "skill001/skill0003_1",
      "description": "6 nearest enemies dealphysical damage and inflicts Physical Defense DOWN(LV 1) for 10 seconds, [Binding]4(treated as, [Binding]1 afterHP-300, Block-0 5, max20), 20[Binding] when damage +30%, inflict 5s (LV 1), (1 afterHP-6000, (cannot be removed))[], damage +50%, [Binding]+1",
      "effect": "280% + 400",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv1",
          "value": -15,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Bind",
          "value": 0,
          "type": "flat",
          "duration": 9999
        },
        {
          "name": "Bind",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ]
    },
    {
      "rank": 5,
      "name": "Mashari Shoo Shoo",
      "icon": "skill001/skill0003_2",
      "description": "6 nearest enemies dealphysical damage and inflicts Physical Defense DOWN(LV 2) for 10 seconds, [Binding]4(treated as, [Binding]1 afterHP-300, Block-0 5, max20), 20[Binding] when damage +30%, inflict 5s (LV 2), (1 afterHP-6000, (cannot be removed))[], damage +50%, [Binding]+1",
      "effect": "330% + 500",
      "buffEffects": [
        {
          "name": "Physical Defense - Ultimate Lv2",
          "value": -20,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Bind",
          "value": 0,
          "type": "flat",
          "duration": 9999
        },
        {
          "name": "Bind",
          "value": 0,
          "type": "flat",
          "duration": 9999
        }
      ]
    }
  ],
  "passives": [
    {
      "slot": 1,
      "name": "Physical Attack +, MP Recovery",
      "icon": "skill001/skill1001",
      "effect": "Physical Attack + (+389), MP Recovery (+30%)",
      "effectValues": [
        {
          "name": "Physical Attack +",
          "value": 389,
          "type": "flat"
        },
        {
          "name": "MP Recovery",
          "value": 30,
          "type": "percent"
        }
      ]
    },
    {
      "slot": 2,
      "name": "Ultimate Damage +, Physical Attack +",
      "icon": "skill001/skill1001",
      "effect": "Ultimate Damage + (+15%), Physical Attack + (+259)",
      "effectValues": [
        {
          "name": "Ultimate Damage +",
          "value": 15,
          "type": "percent"
        },
        {
          "name": "Physical Attack +",
          "value": 259,
          "type": "flat"
        }
      ]
    }
  ],
  "name": "Erotic Nun: Soltina",
  "id": 2196,
  "rarity": "SSR",
  "element": "Mind",
  "role": "Attacker",
  "tags": [
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 1546,
    "ATK": 190,
    "MATK": 114,
    "DEF": 127,
    "MDEF": 190
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
    "speedValue": "0.38"
  },
  "slug": "erotic-nun-soltina"
};

export const stats = {
  "id": "erotic-nun-soltina",
  "characterId": 2196,
  "name": "【Erotic Nun】Soltina",
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
      "base": 1546,
      "lv90": 7730
    },
    "atk": {
      "base": 190,
      "lv90": 952
    },
    "matk": {
      "base": 114,
      "lv90": 571
    },
    "def": {
      "base": 127,
      "lv90": 254
    },
    "mdef": {
      "base": 190,
      "lv90": 380
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
      "HP": 464,
      "ATK": 57,
      "Block": 15,
      "MP Charge": 4
    },
    "lb2": {
      "HP": 533,
      "ATK": 66,
      "Accuracy": 13,
      "Block": 17
    },
    "lb3": {
      "HP": 626,
      "ATK": 77,
      "Block": 20,
      "MP Charge": 6
    },
    "lb4": {
      "HP": 696,
      "ATK": 86,
      "Accuracy": 17,
      "Block": 23
    },
    "lb5": {
      "HP": 1315,
      "ATK": 177,
      "DEF": 45,
      "MDEF": 38,
      "Heal Pwr": 19
    },
    "total": {
      "HP": 3634,
      "ATK": 463,
      "Block": 75,
      "MP Charge": 10,
      "Accuracy": 30,
      "DEF": 45,
      "MDEF": 38,
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
      "HP": 163,
      "ATK": 20,
      "Phys Crit": 9,
      "Accuracy": 9
    },
    "g2": {
      "HP": 195,
      "ATK": 24,
      "Phys Crit": 11,
      "Block": 16
    },
    "g3": {
      "HP": 228,
      "ATK": 28,
      "Phys Crit": 12,
      "Accuracy": 12
    },
    "g4": {
      "HP": 260,
      "ATK": 32,
      "Phys Crit": 14,
      "Block": 21
    },
    "g5": {
      "HP": 293,
      "ATK": 36,
      "Phys Crit": 16,
      "MP Charge": 4
    },
    "g6": {
      "HP": 326,
      "ATK": 40,
      "Phys Crit": 18,
      "Accuracy": 18
    },
    "g7": {
      "HP": 358,
      "ATK": 44,
      "Phys Crit": 19,
      "Block": 29
    },
    "g8": {
      "HP": 391,
      "ATK": 48,
      "Phys Crit": 21,
      "Accuracy": 21
    },
    "g9": {
      "HP": 423,
      "ATK": 52,
      "Phys Crit": 23,
      "Block": 34
    },
    "g10": {
      "HP": 456,
      "ATK": 56,
      "Phys Crit": 25,
      "MP Charge": 6
    },
    "total": {
      "HP": 456,
      "ATK": 56,
      "Phys Crit": 25,
      "MP Charge": 6
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Charge": 1
    },
    {
      "grade": 2,
      "ATK": 17
    },
    {
      "grade": 3,
      "MP Charge": 2
    },
    {
      "grade": 4,
      "ATK": 23
    },
    {
      "grade": 5,
      "MP Charge": 2
    },
    {
      "grade": 6,
      "ATK": 29
    },
    {
      "grade": 7,
      "MP Charge": 2
    },
    {
      "grade": 8,
      "ATK": 34
    },
    {
      "grade": 9,
      "MP Charge": 3
    },
    {
      "grade": 10,
      "ATK": 40
    },
    {
      "grade": 11,
      "MP Charge": 4
    }
  ]
};;;;;;;;
