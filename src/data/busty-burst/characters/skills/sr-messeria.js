// Skills data for Messeria
// Auto-extracted from character-skills-full.js

export const skills = {
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
          "name": "Burn Ultimate Lv2",
          "value": -2000,
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
          "name": "Burn Ultimate Lv3",
          "value": -2400,
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
          "name": "Burn Ultimate Lv4",
          "value": -2700,
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
    "opening": "Skill2 \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic"
  },
  "basicAttack": {
    "icon": "skill001/skill0001",
    "type": "Physical",
    "scaling": "110% ATK",
    "speedLabel": "Fast",
    "speedValue": "0.61"
  },
  "slug": "sr-messeria"
};
