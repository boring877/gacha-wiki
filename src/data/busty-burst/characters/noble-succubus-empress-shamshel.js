// Character data: noble-succubus-empress-shamshel
// Merged from info/skills/stats files

export const info = {
  "slug": "noble-succubus-empress-shamshel",
  "name": "[The Noble Succubus Empress] Shamshel",
  "displayName": "The Noble Succubus Empress Shamshel",
  "baseName": "Shamshel",
  "title": "The Noble Succubus Empress",
  "rarity": "SSR",
  "element": "Dark",
  "role": "Attacker",
  "attackType": "Magic",
  "position": {
    "roman": "II",
    "number": 2
  },
  "actionSpeed": "Slightly Fast",
  "range": 360,
  "weaponType": "Shoot/Ranged",
  "skillTypes": [
    "Debuff",
    "Disrupt"
  ],
  "image": "Noble_Succubus_Empress_Shamshel",
  "introduction": "Middle Row、Magical、Attacker",
  "profile": {
    "height": "154cm",
    "bust": "100cm (K Cup)",
    "waist": "55cm",
    "hips": "80cm"
  },
  "credits": {
    "illustration": {
      "japanese": "Q-Gaku",
      "romanized": "Q-Gaku"
    },
    "voice": {
      "japanese": "\u91d1\u677e\u7531\u83ef",
      "romanized": "Kanematsu Yuka"
    }
  },
  "obtain": {
    "type": "permanent",
    "source": "Standard Banner"
  }
};

export const skills = {
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
      "name": "Mm-hmm, I\u2019m the First Queen\u266a",
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
      "name": "I\u2019ll eat you up!",
      "icon": "skill001/skill0006_1",
      "description": "Deals 5233 (MATK x 3.3 + 300) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
      "effect": "330% + 300",
      "buffEffects": null
    },
    {
      "rank": 2,
      "name": "I\u2019ll eat you up!",
      "icon": "skill001/skill0006_2",
      "description": "Deals 6061 (MATK x 3.8 + 380) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
      "effect": "380% + 380",
      "buffEffects": null
    },
    {
      "rank": 3,
      "name": "I\u2019ll eat you up!",
      "icon": "skill001/skill0006_3",
      "description": "Deals 6729 (MATK x 4.2 + 450) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
      "effect": "420% + 450",
      "buffEffects": null
    },
    {
      "rank": 4,
      "name": "I\u2019ll eat you up!",
      "icon": "skill001/skill0006_4",
      "description": "Deals 7217 (MATK x 4.5 + 490) magic damage to the 3 nearest enemies and absorbs  of the damage dealt to restore own HP",
      "effect": "450% + 490",
      "buffEffects": null
    },
    {
      "rank": 5,
      "name": "I\u2019ll eat you up!",
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
  "name": "\u3010Graceful Portrait\u3011Shamshel",
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
    "opening": "Skill3 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "noble-succubus-empress-shamshel"
};

