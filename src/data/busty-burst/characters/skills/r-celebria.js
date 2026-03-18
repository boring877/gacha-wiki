// Skills data for Celebria
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Curient Kon Lemolinos",
      "icon": "skill001/skill0008",
      "description": "Deals 3999 (MATK x 2.2 + 1524) magic damage to the enemy with the highest Magical ATK and inflicts Magic Attack -9%+-200DOWN for 8 seconds",
      "descriptionLv1": "Deals 595 (MATK x 2.2 + 100) magic damage to the enemy with the highest Magical ATK and inflicts Magic Attack -9%+-20DOWN for 8 seconds",
      "descriptionLv90": "Deals 3999 (MATK x 2.2 + 1524) magic damage to the enemy with the highest Magical ATK and inflicts Magic Attack -9%+-200DOWN for 8 seconds",
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
      "name": "Sea\u2019s Love that Leads to Calamity",
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
      "name": "Sea\u2019s Love that Leads to Calamity",
      "icon": "skill001/skill0006_2",
      "description": "Deals 3756 (MATK x 3.0 + 381) magic damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV2) for 8 seconds",
      "effect": "300% + 381",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -10,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Sea\u2019s Love that Leads to Calamity",
      "icon": "skill001/skill0006_3",
      "description": "Deals 4365 (MATK x 3.5 + 428) magic damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV3) for 8 seconds",
      "effect": "350% + 428",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -12,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Sea\u2019s Love that Leads to Calamity",
      "icon": "skill001/skill0006_4",
      "description": "Deals 4796 (MATK x 3.85 + 465) magic damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV4) for 8 seconds",
      "effect": "385% + 465",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -14,
          "type": "percent",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Sea\u2019s Love that Leads to Calamity",
      "icon": "skill001/skill0006_5",
      "description": "Deals 5788 (MATK x 4.7 + 501) magic damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV5) for 8 seconds",
      "effect": "470% + 501",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv5",
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
    "opening": "Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3 \u2192 Basic",
    "loop": "Basic \u2192 Basic \u2192 Skill2 \u2192 Basic \u2192 Basic \u2192 Basic \u2192 Skill3"
  },
  "basicAttack": {
    "icon": "skill001/skill0004",
    "type": "Magic",
    "scaling": "100% ATK",
    "speedLabel": "Very Slow",
    "speedValue": "1.36"
  },
  "slug": "r-celebria"
};
