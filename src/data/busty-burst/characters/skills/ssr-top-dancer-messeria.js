// Skills data for 【Top Dancer】Messeria
// Auto-extracted from character-skills-full.js

export const skills = {
  "skills": [
    {
      "slot": 2,
      "name": "\u7dbb\u653e\u82b1\u74e3\u7684\u8ff4\u65cb",
      "icon": "skill001/skill0007",
      "description": "\u6700\u9ad8HP\u76841\u540d\u6575\u4eba\u9020\u62105440 (ATK x 3.0 + 1930)\u7269\u7406\u50b7\u5bb3 and inflicts Block-26DOWN for 10 seconds and Accuracy -23DOWN for 10 seconds",
      "descriptionLv1": "\u6700\u9ad8HP\u76841\u540d\u6575\u4eba\u9020\u6210852 (ATK x 3.0 + 150)\u7269\u7406\u50b7\u5bb3 and inflicts Block-13DOWN for 10 seconds and Accuracy -11DOWN for 10 seconds",
      "descriptionLv90": "\u6700\u9ad8HP\u76841\u540d\u6575\u4eba\u9020\u62105440 (ATK x 3.0 + 1930)\u7269\u7406\u50b7\u5bb3 and inflicts Block-26DOWN for 10 seconds and Accuracy -23DOWN for 10 seconds",
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
      "name": "\u71b1\u5e36\u98a8\u60c5\u7684\u4e9e\u9023\u99ac\u90a3",
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
      "name": "\u8ff7\u4eba\u7684\u821e\u59ff",
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
      "name": "\u8ff7\u4eba\u7684\u821e\u59ff",
      "icon": "skill001/skill0020_2",
      "description": "Applies Magic Critical DamageUP(LV2) to all allies for 12 seconds and Accuracy UP(LV2) for 12 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Magic Critical Damage+ Ultimate Lv2",
          "value": 325,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Accuracy + Ultimate Lv2",
          "value": 13,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 3,
      "name": "\u8ff7\u4eba\u7684\u821e\u59ff",
      "icon": "skill001/skill0020_3",
      "description": "Applies Magic Critical DamageUP(LV3) to all allies for 12 seconds and Accuracy UP(LV3) for 12 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Magic Critical Damage+ Ultimate Lv3",
          "value": 400,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Accuracy + Ultimate Lv3",
          "value": 16,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 4,
      "name": "\u8ff7\u4eba\u7684\u821e\u59ff",
      "icon": "skill001/skill0020_4",
      "description": "Applies Magic Critical DamageUP(LV4) to all allies for 12 seconds and Accuracy UP(LV4) for 12 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Magic Critical Damage+ Ultimate Lv4",
          "value": 450,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Accuracy + Ultimate Lv4",
          "value": 18,
          "type": "flat",
          "duration": 12
        }
      ]
    },
    {
      "rank": 5,
      "name": "\u8ff7\u4eba\u7684\u821e\u59ff",
      "icon": "skill001/skill0020_5",
      "description": "Applies Magic Critical DamageUP(LV5) to all allies for 12 seconds and Accuracy UP(LV5) for 12 seconds",
      "effect": "0% + 0",
      "buffEffects": [
        {
          "name": "Magic Critical Damage+ Ultimate Lv5",
          "value": 500,
          "type": "flat",
          "duration": 12
        },
        {
          "name": "Accuracy + Ultimate Lv5",
          "value": 20,
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
  "name": "\u3010Top Dancer\u3011Messeria",
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
};
