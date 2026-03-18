// Skills data for 【Magical Princess】Luceria
// Auto-extracted from character-skills-full.js

export const skills = {
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
          "valueLv1": -200,
          "valueLv90": -1980,
          "type": "flat",
          "duration": 10
        },
        {
          "name": "Block- Lv4",
          "value": -11,
          "valueLv1": -11,
          "valueLv90": -23,
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
          "name": "Burn Ultimate Lv2",
          "value": -2000,
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
          "name": "Burn Ultimate Lv3",
          "value": -2400,
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
          "name": "Burn Ultimate Lv4",
          "value": -2700,
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
          "name": "Burn Ultimate Lv5",
          "value": -3000,
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
  "name": "\u3010Magical Princess\u3011Luceria",
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
    "opening": "Skill2 \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "120% ATK",
    "speedLabel": "Normal",
    "speedValue": "0.86"
  },
  "slug": "magical-princess-luceria"
};