export const stats = {
  "id": "noble-succubus-empress-shamshel",
  "characterId": 2065,
  "name": "【Elegant Portrait】Shamshel",
  "rarity": "SSR",
  "element": "魔",
  "weapon": "",
  "role": "Attacker",
  "tags": [
    "Disrupt"
  ],
  "baseStats": {
    "hp": {
      "base": 1715,
      "lv90": 8575
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
      "base": 85,
      "lv90": 299
    },
    "mpRegen": {
      "base": 56,
      "lv90": 225
    },
    "healPwr": {
      "base": 82,
      "lv90": 206
    },
    "mpCharge": {
      "base": 77,
      "lv90": 77
    },
    "hpDrain": {
      "base": 8,
      "lv90": 26
    },
    "mpCostDown": {
      "base": 0,
      "lv90": 0
    }
  },
  "limitBreak": {
    "lb1": {
      "HP": 515,
      "MATK": 90,
      "Block": 17,
      "MP Charge": 7
    },
    "lb2": {
      "HP": 592,
      "MATK": 103,
      "Accuracy": 13,
      "Block": 19
    },
    "lb3": {
      "HP": 695,
      "MATK": 121,
      "Block": 22,
      "MP Charge": 10
    },
    "lb4": {
      "HP": 772,
      "MATK": 135,
      "Accuracy": 17,
      "Block": 25
    },
    "lb5": {
      "HP": 1458,
      "MATK": 277,
      "DEF": 11,
      "MDEF": 41,
      "Heal Pwr": 21
    },
    "total": {
      "HP": 4032,
      "MATK": 726,
      "Block": 83,
      "MP Charge": 17,
      "Accuracy": 30,
      "DEF": 11,
      "MDEF": 41,
      "Heal Pwr": 21
    }
  },
  "gpAbility": {
    "gp1": {
      "HP Drain": 2
    },
    "gp2": {
      "MATK": 40,
      "HP Drain": 2
    },
    "gp3": {
      "MATK": 40,
      "HP Drain": 5
    },
    "gp4": {
      "MATK": 120,
      "HP Drain": 5
    },
    "gp5": {
      "MATK": 120,
      "HP Drain": 7
    },
    "gp6": {
      "MATK": 200,
      "HP Drain": 7
    },
    "gp7": {
      "MATK": 200,
      "HP Drain": 9
    },
    "gp8": {
      "MATK": 280,
      "HP Drain": 9
    },
    "gp9": {
      "MATK": 280,
      "HP Drain": 11
    },
    "gp10": {
      "MATK": 360,
      "HP Drain": 11
    },
    "total": {
      "MATK": 360,
      "HP Drain": 11
    }
  },
  "abilityGrade": {
    "g1": {
      "HP": 181,
      "MATK": 31,
      "MDEF": 6,
      "Magic Crit": 4,
      "Accuracy": 9
    },
    "g2": {
      "HP": 217,
      "MATK": 38,
      "MDEF": 8,
      "Magic Crit": 5,
      "Block": 17
    },
    "g3": {
      "HP": 253,
      "MATK": 44,
      "MDEF": 9,
      "Magic Crit": 6,
      "Accuracy": 12
    },
    "g4": {
      "HP": 289,
      "MATK": 50,
      "MDEF": 10,
      "Magic Crit": 7,
      "Block": 23
    },
    "g5": {
      "HP": 325,
      "MATK": 57,
      "MDEF": 12,
      "Magic Crit": 8,
      "MP Charge": 7
    },
    "g6": {
      "HP": 361,
      "MATK": 63,
      "MDEF": 13,
      "Magic Crit": 9,
      "Accuracy": 18
    },
    "g7": {
      "HP": 397,
      "MATK": 69,
      "MDEF": 14,
      "Magic Crit": 10,
      "Block": 32
    },
    "g8": {
      "HP": 433,
      "MATK": 76,
      "MDEF": 16,
      "Magic Crit": 10,
      "Accuracy": 21
    },
    "g9": {
      "HP": 469,
      "MATK": 82,
      "MDEF": 17,
      "Magic Crit": 11,
      "Block": 38
    },
    "g10": {
      "HP": 506,
      "MATK": 88,
      "MDEF": 18,
      "Magic Crit": 12,
      "MP Charge": 10
    },
    "total": {
      "HP": 506,
      "MATK": 88,
      "MDEF": 18,
      "Magic Crit": 12,
      "MP Charge": 10
    }
  },
  "passiveAbilities": [
    {
      "grade": 1,
      "MP Cost Down": 1
    },
    {
      "grade": 2,
      "MATK": 27
    },
    {
      "grade": 3,
      "MP Cost Down": 1
    },
    {
      "grade": 4,
      "MATK": 36
    },
    {
      "grade": 5,
      "MP Cost Down": 1
    },
    {
      "grade": 6,
      "MATK": 45
    },
    {
      "grade": 7,
      "MP Cost Down": 1
    },
    {
      "grade": 8,
      "MATK": 54
    },
    {
      "grade": 9,
      "MP Cost Down": 1
    },
    {
      "grade": 10,
      "MATK": 63
    },
    {
      "grade": 11,
      "MP Cost Down": 1
    }
  ]
};;;;;;;;
