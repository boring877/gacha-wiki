// Skills data for Lapis
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Sapphire",
      "icon": "skill001/skill0011",
      "description": "Deals 320% + 180 magic damage to the nearest enemy and inflicts Burn (-150 HP/s) for 10 seconds and Freeze (-650 HP/s, cannot act) for 1.5 seconds",
      "descriptionLv1": "Deals 320% + 180 magic damage to the nearest enemy and inflicts Burn (-150 HP/s) for 10 seconds and Freeze (-650 HP/s, cannot act) for 1.5 seconds",
      "descriptionLv90": "Deals 320% + 1980 magic damage to the nearest enemy and inflicts Burn (-150 HP/s) for 10 seconds and Freeze (-650 HP/s, cannot act) for 1.5 seconds",
      "target": "Nearest Enemy",
      "castTime": 1.08,
      "damageScaling": "320% MATK",
      "baseDamage": "+180",
      "levelGrowth": "+20",
      "lvl1": "320% + 180",
      "lvl90": "320% + 1980",
      "effects": [
        "Burn",
        "Freeze"
      ],
      "buffEffects": [
        {
          "name": "Burn",
          "value": "-150 HP/s",
          "type": "dot",
          "duration": 10
        },
        {
          "name": "Freeze",
          "value": "-650 HP/s",
          "type": "cc",
          "duration": 1.5
        }
      ],
      "duration": 10
    },
    {
      "slot": 3,
      "name": "Dignity",
      "icon": "skill001/skill0019",
      "description": "Applies Magic Attack +20% (+850 MATK) to self for 12 seconds and Action Speed +17% for 12 seconds",
      "descriptionLv1": "Applies Magic Attack +20% (+40 MATK) to self for 12 seconds and Action Speed +17% for 12 seconds",
      "descriptionLv90": "Applies Magic Attack +20% (+850 MATK) to self for 12 seconds and Action Speed +17% for 12 seconds",
      "target": "Self",
      "castTime": 1.08,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": "MATK +20% (+40), Speed +17%",
      "lvl90": "MATK +20% (+850), Speed +17%",
      "effects": [
        "MATK UP",
        "Action Speed UP"
      ],
      "buffEffects": [
        {
          "name": "MATK UP",
          "value": 20,
          "valueLv1": 20,
          "valueLv90": 20,
          "flatBonus": 40,
          "flatBonusLv1": 40,
          "flatBonusLv90": 850,
          "type": "buff",
          "duration": 12,
          "displayFormat": "% + flat"
        },
        {
          "name": "Action Speed UP",
          "value": 17,
          "valueLv1": 17,
          "valueLv90": 17,
          "type": "buff",
          "duration": 12
        }
      ],
      "duration": 12
    }
  ],
  "ultimate": [
    {
      "rank": 1,
      "name": "Arabian Night Sky",
      "icon": "skill001/skill0006_1",
      "description": "Deals 1100% + 800 magic damage to the nearest enemy and inflicts Water DEF -25% for 10 seconds and Fire DEF -25% for 10 seconds",
      "effect": "1100% + 800",
      "buffEffects": [
        {
          "name": "Water DEF DOWN",
          "value": "-25%",
          "type": "debuff",
          "duration": 10
        },
        {
          "name": "Fire DEF DOWN",
          "value": "-25%",
          "type": "debuff",
          "duration": 10
        }
      ]
    },
    {
      "rank": 2,
      "name": "Arabian Night Sky",
      "icon": "skill001/skill0006_2",
      "description": "Deals 1320% + 1000 magic damage to the nearest enemy and inflicts Water DEF -30% for 10 seconds and Fire DEF -30% for 10 seconds",
      "effect": "1320% + 1000",
      "buffEffects": [
        {
          "name": "Water DEF DOWN",
          "value": "-30%",
          "type": "debuff",
          "duration": 10
        },
        {
          "name": "Fire DEF DOWN",
          "value": "-30%",
          "type": "debuff",
          "duration": 10
        }
      ]
    },
    {
      "rank": 3,
      "name": "Arabian Night Sky",
      "icon": "skill001/skill0006_3",
      "description": "Deals 1500% + 1150 magic damage to the nearest enemy and inflicts Water DEF -34% for 10 seconds and Fire DEF -34% for 10 seconds",
      "effect": "1500% + 1150",
      "buffEffects": [
        {
          "name": "Water DEF DOWN",
          "value": "-34%",
          "type": "debuff",
          "duration": 10
        },
        {
          "name": "Fire DEF DOWN",
          "value": "-34%",
          "type": "debuff",
          "duration": 10
        }
      ]
    },
    {
      "rank": 4,
      "name": "Arabian Night Sky",
      "icon": "skill001/skill0006_4",
      "description": "Deals 1610% + 1250 magic damage to the nearest enemy and inflicts Water DEF -37% for 10 seconds and Fire DEF -37% for 10 seconds",
      "effect": "1610% + 1250",
      "buffEffects": [
        {
          "name": "Water DEF DOWN",
          "value": "-37%",
          "type": "debuff",
          "duration": 10
        },
        {
          "name": "Fire DEF DOWN",
          "value": "-37%",
          "type": "debuff",
          "duration": 10
        }
      ]
    },
    {
      "rank": 5,
      "name": "Arabian Night Sky",
      "icon": "skill001/skill0006_5",
      "description": "Deals 1670% + 1300 magic damage to the nearest enemy and inflicts Water DEF -40% for 10 seconds and Fire DEF -40% for 10 seconds",
      "effect": "1670% + 1300",
      "buffEffects": [
        {
          "name": "Water DEF DOWN",
          "value": "-40%",
          "type": "debuff",
          "duration": 10
        },
        {
          "name": "Fire DEF DOWN",
          "value": "-40%",
          "type": "debuff",
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
      "effects": [
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
      ],
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
      "effects": [
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
      ],
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
  "element": "Water",
  "role": "Attacker",
  "tags": [
    "Buff",
    "Debuff",
    "Disrupt"
  ],
  "baseStats": {
    "HP": 2092,
    "ATK": 157,
    "MATK": 261,
    "DEF": 32,
    "MDEF": 82
  },
  "skillRotation": {
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Skill2 \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% MATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "lapis"
};
