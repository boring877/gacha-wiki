// Skills data for Lucie
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Grand Whirlwind Slash",
      "icon": "skill001/skill0007",
      "description": "Deals 2531 (ATK x 0.9 + 792) physical damage to the 3 nearest enemies and inflicts Physical Defense -23%+-320DOWN for 7 seconds and absorbs  of the damage dealt to restore own HP",
      "descriptionLv1": "Deals 427 (ATK x 0.9 + 80) physical damage to the 3 nearest enemies and inflicts Physical Defense -23%+-50DOWN for 7 seconds and absorbs  of the damage dealt to restore own HP",
      "descriptionLv90": "Deals 2531 (ATK x 0.9 + 792) physical damage to the 3 nearest enemies and inflicts Physical Defense -23%+-320DOWN for 7 seconds and absorbs  of the damage dealt to restore own HP",
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
          "valueLv1": -23,
          "valueLv90": -23,
          "flatBonus": -50,
          "flatBonusLv1": -50,
          "flatBonusLv90": -320,
          "type": "debuff",
          "duration": 7,
          "displayFormat": "% + flat"
        }
      ],
      "duration": 7
    },
    {
      "slot": 3,
      "name": "Wind Spirit, Grant Me Protection",
      "icon": "skill001/skill0019",
      "description": "Applies Action Speed 17%UP to self for 10 seconds and Block+11 for 10 seconds",
      "descriptionLv1": "Applies Action Speed 17%UP to self for 10 seconds and Block+11 for 10 seconds",
      "descriptionLv90": "Applies Action Speed 17%UP to self for 10 seconds and Block+22.7 for 10 seconds",
      "target": "Self",
      "castTime": 1.58,
      "damageScaling": null,
      "baseDamage": null,
      "levelGrowth": null,
      "lvl1": null,
      "lvl90": null,
      "baseValue": 11,
      "valueLv90": 22.7,
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
          "valueLv1": 11,
          "valueLv90": 22.7,
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
          "name": "Action Speed - Ultimate Lv2",
          "value": -10,
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
          "name": "Action Speed - Ultimate Lv3",
          "value": -12,
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
          "name": "Action Speed - Ultimate Lv4",
          "value": -14,
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
          "name": "Action Speed - Ultimate Lv5",
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
    "opening": "Skill2 \u2192 Skill1 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Skill1 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Skill1 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "ssr-lucie"
};
