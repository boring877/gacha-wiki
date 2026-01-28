// Busty Burst Character Skills Data
// Auto-generated from new_characters.json
// Contains skills for 98 characters

export const BUSTY_BURST_SKILLS_DATA = [
  {
    "skills": [
      {
        "slot": 2,
        "name": "Annoying!",
        "icon": "skill001/skill0005",
        "description": "Deals 4905 (MATK x 2.35 + 1850) magic damage to the nearest enemy",
        "descriptionLv1": "Deals 681 (MATK x 2.35 + 70) magic damage to the nearest enemy",
        "descriptionLv90": "Deals 4905 (MATK x 2.35 + 1850) magic damage to the nearest enemy",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "235% ATK",
        "baseDamage": "+70",
        "levelGrowth": "+20",
        "lvl1": "235% + 70",
        "lvl90": "235% + 1850",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "Mm-hmm, I’m the First Queen♪",
        "icon": "skill001/skill0011",
        "description": "Deals 3968 (MATK x 1.88 + 1524) magic damage to the nearest enemy and inflicts Charm for 2 seconds",
        "descriptionLv1": "Deals 588 (MATK x 1.88 + 100) magic damage to the nearest enemy and inflicts Charm for 2 seconds",
        "descriptionLv90": "Deals 3968 (MATK x 1.88 + 1524) magic damage to the nearest enemy and inflicts Charm for 2 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "188% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+16",
        "lvl1": "188% + 100",
        "lvl90": "188% + 1524",
        "effects": [
          "Charm"
        ],
        "buffEffects": [
          {
            "name": "Charm",
            "value": 0,
            "type": "unknown",
            "duration": 2
          }
        ],
        "duration": 2
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "I’ll eat you up!",
        "icon": "skill001/skill0006_1",
        "description": "Deals 4121 (MATK x 3.0 + 221) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
        "effect": "300% + 221",
        "buffEffects": null
      },
      {
        "rank": 2,
        "name": "I’ll eat you up!",
        "icon": "skill001/skill0006_2",
        "description": "Deals 4946 (MATK x 3.6 + 266) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
        "effect": "360% + 266",
        "buffEffects": null
      },
      {
        "rank": 3,
        "name": "I’ll eat you up!",
        "icon": "skill001/skill0006_3",
        "description": "Deals 5566 (MATK x 4.05 + 301) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
        "effect": "405% + 301",
        "buffEffects": null
      },
      {
        "rank": 4,
        "name": "I’ll eat you up!",
        "icon": "skill001/skill0006_4",
        "description": "Deals 6003 (MATK x 4.35 + 349) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
        "effect": "435% + 349",
        "buffEffects": null
      },
      {
        "rank": 5,
        "name": "I’ll eat you up!",
        "icon": "skill001/skill0006_5",
        "description": "Deals 6412 (MATK x 4.65 + 367) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
        "effect": "465% + 367",
        "buffEffects": null
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Charm Resistance LvMax",
        "icon": "skill001/skill1003",
        "effect": "Charm Resistance LvMax (+1%)",
        "effectValues": [
          {
            "name": "Charm Resistance LvMax",
            "value": 1,
            "type": "percent"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Magic Attack +",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+130)",
        "effectValues": [
          {
            "name": "Magic Attack +",
            "value": 130,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Shamshel",
    "id": 2001,
    "rarity": "R",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1491,
      "ATK": 156,
      "MATK": 260,
      "DEF": 46,
      "MDEF": 117
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Basic → Basic → Skill2",
      "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "100% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "r-shamshel"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Edelrant-Style Swordsmanship: Earthstride",
        "icon": "skill001/skill0002",
        "description": "Deals 1906 (ATK x 1.6 + 990) physical damage to the 2 nearest enemies",
        "descriptionLv1": "Deals 282 (ATK x 1.6 + 100) physical damage to the 2 nearest enemies",
        "descriptionLv90": "Deals 1906 (ATK x 1.6 + 990) physical damage to the 2 nearest enemies",
        "target": "Nearest Enemy",
        "castTime": 0.88,
        "damageScaling": "160% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+10",
        "lvl1": "160% + 100",
        "lvl90": "160% + 990",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "Pride of the Royal Guards",
        "icon": "skill001/skill0019",
        "description": "Applies 7 seconds of Physical Defense 15%+189UP and 7 seconds of Magic Defense15%+189UP to self",
        "descriptionLv1": "Applies 7 seconds of Physical Defense 15%+100UP and 7 seconds of Magic Defense15%+100UP to self",
        "descriptionLv90": "Applies 7 seconds of Physical Defense 15%+189UP and 7 seconds of Magic Defense15%+189UP to self",
        "target": "Self",
        "castTime": 0.88,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Defense + Lv2",
          "Magic Defense+ Lv2"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense + Lv2",
            "value": 15,
            "type": "percent",
            "duration": 7
          },
          {
            "name": "Magic Defense+ Lv2",
            "value": 15,
            "type": "percent",
            "duration": 7
          }
        ],
        "duration": 7
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
        "icon": "skill001/skill0003_1",
        "description": "Deals 8064 (ATK x 13.0 + 615) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV1) for 10 seconds",
        "effect": "1300% + 615",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
        "icon": "skill001/skill0003_2",
        "description": "Deals 9014 (ATK x 14.5 + 706) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV2) for 10 seconds",
        "effect": "1450% + 706",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
        "icon": "skill001/skill0003_3",
        "description": "Deals 9814 (ATK x 15.7 + 818) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV3) for 10 seconds",
        "effect": "1570% + 818",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
        "icon": "skill001/skill0003_4",
        "description": "Deals 10634 (ATK x 16.9 + 951) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV4) for 10 seconds",
        "effect": "1690% + 951",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
        "icon": "skill001/skill0003_5",
        "description": "Deals 11091 (ATK x 17.5 + 1064) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV5) for 10 seconds",
        "effect": "1750% + 1064",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Defense +",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+70)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 70,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Critical Damage+",
        "icon": "skill001/skill1001",
        "effect": "Physical Critical Damage+ (+59)",
        "effectValues": [
          {
            "name": "Physical Critical Damage+",
            "value": 59,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Aysis",
    "id": 2002,
    "rarity": "R",
    "element": "Mind",
    "role": "Tank",
    "tags": [
      "Debuff"
    ],
    "baseStats": {
      "HP": 2313,
      "ATK": 114,
      "MATK": 68,
      "DEF": 117,
      "MDEF": 46
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Basic → Basic → Skill2",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Very Fast",
      "speedValue": "0.36"
    },
    "slug": "r-aysis"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Skillet Smash",
        "icon": "skill001/skill0011",
        "description": "Deals 3863 (ATK x 2.33 + 1494) physical damage to the nearest enemy and inflicts Stun for 2 seconds",
        "descriptionLv1": "Deals 542 (ATK x 2.33 + 70) physical damage to the nearest enemy and inflicts Stun for 2 seconds",
        "descriptionLv90": "Deals 3863 (ATK x 2.33 + 1494) physical damage to the nearest enemy and inflicts Stun for 2 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "233% ATK",
        "baseDamage": "+70",
        "levelGrowth": "+16",
        "lvl1": "233% + 70",
        "lvl90": "233% + 1494",
        "effects": [
          "Stun"
        ],
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 2
          }
        ],
        "duration": 2
      },
      {
        "slot": 3,
        "name": "Come Drink Some Milk",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 5102 (5102) to the ally with the lowest HP",
        "descriptionLv1": "Restores HP by 652 (652) to the ally with the lowest HP",
        "descriptionLv90": "Restores HP by 5102 (5102) to the ally with the lowest HP",
        "target": "我方HP最低",
        "castTime": 1.38,
        "damageScaling": "3100% ATK",
        "baseDamage": "+652",
        "levelGrowth": "+50",
        "lvl1": "3100% + 652",
        "lvl90": "3100% + 5102",
        "effects": null,
        "buffEffects": null,
        "duration": null
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Roxanne’s Special Thick Soup",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 1712 (1712) to the 3 nearest allies and inflicts Physical Attack UP(LV1) for 10 seconds",
        "effect": "1800% + 1712",
        "buffEffects": [
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "Roxanne’s Special Thick Soup",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 1833 (1833) to the 3 nearest allies and inflicts Physical Attack UP(LV2) for 10 seconds",
        "effect": "2150% + 1833",
        "buffEffects": [
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "Roxanne’s Special Thick Soup",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 1945 (1945) to the 3 nearest allies and inflicts Physical Attack UP(LV3) for 10 seconds",
        "effect": "2400% + 1945",
        "buffEffects": [
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "Roxanne’s Special Thick Soup",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 2056 (2056) to the 3 nearest allies and inflicts Physical Attack UP(LV4) for 10 seconds",
        "effect": "2600% + 2056",
        "buffEffects": [
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "Roxanne’s Special Thick Soup",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 2134 (2134) to the 3 nearest allies and inflicts Physical Attack UP(LV5) for 10 seconds",
        "effect": "2750% + 2134",
        "buffEffects": [
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Critical Damage+",
        "icon": "skill001/skill1001",
        "effect": "Physical Critical Damage+ (+59)",
        "effectValues": [
          {
            "name": "Physical Critical Damage+",
            "value": 59,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Healing Amount +",
        "icon": "skill001/skill1004",
        "effect": "Healing Amount + (+10%)",
        "effectValues": [
          {
            "name": "Healing Amount +",
            "value": 10,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "Roxanne",
    "id": 2003,
    "rarity": "R",
    "element": "Mind",
    "role": "Support",
    "tags": [
      "Heal",
      "Buff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2578,
      "ATK": 203,
      "MATK": 122,
      "DEF": 56,
      "MDEF": 22
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Basic → Skill3",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "r-roxanne"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Heart Racing",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Attack 12%+292UP to the 3 nearest allies for 8 seconds and Physical Defense 15%+189UP for 8 seconds",
        "descriptionLv1": "Applies Physical Attack 12%+25UP to the 3 nearest allies for 8 seconds and Physical Defense 15%+100UP for 8 seconds",
        "descriptionLv90": "Applies Physical Attack 12%+292UP to the 3 nearest allies for 8 seconds and Physical Defense 15%+189UP for 8 seconds",
        "target": "Nearest Ally",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Attack + Lv2",
          "Physical Defense + Lv2"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack + Lv2",
            "value": 12,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Physical Defense + Lv2",
            "value": 15,
            "type": "percent",
            "duration": 8
          }
        ],
        "duration": 8
      },
      {
        "slot": 3,
        "name": "Mm, good idea!",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 1568 (1568) to the 3 nearest allies and removes debuffs",
        "descriptionLv1": "Restores HP by 500 (500) to the 3 nearest allies and removes debuffs",
        "descriptionLv90": "Restores HP by 1568 (1568) to the 3 nearest allies and removes debuffs",
        "target": "Nearest Ally",
        "castTime": 1.38,
        "damageScaling": "800% ATK",
        "baseDamage": "+500",
        "levelGrowth": "+12",
        "lvl1": "800% + 500",
        "lvl90": "800% + 1568",
        "effects": [
          "Debuff Resistance LvMax"
        ],
        "buffEffects": [
          {
            "name": "Debuff Resistance LvMax",
            "value": 1,
            "type": "percent"
          }
        ],
        "duration": null
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Super Breast Smothering",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 1123 (1123) to the 3 nearest allies and inflicts BlockUP(LV1) for 10 seconds",
        "effect": "1300% + 1123",
        "buffEffects": [
          {
            "name": "Block+ Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "Super Breast Smothering",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 1239 (1239) to the 3 nearest allies and inflicts BlockUP(LV2) for 10 seconds",
        "effect": "1600% + 1239",
        "buffEffects": [
          {
            "name": "Block+ Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "Super Breast Smothering",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 1376 (1376) to the 3 nearest allies and inflicts BlockUP(LV3) for 10 seconds",
        "effect": "1800% + 1376",
        "buffEffects": [
          {
            "name": "Block+ Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "Super Breast Smothering",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 1555 (1555) to the 3 nearest allies and inflicts BlockUP(LV4) for 10 seconds",
        "effect": "2000% + 1555",
        "buffEffects": [
          {
            "name": "Block+ Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "Super Breast Smothering",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 1734 (1734) to the 3 nearest allies and inflicts BlockUP(LV5) for 10 seconds",
        "effect": "2100% + 1734",
        "buffEffects": [
          {
            "name": "Block+ Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Max HP +",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+1447)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 1447,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Healing Amount +",
        "icon": "skill001/skill1004",
        "effect": "Healing Amount + (+10%)",
        "effectValues": [
          {
            "name": "Healing Amount +",
            "value": 10,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "Luceria",
    "id": 2004,
    "rarity": "R",
    "element": "Mind",
    "role": "Tank",
    "tags": [
      "Heal",
      "Buff",
      "Cleanse"
    ],
    "baseStats": {
      "HP": 2423,
      "ATK": 193,
      "MATK": 116,
      "DEF": 117,
      "MDEF": 46
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Skill3",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "r-luceria"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Armor-Breaker Slash",
        "icon": "skill001/skill0002",
        "description": "Deals 5674 (ATK x 2.76 + 1885) physical damage to the enemy with the lowest HP and applies Physical Attack 18%+658UP to self for 6 seconds",
        "descriptionLv1": "Deals 861 (ATK x 2.76 + 105) physical damage to the enemy with the lowest HP and applies Physical Attack 18%+35UP to self for 6 seconds",
        "descriptionLv90": "Deals 5674 (ATK x 2.76 + 1885) physical damage to the enemy with the lowest HP and applies Physical Attack 18%+658UP to self for 6 seconds",
        "target": "Enemy with Lowest HP",
        "castTime": 1.08,
        "damageScaling": "276% ATK",
        "baseDamage": "+105",
        "levelGrowth": "+20",
        "lvl1": "276% + 105",
        "lvl90": "276% + 1885",
        "effects": [
          "Physical Attack + Lv4"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack + Lv4",
            "value": 18,
            "type": "percent",
            "duration": 6
          }
        ],
        "duration": 6
      },
      {
        "slot": 3,
        "name": "Charging Slash",
        "icon": "skill001/skill0009",
        "description": "Deals 4883 (ATK x 2.2 + 1863) physical damage to the enemy with the lowest HP and inflicts Physical Defense -21%+-218DOWN for 10 seconds",
        "descriptionLv1": "Deals 685 (ATK x 2.2 + 83) physical damage to the enemy with the lowest HP and inflicts Physical Defense -21%+-40DOWN for 10 seconds",
        "descriptionLv90": "Deals 4883 (ATK x 2.2 + 1863) physical damage to the enemy with the lowest HP and inflicts Physical Defense -21%+-218DOWN for 10 seconds",
        "target": "Enemy with Lowest HP",
        "castTime": 1.08,
        "damageScaling": "220% ATK",
        "baseDamage": "+83",
        "levelGrowth": "+20",
        "lvl1": "220% + 83",
        "lvl90": "220% + 1863",
        "effects": [
          "Physical Defense - Lv4"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense - Lv4",
            "value": -21,
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
        "name": "Valkenheim-Style Ultimate: Samidare Thrust",
        "icon": "skill001/skill0003_1",
        "description": "Deals 15373 (ATK x 10.6 + 820) physical damage to the enemy with the lowest HP and absorbs  of the damage dealt to restore own HP",
        "effect": "1060% + 820",
        "buffEffects": null
      },
      {
        "rank": 2,
        "name": "Valkenheim-Style Ultimate: Samidare Thrust",
        "icon": "skill001/skill0003_2",
        "description": "Deals 18371 (ATK x 12.7 + 934) physical damage to the enemy with the lowest HP and absorbs  of the damage dealt to restore own HP",
        "effect": "1270% + 934",
        "buffEffects": null
      },
      {
        "rank": 3,
        "name": "Valkenheim-Style Ultimate: Samidare Thrust",
        "icon": "skill001/skill0003_3",
        "description": "Deals 20659 (ATK x 14.3 + 1026) physical damage to the enemy with the lowest HP and absorbs  of the damage dealt to restore own HP",
        "effect": "1430% + 1026",
        "buffEffects": null
      },
      {
        "rank": 4,
        "name": "Valkenheim-Style Ultimate: Samidare Thrust",
        "icon": "skill001/skill0003_4",
        "description": "Deals 22290 (ATK x 15.37 + 1187) physical damage to the enemy with the lowest HP and absorbs  of the damage dealt to restore own HP",
        "effect": "1537% + 1187",
        "buffEffects": null
      },
      {
        "rank": 5,
        "name": "Valkenheim-Style Ultimate: Samidare Thrust",
        "icon": "skill001/skill0003_5",
        "description": "Deals 23825 (ATK x 16.43 + 1267) physical damage to the enemy with the lowest HP and absorbs  of the damage dealt to restore own HP",
        "effect": "1643% + 1267",
        "buffEffects": null
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Max HP +",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+2896)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 2896,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Attack +, Physical Critical Damage+",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack + (+389), Physical Critical Damage+ (+176)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 389,
            "type": "flat"
          },
          {
            "name": "Physical Critical Damage+",
            "value": 176,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Gladys",
    "id": 2005,
    "rarity": "SR",
    "element": "Fire",
    "role": "Attacker",
    "tags": [
      "Debuff"
    ],
    "baseStats": {
      "HP": 1566,
      "ATK": 274,
      "MATK": 164,
      "DEF": 126,
      "MDEF": 50
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "sr-gladys"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Looks like your luck isn’t so good ",
        "icon": "skill001/skill0011",
        "description": "Deals 4226 (MATK x 1.8 + 1890) magic damage to the farthest enemy and inflicts Confusion for 6 seconds",
        "descriptionLv1": "Deals 576 (MATK x 1.8 + 110) magic damage to the farthest enemy and inflicts Confusion for 6 seconds",
        "descriptionLv90": "Deals 4226 (MATK x 1.8 + 1890) magic damage to the farthest enemy and inflicts Confusion for 6 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.58,
        "damageScaling": "180% ATK",
        "baseDamage": "+110",
        "levelGrowth": "+20",
        "lvl1": "180% + 110",
        "lvl90": "180% + 1890",
        "effects": [
          "Confusion"
        ],
        "buffEffects": [
          {
            "name": "Confusion",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ],
        "duration": 6
      },
      {
        "slot": 3,
        "name": "Seems you need a little punishment ",
        "icon": "skill001/skill0011",
        "description": "Deals 3847 (MATK x 1.5 + 1900) magic damage to the farthest enemy and inflicts Sleep for 5 seconds",
        "descriptionLv1": "Deals 508 (MATK x 1.5 + 120) magic damage to the farthest enemy and inflicts Sleep for 5 seconds",
        "descriptionLv90": "Deals 3847 (MATK x 1.5 + 1900) magic damage to the farthest enemy and inflicts Sleep for 5 seconds",
        "target": "Farthest Enemy",
        "castTime": 1.58,
        "damageScaling": "150% ATK",
        "baseDamage": "+120",
        "levelGrowth": "+20",
        "lvl1": "150% + 120",
        "lvl90": "150% + 1900",
        "effects": [
          "Sleep"
        ],
        "buffEffects": [
          {
            "name": "Sleep",
            "value": 0,
            "type": "unknown",
            "duration": 5
          }
        ],
        "duration": 5
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Magic of Light and Shadow",
        "icon": "skill001/skill0012_1",
        "description": "Deals 5618 (MATK x 4.1 + 297) magic damage to all enemies and inflicts Fear Lv1 for 4 seconds",
        "effect": "410% + 297",
        "buffEffects": [
          {
            "name": "Fear Ultimate Lv1",
            "value": -20,
            "type": "flat",
            "duration": 4
          }
        ]
      },
      {
        "rank": 2,
        "name": "Magic of Light and Shadow",
        "icon": "skill001/skill0012_2",
        "description": "Deals 7815 (MATK x 5.74 + 365) magic damage to all enemies and inflicts Fear Lv2 for 4 seconds",
        "effect": "574% + 365",
        "buffEffects": [
          {
            "name": "Fear Ultimate Lv1",
            "value": -20,
            "type": "flat",
            "duration": 4
          }
        ]
      },
      {
        "rank": 3,
        "name": "Magic of Light and Shadow",
        "icon": "skill001/skill0012_3",
        "description": "Deals 9540 (MATK x 6.97 + 493) magic damage to all enemies and inflicts Fear Lv3 for 4 seconds",
        "effect": "697% + 493",
        "buffEffects": [
          {
            "name": "Fear Ultimate Lv1",
            "value": -20,
            "type": "flat",
            "duration": 4
          }
        ]
      },
      {
        "rank": 4,
        "name": "Magic of Light and Shadow",
        "icon": "skill001/skill0012_4",
        "description": "Deals 10643 (MATK x 7.79 + 532) magic damage to all enemies and inflicts Fear Lv4 for 4 seconds",
        "effect": "779% + 532",
        "buffEffects": [
          {
            "name": "Fear Ultimate Lv1",
            "value": -20,
            "type": "flat",
            "duration": 4
          }
        ]
      },
      {
        "rank": 5,
        "name": "Magic of Light and Shadow",
        "icon": "skill001/skill0012_5",
        "description": "Deals 11245 (MATK x 8.2 + 602) magic damage to all enemies and inflicts Fear Lv5 for 4 seconds",
        "effect": "820% + 602",
        "buffEffects": [
          {
            "name": "Fear Ultimate Lv1",
            "value": -20,
            "type": "flat",
            "duration": 4
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Defense +, Magic Defense+",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+70), Magic Defense+ (+70)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 70,
            "type": "flat"
          },
          {
            "name": "Magic Defense+",
            "value": 70,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Max HP +, Magic Attack +",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+1447), Magic Attack + (+259)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 1447,
            "type": "flat"
          },
          {
            "name": "Magic Attack +",
            "value": 259,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Emelaria",
    "id": 2006,
    "rarity": "SR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2707,
      "ATK": 156,
      "MATK": 259,
      "DEF": 25,
      "MDEF": 65
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "110% ATK",
      "speedLabel": "Slow",
      "speedValue": "1.11"
    },
    "slug": "sr-emelaria"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Queen’s Rejection",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Critical Damage109UP to all allies for 8 seconds",
        "descriptionLv1": "Applies Physical Critical Damage20UP to all allies for 8 seconds",
        "descriptionLv90": "Applies Physical Critical Damage109UP to all allies for 8 seconds",
        "target": "All Allies",
        "castTime": 1.78,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Critical Damage+ Lv1"
        ],
        "buffEffects": [
          {
            "name": "Physical Critical Damage+ Lv1",
            "value": 20,
            "type": "flat",
            "duration": 8
          }
        ],
        "duration": 8
      },
      {
        "slot": 3,
        "name": "Queen’s Reward",
        "icon": "skill001/skill0013",
        "description": "Applies Physical Attack 10%+109UP to all allies for 8 seconds",
        "descriptionLv1": "Applies Physical Attack 10%+20UP to all allies for 8 seconds",
        "descriptionLv90": "Applies Physical Attack 10%+109UP to all allies for 8 seconds",
        "target": "All Allies",
        "castTime": 1.78,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Attack + Lv1"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack + Lv1",
            "value": 10,
            "type": "percent",
            "duration": 8
          }
        ],
        "duration": 8
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "The Continent’s Shining Treasure",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 309 (309) to all allies and inflicts Hit-Based Shield(LV1) for 10 seconds",
        "effect": "2400% + 309",
        "buffEffects": [
          {
            "name": "Hit-Based Shield Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "The Continent’s Shining Treasure",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 339 (339) to all allies and inflicts Hit-Based Shield(LV2) for 10 seconds",
        "effect": "2760% + 339",
        "buffEffects": [
          {
            "name": "Hit-Based Shield Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "The Continent’s Shining Treasure",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 380 (380) to all allies and inflicts Hit-Based Shield(LV3) for 10 seconds",
        "effect": "3000% + 380",
        "buffEffects": [
          {
            "name": "Hit-Based Shield Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "The Continent’s Shining Treasure",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 414 (414) to all allies and inflicts Hit-Based Shield(LV4) for 10 seconds",
        "effect": "3240% + 414",
        "buffEffects": [
          {
            "name": "Hit-Based Shield Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "The Continent’s Shining Treasure",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 498 (498) to all allies and inflicts Hit-Based Shield(LV5) for 10 seconds",
        "effect": "3360% + 498",
        "buffEffects": [
          {
            "name": "Hit-Based Shield Ultimate Lv1",
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
        "name": "Block+",
        "icon": "skill001/skill1001",
        "effect": "Block+ (+10)",
        "effectValues": [
          {
            "name": "Block+",
            "value": 10,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Healing Amount +",
        "icon": "skill001/skill1002",
        "effect": "Healing Amount + (+10%)",
        "effectValues": [
          {
            "name": "Healing Amount +",
            "value": 10,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "Aphrodia",
    "id": 2007,
    "rarity": "R",
    "element": "Mind",
    "role": "Support",
    "tags": [
      "Buff",
      "Heal"
    ],
    "baseStats": {
      "HP": 1957,
      "ATK": 275,
      "MATK": 165,
      "DEF": 117,
      "MDEF": 46
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Very Slow",
      "speedValue": "1.36"
    },
    "slug": "r-aphrodia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Shockwave",
        "icon": "skill001/skill0005",
        "description": "Deals 5881 (MATK x 3.2 + 2345) magic damage to the nearest enemy",
        "descriptionLv1": "Deals 827 (MATK x 3.2 + 120) magic damage to the nearest enemy",
        "descriptionLv90": "Deals 5881 (MATK x 3.2 + 2345) magic damage to the nearest enemy",
        "target": "Farthest Enemy",
        "castTime": 1.08,
        "damageScaling": "320% ATK",
        "baseDamage": "+120",
        "levelGrowth": "+25",
        "lvl1": "320% + 120",
        "lvl90": "320% + 2345",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "Light Orb",
        "icon": "skill001/skill0010",
        "description": "Deals 4974 (MATK x 2.8 + 1880) magic damage to the nearest enemy and inflicts Magic Defense-21%+-218DOWN for 10 seconds",
        "descriptionLv1": "Deals 718 (MATK x 2.8 + 100) magic damage to the nearest enemy and inflicts Magic Defense-21%+-40DOWN for 10 seconds",
        "descriptionLv90": "Deals 4974 (MATK x 2.8 + 1880) magic damage to the nearest enemy and inflicts Magic Defense-21%+-218DOWN for 10 seconds",
        "target": "Farthest Enemy",
        "castTime": 1.08,
        "damageScaling": "280% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+20",
        "lvl1": "280% + 100",
        "lvl90": "280% + 1880",
        "effects": [
          "Magic Defense- Lv4"
        ],
        "buffEffects": [
          {
            "name": "Magic Defense- Lv4",
            "value": -21,
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
        "name": "Shining Spear",
        "icon": "skill001/skill0012_1",
        "description": "Deals 7130 (MATK x 6.0 + 500) magic damage to the 2 nearest enemies and inflicts Stun for 3 seconds",
        "effect": "600% + 500",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      },
      {
        "rank": 2,
        "name": "Shining Spear",
        "icon": "skill001/skill0012_2",
        "description": "Deals 8480 (MATK x 7.2 + 524) magic damage to the 2 nearest enemies and inflicts Stun for 3 seconds",
        "effect": "720% + 524",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      },
      {
        "rank": 3,
        "name": "Shining Spear",
        "icon": "skill001/skill0012_3",
        "description": "Deals 9549 (MATK x 8.1 + 599) magic damage to the 2 nearest enemies and inflicts Stun for 3 seconds",
        "effect": "810% + 599",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      },
      {
        "rank": 4,
        "name": "Shining Spear",
        "icon": "skill001/skill0012_4",
        "description": "Deals 10266 (MATK x 8.7 + 653) magic damage to the 2 nearest enemies and inflicts Stun for 3 seconds",
        "effect": "870% + 653",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      },
      {
        "rank": 5,
        "name": "Shining Spear",
        "icon": "skill001/skill0012_5",
        "description": "Deals 10983 (MATK x 9.3 + 707) magic damage to the 2 nearest enemies and inflicts Stun for 3 seconds",
        "effect": "930% + 707",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "MP Recovery+",
        "icon": "skill001/skill1003",
        "effect": "MP Recovery+ (+21)",
        "effectValues": [
          {
            "name": "MP Recovery+",
            "value": 21,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Magic Attack +",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+259)",
        "effectValues": [
          {
            "name": "Magic Attack +",
            "value": 259,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Nerys",
    "id": 2008,
    "rarity": "SR",
    "element": "Wind",
    "role": "Attacker",
    "tags": [
      "Disrupt",
      "Debuff"
    ],
    "baseStats": {
      "HP": 2062,
      "ATK": 132,
      "MATK": 221,
      "DEF": 25,
      "MDEF": 65
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "110% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "sr-nerys"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Even though you want to get so close…",
        "icon": "skill001/skill0002",
        "description": "Deals 5414 (ATK x 2.25 + 1880) physical damage to the enemy with the highest Physical ATK",
        "descriptionLv1": "Deals 806 (ATK x 2.25 + 100) physical damage to the enemy with the highest Physical ATK",
        "descriptionLv90": "Deals 5414 (ATK x 2.25 + 1880) physical damage to the enemy with the highest Physical ATK",
        "target": "Enemy with Highest Physical ATK",
        "castTime": 1.38,
        "damageScaling": "225% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+20",
        "lvl1": "225% + 100",
        "lvl90": "225% + 1880",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "Drowatt just doesn’t knooow♪",
        "icon": "skill001/skill0011",
        "description": "Deals 4310 (ATK x 1.78 + 1514) physical damage to the enemy with the highest Physical ATK and inflicts Charm for 3 seconds",
        "descriptionLv1": "Deals 648 (ATK x 1.78 + 90) physical damage to the enemy with the highest Physical ATK and inflicts Charm for 3 seconds",
        "descriptionLv90": "Deals 4310 (ATK x 1.78 + 1514) physical damage to the enemy with the highest Physical ATK and inflicts Charm for 3 seconds",
        "target": "Enemy with Highest Physical ATK",
        "castTime": 1.38,
        "damageScaling": "178% ATK",
        "baseDamage": "+90",
        "levelGrowth": "+16",
        "lvl1": "178% + 90",
        "lvl90": "178% + 1514",
        "effects": [
          "Charm"
        ],
        "buffEffects": [
          {
            "name": "Charm",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ],
        "duration": 3
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Alluring Bounce♪",
        "icon": "skill001/skill0003_1",
        "description": "Deals 12432 (ATK x 7.5 + 650) physical damage to the enemy with the highest Physical ATK and inflicts Physical Attack DOWN(LV1) for 10 seconds",
        "effect": "750% + 650",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -5,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "Alluring Bounce♪",
        "icon": "skill001/skill0003_2",
        "description": "Deals 14869 (ATK x 9.0 + 730) physical damage to the enemy with the highest Physical ATK and inflicts Physical Attack DOWN(LV2) for 10 seconds",
        "effect": "900% + 730",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -5,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "Alluring Bounce♪",
        "icon": "skill001/skill0003_3",
        "description": "Deals 17285 (ATK x 10.5 + 790) physical damage to the enemy with the highest Physical ATK and inflicts Physical Attack DOWN(LV3) for 10 seconds",
        "effect": "1050% + 790",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -5,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "Alluring Bounce♪",
        "icon": "skill001/skill0003_4",
        "description": "Deals 18916 (ATK x 11.5 + 850) physical damage to the enemy with the highest Physical ATK and inflicts Physical Attack DOWN(LV4) for 10 seconds",
        "effect": "1150% + 850",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -5,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "Alluring Bounce♪",
        "icon": "skill001/skill0003_5",
        "description": "Deals 19752 (ATK x 12.0 + 900) physical damage to the enemy with the highest Physical ATK and inflicts Physical Attack DOWN(LV5) for 10 seconds",
        "effect": "1200% + 900",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -5,
            "type": "percent",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Defense +",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+70)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 70,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Attack +",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack + (+130)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 130,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Drowatt",
    "id": 2009,
    "rarity": "R",
    "element": "Wind",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1491,
      "ATK": 314,
      "MATK": 188,
      "DEF": 117,
      "MDEF": 46
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Basic → Basic → Skill2",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Slow",
      "speedValue": "1.11"
    },
    "slug": "r-drowatt"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "I want to make you feel even better ",
        "icon": "skill001/skill0005",
        "description": "Deals 4717 (MATK x 2.7 + 1880) magic damage to the enemy with the highest Magical ATK",
        "descriptionLv1": "Deals 667 (MATK x 2.7 + 100) magic damage to the enemy with the highest Magical ATK",
        "descriptionLv90": "Deals 4717 (MATK x 2.7 + 1880) magic damage to the enemy with the highest Magical ATK",
        "target": "Enemy with Highest Magic ATK",
        "castTime": 1.08,
        "damageScaling": "270% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+20",
        "lvl1": "270% + 100",
        "lvl90": "270% + 1880",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "As you like it♪",
        "icon": "skill001/skill0011",
        "description": "Deals 3784 (MATK x 2.16 + 1514) magic damage to the enemy with the highest Magical ATK and inflicts Blind for 8 seconds",
        "descriptionLv1": "Deals 543 (MATK x 2.16 + 90) magic damage to the enemy with the highest Magical ATK and inflicts Blind for 8 seconds",
        "descriptionLv90": "Deals 3784 (MATK x 2.16 + 1514) magic damage to the enemy with the highest Magical ATK and inflicts Blind for 8 seconds",
        "target": "Enemy with Highest Magic ATK",
        "castTime": 1.08,
        "damageScaling": "216% ATK",
        "baseDamage": "+90",
        "levelGrowth": "+16",
        "lvl1": "216% + 90",
        "lvl90": "216% + 1514",
        "effects": [
          "Blind"
        ],
        "buffEffects": [
          {
            "name": "Blind",
            "value": -50,
            "type": "percent",
            "duration": 8
          }
        ],
        "duration": 8
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Seductive Bounce♪",
        "icon": "skill001/skill0006_1",
        "description": "Deals 11588 (MATK x 10.35 + 711) magic damage to the enemy with the highest Magical ATK and inflicts Petrify for 2 seconds",
        "effect": "1035% + 711",
        "buffEffects": [
          {
            "name": "Petrify",
            "value": 0,
            "type": "unknown",
            "duration": 2
          }
        ]
      },
      {
        "rank": 2,
        "name": "Seductive Bounce♪",
        "icon": "skill001/skill0006_2",
        "description": "Deals 13855 (MATK x 12.42 + 802) magic damage to the enemy with the highest Magical ATK and inflicts Petrify for 2 seconds",
        "effect": "1242% + 802",
        "buffEffects": [
          {
            "name": "Petrify",
            "value": 0,
            "type": "unknown",
            "duration": 2
          }
        ]
      },
      {
        "rank": 3,
        "name": "Seductive Bounce♪",
        "icon": "skill001/skill0006_3",
        "description": "Deals 15606 (MATK x 14.0 + 892) magic damage to the enemy with the highest Magical ATK and inflicts Petrify for 2 seconds",
        "effect": "1400% + 892",
        "buffEffects": [
          {
            "name": "Petrify",
            "value": 0,
            "type": "unknown",
            "duration": 2
          }
        ]
      },
      {
        "rank": 4,
        "name": "Seductive Bounce♪",
        "icon": "skill001/skill0006_4",
        "description": "Deals 16738 (MATK x 15.02 + 952) magic damage to the enemy with the highest Magical ATK and inflicts Petrify for 2 seconds",
        "effect": "1502% + 952",
        "buffEffects": [
          {
            "name": "Petrify",
            "value": 0,
            "type": "unknown",
            "duration": 2
          }
        ]
      },
      {
        "rank": 5,
        "name": "Seductive Bounce♪",
        "icon": "skill001/skill0006_5",
        "description": "Deals 17900 (MATK x 16.05 + 1032) magic damage to the enemy with the highest Magical ATK and inflicts Petrify for 2 seconds",
        "effect": "1605% + 1032",
        "buffEffects": [
          {
            "name": "Petrify",
            "value": 0,
            "type": "unknown",
            "duration": 2
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Magic Defense+",
        "icon": "skill001/skill1002",
        "effect": "Magic Defense+ (+70)",
        "effectValues": [
          {
            "name": "Magic Defense+",
            "value": 70,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Magic Attack +",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+130)",
        "effectValues": [
          {
            "name": "Magic Attack +",
            "value": 130,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Aristera",
    "id": 2010,
    "rarity": "R",
    "element": "Mind",
    "role": "Attacker",
    "tags": [
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1452,
      "ATK": 126,
      "MATK": 210,
      "DEF": 79,
      "MDEF": 199
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Basic → Basic → Skill2 → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "100% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "r-aristera"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Princess Pirate’s Strike",
        "icon": "skill001/skill0007",
        "description": "Deals 4289 (ATK x 2.65 + 1504) physical damage to the nearest enemy and inflicts Physical Defense -18%+-208DOWN for 8 seconds",
        "descriptionLv1": "Deals 636 (ATK x 2.65 + 80) physical damage to the nearest enemy and inflicts Physical Defense -18%+-30DOWN for 8 seconds",
        "descriptionLv90": "Deals 4289 (ATK x 2.65 + 1504) physical damage to the nearest enemy and inflicts Physical Defense -18%+-208DOWN for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "265% ATK",
        "baseDamage": "+80",
        "levelGrowth": "+16",
        "lvl1": "265% + 80",
        "lvl90": "265% + 1504",
        "effects": [
          "Physical Defense - Lv3"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense - Lv3",
            "value": -18,
            "type": "percent",
            "duration": 8
          }
        ],
        "duration": 8
      },
      {
        "slot": 3,
        "name": "Women are full of love and mystery, you know ",
        "icon": "skill001/skill0019",
        "description": "Applies Block9UP to all allies for 10 seconds and Physical Defense 10%+139UP for 10 seconds",
        "descriptionLv1": "Applies Block5UP to all allies for 10 seconds and Physical Defense 10%+50UP for 10 seconds",
        "descriptionLv90": "Applies Block9UP to all allies for 10 seconds and Physical Defense 10%+139UP for 10 seconds",
        "target": "All Allies",
        "castTime": 1.08,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Block+ Lv1",
          "Physical Defense + Lv1"
        ],
        "buffEffects": [
          {
            "name": "Block+ Lv1",
            "value": 5,
            "type": "flat",
            "duration": 10
          },
          {
            "name": "Physical Defense + Lv1",
            "value": 10,
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
        "name": "Let me punish you ",
        "icon": "skill001/skill0012_1",
        "description": "Deals 3524 (ATK x 3.1 + 266) physical damage to the nearest enemy and inflicts Stun for 3 seconds",
        "effect": "310% + 266",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      },
      {
        "rank": 2,
        "name": "Let me punish you ",
        "icon": "skill001/skill0012_2",
        "description": "Deals 4195 (ATK x 3.7 + 307) physical damage to the nearest enemy and inflicts Stun for 3 seconds",
        "effect": "370% + 307",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      },
      {
        "rank": 3,
        "name": "Let me punish you ",
        "icon": "skill001/skill0012_3",
        "description": "Deals 4718 (ATK x 4.16 + 346) physical damage to the nearest enemy and inflicts Stun for 3 seconds",
        "effect": "416% + 346",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      },
      {
        "rank": 4,
        "name": "Let me punish you ",
        "icon": "skill001/skill0012_4",
        "description": "Deals 5076 (ATK x 4.47 + 379) physical damage to the nearest enemy and inflicts Stun for 3 seconds",
        "effect": "447% + 379",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      },
      {
        "rank": 5,
        "name": "Let me punish you ",
        "icon": "skill001/skill0012_5",
        "description": "Deals 5425 (ATK x 4.78 + 402) physical damage to the nearest enemy and inflicts Stun for 3 seconds",
        "effect": "478% + 402",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Defense +",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+70)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 70,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Critical Damage+",
        "icon": "skill001/skill1001",
        "effect": "Physical Critical Damage+ (+59)",
        "effectValues": [
          {
            "name": "Physical Critical Damage+",
            "value": 59,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Rosalyn",
    "id": 2011,
    "rarity": "R",
    "element": "Water",
    "role": "Attacker",
    "tags": [
      "Buff",
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1452,
      "ATK": 210,
      "MATK": 126,
      "DEF": 199,
      "MDEF": 79
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic → Basic → Basic",
      "loop": "Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "r-rosalyn"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Torlild Schuthein",
        "icon": "skill001/skill0007",
        "description": "Deals 3485 (ATK x 1.8 + 1158) physical damage to the nearest enemy and inflicts Physical Attack -7%+-104DOWN for 8 seconds and Magic Attack -7%+-104DOWN for 8 seconds",
        "descriptionLv1": "Deals 554 (ATK x 1.8 + 90) physical damage to the nearest enemy and inflicts Physical Attack -7%+-15DOWN for 8 seconds and Magic Attack -7%+-15DOWN for 8 seconds",
        "descriptionLv90": "Deals 3485 (ATK x 1.8 + 1158) physical damage to the nearest enemy and inflicts Physical Attack -7%+-104DOWN for 8 seconds and Magic Attack -7%+-104DOWN for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.78,
        "damageScaling": "180% ATK",
        "baseDamage": "+90",
        "levelGrowth": "+12",
        "lvl1": "180% + 90",
        "lvl90": "180% + 1158",
        "effects": [
          "Physical Attack - Lv2",
          "Magic Attack - Lv2"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack - Lv2",
            "value": -7,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Magic Attack - Lv2",
            "value": -7,
            "type": "percent",
            "duration": 8
          }
        ],
        "duration": 8
      },
      {
        "slot": 3,
        "name": "Will of the Queen of Nordrant",
        "icon": "skill001/skill0019",
        "description": "Applies Taunt to self for 10 seconds and Physical Defense 20%+318UP for 10 seconds",
        "descriptionLv1": "Applies Taunt to self for 10 seconds and Physical Defense 20%+140UP for 10 seconds",
        "descriptionLv90": "Applies Taunt to self for 10 seconds and Physical Defense 20%+318UP for 10 seconds",
        "target": "Self",
        "castTime": 1.78,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Taunt",
          "Physical Defense + Lv3"
        ],
        "buffEffects": [
          {
            "name": "Taunt",
            "value": 0,
            "type": "unknown",
            "duration": 10
          },
          {
            "name": "Physical Defense + Lv3",
            "value": 20,
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
        "name": "Supreme Orb that Resonates Across the World",
        "icon": "skill001/skill0003_1",
        "description": "Deals 9578 (ATK x 7.0 + 527) physical damage to the nearest enemy and applies HP RegenerationUP(LV1) to self for 3 seconds",
        "effect": "700% + 527",
        "buffEffects": [
          {
            "name": "HP Regeneration+ Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 3
          }
        ]
      },
      {
        "rank": 2,
        "name": "Supreme Orb that Resonates Across the World",
        "icon": "skill001/skill0003_2",
        "description": "Deals 11570 (ATK x 8.4 + 709) physical damage to the nearest enemy and applies HP RegenerationUP(LV2) to self for 3 seconds",
        "effect": "840% + 709",
        "buffEffects": [
          {
            "name": "HP Regeneration+ Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 3
          }
        ]
      },
      {
        "rank": 3,
        "name": "Supreme Orb that Resonates Across the World",
        "icon": "skill001/skill0003_3",
        "description": "Deals 13135 (ATK x 9.55 + 787) physical damage to the nearest enemy and applies HP RegenerationUP(LV3) to self for 3 seconds",
        "effect": "955% + 787",
        "buffEffects": [
          {
            "name": "HP Regeneration+ Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 3
          }
        ]
      },
      {
        "rank": 4,
        "name": "Supreme Orb that Resonates Across the World",
        "icon": "skill001/skill0003_4",
        "description": "Deals 14116 (ATK x 10.25 + 863) physical damage to the nearest enemy and applies HP RegenerationUP(LV4) to self for 3 seconds",
        "effect": "1025% + 863",
        "buffEffects": [
          {
            "name": "HP Regeneration+ Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 3
          }
        ]
      },
      {
        "rank": 5,
        "name": "Supreme Orb that Resonates Across the World",
        "icon": "skill001/skill0003_5",
        "description": "Deals 15162 (ATK x 11.0 + 939) physical damage to the nearest enemy and applies HP RegenerationUP(LV5) to self for 3 seconds",
        "effect": "1100% + 939",
        "buffEffects": [
          {
            "name": "HP Regeneration+ Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 3
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Defense +",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+70)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 70,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Max HP +",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+1447)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 1447,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Estria",
    "id": 2012,
    "rarity": "R",
    "element": "Mind",
    "role": "Tank",
    "tags": [
      "Debuff",
      "Taunt"
    ],
    "baseStats": {
      "HP": 2159,
      "ATK": 258,
      "MATK": 155,
      "DEF": 317,
      "MDEF": 126
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic → Basic",
      "loop": "Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Very Slow",
      "speedValue": "1.36"
    },
    "slug": "r-estria"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Curient Kon Lemolinos",
        "icon": "skill001/skill0008",
        "description": "Deals 3999 (MATK x 2.2 + 1524) magic damage to the enemy with the highest Magical ATK and inflicts Magic Attack -9%+-198DOWN for 8 seconds",
        "descriptionLv1": "Deals 595 (MATK x 2.2 + 100) magic damage to the enemy with the highest Magical ATK and inflicts Magic Attack -9%+-20DOWN for 8 seconds",
        "descriptionLv90": "Deals 3999 (MATK x 2.2 + 1524) magic damage to the enemy with the highest Magical ATK and inflicts Magic Attack -9%+-198DOWN for 8 seconds",
        "target": "Enemy with Highest Magic ATK",
        "castTime": 1.78,
        "damageScaling": "220% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+16",
        "lvl1": "220% + 100",
        "lvl90": "220% + 1524",
        "effects": [
          "Magic Attack - Lv3"
        ],
        "buffEffects": [
          {
            "name": "Magic Attack - Lv3",
            "value": -9,
            "type": "percent",
            "duration": 8
          }
        ],
        "duration": 8
      },
      {
        "slot": 3,
        "name": "Abresa El Agua",
        "icon": "skill001/skill0021",
        "description": "Restores own HP by 5460 (5460) and inflicts Block18UP for 8 seconds",
        "descriptionLv1": "Restores own HP by 1010 (1010) and inflicts Block9UP for 8 seconds",
        "descriptionLv90": "Restores own HP by 5460 (5460) and inflicts Block18UP for 8 seconds",
        "target": "Self",
        "castTime": 1.78,
        "damageScaling": "2203% ATK",
        "baseDamage": "+1010",
        "levelGrowth": "+50",
        "lvl1": "2203% + 1010",
        "lvl90": "2203% + 5460",
        "effects": [
          "Block+ Lv3"
        ],
        "buffEffects": [
          {
            "name": "Block+ Lv3",
            "value": 9,
            "type": "flat",
            "duration": 8
          }
        ],
        "duration": 8
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Sea’s Love that Leads to Calamity",
        "icon": "skill001/skill0006_1",
        "description": "Deals 3029 (MATK x 2.4 + 329) magic damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV1) for 8 seconds",
        "effect": "240% + 329",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -8,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 2,
        "name": "Sea’s Love that Leads to Calamity",
        "icon": "skill001/skill0006_2",
        "description": "Deals 3756 (MATK x 3.0 + 381) magic damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV2) for 8 seconds",
        "effect": "300% + 381",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -8,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 3,
        "name": "Sea’s Love that Leads to Calamity",
        "icon": "skill001/skill0006_3",
        "description": "Deals 4365 (MATK x 3.5 + 428) magic damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV3) for 8 seconds",
        "effect": "350% + 428",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -8,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 4,
        "name": "Sea’s Love that Leads to Calamity",
        "icon": "skill001/skill0006_4",
        "description": "Deals 4796 (MATK x 3.85 + 465) magic damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV4) for 8 seconds",
        "effect": "385% + 465",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -8,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 5,
        "name": "Sea’s Love that Leads to Calamity",
        "icon": "skill001/skill0006_5",
        "description": "Deals 5788 (MATK x 4.7 + 501) magic damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV5) for 8 seconds",
        "effect": "470% + 501",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -8,
            "type": "percent",
            "duration": 8
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Magic Attack +",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+130)",
        "effectValues": [
          {
            "name": "Magic Attack +",
            "value": 130,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Healing Received +",
        "icon": "skill001/skill1004",
        "effect": "Healing Received + (+20%)",
        "effectValues": [
          {
            "name": "Healing Received +",
            "value": 20,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "Celebria",
    "id": 2013,
    "rarity": "R",
    "element": "Water",
    "role": "Tank",
    "tags": [
      "Debuff"
    ],
    "baseStats": {
      "HP": 4010,
      "ATK": 135,
      "MATK": 225,
      "DEF": 3,
      "MDEF": 9
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Basic → Basic → Skill3 → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "100% ATK",
      "speedLabel": "Very Slow",
      "speedValue": "1.36"
    },
    "slug": "r-celebria"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Punishment for the servants of the demon",
        "icon": "skill001/skill0008",
        "description": "Deals 4615 (MATK x 2.1 + 1890) magic damage to the enemy with the highest Physical ATK and inflicts Physical Attack -11%+-203DOWN for 10 seconds",
        "descriptionLv1": "Deals 653 (MATK x 2.1 + 110) magic damage to the enemy with the highest Physical ATK and inflicts Physical Attack -11%+-25DOWN for 10 seconds",
        "descriptionLv90": "Deals 4615 (MATK x 2.1 + 1890) magic damage to the enemy with the highest Physical ATK and inflicts Physical Attack -11%+-203DOWN for 10 seconds",
        "target": "Enemy with Highest Physical ATK",
        "castTime": 1.58,
        "damageScaling": "210% ATK",
        "baseDamage": "+110",
        "levelGrowth": "+20",
        "lvl1": "210% + 110",
        "lvl90": "210% + 1890",
        "effects": [
          "Physical Attack - Lv4"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack - Lv4",
            "value": -11,
            "type": "percent",
            "duration": 10
          }
        ],
        "duration": 10
      },
      {
        "slot": 3,
        "name": "Blessing to the brave",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 6192 (6192) to the ally with the lowest HP6192 (6192) and inflicts HP Regeneration5%+773 for 3 seconds",
        "descriptionLv1": "Restores HP by 852 (852) to the ally with the lowest HP852 (852) and inflicts HP Regeneration5%+150 for 3 seconds",
        "descriptionLv90": "Restores HP by 6192 (6192) to the ally with the lowest HP6192 (6192) and inflicts HP Regeneration5%+773 for 3 seconds",
        "target": "我方HP最低",
        "castTime": 1.58,
        "damageScaling": "3000% ATK",
        "baseDamage": "+852",
        "levelGrowth": "+60",
        "lvl1": "3000% + 852",
        "lvl90": "3000% + 6192",
        "effects": [
          "HP Regeneration+ Lv3"
        ],
        "buffEffects": [
          {
            "name": "HP Regeneration+ Lv3",
            "value": 5,
            "type": "percent",
            "duration": 3
          }
        ],
        "duration": 3
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "A helping hand to the devout",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 788 (788) to all allies and inflicts Debuff Resistance 0%UP for 6 seconds",
        "effect": "2600% + 788",
        "buffEffects": [
          {
            "name": "Debuff Resistance Lv2",
            "value": 0.3,
            "type": "percent",
            "duration": 6
          }
        ]
      },
      {
        "rank": 2,
        "name": "A helping hand to the devout",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 842 (842) to all allies and inflicts Debuff Resistance 0%UP for 6 seconds",
        "effect": "3000% + 842",
        "buffEffects": [
          {
            "name": "Debuff Resistance Lv2",
            "value": 0.3,
            "type": "percent",
            "duration": 6
          }
        ]
      },
      {
        "rank": 3,
        "name": "A helping hand to the devout",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 910 (910) to all allies and inflicts Debuff Resistance 0%UP for 6 seconds",
        "effect": "3250% + 910",
        "buffEffects": [
          {
            "name": "Debuff Resistance Lv2",
            "value": 0.3,
            "type": "percent",
            "duration": 6
          }
        ]
      },
      {
        "rank": 4,
        "name": "A helping hand to the devout",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 962 (962) to all allies and inflicts Debuff Resistance 0%UP for 6 seconds",
        "effect": "3500% + 962",
        "buffEffects": [
          {
            "name": "Debuff Resistance Lv2",
            "value": 0.3,
            "type": "percent",
            "duration": 6
          }
        ]
      },
      {
        "rank": 5,
        "name": "A helping hand to the devout",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 1008 (1008) to all allies and inflicts Debuff Resistance 0%UP for 6 seconds",
        "effect": "3640% + 1008",
        "buffEffects": [
          {
            "name": "Debuff Resistance Lv2",
            "value": 0.3,
            "type": "percent",
            "duration": 6
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
        "name": "Physical Defense +, Magic Defense+",
        "icon": "skill001/skill1006",
        "effect": "Physical Defense + (+70), Magic Defense+ (+70)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 70,
            "type": "flat"
          },
          {
            "name": "Magic Defense+",
            "value": 70,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Irina",
    "id": 2014,
    "rarity": "SR",
    "element": "Holy",
    "role": "Support",
    "tags": [
      "Debuff",
      "Heal",
      "Cleanse"
    ],
    "baseStats": {
      "HP": 2001,
      "ATK": 156,
      "MATK": 259,
      "DEF": 83,
      "MDEF": 208
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Basic → Skill3",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "110% ATK",
      "speedLabel": "Slow",
      "speedValue": "1.11"
    },
    "slug": "sr-irina"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Double Strike",
        "icon": "skill001/skill0002",
        "description": "Deals 2758 (ATK x 1.8 + 1129) physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
        "descriptionLv1": "Deals 475 (ATK x 1.8 + 150) physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
        "descriptionLv90": "Deals 2758 (ATK x 1.8 + 1129) physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "180% ATK",
        "baseDamage": "+150",
        "levelGrowth": "+11",
        "lvl1": "180% + 150",
        "lvl90": "180% + 1129",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "Instinct",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Attack 15%+475UP to self for 12 seconds and Block18UP for 12 seconds",
        "descriptionLv1": "Applies Physical Attack 15%+30UP to self for 12 seconds and Block9UP for 12 seconds",
        "descriptionLv90": "Applies Physical Attack 15%+475UP to self for 12 seconds and Block18UP for 12 seconds",
        "target": "Self",
        "castTime": 1.08,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Attack + Lv3",
          "Block+ Lv3"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack + Lv3",
            "value": 15,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Block+ Lv3",
            "value": 9,
            "type": "flat",
            "duration": 12
          }
        ],
        "duration": 12
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Sword Slash",
        "icon": "skill001/skill0003_1",
        "description": "Deals 6735 (ATK x 7.0 + 400) physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
        "effect": "700% + 400",
        "buffEffects": null
      },
      {
        "rank": 2,
        "name": "Sword Slash",
        "icon": "skill001/skill0003_2",
        "description": "Deals 8102 (ATK x 8.4 + 500) physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
        "effect": "840% + 500",
        "buffEffects": null
      },
      {
        "rank": 3,
        "name": "Sword Slash",
        "icon": "skill001/skill0003_3",
        "description": "Deals 9147 (ATK x 9.5 + 550) physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
        "effect": "950% + 550",
        "buffEffects": null
      },
      {
        "rank": 4,
        "name": "Sword Slash",
        "icon": "skill001/skill0003_4",
        "description": "Deals 9901 (ATK x 10.3 + 580) physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
        "effect": "1030% + 580",
        "buffEffects": null
      },
      {
        "rank": 5,
        "name": "Sword Slash",
        "icon": "skill001/skill0003_5",
        "description": "Deals 10555 (ATK x 11.0 + 600) physical damage to the nearest enemy, guaranteed to hit and guaranteed to crit",
        "effect": "1100% + 600",
        "buffEffects": null
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Attack +",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack + (+130)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 130,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Max HP +",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+1447)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 1447,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Xevia",
    "id": 2015,
    "rarity": "R",
    "element": "Wind",
    "role": "Tank",
    "tags": [
      "Sure-hit",
      "Guaranteed Crit"
    ],
    "baseStats": {
      "HP": 2313,
      "ATK": 181,
      "MATK": 108,
      "DEF": 117,
      "MDEF": 46
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic → Basic → Skill2",
      "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "r-xevia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Scattering Claws",
        "icon": "skill001/skill0002",
        "description": "Deals 4697 (ATK x 2.7 + 1860) physical damage to the nearest enemy",
        "descriptionLv1": "Deals 647 (ATK x 2.7 + 80) physical damage to the nearest enemy",
        "descriptionLv90": "Deals 4697 (ATK x 2.7 + 1860) physical damage to the nearest enemy",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "270% ATK",
        "baseDamage": "+80",
        "levelGrowth": "+20",
        "lvl1": "270% + 80",
        "lvl90": "270% + 1860",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "Temptation",
        "icon": "skill001/skill0007",
        "description": "Deals 1907 (ATK x 1.25 + 594) physical damage to the 2 nearest enemies and inflicts Physical Attack -7%+-104DOWN for 10 seconds and Magic Attack -7%+-104DOWN for 10 seconds",
        "descriptionLv1": "Deals 322 (ATK x 1.25 + 60) physical damage to the 2 nearest enemies and inflicts Physical Attack -7%+-15DOWN for 10 seconds and Magic Attack -7%+-15DOWN for 10 seconds",
        "descriptionLv90": "Deals 1907 (ATK x 1.25 + 594) physical damage to the 2 nearest enemies and inflicts Physical Attack -7%+-104DOWN for 10 seconds and Magic Attack -7%+-104DOWN for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "125% ATK",
        "baseDamage": "+60",
        "levelGrowth": "+6",
        "lvl1": "125% + 60",
        "lvl90": "125% + 594",
        "effects": [
          "Physical Attack - Lv2",
          "Magic Attack - Lv2"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack - Lv2",
            "value": -7,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Attack - Lv2",
            "value": -7,
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
        "name": "Temptation Leading to Glory and Pleasure",
        "icon": "skill001/skill0003_1",
        "description": "Deals 11517 (ATK x 10.3 + 692) physical damage to the nearest enemy and absorbs  of the damage dealt to restore own HP",
        "effect": "1030% + 692",
        "buffEffects": null
      },
      {
        "rank": 2,
        "name": "Temptation Leading to Glory and Pleasure",
        "icon": "skill001/skill0003_2",
        "description": "Deals 13775 (ATK x 12.36 + 785) physical damage to the nearest enemy and absorbs  of the damage dealt to restore own HP",
        "effect": "1236% + 785",
        "buffEffects": null
      },
      {
        "rank": 3,
        "name": "Temptation Leading to Glory and Pleasure",
        "icon": "skill001/skill0003_3",
        "description": "Deals 15472 (ATK x 13.9 + 864) physical damage to the nearest enemy and absorbs  of the damage dealt to restore own HP",
        "effect": "1390% + 864",
        "buffEffects": null
      },
      {
        "rank": 4,
        "name": "Temptation Leading to Glory and Pleasure",
        "icon": "skill001/skill0003_4",
        "description": "Deals 16582 (ATK x 14.9 + 923) physical damage to the nearest enemy and absorbs  of the damage dealt to restore own HP",
        "effect": "1490% + 923",
        "buffEffects": null
      },
      {
        "rank": 5,
        "name": "Temptation Leading to Glory and Pleasure",
        "icon": "skill001/skill0003_5",
        "description": "Deals 17821 (ATK x 16.0 + 1005) physical damage to the nearest enemy and absorbs  of the damage dealt to restore own HP",
        "effect": "1600% + 1005",
        "buffEffects": null
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Charm Resistance LvMax",
        "icon": "skill001/skill1003",
        "effect": "Charm Resistance LvMax (+1%)",
        "effectValues": [
          {
            "name": "Charm Resistance LvMax",
            "value": 1,
            "type": "percent"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Critical Damage+",
        "icon": "skill001/skill1001",
        "effect": "Physical Critical Damage+ (+59)",
        "effectValues": [
          {
            "name": "Physical Critical Damage+",
            "value": 59,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Shahar",
    "id": 2016,
    "rarity": "R",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Debuff"
    ],
    "baseStats": {
      "HP": 1491,
      "ATK": 210,
      "MATK": 126,
      "DEF": 117,
      "MDEF": 46
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "r-shahar"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Thrust",
        "icon": "skill001/skill0002",
        "description": "Deals 4612 (ATK x 2.6 + 1880) physical damage to the enemy with the highest Physical ATK",
        "descriptionLv1": "Deals 646 (ATK x 2.6 + 100) physical damage to the enemy with the highest Physical ATK",
        "descriptionLv90": "Deals 4612 (ATK x 2.6 + 1880) physical damage to the enemy with the highest Physical ATK",
        "target": "Enemy with Lowest HP",
        "castTime": 1.08,
        "damageScaling": "260% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+20",
        "lvl1": "260% + 100",
        "lvl90": "260% + 1880",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "Lionheart",
        "icon": "skill001/skill0019",
        "description": "Applies Accuracy 9UP to all allies for 10 seconds and Physical Attack 10%+109UP for 10 seconds",
        "descriptionLv1": "Applies Accuracy 5UP to all allies for 10 seconds and Physical Attack 10%+20UP for 10 seconds",
        "descriptionLv90": "Applies Accuracy 9UP to all allies for 10 seconds and Physical Attack 10%+109UP for 10 seconds",
        "target": "All Allies",
        "castTime": 1.08,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Accuracy + Lv1",
          "Physical Attack + Lv1"
        ],
        "buffEffects": [
          {
            "name": "Accuracy + Lv1",
            "value": 5,
            "type": "flat",
            "duration": 10
          },
          {
            "name": "Physical Attack + Lv1",
            "value": 10,
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
        "name": "Proud Maiden’s Strike",
        "icon": "skill001/skill0003_1",
        "description": "Deals 10795 (ATK x 9.5 + 811) physical damage to the enemy with the lowest HP and inflicts Blind for 7 seconds",
        "effect": "950% + 811",
        "buffEffects": [
          {
            "name": "Blind",
            "value": -50,
            "type": "percent",
            "duration": 7
          }
        ]
      },
      {
        "rank": 2,
        "name": "Proud Maiden’s Strike",
        "icon": "skill001/skill0003_2",
        "description": "Deals 13073 (ATK x 11.4 + 1092) physical damage to the enemy with the lowest HP and inflicts Blind for 7 seconds",
        "effect": "1140% + 1092",
        "buffEffects": [
          {
            "name": "Blind",
            "value": -50,
            "type": "percent",
            "duration": 7
          }
        ]
      },
      {
        "rank": 3,
        "name": "Proud Maiden’s Strike",
        "icon": "skill001/skill0003_3",
        "description": "Deals 14664 (ATK x 12.8 + 1212) physical damage to the enemy with the lowest HP and inflicts Blind for 7 seconds",
        "effect": "1280% + 1212",
        "buffEffects": [
          {
            "name": "Blind",
            "value": -50,
            "type": "percent",
            "duration": 7
          }
        ]
      },
      {
        "rank": 4,
        "name": "Proud Maiden’s Strike",
        "icon": "skill001/skill0003_4",
        "description": "Deals 15755 (ATK x 13.8 + 1252) physical damage to the enemy with the lowest HP and inflicts Blind for 7 seconds",
        "effect": "1380% + 1252",
        "buffEffects": [
          {
            "name": "Blind",
            "value": -50,
            "type": "percent",
            "duration": 7
          }
        ]
      },
      {
        "rank": 5,
        "name": "Proud Maiden’s Strike",
        "icon": "skill001/skill0003_5",
        "description": "Deals 16741 (ATK x 14.7 + 1292) physical damage to the enemy with the lowest HP and inflicts Blind for 7 seconds",
        "effect": "1470% + 1292",
        "buffEffects": [
          {
            "name": "Blind",
            "value": -50,
            "type": "percent",
            "duration": 7
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Block+",
        "icon": "skill001/skill1002",
        "effect": "Block+ (+10)",
        "effectValues": [
          {
            "name": "Block+",
            "value": 10,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Critical Damage+",
        "icon": "skill001/skill1001",
        "effect": "Physical Critical Damage+ (+59)",
        "effectValues": [
          {
            "name": "Physical Critical Damage+",
            "value": 59,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Elythia",
    "id": 2017,
    "rarity": "R",
    "element": "Wind",
    "role": "Attacker",
    "tags": [
      "Buff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1491,
      "ATK": 210,
      "MATK": 126,
      "DEF": 117,
      "MDEF": 46
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "r-elythia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Lightning",
        "icon": "skill001/skill0011",
        "description": "Deals 5242 (MATK x 2.4 + 1890) magic damage to the enemy with the highest MP and inflicts Burn(HP --1059 per second) for 10 seconds",
        "descriptionLv1": "Deals 779 (MATK x 2.4 + 110) magic damage to the enemy with the highest MP and inflicts Burn(HP --80 per second) for 10 seconds",
        "descriptionLv90": "Deals 5242 (MATK x 2.4 + 1890) magic damage to the enemy with the highest MP and inflicts Burn(HP --1059 per second) for 10 seconds",
        "target": "Enemy with Highest MP",
        "castTime": 1.38,
        "damageScaling": "240% ATK",
        "baseDamage": "+110",
        "levelGrowth": "+20",
        "lvl1": "240% + 110",
        "lvl90": "240% + 1890",
        "effects": [
          "Burn Lv3"
        ],
        "buffEffects": [
          {
            "name": "Burn Lv3",
            "value": -80,
            "type": "flat",
            "duration": 10
          }
        ],
        "duration": 10
      },
      {
        "slot": 3,
        "name": "Flame Lightning",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Defense 10%+139UP to all allies for 10 seconds and Magic Defense10%+139UP for 10 seconds",
        "descriptionLv1": "Applies Physical Defense 10%+50UP to all allies for 10 seconds and Magic Defense10%+50UP for 10 seconds",
        "descriptionLv90": "Applies Physical Defense 10%+139UP to all allies for 10 seconds and Magic Defense10%+139UP for 10 seconds",
        "target": "All Allies",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Defense + Lv1",
          "Magic Defense+ Lv1"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense + Lv1",
            "value": 10,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Defense+ Lv1",
            "value": 10,
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
        "name": "Behold the Radiance of Nobility",
        "icon": "skill001/skill0006_1",
        "description": "Deals 6586 (MATK x 4.5 + 300) magic damage to all enemies and inflicts Burn(LV1) for 12 seconds",
        "effect": "450% + 300",
        "buffEffects": [
          {
            "name": "Burn Ultimate Lv1",
            "value": -800,
            "type": "flat",
            "duration": 12
          }
        ]
      },
      {
        "rank": 2,
        "name": "Behold the Radiance of Nobility",
        "icon": "skill001/skill0006_2",
        "description": "Deals 9202 (MATK x 6.3 + 401) magic damage to all enemies and inflicts Burn(LV2) for 12 seconds",
        "effect": "630% + 401",
        "buffEffects": [
          {
            "name": "Burn Ultimate Lv1",
            "value": -800,
            "type": "flat",
            "duration": 12
          }
        ]
      },
      {
        "rank": 3,
        "name": "Behold the Radiance of Nobility",
        "icon": "skill001/skill0006_3",
        "description": "Deals 11172 (MATK x 7.65 + 485) magic damage to all enemies and inflicts Burn(LV3) for 12 seconds",
        "effect": "765% + 485",
        "buffEffects": [
          {
            "name": "Burn Ultimate Lv1",
            "value": -800,
            "type": "flat",
            "duration": 12
          }
        ]
      },
      {
        "rank": 4,
        "name": "Behold the Radiance of Nobility",
        "icon": "skill001/skill0006_4",
        "description": "Deals 12520 (MATK x 8.55 + 576) magic damage to all enemies and inflicts Burn(LV4) for 12 seconds",
        "effect": "855% + 576",
        "buffEffects": [
          {
            "name": "Burn Ultimate Lv1",
            "value": -800,
            "type": "flat",
            "duration": 12
          }
        ]
      },
      {
        "rank": 5,
        "name": "Behold the Radiance of Nobility",
        "icon": "skill001/skill0006_5",
        "description": "Deals 13228 (MATK x 9.0 + 655) magic damage to all enemies and inflicts Burn(LV5) for 12 seconds",
        "effect": "900% + 655",
        "buffEffects": [
          {
            "name": "Burn Ultimate Lv1",
            "value": -800,
            "type": "flat",
            "duration": 12
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Max HP +",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+1447)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 1447,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Magic Critical Damage+",
        "icon": "skill001/skill1001",
        "effect": "Magic Critical Damage+ (+59)",
        "effectValues": [
          {
            "name": "Magic Critical Damage+",
            "value": 59,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Nadine",
    "id": 2018,
    "rarity": "R",
    "element": "Fire",
    "role": "Attacker",
    "tags": [
      "Buff"
    ],
    "baseStats": {
      "HP": 1964,
      "ATK": 167,
      "MATK": 279,
      "DEF": 22,
      "MDEF": 56
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "100% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "r-nadine"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Gentle Slap",
        "icon": "skill001/skill0002",
        "description": "Deals 5252 (ATK x 2.4 + 1900) physical damage to the nearest enemy",
        "descriptionLv1": "Deals 789 (ATK x 2.4 + 120) physical damage to the nearest enemy",
        "descriptionLv90": "Deals 5252 (ATK x 2.4 + 1900) physical damage to the nearest enemy",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "240% ATK",
        "baseDamage": "+120",
        "levelGrowth": "+20",
        "lvl1": "240% + 120",
        "lvl90": "240% + 1900",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "It is my honor to be of assistance to you ",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Critical Damage297UP to the 3 nearest allies for 12 seconds and Physical Defense 15%+189UP for 12 seconds",
        "descriptionLv1": "Applies Physical Critical Damage30UP to the 3 nearest allies for 12 seconds and Physical Defense 15%+100UP for 12 seconds",
        "descriptionLv90": "Applies Physical Critical Damage297UP to the 3 nearest allies for 12 seconds and Physical Defense 15%+189UP for 12 seconds",
        "target": "Nearest Ally",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Critical Damage+ Lv2",
          "Physical Defense + Lv2"
        ],
        "buffEffects": [
          {
            "name": "Physical Critical Damage+ Lv2",
            "value": 30,
            "type": "flat",
            "duration": 12
          },
          {
            "name": "Physical Defense + Lv2",
            "value": 15,
            "type": "percent",
            "duration": 12
          }
        ],
        "duration": 12
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Angering a merfolk is a frightening thing, you know!",
        "icon": "skill001/skill0012_1",
        "description": "Deals 4756 (ATK x 3.2 + 286) physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
        "effect": "320% + 286",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 2.5
          }
        ]
      },
      {
        "rank": 2,
        "name": "Angering a merfolk is a frightening thing, you know!",
        "icon": "skill001/skill0012_2",
        "description": "Deals 5635 (ATK x 3.8 + 327) physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
        "effect": "380% + 327",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 2.5
          }
        ]
      },
      {
        "rank": 3,
        "name": "Angering a merfolk is a frightening thing, you know!",
        "icon": "skill001/skill0012_3",
        "description": "Deals 6331 (ATK x 4.27 + 366) physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
        "effect": "427% + 366",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 2.5
          }
        ]
      },
      {
        "rank": 4,
        "name": "Angering a merfolk is a frightening thing, you know!",
        "icon": "skill001/skill0012_4",
        "description": "Deals 6797 (ATK x 4.58 + 399) physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
        "effect": "458% + 399",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 2.5
          }
        ]
      },
      {
        "rank": 5,
        "name": "Angering a merfolk is a frightening thing, you know!",
        "icon": "skill001/skill0012_5",
        "description": "Deals 7253 (ATK x 4.89 + 422) physical damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds",
        "effect": "489% + 422",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 2.5
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Defense +",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+70)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 70,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Critical Damage+",
        "icon": "skill001/skill1001",
        "effect": "Physical Critical Damage+ (+59)",
        "effectValues": [
          {
            "name": "Physical Critical Damage+",
            "value": 59,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Lorelia",
    "id": 2019,
    "rarity": "R",
    "element": "Water",
    "role": "Attacker",
    "tags": [
      "Buff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1491,
      "ATK": 279,
      "MATK": 167,
      "DEF": 117,
      "MDEF": 46
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "r-lorelia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "This is an order from your superior ",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 6174 (6174) to the ally with the lowest HP and inflicts Block18UP for 8 seconds",
        "descriptionLv1": "Restores HP by 834 (834) to the ally with the lowest HP and inflicts Block9UP for 8 seconds",
        "descriptionLv90": "Restores HP by 6174 (6174) to the ally with the lowest HP and inflicts Block18UP for 8 seconds",
        "target": "我方HP最低",
        "castTime": 1.58,
        "damageScaling": "3300% ATK",
        "baseDamage": "+834",
        "levelGrowth": "+60",
        "lvl1": "3300% + 834",
        "lvl90": "3300% + 6174",
        "effects": [
          "Block+ Lv3"
        ],
        "buffEffects": [
          {
            "name": "Block+ Lv3",
            "value": 9,
            "type": "flat",
            "duration": 8
          }
        ],
        "duration": 8
      },
      {
        "slot": 3,
        "name": "Lacking self-awareness ",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Defense 20%+318UP to the ally with the lowest HP for 8 seconds and Magic Defense20%+318UP for 8 seconds",
        "descriptionLv1": "Applies Physical Defense 20%+140UP to the ally with the lowest HP for 8 seconds and Magic Defense20%+140UP for 8 seconds",
        "descriptionLv90": "Applies Physical Defense 20%+318UP to the ally with the lowest HP for 8 seconds and Magic Defense20%+318UP for 8 seconds",
        "target": "我方HP最低",
        "castTime": 1.58,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Defense + Lv3",
          "Magic Defense+ Lv3"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense + Lv3",
            "value": 20,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Magic Defense+ Lv3",
            "value": 20,
            "type": "percent",
            "duration": 8
          }
        ],
        "duration": 8
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "It’s break time now ",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 698 (698) to all allies and inflicts Debuff Resistance 0%UP for 6 seconds",
        "effect": "2300% + 698",
        "buffEffects": [
          {
            "name": "Debuff Resistance Lv2",
            "value": 0.3,
            "type": "percent",
            "duration": 6
          }
        ]
      },
      {
        "rank": 2,
        "name": "It’s break time now ",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 752 (752) to all allies and inflicts Debuff Resistance 0%UP for 6 seconds",
        "effect": "2645% + 752",
        "buffEffects": [
          {
            "name": "Debuff Resistance Lv2",
            "value": 0.3,
            "type": "percent",
            "duration": 6
          }
        ]
      },
      {
        "rank": 3,
        "name": "It’s break time now ",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 810 (810) to all allies and inflicts Debuff Resistance 0%UP for 6 seconds",
        "effect": "2875% + 810",
        "buffEffects": [
          {
            "name": "Debuff Resistance Lv2",
            "value": 0.3,
            "type": "percent",
            "duration": 6
          }
        ]
      },
      {
        "rank": 4,
        "name": "It’s break time now ",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 862 (862) to all allies and inflicts Debuff Resistance 0%UP for 6 seconds",
        "effect": "3105% + 862",
        "buffEffects": [
          {
            "name": "Debuff Resistance Lv2",
            "value": 0.3,
            "type": "percent",
            "duration": 6
          }
        ]
      },
      {
        "rank": 5,
        "name": "It’s break time now ",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 908 (908) to all allies and inflicts Debuff Resistance 0%UP for 6 seconds",
        "effect": "3220% + 908",
        "buffEffects": [
          {
            "name": "Debuff Resistance Lv2",
            "value": 0.3,
            "type": "percent",
            "duration": 6
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
        "name": "Physical Defense +, Magic Defense+",
        "icon": "skill001/skill1006",
        "effect": "Physical Defense + (+70), Magic Defense+ (+70)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 70,
            "type": "flat"
          },
          {
            "name": "Magic Defense+",
            "value": 70,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Sobrina",
    "id": 2020,
    "rarity": "SR",
    "element": "Mind",
    "role": "Support",
    "tags": [
      "Heal",
      "Buff",
      "Cleanse"
    ],
    "baseStats": {
      "HP": 2707,
      "ATK": 167,
      "MATK": 279,
      "DEF": 25,
      "MDEF": 65
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Skill2",
      "loop": "Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "110% ATK",
      "speedLabel": "Slow",
      "speedValue": "1.11"
    },
    "slug": "sr-sobrina"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Rhythm and Beat",
        "icon": "skill001/skill0007",
        "description": "Deals 4508 (ATK x 2.8 + 1890) physical damage to the enemy with the lowest HP and inflicts Action Speed -14%DOWN for 5 seconds",
        "descriptionLv1": "Deals 633 (ATK x 2.8 + 110) physical damage to the enemy with the lowest HP and inflicts Action Speed -14%DOWN for 5 seconds",
        "descriptionLv90": "Deals 4508 (ATK x 2.8 + 1890) physical damage to the enemy with the lowest HP and inflicts Action Speed -14%DOWN for 5 seconds",
        "target": "Enemy with Lowest HP",
        "castTime": 1.08,
        "damageScaling": "280% ATK",
        "baseDamage": "+110",
        "levelGrowth": "+20",
        "lvl1": "280% + 110",
        "lvl90": "280% + 1890",
        "effects": [
          "Action Speed - Lv3"
        ],
        "buffEffects": [
          {
            "name": "Action Speed - Lv3",
            "value": -14,
            "type": "percent",
            "duration": 5
          }
        ],
        "duration": 5
      },
      {
        "slot": 3,
        "name": "Dance of Resistance",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 3416 (3416) to all allies and inflicts Action Speed 7%UP for 8 seconds",
        "descriptionLv1": "Restores HP by 301 (301) to all allies and inflicts Action Speed 7%UP for 8 seconds",
        "descriptionLv90": "Restores HP by 3416 (3416) to all allies and inflicts Action Speed 7%UP for 8 seconds",
        "target": "All Allies",
        "castTime": 1.08,
        "damageScaling": "1350% ATK",
        "baseDamage": "+301",
        "levelGrowth": "+35",
        "lvl1": "1350% + 301",
        "lvl90": "1350% + 3416",
        "effects": [
          "Action Speed + Lv1"
        ],
        "buffEffects": [
          {
            "name": "Action Speed + Lv1",
            "value": 7,
            "type": "percent",
            "duration": 8
          }
        ],
        "duration": 8
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Wish Upon the Soaring Stars",
        "icon": "skill001/skill0012_1",
        "description": "Deals 4559 (ATK x 4.5 + 352) physical damage to all enemies and inflicts Burn(LV1) for 15 seconds",
        "effect": "450% + 352",
        "buffEffects": [
          {
            "name": "Burn Ultimate Lv1",
            "value": -1000,
            "type": "flat",
            "duration": 15
          }
        ]
      },
      {
        "rank": 2,
        "name": "Wish Upon the Soaring Stars",
        "icon": "skill001/skill0012_2",
        "description": "Deals 5521 (ATK x 5.4 + 472) physical damage to all enemies and inflicts Burn(LV2) for 15 seconds",
        "effect": "540% + 472",
        "buffEffects": [
          {
            "name": "Burn Ultimate Lv1",
            "value": -1000,
            "type": "flat",
            "duration": 15
          }
        ]
      },
      {
        "rank": 3,
        "name": "Wish Upon the Soaring Stars",
        "icon": "skill001/skill0012_3",
        "description": "Deals 6351 (ATK x 6.2 + 554) physical damage to all enemies and inflicts Burn(LV3) for 15 seconds",
        "effect": "620% + 554",
        "buffEffects": [
          {
            "name": "Burn Ultimate Lv1",
            "value": -1000,
            "type": "flat",
            "duration": 15
          }
        ]
      },
      {
        "rank": 4,
        "name": "Wish Upon the Soaring Stars",
        "icon": "skill001/skill0012_4",
        "description": "Deals 7170 (ATK x 7.0 + 625) physical damage to all enemies and inflicts Burn(LV4) for 15 seconds",
        "effect": "700% + 625",
        "buffEffects": [
          {
            "name": "Burn Ultimate Lv1",
            "value": -1000,
            "type": "flat",
            "duration": 15
          }
        ]
      },
      {
        "rank": 5,
        "name": "Wish Upon the Soaring Stars",
        "icon": "skill001/skill0012_5",
        "description": "Deals 7726 (ATK x 7.5 + 714) physical damage to all enemies and inflicts Burn(LV5) for 15 seconds",
        "effect": "750% + 714",
        "buffEffects": [
          {
            "name": "Burn Ultimate Lv1",
            "value": -1000,
            "type": "flat",
            "duration": 15
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Block+",
        "icon": "skill001/skill1002",
        "effect": "Block+ (+15)",
        "effectValues": [
          {
            "name": "Block+",
            "value": 15,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Block+",
        "icon": "skill001/skill1006",
        "effect": "Block+ (+8)",
        "effectValues": [
          {
            "name": "Block+",
            "value": 8,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Messeria",
    "id": 2021,
    "rarity": "SR",
    "element": "Wind",
    "role": "Support",
    "tags": [
      "Heal",
      "Buff",
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2055,
      "ATK": 187,
      "MATK": 112,
      "DEF": 126,
      "MDEF": 50
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Skill3 → Basic → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "sr-messeria"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Poison Mushroom!",
        "icon": "skill001/skill0011",
        "description": "Deals 5617 (ATK x 2.67 + 1890) physical damage to the nearest enemy and inflicts Poison (HP --2425 per second) for 10 seconds",
        "descriptionLv1": "Deals 854 (ATK x 2.67 + 110) physical damage to the nearest enemy and inflicts Poison (HP --200 per second) for 10 seconds",
        "descriptionLv90": "Deals 5617 (ATK x 2.67 + 1890) physical damage to the nearest enemy and inflicts Poison (HP --2425 per second) for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "267% ATK",
        "baseDamage": "+110",
        "levelGrowth": "+20",
        "lvl1": "267% + 110",
        "lvl90": "267% + 1890",
        "effects": [
          "Poison Lv5"
        ],
        "buffEffects": [
          {
            "name": "Poison Lv5",
            "value": -200,
            "type": "flat",
            "duration": 10
          }
        ],
        "duration": 10
      },
      {
        "slot": 3,
        "name": "Lady Medusa’s Mushroom!",
        "icon": "skill001/skill0019",
        "description": "Applies Debuff Resistance 0%UP to all allies for 8 seconds and Accuracy 14UP for 8 seconds",
        "descriptionLv1": "Applies Debuff Resistance 0%UP to all allies for 8 seconds and Accuracy 7UP for 8 seconds",
        "descriptionLv90": "Applies Debuff Resistance 0%UP to all allies for 8 seconds and Accuracy 14UP for 8 seconds",
        "target": "All Allies",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Debuff Resistance Lv1",
          "Accuracy + Lv2"
        ],
        "buffEffects": [
          {
            "name": "Debuff Resistance Lv1",
            "value": 0.15,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Accuracy + Lv2",
            "value": 7,
            "type": "flat",
            "duration": 8
          }
        ],
        "duration": 8
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Battle Mushroom!",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 785 (785) to all allies and inflicts BlockUP(LV1) for 11 seconds",
        "effect": "2450% + 785",
        "buffEffects": [
          {
            "name": "Block+ Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 11
          }
        ]
      },
      {
        "rank": 2,
        "name": "Battle Mushroom!",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 822 (822) to all allies and inflicts BlockUP(LV2) for 11 seconds",
        "effect": "2818% + 822",
        "buffEffects": [
          {
            "name": "Block+ Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 11
          }
        ]
      },
      {
        "rank": 3,
        "name": "Battle Mushroom!",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 923 (923) to all allies and inflicts BlockUP(LV3) for 11 seconds",
        "effect": "3063% + 923",
        "buffEffects": [
          {
            "name": "Block+ Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 11
          }
        ]
      },
      {
        "rank": 4,
        "name": "Battle Mushroom!",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 1027 (1027) to all allies and inflicts BlockUP(LV4) for 11 seconds",
        "effect": "3310% + 1027",
        "buffEffects": [
          {
            "name": "Block+ Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 11
          }
        ]
      },
      {
        "rank": 5,
        "name": "Battle Mushroom!",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 1091 (1091) to all allies and inflicts BlockUP(LV5) for 11 seconds",
        "effect": "3430% + 1091",
        "buffEffects": [
          {
            "name": "Block+ Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 11
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Block+",
        "icon": "skill001/skill1002",
        "effect": "Block+ (+15)",
        "effectValues": [
          {
            "name": "Block+",
            "value": 15,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Poison Resistance LvMax, Magic Defense+",
        "icon": "skill001/skill1002",
        "effect": "Poison Resistance LvMax (+1%), Magic Defense+ (+70)",
        "effectValues": [
          {
            "name": "Poison Resistance LvMax",
            "value": 1,
            "type": "percent"
          },
          {
            "name": "Magic Defense+",
            "value": 70,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Paia",
    "id": 2022,
    "rarity": "SR",
    "element": "Fire",
    "role": "Support",
    "tags": [
      "Heal",
      "Buff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2707,
      "ATK": 279,
      "MATK": 167,
      "DEF": 65,
      "MDEF": 25
    },
    "skillRotation": {
      "opening": "Skill2 → Skill3",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Slow",
      "speedValue": "1.11"
    },
    "slug": "sr-paia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Great Cleave",
        "icon": "skill001/skill0007",
        "description": "Deals 3812 (ATK x 2.7 + 1455) physical damage to the nearest enemy and inflicts Physical Attack -9%+-198DOWN for 8 seconds and Physical Defense -18%+-208DOWN for 8 seconds",
        "descriptionLv1": "Deals 589 (ATK x 2.7 + 120) physical damage to the nearest enemy and inflicts Physical Attack -9%+-20DOWN for 8 seconds and Physical Defense -18%+-30DOWN for 8 seconds",
        "descriptionLv90": "Deals 3812 (ATK x 2.7 + 1455) physical damage to the nearest enemy and inflicts Physical Attack -9%+-198DOWN for 8 seconds and Physical Defense -18%+-208DOWN for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "270% ATK",
        "baseDamage": "+120",
        "levelGrowth": "+15",
        "lvl1": "270% + 120",
        "lvl90": "270% + 1455",
        "effects": [
          "Physical Attack - Lv3",
          "Physical Defense - Lv3"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack - Lv3",
            "value": -9,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Physical Defense - Lv3",
            "value": -18,
            "type": "percent",
            "duration": 8
          }
        ],
        "duration": 8
      },
      {
        "slot": 3,
        "name": "You can at least do something, right?",
        "icon": "skill001/skill0019",
        "description": "Applies HP Regeneration3%+495 to self for 10 seconds and Taunt for 10 seconds",
        "descriptionLv1": "Applies HP Regeneration3%+50 to self for 10 seconds and Taunt for 10 seconds",
        "descriptionLv90": "Applies HP Regeneration3%+495 to self for 10 seconds and Taunt for 10 seconds",
        "target": "Self",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "HP Regeneration+ Lv1",
          "Taunt"
        ],
        "buffEffects": [
          {
            "name": "HP Regeneration+ Lv1",
            "value": 3,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Taunt",
            "value": 0,
            "type": "unknown",
            "duration": 10
          }
        ],
        "duration": 10
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Steelbreaker Twin Blades",
        "icon": "skill001/skill0003_1",
        "description": "Deals 10176 (ATK x 10.5 + 1010) physical damage to the nearest enemy and applies Physical Critical DamageUP(LV1) to self for 12 seconds",
        "effect": "1050% + 1010",
        "buffEffects": [
          {
            "name": "Physical Critical Damage+ Ultimate Lv1",
            "value": 300,
            "type": "flat",
            "duration": 12
          }
        ]
      },
      {
        "rank": 2,
        "name": "Steelbreaker Twin Blades",
        "icon": "skill001/skill0003_2",
        "description": "Deals 12165 (ATK x 12.6 + 1166) physical damage to the nearest enemy and applies Physical Critical DamageUP(LV2) to self for 12 seconds",
        "effect": "1260% + 1166",
        "buffEffects": [
          {
            "name": "Physical Critical Damage+ Ultimate Lv1",
            "value": 300,
            "type": "flat",
            "duration": 12
          }
        ]
      },
      {
        "rank": 3,
        "name": "Steelbreaker Twin Blades",
        "icon": "skill001/skill0003_3",
        "description": "Deals 13632 (ATK x 14.18 + 1253) physical damage to the nearest enemy and applies Physical Critical DamageUP(LV3) to self for 12 seconds",
        "effect": "1418% + 1253",
        "buffEffects": [
          {
            "name": "Physical Critical Damage+ Ultimate Lv1",
            "value": 300,
            "type": "flat",
            "duration": 12
          }
        ]
      },
      {
        "rank": 4,
        "name": "Steelbreaker Twin Blades",
        "icon": "skill001/skill0003_4",
        "description": "Deals 14629 (ATK x 15.22 + 1342) physical damage to the nearest enemy and applies Physical Critical DamageUP(LV4) to self for 12 seconds",
        "effect": "1522% + 1342",
        "buffEffects": [
          {
            "name": "Physical Critical Damage+ Ultimate Lv1",
            "value": 300,
            "type": "flat",
            "duration": 12
          }
        ]
      },
      {
        "rank": 5,
        "name": "Steelbreaker Twin Blades",
        "icon": "skill001/skill0003_5",
        "description": "Deals 15668 (ATK x 16.28 + 1456) physical damage to the nearest enemy and applies Physical Critical DamageUP(LV5) to self for 12 seconds",
        "effect": "1628% + 1456",
        "buffEffects": [
          {
            "name": "Physical Critical Damage+ Ultimate Lv1",
            "value": 300,
            "type": "flat",
            "duration": 12
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Max HP +",
        "icon": "skill001/skill1002",
        "effect": "Max HP + (+2896)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 2896,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Attack +, Physical Critical Damage+",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack + (+259), Physical Critical Damage+ (+90)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 259,
            "type": "flat"
          },
          {
            "name": "Physical Critical Damage+",
            "value": 90,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Azura",
    "id": 2023,
    "rarity": "SR",
    "element": "Fire",
    "role": "Tank",
    "tags": [
      "Attacker",
      "Debuff"
    ],
    "baseStats": {
      "HP": 2429,
      "ATK": 174,
      "MATK": 104,
      "DEF": 126,
      "MDEF": 50
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Skill3 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "sr-azura"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Dark vortex!",
        "icon": "skill001/skill0008",
        "description": "Deals 2263 (MATK x 1.15 + 703) magic damage to the 2 nearest enemies and inflicts Physical Attack -9%+-198DOWN for 10 seconds and Magic Attack -9%+-198DOWN for 10 seconds",
        "descriptionLv1": "Deals 391 (MATK x 1.15 + 80) magic damage to the 2 nearest enemies and inflicts Physical Attack -9%+-20DOWN for 10 seconds and Magic Attack -9%+-20DOWN for 10 seconds",
        "descriptionLv90": "Deals 2263 (MATK x 1.15 + 703) magic damage to the 2 nearest enemies and inflicts Physical Attack -9%+-198DOWN for 10 seconds and Magic Attack -9%+-198DOWN for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.78,
        "damageScaling": "115% ATK",
        "baseDamage": "+80",
        "levelGrowth": "+7",
        "lvl1": "115% + 80",
        "lvl90": "115% + 703",
        "effects": [
          "Physical Attack - Lv3",
          "Magic Attack - Lv3"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack - Lv3",
            "value": -9,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Attack - Lv3",
            "value": -9,
            "type": "percent",
            "duration": 10
          }
        ],
        "duration": 10
      },
      {
        "slot": 3,
        "name": "Grant me an unbreakable soul!",
        "icon": "skill001/skill0019",
        "description": "Applies Debuff Resistance 1%UP to self for 12 seconds and Block18UP for 12 seconds",
        "descriptionLv1": "Applies Debuff Resistance 1%UP to self for 12 seconds and Block9UP for 12 seconds",
        "descriptionLv90": "Applies Debuff Resistance 1%UP to self for 12 seconds and Block18UP for 12 seconds",
        "target": "Self",
        "castTime": 1.78,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Debuff Resistance Lv4",
          "Block+ Lv3"
        ],
        "buffEffects": [
          {
            "name": "Debuff Resistance Lv4",
            "value": 0.7,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Block+ Lv3",
            "value": 9,
            "type": "flat",
            "duration": 12
          }
        ],
        "duration": 12
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Fall into Tartarus!",
        "icon": "skill001/skill0012_1",
        "description": "Deals 10325 (MATK x 7.0 + 826) magic damage to the nearest enemy and inflicts Fear Lv1 for 3 seconds and Confusion for 6 seconds",
        "effect": "700% + 826",
        "buffEffects": [
          {
            "name": "Fear Ultimate Lv1",
            "value": -20,
            "type": "flat",
            "duration": 3
          },
          {
            "name": "Confusion",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ]
      },
      {
        "rank": 2,
        "name": "Fall into Tartarus!",
        "icon": "skill001/skill0012_2",
        "description": "Deals 12350 (MATK x 8.4 + 952) magic damage to the nearest enemy and inflicts Fear Lv2 for 3 seconds and Confusion for 6 seconds",
        "effect": "840% + 952",
        "buffEffects": [
          {
            "name": "Fear Ultimate Lv1",
            "value": -20,
            "type": "flat",
            "duration": 3
          },
          {
            "name": "Confusion",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ]
      },
      {
        "rank": 3,
        "name": "Fall into Tartarus!",
        "icon": "skill001/skill0012_3",
        "description": "Deals 13868 (MATK x 9.45 + 1045) magic damage to the nearest enemy and inflicts Fear Lv3 for 3 seconds and Confusion for 6 seconds",
        "effect": "945% + 1045",
        "buffEffects": [
          {
            "name": "Fear Ultimate Lv1",
            "value": -20,
            "type": "flat",
            "duration": 3
          },
          {
            "name": "Confusion",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ]
      },
      {
        "rank": 4,
        "name": "Fall into Tartarus!",
        "icon": "skill001/skill0012_4",
        "description": "Deals 14894 (MATK x 10.15 + 1121) magic damage to the nearest enemy and inflicts Fear Lv4 for 3 seconds and Confusion for 6 seconds",
        "effect": "1015% + 1121",
        "buffEffects": [
          {
            "name": "Fear Ultimate Lv1",
            "value": -20,
            "type": "flat",
            "duration": 3
          },
          {
            "name": "Confusion",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ]
      },
      {
        "rank": 5,
        "name": "Fall into Tartarus!",
        "icon": "skill001/skill0012_5",
        "description": "Deals 15960 (MATK x 10.85 + 1237) magic damage to the nearest enemy and inflicts Fear Lv5 for 3 seconds and Confusion for 6 seconds",
        "effect": "1085% + 1237",
        "buffEffects": [
          {
            "name": "Fear Ultimate Lv1",
            "value": -20,
            "type": "flat",
            "duration": 3
          },
          {
            "name": "Confusion",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Defense +, Magic Defense+",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+70), Magic Defense+ (+70)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 70,
            "type": "flat"
          },
          {
            "name": "Magic Defense+",
            "value": 70,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Magic Attack +, Block+",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+259), Block+ (+15)",
        "effectValues": [
          {
            "name": "Magic Attack +",
            "value": 259,
            "type": "flat"
          },
          {
            "name": "Block+",
            "value": 15,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Zoe",
    "id": 2024,
    "rarity": "SR",
    "element": "Dark",
    "role": "Tank",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 4210,
      "ATK": 163,
      "MATK": 271,
      "DEF": 7,
      "MDEF": 18
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic",
      "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "110% ATK",
      "speedLabel": "Very Slow",
      "speedValue": "1.36"
    },
    "slug": "sr-zoe"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Sestertius’s Weight",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Attack 12%+292UP to all allies for 8 seconds and Magic Attack 12%+292UP for 8 seconds",
        "descriptionLv1": "Applies Physical Attack 12%+25UP to all allies for 8 seconds and Magic Attack 12%+25UP for 8 seconds",
        "descriptionLv90": "Applies Physical Attack 12%+292UP to all allies for 8 seconds and Magic Attack 12%+292UP for 8 seconds",
        "target": "All Allies",
        "castTime": 1.58,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Attack + Lv2",
          "Magic Attack + Lv2"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack + Lv2",
            "value": 12,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Magic Attack + Lv2",
            "value": 12,
            "type": "percent",
            "duration": 8
          }
        ],
        "duration": 8
      },
      {
        "slot": 3,
        "name": "Denarius’s Stride",
        "icon": "skill001/skill0019",
        "description": "Applies Action Speed 11%UP to all allies for 10 seconds and Accuracy 14UP for 10 seconds",
        "descriptionLv1": "Applies Action Speed 11%UP to all allies for 10 seconds and Accuracy 7UP for 10 seconds",
        "descriptionLv90": "Applies Action Speed 11%UP to all allies for 10 seconds and Accuracy 14UP for 10 seconds",
        "target": "All Allies",
        "castTime": 1.58,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Action Speed + Lv2",
          "Accuracy + Lv2"
        ],
        "buffEffects": [
          {
            "name": "Action Speed + Lv2",
            "value": 11,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Accuracy + Lv2",
            "value": 7,
            "type": "flat",
            "duration": 10
          }
        ],
        "duration": 10
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Aureus’s Radiance",
        "icon": "skill001/skill0020_1",
        "description": "Applies Magic DefenseUP(LV1) to all allies for 10 seconds and Physical Defense UP(LV1) for 10 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Magic Defense+ Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Physical Defense + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "Aureus’s Radiance",
        "icon": "skill001/skill0020_2",
        "description": "Applies Magic DefenseUP(LV2) to all allies for 10 seconds and Physical Defense UP(LV2) for 10 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Magic Defense+ Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Physical Defense + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "Aureus’s Radiance",
        "icon": "skill001/skill0020_3",
        "description": "Applies Magic DefenseUP(LV3) to all allies for 10 seconds and Physical Defense UP(LV3) for 10 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Magic Defense+ Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Physical Defense + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "Aureus’s Radiance",
        "icon": "skill001/skill0020_4",
        "description": "Applies Magic DefenseUP(LV4) to all allies for 10 seconds and Physical Defense UP(LV4) for 10 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Magic Defense+ Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Physical Defense + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "Aureus’s Radiance",
        "icon": "skill001/skill0020_5",
        "description": "Applies Magic DefenseUP(LV5) to all allies for 10 seconds and Physical Defense UP(LV5) for 10 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Magic Defense+ Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Physical Defense + Ultimate Lv1",
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
        "name": "Action Speed +, Block+",
        "icon": "skill001/skill1003",
        "effect": "Action Speed + (+10%), Block+ (+20)",
        "effectValues": [
          {
            "name": "Action Speed +",
            "value": 10,
            "type": "percent"
          },
          {
            "name": "Block+",
            "value": 20,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Max HP +, Physical Defense +",
        "icon": "skill001/skill1007",
        "effect": "Max HP + (+955), Physical Defense + (+70)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 955,
            "type": "flat"
          },
          {
            "name": "Physical Defense +",
            "value": 70,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Constantia",
    "id": 2025,
    "rarity": "SR",
    "element": "Water",
    "role": "Support",
    "tags": [
      "Buff"
    ],
    "baseStats": {
      "HP": 1831,
      "ATK": 240,
      "MATK": 144,
      "DEF": 326,
      "MDEF": 130
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Slow",
      "speedValue": "1.11"
    },
    "slug": "sr-constantia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Blizzard",
        "icon": "skill001/skill0011",
        "description": "Deals 6139 (MATK x 2.7 + 1900) magic damage to the enemy with the highest Physical ATK and inflicts Freeze(Unable to act;HP --4210 per second) for 2 seconds",
        "descriptionLv1": "Deals 967 (MATK x 2.7 + 120) magic damage to the enemy with the highest Physical ATK and inflicts Freeze(Unable to act;HP --650 per second) for 2 seconds",
        "descriptionLv90": "Deals 6139 (MATK x 2.7 + 1900) magic damage to the enemy with the highest Physical ATK and inflicts Freeze(Unable to act;HP --4210 per second) for 2 seconds",
        "target": "Enemy with Highest Physical ATK",
        "castTime": 1.38,
        "damageScaling": "270% ATK",
        "baseDamage": "+120",
        "levelGrowth": "+20",
        "lvl1": "270% + 120",
        "lvl90": "270% + 1900",
        "effects": [
          "Freeze Lv5"
        ],
        "buffEffects": [
          {
            "name": "Freeze Lv5",
            "value": -650,
            "type": "flat",
            "duration": 2
          }
        ],
        "duration": 2
      },
      {
        "slot": 3,
        "name": "Avalanche",
        "icon": "skill001/skill0019",
        "description": "Applies Magic Attack 18%+658UP to self for 10 seconds and Physical Defense 25%+348UP for 10 seconds",
        "descriptionLv1": "Applies Magic Attack 18%+35UP to self for 10 seconds and Physical Defense 25%+170UP for 10 seconds",
        "descriptionLv90": "Applies Magic Attack 18%+658UP to self for 10 seconds and Physical Defense 25%+348UP for 10 seconds",
        "target": "Self",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Magic Attack + Lv4",
          "Physical Defense + Lv4"
        ],
        "buffEffects": [
          {
            "name": "Magic Attack + Lv4",
            "value": 18,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Physical Defense + Lv4",
            "value": 25,
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
        "name": "A Prison of Lament for the Loveless",
        "icon": "skill001/skill0012_1",
        "description": "Deals 16643 (MATK x 10.0 + 943) magic damage to the enemy with the highest Physical ATK and inflicts Freeze(LV1) for 3 seconds and Magic Defense DOWN(LV1) for 12 seconds",
        "effect": "1000% + 943",
        "buffEffects": [
          {
            "name": "Freeze Ultimate Lv1",
            "value": -2500,
            "type": "flat",
            "duration": 3
          },
          {
            "name": "Magic Defense- Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 12
          }
        ]
      },
      {
        "rank": 2,
        "name": "A Prison of Lament for the Loveless",
        "icon": "skill001/skill0012_2",
        "description": "Deals 19860 (MATK x 12.0 + 1020) magic damage to the enemy with the highest Physical ATK and inflicts Freeze(LV2) for 3 seconds and Magic Defense DOWN(LV2) for 9 seconds",
        "effect": "1200% + 1020",
        "buffEffects": [
          {
            "name": "Freeze Ultimate Lv1",
            "value": -2500,
            "type": "flat",
            "duration": 3
          },
          {
            "name": "Magic Defense- Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 12
          }
        ]
      },
      {
        "rank": 3,
        "name": "A Prison of Lament for the Loveless",
        "icon": "skill001/skill0012_3",
        "description": "Deals 22277 (MATK x 13.5 + 1082) magic damage to the enemy with the highest Physical ATK and inflicts Freeze(LV3) for 3 seconds and Magic Defense DOWN(LV3) for 9 seconds",
        "effect": "1350% + 1082",
        "buffEffects": [
          {
            "name": "Freeze Ultimate Lv1",
            "value": -2500,
            "type": "flat",
            "duration": 3
          },
          {
            "name": "Magic Defense- Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 12
          }
        ]
      },
      {
        "rank": 4,
        "name": "A Prison of Lament for the Loveless",
        "icon": "skill001/skill0012_4",
        "description": "Deals 23920 (MATK x 14.5 + 1155) magic damage to the enemy with the highest Physical ATK and inflicts Freeze(LV4) for 3 seconds and Magic Defense DOWN(LV4) for 9 seconds",
        "effect": "1450% + 1155",
        "buffEffects": [
          {
            "name": "Freeze Ultimate Lv1",
            "value": -2500,
            "type": "flat",
            "duration": 3
          },
          {
            "name": "Magic Defense- Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 12
          }
        ]
      },
      {
        "rank": 5,
        "name": "A Prison of Lament for the Loveless",
        "icon": "skill001/skill0012_5",
        "description": "Deals 25584 (MATK x 15.5 + 1249) magic damage to the enemy with the highest Physical ATK and inflicts Freeze(LV5) for 3 seconds and Magic Defense DOWN(LV5) for 9 seconds",
        "effect": "1550% + 1249",
        "buffEffects": [
          {
            "name": "Freeze Ultimate Lv1",
            "value": -2500,
            "type": "flat",
            "duration": 3
          },
          {
            "name": "Magic Defense- Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 12
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Freeze Resistance LvMax",
        "icon": "skill001/skill1003",
        "effect": "Freeze Resistance LvMax (+1%)",
        "effectValues": [
          {
            "name": "Freeze Resistance LvMax",
            "value": 1,
            "type": "percent"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Magic Critical Damage+, Block+",
        "icon": "skill001/skill1001",
        "effect": "Magic Critical Damage+ (+118), Block+ (+15)",
        "effectValues": [
          {
            "name": "Magic Critical Damage+",
            "value": 118,
            "type": "flat"
          },
          {
            "name": "Block+",
            "value": 15,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Farneria",
    "id": 2026,
    "rarity": "SR",
    "element": "Water",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1524,
      "ATK": 188,
      "MATK": 314,
      "DEF": 83,
      "MDEF": 208
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "sr-farneria"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Just a little…",
        "icon": "skill001/skill0002",
        "description": "Deals 4413 (ATK x 2.4 + 1514) physical damage to the nearest enemy, and applies Taunt to self for 8 seconds",
        "descriptionLv1": "Deals 668 (ATK x 2.4 + 90) physical damage to the nearest enemy, and applies Taunt to self for 8 seconds",
        "descriptionLv90": "Deals 4413 (ATK x 2.4 + 1514) physical damage to the nearest enemy, and applies Taunt to self for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.78,
        "damageScaling": "240% ATK",
        "baseDamage": "+90",
        "levelGrowth": "+16",
        "lvl1": "240% + 90",
        "lvl90": "240% + 1514",
        "effects": [
          "Taunt"
        ],
        "buffEffects": [
          {
            "name": "Taunt",
            "value": 0,
            "type": "unknown",
            "duration": 8
          }
        ],
        "duration": 8
      },
      {
        "slot": 3,
        "name": "Please come with me～♪",
        "icon": "skill001/skill0021",
        "description": "Restores own HP by 5400 (5400)",
        "descriptionLv1": "Restores own HP by 950 (950)",
        "descriptionLv90": "Restores own HP by 5400 (5400)",
        "target": "Self",
        "castTime": 1.78,
        "damageScaling": "2500% ATK",
        "baseDamage": "+950",
        "levelGrowth": "+50",
        "lvl1": "2500% + 950",
        "lvl90": "2500% + 5400",
        "effects": null,
        "buffEffects": null,
        "duration": null
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Now, let us head to Hades’s realm♪",
        "icon": "skill001/skill0003_1",
        "description": "Deals 2961 (ATK x 2.2 + 304) physical damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV1) for 10 seconds",
        "effect": "220% + 304",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "Now, let us head to Hades’s realm♪",
        "icon": "skill001/skill0003_2",
        "description": "Deals 3731 (ATK x 2.75 + 409) physical damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV2) for 10 seconds",
        "effect": "275% + 409",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "Now, let us head to Hades’s realm♪",
        "icon": "skill001/skill0003_3",
        "description": "Deals 4318 (ATK x 3.2 + 453) physical damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV3) for 10 seconds",
        "effect": "320% + 453",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "Now, let us head to Hades’s realm♪",
        "icon": "skill001/skill0003_4",
        "description": "Deals 4740 (ATK x 3.52 + 488) physical damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV4) for 10 seconds",
        "effect": "352% + 488",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "Now, let us head to Hades’s realm♪",
        "icon": "skill001/skill0003_5",
        "description": "Deals 5029 (ATK x 3.74 + 512) physical damage to the 3 nearest enemies and inflicts Magic Defense DOWN(LV5) for 10 seconds",
        "effect": "374% + 512",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Attack +",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack + (+130)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 130,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Max HP +",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+1447)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 1447,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Destra",
    "id": 2027,
    "rarity": "R",
    "element": "Dark",
    "role": "Tank",
    "tags": [
      "Debuff",
      "Taunt"
    ],
    "baseStats": {
      "HP": 4010,
      "ATK": 241,
      "MATK": 145,
      "DEF": 9,
      "MDEF": 3
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Basic → Skill3",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Very Slow",
      "speedValue": "1.36"
    },
    "slug": "r-destra"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "I’m very busy ",
        "icon": "skill001/skill0002",
        "description": "Deals 4802 (ATK x 2.8 + 1890) physical damage to the nearest enemy",
        "descriptionLv1": "Deals 692 (ATK x 2.8 + 110) physical damage to the nearest enemy",
        "descriptionLv90": "Deals 4802 (ATK x 2.8 + 1890) physical damage to the nearest enemy",
        "target": "Nearest Enemy",
        "castTime": 1.78,
        "damageScaling": "280% ATK",
        "baseDamage": "+110",
        "levelGrowth": "+20",
        "lvl1": "280% + 110",
        "lvl90": "280% + 1890",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "Fall♪",
        "icon": "skill001/skill0019",
        "description": "Applies Block23UP to self for 10 seconds",
        "descriptionLv1": "Applies Block11UP to self for 10 seconds",
        "descriptionLv90": "Applies Block23UP to self for 10 seconds",
        "target": "Self",
        "castTime": 1.78,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Block+ Lv4"
        ],
        "buffEffects": [
          {
            "name": "Block+ Lv4",
            "value": 11,
            "type": "flat",
            "duration": 10
          }
        ],
        "duration": 10
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Prepare yourself♪",
        "icon": "skill001/skill0003_1",
        "description": "Deals 2744 (ATK x 2.25 + 404) physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV1) for 10 seconds",
        "effect": "225% + 404",
        "buffEffects": [
          {
            "name": "Accuracy - Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "Prepare yourself♪",
        "icon": "skill001/skill0003_2",
        "description": "Deals 3421 (ATK x 2.8 + 509) physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV2) for 10 seconds",
        "effect": "280% + 509",
        "buffEffects": [
          {
            "name": "Accuracy - Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "Prepare yourself♪",
        "icon": "skill001/skill0003_3",
        "description": "Deals 3933 (ATK x 3.25 + 553) physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV3) for 10 seconds",
        "effect": "325% + 553",
        "buffEffects": [
          {
            "name": "Accuracy - Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "Prepare yourself♪",
        "icon": "skill001/skill0003_4",
        "description": "Deals 4291 (ATK x 3.58 + 568) physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV4) for 10 seconds",
        "effect": "358% + 568",
        "buffEffects": [
          {
            "name": "Accuracy - Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "Prepare yourself♪",
        "icon": "skill001/skill0003_5",
        "description": "Deals 4554 (ATK x 3.8 + 602) physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV5) for 10 seconds",
        "effect": "380% + 602",
        "buffEffects": [
          {
            "name": "Accuracy - Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Magic Defense+",
        "icon": "skill001/skill1002",
        "effect": "Magic Defense+ (+70)",
        "effectValues": [
          {
            "name": "Magic Defense+",
            "value": 70,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Paralysis Resistance LvMax",
        "icon": "skill001/skill1002",
        "effect": "Paralysis Resistance LvMax (+1%)",
        "effectValues": [
          {
            "name": "Paralysis Resistance LvMax",
            "value": 1,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "Eskelda",
    "id": 2028,
    "rarity": "R",
    "element": "Water",
    "role": "Tank",
    "tags": [
      "Debuff"
    ],
    "baseStats": {
      "HP": 1966,
      "ATK": 208,
      "MATK": 124,
      "DEF": 199,
      "MDEF": 79
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic → Basic → Skill3",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Very Slow",
      "speedValue": "1.36"
    },
    "slug": "r-eskelda"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Iokaela",
        "icon": "skill001/skill0002",
        "description": "Deals 3927 (ATK x 1.7 + 1435) physical damage to the nearest enemy and guaranteed to hit and guaranteed to crit",
        "descriptionLv1": "Deals 598 (ATK x 1.7 + 100) physical damage to the nearest enemy and guaranteed to hit and guaranteed to crit",
        "descriptionLv90": "Deals 3927 (ATK x 1.7 + 1435) physical damage to the nearest enemy and guaranteed to hit and guaranteed to crit",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "170% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+15",
        "lvl1": "170% + 100",
        "lvl90": "170% + 1435",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "Aporosa",
        "icon": "skill001/skill0017",
        "description": "Applies Physical Attack 18%+658UP to self for 10 seconds and Action Speed 14%UP for 10 seconds",
        "descriptionLv1": "Applies Physical Attack 18%+35UP to self for 10 seconds and Action Speed 14%UP for 10 seconds",
        "descriptionLv90": "Applies Physical Attack 18%+658UP to self for 10 seconds and Action Speed 14%UP for 10 seconds",
        "target": "Self",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Attack + Lv4",
          "Action Speed + Lv3"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack + Lv4",
            "value": 18,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Action Speed + Lv3",
            "value": 14,
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
        "name": "The Maiden Goddess’s Arrow that Purges Impurity",
        "icon": "skill001/skill0003_1",
        "description": "Deals 9581 (ATK x 6.0 + 785) physical damage to the nearest enemy with guaranteed hit and guaranteed crit, and when activating the Ultimate, applies Wind Type Defense DOWN(LV1) for 8 seconds",
        "effect": "600% + 785",
        "buffEffects": [
          {
            "name": "Wind Type Defense - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 2,
        "name": "The Maiden Goddess’s Arrow that Purges Impurity",
        "icon": "skill001/skill0003_2",
        "description": "Deals 10587 (ATK x 6.6 + 912) physical damage to the nearest enemy with guaranteed hit and guaranteed crit, and when activating the Ultimate, applies Wind Type Defense DOWN(LV2) for 8 seconds",
        "effect": "660% + 912",
        "buffEffects": [
          {
            "name": "Wind Type Defense - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 3,
        "name": "The Maiden Goddess’s Arrow that Purges Impurity",
        "icon": "skill001/skill0003_3",
        "description": "Deals 11295 (ATK x 7.0 + 1033) physical damage to the nearest enemy with guaranteed hit and guaranteed crit, and when activating the Ultimate, applies Wind Type Defense DOWN(LV3) for 8 seconds",
        "effect": "700% + 1033",
        "buffEffects": [
          {
            "name": "Wind Type Defense - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 4,
        "name": "The Maiden Goddess’s Arrow that Purges Impurity",
        "icon": "skill001/skill0003_4",
        "description": "Deals 11985 (ATK x 7.4 + 1137) physical damage to the nearest enemy with guaranteed hit and guaranteed crit, and when activating the Ultimate, applies Wind Type Defense DOWN(LV4) for 8 seconds",
        "effect": "740% + 1137",
        "buffEffects": [
          {
            "name": "Wind Type Defense - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 5,
        "name": "The Maiden Goddess’s Arrow that Purges Impurity",
        "icon": "skill001/skill0003_5",
        "description": "Deals 12489 (ATK x 7.7 + 1201) physical damage to the nearest enemy with guaranteed hit and guaranteed crit, and when activating the Ultimate, applies Wind Type Defense DOWN(LV5) for 8 seconds",
        "effect": "770% + 1201",
        "buffEffects": [
          {
            "name": "Wind Type Defense - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 8
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Attack +",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack + (+259)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 259,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Action Speed +, Skill Damage +",
        "icon": "skill001/skill1001",
        "effect": "Action Speed + (+10%), Skill Damage + (+10%)",
        "effectValues": [
          {
            "name": "Action Speed +",
            "value": 10,
            "type": "percent"
          },
          {
            "name": "Skill Damage +",
            "value": 10,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "Artemis",
    "id": 2029,
    "rarity": "SR",
    "element": "Wind",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Sure-hit",
      "Guaranteed Crit"
    ],
    "baseStats": {
      "HP": 1566,
      "ATK": 293,
      "MATK": 176,
      "DEF": 126,
      "MDEF": 50
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "artemis"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Poliucos",
        "icon": "skill001/skill0007",
        "description": "Deals 3707 (ATK x 2.8 + 1425) physical damage to the nearest enemy and inflicts Physical Attack -9%+-198DOWN for 5 seconds and Magic Attack -9%+-198DOWN for 5 seconds",
        "descriptionLv1": "Deals 546 (ATK x 2.8 + 90) physical damage to the nearest enemy and inflicts Physical Attack -9%+-20DOWN for 5 seconds and Magic Attack -9%+-20DOWN for 5 seconds",
        "descriptionLv90": "Deals 3707 (ATK x 2.8 + 1425) physical damage to the nearest enemy and inflicts Physical Attack -9%+-198DOWN for 5 seconds and Magic Attack -9%+-198DOWN for 5 seconds",
        "target": "Nearest Enemy",
        "castTime": 0.88,
        "damageScaling": "280% ATK",
        "baseDamage": "+90",
        "levelGrowth": "+15",
        "lvl1": "280% + 90",
        "lvl90": "280% + 1425",
        "effects": [
          "Physical Attack - Lv3",
          "Magic Attack - Lv3"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack - Lv3",
            "value": -9,
            "type": "percent",
            "duration": 5
          },
          {
            "name": "Magic Attack - Lv3",
            "value": -9,
            "type": "percent",
            "duration": 5
          }
        ],
        "duration": 5
      },
      {
        "slot": 3,
        "name": "Palladion",
        "icon": "skill001/skill0021",
        "description": "Restores own HP by 5756 (5756) and inflicts Block26UP for 10 seconds",
        "descriptionLv1": "Restores own HP by 416 (416) and inflicts Block13UP for 10 seconds",
        "descriptionLv90": "Restores own HP by 5756 (5756) and inflicts Block26UP for 10 seconds",
        "target": "Self",
        "castTime": 0.88,
        "damageScaling": "2000% ATK",
        "baseDamage": "+416",
        "levelGrowth": "+60",
        "lvl1": "2000% + 416",
        "lvl90": "2000% + 5756",
        "effects": [
          "Block+ Lv5"
        ],
        "buffEffects": [
          {
            "name": "Block+ Lv5",
            "value": 13,
            "type": "flat",
            "duration": 10
          }
        ],
        "duration": 10
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Knowledge That Brings Regret to Fools",
        "icon": "skill001/skill0012_1",
        "description": "Deals 10780 (ATK x 12.0 + 1000) physical damage to the nearest enemy and inflicts Silence for 5 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
        "effect": "1200% + 1000",
        "buffEffects": [
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 5
          },
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 2
          }
        ]
      },
      {
        "rank": 2,
        "name": "Knowledge That Brings Regret to Fools",
        "icon": "skill001/skill0012_2",
        "description": "Deals 12882 (ATK x 14.4 + 1146) physical damage to the nearest enemy and inflicts Silence for 5 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
        "effect": "1440% + 1146",
        "buffEffects": [
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 5
          },
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 2
          }
        ]
      },
      {
        "rank": 3,
        "name": "Knowledge That Brings Regret to Fools",
        "icon": "skill001/skill0012_3",
        "description": "Deals 13684 (ATK x 15.2 + 1296) physical damage to the nearest enemy and inflicts Silence for 5 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
        "effect": "1520% + 1296",
        "buffEffects": [
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 5
          },
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 2
          }
        ]
      },
      {
        "rank": 4,
        "name": "Knowledge That Brings Regret to Fools",
        "icon": "skill001/skill0012_4",
        "description": "Deals 14750 (ATK x 16.4 + 1385) physical damage to the nearest enemy and inflicts Silence for 5 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
        "effect": "1640% + 1385",
        "buffEffects": [
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 5
          },
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 2
          }
        ]
      },
      {
        "rank": 5,
        "name": "Knowledge That Brings Regret to Fools",
        "icon": "skill001/skill0012_5",
        "description": "Deals 15859 (ATK x 17.6 + 1515) physical damage to the nearest enemy and inflicts Silence for 5 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
        "effect": "1760% + 1515",
        "buffEffects": [
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 5
          },
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 2
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Defense +, Magic Defense+",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+70), Magic Defense+ (+70)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 70,
            "type": "flat"
          },
          {
            "name": "Magic Defense+",
            "value": 70,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Max HP +, Block+",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+1447), Block+ (+15)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 1447,
            "type": "flat"
          },
          {
            "name": "Block+",
            "value": 15,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Athena",
    "id": 2030,
    "rarity": "SR",
    "element": "Holy",
    "role": "Tank",
    "tags": [
      "Heal",
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2267,
      "ATK": 163,
      "MATK": 97,
      "DEF": 326,
      "MDEF": 130
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Basic → Skill3",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Very Fast",
      "speedValue": "0.36"
    },
    "slug": "sr-athena"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "I’m going to curse you～!",
        "icon": "skill001/skill0011",
        "description": "Deals 1808 (MATK x 0.9 + 673) magic damage to the 3 nearest enemies and inflicts Paralysis for 6 seconds",
        "descriptionLv1": "Deals 276 (MATK x 0.9 + 50) magic damage to the 3 nearest enemies and inflicts Paralysis for 6 seconds",
        "descriptionLv90": "Deals 1808 (MATK x 0.9 + 673) magic damage to the 3 nearest enemies and inflicts Paralysis for 6 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "90% ATK",
        "baseDamage": "+50",
        "levelGrowth": "+7",
        "lvl1": "90% + 50",
        "lvl90": "90% + 673",
        "effects": [
          "Paralysis"
        ],
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ],
        "duration": 6
      },
      {
        "slot": 3,
        "name": "Aauyaaahhh!",
        "icon": "skill001/skill0018",
        "description": "Applies Magic Attack 18%+658UP to self for 10 seconds and Action Speed 14%UP for 10 seconds",
        "descriptionLv1": "Applies Magic Attack 18%+35UP to self for 10 seconds and Action Speed 14%UP for 10 seconds",
        "descriptionLv90": "Applies Magic Attack 18%+658UP to self for 10 seconds and Action Speed 14%UP for 10 seconds",
        "target": "Self",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Magic Attack + Lv4",
          "Action Speed + Lv3"
        ],
        "buffEffects": [
          {
            "name": "Magic Attack + Lv4",
            "value": 18,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Action Speed + Lv3",
            "value": 14,
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
        "name": "All of you, turn to stone～～～!",
        "icon": "skill001/skill0012_1",
        "description": "Deals 6077 (MATK x 4.5 + 398) magic damage to all enemies and inflicts Petrify for 3 seconds",
        "effect": "450% + 398",
        "buffEffects": [
          {
            "name": "Petrify",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      },
      {
        "rank": 2,
        "name": "All of you, turn to stone～～～!",
        "icon": "skill001/skill0012_2",
        "description": "Deals 8449 (MATK x 6.3 + 499) magic damage to all enemies and inflicts Petrify for 3 seconds",
        "effect": "630% + 499",
        "buffEffects": [
          {
            "name": "Petrify",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      },
      {
        "rank": 3,
        "name": "All of you, turn to stone～～～!",
        "icon": "skill001/skill0012_3",
        "description": "Deals 10237 (MATK x 7.65 + 583) magic damage to all enemies and inflicts Petrify for 3 seconds",
        "effect": "765% + 583",
        "buffEffects": [
          {
            "name": "Petrify",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      },
      {
        "rank": 4,
        "name": "All of you, turn to stone～～～!",
        "icon": "skill001/skill0012_4",
        "description": "Deals 11467 (MATK x 8.55 + 677) magic damage to all enemies and inflicts Petrify for 3 seconds",
        "effect": "855% + 677",
        "buffEffects": [
          {
            "name": "Petrify",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      },
      {
        "rank": 5,
        "name": "All of you, turn to stone～～～!",
        "icon": "skill001/skill0012_5",
        "description": "Deals 12110 (MATK x 9.0 + 752) magic damage to all enemies and inflicts Petrify for 3 seconds",
        "effect": "900% + 752",
        "buffEffects": [
          {
            "name": "Petrify",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Petrify Resistance LvMax",
        "icon": "skill001/skill1003",
        "effect": "Petrify Resistance LvMax (+1%)",
        "effectValues": [
          {
            "name": "Petrify Resistance LvMax",
            "value": 1,
            "type": "percent"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Magic Critical Damage+, Magic Defense+",
        "icon": "skill001/skill1001",
        "effect": "Magic Critical Damage+ (+118), Magic Defense+ (+141)",
        "effectValues": [
          {
            "name": "Magic Critical Damage+",
            "value": 118,
            "type": "flat"
          },
          {
            "name": "Magic Defense+",
            "value": 141,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Medusa",
    "id": 2031,
    "rarity": "SR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1566,
      "ATK": 151,
      "MATK": 252,
      "DEF": 50,
      "MDEF": 126
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic",
      "loop": "Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "sr-medusa"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Hypnotic Embrace",
        "icon": "skill001/skill0007",
        "description": "Deals 4437 (ATK x 2.1 + 1504) physical damage to the nearest enemy and inflicts Physical Defense -21%+-218DOWN for 15 seconds",
        "descriptionLv1": "Deals 665 (ATK x 2.1 + 80) physical damage to the nearest enemy and inflicts Physical Defense -21%+-40DOWN for 15 seconds",
        "descriptionLv90": "Deals 4437 (ATK x 2.1 + 1504) physical damage to the nearest enemy and inflicts Physical Defense -21%+-218DOWN for 15 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "210% ATK",
        "baseDamage": "+80",
        "levelGrowth": "+16",
        "lvl1": "210% + 80",
        "lvl90": "210% + 1504",
        "effects": [
          "Physical Defense - Lv4"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense - Lv4",
            "value": -21,
            "type": "percent",
            "duration": 15
          }
        ],
        "duration": 15
      },
      {
        "slot": 3,
        "name": "Trance Embrace",
        "icon": "skill001/skill0011",
        "description": "Deals 3502 (ATK x 1.7 + 1128) physical damage to the nearest enemy and absorbs  of the damage dealt to restore own HP and inflicts Charm for 3 seconds",
        "descriptionLv1": "Deals 534 (ATK x 1.7 + 60) physical damage to the nearest enemy and absorbs  of the damage dealt to restore own HP and inflicts Charm for 3 seconds",
        "descriptionLv90": "Deals 3502 (ATK x 1.7 + 1128) physical damage to the nearest enemy and absorbs  of the damage dealt to restore own HP and inflicts Charm for 3 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "170% ATK",
        "baseDamage": "+60",
        "levelGrowth": "+12",
        "lvl1": "170% + 60",
        "lvl90": "170% + 1128",
        "effects": [
          "Charm"
        ],
        "buffEffects": [
          {
            "name": "Charm",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ],
        "duration": 3
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Divine Enchanting Embrace",
        "icon": "skill001/skill0012_1",
        "description": "Deals 11861 (ATK x 8.0 + 685) physical damage to the nearest enemy and inflicts Paralysis for 6 seconds",
        "effect": "800% + 685",
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ]
      },
      {
        "rank": 2,
        "name": "Divine Enchanting Embrace",
        "icon": "skill001/skill0012_2",
        "description": "Deals 14333 (ATK x 9.6 + 922) physical damage to the nearest enemy and inflicts Paralysis for 6 seconds",
        "effect": "960% + 922",
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ]
      },
      {
        "rank": 3,
        "name": "Divine Enchanting Embrace",
        "icon": "skill001/skill0012_3",
        "description": "Deals 16110 (ATK x 10.8 + 1023) physical damage to the nearest enemy and inflicts Paralysis for 6 seconds",
        "effect": "1080% + 1023",
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ]
      },
      {
        "rank": 4,
        "name": "Divine Enchanting Embrace",
        "icon": "skill001/skill0012_4",
        "description": "Deals 17262 (ATK x 11.6 + 1057) physical damage to the nearest enemy and inflicts Paralysis for 6 seconds",
        "effect": "1160% + 1057",
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ]
      },
      {
        "rank": 5,
        "name": "Divine Enchanting Embrace",
        "icon": "skill001/skill0012_5",
        "description": "Deals 18413 (ATK x 12.4 + 1091) physical damage to the nearest enemy and inflicts Paralysis for 6 seconds",
        "effect": "1240% + 1091",
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Defense +",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+70)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 70,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Block+",
        "icon": "skill001/skill1002",
        "effect": "Block+ (+10)",
        "effectValues": [
          {
            "name": "Block+",
            "value": 10,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Lucrezia",
    "id": 2032,
    "rarity": "R",
    "element": "Water",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1964,
      "ATK": 279,
      "MATK": 167,
      "DEF": 56,
      "MDEF": 22
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Basic → Skill3 → Basic",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "100% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "sr-lucrezia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Charming Smile",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Critical Damage485UP to Front Row allies for 8 seconds and Magic Critical Damage485UP for 8 seconds",
        "descriptionLv1": "Applies Physical Critical Damage40UP to Front Row allies for 8 seconds and Magic Critical Damage40UP for 8 seconds",
        "descriptionLv90": "Applies Physical Critical Damage485UP to Front Row allies for 8 seconds and Magic Critical Damage485UP for 8 seconds",
        "target": "我方最前",
        "castTime": 1.58,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Critical Damage+ Lv3",
          "Magic Critical Damage+ Lv3"
        ],
        "buffEffects": [
          {
            "name": "Physical Critical Damage+ Lv3",
            "value": 40,
            "type": "flat",
            "duration": 8
          },
          {
            "name": "Magic Critical Damage+ Lv3",
            "value": 40,
            "type": "flat",
            "duration": 8
          }
        ],
        "duration": 8
      },
      {
        "slot": 3,
        "name": "Blessing of the Love Goddess",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Defense 20%+318UP to Front Row allies for 8 seconds and Magic Defense20%+318UP for 8 seconds",
        "descriptionLv1": "Applies Physical Defense 20%+140UP to Front Row allies for 8 seconds and Magic Defense20%+140UP for 8 seconds",
        "descriptionLv90": "Applies Physical Defense 20%+318UP to Front Row allies for 8 seconds and Magic Defense20%+318UP for 8 seconds",
        "target": "我方最前",
        "castTime": 1.58,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Defense + Lv3",
          "Magic Defense+ Lv3"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense + Lv3",
            "value": 20,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Magic Defense+ Lv3",
            "value": 20,
            "type": "percent",
            "duration": 8
          }
        ],
        "duration": 8
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Grace Granted by the Love Goddess",
        "icon": "skill001/skill0020_1",
        "description": "Applies Physical Attack UP(LV1) to Front Row allies for 10 seconds and Magic Attack UP(LV1) for 10 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Attack + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "Grace Granted by the Love Goddess",
        "icon": "skill001/skill0020_2",
        "description": "Applies Physical Attack UP(LV2) to Front Row allies for 10 seconds and Magic Attack UP(LV2) for 10 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Attack + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "Grace Granted by the Love Goddess",
        "icon": "skill001/skill0020_3",
        "description": "Applies Physical Attack UP(LV3) to Front Row allies for 10 seconds and Magic Attack UP(LV3) for 10 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Attack + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "Grace Granted by the Love Goddess",
        "icon": "skill001/skill0020_4",
        "description": "Applies Physical Attack UP(LV4) to Front Row allies for 10 seconds and Magic Attack UP(LV4) for 10 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Attack + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "Grace Granted by the Love Goddess",
        "icon": "skill001/skill0020_5",
        "description": "Applies Physical Attack UP(LV5) to Front Row allies for 10 seconds and Magic Attack UP(LV5) for 10 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Attack + Ultimate Lv1",
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
        "name": "Physical Attack +, Magic Attack +",
        "icon": "skill001/skill1005",
        "effect": "Physical Attack + (+300), Magic Attack + (+300)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 300,
            "type": "flat"
          },
          {
            "name": "Magic Attack +",
            "value": 300,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Critical Damage+, Magic Critical Damage+",
        "icon": "skill001/skill1005",
        "effect": "Physical Critical Damage+ (+120), Magic Critical Damage+ (+120)",
        "effectValues": [
          {
            "name": "Physical Critical Damage+",
            "value": 120,
            "type": "flat"
          },
          {
            "name": "Magic Critical Damage+",
            "value": 120,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Venus",
    "id": 2033,
    "rarity": "SR",
    "element": "Holy",
    "role": "Support",
    "tags": [
      "Buff"
    ],
    "baseStats": {
      "HP": 2707,
      "ATK": 156,
      "MATK": 259,
      "DEF": 25,
      "MDEF": 65
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "110% ATK",
      "speedLabel": "Slow",
      "speedValue": "1.11"
    },
    "slug": "venus"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "We must make lots of delicious food!",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Attack 10%+109UP to all allies for 9 seconds and Magic Attack 10%+109UP for 9 seconds",
        "descriptionLv1": "Applies Physical Attack 10%+20UP to all allies for 9 seconds and Magic Attack 10%+20UP for 9 seconds",
        "descriptionLv90": "Applies Physical Attack 10%+109UP to all allies for 9 seconds and Magic Attack 10%+109UP for 9 seconds",
        "target": "All Allies",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Attack + Lv1",
          "Magic Attack + Lv1"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack + Lv1",
            "value": 10,
            "type": "percent",
            "duration": 9
          },
          {
            "name": "Magic Attack + Lv1",
            "value": 10,
            "type": "percent",
            "duration": 9
          }
        ],
        "duration": 9
      },
      {
        "slot": 3,
        "name": "You must be thirsty, right?",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Defense 15%+189UP to all allies for 9 seconds and Magic Defense15%+189UP for 9 seconds",
        "descriptionLv1": "Applies Physical Defense 15%+100UP to all allies for 9 seconds and Magic Defense15%+100UP for 9 seconds",
        "descriptionLv90": "Applies Physical Defense 15%+189UP to all allies for 9 seconds and Magic Defense15%+189UP for 9 seconds",
        "target": "All Allies",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Defense + Lv2",
          "Magic Defense+ Lv2"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense + Lv2",
            "value": 15,
            "type": "percent",
            "duration": 9
          },
          {
            "name": "Magic Defense+ Lv2",
            "value": 15,
            "type": "percent",
            "duration": 9
          }
        ],
        "duration": 9
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Delicious Praise Punch",
        "icon": "skill001/skill0020_1",
        "description": "Applies MP Regeneration UP(LV1) to all allies for 5 seconds and Action Speed UP(LV1) for 8 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "MP Regeneration + Ultimate Lv1",
            "value": 25,
            "type": "flat",
            "duration": 5
          },
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 8,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 2,
        "name": "Delicious Praise Punch",
        "icon": "skill001/skill0020_2",
        "description": "Applies MP Regeneration UP(LV2) to all allies for 5 seconds and Action Speed UP(LV2) for 8 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "MP Regeneration + Ultimate Lv1",
            "value": 25,
            "type": "flat",
            "duration": 5
          },
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 8,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 3,
        "name": "Delicious Praise Punch",
        "icon": "skill001/skill0020_3",
        "description": "Applies MP Regeneration UP(LV3) to all allies for 5 seconds and Action Speed UP(LV3) for 8 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "MP Regeneration + Ultimate Lv1",
            "value": 25,
            "type": "flat",
            "duration": 5
          },
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 8,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 4,
        "name": "Delicious Praise Punch",
        "icon": "skill001/skill0020_4",
        "description": "Applies MP Regeneration UP(LV4) to all allies for 5 seconds and Action Speed UP(LV4) for 8 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "MP Regeneration + Ultimate Lv1",
            "value": 25,
            "type": "flat",
            "duration": 5
          },
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 8,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 5,
        "name": "Delicious Praise Punch",
        "icon": "skill001/skill0020_5",
        "description": "Applies MP Regeneration UP(LV5) to all allies for 5 seconds and Action Speed UP(LV5) for 8 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "MP Regeneration + Ultimate Lv1",
            "value": 25,
            "type": "flat",
            "duration": 5
          },
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 8,
            "type": "percent",
            "duration": 8
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Block+",
        "icon": "skill001/skill1002",
        "effect": "Block+ (+15)",
        "effectValues": [
          {
            "name": "Block+",
            "value": 15,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Defense +, Magic Defense+",
        "icon": "skill001/skill1007",
        "effect": "Physical Defense + (+70), Magic Defense+ (+70)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 70,
            "type": "flat"
          },
          {
            "name": "Magic Defense+",
            "value": 70,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Liesel",
    "id": 2035,
    "rarity": "SR",
    "element": "Mind",
    "role": "Support",
    "tags": [
      "Buff",
      "MP Recovery (+100)"
    ],
    "baseStats": {
      "HP": 2707,
      "ATK": 265,
      "MATK": 159,
      "DEF": 65,
      "MDEF": 25
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "liesel"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Receive the punishment of the gods ",
        "icon": "skill001/skill0005",
        "description": "Deals 3926 (MATK x 1.7 + 1257) magic damage to the enemy with the lowest HP, guaranteed to hit and guaranteed to crit",
        "descriptionLv1": "Deals 633 (MATK x 1.7 + 100) magic damage to the enemy with the lowest HP, guaranteed to hit and guaranteed to crit",
        "descriptionLv90": "Deals 3926 (MATK x 1.7 + 1257) magic damage to the enemy with the lowest HP, guaranteed to hit and guaranteed to crit",
        "target": "Enemy with Lowest HP",
        "castTime": 1.38,
        "damageScaling": "170% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+13",
        "lvl1": "170% + 100",
        "lvl90": "170% + 1257",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "Divine Love",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 3715 (3715) to the ally with the lowest HP",
        "descriptionLv1": "Restores HP by 600 (600) to the ally with the lowest HP",
        "descriptionLv90": "Restores HP by 3715 (3715) to the ally with the lowest HP",
        "target": "我方HP最低",
        "castTime": 1.38,
        "damageScaling": "2000% ATK",
        "baseDamage": "+600",
        "levelGrowth": "+35",
        "lvl1": "2000% + 600",
        "lvl90": "2000% + 3715",
        "effects": null,
        "buffEffects": null,
        "duration": null
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Radiance of the Gods",
        "icon": "skill001/skill0006_1",
        "description": "Deals 13500 (MATK x 8.1 + 783) magic damage to the enemy with the lowest HP and inflicts Magic Defense DOWN(LV1) for 10 seconds and inflicts Silence for 6 seconds",
        "effect": "810% + 783",
        "buffEffects": [
          {
            "name": "Magic Defense- Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ]
      },
      {
        "rank": 2,
        "name": "Radiance of the Gods",
        "icon": "skill001/skill0006_2",
        "description": "Deals 16180 (MATK x 9.72 + 920) magic damage to the enemy with the lowest HP and inflicts Magic Defense DOWN(LV2) for 10 seconds and inflicts Silence for 6 seconds",
        "effect": "972% + 920",
        "buffEffects": [
          {
            "name": "Magic Defense- Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ]
      },
      {
        "rank": 3,
        "name": "Radiance of the Gods",
        "icon": "skill001/skill0006_3",
        "description": "Deals 18135 (MATK x 10.9 + 1022) magic damage to the enemy with the lowest HP and inflicts Magic Defense DOWN(LV3) for 10 seconds and inflicts Silence for 6 seconds",
        "effect": "1090% + 1022",
        "buffEffects": [
          {
            "name": "Magic Defense- Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ]
      },
      {
        "rank": 4,
        "name": "Radiance of the Gods",
        "icon": "skill001/skill0006_4",
        "description": "Deals 19562 (MATK x 11.75 + 1115) magic damage to the enemy with the lowest HP and inflicts Magic Defense DOWN(LV4) for 10 seconds and inflicts Silence for 6 seconds",
        "effect": "1175% + 1115",
        "buffEffects": [
          {
            "name": "Magic Defense- Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ]
      },
      {
        "rank": 5,
        "name": "Radiance of the Gods",
        "icon": "skill001/skill0006_5",
        "description": "Deals 20912 (MATK x 12.55 + 1209) magic damage to the enemy with the lowest HP and inflicts Magic Defense DOWN(LV5) for 10 seconds and inflicts Silence for 6 seconds",
        "effect": "1255% + 1209",
        "buffEffects": [
          {
            "name": "Magic Defense- Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "MP Recovery+",
        "icon": "skill001/skill1001",
        "effect": "MP Recovery+ (+21)",
        "effectValues": [
          {
            "name": "MP Recovery+",
            "value": 21,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Magic Attack +, Magic Defense+",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+259), Magic Defense+ (+70)",
        "effectValues": [
          {
            "name": "Magic Attack +",
            "value": 259,
            "type": "flat"
          },
          {
            "name": "Magic Defense+",
            "value": 70,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Ishtovia",
    "id": 2036,
    "rarity": "SR",
    "element": "Holy",
    "role": "Attacker",
    "tags": [
      "Heal",
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2062,
      "ATK": 188,
      "MATK": 314,
      "DEF": 25,
      "MDEF": 65
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Basic → Skill3",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "sr-ishtovia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "This costs quite a bit, you know ",
        "icon": "skill001/skill0007",
        "description": "Deals 4772 (ATK x 2.4 + 1890) physical damage to the nearest enemy and inflicts Physical Defense -18%+-208DOWN for 12 seconds",
        "descriptionLv1": "Deals 686 (ATK x 2.4 + 110) physical damage to the nearest enemy and inflicts Physical Defense -18%+-30DOWN for 12 seconds",
        "descriptionLv90": "Deals 4772 (ATK x 2.4 + 1890) physical damage to the nearest enemy and inflicts Physical Defense -18%+-208DOWN for 12 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.58,
        "damageScaling": "240% ATK",
        "baseDamage": "+110",
        "levelGrowth": "+20",
        "lvl1": "240% + 110",
        "lvl90": "240% + 1890",
        "effects": [
          "Physical Defense - Lv3"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense - Lv3",
            "value": -18,
            "type": "percent",
            "duration": 12
          }
        ],
        "duration": 12
      },
      {
        "slot": 3,
        "name": "I’m very fond of you ",
        "icon": "skill001/skill0017",
        "description": "Applies Physical Critical Damage673UP to the 3 nearest allies for 12 seconds",
        "descriptionLv1": "Applies Physical Critical Damage50UP to the 3 nearest allies for 12 seconds",
        "descriptionLv90": "Applies Physical Critical Damage673UP to the 3 nearest allies for 12 seconds",
        "target": "Nearest Ally",
        "castTime": 1.58,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Critical Damage+ Lv4"
        ],
        "buffEffects": [
          {
            "name": "Physical Critical Damage+ Lv4",
            "value": 50,
            "type": "flat",
            "duration": 12
          }
        ],
        "duration": 12
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Financial Support!",
        "icon": "skill001/skill0020_1",
        "description": "Applies Magic Attack UP(LV1) to all allies for 12 seconds and Physical Defense UP(LV1) for 12 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Physical Defense + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 12
          }
        ]
      },
      {
        "rank": 2,
        "name": "Financial Support!",
        "icon": "skill001/skill0020_2",
        "description": "Applies Magic Attack UP(LV2) to all allies for 12 seconds and Physical Defense UP(LV2) for 12 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Physical Defense + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 12
          }
        ]
      },
      {
        "rank": 3,
        "name": "Financial Support!",
        "icon": "skill001/skill0020_3",
        "description": "Applies Magic Attack UP(LV3) to all allies for 12 seconds and Physical Defense UP(LV3) for 12 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Physical Defense + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 12
          }
        ]
      },
      {
        "rank": 4,
        "name": "Financial Support!",
        "icon": "skill001/skill0020_4",
        "description": "Applies Magic Attack UP(LV4) to all allies for 12 seconds and Physical Defense UP(LV4) for 12 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Physical Defense + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 12
          }
        ]
      },
      {
        "rank": 5,
        "name": "Financial Support!",
        "icon": "skill001/skill0020_5",
        "description": "Applies Magic Attack UP(LV5) to all allies for 12 seconds and Physical Defense UP(LV5) for 12 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Physical Defense + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 12
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Defense +, Magic Defense+",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+141), Magic Defense+ (+141)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 141,
            "type": "flat"
          },
          {
            "name": "Magic Defense+",
            "value": 141,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Attack +, Block+",
        "icon": "skill001/skill1007",
        "effect": "Physical Attack + (+130), Block+ (+10)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 130,
            "type": "flat"
          },
          {
            "name": "Block+",
            "value": 10,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Veronica",
    "id": 2037,
    "rarity": "SR",
    "element": "Water",
    "role": "Support",
    "tags": [
      "Debuff",
      "Buff"
    ],
    "baseStats": {
      "HP": 2055,
      "ATK": 240,
      "MATK": 144,
      "DEF": 126,
      "MDEF": 50
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Slow",
      "speedValue": "1.11"
    },
    "slug": "sr-veronica"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Protected by “Thorns”",
        "icon": "skill001/skill0009",
        "description": "Deals 5240 (ATK x 2.4 + 1890) physical damage to the nearest enemy and inflicts Physical Defense -18%+-208DOWN for 5 seconds",
        "descriptionLv1": "Deals 779 (ATK x 2.4 + 110) physical damage to the nearest enemy and inflicts Physical Defense -18%+-30DOWN for 5 seconds",
        "descriptionLv90": "Deals 5240 (ATK x 2.4 + 1890) physical damage to the nearest enemy and inflicts Physical Defense -18%+-208DOWN for 5 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.58,
        "damageScaling": "240% ATK",
        "baseDamage": "+110",
        "levelGrowth": "+20",
        "lvl1": "240% + 110",
        "lvl90": "240% + 1890",
        "effects": [
          "Physical Defense - Lv3"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense - Lv3",
            "value": -18,
            "type": "percent",
            "duration": 5
          }
        ],
        "duration": 5
      },
      {
        "slot": 3,
        "name": "Blessing to the brave",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 2535 (2535) to the 2 nearest allies",
        "descriptionLv1": "Restores HP by 310 (310) to the 2 nearest allies",
        "descriptionLv90": "Restores HP by 2535 (2535) to the 2 nearest allies",
        "target": "Nearest Ally",
        "castTime": 1.58,
        "damageScaling": "1500% ATK",
        "baseDamage": "+310",
        "levelGrowth": "+25",
        "lvl1": "1500% + 310",
        "lvl90": "1500% + 2535",
        "effects": null,
        "buffEffects": null,
        "duration": null
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "For the prosperity of the Sun and Moon",
        "icon": "skill001/skill0012_1",
        "description": "Deals 11758 (ATK x 8.0 + 590) physical damage to the nearest enemy and inflicts Paralysis for 8 seconds",
        "effect": "800% + 590",
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 8
          }
        ]
      },
      {
        "rank": 2,
        "name": "For the prosperity of the Sun and Moon",
        "icon": "skill001/skill0012_2",
        "description": "Deals 14155 (ATK x 9.6 + 754) physical damage to the nearest enemy and inflicts Paralysis for 8 seconds",
        "effect": "960% + 754",
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 8
          }
        ]
      },
      {
        "rank": 3,
        "name": "For the prosperity of the Sun and Moon",
        "icon": "skill001/skill0012_3",
        "description": "Deals 15957 (ATK x 10.8 + 881) physical damage to the nearest enemy and inflicts Paralysis for 8 seconds",
        "effect": "1080% + 881",
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 8
          }
        ]
      },
      {
        "rank": 4,
        "name": "For the prosperity of the Sun and Moon",
        "icon": "skill001/skill0012_4",
        "description": "Deals 17184 (ATK x 11.6 + 991) physical damage to the nearest enemy and inflicts Paralysis for 8 seconds",
        "effect": "1160% + 991",
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 8
          }
        ]
      },
      {
        "rank": 5,
        "name": "For the prosperity of the Sun and Moon",
        "icon": "skill001/skill0012_5",
        "description": "Deals 18395 (ATK x 12.4 + 1085) physical damage to the nearest enemy and inflicts Paralysis for 8 seconds",
        "effect": "1240% + 1085",
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 8
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Paralysis Resistance LvMax",
        "icon": "skill001/skill1003",
        "effect": "Paralysis Resistance LvMax (+1%)",
        "effectValues": [
          {
            "name": "Paralysis Resistance LvMax",
            "value": 1,
            "type": "percent"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Attack +, Max HP +",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack + (+259), Max HP + (+1447)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 259,
            "type": "flat"
          },
          {
            "name": "Max HP +",
            "value": 1447,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Celestia",
    "id": 2038,
    "rarity": "SR",
    "element": "Wind",
    "role": "Support",
    "tags": [
      "Heal",
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2707,
      "ATK": 279,
      "MATK": 167,
      "DEF": 65,
      "MDEF": 25
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Basic → Skill3 → Basic → Basic",
      "loop": "Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Slow",
      "speedValue": "1.11"
    },
    "slug": "sr-celestia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Anger",
        "icon": "skill001/skill0002",
        "description": "Deals 6118 (ATK x 2.4 + 2350) physical damage to the nearest enemy",
        "descriptionLv1": "Deals 878 (ATK x 2.4 + 125) physical damage to the nearest enemy",
        "descriptionLv90": "Deals 6118 (ATK x 2.4 + 2350) physical damage to the nearest enemy",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "240% ATK",
        "baseDamage": "+125",
        "levelGrowth": "+25",
        "lvl1": "240% + 125",
        "lvl90": "240% + 2350",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "Silence",
        "icon": "skill001/skill0013",
        "description": "Applies Physical Attack 18%+658UP to self for 10 seconds and Action Speed 14%UP for 10 seconds",
        "descriptionLv1": "Applies Physical Attack 18%+35UP to self for 10 seconds and Action Speed 14%UP for 10 seconds",
        "descriptionLv90": "Applies Physical Attack 18%+658UP to self for 10 seconds and Action Speed 14%UP for 10 seconds",
        "target": "Self",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Attack + Lv4",
          "Action Speed + Lv3"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack + Lv4",
            "value": 18,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Action Speed + Lv3",
            "value": 14,
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
        "name": "Raise a Gale of Madness",
        "icon": "skill001/skill0003_1",
        "description": "Deals 13417 (ATK x 8.0 + 857) physical damage to the nearest enemy and inflicts Action Speed DOWN(LV1) for 10 seconds",
        "effect": "800% + 857",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "Raise a Gale of Madness",
        "icon": "skill001/skill0003_2",
        "description": "Deals 15914 (ATK x 9.6 + 842) physical damage to the nearest enemy and inflicts Action Speed DOWN(LV2) for 10 seconds",
        "effect": "960% + 842",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "Raise a Gale of Madness",
        "icon": "skill001/skill0003_3",
        "description": "Deals 17889 (ATK x 10.8 + 933) physical damage to the nearest enemy and inflicts Action Speed DOWN(LV3) for 10 seconds",
        "effect": "1080% + 933",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "Raise a Gale of Madness",
        "icon": "skill001/skill0003_4",
        "description": "Deals 19239 (ATK x 11.6 + 1027) physical damage to the nearest enemy and inflicts Action Speed DOWN(LV4) for 10 seconds",
        "effect": "1160% + 1027",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "Raise a Gale of Madness",
        "icon": "skill001/skill0003_5",
        "description": "Deals 20559 (ATK x 12.4 + 1091) physical damage to the nearest enemy and inflicts Action Speed DOWN(LV5) for 10 seconds",
        "effect": "1240% + 1091",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Attack +",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack + (+259)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 259,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Action Speed +, Physical Critical Damage+",
        "icon": "skill001/skill1001",
        "effect": "Action Speed + (+10%), Physical Critical Damage+ (+59)",
        "effectValues": [
          {
            "name": "Action Speed +",
            "value": 10,
            "type": "percent"
          },
          {
            "name": "Physical Critical Damage+",
            "value": 59,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Guinevia",
    "id": 2039,
    "rarity": "SR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Debuff"
    ],
    "baseStats": {
      "HP": 1566,
      "ATK": 314,
      "MATK": 188,
      "DEF": 126,
      "MDEF": 50
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "sr-guinevia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Juuump—up we go～♪",
        "icon": "skill001/skill0005",
        "description": "Deals 2584 (MATK x 1.1 + 940) magic damage to the 3 nearest enemies",
        "descriptionLv1": "Deals 378 (MATK x 1.1 + 50) magic damage to the 3 nearest enemies",
        "descriptionLv90": "Deals 2584 (MATK x 1.1 + 940) magic damage to the 3 nearest enemies",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "110% ATK",
        "baseDamage": "+50",
        "levelGrowth": "+10",
        "lvl1": "110% + 50",
        "lvl90": "110% + 940",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "The noble princess makes her entrance～♪",
        "icon": "skill001/skill0011",
        "description": "Deals 1914 (MATK x 0.9 + 569) magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Accuracy -18DOWN for 10 seconds",
        "descriptionLv1": "Deals 304 (MATK x 0.9 + 35) magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Accuracy -9DOWN for 10 seconds",
        "descriptionLv90": "Deals 1914 (MATK x 0.9 + 569) magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Accuracy -18DOWN for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "90% ATK",
        "baseDamage": "+35",
        "levelGrowth": "+6",
        "lvl1": "90% + 35",
        "lvl90": "90% + 569",
        "effects": [
          "Charm",
          "Accuracy - Lv3"
        ],
        "buffEffects": [
          {
            "name": "Charm",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "Accuracy - Lv3",
            "value": -9,
            "type": "flat",
            "duration": 10
          }
        ],
        "duration": 3
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "I’ll eat you up and bring peace to the world♪",
        "icon": "skill001/skill0006_1",
        "description": "Deals 5776 (MATK x 3.6 + 394) magic damage to the 3 nearest enemies and applies Magic Attack UP(LV1) to self for 10 seconds",
        "effect": "360% + 394",
        "buffEffects": [
          {
            "name": "Magic Attack + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "I’ll eat you up and bring peace to the world♪",
        "icon": "skill001/skill0006_2",
        "description": "Deals 7172 (MATK x 4.5 + 445) magic damage to the 3 nearest enemies and applies Magic Attack UP(LV2) to self for 10 seconds",
        "effect": "450% + 445",
        "buffEffects": [
          {
            "name": "Magic Attack + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "I’ll eat you up and bring peace to the world♪",
        "icon": "skill001/skill0006_3",
        "description": "Deals 8299 (MATK x 5.22 + 496) magic damage to the 3 nearest enemies and applies Magic Attack UP(LV3) to self for 10 seconds",
        "effect": "522% + 496",
        "buffEffects": [
          {
            "name": "Magic Attack + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "I’ll eat you up and bring peace to the world♪",
        "icon": "skill001/skill0006_4",
        "description": "Deals 9188 (MATK x 5.79 + 532) magic damage to the 3 nearest enemies and applies Magic Attack UP(LV4) to self for 10 seconds",
        "effect": "579% + 532",
        "buffEffects": [
          {
            "name": "Magic Attack + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "I’ll eat you up and bring peace to the world♪",
        "icon": "skill001/skill0006_5",
        "description": "Deals 9714 (MATK x 6.12 + 565) magic damage to the 3 nearest enemies and applies Magic Attack UP(LV5) to self for 10 seconds",
        "effect": "612% + 565",
        "buffEffects": [
          {
            "name": "Magic Attack + Ultimate Lv1",
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
        "name": "Charm Resistance LvMax, Confusion Resistance LvMax",
        "icon": "skill001/skill1003",
        "effect": "Charm Resistance LvMax (+1%), Confusion Resistance LvMax (+1%)",
        "effectValues": [
          {
            "name": "Charm Resistance LvMax",
            "value": 1,
            "type": "percent"
          },
          {
            "name": "Confusion Resistance LvMax",
            "value": 1,
            "type": "percent"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Magic Attack +, Skill Damage +",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+389), Skill Damage + (+30%)",
        "effectValues": [
          {
            "name": "Magic Attack +",
            "value": 389,
            "type": "flat"
          },
          {
            "name": "Skill Damage +",
            "value": 30,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "【Elegant Portrait】Shamshel",
    "id": 2040,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1715,
      "ATK": 179,
      "MATK": 299,
      "DEF": 57,
      "MDEF": 143
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Basic → Skill2",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "elegant-portrait-shamshel"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Magic: Explosion",
        "icon": "skill001/skill0011",
        "description": "Deals 2350 (MATK x 1.1 + 584) magic damage to the 3 nearest enemies and inflicts Burn(HP --1980 per second) for 10 seconds and Block-23DOWN for 5 seconds",
        "descriptionLv1": "Deals 403 (MATK x 1.1 + 50) magic damage to the 3 nearest enemies and inflicts Burn(HP --200 per second) for 10 seconds and Block-11DOWN for 5 seconds",
        "descriptionLv90": "Deals 2350 (MATK x 1.1 + 584) magic damage to the 3 nearest enemies and inflicts Burn(HP --1980 per second) for 10 seconds and Block-23DOWN for 5 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "110% ATK",
        "baseDamage": "+50",
        "levelGrowth": "+6",
        "lvl1": "110% + 50",
        "lvl90": "110% + 584",
        "effects": [
          "Burn LvMax",
          "Block- Lv4"
        ],
        "buffEffects": [
          {
            "name": "Burn LvMax",
            "value": -200,
            "type": "flat",
            "duration": 10
          },
          {
            "name": "Block- Lv4",
            "value": -11,
            "type": "flat",
            "duration": 5
          }
        ],
        "duration": 10
      },
      {
        "slot": 3,
        "name": "Magic: Healing",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 2970 (2970) to all allies",
        "descriptionLv1": "Restores HP by 300 (300) to all allies",
        "descriptionLv90": "Restores HP by 2970 (2970) to all allies",
        "target": "All Allies",
        "castTime": 1.38,
        "damageScaling": "1550% ATK",
        "baseDamage": "+300",
        "levelGrowth": "+30",
        "lvl1": "1550% + 300",
        "lvl90": "1550% + 2970",
        "effects": null,
        "buffEffects": null,
        "duration": null
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Magic: Shining Starlight",
        "icon": "skill001/skill0012_1",
        "description": "Deals 6352 (MATK x 3.7 + 410) magic damage to the 3 nearest enemies and inflicts Stun for 2 seconds and Burn(LV1) for 15 seconds",
        "effect": "370% + 410",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 2
          },
          {
            "name": "Burn Ultimate Lv1",
            "value": -1500,
            "type": "flat",
            "duration": 15
          }
        ]
      },
      {
        "rank": 2,
        "name": "Magic: Shining Starlight",
        "icon": "skill001/skill0012_2",
        "description": "Deals 7847 (MATK x 4.6 + 460) magic damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds and Burn(LV2) for 15 seconds",
        "effect": "460% + 460",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 2
          },
          {
            "name": "Burn Ultimate Lv1",
            "value": -1500,
            "type": "flat",
            "duration": 15
          }
        ]
      },
      {
        "rank": 3,
        "name": "Magic: Shining Starlight",
        "icon": "skill001/skill0012_3",
        "description": "Deals 9021 (MATK x 5.3 + 510) magic damage to the 3 nearest enemies and inflicts Stun for 2.5 seconds and Burn(LV3) for 15 seconds",
        "effect": "530% + 510",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 2
          },
          {
            "name": "Burn Ultimate Lv1",
            "value": -1500,
            "type": "flat",
            "duration": 15
          }
        ]
      },
      {
        "rank": 4,
        "name": "Magic: Shining Starlight",
        "icon": "skill001/skill0012_4",
        "description": "Deals 10025 (MATK x 5.9 + 550) magic damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Burn(LV4) for 15 seconds",
        "effect": "590% + 550",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 2
          },
          {
            "name": "Burn Ultimate Lv1",
            "value": -1500,
            "type": "flat",
            "duration": 15
          }
        ]
      },
      {
        "rank": 5,
        "name": "Magic: Shining Starlight",
        "icon": "skill001/skill0012_5",
        "description": "Deals 10547 (MATK x 6.2 + 590) magic damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Burn(LV5) for 15 seconds",
        "effect": "620% + 590",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 2
          },
          {
            "name": "Burn Ultimate Lv1",
            "value": -1500,
            "type": "flat",
            "duration": 15
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Action Speed +, Magic Critical Damage+",
        "icon": "skill001/skill1001",
        "effect": "Action Speed + (+10%), Magic Critical Damage+ (+176)",
        "effectValues": [
          {
            "name": "Action Speed +",
            "value": 10,
            "type": "percent"
          },
          {
            "name": "Magic Critical Damage+",
            "value": 176,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Max HP +, Block+",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+2896), Block+ (+15)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 2896,
            "type": "flat"
          },
          {
            "name": "Block+",
            "value": 15,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "【Magical Princess】Luceria",
    "id": 2041,
    "rarity": "SSR",
    "element": "Holy",
    "role": "Attacker",
    "tags": [
      "Heal",
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1715,
      "ATK": 192,
      "MATK": 321,
      "DEF": 57,
      "MDEF": 143
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Skill3 → Basic → Basic",
      "loop": "Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "magical-princess-luceria"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Rage of the Giant Rock Soldier",
        "icon": "skill001/skill0007",
        "description": "Deals 2198 (ATK x 1.1 + 752) physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 8 seconds",
        "descriptionLv1": "Deals 329 (ATK x 1.1 + 40) physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 8 seconds",
        "descriptionLv90": "Deals 2198 (ATK x 1.1 + 752) physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.58,
        "damageScaling": "110% ATK",
        "baseDamage": "+40",
        "levelGrowth": "+8",
        "lvl1": "110% + 40",
        "lvl90": "110% + 752",
        "effects": [
          "Action Speed - Lv5"
        ],
        "buffEffects": [
          {
            "name": "Action Speed - Lv5",
            "value": -20,
            "type": "percent",
            "duration": 8
          }
        ],
        "duration": 8
      },
      {
        "slot": 3,
        "name": "Guardian of the Giant Rock Soldier",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Healing Shield (350%, restores ) to all allies for 12 seconds and Physical Healing Shield (350%, restores ) for 12 seconds",
        "descriptionLv1": "Applies Physical Healing Shield (350%, restores ) to all allies for 12 seconds and Physical Healing Shield (350%, restores ) for 12 seconds",
        "descriptionLv90": "Applies Physical Healing Shield (350%, restores ) to all allies for 12 seconds and Physical Healing Shield (350%, restores ) for 12 seconds",
        "target": "All Allies",
        "castTime": 1.58,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Healing Shield Lv4",
          "Magic Healing Shield Lv4"
        ],
        "buffEffects": [
          {
            "name": "Physical Healing Shield Lv4",
            "value": 350,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Magic Healing Shield Lv4",
            "value": 350,
            "type": "percent",
            "duration": 12
          }
        ],
        "duration": 12
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Rampage of the Giant Rock Soldier",
        "icon": "skill001/skill0003_1",
        "description": "Deals 12755 (ATK x 9.0 + 920) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV1) for 10 seconds and Magic Attack DOWN(LV1) for 10 seconds",
        "effect": "900% + 920",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Attack - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "Rampage of the Giant Rock Soldier",
        "icon": "skill001/skill0003_2",
        "description": "Deals 15152 (ATK x 10.8 + 950) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV2) for 10 seconds and Magic Attack DOWN(LV2) for 10 seconds",
        "effect": "1080% + 950",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Attack - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "Rampage of the Giant Rock Soldier",
        "icon": "skill001/skill0003_3",
        "description": "Deals 17111 (ATK x 12.1 + 1200) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV3) for 10 seconds and Magic Attack DOWN(LV3) for 10 seconds",
        "effect": "1210% + 1200",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Attack - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "Rampage of the Giant Rock Soldier",
        "icon": "skill001/skill0003_4",
        "description": "Deals 18395 (ATK x 13.0 + 1300) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV4) for 10 seconds and Magic Attack DOWN(LV4) for 10 seconds",
        "effect": "1300% + 1300",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Attack - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "Rampage of the Giant Rock Soldier",
        "icon": "skill001/skill0003_5",
        "description": "Deals 19678 (ATK x 13.9 + 1400) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV5) for 10 seconds and Magic Attack DOWN(LV5) for 10 seconds",
        "effect": "1390% + 1400",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Attack - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Magic Defense+, Max HP +",
        "icon": "skill001/skill1002",
        "effect": "Magic Defense+ (+141), Max HP + (+3444)",
        "effectValues": [
          {
            "name": "Magic Defense+",
            "value": 141,
            "type": "flat"
          },
          {
            "name": "Max HP +",
            "value": 3444,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Attack +, Physical Critical Damage+",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack + (+159), Physical Critical Damage+ (+90)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 159,
            "type": "flat"
          },
          {
            "name": "Physical Critical Damage+",
            "value": 90,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "【Messenger of Stone Soldiers】Nerys",
    "id": 2042,
    "rarity": "SSR",
    "element": "Mind",
    "role": "Support",
    "tags": [
      "Buff",
      "Debuff"
    ],
    "baseStats": {
      "HP": 2965,
      "ATK": 263,
      "MATK": 158,
      "DEF": 82,
      "MDEF": 32
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Skill2 → Basic → Basic",
      "loop": "Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Slow",
      "speedValue": "1.11"
    },
    "slug": "golem-summoner-nerys"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Light Beam by Instinct!",
        "icon": "skill001/skill0011",
        "description": "Deals 1966 (MATK x 0.85 + 772) magic damage to the 3 nearest enemies and inflicts Freeze(Unable to act;HP --4210 per second) for 3 seconds",
        "descriptionLv1": "Deals 298 (MATK x 0.85 + 60) magic damage to the 3 nearest enemies and inflicts Freeze(Unable to act;HP --650 per second) for 3 seconds",
        "descriptionLv90": "Deals 1966 (MATK x 0.85 + 772) magic damage to the 3 nearest enemies and inflicts Freeze(Unable to act;HP --4210 per second) for 3 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "85% ATK",
        "baseDamage": "+60",
        "levelGrowth": "+8",
        "lvl1": "85% + 60",
        "lvl90": "85% + 772",
        "effects": [
          "Freeze Lv5"
        ],
        "buffEffects": [
          {
            "name": "Freeze Lv5",
            "value": -650,
            "type": "flat",
            "duration": 3
          }
        ],
        "duration": 3
      },
      {
        "slot": 3,
        "name": "Book Attack!",
        "icon": "skill001/skill0011",
        "description": "Deals 2207 (MATK x 1.0 + 802) magic damage to the 3 nearest enemies and inflicts Paralysis for 5 seconds and Accuracy -23DOWN for 8 seconds",
        "descriptionLv1": "Deals 371 (MATK x 1.0 + 90) magic damage to the 3 nearest enemies and inflicts Paralysis for 5 seconds and Accuracy -11DOWN for 8 seconds",
        "descriptionLv90": "Deals 2207 (MATK x 1.0 + 802) magic damage to the 3 nearest enemies and inflicts Paralysis for 5 seconds and Accuracy -23DOWN for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "100% ATK",
        "baseDamage": "+90",
        "levelGrowth": "+8",
        "lvl1": "100% + 90",
        "lvl90": "100% + 802",
        "effects": [
          "Paralysis",
          "Accuracy - Lv4"
        ],
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 5
          },
          {
            "name": "Accuracy - Lv4",
            "value": -11,
            "type": "flat",
            "duration": 8
          }
        ],
        "duration": 5
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Eliminate you all ",
        "icon": "skill001/skill0012_1",
        "description": "Deals 7375 (MATK x 5.0 + 350) magic damage to all enemies and inflicts Freeze(LV1) for 3 seconds and inflicts Paralysis for 7 seconds",
        "effect": "500% + 350",
        "buffEffects": [
          {
            "name": "Freeze Ultimate Lv1",
            "value": -2500,
            "type": "flat",
            "duration": 3
          },
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 7
          }
        ]
      },
      {
        "rank": 2,
        "name": "Eliminate you all ",
        "icon": "skill001/skill0012_2",
        "description": "Deals 10305 (MATK x 7.0 + 470) magic damage to all enemies and inflicts Freeze(LV2) for 3 seconds and inflicts Paralysis for 8 seconds",
        "effect": "700% + 470",
        "buffEffects": [
          {
            "name": "Freeze Ultimate Lv1",
            "value": -2500,
            "type": "flat",
            "duration": 3
          },
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 7
          }
        ]
      },
      {
        "rank": 3,
        "name": "Eliminate you all ",
        "icon": "skill001/skill0012_3",
        "description": "Deals 12464 (MATK x 8.5 + 522) magic damage to all enemies and inflicts Freeze(LV3) for 3 seconds and inflicts Paralysis for 8 seconds",
        "effect": "850% + 522",
        "buffEffects": [
          {
            "name": "Freeze Ultimate Lv1",
            "value": -2500,
            "type": "flat",
            "duration": 3
          },
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 7
          }
        ]
      },
      {
        "rank": 4,
        "name": "Eliminate you all ",
        "icon": "skill001/skill0012_4",
        "description": "Deals 13927 (MATK x 9.5 + 580) magic damage to all enemies and inflicts Freeze(LV4) for 3 seconds and inflicts Paralysis for 9 seconds",
        "effect": "950% + 580",
        "buffEffects": [
          {
            "name": "Freeze Ultimate Lv1",
            "value": -2500,
            "type": "flat",
            "duration": 3
          },
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 7
          }
        ]
      },
      {
        "rank": 5,
        "name": "Eliminate you all ",
        "icon": "skill001/skill0012_5",
        "description": "Deals 14695 (MATK x 10.0 + 645) magic damage to all enemies and inflicts Freeze(LV5) for 3 seconds and inflicts Paralysis for 9 seconds",
        "effect": "1000% + 645",
        "buffEffects": [
          {
            "name": "Freeze Ultimate Lv1",
            "value": -2500,
            "type": "flat",
            "duration": 3
          },
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 7
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Freeze Resistance LvMax, Paralysis Resistance LvMax",
        "icon": "skill001/skill1003",
        "effect": "Freeze Resistance LvMax (+1%), Paralysis Resistance LvMax (+1%)",
        "effectValues": [
          {
            "name": "Freeze Resistance LvMax",
            "value": 1,
            "type": "percent"
          },
          {
            "name": "Paralysis Resistance LvMax",
            "value": 1,
            "type": "percent"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Magic Attack +, Skill Damage +",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+389), Skill Damage + (+30%)",
        "effectValues": [
          {
            "name": "Magic Attack +",
            "value": 389,
            "type": "flat"
          },
          {
            "name": "Skill Damage +",
            "value": 30,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "【Swift-Chant Sorceress】Sobrina",
    "id": 2043,
    "rarity": "SSR",
    "element": "Mind",
    "role": "Attacker",
    "tags": [
      "Disrupt",
      "Debuff"
    ],
    "baseStats": {
      "HP": 2092,
      "ATK": 168,
      "MATK": 281,
      "DEF": 32,
      "MDEF": 82
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Basic → Skill3 → Basic",
      "loop": "Basic → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "mage-of-bastinton-sobrina"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Londo of Light",
        "icon": "skill001/skill0007",
        "description": "Deals 1579 (ATK x 0.9 + 584) physical damage to the 3 nearest enemies and inflicts Physical Defense -21%+-218DOWN for 10 seconds and Accuracy -23DOWN for 10 seconds",
        "descriptionLv1": "Deals 248 (ATK x 0.9 + 50) physical damage to the 3 nearest enemies and inflicts Physical Defense -21%+-40DOWN for 10 seconds and Accuracy -11DOWN for 10 seconds",
        "descriptionLv90": "Deals 1579 (ATK x 0.9 + 584) physical damage to the 3 nearest enemies and inflicts Physical Defense -21%+-218DOWN for 10 seconds and Accuracy -23DOWN for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "90% ATK",
        "baseDamage": "+50",
        "levelGrowth": "+6",
        "lvl1": "90% + 50",
        "lvl90": "90% + 584",
        "effects": [
          "Physical Defense - Lv4",
          "Accuracy - Lv4"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense - Lv4",
            "value": -21,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Accuracy - Lv4",
            "value": -11,
            "type": "flat",
            "duration": 10
          }
        ],
        "duration": 10
      },
      {
        "slot": 3,
        "name": "Dancing Performance",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Attack 15%+475UP to all allies for 10 seconds and Physical Critical Damage485UP for 10 seconds",
        "descriptionLv1": "Applies Physical Attack 15%+30UP to all allies for 10 seconds and Physical Critical Damage40UP for 10 seconds",
        "descriptionLv90": "Applies Physical Attack 15%+475UP to all allies for 10 seconds and Physical Critical Damage485UP for 10 seconds",
        "target": "All Allies",
        "castTime": 1.08,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Attack + Lv3",
          "Physical Critical Damage+ Lv3"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack + Lv3",
            "value": 15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Physical Critical Damage+ Lv3",
            "value": 40,
            "type": "flat",
            "duration": 10
          }
        ],
        "duration": 10
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Prayer in the Sea of Stars",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 1097 (1097) to all allies and inflicts Action Speed UP(LV1) for 12 seconds and BlockUP(LV1) for 12 seconds",
        "effect": "2000% + 1097",
        "buffEffects": [
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Block+ Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 12
          }
        ]
      },
      {
        "rank": 2,
        "name": "Prayer in the Sea of Stars",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 1250 (1250) to all allies and inflicts Action Speed UP(LV2) for 12 seconds and BlockUP(LV2) for 12 seconds",
        "effect": "2300% + 1250",
        "buffEffects": [
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Block+ Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 12
          }
        ]
      },
      {
        "rank": 3,
        "name": "Prayer in the Sea of Stars",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 1394 (1394) to all allies and inflicts Action Speed UP(LV3) for 12 seconds and BlockUP(LV3) for 12 seconds",
        "effect": "2500% + 1394",
        "buffEffects": [
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Block+ Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 12
          }
        ]
      },
      {
        "rank": 4,
        "name": "Prayer in the Sea of Stars",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 1489 (1489) to all allies and inflicts Action Speed UP(LV4) for 12 seconds and BlockUP(LV4) for 12 seconds",
        "effect": "2700% + 1489",
        "buffEffects": [
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Block+ Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 12
          }
        ]
      },
      {
        "rank": 5,
        "name": "Prayer in the Sea of Stars",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 1563 (1563) to all allies and inflicts Action Speed UP(LV5) for 12 seconds and BlockUP(LV5) for 12 seconds",
        "effect": "2800% + 1563",
        "buffEffects": [
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Block+ Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 12
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Skill Damage +, Physical Attack +",
        "icon": "skill001/skill1001",
        "effect": "Skill Damage + (+10%), Physical Attack + (+130)",
        "effectValues": [
          {
            "name": "Skill Damage +",
            "value": 10,
            "type": "percent"
          },
          {
            "name": "Physical Attack +",
            "value": 130,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Block+, Action Speed +",
        "icon": "skill001/skill1007",
        "effect": "Block+ (+10), Action Speed + (+10%)",
        "effectValues": [
          {
            "name": "Block+",
            "value": 10,
            "type": "flat"
          },
          {
            "name": "Action Speed +",
            "value": 10,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "【Trance Dancer】Messeria",
    "id": 2044,
    "rarity": "SSR",
    "element": "Wind",
    "role": "Support",
    "tags": [
      "Heal",
      "Buff",
      "Debuff"
    ],
    "baseStats": {
      "HP": 1913,
      "ATK": 221,
      "MATK": 132,
      "DEF": 226,
      "MDEF": 90
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "hypnotic-dancer-messeria"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "O God, drive away evil with Your pure light ",
        "icon": "skill001/skill0010",
        "description": "Deals 1839 (MATK x 1.0 + 574) magic damage to the 3 nearest enemies and inflicts Magic Attack -9%+-198DOWN for 12 seconds and Magic Defense-18%+-208DOWN for 12 seconds",
        "descriptionLv1": "Deals 293 (MATK x 1.0 + 40) magic damage to the 3 nearest enemies and inflicts Magic Attack -9%+-20DOWN for 12 seconds and Magic Defense-18%+-30DOWN for 12 seconds",
        "descriptionLv90": "Deals 1839 (MATK x 1.0 + 574) magic damage to the 3 nearest enemies and inflicts Magic Attack -9%+-198DOWN for 12 seconds and Magic Defense-18%+-208DOWN for 12 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "100% ATK",
        "baseDamage": "+40",
        "levelGrowth": "+6",
        "lvl1": "100% + 40",
        "lvl90": "100% + 574",
        "effects": [
          "Magic Attack - Lv3",
          "Magic Defense- Lv3"
        ],
        "buffEffects": [
          {
            "name": "Magic Attack - Lv3",
            "value": -9,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Magic Defense- Lv3",
            "value": -18,
            "type": "percent",
            "duration": 12
          }
        ],
        "duration": 12
      },
      {
        "slot": 3,
        "name": "O God, save those possessed by darkness ",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 3930 (3930) to all alliesand removes debuffs and inflicts Block23UP for 10 seconds",
        "descriptionLv1": "Restores HP by 370 (370) to all alliesand removes debuffs and inflicts Block11UP for 10 seconds",
        "descriptionLv90": "Restores HP by 3930 (3930) to all alliesand removes debuffs and inflicts Block23UP for 10 seconds",
        "target": "All Allies",
        "castTime": 1.38,
        "damageScaling": "1700% ATK",
        "baseDamage": "+370",
        "levelGrowth": "+40",
        "lvl1": "1700% + 370",
        "lvl90": "1700% + 3930",
        "effects": [
          "Block+ Lv4",
          "Debuff Resistance LvMax"
        ],
        "buffEffects": [
          {
            "name": "Block+ Lv4",
            "value": 11,
            "type": "flat",
            "duration": 10
          },
          {
            "name": "Debuff Resistance LvMax",
            "value": 1,
            "type": "percent"
          }
        ],
        "duration": 10
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "O God, please guide us with Your light ",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 1239 (1239) to all allies and inflicts HP RegenerationUP(LV1) for 6 seconds and Hit-Based Magic Healing Shield (LV1) for 20 seconds",
        "effect": "2700% + 1239",
        "buffEffects": [
          {
            "name": "HP Regeneration+ Ultimate Lv1",
            "value": 6,
            "type": "percent",
            "duration": 6
          },
          {
            "name": "Hit-Based Magic Healing Shield Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 20
          }
        ]
      },
      {
        "rank": 2,
        "name": "O God, please guide us with Your light ",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 1476 (1476) to all allies and inflicts HP RegenerationUP(LV2) for 6 seconds and Hit-Based Magic Healing Shield (LV2) for 20 seconds",
        "effect": "3105% + 1476",
        "buffEffects": [
          {
            "name": "HP Regeneration+ Ultimate Lv1",
            "value": 6,
            "type": "percent",
            "duration": 6
          },
          {
            "name": "Hit-Based Magic Healing Shield Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 20
          }
        ]
      },
      {
        "rank": 3,
        "name": "O God, please guide us with Your light ",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 1606 (1606) to all allies and inflicts HP RegenerationUP(LV3) for 6 seconds and Hit-Based Magic Healing Shield (LV3) for 20 seconds",
        "effect": "3375% + 1606",
        "buffEffects": [
          {
            "name": "HP Regeneration+ Ultimate Lv1",
            "value": 6,
            "type": "percent",
            "duration": 6
          },
          {
            "name": "Hit-Based Magic Healing Shield Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 20
          }
        ]
      },
      {
        "rank": 4,
        "name": "O God, please guide us with Your light ",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 1783 (1783) to all allies and inflicts HP RegenerationUP(LV4) for 6 seconds and Hit-Based Magic Healing Shield (LV4) for 20 seconds",
        "effect": "3645% + 1783",
        "buffEffects": [
          {
            "name": "HP Regeneration+ Ultimate Lv1",
            "value": 6,
            "type": "percent",
            "duration": 6
          },
          {
            "name": "Hit-Based Magic Healing Shield Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 20
          }
        ]
      },
      {
        "rank": 5,
        "name": "O God, please guide us with Your light ",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 1960 (1960) to all allies and inflicts HP RegenerationUP(LV5) for 6 seconds and Hit-Based Magic Healing Shield (LV5) for 20 seconds",
        "effect": "3780% + 1960",
        "buffEffects": [
          {
            "name": "HP Regeneration+ Ultimate Lv1",
            "value": 6,
            "type": "percent",
            "duration": 6
          },
          {
            "name": "Hit-Based Magic Healing Shield Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 20
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Magic Attack +, Magic Defense+",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+259), Magic Defense+ (+141)",
        "effectValues": [
          {
            "name": "Magic Attack +",
            "value": 259,
            "type": "flat"
          },
          {
            "name": "Magic Defense+",
            "value": 141,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Magic Defense+, Max HP +",
        "icon": "skill001/skill1007",
        "effect": "Magic Defense+ (+141), Max HP + (+1447)",
        "effectValues": [
          {
            "name": "Magic Defense+",
            "value": 141,
            "type": "flat"
          },
          {
            "name": "Max HP +",
            "value": 1447,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "【Pious Healer】Ishtovia",
    "id": 2045,
    "rarity": "SSR",
    "element": "Holy",
    "role": "Support",
    "tags": [
      "Heal",
      "Buff",
      "Debuff",
      "Cleanse"
    ],
    "baseStats": {
      "HP": 2745,
      "ATK": 151,
      "MATK": 253,
      "DEF": 32,
      "MDEF": 82
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Skill3 → Basic",
      "loop": "Basic → Basic → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "pious-cleric-ishtovia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Lightning Blade Strike",
        "icon": "skill001/skill0011",
        "description": "Deals 7265 (MATK x 3.1 + 1940) magic damage to the nearest enemy and inflicts Stun for 1.5 seconds and Magic Defense-21%+-218DOWN for 8 seconds",
        "descriptionLv1": "Deals 1223 (MATK x 3.1 + 160) magic damage to the nearest enemy and inflicts Stun for 1.5 seconds and Magic Defense-21%+-40DOWN for 8 seconds",
        "descriptionLv90": "Deals 7265 (MATK x 3.1 + 1940) magic damage to the nearest enemy and inflicts Stun for 1.5 seconds and Magic Defense-21%+-218DOWN for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "310% ATK",
        "baseDamage": "+160",
        "levelGrowth": "+20",
        "lvl1": "310% + 160",
        "lvl90": "310% + 1940",
        "effects": [
          "Stun",
          "Magic Defense- Lv4"
        ],
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 1.5
          },
          {
            "name": "Magic Defense- Lv4",
            "value": -21,
            "type": "percent",
            "duration": 8
          }
        ],
        "duration": 1.5
      },
      {
        "slot": 3,
        "name": "Winged Lightning",
        "icon": "skill001/skill0019",
        "description": "Applies Magic Attack 18%+658UP to self for 10 seconds and Magic Critical Damage673UP for 10 seconds",
        "descriptionLv1": "Applies Magic Attack 18%+35UP to self for 10 seconds and Magic Critical Damage50UP for 10 seconds",
        "descriptionLv90": "Applies Magic Attack 18%+658UP to self for 10 seconds and Magic Critical Damage673UP for 10 seconds",
        "target": "Self",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Magic Attack + Lv4",
          "Magic Critical Damage+ Lv4"
        ],
        "buffEffects": [
          {
            "name": "Magic Attack + Lv4",
            "value": 18,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Critical Damage+ Lv4",
            "value": 50,
            "type": "flat",
            "duration": 10
          }
        ],
        "duration": 10
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Storm Claw",
        "icon": "skill001/skill0006_1",
        "description": "Deals 18065 (MATK x 10.0 + 885) magic damage to the nearest enemy and applies Mind Type ATK UP(LV1) to self for 8 seconds",
        "effect": "1000% + 885",
        "buffEffects": [
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
        "name": "Storm Claw",
        "icon": "skill001/skill0006_2",
        "description": "Deals 21638 (MATK x 12.0 + 1022) magic damage to the nearest enemy and applies Mind Type ATK UP(LV2) to self for 8 seconds",
        "effect": "1200% + 1022",
        "buffEffects": [
          {
            "name": "Mind Type ATK + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 3,
        "name": "Storm Claw",
        "icon": "skill001/skill0006_3",
        "description": "Deals 24346 (MATK x 13.5 + 1153) magic damage to the nearest enemy and applies Mind Type ATK UP(LV3) to self for 9 seconds",
        "effect": "1350% + 1153",
        "buffEffects": [
          {
            "name": "Mind Type ATK + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 4,
        "name": "Storm Claw",
        "icon": "skill001/skill0006_4",
        "description": "Deals 26218 (MATK x 14.5 + 1307) magic damage to the nearest enemy and applies Mind Type ATK UP(LV4) to self for 9 seconds",
        "effect": "1450% + 1307",
        "buffEffects": [
          {
            "name": "Mind Type ATK + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 5,
        "name": "Storm Claw",
        "icon": "skill001/skill0006_5",
        "description": "Deals 27231 (MATK x 15.0 + 1461) magic damage to the nearest enemy and applies Mind Type ATK UP(LV5) to self for 10 seconds",
        "effect": "1500% + 1461",
        "buffEffects": [
          {
            "name": "Mind Type ATK + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 8
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Action Speed +, Block+",
        "icon": "skill001/skill1003",
        "effect": "Action Speed + (+10%), Block+ (+15)",
        "effectValues": [
          {
            "name": "Action Speed +",
            "value": 10,
            "type": "percent"
          },
          {
            "name": "Block+",
            "value": 15,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Mind Type ATK +, Magic Attack +",
        "icon": "skill001/skill1001",
        "effect": "Mind Type ATK + (+10%), Magic Attack + (+389)",
        "effectValues": [
          {
            "name": "Mind Type ATK +",
            "value": 10,
            "type": "percent"
          },
          {
            "name": "Magic Attack +",
            "value": 389,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Teresia",
    "id": 2046,
    "rarity": "SSR",
    "element": "Mind",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2092,
      "ATK": 206,
      "MATK": 343,
      "DEF": 32,
      "MDEF": 82
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "theresia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Shikomaru",
        "icon": "skill001/skill0011",
        "description": "Deals 6837 (ATK x 3.5 + 1920) physical damage to the nearest enemy and inflicts Paralysis for 6 seconds and inflicts Silence for 6 seconds",
        "descriptionLv1": "Deals 1123 (ATK x 3.5 + 140) physical damage to the nearest enemy and inflicts Paralysis for 6 seconds and inflicts Silence for 6 seconds",
        "descriptionLv90": "Deals 6837 (ATK x 3.5 + 1920) physical damage to the nearest enemy and inflicts Paralysis for 6 seconds and inflicts Silence for 6 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "350% ATK",
        "baseDamage": "+140",
        "levelGrowth": "+20",
        "lvl1": "350% + 140",
        "lvl90": "350% + 1920",
        "effects": [
          "Paralysis",
          "Silence"
        ],
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 6
          },
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ],
        "duration": 6
      },
      {
        "slot": 3,
        "name": "Millionfold",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Defense 30%+457UP to self for 10 seconds and Block26UP for 10 seconds",
        "descriptionLv1": "Applies Physical Defense 30%+190UP to self for 10 seconds and Block13UP for 10 seconds",
        "descriptionLv90": "Applies Physical Defense 30%+457UP to self for 10 seconds and Block26UP for 10 seconds",
        "target": "Self",
        "castTime": 1.08,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Defense + Lv5",
          "Block+ Lv5"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense + Lv5",
            "value": 30,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Block+ Lv5",
            "value": 13,
            "type": "flat",
            "duration": 10
          }
        ],
        "duration": 10
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Iron Immortal Blossom",
        "icon": "skill001/skill0003_1",
        "description": "Deals 5396 (ATK x 3.6 + 338) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV1) for 10 seconds and Action Speed DOWN(LV1) for 10 seconds",
        "effect": "360% + 338",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "Iron Immortal Blossom",
        "icon": "skill001/skill0003_2",
        "description": "Deals 6280 (ATK x 4.2 + 379) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV2) for 10 seconds and Action Speed DOWN(LV2) for 10 seconds",
        "effect": "420% + 379",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "Iron Immortal Blossom",
        "icon": "skill001/skill0003_3",
        "description": "Deals 7024 (ATK x 4.7 + 421) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV3) for 10 seconds and Action Speed DOWN(LV3) for 10 seconds",
        "effect": "470% + 421",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "Iron Immortal Blossom",
        "icon": "skill001/skill0003_4",
        "description": "Deals 7630 (ATK x 5.1 + 465) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV4) for 10 seconds and Action Speed DOWN(LV4) for 10 seconds",
        "effect": "510% + 465",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "Iron Immortal Blossom",
        "icon": "skill001/skill0003_5",
        "description": "Deals 8228 (ATK x 5.5 + 501) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV5) for 10 seconds and Action Speed DOWN(LV5) for 10 seconds",
        "effect": "550% + 501",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Attack +, Physical Defense +",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack + (+159), Physical Defense + (+211)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 159,
            "type": "flat"
          },
          {
            "name": "Physical Defense +",
            "value": 211,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Critical Damage+, Block+",
        "icon": "skill001/skill1001",
        "effect": "Physical Critical Damage+ (+176), Block+ (+15)",
        "effectValues": [
          {
            "name": "Physical Critical Damage+",
            "value": 176,
            "type": "flat"
          },
          {
            "name": "Block+",
            "value": 15,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Soltina",
    "id": 2047,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1200,
      "ATK": 281,
      "MATK": 168,
      "DEF": 343,
      "MDEF": 137
    },
    "skillRotation": {
      "opening": "Skill2 → Skill3 → Basic → Basic → Basic",
      "loop": "Basic → Basic → Skill3 → Basic → Basic → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "soltina"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Royal Knight’s Teachings",
        "icon": "skill001/skill0019",
        "description": "Restores own HP by 4866 (4866) and inflicts Block33UP for 10 seconds and Healing Shield (300%, restores ) for 10 seconds",
        "descriptionLv1": "Restores own HP by 416 (416) and inflicts Block15UP for 10 seconds and Healing Shield (300%, restores ) for 10 seconds",
        "descriptionLv90": "Restores own HP by 4866 (4866) and inflicts Block33UP for 10 seconds and Healing Shield (300%, restores ) for 10 seconds",
        "target": "Self",
        "castTime": 1.58,
        "damageScaling": "2500% ATK",
        "baseDamage": "+416",
        "levelGrowth": "+50",
        "lvl1": "2500% + 416",
        "lvl90": "2500% + 4866",
        "effects": [
          "Block+ LvMax",
          "Healing Shield Lv5"
        ],
        "buffEffects": [
          {
            "name": "Block+ LvMax",
            "value": 15,
            "type": "flat",
            "duration": 10
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
        "name": "Beorn Holy Sword Arts: Heroic Strike",
        "icon": "skill001/skill0007",
        "description": "Deals 5814 (ATK x 3.0 + 2325) physical damage to the nearest enemy and inflicts Accuracy -33DOWN for 10 seconds",
        "descriptionLv1": "Deals 796 (ATK x 3.0 + 100) physical damage to the nearest enemy and inflicts Accuracy -15DOWN for 10 seconds",
        "descriptionLv90": "Deals 5814 (ATK x 3.0 + 2325) physical damage to the nearest enemy and inflicts Accuracy -33DOWN for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.58,
        "damageScaling": "300% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+25",
        "lvl1": "300% + 100",
        "lvl90": "300% + 2325",
        "effects": [
          "Accuracy - LvMax"
        ],
        "buffEffects": [
          {
            "name": "Accuracy - LvMax",
            "value": -15,
            "type": "flat",
            "duration": 10
          }
        ],
        "duration": 10
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Meteor Trestias",
        "icon": "skill001/skill0003_1",
        "description": "Deals 3827 (ATK x 3.0 + 338) physical damage to the 3 nearest enemies and applies Hit-Based Shield(LV1) to self for 8 seconds and Taunt for 8 seconds",
        "effect": "300% + 338",
        "buffEffects": [
          {
            "name": "Hit-Based Shield Ultimate Lv1",
            "value": 35,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Taunt",
            "value": 0,
            "type": "unknown",
            "duration": 8
          }
        ]
      },
      {
        "rank": 2,
        "name": "Meteor Trestias",
        "icon": "skill001/skill0003_2",
        "description": "Deals 4566 (ATK x 3.6 + 380) physical damage to the 3 nearest enemies and applies Hit-Based Shield(LV2) to self for 10 seconds and Taunt for 10 seconds",
        "effect": "360% + 380",
        "buffEffects": [
          {
            "name": "Hit-Based Shield Ultimate Lv1",
            "value": 35,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Taunt",
            "value": 0,
            "type": "unknown",
            "duration": 8
          }
        ]
      },
      {
        "rank": 3,
        "name": "Meteor Trestias",
        "icon": "skill001/skill0003_3",
        "description": "Deals 5135 (ATK x 4.05 + 425) physical damage to the 3 nearest enemies and applies Hit-Based Shield(LV3) to self for 11 seconds and Taunt for 11 seconds",
        "effect": "405% + 425",
        "buffEffects": [
          {
            "name": "Hit-Based Shield Ultimate Lv1",
            "value": 35,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Taunt",
            "value": 0,
            "type": "unknown",
            "duration": 8
          }
        ]
      },
      {
        "rank": 4,
        "name": "Meteor Trestias",
        "icon": "skill001/skill0003_4",
        "description": "Deals 5528 (ATK x 4.35 + 469) physical damage to the 3 nearest enemies and applies Hit-Based Shield(LV4) to self for 12 seconds and Taunt for 12 seconds",
        "effect": "435% + 469",
        "buffEffects": [
          {
            "name": "Hit-Based Shield Ultimate Lv1",
            "value": 35,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Taunt",
            "value": 0,
            "type": "unknown",
            "duration": 8
          }
        ]
      },
      {
        "rank": 5,
        "name": "Meteor Trestias",
        "icon": "skill001/skill0003_5",
        "description": "Deals 5745 (ATK x 4.5 + 512) physical damage to the 3 nearest enemies and applies Hit-Based Shield(LV5) to self for 13 seconds and Taunt for 13 seconds",
        "effect": "450% + 512",
        "buffEffects": [
          {
            "name": "Hit-Based Shield Ultimate Lv1",
            "value": 35,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Taunt",
            "value": 0,
            "type": "unknown",
            "duration": 8
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Attack +, Max HP +",
        "icon": "skill001/skill1003",
        "effect": "Physical Attack + (+159), Max HP + (+3444)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 159,
            "type": "flat"
          },
          {
            "name": "Max HP +",
            "value": 3444,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Defense +, Block+",
        "icon": "skill001/skill1006",
        "effect": "Physical Defense + (+141), Block+ (+20)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 141,
            "type": "flat"
          },
          {
            "name": "Block+",
            "value": 20,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Artia",
    "id": 2048,
    "rarity": "SSR",
    "element": "Fire",
    "role": "Tank",
    "tags": [
      "Debuff",
      "Disrupt",
      "Taunt"
    ],
    "baseStats": {
      "HP": 2369,
      "ATK": 232,
      "MATK": 139,
      "DEF": 226,
      "MDEF": 90
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Slow",
      "speedValue": "1.11"
    },
    "slug": "artia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Dual Demon Swords",
        "icon": "skill001/skill0010",
        "description": "Deals 6450 (MATK x 2.1 + 1940) magic damage to the nearest enemy and inflicts Magic Defense-21%+-218DOWN for 10 seconds and Magic Type Defense -20%DOWN for 10 seconds",
        "descriptionLv1": "Deals 1060 (MATK x 2.1 + 160) magic damage to the nearest enemy and inflicts Magic Defense-21%+-40DOWN for 10 seconds and Magic Type Defense -20%DOWN for 10 seconds",
        "descriptionLv90": "Deals 6450 (MATK x 2.1 + 1940) magic damage to the nearest enemy and inflicts Magic Defense-21%+-218DOWN for 10 seconds and Magic Type Defense -20%DOWN for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.78,
        "damageScaling": "210% ATK",
        "baseDamage": "+160",
        "levelGrowth": "+20",
        "lvl1": "210% + 160",
        "lvl90": "210% + 1940",
        "effects": [
          "Magic Defense- Lv4",
          "Magic Type Defense - Lv5"
        ],
        "buffEffects": [
          {
            "name": "Magic Defense- Lv4",
            "value": -21,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Type Defense - Lv5",
            "value": -20,
            "type": "percent",
            "duration": 10
          }
        ],
        "duration": 10
      },
      {
        "slot": 3,
        "name": "Enchantment Blade",
        "icon": "skill001/skill0008",
        "description": "Deals 7095 (MATK x 2.4 + 1940) magic damage to the nearest enemy and inflicts Physical Attack -11%+-203DOWN for 10 seconds and Magic Attack -11%+-203DOWN for 10 seconds",
        "descriptionLv1": "Deals 1189 (MATK x 2.4 + 160) magic damage to the nearest enemy and inflicts Physical Attack -11%+-25DOWN for 10 seconds and Magic Attack -11%+-25DOWN for 10 seconds",
        "descriptionLv90": "Deals 7095 (MATK x 2.4 + 1940) magic damage to the nearest enemy and inflicts Physical Attack -11%+-203DOWN for 10 seconds and Magic Attack -11%+-203DOWN for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.78,
        "damageScaling": "240% ATK",
        "baseDamage": "+160",
        "levelGrowth": "+20",
        "lvl1": "240% + 160",
        "lvl90": "240% + 1940",
        "effects": [
          "Physical Attack - Lv4",
          "Magic Attack - Lv4"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack - Lv4",
            "value": -11,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Attack - Lv4",
            "value": -11,
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
        "name": "Taboo of the Calamity God of the Dead’s Sin Mark",
        "icon": "skill001/skill0012_1",
        "description": "Deals 6846 (MATK x 3.0 + 402) magic damage to the 3 nearest enemies and inflicts Curse for 10 seconds and Fear (Lv1) for 3 seconds",
        "effect": "300% + 402",
        "buffEffects": [
          {
            "name": "Curse",
            "value": 0,
            "type": "unknown",
            "duration": 10
          },
          {
            "name": "Fear Ultimate Lv1",
            "value": -50,
            "type": "flat",
            "duration": 3
          }
        ]
      },
      {
        "rank": 2,
        "name": "Taboo of the Calamity God of the Dead’s Sin Mark",
        "icon": "skill001/skill0012_2",
        "description": "Deals 8189 (MATK x 3.6 + 457) magic damage to the 3 nearest enemies and inflicts Curse for 10 seconds and Fear (Lv2) for 3 seconds",
        "effect": "360% + 457",
        "buffEffects": [
          {
            "name": "Curse",
            "value": 0,
            "type": "unknown",
            "duration": 10
          },
          {
            "name": "Fear Ultimate Lv1",
            "value": -50,
            "type": "flat",
            "duration": 3
          }
        ]
      },
      {
        "rank": 3,
        "name": "Taboo of the Calamity God of the Dead’s Sin Mark",
        "icon": "skill001/skill0012_3",
        "description": "Deals 9200 (MATK x 4.05 + 501) magic damage to the 3 nearest enemies and inflicts Curse for 10 seconds and Fear (Lv3) for 3 seconds",
        "effect": "405% + 501",
        "buffEffects": [
          {
            "name": "Curse",
            "value": 0,
            "type": "unknown",
            "duration": 10
          },
          {
            "name": "Fear Ultimate Lv1",
            "value": -50,
            "type": "flat",
            "duration": 3
          }
        ]
      },
      {
        "rank": 4,
        "name": "Taboo of the Calamity God of the Dead’s Sin Mark",
        "icon": "skill001/skill0012_4",
        "description": "Deals 9909 (MATK x 4.35 + 566) magic damage to the 3 nearest enemies and inflicts Curse for 10 seconds and Fear (Lv4) for 3 seconds",
        "effect": "435% + 566",
        "buffEffects": [
          {
            "name": "Curse",
            "value": 0,
            "type": "unknown",
            "duration": 10
          },
          {
            "name": "Fear Ultimate Lv1",
            "value": -50,
            "type": "flat",
            "duration": 3
          }
        ]
      },
      {
        "rank": 5,
        "name": "Taboo of the Calamity God of the Dead’s Sin Mark",
        "icon": "skill001/skill0012_5",
        "description": "Deals 10277 (MATK x 4.5 + 611) magic damage to the 3 nearest enemies and inflicts Curse for 10 seconds and Fear (Lv5) for 3 seconds",
        "effect": "450% + 611",
        "buffEffects": [
          {
            "name": "Curse",
            "value": 0,
            "type": "unknown",
            "duration": 10
          },
          {
            "name": "Fear Ultimate Lv1",
            "value": -50,
            "type": "flat",
            "duration": 3
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Magic Critical Damage+, Action Speed +",
        "icon": "skill001/skill1001",
        "effect": "Magic Critical Damage+ (+90), Action Speed + (+10%)",
        "effectValues": [
          {
            "name": "Magic Critical Damage+",
            "value": 90,
            "type": "flat"
          },
          {
            "name": "Action Speed +",
            "value": 10,
            "type": "percent"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Magic Type ATK +, Magic Attack +",
        "icon": "skill001/skill1001",
        "effect": "Magic Type ATK + (+10%), Magic Attack + (+389)",
        "effectValues": [
          {
            "name": "Magic Type ATK +",
            "value": 10,
            "type": "percent"
          },
          {
            "name": "Magic Attack +",
            "value": 389,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "The Dark Knight",
    "id": 2049,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1819,
      "ATK": 257,
      "MATK": 429,
      "DEF": 57,
      "MDEF": 143
    },
    "skillRotation": {
      "opening": "Skill2 → Skill3 → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Very Slow",
      "speedValue": "1.36"
    },
    "slug": "the-dark-knight"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Steel Sever",
        "icon": "skill001/skill0002",
        "description": "Deals 9708 (ATK x 3.5 + 3170) physical damage to the nearest enemy",
        "descriptionLv1": "Deals 1805 (ATK x 3.5 + 500) physical damage to the nearest enemy",
        "descriptionLv90": "Deals 9708 (ATK x 3.5 + 3170) physical damage to the nearest enemy",
        "target": "Nearest Enemy",
        "castTime": 1.2,
        "damageScaling": "350% ATK",
        "baseDamage": "+500",
        "levelGrowth": "+30",
        "lvl1": "350% + 500",
        "lvl90": "350% + 3170",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "Single-Minded Strike",
        "icon": "skill001/skill0019",
        "description": "Applies Hit-Based Physical Damage UP(150%+4950, 1 hit(s)) to self for 4 secondsand Debuff Resistance 1%UP for 4 seconds",
        "descriptionLv1": "Applies Hit-Based Physical Damage UP(150%+500, 1 hit(s)) to self for 4 secondsand Debuff Resistance 1%UP for 4 seconds",
        "descriptionLv90": "Applies Hit-Based Physical Damage UP(150%+4950, 1 hit(s)) to self for 4 secondsand Debuff Resistance 1%UP for 4 seconds",
        "target": "Self",
        "castTime": 1.6,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Hit-Based Physical Damage +",
          "Debuff Resistance LvMax"
        ],
        "buffEffects": [
          {
            "name": "Hit-Based Physical Damage +",
            "value": 150,
            "type": "percent",
            "duration": 4
          },
          {
            "name": "Debuff Resistance LvMax",
            "value": 1,
            "type": "percent",
            "duration": 4
          }
        ],
        "duration": 4
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Ten-Thousand Blade Flash",
        "icon": "skill001/skill0003_1",
        "description": "Deals 5530 (ATK x 2.8 + 300) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV1) for 10 secondsand BlockDOWN(LV1) for 10 seconds",
        "effect": "280% + 300",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "Ten-Thousand Blade Flash",
        "icon": "skill001/skill0003_2",
        "description": "Deals 6564 (ATK x 3.3 + 400) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV2) for 10 secondsand BlockDOWN(LV2) for 10 seconds",
        "effect": "330% + 400",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "Ten-Thousand Blade Flash",
        "icon": "skill001/skill0003_3",
        "description": "Deals 7411 (ATK x 3.7 + 500) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV3) for 10 secondsand BlockDOWN(LV3) for 10 seconds",
        "effect": "370% + 500",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "Ten-Thousand Blade Flash",
        "icon": "skill001/skill0003_4",
        "description": "Deals 8022 (ATK x 4.0 + 550) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV4) for 10 secondsand BlockDOWN(LV4) for 10 seconds",
        "effect": "400% + 550",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "Ten-Thousand Blade Flash",
        "icon": "skill001/skill0003_5",
        "description": "Deals 8445 (ATK x 4.2 + 600) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV5) for 10 secondsand BlockDOWN(LV5) for 10 seconds",
        "effect": "420% + 600",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -10,
            "type": "flat",
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
        "name": "Skill Damage +, Accuracy +",
        "icon": "skill001/skill1001",
        "effect": "Skill Damage + (+30%), Accuracy + (+20)",
        "effectValues": [
          {
            "name": "Skill Damage +",
            "value": 30,
            "type": "percent"
          },
          {
            "name": "Accuracy +",
            "value": 20,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Inrine",
    "id": 2050,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [],
    "baseStats": {
      "HP": 1819,
      "ATK": 373,
      "MATK": 224,
      "DEF": 143,
      "MDEF": 57
    },
    "skillRotation": {
      "opening": "",
      "loop": ""
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "ssr-inrine"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Area Heal",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 4560 (4560) to all allies and inflicts HP Regeneration5%+773 for 3 seconds",
        "descriptionLv1": "Restores HP by 1000 (1000) to all allies and inflicts HP Regeneration5%+150 for 3 seconds",
        "descriptionLv90": "Restores HP by 4560 (4560) to all allies and inflicts HP Regeneration5%+773 for 3 seconds",
        "target": "All Allies",
        "castTime": 1.38,
        "damageScaling": "2500% ATK",
        "baseDamage": "+1000",
        "levelGrowth": "+40",
        "lvl1": "2500% + 1000",
        "lvl90": "2500% + 4560",
        "effects": [
          "HP Regeneration+ Lv3"
        ],
        "buffEffects": [
          {
            "name": "HP Regeneration+ Lv3",
            "value": 5,
            "type": "percent",
            "duration": 3
          }
        ],
        "duration": 3
      },
      {
        "slot": 3,
        "name": "Cam",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 4060 (4060) to all alliesand removes debuffs",
        "descriptionLv1": "Restores HP by 500 (500) to all alliesand removes debuffs",
        "descriptionLv90": "Restores HP by 4060 (4060) to all alliesand removes debuffs",
        "target": "All Allies",
        "castTime": 1.38,
        "damageScaling": "1500% ATK",
        "baseDamage": "+500",
        "levelGrowth": "+40",
        "lvl1": "1500% + 500",
        "lvl90": "1500% + 4060",
        "effects": [
          "Debuff Resistance LvMax"
        ],
        "buffEffects": [
          {
            "name": "Debuff Resistance LvMax",
            "value": 1,
            "type": "percent"
          }
        ],
        "duration": null
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Gentle White Lily’s Embrace",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 1000 (1000) to all allies and inflicts Hit-Based Physical Healing Shield (LV1) for 20 seconds and Hit-Based Magic Healing Shield (LV1) for 20 seconds",
        "effect": "4000% + 1000",
        "buffEffects": [
          {
            "name": "Hit-Based Physical Healing Shield Ultimate Lv1",
            "value": 30,
            "type": "percent",
            "duration": 20
          },
          {
            "name": "Hit-Based Magic Healing Shield Ultimate Lv1",
            "value": 30,
            "type": "percent",
            "duration": 20
          }
        ]
      },
      {
        "rank": 2,
        "name": "Gentle White Lily’s Embrace",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 1500 (1500) to all allies and inflicts Hit-Based Physical Healing Shield (LV2) for 20 seconds and Hit-Based Magic Healing Shield (LV2) for 20 seconds",
        "effect": "4800% + 1500",
        "buffEffects": [
          {
            "name": "Hit-Based Physical Healing Shield Ultimate Lv1",
            "value": 30,
            "type": "percent",
            "duration": 20
          },
          {
            "name": "Hit-Based Magic Healing Shield Ultimate Lv1",
            "value": 30,
            "type": "percent",
            "duration": 20
          }
        ]
      },
      {
        "rank": 3,
        "name": "Gentle White Lily’s Embrace",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 2000 (2000) to all allies and inflicts Hit-Based Physical Healing Shield (LV3) for 20 seconds and Hit-Based Magic Healing Shield (LV3) for 20 seconds",
        "effect": "5500% + 2000",
        "buffEffects": [
          {
            "name": "Hit-Based Physical Healing Shield Ultimate Lv1",
            "value": 30,
            "type": "percent",
            "duration": 20
          },
          {
            "name": "Hit-Based Magic Healing Shield Ultimate Lv1",
            "value": 30,
            "type": "percent",
            "duration": 20
          }
        ]
      },
      {
        "rank": 4,
        "name": "Gentle White Lily’s Embrace",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 2300 (2300) to all allies and inflicts Hit-Based Physical Healing Shield (LV4) for 20 seconds and Hit-Based Magic Healing Shield (LV4) for 20 seconds",
        "effect": "6000% + 2300",
        "buffEffects": [
          {
            "name": "Hit-Based Physical Healing Shield Ultimate Lv1",
            "value": 30,
            "type": "percent",
            "duration": 20
          },
          {
            "name": "Hit-Based Magic Healing Shield Ultimate Lv1",
            "value": 30,
            "type": "percent",
            "duration": 20
          }
        ]
      },
      {
        "rank": 5,
        "name": "Gentle White Lily’s Embrace",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 2500 (2500) to all allies and inflicts Hit-Based Physical Healing Shield (LV5) for 20 seconds and Hit-Based Magic Healing Shield (LV5) for 20 seconds",
        "effect": "6500% + 2500",
        "buffEffects": [
          {
            "name": "Hit-Based Physical Healing Shield Ultimate Lv1",
            "value": 30,
            "type": "percent",
            "duration": 20
          },
          {
            "name": "Hit-Based Magic Healing Shield Ultimate Lv1",
            "value": 30,
            "type": "percent",
            "duration": 20
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Defense +, Magic Defense+",
        "icon": "skill001/skill1006",
        "effect": "Physical Defense + (+141), Magic Defense+ (+141)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 141,
            "type": "flat"
          },
          {
            "name": "Magic Defense+",
            "value": 141,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Skill Damage +, Action Speed +",
        "icon": "skill001/skill1005",
        "effect": "Skill Damage + (+10%), Action Speed + (+10%)",
        "effectValues": [
          {
            "name": "Skill Damage +",
            "value": 10,
            "type": "percent"
          },
          {
            "name": "Action Speed +",
            "value": 10,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "Frey",
    "id": 2051,
    "rarity": "SSR",
    "element": "Holy",
    "role": "Support",
    "tags": [
      "Heal",
      "Buff",
      "Cleanse"
    ],
    "baseStats": {
      "HP": 2588,
      "ATK": 253,
      "MATK": 151,
      "DEF": 82,
      "MDEF": 32
    },
    "skillRotation": {
      "opening": "Basic → Skill3 → Basic → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "frey"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Don’t underestimate a treasure hunter!",
        "icon": "skill001/skill0002",
        "description": "Deals 6638 (ATK x 4.0 + 2830) physical damage to the nearest enemy",
        "descriptionLv1": "Deals 920 (ATK x 4.0 + 160) physical damage to the nearest enemy",
        "descriptionLv90": "Deals 6638 (ATK x 4.0 + 2830) physical damage to the nearest enemy",
        "target": "Nearest Enemy",
        "castTime": 0.66,
        "damageScaling": "400% ATK",
        "baseDamage": "+160",
        "levelGrowth": "+30",
        "lvl1": "400% + 160",
        "lvl90": "400% + 2830",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "This isn’t something an idiot could pull off, you know?",
        "icon": "skill001/skill0009",
        "description": "Deals 1726 (ATK x 1.2 + 584) physical damage to the 3 nearest enemies and inflicts Physical Defense -18%+-208DOWN for 10 seconds and Accuracy -23DOWN for 10 seconds",
        "descriptionLv1": "Deals 278 (ATK x 1.2 + 50) physical damage to the 3 nearest enemies and inflicts Physical Defense -18%+-30DOWN for 10 seconds and Accuracy -11DOWN for 10 seconds",
        "descriptionLv90": "Deals 1726 (ATK x 1.2 + 584) physical damage to the 3 nearest enemies and inflicts Physical Defense -18%+-208DOWN for 10 seconds and Accuracy -23DOWN for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": 0.66,
        "damageScaling": "120% ATK",
        "baseDamage": "+50",
        "levelGrowth": "+6",
        "lvl1": "120% + 50",
        "lvl90": "120% + 584",
        "effects": [
          "Physical Defense - Lv3",
          "Accuracy - Lv4"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense - Lv3",
            "value": -18,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Accuracy - Lv4",
            "value": -11,
            "type": "flat",
            "duration": 10
          }
        ],
        "duration": 10
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Cruel Destroyer",
        "icon": "skill001/skill0003_1",
        "description": "Deals 5260 (ATK x 5.0 + 500) physical damage to the 3 nearest enemies",
        "effect": "500% + 500",
        "buffEffects": null
      },
      {
        "rank": 2,
        "name": "Cruel Destroyer",
        "icon": "skill001/skill0003_2",
        "description": "Deals 6362 (ATK x 6.0 + 650) physical damage to the 3 nearest enemies",
        "effect": "600% + 650",
        "buffEffects": null
      },
      {
        "rank": 3,
        "name": "Cruel Destroyer",
        "icon": "skill001/skill0003_3",
        "description": "Deals 7890 (ATK x 7.5 + 750) physical damage to the 3 nearest enemies",
        "effect": "750% + 750",
        "buffEffects": null
      },
      {
        "rank": 4,
        "name": "Cruel Destroyer",
        "icon": "skill001/skill0003_4",
        "description": "Deals 8416 (ATK x 8.0 + 800) physical damage to the 3 nearest enemies",
        "effect": "800% + 800",
        "buffEffects": null
      },
      {
        "rank": 5,
        "name": "Cruel Destroyer",
        "icon": "skill001/skill0003_5",
        "description": "Deals 8942 (ATK x 8.5 + 850) physical damage to the 3 nearest enemies",
        "effect": "850% + 850",
        "buffEffects": null
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Attack +, Action Speed +",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack + (+159), Action Speed + (+10%)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 159,
            "type": "flat"
          },
          {
            "name": "Action Speed +",
            "value": 10,
            "type": "percent"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Critical Damage+, Skill Damage +",
        "icon": "skill001/skill1001",
        "effect": "Physical Critical Damage+ (+90), Skill Damage + (+30%)",
        "effectValues": [
          {
            "name": "Physical Critical Damage+",
            "value": 90,
            "type": "flat"
          },
          {
            "name": "Skill Damage +",
            "value": 30,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "Gemini",
    "id": 2052,
    "rarity": "SSR",
    "element": "Fire",
    "role": "Attacker",
    "tags": [
      "Debuff"
    ],
    "baseStats": {
      "HP": 1819,
      "ATK": 190,
      "MATK": 114,
      "DEF": 143,
      "MDEF": 57
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Very Fast",
      "speedValue": "0.36"
    },
    "slug": "gemini"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Sylvesto",
        "icon": "skill001/skill0008",
        "description": "Deals 6797 (MATK x 3.2 + 2375) magic damage to the farthest enemy and inflicts Physical Defense -18%+-208DOWN for 5 seconds and Magic Defense-18%+-208DOWN for 5 seconds",
        "descriptionLv1": "Deals 1033 (MATK x 3.2 + 150) magic damage to the farthest enemy and inflicts Physical Defense -18%+-30DOWN for 5 seconds and Magic Defense-18%+-30DOWN for 5 seconds",
        "descriptionLv90": "Deals 6797 (MATK x 3.2 + 2375) magic damage to the farthest enemy and inflicts Physical Defense -18%+-208DOWN for 5 seconds and Magic Defense-18%+-208DOWN for 5 seconds",
        "target": "Farthest Enemy",
        "castTime": 1.38,
        "damageScaling": "320% ATK",
        "baseDamage": "+150",
        "levelGrowth": "+25",
        "lvl1": "320% + 150",
        "lvl90": "320% + 2375",
        "effects": [
          "Physical Defense - Lv3",
          "Magic Defense- Lv3"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense - Lv3",
            "value": -18,
            "type": "percent",
            "duration": 5
          },
          {
            "name": "Magic Defense- Lv3",
            "value": -18,
            "type": "percent",
            "duration": 5
          }
        ],
        "duration": 5
      },
      {
        "slot": 3,
        "name": "Guardian of the Little Dwarves",
        "icon": "skill001/skill0019",
        "description": "Applies HP Regeneration3%+495 to all allies for 10 seconds and Block14UP for 10 seconds",
        "descriptionLv1": "Applies HP Regeneration3%+50 to all allies for 10 seconds and Block7UP for 10 seconds",
        "descriptionLv90": "Applies HP Regeneration3%+495 to all allies for 10 seconds and Block14UP for 10 seconds",
        "target": "All Allies",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "HP Regeneration+ Lv1",
          "Block+ Lv2"
        ],
        "buffEffects": [
          {
            "name": "HP Regeneration+ Lv1",
            "value": 3,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Block+ Lv2",
            "value": 7,
            "type": "flat",
            "duration": 10
          }
        ],
        "duration": 10
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "O spirits, dance Become the guiding wisdom of all things ",
        "icon": "skill001/skill0006_1",
        "description": "Deals 8301 (MATK x 5.5 + 700) magic damage to all enemies and inflicts Action Speed DOWN(LV1) for 10 seconds and BlockDOWN(LV1) for 10 seconds",
        "effect": "550% + 700",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "O spirits, dance Become the guiding wisdom of all things ",
        "icon": "skill001/skill0006_2",
        "description": "Deals 10865 (MATK x 7.5 + 500) magic damage to all enemies and inflicts Action Speed DOWN(LV1) for 10 seconds and BlockDOWN(LV2) for 10 seconds",
        "effect": "750% + 500",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "O spirits, dance Become the guiding wisdom of all things ",
        "icon": "skill001/skill0006_3",
        "description": "Deals 12988 (MATK x 9.0 + 550) magic damage to all enemies and inflicts Action Speed DOWN(LV3) for 10 seconds and BlockDOWN(LV3) for 10 seconds",
        "effect": "900% + 550",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "O spirits, dance Become the guiding wisdom of all things ",
        "icon": "skill001/skill0006_4",
        "description": "Deals 14420 (MATK x 10.0 + 600) magic damage to all enemies and inflicts Action Speed DOWN(LV4) for 10 seconds and BlockDOWN(LV4) for 10 seconds",
        "effect": "1000% + 600",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "O spirits, dance Become the guiding wisdom of all things ",
        "icon": "skill001/skill0006_5",
        "description": "Deals 15882 (MATK x 11.0 + 680) magic damage to all enemies and inflicts Action Speed DOWN(LV5) for 10 seconds and BlockDOWN(LV5) for 10 seconds",
        "effect": "1100% + 680",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Magic Attack +, Action Speed +",
        "icon": "skill001/skill1006",
        "effect": "Magic Attack + (+259), Action Speed + (+10%)",
        "effectValues": [
          {
            "name": "Magic Attack +",
            "value": 259,
            "type": "flat"
          },
          {
            "name": "Action Speed +",
            "value": 10,
            "type": "percent"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Healing Received +, Block+",
        "icon": "skill001/skill1003",
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
    "name": "Estiriel",
    "id": 2053,
    "rarity": "SSR",
    "element": "Wind",
    "role": "Attacker",
    "tags": [
      "Heal",
      "Buff",
      "Debuff"
    ],
    "baseStats": {
      "HP": 1457,
      "ATK": 166,
      "MATK": 276,
      "DEF": 90,
      "MDEF": 226
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Skill3 → Basic → Basic",
      "loop": "Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "estiriel"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Thunderfire",
        "icon": "skill001/skill0009",
        "description": "Deals 5262 (ATK x 3.5 + 1930) physical damage to the nearest enemy and inflicts Physical Defense -23%+-317DOWN for 5 seconds and Burn(HP --1485 per second) for 12 seconds",
        "descriptionLv1": "Deals 815 (ATK x 3.5 + 150) physical damage to the nearest enemy and inflicts Physical Defense -23%+-50DOWN for 5 seconds and Burn(HP --150 per second) for 12 seconds",
        "descriptionLv90": "Deals 5262 (ATK x 3.5 + 1930) physical damage to the nearest enemy and inflicts Physical Defense -23%+-317DOWN for 5 seconds and Burn(HP --1485 per second) for 12 seconds",
        "target": "Nearest Enemy",
        "castTime": 0.66,
        "damageScaling": "350% ATK",
        "baseDamage": "+150",
        "levelGrowth": "+20",
        "lvl1": "350% + 150",
        "lvl90": "350% + 1930",
        "effects": [
          "Physical Defense - Lv5",
          "Burn Lv5"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense - Lv5",
            "value": -23,
            "type": "percent",
            "duration": 5
          },
          {
            "name": "Burn Lv5",
            "value": -150,
            "type": "flat",
            "duration": 12
          }
        ],
        "duration": 5
      },
      {
        "slot": 3,
        "name": "Armor-Sleeve Touch",
        "icon": "skill001/skill0013",
        "description": "Applies Physical Attack 15%+475UP to self for 10 seconds and Action Speed 17%UP for 10 seconds",
        "descriptionLv1": "Applies Physical Attack 15%+30UP to self for 10 seconds and Action Speed 17%UP for 10 seconds",
        "descriptionLv90": "Applies Physical Attack 15%+475UP to self for 10 seconds and Action Speed 17%UP for 10 seconds",
        "target": "Self",
        "castTime": 0.66,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Attack + Lv3",
          "Action Speed + Lv4"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack + Lv3",
            "value": 15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Action Speed + Lv4",
            "value": 17,
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
        "name": "Heaven Sever",
        "icon": "skill001/skill0003_1",
        "description": "Deals 4388 (ATK x 4.2 + 390) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV1) for 8 seconds and BlockDOWN(LV1) for 8 seconds",
        "effect": "420% + 390",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 8
          }
        ]
      },
      {
        "rank": 2,
        "name": "Heaven Sever",
        "icon": "skill001/skill0003_2",
        "description": "Deals 5257 (ATK x 5.05 + 450) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV2) for 8 seconds and BlockDOWN(LV2) for 8 seconds",
        "effect": "505% + 450",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 8
          }
        ]
      },
      {
        "rank": 3,
        "name": "Heaven Sever",
        "icon": "skill001/skill0003_3",
        "description": "Deals 5941 (ATK x 5.7 + 515) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV3) for 8 seconds and BlockDOWN(LV3) for 8 seconds",
        "effect": "570% + 515",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 8
          }
        ]
      },
      {
        "rank": 4,
        "name": "Heaven Sever",
        "icon": "skill001/skill0003_4",
        "description": "Deals 6369 (ATK x 6.1 + 562) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV4) for 8 seconds and BlockDOWN(LV4) for 8 seconds",
        "effect": "610% + 562",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 8
          }
        ]
      },
      {
        "rank": 5,
        "name": "Heaven Sever",
        "icon": "skill001/skill0003_5",
        "description": "Deals 6798 (ATK x 6.5 + 610) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV5) for 8 seconds and BlockDOWN(LV5) for 8 seconds",
        "effect": "650% + 610",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 8
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Max HP +, Physical Attack +",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+3444), Physical Attack + (+259)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 3444,
            "type": "flat"
          },
          {
            "name": "Physical Attack +",
            "value": 259,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Critical Damage+, Physical Attack +",
        "icon": "skill001/skill1005",
        "effect": "Physical Critical Damage+ (+90), Physical Attack + (+130)",
        "effectValues": [
          {
            "name": "Physical Critical Damage+",
            "value": 90,
            "type": "flat"
          },
          {
            "name": "Physical Attack +",
            "value": 130,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Hildis",
    "id": 2054,
    "rarity": "SSR",
    "element": "Fire",
    "role": "Attacker",
    "tags": [
      "Buff",
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2259,
      "ATK": 190,
      "MATK": 114,
      "DEF": 82,
      "MDEF": 32
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Very Fast",
      "speedValue": "0.36"
    },
    "slug": "hildis"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Goddess, grant me strength!",
        "icon": "skill001/skill0017",
        "description": "Applies Physical Attack 18%+658UP to self for 10 seconds and Physical Critical Damage673UP for 10 seconds",
        "descriptionLv1": "Applies Physical Attack 18%+35UP to self for 10 seconds and Physical Critical Damage50UP for 10 seconds",
        "descriptionLv90": "Applies Physical Attack 18%+658UP to self for 10 seconds and Physical Critical Damage673UP for 10 seconds",
        "target": "Self",
        "castTime": 1.08,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Attack + Lv4",
          "Physical Critical Damage+ Lv4"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack + Lv4",
            "value": 18,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Physical Critical Damage+ Lv4",
            "value": 50,
            "type": "flat",
            "duration": 10
          }
        ],
        "duration": 10
      },
      {
        "slot": 3,
        "name": "Do as you please, roa!",
        "icon": "skill001/skill0007",
        "description": "Deals 6384 (ATK x 3.6 + 2385) physical damage to the nearest enemy and inflicts Physical Critical Damage-20%+-406DOWN for 7 seconds",
        "descriptionLv1": "Deals 959 (ATK x 3.6 + 160) physical damage to the nearest enemy and inflicts Physical Critical Damage-20%+-50DOWN for 7 seconds",
        "descriptionLv90": "Deals 6384 (ATK x 3.6 + 2385) physical damage to the nearest enemy and inflicts Physical Critical Damage-20%+-406DOWN for 7 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "360% ATK",
        "baseDamage": "+160",
        "levelGrowth": "+25",
        "lvl1": "360% + 160",
        "lvl90": "360% + 2385",
        "effects": [
          "Physical Critical Damage- LvMax"
        ],
        "buffEffects": [
          {
            "name": "Physical Critical Damage- LvMax",
            "value": -20,
            "type": "percent",
            "duration": 7
          }
        ],
        "duration": 7
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Full-Power Strike!",
        "icon": "skill001/skill0003_1",
        "description": "Deals 5399 (ATK x 4.5 + 400) physical damage to the 3 nearest enemies and inflicts Physical Attack DOWN(LV1) for 10 seconds and Accuracy DOWN(LV1) for 10 seconds",
        "effect": "450% + 400",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Accuracy - Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "Full-Power Strike!",
        "icon": "skill001/skill0003_2",
        "description": "Deals 6469 (ATK x 5.4 + 470) physical damage to the 3 nearest enemies and inflicts Physical Attack DOWN(LV2) for 10 seconds and Accuracy DOWN(LV2) for 10 seconds",
        "effect": "540% + 470",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Accuracy - Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "Full-Power Strike!",
        "icon": "skill001/skill0003_3",
        "description": "Deals 7261 (ATK x 6.05 + 540) physical damage to the 3 nearest enemies and inflicts Physical Attack DOWN(LV3) for 10 seconds and Accuracy DOWN(LV3) for 10 seconds",
        "effect": "605% + 540",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Accuracy - Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "Full-Power Strike!",
        "icon": "skill001/skill0003_4",
        "description": "Deals 7932 (ATK x 6.6 + 600) physical damage to the 3 nearest enemies and inflicts Physical Attack DOWN(LV4) for 10 seconds and Accuracy DOWN(LV4) for 10 seconds",
        "effect": "660% + 600",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Accuracy - Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "Full-Power Strike!",
        "icon": "skill001/skill0003_5",
        "description": "Deals 8427 (ATK x 7.0 + 650) physical damage to the 3 nearest enemies and inflicts Physical Attack DOWN(LV5) for 10 seconds and Accuracy DOWN(LV5) for 10 seconds",
        "effect": "700% + 650",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Accuracy - Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Attack +, Physical Critical Damage+",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack + (+259), Physical Critical Damage+ (+179)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 259,
            "type": "flat"
          },
          {
            "name": "Physical Critical Damage+",
            "value": 179,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Skill Damage +, Action Speed +",
        "icon": "skill001/skill1005",
        "effect": "Skill Damage + (+20%), Action Speed + (+10%)",
        "effectValues": [
          {
            "name": "Skill Damage +",
            "value": 20,
            "type": "percent"
          },
          {
            "name": "Action Speed +",
            "value": 10,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "Luca",
    "id": 2055,
    "rarity": "SSR",
    "element": "Wind",
    "role": "Attacker",
    "tags": [
      "Buff",
      "Debuff"
    ],
    "baseStats": {
      "HP": 1819,
      "ATK": 222,
      "MATK": 133,
      "DEF": 143,
      "MDEF": 57
    },
    "skillRotation": {
      "opening": "Skill2 → Skill3 → Basic → Basic",
      "loop": "Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "luca"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Star Procession",
        "icon": "skill001/skill0007",
        "description": "Deals 1690 (ATK x 1.0 + 584) physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 6 seconds and Block-26DOWN for 6 seconds",
        "descriptionLv1": "Deals 271 (ATK x 1.0 + 50) physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 6 seconds and Block-13DOWN for 6 seconds",
        "descriptionLv90": "Deals 1690 (ATK x 1.0 + 584) physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 6 seconds and Block-26DOWN for 6 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "100% ATK",
        "baseDamage": "+50",
        "levelGrowth": "+6",
        "lvl1": "100% + 50",
        "lvl90": "100% + 584",
        "effects": [
          "Action Speed - Lv5",
          "Block- Lv5"
        ],
        "buffEffects": [
          {
            "name": "Action Speed - Lv5",
            "value": -20,
            "type": "percent",
            "duration": 6
          },
          {
            "name": "Block- Lv5",
            "value": -13,
            "type": "flat",
            "duration": 6
          }
        ],
        "duration": 6
      },
      {
        "slot": 3,
        "name": "Future Sight",
        "icon": "skill001/skill0019",
        "description": "我方全體6秒的Physical Critical Damage485UP and Magic Critical Damage485UP for 6 seconds",
        "descriptionLv1": "我方全體6秒的Physical Critical Damage40UP and Magic Critical Damage40UP for 6 seconds",
        "descriptionLv90": "我方全體6秒的Physical Critical Damage485UP and Magic Critical Damage485UP for 6 seconds",
        "target": "All Allies",
        "castTime": 1.08,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Critical Damage+ Lv3",
          "Magic Critical Damage+ Lv3"
        ],
        "buffEffects": [
          {
            "name": "Physical Critical Damage+ Lv3",
            "value": 40,
            "type": "flat",
            "duration": 6
          },
          {
            "name": "Magic Critical Damage+ Lv3",
            "value": 40,
            "type": "flat",
            "duration": 6
          }
        ],
        "duration": 6
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "La Roue de Fortune",
        "icon": "skill001/skill0020_1",
        "description": "我方全體8秒的Action Speed UP(LV1) and Hit-Based Shield(LV1) for 4 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Hit-Based Shield Ultimate Lv1",
            "value": 30,
            "type": "percent",
            "duration": 4
          }
        ]
      },
      {
        "rank": 2,
        "name": "La Roue de Fortune",
        "icon": "skill001/skill0020_2",
        "description": "我方全體8秒的Action Speed UP(LV2) and Hit-Based Shield(LV2) for 4 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Hit-Based Shield Ultimate Lv1",
            "value": 30,
            "type": "percent",
            "duration": 4
          }
        ]
      },
      {
        "rank": 3,
        "name": "La Roue de Fortune",
        "icon": "skill001/skill0020_3",
        "description": "我方全體8秒的Action Speed UP(LV3) and Hit-Based Shield(LV3) for 5 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Hit-Based Shield Ultimate Lv1",
            "value": 30,
            "type": "percent",
            "duration": 4
          }
        ]
      },
      {
        "rank": 4,
        "name": "La Roue de Fortune",
        "icon": "skill001/skill0020_4",
        "description": "我方全體8秒的Action Speed UP(LV4) and Hit-Based Shield(LV4) for 5 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Hit-Based Shield Ultimate Lv1",
            "value": 30,
            "type": "percent",
            "duration": 4
          }
        ]
      },
      {
        "rank": 5,
        "name": "La Roue de Fortune",
        "icon": "skill001/skill0020_5",
        "description": "我方全體8秒的Action Speed UP(LV5) and Hit-Based Shield(LV5) for 6 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Hit-Based Shield Ultimate Lv1",
            "value": 30,
            "type": "percent",
            "duration": 4
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Critical Damage+, Magic Critical Damage+",
        "icon": "skill001/skill1006",
        "effect": "Physical Critical Damage+ (+90), Magic Critical Damage+ (+90)",
        "effectValues": [
          {
            "name": "Physical Critical Damage+",
            "value": 90,
            "type": "flat"
          },
          {
            "name": "Magic Critical Damage+",
            "value": 90,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Skill Damage +, Action Speed +",
        "icon": "skill001/skill1005",
        "effect": "Skill Damage + (+20%), Action Speed + (+5%)",
        "effectValues": [
          {
            "name": "Skill Damage +",
            "value": 20,
            "type": "percent"
          },
          {
            "name": "Action Speed +",
            "value": 5,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "Marina",
    "id": 2056,
    "rarity": "SSR",
    "element": "Water",
    "role": "Support",
    "tags": [
      "Buff",
      "Debuff"
    ],
    "baseStats": {
      "HP": 2251,
      "ATK": 221,
      "MATK": 132,
      "DEF": 143,
      "MDEF": 57
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic",
      "loop": "Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "marina"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Rock Burst",
        "icon": "skill001/skill0007",
        "description": "Deals 1951 (ATK x 1.05 + 594) physical damage to the 3 nearest enemies and inflicts Physical Critical Damage-13%+-213DOWN for 11 seconds and Magic Critical Damage-13%+-213DOWN for 11 seconds",
        "descriptionLv1": "Deals 330 (ATK x 1.05 + 60) physical damage to the 3 nearest enemies and inflicts Physical Critical Damage-13%+-35DOWN for 11 seconds and Magic Critical Damage-13%+-35DOWN for 11 seconds",
        "descriptionLv90": "Deals 1951 (ATK x 1.05 + 594) physical damage to the 3 nearest enemies and inflicts Physical Critical Damage-13%+-213DOWN for 11 seconds and Magic Critical Damage-13%+-213DOWN for 11 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.78,
        "damageScaling": "105% ATK",
        "baseDamage": "+60",
        "levelGrowth": "+6",
        "lvl1": "105% + 60",
        "lvl90": "105% + 594",
        "effects": [
          "Physical Critical Damage- Lv4",
          "Magic Critical Damage- Lv4"
        ],
        "buffEffects": [
          {
            "name": "Physical Critical Damage- Lv4",
            "value": -13,
            "type": "percent",
            "duration": 11
          },
          {
            "name": "Magic Critical Damage- Lv4",
            "value": -13,
            "type": "percent",
            "duration": 11
          }
        ],
        "duration": 11
      },
      {
        "slot": 3,
        "name": "Arm of Growth",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Critical Damage673UP to the 3 nearest allies for 10 seconds and Healing Shield (300%) for 10 seconds",
        "descriptionLv1": "Applies Physical Critical Damage50UP to the 3 nearest allies for 10 seconds and Healing Shield (300%) for 10 seconds",
        "descriptionLv90": "Applies Physical Critical Damage673UP to the 3 nearest allies for 10 seconds and Healing Shield (300%) for 10 seconds",
        "target": "Nearest Ally",
        "castTime": 1.78,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Critical Damage+ Lv4",
          "Healing Shield Lv5"
        ],
        "buffEffects": [
          {
            "name": "Physical Critical Damage+ Lv4",
            "value": 50,
            "type": "flat",
            "duration": 10
          },
          {
            "name": "Healing Shield Lv5",
            "value": 300,
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
        "name": "Gigant’s Hammer",
        "icon": "skill001/skill0012_1",
        "description": "Deals 6448 (ATK x 4.5 + 630) physical damage to all enemies and inflicts Stun for 2 seconds and Action Speed DOWN(LV1) for 10 seconds",
        "effect": "450% + 630",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 2
          },
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "Gigant’s Hammer",
        "icon": "skill001/skill0012_2",
        "description": "Deals 8893 (ATK x 6.3 + 748) physical damage to all enemies and inflicts Stun for 2 seconds and Action Speed DOWN(LV1) for 10 seconds",
        "effect": "630% + 748",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 2
          },
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "Gigant’s Hammer",
        "icon": "skill001/skill0012_3",
        "description": "Deals 10742 (ATK x 7.65 + 851) physical damage to all enemies and inflicts Stun for 2 seconds and Action Speed DOWN(LV3) for 10 seconds",
        "effect": "765% + 851",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 2
          },
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "Gigant’s Hammer",
        "icon": "skill001/skill0012_4",
        "description": "Deals 12018 (ATK x 8.55 + 963) physical damage to all enemies and inflicts Stun for 2 seconds and Action Speed DOWN(LV4) for 10 seconds",
        "effect": "855% + 963",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 2
          },
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "Gigant’s Hammer",
        "icon": "skill001/skill0012_5",
        "description": "Deals 12713 (ATK x 9.0 + 1076) physical damage to all enemies and inflicts Stun for 2 seconds and Action Speed DOWN(LV5) for 10 seconds",
        "effect": "900% + 1076",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 2
          },
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Max HP +, Block+",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+3444), Block+ (+15)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 3444,
            "type": "flat"
          },
          {
            "name": "Block+",
            "value": 15,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Defense +, Magic Defense+",
        "icon": "skill001/skill1006",
        "effect": "Physical Defense + (+141), Magic Defense+ (+141)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 141,
            "type": "flat"
          },
          {
            "name": "Magic Defense+",
            "value": 141,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Nora",
    "id": 2057,
    "rarity": "SSR",
    "element": "Fire",
    "role": "Tank",
    "tags": [
      "Buff",
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1951,
      "ATK": 258,
      "MATK": 155,
      "DEF": 343,
      "MDEF": 137
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Skill2 → Basic",
      "loop": "Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Very Slow",
      "speedValue": "1.36"
    },
    "slug": "nora"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Oboro Night",
        "icon": "skill001/skill0009",
        "description": "Deals 2292 (ATK x 1.0 + 574) physical damage to the 3 nearest enemies and inflicts Accuracy -23DOWN for 8 seconds and Block-23DOWN for 8 seconds",
        "descriptionLv1": "Deals 383 (ATK x 1.0 + 40) physical damage to the 3 nearest enemies and inflicts Accuracy -11DOWN for 8 seconds and Block-11DOWN for 8 seconds",
        "descriptionLv90": "Deals 2292 (ATK x 1.0 + 574) physical damage to the 3 nearest enemies and inflicts Accuracy -23DOWN for 8 seconds and Block-23DOWN for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "100% ATK",
        "baseDamage": "+40",
        "levelGrowth": "+6",
        "lvl1": "100% + 40",
        "lvl90": "100% + 574",
        "effects": [
          "Accuracy - Lv4",
          "Block- Lv4"
        ],
        "buffEffects": [
          {
            "name": "Accuracy - Lv4",
            "value": -11,
            "type": "flat",
            "duration": 8
          },
          {
            "name": "Block- Lv4",
            "value": -11,
            "type": "flat",
            "duration": 8
          }
        ],
        "duration": 8
      },
      {
        "slot": 3,
        "name": "Shadow Dance",
        "icon": "skill001/skill0017",
        "description": "Applies Physical Attack 18%+658UP to self for 12 seconds and Block23UP for 12 seconds",
        "descriptionLv1": "Applies Physical Attack 18%+35UP to self for 12 seconds and Block11UP for 12 seconds",
        "descriptionLv90": "Applies Physical Attack 18%+658UP to self for 12 seconds and Block23UP for 12 seconds",
        "target": "Self",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Attack + Lv4",
          "Block+ Lv4"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack + Lv4",
            "value": 18,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Block+ Lv4",
            "value": 11,
            "type": "flat",
            "duration": 12
          }
        ],
        "duration": 12
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Limit Arrow",
        "icon": "skill001/skill0003_1",
        "description": "Deals 9990 (ATK x 5.0 + 1400) physical damage to the nearest enemy and when activating the Ultimate, applies Hit-Based Damage UP(LV1) to self for 10 seconds",
        "effect": "500% + 1400",
        "buffEffects": [
          {
            "name": "Damage + Ultimate Lv1",
            "value": 100,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "Limit Arrow",
        "icon": "skill001/skill0003_2",
        "description": "Deals 11277 (ATK x 5.4 + 2000) physical damage to the nearest enemy and when activating the Ultimate, applies Hit-Based Damage UP(LV2) to self for 10 seconds",
        "effect": "540% + 2000",
        "buffEffects": [
          {
            "name": "Damage + Ultimate Lv1",
            "value": 100,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "Limit Arrow",
        "icon": "skill001/skill0003_3",
        "description": "Deals 12192 (ATK x 5.7 + 2400) physical damage to the nearest enemy and when activating the Ultimate, applies Hit-Based Damage UP(LV3) to self for 10 seconds",
        "effect": "570% + 2400",
        "buffEffects": [
          {
            "name": "Damage + Ultimate Lv1",
            "value": 100,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "Limit Arrow",
        "icon": "skill001/skill0003_4",
        "description": "Deals 13008 (ATK x 6.0 + 2700) physical damage to the nearest enemy and when activating the Ultimate, applies Hit-Based Damage UP(LV4) to self for 10 seconds",
        "effect": "600% + 2700",
        "buffEffects": [
          {
            "name": "Damage + Ultimate Lv1",
            "value": 100,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "Limit Arrow",
        "icon": "skill001/skill0003_5",
        "description": "Deals 13823 (ATK x 6.3 + 3000) physical damage to the nearest enemy and when activating the Ultimate, applies Hit-Based Damage UP(LV5) to self for 10 seconds",
        "effect": "630% + 3000",
        "buffEffects": [
          {
            "name": "Damage + Ultimate Lv1",
            "value": 100,
            "type": "percent",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Accuracy +, Action Speed +",
        "icon": "skill001/skill1004",
        "effect": "Accuracy + (+25), Action Speed + (+10%)",
        "effectValues": [
          {
            "name": "Accuracy +",
            "value": 25,
            "type": "flat"
          },
          {
            "name": "Action Speed +",
            "value": 10,
            "type": "percent"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Attack +, Ultimate Damage +",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack + (+259), Ultimate Damage + (+15%)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 259,
            "type": "flat"
          },
          {
            "name": "Ultimate Damage +",
            "value": 15,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "Meinias",
    "id": 2058,
    "rarity": "SSR",
    "element": "Wind",
    "role": "Attacker",
    "tags": [
      "Debuff"
    ],
    "baseStats": {
      "HP": 2183,
      "ATK": 343,
      "MATK": 206,
      "DEF": 143,
      "MDEF": 57
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "meinias"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Swift as the Wind",
        "icon": "skill001/skill0002",
        "description": "Deals 6325 (ATK x 3.2 + 2770) physical damage to the nearest enemy，必中",
        "descriptionLv1": "Deals 810 (ATK x 3.2 + 100) physical damage to the nearest enemy，必中",
        "descriptionLv90": "Deals 6325 (ATK x 3.2 + 2770) physical damage to the nearest enemy，必中",
        "target": "Nearest Enemy",
        "castTime": 0.98,
        "damageScaling": "320% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+30",
        "lvl1": "320% + 100",
        "lvl90": "320% + 2770",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "Oni Stance",
        "icon": "skill001/skill0013",
        "description": "Applies Physical Attack 20%+841UP to self for 8 seconds and Physical Critical Damage673UP for 8 seconds",
        "descriptionLv1": "Applies Physical Attack 20%+40UP to self for 8 seconds and Physical Critical Damage50UP for 8 seconds",
        "descriptionLv90": "Applies Physical Attack 20%+841UP to self for 8 seconds and Physical Critical Damage673UP for 8 seconds",
        "target": "Self",
        "castTime": 0.98,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Attack + Lv5",
          "Physical Critical Damage+ Lv4"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack + Lv5",
            "value": 20,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Physical Critical Damage+ Lv4",
            "value": 50,
            "type": "flat",
            "duration": 8
          }
        ],
        "duration": 8
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Blade Dance: Plum Blossom Banquet",
        "icon": "skill001/skill0003_1",
        "description": "Deals 13421 (ATK x 11.0 + 1200) physical damage to the nearest enemy，必中 and applies Fire Type ATK UP(LV1) to self for 8 seconds",
        "effect": "1100% + 1200",
        "buffEffects": [
          {
            "name": "Fire Type ATK + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 2,
        "name": "Blade Dance: Plum Blossom Banquet",
        "icon": "skill001/skill0003_2",
        "description": "Deals 16065 (ATK x 13.2 + 1400) physical damage to the nearest enemy，必中 and applies Fire Type ATK UP(LV2) to self for 8 seconds",
        "effect": "1320% + 1400",
        "buffEffects": [
          {
            "name": "Fire Type ATK + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 3,
        "name": "Blade Dance: Plum Blossom Banquet",
        "icon": "skill001/skill0003_3",
        "description": "Deals 18103 (ATK x 14.9 + 1550) physical damage to the nearest enemy，必中 and applies Fire Type ATK UP(LV3) to self for 8 seconds",
        "effect": "1490% + 1550",
        "buffEffects": [
          {
            "name": "Fire Type ATK + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 4,
        "name": "Blade Dance: Plum Blossom Banquet",
        "icon": "skill001/skill0003_4",
        "description": "Deals 19426 (ATK x 16.0 + 1650) physical damage to the nearest enemy，必中 and applies Fire Type ATK UP(LV4) to self for 8 seconds",
        "effect": "1600% + 1650",
        "buffEffects": [
          {
            "name": "Fire Type ATK + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 5,
        "name": "Blade Dance: Plum Blossom Banquet",
        "icon": "skill001/skill0003_5",
        "description": "Deals 20142 (ATK x 16.6 + 1700) physical damage to the nearest enemy，必中 and applies Fire Type ATK UP(LV5) to self for 8 seconds",
        "effect": "1660% + 1700",
        "buffEffects": [
          {
            "name": "Fire Type ATK + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 8
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Attack +, Physical Critical Damage+",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack + (+259), Physical Critical Damage+ (+176)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 259,
            "type": "flat"
          },
          {
            "name": "Physical Critical Damage+",
            "value": 176,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Skill Damage +, Physical Attack +",
        "icon": "skill001/skill1001",
        "effect": "Skill Damage + (+30%), Physical Attack + (+259)",
        "effectValues": [
          {
            "name": "Skill Damage +",
            "value": 30,
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
    "name": "Setsuka",
    "id": 2059,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [],
    "baseStats": {
      "HP": 1457,
      "ATK": 222,
      "MATK": 133,
      "DEF": 226,
      "MDEF": 90
    },
    "skillRotation": {
      "opening": "",
      "loop": ""
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "ssr-setsuka"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Let Me Play With You♪",
        "icon": "skill001/skill0008",
        "description": "Deals 2065 (ATK x 1.1 + 594) physical damage to the 3 nearest enemies and inflicts Physical Attack -9%+-198DOWN for 7 seconds and Magic Attack -9%+-198DOWN for 7 seconds",
        "descriptionLv1": "Deals 353 (ATK x 1.1 + 60) physical damage to the 3 nearest enemies and inflicts Physical Attack -9%+-20DOWN for 7 seconds and Magic Attack -9%+-20DOWN for 7 seconds",
        "descriptionLv90": "Deals 2065 (ATK x 1.1 + 594) physical damage to the 3 nearest enemies and inflicts Physical Attack -9%+-198DOWN for 7 seconds and Magic Attack -9%+-198DOWN for 7 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.58,
        "damageScaling": "110% ATK",
        "baseDamage": "+60",
        "levelGrowth": "+6",
        "lvl1": "110% + 60",
        "lvl90": "110% + 594",
        "effects": [
          "Physical Attack - Lv3",
          "Magic Attack - Lv3"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack - Lv3",
            "value": -9,
            "type": "percent",
            "duration": 7
          },
          {
            "name": "Magic Attack - Lv3",
            "value": -9,
            "type": "percent",
            "duration": 7
          }
        ],
        "duration": 7
      },
      {
        "slot": 3,
        "name": "Become My Captive♪",
        "icon": "skill001/skill0011",
        "description": "Deals 6389 (ATK x 3.0 + 2375) physical damage to the nearest enemy and inflicts Charm for 3 seconds",
        "descriptionLv1": "Deals 951 (ATK x 3.0 + 150) physical damage to the nearest enemy and inflicts Charm for 3 seconds",
        "descriptionLv90": "Deals 6389 (ATK x 3.0 + 2375) physical damage to the nearest enemy and inflicts Charm for 3 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.58,
        "damageScaling": "300% ATK",
        "baseDamage": "+150",
        "levelGrowth": "+25",
        "lvl1": "300% + 150",
        "lvl90": "300% + 2375",
        "effects": [
          "Charm"
        ],
        "buffEffects": [
          {
            "name": "Charm",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ],
        "duration": 3
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Phantom Nail",
        "icon": "skill001/skill0012_1",
        "description": "Deals 12892 (ATK x 9.0 + 850) physical damage to the nearest enemy and inflicts Paralysis for 6 seconds 、6秒的詛咒異常狀態",
        "effect": "900% + 850",
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 6
          },
          {
            "name": "Curse",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ]
      },
      {
        "rank": 2,
        "name": "Phantom Nail",
        "icon": "skill001/skill0012_2",
        "description": "Deals 15370 (ATK x 10.8 + 920) physical damage to the nearest enemy and inflicts Paralysis for 6 seconds 、6秒的詛咒異常狀態",
        "effect": "1080% + 920",
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 6
          },
          {
            "name": "Curse",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ]
      },
      {
        "rank": 3,
        "name": "Phantom Nail",
        "icon": "skill001/skill0012_3",
        "description": "Deals 16664 (ATK x 11.7 + 1010) physical damage to the nearest enemy and inflicts Paralysis for 7 seconds 、7秒的詛咒異常狀態",
        "effect": "1170% + 1010",
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 6
          },
          {
            "name": "Curse",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ]
      },
      {
        "rank": 4,
        "name": "Phantom Nail",
        "icon": "skill001/skill0012_4",
        "description": "Deals 18008 (ATK x 12.6 + 1150) physical damage to the nearest enemy and inflicts Paralysis for 7 seconds 、7秒的詛咒異常狀態",
        "effect": "1260% + 1150",
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 6
          },
          {
            "name": "Curse",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ]
      },
      {
        "rank": 5,
        "name": "Phantom Nail",
        "icon": "skill001/skill0012_5",
        "description": "Deals 19363 (ATK x 13.5 + 1300) physical damage to the nearest enemy and inflicts Paralysis for 8 seconds 、8秒的詛咒異常狀態",
        "effect": "1350% + 1300",
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 6
          },
          {
            "name": "Curse",
            "value": 0,
            "type": "unknown",
            "duration": 6
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Max HP +, Block+",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+3444), Block+ (+15)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 3444,
            "type": "flat"
          },
          {
            "name": "Block+",
            "value": 15,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Skill Damage +, Action Speed +",
        "icon": "skill001/skill1003",
        "effect": "Skill Damage + (+20%), Action Speed + (+10%)",
        "effectValues": [
          {
            "name": "Skill Damage +",
            "value": 20,
            "type": "percent"
          },
          {
            "name": "Action Speed +",
            "value": 10,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "Yu Lima Elka",
    "id": 2060,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Tank",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 4150,
      "ATK": 267,
      "MATK": 160,
      "DEF": 35,
      "MDEF": 14
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Basic → Basic → Skill3",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "yu-lima-elka"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Pillar of Sanctity",
        "icon": "skill001/skill0005",
        "description": "Deals 2640 (MATK x 1.5 + 960) magic damage to the 3 nearest enemies",
        "descriptionLv1": "Deals 406 (MATK x 1.5 + 70) magic damage to the 3 nearest enemies",
        "descriptionLv90": "Deals 2640 (MATK x 1.5 + 960) magic damage to the 3 nearest enemies",
        "target": "Nearest Enemy",
        "castTime": 0.66,
        "damageScaling": "150% ATK",
        "baseDamage": "+70",
        "levelGrowth": "+10",
        "lvl1": "150% + 70",
        "lvl90": "150% + 960",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "Feather Dance",
        "icon": "skill001/skill0008",
        "description": "Deals 2040 (MATK x 1.3 + 584) magic damage to the 3 nearest enemies and inflicts Physical Attack -9%+-198DOWN for 10 seconds and Magic Attack -9%+-198DOWN for 10 seconds",
        "descriptionLv1": "Deals 341 (MATK x 1.3 + 50) magic damage to the 3 nearest enemies and inflicts Physical Attack -9%+-20DOWN for 10 seconds and Magic Attack -9%+-20DOWN for 10 seconds",
        "descriptionLv90": "Deals 2040 (MATK x 1.3 + 584) magic damage to the 3 nearest enemies and inflicts Physical Attack -9%+-198DOWN for 10 seconds and Magic Attack -9%+-198DOWN for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": 0.66,
        "damageScaling": "130% ATK",
        "baseDamage": "+50",
        "levelGrowth": "+6",
        "lvl1": "130% + 50",
        "lvl90": "130% + 584",
        "effects": [
          "Physical Attack - Lv3",
          "Magic Attack - Lv3"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack - Lv3",
            "value": -9,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Attack - Lv3",
            "value": -9,
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
        "name": "Trail that Destroys Evil",
        "icon": "skill001/skill0006_1",
        "description": "Deals 5216 (MATK x 4.3 + 400) magic damage to the 3 nearest enemies and inflicts Physical Critical DamageDOWN(LV1) for 10 seconds and Magic Critical DamageDOWN(LV1) for 10 seconds",
        "effect": "430% + 400",
        "buffEffects": [
          {
            "name": "Physical Critical Damage- Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Critical Damage- Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "Trail that Destroys Evil",
        "icon": "skill001/skill0006_2",
        "description": "Deals 5785 (MATK x 4.8 + 409) magic damage to the 3 nearest enemies and inflicts Physical Critical DamageDOWN(LV2) for 10 seconds and Magic Critical DamageDOWN(LV2) for 10 seconds",
        "effect": "480% + 409",
        "buffEffects": [
          {
            "name": "Physical Critical Damage- Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Critical Damage- Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "Trail that Destroys Evil",
        "icon": "skill001/skill0006_3",
        "description": "Deals 6501 (MATK x 5.4 + 453) magic damage to the 3 nearest enemies and inflicts Physical Critical DamageDOWN(LV3) for 10 seconds and Magic Critical DamageDOWN(LV3) for 10 seconds",
        "effect": "540% + 453",
        "buffEffects": [
          {
            "name": "Physical Critical Damage- Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Critical Damage- Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "Trail that Destroys Evil",
        "icon": "skill001/skill0006_4",
        "description": "Deals 6964 (MATK x 5.8 + 468) magic damage to the 3 nearest enemies and inflicts Physical Critical DamageDOWN(LV4) for 10 seconds and Magic Critical DamageDOWN(LV4) for 10 seconds",
        "effect": "580% + 468",
        "buffEffects": [
          {
            "name": "Physical Critical Damage- Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Critical Damage- Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "Trail that Destroys Evil",
        "icon": "skill001/skill0006_5",
        "description": "Deals 7202 (MATK x 6.0 + 482) magic damage to the 3 nearest enemies and inflicts Physical Critical DamageDOWN(LV5) for 10 seconds and Magic Critical DamageDOWN(LV5) for 10 seconds",
        "effect": "600% + 482",
        "buffEffects": [
          {
            "name": "Physical Critical Damage- Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Critical Damage- Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Magic Attack +, Action Speed +",
        "icon": "skill001/skill1005",
        "effect": "Magic Attack + (+259), Action Speed + (+10%)",
        "effectValues": [
          {
            "name": "Magic Attack +",
            "value": 259,
            "type": "flat"
          },
          {
            "name": "Action Speed +",
            "value": 10,
            "type": "percent"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Block+, Skill Damage +",
        "icon": "skill001/skill1006",
        "effect": "Block+ (+15), Skill Damage + (+30%)",
        "effectValues": [
          {
            "name": "Block+",
            "value": 15,
            "type": "flat"
          },
          {
            "name": "Skill Damage +",
            "value": 30,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "Stenlina",
    "id": 2061,
    "rarity": "SSR",
    "element": "Holy",
    "role": "Attacker",
    "tags": [
      "Debuff"
    ],
    "baseStats": {
      "HP": 1819,
      "ATK": 134,
      "MATK": 224,
      "DEF": 57,
      "MDEF": 143
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Basic → Basic → Skill2 → Basic",
      "loop": "Basic → Basic → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Very Slow",
      "speedValue": "1.36"
    },
    "slug": "stenlina"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Spinning Blade",
        "icon": "skill001/skill0002",
        "description": "Deals 2415 (ATK x 1.1 + 762) physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 8 seconds",
        "descriptionLv1": "Deals 380 (ATK x 1.1 + 50) physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 8 seconds",
        "descriptionLv90": "Deals 2415 (ATK x 1.1 + 762) physical damage to the 3 nearest enemies and inflicts Action Speed -20%DOWN for 8 seconds",
        "target": "Enemy with Lowest HP",
        "castTime": 0.88,
        "damageScaling": "110% ATK",
        "baseDamage": "+50",
        "levelGrowth": "+8",
        "lvl1": "110% + 50",
        "lvl90": "110% + 762",
        "effects": [
          "Action Speed - Lv5"
        ],
        "buffEffects": [
          {
            "name": "Action Speed - Lv5",
            "value": -20,
            "type": "percent",
            "duration": 8
          }
        ],
        "duration": 8
      },
      {
        "slot": 3,
        "name": "Ring Blade",
        "icon": "skill001/skill0002",
        "description": "Deals 2903 (ATK x 1.3 + 950) physical damage to the 3 nearest enemies",
        "descriptionLv1": "Deals 450 (ATK x 1.3 + 60) physical damage to the 3 nearest enemies",
        "descriptionLv90": "Deals 2903 (ATK x 1.3 + 950) physical damage to the 3 nearest enemies",
        "target": "Enemy with Lowest HP",
        "castTime": 0.88,
        "damageScaling": "130% ATK",
        "baseDamage": "+60",
        "levelGrowth": "+10",
        "lvl1": "130% + 60",
        "lvl90": "130% + 950",
        "effects": null,
        "buffEffects": null,
        "duration": null
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Eradicator",
        "icon": "skill001/skill0003_1",
        "description": "Deals 7163 (ATK x 4.5 + 400) physical damage to the 3 nearest enemies and applies Action Speed UP(LV1) to self for 12 seconds",
        "effect": "450% + 400",
        "buffEffects": [
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 12
          }
        ]
      },
      {
        "rank": 2,
        "name": "Eradicator",
        "icon": "skill001/skill0003_2",
        "description": "Deals 8746 (ATK x 5.5 + 480) physical damage to the 3 nearest enemies and applies Action Speed UP(LV2) to self for 12 seconds",
        "effect": "550% + 480",
        "buffEffects": [
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 12
          }
        ]
      },
      {
        "rank": 3,
        "name": "Eradicator",
        "icon": "skill001/skill0003_3",
        "description": "Deals 9578 (ATK x 6.0 + 560) physical damage to the 3 nearest enemies and applies Action Speed UP(LV3) to self for 12 seconds",
        "effect": "600% + 560",
        "buffEffects": [
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 12
          }
        ]
      },
      {
        "rank": 4,
        "name": "Eradicator",
        "icon": "skill001/skill0003_4",
        "description": "Deals 10369 (ATK x 6.5 + 600) physical damage to the 3 nearest enemies and applies Action Speed UP(LV4) to self for 12 seconds",
        "effect": "650% + 600",
        "buffEffects": [
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 12
          }
        ]
      },
      {
        "rank": 5,
        "name": "Eradicator",
        "icon": "skill001/skill0003_5",
        "description": "Deals 10860 (ATK x 6.8 + 640) physical damage to the 3 nearest enemies 、Applies Action Speed UP(LV5) to self for 12 seconds",
        "effect": "680% + 640",
        "buffEffects": [
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 12
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "MP Recovery+, Physical Attack +",
        "icon": "skill001/skill1004",
        "effect": "MP Recovery+ (+42), Physical Attack + (+420)",
        "effectValues": [
          {
            "name": "MP Recovery+",
            "value": 42,
            "type": "flat"
          },
          {
            "name": "Physical Attack +",
            "value": 420,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Attack +, Physical Critical Damage+",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack + (+259), Physical Critical Damage+ (+176)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 259,
            "type": "flat"
          },
          {
            "name": "Physical Critical Damage+",
            "value": 176,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Hisara",
    "id": 2062,
    "rarity": "SSR",
    "element": "Wind",
    "role": "Attacker",
    "tags": [
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
      "opening": "Skill2 → Basic → Basic → Basic → Skill3",
      "loop": "Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "hisara"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Cross Slash",
        "icon": "skill001/skill0002",
        "description": "Deals 2857 (ATK x 1.45 + 990) physical damage to the 3 nearest enemies",
        "descriptionLv1": "Deals 472 (ATK x 1.45 + 100) physical damage to the 3 nearest enemies",
        "descriptionLv90": "Deals 2857 (ATK x 1.45 + 990) physical damage to the 3 nearest enemies",
        "target": "Nearest Enemy",
        "castTime": 0.66,
        "damageScaling": "145% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+10",
        "lvl1": "145% + 100",
        "lvl90": "145% + 990",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "Paladin’s Awakening",
        "icon": "skill001/skill0017",
        "description": "Applies Physical Attack 20%+841UP to self for 10 seconds and Mind Type ATK 10%UP for 10 seconds",
        "descriptionLv1": "Applies Physical Attack 20%+40UP to self for 10 seconds and Mind Type ATK 10%UP for 10 seconds",
        "descriptionLv90": "Applies Physical Attack 20%+841UP to self for 10 seconds and Mind Type ATK 10%UP for 10 seconds",
        "target": "Self",
        "castTime": 0.66,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Attack + Lv5",
          "Mind Type ATK + Lv3"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack + Lv5",
            "value": 20,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Mind Type ATK + Lv3",
            "value": 10,
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
        "name": "Oracle of the Demon-Slaying Goddess",
        "icon": "skill001/skill0003_1",
        "description": "Deals 7912 (ATK x 5.6 + 700) physical damage to all enemies and inflicts Silence for 6 seconds and inflicts Curse for 3 seconds",
        "effect": "560% + 700",
        "buffEffects": [
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 6
          },
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      },
      {
        "rank": 2,
        "name": "Oracle of the Demon-Slaying Goddess",
        "icon": "skill001/skill0003_2",
        "description": "Deals 10288 (ATK x 7.6 + 500) physical damage to all enemies and inflicts Silence for 6 seconds and inflicts Curse for 3 seconds",
        "effect": "760% + 500",
        "buffEffects": [
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 6
          },
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      },
      {
        "rank": 3,
        "name": "Oracle of the Demon-Slaying Goddess",
        "icon": "skill001/skill0003_3",
        "description": "Deals 12528 (ATK x 9.3 + 550) physical damage to all enemies and inflicts Silence for 6 seconds and inflicts Curse for 3 seconds",
        "effect": "930% + 550",
        "buffEffects": [
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 6
          },
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      },
      {
        "rank": 4,
        "name": "Oracle of the Demon-Slaying Goddess",
        "icon": "skill001/skill0003_4",
        "description": "Deals 13737 (ATK x 10.2 + 600) physical damage to all enemies and inflicts Silence for 6 seconds and inflicts Curse for 3 seconds",
        "effect": "1020% + 600",
        "buffEffects": [
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 6
          },
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      },
      {
        "rank": 5,
        "name": "Oracle of the Demon-Slaying Goddess",
        "icon": "skill001/skill0003_5",
        "description": "Deals 14976 (ATK x 11.1 + 680) physical damage to all enemies and inflicts Silence for 6 seconds and inflicts Curse for 3 seconds",
        "effect": "1110% + 680",
        "buffEffects": [
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 6
          },
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Attack +, Action Speed +",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack + (+159), Action Speed + (+15%)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 159,
            "type": "flat"
          },
          {
            "name": "Action Speed +",
            "value": 15,
            "type": "percent"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Mind Type ATK +, Block+",
        "icon": "skill001/skill1003",
        "effect": "Mind Type ATK + (+10%), Block+ (+20)",
        "effectValues": [
          {
            "name": "Mind Type ATK +",
            "value": 10,
            "type": "percent"
          },
          {
            "name": "Block+",
            "value": 20,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Bianca",
    "id": 2063,
    "rarity": "SSR",
    "element": "Mind",
    "role": "Attacker",
    "tags": [
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1819,
      "ATK": 257,
      "MATK": 154,
      "DEF": 143,
      "MDEF": 57
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic → Basic",
      "loop": "Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Very Fast",
      "speedValue": "0.36"
    },
    "slug": "bianca"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Shield Bash",
        "icon": "skill001/skill0011",
        "description": "Deals 5077 (ATK x 3.5 + 1910) physical damage to the nearest enemy and inflicts Stun for 2.5 seconds and Action Speed -17%DOWN for 10 seconds",
        "descriptionLv1": "Deals 763 (ATK x 3.5 + 130) physical damage to the nearest enemy and inflicts Stun for 2.5 seconds and Action Speed -17%DOWN for 10 seconds",
        "descriptionLv90": "Deals 5077 (ATK x 3.5 + 1910) physical damage to the nearest enemy and inflicts Stun for 2.5 seconds and Action Speed -17%DOWN for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "350% ATK",
        "baseDamage": "+130",
        "levelGrowth": "+20",
        "lvl1": "350% + 130",
        "lvl90": "350% + 1910",
        "effects": [
          "Stun",
          "Action Speed - Lv4"
        ],
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 2.5
          },
          {
            "name": "Action Speed - Lv4",
            "value": -17,
            "type": "percent",
            "duration": 10
          }
        ],
        "duration": 2.5
      },
      {
        "slot": 3,
        "name": "Solid Defense",
        "icon": "skill001/skill0015",
        "description": "Applies Physical Defense 40%+556UP to self for 12 seconds and Taunt for 12 seconds",
        "descriptionLv1": "Applies Physical Defense 40%+200UP to self for 12 seconds and Taunt for 12 seconds",
        "descriptionLv90": "Applies Physical Defense 40%+556UP to self for 12 seconds and Taunt for 12 seconds",
        "target": "Self",
        "castTime": 1.08,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Defense + LvMax",
          "Taunt"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense + LvMax",
            "value": 40,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Taunt",
            "value": 0,
            "type": "unknown",
            "duration": 12
          }
        ],
        "duration": 12
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Reflective Impact",
        "icon": "skill001/skill0020_1",
        "description": "Applies Physical Reflect Shield(LV1) to self for 15 seconds、Physical Shield(LV1)",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Physical Reflect Shield Ultimate Lv1",
            "value": 250,
            "type": "percent",
            "duration": 15
          },
          {
            "name": "Physical Shield Lv1",
            "value": 50,
            "type": "percent",
            "duration": 15
          }
        ]
      },
      {
        "rank": 2,
        "name": "Reflective Impact",
        "icon": "skill001/skill0020_2",
        "description": "Applies Physical Reflect Shield(LV2) to self for 15 seconds、Physical Shield(LV2)",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Physical Reflect Shield Ultimate Lv1",
            "value": 250,
            "type": "percent",
            "duration": 15
          },
          {
            "name": "Physical Shield Lv1",
            "value": 50,
            "type": "percent",
            "duration": 15
          }
        ]
      },
      {
        "rank": 3,
        "name": "Reflective Impact",
        "icon": "skill001/skill0020_3",
        "description": "Applies Physical Reflect Shield(LV3) to self for 15 seconds、Physical Shield(LV3)",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Physical Reflect Shield Ultimate Lv1",
            "value": 250,
            "type": "percent",
            "duration": 15
          },
          {
            "name": "Physical Shield Lv1",
            "value": 50,
            "type": "percent",
            "duration": 15
          }
        ]
      },
      {
        "rank": 4,
        "name": "Reflective Impact",
        "icon": "skill001/skill0020_4",
        "description": "Applies Physical Reflect Shield(LV4) to self for 15 seconds、Physical Shield(LV4)",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Physical Reflect Shield Ultimate Lv1",
            "value": 250,
            "type": "percent",
            "duration": 15
          },
          {
            "name": "Physical Shield Lv1",
            "value": 50,
            "type": "percent",
            "duration": 15
          }
        ]
      },
      {
        "rank": 5,
        "name": "Reflective Impact",
        "icon": "skill001/skill0020_5",
        "description": "Applies Physical Reflect Shield(LV5) to self for 15 seconds、Physical Shield(LV5)",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Physical Reflect Shield Ultimate Lv1",
            "value": 250,
            "type": "percent",
            "duration": 15
          },
          {
            "name": "Physical Shield Lv1",
            "value": 50,
            "type": "percent",
            "duration": 15
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Defense +, Max HP +",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+141), Max HP + (+3444)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 141,
            "type": "flat"
          },
          {
            "name": "Max HP +",
            "value": 3444,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Defense +, Healing Received +",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+211), Healing Received + (+30%)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 211,
            "type": "flat"
          },
          {
            "name": "Healing Received +",
            "value": 30,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "Natasha",
    "id": 2064,
    "rarity": "SSR",
    "element": "Water",
    "role": "Tank",
    "tags": [
      "Debuff",
      "Disrupt",
      "Taunt"
    ],
    "baseStats": {
      "HP": 1951,
      "ATK": 181,
      "MATK": 108,
      "DEF": 343,
      "MDEF": 137
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Skill2 → Basic → Basic",
      "loop": "Basic → Basic → Skill3 → Basic → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Fast",
      "speedValue": "0.61"
    },
    "slug": "natasha"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Annoying!",
        "icon": "skill001/skill0005",
        "description": "Deals 6188 (MATK x 2.3 + 2750) magic damage to the nearest enemy",
        "descriptionLv1": "Deals 767 (MATK x 2.3 + 80) magic damage to the nearest enemy",
        "descriptionLv90": "Deals 6188 (MATK x 2.3 + 2750) magic damage to the nearest enemy",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "230% ATK",
        "baseDamage": "+80",
        "levelGrowth": "+30",
        "lvl1": "230% + 80",
        "lvl90": "230% + 2750",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "Mm-hmm, I’m the First Queen♪",
        "icon": "skill001/skill0011",
        "description": "Deals 5026 (MATK x 1.8 + 2335) magic damage to the nearest enemy and inflicts Charm for 3 seconds",
        "descriptionLv1": "Deals 648 (MATK x 1.8 + 110) magic damage to the nearest enemy and inflicts Charm for 3 seconds",
        "descriptionLv90": "Deals 5026 (MATK x 1.8 + 2335) magic damage to the nearest enemy and inflicts Charm for 3 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "180% ATK",
        "baseDamage": "+110",
        "levelGrowth": "+25",
        "lvl1": "180% + 110",
        "lvl90": "180% + 2335",
        "effects": [
          "Charm"
        ],
        "buffEffects": [
          {
            "name": "Charm",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ],
        "duration": 3
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "I’ll eat you up!",
        "icon": "skill001/skill0006_1",
        "description": "Deals 5233 (MATK x 3.3 + 300) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
        "effect": "330% + 300",
        "buffEffects": null
      },
      {
        "rank": 2,
        "name": "I’ll eat you up!",
        "icon": "skill001/skill0006_2",
        "description": "Deals 6061 (MATK x 3.8 + 380) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
        "effect": "380% + 380",
        "buffEffects": null
      },
      {
        "rank": 3,
        "name": "I’ll eat you up!",
        "icon": "skill001/skill0006_3",
        "description": "Deals 6729 (MATK x 4.2 + 450) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
        "effect": "420% + 450",
        "buffEffects": null
      },
      {
        "rank": 4,
        "name": "I’ll eat you up!",
        "icon": "skill001/skill0006_4",
        "description": "Deals 7217 (MATK x 4.5 + 490) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
        "effect": "450% + 490",
        "buffEffects": null
      },
      {
        "rank": 5,
        "name": "I’ll eat you up!",
        "icon": "skill001/skill0006_5",
        "description": "Deals 7696 (MATK x 4.8 + 520) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
        "effect": "480% + 520",
        "buffEffects": null
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Charm Resistance LvMax",
        "icon": "skill001/skill1003",
        "effect": "Charm Resistance LvMax (+1%)",
        "effectValues": [
          {
            "name": "Charm Resistance LvMax",
            "value": 1,
            "type": "percent"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Magic Attack +",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+389)",
        "effectValues": [
          {
            "name": "Magic Attack +",
            "value": 389,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "【Graceful Portrait】Shamshel",
    "id": 2065,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1715,
      "ATK": 179,
      "MATK": 299,
      "DEF": 57,
      "MDEF": 143
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Basic → Basic → Skill2",
      "loop": "Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "noble-succubus-empress-shamshel"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Edelrant-Style Swordsmanship: Earthstride",
        "icon": "skill001/skill0002",
        "description": "Deals 2577 (ATK x 1.7 + 1455) physical damage to the 2 nearest enemies",
        "descriptionLv1": "Deals 344 (ATK x 1.7 + 120) physical damage to the 2 nearest enemies",
        "descriptionLv90": "Deals 2577 (ATK x 1.7 + 1455) physical damage to the 2 nearest enemies",
        "target": "Nearest Enemy",
        "castTime": 0.88,
        "damageScaling": "170% ATK",
        "baseDamage": "+120",
        "levelGrowth": "+15",
        "lvl1": "170% + 120",
        "lvl90": "170% + 1455",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "Pride of the Royal Guards",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Defense 20%+318UP to self for 7 seconds and Magic Defense20%+318UP for 7 seconds",
        "descriptionLv1": "Applies Physical Defense 20%+140UP to self for 7 seconds and Magic Defense20%+140UP for 7 seconds",
        "descriptionLv90": "Applies Physical Defense 20%+318UP to self for 7 seconds and Magic Defense20%+318UP for 7 seconds",
        "target": "Self",
        "castTime": 0.88,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Defense + Lv3",
          "Magic Defense+ Lv3"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense + Lv3",
            "value": 20,
            "type": "percent",
            "duration": 7
          },
          {
            "name": "Magic Defense+ Lv3",
            "value": 20,
            "type": "percent",
            "duration": 7
          }
        ],
        "duration": 7
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
        "icon": "skill001/skill0003_1",
        "description": "Deals 9080 (ATK x 13.0 + 500) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV1) for 10 seconds",
        "effect": "1300% + 500",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
        "icon": "skill001/skill0003_2",
        "description": "Deals 10500 (ATK x 15.0 + 600) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV2) for 10 seconds",
        "effect": "1500% + 600",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
        "icon": "skill001/skill0003_3",
        "description": "Deals 11900 (ATK x 17.0 + 680) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV3) for 10 seconds",
        "effect": "1700% + 680",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
        "icon": "skill001/skill0003_4",
        "description": "Deals 12630 (ATK x 18.0 + 750) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV4) for 10 seconds",
        "effect": "1800% + 750",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "Edelrant-Style Swordsmanship Ultimate: Aurora Blade",
        "icon": "skill001/skill0003_5",
        "description": "Deals 13340 (ATK x 19.0 + 800) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV5) for 10 seconds",
        "effect": "1900% + 800",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Defense +",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+211)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 211,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Critical Damage+",
        "icon": "skill001/skill1001",
        "effect": "Physical Critical Damage+ (+90)",
        "effectValues": [
          {
            "name": "Physical Critical Damage+",
            "value": 90,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "【Graceful Portrait】Aysis",
    "id": 2066,
    "rarity": "SSR",
    "element": "Mind",
    "role": "Tank",
    "tags": [
      "Debuff"
    ],
    "baseStats": {
      "HP": 2660,
      "ATK": 132,
      "MATK": 79,
      "DEF": 143,
      "MDEF": 57
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Basic → Basic → Skill2",
      "loop": "Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Very Fast",
      "speedValue": "0.36"
    },
    "slug": "elegant-portrait-aysis"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Turn and—bam!",
        "icon": "skill001/skill0011",
        "description": "Deals 6116 (ATK x 2.8 + 1930) physical damage to the nearest enemy and inflicts Stun for 2.5 seconds and Block-26DOWN for 10 seconds",
        "descriptionLv1": "Deals 987 (ATK x 2.8 + 150) physical damage to the nearest enemy and inflicts Stun for 2.5 seconds and Block-13DOWN for 10 seconds",
        "descriptionLv90": "Deals 6116 (ATK x 2.8 + 1930) physical damage to the nearest enemy and inflicts Stun for 2.5 seconds and Block-26DOWN for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "280% ATK",
        "baseDamage": "+150",
        "levelGrowth": "+20",
        "lvl1": "280% + 150",
        "lvl90": "280% + 1930",
        "effects": [
          "Stun",
          "Block- Lv5"
        ],
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 2.5
          },
          {
            "name": "Block- Lv5",
            "value": -13,
            "type": "flat",
            "duration": 10
          }
        ],
        "duration": 2.5
      },
      {
        "slot": 3,
        "name": "Bam-bam!",
        "icon": "skill001/skill0002",
        "description": "Deals 2604 (ATK x 1.1 + 960) physical damage to the 3 nearest enemies",
        "descriptionLv1": "Deals 398 (ATK x 1.1 + 70) physical damage to the 3 nearest enemies",
        "descriptionLv90": "Deals 2604 (ATK x 1.1 + 960) physical damage to the 3 nearest enemies",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "110% ATK",
        "baseDamage": "+70",
        "levelGrowth": "+10",
        "lvl1": "110% + 70",
        "lvl90": "110% + 960",
        "effects": null,
        "buffEffects": null,
        "duration": null
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Lorelia Attack!",
        "icon": "skill001/skill0012_1",
        "description": "Deals 6370 (ATK x 4.0 + 390) physical damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Action Speed DOWN(LV1) for 10 seconds",
        "effect": "400% + 390",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "Lorelia Attack!",
        "icon": "skill001/skill0012_2",
        "description": "Deals 7925 (ATK x 5.0 + 450) physical damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Action Speed DOWN(LV1) for 10 seconds",
        "effect": "500% + 450",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "Lorelia Attack!",
        "icon": "skill001/skill0012_3",
        "description": "Deals 8752 (ATK x 5.5 + 530) physical damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Action Speed DOWN(LV3) for 10 seconds",
        "effect": "550% + 530",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "Lorelia Attack!",
        "icon": "skill001/skill0012_4",
        "description": "Deals 9679 (ATK x 6.1 + 560) physical damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Action Speed DOWN(LV4) for 10 seconds",
        "effect": "610% + 560",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "Lorelia Attack!",
        "icon": "skill001/skill0012_5",
        "description": "Deals 10327 (ATK x 6.5 + 610) physical damage to the 3 nearest enemies and inflicts Stun for 3 seconds and Action Speed DOWN(LV5) for 10 seconds",
        "effect": "650% + 610",
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Max HP +, Debuff Resistance +",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+2896), Debuff Resistance + (+0.3%)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 2896,
            "type": "flat"
          },
          {
            "name": "Debuff Resistance +",
            "value": 0.3,
            "type": "percent"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Attack +, Accuracy +",
        "icon": "skill001/skill1005",
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
      }
    ],
    "name": "【Playful Mermaid Princess】Lorelia",
    "id": 2067,
    "rarity": "SSR",
    "element": "Water",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2092,
      "ATK": 299,
      "MATK": 179,
      "DEF": 82,
      "MDEF": 32
    },
    "skillRotation": {
      "opening": "Skill2 → Skill3 → Basic → Basic",
      "loop": "Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "mischievous-mermaid-princess-lorelia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Higher than usual♪",
        "icon": "skill001/skill0014",
        "description": "Applies Magic Attack 18%+658UP to self for 8 seconds and Accuracy 23UP for 8 seconds",
        "descriptionLv1": "Applies Magic Attack 18%+35UP to self for 8 seconds and Accuracy 11UP for 8 seconds",
        "descriptionLv90": "Applies Magic Attack 18%+658UP to self for 8 seconds and Accuracy 23UP for 8 seconds",
        "target": "Self",
        "castTime": 1.08,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Magic Attack + Lv4",
          "Accuracy + Lv4"
        ],
        "buffEffects": [
          {
            "name": "Magic Attack + Lv4",
            "value": 18,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Accuracy + Lv4",
            "value": 11,
            "type": "flat",
            "duration": 8
          }
        ],
        "duration": 8
      },
      {
        "slot": 3,
        "name": "Faster than usual♪",
        "icon": "skill001/skill0005",
        "description": "Deals 1761 (MATK x 0.9 + 762) magic damage to the 3 nearest enemies and inflicts Action Speed 20%UP for 6 seconds",
        "descriptionLv1": "Deals 249 (MATK x 0.9 + 50) magic damage to the 3 nearest enemies and inflicts Action Speed 20%UP for 6 seconds",
        "descriptionLv90": "Deals 1761 (MATK x 0.9 + 762) magic damage to the 3 nearest enemies and inflicts Action Speed 20%UP for 6 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "90% ATK",
        "baseDamage": "+50",
        "levelGrowth": "+8",
        "lvl1": "90% + 50",
        "lvl90": "90% + 762",
        "effects": [
          "Action Speed + Lv5"
        ],
        "buffEffects": [
          {
            "name": "Action Speed + Lv5",
            "value": 20,
            "type": "percent",
            "duration": 6
          }
        ],
        "duration": 6
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Dance with the princess in her gown♪",
        "icon": "skill001/skill0006_1",
        "description": "Deals 4393 (MATK x 3.6 + 394) magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Magic Defense DOWN(LV1) for 10 seconds",
        "effect": "360% + 394",
        "buffEffects": [
          {
            "name": "Charm",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "Magic Defense- Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "Dance with the princess in her gown♪",
        "icon": "skill001/skill0006_2",
        "description": "Deals 5444 (MATK x 4.5 + 445) magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Magic Defense DOWN(LV2) for 10 seconds",
        "effect": "450% + 445",
        "buffEffects": [
          {
            "name": "Charm",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "Magic Defense- Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "Dance with the princess in her gown♪",
        "icon": "skill001/skill0006_3",
        "description": "Deals 6295 (MATK x 5.22 + 496) magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Magic Defense DOWN(LV3) for 10 seconds",
        "effect": "522% + 496",
        "buffEffects": [
          {
            "name": "Charm",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "Magic Defense- Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "Dance with the princess in her gown♪",
        "icon": "skill001/skill0006_4",
        "description": "Deals 6964 (MATK x 5.79 + 532) magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Magic Defense DOWN(LV4) for 10 seconds",
        "effect": "579% + 532",
        "buffEffects": [
          {
            "name": "Charm",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "Magic Defense- Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "Dance with the princess in her gown♪",
        "icon": "skill001/skill0006_5",
        "description": "Deals 7364 (MATK x 6.12 + 565) magic damage to the 3 nearest enemies and inflicts Charm for 3 seconds and Magic Defense DOWN(LV5) for 10 seconds",
        "effect": "612% + 565",
        "buffEffects": [
          {
            "name": "Charm",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "Magic Defense- Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Charm Resistance LvMax, Magic Attack +",
        "icon": "skill001/skill1003",
        "effect": "Charm Resistance LvMax (+1%), Magic Attack + (+259)",
        "effectValues": [
          {
            "name": "Charm Resistance LvMax",
            "value": 1,
            "type": "percent"
          },
          {
            "name": "Magic Attack +",
            "value": 259,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Skill Damage +, Accuracy +",
        "icon": "skill001/skill1005",
        "effect": "Skill Damage + (+30%), Accuracy + (+20)",
        "effectValues": [
          {
            "name": "Skill Damage +",
            "value": 30,
            "type": "percent"
          },
          {
            "name": "Accuracy +",
            "value": 20,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "【Festival Empress】Shamshel",
    "id": 2068,
    "rarity": "SSR",
    "element": "Fire",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1715,
      "ATK": 133,
      "MATK": 222,
      "DEF": 57,
      "MDEF": 143
    },
    "skillRotation": {
      "opening": "Skill2 → Skill3 → Basic → Basic",
      "loop": "Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "festival-empress-shamshel"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Ripples of the Abyss",
        "icon": "skill001/skill0021",
        "description": "Restores HP by 3930 (3930) to all allies and inflicts Physical Defense 15%+189UP for 8 seconds and Magic Defense15%+189UP for 8 seconds",
        "descriptionLv1": "Restores HP by 370 (370) to all allies and inflicts Physical Defense 15%+100UP for 8 seconds and Magic Defense15%+100UP for 8 seconds",
        "descriptionLv90": "Restores HP by 3930 (3930) to all allies and inflicts Physical Defense 15%+189UP for 8 seconds and Magic Defense15%+189UP for 8 seconds",
        "target": "All Allies",
        "castTime": 1.38,
        "damageScaling": "2000% ATK",
        "baseDamage": "+370",
        "levelGrowth": "+40",
        "lvl1": "2000% + 370",
        "lvl90": "2000% + 3930",
        "effects": [
          "Physical Defense + Lv2",
          "Magic Defense+ Lv2"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense + Lv2",
            "value": 15,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Magic Defense+ Lv2",
            "value": 15,
            "type": "percent",
            "duration": 8
          }
        ],
        "duration": 8
      },
      {
        "slot": 3,
        "name": "Slumber of the Seashell",
        "icon": "skill001/skill0019",
        "description": "Applies Action Speed 14%UP to all allies for 6 seconds and Accuracy 18UP for 6 seconds",
        "descriptionLv1": "Applies Action Speed 14%UP to all allies for 6 seconds and Accuracy 9UP for 6 seconds",
        "descriptionLv90": "Applies Action Speed 14%UP to all allies for 6 seconds and Accuracy 18UP for 6 seconds",
        "target": "All Allies",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Action Speed + Lv3",
          "Accuracy + Lv3"
        ],
        "buffEffects": [
          {
            "name": "Action Speed + Lv3",
            "value": 14,
            "type": "percent",
            "duration": 6
          },
          {
            "name": "Accuracy + Lv3",
            "value": 9,
            "type": "flat",
            "duration": 6
          }
        ],
        "duration": 6
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Spirits, sing—offer blessings for this new birth",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 1200 (1200) to all allies and inflicts Debuff Resistance UP(LV1) for 7 seconds and BlockUP(LV1) for 7 seconds",
        "effect": "2700% + 1200",
        "buffEffects": [
          {
            "name": "Debuff Resistance + Ultimate Lv1",
            "value": 0.3,
            "type": "percent",
            "duration": 7
          },
          {
            "name": "Block+ Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 7
          }
        ]
      },
      {
        "rank": 2,
        "name": "Spirits, sing—offer blessings for this new birth",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 1400 (1400) to all allies and inflicts Debuff Resistance UP(LV2) for 7 seconds and BlockUP(LV2) for 7 seconds",
        "effect": "3100% + 1400",
        "buffEffects": [
          {
            "name": "Debuff Resistance + Ultimate Lv1",
            "value": 0.3,
            "type": "percent",
            "duration": 7
          },
          {
            "name": "Block+ Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 7
          }
        ]
      },
      {
        "rank": 3,
        "name": "Spirits, sing—offer blessings for this new birth",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 1600 (1600) to all allies and inflicts Debuff Resistance UP(LV3) for 7 seconds and BlockUP(LV3) for 7 seconds",
        "effect": "3250% + 1600",
        "buffEffects": [
          {
            "name": "Debuff Resistance + Ultimate Lv1",
            "value": 0.3,
            "type": "percent",
            "duration": 7
          },
          {
            "name": "Block+ Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 7
          }
        ]
      },
      {
        "rank": 4,
        "name": "Spirits, sing—offer blessings for this new birth",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 1750 (1750) to all allies and inflicts Debuff Resistance UP(LV4) for 7 seconds and BlockUP(LV4) for 7 seconds",
        "effect": "3500% + 1750",
        "buffEffects": [
          {
            "name": "Debuff Resistance + Ultimate Lv1",
            "value": 0.3,
            "type": "percent",
            "duration": 7
          },
          {
            "name": "Block+ Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 7
          }
        ]
      },
      {
        "rank": 5,
        "name": "Spirits, sing—offer blessings for this new birth",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 1900 (1900) to all allies and inflicts Debuff Resistance UP(LV5) for 7 seconds and BlockUP(LV5) for 7 seconds",
        "effect": "3650% + 1900",
        "buffEffects": [
          {
            "name": "Debuff Resistance + Ultimate Lv1",
            "value": 0.3,
            "type": "percent",
            "duration": 7
          },
          {
            "name": "Block+ Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 7
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Action Speed +, Debuff Resistance +",
        "icon": "skill001/skill1004",
        "effect": "Action Speed + (+15%), Debuff Resistance + (+0.3%)",
        "effectValues": [
          {
            "name": "Action Speed +",
            "value": 15,
            "type": "percent"
          },
          {
            "name": "Debuff Resistance +",
            "value": 0.3,
            "type": "percent"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Max HP +, Block+",
        "icon": "skill001/skill1006",
        "effect": "Max HP + (+1447), Block+ (+15)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 1447,
            "type": "flat"
          },
          {
            "name": "Block+",
            "value": 15,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "【Festive Attire】Estiriel",
    "id": 2069,
    "rarity": "SSR",
    "element": "Holy",
    "role": "Support",
    "tags": [
      "Heal",
      "Buff"
    ],
    "baseStats": {
      "HP": 3352,
      "ATK": 151,
      "MATK": 253,
      "DEF": 14,
      "MDEF": 35
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Skill2 → Basic → Basic",
      "loop": "Basic → Skill3 → Basic → Basic → Basic → Basic → Skill2 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "festival-attire-estiriel"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "The gown feels so light!",
        "icon": "skill001/skill0007",
        "description": "Deals 3731 (ATK x 2.4 + 1905) physical damage to the nearest enemy and inflicts Action Speed -17%DOWN for 8 seconds",
        "descriptionLv1": "Deals 489 (ATK x 2.4 + 125) physical damage to the nearest enemy and inflicts Action Speed -17%DOWN for 8 seconds",
        "descriptionLv90": "Deals 3731 (ATK x 2.4 + 1905) physical damage to the nearest enemy and inflicts Action Speed -17%DOWN for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": 0.88,
        "damageScaling": "240% ATK",
        "baseDamage": "+125",
        "levelGrowth": "+20",
        "lvl1": "240% + 125",
        "lvl90": "240% + 1905",
        "effects": [
          "Action Speed - Lv4"
        ],
        "buffEffects": [
          {
            "name": "Action Speed - Lv4",
            "value": -17,
            "type": "percent",
            "duration": 8
          }
        ],
        "duration": 8
      },
      {
        "slot": 3,
        "name": "I must keep it perfectly clean.",
        "icon": "skill001/skill0019",
        "description": "Applies Block26UP to self for 12 seconds and Taunt for 12 seconds",
        "descriptionLv1": "Applies Block13UP to self for 12 seconds and Taunt for 12 seconds",
        "descriptionLv90": "Applies Block26UP to self for 12 seconds and Taunt for 12 seconds",
        "target": "Self",
        "castTime": 0.88,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Block+ Lv5",
          "Taunt"
        ],
        "buffEffects": [
          {
            "name": "Block+ Lv5",
            "value": 13,
            "type": "flat",
            "duration": 12
          },
          {
            "name": "Taunt",
            "value": 0,
            "type": "unknown",
            "duration": 12
          }
        ],
        "duration": 12
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "The princess stands for justice!",
        "icon": "skill001/skill0003_1",
        "description": "Deals 2116 (ATK x 2.25 + 404) physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV1) for 10 seconds",
        "effect": "225% + 404",
        "buffEffects": [
          {
            "name": "Accuracy - Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "The princess stands for justice!",
        "icon": "skill001/skill0003_2",
        "description": "Deals 2639 (ATK x 2.8 + 509) physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV2) for 10 seconds",
        "effect": "280% + 509",
        "buffEffects": [
          {
            "name": "Accuracy - Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "The princess stands for justice!",
        "icon": "skill001/skill0003_3",
        "description": "Deals 3026 (ATK x 3.25 + 553) physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV3) for 10 seconds",
        "effect": "325% + 553",
        "buffEffects": [
          {
            "name": "Accuracy - Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "The princess stands for justice!",
        "icon": "skill001/skill0003_4",
        "description": "Deals 3292 (ATK x 3.58 + 568) physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV4) for 10 seconds",
        "effect": "358% + 568",
        "buffEffects": [
          {
            "name": "Accuracy - Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "The princess stands for justice!",
        "icon": "skill001/skill0003_5",
        "description": "Deals 3493 (ATK x 3.8 + 602) physical damage to the 3 nearest enemies and inflicts Accuracy DOWN(LV5) for 10 seconds",
        "effect": "380% + 602",
        "buffEffects": [
          {
            "name": "Accuracy - Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Defense +",
        "icon": "skill001/skill1002",
        "effect": "Physical Defense + (+141)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 141,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Max HP +, Healing Received +",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+2896), Healing Received + (+20%)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 2896,
            "type": "flat"
          },
          {
            "name": "Healing Received +",
            "value": 20,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "【Festive Costume】Natasha",
    "id": 2070,
    "rarity": "SR",
    "element": "Holy",
    "role": "Tank",
    "tags": [
      "Debuff",
      "Taunt"
    ],
    "baseStats": {
      "HP": 1781,
      "ATK": 152,
      "MATK": 91,
      "DEF": 326,
      "MDEF": 130
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic → Basic",
      "loop": "Basic → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "festival-dress-up-natasha"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Poison Princess’s Embrace",
        "icon": "skill001/skill0011",
        "description": "Deals 6180 (MATK x 2.5 + 1930) magic damage to the nearest enemy and inflicts Poison for 10 seconds and Block-26DOWN for 8 seconds",
        "descriptionLv1": "Deals 1000 (MATK x 2.5 + 150) magic damage to the nearest enemy and inflicts Poison for 10 seconds and Block-13DOWN for 8 seconds",
        "descriptionLv90": "Deals 6180 (MATK x 2.5 + 1930) magic damage to the nearest enemy and inflicts Poison for 10 seconds and Block-26DOWN for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.78,
        "damageScaling": "250% ATK",
        "baseDamage": "+150",
        "levelGrowth": "+20",
        "lvl1": "250% + 150",
        "lvl90": "250% + 1930",
        "effects": [
          "Poison LvMax",
          "Block- Lv5"
        ],
        "buffEffects": [
          {
            "name": "Poison LvMax",
            "value": -300,
            "type": "flat",
            "duration": 10
          },
          {
            "name": "Block- Lv5",
            "value": -13,
            "type": "flat",
            "duration": 8
          }
        ],
        "duration": 10
      },
      {
        "slot": 3,
        "name": "Calamity of Serpent Venom",
        "icon": "skill001/skill0011",
        "description": "Deals 2049 (MATK x 0.85 + 604) magic damage to the 3 nearest enemies and inflicts Curse for 5 seconds and Accuracy -23DOWN for 8 seconds",
        "descriptionLv1": "Deals 359 (MATK x 0.85 + 70) magic damage to the 3 nearest enemies and inflicts Curse for 5 seconds and Accuracy -11DOWN for 8 seconds",
        "descriptionLv90": "Deals 2049 (MATK x 0.85 + 604) magic damage to the 3 nearest enemies and inflicts Curse for 5 seconds and Accuracy -23DOWN for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.78,
        "damageScaling": "85% ATK",
        "baseDamage": "+70",
        "levelGrowth": "+6",
        "lvl1": "85% + 70",
        "lvl90": "85% + 604",
        "effects": [
          "Curse",
          "Accuracy - Lv4"
        ],
        "buffEffects": [
          {
            "name": "Curse",
            "value": 0,
            "type": "unknown",
            "duration": 5
          },
          {
            "name": "Accuracy - Lv4",
            "value": -11,
            "type": "flat",
            "duration": 8
          }
        ],
        "duration": 5
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Endless Wailing Black Lotus",
        "icon": "skill001/skill0012_1",
        "description": "Deals 8000 (MATK x 4.5 + 350) magic damage to all enemies and inflicts Confusion for 5 seconds and Fear Lv1 for 3 seconds",
        "effect": "450% + 350",
        "buffEffects": [
          {
            "name": "Confusion",
            "value": 0,
            "type": "unknown",
            "duration": 5
          },
          {
            "name": "Fear Ultimate Lv1",
            "value": -30,
            "type": "flat",
            "duration": 3
          }
        ]
      },
      {
        "rank": 2,
        "name": "Endless Wailing Black Lotus",
        "icon": "skill001/skill0012_2",
        "description": "Deals 9800 (MATK x 5.5 + 450) magic damage to all enemies and inflicts Confusion for 6 seconds and Fear Lv2 for 3 seconds",
        "effect": "550% + 450",
        "buffEffects": [
          {
            "name": "Confusion",
            "value": 0,
            "type": "unknown",
            "duration": 5
          },
          {
            "name": "Fear Ultimate Lv1",
            "value": -30,
            "type": "flat",
            "duration": 3
          }
        ]
      },
      {
        "rank": 3,
        "name": "Endless Wailing Black Lotus",
        "icon": "skill001/skill0012_3",
        "description": "Deals 11210 (MATK x 6.3 + 500) magic damage to all enemies and inflicts Confusion for 6 seconds and Fear Lv3 for 3 seconds",
        "effect": "630% + 500",
        "buffEffects": [
          {
            "name": "Confusion",
            "value": 0,
            "type": "unknown",
            "duration": 5
          },
          {
            "name": "Fear Ultimate Lv1",
            "value": -30,
            "type": "flat",
            "duration": 3
          }
        ]
      },
      {
        "rank": 4,
        "name": "Endless Wailing Black Lotus",
        "icon": "skill001/skill0012_4",
        "description": "Deals 12450 (MATK x 7.0 + 550) magic damage to all enemies and inflicts Confusion for 7 seconds and Fear Lv4 for 3 seconds",
        "effect": "700% + 550",
        "buffEffects": [
          {
            "name": "Confusion",
            "value": 0,
            "type": "unknown",
            "duration": 5
          },
          {
            "name": "Fear Ultimate Lv1",
            "value": -30,
            "type": "flat",
            "duration": 3
          }
        ]
      },
      {
        "rank": 5,
        "name": "Endless Wailing Black Lotus",
        "icon": "skill001/skill0012_5",
        "description": "Deals 13350 (MATK x 7.5 + 600) magic damage to all enemies and inflicts Confusion for 8 seconds and Fear Lv5 for 3 seconds",
        "effect": "750% + 600",
        "buffEffects": [
          {
            "name": "Confusion",
            "value": 0,
            "type": "unknown",
            "duration": 5
          },
          {
            "name": "Fear Ultimate Lv1",
            "value": -30,
            "type": "flat",
            "duration": 3
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Action Speed +, Magic Attack +",
        "icon": "skill001/skill1001",
        "effect": "Action Speed + (+10%), Magic Attack + (+259)",
        "effectValues": [
          {
            "name": "Action Speed +",
            "value": 10,
            "type": "percent"
          },
          {
            "name": "Magic Attack +",
            "value": 259,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Ultimate Damage +, Magic Critical Damage+",
        "icon": "skill001/skill1001",
        "effect": "Ultimate Damage + (+15%), Magic Critical Damage+ (+90)",
        "effectValues": [
          {
            "name": "Ultimate Damage +",
            "value": 15,
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
    "name": "Kaguya",
    "id": 2071,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2578,
      "ATK": 204,
      "MATK": 340,
      "DEF": 57,
      "MDEF": 143
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Skill3 → Basic → Basic",
      "loop": "Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Very Slow",
      "speedValue": "1.36"
    },
    "slug": "kaguya"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Weakness Exploit",
        "icon": "skill001/skill0002",
        "description": "Deals 8174 (ATK x 2.7 + 2375) physical damage to the farthest enemy, and when the skill activates, applies Wind Type ATK 20%UP to self for 6 seconds",
        "descriptionLv1": "Deals 1308 (ATK x 2.7 + 150) physical damage to the farthest enemy, and when the skill activates, applies Wind Type ATK 20%UP to self for 6 seconds",
        "descriptionLv90": "Deals 8174 (ATK x 2.7 + 2375) physical damage to the farthest enemy, and when the skill activates, applies Wind Type ATK 20%UP to self for 6 seconds",
        "target": "Back Enemy",
        "castTime": 1.78,
        "damageScaling": "270% ATK",
        "baseDamage": "+150",
        "levelGrowth": "+25",
        "lvl1": "270% + 150",
        "lvl90": "270% + 2375",
        "effects": [
          "Wind Type ATK + Lv5"
        ],
        "buffEffects": [
          {
            "name": "Wind Type ATK + Lv5",
            "value": 20,
            "type": "percent",
            "duration": 6
          }
        ],
        "duration": 6
      },
      {
        "slot": 3,
        "name": "Analysis",
        "icon": "skill001/skill0011",
        "description": "Applies Wind Type Defense -18%DOWN to the farthest enemy for 8 seconds and Block-23DOWN for 8 seconds",
        "descriptionLv1": "Applies Wind Type Defense -18%DOWN to the farthest enemy for 8 seconds and Block-11DOWN for 8 seconds",
        "descriptionLv90": "Applies Wind Type Defense -18%DOWN to the farthest enemy for 8 seconds and Block-23DOWN for 8 seconds",
        "target": "Back Enemy",
        "castTime": 1.78,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Wind Type Defense - Lv4",
          "Block- Lv4"
        ],
        "buffEffects": [
          {
            "name": "Wind Type Defense - Lv4",
            "value": -18,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Block- Lv4",
            "value": -11,
            "type": "flat",
            "duration": 8
          }
        ],
        "duration": 8
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Stardust Radiance of Seven Colors",
        "icon": "skill001/skill0003_1",
        "description": "Deals 9792 (ATK x 4.0 + 1200) physical damage to the farthest enemy and applies Wind Type ATK UP(LV1) to self for 6 seconds and Hit-Based Damage UP(LV1) for 10 seconds when the ultimate is activated.",
        "effect": "400% + 1200",
        "buffEffects": [
          {
            "name": "Wind Type ATK + Ultimate Lv1",
            "value": 25,
            "type": "percent",
            "duration": 6
          },
          {
            "name": "Hit-Based Damage + Ultimate Lv1",
            "value": 80,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "Stardust Radiance of Seven Colors",
        "icon": "skill001/skill0003_2",
        "description": "Deals 11266 (ATK x 4.5 + 1600) physical damage to the farthest enemy and applies Wind Type ATK UP(LV2) to self for 6 seconds and Hit-Based Damage UP(LV2) for 10 seconds when the ultimate is activated.",
        "effect": "450% + 1600",
        "buffEffects": [
          {
            "name": "Wind Type ATK + Ultimate Lv1",
            "value": 25,
            "type": "percent",
            "duration": 6
          },
          {
            "name": "Hit-Based Damage + Ultimate Lv1",
            "value": 80,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "Stardust Radiance of Seven Colors",
        "icon": "skill001/skill0003_3",
        "description": "Deals 12210 (ATK x 4.8 + 1900) physical damage to the farthest enemy and applies Wind Type ATK UP(LV3) to self for 6 seconds and Hit-Based Damage UP(LV3) for 10 seconds when the ultimate is activated.",
        "effect": "480% + 1900",
        "buffEffects": [
          {
            "name": "Wind Type ATK + Ultimate Lv1",
            "value": 25,
            "type": "percent",
            "duration": 6
          },
          {
            "name": "Hit-Based Damage + Ultimate Lv1",
            "value": 80,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "Stardust Radiance of Seven Colors",
        "icon": "skill001/skill0003_4",
        "description": "Deals 13154 (ATK x 5.1 + 2200) physical damage to the farthest enemy and applies Wind Type ATK UP(LV4) to self for 6 seconds and Hit-Based Damage UP(LV4) for 10 seconds when the ultimate is activated.",
        "effect": "510% + 2200",
        "buffEffects": [
          {
            "name": "Wind Type ATK + Ultimate Lv1",
            "value": 25,
            "type": "percent",
            "duration": 6
          },
          {
            "name": "Hit-Based Damage + Ultimate Lv1",
            "value": 80,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "Stardust Radiance of Seven Colors",
        "icon": "skill001/skill0003_5",
        "description": "Deals 13991 (ATK x 5.35 + 2500) physical damage to the farthest enemy and applies Wind Type ATK UP(LV5) to self for 6 seconds and Hit-Based Damage UP(LV5) for 10 seconds when the ultimate is activated.",
        "effect": "535% + 2500",
        "buffEffects": [
          {
            "name": "Wind Type ATK + Ultimate Lv1",
            "value": 25,
            "type": "percent",
            "duration": 6
          },
          {
            "name": "Hit-Based Damage + Ultimate Lv1",
            "value": 80,
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
        "effect": "Physical Attack + (+259), Accuracy + (+15)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 259,
            "type": "flat"
          },
          {
            "name": "Accuracy +",
            "value": 15,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Ultimate Damage +, Accuracy +",
        "icon": "skill001/skill1001",
        "effect": "Ultimate Damage + (+15%), Accuracy + (+15)",
        "effectValues": [
          {
            "name": "Ultimate Damage +",
            "value": 15,
            "type": "percent"
          },
          {
            "name": "Accuracy +",
            "value": 15,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Shaty",
    "id": 2072,
    "rarity": "SSR",
    "element": "Wind",
    "role": "Attacker",
    "tags": [
      "Debuff"
    ],
    "baseStats": {
      "HP": 1964,
      "ATK": 429,
      "MATK": 257,
      "DEF": 143,
      "MDEF": 57
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic",
      "loop": "Basic → Skill2 → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "shaty"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Grand Whirlwind Slash",
        "icon": "skill001/skill0007",
        "description": "Deals 2531 (ATK x 0.9 + 792) physical damage to the 3 nearest enemies and inflicts Physical Defense -23%+-317DOWN for 7 seconds and absorbs  of the damage dealt to restore own HP",
        "descriptionLv1": "Deals 427 (ATK x 0.9 + 80) physical damage to the 3 nearest enemies and inflicts Physical Defense -23%+-50DOWN for 7 seconds and absorbs  of the damage dealt to restore own HP",
        "descriptionLv90": "Deals 2531 (ATK x 0.9 + 792) physical damage to the 3 nearest enemies and inflicts Physical Defense -23%+-317DOWN for 7 seconds and absorbs  of the damage dealt to restore own HP",
        "target": "Nearest Enemy",
        "castTime": 1.58,
        "damageScaling": "90% ATK",
        "baseDamage": "+80",
        "levelGrowth": "+8",
        "lvl1": "90% + 80",
        "lvl90": "90% + 792",
        "effects": [
          "Physical Defense - Lv5"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense - Lv5",
            "value": -23,
            "type": "percent",
            "duration": 7
          }
        ],
        "duration": 7
      },
      {
        "slot": 3,
        "name": "Wind Spirit, Grant Me Protection",
        "icon": "skill001/skill0019",
        "description": "Applies Action Speed 17%UP to self for 10 seconds and Block23UP for 10 seconds",
        "descriptionLv1": "Applies Action Speed 17%UP to self for 10 seconds and Block11UP for 10 seconds",
        "descriptionLv90": "Applies Action Speed 17%UP to self for 10 seconds and Block23UP for 10 seconds",
        "target": "Self",
        "castTime": 1.58,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "baseValue": 11,
        "valueLv90": 23,
        "valueType": "Block",
        "effects": [
          "Action Speed + Lv4",
          "Block+ Lv4"
        ],
        "buffEffects": [
          {
            "name": "Action Speed + Lv4",
            "value": 17,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Block+ Lv4",
            "value": 11,
            "type": "flat",
            "duration": 10
          }
        ],
        "duration": 10
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Sinners, Tremble Before the Melody of Demise",
        "icon": "skill001/skill0003_1",
        "description": "Deals 4079 (ATK x 1.8 + 600) physical damage to the 5 nearest enemies and inflicts Action Speed DOWN(LV1) for 8 seconds and inflicts Dispel for 3 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
        "effect": "180% + 600",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      },
      {
        "rank": 2,
        "name": "Sinners, Tremble Before the Melody of Demise",
        "icon": "skill001/skill0003_2",
        "description": "Deals 4566 (ATK x 2.0 + 700) physical damage to the 5 nearest enemies and inflicts Action Speed DOWN(LV2) for 8 seconds and inflicts Dispel for 4 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
        "effect": "200% + 700",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      },
      {
        "rank": 3,
        "name": "Sinners, Tremble Before the Melody of Demise",
        "icon": "skill001/skill0003_3",
        "description": "Deals 5052 (ATK x 2.2 + 800) physical damage to the 5 nearest enemies and inflicts Action Speed DOWN(LV3) for 8 seconds and inflicts Dispel for 4 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
        "effect": "220% + 800",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      },
      {
        "rank": 4,
        "name": "Sinners, Tremble Before the Melody of Demise",
        "icon": "skill001/skill0003_4",
        "description": "Deals 5489 (ATK x 2.4 + 850) physical damage to the 5 nearest enemies and inflicts Action Speed DOWN(LV4) for 8 seconds and inflicts Dispel for 5 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
        "effect": "240% + 850",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      },
      {
        "rank": 5,
        "name": "Sinners, Tremble Before the Melody of Demise",
        "icon": "skill001/skill0003_5",
        "description": "Deals 5732 (ATK x 2.5 + 900) physical damage to the 5 nearest enemies and inflicts Action Speed DOWN(LV5) for 8 seconds and inflicts Dispel for 5 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
        "effect": "250% + 900",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 3
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Max HP +, Debuff Resistance +",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+2896), Debuff Resistance + (+0.3%)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 2896,
            "type": "flat"
          },
          {
            "name": "Debuff Resistance +",
            "value": 0.3,
            "type": "percent"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Action Speed +, Ultimate Damage +",
        "icon": "skill001/skill1001",
        "effect": "Action Speed + (+10%), Ultimate Damage + (+15%)",
        "effectValues": [
          {
            "name": "Action Speed +",
            "value": 10,
            "type": "percent"
          },
          {
            "name": "Ultimate Damage +",
            "value": 15,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "Lucie",
    "id": 2073,
    "rarity": "SSR",
    "element": "Wind",
    "role": "Attacker",
    "tags": [],
    "baseStats": {
      "HP": 2554,
      "ATK": 386,
      "MATK": 232,
      "DEF": 35,
      "MDEF": 14
    },
    "skillRotation": {
      "opening": "Skill2 → Skill1 → Basic → Basic → Basic → Basic",
      "loop": "Basic → Skill1 → Basic → Basic → Basic → Basic → Skill2 → Skill1 → Basic → Basic → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "ssr-lucie"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Circular Slash",
        "icon": "skill001/skill0007",
        "description": "Deals 6115 (ATK x 3.5 + 1940) physical damage to the nearest enemy and inflicts Physical Defense -21%+-218DOWN for 4 seconds",
        "descriptionLv1": "Deals 993 (ATK x 3.5 + 160) physical damage to the nearest enemy and inflicts Physical Defense -21%+-40DOWN for 4 seconds",
        "descriptionLv90": "Deals 6115 (ATK x 3.5 + 1940) physical damage to the nearest enemy and inflicts Physical Defense -21%+-218DOWN for 4 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "350% ATK",
        "baseDamage": "+160",
        "levelGrowth": "+20",
        "lvl1": "350% + 160",
        "lvl90": "350% + 1940",
        "effects": [
          "Physical Defense - Lv4"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense - Lv4",
            "value": -21,
            "type": "percent",
            "duration": 4
          }
        ],
        "duration": 4
      },
      {
        "slot": 3,
        "name": "Inner Energy",
        "icon": "skill001/skill0019",
        "description": "Applies Block18UP to self for 8 seconds and MP Regeneration 40 for 4 seconds",
        "descriptionLv1": "Applies Block9UP to self for 8 seconds and MP Regeneration 40 for 4 seconds",
        "descriptionLv90": "Applies Block18UP to self for 8 seconds and MP Regeneration 40 for 4 seconds",
        "target": "Self",
        "castTime": 1.08,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Block+ Lv3",
          "MP Regeneration + Lv5"
        ],
        "buffEffects": [
          {
            "name": "Block+ Lv3",
            "value": 9,
            "type": "flat",
            "duration": 8
          },
          {
            "name": "MP Regeneration + Lv5",
            "value": 40,
            "type": "flat",
            "duration": 4
          }
        ],
        "duration": 8
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Void Killing Formation",
        "icon": "skill001/skill0003_1",
        "description": "Deals 16228 (ATK x 13.1 + 600) physical damage to the nearest enemy",
        "effect": "1310% + 600",
        "buffEffects": null
      },
      {
        "rank": 2,
        "name": "Void Killing Formation",
        "icon": "skill001/skill0003_2",
        "description": "Deals 18117 (ATK x 14.6 + 700) physical damage to the nearest enemy",
        "effect": "1460% + 700",
        "buffEffects": null
      },
      {
        "rank": 3,
        "name": "Void Killing Formation",
        "icon": "skill001/skill0003_3",
        "description": "Deals 19172 (ATK x 15.4 + 800) physical damage to the nearest enemy",
        "effect": "1540% + 800",
        "buffEffects": null
      },
      {
        "rank": 4,
        "name": "Void Killing Formation",
        "icon": "skill001/skill0003_4",
        "description": "Deals 20057 (ATK x 16.1 + 850) physical damage to the nearest enemy",
        "effect": "1610% + 850",
        "buffEffects": null
      },
      {
        "rank": 5,
        "name": "Void Killing Formation",
        "icon": "skill001/skill0003_5",
        "description": "Deals 20703 (ATK x 16.6 + 900) physical damage to the nearest enemy",
        "effect": "1660% + 900",
        "buffEffects": null
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Action Speed +, Physical Attack +",
        "icon": "skill001/skill1001",
        "effect": "Action Speed + (+10%), Physical Attack + (+130)",
        "effectValues": [
          {
            "name": "Action Speed +",
            "value": 10,
            "type": "percent"
          },
          {
            "name": "Physical Attack +",
            "value": 130,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Ultimate Damage +",
        "icon": "skill001/skill1001",
        "effect": "Ultimate Damage + (+10%)",
        "effectValues": [
          {
            "name": "Ultimate Damage +",
            "value": 10,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "Rui",
    "id": 2074,
    "rarity": "SR",
    "element": "Fire",
    "role": "Attacker",
    "tags": [],
    "baseStats": {
      "HP": 1411,
      "ATK": 238,
      "MATK": 143,
      "DEF": 208,
      "MDEF": 83
    },
    "skillRotation": {
      "opening": "Skill1 → Skill2 → Basic → Basic → Basic",
      "loop": "Skill1 → Basic → Skill2 → Basic → Basic → Skill1 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "sr-rui"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Binding Art: Serpent Coil",
        "icon": "skill001/skill0011",
        "description": "Deals 5309 (ATK x 2.7 + 1475) physical damage to the nearest enemy and inflicts Paralysis for 4 seconds and Physical Defense -18%+-208DOWN for 8 seconds",
        "descriptionLv1": "Deals 906 (ATK x 2.7 + 140) physical damage to the nearest enemy and inflicts Paralysis for 4 seconds and Physical Defense -18%+-30DOWN for 8 seconds",
        "descriptionLv90": "Deals 5309 (ATK x 2.7 + 1475) physical damage to the nearest enemy and inflicts Paralysis for 4 seconds and Physical Defense -18%+-208DOWN for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.58,
        "damageScaling": "270% ATK",
        "baseDamage": "+140",
        "levelGrowth": "+15",
        "lvl1": "270% + 140",
        "lvl90": "270% + 1475",
        "effects": [
          "Paralysis",
          "Physical Defense - Lv3"
        ],
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 4
          },
          {
            "name": "Physical Defense - Lv3",
            "value": -18,
            "type": "percent",
            "duration": 8
          }
        ],
        "duration": 4
      },
      {
        "slot": 3,
        "name": "Inner Energy",
        "icon": "skill001/skill0019",
        "description": "Applies Block18UP to self for 8 seconds and MP Regeneration 40 for 4 seconds",
        "descriptionLv1": "Applies Block9UP to self for 8 seconds and MP Regeneration 40 for 4 seconds",
        "descriptionLv90": "Applies Block18UP to self for 8 seconds and MP Regeneration 40 for 4 seconds",
        "target": "Self",
        "castTime": 1.58,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Block+ Lv3",
          "MP Regeneration + Lv5"
        ],
        "buffEffects": [
          {
            "name": "Block+ Lv3",
            "value": 9,
            "type": "flat",
            "duration": 8
          },
          {
            "name": "MP Regeneration + Lv5",
            "value": 40,
            "type": "flat",
            "duration": 4
          }
        ],
        "duration": 8
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Secret Art: Death's Makeup",
        "icon": "skill001/skill0003_1",
        "description": "Deals 5028 (ATK x 3.4 + 200) physical damage to the 3 nearest enemies",
        "effect": "340% + 200",
        "buffEffects": null
      },
      {
        "rank": 2,
        "name": "Secret Art: Death's Makeup",
        "icon": "skill001/skill0003_2",
        "description": "Deals 5636 (ATK x 3.8 + 240) physical damage to the 3 nearest enemies",
        "effect": "380% + 240",
        "buffEffects": null
      },
      {
        "rank": 3,
        "name": "Secret Art: Death's Makeup",
        "icon": "skill001/skill0003_3",
        "description": "Deals 6234 (ATK x 4.2 + 270) physical damage to the 3 nearest enemies",
        "effect": "420% + 270",
        "buffEffects": null
      },
      {
        "rank": 4,
        "name": "Secret Art: Death's Makeup",
        "icon": "skill001/skill0003_4",
        "description": "Deals 6690 (ATK x 4.5 + 300) physical damage to the 3 nearest enemies",
        "effect": "450% + 300",
        "buffEffects": null
      },
      {
        "rank": 5,
        "name": "Secret Art: Death's Makeup",
        "icon": "skill001/skill0003_5",
        "description": "Deals 7166 (ATK x 4.8 + 350) physical damage to the 3 nearest enemies",
        "effect": "480% + 350",
        "buffEffects": null
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Action Speed +, Physical Attack +",
        "icon": "skill001/skill1001",
        "effect": "Action Speed + (+10%), Physical Attack + (+130)",
        "effectValues": [
          {
            "name": "Action Speed +",
            "value": 10,
            "type": "percent"
          },
          {
            "name": "Physical Attack +",
            "value": 130,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Ultimate Damage +",
        "icon": "skill001/skill1001",
        "effect": "Ultimate Damage + (+10%)",
        "effectValues": [
          {
            "name": "Ultimate Damage +",
            "value": 10,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "Nue",
    "id": 2075,
    "rarity": "SR",
    "element": "Water",
    "role": "Attacker",
    "tags": [],
    "baseStats": {
      "HP": 1524,
      "ATK": 284,
      "MATK": 170,
      "DEF": 208,
      "MDEF": 83
    },
    "skillRotation": {
      "opening": "Skill2 → Skill1 → Basic → Basic → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Skill1 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "sr-nue"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Deep Freeze",
        "icon": "skill001/skill0011",
        "description": "Deals 2064 (MATK x 0.85 + 604) magic damage to the 3 nearest enemies and inflicts Freeze(Unable to act;HP --4210 per second) for 1.5 seconds and Accuracy -23DOWN for 9 seconds",
        "descriptionLv1": "Deals 361 (MATK x 0.85 + 70) magic damage to the 3 nearest enemies and inflicts Freeze(Unable to act;HP --650 per second) for 1.5 seconds and Accuracy -11DOWN for 9 seconds",
        "descriptionLv90": "Deals 2064 (MATK x 0.85 + 604) magic damage to the 3 nearest enemies and inflicts Freeze(Unable to act;HP --4210 per second) for 1.5 seconds and Accuracy -23DOWN for 9 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "85% ATK",
        "baseDamage": "+70",
        "levelGrowth": "+6",
        "lvl1": "85% + 70",
        "lvl90": "85% + 604",
        "effects": [
          "Freeze Lv5",
          "Accuracy - Lv4"
        ],
        "buffEffects": [
          {
            "name": "Freeze Lv5",
            "value": -650,
            "type": "flat",
            "duration": 1.5
          },
          {
            "name": "Accuracy - Lv4",
            "value": -11,
            "type": "flat",
            "duration": 9
          }
        ],
        "duration": 1.5
      },
      {
        "slot": 3,
        "name": "Earth Grave",
        "icon": "skill001/skill0011",
        "description": "Deals 6790 (MATK x 2.8 + 1980) magic damage to the farthest enemy and inflicts Stun for 1 seconds and Magic Defense-23%+-317DOWN for 5 seconds",
        "descriptionLv1": "Deals 1160 (MATK x 2.8 + 200) magic damage to the farthest enemy and inflicts Stun for 1 seconds and Magic Defense-23%+-50DOWN for 5 seconds",
        "descriptionLv90": "Deals 6790 (MATK x 2.8 + 1980) magic damage to the farthest enemy and inflicts Stun for 1 seconds and Magic Defense-23%+-317DOWN for 5 seconds",
        "target": "Farthest Enemy",
        "castTime": 1.38,
        "damageScaling": "280% ATK",
        "baseDamage": "+200",
        "levelGrowth": "+20",
        "lvl1": "280% + 200",
        "lvl90": "280% + 1980",
        "effects": [
          "Stun",
          "Magic Defense- Lv5"
        ],
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 1
          },
          {
            "name": "Magic Defense- Lv5",
            "value": -23,
            "type": "percent",
            "duration": 5
          }
        ],
        "duration": 1
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Elemental Blast",
        "icon": "skill001/skill0006_1",
        "description": "Deals 6656 (MATK x 3.7 + 300) magic damage to all enemies and inflicts Action Speed DOWN(LV1) for 9 seconds and BlockDOWN(LV1) for 9 seconds",
        "effect": "370% + 300",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 9
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 9
          }
        ]
      },
      {
        "rank": 2,
        "name": "Elemental Blast",
        "icon": "skill001/skill0006_2",
        "description": "Deals 8646 (MATK x 4.8 + 400) magic damage to all enemies and inflicts Action Speed DOWN(LV2) for 9 seconds and BlockDOWN(LV2) for 9 seconds",
        "effect": "480% + 400",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 9
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 9
          }
        ]
      },
      {
        "rank": 3,
        "name": "Elemental Blast",
        "icon": "skill001/skill0006_3",
        "description": "Deals 10100 (MATK x 5.6 + 480) magic damage to all enemies and inflicts Action Speed DOWN(LV3) for 9 seconds and BlockDOWN(LV3) for 9 seconds",
        "effect": "560% + 480",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 9
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 9
          }
        ]
      },
      {
        "rank": 4,
        "name": "Elemental Blast",
        "icon": "skill001/skill0006_4",
        "description": "Deals 10858 (MATK x 6.0 + 550) magic damage to all enemies and inflicts Action Speed DOWN(LV4) for 9 seconds and BlockDOWN(LV4) for 9 seconds",
        "effect": "600% + 550",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 9
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 9
          }
        ]
      },
      {
        "rank": 5,
        "name": "Elemental Blast",
        "icon": "skill001/skill0006_5",
        "description": "Deals 11423 (MATK x 6.3 + 600) magic damage to all enemies and inflicts Action Speed DOWN(LV5) for 9 seconds and BlockDOWN(LV5) for 9 seconds",
        "effect": "630% + 600",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 9
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 9
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Magic Attack +, Magic Critical Damage+",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+259), Magic Critical Damage+ (+90)",
        "effectValues": [
          {
            "name": "Magic Attack +",
            "value": 259,
            "type": "flat"
          },
          {
            "name": "Magic Critical Damage+",
            "value": 90,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Ultimate Damage +, Action Speed +",
        "icon": "skill001/skill1001",
        "effect": "Ultimate Damage + (+10%), Action Speed + (+15%)",
        "effectValues": [
          {
            "name": "Ultimate Damage +",
            "value": 10,
            "type": "percent"
          },
          {
            "name": "Action Speed +",
            "value": 15,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "Ophelio",
    "id": 2076,
    "rarity": "SSR",
    "element": "Fire",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1670,
      "ATK": 206,
      "MATK": 343,
      "DEF": 90,
      "MDEF": 226
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Skill2 → Basic → Basic",
      "loop": "Skill3 → Basic → Basic → Skill2 → Basic → Skill3 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "ophelio"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Sand Storm",
        "icon": "skill001/skill0008",
        "description": "Deals 2308 (MATK x 1.4 + 614)magic damage to the 3 farthest enemies and inflicts Accuracy -18DOWN for 8 seconds and Physical Critical Damage-11%+-208DOWN for 8 seconds",
        "descriptionLv1": "Deals 418 (MATK x 1.4 + 80)magic damage to the 3 farthest enemies and inflicts Accuracy -9DOWN for 8 seconds and Physical Critical Damage-11%+-30DOWN for 8 seconds",
        "descriptionLv90": "Deals 2308 (MATK x 1.4 + 614)magic damage to the 3 farthest enemies and inflicts Accuracy -18DOWN for 8 seconds and Physical Critical Damage-11%+-208DOWN for 8 seconds",
        "target": "Farthest Enemy",
        "castTime": 1.08,
        "damageScaling": "140% ATK",
        "baseDamage": "+80",
        "levelGrowth": "+6",
        "lvl1": "140% + 80",
        "lvl90": "140% + 614",
        "effects": [
          "Accuracy - Lv3",
          "Physical Critical Damage- Lv3"
        ],
        "buffEffects": [
          {
            "name": "Accuracy - Lv3",
            "value": -9,
            "type": "flat",
            "duration": 8
          },
          {
            "name": "Physical Critical Damage- Lv3",
            "value": -11,
            "type": "percent",
            "duration": 8
          }
        ],
        "duration": 8
      },
      {
        "slot": 3,
        "name": "Sand Vortex",
        "icon": "skill001/skill0008",
        "description": "Deals 2046 (MATK x 1.2 + 594) magic damage to the 3 nearest enemies and inflicts Action Speed -14%DOWN for 8 seconds and Block-18DOWN for 8 seconds",
        "descriptionLv1": "Deals 350 (MATK x 1.2 + 60) magic damage to the 3 nearest enemies and inflicts Action Speed -14%DOWN for 8 seconds and Block-9DOWN for 8 seconds",
        "descriptionLv90": "Deals 2046 (MATK x 1.2 + 594) magic damage to the 3 nearest enemies and inflicts Action Speed -14%DOWN for 8 seconds and Block-18DOWN for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "120% ATK",
        "baseDamage": "+60",
        "levelGrowth": "+6",
        "lvl1": "120% + 60",
        "lvl90": "120% + 594",
        "effects": [
          "Action Speed - Lv3",
          "Block- Lv3"
        ],
        "buffEffects": [
          {
            "name": "Action Speed - Lv3",
            "value": -14,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Block- Lv3",
            "value": -9,
            "type": "flat",
            "duration": 8
          }
        ],
        "duration": 8
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Sunshine Shooter",
        "icon": "skill001/skill0012_1",
        "description": "Deals 14110 (MATK x 11.0 + 800) magic damage to the nearest enemy and inflicts Dispel for 4 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration) and Blind for8 seconds",
        "effect": "1100% + 800",
        "buffEffects": [
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 4
          },
          {
            "name": "Blind",
            "value": -50,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 2,
        "name": "Sunshine Shooter",
        "icon": "skill001/skill0012_2",
        "description": "Deals 16680 (MATK x 13.0 + 950) magic damage to the nearest enemy and inflicts Dispel for 5 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration) and Blind for8 seconds",
        "effect": "1300% + 950",
        "buffEffects": [
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 4
          },
          {
            "name": "Blind",
            "value": -50,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 3,
        "name": "Sunshine Shooter",
        "icon": "skill001/skill0012_3",
        "description": "Deals 18837 (MATK x 14.7 + 1050) magic damage to the nearest enemy and inflicts Dispel for 5 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration) and Blind for9 seconds",
        "effect": "1470% + 1050",
        "buffEffects": [
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 4
          },
          {
            "name": "Blind",
            "value": -50,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 4,
        "name": "Sunshine Shooter",
        "icon": "skill001/skill0012_4",
        "description": "Deals 19643 (MATK x 15.3 + 1130) magic damage to the nearest enemy and inflicts Dispel for 6 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration) and Blind for9 seconds",
        "effect": "1530% + 1130",
        "buffEffects": [
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 4
          },
          {
            "name": "Blind",
            "value": -50,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 5,
        "name": "Sunshine Shooter",
        "icon": "skill001/skill0012_5",
        "description": "Deals 20439 (MATK x 15.9 + 1200) magic damage to the nearest enemy and inflicts Dispel for 6 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration) and Blind for10 seconds",
        "effect": "1590% + 1200",
        "buffEffects": [
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 4
          },
          {
            "name": "Blind",
            "value": -50,
            "type": "percent",
            "duration": 8
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Magic Attack +, Magic Critical Damage+",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+259), Magic Critical Damage+ (+90)",
        "effectValues": [
          {
            "name": "Magic Attack +",
            "value": 259,
            "type": "flat"
          },
          {
            "name": "Magic Critical Damage+",
            "value": 90,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Skill Damage +, Max HP +",
        "icon": "skill001/skill1001",
        "effect": "Skill Damage + (+30%), Max HP + (+2896)",
        "effectValues": [
          {
            "name": "Skill Damage +",
            "value": 30,
            "type": "percent"
          },
          {
            "name": "Max HP +",
            "value": 2896,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "【Seductive High-Cut Swimsuit】Nerys",
    "id": 2077,
    "rarity": "SSR",
    "element": "Light",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2092,
      "ATK": 145,
      "MATK": 242,
      "DEF": 32,
      "MDEF": 82
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Skill3 → Basic → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Slightly Fast",
      "speedValue": "0.61"
    },
    "slug": "seductive-high-cut-swimsuit-nerys"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Gotta Avoid the Sunburn!",
        "icon": "skill001/skill0011",
        "description": "Deals 2310 (MATK x 1.2 + 792) magic damage to the 3 nearest enemies and inflicts Stun for 1.2 seconds ，and when the skill activates, applies Hit-Based Magic Damage UP(50%+1351, 4 hit(s)) to self for 5 seconds",
        "descriptionLv1": "Deals 383 (MATK x 1.2 + 80) magic damage to the 3 nearest enemies and inflicts Stun for 1.2 seconds ，and when the skill activates, applies Hit-Based Magic Damage UP(50%+550, 4 hit(s)) to self for 5 seconds",
        "descriptionLv90": "Deals 2310 (MATK x 1.2 + 792) magic damage to the 3 nearest enemies and inflicts Stun for 1.2 seconds ，and when the skill activates, applies Hit-Based Magic Damage UP(50%+1351, 4 hit(s)) to self for 5 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "120% ATK",
        "baseDamage": "+80",
        "levelGrowth": "+8",
        "lvl1": "120% + 80",
        "lvl90": "120% + 792",
        "effects": [
          "Stun",
          "Hit-Based Magic Damage + Lv5"
        ],
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 1.2
          },
          {
            "name": "Hit-Based Magic Damage + Lv5",
            "value": 50,
            "type": "percent",
            "duration": 5
          }
        ],
        "duration": 1.2
      },
      {
        "slot": 3,
        "name": "I’ll Drive You Wild!",
        "icon": "skill001/skill0019",
        "description": "Applies Action Speed 14%UP to all allies for 7 seconds and Magic Critical Damage485UP for 7 seconds",
        "descriptionLv1": "Applies Action Speed 14%UP to all allies for 7 seconds and Magic Critical Damage40UP for 7 seconds",
        "descriptionLv90": "Applies Action Speed 14%UP to all allies for 7 seconds and Magic Critical Damage485UP for 7 seconds",
        "target": "All Allies",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Action Speed + Lv3",
          "Magic Critical Damage+ Lv3"
        ],
        "buffEffects": [
          {
            "name": "Action Speed + Lv3",
            "value": 14,
            "type": "percent",
            "duration": 7
          },
          {
            "name": "Magic Critical Damage+ Lv3",
            "value": 40,
            "type": "flat",
            "duration": 7
          }
        ],
        "duration": 7
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Luftmine Ring Silm",
        "icon": "skill001/skill0012_1",
        "description": "Deals 7357 (MATK x 5.5 + 400) magic damage to all enemies and inflicts Paralysis for 5 seconds and Accuracy DOWN(LV1) for 8 seconds",
        "effect": "550% + 400",
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 5
          },
          {
            "name": "Accuracy - Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 8
          }
        ]
      },
      {
        "rank": 2,
        "name": "Luftmine Ring Silm",
        "icon": "skill001/skill0012_2",
        "description": "Deals 9987 (MATK x 7.5 + 500) magic damage to all enemies and inflicts Paralysis for 6 seconds and Accuracy DOWN(LV2) for 8 seconds",
        "effect": "750% + 500",
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 5
          },
          {
            "name": "Accuracy - Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 8
          }
        ]
      },
      {
        "rank": 3,
        "name": "Luftmine Ring Silm",
        "icon": "skill001/skill0012_3",
        "description": "Deals 11935 (MATK x 9.0 + 550) magic damage to all enemies and inflicts Paralysis for 6 seconds and Accuracy DOWN(LV3) for 8 seconds",
        "effect": "900% + 550",
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 5
          },
          {
            "name": "Accuracy - Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 8
          }
        ]
      },
      {
        "rank": 4,
        "name": "Luftmine Ring Silm",
        "icon": "skill001/skill0012_4",
        "description": "Deals 13250 (MATK x 10.0 + 600) magic damage to all enemies and inflicts Paralysis for 7 seconds and Accuracy DOWN(LV4) for 8 seconds",
        "effect": "1000% + 600",
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 5
          },
          {
            "name": "Accuracy - Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 8
          }
        ]
      },
      {
        "rank": 5,
        "name": "Luftmine Ring Silm",
        "icon": "skill001/skill0012_5",
        "description": "Deals 14565 (MATK x 11.0 + 650) magic damage to all enemies and inflicts Paralysis for 7 seconds and Accuracy DOWN(LV5) for 8 seconds",
        "effect": "1100% + 650",
        "buffEffects": [
          {
            "name": "Paralysis",
            "value": 0,
            "type": "unknown",
            "duration": 5
          },
          {
            "name": "Accuracy - Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 8
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Max HP +, Debuff Resistance +",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+2896), Debuff Resistance + (+0.3%)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 2896,
            "type": "flat"
          },
          {
            "name": "Debuff Resistance +",
            "value": 0.3,
            "type": "percent"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Magic Attack +, Accuracy +",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+389), Accuracy + (+15)",
        "effectValues": [
          {
            "name": "Magic Attack +",
            "value": 389,
            "type": "flat"
          },
          {
            "name": "Accuracy +",
            "value": 15,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "【Killer☆Bikini】Theresia",
    "id": 2078,
    "rarity": "SSR",
    "element": "Mind",
    "role": "Attacker",
    "tags": [
      "Buff",
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2588,
      "ATK": 151,
      "MATK": 253,
      "DEF": 32,
      "MDEF": 82
    },
    "skillRotation": {
      "opening": "Skill3 → Basic → Skill2 → Basic → Basic",
      "loop": "Basic → Basic → Skill3 → Basic → Basic → Basic → Skill2 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.88"
    },
    "slug": "killer-bikini-theresia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Perfect Cast!",
        "icon": "skill001/skill0002",
        "description": "Deals 2257 (ATK x 0.9 + 772) physical damage to the 3 nearest enemies",
        "descriptionLv1": "Deals 357 (ATK x 0.9 + 60) physical damage to the 3 nearest enemies",
        "descriptionLv90": "Deals 2257 (ATK x 0.9 + 772) physical damage to the 3 nearest enemies",
        "target": "Nearest Enemy",
        "castTime": 1.58,
        "damageScaling": "90% ATK",
        "baseDamage": "+60",
        "levelGrowth": "+8",
        "lvl1": "90% + 60",
        "lvl90": "90% + 772",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "Bullseye!",
        "icon": "skill001/skill0011",
        "description": "Deals 5280 (ATK x 2.3 + 1485) physical damage to the nearest enemy and inflicts Stun for 2 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
        "descriptionLv1": "Deals 908 (ATK x 2.3 + 150) physical damage to the nearest enemy and inflicts Stun for 2 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
        "descriptionLv90": "Deals 5280 (ATK x 2.3 + 1485) physical damage to the nearest enemy and inflicts Stun for 2 seconds and inflicts Dispel for 2 seconds (Dispel effect: removes all buffs and prevents gaining buffs during the duration)",
        "target": "Nearest Enemy",
        "castTime": 1.58,
        "damageScaling": "230% ATK",
        "baseDamage": "+150",
        "levelGrowth": "+15",
        "lvl1": "230% + 150",
        "lvl90": "230% + 1485",
        "effects": [
          "Stun",
          "Cleanse"
        ],
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 2
          },
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 2
          }
        ],
        "duration": 2
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Here comes a Big Shot!",
        "icon": "skill001/skill0003_1",
        "description": "Deals 5250 (ATK x 3.0 + 300) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV1) for 10 seconds",
        "effect": "300% + 300",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "Here comes a Big Shot!",
        "icon": "skill001/skill0003_2",
        "description": "Deals 6270 (ATK x 3.6 + 330) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV2) for 10 seconds",
        "effect": "360% + 330",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "Here comes a Big Shot!",
        "icon": "skill001/skill0003_3",
        "description": "Deals 7032 (ATK x 4.05 + 350) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV3) for 10 seconds",
        "effect": "405% + 350",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "Here comes a Big Shot!",
        "icon": "skill001/skill0003_4",
        "description": "Deals 7640 (ATK x 4.4 + 380) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV4) for 10 seconds",
        "effect": "440% + 380",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "Here comes a Big Shot!",
        "icon": "skill001/skill0003_5",
        "description": "Deals 8155 (ATK x 4.7 + 400) physical damage to the 3 nearest enemies and inflicts Physical Defense DOWN(LV5) for 10 seconds",
        "effect": "470% + 400",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -10,
            "type": "percent",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Max HP +",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+2896)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 2896,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Attack +, Accuracy +",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack + (+259), Accuracy + (+20)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 259,
            "type": "flat"
          },
          {
            "name": "Accuracy +",
            "value": 20,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "【Epic Fishing】Meinias",
    "id": 2079,
    "rarity": "SR",
    "element": "Water",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 2159,
      "ATK": 330,
      "MATK": 198,
      "DEF": 18,
      "MDEF": 7
    },
    "skillRotation": {
      "opening": "Skill2 → Basic → Skill3 → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Skill3 → Basic → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Slightly Slow",
      "speedValue": "1.11"
    },
    "slug": "epic-fishing-meinias"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Abstract Art: Endless Desire",
        "icon": "skill001/skill0011",
        "description": "Deals 2057 (ATK x 0.8 + 604) physical damage to the 3 nearest enemies and inflicts Burn(HP --1485 per second) for 12 seconds and Accuracy -26DOWN for 8 seconds",
        "descriptionLv1": "Deals 360 (ATK x 0.8 + 70) physical damage to the 3 nearest enemies and inflicts Burn(HP --150 per second) for 12 seconds and Accuracy -13DOWN for 8 seconds",
        "descriptionLv90": "Deals 2057 (ATK x 0.8 + 604) physical damage to the 3 nearest enemies and inflicts Burn(HP --1485 per second) for 12 seconds and Accuracy -26DOWN for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.58,
        "damageScaling": "80% ATK",
        "baseDamage": "+70",
        "levelGrowth": "+6",
        "lvl1": "80% + 70",
        "lvl90": "80% + 604",
        "effects": [
          "Burn Lv5",
          "Accuracy - Lv5"
        ],
        "buffEffects": [
          {
            "name": "Burn Lv5",
            "value": -150,
            "type": "flat",
            "duration": 12
          },
          {
            "name": "Accuracy - Lv5",
            "value": -13,
            "type": "flat",
            "duration": 8
          }
        ],
        "duration": 12
      },
      {
        "slot": 3,
        "name": "Winterscape: Towering Glacier",
        "icon": "skill001/skill0019",
        "description": "Applies Block +9 (+0.1/lv) to all allies for 8 seconds and Healing Shield (295 +25/lv HP) for 15 seconds",
        "descriptionLv1": "Applies Block +9 to all allies for 8 seconds and Healing Shield (295 HP) for 15 seconds",
        "descriptionLv90": "Applies Block +18 to all allies for 8 seconds and Healing Shield (2520 HP) for 15 seconds",
        "target": "All Allies",
        "castTime": 1.58,
        "damageScaling": null,
        "baseValue": "+295",
        "levelGrowth": "+25",
        "lvl1": "295",
        "lvl90": "2520",
        "effects": [
          "Block+ Lv3",
          "Healing Shield Lv4"
        ],
        "buffEffects": [
          {
            "name": "Block+ Lv3",
            "value": 9,
            "type": "flat",
            "duration": 8
          },
          {
            "name": "Healing Shield Lv4",
            "value": 2520,
            "type": "flat",
            "duration": 15
          }
        ],
        "duration": 8
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Painting: Primavera",
        "icon": "skill001/skill0012_1",
        "description": "Deals 4892 (ATK x 2.5 + 350) physical damage to all enemies and inflicts Silence for 3 seconds, and inflicts HP RegenerationUP(LV1) to all allies for 8 seconds",
        "effect": "250% + 350",
        "buffEffects": [
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "HP Regeneration+ Ultimate Lv1",
            "value": 6,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 2,
        "name": "Painting: Primavera",
        "icon": "skill001/skill0012_2",
        "description": "Deals 6446 (ATK x 3.3 + 450) physical damage to all enemies and inflicts Silence for 4 seconds, and inflicts HP RegenerationUP(LV2) to all allies for 8 seconds",
        "effect": "330% + 450",
        "buffEffects": [
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "HP Regeneration+ Ultimate Lv1",
            "value": 6,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 3,
        "name": "Painting: Primavera",
        "icon": "skill001/skill0012_3",
        "description": "Deals 7798 (ATK x 4.0 + 530) physical damage to all enemies and inflicts Silence for 4 seconds, and inflicts HP RegenerationUP(LV3) to all allies for 8 seconds",
        "effect": "400% + 530",
        "buffEffects": [
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "HP Regeneration+ Ultimate Lv1",
            "value": 6,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 4,
        "name": "Painting: Primavera",
        "icon": "skill001/skill0012_4",
        "description": "Deals 8776 (ATK x 4.5 + 600) physical damage to all enemies and inflicts Silence for 5 seconds, and inflicts HP RegenerationUP(LV4) to all allies for 8 seconds",
        "effect": "450% + 600",
        "buffEffects": [
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "HP Regeneration+ Ultimate Lv1",
            "value": 6,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 5,
        "name": "Painting: Primavera",
        "icon": "skill001/skill0012_5",
        "description": "Deals 9735 (ATK x 5.0 + 650) physical damage to all enemies and inflicts Silence for 5 seconds, and inflicts HP RegenerationUP(LV5) to all allies for 8 seconds",
        "effect": "500% + 650",
        "buffEffects": [
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "HP Regeneration+ Ultimate Lv1",
            "value": 6,
            "type": "percent",
            "duration": 8
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Max HP +, Physical Attack +",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+3444), Physical Attack + (+259)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 3444,
            "type": "flat"
          },
          {
            "name": "Physical Attack +",
            "value": 259,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Debuff Resistance +, Block+",
        "icon": "skill001/skill1006",
        "effect": "Debuff Resistance + (+0.15%), Block+ (+10)",
        "effectValues": [
          {
            "name": "Debuff Resistance +",
            "value": 0.15,
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
    "name": "Pastel",
    "id": 2080,
    "rarity": "SSR",
    "element": "Mind",
    "role": "Support",
    "tags": ["Buff", "Heal", "Debuff", "Disrupt"],
    "baseStats": {
      "HP": 2745,
      "ATK": 363,
      "MATK": 218,
      "DEF": 82,
      "MDEF": 32
    },
    "skillRotation": {
      "opening": "Skill2 → Skill3 → Basic → Basic → Basic",
      "loop": "Basic → Basic → Skill2 → Skill3 → Basic → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "pastel"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "我的詛咒有效嗎？",
        "icon": "skill001/skill0008",
        "description": "Deals 1969 (MATK x 0.9 + 624) magic damage to the 3 nearest enemies and inflicts Curse for 3 seconds 異常狀態 and Magic Defense-23%+-317DOWN for 6 seconds",
        "descriptionLv1": "Deals 359 (MATK x 0.9 + 90) magic damage to the 3 nearest enemies and inflicts Curse for 3 seconds 異常狀態 and Magic Defense-23%+-50DOWN for 6 seconds",
        "descriptionLv90": "Deals 1969 (MATK x 0.9 + 624) magic damage to the 3 nearest enemies and inflicts Curse for 3 seconds 異常狀態 and Magic Defense-23%+-317DOWN for 6 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "90% ATK",
        "baseDamage": "+90",
        "levelGrowth": "+6",
        "lvl1": "90% + 90",
        "lvl90": "90% + 624",
        "effects": [
          "Curse",
          "Magic Defense- Lv5"
        ],
        "buffEffects": [
          {
            "name": "Curse",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "Magic Defense- Lv5",
            "value": -23,
            "type": "percent",
            "duration": 6
          }
        ],
        "duration": 3
      },
      {
        "slot": 3,
        "name": "要和我一起嗎？",
        "icon": "skill001/skill0011",
        "description": "Inflicts Fire Type ATK -20%DOWN on the 3 nearest enemies for 9 seconds and Fire Type Defense-20%DOWN for 9 seconds 、秒的",
        "descriptionLv1": "Inflicts Fire Type ATK -20%DOWN on the 3 nearest enemies for 9 seconds and Fire Type Defense-20%DOWN for 9 seconds 、秒的",
        "descriptionLv90": "Inflicts Fire Type ATK -20%DOWN on the 3 nearest enemies for 9 seconds and Fire Type Defense-20%DOWN for 9 seconds 、秒的",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Fire Type ATK - Lv5",
          "Fire Type Defense- Lv5"
        ],
        "buffEffects": [
          {
            "name": "Fire Type ATK - Lv5",
            "value": -20,
            "type": "percent",
            "duration": 9
          },
          {
            "name": "Fire Type Defense- Lv5",
            "value": -20,
            "type": "percent",
            "duration": 9
          }
        ],
        "duration": 9
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "魔女的款待喔！",
        "icon": "skill001/skill0012_1",
        "description": "Deals 4785 (MATK x 3.0 + 300) magic damage to all enemies and inflicts Physical Critical DamageDOWN(LV1) for 10 seconds and Magic Critical DamageDOWN(LV1) for 10 seconds",
        "effect": "300% + 300",
        "buffEffects": [
          {
            "name": "Physical Critical Damage- Ultimate Lv1",
            "value": -20,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Critical Damage- Ultimate Lv1",
            "value": -20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "魔女的款待喔！",
        "icon": "skill001/skill0012_2",
        "description": "Deals 6380 (MATK x 4.0 + 400) magic damage to all enemies and inflicts Physical Critical DamageDOWN(LV2) for 10 seconds and Magic Critical DamageDOWN(LV2) for 10 seconds",
        "effect": "400% + 400",
        "buffEffects": [
          {
            "name": "Physical Critical Damage- Ultimate Lv1",
            "value": -20,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Critical Damage- Ultimate Lv1",
            "value": -20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "魔女的款待喔！",
        "icon": "skill001/skill0012_3",
        "description": "Deals 7626 (MATK x 4.8 + 450) magic damage to all enemies and inflicts Physical Critical DamageDOWN(LV3) for 11 seconds and Magic Critical DamageDOWN(LV3) for 11 seconds",
        "effect": "480% + 450",
        "buffEffects": [
          {
            "name": "Physical Critical Damage- Ultimate Lv1",
            "value": -20,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Critical Damage- Ultimate Lv1",
            "value": -20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "魔女的款待喔！",
        "icon": "skill001/skill0012_4",
        "description": "Deals 8722 (MATK x 5.5 + 500) magic damage to all enemies and inflicts Physical Critical DamageDOWN(LV4) for 11 seconds and Magic Critical DamageDOWN(LV4) for 11 seconds",
        "effect": "550% + 500",
        "buffEffects": [
          {
            "name": "Physical Critical Damage- Ultimate Lv1",
            "value": -20,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Critical Damage- Ultimate Lv1",
            "value": -20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "魔女的款待喔！",
        "icon": "skill001/skill0012_5",
        "description": "Deals 9520 (MATK x 6.0 + 550) magic damage to all enemies and inflicts Physical Critical DamageDOWN(LV5) for 12 seconds and Magic Critical DamageDOWN(LV5) for 12 seconds",
        "effect": "600% + 550",
        "buffEffects": [
          {
            "name": "Physical Critical Damage- Ultimate Lv1",
            "value": -20,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Critical Damage- Ultimate Lv1",
            "value": -20,
            "type": "percent",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Magic Attack +, Magic Critical Damage+",
        "icon": "skill001/skill1003",
        "effect": "Magic Attack + (+259), Magic Critical Damage+ (+176)",
        "effectValues": [
          {
            "name": "Magic Attack +",
            "value": 259,
            "type": "flat"
          },
          {
            "name": "Magic Critical Damage+",
            "value": 176,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Ultimate Damage +, Accuracy +",
        "icon": "skill001/skill1001",
        "effect": "Ultimate Damage + (+15%), Accuracy + (+20)",
        "effectValues": [
          {
            "name": "Ultimate Damage +",
            "value": 15,
            "type": "percent"
          },
          {
            "name": "Accuracy +",
            "value": 20,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "【Strongest Witch】Shahar",
    "id": 2081,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Support",
    "tags": [],
    "baseStats": {
      "HP": 2837,
      "ATK": 179,
      "MATK": 299,
      "DEF": 14,
      "MDEF": 35
    },
    "skillRotation": {
      "opening": "",
      "loop": ""
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "ssr-strongest-witch-shahar"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "我會過來親一下哦！",
        "icon": "skill001/skill0002",
        "description": "Deals 2638 (ATK x 1.3 + 812) physical damage to the 3 nearest enemies ，技能發動時Applies HP Absorb19%+445UP to self for 5 seconds and absorbs  of the damage dealt to restore own HP",
        "descriptionLv1": "Deals 465 (ATK x 1.3 + 100) physical damage to the 3 nearest enemies ，技能發動時Applies HP Absorb19%+0UP to self for 5 seconds and absorbs  of the damage dealt to restore own HP",
        "descriptionLv90": "Deals 2638 (ATK x 1.3 + 812) physical damage to the 3 nearest enemies ，技能發動時Applies HP Absorb19%+445UP to self for 5 seconds and absorbs  of the damage dealt to restore own HP",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "130% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+8",
        "lvl1": "130% + 100",
        "lvl90": "130% + 812",
        "effects": [
          "HP Absorb+ Lv5"
        ],
        "buffEffects": [
          {
            "name": "HP Absorb+ Lv5",
            "value": 19,
            "type": "percent",
            "duration": 5
          }
        ],
        "duration": 5
      },
      {
        "slot": 3,
        "name": "撫摸一下，撫摸一下",
        "icon": "skill001/skill0013",
        "description": "Applies Accuracy 23UP to self for 10 seconds and Physical Attack 20%+841UP for 10 seconds",
        "descriptionLv1": "Applies Accuracy 11UP to self for 10 seconds and Physical Attack 20%+40UP for 10 seconds",
        "descriptionLv90": "Applies Accuracy 23UP to self for 10 seconds and Physical Attack 20%+841UP for 10 seconds",
        "target": "Self",
        "castTime": 1.08,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Accuracy + Lv4",
          "Physical Attack + Lv5"
        ],
        "buffEffects": [
          {
            "name": "Accuracy + Lv4",
            "value": 11,
            "type": "flat",
            "duration": 10
          },
          {
            "name": "Physical Attack + Lv5",
            "value": 20,
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
        "name": "戀愛中的吸血女僕、奔馳於夜間",
        "icon": "skill001/skill0003_1",
        "description": "Deals 17157 (ATK x 11.5 + 1000) physical damage to the enemy with the lowest HP and inflicts Cleanse for 3 seconds and Action Speed DOWN(LV4) for 10 seconds and absorbs  of the damage dealt to restore own HP",
        "effect": "1150% + 1000",
        "buffEffects": [
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "Action Speed - Ultimate Lv4",
            "value": -28,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "戀愛中的吸血女僕、奔馳於夜間",
        "icon": "skill001/skill0003_2",
        "description": "Deals 20589 (ATK x 13.8 + 1200) physical damage to the enemy with the lowest HP and inflicts Cleanse for 4 seconds and Action Speed DOWN(LV5) for 10 seconds and absorbs  of the damage dealt to restore own HP",
        "effect": "1380% + 1200",
        "buffEffects": [
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "Action Speed - Ultimate Lv4",
            "value": -28,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "戀愛中的吸血女僕、奔馳於夜間",
        "icon": "skill001/skill0003_3",
        "description": "Deals 22937 (ATK x 15.4 + 1300) physical damage to the enemy with the lowest HP and inflicts Cleanse for 4 seconds and Action Speed DOWN(LV5) for 10 seconds and absorbs  of the damage dealt to restore own HP",
        "effect": "1540% + 1300",
        "buffEffects": [
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "Action Speed - Ultimate Lv4",
            "value": -28,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "戀愛中的吸血女僕、奔馳於夜間",
        "icon": "skill001/skill0003_4",
        "description": "Deals 24532 (ATK x 16.5 + 1350) physical damage to the enemy with the lowest HP and inflicts Cleanse for 5 seconds and Action Speed DOWN(LV5) for 10 seconds and absorbs  of the damage dealt to restore own HP",
        "effect": "1650% + 1350",
        "buffEffects": [
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "Action Speed - Ultimate Lv4",
            "value": -28,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "戀愛中的吸血女僕、奔馳於夜間",
        "icon": "skill001/skill0003_5",
        "description": "Deals 25285 (ATK x 17.0 + 1400) physical damage to the enemy with the lowest HP and inflicts Cleanse for 5 seconds and Action Speed DOWN(LV5) for 10 seconds and absorbs  of the damage dealt to restore own HP",
        "effect": "1700% + 1400",
        "buffEffects": [
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "Action Speed - Ultimate Lv4",
            "value": -28,
            "type": "percent",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Max HP +, Physical Attack +",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+3444), Physical Attack + (+259)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 3444,
            "type": "flat"
          },
          {
            "name": "Physical Attack +",
            "value": 259,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Skill Damage +, Accuracy +",
        "icon": "skill001/skill1001",
        "effect": "Skill Damage + (+30%), Accuracy + (+20)",
        "effectValues": [
          {
            "name": "Skill Damage +",
            "value": 30,
            "type": "percent"
          },
          {
            "name": "Accuracy +",
            "value": 20,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "【Tempting Vampire】Soltina",
    "id": 2082,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [],
    "baseStats": {
      "HP": 1457,
      "ATK": 281,
      "MATK": 168,
      "DEF": 226,
      "MDEF": 90
    },
    "skillRotation": {
      "opening": "",
      "loop": ""
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "ssr-tempting-vampire-soltina"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "會輕輕刺一下喔？",
        "icon": "skill001/skill0002",
        "description": "Deals 6801 (ATK x 2.8 + 2405) physical damage to the farthest enemy",
        "descriptionLv1": "Deals 1059 (ATK x 2.8 + 180) physical damage to the farthest enemy",
        "descriptionLv90": "Deals 6801 (ATK x 2.8 + 2405) physical damage to the farthest enemy",
        "target": "Farthest Enemy",
        "castTime": 1.38,
        "damageScaling": "280% ATK",
        "baseDamage": "+180",
        "levelGrowth": "+25",
        "lvl1": "280% + 180",
        "lvl90": "280% + 2405",
        "effects": null,
        "buffEffects": null,
        "duration": null
      },
      {
        "slot": 3,
        "name": "啪一聲！",
        "icon": "skill001/skill0011",
        "description": "最近3名敵人附加1秒的魅惑異常狀態 and Physical Critical Damage-11%+-208DOWN for 10 seconds",
        "descriptionLv1": "最近3名敵人附加1秒的魅惑異常狀態 and Physical Critical Damage-11%+-30DOWN for 10 seconds",
        "descriptionLv90": "最近3名敵人附加1秒的魅惑異常狀態 and Physical Critical Damage-11%+-208DOWN for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Charm",
          "Physical Critical Damage- Lv3"
        ],
        "buffEffects": [
          {
            "name": "Charm",
            "value": 0,
            "type": "unknown",
            "duration": 1
          },
          {
            "name": "Physical Critical Damage- Lv3",
            "value": -11,
            "type": "percent",
            "duration": 10
          }
        ],
        "duration": 1
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "會突然變得醜陋！",
        "icon": "skill001/skill0003_1",
        "description": "Deals 18170 (ATK x 11.0 + 900) physical damage to the nearest enemy and inflicts Cleanse for 2 seconds and  for  seconds and absorbs  of the damage dealt to restore own HP",
        "effect": "1100% + 900",
        "buffEffects": [
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 2
          }
        ]
      },
      {
        "rank": 2,
        "name": "會突然變得醜陋！",
        "icon": "skill001/skill0003_2",
        "description": "Deals 21724 (ATK x 13.2 + 1000) physical damage to the nearest enemy and inflicts Cleanse for 2.5 seconds and  for  seconds and absorbs  of the damage dealt to restore own HP",
        "effect": "1320% + 1000",
        "buffEffects": [
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 2
          }
        ]
      },
      {
        "rank": 3,
        "name": "會突然變得醜陋！",
        "icon": "skill001/skill0003_3",
        "description": "Deals 24493 (ATK x 14.9 + 1100) physical damage to the nearest enemy and inflicts Cleanse for 2.5 seconds and  for  seconds and absorbs  of the damage dealt to restore own HP",
        "effect": "1490% + 1100",
        "buffEffects": [
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 2
          }
        ]
      },
      {
        "rank": 4,
        "name": "會突然變得醜陋！",
        "icon": "skill001/skill0003_4",
        "description": "Deals 26320 (ATK x 16.0 + 1200) physical damage to the nearest enemy and inflicts Cleanse for 3 seconds and  for  seconds and absorbs  of the damage dealt to restore own HP",
        "effect": "1600% + 1200",
        "buffEffects": [
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 2
          }
        ]
      },
      {
        "rank": 5,
        "name": "會突然變得醜陋！",
        "icon": "skill001/skill0003_5",
        "description": "Deals 27155 (ATK x 16.5 + 1250) physical damage to the nearest enemy and inflicts Cleanse for 3 seconds and  for  seconds and absorbs  of the damage dealt to restore own HP",
        "effect": "1650% + 1250",
        "buffEffects": [
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 2
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Attack +",
        "icon": "skill001/skill1003",
        "effect": "Physical Attack + (+259)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 259,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Skill Damage +, Max HP +",
        "icon": "skill001/skill1001",
        "effect": "Skill Damage + (+20%), Max HP + (+2896)",
        "effectValues": [
          {
            "name": "Skill Damage +",
            "value": 20,
            "type": "percent"
          },
          {
            "name": "Max HP +",
            "value": 2896,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "【Little Devil】Luca",
    "id": 2083,
    "rarity": "SR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [],
    "baseStats": {
      "HP": 1661,
      "ATK": 314,
      "MATK": 188,
      "DEF": 126,
      "MDEF": 50
    },
    "skillRotation": {
      "opening": "",
      "loop": ""
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "sr-little-devil-luca"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "薩菲爾",
        "icon": "skill001/skill0011",
        "description": "Deals 6142 (MATK x 3.2 + 1960) magic damage to the nearest enemy and inflicts Burn(HP --1485 per second) for 10 seconds and Freeze(Unable to act;HP --4210 per second) for 1.5 seconds",
        "descriptionLv1": "Deals 1015 (MATK x 3.2 + 180) magic damage to the nearest enemy and inflicts Burn(HP --150 per second) for 10 seconds and Freeze(Unable to act;HP --650 per second) for 1.5 seconds",
        "descriptionLv90": "Deals 6142 (MATK x 3.2 + 1960) magic damage to the nearest enemy and inflicts Burn(HP --1485 per second) for 10 seconds and Freeze(Unable to act;HP --4210 per second) for 1.5 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "320% ATK",
        "baseDamage": "+180",
        "levelGrowth": "+20",
        "lvl1": "320% + 180",
        "lvl90": "320% + 1960",
        "effects": [
          "Burn Lv5",
          "Freeze Lv5"
        ],
        "buffEffects": [
          {
            "name": "Burn Lv5",
            "value": -150,
            "type": "flat",
            "duration": 10
          },
          {
            "name": "Freeze Lv5",
            "value": -650,
            "type": "flat",
            "duration": 1.5
          }
        ],
        "duration": 10
      },
      {
        "slot": 3,
        "name": "尊嚴",
        "icon": "skill001/skill0019",
        "description": "Applies Magic Attack 20%+841UP to self for 12 seconds and Action Speed 17%UP for 12 seconds",
        "descriptionLv1": "Applies Magic Attack 20%+40UP to self for 12 seconds and Action Speed 17%UP for 12 seconds",
        "descriptionLv90": "Applies Magic Attack 20%+841UP to self for 12 seconds and Action Speed 17%UP for 12 seconds",
        "target": "Self",
        "castTime": 1.08,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Magic Attack + Lv5",
          "Action Speed + Lv4"
        ],
        "buffEffects": [
          {
            "name": "Magic Attack + Lv5",
            "value": 20,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Action Speed + Lv4",
            "value": 17,
            "type": "percent",
            "duration": 12
          }
        ],
        "duration": 12
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "阿拉伯夜空",
        "icon": "skill001/skill0006_1",
        "description": "Deals 15177 (MATK x 11.0 + 800) magic damage to the nearest enemy and inflicts Water Type Defense DOWN(LV1) for 10 seconds and Fire Type Defense DOWN(LV1) for 10 seconds",
        "effect": "1100% + 800",
        "buffEffects": [
          {
            "name": "Water Type Defense - Ultimate Lv1",
            "value": -25,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Fire Type Defense- Ultimate Lv1",
            "value": -25,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "阿拉伯夜空",
        "icon": "skill001/skill0006_2",
        "description": "Deals 18252 (MATK x 13.2 + 1000) magic damage to the nearest enemy and inflicts Water Type Defense DOWN(LV2) for 10 seconds and Fire Type Defense DOWN(LV2) for 10 seconds",
        "effect": "1320% + 1000",
        "buffEffects": [
          {
            "name": "Water Type Defense - Ultimate Lv1",
            "value": -25,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Fire Type Defense- Ultimate Lv1",
            "value": -25,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "阿拉伯夜空",
        "icon": "skill001/skill0006_3",
        "description": "Deals 20755 (MATK x 15.0 + 1150) magic damage to the nearest enemy and inflicts Water Type Defense DOWN(LV3) for 10 seconds and Fire Type Defense DOWN(LV3) for 10 seconds",
        "effect": "1500% + 1150",
        "buffEffects": [
          {
            "name": "Water Type Defense - Ultimate Lv1",
            "value": -25,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Fire Type Defense- Ultimate Lv1",
            "value": -25,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "阿拉伯夜空",
        "icon": "skill001/skill0006_4",
        "description": "Deals 22292 (MATK x 16.1 + 1250) magic damage to the nearest enemy and inflicts Water Type Defense DOWN(LV4) for 10 seconds and Fire Type Defense DOWN(LV4) for 10 seconds",
        "effect": "1610% + 1250",
        "buffEffects": [
          {
            "name": "Water Type Defense - Ultimate Lv1",
            "value": -25,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Fire Type Defense- Ultimate Lv1",
            "value": -25,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "阿拉伯夜空",
        "icon": "skill001/skill0006_5",
        "description": "Deals 23126 (MATK x 16.7 + 1300) magic damage to the nearest enemy and inflicts Water Type Defense DOWN(LV5) for 10 seconds and Fire Type Defense DOWN(LV5) for 10 seconds",
        "effect": "1670% + 1300",
        "buffEffects": [
          {
            "name": "Water Type Defense - Ultimate Lv1",
            "value": -25,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Fire Type Defense- Ultimate Lv1",
            "value": -25,
            "type": "percent",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Magic Attack +, Accuracy +",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+389), Accuracy + (+20)",
        "effectValues": [
          {
            "name": "Magic Attack +",
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
    "name": "Lapis",
    "id": 2084,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [],
    "baseStats": {
      "HP": 2092,
      "ATK": 157,
      "MATK": 261,
      "DEF": 32,
      "MDEF": 82
    },
    "skillRotation": {
      "opening": "",
      "loop": ""
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "ssr-lapis"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "狂舞的女神",
        "icon": "skill001/skill0002",
        "description": "Deals 10289 (ATK x 4.5 + 2725) physical damage to the nearest enemy，技能發動時Applies Physical Attack 20%+841UP to self for 10 seconds",
        "descriptionLv1": "Deals 2012 (ATK x 4.5 + 500) physical damage to the nearest enemy，技能發動時Applies Physical Attack 20%+40UP to self for 10 seconds",
        "descriptionLv90": "Deals 10289 (ATK x 4.5 + 2725) physical damage to the nearest enemy，技能發動時Applies Physical Attack 20%+841UP to self for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.58,
        "damageScaling": "450% ATK",
        "baseDamage": "+500",
        "levelGrowth": "+25",
        "lvl1": "450% + 500",
        "lvl90": "450% + 2725",
        "effects": [
          "Physical Attack + Lv5"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack + Lv5",
            "value": 20,
            "type": "percent",
            "duration": 10
          }
        ],
        "duration": 10
      },
      {
        "slot": 3,
        "name": "凱旋",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Critical Damage485UP to all allies for 7 seconds and Accuracy 18UP for 7 seconds",
        "descriptionLv1": "Applies Physical Critical Damage40UP to all allies for 7 seconds and Accuracy 9UP for 7 seconds",
        "descriptionLv90": "Applies Physical Critical Damage485UP to all allies for 7 seconds and Accuracy 18UP for 7 seconds",
        "target": "All Allies",
        "castTime": 1.58,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Critical Damage+ Lv3",
          "Accuracy + Lv3"
        ],
        "buffEffects": [
          {
            "name": "Physical Critical Damage+ Lv3",
            "value": 40,
            "type": "flat",
            "duration": 7
          },
          {
            "name": "Accuracy + Lv3",
            "value": 9,
            "type": "flat",
            "duration": 7
          }
        ],
        "duration": 7
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "穆捷‧齋芙",
        "icon": "skill001/skill0003_1",
        "description": "Deals 17610 (ATK x 10.0 + 800) physical damage to the nearest enemy and inflicts BlockDOWN(LV1) for 10 seconds and applies BlockDOWN(LV1) to self for 10 seconds",
        "effect": "1000% + 800",
        "buffEffects": [
          {
            "name": "Block- Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 10
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
        "name": "穆捷‧齋芙",
        "icon": "skill001/skill0003_2",
        "description": "Deals 21172 (ATK x 12.0 + 1000) physical damage to the nearest enemy and inflicts BlockDOWN(LV2) for 10 seconds and applies BlockDOWN(LV2) to self for 10 seconds",
        "effect": "1200% + 1000",
        "buffEffects": [
          {
            "name": "Block- Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 10
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
        "rank": 3,
        "name": "穆捷‧齋芙",
        "icon": "skill001/skill0003_3",
        "description": "Deals 23843 (ATK x 13.5 + 1150) physical damage to the nearest enemy and inflicts BlockDOWN(LV3) for 10 seconds and applies BlockDOWN(LV3) to self for 10 seconds",
        "effect": "1350% + 1150",
        "buffEffects": [
          {
            "name": "Block- Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 10
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
        "rank": 4,
        "name": "穆捷‧齋芙",
        "icon": "skill001/skill0003_4",
        "description": "Deals 25624 (ATK x 14.5 + 1250) physical damage to the nearest enemy and inflicts BlockDOWN(LV4) for 10 seconds and applies BlockDOWN(LV4) to self for 10 seconds",
        "effect": "1450% + 1250",
        "buffEffects": [
          {
            "name": "Block- Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 10
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
        "rank": 5,
        "name": "穆捷‧齋芙",
        "icon": "skill001/skill0003_5",
        "description": "Deals 26515 (ATK x 15.0 + 1300) physical damage to the nearest enemy and inflicts BlockDOWN(LV5) for 10 seconds and applies BlockDOWN(LV5) to self for 10 seconds",
        "effect": "1500% + 1300",
        "buffEffects": [
          {
            "name": "Block- Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 10
          },
          {
            "name": "Holy Type ATK + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 8
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Attack +, Physical Critical Damage+",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack + (+389), Physical Critical Damage+ (+90)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 389,
            "type": "flat"
          },
          {
            "name": "Physical Critical Damage+",
            "value": 90,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Skill Damage +, Accuracy +",
        "icon": "skill001/skill1001",
        "effect": "Skill Damage + (+30%), Accuracy + (+20)",
        "effectValues": [
          {
            "name": "Skill Damage +",
            "value": 30,
            "type": "percent"
          },
          {
            "name": "Accuracy +",
            "value": 20,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Rosa",
    "id": 2085,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [],
    "baseStats": {
      "HP": 1819,
      "ATK": 336,
      "MATK": 201,
      "DEF": 143,
      "MDEF": 57
    },
    "skillRotation": {
      "opening": "",
      "loop": ""
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "ssr-rosa"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "有機會的哦！",
        "icon": "skill001/skill0007",
        "description": "Deals 3969 (ATK x 2.2 + 1890) physical damage to the nearest enemy and inflicts Physical Defense -18%+-208DOWN for 5 seconds",
        "descriptionLv1": "Deals 525 (ATK x 2.2 + 110) physical damage to the nearest enemy and inflicts Physical Defense -18%+-30DOWN for 5 seconds",
        "descriptionLv90": "Deals 3969 (ATK x 2.2 + 1890) physical damage to the nearest enemy and inflicts Physical Defense -18%+-208DOWN for 5 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "220% ATK",
        "baseDamage": "+110",
        "levelGrowth": "+20",
        "lvl1": "220% + 110",
        "lvl90": "220% + 1890",
        "effects": [
          "Physical Defense - Lv3"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense - Lv3",
            "value": -18,
            "type": "percent",
            "duration": 5
          }
        ],
        "duration": 5
      },
      {
        "slot": 3,
        "name": "防禦才是絕對的哦！",
        "icon": "skill001/skill0019",
        "description": "Applies Healing Shield (270%, restores ) to self for 12 seconds and Taunt for 12 seconds",
        "descriptionLv1": "Applies Healing Shield (270%, restores ) to self for 12 seconds and Taunt for 12 seconds",
        "descriptionLv90": "Applies Healing Shield (270%, restores ) to self for 12 seconds and Taunt for 12 seconds",
        "target": "Self",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Healing Shield Lv4",
          "Taunt"
        ],
        "buffEffects": [
          {
            "name": "Healing Shield Lv4",
            "value": 270,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Taunt",
            "value": 0,
            "type": "unknown",
            "duration": 12
          }
        ],
        "duration": 12
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "全力的一擊哦！",
        "icon": "skill001/skill0003_1",
        "description": "Deals 9777 (ATK x 9.5 + 800) physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV1) for 10 seconds",
        "effect": "950% + 800",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "全力的一擊哦！",
        "icon": "skill001/skill0003_2",
        "description": "Deals 11912 (ATK x 11.6 + 950) physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV2) for 10 seconds",
        "effect": "1160% + 950",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "全力的一擊哦！",
        "icon": "skill001/skill0003_3",
        "description": "Deals 13335 (ATK x 13.0 + 1050) physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV3) for 10 seconds",
        "effect": "1300% + 1050",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "全力的一擊哦！",
        "icon": "skill001/skill0003_4",
        "description": "Deals 14380 (ATK x 14.0 + 1150) physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV4) for 10 seconds",
        "effect": "1400% + 1150",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "全力的一擊哦！",
        "icon": "skill001/skill0003_5",
        "description": "Deals 14902 (ATK x 14.5 + 1200) physical damage to the nearest enemy and inflicts Physical Defense DOWN(LV5) for 10 seconds",
        "effect": "1450% + 1200",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Max HP +",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+2896)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 2896,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Defense +, Magic Defense+",
        "icon": "skill001/skill1003",
        "effect": "Physical Defense + (+141), Magic Defense+ (+141)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 141,
            "type": "flat"
          },
          {
            "name": "Magic Defense+",
            "value": 141,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Gracie",
    "id": 2086,
    "rarity": "SR",
    "element": "Dark",
    "role": "Tank",
    "tags": [],
    "baseStats": {
      "HP": 1781,
      "ATK": 189,
      "MATK": 113,
      "DEF": 326,
      "MDEF": 130
    },
    "skillRotation": {
      "opening": "",
      "loop": ""
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "sr-gracie"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "麻煩！",
        "icon": "skill001/skill0011",
        "description": "Deals 4765 (ATK x 3.0 + 1930) physical damage to the nearest enemy and inflicts Stun for 1.5 seconds",
        "descriptionLv1": "Deals 717 (ATK x 3.0 + 150) physical damage to the nearest enemy and inflicts Stun for 1.5 seconds",
        "descriptionLv90": "Deals 4765 (ATK x 3.0 + 1930) physical damage to the nearest enemy and inflicts Stun for 1.5 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "300% ATK",
        "baseDamage": "+150",
        "levelGrowth": "+20",
        "lvl1": "300% + 150",
        "lvl90": "300% + 1930",
        "effects": [
          "Stun"
        ],
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 1.5
          }
        ],
        "duration": 1.5
      },
      {
        "slot": 3,
        "name": "超級麻煩！",
        "icon": "skill001/skill0019",
        "description": "All Enemies附加10秒的Accuracy -14DOWN，and applies to self10秒的Taunt",
        "descriptionLv1": "All Enemies附加10秒的Accuracy -7DOWN，and applies to self10秒的Taunt",
        "descriptionLv90": "All Enemies附加10秒的Accuracy -14DOWN，and applies to self10秒的Taunt",
        "target": "All Enemies",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Accuracy - Lv2",
          "Taunt"
        ],
        "buffEffects": [
          {
            "name": "Accuracy - Lv2",
            "value": -7,
            "type": "flat",
            "duration": 10
          },
          {
            "name": "Taunt",
            "value": 0,
            "type": "unknown",
            "duration": 10
          }
        ],
        "duration": 10
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "別再來了啊～！",
        "icon": "skill001/skill0003_1",
        "description": "Deals 10822 (ATK x 10.5 + 900) physical damage to the nearest enemy and inflicts Burn(LV1) for 15 seconds",
        "effect": "1050% + 900",
        "buffEffects": [
          {
            "name": "Burn Ultimate Lv1",
            "value": -1500,
            "type": "flat",
            "duration": 15
          }
        ]
      },
      {
        "rank": 2,
        "name": "別再來了啊～！",
        "icon": "skill001/skill0003_2",
        "description": "Deals 12957 (ATK x 12.6 + 1050) physical damage to the nearest enemy and inflicts Burn(LV2) for 15 seconds",
        "effect": "1260% + 1050",
        "buffEffects": [
          {
            "name": "Burn Ultimate Lv1",
            "value": -1500,
            "type": "flat",
            "duration": 15
          }
        ]
      },
      {
        "rank": 3,
        "name": "別再來了啊～！",
        "icon": "skill001/skill0003_3",
        "description": "Deals 14569 (ATK x 14.2 + 1150) physical damage to the nearest enemy and inflicts Burn(LV3) for 15 seconds",
        "effect": "1420% + 1150",
        "buffEffects": [
          {
            "name": "Burn Ultimate Lv1",
            "value": -1500,
            "type": "flat",
            "duration": 15
          }
        ]
      },
      {
        "rank": 4,
        "name": "別再來了啊～！",
        "icon": "skill001/skill0003_4",
        "description": "Deals 15708 (ATK x 15.3 + 1250) physical damage to the nearest enemy and inflicts Burn(LV4) for 15 seconds",
        "effect": "1530% + 1250",
        "buffEffects": [
          {
            "name": "Burn Ultimate Lv1",
            "value": -1500,
            "type": "flat",
            "duration": 15
          }
        ]
      },
      {
        "rank": 5,
        "name": "別再來了啊～！",
        "icon": "skill001/skill0003_5",
        "description": "Deals 16609 (ATK x 16.2 + 1300) physical damage to the nearest enemy and inflicts Burn(LV5) for 15 seconds",
        "effect": "1620% + 1300",
        "buffEffects": [
          {
            "name": "Burn Ultimate Lv1",
            "value": -1500,
            "type": "flat",
            "duration": 15
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Max HP +",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+2896)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 2896,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Healing Received +, Block+",
        "icon": "skill001/skill1003",
        "effect": "Healing Received + (+40%), Block+ (+15)",
        "effectValues": [
          {
            "name": "Healing Received +",
            "value": 40,
            "type": "percent"
          },
          {
            "name": "Block+",
            "value": 15,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Lynette",
    "id": 2087,
    "rarity": "SR",
    "element": "Dark",
    "role": "Tank",
    "tags": [],
    "baseStats": {
      "HP": 3789,
      "ATK": 189,
      "MATK": 113,
      "DEF": 18,
      "MDEF": 7
    },
    "skillRotation": {
      "opening": "",
      "loop": ""
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "sr-lynette"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Piercing Strike",
        "icon": "skill001/skill0009",
        "description": "Deals 2940 (ATK x 1.0 + 792) physical damage to the 3 nearest enemies and inflicts Physical Defense -21%+-218DOWN for 8 seconds",
        "descriptionLv1": "Deals 509 (ATK x 1.0 + 80) physical damage to the 3 nearest enemies and inflicts Physical Defense -21%+-40DOWN for 8 seconds",
        "descriptionLv90": "Deals 2940 (ATK x 1.0 + 792) physical damage to the 3 nearest enemies and inflicts Physical Defense -21%+-218DOWN for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.58,
        "damageScaling": "100% ATK",
        "baseDamage": "+80",
        "levelGrowth": "+8",
        "lvl1": "100% + 80",
        "lvl90": "100% + 792",
        "effects": [
          "Physical Defense - Lv4"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense - Lv4",
            "value": -21,
            "type": "percent",
            "duration": 8
          }
        ],
        "duration": 8
      },
      {
        "slot": 3,
        "name": "Knight’s Pride",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Critical Damage673UP to self for 10 seconds and inflicts Accuracy -18DOWN on all enemies for 10 seconds",
        "descriptionLv1": "Applies Physical Critical Damage50UP to self for 10 seconds and inflicts Accuracy -9DOWN on all enemies for 10 seconds",
        "descriptionLv90": "Applies Physical Critical Damage673UP to self for 10 seconds and inflicts Accuracy -18DOWN on all enemies for 10 seconds",
        "target": "Self",
        "castTime": 1.1,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Critical Damage+ Lv4",
          "Accuracy - Lv3"
        ],
        "buffEffects": [
          {
            "name": "Physical Critical Damage+ Lv4",
            "value": 50,
            "type": "flat",
            "duration": 10
          },
          {
            "name": "Accuracy - Lv3",
            "value": -9,
            "type": "flat",
            "duration": 10
          }
        ],
        "duration": 10
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Hurricane Charge",
        "icon": "skill001/skill0003_1",
        "description": "Deals 6314 (ATK x 2.8 + 300) physical damage to the 3 nearest enemies and inflicts BlockDOWN(LV1) for 8 seconds and applies Physical Attack UP(LV1) to self for 8 seconds",
        "effect": "280% + 300",
        "buffEffects": [
          {
            "name": "Block- Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 8
          },
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 2,
        "name": "Hurricane Charge",
        "icon": "skill001/skill0003_2",
        "description": "Deals 7273 (ATK x 3.2 + 400) physical damage to the 3 nearest enemies and inflicts BlockDOWN(LV2) for 8 seconds and applies Physical Attack UP(LV2) to self for 8 seconds",
        "effect": "320% + 400",
        "buffEffects": [
          {
            "name": "Block- Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 8
          },
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 3,
        "name": "Hurricane Charge",
        "icon": "skill001/skill0003_3",
        "description": "Deals 7968 (ATK x 3.5 + 450) physical damage to the 3 nearest enemies and inflicts BlockDOWN(LV3) for 8 seconds and applies Physical Attack UP(LV3) to self for 8 seconds",
        "effect": "350% + 450",
        "buffEffects": [
          {
            "name": "Block- Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 8
          },
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 4,
        "name": "Hurricane Charge",
        "icon": "skill001/skill0003_4",
        "description": "Deals 8662 (ATK x 3.8 + 500) physical damage to the 3 nearest enemies and inflicts BlockDOWN(LV4) for 8 seconds and applies Physical Attack UP(LV4) to self for 8 seconds",
        "effect": "380% + 500",
        "buffEffects": [
          {
            "name": "Block- Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 8
          },
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 5,
        "name": "Hurricane Charge",
        "icon": "skill001/skill0003_5",
        "description": "Deals 9142 (ATK x 4.0 + 550) physical damage to the 3 nearest enemies and inflicts BlockDOWN(LV5) for 8 seconds and applies Physical Attack UP(LV5) to self for 8 seconds",
        "effect": "400% + 550",
        "buffEffects": [
          {
            "name": "Block- Ultimate Lv1",
            "value": -10,
            "type": "flat",
            "duration": 8
          },
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 15,
            "type": "percent",
            "duration": 8
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Attack +, Max HP +",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack + (+389), Max HP + (+2896)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 389,
            "type": "flat"
          },
          {
            "name": "Max HP +",
            "value": 2896,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Ultimate Damage +, Accuracy +",
        "icon": "skill001/skill1001",
        "effect": "Ultimate Damage + (+15%), Accuracy + (+20)",
        "effectValues": [
          {
            "name": "Ultimate Damage +",
            "value": 15,
            "type": "percent"
          },
          {
            "name": "Accuracy +",
            "value": 20,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Giselle",
    "id": 2088,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [],
    "baseStats": {
      "HP": 1200,
      "ATK": 429,
      "MATK": 257,
      "DEF": 343,
      "MDEF": 137
    },
    "skillRotation": {
      "opening": "",
      "loop": ""
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "ssr-giselle"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "綻放花瓣的迴旋",
        "icon": "skill001/skill0007",
        "description": "最高HP的1名敵人造成5440 (ATK x 3.0 + 1930)物理傷害 and inflicts Block-26DOWN for 10 seconds and Accuracy -23DOWN for 10 seconds",
        "descriptionLv1": "最高HP的1名敵人造成852 (ATK x 3.0 + 150)物理傷害 and inflicts Block-13DOWN for 10 seconds and Accuracy -11DOWN for 10 seconds",
        "descriptionLv90": "最高HP的1名敵人造成5440 (ATK x 3.0 + 1930)物理傷害 and inflicts Block-26DOWN for 10 seconds and Accuracy -23DOWN for 10 seconds",
        "target": "Enemy with Highest HP",
        "castTime": 1.38,
        "damageScaling": "300% ATK",
        "baseDamage": "+150",
        "levelGrowth": "+20",
        "lvl1": "300% + 150",
        "lvl90": "300% + 1930",
        "effects": [
          "Block- Lv5",
          "Accuracy - Lv4"
        ],
        "buffEffects": [
          {
            "name": "Block- Lv5",
            "value": -13,
            "type": "flat",
            "duration": 10
          },
          {
            "name": "Accuracy - Lv4",
            "value": -11,
            "type": "flat",
            "duration": 10
          }
        ],
        "duration": 10
      },
      {
        "slot": 3,
        "name": "熱帶風情的亞連馬那",
        "icon": "skill001/skill0018",
        "description": "Applies Magic Attack 18%+658UP to all allies for 10 seconds and Block18UP for 10 seconds",
        "descriptionLv1": "Applies Magic Attack 18%+35UP to all allies for 10 seconds and Block9UP for 10 seconds",
        "descriptionLv90": "Applies Magic Attack 18%+658UP to all allies for 10 seconds and Block18UP for 10 seconds",
        "target": "All Allies",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Magic Attack + Lv4",
          "Block+ Lv3"
        ],
        "buffEffects": [
          {
            "name": "Magic Attack + Lv4",
            "value": 18,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Block+ Lv3",
            "value": 9,
            "type": "flat",
            "duration": 10
          }
        ],
        "duration": 10
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "迷人的舞姿",
        "icon": "skill001/skill0020_1",
        "description": "Applies Magic Critical DamageUP(LV1) to all allies for 12 seconds and Accuracy UP(LV1) for 12 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Magic Critical Damage+ Ultimate Lv1",
            "value": 400,
            "type": "flat",
            "duration": 12
          },
          {
            "name": "Accuracy + Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 12
          }
        ]
      },
      {
        "rank": 2,
        "name": "迷人的舞姿",
        "icon": "skill001/skill0020_2",
        "description": "Applies Magic Critical DamageUP(LV2) to all allies for 12 seconds and Accuracy UP(LV2) for 12 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Magic Critical Damage+ Ultimate Lv1",
            "value": 400,
            "type": "flat",
            "duration": 12
          },
          {
            "name": "Accuracy + Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 12
          }
        ]
      },
      {
        "rank": 3,
        "name": "迷人的舞姿",
        "icon": "skill001/skill0020_3",
        "description": "Applies Magic Critical DamageUP(LV3) to all allies for 12 seconds and Accuracy UP(LV3) for 12 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Magic Critical Damage+ Ultimate Lv1",
            "value": 400,
            "type": "flat",
            "duration": 12
          },
          {
            "name": "Accuracy + Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 12
          }
        ]
      },
      {
        "rank": 4,
        "name": "迷人的舞姿",
        "icon": "skill001/skill0020_4",
        "description": "Applies Magic Critical DamageUP(LV4) to all allies for 12 seconds and Accuracy UP(LV4) for 12 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Magic Critical Damage+ Ultimate Lv1",
            "value": 400,
            "type": "flat",
            "duration": 12
          },
          {
            "name": "Accuracy + Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 12
          }
        ]
      },
      {
        "rank": 5,
        "name": "迷人的舞姿",
        "icon": "skill001/skill0020_5",
        "description": "Applies Magic Critical DamageUP(LV5) to all allies for 12 seconds and Accuracy UP(LV5) for 12 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Magic Critical Damage+ Ultimate Lv1",
            "value": 400,
            "type": "flat",
            "duration": 12
          },
          {
            "name": "Accuracy + Ultimate Lv1",
            "value": 10,
            "type": "flat",
            "duration": 12
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Magic Attack +, Magic Critical Damage+",
        "icon": "skill001/skill1003",
        "effect": "Magic Attack + (+130), Magic Critical Damage+ (+90)",
        "effectValues": [
          {
            "name": "Magic Attack +",
            "value": 130,
            "type": "flat"
          },
          {
            "name": "Magic Critical Damage+",
            "value": 90,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Ultimate Damage +, Block+",
        "icon": "skill001/skill1005",
        "effect": "Ultimate Damage + (+5%), Block+ (+10)",
        "effectValues": [
          {
            "name": "Ultimate Damage +",
            "value": 5,
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
    "name": "【Top Dancer】Messeria",
    "id": 2089,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Support",
    "tags": [],
    "baseStats": {
      "HP": 2745,
      "ATK": 234,
      "MATK": 140,
      "DEF": 82,
      "MDEF": 32
    },
    "skillRotation": {
      "opening": "",
      "loop": ""
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "ssr-top-dancer-messeria"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "我會好好收穫的",
        "icon": "skill001/skill0009",
        "description": "Deals 7455 (ATK x 3.4 + 2345) physical damage to the nearest enemy and inflicts Physical Defense -23%+-317DOWN for 6 seconds",
        "descriptionLv1": "Deals 1140 (ATK x 3.4 + 120) physical damage to the nearest enemy and inflicts Physical Defense -23%+-50DOWN for 6 seconds",
        "descriptionLv90": "Deals 7455 (ATK x 3.4 + 2345) physical damage to the nearest enemy and inflicts Physical Defense -23%+-317DOWN for 6 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "340% ATK",
        "baseDamage": "+120",
        "levelGrowth": "+25",
        "lvl1": "340% + 120",
        "lvl90": "340% + 2345",
        "effects": [
          "Physical Defense - Lv5"
        ],
        "buffEffects": [
          {
            "name": "Physical Defense - Lv5",
            "value": -23,
            "type": "percent",
            "duration": 6
          }
        ],
        "duration": 6
      },
      {
        "slot": 3,
        "name": "要不要試試看？",
        "icon": "skill001/skill0021",
        "description": "最近我方3名成員HP回復1930 (1930) and inflicts Debuff Resistance 0%UP for 10 seconds",
        "descriptionLv1": "最近我方3名成員HP回復150 (150) and inflicts Debuff Resistance 0%UP for 10 seconds",
        "descriptionLv90": "最近我方3名成員HP回復1930 (1930) and inflicts Debuff Resistance 0%UP for 10 seconds",
        "target": "Nearest Ally",
        "castTime": 1.08,
        "damageScaling": "850% ATK",
        "baseDamage": "+150",
        "levelGrowth": "+20",
        "lvl1": "850% + 150",
        "lvl90": "850% + 1930",
        "effects": [
          "Debuff Resistance Lv3"
        ],
        "buffEffects": [
          {
            "name": "Debuff Resistance Lv3",
            "value": 0.5,
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
        "name": "現在正是 收穫之時！！",
        "icon": "skill001/skill0003_1",
        "description": "Deals 18184 (ATK x 11.5 + 900) physical damage to the nearest enemy and inflicts Blind for 4 seconds and Action Speed DOWN(LV1) for 10 seconds",
        "effect": "1150% + 900",
        "buffEffects": [
          {
            "name": "Blind",
            "value": -50,
            "type": "percent",
            "duration": 4
          },
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "現在正是 收穫之時！！",
        "icon": "skill001/skill0003_2",
        "description": "Deals 21841 (ATK x 13.8 + 1100) physical damage to the nearest enemy and inflicts Blind for 5 seconds and Action Speed DOWN(LV2) for 10 seconds",
        "effect": "1380% + 1100",
        "buffEffects": [
          {
            "name": "Blind",
            "value": -50,
            "type": "percent",
            "duration": 4
          },
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "現在正是 收穫之時！！",
        "icon": "skill001/skill0003_3",
        "description": "Deals 24346 (ATK x 15.4 + 1200) physical damage to the nearest enemy and inflicts Blind for 5 seconds and Action Speed DOWN(LV3) for 10 seconds",
        "effect": "1540% + 1200",
        "buffEffects": [
          {
            "name": "Blind",
            "value": -50,
            "type": "percent",
            "duration": 4
          },
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "現在正是 收穫之時！！",
        "icon": "skill001/skill0003_4",
        "description": "Deals 26149 (ATK x 16.5 + 1350) physical damage to the nearest enemy and inflicts Blind for 6 seconds and Action Speed DOWN(LV4) for 10 seconds",
        "effect": "1650% + 1350",
        "buffEffects": [
          {
            "name": "Blind",
            "value": -50,
            "type": "percent",
            "duration": 4
          },
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "現在正是 收穫之時！！",
        "icon": "skill001/skill0003_5",
        "description": "Deals 26951 (ATK x 17.0 + 1400) physical damage to the nearest enemy and inflicts Blind for 6 seconds and Action Speed DOWN(LV5) for 10 seconds",
        "effect": "1700% + 1400",
        "buffEffects": [
          {
            "name": "Blind",
            "value": -50,
            "type": "percent",
            "duration": 4
          },
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Attack +, Healing Amount +",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack + (+389), Healing Amount + (+15%)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 389,
            "type": "flat"
          },
          {
            "name": "Healing Amount +",
            "value": 15,
            "type": "percent"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Skill Damage +, Accuracy +",
        "icon": "skill001/skill1001",
        "effect": "Skill Damage + (+30%), Accuracy + (+20)",
        "effectValues": [
          {
            "name": "Skill Damage +",
            "value": 30,
            "type": "percent"
          },
          {
            "name": "Accuracy +",
            "value": 20,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "【Fruit Basket】Bianca",
    "id": 2090,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [],
    "baseStats": {
      "HP": 1715,
      "ATK": 300,
      "MATK": 180,
      "DEF": 143,
      "MDEF": 57
    },
    "skillRotation": {
      "opening": "",
      "loop": ""
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "ssr-fruit-basket-bianca"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "有點喝醉了 ",
        "icon": "skill001/skill0011",
        "description": "Deals 5001 (ATK x 2.2 + 1930) physical damage to the nearest enemy and inflicts Stun for 1 seconds",
        "descriptionLv1": "Deals 763 (ATK x 2.2 + 150) physical damage to the nearest enemy and inflicts Stun for 1 seconds",
        "descriptionLv90": "Deals 5001 (ATK x 2.2 + 1930) physical damage to the nearest enemy and inflicts Stun for 1 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.58,
        "damageScaling": "220% ATK",
        "baseDamage": "+150",
        "levelGrowth": "+20",
        "lvl1": "220% + 150",
        "lvl90": "220% + 1930",
        "effects": [
          "Stun"
        ],
        "buffEffects": [
          {
            "name": "Stun",
            "value": 0,
            "type": "unknown",
            "duration": 1
          }
        ],
        "duration": 1
      },
      {
        "slot": 3,
        "name": "來，一起喝吧！",
        "icon": "skill001/skill0019",
        "description": "Applies Block18UP to the 3 nearest allies for 10 seconds and Accuracy 18UP for 10 seconds",
        "descriptionLv1": "Applies Block9UP to the 3 nearest allies for 10 seconds and Accuracy 9UP for 10 seconds",
        "descriptionLv90": "Applies Block18UP to the 3 nearest allies for 10 seconds and Accuracy 18UP for 10 seconds",
        "target": "Nearest Ally",
        "castTime": 1.58,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Block+ Lv3",
          "Accuracy + Lv3"
        ],
        "buffEffects": [
          {
            "name": "Block+ Lv3",
            "value": 9,
            "type": "flat",
            "duration": 10
          },
          {
            "name": "Accuracy + Lv3",
            "value": 9,
            "type": "flat",
            "duration": 10
          }
        ],
        "duration": 10
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "乾杯！",
        "icon": "skill001/skill0020_1",
        "description": "Applies Physical Attack UP(LV1) to all allies for 12 seconds and Magic Attack UP(LV1) for 12 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Magic Attack + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 12
          }
        ]
      },
      {
        "rank": 2,
        "name": "乾杯！",
        "icon": "skill001/skill0020_2",
        "description": "Applies Physical Attack UP(LV2) to all allies for 12 seconds and Magic Attack UP(LV2) for 12 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Magic Attack + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 12
          }
        ]
      },
      {
        "rank": 3,
        "name": "乾杯！",
        "icon": "skill001/skill0020_3",
        "description": "Applies Physical Attack UP(LV3) to all allies for 12 seconds and Magic Attack UP(LV3) for 12 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Magic Attack + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 12
          }
        ]
      },
      {
        "rank": 4,
        "name": "乾杯！",
        "icon": "skill001/skill0020_4",
        "description": "Applies Physical Attack UP(LV4) to all allies for 12 seconds and Magic Attack UP(LV4) for 12 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Magic Attack + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 12
          }
        ]
      },
      {
        "rank": 5,
        "name": "乾杯！",
        "icon": "skill001/skill0020_5",
        "description": "Applies Physical Attack UP(LV5) to all allies for 12 seconds and Magic Attack UP(LV5) for 12 seconds",
        "effect": "0% + 0",
        "buffEffects": [
          {
            "name": "Physical Attack + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Magic Attack + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 12
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Max HP +",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+2896)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 2896,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Defense +, Magic Defense+",
        "icon": "skill001/skill1005",
        "effect": "Physical Defense + (+70), Magic Defense+ (+70)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 70,
            "type": "flat"
          },
          {
            "name": "Magic Defense+",
            "value": 70,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "【How About a Beer?】Stenlina",
    "id": 2091,
    "rarity": "SR",
    "element": "Dark",
    "role": "Support",
    "tags": [],
    "baseStats": {
      "HP": 2507,
      "ATK": 279,
      "MATK": 167,
      "DEF": 65,
      "MDEF": 25
    },
    "skillRotation": {
      "opening": "",
      "loop": ""
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "sr-how-about-a-beer-stenlina"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "荊棘。觸碰者，皆將遭受毀滅的苦痛",
        "icon": "skill001/skill0011",
        "description": "Deals 8441 (MATK x 3.3 + 2030) magic damage to the enemy with the highest MP 、附加3秒的沉默、3秒的詛咒、秒的",
        "descriptionLv1": "Deals 1530 (MATK x 3.3 + 250) magic damage to the enemy with the highest MP 、附加3秒的沉默、3秒的詛咒、秒的",
        "descriptionLv90": "Deals 8441 (MATK x 3.3 + 2030) magic damage to the enemy with the highest MP 、附加3秒的沉默、3秒的詛咒、秒的",
        "target": "Enemy with Highest MP",
        "castTime": 1.22,
        "damageScaling": "330% ATK",
        "baseDamage": "+250",
        "levelGrowth": "+20",
        "lvl1": "330% + 250",
        "lvl90": "330% + 2030",
        "effects": [
          "Silence",
          "Curse",
          "Magic Defense- LvMax"
        ],
        "buffEffects": [
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "Curse",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "Magic Defense- LvMax",
            "value": -25,
            "type": "percent",
            "duration": 10
          }
        ],
        "duration": 3
      },
      {
        "slot": 3,
        "name": "霧。不歸者，誘入深淵",
        "icon": "skill001/skill0011",
        "description": "All Enemies8秒的Action Speed -14%DOWN，and applies to self8秒的Block-18DOWN",
        "descriptionLv1": "All Enemies8秒的Action Speed -14%DOWN，and applies to self8秒的Block-9DOWN",
        "descriptionLv90": "All Enemies8秒的Action Speed -14%DOWN，and applies to self8秒的Block-18DOWN",
        "target": "All Enemies",
        "castTime": 1.22,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Action Speed - Lv3",
          "Block- Lv3"
        ],
        "buffEffects": [
          {
            "name": "Action Speed - Lv3",
            "value": -14,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Block- Lv3",
            "value": -9,
            "type": "flat",
            "duration": 8
          }
        ],
        "duration": 8
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "夜。光輝的榮耀，吞噬一切孕育萬物",
        "icon": "skill001/skill0012_1",
        "description": "Deals 22373 (MATK x 11.0 + 1000) magic damage to the enemy with the highest MP and inflicts Confusion for 2 seconds and Fear Lv1 for 4 seconds",
        "effect": "1100% + 1000",
        "buffEffects": [
          {
            "name": "Confusion",
            "value": 0,
            "type": "unknown",
            "duration": 2
          },
          {
            "name": "Fear Ultimate Lv1",
            "value": -70,
            "type": "flat",
            "duration": 4
          }
        ]
      },
      {
        "rank": 2,
        "name": "夜。光輝的榮耀，吞噬一切孕育萬物",
        "icon": "skill001/skill0012_2",
        "description": "Deals 26947 (MATK x 13.2 + 1300) magic damage to the enemy with the highest MP and inflicts Confusion for 3 seconds and Fear Lv2 for 4 seconds",
        "effect": "1320% + 1300",
        "buffEffects": [
          {
            "name": "Confusion",
            "value": 0,
            "type": "unknown",
            "duration": 2
          },
          {
            "name": "Fear Ultimate Lv1",
            "value": -70,
            "type": "flat",
            "duration": 4
          }
        ]
      },
      {
        "rank": 3,
        "name": "夜。光輝的榮耀，吞噬一切孕育萬物",
        "icon": "skill001/skill0012_3",
        "description": "Deals 30645 (MATK x 15.0 + 1500) magic damage to the enemy with the highest MP and inflicts Confusion for 3 seconds and Fear Lv3 for 4 seconds",
        "effect": "1500% + 1500",
        "buffEffects": [
          {
            "name": "Confusion",
            "value": 0,
            "type": "unknown",
            "duration": 2
          },
          {
            "name": "Fear Ultimate Lv1",
            "value": -70,
            "type": "flat",
            "duration": 4
          }
        ]
      },
      {
        "rank": 4,
        "name": "夜。光輝的榮耀，吞噬一切孕育萬物",
        "icon": "skill001/skill0012_4",
        "description": "Deals 32882 (MATK x 16.1 + 1600) magic damage to the enemy with the highest MP and inflicts Confusion for 4 seconds and Fear Lv4 for 4 seconds",
        "effect": "1610% + 1600",
        "buffEffects": [
          {
            "name": "Confusion",
            "value": 0,
            "type": "unknown",
            "duration": 2
          },
          {
            "name": "Fear Ultimate Lv1",
            "value": -70,
            "type": "flat",
            "duration": 4
          }
        ]
      },
      {
        "rank": 5,
        "name": "夜。光輝的榮耀，吞噬一切孕育萬物",
        "icon": "skill001/skill0012_5",
        "description": "Deals 34342 (MATK x 16.8 + 1700) magic damage to the enemy with the highest MP and inflicts Confusion for 4 seconds and Fear Lv5 for 4 seconds",
        "effect": "1680% + 1700",
        "buffEffects": [
          {
            "name": "Confusion",
            "value": 0,
            "type": "unknown",
            "duration": 2
          },
          {
            "name": "Fear Ultimate Lv1",
            "value": -70,
            "type": "flat",
            "duration": 4
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Max HP +, Debuff Resistance +",
        "icon": "skill001/skill1001",
        "effect": "Max HP + (+3444), Debuff Resistance + (+0.3%)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 3444,
            "type": "flat"
          },
          {
            "name": "Debuff Resistance +",
            "value": 0.3,
            "type": "percent"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Ultimate Damage +, Magic Attack +",
        "icon": "skill001/skill1001",
        "effect": "Ultimate Damage + (+15%), Magic Attack + (+259)",
        "effectValues": [
          {
            "name": "Ultimate Damage +",
            "value": 15,
            "type": "percent"
          },
          {
            "name": "Magic Attack +",
            "value": 259,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Ruse",
    "id": 2092,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [],
    "baseStats": {
      "HP": 2673,
      "ATK": 233,
      "MATK": 388,
      "DEF": 24,
      "MDEF": 61
    },
    "skillRotation": {
      "opening": "",
      "loop": ""
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "ssr-ruse"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "貝爾恩神聖劍術 閃電斬",
        "icon": "skill001/skill0007",
        "description": "Deals 6687 (ATK x 3.5 + 1980) physical damage to the nearest enemy and inflicts Cleanse for 3 seconds and Block-26DOWN for 12 seconds",
        "descriptionLv1": "Deals 1141 (ATK x 3.5 + 200) physical damage to the nearest enemy and inflicts Cleanse for 3 seconds and Block-13DOWN for 12 seconds",
        "descriptionLv90": "Deals 6687 (ATK x 3.5 + 1980) physical damage to the nearest enemy and inflicts Cleanse for 3 seconds and Block-26DOWN for 12 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.22,
        "damageScaling": "350% ATK",
        "baseDamage": "+200",
        "levelGrowth": "+20",
        "lvl1": "350% + 200",
        "lvl90": "350% + 1980",
        "effects": [
          "Cleanse",
          "Block- Lv5"
        ],
        "buffEffects": [
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "Block- Lv5",
            "value": -13,
            "type": "flat",
            "duration": 12
          }
        ],
        "duration": 3
      },
      {
        "slot": 3,
        "name": "鏡面陣",
        "icon": "skill001/skill0019",
        "description": "Applies HP Regeneration5%+773 to self for 5 seconds and Hit-Based Shield(35%+、10hit(s)) for 10 seconds 、秒的",
        "descriptionLv1": "Applies HP Regeneration5%+150 to self for 5 seconds and Hit-Based Shield(35%+、10hit(s)) for 10 seconds 、秒的",
        "descriptionLv90": "Applies HP Regeneration5%+773 to self for 5 seconds and Hit-Based Shield(35%+、10hit(s)) for 10 seconds 、秒的",
        "target": "Self",
        "castTime": 1.22,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "HP Regeneration+ Lv3",
          "Hit-Based Shield LvMax",
          "Debuff Resistance Lv4"
        ],
        "buffEffects": [
          {
            "name": "HP Regeneration+ Lv3",
            "value": 5,
            "type": "percent",
            "duration": 5
          },
          {
            "name": "Hit-Based Shield LvMax",
            "value": 35,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Debuff Resistance Lv4",
            "value": 0.7,
            "type": "percent",
            "duration": 10
          }
        ],
        "duration": 5
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "星之鈴・咒術投手",
        "icon": "skill001/skill0012_1",
        "description": "Deals 14050 (ATK x 10.0 + 600) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV1) for 8 seconds and Magic Attack DOWN(LV1) for 8 seconds 、自身附加秒的挑釁",
        "effect": "1000% + 600",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -20,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Magic Attack - Ultimate Lv1",
            "value": -20,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Taunt",
            "value": 0,
            "type": "unknown",
            "duration": 8
          }
        ]
      },
      {
        "rank": 2,
        "name": "星之鈴・咒術投手",
        "icon": "skill001/skill0012_2",
        "description": "Deals 16940 (ATK x 12.0 + 800) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV2) for 9 seconds and Magic Attack DOWN(LV2) for 9 seconds 、自身附加秒的挑釁",
        "effect": "1200% + 800",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -20,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Magic Attack - Ultimate Lv1",
            "value": -20,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Taunt",
            "value": 0,
            "type": "unknown",
            "duration": 8
          }
        ]
      },
      {
        "rank": 3,
        "name": "星之鈴・咒術投手",
        "icon": "skill001/skill0012_3",
        "description": "Deals 19107 (ATK x 13.5 + 950) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV3) for 10 seconds and Magic Attack DOWN(LV3) for 10 seconds 、自身附加秒的挑釁",
        "effect": "1350% + 950",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -20,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Magic Attack - Ultimate Lv1",
            "value": -20,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Taunt",
            "value": 0,
            "type": "unknown",
            "duration": 8
          }
        ]
      },
      {
        "rank": 4,
        "name": "星之鈴・咒術投手",
        "icon": "skill001/skill0012_4",
        "description": "Deals 20552 (ATK x 14.5 + 1050) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV4) for 11 seconds and Magic Attack DOWN(LV4) for 11 seconds 、自身附加秒的挑釁",
        "effect": "1450% + 1050",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -20,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Magic Attack - Ultimate Lv1",
            "value": -20,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Taunt",
            "value": 0,
            "type": "unknown",
            "duration": 8
          }
        ]
      },
      {
        "rank": 5,
        "name": "星之鈴・咒術投手",
        "icon": "skill001/skill0012_5",
        "description": "Deals 21275 (ATK x 15.0 + 1100) physical damage to the nearest enemy and inflicts Physical Attack DOWN(LV5) for 12 seconds and Magic Attack DOWN(LV5) for 12 seconds 、自身附加秒的挑釁",
        "effect": "1500% + 1100",
        "buffEffects": [
          {
            "name": "Physical Attack - Ultimate Lv1",
            "value": -20,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Magic Attack - Ultimate Lv1",
            "value": -20,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Taunt",
            "value": 0,
            "type": "unknown",
            "duration": 8
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Max HP +, Debuff Resistance +",
        "icon": "skill001/skill1003",
        "effect": "Max HP + (+3444), Debuff Resistance + (+0.3%)",
        "effectValues": [
          {
            "name": "Max HP +",
            "value": 3444,
            "type": "flat"
          },
          {
            "name": "Debuff Resistance +",
            "value": 0.3,
            "type": "percent"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Block+, Max HP +",
        "icon": "skill001/skill1003",
        "effect": "Block+ (+10), Max HP + (+3444)",
        "effectValues": [
          {
            "name": "Block+",
            "value": 10,
            "type": "flat"
          },
          {
            "name": "Max HP +",
            "value": 3444,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Ran",
    "id": 2093,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Tank",
    "tags": [],
    "baseStats": {
      "HP": 2105,
      "ATK": 269,
      "MATK": 161,
      "DEF": 258,
      "MDEF": 258
    },
    "skillRotation": {
      "opening": "",
      "loop": ""
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "ssr-ran"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "飄散著色香！",
        "icon": "skill001/skill0002",
        "description": "Deals 7034 (ATK x 3.1 + 2375) physical damage to the nearest enemy and applies Hit-Based Physical Damage UP(50%+1351, 4 hit(s)) to self for 15 seconds",
        "descriptionLv1": "Deals 1080 (ATK x 3.1 + 150) physical damage to the nearest enemy and applies Hit-Based Physical Damage UP(50%+550, 4 hit(s)) to self for 15 seconds",
        "descriptionLv90": "Deals 7034 (ATK x 3.1 + 2375) physical damage to the nearest enemy and applies Hit-Based Physical Damage UP(50%+1351, 4 hit(s)) to self for 15 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "310% ATK",
        "baseDamage": "+150",
        "levelGrowth": "+25",
        "lvl1": "310% + 150",
        "lvl90": "310% + 2375",
        "effects": [
          "Hit-Based Physical Damage + Lv5"
        ],
        "buffEffects": [
          {
            "name": "Hit-Based Physical Damage + Lv5",
            "value": 50,
            "type": "percent",
            "duration": 15
          }
        ],
        "duration": 15
      },
      {
        "slot": 3,
        "name": " 啊，束縛，晃動晃動！",
        "icon": "skill001/skill0011",
        "description": "Deals 5938 (ATK x 2.7 + 1880) physical damage to the nearest enemy and inflicts Stun for 2 seconds and Block-26DOWN for 10 seconds",
        "descriptionLv1": "Deals 910 (ATK x 2.7 + 100) physical damage to the nearest enemy and inflicts Stun for 2 seconds and Block-13DOWN for 10 seconds",
        "descriptionLv90": "Deals 5938 (ATK x 2.7 + 1880) physical damage to the nearest enemy and inflicts Stun for 2 seconds and Block-26DOWN for 10 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "270% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+20",
        "lvl1": "270% + 100",
        "lvl90": "270% + 1880",
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
            "duration": 10
          }
        ],
        "duration": 2
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "迅疾風暴 Cowgirl風格",
        "icon": "skill001/skill0003_1",
        "description": "Deals 17333 (ATK x 11.2 + 500) physical damage to the nearest enemy，必中 and inflicts Physical Defense DOWN(LV1) for 10 seconds",
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
        "name": "迅疾風暴 Cowgirl風格",
        "icon": "skill001/skill0003_2",
        "description": "Deals 20890 (ATK x 13.5 + 600) physical damage to the nearest enemy，必中 and inflicts Physical Defense DOWN(LV2) for 10 seconds",
        "effect": "1350% + 600",
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
        "rank": 3,
        "name": "迅疾風暴 Cowgirl風格",
        "icon": "skill001/skill0003_3",
        "description": "Deals 23245 (ATK x 15.0 + 700) physical damage to the nearest enemy，必中 and inflicts Physical Defense DOWN(LV3) for 10 seconds",
        "effect": "1500% + 700",
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
        "rank": 4,
        "name": "迅疾風暴 Cowgirl風格",
        "icon": "skill001/skill0003_4",
        "description": "Deals 24848 (ATK x 16.0 + 800) physical damage to the nearest enemy，必中 and inflicts Physical Defense DOWN(LV4) for 10 seconds",
        "effect": "1600% + 800",
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
        "rank": 5,
        "name": "迅疾風暴 Cowgirl風格",
        "icon": "skill001/skill0003_5",
        "description": "Deals 25699 (ATK x 16.5 + 900) physical damage to the nearest enemy，必中 and inflicts Physical Defense DOWN(LV5) for 10 seconds",
        "effect": "1650% + 900",
        "buffEffects": [
          {
            "name": "Physical Defense - Ultimate Lv1",
            "value": -20,
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
        "name": "Skill Damage +, Skill Enhancement Regol Cost DOWN・Fire",
        "icon": "skill001/skill1001",
        "effect": "Skill Damage + (+30%), Skill Enhancement Regol Cost DOWN・Fire (+5%)",
        "effectValues": [
          {
            "name": "Skill Damage +",
            "value": 30,
            "type": "percent"
          },
          {
            "name": "Skill Enhancement Regol Cost DOWN・Fire",
            "value": 5,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "【Samurai Cow Girl】Setsuka",
    "id": 2094,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [],
    "baseStats": {
      "HP": 1972,
      "ATK": 300,
      "MATK": 180,
      "DEF": 82,
      "MDEF": 32
    },
    "skillRotation": {
      "opening": "",
      "loop": ""
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "ssr-samurai-cow-girl-setsuka"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Won’t you taste my sweets?",
        "icon": "skill001/skill0011",
        "description": "Deals 5923 (ATK x 3.3 + 1930) physical damage to the nearest enemy and inflicts Poison (HP --2425 per second) for 8 seconds and Block-23DOWN for 6 seconds",
        "descriptionLv1": "Deals 948 (ATK x 3.3 + 150) physical damage to the nearest enemy and inflicts Poison (HP --200 per second) for 8 seconds and Block-11DOWN for 6 seconds",
        "descriptionLv90": "Deals 5923 (ATK x 3.3 + 1930) physical damage to the nearest enemy and inflicts Poison (HP --2425 per second) for 8 seconds and Block-23DOWN for 6 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.08,
        "damageScaling": "330% ATK",
        "baseDamage": "+150",
        "levelGrowth": "+20",
        "lvl1": "330% + 150",
        "lvl90": "330% + 1930",
        "effects": [
          "Poison Lv5",
          "Block- Lv4"
        ],
        "buffEffects": [
          {
            "name": "Poison Lv5",
            "value": -200,
            "type": "flat",
            "duration": 8
          },
          {
            "name": "Block- Lv4",
            "value": -11,
            "type": "flat",
            "duration": 6
          }
        ],
        "duration": 8
      },
      {
        "slot": 3,
        "name": "Come now, have some.",
        "icon": "skill001/skill0019",
        "description": "Applies Hit-Based Damage UP(35%+934, 3 hit(s)) to all allies for 15 seconds and Debuff Resistance 0%UP for 8 seconds",
        "descriptionLv1": "Applies Hit-Based Damage UP(35%+400, 3 hit(s)) to all allies for 15 seconds and Debuff Resistance 0%UP for 8 seconds",
        "descriptionLv90": "Applies Hit-Based Damage UP(35%+934, 3 hit(s)) to all allies for 15 seconds and Debuff Resistance 0%UP for 8 seconds",
        "target": "All Allies",
        "castTime": 1.08,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Hit-Based Damage + Lv4",
          "Debuff Resistance Lv2"
        ],
        "buffEffects": [
          {
            "name": "Hit-Based Damage + Lv4",
            "value": 35,
            "type": "percent",
            "duration": 15
          },
          {
            "name": "Debuff Resistance Lv2",
            "value": 0.3,
            "type": "percent",
            "duration": 8
          }
        ],
        "duration": 15
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Accept it—this is your reward.",
        "icon": "skill001/skill0003_1",
        "description": "Deals 14957 (ATK x 11.7 + 800) physical damage to the nearest enemy and inflicts Action Speed DOWN(LV1) for 10 seconds and BlockDOWN(LV1) for 10 seconds",
        "effect": "1170% + 800",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "Accept it—this is your reward.",
        "icon": "skill001/skill0003_2",
        "description": "Deals 17940 (ATK x 14.0 + 1000) physical damage to the nearest enemy and inflicts Action Speed DOWN(LV2) for 10 seconds and BlockDOWN(LV2) for 10 seconds",
        "effect": "1400% + 1000",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "Accept it—this is your reward.",
        "icon": "skill001/skill0003_3",
        "description": "Deals 19976 (ATK x 15.6 + 1100) physical damage to the nearest enemy and inflicts Action Speed DOWN(LV3) for 10 seconds and BlockDOWN(LV3) for 10 seconds",
        "effect": "1560% + 1100",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "Accept it—this is your reward.",
        "icon": "skill001/skill0003_4",
        "description": "Deals 21407 (ATK x 16.7 + 1200) physical damage to the nearest enemy and inflicts Action Speed DOWN(LV4) for 10 seconds and BlockDOWN(LV4) for 10 seconds",
        "effect": "1670% + 1200",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "Accept it—this is your reward.",
        "icon": "skill001/skill0003_5",
        "description": "Deals 22233 (ATK x 17.3 + 1300) physical damage to the nearest enemy and inflicts Action Speed DOWN(LV5) for 10 seconds and BlockDOWN(LV5) for 10 seconds",
        "effect": "1730% + 1300",
        "buffEffects": [
          {
            "name": "Action Speed - Ultimate Lv1",
            "value": -15,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Block- Ultimate Lv1",
            "value": -15,
            "type": "flat",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Physical Attack +, Action Speed +",
        "icon": "skill001/skill1001",
        "effect": "Physical Attack + (+389), Action Speed + (+10%)",
        "effectValues": [
          {
            "name": "Physical Attack +",
            "value": 389,
            "type": "flat"
          },
          {
            "name": "Action Speed +",
            "value": 10,
            "type": "percent"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Skill Damage +, Mind Type ATK +",
        "icon": "skill001/skill1001",
        "effect": "Skill Damage + (+30%), Mind Type ATK + (+10%)",
        "effectValues": [
          {
            "name": "Skill Damage +",
            "value": 30,
            "type": "percent"
          },
          {
            "name": "Mind Type ATK +",
            "value": 10,
            "type": "percent"
          }
        ]
      }
    ],
    "name": "【Queen of Pies and Cookies】Aphrodia",
    "id": 2095,
    "rarity": "SSR",
    "element": "Mind",
    "role": "Attacker",
    "tags": [
      "Buff",
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1715,
      "ATK": 242,
      "MATK": 145,
      "DEF": 143,
      "MDEF": 57
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "queen-of-pies-and-cookies-aphrodia"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Someone is waiting for me.",
        "icon": "skill001/skill0007",
        "description": "Deals 2068 (ATK x 1.3 + 723) physical damage to the 3 nearest enemies and inflicts Action Speed -14%DOWN for 7 seconds and Accuracy -23DOWN for 7 seconds",
        "descriptionLv1": "Deals 369 (ATK x 1.3 + 100) physical damage to the 3 nearest enemies and inflicts Action Speed -14%DOWN for 7 seconds and Accuracy -11DOWN for 7 seconds",
        "descriptionLv90": "Deals 2068 (ATK x 1.3 + 723) physical damage to the 3 nearest enemies and inflicts Action Speed -14%DOWN for 7 seconds and Accuracy -23DOWN for 7 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "130% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+7",
        "lvl1": "130% + 100",
        "lvl90": "130% + 723",
        "effects": [
          "Action Speed - Lv3",
          "Accuracy - Lv4"
        ],
        "buffEffects": [
          {
            "name": "Action Speed - Lv3",
            "value": -14,
            "type": "percent",
            "duration": 7
          },
          {
            "name": "Accuracy - Lv4",
            "value": -11,
            "type": "flat",
            "duration": 7
          }
        ],
        "duration": 7
      },
      {
        "slot": 3,
        "name": "Please… just for tonight.",
        "icon": "skill001/skill0019",
        "description": "Applies Hit-Based Healing Shield (30%+, restores , 3569 hit(s)) to self for 15 seconds and Block26UP for 15 seconds",
        "descriptionLv1": "Applies Hit-Based Healing Shield (30%+, restores , 9 hit(s)) to self for 15 seconds and Block13UP for 15 seconds",
        "descriptionLv90": "Applies Hit-Based Healing Shield (30%+, restores , 3569 hit(s)) to self for 15 seconds and Block26UP for 15 seconds",
        "target": "Self",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Hit-Based Healing Shield Lv5",
          "Block+ Lv5"
        ],
        "buffEffects": [
          {
            "name": "Hit-Based Healing Shield Lv5",
            "value": 30,
            "type": "percent",
            "duration": 15
          },
          {
            "name": "Block+ Lv5",
            "value": 13,
            "type": "flat",
            "duration": 15
          }
        ],
        "duration": 15
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "I, too, can make someone happy.",
        "icon": "skill001/skill0022_1",
        "description": "Restores HP by 1500 (1500) to all allies and inflicts Physical Defense UP(LV1) for 10 seconds and Magic DefenseUP(LV1) for 10 seconds",
        "effect": "2600% + 1500",
        "buffEffects": [
          {
            "name": "Physical Defense + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Defense+ Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "I, too, can make someone happy.",
        "icon": "skill001/skill0022_2",
        "description": "Restores HP by 1800 (1800) to all allies and inflicts Physical Defense UP(LV2) for 10 seconds and Magic DefenseUP(LV2) for 10 seconds",
        "effect": "3000% + 1800",
        "buffEffects": [
          {
            "name": "Physical Defense + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Defense+ Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "I, too, can make someone happy.",
        "icon": "skill001/skill0022_3",
        "description": "Restores HP by 2000 (2000) to all allies and inflicts Physical Defense UP(LV3) for 10 seconds and Magic DefenseUP(LV3) for 10 seconds",
        "effect": "3250% + 2000",
        "buffEffects": [
          {
            "name": "Physical Defense + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Defense+ Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "I, too, can make someone happy.",
        "icon": "skill001/skill0022_4",
        "description": "Restores HP by 2100 (2100) to all allies and inflicts Physical Defense UP(LV4) for 10 seconds and Magic DefenseUP(LV4) for 10 seconds",
        "effect": "3500% + 2100",
        "buffEffects": [
          {
            "name": "Physical Defense + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Defense+ Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "I, too, can make someone happy.",
        "icon": "skill001/skill0022_5",
        "description": "Restores HP by 2200 (2200) to all allies and inflicts Physical Defense UP(LV5) for 10 seconds and Magic DefenseUP(LV5) for 10 seconds",
        "effect": "3700% + 2200",
        "buffEffects": [
          {
            "name": "Physical Defense + Ultimate Lv1",
            "value": 20,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Magic Defense+ Ultimate Lv1",
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
        "name": "Healing Amount +, Max HP +",
        "icon": "skill001/skill1003",
        "effect": "Healing Amount + (+15%), Max HP + (+3444)",
        "effectValues": [
          {
            "name": "Healing Amount +",
            "value": 15,
            "type": "percent"
          },
          {
            "name": "Max HP +",
            "value": 3444,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Physical Defense +, Magic Defense+",
        "icon": "skill001/skill1006",
        "effect": "Physical Defense + (+141), Magic Defense+ (+141)",
        "effectValues": [
          {
            "name": "Physical Defense +",
            "value": 141,
            "type": "flat"
          },
          {
            "name": "Magic Defense+",
            "value": 141,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "【Magical Holy Night Festival】Kaguya",
    "id": 2096,
    "rarity": "SSR",
    "element": "Mind",
    "role": "Tank",
    "tags": [
      "Heal",
      "Buff",
      "Debuff"
    ],
    "baseStats": {
      "HP": 2369,
      "ATK": 207,
      "MATK": 124,
      "DEF": 226,
      "MDEF": 90
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "magical-holy-night-festival-kaguya"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Alright, this is for you.",
        "icon": "skill001/skill0011",
        "description": "Deals 2154 (MATK x 1.0 + 584) magic damage to the 3 nearest enemies and inflicts Burn(HP --1059 per second) for 12 seconds",
        "descriptionLv1": "Deals 364 (MATK x 1.0 + 50) magic damage to the 3 nearest enemies and inflicts Burn(HP --80 per second) for 12 seconds",
        "descriptionLv90": "Deals 2154 (MATK x 1.0 + 584) magic damage to the 3 nearest enemies and inflicts Burn(HP --1059 per second) for 12 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "100% ATK",
        "baseDamage": "+50",
        "levelGrowth": "+6",
        "lvl1": "100% + 50",
        "lvl90": "100% + 584",
        "effects": [
          "Burn Lv3"
        ],
        "buffEffects": [
          {
            "name": "Burn Lv3",
            "value": -80,
            "type": "flat",
            "duration": 12
          }
        ],
        "duration": 12
      },
      {
        "slot": 3,
        "name": "Even if Santa gets it, it’s fine, right?",
        "icon": "skill001/skill0011",
        "description": "Inflicts Charm on the 3 nearest enemies for 1 seconds and Magic Defense-18%+-208DOWN for 8 seconds",
        "descriptionLv1": "Inflicts Charm on the 3 nearest enemies for 1 seconds and Magic Defense-18%+-30DOWN for 8 seconds",
        "descriptionLv90": "Inflicts Charm on the 3 nearest enemies for 1 seconds and Magic Defense-18%+-208DOWN for 8 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Charm",
          "Magic Defense- Lv3"
        ],
        "buffEffects": [
          {
            "name": "Charm",
            "value": 0,
            "type": "unknown",
            "duration": 1
          },
          {
            "name": "Magic Defense- Lv3",
            "value": -18,
            "type": "percent",
            "duration": 8
          }
        ],
        "duration": 1
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "The gift… is… me.",
        "icon": "skill001/skill0012_1",
        "description": "Deals 17770 (MATK x 11.0 + 500) magic damage to the nearest enemy and inflicts Dispel for 1 seconds (Dispel effect: removes all active buffs and prevents gaining buffs for the duration) and absorbs  of the damage dealt to restore own HP",
        "effect": "1100% + 500",
        "buffEffects": [
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 1
          }
        ]
      },
      {
        "rank": 2,
        "name": "The gift… is… me.",
        "icon": "skill001/skill0012_2",
        "description": "Deals 21010 (MATK x 13.0 + 600) magic damage to the nearest enemy and inflicts Dispel for 2 seconds (Dispel effect: removes all active buffs and prevents gaining buffs for the duration) and absorbs  of the damage dealt to restore own HP",
        "effect": "1300% + 600",
        "buffEffects": [
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 1
          }
        ]
      },
      {
        "rank": 3,
        "name": "The gift… is… me.",
        "icon": "skill001/skill0012_3",
        "description": "Deals 23151 (MATK x 14.3 + 700) magic damage to the nearest enemy and inflicts Dispel for 2 seconds (Dispel effect: removes all active buffs and prevents gaining buffs for the duration) and absorbs  of the damage dealt to restore own HP",
        "effect": "1430% + 700",
        "buffEffects": [
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 1
          }
        ]
      },
      {
        "rank": 4,
        "name": "The gift… is… me.",
        "icon": "skill001/skill0012_4",
        "description": "Deals 24300 (MATK x 15.0 + 750) magic damage to the nearest enemy and inflicts Dispel for 3 seconds (Dispel effect: removes all active buffs and prevents gaining buffs for the duration) and absorbs  of the damage dealt to restore own HP",
        "effect": "1500% + 750",
        "buffEffects": [
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 1
          }
        ]
      },
      {
        "rank": 5,
        "name": "The gift… is… me.",
        "icon": "skill001/skill0012_5",
        "description": "Deals 25135 (MATK x 15.5 + 800) magic damage to the nearest enemy and inflicts Dispel for 3 seconds (Dispel effect: removes all active buffs and prevents gaining buffs for the duration) and absorbs  of the damage dealt to restore own HP",
        "effect": "1550% + 800",
        "buffEffects": [
          {
            "name": "Cleanse",
            "value": 0,
            "type": "unknown",
            "duration": 1
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Magic Attack +",
        "icon": "skill001/skill1001",
        "effect": "Magic Attack + (+259)",
        "effectValues": [
          {
            "name": "Magic Attack +",
            "value": 259,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "Skill Damage +, Max HP +",
        "icon": "skill001/skill1001",
        "effect": "Skill Damage + (+20%), Max HP + (+2896)",
        "effectValues": [
          {
            "name": "Skill Damage +",
            "value": 20,
            "type": "percent"
          },
          {
            "name": "Max HP +",
            "value": 2896,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "【Holy Night Succubus】Yu Rima Elca",
    "id": 2097,
    "rarity": "SR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Disrupt",
      "Debuff"
    ],
    "baseStats": {
      "HP": 2332,
      "ATK": 188,
      "MATK": 314,
      "DEF": 7,
      "MDEF": 18
    },
    "skillRotation": {
      "opening": "Skill2 → Skill3 → Basic → Basic",
      "loop": "Basic → Basic → Skill2 → Basic → Basic → Basic → Skill3 → Skill2 → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "110% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "holy-night-succubus-yu-rima-elca"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Blooming Flowers",
        "icon": "skill001/skill0007",
        "description": "Deals 2418 (ATK x 1.0 + 812) physical damage to the 3 nearest enemies and inflicts Block-23DOWN for 8 secondsand when defeating an enemy, gain MP Recovery30.",
        "descriptionLv1": "Deals 421 (ATK x 1.0 + 100) physical damage to the 3 nearest enemies and inflicts Block-11DOWN for 8 secondsand when defeating an enemy, gain MP Recovery30.",
        "descriptionLv90": "Deals 2418 (ATK x 1.0 + 812) physical damage to the 3 nearest enemies and inflicts Block-23DOWN for 8 secondsand when defeating an enemy, gain MP Recovery30.",
        "target": "Nearest Enemy",
        "castTime": 1.38,
        "damageScaling": "100% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+8",
        "lvl1": "100% + 100",
        "lvl90": "100% + 812",
        "effects": [
          "Block- Lv4",
          "MP Recovery"
        ],
        "buffEffects": [
          {
            "name": "Block- Lv4",
            "value": -11,
            "type": "flat",
            "duration": 8
          },
          {
            "name": "MP Recovery",
            "value": 30,
            "type": "flat"
          }
        ],
        "duration": 8
      },
      {
        "slot": 3,
        "name": "Fragrant Blossoms",
        "icon": "skill001/skill0019",
        "description": "Applies Physical Attack 20%+841UP to self for 12 seconds and Action Speed 17%UP for 12 seconds",
        "descriptionLv1": "Applies Physical Attack 20%+40UP to self for 12 seconds and Action Speed 17%UP for 12 seconds",
        "descriptionLv90": "Applies Physical Attack 20%+841UP to self for 12 seconds and Action Speed 17%UP for 12 seconds",
        "target": "Self",
        "castTime": 1.38,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Physical Attack + Lv5",
          "Action Speed + Lv4"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack + Lv5",
            "value": 20,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Action Speed + Lv4",
            "value": 17,
            "type": "percent",
            "duration": 12
          }
        ],
        "duration": 12
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "A Charming Maiden — Wrapped in Breeze, Surrounded by Blossoms",
        "icon": "skill001/skill0003_1",
        "description": "Deals 8630 (ATK x 5.0 + 600) physical damage to all enemies and inflicts Wind Type ATK UP(LV1) for 5 secondsand when defeating an enemy, gain MP Recovery40.",
        "effect": "500% + 600",
        "buffEffects": [
          {
            "name": "Wind Type ATK + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 5
          },
          {
            "name": "MP Recovery Ultimate Lv1",
            "value": 40,
            "type": "flat"
          }
        ]
      },
      {
        "rank": 2,
        "name": "A Charming Maiden — Wrapped in Breeze, Surrounded by Blossoms",
        "icon": "skill001/skill0003_2",
        "description": "Deals 12042 (ATK x 7.0 + 800) physical damage to all enemies and inflicts Wind Type ATK UP(LV2) for 6 secondsand when defeating an enemy, gain MP Recovery50.",
        "effect": "700% + 800",
        "buffEffects": [
          {
            "name": "Wind Type ATK + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 5
          },
          {
            "name": "MP Recovery Ultimate Lv1",
            "value": 40,
            "type": "flat"
          }
        ]
      },
      {
        "rank": 3,
        "name": "A Charming Maiden — Wrapped in Breeze, Surrounded by Blossoms",
        "icon": "skill001/skill0003_3",
        "description": "Deals 14551 (ATK x 8.5 + 900) physical damage to all enemies and inflicts Wind Type ATK UP(LV3) for 6 secondsand when defeating an enemy, gain MP Recovery60.",
        "effect": "850% + 900",
        "buffEffects": [
          {
            "name": "Wind Type ATK + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 5
          },
          {
            "name": "MP Recovery Ultimate Lv1",
            "value": 40,
            "type": "flat"
          }
        ]
      },
      {
        "rank": 4,
        "name": "A Charming Maiden — Wrapped in Breeze, Surrounded by Blossoms",
        "icon": "skill001/skill0003_4",
        "description": "Deals 16257 (ATK x 9.5 + 1000) physical damage to all enemies and inflicts Wind Type ATK UP(LV4) for 7 secondsand when defeating an enemy, gain MP Recovery70.",
        "effect": "950% + 1000",
        "buffEffects": [
          {
            "name": "Wind Type ATK + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 5
          },
          {
            "name": "MP Recovery Ultimate Lv1",
            "value": 40,
            "type": "flat"
          }
        ]
      },
      {
        "rank": 5,
        "name": "A Charming Maiden — Wrapped in Breeze, Surrounded by Blossoms",
        "icon": "skill001/skill0003_5",
        "description": "Deals 17160 (ATK x 10.0 + 1100) physical damage to all enemies and inflicts Wind Type ATK UP(LV5) for 7 secondsand when defeating an enemy, gain MP Recovery80.",
        "effect": "1000% + 1100",
        "buffEffects": [
          {
            "name": "Wind Type ATK + Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 5
          },
          {
            "name": "MP Recovery Ultimate Lv1",
            "value": 40,
            "type": "flat"
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
        "name": "Ultimate Damage +, Physical Critical Damage+",
        "icon": "skill001/skill1001",
        "effect": "Ultimate Damage + (+15%), Physical Critical Damage+ (+90)",
        "effectValues": [
          {
            "name": "Ultimate Damage +",
            "value": 15,
            "type": "percent"
          },
          {
            "name": "Physical Critical Damage+",
            "value": 90,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "Ruru",
    "id": 2098,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [],
    "baseStats": {
      "HP": 1819,
      "ATK": 321,
      "MATK": 192,
      "DEF": 143,
      "MDEF": 57
    },
    "skillRotation": {
      "opening": "",
      "loop": ""
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "ssr-ruru"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "You’re so shameless",
        "icon": "skill001/skill0011",
        "description": "Deals 2796 (MATK x 1.2 + 723) magic damage to the 3 nearest enemies and inflicts Petrify for 2 seconds and Block-26DOWN for 12 seconds",
        "descriptionLv1": "Deals 514 (MATK x 1.2 + 100) magic damage to the 3 nearest enemies and inflicts Petrify for 2 seconds and Block-13DOWN for 12 seconds",
        "descriptionLv90": "Deals 2796 (MATK x 1.2 + 723) magic damage to the 3 nearest enemies and inflicts Petrify for 2 seconds and Block-26DOWN for 12 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.42,
        "damageScaling": "120% ATK",
        "baseDamage": "+100",
        "levelGrowth": "+7",
        "lvl1": "120% + 100",
        "lvl90": "120% + 723",
        "effects": [
          "Petrify",
          "Block- Lv5"
        ],
        "buffEffects": [
          {
            "name": "Petrify",
            "value": 0,
            "type": "unknown",
            "duration": 2
          },
          {
            "name": "Block- Lv5",
            "value": -13,
            "type": "flat",
            "duration": 12
          }
        ],
        "duration": 2
      },
      {
        "slot": 3,
        "name": "Mmh~ haa~",
        "icon": "skill001/skill0019",
        "description": "Applies Hit-Based Magic Damage UP(60%+1490, 4 hit(s)) to self for 15 seconds and Magic Attack 20%+841UP for 12 seconds and silences all enemies for  seconds",
        "descriptionLv1": "Applies Hit-Based Magic Damage UP(60%+600, 4 hit(s)) to self for 15 seconds and Magic Attack 20%+40UP for 12 seconds and silences all enemies for  seconds",
        "descriptionLv90": "Applies Hit-Based Magic Damage UP(60%+1490, 4 hit(s)) to self for 15 seconds and Magic Attack 20%+841UP for 12 seconds and silences all enemies for  seconds",
        "target": "Self",
        "castTime": 0.8,
        "damageScaling": null,
        "baseDamage": null,
        "levelGrowth": null,
        "lvl1": null,
        "lvl90": null,
        "effects": [
          "Hit-Based Magic Damage + LvMax",
          "Magic Attack + Lv5",
          "Silence"
        ],
        "buffEffects": [
          {
            "name": "Hit-Based Magic Damage + LvMax",
            "value": 60,
            "type": "percent",
            "duration": 15
          },
          {
            "name": "Magic Attack + Lv5",
            "value": 20,
            "type": "percent",
            "duration": 12
          },
          {
            "name": "Silence",
            "value": 0,
            "type": "unknown",
            "duration": 1.5
          }
        ],
        "duration": 15
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "You all should try it too!",
        "icon": "skill001/skill0012_1",
        "description": "Deals 17216 (MATK x 9.5 + 800) magic damage to the nearest enemy and inflicts Magic Type Damage Taken UP(LV1) for 8 seconds and applies Action Speed UP(LV1) to self for 10 seconds",
        "effect": "950% + 800",
        "buffEffects": [
          {
            "name": "Magic Type Damage Taken+ Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 25,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 2,
        "name": "You all should try it too!",
        "icon": "skill001/skill0012_2",
        "description": "Deals 20526 (MATK x 11.3 + 1000) magic damage to the nearest enemy and inflicts Magic Type Damage Taken UP(LV2) for 8 seconds and applies Action Speed UP(LV2) to self for 10 seconds",
        "effect": "1130% + 1000",
        "buffEffects": [
          {
            "name": "Magic Type Damage Taken+ Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 25,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 3,
        "name": "You all should try it too!",
        "icon": "skill001/skill0012_3",
        "description": "Deals 23095 (MATK x 12.7 + 1150) magic damage to the nearest enemy and inflicts Magic Type Damage Taken UP(LV3) for 8 seconds and applies Action Speed UP(LV3) to self for 10 seconds",
        "effect": "1270% + 1150",
        "buffEffects": [
          {
            "name": "Magic Type Damage Taken+ Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 25,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 4,
        "name": "You all should try it too!",
        "icon": "skill001/skill0012_4",
        "description": "Deals 24578 (MATK x 13.5 + 1250) magic damage to the nearest enemy and inflicts Magic Type Damage Taken UP(LV4) for 8 seconds and applies Action Speed UP(LV4) to self for 10 seconds",
        "effect": "1350% + 1250",
        "buffEffects": [
          {
            "name": "Magic Type Damage Taken+ Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 25,
            "type": "percent",
            "duration": 10
          }
        ]
      },
      {
        "rank": 5,
        "name": "You all should try it too!",
        "icon": "skill001/skill0012_5",
        "description": "Deals 26356 (MATK x 14.5 + 1300) magic damage to the nearest enemy and inflicts Magic Type Damage Taken UP(LV5) for 8 seconds and applies Action Speed UP(LV5) to self for 10 seconds",
        "effect": "1450% + 1300",
        "buffEffects": [
          {
            "name": "Magic Type Damage Taken+ Ultimate Lv1",
            "value": 10,
            "type": "percent",
            "duration": 8
          },
          {
            "name": "Action Speed + Ultimate Lv1",
            "value": 25,
            "type": "percent",
            "duration": 10
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Magic Critical Damage+, Accuracy +",
        "icon": "skill001/skill1001",
        "effect": "Magic Critical Damage+ (+176), Accuracy + (+20)",
        "effectValues": [
          {
            "name": "Magic Critical Damage+",
            "value": 176,
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
        "name": "Ultimate Damage +, Magic Attack +",
        "icon": "skill001/skill1001",
        "effect": "Ultimate Damage + (+15%), Magic Attack + (+259)",
        "effectValues": [
          {
            "name": "Ultimate Damage +",
            "value": 15,
            "type": "percent"
          },
          {
            "name": "Magic Attack +",
            "value": 259,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "【Dragon Crusher】Medusa",
    "id": 2099,
    "rarity": "SSR",
    "element": "Dark",
    "role": "Attacker",
    "tags": [
      "Debuff",
      "Disrupt"
    ],
    "baseStats": {
      "HP": 1715,
      "ATK": 207,
      "MATK": 345,
      "DEF": 57,
      "MDEF": 143
    },
    "skillRotation": {
      "opening": "Skill2 → Skill3 → Basic → Basic",
      "loop": "Skill2 → Basic → Basic → Skill3 → Basic → Basic → Basic → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0004",
      "type": "Magic",
      "scaling": "130% ATK",
      "speedLabel": "Normal",
      "speedValue": "0.86"
    },
    "slug": "dragon-crusher-medusa"
  },
  {
    "skills": [
      {
        "slot": 2,
        "name": "Longevity",
        "icon": "skill001/skill0019",
        "description": "Restores HP by 2000% ATK + 4160 to all allies and inflicts Debuff Resistance Lv2 (+30%) for 10 seconds and Accuracy+ Lv3 (+9) for 10 seconds",
        "descriptionLv1": "Restores HP by 2000% ATK + 600 to all allies and inflicts Debuff Resistance Lv2 (+30%) for 10 seconds and Accuracy+ Lv3 (+9) for 10 seconds",
        "descriptionLv90": "Restores HP by 2000% ATK + 4160 to all allies and inflicts Debuff Resistance Lv2 (+30%) for 10 seconds and Accuracy+ Lv3 (+9) for 10 seconds",
        "target": "All Allies",
        "castTime": 1.58,
        "damageScaling": "2000% ATK",
        "baseDamage": "+600",
        "levelGrowth": "+40",
        "lvl1": "2000% + 600",
        "lvl90": "2000% + 4160",
        "effects": [
          "Debuff Resistance Lv2",
          "Accuracy+ Lv3"
        ],
        "buffEffects": [
          {
            "name": "Debuff Resistance Lv2",
            "value": 30,
            "type": "percent",
            "duration": 10
          },
          {
            "name": "Accuracy+ Lv3",
            "value": 9,
            "type": "flat",
            "duration": 10
          }
        ],
        "duration": 10
      },
      {
        "slot": 3,
        "name": "Crane and Turtle",
        "icon": "skill001/skill0007",
        "description": "Deals 110% ATK + 654 physical damage to the 3 nearest enemies and inflicts Physical Attack- Lv4 (-11%) for 7 seconds and Magic Attack- Lv4 (-11%) for 7 seconds",
        "descriptionLv1": "Deals 110% ATK + 120 physical damage to the 3 nearest enemies and inflicts Physical Attack- Lv4 (-11%) for 7 seconds and Magic Attack- Lv4 (-11%) for 7 seconds",
        "descriptionLv90": "Deals 110% ATK + 654 physical damage to the 3 nearest enemies and inflicts Physical Attack- Lv4 (-11%) for 7 seconds and Magic Attack- Lv4 (-11%) for 7 seconds",
        "target": "Nearest Enemy",
        "castTime": 1.58,
        "damageScaling": "110% ATK",
        "baseDamage": "+120",
        "levelGrowth": "+6",
        "lvl1": "110% + 120",
        "lvl90": "110% + 654",
        "effects": [
          "Physical Attack- Lv4",
          "Magic Attack- Lv4"
        ],
        "buffEffects": [
          {
            "name": "Physical Attack- Lv4",
            "value": -11,
            "type": "percent",
            "duration": 7
          },
          {
            "name": "Magic Attack- Lv4",
            "value": -11,
            "type": "percent",
            "duration": 7
          }
        ],
        "duration": 7
      }
    ],
    "ultimate": [
      {
        "rank": 1,
        "name": "Bird-and-Beast Caricatures",
        "icon": "skill001/skill0012_1",
        "description": "Deals 380% ATK + 600 physical damage to all enemies and inflicts Dispel for 3 seconds and Action Speed- Ultimate Lv1 (-8%) for 8 seconds",
        "effect": "380% + 600",
        "buffEffects": [
          {
            "name": "Dispel",
            "value": 0,
            "type": "unknown",
            "duration": 3
          },
          {
            "name": "Action Speed- Ultimate Lv1",
            "value": -8,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 2,
        "name": "Bird-and-Beast Caricatures",
        "icon": "skill001/skill0012_2",
        "description": "Deals 450% ATK + 800 physical damage to all enemies and inflicts Dispel for 4 seconds and Action Speed- Ultimate Lv2 (-10%) for 8 seconds",
        "effect": "450% + 800",
        "buffEffects": [
          {
            "name": "Dispel",
            "value": 0,
            "type": "unknown",
            "duration": 4
          },
          {
            "name": "Action Speed- Ultimate Lv2",
            "value": -10,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 3,
        "name": "Bird-and-Beast Caricatures",
        "icon": "skill001/skill0012_3",
        "description": "Deals 509% ATK + 950 physical damage to all enemies and inflicts Dispel for 4 seconds and Action Speed- Ultimate Lv3 (-12%) for 8 seconds",
        "effect": "509% + 950",
        "buffEffects": [
          {
            "name": "Dispel",
            "value": 0,
            "type": "unknown",
            "duration": 4
          },
          {
            "name": "Action Speed- Ultimate Lv3",
            "value": -12,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 4,
        "name": "Bird-and-Beast Caricatures",
        "icon": "skill001/skill0012_4",
        "description": "Deals 550% ATK + 1100 physical damage to all enemies and inflicts Dispel for 5 seconds and Action Speed- Ultimate Lv4 (-14%) for 8 seconds",
        "effect": "550% + 1100",
        "buffEffects": [
          {
            "name": "Dispel",
            "value": 0,
            "type": "unknown",
            "duration": 5
          },
          {
            "name": "Action Speed- Ultimate Lv4",
            "value": -14,
            "type": "percent",
            "duration": 8
          }
        ]
      },
      {
        "rank": 5,
        "name": "Bird-and-Beast Caricatures",
        "icon": "skill001/skill0012_5",
        "description": "Deals 580% ATK + 1200 physical damage to all enemies and inflicts Dispel for 5 seconds and Action Speed- Ultimate Lv5 (-15%) for 8 seconds",
        "effect": "580% + 1200",
        "buffEffects": [
          {
            "name": "Dispel",
            "value": 0,
            "type": "unknown",
            "duration": 5
          },
          {
            "name": "Action Speed- Ultimate Lv5",
            "value": -15,
            "type": "percent",
            "duration": 8
          }
        ]
      }
    ],
    "passives": [
      {
        "slot": 1,
        "name": "Self Action Speed UP, Max HP UP",
        "icon": "skill001/skill1003",
        "effects": [
          {
            "name": "Action Speed+",
            "value": 10,
            "type": "flat"
          },
          {
            "name": "Max HP+",
            "value": 3444,
            "type": "flat"
          }
        ]
      },
      {
        "slot": 2,
        "name": "All Allies Block UP, Max HP UP",
        "icon": "skill001/skill1007",
        "effects": [
          {
            "name": "Block+",
            "value": 15,
            "type": "flat"
          },
          {
            "name": "Max HP+",
            "value": 2896,
            "type": "flat"
          }
        ]
      }
    ],
    "name": "【New Year's Calligraphy】Pastel",
    "id": 2100,
    "rarity": "SSR",
    "element": "Water",
    "role": "Support",
    "tags": ["Heal", "Buff", "Debuff", "Disrupt"],
    "baseStats": {
      "HP": 2745,
      "ATK": 306,
      "MATK": 183,
      "DEF": 82,
      "MDEF": 32
    },
    "skillRotation": {
      "opening": "Skill3 → Skill2 → Basic → Basic",
      "loop": "Basic → Basic → Skill2 → Skill3 → Basic → Basic → Basic → Skill2 → Basic"
    },
    "basicAttack": {
      "icon": "skill001/skill0001",
      "type": "Physical",
      "scaling": "120% ATK",
      "speedLabel": "Slightly Slow",
      "speedValue": "1.00"
    },
    "slug": "new-years-calligraphy-pastel"
  }
];

export const SPEED_LABELS = {
  'Very Fast': { label: 'Very Fast', freezeTime: '0.36s' },
  'Fast': { label: 'Fast', freezeTime: '0.61s' },
  'Slightly Fast': { label: 'Slightly Fast', freezeTime: '0.69s' },
  'Normal': { label: 'Normal', freezeTime: '0.86s' },
  'Slightly Slow': { label: 'Slightly Slow', freezeTime: '1.00s' },
  'Slow': { label: 'Slow', freezeTime: '1.11s' },
  'Very Slow': { label: 'Very Slow', freezeTime: '1.36s' },
};

// Status effect descriptions
export const STATUS_EFFECTS = {
  'Petrify': 'Cannot act, Block rate becomes 0',
  'Stun': 'Cannot act',
  'Freeze': 'Cannot act, receives damage over time',
  'Sleep': 'Cannot act, wakes up when hit by a critical attack',
  'Silence': 'Cannot use skills or ultimate',
  'Confusion': 'Attacks random targets',
  'Charm': 'Attacks own allies',
  'Taunt': 'Forces target to attack the taunter',
  'Poison': 'Receives damage over time',
  'Burn': 'Receives damage over time (stackable)',
  'Bleed': 'Receives damage over time (-1% HP)',
  'Paralysis': 'Speed -50%, Attack -50%',
  'Curse': 'Cannot recover, Speed -50%, Critical rate becomes 0',
  'Blind': 'Block rate becomes 0, Accuracy -50%',
  'Fear': 'MP is drained over time',
};

// Buff level scaling
export const BUFF_LEVELS = {
  'ATK+': { Lv1: '+10%', Lv2: '+15%', Lv3: '+20%', Lv4: '+25%', LvMax: '+30%' },
  'DEF+': { Lv1: '+10%', Lv2: '+15%', Lv3: '+20%', Lv4: '+25%', LvMax: '+30%' },
};
