// Springseek Coronis Character Data - Stella Sora
// Terra variant of Coronis - Versatile Ranged character with poison potions

export const SpringseekCoronis = {
  "id": 159,
  "name": "Springseek Coronis",
  "icon": "/stella/assets/SpringseekCoronis.png",
  "portrait": "/stella/assets/SpringseekCoronis_portrait.png",
  "background": "/stella/assets/SpringseekCoronis_background.png",
  "variants": {
    "base": "/stella/assets/SpringseekCoronis_base.png",
    "q": "/stella/assets/SpringseekCoronis_q.png",
    "gd": "/stella/assets/SpringseekCoronis_gd.png",
    "goods": "/stella/assets/SpringseekCoronis_goods.png",
    "qs": "/stella/assets/SpringseekCoronis_qs.png",
    "xl": "/stella/assets/SpringseekCoronis_xl.png",
    "gc": "/stella/assets/SpringseekCoronis_gc.png",
    "sk": "/stella/assets/SpringseekCoronis_portrait.png",
    "xxl": "/stella/assets/SpringseekCoronis.png",
    "qm": "/stella/assets/SpringseekCoronis_qm.png",
    "l": "/stella/assets/SpringseekCoronis_l.png",
    "s": "/stella/assets/SpringseekCoronis_s.png"
  },
  "description": "Clad in traditional Loong attire, Coronis is enjoying her vacation in Cangwu. Her carefully brewed potions are a testament to her intense \"affection.\"",
  "voiceActor": {
    "cn": "Zhou Yuhan",
    "cnLocalized": "周语晗",
    "jp": "Yuka Saito",
    "jpLocalized": "斉藤佑圭"
  },
  "birthday": "10.15",
  "grade": 5,
  "element": "Terra",
  "position": "Versatile",
  "attackType": "Ranged",
  "style": "Collector",
  "faction": "Freelance Trekker",
  "tags": [
    "Versatile",
    "Collector",
    "Freelance Trekker"
  ],
  "dateEvents": [],
  "giftPreferences": {
    "loves": [],
    "hates": []
  },
  "normalAttack": {
    "name": "Peaceful Needles",
    "icon": "Icon/Skill/15901_Normal",
    "description": "Continuously fires liquid potions, dealing DMG. Each shot deals <color=#ec6d21>&Param1& of ATK</color> as Terra DMG. Magazine capacity: 15.",
    "shortDescription": "Fires liquid potions continuously, dealing Terra damage.",
    "params": [],
    "hints": {}
  },
  "skill": {
    "name": "Jade Blooms in Spring",
    "icon": "Icon/Skill/15901_Skill_Main",
    "description": "Deals DMG to targets in front, then scatters 1 \"Omen\": continuously fires beams, dealing continuous DMG. When casting Main Skill, enters \"Crystalline State\". The Main Skill and \"Omen\" can trigger ##Terra Mark#1020#.",
    "shortDescription": "Shoots forward dealing damage, then creates an Omen that fires beams continuously. Enters Crystalline State when casting.",
    "params": [],
    "hints": {
      "1020": {
        "id": 1020,
        "name": "Terra Mark",
        "description": "A special status applied to the target by some Terra Trekkers. Can be triggered by specific attacks to deal additional Terra damage."
      }
    },
    "cooldown": "14s"
  },
  "supportSkill": {
    "name": "Blossoming Impact",
    "icon": "Icon/Skill/15901_Skill_Support",
    "description": "Throws 6 \"Rose Potions\" and 1 \"Withered Potion\". \"Rose Potion\": Deals continuous DMG. \"Withered Potion\": Deals continuous DMG and applies \"Wither Effect\": when fully stacked, deals DMG and clears stacks.",
    "shortDescription": "Throws multiple Rose Potions and one Withered Potion that deal continuous damage and apply Wither Effect.",
    "params": [],
    "hints": {},
    "cooldown": "12s"
  },
  "ultimate": {
    "name": "Welcoming Spring · Fireworks Display",
    "icon": "Icon/Skill/15901_Ultra",
    "description": "Detonates the potion bottles in the air, dealing DMG, followed by scattered crystals dealing additional DMG.",
    "shortDescription": "Detonates airborne potions dealing damage, followed by scattered crystals dealing additional damage.",
    "params": [],
    "hints": {},
    "cooldown": "30s",
    "energy": 275
  },
  "talents": [
    {
      "name": "Guiding Lanterns",
      "talents": [
        {
          "name": "Guiding Lanterns",
          "description": "When Springseek Coronis deals Skill DMG, increases the target's Terra DMG Taken by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": ["4.7%", "12", "3"]
        },
        { "name": "ATK Enhancement", "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.", "params": ["50"] },
        { "name": "DEF Enhancement", "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.", "params": ["10"] },
        { "name": "HP Enhancement", "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.", "params": ["575"] },
        { "name": "ATK Enhancement", "description": "Increases ATK by <color=#0abec5>&Param1&</color>.", "params": ["1.5%"] },
        { "name": "Terra DMG Boost", "description": "Increases Terra DMG by <color=#0abec5>&Param1&</color>.", "params": ["1.5%"] },
        { "name": "ATK Enhancement", "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.", "params": ["50"] },
        { "name": "DEF Enhancement", "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.", "params": ["10"] },
        { "name": "HP Enhancement", "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.", "params": ["575"] },
        { "name": "ATK Enhancement", "description": "Increases ATK by <color=#0abec5>&Param1&</color>.", "params": ["1.5%"] },
        { "name": "Terra DMG Boost", "description": "Increases Terra DMG by <color=#0abec5>&Param1&</color>.", "params": ["1.5%"] }
      ]
    },
    {
      "name": "Eternal Flame",
      "talents": [
        {
          "name": "Eternal Flame",
          "description": "When any Trekker inflicts ##Terra Mark#1020# on a target, increases Springseek Coronis's Skill DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": ["28.5%", "6"]
        },
        { "name": "ATK Enhancement", "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.", "params": ["50"] },
        { "name": "DEF Enhancement", "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.", "params": ["10"] },
        { "name": "HP Enhancement", "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.", "params": ["575"] },
        { "name": "ATK Enhancement", "description": "Increases ATK by <color=#0abec5>&Param1&</color>.", "params": ["1.5%"] },
        { "name": "Terra DMG Boost", "description": "Increases Terra DMG by <color=#0abec5>&Param1&</color>.", "params": ["1.5%"] },
        { "name": "ATK Enhancement", "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.", "params": ["50"] },
        { "name": "DEF Enhancement", "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.", "params": ["10"] },
        { "name": "HP Enhancement", "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.", "params": ["575"] },
        { "name": "ATK Enhancement", "description": "Increases ATK by <color=#0abec5>&Param1&</color>.", "params": ["1.5%"] },
        { "name": "Terra DMG Boost", "description": "Increases Terra DMG by <color=#0abec5>&Param1&</color>.", "params": ["1.5%"] }
      ]
    },
    {
      "name": "Magical Touch",
      "talents": [
        {
          "name": "Magical Touch",
          "description": "When Springseek Coronis deals Ultimate DMG, increases the target's Terra DMG Taken by <color=#0abec5>&Param1&</color> for &Param2&s, stacking up to &Param3& times.",
          "params": ["3.5%", "20", "6"]
        },
        { "name": "ATK Enhancement", "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.", "params": ["50"] },
        { "name": "DEF Enhancement", "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.", "params": ["10"] },
        { "name": "HP Enhancement", "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.", "params": ["575"] },
        { "name": "ATK Enhancement", "description": "Increases ATK by <color=#0abec5>&Param1&</color>.", "params": ["1.5%"] },
        { "name": "Terra DMG Boost", "description": "Increases Terra DMG by <color=#0abec5>&Param1&</color>.", "params": ["1.5%"] },
        { "name": "ATK Enhancement", "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.", "params": ["50"] },
        { "name": "DEF Enhancement", "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.", "params": ["10"] },
        { "name": "HP Enhancement", "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.", "params": ["575"] },
        { "name": "ATK Enhancement", "description": "Increases ATK by <color=#0abec5>&Param1&</color>.", "params": ["1.5%"] },
        { "name": "Terra DMG Boost", "description": "Increases Terra DMG by <color=#0abec5>&Param1&</color>.", "params": ["1.5%"] }
      ]
    },
    {
      "name": "Healing Auspice",
      "talents": [
        {
          "name": "Healing Auspice",
          "description": "When Springseek Coronis casts a skill, increases Skill DMG by <color=#0abec5>&Param1&</color> for &Param2&s.",
          "params": ["34%", "10"]
        },
        { "name": "ATK Enhancement", "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.", "params": ["50"] },
        { "name": "DEF Enhancement", "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.", "params": ["10"] },
        { "name": "HP Enhancement", "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.", "params": ["575"] },
        { "name": "ATK Enhancement", "description": "Increases ATK by <color=#0abec5>&Param1&</color>.", "params": ["1.5%"] },
        { "name": "Terra DMG Boost", "description": "Increases Terra DMG by <color=#0abec5>&Param1&</color>.", "params": ["1.5%"] },
        { "name": "ATK Enhancement", "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.", "params": ["50"] },
        { "name": "DEF Enhancement", "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.", "params": ["10"] },
        { "name": "HP Enhancement", "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.", "params": ["575"] },
        { "name": "ATK Enhancement", "description": "Increases ATK by <color=#0abec5>&Param1&</color>.", "params": ["1.5%"] },
        { "name": "Terra DMG Boost", "description": "Increases Terra DMG by <color=#0abec5>&Param1&</color>.", "params": ["1.5%"] }
      ]
    },
    {
      "name": "Fresh Start",
      "talents": [
        {
          "name": "Fresh Start",
          "description": "Increases Springseek Coronis's Terra DMG to elite or higher-tier targets by <color=#0abec5>&Param1&</color>.",
          "params": ["24%"]
        },
        { "name": "ATK Enhancement", "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.", "params": ["50"] },
        { "name": "DEF Enhancement", "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.", "params": ["10"] },
        { "name": "HP Enhancement", "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.", "params": ["575"] },
        { "name": "ATK Enhancement", "description": "Increases ATK by <color=#0abec5>&Param1&</color>.", "params": ["1.5%"] },
        { "name": "Terra DMG Boost", "description": "Increases Terra DMG by <color=#0abec5>&Param1&</color>.", "params": ["1.5%"] },
        { "name": "ATK Enhancement", "description": "Increases Base ATK by <color=#0abec5>&Param1&</color>.", "params": ["50"] },
        { "name": "DEF Enhancement", "description": "Increases Base DEF by <color=#0abec5>&Param1&</color>.", "params": ["10"] },
        { "name": "HP Enhancement", "description": "Increases Base HP by <color=#0abec5>&Param1&</color>.", "params": ["575"] },
        { "name": "ATK Enhancement", "description": "Increases ATK by <color=#0abec5>&Param1&</color>.", "params": ["1.5%"] },
        { "name": "Terra DMG Boost", "description": "Increases Terra DMG by <color=#0abec5>&Param1&</color>.", "params": ["1.5%"] }
      ]
    }
  ],
  "stats": [
    { "hp": 788, "atk": 114 },
    { "hp": 1025, "atk": 148 },
    { "hp": 1262, "atk": 182 },
    { "hp": 1498, "atk": 216 },
    { "hp": 1735, "atk": 250 },
    { "hp": 1971, "atk": 284 },
    { "hp": 2208, "atk": 318 },
    { "hp": 2444, "atk": 352 },
    { "hp": 2681, "atk": 386 },
    { "hp": 2917, "atk": 420 },
    { "hp": 3501, "atk": 504 },
    { "hp": 3737, "atk": 538 },
    { "hp": 3974, "atk": 572 },
    { "hp": 4210, "atk": 606 },
    { "hp": 4447, "atk": 640 },
    { "hp": 4684, "atk": 674 },
    { "hp": 4920, "atk": 708 },
    { "hp": 5157, "atk": 742 },
    { "hp": 5393, "atk": 776 },
    { "hp": 5630, "atk": 811 },
    { "hp": 5866, "atk": 845 },
    { "hp": 7041, "atk": 1014 },
    { "hp": 7278, "atk": 1048 },
    { "hp": 7514, "atk": 1082 },
    { "hp": 7751, "atk": 1116 },
    { "hp": 7987, "atk": 1150 },
    { "hp": 8224, "atk": 1184 },
    { "hp": 8460, "atk": 1218 },
    { "hp": 8697, "atk": 1252 },
    { "hp": 8933, "atk": 1286 },
    { "hp": 9170, "atk": 1320 },
    { "hp": 9407, "atk": 1354 },
    { "hp": 11291, "atk": 1626 },
    { "hp": 11528, "atk": 1660 },
    { "hp": 11764, "atk": 1694 },
    { "hp": 12001, "atk": 1728 },
    { "hp": 12238, "atk": 1762 },
    { "hp": 12474, "atk": 1796 },
    { "hp": 12711, "atk": 1830 },
    { "hp": 12948, "atk": 1864 },
    { "hp": 13184, "atk": 1898 },
    { "hp": 13421, "atk": 1932 },
    { "hp": 15821, "atk": 2274 },
    { "hp": 16221, "atk": 2331 },
    { "hp": 16621, "atk": 2388 },
    { "hp": 17021, "atk": 2445 },
    { "hp": 17421, "atk": 2502 },
    { "hp": 17821, "atk": 2559 },
    { "hp": 18221, "atk": 2616 },
    { "hp": 18621, "atk": 2673 },
    { "hp": 19021, "atk": 2730 },
    { "hp": 19421, "atk": 2787 },
    { "hp": 23453, "atk": 3345 },
    { "hp": 24081, "atk": 3423 },
    { "hp": 24709, "atk": 3501 },
    { "hp": 25337, "atk": 3579 },
    { "hp": 25965, "atk": 3657 },
    { "hp": 26593, "atk": 3735 },
    { "hp": 27221, "atk": 3813 },
    { "hp": 27849, "atk": 3891 },
    { "hp": 28477, "atk": 3969 },
    { "hp": 29105, "atk": 4047 },
    { "hp": 34924, "atk": 4857 },
    { "hp": 35879, "atk": 4961 },
    { "hp": 36834, "atk": 5065 },
    { "hp": 37789, "atk": 5169 },
    { "hp": 38744, "atk": 5273 },
    { "hp": 39699, "atk": 5377 },
    { "hp": 40654, "atk": 5481 },
    { "hp": 41609, "atk": 5585 },
    { "hp": 42564, "atk": 5689 },
    { "hp": 43845, "atk": 5997 },
    { "hp": 44231, "atk": 6035 },
    { "hp": 44618, "atk": 6073 }
  ],
  "upgrades": [],
  "skillUpgrades": []
};
