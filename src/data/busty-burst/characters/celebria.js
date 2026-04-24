// Character data: celebria
// Auto-generated from game data

export const info = {
  'slug': 'celebria',
  'name': 'Celebria',
};












































export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "Curient Kon Lemolinos",
      "icon": "skill001/skill0008",
      "description": "Deals magic damage to the enemy with the highest Magical ATK and inflicts Magic Attack -9%-20 DOWN for 8 seconds",
      "descriptionLv1": "Deals magic damage to the enemy with the highest Magical ATK and inflicts Magic Attack -9%-20 DOWN for 8 seconds",
      "descriptionLv90": "Deals magic damage to the enemy with the highest Magical ATK and inflicts Magic Attack -9%-200 DOWN for 8 seconds",
      "target": "Highest Mag ATK Enemy",
      "castTime": 1.78,
      "damageScaling": "220% ATK",
      "baseDamage": "+100",
      "levelGrowth": "+16",
      "lvl1": "220% + 100",
      "lvl90": "220% + -78",
      "effects": [
        "Magic Attack - Lv3"
      ],
      "buffEffects": [
        {
          "name": "Magic Attack - Lv3",
          "value": -20,
          "type": "flat",
          "duration": 8,
          "levelGrowth": -2.0
        }
      ],
      "duration": 8
    },
    {
      "slot": 3,
      "name": "Abresa El Agua",
      "icon": "skill001/skill0021",
      "description": "Restores own HP by and inflicts Block 9 UP for 8 seconds",
      "descriptionLv1": "Restores own HP by and inflicts Block 9 UP for 8 seconds",
      "descriptionLv90": "Restores own HP by and inflicts Block 18 UP for 8 seconds",
      "target": "Self",
      "castTime": 1.78,
      "damageScaling": "2203% ATK",
      "baseDamage": "+1010",
      "levelGrowth": "+50",
      "lvl1": "2203% + 1010",
      "lvl90": "2203% + 1018",
      "effects": [
        "Block+ Lv3"
      ],
      "buffEffects": [
        {
          "name": "Block+ Lv3",
          "value": 9,
          "type": "flat",
          "duration": 8,
          "levelGrowth": 0.1
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
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV 1) for 8 seconds",
      "effect": "240% + 329",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv1",
          "value": -8,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 2,
      "name": "Sea’s Love that Leads to Calamity",
      "icon": "skill001/skill0006_2",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV 2) for 8 seconds",
      "effect": "300% + 381",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv2",
          "value": -10,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 3,
      "name": "Sea’s Love that Leads to Calamity",
      "icon": "skill001/skill0006_3",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV 3) for 8 seconds",
      "effect": "350% + 428",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv3",
          "value": -12,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 4,
      "name": "Sea’s Love that Leads to Calamity",
      "icon": "skill001/skill0006_4",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV 4) for 8 seconds",
      "effect": "385% + 465",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv4",
          "value": -14,
          "type": "flat",
          "duration": 8
        }
      ]
    },
    {
      "rank": 5,
      "name": "Sea’s Love that Leads to Calamity",
      "icon": "skill001/skill0006_5",
      "description": "Deals magic damage to the 3 nearest enemies and inflicts Action Speed DOWN(LV 5) for 8 seconds",
      "effect": "470% + 501",
      "buffEffects": [
        {
          "name": "Action Speed - Ultimate Lv5",
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
  "slug": "celebria"
};

export const stats = { 'id': 'celebria' };
