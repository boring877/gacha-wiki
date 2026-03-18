// Skills data for Azura
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Great Cleave",
      "icon": "skill001/skill0007",
      "description": "Deals 3812 (ATK x 2.7 + 1455) physical damage to the nearest enemy and inflicts Physical Attack -9%+-200DOWN for 8 seconds and Physical Defense -18%+-210DOWN for 8 seconds",
      "descriptionLv1": "Deals 589 (ATK x 2.7 + 120) physical damage to the nearest enemy and inflicts Physical Attack -9%+-20DOWN for 8 seconds and Physical Defense -18%+-30DOWN for 8 seconds",
      "descriptionLv90": "Deals 3812 (ATK x 2.7 + 1455) physical damage to the nearest enemy and inflicts Physical Attack -9%+-200DOWN for 8 seconds and Physical Defense -18%+-210DOWN for 8 seconds",
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
          "name": "Physical Critical Damage+ Ultimate Lv2",
          "value": 350,
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
          "name": "Physical Critical Damage+ Ultimate Lv3",
          "value": 400,
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
          "name": "Physical Critical Damage+ Ultimate Lv4",
          "value": 450,
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
          "name": "Physical Critical Damage+ Ultimate Lv5",
          "value": 500,
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
    "opening": "Skill3 \u2192 Skill2 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "sr-azura"
};
